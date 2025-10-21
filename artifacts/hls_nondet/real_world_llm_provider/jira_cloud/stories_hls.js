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

// ===== ACTIVE LIFECYCLES =====


bthread("1Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  add1(x.id);
  update1(x.id);
  update1(x.id);
  verify1Exists(x.id);
  verify1Updated(x.id);
  delete1(x.id);
});

bthread("3Lifecycle", function () {
  const x = pick([{id: "3001"}, {id: "3002"}]);
  add3(x.id);
  update3(x.id);
  update3(x.id);
  verify3Exists(x.id);
  verify3Updated(x.id);
  delete3(x.id);
});

bthread("AccessibleLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccessible(x.id);
  updateAccessible(x.id);
  updateAccessible(x.id);
  verifyAccessibleExists(x.id);
  verifyAccessibleUpdated(x.id);
  deleteAccessible(x.id);
});

bthread("ActorLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addActor(x.id);
  updateActor(x.id);
  updateActor(x.id);
  verifyActorExists(x.id);
  verifyActorUpdated(x.id);
  deleteActor(x.id);
});

bthread("AddonLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddon(x.id);
  updateAddon(x.id);
  updateAddon(x.id);
  verifyAddonExists(x.id);
  verifyAddonUpdated(x.id);
  deleteAddon(x.id);
});

bthread("AddtodefaultLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddtodefault(x.id);
  updateAddtodefault(x.id);
  updateAddtodefault(x.id);
  verifyAddtodefaultExists(x.id);
  verifyAddtodefaultUpdated(x.id);
  deleteAddtodefault(x.id);
});

bthread("AdvancedsettingLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdvancedsetting(x.id);
  updateAdvancedsetting(x.id);
  updateAdvancedsetting(x.id);
  verifyAdvancedsettingExists(x.id);
  verifyAdvancedsettingUpdated(x.id);
  deleteAdvancedsetting(x.id);
});

bthread("AlternativeLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAlternative(x.id);
  updateAlternative(x.id);
  updateAlternative(x.id);
  verifyAlternativeExists(x.id);
  verifyAlternativeUpdated(x.id);
  deleteAlternative(x.id);
});

bthread("AnalyseLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAnalyse(x.id);
  updateAnalyse(x.id);
  updateAnalyse(x.id);
  verifyAnalyseExists(x.id);
  verifyAnalyseUpdated(x.id);
  deleteAnalyse(x.id);
});

bthread("AnnouncementbannerLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAnnouncementbanner(x.id);
  updateAnnouncementbanner(x.id);
  updateAnnouncementbanner(x.id);
  verifyAnnouncementbannerExists(x.id);
  verifyAnnouncementbannerUpdated(x.id);
  deleteAnnouncementbanner(x.id);
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

bthread("ApplicationpropertyLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApplicationproperty(x.id);
  updateApplicationproperty(x.id);
  updateApplicationproperty(x.id);
  verifyApplicationpropertyExists(x.id);
  verifyApplicationpropertyUpdated(x.id);
  deleteApplicationproperty(x.id);
});

bthread("ApplicationroleLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApplicationrole(x.id);
  updateApplicationrole(x.id);
  updateApplicationrole(x.id);
  verifyApplicationroleExists(x.id);
  verifyApplicationroleUpdated(x.id);
  deleteApplicationrole(x.id);
});

bthread("ApproximatecountLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApproximatecount(x.id);
  updateApproximatecount(x.id);
  updateApproximatecount(x.id);
  verifyApproximatecountExists(x.id);
  verifyApproximatecountUpdated(x.id);
  deleteApproximatecount(x.id);
});

bthread("ApproximatelicensecountLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApproximatelicensecount(x.id);
  updateApproximatelicensecount(x.id);
  updateApproximatelicensecount(x.id);
  verifyApproximatelicensecountExists(x.id);
  verifyApproximatelicensecountUpdated(x.id);
  deleteApproximatelicensecount(x.id);
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

bthread("AssignableLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssignable(x.id);
  updateAssignable(x.id);
  updateAssignable(x.id);
  verifyAssignableExists(x.id);
  verifyAssignableUpdated(x.id);
  deleteAssignable(x.id);
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

bthread("AssociationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAssociation(x.id);
  updateAssociation(x.id);
  updateAssociation(x.id);
  verifyAssociationExists(x.id);
  verifyAssociationUpdated(x.id);
  deleteAssociation(x.id);
});

bthread("AtlassianLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAtlassian(x.id);
  updateAtlassian(x.id);
  updateAtlassian(x.id);
  verifyAtlassianExists(x.id);
  verifyAtlassianUpdated(x.id);
  deleteAtlassian(x.id);
});

bthread("AtlassianconnectLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAtlassianconnect(x.id);
  updateAtlassianconnect(x.id);
  updateAtlassianconnect(x.id);
  verifyAtlassianconnectExists(x.id);
  verifyAtlassianconnectUpdated(x.id);
  deleteAtlassianconnect(x.id);
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

bthread("AuditingLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuditing(x.id);
  updateAuditing(x.id);
  updateAuditing(x.id);
  verifyAuditingExists(x.id);
  verifyAuditingUpdated(x.id);
  deleteAuditing(x.id);
});

bthread("AutocompletedataLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAutocompletedata(x.id);
  updateAutocompletedata(x.id);
  updateAutocompletedata(x.id);
  verifyAutocompletedataExists(x.id);
  verifyAutocompletedataUpdated(x.id);
  deleteAutocompletedata(x.id);
});

bthread("AvailableLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailable(x.id);
  updateAvailable(x.id);
  updateAvailable(x.id);
  verifyAvailableExists(x.id);
  verifyAvailableUpdated(x.id);
  deleteAvailable(x.id);
});

bthread("AvailablefieldLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailablefield(x.id);
  updateAvailablefield(x.id);
  updateAvailablefield(x.id);
  verifyAvailablefieldExists(x.id);
  verifyAvailablefieldUpdated(x.id);
  deleteAvailablefield(x.id);
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

bthread("Avatar2Lifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvatar2(x.id);
  updateAvatar2(x.id);
  updateAvatar2(x.id);
  verifyAvatar2Exists(x.id);
  verifyAvatar2Updated(x.id);
  deleteAvatar2(x.id);
});

bthread("BulkLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBulk(x.id);
  updateBulk(x.id);
  updateBulk(x.id);
  verifyBulkExists(x.id);
  verifyBulkUpdated(x.id);
  deleteBulk(x.id);
});

bthread("BulkfetchLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBulkfetch(x.id);
  updateBulkfetch(x.id);
  updateBulkfetch(x.id);
  verifyBulkfetchExists(x.id);
  verifyBulkfetchUpdated(x.id);
  deleteBulkfetch(x.id);
});

bthread("BynameLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addByname(x.id);
  updateByname(x.id);
  updateByname(x.id);
  verifyBynameExists(x.id);
  verifyBynameUpdated(x.id);
  deleteByname(x.id);
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

bthread("CapabilityLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCapability(x.id);
  updateCapability(x.id);
  updateCapability(x.id);
  verifyCapabilityExists(x.id);
  verifyCapabilityUpdated(x.id);
  deleteCapability(x.id);
});

bthread("ChangelogLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChangelog(x.id);
  updateChangelog(x.id);
  updateChangelog(x.id);
  verifyChangelogExists(x.id);
  verifyChangelogUpdated(x.id);
  deleteChangelog(x.id);
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

bthread("ClassificationlevelLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClassificationlevel(x.id);
  updateClassificationlevel(x.id);
  updateClassificationlevel(x.id);
  verifyClassificationlevelExists(x.id);
  verifyClassificationlevelUpdated(x.id);
  deleteClassificationlevel(x.id);
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

bthread("ComponentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComponent(x.id);
  updateComponent(x.id);
  updateComponent(x.id);
  verifyComponentExists(x.id);
  verifyComponentUpdated(x.id);
  deleteComponent(x.id);
});

bthread("ComputationLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComputation(x.id);
  updateComputation(x.id);
  updateComputation(x.id);
  verifyComputationExists(x.id);
  verifyComputationUpdated(x.id);
  deleteComputation(x.id);
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

bthread("CopyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCopy(x.id);
  updateCopy(x.id);
  updateCopy(x.id);
  verifyCopyExists(x.id);
  verifyCopyUpdated(x.id);
  deleteCopy(x.id);
});

bthread("CreateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCreate(x.id);
  updateCreate(x.id);
  updateCreate(x.id);
  verifyCreateExists(x.id);
  verifyCreateUpdated(x.id);
  deleteCreate(x.id);
});

bthread("CreatedraftLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCreatedraft(x.id);
  updateCreatedraft(x.id);
  updateCreatedraft(x.id);
  verifyCreatedraftExists(x.id);
  verifyCreatedraftUpdated(x.id);
  deleteCreatedraft(x.id);
});

bthread("CreatemetaLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCreatemeta(x.id);
  updateCreatemeta(x.id);
  updateCreatemeta(x.id);
  verifyCreatemetaExists(x.id);
  verifyCreatemetaUpdated(x.id);
  deleteCreatemeta(x.id);
});

bthread("CustomfieldoptionLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomfieldoption(x.id);
  updateCustomfieldoption(x.id);
  updateCustomfieldoption(x.id);
  verifyCustomfieldoptionExists(x.id);
  verifyCustomfieldoptionUpdated(x.id);
  deleteCustomfieldoption(x.id);
});

bthread("DashboardLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDashboard(x.id);
  updateDashboard(x.id);
  updateDashboard(x.id);
  verifyDashboardExists(x.id);
  verifyDashboardUpdated(x.id);
  deleteDashboard(x.id);
});

bthread("DatapolicyLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDatapolicy(x.id);
  updateDatapolicy(x.id);
  updateDatapolicy(x.id);
  verifyDatapolicyExists(x.id);
  verifyDatapolicyUpdated(x.id);
  deleteDatapolicy(x.id);
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

bthread("DefaulteditorLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaulteditor(x.id);
  updateDefaulteditor(x.id);
  updateDefaulteditor(x.id);
  verifyDefaulteditorExists(x.id);
  verifyDefaulteditorUpdated(x.id);
  deleteDefaulteditor(x.id);
});

bthread("DefaultsharescopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultsharescope(x.id);
  updateDefaultsharescope(x.id);
  updateDefaultsharescope(x.id);
  verifyDefaultsharescopeExists(x.id);
  verifyDefaultsharescopeUpdated(x.id);
  deleteDefaultsharescope(x.id);
});

bthread("DefaultvalueLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultvalue(x.id);
  updateDefaultvalue(x.id);
  updateDefaultvalue(x.id);
  verifyDefaultvalueExists(x.id);
  verifyDefaultvalueUpdated(x.id);
  deleteDefaultvalue(x.id);
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

bthread("DeletedLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeleted(x.id);
  updateDeleted(x.id);
  updateDeleted(x.id);
  verifyDeletedExists(x.id);
  verifyDeletedUpdated(x.id);
  deleteDeleted(x.id);
});

bthread("DraftLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDraft(x.id);
  updateDraft(x.id);
  updateDraft(x.id);
  verifyDraftExists(x.id);
  verifyDraftUpdated(x.id);
  deleteDraft(x.id);
});

bthread("DuplicateLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDuplicate(x.id);
  updateDuplicate(x.id);
  updateDuplicate(x.id);
  verifyDuplicateExists(x.id);
  verifyDuplicateUpdated(x.id);
  deleteDuplicate(x.id);
});

bthread("DynamicLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDynamic(x.id);
  updateDynamic(x.id);
  updateDynamic(x.id);
  verifyDynamicExists(x.id);
  verifyDynamicUpdated(x.id);
  deleteDynamic(x.id);
});

bthread("EditLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEdit(x.id);
  updateEdit(x.id);
  updateEdit(x.id);
  verifyEditExists(x.id);
  verifyEditUpdated(x.id);
  deleteEdit(x.id);
});

bthread("EditmetaLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEditmeta(x.id);
  updateEditmeta(x.id);
  updateEditmeta(x.id);
  verifyEditmetaExists(x.id);
  verifyEditmetaUpdated(x.id);
  deleteEditmeta(x.id);
});

bthread("EdittemplateLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEdittemplate(x.id);
  updateEdittemplate(x.id);
  updateEdittemplate(x.id);
  verifyEdittemplateExists(x.id);
  verifyEdittemplateUpdated(x.id);
  deleteEdittemplate(x.id);
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

bthread("EvalLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEval(x.id);
  updateEval(x.id);
  updateEval(x.id);
  verifyEvalExists(x.id);
  verifyEvalUpdated(x.id);
  deleteEval(x.id);
});

bthread("EvaluateLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvaluate(x.id);
  updateEvaluate(x.id);
  updateEvaluate(x.id);
  verifyEvaluateExists(x.id);
  verifyEvaluateUpdated(x.id);
  deleteEvaluate(x.id);
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

bthread("ExpandLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExpand(x.id);
  updateExpand(x.id);
  updateExpand(x.id);
  verifyExpandExists(x.id);
  verifyExpandUpdated(x.id);
  deleteExpand(x.id);
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

bthread("ExpressionLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExpression(x.id);
  updateExpression(x.id);
  updateExpression(x.id);
  verifyExpressionExists(x.id);
  verifyExpressionUpdated(x.id);
  deleteExpression(x.id);
});

bthread("FailedLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFailed(x.id);
  updateFailed(x.id);
  updateFailed(x.id);
  verifyFailedExists(x.id);
  verifyFailedUpdated(x.id);
  deleteFailed(x.id);
});

bthread("FavouriteLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFavourite(x.id);
  updateFavourite(x.id);
  updateFavourite(x.id);
  verifyFavouriteExists(x.id);
  verifyFavouriteUpdated(x.id);
  deleteFavourite(x.id);
});

bthread("FeatureLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFeature(x.id);
  updateFeature(x.id);
  updateFeature(x.id);
  verifyFeatureExists(x.id);
  verifyFeatureUpdated(x.id);
  deleteFeature(x.id);
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

bthread("FieldconfigurationLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFieldconfiguration(x.id);
  updateFieldconfiguration(x.id);
  updateFieldconfiguration(x.id);
  verifyFieldconfigurationExists(x.id);
  verifyFieldconfigurationUpdated(x.id);
  deleteFieldconfiguration(x.id);
});

bthread("FieldconfigurationschemeLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFieldconfigurationscheme(x.id);
  updateFieldconfigurationscheme(x.id);
  updateFieldconfigurationscheme(x.id);
  verifyFieldconfigurationschemeExists(x.id);
  verifyFieldconfigurationschemeUpdated(x.id);
  deleteFieldconfigurationscheme(x.id);
});

bthread("FilterLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFilter(x.id);
  updateFilter(x.id);
  updateFilter(x.id);
  verifyFilterExists(x.id);
  verifyFilterUpdated(x.id);
  deleteFilter(x.id);
});

bthread("ForgeLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addForge(x.id);
  updateForge(x.id);
  updateForge(x.id);
  verifyForgeExists(x.id);
  verifyForgeUpdated(x.id);
  deleteForge(x.id);
});

bthread("FunctionLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFunction(x.id);
  updateFunction(x.id);
  updateFunction(x.id);
  verifyFunctionExists(x.id);
  verifyFunctionUpdated(x.id);
  deleteFunction(x.id);
});

bthread("GadgetLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGadget(x.id);
  updateGadget(x.id);
  updateGadget(x.id);
  verifyGadgetExists(x.id);
  verifyGadgetUpdated(x.id);
  deleteGadget(x.id);
});

bthread("GroupLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGroup(x.id);
  updateGroup(x.id);
  updateGroup(x.id);
  verifyGroupExists(x.id);
  verifyGroupUpdated(x.id);
  deleteGroup(x.id);
});

bthread("GroupuserpickerLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGroupuserpicker(x.id);
  updateGroupuserpicker(x.id);
  updateGroupuserpicker(x.id);
  verifyGroupuserpickerExists(x.id);
  verifyGroupuserpickerUpdated(x.id);
  deleteGroupuserpicker(x.id);
});

bthread("HierarchyLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHierarchy(x.id);
  updateHierarchy(x.id);
  updateHierarchy(x.id);
  verifyHierarchyExists(x.id);
  verifyHierarchyUpdated(x.id);
  deleteHierarchy(x.id);
});

bthread("HumanLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHuman(x.id);
  updateHuman(x.id);
  updateHuman(x.id);
  verifyHumanExists(x.id);
  verifyHumanUpdated(x.id);
  deleteHuman(x.id);
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

bthread("IssueLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssue(x.id);
  updateIssue(x.id);
  updateIssue(x.id);
  verifyIssueExists(x.id);
  verifyIssueUpdated(x.id);
  deleteIssue(x.id);
});

bthread("IssuelinkLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuelink(x.id);
  updateIssuelink(x.id);
  updateIssuelink(x.id);
  verifyIssuelinkExists(x.id);
  verifyIssuelinkUpdated(x.id);
  deleteIssuelink(x.id);
});

bthread("IssuelinktypeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuelinktype(x.id);
  updateIssuelinktype(x.id);
  updateIssuelinktype(x.id);
  verifyIssuelinktypeExists(x.id);
  verifyIssuelinktypeUpdated(x.id);
  deleteIssuelinktype(x.id);
});

bthread("IssuesecuritylevelschemeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuesecuritylevelscheme(x.id);
  updateIssuesecuritylevelscheme(x.id);
  updateIssuesecuritylevelscheme(x.id);
  verifyIssuesecuritylevelschemeExists(x.id);
  verifyIssuesecuritylevelschemeUpdated(x.id);
  deleteIssuesecuritylevelscheme(x.id);
});

bthread("IssuesecurityschemeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuesecurityscheme(x.id);
  updateIssuesecurityscheme(x.id);
  updateIssuesecurityscheme(x.id);
  verifyIssuesecurityschemeExists(x.id);
  verifyIssuesecurityschemeUpdated(x.id);
  deleteIssuesecurityscheme(x.id);
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

bthread("IssuetypemappingLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetypemapping(x.id);
  updateIssuetypemapping(x.id);
  updateIssuetypemapping(x.id);
  verifyIssuetypemappingExists(x.id);
  verifyIssuetypemappingUpdated(x.id);
  deleteIssuetypemapping(x.id);
});

bthread("IssuetypeschemeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetypescheme(x.id);
  updateIssuetypescheme(x.id);
  updateIssuetypescheme(x.id);
  verifyIssuetypeschemeExists(x.id);
  verifyIssuetypeschemeUpdated(x.id);
  deleteIssuetypescheme(x.id);
});

bthread("IssuetypescreenschemeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetypescreenscheme(x.id);
  updateIssuetypescreenscheme(x.id);
  updateIssuetypescreenscheme(x.id);
  verifyIssuetypescreenschemeExists(x.id);
  verifyIssuetypescreenschemeUpdated(x.id);
  deleteIssuetypescreenscheme(x.id);
});

bthread("IssuetypeusageLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIssuetypeusage(x.id);
  updateIssuetypeusage(x.id);
  updateIssuetypeusage(x.id);
  verifyIssuetypeusageExists(x.id);
  verifyIssuetypeusageUpdated(x.id);
  deleteIssuetypeusage(x.id);
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

bthread("JqlLifecycle", function () {
  const x = pick([{id: "J001"}, {id: "J002"}]);
  addJql(x.id);
  updateJql(x.id);
  updateJql(x.id);
  verifyJqlExists(x.id);
  verifyJqlUpdated(x.id);
  deleteJql(x.id);
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

bthread("LevelLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLevel(x.id);
  updateLevel(x.id);
  updateLevel(x.id);
  verifyLevelExists(x.id);
  verifyLevelUpdated(x.id);
  deleteLevel(x.id);
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

bthread("ListLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addList(x.id);
  updateList(x.id);
  updateList(x.id);
  verifyListExists(x.id);
  verifyListUpdated(x.id);
  deleteList(x.id);
});

bthread("LivetemplateLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLivetemplate(x.id);
  updateLivetemplate(x.id);
  updateLivetemplate(x.id);
  verifyLivetemplateExists(x.id);
  verifyLivetemplateUpdated(x.id);
  deleteLivetemplate(x.id);
});

bthread("LocaleLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocale(x.id);
  updateLocale(x.id);
  updateLocale(x.id);
  verifyLocaleExists(x.id);
  verifyLocaleUpdated(x.id);
  deleteLocale(x.id);
});

bthread("MappingLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMapping(x.id);
  updateMapping(x.id);
  updateMapping(x.id);
  verifyMappingExists(x.id);
  verifyMappingUpdated(x.id);
  deleteMapping(x.id);
});

bthread("MatchLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMatch(x.id);
  updateMatch(x.id);
  updateMatch(x.id);
  verifyMatchExists(x.id);
  verifyMatchUpdated(x.id);
  deleteMatch(x.id);
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

bthread("MergetoLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMergeto(x.id);
  updateMergeto(x.id);
  updateMergeto(x.id);
  verifyMergetoExists(x.id);
  verifyMergetoUpdated(x.id);
  deleteMergeto(x.id);
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

bthread("MigrationLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMigration(x.id);
  updateMigration(x.id);
  updateMigration(x.id);
  verifyMigrationExists(x.id);
  verifyMigrationUpdated(x.id);
  deleteMigration(x.id);
});

bthread("ModuleLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModule(x.id);
  updateModule(x.id);
  updateModule(x.id);
  verifyModuleExists(x.id);
  verifyModuleUpdated(x.id);
  deleteModule(x.id);
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

bthread("MultiLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMulti(x.id);
  updateMulti(x.id);
  updateMulti(x.id);
  verifyMultiExists(x.id);
  verifyMultiUpdated(x.id);
  deleteMulti(x.id);
});

bthread("MultiprojectsearchLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMultiprojectsearch(x.id);
  updateMultiprojectsearch(x.id);
  updateMultiprojectsearch(x.id);
  verifyMultiprojectsearchExists(x.id);
  verifyMultiprojectsearchUpdated(x.id);
  deleteMultiprojectsearch(x.id);
});

bthread("MyLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMy(x.id);
  updateMy(x.id);
  updateMy(x.id);
  verifyMyExists(x.id);
  verifyMyUpdated(x.id);
  deleteMy(x.id);
});

bthread("MypermissionLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMypermission(x.id);
  updateMypermission(x.id);
  updateMypermission(x.id);
  verifyMypermissionExists(x.id);
  verifyMypermissionUpdated(x.id);
  deleteMypermission(x.id);
});

bthread("MypreferenceLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMypreference(x.id);
  updateMypreference(x.id);
  updateMypreference(x.id);
  verifyMypreferenceExists(x.id);
  verifyMypreferenceUpdated(x.id);
  deleteMypreference(x.id);
});

bthread("MyselfLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMyself(x.id);
  updateMyself(x.id);
  updateMyself(x.id);
  verifyMyselfExists(x.id);
  verifyMyselfUpdated(x.id);
  deleteMyself(x.id);
});

bthread("Nav4optpropertyLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNav4optproperty(x.id);
  updateNav4optproperty(x.id);
  updateNav4optproperty(x.id);
  verifyNav4optpropertyExists(x.id);
  verifyNav4optpropertyUpdated(x.id);
  deleteNav4optproperty(x.id);
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

bthread("NotificationschemeLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotificationscheme(x.id);
  updateNotificationscheme(x.id);
  updateNotificationscheme(x.id);
  verifyNotificationschemeExists(x.id);
  verifyNotificationschemeUpdated(x.id);
  deleteNotificationscheme(x.id);
});

bthread("NotifyLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotify(x.id);
  updateNotify(x.id);
  updateNotify(x.id);
  verifyNotifyExists(x.id);
  verifyNotifyUpdated(x.id);
  deleteNotify(x.id);
});

bthread("OptionLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOption(x.id);
  updateOption(x.id);
  updateOption(x.id);
  verifyOptionExists(x.id);
  verifyOptionUpdated(x.id);
  deleteOption(x.id);
});

bthread("OwnerLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOwner(x.id);
  updateOwner(x.id);
  updateOwner(x.id);
  verifyOwnerExists(x.id);
  verifyOwnerUpdated(x.id);
  deleteOwner(x.id);
});

bthread("ParseLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addParse(x.id);
  updateParse(x.id);
  updateParse(x.id);
  verifyParseExists(x.id);
  verifyParseUpdated(x.id);
  deleteParse(x.id);
});

bthread("PdcleanerLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPdcleaner(x.id);
  updatePdcleaner(x.id);
  updatePdcleaner(x.id);
  verifyPdcleanerExists(x.id);
  verifyPdcleanerUpdated(x.id);
  deletePdcleaner(x.id);
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

bthread("PermissionschemeLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermissionscheme(x.id);
  updatePermissionscheme(x.id);
  updatePermissionscheme(x.id);
  verifyPermissionschemeExists(x.id);
  verifyPermissionschemeUpdated(x.id);
  deletePermissionscheme(x.id);
});

bthread("PickerLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPicker(x.id);
  updatePicker(x.id);
  updatePicker(x.id);
  verifyPickerExists(x.id);
  verifyPickerUpdated(x.id);
  deletePicker(x.id);
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

bthread("PlanonlyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPlanonly(x.id);
  updatePlanonly(x.id);
  updatePlanonly(x.id);
  verifyPlanonlyExists(x.id);
  verifyPlanonlyUpdated(x.id);
  deletePlanonly(x.id);
});

bthread("PreviewLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPreview(x.id);
  updatePreview(x.id);
  updatePreview(x.id);
  verifyPreviewExists(x.id);
  verifyPreviewUpdated(x.id);
  deletePreview(x.id);
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

bthread("PriorityschemeLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPriorityscheme(x.id);
  updatePriorityscheme(x.id);
  updatePriorityscheme(x.id);
  verifyPriorityschemeExists(x.id);
  verifyPriorityschemeUpdated(x.id);
  deletePriorityscheme(x.id);
});

bthread("ProductLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProduct(x.id);
  updateProduct(x.id);
  updateProduct(x.id);
  verifyProductExists(x.id);
  verifyProductUpdated(x.id);
  deleteProduct(x.id);
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

bthread("ProjectcategoryLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjectcategory(x.id);
  updateProjectcategory(x.id);
  updateProjectcategory(x.id);
  verifyProjectcategoryExists(x.id);
  verifyProjectcategoryUpdated(x.id);
  deleteProjectcategory(x.id);
});

bthread("ProjectmappingLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjectmapping(x.id);
  updateProjectmapping(x.id);
  updateProjectmapping(x.id);
  verifyProjectmappingExists(x.id);
  verifyProjectmappingUpdated(x.id);
  deleteProjectmapping(x.id);
});

bthread("ProjecttemplateLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjecttemplate(x.id);
  updateProjecttemplate(x.id);
  updateProjecttemplate(x.id);
  verifyProjecttemplateExists(x.id);
  verifyProjecttemplateUpdated(x.id);
  deleteProjecttemplate(x.id);
});

bthread("ProjectusageLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjectusage(x.id);
  updateProjectusage(x.id);
  updateProjectusage(x.id);
  verifyProjectusageExists(x.id);
  verifyProjectusageUpdated(x.id);
  deleteProjectusage(x.id);
});

bthread("ProjectvalidateLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProjectvalidate(x.id);
  updateProjectvalidate(x.id);
  updateProjectvalidate(x.id);
  verifyProjectvalidateExists(x.id);
  verifyProjectvalidateUpdated(x.id);
  deleteProjectvalidate(x.id);
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

bthread("PublishLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPublish(x.id);
  updatePublish(x.id);
  updatePublish(x.id);
  verifyPublishExists(x.id);
  verifyPublishUpdated(x.id);
  deletePublish(x.id);
});

bthread("QueryLifecycle", function () {
  const x = pick([{id: "Q001"}, {id: "Q002"}]);
  addQuery(x.id);
  updateQuery(x.id);
  updateQuery(x.id);
  verifyQueryExists(x.id);
  verifyQueryUpdated(x.id);
  deleteQuery(x.id);
});

bthread("QueueLifecycle", function () {
  const x = pick([{id: "Q001"}, {id: "Q002"}]);
  addQueue(x.id);
  updateQueue(x.id);
  updateQueue(x.id);
  verifyQueueExists(x.id);
  verifyQueueUpdated(x.id);
  deleteQueue(x.id);
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

bthread("ReadLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRead(x.id);
  updateRead(x.id);
  updateRead(x.id);
  verifyReadExists(x.id);
  verifyReadUpdated(x.id);
  deleteRead(x.id);
});

bthread("RecentLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRecent(x.id);
  updateRecent(x.id);
  updateRecent(x.id);
  verifyRecentExists(x.id);
  verifyRecentUpdated(x.id);
  deleteRecent(x.id);
});

bthread("RecordLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRecord(x.id);
  updateRecord(x.id);
  updateRecord(x.id);
  verifyRecordExists(x.id);
  verifyRecordUpdated(x.id);
  deleteRecord(x.id);
});

bthread("RedactLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRedact(x.id);
  updateRedact(x.id);
  updateRedact(x.id);
  verifyRedactExists(x.id);
  verifyRedactUpdated(x.id);
  deleteRedact(x.id);
});

bthread("RefreshLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRefresh(x.id);
  updateRefresh(x.id);
  updateRefresh(x.id);
  verifyRefreshExists(x.id);
  verifyRefreshUpdated(x.id);
  deleteRefresh(x.id);
});

bthread("RelatedissuecountLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRelatedissuecount(x.id);
  updateRelatedissuecount(x.id);
  updateRelatedissuecount(x.id);
  verifyRelatedissuecountExists(x.id);
  verifyRelatedissuecountUpdated(x.id);
  deleteRelatedissuecount(x.id);
});

bthread("RelatedworkLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRelatedwork(x.id);
  updateRelatedwork(x.id);
  updateRelatedwork(x.id);
  verifyRelatedworkExists(x.id);
  verifyRelatedworkUpdated(x.id);
  deleteRelatedwork(x.id);
});

bthread("RemotelinkLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemotelink(x.id);
  updateRemotelink(x.id);
  updateRemotelink(x.id);
  verifyRemotelinkExists(x.id);
  verifyRemotelinkUpdated(x.id);
  deleteRemotelink(x.id);
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

bthread("RemoveandswapLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemoveandswap(x.id);
  updateRemoveandswap(x.id);
  updateRemoveandswap(x.id);
  verifyRemoveandswapExists(x.id);
  verifyRemoveandswapUpdated(x.id);
  deleteRemoveandswap(x.id);
});

