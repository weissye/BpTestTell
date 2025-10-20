// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AddmodelLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAddmodel(x.id);
  updateAddmodel(x.id);
  updateAddmodel(x.id);
  verifyAddmodelExists(x.id);
  verifyAddmodelUpdated(x.id);
});

bthread("AdmineventLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdminevent(x.id);
  updateAdminevent(x.id);
  updateAdminevent(x.id);
  verifyAdmineventExists(x.id);
  verifyAdmineventUpdated(x.id);
});

bthread("AttackdetectionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttackdetection(x.id);
  updateAttackdetection(x.id);
  updateAttackdetection(x.id);
  verifyAttackdetectionExists(x.id);
  verifyAttackdetectionUpdated(x.id);
});

bthread("AuthenticationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthentication(x.id);
  updateAuthentication(x.id);
  updateAuthentication(x.id);
  verifyAuthenticationExists(x.id);
  verifyAuthenticationUpdated(x.id);
});

bthread("AuthenticatorproviderLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthenticatorprovider(x.id);
  updateAuthenticatorprovider(x.id);
  updateAuthenticatorprovider(x.id);
  verifyAuthenticatorproviderExists(x.id);
  verifyAuthenticatorproviderUpdated(x.id);
});

bthread("AvailableLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAvailable(x.id);
  updateAvailable(x.id);
  updateAvailable(x.id);
  verifyAvailableExists(x.id);
  verifyAvailableUpdated(x.id);
});

bthread("BruteforceLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBruteforce(x.id);
  updateBruteforce(x.id);
  updateBruteforce(x.id);
  verifyBruteforceExists(x.id);
  verifyBruteforceUpdated(x.id);
});

bthread("CertificateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCertificate(x.id);
  updateCertificate(x.id);
  updateCertificate(x.id);
  verifyCertificateExists(x.id);
  verifyCertificateUpdated(x.id);
});

bthread("ChildrenLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChildren(x.id);
  updateChildren(x.id);
  updateChildren(x.id);
  verifyChildrenExists(x.id);
  verifyChildrenUpdated(x.id);
});

bthread("ClientLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClient(x.id);
  updateClient(x.id);
  updateClient(x.id);
  verifyClientExists(x.id);
  verifyClientUpdated(x.id);
});

bthread("ClientauthenticatorproviderLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientauthenticatorprovider(x.id);
  updateClientauthenticatorprovider(x.id);
  updateClientauthenticatorprovider(x.id);
  verifyClientauthenticatorproviderExists(x.id);
  verifyClientauthenticatorproviderUpdated(x.id);
});

bthread("ClientdescriptionconverterLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientdescriptionconverter(x.id);
  updateClientdescriptionconverter(x.id);
  updateClientdescriptionconverter(x.id);
  verifyClientdescriptionconverterExists(x.id);
  verifyClientdescriptionconverterUpdated(x.id);
});

bthread("ClientpolicyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientpolicy(x.id);
  updateClientpolicy(x.id);
  updateClientpolicy(x.id);
  verifyClientpolicyExists(x.id);
  verifyClientpolicyUpdated(x.id);
});

bthread("ClientregistrationpolicyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientregistrationpolicy(x.id);
  updateClientregistrationpolicy(x.id);
  updateClientregistrationpolicy(x.id);
  verifyClientregistrationpolicyExists(x.id);
  verifyClientregistrationpolicyUpdated(x.id);
});

bthread("ClientscopeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientscope(x.id);
  updateClientscope(x.id);
  updateClientscope(x.id);
  verifyClientscopeExists(x.id);
  verifyClientscopeUpdated(x.id);
});

bthread("ClientsecretLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientsecret(x.id);
  updateClientsecret(x.id);
  updateClientsecret(x.id);
  verifyClientsecretExists(x.id);
  verifyClientsecretUpdated(x.id);
});

bthread("ClientsessionstatLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientsessionstat(x.id);
  updateClientsessionstat(x.id);
  updateClientsessionstat(x.id);
  verifyClientsessionstatExists(x.id);
  verifyClientsessionstatUpdated(x.id);
});

bthread("ClientsinitialaccesLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientsinitialacces(x.id);
  updateClientsinitialacces(x.id);
  updateClientsinitialacces(x.id);
  verifyClientsinitialaccesExists(x.id);
  verifyClientsinitialaccesUpdated(x.id);
});

bthread("ClienttemplateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClienttemplate(x.id);
  updateClienttemplate(x.id);
  updateClienttemplate(x.id);
  verifyClienttemplateExists(x.id);
  verifyClienttemplateUpdated(x.id);
});

bthread("ComponentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComponent(x.id);
  updateComponent(x.id);
  updateComponent(x.id);
  verifyComponentExists(x.id);
  verifyComponentUpdated(x.id);
});

bthread("CompositeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComposite(x.id);
  updateComposite(x.id);
  updateComposite(x.id);
  verifyCompositeExists(x.id);
  verifyCompositeUpdated(x.id);
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
});

bthread("ConfigdescriptionLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigdescription(x.id);
  updateConfigdescription(x.id);
  updateConfigdescription(x.id);
  verifyConfigdescriptionExists(x.id);
  verifyConfigdescriptionUpdated(x.id);
});

bthread("ConfigureduserstoragecredentialtypeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigureduserstoragecredentialtype(x.id);
  updateConfigureduserstoragecredentialtype(x.id);
  updateConfigureduserstoragecredentialtype(x.id);
  verifyConfigureduserstoragecredentialtypeExists(x.id);
  verifyConfigureduserstoragecredentialtypeUpdated(x.id);
});

bthread("ConsentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsent(x.id);
  updateConsent(x.id);
  updateConsent(x.id);
  verifyConsentExists(x.id);
  verifyConsentUpdated(x.id);
});

bthread("CopyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCopy(x.id);
  updateCopy(x.id);
  updateCopy(x.id);
  verifyCopyExists(x.id);
  verifyCopyUpdated(x.id);
});

bthread("CountLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCount(x.id);
  updateCount(x.id);
  updateCount(x.id);
  verifyCountExists(x.id);
  verifyCountUpdated(x.id);
});

bthread("CredentialLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredential(x.id);
  updateCredential(x.id);
  updateCredential(x.id);
  verifyCredentialExists(x.id);
  verifyCredentialUpdated(x.id);
});

bthread("CredentialregistratorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentialregistrator(x.id);
  updateCredentialregistrator(x.id);
  updateCredentialregistrator(x.id);
  verifyCredentialregistratorExists(x.id);
  verifyCredentialregistratorUpdated(x.id);
});

bthread("DefaultclientscopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultclientscope(x.id);
  updateDefaultclientscope(x.id);
  updateDefaultclientscope(x.id);
  verifyDefaultclientscopeExists(x.id);
  verifyDefaultclientscopeUpdated(x.id);
});

bthread("DefaultdefaultclientscopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultdefaultclientscope(x.id);
  updateDefaultdefaultclientscope(x.id);
  updateDefaultdefaultclientscope(x.id);
  verifyDefaultdefaultclientscopeExists(x.id);
  verifyDefaultdefaultclientscopeUpdated(x.id);
});

bthread("DefaultgroupLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultgroup(x.id);
  updateDefaultgroup(x.id);
  updateDefaultgroup(x.id);
  verifyDefaultgroupExists(x.id);
  verifyDefaultgroupUpdated(x.id);
});

bthread("DefaultoptionalclientscopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultoptionalclientscope(x.id);
  updateDefaultoptionalclientscope(x.id);
  updateDefaultoptionalclientscope(x.id);
  verifyDefaultoptionalclientscopeExists(x.id);
  verifyDefaultoptionalclientscopeUpdated(x.id);
});

bthread("DisablecredentialtypeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisablecredentialtype(x.id);
  updateDisablecredentialtype(x.id);
  updateDisablecredentialtype(x.id);
  verifyDisablecredentialtypeExists(x.id);
  verifyDisablecredentialtypeUpdated(x.id);
});

bthread("DownloadLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDownload(x.id);
  updateDownload(x.id);
  updateDownload(x.id);
  verifyDownloadExists(x.id);
  verifyDownloadUpdated(x.id);
});

bthread("EvaluatescopeLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvaluatescope(x.id);
  updateEvaluatescope(x.id);
  updateEvaluatescope(x.id);
  verifyEvaluatescopeExists(x.id);
  verifyEvaluatescopeUpdated(x.id);
});

bthread("EventLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvent(x.id);
  updateEvent(x.id);
  updateEvent(x.id);
  verifyEventExists(x.id);
  verifyEventUpdated(x.id);
});

bthread("ExecuteactionsemailLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExecuteactionsemail(x.id);
  updateExecuteactionsemail(x.id);
  updateExecuteactionsemail(x.id);
  verifyExecuteactionsemailExists(x.id);
  verifyExecuteactionsemailUpdated(x.id);
});

bthread("ExecutionLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExecution(x.id);
  updateExecution(x.id);
  updateExecution(x.id);
  verifyExecutionExists(x.id);
  verifyExecutionUpdated(x.id);
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExport(x.id);
  updateExport(x.id);
  updateExport(x.id);
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
});

bthread("FederatedidentityLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFederatedidentity(x.id);
  updateFederatedidentity(x.id);
  updateFederatedidentity(x.id);
  verifyFederatedidentityExists(x.id);
  verifyFederatedidentityUpdated(x.id);
});

bthread("FlowLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFlow(x.id);
  updateFlow(x.id);
  updateFlow(x.id);
  verifyFlowExists(x.id);
  verifyFlowUpdated(x.id);
});

bthread("FormactionproviderLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFormactionprovider(x.id);
  updateFormactionprovider(x.id);
  updateFormactionprovider(x.id);
  verifyFormactionproviderExists(x.id);
  verifyFormactionproviderUpdated(x.id);
});

bthread("FormproviderLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFormprovider(x.id);
  updateFormprovider(x.id);
  updateFormprovider(x.id);
  verifyFormproviderExists(x.id);
  verifyFormproviderUpdated(x.id);
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerate(x.id);
  updateGenerate(x.id);
  updateGenerate(x.id);
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
});

bthread("GenerateanddownloadLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateanddownload(x.id);
  updateGenerateanddownload(x.id);
  updateGenerateanddownload(x.id);
  verifyGenerateanddownloadExists(x.id);
  verifyGenerateanddownloadUpdated(x.id);
});

bthread("GenerateexampleaccesstokenLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateexampleaccesstoken(x.id);
  updateGenerateexampleaccesstoken(x.id);
  updateGenerateexampleaccesstoken(x.id);
  verifyGenerateexampleaccesstokenExists(x.id);
  verifyGenerateexampleaccesstokenUpdated(x.id);
});

bthread("GenerateexampleidtokenLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateexampleidtoken(x.id);
  updateGenerateexampleidtoken(x.id);
  updateGenerateexampleidtoken(x.id);
  verifyGenerateexampleidtokenExists(x.id);
  verifyGenerateexampleidtokenUpdated(x.id);
});

bthread("GenerateexampleuserinfoLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateexampleuserinfo(x.id);
  updateGenerateexampleuserinfo(x.id);
  updateGenerateexampleuserinfo(x.id);
  verifyGenerateexampleuserinfoExists(x.id);
  verifyGenerateexampleuserinfoUpdated(x.id);
});

bthread("GrantedLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGranted(x.id);
  updateGranted(x.id);
  updateGranted(x.id);
  verifyGrantedExists(x.id);
  verifyGrantedUpdated(x.id);
});

bthread("GroupLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGroup(x.id);
  updateGroup(x.id);
  updateGroup(x.id);
  verifyGroupExists(x.id);
  verifyGroupUpdated(x.id);
});

bthread("GroupbypathLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGroupbypath(x.id);
  updateGroupbypath(x.id);
  updateGroupbypath(x.id);
  verifyGroupbypathExists(x.id);
  verifyGroupbypathUpdated(x.id);
});

bthread("IdentityproviderLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdentityprovider(x.id);
  updateIdentityprovider(x.id);
  updateIdentityprovider(x.id);
  verifyIdentityproviderExists(x.id);
  verifyIdentityproviderUpdated(x.id);
});

bthread("ImpersonationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImpersonation(x.id);
  updateImpersonation(x.id);
  updateImpersonation(x.id);
  verifyImpersonationExists(x.id);
  verifyImpersonationUpdated(x.id);
});

bthread("ImportconfigLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImportconfig(x.id);
  updateImportconfig(x.id);
  updateImportconfig(x.id);
  verifyImportconfigExists(x.id);
  verifyImportconfigUpdated(x.id);
});

bthread("InstallationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstallation(x.id);
  updateInstallation(x.id);
  updateInstallation(x.id);
  verifyInstallationExists(x.id);
  verifyInstallationUpdated(x.id);
});

bthread("InstanceLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstance(x.id);
  updateInstance(x.id);
  updateInstance(x.id);
  verifyInstanceExists(x.id);
  verifyInstanceUpdated(x.id);
});

