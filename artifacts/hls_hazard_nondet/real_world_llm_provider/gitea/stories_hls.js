// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AcceptLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccept(x.id);
  updateAccept(x.id);
  updateAccept(x.id);
  verifyAcceptExists(x.id);
  verifyAcceptUpdated(x.id);
  deleteAccept(x.id);
});

bthread("ActionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAction(x.id);
  updateAction(x.id);
  updateAction(x.id);
  verifyActionExists(x.id);
  verifyActionUpdated(x.id);
  deleteAction(x.id);
});

bthread("ActivityLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addActivity(x.id);
  updateActivity(x.id);
  updateActivity(x.id);
  verifyActivityExists(x.id);
  verifyActivityUpdated(x.id);
  deleteActivity(x.id);
});

bthread("ActivitypubLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addActivitypub(x.id);
  updateActivitypub(x.id);
  updateActivitypub(x.id);
  verifyActivitypubExists(x.id);
  verifyActivitypubUpdated(x.id);
  deleteActivitypub(x.id);
});

bthread("AdminLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdmin(x.id);
  updateAdmin(x.id);
  updateAdmin(x.id);
  verifyAdminExists(x.id);
  verifyAdminUpdated(x.id);
  deleteAdmin(x.id);
});

bthread("ApiLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApi(x.id);
  updateApi(x.id);
  updateApi(x.id);
  verifyApiExists(x.id);
  verifyApiUpdated(x.id);
  deleteApi(x.id);
});

bthread("ApplicationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApplication(x.id);
  updateApplication(x.id);
  updateApplication(x.id);
  verifyApplicationExists(x.id);
  verifyApplicationUpdated(x.id);
  deleteApplication(x.id);
});

bthread("ArchiveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArchive(x.id);
  updateArchive(x.id);
  updateArchive(x.id);
  verifyArchiveExists(x.id);
  verifyArchiveUpdated(x.id);
  deleteArchive(x.id);
});

bthread("AssetLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAsset(x.id);
  updateAsset(x.id);
  updateAsset(x.id);
  verifyAssetExists(x.id);
  verifyAssetUpdated(x.id);
  deleteAsset(x.id);
});

bthread("AssigneeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignee(x.id);
  updateAssignee(x.id);
  updateAssignee(x.id);
  verifyAssigneeExists(x.id);
  verifyAssigneeUpdated(x.id);
  deleteAssignee(x.id);
});

bthread("AttachmentLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttachment(x.id);
  updateAttachment(x.id);
  updateAttachment(x.id);
  verifyAttachmentExists(x.id);
  verifyAttachmentUpdated(x.id);
  deleteAttachment(x.id);
});

bthread("AvatarLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvatar(x.id);
  updateAvatar(x.id);
  updateAvatar(x.id);
  verifyAvatarExists(x.id);
  verifyAvatarUpdated(x.id);
  deleteAvatar(x.id);
});

bthread("BadgeLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBadge(x.id);
  updateBadge(x.id);
  updateBadge(x.id);
  verifyBadgeExists(x.id);
  verifyBadgeUpdated(x.id);
  deleteBadge(x.id);
});

bthread("BlobLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlob(x.id);
  updateBlob(x.id);
  updateBlob(x.id);
  verifyBlobExists(x.id);
  verifyBlobUpdated(x.id);
  deleteBlob(x.id);
});

bthread("BlockLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlock(x.id);
  updateBlock(x.id);
  updateBlock(x.id);
  verifyBlockExists(x.id);
  verifyBlockUpdated(x.id);
  deleteBlock(x.id);
});

bthread("BrancheLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBranche(x.id);
  updateBranche(x.id);
  updateBranche(x.id);
  verifyBrancheExists(x.id);
  verifyBrancheUpdated(x.id);
  deleteBranche(x.id);
});

bthread("BranchprotectionLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBranchprotection(x.id);
  updateBranchprotection(x.id);
  updateBranchprotection(x.id);
  verifyBranchprotectionExists(x.id);
  verifyBranchprotectionUpdated(x.id);
  deleteBranchprotection(x.id);
});

bthread("CheckLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCheck(x.id);
  updateCheck(x.id);
  updateCheck(x.id);
  verifyCheckExists(x.id);
  verifyCheckUpdated(x.id);
  deleteCheck(x.id);
});

bthread("CollaboratorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCollaborator(x.id);
  updateCollaborator(x.id);
  updateCollaborator(x.id);
  verifyCollaboratorExists(x.id);
  verifyCollaboratorUpdated(x.id);
  deleteCollaborator(x.id);
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComment(x.id);
  updateComment(x.id);
  updateComment(x.id);
  verifyCommentExists(x.id);
  verifyCommentUpdated(x.id);
  deleteComment(x.id);
});

bthread("CommitLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCommit(x.id);
  updateCommit(x.id);
  updateCommit(x.id);
  verifyCommitExists(x.id);
  verifyCommitUpdated(x.id);
  deleteCommit(x.id);
});

bthread("CompareLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCompare(x.id);
  updateCompare(x.id);
  updateCompare(x.id);
  verifyCompareExists(x.id);
  verifyCompareUpdated(x.id);
  deleteCompare(x.id);
});

bthread("ContentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContent(x.id);
  updateContent(x.id);
  updateContent(x.id);
  verifyContentExists(x.id);
  verifyContentUpdated(x.id);
  deleteContent(x.id);
});

bthread("CronLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCron(x.id);
  updateCron(x.id);
  updateCron(x.id);
  verifyCronExists(x.id);
  verifyCronUpdated(x.id);
  deleteCron(x.id);
});

bthread("DeadlineLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeadline(x.id);
  updateDeadline(x.id);
  updateDeadline(x.id);
  verifyDeadlineExists(x.id);
  verifyDeadlineUpdated(x.id);
  deleteDeadline(x.id);
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDelete(x.id);
  updateDelete(x.id);
  updateDelete(x.id);
  verifyDeleteExists(x.id);
  verifyDeleteUpdated(x.id);
  deleteDelete(x.id);
});

bthread("DependencyLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependency(x.id);
  updateDependency(x.id);
  updateDependency(x.id);
  verifyDependencyExists(x.id);
  verifyDependencyUpdated(x.id);
  deleteDependency(x.id);
});

bthread("DiffpatchLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDiffpatch(x.id);
  updateDiffpatch(x.id);
  updateDiffpatch(x.id);
  verifyDiffpatchExists(x.id);
  verifyDiffpatchUpdated(x.id);
  deleteDiffpatch(x.id);
});

bthread("DismissalLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDismissal(x.id);
  updateDismissal(x.id);
  updateDismissal(x.id);
  verifyDismissalExists(x.id);
  verifyDismissalUpdated(x.id);
  deleteDismissal(x.id);
});

bthread("EditorconfigLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEditorconfig(x.id);
  updateEditorconfig(x.id);
  updateEditorconfig(x.id);
  verifyEditorconfigExists(x.id);
  verifyEditorconfigUpdated(x.id);
  deleteEditorconfig(x.id);
});

bthread("EmailLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmail(x.id);
  updateEmail(x.id);
  updateEmail(x.id);
  verifyEmailExists(x.id);
  verifyEmailUpdated(x.id);
  deleteEmail(x.id);
});

bthread("FeedLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFeed(x.id);
  updateFeed(x.id);
  updateFeed(x.id);
  verifyFeedExists(x.id);
  verifyFeedUpdated(x.id);
  deleteFeed(x.id);
});

bthread("FileLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFile(x.id);
  updateFile(x.id);
  updateFile(x.id);
  verifyFileExists(x.id);
  verifyFileUpdated(x.id);
  deleteFile(x.id);
});

bthread("FollowerLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFollower(x.id);
  updateFollower(x.id);
  updateFollower(x.id);
  verifyFollowerExists(x.id);
  verifyFollowerUpdated(x.id);
  deleteFollower(x.id);
});

bthread("FollowingLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFollowing(x.id);
  updateFollowing(x.id);
  updateFollowing(x.id);
  verifyFollowingExists(x.id);
  verifyFollowingUpdated(x.id);
  deleteFollowing(x.id);
});

bthread("ForkLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFork(x.id);
  updateFork(x.id);
  updateFork(x.id);
  verifyForkExists(x.id);
  verifyForkUpdated(x.id);
  deleteFork(x.id);
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerate(x.id);
  updateGenerate(x.id);
  updateGenerate(x.id);
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
  deleteGenerate(x.id);
});

bthread("GitLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGit(x.id);
  updateGit(x.id);
  updateGit(x.id);
  verifyGitExists(x.id);
  verifyGitUpdated(x.id);
  deleteGit(x.id);
});

bthread("GitignoreLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGitignore(x.id);
  updateGitignore(x.id);
  updateGitignore(x.id);
  verifyGitignoreExists(x.id);
  verifyGitignoreUpdated(x.id);
  deleteGitignore(x.id);
});

bthread("GpgkeyLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGpgkey(x.id);
  updateGpgkey(x.id);
  updateGpgkey(x.id);
  verifyGpgkeyExists(x.id);
  verifyGpgkeyUpdated(x.id);
  deleteGpgkey(x.id);
});

bthread("GpgkeytokenLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGpgkeytoken(x.id);
  updateGpgkeytoken(x.id);
  updateGpgkeytoken(x.id);
  verifyGpgkeytokenExists(x.id);
  verifyGpgkeytokenUpdated(x.id);
  deleteGpgkeytoken(x.id);
});

bthread("GpgkeyverifyLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGpgkeyverify(x.id);
  updateGpgkeyverify(x.id);
  updateGpgkeyverify(x.id);
  verifyGpgkeyverifyExists(x.id);
  verifyGpgkeyverifyUpdated(x.id);
  deleteGpgkeyverify(x.id);
});

bthread("HeatmapLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHeatmap(x.id);
  updateHeatmap(x.id);
  updateHeatmap(x.id);
  verifyHeatmapExists(x.id);
  verifyHeatmapUpdated(x.id);
  deleteHeatmap(x.id);
});

bthread("HookLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHook(x.id);
  updateHook(x.id);
  updateHook(x.id);
  verifyHookExists(x.id);
  verifyHookUpdated(x.id);
  deleteHook(x.id);
});

bthread("InboxLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInbox(x.id);
  updateInbox(x.id);
  updateInbox(x.id);
  verifyInboxExists(x.id);
  verifyInboxUpdated(x.id);
  deleteInbox(x.id);
});

bthread("IssueLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssue(x.id);
  updateIssue(x.id);
  updateIssue(x.id);
  verifyIssueExists(x.id);
  verifyIssueUpdated(x.id);
  deleteIssue(x.id);
});

bthread("IssueconfigLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssueconfig(x.id);
  updateIssueconfig(x.id);
  updateIssueconfig(x.id);
  verifyIssueconfigExists(x.id);
  verifyIssueconfigUpdated(x.id);
  deleteIssueconfig(x.id);
});

bthread("IssuetemplateLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetemplate(x.id);
  updateIssuetemplate(x.id);
  updateIssuetemplate(x.id);
  verifyIssuetemplateExists(x.id);
  verifyIssuetemplateUpdated(x.id);
  deleteIssuetemplate(x.id);
});

bthread("KeyLifecycle", function () {
  const x = pick([{id: "K001"}, {id: "K002"}]);
  addKey(x.id);
  updateKey(x.id);
  updateKey(x.id);
  verifyKeyExists(x.id);
  verifyKeyUpdated(x.id);
  deleteKey(x.id);
});

bthread("LabelLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLabel(x.id);
  updateLabel(x.id);
  updateLabel(x.id);
  verifyLabelExists(x.id);
  verifyLabelUpdated(x.id);
  deleteLabel(x.id);
});

bthread("LanguageLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLanguage(x.id);
  updateLanguage(x.id);
  updateLanguage(x.id);
  verifyLanguageExists(x.id);
  verifyLanguageUpdated(x.id);
  deleteLanguage(x.id);
});

bthread("LatestLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLatest(x.id);
  updateLatest(x.id);
  updateLatest(x.id);
  verifyLatestExists(x.id);
  verifyLatestUpdated(x.id);
  deleteLatest(x.id);
});

bthread("LicensLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLicens(x.id);
  updateLicens(x.id);
  updateLicens(x.id);
  verifyLicensExists(x.id);
  verifyLicensUpdated(x.id);
  deleteLicens(x.id);
});

bthread("MarkdownLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkdown(x.id);
  updateMarkdown(x.id);
  updateMarkdown(x.id);
  verifyMarkdownExists(x.id);
  verifyMarkdownUpdated(x.id);
  deleteMarkdown(x.id);
});

bthread("MarkupLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkup(x.id);
  updateMarkup(x.id);
  updateMarkup(x.id);
  verifyMarkupExists(x.id);
  verifyMarkupUpdated(x.id);
  deleteMarkup(x.id);
});

bthread("MediaLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMedia(x.id);
  updateMedia(x.id);
  updateMedia(x.id);
  verifyMediaExists(x.id);
  verifyMediaUpdated(x.id);
  deleteMedia(x.id);
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMember(x.id);
  updateMember(x.id);
  updateMember(x.id);
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
  deleteMember(x.id);
});

bthread("MergeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMerge(x.id);
  updateMerge(x.id);
  updateMerge(x.id);
  verifyMergeExists(x.id);
  verifyMergeUpdated(x.id);
  deleteMerge(x.id);
});

bthread("MergeupstreamLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMergeupstream(x.id);
  updateMergeupstream(x.id);
  updateMergeupstream(x.id);
  verifyMergeupstreamExists(x.id);
  verifyMergeupstreamUpdated(x.id);
  deleteMergeupstream(x.id);
});

bthread("MigrateLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMigrate(x.id);
  updateMigrate(x.id);
  updateMigrate(x.id);
  verifyMigrateExists(x.id);
  verifyMigrateUpdated(x.id);
  deleteMigrate(x.id);
});

bthread("MilestoneLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMilestone(x.id);
  updateMilestone(x.id);
  updateMilestone(x.id);
  verifyMilestoneExists(x.id);
  verifyMilestoneUpdated(x.id);
  deleteMilestone(x.id);
});

bthread("MirrorsyncLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMirrorsync(x.id);
  updateMirrorsync(x.id);
  updateMirrorsync(x.id);
  verifyMirrorsyncExists(x.id);
  verifyMirrorsyncUpdated(x.id);
  deleteMirrorsync(x.id);
});

bthread("NewLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNew(x.id);
  updateNew(x.id);
  updateNew(x.id);
  verifyNewExists(x.id);
  verifyNewUpdated(x.id);
  deleteNew(x.id);
});

bthread("NewpinallowedLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNewpinallowed(x.id);
  updateNewpinallowed(x.id);
  updateNewpinallowed(x.id);
  verifyNewpinallowedExists(x.id);
  verifyNewpinallowedUpdated(x.id);
  deleteNewpinallowed(x.id);
});

bthread("NodeinfoLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNodeinfo(x.id);
  updateNodeinfo(x.id);
  updateNodeinfo(x.id);
  verifyNodeinfoExists(x.id);
  verifyNodeinfoUpdated(x.id);
  deleteNodeinfo(x.id);
});

bthread("NoteLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNote(x.id);
  updateNote(x.id);
  updateNote(x.id);
  verifyNoteExists(x.id);
  verifyNoteUpdated(x.id);
  deleteNote(x.id);
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotification(x.id);
  updateNotification(x.id);
  updateNotification(x.id);
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
  deleteNotification(x.id);
});

bthread("Oauth2Lifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOauth2(x.id);
  updateOauth2(x.id);
  updateOauth2(x.id);
  verifyOauth2Exists(x.id);
  verifyOauth2Updated(x.id);
  deleteOauth2(x.id);
});

bthread("OrgLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrg(x.id);
  updateOrg(x.id);
  updateOrg(x.id);
  verifyOrgExists(x.id);
  verifyOrgUpdated(x.id);
  deleteOrg(x.id);
});

bthread("PackageLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPackage(x.id);
  updatePackage(x.id);
  updatePackage(x.id);
  verifyPackageExists(x.id);
  verifyPackageUpdated(x.id);
  deletePackage(x.id);
});

bthread("PageLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPage(x.id);
  updatePage(x.id);
  updatePage(x.id);
  verifyPageExists(x.id);
  verifyPageUpdated(x.id);
  deletePage(x.id);
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermission(x.id);
  updatePermission(x.id);
  updatePermission(x.id);
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
  deletePermission(x.id);
});

bthread("PinLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPin(x.id);
  updatePin(x.id);
  updatePin(x.id);
  verifyPinExists(x.id);
  verifyPinUpdated(x.id);
  deletePin(x.id);
});

bthread("PinnedLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPinned(x.id);
  updatePinned(x.id);
  updatePinned(x.id);
  verifyPinnedExists(x.id);
  verifyPinnedUpdated(x.id);
  deletePinned(x.id);
});

bthread("PriorityLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPriority(x.id);
  updatePriority(x.id);
  updatePriority(x.id);
  verifyPriorityExists(x.id);
  verifyPriorityUpdated(x.id);
  deletePriority(x.id);
});

bthread("PublicmemberLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublicmember(x.id);
  updatePublicmember(x.id);
  updatePublicmember(x.id);
  verifyPublicmemberExists(x.id);
  verifyPublicmemberUpdated(x.id);
  deletePublicmember(x.id);
});

bthread("PullLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPull(x.id);
  updatePull(x.id);
  updatePull(x.id);
  verifyPullExists(x.id);
  verifyPullUpdated(x.id);
  deletePull(x.id);
});

bthread("PushmirrorLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPushmirror(x.id);
  updatePushmirror(x.id);
  updatePushmirror(x.id);
  verifyPushmirrorExists(x.id);
  verifyPushmirrorUpdated(x.id);
  deletePushmirror(x.id);
});