bthread("RemovetemplateLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRemovetemplate(x.id);
  updateRemovetemplate(x.id);
  updateRemovetemplate(x.id);
  verifyRemovetemplateExists(x.id);
  verifyRemovetemplateUpdated(x.id);
  deleteRemovetemplate(x.id);
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

bthread("ResolutionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResolution(x.id);
  updateResolution(x.id);
  updateResolution(x.id);
  verifyResolutionExists(x.id);
  verifyResolutionUpdated(x.id);
  deleteResolution(x.id);
});

bthread("RestLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRest(x.id);
  updateRest(x.id);
  updateRest(x.id);
  verifyRestExists(x.id);
  verifyRestUpdated(x.id);
  deleteRest(x.id);
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

bthread("RoleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRole(x.id);
  updateRole(x.id);
  updateRole(x.id);
  verifyRoleExists(x.id);
  verifyRoleUpdated(x.id);
  deleteRole(x.id);
});

bthread("RoledetailLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRoledetail(x.id);
  updateRoledetail(x.id);
  updateRoledetail(x.id);
  verifyRoledetailExists(x.id);
  verifyRoledetailUpdated(x.id);
  deleteRoledetail(x.id);
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

bthread("SanitizeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSanitize(x.id);
  updateSanitize(x.id);
  updateSanitize(x.id);
  verifySanitizeExists(x.id);
  verifySanitizeUpdated(x.id);
  deleteSanitize(x.id);
});

bthread("SavetemplateLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSavetemplate(x.id);
  updateSavetemplate(x.id);
  updateSavetemplate(x.id);
  verifySavetemplateExists(x.id);
  verifySavetemplateUpdated(x.id);
  deleteSavetemplate(x.id);
});

bthread("ScreenLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScreen(x.id);
  updateScreen(x.id);
  updateScreen(x.id);
  verifyScreenExists(x.id);
  verifyScreenUpdated(x.id);
  deleteScreen(x.id);
});

bthread("ScreenschemeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScreenscheme(x.id);
  updateScreenscheme(x.id);
  updateScreenscheme(x.id);
  verifyScreenschemeExists(x.id);
  verifyScreenschemeUpdated(x.id);
  deleteScreenscheme(x.id);
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

bthread("SecuritylevelLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSecuritylevel(x.id);
  updateSecuritylevel(x.id);
  updateSecuritylevel(x.id);
  verifySecuritylevelExists(x.id);
  verifySecuritylevelUpdated(x.id);
  deleteSecuritylevel(x.id);
});

bthread("ServerinfoLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServerinfo(x.id);
  updateServerinfo(x.id);
  updateServerinfo(x.id);
  verifyServerinfoExists(x.id);
  verifyServerinfoUpdated(x.id);
  deleteServerinfo(x.id);
});

bthread("ServiceregistryLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServiceregistry(x.id);
  updateServiceregistry(x.id);
  updateServiceregistry(x.id);
  verifyServiceregistryExists(x.id);
  verifyServiceregistryUpdated(x.id);
  deleteServiceregistry(x.id);
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

bthread("StatuscategoryLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStatuscategory(x.id);
  updateStatuscategory(x.id);
  updateStatuscategory(x.id);
  verifyStatuscategoryExists(x.id);
  verifyStatuscategoryUpdated(x.id);
  deleteStatuscategory(x.id);
});

bthread("SuggestionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSuggestion(x.id);
  updateSuggestion(x.id);
  updateSuggestion(x.id);
  verifySuggestionExists(x.id);
  verifySuggestionUpdated(x.id);
  deleteSuggestion(x.id);
});

bthread("SystemLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSystem(x.id);
  updateSystem(x.id);
  updateSystem(x.id);
  verifySystemExists(x.id);
  verifySystemUpdated(x.id);
  deleteSystem(x.id);
});

bthread("TabLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTab(x.id);
  updateTab(x.id);
  updateTab(x.id);
  verifyTabExists(x.id);
  verifyTabUpdated(x.id);
  deleteTab(x.id);
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

bthread("ThumbnailLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addThumbnail(x.id);
  updateThumbnail(x.id);
  updateThumbnail(x.id);
  verifyThumbnailExists(x.id);
  verifyThumbnailUpdated(x.id);
  deleteThumbnail(x.id);
});

bthread("TimetrackingLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTimetracking(x.id);
  updateTimetracking(x.id);
  updateTimetracking(x.id);
  verifyTimetrackingExists(x.id);
  verifyTimetrackingUpdated(x.id);
  deleteTimetracking(x.id);
});

bthread("TransitionLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTransition(x.id);
  updateTransition(x.id);
  updateTransition(x.id);
  verifyTransitionExists(x.id);
  verifyTransitionUpdated(x.id);
  deleteTransition(x.id);
});

bthread("TrashLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTrash(x.id);
  updateTrash(x.id);
  updateTrash(x.id);
  verifyTrashExists(x.id);
  verifyTrashUpdated(x.id);
  deleteTrash(x.id);
});

bthread("TrashedLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTrashed(x.id);
  updateTrashed(x.id);
  updateTrashed(x.id);
  verifyTrashedExists(x.id);
  verifyTrashedUpdated(x.id);
  deleteTrashed(x.id);
});

bthread("TypeLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addType(x.id);
  updateType(x.id);
  updateType(x.id);
  verifyTypeExists(x.id);
  verifyTypeUpdated(x.id);
  deleteType(x.id);
});

bthread("UimodificationLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUimodification(x.id);
  updateUimodification(x.id);
  updateUimodification(x.id);
  verifyUimodificationExists(x.id);
  verifyUimodificationUpdated(x.id);
  deleteUimodification(x.id);
});

bthread("UnarchiveLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnarchive(x.id);
  updateUnarchive(x.id);
  updateUnarchive(x.id);
  verifyUnarchiveExists(x.id);
  verifyUnarchiveUpdated(x.id);
  deleteUnarchive(x.id);
});

bthread("UniversalavatarLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUniversalavatar(x.id);
  updateUniversalavatar(x.id);
  updateUniversalavatar(x.id);
  verifyUniversalavatarExists(x.id);
  verifyUniversalavatarUpdated(x.id);
  deleteUniversalavatar(x.id);
});

bthread("UnresolvedissuecountLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnresolvedissuecount(x.id);
  updateUnresolvedissuecount(x.id);
  updateUnresolvedissuecount(x.id);
  verifyUnresolvedissuecountExists(x.id);
  verifyUnresolvedissuecountUpdated(x.id);
  deleteUnresolvedissuecount(x.id);
});

bthread("UnwatchLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnwatch(x.id);
  updateUnwatch(x.id);
  updateUnwatch(x.id);
  verifyUnwatchExists(x.id);
  verifyUnwatchUpdated(x.id);
  deleteUnwatch(x.id);
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

bthread("UpdatedLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUpdated(x.id);
  updateUpdated(x.id);
  updateUpdated(x.id);
  verifyUpdatedExists(x.id);
  verifyUpdatedUpdated(x.id);
  deleteUpdated(x.id);
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

bthread("ValidationLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addValidation(x.id);
  updateValidation(x.id);
  updateValidation(x.id);
  verifyValidationExists(x.id);
  verifyValidationUpdated(x.id);
  deleteValidation(x.id);
});

bthread("ValidprojectkeyLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addValidprojectkey(x.id);
  updateValidprojectkey(x.id);
  updateValidprojectkey(x.id);
  verifyValidprojectkeyExists(x.id);
  verifyValidprojectkeyUpdated(x.id);
  deleteValidprojectkey(x.id);
});

bthread("ValidprojectnameLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addValidprojectname(x.id);
  updateValidprojectname(x.id);
  updateValidprojectname(x.id);
  verifyValidprojectnameExists(x.id);
  verifyValidprojectnameUpdated(x.id);
  deleteValidprojectname(x.id);
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

bthread("ViewissueLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addViewissue(x.id);
  updateViewissue(x.id);
  updateViewissue(x.id);
  verifyViewissueExists(x.id);
  verifyViewissueUpdated(x.id);
  deleteViewissue(x.id);
});

bthread("VoteLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVote(x.id);
  updateVote(x.id);
  updateVote(x.id);
  verifyVoteExists(x.id);
  verifyVoteUpdated(x.id);
  deleteVote(x.id);
});

bthread("WatchLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWatch(x.id);
  updateWatch(x.id);
  updateWatch(x.id);
  verifyWatchExists(x.id);
  verifyWatchUpdated(x.id);
  deleteWatch(x.id);
});

bthread("WatcherLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWatcher(x.id);
  updateWatcher(x.id);
  updateWatcher(x.id);
  verifyWatcherExists(x.id);
  verifyWatcherUpdated(x.id);
  deleteWatcher(x.id);
});

bthread("WatchingLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWatching(x.id);
  updateWatching(x.id);
  updateWatching(x.id);
  verifyWatchingExists(x.id);
  verifyWatchingUpdated(x.id);
  deleteWatching(x.id);
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWebhook(x.id);
  updateWebhook(x.id);
  updateWebhook(x.id);
  verifyWebhookExists(x.id);
  verifyWebhookUpdated(x.id);
  deleteWebhook(x.id);
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

bthread("WorkflowschemeLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorkflowscheme(x.id);
  updateWorkflowscheme(x.id);
  updateWorkflowscheme(x.id);
  verifyWorkflowschemeExists(x.id);
  verifyWorkflowschemeUpdated(x.id);
  deleteWorkflowscheme(x.id);
});

bthread("WorkflowusageLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorkflowusage(x.id);
  updateWorkflowusage(x.id);
  updateWorkflowusage(x.id);
  verifyWorkflowusageExists(x.id);
  verifyWorkflowusageUpdated(x.id);
  deleteWorkflowusage(x.id);
});

bthread("WorklogLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorklog(x.id);
  updateWorklog(x.id);
  updateWorklog(x.id);
  verifyWorklogExists(x.id);
  verifyWorklogUpdated(x.id);
  deleteWorklog(x.id);
});

// ===== NONDET VARIANTS =====

bthread("1 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1_id_N"}]);
  const steps = pick([0,1,2,10]);
  add1(x.id);
  for (var i=0; i<steps; i++) {
    update1(x.id);
  }
  if (pick([true,false])) { delete1(x.id); }
  verify1Exists(x.id);
  verify1Updated(x.id);
});

bthread("1 nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: '1' + ids[0] };
  const b = { id: '1' + ids[1] };
  add1(a.id);
  block(matchAdd1(a.id, ANY), function () {});
  add1(b.id);
});

bthread("3 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "3_id_N"}]);
  const steps = pick([0,1,2,10]);
  add3(x.id);
  for (var i=0; i<steps; i++) {
    update3(x.id);
  }
  if (pick([true,false])) { delete3(x.id); }
  verify3Exists(x.id);
  verify3Updated(x.id);
});

bthread("3 nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: '3' + ids[0] };
  const b = { id: '3' + ids[1] };
  add3(a.id);
  block(matchAdd3(a.id, ANY), function () {});
  add3(b.id);
});

bthread("Accessible nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Accessible_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAccessible(x.id);
  for (var i=0; i<steps; i++) {
    updateAccessible(x.id);
  }
  if (pick([true,false])) { deleteAccessible(x.id); }
  verifyAccessibleExists(x.id);
  verifyAccessibleUpdated(x.id);
});

bthread("Accessible nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAccessible(a.id);
  block(matchAddAccessible(a.id, ANY), function () {});
  addAccessible(b.id);
});

bthread("Actor nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Actor_id_N"}]);
  const steps = pick([0,1,2,10]);
  addActor(x.id);
  for (var i=0; i<steps; i++) {
    updateActor(x.id);
  }
  if (pick([true,false])) { deleteActor(x.id); }
  verifyActorExists(x.id);
  verifyActorUpdated(x.id);
});

bthread("Actor nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addActor(a.id);
  block(matchAddActor(a.id, ANY), function () {});
  addActor(b.id);
});

bthread("Addon nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Addon_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAddon(x.id);
  for (var i=0; i<steps; i++) {
    updateAddon(x.id);
  }
  if (pick([true,false])) { deleteAddon(x.id); }
  verifyAddonExists(x.id);
  verifyAddonUpdated(x.id);
});

bthread("Addon nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAddon(a.id);
  block(matchAddAddon(a.id, ANY), function () {});
  addAddon(b.id);
});

bthread("Addtodefault nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Addtodefault_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAddtodefault(x.id);
  for (var i=0; i<steps; i++) {
    updateAddtodefault(x.id);
  }
  if (pick([true,false])) { deleteAddtodefault(x.id); }
  verifyAddtodefaultExists(x.id);
  verifyAddtodefaultUpdated(x.id);
});

bthread("Addtodefault nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAddtodefault(a.id);
  block(matchAddAddtodefault(a.id, ANY), function () {});
  addAddtodefault(b.id);
});

bthread("Advancedsetting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Advancedsetting_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAdvancedsetting(x.id);
  for (var i=0; i<steps; i++) {
    updateAdvancedsetting(x.id);
  }
  if (pick([true,false])) { deleteAdvancedsetting(x.id); }
  verifyAdvancedsettingExists(x.id);
  verifyAdvancedsettingUpdated(x.id);
});

bthread("Advancedsetting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAdvancedsetting(a.id);
  block(matchAddAdvancedsetting(a.id, ANY), function () {});
  addAdvancedsetting(b.id);
});

bthread("Alternative nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Alternative_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAlternative(x.id);
  for (var i=0; i<steps; i++) {
    updateAlternative(x.id);
  }
  if (pick([true,false])) { deleteAlternative(x.id); }
  verifyAlternativeExists(x.id);
  verifyAlternativeUpdated(x.id);
});

bthread("Alternative nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAlternative(a.id);
  block(matchAddAlternative(a.id, ANY), function () {});
  addAlternative(b.id);
});

bthread("Analyse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Analyse_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAnalyse(x.id);
  for (var i=0; i<steps; i++) {
    updateAnalyse(x.id);
  }
  if (pick([true,false])) { deleteAnalyse(x.id); }
  verifyAnalyseExists(x.id);
  verifyAnalyseUpdated(x.id);
});

bthread("Analyse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAnalyse(a.id);
  block(matchAddAnalyse(a.id, ANY), function () {});
  addAnalyse(b.id);
});

bthread("Announcementbanner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Announcementbanner_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAnnouncementbanner(x.id);
  for (var i=0; i<steps; i++) {
    updateAnnouncementbanner(x.id);
  }
  if (pick([true,false])) { deleteAnnouncementbanner(x.id); }
  verifyAnnouncementbannerExists(x.id);
  verifyAnnouncementbannerUpdated(x.id);
});

bthread("Announcementbanner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAnnouncementbanner(a.id);
  block(matchAddAnnouncementbanner(a.id, ANY), function () {});
  addAnnouncementbanner(b.id);
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

bthread("App nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "App_id_N"}]);
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

bthread("Applicationproperty nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Applicationproperty_id_N"}]);
  const steps = pick([0,1,2,10]);
  addApplicationproperty(x.id);
  for (var i=0; i<steps; i++) {
    updateApplicationproperty(x.id);
  }
  if (pick([true,false])) { deleteApplicationproperty(x.id); }
  verifyApplicationpropertyExists(x.id);
  verifyApplicationpropertyUpdated(x.id);
});

bthread("Applicationproperty nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApplicationproperty(a.id);
  block(matchAddApplicationproperty(a.id, ANY), function () {});
  addApplicationproperty(b.id);
});

bthread("Applicationrole nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Applicationrole_id_N"}]);
  const steps = pick([0,1,2,10]);
  addApplicationrole(x.id);
  for (var i=0; i<steps; i++) {
    updateApplicationrole(x.id);
  }
  if (pick([true,false])) { deleteApplicationrole(x.id); }
  verifyApplicationroleExists(x.id);
  verifyApplicationroleUpdated(x.id);
});

bthread("Applicationrole nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApplicationrole(a.id);
  block(matchAddApplicationrole(a.id, ANY), function () {});
  addApplicationrole(b.id);
});

bthread("Approximatecount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Approximatecount_id_N"}]);
  const steps = pick([0,1,2,10]);
  addApproximatecount(x.id);
  for (var i=0; i<steps; i++) {
    updateApproximatecount(x.id);
  }
  if (pick([true,false])) { deleteApproximatecount(x.id); }
  verifyApproximatecountExists(x.id);
  verifyApproximatecountUpdated(x.id);
});

bthread("Approximatecount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApproximatecount(a.id);
  block(matchAddApproximatecount(a.id, ANY), function () {});
  addApproximatecount(b.id);
});

bthread("Approximatelicensecount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Approximatelicensecount_id_N"}]);
  const steps = pick([0,1,2,10]);
  addApproximatelicensecount(x.id);
  for (var i=0; i<steps; i++) {
    updateApproximatelicensecount(x.id);
  }
  if (pick([true,false])) { deleteApproximatelicensecount(x.id); }
  verifyApproximatelicensecountExists(x.id);
  verifyApproximatelicensecountUpdated(x.id);
});

bthread("Approximatelicensecount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApproximatelicensecount(a.id);
  block(matchAddApproximatelicensecount(a.id, ANY), function () {});
  addApproximatelicensecount(b.id);
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

bthread("Assignable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Assignable_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAssignable(x.id);
  for (var i=0; i<steps; i++) {
    updateAssignable(x.id);
  }
  if (pick([true,false])) { deleteAssignable(x.id); }
  verifyAssignableExists(x.id);
  verifyAssignableUpdated(x.id);
});

bthread("Assignable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAssignable(a.id);
  block(matchAddAssignable(a.id, ANY), function () {});
  addAssignable(b.id);
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

bthread("Association nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Association_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAssociation(x.id);
  for (var i=0; i<steps; i++) {
    updateAssociation(x.id);
  }
  if (pick([true,false])) { deleteAssociation(x.id); }
  verifyAssociationExists(x.id);
  verifyAssociationUpdated(x.id);
});

bthread("Association nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAssociation(a.id);
  block(matchAddAssociation(a.id, ANY), function () {});
  addAssociation(b.id);
});

bthread("Atlassian nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Atlassian_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAtlassian(x.id);
  for (var i=0; i<steps; i++) {
    updateAtlassian(x.id);
  }
  if (pick([true,false])) { deleteAtlassian(x.id); }
  verifyAtlassianExists(x.id);
  verifyAtlassianUpdated(x.id);
});

bthread("Atlassian nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAtlassian(a.id);
  block(matchAddAtlassian(a.id, ANY), function () {});
  addAtlassian(b.id);
});

bthread("Atlassianconnect nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Atlassianconnect_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAtlassianconnect(x.id);
  for (var i=0; i<steps; i++) {
    updateAtlassianconnect(x.id);
  }
  if (pick([true,false])) { deleteAtlassianconnect(x.id); }
  verifyAtlassianconnectExists(x.id);
  verifyAtlassianconnectUpdated(x.id);
});

bthread("Atlassianconnect nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAtlassianconnect(a.id);
  block(matchAddAtlassianconnect(a.id, ANY), function () {});
  addAtlassianconnect(b.id);
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

bthread("Auditing nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Auditing_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAuditing(x.id);
  for (var i=0; i<steps; i++) {
    updateAuditing(x.id);
  }
  if (pick([true,false])) { deleteAuditing(x.id); }
  verifyAuditingExists(x.id);
  verifyAuditingUpdated(x.id);
});

bthread("Auditing nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAuditing(a.id);
  block(matchAddAuditing(a.id, ANY), function () {});
  addAuditing(b.id);
});

bthread("Autocompletedata nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Autocompletedata_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAutocompletedata(x.id);
  for (var i=0; i<steps; i++) {
    updateAutocompletedata(x.id);
  }
  if (pick([true,false])) { deleteAutocompletedata(x.id); }
  verifyAutocompletedataExists(x.id);
  verifyAutocompletedataUpdated(x.id);
});

bthread("Autocompletedata nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAutocompletedata(a.id);
  block(matchAddAutocompletedata(a.id, ANY), function () {});
  addAutocompletedata(b.id);
});

bthread("Available nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Available_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAvailable(x.id);
  for (var i=0; i<steps; i++) {
    updateAvailable(x.id);
  }
  if (pick([true,false])) { deleteAvailable(x.id); }
  verifyAvailableExists(x.id);
  verifyAvailableUpdated(x.id);
});

bthread("Available nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAvailable(a.id);
  block(matchAddAvailable(a.id, ANY), function () {});
  addAvailable(b.id);
});

bthread("Availablefield nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Availablefield_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAvailablefield(x.id);
  for (var i=0; i<steps; i++) {
    updateAvailablefield(x.id);
  }
  if (pick([true,false])) { deleteAvailablefield(x.id); }
  verifyAvailablefieldExists(x.id);
  verifyAvailablefieldUpdated(x.id);
});

bthread("Availablefield nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAvailablefield(a.id);
  block(matchAddAvailablefield(a.id, ANY), function () {});
  addAvailablefield(b.id);
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

bthread("Avatar2 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Avatar2_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAvatar2(x.id);
  for (var i=0; i<steps; i++) {
    updateAvatar2(x.id);
  }
  if (pick([true,false])) { deleteAvatar2(x.id); }
  verifyAvatar2Exists(x.id);
  verifyAvatar2Updated(x.id);
});

bthread("Avatar2 nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAvatar2(a.id);
  block(matchAddAvatar2(a.id, ANY), function () {});
  addAvatar2(b.id);
});

bthread("Bulk nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Bulk_id_N"}]);
  const steps = pick([0,1,2,10]);
  addBulk(x.id);
  for (var i=0; i<steps; i++) {
    updateBulk(x.id);
  }
  if (pick([true,false])) { deleteBulk(x.id); }
  verifyBulkExists(x.id);
  verifyBulkUpdated(x.id);
});

bthread("Bulk nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBulk(a.id);
  block(matchAddBulk(a.id, ANY), function () {});
  addBulk(b.id);
});

bthread("Bulkfetch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Bulkfetch_id_N"}]);
  const steps = pick([0,1,2,10]);
  addBulkfetch(x.id);
  for (var i=0; i<steps; i++) {
    updateBulkfetch(x.id);
  }
  if (pick([true,false])) { deleteBulkfetch(x.id); }
  verifyBulkfetchExists(x.id);
  verifyBulkfetchUpdated(x.id);
});

bthread("Bulkfetch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBulkfetch(a.id);
  block(matchAddBulkfetch(a.id, ANY), function () {});
  addBulkfetch(b.id);
});

bthread("Byname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Byname_id_N"}]);
  const steps = pick([0,1,2,10]);
  addByname(x.id);
  for (var i=0; i<steps; i++) {
    updateByname(x.id);
  }
  if (pick([true,false])) { deleteByname(x.id); }
  verifyBynameExists(x.id);
  verifyBynameUpdated(x.id);
});

bthread("Byname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addByname(a.id);
  block(matchAddByname(a.id, ANY), function () {});
  addByname(b.id);
});

bthread("Cancel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Cancel_id_N"}]);
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

bthread("Capability nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Capability_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCapability(x.id);
  for (var i=0; i<steps; i++) {
    updateCapability(x.id);
  }
  if (pick([true,false])) { deleteCapability(x.id); }
  verifyCapabilityExists(x.id);
  verifyCapabilityUpdated(x.id);
});

bthread("Capability nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCapability(a.id);
  block(matchAddCapability(a.id, ANY), function () {});
  addCapability(b.id);
});

bthread("Changelog nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Changelog_id_N"}]);
  const steps = pick([0,1,2,10]);
  addChangelog(x.id);
  for (var i=0; i<steps; i++) {
    updateChangelog(x.id);
  }
  if (pick([true,false])) { deleteChangelog(x.id); }
  verifyChangelogExists(x.id);
  verifyChangelogUpdated(x.id);
});

bthread("Changelog nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addChangelog(a.id);
  block(matchAddChangelog(a.id, ANY), function () {});
  addChangelog(b.id);
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

bthread("Classificationlevel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Classificationlevel_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClassificationlevel(x.id);
  for (var i=0; i<steps; i++) {
    updateClassificationlevel(x.id);
  }
  if (pick([true,false])) { deleteClassificationlevel(x.id); }
  verifyClassificationlevelExists(x.id);
  verifyClassificationlevelUpdated(x.id);
});

bthread("Classificationlevel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClassificationlevel(a.id);
  block(matchAddClassificationlevel(a.id, ANY), function () {});
  addClassificationlevel(b.id);
});

bthread("Column nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Column_id_N"}]);
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

bthread("Component nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Component_id_N"}]);
  const steps = pick([0,1,2,10]);
  addComponent(x.id);
  for (var i=0; i<steps; i++) {
    updateComponent(x.id);
  }
  if (pick([true,false])) { deleteComponent(x.id); }
  verifyComponentExists(x.id);
  verifyComponentUpdated(x.id);
});

bthread("Component nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addComponent(a.id);
  block(matchAddComponent(a.id, ANY), function () {});
  addComponent(b.id);
});

bthread("Computation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Computation_id_N"}]);
  const steps = pick([0,1,2,10]);
  addComputation(x.id);
  for (var i=0; i<steps; i++) {
    updateComputation(x.id);
  }
  if (pick([true,false])) { deleteComputation(x.id); }
  verifyComputationExists(x.id);
  verifyComputationUpdated(x.id);
});

bthread("Computation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addComputation(a.id);
  block(matchAddComputation(a.id, ANY), function () {});
  addComputation(b.id);
});

bthread("Config nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Config_id_N"}]);
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
  const x = pick([{id: "Configuration_id_N"}]);
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

bthread("Context nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Context_id_N"}]);
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

bthread("Copy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Copy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCopy(x.id);
  for (var i=0; i<steps; i++) {
    updateCopy(x.id);
  }
  if (pick([true,false])) { deleteCopy(x.id); }
  verifyCopyExists(x.id);
  verifyCopyUpdated(x.id);
});

bthread("Copy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCopy(a.id);
  block(matchAddCopy(a.id, ANY), function () {});
  addCopy(b.id);
});

bthread("Create nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Create_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCreate(x.id);
  for (var i=0; i<steps; i++) {
    updateCreate(x.id);
  }
  if (pick([true,false])) { deleteCreate(x.id); }
  verifyCreateExists(x.id);
  verifyCreateUpdated(x.id);
});

bthread("Create nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCreate(a.id);
  block(matchAddCreate(a.id, ANY), function () {});
  addCreate(b.id);
});

bthread("Createdraft nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Createdraft_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCreatedraft(x.id);
  for (var i=0; i<steps; i++) {
    updateCreatedraft(x.id);
  }
  if (pick([true,false])) { deleteCreatedraft(x.id); }
  verifyCreatedraftExists(x.id);
  verifyCreatedraftUpdated(x.id);
});

bthread("Createdraft nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCreatedraft(a.id);
  block(matchAddCreatedraft(a.id, ANY), function () {});
  addCreatedraft(b.id);
});

bthread("Createmeta nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Createmeta_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCreatemeta(x.id);
  for (var i=0; i<steps; i++) {
    updateCreatemeta(x.id);
  }
  if (pick([true,false])) { deleteCreatemeta(x.id); }
  verifyCreatemetaExists(x.id);
  verifyCreatemetaUpdated(x.id);
});

bthread("Createmeta nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCreatemeta(a.id);
  block(matchAddCreatemeta(a.id, ANY), function () {});
  addCreatemeta(b.id);
});

bthread("Customfieldoption nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Customfieldoption_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCustomfieldoption(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomfieldoption(x.id);
  }
  if (pick([true,false])) { deleteCustomfieldoption(x.id); }
  verifyCustomfieldoptionExists(x.id);
  verifyCustomfieldoptionUpdated(x.id);
});

bthread("Customfieldoption nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomfieldoption(a.id);
  block(matchAddCustomfieldoption(a.id, ANY), function () {});
  addCustomfieldoption(b.id);
});

bthread("Dashboard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Dashboard_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDashboard(x.id);
  for (var i=0; i<steps; i++) {
    updateDashboard(x.id);
  }
  if (pick([true,false])) { deleteDashboard(x.id); }
  verifyDashboardExists(x.id);
  verifyDashboardUpdated(x.id);
});

bthread("Dashboard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDashboard(a.id);
  block(matchAddDashboard(a.id, ANY), function () {});
  addDashboard(b.id);
});

bthread("Datapolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Datapolicy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDatapolicy(x.id);
  for (var i=0; i<steps; i++) {
    updateDatapolicy(x.id);
  }
  if (pick([true,false])) { deleteDatapolicy(x.id); }
  verifyDatapolicyExists(x.id);
  verifyDatapolicyUpdated(x.id);
});

bthread("Datapolicy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDatapolicy(a.id);
  block(matchAddDatapolicy(a.id, ANY), function () {});
  addDatapolicy(b.id);
});

bthread("Default nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Default_id_N"}]);
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

bthread("Defaulteditor nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaulteditor_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaulteditor(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaulteditor(x.id);
  }
  if (pick([true,false])) { deleteDefaulteditor(x.id); }
  verifyDefaulteditorExists(x.id);
  verifyDefaulteditorUpdated(x.id);
});

bthread("Defaulteditor nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaulteditor(a.id);
  block(matchAddDefaulteditor(a.id, ANY), function () {});
  addDefaulteditor(b.id);
});

bthread("Defaultsharescope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaultsharescope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaultsharescope(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultsharescope(x.id);
  }
  if (pick([true,false])) { deleteDefaultsharescope(x.id); }
  verifyDefaultsharescopeExists(x.id);
  verifyDefaultsharescopeUpdated(x.id);
});

bthread("Defaultsharescope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultsharescope(a.id);
  block(matchAddDefaultsharescope(a.id, ANY), function () {});
  addDefaultsharescope(b.id);
});

bthread("Defaultvalue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaultvalue_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaultvalue(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultvalue(x.id);
  }
  if (pick([true,false])) { deleteDefaultvalue(x.id); }
  verifyDefaultvalueExists(x.id);
  verifyDefaultvalueUpdated(x.id);
});

bthread("Defaultvalue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultvalue(a.id);
  block(matchAddDefaultvalue(a.id, ANY), function () {});
  addDefaultvalue(b.id);
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

bthread("Deleted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Deleted_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDeleted(x.id);
  for (var i=0; i<steps; i++) {
    updateDeleted(x.id);
  }
  if (pick([true,false])) { deleteDeleted(x.id); }
  verifyDeletedExists(x.id);
  verifyDeletedUpdated(x.id);
});

bthread("Deleted nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeleted(a.id);
  block(matchAddDeleted(a.id, ANY), function () {});
  addDeleted(b.id);
});

bthread("Draft nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Draft_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDraft(x.id);
  for (var i=0; i<steps; i++) {
    updateDraft(x.id);
  }
  if (pick([true,false])) { deleteDraft(x.id); }
  verifyDraftExists(x.id);
  verifyDraftUpdated(x.id);
});

