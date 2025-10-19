// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: github
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
});

bthread("AccesLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAcces(x.id);
  updateAcces(x.id);
  updateAcces(x.id);
  verifyAccesExists(x.id);
  verifyAccesUpdated(x.id);
});

bthread("AccesstokenLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccesstoken(x.id);
  updateAccesstoken(x.id);
  updateAccesstoken(x.id);
  verifyAccesstokenExists(x.id);
  verifyAccesstokenUpdated(x.id);
});

bthread("AccountLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccount(x.id);
  updateAccount(x.id);
  updateAccount(x.id);
  verifyAccountExists(x.id);
  verifyAccountUpdated(x.id);
});

bthread("ActionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAction(x.id);
  updateAction(x.id);
  updateAction(x.id);
  verifyActionExists(x.id);
  verifyActionUpdated(x.id);
});

bthread("ActivityLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addActivity(x.id);
  updateActivity(x.id);
  updateActivity(x.id);
  verifyActivityExists(x.id);
  verifyActivityUpdated(x.id);
});

bthread("AddLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdd(x.id);
  updateAdd(x.id);
  updateAdd(x.id);
  verifyAddExists(x.id);
  verifyAddUpdated(x.id);
});

bthread("AdvisoryLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdvisory(x.id);
  updateAdvisory(x.id);
  updateAdvisory(x.id);
  verifyAdvisoryExists(x.id);
  verifyAdvisoryUpdated(x.id);
});

bthread("AlertLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAlert(x.id);
  updateAlert(x.id);
  updateAlert(x.id);
  verifyAlertExists(x.id);
  verifyAlertUpdated(x.id);
});

bthread("AnalysLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAnalys(x.id);
  updateAnalys(x.id);
  updateAnalys(x.id);
  verifyAnalysExists(x.id);
  verifyAnalysUpdated(x.id);
});

bthread("AnnotationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAnnotation(x.id);
  updateAnnotation(x.id);
  updateAnnotation(x.id);
  verifyAnnotationExists(x.id);
  verifyAnnotationUpdated(x.id);
});

bthread("ApiLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApi(x.id);
  updateApi(x.id);
  updateApi(x.id);
  verifyApiExists(x.id);
  verifyApiUpdated(x.id);
});

bthread("AppLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApp(x.id);
  updateApp(x.id);
  updateApp(x.id);
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
});

bthread("ApplicationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApplication(x.id);
  updateApplication(x.id);
  updateApplication(x.id);
  verifyApplicationExists(x.id);
  verifyApplicationUpdated(x.id);
});

bthread("AppmanifestLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAppmanifest(x.id);
  updateAppmanifest(x.id);
  updateAppmanifest(x.id);
  verifyAppmanifestExists(x.id);
  verifyAppmanifestUpdated(x.id);
});

bthread("ApprovalLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApproval(x.id);
  updateApproval(x.id);
  updateApproval(x.id);
  verifyApprovalExists(x.id);
  verifyApprovalUpdated(x.id);
});

bthread("ApproveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApprove(x.id);
  updateApprove(x.id);
  updateApprove(x.id);
  verifyApproveExists(x.id);
  verifyApproveUpdated(x.id);
});

bthread("ArchiveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArchive(x.id);
  updateArchive(x.id);
  updateArchive(x.id);
  verifyArchiveExists(x.id);
  verifyArchiveUpdated(x.id);
});

bthread("ArtifactLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArtifact(x.id);
  updateArtifact(x.id);
  updateArtifact(x.id);
  verifyArtifactExists(x.id);
  verifyArtifactUpdated(x.id);
});

bthread("ArtifactandlogretentionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addArtifactandlogretention(x.id);
  updateArtifactandlogretention(x.id);
  updateArtifactandlogretention(x.id);
  verifyArtifactandlogretentionExists(x.id);
  verifyArtifactandlogretentionUpdated(x.id);
});

bthread("AssetLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAsset(x.id);
  updateAsset(x.id);
  updateAsset(x.id);
  verifyAssetExists(x.id);
  verifyAssetUpdated(x.id);
});

bthread("AssigneeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignee(x.id);
  updateAssignee(x.id);
  updateAssignee(x.id);
  verifyAssigneeExists(x.id);
  verifyAssigneeUpdated(x.id);
});

bthread("AssignmentLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignment(x.id);
  updateAssignment(x.id);
  updateAssignment(x.id);
  verifyAssignmentExists(x.id);
  verifyAssignmentUpdated(x.id);
});

bthread("AttachLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttach(x.id);
  updateAttach(x.id);
  updateAttach(x.id);
  verifyAttachExists(x.id);
  verifyAttachUpdated(x.id);
});

bthread("AttemptLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttempt(x.id);
  updateAttempt(x.id);
  updateAttempt(x.id);
  verifyAttemptExists(x.id);
  verifyAttemptUpdated(x.id);
});

bthread("AttestationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttestation(x.id);
  updateAttestation(x.id);
  updateAttestation(x.id);
  verifyAttestationExists(x.id);
  verifyAttestationUpdated(x.id);
});

bthread("AuthorLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthor(x.id);
  updateAuthor(x.id);
  updateAuthor(x.id);
  verifyAuthorExists(x.id);
  verifyAuthorUpdated(x.id);
});

bthread("AutofixLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutofix(x.id);
  updateAutofix(x.id);
  updateAutofix(x.id);
  verifyAutofixExists(x.id);
  verifyAutofixUpdated(x.id);
});

bthread("AutolinkLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutolink(x.id);
  updateAutolink(x.id);
  updateAutolink(x.id);
  verifyAutolinkExists(x.id);
  verifyAutolinkUpdated(x.id);
});

bthread("AutomatedsecurityfixeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutomatedsecurityfixe(x.id);
  updateAutomatedsecurityfixe(x.id);
  updateAutomatedsecurityfixe(x.id);
  verifyAutomatedsecurityfixeExists(x.id);
  verifyAutomatedsecurityfixeUpdated(x.id);
});

bthread("BillingLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBilling(x.id);
  updateBilling(x.id);
  updateBilling(x.id);
  verifyBillingExists(x.id);
  verifyBillingUpdated(x.id);
});

bthread("BlobLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlob(x.id);
  updateBlob(x.id);
  updateBlob(x.id);
  verifyBlobExists(x.id);
  verifyBlobUpdated(x.id);
});

bthread("BlockLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlock(x.id);
  updateBlock(x.id);
  updateBlock(x.id);
  verifyBlockExists(x.id);
  verifyBlockUpdated(x.id);
});

bthread("BlockedbyLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlockedby(x.id);
  updateBlockedby(x.id);
  updateBlockedby(x.id);
  verifyBlockedbyExists(x.id);
  verifyBlockedbyUpdated(x.id);
});

bthread("BlockingLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBlocking(x.id);
  updateBlocking(x.id);
  updateBlocking(x.id);
  verifyBlockingExists(x.id);
  verifyBlockingUpdated(x.id);
});

bthread("BrancheLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBranche(x.id);
  updateBranche(x.id);
  updateBranche(x.id);
  verifyBrancheExists(x.id);
  verifyBrancheUpdated(x.id);
});

bthread("BrancheswhereheadLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBrancheswherehead(x.id);
  updateBrancheswherehead(x.id);
  updateBrancheswherehead(x.id);
  verifyBrancheswhereheadExists(x.id);
  verifyBrancheswhereheadUpdated(x.id);
});

bthread("BuildLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBuild(x.id);
  updateBuild(x.id);
  updateBuild(x.id);
  verifyBuildExists(x.id);
  verifyBuildUpdated(x.id);
});

bthread("BulklistLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBulklist(x.id);
  updateBulklist(x.id);
  updateBulklist(x.id);
  verifyBulklistExists(x.id);
  verifyBulklistUpdated(x.id);
});

bthread("CacheLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCache(x.id);
  updateCache(x.id);
  updateCache(x.id);
  verifyCacheExists(x.id);
  verifyCacheUpdated(x.id);
});

bthread("CampaignLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCampaign(x.id);
  updateCampaign(x.id);
  updateCampaign(x.id);
  verifyCampaignExists(x.id);
  verifyCampaignUpdated(x.id);
});

bthread("CancelLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCancel(x.id);
  updateCancel(x.id);
  updateCancel(x.id);
  verifyCancelExists(x.id);
  verifyCancelUpdated(x.id);
});

bthread("CheckrunLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCheckrun(x.id);
  updateCheckrun(x.id);
  updateCheckrun(x.id);
  verifyCheckrunExists(x.id);
  verifyCheckrunUpdated(x.id);
});

bthread("ChecksuiteLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChecksuite(x.id);
  updateChecksuite(x.id);
  updateChecksuite(x.id);
  verifyChecksuiteExists(x.id);
  verifyChecksuiteUpdated(x.id);
});

