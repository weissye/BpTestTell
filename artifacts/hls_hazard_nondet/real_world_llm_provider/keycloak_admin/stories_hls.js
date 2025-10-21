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
  deleteAddmodel(x.id);
});

bthread("AdmineventLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAdminevent(x.id);
  updateAdminevent(x.id);
  updateAdminevent(x.id);
  verifyAdmineventExists(x.id);
  verifyAdmineventUpdated(x.id);
  deleteAdminevent(x.id);
});

bthread("AttackdetectionLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAttackdetection(x.id);
  updateAttackdetection(x.id);
  updateAttackdetection(x.id);
  verifyAttackdetectionExists(x.id);
  verifyAttackdetectionUpdated(x.id);
  deleteAttackdetection(x.id);
});

bthread("AuthenticationLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthentication(x.id);
  updateAuthentication(x.id);
  updateAuthentication(x.id);
  verifyAuthenticationExists(x.id);
  verifyAuthenticationUpdated(x.id);
  deleteAuthentication(x.id);
});

bthread("AuthenticatorproviderLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuthenticatorprovider(x.id);
  updateAuthenticatorprovider(x.id);
  updateAuthenticatorprovider(x.id);
  verifyAuthenticatorproviderExists(x.id);
  verifyAuthenticatorproviderUpdated(x.id);
  deleteAuthenticatorprovider(x.id);
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

bthread("BruteforceLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBruteforce(x.id);
  updateBruteforce(x.id);
  updateBruteforce(x.id);
  verifyBruteforceExists(x.id);
  verifyBruteforceUpdated(x.id);
  deleteBruteforce(x.id);
});

bthread("CertificateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCertificate(x.id);
  updateCertificate(x.id);
  updateCertificate(x.id);
  verifyCertificateExists(x.id);
  verifyCertificateUpdated(x.id);
  deleteCertificate(x.id);
});

bthread("ChildrenLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChildren(x.id);
  updateChildren(x.id);
  updateChildren(x.id);
  verifyChildrenExists(x.id);
  verifyChildrenUpdated(x.id);
  deleteChildren(x.id);
});

bthread("ClientLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClient(x.id);
  updateClient(x.id);
  updateClient(x.id);
  verifyClientExists(x.id);
  verifyClientUpdated(x.id);
  deleteClient(x.id);
});

bthread("ClientauthenticatorproviderLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientauthenticatorprovider(x.id);
  updateClientauthenticatorprovider(x.id);
  updateClientauthenticatorprovider(x.id);
  verifyClientauthenticatorproviderExists(x.id);
  verifyClientauthenticatorproviderUpdated(x.id);
  deleteClientauthenticatorprovider(x.id);
});

bthread("ClientdescriptionconverterLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientdescriptionconverter(x.id);
  updateClientdescriptionconverter(x.id);
  updateClientdescriptionconverter(x.id);
  verifyClientdescriptionconverterExists(x.id);
  verifyClientdescriptionconverterUpdated(x.id);
  deleteClientdescriptionconverter(x.id);
});

bthread("ClientpolicyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientpolicy(x.id);
  updateClientpolicy(x.id);
  updateClientpolicy(x.id);
  verifyClientpolicyExists(x.id);
  verifyClientpolicyUpdated(x.id);
  deleteClientpolicy(x.id);
});

bthread("ClientregistrationpolicyLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientregistrationpolicy(x.id);
  updateClientregistrationpolicy(x.id);
  updateClientregistrationpolicy(x.id);
  verifyClientregistrationpolicyExists(x.id);
  verifyClientregistrationpolicyUpdated(x.id);
  deleteClientregistrationpolicy(x.id);
});

bthread("ClientscopeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientscope(x.id);
  updateClientscope(x.id);
  updateClientscope(x.id);
  verifyClientscopeExists(x.id);
  verifyClientscopeUpdated(x.id);
  deleteClientscope(x.id);
});

bthread("ClientsecretLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientsecret(x.id);
  updateClientsecret(x.id);
  updateClientsecret(x.id);
  verifyClientsecretExists(x.id);
  verifyClientsecretUpdated(x.id);
  deleteClientsecret(x.id);
});

bthread("ClientsessionstatLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientsessionstat(x.id);
  updateClientsessionstat(x.id);
  updateClientsessionstat(x.id);
  verifyClientsessionstatExists(x.id);
  verifyClientsessionstatUpdated(x.id);
  deleteClientsessionstat(x.id);
});

bthread("ClientsinitialaccesLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClientsinitialacces(x.id);
  updateClientsinitialacces(x.id);
  updateClientsinitialacces(x.id);
  verifyClientsinitialaccesExists(x.id);
  verifyClientsinitialaccesUpdated(x.id);
  deleteClientsinitialacces(x.id);
});

bthread("ClienttemplateLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClienttemplate(x.id);
  updateClienttemplate(x.id);
  updateClienttemplate(x.id);
  verifyClienttemplateExists(x.id);
  verifyClienttemplateUpdated(x.id);
  deleteClienttemplate(x.id);
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

bthread("CompositeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComposite(x.id);
  updateComposite(x.id);
  updateComposite(x.id);
  verifyCompositeExists(x.id);
  verifyCompositeUpdated(x.id);
  deleteComposite(x.id);
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

bthread("ConfigdescriptionLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigdescription(x.id);
  updateConfigdescription(x.id);
  updateConfigdescription(x.id);
  verifyConfigdescriptionExists(x.id);
  verifyConfigdescriptionUpdated(x.id);
  deleteConfigdescription(x.id);
});

bthread("ConfigureduserstoragecredentialtypeLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfigureduserstoragecredentialtype(x.id);
  updateConfigureduserstoragecredentialtype(x.id);
  updateConfigureduserstoragecredentialtype(x.id);
  verifyConfigureduserstoragecredentialtypeExists(x.id);
  verifyConfigureduserstoragecredentialtypeUpdated(x.id);
  deleteConfigureduserstoragecredentialtype(x.id);
});

bthread("ConsentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConsent(x.id);
  updateConsent(x.id);
  updateConsent(x.id);
  verifyConsentExists(x.id);
  verifyConsentUpdated(x.id);
  deleteConsent(x.id);
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

bthread("CountLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCount(x.id);
  updateCount(x.id);
  updateCount(x.id);
  verifyCountExists(x.id);
  verifyCountUpdated(x.id);
  deleteCount(x.id);
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

bthread("CredentialregistratorLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCredentialregistrator(x.id);
  updateCredentialregistrator(x.id);
  updateCredentialregistrator(x.id);
  verifyCredentialregistratorExists(x.id);
  verifyCredentialregistratorUpdated(x.id);
  deleteCredentialregistrator(x.id);
});

bthread("DefaultclientscopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultclientscope(x.id);
  updateDefaultclientscope(x.id);
  updateDefaultclientscope(x.id);
  verifyDefaultclientscopeExists(x.id);
  verifyDefaultclientscopeUpdated(x.id);
  deleteDefaultclientscope(x.id);
});

bthread("DefaultdefaultclientscopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultdefaultclientscope(x.id);
  updateDefaultdefaultclientscope(x.id);
  updateDefaultdefaultclientscope(x.id);
  verifyDefaultdefaultclientscopeExists(x.id);
  verifyDefaultdefaultclientscopeUpdated(x.id);
  deleteDefaultdefaultclientscope(x.id);
});

bthread("DefaultgroupLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultgroup(x.id);
  updateDefaultgroup(x.id);
  updateDefaultgroup(x.id);
  verifyDefaultgroupExists(x.id);
  verifyDefaultgroupUpdated(x.id);
  deleteDefaultgroup(x.id);
});

bthread("DefaultoptionalclientscopeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDefaultoptionalclientscope(x.id);
  updateDefaultoptionalclientscope(x.id);
  updateDefaultoptionalclientscope(x.id);
  verifyDefaultoptionalclientscopeExists(x.id);
  verifyDefaultoptionalclientscopeUpdated(x.id);
  deleteDefaultoptionalclientscope(x.id);
});

bthread("DisablecredentialtypeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisablecredentialtype(x.id);
  updateDisablecredentialtype(x.id);
  updateDisablecredentialtype(x.id);
  verifyDisablecredentialtypeExists(x.id);
  verifyDisablecredentialtypeUpdated(x.id);
  deleteDisablecredentialtype(x.id);
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

bthread("EvaluatescopeLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEvaluatescope(x.id);
  updateEvaluatescope(x.id);
  updateEvaluatescope(x.id);
  verifyEvaluatescopeExists(x.id);
  verifyEvaluatescopeUpdated(x.id);
  deleteEvaluatescope(x.id);
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

bthread("ExecuteactionsemailLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExecuteactionsemail(x.id);
  updateExecuteactionsemail(x.id);
  updateExecuteactionsemail(x.id);
  verifyExecuteactionsemailExists(x.id);
  verifyExecuteactionsemailUpdated(x.id);
  deleteExecuteactionsemail(x.id);
});

bthread("ExecutionLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExecution(x.id);
  updateExecution(x.id);
  updateExecution(x.id);
  verifyExecutionExists(x.id);
  verifyExecutionUpdated(x.id);
  deleteExecution(x.id);
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

bthread("FederatedidentityLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFederatedidentity(x.id);
  updateFederatedidentity(x.id);
  updateFederatedidentity(x.id);
  verifyFederatedidentityExists(x.id);
  verifyFederatedidentityUpdated(x.id);
  deleteFederatedidentity(x.id);
});

bthread("FlowLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFlow(x.id);
  updateFlow(x.id);
  updateFlow(x.id);
  verifyFlowExists(x.id);
  verifyFlowUpdated(x.id);
  deleteFlow(x.id);
});

bthread("FormactionproviderLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFormactionprovider(x.id);
  updateFormactionprovider(x.id);
  updateFormactionprovider(x.id);
  verifyFormactionproviderExists(x.id);
  verifyFormactionproviderUpdated(x.id);
  deleteFormactionprovider(x.id);
});

bthread("FormproviderLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFormprovider(x.id);
  updateFormprovider(x.id);
  updateFormprovider(x.id);
  verifyFormproviderExists(x.id);
  verifyFormproviderUpdated(x.id);
  deleteFormprovider(x.id);
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

bthread("GenerateanddownloadLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateanddownload(x.id);
  updateGenerateanddownload(x.id);
  updateGenerateanddownload(x.id);
  verifyGenerateanddownloadExists(x.id);
  verifyGenerateanddownloadUpdated(x.id);
  deleteGenerateanddownload(x.id);
});

bthread("GenerateexampleaccesstokenLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateexampleaccesstoken(x.id);
  updateGenerateexampleaccesstoken(x.id);
  updateGenerateexampleaccesstoken(x.id);
  verifyGenerateexampleaccesstokenExists(x.id);
  verifyGenerateexampleaccesstokenUpdated(x.id);
  deleteGenerateexampleaccesstoken(x.id);
});

bthread("GenerateexampleidtokenLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateexampleidtoken(x.id);
  updateGenerateexampleidtoken(x.id);
  updateGenerateexampleidtoken(x.id);
  verifyGenerateexampleidtokenExists(x.id);
  verifyGenerateexampleidtokenUpdated(x.id);
  deleteGenerateexampleidtoken(x.id);
});

bthread("GenerateexampleuserinfoLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerateexampleuserinfo(x.id);
  updateGenerateexampleuserinfo(x.id);
  updateGenerateexampleuserinfo(x.id);
  verifyGenerateexampleuserinfoExists(x.id);
  verifyGenerateexampleuserinfoUpdated(x.id);
  deleteGenerateexampleuserinfo(x.id);
});