bthread("Draft nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDraft(a.id);
  block(matchAddDraft(a.id, ANY), function () {});
  addDraft(b.id);
});

bthread("Duplicate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Duplicate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDuplicate(x.id);
  for (var i=0; i<steps; i++) {
    updateDuplicate(x.id);
  }
  if (pick([true,false])) { deleteDuplicate(x.id); }
  verifyDuplicateExists(x.id);
  verifyDuplicateUpdated(x.id);
});

bthread("Duplicate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDuplicate(a.id);
  block(matchAddDuplicate(a.id, ANY), function () {});
  addDuplicate(b.id);
});

bthread("Dynamic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Dynamic_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDynamic(x.id);
  for (var i=0; i<steps; i++) {
    updateDynamic(x.id);
  }
  if (pick([true,false])) { deleteDynamic(x.id); }
  verifyDynamicExists(x.id);
  verifyDynamicUpdated(x.id);
});

bthread("Dynamic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDynamic(a.id);
  block(matchAddDynamic(a.id, ANY), function () {});
  addDynamic(b.id);
});

bthread("Edit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Edit_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEdit(x.id);
  for (var i=0; i<steps; i++) {
    updateEdit(x.id);
  }
  if (pick([true,false])) { deleteEdit(x.id); }
  verifyEditExists(x.id);
  verifyEditUpdated(x.id);
});

bthread("Edit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEdit(a.id);
  block(matchAddEdit(a.id, ANY), function () {});
  addEdit(b.id);
});

bthread("Editmeta nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Editmeta_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEditmeta(x.id);
  for (var i=0; i<steps; i++) {
    updateEditmeta(x.id);
  }
  if (pick([true,false])) { deleteEditmeta(x.id); }
  verifyEditmetaExists(x.id);
  verifyEditmetaUpdated(x.id);
});

bthread("Editmeta nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEditmeta(a.id);
  block(matchAddEditmeta(a.id, ANY), function () {});
  addEditmeta(b.id);
});

bthread("Edittemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Edittemplate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEdittemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateEdittemplate(x.id);
  }
  if (pick([true,false])) { deleteEdittemplate(x.id); }
  verifyEdittemplateExists(x.id);
  verifyEdittemplateUpdated(x.id);
});

bthread("Edittemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEdittemplate(a.id);
  block(matchAddEdittemplate(a.id, ANY), function () {});
  addEdittemplate(b.id);
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

bthread("Eval nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Eval_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEval(x.id);
  for (var i=0; i<steps; i++) {
    updateEval(x.id);
  }
  if (pick([true,false])) { deleteEval(x.id); }
  verifyEvalExists(x.id);
  verifyEvalUpdated(x.id);
});

bthread("Eval nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEval(a.id);
  block(matchAddEval(a.id, ANY), function () {});
  addEval(b.id);
});

bthread("Evaluate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Evaluate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEvaluate(x.id);
  for (var i=0; i<steps; i++) {
    updateEvaluate(x.id);
  }
  if (pick([true,false])) { deleteEvaluate(x.id); }
  verifyEvaluateExists(x.id);
  verifyEvaluateUpdated(x.id);
});

bthread("Evaluate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEvaluate(a.id);
  block(matchAddEvaluate(a.id, ANY), function () {});
  addEvaluate(b.id);
});

bthread("Event nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Event_id_N"}]);
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

bthread("Expand nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Expand_id_N"}]);
  const steps = pick([0,1,2,10]);
  addExpand(x.id);
  for (var i=0; i<steps; i++) {
    updateExpand(x.id);
  }
  if (pick([true,false])) { deleteExpand(x.id); }
  verifyExpandExists(x.id);
  verifyExpandUpdated(x.id);
});

bthread("Expand nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExpand(a.id);
  block(matchAddExpand(a.id, ANY), function () {});
  addExpand(b.id);
});

bthread("Export nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Export_id_N"}]);
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

bthread("Expression nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Expression_id_N"}]);
  const steps = pick([0,1,2,10]);
  addExpression(x.id);
  for (var i=0; i<steps; i++) {
    updateExpression(x.id);
  }
  if (pick([true,false])) { deleteExpression(x.id); }
  verifyExpressionExists(x.id);
  verifyExpressionUpdated(x.id);
});

bthread("Expression nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExpression(a.id);
  block(matchAddExpression(a.id, ANY), function () {});
  addExpression(b.id);
});

bthread("Failed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Failed_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFailed(x.id);
  for (var i=0; i<steps; i++) {
    updateFailed(x.id);
  }
  if (pick([true,false])) { deleteFailed(x.id); }
  verifyFailedExists(x.id);
  verifyFailedUpdated(x.id);
});

bthread("Failed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFailed(a.id);
  block(matchAddFailed(a.id, ANY), function () {});
  addFailed(b.id);
});

bthread("Favourite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Favourite_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFavourite(x.id);
  for (var i=0; i<steps; i++) {
    updateFavourite(x.id);
  }
  if (pick([true,false])) { deleteFavourite(x.id); }
  verifyFavouriteExists(x.id);
  verifyFavouriteUpdated(x.id);
});

bthread("Favourite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFavourite(a.id);
  block(matchAddFavourite(a.id, ANY), function () {});
  addFavourite(b.id);
});

bthread("Feature nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Feature_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFeature(x.id);
  for (var i=0; i<steps; i++) {
    updateFeature(x.id);
  }
  if (pick([true,false])) { deleteFeature(x.id); }
  verifyFeatureExists(x.id);
  verifyFeatureUpdated(x.id);
});

bthread("Feature nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFeature(a.id);
  block(matchAddFeature(a.id, ANY), function () {});
  addFeature(b.id);
});

bthread("Field nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Field_id_N"}]);
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

bthread("Fieldconfiguration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Fieldconfiguration_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFieldconfiguration(x.id);
  for (var i=0; i<steps; i++) {
    updateFieldconfiguration(x.id);
  }
  if (pick([true,false])) { deleteFieldconfiguration(x.id); }
  verifyFieldconfigurationExists(x.id);
  verifyFieldconfigurationUpdated(x.id);
});

bthread("Fieldconfiguration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFieldconfiguration(a.id);
  block(matchAddFieldconfiguration(a.id, ANY), function () {});
  addFieldconfiguration(b.id);
});

bthread("Fieldconfigurationscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Fieldconfigurationscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFieldconfigurationscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateFieldconfigurationscheme(x.id);
  }
  if (pick([true,false])) { deleteFieldconfigurationscheme(x.id); }
  verifyFieldconfigurationschemeExists(x.id);
  verifyFieldconfigurationschemeUpdated(x.id);
});

bthread("Fieldconfigurationscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFieldconfigurationscheme(a.id);
  block(matchAddFieldconfigurationscheme(a.id, ANY), function () {});
  addFieldconfigurationscheme(b.id);
});

bthread("Filter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Filter_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFilter(x.id);
  for (var i=0; i<steps; i++) {
    updateFilter(x.id);
  }
  if (pick([true,false])) { deleteFilter(x.id); }
  verifyFilterExists(x.id);
  verifyFilterUpdated(x.id);
});

bthread("Filter nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFilter(a.id);
  block(matchAddFilter(a.id, ANY), function () {});
  addFilter(b.id);
});

bthread("Forge nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Forge_id_N"}]);
  const steps = pick([0,1,2,10]);
  addForge(x.id);
  for (var i=0; i<steps; i++) {
    updateForge(x.id);
  }
  if (pick([true,false])) { deleteForge(x.id); }
  verifyForgeExists(x.id);
  verifyForgeUpdated(x.id);
});

bthread("Forge nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addForge(a.id);
  block(matchAddForge(a.id, ANY), function () {});
  addForge(b.id);
});

bthread("Function nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Function_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFunction(x.id);
  for (var i=0; i<steps; i++) {
    updateFunction(x.id);
  }
  if (pick([true,false])) { deleteFunction(x.id); }
  verifyFunctionExists(x.id);
  verifyFunctionUpdated(x.id);
});

bthread("Function nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFunction(a.id);
  block(matchAddFunction(a.id, ANY), function () {});
  addFunction(b.id);
});

bthread("Gadget nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Gadget_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGadget(x.id);
  for (var i=0; i<steps; i++) {
    updateGadget(x.id);
  }
  if (pick([true,false])) { deleteGadget(x.id); }
  verifyGadgetExists(x.id);
  verifyGadgetUpdated(x.id);
});

bthread("Gadget nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGadget(a.id);
  block(matchAddGadget(a.id, ANY), function () {});
  addGadget(b.id);
});

bthread("Group nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Group_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGroup(x.id);
  for (var i=0; i<steps; i++) {
    updateGroup(x.id);
  }
  if (pick([true,false])) { deleteGroup(x.id); }
  verifyGroupExists(x.id);
  verifyGroupUpdated(x.id);
});

bthread("Group nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGroup(a.id);
  block(matchAddGroup(a.id, ANY), function () {});
  addGroup(b.id);
});

bthread("Groupuserpicker nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Groupuserpicker_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGroupuserpicker(x.id);
  for (var i=0; i<steps; i++) {
    updateGroupuserpicker(x.id);
  }
  if (pick([true,false])) { deleteGroupuserpicker(x.id); }
  verifyGroupuserpickerExists(x.id);
  verifyGroupuserpickerUpdated(x.id);
});

bthread("Groupuserpicker nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGroupuserpicker(a.id);
  block(matchAddGroupuserpicker(a.id, ANY), function () {});
  addGroupuserpicker(b.id);
});

bthread("Hierarchy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Hierarchy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addHierarchy(x.id);
  for (var i=0; i<steps; i++) {
    updateHierarchy(x.id);
  }
  if (pick([true,false])) { deleteHierarchy(x.id); }
  verifyHierarchyExists(x.id);
  verifyHierarchyUpdated(x.id);
});

bthread("Hierarchy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHierarchy(a.id);
  block(matchAddHierarchy(a.id, ANY), function () {});
  addHierarchy(b.id);
});

bthread("Human nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Human_id_N"}]);
  const steps = pick([0,1,2,10]);
  addHuman(x.id);
  for (var i=0; i<steps; i++) {
    updateHuman(x.id);
  }
  if (pick([true,false])) { deleteHuman(x.id); }
  verifyHumanExists(x.id);
  verifyHumanUpdated(x.id);
});

bthread("Human nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHuman(a.id);
  block(matchAddHuman(a.id, ANY), function () {});
  addHuman(b.id);
});

bthread("Instance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Instance_id_N"}]);
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

bthread("Issuelink nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuelink_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuelink(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuelink(x.id);
  }
  if (pick([true,false])) { deleteIssuelink(x.id); }
  verifyIssuelinkExists(x.id);
  verifyIssuelinkUpdated(x.id);
});

bthread("Issuelink nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuelink(a.id);
  block(matchAddIssuelink(a.id, ANY), function () {});
  addIssuelink(b.id);
});

bthread("Issuelinktype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuelinktype_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuelinktype(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuelinktype(x.id);
  }
  if (pick([true,false])) { deleteIssuelinktype(x.id); }
  verifyIssuelinktypeExists(x.id);
  verifyIssuelinktypeUpdated(x.id);
});

bthread("Issuelinktype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuelinktype(a.id);
  block(matchAddIssuelinktype(a.id, ANY), function () {});
  addIssuelinktype(b.id);
});

bthread("Issuesecuritylevelscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuesecuritylevelscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuesecuritylevelscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuesecuritylevelscheme(x.id);
  }
  if (pick([true,false])) { deleteIssuesecuritylevelscheme(x.id); }
  verifyIssuesecuritylevelschemeExists(x.id);
  verifyIssuesecuritylevelschemeUpdated(x.id);
});

bthread("Issuesecuritylevelscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuesecuritylevelscheme(a.id);
  block(matchAddIssuesecuritylevelscheme(a.id, ANY), function () {});
  addIssuesecuritylevelscheme(b.id);
});

bthread("Issuesecurityscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuesecurityscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuesecurityscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuesecurityscheme(x.id);
  }
  if (pick([true,false])) { deleteIssuesecurityscheme(x.id); }
  verifyIssuesecurityschemeExists(x.id);
  verifyIssuesecurityschemeUpdated(x.id);
});

bthread("Issuesecurityscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuesecurityscheme(a.id);
  block(matchAddIssuesecurityscheme(a.id, ANY), function () {});
  addIssuesecurityscheme(b.id);
});

bthread("Issuetype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuetype_id_N"}]);
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

bthread("Issuetypemapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuetypemapping_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuetypemapping(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuetypemapping(x.id);
  }
  if (pick([true,false])) { deleteIssuetypemapping(x.id); }
  verifyIssuetypemappingExists(x.id);
  verifyIssuetypemappingUpdated(x.id);
});

bthread("Issuetypemapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuetypemapping(a.id);
  block(matchAddIssuetypemapping(a.id, ANY), function () {});
  addIssuetypemapping(b.id);
});

bthread("Issuetypescheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuetypescheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuetypescheme(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuetypescheme(x.id);
  }
  if (pick([true,false])) { deleteIssuetypescheme(x.id); }
  verifyIssuetypeschemeExists(x.id);
  verifyIssuetypeschemeUpdated(x.id);
});

bthread("Issuetypescheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuetypescheme(a.id);
  block(matchAddIssuetypescheme(a.id, ANY), function () {});
  addIssuetypescheme(b.id);
});

bthread("Issuetypescreenscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuetypescreenscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuetypescreenscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuetypescreenscheme(x.id);
  }
  if (pick([true,false])) { deleteIssuetypescreenscheme(x.id); }
  verifyIssuetypescreenschemeExists(x.id);
  verifyIssuetypescreenschemeUpdated(x.id);
});

bthread("Issuetypescreenscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuetypescreenscheme(a.id);
  block(matchAddIssuetypescreenscheme(a.id, ANY), function () {});
  addIssuetypescreenscheme(b.id);
});

bthread("Issuetypeusage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Issuetypeusage_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIssuetypeusage(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuetypeusage(x.id);
  }
  if (pick([true,false])) { deleteIssuetypeusage(x.id); }
  verifyIssuetypeusageExists(x.id);
  verifyIssuetypeusageUpdated(x.id);
});

bthread("Issuetypeusage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuetypeusage(a.id);
  block(matchAddIssuetypeusage(a.id, ANY), function () {});
  addIssuetypeusage(b.id);
});

bthread("Item nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Item_id_N"}]);
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

bthread("Jql nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Jql_id_N"}]);
  const steps = pick([0,1,2,10]);
  addJql(x.id);
  for (var i=0; i<steps; i++) {
    updateJql(x.id);
  }
  if (pick([true,false])) { deleteJql(x.id); }
  verifyJqlExists(x.id);
  verifyJqlUpdated(x.id);
});

bthread("Jql nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'J' + ids[0] };
  const b = { id: 'J' + ids[1] };
  addJql(a.id);
  block(matchAddJql(a.id, ANY), function () {});
  addJql(b.id);
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

bthread("Level nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Level_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLevel(x.id);
  for (var i=0; i<steps; i++) {
    updateLevel(x.id);
  }
  if (pick([true,false])) { deleteLevel(x.id); }
  verifyLevelExists(x.id);
  verifyLevelUpdated(x.id);
});

bthread("Level nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLevel(a.id);
  block(matchAddLevel(a.id, ANY), function () {});
  addLevel(b.id);
});

bthread("License nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "License_id_N"}]);
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
  const x = pick([{id: "Limit_id_N"}]);
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

bthread("List nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "List_id_N"}]);
  const steps = pick([0,1,2,10]);
  addList(x.id);
  for (var i=0; i<steps; i++) {
    updateList(x.id);
  }
  if (pick([true,false])) { deleteList(x.id); }
  verifyListExists(x.id);
  verifyListUpdated(x.id);
});

bthread("List nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addList(a.id);
  block(matchAddList(a.id, ANY), function () {});
  addList(b.id);
});

bthread("Livetemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Livetemplate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLivetemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateLivetemplate(x.id);
  }
  if (pick([true,false])) { deleteLivetemplate(x.id); }
  verifyLivetemplateExists(x.id);
  verifyLivetemplateUpdated(x.id);
});

bthread("Livetemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLivetemplate(a.id);
  block(matchAddLivetemplate(a.id, ANY), function () {});
  addLivetemplate(b.id);
});

bthread("Locale nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Locale_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLocale(x.id);
  for (var i=0; i<steps; i++) {
    updateLocale(x.id);
  }
  if (pick([true,false])) { deleteLocale(x.id); }
  verifyLocaleExists(x.id);
  verifyLocaleUpdated(x.id);
});

bthread("Locale nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLocale(a.id);
  block(matchAddLocale(a.id, ANY), function () {});
  addLocale(b.id);
});

bthread("Mapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mapping_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMapping(x.id);
  for (var i=0; i<steps; i++) {
    updateMapping(x.id);
  }
  if (pick([true,false])) { deleteMapping(x.id); }
  verifyMappingExists(x.id);
  verifyMappingUpdated(x.id);
});

bthread("Mapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMapping(a.id);
  block(matchAddMapping(a.id, ANY), function () {});
  addMapping(b.id);
});

bthread("Match nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Match_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMatch(x.id);
  for (var i=0; i<steps; i++) {
    updateMatch(x.id);
  }
  if (pick([true,false])) { deleteMatch(x.id); }
  verifyMatchExists(x.id);
  verifyMatchUpdated(x.id);
});

bthread("Match nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMatch(a.id);
  block(matchAddMatch(a.id, ANY), function () {});
  addMatch(b.id);
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

bthread("Mergeto nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mergeto_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMergeto(x.id);
  for (var i=0; i<steps; i++) {
    updateMergeto(x.id);
  }
  if (pick([true,false])) { deleteMergeto(x.id); }
  verifyMergetoExists(x.id);
  verifyMergetoUpdated(x.id);
});

bthread("Mergeto nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMergeto(a.id);
  block(matchAddMergeto(a.id, ANY), function () {});
  addMergeto(b.id);
});

bthread("Meta nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Meta_id_N"}]);
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

bthread("Migration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Migration_id_N"}]);
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

bthread("Module nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Module_id_N"}]);
  const steps = pick([0,1,2,10]);
  addModule(x.id);
  for (var i=0; i<steps; i++) {
    updateModule(x.id);
  }
  if (pick([true,false])) { deleteModule(x.id); }
  verifyModuleExists(x.id);
  verifyModuleUpdated(x.id);
});

bthread("Module nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addModule(a.id);
  block(matchAddModule(a.id, ANY), function () {});
  addModule(b.id);
});

bthread("Move nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Move_id_N"}]);
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

bthread("Multi nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Multi_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMulti(x.id);
  for (var i=0; i<steps; i++) {
    updateMulti(x.id);
  }
  if (pick([true,false])) { deleteMulti(x.id); }
  verifyMultiExists(x.id);
  verifyMultiUpdated(x.id);
});

bthread("Multi nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMulti(a.id);
  block(matchAddMulti(a.id, ANY), function () {});
  addMulti(b.id);
});

bthread("Multiprojectsearch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Multiprojectsearch_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMultiprojectsearch(x.id);
  for (var i=0; i<steps; i++) {
    updateMultiprojectsearch(x.id);
  }
  if (pick([true,false])) { deleteMultiprojectsearch(x.id); }
  verifyMultiprojectsearchExists(x.id);
  verifyMultiprojectsearchUpdated(x.id);
});

bthread("Multiprojectsearch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMultiprojectsearch(a.id);
  block(matchAddMultiprojectsearch(a.id, ANY), function () {});
  addMultiprojectsearch(b.id);
});

bthread("My nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "My_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMy(x.id);
  for (var i=0; i<steps; i++) {
    updateMy(x.id);
  }
  if (pick([true,false])) { deleteMy(x.id); }
  verifyMyExists(x.id);
  verifyMyUpdated(x.id);
});

bthread("My nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMy(a.id);
  block(matchAddMy(a.id, ANY), function () {});
  addMy(b.id);
});

bthread("Mypermission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mypermission_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMypermission(x.id);
  for (var i=0; i<steps; i++) {
    updateMypermission(x.id);
  }
  if (pick([true,false])) { deleteMypermission(x.id); }
  verifyMypermissionExists(x.id);
  verifyMypermissionUpdated(x.id);
});

bthread("Mypermission nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMypermission(a.id);
  block(matchAddMypermission(a.id, ANY), function () {});
  addMypermission(b.id);
});

bthread("Mypreference nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mypreference_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMypreference(x.id);
  for (var i=0; i<steps; i++) {
    updateMypreference(x.id);
  }
  if (pick([true,false])) { deleteMypreference(x.id); }
  verifyMypreferenceExists(x.id);
  verifyMypreferenceUpdated(x.id);
});

bthread("Mypreference nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMypreference(a.id);
  block(matchAddMypreference(a.id, ANY), function () {});
  addMypreference(b.id);
});

bthread("Myself nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Myself_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMyself(x.id);
  for (var i=0; i<steps; i++) {
    updateMyself(x.id);
  }
  if (pick([true,false])) { deleteMyself(x.id); }
  verifyMyselfExists(x.id);
  verifyMyselfUpdated(x.id);
});

bthread("Myself nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMyself(a.id);
  block(matchAddMyself(a.id, ANY), function () {});
  addMyself(b.id);
});

bthread("Nav4optproperty nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Nav4optproperty_id_N"}]);
  const steps = pick([0,1,2,10]);
  addNav4optproperty(x.id);
  for (var i=0; i<steps; i++) {
    updateNav4optproperty(x.id);
  }
  if (pick([true,false])) { deleteNav4optproperty(x.id); }
  verifyNav4optpropertyExists(x.id);
  verifyNav4optpropertyUpdated(x.id);
});

bthread("Nav4optproperty nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNav4optproperty(a.id);
  block(matchAddNav4optproperty(a.id, ANY), function () {});
  addNav4optproperty(b.id);
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

bthread("Notificationscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Notificationscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addNotificationscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateNotificationscheme(x.id);
  }
  if (pick([true,false])) { deleteNotificationscheme(x.id); }
  verifyNotificationschemeExists(x.id);
  verifyNotificationschemeUpdated(x.id);
});

bthread("Notificationscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNotificationscheme(a.id);
  block(matchAddNotificationscheme(a.id, ANY), function () {});
  addNotificationscheme(b.id);
});

bthread("Notify nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Notify_id_N"}]);
  const steps = pick([0,1,2,10]);
  addNotify(x.id);
  for (var i=0; i<steps; i++) {
    updateNotify(x.id);
  }
  if (pick([true,false])) { deleteNotify(x.id); }
  verifyNotifyExists(x.id);
  verifyNotifyUpdated(x.id);
});

bthread("Notify nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNotify(a.id);
  block(matchAddNotify(a.id, ANY), function () {});
  addNotify(b.id);
});

bthread("Option nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Option_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOption(x.id);
  for (var i=0; i<steps; i++) {
    updateOption(x.id);
  }
  if (pick([true,false])) { deleteOption(x.id); }
  verifyOptionExists(x.id);
  verifyOptionUpdated(x.id);
});

bthread("Option nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOption(a.id);
  block(matchAddOption(a.id, ANY), function () {});
  addOption(b.id);
});

bthread("Owner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Owner_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOwner(x.id);
  for (var i=0; i<steps; i++) {
    updateOwner(x.id);
  }
  if (pick([true,false])) { deleteOwner(x.id); }
  verifyOwnerExists(x.id);
  verifyOwnerUpdated(x.id);
});

bthread("Owner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOwner(a.id);
  block(matchAddOwner(a.id, ANY), function () {});
  addOwner(b.id);
});

bthread("Parse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Parse_id_N"}]);
  const steps = pick([0,1,2,10]);
  addParse(x.id);
  for (var i=0; i<steps; i++) {
    updateParse(x.id);
  }
  if (pick([true,false])) { deleteParse(x.id); }
  verifyParseExists(x.id);
  verifyParseUpdated(x.id);
});

bthread("Parse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addParse(a.id);
  block(matchAddParse(a.id, ANY), function () {});
  addParse(b.id);
});

bthread("Pdcleaner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pdcleaner_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPdcleaner(x.id);
  for (var i=0; i<steps; i++) {
    updatePdcleaner(x.id);
  }
  if (pick([true,false])) { deletePdcleaner(x.id); }
  verifyPdcleanerExists(x.id);
  verifyPdcleanerUpdated(x.id);
});

bthread("Pdcleaner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPdcleaner(a.id);
  block(matchAddPdcleaner(a.id, ANY), function () {});
  addPdcleaner(b.id);
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

bthread("Permissionscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Permissionscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPermissionscheme(x.id);
  for (var i=0; i<steps; i++) {
    updatePermissionscheme(x.id);
  }
  if (pick([true,false])) { deletePermissionscheme(x.id); }
  verifyPermissionschemeExists(x.id);
  verifyPermissionschemeUpdated(x.id);
});

bthread("Permissionscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPermissionscheme(a.id);
  block(matchAddPermissionscheme(a.id, ANY), function () {});
  addPermissionscheme(b.id);
});

bthread("Picker nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Picker_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPicker(x.id);
  for (var i=0; i<steps; i++) {
    updatePicker(x.id);
  }
  if (pick([true,false])) { deletePicker(x.id); }
  verifyPickerExists(x.id);
  verifyPickerUpdated(x.id);
});

bthread("Picker nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPicker(a.id);
  block(matchAddPicker(a.id, ANY), function () {});
  addPicker(b.id);
});

bthread("Plan nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Plan_id_N"}]);
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

bthread("Planonly nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Planonly_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPlanonly(x.id);
  for (var i=0; i<steps; i++) {
    updatePlanonly(x.id);
  }
  if (pick([true,false])) { deletePlanonly(x.id); }
  verifyPlanonlyExists(x.id);
  verifyPlanonlyUpdated(x.id);
});

bthread("Planonly nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPlanonly(a.id);
  block(matchAddPlanonly(a.id, ANY), function () {});
  addPlanonly(b.id);
});

bthread("Preview nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Preview_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPreview(x.id);
  for (var i=0; i<steps; i++) {
    updatePreview(x.id);
  }
  if (pick([true,false])) { deletePreview(x.id); }
  verifyPreviewExists(x.id);
  verifyPreviewUpdated(x.id);
});

bthread("Preview nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPreview(a.id);
  block(matchAddPreview(a.id, ANY), function () {});
  addPreview(b.id);
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

bthread("Priorityscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Priorityscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPriorityscheme(x.id);
  for (var i=0; i<steps; i++) {
    updatePriorityscheme(x.id);
  }
  if (pick([true,false])) { deletePriorityscheme(x.id); }
  verifyPriorityschemeExists(x.id);
  verifyPriorityschemeUpdated(x.id);
});

bthread("Priorityscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPriorityscheme(a.id);
  block(matchAddPriorityscheme(a.id, ANY), function () {});
  addPriorityscheme(b.id);
});

bthread("Product nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Product_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProduct(x.id);
  for (var i=0; i<steps; i++) {
    updateProduct(x.id);
  }
  if (pick([true,false])) { deleteProduct(x.id); }
  verifyProductExists(x.id);
  verifyProductUpdated(x.id);
});

bthread("Product nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProduct(a.id);
  block(matchAddProduct(a.id, ANY), function () {});
  addProduct(b.id);
});

bthread("Project nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Project_id_N"}]);
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

bthread("Projectcategory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Projectcategory_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProjectcategory(x.id);
  for (var i=0; i<steps; i++) {
    updateProjectcategory(x.id);
  }
  if (pick([true,false])) { deleteProjectcategory(x.id); }
  verifyProjectcategoryExists(x.id);
  verifyProjectcategoryUpdated(x.id);
});

bthread("Projectcategory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProjectcategory(a.id);
  block(matchAddProjectcategory(a.id, ANY), function () {});
  addProjectcategory(b.id);
});

bthread("Projectmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Projectmapping_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProjectmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateProjectmapping(x.id);
  }
  if (pick([true,false])) { deleteProjectmapping(x.id); }
  verifyProjectmappingExists(x.id);
  verifyProjectmappingUpdated(x.id);
});

bthread("Projectmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProjectmapping(a.id);
  block(matchAddProjectmapping(a.id, ANY), function () {});
  addProjectmapping(b.id);
});

bthread("Projecttemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Projecttemplate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProjecttemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateProjecttemplate(x.id);
  }
  if (pick([true,false])) { deleteProjecttemplate(x.id); }
  verifyProjecttemplateExists(x.id);
  verifyProjecttemplateUpdated(x.id);
});

bthread("Projecttemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProjecttemplate(a.id);
  block(matchAddProjecttemplate(a.id, ANY), function () {});
  addProjecttemplate(b.id);
});

bthread("Projectusage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Projectusage_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProjectusage(x.id);
  for (var i=0; i<steps; i++) {
    updateProjectusage(x.id);
  }
  if (pick([true,false])) { deleteProjectusage(x.id); }
  verifyProjectusageExists(x.id);
  verifyProjectusageUpdated(x.id);
});

bthread("Projectusage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProjectusage(a.id);
  block(matchAddProjectusage(a.id, ANY), function () {});
  addProjectusage(b.id);
});

bthread("Projectvalidate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Projectvalidate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProjectvalidate(x.id);
  for (var i=0; i<steps; i++) {
    updateProjectvalidate(x.id);
  }
  if (pick([true,false])) { deleteProjectvalidate(x.id); }
  verifyProjectvalidateExists(x.id);
  verifyProjectvalidateUpdated(x.id);
});

bthread("Projectvalidate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProjectvalidate(a.id);
  block(matchAddProjectvalidate(a.id, ANY), function () {});
  addProjectvalidate(b.id);
});

bthread("Property nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Property_id_N"}]);
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

bthread("Publish nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Publish_id_N"}]);
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

bthread("Query nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Query_id_N"}]);
  const steps = pick([0,1,2,10]);
  addQuery(x.id);
  for (var i=0; i<steps; i++) {
    updateQuery(x.id);
  }
  if (pick([true,false])) { deleteQuery(x.id); }
  verifyQueryExists(x.id);
  verifyQueryUpdated(x.id);
});

bthread("Query nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'Q' + ids[0] };
  const b = { id: 'Q' + ids[1] };
  addQuery(a.id);
  block(matchAddQuery(a.id, ANY), function () {});
  addQuery(b.id);
});

bthread("Queue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Queue_id_N"}]);
  const steps = pick([0,1,2,10]);
  addQueue(x.id);
  for (var i=0; i<steps; i++) {
    updateQueue(x.id);
  }
  if (pick([true,false])) { deleteQueue(x.id); }
  verifyQueueExists(x.id);
  verifyQueueUpdated(x.id);
});