bthread("ClassroomLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClassroom(x.id);
  updateClassroom(x.id);
  updateClassroom(x.id);
  verifyClassroomExists(x.id);
  verifyClassroomUpdated(x.id);
});

bthread("CloneLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClone(x.id);
  updateClone(x.id);
  updateClone(x.id);
  verifyCloneExists(x.id);
  verifyCloneUpdated(x.id);
});

bthread("CodeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCode(x.id);
  updateCode(x.id);
  updateCode(x.id);
  verifyCodeExists(x.id);
  verifyCodeUpdated(x.id);
});

bthread("CodefrequencyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodefrequency(x.id);
  updateCodefrequency(x.id);
  updateCodefrequency(x.id);
  verifyCodefrequencyExists(x.id);
  verifyCodefrequencyUpdated(x.id);
});

bthread("CodeownerLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodeowner(x.id);
  updateCodeowner(x.id);
  updateCodeowner(x.id);
  verifyCodeownerExists(x.id);
  verifyCodeownerUpdated(x.id);
});

bthread("CodeqlLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodeql(x.id);
  updateCodeql(x.id);
  updateCodeql(x.id);
  verifyCodeqlExists(x.id);
  verifyCodeqlUpdated(x.id);
});

bthread("CodescanningLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodescanning(x.id);
  updateCodescanning(x.id);
  updateCodescanning(x.id);
  verifyCodescanningExists(x.id);
  verifyCodescanningUpdated(x.id);
});

bthread("CodesecurityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodesecurity(x.id);
  updateCodesecurity(x.id);
  updateCodesecurity(x.id);
  verifyCodesecurityExists(x.id);
  verifyCodesecurityUpdated(x.id);
});

bthread("CodesecurityconfigurationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodesecurityconfiguration(x.id);
  updateCodesecurityconfiguration(x.id);
  updateCodesecurityconfiguration(x.id);
  verifyCodesecurityconfigurationExists(x.id);
  verifyCodesecurityconfigurationUpdated(x.id);
});

bthread("CodesofconductLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodesofconduct(x.id);
  updateCodesofconduct(x.id);
  updateCodesofconduct(x.id);
  verifyCodesofconductExists(x.id);
  verifyCodesofconductUpdated(x.id);
});

bthread("CodespaceLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCodespace(x.id);
  updateCodespace(x.id);
  updateCodespace(x.id);
  verifyCodespaceExists(x.id);
  verifyCodespaceUpdated(x.id);
});

bthread("CollaboratorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCollaborator(x.id);
  updateCollaborator(x.id);
  updateCollaborator(x.id);
  verifyCollaboratorExists(x.id);
  verifyCollaboratorUpdated(x.id);
});

bthread("ColumnLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addColumn(x.id);
  updateColumn(x.id);
  updateColumn(x.id);
  verifyColumnExists(x.id);
  verifyColumnUpdated(x.id);
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComment(x.id);
  updateComment(x.id);
  updateComment(x.id);
  verifyCommentExists(x.id);
  verifyCommentUpdated(x.id);
});

bthread("CommitLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCommit(x.id);
  updateCommit(x.id);
  updateCommit(x.id);
  verifyCommitExists(x.id);
  verifyCommitUpdated(x.id);
});

bthread("CommitactivityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCommitactivity(x.id);
  updateCommitactivity(x.id);
  updateCommitactivity(x.id);
  verifyCommitactivityExists(x.id);
  verifyCommitactivityUpdated(x.id);
});

bthread("CommunityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCommunity(x.id);
  updateCommunity(x.id);
  updateCommunity(x.id);
  verifyCommunityExists(x.id);
  verifyCommunityUpdated(x.id);
});

bthread("CompareLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCompare(x.id);
  updateCompare(x.id);
  updateCompare(x.id);
  verifyCompareExists(x.id);
  verifyCompareUpdated(x.id);
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
});

bthread("ConfigurationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfiguration(x.id);
  updateConfiguration(x.id);
  updateConfiguration(x.id);
  verifyConfigurationExists(x.id);
  verifyConfigurationUpdated(x.id);
});

bthread("ConflictLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConflict(x.id);
  updateConflict(x.id);
  updateConflict(x.id);
  verifyConflictExists(x.id);
  verifyConflictUpdated(x.id);
});

bthread("ContentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContent(x.id);
  updateContent(x.id);
  updateContent(x.id);
  verifyContentExists(x.id);
  verifyContentUpdated(x.id);
});

bthread("ContextLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContext(x.id);
  updateContext(x.id);
  updateContext(x.id);
  verifyContextExists(x.id);
  verifyContextUpdated(x.id);
});

bthread("ContributorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addContributor(x.id);
  updateContributor(x.id);
  updateContributor(x.id);
  verifyContributorExists(x.id);
  verifyContributorUpdated(x.id);
});

bthread("ConversionLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConversion(x.id);
  updateConversion(x.id);
  updateConversion(x.id);
  verifyConversionExists(x.id);
  verifyConversionUpdated(x.id);
});

bthread("CopilotLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCopilot(x.id);
  updateCopilot(x.id);
  updateCopilot(x.id);
  verifyCopilotExists(x.id);
  verifyCopilotUpdated(x.id);
});

bthread("CredentialLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredential(x.id);
  updateCredential(x.id);
  updateCredential(x.id);
  verifyCredentialExists(x.id);
  verifyCredentialUpdated(x.id);
});

bthread("CustomizationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomization(x.id);
  updateCustomization(x.id);
  updateCustomization(x.id);
  verifyCustomizationExists(x.id);
  verifyCustomizationUpdated(x.id);
});

bthread("CveLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCve(x.id);
  updateCve(x.id);
  updateCve(x.id);
  verifyCveExists(x.id);
  verifyCveUpdated(x.id);
});

bthread("DatabasLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDatabas(x.id);
  updateDatabas(x.id);
  updateDatabas(x.id);
  verifyDatabasExists(x.id);
  verifyDatabasUpdated(x.id);
});

bthread("DefaultLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefault(x.id);
  updateDefault(x.id);
  updateDefault(x.id);
  verifyDefaultExists(x.id);
  verifyDefaultUpdated(x.id);
});

bthread("DefaultlevelLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultlevel(x.id);
  updateDefaultlevel(x.id);
  updateDefaultlevel(x.id);
  verifyDefaultlevelExists(x.id);
  verifyDefaultlevelUpdated(x.id);
});

bthread("DefaultsetupLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultsetup(x.id);
  updateDefaultsetup(x.id);
  updateDefaultsetup(x.id);
  verifyDefaultsetupExists(x.id);
  verifyDefaultsetupUpdated(x.id);
});

bthread("DeleterequestLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeleterequest(x.id);
  updateDeleterequest(x.id);
  updateDeleterequest(x.id);
  verifyDeleterequestExists(x.id);
  verifyDeleterequestUpdated(x.id);
});

bthread("DeliveryLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDelivery(x.id);
  updateDelivery(x.id);
  updateDelivery(x.id);
  verifyDeliveryExists(x.id);
  verifyDeliveryUpdated(x.id);
});

bthread("DependabotLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependabot(x.id);
  updateDependabot(x.id);
  updateDependabot(x.id);
  verifyDependabotExists(x.id);
  verifyDependabotUpdated(x.id);
});

bthread("DependencyLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependency(x.id);
  updateDependency(x.id);
  updateDependency(x.id);
  verifyDependencyExists(x.id);
  verifyDependencyUpdated(x.id);
});

bthread("DependencygraphLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDependencygraph(x.id);
  updateDependencygraph(x.id);
  updateDependencygraph(x.id);
  verifyDependencygraphExists(x.id);
  verifyDependencygraphUpdated(x.id);
});

bthread("DeploymentLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeployment(x.id);
  updateDeployment(x.id);
  updateDeployment(x.id);
  verifyDeploymentExists(x.id);
  verifyDeploymentUpdated(x.id);
});

bthread("DeploymentbranchpolicyLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeploymentbranchpolicy(x.id);
  updateDeploymentbranchpolicy(x.id);
  updateDeploymentbranchpolicy(x.id);
  verifyDeploymentbranchpolicyExists(x.id);
  verifyDeploymentbranchpolicyUpdated(x.id);
});

bthread("DeploymentprotectionruleLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeploymentprotectionrule(x.id);
  updateDeploymentprotectionrule(x.id);
  updateDeploymentprotectionrule(x.id);
  verifyDeploymentprotectionruleExists(x.id);
  verifyDeploymentprotectionruleUpdated(x.id);
});

bthread("DetachLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDetach(x.id);
  updateDetach(x.id);
  updateDetach(x.id);
  verifyDetachExists(x.id);
  verifyDetachUpdated(x.id);
});