bthread("PushmirrorssyncLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPushmirrorssync(x.id);
  updatePushmirrorssync(x.id);
  updatePushmirrorssync(x.id);
  verifyPushmirrorssyncExists(x.id);
  verifyPushmirrorssyncUpdated(x.id);
  deletePushmirrorssync(x.id);
});

bthread("RawLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRaw(x.id);
  updateRaw(x.id);
  updateRaw(x.id);
  verifyRawExists(x.id);
  verifyRawUpdated(x.id);
  deleteRaw(x.id);
});

bthread("ReactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReaction(x.id);
  updateReaction(x.id);
  updateReaction(x.id);
  verifyReactionExists(x.id);
  verifyReactionUpdated(x.id);
  deleteReaction(x.id);
});

bthread("RefLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRef(x.id);
  updateRef(x.id);
  updateRef(x.id);
  verifyRefExists(x.id);
  verifyRefUpdated(x.id);
  deleteRef(x.id);
});

bthread("RegistrationtokenLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegistrationtoken(x.id);
  updateRegistrationtoken(x.id);
  updateRegistrationtoken(x.id);
  verifyRegistrationtokenExists(x.id);
  verifyRegistrationtokenUpdated(x.id);
  deleteRegistrationtoken(x.id);
});

bthread("RejectLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReject(x.id);
  updateReject(x.id);
  updateReject(x.id);
  verifyRejectExists(x.id);
  verifyRejectUpdated(x.id);
  deleteReject(x.id);
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReleas(x.id);
  updateReleas(x.id);
  updateReleas(x.id);
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
  deleteReleas(x.id);
});

bthread("RenameLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRename(x.id);
  updateRename(x.id);
  updateRename(x.id);
  verifyRenameExists(x.id);
  verifyRenameUpdated(x.id);
  deleteRename(x.id);
});

bthread("RepoLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepo(x.id);
  updateRepo(x.id);
  updateRepo(x.id);
  verifyRepoExists(x.id);
  verifyRepoUpdated(x.id);
  deleteRepo(x.id);
});

bthread("RepositoryLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepository(x.id);
  updateRepository(x.id);
  updateRepository(x.id);
  verifyRepositoryExists(x.id);
  verifyRepositoryUpdated(x.id);
  deleteRepository(x.id);
});

bthread("RequestedreviewerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequestedreviewer(x.id);
  updateRequestedreviewer(x.id);
  updateRequestedreviewer(x.id);
  verifyRequestedreviewerExists(x.id);
  verifyRequestedreviewerUpdated(x.id);
  deleteRequestedreviewer(x.id);
});

bthread("ReviewLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReview(x.id);
  updateReview(x.id);
  updateReview(x.id);
  verifyReviewExists(x.id);
  verifyReviewUpdated(x.id);
  deleteReview(x.id);
});

bthread("ReviewerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReviewer(x.id);
  updateReviewer(x.id);
  updateReviewer(x.id);
  verifyReviewerExists(x.id);
  verifyReviewerUpdated(x.id);
  deleteReviewer(x.id);
});

bthread("RevisionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRevision(x.id);
  updateRevision(x.id);
  updateRevision(x.id);
  verifyRevisionExists(x.id);
  verifyRevisionUpdated(x.id);
  deleteRevision(x.id);
});

bthread("RunnerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRunner(x.id);
  updateRunner(x.id);
  updateRunner(x.id);
  verifyRunnerExists(x.id);
  verifyRunnerUpdated(x.id);
  deleteRunner(x.id);
});

bthread("SearchLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSearch(x.id);
  updateSearch(x.id);
  updateSearch(x.id);
  verifySearchExists(x.id);
  verifySearchUpdated(x.id);
  deleteSearch(x.id);
});

bthread("SecretLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecret(x.id);
  updateSecret(x.id);
  updateSecret(x.id);
  verifySecretExists(x.id);
  verifySecretUpdated(x.id);
  deleteSecret(x.id);
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSetting(x.id);
  updateSetting(x.id);
  updateSetting(x.id);
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
  deleteSetting(x.id);
});

bthread("SigningkeygpgLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSigningkeygpg(x.id);
  updateSigningkeygpg(x.id);
  updateSigningkeygpg(x.id);
  verifySigningkeygpgExists(x.id);
  verifySigningkeygpgUpdated(x.id);
  deleteSigningkeygpg(x.id);
});

bthread("StargazerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStargazer(x.id);
  updateStargazer(x.id);
  updateStargazer(x.id);
  verifyStargazerExists(x.id);
  verifyStargazerUpdated(x.id);
  deleteStargazer(x.id);
});

bthread("StarredLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStarred(x.id);
  updateStarred(x.id);
  updateStarred(x.id);
  verifyStarredExists(x.id);
  verifyStarredUpdated(x.id);
  deleteStarred(x.id);
});

bthread("StartLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStart(x.id);
  updateStart(x.id);
  updateStart(x.id);
  verifyStartExists(x.id);
  verifyStartUpdated(x.id);
  deleteStart(x.id);
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatu(x.id);
  updateStatu(x.id);
  updateStatu(x.id);
  verifyStatuExists(x.id);
  verifyStatuUpdated(x.id);
  deleteStatu(x.id);
});

bthread("StatusLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatus(x.id);
  updateStatus(x.id);
  updateStatus(x.id);
  verifyStatusExists(x.id);
  verifyStatusUpdated(x.id);
  deleteStatus(x.id);
});

bthread("StopLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStop(x.id);
  updateStop(x.id);
  updateStop(x.id);
  verifyStopExists(x.id);
  verifyStopUpdated(x.id);
  deleteStop(x.id);
});

bthread("StopwatchLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStopwatch(x.id);
  updateStopwatch(x.id);
  updateStopwatch(x.id);
  verifyStopwatchExists(x.id);
  verifyStopwatchUpdated(x.id);
  deleteStopwatch(x.id);
});

bthread("StopwatcheLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStopwatche(x.id);
  updateStopwatche(x.id);
  updateStopwatche(x.id);
  verifyStopwatcheExists(x.id);
  verifyStopwatcheUpdated(x.id);
  deleteStopwatche(x.id);
});

bthread("SubscriberLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscriber(x.id);
  updateSubscriber(x.id);
  updateSubscriber(x.id);
  verifySubscriberExists(x.id);
  verifySubscriberUpdated(x.id);
  deleteSubscriber(x.id);
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscription(x.id);
  updateSubscription(x.id);
  updateSubscription(x.id);
  verifySubscriptionExists(x.id);
  verifySubscriptionUpdated(x.id);
  deleteSubscription(x.id);
});

bthread("TagLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTag(x.id);
  updateTag(x.id);
  updateTag(x.id);
  verifyTagExists(x.id);
  verifyTagUpdated(x.id);
  deleteTag(x.id);
});

bthread("TagprotectionLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTagprotection(x.id);
  updateTagprotection(x.id);
  updateTagprotection(x.id);
  verifyTagprotectionExists(x.id);
  verifyTagprotectionUpdated(x.id);
  deleteTagprotection(x.id);
});

bthread("TaskLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTask(x.id);
  updateTask(x.id);
  updateTask(x.id);
  verifyTaskExists(x.id);
  verifyTaskUpdated(x.id);
  deleteTask(x.id);
});

bthread("TeamLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTeam(x.id);
  updateTeam(x.id);
  updateTeam(x.id);
  verifyTeamExists(x.id);
  verifyTeamUpdated(x.id);
  deleteTeam(x.id);
});

bthread("TemplateLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTemplate(x.id);
  updateTemplate(x.id);
  updateTemplate(x.id);
  verifyTemplateExists(x.id);
  verifyTemplateUpdated(x.id);
  deleteTemplate(x.id);
});

bthread("TestLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTest(x.id);
  updateTest(x.id);
  updateTest(x.id);
  verifyTestExists(x.id);
  verifyTestUpdated(x.id);
  deleteTest(x.id);
});

bthread("ThreadLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addThread(x.id);
  updateThread(x.id);
  updateThread(x.id);
  verifyThreadExists(x.id);
  verifyThreadUpdated(x.id);
  deleteThread(x.id);
});

bthread("TimeLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTime(x.id);
  updateTime(x.id);
  updateTime(x.id);
  verifyTimeExists(x.id);
  verifyTimeUpdated(x.id);
  deleteTime(x.id);
});

bthread("TimelineLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTimeline(x.id);
  updateTimeline(x.id);
  updateTimeline(x.id);
  verifyTimelineExists(x.id);
  verifyTimelineUpdated(x.id);
  deleteTimeline(x.id);
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addToken(x.id);
  updateToken(x.id);
  updateToken(x.id);
  verifyTokenExists(x.id);
  verifyTokenUpdated(x.id);
  deleteToken(x.id);
});

bthread("TopicLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTopic(x.id);
  updateTopic(x.id);
  updateTopic(x.id);
  verifyTopicExists(x.id);
  verifyTopicUpdated(x.id);
  deleteTopic(x.id);
});

bthread("TransferLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTransfer(x.id);
  updateTransfer(x.id);
  updateTransfer(x.id);
  verifyTransferExists(x.id);
  verifyTransferUpdated(x.id);
  deleteTransfer(x.id);
});

bthread("TreeLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTree(x.id);
  updateTree(x.id);
  updateTree(x.id);
  verifyTreeExists(x.id);
  verifyTreeUpdated(x.id);
  deleteTree(x.id);
});

bthread("UiLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUi(x.id);
  updateUi(x.id);
  updateUi(x.id);
  verifyUiExists(x.id);
  verifyUiUpdated(x.id);
  deleteUi(x.id);
});

bthread("UnadoptedLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnadopted(x.id);
  updateUnadopted(x.id);
  updateUnadopted(x.id);
  verifyUnadoptedExists(x.id);
  verifyUnadoptedUpdated(x.id);
  deleteUnadopted(x.id);
});

bthread("UndismissalLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUndismissal(x.id);
  updateUndismissal(x.id);
  updateUndismissal(x.id);
  verifyUndismissalExists(x.id);
  verifyUndismissalUpdated(x.id);
  deleteUndismissal(x.id);
});

bthread("UpdateLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUpdate(x.id);
  updateUpdate(x.id);
  updateUpdate(x.id);
  verifyUpdateExists(x.id);
  verifyUpdateUpdated(x.id);
  deleteUpdate(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
  deleteUser(x.id);
});

bthread("UseridLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserid(x.id);
  updateUserid(x.id);
  updateUserid(x.id);
  verifyUseridExists(x.id);
  verifyUseridUpdated(x.id);
  deleteUserid(x.id);
});

bthread("ValidateLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addValidate(x.id);
  updateValidate(x.id);
  updateValidate(x.id);
  verifyValidateExists(x.id);
  verifyValidateUpdated(x.id);
  deleteValidate(x.id);
});

bthread("VariableLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVariable(x.id);
  updateVariable(x.id);
  updateVariable(x.id);
  verifyVariableExists(x.id);
  verifyVariableUpdated(x.id);
  deleteVariable(x.id);
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVersion(x.id);
  updateVersion(x.id);
  updateVersion(x.id);
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
  deleteVersion(x.id);
});

bthread("WikiLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWiki(x.id);
  updateWiki(x.id);
  updateWiki(x.id);
  verifyWikiExists(x.id);
  verifyWikiUpdated(x.id);
  deleteWiki(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Accept nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Accept_id_N"}]);
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAccept(a.id);
  block(matchAddAccept(a.id, ANY), function () {});
  addAccept(b.id);
});

bthread("Action nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Action_id_N"}]);
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
  const x = pick([{id: "Activity_id_N"}]);
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

bthread("Activitypub nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Activitypub_id_N"}]);
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addActivitypub(a.id);
  block(matchAddActivitypub(a.id, ANY), function () {});
  addActivitypub(b.id);
});

bthread("Admin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Admin_id_N"}]);
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAdmin(a.id);
  block(matchAddAdmin(a.id, ANY), function () {});
  addAdmin(b.id);
});

bthread("Api nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Api_id_N"}]);
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

bthread("Application nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Application_id_N"}]);
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

bthread("Archive nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Archive_id_N"}]);
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

bthread("Asset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Asset_id_N"}]);
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
  const x = pick([{id: "Assignee_id_N"}]);
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

bthread("Attachment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Attachment_id_N"}]);
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAttachment(a.id);
  block(matchAddAttachment(a.id, ANY), function () {});
  addAttachment(b.id);
});

bthread("Avatar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Avatar_id_N"}]);
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAvatar(a.id);
  block(matchAddAvatar(a.id, ANY), function () {});
  addAvatar(b.id);
});

bthread("Badge nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Badge_id_N"}]);
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
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBadge(a.id);
  block(matchAddBadge(a.id, ANY), function () {});
  addBadge(b.id);
});

bthread("Blob nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Blob_id_N"}]);
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
  const x = pick([{id: "Block_id_N"}]);
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

bthread("Branche nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Branche_id_N"}]);
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

bthread("Branchprotection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Branchprotection_id_N"}]);
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
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBranchprotection(a.id);
  block(matchAddBranchprotection(a.id, ANY), function () {});
  addBranchprotection(b.id);
});

bthread("Check nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Check_id_N"}]);
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCheck(a.id);
  block(matchAddCheck(a.id, ANY), function () {});
  addCheck(b.id);
});

bthread("Collaborator nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Collaborator_id_N"}]);
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

bthread("Comment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Comment_id_N"}]);
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
  const x = pick([{id: "Commit_id_N"}]);
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

bthread("Compare nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Compare_id_N"}]);
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

bthread("Content nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Content_id_N"}]);
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

bthread("Cron nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Cron_id_N"}]);
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCron(a.id);
  block(matchAddCron(a.id, ANY), function () {});
  addCron(b.id);
});

bthread("Deadline nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Deadline_id_N"}]);
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeadline(a.id);
  block(matchAddDeadline(a.id, ANY), function () {});
  addDeadline(b.id);
});

bthread("Delete nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Delete_id_N"}]);
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDelete(a.id);
  block(matchAddDelete(a.id, ANY), function () {});
  addDelete(b.id);
});

bthread("Dependency nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Dependency_id_N"}]);
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

bthread("Diffpatch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Diffpatch_id_N"}]);
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDiffpatch(a.id);
  block(matchAddDiffpatch(a.id, ANY), function () {});
  addDiffpatch(b.id);
});

bthread("Dismissal nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Dismissal_id_N"}]);
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

bthread("Editorconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Editorconfig_id_N"}]);
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEditorconfig(a.id);
  block(matchAddEditorconfig(a.id, ANY), function () {});
  addEditorconfig(b.id);
});

bthread("Email nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Email_id_N"}]);
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

bthread("Feed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Feed_id_N"}]);
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

bthread("File nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "File_id_N"}]);
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
  const x = pick([{id: "Follower_id_N"}]);
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
  const x = pick([{id: "Following_id_N"}]);
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

bthread("Fork nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Fork_id_N"}]);
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

bthread("Generate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Generate_id_N"}]);
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

bthread("Git nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Git_id_N"}]);
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

bthread("Gitignore nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Gitignore_id_N"}]);
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
  const x = pick([{id: "Gpgkey_id_N"}]);
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

bthread("Gpgkeytoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Gpgkeytoken_id_N"}]);
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
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGpgkeytoken(a.id);
  block(matchAddGpgkeytoken(a.id, ANY), function () {});
  addGpgkeytoken(b.id);
});

bthread("Gpgkeyverify nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Gpgkeyverify_id_N"}]);
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
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGpgkeyverify(a.id);
  block(matchAddGpgkeyverify(a.id, ANY), function () {});
  addGpgkeyverify(b.id);
});

bthread("Heatmap nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Heatmap_id_N"}]);
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
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHeatmap(a.id);
  block(matchAddHeatmap(a.id, ANY), function () {});
  addHeatmap(b.id);
});

bthread("Hook nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Hook_id_N"}]);
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

bthread("Inbox nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Inbox_id_N"}]);
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
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInbox(a.id);
  block(matchAddInbox(a.id, ANY), function () {});
  addInbox(b.id);
});

bthread("Issue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issue_id_N"}]);
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

bthread("Issueconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issueconfig_id_N"}]);
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
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssueconfig(a.id);
  block(matchAddIssueconfig(a.id, ANY), function () {});
  addIssueconfig(b.id);
});

bthread("Issuetemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuetemplate_id_N"}]);
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
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuetemplate(a.id);
  block(matchAddIssuetemplate(a.id, ANY), function () {});
  addIssuetemplate(b.id);
});

bthread("Key nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Key_id_N"}]);
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
  const x = pick([{id: "Label_id_N"}]);
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
  const x = pick([{id: "Language_id_N"}]);
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

bthread("Latest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Latest_id_N"}]);
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

bthread("Licens nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Licens_id_N"}]);
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

bthread("Markdown nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Markdown_id_N"}]);
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

bthread("Markup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Markup_id_N"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMarkup(a.id);
  block(matchAddMarkup(a.id, ANY), function () {});
  addMarkup(b.id);
});

bthread("Media nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Media_id_N"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMedia(a.id);
  block(matchAddMedia(a.id, ANY), function () {});
  addMedia(b.id);
});

bthread("Member nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Member_id_N"}]);
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

bthread("Merge nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Merge_id_N"}]);
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
  const x = pick([{id: "Mergeupstream_id_N"}]);
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

bthread("Migrate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Migrate_id_N"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMigrate(a.id);
  block(matchAddMigrate(a.id, ANY), function () {});
  addMigrate(b.id);
});

bthread("Milestone nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Milestone_id_N"}]);
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

bthread("Mirrorsync nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mirrorsync_id_N"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMirrorsync(a.id);
  block(matchAddMirrorsync(a.id, ANY), function () {});
  addMirrorsync(b.id);
});

bthread("New nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "New_id_N"}]);
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

bthread("Newpinallowed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Newpinallowed_id_N"}]);
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
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNewpinallowed(a.id);
  block(matchAddNewpinallowed(a.id, ANY), function () {});
  addNewpinallowed(b.id);
});