bthread("GrantedLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGranted(x.id);
  updateGranted(x.id);
  updateGranted(x.id);
  verifyGrantedExists(x.id);
  verifyGrantedUpdated(x.id);
  deleteGranted(x.id);
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

bthread("GroupbypathLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGroupbypath(x.id);
  updateGroupbypath(x.id);
  updateGroupbypath(x.id);
  verifyGroupbypathExists(x.id);
  verifyGroupbypathUpdated(x.id);
  deleteGroupbypath(x.id);
});

bthread("IdentityproviderLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIdentityprovider(x.id);
  updateIdentityprovider(x.id);
  updateIdentityprovider(x.id);
  verifyIdentityproviderExists(x.id);
  verifyIdentityproviderUpdated(x.id);
  deleteIdentityprovider(x.id);
});

bthread("ImpersonationLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImpersonation(x.id);
  updateImpersonation(x.id);
  updateImpersonation(x.id);
  verifyImpersonationExists(x.id);
  verifyImpersonationUpdated(x.id);
  deleteImpersonation(x.id);
});

bthread("ImportconfigLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImportconfig(x.id);
  updateImportconfig(x.id);
  updateImportconfig(x.id);
  verifyImportconfigExists(x.id);
  verifyImportconfigUpdated(x.id);
  deleteImportconfig(x.id);
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

bthread("InstanceLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInstance(x.id);
  updateInstance(x.id);
  updateInstance(x.id);
  verifyInstanceExists(x.id);
  verifyInstanceUpdated(x.id);
  deleteInstance(x.id);
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

bthread("LocalizationLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLocalization(x.id);
  updateLocalization(x.id);
  updateLocalization(x.id);
  verifyLocalizationExists(x.id);
  verifyLocalizationUpdated(x.id);
  deleteLocalization(x.id);
});

bthread("LogoutLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogout(x.id);
  updateLogout(x.id);
  updateLogout(x.id);
  verifyLogoutExists(x.id);
  verifyLogoutUpdated(x.id);
  deleteLogout(x.id);
});

bthread("LogoutallLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogoutall(x.id);
  updateLogoutall(x.id);
  updateLogoutall(x.id);
  verifyLogoutallExists(x.id);
  verifyLogoutallUpdated(x.id);
  deleteLogoutall(x.id);
});

bthread("LowerpriorityLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLowerpriority(x.id);
  updateLowerpriority(x.id);
  updateLowerpriority(x.id);
  verifyLowerpriorityExists(x.id);
  verifyLowerpriorityUpdated(x.id);
  deleteLowerpriority(x.id);
});

bthread("ManagementLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addManagement(x.id);
  updateManagement(x.id);
  updateManagement(x.id);
  verifyManagementExists(x.id);
  verifyManagementUpdated(x.id);
  deleteManagement(x.id);
});

bthread("MapperLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMapper(x.id);
  updateMapper(x.id);
  updateMapper(x.id);
  verifyMapperExists(x.id);
  verifyMapperUpdated(x.id);
  deleteMapper(x.id);
});

bthread("MappertypeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMappertype(x.id);
  updateMappertype(x.id);
  updateMappertype(x.id);
  verifyMappertypeExists(x.id);
  verifyMappertypeUpdated(x.id);
  deleteMappertype(x.id);
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

bthread("ModelLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addModel(x.id);
  updateModel(x.id);
  updateModel(x.id);
  verifyModelExists(x.id);
  verifyModelUpdated(x.id);
  deleteModel(x.id);
});

bthread("MoveafterLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMoveafter(x.id);
  updateMoveafter(x.id);
  updateMoveafter(x.id);
  verifyMoveafterExists(x.id);
  verifyMoveafterUpdated(x.id);
  deleteMoveafter(x.id);
});

bthread("MovetofirstLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMovetofirst(x.id);
  updateMovetofirst(x.id);
  updateMovetofirst(x.id);
  verifyMovetofirstExists(x.id);
  verifyMovetofirstUpdated(x.id);
  deleteMovetofirst(x.id);
});

bthread("NodeLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNode(x.id);
  updateNode(x.id);
  updateNode(x.id);
  verifyNodeExists(x.id);
  verifyNodeUpdated(x.id);
  deleteNode(x.id);
});

bthread("NotgrantedLifecycle", function () {
  const x = pick([{id: "N001"}, {id: "N002"}]);
  addNotgranted(x.id);
  updateNotgranted(x.id);
  updateNotgranted(x.id);
  verifyNotgrantedExists(x.id);
  verifyNotgrantedUpdated(x.id);
  deleteNotgranted(x.id);
});

bthread("OfflinesessionLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOfflinesession(x.id);
  updateOfflinesession(x.id);
  updateOfflinesession(x.id);
  verifyOfflinesessionExists(x.id);
  verifyOfflinesessionUpdated(x.id);
  deleteOfflinesession(x.id);
});

bthread("OfflinesessioncountLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOfflinesessioncount(x.id);
  updateOfflinesessioncount(x.id);
  updateOfflinesessioncount(x.id);
  verifyOfflinesessioncountExists(x.id);
  verifyOfflinesessioncountUpdated(x.id);
  deleteOfflinesessioncount(x.id);
});

bthread("OptionalclientscopeLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOptionalclientscope(x.id);
  updateOptionalclientscope(x.id);
  updateOptionalclientscope(x.id);
  verifyOptionalclientscopeExists(x.id);
  verifyOptionalclientscopeUpdated(x.id);
  deleteOptionalclientscope(x.id);
});

bthread("PartialexportLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPartialexport(x.id);
  updatePartialexport(x.id);
  updatePartialexport(x.id);
  verifyPartialexportExists(x.id);
  verifyPartialexportUpdated(x.id);
  deletePartialexport(x.id);
});

bthread("PartialimportLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPartialimport(x.id);
  updatePartialimport(x.id);
  updatePartialimport(x.id);
  verifyPartialimportExists(x.id);
  verifyPartialimportUpdated(x.id);
  deletePartialimport(x.id);
});

bthread("PerclientconfigdescriptionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPerclientconfigdescription(x.id);
  updatePerclientconfigdescription(x.id);
  updatePerclientconfigdescription(x.id);
  verifyPerclientconfigdescriptionExists(x.id);
  verifyPerclientconfigdescriptionUpdated(x.id);
  deletePerclientconfigdescription(x.id);
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

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPolicy(x.id);
  updatePolicy(x.id);
  updatePolicy(x.id);
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
  deletePolicy(x.id);
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

bthread("ProtocolLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProtocol(x.id);
  updateProtocol(x.id);
  updateProtocol(x.id);
  verifyProtocolExists(x.id);
  verifyProtocolUpdated(x.id);
  deleteProtocol(x.id);
});

bthread("ProtocolmapperLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProtocolmapper(x.id);
  updateProtocolmapper(x.id);
  updateProtocolmapper(x.id);
  verifyProtocolmapperExists(x.id);
  verifyProtocolmapperUpdated(x.id);
  deleteProtocolmapper(x.id);
});

bthread("ProviderLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addProvider(x.id);
  updateProvider(x.id);
  updateProvider(x.id);
  verifyProviderExists(x.id);
  verifyProviderUpdated(x.id);
  deleteProvider(x.id);
});

bthread("PushrevocationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPushrevocation(x.id);
  updatePushrevocation(x.id);
  updatePushrevocation(x.id);
  verifyPushrevocationExists(x.id);
  verifyPushrevocationUpdated(x.id);
  deletePushrevocation(x.id);
});

bthread("RaisepriorityLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRaisepriority(x.id);
  updateRaisepriority(x.id);
  updateRaisepriority(x.id);
  verifyRaisepriorityExists(x.id);
  verifyRaisepriorityUpdated(x.id);
  deleteRaisepriority(x.id);
});

bthread("RealmLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRealm(x.id);
  updateRealm(x.id);
  updateRealm(x.id);
  verifyRealmExists(x.id);
  verifyRealmUpdated(x.id);
  deleteRealm(x.id);
});

bthread("RegisterrequiredactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegisterrequiredaction(x.id);
  updateRegisterrequiredaction(x.id);
  updateRegisterrequiredaction(x.id);
  verifyRegisterrequiredactionExists(x.id);
  verifyRegisterrequiredactionUpdated(x.id);
  deleteRegisterrequiredaction(x.id);
});

bthread("RegistrationaccesstokenLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRegistrationaccesstoken(x.id);
  updateRegistrationaccesstoken(x.id);
  updateRegistrationaccesstoken(x.id);
  verifyRegistrationaccesstokenExists(x.id);
  verifyRegistrationaccesstokenUpdated(x.id);
  deleteRegistrationaccesstoken(x.id);
});

bthread("RequiredactionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequiredaction(x.id);
  updateRequiredaction(x.id);
  updateRequiredaction(x.id);
  verifyRequiredactionExists(x.id);
  verifyRequiredactionUpdated(x.id);
  deleteRequiredaction(x.id);
});

bthread("ResetpasswordLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResetpassword(x.id);
  updateResetpassword(x.id);
  updateResetpassword(x.id);
  verifyResetpasswordExists(x.id);
  verifyResetpasswordUpdated(x.id);
  deleteResetpassword(x.id);
});

bthread("ResetpasswordemailLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addResetpasswordemail(x.id);
  updateResetpasswordemail(x.id);
  updateResetpasswordemail(x.id);
  verifyResetpasswordemailExists(x.id);
  verifyResetpasswordemailUpdated(x.id);
  deleteResetpasswordemail(x.id);
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

bthread("RolemappingLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRolemapping(x.id);
  updateRolemapping(x.id);
  updateRolemapping(x.id);
  verifyRolemappingExists(x.id);
  verifyRolemappingUpdated(x.id);
  deleteRolemapping(x.id);
});

bthread("RolesbyidLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRolesbyid(x.id);
  updateRolesbyid(x.id);
  updateRolesbyid(x.id);
  verifyRolesbyidExists(x.id);
  verifyRolesbyidUpdated(x.id);
  deleteRolesbyid(x.id);
});

bthread("RotatedLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRotated(x.id);
  updateRotated(x.id);
  updateRotated(x.id);
  verifyRotatedExists(x.id);
  verifyRotatedUpdated(x.id);
  deleteRotated(x.id);
});

bthread("ScopemappingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addScopemapping(x.id);
  updateScopemapping(x.id);
  updateScopemapping(x.id);
  verifyScopemappingExists(x.id);
  verifyScopemappingUpdated(x.id);
  deleteScopemapping(x.id);
});

bthread("SendverifyemailLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSendverifyemail(x.id);
  updateSendverifyemail(x.id);
  updateSendverifyemail(x.id);
  verifySendverifyemailExists(x.id);
  verifySendverifyemailUpdated(x.id);
  deleteSendverifyemail(x.id);
});

bthread("ServiceaccountuserLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServiceaccountuser(x.id);
  updateServiceaccountuser(x.id);
  updateServiceaccountuser(x.id);
  verifyServiceaccountuserExists(x.id);
  verifyServiceaccountuserUpdated(x.id);
  deleteServiceaccountuser(x.id);
});

bthread("SessionLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSession(x.id);
  updateSession(x.id);
  updateSession(x.id);
  verifySessionExists(x.id);
  verifySessionUpdated(x.id);
  deleteSession(x.id);
});

bthread("SessioncountLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSessioncount(x.id);
  updateSessioncount(x.id);
  updateSessioncount(x.id);
  verifySessioncountExists(x.id);
  verifySessioncountUpdated(x.id);
  deleteSessioncount(x.id);
});