bthread("DevcontainerLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDevcontainer(x.id);
  updateDevcontainer(x.id);
  updateDevcontainer(x.id);
  verifyDevcontainerExists(x.id);
  verifyDevcontainerUpdated(x.id);
});

bthread("DigestLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDigest(x.id);
  updateDigest(x.id);
  updateDigest(x.id);
  verifyDigestExists(x.id);
  verifyDigestUpdated(x.id);
});

bthread("DisableLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisable(x.id);
  updateDisable(x.id);
  updateDisable(x.id);
  verifyDisableExists(x.id);
  verifyDisableUpdated(x.id);
});

bthread("DiscussionLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDiscussion(x.id);
  updateDiscussion(x.id);
  updateDiscussion(x.id);
  verifyDiscussionExists(x.id);
  verifyDiscussionUpdated(x.id);
});

bthread("DismissalLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDismissal(x.id);
  updateDismissal(x.id);
  updateDismissal(x.id);
  verifyDismissalExists(x.id);
  verifyDismissalUpdated(x.id);
});

bthread("DispatcheLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDispatche(x.id);
  updateDispatche(x.id);
  updateDispatche(x.id);
  verifyDispatcheExists(x.id);
  verifyDispatcheUpdated(x.id);
});

bthread("DockerLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDocker(x.id);
  updateDocker(x.id);
  updateDocker(x.id);
  verifyDockerExists(x.id);
  verifyDockerUpdated(x.id);
});

bthread("DownloadLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDownload(x.id);
  updateDownload(x.id);
  updateDownload(x.id);
  verifyDownloadExists(x.id);
  verifyDownloadUpdated(x.id);
});

bthread("EmailLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmail(x.id);
  updateEmail(x.id);
  updateEmail(x.id);
  verifyEmailExists(x.id);
  verifyEmailUpdated(x.id);
});

bthread("EmojiLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEmoji(x.id);
  updateEmoji(x.id);
  updateEmoji(x.id);
  verifyEmojiExists(x.id);
  verifyEmojiUpdated(x.id);
});

bthread("EnableLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnable(x.id);
  updateEnable(x.id);
  updateEnable(x.id);
  verifyEnableExists(x.id);
  verifyEnableUpdated(x.id);
});

bthread("EnforceadminLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnforceadmin(x.id);
  updateEnforceadmin(x.id);
  updateEnforceadmin(x.id);
  verifyEnforceadminExists(x.id);
  verifyEnforceadminUpdated(x.id);
});

bthread("EnterprisLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnterpris(x.id);
  updateEnterpris(x.id);
  updateEnterpris(x.id);
  verifyEnterprisExists(x.id);
  verifyEnterprisUpdated(x.id);
});

bthread("EnvironmentLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnvironment(x.id);
  updateEnvironment(x.id);
  updateEnvironment(x.id);
  verifyEnvironmentExists(x.id);
  verifyEnvironmentUpdated(x.id);
});

bthread("ErrorLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addError(x.id);
  updateError(x.id);
  updateError(x.id);
  verifyErrorExists(x.id);
  verifyErrorUpdated(x.id);
});

bthread("EventLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvent(x.id);
  updateEvent(x.id);
  updateEvent(x.id);
  verifyEventExists(x.id);
  verifyEventUpdated(x.id);
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExport(x.id);
  updateExport(x.id);
  updateExport(x.id);
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
});

bthread("FailedinvitationLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFailedinvitation(x.id);
  updateFailedinvitation(x.id);
  updateFailedinvitation(x.id);
  verifyFailedinvitationExists(x.id);
  verifyFailedinvitationUpdated(x.id);
});

bthread("FeedLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFeed(x.id);
  updateFeed(x.id);
  updateFeed(x.id);
  verifyFeedExists(x.id);
  verifyFeedUpdated(x.id);
});

bthread("FieldLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addField(x.id);
  updateField(x.id);
  updateField(x.id);
  verifyFieldExists(x.id);
  verifyFieldUpdated(x.id);
});

bthread("FileLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFile(x.id);
  updateFile(x.id);
  updateFile(x.id);
  verifyFileExists(x.id);
  verifyFileUpdated(x.id);
});

bthread("FollowerLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFollower(x.id);
  updateFollower(x.id);
  updateFollower(x.id);
  verifyFollowerExists(x.id);
  verifyFollowerUpdated(x.id);
});

bthread("FollowingLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFollowing(x.id);
  updateFollowing(x.id);
  updateFollowing(x.id);
  verifyFollowingExists(x.id);
  verifyFollowingUpdated(x.id);
});

bthread("ForcecancelLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForcecancel(x.id);
  updateForcecancel(x.id);
  updateForcecancel(x.id);
  verifyForcecancelExists(x.id);
  verifyForcecancelUpdated(x.id);
});

bthread("ForkLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFork(x.id);
  updateFork(x.id);
  updateFork(x.id);
  verifyForkExists(x.id);
  verifyForkUpdated(x.id);
});

bthread("ForkprcontributorapprovalLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForkprcontributorapproval(x.id);
  updateForkprcontributorapproval(x.id);
  updateForkprcontributorapproval(x.id);
  verifyForkprcontributorapprovalExists(x.id);
  verifyForkprcontributorapprovalUpdated(x.id);
});

bthread("ForkprworkflowsprivaterepoLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForkprworkflowsprivaterepo(x.id);
  updateForkprworkflowsprivaterepo(x.id);
  updateForkprworkflowsprivaterepo(x.id);
  verifyForkprworkflowsprivaterepoExists(x.id);
  verifyForkprworkflowsprivaterepoUpdated(x.id);
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerate(x.id);
  updateGenerate(x.id);
  updateGenerate(x.id);
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
});

bthread("GeneratejitconfigLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGeneratejitconfig(x.id);
  updateGeneratejitconfig(x.id);
  updateGeneratejitconfig(x.id);
  verifyGeneratejitconfigExists(x.id);
  verifyGeneratejitconfigUpdated(x.id);
});

bthread("GeneratenoteLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGeneratenote(x.id);
  updateGeneratenote(x.id);
  updateGeneratenote(x.id);
  verifyGeneratenoteExists(x.id);
  verifyGeneratenoteUpdated(x.id);
});

bthread("GistLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGist(x.id);
  updateGist(x.id);
  updateGist(x.id);
  verifyGistExists(x.id);
  verifyGistUpdated(x.id);
});

bthread("GitLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGit(x.id);
  updateGit(x.id);
  updateGit(x.id);
  verifyGitExists(x.id);
  verifyGitUpdated(x.id);
});

bthread("GithubownedLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGithubowned(x.id);
  updateGithubowned(x.id);
  updateGithubowned(x.id);
  verifyGithubownedExists(x.id);
  verifyGithubownedUpdated(x.id);
});

bthread("GitignoreLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGitignore(x.id);
  updateGitignore(x.id);
  updateGitignore(x.id);
  verifyGitignoreExists(x.id);
  verifyGitignoreUpdated(x.id);
});

bthread("GpgkeyLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGpgkey(x.id);
  updateGpgkey(x.id);
  updateGpgkey(x.id);
  verifyGpgkeyExists(x.id);
  verifyGpgkeyUpdated(x.id);
});

bthread("GradeLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGrade(x.id);
  updateGrade(x.id);
  updateGrade(x.id);
  verifyGradeExists(x.id);
  verifyGradeUpdated(x.id);
});

bthread("GrantLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGrant(x.id);
  updateGrant(x.id);
  updateGrant(x.id);
  verifyGrantExists(x.id);
  verifyGrantUpdated(x.id);
});

bthread("HealthLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHealth(x.id);
  updateHealth(x.id);
  updateHealth(x.id);
  verifyHealthExists(x.id);
  verifyHealthUpdated(x.id);
});

bthread("HistoryLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHistory(x.id);
  updateHistory(x.id);
  updateHistory(x.id);
  verifyHistoryExists(x.id);
  verifyHistoryUpdated(x.id);
});

bthread("HookLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHook(x.id);
  updateHook(x.id);
  updateHook(x.id);
  verifyHookExists(x.id);
  verifyHookUpdated(x.id);
});

bthread("HostedrunnerLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHostedrunner(x.id);
  updateHostedrunner(x.id);
  updateHostedrunner(x.id);
  verifyHostedrunnerExists(x.id);
  verifyHostedrunnerUpdated(x.id);
});

bthread("HovercardLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHovercard(x.id);
  updateHovercard(x.id);
  updateHovercard(x.id);
  verifyHovercardExists(x.id);
  verifyHovercardUpdated(x.id);
});

bthread("ImageLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImage(x.id);
  updateImage(x.id);
  updateImage(x.id);
  verifyImageExists(x.id);
  verifyImageUpdated(x.id);
});