bthread("KeyLifecycle", function () {
  const x = pick([{id: "K001"}, {id: "K002"}]);
  addKey(x.id);
  updateKey(x.id);
  updateKey(x.id);
  verifyKeyExists(x.id);
  verifyKeyUpdated(x.id);
});

bthread("LocalizationLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocalization(x.id);
  updateLocalization(x.id);
  updateLocalization(x.id);
  verifyLocalizationExists(x.id);
  verifyLocalizationUpdated(x.id);
});

bthread("LogoutLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogout(x.id);
  updateLogout(x.id);
  updateLogout(x.id);
  verifyLogoutExists(x.id);
  verifyLogoutUpdated(x.id);
});

bthread("LogoutallLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogoutall(x.id);
  updateLogoutall(x.id);
  updateLogoutall(x.id);
  verifyLogoutallExists(x.id);
  verifyLogoutallUpdated(x.id);
});

bthread("LowerpriorityLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLowerpriority(x.id);
  updateLowerpriority(x.id);
  updateLowerpriority(x.id);
  verifyLowerpriorityExists(x.id);
  verifyLowerpriorityUpdated(x.id);
});

bthread("ManagementLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addManagement(x.id);
  updateManagement(x.id);
  updateManagement(x.id);
  verifyManagementExists(x.id);
  verifyManagementUpdated(x.id);
});

bthread("MapperLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMapper(x.id);
  updateMapper(x.id);
  updateMapper(x.id);
  verifyMapperExists(x.id);
  verifyMapperUpdated(x.id);
});

bthread("MappertypeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMappertype(x.id);
  updateMappertype(x.id);
  updateMappertype(x.id);
  verifyMappertypeExists(x.id);
  verifyMappertypeUpdated(x.id);
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMember(x.id);
  updateMember(x.id);
  updateMember(x.id);
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
});

bthread("ModelLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModel(x.id);
  updateModel(x.id);
  updateModel(x.id);
  verifyModelExists(x.id);
  verifyModelUpdated(x.id);
});

bthread("MoveafterLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMoveafter(x.id);
  updateMoveafter(x.id);
  updateMoveafter(x.id);
  verifyMoveafterExists(x.id);
  verifyMoveafterUpdated(x.id);
});

bthread("MovetofirstLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMovetofirst(x.id);
  updateMovetofirst(x.id);
  updateMovetofirst(x.id);
  verifyMovetofirstExists(x.id);
  verifyMovetofirstUpdated(x.id);
});

bthread("NodeLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNode(x.id);
  updateNode(x.id);
  updateNode(x.id);
  verifyNodeExists(x.id);
  verifyNodeUpdated(x.id);
});

bthread("NotgrantedLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotgranted(x.id);
  updateNotgranted(x.id);
  updateNotgranted(x.id);
  verifyNotgrantedExists(x.id);
  verifyNotgrantedUpdated(x.id);
});

bthread("OfflinesessionLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOfflinesession(x.id);
  updateOfflinesession(x.id);
  updateOfflinesession(x.id);
  verifyOfflinesessionExists(x.id);
  verifyOfflinesessionUpdated(x.id);
});

bthread("OfflinesessioncountLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOfflinesessioncount(x.id);
  updateOfflinesessioncount(x.id);
  updateOfflinesessioncount(x.id);
  verifyOfflinesessioncountExists(x.id);
  verifyOfflinesessioncountUpdated(x.id);
});

bthread("OptionalclientscopeLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOptionalclientscope(x.id);
  updateOptionalclientscope(x.id);
  updateOptionalclientscope(x.id);
  verifyOptionalclientscopeExists(x.id);
  verifyOptionalclientscopeUpdated(x.id);
});

bthread("PartialexportLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPartialexport(x.id);
  updatePartialexport(x.id);
  updatePartialexport(x.id);
  verifyPartialexportExists(x.id);
  verifyPartialexportUpdated(x.id);
});

bthread("PartialimportLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPartialimport(x.id);
  updatePartialimport(x.id);
  updatePartialimport(x.id);
  verifyPartialimportExists(x.id);
  verifyPartialimportUpdated(x.id);
});

bthread("PerclientconfigdescriptionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPerclientconfigdescription(x.id);
  updatePerclientconfigdescription(x.id);
  updatePerclientconfigdescription(x.id);
  verifyPerclientconfigdescriptionExists(x.id);
  verifyPerclientconfigdescriptionUpdated(x.id);
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermission(x.id);
  updatePermission(x.id);
  updatePermission(x.id);
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
});

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPolicy(x.id);
  updatePolicy(x.id);
  updatePolicy(x.id);
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
});

bthread("ProfileLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProfile(x.id);
  updateProfile(x.id);
  updateProfile(x.id);
  verifyProfileExists(x.id);
  verifyProfileUpdated(x.id);
});

bthread("ProtocolLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProtocol(x.id);
  updateProtocol(x.id);
  updateProtocol(x.id);
  verifyProtocolExists(x.id);
  verifyProtocolUpdated(x.id);
});

bthread("ProtocolmapperLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProtocolmapper(x.id);
  updateProtocolmapper(x.id);
  updateProtocolmapper(x.id);
  verifyProtocolmapperExists(x.id);
  verifyProtocolmapperUpdated(x.id);
});

bthread("ProviderLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProvider(x.id);
  updateProvider(x.id);
  updateProvider(x.id);
  verifyProviderExists(x.id);
  verifyProviderUpdated(x.id);
});

bthread("PushrevocationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPushrevocation(x.id);
  updatePushrevocation(x.id);
  updatePushrevocation(x.id);
  verifyPushrevocationExists(x.id);
  verifyPushrevocationUpdated(x.id);
});

bthread("RaisepriorityLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRaisepriority(x.id);
  updateRaisepriority(x.id);
  updateRaisepriority(x.id);
  verifyRaisepriorityExists(x.id);
  verifyRaisepriorityUpdated(x.id);
});

bthread("RealmLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRealm(x.id);
  updateRealm(x.id);
  updateRealm(x.id);
  verifyRealmExists(x.id);
  verifyRealmUpdated(x.id);
});

bthread("RegisterrequiredactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegisterrequiredaction(x.id);
  updateRegisterrequiredaction(x.id);
  updateRegisterrequiredaction(x.id);
  verifyRegisterrequiredactionExists(x.id);
  verifyRegisterrequiredactionUpdated(x.id);
});

bthread("RegistrationaccesstokenLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegistrationaccesstoken(x.id);
  updateRegistrationaccesstoken(x.id);
  updateRegistrationaccesstoken(x.id);
  verifyRegistrationaccesstokenExists(x.id);
  verifyRegistrationaccesstokenUpdated(x.id);
});

bthread("RequiredactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredaction(x.id);
  updateRequiredaction(x.id);
  updateRequiredaction(x.id);
  verifyRequiredactionExists(x.id);
  verifyRequiredactionUpdated(x.id);
});

bthread("ResetpasswordLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResetpassword(x.id);
  updateResetpassword(x.id);
  updateResetpassword(x.id);
  verifyResetpasswordExists(x.id);
  verifyResetpasswordUpdated(x.id);
});

bthread("ResetpasswordemailLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResetpasswordemail(x.id);
  updateResetpasswordemail(x.id);
  updateResetpasswordemail(x.id);
  verifyResetpasswordemailExists(x.id);
  verifyResetpasswordemailUpdated(x.id);
});

bthread("RoleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRole(x.id);
  updateRole(x.id);
  updateRole(x.id);
  verifyRoleExists(x.id);
  verifyRoleUpdated(x.id);
});

bthread("RolemappingLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRolemapping(x.id);
  updateRolemapping(x.id);
  updateRolemapping(x.id);
  verifyRolemappingExists(x.id);
  verifyRolemappingUpdated(x.id);
});

bthread("RolesbyidLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRolesbyid(x.id);
  updateRolesbyid(x.id);
  updateRolesbyid(x.id);
  verifyRolesbyidExists(x.id);
  verifyRolesbyidUpdated(x.id);
});

bthread("RotatedLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRotated(x.id);
  updateRotated(x.id);
  updateRotated(x.id);
  verifyRotatedExists(x.id);
  verifyRotatedUpdated(x.id);
});

bthread("ScopemappingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScopemapping(x.id);
  updateScopemapping(x.id);
  updateScopemapping(x.id);
  verifyScopemappingExists(x.id);
  verifyScopemappingUpdated(x.id);
});

bthread("SendverifyemailLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSendverifyemail(x.id);
  updateSendverifyemail(x.id);
  updateSendverifyemail(x.id);
  verifySendverifyemailExists(x.id);
  verifySendverifyemailUpdated(x.id);
});

bthread("ServiceaccountuserLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServiceaccountuser(x.id);
  updateServiceaccountuser(x.id);
  updateServiceaccountuser(x.id);
  verifyServiceaccountuserExists(x.id);
  verifyServiceaccountuserUpdated(x.id);
});

bthread("SessionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSession(x.id);
  updateSession(x.id);
  updateSession(x.id);
  verifySessionExists(x.id);
  verifySessionUpdated(x.id);
});

bthread("SessioncountLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSessioncount(x.id);
  updateSessioncount(x.id);
  updateSessioncount(x.id);
  verifySessioncountExists(x.id);
  verifySessioncountUpdated(x.id);
});

bthread("SubcomponenttypeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubcomponenttype(x.id);
  updateSubcomponenttype(x.id);
  updateSubcomponenttype(x.id);
  verifySubcomponenttypeExists(x.id);
  verifySubcomponenttypeUpdated(x.id);
});

bthread("TestnodesavailableLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTestnodesavailable(x.id);
  updateTestnodesavailable(x.id);
  updateTestnodesavailable(x.id);
  verifyTestnodesavailableExists(x.id);
  verifyTestnodesavailableUpdated(x.id);
});

bthread("TestsmtpconnectionLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTestsmtpconnection(x.id);
  updateTestsmtpconnection(x.id);
  updateTestsmtpconnection(x.id);
  verifyTestsmtpconnectionExists(x.id);
  verifyTestsmtpconnectionUpdated(x.id);
});

bthread("UnregisteredrequiredactionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnregisteredrequiredaction(x.id);
  updateUnregisteredrequiredaction(x.id);
  updateUnregisteredrequiredaction(x.id);
  verifyUnregisteredrequiredactionExists(x.id);
  verifyUnregisteredrequiredactionUpdated(x.id);
});

bthread("UploadLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUpload(x.id);
  updateUpload(x.id);
  updateUpload(x.id);
  verifyUploadExists(x.id);
  verifyUploadUpdated(x.id);
});

bthread("UploadcertificateLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUploadcertificate(x.id);
  updateUploadcertificate(x.id);
  updateUploadcertificate(x.id);
  verifyUploadcertificateExists(x.id);
  verifyUploadcertificateUpdated(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("UserlabelLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserlabel(x.id);
  updateUserlabel(x.id);
  updateUserlabel(x.id);
  verifyUserlabelExists(x.id);
  verifyUserlabelUpdated(x.id);
});

bthread("UsersessionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsersession(x.id);
  updateUsersession(x.id);
  updateUsersession(x.id);
  verifyUsersessionExists(x.id);
  verifyUsersessionUpdated(x.id);
});

bthread("UsersmanagementpermissionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsersmanagementpermission(x.id);
  updateUsersmanagementpermission(x.id);
  updateUsersmanagementpermission(x.id);
  verifyUsersmanagementpermissionExists(x.id);
  verifyUsersmanagementpermissionUpdated(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Addmodel create verification", function () {
  const e = waitForAnyAddmodelAdded();
  block(matchDeleteAddmodel(e.id, ANY), function () {
    verifyAddmodelExists(e.id);
  });
});

bthread("Addmodel update verification", function () {
  const e = waitForAnyAddmodelUpdated();
  block(matchDeleteAddmodel(e.id, ANY), function () {
    verifyAddmodelUpdated(e.id);
  });
});

bthread("Addmodel delete verification", function () {
  const e = waitForAnyAddmodelDeleted();
  block(matchAddAddmodel(e.id, ANY), function () {
    verifyAddmodelDoesNotExist(e.id);
  });
});

bthread("Adminevent create verification", function () {
  const e = waitForAnyAdmineventAdded();
  block(matchDeleteAdminevent(e.id, ANY), function () {
    verifyAdmineventExists(e.id);
  });
});

bthread("Adminevent update verification", function () {
  const e = waitForAnyAdmineventUpdated();
  block(matchDeleteAdminevent(e.id, ANY), function () {
    verifyAdmineventUpdated(e.id);
  });
});

bthread("Adminevent delete verification", function () {
  const e = waitForAnyAdmineventDeleted();
  block(matchAddAdminevent(e.id, ANY), function () {
    verifyAdmineventDoesNotExist(e.id);
  });
});

bthread("Attackdetection create verification", function () {
  const e = waitForAnyAttackdetectionAdded();
  block(matchDeleteAttackdetection(e.id, ANY), function () {
    verifyAttackdetectionExists(e.id);
  });
});