bthread("Nodeinfo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Nodeinfo_id_N"}]);
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
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNodeinfo(a.id);
  block(matchAddNodeinfo(a.id, ANY), function () {});
  addNodeinfo(b.id);
});

bthread("Note nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Note_id_N"}]);
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
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNote(a.id);
  block(matchAddNote(a.id, ANY), function () {});
  addNote(b.id);
});

bthread("Notification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Notification_id_N"}]);
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

bthread("Oauth2 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Oauth2_id_N"}]);
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
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOauth2(a.id);
  block(matchAddOauth2(a.id, ANY), function () {});
  addOauth2(b.id);
});

bthread("Org nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Org_id_N"}]);
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

bthread("Package nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Package_id_N"}]);
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
  const x = pick([{id: "Page_id_N"}]);
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

bthread("Permission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Permission_id_N"}]);
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

bthread("Pin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pin_id_N"}]);
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPin(a.id);
  block(matchAddPin(a.id, ANY), function () {});
  addPin(b.id);
});

bthread("Pinned nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pinned_id_N"}]);
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPinned(a.id);
  block(matchAddPinned(a.id, ANY), function () {});
  addPinned(b.id);
});

bthread("Priority nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Priority_id_N"}]);
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

bthread("Publicmember nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Publicmember_id_N"}]);
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

bthread("Pull nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pull_id_N"}]);
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

bthread("Pushmirror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pushmirror_id_N"}]);
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPushmirror(a.id);
  block(matchAddPushmirror(a.id, ANY), function () {});
  addPushmirror(b.id);
});

bthread("Pushmirrorssync nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pushmirrorssync_id_N"}]);
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPushmirrorssync(a.id);
  block(matchAddPushmirrorssync(a.id, ANY), function () {});
  addPushmirrorssync(b.id);
});

bthread("Raw nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Raw_id_N"}]);
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
  const x = pick([{id: "Reaction_id_N"}]);
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

bthread("Ref nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Ref_id_N"}]);
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

bthread("Registrationtoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Registrationtoken_id_N"}]);
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

bthread("Reject nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Reject_id_N"}]);
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReject(a.id);
  block(matchAddReject(a.id, ANY), function () {});
  addReject(b.id);
});

bthread("Releas nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Releas_id_N"}]);
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

bthread("Rename nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Rename_id_N"}]);
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

bthread("Repo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Repo_id_N"}]);
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

bthread("Repository nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Repository_id_N"}]);
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

bthread("Requestedreviewer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Requestedreviewer_id_N"}]);
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

bthread("Review nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Review_id_N"}]);
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

bthread("Reviewer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Reviewer_id_N"}]);
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReviewer(a.id);
  block(matchAddReviewer(a.id, ANY), function () {});
  addReviewer(b.id);
});

bthread("Revision nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Revision_id_N"}]);
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRevision(a.id);
  block(matchAddRevision(a.id, ANY), function () {});
  addRevision(b.id);
});

bthread("Runner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Runner_id_N"}]);
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

bthread("Search nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Search_id_N"}]);
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

bthread("Secret nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Secret_id_N"}]);
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

bthread("Setting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Setting_id_N"}]);
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

bthread("Signingkeygpg nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Signingkeygpg_id_N"}]);
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSigningkeygpg(a.id);
  block(matchAddSigningkeygpg(a.id, ANY), function () {});
  addSigningkeygpg(b.id);
});

bthread("Stargazer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Stargazer_id_N"}]);
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
  const x = pick([{id: "Starred_id_N"}]);
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
  const x = pick([{id: "Start_id_N"}]);
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

bthread("Statu nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Statu_id_N"}]);
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
  const x = pick([{id: "Status_id_N"}]);
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
  const x = pick([{id: "Stop_id_N"}]);
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

bthread("Stopwatch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Stopwatch_id_N"}]);
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStopwatch(a.id);
  block(matchAddStopwatch(a.id, ANY), function () {});
  addStopwatch(b.id);
});

bthread("Stopwatche nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Stopwatche_id_N"}]);
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStopwatche(a.id);
  block(matchAddStopwatche(a.id, ANY), function () {});
  addStopwatche(b.id);
});

bthread("Subscriber nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Subscriber_id_N"}]);
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
  const x = pick([{id: "Subscription_id_N"}]);
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

bthread("Tag nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Tag_id_N"}]);
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

bthread("Tagprotection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Tagprotection_id_N"}]);
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTagprotection(a.id);
  block(matchAddTagprotection(a.id, ANY), function () {});
  addTagprotection(b.id);
});

bthread("Task nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Task_id_N"}]);
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTask(a.id);
  block(matchAddTask(a.id, ANY), function () {});
  addTask(b.id);
});

bthread("Team nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Team_id_N"}]);
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
  const x = pick([{id: "Template_id_N"}]);
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
  const x = pick([{id: "Test_id_N"}]);
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
  const x = pick([{id: "Thread_id_N"}]);
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

bthread("Time nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Time_id_N"}]);
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTime(a.id);
  block(matchAddTime(a.id, ANY), function () {});
  addTime(b.id);
});

bthread("Timeline nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Timeline_id_N"}]);
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

bthread("Token nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Token_id_N"}]);
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
  const x = pick([{id: "Topic_id_N"}]);
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

bthread("Transfer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Transfer_id_N"}]);
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
  const x = pick([{id: "Tree_id_N"}]);
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

bthread("Ui nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Ui_id_N"}]);
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUi(a.id);
  block(matchAddUi(a.id, ANY), function () {});
  addUi(b.id);
});

bthread("Unadopted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Unadopted_id_N"}]);
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUnadopted(a.id);
  block(matchAddUnadopted(a.id, ANY), function () {});
  addUnadopted(b.id);
});

bthread("Undismissal nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Undismissal_id_N"}]);
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUndismissal(a.id);
  block(matchAddUndismissal(a.id, ANY), function () {});
  addUndismissal(b.id);
});

bthread("Update nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Update_id_N"}]);
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUpdate(a.id);
  block(matchAddUpdate(a.id, ANY), function () {});
  addUpdate(b.id);
});

bthread("User nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "User_id_N"}]);
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

bthread("Userid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Userid_id_N"}]);
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUserid(a.id);
  block(matchAddUserid(a.id, ANY), function () {});
  addUserid(b.id);
});

bthread("Validate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Validate_id_N"}]);
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
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addValidate(a.id);
  block(matchAddValidate(a.id, ANY), function () {});
  addValidate(b.id);
});

bthread("Variable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Variable_id_N"}]);
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

bthread("Version nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Version_id_N"}]);
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

bthread("Wiki nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Wiki_id_N"}]);
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
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWiki(a.id);
  block(matchAddWiki(a.id, ANY), function () {});
  addWiki(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Accept create verification", function () {
  const e = waitForAnyAcceptAdded();
  block(matchDeleteAccept(e.id, ANY), function () {
    verifyAcceptExists(e.id);
  });
});

bthread("Accept update verification", function () {
  const e = waitForAnyAcceptUpdated();
  block(matchDeleteAccept(e.id, ANY), function () {
    verifyAcceptUpdated(e.id);
  });
});

bthread("Accept delete verification", function () {
  const e = waitForAnyAcceptDeleted();
  block(matchAddAccept(e.id, ANY), function () {
    verifyAcceptDoesNotExist(e.id);
  });
});

bthread("Action create verification", function () {
  const e = waitForAnyActionAdded();
  block(matchDeleteAction(e.id, ANY), function () {
    verifyActionExists(e.id);
  });
});

bthread("Action update verification", function () {
  const e = waitForAnyActionUpdated();
  block(matchDeleteAction(e.id, ANY), function () {
    verifyActionUpdated(e.id);
  });
});

bthread("Action delete verification", function () {
  const e = waitForAnyActionDeleted();
  block(matchAddAction(e.id, ANY), function () {
    verifyActionDoesNotExist(e.id);
  });
});

bthread("Activity create verification", function () {
  const e = waitForAnyActivityAdded();
  block(matchDeleteActivity(e.id, ANY), function () {
    verifyActivityExists(e.id);
  });
});

bthread("Activity update verification", function () {
  const e = waitForAnyActivityUpdated();
  block(matchDeleteActivity(e.id, ANY), function () {
    verifyActivityUpdated(e.id);
  });
});

bthread("Activity delete verification", function () {
  const e = waitForAnyActivityDeleted();
  block(matchAddActivity(e.id, ANY), function () {
    verifyActivityDoesNotExist(e.id);
  });
});

bthread("Activitypub create verification", function () {
  const e = waitForAnyActivitypubAdded();
  block(matchDeleteActivitypub(e.id, ANY), function () {
    verifyActivitypubExists(e.id);
  });
});

bthread("Activitypub update verification", function () {
  const e = waitForAnyActivitypubUpdated();
  block(matchDeleteActivitypub(e.id, ANY), function () {
    verifyActivitypubUpdated(e.id);
  });
});

bthread("Activitypub delete verification", function () {
  const e = waitForAnyActivitypubDeleted();
  block(matchAddActivitypub(e.id, ANY), function () {
    verifyActivitypubDoesNotExist(e.id);
  });
});

bthread("Admin create verification", function () {
  const e = waitForAnyAdminAdded();
  block(matchDeleteAdmin(e.id, ANY), function () {
    verifyAdminExists(e.id);
  });
});

bthread("Admin update verification", function () {
  const e = waitForAnyAdminUpdated();
  block(matchDeleteAdmin(e.id, ANY), function () {
    verifyAdminUpdated(e.id);
  });
});