bthread("ImmutablereleasLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImmutablereleas(x.id);
  updateImmutablereleas(x.id);
  updateImmutablereleas(x.id);
  verifyImmutablereleasExists(x.id);
  verifyImmutablereleasUpdated(x.id);
});

bthread("ImportLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImport(x.id);
  updateImport(x.id);
  updateImport(x.id);
  verifyImportExists(x.id);
  verifyImportUpdated(x.id);
});

bthread("InsightLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInsight(x.id);
  updateInsight(x.id);
  updateInsight(x.id);
  verifyInsightExists(x.id);
  verifyInsightUpdated(x.id);
});

bthread("InstallationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstallation(x.id);
  updateInstallation(x.id);
  updateInstallation(x.id);
  verifyInstallationExists(x.id);
  verifyInstallationUpdated(x.id);
});

bthread("InstallationrequestLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstallationrequest(x.id);
  updateInstallationrequest(x.id);
  updateInstallationrequest(x.id);
  verifyInstallationrequestExists(x.id);
  verifyInstallationrequestUpdated(x.id);
});

bthread("InstanceLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstance(x.id);
  updateInstance(x.id);
  updateInstance(x.id);
  verifyInstanceExists(x.id);
  verifyInstanceUpdated(x.id);
});

bthread("InteractionlimitLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInteractionlimit(x.id);
  updateInteractionlimit(x.id);
  updateInteractionlimit(x.id);
  verifyInteractionlimitExists(x.id);
  verifyInteractionlimitUpdated(x.id);
});

bthread("InvitationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInvitation(x.id);
  updateInvitation(x.id);
  updateInvitation(x.id);
  verifyInvitationExists(x.id);
  verifyInvitationUpdated(x.id);
});

bthread("IssueLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssue(x.id);
  updateIssue(x.id);
  updateIssue(x.id);
  verifyIssueExists(x.id);
  verifyIssueUpdated(x.id);
});

bthread("IssuetypeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetype(x.id);
  updateIssuetype(x.id);
  updateIssuetype(x.id);
  verifyIssuetypeExists(x.id);
  verifyIssuetypeUpdated(x.id);
});

bthread("ItemLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addItem(x.id);
  updateItem(x.id);
  updateItem(x.id);
  verifyItemExists(x.id);
  verifyItemUpdated(x.id);
});

bthread("JobLifecycle", function () {
  const x = pick([{id: "J001"}, {id: "J002"}]);
  addJob(x.id);
  updateJob(x.id);
  updateJob(x.id);
  verifyJobExists(x.id);
  verifyJobUpdated(x.id);
});

bthread("KeyLifecycle", function () {
  const x = pick([{id: "K001"}, {id: "K002"}]);
  addKey(x.id);
  updateKey(x.id);
  updateKey(x.id);
  verifyKeyExists(x.id);
  verifyKeyUpdated(x.id);
});

bthread("LabelLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLabel(x.id);
  updateLabel(x.id);
  updateLabel(x.id);
  verifyLabelExists(x.id);
  verifyLabelUpdated(x.id);
});

bthread("LanguageLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLanguage(x.id);
  updateLanguage(x.id);
  updateLanguage(x.id);
  verifyLanguageExists(x.id);
  verifyLanguageUpdated(x.id);
});

bthread("LargefileLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLargefile(x.id);
  updateLargefile(x.id);
  updateLargefile(x.id);
  verifyLargefileExists(x.id);
  verifyLargefileUpdated(x.id);
});

bthread("LatestLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLatest(x.id);
  updateLatest(x.id);
  updateLatest(x.id);
  verifyLatestExists(x.id);
  verifyLatestUpdated(x.id);
});

bthread("LfLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLf(x.id);
  updateLf(x.id);
  updateLf(x.id);
  verifyLfExists(x.id);
  verifyLfUpdated(x.id);
});

bthread("LicensLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLicens(x.id);
  updateLicens(x.id);
  updateLicens(x.id);
  verifyLicensExists(x.id);
  verifyLicensUpdated(x.id);
});

bthread("LicenseLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLicense(x.id);
  updateLicense(x.id);
  updateLicense(x.id);
  verifyLicenseExists(x.id);
  verifyLicenseUpdated(x.id);
});

bthread("LimitLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLimit(x.id);
  updateLimit(x.id);
  updateLimit(x.id);
  verifyLimitExists(x.id);
  verifyLimitUpdated(x.id);
});

bthread("LocationLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocation(x.id);
  updateLocation(x.id);
  updateLocation(x.id);
  verifyLocationExists(x.id);
  verifyLocationUpdated(x.id);
});

bthread("LockLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLock(x.id);
  updateLock(x.id);
  updateLock(x.id);
  verifyLockExists(x.id);
  verifyLockUpdated(x.id);
});

bthread("LogLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLog(x.id);
  updateLog(x.id);
  updateLog(x.id);
  verifyLogExists(x.id);
  verifyLogUpdated(x.id);
});

bthread("MachineLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachine(x.id);
  updateMachine(x.id);
  updateMachine(x.id);
  verifyMachineExists(x.id);
  verifyMachineUpdated(x.id);
});

bthread("MachinesizeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachinesize(x.id);
  updateMachinesize(x.id);
  updateMachinesize(x.id);
  verifyMachinesizeExists(x.id);
  verifyMachinesizeUpdated(x.id);
});

bthread("MarkdownLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarkdown(x.id);
  updateMarkdown(x.id);
  updateMarkdown(x.id);
  verifyMarkdownExists(x.id);
  verifyMarkdownUpdated(x.id);
});

bthread("MarketplacelistingLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarketplacelisting(x.id);
  updateMarketplacelisting(x.id);
  updateMarketplacelisting(x.id);
  verifyMarketplacelistingExists(x.id);
  verifyMarketplacelistingUpdated(x.id);
});

bthread("MarketplacepurchasLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMarketplacepurchas(x.id);
  updateMarketplacepurchas(x.id);
  updateMarketplacepurchas(x.id);
  verifyMarketplacepurchasExists(x.id);
  verifyMarketplacepurchasUpdated(x.id);
});

bthread("MatchingrefLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMatchingref(x.id);
  updateMatchingref(x.id);
  updateMatchingref(x.id);
  verifyMatchingrefExists(x.id);
  verifyMatchingrefUpdated(x.id);
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMember(x.id);
  updateMember(x.id);
  updateMember(x.id);
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
});

bthread("MembershipLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMembership(x.id);
  updateMembership(x.id);
  updateMembership(x.id);
  verifyMembershipExists(x.id);
  verifyMembershipUpdated(x.id);
});

bthread("MergeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMerge(x.id);
  updateMerge(x.id);
  updateMerge(x.id);
  verifyMergeExists(x.id);
  verifyMergeUpdated(x.id);
});

bthread("MergeupstreamLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMergeupstream(x.id);
  updateMergeupstream(x.id);
  updateMergeupstream(x.id);
  verifyMergeupstreamExists(x.id);
  verifyMergeupstreamUpdated(x.id);
});

bthread("MetaLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMeta(x.id);
  updateMeta(x.id);
  updateMeta(x.id);
  verifyMetaExists(x.id);
  verifyMetaUpdated(x.id);
});

bthread("MetadataLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMetadata(x.id);
  updateMetadata(x.id);
  updateMetadata(x.id);
  verifyMetadataExists(x.id);
  verifyMetadataUpdated(x.id);
});

bthread("MetricLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMetric(x.id);
  updateMetric(x.id);
  updateMetric(x.id);
  verifyMetricExists(x.id);
  verifyMetricUpdated(x.id);
});

bthread("MigrationLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMigration(x.id);
  updateMigration(x.id);
  updateMigration(x.id);
  verifyMigrationExists(x.id);
  verifyMigrationUpdated(x.id);
});

bthread("MilestoneLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMilestone(x.id);
  updateMilestone(x.id);
  updateMilestone(x.id);
  verifyMilestoneExists(x.id);
  verifyMilestoneUpdated(x.id);
});

bthread("MoveLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMove(x.id);
  updateMove(x.id);
  updateMove(x.id);
  verifyMoveExists(x.id);
  verifyMoveUpdated(x.id);
});

bthread("NetworkLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNetwork(x.id);
  updateNetwork(x.id);
  updateNetwork(x.id);
  verifyNetworkExists(x.id);
  verifyNetworkUpdated(x.id);
});

bthread("NetworkconfigurationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNetworkconfiguration(x.id);
  updateNetworkconfiguration(x.id);
  updateNetworkconfiguration(x.id);
  verifyNetworkconfigurationExists(x.id);
  verifyNetworkconfigurationUpdated(x.id);
});

bthread("NetworksettingLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNetworksetting(x.id);
  updateNetworksetting(x.id);
  updateNetworksetting(x.id);
  verifyNetworksettingExists(x.id);
  verifyNetworksettingUpdated(x.id);
});