bthread("SubcomponenttypeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSubcomponenttype(x.id);
  updateSubcomponenttype(x.id);
  updateSubcomponenttype(x.id);
  verifySubcomponenttypeExists(x.id);
  verifySubcomponenttypeUpdated(x.id);
  deleteSubcomponenttype(x.id);
});

bthread("TestnodesavailableLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTestnodesavailable(x.id);
  updateTestnodesavailable(x.id);
  updateTestnodesavailable(x.id);
  verifyTestnodesavailableExists(x.id);
  verifyTestnodesavailableUpdated(x.id);
  deleteTestnodesavailable(x.id);
});

bthread("TestsmtpconnectionLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTestsmtpconnection(x.id);
  updateTestsmtpconnection(x.id);
  updateTestsmtpconnection(x.id);
  verifyTestsmtpconnectionExists(x.id);
  verifyTestsmtpconnectionUpdated(x.id);
  deleteTestsmtpconnection(x.id);
});

bthread("UnregisteredrequiredactionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUnregisteredrequiredaction(x.id);
  updateUnregisteredrequiredaction(x.id);
  updateUnregisteredrequiredaction(x.id);
  verifyUnregisteredrequiredactionExists(x.id);
  verifyUnregisteredrequiredactionUpdated(x.id);
  deleteUnregisteredrequiredaction(x.id);
});

bthread("UploadLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUpload(x.id);
  updateUpload(x.id);
  updateUpload(x.id);
  verifyUploadExists(x.id);
  verifyUploadUpdated(x.id);
  deleteUpload(x.id);
});

bthread("UploadcertificateLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUploadcertificate(x.id);
  updateUploadcertificate(x.id);
  updateUploadcertificate(x.id);
  verifyUploadcertificateExists(x.id);
  verifyUploadcertificateUpdated(x.id);
  deleteUploadcertificate(x.id);
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

bthread("UserlabelLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUserlabel(x.id);
  updateUserlabel(x.id);
  updateUserlabel(x.id);
  verifyUserlabelExists(x.id);
  verifyUserlabelUpdated(x.id);
  deleteUserlabel(x.id);
});

bthread("UsersessionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsersession(x.id);
  updateUsersession(x.id);
  updateUsersession(x.id);
  verifyUsersessionExists(x.id);
  verifyUsersessionUpdated(x.id);
  deleteUsersession(x.id);
});

bthread("UsersmanagementpermissionLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUsersmanagementpermission(x.id);
  updateUsersmanagementpermission(x.id);
  updateUsersmanagementpermission(x.id);
  verifyUsersmanagementpermissionExists(x.id);
  verifyUsersmanagementpermissionUpdated(x.id);
  deleteUsersmanagementpermission(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Addmodel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Addmodel_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAddmodel(x.id);
  for (var i=0; i<steps; i++) {
    updateAddmodel(x.id);
  }
  if (pick([true,false])) { deleteAddmodel(x.id); }
  verifyAddmodelExists(x.id);
  verifyAddmodelUpdated(x.id);
});

bthread("Addmodel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAddmodel(a.id);
  block(matchAddAddmodel(a.id, ANY), function () {});
  addAddmodel(b.id);
});

bthread("Adminevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Adminevent_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAdminevent(x.id);
  for (var i=0; i<steps; i++) {
    updateAdminevent(x.id);
  }
  if (pick([true,false])) { deleteAdminevent(x.id); }
  verifyAdmineventExists(x.id);
  verifyAdmineventUpdated(x.id);
});

bthread("Adminevent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAdminevent(a.id);
  block(matchAddAdminevent(a.id, ANY), function () {});
  addAdminevent(b.id);
});

bthread("Attackdetection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Attackdetection_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAttackdetection(x.id);
  for (var i=0; i<steps; i++) {
    updateAttackdetection(x.id);
  }
  if (pick([true,false])) { deleteAttackdetection(x.id); }
  verifyAttackdetectionExists(x.id);
  verifyAttackdetectionUpdated(x.id);
});

bthread("Attackdetection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAttackdetection(a.id);
  block(matchAddAttackdetection(a.id, ANY), function () {});
  addAttackdetection(b.id);
});

bthread("Authentication nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Authentication_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAuthentication(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthentication(x.id);
  }
  if (pick([true,false])) { deleteAuthentication(x.id); }
  verifyAuthenticationExists(x.id);
  verifyAuthenticationUpdated(x.id);
});

bthread("Authentication nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAuthentication(a.id);
  block(matchAddAuthentication(a.id, ANY), function () {});
  addAuthentication(b.id);
});

bthread("Authenticatorprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Authenticatorprovider_id_N"}]);
  const steps = pick([0,1,2,10]);
  addAuthenticatorprovider(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticatorprovider(x.id);
  }
  if (pick([true,false])) { deleteAuthenticatorprovider(x.id); }
  verifyAuthenticatorproviderExists(x.id);
  verifyAuthenticatorproviderUpdated(x.id);
});

bthread("Authenticatorprovider nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAuthenticatorprovider(a.id);
  block(matchAddAuthenticatorprovider(a.id, ANY), function () {});
  addAuthenticatorprovider(b.id);
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

bthread("Bruteforce nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Bruteforce_id_N"}]);
  const steps = pick([0,1,2,10]);
  addBruteforce(x.id);
  for (var i=0; i<steps; i++) {
    updateBruteforce(x.id);
  }
  if (pick([true,false])) { deleteBruteforce(x.id); }
  verifyBruteforceExists(x.id);
  verifyBruteforceUpdated(x.id);
});

bthread("Bruteforce nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBruteforce(a.id);
  block(matchAddBruteforce(a.id, ANY), function () {});
  addBruteforce(b.id);
});

bthread("Certificate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Certificate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCertificate(x.id);
  for (var i=0; i<steps; i++) {
    updateCertificate(x.id);
  }
  if (pick([true,false])) { deleteCertificate(x.id); }
  verifyCertificateExists(x.id);
  verifyCertificateUpdated(x.id);
});

bthread("Certificate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCertificate(a.id);
  block(matchAddCertificate(a.id, ANY), function () {});
  addCertificate(b.id);
});

bthread("Children nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Children_id_N"}]);
  const steps = pick([0,1,2,10]);
  addChildren(x.id);
  for (var i=0; i<steps; i++) {
    updateChildren(x.id);
  }
  if (pick([true,false])) { deleteChildren(x.id); }
  verifyChildrenExists(x.id);
  verifyChildrenUpdated(x.id);
});

bthread("Children nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addChildren(a.id);
  block(matchAddChildren(a.id, ANY), function () {});
  addChildren(b.id);
});

bthread("Client nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Client_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClient(x.id);
  for (var i=0; i<steps; i++) {
    updateClient(x.id);
  }
  if (pick([true,false])) { deleteClient(x.id); }
  verifyClientExists(x.id);
  verifyClientUpdated(x.id);
});

bthread("Client nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClient(a.id);
  block(matchAddClient(a.id, ANY), function () {});
  addClient(b.id);
});

bthread("Clientauthenticatorprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientauthenticatorprovider_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientauthenticatorprovider(x.id);
  for (var i=0; i<steps; i++) {
    updateClientauthenticatorprovider(x.id);
  }
  if (pick([true,false])) { deleteClientauthenticatorprovider(x.id); }
  verifyClientauthenticatorproviderExists(x.id);
  verifyClientauthenticatorproviderUpdated(x.id);
});

bthread("Clientauthenticatorprovider nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientauthenticatorprovider(a.id);
  block(matchAddClientauthenticatorprovider(a.id, ANY), function () {});
  addClientauthenticatorprovider(b.id);
});

bthread("Clientdescriptionconverter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientdescriptionconverter_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientdescriptionconverter(x.id);
  for (var i=0; i<steps; i++) {
    updateClientdescriptionconverter(x.id);
  }
  if (pick([true,false])) { deleteClientdescriptionconverter(x.id); }
  verifyClientdescriptionconverterExists(x.id);
  verifyClientdescriptionconverterUpdated(x.id);
});

bthread("Clientdescriptionconverter nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientdescriptionconverter(a.id);
  block(matchAddClientdescriptionconverter(a.id, ANY), function () {});
  addClientdescriptionconverter(b.id);
});

bthread("Clientpolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientpolicy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientpolicy(x.id);
  for (var i=0; i<steps; i++) {
    updateClientpolicy(x.id);
  }
  if (pick([true,false])) { deleteClientpolicy(x.id); }
  verifyClientpolicyExists(x.id);
  verifyClientpolicyUpdated(x.id);
});

bthread("Clientpolicy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientpolicy(a.id);
  block(matchAddClientpolicy(a.id, ANY), function () {});
  addClientpolicy(b.id);
});

bthread("Clientregistrationpolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientregistrationpolicy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientregistrationpolicy(x.id);
  for (var i=0; i<steps; i++) {
    updateClientregistrationpolicy(x.id);
  }
  if (pick([true,false])) { deleteClientregistrationpolicy(x.id); }
  verifyClientregistrationpolicyExists(x.id);
  verifyClientregistrationpolicyUpdated(x.id);
});

bthread("Clientregistrationpolicy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientregistrationpolicy(a.id);
  block(matchAddClientregistrationpolicy(a.id, ANY), function () {});
  addClientregistrationpolicy(b.id);
});

bthread("Clientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientscope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientscope(x.id);
  for (var i=0; i<steps; i++) {
    updateClientscope(x.id);
  }
  if (pick([true,false])) { deleteClientscope(x.id); }
  verifyClientscopeExists(x.id);
  verifyClientscopeUpdated(x.id);
});

bthread("Clientscope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientscope(a.id);
  block(matchAddClientscope(a.id, ANY), function () {});
  addClientscope(b.id);
});

bthread("Clientsecret nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientsecret_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientsecret(x.id);
  for (var i=0; i<steps; i++) {
    updateClientsecret(x.id);
  }
  if (pick([true,false])) { deleteClientsecret(x.id); }
  verifyClientsecretExists(x.id);
  verifyClientsecretUpdated(x.id);
});

bthread("Clientsecret nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientsecret(a.id);
  block(matchAddClientsecret(a.id, ANY), function () {});
  addClientsecret(b.id);
});

bthread("Clientsessionstat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientsessionstat_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientsessionstat(x.id);
  for (var i=0; i<steps; i++) {
    updateClientsessionstat(x.id);
  }
  if (pick([true,false])) { deleteClientsessionstat(x.id); }
  verifyClientsessionstatExists(x.id);
  verifyClientsessionstatUpdated(x.id);
});

bthread("Clientsessionstat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientsessionstat(a.id);
  block(matchAddClientsessionstat(a.id, ANY), function () {});
  addClientsessionstat(b.id);
});

bthread("Clientsinitialacces nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clientsinitialacces_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClientsinitialacces(x.id);
  for (var i=0; i<steps; i++) {
    updateClientsinitialacces(x.id);
  }
  if (pick([true,false])) { deleteClientsinitialacces(x.id); }
  verifyClientsinitialaccesExists(x.id);
  verifyClientsinitialaccesUpdated(x.id);
});

bthread("Clientsinitialacces nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClientsinitialacces(a.id);
  block(matchAddClientsinitialacces(a.id, ANY), function () {});
  addClientsinitialacces(b.id);
});

bthread("Clienttemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clienttemplate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addClienttemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateClienttemplate(x.id);
  }
  if (pick([true,false])) { deleteClienttemplate(x.id); }
  verifyClienttemplateExists(x.id);
  verifyClienttemplateUpdated(x.id);
});