bthread("Attackdetection update verification", function () {
  const e = waitForAnyAttackdetectionUpdated();
  block(matchDeleteAttackdetection(e.id, ANY), function () {
    verifyAttackdetectionUpdated(e.id);
  });
});

bthread("Attackdetection delete verification", function () {
  const e = waitForAnyAttackdetectionDeleted();
  block(matchAddAttackdetection(e.id, ANY), function () {
    verifyAttackdetectionDoesNotExist(e.id);
  });
});

bthread("Authentication create verification", function () {
  const e = waitForAnyAuthenticationAdded();
  block(matchDeleteAuthentication(e.id, ANY), function () {
    verifyAuthenticationExists(e.id);
  });
});

bthread("Authentication update verification", function () {
  const e = waitForAnyAuthenticationUpdated();
  block(matchDeleteAuthentication(e.id, ANY), function () {
    verifyAuthenticationUpdated(e.id);
  });
});

bthread("Authentication delete verification", function () {
  const e = waitForAnyAuthenticationDeleted();
  block(matchAddAuthentication(e.id, ANY), function () {
    verifyAuthenticationDoesNotExist(e.id);
  });
});

bthread("Authenticatorprovider create verification", function () {
  const e = waitForAnyAuthenticatorproviderAdded();
  block(matchDeleteAuthenticatorprovider(e.id, ANY), function () {
    verifyAuthenticatorproviderExists(e.id);
  });
});

bthread("Authenticatorprovider update verification", function () {
  const e = waitForAnyAuthenticatorproviderUpdated();
  block(matchDeleteAuthenticatorprovider(e.id, ANY), function () {
    verifyAuthenticatorproviderUpdated(e.id);
  });
});