bthread("NewLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNew(x.id);
  updateNew(x.id);
  updateNew(x.id);
  verifyNewExists(x.id);
  verifyNewUpdated(x.id);
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotification(x.id);
  updateNotification(x.id);
  updateNotification(x.id);
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
});

bthread("OctocatLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOctocat(x.id);
  updateOctocat(x.id);
  updateOctocat(x.id);
  verifyOctocatExists(x.id);
  verifyOctocatUpdated(x.id);
});

bthread("OidcLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOidc(x.id);
  updateOidc(x.id);
  updateOidc(x.id);
  verifyOidcExists(x.id);
  verifyOidcUpdated(x.id);
});

bthread("OrgLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrg(x.id);
  updateOrg(x.id);
  updateOrg(x.id);
  verifyOrgExists(x.id);
  verifyOrgUpdated(x.id);
});

bthread("OrganizationLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganization(x.id);
  updateOrganization(x.id);
  updateOrganization(x.id);
  verifyOrganizationExists(x.id);
  verifyOrganizationUpdated(x.id);
});

bthread("OrganizationroleLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationrole(x.id);
  updateOrganizationrole(x.id);
  updateOrganizationrole(x.id);
  verifyOrganizationroleExists(x.id);
  verifyOrganizationroleUpdated(x.id);
});

bthread("OrganizationsecretLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationsecret(x.id);
  updateOrganizationsecret(x.id);
  updateOrganizationsecret(x.id);
  verifyOrganizationsecretExists(x.id);
  verifyOrganizationsecretUpdated(x.id);
});

bthread("OrganizationvariableLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrganizationvariable(x.id);
  updateOrganizationvariable(x.id);
  updateOrganizationvariable(x.id);
  verifyOrganizationvariableExists(x.id);
  verifyOrganizationvariableUpdated(x.id);
});

bthread("OutsidecollaboratorLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOutsidecollaborator(x.id);
  updateOutsidecollaborator(x.id);
  updateOutsidecollaborator(x.id);
  verifyOutsidecollaboratorExists(x.id);
  verifyOutsidecollaboratorUpdated(x.id);
});

bthread("PackageLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPackage(x.id);
  updatePackage(x.id);
  updatePackage(x.id);
  verifyPackageExists(x.id);
  verifyPackageUpdated(x.id);
});

bthread("PageLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPage(x.id);
  updatePage(x.id);
  updatePage(x.id);
  verifyPageExists(x.id);
  verifyPageUpdated(x.id);
});

bthread("ParentLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParent(x.id);
  updateParent(x.id);
  updateParent(x.id);
  verifyParentExists(x.id);
  verifyParentUpdated(x.id);
});

bthread("ParticipationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParticipation(x.id);
  updateParticipation(x.id);
  updateParticipation(x.id);
  verifyParticipationExists(x.id);
  verifyParticipationUpdated(x.id);
});

bthread("PartnerLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPartner(x.id);
  updatePartner(x.id);
  updatePartner(x.id);
  verifyPartnerExists(x.id);
  verifyPartnerUpdated(x.id);
});

bthread("PathLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPath(x.id);
  updatePath(x.id);
  updatePath(x.id);
  verifyPathExists(x.id);
  verifyPathUpdated(x.id);
});

bthread("PatternconfigurationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPatternconfiguration(x.id);
  updatePatternconfiguration(x.id);
  updatePatternconfiguration(x.id);
  verifyPatternconfigurationExists(x.id);
  verifyPatternconfigurationUpdated(x.id);
});

bthread("PendingdeploymentLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPendingdeployment(x.id);
  updatePendingdeployment(x.id);
  updatePendingdeployment(x.id);
  verifyPendingdeploymentExists(x.id);
  verifyPendingdeploymentUpdated(x.id);
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermission(x.id);
  updatePermission(x.id);
  updatePermission(x.id);
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
});

bthread("PermissionscheckLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermissionscheck(x.id);
  updatePermissionscheck(x.id);
  updatePermissionscheck(x.id);
  verifyPermissionscheckExists(x.id);
  verifyPermissionscheckUpdated(x.id);
});

bthread("PersonalaccesstokenLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPersonalaccesstoken(x.id);
  updatePersonalaccesstoken(x.id);
  updatePersonalaccesstoken(x.id);
  verifyPersonalaccesstokenExists(x.id);
  verifyPersonalaccesstokenUpdated(x.id);
});

bthread("PersonalaccesstokenrequestLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPersonalaccesstokenrequest(x.id);
  updatePersonalaccesstokenrequest(x.id);
  updatePersonalaccesstokenrequest(x.id);
  verifyPersonalaccesstokenrequestExists(x.id);
  verifyPersonalaccesstokenrequestUpdated(x.id);
});

bthread("PingLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPing(x.id);
  updatePing(x.id);
  updatePing(x.id);
  verifyPingExists(x.id);
  verifyPingUpdated(x.id);
});

bthread("PlanLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlan(x.id);
  updatePlan(x.id);
  updatePlan(x.id);
  verifyPlanExists(x.id);
  verifyPlanUpdated(x.id);
});

bthread("PlatformLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlatform(x.id);
  updatePlatform(x.id);
  updatePlatform(x.id);
  verifyPlatformExists(x.id);
  verifyPlatformUpdated(x.id);
});

bthread("PopularLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPopular(x.id);
  updatePopular(x.id);
  updatePopular(x.id);
  verifyPopularExists(x.id);
  verifyPopularUpdated(x.id);
});

bthread("PreferenceLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPreference(x.id);
  updatePreference(x.id);
  updatePreference(x.id);
  verifyPreferenceExists(x.id);
  verifyPreferenceUpdated(x.id);
});

bthread("PremiumrequestLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPremiumrequest(x.id);
  updatePremiumrequest(x.id);
  updatePremiumrequest(x.id);
  verifyPremiumrequestExists(x.id);
  verifyPremiumrequestUpdated(x.id);
});

bthread("PriorityLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPriority(x.id);
  updatePriority(x.id);
  updatePriority(x.id);
  verifyPriorityExists(x.id);
  verifyPriorityUpdated(x.id);
});

bthread("PrivateregistryLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrivateregistry(x.id);
  updatePrivateregistry(x.id);
  updatePrivateregistry(x.id);
  verifyPrivateregistryExists(x.id);
  verifyPrivateregistryUpdated(x.id);
});

bthread("PrivatevulnerabilityreportingLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrivatevulnerabilityreporting(x.id);
  updatePrivatevulnerabilityreporting(x.id);
  updatePrivatevulnerabilityreporting(x.id);
  verifyPrivatevulnerabilityreportingExists(x.id);
  verifyPrivatevulnerabilityreportingUpdated(x.id);
});

bthread("ProfileLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProfile(x.id);
  updateProfile(x.id);
  updateProfile(x.id);
  verifyProfileExists(x.id);
  verifyProfileUpdated(x.id);
});

bthread("ProjectLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProject(x.id);
  updateProject(x.id);
  updateProject(x.id);
  verifyProjectExists(x.id);
  verifyProjectUpdated(x.id);
});

bthread("Projectsv2Lifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjectsv2(x.id);
  updateProjectsv2(x.id);
  updateProjectsv2(x.id);
  verifyProjectsv2Exists(x.id);
  verifyProjectsv2Updated(x.id);
});

bthread("PropertyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProperty(x.id);
  updateProperty(x.id);
  updateProperty(x.id);
  verifyPropertyExists(x.id);
  verifyPropertyUpdated(x.id);
});

bthread("ProtectionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProtection(x.id);
  updateProtection(x.id);
  updateProtection(x.id);
  verifyProtectionExists(x.id);
  verifyProtectionUpdated(x.id);
});

bthread("PublicLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublic(x.id);
  updatePublic(x.id);
  updatePublic(x.id);
  verifyPublicExists(x.id);
  verifyPublicUpdated(x.id);
});

bthread("PublicemailLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublicemail(x.id);
  updatePublicemail(x.id);
  updatePublicemail(x.id);
  verifyPublicemailExists(x.id);
  verifyPublicemailUpdated(x.id);
});

bthread("PublickeyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublickey(x.id);
  updatePublickey(x.id);
  updatePublickey(x.id);
  verifyPublickeyExists(x.id);
  verifyPublickeyUpdated(x.id);
});

bthread("PublicmemberLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublicmember(x.id);
  updatePublicmember(x.id);
  updatePublicmember(x.id);
  verifyPublicmemberExists(x.id);
  verifyPublicmemberUpdated(x.id);
});

bthread("PublishLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublish(x.id);
  updatePublish(x.id);
  updatePublish(x.id);
  verifyPublishExists(x.id);
  verifyPublishUpdated(x.id);
});