bthread("Queue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'Q' + ids[0] };
  const b = { id: 'Q' + ids[1] };
  addQueue(a.id);
  block(matchAddQueue(a.id, ANY), function () {});
  addQueue(b.id);
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

bthread("Read nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Read_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRead(x.id);
  for (var i=0; i<steps; i++) {
    updateRead(x.id);
  }
  if (pick([true,false])) { deleteRead(x.id); }
  verifyReadExists(x.id);
  verifyReadUpdated(x.id);
});

bthread("Read nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRead(a.id);
  block(matchAddRead(a.id, ANY), function () {});
  addRead(b.id);
});

bthread("Recent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Recent_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRecent(x.id);
  for (var i=0; i<steps; i++) {
    updateRecent(x.id);
  }
  if (pick([true,false])) { deleteRecent(x.id); }
  verifyRecentExists(x.id);
  verifyRecentUpdated(x.id);
});

bthread("Recent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRecent(a.id);
  block(matchAddRecent(a.id, ANY), function () {});
  addRecent(b.id);
});

bthread("Record nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Record_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRecord(x.id);
  for (var i=0; i<steps; i++) {
    updateRecord(x.id);
  }
  if (pick([true,false])) { deleteRecord(x.id); }
  verifyRecordExists(x.id);
  verifyRecordUpdated(x.id);
});

bthread("Record nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRecord(a.id);
  block(matchAddRecord(a.id, ANY), function () {});
  addRecord(b.id);
});

bthread("Redact nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Redact_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRedact(x.id);
  for (var i=0; i<steps; i++) {
    updateRedact(x.id);
  }
  if (pick([true,false])) { deleteRedact(x.id); }
  verifyRedactExists(x.id);
  verifyRedactUpdated(x.id);
});

bthread("Redact nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRedact(a.id);
  block(matchAddRedact(a.id, ANY), function () {});
  addRedact(b.id);
});

bthread("Refresh nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Refresh_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRefresh(x.id);
  for (var i=0; i<steps; i++) {
    updateRefresh(x.id);
  }
  if (pick([true,false])) { deleteRefresh(x.id); }
  verifyRefreshExists(x.id);
  verifyRefreshUpdated(x.id);
});

bthread("Refresh nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRefresh(a.id);
  block(matchAddRefresh(a.id, ANY), function () {});
  addRefresh(b.id);
});

bthread("Relatedissuecount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Relatedissuecount_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRelatedissuecount(x.id);
  for (var i=0; i<steps; i++) {
    updateRelatedissuecount(x.id);
  }
  if (pick([true,false])) { deleteRelatedissuecount(x.id); }
  verifyRelatedissuecountExists(x.id);
  verifyRelatedissuecountUpdated(x.id);
});

bthread("Relatedissuecount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRelatedissuecount(a.id);
  block(matchAddRelatedissuecount(a.id, ANY), function () {});
  addRelatedissuecount(b.id);
});

bthread("Relatedwork nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Relatedwork_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRelatedwork(x.id);
  for (var i=0; i<steps; i++) {
    updateRelatedwork(x.id);
  }
  if (pick([true,false])) { deleteRelatedwork(x.id); }
  verifyRelatedworkExists(x.id);
  verifyRelatedworkUpdated(x.id);
});

bthread("Relatedwork nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRelatedwork(a.id);
  block(matchAddRelatedwork(a.id, ANY), function () {});
  addRelatedwork(b.id);
});

bthread("Remotelink nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Remotelink_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRemotelink(x.id);
  for (var i=0; i<steps; i++) {
    updateRemotelink(x.id);
  }
  if (pick([true,false])) { deleteRemotelink(x.id); }
  verifyRemotelinkExists(x.id);
  verifyRemotelinkUpdated(x.id);
});

bthread("Remotelink nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRemotelink(a.id);
  block(matchAddRemotelink(a.id, ANY), function () {});
  addRemotelink(b.id);
});

bthread("Remove nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Remove_id_N"}]);
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

bthread("Removeandswap nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Removeandswap_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRemoveandswap(x.id);
  for (var i=0; i<steps; i++) {
    updateRemoveandswap(x.id);
  }
  if (pick([true,false])) { deleteRemoveandswap(x.id); }
  verifyRemoveandswapExists(x.id);
  verifyRemoveandswapUpdated(x.id);
});

bthread("Removeandswap nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRemoveandswap(a.id);
  block(matchAddRemoveandswap(a.id, ANY), function () {});
  addRemoveandswap(b.id);
});

bthread("Removetemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Removetemplate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRemovetemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateRemovetemplate(x.id);
  }
  if (pick([true,false])) { deleteRemovetemplate(x.id); }
  verifyRemovetemplateExists(x.id);
  verifyRemovetemplateUpdated(x.id);
});

bthread("Removetemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRemovetemplate(a.id);
  block(matchAddRemovetemplate(a.id, ANY), function () {});
  addRemovetemplate(b.id);
});

bthread("Report nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Report_id_N"}]);
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

bthread("Resolution nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Resolution_id_N"}]);
  const steps = pick([0,1,2,10]);
  addResolution(x.id);
  for (var i=0; i<steps; i++) {
    updateResolution(x.id);
  }
  if (pick([true,false])) { deleteResolution(x.id); }
  verifyResolutionExists(x.id);
  verifyResolutionUpdated(x.id);
});

bthread("Resolution nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addResolution(a.id);
  block(matchAddResolution(a.id, ANY), function () {});
  addResolution(b.id);
});

bthread("Rest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Rest_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRest(x.id);
  for (var i=0; i<steps; i++) {
    updateRest(x.id);
  }
  if (pick([true,false])) { deleteRest(x.id); }
  verifyRestExists(x.id);
  verifyRestUpdated(x.id);
});

bthread("Rest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRest(a.id);
  block(matchAddRest(a.id, ANY), function () {});
  addRest(b.id);
});

bthread("Restore nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Restore_id_N"}]);
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

bthread("Role nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Role_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRole(x.id);
  for (var i=0; i<steps; i++) {
    updateRole(x.id);
  }
  if (pick([true,false])) { deleteRole(x.id); }
  verifyRoleExists(x.id);
  verifyRoleUpdated(x.id);
});

bthread("Role nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRole(a.id);
  block(matchAddRole(a.id, ANY), function () {});
  addRole(b.id);
});

bthread("Roledetail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Roledetail_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRoledetail(x.id);
  for (var i=0; i<steps; i++) {
    updateRoledetail(x.id);
  }
  if (pick([true,false])) { deleteRoledetail(x.id); }
  verifyRoledetailExists(x.id);
  verifyRoledetailUpdated(x.id);
});

bthread("Roledetail nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRoledetail(a.id);
  block(matchAddRoledetail(a.id, ANY), function () {});
  addRoledetail(b.id);
});

bthread("Rule nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Rule_id_N"}]);
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

bthread("Sanitize nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Sanitize_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSanitize(x.id);
  for (var i=0; i<steps; i++) {
    updateSanitize(x.id);
  }
  if (pick([true,false])) { deleteSanitize(x.id); }
  verifySanitizeExists(x.id);
  verifySanitizeUpdated(x.id);
});

bthread("Sanitize nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSanitize(a.id);
  block(matchAddSanitize(a.id, ANY), function () {});
  addSanitize(b.id);
});

bthread("Savetemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Savetemplate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSavetemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateSavetemplate(x.id);
  }
  if (pick([true,false])) { deleteSavetemplate(x.id); }
  verifySavetemplateExists(x.id);
  verifySavetemplateUpdated(x.id);
});

bthread("Savetemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSavetemplate(a.id);
  block(matchAddSavetemplate(a.id, ANY), function () {});
  addSavetemplate(b.id);
});

bthread("Screen nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Screen_id_N"}]);
  const steps = pick([0,1,2,10]);
  addScreen(x.id);
  for (var i=0; i<steps; i++) {
    updateScreen(x.id);
  }
  if (pick([true,false])) { deleteScreen(x.id); }
  verifyScreenExists(x.id);
  verifyScreenUpdated(x.id);
});

bthread("Screen nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addScreen(a.id);
  block(matchAddScreen(a.id, ANY), function () {});
  addScreen(b.id);
});

bthread("Screenscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Screenscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addScreenscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateScreenscheme(x.id);
  }
  if (pick([true,false])) { deleteScreenscheme(x.id); }
  verifyScreenschemeExists(x.id);
  verifyScreenschemeUpdated(x.id);
});

bthread("Screenscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addScreenscheme(a.id);
  block(matchAddScreenscheme(a.id, ANY), function () {});
  addScreenscheme(b.id);
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

bthread("Securitylevel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Securitylevel_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSecuritylevel(x.id);
  for (var i=0; i<steps; i++) {
    updateSecuritylevel(x.id);
  }
  if (pick([true,false])) { deleteSecuritylevel(x.id); }
  verifySecuritylevelExists(x.id);
  verifySecuritylevelUpdated(x.id);
});

bthread("Securitylevel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSecuritylevel(a.id);
  block(matchAddSecuritylevel(a.id, ANY), function () {});
  addSecuritylevel(b.id);
});

bthread("Serverinfo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Serverinfo_id_N"}]);
  const steps = pick([0,1,2,10]);
  addServerinfo(x.id);
  for (var i=0; i<steps; i++) {
    updateServerinfo(x.id);
  }
  if (pick([true,false])) { deleteServerinfo(x.id); }
  verifyServerinfoExists(x.id);
  verifyServerinfoUpdated(x.id);
});

bthread("Serverinfo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addServerinfo(a.id);
  block(matchAddServerinfo(a.id, ANY), function () {});
  addServerinfo(b.id);
});

bthread("Serviceregistry nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Serviceregistry_id_N"}]);
  const steps = pick([0,1,2,10]);
  addServiceregistry(x.id);
  for (var i=0; i<steps; i++) {
    updateServiceregistry(x.id);
  }
  if (pick([true,false])) { deleteServiceregistry(x.id); }
  verifyServiceregistryExists(x.id);
  verifyServiceregistryUpdated(x.id);
});

bthread("Serviceregistry nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addServiceregistry(a.id);
  block(matchAddServiceregistry(a.id, ANY), function () {});
  addServiceregistry(b.id);
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

bthread("Statuscategory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Statuscategory_id_N"}]);
  const steps = pick([0,1,2,10]);
  addStatuscategory(x.id);
  for (var i=0; i<steps; i++) {
    updateStatuscategory(x.id);
  }
  if (pick([true,false])) { deleteStatuscategory(x.id); }
  verifyStatuscategoryExists(x.id);
  verifyStatuscategoryUpdated(x.id);
});

bthread("Statuscategory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStatuscategory(a.id);
  block(matchAddStatuscategory(a.id, ANY), function () {});
  addStatuscategory(b.id);
});

bthread("Suggestion nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Suggestion_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSuggestion(x.id);
  for (var i=0; i<steps; i++) {
    updateSuggestion(x.id);
  }
  if (pick([true,false])) { deleteSuggestion(x.id); }
  verifySuggestionExists(x.id);
  verifySuggestionUpdated(x.id);
});

bthread("Suggestion nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSuggestion(a.id);
  block(matchAddSuggestion(a.id, ANY), function () {});
  addSuggestion(b.id);
});

bthread("System nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "System_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSystem(x.id);
  for (var i=0; i<steps; i++) {
    updateSystem(x.id);
  }
  if (pick([true,false])) { deleteSystem(x.id); }
  verifySystemExists(x.id);
  verifySystemUpdated(x.id);
});

bthread("System nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSystem(a.id);
  block(matchAddSystem(a.id, ANY), function () {});
  addSystem(b.id);
});

bthread("Tab nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Tab_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTab(x.id);
  for (var i=0; i<steps; i++) {
    updateTab(x.id);
  }
  if (pick([true,false])) { deleteTab(x.id); }
  verifyTabExists(x.id);
  verifyTabUpdated(x.id);
});

bthread("Tab nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTab(a.id);
  block(matchAddTab(a.id, ANY), function () {});
  addTab(b.id);
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

bthread("Thumbnail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Thumbnail_id_N"}]);
  const steps = pick([0,1,2,10]);
  addThumbnail(x.id);
  for (var i=0; i<steps; i++) {
    updateThumbnail(x.id);
  }
  if (pick([true,false])) { deleteThumbnail(x.id); }
  verifyThumbnailExists(x.id);
  verifyThumbnailUpdated(x.id);
});

bthread("Thumbnail nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addThumbnail(a.id);
  block(matchAddThumbnail(a.id, ANY), function () {});
  addThumbnail(b.id);
});

bthread("Timetracking nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Timetracking_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTimetracking(x.id);
  for (var i=0; i<steps; i++) {
    updateTimetracking(x.id);
  }
  if (pick([true,false])) { deleteTimetracking(x.id); }
  verifyTimetrackingExists(x.id);
  verifyTimetrackingUpdated(x.id);
});

bthread("Timetracking nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTimetracking(a.id);
  block(matchAddTimetracking(a.id, ANY), function () {});
  addTimetracking(b.id);
});

bthread("Transition nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Transition_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTransition(x.id);
  for (var i=0; i<steps; i++) {
    updateTransition(x.id);
  }
  if (pick([true,false])) { deleteTransition(x.id); }
  verifyTransitionExists(x.id);
  verifyTransitionUpdated(x.id);
});

bthread("Transition nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTransition(a.id);
  block(matchAddTransition(a.id, ANY), function () {});
  addTransition(b.id);
});

bthread("Trash nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Trash_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTrash(x.id);
  for (var i=0; i<steps; i++) {
    updateTrash(x.id);
  }
  if (pick([true,false])) { deleteTrash(x.id); }
  verifyTrashExists(x.id);
  verifyTrashUpdated(x.id);
});

bthread("Trash nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTrash(a.id);
  block(matchAddTrash(a.id, ANY), function () {});
  addTrash(b.id);
});

bthread("Trashed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Trashed_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTrashed(x.id);
  for (var i=0; i<steps; i++) {
    updateTrashed(x.id);
  }
  if (pick([true,false])) { deleteTrashed(x.id); }
  verifyTrashedExists(x.id);
  verifyTrashedUpdated(x.id);
});

bthread("Trashed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTrashed(a.id);
  block(matchAddTrashed(a.id, ANY), function () {});
  addTrashed(b.id);
});

bthread("Type nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Type_id_N"}]);
  const steps = pick([0,1,2,10]);
  addType(x.id);
  for (var i=0; i<steps; i++) {
    updateType(x.id);
  }
  if (pick([true,false])) { deleteType(x.id); }
  verifyTypeExists(x.id);
  verifyTypeUpdated(x.id);
});

bthread("Type nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addType(a.id);
  block(matchAddType(a.id, ANY), function () {});
  addType(b.id);
});

bthread("Uimodification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Uimodification_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUimodification(x.id);
  for (var i=0; i<steps; i++) {
    updateUimodification(x.id);
  }
  if (pick([true,false])) { deleteUimodification(x.id); }
  verifyUimodificationExists(x.id);
  verifyUimodificationUpdated(x.id);
});

bthread("Uimodification nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUimodification(a.id);
  block(matchAddUimodification(a.id, ANY), function () {});
  addUimodification(b.id);
});

bthread("Unarchive nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Unarchive_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUnarchive(x.id);
  for (var i=0; i<steps; i++) {
    updateUnarchive(x.id);
  }
  if (pick([true,false])) { deleteUnarchive(x.id); }
  verifyUnarchiveExists(x.id);
  verifyUnarchiveUpdated(x.id);
});

bthread("Unarchive nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUnarchive(a.id);
  block(matchAddUnarchive(a.id, ANY), function () {});
  addUnarchive(b.id);
});

bthread("Universalavatar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Universalavatar_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUniversalavatar(x.id);
  for (var i=0; i<steps; i++) {
    updateUniversalavatar(x.id);
  }
  if (pick([true,false])) { deleteUniversalavatar(x.id); }
  verifyUniversalavatarExists(x.id);
  verifyUniversalavatarUpdated(x.id);
});

bthread("Universalavatar nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUniversalavatar(a.id);
  block(matchAddUniversalavatar(a.id, ANY), function () {});
  addUniversalavatar(b.id);
});

bthread("Unresolvedissuecount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Unresolvedissuecount_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUnresolvedissuecount(x.id);
  for (var i=0; i<steps; i++) {
    updateUnresolvedissuecount(x.id);
  }
  if (pick([true,false])) { deleteUnresolvedissuecount(x.id); }
  verifyUnresolvedissuecountExists(x.id);
  verifyUnresolvedissuecountUpdated(x.id);
});

bthread("Unresolvedissuecount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUnresolvedissuecount(a.id);
  block(matchAddUnresolvedissuecount(a.id, ANY), function () {});
  addUnresolvedissuecount(b.id);
});

bthread("Unwatch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Unwatch_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUnwatch(x.id);
  for (var i=0; i<steps; i++) {
    updateUnwatch(x.id);
  }
  if (pick([true,false])) { deleteUnwatch(x.id); }
  verifyUnwatchExists(x.id);
  verifyUnwatchUpdated(x.id);
});

bthread("Unwatch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUnwatch(a.id);
  block(matchAddUnwatch(a.id, ANY), function () {});
  addUnwatch(b.id);
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

bthread("Updated nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Updated_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUpdated(x.id);
  for (var i=0; i<steps; i++) {
    updateUpdated(x.id);
  }
  if (pick([true,false])) { deleteUpdated(x.id); }
  verifyUpdatedExists(x.id);
  verifyUpdatedUpdated(x.id);
});

bthread("Updated nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUpdated(a.id);
  block(matchAddUpdated(a.id, ANY), function () {});
  addUpdated(b.id);
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

bthread("Validation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Validation_id_N"}]);
  const steps = pick([0,1,2,10]);
  addValidation(x.id);
  for (var i=0; i<steps; i++) {
    updateValidation(x.id);
  }
  if (pick([true,false])) { deleteValidation(x.id); }
  verifyValidationExists(x.id);
  verifyValidationUpdated(x.id);
});

bthread("Validation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addValidation(a.id);
  block(matchAddValidation(a.id, ANY), function () {});
  addValidation(b.id);
});

bthread("Validprojectkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Validprojectkey_id_N"}]);
  const steps = pick([0,1,2,10]);
  addValidprojectkey(x.id);
  for (var i=0; i<steps; i++) {
    updateValidprojectkey(x.id);
  }
  if (pick([true,false])) { deleteValidprojectkey(x.id); }
  verifyValidprojectkeyExists(x.id);
  verifyValidprojectkeyUpdated(x.id);
});

bthread("Validprojectkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addValidprojectkey(a.id);
  block(matchAddValidprojectkey(a.id, ANY), function () {});
  addValidprojectkey(b.id);
});

bthread("Validprojectname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Validprojectname_id_N"}]);
  const steps = pick([0,1,2,10]);
  addValidprojectname(x.id);
  for (var i=0; i<steps; i++) {
    updateValidprojectname(x.id);
  }
  if (pick([true,false])) { deleteValidprojectname(x.id); }
  verifyValidprojectnameExists(x.id);
  verifyValidprojectnameUpdated(x.id);
});

bthread("Validprojectname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addValidprojectname(a.id);
  block(matchAddValidprojectname(a.id, ANY), function () {});
  addValidprojectname(b.id);
});

bthread("Value nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Value_id_N"}]);
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

bthread("View nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "View_id_N"}]);
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

bthread("Viewissue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Viewissue_id_N"}]);
  const steps = pick([0,1,2,10]);
  addViewissue(x.id);
  for (var i=0; i<steps; i++) {
    updateViewissue(x.id);
  }
  if (pick([true,false])) { deleteViewissue(x.id); }
  verifyViewissueExists(x.id);
  verifyViewissueUpdated(x.id);
});

bthread("Viewissue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addViewissue(a.id);
  block(matchAddViewissue(a.id, ANY), function () {});
  addViewissue(b.id);
});

bthread("Vote nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Vote_id_N"}]);
  const steps = pick([0,1,2,10]);
  addVote(x.id);
  for (var i=0; i<steps; i++) {
    updateVote(x.id);
  }
  if (pick([true,false])) { deleteVote(x.id); }
  verifyVoteExists(x.id);
  verifyVoteUpdated(x.id);
});

bthread("Vote nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVote(a.id);
  block(matchAddVote(a.id, ANY), function () {});
  addVote(b.id);
});

bthread("Watch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Watch_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWatch(x.id);
  for (var i=0; i<steps; i++) {
    updateWatch(x.id);
  }
  if (pick([true,false])) { deleteWatch(x.id); }
  verifyWatchExists(x.id);
  verifyWatchUpdated(x.id);
});

bthread("Watch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWatch(a.id);
  block(matchAddWatch(a.id, ANY), function () {});
  addWatch(b.id);
});

bthread("Watcher nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Watcher_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWatcher(x.id);
  for (var i=0; i<steps; i++) {
    updateWatcher(x.id);
  }
  if (pick([true,false])) { deleteWatcher(x.id); }
  verifyWatcherExists(x.id);
  verifyWatcherUpdated(x.id);
});

bthread("Watcher nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWatcher(a.id);
  block(matchAddWatcher(a.id, ANY), function () {});
  addWatcher(b.id);
});

bthread("Watching nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Watching_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWatching(x.id);
  for (var i=0; i<steps; i++) {
    updateWatching(x.id);
  }
  if (pick([true,false])) { deleteWatching(x.id); }
  verifyWatchingExists(x.id);
  verifyWatchingUpdated(x.id);
});

bthread("Watching nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWatching(a.id);
  block(matchAddWatching(a.id, ANY), function () {});
  addWatching(b.id);
});

bthread("Webhook nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Webhook_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWebhook(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhook(x.id);
  }
  if (pick([true,false])) { deleteWebhook(x.id); }
  verifyWebhookExists(x.id);
  verifyWebhookUpdated(x.id);
});

bthread("Webhook nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWebhook(a.id);
  block(matchAddWebhook(a.id, ANY), function () {});
  addWebhook(b.id);
});

bthread("Workflow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Workflow_id_N"}]);
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

bthread("Workflowscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Workflowscheme_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWorkflowscheme(x.id);
  for (var i=0; i<steps; i++) {
    updateWorkflowscheme(x.id);
  }
  if (pick([true,false])) { deleteWorkflowscheme(x.id); }
  verifyWorkflowschemeExists(x.id);
  verifyWorkflowschemeUpdated(x.id);
});

bthread("Workflowscheme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWorkflowscheme(a.id);
  block(matchAddWorkflowscheme(a.id, ANY), function () {});
  addWorkflowscheme(b.id);
});

bthread("Workflowusage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Workflowusage_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWorkflowusage(x.id);
  for (var i=0; i<steps; i++) {
    updateWorkflowusage(x.id);
  }
  if (pick([true,false])) { deleteWorkflowusage(x.id); }
  verifyWorkflowusageExists(x.id);
  verifyWorkflowusageUpdated(x.id);
});

bthread("Workflowusage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWorkflowusage(a.id);
  block(matchAddWorkflowusage(a.id, ANY), function () {});
  addWorkflowusage(b.id);
});

bthread("Worklog nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Worklog_id_N"}]);
  const steps = pick([0,1,2,10]);
  addWorklog(x.id);
  for (var i=0; i<steps; i++) {
    updateWorklog(x.id);
  }
  if (pick([true,false])) { deleteWorklog(x.id); }
  verifyWorklogExists(x.id);
  verifyWorklogUpdated(x.id);
});