bthread("Clienttemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClienttemplate(a.id);
  block(matchAddClienttemplate(a.id, ANY), function () {});
  addClienttemplate(b.id);
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

bthread("Composite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Composite_id_N"}]);
  const steps = pick([0,1,2,10]);
  addComposite(x.id);
  for (var i=0; i<steps; i++) {
    updateComposite(x.id);
  }
  if (pick([true,false])) { deleteComposite(x.id); }
  verifyCompositeExists(x.id);
  verifyCompositeUpdated(x.id);
});

bthread("Composite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addComposite(a.id);
  block(matchAddComposite(a.id, ANY), function () {});
  addComposite(b.id);
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

bthread("Configdescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Configdescription_id_N"}]);
  const steps = pick([0,1,2,10]);
  addConfigdescription(x.id);
  for (var i=0; i<steps; i++) {
    updateConfigdescription(x.id);
  }
  if (pick([true,false])) { deleteConfigdescription(x.id); }
  verifyConfigdescriptionExists(x.id);
  verifyConfigdescriptionUpdated(x.id);
});

bthread("Configdescription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConfigdescription(a.id);
  block(matchAddConfigdescription(a.id, ANY), function () {});
  addConfigdescription(b.id);
});

bthread("Configureduserstoragecredentialtype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Configureduserstoragecredentialtype_id_N"}]);
  const steps = pick([0,1,2,10]);
  addConfigureduserstoragecredentialtype(x.id);
  for (var i=0; i<steps; i++) {
    updateConfigureduserstoragecredentialtype(x.id);
  }
  if (pick([true,false])) { deleteConfigureduserstoragecredentialtype(x.id); }
  verifyConfigureduserstoragecredentialtypeExists(x.id);
  verifyConfigureduserstoragecredentialtypeUpdated(x.id);
});

bthread("Configureduserstoragecredentialtype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConfigureduserstoragecredentialtype(a.id);
  block(matchAddConfigureduserstoragecredentialtype(a.id, ANY), function () {});
  addConfigureduserstoragecredentialtype(b.id);
});

bthread("Consent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Consent_id_N"}]);
  const steps = pick([0,1,2,10]);
  addConsent(x.id);
  for (var i=0; i<steps; i++) {
    updateConsent(x.id);
  }
  if (pick([true,false])) { deleteConsent(x.id); }
  verifyConsentExists(x.id);
  verifyConsentUpdated(x.id);
});

bthread("Consent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConsent(a.id);
  block(matchAddConsent(a.id, ANY), function () {});
  addConsent(b.id);
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

bthread("Count nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Count_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCount(x.id);
  for (var i=0; i<steps; i++) {
    updateCount(x.id);
  }
  if (pick([true,false])) { deleteCount(x.id); }
  verifyCountExists(x.id);
  verifyCountUpdated(x.id);
});

bthread("Count nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCount(a.id);
  block(matchAddCount(a.id, ANY), function () {});
  addCount(b.id);
});

bthread("Credential nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Credential_id_N"}]);
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

bthread("Credentialregistrator nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Credentialregistrator_id_N"}]);
  const steps = pick([0,1,2,10]);
  addCredentialregistrator(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentialregistrator(x.id);
  }
  if (pick([true,false])) { deleteCredentialregistrator(x.id); }
  verifyCredentialregistratorExists(x.id);
  verifyCredentialregistratorUpdated(x.id);
});

bthread("Credentialregistrator nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCredentialregistrator(a.id);
  block(matchAddCredentialregistrator(a.id, ANY), function () {});
  addCredentialregistrator(b.id);
});

bthread("Defaultclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaultclientscope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaultclientscope(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultclientscope(x.id);
  }
  if (pick([true,false])) { deleteDefaultclientscope(x.id); }
  verifyDefaultclientscopeExists(x.id);
  verifyDefaultclientscopeUpdated(x.id);
});

bthread("Defaultclientscope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultclientscope(a.id);
  block(matchAddDefaultclientscope(a.id, ANY), function () {});
  addDefaultclientscope(b.id);
});

bthread("Defaultdefaultclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaultdefaultclientscope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaultdefaultclientscope(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultdefaultclientscope(x.id);
  }
  if (pick([true,false])) { deleteDefaultdefaultclientscope(x.id); }
  verifyDefaultdefaultclientscopeExists(x.id);
  verifyDefaultdefaultclientscopeUpdated(x.id);
});

bthread("Defaultdefaultclientscope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultdefaultclientscope(a.id);
  block(matchAddDefaultdefaultclientscope(a.id, ANY), function () {});
  addDefaultdefaultclientscope(b.id);
});

bthread("Defaultgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaultgroup_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaultgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultgroup(x.id);
  }
  if (pick([true,false])) { deleteDefaultgroup(x.id); }
  verifyDefaultgroupExists(x.id);
  verifyDefaultgroupUpdated(x.id);
});

bthread("Defaultgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultgroup(a.id);
  block(matchAddDefaultgroup(a.id, ANY), function () {});
  addDefaultgroup(b.id);
});

bthread("Defaultoptionalclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Defaultoptionalclientscope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDefaultoptionalclientscope(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultoptionalclientscope(x.id);
  }
  if (pick([true,false])) { deleteDefaultoptionalclientscope(x.id); }
  verifyDefaultoptionalclientscopeExists(x.id);
  verifyDefaultoptionalclientscopeUpdated(x.id);
});

bthread("Defaultoptionalclientscope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultoptionalclientscope(a.id);
  block(matchAddDefaultoptionalclientscope(a.id, ANY), function () {});
  addDefaultoptionalclientscope(b.id);
});

bthread("Disablecredentialtype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Disablecredentialtype_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDisablecredentialtype(x.id);
  for (var i=0; i<steps; i++) {
    updateDisablecredentialtype(x.id);
  }
  if (pick([true,false])) { deleteDisablecredentialtype(x.id); }
  verifyDisablecredentialtypeExists(x.id);
  verifyDisablecredentialtypeUpdated(x.id);
});

bthread("Disablecredentialtype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDisablecredentialtype(a.id);
  block(matchAddDisablecredentialtype(a.id, ANY), function () {});
  addDisablecredentialtype(b.id);
});

bthread("Download nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Download_id_N"}]);
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

bthread("Evaluatescope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Evaluatescope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEvaluatescope(x.id);
  for (var i=0; i<steps; i++) {
    updateEvaluatescope(x.id);
  }
  if (pick([true,false])) { deleteEvaluatescope(x.id); }
  verifyEvaluatescopeExists(x.id);
  verifyEvaluatescopeUpdated(x.id);
});

bthread("Evaluatescope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEvaluatescope(a.id);
  block(matchAddEvaluatescope(a.id, ANY), function () {});
  addEvaluatescope(b.id);
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

bthread("Executeactionsemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Executeactionsemail_id_N"}]);
  const steps = pick([0,1,2,10]);
  addExecuteactionsemail(x.id);
  for (var i=0; i<steps; i++) {
    updateExecuteactionsemail(x.id);
  }
  if (pick([true,false])) { deleteExecuteactionsemail(x.id); }
  verifyExecuteactionsemailExists(x.id);
  verifyExecuteactionsemailUpdated(x.id);
});

bthread("Executeactionsemail nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExecuteactionsemail(a.id);
  block(matchAddExecuteactionsemail(a.id, ANY), function () {});
  addExecuteactionsemail(b.id);
});

bthread("Execution nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Execution_id_N"}]);
  const steps = pick([0,1,2,10]);
  addExecution(x.id);
  for (var i=0; i<steps; i++) {
    updateExecution(x.id);
  }
  if (pick([true,false])) { deleteExecution(x.id); }
  verifyExecutionExists(x.id);
  verifyExecutionUpdated(x.id);
});

bthread("Execution nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExecution(a.id);
  block(matchAddExecution(a.id, ANY), function () {});
  addExecution(b.id);
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

bthread("Federatedidentity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Federatedidentity_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFederatedidentity(x.id);
  for (var i=0; i<steps; i++) {
    updateFederatedidentity(x.id);
  }
  if (pick([true,false])) { deleteFederatedidentity(x.id); }
  verifyFederatedidentityExists(x.id);
  verifyFederatedidentityUpdated(x.id);
});

bthread("Federatedidentity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFederatedidentity(a.id);
  block(matchAddFederatedidentity(a.id, ANY), function () {});
  addFederatedidentity(b.id);
});

bthread("Flow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Flow_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFlow(x.id);
  for (var i=0; i<steps; i++) {
    updateFlow(x.id);
  }
  if (pick([true,false])) { deleteFlow(x.id); }
  verifyFlowExists(x.id);
  verifyFlowUpdated(x.id);
});

bthread("Flow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFlow(a.id);
  block(matchAddFlow(a.id, ANY), function () {});
  addFlow(b.id);
});

bthread("Formactionprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Formactionprovider_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFormactionprovider(x.id);
  for (var i=0; i<steps; i++) {
    updateFormactionprovider(x.id);
  }
  if (pick([true,false])) { deleteFormactionprovider(x.id); }
  verifyFormactionproviderExists(x.id);
  verifyFormactionproviderUpdated(x.id);
});

bthread("Formactionprovider nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFormactionprovider(a.id);
  block(matchAddFormactionprovider(a.id, ANY), function () {});
  addFormactionprovider(b.id);
});

bthread("Formprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Formprovider_id_N"}]);
  const steps = pick([0,1,2,10]);
  addFormprovider(x.id);
  for (var i=0; i<steps; i++) {
    updateFormprovider(x.id);
  }
  if (pick([true,false])) { deleteFormprovider(x.id); }
  verifyFormproviderExists(x.id);
  verifyFormproviderUpdated(x.id);
});

bthread("Formprovider nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFormprovider(a.id);
  block(matchAddFormprovider(a.id, ANY), function () {});
  addFormprovider(b.id);
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

bthread("Generateanddownload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Generateanddownload_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGenerateanddownload(x.id);
  for (var i=0; i<steps; i++) {
    updateGenerateanddownload(x.id);
  }
  if (pick([true,false])) { deleteGenerateanddownload(x.id); }
  verifyGenerateanddownloadExists(x.id);
  verifyGenerateanddownloadUpdated(x.id);
});

bthread("Generateanddownload nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerateanddownload(a.id);
  block(matchAddGenerateanddownload(a.id, ANY), function () {});
  addGenerateanddownload(b.id);
});

bthread("Generateexampleaccesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Generateexampleaccesstoken_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGenerateexampleaccesstoken(x.id);
  for (var i=0; i<steps; i++) {
    updateGenerateexampleaccesstoken(x.id);
  }
  if (pick([true,false])) { deleteGenerateexampleaccesstoken(x.id); }
  verifyGenerateexampleaccesstokenExists(x.id);
  verifyGenerateexampleaccesstokenUpdated(x.id);
});

bthread("Generateexampleaccesstoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerateexampleaccesstoken(a.id);
  block(matchAddGenerateexampleaccesstoken(a.id, ANY), function () {});
  addGenerateexampleaccesstoken(b.id);
});

bthread("Generateexampleidtoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Generateexampleidtoken_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGenerateexampleidtoken(x.id);
  for (var i=0; i<steps; i++) {
    updateGenerateexampleidtoken(x.id);
  }
  if (pick([true,false])) { deleteGenerateexampleidtoken(x.id); }
  verifyGenerateexampleidtokenExists(x.id);
  verifyGenerateexampleidtokenUpdated(x.id);
});