bthread("PullLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPull(x.id);
  updatePull(x.id);
  updatePull(x.id);
  verifyPullExists(x.id);
  verifyPullUpdated(x.id);
});

bthread("PunchcardLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPunchcard(x.id);
  updatePunchcard(x.id);
  updatePunchcard(x.id);
  verifyPunchcardExists(x.id);
  verifyPunchcardUpdated(x.id);
});

bthread("PushprotectionbypassLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPushprotectionbypass(x.id);
  updatePushprotectionbypass(x.id);
  updatePushprotectionbypass(x.id);
  verifyPushprotectionbypassExists(x.id);
  verifyPushprotectionbypassUpdated(x.id);
});

bthread("RatelimitLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRatelimit(x.id);
  updateRatelimit(x.id);
  updateRatelimit(x.id);
  verifyRatelimitExists(x.id);
  verifyRatelimitUpdated(x.id);
});

bthread("RawLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRaw(x.id);
  updateRaw(x.id);
  updateRaw(x.id);
  verifyRawExists(x.id);
  verifyRawUpdated(x.id);
});

bthread("ReactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReaction(x.id);
  updateReaction(x.id);
  updateReaction(x.id);
  verifyReactionExists(x.id);
  verifyReactionUpdated(x.id);
});

bthread("ReadmeLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReadme(x.id);
  updateReadme(x.id);
  updateReadme(x.id);
  verifyReadmeExists(x.id);
  verifyReadmeUpdated(x.id);
});

bthread("ReceivedeventLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReceivedevent(x.id);
  updateReceivedevent(x.id);
  updateReceivedevent(x.id);
  verifyReceivedeventExists(x.id);
  verifyReceivedeventUpdated(x.id);
});

bthread("RefLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRef(x.id);
  updateRef(x.id);
  updateRef(x.id);
  verifyRefExists(x.id);
  verifyRefUpdated(x.id);
});

bthread("ReferrerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReferrer(x.id);
  updateReferrer(x.id);
  updateReferrer(x.id);
  verifyReferrerExists(x.id);
  verifyReferrerUpdated(x.id);
});

bthread("RegistrationtokenLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegistrationtoken(x.id);
  updateRegistrationtoken(x.id);
  updateRegistrationtoken(x.id);
  verifyRegistrationtokenExists(x.id);
  verifyRegistrationtokenUpdated(x.id);
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReleas(x.id);
  updateReleas(x.id);
  updateReleas(x.id);
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
});

bthread("RemoveLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemove(x.id);
  updateRemove(x.id);
  updateRemove(x.id);
  verifyRemoveExists(x.id);
  verifyRemoveUpdated(x.id);
});

bthread("RemovetokenLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemovetoken(x.id);
  updateRemovetoken(x.id);
  updateRemovetoken(x.id);
  verifyRemovetokenExists(x.id);
  verifyRemovetokenUpdated(x.id);
});

bthread("RenameLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRename(x.id);
  updateRename(x.id);
  updateRename(x.id);
  verifyRenameExists(x.id);
  verifyRenameUpdated(x.id);
});

bthread("ReplyLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReply(x.id);
  updateReply(x.id);
  updateReply(x.id);
  verifyReplyExists(x.id);
  verifyReplyUpdated(x.id);
});

bthread("RepoLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepo(x.id);
  updateRepo(x.id);
  updateRepo(x.id);
  verifyRepoExists(x.id);
  verifyRepoUpdated(x.id);
});

bthread("ReportLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReport(x.id);
  updateReport(x.id);
  updateReport(x.id);
  verifyReportExists(x.id);
  verifyReportUpdated(x.id);
});

bthread("RepositoryLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepository(x.id);
  updateRepository(x.id);
  updateRepository(x.id);
  verifyRepositoryExists(x.id);
  verifyRepositoryUpdated(x.id);
});

bthread("RepositoryaccesLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepositoryacces(x.id);
  updateRepositoryacces(x.id);
  updateRepositoryacces(x.id);
  verifyRepositoryaccesExists(x.id);
  verifyRepositoryaccesUpdated(x.id);
});

bthread("RepositoryinvitationLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepositoryinvitation(x.id);
  updateRepositoryinvitation(x.id);
  updateRepositoryinvitation(x.id);
  verifyRepositoryinvitationExists(x.id);
  verifyRepositoryinvitationUpdated(x.id);
});

bthread("RequestedreviewerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequestedreviewer(x.id);
  updateRequestedreviewer(x.id);
  updateRequestedreviewer(x.id);
  verifyRequestedreviewerExists(x.id);
  verifyRequestedreviewerUpdated(x.id);
});

bthread("RequiredpullrequestreviewLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredpullrequestreview(x.id);
  updateRequiredpullrequestreview(x.id);
  updateRequiredpullrequestreview(x.id);
  verifyRequiredpullrequestreviewExists(x.id);
  verifyRequiredpullrequestreviewUpdated(x.id);
});

bthread("RequiredsignatureLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredsignature(x.id);
  updateRequiredsignature(x.id);
  updateRequiredsignature(x.id);
  verifyRequiredsignatureExists(x.id);
  verifyRequiredsignatureUpdated(x.id);
});

bthread("RequiredstatuscheckLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredstatuscheck(x.id);
  updateRequiredstatuscheck(x.id);
  updateRequiredstatuscheck(x.id);
  verifyRequiredstatuscheckExists(x.id);
  verifyRequiredstatuscheckUpdated(x.id);
});

bthread("RerequestLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRerequest(x.id);
  updateRerequest(x.id);
  updateRerequest(x.id);
  verifyRerequestExists(x.id);
  verifyRerequestUpdated(x.id);
});

bthread("RerunLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRerun(x.id);
  updateRerun(x.id);
  updateRerun(x.id);
  verifyRerunExists(x.id);
  verifyRerunUpdated(x.id);
});

bthread("RerunfailedjobLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRerunfailedjob(x.id);
  updateRerunfailedjob(x.id);
  updateRerunfailedjob(x.id);
  verifyRerunfailedjobExists(x.id);
  verifyRerunfailedjobUpdated(x.id);
});

bthread("RestoreLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRestore(x.id);
  updateRestore(x.id);
  updateRestore(x.id);
  verifyRestoreExists(x.id);
  verifyRestoreUpdated(x.id);
});

bthread("RestrictionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRestriction(x.id);
  updateRestriction(x.id);
  updateRestriction(x.id);
  verifyRestrictionExists(x.id);
  verifyRestrictionUpdated(x.id);
});

bthread("ReviewLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReview(x.id);
  updateReview(x.id);
  updateReview(x.id);
  verifyReviewExists(x.id);
  verifyReviewUpdated(x.id);
});

bthread("RevokeLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRevoke(x.id);
  updateRevoke(x.id);
  updateRevoke(x.id);
  verifyRevokeExists(x.id);
  verifyRevokeUpdated(x.id);
});

bthread("RoutestatLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRoutestat(x.id);
  updateRoutestat(x.id);
  updateRoutestat(x.id);
  verifyRoutestatExists(x.id);
  verifyRoutestatUpdated(x.id);
});

bthread("RuleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRule(x.id);
  updateRule(x.id);
  updateRule(x.id);
  verifyRuleExists(x.id);
  verifyRuleUpdated(x.id);
});

bthread("RulesetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRuleset(x.id);
  updateRuleset(x.id);
  updateRuleset(x.id);
  verifyRulesetExists(x.id);
  verifyRulesetUpdated(x.id);
});

bthread("RulesuiteLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRulesuite(x.id);
  updateRulesuite(x.id);
  updateRulesuite(x.id);
  verifyRulesuiteExists(x.id);
  verifyRulesuiteUpdated(x.id);
});

bthread("RunLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRun(x.id);
  updateRun(x.id);
  updateRun(x.id);
  verifyRunExists(x.id);
  verifyRunUpdated(x.id);
});

bthread("RunnerLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRunner(x.id);
  updateRunner(x.id);
  updateRunner(x.id);
  verifyRunnerExists(x.id);
  verifyRunnerUpdated(x.id);
});

bthread("RunnergroupLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRunnergroup(x.id);
  updateRunnergroup(x.id);
  updateRunnergroup(x.id);
  verifyRunnergroupExists(x.id);
  verifyRunnergroupUpdated(x.id);
});

bthread("SarifLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSarif(x.id);
  updateSarif(x.id);
  updateSarif(x.id);
  verifySarifExists(x.id);
  verifySarifUpdated(x.id);
});

bthread("SbomLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSbom(x.id);
  updateSbom(x.id);
  updateSbom(x.id);
  verifySbomExists(x.id);
  verifySbomUpdated(x.id);
});