bthread("Admin delete verification", function () {
  const e = waitForAnyAdminDeleted();
  block(matchAddAdmin(e.id, ANY), function () {
    verifyAdminDoesNotExist(e.id);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  block(matchDeleteApi(e.id, ANY), function () {
    verifyApiExists(e.id);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  block(matchDeleteApi(e.id, ANY), function () {
    verifyApiUpdated(e.id);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  block(matchAddApi(e.id, ANY), function () {
    verifyApiDoesNotExist(e.id);
  });
});

bthread("Application create verification", function () {
  const e = waitForAnyApplicationAdded();
  block(matchDeleteApplication(e.id, ANY), function () {
    verifyApplicationExists(e.id);
  });
});

bthread("Application update verification", function () {
  const e = waitForAnyApplicationUpdated();
  block(matchDeleteApplication(e.id, ANY), function () {
    verifyApplicationUpdated(e.id);
  });
});

bthread("Application delete verification", function () {
  const e = waitForAnyApplicationDeleted();
  block(matchAddApplication(e.id, ANY), function () {
    verifyApplicationDoesNotExist(e.id);
  });
});

bthread("Archive create verification", function () {
  const e = waitForAnyArchiveAdded();
  block(matchDeleteArchive(e.id, ANY), function () {
    verifyArchiveExists(e.id);
  });
});

bthread("Archive update verification", function () {
  const e = waitForAnyArchiveUpdated();
  block(matchDeleteArchive(e.id, ANY), function () {
    verifyArchiveUpdated(e.id);
  });
});

bthread("Archive delete verification", function () {
  const e = waitForAnyArchiveDeleted();
  block(matchAddArchive(e.id, ANY), function () {
    verifyArchiveDoesNotExist(e.id);
  });
});

bthread("Asset create verification", function () {
  const e = waitForAnyAssetAdded();
  block(matchDeleteAsset(e.id, ANY), function () {
    verifyAssetExists(e.id);
  });
});

bthread("Asset update verification", function () {
  const e = waitForAnyAssetUpdated();
  block(matchDeleteAsset(e.id, ANY), function () {
    verifyAssetUpdated(e.id);
  });
});

bthread("Asset delete verification", function () {
  const e = waitForAnyAssetDeleted();
  block(matchAddAsset(e.id, ANY), function () {
    verifyAssetDoesNotExist(e.id);
  });
});

bthread("Assignee create verification", function () {
  const e = waitForAnyAssigneeAdded();
  block(matchDeleteAssignee(e.id, ANY), function () {
    verifyAssigneeExists(e.id);
  });
});

bthread("Assignee update verification", function () {
  const e = waitForAnyAssigneeUpdated();
  block(matchDeleteAssignee(e.id, ANY), function () {
    verifyAssigneeUpdated(e.id);
  });
});

bthread("Assignee delete verification", function () {
  const e = waitForAnyAssigneeDeleted();
  block(matchAddAssignee(e.id, ANY), function () {
    verifyAssigneeDoesNotExist(e.id);
  });
});

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  block(matchDeleteAttachment(e.id, ANY), function () {
    verifyAttachmentExists(e.id);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  block(matchDeleteAttachment(e.id, ANY), function () {
    verifyAttachmentUpdated(e.id);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  block(matchAddAttachment(e.id, ANY), function () {
    verifyAttachmentDoesNotExist(e.id);
  });
});

bthread("Avatar create verification", function () {
  const e = waitForAnyAvatarAdded();
  block(matchDeleteAvatar(e.id, ANY), function () {
    verifyAvatarExists(e.id);
  });
});

bthread("Avatar update verification", function () {
  const e = waitForAnyAvatarUpdated();
  block(matchDeleteAvatar(e.id, ANY), function () {
    verifyAvatarUpdated(e.id);
  });
});

bthread("Avatar delete verification", function () {
  const e = waitForAnyAvatarDeleted();
  block(matchAddAvatar(e.id, ANY), function () {
    verifyAvatarDoesNotExist(e.id);
  });
});

bthread("Badge create verification", function () {
  const e = waitForAnyBadgeAdded();
  block(matchDeleteBadge(e.id, ANY), function () {
    verifyBadgeExists(e.id);
  });
});

bthread("Badge update verification", function () {
  const e = waitForAnyBadgeUpdated();
  block(matchDeleteBadge(e.id, ANY), function () {
    verifyBadgeUpdated(e.id);
  });
});

bthread("Badge delete verification", function () {
  const e = waitForAnyBadgeDeleted();
  block(matchAddBadge(e.id, ANY), function () {
    verifyBadgeDoesNotExist(e.id);
  });
});

bthread("Blob create verification", function () {
  const e = waitForAnyBlobAdded();
  block(matchDeleteBlob(e.id, ANY), function () {
    verifyBlobExists(e.id);
  });
});

bthread("Blob update verification", function () {
  const e = waitForAnyBlobUpdated();
  block(matchDeleteBlob(e.id, ANY), function () {
    verifyBlobUpdated(e.id);
  });
});

bthread("Blob delete verification", function () {
  const e = waitForAnyBlobDeleted();
  block(matchAddBlob(e.id, ANY), function () {
    verifyBlobDoesNotExist(e.id);
  });
});

bthread("Block create verification", function () {
  const e = waitForAnyBlockAdded();
  block(matchDeleteBlock(e.id, ANY), function () {
    verifyBlockExists(e.id);
  });
});

bthread("Block update verification", function () {
  const e = waitForAnyBlockUpdated();
  block(matchDeleteBlock(e.id, ANY), function () {
    verifyBlockUpdated(e.id);
  });
});

bthread("Block delete verification", function () {
  const e = waitForAnyBlockDeleted();
  block(matchAddBlock(e.id, ANY), function () {
    verifyBlockDoesNotExist(e.id);
  });
});

bthread("Branche create verification", function () {
  const e = waitForAnyBrancheAdded();
  block(matchDeleteBranche(e.id, ANY), function () {
    verifyBrancheExists(e.id);
  });
});

bthread("Branche update verification", function () {
  const e = waitForAnyBrancheUpdated();
  block(matchDeleteBranche(e.id, ANY), function () {
    verifyBrancheUpdated(e.id);
  });
});

bthread("Branche delete verification", function () {
  const e = waitForAnyBrancheDeleted();
  block(matchAddBranche(e.id, ANY), function () {
    verifyBrancheDoesNotExist(e.id);
  });
});

bthread("Branchprotection create verification", function () {
  const e = waitForAnyBranchprotectionAdded();
  block(matchDeleteBranchprotection(e.id, ANY), function () {
    verifyBranchprotectionExists(e.id);
  });
});

bthread("Branchprotection update verification", function () {
  const e = waitForAnyBranchprotectionUpdated();
  block(matchDeleteBranchprotection(e.id, ANY), function () {
    verifyBranchprotectionUpdated(e.id);
  });
});

bthread("Branchprotection delete verification", function () {
  const e = waitForAnyBranchprotectionDeleted();
  block(matchAddBranchprotection(e.id, ANY), function () {
    verifyBranchprotectionDoesNotExist(e.id);
  });
});

bthread("Check create verification", function () {
  const e = waitForAnyCheckAdded();
  block(matchDeleteCheck(e.id, ANY), function () {
    verifyCheckExists(e.id);
  });
});

bthread("Check update verification", function () {
  const e = waitForAnyCheckUpdated();
  block(matchDeleteCheck(e.id, ANY), function () {
    verifyCheckUpdated(e.id);
  });
});

bthread("Check delete verification", function () {
  const e = waitForAnyCheckDeleted();
  block(matchAddCheck(e.id, ANY), function () {
    verifyCheckDoesNotExist(e.id);
  });
});

bthread("Collaborator create verification", function () {
  const e = waitForAnyCollaboratorAdded();
  block(matchDeleteCollaborator(e.id, ANY), function () {
    verifyCollaboratorExists(e.id);
  });
});

bthread("Collaborator update verification", function () {
  const e = waitForAnyCollaboratorUpdated();
  block(matchDeleteCollaborator(e.id, ANY), function () {
    verifyCollaboratorUpdated(e.id);
  });
});

bthread("Collaborator delete verification", function () {
  const e = waitForAnyCollaboratorDeleted();
  block(matchAddCollaborator(e.id, ANY), function () {
    verifyCollaboratorDoesNotExist(e.id);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  block(matchDeleteComment(e.id, ANY), function () {
    verifyCommentExists(e.id);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  block(matchDeleteComment(e.id, ANY), function () {
    verifyCommentUpdated(e.id);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  block(matchAddComment(e.id, ANY), function () {
    verifyCommentDoesNotExist(e.id);
  });
});

bthread("Commit create verification", function () {
  const e = waitForAnyCommitAdded();
  block(matchDeleteCommit(e.id, ANY), function () {
    verifyCommitExists(e.id);
  });
});

bthread("Commit update verification", function () {
  const e = waitForAnyCommitUpdated();
  block(matchDeleteCommit(e.id, ANY), function () {
    verifyCommitUpdated(e.id);
  });
});

bthread("Commit delete verification", function () {
  const e = waitForAnyCommitDeleted();
  block(matchAddCommit(e.id, ANY), function () {
    verifyCommitDoesNotExist(e.id);
  });
});

bthread("Compare create verification", function () {
  const e = waitForAnyCompareAdded();
  block(matchDeleteCompare(e.id, ANY), function () {
    verifyCompareExists(e.id);
  });
});

bthread("Compare update verification", function () {
  const e = waitForAnyCompareUpdated();
  block(matchDeleteCompare(e.id, ANY), function () {
    verifyCompareUpdated(e.id);
  });
});

bthread("Compare delete verification", function () {
  const e = waitForAnyCompareDeleted();
  block(matchAddCompare(e.id, ANY), function () {
    verifyCompareDoesNotExist(e.id);
  });
});

bthread("Content create verification", function () {
  const e = waitForAnyContentAdded();
  block(matchDeleteContent(e.id, ANY), function () {
    verifyContentExists(e.id);
  });
});

bthread("Content update verification", function () {
  const e = waitForAnyContentUpdated();
  block(matchDeleteContent(e.id, ANY), function () {
    verifyContentUpdated(e.id);
  });
});

bthread("Content delete verification", function () {
  const e = waitForAnyContentDeleted();
  block(matchAddContent(e.id, ANY), function () {
    verifyContentDoesNotExist(e.id);
  });
});

bthread("Cron create verification", function () {
  const e = waitForAnyCronAdded();
  block(matchDeleteCron(e.id, ANY), function () {
    verifyCronExists(e.id);
  });
});

bthread("Cron update verification", function () {
  const e = waitForAnyCronUpdated();
  block(matchDeleteCron(e.id, ANY), function () {
    verifyCronUpdated(e.id);
  });
});

bthread("Cron delete verification", function () {
  const e = waitForAnyCronDeleted();
  block(matchAddCron(e.id, ANY), function () {
    verifyCronDoesNotExist(e.id);
  });
});

bthread("Deadline create verification", function () {
  const e = waitForAnyDeadlineAdded();
  block(matchDeleteDeadline(e.id, ANY), function () {
    verifyDeadlineExists(e.id);
  });
});

bthread("Deadline update verification", function () {
  const e = waitForAnyDeadlineUpdated();
  block(matchDeleteDeadline(e.id, ANY), function () {
    verifyDeadlineUpdated(e.id);
  });
});

bthread("Deadline delete verification", function () {
  const e = waitForAnyDeadlineDeleted();
  block(matchAddDeadline(e.id, ANY), function () {
    verifyDeadlineDoesNotExist(e.id);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  block(matchDeleteDelete(e.id, ANY), function () {
    verifyDeleteExists(e.id);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  block(matchDeleteDelete(e.id, ANY), function () {
    verifyDeleteUpdated(e.id);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  block(matchAddDelete(e.id, ANY), function () {
    verifyDeleteDoesNotExist(e.id);
  });
});

bthread("Dependency create verification", function () {
  const e = waitForAnyDependencyAdded();
  block(matchDeleteDependency(e.id, ANY), function () {
    verifyDependencyExists(e.id);
  });
});

bthread("Dependency update verification", function () {
  const e = waitForAnyDependencyUpdated();
  block(matchDeleteDependency(e.id, ANY), function () {
    verifyDependencyUpdated(e.id);
  });
});

bthread("Dependency delete verification", function () {
  const e = waitForAnyDependencyDeleted();
  block(matchAddDependency(e.id, ANY), function () {
    verifyDependencyDoesNotExist(e.id);
  });
});

bthread("Diffpatch create verification", function () {
  const e = waitForAnyDiffpatchAdded();
  block(matchDeleteDiffpatch(e.id, ANY), function () {
    verifyDiffpatchExists(e.id);
  });
});

bthread("Diffpatch update verification", function () {
  const e = waitForAnyDiffpatchUpdated();
  block(matchDeleteDiffpatch(e.id, ANY), function () {
    verifyDiffpatchUpdated(e.id);
  });
});

bthread("Diffpatch delete verification", function () {
  const e = waitForAnyDiffpatchDeleted();
  block(matchAddDiffpatch(e.id, ANY), function () {
    verifyDiffpatchDoesNotExist(e.id);
  });
});

bthread("Dismissal create verification", function () {
  const e = waitForAnyDismissalAdded();
  block(matchDeleteDismissal(e.id, ANY), function () {
    verifyDismissalExists(e.id);
  });
});

bthread("Dismissal update verification", function () {
  const e = waitForAnyDismissalUpdated();
  block(matchDeleteDismissal(e.id, ANY), function () {
    verifyDismissalUpdated(e.id);
  });
});

bthread("Dismissal delete verification", function () {
  const e = waitForAnyDismissalDeleted();
  block(matchAddDismissal(e.id, ANY), function () {
    verifyDismissalDoesNotExist(e.id);
  });
});

bthread("Editorconfig create verification", function () {
  const e = waitForAnyEditorconfigAdded();
  block(matchDeleteEditorconfig(e.id, ANY), function () {
    verifyEditorconfigExists(e.id);
  });
});

bthread("Editorconfig update verification", function () {
  const e = waitForAnyEditorconfigUpdated();
  block(matchDeleteEditorconfig(e.id, ANY), function () {
    verifyEditorconfigUpdated(e.id);
  });
});

bthread("Editorconfig delete verification", function () {
  const e = waitForAnyEditorconfigDeleted();
  block(matchAddEditorconfig(e.id, ANY), function () {
    verifyEditorconfigDoesNotExist(e.id);
  });
});

bthread("Email create verification", function () {
  const e = waitForAnyEmailAdded();
  block(matchDeleteEmail(e.id, ANY), function () {
    verifyEmailExists(e.id);
  });
});

bthread("Email update verification", function () {
  const e = waitForAnyEmailUpdated();
  block(matchDeleteEmail(e.id, ANY), function () {
    verifyEmailUpdated(e.id);
  });
});

bthread("Email delete verification", function () {
  const e = waitForAnyEmailDeleted();
  block(matchAddEmail(e.id, ANY), function () {
    verifyEmailDoesNotExist(e.id);
  });
});

bthread("Feed create verification", function () {
  const e = waitForAnyFeedAdded();
  block(matchDeleteFeed(e.id, ANY), function () {
    verifyFeedExists(e.id);
  });
});

bthread("Feed update verification", function () {
  const e = waitForAnyFeedUpdated();
  block(matchDeleteFeed(e.id, ANY), function () {
    verifyFeedUpdated(e.id);
  });
});

bthread("Feed delete verification", function () {
  const e = waitForAnyFeedDeleted();
  block(matchAddFeed(e.id, ANY), function () {
    verifyFeedDoesNotExist(e.id);
  });
});

bthread("File create verification", function () {
  const e = waitForAnyFileAdded();
  block(matchDeleteFile(e.id, ANY), function () {
    verifyFileExists(e.id);
  });
});

bthread("File update verification", function () {
  const e = waitForAnyFileUpdated();
  block(matchDeleteFile(e.id, ANY), function () {
    verifyFileUpdated(e.id);
  });
});

bthread("File delete verification", function () {
  const e = waitForAnyFileDeleted();
  block(matchAddFile(e.id, ANY), function () {
    verifyFileDoesNotExist(e.id);
  });
});

bthread("Follower create verification", function () {
  const e = waitForAnyFollowerAdded();
  block(matchDeleteFollower(e.id, ANY), function () {
    verifyFollowerExists(e.id);
  });
});

bthread("Follower update verification", function () {
  const e = waitForAnyFollowerUpdated();
  block(matchDeleteFollower(e.id, ANY), function () {
    verifyFollowerUpdated(e.id);
  });
});

bthread("Follower delete verification", function () {
  const e = waitForAnyFollowerDeleted();
  block(matchAddFollower(e.id, ANY), function () {
    verifyFollowerDoesNotExist(e.id);
  });
});

bthread("Following create verification", function () {
  const e = waitForAnyFollowingAdded();
  block(matchDeleteFollowing(e.id, ANY), function () {
    verifyFollowingExists(e.id);
  });
});

bthread("Following update verification", function () {
  const e = waitForAnyFollowingUpdated();
  block(matchDeleteFollowing(e.id, ANY), function () {
    verifyFollowingUpdated(e.id);
  });
});

bthread("Following delete verification", function () {
  const e = waitForAnyFollowingDeleted();
  block(matchAddFollowing(e.id, ANY), function () {
    verifyFollowingDoesNotExist(e.id);
  });
});

bthread("Fork create verification", function () {
  const e = waitForAnyForkAdded();
  block(matchDeleteFork(e.id, ANY), function () {
    verifyForkExists(e.id);
  });
});

bthread("Fork update verification", function () {
  const e = waitForAnyForkUpdated();
  block(matchDeleteFork(e.id, ANY), function () {
    verifyForkUpdated(e.id);
  });
});

bthread("Fork delete verification", function () {
  const e = waitForAnyForkDeleted();
  block(matchAddFork(e.id, ANY), function () {
    verifyForkDoesNotExist(e.id);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  block(matchDeleteGenerate(e.id, ANY), function () {
    verifyGenerateExists(e.id);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  block(matchDeleteGenerate(e.id, ANY), function () {
    verifyGenerateUpdated(e.id);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  block(matchAddGenerate(e.id, ANY), function () {
    verifyGenerateDoesNotExist(e.id);
  });
});

bthread("Git create verification", function () {
  const e = waitForAnyGitAdded();
  block(matchDeleteGit(e.id, ANY), function () {
    verifyGitExists(e.id);
  });
});

bthread("Git update verification", function () {
  const e = waitForAnyGitUpdated();
  block(matchDeleteGit(e.id, ANY), function () {
    verifyGitUpdated(e.id);
  });
});

bthread("Git delete verification", function () {
  const e = waitForAnyGitDeleted();
  block(matchAddGit(e.id, ANY), function () {
    verifyGitDoesNotExist(e.id);
  });
});

bthread("Gitignore create verification", function () {
  const e = waitForAnyGitignoreAdded();
  block(matchDeleteGitignore(e.id, ANY), function () {
    verifyGitignoreExists(e.id);
  });
});

bthread("Gitignore update verification", function () {
  const e = waitForAnyGitignoreUpdated();
  block(matchDeleteGitignore(e.id, ANY), function () {
    verifyGitignoreUpdated(e.id);
  });
});

bthread("Gitignore delete verification", function () {
  const e = waitForAnyGitignoreDeleted();
  block(matchAddGitignore(e.id, ANY), function () {
    verifyGitignoreDoesNotExist(e.id);
  });
});

bthread("Gpgkey create verification", function () {
  const e = waitForAnyGpgkeyAdded();
  block(matchDeleteGpgkey(e.id, ANY), function () {
    verifyGpgkeyExists(e.id);
  });
});

bthread("Gpgkey update verification", function () {
  const e = waitForAnyGpgkeyUpdated();
  block(matchDeleteGpgkey(e.id, ANY), function () {
    verifyGpgkeyUpdated(e.id);
  });
});

bthread("Gpgkey delete verification", function () {
  const e = waitForAnyGpgkeyDeleted();
  block(matchAddGpgkey(e.id, ANY), function () {
    verifyGpgkeyDoesNotExist(e.id);
  });
});

bthread("Gpgkeytoken create verification", function () {
  const e = waitForAnyGpgkeytokenAdded();
  block(matchDeleteGpgkeytoken(e.id, ANY), function () {
    verifyGpgkeytokenExists(e.id);
  });
});

bthread("Gpgkeytoken update verification", function () {
  const e = waitForAnyGpgkeytokenUpdated();
  block(matchDeleteGpgkeytoken(e.id, ANY), function () {
    verifyGpgkeytokenUpdated(e.id);
  });
});

bthread("Gpgkeytoken delete verification", function () {
  const e = waitForAnyGpgkeytokenDeleted();
  block(matchAddGpgkeytoken(e.id, ANY), function () {
    verifyGpgkeytokenDoesNotExist(e.id);
  });
});

bthread("Gpgkeyverify create verification", function () {
  const e = waitForAnyGpgkeyverifyAdded();
  block(matchDeleteGpgkeyverify(e.id, ANY), function () {
    verifyGpgkeyverifyExists(e.id);
  });
});

bthread("Gpgkeyverify update verification", function () {
  const e = waitForAnyGpgkeyverifyUpdated();
  block(matchDeleteGpgkeyverify(e.id, ANY), function () {
    verifyGpgkeyverifyUpdated(e.id);
  });
});

bthread("Gpgkeyverify delete verification", function () {
  const e = waitForAnyGpgkeyverifyDeleted();
  block(matchAddGpgkeyverify(e.id, ANY), function () {
    verifyGpgkeyverifyDoesNotExist(e.id);
  });
});

bthread("Heatmap create verification", function () {
  const e = waitForAnyHeatmapAdded();
  block(matchDeleteHeatmap(e.id, ANY), function () {
    verifyHeatmapExists(e.id);
  });
});

bthread("Heatmap update verification", function () {
  const e = waitForAnyHeatmapUpdated();
  block(matchDeleteHeatmap(e.id, ANY), function () {
    verifyHeatmapUpdated(e.id);
  });
});

bthread("Heatmap delete verification", function () {
  const e = waitForAnyHeatmapDeleted();
  block(matchAddHeatmap(e.id, ANY), function () {
    verifyHeatmapDoesNotExist(e.id);
  });
});

bthread("Hook create verification", function () {
  const e = waitForAnyHookAdded();
  block(matchDeleteHook(e.id, ANY), function () {
    verifyHookExists(e.id);
  });
});

bthread("Hook update verification", function () {
  const e = waitForAnyHookUpdated();
  block(matchDeleteHook(e.id, ANY), function () {
    verifyHookUpdated(e.id);
  });
});

bthread("Hook delete verification", function () {
  const e = waitForAnyHookDeleted();
  block(matchAddHook(e.id, ANY), function () {
    verifyHookDoesNotExist(e.id);
  });
});

bthread("Inbox create verification", function () {
  const e = waitForAnyInboxAdded();
  block(matchDeleteInbox(e.id, ANY), function () {
    verifyInboxExists(e.id);
  });
});

bthread("Inbox update verification", function () {
  const e = waitForAnyInboxUpdated();
  block(matchDeleteInbox(e.id, ANY), function () {
    verifyInboxUpdated(e.id);
  });
});

bthread("Inbox delete verification", function () {
  const e = waitForAnyInboxDeleted();
  block(matchAddInbox(e.id, ANY), function () {
    verifyInboxDoesNotExist(e.id);
  });
});

bthread("Issue create verification", function () {
  const e = waitForAnyIssueAdded();
  block(matchDeleteIssue(e.id, ANY), function () {
    verifyIssueExists(e.id);
  });
});

bthread("Issue update verification", function () {
  const e = waitForAnyIssueUpdated();
  block(matchDeleteIssue(e.id, ANY), function () {
    verifyIssueUpdated(e.id);
  });
});

bthread("Issue delete verification", function () {
  const e = waitForAnyIssueDeleted();
  block(matchAddIssue(e.id, ANY), function () {
    verifyIssueDoesNotExist(e.id);
  });
});

bthread("Issueconfig create verification", function () {
  const e = waitForAnyIssueconfigAdded();
  block(matchDeleteIssueconfig(e.id, ANY), function () {
    verifyIssueconfigExists(e.id);
  });
});

bthread("Issueconfig update verification", function () {
  const e = waitForAnyIssueconfigUpdated();
  block(matchDeleteIssueconfig(e.id, ANY), function () {
    verifyIssueconfigUpdated(e.id);
  });
});

bthread("Issueconfig delete verification", function () {
  const e = waitForAnyIssueconfigDeleted();
  block(matchAddIssueconfig(e.id, ANY), function () {
    verifyIssueconfigDoesNotExist(e.id);
  });
});

bthread("Issuetemplate create verification", function () {
  const e = waitForAnyIssuetemplateAdded();
  block(matchDeleteIssuetemplate(e.id, ANY), function () {
    verifyIssuetemplateExists(e.id);
  });
});

bthread("Issuetemplate update verification", function () {
  const e = waitForAnyIssuetemplateUpdated();
  block(matchDeleteIssuetemplate(e.id, ANY), function () {
    verifyIssuetemplateUpdated(e.id);
  });
});

bthread("Issuetemplate delete verification", function () {
  const e = waitForAnyIssuetemplateDeleted();
  block(matchAddIssuetemplate(e.id, ANY), function () {
    verifyIssuetemplateDoesNotExist(e.id);
  });
});

bthread("Key create verification", function () {
  const e = waitForAnyKeyAdded();
  block(matchDeleteKey(e.id, ANY), function () {
    verifyKeyExists(e.id);
  });
});

bthread("Key update verification", function () {
  const e = waitForAnyKeyUpdated();
  block(matchDeleteKey(e.id, ANY), function () {
    verifyKeyUpdated(e.id);
  });
});

bthread("Key delete verification", function () {
  const e = waitForAnyKeyDeleted();
  block(matchAddKey(e.id, ANY), function () {
    verifyKeyDoesNotExist(e.id);
  });
});

bthread("Label create verification", function () {
  const e = waitForAnyLabelAdded();
  block(matchDeleteLabel(e.id, ANY), function () {
    verifyLabelExists(e.id);
  });
});

bthread("Label update verification", function () {
  const e = waitForAnyLabelUpdated();
  block(matchDeleteLabel(e.id, ANY), function () {
    verifyLabelUpdated(e.id);
  });
});

bthread("Label delete verification", function () {
  const e = waitForAnyLabelDeleted();
  block(matchAddLabel(e.id, ANY), function () {
    verifyLabelDoesNotExist(e.id);
  });
});

bthread("Language create verification", function () {
  const e = waitForAnyLanguageAdded();
  block(matchDeleteLanguage(e.id, ANY), function () {
    verifyLanguageExists(e.id);
  });
});

bthread("Language update verification", function () {
  const e = waitForAnyLanguageUpdated();
  block(matchDeleteLanguage(e.id, ANY), function () {
    verifyLanguageUpdated(e.id);
  });
});

bthread("Language delete verification", function () {
  const e = waitForAnyLanguageDeleted();
  block(matchAddLanguage(e.id, ANY), function () {
    verifyLanguageDoesNotExist(e.id);
  });
});

bthread("Latest create verification", function () {
  const e = waitForAnyLatestAdded();
  block(matchDeleteLatest(e.id, ANY), function () {
    verifyLatestExists(e.id);
  });
});

bthread("Latest update verification", function () {
  const e = waitForAnyLatestUpdated();
  block(matchDeleteLatest(e.id, ANY), function () {
    verifyLatestUpdated(e.id);
  });
});

bthread("Latest delete verification", function () {
  const e = waitForAnyLatestDeleted();
  block(matchAddLatest(e.id, ANY), function () {
    verifyLatestDoesNotExist(e.id);
  });
});

bthread("Licens create verification", function () {
  const e = waitForAnyLicensAdded();
  block(matchDeleteLicens(e.id, ANY), function () {
    verifyLicensExists(e.id);
  });
});

bthread("Licens update verification", function () {
  const e = waitForAnyLicensUpdated();
  block(matchDeleteLicens(e.id, ANY), function () {
    verifyLicensUpdated(e.id);
  });
});

bthread("Licens delete verification", function () {
  const e = waitForAnyLicensDeleted();
  block(matchAddLicens(e.id, ANY), function () {
    verifyLicensDoesNotExist(e.id);
  });
});

bthread("Markdown create verification", function () {
  const e = waitForAnyMarkdownAdded();
  block(matchDeleteMarkdown(e.id, ANY), function () {
    verifyMarkdownExists(e.id);
  });
});

bthread("Markdown update verification", function () {
  const e = waitForAnyMarkdownUpdated();
  block(matchDeleteMarkdown(e.id, ANY), function () {
    verifyMarkdownUpdated(e.id);
  });
});

bthread("Markdown delete verification", function () {
  const e = waitForAnyMarkdownDeleted();
  block(matchAddMarkdown(e.id, ANY), function () {
    verifyMarkdownDoesNotExist(e.id);
  });
});

bthread("Markup create verification", function () {
  const e = waitForAnyMarkupAdded();
  block(matchDeleteMarkup(e.id, ANY), function () {
    verifyMarkupExists(e.id);
  });
});

bthread("Markup update verification", function () {
  const e = waitForAnyMarkupUpdated();
  block(matchDeleteMarkup(e.id, ANY), function () {
    verifyMarkupUpdated(e.id);
  });
});

bthread("Markup delete verification", function () {
  const e = waitForAnyMarkupDeleted();
  block(matchAddMarkup(e.id, ANY), function () {
    verifyMarkupDoesNotExist(e.id);
  });
});

bthread("Media create verification", function () {
  const e = waitForAnyMediaAdded();
  block(matchDeleteMedia(e.id, ANY), function () {
    verifyMediaExists(e.id);
  });
});

bthread("Media update verification", function () {
  const e = waitForAnyMediaUpdated();
  block(matchDeleteMedia(e.id, ANY), function () {
    verifyMediaUpdated(e.id);
  });
});

bthread("Media delete verification", function () {
  const e = waitForAnyMediaDeleted();
  block(matchAddMedia(e.id, ANY), function () {
    verifyMediaDoesNotExist(e.id);
  });
});

bthread("Member create verification", function () {
  const e = waitForAnyMemberAdded();
  block(matchDeleteMember(e.id, ANY), function () {
    verifyMemberExists(e.id);
  });
});

bthread("Member update verification", function () {
  const e = waitForAnyMemberUpdated();
  block(matchDeleteMember(e.id, ANY), function () {
    verifyMemberUpdated(e.id);
  });
});

bthread("Member delete verification", function () {
  const e = waitForAnyMemberDeleted();
  block(matchAddMember(e.id, ANY), function () {
    verifyMemberDoesNotExist(e.id);
  });
});

bthread("Merge create verification", function () {
  const e = waitForAnyMergeAdded();
  block(matchDeleteMerge(e.id, ANY), function () {
    verifyMergeExists(e.id);
  });
});

bthread("Merge update verification", function () {
  const e = waitForAnyMergeUpdated();
  block(matchDeleteMerge(e.id, ANY), function () {
    verifyMergeUpdated(e.id);
  });
});

bthread("Merge delete verification", function () {
  const e = waitForAnyMergeDeleted();
  block(matchAddMerge(e.id, ANY), function () {
    verifyMergeDoesNotExist(e.id);
  });
});

bthread("Mergeupstream create verification", function () {
  const e = waitForAnyMergeupstreamAdded();
  block(matchDeleteMergeupstream(e.id, ANY), function () {
    verifyMergeupstreamExists(e.id);
  });
});

bthread("Mergeupstream update verification", function () {
  const e = waitForAnyMergeupstreamUpdated();
  block(matchDeleteMergeupstream(e.id, ANY), function () {
    verifyMergeupstreamUpdated(e.id);
  });
});

bthread("Mergeupstream delete verification", function () {
  const e = waitForAnyMergeupstreamDeleted();
  block(matchAddMergeupstream(e.id, ANY), function () {
    verifyMergeupstreamDoesNotExist(e.id);
  });
});

bthread("Migrate create verification", function () {
  const e = waitForAnyMigrateAdded();
  block(matchDeleteMigrate(e.id, ANY), function () {
    verifyMigrateExists(e.id);
  });
});

bthread("Migrate update verification", function () {
  const e = waitForAnyMigrateUpdated();
  block(matchDeleteMigrate(e.id, ANY), function () {
    verifyMigrateUpdated(e.id);
  });
});

bthread("Migrate delete verification", function () {
  const e = waitForAnyMigrateDeleted();
  block(matchAddMigrate(e.id, ANY), function () {
    verifyMigrateDoesNotExist(e.id);
  });
});

bthread("Milestone create verification", function () {
  const e = waitForAnyMilestoneAdded();
  block(matchDeleteMilestone(e.id, ANY), function () {
    verifyMilestoneExists(e.id);
  });
});

bthread("Milestone update verification", function () {
  const e = waitForAnyMilestoneUpdated();
  block(matchDeleteMilestone(e.id, ANY), function () {
    verifyMilestoneUpdated(e.id);
  });
});

bthread("Milestone delete verification", function () {
  const e = waitForAnyMilestoneDeleted();
  block(matchAddMilestone(e.id, ANY), function () {
    verifyMilestoneDoesNotExist(e.id);
  });
});

bthread("Mirrorsync create verification", function () {
  const e = waitForAnyMirrorsyncAdded();
  block(matchDeleteMirrorsync(e.id, ANY), function () {
    verifyMirrorsyncExists(e.id);
  });
});

bthread("Mirrorsync update verification", function () {
  const e = waitForAnyMirrorsyncUpdated();
  block(matchDeleteMirrorsync(e.id, ANY), function () {
    verifyMirrorsyncUpdated(e.id);
  });
});

bthread("Mirrorsync delete verification", function () {
  const e = waitForAnyMirrorsyncDeleted();
  block(matchAddMirrorsync(e.id, ANY), function () {
    verifyMirrorsyncDoesNotExist(e.id);
  });
});

bthread("New create verification", function () {
  const e = waitForAnyNewAdded();
  block(matchDeleteNew(e.id, ANY), function () {
    verifyNewExists(e.id);
  });
});

bthread("New update verification", function () {
  const e = waitForAnyNewUpdated();
  block(matchDeleteNew(e.id, ANY), function () {
    verifyNewUpdated(e.id);
  });
});

bthread("New delete verification", function () {
  const e = waitForAnyNewDeleted();
  block(matchAddNew(e.id, ANY), function () {
    verifyNewDoesNotExist(e.id);
  });
});

bthread("Newpinallowed create verification", function () {
  const e = waitForAnyNewpinallowedAdded();
  block(matchDeleteNewpinallowed(e.id, ANY), function () {
    verifyNewpinallowedExists(e.id);
  });
});

bthread("Newpinallowed update verification", function () {
  const e = waitForAnyNewpinallowedUpdated();
  block(matchDeleteNewpinallowed(e.id, ANY), function () {
    verifyNewpinallowedUpdated(e.id);
  });
});

bthread("Newpinallowed delete verification", function () {
  const e = waitForAnyNewpinallowedDeleted();
  block(matchAddNewpinallowed(e.id, ANY), function () {
    verifyNewpinallowedDoesNotExist(e.id);
  });
});

bthread("Nodeinfo create verification", function () {
  const e = waitForAnyNodeinfoAdded();
  block(matchDeleteNodeinfo(e.id, ANY), function () {
    verifyNodeinfoExists(e.id);
  });
});

bthread("Nodeinfo update verification", function () {
  const e = waitForAnyNodeinfoUpdated();
  block(matchDeleteNodeinfo(e.id, ANY), function () {
    verifyNodeinfoUpdated(e.id);
  });
});

bthread("Nodeinfo delete verification", function () {
  const e = waitForAnyNodeinfoDeleted();
  block(matchAddNodeinfo(e.id, ANY), function () {
    verifyNodeinfoDoesNotExist(e.id);
  });
});

bthread("Note create verification", function () {
  const e = waitForAnyNoteAdded();
  block(matchDeleteNote(e.id, ANY), function () {
    verifyNoteExists(e.id);
  });
});

bthread("Note update verification", function () {
  const e = waitForAnyNoteUpdated();
  block(matchDeleteNote(e.id, ANY), function () {
    verifyNoteUpdated(e.id);
  });
});

bthread("Note delete verification", function () {
  const e = waitForAnyNoteDeleted();
  block(matchAddNote(e.id, ANY), function () {
    verifyNoteDoesNotExist(e.id);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  block(matchDeleteNotification(e.id, ANY), function () {
    verifyNotificationExists(e.id);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  block(matchDeleteNotification(e.id, ANY), function () {
    verifyNotificationUpdated(e.id);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  block(matchAddNotification(e.id, ANY), function () {
    verifyNotificationDoesNotExist(e.id);
  });
});

bthread("Oauth2 create verification", function () {
  const e = waitForAnyOauth2Added();
  block(matchDeleteOauth2(e.id, ANY), function () {
    verifyOauth2Exists(e.id);
  });
});

bthread("Oauth2 update verification", function () {
  const e = waitForAnyOauth2Updated();
  block(matchDeleteOauth2(e.id, ANY), function () {
    verifyOauth2Updated(e.id);
  });
});

bthread("Oauth2 delete verification", function () {
  const e = waitForAnyOauth2Deleted();
  block(matchAddOauth2(e.id, ANY), function () {
    verifyOauth2DoesNotExist(e.id);
  });
});

bthread("Org create verification", function () {
  const e = waitForAnyOrgAdded();
  block(matchDeleteOrg(e.id, ANY), function () {
    verifyOrgExists(e.id);
  });
});

bthread("Org update verification", function () {
  const e = waitForAnyOrgUpdated();
  block(matchDeleteOrg(e.id, ANY), function () {
    verifyOrgUpdated(e.id);
  });
});

bthread("Org delete verification", function () {
  const e = waitForAnyOrgDeleted();
  block(matchAddOrg(e.id, ANY), function () {
    verifyOrgDoesNotExist(e.id);
  });
});

bthread("Package create verification", function () {
  const e = waitForAnyPackageAdded();
  block(matchDeletePackage(e.id, ANY), function () {
    verifyPackageExists(e.id);
  });
});

bthread("Package update verification", function () {
  const e = waitForAnyPackageUpdated();
  block(matchDeletePackage(e.id, ANY), function () {
    verifyPackageUpdated(e.id);
  });
});

bthread("Package delete verification", function () {
  const e = waitForAnyPackageDeleted();
  block(matchAddPackage(e.id, ANY), function () {
    verifyPackageDoesNotExist(e.id);
  });
});

bthread("Page create verification", function () {
  const e = waitForAnyPageAdded();
  block(matchDeletePage(e.id, ANY), function () {
    verifyPageExists(e.id);
  });
});

bthread("Page update verification", function () {
  const e = waitForAnyPageUpdated();
  block(matchDeletePage(e.id, ANY), function () {
    verifyPageUpdated(e.id);
  });
});

bthread("Page delete verification", function () {
  const e = waitForAnyPageDeleted();
  block(matchAddPage(e.id, ANY), function () {
    verifyPageDoesNotExist(e.id);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  block(matchDeletePermission(e.id, ANY), function () {
    verifyPermissionExists(e.id);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  block(matchDeletePermission(e.id, ANY), function () {
    verifyPermissionUpdated(e.id);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  block(matchAddPermission(e.id, ANY), function () {
    verifyPermissionDoesNotExist(e.id);
  });
});

bthread("Pin create verification", function () {
  const e = waitForAnyPinAdded();
  block(matchDeletePin(e.id, ANY), function () {
    verifyPinExists(e.id);
  });
});

bthread("Pin update verification", function () {
  const e = waitForAnyPinUpdated();
  block(matchDeletePin(e.id, ANY), function () {
    verifyPinUpdated(e.id);
  });
});

bthread("Pin delete verification", function () {
  const e = waitForAnyPinDeleted();
  block(matchAddPin(e.id, ANY), function () {
    verifyPinDoesNotExist(e.id);
  });
});

bthread("Pinned create verification", function () {
  const e = waitForAnyPinnedAdded();
  block(matchDeletePinned(e.id, ANY), function () {
    verifyPinnedExists(e.id);
  });
});

bthread("Pinned update verification", function () {
  const e = waitForAnyPinnedUpdated();
  block(matchDeletePinned(e.id, ANY), function () {
    verifyPinnedUpdated(e.id);
  });
});

bthread("Pinned delete verification", function () {
  const e = waitForAnyPinnedDeleted();
  block(matchAddPinned(e.id, ANY), function () {
    verifyPinnedDoesNotExist(e.id);
  });
});

bthread("Priority create verification", function () {
  const e = waitForAnyPriorityAdded();
  block(matchDeletePriority(e.id, ANY), function () {
    verifyPriorityExists(e.id);
  });
});

bthread("Priority update verification", function () {
  const e = waitForAnyPriorityUpdated();
  block(matchDeletePriority(e.id, ANY), function () {
    verifyPriorityUpdated(e.id);
  });
});

bthread("Priority delete verification", function () {
  const e = waitForAnyPriorityDeleted();
  block(matchAddPriority(e.id, ANY), function () {
    verifyPriorityDoesNotExist(e.id);
  });
});

bthread("Publicmember create verification", function () {
  const e = waitForAnyPublicmemberAdded();
  block(matchDeletePublicmember(e.id, ANY), function () {
    verifyPublicmemberExists(e.id);
  });
});

bthread("Publicmember update verification", function () {
  const e = waitForAnyPublicmemberUpdated();
  block(matchDeletePublicmember(e.id, ANY), function () {
    verifyPublicmemberUpdated(e.id);
  });
});

bthread("Publicmember delete verification", function () {
  const e = waitForAnyPublicmemberDeleted();
  block(matchAddPublicmember(e.id, ANY), function () {
    verifyPublicmemberDoesNotExist(e.id);
  });
});

bthread("Pull create verification", function () {
  const e = waitForAnyPullAdded();
  block(matchDeletePull(e.id, ANY), function () {
    verifyPullExists(e.id);
  });
});

bthread("Pull update verification", function () {
  const e = waitForAnyPullUpdated();
  block(matchDeletePull(e.id, ANY), function () {
    verifyPullUpdated(e.id);
  });
});

bthread("Pull delete verification", function () {
  const e = waitForAnyPullDeleted();
  block(matchAddPull(e.id, ANY), function () {
    verifyPullDoesNotExist(e.id);
  });
});

bthread("Pushmirror create verification", function () {
  const e = waitForAnyPushmirrorAdded();
  block(matchDeletePushmirror(e.id, ANY), function () {
    verifyPushmirrorExists(e.id);
  });
});

bthread("Pushmirror update verification", function () {
  const e = waitForAnyPushmirrorUpdated();
  block(matchDeletePushmirror(e.id, ANY), function () {
    verifyPushmirrorUpdated(e.id);
  });
});

bthread("Pushmirror delete verification", function () {
  const e = waitForAnyPushmirrorDeleted();
  block(matchAddPushmirror(e.id, ANY), function () {
    verifyPushmirrorDoesNotExist(e.id);
  });
});

bthread("Pushmirrorssync create verification", function () {
  const e = waitForAnyPushmirrorssyncAdded();
  block(matchDeletePushmirrorssync(e.id, ANY), function () {
    verifyPushmirrorssyncExists(e.id);
  });
});

bthread("Pushmirrorssync update verification", function () {
  const e = waitForAnyPushmirrorssyncUpdated();
  block(matchDeletePushmirrorssync(e.id, ANY), function () {
    verifyPushmirrorssyncUpdated(e.id);
  });
});

bthread("Pushmirrorssync delete verification", function () {
  const e = waitForAnyPushmirrorssyncDeleted();
  block(matchAddPushmirrorssync(e.id, ANY), function () {
    verifyPushmirrorssyncDoesNotExist(e.id);
  });
});

bthread("Raw create verification", function () {
  const e = waitForAnyRawAdded();
  block(matchDeleteRaw(e.id, ANY), function () {
    verifyRawExists(e.id);
  });
});

bthread("Raw update verification", function () {
  const e = waitForAnyRawUpdated();
  block(matchDeleteRaw(e.id, ANY), function () {
    verifyRawUpdated(e.id);
  });
});

bthread("Raw delete verification", function () {
  const e = waitForAnyRawDeleted();
  block(matchAddRaw(e.id, ANY), function () {
    verifyRawDoesNotExist(e.id);
  });
});

bthread("Reaction create verification", function () {
  const e = waitForAnyReactionAdded();
  block(matchDeleteReaction(e.id, ANY), function () {
    verifyReactionExists(e.id);
  });
});

bthread("Reaction update verification", function () {
  const e = waitForAnyReactionUpdated();
  block(matchDeleteReaction(e.id, ANY), function () {
    verifyReactionUpdated(e.id);
  });
});

bthread("Reaction delete verification", function () {
  const e = waitForAnyReactionDeleted();
  block(matchAddReaction(e.id, ANY), function () {
    verifyReactionDoesNotExist(e.id);
  });
});

bthread("Ref create verification", function () {
  const e = waitForAnyRefAdded();
  block(matchDeleteRef(e.id, ANY), function () {
    verifyRefExists(e.id);
  });
});

bthread("Ref update verification", function () {
  const e = waitForAnyRefUpdated();
  block(matchDeleteRef(e.id, ANY), function () {
    verifyRefUpdated(e.id);
  });
});

bthread("Ref delete verification", function () {
  const e = waitForAnyRefDeleted();
  block(matchAddRef(e.id, ANY), function () {
    verifyRefDoesNotExist(e.id);
  });
});

bthread("Registrationtoken create verification", function () {
  const e = waitForAnyRegistrationtokenAdded();
  block(matchDeleteRegistrationtoken(e.id, ANY), function () {
    verifyRegistrationtokenExists(e.id);
  });
});

bthread("Registrationtoken update verification", function () {
  const e = waitForAnyRegistrationtokenUpdated();
  block(matchDeleteRegistrationtoken(e.id, ANY), function () {
    verifyRegistrationtokenUpdated(e.id);
  });
});

bthread("Registrationtoken delete verification", function () {
  const e = waitForAnyRegistrationtokenDeleted();
  block(matchAddRegistrationtoken(e.id, ANY), function () {
    verifyRegistrationtokenDoesNotExist(e.id);
  });
});

bthread("Reject create verification", function () {
  const e = waitForAnyRejectAdded();
  block(matchDeleteReject(e.id, ANY), function () {
    verifyRejectExists(e.id);
  });
});

bthread("Reject update verification", function () {
  const e = waitForAnyRejectUpdated();
  block(matchDeleteReject(e.id, ANY), function () {
    verifyRejectUpdated(e.id);
  });
});

bthread("Reject delete verification", function () {
  const e = waitForAnyRejectDeleted();
  block(matchAddReject(e.id, ANY), function () {
    verifyRejectDoesNotExist(e.id);
  });
});

bthread("Releas create verification", function () {
  const e = waitForAnyReleasAdded();
  block(matchDeleteReleas(e.id, ANY), function () {
    verifyReleasExists(e.id);
  });
});

bthread("Releas update verification", function () {
  const e = waitForAnyReleasUpdated();
  block(matchDeleteReleas(e.id, ANY), function () {
    verifyReleasUpdated(e.id);
  });
});

bthread("Releas delete verification", function () {
  const e = waitForAnyReleasDeleted();
  block(matchAddReleas(e.id, ANY), function () {
    verifyReleasDoesNotExist(e.id);
  });
});

bthread("Rename create verification", function () {
  const e = waitForAnyRenameAdded();
  block(matchDeleteRename(e.id, ANY), function () {
    verifyRenameExists(e.id);
  });
});

bthread("Rename update verification", function () {
  const e = waitForAnyRenameUpdated();
  block(matchDeleteRename(e.id, ANY), function () {
    verifyRenameUpdated(e.id);
  });
});

bthread("Rename delete verification", function () {
  const e = waitForAnyRenameDeleted();
  block(matchAddRename(e.id, ANY), function () {
    verifyRenameDoesNotExist(e.id);
  });
});

bthread("Repo create verification", function () {
  const e = waitForAnyRepoAdded();
  block(matchDeleteRepo(e.id, ANY), function () {
    verifyRepoExists(e.id);
  });
});

bthread("Repo update verification", function () {
  const e = waitForAnyRepoUpdated();
  block(matchDeleteRepo(e.id, ANY), function () {
    verifyRepoUpdated(e.id);
  });
});

bthread("Repo delete verification", function () {
  const e = waitForAnyRepoDeleted();
  block(matchAddRepo(e.id, ANY), function () {
    verifyRepoDoesNotExist(e.id);
  });
});

bthread("Repository create verification", function () {
  const e = waitForAnyRepositoryAdded();
  block(matchDeleteRepository(e.id, ANY), function () {
    verifyRepositoryExists(e.id);
  });
});

bthread("Repository update verification", function () {
  const e = waitForAnyRepositoryUpdated();
  block(matchDeleteRepository(e.id, ANY), function () {
    verifyRepositoryUpdated(e.id);
  });
});

bthread("Repository delete verification", function () {
  const e = waitForAnyRepositoryDeleted();
  block(matchAddRepository(e.id, ANY), function () {
    verifyRepositoryDoesNotExist(e.id);
  });
});

bthread("Requestedreviewer create verification", function () {
  const e = waitForAnyRequestedreviewerAdded();
  block(matchDeleteRequestedreviewer(e.id, ANY), function () {
    verifyRequestedreviewerExists(e.id);
  });
});

bthread("Requestedreviewer update verification", function () {
  const e = waitForAnyRequestedreviewerUpdated();
  block(matchDeleteRequestedreviewer(e.id, ANY), function () {
    verifyRequestedreviewerUpdated(e.id);
  });
});

bthread("Requestedreviewer delete verification", function () {
  const e = waitForAnyRequestedreviewerDeleted();
  block(matchAddRequestedreviewer(e.id, ANY), function () {
    verifyRequestedreviewerDoesNotExist(e.id);
  });
});

bthread("Review create verification", function () {
  const e = waitForAnyReviewAdded();
  block(matchDeleteReview(e.id, ANY), function () {
    verifyReviewExists(e.id);
  });
});

bthread("Review update verification", function () {
  const e = waitForAnyReviewUpdated();
  block(matchDeleteReview(e.id, ANY), function () {
    verifyReviewUpdated(e.id);
  });
});

bthread("Review delete verification", function () {
  const e = waitForAnyReviewDeleted();
  block(matchAddReview(e.id, ANY), function () {
    verifyReviewDoesNotExist(e.id);
  });
});

bthread("Reviewer create verification", function () {
  const e = waitForAnyReviewerAdded();
  block(matchDeleteReviewer(e.id, ANY), function () {
    verifyReviewerExists(e.id);
  });
});

bthread("Reviewer update verification", function () {
  const e = waitForAnyReviewerUpdated();
  block(matchDeleteReviewer(e.id, ANY), function () {
    verifyReviewerUpdated(e.id);
  });
});

bthread("Reviewer delete verification", function () {
  const e = waitForAnyReviewerDeleted();
  block(matchAddReviewer(e.id, ANY), function () {
    verifyReviewerDoesNotExist(e.id);
  });
});

bthread("Revision create verification", function () {
  const e = waitForAnyRevisionAdded();
  block(matchDeleteRevision(e.id, ANY), function () {
    verifyRevisionExists(e.id);
  });
});

bthread("Revision update verification", function () {
  const e = waitForAnyRevisionUpdated();
  block(matchDeleteRevision(e.id, ANY), function () {
    verifyRevisionUpdated(e.id);
  });
});

bthread("Revision delete verification", function () {
  const e = waitForAnyRevisionDeleted();
  block(matchAddRevision(e.id, ANY), function () {
    verifyRevisionDoesNotExist(e.id);
  });
});

bthread("Runner create verification", function () {
  const e = waitForAnyRunnerAdded();
  block(matchDeleteRunner(e.id, ANY), function () {
    verifyRunnerExists(e.id);
  });
});

bthread("Runner update verification", function () {
  const e = waitForAnyRunnerUpdated();
  block(matchDeleteRunner(e.id, ANY), function () {
    verifyRunnerUpdated(e.id);
  });
});

bthread("Runner delete verification", function () {
  const e = waitForAnyRunnerDeleted();
  block(matchAddRunner(e.id, ANY), function () {
    verifyRunnerDoesNotExist(e.id);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  block(matchDeleteSearch(e.id, ANY), function () {
    verifySearchExists(e.id);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  block(matchDeleteSearch(e.id, ANY), function () {
    verifySearchUpdated(e.id);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  block(matchAddSearch(e.id, ANY), function () {
    verifySearchDoesNotExist(e.id);
  });
});

bthread("Secret create verification", function () {
  const e = waitForAnySecretAdded();
  block(matchDeleteSecret(e.id, ANY), function () {
    verifySecretExists(e.id);
  });
});

bthread("Secret update verification", function () {
  const e = waitForAnySecretUpdated();
  block(matchDeleteSecret(e.id, ANY), function () {
    verifySecretUpdated(e.id);
  });
});

bthread("Secret delete verification", function () {
  const e = waitForAnySecretDeleted();
  block(matchAddSecret(e.id, ANY), function () {
    verifySecretDoesNotExist(e.id);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingExists(e.id);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingUpdated(e.id);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  block(matchAddSetting(e.id, ANY), function () {
    verifySettingDoesNotExist(e.id);
  });
});

bthread("Signingkeygpg create verification", function () {
  const e = waitForAnySigningkeygpgAdded();
  block(matchDeleteSigningkeygpg(e.id, ANY), function () {
    verifySigningkeygpgExists(e.id);
  });
});

bthread("Signingkeygpg update verification", function () {
  const e = waitForAnySigningkeygpgUpdated();
  block(matchDeleteSigningkeygpg(e.id, ANY), function () {
    verifySigningkeygpgUpdated(e.id);
  });
});

bthread("Signingkeygpg delete verification", function () {
  const e = waitForAnySigningkeygpgDeleted();
  block(matchAddSigningkeygpg(e.id, ANY), function () {
    verifySigningkeygpgDoesNotExist(e.id);
  });
});

bthread("Stargazer create verification", function () {
  const e = waitForAnyStargazerAdded();
  block(matchDeleteStargazer(e.id, ANY), function () {
    verifyStargazerExists(e.id);
  });
});

bthread("Stargazer update verification", function () {
  const e = waitForAnyStargazerUpdated();
  block(matchDeleteStargazer(e.id, ANY), function () {
    verifyStargazerUpdated(e.id);
  });
});

bthread("Stargazer delete verification", function () {
  const e = waitForAnyStargazerDeleted();
  block(matchAddStargazer(e.id, ANY), function () {
    verifyStargazerDoesNotExist(e.id);
  });
});

bthread("Starred create verification", function () {
  const e = waitForAnyStarredAdded();
  block(matchDeleteStarred(e.id, ANY), function () {
    verifyStarredExists(e.id);
  });
});

bthread("Starred update verification", function () {
  const e = waitForAnyStarredUpdated();
  block(matchDeleteStarred(e.id, ANY), function () {
    verifyStarredUpdated(e.id);
  });
});

bthread("Starred delete verification", function () {
  const e = waitForAnyStarredDeleted();
  block(matchAddStarred(e.id, ANY), function () {
    verifyStarredDoesNotExist(e.id);
  });
});

bthread("Start create verification", function () {
  const e = waitForAnyStartAdded();
  block(matchDeleteStart(e.id, ANY), function () {
    verifyStartExists(e.id);
  });
});

bthread("Start update verification", function () {
  const e = waitForAnyStartUpdated();
  block(matchDeleteStart(e.id, ANY), function () {
    verifyStartUpdated(e.id);
  });
});

bthread("Start delete verification", function () {
  const e = waitForAnyStartDeleted();
  block(matchAddStart(e.id, ANY), function () {
    verifyStartDoesNotExist(e.id);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  block(matchDeleteStatu(e.id, ANY), function () {
    verifyStatuExists(e.id);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  block(matchDeleteStatu(e.id, ANY), function () {
    verifyStatuUpdated(e.id);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  block(matchAddStatu(e.id, ANY), function () {
    verifyStatuDoesNotExist(e.id);
  });
});

bthread("Status create verification", function () {
  const e = waitForAnyStatusAdded();
  block(matchDeleteStatus(e.id, ANY), function () {
    verifyStatusExists(e.id);
  });
});

bthread("Status update verification", function () {
  const e = waitForAnyStatusUpdated();
  block(matchDeleteStatus(e.id, ANY), function () {
    verifyStatusUpdated(e.id);
  });
});

bthread("Status delete verification", function () {
  const e = waitForAnyStatusDeleted();
  block(matchAddStatus(e.id, ANY), function () {
    verifyStatusDoesNotExist(e.id);
  });
});

bthread("Stop create verification", function () {
  const e = waitForAnyStopAdded();
  block(matchDeleteStop(e.id, ANY), function () {
    verifyStopExists(e.id);
  });
});

bthread("Stop update verification", function () {
  const e = waitForAnyStopUpdated();
  block(matchDeleteStop(e.id, ANY), function () {
    verifyStopUpdated(e.id);
  });
});

bthread("Stop delete verification", function () {
  const e = waitForAnyStopDeleted();
  block(matchAddStop(e.id, ANY), function () {
    verifyStopDoesNotExist(e.id);
  });
});

bthread("Stopwatch create verification", function () {
  const e = waitForAnyStopwatchAdded();
  block(matchDeleteStopwatch(e.id, ANY), function () {
    verifyStopwatchExists(e.id);
  });
});

bthread("Stopwatch update verification", function () {
  const e = waitForAnyStopwatchUpdated();
  block(matchDeleteStopwatch(e.id, ANY), function () {
    verifyStopwatchUpdated(e.id);
  });
});

bthread("Stopwatch delete verification", function () {
  const e = waitForAnyStopwatchDeleted();
  block(matchAddStopwatch(e.id, ANY), function () {
    verifyStopwatchDoesNotExist(e.id);
  });
});

bthread("Stopwatche create verification", function () {
  const e = waitForAnyStopwatcheAdded();
  block(matchDeleteStopwatche(e.id, ANY), function () {
    verifyStopwatcheExists(e.id);
  });
});

bthread("Stopwatche update verification", function () {
  const e = waitForAnyStopwatcheUpdated();
  block(matchDeleteStopwatche(e.id, ANY), function () {
    verifyStopwatcheUpdated(e.id);
  });
});

bthread("Stopwatche delete verification", function () {
  const e = waitForAnyStopwatcheDeleted();
  block(matchAddStopwatche(e.id, ANY), function () {
    verifyStopwatcheDoesNotExist(e.id);
  });
});

bthread("Subscriber create verification", function () {
  const e = waitForAnySubscriberAdded();
  block(matchDeleteSubscriber(e.id, ANY), function () {
    verifySubscriberExists(e.id);
  });
});

bthread("Subscriber update verification", function () {
  const e = waitForAnySubscriberUpdated();
  block(matchDeleteSubscriber(e.id, ANY), function () {
    verifySubscriberUpdated(e.id);
  });
});

bthread("Subscriber delete verification", function () {
  const e = waitForAnySubscriberDeleted();
  block(matchAddSubscriber(e.id, ANY), function () {
    verifySubscriberDoesNotExist(e.id);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  block(matchDeleteSubscription(e.id, ANY), function () {
    verifySubscriptionExists(e.id);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  block(matchDeleteSubscription(e.id, ANY), function () {
    verifySubscriptionUpdated(e.id);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  block(matchAddSubscription(e.id, ANY), function () {
    verifySubscriptionDoesNotExist(e.id);
  });
});

bthread("Tag create verification", function () {
  const e = waitForAnyTagAdded();
  block(matchDeleteTag(e.id, ANY), function () {
    verifyTagExists(e.id);
  });
});

bthread("Tag update verification", function () {
  const e = waitForAnyTagUpdated();
  block(matchDeleteTag(e.id, ANY), function () {
    verifyTagUpdated(e.id);
  });
});

bthread("Tag delete verification", function () {
  const e = waitForAnyTagDeleted();
  block(matchAddTag(e.id, ANY), function () {
    verifyTagDoesNotExist(e.id);
  });
});

bthread("Tagprotection create verification", function () {
  const e = waitForAnyTagprotectionAdded();
  block(matchDeleteTagprotection(e.id, ANY), function () {
    verifyTagprotectionExists(e.id);
  });
});

bthread("Tagprotection update verification", function () {
  const e = waitForAnyTagprotectionUpdated();
  block(matchDeleteTagprotection(e.id, ANY), function () {
    verifyTagprotectionUpdated(e.id);
  });
});

bthread("Tagprotection delete verification", function () {
  const e = waitForAnyTagprotectionDeleted();
  block(matchAddTagprotection(e.id, ANY), function () {
    verifyTagprotectionDoesNotExist(e.id);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  block(matchDeleteTask(e.id, ANY), function () {
    verifyTaskExists(e.id);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  block(matchDeleteTask(e.id, ANY), function () {
    verifyTaskUpdated(e.id);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  block(matchAddTask(e.id, ANY), function () {
    verifyTaskDoesNotExist(e.id);
  });
});

bthread("Team create verification", function () {
  const e = waitForAnyTeamAdded();
  block(matchDeleteTeam(e.id, ANY), function () {
    verifyTeamExists(e.id);
  });
});

bthread("Team update verification", function () {
  const e = waitForAnyTeamUpdated();
  block(matchDeleteTeam(e.id, ANY), function () {
    verifyTeamUpdated(e.id);
  });
});

bthread("Team delete verification", function () {
  const e = waitForAnyTeamDeleted();
  block(matchAddTeam(e.id, ANY), function () {
    verifyTeamDoesNotExist(e.id);
  });
});

bthread("Template create verification", function () {
  const e = waitForAnyTemplateAdded();
  block(matchDeleteTemplate(e.id, ANY), function () {
    verifyTemplateExists(e.id);
  });
});

bthread("Template update verification", function () {
  const e = waitForAnyTemplateUpdated();
  block(matchDeleteTemplate(e.id, ANY), function () {
    verifyTemplateUpdated(e.id);
  });
});

bthread("Template delete verification", function () {
  const e = waitForAnyTemplateDeleted();
  block(matchAddTemplate(e.id, ANY), function () {
    verifyTemplateDoesNotExist(e.id);
  });
});

bthread("Test create verification", function () {
  const e = waitForAnyTestAdded();
  block(matchDeleteTest(e.id, ANY), function () {
    verifyTestExists(e.id);
  });
});

bthread("Test update verification", function () {
  const e = waitForAnyTestUpdated();
  block(matchDeleteTest(e.id, ANY), function () {
    verifyTestUpdated(e.id);
  });
});

bthread("Test delete verification", function () {
  const e = waitForAnyTestDeleted();
  block(matchAddTest(e.id, ANY), function () {
    verifyTestDoesNotExist(e.id);
  });
});

bthread("Thread create verification", function () {
  const e = waitForAnyThreadAdded();
  block(matchDeleteThread(e.id, ANY), function () {
    verifyThreadExists(e.id);
  });
});

bthread("Thread update verification", function () {
  const e = waitForAnyThreadUpdated();
  block(matchDeleteThread(e.id, ANY), function () {
    verifyThreadUpdated(e.id);
  });
});

bthread("Thread delete verification", function () {
  const e = waitForAnyThreadDeleted();
  block(matchAddThread(e.id, ANY), function () {
    verifyThreadDoesNotExist(e.id);
  });
});

bthread("Time create verification", function () {
  const e = waitForAnyTimeAdded();
  block(matchDeleteTime(e.id, ANY), function () {
    verifyTimeExists(e.id);
  });
});

bthread("Time update verification", function () {
  const e = waitForAnyTimeUpdated();
  block(matchDeleteTime(e.id, ANY), function () {
    verifyTimeUpdated(e.id);
  });
});

bthread("Time delete verification", function () {
  const e = waitForAnyTimeDeleted();
  block(matchAddTime(e.id, ANY), function () {
    verifyTimeDoesNotExist(e.id);
  });
});

bthread("Timeline create verification", function () {
  const e = waitForAnyTimelineAdded();
  block(matchDeleteTimeline(e.id, ANY), function () {
    verifyTimelineExists(e.id);
  });
});

bthread("Timeline update verification", function () {
  const e = waitForAnyTimelineUpdated();
  block(matchDeleteTimeline(e.id, ANY), function () {
    verifyTimelineUpdated(e.id);
  });
});

bthread("Timeline delete verification", function () {
  const e = waitForAnyTimelineDeleted();
  block(matchAddTimeline(e.id, ANY), function () {
    verifyTimelineDoesNotExist(e.id);
  });
});

bthread("Token create verification", function () {
  const e = waitForAnyTokenAdded();
  block(matchDeleteToken(e.id, ANY), function () {
    verifyTokenExists(e.id);
  });
});

bthread("Token update verification", function () {
  const e = waitForAnyTokenUpdated();
  block(matchDeleteToken(e.id, ANY), function () {
    verifyTokenUpdated(e.id);
  });
});

bthread("Token delete verification", function () {
  const e = waitForAnyTokenDeleted();
  block(matchAddToken(e.id, ANY), function () {
    verifyTokenDoesNotExist(e.id);
  });
});

bthread("Topic create verification", function () {
  const e = waitForAnyTopicAdded();
  block(matchDeleteTopic(e.id, ANY), function () {
    verifyTopicExists(e.id);
  });
});

bthread("Topic update verification", function () {
  const e = waitForAnyTopicUpdated();
  block(matchDeleteTopic(e.id, ANY), function () {
    verifyTopicUpdated(e.id);
  });
});

bthread("Topic delete verification", function () {
  const e = waitForAnyTopicDeleted();
  block(matchAddTopic(e.id, ANY), function () {
    verifyTopicDoesNotExist(e.id);
  });
});

bthread("Transfer create verification", function () {
  const e = waitForAnyTransferAdded();
  block(matchDeleteTransfer(e.id, ANY), function () {
    verifyTransferExists(e.id);
  });
});

bthread("Transfer update verification", function () {
  const e = waitForAnyTransferUpdated();
  block(matchDeleteTransfer(e.id, ANY), function () {
    verifyTransferUpdated(e.id);
  });
});

bthread("Transfer delete verification", function () {
  const e = waitForAnyTransferDeleted();
  block(matchAddTransfer(e.id, ANY), function () {
    verifyTransferDoesNotExist(e.id);
  });
});

bthread("Tree create verification", function () {
  const e = waitForAnyTreeAdded();
  block(matchDeleteTree(e.id, ANY), function () {
    verifyTreeExists(e.id);
  });
});

bthread("Tree update verification", function () {
  const e = waitForAnyTreeUpdated();
  block(matchDeleteTree(e.id, ANY), function () {
    verifyTreeUpdated(e.id);
  });
});

bthread("Tree delete verification", function () {
  const e = waitForAnyTreeDeleted();
  block(matchAddTree(e.id, ANY), function () {
    verifyTreeDoesNotExist(e.id);
  });
});

bthread("Ui create verification", function () {
  const e = waitForAnyUiAdded();
  block(matchDeleteUi(e.id, ANY), function () {
    verifyUiExists(e.id);
  });
});

bthread("Ui update verification", function () {
  const e = waitForAnyUiUpdated();
  block(matchDeleteUi(e.id, ANY), function () {
    verifyUiUpdated(e.id);
  });
});

bthread("Ui delete verification", function () {
  const e = waitForAnyUiDeleted();
  block(matchAddUi(e.id, ANY), function () {
    verifyUiDoesNotExist(e.id);
  });
});

bthread("Unadopted create verification", function () {
  const e = waitForAnyUnadoptedAdded();
  block(matchDeleteUnadopted(e.id, ANY), function () {
    verifyUnadoptedExists(e.id);
  });
});

bthread("Unadopted update verification", function () {
  const e = waitForAnyUnadoptedUpdated();
  block(matchDeleteUnadopted(e.id, ANY), function () {
    verifyUnadoptedUpdated(e.id);
  });
});

bthread("Unadopted delete verification", function () {
  const e = waitForAnyUnadoptedDeleted();
  block(matchAddUnadopted(e.id, ANY), function () {
    verifyUnadoptedDoesNotExist(e.id);
  });
});

bthread("Undismissal create verification", function () {
  const e = waitForAnyUndismissalAdded();
  block(matchDeleteUndismissal(e.id, ANY), function () {
    verifyUndismissalExists(e.id);
  });
});

bthread("Undismissal update verification", function () {
  const e = waitForAnyUndismissalUpdated();
  block(matchDeleteUndismissal(e.id, ANY), function () {
    verifyUndismissalUpdated(e.id);
  });
});

bthread("Undismissal delete verification", function () {
  const e = waitForAnyUndismissalDeleted();
  block(matchAddUndismissal(e.id, ANY), function () {
    verifyUndismissalDoesNotExist(e.id);
  });
});

bthread("Update create verification", function () {
  const e = waitForAnyUpdateAdded();
  block(matchDeleteUpdate(e.id, ANY), function () {
    verifyUpdateExists(e.id);
  });
});

bthread("Update update verification", function () {
  const e = waitForAnyUpdateUpdated();
  block(matchDeleteUpdate(e.id, ANY), function () {
    verifyUpdateUpdated(e.id);
  });
});

bthread("Update delete verification", function () {
  const e = waitForAnyUpdateDeleted();
  block(matchAddUpdate(e.id, ANY), function () {
    verifyUpdateDoesNotExist(e.id);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserExists(e.id);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserUpdated(e.id);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  block(matchAddUser(e.id, ANY), function () {
    verifyUserDoesNotExist(e.id);
  });
});

bthread("Userid create verification", function () {
  const e = waitForAnyUseridAdded();
  block(matchDeleteUserid(e.id, ANY), function () {
    verifyUseridExists(e.id);
  });
});

bthread("Userid update verification", function () {
  const e = waitForAnyUseridUpdated();
  block(matchDeleteUserid(e.id, ANY), function () {
    verifyUseridUpdated(e.id);
  });
});

bthread("Userid delete verification", function () {
  const e = waitForAnyUseridDeleted();
  block(matchAddUserid(e.id, ANY), function () {
    verifyUseridDoesNotExist(e.id);
  });
});

bthread("Validate create verification", function () {
  const e = waitForAnyValidateAdded();
  block(matchDeleteValidate(e.id, ANY), function () {
    verifyValidateExists(e.id);
  });
});

bthread("Validate update verification", function () {
  const e = waitForAnyValidateUpdated();
  block(matchDeleteValidate(e.id, ANY), function () {
    verifyValidateUpdated(e.id);
  });
});

bthread("Validate delete verification", function () {
  const e = waitForAnyValidateDeleted();
  block(matchAddValidate(e.id, ANY), function () {
    verifyValidateDoesNotExist(e.id);
  });
});

bthread("Variable create verification", function () {
  const e = waitForAnyVariableAdded();
  block(matchDeleteVariable(e.id, ANY), function () {
    verifyVariableExists(e.id);
  });
});

bthread("Variable update verification", function () {
  const e = waitForAnyVariableUpdated();
  block(matchDeleteVariable(e.id, ANY), function () {
    verifyVariableUpdated(e.id);
  });
});

bthread("Variable delete verification", function () {
  const e = waitForAnyVariableDeleted();
  block(matchAddVariable(e.id, ANY), function () {
    verifyVariableDoesNotExist(e.id);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  block(matchDeleteVersion(e.id, ANY), function () {
    verifyVersionExists(e.id);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  block(matchDeleteVersion(e.id, ANY), function () {
    verifyVersionUpdated(e.id);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  block(matchAddVersion(e.id, ANY), function () {
    verifyVersionDoesNotExist(e.id);
  });
});

bthread("Wiki create verification", function () {
  const e = waitForAnyWikiAdded();
  block(matchDeleteWiki(e.id, ANY), function () {
    verifyWikiExists(e.id);
  });
});

bthread("Wiki update verification", function () {
  const e = waitForAnyWikiUpdated();
  block(matchDeleteWiki(e.id, ANY), function () {
    verifyWikiUpdated(e.id);
  });
});

bthread("Wiki delete verification", function () {
  const e = waitForAnyWikiDeleted();
  block(matchAddWiki(e.id, ANY), function () {
    verifyWikiDoesNotExist(e.id);
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


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Accept", "Action", "Activity", "Activitypub", "Admin", "Api", "Application", "Archive", "Asset", "Assignee", "Attachment", "Avatar", "Badge", "Blob", "Block", "Branche", "Branchprotection", "Check", "Collaborator", "Comment", "Commit", "Compare", "Content", "Cron", "Deadline", "Delete", "Dependency", "Diffpatch", "Dismissal", "Editorconfig", "Email", "Feed", "File", "Follower", "Following", "Fork", "Generate", "Git", "Gitignore", "Gpgkey", "Gpgkeytoken", "Gpgkeyverify", "Heatmap", "Hook", "Inbox", "Issue", "Issueconfig", "Issuetemplate", "Key", "Label", "Language", "Latest", "Licens", "Markdown", "Markup", "Media", "Member", "Merge", "Mergeupstream", "Migrate", "Milestone", "Mirrorsync", "New", "Newpinallowed", "Nodeinfo", "Note", "Notification", "Oauth2", "Org", "Package", "Page", "Permission", "Pin", "Pinned", "Priority", "Publicmember", "Pull", "Pushmirror", "Pushmirrorssync", "Raw", "Reaction", "Ref", "Registrationtoken", "Reject", "Releas", "Rename", "Repo", "Repository", "Requestedreviewer", "Review", "Reviewer", "Revision", "Runner", "Search", "Secret", "Setting", "Signingkeygpg", "Stargazer", "Starred", "Start", "Statu", "Status", "Stop", "Stopwatch", "Stopwatche", "Subscriber", "Subscription", "Tag", "Tagprotection", "Task", "Team", "Template", "Test", "Thread", "Time", "Timeline", "Token", "Topic", "Transfer", "Tree", "Ui", "Unadopted", "Undismissal", "Update", "User", "Userid", "Validate", "Variable", "Version", "Wiki"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Accept": {"add": "addAccept", "update": "updateAccept", "delete": "deleteAccept"}, "Action": {"add": "addAction", "update": "updateAction", "delete": "deleteAction"}, "Activity": {"add": "addActivity", "update": "updateActivity", "delete": "deleteActivity"}, "Activitypub": {"add": "addActivitypub", "update": "updateActivitypub", "delete": "deleteActivitypub"}, "Admin": {"add": "addAdmin", "update": "updateAdmin", "delete": "deleteAdmin"}, "Api": {"add": "addApi", "update": "updateApi", "delete": "deleteApi"}, "Application": {"add": "addApplication", "update": "updateApplication", "delete": "deleteApplication"}, "Archive": {"add": "addArchive", "update": "updateArchive", "delete": "deleteArchive"}, "Asset": {"add": "addAsset", "update": "updateAsset", "delete": "deleteAsset"}, "Assignee": {"add": "addAssignee", "update": "updateAssignee", "delete": "deleteAssignee"}, "Attachment": {"add": "addAttachment", "update": "updateAttachment", "delete": "deleteAttachment"}, "Avatar": {"add": "addAvatar", "update": "updateAvatar", "delete": "deleteAvatar"}, "Badge": {"add": "addBadge", "update": "updateBadge", "delete": "deleteBadge"}, "Blob": {"add": "addBlob", "update": "updateBlob", "delete": "deleteBlob"}, "Block": {"add": "addBlock", "update": "updateBlock", "delete": "deleteBlock"}, "Branche": {"add": "addBranche", "update": "updateBranche", "delete": "deleteBranche"}, "Branchprotection": {"add": "addBranchprotection", "update": "updateBranchprotection", "delete": "deleteBranchprotection"}, "Check": {"add": "addCheck", "update": "updateCheck", "delete": "deleteCheck"}, "Collaborator": {"add": "addCollaborator", "update": "updateCollaborator", "delete": "deleteCollaborator"}, "Comment": {"add": "addComment", "update": "updateComment", "delete": "deleteComment"}, "Commit": {"add": "addCommit", "update": "updateCommit", "delete": "deleteCommit"}, "Compare": {"add": "addCompare", "update": "updateCompare", "delete": "deleteCompare"}, "Content": {"add": "addContent", "update": "updateContent", "delete": "deleteContent"}, "Cron": {"add": "addCron", "update": "updateCron", "delete": "deleteCron"}, "Deadline": {"add": "addDeadline", "update": "updateDeadline", "delete": "deleteDeadline"}, "Delete": {"add": "addDelete", "update": "updateDelete", "delete": "deleteDelete"}, "Dependency": {"add": "addDependency", "update": "updateDependency", "delete": "deleteDependency"}, "Diffpatch": {"add": "addDiffpatch", "update": "updateDiffpatch", "delete": "deleteDiffpatch"}, "Dismissal": {"add": "addDismissal", "update": "updateDismissal", "delete": "deleteDismissal"}, "Editorconfig": {"add": "addEditorconfig", "update": "updateEditorconfig", "delete": "deleteEditorconfig"}, "Email": {"add": "addEmail", "update": "updateEmail", "delete": "deleteEmail"}, "Feed": {"add": "addFeed", "update": "updateFeed", "delete": "deleteFeed"}, "File": {"add": "addFile", "update": "updateFile", "delete": "deleteFile"}, "Follower": {"add": "addFollower", "update": "updateFollower", "delete": "deleteFollower"}, "Following": {"add": "addFollowing", "update": "updateFollowing", "delete": "deleteFollowing"}, "Fork": {"add": "addFork", "update": "updateFork", "delete": "deleteFork"}, "Generate": {"add": "addGenerate", "update": "updateGenerate", "delete": "deleteGenerate"}, "Git": {"add": "addGit", "update": "updateGit", "delete": "deleteGit"}, "Gitignore": {"add": "addGitignore", "update": "updateGitignore", "delete": "deleteGitignore"}, "Gpgkey": {"add": "addGpgkey", "update": "updateGpgkey", "delete": "deleteGpgkey"}, "Gpgkeytoken": {"add": "addGpgkeytoken", "update": "updateGpgkeytoken", "delete": "deleteGpgkeytoken"}, "Gpgkeyverify": {"add": "addGpgkeyverify", "update": "updateGpgkeyverify", "delete": "deleteGpgkeyverify"}, "Heatmap": {"add": "addHeatmap", "update": "updateHeatmap", "delete": "deleteHeatmap"}, "Hook": {"add": "addHook", "update": "updateHook", "delete": "deleteHook"}, "Inbox": {"add": "addInbox", "update": "updateInbox", "delete": "deleteInbox"}, "Issue": {"add": "addIssue", "update": "updateIssue", "delete": "deleteIssue"}, "Issueconfig": {"add": "addIssueconfig", "update": "updateIssueconfig", "delete": "deleteIssueconfig"}, "Issuetemplate": {"add": "addIssuetemplate", "update": "updateIssuetemplate", "delete": "deleteIssuetemplate"}, "Key": {"add": "addKey", "update": "updateKey", "delete": "deleteKey"}, "Label": {"add": "addLabel", "update": "updateLabel", "delete": "deleteLabel"}, "Language": {"add": "addLanguage", "update": "updateLanguage", "delete": "deleteLanguage"}, "Latest": {"add": "addLatest", "update": "updateLatest", "delete": "deleteLatest"}, "Licens": {"add": "addLicens", "update": "updateLicens", "delete": "deleteLicens"}, "Markdown": {"add": "addMarkdown", "update": "updateMarkdown", "delete": "deleteMarkdown"}, "Markup": {"add": "addMarkup", "update": "updateMarkup", "delete": "deleteMarkup"}, "Media": {"add": "addMedia", "update": "updateMedia", "delete": "deleteMedia"}, "Member": {"add": "addMember", "update": "updateMember", "delete": "deleteMember"}, "Merge": {"add": "addMerge", "update": "updateMerge", "delete": "deleteMerge"}, "Mergeupstream": {"add": "addMergeupstream", "update": "updateMergeupstream", "delete": "deleteMergeupstream"}, "Migrate": {"add": "addMigrate", "update": "updateMigrate", "delete": "deleteMigrate"}, "Milestone": {"add": "addMilestone", "update": "updateMilestone", "delete": "deleteMilestone"}, "Mirrorsync": {"add": "addMirrorsync", "update": "updateMirrorsync", "delete": "deleteMirrorsync"}, "New": {"add": "addNew", "update": "updateNew", "delete": "deleteNew"}, "Newpinallowed": {"add": "addNewpinallowed", "update": "updateNewpinallowed", "delete": "deleteNewpinallowed"}, "Nodeinfo": {"add": "addNodeinfo", "update": "updateNodeinfo", "delete": "deleteNodeinfo"}, "Note": {"add": "addNote", "update": "updateNote", "delete": "deleteNote"}, "Notification": {"add": "addNotification", "update": "updateNotification", "delete": "deleteNotification"}, "Oauth2": {"add": "addOauth2", "update": "updateOauth2", "delete": "deleteOauth2"}, "Org": {"add": "addOrg", "update": "updateOrg", "delete": "deleteOrg"}, "Package": {"add": "addPackage", "update": "updatePackage", "delete": "deletePackage"}, "Page": {"add": "addPage", "update": "updatePage", "delete": "deletePage"}, "Permission": {"add": "addPermission", "update": "updatePermission", "delete": "deletePermission"}, "Pin": {"add": "addPin", "update": "updatePin", "delete": "deletePin"}, "Pinned": {"add": "addPinned", "update": "updatePinned", "delete": "deletePinned"}, "Priority": {"add": "addPriority", "update": "updatePriority", "delete": "deletePriority"}, "Publicmember": {"add": "addPublicmember", "update": "updatePublicmember", "delete": "deletePublicmember"}, "Pull": {"add": "addPull", "update": "updatePull", "delete": "deletePull"}, "Pushmirror": {"add": "addPushmirror", "update": "updatePushmirror", "delete": "deletePushmirror"}, "Pushmirrorssync": {"add": "addPushmirrorssync", "update": "updatePushmirrorssync", "delete": "deletePushmirrorssync"}, "Raw": {"add": "addRaw", "update": "updateRaw", "delete": "deleteRaw"}, "Reaction": {"add": "addReaction", "update": "updateReaction", "delete": "deleteReaction"}, "Ref": {"add": "addRef", "update": "updateRef", "delete": "deleteRef"}, "Registrationtoken": {"add": "addRegistrationtoken", "update": "updateRegistrationtoken", "delete": "deleteRegistrationtoken"}, "Reject": {"add": "addReject", "update": "updateReject", "delete": "deleteReject"}, "Releas": {"add": "addReleas", "update": "updateReleas", "delete": "deleteReleas"}, "Rename": {"add": "addRename", "update": "updateRename", "delete": "deleteRename"}, "Repo": {"add": "addRepo", "update": "updateRepo", "delete": "deleteRepo"}, "Repository": {"add": "addRepository", "update": "updateRepository", "delete": "deleteRepository"}, "Requestedreviewer": {"add": "addRequestedreviewer", "update": "updateRequestedreviewer", "delete": "deleteRequestedreviewer"}, "Review": {"add": "addReview", "update": "updateReview", "delete": "deleteReview"}, "Reviewer": {"add": "addReviewer", "update": "updateReviewer", "delete": "deleteReviewer"}, "Revision": {"add": "addRevision", "update": "updateRevision", "delete": "deleteRevision"}, "Runner": {"add": "addRunner", "update": "updateRunner", "delete": "deleteRunner"}, "Search": {"add": "addSearch", "update": "updateSearch", "delete": "deleteSearch"}, "Secret": {"add": "addSecret", "update": "updateSecret", "delete": "deleteSecret"}, "Setting": {"add": "addSetting", "update": "updateSetting", "delete": "deleteSetting"}, "Signingkeygpg": {"add": "addSigningkeygpg", "update": "updateSigningkeygpg", "delete": "deleteSigningkeygpg"}, "Stargazer": {"add": "addStargazer", "update": "updateStargazer", "delete": "deleteStargazer"}, "Starred": {"add": "addStarred", "update": "updateStarred", "delete": "deleteStarred"}, "Start": {"add": "addStart", "update": "updateStart", "delete": "deleteStart"}, "Statu": {"add": "addStatu", "update": "updateStatu", "delete": "deleteStatu"}, "Status": {"add": "addStatus", "update": "updateStatus", "delete": "deleteStatus"}, "Stop": {"add": "addStop", "update": "updateStop", "delete": "deleteStop"}, "Stopwatch": {"add": "addStopwatch", "update": "updateStopwatch", "delete": "deleteStopwatch"}, "Stopwatche": {"add": "addStopwatche", "update": "updateStopwatche", "delete": "deleteStopwatche"}, "Subscriber": {"add": "addSubscriber", "update": "updateSubscriber", "delete": "deleteSubscriber"}, "Subscription": {"add": "addSubscription", "update": "updateSubscription", "delete": "deleteSubscription"}, "Tag": {"add": "addTag", "update": "updateTag", "delete": "deleteTag"}, "Tagprotection": {"add": "addTagprotection", "update": "updateTagprotection", "delete": "deleteTagprotection"}, "Task": {"add": "addTask", "update": "updateTask", "delete": "deleteTask"}, "Team": {"add": "addTeam", "update": "updateTeam", "delete": "deleteTeam"}, "Template": {"add": "addTemplate", "update": "updateTemplate", "delete": "deleteTemplate"}, "Test": {"add": "addTest", "update": "updateTest", "delete": "deleteTest"}, "Thread": {"add": "addThread", "update": "updateThread", "delete": "deleteThread"}, "Time": {"add": "addTime", "update": "updateTime", "delete": "deleteTime"}, "Timeline": {"add": "addTimeline", "update": "updateTimeline", "delete": "deleteTimeline"}, "Token": {"add": "addToken", "update": "updateToken", "delete": "deleteToken"}, "Topic": {"add": "addTopic", "update": "updateTopic", "delete": "deleteTopic"}, "Transfer": {"add": "addTransfer", "update": "updateTransfer", "delete": "deleteTransfer"}, "Tree": {"add": "addTree", "update": "updateTree", "delete": "deleteTree"}, "Ui": {"add": "addUi", "update": "updateUi", "delete": "deleteUi"}, "Unadopted": {"add": "addUnadopted", "update": "updateUnadopted", "delete": "deleteUnadopted"}, "Undismissal": {"add": "addUndismissal", "update": "updateUndismissal", "delete": "deleteUndismissal"}, "Update": {"add": "addUpdate", "update": "updateUpdate", "delete": "deleteUpdate"}, "User": {"add": "addUser", "update": "updateUser", "delete": "deleteUser"}, "Userid": {"add": "addUserid", "update": "updateUserid", "delete": "deleteUserid"}, "Validate": {"add": "addValidate", "update": "updateValidate", "delete": "deleteValidate"}, "Variable": {"add": "addVariable", "update": "updateVariable", "delete": "deleteVariable"}, "Version": {"add": "addVersion", "update": "updateVersion", "delete": "deleteVersion"}, "Wiki": {"add": "addWiki", "update": "updateWiki", "delete": "deleteWiki"}};
globalThis.__DSL_ARG0__ = {"Accept": "id", "Action": "id", "Activity": "id", "Activitypub": "id", "Admin": "id", "Api": "id", "Application": "id", "Archive": "id", "Asset": "id", "Assignee": "id", "Attachment": "id", "Avatar": "id", "Badge": "id", "Blob": "id", "Block": "id", "Branche": "id", "Branchprotection": "id", "Check": "id", "Collaborator": "id", "Comment": "id", "Commit": "id", "Compare": "id", "Content": "id", "Cron": "id", "Deadline": "id", "Delete": "id", "Dependency": "id", "Diffpatch": "id", "Dismissal": "id", "Editorconfig": "id", "Email": "id", "Feed": "id", "File": "id", "Follower": "id", "Following": "id", "Fork": "id", "Generate": "id", "Git": "id", "Gitignore": "id", "Gpgkey": "id", "Gpgkeytoken": "id", "Gpgkeyverify": "id", "Heatmap": "id", "Hook": "id", "Inbox": "id", "Issue": "id", "Issueconfig": "id", "Issuetemplate": "id", "Key": "id", "Label": "id", "Language": "id", "Latest": "id", "Licens": "id", "Markdown": "id", "Markup": "id", "Media": "id", "Member": "id", "Merge": "id", "Mergeupstream": "id", "Migrate": "id", "Milestone": "id", "Mirrorsync": "id", "New": "id", "Newpinallowed": "id", "Nodeinfo": "id", "Note": "id", "Notification": "id", "Oauth2": "id", "Org": "id", "Package": "id", "Page": "id", "Permission": "id", "Pin": "id", "Pinned": "id", "Priority": "id", "Publicmember": "id", "Pull": "id", "Pushmirror": "id", "Pushmirrorssync": "id", "Raw": "id", "Reaction": "id", "Ref": "id", "Registrationtoken": "id", "Reject": "id", "Releas": "id", "Rename": "id", "Repo": "id", "Repository": "id", "Requestedreviewer": "id", "Review": "id", "Reviewer": "id", "Revision": "id", "Runner": "id", "Search": "id", "Secret": "id", "Setting": "id", "Signingkeygpg": "id", "Stargazer": "id", "Starred": "id", "Start": "id", "Statu": "id", "Status": "id", "Stop": "id", "Stopwatch": "id", "Stopwatche": "id", "Subscriber": "id", "Subscription": "id", "Tag": "id", "Tagprotection": "id", "Task": "id", "Team": "id", "Template": "id", "Test": "id", "Thread": "id", "Time": "id", "Timeline": "id", "Token": "id", "Topic": "id", "Transfer": "id", "Tree": "id", "Ui": "id", "Unadopted": "id", "Undismissal": "id", "Update": "id", "User": "id", "Userid": "id", "Validate": "id", "Variable": "id", "Version": "id", "Wiki": "id"};


// @auto-hazard-begin
(function AutoHazardPack(){
  if (typeof bp === 'undefined') return;
  if (String((bp.env && bp.env.HLS_HAZARD_PACK) || 'auto') === 'off') return;

  const R = (globalThis.read || globalThis || {});
  const on = (name, def=1) => Number((bp.env && bp.env[name]) ?? def) !== 0;
  const det = String((bp.env && bp.env.DET_MODE) || '1') === '1';
  const log = (...a)=>{ if (bp && bp.log && bp.log.info) try{ bp.log.info(a.join(' ')); }catch(_){ } };
  const FN = (k)=> typeof R[k] === 'function';
  const looksLikeIdField = (k, ent)=> /(^id$|Id$|ID$|_id$)/.test(k) || k.toLowerCase()=== (ent.toLowerCase()+'id');
  const looksLikeLimit   = (k)=> /(limit|capacity|quota|max|budget|credit)/i.test(k);
  const looksLikeAmount  = (k)=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k);
  const looksLikeStock   = (k)=> /(stock|inventory|balance|available|remaining|free)/i.test(k);

  const ENTS = globalThis.__DSL_ENTITIES__ || [];
  const RELS = globalThis.__GRAPH_RELATIONSHIPS__ || [];
  const DOFN = globalThis.__DSL_DO__ || {};
  const ARG0 = globalThis.__DSL_ARG0__ || {};

  globalThis.__hlsFocus = globalThis.__hlsFocus || {};

  function discoverReadersForEntity(ent){
    const plural = ent.endsWith('s') ? ent : ent + 's';
    const guesses = ['list'+plural, 'list'+ent, 'get'+ent, 'get'+ent+'ById', 'get'+plural, 'fetch'+ent, 'fetch'+plural];
    const readers = {};
    for (const g of guesses){
      if (FN(g)) readers[g] = R[g];
    }
    return readers;
  }

  async function sampleEntities(ent){
    const readers = discoverReadersForEntity(ent);
    const listFn = readers['list'+ent+'s'] || readers['list'+ent] || readers['get'+ent+'s'] || null;
    let items = [];
    if (listFn) { try { items = await listFn(); } catch(_) {} }
    if (!Array.isArray(items)) items = [];
    const sample = items[0] || {};
    const keys = Object.keys(sample||{});
    const idKey = keys.find(k=> looksLikeIdField(k, ent)) || 'id';
    const numericKeys = keys.filter(k=> typeof sample[k] === 'number');
    const counters = numericKeys.filter(k=> looksLikeStock(k));
    const amounts  = numericKeys.filter(k=> looksLikeAmount(k));
    const limits   = numericKeys.filter(k=> looksLikeLimit(k));
    return { items, idKey, counters, amounts, limits };
  }

  async function chooseFocusFor(ent){
    try {
      const s = await sampleEntities(ent);
      let id = s.items.length ? (det ? s.items[0][s.idKey] : s.items[Math.floor(Math.random()*s.items.length)][s.idKey]) : null;
      if (!id) {
        const waitName = 'waitForAny'+ent+'Added';
        if (typeof globalThis[waitName] === 'function') {
          const e = await globalThis[waitName]();
          if (e && e[s.idKey]) id = e[s.idKey];
          else if (e && e.id)  id = e.id;
        }
      }
      if (id !== undefined && id !== null) {
        globalThis.__hlsFocus[ent] = id;
      }
    } catch(_){}
  }

  (function wrapDo(){
    Object.keys(DOFN).forEach(ent => {
      const opmap = DOFN[ent] || {};
      ['add','update','delete'].forEach(op => {
        const fnName = opmap[op];
        if (!fnName) return;
        const orig = globalThis[fnName];
        if (typeof orig !== 'function') return;
        if (orig.__wrappedByHazard) return;
        const arg0Name = ARG0[ent] || 'id';
        globalThis[fnName] = async function(...args){
          const f = globalThis.__hlsFocus ? globalThis.__hlsFocus[ent] : undefined;
          if (f !== undefined && f !== null) {
            if (args.length === 0) args = [f];
            else args[0] = f;
          }
          return await orig.apply(this, args);
        };
        globalThis[fnName].__wrappedByHazard = true;
      });
    });
  })();

  try {
    ENTS.forEach(ent=>{
      bp.registerBThread('CB:'+ent+'Focus', function(){
        return bp.async(()=> chooseFocusFor(ent));
      });
    });
  } catch(_){}

  if (on('HLS_HAZARD_OVR',1)) {
    bp.registerBThread('HO:NonNegativeCounters', function(){
      return bp.async(async function(){
        const ents = ENTS;
        for (const ent of ents){
          const s = await sampleEntities(ent);
          const id = (globalThis.__hlsFocus && globalThis.__hlsFocus[ent]) || null;
          if (!id) continue;
          let obj=null;
          const r = discoverReadersForEntity(ent);
          for (const g of ['get'+ent,'get'+ent+'ById']) {
            if (r[g]) { try{ obj = await r[g](id); }catch(_){ } }
            if (obj) break;
          }
          if (!obj) obj = s.items.find(x=> x[s.idKey]===id) || null;
          if (!obj) continue;
          for (const k of s.counters){
            const v = Number(obj[k]);
            if (isFinite(v) && v < 0) throw new Error(`[HazardOracle] NonNegative: ${ent}.${k} became negative for ${id}`);
          }
        }
      });
    });
  }

  if (on('HLS_HAZARD_CAS',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:RefIntegrity ${parent}->${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const deps = children.filter(x=> String(x[fk]) === String(focusId));
            if (deps.length>0){
              let parentObj = null;
              const pr = discoverReadersForEntity(parent);
              for (const g of ['get'+parent,'get'+parent+'ById']) {
                if (pr[g]) { try{ parentObj = await pr[g](focusId); }catch(_){ } }
                if (parentObj) break;
              }
              if (!parentObj) throw new Error(`[HazardOracle] ReferentialIntegrity: ${parent} ${focusId} missing while ${child} dependents exist`);
            }
          });
        });
      });
    })();
  }

  if (on('HLS_HAZARD_WSK',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:AggregateLimit ${parent}<-${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let pObj=null;
            const pr = discoverReadersForEntity(parent);
            for (const g of ['get'+parent,'get'+parent+'ById']) {
              if (pr[g]) { try{ pObj = await pr[g](focusId); }catch(_){ } }
              if (pObj) break;
            }
            if (!pObj && pS.items.length) pObj = pS.items.find(x=> x[pS.idKey]===focusId) || pS.items[0];
            if (!pObj) return;
            const limitKey = pS.limits[0] || Object.keys(pObj).find(k=> /(limit|capacity|quota|max|budget|credit)/i.test(k));
            const limitVal = Number(limitKey ? pObj[limitKey] : NaN);
            if (!isFinite(limitVal)) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const contribKey = cS.amounts[0] || Object.keys(children[0]||{}).find(k=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k));
            if (!contribKey) return;
            const total = children.filter(x=> String(x[fk])===String(focusId))
                                  .reduce((s,x)=> s + (Number(x[contribKey])||0), 0);
            if (total > limitVal) throw new Error(`[HazardOracle] AggregateLimit: Σ ${child}.${contribKey} (${total}) > ${parent}.${limitKey} (${limitVal}) for ${focusId}`);
          });
        });
      });
    })();
  }
})(); // AutoHazardPack
// @auto-hazard-end