bthread("Generateexampleidtoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerateexampleidtoken(a.id);
  block(matchAddGenerateexampleidtoken(a.id, ANY), function () {});
  addGenerateexampleidtoken(b.id);
});

bthread("Generateexampleuserinfo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Generateexampleuserinfo_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGenerateexampleuserinfo(x.id);
  for (var i=0; i<steps; i++) {
    updateGenerateexampleuserinfo(x.id);
  }
  if (pick([true,false])) { deleteGenerateexampleuserinfo(x.id); }
  verifyGenerateexampleuserinfoExists(x.id);
  verifyGenerateexampleuserinfoUpdated(x.id);
});

bthread("Generateexampleuserinfo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerateexampleuserinfo(a.id);
  block(matchAddGenerateexampleuserinfo(a.id, ANY), function () {});
  addGenerateexampleuserinfo(b.id);
});

bthread("Granted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Granted_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGranted(x.id);
  for (var i=0; i<steps; i++) {
    updateGranted(x.id);
  }
  if (pick([true,false])) { deleteGranted(x.id); }
  verifyGrantedExists(x.id);
  verifyGrantedUpdated(x.id);
});

bthread("Granted nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGranted(a.id);
  block(matchAddGranted(a.id, ANY), function () {});
  addGranted(b.id);
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

bthread("Groupbypath nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Groupbypath_id_N"}]);
  const steps = pick([0,1,2,10]);
  addGroupbypath(x.id);
  for (var i=0; i<steps; i++) {
    updateGroupbypath(x.id);
  }
  if (pick([true,false])) { deleteGroupbypath(x.id); }
  verifyGroupbypathExists(x.id);
  verifyGroupbypathUpdated(x.id);
});

bthread("Groupbypath nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGroupbypath(a.id);
  block(matchAddGroupbypath(a.id, ANY), function () {});
  addGroupbypath(b.id);
});

bthread("Identityprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Identityprovider_id_N"}]);
  const steps = pick([0,1,2,10]);
  addIdentityprovider(x.id);
  for (var i=0; i<steps; i++) {
    updateIdentityprovider(x.id);
  }
  if (pick([true,false])) { deleteIdentityprovider(x.id); }
  verifyIdentityproviderExists(x.id);
  verifyIdentityproviderUpdated(x.id);
});

bthread("Identityprovider nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdentityprovider(a.id);
  block(matchAddIdentityprovider(a.id, ANY), function () {});
  addIdentityprovider(b.id);
});

bthread("Impersonation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Impersonation_id_N"}]);
  const steps = pick([0,1,2,10]);
  addImpersonation(x.id);
  for (var i=0; i<steps; i++) {
    updateImpersonation(x.id);
  }
  if (pick([true,false])) { deleteImpersonation(x.id); }
  verifyImpersonationExists(x.id);
  verifyImpersonationUpdated(x.id);
});

bthread("Impersonation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addImpersonation(a.id);
  block(matchAddImpersonation(a.id, ANY), function () {});
  addImpersonation(b.id);
});

bthread("Importconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Importconfig_id_N"}]);
  const steps = pick([0,1,2,10]);
  addImportconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateImportconfig(x.id);
  }
  if (pick([true,false])) { deleteImportconfig(x.id); }
  verifyImportconfigExists(x.id);
  verifyImportconfigUpdated(x.id);
});

bthread("Importconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addImportconfig(a.id);
  block(matchAddImportconfig(a.id, ANY), function () {});
  addImportconfig(b.id);
});

bthread("Installation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Installation_id_N"}]);
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

bthread("Localization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Localization_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLocalization(x.id);
  for (var i=0; i<steps; i++) {
    updateLocalization(x.id);
  }
  if (pick([true,false])) { deleteLocalization(x.id); }
  verifyLocalizationExists(x.id);
  verifyLocalizationUpdated(x.id);
});

bthread("Localization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLocalization(a.id);
  block(matchAddLocalization(a.id, ANY), function () {});
  addLocalization(b.id);
});

bthread("Logout nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Logout_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLogout(x.id);
  for (var i=0; i<steps; i++) {
    updateLogout(x.id);
  }
  if (pick([true,false])) { deleteLogout(x.id); }
  verifyLogoutExists(x.id);
  verifyLogoutUpdated(x.id);
});

bthread("Logout nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLogout(a.id);
  block(matchAddLogout(a.id, ANY), function () {});
  addLogout(b.id);
});

bthread("Logoutall nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Logoutall_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLogoutall(x.id);
  for (var i=0; i<steps; i++) {
    updateLogoutall(x.id);
  }
  if (pick([true,false])) { deleteLogoutall(x.id); }
  verifyLogoutallExists(x.id);
  verifyLogoutallUpdated(x.id);
});

bthread("Logoutall nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLogoutall(a.id);
  block(matchAddLogoutall(a.id, ANY), function () {});
  addLogoutall(b.id);
});

bthread("Lowerpriority nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Lowerpriority_id_N"}]);
  const steps = pick([0,1,2,10]);
  addLowerpriority(x.id);
  for (var i=0; i<steps; i++) {
    updateLowerpriority(x.id);
  }
  if (pick([true,false])) { deleteLowerpriority(x.id); }
  verifyLowerpriorityExists(x.id);
  verifyLowerpriorityUpdated(x.id);
});

bthread("Lowerpriority nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLowerpriority(a.id);
  block(matchAddLowerpriority(a.id, ANY), function () {});
  addLowerpriority(b.id);
});

bthread("Management nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Management_id_N"}]);
  const steps = pick([0,1,2,10]);
  addManagement(x.id);
  for (var i=0; i<steps; i++) {
    updateManagement(x.id);
  }
  if (pick([true,false])) { deleteManagement(x.id); }
  verifyManagementExists(x.id);
  verifyManagementUpdated(x.id);
});

bthread("Management nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addManagement(a.id);
  block(matchAddManagement(a.id, ANY), function () {});
  addManagement(b.id);
});

bthread("Mapper nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mapper_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMapper(x.id);
  for (var i=0; i<steps; i++) {
    updateMapper(x.id);
  }
  if (pick([true,false])) { deleteMapper(x.id); }
  verifyMapperExists(x.id);
  verifyMapperUpdated(x.id);
});

bthread("Mapper nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMapper(a.id);
  block(matchAddMapper(a.id, ANY), function () {});
  addMapper(b.id);
});

bthread("Mappertype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Mappertype_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMappertype(x.id);
  for (var i=0; i<steps; i++) {
    updateMappertype(x.id);
  }
  if (pick([true,false])) { deleteMappertype(x.id); }
  verifyMappertypeExists(x.id);
  verifyMappertypeUpdated(x.id);
});

bthread("Mappertype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMappertype(a.id);
  block(matchAddMappertype(a.id, ANY), function () {});
  addMappertype(b.id);
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

bthread("Model nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Model_id_N"}]);
  const steps = pick([0,1,2,10]);
  addModel(x.id);
  for (var i=0; i<steps; i++) {
    updateModel(x.id);
  }
  if (pick([true,false])) { deleteModel(x.id); }
  verifyModelExists(x.id);
  verifyModelUpdated(x.id);
});

bthread("Model nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addModel(a.id);
  block(matchAddModel(a.id, ANY), function () {});
  addModel(b.id);
});

bthread("Moveafter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Moveafter_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMoveafter(x.id);
  for (var i=0; i<steps; i++) {
    updateMoveafter(x.id);
  }
  if (pick([true,false])) { deleteMoveafter(x.id); }
  verifyMoveafterExists(x.id);
  verifyMoveafterUpdated(x.id);
});

bthread("Moveafter nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMoveafter(a.id);
  block(matchAddMoveafter(a.id, ANY), function () {});
  addMoveafter(b.id);
});

bthread("Movetofirst nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Movetofirst_id_N"}]);
  const steps = pick([0,1,2,10]);
  addMovetofirst(x.id);
  for (var i=0; i<steps; i++) {
    updateMovetofirst(x.id);
  }
  if (pick([true,false])) { deleteMovetofirst(x.id); }
  verifyMovetofirstExists(x.id);
  verifyMovetofirstUpdated(x.id);
});

bthread("Movetofirst nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMovetofirst(a.id);
  block(matchAddMovetofirst(a.id, ANY), function () {});
  addMovetofirst(b.id);
});

bthread("Node nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Node_id_N"}]);
  const steps = pick([0,1,2,10]);
  addNode(x.id);
  for (var i=0; i<steps; i++) {
    updateNode(x.id);
  }
  if (pick([true,false])) { deleteNode(x.id); }
  verifyNodeExists(x.id);
  verifyNodeUpdated(x.id);
});

bthread("Node nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNode(a.id);
  block(matchAddNode(a.id, ANY), function () {});
  addNode(b.id);
});

bthread("Notgranted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Notgranted_id_N"}]);
  const steps = pick([0,1,2,10]);
  addNotgranted(x.id);
  for (var i=0; i<steps; i++) {
    updateNotgranted(x.id);
  }
  if (pick([true,false])) { deleteNotgranted(x.id); }
  verifyNotgrantedExists(x.id);
  verifyNotgrantedUpdated(x.id);
});

bthread("Notgranted nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNotgranted(a.id);
  block(matchAddNotgranted(a.id, ANY), function () {});
  addNotgranted(b.id);
});

bthread("Offlinesession nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Offlinesession_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOfflinesession(x.id);
  for (var i=0; i<steps; i++) {
    updateOfflinesession(x.id);
  }
  if (pick([true,false])) { deleteOfflinesession(x.id); }
  verifyOfflinesessionExists(x.id);
  verifyOfflinesessionUpdated(x.id);
});

bthread("Offlinesession nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOfflinesession(a.id);
  block(matchAddOfflinesession(a.id, ANY), function () {});
  addOfflinesession(b.id);
});

bthread("Offlinesessioncount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Offlinesessioncount_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOfflinesessioncount(x.id);
  for (var i=0; i<steps; i++) {
    updateOfflinesessioncount(x.id);
  }
  if (pick([true,false])) { deleteOfflinesessioncount(x.id); }
  verifyOfflinesessioncountExists(x.id);
  verifyOfflinesessioncountUpdated(x.id);
});

bthread("Offlinesessioncount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOfflinesessioncount(a.id);
  block(matchAddOfflinesessioncount(a.id, ANY), function () {});
  addOfflinesessioncount(b.id);
});

bthread("Optionalclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Optionalclientscope_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOptionalclientscope(x.id);
  for (var i=0; i<steps; i++) {
    updateOptionalclientscope(x.id);
  }
  if (pick([true,false])) { deleteOptionalclientscope(x.id); }
  verifyOptionalclientscopeExists(x.id);
  verifyOptionalclientscopeUpdated(x.id);
});

bthread("Optionalclientscope nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOptionalclientscope(a.id);
  block(matchAddOptionalclientscope(a.id, ANY), function () {});
  addOptionalclientscope(b.id);
});

bthread("Partialexport nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Partialexport_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPartialexport(x.id);
  for (var i=0; i<steps; i++) {
    updatePartialexport(x.id);
  }
  if (pick([true,false])) { deletePartialexport(x.id); }
  verifyPartialexportExists(x.id);
  verifyPartialexportUpdated(x.id);
});

bthread("Partialexport nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPartialexport(a.id);
  block(matchAddPartialexport(a.id, ANY), function () {});
  addPartialexport(b.id);
});

bthread("Partialimport nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Partialimport_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPartialimport(x.id);
  for (var i=0; i<steps; i++) {
    updatePartialimport(x.id);
  }
  if (pick([true,false])) { deletePartialimport(x.id); }
  verifyPartialimportExists(x.id);
  verifyPartialimportUpdated(x.id);
});

