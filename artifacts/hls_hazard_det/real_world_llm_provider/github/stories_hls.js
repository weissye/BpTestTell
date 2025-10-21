// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AcceptedassignmentLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAcceptedassignment(x.id);
  updateAcceptedassignment(x.id);
  updateAcceptedassignment(x.id);
  verifyAcceptedassignmentExists(x.id);
  verifyAcceptedassignmentUpdated(x.id);
  deleteAcceptedassignment(x.id);
});

bthread("AccesLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAcces(x.id);
  updateAcces(x.id);
  updateAcces(x.id);
  verifyAccesExists(x.id);
  verifyAccesUpdated(x.id);
  deleteAcces(x.id);
});

bthread("AccesstokenLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccesstoken(x.id);
  updateAccesstoken(x.id);
  updateAccesstoken(x.id);
  verifyAccesstokenExists(x.id);
  verifyAccesstokenUpdated(x.id);
  deleteAccesstoken(x.id);
});

bthread("AccountLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccount(x.id);
  updateAccount(x.id);
  updateAccount(x.id);
  verifyAccountExists(x.id);
  verifyAccountUpdated(x.id);
  deleteAccount(x.id);
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

bthread("AddLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdd(x.id);
  updateAdd(x.id);
  updateAdd(x.id);
  verifyAddExists(x.id);
  verifyAddUpdated(x.id);
  deleteAdd(x.id);
});

bthread("AdvisoryLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdvisory(x.id);
  updateAdvisory(x.id);
  updateAdvisory(x.id);
  verifyAdvisoryExists(x.id);
  verifyAdvisoryUpdated(x.id);
  deleteAdvisory(x.id);
});

bthread("AlertLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAlert(x.id);
  updateAlert(x.id);
  updateAlert(x.id);
  verifyAlertExists(x.id);
  verifyAlertUpdated(x.id);
  deleteAlert(x.id);
});

bthread("AnalysLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAnalys(x.id);
  updateAnalys(x.id);
  updateAnalys(x.id);
  verifyAnalysExists(x.id);
  verifyAnalysUpdated(x.id);
  deleteAnalys(x.id);
});

bthread("AnnotationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAnnotation(x.id);
  updateAnnotation(x.id);
  updateAnnotation(x.id);
  verifyAnnotationExists(x.id);
  verifyAnnotationUpdated(x.id);
  deleteAnnotation(x.id);
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

bthread("AppLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApp(x.id);
  updateApp(x.id);
  updateApp(x.id);
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
  deleteApp(x.id);
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

bthread("AppmanifestLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAppmanifest(x.id);
  updateAppmanifest(x.id);
  updateAppmanifest(x.id);
  verifyAppmanifestExists(x.id);
  verifyAppmanifestUpdated(x.id);
  deleteAppmanifest(x.id);
});

bthread("ApprovalLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApproval(x.id);
  updateApproval(x.id);
  updateApproval(x.id);
  verifyApprovalExists(x.id);
  verifyApprovalUpdated(x.id);
  deleteApproval(x.id);
});

bthread("ApproveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApprove(x.id);
  updateApprove(x.id);
  updateApprove(x.id);
  verifyApproveExists(x.id);
  verifyApproveUpdated(x.id);
  deleteApprove(x.id);
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

bthread("ArtifactLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArtifact(x.id);
  updateArtifact(x.id);
  updateArtifact(x.id);
  verifyArtifactExists(x.id);
  verifyArtifactUpdated(x.id);
  deleteArtifact(x.id);
});

bthread("ArtifactandlogretentionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArtifactandlogretention(x.id);
  updateArtifactandlogretention(x.id);
  updateArtifactandlogretention(x.id);
  verifyArtifactandlogretentionExists(x.id);
  verifyArtifactandlogretentionUpdated(x.id);
  deleteArtifactandlogretention(x.id);
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

bthread("AssignmentLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignment(x.id);
  updateAssignment(x.id);
  updateAssignment(x.id);
  verifyAssignmentExists(x.id);
  verifyAssignmentUpdated(x.id);
  deleteAssignment(x.id);
});

bthread("AttachLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttach(x.id);
  updateAttach(x.id);
  updateAttach(x.id);
  verifyAttachExists(x.id);
  verifyAttachUpdated(x.id);
  deleteAttach(x.id);
});

bthread("AttemptLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttempt(x.id);
  updateAttempt(x.id);
  updateAttempt(x.id);
  verifyAttemptExists(x.id);
  verifyAttemptUpdated(x.id);
  deleteAttempt(x.id);
});

bthread("AttestationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttestation(x.id);
  updateAttestation(x.id);
  updateAttestation(x.id);
  verifyAttestationExists(x.id);
  verifyAttestationUpdated(x.id);
  deleteAttestation(x.id);
});

bthread("AuthorLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthor(x.id);
  updateAuthor(x.id);
  updateAuthor(x.id);
  verifyAuthorExists(x.id);
  verifyAuthorUpdated(x.id);
  deleteAuthor(x.id);
});

bthread("AutofixLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutofix(x.id);
  updateAutofix(x.id);
  updateAutofix(x.id);
  verifyAutofixExists(x.id);
  verifyAutofixUpdated(x.id);
  deleteAutofix(x.id);
});

bthread("AutolinkLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutolink(x.id);
  updateAutolink(x.id);
  updateAutolink(x.id);
  verifyAutolinkExists(x.id);
  verifyAutolinkUpdated(x.id);
  deleteAutolink(x.id);
});

bthread("AutomatedsecurityfixeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutomatedsecurityfixe(x.id);
  updateAutomatedsecurityfixe(x.id);
  updateAutomatedsecurityfixe(x.id);
  verifyAutomatedsecurityfixeExists(x.id);
  verifyAutomatedsecurityfixeUpdated(x.id);
  deleteAutomatedsecurityfixe(x.id);
});

bthread("BillingLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBilling(x.id);
  updateBilling(x.id);
  updateBilling(x.id);
  verifyBillingExists(x.id);
  verifyBillingUpdated(x.id);
  deleteBilling(x.id);
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

bthread("BlockedbyLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlockedby(x.id);
  updateBlockedby(x.id);
  updateBlockedby(x.id);
  verifyBlockedbyExists(x.id);
  verifyBlockedbyUpdated(x.id);
  deleteBlockedby(x.id);
});

bthread("BlockingLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlocking(x.id);
  updateBlocking(x.id);
  updateBlocking(x.id);
  verifyBlockingExists(x.id);
  verifyBlockingUpdated(x.id);
  deleteBlocking(x.id);
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

bthread("BrancheswhereheadLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBrancheswherehead(x.id);
  updateBrancheswherehead(x.id);
  updateBrancheswherehead(x.id);
  verifyBrancheswhereheadExists(x.id);
  verifyBrancheswhereheadUpdated(x.id);
  deleteBrancheswherehead(x.id);
});

bthread("BuildLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBuild(x.id);
  updateBuild(x.id);
  updateBuild(x.id);
  verifyBuildExists(x.id);
  verifyBuildUpdated(x.id);
  deleteBuild(x.id);
});

bthread("BulklistLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBulklist(x.id);
  updateBulklist(x.id);
  updateBulklist(x.id);
  verifyBulklistExists(x.id);
  verifyBulklistUpdated(x.id);
  deleteBulklist(x.id);
});

bthread("CacheLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCache(x.id);
  updateCache(x.id);
  updateCache(x.id);
  verifyCacheExists(x.id);
  verifyCacheUpdated(x.id);
  deleteCache(x.id);
});

bthread("CampaignLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCampaign(x.id);
  updateCampaign(x.id);
  updateCampaign(x.id);
  verifyCampaignExists(x.id);
  verifyCampaignUpdated(x.id);
  deleteCampaign(x.id);
});

bthread("CancelLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCancel(x.id);
  updateCancel(x.id);
  updateCancel(x.id);
  verifyCancelExists(x.id);
  verifyCancelUpdated(x.id);
  deleteCancel(x.id);
});

bthread("CheckrunLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCheckrun(x.id);
  updateCheckrun(x.id);
  updateCheckrun(x.id);
  verifyCheckrunExists(x.id);
  verifyCheckrunUpdated(x.id);
  deleteCheckrun(x.id);
});

bthread("ChecksuiteLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChecksuite(x.id);
  updateChecksuite(x.id);
  updateChecksuite(x.id);
  verifyChecksuiteExists(x.id);
  verifyChecksuiteUpdated(x.id);
  deleteChecksuite(x.id);
});

bthread("ClassroomLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClassroom(x.id);
  updateClassroom(x.id);
  updateClassroom(x.id);
  verifyClassroomExists(x.id);
  verifyClassroomUpdated(x.id);
  deleteClassroom(x.id);
});

bthread("CloneLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClone(x.id);
  updateClone(x.id);
  updateClone(x.id);
  verifyCloneExists(x.id);
  verifyCloneUpdated(x.id);
  deleteClone(x.id);
});

bthread("CodeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCode(x.id);
  updateCode(x.id);
  updateCode(x.id);
  verifyCodeExists(x.id);
  verifyCodeUpdated(x.id);
  deleteCode(x.id);
});

bthread("CodefrequencyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodefrequency(x.id);
  updateCodefrequency(x.id);
  updateCodefrequency(x.id);
  verifyCodefrequencyExists(x.id);
  verifyCodefrequencyUpdated(x.id);
  deleteCodefrequency(x.id);
});

bthread("CodeownerLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodeowner(x.id);
  updateCodeowner(x.id);
  updateCodeowner(x.id);
  verifyCodeownerExists(x.id);
  verifyCodeownerUpdated(x.id);
  deleteCodeowner(x.id);
});

bthread("CodeqlLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodeql(x.id);
  updateCodeql(x.id);
  updateCodeql(x.id);
  verifyCodeqlExists(x.id);
  verifyCodeqlUpdated(x.id);
  deleteCodeql(x.id);
});

bthread("CodescanningLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodescanning(x.id);
  updateCodescanning(x.id);
  updateCodescanning(x.id);
  verifyCodescanningExists(x.id);
  verifyCodescanningUpdated(x.id);
  deleteCodescanning(x.id);
});

bthread("CodesecurityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodesecurity(x.id);
  updateCodesecurity(x.id);
  updateCodesecurity(x.id);
  verifyCodesecurityExists(x.id);
  verifyCodesecurityUpdated(x.id);
  deleteCodesecurity(x.id);
});

bthread("CodesecurityconfigurationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodesecurityconfiguration(x.id);
  updateCodesecurityconfiguration(x.id);
  updateCodesecurityconfiguration(x.id);
  verifyCodesecurityconfigurationExists(x.id);
  verifyCodesecurityconfigurationUpdated(x.id);
  deleteCodesecurityconfiguration(x.id);
});

bthread("CodesofconductLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodesofconduct(x.id);
  updateCodesofconduct(x.id);
  updateCodesofconduct(x.id);
  verifyCodesofconductExists(x.id);
  verifyCodesofconductUpdated(x.id);
  deleteCodesofconduct(x.id);
});

bthread("CodespaceLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodespace(x.id);
  updateCodespace(x.id);
  updateCodespace(x.id);
  verifyCodespaceExists(x.id);
  verifyCodespaceUpdated(x.id);
  deleteCodespace(x.id);
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

bthread("ColumnLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addColumn(x.id);
  updateColumn(x.id);
  updateColumn(x.id);
  verifyColumnExists(x.id);
  verifyColumnUpdated(x.id);
  deleteColumn(x.id);
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

bthread("CommitactivityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCommitactivity(x.id);
  updateCommitactivity(x.id);
  updateCommitactivity(x.id);
  verifyCommitactivityExists(x.id);
  verifyCommitactivityUpdated(x.id);
  deleteCommitactivity(x.id);
});

bthread("CommunityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCommunity(x.id);
  updateCommunity(x.id);
  updateCommunity(x.id);
  verifyCommunityExists(x.id);
  verifyCommunityUpdated(x.id);
  deleteCommunity(x.id);
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

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
  deleteConfig(x.id);
});

bthread("ConfigurationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfiguration(x.id);
  updateConfiguration(x.id);
  updateConfiguration(x.id);
  verifyConfigurationExists(x.id);
  verifyConfigurationUpdated(x.id);
  deleteConfiguration(x.id);
});

bthread("ConflictLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConflict(x.id);
  updateConflict(x.id);
  updateConflict(x.id);
  verifyConflictExists(x.id);
  verifyConflictUpdated(x.id);
  deleteConflict(x.id);
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

bthread("ContextLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContext(x.id);
  updateContext(x.id);
  updateContext(x.id);
  verifyContextExists(x.id);
  verifyContextUpdated(x.id);
  deleteContext(x.id);
});

bthread("ContributorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContributor(x.id);
  updateContributor(x.id);
  updateContributor(x.id);
  verifyContributorExists(x.id);
  verifyContributorUpdated(x.id);
  deleteContributor(x.id);
});

bthread("ConversionLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConversion(x.id);
  updateConversion(x.id);
  updateConversion(x.id);
  verifyConversionExists(x.id);
  verifyConversionUpdated(x.id);
  deleteConversion(x.id);
});

bthread("CopilotLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCopilot(x.id);
  updateCopilot(x.id);
  updateCopilot(x.id);
  verifyCopilotExists(x.id);
  verifyCopilotUpdated(x.id);
  deleteCopilot(x.id);
});

bthread("CredentialLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredential(x.id);
  updateCredential(x.id);
  updateCredential(x.id);
  verifyCredentialExists(x.id);
  verifyCredentialUpdated(x.id);
  deleteCredential(x.id);
});

bthread("CustomizationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomization(x.id);
  updateCustomization(x.id);
  updateCustomization(x.id);
  verifyCustomizationExists(x.id);
  verifyCustomizationUpdated(x.id);
  deleteCustomization(x.id);
});

bthread("CveLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCve(x.id);
  updateCve(x.id);
  updateCve(x.id);
  verifyCveExists(x.id);
  verifyCveUpdated(x.id);
  deleteCve(x.id);
});

bthread("DatabasLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDatabas(x.id);
  updateDatabas(x.id);
  updateDatabas(x.id);
  verifyDatabasExists(x.id);
  verifyDatabasUpdated(x.id);
  deleteDatabas(x.id);
});

bthread("DefaultLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefault(x.id);
  updateDefault(x.id);
  updateDefault(x.id);
  verifyDefaultExists(x.id);
  verifyDefaultUpdated(x.id);
  deleteDefault(x.id);
});

bthread("DefaultlevelLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultlevel(x.id);
  updateDefaultlevel(x.id);
  updateDefaultlevel(x.id);
  verifyDefaultlevelExists(x.id);
  verifyDefaultlevelUpdated(x.id);
  deleteDefaultlevel(x.id);
});

bthread("DefaultsetupLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultsetup(x.id);
  updateDefaultsetup(x.id);
  updateDefaultsetup(x.id);
  verifyDefaultsetupExists(x.id);
  verifyDefaultsetupUpdated(x.id);
  deleteDefaultsetup(x.id);
});

bthread("DeleterequestLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeleterequest(x.id);
  updateDeleterequest(x.id);
  updateDeleterequest(x.id);
  verifyDeleterequestExists(x.id);
  verifyDeleterequestUpdated(x.id);
  deleteDeleterequest(x.id);
});

bthread("DeliveryLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDelivery(x.id);
  updateDelivery(x.id);
  updateDelivery(x.id);
  verifyDeliveryExists(x.id);
  verifyDeliveryUpdated(x.id);
  deleteDelivery(x.id);
});

bthread("DependabotLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependabot(x.id);
  updateDependabot(x.id);
  updateDependabot(x.id);
  verifyDependabotExists(x.id);
  verifyDependabotUpdated(x.id);
  deleteDependabot(x.id);
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

bthread("DependencygraphLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependencygraph(x.id);
  updateDependencygraph(x.id);
  updateDependencygraph(x.id);
  verifyDependencygraphExists(x.id);
  verifyDependencygraphUpdated(x.id);
  deleteDependencygraph(x.id);
});

bthread("DeploymentLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeployment(x.id);
  updateDeployment(x.id);
  updateDeployment(x.id);
  verifyDeploymentExists(x.id);
  verifyDeploymentUpdated(x.id);
  deleteDeployment(x.id);
});

bthread("DeploymentbranchpolicyLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeploymentbranchpolicy(x.id);
  updateDeploymentbranchpolicy(x.id);
  updateDeploymentbranchpolicy(x.id);
  verifyDeploymentbranchpolicyExists(x.id);
  verifyDeploymentbranchpolicyUpdated(x.id);
  deleteDeploymentbranchpolicy(x.id);
});

bthread("DeploymentprotectionruleLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeploymentprotectionrule(x.id);
  updateDeploymentprotectionrule(x.id);
  updateDeploymentprotectionrule(x.id);
  verifyDeploymentprotectionruleExists(x.id);
  verifyDeploymentprotectionruleUpdated(x.id);
  deleteDeploymentprotectionrule(x.id);
});

bthread("DetachLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDetach(x.id);
  updateDetach(x.id);
  updateDetach(x.id);
  verifyDetachExists(x.id);
  verifyDetachUpdated(x.id);
  deleteDetach(x.id);
});

bthread("DevcontainerLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevcontainer(x.id);
  updateDevcontainer(x.id);
  updateDevcontainer(x.id);
  verifyDevcontainerExists(x.id);
  verifyDevcontainerUpdated(x.id);
  deleteDevcontainer(x.id);
});

bthread("DigestLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDigest(x.id);
  updateDigest(x.id);
  updateDigest(x.id);
  verifyDigestExists(x.id);
  verifyDigestUpdated(x.id);
  deleteDigest(x.id);
});

bthread("DisableLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisable(x.id);
  updateDisable(x.id);
  updateDisable(x.id);
  verifyDisableExists(x.id);
  verifyDisableUpdated(x.id);
  deleteDisable(x.id);
});

bthread("DiscussionLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDiscussion(x.id);
  updateDiscussion(x.id);
  updateDiscussion(x.id);
  verifyDiscussionExists(x.id);
  verifyDiscussionUpdated(x.id);
  deleteDiscussion(x.id);
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

bthread("DispatcheLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDispatche(x.id);
  updateDispatche(x.id);
  updateDispatche(x.id);
  verifyDispatcheExists(x.id);
  verifyDispatcheUpdated(x.id);
  deleteDispatche(x.id);
});

bthread("DockerLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDocker(x.id);
  updateDocker(x.id);
  updateDocker(x.id);
  verifyDockerExists(x.id);
  verifyDockerUpdated(x.id);
  deleteDocker(x.id);
});

bthread("DownloadLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDownload(x.id);
  updateDownload(x.id);
  updateDownload(x.id);
  verifyDownloadExists(x.id);
  verifyDownloadUpdated(x.id);
  deleteDownload(x.id);
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

bthread("EmojiLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmoji(x.id);
  updateEmoji(x.id);
  updateEmoji(x.id);
  verifyEmojiExists(x.id);
  verifyEmojiUpdated(x.id);
  deleteEmoji(x.id);
});

bthread("EnableLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnable(x.id);
  updateEnable(x.id);
  updateEnable(x.id);
  verifyEnableExists(x.id);
  verifyEnableUpdated(x.id);
  deleteEnable(x.id);
});

bthread("EnforceadminLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnforceadmin(x.id);
  updateEnforceadmin(x.id);
  updateEnforceadmin(x.id);
  verifyEnforceadminExists(x.id);
  verifyEnforceadminUpdated(x.id);
  deleteEnforceadmin(x.id);
});

bthread("EnterprisLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnterpris(x.id);
  updateEnterpris(x.id);
  updateEnterpris(x.id);
  verifyEnterprisExists(x.id);
  verifyEnterprisUpdated(x.id);
  deleteEnterpris(x.id);
});

bthread("EnvironmentLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnvironment(x.id);
  updateEnvironment(x.id);
  updateEnvironment(x.id);
  verifyEnvironmentExists(x.id);
  verifyEnvironmentUpdated(x.id);
  deleteEnvironment(x.id);
});

bthread("ErrorLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addError(x.id);
  updateError(x.id);
  updateError(x.id);
  verifyErrorExists(x.id);
  verifyErrorUpdated(x.id);
  deleteError(x.id);
});

bthread("EventLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvent(x.id);
  updateEvent(x.id);
  updateEvent(x.id);
  verifyEventExists(x.id);
  verifyEventUpdated(x.id);
  deleteEvent(x.id);
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExport(x.id);
  updateExport(x.id);
  updateExport(x.id);
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
  deleteExport(x.id);
});

bthread("FailedinvitationLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFailedinvitation(x.id);
  updateFailedinvitation(x.id);
  updateFailedinvitation(x.id);
  verifyFailedinvitationExists(x.id);
  verifyFailedinvitationUpdated(x.id);
  deleteFailedinvitation(x.id);
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

bthread("FieldLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addField(x.id);
  updateField(x.id);
  updateField(x.id);
  verifyFieldExists(x.id);
  verifyFieldUpdated(x.id);
  deleteField(x.id);
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

bthread("ForcecancelLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForcecancel(x.id);
  updateForcecancel(x.id);
  updateForcecancel(x.id);
  verifyForcecancelExists(x.id);
  verifyForcecancelUpdated(x.id);
  deleteForcecancel(x.id);
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

bthread("ForkprcontributorapprovalLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForkprcontributorapproval(x.id);
  updateForkprcontributorapproval(x.id);
  updateForkprcontributorapproval(x.id);
  verifyForkprcontributorapprovalExists(x.id);
  verifyForkprcontributorapprovalUpdated(x.id);
  deleteForkprcontributorapproval(x.id);
});

bthread("ForkprworkflowsprivaterepoLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForkprworkflowsprivaterepo(x.id);
  updateForkprworkflowsprivaterepo(x.id);
  updateForkprworkflowsprivaterepo(x.id);
  verifyForkprworkflowsprivaterepoExists(x.id);
  verifyForkprworkflowsprivaterepoUpdated(x.id);
  deleteForkprworkflowsprivaterepo(x.id);
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

bthread("GeneratejitconfigLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGeneratejitconfig(x.id);
  updateGeneratejitconfig(x.id);
  updateGeneratejitconfig(x.id);
  verifyGeneratejitconfigExists(x.id);
  verifyGeneratejitconfigUpdated(x.id);
  deleteGeneratejitconfig(x.id);
});

bthread("GeneratenoteLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGeneratenote(x.id);
  updateGeneratenote(x.id);
  updateGeneratenote(x.id);
  verifyGeneratenoteExists(x.id);
  verifyGeneratenoteUpdated(x.id);
  deleteGeneratenote(x.id);
});

bthread("GistLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGist(x.id);
  updateGist(x.id);
  updateGist(x.id);
  verifyGistExists(x.id);
  verifyGistUpdated(x.id);
  deleteGist(x.id);
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

bthread("GithubownedLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGithubowned(x.id);
  updateGithubowned(x.id);
  updateGithubowned(x.id);
  verifyGithubownedExists(x.id);
  verifyGithubownedUpdated(x.id);
  deleteGithubowned(x.id);
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

bthread("GradeLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGrade(x.id);
  updateGrade(x.id);
  updateGrade(x.id);
  verifyGradeExists(x.id);
  verifyGradeUpdated(x.id);
  deleteGrade(x.id);
});

bthread("GrantLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGrant(x.id);
  updateGrant(x.id);
  updateGrant(x.id);
  verifyGrantExists(x.id);
  verifyGrantUpdated(x.id);
  deleteGrant(x.id);
});

bthread("HealthLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHealth(x.id);
  updateHealth(x.id);
  updateHealth(x.id);
  verifyHealthExists(x.id);
  verifyHealthUpdated(x.id);
  deleteHealth(x.id);
});

bthread("HistoryLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHistory(x.id);
  updateHistory(x.id);
  updateHistory(x.id);
  verifyHistoryExists(x.id);
  verifyHistoryUpdated(x.id);
  deleteHistory(x.id);
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

bthread("HostedrunnerLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHostedrunner(x.id);
  updateHostedrunner(x.id);
  updateHostedrunner(x.id);
  verifyHostedrunnerExists(x.id);
  verifyHostedrunnerUpdated(x.id);
  deleteHostedrunner(x.id);
});

bthread("HovercardLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHovercard(x.id);
  updateHovercard(x.id);
  updateHovercard(x.id);
  verifyHovercardExists(x.id);
  verifyHovercardUpdated(x.id);
  deleteHovercard(x.id);
});

bthread("ImageLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImage(x.id);
  updateImage(x.id);
  updateImage(x.id);
  verifyImageExists(x.id);
  verifyImageUpdated(x.id);
  deleteImage(x.id);
});

bthread("ImmutablereleasLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImmutablereleas(x.id);
  updateImmutablereleas(x.id);
  updateImmutablereleas(x.id);
  verifyImmutablereleasExists(x.id);
  verifyImmutablereleasUpdated(x.id);
  deleteImmutablereleas(x.id);
});

bthread("ImportLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImport(x.id);
  updateImport(x.id);
  updateImport(x.id);
  verifyImportExists(x.id);
  verifyImportUpdated(x.id);
  deleteImport(x.id);
});

bthread("InsightLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInsight(x.id);
  updateInsight(x.id);
  updateInsight(x.id);
  verifyInsightExists(x.id);
  verifyInsightUpdated(x.id);
  deleteInsight(x.id);
});

bthread("InstallationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstallation(x.id);
  updateInstallation(x.id);
  updateInstallation(x.id);
  verifyInstallationExists(x.id);
  verifyInstallationUpdated(x.id);
  deleteInstallation(x.id);
});

bthread("InstallationrequestLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstallationrequest(x.id);
  updateInstallationrequest(x.id);
  updateInstallationrequest(x.id);
  verifyInstallationrequestExists(x.id);
  verifyInstallationrequestUpdated(x.id);
  deleteInstallationrequest(x.id);
});

bthread("InstanceLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstance(x.id);
  updateInstance(x.id);
  updateInstance(x.id);
  verifyInstanceExists(x.id);
  verifyInstanceUpdated(x.id);
  deleteInstance(x.id);
});

bthread("InteractionlimitLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInteractionlimit(x.id);
  updateInteractionlimit(x.id);
  updateInteractionlimit(x.id);
  verifyInteractionlimitExists(x.id);
  verifyInteractionlimitUpdated(x.id);
  deleteInteractionlimit(x.id);
});

bthread("InvitationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInvitation(x.id);
  updateInvitation(x.id);
  updateInvitation(x.id);
  verifyInvitationExists(x.id);
  verifyInvitationUpdated(x.id);
  deleteInvitation(x.id);
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

bthread("IssuetypeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetype(x.id);
  updateIssuetype(x.id);
  updateIssuetype(x.id);
  verifyIssuetypeExists(x.id);
  verifyIssuetypeUpdated(x.id);
  deleteIssuetype(x.id);
});

bthread("ItemLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addItem(x.id);
  updateItem(x.id);
  updateItem(x.id);
  verifyItemExists(x.id);
  verifyItemUpdated(x.id);
  deleteItem(x.id);
});

bthread("JobLifecycle", function () {
  const x = pick([{id: "J001"}, {id: "J002"}]);
  addJob(x.id);
  updateJob(x.id);
  updateJob(x.id);
  verifyJobExists(x.id);
  verifyJobUpdated(x.id);
  deleteJob(x.id);
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

bthread("LargefileLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLargefile(x.id);
  updateLargefile(x.id);
  updateLargefile(x.id);
  verifyLargefileExists(x.id);
  verifyLargefileUpdated(x.id);
  deleteLargefile(x.id);
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

bthread("LfLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLf(x.id);
  updateLf(x.id);
  updateLf(x.id);
  verifyLfExists(x.id);
  verifyLfUpdated(x.id);
  deleteLf(x.id);
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

bthread("LicenseLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLicense(x.id);
  updateLicense(x.id);
  updateLicense(x.id);
  verifyLicenseExists(x.id);
  verifyLicenseUpdated(x.id);
  deleteLicense(x.id);
});

bthread("LimitLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLimit(x.id);
  updateLimit(x.id);
  updateLimit(x.id);
  verifyLimitExists(x.id);
  verifyLimitUpdated(x.id);
  deleteLimit(x.id);
});

bthread("LocationLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocation(x.id);
  updateLocation(x.id);
  updateLocation(x.id);
  verifyLocationExists(x.id);
  verifyLocationUpdated(x.id);
  deleteLocation(x.id);
});

bthread("LockLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLock(x.id);
  updateLock(x.id);
  updateLock(x.id);
  verifyLockExists(x.id);
  verifyLockUpdated(x.id);
  deleteLock(x.id);
});

bthread("LogLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLog(x.id);
  updateLog(x.id);
  updateLog(x.id);
  verifyLogExists(x.id);
  verifyLogUpdated(x.id);
  deleteLog(x.id);
});

bthread("MachineLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachine(x.id);
  updateMachine(x.id);
  updateMachine(x.id);
  verifyMachineExists(x.id);
  verifyMachineUpdated(x.id);
  deleteMachine(x.id);
});

bthread("MachinesizeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachinesize(x.id);
  updateMachinesize(x.id);
  updateMachinesize(x.id);
  verifyMachinesizeExists(x.id);
  verifyMachinesizeUpdated(x.id);
  deleteMachinesize(x.id);
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

bthread("MarketplacelistingLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarketplacelisting(x.id);
  updateMarketplacelisting(x.id);
  updateMarketplacelisting(x.id);
  verifyMarketplacelistingExists(x.id);
  verifyMarketplacelistingUpdated(x.id);
  deleteMarketplacelisting(x.id);
});

bthread("MarketplacepurchasLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarketplacepurchas(x.id);
  updateMarketplacepurchas(x.id);
  updateMarketplacepurchas(x.id);
  verifyMarketplacepurchasExists(x.id);
  verifyMarketplacepurchasUpdated(x.id);
  deleteMarketplacepurchas(x.id);
});

bthread("MatchingrefLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMatchingref(x.id);
  updateMatchingref(x.id);
  updateMatchingref(x.id);
  verifyMatchingrefExists(x.id);
  verifyMatchingrefUpdated(x.id);
  deleteMatchingref(x.id);
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

bthread("MembershipLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembership(x.id);
  updateMembership(x.id);
  updateMembership(x.id);
  verifyMembershipExists(x.id);
  verifyMembershipUpdated(x.id);
  deleteMembership(x.id);
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

bthread("MetaLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMeta(x.id);
  updateMeta(x.id);
  updateMeta(x.id);
  verifyMetaExists(x.id);
  verifyMetaUpdated(x.id);
  deleteMeta(x.id);
});

bthread("MetadataLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMetadata(x.id);
  updateMetadata(x.id);
  updateMetadata(x.id);
  verifyMetadataExists(x.id);
  verifyMetadataUpdated(x.id);
  deleteMetadata(x.id);
});

bthread("MetricLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMetric(x.id);
  updateMetric(x.id);
  updateMetric(x.id);
  verifyMetricExists(x.id);
  verifyMetricUpdated(x.id);
  deleteMetric(x.id);
});

bthread("MigrationLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMigration(x.id);
  updateMigration(x.id);
  updateMigration(x.id);
  verifyMigrationExists(x.id);
  verifyMigrationUpdated(x.id);
  deleteMigration(x.id);
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

bthread("MoveLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMove(x.id);
  updateMove(x.id);
  updateMove(x.id);
  verifyMoveExists(x.id);
  verifyMoveUpdated(x.id);
  deleteMove(x.id);
});