bthread("Worklog nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWorklog(a.id);
  block(matchAddWorklog(a.id, ANY), function () {});
  addWorklog(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("1 create verification", function () {
  const e = waitForAny1Added();
  block(matchDelete1(e.id, ANY), function () {
    verify1Exists(e.id);
  });
});

bthread("1 update verification", function () {
  const e = waitForAny1Updated();
  block(matchDelete1(e.id, ANY), function () {
    verify1Updated(e.id);
  });
});

bthread("1 delete verification", function () {
  const e = waitForAny1Deleted();
  block(matchAdd1(e.id, ANY), function () {
    verify1DoesNotExist(e.id);
  });
});

bthread("3 create verification", function () {
  const e = waitForAny3Added();
  block(matchDelete3(e.id, ANY), function () {
    verify3Exists(e.id);
  });
});

bthread("3 update verification", function () {
  const e = waitForAny3Updated();
  block(matchDelete3(e.id, ANY), function () {
    verify3Updated(e.id);
  });
});

bthread("3 delete verification", function () {
  const e = waitForAny3Deleted();
  block(matchAdd3(e.id, ANY), function () {
    verify3DoesNotExist(e.id);
  });
});

bthread("Accessible create verification", function () {
  const e = waitForAnyAccessibleAdded();
  block(matchDeleteAccessible(e.id, ANY), function () {
    verifyAccessibleExists(e.id);
  });
});

bthread("Accessible update verification", function () {
  const e = waitForAnyAccessibleUpdated();
  block(matchDeleteAccessible(e.id, ANY), function () {
    verifyAccessibleUpdated(e.id);
  });
});

bthread("Accessible delete verification", function () {
  const e = waitForAnyAccessibleDeleted();
  block(matchAddAccessible(e.id, ANY), function () {
    verifyAccessibleDoesNotExist(e.id);
  });
});

bthread("Actor create verification", function () {
  const e = waitForAnyActorAdded();
  block(matchDeleteActor(e.id, ANY), function () {
    verifyActorExists(e.id);
  });
});

bthread("Actor update verification", function () {
  const e = waitForAnyActorUpdated();
  block(matchDeleteActor(e.id, ANY), function () {
    verifyActorUpdated(e.id);
  });
});

bthread("Actor delete verification", function () {
  const e = waitForAnyActorDeleted();
  block(matchAddActor(e.id, ANY), function () {
    verifyActorDoesNotExist(e.id);
  });
});

bthread("Addon create verification", function () {
  const e = waitForAnyAddonAdded();
  block(matchDeleteAddon(e.id, ANY), function () {
    verifyAddonExists(e.id);
  });
});

bthread("Addon update verification", function () {
  const e = waitForAnyAddonUpdated();
  block(matchDeleteAddon(e.id, ANY), function () {
    verifyAddonUpdated(e.id);
  });
});

bthread("Addon delete verification", function () {
  const e = waitForAnyAddonDeleted();
  block(matchAddAddon(e.id, ANY), function () {
    verifyAddonDoesNotExist(e.id);
  });
});

bthread("Addtodefault create verification", function () {
  const e = waitForAnyAddtodefaultAdded();
  block(matchDeleteAddtodefault(e.id, ANY), function () {
    verifyAddtodefaultExists(e.id);
  });
});

bthread("Addtodefault update verification", function () {
  const e = waitForAnyAddtodefaultUpdated();
  block(matchDeleteAddtodefault(e.id, ANY), function () {
    verifyAddtodefaultUpdated(e.id);
  });
});

bthread("Addtodefault delete verification", function () {
  const e = waitForAnyAddtodefaultDeleted();
  block(matchAddAddtodefault(e.id, ANY), function () {
    verifyAddtodefaultDoesNotExist(e.id);
  });
});

bthread("Advancedsetting create verification", function () {
  const e = waitForAnyAdvancedsettingAdded();
  block(matchDeleteAdvancedsetting(e.id, ANY), function () {
    verifyAdvancedsettingExists(e.id);
  });
});

bthread("Advancedsetting update verification", function () {
  const e = waitForAnyAdvancedsettingUpdated();
  block(matchDeleteAdvancedsetting(e.id, ANY), function () {
    verifyAdvancedsettingUpdated(e.id);
  });
});

bthread("Advancedsetting delete verification", function () {
  const e = waitForAnyAdvancedsettingDeleted();
  block(matchAddAdvancedsetting(e.id, ANY), function () {
    verifyAdvancedsettingDoesNotExist(e.id);
  });
});

bthread("Alternative create verification", function () {
  const e = waitForAnyAlternativeAdded();
  block(matchDeleteAlternative(e.id, ANY), function () {
    verifyAlternativeExists(e.id);
  });
});

bthread("Alternative update verification", function () {
  const e = waitForAnyAlternativeUpdated();
  block(matchDeleteAlternative(e.id, ANY), function () {
    verifyAlternativeUpdated(e.id);
  });
});

bthread("Alternative delete verification", function () {
  const e = waitForAnyAlternativeDeleted();
  block(matchAddAlternative(e.id, ANY), function () {
    verifyAlternativeDoesNotExist(e.id);
  });
});

bthread("Analyse create verification", function () {
  const e = waitForAnyAnalyseAdded();
  block(matchDeleteAnalyse(e.id, ANY), function () {
    verifyAnalyseExists(e.id);
  });
});

bthread("Analyse update verification", function () {
  const e = waitForAnyAnalyseUpdated();
  block(matchDeleteAnalyse(e.id, ANY), function () {
    verifyAnalyseUpdated(e.id);
  });
});

bthread("Analyse delete verification", function () {
  const e = waitForAnyAnalyseDeleted();
  block(matchAddAnalyse(e.id, ANY), function () {
    verifyAnalyseDoesNotExist(e.id);
  });
});

bthread("Announcementbanner create verification", function () {
  const e = waitForAnyAnnouncementbannerAdded();
  block(matchDeleteAnnouncementbanner(e.id, ANY), function () {
    verifyAnnouncementbannerExists(e.id);
  });
});

bthread("Announcementbanner update verification", function () {
  const e = waitForAnyAnnouncementbannerUpdated();
  block(matchDeleteAnnouncementbanner(e.id, ANY), function () {
    verifyAnnouncementbannerUpdated(e.id);
  });
});

bthread("Announcementbanner delete verification", function () {
  const e = waitForAnyAnnouncementbannerDeleted();
  block(matchAddAnnouncementbanner(e.id, ANY), function () {
    verifyAnnouncementbannerDoesNotExist(e.id);
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

bthread("Applicationproperty create verification", function () {
  const e = waitForAnyApplicationpropertyAdded();
  block(matchDeleteApplicationproperty(e.id, ANY), function () {
    verifyApplicationpropertyExists(e.id);
  });
});

bthread("Applicationproperty update verification", function () {
  const e = waitForAnyApplicationpropertyUpdated();
  block(matchDeleteApplicationproperty(e.id, ANY), function () {
    verifyApplicationpropertyUpdated(e.id);
  });
});

bthread("Applicationproperty delete verification", function () {
  const e = waitForAnyApplicationpropertyDeleted();
  block(matchAddApplicationproperty(e.id, ANY), function () {
    verifyApplicationpropertyDoesNotExist(e.id);
  });
});

bthread("Applicationrole create verification", function () {
  const e = waitForAnyApplicationroleAdded();
  block(matchDeleteApplicationrole(e.id, ANY), function () {
    verifyApplicationroleExists(e.id);
  });
});

bthread("Applicationrole update verification", function () {
  const e = waitForAnyApplicationroleUpdated();
  block(matchDeleteApplicationrole(e.id, ANY), function () {
    verifyApplicationroleUpdated(e.id);
  });
});

bthread("Applicationrole delete verification", function () {
  const e = waitForAnyApplicationroleDeleted();
  block(matchAddApplicationrole(e.id, ANY), function () {
    verifyApplicationroleDoesNotExist(e.id);
  });
});

bthread("Approximatecount create verification", function () {
  const e = waitForAnyApproximatecountAdded();
  block(matchDeleteApproximatecount(e.id, ANY), function () {
    verifyApproximatecountExists(e.id);
  });
});

bthread("Approximatecount update verification", function () {
  const e = waitForAnyApproximatecountUpdated();
  block(matchDeleteApproximatecount(e.id, ANY), function () {
    verifyApproximatecountUpdated(e.id);
  });
});

bthread("Approximatecount delete verification", function () {
  const e = waitForAnyApproximatecountDeleted();
  block(matchAddApproximatecount(e.id, ANY), function () {
    verifyApproximatecountDoesNotExist(e.id);
  });
});

bthread("Approximatelicensecount create verification", function () {
  const e = waitForAnyApproximatelicensecountAdded();
  block(matchDeleteApproximatelicensecount(e.id, ANY), function () {
    verifyApproximatelicensecountExists(e.id);
  });
});

bthread("Approximatelicensecount update verification", function () {
  const e = waitForAnyApproximatelicensecountUpdated();
  block(matchDeleteApproximatelicensecount(e.id, ANY), function () {
    verifyApproximatelicensecountUpdated(e.id);
  });
});

bthread("Approximatelicensecount delete verification", function () {
  const e = waitForAnyApproximatelicensecountDeleted();
  block(matchAddApproximatelicensecount(e.id, ANY), function () {
    verifyApproximatelicensecountDoesNotExist(e.id);
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

bthread("Assignable create verification", function () {
  const e = waitForAnyAssignableAdded();
  block(matchDeleteAssignable(e.id, ANY), function () {
    verifyAssignableExists(e.id);
  });
});

bthread("Assignable update verification", function () {
  const e = waitForAnyAssignableUpdated();
  block(matchDeleteAssignable(e.id, ANY), function () {
    verifyAssignableUpdated(e.id);
  });
});

bthread("Assignable delete verification", function () {
  const e = waitForAnyAssignableDeleted();
  block(matchAddAssignable(e.id, ANY), function () {
    verifyAssignableDoesNotExist(e.id);
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

bthread("Association create verification", function () {
  const e = waitForAnyAssociationAdded();
  block(matchDeleteAssociation(e.id, ANY), function () {
    verifyAssociationExists(e.id);
  });
});

bthread("Association update verification", function () {
  const e = waitForAnyAssociationUpdated();
  block(matchDeleteAssociation(e.id, ANY), function () {
    verifyAssociationUpdated(e.id);
  });
});

bthread("Association delete verification", function () {
  const e = waitForAnyAssociationDeleted();
  block(matchAddAssociation(e.id, ANY), function () {
    verifyAssociationDoesNotExist(e.id);
  });
});

bthread("Atlassian create verification", function () {
  const e = waitForAnyAtlassianAdded();
  block(matchDeleteAtlassian(e.id, ANY), function () {
    verifyAtlassianExists(e.id);
  });
});

bthread("Atlassian update verification", function () {
  const e = waitForAnyAtlassianUpdated();
  block(matchDeleteAtlassian(e.id, ANY), function () {
    verifyAtlassianUpdated(e.id);
  });
});

bthread("Atlassian delete verification", function () {
  const e = waitForAnyAtlassianDeleted();
  block(matchAddAtlassian(e.id, ANY), function () {
    verifyAtlassianDoesNotExist(e.id);
  });
});

bthread("Atlassianconnect create verification", function () {
  const e = waitForAnyAtlassianconnectAdded();
  block(matchDeleteAtlassianconnect(e.id, ANY), function () {
    verifyAtlassianconnectExists(e.id);
  });
});

bthread("Atlassianconnect update verification", function () {
  const e = waitForAnyAtlassianconnectUpdated();
  block(matchDeleteAtlassianconnect(e.id, ANY), function () {
    verifyAtlassianconnectUpdated(e.id);
  });
});

bthread("Atlassianconnect delete verification", function () {
  const e = waitForAnyAtlassianconnectDeleted();
  block(matchAddAtlassianconnect(e.id, ANY), function () {
    verifyAtlassianconnectDoesNotExist(e.id);
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

bthread("Auditing create verification", function () {
  const e = waitForAnyAuditingAdded();
  block(matchDeleteAuditing(e.id, ANY), function () {
    verifyAuditingExists(e.id);
  });
});

bthread("Auditing update verification", function () {
  const e = waitForAnyAuditingUpdated();
  block(matchDeleteAuditing(e.id, ANY), function () {
    verifyAuditingUpdated(e.id);
  });
});

bthread("Auditing delete verification", function () {
  const e = waitForAnyAuditingDeleted();
  block(matchAddAuditing(e.id, ANY), function () {
    verifyAuditingDoesNotExist(e.id);
  });
});

bthread("Autocompletedata create verification", function () {
  const e = waitForAnyAutocompletedataAdded();
  block(matchDeleteAutocompletedata(e.id, ANY), function () {
    verifyAutocompletedataExists(e.id);
  });
});

bthread("Autocompletedata update verification", function () {
  const e = waitForAnyAutocompletedataUpdated();
  block(matchDeleteAutocompletedata(e.id, ANY), function () {
    verifyAutocompletedataUpdated(e.id);
  });
});

bthread("Autocompletedata delete verification", function () {
  const e = waitForAnyAutocompletedataDeleted();
  block(matchAddAutocompletedata(e.id, ANY), function () {
    verifyAutocompletedataDoesNotExist(e.id);
  });
});

bthread("Available create verification", function () {
  const e = waitForAnyAvailableAdded();
  block(matchDeleteAvailable(e.id, ANY), function () {
    verifyAvailableExists(e.id);
  });
});

bthread("Available update verification", function () {
  const e = waitForAnyAvailableUpdated();
  block(matchDeleteAvailable(e.id, ANY), function () {
    verifyAvailableUpdated(e.id);
  });
});

bthread("Available delete verification", function () {
  const e = waitForAnyAvailableDeleted();
  block(matchAddAvailable(e.id, ANY), function () {
    verifyAvailableDoesNotExist(e.id);
  });
});

bthread("Availablefield create verification", function () {
  const e = waitForAnyAvailablefieldAdded();
  block(matchDeleteAvailablefield(e.id, ANY), function () {
    verifyAvailablefieldExists(e.id);
  });
});

bthread("Availablefield update verification", function () {
  const e = waitForAnyAvailablefieldUpdated();
  block(matchDeleteAvailablefield(e.id, ANY), function () {
    verifyAvailablefieldUpdated(e.id);
  });
});

bthread("Availablefield delete verification", function () {
  const e = waitForAnyAvailablefieldDeleted();
  block(matchAddAvailablefield(e.id, ANY), function () {
    verifyAvailablefieldDoesNotExist(e.id);
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

bthread("Avatar2 create verification", function () {
  const e = waitForAnyAvatar2Added();
  block(matchDeleteAvatar2(e.id, ANY), function () {
    verifyAvatar2Exists(e.id);
  });
});

bthread("Avatar2 update verification", function () {
  const e = waitForAnyAvatar2Updated();
  block(matchDeleteAvatar2(e.id, ANY), function () {
    verifyAvatar2Updated(e.id);
  });
});

bthread("Avatar2 delete verification", function () {
  const e = waitForAnyAvatar2Deleted();
  block(matchAddAvatar2(e.id, ANY), function () {
    verifyAvatar2DoesNotExist(e.id);
  });
});

bthread("Bulk create verification", function () {
  const e = waitForAnyBulkAdded();
  block(matchDeleteBulk(e.id, ANY), function () {
    verifyBulkExists(e.id);
  });
});

bthread("Bulk update verification", function () {
  const e = waitForAnyBulkUpdated();
  block(matchDeleteBulk(e.id, ANY), function () {
    verifyBulkUpdated(e.id);
  });
});

bthread("Bulk delete verification", function () {
  const e = waitForAnyBulkDeleted();
  block(matchAddBulk(e.id, ANY), function () {
    verifyBulkDoesNotExist(e.id);
  });
});

bthread("Bulkfetch create verification", function () {
  const e = waitForAnyBulkfetchAdded();
  block(matchDeleteBulkfetch(e.id, ANY), function () {
    verifyBulkfetchExists(e.id);
  });
});

bthread("Bulkfetch update verification", function () {
  const e = waitForAnyBulkfetchUpdated();
  block(matchDeleteBulkfetch(e.id, ANY), function () {
    verifyBulkfetchUpdated(e.id);
  });
});

bthread("Bulkfetch delete verification", function () {
  const e = waitForAnyBulkfetchDeleted();
  block(matchAddBulkfetch(e.id, ANY), function () {
    verifyBulkfetchDoesNotExist(e.id);
  });
});

bthread("Byname create verification", function () {
  const e = waitForAnyBynameAdded();
  block(matchDeleteByname(e.id, ANY), function () {
    verifyBynameExists(e.id);
  });
});

bthread("Byname update verification", function () {
  const e = waitForAnyBynameUpdated();
  block(matchDeleteByname(e.id, ANY), function () {
    verifyBynameUpdated(e.id);
  });
});

bthread("Byname delete verification", function () {
  const e = waitForAnyBynameDeleted();
  block(matchAddByname(e.id, ANY), function () {
    verifyBynameDoesNotExist(e.id);
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

bthread("Capability create verification", function () {
  const e = waitForAnyCapabilityAdded();
  block(matchDeleteCapability(e.id, ANY), function () {
    verifyCapabilityExists(e.id);
  });
});

bthread("Capability update verification", function () {
  const e = waitForAnyCapabilityUpdated();
  block(matchDeleteCapability(e.id, ANY), function () {
    verifyCapabilityUpdated(e.id);
  });
});

bthread("Capability delete verification", function () {
  const e = waitForAnyCapabilityDeleted();
  block(matchAddCapability(e.id, ANY), function () {
    verifyCapabilityDoesNotExist(e.id);
  });
});

bthread("Changelog create verification", function () {
  const e = waitForAnyChangelogAdded();
  block(matchDeleteChangelog(e.id, ANY), function () {
    verifyChangelogExists(e.id);
  });
});

bthread("Changelog update verification", function () {
  const e = waitForAnyChangelogUpdated();
  block(matchDeleteChangelog(e.id, ANY), function () {
    verifyChangelogUpdated(e.id);
  });
});

bthread("Changelog delete verification", function () {
  const e = waitForAnyChangelogDeleted();
  block(matchAddChangelog(e.id, ANY), function () {
    verifyChangelogDoesNotExist(e.id);
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

bthread("Classificationlevel create verification", function () {
  const e = waitForAnyClassificationlevelAdded();
  block(matchDeleteClassificationlevel(e.id, ANY), function () {
    verifyClassificationlevelExists(e.id);
  });
});

bthread("Classificationlevel update verification", function () {
  const e = waitForAnyClassificationlevelUpdated();
  block(matchDeleteClassificationlevel(e.id, ANY), function () {
    verifyClassificationlevelUpdated(e.id);
  });
});

bthread("Classificationlevel delete verification", function () {
  const e = waitForAnyClassificationlevelDeleted();
  block(matchAddClassificationlevel(e.id, ANY), function () {
    verifyClassificationlevelDoesNotExist(e.id);
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

bthread("Component create verification", function () {
  const e = waitForAnyComponentAdded();
  block(matchDeleteComponent(e.id, ANY), function () {
    verifyComponentExists(e.id);
  });
});

bthread("Component update verification", function () {
  const e = waitForAnyComponentUpdated();
  block(matchDeleteComponent(e.id, ANY), function () {
    verifyComponentUpdated(e.id);
  });
});

bthread("Component delete verification", function () {
  const e = waitForAnyComponentDeleted();
  block(matchAddComponent(e.id, ANY), function () {
    verifyComponentDoesNotExist(e.id);
  });
});

bthread("Computation create verification", function () {
  const e = waitForAnyComputationAdded();
  block(matchDeleteComputation(e.id, ANY), function () {
    verifyComputationExists(e.id);
  });
});

bthread("Computation update verification", function () {
  const e = waitForAnyComputationUpdated();
  block(matchDeleteComputation(e.id, ANY), function () {
    verifyComputationUpdated(e.id);
  });
});

bthread("Computation delete verification", function () {
  const e = waitForAnyComputationDeleted();
  block(matchAddComputation(e.id, ANY), function () {
    verifyComputationDoesNotExist(e.id);
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

bthread("Copy create verification", function () {
  const e = waitForAnyCopyAdded();
  block(matchDeleteCopy(e.id, ANY), function () {
    verifyCopyExists(e.id);
  });
});

bthread("Copy update verification", function () {
  const e = waitForAnyCopyUpdated();
  block(matchDeleteCopy(e.id, ANY), function () {
    verifyCopyUpdated(e.id);
  });
});

bthread("Copy delete verification", function () {
  const e = waitForAnyCopyDeleted();
  block(matchAddCopy(e.id, ANY), function () {
    verifyCopyDoesNotExist(e.id);
  });
});

bthread("Create create verification", function () {
  const e = waitForAnyCreateAdded();
  block(matchDeleteCreate(e.id, ANY), function () {
    verifyCreateExists(e.id);
  });
});

bthread("Create update verification", function () {
  const e = waitForAnyCreateUpdated();
  block(matchDeleteCreate(e.id, ANY), function () {
    verifyCreateUpdated(e.id);
  });
});

bthread("Create delete verification", function () {
  const e = waitForAnyCreateDeleted();
  block(matchAddCreate(e.id, ANY), function () {
    verifyCreateDoesNotExist(e.id);
  });
});

bthread("Createdraft create verification", function () {
  const e = waitForAnyCreatedraftAdded();
  block(matchDeleteCreatedraft(e.id, ANY), function () {
    verifyCreatedraftExists(e.id);
  });
});

bthread("Createdraft update verification", function () {
  const e = waitForAnyCreatedraftUpdated();
  block(matchDeleteCreatedraft(e.id, ANY), function () {
    verifyCreatedraftUpdated(e.id);
  });
});

bthread("Createdraft delete verification", function () {
  const e = waitForAnyCreatedraftDeleted();
  block(matchAddCreatedraft(e.id, ANY), function () {
    verifyCreatedraftDoesNotExist(e.id);
  });
});

bthread("Createmeta create verification", function () {
  const e = waitForAnyCreatemetaAdded();
  block(matchDeleteCreatemeta(e.id, ANY), function () {
    verifyCreatemetaExists(e.id);
  });
});

bthread("Createmeta update verification", function () {
  const e = waitForAnyCreatemetaUpdated();
  block(matchDeleteCreatemeta(e.id, ANY), function () {
    verifyCreatemetaUpdated(e.id);
  });
});

bthread("Createmeta delete verification", function () {
  const e = waitForAnyCreatemetaDeleted();
  block(matchAddCreatemeta(e.id, ANY), function () {
    verifyCreatemetaDoesNotExist(e.id);
  });
});

bthread("Customfieldoption create verification", function () {
  const e = waitForAnyCustomfieldoptionAdded();
  block(matchDeleteCustomfieldoption(e.id, ANY), function () {
    verifyCustomfieldoptionExists(e.id);
  });
});

bthread("Customfieldoption update verification", function () {
  const e = waitForAnyCustomfieldoptionUpdated();
  block(matchDeleteCustomfieldoption(e.id, ANY), function () {
    verifyCustomfieldoptionUpdated(e.id);
  });
});

bthread("Customfieldoption delete verification", function () {
  const e = waitForAnyCustomfieldoptionDeleted();
  block(matchAddCustomfieldoption(e.id, ANY), function () {
    verifyCustomfieldoptionDoesNotExist(e.id);
  });
});

bthread("Dashboard create verification", function () {
  const e = waitForAnyDashboardAdded();
  block(matchDeleteDashboard(e.id, ANY), function () {
    verifyDashboardExists(e.id);
  });
});

bthread("Dashboard update verification", function () {
  const e = waitForAnyDashboardUpdated();
  block(matchDeleteDashboard(e.id, ANY), function () {
    verifyDashboardUpdated(e.id);
  });
});

bthread("Dashboard delete verification", function () {
  const e = waitForAnyDashboardDeleted();
  block(matchAddDashboard(e.id, ANY), function () {
    verifyDashboardDoesNotExist(e.id);
  });
});

bthread("Datapolicy create verification", function () {
  const e = waitForAnyDatapolicyAdded();
  block(matchDeleteDatapolicy(e.id, ANY), function () {
    verifyDatapolicyExists(e.id);
  });
});

bthread("Datapolicy update verification", function () {
  const e = waitForAnyDatapolicyUpdated();
  block(matchDeleteDatapolicy(e.id, ANY), function () {
    verifyDatapolicyUpdated(e.id);
  });
});

bthread("Datapolicy delete verification", function () {
  const e = waitForAnyDatapolicyDeleted();
  block(matchAddDatapolicy(e.id, ANY), function () {
    verifyDatapolicyDoesNotExist(e.id);
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

bthread("Defaulteditor create verification", function () {
  const e = waitForAnyDefaulteditorAdded();
  block(matchDeleteDefaulteditor(e.id, ANY), function () {
    verifyDefaulteditorExists(e.id);
  });
});

bthread("Defaulteditor update verification", function () {
  const e = waitForAnyDefaulteditorUpdated();
  block(matchDeleteDefaulteditor(e.id, ANY), function () {
    verifyDefaulteditorUpdated(e.id);
  });
});

bthread("Defaulteditor delete verification", function () {
  const e = waitForAnyDefaulteditorDeleted();
  block(matchAddDefaulteditor(e.id, ANY), function () {
    verifyDefaulteditorDoesNotExist(e.id);
  });
});

bthread("Defaultsharescope create verification", function () {
  const e = waitForAnyDefaultsharescopeAdded();
  block(matchDeleteDefaultsharescope(e.id, ANY), function () {
    verifyDefaultsharescopeExists(e.id);
  });
});

bthread("Defaultsharescope update verification", function () {
  const e = waitForAnyDefaultsharescopeUpdated();
  block(matchDeleteDefaultsharescope(e.id, ANY), function () {
    verifyDefaultsharescopeUpdated(e.id);
  });
});

bthread("Defaultsharescope delete verification", function () {
  const e = waitForAnyDefaultsharescopeDeleted();
  block(matchAddDefaultsharescope(e.id, ANY), function () {
    verifyDefaultsharescopeDoesNotExist(e.id);
  });
});

bthread("Defaultvalue create verification", function () {
  const e = waitForAnyDefaultvalueAdded();
  block(matchDeleteDefaultvalue(e.id, ANY), function () {
    verifyDefaultvalueExists(e.id);
  });
});

bthread("Defaultvalue update verification", function () {
  const e = waitForAnyDefaultvalueUpdated();
  block(matchDeleteDefaultvalue(e.id, ANY), function () {
    verifyDefaultvalueUpdated(e.id);
  });
});

bthread("Defaultvalue delete verification", function () {
  const e = waitForAnyDefaultvalueDeleted();
  block(matchAddDefaultvalue(e.id, ANY), function () {
    verifyDefaultvalueDoesNotExist(e.id);
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

bthread("Deleted create verification", function () {
  const e = waitForAnyDeletedAdded();
  block(matchDeleteDeleted(e.id, ANY), function () {
    verifyDeletedExists(e.id);
  });
});

bthread("Deleted update verification", function () {
  const e = waitForAnyDeletedUpdated();
  block(matchDeleteDeleted(e.id, ANY), function () {
    verifyDeletedUpdated(e.id);
  });
});

bthread("Deleted delete verification", function () {
  const e = waitForAnyDeletedDeleted();
  block(matchAddDeleted(e.id, ANY), function () {
    verifyDeletedDoesNotExist(e.id);
  });
});

bthread("Draft create verification", function () {
  const e = waitForAnyDraftAdded();
  block(matchDeleteDraft(e.id, ANY), function () {
    verifyDraftExists(e.id);
  });
});

bthread("Draft update verification", function () {
  const e = waitForAnyDraftUpdated();
  block(matchDeleteDraft(e.id, ANY), function () {
    verifyDraftUpdated(e.id);
  });
});

bthread("Draft delete verification", function () {
  const e = waitForAnyDraftDeleted();
  block(matchAddDraft(e.id, ANY), function () {
    verifyDraftDoesNotExist(e.id);
  });
});

bthread("Duplicate create verification", function () {
  const e = waitForAnyDuplicateAdded();
  block(matchDeleteDuplicate(e.id, ANY), function () {
    verifyDuplicateExists(e.id);
  });
});

bthread("Duplicate update verification", function () {
  const e = waitForAnyDuplicateUpdated();
  block(matchDeleteDuplicate(e.id, ANY), function () {
    verifyDuplicateUpdated(e.id);
  });
});

bthread("Duplicate delete verification", function () {
  const e = waitForAnyDuplicateDeleted();
  block(matchAddDuplicate(e.id, ANY), function () {
    verifyDuplicateDoesNotExist(e.id);
  });
});

bthread("Dynamic create verification", function () {
  const e = waitForAnyDynamicAdded();
  block(matchDeleteDynamic(e.id, ANY), function () {
    verifyDynamicExists(e.id);
  });
});

bthread("Dynamic update verification", function () {
  const e = waitForAnyDynamicUpdated();
  block(matchDeleteDynamic(e.id, ANY), function () {
    verifyDynamicUpdated(e.id);
  });
});

bthread("Dynamic delete verification", function () {
  const e = waitForAnyDynamicDeleted();
  block(matchAddDynamic(e.id, ANY), function () {
    verifyDynamicDoesNotExist(e.id);
  });
});

bthread("Edit create verification", function () {
  const e = waitForAnyEditAdded();
  block(matchDeleteEdit(e.id, ANY), function () {
    verifyEditExists(e.id);
  });
});

bthread("Edit update verification", function () {
  const e = waitForAnyEditUpdated();
  block(matchDeleteEdit(e.id, ANY), function () {
    verifyEditUpdated(e.id);
  });
});

bthread("Edit delete verification", function () {
  const e = waitForAnyEditDeleted();
  block(matchAddEdit(e.id, ANY), function () {
    verifyEditDoesNotExist(e.id);
  });
});

bthread("Editmeta create verification", function () {
  const e = waitForAnyEditmetaAdded();
  block(matchDeleteEditmeta(e.id, ANY), function () {
    verifyEditmetaExists(e.id);
  });
});

bthread("Editmeta update verification", function () {
  const e = waitForAnyEditmetaUpdated();
  block(matchDeleteEditmeta(e.id, ANY), function () {
    verifyEditmetaUpdated(e.id);
  });
});

bthread("Editmeta delete verification", function () {
  const e = waitForAnyEditmetaDeleted();
  block(matchAddEditmeta(e.id, ANY), function () {
    verifyEditmetaDoesNotExist(e.id);
  });
});

bthread("Edittemplate create verification", function () {
  const e = waitForAnyEdittemplateAdded();
  block(matchDeleteEdittemplate(e.id, ANY), function () {
    verifyEdittemplateExists(e.id);
  });
});

bthread("Edittemplate update verification", function () {
  const e = waitForAnyEdittemplateUpdated();
  block(matchDeleteEdittemplate(e.id, ANY), function () {
    verifyEdittemplateUpdated(e.id);
  });
});

bthread("Edittemplate delete verification", function () {
  const e = waitForAnyEdittemplateDeleted();
  block(matchAddEdittemplate(e.id, ANY), function () {
    verifyEdittemplateDoesNotExist(e.id);
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

bthread("Eval create verification", function () {
  const e = waitForAnyEvalAdded();
  block(matchDeleteEval(e.id, ANY), function () {
    verifyEvalExists(e.id);
  });
});

bthread("Eval update verification", function () {
  const e = waitForAnyEvalUpdated();
  block(matchDeleteEval(e.id, ANY), function () {
    verifyEvalUpdated(e.id);
  });
});

bthread("Eval delete verification", function () {
  const e = waitForAnyEvalDeleted();
  block(matchAddEval(e.id, ANY), function () {
    verifyEvalDoesNotExist(e.id);
  });
});

bthread("Evaluate create verification", function () {
  const e = waitForAnyEvaluateAdded();
  block(matchDeleteEvaluate(e.id, ANY), function () {
    verifyEvaluateExists(e.id);
  });
});

bthread("Evaluate update verification", function () {
  const e = waitForAnyEvaluateUpdated();
  block(matchDeleteEvaluate(e.id, ANY), function () {
    verifyEvaluateUpdated(e.id);
  });
});

bthread("Evaluate delete verification", function () {
  const e = waitForAnyEvaluateDeleted();
  block(matchAddEvaluate(e.id, ANY), function () {
    verifyEvaluateDoesNotExist(e.id);
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

bthread("Expand create verification", function () {
  const e = waitForAnyExpandAdded();
  block(matchDeleteExpand(e.id, ANY), function () {
    verifyExpandExists(e.id);
  });
});

bthread("Expand update verification", function () {
  const e = waitForAnyExpandUpdated();
  block(matchDeleteExpand(e.id, ANY), function () {
    verifyExpandUpdated(e.id);
  });
});

bthread("Expand delete verification", function () {
  const e = waitForAnyExpandDeleted();
  block(matchAddExpand(e.id, ANY), function () {
    verifyExpandDoesNotExist(e.id);
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

bthread("Expression create verification", function () {
  const e = waitForAnyExpressionAdded();
  block(matchDeleteExpression(e.id, ANY), function () {
    verifyExpressionExists(e.id);
  });
});

bthread("Expression update verification", function () {
  const e = waitForAnyExpressionUpdated();
  block(matchDeleteExpression(e.id, ANY), function () {
    verifyExpressionUpdated(e.id);
  });
});

bthread("Expression delete verification", function () {
  const e = waitForAnyExpressionDeleted();
  block(matchAddExpression(e.id, ANY), function () {
    verifyExpressionDoesNotExist(e.id);
  });
});

bthread("Failed create verification", function () {
  const e = waitForAnyFailedAdded();
  block(matchDeleteFailed(e.id, ANY), function () {
    verifyFailedExists(e.id);
  });
});

bthread("Failed update verification", function () {
  const e = waitForAnyFailedUpdated();
  block(matchDeleteFailed(e.id, ANY), function () {
    verifyFailedUpdated(e.id);
  });
});

bthread("Failed delete verification", function () {
  const e = waitForAnyFailedDeleted();
  block(matchAddFailed(e.id, ANY), function () {
    verifyFailedDoesNotExist(e.id);
  });
});

bthread("Favourite create verification", function () {
  const e = waitForAnyFavouriteAdded();
  block(matchDeleteFavourite(e.id, ANY), function () {
    verifyFavouriteExists(e.id);
  });
});

bthread("Favourite update verification", function () {
  const e = waitForAnyFavouriteUpdated();
  block(matchDeleteFavourite(e.id, ANY), function () {
    verifyFavouriteUpdated(e.id);
  });
});

bthread("Favourite delete verification", function () {
  const e = waitForAnyFavouriteDeleted();
  block(matchAddFavourite(e.id, ANY), function () {
    verifyFavouriteDoesNotExist(e.id);
  });
});

bthread("Feature create verification", function () {
  const e = waitForAnyFeatureAdded();
  block(matchDeleteFeature(e.id, ANY), function () {
    verifyFeatureExists(e.id);
  });
});

bthread("Feature update verification", function () {
  const e = waitForAnyFeatureUpdated();
  block(matchDeleteFeature(e.id, ANY), function () {
    verifyFeatureUpdated(e.id);
  });
});

bthread("Feature delete verification", function () {
  const e = waitForAnyFeatureDeleted();
  block(matchAddFeature(e.id, ANY), function () {
    verifyFeatureDoesNotExist(e.id);
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

bthread("Fieldconfiguration create verification", function () {
  const e = waitForAnyFieldconfigurationAdded();
  block(matchDeleteFieldconfiguration(e.id, ANY), function () {
    verifyFieldconfigurationExists(e.id);
  });
});

bthread("Fieldconfiguration update verification", function () {
  const e = waitForAnyFieldconfigurationUpdated();
  block(matchDeleteFieldconfiguration(e.id, ANY), function () {
    verifyFieldconfigurationUpdated(e.id);
  });
});

bthread("Fieldconfiguration delete verification", function () {
  const e = waitForAnyFieldconfigurationDeleted();
  block(matchAddFieldconfiguration(e.id, ANY), function () {
    verifyFieldconfigurationDoesNotExist(e.id);
  });
});

bthread("Fieldconfigurationscheme create verification", function () {
  const e = waitForAnyFieldconfigurationschemeAdded();
  block(matchDeleteFieldconfigurationscheme(e.id, ANY), function () {
    verifyFieldconfigurationschemeExists(e.id);
  });
});

bthread("Fieldconfigurationscheme update verification", function () {
  const e = waitForAnyFieldconfigurationschemeUpdated();
  block(matchDeleteFieldconfigurationscheme(e.id, ANY), function () {
    verifyFieldconfigurationschemeUpdated(e.id);
  });
});

bthread("Fieldconfigurationscheme delete verification", function () {
  const e = waitForAnyFieldconfigurationschemeDeleted();
  block(matchAddFieldconfigurationscheme(e.id, ANY), function () {
    verifyFieldconfigurationschemeDoesNotExist(e.id);
  });
});

bthread("Filter create verification", function () {
  const e = waitForAnyFilterAdded();
  block(matchDeleteFilter(e.id, ANY), function () {
    verifyFilterExists(e.id);
  });
});

bthread("Filter update verification", function () {
  const e = waitForAnyFilterUpdated();
  block(matchDeleteFilter(e.id, ANY), function () {
    verifyFilterUpdated(e.id);
  });
});

bthread("Filter delete verification", function () {
  const e = waitForAnyFilterDeleted();
  block(matchAddFilter(e.id, ANY), function () {
    verifyFilterDoesNotExist(e.id);
  });
});

bthread("Forge create verification", function () {
  const e = waitForAnyForgeAdded();
  block(matchDeleteForge(e.id, ANY), function () {
    verifyForgeExists(e.id);
  });
});

bthread("Forge update verification", function () {
  const e = waitForAnyForgeUpdated();
  block(matchDeleteForge(e.id, ANY), function () {
    verifyForgeUpdated(e.id);
  });
});

bthread("Forge delete verification", function () {
  const e = waitForAnyForgeDeleted();
  block(matchAddForge(e.id, ANY), function () {
    verifyForgeDoesNotExist(e.id);
  });
});

bthread("Function create verification", function () {
  const e = waitForAnyFunctionAdded();
  block(matchDeleteFunction(e.id, ANY), function () {
    verifyFunctionExists(e.id);
  });
});

bthread("Function update verification", function () {
  const e = waitForAnyFunctionUpdated();
  block(matchDeleteFunction(e.id, ANY), function () {
    verifyFunctionUpdated(e.id);
  });
});

bthread("Function delete verification", function () {
  const e = waitForAnyFunctionDeleted();
  block(matchAddFunction(e.id, ANY), function () {
    verifyFunctionDoesNotExist(e.id);
  });
});

bthread("Gadget create verification", function () {
  const e = waitForAnyGadgetAdded();
  block(matchDeleteGadget(e.id, ANY), function () {
    verifyGadgetExists(e.id);
  });
});

bthread("Gadget update verification", function () {
  const e = waitForAnyGadgetUpdated();
  block(matchDeleteGadget(e.id, ANY), function () {
    verifyGadgetUpdated(e.id);
  });
});

bthread("Gadget delete verification", function () {
  const e = waitForAnyGadgetDeleted();
  block(matchAddGadget(e.id, ANY), function () {
    verifyGadgetDoesNotExist(e.id);
  });
});

bthread("Group create verification", function () {
  const e = waitForAnyGroupAdded();
  block(matchDeleteGroup(e.id, ANY), function () {
    verifyGroupExists(e.id);
  });
});

bthread("Group update verification", function () {
  const e = waitForAnyGroupUpdated();
  block(matchDeleteGroup(e.id, ANY), function () {
    verifyGroupUpdated(e.id);
  });
});

bthread("Group delete verification", function () {
  const e = waitForAnyGroupDeleted();
  block(matchAddGroup(e.id, ANY), function () {
    verifyGroupDoesNotExist(e.id);
  });
});

bthread("Groupuserpicker create verification", function () {
  const e = waitForAnyGroupuserpickerAdded();
  block(matchDeleteGroupuserpicker(e.id, ANY), function () {
    verifyGroupuserpickerExists(e.id);
  });
});

bthread("Groupuserpicker update verification", function () {
  const e = waitForAnyGroupuserpickerUpdated();
  block(matchDeleteGroupuserpicker(e.id, ANY), function () {
    verifyGroupuserpickerUpdated(e.id);
  });
});

bthread("Groupuserpicker delete verification", function () {
  const e = waitForAnyGroupuserpickerDeleted();
  block(matchAddGroupuserpicker(e.id, ANY), function () {
    verifyGroupuserpickerDoesNotExist(e.id);
  });
});

bthread("Hierarchy create verification", function () {
  const e = waitForAnyHierarchyAdded();
  block(matchDeleteHierarchy(e.id, ANY), function () {
    verifyHierarchyExists(e.id);
  });
});

bthread("Hierarchy update verification", function () {
  const e = waitForAnyHierarchyUpdated();
  block(matchDeleteHierarchy(e.id, ANY), function () {
    verifyHierarchyUpdated(e.id);
  });
});

bthread("Hierarchy delete verification", function () {
  const e = waitForAnyHierarchyDeleted();
  block(matchAddHierarchy(e.id, ANY), function () {
    verifyHierarchyDoesNotExist(e.id);
  });
});

bthread("Human create verification", function () {
  const e = waitForAnyHumanAdded();
  block(matchDeleteHuman(e.id, ANY), function () {
    verifyHumanExists(e.id);
  });
});

bthread("Human update verification", function () {
  const e = waitForAnyHumanUpdated();
  block(matchDeleteHuman(e.id, ANY), function () {
    verifyHumanUpdated(e.id);
  });
});

bthread("Human delete verification", function () {
  const e = waitForAnyHumanDeleted();
  block(matchAddHuman(e.id, ANY), function () {
    verifyHumanDoesNotExist(e.id);
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

bthread("Issuelink create verification", function () {
  const e = waitForAnyIssuelinkAdded();
  block(matchDeleteIssuelink(e.id, ANY), function () {
    verifyIssuelinkExists(e.id);
  });
});

bthread("Issuelink update verification", function () {
  const e = waitForAnyIssuelinkUpdated();
  block(matchDeleteIssuelink(e.id, ANY), function () {
    verifyIssuelinkUpdated(e.id);
  });
});

bthread("Issuelink delete verification", function () {
  const e = waitForAnyIssuelinkDeleted();
  block(matchAddIssuelink(e.id, ANY), function () {
    verifyIssuelinkDoesNotExist(e.id);
  });
});

bthread("Issuelinktype create verification", function () {
  const e = waitForAnyIssuelinktypeAdded();
  block(matchDeleteIssuelinktype(e.id, ANY), function () {
    verifyIssuelinktypeExists(e.id);
  });
});

bthread("Issuelinktype update verification", function () {
  const e = waitForAnyIssuelinktypeUpdated();
  block(matchDeleteIssuelinktype(e.id, ANY), function () {
    verifyIssuelinktypeUpdated(e.id);
  });
});

bthread("Issuelinktype delete verification", function () {
  const e = waitForAnyIssuelinktypeDeleted();
  block(matchAddIssuelinktype(e.id, ANY), function () {
    verifyIssuelinktypeDoesNotExist(e.id);
  });
});

bthread("Issuesecuritylevelscheme create verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeAdded();
  block(matchDeleteIssuesecuritylevelscheme(e.id, ANY), function () {
    verifyIssuesecuritylevelschemeExists(e.id);
  });
});

bthread("Issuesecuritylevelscheme update verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeUpdated();
  block(matchDeleteIssuesecuritylevelscheme(e.id, ANY), function () {
    verifyIssuesecuritylevelschemeUpdated(e.id);
  });
});

bthread("Issuesecuritylevelscheme delete verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeDeleted();
  block(matchAddIssuesecuritylevelscheme(e.id, ANY), function () {
    verifyIssuesecuritylevelschemeDoesNotExist(e.id);
  });
});

bthread("Issuesecurityscheme create verification", function () {
  const e = waitForAnyIssuesecurityschemeAdded();
  block(matchDeleteIssuesecurityscheme(e.id, ANY), function () {
    verifyIssuesecurityschemeExists(e.id);
  });
});

bthread("Issuesecurityscheme update verification", function () {
  const e = waitForAnyIssuesecurityschemeUpdated();
  block(matchDeleteIssuesecurityscheme(e.id, ANY), function () {
    verifyIssuesecurityschemeUpdated(e.id);
  });
});

bthread("Issuesecurityscheme delete verification", function () {
  const e = waitForAnyIssuesecurityschemeDeleted();
  block(matchAddIssuesecurityscheme(e.id, ANY), function () {
    verifyIssuesecurityschemeDoesNotExist(e.id);
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

bthread("Issuetypemapping create verification", function () {
  const e = waitForAnyIssuetypemappingAdded();
  block(matchDeleteIssuetypemapping(e.id, ANY), function () {
    verifyIssuetypemappingExists(e.id);
  });
});

bthread("Issuetypemapping update verification", function () {
  const e = waitForAnyIssuetypemappingUpdated();
  block(matchDeleteIssuetypemapping(e.id, ANY), function () {
    verifyIssuetypemappingUpdated(e.id);
  });
});

bthread("Issuetypemapping delete verification", function () {
  const e = waitForAnyIssuetypemappingDeleted();
  block(matchAddIssuetypemapping(e.id, ANY), function () {
    verifyIssuetypemappingDoesNotExist(e.id);
  });
});

bthread("Issuetypescheme create verification", function () {
  const e = waitForAnyIssuetypeschemeAdded();
  block(matchDeleteIssuetypescheme(e.id, ANY), function () {
    verifyIssuetypeschemeExists(e.id);
  });
});

bthread("Issuetypescheme update verification", function () {
  const e = waitForAnyIssuetypeschemeUpdated();
  block(matchDeleteIssuetypescheme(e.id, ANY), function () {
    verifyIssuetypeschemeUpdated(e.id);
  });
});

bthread("Issuetypescheme delete verification", function () {
  const e = waitForAnyIssuetypeschemeDeleted();
  block(matchAddIssuetypescheme(e.id, ANY), function () {
    verifyIssuetypeschemeDoesNotExist(e.id);
  });
});

bthread("Issuetypescreenscheme create verification", function () {
  const e = waitForAnyIssuetypescreenschemeAdded();
  block(matchDeleteIssuetypescreenscheme(e.id, ANY), function () {
    verifyIssuetypescreenschemeExists(e.id);
  });
});

bthread("Issuetypescreenscheme update verification", function () {
  const e = waitForAnyIssuetypescreenschemeUpdated();
  block(matchDeleteIssuetypescreenscheme(e.id, ANY), function () {
    verifyIssuetypescreenschemeUpdated(e.id);
  });
});

bthread("Issuetypescreenscheme delete verification", function () {
  const e = waitForAnyIssuetypescreenschemeDeleted();
  block(matchAddIssuetypescreenscheme(e.id, ANY), function () {
    verifyIssuetypescreenschemeDoesNotExist(e.id);
  });
});

bthread("Issuetypeusage create verification", function () {
  const e = waitForAnyIssuetypeusageAdded();
  block(matchDeleteIssuetypeusage(e.id, ANY), function () {
    verifyIssuetypeusageExists(e.id);
  });
});

bthread("Issuetypeusage update verification", function () {
  const e = waitForAnyIssuetypeusageUpdated();
  block(matchDeleteIssuetypeusage(e.id, ANY), function () {
    verifyIssuetypeusageUpdated(e.id);
  });
});

bthread("Issuetypeusage delete verification", function () {
  const e = waitForAnyIssuetypeusageDeleted();
  block(matchAddIssuetypeusage(e.id, ANY), function () {
    verifyIssuetypeusageDoesNotExist(e.id);
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

bthread("Jql create verification", function () {
  const e = waitForAnyJqlAdded();
  block(matchDeleteJql(e.id, ANY), function () {
    verifyJqlExists(e.id);
  });
});

bthread("Jql update verification", function () {
  const e = waitForAnyJqlUpdated();
  block(matchDeleteJql(e.id, ANY), function () {
    verifyJqlUpdated(e.id);
  });
});

bthread("Jql delete verification", function () {
  const e = waitForAnyJqlDeleted();
  block(matchAddJql(e.id, ANY), function () {
    verifyJqlDoesNotExist(e.id);
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

bthread("Level create verification", function () {
  const e = waitForAnyLevelAdded();
  block(matchDeleteLevel(e.id, ANY), function () {
    verifyLevelExists(e.id);
  });
});

bthread("Level update verification", function () {
  const e = waitForAnyLevelUpdated();
  block(matchDeleteLevel(e.id, ANY), function () {
    verifyLevelUpdated(e.id);
  });
});

bthread("Level delete verification", function () {
  const e = waitForAnyLevelDeleted();
  block(matchAddLevel(e.id, ANY), function () {
    verifyLevelDoesNotExist(e.id);
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

bthread("List create verification", function () {
  const e = waitForAnyListAdded();
  block(matchDeleteList(e.id, ANY), function () {
    verifyListExists(e.id);
  });
});

bthread("List update verification", function () {
  const e = waitForAnyListUpdated();
  block(matchDeleteList(e.id, ANY), function () {
    verifyListUpdated(e.id);
  });
});

bthread("List delete verification", function () {
  const e = waitForAnyListDeleted();
  block(matchAddList(e.id, ANY), function () {
    verifyListDoesNotExist(e.id);
  });
});

bthread("Livetemplate create verification", function () {
  const e = waitForAnyLivetemplateAdded();
  block(matchDeleteLivetemplate(e.id, ANY), function () {
    verifyLivetemplateExists(e.id);
  });
});

bthread("Livetemplate update verification", function () {
  const e = waitForAnyLivetemplateUpdated();
  block(matchDeleteLivetemplate(e.id, ANY), function () {
    verifyLivetemplateUpdated(e.id);
  });
});

bthread("Livetemplate delete verification", function () {
  const e = waitForAnyLivetemplateDeleted();
  block(matchAddLivetemplate(e.id, ANY), function () {
    verifyLivetemplateDoesNotExist(e.id);
  });
});

bthread("Locale create verification", function () {
  const e = waitForAnyLocaleAdded();
  block(matchDeleteLocale(e.id, ANY), function () {
    verifyLocaleExists(e.id);
  });
});

bthread("Locale update verification", function () {
  const e = waitForAnyLocaleUpdated();
  block(matchDeleteLocale(e.id, ANY), function () {
    verifyLocaleUpdated(e.id);
  });
});

bthread("Locale delete verification", function () {
  const e = waitForAnyLocaleDeleted();
  block(matchAddLocale(e.id, ANY), function () {
    verifyLocaleDoesNotExist(e.id);
  });
});

bthread("Mapping create verification", function () {
  const e = waitForAnyMappingAdded();
  block(matchDeleteMapping(e.id, ANY), function () {
    verifyMappingExists(e.id);
  });
});

bthread("Mapping update verification", function () {
  const e = waitForAnyMappingUpdated();
  block(matchDeleteMapping(e.id, ANY), function () {
    verifyMappingUpdated(e.id);
  });
});

bthread("Mapping delete verification", function () {
  const e = waitForAnyMappingDeleted();
  block(matchAddMapping(e.id, ANY), function () {
    verifyMappingDoesNotExist(e.id);
  });
});

bthread("Match create verification", function () {
  const e = waitForAnyMatchAdded();
  block(matchDeleteMatch(e.id, ANY), function () {
    verifyMatchExists(e.id);
  });
});

bthread("Match update verification", function () {
  const e = waitForAnyMatchUpdated();
  block(matchDeleteMatch(e.id, ANY), function () {
    verifyMatchUpdated(e.id);
  });
});

bthread("Match delete verification", function () {
  const e = waitForAnyMatchDeleted();
  block(matchAddMatch(e.id, ANY), function () {
    verifyMatchDoesNotExist(e.id);
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

bthread("Mergeto create verification", function () {
  const e = waitForAnyMergetoAdded();
  block(matchDeleteMergeto(e.id, ANY), function () {
    verifyMergetoExists(e.id);
  });
});

bthread("Mergeto update verification", function () {
  const e = waitForAnyMergetoUpdated();
  block(matchDeleteMergeto(e.id, ANY), function () {
    verifyMergetoUpdated(e.id);
  });
});

bthread("Mergeto delete verification", function () {
  const e = waitForAnyMergetoDeleted();
  block(matchAddMergeto(e.id, ANY), function () {
    verifyMergetoDoesNotExist(e.id);
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

bthread("Module create verification", function () {
  const e = waitForAnyModuleAdded();
  block(matchDeleteModule(e.id, ANY), function () {
    verifyModuleExists(e.id);
  });
});

bthread("Module update verification", function () {
  const e = waitForAnyModuleUpdated();
  block(matchDeleteModule(e.id, ANY), function () {
    verifyModuleUpdated(e.id);
  });
});

bthread("Module delete verification", function () {
  const e = waitForAnyModuleDeleted();
  block(matchAddModule(e.id, ANY), function () {
    verifyModuleDoesNotExist(e.id);
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

bthread("Multi create verification", function () {
  const e = waitForAnyMultiAdded();
  block(matchDeleteMulti(e.id, ANY), function () {
    verifyMultiExists(e.id);
  });
});

bthread("Multi update verification", function () {
  const e = waitForAnyMultiUpdated();
  block(matchDeleteMulti(e.id, ANY), function () {
    verifyMultiUpdated(e.id);
  });
});

bthread("Multi delete verification", function () {
  const e = waitForAnyMultiDeleted();
  block(matchAddMulti(e.id, ANY), function () {
    verifyMultiDoesNotExist(e.id);
  });
});

bthread("Multiprojectsearch create verification", function () {
  const e = waitForAnyMultiprojectsearchAdded();
  block(matchDeleteMultiprojectsearch(e.id, ANY), function () {
    verifyMultiprojectsearchExists(e.id);
  });
});

bthread("Multiprojectsearch update verification", function () {
  const e = waitForAnyMultiprojectsearchUpdated();
  block(matchDeleteMultiprojectsearch(e.id, ANY), function () {
    verifyMultiprojectsearchUpdated(e.id);
  });
});

bthread("Multiprojectsearch delete verification", function () {
  const e = waitForAnyMultiprojectsearchDeleted();
  block(matchAddMultiprojectsearch(e.id, ANY), function () {
    verifyMultiprojectsearchDoesNotExist(e.id);
  });
});

bthread("My create verification", function () {
  const e = waitForAnyMyAdded();
  block(matchDeleteMy(e.id, ANY), function () {
    verifyMyExists(e.id);
  });
});

bthread("My update verification", function () {
  const e = waitForAnyMyUpdated();
  block(matchDeleteMy(e.id, ANY), function () {
    verifyMyUpdated(e.id);
  });
});

bthread("My delete verification", function () {
  const e = waitForAnyMyDeleted();
  block(matchAddMy(e.id, ANY), function () {
    verifyMyDoesNotExist(e.id);
  });
});

bthread("Mypermission create verification", function () {
  const e = waitForAnyMypermissionAdded();
  block(matchDeleteMypermission(e.id, ANY), function () {
    verifyMypermissionExists(e.id);
  });
});

bthread("Mypermission update verification", function () {
  const e = waitForAnyMypermissionUpdated();
  block(matchDeleteMypermission(e.id, ANY), function () {
    verifyMypermissionUpdated(e.id);
  });
});

bthread("Mypermission delete verification", function () {
  const e = waitForAnyMypermissionDeleted();
  block(matchAddMypermission(e.id, ANY), function () {
    verifyMypermissionDoesNotExist(e.id);
  });
});

bthread("Mypreference create verification", function () {
  const e = waitForAnyMypreferenceAdded();
  block(matchDeleteMypreference(e.id, ANY), function () {
    verifyMypreferenceExists(e.id);
  });
});

bthread("Mypreference update verification", function () {
  const e = waitForAnyMypreferenceUpdated();
  block(matchDeleteMypreference(e.id, ANY), function () {
    verifyMypreferenceUpdated(e.id);
  });
});

bthread("Mypreference delete verification", function () {
  const e = waitForAnyMypreferenceDeleted();
  block(matchAddMypreference(e.id, ANY), function () {
    verifyMypreferenceDoesNotExist(e.id);
  });
});

bthread("Myself create verification", function () {
  const e = waitForAnyMyselfAdded();
  block(matchDeleteMyself(e.id, ANY), function () {
    verifyMyselfExists(e.id);
  });
});

bthread("Myself update verification", function () {
  const e = waitForAnyMyselfUpdated();
  block(matchDeleteMyself(e.id, ANY), function () {
    verifyMyselfUpdated(e.id);
  });
});

bthread("Myself delete verification", function () {
  const e = waitForAnyMyselfDeleted();
  block(matchAddMyself(e.id, ANY), function () {
    verifyMyselfDoesNotExist(e.id);
  });
});

bthread("Nav4optproperty create verification", function () {
  const e = waitForAnyNav4optpropertyAdded();
  block(matchDeleteNav4optproperty(e.id, ANY), function () {
    verifyNav4optpropertyExists(e.id);
  });
});

bthread("Nav4optproperty update verification", function () {
  const e = waitForAnyNav4optpropertyUpdated();
  block(matchDeleteNav4optproperty(e.id, ANY), function () {
    verifyNav4optpropertyUpdated(e.id);
  });
});

bthread("Nav4optproperty delete verification", function () {
  const e = waitForAnyNav4optpropertyDeleted();
  block(matchAddNav4optproperty(e.id, ANY), function () {
    verifyNav4optpropertyDoesNotExist(e.id);
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

bthread("Notificationscheme create verification", function () {
  const e = waitForAnyNotificationschemeAdded();
  block(matchDeleteNotificationscheme(e.id, ANY), function () {
    verifyNotificationschemeExists(e.id);
  });
});

bthread("Notificationscheme update verification", function () {
  const e = waitForAnyNotificationschemeUpdated();
  block(matchDeleteNotificationscheme(e.id, ANY), function () {
    verifyNotificationschemeUpdated(e.id);
  });
});

bthread("Notificationscheme delete verification", function () {
  const e = waitForAnyNotificationschemeDeleted();
  block(matchAddNotificationscheme(e.id, ANY), function () {
    verifyNotificationschemeDoesNotExist(e.id);
  });
});

bthread("Notify create verification", function () {
  const e = waitForAnyNotifyAdded();
  block(matchDeleteNotify(e.id, ANY), function () {
    verifyNotifyExists(e.id);
  });
});

bthread("Notify update verification", function () {
  const e = waitForAnyNotifyUpdated();
  block(matchDeleteNotify(e.id, ANY), function () {
    verifyNotifyUpdated(e.id);
  });
});

bthread("Notify delete verification", function () {
  const e = waitForAnyNotifyDeleted();
  block(matchAddNotify(e.id, ANY), function () {
    verifyNotifyDoesNotExist(e.id);
  });
});

bthread("Option create verification", function () {
  const e = waitForAnyOptionAdded();
  block(matchDeleteOption(e.id, ANY), function () {
    verifyOptionExists(e.id);
  });
});

bthread("Option update verification", function () {
  const e = waitForAnyOptionUpdated();
  block(matchDeleteOption(e.id, ANY), function () {
    verifyOptionUpdated(e.id);
  });
});

bthread("Option delete verification", function () {
  const e = waitForAnyOptionDeleted();
  block(matchAddOption(e.id, ANY), function () {
    verifyOptionDoesNotExist(e.id);
  });
});

bthread("Owner create verification", function () {
  const e = waitForAnyOwnerAdded();
  block(matchDeleteOwner(e.id, ANY), function () {
    verifyOwnerExists(e.id);
  });
});

bthread("Owner update verification", function () {
  const e = waitForAnyOwnerUpdated();
  block(matchDeleteOwner(e.id, ANY), function () {
    verifyOwnerUpdated(e.id);
  });
});

bthread("Owner delete verification", function () {
  const e = waitForAnyOwnerDeleted();
  block(matchAddOwner(e.id, ANY), function () {
    verifyOwnerDoesNotExist(e.id);
  });
});

bthread("Parse create verification", function () {
  const e = waitForAnyParseAdded();
  block(matchDeleteParse(e.id, ANY), function () {
    verifyParseExists(e.id);
  });
});

bthread("Parse update verification", function () {
  const e = waitForAnyParseUpdated();
  block(matchDeleteParse(e.id, ANY), function () {
    verifyParseUpdated(e.id);
  });
});

bthread("Parse delete verification", function () {
  const e = waitForAnyParseDeleted();
  block(matchAddParse(e.id, ANY), function () {
    verifyParseDoesNotExist(e.id);
  });
});

bthread("Pdcleaner create verification", function () {
  const e = waitForAnyPdcleanerAdded();
  block(matchDeletePdcleaner(e.id, ANY), function () {
    verifyPdcleanerExists(e.id);
  });
});

bthread("Pdcleaner update verification", function () {
  const e = waitForAnyPdcleanerUpdated();
  block(matchDeletePdcleaner(e.id, ANY), function () {
    verifyPdcleanerUpdated(e.id);
  });
});

bthread("Pdcleaner delete verification", function () {
  const e = waitForAnyPdcleanerDeleted();
  block(matchAddPdcleaner(e.id, ANY), function () {
    verifyPdcleanerDoesNotExist(e.id);
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

bthread("Permissionscheme create verification", function () {
  const e = waitForAnyPermissionschemeAdded();
  block(matchDeletePermissionscheme(e.id, ANY), function () {
    verifyPermissionschemeExists(e.id);
  });
});

bthread("Permissionscheme update verification", function () {
  const e = waitForAnyPermissionschemeUpdated();
  block(matchDeletePermissionscheme(e.id, ANY), function () {
    verifyPermissionschemeUpdated(e.id);
  });
});

bthread("Permissionscheme delete verification", function () {
  const e = waitForAnyPermissionschemeDeleted();
  block(matchAddPermissionscheme(e.id, ANY), function () {
    verifyPermissionschemeDoesNotExist(e.id);
  });
});

bthread("Picker create verification", function () {
  const e = waitForAnyPickerAdded();
  block(matchDeletePicker(e.id, ANY), function () {
    verifyPickerExists(e.id);
  });
});

bthread("Picker update verification", function () {
  const e = waitForAnyPickerUpdated();
  block(matchDeletePicker(e.id, ANY), function () {
    verifyPickerUpdated(e.id);
  });
});

bthread("Picker delete verification", function () {
  const e = waitForAnyPickerDeleted();
  block(matchAddPicker(e.id, ANY), function () {
    verifyPickerDoesNotExist(e.id);
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

bthread("Planonly create verification", function () {
  const e = waitForAnyPlanonlyAdded();
  block(matchDeletePlanonly(e.id, ANY), function () {
    verifyPlanonlyExists(e.id);
  });
});

bthread("Planonly update verification", function () {
  const e = waitForAnyPlanonlyUpdated();
  block(matchDeletePlanonly(e.id, ANY), function () {
    verifyPlanonlyUpdated(e.id);
  });
});

bthread("Planonly delete verification", function () {
  const e = waitForAnyPlanonlyDeleted();
  block(matchAddPlanonly(e.id, ANY), function () {
    verifyPlanonlyDoesNotExist(e.id);
  });
});

bthread("Preview create verification", function () {
  const e = waitForAnyPreviewAdded();
  block(matchDeletePreview(e.id, ANY), function () {
    verifyPreviewExists(e.id);
  });
});

bthread("Preview update verification", function () {
  const e = waitForAnyPreviewUpdated();
  block(matchDeletePreview(e.id, ANY), function () {
    verifyPreviewUpdated(e.id);
  });
});

bthread("Preview delete verification", function () {
  const e = waitForAnyPreviewDeleted();
  block(matchAddPreview(e.id, ANY), function () {
    verifyPreviewDoesNotExist(e.id);
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

bthread("Priorityscheme create verification", function () {
  const e = waitForAnyPriorityschemeAdded();
  block(matchDeletePriorityscheme(e.id, ANY), function () {
    verifyPriorityschemeExists(e.id);
  });
});

bthread("Priorityscheme update verification", function () {
  const e = waitForAnyPriorityschemeUpdated();
  block(matchDeletePriorityscheme(e.id, ANY), function () {
    verifyPriorityschemeUpdated(e.id);
  });
});

bthread("Priorityscheme delete verification", function () {
  const e = waitForAnyPriorityschemeDeleted();
  block(matchAddPriorityscheme(e.id, ANY), function () {
    verifyPriorityschemeDoesNotExist(e.id);
  });
});

bthread("Product create verification", function () {
  const e = waitForAnyProductAdded();
  block(matchDeleteProduct(e.id, ANY), function () {
    verifyProductExists(e.id);
  });
});

bthread("Product update verification", function () {
  const e = waitForAnyProductUpdated();
  block(matchDeleteProduct(e.id, ANY), function () {
    verifyProductUpdated(e.id);
  });
});

bthread("Product delete verification", function () {
  const e = waitForAnyProductDeleted();
  block(matchAddProduct(e.id, ANY), function () {
    verifyProductDoesNotExist(e.id);
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

bthread("Projectcategory create verification", function () {
  const e = waitForAnyProjectcategoryAdded();
  block(matchDeleteProjectcategory(e.id, ANY), function () {
    verifyProjectcategoryExists(e.id);
  });
});

bthread("Projectcategory update verification", function () {
  const e = waitForAnyProjectcategoryUpdated();
  block(matchDeleteProjectcategory(e.id, ANY), function () {
    verifyProjectcategoryUpdated(e.id);
  });
});

bthread("Projectcategory delete verification", function () {
  const e = waitForAnyProjectcategoryDeleted();
  block(matchAddProjectcategory(e.id, ANY), function () {
    verifyProjectcategoryDoesNotExist(e.id);
  });
});

bthread("Projectmapping create verification", function () {
  const e = waitForAnyProjectmappingAdded();
  block(matchDeleteProjectmapping(e.id, ANY), function () {
    verifyProjectmappingExists(e.id);
  });
});

bthread("Projectmapping update verification", function () {
  const e = waitForAnyProjectmappingUpdated();
  block(matchDeleteProjectmapping(e.id, ANY), function () {
    verifyProjectmappingUpdated(e.id);
  });
});

bthread("Projectmapping delete verification", function () {
  const e = waitForAnyProjectmappingDeleted();
  block(matchAddProjectmapping(e.id, ANY), function () {
    verifyProjectmappingDoesNotExist(e.id);
  });
});

bthread("Projecttemplate create verification", function () {
  const e = waitForAnyProjecttemplateAdded();
  block(matchDeleteProjecttemplate(e.id, ANY), function () {
    verifyProjecttemplateExists(e.id);
  });
});

bthread("Projecttemplate update verification", function () {
  const e = waitForAnyProjecttemplateUpdated();
  block(matchDeleteProjecttemplate(e.id, ANY), function () {
    verifyProjecttemplateUpdated(e.id);
  });
});

bthread("Projecttemplate delete verification", function () {
  const e = waitForAnyProjecttemplateDeleted();
  block(matchAddProjecttemplate(e.id, ANY), function () {
    verifyProjecttemplateDoesNotExist(e.id);
  });
});

bthread("Projectusage create verification", function () {
  const e = waitForAnyProjectusageAdded();
  block(matchDeleteProjectusage(e.id, ANY), function () {
    verifyProjectusageExists(e.id);
  });
});

bthread("Projectusage update verification", function () {
  const e = waitForAnyProjectusageUpdated();
  block(matchDeleteProjectusage(e.id, ANY), function () {
    verifyProjectusageUpdated(e.id);
  });
});

bthread("Projectusage delete verification", function () {
  const e = waitForAnyProjectusageDeleted();
  block(matchAddProjectusage(e.id, ANY), function () {
    verifyProjectusageDoesNotExist(e.id);
  });
});

bthread("Projectvalidate create verification", function () {
  const e = waitForAnyProjectvalidateAdded();
  block(matchDeleteProjectvalidate(e.id, ANY), function () {
    verifyProjectvalidateExists(e.id);
  });
});

bthread("Projectvalidate update verification", function () {
  const e = waitForAnyProjectvalidateUpdated();
  block(matchDeleteProjectvalidate(e.id, ANY), function () {
    verifyProjectvalidateUpdated(e.id);
  });
});

bthread("Projectvalidate delete verification", function () {
  const e = waitForAnyProjectvalidateDeleted();
  block(matchAddProjectvalidate(e.id, ANY), function () {
    verifyProjectvalidateDoesNotExist(e.id);
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

bthread("Query create verification", function () {
  const e = waitForAnyQueryAdded();
  block(matchDeleteQuery(e.id, ANY), function () {
    verifyQueryExists(e.id);
  });
});

bthread("Query update verification", function () {
  const e = waitForAnyQueryUpdated();
  block(matchDeleteQuery(e.id, ANY), function () {
    verifyQueryUpdated(e.id);
  });
});

bthread("Query delete verification", function () {
  const e = waitForAnyQueryDeleted();
  block(matchAddQuery(e.id, ANY), function () {
    verifyQueryDoesNotExist(e.id);
  });
});

bthread("Queue create verification", function () {
  const e = waitForAnyQueueAdded();
  block(matchDeleteQueue(e.id, ANY), function () {
    verifyQueueExists(e.id);
  });
});

bthread("Queue update verification", function () {
  const e = waitForAnyQueueUpdated();
  block(matchDeleteQueue(e.id, ANY), function () {
    verifyQueueUpdated(e.id);
  });
});

bthread("Queue delete verification", function () {
  const e = waitForAnyQueueDeleted();
  block(matchAddQueue(e.id, ANY), function () {
    verifyQueueDoesNotExist(e.id);
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

bthread("Read create verification", function () {
  const e = waitForAnyReadAdded();
  block(matchDeleteRead(e.id, ANY), function () {
    verifyReadExists(e.id);
  });
});

bthread("Read update verification", function () {
  const e = waitForAnyReadUpdated();
  block(matchDeleteRead(e.id, ANY), function () {
    verifyReadUpdated(e.id);
  });
});

bthread("Read delete verification", function () {
  const e = waitForAnyReadDeleted();
  block(matchAddRead(e.id, ANY), function () {
    verifyReadDoesNotExist(e.id);
  });
});

bthread("Recent create verification", function () {
  const e = waitForAnyRecentAdded();
  block(matchDeleteRecent(e.id, ANY), function () {
    verifyRecentExists(e.id);
  });
});

bthread("Recent update verification", function () {
  const e = waitForAnyRecentUpdated();
  block(matchDeleteRecent(e.id, ANY), function () {
    verifyRecentUpdated(e.id);
  });
});

bthread("Recent delete verification", function () {
  const e = waitForAnyRecentDeleted();
  block(matchAddRecent(e.id, ANY), function () {
    verifyRecentDoesNotExist(e.id);
  });
});

bthread("Record create verification", function () {
  const e = waitForAnyRecordAdded();
  block(matchDeleteRecord(e.id, ANY), function () {
    verifyRecordExists(e.id);
  });
});

bthread("Record update verification", function () {
  const e = waitForAnyRecordUpdated();
  block(matchDeleteRecord(e.id, ANY), function () {
    verifyRecordUpdated(e.id);
  });
});

bthread("Record delete verification", function () {
  const e = waitForAnyRecordDeleted();
  block(matchAddRecord(e.id, ANY), function () {
    verifyRecordDoesNotExist(e.id);
  });
});

bthread("Redact create verification", function () {
  const e = waitForAnyRedactAdded();
  block(matchDeleteRedact(e.id, ANY), function () {
    verifyRedactExists(e.id);
  });
});

bthread("Redact update verification", function () {
  const e = waitForAnyRedactUpdated();
  block(matchDeleteRedact(e.id, ANY), function () {
    verifyRedactUpdated(e.id);
  });
});

bthread("Redact delete verification", function () {
  const e = waitForAnyRedactDeleted();
  block(matchAddRedact(e.id, ANY), function () {
    verifyRedactDoesNotExist(e.id);
  });
});

bthread("Refresh create verification", function () {
  const e = waitForAnyRefreshAdded();
  block(matchDeleteRefresh(e.id, ANY), function () {
    verifyRefreshExists(e.id);
  });
});

bthread("Refresh update verification", function () {
  const e = waitForAnyRefreshUpdated();
  block(matchDeleteRefresh(e.id, ANY), function () {
    verifyRefreshUpdated(e.id);
  });
});

bthread("Refresh delete verification", function () {
  const e = waitForAnyRefreshDeleted();
  block(matchAddRefresh(e.id, ANY), function () {
    verifyRefreshDoesNotExist(e.id);
  });
});

bthread("Relatedissuecount create verification", function () {
  const e = waitForAnyRelatedissuecountAdded();
  block(matchDeleteRelatedissuecount(e.id, ANY), function () {
    verifyRelatedissuecountExists(e.id);
  });
});

bthread("Relatedissuecount update verification", function () {
  const e = waitForAnyRelatedissuecountUpdated();
  block(matchDeleteRelatedissuecount(e.id, ANY), function () {
    verifyRelatedissuecountUpdated(e.id);
  });
});

bthread("Relatedissuecount delete verification", function () {
  const e = waitForAnyRelatedissuecountDeleted();
  block(matchAddRelatedissuecount(e.id, ANY), function () {
    verifyRelatedissuecountDoesNotExist(e.id);
  });
});

bthread("Relatedwork create verification", function () {
  const e = waitForAnyRelatedworkAdded();
  block(matchDeleteRelatedwork(e.id, ANY), function () {
    verifyRelatedworkExists(e.id);
  });
});

bthread("Relatedwork update verification", function () {
  const e = waitForAnyRelatedworkUpdated();
  block(matchDeleteRelatedwork(e.id, ANY), function () {
    verifyRelatedworkUpdated(e.id);
  });
});

bthread("Relatedwork delete verification", function () {
  const e = waitForAnyRelatedworkDeleted();
  block(matchAddRelatedwork(e.id, ANY), function () {
    verifyRelatedworkDoesNotExist(e.id);
  });
});

bthread("Remotelink create verification", function () {
  const e = waitForAnyRemotelinkAdded();
  block(matchDeleteRemotelink(e.id, ANY), function () {
    verifyRemotelinkExists(e.id);
  });
});

bthread("Remotelink update verification", function () {
  const e = waitForAnyRemotelinkUpdated();
  block(matchDeleteRemotelink(e.id, ANY), function () {
    verifyRemotelinkUpdated(e.id);
  });
});

bthread("Remotelink delete verification", function () {
  const e = waitForAnyRemotelinkDeleted();
  block(matchAddRemotelink(e.id, ANY), function () {
    verifyRemotelinkDoesNotExist(e.id);
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

bthread("Removeandswap create verification", function () {
  const e = waitForAnyRemoveandswapAdded();
  block(matchDeleteRemoveandswap(e.id, ANY), function () {
    verifyRemoveandswapExists(e.id);
  });
});

bthread("Removeandswap update verification", function () {
  const e = waitForAnyRemoveandswapUpdated();
  block(matchDeleteRemoveandswap(e.id, ANY), function () {
    verifyRemoveandswapUpdated(e.id);
  });
});

bthread("Removeandswap delete verification", function () {
  const e = waitForAnyRemoveandswapDeleted();
  block(matchAddRemoveandswap(e.id, ANY), function () {
    verifyRemoveandswapDoesNotExist(e.id);
  });
});

bthread("Removetemplate create verification", function () {
  const e = waitForAnyRemovetemplateAdded();
  block(matchDeleteRemovetemplate(e.id, ANY), function () {
    verifyRemovetemplateExists(e.id);
  });
});

bthread("Removetemplate update verification", function () {
  const e = waitForAnyRemovetemplateUpdated();
  block(matchDeleteRemovetemplate(e.id, ANY), function () {
    verifyRemovetemplateUpdated(e.id);
  });
});

bthread("Removetemplate delete verification", function () {
  const e = waitForAnyRemovetemplateDeleted();
  block(matchAddRemovetemplate(e.id, ANY), function () {
    verifyRemovetemplateDoesNotExist(e.id);
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

bthread("Resolution create verification", function () {
  const e = waitForAnyResolutionAdded();
  block(matchDeleteResolution(e.id, ANY), function () {
    verifyResolutionExists(e.id);
  });
});

bthread("Resolution update verification", function () {
  const e = waitForAnyResolutionUpdated();
  block(matchDeleteResolution(e.id, ANY), function () {
    verifyResolutionUpdated(e.id);
  });
});

bthread("Resolution delete verification", function () {
  const e = waitForAnyResolutionDeleted();
  block(matchAddResolution(e.id, ANY), function () {
    verifyResolutionDoesNotExist(e.id);
  });
});

bthread("Rest create verification", function () {
  const e = waitForAnyRestAdded();
  block(matchDeleteRest(e.id, ANY), function () {
    verifyRestExists(e.id);
  });
});

bthread("Rest update verification", function () {
  const e = waitForAnyRestUpdated();
  block(matchDeleteRest(e.id, ANY), function () {
    verifyRestUpdated(e.id);
  });
});

bthread("Rest delete verification", function () {
  const e = waitForAnyRestDeleted();
  block(matchAddRest(e.id, ANY), function () {
    verifyRestDoesNotExist(e.id);
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

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  block(matchDeleteRole(e.id, ANY), function () {
    verifyRoleExists(e.id);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  block(matchDeleteRole(e.id, ANY), function () {
    verifyRoleUpdated(e.id);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  block(matchAddRole(e.id, ANY), function () {
    verifyRoleDoesNotExist(e.id);
  });
});

bthread("Roledetail create verification", function () {
  const e = waitForAnyRoledetailAdded();
  block(matchDeleteRoledetail(e.id, ANY), function () {
    verifyRoledetailExists(e.id);
  });
});

bthread("Roledetail update verification", function () {
  const e = waitForAnyRoledetailUpdated();
  block(matchDeleteRoledetail(e.id, ANY), function () {
    verifyRoledetailUpdated(e.id);
  });
});

bthread("Roledetail delete verification", function () {
  const e = waitForAnyRoledetailDeleted();
  block(matchAddRoledetail(e.id, ANY), function () {
    verifyRoledetailDoesNotExist(e.id);
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

bthread("Sanitize create verification", function () {
  const e = waitForAnySanitizeAdded();
  block(matchDeleteSanitize(e.id, ANY), function () {
    verifySanitizeExists(e.id);
  });
});

bthread("Sanitize update verification", function () {
  const e = waitForAnySanitizeUpdated();
  block(matchDeleteSanitize(e.id, ANY), function () {
    verifySanitizeUpdated(e.id);
  });
});

bthread("Sanitize delete verification", function () {
  const e = waitForAnySanitizeDeleted();
  block(matchAddSanitize(e.id, ANY), function () {
    verifySanitizeDoesNotExist(e.id);
  });
});

bthread("Savetemplate create verification", function () {
  const e = waitForAnySavetemplateAdded();
  block(matchDeleteSavetemplate(e.id, ANY), function () {
    verifySavetemplateExists(e.id);
  });
});

bthread("Savetemplate update verification", function () {
  const e = waitForAnySavetemplateUpdated();
  block(matchDeleteSavetemplate(e.id, ANY), function () {
    verifySavetemplateUpdated(e.id);
  });
});

bthread("Savetemplate delete verification", function () {
  const e = waitForAnySavetemplateDeleted();
  block(matchAddSavetemplate(e.id, ANY), function () {
    verifySavetemplateDoesNotExist(e.id);
  });
});

bthread("Screen create verification", function () {
  const e = waitForAnyScreenAdded();
  block(matchDeleteScreen(e.id, ANY), function () {
    verifyScreenExists(e.id);
  });
});

bthread("Screen update verification", function () {
  const e = waitForAnyScreenUpdated();
  block(matchDeleteScreen(e.id, ANY), function () {
    verifyScreenUpdated(e.id);
  });
});

bthread("Screen delete verification", function () {
  const e = waitForAnyScreenDeleted();
  block(matchAddScreen(e.id, ANY), function () {
    verifyScreenDoesNotExist(e.id);
  });
});

bthread("Screenscheme create verification", function () {
  const e = waitForAnyScreenschemeAdded();
  block(matchDeleteScreenscheme(e.id, ANY), function () {
    verifyScreenschemeExists(e.id);
  });
});

bthread("Screenscheme update verification", function () {
  const e = waitForAnyScreenschemeUpdated();
  block(matchDeleteScreenscheme(e.id, ANY), function () {
    verifyScreenschemeUpdated(e.id);
  });
});

bthread("Screenscheme delete verification", function () {
  const e = waitForAnyScreenschemeDeleted();
  block(matchAddScreenscheme(e.id, ANY), function () {
    verifyScreenschemeDoesNotExist(e.id);
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

bthread("Securitylevel create verification", function () {
  const e = waitForAnySecuritylevelAdded();
  block(matchDeleteSecuritylevel(e.id, ANY), function () {
    verifySecuritylevelExists(e.id);
  });
});

bthread("Securitylevel update verification", function () {
  const e = waitForAnySecuritylevelUpdated();
  block(matchDeleteSecuritylevel(e.id, ANY), function () {
    verifySecuritylevelUpdated(e.id);
  });
});

bthread("Securitylevel delete verification", function () {
  const e = waitForAnySecuritylevelDeleted();
  block(matchAddSecuritylevel(e.id, ANY), function () {
    verifySecuritylevelDoesNotExist(e.id);
  });
});

bthread("Serverinfo create verification", function () {
  const e = waitForAnyServerinfoAdded();
  block(matchDeleteServerinfo(e.id, ANY), function () {
    verifyServerinfoExists(e.id);
  });
});

bthread("Serverinfo update verification", function () {
  const e = waitForAnyServerinfoUpdated();
  block(matchDeleteServerinfo(e.id, ANY), function () {
    verifyServerinfoUpdated(e.id);
  });
});

bthread("Serverinfo delete verification", function () {
  const e = waitForAnyServerinfoDeleted();
  block(matchAddServerinfo(e.id, ANY), function () {
    verifyServerinfoDoesNotExist(e.id);
  });
});

bthread("Serviceregistry create verification", function () {
  const e = waitForAnyServiceregistryAdded();
  block(matchDeleteServiceregistry(e.id, ANY), function () {
    verifyServiceregistryExists(e.id);
  });
});

bthread("Serviceregistry update verification", function () {
  const e = waitForAnyServiceregistryUpdated();
  block(matchDeleteServiceregistry(e.id, ANY), function () {
    verifyServiceregistryUpdated(e.id);
  });
});

bthread("Serviceregistry delete verification", function () {
  const e = waitForAnyServiceregistryDeleted();
  block(matchAddServiceregistry(e.id, ANY), function () {
    verifyServiceregistryDoesNotExist(e.id);
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

bthread("Statuscategory create verification", function () {
  const e = waitForAnyStatuscategoryAdded();
  block(matchDeleteStatuscategory(e.id, ANY), function () {
    verifyStatuscategoryExists(e.id);
  });
});

bthread("Statuscategory update verification", function () {
  const e = waitForAnyStatuscategoryUpdated();
  block(matchDeleteStatuscategory(e.id, ANY), function () {
    verifyStatuscategoryUpdated(e.id);
  });
});

bthread("Statuscategory delete verification", function () {
  const e = waitForAnyStatuscategoryDeleted();
  block(matchAddStatuscategory(e.id, ANY), function () {
    verifyStatuscategoryDoesNotExist(e.id);
  });
});

bthread("Suggestion create verification", function () {
  const e = waitForAnySuggestionAdded();
  block(matchDeleteSuggestion(e.id, ANY), function () {
    verifySuggestionExists(e.id);
  });
});

bthread("Suggestion update verification", function () {
  const e = waitForAnySuggestionUpdated();
  block(matchDeleteSuggestion(e.id, ANY), function () {
    verifySuggestionUpdated(e.id);
  });
});

bthread("Suggestion delete verification", function () {
  const e = waitForAnySuggestionDeleted();
  block(matchAddSuggestion(e.id, ANY), function () {
    verifySuggestionDoesNotExist(e.id);
  });
});

bthread("System create verification", function () {
  const e = waitForAnySystemAdded();
  block(matchDeleteSystem(e.id, ANY), function () {
    verifySystemExists(e.id);
  });
});

bthread("System update verification", function () {
  const e = waitForAnySystemUpdated();
  block(matchDeleteSystem(e.id, ANY), function () {
    verifySystemUpdated(e.id);
  });
});

bthread("System delete verification", function () {
  const e = waitForAnySystemDeleted();
  block(matchAddSystem(e.id, ANY), function () {
    verifySystemDoesNotExist(e.id);
  });
});

bthread("Tab create verification", function () {
  const e = waitForAnyTabAdded();
  block(matchDeleteTab(e.id, ANY), function () {
    verifyTabExists(e.id);
  });
});

bthread("Tab update verification", function () {
  const e = waitForAnyTabUpdated();
  block(matchDeleteTab(e.id, ANY), function () {
    verifyTabUpdated(e.id);
  });
});

bthread("Tab delete verification", function () {
  const e = waitForAnyTabDeleted();
  block(matchAddTab(e.id, ANY), function () {
    verifyTabDoesNotExist(e.id);
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

bthread("Thumbnail create verification", function () {
  const e = waitForAnyThumbnailAdded();
  block(matchDeleteThumbnail(e.id, ANY), function () {
    verifyThumbnailExists(e.id);
  });
});

bthread("Thumbnail update verification", function () {
  const e = waitForAnyThumbnailUpdated();
  block(matchDeleteThumbnail(e.id, ANY), function () {
    verifyThumbnailUpdated(e.id);
  });
});

bthread("Thumbnail delete verification", function () {
  const e = waitForAnyThumbnailDeleted();
  block(matchAddThumbnail(e.id, ANY), function () {
    verifyThumbnailDoesNotExist(e.id);
  });
});

bthread("Timetracking create verification", function () {
  const e = waitForAnyTimetrackingAdded();
  block(matchDeleteTimetracking(e.id, ANY), function () {
    verifyTimetrackingExists(e.id);
  });
});

bthread("Timetracking update verification", function () {
  const e = waitForAnyTimetrackingUpdated();
  block(matchDeleteTimetracking(e.id, ANY), function () {
    verifyTimetrackingUpdated(e.id);
  });
});

bthread("Timetracking delete verification", function () {
  const e = waitForAnyTimetrackingDeleted();
  block(matchAddTimetracking(e.id, ANY), function () {
    verifyTimetrackingDoesNotExist(e.id);
  });
});

bthread("Transition create verification", function () {
  const e = waitForAnyTransitionAdded();
  block(matchDeleteTransition(e.id, ANY), function () {
    verifyTransitionExists(e.id);
  });
});

bthread("Transition update verification", function () {
  const e = waitForAnyTransitionUpdated();
  block(matchDeleteTransition(e.id, ANY), function () {
    verifyTransitionUpdated(e.id);
  });
});

bthread("Transition delete verification", function () {
  const e = waitForAnyTransitionDeleted();
  block(matchAddTransition(e.id, ANY), function () {
    verifyTransitionDoesNotExist(e.id);
  });
});

bthread("Trash create verification", function () {
  const e = waitForAnyTrashAdded();
  block(matchDeleteTrash(e.id, ANY), function () {
    verifyTrashExists(e.id);
  });
});

bthread("Trash update verification", function () {
  const e = waitForAnyTrashUpdated();
  block(matchDeleteTrash(e.id, ANY), function () {
    verifyTrashUpdated(e.id);
  });
});

bthread("Trash delete verification", function () {
  const e = waitForAnyTrashDeleted();
  block(matchAddTrash(e.id, ANY), function () {
    verifyTrashDoesNotExist(e.id);
  });
});

bthread("Trashed create verification", function () {
  const e = waitForAnyTrashedAdded();
  block(matchDeleteTrashed(e.id, ANY), function () {
    verifyTrashedExists(e.id);
  });
});

bthread("Trashed update verification", function () {
  const e = waitForAnyTrashedUpdated();
  block(matchDeleteTrashed(e.id, ANY), function () {
    verifyTrashedUpdated(e.id);
  });
});

bthread("Trashed delete verification", function () {
  const e = waitForAnyTrashedDeleted();
  block(matchAddTrashed(e.id, ANY), function () {
    verifyTrashedDoesNotExist(e.id);
  });
});

bthread("Type create verification", function () {
  const e = waitForAnyTypeAdded();
  block(matchDeleteType(e.id, ANY), function () {
    verifyTypeExists(e.id);
  });
});

bthread("Type update verification", function () {
  const e = waitForAnyTypeUpdated();
  block(matchDeleteType(e.id, ANY), function () {
    verifyTypeUpdated(e.id);
  });
});

bthread("Type delete verification", function () {
  const e = waitForAnyTypeDeleted();
  block(matchAddType(e.id, ANY), function () {
    verifyTypeDoesNotExist(e.id);
  });
});

bthread("Uimodification create verification", function () {
  const e = waitForAnyUimodificationAdded();
  block(matchDeleteUimodification(e.id, ANY), function () {
    verifyUimodificationExists(e.id);
  });
});

bthread("Uimodification update verification", function () {
  const e = waitForAnyUimodificationUpdated();
  block(matchDeleteUimodification(e.id, ANY), function () {
    verifyUimodificationUpdated(e.id);
  });
});

bthread("Uimodification delete verification", function () {
  const e = waitForAnyUimodificationDeleted();
  block(matchAddUimodification(e.id, ANY), function () {
    verifyUimodificationDoesNotExist(e.id);
  });
});

bthread("Unarchive create verification", function () {
  const e = waitForAnyUnarchiveAdded();
  block(matchDeleteUnarchive(e.id, ANY), function () {
    verifyUnarchiveExists(e.id);
  });
});

bthread("Unarchive update verification", function () {
  const e = waitForAnyUnarchiveUpdated();
  block(matchDeleteUnarchive(e.id, ANY), function () {
    verifyUnarchiveUpdated(e.id);
  });
});

bthread("Unarchive delete verification", function () {
  const e = waitForAnyUnarchiveDeleted();
  block(matchAddUnarchive(e.id, ANY), function () {
    verifyUnarchiveDoesNotExist(e.id);
  });
});

bthread("Universalavatar create verification", function () {
  const e = waitForAnyUniversalavatarAdded();
  block(matchDeleteUniversalavatar(e.id, ANY), function () {
    verifyUniversalavatarExists(e.id);
  });
});

bthread("Universalavatar update verification", function () {
  const e = waitForAnyUniversalavatarUpdated();
  block(matchDeleteUniversalavatar(e.id, ANY), function () {
    verifyUniversalavatarUpdated(e.id);
  });
});

bthread("Universalavatar delete verification", function () {
  const e = waitForAnyUniversalavatarDeleted();
  block(matchAddUniversalavatar(e.id, ANY), function () {
    verifyUniversalavatarDoesNotExist(e.id);
  });
});

bthread("Unresolvedissuecount create verification", function () {
  const e = waitForAnyUnresolvedissuecountAdded();
  block(matchDeleteUnresolvedissuecount(e.id, ANY), function () {
    verifyUnresolvedissuecountExists(e.id);
  });
});

bthread("Unresolvedissuecount update verification", function () {
  const e = waitForAnyUnresolvedissuecountUpdated();
  block(matchDeleteUnresolvedissuecount(e.id, ANY), function () {
    verifyUnresolvedissuecountUpdated(e.id);
  });
});

bthread("Unresolvedissuecount delete verification", function () {
  const e = waitForAnyUnresolvedissuecountDeleted();
  block(matchAddUnresolvedissuecount(e.id, ANY), function () {
    verifyUnresolvedissuecountDoesNotExist(e.id);
  });
});

bthread("Unwatch create verification", function () {
  const e = waitForAnyUnwatchAdded();
  block(matchDeleteUnwatch(e.id, ANY), function () {
    verifyUnwatchExists(e.id);
  });
});

bthread("Unwatch update verification", function () {
  const e = waitForAnyUnwatchUpdated();
  block(matchDeleteUnwatch(e.id, ANY), function () {
    verifyUnwatchUpdated(e.id);
  });
});

bthread("Unwatch delete verification", function () {
  const e = waitForAnyUnwatchDeleted();
  block(matchAddUnwatch(e.id, ANY), function () {
    verifyUnwatchDoesNotExist(e.id);
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

bthread("Updated create verification", function () {
  const e = waitForAnyUpdatedAdded();
  block(matchDeleteUpdated(e.id, ANY), function () {
    verifyUpdatedExists(e.id);
  });
});

bthread("Updated update verification", function () {
  const e = waitForAnyUpdatedUpdated();
  block(matchDeleteUpdated(e.id, ANY), function () {
    verifyUpdatedUpdated(e.id);
  });
});

bthread("Updated delete verification", function () {
  const e = waitForAnyUpdatedDeleted();
  block(matchAddUpdated(e.id, ANY), function () {
    verifyUpdatedDoesNotExist(e.id);
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

bthread("Validation create verification", function () {
  const e = waitForAnyValidationAdded();
  block(matchDeleteValidation(e.id, ANY), function () {
    verifyValidationExists(e.id);
  });
});

bthread("Validation update verification", function () {
  const e = waitForAnyValidationUpdated();
  block(matchDeleteValidation(e.id, ANY), function () {
    verifyValidationUpdated(e.id);
  });
});

bthread("Validation delete verification", function () {
  const e = waitForAnyValidationDeleted();
  block(matchAddValidation(e.id, ANY), function () {
    verifyValidationDoesNotExist(e.id);
  });
});

bthread("Validprojectkey create verification", function () {
  const e = waitForAnyValidprojectkeyAdded();
  block(matchDeleteValidprojectkey(e.id, ANY), function () {
    verifyValidprojectkeyExists(e.id);
  });
});

bthread("Validprojectkey update verification", function () {
  const e = waitForAnyValidprojectkeyUpdated();
  block(matchDeleteValidprojectkey(e.id, ANY), function () {
    verifyValidprojectkeyUpdated(e.id);
  });
});

bthread("Validprojectkey delete verification", function () {
  const e = waitForAnyValidprojectkeyDeleted();
  block(matchAddValidprojectkey(e.id, ANY), function () {
    verifyValidprojectkeyDoesNotExist(e.id);
  });
});

bthread("Validprojectname create verification", function () {
  const e = waitForAnyValidprojectnameAdded();
  block(matchDeleteValidprojectname(e.id, ANY), function () {
    verifyValidprojectnameExists(e.id);
  });
});

bthread("Validprojectname update verification", function () {
  const e = waitForAnyValidprojectnameUpdated();
  block(matchDeleteValidprojectname(e.id, ANY), function () {
    verifyValidprojectnameUpdated(e.id);
  });
});

bthread("Validprojectname delete verification", function () {
  const e = waitForAnyValidprojectnameDeleted();
  block(matchAddValidprojectname(e.id, ANY), function () {
    verifyValidprojectnameDoesNotExist(e.id);
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

bthread("Viewissue create verification", function () {
  const e = waitForAnyViewissueAdded();
  block(matchDeleteViewissue(e.id, ANY), function () {
    verifyViewissueExists(e.id);
  });
});

bthread("Viewissue update verification", function () {
  const e = waitForAnyViewissueUpdated();
  block(matchDeleteViewissue(e.id, ANY), function () {
    verifyViewissueUpdated(e.id);
  });
});

bthread("Viewissue delete verification", function () {
  const e = waitForAnyViewissueDeleted();
  block(matchAddViewissue(e.id, ANY), function () {
    verifyViewissueDoesNotExist(e.id);
  });
});

bthread("Vote create verification", function () {
  const e = waitForAnyVoteAdded();
  block(matchDeleteVote(e.id, ANY), function () {
    verifyVoteExists(e.id);
  });
});

bthread("Vote update verification", function () {
  const e = waitForAnyVoteUpdated();
  block(matchDeleteVote(e.id, ANY), function () {
    verifyVoteUpdated(e.id);
  });
});

bthread("Vote delete verification", function () {
  const e = waitForAnyVoteDeleted();
  block(matchAddVote(e.id, ANY), function () {
    verifyVoteDoesNotExist(e.id);
  });
});

bthread("Watch create verification", function () {
  const e = waitForAnyWatchAdded();
  block(matchDeleteWatch(e.id, ANY), function () {
    verifyWatchExists(e.id);
  });
});

bthread("Watch update verification", function () {
  const e = waitForAnyWatchUpdated();
  block(matchDeleteWatch(e.id, ANY), function () {
    verifyWatchUpdated(e.id);
  });
});

bthread("Watch delete verification", function () {
  const e = waitForAnyWatchDeleted();
  block(matchAddWatch(e.id, ANY), function () {
    verifyWatchDoesNotExist(e.id);
  });
});

bthread("Watcher create verification", function () {
  const e = waitForAnyWatcherAdded();
  block(matchDeleteWatcher(e.id, ANY), function () {
    verifyWatcherExists(e.id);
  });
});

bthread("Watcher update verification", function () {
  const e = waitForAnyWatcherUpdated();
  block(matchDeleteWatcher(e.id, ANY), function () {
    verifyWatcherUpdated(e.id);
  });
});

bthread("Watcher delete verification", function () {
  const e = waitForAnyWatcherDeleted();
  block(matchAddWatcher(e.id, ANY), function () {
    verifyWatcherDoesNotExist(e.id);
  });
});

bthread("Watching create verification", function () {
  const e = waitForAnyWatchingAdded();
  block(matchDeleteWatching(e.id, ANY), function () {
    verifyWatchingExists(e.id);
  });
});

bthread("Watching update verification", function () {
  const e = waitForAnyWatchingUpdated();
  block(matchDeleteWatching(e.id, ANY), function () {
    verifyWatchingUpdated(e.id);
  });
});

bthread("Watching delete verification", function () {
  const e = waitForAnyWatchingDeleted();
  block(matchAddWatching(e.id, ANY), function () {
    verifyWatchingDoesNotExist(e.id);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  block(matchDeleteWebhook(e.id, ANY), function () {
    verifyWebhookExists(e.id);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  block(matchDeleteWebhook(e.id, ANY), function () {
    verifyWebhookUpdated(e.id);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  block(matchAddWebhook(e.id, ANY), function () {
    verifyWebhookDoesNotExist(e.id);
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

bthread("Workflowscheme create verification", function () {
  const e = waitForAnyWorkflowschemeAdded();
  block(matchDeleteWorkflowscheme(e.id, ANY), function () {
    verifyWorkflowschemeExists(e.id);
  });
});

bthread("Workflowscheme update verification", function () {
  const e = waitForAnyWorkflowschemeUpdated();
  block(matchDeleteWorkflowscheme(e.id, ANY), function () {
    verifyWorkflowschemeUpdated(e.id);
  });
});

bthread("Workflowscheme delete verification", function () {
  const e = waitForAnyWorkflowschemeDeleted();
  block(matchAddWorkflowscheme(e.id, ANY), function () {
    verifyWorkflowschemeDoesNotExist(e.id);
  });
});

bthread("Workflowusage create verification", function () {
  const e = waitForAnyWorkflowusageAdded();
  block(matchDeleteWorkflowusage(e.id, ANY), function () {
    verifyWorkflowusageExists(e.id);
  });
});

bthread("Workflowusage update verification", function () {
  const e = waitForAnyWorkflowusageUpdated();
  block(matchDeleteWorkflowusage(e.id, ANY), function () {
    verifyWorkflowusageUpdated(e.id);
  });
});

bthread("Workflowusage delete verification", function () {
  const e = waitForAnyWorkflowusageDeleted();
  block(matchAddWorkflowusage(e.id, ANY), function () {
    verifyWorkflowusageDoesNotExist(e.id);
  });
});

bthread("Worklog create verification", function () {
  const e = waitForAnyWorklogAdded();
  block(matchDeleteWorklog(e.id, ANY), function () {
    verifyWorklogExists(e.id);
  });
});

bthread("Worklog update verification", function () {
  const e = waitForAnyWorklogUpdated();
  block(matchDeleteWorklog(e.id, ANY), function () {
    verifyWorklogUpdated(e.id);
  });
});

bthread("Worklog delete verification", function () {
  const e = waitForAnyWorklogDeleted();
  block(matchAddWorklog(e.id, ANY), function () {
    verifyWorklogDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique 1", function () {
  const x = waitForAny1Added();
  block(matchAdd1(x.id, ANY), function () {});
});

bthread("Guard: Unique 3", function () {
  const x = waitForAny3Added();
  block(matchAdd3(x.id, ANY), function () {});
});

bthread("Guard: Unique Accessible", function () {
  const x = waitForAnyAccessibleAdded();
  block(matchAddAccessible(x.id, ANY), function () {});
});

bthread("Guard: Unique Actor", function () {
  const x = waitForAnyActorAdded();
  block(matchAddActor(x.id, ANY), function () {});
});

bthread("Guard: Unique Addon", function () {
  const x = waitForAnyAddonAdded();
  block(matchAddAddon(x.id, ANY), function () {});
});

bthread("Guard: Unique Addtodefault", function () {
  const x = waitForAnyAddtodefaultAdded();
  block(matchAddAddtodefault(x.id, ANY), function () {});
});

bthread("Guard: Unique Advancedsetting", function () {
  const x = waitForAnyAdvancedsettingAdded();
  block(matchAddAdvancedsetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Alternative", function () {
  const x = waitForAnyAlternativeAdded();
  block(matchAddAlternative(x.id, ANY), function () {});
});

bthread("Guard: Unique Analyse", function () {
  const x = waitForAnyAnalyseAdded();
  block(matchAddAnalyse(x.id, ANY), function () {});
});

bthread("Guard: Unique Announcementbanner", function () {
  const x = waitForAnyAnnouncementbannerAdded();
  block(matchAddAnnouncementbanner(x.id, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  block(matchAddApi(x.id, ANY), function () {});
});

bthread("Guard: Unique App", function () {
  const x = waitForAnyAppAdded();
  block(matchAddApp(x.id, ANY), function () {});
});

bthread("Guard: Unique Applicationproperty", function () {
  const x = waitForAnyApplicationpropertyAdded();
  block(matchAddApplicationproperty(x.id, ANY), function () {});
});

bthread("Guard: Unique Applicationrole", function () {
  const x = waitForAnyApplicationroleAdded();
  block(matchAddApplicationrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Approximatecount", function () {
  const x = waitForAnyApproximatecountAdded();
  block(matchAddApproximatecount(x.id, ANY), function () {});
});

bthread("Guard: Unique Approximatelicensecount", function () {
  const x = waitForAnyApproximatelicensecountAdded();
  block(matchAddApproximatelicensecount(x.id, ANY), function () {});
});

bthread("Guard: Unique Archive", function () {
  const x = waitForAnyArchiveAdded();
  block(matchAddArchive(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignable", function () {
  const x = waitForAnyAssignableAdded();
  block(matchAddAssignable(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignee", function () {
  const x = waitForAnyAssigneeAdded();
  block(matchAddAssignee(x.id, ANY), function () {});
});

bthread("Guard: Unique Association", function () {
  const x = waitForAnyAssociationAdded();
  block(matchAddAssociation(x.id, ANY), function () {});
});

bthread("Guard: Unique Atlassian", function () {
  const x = waitForAnyAtlassianAdded();
  block(matchAddAtlassian(x.id, ANY), function () {});
});

bthread("Guard: Unique Atlassianconnect", function () {
  const x = waitForAnyAtlassianconnectAdded();
  block(matchAddAtlassianconnect(x.id, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  block(matchAddAttachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Auditing", function () {
  const x = waitForAnyAuditingAdded();
  block(matchAddAuditing(x.id, ANY), function () {});
});

bthread("Guard: Unique Autocompletedata", function () {
  const x = waitForAnyAutocompletedataAdded();
  block(matchAddAutocompletedata(x.id, ANY), function () {});
});

bthread("Guard: Unique Available", function () {
  const x = waitForAnyAvailableAdded();
  block(matchAddAvailable(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablefield", function () {
  const x = waitForAnyAvailablefieldAdded();
  block(matchAddAvailablefield(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatar", function () {
  const x = waitForAnyAvatarAdded();
  block(matchAddAvatar(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatar2", function () {
  const x = waitForAnyAvatar2Added();
  block(matchAddAvatar2(x.id, ANY), function () {});
});

bthread("Guard: Unique Bulk", function () {
  const x = waitForAnyBulkAdded();
  block(matchAddBulk(x.id, ANY), function () {});
});

bthread("Guard: Unique Bulkfetch", function () {
  const x = waitForAnyBulkfetchAdded();
  block(matchAddBulkfetch(x.id, ANY), function () {});
});

bthread("Guard: Unique Byname", function () {
  const x = waitForAnyBynameAdded();
  block(matchAddByname(x.id, ANY), function () {});
});

bthread("Guard: Unique Cancel", function () {
  const x = waitForAnyCancelAdded();
  block(matchAddCancel(x.id, ANY), function () {});
});

bthread("Guard: Unique Capability", function () {
  const x = waitForAnyCapabilityAdded();
  block(matchAddCapability(x.id, ANY), function () {});
});

bthread("Guard: Unique Changelog", function () {
  const x = waitForAnyChangelogAdded();
  block(matchAddChangelog(x.id, ANY), function () {});
});

bthread("Guard: Unique Check", function () {
  const x = waitForAnyCheckAdded();
  block(matchAddCheck(x.id, ANY), function () {});
});

bthread("Guard: Unique Classificationlevel", function () {
  const x = waitForAnyClassificationlevelAdded();
  block(matchAddClassificationlevel(x.id, ANY), function () {});
});

bthread("Guard: Unique Column", function () {
  const x = waitForAnyColumnAdded();
  block(matchAddColumn(x.id, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  block(matchAddComment(x.id, ANY), function () {});
});

bthread("Guard: Unique Component", function () {
  const x = waitForAnyComponentAdded();
  block(matchAddComponent(x.id, ANY), function () {});
});

bthread("Guard: Unique Computation", function () {
  const x = waitForAnyComputationAdded();
  block(matchAddComputation(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Configuration", function () {
  const x = waitForAnyConfigurationAdded();
  block(matchAddConfiguration(x.id, ANY), function () {});
});

bthread("Guard: Unique Content", function () {
  const x = waitForAnyContentAdded();
  block(matchAddContent(x.id, ANY), function () {});
});

bthread("Guard: Unique Context", function () {
  const x = waitForAnyContextAdded();
  block(matchAddContext(x.id, ANY), function () {});
});

bthread("Guard: Unique Copy", function () {
  const x = waitForAnyCopyAdded();
  block(matchAddCopy(x.id, ANY), function () {});
});

bthread("Guard: Unique Create", function () {
  const x = waitForAnyCreateAdded();
  block(matchAddCreate(x.id, ANY), function () {});
});

bthread("Guard: Unique Createdraft", function () {
  const x = waitForAnyCreatedraftAdded();
  block(matchAddCreatedraft(x.id, ANY), function () {});
});

bthread("Guard: Unique Createmeta", function () {
  const x = waitForAnyCreatemetaAdded();
  block(matchAddCreatemeta(x.id, ANY), function () {});
});

bthread("Guard: Unique Customfieldoption", function () {
  const x = waitForAnyCustomfieldoptionAdded();
  block(matchAddCustomfieldoption(x.id, ANY), function () {});
});

bthread("Guard: Unique Dashboard", function () {
  const x = waitForAnyDashboardAdded();
  block(matchAddDashboard(x.id, ANY), function () {});
});

bthread("Guard: Unique Datapolicy", function () {
  const x = waitForAnyDatapolicyAdded();
  block(matchAddDatapolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Default", function () {
  const x = waitForAnyDefaultAdded();
  block(matchAddDefault(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaulteditor", function () {
  const x = waitForAnyDefaulteditorAdded();
  block(matchAddDefaulteditor(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultsharescope", function () {
  const x = waitForAnyDefaultsharescopeAdded();
  block(matchAddDefaultsharescope(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultvalue", function () {
  const x = waitForAnyDefaultvalueAdded();
  block(matchAddDefaultvalue(x.id, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  block(matchAddDelete(x.id, ANY), function () {});
});

bthread("Guard: Unique Deleted", function () {
  const x = waitForAnyDeletedAdded();
  block(matchAddDeleted(x.id, ANY), function () {});
});

bthread("Guard: Unique Draft", function () {
  const x = waitForAnyDraftAdded();
  block(matchAddDraft(x.id, ANY), function () {});
});

bthread("Guard: Unique Duplicate", function () {
  const x = waitForAnyDuplicateAdded();
  block(matchAddDuplicate(x.id, ANY), function () {});
});

bthread("Guard: Unique Dynamic", function () {
  const x = waitForAnyDynamicAdded();
  block(matchAddDynamic(x.id, ANY), function () {});
});

bthread("Guard: Unique Edit", function () {
  const x = waitForAnyEditAdded();
  block(matchAddEdit(x.id, ANY), function () {});
});

bthread("Guard: Unique Editmeta", function () {
  const x = waitForAnyEditmetaAdded();
  block(matchAddEditmeta(x.id, ANY), function () {});
});

bthread("Guard: Unique Edittemplate", function () {
  const x = waitForAnyEdittemplateAdded();
  block(matchAddEdittemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Email", function () {
  const x = waitForAnyEmailAdded();
  block(matchAddEmail(x.id, ANY), function () {});
});

bthread("Guard: Unique Eval", function () {
  const x = waitForAnyEvalAdded();
  block(matchAddEval(x.id, ANY), function () {});
});

bthread("Guard: Unique Evaluate", function () {
  const x = waitForAnyEvaluateAdded();
  block(matchAddEvaluate(x.id, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  block(matchAddEvent(x.id, ANY), function () {});
});

bthread("Guard: Unique Expand", function () {
  const x = waitForAnyExpandAdded();
  block(matchAddExpand(x.id, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  block(matchAddExport(x.id, ANY), function () {});
});

bthread("Guard: Unique Expression", function () {
  const x = waitForAnyExpressionAdded();
  block(matchAddExpression(x.id, ANY), function () {});
});

bthread("Guard: Unique Failed", function () {
  const x = waitForAnyFailedAdded();
  block(matchAddFailed(x.id, ANY), function () {});
});

bthread("Guard: Unique Favourite", function () {
  const x = waitForAnyFavouriteAdded();
  block(matchAddFavourite(x.id, ANY), function () {});
});

bthread("Guard: Unique Feature", function () {
  const x = waitForAnyFeatureAdded();
  block(matchAddFeature(x.id, ANY), function () {});
});

bthread("Guard: Unique Field", function () {
  const x = waitForAnyFieldAdded();
  block(matchAddField(x.id, ANY), function () {});
});

bthread("Guard: Unique Fieldconfiguration", function () {
  const x = waitForAnyFieldconfigurationAdded();
  block(matchAddFieldconfiguration(x.id, ANY), function () {});
});

bthread("Guard: Unique Fieldconfigurationscheme", function () {
  const x = waitForAnyFieldconfigurationschemeAdded();
  block(matchAddFieldconfigurationscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Filter", function () {
  const x = waitForAnyFilterAdded();
  block(matchAddFilter(x.id, ANY), function () {});
});

bthread("Guard: Unique Forge", function () {
  const x = waitForAnyForgeAdded();
  block(matchAddForge(x.id, ANY), function () {});
});

bthread("Guard: Unique Function", function () {
  const x = waitForAnyFunctionAdded();
  block(matchAddFunction(x.id, ANY), function () {});
});

bthread("Guard: Unique Gadget", function () {
  const x = waitForAnyGadgetAdded();
  block(matchAddGadget(x.id, ANY), function () {});
});

bthread("Guard: Unique Group", function () {
  const x = waitForAnyGroupAdded();
  block(matchAddGroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Groupuserpicker", function () {
  const x = waitForAnyGroupuserpickerAdded();
  block(matchAddGroupuserpicker(x.id, ANY), function () {});
});

bthread("Guard: Unique Hierarchy", function () {
  const x = waitForAnyHierarchyAdded();
  block(matchAddHierarchy(x.id, ANY), function () {});
});

bthread("Guard: Unique Human", function () {
  const x = waitForAnyHumanAdded();
  block(matchAddHuman(x.id, ANY), function () {});
});

bthread("Guard: Unique Instance", function () {
  const x = waitForAnyInstanceAdded();
  block(matchAddInstance(x.id, ANY), function () {});
});

bthread("Guard: Unique Issue", function () {
  const x = waitForAnyIssueAdded();
  block(matchAddIssue(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuelink", function () {
  const x = waitForAnyIssuelinkAdded();
  block(matchAddIssuelink(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuelinktype", function () {
  const x = waitForAnyIssuelinktypeAdded();
  block(matchAddIssuelinktype(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuesecuritylevelscheme", function () {
  const x = waitForAnyIssuesecuritylevelschemeAdded();
  block(matchAddIssuesecuritylevelscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuesecurityscheme", function () {
  const x = waitForAnyIssuesecurityschemeAdded();
  block(matchAddIssuesecurityscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetype", function () {
  const x = waitForAnyIssuetypeAdded();
  block(matchAddIssuetype(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetypemapping", function () {
  const x = waitForAnyIssuetypemappingAdded();
  block(matchAddIssuetypemapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetypescheme", function () {
  const x = waitForAnyIssuetypeschemeAdded();
  block(matchAddIssuetypescheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetypescreenscheme", function () {
  const x = waitForAnyIssuetypescreenschemeAdded();
  block(matchAddIssuetypescreenscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetypeusage", function () {
  const x = waitForAnyIssuetypeusageAdded();
  block(matchAddIssuetypeusage(x.id, ANY), function () {});
});

bthread("Guard: Unique Item", function () {
  const x = waitForAnyItemAdded();
  block(matchAddItem(x.id, ANY), function () {});
});

bthread("Guard: Unique Jql", function () {
  const x = waitForAnyJqlAdded();
  block(matchAddJql(x.id, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  block(matchAddKey(x.id, ANY), function () {});
});

bthread("Guard: Unique Label", function () {
  const x = waitForAnyLabelAdded();
  block(matchAddLabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Level", function () {
  const x = waitForAnyLevelAdded();
  block(matchAddLevel(x.id, ANY), function () {});
});

bthread("Guard: Unique License", function () {
  const x = waitForAnyLicenseAdded();
  block(matchAddLicense(x.id, ANY), function () {});
});

bthread("Guard: Unique Limit", function () {
  const x = waitForAnyLimitAdded();
  block(matchAddLimit(x.id, ANY), function () {});
});

bthread("Guard: Unique List", function () {
  const x = waitForAnyListAdded();
  block(matchAddList(x.id, ANY), function () {});
});

bthread("Guard: Unique Livetemplate", function () {
  const x = waitForAnyLivetemplateAdded();
  block(matchAddLivetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Locale", function () {
  const x = waitForAnyLocaleAdded();
  block(matchAddLocale(x.id, ANY), function () {});
});

bthread("Guard: Unique Mapping", function () {
  const x = waitForAnyMappingAdded();
  block(matchAddMapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Match", function () {
  const x = waitForAnyMatchAdded();
  block(matchAddMatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Mergeto", function () {
  const x = waitForAnyMergetoAdded();
  block(matchAddMergeto(x.id, ANY), function () {});
});

bthread("Guard: Unique Meta", function () {
  const x = waitForAnyMetaAdded();
  block(matchAddMeta(x.id, ANY), function () {});
});

bthread("Guard: Unique Migration", function () {
  const x = waitForAnyMigrationAdded();
  block(matchAddMigration(x.id, ANY), function () {});
});

bthread("Guard: Unique Module", function () {
  const x = waitForAnyModuleAdded();
  block(matchAddModule(x.id, ANY), function () {});
});

bthread("Guard: Unique Move", function () {
  const x = waitForAnyMoveAdded();
  block(matchAddMove(x.id, ANY), function () {});
});

bthread("Guard: Unique Multi", function () {
  const x = waitForAnyMultiAdded();
  block(matchAddMulti(x.id, ANY), function () {});
});

bthread("Guard: Unique Multiprojectsearch", function () {
  const x = waitForAnyMultiprojectsearchAdded();
  block(matchAddMultiprojectsearch(x.id, ANY), function () {});
});

bthread("Guard: Unique My", function () {
  const x = waitForAnyMyAdded();
  block(matchAddMy(x.id, ANY), function () {});
});

bthread("Guard: Unique Mypermission", function () {
  const x = waitForAnyMypermissionAdded();
  block(matchAddMypermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Mypreference", function () {
  const x = waitForAnyMypreferenceAdded();
  block(matchAddMypreference(x.id, ANY), function () {});
});

bthread("Guard: Unique Myself", function () {
  const x = waitForAnyMyselfAdded();
  block(matchAddMyself(x.id, ANY), function () {});
});

bthread("Guard: Unique Nav4optproperty", function () {
  const x = waitForAnyNav4optpropertyAdded();
  block(matchAddNav4optproperty(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Notificationscheme", function () {
  const x = waitForAnyNotificationschemeAdded();
  block(matchAddNotificationscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Notify", function () {
  const x = waitForAnyNotifyAdded();
  block(matchAddNotify(x.id, ANY), function () {});
});

bthread("Guard: Unique Option", function () {
  const x = waitForAnyOptionAdded();
  block(matchAddOption(x.id, ANY), function () {});
});

bthread("Guard: Unique Owner", function () {
  const x = waitForAnyOwnerAdded();
  block(matchAddOwner(x.id, ANY), function () {});
});

bthread("Guard: Unique Parse", function () {
  const x = waitForAnyParseAdded();
  block(matchAddParse(x.id, ANY), function () {});
});

bthread("Guard: Unique Pdcleaner", function () {
  const x = waitForAnyPdcleanerAdded();
  block(matchAddPdcleaner(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Permissionscheme", function () {
  const x = waitForAnyPermissionschemeAdded();
  block(matchAddPermissionscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Picker", function () {
  const x = waitForAnyPickerAdded();
  block(matchAddPicker(x.id, ANY), function () {});
});

bthread("Guard: Unique Plan", function () {
  const x = waitForAnyPlanAdded();
  block(matchAddPlan(x.id, ANY), function () {});
});

bthread("Guard: Unique Planonly", function () {
  const x = waitForAnyPlanonlyAdded();
  block(matchAddPlanonly(x.id, ANY), function () {});
});

bthread("Guard: Unique Preview", function () {
  const x = waitForAnyPreviewAdded();
  block(matchAddPreview(x.id, ANY), function () {});
});

bthread("Guard: Unique Priority", function () {
  const x = waitForAnyPriorityAdded();
  block(matchAddPriority(x.id, ANY), function () {});
});

bthread("Guard: Unique Priorityscheme", function () {
  const x = waitForAnyPriorityschemeAdded();
  block(matchAddPriorityscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Product", function () {
  const x = waitForAnyProductAdded();
  block(matchAddProduct(x.id, ANY), function () {});
});

bthread("Guard: Unique Project", function () {
  const x = waitForAnyProjectAdded();
  block(matchAddProject(x.id, ANY), function () {});
});

bthread("Guard: Unique Projectcategory", function () {
  const x = waitForAnyProjectcategoryAdded();
  block(matchAddProjectcategory(x.id, ANY), function () {});
});

bthread("Guard: Unique Projectmapping", function () {
  const x = waitForAnyProjectmappingAdded();
  block(matchAddProjectmapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Projecttemplate", function () {
  const x = waitForAnyProjecttemplateAdded();
  block(matchAddProjecttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Projectusage", function () {
  const x = waitForAnyProjectusageAdded();
  block(matchAddProjectusage(x.id, ANY), function () {});
});

bthread("Guard: Unique Projectvalidate", function () {
  const x = waitForAnyProjectvalidateAdded();
  block(matchAddProjectvalidate(x.id, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  block(matchAddProperty(x.id, ANY), function () {});
});

bthread("Guard: Unique Publish", function () {
  const x = waitForAnyPublishAdded();
  block(matchAddPublish(x.id, ANY), function () {});
});

bthread("Guard: Unique Query", function () {
  const x = waitForAnyQueryAdded();
  block(matchAddQuery(x.id, ANY), function () {});
});

bthread("Guard: Unique Queue", function () {
  const x = waitForAnyQueueAdded();
  block(matchAddQueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Raw", function () {
  const x = waitForAnyRawAdded();
  block(matchAddRaw(x.id, ANY), function () {});
});

bthread("Guard: Unique Read", function () {
  const x = waitForAnyReadAdded();
  block(matchAddRead(x.id, ANY), function () {});
});

bthread("Guard: Unique Recent", function () {
  const x = waitForAnyRecentAdded();
  block(matchAddRecent(x.id, ANY), function () {});
});

bthread("Guard: Unique Record", function () {
  const x = waitForAnyRecordAdded();
  block(matchAddRecord(x.id, ANY), function () {});
});

bthread("Guard: Unique Redact", function () {
  const x = waitForAnyRedactAdded();
  block(matchAddRedact(x.id, ANY), function () {});
});

bthread("Guard: Unique Refresh", function () {
  const x = waitForAnyRefreshAdded();
  block(matchAddRefresh(x.id, ANY), function () {});
});

bthread("Guard: Unique Relatedissuecount", function () {
  const x = waitForAnyRelatedissuecountAdded();
  block(matchAddRelatedissuecount(x.id, ANY), function () {});
});

bthread("Guard: Unique Relatedwork", function () {
  const x = waitForAnyRelatedworkAdded();
  block(matchAddRelatedwork(x.id, ANY), function () {});
});

bthread("Guard: Unique Remotelink", function () {
  const x = waitForAnyRemotelinkAdded();
  block(matchAddRemotelink(x.id, ANY), function () {});
});

bthread("Guard: Unique Remove", function () {
  const x = waitForAnyRemoveAdded();
  block(matchAddRemove(x.id, ANY), function () {});
});

bthread("Guard: Unique Removeandswap", function () {
  const x = waitForAnyRemoveandswapAdded();
  block(matchAddRemoveandswap(x.id, ANY), function () {});
});

bthread("Guard: Unique Removetemplate", function () {
  const x = waitForAnyRemovetemplateAdded();
  block(matchAddRemovetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  block(matchAddReport(x.id, ANY), function () {});
});

bthread("Guard: Unique Resolution", function () {
  const x = waitForAnyResolutionAdded();
  block(matchAddResolution(x.id, ANY), function () {});
});

bthread("Guard: Unique Rest", function () {
  const x = waitForAnyRestAdded();
  block(matchAddRest(x.id, ANY), function () {});
});

bthread("Guard: Unique Restore", function () {
  const x = waitForAnyRestoreAdded();
  block(matchAddRestore(x.id, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  block(matchAddRole(x.id, ANY), function () {});
});

bthread("Guard: Unique Roledetail", function () {
  const x = waitForAnyRoledetailAdded();
  block(matchAddRoledetail(x.id, ANY), function () {});
});

bthread("Guard: Unique Rule", function () {
  const x = waitForAnyRuleAdded();
  block(matchAddRule(x.id, ANY), function () {});
});

bthread("Guard: Unique Sanitize", function () {
  const x = waitForAnySanitizeAdded();
  block(matchAddSanitize(x.id, ANY), function () {});
});

bthread("Guard: Unique Savetemplate", function () {
  const x = waitForAnySavetemplateAdded();
  block(matchAddSavetemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Screen", function () {
  const x = waitForAnyScreenAdded();
  block(matchAddScreen(x.id, ANY), function () {});
});

bthread("Guard: Unique Screenscheme", function () {
  const x = waitForAnyScreenschemeAdded();
  block(matchAddScreenscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  block(matchAddSearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Securitylevel", function () {
  const x = waitForAnySecuritylevelAdded();
  block(matchAddSecuritylevel(x.id, ANY), function () {});
});

bthread("Guard: Unique Serverinfo", function () {
  const x = waitForAnyServerinfoAdded();
  block(matchAddServerinfo(x.id, ANY), function () {});
});

bthread("Guard: Unique Serviceregistry", function () {
  const x = waitForAnyServiceregistryAdded();
  block(matchAddServiceregistry(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Status", function () {
  const x = waitForAnyStatusAdded();
  block(matchAddStatus(x.id, ANY), function () {});
});

bthread("Guard: Unique Statuscategory", function () {
  const x = waitForAnyStatuscategoryAdded();
  block(matchAddStatuscategory(x.id, ANY), function () {});
});

bthread("Guard: Unique Suggestion", function () {
  const x = waitForAnySuggestionAdded();
  block(matchAddSuggestion(x.id, ANY), function () {});
});

bthread("Guard: Unique System", function () {
  const x = waitForAnySystemAdded();
  block(matchAddSystem(x.id, ANY), function () {});
});

bthread("Guard: Unique Tab", function () {
  const x = waitForAnyTabAdded();
  block(matchAddTab(x.id, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  block(matchAddTask(x.id, ANY), function () {});
});

bthread("Guard: Unique Team", function () {
  const x = waitForAnyTeamAdded();
  block(matchAddTeam(x.id, ANY), function () {});
});

bthread("Guard: Unique Thumbnail", function () {
  const x = waitForAnyThumbnailAdded();
  block(matchAddThumbnail(x.id, ANY), function () {});
});

bthread("Guard: Unique Timetracking", function () {
  const x = waitForAnyTimetrackingAdded();
  block(matchAddTimetracking(x.id, ANY), function () {});
});

bthread("Guard: Unique Transition", function () {
  const x = waitForAnyTransitionAdded();
  block(matchAddTransition(x.id, ANY), function () {});
});

bthread("Guard: Unique Trash", function () {
  const x = waitForAnyTrashAdded();
  block(matchAddTrash(x.id, ANY), function () {});
});

bthread("Guard: Unique Trashed", function () {
  const x = waitForAnyTrashedAdded();
  block(matchAddTrashed(x.id, ANY), function () {});
});

bthread("Guard: Unique Type", function () {
  const x = waitForAnyTypeAdded();
  block(matchAddType(x.id, ANY), function () {});
});

bthread("Guard: Unique Uimodification", function () {
  const x = waitForAnyUimodificationAdded();
  block(matchAddUimodification(x.id, ANY), function () {});
});

bthread("Guard: Unique Unarchive", function () {
  const x = waitForAnyUnarchiveAdded();
  block(matchAddUnarchive(x.id, ANY), function () {});
});

bthread("Guard: Unique Universalavatar", function () {
  const x = waitForAnyUniversalavatarAdded();
  block(matchAddUniversalavatar(x.id, ANY), function () {});
});

bthread("Guard: Unique Unresolvedissuecount", function () {
  const x = waitForAnyUnresolvedissuecountAdded();
  block(matchAddUnresolvedissuecount(x.id, ANY), function () {});
});

bthread("Guard: Unique Unwatch", function () {
  const x = waitForAnyUnwatchAdded();
  block(matchAddUnwatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Update", function () {
  const x = waitForAnyUpdateAdded();
  block(matchAddUpdate(x.id, ANY), function () {});
});

bthread("Guard: Unique Updated", function () {
  const x = waitForAnyUpdatedAdded();
  block(matchAddUpdated(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Validation", function () {
  const x = waitForAnyValidationAdded();
  block(matchAddValidation(x.id, ANY), function () {});
});

bthread("Guard: Unique Validprojectkey", function () {
  const x = waitForAnyValidprojectkeyAdded();
  block(matchAddValidprojectkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Validprojectname", function () {
  const x = waitForAnyValidprojectnameAdded();
  block(matchAddValidprojectname(x.id, ANY), function () {});
});

bthread("Guard: Unique Value", function () {
  const x = waitForAnyValueAdded();
  block(matchAddValue(x.id, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  block(matchAddVersion(x.id, ANY), function () {});
});

bthread("Guard: Unique View", function () {
  const x = waitForAnyViewAdded();
  block(matchAddView(x.id, ANY), function () {});
});

bthread("Guard: Unique Viewissue", function () {
  const x = waitForAnyViewissueAdded();
  block(matchAddViewissue(x.id, ANY), function () {});
});

bthread("Guard: Unique Vote", function () {
  const x = waitForAnyVoteAdded();
  block(matchAddVote(x.id, ANY), function () {});
});

bthread("Guard: Unique Watch", function () {
  const x = waitForAnyWatchAdded();
  block(matchAddWatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Watcher", function () {
  const x = waitForAnyWatcherAdded();
  block(matchAddWatcher(x.id, ANY), function () {});
});

bthread("Guard: Unique Watching", function () {
  const x = waitForAnyWatchingAdded();
  block(matchAddWatching(x.id, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  block(matchAddWebhook(x.id, ANY), function () {});
});

bthread("Guard: Unique Workflow", function () {
  const x = waitForAnyWorkflowAdded();
  block(matchAddWorkflow(x.id, ANY), function () {});
});

bthread("Guard: Unique Workflowscheme", function () {
  const x = waitForAnyWorkflowschemeAdded();
  block(matchAddWorkflowscheme(x.id, ANY), function () {});
});

bthread("Guard: Unique Workflowusage", function () {
  const x = waitForAnyWorkflowusageAdded();
  block(matchAddWorkflowusage(x.id, ANY), function () {});
});

bthread("Guard: Unique Worklog", function () {
  const x = waitForAnyWorklogAdded();
  block(matchAddWorklog(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