bthread("Partialimport nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPartialimport(a.id);
  block(matchAddPartialimport(a.id, ANY), function () {});
  addPartialimport(b.id);
});

bthread("Perclientconfigdescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Perclientconfigdescription_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPerclientconfigdescription(x.id);
  for (var i=0; i<steps; i++) {
    updatePerclientconfigdescription(x.id);
  }
  if (pick([true,false])) { deletePerclientconfigdescription(x.id); }
  verifyPerclientconfigdescriptionExists(x.id);
  verifyPerclientconfigdescriptionUpdated(x.id);
});

bthread("Perclientconfigdescription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPerclientconfigdescription(a.id);
  block(matchAddPerclientconfigdescription(a.id, ANY), function () {});
  addPerclientconfigdescription(b.id);
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

bthread("Policy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Policy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPolicy(x.id);
  for (var i=0; i<steps; i++) {
    updatePolicy(x.id);
  }
  if (pick([true,false])) { deletePolicy(x.id); }
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
});

bthread("Policy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPolicy(a.id);
  block(matchAddPolicy(a.id, ANY), function () {});
  addPolicy(b.id);
});

bthread("Profile nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Profile_id_N"}]);
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

bthread("Protocol nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Protocol_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProtocol(x.id);
  for (var i=0; i<steps; i++) {
    updateProtocol(x.id);
  }
  if (pick([true,false])) { deleteProtocol(x.id); }
  verifyProtocolExists(x.id);
  verifyProtocolUpdated(x.id);
});

bthread("Protocol nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProtocol(a.id);
  block(matchAddProtocol(a.id, ANY), function () {});
  addProtocol(b.id);
});

bthread("Protocolmapper nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Protocolmapper_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProtocolmapper(x.id);
  for (var i=0; i<steps; i++) {
    updateProtocolmapper(x.id);
  }
  if (pick([true,false])) { deleteProtocolmapper(x.id); }
  verifyProtocolmapperExists(x.id);
  verifyProtocolmapperUpdated(x.id);
});

bthread("Protocolmapper nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProtocolmapper(a.id);
  block(matchAddProtocolmapper(a.id, ANY), function () {});
  addProtocolmapper(b.id);
});

bthread("Provider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Provider_id_N"}]);
  const steps = pick([0,1,2,10]);
  addProvider(x.id);
  for (var i=0; i<steps; i++) {
    updateProvider(x.id);
  }
  if (pick([true,false])) { deleteProvider(x.id); }
  verifyProviderExists(x.id);
  verifyProviderUpdated(x.id);
});

bthread("Provider nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProvider(a.id);
  block(matchAddProvider(a.id, ANY), function () {});
  addProvider(b.id);
});

bthread("Pushrevocation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Pushrevocation_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPushrevocation(x.id);
  for (var i=0; i<steps; i++) {
    updatePushrevocation(x.id);
  }
  if (pick([true,false])) { deletePushrevocation(x.id); }
  verifyPushrevocationExists(x.id);
  verifyPushrevocationUpdated(x.id);
});

bthread("Pushrevocation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPushrevocation(a.id);
  block(matchAddPushrevocation(a.id, ANY), function () {});
  addPushrevocation(b.id);
});

bthread("Raisepriority nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Raisepriority_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRaisepriority(x.id);
  for (var i=0; i<steps; i++) {
    updateRaisepriority(x.id);
  }
  if (pick([true,false])) { deleteRaisepriority(x.id); }
  verifyRaisepriorityExists(x.id);
  verifyRaisepriorityUpdated(x.id);
});

bthread("Raisepriority nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRaisepriority(a.id);
  block(matchAddRaisepriority(a.id, ANY), function () {});
  addRaisepriority(b.id);
});

bthread("Realm nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Realm_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRealm(x.id);
  for (var i=0; i<steps; i++) {
    updateRealm(x.id);
  }
  if (pick([true,false])) { deleteRealm(x.id); }
  verifyRealmExists(x.id);
  verifyRealmUpdated(x.id);
});

bthread("Realm nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRealm(a.id);
  block(matchAddRealm(a.id, ANY), function () {});
  addRealm(b.id);
});

bthread("Registerrequiredaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Registerrequiredaction_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRegisterrequiredaction(x.id);
  for (var i=0; i<steps; i++) {
    updateRegisterrequiredaction(x.id);
  }
  if (pick([true,false])) { deleteRegisterrequiredaction(x.id); }
  verifyRegisterrequiredactionExists(x.id);
  verifyRegisterrequiredactionUpdated(x.id);
});

bthread("Registerrequiredaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRegisterrequiredaction(a.id);
  block(matchAddRegisterrequiredaction(a.id, ANY), function () {});
  addRegisterrequiredaction(b.id);
});

bthread("Registrationaccesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Registrationaccesstoken_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRegistrationaccesstoken(x.id);
  for (var i=0; i<steps; i++) {
    updateRegistrationaccesstoken(x.id);
  }
  if (pick([true,false])) { deleteRegistrationaccesstoken(x.id); }
  verifyRegistrationaccesstokenExists(x.id);
  verifyRegistrationaccesstokenUpdated(x.id);
});

bthread("Registrationaccesstoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRegistrationaccesstoken(a.id);
  block(matchAddRegistrationaccesstoken(a.id, ANY), function () {});
  addRegistrationaccesstoken(b.id);
});

bthread("Requiredaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Requiredaction_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRequiredaction(x.id);
  for (var i=0; i<steps; i++) {
    updateRequiredaction(x.id);
  }
  if (pick([true,false])) { deleteRequiredaction(x.id); }
  verifyRequiredactionExists(x.id);
  verifyRequiredactionUpdated(x.id);
});

bthread("Requiredaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRequiredaction(a.id);
  block(matchAddRequiredaction(a.id, ANY), function () {});
  addRequiredaction(b.id);
});

bthread("Resetpassword nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Resetpassword_id_N"}]);
  const steps = pick([0,1,2,10]);
  addResetpassword(x.id);
  for (var i=0; i<steps; i++) {
    updateResetpassword(x.id);
  }
  if (pick([true,false])) { deleteResetpassword(x.id); }
  verifyResetpasswordExists(x.id);
  verifyResetpasswordUpdated(x.id);
});

bthread("Resetpassword nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addResetpassword(a.id);
  block(matchAddResetpassword(a.id, ANY), function () {});
  addResetpassword(b.id);
});

bthread("Resetpasswordemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Resetpasswordemail_id_N"}]);
  const steps = pick([0,1,2,10]);
  addResetpasswordemail(x.id);
  for (var i=0; i<steps; i++) {
    updateResetpasswordemail(x.id);
  }
  if (pick([true,false])) { deleteResetpasswordemail(x.id); }
  verifyResetpasswordemailExists(x.id);
  verifyResetpasswordemailUpdated(x.id);
});

bthread("Resetpasswordemail nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addResetpasswordemail(a.id);
  block(matchAddResetpasswordemail(a.id, ANY), function () {});
  addResetpasswordemail(b.id);
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

bthread("Rolemapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Rolemapping_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRolemapping(x.id);
  for (var i=0; i<steps; i++) {
    updateRolemapping(x.id);
  }
  if (pick([true,false])) { deleteRolemapping(x.id); }
  verifyRolemappingExists(x.id);
  verifyRolemappingUpdated(x.id);
});

bthread("Rolemapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRolemapping(a.id);
  block(matchAddRolemapping(a.id, ANY), function () {});
  addRolemapping(b.id);
});

bthread("Rolesbyid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Rolesbyid_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRolesbyid(x.id);
  for (var i=0; i<steps; i++) {
    updateRolesbyid(x.id);
  }
  if (pick([true,false])) { deleteRolesbyid(x.id); }
  verifyRolesbyidExists(x.id);
  verifyRolesbyidUpdated(x.id);
});

bthread("Rolesbyid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRolesbyid(a.id);
  block(matchAddRolesbyid(a.id, ANY), function () {});
  addRolesbyid(b.id);
});

bthread("Rotated nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Rotated_id_N"}]);
  const steps = pick([0,1,2,10]);
  addRotated(x.id);
  for (var i=0; i<steps; i++) {
    updateRotated(x.id);
  }
  if (pick([true,false])) { deleteRotated(x.id); }
  verifyRotatedExists(x.id);
  verifyRotatedUpdated(x.id);
});

bthread("Rotated nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRotated(a.id);
  block(matchAddRotated(a.id, ANY), function () {});
  addRotated(b.id);
});

bthread("Scopemapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Scopemapping_id_N"}]);
  const steps = pick([0,1,2,10]);
  addScopemapping(x.id);
  for (var i=0; i<steps; i++) {
    updateScopemapping(x.id);
  }
  if (pick([true,false])) { deleteScopemapping(x.id); }
  verifyScopemappingExists(x.id);
  verifyScopemappingUpdated(x.id);
});

bthread("Scopemapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addScopemapping(a.id);
  block(matchAddScopemapping(a.id, ANY), function () {});
  addScopemapping(b.id);
});

bthread("Sendverifyemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Sendverifyemail_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSendverifyemail(x.id);
  for (var i=0; i<steps; i++) {
    updateSendverifyemail(x.id);
  }
  if (pick([true,false])) { deleteSendverifyemail(x.id); }
  verifySendverifyemailExists(x.id);
  verifySendverifyemailUpdated(x.id);
});

bthread("Sendverifyemail nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSendverifyemail(a.id);
  block(matchAddSendverifyemail(a.id, ANY), function () {});
  addSendverifyemail(b.id);
});

bthread("Serviceaccountuser nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Serviceaccountuser_id_N"}]);
  const steps = pick([0,1,2,10]);
  addServiceaccountuser(x.id);
  for (var i=0; i<steps; i++) {
    updateServiceaccountuser(x.id);
  }
  if (pick([true,false])) { deleteServiceaccountuser(x.id); }
  verifyServiceaccountuserExists(x.id);
  verifyServiceaccountuserUpdated(x.id);
});

bthread("Serviceaccountuser nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addServiceaccountuser(a.id);
  block(matchAddServiceaccountuser(a.id, ANY), function () {});
  addServiceaccountuser(b.id);
});

bthread("Session nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Session_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSession(x.id);
  for (var i=0; i<steps; i++) {
    updateSession(x.id);
  }
  if (pick([true,false])) { deleteSession(x.id); }
  verifySessionExists(x.id);
  verifySessionUpdated(x.id);
});

bthread("Session nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSession(a.id);
  block(matchAddSession(a.id, ANY), function () {});
  addSession(b.id);
});

bthread("Sessioncount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Sessioncount_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSessioncount(x.id);
  for (var i=0; i<steps; i++) {
    updateSessioncount(x.id);
  }
  if (pick([true,false])) { deleteSessioncount(x.id); }
  verifySessioncountExists(x.id);
  verifySessioncountUpdated(x.id);
});

bthread("Sessioncount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSessioncount(a.id);
  block(matchAddSessioncount(a.id, ANY), function () {});
  addSessioncount(b.id);
});

bthread("Subcomponenttype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Subcomponenttype_id_N"}]);
  const steps = pick([0,1,2,10]);
  addSubcomponenttype(x.id);
  for (var i=0; i<steps; i++) {
    updateSubcomponenttype(x.id);
  }
  if (pick([true,false])) { deleteSubcomponenttype(x.id); }
  verifySubcomponenttypeExists(x.id);
  verifySubcomponenttypeUpdated(x.id);
});