bthread("ScanhistoryLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScanhistory(x.id);
  updateScanhistory(x.id);
  updateScanhistory(x.id);
  verifyScanhistoryExists(x.id);
  verifyScanhistoryUpdated(x.id);
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSchema(x.id);
  updateSchema(x.id);
  updateSchema(x.id);
  verifySchemaExists(x.id);
  verifySchemaUpdated(x.id);
});

bthread("ScopedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScoped(x.id);
  updateScoped(x.id);
  updateScoped(x.id);
  verifyScopedExists(x.id);
  verifyScopedUpdated(x.id);
});

bthread("SearchLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSearch(x.id);
  updateSearch(x.id);
  updateSearch(x.id);
  verifySearchExists(x.id);
  verifySearchUpdated(x.id);
});

bthread("SeatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSeat(x.id);
  updateSeat(x.id);
  updateSeat(x.id);
  verifySeatExists(x.id);
  verifySeatUpdated(x.id);
});

bthread("SecretLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecret(x.id);
  updateSecret(x.id);
  updateSecret(x.id);
  verifySecretExists(x.id);
  verifySecretUpdated(x.id);
});

bthread("SecretscanningLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecretscanning(x.id);
  updateSecretscanning(x.id);
  updateSecretscanning(x.id);
  verifySecretscanningExists(x.id);
  verifySecretscanningUpdated(x.id);
});

bthread("SecurityadvisoryLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecurityadvisory(x.id);
  updateSecurityadvisory(x.id);
  updateSecurityadvisory(x.id);
  verifySecurityadvisoryExists(x.id);
  verifySecurityadvisoryUpdated(x.id);
});

bthread("SecuritymanagerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecuritymanager(x.id);
  updateSecuritymanager(x.id);
  updateSecuritymanager(x.id);
  verifySecuritymanagerExists(x.id);
  verifySecuritymanagerUpdated(x.id);
});

bthread("SelectedactionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelectedaction(x.id);
  updateSelectedaction(x.id);
  updateSelectedaction(x.id);
  verifySelectedactionExists(x.id);
  verifySelectedactionUpdated(x.id);
});

bthread("SelectedteamLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelectedteam(x.id);
  updateSelectedteam(x.id);
  updateSelectedteam(x.id);
  verifySelectedteamExists(x.id);
  verifySelectedteamUpdated(x.id);
});

bthread("SelecteduserLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelecteduser(x.id);
  updateSelecteduser(x.id);
  updateSelecteduser(x.id);
  verifySelecteduserExists(x.id);
  verifySelecteduserUpdated(x.id);
});

bthread("SelfhostedrunnerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSelfhostedrunner(x.id);
  updateSelfhostedrunner(x.id);
  updateSelfhostedrunner(x.id);
  verifySelfhostedrunnerExists(x.id);
  verifySelfhostedrunnerUpdated(x.id);
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSetting(x.id);
  updateSetting(x.id);
  updateSetting(x.id);
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
});

bthread("SharedstorageLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSharedstorage(x.id);
  updateSharedstorage(x.id);
  updateSharedstorage(x.id);
  verifySharedstorageExists(x.id);
  verifySharedstorageUpdated(x.id);
});

bthread("SnapshotLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSnapshot(x.id);
  updateSnapshot(x.id);
  updateSnapshot(x.id);
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
});

bthread("SocialaccountLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSocialaccount(x.id);
  updateSocialaccount(x.id);
  updateSocialaccount(x.id);
  verifySocialaccountExists(x.id);
  verifySocialaccountUpdated(x.id);
});

bthread("SshsigningkeyLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSshsigningkey(x.id);
  updateSshsigningkey(x.id);
  updateSshsigningkey(x.id);
  verifySshsigningkeyExists(x.id);
  verifySshsigningkeyUpdated(x.id);
});

bthread("StarLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStar(x.id);
  updateStar(x.id);
  updateStar(x.id);
  verifyStarExists(x.id);
  verifyStarUpdated(x.id);
});

bthread("StargazerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStargazer(x.id);
  updateStargazer(x.id);
  updateStargazer(x.id);
  verifyStargazerExists(x.id);
  verifyStargazerUpdated(x.id);
});

bthread("StarredLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStarred(x.id);
  updateStarred(x.id);
  updateStarred(x.id);
  verifyStarredExists(x.id);
  verifyStarredUpdated(x.id);
});

bthread("StartLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStart(x.id);
  updateStart(x.id);
  updateStart(x.id);
  verifyStartExists(x.id);
  verifyStartUpdated(x.id);
});

bthread("StatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStat(x.id);
  updateStat(x.id);
  updateStat(x.id);
  verifyStatExists(x.id);
  verifyStatUpdated(x.id);
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatu(x.id);
  updateStatu(x.id);
  updateStatu(x.id);
  verifyStatuExists(x.id);
  verifyStatuUpdated(x.id);
});

bthread("StatusLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatus(x.id);
  updateStatus(x.id);
  updateStatus(x.id);
  verifyStatusExists(x.id);
  verifyStatusUpdated(x.id);
});

bthread("StopLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStop(x.id);
  updateStop(x.id);
  updateStop(x.id);
  verifyStopExists(x.id);
  verifyStopUpdated(x.id);
});

bthread("StoragerecordLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStoragerecord(x.id);
  updateStoragerecord(x.id);
  updateStoragerecord(x.id);
  verifyStoragerecordExists(x.id);
  verifyStoragerecordUpdated(x.id);
});

bthread("StubbedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStubbed(x.id);
  updateStubbed(x.id);
  updateStubbed(x.id);
  verifyStubbedExists(x.id);
  verifyStubbedUpdated(x.id);
});

bthread("SubLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSub(x.id);
  updateSub(x.id);
  updateSub(x.id);
  verifySubExists(x.id);
  verifySubUpdated(x.id);
});

bthread("SubissueLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubissue(x.id);
  updateSubissue(x.id);
  updateSubissue(x.id);
  verifySubissueExists(x.id);
  verifySubissueUpdated(x.id);
});

bthread("SubjectstatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubjectstat(x.id);
  updateSubjectstat(x.id);
  updateSubjectstat(x.id);
  verifySubjectstatExists(x.id);
  verifySubjectstatUpdated(x.id);
});

bthread("SubscriberLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscriber(x.id);
  updateSubscriber(x.id);
  updateSubscriber(x.id);
  verifySubscriberExists(x.id);
  verifySubscriberUpdated(x.id);
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubscription(x.id);
  updateSubscription(x.id);
  updateSubscription(x.id);
  verifySubscriptionExists(x.id);
  verifySubscriptionUpdated(x.id);
});

bthread("SummarystatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSummarystat(x.id);
  updateSummarystat(x.id);
  updateSummarystat(x.id);
  verifySummarystatExists(x.id);
  verifySummarystatUpdated(x.id);
});

bthread("SuspendedLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSuspended(x.id);
  updateSuspended(x.id);
  updateSuspended(x.id);
  verifySuspendedExists(x.id);
  verifySuspendedUpdated(x.id);
});

bthread("TagLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTag(x.id);
  updateTag(x.id);
  updateTag(x.id);
  verifyTagExists(x.id);
  verifyTagUpdated(x.id);
});

bthread("TarballLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTarball(x.id);
  updateTarball(x.id);
  updateTarball(x.id);
  verifyTarballExists(x.id);
  verifyTarballUpdated(x.id);
});

bthread("TeamLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTeam(x.id);
  updateTeam(x.id);
  updateTeam(x.id);
  verifyTeamExists(x.id);
  verifyTeamUpdated(x.id);
});

bthread("TemplateLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTemplate(x.id);
  updateTemplate(x.id);
  updateTemplate(x.id);
  verifyTemplateExists(x.id);
  verifyTemplateUpdated(x.id);
});

bthread("TestLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTest(x.id);
  updateTest(x.id);
  updateTest(x.id);
  verifyTestExists(x.id);
  verifyTestUpdated(x.id);
});

bthread("ThreadLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addThread(x.id);
  updateThread(x.id);
  updateThread(x.id);
  verifyThreadExists(x.id);
  verifyThreadUpdated(x.id);
});

bthread("TimelineLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTimeline(x.id);
  updateTimeline(x.id);
  updateTimeline(x.id);
  verifyTimelineExists(x.id);
  verifyTimelineUpdated(x.id);
});

bthread("TimestatLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTimestat(x.id);
  updateTimestat(x.id);
  updateTimestat(x.id);
  verifyTimestatExists(x.id);
  verifyTimestatUpdated(x.id);
});

bthread("TimingLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTiming(x.id);
  updateTiming(x.id);
  updateTiming(x.id);
  verifyTimingExists(x.id);
  verifyTimingUpdated(x.id);
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addToken(x.id);
  updateToken(x.id);
  updateToken(x.id);
  verifyTokenExists(x.id);
  verifyTokenUpdated(x.id);
});