bthread("NetworkLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNetwork(x.id);
  updateNetwork(x.id);
  updateNetwork(x.id);
  verifyNetworkExists(x.id);
  verifyNetworkUpdated(x.id);
  deleteNetwork(x.id);
});

bthread("NetworkconfigurationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNetworkconfiguration(x.id);
  updateNetworkconfiguration(x.id);
  updateNetworkconfiguration(x.id);
  verifyNetworkconfigurationExists(x.id);
  verifyNetworkconfigurationUpdated(x.id);
  deleteNetworkconfiguration(x.id);
});

bthread("NetworksettingLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNetworksetting(x.id);
  updateNetworksetting(x.id);
  updateNetworksetting(x.id);
  verifyNetworksettingExists(x.id);
  verifyNetworksettingUpdated(x.id);
  deleteNetworksetting(x.id);
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

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotification(x.id);
  updateNotification(x.id);
  updateNotification(x.id);
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
  deleteNotification(x.id);
});

bthread("OctocatLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOctocat(x.id);
  updateOctocat(x.id);
  updateOctocat(x.id);
  verifyOctocatExists(x.id);
  verifyOctocatUpdated(x.id);
  deleteOctocat(x.id);
});

bthread("OidcLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOidc(x.id);
  updateOidc(x.id);
  updateOidc(x.id);
  verifyOidcExists(x.id);
  verifyOidcUpdated(x.id);
  deleteOidc(x.id);
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

bthread("OrganizationLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganization(x.id);
  updateOrganization(x.id);
  updateOrganization(x.id);
  verifyOrganizationExists(x.id);
  verifyOrganizationUpdated(x.id);
  deleteOrganization(x.id);
});

bthread("OrganizationroleLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationrole(x.id);
  updateOrganizationrole(x.id);
  updateOrganizationrole(x.id);
  verifyOrganizationroleExists(x.id);
  verifyOrganizationroleUpdated(x.id);
  deleteOrganizationrole(x.id);
});

bthread("OrganizationsecretLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationsecret(x.id);
  updateOrganizationsecret(x.id);
  updateOrganizationsecret(x.id);
  verifyOrganizationsecretExists(x.id);
  verifyOrganizationsecretUpdated(x.id);
  deleteOrganizationsecret(x.id);
});

bthread("OrganizationvariableLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationvariable(x.id);
  updateOrganizationvariable(x.id);
  updateOrganizationvariable(x.id);
  verifyOrganizationvariableExists(x.id);
  verifyOrganizationvariableUpdated(x.id);
  deleteOrganizationvariable(x.id);
});

bthread("OutsidecollaboratorLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOutsidecollaborator(x.id);
  updateOutsidecollaborator(x.id);
  updateOutsidecollaborator(x.id);
  verifyOutsidecollaboratorExists(x.id);
  verifyOutsidecollaboratorUpdated(x.id);
  deleteOutsidecollaborator(x.id);
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

bthread("ParentLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParent(x.id);
  updateParent(x.id);
  updateParent(x.id);
  verifyParentExists(x.id);
  verifyParentUpdated(x.id);
  deleteParent(x.id);
});

bthread("ParticipationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParticipation(x.id);
  updateParticipation(x.id);
  updateParticipation(x.id);
  verifyParticipationExists(x.id);
  verifyParticipationUpdated(x.id);
  deleteParticipation(x.id);
});

bthread("PartnerLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPartner(x.id);
  updatePartner(x.id);
  updatePartner(x.id);
  verifyPartnerExists(x.id);
  verifyPartnerUpdated(x.id);
  deletePartner(x.id);
});

bthread("PathLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPath(x.id);
  updatePath(x.id);
  updatePath(x.id);
  verifyPathExists(x.id);
  verifyPathUpdated(x.id);
  deletePath(x.id);
});

bthread("PatternconfigurationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPatternconfiguration(x.id);
  updatePatternconfiguration(x.id);
  updatePatternconfiguration(x.id);
  verifyPatternconfigurationExists(x.id);
  verifyPatternconfigurationUpdated(x.id);
  deletePatternconfiguration(x.id);
});

bthread("PendingdeploymentLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPendingdeployment(x.id);
  updatePendingdeployment(x.id);
  updatePendingdeployment(x.id);
  verifyPendingdeploymentExists(x.id);
  verifyPendingdeploymentUpdated(x.id);
  deletePendingdeployment(x.id);
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

bthread("PermissionscheckLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermissionscheck(x.id);
  updatePermissionscheck(x.id);
  updatePermissionscheck(x.id);
  verifyPermissionscheckExists(x.id);
  verifyPermissionscheckUpdated(x.id);
  deletePermissionscheck(x.id);
});

bthread("PersonalaccesstokenLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPersonalaccesstoken(x.id);
  updatePersonalaccesstoken(x.id);
  updatePersonalaccesstoken(x.id);
  verifyPersonalaccesstokenExists(x.id);
  verifyPersonalaccesstokenUpdated(x.id);
  deletePersonalaccesstoken(x.id);
});

bthread("PersonalaccesstokenrequestLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPersonalaccesstokenrequest(x.id);
  updatePersonalaccesstokenrequest(x.id);
  updatePersonalaccesstokenrequest(x.id);
  verifyPersonalaccesstokenrequestExists(x.id);
  verifyPersonalaccesstokenrequestUpdated(x.id);
  deletePersonalaccesstokenrequest(x.id);
});

bthread("PingLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPing(x.id);
  updatePing(x.id);
  updatePing(x.id);
  verifyPingExists(x.id);
  verifyPingUpdated(x.id);
  deletePing(x.id);
});

bthread("PlanLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlan(x.id);
  updatePlan(x.id);
  updatePlan(x.id);
  verifyPlanExists(x.id);
  verifyPlanUpdated(x.id);
  deletePlan(x.id);
});

bthread("PlatformLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlatform(x.id);
  updatePlatform(x.id);
  updatePlatform(x.id);
  verifyPlatformExists(x.id);
  verifyPlatformUpdated(x.id);
  deletePlatform(x.id);
});

bthread("PopularLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPopular(x.id);
  updatePopular(x.id);
  updatePopular(x.id);
  verifyPopularExists(x.id);
  verifyPopularUpdated(x.id);
  deletePopular(x.id);
});

bthread("PreferenceLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPreference(x.id);
  updatePreference(x.id);
  updatePreference(x.id);
  verifyPreferenceExists(x.id);
  verifyPreferenceUpdated(x.id);
  deletePreference(x.id);
});

bthread("PremiumrequestLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPremiumrequest(x.id);
  updatePremiumrequest(x.id);
  updatePremiumrequest(x.id);
  verifyPremiumrequestExists(x.id);
  verifyPremiumrequestUpdated(x.id);
  deletePremiumrequest(x.id);
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

bthread("PrivateregistryLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrivateregistry(x.id);
  updatePrivateregistry(x.id);
  updatePrivateregistry(x.id);
  verifyPrivateregistryExists(x.id);
  verifyPrivateregistryUpdated(x.id);
  deletePrivateregistry(x.id);
});

bthread("PrivatevulnerabilityreportingLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrivatevulnerabilityreporting(x.id);
  updatePrivatevulnerabilityreporting(x.id);
  updatePrivatevulnerabilityreporting(x.id);
  verifyPrivatevulnerabilityreportingExists(x.id);
  verifyPrivatevulnerabilityreportingUpdated(x.id);
  deletePrivatevulnerabilityreporting(x.id);
});

bthread("ProfileLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProfile(x.id);
  updateProfile(x.id);
  updateProfile(x.id);
  verifyProfileExists(x.id);
  verifyProfileUpdated(x.id);
  deleteProfile(x.id);
});

bthread("ProjectLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProject(x.id);
  updateProject(x.id);
  updateProject(x.id);
  verifyProjectExists(x.id);
  verifyProjectUpdated(x.id);
  deleteProject(x.id);
});

bthread("Projectsv2Lifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjectsv2(x.id);
  updateProjectsv2(x.id);
  updateProjectsv2(x.id);
  verifyProjectsv2Exists(x.id);
  verifyProjectsv2Updated(x.id);
  deleteProjectsv2(x.id);
});

bthread("PropertyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProperty(x.id);
  updateProperty(x.id);
  updateProperty(x.id);
  verifyPropertyExists(x.id);
  verifyPropertyUpdated(x.id);
  deleteProperty(x.id);
});

bthread("ProtectionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProtection(x.id);
  updateProtection(x.id);
  updateProtection(x.id);
  verifyProtectionExists(x.id);
  verifyProtectionUpdated(x.id);
  deleteProtection(x.id);
});

bthread("PublicLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublic(x.id);
  updatePublic(x.id);
  updatePublic(x.id);
  verifyPublicExists(x.id);
  verifyPublicUpdated(x.id);
  deletePublic(x.id);
});

bthread("PublicemailLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublicemail(x.id);
  updatePublicemail(x.id);
  updatePublicemail(x.id);
  verifyPublicemailExists(x.id);
  verifyPublicemailUpdated(x.id);
  deletePublicemail(x.id);
});

bthread("PublickeyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublickey(x.id);
  updatePublickey(x.id);
  updatePublickey(x.id);
  verifyPublickeyExists(x.id);
  verifyPublickeyUpdated(x.id);
  deletePublickey(x.id);
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

bthread("PublishLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublish(x.id);
  updatePublish(x.id);
  updatePublish(x.id);
  verifyPublishExists(x.id);
  verifyPublishUpdated(x.id);
  deletePublish(x.id);
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

bthread("PunchcardLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPunchcard(x.id);
  updatePunchcard(x.id);
  updatePunchcard(x.id);
  verifyPunchcardExists(x.id);
  verifyPunchcardUpdated(x.id);
  deletePunchcard(x.id);
});

bthread("PushprotectionbypassLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPushprotectionbypass(x.id);
  updatePushprotectionbypass(x.id);
  updatePushprotectionbypass(x.id);
  verifyPushprotectionbypassExists(x.id);
  verifyPushprotectionbypassUpdated(x.id);
  deletePushprotectionbypass(x.id);
});

bthread("RatelimitLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRatelimit(x.id);
  updateRatelimit(x.id);
  updateRatelimit(x.id);
  verifyRatelimitExists(x.id);
  verifyRatelimitUpdated(x.id);
  deleteRatelimit(x.id);
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

bthread("ReadmeLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReadme(x.id);
  updateReadme(x.id);
  updateReadme(x.id);
  verifyReadmeExists(x.id);
  verifyReadmeUpdated(x.id);
  deleteReadme(x.id);
});

bthread("ReceivedeventLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReceivedevent(x.id);
  updateReceivedevent(x.id);
  updateReceivedevent(x.id);
  verifyReceivedeventExists(x.id);
  verifyReceivedeventUpdated(x.id);
  deleteReceivedevent(x.id);
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

bthread("ReferrerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReferrer(x.id);
  updateReferrer(x.id);
  updateReferrer(x.id);
  verifyReferrerExists(x.id);
  verifyReferrerUpdated(x.id);
  deleteReferrer(x.id);
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

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReleas(x.id);
  updateReleas(x.id);
  updateReleas(x.id);
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
  deleteReleas(x.id);
});

bthread("RemoveLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemove(x.id);
  updateRemove(x.id);
  updateRemove(x.id);
  verifyRemoveExists(x.id);
  verifyRemoveUpdated(x.id);
  deleteRemove(x.id);
});

bthread("RemovetokenLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemovetoken(x.id);
  updateRemovetoken(x.id);
  updateRemovetoken(x.id);
  verifyRemovetokenExists(x.id);
  verifyRemovetokenUpdated(x.id);
  deleteRemovetoken(x.id);
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

bthread("ReplyLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReply(x.id);
  updateReply(x.id);
  updateReply(x.id);
  verifyReplyExists(x.id);
  verifyReplyUpdated(x.id);
  deleteReply(x.id);
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

bthread("ReportLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReport(x.id);
  updateReport(x.id);
  updateReport(x.id);
  verifyReportExists(x.id);
  verifyReportUpdated(x.id);
  deleteReport(x.id);
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

bthread("RepositoryaccesLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepositoryacces(x.id);
  updateRepositoryacces(x.id);
  updateRepositoryacces(x.id);
  verifyRepositoryaccesExists(x.id);
  verifyRepositoryaccesUpdated(x.id);
  deleteRepositoryacces(x.id);
});

bthread("RepositoryinvitationLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepositoryinvitation(x.id);
  updateRepositoryinvitation(x.id);
  updateRepositoryinvitation(x.id);
  verifyRepositoryinvitationExists(x.id);
  verifyRepositoryinvitationUpdated(x.id);
  deleteRepositoryinvitation(x.id);
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

bthread("RequiredpullrequestreviewLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredpullrequestreview(x.id);
  updateRequiredpullrequestreview(x.id);
  updateRequiredpullrequestreview(x.id);
  verifyRequiredpullrequestreviewExists(x.id);
  verifyRequiredpullrequestreviewUpdated(x.id);
  deleteRequiredpullrequestreview(x.id);
});

bthread("RequiredsignatureLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredsignature(x.id);
  updateRequiredsignature(x.id);
  updateRequiredsignature(x.id);
  verifyRequiredsignatureExists(x.id);
  verifyRequiredsignatureUpdated(x.id);
  deleteRequiredsignature(x.id);
});

bthread("RequiredstatuscheckLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredstatuscheck(x.id);
  updateRequiredstatuscheck(x.id);
  updateRequiredstatuscheck(x.id);
  verifyRequiredstatuscheckExists(x.id);
  verifyRequiredstatuscheckUpdated(x.id);
  deleteRequiredstatuscheck(x.id);
});

bthread("RerequestLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRerequest(x.id);
  updateRerequest(x.id);
  updateRerequest(x.id);
  verifyRerequestExists(x.id);
  verifyRerequestUpdated(x.id);
  deleteRerequest(x.id);
});

bthread("RerunLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRerun(x.id);
  updateRerun(x.id);
  updateRerun(x.id);
  verifyRerunExists(x.id);
  verifyRerunUpdated(x.id);
  deleteRerun(x.id);
});

bthread("RerunfailedjobLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRerunfailedjob(x.id);
  updateRerunfailedjob(x.id);
  updateRerunfailedjob(x.id);
  verifyRerunfailedjobExists(x.id);
  verifyRerunfailedjobUpdated(x.id);
  deleteRerunfailedjob(x.id);
});

bthread("RestoreLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRestore(x.id);
  updateRestore(x.id);
  updateRestore(x.id);
  verifyRestoreExists(x.id);
  verifyRestoreUpdated(x.id);
  deleteRestore(x.id);
});

bthread("RestrictionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRestriction(x.id);
  updateRestriction(x.id);
  updateRestriction(x.id);
  verifyRestrictionExists(x.id);
  verifyRestrictionUpdated(x.id);
  deleteRestriction(x.id);
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

bthread("RevokeLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRevoke(x.id);
  updateRevoke(x.id);
  updateRevoke(x.id);
  verifyRevokeExists(x.id);
  verifyRevokeUpdated(x.id);
  deleteRevoke(x.id);
});

bthread("RoutestatLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRoutestat(x.id);
  updateRoutestat(x.id);
  updateRoutestat(x.id);
  verifyRoutestatExists(x.id);
  verifyRoutestatUpdated(x.id);
  deleteRoutestat(x.id);
});

bthread("RuleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRule(x.id);
  updateRule(x.id);
  updateRule(x.id);
  verifyRuleExists(x.id);
  verifyRuleUpdated(x.id);
  deleteRule(x.id);
});

bthread("RulesetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRuleset(x.id);
  updateRuleset(x.id);
  updateRuleset(x.id);
  verifyRulesetExists(x.id);
  verifyRulesetUpdated(x.id);
  deleteRuleset(x.id);
});

bthread("RulesuiteLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRulesuite(x.id);
  updateRulesuite(x.id);
  updateRulesuite(x.id);
  verifyRulesuiteExists(x.id);
  verifyRulesuiteUpdated(x.id);
  deleteRulesuite(x.id);
});

bthread("RunLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRun(x.id);
  updateRun(x.id);
  updateRun(x.id);
  verifyRunExists(x.id);
  verifyRunUpdated(x.id);
  deleteRun(x.id);
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

bthread("RunnergroupLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRunnergroup(x.id);
  updateRunnergroup(x.id);
  updateRunnergroup(x.id);
  verifyRunnergroupExists(x.id);
  verifyRunnergroupUpdated(x.id);
  deleteRunnergroup(x.id);
});

bthread("SarifLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSarif(x.id);
  updateSarif(x.id);
  updateSarif(x.id);
  verifySarifExists(x.id);
  verifySarifUpdated(x.id);
  deleteSarif(x.id);
});

bthread("SbomLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSbom(x.id);
  updateSbom(x.id);
  updateSbom(x.id);
  verifySbomExists(x.id);
  verifySbomUpdated(x.id);
  deleteSbom(x.id);
});

bthread("ScanhistoryLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScanhistory(x.id);
  updateScanhistory(x.id);
  updateScanhistory(x.id);
  verifyScanhistoryExists(x.id);
  verifyScanhistoryUpdated(x.id);
  deleteScanhistory(x.id);
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSchema(x.id);
  updateSchema(x.id);
  updateSchema(x.id);
  verifySchemaExists(x.id);
  verifySchemaUpdated(x.id);
  deleteSchema(x.id);
});

bthread("ScopedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScoped(x.id);
  updateScoped(x.id);
  updateScoped(x.id);
  verifyScopedExists(x.id);
  verifyScopedUpdated(x.id);
  deleteScoped(x.id);
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

bthread("SeatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSeat(x.id);
  updateSeat(x.id);
  updateSeat(x.id);
  verifySeatExists(x.id);
  verifySeatUpdated(x.id);
  deleteSeat(x.id);
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

bthread("SecretscanningLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecretscanning(x.id);
  updateSecretscanning(x.id);
  updateSecretscanning(x.id);
  verifySecretscanningExists(x.id);
  verifySecretscanningUpdated(x.id);
  deleteSecretscanning(x.id);
});

bthread("SecurityadvisoryLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecurityadvisory(x.id);
  updateSecurityadvisory(x.id);
  updateSecurityadvisory(x.id);
  verifySecurityadvisoryExists(x.id);
  verifySecurityadvisoryUpdated(x.id);
  deleteSecurityadvisory(x.id);
});

bthread("SecuritymanagerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecuritymanager(x.id);
  updateSecuritymanager(x.id);
  updateSecuritymanager(x.id);
  verifySecuritymanagerExists(x.id);
  verifySecuritymanagerUpdated(x.id);
  deleteSecuritymanager(x.id);
});

bthread("SelectedactionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelectedaction(x.id);
  updateSelectedaction(x.id);
  updateSelectedaction(x.id);
  verifySelectedactionExists(x.id);
  verifySelectedactionUpdated(x.id);
  deleteSelectedaction(x.id);
});

bthread("SelectedteamLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelectedteam(x.id);
  updateSelectedteam(x.id);
  updateSelectedteam(x.id);
  verifySelectedteamExists(x.id);
  verifySelectedteamUpdated(x.id);
  deleteSelectedteam(x.id);
});

bthread("SelecteduserLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelecteduser(x.id);
  updateSelecteduser(x.id);
  updateSelecteduser(x.id);
  verifySelecteduserExists(x.id);
  verifySelecteduserUpdated(x.id);
  deleteSelecteduser(x.id);
});

bthread("SelfhostedrunnerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelfhostedrunner(x.id);
  updateSelfhostedrunner(x.id);
  updateSelfhostedrunner(x.id);
  verifySelfhostedrunnerExists(x.id);
  verifySelfhostedrunnerUpdated(x.id);
  deleteSelfhostedrunner(x.id);
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

bthread("SharedstorageLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSharedstorage(x.id);
  updateSharedstorage(x.id);
  updateSharedstorage(x.id);
  verifySharedstorageExists(x.id);
  verifySharedstorageUpdated(x.id);
  deleteSharedstorage(x.id);
});

bthread("SnapshotLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSnapshot(x.id);
  updateSnapshot(x.id);
  updateSnapshot(x.id);
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
  deleteSnapshot(x.id);
});

bthread("SocialaccountLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSocialaccount(x.id);
  updateSocialaccount(x.id);
  updateSocialaccount(x.id);
  verifySocialaccountExists(x.id);
  verifySocialaccountUpdated(x.id);
  deleteSocialaccount(x.id);
});

bthread("SshsigningkeyLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSshsigningkey(x.id);
  updateSshsigningkey(x.id);
  updateSshsigningkey(x.id);
  verifySshsigningkeyExists(x.id);
  verifySshsigningkeyUpdated(x.id);
  deleteSshsigningkey(x.id);
});

bthread("StarLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStar(x.id);
  updateStar(x.id);
  updateStar(x.id);
  verifyStarExists(x.id);
  verifyStarUpdated(x.id);
  deleteStar(x.id);
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

bthread("StatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStat(x.id);
  updateStat(x.id);
  updateStat(x.id);
  verifyStatExists(x.id);
  verifyStatUpdated(x.id);
  deleteStat(x.id);
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

bthread("StoragerecordLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStoragerecord(x.id);
  updateStoragerecord(x.id);
  updateStoragerecord(x.id);
  verifyStoragerecordExists(x.id);
  verifyStoragerecordUpdated(x.id);
  deleteStoragerecord(x.id);
});

bthread("StubbedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStubbed(x.id);
  updateStubbed(x.id);
  updateStubbed(x.id);
  verifyStubbedExists(x.id);
  verifyStubbedUpdated(x.id);
  deleteStubbed(x.id);
});

bthread("SubLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSub(x.id);
  updateSub(x.id);
  updateSub(x.id);
  verifySubExists(x.id);
  verifySubUpdated(x.id);
  deleteSub(x.id);
});

bthread("SubissueLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubissue(x.id);
  updateSubissue(x.id);
  updateSubissue(x.id);
  verifySubissueExists(x.id);
  verifySubissueUpdated(x.id);
  deleteSubissue(x.id);
});

bthread("SubjectstatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubjectstat(x.id);
  updateSubjectstat(x.id);
  updateSubjectstat(x.id);
  verifySubjectstatExists(x.id);
  verifySubjectstatUpdated(x.id);
  deleteSubjectstat(x.id);
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

bthread("SummarystatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSummarystat(x.id);
  updateSummarystat(x.id);
  updateSummarystat(x.id);
  verifySummarystatExists(x.id);
  verifySummarystatUpdated(x.id);
  deleteSummarystat(x.id);
});

bthread("SuspendedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSuspended(x.id);
  updateSuspended(x.id);
  updateSuspended(x.id);
  verifySuspendedExists(x.id);
  verifySuspendedUpdated(x.id);
  deleteSuspended(x.id);
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

bthread("TarballLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTarball(x.id);
  updateTarball(x.id);
  updateTarball(x.id);
  verifyTarballExists(x.id);
  verifyTarballUpdated(x.id);
  deleteTarball(x.id);
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

bthread("TimelineLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTimeline(x.id);
  updateTimeline(x.id);
  updateTimeline(x.id);
  verifyTimelineExists(x.id);
  verifyTimelineUpdated(x.id);
  deleteTimeline(x.id);
});

bthread("TimestatLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTimestat(x.id);
  updateTimestat(x.id);
  updateTimestat(x.id);
  verifyTimestatExists(x.id);
  verifyTimestatUpdated(x.id);
  deleteTimestat(x.id);
});

bthread("TimingLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTiming(x.id);
  updateTiming(x.id);
  updateTiming(x.id);
  verifyTimingExists(x.id);
  verifyTimingUpdated(x.id);
  deleteTiming(x.id);
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

bthread("TrafficLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTraffic(x.id);
  updateTraffic(x.id);
  updateTraffic(x.id);
  verifyTrafficExists(x.id);
  verifyTrafficUpdated(x.id);
  deleteTraffic(x.id);
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

bthread("UpdatebranchLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUpdatebranch(x.id);
  updateUpdatebranch(x.id);
  updateUpdatebranch(x.id);
  verifyUpdatebranchExists(x.id);
  verifyUpdatebranchUpdated(x.id);
  deleteUpdatebranch(x.id);
});

bthread("UsageLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsage(x.id);
  updateUsage(x.id);
  updateUsage(x.id);
  verifyUsageExists(x.id);
  verifyUsageUpdated(x.id);
  deleteUsage(x.id);
});

bthread("UsagebyrepositoryLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsagebyrepository(x.id);
  updateUsagebyrepository(x.id);
  updateUsagebyrepository(x.id);
  verifyUsagebyrepositoryExists(x.id);
  verifyUsagebyrepositoryUpdated(x.id);
  deleteUsagebyrepository(x.id);
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

bthread("UserstatLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserstat(x.id);
  updateUserstat(x.id);
  updateUserstat(x.id);
  verifyUserstatExists(x.id);
  verifyUserstatUpdated(x.id);
  deleteUserstat(x.id);
});

bthread("ValueLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addValue(x.id);
  updateValue(x.id);
  updateValue(x.id);
  verifyValueExists(x.id);
  verifyValueUpdated(x.id);
  deleteValue(x.id);
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

bthread("VariantanalysLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVariantanalys(x.id);
  updateVariantanalys(x.id);
  updateVariantanalys(x.id);
  verifyVariantanalysExists(x.id);
  verifyVariantanalysUpdated(x.id);
  deleteVariantanalys(x.id);
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

bthread("ViewLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addView(x.id);
  updateView(x.id);
  updateView(x.id);
  verifyViewExists(x.id);
  verifyViewUpdated(x.id);
  deleteView(x.id);
});

bthread("VisibilityLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVisibility(x.id);
  updateVisibility(x.id);
  updateVisibility(x.id);
  verifyVisibilityExists(x.id);
  verifyVisibilityUpdated(x.id);
  deleteVisibility(x.id);
});

bthread("VulnerabilityalertLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVulnerabilityalert(x.id);
  updateVulnerabilityalert(x.id);
  updateVulnerabilityalert(x.id);
  verifyVulnerabilityalertExists(x.id);
  verifyVulnerabilityalertUpdated(x.id);
  deleteVulnerabilityalert(x.id);
});

bthread("WorkflowLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorkflow(x.id);
  updateWorkflow(x.id);
  updateWorkflow(x.id);
  verifyWorkflowExists(x.id);
  verifyWorkflowUpdated(x.id);
  deleteWorkflow(x.id);
});

bthread("ZenLifecycle", function () {
  const x = pick([{id: "Z001"}, {id: "Z002"}]);
  addZen(x.id);
  updateZen(x.id);
  updateZen(x.id);
  verifyZenExists(x.id);
  verifyZenUpdated(x.id);
  deleteZen(x.id);
});