bthread("Subcomponenttype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSubcomponenttype(a.id);
  block(matchAddSubcomponenttype(a.id, ANY), function () {});
  addSubcomponenttype(b.id);
});

bthread("Testnodesavailable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Testnodesavailable_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTestnodesavailable(x.id);
  for (var i=0; i<steps; i++) {
    updateTestnodesavailable(x.id);
  }
  if (pick([true,false])) { deleteTestnodesavailable(x.id); }
  verifyTestnodesavailableExists(x.id);
  verifyTestnodesavailableUpdated(x.id);
});

bthread("Testnodesavailable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTestnodesavailable(a.id);
  block(matchAddTestnodesavailable(a.id, ANY), function () {});
  addTestnodesavailable(b.id);
});

bthread("Testsmtpconnection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Testsmtpconnection_id_N"}]);
  const steps = pick([0,1,2,10]);
  addTestsmtpconnection(x.id);
  for (var i=0; i<steps; i++) {
    updateTestsmtpconnection(x.id);
  }
  if (pick([true,false])) { deleteTestsmtpconnection(x.id); }
  verifyTestsmtpconnectionExists(x.id);
  verifyTestsmtpconnectionUpdated(x.id);
});

bthread("Testsmtpconnection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTestsmtpconnection(a.id);
  block(matchAddTestsmtpconnection(a.id, ANY), function () {});
  addTestsmtpconnection(b.id);
});

bthread("Unregisteredrequiredaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Unregisteredrequiredaction_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUnregisteredrequiredaction(x.id);
  for (var i=0; i<steps; i++) {
    updateUnregisteredrequiredaction(x.id);
  }
  if (pick([true,false])) { deleteUnregisteredrequiredaction(x.id); }
  verifyUnregisteredrequiredactionExists(x.id);
  verifyUnregisteredrequiredactionUpdated(x.id);
});

bthread("Unregisteredrequiredaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUnregisteredrequiredaction(a.id);
  block(matchAddUnregisteredrequiredaction(a.id, ANY), function () {});
  addUnregisteredrequiredaction(b.id);
});

bthread("Upload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Upload_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUpload(x.id);
  for (var i=0; i<steps; i++) {
    updateUpload(x.id);
  }
  if (pick([true,false])) { deleteUpload(x.id); }
  verifyUploadExists(x.id);
  verifyUploadUpdated(x.id);
});

bthread("Upload nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUpload(a.id);
  block(matchAddUpload(a.id, ANY), function () {});
  addUpload(b.id);
});

bthread("Uploadcertificate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Uploadcertificate_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUploadcertificate(x.id);
  for (var i=0; i<steps; i++) {
    updateUploadcertificate(x.id);
  }
  if (pick([true,false])) { deleteUploadcertificate(x.id); }
  verifyUploadcertificateExists(x.id);
  verifyUploadcertificateUpdated(x.id);
});

bthread("Uploadcertificate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUploadcertificate(a.id);
  block(matchAddUploadcertificate(a.id, ANY), function () {});
  addUploadcertificate(b.id);
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

bthread("Userlabel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Userlabel_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUserlabel(x.id);
  for (var i=0; i<steps; i++) {
    updateUserlabel(x.id);
  }
  if (pick([true,false])) { deleteUserlabel(x.id); }
  verifyUserlabelExists(x.id);
  verifyUserlabelUpdated(x.id);
});

bthread("Userlabel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUserlabel(a.id);
  block(matchAddUserlabel(a.id, ANY), function () {});
  addUserlabel(b.id);
});

bthread("Usersession nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Usersession_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUsersession(x.id);
  for (var i=0; i<steps; i++) {
    updateUsersession(x.id);
  }
  if (pick([true,false])) { deleteUsersession(x.id); }
  verifyUsersessionExists(x.id);
  verifyUsersessionUpdated(x.id);
});

bthread("Usersession nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUsersession(a.id);
  block(matchAddUsersession(a.id, ANY), function () {});
  addUsersession(b.id);
});

bthread("Usersmanagementpermission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Usersmanagementpermission_id_N"}]);
  const steps = pick([0,1,2,10]);
  addUsersmanagementpermission(x.id);
  for (var i=0; i<steps; i++) {
    updateUsersmanagementpermission(x.id);
  }
  if (pick([true,false])) { deleteUsersmanagementpermission(x.id); }
  verifyUsersmanagementpermissionExists(x.id);
  verifyUsersmanagementpermissionUpdated(x.id);
});