bthread("TopicLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTopic(x.id);
  updateTopic(x.id);
  updateTopic(x.id);
  verifyTopicExists(x.id);
  verifyTopicUpdated(x.id);
});

bthread("TrafficLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTraffic(x.id);
  updateTraffic(x.id);
  updateTraffic(x.id);
  verifyTrafficExists(x.id);
  verifyTrafficUpdated(x.id);
});

bthread("TransferLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTransfer(x.id);
  updateTransfer(x.id);
  updateTransfer(x.id);
  verifyTransferExists(x.id);
  verifyTransferUpdated(x.id);
});

bthread("TreeLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTree(x.id);
  updateTree(x.id);
  updateTree(x.id);
  verifyTreeExists(x.id);
  verifyTreeUpdated(x.id);
});

bthread("UpdatebranchLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUpdatebranch(x.id);
  updateUpdatebranch(x.id);
  updateUpdatebranch(x.id);
  verifyUpdatebranchExists(x.id);
  verifyUpdatebranchUpdated(x.id);
});

bthread("UsageLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsage(x.id);
  updateUsage(x.id);
  updateUsage(x.id);
  verifyUsageExists(x.id);
  verifyUsageUpdated(x.id);
});

bthread("UsagebyrepositoryLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsagebyrepository(x.id);
  updateUsagebyrepository(x.id);
  updateUsagebyrepository(x.id);
  verifyUsagebyrepositoryExists(x.id);
  verifyUsagebyrepositoryUpdated(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("UserstatLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserstat(x.id);
  updateUserstat(x.id);
  updateUserstat(x.id);
  verifyUserstatExists(x.id);
  verifyUserstatUpdated(x.id);
});

bthread("ValueLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addValue(x.id);
  updateValue(x.id);
  updateValue(x.id);
  verifyValueExists(x.id);
  verifyValueUpdated(x.id);
});

bthread("VariableLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVariable(x.id);
  updateVariable(x.id);
  updateVariable(x.id);
  verifyVariableExists(x.id);
  verifyVariableUpdated(x.id);
});

bthread("VariantanalysLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVariantanalys(x.id);
  updateVariantanalys(x.id);
  updateVariantanalys(x.id);
  verifyVariantanalysExists(x.id);
  verifyVariantanalysUpdated(x.id);
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVersion(x.id);
  updateVersion(x.id);
  updateVersion(x.id);
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
});

bthread("ViewLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addView(x.id);
  updateView(x.id);
  updateView(x.id);
  verifyViewExists(x.id);
  verifyViewUpdated(x.id);
});

bthread("VisibilityLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVisibility(x.id);
  updateVisibility(x.id);
  updateVisibility(x.id);
  verifyVisibilityExists(x.id);
  verifyVisibilityUpdated(x.id);
});

bthread("VulnerabilityalertLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVulnerabilityalert(x.id);
  updateVulnerabilityalert(x.id);
  updateVulnerabilityalert(x.id);
  verifyVulnerabilityalertExists(x.id);
  verifyVulnerabilityalertUpdated(x.id);
});

bthread("WorkflowLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorkflow(x.id);
  updateWorkflow(x.id);
  updateWorkflow(x.id);
  verifyWorkflowExists(x.id);
  verifyWorkflowUpdated(x.id);
});

bthread("ZenLifecycle", function () {
  const x = pick([{id: "Z001"}, {id: "Z002"}]);
  addZen(x.id);
  updateZen(x.id);
  updateZen(x.id);
  verifyZenExists(x.id);
  verifyZenUpdated(x.id);
});

bthread("ZipballLifecycle", function () {
  const x = pick([{id: "Z001"}, {id: "Z002"}]);
  addZipball(x.id);
  updateZipball(x.id);
  updateZipball(x.id);
  verifyZipballExists(x.id);
  verifyZipballUpdated(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Acceptedassignment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Acceptedassignment_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Acces_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Accesstoken_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Account_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Action_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Add_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Advisory_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Alert_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Analys_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Annotation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Api_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "App_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Application_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Appmanifest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Approval_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Approve_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Archive_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Artifact_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Artifactandlogretention_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Asset_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Assignment_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Attach_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Attempt_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Attestation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Author_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Autofix_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Autolink_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Automatedsecurityfixe_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Billing_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Blob_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Blockedby_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Blocking_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Branche_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Brancheswherehead_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Build_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Bulklist_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Cache_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Campaign_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Cancel_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Checkrun_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Checksuite_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Classroom_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Clone_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Code_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codefrequency_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codeowner_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codeql_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codescanning_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codesecurity_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codesecurityconfiguration_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codesofconduct_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Codespace_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Collaborator_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Column_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Comment_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Commitactivity_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Community_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Compare_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Config_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Configuration_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Conflict_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Content_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Context_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Contributor_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Conversion_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Copilot_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Credential_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Customization_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Cve_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Databas_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Default_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Defaultlevel_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Defaultsetup_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Deleterequest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Delivery_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Dependabot_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Dependency_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Dependencygraph_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Deployment_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Deploymentbranchpolicy_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Deploymentprotectionrule_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Detach_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Devcontainer_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Digest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Disable_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Discussion_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Dismissal_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Dispatche_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Docker_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Download_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Email_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Emoji_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Enable_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Enforceadmin_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Enterpris_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Environment_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Error_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Event_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Export_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Failedinvitation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Feed_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Field_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "File_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Forcecancel_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Fork_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Forkprcontributorapproval_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Forkprworkflowsprivaterepo_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Generate_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Generatejitconfig_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Generatenote_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Gist_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Git_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Githubowned_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Gitignore_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Grade_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Grant_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Health_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "History_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Hook_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Hostedrunner_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Hovercard_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Image_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Immutablereleas_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Import_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Insight_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Installation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Installationrequest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Instance_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Interactionlimit_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Invitation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Issue_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Issuetype_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Item_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Job_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Key_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Largefile_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Latest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Lf_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Licens_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "License_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Limit_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Location_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Lock_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Log_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Machine_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Machinesize_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Markdown_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Marketplacelisting_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Marketplacepurchas_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Matchingref_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Member_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Membership_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Merge_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Meta_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Metadata_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Metric_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Migration_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Milestone_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Move_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Network_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Networkconfiguration_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Networksetting_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "New_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Notification_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Octocat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Oidc_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Org_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Organization_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Organizationrole_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Organizationsecret_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Organizationvariable_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Outsidecollaborator_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Package_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Parent_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Participation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Partner_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Path_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Patternconfiguration_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Pendingdeployment_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Permission_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Permissionscheck_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Personalaccesstoken_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Personalaccesstokenrequest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Ping_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Plan_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Platform_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Popular_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Preference_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Premiumrequest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Priority_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Privateregistry_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Privatevulnerabilityreporting_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Profile_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Project_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Projectsv2_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Property_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Protection_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Public_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Publicemail_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Publickey_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Publicmember_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Publish_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Pull_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Punchcard_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Pushprotectionbypass_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Ratelimit_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Raw_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Readme_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Receivedevent_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Ref_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Referrer_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Registrationtoken_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Releas_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Remove_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Removetoken_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Rename_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Reply_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Repo_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Report_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Repository_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Repositoryacces_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Repositoryinvitation_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Requestedreviewer_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Requiredpullrequestreview_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Requiredsignature_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Requiredstatuscheck_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Rerequest_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Rerun_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Rerunfailedjob_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Restore_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Restriction_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Review_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Revoke_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Routestat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Rule_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Ruleset_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Rulesuite_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Run_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Runner_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Runnergroup_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Sarif_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Sbom_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Scanhistory_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Schema_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Scoped_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Search_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Seat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Secret_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Secretscanning_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Securityadvisory_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Securitymanager_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Selectedaction_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Selectedteam_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Selecteduser_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Selfhostedrunner_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Setting_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Sharedstorage_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Snapshot_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Socialaccount_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Sshsigningkey_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Star_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Stargazer_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Stat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Statu_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Storagerecord_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Stubbed_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Sub_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Subissue_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Subjectstat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Subscriber_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Summarystat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Suspended_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Tag_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Tarball_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Team_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Timeline_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Timestat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Timing_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Token_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Traffic_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Transfer_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Updatebranch_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Usage_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Usagebyrepository_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "User_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Userstat_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Value_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Variable_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Variantanalys_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Version_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "View_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Visibility_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Vulnerabilityalert_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Workflow_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Zen_id_N"}]);
  const steps = pick([0,1,2,3]);
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
  const x = pick([{id: "Zipball_id_N"}]);
  const steps = pick([0,1,2,3]);
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