bthread("ZipballLifecycle", function () {
  const x = pick([{id: "Z001"}, {id: "Z002"}]);
  addZipball(x.id);
  updateZipball(x.id);
  updateZipball(x.id);
  verifyZipballExists(x.id);
  verifyZipballUpdated(x.id);
  deleteZipball(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Acceptedassignment create verification", function () {
  const e = waitForAnyAcceptedassignmentAdded();
  block(matchDeleteAcceptedassignment(e.id, ANY), function () {
    verifyAcceptedassignmentExists(e.id);
  });
});

bthread("Acceptedassignment update verification", function () {
  const e = waitForAnyAcceptedassignmentUpdated();
  block(matchDeleteAcceptedassignment(e.id, ANY), function () {
    verifyAcceptedassignmentUpdated(e.id);
  });
});

bthread("Acceptedassignment delete verification", function () {
  const e = waitForAnyAcceptedassignmentDeleted();
  block(matchAddAcceptedassignment(e.id, ANY), function () {
    verifyAcceptedassignmentDoesNotExist(e.id);
  });
});

bthread("Acces create verification", function () {
  const e = waitForAnyAccesAdded();
  block(matchDeleteAcces(e.id, ANY), function () {
    verifyAccesExists(e.id);
  });
});

bthread("Acces update verification", function () {
  const e = waitForAnyAccesUpdated();
  block(matchDeleteAcces(e.id, ANY), function () {
    verifyAccesUpdated(e.id);
  });
});

bthread("Acces delete verification", function () {
  const e = waitForAnyAccesDeleted();
  block(matchAddAcces(e.id, ANY), function () {
    verifyAccesDoesNotExist(e.id);
  });
});

bthread("Accesstoken create verification", function () {
  const e = waitForAnyAccesstokenAdded();
  block(matchDeleteAccesstoken(e.id, ANY), function () {
    verifyAccesstokenExists(e.id);
  });
});

bthread("Accesstoken update verification", function () {
  const e = waitForAnyAccesstokenUpdated();
  block(matchDeleteAccesstoken(e.id, ANY), function () {
    verifyAccesstokenUpdated(e.id);
  });
});

bthread("Accesstoken delete verification", function () {
  const e = waitForAnyAccesstokenDeleted();
  block(matchAddAccesstoken(e.id, ANY), function () {
    verifyAccesstokenDoesNotExist(e.id);
  });
});

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  block(matchDeleteAccount(e.id, ANY), function () {
    verifyAccountExists(e.id);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  block(matchDeleteAccount(e.id, ANY), function () {
    verifyAccountUpdated(e.id);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  block(matchAddAccount(e.id, ANY), function () {
    verifyAccountDoesNotExist(e.id);
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

bthread("Add create verification", function () {
  const e = waitForAnyAddAdded();
  block(matchDeleteAdd(e.id, ANY), function () {
    verifyAddExists(e.id);
  });
});

bthread("Add update verification", function () {
  const e = waitForAnyAddUpdated();
  block(matchDeleteAdd(e.id, ANY), function () {
    verifyAddUpdated(e.id);
  });
});

bthread("Add delete verification", function () {
  const e = waitForAnyAddDeleted();
  block(matchAddAdd(e.id, ANY), function () {
    verifyAddDoesNotExist(e.id);
  });
});

bthread("Advisory create verification", function () {
  const e = waitForAnyAdvisoryAdded();
  block(matchDeleteAdvisory(e.id, ANY), function () {
    verifyAdvisoryExists(e.id);
  });
});

bthread("Advisory update verification", function () {
  const e = waitForAnyAdvisoryUpdated();
  block(matchDeleteAdvisory(e.id, ANY), function () {
    verifyAdvisoryUpdated(e.id);
  });
});

bthread("Advisory delete verification", function () {
  const e = waitForAnyAdvisoryDeleted();
  block(matchAddAdvisory(e.id, ANY), function () {
    verifyAdvisoryDoesNotExist(e.id);
  });
});

bthread("Alert create verification", function () {
  const e = waitForAnyAlertAdded();
  block(matchDeleteAlert(e.id, ANY), function () {
    verifyAlertExists(e.id);
  });
});

bthread("Alert update verification", function () {
  const e = waitForAnyAlertUpdated();
  block(matchDeleteAlert(e.id, ANY), function () {
    verifyAlertUpdated(e.id);
  });
});

bthread("Alert delete verification", function () {
  const e = waitForAnyAlertDeleted();
  block(matchAddAlert(e.id, ANY), function () {
    verifyAlertDoesNotExist(e.id);
  });
});

bthread("Analys create verification", function () {
  const e = waitForAnyAnalysAdded();
  block(matchDeleteAnalys(e.id, ANY), function () {
    verifyAnalysExists(e.id);
  });
});

bthread("Analys update verification", function () {
  const e = waitForAnyAnalysUpdated();
  block(matchDeleteAnalys(e.id, ANY), function () {
    verifyAnalysUpdated(e.id);
  });
});

bthread("Analys delete verification", function () {
  const e = waitForAnyAnalysDeleted();
  block(matchAddAnalys(e.id, ANY), function () {
    verifyAnalysDoesNotExist(e.id);
  });
});

bthread("Annotation create verification", function () {
  const e = waitForAnyAnnotationAdded();
  block(matchDeleteAnnotation(e.id, ANY), function () {
    verifyAnnotationExists(e.id);
  });
});

bthread("Annotation update verification", function () {
  const e = waitForAnyAnnotationUpdated();
  block(matchDeleteAnnotation(e.id, ANY), function () {
    verifyAnnotationUpdated(e.id);
  });
});

bthread("Annotation delete verification", function () {
  const e = waitForAnyAnnotationDeleted();
  block(matchAddAnnotation(e.id, ANY), function () {
    verifyAnnotationDoesNotExist(e.id);
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

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  block(matchDeleteApp(e.id, ANY), function () {
    verifyAppExists(e.id);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  block(matchDeleteApp(e.id, ANY), function () {
    verifyAppUpdated(e.id);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  block(matchAddApp(e.id, ANY), function () {
    verifyAppDoesNotExist(e.id);
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

bthread("Appmanifest create verification", function () {
  const e = waitForAnyAppmanifestAdded();
  block(matchDeleteAppmanifest(e.id, ANY), function () {
    verifyAppmanifestExists(e.id);
  });
});

bthread("Appmanifest update verification", function () {
  const e = waitForAnyAppmanifestUpdated();
  block(matchDeleteAppmanifest(e.id, ANY), function () {
    verifyAppmanifestUpdated(e.id);
  });
});

bthread("Appmanifest delete verification", function () {
  const e = waitForAnyAppmanifestDeleted();
  block(matchAddAppmanifest(e.id, ANY), function () {
    verifyAppmanifestDoesNotExist(e.id);
  });
});

bthread("Approval create verification", function () {
  const e = waitForAnyApprovalAdded();
  block(matchDeleteApproval(e.id, ANY), function () {
    verifyApprovalExists(e.id);
  });
});

bthread("Approval update verification", function () {
  const e = waitForAnyApprovalUpdated();
  block(matchDeleteApproval(e.id, ANY), function () {
    verifyApprovalUpdated(e.id);
  });
});

bthread("Approval delete verification", function () {
  const e = waitForAnyApprovalDeleted();
  block(matchAddApproval(e.id, ANY), function () {
    verifyApprovalDoesNotExist(e.id);
  });
});

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  block(matchDeleteApprove(e.id, ANY), function () {
    verifyApproveExists(e.id);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  block(matchDeleteApprove(e.id, ANY), function () {
    verifyApproveUpdated(e.id);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  block(matchAddApprove(e.id, ANY), function () {
    verifyApproveDoesNotExist(e.id);
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

bthread("Artifact create verification", function () {
  const e = waitForAnyArtifactAdded();
  block(matchDeleteArtifact(e.id, ANY), function () {
    verifyArtifactExists(e.id);
  });
});

bthread("Artifact update verification", function () {
  const e = waitForAnyArtifactUpdated();
  block(matchDeleteArtifact(e.id, ANY), function () {
    verifyArtifactUpdated(e.id);
  });
});

bthread("Artifact delete verification", function () {
  const e = waitForAnyArtifactDeleted();
  block(matchAddArtifact(e.id, ANY), function () {
    verifyArtifactDoesNotExist(e.id);
  });
});

bthread("Artifactandlogretention create verification", function () {
  const e = waitForAnyArtifactandlogretentionAdded();
  block(matchDeleteArtifactandlogretention(e.id, ANY), function () {
    verifyArtifactandlogretentionExists(e.id);
  });
});

bthread("Artifactandlogretention update verification", function () {
  const e = waitForAnyArtifactandlogretentionUpdated();
  block(matchDeleteArtifactandlogretention(e.id, ANY), function () {
    verifyArtifactandlogretentionUpdated(e.id);
  });
});

bthread("Artifactandlogretention delete verification", function () {
  const e = waitForAnyArtifactandlogretentionDeleted();
  block(matchAddArtifactandlogretention(e.id, ANY), function () {
    verifyArtifactandlogretentionDoesNotExist(e.id);
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

bthread("Assignment create verification", function () {
  const e = waitForAnyAssignmentAdded();
  block(matchDeleteAssignment(e.id, ANY), function () {
    verifyAssignmentExists(e.id);
  });
});

bthread("Assignment update verification", function () {
  const e = waitForAnyAssignmentUpdated();
  block(matchDeleteAssignment(e.id, ANY), function () {
    verifyAssignmentUpdated(e.id);
  });
});

bthread("Assignment delete verification", function () {
  const e = waitForAnyAssignmentDeleted();
  block(matchAddAssignment(e.id, ANY), function () {
    verifyAssignmentDoesNotExist(e.id);
  });
});

bthread("Attach create verification", function () {
  const e = waitForAnyAttachAdded();
  block(matchDeleteAttach(e.id, ANY), function () {
    verifyAttachExists(e.id);
  });
});

bthread("Attach update verification", function () {
  const e = waitForAnyAttachUpdated();
  block(matchDeleteAttach(e.id, ANY), function () {
    verifyAttachUpdated(e.id);
  });
});

bthread("Attach delete verification", function () {
  const e = waitForAnyAttachDeleted();
  block(matchAddAttach(e.id, ANY), function () {
    verifyAttachDoesNotExist(e.id);
  });
});

bthread("Attempt create verification", function () {
  const e = waitForAnyAttemptAdded();
  block(matchDeleteAttempt(e.id, ANY), function () {
    verifyAttemptExists(e.id);
  });
});

bthread("Attempt update verification", function () {
  const e = waitForAnyAttemptUpdated();
  block(matchDeleteAttempt(e.id, ANY), function () {
    verifyAttemptUpdated(e.id);
  });
});

bthread("Attempt delete verification", function () {
  const e = waitForAnyAttemptDeleted();
  block(matchAddAttempt(e.id, ANY), function () {
    verifyAttemptDoesNotExist(e.id);
  });
});

bthread("Attestation create verification", function () {
  const e = waitForAnyAttestationAdded();
  block(matchDeleteAttestation(e.id, ANY), function () {
    verifyAttestationExists(e.id);
  });
});

bthread("Attestation update verification", function () {
  const e = waitForAnyAttestationUpdated();
  block(matchDeleteAttestation(e.id, ANY), function () {
    verifyAttestationUpdated(e.id);
  });
});

bthread("Attestation delete verification", function () {
  const e = waitForAnyAttestationDeleted();
  block(matchAddAttestation(e.id, ANY), function () {
    verifyAttestationDoesNotExist(e.id);
  });
});

bthread("Author create verification", function () {
  const e = waitForAnyAuthorAdded();
  block(matchDeleteAuthor(e.id, ANY), function () {
    verifyAuthorExists(e.id);
  });
});

bthread("Author update verification", function () {
  const e = waitForAnyAuthorUpdated();
  block(matchDeleteAuthor(e.id, ANY), function () {
    verifyAuthorUpdated(e.id);
  });
});

bthread("Author delete verification", function () {
  const e = waitForAnyAuthorDeleted();
  block(matchAddAuthor(e.id, ANY), function () {
    verifyAuthorDoesNotExist(e.id);
  });
});

bthread("Autofix create verification", function () {
  const e = waitForAnyAutofixAdded();
  block(matchDeleteAutofix(e.id, ANY), function () {
    verifyAutofixExists(e.id);
  });
});

bthread("Autofix update verification", function () {
  const e = waitForAnyAutofixUpdated();
  block(matchDeleteAutofix(e.id, ANY), function () {
    verifyAutofixUpdated(e.id);
  });
});

bthread("Autofix delete verification", function () {
  const e = waitForAnyAutofixDeleted();
  block(matchAddAutofix(e.id, ANY), function () {
    verifyAutofixDoesNotExist(e.id);
  });
});

bthread("Autolink create verification", function () {
  const e = waitForAnyAutolinkAdded();
  block(matchDeleteAutolink(e.id, ANY), function () {
    verifyAutolinkExists(e.id);
  });
});

bthread("Autolink update verification", function () {
  const e = waitForAnyAutolinkUpdated();
  block(matchDeleteAutolink(e.id, ANY), function () {
    verifyAutolinkUpdated(e.id);
  });
});

bthread("Autolink delete verification", function () {
  const e = waitForAnyAutolinkDeleted();
  block(matchAddAutolink(e.id, ANY), function () {
    verifyAutolinkDoesNotExist(e.id);
  });
});

bthread("Automatedsecurityfixe create verification", function () {
  const e = waitForAnyAutomatedsecurityfixeAdded();
  block(matchDeleteAutomatedsecurityfixe(e.id, ANY), function () {
    verifyAutomatedsecurityfixeExists(e.id);
  });
});

bthread("Automatedsecurityfixe update verification", function () {
  const e = waitForAnyAutomatedsecurityfixeUpdated();
  block(matchDeleteAutomatedsecurityfixe(e.id, ANY), function () {
    verifyAutomatedsecurityfixeUpdated(e.id);
  });
});

bthread("Automatedsecurityfixe delete verification", function () {
  const e = waitForAnyAutomatedsecurityfixeDeleted();
  block(matchAddAutomatedsecurityfixe(e.id, ANY), function () {
    verifyAutomatedsecurityfixeDoesNotExist(e.id);
  });
});

bthread("Billing create verification", function () {
  const e = waitForAnyBillingAdded();
  block(matchDeleteBilling(e.id, ANY), function () {
    verifyBillingExists(e.id);
  });
});

bthread("Billing update verification", function () {
  const e = waitForAnyBillingUpdated();
  block(matchDeleteBilling(e.id, ANY), function () {
    verifyBillingUpdated(e.id);
  });
});

bthread("Billing delete verification", function () {
  const e = waitForAnyBillingDeleted();
  block(matchAddBilling(e.id, ANY), function () {
    verifyBillingDoesNotExist(e.id);
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

bthread("Blockedby create verification", function () {
  const e = waitForAnyBlockedbyAdded();
  block(matchDeleteBlockedby(e.id, ANY), function () {
    verifyBlockedbyExists(e.id);
  });
});

bthread("Blockedby update verification", function () {
  const e = waitForAnyBlockedbyUpdated();
  block(matchDeleteBlockedby(e.id, ANY), function () {
    verifyBlockedbyUpdated(e.id);
  });
});

bthread("Blockedby delete verification", function () {
  const e = waitForAnyBlockedbyDeleted();
  block(matchAddBlockedby(e.id, ANY), function () {
    verifyBlockedbyDoesNotExist(e.id);
  });
});

bthread("Blocking create verification", function () {
  const e = waitForAnyBlockingAdded();
  block(matchDeleteBlocking(e.id, ANY), function () {
    verifyBlockingExists(e.id);
  });
});

bthread("Blocking update verification", function () {
  const e = waitForAnyBlockingUpdated();
  block(matchDeleteBlocking(e.id, ANY), function () {
    verifyBlockingUpdated(e.id);
  });
});

bthread("Blocking delete verification", function () {
  const e = waitForAnyBlockingDeleted();
  block(matchAddBlocking(e.id, ANY), function () {
    verifyBlockingDoesNotExist(e.id);
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

bthread("Brancheswherehead create verification", function () {
  const e = waitForAnyBrancheswhereheadAdded();
  block(matchDeleteBrancheswherehead(e.id, ANY), function () {
    verifyBrancheswhereheadExists(e.id);
  });
});

bthread("Brancheswherehead update verification", function () {
  const e = waitForAnyBrancheswhereheadUpdated();
  block(matchDeleteBrancheswherehead(e.id, ANY), function () {
    verifyBrancheswhereheadUpdated(e.id);
  });
});

bthread("Brancheswherehead delete verification", function () {
  const e = waitForAnyBrancheswhereheadDeleted();
  block(matchAddBrancheswherehead(e.id, ANY), function () {
    verifyBrancheswhereheadDoesNotExist(e.id);
  });
});

bthread("Build create verification", function () {
  const e = waitForAnyBuildAdded();
  block(matchDeleteBuild(e.id, ANY), function () {
    verifyBuildExists(e.id);
  });
});

bthread("Build update verification", function () {
  const e = waitForAnyBuildUpdated();
  block(matchDeleteBuild(e.id, ANY), function () {
    verifyBuildUpdated(e.id);
  });
});

bthread("Build delete verification", function () {
  const e = waitForAnyBuildDeleted();
  block(matchAddBuild(e.id, ANY), function () {
    verifyBuildDoesNotExist(e.id);
  });
});

bthread("Bulklist create verification", function () {
  const e = waitForAnyBulklistAdded();
  block(matchDeleteBulklist(e.id, ANY), function () {
    verifyBulklistExists(e.id);
  });
});

bthread("Bulklist update verification", function () {
  const e = waitForAnyBulklistUpdated();
  block(matchDeleteBulklist(e.id, ANY), function () {
    verifyBulklistUpdated(e.id);
  });
});

bthread("Bulklist delete verification", function () {
  const e = waitForAnyBulklistDeleted();
  block(matchAddBulklist(e.id, ANY), function () {
    verifyBulklistDoesNotExist(e.id);
  });
});

bthread("Cache create verification", function () {
  const e = waitForAnyCacheAdded();
  block(matchDeleteCache(e.id, ANY), function () {
    verifyCacheExists(e.id);
  });
});

bthread("Cache update verification", function () {
  const e = waitForAnyCacheUpdated();
  block(matchDeleteCache(e.id, ANY), function () {
    verifyCacheUpdated(e.id);
  });
});

bthread("Cache delete verification", function () {
  const e = waitForAnyCacheDeleted();
  block(matchAddCache(e.id, ANY), function () {
    verifyCacheDoesNotExist(e.id);
  });
});

bthread("Campaign create verification", function () {
  const e = waitForAnyCampaignAdded();
  block(matchDeleteCampaign(e.id, ANY), function () {
    verifyCampaignExists(e.id);
  });
});

bthread("Campaign update verification", function () {
  const e = waitForAnyCampaignUpdated();
  block(matchDeleteCampaign(e.id, ANY), function () {
    verifyCampaignUpdated(e.id);
  });
});

bthread("Campaign delete verification", function () {
  const e = waitForAnyCampaignDeleted();
  block(matchAddCampaign(e.id, ANY), function () {
    verifyCampaignDoesNotExist(e.id);
  });
});

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  block(matchDeleteCancel(e.id, ANY), function () {
    verifyCancelExists(e.id);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  block(matchDeleteCancel(e.id, ANY), function () {
    verifyCancelUpdated(e.id);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  block(matchAddCancel(e.id, ANY), function () {
    verifyCancelDoesNotExist(e.id);
  });
});

bthread("Checkrun create verification", function () {
  const e = waitForAnyCheckrunAdded();
  block(matchDeleteCheckrun(e.id, ANY), function () {
    verifyCheckrunExists(e.id);
  });
});

bthread("Checkrun update verification", function () {
  const e = waitForAnyCheckrunUpdated();
  block(matchDeleteCheckrun(e.id, ANY), function () {
    verifyCheckrunUpdated(e.id);
  });
});

bthread("Checkrun delete verification", function () {
  const e = waitForAnyCheckrunDeleted();
  block(matchAddCheckrun(e.id, ANY), function () {
    verifyCheckrunDoesNotExist(e.id);
  });
});

bthread("Checksuite create verification", function () {
  const e = waitForAnyChecksuiteAdded();
  block(matchDeleteChecksuite(e.id, ANY), function () {
    verifyChecksuiteExists(e.id);
  });
});

bthread("Checksuite update verification", function () {
  const e = waitForAnyChecksuiteUpdated();
  block(matchDeleteChecksuite(e.id, ANY), function () {
    verifyChecksuiteUpdated(e.id);
  });
});

bthread("Checksuite delete verification", function () {
  const e = waitForAnyChecksuiteDeleted();
  block(matchAddChecksuite(e.id, ANY), function () {
    verifyChecksuiteDoesNotExist(e.id);
  });
});

bthread("Classroom create verification", function () {
  const e = waitForAnyClassroomAdded();
  block(matchDeleteClassroom(e.id, ANY), function () {
    verifyClassroomExists(e.id);
  });
});

bthread("Classroom update verification", function () {
  const e = waitForAnyClassroomUpdated();
  block(matchDeleteClassroom(e.id, ANY), function () {
    verifyClassroomUpdated(e.id);
  });
});

bthread("Classroom delete verification", function () {
  const e = waitForAnyClassroomDeleted();
  block(matchAddClassroom(e.id, ANY), function () {
    verifyClassroomDoesNotExist(e.id);
  });
});

bthread("Clone create verification", function () {
  const e = waitForAnyCloneAdded();
  block(matchDeleteClone(e.id, ANY), function () {
    verifyCloneExists(e.id);
  });
});

bthread("Clone update verification", function () {
  const e = waitForAnyCloneUpdated();
  block(matchDeleteClone(e.id, ANY), function () {
    verifyCloneUpdated(e.id);
  });
});

bthread("Clone delete verification", function () {
  const e = waitForAnyCloneDeleted();
  block(matchAddClone(e.id, ANY), function () {
    verifyCloneDoesNotExist(e.id);
  });
});

bthread("Code create verification", function () {
  const e = waitForAnyCodeAdded();
  block(matchDeleteCode(e.id, ANY), function () {
    verifyCodeExists(e.id);
  });
});

bthread("Code update verification", function () {
  const e = waitForAnyCodeUpdated();
  block(matchDeleteCode(e.id, ANY), function () {
    verifyCodeUpdated(e.id);
  });
});

bthread("Code delete verification", function () {
  const e = waitForAnyCodeDeleted();
  block(matchAddCode(e.id, ANY), function () {
    verifyCodeDoesNotExist(e.id);
  });
});

bthread("Codefrequency create verification", function () {
  const e = waitForAnyCodefrequencyAdded();
  block(matchDeleteCodefrequency(e.id, ANY), function () {
    verifyCodefrequencyExists(e.id);
  });
});

bthread("Codefrequency update verification", function () {
  const e = waitForAnyCodefrequencyUpdated();
  block(matchDeleteCodefrequency(e.id, ANY), function () {
    verifyCodefrequencyUpdated(e.id);
  });
});

bthread("Codefrequency delete verification", function () {
  const e = waitForAnyCodefrequencyDeleted();
  block(matchAddCodefrequency(e.id, ANY), function () {
    verifyCodefrequencyDoesNotExist(e.id);
  });
});

bthread("Codeowner create verification", function () {
  const e = waitForAnyCodeownerAdded();
  block(matchDeleteCodeowner(e.id, ANY), function () {
    verifyCodeownerExists(e.id);
  });
});

bthread("Codeowner update verification", function () {
  const e = waitForAnyCodeownerUpdated();
  block(matchDeleteCodeowner(e.id, ANY), function () {
    verifyCodeownerUpdated(e.id);
  });
});

bthread("Codeowner delete verification", function () {
  const e = waitForAnyCodeownerDeleted();
  block(matchAddCodeowner(e.id, ANY), function () {
    verifyCodeownerDoesNotExist(e.id);
  });
});

bthread("Codeql create verification", function () {
  const e = waitForAnyCodeqlAdded();
  block(matchDeleteCodeql(e.id, ANY), function () {
    verifyCodeqlExists(e.id);
  });
});

bthread("Codeql update verification", function () {
  const e = waitForAnyCodeqlUpdated();
  block(matchDeleteCodeql(e.id, ANY), function () {
    verifyCodeqlUpdated(e.id);
  });
});

bthread("Codeql delete verification", function () {
  const e = waitForAnyCodeqlDeleted();
  block(matchAddCodeql(e.id, ANY), function () {
    verifyCodeqlDoesNotExist(e.id);
  });
});

bthread("Codescanning create verification", function () {
  const e = waitForAnyCodescanningAdded();
  block(matchDeleteCodescanning(e.id, ANY), function () {
    verifyCodescanningExists(e.id);
  });
});

bthread("Codescanning update verification", function () {
  const e = waitForAnyCodescanningUpdated();
  block(matchDeleteCodescanning(e.id, ANY), function () {
    verifyCodescanningUpdated(e.id);
  });
});

bthread("Codescanning delete verification", function () {
  const e = waitForAnyCodescanningDeleted();
  block(matchAddCodescanning(e.id, ANY), function () {
    verifyCodescanningDoesNotExist(e.id);
  });
});

bthread("Codesecurity create verification", function () {
  const e = waitForAnyCodesecurityAdded();
  block(matchDeleteCodesecurity(e.id, ANY), function () {
    verifyCodesecurityExists(e.id);
  });
});

bthread("Codesecurity update verification", function () {
  const e = waitForAnyCodesecurityUpdated();
  block(matchDeleteCodesecurity(e.id, ANY), function () {
    verifyCodesecurityUpdated(e.id);
  });
});

bthread("Codesecurity delete verification", function () {
  const e = waitForAnyCodesecurityDeleted();
  block(matchAddCodesecurity(e.id, ANY), function () {
    verifyCodesecurityDoesNotExist(e.id);
  });
});

bthread("Codesecurityconfiguration create verification", function () {
  const e = waitForAnyCodesecurityconfigurationAdded();
  block(matchDeleteCodesecurityconfiguration(e.id, ANY), function () {
    verifyCodesecurityconfigurationExists(e.id);
  });
});

bthread("Codesecurityconfiguration update verification", function () {
  const e = waitForAnyCodesecurityconfigurationUpdated();
  block(matchDeleteCodesecurityconfiguration(e.id, ANY), function () {
    verifyCodesecurityconfigurationUpdated(e.id);
  });
});

bthread("Codesecurityconfiguration delete verification", function () {
  const e = waitForAnyCodesecurityconfigurationDeleted();
  block(matchAddCodesecurityconfiguration(e.id, ANY), function () {
    verifyCodesecurityconfigurationDoesNotExist(e.id);
  });
});

bthread("Codesofconduct create verification", function () {
  const e = waitForAnyCodesofconductAdded();
  block(matchDeleteCodesofconduct(e.id, ANY), function () {
    verifyCodesofconductExists(e.id);
  });
});

bthread("Codesofconduct update verification", function () {
  const e = waitForAnyCodesofconductUpdated();
  block(matchDeleteCodesofconduct(e.id, ANY), function () {
    verifyCodesofconductUpdated(e.id);
  });
});

bthread("Codesofconduct delete verification", function () {
  const e = waitForAnyCodesofconductDeleted();
  block(matchAddCodesofconduct(e.id, ANY), function () {
    verifyCodesofconductDoesNotExist(e.id);
  });
});

bthread("Codespace create verification", function () {
  const e = waitForAnyCodespaceAdded();
  block(matchDeleteCodespace(e.id, ANY), function () {
    verifyCodespaceExists(e.id);
  });
});

bthread("Codespace update verification", function () {
  const e = waitForAnyCodespaceUpdated();
  block(matchDeleteCodespace(e.id, ANY), function () {
    verifyCodespaceUpdated(e.id);
  });
});

bthread("Codespace delete verification", function () {
  const e = waitForAnyCodespaceDeleted();
  block(matchAddCodespace(e.id, ANY), function () {
    verifyCodespaceDoesNotExist(e.id);
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

bthread("Column create verification", function () {
  const e = waitForAnyColumnAdded();
  block(matchDeleteColumn(e.id, ANY), function () {
    verifyColumnExists(e.id);
  });
});

bthread("Column update verification", function () {
  const e = waitForAnyColumnUpdated();
  block(matchDeleteColumn(e.id, ANY), function () {
    verifyColumnUpdated(e.id);
  });
});

bthread("Column delete verification", function () {
  const e = waitForAnyColumnDeleted();
  block(matchAddColumn(e.id, ANY), function () {
    verifyColumnDoesNotExist(e.id);
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

bthread("Commitactivity create verification", function () {
  const e = waitForAnyCommitactivityAdded();
  block(matchDeleteCommitactivity(e.id, ANY), function () {
    verifyCommitactivityExists(e.id);
  });
});

bthread("Commitactivity update verification", function () {
  const e = waitForAnyCommitactivityUpdated();
  block(matchDeleteCommitactivity(e.id, ANY), function () {
    verifyCommitactivityUpdated(e.id);
  });
});

bthread("Commitactivity delete verification", function () {
  const e = waitForAnyCommitactivityDeleted();
  block(matchAddCommitactivity(e.id, ANY), function () {
    verifyCommitactivityDoesNotExist(e.id);
  });
});

bthread("Community create verification", function () {
  const e = waitForAnyCommunityAdded();
  block(matchDeleteCommunity(e.id, ANY), function () {
    verifyCommunityExists(e.id);
  });
});

bthread("Community update verification", function () {
  const e = waitForAnyCommunityUpdated();
  block(matchDeleteCommunity(e.id, ANY), function () {
    verifyCommunityUpdated(e.id);
  });
});

bthread("Community delete verification", function () {
  const e = waitForAnyCommunityDeleted();
  block(matchAddCommunity(e.id, ANY), function () {
    verifyCommunityDoesNotExist(e.id);
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

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigExists(e.id);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigUpdated(e.id);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  block(matchAddConfig(e.id, ANY), function () {
    verifyConfigDoesNotExist(e.id);
  });
});

bthread("Configuration create verification", function () {
  const e = waitForAnyConfigurationAdded();
  block(matchDeleteConfiguration(e.id, ANY), function () {
    verifyConfigurationExists(e.id);
  });
});

bthread("Configuration update verification", function () {
  const e = waitForAnyConfigurationUpdated();
  block(matchDeleteConfiguration(e.id, ANY), function () {
    verifyConfigurationUpdated(e.id);
  });
});

bthread("Configuration delete verification", function () {
  const e = waitForAnyConfigurationDeleted();
  block(matchAddConfiguration(e.id, ANY), function () {
    verifyConfigurationDoesNotExist(e.id);
  });
});

bthread("Conflict create verification", function () {
  const e = waitForAnyConflictAdded();
  block(matchDeleteConflict(e.id, ANY), function () {
    verifyConflictExists(e.id);
  });
});

bthread("Conflict update verification", function () {
  const e = waitForAnyConflictUpdated();
  block(matchDeleteConflict(e.id, ANY), function () {
    verifyConflictUpdated(e.id);
  });
});

bthread("Conflict delete verification", function () {
  const e = waitForAnyConflictDeleted();
  block(matchAddConflict(e.id, ANY), function () {
    verifyConflictDoesNotExist(e.id);
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

bthread("Context create verification", function () {
  const e = waitForAnyContextAdded();
  block(matchDeleteContext(e.id, ANY), function () {
    verifyContextExists(e.id);
  });
});

bthread("Context update verification", function () {
  const e = waitForAnyContextUpdated();
  block(matchDeleteContext(e.id, ANY), function () {
    verifyContextUpdated(e.id);
  });
});

bthread("Context delete verification", function () {
  const e = waitForAnyContextDeleted();
  block(matchAddContext(e.id, ANY), function () {
    verifyContextDoesNotExist(e.id);
  });
});

bthread("Contributor create verification", function () {
  const e = waitForAnyContributorAdded();
  block(matchDeleteContributor(e.id, ANY), function () {
    verifyContributorExists(e.id);
  });
});

bthread("Contributor update verification", function () {
  const e = waitForAnyContributorUpdated();
  block(matchDeleteContributor(e.id, ANY), function () {
    verifyContributorUpdated(e.id);
  });
});

bthread("Contributor delete verification", function () {
  const e = waitForAnyContributorDeleted();
  block(matchAddContributor(e.id, ANY), function () {
    verifyContributorDoesNotExist(e.id);
  });
});

bthread("Conversion create verification", function () {
  const e = waitForAnyConversionAdded();
  block(matchDeleteConversion(e.id, ANY), function () {
    verifyConversionExists(e.id);
  });
});

bthread("Conversion update verification", function () {
  const e = waitForAnyConversionUpdated();
  block(matchDeleteConversion(e.id, ANY), function () {
    verifyConversionUpdated(e.id);
  });
});

bthread("Conversion delete verification", function () {
  const e = waitForAnyConversionDeleted();
  block(matchAddConversion(e.id, ANY), function () {
    verifyConversionDoesNotExist(e.id);
  });
});

bthread("Copilot create verification", function () {
  const e = waitForAnyCopilotAdded();
  block(matchDeleteCopilot(e.id, ANY), function () {
    verifyCopilotExists(e.id);
  });
});

bthread("Copilot update verification", function () {
  const e = waitForAnyCopilotUpdated();
  block(matchDeleteCopilot(e.id, ANY), function () {
    verifyCopilotUpdated(e.id);
  });
});

bthread("Copilot delete verification", function () {
  const e = waitForAnyCopilotDeleted();
  block(matchAddCopilot(e.id, ANY), function () {
    verifyCopilotDoesNotExist(e.id);
  });
});

bthread("Credential create verification", function () {
  const e = waitForAnyCredentialAdded();
  block(matchDeleteCredential(e.id, ANY), function () {
    verifyCredentialExists(e.id);
  });
});

bthread("Credential update verification", function () {
  const e = waitForAnyCredentialUpdated();
  block(matchDeleteCredential(e.id, ANY), function () {
    verifyCredentialUpdated(e.id);
  });
});

bthread("Credential delete verification", function () {
  const e = waitForAnyCredentialDeleted();
  block(matchAddCredential(e.id, ANY), function () {
    verifyCredentialDoesNotExist(e.id);
  });
});

bthread("Customization create verification", function () {
  const e = waitForAnyCustomizationAdded();
  block(matchDeleteCustomization(e.id, ANY), function () {
    verifyCustomizationExists(e.id);
  });
});

bthread("Customization update verification", function () {
  const e = waitForAnyCustomizationUpdated();
  block(matchDeleteCustomization(e.id, ANY), function () {
    verifyCustomizationUpdated(e.id);
  });
});

bthread("Customization delete verification", function () {
  const e = waitForAnyCustomizationDeleted();
  block(matchAddCustomization(e.id, ANY), function () {
    verifyCustomizationDoesNotExist(e.id);
  });
});

bthread("Cve create verification", function () {
  const e = waitForAnyCveAdded();
  block(matchDeleteCve(e.id, ANY), function () {
    verifyCveExists(e.id);
  });
});

bthread("Cve update verification", function () {
  const e = waitForAnyCveUpdated();
  block(matchDeleteCve(e.id, ANY), function () {
    verifyCveUpdated(e.id);
  });
});

bthread("Cve delete verification", function () {
  const e = waitForAnyCveDeleted();
  block(matchAddCve(e.id, ANY), function () {
    verifyCveDoesNotExist(e.id);
  });
});

bthread("Databas create verification", function () {
  const e = waitForAnyDatabasAdded();
  block(matchDeleteDatabas(e.id, ANY), function () {
    verifyDatabasExists(e.id);
  });
});

bthread("Databas update verification", function () {
  const e = waitForAnyDatabasUpdated();
  block(matchDeleteDatabas(e.id, ANY), function () {
    verifyDatabasUpdated(e.id);
  });
});

bthread("Databas delete verification", function () {
  const e = waitForAnyDatabasDeleted();
  block(matchAddDatabas(e.id, ANY), function () {
    verifyDatabasDoesNotExist(e.id);
  });
});

bthread("Default create verification", function () {
  const e = waitForAnyDefaultAdded();
  block(matchDeleteDefault(e.id, ANY), function () {
    verifyDefaultExists(e.id);
  });
});

bthread("Default update verification", function () {
  const e = waitForAnyDefaultUpdated();
  block(matchDeleteDefault(e.id, ANY), function () {
    verifyDefaultUpdated(e.id);
  });
});

bthread("Default delete verification", function () {
  const e = waitForAnyDefaultDeleted();
  block(matchAddDefault(e.id, ANY), function () {
    verifyDefaultDoesNotExist(e.id);
  });
});

bthread("Defaultlevel create verification", function () {
  const e = waitForAnyDefaultlevelAdded();
  block(matchDeleteDefaultlevel(e.id, ANY), function () {
    verifyDefaultlevelExists(e.id);
  });
});

bthread("Defaultlevel update verification", function () {
  const e = waitForAnyDefaultlevelUpdated();
  block(matchDeleteDefaultlevel(e.id, ANY), function () {
    verifyDefaultlevelUpdated(e.id);
  });
});

bthread("Defaultlevel delete verification", function () {
  const e = waitForAnyDefaultlevelDeleted();
  block(matchAddDefaultlevel(e.id, ANY), function () {
    verifyDefaultlevelDoesNotExist(e.id);
  });
});

bthread("Defaultsetup create verification", function () {
  const e = waitForAnyDefaultsetupAdded();
  block(matchDeleteDefaultsetup(e.id, ANY), function () {
    verifyDefaultsetupExists(e.id);
  });
});

bthread("Defaultsetup update verification", function () {
  const e = waitForAnyDefaultsetupUpdated();
  block(matchDeleteDefaultsetup(e.id, ANY), function () {
    verifyDefaultsetupUpdated(e.id);
  });
});

bthread("Defaultsetup delete verification", function () {
  const e = waitForAnyDefaultsetupDeleted();
  block(matchAddDefaultsetup(e.id, ANY), function () {
    verifyDefaultsetupDoesNotExist(e.id);
  });
});

bthread("Deleterequest create verification", function () {
  const e = waitForAnyDeleterequestAdded();
  block(matchDeleteDeleterequest(e.id, ANY), function () {
    verifyDeleterequestExists(e.id);
  });
});

bthread("Deleterequest update verification", function () {
  const e = waitForAnyDeleterequestUpdated();
  block(matchDeleteDeleterequest(e.id, ANY), function () {
    verifyDeleterequestUpdated(e.id);
  });
});

bthread("Deleterequest delete verification", function () {
  const e = waitForAnyDeleterequestDeleted();
  block(matchAddDeleterequest(e.id, ANY), function () {
    verifyDeleterequestDoesNotExist(e.id);
  });
});

bthread("Delivery create verification", function () {
  const e = waitForAnyDeliveryAdded();
  block(matchDeleteDelivery(e.id, ANY), function () {
    verifyDeliveryExists(e.id);
  });
});

bthread("Delivery update verification", function () {
  const e = waitForAnyDeliveryUpdated();
  block(matchDeleteDelivery(e.id, ANY), function () {
    verifyDeliveryUpdated(e.id);
  });
});

bthread("Delivery delete verification", function () {
  const e = waitForAnyDeliveryDeleted();
  block(matchAddDelivery(e.id, ANY), function () {
    verifyDeliveryDoesNotExist(e.id);
  });
});

bthread("Dependabot create verification", function () {
  const e = waitForAnyDependabotAdded();
  block(matchDeleteDependabot(e.id, ANY), function () {
    verifyDependabotExists(e.id);
  });
});

bthread("Dependabot update verification", function () {
  const e = waitForAnyDependabotUpdated();
  block(matchDeleteDependabot(e.id, ANY), function () {
    verifyDependabotUpdated(e.id);
  });
});

bthread("Dependabot delete verification", function () {
  const e = waitForAnyDependabotDeleted();
  block(matchAddDependabot(e.id, ANY), function () {
    verifyDependabotDoesNotExist(e.id);
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

bthread("Dependencygraph create verification", function () {
  const e = waitForAnyDependencygraphAdded();
  block(matchDeleteDependencygraph(e.id, ANY), function () {
    verifyDependencygraphExists(e.id);
  });
});

bthread("Dependencygraph update verification", function () {
  const e = waitForAnyDependencygraphUpdated();
  block(matchDeleteDependencygraph(e.id, ANY), function () {
    verifyDependencygraphUpdated(e.id);
  });
});

bthread("Dependencygraph delete verification", function () {
  const e = waitForAnyDependencygraphDeleted();
  block(matchAddDependencygraph(e.id, ANY), function () {
    verifyDependencygraphDoesNotExist(e.id);
  });
});

bthread("Deployment create verification", function () {
  const e = waitForAnyDeploymentAdded();
  block(matchDeleteDeployment(e.id, ANY), function () {
    verifyDeploymentExists(e.id);
  });
});

bthread("Deployment update verification", function () {
  const e = waitForAnyDeploymentUpdated();
  block(matchDeleteDeployment(e.id, ANY), function () {
    verifyDeploymentUpdated(e.id);
  });
});

bthread("Deployment delete verification", function () {
  const e = waitForAnyDeploymentDeleted();
  block(matchAddDeployment(e.id, ANY), function () {
    verifyDeploymentDoesNotExist(e.id);
  });
});

bthread("Deploymentbranchpolicy create verification", function () {
  const e = waitForAnyDeploymentbranchpolicyAdded();
  block(matchDeleteDeploymentbranchpolicy(e.id, ANY), function () {
    verifyDeploymentbranchpolicyExists(e.id);
  });
});

bthread("Deploymentbranchpolicy update verification", function () {
  const e = waitForAnyDeploymentbranchpolicyUpdated();
  block(matchDeleteDeploymentbranchpolicy(e.id, ANY), function () {
    verifyDeploymentbranchpolicyUpdated(e.id);
  });
});

bthread("Deploymentbranchpolicy delete verification", function () {
  const e = waitForAnyDeploymentbranchpolicyDeleted();
  block(matchAddDeploymentbranchpolicy(e.id, ANY), function () {
    verifyDeploymentbranchpolicyDoesNotExist(e.id);
  });
});

bthread("Deploymentprotectionrule create verification", function () {
  const e = waitForAnyDeploymentprotectionruleAdded();
  block(matchDeleteDeploymentprotectionrule(e.id, ANY), function () {
    verifyDeploymentprotectionruleExists(e.id);
  });
});

bthread("Deploymentprotectionrule update verification", function () {
  const e = waitForAnyDeploymentprotectionruleUpdated();
  block(matchDeleteDeploymentprotectionrule(e.id, ANY), function () {
    verifyDeploymentprotectionruleUpdated(e.id);
  });
});

bthread("Deploymentprotectionrule delete verification", function () {
  const e = waitForAnyDeploymentprotectionruleDeleted();
  block(matchAddDeploymentprotectionrule(e.id, ANY), function () {
    verifyDeploymentprotectionruleDoesNotExist(e.id);
  });
});

bthread("Detach create verification", function () {
  const e = waitForAnyDetachAdded();
  block(matchDeleteDetach(e.id, ANY), function () {
    verifyDetachExists(e.id);
  });
});

bthread("Detach update verification", function () {
  const e = waitForAnyDetachUpdated();
  block(matchDeleteDetach(e.id, ANY), function () {
    verifyDetachUpdated(e.id);
  });
});

bthread("Detach delete verification", function () {
  const e = waitForAnyDetachDeleted();
  block(matchAddDetach(e.id, ANY), function () {
    verifyDetachDoesNotExist(e.id);
  });
});

bthread("Devcontainer create verification", function () {
  const e = waitForAnyDevcontainerAdded();
  block(matchDeleteDevcontainer(e.id, ANY), function () {
    verifyDevcontainerExists(e.id);
  });
});

bthread("Devcontainer update verification", function () {
  const e = waitForAnyDevcontainerUpdated();
  block(matchDeleteDevcontainer(e.id, ANY), function () {
    verifyDevcontainerUpdated(e.id);
  });
});

bthread("Devcontainer delete verification", function () {
  const e = waitForAnyDevcontainerDeleted();
  block(matchAddDevcontainer(e.id, ANY), function () {
    verifyDevcontainerDoesNotExist(e.id);
  });
});

bthread("Digest create verification", function () {
  const e = waitForAnyDigestAdded();
  block(matchDeleteDigest(e.id, ANY), function () {
    verifyDigestExists(e.id);
  });
});

bthread("Digest update verification", function () {
  const e = waitForAnyDigestUpdated();
  block(matchDeleteDigest(e.id, ANY), function () {
    verifyDigestUpdated(e.id);
  });
});

bthread("Digest delete verification", function () {
  const e = waitForAnyDigestDeleted();
  block(matchAddDigest(e.id, ANY), function () {
    verifyDigestDoesNotExist(e.id);
  });
});

bthread("Disable create verification", function () {
  const e = waitForAnyDisableAdded();
  block(matchDeleteDisable(e.id, ANY), function () {
    verifyDisableExists(e.id);
  });
});

bthread("Disable update verification", function () {
  const e = waitForAnyDisableUpdated();
  block(matchDeleteDisable(e.id, ANY), function () {
    verifyDisableUpdated(e.id);
  });
});

bthread("Disable delete verification", function () {
  const e = waitForAnyDisableDeleted();
  block(matchAddDisable(e.id, ANY), function () {
    verifyDisableDoesNotExist(e.id);
  });
});

bthread("Discussion create verification", function () {
  const e = waitForAnyDiscussionAdded();
  block(matchDeleteDiscussion(e.id, ANY), function () {
    verifyDiscussionExists(e.id);
  });
});

bthread("Discussion update verification", function () {
  const e = waitForAnyDiscussionUpdated();
  block(matchDeleteDiscussion(e.id, ANY), function () {
    verifyDiscussionUpdated(e.id);
  });
});

bthread("Discussion delete verification", function () {
  const e = waitForAnyDiscussionDeleted();
  block(matchAddDiscussion(e.id, ANY), function () {
    verifyDiscussionDoesNotExist(e.id);
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

bthread("Dispatche create verification", function () {
  const e = waitForAnyDispatcheAdded();
  block(matchDeleteDispatche(e.id, ANY), function () {
    verifyDispatcheExists(e.id);
  });
});

bthread("Dispatche update verification", function () {
  const e = waitForAnyDispatcheUpdated();
  block(matchDeleteDispatche(e.id, ANY), function () {
    verifyDispatcheUpdated(e.id);
  });
});

bthread("Dispatche delete verification", function () {
  const e = waitForAnyDispatcheDeleted();
  block(matchAddDispatche(e.id, ANY), function () {
    verifyDispatcheDoesNotExist(e.id);
  });
});

bthread("Docker create verification", function () {
  const e = waitForAnyDockerAdded();
  block(matchDeleteDocker(e.id, ANY), function () {
    verifyDockerExists(e.id);
  });
});

bthread("Docker update verification", function () {
  const e = waitForAnyDockerUpdated();
  block(matchDeleteDocker(e.id, ANY), function () {
    verifyDockerUpdated(e.id);
  });
});

bthread("Docker delete verification", function () {
  const e = waitForAnyDockerDeleted();
  block(matchAddDocker(e.id, ANY), function () {
    verifyDockerDoesNotExist(e.id);
  });
});

bthread("Download create verification", function () {
  const e = waitForAnyDownloadAdded();
  block(matchDeleteDownload(e.id, ANY), function () {
    verifyDownloadExists(e.id);
  });
});

bthread("Download update verification", function () {
  const e = waitForAnyDownloadUpdated();
  block(matchDeleteDownload(e.id, ANY), function () {
    verifyDownloadUpdated(e.id);
  });
});

bthread("Download delete verification", function () {
  const e = waitForAnyDownloadDeleted();
  block(matchAddDownload(e.id, ANY), function () {
    verifyDownloadDoesNotExist(e.id);
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

bthread("Emoji create verification", function () {
  const e = waitForAnyEmojiAdded();
  block(matchDeleteEmoji(e.id, ANY), function () {
    verifyEmojiExists(e.id);
  });
});

bthread("Emoji update verification", function () {
  const e = waitForAnyEmojiUpdated();
  block(matchDeleteEmoji(e.id, ANY), function () {
    verifyEmojiUpdated(e.id);
  });
});

bthread("Emoji delete verification", function () {
  const e = waitForAnyEmojiDeleted();
  block(matchAddEmoji(e.id, ANY), function () {
    verifyEmojiDoesNotExist(e.id);
  });
});

bthread("Enable create verification", function () {
  const e = waitForAnyEnableAdded();
  block(matchDeleteEnable(e.id, ANY), function () {
    verifyEnableExists(e.id);
  });
});

bthread("Enable update verification", function () {
  const e = waitForAnyEnableUpdated();
  block(matchDeleteEnable(e.id, ANY), function () {
    verifyEnableUpdated(e.id);
  });
});

bthread("Enable delete verification", function () {
  const e = waitForAnyEnableDeleted();
  block(matchAddEnable(e.id, ANY), function () {
    verifyEnableDoesNotExist(e.id);
  });
});

bthread("Enforceadmin create verification", function () {
  const e = waitForAnyEnforceadminAdded();
  block(matchDeleteEnforceadmin(e.id, ANY), function () {
    verifyEnforceadminExists(e.id);
  });
});

bthread("Enforceadmin update verification", function () {
  const e = waitForAnyEnforceadminUpdated();
  block(matchDeleteEnforceadmin(e.id, ANY), function () {
    verifyEnforceadminUpdated(e.id);
  });
});

bthread("Enforceadmin delete verification", function () {
  const e = waitForAnyEnforceadminDeleted();
  block(matchAddEnforceadmin(e.id, ANY), function () {
    verifyEnforceadminDoesNotExist(e.id);
  });
});

bthread("Enterpris create verification", function () {
  const e = waitForAnyEnterprisAdded();
  block(matchDeleteEnterpris(e.id, ANY), function () {
    verifyEnterprisExists(e.id);
  });
});

bthread("Enterpris update verification", function () {
  const e = waitForAnyEnterprisUpdated();
  block(matchDeleteEnterpris(e.id, ANY), function () {
    verifyEnterprisUpdated(e.id);
  });
});

bthread("Enterpris delete verification", function () {
  const e = waitForAnyEnterprisDeleted();
  block(matchAddEnterpris(e.id, ANY), function () {
    verifyEnterprisDoesNotExist(e.id);
  });
});

bthread("Environment create verification", function () {
  const e = waitForAnyEnvironmentAdded();
  block(matchDeleteEnvironment(e.id, ANY), function () {
    verifyEnvironmentExists(e.id);
  });
});

bthread("Environment update verification", function () {
  const e = waitForAnyEnvironmentUpdated();
  block(matchDeleteEnvironment(e.id, ANY), function () {
    verifyEnvironmentUpdated(e.id);
  });
});

bthread("Environment delete verification", function () {
  const e = waitForAnyEnvironmentDeleted();
  block(matchAddEnvironment(e.id, ANY), function () {
    verifyEnvironmentDoesNotExist(e.id);
  });
});

bthread("Error create verification", function () {
  const e = waitForAnyErrorAdded();
  block(matchDeleteError(e.id, ANY), function () {
    verifyErrorExists(e.id);
  });
});

bthread("Error update verification", function () {
  const e = waitForAnyErrorUpdated();
  block(matchDeleteError(e.id, ANY), function () {
    verifyErrorUpdated(e.id);
  });
});

bthread("Error delete verification", function () {
  const e = waitForAnyErrorDeleted();
  block(matchAddError(e.id, ANY), function () {
    verifyErrorDoesNotExist(e.id);
  });
});

bthread("Event create verification", function () {
  const e = waitForAnyEventAdded();
  block(matchDeleteEvent(e.id, ANY), function () {
    verifyEventExists(e.id);
  });
});

bthread("Event update verification", function () {
  const e = waitForAnyEventUpdated();
  block(matchDeleteEvent(e.id, ANY), function () {
    verifyEventUpdated(e.id);
  });
});

bthread("Event delete verification", function () {
  const e = waitForAnyEventDeleted();
  block(matchAddEvent(e.id, ANY), function () {
    verifyEventDoesNotExist(e.id);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  block(matchDeleteExport(e.id, ANY), function () {
    verifyExportExists(e.id);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  block(matchDeleteExport(e.id, ANY), function () {
    verifyExportUpdated(e.id);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  block(matchAddExport(e.id, ANY), function () {
    verifyExportDoesNotExist(e.id);
  });
});

bthread("Failedinvitation create verification", function () {
  const e = waitForAnyFailedinvitationAdded();
  block(matchDeleteFailedinvitation(e.id, ANY), function () {
    verifyFailedinvitationExists(e.id);
  });
});

bthread("Failedinvitation update verification", function () {
  const e = waitForAnyFailedinvitationUpdated();
  block(matchDeleteFailedinvitation(e.id, ANY), function () {
    verifyFailedinvitationUpdated(e.id);
  });
});

bthread("Failedinvitation delete verification", function () {
  const e = waitForAnyFailedinvitationDeleted();
  block(matchAddFailedinvitation(e.id, ANY), function () {
    verifyFailedinvitationDoesNotExist(e.id);
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

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  block(matchDeleteField(e.id, ANY), function () {
    verifyFieldExists(e.id);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  block(matchDeleteField(e.id, ANY), function () {
    verifyFieldUpdated(e.id);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  block(matchAddField(e.id, ANY), function () {
    verifyFieldDoesNotExist(e.id);
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

bthread("Forcecancel create verification", function () {
  const e = waitForAnyForcecancelAdded();
  block(matchDeleteForcecancel(e.id, ANY), function () {
    verifyForcecancelExists(e.id);
  });
});

bthread("Forcecancel update verification", function () {
  const e = waitForAnyForcecancelUpdated();
  block(matchDeleteForcecancel(e.id, ANY), function () {
    verifyForcecancelUpdated(e.id);
  });
});

bthread("Forcecancel delete verification", function () {
  const e = waitForAnyForcecancelDeleted();
  block(matchAddForcecancel(e.id, ANY), function () {
    verifyForcecancelDoesNotExist(e.id);
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

bthread("Forkprcontributorapproval create verification", function () {
  const e = waitForAnyForkprcontributorapprovalAdded();
  block(matchDeleteForkprcontributorapproval(e.id, ANY), function () {
    verifyForkprcontributorapprovalExists(e.id);
  });
});

bthread("Forkprcontributorapproval update verification", function () {
  const e = waitForAnyForkprcontributorapprovalUpdated();
  block(matchDeleteForkprcontributorapproval(e.id, ANY), function () {
    verifyForkprcontributorapprovalUpdated(e.id);
  });
});

bthread("Forkprcontributorapproval delete verification", function () {
  const e = waitForAnyForkprcontributorapprovalDeleted();
  block(matchAddForkprcontributorapproval(e.id, ANY), function () {
    verifyForkprcontributorapprovalDoesNotExist(e.id);
  });
});

bthread("Forkprworkflowsprivaterepo create verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoAdded();
  block(matchDeleteForkprworkflowsprivaterepo(e.id, ANY), function () {
    verifyForkprworkflowsprivaterepoExists(e.id);
  });
});

bthread("Forkprworkflowsprivaterepo update verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoUpdated();
  block(matchDeleteForkprworkflowsprivaterepo(e.id, ANY), function () {
    verifyForkprworkflowsprivaterepoUpdated(e.id);
  });
});

bthread("Forkprworkflowsprivaterepo delete verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoDeleted();
  block(matchAddForkprworkflowsprivaterepo(e.id, ANY), function () {
    verifyForkprworkflowsprivaterepoDoesNotExist(e.id);
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

bthread("Generatejitconfig create verification", function () {
  const e = waitForAnyGeneratejitconfigAdded();
  block(matchDeleteGeneratejitconfig(e.id, ANY), function () {
    verifyGeneratejitconfigExists(e.id);
  });
});

bthread("Generatejitconfig update verification", function () {
  const e = waitForAnyGeneratejitconfigUpdated();
  block(matchDeleteGeneratejitconfig(e.id, ANY), function () {
    verifyGeneratejitconfigUpdated(e.id);
  });
});

bthread("Generatejitconfig delete verification", function () {
  const e = waitForAnyGeneratejitconfigDeleted();
  block(matchAddGeneratejitconfig(e.id, ANY), function () {
    verifyGeneratejitconfigDoesNotExist(e.id);
  });
});

bthread("Generatenote create verification", function () {
  const e = waitForAnyGeneratenoteAdded();
  block(matchDeleteGeneratenote(e.id, ANY), function () {
    verifyGeneratenoteExists(e.id);
  });
});

bthread("Generatenote update verification", function () {
  const e = waitForAnyGeneratenoteUpdated();
  block(matchDeleteGeneratenote(e.id, ANY), function () {
    verifyGeneratenoteUpdated(e.id);
  });
});

bthread("Generatenote delete verification", function () {
  const e = waitForAnyGeneratenoteDeleted();
  block(matchAddGeneratenote(e.id, ANY), function () {
    verifyGeneratenoteDoesNotExist(e.id);
  });
});

bthread("Gist create verification", function () {
  const e = waitForAnyGistAdded();
  block(matchDeleteGist(e.id, ANY), function () {
    verifyGistExists(e.id);
  });
});

bthread("Gist update verification", function () {
  const e = waitForAnyGistUpdated();
  block(matchDeleteGist(e.id, ANY), function () {
    verifyGistUpdated(e.id);
  });
});

bthread("Gist delete verification", function () {
  const e = waitForAnyGistDeleted();
  block(matchAddGist(e.id, ANY), function () {
    verifyGistDoesNotExist(e.id);
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

bthread("Githubowned create verification", function () {
  const e = waitForAnyGithubownedAdded();
  block(matchDeleteGithubowned(e.id, ANY), function () {
    verifyGithubownedExists(e.id);
  });
});

bthread("Githubowned update verification", function () {
  const e = waitForAnyGithubownedUpdated();
  block(matchDeleteGithubowned(e.id, ANY), function () {
    verifyGithubownedUpdated(e.id);
  });
});

bthread("Githubowned delete verification", function () {
  const e = waitForAnyGithubownedDeleted();
  block(matchAddGithubowned(e.id, ANY), function () {
    verifyGithubownedDoesNotExist(e.id);
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

bthread("Grade create verification", function () {
  const e = waitForAnyGradeAdded();
  block(matchDeleteGrade(e.id, ANY), function () {
    verifyGradeExists(e.id);
  });
});

bthread("Grade update verification", function () {
  const e = waitForAnyGradeUpdated();
  block(matchDeleteGrade(e.id, ANY), function () {
    verifyGradeUpdated(e.id);
  });
});

bthread("Grade delete verification", function () {
  const e = waitForAnyGradeDeleted();
  block(matchAddGrade(e.id, ANY), function () {
    verifyGradeDoesNotExist(e.id);
  });
});

bthread("Grant create verification", function () {
  const e = waitForAnyGrantAdded();
  block(matchDeleteGrant(e.id, ANY), function () {
    verifyGrantExists(e.id);
  });
});

bthread("Grant update verification", function () {
  const e = waitForAnyGrantUpdated();
  block(matchDeleteGrant(e.id, ANY), function () {
    verifyGrantUpdated(e.id);
  });
});

bthread("Grant delete verification", function () {
  const e = waitForAnyGrantDeleted();
  block(matchAddGrant(e.id, ANY), function () {
    verifyGrantDoesNotExist(e.id);
  });
});

bthread("Health create verification", function () {
  const e = waitForAnyHealthAdded();
  block(matchDeleteHealth(e.id, ANY), function () {
    verifyHealthExists(e.id);
  });
});

bthread("Health update verification", function () {
  const e = waitForAnyHealthUpdated();
  block(matchDeleteHealth(e.id, ANY), function () {
    verifyHealthUpdated(e.id);
  });
});

bthread("Health delete verification", function () {
  const e = waitForAnyHealthDeleted();
  block(matchAddHealth(e.id, ANY), function () {
    verifyHealthDoesNotExist(e.id);
  });
});

bthread("History create verification", function () {
  const e = waitForAnyHistoryAdded();
  block(matchDeleteHistory(e.id, ANY), function () {
    verifyHistoryExists(e.id);
  });
});

bthread("History update verification", function () {
  const e = waitForAnyHistoryUpdated();
  block(matchDeleteHistory(e.id, ANY), function () {
    verifyHistoryUpdated(e.id);
  });
});

bthread("History delete verification", function () {
  const e = waitForAnyHistoryDeleted();
  block(matchAddHistory(e.id, ANY), function () {
    verifyHistoryDoesNotExist(e.id);
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

bthread("Hostedrunner create verification", function () {
  const e = waitForAnyHostedrunnerAdded();
  block(matchDeleteHostedrunner(e.id, ANY), function () {
    verifyHostedrunnerExists(e.id);
  });
});

bthread("Hostedrunner update verification", function () {
  const e = waitForAnyHostedrunnerUpdated();
  block(matchDeleteHostedrunner(e.id, ANY), function () {
    verifyHostedrunnerUpdated(e.id);
  });
});

bthread("Hostedrunner delete verification", function () {
  const e = waitForAnyHostedrunnerDeleted();
  block(matchAddHostedrunner(e.id, ANY), function () {
    verifyHostedrunnerDoesNotExist(e.id);
  });
});

bthread("Hovercard create verification", function () {
  const e = waitForAnyHovercardAdded();
  block(matchDeleteHovercard(e.id, ANY), function () {
    verifyHovercardExists(e.id);
  });
});

bthread("Hovercard update verification", function () {
  const e = waitForAnyHovercardUpdated();
  block(matchDeleteHovercard(e.id, ANY), function () {
    verifyHovercardUpdated(e.id);
  });
});

bthread("Hovercard delete verification", function () {
  const e = waitForAnyHovercardDeleted();
  block(matchAddHovercard(e.id, ANY), function () {
    verifyHovercardDoesNotExist(e.id);
  });
});

bthread("Image create verification", function () {
  const e = waitForAnyImageAdded();
  block(matchDeleteImage(e.id, ANY), function () {
    verifyImageExists(e.id);
  });
});

bthread("Image update verification", function () {
  const e = waitForAnyImageUpdated();
  block(matchDeleteImage(e.id, ANY), function () {
    verifyImageUpdated(e.id);
  });
});

bthread("Image delete verification", function () {
  const e = waitForAnyImageDeleted();
  block(matchAddImage(e.id, ANY), function () {
    verifyImageDoesNotExist(e.id);
  });
});

bthread("Immutablereleas create verification", function () {
  const e = waitForAnyImmutablereleasAdded();
  block(matchDeleteImmutablereleas(e.id, ANY), function () {
    verifyImmutablereleasExists(e.id);
  });
});

bthread("Immutablereleas update verification", function () {
  const e = waitForAnyImmutablereleasUpdated();
  block(matchDeleteImmutablereleas(e.id, ANY), function () {
    verifyImmutablereleasUpdated(e.id);
  });
});

bthread("Immutablereleas delete verification", function () {
  const e = waitForAnyImmutablereleasDeleted();
  block(matchAddImmutablereleas(e.id, ANY), function () {
    verifyImmutablereleasDoesNotExist(e.id);
  });
});

bthread("Import create verification", function () {
  const e = waitForAnyImportAdded();
  block(matchDeleteImport(e.id, ANY), function () {
    verifyImportExists(e.id);
  });
});

bthread("Import update verification", function () {
  const e = waitForAnyImportUpdated();
  block(matchDeleteImport(e.id, ANY), function () {
    verifyImportUpdated(e.id);
  });
});

bthread("Import delete verification", function () {
  const e = waitForAnyImportDeleted();
  block(matchAddImport(e.id, ANY), function () {
    verifyImportDoesNotExist(e.id);
  });
});

bthread("Insight create verification", function () {
  const e = waitForAnyInsightAdded();
  block(matchDeleteInsight(e.id, ANY), function () {
    verifyInsightExists(e.id);
  });
});

bthread("Insight update verification", function () {
  const e = waitForAnyInsightUpdated();
  block(matchDeleteInsight(e.id, ANY), function () {
    verifyInsightUpdated(e.id);
  });
});

bthread("Insight delete verification", function () {
  const e = waitForAnyInsightDeleted();
  block(matchAddInsight(e.id, ANY), function () {
    verifyInsightDoesNotExist(e.id);
  });
});

bthread("Installation create verification", function () {
  const e = waitForAnyInstallationAdded();
  block(matchDeleteInstallation(e.id, ANY), function () {
    verifyInstallationExists(e.id);
  });
});

bthread("Installation update verification", function () {
  const e = waitForAnyInstallationUpdated();
  block(matchDeleteInstallation(e.id, ANY), function () {
    verifyInstallationUpdated(e.id);
  });
});

bthread("Installation delete verification", function () {
  const e = waitForAnyInstallationDeleted();
  block(matchAddInstallation(e.id, ANY), function () {
    verifyInstallationDoesNotExist(e.id);
  });
});

bthread("Installationrequest create verification", function () {
  const e = waitForAnyInstallationrequestAdded();
  block(matchDeleteInstallationrequest(e.id, ANY), function () {
    verifyInstallationrequestExists(e.id);
  });
});

bthread("Installationrequest update verification", function () {
  const e = waitForAnyInstallationrequestUpdated();
  block(matchDeleteInstallationrequest(e.id, ANY), function () {
    verifyInstallationrequestUpdated(e.id);
  });
});

bthread("Installationrequest delete verification", function () {
  const e = waitForAnyInstallationrequestDeleted();
  block(matchAddInstallationrequest(e.id, ANY), function () {
    verifyInstallationrequestDoesNotExist(e.id);
  });
});

bthread("Instance create verification", function () {
  const e = waitForAnyInstanceAdded();
  block(matchDeleteInstance(e.id, ANY), function () {
    verifyInstanceExists(e.id);
  });
});

bthread("Instance update verification", function () {
  const e = waitForAnyInstanceUpdated();
  block(matchDeleteInstance(e.id, ANY), function () {
    verifyInstanceUpdated(e.id);
  });
});

bthread("Instance delete verification", function () {
  const e = waitForAnyInstanceDeleted();
  block(matchAddInstance(e.id, ANY), function () {
    verifyInstanceDoesNotExist(e.id);
  });
});

bthread("Interactionlimit create verification", function () {
  const e = waitForAnyInteractionlimitAdded();
  block(matchDeleteInteractionlimit(e.id, ANY), function () {
    verifyInteractionlimitExists(e.id);
  });
});

bthread("Interactionlimit update verification", function () {
  const e = waitForAnyInteractionlimitUpdated();
  block(matchDeleteInteractionlimit(e.id, ANY), function () {
    verifyInteractionlimitUpdated(e.id);
  });
});

bthread("Interactionlimit delete verification", function () {
  const e = waitForAnyInteractionlimitDeleted();
  block(matchAddInteractionlimit(e.id, ANY), function () {
    verifyInteractionlimitDoesNotExist(e.id);
  });
});

bthread("Invitation create verification", function () {
  const e = waitForAnyInvitationAdded();
  block(matchDeleteInvitation(e.id, ANY), function () {
    verifyInvitationExists(e.id);
  });
});

bthread("Invitation update verification", function () {
  const e = waitForAnyInvitationUpdated();
  block(matchDeleteInvitation(e.id, ANY), function () {
    verifyInvitationUpdated(e.id);
  });
});

bthread("Invitation delete verification", function () {
  const e = waitForAnyInvitationDeleted();
  block(matchAddInvitation(e.id, ANY), function () {
    verifyInvitationDoesNotExist(e.id);
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

bthread("Issuetype create verification", function () {
  const e = waitForAnyIssuetypeAdded();
  block(matchDeleteIssuetype(e.id, ANY), function () {
    verifyIssuetypeExists(e.id);
  });
});

bthread("Issuetype update verification", function () {
  const e = waitForAnyIssuetypeUpdated();
  block(matchDeleteIssuetype(e.id, ANY), function () {
    verifyIssuetypeUpdated(e.id);
  });
});

bthread("Issuetype delete verification", function () {
  const e = waitForAnyIssuetypeDeleted();
  block(matchAddIssuetype(e.id, ANY), function () {
    verifyIssuetypeDoesNotExist(e.id);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  block(matchDeleteItem(e.id, ANY), function () {
    verifyItemExists(e.id);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  block(matchDeleteItem(e.id, ANY), function () {
    verifyItemUpdated(e.id);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  block(matchAddItem(e.id, ANY), function () {
    verifyItemDoesNotExist(e.id);
  });
});

bthread("Job create verification", function () {
  const e = waitForAnyJobAdded();
  block(matchDeleteJob(e.id, ANY), function () {
    verifyJobExists(e.id);
  });
});

bthread("Job update verification", function () {
  const e = waitForAnyJobUpdated();
  block(matchDeleteJob(e.id, ANY), function () {
    verifyJobUpdated(e.id);
  });
});

bthread("Job delete verification", function () {
  const e = waitForAnyJobDeleted();
  block(matchAddJob(e.id, ANY), function () {
    verifyJobDoesNotExist(e.id);
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

bthread("Largefile create verification", function () {
  const e = waitForAnyLargefileAdded();
  block(matchDeleteLargefile(e.id, ANY), function () {
    verifyLargefileExists(e.id);
  });
});

bthread("Largefile update verification", function () {
  const e = waitForAnyLargefileUpdated();
  block(matchDeleteLargefile(e.id, ANY), function () {
    verifyLargefileUpdated(e.id);
  });
});

bthread("Largefile delete verification", function () {
  const e = waitForAnyLargefileDeleted();
  block(matchAddLargefile(e.id, ANY), function () {
    verifyLargefileDoesNotExist(e.id);
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

bthread("Lf create verification", function () {
  const e = waitForAnyLfAdded();
  block(matchDeleteLf(e.id, ANY), function () {
    verifyLfExists(e.id);
  });
});

bthread("Lf update verification", function () {
  const e = waitForAnyLfUpdated();
  block(matchDeleteLf(e.id, ANY), function () {
    verifyLfUpdated(e.id);
  });
});

bthread("Lf delete verification", function () {
  const e = waitForAnyLfDeleted();
  block(matchAddLf(e.id, ANY), function () {
    verifyLfDoesNotExist(e.id);
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

bthread("License create verification", function () {
  const e = waitForAnyLicenseAdded();
  block(matchDeleteLicense(e.id, ANY), function () {
    verifyLicenseExists(e.id);
  });
});

bthread("License update verification", function () {
  const e = waitForAnyLicenseUpdated();
  block(matchDeleteLicense(e.id, ANY), function () {
    verifyLicenseUpdated(e.id);
  });
});

bthread("License delete verification", function () {
  const e = waitForAnyLicenseDeleted();
  block(matchAddLicense(e.id, ANY), function () {
    verifyLicenseDoesNotExist(e.id);
  });
});

bthread("Limit create verification", function () {
  const e = waitForAnyLimitAdded();
  block(matchDeleteLimit(e.id, ANY), function () {
    verifyLimitExists(e.id);
  });
});

bthread("Limit update verification", function () {
  const e = waitForAnyLimitUpdated();
  block(matchDeleteLimit(e.id, ANY), function () {
    verifyLimitUpdated(e.id);
  });
});

bthread("Limit delete verification", function () {
  const e = waitForAnyLimitDeleted();
  block(matchAddLimit(e.id, ANY), function () {
    verifyLimitDoesNotExist(e.id);
  });
});

bthread("Location create verification", function () {
  const e = waitForAnyLocationAdded();
  block(matchDeleteLocation(e.id, ANY), function () {
    verifyLocationExists(e.id);
  });
});

bthread("Location update verification", function () {
  const e = waitForAnyLocationUpdated();
  block(matchDeleteLocation(e.id, ANY), function () {
    verifyLocationUpdated(e.id);
  });
});

bthread("Location delete verification", function () {
  const e = waitForAnyLocationDeleted();
  block(matchAddLocation(e.id, ANY), function () {
    verifyLocationDoesNotExist(e.id);
  });
});

bthread("Lock create verification", function () {
  const e = waitForAnyLockAdded();
  block(matchDeleteLock(e.id, ANY), function () {
    verifyLockExists(e.id);
  });
});

bthread("Lock update verification", function () {
  const e = waitForAnyLockUpdated();
  block(matchDeleteLock(e.id, ANY), function () {
    verifyLockUpdated(e.id);
  });
});

bthread("Lock delete verification", function () {
  const e = waitForAnyLockDeleted();
  block(matchAddLock(e.id, ANY), function () {
    verifyLockDoesNotExist(e.id);
  });
});

bthread("Log create verification", function () {
  const e = waitForAnyLogAdded();
  block(matchDeleteLog(e.id, ANY), function () {
    verifyLogExists(e.id);
  });
});

bthread("Log update verification", function () {
  const e = waitForAnyLogUpdated();
  block(matchDeleteLog(e.id, ANY), function () {
    verifyLogUpdated(e.id);
  });
});

bthread("Log delete verification", function () {
  const e = waitForAnyLogDeleted();
  block(matchAddLog(e.id, ANY), function () {
    verifyLogDoesNotExist(e.id);
  });
});

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  block(matchDeleteMachine(e.id, ANY), function () {
    verifyMachineExists(e.id);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  block(matchDeleteMachine(e.id, ANY), function () {
    verifyMachineUpdated(e.id);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  block(matchAddMachine(e.id, ANY), function () {
    verifyMachineDoesNotExist(e.id);
  });
});

bthread("Machinesize create verification", function () {
  const e = waitForAnyMachinesizeAdded();
  block(matchDeleteMachinesize(e.id, ANY), function () {
    verifyMachinesizeExists(e.id);
  });
});

bthread("Machinesize update verification", function () {
  const e = waitForAnyMachinesizeUpdated();
  block(matchDeleteMachinesize(e.id, ANY), function () {
    verifyMachinesizeUpdated(e.id);
  });
});

bthread("Machinesize delete verification", function () {
  const e = waitForAnyMachinesizeDeleted();
  block(matchAddMachinesize(e.id, ANY), function () {
    verifyMachinesizeDoesNotExist(e.id);
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

bthread("Marketplacelisting create verification", function () {
  const e = waitForAnyMarketplacelistingAdded();
  block(matchDeleteMarketplacelisting(e.id, ANY), function () {
    verifyMarketplacelistingExists(e.id);
  });
});

bthread("Marketplacelisting update verification", function () {
  const e = waitForAnyMarketplacelistingUpdated();
  block(matchDeleteMarketplacelisting(e.id, ANY), function () {
    verifyMarketplacelistingUpdated(e.id);
  });
});

bthread("Marketplacelisting delete verification", function () {
  const e = waitForAnyMarketplacelistingDeleted();
  block(matchAddMarketplacelisting(e.id, ANY), function () {
    verifyMarketplacelistingDoesNotExist(e.id);
  });
});

bthread("Marketplacepurchas create verification", function () {
  const e = waitForAnyMarketplacepurchasAdded();
  block(matchDeleteMarketplacepurchas(e.id, ANY), function () {
    verifyMarketplacepurchasExists(e.id);
  });
});

bthread("Marketplacepurchas update verification", function () {
  const e = waitForAnyMarketplacepurchasUpdated();
  block(matchDeleteMarketplacepurchas(e.id, ANY), function () {
    verifyMarketplacepurchasUpdated(e.id);
  });
});

bthread("Marketplacepurchas delete verification", function () {
  const e = waitForAnyMarketplacepurchasDeleted();
  block(matchAddMarketplacepurchas(e.id, ANY), function () {
    verifyMarketplacepurchasDoesNotExist(e.id);
  });
});

bthread("Matchingref create verification", function () {
  const e = waitForAnyMatchingrefAdded();
  block(matchDeleteMatchingref(e.id, ANY), function () {
    verifyMatchingrefExists(e.id);
  });
});

bthread("Matchingref update verification", function () {
  const e = waitForAnyMatchingrefUpdated();
  block(matchDeleteMatchingref(e.id, ANY), function () {
    verifyMatchingrefUpdated(e.id);
  });
});

bthread("Matchingref delete verification", function () {
  const e = waitForAnyMatchingrefDeleted();
  block(matchAddMatchingref(e.id, ANY), function () {
    verifyMatchingrefDoesNotExist(e.id);
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

bthread("Membership create verification", function () {
  const e = waitForAnyMembershipAdded();
  block(matchDeleteMembership(e.id, ANY), function () {
    verifyMembershipExists(e.id);
  });
});

bthread("Membership update verification", function () {
  const e = waitForAnyMembershipUpdated();
  block(matchDeleteMembership(e.id, ANY), function () {
    verifyMembershipUpdated(e.id);
  });
});

bthread("Membership delete verification", function () {
  const e = waitForAnyMembershipDeleted();
  block(matchAddMembership(e.id, ANY), function () {
    verifyMembershipDoesNotExist(e.id);
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

bthread("Meta create verification", function () {
  const e = waitForAnyMetaAdded();
  block(matchDeleteMeta(e.id, ANY), function () {
    verifyMetaExists(e.id);
  });
});

bthread("Meta update verification", function () {
  const e = waitForAnyMetaUpdated();
  block(matchDeleteMeta(e.id, ANY), function () {
    verifyMetaUpdated(e.id);
  });
});

bthread("Meta delete verification", function () {
  const e = waitForAnyMetaDeleted();
  block(matchAddMeta(e.id, ANY), function () {
    verifyMetaDoesNotExist(e.id);
  });
});

bthread("Metadata create verification", function () {
  const e = waitForAnyMetadataAdded();
  block(matchDeleteMetadata(e.id, ANY), function () {
    verifyMetadataExists(e.id);
  });
});

bthread("Metadata update verification", function () {
  const e = waitForAnyMetadataUpdated();
  block(matchDeleteMetadata(e.id, ANY), function () {
    verifyMetadataUpdated(e.id);
  });
});

bthread("Metadata delete verification", function () {
  const e = waitForAnyMetadataDeleted();
  block(matchAddMetadata(e.id, ANY), function () {
    verifyMetadataDoesNotExist(e.id);
  });
});

bthread("Metric create verification", function () {
  const e = waitForAnyMetricAdded();
  block(matchDeleteMetric(e.id, ANY), function () {
    verifyMetricExists(e.id);
  });
});

bthread("Metric update verification", function () {
  const e = waitForAnyMetricUpdated();
  block(matchDeleteMetric(e.id, ANY), function () {
    verifyMetricUpdated(e.id);
  });
});

bthread("Metric delete verification", function () {
  const e = waitForAnyMetricDeleted();
  block(matchAddMetric(e.id, ANY), function () {
    verifyMetricDoesNotExist(e.id);
  });
});

bthread("Migration create verification", function () {
  const e = waitForAnyMigrationAdded();
  block(matchDeleteMigration(e.id, ANY), function () {
    verifyMigrationExists(e.id);
  });
});

bthread("Migration update verification", function () {
  const e = waitForAnyMigrationUpdated();
  block(matchDeleteMigration(e.id, ANY), function () {
    verifyMigrationUpdated(e.id);
  });
});

bthread("Migration delete verification", function () {
  const e = waitForAnyMigrationDeleted();
  block(matchAddMigration(e.id, ANY), function () {
    verifyMigrationDoesNotExist(e.id);
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

bthread("Move create verification", function () {
  const e = waitForAnyMoveAdded();
  block(matchDeleteMove(e.id, ANY), function () {
    verifyMoveExists(e.id);
  });
});

bthread("Move update verification", function () {
  const e = waitForAnyMoveUpdated();
  block(matchDeleteMove(e.id, ANY), function () {
    verifyMoveUpdated(e.id);
  });
});

bthread("Move delete verification", function () {
  const e = waitForAnyMoveDeleted();
  block(matchAddMove(e.id, ANY), function () {
    verifyMoveDoesNotExist(e.id);
  });
});

bthread("Network create verification", function () {
  const e = waitForAnyNetworkAdded();
  block(matchDeleteNetwork(e.id, ANY), function () {
    verifyNetworkExists(e.id);
  });
});

bthread("Network update verification", function () {
  const e = waitForAnyNetworkUpdated();
  block(matchDeleteNetwork(e.id, ANY), function () {
    verifyNetworkUpdated(e.id);
  });
});

bthread("Network delete verification", function () {
  const e = waitForAnyNetworkDeleted();
  block(matchAddNetwork(e.id, ANY), function () {
    verifyNetworkDoesNotExist(e.id);
  });
});

bthread("Networkconfiguration create verification", function () {
  const e = waitForAnyNetworkconfigurationAdded();
  block(matchDeleteNetworkconfiguration(e.id, ANY), function () {
    verifyNetworkconfigurationExists(e.id);
  });
});

bthread("Networkconfiguration update verification", function () {
  const e = waitForAnyNetworkconfigurationUpdated();
  block(matchDeleteNetworkconfiguration(e.id, ANY), function () {
    verifyNetworkconfigurationUpdated(e.id);
  });
});

bthread("Networkconfiguration delete verification", function () {
  const e = waitForAnyNetworkconfigurationDeleted();
  block(matchAddNetworkconfiguration(e.id, ANY), function () {
    verifyNetworkconfigurationDoesNotExist(e.id);
  });
});

bthread("Networksetting create verification", function () {
  const e = waitForAnyNetworksettingAdded();
  block(matchDeleteNetworksetting(e.id, ANY), function () {
    verifyNetworksettingExists(e.id);
  });
});

bthread("Networksetting update verification", function () {
  const e = waitForAnyNetworksettingUpdated();
  block(matchDeleteNetworksetting(e.id, ANY), function () {
    verifyNetworksettingUpdated(e.id);
  });
});

bthread("Networksetting delete verification", function () {
  const e = waitForAnyNetworksettingDeleted();
  block(matchAddNetworksetting(e.id, ANY), function () {
    verifyNetworksettingDoesNotExist(e.id);
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

bthread("Octocat create verification", function () {
  const e = waitForAnyOctocatAdded();
  block(matchDeleteOctocat(e.id, ANY), function () {
    verifyOctocatExists(e.id);
  });
});

bthread("Octocat update verification", function () {
  const e = waitForAnyOctocatUpdated();
  block(matchDeleteOctocat(e.id, ANY), function () {
    verifyOctocatUpdated(e.id);
  });
});

bthread("Octocat delete verification", function () {
  const e = waitForAnyOctocatDeleted();
  block(matchAddOctocat(e.id, ANY), function () {
    verifyOctocatDoesNotExist(e.id);
  });
});

bthread("Oidc create verification", function () {
  const e = waitForAnyOidcAdded();
  block(matchDeleteOidc(e.id, ANY), function () {
    verifyOidcExists(e.id);
  });
});

bthread("Oidc update verification", function () {
  const e = waitForAnyOidcUpdated();
  block(matchDeleteOidc(e.id, ANY), function () {
    verifyOidcUpdated(e.id);
  });
});

bthread("Oidc delete verification", function () {
  const e = waitForAnyOidcDeleted();
  block(matchAddOidc(e.id, ANY), function () {
    verifyOidcDoesNotExist(e.id);
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

bthread("Organization create verification", function () {
  const e = waitForAnyOrganizationAdded();
  block(matchDeleteOrganization(e.id, ANY), function () {
    verifyOrganizationExists(e.id);
  });
});

bthread("Organization update verification", function () {
  const e = waitForAnyOrganizationUpdated();
  block(matchDeleteOrganization(e.id, ANY), function () {
    verifyOrganizationUpdated(e.id);
  });
});

bthread("Organization delete verification", function () {
  const e = waitForAnyOrganizationDeleted();
  block(matchAddOrganization(e.id, ANY), function () {
    verifyOrganizationDoesNotExist(e.id);
  });
});

bthread("Organizationrole create verification", function () {
  const e = waitForAnyOrganizationroleAdded();
  block(matchDeleteOrganizationrole(e.id, ANY), function () {
    verifyOrganizationroleExists(e.id);
  });
});

bthread("Organizationrole update verification", function () {
  const e = waitForAnyOrganizationroleUpdated();
  block(matchDeleteOrganizationrole(e.id, ANY), function () {
    verifyOrganizationroleUpdated(e.id);
  });
});

bthread("Organizationrole delete verification", function () {
  const e = waitForAnyOrganizationroleDeleted();
  block(matchAddOrganizationrole(e.id, ANY), function () {
    verifyOrganizationroleDoesNotExist(e.id);
  });
});

bthread("Organizationsecret create verification", function () {
  const e = waitForAnyOrganizationsecretAdded();
  block(matchDeleteOrganizationsecret(e.id, ANY), function () {
    verifyOrganizationsecretExists(e.id);
  });
});

bthread("Organizationsecret update verification", function () {
  const e = waitForAnyOrganizationsecretUpdated();
  block(matchDeleteOrganizationsecret(e.id, ANY), function () {
    verifyOrganizationsecretUpdated(e.id);
  });
});

bthread("Organizationsecret delete verification", function () {
  const e = waitForAnyOrganizationsecretDeleted();
  block(matchAddOrganizationsecret(e.id, ANY), function () {
    verifyOrganizationsecretDoesNotExist(e.id);
  });
});

bthread("Organizationvariable create verification", function () {
  const e = waitForAnyOrganizationvariableAdded();
  block(matchDeleteOrganizationvariable(e.id, ANY), function () {
    verifyOrganizationvariableExists(e.id);
  });
});

bthread("Organizationvariable update verification", function () {
  const e = waitForAnyOrganizationvariableUpdated();
  block(matchDeleteOrganizationvariable(e.id, ANY), function () {
    verifyOrganizationvariableUpdated(e.id);
  });
});

bthread("Organizationvariable delete verification", function () {
  const e = waitForAnyOrganizationvariableDeleted();
  block(matchAddOrganizationvariable(e.id, ANY), function () {
    verifyOrganizationvariableDoesNotExist(e.id);
  });
});

bthread("Outsidecollaborator create verification", function () {
  const e = waitForAnyOutsidecollaboratorAdded();
  block(matchDeleteOutsidecollaborator(e.id, ANY), function () {
    verifyOutsidecollaboratorExists(e.id);
  });
});

bthread("Outsidecollaborator update verification", function () {
  const e = waitForAnyOutsidecollaboratorUpdated();
  block(matchDeleteOutsidecollaborator(e.id, ANY), function () {
    verifyOutsidecollaboratorUpdated(e.id);
  });
});

bthread("Outsidecollaborator delete verification", function () {
  const e = waitForAnyOutsidecollaboratorDeleted();
  block(matchAddOutsidecollaborator(e.id, ANY), function () {
    verifyOutsidecollaboratorDoesNotExist(e.id);
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

bthread("Parent create verification", function () {
  const e = waitForAnyParentAdded();
  block(matchDeleteParent(e.id, ANY), function () {
    verifyParentExists(e.id);
  });
});

bthread("Parent update verification", function () {
  const e = waitForAnyParentUpdated();
  block(matchDeleteParent(e.id, ANY), function () {
    verifyParentUpdated(e.id);
  });
});

bthread("Parent delete verification", function () {
  const e = waitForAnyParentDeleted();
  block(matchAddParent(e.id, ANY), function () {
    verifyParentDoesNotExist(e.id);
  });
});

bthread("Participation create verification", function () {
  const e = waitForAnyParticipationAdded();
  block(matchDeleteParticipation(e.id, ANY), function () {
    verifyParticipationExists(e.id);
  });
});

bthread("Participation update verification", function () {
  const e = waitForAnyParticipationUpdated();
  block(matchDeleteParticipation(e.id, ANY), function () {
    verifyParticipationUpdated(e.id);
  });
});

bthread("Participation delete verification", function () {
  const e = waitForAnyParticipationDeleted();
  block(matchAddParticipation(e.id, ANY), function () {
    verifyParticipationDoesNotExist(e.id);
  });
});

bthread("Partner create verification", function () {
  const e = waitForAnyPartnerAdded();
  block(matchDeletePartner(e.id, ANY), function () {
    verifyPartnerExists(e.id);
  });
});

bthread("Partner update verification", function () {
  const e = waitForAnyPartnerUpdated();
  block(matchDeletePartner(e.id, ANY), function () {
    verifyPartnerUpdated(e.id);
  });
});

bthread("Partner delete verification", function () {
  const e = waitForAnyPartnerDeleted();
  block(matchAddPartner(e.id, ANY), function () {
    verifyPartnerDoesNotExist(e.id);
  });
});

bthread("Path create verification", function () {
  const e = waitForAnyPathAdded();
  block(matchDeletePath(e.id, ANY), function () {
    verifyPathExists(e.id);
  });
});

bthread("Path update verification", function () {
  const e = waitForAnyPathUpdated();
  block(matchDeletePath(e.id, ANY), function () {
    verifyPathUpdated(e.id);
  });
});

bthread("Path delete verification", function () {
  const e = waitForAnyPathDeleted();
  block(matchAddPath(e.id, ANY), function () {
    verifyPathDoesNotExist(e.id);
  });
});

bthread("Patternconfiguration create verification", function () {
  const e = waitForAnyPatternconfigurationAdded();
  block(matchDeletePatternconfiguration(e.id, ANY), function () {
    verifyPatternconfigurationExists(e.id);
  });
});

bthread("Patternconfiguration update verification", function () {
  const e = waitForAnyPatternconfigurationUpdated();
  block(matchDeletePatternconfiguration(e.id, ANY), function () {
    verifyPatternconfigurationUpdated(e.id);
  });
});

bthread("Patternconfiguration delete verification", function () {
  const e = waitForAnyPatternconfigurationDeleted();
  block(matchAddPatternconfiguration(e.id, ANY), function () {
    verifyPatternconfigurationDoesNotExist(e.id);
  });
});

bthread("Pendingdeployment create verification", function () {
  const e = waitForAnyPendingdeploymentAdded();
  block(matchDeletePendingdeployment(e.id, ANY), function () {
    verifyPendingdeploymentExists(e.id);
  });
});

bthread("Pendingdeployment update verification", function () {
  const e = waitForAnyPendingdeploymentUpdated();
  block(matchDeletePendingdeployment(e.id, ANY), function () {
    verifyPendingdeploymentUpdated(e.id);
  });
});

bthread("Pendingdeployment delete verification", function () {
  const e = waitForAnyPendingdeploymentDeleted();
  block(matchAddPendingdeployment(e.id, ANY), function () {
    verifyPendingdeploymentDoesNotExist(e.id);
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

bthread("Permissionscheck create verification", function () {
  const e = waitForAnyPermissionscheckAdded();
  block(matchDeletePermissionscheck(e.id, ANY), function () {
    verifyPermissionscheckExists(e.id);
  });
});

bthread("Permissionscheck update verification", function () {
  const e = waitForAnyPermissionscheckUpdated();
  block(matchDeletePermissionscheck(e.id, ANY), function () {
    verifyPermissionscheckUpdated(e.id);
  });
});

bthread("Permissionscheck delete verification", function () {
  const e = waitForAnyPermissionscheckDeleted();
  block(matchAddPermissionscheck(e.id, ANY), function () {
    verifyPermissionscheckDoesNotExist(e.id);
  });
});

bthread("Personalaccesstoken create verification", function () {
  const e = waitForAnyPersonalaccesstokenAdded();
  block(matchDeletePersonalaccesstoken(e.id, ANY), function () {
    verifyPersonalaccesstokenExists(e.id);
  });
});

bthread("Personalaccesstoken update verification", function () {
  const e = waitForAnyPersonalaccesstokenUpdated();
  block(matchDeletePersonalaccesstoken(e.id, ANY), function () {
    verifyPersonalaccesstokenUpdated(e.id);
  });
});

bthread("Personalaccesstoken delete verification", function () {
  const e = waitForAnyPersonalaccesstokenDeleted();
  block(matchAddPersonalaccesstoken(e.id, ANY), function () {
    verifyPersonalaccesstokenDoesNotExist(e.id);
  });
});

bthread("Personalaccesstokenrequest create verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestAdded();
  block(matchDeletePersonalaccesstokenrequest(e.id, ANY), function () {
    verifyPersonalaccesstokenrequestExists(e.id);
  });
});

bthread("Personalaccesstokenrequest update verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestUpdated();
  block(matchDeletePersonalaccesstokenrequest(e.id, ANY), function () {
    verifyPersonalaccesstokenrequestUpdated(e.id);
  });
});

bthread("Personalaccesstokenrequest delete verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestDeleted();
  block(matchAddPersonalaccesstokenrequest(e.id, ANY), function () {
    verifyPersonalaccesstokenrequestDoesNotExist(e.id);
  });
});

bthread("Ping create verification", function () {
  const e = waitForAnyPingAdded();
  block(matchDeletePing(e.id, ANY), function () {
    verifyPingExists(e.id);
  });
});

bthread("Ping update verification", function () {
  const e = waitForAnyPingUpdated();
  block(matchDeletePing(e.id, ANY), function () {
    verifyPingUpdated(e.id);
  });
});

bthread("Ping delete verification", function () {
  const e = waitForAnyPingDeleted();
  block(matchAddPing(e.id, ANY), function () {
    verifyPingDoesNotExist(e.id);
  });
});

bthread("Plan create verification", function () {
  const e = waitForAnyPlanAdded();
  block(matchDeletePlan(e.id, ANY), function () {
    verifyPlanExists(e.id);
  });
});

bthread("Plan update verification", function () {
  const e = waitForAnyPlanUpdated();
  block(matchDeletePlan(e.id, ANY), function () {
    verifyPlanUpdated(e.id);
  });
});

bthread("Plan delete verification", function () {
  const e = waitForAnyPlanDeleted();
  block(matchAddPlan(e.id, ANY), function () {
    verifyPlanDoesNotExist(e.id);
  });
});

bthread("Platform create verification", function () {
  const e = waitForAnyPlatformAdded();
  block(matchDeletePlatform(e.id, ANY), function () {
    verifyPlatformExists(e.id);
  });
});

bthread("Platform update verification", function () {
  const e = waitForAnyPlatformUpdated();
  block(matchDeletePlatform(e.id, ANY), function () {
    verifyPlatformUpdated(e.id);
  });
});

bthread("Platform delete verification", function () {
  const e = waitForAnyPlatformDeleted();
  block(matchAddPlatform(e.id, ANY), function () {
    verifyPlatformDoesNotExist(e.id);
  });
});

bthread("Popular create verification", function () {
  const e = waitForAnyPopularAdded();
  block(matchDeletePopular(e.id, ANY), function () {
    verifyPopularExists(e.id);
  });
});

bthread("Popular update verification", function () {
  const e = waitForAnyPopularUpdated();
  block(matchDeletePopular(e.id, ANY), function () {
    verifyPopularUpdated(e.id);
  });
});

bthread("Popular delete verification", function () {
  const e = waitForAnyPopularDeleted();
  block(matchAddPopular(e.id, ANY), function () {
    verifyPopularDoesNotExist(e.id);
  });
});

bthread("Preference create verification", function () {
  const e = waitForAnyPreferenceAdded();
  block(matchDeletePreference(e.id, ANY), function () {
    verifyPreferenceExists(e.id);
  });
});

bthread("Preference update verification", function () {
  const e = waitForAnyPreferenceUpdated();
  block(matchDeletePreference(e.id, ANY), function () {
    verifyPreferenceUpdated(e.id);
  });
});

bthread("Preference delete verification", function () {
  const e = waitForAnyPreferenceDeleted();
  block(matchAddPreference(e.id, ANY), function () {
    verifyPreferenceDoesNotExist(e.id);
  });
});

bthread("Premiumrequest create verification", function () {
  const e = waitForAnyPremiumrequestAdded();
  block(matchDeletePremiumrequest(e.id, ANY), function () {
    verifyPremiumrequestExists(e.id);
  });
});

bthread("Premiumrequest update verification", function () {
  const e = waitForAnyPremiumrequestUpdated();
  block(matchDeletePremiumrequest(e.id, ANY), function () {
    verifyPremiumrequestUpdated(e.id);
  });
});

bthread("Premiumrequest delete verification", function () {
  const e = waitForAnyPremiumrequestDeleted();
  block(matchAddPremiumrequest(e.id, ANY), function () {
    verifyPremiumrequestDoesNotExist(e.id);
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

bthread("Privateregistry create verification", function () {
  const e = waitForAnyPrivateregistryAdded();
  block(matchDeletePrivateregistry(e.id, ANY), function () {
    verifyPrivateregistryExists(e.id);
  });
});

bthread("Privateregistry update verification", function () {
  const e = waitForAnyPrivateregistryUpdated();
  block(matchDeletePrivateregistry(e.id, ANY), function () {
    verifyPrivateregistryUpdated(e.id);
  });
});

bthread("Privateregistry delete verification", function () {
  const e = waitForAnyPrivateregistryDeleted();
  block(matchAddPrivateregistry(e.id, ANY), function () {
    verifyPrivateregistryDoesNotExist(e.id);
  });
});

bthread("Privatevulnerabilityreporting create verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingAdded();
  block(matchDeletePrivatevulnerabilityreporting(e.id, ANY), function () {
    verifyPrivatevulnerabilityreportingExists(e.id);
  });
});

bthread("Privatevulnerabilityreporting update verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingUpdated();
  block(matchDeletePrivatevulnerabilityreporting(e.id, ANY), function () {
    verifyPrivatevulnerabilityreportingUpdated(e.id);
  });
});

bthread("Privatevulnerabilityreporting delete verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingDeleted();
  block(matchAddPrivatevulnerabilityreporting(e.id, ANY), function () {
    verifyPrivatevulnerabilityreportingDoesNotExist(e.id);
  });
});

bthread("Profile create verification", function () {
  const e = waitForAnyProfileAdded();
  block(matchDeleteProfile(e.id, ANY), function () {
    verifyProfileExists(e.id);
  });
});

bthread("Profile update verification", function () {
  const e = waitForAnyProfileUpdated();
  block(matchDeleteProfile(e.id, ANY), function () {
    verifyProfileUpdated(e.id);
  });
});

bthread("Profile delete verification", function () {
  const e = waitForAnyProfileDeleted();
  block(matchAddProfile(e.id, ANY), function () {
    verifyProfileDoesNotExist(e.id);
  });
});

bthread("Project create verification", function () {
  const e = waitForAnyProjectAdded();
  block(matchDeleteProject(e.id, ANY), function () {
    verifyProjectExists(e.id);
  });
});

bthread("Project update verification", function () {
  const e = waitForAnyProjectUpdated();
  block(matchDeleteProject(e.id, ANY), function () {
    verifyProjectUpdated(e.id);
  });
});

bthread("Project delete verification", function () {
  const e = waitForAnyProjectDeleted();
  block(matchAddProject(e.id, ANY), function () {
    verifyProjectDoesNotExist(e.id);
  });
});

bthread("Projectsv2 create verification", function () {
  const e = waitForAnyProjectsv2Added();
  block(matchDeleteProjectsv2(e.id, ANY), function () {
    verifyProjectsv2Exists(e.id);
  });
});

bthread("Projectsv2 update verification", function () {
  const e = waitForAnyProjectsv2Updated();
  block(matchDeleteProjectsv2(e.id, ANY), function () {
    verifyProjectsv2Updated(e.id);
  });
});

bthread("Projectsv2 delete verification", function () {
  const e = waitForAnyProjectsv2Deleted();
  block(matchAddProjectsv2(e.id, ANY), function () {
    verifyProjectsv2DoesNotExist(e.id);
  });
});

bthread("Property create verification", function () {
  const e = waitForAnyPropertyAdded();
  block(matchDeleteProperty(e.id, ANY), function () {
    verifyPropertyExists(e.id);
  });
});

bthread("Property update verification", function () {
  const e = waitForAnyPropertyUpdated();
  block(matchDeleteProperty(e.id, ANY), function () {
    verifyPropertyUpdated(e.id);
  });
});

bthread("Property delete verification", function () {
  const e = waitForAnyPropertyDeleted();
  block(matchAddProperty(e.id, ANY), function () {
    verifyPropertyDoesNotExist(e.id);
  });
});

bthread("Protection create verification", function () {
  const e = waitForAnyProtectionAdded();
  block(matchDeleteProtection(e.id, ANY), function () {
    verifyProtectionExists(e.id);
  });
});

bthread("Protection update verification", function () {
  const e = waitForAnyProtectionUpdated();
  block(matchDeleteProtection(e.id, ANY), function () {
    verifyProtectionUpdated(e.id);
  });
});

bthread("Protection delete verification", function () {
  const e = waitForAnyProtectionDeleted();
  block(matchAddProtection(e.id, ANY), function () {
    verifyProtectionDoesNotExist(e.id);
  });
});

bthread("Public create verification", function () {
  const e = waitForAnyPublicAdded();
  block(matchDeletePublic(e.id, ANY), function () {
    verifyPublicExists(e.id);
  });
});

bthread("Public update verification", function () {
  const e = waitForAnyPublicUpdated();
  block(matchDeletePublic(e.id, ANY), function () {
    verifyPublicUpdated(e.id);
  });
});

bthread("Public delete verification", function () {
  const e = waitForAnyPublicDeleted();
  block(matchAddPublic(e.id, ANY), function () {
    verifyPublicDoesNotExist(e.id);
  });
});

bthread("Publicemail create verification", function () {
  const e = waitForAnyPublicemailAdded();
  block(matchDeletePublicemail(e.id, ANY), function () {
    verifyPublicemailExists(e.id);
  });
});

bthread("Publicemail update verification", function () {
  const e = waitForAnyPublicemailUpdated();
  block(matchDeletePublicemail(e.id, ANY), function () {
    verifyPublicemailUpdated(e.id);
  });
});

bthread("Publicemail delete verification", function () {
  const e = waitForAnyPublicemailDeleted();
  block(matchAddPublicemail(e.id, ANY), function () {
    verifyPublicemailDoesNotExist(e.id);
  });
});

bthread("Publickey create verification", function () {
  const e = waitForAnyPublickeyAdded();
  block(matchDeletePublickey(e.id, ANY), function () {
    verifyPublickeyExists(e.id);
  });
});

bthread("Publickey update verification", function () {
  const e = waitForAnyPublickeyUpdated();
  block(matchDeletePublickey(e.id, ANY), function () {
    verifyPublickeyUpdated(e.id);
  });
});

bthread("Publickey delete verification", function () {
  const e = waitForAnyPublickeyDeleted();
  block(matchAddPublickey(e.id, ANY), function () {
    verifyPublickeyDoesNotExist(e.id);
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

bthread("Publish create verification", function () {
  const e = waitForAnyPublishAdded();
  block(matchDeletePublish(e.id, ANY), function () {
    verifyPublishExists(e.id);
  });
});

bthread("Publish update verification", function () {
  const e = waitForAnyPublishUpdated();
  block(matchDeletePublish(e.id, ANY), function () {
    verifyPublishUpdated(e.id);
  });
});

bthread("Publish delete verification", function () {
  const e = waitForAnyPublishDeleted();
  block(matchAddPublish(e.id, ANY), function () {
    verifyPublishDoesNotExist(e.id);
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

bthread("Punchcard create verification", function () {
  const e = waitForAnyPunchcardAdded();
  block(matchDeletePunchcard(e.id, ANY), function () {
    verifyPunchcardExists(e.id);
  });
});

bthread("Punchcard update verification", function () {
  const e = waitForAnyPunchcardUpdated();
  block(matchDeletePunchcard(e.id, ANY), function () {
    verifyPunchcardUpdated(e.id);
  });
});

bthread("Punchcard delete verification", function () {
  const e = waitForAnyPunchcardDeleted();
  block(matchAddPunchcard(e.id, ANY), function () {
    verifyPunchcardDoesNotExist(e.id);
  });
});

bthread("Pushprotectionbypass create verification", function () {
  const e = waitForAnyPushprotectionbypassAdded();
  block(matchDeletePushprotectionbypass(e.id, ANY), function () {
    verifyPushprotectionbypassExists(e.id);
  });
});

bthread("Pushprotectionbypass update verification", function () {
  const e = waitForAnyPushprotectionbypassUpdated();
  block(matchDeletePushprotectionbypass(e.id, ANY), function () {
    verifyPushprotectionbypassUpdated(e.id);
  });
});

bthread("Pushprotectionbypass delete verification", function () {
  const e = waitForAnyPushprotectionbypassDeleted();
  block(matchAddPushprotectionbypass(e.id, ANY), function () {
    verifyPushprotectionbypassDoesNotExist(e.id);
  });
});

bthread("Ratelimit create verification", function () {
  const e = waitForAnyRatelimitAdded();
  block(matchDeleteRatelimit(e.id, ANY), function () {
    verifyRatelimitExists(e.id);
  });
});

bthread("Ratelimit update verification", function () {
  const e = waitForAnyRatelimitUpdated();
  block(matchDeleteRatelimit(e.id, ANY), function () {
    verifyRatelimitUpdated(e.id);
  });
});

bthread("Ratelimit delete verification", function () {
  const e = waitForAnyRatelimitDeleted();
  block(matchAddRatelimit(e.id, ANY), function () {
    verifyRatelimitDoesNotExist(e.id);
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

bthread("Readme create verification", function () {
  const e = waitForAnyReadmeAdded();
  block(matchDeleteReadme(e.id, ANY), function () {
    verifyReadmeExists(e.id);
  });
});

bthread("Readme update verification", function () {
  const e = waitForAnyReadmeUpdated();
  block(matchDeleteReadme(e.id, ANY), function () {
    verifyReadmeUpdated(e.id);
  });
});

bthread("Readme delete verification", function () {
  const e = waitForAnyReadmeDeleted();
  block(matchAddReadme(e.id, ANY), function () {
    verifyReadmeDoesNotExist(e.id);
  });
});

bthread("Receivedevent create verification", function () {
  const e = waitForAnyReceivedeventAdded();
  block(matchDeleteReceivedevent(e.id, ANY), function () {
    verifyReceivedeventExists(e.id);
  });
});

bthread("Receivedevent update verification", function () {
  const e = waitForAnyReceivedeventUpdated();
  block(matchDeleteReceivedevent(e.id, ANY), function () {
    verifyReceivedeventUpdated(e.id);
  });
});

bthread("Receivedevent delete verification", function () {
  const e = waitForAnyReceivedeventDeleted();
  block(matchAddReceivedevent(e.id, ANY), function () {
    verifyReceivedeventDoesNotExist(e.id);
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

bthread("Referrer create verification", function () {
  const e = waitForAnyReferrerAdded();
  block(matchDeleteReferrer(e.id, ANY), function () {
    verifyReferrerExists(e.id);
  });
});

bthread("Referrer update verification", function () {
  const e = waitForAnyReferrerUpdated();
  block(matchDeleteReferrer(e.id, ANY), function () {
    verifyReferrerUpdated(e.id);
  });
});

bthread("Referrer delete verification", function () {
  const e = waitForAnyReferrerDeleted();
  block(matchAddReferrer(e.id, ANY), function () {
    verifyReferrerDoesNotExist(e.id);
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

bthread("Remove create verification", function () {
  const e = waitForAnyRemoveAdded();
  block(matchDeleteRemove(e.id, ANY), function () {
    verifyRemoveExists(e.id);
  });
});

bthread("Remove update verification", function () {
  const e = waitForAnyRemoveUpdated();
  block(matchDeleteRemove(e.id, ANY), function () {
    verifyRemoveUpdated(e.id);
  });
});

bthread("Remove delete verification", function () {
  const e = waitForAnyRemoveDeleted();
  block(matchAddRemove(e.id, ANY), function () {
    verifyRemoveDoesNotExist(e.id);
  });
});

bthread("Removetoken create verification", function () {
  const e = waitForAnyRemovetokenAdded();
  block(matchDeleteRemovetoken(e.id, ANY), function () {
    verifyRemovetokenExists(e.id);
  });
});

bthread("Removetoken update verification", function () {
  const e = waitForAnyRemovetokenUpdated();
  block(matchDeleteRemovetoken(e.id, ANY), function () {
    verifyRemovetokenUpdated(e.id);
  });
});

bthread("Removetoken delete verification", function () {
  const e = waitForAnyRemovetokenDeleted();
  block(matchAddRemovetoken(e.id, ANY), function () {
    verifyRemovetokenDoesNotExist(e.id);
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

bthread("Reply create verification", function () {
  const e = waitForAnyReplyAdded();
  block(matchDeleteReply(e.id, ANY), function () {
    verifyReplyExists(e.id);
  });
});

bthread("Reply update verification", function () {
  const e = waitForAnyReplyUpdated();
  block(matchDeleteReply(e.id, ANY), function () {
    verifyReplyUpdated(e.id);
  });
});

bthread("Reply delete verification", function () {
  const e = waitForAnyReplyDeleted();
  block(matchAddReply(e.id, ANY), function () {
    verifyReplyDoesNotExist(e.id);
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

bthread("Report create verification", function () {
  const e = waitForAnyReportAdded();
  block(matchDeleteReport(e.id, ANY), function () {
    verifyReportExists(e.id);
  });
});

bthread("Report update verification", function () {
  const e = waitForAnyReportUpdated();
  block(matchDeleteReport(e.id, ANY), function () {
    verifyReportUpdated(e.id);
  });
});

bthread("Report delete verification", function () {
  const e = waitForAnyReportDeleted();
  block(matchAddReport(e.id, ANY), function () {
    verifyReportDoesNotExist(e.id);
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

bthread("Repositoryacces create verification", function () {
  const e = waitForAnyRepositoryaccesAdded();
  block(matchDeleteRepositoryacces(e.id, ANY), function () {
    verifyRepositoryaccesExists(e.id);
  });
});

bthread("Repositoryacces update verification", function () {
  const e = waitForAnyRepositoryaccesUpdated();
  block(matchDeleteRepositoryacces(e.id, ANY), function () {
    verifyRepositoryaccesUpdated(e.id);
  });
});

bthread("Repositoryacces delete verification", function () {
  const e = waitForAnyRepositoryaccesDeleted();
  block(matchAddRepositoryacces(e.id, ANY), function () {
    verifyRepositoryaccesDoesNotExist(e.id);
  });
});

bthread("Repositoryinvitation create verification", function () {
  const e = waitForAnyRepositoryinvitationAdded();
  block(matchDeleteRepositoryinvitation(e.id, ANY), function () {
    verifyRepositoryinvitationExists(e.id);
  });
});

bthread("Repositoryinvitation update verification", function () {
  const e = waitForAnyRepositoryinvitationUpdated();
  block(matchDeleteRepositoryinvitation(e.id, ANY), function () {
    verifyRepositoryinvitationUpdated(e.id);
  });
});

bthread("Repositoryinvitation delete verification", function () {
  const e = waitForAnyRepositoryinvitationDeleted();
  block(matchAddRepositoryinvitation(e.id, ANY), function () {
    verifyRepositoryinvitationDoesNotExist(e.id);
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

bthread("Requiredpullrequestreview create verification", function () {
  const e = waitForAnyRequiredpullrequestreviewAdded();
  block(matchDeleteRequiredpullrequestreview(e.id, ANY), function () {
    verifyRequiredpullrequestreviewExists(e.id);
  });
});

bthread("Requiredpullrequestreview update verification", function () {
  const e = waitForAnyRequiredpullrequestreviewUpdated();
  block(matchDeleteRequiredpullrequestreview(e.id, ANY), function () {
    verifyRequiredpullrequestreviewUpdated(e.id);
  });
});

bthread("Requiredpullrequestreview delete verification", function () {
  const e = waitForAnyRequiredpullrequestreviewDeleted();
  block(matchAddRequiredpullrequestreview(e.id, ANY), function () {
    verifyRequiredpullrequestreviewDoesNotExist(e.id);
  });
});

bthread("Requiredsignature create verification", function () {
  const e = waitForAnyRequiredsignatureAdded();
  block(matchDeleteRequiredsignature(e.id, ANY), function () {
    verifyRequiredsignatureExists(e.id);
  });
});

bthread("Requiredsignature update verification", function () {
  const e = waitForAnyRequiredsignatureUpdated();
  block(matchDeleteRequiredsignature(e.id, ANY), function () {
    verifyRequiredsignatureUpdated(e.id);
  });
});

bthread("Requiredsignature delete verification", function () {
  const e = waitForAnyRequiredsignatureDeleted();
  block(matchAddRequiredsignature(e.id, ANY), function () {
    verifyRequiredsignatureDoesNotExist(e.id);
  });
});

bthread("Requiredstatuscheck create verification", function () {
  const e = waitForAnyRequiredstatuscheckAdded();
  block(matchDeleteRequiredstatuscheck(e.id, ANY), function () {
    verifyRequiredstatuscheckExists(e.id);
  });
});

bthread("Requiredstatuscheck update verification", function () {
  const e = waitForAnyRequiredstatuscheckUpdated();
  block(matchDeleteRequiredstatuscheck(e.id, ANY), function () {
    verifyRequiredstatuscheckUpdated(e.id);
  });
});

bthread("Requiredstatuscheck delete verification", function () {
  const e = waitForAnyRequiredstatuscheckDeleted();
  block(matchAddRequiredstatuscheck(e.id, ANY), function () {
    verifyRequiredstatuscheckDoesNotExist(e.id);
  });
});

bthread("Rerequest create verification", function () {
  const e = waitForAnyRerequestAdded();
  block(matchDeleteRerequest(e.id, ANY), function () {
    verifyRerequestExists(e.id);
  });
});

bthread("Rerequest update verification", function () {
  const e = waitForAnyRerequestUpdated();
  block(matchDeleteRerequest(e.id, ANY), function () {
    verifyRerequestUpdated(e.id);
  });
});

bthread("Rerequest delete verification", function () {
  const e = waitForAnyRerequestDeleted();
  block(matchAddRerequest(e.id, ANY), function () {
    verifyRerequestDoesNotExist(e.id);
  });
});

bthread("Rerun create verification", function () {
  const e = waitForAnyRerunAdded();
  block(matchDeleteRerun(e.id, ANY), function () {
    verifyRerunExists(e.id);
  });
});

bthread("Rerun update verification", function () {
  const e = waitForAnyRerunUpdated();
  block(matchDeleteRerun(e.id, ANY), function () {
    verifyRerunUpdated(e.id);
  });
});

bthread("Rerun delete verification", function () {
  const e = waitForAnyRerunDeleted();
  block(matchAddRerun(e.id, ANY), function () {
    verifyRerunDoesNotExist(e.id);
  });
});

bthread("Rerunfailedjob create verification", function () {
  const e = waitForAnyRerunfailedjobAdded();
  block(matchDeleteRerunfailedjob(e.id, ANY), function () {
    verifyRerunfailedjobExists(e.id);
  });
});

bthread("Rerunfailedjob update verification", function () {
  const e = waitForAnyRerunfailedjobUpdated();
  block(matchDeleteRerunfailedjob(e.id, ANY), function () {
    verifyRerunfailedjobUpdated(e.id);
  });
});

bthread("Rerunfailedjob delete verification", function () {
  const e = waitForAnyRerunfailedjobDeleted();
  block(matchAddRerunfailedjob(e.id, ANY), function () {
    verifyRerunfailedjobDoesNotExist(e.id);
  });
});

bthread("Restore create verification", function () {
  const e = waitForAnyRestoreAdded();
  block(matchDeleteRestore(e.id, ANY), function () {
    verifyRestoreExists(e.id);
  });
});

bthread("Restore update verification", function () {
  const e = waitForAnyRestoreUpdated();
  block(matchDeleteRestore(e.id, ANY), function () {
    verifyRestoreUpdated(e.id);
  });
});

bthread("Restore delete verification", function () {
  const e = waitForAnyRestoreDeleted();
  block(matchAddRestore(e.id, ANY), function () {
    verifyRestoreDoesNotExist(e.id);
  });
});

bthread("Restriction create verification", function () {
  const e = waitForAnyRestrictionAdded();
  block(matchDeleteRestriction(e.id, ANY), function () {
    verifyRestrictionExists(e.id);
  });
});

bthread("Restriction update verification", function () {
  const e = waitForAnyRestrictionUpdated();
  block(matchDeleteRestriction(e.id, ANY), function () {
    verifyRestrictionUpdated(e.id);
  });
});

bthread("Restriction delete verification", function () {
  const e = waitForAnyRestrictionDeleted();
  block(matchAddRestriction(e.id, ANY), function () {
    verifyRestrictionDoesNotExist(e.id);
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

bthread("Revoke create verification", function () {
  const e = waitForAnyRevokeAdded();
  block(matchDeleteRevoke(e.id, ANY), function () {
    verifyRevokeExists(e.id);
  });
});

bthread("Revoke update verification", function () {
  const e = waitForAnyRevokeUpdated();
  block(matchDeleteRevoke(e.id, ANY), function () {
    verifyRevokeUpdated(e.id);
  });
});

bthread("Revoke delete verification", function () {
  const e = waitForAnyRevokeDeleted();
  block(matchAddRevoke(e.id, ANY), function () {
    verifyRevokeDoesNotExist(e.id);
  });
});

bthread("Routestat create verification", function () {
  const e = waitForAnyRoutestatAdded();
  block(matchDeleteRoutestat(e.id, ANY), function () {
    verifyRoutestatExists(e.id);
  });
});

bthread("Routestat update verification", function () {
  const e = waitForAnyRoutestatUpdated();
  block(matchDeleteRoutestat(e.id, ANY), function () {
    verifyRoutestatUpdated(e.id);
  });
});

bthread("Routestat delete verification", function () {
  const e = waitForAnyRoutestatDeleted();
  block(matchAddRoutestat(e.id, ANY), function () {
    verifyRoutestatDoesNotExist(e.id);
  });
});

bthread("Rule create verification", function () {
  const e = waitForAnyRuleAdded();
  block(matchDeleteRule(e.id, ANY), function () {
    verifyRuleExists(e.id);
  });
});

bthread("Rule update verification", function () {
  const e = waitForAnyRuleUpdated();
  block(matchDeleteRule(e.id, ANY), function () {
    verifyRuleUpdated(e.id);
  });
});

bthread("Rule delete verification", function () {
  const e = waitForAnyRuleDeleted();
  block(matchAddRule(e.id, ANY), function () {
    verifyRuleDoesNotExist(e.id);
  });
});

bthread("Ruleset create verification", function () {
  const e = waitForAnyRulesetAdded();
  block(matchDeleteRuleset(e.id, ANY), function () {
    verifyRulesetExists(e.id);
  });
});

bthread("Ruleset update verification", function () {
  const e = waitForAnyRulesetUpdated();
  block(matchDeleteRuleset(e.id, ANY), function () {
    verifyRulesetUpdated(e.id);
  });
});

bthread("Ruleset delete verification", function () {
  const e = waitForAnyRulesetDeleted();
  block(matchAddRuleset(e.id, ANY), function () {
    verifyRulesetDoesNotExist(e.id);
  });
});

bthread("Rulesuite create verification", function () {
  const e = waitForAnyRulesuiteAdded();
  block(matchDeleteRulesuite(e.id, ANY), function () {
    verifyRulesuiteExists(e.id);
  });
});

bthread("Rulesuite update verification", function () {
  const e = waitForAnyRulesuiteUpdated();
  block(matchDeleteRulesuite(e.id, ANY), function () {
    verifyRulesuiteUpdated(e.id);
  });
});

bthread("Rulesuite delete verification", function () {
  const e = waitForAnyRulesuiteDeleted();
  block(matchAddRulesuite(e.id, ANY), function () {
    verifyRulesuiteDoesNotExist(e.id);
  });
});

bthread("Run create verification", function () {
  const e = waitForAnyRunAdded();
  block(matchDeleteRun(e.id, ANY), function () {
    verifyRunExists(e.id);
  });
});

bthread("Run update verification", function () {
  const e = waitForAnyRunUpdated();
  block(matchDeleteRun(e.id, ANY), function () {
    verifyRunUpdated(e.id);
  });
});

bthread("Run delete verification", function () {
  const e = waitForAnyRunDeleted();
  block(matchAddRun(e.id, ANY), function () {
    verifyRunDoesNotExist(e.id);
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

bthread("Runnergroup create verification", function () {
  const e = waitForAnyRunnergroupAdded();
  block(matchDeleteRunnergroup(e.id, ANY), function () {
    verifyRunnergroupExists(e.id);
  });
});

bthread("Runnergroup update verification", function () {
  const e = waitForAnyRunnergroupUpdated();
  block(matchDeleteRunnergroup(e.id, ANY), function () {
    verifyRunnergroupUpdated(e.id);
  });
});

bthread("Runnergroup delete verification", function () {
  const e = waitForAnyRunnergroupDeleted();
  block(matchAddRunnergroup(e.id, ANY), function () {
    verifyRunnergroupDoesNotExist(e.id);
  });
});

bthread("Sarif create verification", function () {
  const e = waitForAnySarifAdded();
  block(matchDeleteSarif(e.id, ANY), function () {
    verifySarifExists(e.id);
  });
});

bthread("Sarif update verification", function () {
  const e = waitForAnySarifUpdated();
  block(matchDeleteSarif(e.id, ANY), function () {
    verifySarifUpdated(e.id);
  });
});

bthread("Sarif delete verification", function () {
  const e = waitForAnySarifDeleted();
  block(matchAddSarif(e.id, ANY), function () {
    verifySarifDoesNotExist(e.id);
  });
});

bthread("Sbom create verification", function () {
  const e = waitForAnySbomAdded();
  block(matchDeleteSbom(e.id, ANY), function () {
    verifySbomExists(e.id);
  });
});

bthread("Sbom update verification", function () {
  const e = waitForAnySbomUpdated();
  block(matchDeleteSbom(e.id, ANY), function () {
    verifySbomUpdated(e.id);
  });
});

bthread("Sbom delete verification", function () {
  const e = waitForAnySbomDeleted();
  block(matchAddSbom(e.id, ANY), function () {
    verifySbomDoesNotExist(e.id);
  });
});

bthread("Scanhistory create verification", function () {
  const e = waitForAnyScanhistoryAdded();
  block(matchDeleteScanhistory(e.id, ANY), function () {
    verifyScanhistoryExists(e.id);
  });
});

bthread("Scanhistory update verification", function () {
  const e = waitForAnyScanhistoryUpdated();
  block(matchDeleteScanhistory(e.id, ANY), function () {
    verifyScanhistoryUpdated(e.id);
  });
});

bthread("Scanhistory delete verification", function () {
  const e = waitForAnyScanhistoryDeleted();
  block(matchAddScanhistory(e.id, ANY), function () {
    verifyScanhistoryDoesNotExist(e.id);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  block(matchDeleteSchema(e.id, ANY), function () {
    verifySchemaExists(e.id);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  block(matchDeleteSchema(e.id, ANY), function () {
    verifySchemaUpdated(e.id);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  block(matchAddSchema(e.id, ANY), function () {
    verifySchemaDoesNotExist(e.id);
  });
});

bthread("Scoped create verification", function () {
  const e = waitForAnyScopedAdded();
  block(matchDeleteScoped(e.id, ANY), function () {
    verifyScopedExists(e.id);
  });
});

bthread("Scoped update verification", function () {
  const e = waitForAnyScopedUpdated();
  block(matchDeleteScoped(e.id, ANY), function () {
    verifyScopedUpdated(e.id);
  });
});

bthread("Scoped delete verification", function () {
  const e = waitForAnyScopedDeleted();
  block(matchAddScoped(e.id, ANY), function () {
    verifyScopedDoesNotExist(e.id);
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

bthread("Seat create verification", function () {
  const e = waitForAnySeatAdded();
  block(matchDeleteSeat(e.id, ANY), function () {
    verifySeatExists(e.id);
  });
});

bthread("Seat update verification", function () {
  const e = waitForAnySeatUpdated();
  block(matchDeleteSeat(e.id, ANY), function () {
    verifySeatUpdated(e.id);
  });
});

bthread("Seat delete verification", function () {
  const e = waitForAnySeatDeleted();
  block(matchAddSeat(e.id, ANY), function () {
    verifySeatDoesNotExist(e.id);
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

bthread("Secretscanning create verification", function () {
  const e = waitForAnySecretscanningAdded();
  block(matchDeleteSecretscanning(e.id, ANY), function () {
    verifySecretscanningExists(e.id);
  });
});

bthread("Secretscanning update verification", function () {
  const e = waitForAnySecretscanningUpdated();
  block(matchDeleteSecretscanning(e.id, ANY), function () {
    verifySecretscanningUpdated(e.id);
  });
});

bthread("Secretscanning delete verification", function () {
  const e = waitForAnySecretscanningDeleted();
  block(matchAddSecretscanning(e.id, ANY), function () {
    verifySecretscanningDoesNotExist(e.id);
  });
});

bthread("Securityadvisory create verification", function () {
  const e = waitForAnySecurityadvisoryAdded();
  block(matchDeleteSecurityadvisory(e.id, ANY), function () {
    verifySecurityadvisoryExists(e.id);
  });
});

bthread("Securityadvisory update verification", function () {
  const e = waitForAnySecurityadvisoryUpdated();
  block(matchDeleteSecurityadvisory(e.id, ANY), function () {
    verifySecurityadvisoryUpdated(e.id);
  });
});

bthread("Securityadvisory delete verification", function () {
  const e = waitForAnySecurityadvisoryDeleted();
  block(matchAddSecurityadvisory(e.id, ANY), function () {
    verifySecurityadvisoryDoesNotExist(e.id);
  });
});

bthread("Securitymanager create verification", function () {
  const e = waitForAnySecuritymanagerAdded();
  block(matchDeleteSecuritymanager(e.id, ANY), function () {
    verifySecuritymanagerExists(e.id);
  });
});

bthread("Securitymanager update verification", function () {
  const e = waitForAnySecuritymanagerUpdated();
  block(matchDeleteSecuritymanager(e.id, ANY), function () {
    verifySecuritymanagerUpdated(e.id);
  });
});

bthread("Securitymanager delete verification", function () {
  const e = waitForAnySecuritymanagerDeleted();
  block(matchAddSecuritymanager(e.id, ANY), function () {
    verifySecuritymanagerDoesNotExist(e.id);
  });
});

bthread("Selectedaction create verification", function () {
  const e = waitForAnySelectedactionAdded();
  block(matchDeleteSelectedaction(e.id, ANY), function () {
    verifySelectedactionExists(e.id);
  });
});

bthread("Selectedaction update verification", function () {
  const e = waitForAnySelectedactionUpdated();
  block(matchDeleteSelectedaction(e.id, ANY), function () {
    verifySelectedactionUpdated(e.id);
  });
});

bthread("Selectedaction delete verification", function () {
  const e = waitForAnySelectedactionDeleted();
  block(matchAddSelectedaction(e.id, ANY), function () {
    verifySelectedactionDoesNotExist(e.id);
  });
});

bthread("Selectedteam create verification", function () {
  const e = waitForAnySelectedteamAdded();
  block(matchDeleteSelectedteam(e.id, ANY), function () {
    verifySelectedteamExists(e.id);
  });
});

bthread("Selectedteam update verification", function () {
  const e = waitForAnySelectedteamUpdated();
  block(matchDeleteSelectedteam(e.id, ANY), function () {
    verifySelectedteamUpdated(e.id);
  });
});

bthread("Selectedteam delete verification", function () {
  const e = waitForAnySelectedteamDeleted();
  block(matchAddSelectedteam(e.id, ANY), function () {
    verifySelectedteamDoesNotExist(e.id);
  });
});

bthread("Selecteduser create verification", function () {
  const e = waitForAnySelecteduserAdded();
  block(matchDeleteSelecteduser(e.id, ANY), function () {
    verifySelecteduserExists(e.id);
  });
});

bthread("Selecteduser update verification", function () {
  const e = waitForAnySelecteduserUpdated();
  block(matchDeleteSelecteduser(e.id, ANY), function () {
    verifySelecteduserUpdated(e.id);
  });
});

bthread("Selecteduser delete verification", function () {
  const e = waitForAnySelecteduserDeleted();
  block(matchAddSelecteduser(e.id, ANY), function () {
    verifySelecteduserDoesNotExist(e.id);
  });
});

bthread("Selfhostedrunner create verification", function () {
  const e = waitForAnySelfhostedrunnerAdded();
  block(matchDeleteSelfhostedrunner(e.id, ANY), function () {
    verifySelfhostedrunnerExists(e.id);
  });
});

bthread("Selfhostedrunner update verification", function () {
  const e = waitForAnySelfhostedrunnerUpdated();
  block(matchDeleteSelfhostedrunner(e.id, ANY), function () {
    verifySelfhostedrunnerUpdated(e.id);
  });
});

bthread("Selfhostedrunner delete verification", function () {
  const e = waitForAnySelfhostedrunnerDeleted();
  block(matchAddSelfhostedrunner(e.id, ANY), function () {
    verifySelfhostedrunnerDoesNotExist(e.id);
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

bthread("Sharedstorage create verification", function () {
  const e = waitForAnySharedstorageAdded();
  block(matchDeleteSharedstorage(e.id, ANY), function () {
    verifySharedstorageExists(e.id);
  });
});

bthread("Sharedstorage update verification", function () {
  const e = waitForAnySharedstorageUpdated();
  block(matchDeleteSharedstorage(e.id, ANY), function () {
    verifySharedstorageUpdated(e.id);
  });
});

bthread("Sharedstorage delete verification", function () {
  const e = waitForAnySharedstorageDeleted();
  block(matchAddSharedstorage(e.id, ANY), function () {
    verifySharedstorageDoesNotExist(e.id);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  block(matchDeleteSnapshot(e.id, ANY), function () {
    verifySnapshotExists(e.id);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  block(matchDeleteSnapshot(e.id, ANY), function () {
    verifySnapshotUpdated(e.id);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  block(matchAddSnapshot(e.id, ANY), function () {
    verifySnapshotDoesNotExist(e.id);
  });
});

bthread("Socialaccount create verification", function () {
  const e = waitForAnySocialaccountAdded();
  block(matchDeleteSocialaccount(e.id, ANY), function () {
    verifySocialaccountExists(e.id);
  });
});

bthread("Socialaccount update verification", function () {
  const e = waitForAnySocialaccountUpdated();
  block(matchDeleteSocialaccount(e.id, ANY), function () {
    verifySocialaccountUpdated(e.id);
  });
});

bthread("Socialaccount delete verification", function () {
  const e = waitForAnySocialaccountDeleted();
  block(matchAddSocialaccount(e.id, ANY), function () {
    verifySocialaccountDoesNotExist(e.id);
  });
});

bthread("Sshsigningkey create verification", function () {
  const e = waitForAnySshsigningkeyAdded();
  block(matchDeleteSshsigningkey(e.id, ANY), function () {
    verifySshsigningkeyExists(e.id);
  });
});

bthread("Sshsigningkey update verification", function () {
  const e = waitForAnySshsigningkeyUpdated();
  block(matchDeleteSshsigningkey(e.id, ANY), function () {
    verifySshsigningkeyUpdated(e.id);
  });
});

bthread("Sshsigningkey delete verification", function () {
  const e = waitForAnySshsigningkeyDeleted();
  block(matchAddSshsigningkey(e.id, ANY), function () {
    verifySshsigningkeyDoesNotExist(e.id);
  });
});

bthread("Star create verification", function () {
  const e = waitForAnyStarAdded();
  block(matchDeleteStar(e.id, ANY), function () {
    verifyStarExists(e.id);
  });
});

bthread("Star update verification", function () {
  const e = waitForAnyStarUpdated();
  block(matchDeleteStar(e.id, ANY), function () {
    verifyStarUpdated(e.id);
  });
});

bthread("Star delete verification", function () {
  const e = waitForAnyStarDeleted();
  block(matchAddStar(e.id, ANY), function () {
    verifyStarDoesNotExist(e.id);
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

bthread("Stat create verification", function () {
  const e = waitForAnyStatAdded();
  block(matchDeleteStat(e.id, ANY), function () {
    verifyStatExists(e.id);
  });
});

bthread("Stat update verification", function () {
  const e = waitForAnyStatUpdated();
  block(matchDeleteStat(e.id, ANY), function () {
    verifyStatUpdated(e.id);
  });
});

bthread("Stat delete verification", function () {
  const e = waitForAnyStatDeleted();
  block(matchAddStat(e.id, ANY), function () {
    verifyStatDoesNotExist(e.id);
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

bthread("Storagerecord create verification", function () {
  const e = waitForAnyStoragerecordAdded();
  block(matchDeleteStoragerecord(e.id, ANY), function () {
    verifyStoragerecordExists(e.id);
  });
});

bthread("Storagerecord update verification", function () {
  const e = waitForAnyStoragerecordUpdated();
  block(matchDeleteStoragerecord(e.id, ANY), function () {
    verifyStoragerecordUpdated(e.id);
  });
});

bthread("Storagerecord delete verification", function () {
  const e = waitForAnyStoragerecordDeleted();
  block(matchAddStoragerecord(e.id, ANY), function () {
    verifyStoragerecordDoesNotExist(e.id);
  });
});

bthread("Stubbed create verification", function () {
  const e = waitForAnyStubbedAdded();
  block(matchDeleteStubbed(e.id, ANY), function () {
    verifyStubbedExists(e.id);
  });
});

bthread("Stubbed update verification", function () {
  const e = waitForAnyStubbedUpdated();
  block(matchDeleteStubbed(e.id, ANY), function () {
    verifyStubbedUpdated(e.id);
  });
});

bthread("Stubbed delete verification", function () {
  const e = waitForAnyStubbedDeleted();
  block(matchAddStubbed(e.id, ANY), function () {
    verifyStubbedDoesNotExist(e.id);
  });
});

bthread("Sub create verification", function () {
  const e = waitForAnySubAdded();
  block(matchDeleteSub(e.id, ANY), function () {
    verifySubExists(e.id);
  });
});

bthread("Sub update verification", function () {
  const e = waitForAnySubUpdated();
  block(matchDeleteSub(e.id, ANY), function () {
    verifySubUpdated(e.id);
  });
});

bthread("Sub delete verification", function () {
  const e = waitForAnySubDeleted();
  block(matchAddSub(e.id, ANY), function () {
    verifySubDoesNotExist(e.id);
  });
});

bthread("Subissue create verification", function () {
  const e = waitForAnySubissueAdded();
  block(matchDeleteSubissue(e.id, ANY), function () {
    verifySubissueExists(e.id);
  });
});

bthread("Subissue update verification", function () {
  const e = waitForAnySubissueUpdated();
  block(matchDeleteSubissue(e.id, ANY), function () {
    verifySubissueUpdated(e.id);
  });
});

bthread("Subissue delete verification", function () {
  const e = waitForAnySubissueDeleted();
  block(matchAddSubissue(e.id, ANY), function () {
    verifySubissueDoesNotExist(e.id);
  });
});

bthread("Subjectstat create verification", function () {
  const e = waitForAnySubjectstatAdded();
  block(matchDeleteSubjectstat(e.id, ANY), function () {
    verifySubjectstatExists(e.id);
  });
});

bthread("Subjectstat update verification", function () {
  const e = waitForAnySubjectstatUpdated();
  block(matchDeleteSubjectstat(e.id, ANY), function () {
    verifySubjectstatUpdated(e.id);
  });
});

bthread("Subjectstat delete verification", function () {
  const e = waitForAnySubjectstatDeleted();
  block(matchAddSubjectstat(e.id, ANY), function () {
    verifySubjectstatDoesNotExist(e.id);
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

bthread("Summarystat create verification", function () {
  const e = waitForAnySummarystatAdded();
  block(matchDeleteSummarystat(e.id, ANY), function () {
    verifySummarystatExists(e.id);
  });
});

bthread("Summarystat update verification", function () {
  const e = waitForAnySummarystatUpdated();
  block(matchDeleteSummarystat(e.id, ANY), function () {
    verifySummarystatUpdated(e.id);
  });
});

bthread("Summarystat delete verification", function () {
  const e = waitForAnySummarystatDeleted();
  block(matchAddSummarystat(e.id, ANY), function () {
    verifySummarystatDoesNotExist(e.id);
  });
});

bthread("Suspended create verification", function () {
  const e = waitForAnySuspendedAdded();
  block(matchDeleteSuspended(e.id, ANY), function () {
    verifySuspendedExists(e.id);
  });
});

bthread("Suspended update verification", function () {
  const e = waitForAnySuspendedUpdated();
  block(matchDeleteSuspended(e.id, ANY), function () {
    verifySuspendedUpdated(e.id);
  });
});

bthread("Suspended delete verification", function () {
  const e = waitForAnySuspendedDeleted();
  block(matchAddSuspended(e.id, ANY), function () {
    verifySuspendedDoesNotExist(e.id);
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

bthread("Tarball create verification", function () {
  const e = waitForAnyTarballAdded();
  block(matchDeleteTarball(e.id, ANY), function () {
    verifyTarballExists(e.id);
  });
});

bthread("Tarball update verification", function () {
  const e = waitForAnyTarballUpdated();
  block(matchDeleteTarball(e.id, ANY), function () {
    verifyTarballUpdated(e.id);
  });
});

bthread("Tarball delete verification", function () {
  const e = waitForAnyTarballDeleted();
  block(matchAddTarball(e.id, ANY), function () {
    verifyTarballDoesNotExist(e.id);
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

bthread("Timestat create verification", function () {
  const e = waitForAnyTimestatAdded();
  block(matchDeleteTimestat(e.id, ANY), function () {
    verifyTimestatExists(e.id);
  });
});

bthread("Timestat update verification", function () {
  const e = waitForAnyTimestatUpdated();
  block(matchDeleteTimestat(e.id, ANY), function () {
    verifyTimestatUpdated(e.id);
  });
});

bthread("Timestat delete verification", function () {
  const e = waitForAnyTimestatDeleted();
  block(matchAddTimestat(e.id, ANY), function () {
    verifyTimestatDoesNotExist(e.id);
  });
});

bthread("Timing create verification", function () {
  const e = waitForAnyTimingAdded();
  block(matchDeleteTiming(e.id, ANY), function () {
    verifyTimingExists(e.id);
  });
});

bthread("Timing update verification", function () {
  const e = waitForAnyTimingUpdated();
  block(matchDeleteTiming(e.id, ANY), function () {
    verifyTimingUpdated(e.id);
  });
});

bthread("Timing delete verification", function () {
  const e = waitForAnyTimingDeleted();
  block(matchAddTiming(e.id, ANY), function () {
    verifyTimingDoesNotExist(e.id);
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

bthread("Traffic create verification", function () {
  const e = waitForAnyTrafficAdded();
  block(matchDeleteTraffic(e.id, ANY), function () {
    verifyTrafficExists(e.id);
  });
});

bthread("Traffic update verification", function () {
  const e = waitForAnyTrafficUpdated();
  block(matchDeleteTraffic(e.id, ANY), function () {
    verifyTrafficUpdated(e.id);
  });
});

bthread("Traffic delete verification", function () {
  const e = waitForAnyTrafficDeleted();
  block(matchAddTraffic(e.id, ANY), function () {
    verifyTrafficDoesNotExist(e.id);
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

bthread("Updatebranch create verification", function () {
  const e = waitForAnyUpdatebranchAdded();
  block(matchDeleteUpdatebranch(e.id, ANY), function () {
    verifyUpdatebranchExists(e.id);
  });
});

bthread("Updatebranch update verification", function () {
  const e = waitForAnyUpdatebranchUpdated();
  block(matchDeleteUpdatebranch(e.id, ANY), function () {
    verifyUpdatebranchUpdated(e.id);
  });
});

bthread("Updatebranch delete verification", function () {
  const e = waitForAnyUpdatebranchDeleted();
  block(matchAddUpdatebranch(e.id, ANY), function () {
    verifyUpdatebranchDoesNotExist(e.id);
  });
});

bthread("Usage create verification", function () {
  const e = waitForAnyUsageAdded();
  block(matchDeleteUsage(e.id, ANY), function () {
    verifyUsageExists(e.id);
  });
});

bthread("Usage update verification", function () {
  const e = waitForAnyUsageUpdated();
  block(matchDeleteUsage(e.id, ANY), function () {
    verifyUsageUpdated(e.id);
  });
});

bthread("Usage delete verification", function () {
  const e = waitForAnyUsageDeleted();
  block(matchAddUsage(e.id, ANY), function () {
    verifyUsageDoesNotExist(e.id);
  });
});

bthread("Usagebyrepository create verification", function () {
  const e = waitForAnyUsagebyrepositoryAdded();
  block(matchDeleteUsagebyrepository(e.id, ANY), function () {
    verifyUsagebyrepositoryExists(e.id);
  });
});

bthread("Usagebyrepository update verification", function () {
  const e = waitForAnyUsagebyrepositoryUpdated();
  block(matchDeleteUsagebyrepository(e.id, ANY), function () {
    verifyUsagebyrepositoryUpdated(e.id);
  });
});

bthread("Usagebyrepository delete verification", function () {
  const e = waitForAnyUsagebyrepositoryDeleted();
  block(matchAddUsagebyrepository(e.id, ANY), function () {
    verifyUsagebyrepositoryDoesNotExist(e.id);
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

bthread("Userstat create verification", function () {
  const e = waitForAnyUserstatAdded();
  block(matchDeleteUserstat(e.id, ANY), function () {
    verifyUserstatExists(e.id);
  });
});

bthread("Userstat update verification", function () {
  const e = waitForAnyUserstatUpdated();
  block(matchDeleteUserstat(e.id, ANY), function () {
    verifyUserstatUpdated(e.id);
  });
});

bthread("Userstat delete verification", function () {
  const e = waitForAnyUserstatDeleted();
  block(matchAddUserstat(e.id, ANY), function () {
    verifyUserstatDoesNotExist(e.id);
  });
});

bthread("Value create verification", function () {
  const e = waitForAnyValueAdded();
  block(matchDeleteValue(e.id, ANY), function () {
    verifyValueExists(e.id);
  });
});

bthread("Value update verification", function () {
  const e = waitForAnyValueUpdated();
  block(matchDeleteValue(e.id, ANY), function () {
    verifyValueUpdated(e.id);
  });
});

bthread("Value delete verification", function () {
  const e = waitForAnyValueDeleted();
  block(matchAddValue(e.id, ANY), function () {
    verifyValueDoesNotExist(e.id);
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

bthread("Variantanalys create verification", function () {
  const e = waitForAnyVariantanalysAdded();
  block(matchDeleteVariantanalys(e.id, ANY), function () {
    verifyVariantanalysExists(e.id);
  });
});

bthread("Variantanalys update verification", function () {
  const e = waitForAnyVariantanalysUpdated();
  block(matchDeleteVariantanalys(e.id, ANY), function () {
    verifyVariantanalysUpdated(e.id);
  });
});

bthread("Variantanalys delete verification", function () {
  const e = waitForAnyVariantanalysDeleted();
  block(matchAddVariantanalys(e.id, ANY), function () {
    verifyVariantanalysDoesNotExist(e.id);
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

bthread("View create verification", function () {
  const e = waitForAnyViewAdded();
  block(matchDeleteView(e.id, ANY), function () {
    verifyViewExists(e.id);
  });
});

bthread("View update verification", function () {
  const e = waitForAnyViewUpdated();
  block(matchDeleteView(e.id, ANY), function () {
    verifyViewUpdated(e.id);
  });
});

bthread("View delete verification", function () {
  const e = waitForAnyViewDeleted();
  block(matchAddView(e.id, ANY), function () {
    verifyViewDoesNotExist(e.id);
  });
});

bthread("Visibility create verification", function () {
  const e = waitForAnyVisibilityAdded();
  block(matchDeleteVisibility(e.id, ANY), function () {
    verifyVisibilityExists(e.id);
  });
});

bthread("Visibility update verification", function () {
  const e = waitForAnyVisibilityUpdated();
  block(matchDeleteVisibility(e.id, ANY), function () {
    verifyVisibilityUpdated(e.id);
  });
});

bthread("Visibility delete verification", function () {
  const e = waitForAnyVisibilityDeleted();
  block(matchAddVisibility(e.id, ANY), function () {
    verifyVisibilityDoesNotExist(e.id);
  });
});

bthread("Vulnerabilityalert create verification", function () {
  const e = waitForAnyVulnerabilityalertAdded();
  block(matchDeleteVulnerabilityalert(e.id, ANY), function () {
    verifyVulnerabilityalertExists(e.id);
  });
});

bthread("Vulnerabilityalert update verification", function () {
  const e = waitForAnyVulnerabilityalertUpdated();
  block(matchDeleteVulnerabilityalert(e.id, ANY), function () {
    verifyVulnerabilityalertUpdated(e.id);
  });
});

bthread("Vulnerabilityalert delete verification", function () {
  const e = waitForAnyVulnerabilityalertDeleted();
  block(matchAddVulnerabilityalert(e.id, ANY), function () {
    verifyVulnerabilityalertDoesNotExist(e.id);
  });
});

bthread("Workflow create verification", function () {
  const e = waitForAnyWorkflowAdded();
  block(matchDeleteWorkflow(e.id, ANY), function () {
    verifyWorkflowExists(e.id);
  });
});

bthread("Workflow update verification", function () {
  const e = waitForAnyWorkflowUpdated();
  block(matchDeleteWorkflow(e.id, ANY), function () {
    verifyWorkflowUpdated(e.id);
  });
});

bthread("Workflow delete verification", function () {
  const e = waitForAnyWorkflowDeleted();
  block(matchAddWorkflow(e.id, ANY), function () {
    verifyWorkflowDoesNotExist(e.id);
  });
});

bthread("Zen create verification", function () {
  const e = waitForAnyZenAdded();
  block(matchDeleteZen(e.id, ANY), function () {
    verifyZenExists(e.id);
  });
});

bthread("Zen update verification", function () {
  const e = waitForAnyZenUpdated();
  block(matchDeleteZen(e.id, ANY), function () {
    verifyZenUpdated(e.id);
  });
});

bthread("Zen delete verification", function () {
  const e = waitForAnyZenDeleted();
  block(matchAddZen(e.id, ANY), function () {
    verifyZenDoesNotExist(e.id);
  });
});

bthread("Zipball create verification", function () {
  const e = waitForAnyZipballAdded();
  block(matchDeleteZipball(e.id, ANY), function () {
    verifyZipballExists(e.id);
  });
});

bthread("Zipball update verification", function () {
  const e = waitForAnyZipballUpdated();
  block(matchDeleteZipball(e.id, ANY), function () {
    verifyZipballUpdated(e.id);
  });
});

bthread("Zipball delete verification", function () {
  const e = waitForAnyZipballDeleted();
  block(matchAddZipball(e.id, ANY), function () {
    verifyZipballDoesNotExist(e.id);
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


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Acceptedassignment", "Acces", "Accesstoken", "Account", "Action", "Activity", "Add", "Advisory", "Alert", "Analys", "Annotation", "Api", "App", "Application", "Appmanifest", "Approval", "Approve", "Archive", "Artifact", "Artifactandlogretention", "Asset", "Assignee", "Assignment", "Attach", "Attempt", "Attestation", "Author", "Autofix", "Autolink", "Automatedsecurityfixe", "Billing", "Blob", "Block", "Blockedby", "Blocking", "Branche", "Brancheswherehead", "Build", "Bulklist", "Cache", "Campaign", "Cancel", "Checkrun", "Checksuite", "Classroom", "Clone", "Code", "Codefrequency", "Codeowner", "Codeql", "Codescanning", "Codesecurity", "Codesecurityconfiguration", "Codesofconduct", "Codespace", "Collaborator", "Column", "Comment", "Commit", "Commitactivity", "Community", "Compare", "Config", "Configuration", "Conflict", "Content", "Context", "Contributor", "Conversion", "Copilot", "Credential", "Customization", "Cve", "Databas", "Default", "Defaultlevel", "Defaultsetup", "Deleterequest", "Delivery", "Dependabot", "Dependency", "Dependencygraph", "Deployment", "Deploymentbranchpolicy", "Deploymentprotectionrule", "Detach", "Devcontainer", "Digest", "Disable", "Discussion", "Dismissal", "Dispatche", "Docker", "Download", "Email", "Emoji", "Enable", "Enforceadmin", "Enterpris", "Environment", "Error", "Event", "Export", "Failedinvitation", "Feed", "Field", "File", "Follower", "Following", "Forcecancel", "Fork", "Forkprcontributorapproval", "Forkprworkflowsprivaterepo", "Generate", "Generatejitconfig", "Generatenote", "Gist", "Git", "Githubowned", "Gitignore", "Gpgkey", "Grade", "Grant", "Health", "History", "Hook", "Hostedrunner", "Hovercard", "Image", "Immutablereleas", "Import", "Insight", "Installation", "Installationrequest", "Instance", "Interactionlimit", "Invitation", "Issue", "Issuetype", "Item", "Job", "Key", "Label", "Language", "Largefile", "Latest", "Lf", "Licens", "License", "Limit", "Location", "Lock", "Log", "Machine", "Machinesize", "Markdown", "Marketplacelisting", "Marketplacepurchas", "Matchingref", "Member", "Membership", "Merge", "Mergeupstream", "Meta", "Metadata", "Metric", "Migration", "Milestone", "Move", "Network", "Networkconfiguration", "Networksetting", "New", "Notification", "Octocat", "Oidc", "Org", "Organization", "Organizationrole", "Organizationsecret", "Organizationvariable", "Outsidecollaborator", "Package", "Page", "Parent", "Participation", "Partner", "Path", "Patternconfiguration", "Pendingdeployment", "Permission", "Permissionscheck", "Personalaccesstoken", "Personalaccesstokenrequest", "Ping", "Plan", "Platform", "Popular", "Preference", "Premiumrequest", "Priority", "Privateregistry", "Privatevulnerabilityreporting", "Profile", "Project", "Projectsv2", "Property", "Protection", "Public", "Publicemail", "Publickey", "Publicmember", "Publish", "Pull", "Punchcard", "Pushprotectionbypass", "Ratelimit", "Raw", "Reaction", "Readme", "Receivedevent", "Ref", "Referrer", "Registrationtoken", "Releas", "Remove", "Removetoken", "Rename", "Reply", "Repo", "Report", "Repository", "Repositoryacces", "Repositoryinvitation", "Requestedreviewer", "Requiredpullrequestreview", "Requiredsignature", "Requiredstatuscheck", "Rerequest", "Rerun", "Rerunfailedjob", "Restore", "Restriction", "Review", "Revoke", "Routestat", "Rule", "Ruleset", "Rulesuite", "Run", "Runner", "Runnergroup", "Sarif", "Sbom", "Scanhistory", "Schema", "Scoped", "Search", "Seat", "Secret", "Secretscanning", "Securityadvisory", "Securitymanager", "Selectedaction", "Selectedteam", "Selecteduser", "Selfhostedrunner", "Setting", "Sharedstorage", "Snapshot", "Socialaccount", "Sshsigningkey", "Star", "Stargazer", "Starred", "Start", "Stat", "Statu", "Status", "Stop", "Storagerecord", "Stubbed", "Sub", "Subissue", "Subjectstat", "Subscriber", "Subscription", "Summarystat", "Suspended", "Tag", "Tarball", "Team", "Template", "Test", "Thread", "Timeline", "Timestat", "Timing", "Token", "Topic", "Traffic", "Transfer", "Tree", "Updatebranch", "Usage", "Usagebyrepository", "User", "Userstat", "Value", "Variable", "Variantanalys", "Version", "View", "Visibility", "Vulnerabilityalert", "Workflow", "Zen", "Zipball"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Acceptedassignment": {"add": "addAcceptedassignment", "update": "updateAcceptedassignment", "delete": "deleteAcceptedassignment"}, "Acces": {"add": "addAcces", "update": "updateAcces", "delete": "deleteAcces"}, "Accesstoken": {"add": "addAccesstoken", "update": "updateAccesstoken", "delete": "deleteAccesstoken"}, "Account": {"add": "addAccount", "update": "updateAccount", "delete": "deleteAccount"}, "Action": {"add": "addAction", "update": "updateAction", "delete": "deleteAction"}, "Activity": {"add": "addActivity", "update": "updateActivity", "delete": "deleteActivity"}, "Add": {"add": "addAdd", "update": "updateAdd", "delete": "deleteAdd"}, "Advisory": {"add": "addAdvisory", "update": "updateAdvisory", "delete": "deleteAdvisory"}, "Alert": {"add": "addAlert", "update": "updateAlert", "delete": "deleteAlert"}, "Analys": {"add": "addAnalys", "update": "updateAnalys", "delete": "deleteAnalys"}, "Annotation": {"add": "addAnnotation", "update": "updateAnnotation", "delete": "deleteAnnotation"}, "Api": {"add": "addApi", "update": "updateApi", "delete": "deleteApi"}, "App": {"add": "addApp", "update": "updateApp", "delete": "deleteApp"}, "Application": {"add": "addApplication", "update": "updateApplication", "delete": "deleteApplication"}, "Appmanifest": {"add": "addAppmanifest", "update": "updateAppmanifest", "delete": "deleteAppmanifest"}, "Approval": {"add": "addApproval", "update": "updateApproval", "delete": "deleteApproval"}, "Approve": {"add": "addApprove", "update": "updateApprove", "delete": "deleteApprove"}, "Archive": {"add": "addArchive", "update": "updateArchive", "delete": "deleteArchive"}, "Artifact": {"add": "addArtifact", "update": "updateArtifact", "delete": "deleteArtifact"}, "Artifactandlogretention": {"add": "addArtifactandlogretention", "update": "updateArtifactandlogretention", "delete": "deleteArtifactandlogretention"}, "Asset": {"add": "addAsset", "update": "updateAsset", "delete": "deleteAsset"}, "Assignee": {"add": "addAssignee", "update": "updateAssignee", "delete": "deleteAssignee"}, "Assignment": {"add": "addAssignment", "update": "updateAssignment", "delete": "deleteAssignment"}, "Attach": {"add": "addAttach", "update": "updateAttach", "delete": "deleteAttach"}, "Attempt": {"add": "addAttempt", "update": "updateAttempt", "delete": "deleteAttempt"}, "Attestation": {"add": "addAttestation", "update": "updateAttestation", "delete": "deleteAttestation"}, "Author": {"add": "addAuthor", "update": "updateAuthor", "delete": "deleteAuthor"}, "Autofix": {"add": "addAutofix", "update": "updateAutofix", "delete": "deleteAutofix"}, "Autolink": {"add": "addAutolink", "update": "updateAutolink", "delete": "deleteAutolink"}, "Automatedsecurityfixe": {"add": "addAutomatedsecurityfixe", "update": "updateAutomatedsecurityfixe", "delete": "deleteAutomatedsecurityfixe"}, "Billing": {"add": "addBilling", "update": "updateBilling", "delete": "deleteBilling"}, "Blob": {"add": "addBlob", "update": "updateBlob", "delete": "deleteBlob"}, "Block": {"add": "addBlock", "update": "updateBlock", "delete": "deleteBlock"}, "Blockedby": {"add": "addBlockedby", "update": "updateBlockedby", "delete": "deleteBlockedby"}, "Blocking": {"add": "addBlocking", "update": "updateBlocking", "delete": "deleteBlocking"}, "Branche": {"add": "addBranche", "update": "updateBranche", "delete": "deleteBranche"}, "Brancheswherehead": {"add": "addBrancheswherehead", "update": "updateBrancheswherehead", "delete": "deleteBrancheswherehead"}, "Build": {"add": "addBuild", "update": "updateBuild", "delete": "deleteBuild"}, "Bulklist": {"add": "addBulklist", "update": "updateBulklist", "delete": "deleteBulklist"}, "Cache": {"add": "addCache", "update": "updateCache", "delete": "deleteCache"}, "Campaign": {"add": "addCampaign", "update": "updateCampaign", "delete": "deleteCampaign"}, "Cancel": {"add": "addCancel", "update": "updateCancel", "delete": "deleteCancel"}, "Checkrun": {"add": "addCheckrun", "update": "updateCheckrun", "delete": "deleteCheckrun"}, "Checksuite": {"add": "addChecksuite", "update": "updateChecksuite", "delete": "deleteChecksuite"}, "Classroom": {"add": "addClassroom", "update": "updateClassroom", "delete": "deleteClassroom"}, "Clone": {"add": "addClone", "update": "updateClone", "delete": "deleteClone"}, "Code": {"add": "addCode", "update": "updateCode", "delete": "deleteCode"}, "Codefrequency": {"add": "addCodefrequency", "update": "updateCodefrequency", "delete": "deleteCodefrequency"}, "Codeowner": {"add": "addCodeowner", "update": "updateCodeowner", "delete": "deleteCodeowner"}, "Codeql": {"add": "addCodeql", "update": "updateCodeql", "delete": "deleteCodeql"}, "Codescanning": {"add": "addCodescanning", "update": "updateCodescanning", "delete": "deleteCodescanning"}, "Codesecurity": {"add": "addCodesecurity", "update": "updateCodesecurity", "delete": "deleteCodesecurity"}, "Codesecurityconfiguration": {"add": "addCodesecurityconfiguration", "update": "updateCodesecurityconfiguration", "delete": "deleteCodesecurityconfiguration"}, "Codesofconduct": {"add": "addCodesofconduct", "update": "updateCodesofconduct", "delete": "deleteCodesofconduct"}, "Codespace": {"add": "addCodespace", "update": "updateCodespace", "delete": "deleteCodespace"}, "Collaborator": {"add": "addCollaborator", "update": "updateCollaborator", "delete": "deleteCollaborator"}, "Column": {"add": "addColumn", "update": "updateColumn", "delete": "deleteColumn"}, "Comment": {"add": "addComment", "update": "updateComment", "delete": "deleteComment"}, "Commit": {"add": "addCommit", "update": "updateCommit", "delete": "deleteCommit"}, "Commitactivity": {"add": "addCommitactivity", "update": "updateCommitactivity", "delete": "deleteCommitactivity"}, "Community": {"add": "addCommunity", "update": "updateCommunity", "delete": "deleteCommunity"}, "Compare": {"add": "addCompare", "update": "updateCompare", "delete": "deleteCompare"}, "Config": {"add": "addConfig", "update": "updateConfig", "delete": "deleteConfig"}, "Configuration": {"add": "addConfiguration", "update": "updateConfiguration", "delete": "deleteConfiguration"}, "Conflict": {"add": "addConflict", "update": "updateConflict", "delete": "deleteConflict"}, "Content": {"add": "addContent", "update": "updateContent", "delete": "deleteContent"}, "Context": {"add": "addContext", "update": "updateContext", "delete": "deleteContext"}, "Contributor": {"add": "addContributor", "update": "updateContributor", "delete": "deleteContributor"}, "Conversion": {"add": "addConversion", "update": "updateConversion", "delete": "deleteConversion"}, "Copilot": {"add": "addCopilot", "update": "updateCopilot", "delete": "deleteCopilot"}, "Credential": {"add": "addCredential", "update": "updateCredential", "delete": "deleteCredential"}, "Customization": {"add": "addCustomization", "update": "updateCustomization", "delete": "deleteCustomization"}, "Cve": {"add": "addCve", "update": "updateCve", "delete": "deleteCve"}, "Databas": {"add": "addDatabas", "update": "updateDatabas", "delete": "deleteDatabas"}, "Default": {"add": "addDefault", "update": "updateDefault", "delete": "deleteDefault"}, "Defaultlevel": {"add": "addDefaultlevel", "update": "updateDefaultlevel", "delete": "deleteDefaultlevel"}, "Defaultsetup": {"add": "addDefaultsetup", "update": "updateDefaultsetup", "delete": "deleteDefaultsetup"}, "Deleterequest": {"add": "addDeleterequest", "update": "updateDeleterequest", "delete": "deleteDeleterequest"}, "Delivery": {"add": "addDelivery", "update": "updateDelivery", "delete": "deleteDelivery"}, "Dependabot": {"add": "addDependabot", "update": "updateDependabot", "delete": "deleteDependabot"}, "Dependency": {"add": "addDependency", "update": "updateDependency", "delete": "deleteDependency"}, "Dependencygraph": {"add": "addDependencygraph", "update": "updateDependencygraph", "delete": "deleteDependencygraph"}, "Deployment": {"add": "addDeployment", "update": "updateDeployment", "delete": "deleteDeployment"}, "Deploymentbranchpolicy": {"add": "addDeploymentbranchpolicy", "update": "updateDeploymentbranchpolicy", "delete": "deleteDeploymentbranchpolicy"}, "Deploymentprotectionrule": {"add": "addDeploymentprotectionrule", "update": "updateDeploymentprotectionrule", "delete": "deleteDeploymentprotectionrule"}, "Detach": {"add": "addDetach", "update": "updateDetach", "delete": "deleteDetach"}, "Devcontainer": {"add": "addDevcontainer", "update": "updateDevcontainer", "delete": "deleteDevcontainer"}, "Digest": {"add": "addDigest", "update": "updateDigest", "delete": "deleteDigest"}, "Disable": {"add": "addDisable", "update": "updateDisable", "delete": "deleteDisable"}, "Discussion": {"add": "addDiscussion", "update": "updateDiscussion", "delete": "deleteDiscussion"}, "Dismissal": {"add": "addDismissal", "update": "updateDismissal", "delete": "deleteDismissal"}, "Dispatche": {"add": "addDispatche", "update": "updateDispatche", "delete": "deleteDispatche"}, "Docker": {"add": "addDocker", "update": "updateDocker", "delete": "deleteDocker"}, "Download": {"add": "addDownload", "update": "updateDownload", "delete": "deleteDownload"}, "Email": {"add": "addEmail", "update": "updateEmail", "delete": "deleteEmail"}, "Emoji": {"add": "addEmoji", "update": "updateEmoji", "delete": "deleteEmoji"}, "Enable": {"add": "addEnable", "update": "updateEnable", "delete": "deleteEnable"}, "Enforceadmin": {"add": "addEnforceadmin", "update": "updateEnforceadmin", "delete": "deleteEnforceadmin"}, "Enterpris": {"add": "addEnterpris", "update": "updateEnterpris", "delete": "deleteEnterpris"}, "Environment": {"add": "addEnvironment", "update": "updateEnvironment", "delete": "deleteEnvironment"}, "Error": {"add": "addError", "update": "updateError", "delete": "deleteError"}, "Event": {"add": "addEvent", "update": "updateEvent", "delete": "deleteEvent"}, "Export": {"add": "addExport", "update": "updateExport", "delete": "deleteExport"}, "Failedinvitation": {"add": "addFailedinvitation", "update": "updateFailedinvitation", "delete": "deleteFailedinvitation"}, "Feed": {"add": "addFeed", "update": "updateFeed", "delete": "deleteFeed"}, "Field": {"add": "addField", "update": "updateField", "delete": "deleteField"}, "File": {"add": "addFile", "update": "updateFile", "delete": "deleteFile"}, "Follower": {"add": "addFollower", "update": "updateFollower", "delete": "deleteFollower"}, "Following": {"add": "addFollowing", "update": "updateFollowing", "delete": "deleteFollowing"}, "Forcecancel": {"add": "addForcecancel", "update": "updateForcecancel", "delete": "deleteForcecancel"}, "Fork": {"add": "addFork", "update": "updateFork", "delete": "deleteFork"}, "Forkprcontributorapproval": {"add": "addForkprcontributorapproval", "update": "updateForkprcontributorapproval", "delete": "deleteForkprcontributorapproval"}, "Forkprworkflowsprivaterepo": {"add": "addForkprworkflowsprivaterepo", "update": "updateForkprworkflowsprivaterepo", "delete": "deleteForkprworkflowsprivaterepo"}, "Generate": {"add": "addGenerate", "update": "updateGenerate", "delete": "deleteGenerate"}, "Generatejitconfig": {"add": "addGeneratejitconfig", "update": "updateGeneratejitconfig", "delete": "deleteGeneratejitconfig"}, "Generatenote": {"add": "addGeneratenote", "update": "updateGeneratenote", "delete": "deleteGeneratenote"}, "Gist": {"add": "addGist", "update": "updateGist", "delete": "deleteGist"}, "Git": {"add": "addGit", "update": "updateGit", "delete": "deleteGit"}, "Githubowned": {"add": "addGithubowned", "update": "updateGithubowned", "delete": "deleteGithubowned"}, "Gitignore": {"add": "addGitignore", "update": "updateGitignore", "delete": "deleteGitignore"}, "Gpgkey": {"add": "addGpgkey", "update": "updateGpgkey", "delete": "deleteGpgkey"}, "Grade": {"add": "addGrade", "update": "updateGrade", "delete": "deleteGrade"}, "Grant": {"add": "addGrant", "update": "updateGrant", "delete": "deleteGrant"}, "Health": {"add": "addHealth", "update": "updateHealth", "delete": "deleteHealth"}, "History": {"add": "addHistory", "update": "updateHistory", "delete": "deleteHistory"}, "Hook": {"add": "addHook", "update": "updateHook", "delete": "deleteHook"}, "Hostedrunner": {"add": "addHostedrunner", "update": "updateHostedrunner", "delete": "deleteHostedrunner"}, "Hovercard": {"add": "addHovercard", "update": "updateHovercard", "delete": "deleteHovercard"}, "Image": {"add": "addImage", "update": "updateImage", "delete": "deleteImage"}, "Immutablereleas": {"add": "addImmutablereleas", "update": "updateImmutablereleas", "delete": "deleteImmutablereleas"}, "Import": {"add": "addImport", "update": "updateImport", "delete": "deleteImport"}, "Insight": {"add": "addInsight", "update": "updateInsight", "delete": "deleteInsight"}, "Installation": {"add": "addInstallation", "update": "updateInstallation", "delete": "deleteInstallation"}, "Installationrequest": {"add": "addInstallationrequest", "update": "updateInstallationrequest", "delete": "deleteInstallationrequest"}, "Instance": {"add": "addInstance", "update": "updateInstance", "delete": "deleteInstance"}, "Interactionlimit": {"add": "addInteractionlimit", "update": "updateInteractionlimit", "delete": "deleteInteractionlimit"}, "Invitation": {"add": "addInvitation", "update": "updateInvitation", "delete": "deleteInvitation"}, "Issue": {"add": "addIssue", "update": "updateIssue", "delete": "deleteIssue"}, "Issuetype": {"add": "addIssuetype", "update": "updateIssuetype", "delete": "deleteIssuetype"}, "Item": {"add": "addItem", "update": "updateItem", "delete": "deleteItem"}, "Job": {"add": "addJob", "update": "updateJob", "delete": "deleteJob"}, "Key": {"add": "addKey", "update": "updateKey", "delete": "deleteKey"}, "Label": {"add": "addLabel", "update": "updateLabel", "delete": "deleteLabel"}, "Language": {"add": "addLanguage", "update": "updateLanguage", "delete": "deleteLanguage"}, "Largefile": {"add": "addLargefile", "update": "updateLargefile", "delete": "deleteLargefile"}, "Latest": {"add": "addLatest", "update": "updateLatest", "delete": "deleteLatest"}, "Lf": {"add": "addLf", "update": "updateLf", "delete": "deleteLf"}, "Licens": {"add": "addLicens", "update": "updateLicens", "delete": "deleteLicens"}, "License": {"add": "addLicense", "update": "updateLicense", "delete": "deleteLicense"}, "Limit": {"add": "addLimit", "update": "updateLimit", "delete": "deleteLimit"}, "Location": {"add": "addLocation", "update": "updateLocation", "delete": "deleteLocation"}, "Lock": {"add": "addLock", "update": "updateLock", "delete": "deleteLock"}, "Log": {"add": "addLog", "update": "updateLog", "delete": "deleteLog"}, "Machine": {"add": "addMachine", "update": "updateMachine", "delete": "deleteMachine"}, "Machinesize": {"add": "addMachinesize", "update": "updateMachinesize", "delete": "deleteMachinesize"}, "Markdown": {"add": "addMarkdown", "update": "updateMarkdown", "delete": "deleteMarkdown"}, "Marketplacelisting": {"add": "addMarketplacelisting", "update": "updateMarketplacelisting", "delete": "deleteMarketplacelisting"}, "Marketplacepurchas": {"add": "addMarketplacepurchas", "update": "updateMarketplacepurchas", "delete": "deleteMarketplacepurchas"}, "Matchingref": {"add": "addMatchingref", "update": "updateMatchingref", "delete": "deleteMatchingref"}, "Member": {"add": "addMember", "update": "updateMember", "delete": "deleteMember"}, "Membership": {"add": "addMembership", "update": "updateMembership", "delete": "deleteMembership"}, "Merge": {"add": "addMerge", "update": "updateMerge", "delete": "deleteMerge"}, "Mergeupstream": {"add": "addMergeupstream", "update": "updateMergeupstream", "delete": "deleteMergeupstream"}, "Meta": {"add": "addMeta", "update": "updateMeta", "delete": "deleteMeta"}, "Metadata": {"add": "addMetadata", "update": "updateMetadata", "delete": "deleteMetadata"}, "Metric": {"add": "addMetric", "update": "updateMetric", "delete": "deleteMetric"}, "Migration": {"add": "addMigration", "update": "updateMigration", "delete": "deleteMigration"}, "Milestone": {"add": "addMilestone", "update": "updateMilestone", "delete": "deleteMilestone"}, "Move": {"add": "addMove", "update": "updateMove", "delete": "deleteMove"}, "Network": {"add": "addNetwork", "update": "updateNetwork", "delete": "deleteNetwork"}, "Networkconfiguration": {"add": "addNetworkconfiguration", "update": "updateNetworkconfiguration", "delete": "deleteNetworkconfiguration"}, "Networksetting": {"add": "addNetworksetting", "update": "updateNetworksetting", "delete": "deleteNetworksetting"}, "New": {"add": "addNew", "update": "updateNew", "delete": "deleteNew"}, "Notification": {"add": "addNotification", "update": "updateNotification", "delete": "deleteNotification"}, "Octocat": {"add": "addOctocat", "update": "updateOctocat", "delete": "deleteOctocat"}, "Oidc": {"add": "addOidc", "update": "updateOidc", "delete": "deleteOidc"}, "Org": {"add": "addOrg", "update": "updateOrg", "delete": "deleteOrg"}, "Organization": {"add": "addOrganization", "update": "updateOrganization", "delete": "deleteOrganization"}, "Organizationrole": {"add": "addOrganizationrole", "update": "updateOrganizationrole", "delete": "deleteOrganizationrole"}, "Organizationsecret": {"add": "addOrganizationsecret", "update": "updateOrganizationsecret", "delete": "deleteOrganizationsecret"}, "Organizationvariable": {"add": "addOrganizationvariable", "update": "updateOrganizationvariable", "delete": "deleteOrganizationvariable"}, "Outsidecollaborator": {"add": "addOutsidecollaborator", "update": "updateOutsidecollaborator", "delete": "deleteOutsidecollaborator"}, "Package": {"add": "addPackage", "update": "updatePackage", "delete": "deletePackage"}, "Page": {"add": "addPage", "update": "updatePage", "delete": "deletePage"}, "Parent": {"add": "addParent", "update": "updateParent", "delete": "deleteParent"}, "Participation": {"add": "addParticipation", "update": "updateParticipation", "delete": "deleteParticipation"}, "Partner": {"add": "addPartner", "update": "updatePartner", "delete": "deletePartner"}, "Path": {"add": "addPath", "update": "updatePath", "delete": "deletePath"}, "Patternconfiguration": {"add": "addPatternconfiguration", "update": "updatePatternconfiguration", "delete": "deletePatternconfiguration"}, "Pendingdeployment": {"add": "addPendingdeployment", "update": "updatePendingdeployment", "delete": "deletePendingdeployment"}, "Permission": {"add": "addPermission", "update": "updatePermission", "delete": "deletePermission"}, "Permissionscheck": {"add": "addPermissionscheck", "update": "updatePermissionscheck", "delete": "deletePermissionscheck"}, "Personalaccesstoken": {"add": "addPersonalaccesstoken", "update": "updatePersonalaccesstoken", "delete": "deletePersonalaccesstoken"}, "Personalaccesstokenrequest": {"add": "addPersonalaccesstokenrequest", "update": "updatePersonalaccesstokenrequest", "delete": "deletePersonalaccesstokenrequest"}, "Ping": {"add": "addPing", "update": "updatePing", "delete": "deletePing"}, "Plan": {"add": "addPlan", "update": "updatePlan", "delete": "deletePlan"}, "Platform": {"add": "addPlatform", "update": "updatePlatform", "delete": "deletePlatform"}, "Popular": {"add": "addPopular", "update": "updatePopular", "delete": "deletePopular"}, "Preference": {"add": "addPreference", "update": "updatePreference", "delete": "deletePreference"}, "Premiumrequest": {"add": "addPremiumrequest", "update": "updatePremiumrequest", "delete": "deletePremiumrequest"}, "Priority": {"add": "addPriority", "update": "updatePriority", "delete": "deletePriority"}, "Privateregistry": {"add": "addPrivateregistry", "update": "updatePrivateregistry", "delete": "deletePrivateregistry"}, "Privatevulnerabilityreporting": {"add": "addPrivatevulnerabilityreporting", "update": "updatePrivatevulnerabilityreporting", "delete": "deletePrivatevulnerabilityreporting"}, "Profile": {"add": "addProfile", "update": "updateProfile", "delete": "deleteProfile"}, "Project": {"add": "addProject", "update": "updateProject", "delete": "deleteProject"}, "Projectsv2": {"add": "addProjectsv2", "update": "updateProjectsv2", "delete": "deleteProjectsv2"}, "Property": {"add": "addProperty", "update": "updateProperty", "delete": "deleteProperty"}, "Protection": {"add": "addProtection", "update": "updateProtection", "delete": "deleteProtection"}, "Public": {"add": "addPublic", "update": "updatePublic", "delete": "deletePublic"}, "Publicemail": {"add": "addPublicemail", "update": "updatePublicemail", "delete": "deletePublicemail"}, "Publickey": {"add": "addPublickey", "update": "updatePublickey", "delete": "deletePublickey"}, "Publicmember": {"add": "addPublicmember", "update": "updatePublicmember", "delete": "deletePublicmember"}, "Publish": {"add": "addPublish", "update": "updatePublish", "delete": "deletePublish"}, "Pull": {"add": "addPull", "update": "updatePull", "delete": "deletePull"}, "Punchcard": {"add": "addPunchcard", "update": "updatePunchcard", "delete": "deletePunchcard"}, "Pushprotectionbypass": {"add": "addPushprotectionbypass", "update": "updatePushprotectionbypass", "delete": "deletePushprotectionbypass"}, "Ratelimit": {"add": "addRatelimit", "update": "updateRatelimit", "delete": "deleteRatelimit"}, "Raw": {"add": "addRaw", "update": "updateRaw", "delete": "deleteRaw"}, "Reaction": {"add": "addReaction", "update": "updateReaction", "delete": "deleteReaction"}, "Readme": {"add": "addReadme", "update": "updateReadme", "delete": "deleteReadme"}, "Receivedevent": {"add": "addReceivedevent", "update": "updateReceivedevent", "delete": "deleteReceivedevent"}, "Ref": {"add": "addRef", "update": "updateRef", "delete": "deleteRef"}, "Referrer": {"add": "addReferrer", "update": "updateReferrer", "delete": "deleteReferrer"}, "Registrationtoken": {"add": "addRegistrationtoken", "update": "updateRegistrationtoken", "delete": "deleteRegistrationtoken"}, "Releas": {"add": "addReleas", "update": "updateReleas", "delete": "deleteReleas"}, "Remove": {"add": "addRemove", "update": "updateRemove", "delete": "deleteRemove"}, "Removetoken": {"add": "addRemovetoken", "update": "updateRemovetoken", "delete": "deleteRemovetoken"}, "Rename": {"add": "addRename", "update": "updateRename", "delete": "deleteRename"}, "Reply": {"add": "addReply", "update": "updateReply", "delete": "deleteReply"}, "Repo": {"add": "addRepo", "update": "updateRepo", "delete": "deleteRepo"}, "Report": {"add": "addReport", "update": "updateReport", "delete": "deleteReport"}, "Repository": {"add": "addRepository", "update": "updateRepository", "delete": "deleteRepository"}, "Repositoryacces": {"add": "addRepositoryacces", "update": "updateRepositoryacces", "delete": "deleteRepositoryacces"}, "Repositoryinvitation": {"add": "addRepositoryinvitation", "update": "updateRepositoryinvitation", "delete": "deleteRepositoryinvitation"}, "Requestedreviewer": {"add": "addRequestedreviewer", "update": "updateRequestedreviewer", "delete": "deleteRequestedreviewer"}, "Requiredpullrequestreview": {"add": "addRequiredpullrequestreview", "update": "updateRequiredpullrequestreview", "delete": "deleteRequiredpullrequestreview"}, "Requiredsignature": {"add": "addRequiredsignature", "update": "updateRequiredsignature", "delete": "deleteRequiredsignature"}, "Requiredstatuscheck": {"add": "addRequiredstatuscheck", "update": "updateRequiredstatuscheck", "delete": "deleteRequiredstatuscheck"}, "Rerequest": {"add": "addRerequest", "update": "updateRerequest", "delete": "deleteRerequest"}, "Rerun": {"add": "addRerun", "update": "updateRerun", "delete": "deleteRerun"}, "Rerunfailedjob": {"add": "addRerunfailedjob", "update": "updateRerunfailedjob", "delete": "deleteRerunfailedjob"}, "Restore": {"add": "addRestore", "update": "updateRestore", "delete": "deleteRestore"}, "Restriction": {"add": "addRestriction", "update": "updateRestriction", "delete": "deleteRestriction"}, "Review": {"add": "addReview", "update": "updateReview", "delete": "deleteReview"}, "Revoke": {"add": "addRevoke", "update": "updateRevoke", "delete": "deleteRevoke"}, "Routestat": {"add": "addRoutestat", "update": "updateRoutestat", "delete": "deleteRoutestat"}, "Rule": {"add": "addRule", "update": "updateRule", "delete": "deleteRule"}, "Ruleset": {"add": "addRuleset", "update": "updateRuleset", "delete": "deleteRuleset"}, "Rulesuite": {"add": "addRulesuite", "update": "updateRulesuite", "delete": "deleteRulesuite"}, "Run": {"add": "addRun", "update": "updateRun", "delete": "deleteRun"}, "Runner": {"add": "addRunner", "update": "updateRunner", "delete": "deleteRunner"}, "Runnergroup": {"add": "addRunnergroup", "update": "updateRunnergroup", "delete": "deleteRunnergroup"}, "Sarif": {"add": "addSarif", "update": "updateSarif", "delete": "deleteSarif"}, "Sbom": {"add": "addSbom", "update": "updateSbom", "delete": "deleteSbom"}, "Scanhistory": {"add": "addScanhistory", "update": "updateScanhistory", "delete": "deleteScanhistory"}, "Schema": {"add": "addSchema", "update": "updateSchema", "delete": "deleteSchema"}, "Scoped": {"add": "addScoped", "update": "updateScoped", "delete": "deleteScoped"}, "Search": {"add": "addSearch", "update": "updateSearch", "delete": "deleteSearch"}, "Seat": {"add": "addSeat", "update": "updateSeat", "delete": "deleteSeat"}, "Secret": {"add": "addSecret", "update": "updateSecret", "delete": "deleteSecret"}, "Secretscanning": {"add": "addSecretscanning", "update": "updateSecretscanning", "delete": "deleteSecretscanning"}, "Securityadvisory": {"add": "addSecurityadvisory", "update": "updateSecurityadvisory", "delete": "deleteSecurityadvisory"}, "Securitymanager": {"add": "addSecuritymanager", "update": "updateSecuritymanager", "delete": "deleteSecuritymanager"}, "Selectedaction": {"add": "addSelectedaction", "update": "updateSelectedaction", "delete": "deleteSelectedaction"}, "Selectedteam": {"add": "addSelectedteam", "update": "updateSelectedteam", "delete": "deleteSelectedteam"}, "Selecteduser": {"add": "addSelecteduser", "update": "updateSelecteduser", "delete": "deleteSelecteduser"}, "Selfhostedrunner": {"add": "addSelfhostedrunner", "update": "updateSelfhostedrunner", "delete": "deleteSelfhostedrunner"}, "Setting": {"add": "addSetting", "update": "updateSetting", "delete": "deleteSetting"}, "Sharedstorage": {"add": "addSharedstorage", "update": "updateSharedstorage", "delete": "deleteSharedstorage"}, "Snapshot": {"add": "addSnapshot", "update": "updateSnapshot", "delete": "deleteSnapshot"}, "Socialaccount": {"add": "addSocialaccount", "update": "updateSocialaccount", "delete": "deleteSocialaccount"}, "Sshsigningkey": {"add": "addSshsigningkey", "update": "updateSshsigningkey", "delete": "deleteSshsigningkey"}, "Star": {"add": "addStar", "update": "updateStar", "delete": "deleteStar"}, "Stargazer": {"add": "addStargazer", "update": "updateStargazer", "delete": "deleteStargazer"}, "Starred": {"add": "addStarred", "update": "updateStarred", "delete": "deleteStarred"}, "Start": {"add": "addStart", "update": "updateStart", "delete": "deleteStart"}, "Stat": {"add": "addStat", "update": "updateStat", "delete": "deleteStat"}, "Statu": {"add": "addStatu", "update": "updateStatu", "delete": "deleteStatu"}, "Status": {"add": "addStatus", "update": "updateStatus", "delete": "deleteStatus"}, "Stop": {"add": "addStop", "update": "updateStop", "delete": "deleteStop"}, "Storagerecord": {"add": "addStoragerecord", "update": "updateStoragerecord", "delete": "deleteStoragerecord"}, "Stubbed": {"add": "addStubbed", "update": "updateStubbed", "delete": "deleteStubbed"}, "Sub": {"add": "addSub", "update": "updateSub", "delete": "deleteSub"}, "Subissue": {"add": "addSubissue", "update": "updateSubissue", "delete": "deleteSubissue"}, "Subjectstat": {"add": "addSubjectstat", "update": "updateSubjectstat", "delete": "deleteSubjectstat"}, "Subscriber": {"add": "addSubscriber", "update": "updateSubscriber", "delete": "deleteSubscriber"}, "Subscription": {"add": "addSubscription", "update": "updateSubscription", "delete": "deleteSubscription"}, "Summarystat": {"add": "addSummarystat", "update": "updateSummarystat", "delete": "deleteSummarystat"}, "Suspended": {"add": "addSuspended", "update": "updateSuspended", "delete": "deleteSuspended"}, "Tag": {"add": "addTag", "update": "updateTag", "delete": "deleteTag"}, "Tarball": {"add": "addTarball", "update": "updateTarball", "delete": "deleteTarball"}, "Team": {"add": "addTeam", "update": "updateTeam", "delete": "deleteTeam"}, "Template": {"add": "addTemplate", "update": "updateTemplate", "delete": "deleteTemplate"}, "Test": {"add": "addTest", "update": "updateTest", "delete": "deleteTest"}, "Thread": {"add": "addThread", "update": "updateThread", "delete": "deleteThread"}, "Timeline": {"add": "addTimeline", "update": "updateTimeline", "delete": "deleteTimeline"}, "Timestat": {"add": "addTimestat", "update": "updateTimestat", "delete": "deleteTimestat"}, "Timing": {"add": "addTiming", "update": "updateTiming", "delete": "deleteTiming"}, "Token": {"add": "addToken", "update": "updateToken", "delete": "deleteToken"}, "Topic": {"add": "addTopic", "update": "updateTopic", "delete": "deleteTopic"}, "Traffic": {"add": "addTraffic", "update": "updateTraffic", "delete": "deleteTraffic"}, "Transfer": {"add": "addTransfer", "update": "updateTransfer", "delete": "deleteTransfer"}, "Tree": {"add": "addTree", "update": "updateTree", "delete": "deleteTree"}, "Updatebranch": {"add": "addUpdatebranch", "update": "updateUpdatebranch", "delete": "deleteUpdatebranch"}, "Usage": {"add": "addUsage", "update": "updateUsage", "delete": "deleteUsage"}, "Usagebyrepository": {"add": "addUsagebyrepository", "update": "updateUsagebyrepository", "delete": "deleteUsagebyrepository"}, "User": {"add": "addUser", "update": "updateUser", "delete": "deleteUser"}, "Userstat": {"add": "addUserstat", "update": "updateUserstat", "delete": "deleteUserstat"}, "Value": {"add": "addValue", "update": "updateValue", "delete": "deleteValue"}, "Variable": {"add": "addVariable", "update": "updateVariable", "delete": "deleteVariable"}, "Variantanalys": {"add": "addVariantanalys", "update": "updateVariantanalys", "delete": "deleteVariantanalys"}, "Version": {"add": "addVersion", "update": "updateVersion", "delete": "deleteVersion"}, "View": {"add": "addView", "update": "updateView", "delete": "deleteView"}, "Visibility": {"add": "addVisibility", "update": "updateVisibility", "delete": "deleteVisibility"}, "Vulnerabilityalert": {"add": "addVulnerabilityalert", "update": "updateVulnerabilityalert", "delete": "deleteVulnerabilityalert"}, "Workflow": {"add": "addWorkflow", "update": "updateWorkflow", "delete": "deleteWorkflow"}, "Zen": {"add": "addZen", "update": "updateZen", "delete": "deleteZen"}, "Zipball": {"add": "addZipball", "update": "updateZipball", "delete": "deleteZipball"}};
globalThis.__DSL_ARG0__ = {"Acceptedassignment": "id", "Acces": "id", "Accesstoken": "id", "Account": "id", "Action": "id", "Activity": "id", "Add": "id", "Advisory": "id", "Alert": "id", "Analys": "id", "Annotation": "id", "Api": "id", "App": "id", "Application": "id", "Appmanifest": "id", "Approval": "id", "Approve": "id", "Archive": "id", "Artifact": "id", "Artifactandlogretention": "id", "Asset": "id", "Assignee": "id", "Assignment": "id", "Attach": "id", "Attempt": "id", "Attestation": "id", "Author": "id", "Autofix": "id", "Autolink": "id", "Automatedsecurityfixe": "id", "Billing": "id", "Blob": "id", "Block": "id", "Blockedby": "id", "Blocking": "id", "Branche": "id", "Brancheswherehead": "id", "Build": "id", "Bulklist": "id", "Cache": "id", "Campaign": "id", "Cancel": "id", "Checkrun": "id", "Checksuite": "id", "Classroom": "id", "Clone": "id", "Code": "id", "Codefrequency": "id", "Codeowner": "id", "Codeql": "id", "Codescanning": "id", "Codesecurity": "id", "Codesecurityconfiguration": "id", "Codesofconduct": "id", "Codespace": "id", "Collaborator": "id", "Column": "id", "Comment": "id", "Commit": "id", "Commitactivity": "id", "Community": "id", "Compare": "id", "Config": "id", "Configuration": "id", "Conflict": "id", "Content": "id", "Context": "id", "Contributor": "id", "Conversion": "id", "Copilot": "id", "Credential": "id", "Customization": "id", "Cve": "id", "Databas": "id", "Default": "id", "Defaultlevel": "id", "Defaultsetup": "id", "Deleterequest": "id", "Delivery": "id", "Dependabot": "id", "Dependency": "id", "Dependencygraph": "id", "Deployment": "id", "Deploymentbranchpolicy": "id", "Deploymentprotectionrule": "id", "Detach": "id", "Devcontainer": "id", "Digest": "id", "Disable": "id", "Discussion": "id", "Dismissal": "id", "Dispatche": "id", "Docker": "id", "Download": "id", "Email": "id", "Emoji": "id", "Enable": "id", "Enforceadmin": "id", "Enterpris": "id", "Environment": "id", "Error": "id", "Event": "id", "Export": "id", "Failedinvitation": "id", "Feed": "id", "Field": "id", "File": "id", "Follower": "id", "Following": "id", "Forcecancel": "id", "Fork": "id", "Forkprcontributorapproval": "id", "Forkprworkflowsprivaterepo": "id", "Generate": "id", "Generatejitconfig": "id", "Generatenote": "id", "Gist": "id", "Git": "id", "Githubowned": "id", "Gitignore": "id", "Gpgkey": "id", "Grade": "id", "Grant": "id", "Health": "id", "History": "id", "Hook": "id", "Hostedrunner": "id", "Hovercard": "id", "Image": "id", "Immutablereleas": "id", "Import": "id", "Insight": "id", "Installation": "id", "Installationrequest": "id", "Instance": "id", "Interactionlimit": "id", "Invitation": "id", "Issue": "id", "Issuetype": "id", "Item": "id", "Job": "id", "Key": "id", "Label": "id", "Language": "id", "Largefile": "id", "Latest": "id", "Lf": "id", "Licens": "id", "License": "id", "Limit": "id", "Location": "id", "Lock": "id", "Log": "id", "Machine": "id", "Machinesize": "id", "Markdown": "id", "Marketplacelisting": "id", "Marketplacepurchas": "id", "Matchingref": "id", "Member": "id", "Membership": "id", "Merge": "id", "Mergeupstream": "id", "Meta": "id", "Metadata": "id", "Metric": "id", "Migration": "id", "Milestone": "id", "Move": "id", "Network": "id", "Networkconfiguration": "id", "Networksetting": "id", "New": "id", "Notification": "id", "Octocat": "id", "Oidc": "id", "Org": "id", "Organization": "id", "Organizationrole": "id", "Organizationsecret": "id", "Organizationvariable": "id", "Outsidecollaborator": "id", "Package": "id", "Page": "id", "Parent": "id", "Participation": "id", "Partner": "id", "Path": "id", "Patternconfiguration": "id", "Pendingdeployment": "id", "Permission": "id", "Permissionscheck": "id", "Personalaccesstoken": "id", "Personalaccesstokenrequest": "id", "Ping": "id", "Plan": "id", "Platform": "id", "Popular": "id", "Preference": "id", "Premiumrequest": "id", "Priority": "id", "Privateregistry": "id", "Privatevulnerabilityreporting": "id", "Profile": "id", "Project": "id", "Projectsv2": "id", "Property": "id", "Protection": "id", "Public": "id", "Publicemail": "id", "Publickey": "id", "Publicmember": "id", "Publish": "id", "Pull": "id", "Punchcard": "id", "Pushprotectionbypass": "id", "Ratelimit": "id", "Raw": "id", "Reaction": "id", "Readme": "id", "Receivedevent": "id", "Ref": "id", "Referrer": "id", "Registrationtoken": "id", "Releas": "id", "Remove": "id", "Removetoken": "id", "Rename": "id", "Reply": "id", "Repo": "id", "Report": "id", "Repository": "id", "Repositoryacces": "id", "Repositoryinvitation": "id", "Requestedreviewer": "id", "Requiredpullrequestreview": "id", "Requiredsignature": "id", "Requiredstatuscheck": "id", "Rerequest": "id", "Rerun": "id", "Rerunfailedjob": "id", "Restore": "id", "Restriction": "id", "Review": "id", "Revoke": "id", "Routestat": "id", "Rule": "id", "Ruleset": "id", "Rulesuite": "id", "Run": "id", "Runner": "id", "Runnergroup": "id", "Sarif": "id", "Sbom": "id", "Scanhistory": "id", "Schema": "id", "Scoped": "id", "Search": "id", "Seat": "id", "Secret": "id", "Secretscanning": "id", "Securityadvisory": "id", "Securitymanager": "id", "Selectedaction": "id", "Selectedteam": "id", "Selecteduser": "id", "Selfhostedrunner": "id", "Setting": "id", "Sharedstorage": "id", "Snapshot": "id", "Socialaccount": "id", "Sshsigningkey": "id", "Star": "id", "Stargazer": "id", "Starred": "id", "Start": "id", "Stat": "id", "Statu": "id", "Status": "id", "Stop": "id", "Storagerecord": "id", "Stubbed": "id", "Sub": "id", "Subissue": "id", "Subjectstat": "id", "Subscriber": "id", "Subscription": "id", "Summarystat": "id", "Suspended": "id", "Tag": "id", "Tarball": "id", "Team": "id", "Template": "id", "Test": "id", "Thread": "id", "Timeline": "id", "Timestat": "id", "Timing": "id", "Token": "id", "Topic": "id", "Traffic": "id", "Transfer": "id", "Tree": "id", "Updatebranch": "id", "Usage": "id", "Usagebyrepository": "id", "User": "id", "Userstat": "id", "Value": "id", "Variable": "id", "Variantanalys": "id", "Version": "id", "View": "id", "Visibility": "id", "Vulnerabilityalert": "id", "Workflow": "id", "Zen": "id", "Zipball": "id"};


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