bthread("Usersmanagementpermission nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUsersmanagementpermission(a.id);
  block(matchAddUsersmanagementpermission(a.id, ANY), function () {});
  addUsersmanagementpermission(b.id);
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


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Addmodel", "Adminevent", "Attackdetection", "Authentication", "Authenticatorprovider", "Available", "Bruteforce", "Certificate", "Children", "Client", "Clientauthenticatorprovider", "Clientdescriptionconverter", "Clientpolicy", "Clientregistrationpolicy", "Clientscope", "Clientsecret", "Clientsessionstat", "Clientsinitialacces", "Clienttemplate", "Component", "Composite", "Config", "Configdescription", "Configureduserstoragecredentialtype", "Consent", "Copy", "Count", "Credential", "Credentialregistrator", "Defaultclientscope", "Defaultdefaultclientscope", "Defaultgroup", "Defaultoptionalclientscope", "Disablecredentialtype", "Download", "Evaluatescope", "Event", "Executeactionsemail", "Execution", "Export", "Federatedidentity", "Flow", "Formactionprovider", "Formprovider", "Generate", "Generateanddownload", "Generateexampleaccesstoken", "Generateexampleidtoken", "Generateexampleuserinfo", "Granted", "Group", "Groupbypath", "Identityprovider", "Impersonation", "Importconfig", "Installation", "Instance", "Key", "Localization", "Logout", "Logoutall", "Lowerpriority", "Management", "Mapper", "Mappertype", "Member", "Model", "Moveafter", "Movetofirst", "Node", "Notgranted", "Offlinesession", "Offlinesessioncount", "Optionalclientscope", "Partialexport", "Partialimport", "Perclientconfigdescription", "Permission", "Policy", "Profile", "Protocol", "Protocolmapper", "Provider", "Pushrevocation", "Raisepriority", "Realm", "Registerrequiredaction", "Registrationaccesstoken", "Requiredaction", "Resetpassword", "Resetpasswordemail", "Role", "Rolemapping", "Rolesbyid", "Rotated", "Scopemapping", "Sendverifyemail", "Serviceaccountuser", "Session", "Sessioncount", "Subcomponenttype", "Testnodesavailable", "Testsmtpconnection", "Unregisteredrequiredaction", "Upload", "Uploadcertificate", "User", "Userlabel", "Usersession", "Usersmanagementpermission"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Addmodel": {"add": "addAddmodel", "update": "updateAddmodel", "delete": "deleteAddmodel"}, "Adminevent": {"add": "addAdminevent", "update": "updateAdminevent", "delete": "deleteAdminevent"}, "Attackdetection": {"add": "addAttackdetection", "update": "updateAttackdetection", "delete": "deleteAttackdetection"}, "Authentication": {"add": "addAuthentication", "update": "updateAuthentication", "delete": "deleteAuthentication"}, "Authenticatorprovider": {"add": "addAuthenticatorprovider", "update": "updateAuthenticatorprovider", "delete": "deleteAuthenticatorprovider"}, "Available": {"add": "addAvailable", "update": "updateAvailable", "delete": "deleteAvailable"}, "Bruteforce": {"add": "addBruteforce", "update": "updateBruteforce", "delete": "deleteBruteforce"}, "Certificate": {"add": "addCertificate", "update": "updateCertificate", "delete": "deleteCertificate"}, "Children": {"add": "addChildren", "update": "updateChildren", "delete": "deleteChildren"}, "Client": {"add": "addClient", "update": "updateClient", "delete": "deleteClient"}, "Clientauthenticatorprovider": {"add": "addClientauthenticatorprovider", "update": "updateClientauthenticatorprovider", "delete": "deleteClientauthenticatorprovider"}, "Clientdescriptionconverter": {"add": "addClientdescriptionconverter", "update": "updateClientdescriptionconverter", "delete": "deleteClientdescriptionconverter"}, "Clientpolicy": {"add": "addClientpolicy", "update": "updateClientpolicy", "delete": "deleteClientpolicy"}, "Clientregistrationpolicy": {"add": "addClientregistrationpolicy", "update": "updateClientregistrationpolicy", "delete": "deleteClientregistrationpolicy"}, "Clientscope": {"add": "addClientscope", "update": "updateClientscope", "delete": "deleteClientscope"}, "Clientsecret": {"add": "addClientsecret", "update": "updateClientsecret", "delete": "deleteClientsecret"}, "Clientsessionstat": {"add": "addClientsessionstat", "update": "updateClientsessionstat", "delete": "deleteClientsessionstat"}, "Clientsinitialacces": {"add": "addClientsinitialacces", "update": "updateClientsinitialacces", "delete": "deleteClientsinitialacces"}, "Clienttemplate": {"add": "addClienttemplate", "update": "updateClienttemplate", "delete": "deleteClienttemplate"}, "Component": {"add": "addComponent", "update": "updateComponent", "delete": "deleteComponent"}, "Composite": {"add": "addComposite", "update": "updateComposite", "delete": "deleteComposite"}, "Config": {"add": "addConfig", "update": "updateConfig", "delete": "deleteConfig"}, "Configdescription": {"add": "addConfigdescription", "update": "updateConfigdescription", "delete": "deleteConfigdescription"}, "Configureduserstoragecredentialtype": {"add": "addConfigureduserstoragecredentialtype", "update": "updateConfigureduserstoragecredentialtype", "delete": "deleteConfigureduserstoragecredentialtype"}, "Consent": {"add": "addConsent", "update": "updateConsent", "delete": "deleteConsent"}, "Copy": {"add": "addCopy", "update": "updateCopy", "delete": "deleteCopy"}, "Count": {"add": "addCount", "update": "updateCount", "delete": "deleteCount"}, "Credential": {"add": "addCredential", "update": "updateCredential", "delete": "deleteCredential"}, "Credentialregistrator": {"add": "addCredentialregistrator", "update": "updateCredentialregistrator", "delete": "deleteCredentialregistrator"}, "Defaultclientscope": {"add": "addDefaultclientscope", "update": "updateDefaultclientscope", "delete": "deleteDefaultclientscope"}, "Defaultdefaultclientscope": {"add": "addDefaultdefaultclientscope", "update": "updateDefaultdefaultclientscope", "delete": "deleteDefaultdefaultclientscope"}, "Defaultgroup": {"add": "addDefaultgroup", "update": "updateDefaultgroup", "delete": "deleteDefaultgroup"}, "Defaultoptionalclientscope": {"add": "addDefaultoptionalclientscope", "update": "updateDefaultoptionalclientscope", "delete": "deleteDefaultoptionalclientscope"}, "Disablecredentialtype": {"add": "addDisablecredentialtype", "update": "updateDisablecredentialtype", "delete": "deleteDisablecredentialtype"}, "Download": {"add": "addDownload", "update": "updateDownload", "delete": "deleteDownload"}, "Evaluatescope": {"add": "addEvaluatescope", "update": "updateEvaluatescope", "delete": "deleteEvaluatescope"}, "Event": {"add": "addEvent", "update": "updateEvent", "delete": "deleteEvent"}, "Executeactionsemail": {"add": "addExecuteactionsemail", "update": "updateExecuteactionsemail", "delete": "deleteExecuteactionsemail"}, "Execution": {"add": "addExecution", "update": "updateExecution", "delete": "deleteExecution"}, "Export": {"add": "addExport", "update": "updateExport", "delete": "deleteExport"}, "Federatedidentity": {"add": "addFederatedidentity", "update": "updateFederatedidentity", "delete": "deleteFederatedidentity"}, "Flow": {"add": "addFlow", "update": "updateFlow", "delete": "deleteFlow"}, "Formactionprovider": {"add": "addFormactionprovider", "update": "updateFormactionprovider", "delete": "deleteFormactionprovider"}, "Formprovider": {"add": "addFormprovider", "update": "updateFormprovider", "delete": "deleteFormprovider"}, "Generate": {"add": "addGenerate", "update": "updateGenerate", "delete": "deleteGenerate"}, "Generateanddownload": {"add": "addGenerateanddownload", "update": "updateGenerateanddownload", "delete": "deleteGenerateanddownload"}, "Generateexampleaccesstoken": {"add": "addGenerateexampleaccesstoken", "update": "updateGenerateexampleaccesstoken", "delete": "deleteGenerateexampleaccesstoken"}, "Generateexampleidtoken": {"add": "addGenerateexampleidtoken", "update": "updateGenerateexampleidtoken", "delete": "deleteGenerateexampleidtoken"}, "Generateexampleuserinfo": {"add": "addGenerateexampleuserinfo", "update": "updateGenerateexampleuserinfo", "delete": "deleteGenerateexampleuserinfo"}, "Granted": {"add": "addGranted", "update": "updateGranted", "delete": "deleteGranted"}, "Group": {"add": "addGroup", "update": "updateGroup", "delete": "deleteGroup"}, "Groupbypath": {"add": "addGroupbypath", "update": "updateGroupbypath", "delete": "deleteGroupbypath"}, "Identityprovider": {"add": "addIdentityprovider", "update": "updateIdentityprovider", "delete": "deleteIdentityprovider"}, "Impersonation": {"add": "addImpersonation", "update": "updateImpersonation", "delete": "deleteImpersonation"}, "Importconfig": {"add": "addImportconfig", "update": "updateImportconfig", "delete": "deleteImportconfig"}, "Installation": {"add": "addInstallation", "update": "updateInstallation", "delete": "deleteInstallation"}, "Instance": {"add": "addInstance", "update": "updateInstance", "delete": "deleteInstance"}, "Key": {"add": "addKey", "update": "updateKey", "delete": "deleteKey"}, "Localization": {"add": "addLocalization", "update": "updateLocalization", "delete": "deleteLocalization"}, "Logout": {"add": "addLogout", "update": "updateLogout", "delete": "deleteLogout"}, "Logoutall": {"add": "addLogoutall", "update": "updateLogoutall", "delete": "deleteLogoutall"}, "Lowerpriority": {"add": "addLowerpriority", "update": "updateLowerpriority", "delete": "deleteLowerpriority"}, "Management": {"add": "addManagement", "update": "updateManagement", "delete": "deleteManagement"}, "Mapper": {"add": "addMapper", "update": "updateMapper", "delete": "deleteMapper"}, "Mappertype": {"add": "addMappertype", "update": "updateMappertype", "delete": "deleteMappertype"}, "Member": {"add": "addMember", "update": "updateMember", "delete": "deleteMember"}, "Model": {"add": "addModel", "update": "updateModel", "delete": "deleteModel"}, "Moveafter": {"add": "addMoveafter", "update": "updateMoveafter", "delete": "deleteMoveafter"}, "Movetofirst": {"add": "addMovetofirst", "update": "updateMovetofirst", "delete": "deleteMovetofirst"}, "Node": {"add": "addNode", "update": "updateNode", "delete": "deleteNode"}, "Notgranted": {"add": "addNotgranted", "update": "updateNotgranted", "delete": "deleteNotgranted"}, "Offlinesession": {"add": "addOfflinesession", "update": "updateOfflinesession", "delete": "deleteOfflinesession"}, "Offlinesessioncount": {"add": "addOfflinesessioncount", "update": "updateOfflinesessioncount", "delete": "deleteOfflinesessioncount"}, "Optionalclientscope": {"add": "addOptionalclientscope", "update": "updateOptionalclientscope", "delete": "deleteOptionalclientscope"}, "Partialexport": {"add": "addPartialexport", "update": "updatePartialexport", "delete": "deletePartialexport"}, "Partialimport": {"add": "addPartialimport", "update": "updatePartialimport", "delete": "deletePartialimport"}, "Perclientconfigdescription": {"add": "addPerclientconfigdescription", "update": "updatePerclientconfigdescription", "delete": "deletePerclientconfigdescription"}, "Permission": {"add": "addPermission", "update": "updatePermission", "delete": "deletePermission"}, "Policy": {"add": "addPolicy", "update": "updatePolicy", "delete": "deletePolicy"}, "Profile": {"add": "addProfile", "update": "updateProfile", "delete": "deleteProfile"}, "Protocol": {"add": "addProtocol", "update": "updateProtocol", "delete": "deleteProtocol"}, "Protocolmapper": {"add": "addProtocolmapper", "update": "updateProtocolmapper", "delete": "deleteProtocolmapper"}, "Provider": {"add": "addProvider", "update": "updateProvider", "delete": "deleteProvider"}, "Pushrevocation": {"add": "addPushrevocation", "update": "updatePushrevocation", "delete": "deletePushrevocation"}, "Raisepriority": {"add": "addRaisepriority", "update": "updateRaisepriority", "delete": "deleteRaisepriority"}, "Realm": {"add": "addRealm", "update": "updateRealm", "delete": "deleteRealm"}, "Registerrequiredaction": {"add": "addRegisterrequiredaction", "update": "updateRegisterrequiredaction", "delete": "deleteRegisterrequiredaction"}, "Registrationaccesstoken": {"add": "addRegistrationaccesstoken", "update": "updateRegistrationaccesstoken", "delete": "deleteRegistrationaccesstoken"}, "Requiredaction": {"add": "addRequiredaction", "update": "updateRequiredaction", "delete": "deleteRequiredaction"}, "Resetpassword": {"add": "addResetpassword", "update": "updateResetpassword", "delete": "deleteResetpassword"}, "Resetpasswordemail": {"add": "addResetpasswordemail", "update": "updateResetpasswordemail", "delete": "deleteResetpasswordemail"}, "Role": {"add": "addRole", "update": "updateRole", "delete": "deleteRole"}, "Rolemapping": {"add": "addRolemapping", "update": "updateRolemapping", "delete": "deleteRolemapping"}, "Rolesbyid": {"add": "addRolesbyid", "update": "updateRolesbyid", "delete": "deleteRolesbyid"}, "Rotated": {"add": "addRotated", "update": "updateRotated", "delete": "deleteRotated"}, "Scopemapping": {"add": "addScopemapping", "update": "updateScopemapping", "delete": "deleteScopemapping"}, "Sendverifyemail": {"add": "addSendverifyemail", "update": "updateSendverifyemail", "delete": "deleteSendverifyemail"}, "Serviceaccountuser": {"add": "addServiceaccountuser", "update": "updateServiceaccountuser", "delete": "deleteServiceaccountuser"}, "Session": {"add": "addSession", "update": "updateSession", "delete": "deleteSession"}, "Sessioncount": {"add": "addSessioncount", "update": "updateSessioncount", "delete": "deleteSessioncount"}, "Subcomponenttype": {"add": "addSubcomponenttype", "update": "updateSubcomponenttype", "delete": "deleteSubcomponenttype"}, "Testnodesavailable": {"add": "addTestnodesavailable", "update": "updateTestnodesavailable", "delete": "deleteTestnodesavailable"}, "Testsmtpconnection": {"add": "addTestsmtpconnection", "update": "updateTestsmtpconnection", "delete": "deleteTestsmtpconnection"}, "Unregisteredrequiredaction": {"add": "addUnregisteredrequiredaction", "update": "updateUnregisteredrequiredaction", "delete": "deleteUnregisteredrequiredaction"}, "Upload": {"add": "addUpload", "update": "updateUpload", "delete": "deleteUpload"}, "Uploadcertificate": {"add": "addUploadcertificate", "update": "updateUploadcertificate", "delete": "deleteUploadcertificate"}, "User": {"add": "addUser", "update": "updateUser", "delete": "deleteUser"}, "Userlabel": {"add": "addUserlabel", "update": "updateUserlabel", "delete": "deleteUserlabel"}, "Usersession": {"add": "addUsersession", "update": "updateUsersession", "delete": "deleteUsersession"}, "Usersmanagementpermission": {"add": "addUsersmanagementpermission", "update": "updateUsersmanagementpermission", "delete": "deleteUsersmanagementpermission"}};
globalThis.__DSL_ARG0__ = {"Addmodel": "id", "Adminevent": "id", "Attackdetection": "id", "Authentication": "id", "Authenticatorprovider": "id", "Available": "id", "Bruteforce": "id", "Certificate": "id", "Children": "id", "Client": "id", "Clientauthenticatorprovider": "id", "Clientdescriptionconverter": "id", "Clientpolicy": "id", "Clientregistrationpolicy": "id", "Clientscope": "id", "Clientsecret": "id", "Clientsessionstat": "id", "Clientsinitialacces": "id", "Clienttemplate": "id", "Component": "id", "Composite": "id", "Config": "id", "Configdescription": "id", "Configureduserstoragecredentialtype": "id", "Consent": "id", "Copy": "id", "Count": "id", "Credential": "id", "Credentialregistrator": "id", "Defaultclientscope": "id", "Defaultdefaultclientscope": "id", "Defaultgroup": "id", "Defaultoptionalclientscope": "id", "Disablecredentialtype": "id", "Download": "id", "Evaluatescope": "id", "Event": "id", "Executeactionsemail": "id", "Execution": "id", "Export": "id", "Federatedidentity": "id", "Flow": "id", "Formactionprovider": "id", "Formprovider": "id", "Generate": "id", "Generateanddownload": "id", "Generateexampleaccesstoken": "id", "Generateexampleidtoken": "id", "Generateexampleuserinfo": "id", "Granted": "id", "Group": "id", "Groupbypath": "id", "Identityprovider": "id", "Impersonation": "id", "Importconfig": "id", "Installation": "id", "Instance": "id", "Key": "id", "Localization": "id", "Logout": "id", "Logoutall": "id", "Lowerpriority": "id", "Management": "id", "Mapper": "id", "Mappertype": "id", "Member": "id", "Model": "id", "Moveafter": "id", "Movetofirst": "id", "Node": "id", "Notgranted": "id", "Offlinesession": "id", "Offlinesessioncount": "id", "Optionalclientscope": "id", "Partialexport": "id", "Partialimport": "id", "Perclientconfigdescription": "id", "Permission": "id", "Policy": "id", "Profile": "id", "Protocol": "id", "Protocolmapper": "id", "Provider": "id", "Pushrevocation": "id", "Raisepriority": "id", "Realm": "id", "Registerrequiredaction": "id", "Registrationaccesstoken": "id", "Requiredaction": "id", "Resetpassword": "id", "Resetpasswordemail": "id", "Role": "id", "Rolemapping": "id", "Rolesbyid": "id", "Rotated": "id", "Scopemapping": "id", "Sendverifyemail": "id", "Serviceaccountuser": "id", "Session": "id", "Sessioncount": "id", "Subcomponenttype": "id", "Testnodesavailable": "id", "Testsmtpconnection": "id", "Unregisteredrequiredaction": "id", "Upload": "id", "Uploadcertificate": "id", "User": "id", "Userlabel": "id", "Usersession": "id", "Usersmanagementpermission": "id"};


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