bthread("Authenticatorprovider delete verification", function () {
  const e = waitForAnyAuthenticatorproviderDeleted();
  block(matchAddAuthenticatorprovider(e.id, ANY), function () {
    verifyAuthenticatorproviderDoesNotExist(e.id);
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

bthread("Bruteforce create verification", function () {
  const e = waitForAnyBruteforceAdded();
  block(matchDeleteBruteforce(e.id, ANY), function () {
    verifyBruteforceExists(e.id);
  });
});

bthread("Bruteforce update verification", function () {
  const e = waitForAnyBruteforceUpdated();
  block(matchDeleteBruteforce(e.id, ANY), function () {
    verifyBruteforceUpdated(e.id);
  });
});

bthread("Bruteforce delete verification", function () {
  const e = waitForAnyBruteforceDeleted();
  block(matchAddBruteforce(e.id, ANY), function () {
    verifyBruteforceDoesNotExist(e.id);
  });
});

bthread("Certificate create verification", function () {
  const e = waitForAnyCertificateAdded();
  block(matchDeleteCertificate(e.id, ANY), function () {
    verifyCertificateExists(e.id);
  });
});

bthread("Certificate update verification", function () {
  const e = waitForAnyCertificateUpdated();
  block(matchDeleteCertificate(e.id, ANY), function () {
    verifyCertificateUpdated(e.id);
  });
});

bthread("Certificate delete verification", function () {
  const e = waitForAnyCertificateDeleted();
  block(matchAddCertificate(e.id, ANY), function () {
    verifyCertificateDoesNotExist(e.id);
  });
});

bthread("Children create verification", function () {
  const e = waitForAnyChildrenAdded();
  block(matchDeleteChildren(e.id, ANY), function () {
    verifyChildrenExists(e.id);
  });
});

bthread("Children update verification", function () {
  const e = waitForAnyChildrenUpdated();
  block(matchDeleteChildren(e.id, ANY), function () {
    verifyChildrenUpdated(e.id);
  });
});

bthread("Children delete verification", function () {
  const e = waitForAnyChildrenDeleted();
  block(matchAddChildren(e.id, ANY), function () {
    verifyChildrenDoesNotExist(e.id);
  });
});

bthread("Client create verification", function () {
  const e = waitForAnyClientAdded();
  block(matchDeleteClient(e.id, ANY), function () {
    verifyClientExists(e.id);
  });
});

bthread("Client update verification", function () {
  const e = waitForAnyClientUpdated();
  block(matchDeleteClient(e.id, ANY), function () {
    verifyClientUpdated(e.id);
  });
});

bthread("Client delete verification", function () {
  const e = waitForAnyClientDeleted();
  block(matchAddClient(e.id, ANY), function () {
    verifyClientDoesNotExist(e.id);
  });
});

bthread("Clientauthenticatorprovider create verification", function () {
  const e = waitForAnyClientauthenticatorproviderAdded();
  block(matchDeleteClientauthenticatorprovider(e.id, ANY), function () {
    verifyClientauthenticatorproviderExists(e.id);
  });
});

bthread("Clientauthenticatorprovider update verification", function () {
  const e = waitForAnyClientauthenticatorproviderUpdated();
  block(matchDeleteClientauthenticatorprovider(e.id, ANY), function () {
    verifyClientauthenticatorproviderUpdated(e.id);
  });
});

bthread("Clientauthenticatorprovider delete verification", function () {
  const e = waitForAnyClientauthenticatorproviderDeleted();
  block(matchAddClientauthenticatorprovider(e.id, ANY), function () {
    verifyClientauthenticatorproviderDoesNotExist(e.id);
  });
});

bthread("Clientdescriptionconverter create verification", function () {
  const e = waitForAnyClientdescriptionconverterAdded();
  block(matchDeleteClientdescriptionconverter(e.id, ANY), function () {
    verifyClientdescriptionconverterExists(e.id);
  });
});

bthread("Clientdescriptionconverter update verification", function () {
  const e = waitForAnyClientdescriptionconverterUpdated();
  block(matchDeleteClientdescriptionconverter(e.id, ANY), function () {
    verifyClientdescriptionconverterUpdated(e.id);
  });
});

bthread("Clientdescriptionconverter delete verification", function () {
  const e = waitForAnyClientdescriptionconverterDeleted();
  block(matchAddClientdescriptionconverter(e.id, ANY), function () {
    verifyClientdescriptionconverterDoesNotExist(e.id);
  });
});

bthread("Clientpolicy create verification", function () {
  const e = waitForAnyClientpolicyAdded();
  block(matchDeleteClientpolicy(e.id, ANY), function () {
    verifyClientpolicyExists(e.id);
  });
});

bthread("Clientpolicy update verification", function () {
  const e = waitForAnyClientpolicyUpdated();
  block(matchDeleteClientpolicy(e.id, ANY), function () {
    verifyClientpolicyUpdated(e.id);
  });
});

bthread("Clientpolicy delete verification", function () {
  const e = waitForAnyClientpolicyDeleted();
  block(matchAddClientpolicy(e.id, ANY), function () {
    verifyClientpolicyDoesNotExist(e.id);
  });
});

bthread("Clientregistrationpolicy create verification", function () {
  const e = waitForAnyClientregistrationpolicyAdded();
  block(matchDeleteClientregistrationpolicy(e.id, ANY), function () {
    verifyClientregistrationpolicyExists(e.id);
  });
});

bthread("Clientregistrationpolicy update verification", function () {
  const e = waitForAnyClientregistrationpolicyUpdated();
  block(matchDeleteClientregistrationpolicy(e.id, ANY), function () {
    verifyClientregistrationpolicyUpdated(e.id);
  });
});

bthread("Clientregistrationpolicy delete verification", function () {
  const e = waitForAnyClientregistrationpolicyDeleted();
  block(matchAddClientregistrationpolicy(e.id, ANY), function () {
    verifyClientregistrationpolicyDoesNotExist(e.id);
  });
});

bthread("Clientscope create verification", function () {
  const e = waitForAnyClientscopeAdded();
  block(matchDeleteClientscope(e.id, ANY), function () {
    verifyClientscopeExists(e.id);
  });
});

bthread("Clientscope update verification", function () {
  const e = waitForAnyClientscopeUpdated();
  block(matchDeleteClientscope(e.id, ANY), function () {
    verifyClientscopeUpdated(e.id);
  });
});

bthread("Clientscope delete verification", function () {
  const e = waitForAnyClientscopeDeleted();
  block(matchAddClientscope(e.id, ANY), function () {
    verifyClientscopeDoesNotExist(e.id);
  });
});

bthread("Clientsecret create verification", function () {
  const e = waitForAnyClientsecretAdded();
  block(matchDeleteClientsecret(e.id, ANY), function () {
    verifyClientsecretExists(e.id);
  });
});

bthread("Clientsecret update verification", function () {
  const e = waitForAnyClientsecretUpdated();
  block(matchDeleteClientsecret(e.id, ANY), function () {
    verifyClientsecretUpdated(e.id);
  });
});

bthread("Clientsecret delete verification", function () {
  const e = waitForAnyClientsecretDeleted();
  block(matchAddClientsecret(e.id, ANY), function () {
    verifyClientsecretDoesNotExist(e.id);
  });
});

bthread("Clientsessionstat create verification", function () {
  const e = waitForAnyClientsessionstatAdded();
  block(matchDeleteClientsessionstat(e.id, ANY), function () {
    verifyClientsessionstatExists(e.id);
  });
});

bthread("Clientsessionstat update verification", function () {
  const e = waitForAnyClientsessionstatUpdated();
  block(matchDeleteClientsessionstat(e.id, ANY), function () {
    verifyClientsessionstatUpdated(e.id);
  });
});

bthread("Clientsessionstat delete verification", function () {
  const e = waitForAnyClientsessionstatDeleted();
  block(matchAddClientsessionstat(e.id, ANY), function () {
    verifyClientsessionstatDoesNotExist(e.id);
  });
});

bthread("Clientsinitialacces create verification", function () {
  const e = waitForAnyClientsinitialaccesAdded();
  block(matchDeleteClientsinitialacces(e.id, ANY), function () {
    verifyClientsinitialaccesExists(e.id);
  });
});

bthread("Clientsinitialacces update verification", function () {
  const e = waitForAnyClientsinitialaccesUpdated();
  block(matchDeleteClientsinitialacces(e.id, ANY), function () {
    verifyClientsinitialaccesUpdated(e.id);
  });
});

bthread("Clientsinitialacces delete verification", function () {
  const e = waitForAnyClientsinitialaccesDeleted();
  block(matchAddClientsinitialacces(e.id, ANY), function () {
    verifyClientsinitialaccesDoesNotExist(e.id);
  });
});

bthread("Clienttemplate create verification", function () {
  const e = waitForAnyClienttemplateAdded();
  block(matchDeleteClienttemplate(e.id, ANY), function () {
    verifyClienttemplateExists(e.id);
  });
});

bthread("Clienttemplate update verification", function () {
  const e = waitForAnyClienttemplateUpdated();
  block(matchDeleteClienttemplate(e.id, ANY), function () {
    verifyClienttemplateUpdated(e.id);
  });
});

bthread("Clienttemplate delete verification", function () {
  const e = waitForAnyClienttemplateDeleted();
  block(matchAddClienttemplate(e.id, ANY), function () {
    verifyClienttemplateDoesNotExist(e.id);
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

bthread("Composite create verification", function () {
  const e = waitForAnyCompositeAdded();
  block(matchDeleteComposite(e.id, ANY), function () {
    verifyCompositeExists(e.id);
  });
});

bthread("Composite update verification", function () {
  const e = waitForAnyCompositeUpdated();
  block(matchDeleteComposite(e.id, ANY), function () {
    verifyCompositeUpdated(e.id);
  });
});

bthread("Composite delete verification", function () {
  const e = waitForAnyCompositeDeleted();
  block(matchAddComposite(e.id, ANY), function () {
    verifyCompositeDoesNotExist(e.id);
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

bthread("Configdescription create verification", function () {
  const e = waitForAnyConfigdescriptionAdded();
  block(matchDeleteConfigdescription(e.id, ANY), function () {
    verifyConfigdescriptionExists(e.id);
  });
});

bthread("Configdescription update verification", function () {
  const e = waitForAnyConfigdescriptionUpdated();
  block(matchDeleteConfigdescription(e.id, ANY), function () {
    verifyConfigdescriptionUpdated(e.id);
  });
});

bthread("Configdescription delete verification", function () {
  const e = waitForAnyConfigdescriptionDeleted();
  block(matchAddConfigdescription(e.id, ANY), function () {
    verifyConfigdescriptionDoesNotExist(e.id);
  });
});

bthread("Configureduserstoragecredentialtype create verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeAdded();
  block(matchDeleteConfigureduserstoragecredentialtype(e.id, ANY), function () {
    verifyConfigureduserstoragecredentialtypeExists(e.id);
  });
});

bthread("Configureduserstoragecredentialtype update verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeUpdated();
  block(matchDeleteConfigureduserstoragecredentialtype(e.id, ANY), function () {
    verifyConfigureduserstoragecredentialtypeUpdated(e.id);
  });
});

bthread("Configureduserstoragecredentialtype delete verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeDeleted();
  block(matchAddConfigureduserstoragecredentialtype(e.id, ANY), function () {
    verifyConfigureduserstoragecredentialtypeDoesNotExist(e.id);
  });
});

bthread("Consent create verification", function () {
  const e = waitForAnyConsentAdded();
  block(matchDeleteConsent(e.id, ANY), function () {
    verifyConsentExists(e.id);
  });
});

bthread("Consent update verification", function () {
  const e = waitForAnyConsentUpdated();
  block(matchDeleteConsent(e.id, ANY), function () {
    verifyConsentUpdated(e.id);
  });
});

bthread("Consent delete verification", function () {
  const e = waitForAnyConsentDeleted();
  block(matchAddConsent(e.id, ANY), function () {
    verifyConsentDoesNotExist(e.id);
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

bthread("Count create verification", function () {
  const e = waitForAnyCountAdded();
  block(matchDeleteCount(e.id, ANY), function () {
    verifyCountExists(e.id);
  });
});

bthread("Count update verification", function () {
  const e = waitForAnyCountUpdated();
  block(matchDeleteCount(e.id, ANY), function () {
    verifyCountUpdated(e.id);
  });
});

bthread("Count delete verification", function () {
  const e = waitForAnyCountDeleted();
  block(matchAddCount(e.id, ANY), function () {
    verifyCountDoesNotExist(e.id);
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

bthread("Credentialregistrator create verification", function () {
  const e = waitForAnyCredentialregistratorAdded();
  block(matchDeleteCredentialregistrator(e.id, ANY), function () {
    verifyCredentialregistratorExists(e.id);
  });
});

bthread("Credentialregistrator update verification", function () {
  const e = waitForAnyCredentialregistratorUpdated();
  block(matchDeleteCredentialregistrator(e.id, ANY), function () {
    verifyCredentialregistratorUpdated(e.id);
  });
});

bthread("Credentialregistrator delete verification", function () {
  const e = waitForAnyCredentialregistratorDeleted();
  block(matchAddCredentialregistrator(e.id, ANY), function () {
    verifyCredentialregistratorDoesNotExist(e.id);
  });
});

bthread("Defaultclientscope create verification", function () {
  const e = waitForAnyDefaultclientscopeAdded();
  block(matchDeleteDefaultclientscope(e.id, ANY), function () {
    verifyDefaultclientscopeExists(e.id);
  });
});

bthread("Defaultclientscope update verification", function () {
  const e = waitForAnyDefaultclientscopeUpdated();
  block(matchDeleteDefaultclientscope(e.id, ANY), function () {
    verifyDefaultclientscopeUpdated(e.id);
  });
});

bthread("Defaultclientscope delete verification", function () {
  const e = waitForAnyDefaultclientscopeDeleted();
  block(matchAddDefaultclientscope(e.id, ANY), function () {
    verifyDefaultclientscopeDoesNotExist(e.id);
  });
});

bthread("Defaultdefaultclientscope create verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeAdded();
  block(matchDeleteDefaultdefaultclientscope(e.id, ANY), function () {
    verifyDefaultdefaultclientscopeExists(e.id);
  });
});

bthread("Defaultdefaultclientscope update verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeUpdated();
  block(matchDeleteDefaultdefaultclientscope(e.id, ANY), function () {
    verifyDefaultdefaultclientscopeUpdated(e.id);
  });
});

bthread("Defaultdefaultclientscope delete verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeDeleted();
  block(matchAddDefaultdefaultclientscope(e.id, ANY), function () {
    verifyDefaultdefaultclientscopeDoesNotExist(e.id);
  });
});

bthread("Defaultgroup create verification", function () {
  const e = waitForAnyDefaultgroupAdded();
  block(matchDeleteDefaultgroup(e.id, ANY), function () {
    verifyDefaultgroupExists(e.id);
  });
});

bthread("Defaultgroup update verification", function () {
  const e = waitForAnyDefaultgroupUpdated();
  block(matchDeleteDefaultgroup(e.id, ANY), function () {
    verifyDefaultgroupUpdated(e.id);
  });
});

bthread("Defaultgroup delete verification", function () {
  const e = waitForAnyDefaultgroupDeleted();
  block(matchAddDefaultgroup(e.id, ANY), function () {
    verifyDefaultgroupDoesNotExist(e.id);
  });
});

bthread("Defaultoptionalclientscope create verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeAdded();
  block(matchDeleteDefaultoptionalclientscope(e.id, ANY), function () {
    verifyDefaultoptionalclientscopeExists(e.id);
  });
});

bthread("Defaultoptionalclientscope update verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeUpdated();
  block(matchDeleteDefaultoptionalclientscope(e.id, ANY), function () {
    verifyDefaultoptionalclientscopeUpdated(e.id);
  });
});

bthread("Defaultoptionalclientscope delete verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeDeleted();
  block(matchAddDefaultoptionalclientscope(e.id, ANY), function () {
    verifyDefaultoptionalclientscopeDoesNotExist(e.id);
  });
});

bthread("Disablecredentialtype create verification", function () {
  const e = waitForAnyDisablecredentialtypeAdded();
  block(matchDeleteDisablecredentialtype(e.id, ANY), function () {
    verifyDisablecredentialtypeExists(e.id);
  });
});

bthread("Disablecredentialtype update verification", function () {
  const e = waitForAnyDisablecredentialtypeUpdated();
  block(matchDeleteDisablecredentialtype(e.id, ANY), function () {
    verifyDisablecredentialtypeUpdated(e.id);
  });
});

bthread("Disablecredentialtype delete verification", function () {
  const e = waitForAnyDisablecredentialtypeDeleted();
  block(matchAddDisablecredentialtype(e.id, ANY), function () {
    verifyDisablecredentialtypeDoesNotExist(e.id);
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

bthread("Evaluatescope create verification", function () {
  const e = waitForAnyEvaluatescopeAdded();
  block(matchDeleteEvaluatescope(e.id, ANY), function () {
    verifyEvaluatescopeExists(e.id);
  });
});

bthread("Evaluatescope update verification", function () {
  const e = waitForAnyEvaluatescopeUpdated();
  block(matchDeleteEvaluatescope(e.id, ANY), function () {
    verifyEvaluatescopeUpdated(e.id);
  });
});

bthread("Evaluatescope delete verification", function () {
  const e = waitForAnyEvaluatescopeDeleted();
  block(matchAddEvaluatescope(e.id, ANY), function () {
    verifyEvaluatescopeDoesNotExist(e.id);
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

bthread("Executeactionsemail create verification", function () {
  const e = waitForAnyExecuteactionsemailAdded();
  block(matchDeleteExecuteactionsemail(e.id, ANY), function () {
    verifyExecuteactionsemailExists(e.id);
  });
});

bthread("Executeactionsemail update verification", function () {
  const e = waitForAnyExecuteactionsemailUpdated();
  block(matchDeleteExecuteactionsemail(e.id, ANY), function () {
    verifyExecuteactionsemailUpdated(e.id);
  });
});

bthread("Executeactionsemail delete verification", function () {
  const e = waitForAnyExecuteactionsemailDeleted();
  block(matchAddExecuteactionsemail(e.id, ANY), function () {
    verifyExecuteactionsemailDoesNotExist(e.id);
  });
});

bthread("Execution create verification", function () {
  const e = waitForAnyExecutionAdded();
  block(matchDeleteExecution(e.id, ANY), function () {
    verifyExecutionExists(e.id);
  });
});

bthread("Execution update verification", function () {
  const e = waitForAnyExecutionUpdated();
  block(matchDeleteExecution(e.id, ANY), function () {
    verifyExecutionUpdated(e.id);
  });
});

bthread("Execution delete verification", function () {
  const e = waitForAnyExecutionDeleted();
  block(matchAddExecution(e.id, ANY), function () {
    verifyExecutionDoesNotExist(e.id);
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

bthread("Federatedidentity create verification", function () {
  const e = waitForAnyFederatedidentityAdded();
  block(matchDeleteFederatedidentity(e.id, ANY), function () {
    verifyFederatedidentityExists(e.id);
  });
});

bthread("Federatedidentity update verification", function () {
  const e = waitForAnyFederatedidentityUpdated();
  block(matchDeleteFederatedidentity(e.id, ANY), function () {
    verifyFederatedidentityUpdated(e.id);
  });
});

bthread("Federatedidentity delete verification", function () {
  const e = waitForAnyFederatedidentityDeleted();
  block(matchAddFederatedidentity(e.id, ANY), function () {
    verifyFederatedidentityDoesNotExist(e.id);
  });
});

bthread("Flow create verification", function () {
  const e = waitForAnyFlowAdded();
  block(matchDeleteFlow(e.id, ANY), function () {
    verifyFlowExists(e.id);
  });
});

bthread("Flow update verification", function () {
  const e = waitForAnyFlowUpdated();
  block(matchDeleteFlow(e.id, ANY), function () {
    verifyFlowUpdated(e.id);
  });
});

bthread("Flow delete verification", function () {
  const e = waitForAnyFlowDeleted();
  block(matchAddFlow(e.id, ANY), function () {
    verifyFlowDoesNotExist(e.id);
  });
});

bthread("Formactionprovider create verification", function () {
  const e = waitForAnyFormactionproviderAdded();
  block(matchDeleteFormactionprovider(e.id, ANY), function () {
    verifyFormactionproviderExists(e.id);
  });
});

bthread("Formactionprovider update verification", function () {
  const e = waitForAnyFormactionproviderUpdated();
  block(matchDeleteFormactionprovider(e.id, ANY), function () {
    verifyFormactionproviderUpdated(e.id);
  });
});

bthread("Formactionprovider delete verification", function () {
  const e = waitForAnyFormactionproviderDeleted();
  block(matchAddFormactionprovider(e.id, ANY), function () {
    verifyFormactionproviderDoesNotExist(e.id);
  });
});

bthread("Formprovider create verification", function () {
  const e = waitForAnyFormproviderAdded();
  block(matchDeleteFormprovider(e.id, ANY), function () {
    verifyFormproviderExists(e.id);
  });
});

bthread("Formprovider update verification", function () {
  const e = waitForAnyFormproviderUpdated();
  block(matchDeleteFormprovider(e.id, ANY), function () {
    verifyFormproviderUpdated(e.id);
  });
});

bthread("Formprovider delete verification", function () {
  const e = waitForAnyFormproviderDeleted();
  block(matchAddFormprovider(e.id, ANY), function () {
    verifyFormproviderDoesNotExist(e.id);
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

bthread("Generateanddownload create verification", function () {
  const e = waitForAnyGenerateanddownloadAdded();
  block(matchDeleteGenerateanddownload(e.id, ANY), function () {
    verifyGenerateanddownloadExists(e.id);
  });
});

bthread("Generateanddownload update verification", function () {
  const e = waitForAnyGenerateanddownloadUpdated();
  block(matchDeleteGenerateanddownload(e.id, ANY), function () {
    verifyGenerateanddownloadUpdated(e.id);
  });
});

bthread("Generateanddownload delete verification", function () {
  const e = waitForAnyGenerateanddownloadDeleted();
  block(matchAddGenerateanddownload(e.id, ANY), function () {
    verifyGenerateanddownloadDoesNotExist(e.id);
  });
});

bthread("Generateexampleaccesstoken create verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenAdded();
  block(matchDeleteGenerateexampleaccesstoken(e.id, ANY), function () {
    verifyGenerateexampleaccesstokenExists(e.id);
  });
});

bthread("Generateexampleaccesstoken update verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenUpdated();
  block(matchDeleteGenerateexampleaccesstoken(e.id, ANY), function () {
    verifyGenerateexampleaccesstokenUpdated(e.id);
  });
});

bthread("Generateexampleaccesstoken delete verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenDeleted();
  block(matchAddGenerateexampleaccesstoken(e.id, ANY), function () {
    verifyGenerateexampleaccesstokenDoesNotExist(e.id);
  });
});

bthread("Generateexampleidtoken create verification", function () {
  const e = waitForAnyGenerateexampleidtokenAdded();
  block(matchDeleteGenerateexampleidtoken(e.id, ANY), function () {
    verifyGenerateexampleidtokenExists(e.id);
  });
});

bthread("Generateexampleidtoken update verification", function () {
  const e = waitForAnyGenerateexampleidtokenUpdated();
  block(matchDeleteGenerateexampleidtoken(e.id, ANY), function () {
    verifyGenerateexampleidtokenUpdated(e.id);
  });
});

bthread("Generateexampleidtoken delete verification", function () {
  const e = waitForAnyGenerateexampleidtokenDeleted();
  block(matchAddGenerateexampleidtoken(e.id, ANY), function () {
    verifyGenerateexampleidtokenDoesNotExist(e.id);
  });
});

bthread("Generateexampleuserinfo create verification", function () {
  const e = waitForAnyGenerateexampleuserinfoAdded();
  block(matchDeleteGenerateexampleuserinfo(e.id, ANY), function () {
    verifyGenerateexampleuserinfoExists(e.id);
  });
});

bthread("Generateexampleuserinfo update verification", function () {
  const e = waitForAnyGenerateexampleuserinfoUpdated();
  block(matchDeleteGenerateexampleuserinfo(e.id, ANY), function () {
    verifyGenerateexampleuserinfoUpdated(e.id);
  });
});

bthread("Generateexampleuserinfo delete verification", function () {
  const e = waitForAnyGenerateexampleuserinfoDeleted();
  block(matchAddGenerateexampleuserinfo(e.id, ANY), function () {
    verifyGenerateexampleuserinfoDoesNotExist(e.id);
  });
});

bthread("Granted create verification", function () {
  const e = waitForAnyGrantedAdded();
  block(matchDeleteGranted(e.id, ANY), function () {
    verifyGrantedExists(e.id);
  });
});

bthread("Granted update verification", function () {
  const e = waitForAnyGrantedUpdated();
  block(matchDeleteGranted(e.id, ANY), function () {
    verifyGrantedUpdated(e.id);
  });
});

bthread("Granted delete verification", function () {
  const e = waitForAnyGrantedDeleted();
  block(matchAddGranted(e.id, ANY), function () {
    verifyGrantedDoesNotExist(e.id);
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

bthread("Groupbypath create verification", function () {
  const e = waitForAnyGroupbypathAdded();
  block(matchDeleteGroupbypath(e.id, ANY), function () {
    verifyGroupbypathExists(e.id);
  });
});

bthread("Groupbypath update verification", function () {
  const e = waitForAnyGroupbypathUpdated();
  block(matchDeleteGroupbypath(e.id, ANY), function () {
    verifyGroupbypathUpdated(e.id);
  });
});

bthread("Groupbypath delete verification", function () {
  const e = waitForAnyGroupbypathDeleted();
  block(matchAddGroupbypath(e.id, ANY), function () {
    verifyGroupbypathDoesNotExist(e.id);
  });
});

bthread("Identityprovider create verification", function () {
  const e = waitForAnyIdentityproviderAdded();
  block(matchDeleteIdentityprovider(e.id, ANY), function () {
    verifyIdentityproviderExists(e.id);
  });
});

bthread("Identityprovider update verification", function () {
  const e = waitForAnyIdentityproviderUpdated();
  block(matchDeleteIdentityprovider(e.id, ANY), function () {
    verifyIdentityproviderUpdated(e.id);
  });
});

bthread("Identityprovider delete verification", function () {
  const e = waitForAnyIdentityproviderDeleted();
  block(matchAddIdentityprovider(e.id, ANY), function () {
    verifyIdentityproviderDoesNotExist(e.id);
  });
});

bthread("Impersonation create verification", function () {
  const e = waitForAnyImpersonationAdded();
  block(matchDeleteImpersonation(e.id, ANY), function () {
    verifyImpersonationExists(e.id);
  });
});

bthread("Impersonation update verification", function () {
  const e = waitForAnyImpersonationUpdated();
  block(matchDeleteImpersonation(e.id, ANY), function () {
    verifyImpersonationUpdated(e.id);
  });
});

bthread("Impersonation delete verification", function () {
  const e = waitForAnyImpersonationDeleted();
  block(matchAddImpersonation(e.id, ANY), function () {
    verifyImpersonationDoesNotExist(e.id);
  });
});

bthread("Importconfig create verification", function () {
  const e = waitForAnyImportconfigAdded();
  block(matchDeleteImportconfig(e.id, ANY), function () {
    verifyImportconfigExists(e.id);
  });
});

bthread("Importconfig update verification", function () {
  const e = waitForAnyImportconfigUpdated();
  block(matchDeleteImportconfig(e.id, ANY), function () {
    verifyImportconfigUpdated(e.id);
  });
});

bthread("Importconfig delete verification", function () {
  const e = waitForAnyImportconfigDeleted();
  block(matchAddImportconfig(e.id, ANY), function () {
    verifyImportconfigDoesNotExist(e.id);
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

bthread("Localization create verification", function () {
  const e = waitForAnyLocalizationAdded();
  block(matchDeleteLocalization(e.id, ANY), function () {
    verifyLocalizationExists(e.id);
  });
});

bthread("Localization update verification", function () {
  const e = waitForAnyLocalizationUpdated();
  block(matchDeleteLocalization(e.id, ANY), function () {
    verifyLocalizationUpdated(e.id);
  });
});

bthread("Localization delete verification", function () {
  const e = waitForAnyLocalizationDeleted();
  block(matchAddLocalization(e.id, ANY), function () {
    verifyLocalizationDoesNotExist(e.id);
  });
});

bthread("Logout create verification", function () {
  const e = waitForAnyLogoutAdded();
  block(matchDeleteLogout(e.id, ANY), function () {
    verifyLogoutExists(e.id);
  });
});

bthread("Logout update verification", function () {
  const e = waitForAnyLogoutUpdated();
  block(matchDeleteLogout(e.id, ANY), function () {
    verifyLogoutUpdated(e.id);
  });
});

bthread("Logout delete verification", function () {
  const e = waitForAnyLogoutDeleted();
  block(matchAddLogout(e.id, ANY), function () {
    verifyLogoutDoesNotExist(e.id);
  });
});

bthread("Logoutall create verification", function () {
  const e = waitForAnyLogoutallAdded();
  block(matchDeleteLogoutall(e.id, ANY), function () {
    verifyLogoutallExists(e.id);
  });
});

bthread("Logoutall update verification", function () {
  const e = waitForAnyLogoutallUpdated();
  block(matchDeleteLogoutall(e.id, ANY), function () {
    verifyLogoutallUpdated(e.id);
  });
});

bthread("Logoutall delete verification", function () {
  const e = waitForAnyLogoutallDeleted();
  block(matchAddLogoutall(e.id, ANY), function () {
    verifyLogoutallDoesNotExist(e.id);
  });
});

bthread("Lowerpriority create verification", function () {
  const e = waitForAnyLowerpriorityAdded();
  block(matchDeleteLowerpriority(e.id, ANY), function () {
    verifyLowerpriorityExists(e.id);
  });
});

bthread("Lowerpriority update verification", function () {
  const e = waitForAnyLowerpriorityUpdated();
  block(matchDeleteLowerpriority(e.id, ANY), function () {
    verifyLowerpriorityUpdated(e.id);
  });
});

bthread("Lowerpriority delete verification", function () {
  const e = waitForAnyLowerpriorityDeleted();
  block(matchAddLowerpriority(e.id, ANY), function () {
    verifyLowerpriorityDoesNotExist(e.id);
  });
});

bthread("Management create verification", function () {
  const e = waitForAnyManagementAdded();
  block(matchDeleteManagement(e.id, ANY), function () {
    verifyManagementExists(e.id);
  });
});

bthread("Management update verification", function () {
  const e = waitForAnyManagementUpdated();
  block(matchDeleteManagement(e.id, ANY), function () {
    verifyManagementUpdated(e.id);
  });
});

bthread("Management delete verification", function () {
  const e = waitForAnyManagementDeleted();
  block(matchAddManagement(e.id, ANY), function () {
    verifyManagementDoesNotExist(e.id);
  });
});

bthread("Mapper create verification", function () {
  const e = waitForAnyMapperAdded();
  block(matchDeleteMapper(e.id, ANY), function () {
    verifyMapperExists(e.id);
  });
});

bthread("Mapper update verification", function () {
  const e = waitForAnyMapperUpdated();
  block(matchDeleteMapper(e.id, ANY), function () {
    verifyMapperUpdated(e.id);
  });
});

bthread("Mapper delete verification", function () {
  const e = waitForAnyMapperDeleted();
  block(matchAddMapper(e.id, ANY), function () {
    verifyMapperDoesNotExist(e.id);
  });
});

bthread("Mappertype create verification", function () {
  const e = waitForAnyMappertypeAdded();
  block(matchDeleteMappertype(e.id, ANY), function () {
    verifyMappertypeExists(e.id);
  });
});

bthread("Mappertype update verification", function () {
  const e = waitForAnyMappertypeUpdated();
  block(matchDeleteMappertype(e.id, ANY), function () {
    verifyMappertypeUpdated(e.id);
  });
});

bthread("Mappertype delete verification", function () {
  const e = waitForAnyMappertypeDeleted();
  block(matchAddMappertype(e.id, ANY), function () {
    verifyMappertypeDoesNotExist(e.id);
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

bthread("Model create verification", function () {
  const e = waitForAnyModelAdded();
  block(matchDeleteModel(e.id, ANY), function () {
    verifyModelExists(e.id);
  });
});

bthread("Model update verification", function () {
  const e = waitForAnyModelUpdated();
  block(matchDeleteModel(e.id, ANY), function () {
    verifyModelUpdated(e.id);
  });
});

bthread("Model delete verification", function () {
  const e = waitForAnyModelDeleted();
  block(matchAddModel(e.id, ANY), function () {
    verifyModelDoesNotExist(e.id);
  });
});

bthread("Moveafter create verification", function () {
  const e = waitForAnyMoveafterAdded();
  block(matchDeleteMoveafter(e.id, ANY), function () {
    verifyMoveafterExists(e.id);
  });
});

bthread("Moveafter update verification", function () {
  const e = waitForAnyMoveafterUpdated();
  block(matchDeleteMoveafter(e.id, ANY), function () {
    verifyMoveafterUpdated(e.id);
  });
});

bthread("Moveafter delete verification", function () {
  const e = waitForAnyMoveafterDeleted();
  block(matchAddMoveafter(e.id, ANY), function () {
    verifyMoveafterDoesNotExist(e.id);
  });
});

bthread("Movetofirst create verification", function () {
  const e = waitForAnyMovetofirstAdded();
  block(matchDeleteMovetofirst(e.id, ANY), function () {
    verifyMovetofirstExists(e.id);
  });
});

bthread("Movetofirst update verification", function () {
  const e = waitForAnyMovetofirstUpdated();
  block(matchDeleteMovetofirst(e.id, ANY), function () {
    verifyMovetofirstUpdated(e.id);
  });
});

bthread("Movetofirst delete verification", function () {
  const e = waitForAnyMovetofirstDeleted();
  block(matchAddMovetofirst(e.id, ANY), function () {
    verifyMovetofirstDoesNotExist(e.id);
  });
});

bthread("Node create verification", function () {
  const e = waitForAnyNodeAdded();
  block(matchDeleteNode(e.id, ANY), function () {
    verifyNodeExists(e.id);
  });
});

bthread("Node update verification", function () {
  const e = waitForAnyNodeUpdated();
  block(matchDeleteNode(e.id, ANY), function () {
    verifyNodeUpdated(e.id);
  });
});

bthread("Node delete verification", function () {
  const e = waitForAnyNodeDeleted();
  block(matchAddNode(e.id, ANY), function () {
    verifyNodeDoesNotExist(e.id);
  });
});

bthread("Notgranted create verification", function () {
  const e = waitForAnyNotgrantedAdded();
  block(matchDeleteNotgranted(e.id, ANY), function () {
    verifyNotgrantedExists(e.id);
  });
});

bthread("Notgranted update verification", function () {
  const e = waitForAnyNotgrantedUpdated();
  block(matchDeleteNotgranted(e.id, ANY), function () {
    verifyNotgrantedUpdated(e.id);
  });
});

bthread("Notgranted delete verification", function () {
  const e = waitForAnyNotgrantedDeleted();
  block(matchAddNotgranted(e.id, ANY), function () {
    verifyNotgrantedDoesNotExist(e.id);
  });
});

bthread("Offlinesession create verification", function () {
  const e = waitForAnyOfflinesessionAdded();
  block(matchDeleteOfflinesession(e.id, ANY), function () {
    verifyOfflinesessionExists(e.id);
  });
});

bthread("Offlinesession update verification", function () {
  const e = waitForAnyOfflinesessionUpdated();
  block(matchDeleteOfflinesession(e.id, ANY), function () {
    verifyOfflinesessionUpdated(e.id);
  });
});

bthread("Offlinesession delete verification", function () {
  const e = waitForAnyOfflinesessionDeleted();
  block(matchAddOfflinesession(e.id, ANY), function () {
    verifyOfflinesessionDoesNotExist(e.id);
  });
});

bthread("Offlinesessioncount create verification", function () {
  const e = waitForAnyOfflinesessioncountAdded();
  block(matchDeleteOfflinesessioncount(e.id, ANY), function () {
    verifyOfflinesessioncountExists(e.id);
  });
});

bthread("Offlinesessioncount update verification", function () {
  const e = waitForAnyOfflinesessioncountUpdated();
  block(matchDeleteOfflinesessioncount(e.id, ANY), function () {
    verifyOfflinesessioncountUpdated(e.id);
  });
});

bthread("Offlinesessioncount delete verification", function () {
  const e = waitForAnyOfflinesessioncountDeleted();
  block(matchAddOfflinesessioncount(e.id, ANY), function () {
    verifyOfflinesessioncountDoesNotExist(e.id);
  });
});

bthread("Optionalclientscope create verification", function () {
  const e = waitForAnyOptionalclientscopeAdded();
  block(matchDeleteOptionalclientscope(e.id, ANY), function () {
    verifyOptionalclientscopeExists(e.id);
  });
});

bthread("Optionalclientscope update verification", function () {
  const e = waitForAnyOptionalclientscopeUpdated();
  block(matchDeleteOptionalclientscope(e.id, ANY), function () {
    verifyOptionalclientscopeUpdated(e.id);
  });
});

bthread("Optionalclientscope delete verification", function () {
  const e = waitForAnyOptionalclientscopeDeleted();
  block(matchAddOptionalclientscope(e.id, ANY), function () {
    verifyOptionalclientscopeDoesNotExist(e.id);
  });
});

bthread("Partialexport create verification", function () {
  const e = waitForAnyPartialexportAdded();
  block(matchDeletePartialexport(e.id, ANY), function () {
    verifyPartialexportExists(e.id);
  });
});

bthread("Partialexport update verification", function () {
  const e = waitForAnyPartialexportUpdated();
  block(matchDeletePartialexport(e.id, ANY), function () {
    verifyPartialexportUpdated(e.id);
  });
});

bthread("Partialexport delete verification", function () {
  const e = waitForAnyPartialexportDeleted();
  block(matchAddPartialexport(e.id, ANY), function () {
    verifyPartialexportDoesNotExist(e.id);
  });
});

bthread("Partialimport create verification", function () {
  const e = waitForAnyPartialimportAdded();
  block(matchDeletePartialimport(e.id, ANY), function () {
    verifyPartialimportExists(e.id);
  });
});

bthread("Partialimport update verification", function () {
  const e = waitForAnyPartialimportUpdated();
  block(matchDeletePartialimport(e.id, ANY), function () {
    verifyPartialimportUpdated(e.id);
  });
});

bthread("Partialimport delete verification", function () {
  const e = waitForAnyPartialimportDeleted();
  block(matchAddPartialimport(e.id, ANY), function () {
    verifyPartialimportDoesNotExist(e.id);
  });
});

bthread("Perclientconfigdescription create verification", function () {
  const e = waitForAnyPerclientconfigdescriptionAdded();
  block(matchDeletePerclientconfigdescription(e.id, ANY), function () {
    verifyPerclientconfigdescriptionExists(e.id);
  });
});

bthread("Perclientconfigdescription update verification", function () {
  const e = waitForAnyPerclientconfigdescriptionUpdated();
  block(matchDeletePerclientconfigdescription(e.id, ANY), function () {
    verifyPerclientconfigdescriptionUpdated(e.id);
  });
});

bthread("Perclientconfigdescription delete verification", function () {
  const e = waitForAnyPerclientconfigdescriptionDeleted();
  block(matchAddPerclientconfigdescription(e.id, ANY), function () {
    verifyPerclientconfigdescriptionDoesNotExist(e.id);
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

bthread("Policy create verification", function () {
  const e = waitForAnyPolicyAdded();
  block(matchDeletePolicy(e.id, ANY), function () {
    verifyPolicyExists(e.id);
  });
});

bthread("Policy update verification", function () {
  const e = waitForAnyPolicyUpdated();
  block(matchDeletePolicy(e.id, ANY), function () {
    verifyPolicyUpdated(e.id);
  });
});

bthread("Policy delete verification", function () {
  const e = waitForAnyPolicyDeleted();
  block(matchAddPolicy(e.id, ANY), function () {
    verifyPolicyDoesNotExist(e.id);
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

bthread("Protocol create verification", function () {
  const e = waitForAnyProtocolAdded();
  block(matchDeleteProtocol(e.id, ANY), function () {
    verifyProtocolExists(e.id);
  });
});

bthread("Protocol update verification", function () {
  const e = waitForAnyProtocolUpdated();
  block(matchDeleteProtocol(e.id, ANY), function () {
    verifyProtocolUpdated(e.id);
  });
});

bthread("Protocol delete verification", function () {
  const e = waitForAnyProtocolDeleted();
  block(matchAddProtocol(e.id, ANY), function () {
    verifyProtocolDoesNotExist(e.id);
  });
});

bthread("Protocolmapper create verification", function () {
  const e = waitForAnyProtocolmapperAdded();
  block(matchDeleteProtocolmapper(e.id, ANY), function () {
    verifyProtocolmapperExists(e.id);
  });
});

bthread("Protocolmapper update verification", function () {
  const e = waitForAnyProtocolmapperUpdated();
  block(matchDeleteProtocolmapper(e.id, ANY), function () {
    verifyProtocolmapperUpdated(e.id);
  });
});

bthread("Protocolmapper delete verification", function () {
  const e = waitForAnyProtocolmapperDeleted();
  block(matchAddProtocolmapper(e.id, ANY), function () {
    verifyProtocolmapperDoesNotExist(e.id);
  });
});

bthread("Provider create verification", function () {
  const e = waitForAnyProviderAdded();
  block(matchDeleteProvider(e.id, ANY), function () {
    verifyProviderExists(e.id);
  });
});

bthread("Provider update verification", function () {
  const e = waitForAnyProviderUpdated();
  block(matchDeleteProvider(e.id, ANY), function () {
    verifyProviderUpdated(e.id);
  });
});

bthread("Provider delete verification", function () {
  const e = waitForAnyProviderDeleted();
  block(matchAddProvider(e.id, ANY), function () {
    verifyProviderDoesNotExist(e.id);
  });
});

bthread("Pushrevocation create verification", function () {
  const e = waitForAnyPushrevocationAdded();
  block(matchDeletePushrevocation(e.id, ANY), function () {
    verifyPushrevocationExists(e.id);
  });
});

bthread("Pushrevocation update verification", function () {
  const e = waitForAnyPushrevocationUpdated();
  block(matchDeletePushrevocation(e.id, ANY), function () {
    verifyPushrevocationUpdated(e.id);
  });
});

bthread("Pushrevocation delete verification", function () {
  const e = waitForAnyPushrevocationDeleted();
  block(matchAddPushrevocation(e.id, ANY), function () {
    verifyPushrevocationDoesNotExist(e.id);
  });
});

bthread("Raisepriority create verification", function () {
  const e = waitForAnyRaisepriorityAdded();
  block(matchDeleteRaisepriority(e.id, ANY), function () {
    verifyRaisepriorityExists(e.id);
  });
});

bthread("Raisepriority update verification", function () {
  const e = waitForAnyRaisepriorityUpdated();
  block(matchDeleteRaisepriority(e.id, ANY), function () {
    verifyRaisepriorityUpdated(e.id);
  });
});

bthread("Raisepriority delete verification", function () {
  const e = waitForAnyRaisepriorityDeleted();
  block(matchAddRaisepriority(e.id, ANY), function () {
    verifyRaisepriorityDoesNotExist(e.id);
  });
});

bthread("Realm create verification", function () {
  const e = waitForAnyRealmAdded();
  block(matchDeleteRealm(e.id, ANY), function () {
    verifyRealmExists(e.id);
  });
});

bthread("Realm update verification", function () {
  const e = waitForAnyRealmUpdated();
  block(matchDeleteRealm(e.id, ANY), function () {
    verifyRealmUpdated(e.id);
  });
});

bthread("Realm delete verification", function () {
  const e = waitForAnyRealmDeleted();
  block(matchAddRealm(e.id, ANY), function () {
    verifyRealmDoesNotExist(e.id);
  });
});

bthread("Registerrequiredaction create verification", function () {
  const e = waitForAnyRegisterrequiredactionAdded();
  block(matchDeleteRegisterrequiredaction(e.id, ANY), function () {
    verifyRegisterrequiredactionExists(e.id);
  });
});

bthread("Registerrequiredaction update verification", function () {
  const e = waitForAnyRegisterrequiredactionUpdated();
  block(matchDeleteRegisterrequiredaction(e.id, ANY), function () {
    verifyRegisterrequiredactionUpdated(e.id);
  });
});

bthread("Registerrequiredaction delete verification", function () {
  const e = waitForAnyRegisterrequiredactionDeleted();
  block(matchAddRegisterrequiredaction(e.id, ANY), function () {
    verifyRegisterrequiredactionDoesNotExist(e.id);
  });
});

bthread("Registrationaccesstoken create verification", function () {
  const e = waitForAnyRegistrationaccesstokenAdded();
  block(matchDeleteRegistrationaccesstoken(e.id, ANY), function () {
    verifyRegistrationaccesstokenExists(e.id);
  });
});

bthread("Registrationaccesstoken update verification", function () {
  const e = waitForAnyRegistrationaccesstokenUpdated();
  block(matchDeleteRegistrationaccesstoken(e.id, ANY), function () {
    verifyRegistrationaccesstokenUpdated(e.id);
  });
});

bthread("Registrationaccesstoken delete verification", function () {
  const e = waitForAnyRegistrationaccesstokenDeleted();
  block(matchAddRegistrationaccesstoken(e.id, ANY), function () {
    verifyRegistrationaccesstokenDoesNotExist(e.id);
  });
});

bthread("Requiredaction create verification", function () {
  const e = waitForAnyRequiredactionAdded();
  block(matchDeleteRequiredaction(e.id, ANY), function () {
    verifyRequiredactionExists(e.id);
  });
});

bthread("Requiredaction update verification", function () {
  const e = waitForAnyRequiredactionUpdated();
  block(matchDeleteRequiredaction(e.id, ANY), function () {
    verifyRequiredactionUpdated(e.id);
  });
});

bthread("Requiredaction delete verification", function () {
  const e = waitForAnyRequiredactionDeleted();
  block(matchAddRequiredaction(e.id, ANY), function () {
    verifyRequiredactionDoesNotExist(e.id);
  });
});

bthread("Resetpassword create verification", function () {
  const e = waitForAnyResetpasswordAdded();
  block(matchDeleteResetpassword(e.id, ANY), function () {
    verifyResetpasswordExists(e.id);
  });
});

bthread("Resetpassword update verification", function () {
  const e = waitForAnyResetpasswordUpdated();
  block(matchDeleteResetpassword(e.id, ANY), function () {
    verifyResetpasswordUpdated(e.id);
  });
});

bthread("Resetpassword delete verification", function () {
  const e = waitForAnyResetpasswordDeleted();
  block(matchAddResetpassword(e.id, ANY), function () {
    verifyResetpasswordDoesNotExist(e.id);
  });
});

bthread("Resetpasswordemail create verification", function () {
  const e = waitForAnyResetpasswordemailAdded();
  block(matchDeleteResetpasswordemail(e.id, ANY), function () {
    verifyResetpasswordemailExists(e.id);
  });
});

bthread("Resetpasswordemail update verification", function () {
  const e = waitForAnyResetpasswordemailUpdated();
  block(matchDeleteResetpasswordemail(e.id, ANY), function () {
    verifyResetpasswordemailUpdated(e.id);
  });
});

bthread("Resetpasswordemail delete verification", function () {
  const e = waitForAnyResetpasswordemailDeleted();
  block(matchAddResetpasswordemail(e.id, ANY), function () {
    verifyResetpasswordemailDoesNotExist(e.id);
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

bthread("Rolemapping create verification", function () {
  const e = waitForAnyRolemappingAdded();
  block(matchDeleteRolemapping(e.id, ANY), function () {
    verifyRolemappingExists(e.id);
  });
});

bthread("Rolemapping update verification", function () {
  const e = waitForAnyRolemappingUpdated();
  block(matchDeleteRolemapping(e.id, ANY), function () {
    verifyRolemappingUpdated(e.id);
  });
});

bthread("Rolemapping delete verification", function () {
  const e = waitForAnyRolemappingDeleted();
  block(matchAddRolemapping(e.id, ANY), function () {
    verifyRolemappingDoesNotExist(e.id);
  });
});

bthread("Rolesbyid create verification", function () {
  const e = waitForAnyRolesbyidAdded();
  block(matchDeleteRolesbyid(e.id, ANY), function () {
    verifyRolesbyidExists(e.id);
  });
});

bthread("Rolesbyid update verification", function () {
  const e = waitForAnyRolesbyidUpdated();
  block(matchDeleteRolesbyid(e.id, ANY), function () {
    verifyRolesbyidUpdated(e.id);
  });
});

bthread("Rolesbyid delete verification", function () {
  const e = waitForAnyRolesbyidDeleted();
  block(matchAddRolesbyid(e.id, ANY), function () {
    verifyRolesbyidDoesNotExist(e.id);
  });
});

bthread("Rotated create verification", function () {
  const e = waitForAnyRotatedAdded();
  block(matchDeleteRotated(e.id, ANY), function () {
    verifyRotatedExists(e.id);
  });
});

bthread("Rotated update verification", function () {
  const e = waitForAnyRotatedUpdated();
  block(matchDeleteRotated(e.id, ANY), function () {
    verifyRotatedUpdated(e.id);
  });
});

bthread("Rotated delete verification", function () {
  const e = waitForAnyRotatedDeleted();
  block(matchAddRotated(e.id, ANY), function () {
    verifyRotatedDoesNotExist(e.id);
  });
});

bthread("Scopemapping create verification", function () {
  const e = waitForAnyScopemappingAdded();
  block(matchDeleteScopemapping(e.id, ANY), function () {
    verifyScopemappingExists(e.id);
  });
});

bthread("Scopemapping update verification", function () {
  const e = waitForAnyScopemappingUpdated();
  block(matchDeleteScopemapping(e.id, ANY), function () {
    verifyScopemappingUpdated(e.id);
  });
});

bthread("Scopemapping delete verification", function () {
  const e = waitForAnyScopemappingDeleted();
  block(matchAddScopemapping(e.id, ANY), function () {
    verifyScopemappingDoesNotExist(e.id);
  });
});

bthread("Sendverifyemail create verification", function () {
  const e = waitForAnySendverifyemailAdded();
  block(matchDeleteSendverifyemail(e.id, ANY), function () {
    verifySendverifyemailExists(e.id);
  });
});

bthread("Sendverifyemail update verification", function () {
  const e = waitForAnySendverifyemailUpdated();
  block(matchDeleteSendverifyemail(e.id, ANY), function () {
    verifySendverifyemailUpdated(e.id);
  });
});

bthread("Sendverifyemail delete verification", function () {
  const e = waitForAnySendverifyemailDeleted();
  block(matchAddSendverifyemail(e.id, ANY), function () {
    verifySendverifyemailDoesNotExist(e.id);
  });
});

bthread("Serviceaccountuser create verification", function () {
  const e = waitForAnyServiceaccountuserAdded();
  block(matchDeleteServiceaccountuser(e.id, ANY), function () {
    verifyServiceaccountuserExists(e.id);
  });
});

bthread("Serviceaccountuser update verification", function () {
  const e = waitForAnyServiceaccountuserUpdated();
  block(matchDeleteServiceaccountuser(e.id, ANY), function () {
    verifyServiceaccountuserUpdated(e.id);
  });
});

bthread("Serviceaccountuser delete verification", function () {
  const e = waitForAnyServiceaccountuserDeleted();
  block(matchAddServiceaccountuser(e.id, ANY), function () {
    verifyServiceaccountuserDoesNotExist(e.id);
  });
});

bthread("Session create verification", function () {
  const e = waitForAnySessionAdded();
  block(matchDeleteSession(e.id, ANY), function () {
    verifySessionExists(e.id);
  });
});

bthread("Session update verification", function () {
  const e = waitForAnySessionUpdated();
  block(matchDeleteSession(e.id, ANY), function () {
    verifySessionUpdated(e.id);
  });
});

bthread("Session delete verification", function () {
  const e = waitForAnySessionDeleted();
  block(matchAddSession(e.id, ANY), function () {
    verifySessionDoesNotExist(e.id);
  });
});

bthread("Sessioncount create verification", function () {
  const e = waitForAnySessioncountAdded();
  block(matchDeleteSessioncount(e.id, ANY), function () {
    verifySessioncountExists(e.id);
  });
});

bthread("Sessioncount update verification", function () {
  const e = waitForAnySessioncountUpdated();
  block(matchDeleteSessioncount(e.id, ANY), function () {
    verifySessioncountUpdated(e.id);
  });
});

bthread("Sessioncount delete verification", function () {
  const e = waitForAnySessioncountDeleted();
  block(matchAddSessioncount(e.id, ANY), function () {
    verifySessioncountDoesNotExist(e.id);
  });
});

bthread("Subcomponenttype create verification", function () {
  const e = waitForAnySubcomponenttypeAdded();
  block(matchDeleteSubcomponenttype(e.id, ANY), function () {
    verifySubcomponenttypeExists(e.id);
  });
});

bthread("Subcomponenttype update verification", function () {
  const e = waitForAnySubcomponenttypeUpdated();
  block(matchDeleteSubcomponenttype(e.id, ANY), function () {
    verifySubcomponenttypeUpdated(e.id);
  });
});

bthread("Subcomponenttype delete verification", function () {
  const e = waitForAnySubcomponenttypeDeleted();
  block(matchAddSubcomponenttype(e.id, ANY), function () {
    verifySubcomponenttypeDoesNotExist(e.id);
  });
});

bthread("Testnodesavailable create verification", function () {
  const e = waitForAnyTestnodesavailableAdded();
  block(matchDeleteTestnodesavailable(e.id, ANY), function () {
    verifyTestnodesavailableExists(e.id);
  });
});

bthread("Testnodesavailable update verification", function () {
  const e = waitForAnyTestnodesavailableUpdated();
  block(matchDeleteTestnodesavailable(e.id, ANY), function () {
    verifyTestnodesavailableUpdated(e.id);
  });
});

bthread("Testnodesavailable delete verification", function () {
  const e = waitForAnyTestnodesavailableDeleted();
  block(matchAddTestnodesavailable(e.id, ANY), function () {
    verifyTestnodesavailableDoesNotExist(e.id);
  });
});

bthread("Testsmtpconnection create verification", function () {
  const e = waitForAnyTestsmtpconnectionAdded();
  block(matchDeleteTestsmtpconnection(e.id, ANY), function () {
    verifyTestsmtpconnectionExists(e.id);
  });
});

bthread("Testsmtpconnection update verification", function () {
  const e = waitForAnyTestsmtpconnectionUpdated();
  block(matchDeleteTestsmtpconnection(e.id, ANY), function () {
    verifyTestsmtpconnectionUpdated(e.id);
  });
});

bthread("Testsmtpconnection delete verification", function () {
  const e = waitForAnyTestsmtpconnectionDeleted();
  block(matchAddTestsmtpconnection(e.id, ANY), function () {
    verifyTestsmtpconnectionDoesNotExist(e.id);
  });
});

bthread("Unregisteredrequiredaction create verification", function () {
  const e = waitForAnyUnregisteredrequiredactionAdded();
  block(matchDeleteUnregisteredrequiredaction(e.id, ANY), function () {
    verifyUnregisteredrequiredactionExists(e.id);
  });
});

bthread("Unregisteredrequiredaction update verification", function () {
  const e = waitForAnyUnregisteredrequiredactionUpdated();
  block(matchDeleteUnregisteredrequiredaction(e.id, ANY), function () {
    verifyUnregisteredrequiredactionUpdated(e.id);
  });
});

bthread("Unregisteredrequiredaction delete verification", function () {
  const e = waitForAnyUnregisteredrequiredactionDeleted();
  block(matchAddUnregisteredrequiredaction(e.id, ANY), function () {
    verifyUnregisteredrequiredactionDoesNotExist(e.id);
  });
});

bthread("Upload create verification", function () {
  const e = waitForAnyUploadAdded();
  block(matchDeleteUpload(e.id, ANY), function () {
    verifyUploadExists(e.id);
  });
});

bthread("Upload update verification", function () {
  const e = waitForAnyUploadUpdated();
  block(matchDeleteUpload(e.id, ANY), function () {
    verifyUploadUpdated(e.id);
  });
});

bthread("Upload delete verification", function () {
  const e = waitForAnyUploadDeleted();
  block(matchAddUpload(e.id, ANY), function () {
    verifyUploadDoesNotExist(e.id);
  });
});

bthread("Uploadcertificate create verification", function () {
  const e = waitForAnyUploadcertificateAdded();
  block(matchDeleteUploadcertificate(e.id, ANY), function () {
    verifyUploadcertificateExists(e.id);
  });
});

bthread("Uploadcertificate update verification", function () {
  const e = waitForAnyUploadcertificateUpdated();
  block(matchDeleteUploadcertificate(e.id, ANY), function () {
    verifyUploadcertificateUpdated(e.id);
  });
});

bthread("Uploadcertificate delete verification", function () {
  const e = waitForAnyUploadcertificateDeleted();
  block(matchAddUploadcertificate(e.id, ANY), function () {
    verifyUploadcertificateDoesNotExist(e.id);
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

bthread("Userlabel create verification", function () {
  const e = waitForAnyUserlabelAdded();
  block(matchDeleteUserlabel(e.id, ANY), function () {
    verifyUserlabelExists(e.id);
  });
});

bthread("Userlabel update verification", function () {
  const e = waitForAnyUserlabelUpdated();
  block(matchDeleteUserlabel(e.id, ANY), function () {
    verifyUserlabelUpdated(e.id);
  });
});

bthread("Userlabel delete verification", function () {
  const e = waitForAnyUserlabelDeleted();
  block(matchAddUserlabel(e.id, ANY), function () {
    verifyUserlabelDoesNotExist(e.id);
  });
});

bthread("Usersession create verification", function () {
  const e = waitForAnyUsersessionAdded();
  block(matchDeleteUsersession(e.id, ANY), function () {
    verifyUsersessionExists(e.id);
  });
});

bthread("Usersession update verification", function () {
  const e = waitForAnyUsersessionUpdated();
  block(matchDeleteUsersession(e.id, ANY), function () {
    verifyUsersessionUpdated(e.id);
  });
});

bthread("Usersession delete verification", function () {
  const e = waitForAnyUsersessionDeleted();
  block(matchAddUsersession(e.id, ANY), function () {
    verifyUsersessionDoesNotExist(e.id);
  });
});

bthread("Usersmanagementpermission create verification", function () {
  const e = waitForAnyUsersmanagementpermissionAdded();
  block(matchDeleteUsersmanagementpermission(e.id, ANY), function () {
    verifyUsersmanagementpermissionExists(e.id);
  });
});

bthread("Usersmanagementpermission update verification", function () {
  const e = waitForAnyUsersmanagementpermissionUpdated();
  block(matchDeleteUsersmanagementpermission(e.id, ANY), function () {
    verifyUsersmanagementpermissionUpdated(e.id);
  });
});

bthread("Usersmanagementpermission delete verification", function () {
  const e = waitForAnyUsersmanagementpermissionDeleted();
  block(matchAddUsersmanagementpermission(e.id, ANY), function () {
    verifyUsersmanagementpermissionDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Addmodel", function () {
  const x = waitForAnyAddmodelAdded();
  block(matchAddAddmodel(x.id, ANY), function () {});
});

bthread("Guard: Unique Adminevent", function () {
  const x = waitForAnyAdmineventAdded();
  block(matchAddAdminevent(x.id, ANY), function () {});
});

bthread("Guard: Unique Attackdetection", function () {
  const x = waitForAnyAttackdetectionAdded();
  block(matchAddAttackdetection(x.id, ANY), function () {});
});

bthread("Guard: Unique Authentication", function () {
  const x = waitForAnyAuthenticationAdded();
  block(matchAddAuthentication(x.id, ANY), function () {});
});

bthread("Guard: Unique Authenticatorprovider", function () {
  const x = waitForAnyAuthenticatorproviderAdded();
  block(matchAddAuthenticatorprovider(x.id, ANY), function () {});
});

bthread("Guard: Unique Available", function () {
  const x = waitForAnyAvailableAdded();
  block(matchAddAvailable(x.id, ANY), function () {});
});

bthread("Guard: Unique Bruteforce", function () {
  const x = waitForAnyBruteforceAdded();
  block(matchAddBruteforce(x.id, ANY), function () {});
});

bthread("Guard: Unique Certificate", function () {
  const x = waitForAnyCertificateAdded();
  block(matchAddCertificate(x.id, ANY), function () {});
});

bthread("Guard: Unique Children", function () {
  const x = waitForAnyChildrenAdded();
  block(matchAddChildren(x.id, ANY), function () {});
});

bthread("Guard: Unique Client", function () {
  const x = waitForAnyClientAdded();
  block(matchAddClient(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientauthenticatorprovider", function () {
  const x = waitForAnyClientauthenticatorproviderAdded();
  block(matchAddClientauthenticatorprovider(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientdescriptionconverter", function () {
  const x = waitForAnyClientdescriptionconverterAdded();
  block(matchAddClientdescriptionconverter(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientpolicy", function () {
  const x = waitForAnyClientpolicyAdded();
  block(matchAddClientpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientregistrationpolicy", function () {
  const x = waitForAnyClientregistrationpolicyAdded();
  block(matchAddClientregistrationpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientscope", function () {
  const x = waitForAnyClientscopeAdded();
  block(matchAddClientscope(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientsecret", function () {
  const x = waitForAnyClientsecretAdded();
  block(matchAddClientsecret(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientsessionstat", function () {
  const x = waitForAnyClientsessionstatAdded();
  block(matchAddClientsessionstat(x.id, ANY), function () {});
});

bthread("Guard: Unique Clientsinitialacces", function () {
  const x = waitForAnyClientsinitialaccesAdded();
  block(matchAddClientsinitialacces(x.id, ANY), function () {});
});

bthread("Guard: Unique Clienttemplate", function () {
  const x = waitForAnyClienttemplateAdded();
  block(matchAddClienttemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Component", function () {
  const x = waitForAnyComponentAdded();
  block(matchAddComponent(x.id, ANY), function () {});
});

bthread("Guard: Unique Composite", function () {
  const x = waitForAnyCompositeAdded();
  block(matchAddComposite(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Configdescription", function () {
  const x = waitForAnyConfigdescriptionAdded();
  block(matchAddConfigdescription(x.id, ANY), function () {});
});

bthread("Guard: Unique Configureduserstoragecredentialtype", function () {
  const x = waitForAnyConfigureduserstoragecredentialtypeAdded();
  block(matchAddConfigureduserstoragecredentialtype(x.id, ANY), function () {});
});

bthread("Guard: Unique Consent", function () {
  const x = waitForAnyConsentAdded();
  block(matchAddConsent(x.id, ANY), function () {});
});

bthread("Guard: Unique Copy", function () {
  const x = waitForAnyCopyAdded();
  block(matchAddCopy(x.id, ANY), function () {});
});

bthread("Guard: Unique Count", function () {
  const x = waitForAnyCountAdded();
  block(matchAddCount(x.id, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  block(matchAddCredential(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentialregistrator", function () {
  const x = waitForAnyCredentialregistratorAdded();
  block(matchAddCredentialregistrator(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultclientscope", function () {
  const x = waitForAnyDefaultclientscopeAdded();
  block(matchAddDefaultclientscope(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultdefaultclientscope", function () {
  const x = waitForAnyDefaultdefaultclientscopeAdded();
  block(matchAddDefaultdefaultclientscope(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultgroup", function () {
  const x = waitForAnyDefaultgroupAdded();
  block(matchAddDefaultgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultoptionalclientscope", function () {
  const x = waitForAnyDefaultoptionalclientscopeAdded();
  block(matchAddDefaultoptionalclientscope(x.id, ANY), function () {});
});

bthread("Guard: Unique Disablecredentialtype", function () {
  const x = waitForAnyDisablecredentialtypeAdded();
  block(matchAddDisablecredentialtype(x.id, ANY), function () {});
});

bthread("Guard: Unique Download", function () {
  const x = waitForAnyDownloadAdded();
  block(matchAddDownload(x.id, ANY), function () {});
});

bthread("Guard: Unique Evaluatescope", function () {
  const x = waitForAnyEvaluatescopeAdded();
  block(matchAddEvaluatescope(x.id, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  block(matchAddEvent(x.id, ANY), function () {});
});

bthread("Guard: Unique Executeactionsemail", function () {
  const x = waitForAnyExecuteactionsemailAdded();
  block(matchAddExecuteactionsemail(x.id, ANY), function () {});
});

bthread("Guard: Unique Execution", function () {
  const x = waitForAnyExecutionAdded();
  block(matchAddExecution(x.id, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  block(matchAddExport(x.id, ANY), function () {});
});

bthread("Guard: Unique Federatedidentity", function () {
  const x = waitForAnyFederatedidentityAdded();
  block(matchAddFederatedidentity(x.id, ANY), function () {});
});

bthread("Guard: Unique Flow", function () {
  const x = waitForAnyFlowAdded();
  block(matchAddFlow(x.id, ANY), function () {});
});

bthread("Guard: Unique Formactionprovider", function () {
  const x = waitForAnyFormactionproviderAdded();
  block(matchAddFormactionprovider(x.id, ANY), function () {});
});

bthread("Guard: Unique Formprovider", function () {
  const x = waitForAnyFormproviderAdded();
  block(matchAddFormprovider(x.id, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  block(matchAddGenerate(x.id, ANY), function () {});
});

bthread("Guard: Unique Generateanddownload", function () {
  const x = waitForAnyGenerateanddownloadAdded();
  block(matchAddGenerateanddownload(x.id, ANY), function () {});
});

bthread("Guard: Unique Generateexampleaccesstoken", function () {
  const x = waitForAnyGenerateexampleaccesstokenAdded();
  block(matchAddGenerateexampleaccesstoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Generateexampleidtoken", function () {
  const x = waitForAnyGenerateexampleidtokenAdded();
  block(matchAddGenerateexampleidtoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Generateexampleuserinfo", function () {
  const x = waitForAnyGenerateexampleuserinfoAdded();
  block(matchAddGenerateexampleuserinfo(x.id, ANY), function () {});
});

bthread("Guard: Unique Granted", function () {
  const x = waitForAnyGrantedAdded();
  block(matchAddGranted(x.id, ANY), function () {});
});

bthread("Guard: Unique Group", function () {
  const x = waitForAnyGroupAdded();
  block(matchAddGroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Groupbypath", function () {
  const x = waitForAnyGroupbypathAdded();
  block(matchAddGroupbypath(x.id, ANY), function () {});
});

bthread("Guard: Unique Identityprovider", function () {
  const x = waitForAnyIdentityproviderAdded();
  block(matchAddIdentityprovider(x.id, ANY), function () {});
});

bthread("Guard: Unique Impersonation", function () {
  const x = waitForAnyImpersonationAdded();
  block(matchAddImpersonation(x.id, ANY), function () {});
});

bthread("Guard: Unique Importconfig", function () {
  const x = waitForAnyImportconfigAdded();
  block(matchAddImportconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Installation", function () {
  const x = waitForAnyInstallationAdded();
  block(matchAddInstallation(x.id, ANY), function () {});
});

bthread("Guard: Unique Instance", function () {
  const x = waitForAnyInstanceAdded();
  block(matchAddInstance(x.id, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  block(matchAddKey(x.id, ANY), function () {});
});

bthread("Guard: Unique Localization", function () {
  const x = waitForAnyLocalizationAdded();
  block(matchAddLocalization(x.id, ANY), function () {});
});

bthread("Guard: Unique Logout", function () {
  const x = waitForAnyLogoutAdded();
  block(matchAddLogout(x.id, ANY), function () {});
});

bthread("Guard: Unique Logoutall", function () {
  const x = waitForAnyLogoutallAdded();
  block(matchAddLogoutall(x.id, ANY), function () {});
});

bthread("Guard: Unique Lowerpriority", function () {
  const x = waitForAnyLowerpriorityAdded();
  block(matchAddLowerpriority(x.id, ANY), function () {});
});

bthread("Guard: Unique Management", function () {
  const x = waitForAnyManagementAdded();
  block(matchAddManagement(x.id, ANY), function () {});
});

bthread("Guard: Unique Mapper", function () {
  const x = waitForAnyMapperAdded();
  block(matchAddMapper(x.id, ANY), function () {});
});

bthread("Guard: Unique Mappertype", function () {
  const x = waitForAnyMappertypeAdded();
  block(matchAddMappertype(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Model", function () {
  const x = waitForAnyModelAdded();
  block(matchAddModel(x.id, ANY), function () {});
});

bthread("Guard: Unique Moveafter", function () {
  const x = waitForAnyMoveafterAdded();
  block(matchAddMoveafter(x.id, ANY), function () {});
});

bthread("Guard: Unique Movetofirst", function () {
  const x = waitForAnyMovetofirstAdded();
  block(matchAddMovetofirst(x.id, ANY), function () {});
});

bthread("Guard: Unique Node", function () {
  const x = waitForAnyNodeAdded();
  block(matchAddNode(x.id, ANY), function () {});
});

bthread("Guard: Unique Notgranted", function () {
  const x = waitForAnyNotgrantedAdded();
  block(matchAddNotgranted(x.id, ANY), function () {});
});

bthread("Guard: Unique Offlinesession", function () {
  const x = waitForAnyOfflinesessionAdded();
  block(matchAddOfflinesession(x.id, ANY), function () {});
});

bthread("Guard: Unique Offlinesessioncount", function () {
  const x = waitForAnyOfflinesessioncountAdded();
  block(matchAddOfflinesessioncount(x.id, ANY), function () {});
});

bthread("Guard: Unique Optionalclientscope", function () {
  const x = waitForAnyOptionalclientscopeAdded();
  block(matchAddOptionalclientscope(x.id, ANY), function () {});
});

bthread("Guard: Unique Partialexport", function () {
  const x = waitForAnyPartialexportAdded();
  block(matchAddPartialexport(x.id, ANY), function () {});
});

bthread("Guard: Unique Partialimport", function () {
  const x = waitForAnyPartialimportAdded();
  block(matchAddPartialimport(x.id, ANY), function () {});
});

bthread("Guard: Unique Perclientconfigdescription", function () {
  const x = waitForAnyPerclientconfigdescriptionAdded();
  block(matchAddPerclientconfigdescription(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Policy", function () {
  const x = waitForAnyPolicyAdded();
  block(matchAddPolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Profile", function () {
  const x = waitForAnyProfileAdded();
  block(matchAddProfile(x.id, ANY), function () {});
});

bthread("Guard: Unique Protocol", function () {
  const x = waitForAnyProtocolAdded();
  block(matchAddProtocol(x.id, ANY), function () {});
});

bthread("Guard: Unique Protocolmapper", function () {
  const x = waitForAnyProtocolmapperAdded();
  block(matchAddProtocolmapper(x.id, ANY), function () {});
});

bthread("Guard: Unique Provider", function () {
  const x = waitForAnyProviderAdded();
  block(matchAddProvider(x.id, ANY), function () {});
});

bthread("Guard: Unique Pushrevocation", function () {
  const x = waitForAnyPushrevocationAdded();
  block(matchAddPushrevocation(x.id, ANY), function () {});
});

bthread("Guard: Unique Raisepriority", function () {
  const x = waitForAnyRaisepriorityAdded();
  block(matchAddRaisepriority(x.id, ANY), function () {});
});

bthread("Guard: Unique Realm", function () {
  const x = waitForAnyRealmAdded();
  block(matchAddRealm(x.id, ANY), function () {});
});

bthread("Guard: Unique Registerrequiredaction", function () {
  const x = waitForAnyRegisterrequiredactionAdded();
  block(matchAddRegisterrequiredaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Registrationaccesstoken", function () {
  const x = waitForAnyRegistrationaccesstokenAdded();
  block(matchAddRegistrationaccesstoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Requiredaction", function () {
  const x = waitForAnyRequiredactionAdded();
  block(matchAddRequiredaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Resetpassword", function () {
  const x = waitForAnyResetpasswordAdded();
  block(matchAddResetpassword(x.id, ANY), function () {});
});

bthread("Guard: Unique Resetpasswordemail", function () {
  const x = waitForAnyResetpasswordemailAdded();
  block(matchAddResetpasswordemail(x.id, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  block(matchAddRole(x.id, ANY), function () {});
});

bthread("Guard: Unique Rolemapping", function () {
  const x = waitForAnyRolemappingAdded();
  block(matchAddRolemapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Rolesbyid", function () {
  const x = waitForAnyRolesbyidAdded();
  block(matchAddRolesbyid(x.id, ANY), function () {});
});

bthread("Guard: Unique Rotated", function () {
  const x = waitForAnyRotatedAdded();
  block(matchAddRotated(x.id, ANY), function () {});
});

bthread("Guard: Unique Scopemapping", function () {
  const x = waitForAnyScopemappingAdded();
  block(matchAddScopemapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Sendverifyemail", function () {
  const x = waitForAnySendverifyemailAdded();
  block(matchAddSendverifyemail(x.id, ANY), function () {});
});

bthread("Guard: Unique Serviceaccountuser", function () {
  const x = waitForAnyServiceaccountuserAdded();
  block(matchAddServiceaccountuser(x.id, ANY), function () {});
});

bthread("Guard: Unique Session", function () {
  const x = waitForAnySessionAdded();
  block(matchAddSession(x.id, ANY), function () {});
});

bthread("Guard: Unique Sessioncount", function () {
  const x = waitForAnySessioncountAdded();
  block(matchAddSessioncount(x.id, ANY), function () {});
});

bthread("Guard: Unique Subcomponenttype", function () {
  const x = waitForAnySubcomponenttypeAdded();
  block(matchAddSubcomponenttype(x.id, ANY), function () {});
});

bthread("Guard: Unique Testnodesavailable", function () {
  const x = waitForAnyTestnodesavailableAdded();
  block(matchAddTestnodesavailable(x.id, ANY), function () {});
});

bthread("Guard: Unique Testsmtpconnection", function () {
  const x = waitForAnyTestsmtpconnectionAdded();
  block(matchAddTestsmtpconnection(x.id, ANY), function () {});
});

bthread("Guard: Unique Unregisteredrequiredaction", function () {
  const x = waitForAnyUnregisteredrequiredactionAdded();
  block(matchAddUnregisteredrequiredaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Upload", function () {
  const x = waitForAnyUploadAdded();
  block(matchAddUpload(x.id, ANY), function () {});
});

bthread("Guard: Unique Uploadcertificate", function () {
  const x = waitForAnyUploadcertificateAdded();
  block(matchAddUploadcertificate(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Userlabel", function () {
  const x = waitForAnyUserlabelAdded();
  block(matchAddUserlabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Usersession", function () {
  const x = waitForAnyUsersessionAdded();
  block(matchAddUsersession(x.id, ANY), function () {});
});

bthread("Guard: Unique Usersmanagementpermission", function () {
  const x = waitForAnyUsersmanagementpermissionAdded();
  block(matchAddUsersmanagementpermission(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
