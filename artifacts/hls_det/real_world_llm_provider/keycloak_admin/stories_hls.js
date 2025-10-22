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


bthread("AddmodelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddmodel(x.id);
  const e_add = waitForAddmodelAdded(id);
  block(matchDeleteAddmodel(id), function () {
    verifyAddmodelExists(id);
  });
  updateAddmodel(x.id);
  updateAddmodel(x.id);
  const e_upd = waitForAddmodelUpdated(id);
  block(matchDeleteAddmodel(id), function () {
    verifyAddmodelUpdated(id);
  });
  deleteAddmodel(x.id);
  const e_del = waitForAddmodelDeleted(id);
  block(matchAddAddmodel(id), function () {
    verifyAddmodelDoesNotExist(id);
  });
});

bthread("AdmineventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAdminevent(x.id);
  const e_add = waitForAdmineventAdded(id);
  block(matchDeleteAdminevent(id), function () {
    verifyAdmineventExists(id);
  });
  updateAdminevent(x.id);
  updateAdminevent(x.id);
  const e_upd = waitForAdmineventUpdated(id);
  block(matchDeleteAdminevent(id), function () {
    verifyAdmineventUpdated(id);
  });
  deleteAdminevent(x.id);
  const e_del = waitForAdmineventDeleted(id);
  block(matchAddAdminevent(id), function () {
    verifyAdmineventDoesNotExist(id);
  });
});

bthread("AttackdetectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAttackdetection(x.id);
  const e_add = waitForAttackdetectionAdded(id);
  block(matchDeleteAttackdetection(id), function () {
    verifyAttackdetectionExists(id);
  });
  updateAttackdetection(x.id);
  updateAttackdetection(x.id);
  const e_upd = waitForAttackdetectionUpdated(id);
  block(matchDeleteAttackdetection(id), function () {
    verifyAttackdetectionUpdated(id);
  });
  deleteAttackdetection(x.id);
  const e_del = waitForAttackdetectionDeleted(id);
  block(matchAddAttackdetection(id), function () {
    verifyAttackdetectionDoesNotExist(id);
  });
});

bthread("AuthenticationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthentication(x.id);
  const e_add = waitForAuthenticationAdded(id);
  block(matchDeleteAuthentication(id), function () {
    verifyAuthenticationExists(id);
  });
  updateAuthentication(x.id);
  updateAuthentication(x.id);
  const e_upd = waitForAuthenticationUpdated(id);
  block(matchDeleteAuthentication(id), function () {
    verifyAuthenticationUpdated(id);
  });
  deleteAuthentication(x.id);
  const e_del = waitForAuthenticationDeleted(id);
  block(matchAddAuthentication(id), function () {
    verifyAuthenticationDoesNotExist(id);
  });
});

bthread("AuthenticatorproviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticatorprovider(x.id);
  const e_add = waitForAuthenticatorproviderAdded(id);
  block(matchDeleteAuthenticatorprovider(id), function () {
    verifyAuthenticatorproviderExists(id);
  });
  updateAuthenticatorprovider(x.id);
  updateAuthenticatorprovider(x.id);
  const e_upd = waitForAuthenticatorproviderUpdated(id);
  block(matchDeleteAuthenticatorprovider(id), function () {
    verifyAuthenticatorproviderUpdated(id);
  });
  deleteAuthenticatorprovider(x.id);
  const e_del = waitForAuthenticatorproviderDeleted(id);
  block(matchAddAuthenticatorprovider(id), function () {
    verifyAuthenticatorproviderDoesNotExist(id);
  });
});

bthread("AvailableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailable(x.id);
  const e_add = waitForAvailableAdded(id);
  block(matchDeleteAvailable(id), function () {
    verifyAvailableExists(id);
  });
  updateAvailable(x.id);
  updateAvailable(x.id);
  const e_upd = waitForAvailableUpdated(id);
  block(matchDeleteAvailable(id), function () {
    verifyAvailableUpdated(id);
  });
  deleteAvailable(x.id);
  const e_del = waitForAvailableDeleted(id);
  block(matchAddAvailable(id), function () {
    verifyAvailableDoesNotExist(id);
  });
});

bthread("BruteforceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBruteforce(x.id);
  const e_add = waitForBruteforceAdded(id);
  block(matchDeleteBruteforce(id), function () {
    verifyBruteforceExists(id);
  });
  updateBruteforce(x.id);
  updateBruteforce(x.id);
  const e_upd = waitForBruteforceUpdated(id);
  block(matchDeleteBruteforce(id), function () {
    verifyBruteforceUpdated(id);
  });
  deleteBruteforce(x.id);
  const e_del = waitForBruteforceDeleted(id);
  block(matchAddBruteforce(id), function () {
    verifyBruteforceDoesNotExist(id);
  });
});

bthread("CertificateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCertificate(x.id);
  const e_add = waitForCertificateAdded(id);
  block(matchDeleteCertificate(id), function () {
    verifyCertificateExists(id);
  });
  updateCertificate(x.id);
  updateCertificate(x.id);
  const e_upd = waitForCertificateUpdated(id);
  block(matchDeleteCertificate(id), function () {
    verifyCertificateUpdated(id);
  });
  deleteCertificate(x.id);
  const e_del = waitForCertificateDeleted(id);
  block(matchAddCertificate(id), function () {
    verifyCertificateDoesNotExist(id);
  });
});

bthread("ChildrenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChildren(x.id);
  const e_add = waitForChildrenAdded(id);
  block(matchDeleteChildren(id), function () {
    verifyChildrenExists(id);
  });
  updateChildren(x.id);
  updateChildren(x.id);
  const e_upd = waitForChildrenUpdated(id);
  block(matchDeleteChildren(id), function () {
    verifyChildrenUpdated(id);
  });
  deleteChildren(x.id);
  const e_del = waitForChildrenDeleted(id);
  block(matchAddChildren(id), function () {
    verifyChildrenDoesNotExist(id);
  });
});

bthread("ClientLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClient(x.id);
  const e_add = waitForClientAdded(id);
  block(matchDeleteClient(id), function () {
    verifyClientExists(id);
  });
  updateClient(x.id);
  updateClient(x.id);
  const e_upd = waitForClientUpdated(id);
  block(matchDeleteClient(id), function () {
    verifyClientUpdated(id);
  });
  deleteClient(x.id);
  const e_del = waitForClientDeleted(id);
  block(matchAddClient(id), function () {
    verifyClientDoesNotExist(id);
  });
});

bthread("ClientauthenticatorproviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientauthenticatorprovider(x.id);
  const e_add = waitForClientauthenticatorproviderAdded(id);
  block(matchDeleteClientauthenticatorprovider(id), function () {
    verifyClientauthenticatorproviderExists(id);
  });
  updateClientauthenticatorprovider(x.id);
  updateClientauthenticatorprovider(x.id);
  const e_upd = waitForClientauthenticatorproviderUpdated(id);
  block(matchDeleteClientauthenticatorprovider(id), function () {
    verifyClientauthenticatorproviderUpdated(id);
  });
  deleteClientauthenticatorprovider(x.id);
  const e_del = waitForClientauthenticatorproviderDeleted(id);
  block(matchAddClientauthenticatorprovider(id), function () {
    verifyClientauthenticatorproviderDoesNotExist(id);
  });
});

bthread("ClientdescriptionconverterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientdescriptionconverter(x.id);
  const e_add = waitForClientdescriptionconverterAdded(id);
  block(matchDeleteClientdescriptionconverter(id), function () {
    verifyClientdescriptionconverterExists(id);
  });
  updateClientdescriptionconverter(x.id);
  updateClientdescriptionconverter(x.id);
  const e_upd = waitForClientdescriptionconverterUpdated(id);
  block(matchDeleteClientdescriptionconverter(id), function () {
    verifyClientdescriptionconverterUpdated(id);
  });
  deleteClientdescriptionconverter(x.id);
  const e_del = waitForClientdescriptionconverterDeleted(id);
  block(matchAddClientdescriptionconverter(id), function () {
    verifyClientdescriptionconverterDoesNotExist(id);
  });
});

bthread("ClientpolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientpolicy(x.id);
  const e_add = waitForClientpolicyAdded(id);
  block(matchDeleteClientpolicy(id), function () {
    verifyClientpolicyExists(id);
  });
  updateClientpolicy(x.id);
  updateClientpolicy(x.id);
  const e_upd = waitForClientpolicyUpdated(id);
  block(matchDeleteClientpolicy(id), function () {
    verifyClientpolicyUpdated(id);
  });
  deleteClientpolicy(x.id);
  const e_del = waitForClientpolicyDeleted(id);
  block(matchAddClientpolicy(id), function () {
    verifyClientpolicyDoesNotExist(id);
  });
});

bthread("ClientregistrationpolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientregistrationpolicy(x.id);
  const e_add = waitForClientregistrationpolicyAdded(id);
  block(matchDeleteClientregistrationpolicy(id), function () {
    verifyClientregistrationpolicyExists(id);
  });
  updateClientregistrationpolicy(x.id);
  updateClientregistrationpolicy(x.id);
  const e_upd = waitForClientregistrationpolicyUpdated(id);
  block(matchDeleteClientregistrationpolicy(id), function () {
    verifyClientregistrationpolicyUpdated(id);
  });
  deleteClientregistrationpolicy(x.id);
  const e_del = waitForClientregistrationpolicyDeleted(id);
  block(matchAddClientregistrationpolicy(id), function () {
    verifyClientregistrationpolicyDoesNotExist(id);
  });
});

bthread("ClientscopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientscope(x.id);
  const e_add = waitForClientscopeAdded(id);
  block(matchDeleteClientscope(id), function () {
    verifyClientscopeExists(id);
  });
  updateClientscope(x.id);
  updateClientscope(x.id);
  const e_upd = waitForClientscopeUpdated(id);
  block(matchDeleteClientscope(id), function () {
    verifyClientscopeUpdated(id);
  });
  deleteClientscope(x.id);
  const e_del = waitForClientscopeDeleted(id);
  block(matchAddClientscope(id), function () {
    verifyClientscopeDoesNotExist(id);
  });
});

bthread("ClientsecretLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientsecret(x.id);
  const e_add = waitForClientsecretAdded(id);
  block(matchDeleteClientsecret(id), function () {
    verifyClientsecretExists(id);
  });
  updateClientsecret(x.id);
  updateClientsecret(x.id);
  const e_upd = waitForClientsecretUpdated(id);
  block(matchDeleteClientsecret(id), function () {
    verifyClientsecretUpdated(id);
  });
  deleteClientsecret(x.id);
  const e_del = waitForClientsecretDeleted(id);
  block(matchAddClientsecret(id), function () {
    verifyClientsecretDoesNotExist(id);
  });
});

bthread("ClientsessionstatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientsessionstat(x.id);
  const e_add = waitForClientsessionstatAdded(id);
  block(matchDeleteClientsessionstat(id), function () {
    verifyClientsessionstatExists(id);
  });
  updateClientsessionstat(x.id);
  updateClientsessionstat(x.id);
  const e_upd = waitForClientsessionstatUpdated(id);
  block(matchDeleteClientsessionstat(id), function () {
    verifyClientsessionstatUpdated(id);
  });
  deleteClientsessionstat(x.id);
  const e_del = waitForClientsessionstatDeleted(id);
  block(matchAddClientsessionstat(id), function () {
    verifyClientsessionstatDoesNotExist(id);
  });
});

bthread("ClientsinitialaccesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientsinitialacces(x.id);
  const e_add = waitForClientsinitialaccesAdded(id);
  block(matchDeleteClientsinitialacces(id), function () {
    verifyClientsinitialaccesExists(id);
  });
  updateClientsinitialacces(x.id);
  updateClientsinitialacces(x.id);
  const e_upd = waitForClientsinitialaccesUpdated(id);
  block(matchDeleteClientsinitialacces(id), function () {
    verifyClientsinitialaccesUpdated(id);
  });
  deleteClientsinitialacces(x.id);
  const e_del = waitForClientsinitialaccesDeleted(id);
  block(matchAddClientsinitialacces(id), function () {
    verifyClientsinitialaccesDoesNotExist(id);
  });
});

bthread("ClienttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClienttemplate(x.id);
  const e_add = waitForClienttemplateAdded(id);
  block(matchDeleteClienttemplate(id), function () {
    verifyClienttemplateExists(id);
  });
  updateClienttemplate(x.id);
  updateClienttemplate(x.id);
  const e_upd = waitForClienttemplateUpdated(id);
  block(matchDeleteClienttemplate(id), function () {
    verifyClienttemplateUpdated(id);
  });
  deleteClienttemplate(x.id);
  const e_del = waitForClienttemplateDeleted(id);
  block(matchAddClienttemplate(id), function () {
    verifyClienttemplateDoesNotExist(id);
  });
});

bthread("ComponentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComponent(x.id);
  const e_add = waitForComponentAdded(id);
  block(matchDeleteComponent(id), function () {
    verifyComponentExists(id);
  });
  updateComponent(x.id);
  updateComponent(x.id);
  const e_upd = waitForComponentUpdated(id);
  block(matchDeleteComponent(id), function () {
    verifyComponentUpdated(id);
  });
  deleteComponent(x.id);
  const e_del = waitForComponentDeleted(id);
  block(matchAddComponent(id), function () {
    verifyComponentDoesNotExist(id);
  });
});

bthread("CompositeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComposite(x.id);
  const e_add = waitForCompositeAdded(id);
  block(matchDeleteComposite(id), function () {
    verifyCompositeExists(id);
  });
  updateComposite(x.id);
  updateComposite(x.id);
  const e_upd = waitForCompositeUpdated(id);
  block(matchDeleteComposite(id), function () {
    verifyCompositeUpdated(id);
  });
  deleteComposite(x.id);
  const e_del = waitForCompositeDeleted(id);
  block(matchAddComposite(id), function () {
    verifyCompositeDoesNotExist(id);
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

bthread("ConfigdescriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfigdescription(x.id);
  const e_add = waitForConfigdescriptionAdded(id);
  block(matchDeleteConfigdescription(id), function () {
    verifyConfigdescriptionExists(id);
  });
  updateConfigdescription(x.id);
  updateConfigdescription(x.id);
  const e_upd = waitForConfigdescriptionUpdated(id);
  block(matchDeleteConfigdescription(id), function () {
    verifyConfigdescriptionUpdated(id);
  });
  deleteConfigdescription(x.id);
  const e_del = waitForConfigdescriptionDeleted(id);
  block(matchAddConfigdescription(id), function () {
    verifyConfigdescriptionDoesNotExist(id);
  });
});

bthread("ConfigureduserstoragecredentialtypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfigureduserstoragecredentialtype(x.id);
  const e_add = waitForConfigureduserstoragecredentialtypeAdded(id);
  block(matchDeleteConfigureduserstoragecredentialtype(id), function () {
    verifyConfigureduserstoragecredentialtypeExists(id);
  });
  updateConfigureduserstoragecredentialtype(x.id);
  updateConfigureduserstoragecredentialtype(x.id);
  const e_upd = waitForConfigureduserstoragecredentialtypeUpdated(id);
  block(matchDeleteConfigureduserstoragecredentialtype(id), function () {
    verifyConfigureduserstoragecredentialtypeUpdated(id);
  });
  deleteConfigureduserstoragecredentialtype(x.id);
  const e_del = waitForConfigureduserstoragecredentialtypeDeleted(id);
  block(matchAddConfigureduserstoragecredentialtype(id), function () {
    verifyConfigureduserstoragecredentialtypeDoesNotExist(id);
  });
});

bthread("ConsentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConsent(x.id);
  const e_add = waitForConsentAdded(id);
  block(matchDeleteConsent(id), function () {
    verifyConsentExists(id);
  });
  updateConsent(x.id);
  updateConsent(x.id);
  const e_upd = waitForConsentUpdated(id);
  block(matchDeleteConsent(id), function () {
    verifyConsentUpdated(id);
  });
  deleteConsent(x.id);
  const e_del = waitForConsentDeleted(id);
  block(matchAddConsent(id), function () {
    verifyConsentDoesNotExist(id);
  });
});

bthread("CopyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCopy(x.id);
  const e_add = waitForCopyAdded(id);
  block(matchDeleteCopy(id), function () {
    verifyCopyExists(id);
  });
  updateCopy(x.id);
  updateCopy(x.id);
  const e_upd = waitForCopyUpdated(id);
  block(matchDeleteCopy(id), function () {
    verifyCopyUpdated(id);
  });
  deleteCopy(x.id);
  const e_del = waitForCopyDeleted(id);
  block(matchAddCopy(id), function () {
    verifyCopyDoesNotExist(id);
  });
});

bthread("CountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCount(x.id);
  const e_add = waitForCountAdded(id);
  block(matchDeleteCount(id), function () {
    verifyCountExists(id);
  });
  updateCount(x.id);
  updateCount(x.id);
  const e_upd = waitForCountUpdated(id);
  block(matchDeleteCount(id), function () {
    verifyCountUpdated(id);
  });
  deleteCount(x.id);
  const e_del = waitForCountDeleted(id);
  block(matchAddCount(id), function () {
    verifyCountDoesNotExist(id);
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

bthread("CredentialregistratorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentialregistrator(x.id);
  const e_add = waitForCredentialregistratorAdded(id);
  block(matchDeleteCredentialregistrator(id), function () {
    verifyCredentialregistratorExists(id);
  });
  updateCredentialregistrator(x.id);
  updateCredentialregistrator(x.id);
  const e_upd = waitForCredentialregistratorUpdated(id);
  block(matchDeleteCredentialregistrator(id), function () {
    verifyCredentialregistratorUpdated(id);
  });
  deleteCredentialregistrator(x.id);
  const e_del = waitForCredentialregistratorDeleted(id);
  block(matchAddCredentialregistrator(id), function () {
    verifyCredentialregistratorDoesNotExist(id);
  });
});

bthread("DefaultclientscopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultclientscope(x.id);
  const e_add = waitForDefaultclientscopeAdded(id);
  block(matchDeleteDefaultclientscope(id), function () {
    verifyDefaultclientscopeExists(id);
  });
  updateDefaultclientscope(x.id);
  updateDefaultclientscope(x.id);
  const e_upd = waitForDefaultclientscopeUpdated(id);
  block(matchDeleteDefaultclientscope(id), function () {
    verifyDefaultclientscopeUpdated(id);
  });
  deleteDefaultclientscope(x.id);
  const e_del = waitForDefaultclientscopeDeleted(id);
  block(matchAddDefaultclientscope(id), function () {
    verifyDefaultclientscopeDoesNotExist(id);
  });
});

bthread("DefaultdefaultclientscopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultdefaultclientscope(x.id);
  const e_add = waitForDefaultdefaultclientscopeAdded(id);
  block(matchDeleteDefaultdefaultclientscope(id), function () {
    verifyDefaultdefaultclientscopeExists(id);
  });
  updateDefaultdefaultclientscope(x.id);
  updateDefaultdefaultclientscope(x.id);
  const e_upd = waitForDefaultdefaultclientscopeUpdated(id);
  block(matchDeleteDefaultdefaultclientscope(id), function () {
    verifyDefaultdefaultclientscopeUpdated(id);
  });
  deleteDefaultdefaultclientscope(x.id);
  const e_del = waitForDefaultdefaultclientscopeDeleted(id);
  block(matchAddDefaultdefaultclientscope(id), function () {
    verifyDefaultdefaultclientscopeDoesNotExist(id);
  });
});

bthread("DefaultgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultgroup(x.id);
  const e_add = waitForDefaultgroupAdded(id);
  block(matchDeleteDefaultgroup(id), function () {
    verifyDefaultgroupExists(id);
  });
  updateDefaultgroup(x.id);
  updateDefaultgroup(x.id);
  const e_upd = waitForDefaultgroupUpdated(id);
  block(matchDeleteDefaultgroup(id), function () {
    verifyDefaultgroupUpdated(id);
  });
  deleteDefaultgroup(x.id);
  const e_del = waitForDefaultgroupDeleted(id);
  block(matchAddDefaultgroup(id), function () {
    verifyDefaultgroupDoesNotExist(id);
  });
});

bthread("DefaultoptionalclientscopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultoptionalclientscope(x.id);
  const e_add = waitForDefaultoptionalclientscopeAdded(id);
  block(matchDeleteDefaultoptionalclientscope(id), function () {
    verifyDefaultoptionalclientscopeExists(id);
  });
  updateDefaultoptionalclientscope(x.id);
  updateDefaultoptionalclientscope(x.id);
  const e_upd = waitForDefaultoptionalclientscopeUpdated(id);
  block(matchDeleteDefaultoptionalclientscope(id), function () {
    verifyDefaultoptionalclientscopeUpdated(id);
  });
  deleteDefaultoptionalclientscope(x.id);
  const e_del = waitForDefaultoptionalclientscopeDeleted(id);
  block(matchAddDefaultoptionalclientscope(id), function () {
    verifyDefaultoptionalclientscopeDoesNotExist(id);
  });
});

bthread("DisablecredentialtypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisablecredentialtype(x.id);
  const e_add = waitForDisablecredentialtypeAdded(id);
  block(matchDeleteDisablecredentialtype(id), function () {
    verifyDisablecredentialtypeExists(id);
  });
  updateDisablecredentialtype(x.id);
  updateDisablecredentialtype(x.id);
  const e_upd = waitForDisablecredentialtypeUpdated(id);
  block(matchDeleteDisablecredentialtype(id), function () {
    verifyDisablecredentialtypeUpdated(id);
  });
  deleteDisablecredentialtype(x.id);
  const e_del = waitForDisablecredentialtypeDeleted(id);
  block(matchAddDisablecredentialtype(id), function () {
    verifyDisablecredentialtypeDoesNotExist(id);
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

bthread("EvaluatescopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEvaluatescope(x.id);
  const e_add = waitForEvaluatescopeAdded(id);
  block(matchDeleteEvaluatescope(id), function () {
    verifyEvaluatescopeExists(id);
  });
  updateEvaluatescope(x.id);
  updateEvaluatescope(x.id);
  const e_upd = waitForEvaluatescopeUpdated(id);
  block(matchDeleteEvaluatescope(id), function () {
    verifyEvaluatescopeUpdated(id);
  });
  deleteEvaluatescope(x.id);
  const e_del = waitForEvaluatescopeDeleted(id);
  block(matchAddEvaluatescope(id), function () {
    verifyEvaluatescopeDoesNotExist(id);
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

bthread("ExecuteactionsemailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExecuteactionsemail(x.id);
  const e_add = waitForExecuteactionsemailAdded(id);
  block(matchDeleteExecuteactionsemail(id), function () {
    verifyExecuteactionsemailExists(id);
  });
  updateExecuteactionsemail(x.id);
  updateExecuteactionsemail(x.id);
  const e_upd = waitForExecuteactionsemailUpdated(id);
  block(matchDeleteExecuteactionsemail(id), function () {
    verifyExecuteactionsemailUpdated(id);
  });
  deleteExecuteactionsemail(x.id);
  const e_del = waitForExecuteactionsemailDeleted(id);
  block(matchAddExecuteactionsemail(id), function () {
    verifyExecuteactionsemailDoesNotExist(id);
  });
});

bthread("ExecutionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExecution(x.id);
  const e_add = waitForExecutionAdded(id);
  block(matchDeleteExecution(id), function () {
    verifyExecutionExists(id);
  });
  updateExecution(x.id);
  updateExecution(x.id);
  const e_upd = waitForExecutionUpdated(id);
  block(matchDeleteExecution(id), function () {
    verifyExecutionUpdated(id);
  });
  deleteExecution(x.id);
  const e_del = waitForExecutionDeleted(id);
  block(matchAddExecution(id), function () {
    verifyExecutionDoesNotExist(id);
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

bthread("FederatedidentityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFederatedidentity(x.id);
  const e_add = waitForFederatedidentityAdded(id);
  block(matchDeleteFederatedidentity(id), function () {
    verifyFederatedidentityExists(id);
  });
  updateFederatedidentity(x.id);
  updateFederatedidentity(x.id);
  const e_upd = waitForFederatedidentityUpdated(id);
  block(matchDeleteFederatedidentity(id), function () {
    verifyFederatedidentityUpdated(id);
  });
  deleteFederatedidentity(x.id);
  const e_del = waitForFederatedidentityDeleted(id);
  block(matchAddFederatedidentity(id), function () {
    verifyFederatedidentityDoesNotExist(id);
  });
});

bthread("FlowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFlow(x.id);
  const e_add = waitForFlowAdded(id);
  block(matchDeleteFlow(id), function () {
    verifyFlowExists(id);
  });
  updateFlow(x.id);
  updateFlow(x.id);
  const e_upd = waitForFlowUpdated(id);
  block(matchDeleteFlow(id), function () {
    verifyFlowUpdated(id);
  });
  deleteFlow(x.id);
  const e_del = waitForFlowDeleted(id);
  block(matchAddFlow(id), function () {
    verifyFlowDoesNotExist(id);
  });
});

bthread("FormactionproviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFormactionprovider(x.id);
  const e_add = waitForFormactionproviderAdded(id);
  block(matchDeleteFormactionprovider(id), function () {
    verifyFormactionproviderExists(id);
  });
  updateFormactionprovider(x.id);
  updateFormactionprovider(x.id);
  const e_upd = waitForFormactionproviderUpdated(id);
  block(matchDeleteFormactionprovider(id), function () {
    verifyFormactionproviderUpdated(id);
  });
  deleteFormactionprovider(x.id);
  const e_del = waitForFormactionproviderDeleted(id);
  block(matchAddFormactionprovider(id), function () {
    verifyFormactionproviderDoesNotExist(id);
  });
});

bthread("FormproviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFormprovider(x.id);
  const e_add = waitForFormproviderAdded(id);
  block(matchDeleteFormprovider(id), function () {
    verifyFormproviderExists(id);
  });
  updateFormprovider(x.id);
  updateFormprovider(x.id);
  const e_upd = waitForFormproviderUpdated(id);
  block(matchDeleteFormprovider(id), function () {
    verifyFormproviderUpdated(id);
  });
  deleteFormprovider(x.id);
  const e_del = waitForFormproviderDeleted(id);
  block(matchAddFormprovider(id), function () {
    verifyFormproviderDoesNotExist(id);
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

bthread("GenerateanddownloadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGenerateanddownload(x.id);
  const e_add = waitForGenerateanddownloadAdded(id);
  block(matchDeleteGenerateanddownload(id), function () {
    verifyGenerateanddownloadExists(id);
  });
  updateGenerateanddownload(x.id);
  updateGenerateanddownload(x.id);
  const e_upd = waitForGenerateanddownloadUpdated(id);
  block(matchDeleteGenerateanddownload(id), function () {
    verifyGenerateanddownloadUpdated(id);
  });
  deleteGenerateanddownload(x.id);
  const e_del = waitForGenerateanddownloadDeleted(id);
  block(matchAddGenerateanddownload(id), function () {
    verifyGenerateanddownloadDoesNotExist(id);
  });
});

bthread("GenerateexampleaccesstokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGenerateexampleaccesstoken(x.id);
  const e_add = waitForGenerateexampleaccesstokenAdded(id);
  block(matchDeleteGenerateexampleaccesstoken(id), function () {
    verifyGenerateexampleaccesstokenExists(id);
  });
  updateGenerateexampleaccesstoken(x.id);
  updateGenerateexampleaccesstoken(x.id);
  const e_upd = waitForGenerateexampleaccesstokenUpdated(id);
  block(matchDeleteGenerateexampleaccesstoken(id), function () {
    verifyGenerateexampleaccesstokenUpdated(id);
  });
  deleteGenerateexampleaccesstoken(x.id);
  const e_del = waitForGenerateexampleaccesstokenDeleted(id);
  block(matchAddGenerateexampleaccesstoken(id), function () {
    verifyGenerateexampleaccesstokenDoesNotExist(id);
  });
});

bthread("GenerateexampleidtokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGenerateexampleidtoken(x.id);
  const e_add = waitForGenerateexampleidtokenAdded(id);
  block(matchDeleteGenerateexampleidtoken(id), function () {
    verifyGenerateexampleidtokenExists(id);
  });
  updateGenerateexampleidtoken(x.id);
  updateGenerateexampleidtoken(x.id);
  const e_upd = waitForGenerateexampleidtokenUpdated(id);
  block(matchDeleteGenerateexampleidtoken(id), function () {
    verifyGenerateexampleidtokenUpdated(id);
  });
  deleteGenerateexampleidtoken(x.id);
  const e_del = waitForGenerateexampleidtokenDeleted(id);
  block(matchAddGenerateexampleidtoken(id), function () {
    verifyGenerateexampleidtokenDoesNotExist(id);
  });
});

bthread("GenerateexampleuserinfoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGenerateexampleuserinfo(x.id);
  const e_add = waitForGenerateexampleuserinfoAdded(id);
  block(matchDeleteGenerateexampleuserinfo(id), function () {
    verifyGenerateexampleuserinfoExists(id);
  });
  updateGenerateexampleuserinfo(x.id);
  updateGenerateexampleuserinfo(x.id);
  const e_upd = waitForGenerateexampleuserinfoUpdated(id);
  block(matchDeleteGenerateexampleuserinfo(id), function () {
    verifyGenerateexampleuserinfoUpdated(id);
  });
  deleteGenerateexampleuserinfo(x.id);
  const e_del = waitForGenerateexampleuserinfoDeleted(id);
  block(matchAddGenerateexampleuserinfo(id), function () {
    verifyGenerateexampleuserinfoDoesNotExist(id);
  });
});

bthread("GrantedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGranted(x.id);
  const e_add = waitForGrantedAdded(id);
  block(matchDeleteGranted(id), function () {
    verifyGrantedExists(id);
  });
  updateGranted(x.id);
  updateGranted(x.id);
  const e_upd = waitForGrantedUpdated(id);
  block(matchDeleteGranted(id), function () {
    verifyGrantedUpdated(id);
  });
  deleteGranted(x.id);
  const e_del = waitForGrantedDeleted(id);
  block(matchAddGranted(id), function () {
    verifyGrantedDoesNotExist(id);
  });
});

bthread("GroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGroup(x.id);
  const e_add = waitForGroupAdded(id);
  block(matchDeleteGroup(id), function () {
    verifyGroupExists(id);
  });
  updateGroup(x.id);
  updateGroup(x.id);
  const e_upd = waitForGroupUpdated(id);
  block(matchDeleteGroup(id), function () {
    verifyGroupUpdated(id);
  });
  deleteGroup(x.id);
  const e_del = waitForGroupDeleted(id);
  block(matchAddGroup(id), function () {
    verifyGroupDoesNotExist(id);
  });
});

bthread("GroupbypathLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGroupbypath(x.id);
  const e_add = waitForGroupbypathAdded(id);
  block(matchDeleteGroupbypath(id), function () {
    verifyGroupbypathExists(id);
  });
  updateGroupbypath(x.id);
  updateGroupbypath(x.id);
  const e_upd = waitForGroupbypathUpdated(id);
  block(matchDeleteGroupbypath(id), function () {
    verifyGroupbypathUpdated(id);
  });
  deleteGroupbypath(x.id);
  const e_del = waitForGroupbypathDeleted(id);
  block(matchAddGroupbypath(id), function () {
    verifyGroupbypathDoesNotExist(id);
  });
});

bthread("IdentityproviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdentityprovider(x.id);
  const e_add = waitForIdentityproviderAdded(id);
  block(matchDeleteIdentityprovider(id), function () {
    verifyIdentityproviderExists(id);
  });
  updateIdentityprovider(x.id);
  updateIdentityprovider(x.id);
  const e_upd = waitForIdentityproviderUpdated(id);
  block(matchDeleteIdentityprovider(id), function () {
    verifyIdentityproviderUpdated(id);
  });
  deleteIdentityprovider(x.id);
  const e_del = waitForIdentityproviderDeleted(id);
  block(matchAddIdentityprovider(id), function () {
    verifyIdentityproviderDoesNotExist(id);
  });
});

bthread("ImpersonationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImpersonation(x.id);
  const e_add = waitForImpersonationAdded(id);
  block(matchDeleteImpersonation(id), function () {
    verifyImpersonationExists(id);
  });
  updateImpersonation(x.id);
  updateImpersonation(x.id);
  const e_upd = waitForImpersonationUpdated(id);
  block(matchDeleteImpersonation(id), function () {
    verifyImpersonationUpdated(id);
  });
  deleteImpersonation(x.id);
  const e_del = waitForImpersonationDeleted(id);
  block(matchAddImpersonation(id), function () {
    verifyImpersonationDoesNotExist(id);
  });
});

bthread("ImportconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImportconfig(x.id);
  const e_add = waitForImportconfigAdded(id);
  block(matchDeleteImportconfig(id), function () {
    verifyImportconfigExists(id);
  });
  updateImportconfig(x.id);
  updateImportconfig(x.id);
  const e_upd = waitForImportconfigUpdated(id);
  block(matchDeleteImportconfig(id), function () {
    verifyImportconfigUpdated(id);
  });
  deleteImportconfig(x.id);
  const e_del = waitForImportconfigDeleted(id);
  block(matchAddImportconfig(id), function () {
    verifyImportconfigDoesNotExist(id);
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

bthread("LocalizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLocalization(x.id);
  const e_add = waitForLocalizationAdded(id);
  block(matchDeleteLocalization(id), function () {
    verifyLocalizationExists(id);
  });
  updateLocalization(x.id);
  updateLocalization(x.id);
  const e_upd = waitForLocalizationUpdated(id);
  block(matchDeleteLocalization(id), function () {
    verifyLocalizationUpdated(id);
  });
  deleteLocalization(x.id);
  const e_del = waitForLocalizationDeleted(id);
  block(matchAddLocalization(id), function () {
    verifyLocalizationDoesNotExist(id);
  });
});

bthread("LogoutLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLogout(x.id);
  const e_add = waitForLogoutAdded(id);
  block(matchDeleteLogout(id), function () {
    verifyLogoutExists(id);
  });
  updateLogout(x.id);
  updateLogout(x.id);
  const e_upd = waitForLogoutUpdated(id);
  block(matchDeleteLogout(id), function () {
    verifyLogoutUpdated(id);
  });
  deleteLogout(x.id);
  const e_del = waitForLogoutDeleted(id);
  block(matchAddLogout(id), function () {
    verifyLogoutDoesNotExist(id);
  });
});

bthread("LogoutallLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLogoutall(x.id);
  const e_add = waitForLogoutallAdded(id);
  block(matchDeleteLogoutall(id), function () {
    verifyLogoutallExists(id);
  });
  updateLogoutall(x.id);
  updateLogoutall(x.id);
  const e_upd = waitForLogoutallUpdated(id);
  block(matchDeleteLogoutall(id), function () {
    verifyLogoutallUpdated(id);
  });
  deleteLogoutall(x.id);
  const e_del = waitForLogoutallDeleted(id);
  block(matchAddLogoutall(id), function () {
    verifyLogoutallDoesNotExist(id);
  });
});

bthread("LowerpriorityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLowerpriority(x.id);
  const e_add = waitForLowerpriorityAdded(id);
  block(matchDeleteLowerpriority(id), function () {
    verifyLowerpriorityExists(id);
  });
  updateLowerpriority(x.id);
  updateLowerpriority(x.id);
  const e_upd = waitForLowerpriorityUpdated(id);
  block(matchDeleteLowerpriority(id), function () {
    verifyLowerpriorityUpdated(id);
  });
  deleteLowerpriority(x.id);
  const e_del = waitForLowerpriorityDeleted(id);
  block(matchAddLowerpriority(id), function () {
    verifyLowerpriorityDoesNotExist(id);
  });
});

bthread("ManagementLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addManagement(x.id);
  const e_add = waitForManagementAdded(id);
  block(matchDeleteManagement(id), function () {
    verifyManagementExists(id);
  });
  updateManagement(x.id);
  updateManagement(x.id);
  const e_upd = waitForManagementUpdated(id);
  block(matchDeleteManagement(id), function () {
    verifyManagementUpdated(id);
  });
  deleteManagement(x.id);
  const e_del = waitForManagementDeleted(id);
  block(matchAddManagement(id), function () {
    verifyManagementDoesNotExist(id);
  });
});

bthread("MapperLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMapper(x.id);
  const e_add = waitForMapperAdded(id);
  block(matchDeleteMapper(id), function () {
    verifyMapperExists(id);
  });
  updateMapper(x.id);
  updateMapper(x.id);
  const e_upd = waitForMapperUpdated(id);
  block(matchDeleteMapper(id), function () {
    verifyMapperUpdated(id);
  });
  deleteMapper(x.id);
  const e_del = waitForMapperDeleted(id);
  block(matchAddMapper(id), function () {
    verifyMapperDoesNotExist(id);
  });
});

bthread("MappertypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMappertype(x.id);
  const e_add = waitForMappertypeAdded(id);
  block(matchDeleteMappertype(id), function () {
    verifyMappertypeExists(id);
  });
  updateMappertype(x.id);
  updateMappertype(x.id);
  const e_upd = waitForMappertypeUpdated(id);
  block(matchDeleteMappertype(id), function () {
    verifyMappertypeUpdated(id);
  });
  deleteMappertype(x.id);
  const e_del = waitForMappertypeDeleted(id);
  block(matchAddMappertype(id), function () {
    verifyMappertypeDoesNotExist(id);
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

bthread("ModelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModel(x.id);
  const e_add = waitForModelAdded(id);
  block(matchDeleteModel(id), function () {
    verifyModelExists(id);
  });
  updateModel(x.id);
  updateModel(x.id);
  const e_upd = waitForModelUpdated(id);
  block(matchDeleteModel(id), function () {
    verifyModelUpdated(id);
  });
  deleteModel(x.id);
  const e_del = waitForModelDeleted(id);
  block(matchAddModel(id), function () {
    verifyModelDoesNotExist(id);
  });
});

bthread("MoveafterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMoveafter(x.id);
  const e_add = waitForMoveafterAdded(id);
  block(matchDeleteMoveafter(id), function () {
    verifyMoveafterExists(id);
  });
  updateMoveafter(x.id);
  updateMoveafter(x.id);
  const e_upd = waitForMoveafterUpdated(id);
  block(matchDeleteMoveafter(id), function () {
    verifyMoveafterUpdated(id);
  });
  deleteMoveafter(x.id);
  const e_del = waitForMoveafterDeleted(id);
  block(matchAddMoveafter(id), function () {
    verifyMoveafterDoesNotExist(id);
  });
});

bthread("MovetofirstLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMovetofirst(x.id);
  const e_add = waitForMovetofirstAdded(id);
  block(matchDeleteMovetofirst(id), function () {
    verifyMovetofirstExists(id);
  });
  updateMovetofirst(x.id);
  updateMovetofirst(x.id);
  const e_upd = waitForMovetofirstUpdated(id);
  block(matchDeleteMovetofirst(id), function () {
    verifyMovetofirstUpdated(id);
  });
  deleteMovetofirst(x.id);
  const e_del = waitForMovetofirstDeleted(id);
  block(matchAddMovetofirst(id), function () {
    verifyMovetofirstDoesNotExist(id);
  });
});

bthread("NodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNode(x.id);
  const e_add = waitForNodeAdded(id);
  block(matchDeleteNode(id), function () {
    verifyNodeExists(id);
  });
  updateNode(x.id);
  updateNode(x.id);
  const e_upd = waitForNodeUpdated(id);
  block(matchDeleteNode(id), function () {
    verifyNodeUpdated(id);
  });
  deleteNode(x.id);
  const e_del = waitForNodeDeleted(id);
  block(matchAddNode(id), function () {
    verifyNodeDoesNotExist(id);
  });
});

bthread("NotgrantedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotgranted(x.id);
  const e_add = waitForNotgrantedAdded(id);
  block(matchDeleteNotgranted(id), function () {
    verifyNotgrantedExists(id);
  });
  updateNotgranted(x.id);
  updateNotgranted(x.id);
  const e_upd = waitForNotgrantedUpdated(id);
  block(matchDeleteNotgranted(id), function () {
    verifyNotgrantedUpdated(id);
  });
  deleteNotgranted(x.id);
  const e_del = waitForNotgrantedDeleted(id);
  block(matchAddNotgranted(id), function () {
    verifyNotgrantedDoesNotExist(id);
  });
});

bthread("OfflinesessionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOfflinesession(x.id);
  const e_add = waitForOfflinesessionAdded(id);
  block(matchDeleteOfflinesession(id), function () {
    verifyOfflinesessionExists(id);
  });
  updateOfflinesession(x.id);
  updateOfflinesession(x.id);
  const e_upd = waitForOfflinesessionUpdated(id);
  block(matchDeleteOfflinesession(id), function () {
    verifyOfflinesessionUpdated(id);
  });
  deleteOfflinesession(x.id);
  const e_del = waitForOfflinesessionDeleted(id);
  block(matchAddOfflinesession(id), function () {
    verifyOfflinesessionDoesNotExist(id);
  });
});

bthread("OfflinesessioncountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOfflinesessioncount(x.id);
  const e_add = waitForOfflinesessioncountAdded(id);
  block(matchDeleteOfflinesessioncount(id), function () {
    verifyOfflinesessioncountExists(id);
  });
  updateOfflinesessioncount(x.id);
  updateOfflinesessioncount(x.id);
  const e_upd = waitForOfflinesessioncountUpdated(id);
  block(matchDeleteOfflinesessioncount(id), function () {
    verifyOfflinesessioncountUpdated(id);
  });
  deleteOfflinesessioncount(x.id);
  const e_del = waitForOfflinesessioncountDeleted(id);
  block(matchAddOfflinesessioncount(id), function () {
    verifyOfflinesessioncountDoesNotExist(id);
  });
});

bthread("OptionalclientscopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOptionalclientscope(x.id);
  const e_add = waitForOptionalclientscopeAdded(id);
  block(matchDeleteOptionalclientscope(id), function () {
    verifyOptionalclientscopeExists(id);
  });
  updateOptionalclientscope(x.id);
  updateOptionalclientscope(x.id);
  const e_upd = waitForOptionalclientscopeUpdated(id);
  block(matchDeleteOptionalclientscope(id), function () {
    verifyOptionalclientscopeUpdated(id);
  });
  deleteOptionalclientscope(x.id);
  const e_del = waitForOptionalclientscopeDeleted(id);
  block(matchAddOptionalclientscope(id), function () {
    verifyOptionalclientscopeDoesNotExist(id);
  });
});

bthread("PartialexportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPartialexport(x.id);
  const e_add = waitForPartialexportAdded(id);
  block(matchDeletePartialexport(id), function () {
    verifyPartialexportExists(id);
  });
  updatePartialexport(x.id);
  updatePartialexport(x.id);
  const e_upd = waitForPartialexportUpdated(id);
  block(matchDeletePartialexport(id), function () {
    verifyPartialexportUpdated(id);
  });
  deletePartialexport(x.id);
  const e_del = waitForPartialexportDeleted(id);
  block(matchAddPartialexport(id), function () {
    verifyPartialexportDoesNotExist(id);
  });
});

bthread("PartialimportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPartialimport(x.id);
  const e_add = waitForPartialimportAdded(id);
  block(matchDeletePartialimport(id), function () {
    verifyPartialimportExists(id);
  });
  updatePartialimport(x.id);
  updatePartialimport(x.id);
  const e_upd = waitForPartialimportUpdated(id);
  block(matchDeletePartialimport(id), function () {
    verifyPartialimportUpdated(id);
  });
  deletePartialimport(x.id);
  const e_del = waitForPartialimportDeleted(id);
  block(matchAddPartialimport(id), function () {
    verifyPartialimportDoesNotExist(id);
  });
});

bthread("PerclientconfigdescriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPerclientconfigdescription(x.id);
  const e_add = waitForPerclientconfigdescriptionAdded(id);
  block(matchDeletePerclientconfigdescription(id), function () {
    verifyPerclientconfigdescriptionExists(id);
  });
  updatePerclientconfigdescription(x.id);
  updatePerclientconfigdescription(x.id);
  const e_upd = waitForPerclientconfigdescriptionUpdated(id);
  block(matchDeletePerclientconfigdescription(id), function () {
    verifyPerclientconfigdescriptionUpdated(id);
  });
  deletePerclientconfigdescription(x.id);
  const e_del = waitForPerclientconfigdescriptionDeleted(id);
  block(matchAddPerclientconfigdescription(id), function () {
    verifyPerclientconfigdescriptionDoesNotExist(id);
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

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPolicy(x.id);
  const e_add = waitForPolicyAdded(id);
  block(matchDeletePolicy(id), function () {
    verifyPolicyExists(id);
  });
  updatePolicy(x.id);
  updatePolicy(x.id);
  const e_upd = waitForPolicyUpdated(id);
  block(matchDeletePolicy(id), function () {
    verifyPolicyUpdated(id);
  });
  deletePolicy(x.id);
  const e_del = waitForPolicyDeleted(id);
  block(matchAddPolicy(id), function () {
    verifyPolicyDoesNotExist(id);
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

bthread("ProtocolLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProtocol(x.id);
  const e_add = waitForProtocolAdded(id);
  block(matchDeleteProtocol(id), function () {
    verifyProtocolExists(id);
  });
  updateProtocol(x.id);
  updateProtocol(x.id);
  const e_upd = waitForProtocolUpdated(id);
  block(matchDeleteProtocol(id), function () {
    verifyProtocolUpdated(id);
  });
  deleteProtocol(x.id);
  const e_del = waitForProtocolDeleted(id);
  block(matchAddProtocol(id), function () {
    verifyProtocolDoesNotExist(id);
  });
});

bthread("ProtocolmapperLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProtocolmapper(x.id);
  const e_add = waitForProtocolmapperAdded(id);
  block(matchDeleteProtocolmapper(id), function () {
    verifyProtocolmapperExists(id);
  });
  updateProtocolmapper(x.id);
  updateProtocolmapper(x.id);
  const e_upd = waitForProtocolmapperUpdated(id);
  block(matchDeleteProtocolmapper(id), function () {
    verifyProtocolmapperUpdated(id);
  });
  deleteProtocolmapper(x.id);
  const e_del = waitForProtocolmapperDeleted(id);
  block(matchAddProtocolmapper(id), function () {
    verifyProtocolmapperDoesNotExist(id);
  });
});

bthread("ProviderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProvider(x.id);
  const e_add = waitForProviderAdded(id);
  block(matchDeleteProvider(id), function () {
    verifyProviderExists(id);
  });
  updateProvider(x.id);
  updateProvider(x.id);
  const e_upd = waitForProviderUpdated(id);
  block(matchDeleteProvider(id), function () {
    verifyProviderUpdated(id);
  });
  deleteProvider(x.id);
  const e_del = waitForProviderDeleted(id);
  block(matchAddProvider(id), function () {
    verifyProviderDoesNotExist(id);
  });
});

bthread("PushrevocationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPushrevocation(x.id);
  const e_add = waitForPushrevocationAdded(id);
  block(matchDeletePushrevocation(id), function () {
    verifyPushrevocationExists(id);
  });
  updatePushrevocation(x.id);
  updatePushrevocation(x.id);
  const e_upd = waitForPushrevocationUpdated(id);
  block(matchDeletePushrevocation(id), function () {
    verifyPushrevocationUpdated(id);
  });
  deletePushrevocation(x.id);
  const e_del = waitForPushrevocationDeleted(id);
  block(matchAddPushrevocation(id), function () {
    verifyPushrevocationDoesNotExist(id);
  });
});

bthread("RaisepriorityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRaisepriority(x.id);
  const e_add = waitForRaisepriorityAdded(id);
  block(matchDeleteRaisepriority(id), function () {
    verifyRaisepriorityExists(id);
  });
  updateRaisepriority(x.id);
  updateRaisepriority(x.id);
  const e_upd = waitForRaisepriorityUpdated(id);
  block(matchDeleteRaisepriority(id), function () {
    verifyRaisepriorityUpdated(id);
  });
  deleteRaisepriority(x.id);
  const e_del = waitForRaisepriorityDeleted(id);
  block(matchAddRaisepriority(id), function () {
    verifyRaisepriorityDoesNotExist(id);
  });
});

bthread("RealmLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealm(x.id);
  const e_add = waitForRealmAdded(id);
  block(matchDeleteRealm(id), function () {
    verifyRealmExists(id);
  });
  updateRealm(x.id);
  updateRealm(x.id);
  const e_upd = waitForRealmUpdated(id);
  block(matchDeleteRealm(id), function () {
    verifyRealmUpdated(id);
  });
  deleteRealm(x.id);
  const e_del = waitForRealmDeleted(id);
  block(matchAddRealm(id), function () {
    verifyRealmDoesNotExist(id);
  });
});

bthread("RegisterrequiredactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRegisterrequiredaction(x.id);
  const e_add = waitForRegisterrequiredactionAdded(id);
  block(matchDeleteRegisterrequiredaction(id), function () {
    verifyRegisterrequiredactionExists(id);
  });
  updateRegisterrequiredaction(x.id);
  updateRegisterrequiredaction(x.id);
  const e_upd = waitForRegisterrequiredactionUpdated(id);
  block(matchDeleteRegisterrequiredaction(id), function () {
    verifyRegisterrequiredactionUpdated(id);
  });
  deleteRegisterrequiredaction(x.id);
  const e_del = waitForRegisterrequiredactionDeleted(id);
  block(matchAddRegisterrequiredaction(id), function () {
    verifyRegisterrequiredactionDoesNotExist(id);
  });
});

bthread("RegistrationaccesstokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRegistrationaccesstoken(x.id);
  const e_add = waitForRegistrationaccesstokenAdded(id);
  block(matchDeleteRegistrationaccesstoken(id), function () {
    verifyRegistrationaccesstokenExists(id);
  });
  updateRegistrationaccesstoken(x.id);
  updateRegistrationaccesstoken(x.id);
  const e_upd = waitForRegistrationaccesstokenUpdated(id);
  block(matchDeleteRegistrationaccesstoken(id), function () {
    verifyRegistrationaccesstokenUpdated(id);
  });
  deleteRegistrationaccesstoken(x.id);
  const e_del = waitForRegistrationaccesstokenDeleted(id);
  block(matchAddRegistrationaccesstoken(id), function () {
    verifyRegistrationaccesstokenDoesNotExist(id);
  });
});

bthread("RequiredactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequiredaction(x.id);
  const e_add = waitForRequiredactionAdded(id);
  block(matchDeleteRequiredaction(id), function () {
    verifyRequiredactionExists(id);
  });
  updateRequiredaction(x.id);
  updateRequiredaction(x.id);
  const e_upd = waitForRequiredactionUpdated(id);
  block(matchDeleteRequiredaction(id), function () {
    verifyRequiredactionUpdated(id);
  });
  deleteRequiredaction(x.id);
  const e_del = waitForRequiredactionDeleted(id);
  block(matchAddRequiredaction(id), function () {
    verifyRequiredactionDoesNotExist(id);
  });
});

bthread("ResetpasswordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResetpassword(x.id);
  const e_add = waitForResetpasswordAdded(id);
  block(matchDeleteResetpassword(id), function () {
    verifyResetpasswordExists(id);
  });
  updateResetpassword(x.id);
  updateResetpassword(x.id);
  const e_upd = waitForResetpasswordUpdated(id);
  block(matchDeleteResetpassword(id), function () {
    verifyResetpasswordUpdated(id);
  });
  deleteResetpassword(x.id);
  const e_del = waitForResetpasswordDeleted(id);
  block(matchAddResetpassword(id), function () {
    verifyResetpasswordDoesNotExist(id);
  });
});

bthread("ResetpasswordemailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResetpasswordemail(x.id);
  const e_add = waitForResetpasswordemailAdded(id);
  block(matchDeleteResetpasswordemail(id), function () {
    verifyResetpasswordemailExists(id);
  });
  updateResetpasswordemail(x.id);
  updateResetpasswordemail(x.id);
  const e_upd = waitForResetpasswordemailUpdated(id);
  block(matchDeleteResetpasswordemail(id), function () {
    verifyResetpasswordemailUpdated(id);
  });
  deleteResetpasswordemail(x.id);
  const e_del = waitForResetpasswordemailDeleted(id);
  block(matchAddResetpasswordemail(id), function () {
    verifyResetpasswordemailDoesNotExist(id);
  });
});

bthread("RoleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRole(x.id);
  const e_add = waitForRoleAdded(id);
  block(matchDeleteRole(id), function () {
    verifyRoleExists(id);
  });
  updateRole(x.id);
  updateRole(x.id);
  const e_upd = waitForRoleUpdated(id);
  block(matchDeleteRole(id), function () {
    verifyRoleUpdated(id);
  });
  deleteRole(x.id);
  const e_del = waitForRoleDeleted(id);
  block(matchAddRole(id), function () {
    verifyRoleDoesNotExist(id);
  });
});

bthread("RolemappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRolemapping(x.id);
  const e_add = waitForRolemappingAdded(id);
  block(matchDeleteRolemapping(id), function () {
    verifyRolemappingExists(id);
  });
  updateRolemapping(x.id);
  updateRolemapping(x.id);
  const e_upd = waitForRolemappingUpdated(id);
  block(matchDeleteRolemapping(id), function () {
    verifyRolemappingUpdated(id);
  });
  deleteRolemapping(x.id);
  const e_del = waitForRolemappingDeleted(id);
  block(matchAddRolemapping(id), function () {
    verifyRolemappingDoesNotExist(id);
  });
});

bthread("RolesbyidLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRolesbyid(x.id);
  const e_add = waitForRolesbyidAdded(id);
  block(matchDeleteRolesbyid(id), function () {
    verifyRolesbyidExists(id);
  });
  updateRolesbyid(x.id);
  updateRolesbyid(x.id);
  const e_upd = waitForRolesbyidUpdated(id);
  block(matchDeleteRolesbyid(id), function () {
    verifyRolesbyidUpdated(id);
  });
  deleteRolesbyid(x.id);
  const e_del = waitForRolesbyidDeleted(id);
  block(matchAddRolesbyid(id), function () {
    verifyRolesbyidDoesNotExist(id);
  });
});

bthread("RotatedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRotated(x.id);
  const e_add = waitForRotatedAdded(id);
  block(matchDeleteRotated(id), function () {
    verifyRotatedExists(id);
  });
  updateRotated(x.id);
  updateRotated(x.id);
  const e_upd = waitForRotatedUpdated(id);
  block(matchDeleteRotated(id), function () {
    verifyRotatedUpdated(id);
  });
  deleteRotated(x.id);
  const e_del = waitForRotatedDeleted(id);
  block(matchAddRotated(id), function () {
    verifyRotatedDoesNotExist(id);
  });
});

bthread("ScopemappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScopemapping(x.id);
  const e_add = waitForScopemappingAdded(id);
  block(matchDeleteScopemapping(id), function () {
    verifyScopemappingExists(id);
  });
  updateScopemapping(x.id);
  updateScopemapping(x.id);
  const e_upd = waitForScopemappingUpdated(id);
  block(matchDeleteScopemapping(id), function () {
    verifyScopemappingUpdated(id);
  });
  deleteScopemapping(x.id);
  const e_del = waitForScopemappingDeleted(id);
  block(matchAddScopemapping(id), function () {
    verifyScopemappingDoesNotExist(id);
  });
});

bthread("SendverifyemailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSendverifyemail(x.id);
  const e_add = waitForSendverifyemailAdded(id);
  block(matchDeleteSendverifyemail(id), function () {
    verifySendverifyemailExists(id);
  });
  updateSendverifyemail(x.id);
  updateSendverifyemail(x.id);
  const e_upd = waitForSendverifyemailUpdated(id);
  block(matchDeleteSendverifyemail(id), function () {
    verifySendverifyemailUpdated(id);
  });
  deleteSendverifyemail(x.id);
  const e_del = waitForSendverifyemailDeleted(id);
  block(matchAddSendverifyemail(id), function () {
    verifySendverifyemailDoesNotExist(id);
  });
});

bthread("ServiceaccountuserLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addServiceaccountuser(x.id);
  const e_add = waitForServiceaccountuserAdded(id);
  block(matchDeleteServiceaccountuser(id), function () {
    verifyServiceaccountuserExists(id);
  });
  updateServiceaccountuser(x.id);
  updateServiceaccountuser(x.id);
  const e_upd = waitForServiceaccountuserUpdated(id);
  block(matchDeleteServiceaccountuser(id), function () {
    verifyServiceaccountuserUpdated(id);
  });
  deleteServiceaccountuser(x.id);
  const e_del = waitForServiceaccountuserDeleted(id);
  block(matchAddServiceaccountuser(id), function () {
    verifyServiceaccountuserDoesNotExist(id);
  });
});

bthread("SessionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSession(x.id);
  const e_add = waitForSessionAdded(id);
  block(matchDeleteSession(id), function () {
    verifySessionExists(id);
  });
  updateSession(x.id);
  updateSession(x.id);
  const e_upd = waitForSessionUpdated(id);
  block(matchDeleteSession(id), function () {
    verifySessionUpdated(id);
  });
  deleteSession(x.id);
  const e_del = waitForSessionDeleted(id);
  block(matchAddSession(id), function () {
    verifySessionDoesNotExist(id);
  });
});

bthread("SessioncountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSessioncount(x.id);
  const e_add = waitForSessioncountAdded(id);
  block(matchDeleteSessioncount(id), function () {
    verifySessioncountExists(id);
  });
  updateSessioncount(x.id);
  updateSessioncount(x.id);
  const e_upd = waitForSessioncountUpdated(id);
  block(matchDeleteSessioncount(id), function () {
    verifySessioncountUpdated(id);
  });
  deleteSessioncount(x.id);
  const e_del = waitForSessioncountDeleted(id);
  block(matchAddSessioncount(id), function () {
    verifySessioncountDoesNotExist(id);
  });
});

bthread("SubcomponenttypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubcomponenttype(x.id);
  const e_add = waitForSubcomponenttypeAdded(id);
  block(matchDeleteSubcomponenttype(id), function () {
    verifySubcomponenttypeExists(id);
  });
  updateSubcomponenttype(x.id);
  updateSubcomponenttype(x.id);
  const e_upd = waitForSubcomponenttypeUpdated(id);
  block(matchDeleteSubcomponenttype(id), function () {
    verifySubcomponenttypeUpdated(id);
  });
  deleteSubcomponenttype(x.id);
  const e_del = waitForSubcomponenttypeDeleted(id);
  block(matchAddSubcomponenttype(id), function () {
    verifySubcomponenttypeDoesNotExist(id);
  });
});

bthread("TestnodesavailableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTestnodesavailable(x.id);
  const e_add = waitForTestnodesavailableAdded(id);
  block(matchDeleteTestnodesavailable(id), function () {
    verifyTestnodesavailableExists(id);
  });
  updateTestnodesavailable(x.id);
  updateTestnodesavailable(x.id);
  const e_upd = waitForTestnodesavailableUpdated(id);
  block(matchDeleteTestnodesavailable(id), function () {
    verifyTestnodesavailableUpdated(id);
  });
  deleteTestnodesavailable(x.id);
  const e_del = waitForTestnodesavailableDeleted(id);
  block(matchAddTestnodesavailable(id), function () {
    verifyTestnodesavailableDoesNotExist(id);
  });
});

bthread("TestsmtpconnectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTestsmtpconnection(x.id);
  const e_add = waitForTestsmtpconnectionAdded(id);
  block(matchDeleteTestsmtpconnection(id), function () {
    verifyTestsmtpconnectionExists(id);
  });
  updateTestsmtpconnection(x.id);
  updateTestsmtpconnection(x.id);
  const e_upd = waitForTestsmtpconnectionUpdated(id);
  block(matchDeleteTestsmtpconnection(id), function () {
    verifyTestsmtpconnectionUpdated(id);
  });
  deleteTestsmtpconnection(x.id);
  const e_del = waitForTestsmtpconnectionDeleted(id);
  block(matchAddTestsmtpconnection(id), function () {
    verifyTestsmtpconnectionDoesNotExist(id);
  });
});

bthread("UnregisteredrequiredactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUnregisteredrequiredaction(x.id);
  const e_add = waitForUnregisteredrequiredactionAdded(id);
  block(matchDeleteUnregisteredrequiredaction(id), function () {
    verifyUnregisteredrequiredactionExists(id);
  });
  updateUnregisteredrequiredaction(x.id);
  updateUnregisteredrequiredaction(x.id);
  const e_upd = waitForUnregisteredrequiredactionUpdated(id);
  block(matchDeleteUnregisteredrequiredaction(id), function () {
    verifyUnregisteredrequiredactionUpdated(id);
  });
  deleteUnregisteredrequiredaction(x.id);
  const e_del = waitForUnregisteredrequiredactionDeleted(id);
  block(matchAddUnregisteredrequiredaction(id), function () {
    verifyUnregisteredrequiredactionDoesNotExist(id);
  });
});

bthread("UploadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUpload(x.id);
  const e_add = waitForUploadAdded(id);
  block(matchDeleteUpload(id), function () {
    verifyUploadExists(id);
  });
  updateUpload(x.id);
  updateUpload(x.id);
  const e_upd = waitForUploadUpdated(id);
  block(matchDeleteUpload(id), function () {
    verifyUploadUpdated(id);
  });
  deleteUpload(x.id);
  const e_del = waitForUploadDeleted(id);
  block(matchAddUpload(id), function () {
    verifyUploadDoesNotExist(id);
  });
});

bthread("UploadcertificateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUploadcertificate(x.id);
  const e_add = waitForUploadcertificateAdded(id);
  block(matchDeleteUploadcertificate(id), function () {
    verifyUploadcertificateExists(id);
  });
  updateUploadcertificate(x.id);
  updateUploadcertificate(x.id);
  const e_upd = waitForUploadcertificateUpdated(id);
  block(matchDeleteUploadcertificate(id), function () {
    verifyUploadcertificateUpdated(id);
  });
  deleteUploadcertificate(x.id);
  const e_del = waitForUploadcertificateDeleted(id);
  block(matchAddUploadcertificate(id), function () {
    verifyUploadcertificateDoesNotExist(id);
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

bthread("UserlabelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserlabel(x.id);
  const e_add = waitForUserlabelAdded(id);
  block(matchDeleteUserlabel(id), function () {
    verifyUserlabelExists(id);
  });
  updateUserlabel(x.id);
  updateUserlabel(x.id);
  const e_upd = waitForUserlabelUpdated(id);
  block(matchDeleteUserlabel(id), function () {
    verifyUserlabelUpdated(id);
  });
  deleteUserlabel(x.id);
  const e_del = waitForUserlabelDeleted(id);
  block(matchAddUserlabel(id), function () {
    verifyUserlabelDoesNotExist(id);
  });
});

bthread("UsersessionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsersession(x.id);
  const e_add = waitForUsersessionAdded(id);
  block(matchDeleteUsersession(id), function () {
    verifyUsersessionExists(id);
  });
  updateUsersession(x.id);
  updateUsersession(x.id);
  const e_upd = waitForUsersessionUpdated(id);
  block(matchDeleteUsersession(id), function () {
    verifyUsersessionUpdated(id);
  });
  deleteUsersession(x.id);
  const e_del = waitForUsersessionDeleted(id);
  block(matchAddUsersession(id), function () {
    verifyUsersessionDoesNotExist(id);
  });
});

bthread("UsersmanagementpermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsersmanagementpermission(x.id);
  const e_add = waitForUsersmanagementpermissionAdded(id);
  block(matchDeleteUsersmanagementpermission(id), function () {
    verifyUsersmanagementpermissionExists(id);
  });
  updateUsersmanagementpermission(x.id);
  updateUsersmanagementpermission(x.id);
  const e_upd = waitForUsersmanagementpermissionUpdated(id);
  block(matchDeleteUsersmanagementpermission(id), function () {
    verifyUsersmanagementpermissionUpdated(id);
  });
  deleteUsersmanagementpermission(x.id);
  const e_del = waitForUsersmanagementpermissionDeleted(id);
  block(matchAddUsersmanagementpermission(id), function () {
    verifyUsersmanagementpermissionDoesNotExist(id);
  });
});

// ===== PASSIVE ASSERTIONS =====

bthread("Addmodel create verification", function () {
  const e = waitForAnyAddmodelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddmodel(k, ANY), function () {
    verifyAddmodelExists(k);
  });
});

bthread("Addmodel update verification", function () {
  const e = waitForAnyAddmodelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddmodel(k, ANY), function () {
    verifyAddmodelUpdated(k);
  });
});

bthread("Addmodel delete verification", function () {
  const e = waitForAnyAddmodelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddmodel(k, ANY), function () {
    verifyAddmodelDoesNotExist(k);
  });
});

bthread("Adminevent create verification", function () {
  const e = waitForAnyAdmineventAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdminevent(k, ANY), function () {
    verifyAdmineventExists(k);
  });
});

bthread("Adminevent update verification", function () {
  const e = waitForAnyAdmineventUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdminevent(k, ANY), function () {
    verifyAdmineventUpdated(k);
  });
});

bthread("Adminevent delete verification", function () {
  const e = waitForAnyAdmineventDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAdminevent(k, ANY), function () {
    verifyAdmineventDoesNotExist(k);
  });
});

bthread("Attackdetection create verification", function () {
  const e = waitForAnyAttackdetectionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttackdetection(k, ANY), function () {
    verifyAttackdetectionExists(k);
  });
});

bthread("Attackdetection update verification", function () {
  const e = waitForAnyAttackdetectionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttackdetection(k, ANY), function () {
    verifyAttackdetectionUpdated(k);
  });
});

bthread("Attackdetection delete verification", function () {
  const e = waitForAnyAttackdetectionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAttackdetection(k, ANY), function () {
    verifyAttackdetectionDoesNotExist(k);
  });
});

bthread("Authentication create verification", function () {
  const e = waitForAnyAuthenticationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthentication(k, ANY), function () {
    verifyAuthenticationExists(k);
  });
});

bthread("Authentication update verification", function () {
  const e = waitForAnyAuthenticationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthentication(k, ANY), function () {
    verifyAuthenticationUpdated(k);
  });
});

bthread("Authentication delete verification", function () {
  const e = waitForAnyAuthenticationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuthentication(k, ANY), function () {
    verifyAuthenticationDoesNotExist(k);
  });
});

bthread("Authenticatorprovider create verification", function () {
  const e = waitForAnyAuthenticatorproviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthenticatorprovider(k, ANY), function () {
    verifyAuthenticatorproviderExists(k);
  });
});

bthread("Authenticatorprovider update verification", function () {
  const e = waitForAnyAuthenticatorproviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthenticatorprovider(k, ANY), function () {
    verifyAuthenticatorproviderUpdated(k);
  });
});

bthread("Authenticatorprovider delete verification", function () {
  const e = waitForAnyAuthenticatorproviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuthenticatorprovider(k, ANY), function () {
    verifyAuthenticatorproviderDoesNotExist(k);
  });
});

bthread("Available create verification", function () {
  const e = waitForAnyAvailableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailable(k, ANY), function () {
    verifyAvailableExists(k);
  });
});

bthread("Available update verification", function () {
  const e = waitForAnyAvailableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailable(k, ANY), function () {
    verifyAvailableUpdated(k);
  });
});

bthread("Available delete verification", function () {
  const e = waitForAnyAvailableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailable(k, ANY), function () {
    verifyAvailableDoesNotExist(k);
  });
});

bthread("Bruteforce create verification", function () {
  const e = waitForAnyBruteforceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBruteforce(k, ANY), function () {
    verifyBruteforceExists(k);
  });
});

bthread("Bruteforce update verification", function () {
  const e = waitForAnyBruteforceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBruteforce(k, ANY), function () {
    verifyBruteforceUpdated(k);
  });
});

bthread("Bruteforce delete verification", function () {
  const e = waitForAnyBruteforceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBruteforce(k, ANY), function () {
    verifyBruteforceDoesNotExist(k);
  });
});

bthread("Certificate create verification", function () {
  const e = waitForAnyCertificateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCertificate(k, ANY), function () {
    verifyCertificateExists(k);
  });
});

bthread("Certificate update verification", function () {
  const e = waitForAnyCertificateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCertificate(k, ANY), function () {
    verifyCertificateUpdated(k);
  });
});

bthread("Certificate delete verification", function () {
  const e = waitForAnyCertificateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCertificate(k, ANY), function () {
    verifyCertificateDoesNotExist(k);
  });
});

bthread("Children create verification", function () {
  const e = waitForAnyChildrenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChildren(k, ANY), function () {
    verifyChildrenExists(k);
  });
});

bthread("Children update verification", function () {
  const e = waitForAnyChildrenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChildren(k, ANY), function () {
    verifyChildrenUpdated(k);
  });
});

bthread("Children delete verification", function () {
  const e = waitForAnyChildrenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChildren(k, ANY), function () {
    verifyChildrenDoesNotExist(k);
  });
});

bthread("Client create verification", function () {
  const e = waitForAnyClientAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClient(k, ANY), function () {
    verifyClientExists(k);
  });
});

bthread("Client update verification", function () {
  const e = waitForAnyClientUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClient(k, ANY), function () {
    verifyClientUpdated(k);
  });
});

bthread("Client delete verification", function () {
  const e = waitForAnyClientDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClient(k, ANY), function () {
    verifyClientDoesNotExist(k);
  });
});

bthread("Clientauthenticatorprovider create verification", function () {
  const e = waitForAnyClientauthenticatorproviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientauthenticatorprovider(k, ANY), function () {
    verifyClientauthenticatorproviderExists(k);
  });
});

bthread("Clientauthenticatorprovider update verification", function () {
  const e = waitForAnyClientauthenticatorproviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientauthenticatorprovider(k, ANY), function () {
    verifyClientauthenticatorproviderUpdated(k);
  });
});

bthread("Clientauthenticatorprovider delete verification", function () {
  const e = waitForAnyClientauthenticatorproviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientauthenticatorprovider(k, ANY), function () {
    verifyClientauthenticatorproviderDoesNotExist(k);
  });
});

bthread("Clientdescriptionconverter create verification", function () {
  const e = waitForAnyClientdescriptionconverterAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientdescriptionconverter(k, ANY), function () {
    verifyClientdescriptionconverterExists(k);
  });
});

bthread("Clientdescriptionconverter update verification", function () {
  const e = waitForAnyClientdescriptionconverterUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientdescriptionconverter(k, ANY), function () {
    verifyClientdescriptionconverterUpdated(k);
  });
});

bthread("Clientdescriptionconverter delete verification", function () {
  const e = waitForAnyClientdescriptionconverterDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientdescriptionconverter(k, ANY), function () {
    verifyClientdescriptionconverterDoesNotExist(k);
  });
});

bthread("Clientpolicy create verification", function () {
  const e = waitForAnyClientpolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientpolicy(k, ANY), function () {
    verifyClientpolicyExists(k);
  });
});

bthread("Clientpolicy update verification", function () {
  const e = waitForAnyClientpolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientpolicy(k, ANY), function () {
    verifyClientpolicyUpdated(k);
  });
});

bthread("Clientpolicy delete verification", function () {
  const e = waitForAnyClientpolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientpolicy(k, ANY), function () {
    verifyClientpolicyDoesNotExist(k);
  });
});

bthread("Clientregistrationpolicy create verification", function () {
  const e = waitForAnyClientregistrationpolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientregistrationpolicy(k, ANY), function () {
    verifyClientregistrationpolicyExists(k);
  });
});

bthread("Clientregistrationpolicy update verification", function () {
  const e = waitForAnyClientregistrationpolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientregistrationpolicy(k, ANY), function () {
    verifyClientregistrationpolicyUpdated(k);
  });
});

bthread("Clientregistrationpolicy delete verification", function () {
  const e = waitForAnyClientregistrationpolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientregistrationpolicy(k, ANY), function () {
    verifyClientregistrationpolicyDoesNotExist(k);
  });
});

bthread("Clientscope create verification", function () {
  const e = waitForAnyClientscopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientscope(k, ANY), function () {
    verifyClientscopeExists(k);
  });
});

bthread("Clientscope update verification", function () {
  const e = waitForAnyClientscopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientscope(k, ANY), function () {
    verifyClientscopeUpdated(k);
  });
});

bthread("Clientscope delete verification", function () {
  const e = waitForAnyClientscopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientscope(k, ANY), function () {
    verifyClientscopeDoesNotExist(k);
  });
});

bthread("Clientsecret create verification", function () {
  const e = waitForAnyClientsecretAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientsecret(k, ANY), function () {
    verifyClientsecretExists(k);
  });
});

bthread("Clientsecret update verification", function () {
  const e = waitForAnyClientsecretUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientsecret(k, ANY), function () {
    verifyClientsecretUpdated(k);
  });
});

bthread("Clientsecret delete verification", function () {
  const e = waitForAnyClientsecretDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientsecret(k, ANY), function () {
    verifyClientsecretDoesNotExist(k);
  });
});

bthread("Clientsessionstat create verification", function () {
  const e = waitForAnyClientsessionstatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientsessionstat(k, ANY), function () {
    verifyClientsessionstatExists(k);
  });
});

bthread("Clientsessionstat update verification", function () {
  const e = waitForAnyClientsessionstatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientsessionstat(k, ANY), function () {
    verifyClientsessionstatUpdated(k);
  });
});

bthread("Clientsessionstat delete verification", function () {
  const e = waitForAnyClientsessionstatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientsessionstat(k, ANY), function () {
    verifyClientsessionstatDoesNotExist(k);
  });
});

bthread("Clientsinitialacces create verification", function () {
  const e = waitForAnyClientsinitialaccesAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientsinitialacces(k, ANY), function () {
    verifyClientsinitialaccesExists(k);
  });
});

bthread("Clientsinitialacces update verification", function () {
  const e = waitForAnyClientsinitialaccesUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClientsinitialacces(k, ANY), function () {
    verifyClientsinitialaccesUpdated(k);
  });
});

bthread("Clientsinitialacces delete verification", function () {
  const e = waitForAnyClientsinitialaccesDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClientsinitialacces(k, ANY), function () {
    verifyClientsinitialaccesDoesNotExist(k);
  });
});

bthread("Clienttemplate create verification", function () {
  const e = waitForAnyClienttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClienttemplate(k, ANY), function () {
    verifyClienttemplateExists(k);
  });
});

bthread("Clienttemplate update verification", function () {
  const e = waitForAnyClienttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClienttemplate(k, ANY), function () {
    verifyClienttemplateUpdated(k);
  });
});

bthread("Clienttemplate delete verification", function () {
  const e = waitForAnyClienttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClienttemplate(k, ANY), function () {
    verifyClienttemplateDoesNotExist(k);
  });
});

bthread("Component create verification", function () {
  const e = waitForAnyComponentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComponent(k, ANY), function () {
    verifyComponentExists(k);
  });
});

bthread("Component update verification", function () {
  const e = waitForAnyComponentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComponent(k, ANY), function () {
    verifyComponentUpdated(k);
  });
});

bthread("Component delete verification", function () {
  const e = waitForAnyComponentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddComponent(k, ANY), function () {
    verifyComponentDoesNotExist(k);
  });
});

bthread("Composite create verification", function () {
  const e = waitForAnyCompositeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComposite(k, ANY), function () {
    verifyCompositeExists(k);
  });
});

bthread("Composite update verification", function () {
  const e = waitForAnyCompositeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComposite(k, ANY), function () {
    verifyCompositeUpdated(k);
  });
});

bthread("Composite delete verification", function () {
  const e = waitForAnyCompositeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddComposite(k, ANY), function () {
    verifyCompositeDoesNotExist(k);
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

bthread("Configdescription create verification", function () {
  const e = waitForAnyConfigdescriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigdescription(k, ANY), function () {
    verifyConfigdescriptionExists(k);
  });
});

bthread("Configdescription update verification", function () {
  const e = waitForAnyConfigdescriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigdescription(k, ANY), function () {
    verifyConfigdescriptionUpdated(k);
  });
});

bthread("Configdescription delete verification", function () {
  const e = waitForAnyConfigdescriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfigdescription(k, ANY), function () {
    verifyConfigdescriptionDoesNotExist(k);
  });
});

bthread("Configureduserstoragecredentialtype create verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigureduserstoragecredentialtype(k, ANY), function () {
    verifyConfigureduserstoragecredentialtypeExists(k);
  });
});

bthread("Configureduserstoragecredentialtype update verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfigureduserstoragecredentialtype(k, ANY), function () {
    verifyConfigureduserstoragecredentialtypeUpdated(k);
  });
});

bthread("Configureduserstoragecredentialtype delete verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfigureduserstoragecredentialtype(k, ANY), function () {
    verifyConfigureduserstoragecredentialtypeDoesNotExist(k);
  });
});

bthread("Consent create verification", function () {
  const e = waitForAnyConsentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsent(k, ANY), function () {
    verifyConsentExists(k);
  });
});

bthread("Consent update verification", function () {
  const e = waitForAnyConsentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConsent(k, ANY), function () {
    verifyConsentUpdated(k);
  });
});

bthread("Consent delete verification", function () {
  const e = waitForAnyConsentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConsent(k, ANY), function () {
    verifyConsentDoesNotExist(k);
  });
});

bthread("Copy create verification", function () {
  const e = waitForAnyCopyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCopy(k, ANY), function () {
    verifyCopyExists(k);
  });
});

bthread("Copy update verification", function () {
  const e = waitForAnyCopyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCopy(k, ANY), function () {
    verifyCopyUpdated(k);
  });
});

bthread("Copy delete verification", function () {
  const e = waitForAnyCopyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCopy(k, ANY), function () {
    verifyCopyDoesNotExist(k);
  });
});

bthread("Count create verification", function () {
  const e = waitForAnyCountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCount(k, ANY), function () {
    verifyCountExists(k);
  });
});

bthread("Count update verification", function () {
  const e = waitForAnyCountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCount(k, ANY), function () {
    verifyCountUpdated(k);
  });
});

bthread("Count delete verification", function () {
  const e = waitForAnyCountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCount(k, ANY), function () {
    verifyCountDoesNotExist(k);
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

bthread("Credentialregistrator create verification", function () {
  const e = waitForAnyCredentialregistratorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentialregistrator(k, ANY), function () {
    verifyCredentialregistratorExists(k);
  });
});

bthread("Credentialregistrator update verification", function () {
  const e = waitForAnyCredentialregistratorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentialregistrator(k, ANY), function () {
    verifyCredentialregistratorUpdated(k);
  });
});

bthread("Credentialregistrator delete verification", function () {
  const e = waitForAnyCredentialregistratorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredentialregistrator(k, ANY), function () {
    verifyCredentialregistratorDoesNotExist(k);
  });
});

bthread("Defaultclientscope create verification", function () {
  const e = waitForAnyDefaultclientscopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultclientscope(k, ANY), function () {
    verifyDefaultclientscopeExists(k);
  });
});

bthread("Defaultclientscope update verification", function () {
  const e = waitForAnyDefaultclientscopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultclientscope(k, ANY), function () {
    verifyDefaultclientscopeUpdated(k);
  });
});

bthread("Defaultclientscope delete verification", function () {
  const e = waitForAnyDefaultclientscopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultclientscope(k, ANY), function () {
    verifyDefaultclientscopeDoesNotExist(k);
  });
});

bthread("Defaultdefaultclientscope create verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultdefaultclientscope(k, ANY), function () {
    verifyDefaultdefaultclientscopeExists(k);
  });
});

bthread("Defaultdefaultclientscope update verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultdefaultclientscope(k, ANY), function () {
    verifyDefaultdefaultclientscopeUpdated(k);
  });
});

bthread("Defaultdefaultclientscope delete verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultdefaultclientscope(k, ANY), function () {
    verifyDefaultdefaultclientscopeDoesNotExist(k);
  });
});

bthread("Defaultgroup create verification", function () {
  const e = waitForAnyDefaultgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultgroup(k, ANY), function () {
    verifyDefaultgroupExists(k);
  });
});

bthread("Defaultgroup update verification", function () {
  const e = waitForAnyDefaultgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultgroup(k, ANY), function () {
    verifyDefaultgroupUpdated(k);
  });
});

bthread("Defaultgroup delete verification", function () {
  const e = waitForAnyDefaultgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultgroup(k, ANY), function () {
    verifyDefaultgroupDoesNotExist(k);
  });
});

bthread("Defaultoptionalclientscope create verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultoptionalclientscope(k, ANY), function () {
    verifyDefaultoptionalclientscopeExists(k);
  });
});

bthread("Defaultoptionalclientscope update verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultoptionalclientscope(k, ANY), function () {
    verifyDefaultoptionalclientscopeUpdated(k);
  });
});

bthread("Defaultoptionalclientscope delete verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultoptionalclientscope(k, ANY), function () {
    verifyDefaultoptionalclientscopeDoesNotExist(k);
  });
});

bthread("Disablecredentialtype create verification", function () {
  const e = waitForAnyDisablecredentialtypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisablecredentialtype(k, ANY), function () {
    verifyDisablecredentialtypeExists(k);
  });
});

bthread("Disablecredentialtype update verification", function () {
  const e = waitForAnyDisablecredentialtypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisablecredentialtype(k, ANY), function () {
    verifyDisablecredentialtypeUpdated(k);
  });
});

bthread("Disablecredentialtype delete verification", function () {
  const e = waitForAnyDisablecredentialtypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDisablecredentialtype(k, ANY), function () {
    verifyDisablecredentialtypeDoesNotExist(k);
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

bthread("Evaluatescope create verification", function () {
  const e = waitForAnyEvaluatescopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEvaluatescope(k, ANY), function () {
    verifyEvaluatescopeExists(k);
  });
});

bthread("Evaluatescope update verification", function () {
  const e = waitForAnyEvaluatescopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEvaluatescope(k, ANY), function () {
    verifyEvaluatescopeUpdated(k);
  });
});

bthread("Evaluatescope delete verification", function () {
  const e = waitForAnyEvaluatescopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEvaluatescope(k, ANY), function () {
    verifyEvaluatescopeDoesNotExist(k);
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

bthread("Executeactionsemail create verification", function () {
  const e = waitForAnyExecuteactionsemailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExecuteactionsemail(k, ANY), function () {
    verifyExecuteactionsemailExists(k);
  });
});

bthread("Executeactionsemail update verification", function () {
  const e = waitForAnyExecuteactionsemailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExecuteactionsemail(k, ANY), function () {
    verifyExecuteactionsemailUpdated(k);
  });
});

bthread("Executeactionsemail delete verification", function () {
  const e = waitForAnyExecuteactionsemailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExecuteactionsemail(k, ANY), function () {
    verifyExecuteactionsemailDoesNotExist(k);
  });
});

bthread("Execution create verification", function () {
  const e = waitForAnyExecutionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExecution(k, ANY), function () {
    verifyExecutionExists(k);
  });
});

bthread("Execution update verification", function () {
  const e = waitForAnyExecutionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExecution(k, ANY), function () {
    verifyExecutionUpdated(k);
  });
});

bthread("Execution delete verification", function () {
  const e = waitForAnyExecutionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExecution(k, ANY), function () {
    verifyExecutionDoesNotExist(k);
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

bthread("Federatedidentity create verification", function () {
  const e = waitForAnyFederatedidentityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFederatedidentity(k, ANY), function () {
    verifyFederatedidentityExists(k);
  });
});

bthread("Federatedidentity update verification", function () {
  const e = waitForAnyFederatedidentityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFederatedidentity(k, ANY), function () {
    verifyFederatedidentityUpdated(k);
  });
});

bthread("Federatedidentity delete verification", function () {
  const e = waitForAnyFederatedidentityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFederatedidentity(k, ANY), function () {
    verifyFederatedidentityDoesNotExist(k);
  });
});

bthread("Flow create verification", function () {
  const e = waitForAnyFlowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFlow(k, ANY), function () {
    verifyFlowExists(k);
  });
});

bthread("Flow update verification", function () {
  const e = waitForAnyFlowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFlow(k, ANY), function () {
    verifyFlowUpdated(k);
  });
});

bthread("Flow delete verification", function () {
  const e = waitForAnyFlowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFlow(k, ANY), function () {
    verifyFlowDoesNotExist(k);
  });
});

bthread("Formactionprovider create verification", function () {
  const e = waitForAnyFormactionproviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFormactionprovider(k, ANY), function () {
    verifyFormactionproviderExists(k);
  });
});

bthread("Formactionprovider update verification", function () {
  const e = waitForAnyFormactionproviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFormactionprovider(k, ANY), function () {
    verifyFormactionproviderUpdated(k);
  });
});

bthread("Formactionprovider delete verification", function () {
  const e = waitForAnyFormactionproviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFormactionprovider(k, ANY), function () {
    verifyFormactionproviderDoesNotExist(k);
  });
});

bthread("Formprovider create verification", function () {
  const e = waitForAnyFormproviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFormprovider(k, ANY), function () {
    verifyFormproviderExists(k);
  });
});

bthread("Formprovider update verification", function () {
  const e = waitForAnyFormproviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFormprovider(k, ANY), function () {
    verifyFormproviderUpdated(k);
  });
});

bthread("Formprovider delete verification", function () {
  const e = waitForAnyFormproviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFormprovider(k, ANY), function () {
    verifyFormproviderDoesNotExist(k);
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

bthread("Generateanddownload create verification", function () {
  const e = waitForAnyGenerateanddownloadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateanddownload(k, ANY), function () {
    verifyGenerateanddownloadExists(k);
  });
});

bthread("Generateanddownload update verification", function () {
  const e = waitForAnyGenerateanddownloadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateanddownload(k, ANY), function () {
    verifyGenerateanddownloadUpdated(k);
  });
});

bthread("Generateanddownload delete verification", function () {
  const e = waitForAnyGenerateanddownloadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGenerateanddownload(k, ANY), function () {
    verifyGenerateanddownloadDoesNotExist(k);
  });
});

bthread("Generateexampleaccesstoken create verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateexampleaccesstoken(k, ANY), function () {
    verifyGenerateexampleaccesstokenExists(k);
  });
});

bthread("Generateexampleaccesstoken update verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateexampleaccesstoken(k, ANY), function () {
    verifyGenerateexampleaccesstokenUpdated(k);
  });
});

bthread("Generateexampleaccesstoken delete verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGenerateexampleaccesstoken(k, ANY), function () {
    verifyGenerateexampleaccesstokenDoesNotExist(k);
  });
});

bthread("Generateexampleidtoken create verification", function () {
  const e = waitForAnyGenerateexampleidtokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateexampleidtoken(k, ANY), function () {
    verifyGenerateexampleidtokenExists(k);
  });
});

bthread("Generateexampleidtoken update verification", function () {
  const e = waitForAnyGenerateexampleidtokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateexampleidtoken(k, ANY), function () {
    verifyGenerateexampleidtokenUpdated(k);
  });
});

bthread("Generateexampleidtoken delete verification", function () {
  const e = waitForAnyGenerateexampleidtokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGenerateexampleidtoken(k, ANY), function () {
    verifyGenerateexampleidtokenDoesNotExist(k);
  });
});

bthread("Generateexampleuserinfo create verification", function () {
  const e = waitForAnyGenerateexampleuserinfoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateexampleuserinfo(k, ANY), function () {
    verifyGenerateexampleuserinfoExists(k);
  });
});

bthread("Generateexampleuserinfo update verification", function () {
  const e = waitForAnyGenerateexampleuserinfoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerateexampleuserinfo(k, ANY), function () {
    verifyGenerateexampleuserinfoUpdated(k);
  });
});

bthread("Generateexampleuserinfo delete verification", function () {
  const e = waitForAnyGenerateexampleuserinfoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGenerateexampleuserinfo(k, ANY), function () {
    verifyGenerateexampleuserinfoDoesNotExist(k);
  });
});

bthread("Granted create verification", function () {
  const e = waitForAnyGrantedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGranted(k, ANY), function () {
    verifyGrantedExists(k);
  });
});

bthread("Granted update verification", function () {
  const e = waitForAnyGrantedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGranted(k, ANY), function () {
    verifyGrantedUpdated(k);
  });
});

bthread("Granted delete verification", function () {
  const e = waitForAnyGrantedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGranted(k, ANY), function () {
    verifyGrantedDoesNotExist(k);
  });
});

bthread("Group create verification", function () {
  const e = waitForAnyGroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroup(k, ANY), function () {
    verifyGroupExists(k);
  });
});

bthread("Group update verification", function () {
  const e = waitForAnyGroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroup(k, ANY), function () {
    verifyGroupUpdated(k);
  });
});

bthread("Group delete verification", function () {
  const e = waitForAnyGroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGroup(k, ANY), function () {
    verifyGroupDoesNotExist(k);
  });
});

bthread("Groupbypath create verification", function () {
  const e = waitForAnyGroupbypathAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroupbypath(k, ANY), function () {
    verifyGroupbypathExists(k);
  });
});

bthread("Groupbypath update verification", function () {
  const e = waitForAnyGroupbypathUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroupbypath(k, ANY), function () {
    verifyGroupbypathUpdated(k);
  });
});

bthread("Groupbypath delete verification", function () {
  const e = waitForAnyGroupbypathDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGroupbypath(k, ANY), function () {
    verifyGroupbypathDoesNotExist(k);
  });
});

bthread("Identityprovider create verification", function () {
  const e = waitForAnyIdentityproviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdentityprovider(k, ANY), function () {
    verifyIdentityproviderExists(k);
  });
});

bthread("Identityprovider update verification", function () {
  const e = waitForAnyIdentityproviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdentityprovider(k, ANY), function () {
    verifyIdentityproviderUpdated(k);
  });
});

bthread("Identityprovider delete verification", function () {
  const e = waitForAnyIdentityproviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdentityprovider(k, ANY), function () {
    verifyIdentityproviderDoesNotExist(k);
  });
});

bthread("Impersonation create verification", function () {
  const e = waitForAnyImpersonationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImpersonation(k, ANY), function () {
    verifyImpersonationExists(k);
  });
});

bthread("Impersonation update verification", function () {
  const e = waitForAnyImpersonationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImpersonation(k, ANY), function () {
    verifyImpersonationUpdated(k);
  });
});

bthread("Impersonation delete verification", function () {
  const e = waitForAnyImpersonationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImpersonation(k, ANY), function () {
    verifyImpersonationDoesNotExist(k);
  });
});

bthread("Importconfig create verification", function () {
  const e = waitForAnyImportconfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImportconfig(k, ANY), function () {
    verifyImportconfigExists(k);
  });
});

bthread("Importconfig update verification", function () {
  const e = waitForAnyImportconfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImportconfig(k, ANY), function () {
    verifyImportconfigUpdated(k);
  });
});

bthread("Importconfig delete verification", function () {
  const e = waitForAnyImportconfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImportconfig(k, ANY), function () {
    verifyImportconfigDoesNotExist(k);
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

bthread("Localization create verification", function () {
  const e = waitForAnyLocalizationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocalization(k, ANY), function () {
    verifyLocalizationExists(k);
  });
});

bthread("Localization update verification", function () {
  const e = waitForAnyLocalizationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocalization(k, ANY), function () {
    verifyLocalizationUpdated(k);
  });
});

bthread("Localization delete verification", function () {
  const e = waitForAnyLocalizationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLocalization(k, ANY), function () {
    verifyLocalizationDoesNotExist(k);
  });
});

bthread("Logout create verification", function () {
  const e = waitForAnyLogoutAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogout(k, ANY), function () {
    verifyLogoutExists(k);
  });
});

bthread("Logout update verification", function () {
  const e = waitForAnyLogoutUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogout(k, ANY), function () {
    verifyLogoutUpdated(k);
  });
});

bthread("Logout delete verification", function () {
  const e = waitForAnyLogoutDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLogout(k, ANY), function () {
    verifyLogoutDoesNotExist(k);
  });
});

bthread("Logoutall create verification", function () {
  const e = waitForAnyLogoutallAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogoutall(k, ANY), function () {
    verifyLogoutallExists(k);
  });
});

bthread("Logoutall update verification", function () {
  const e = waitForAnyLogoutallUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogoutall(k, ANY), function () {
    verifyLogoutallUpdated(k);
  });
});

bthread("Logoutall delete verification", function () {
  const e = waitForAnyLogoutallDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLogoutall(k, ANY), function () {
    verifyLogoutallDoesNotExist(k);
  });
});

bthread("Lowerpriority create verification", function () {
  const e = waitForAnyLowerpriorityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLowerpriority(k, ANY), function () {
    verifyLowerpriorityExists(k);
  });
});

bthread("Lowerpriority update verification", function () {
  const e = waitForAnyLowerpriorityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLowerpriority(k, ANY), function () {
    verifyLowerpriorityUpdated(k);
  });
});

bthread("Lowerpriority delete verification", function () {
  const e = waitForAnyLowerpriorityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLowerpriority(k, ANY), function () {
    verifyLowerpriorityDoesNotExist(k);
  });
});

bthread("Management create verification", function () {
  const e = waitForAnyManagementAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteManagement(k, ANY), function () {
    verifyManagementExists(k);
  });
});

bthread("Management update verification", function () {
  const e = waitForAnyManagementUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteManagement(k, ANY), function () {
    verifyManagementUpdated(k);
  });
});

bthread("Management delete verification", function () {
  const e = waitForAnyManagementDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddManagement(k, ANY), function () {
    verifyManagementDoesNotExist(k);
  });
});

bthread("Mapper create verification", function () {
  const e = waitForAnyMapperAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMapper(k, ANY), function () {
    verifyMapperExists(k);
  });
});

bthread("Mapper update verification", function () {
  const e = waitForAnyMapperUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMapper(k, ANY), function () {
    verifyMapperUpdated(k);
  });
});

bthread("Mapper delete verification", function () {
  const e = waitForAnyMapperDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMapper(k, ANY), function () {
    verifyMapperDoesNotExist(k);
  });
});

bthread("Mappertype create verification", function () {
  const e = waitForAnyMappertypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMappertype(k, ANY), function () {
    verifyMappertypeExists(k);
  });
});

bthread("Mappertype update verification", function () {
  const e = waitForAnyMappertypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMappertype(k, ANY), function () {
    verifyMappertypeUpdated(k);
  });
});

bthread("Mappertype delete verification", function () {
  const e = waitForAnyMappertypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMappertype(k, ANY), function () {
    verifyMappertypeDoesNotExist(k);
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

bthread("Model create verification", function () {
  const e = waitForAnyModelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModel(k, ANY), function () {
    verifyModelExists(k);
  });
});

bthread("Model update verification", function () {
  const e = waitForAnyModelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModel(k, ANY), function () {
    verifyModelUpdated(k);
  });
});

bthread("Model delete verification", function () {
  const e = waitForAnyModelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModel(k, ANY), function () {
    verifyModelDoesNotExist(k);
  });
});

bthread("Moveafter create verification", function () {
  const e = waitForAnyMoveafterAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMoveafter(k, ANY), function () {
    verifyMoveafterExists(k);
  });
});

bthread("Moveafter update verification", function () {
  const e = waitForAnyMoveafterUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMoveafter(k, ANY), function () {
    verifyMoveafterUpdated(k);
  });
});

bthread("Moveafter delete verification", function () {
  const e = waitForAnyMoveafterDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMoveafter(k, ANY), function () {
    verifyMoveafterDoesNotExist(k);
  });
});

bthread("Movetofirst create verification", function () {
  const e = waitForAnyMovetofirstAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMovetofirst(k, ANY), function () {
    verifyMovetofirstExists(k);
  });
});

bthread("Movetofirst update verification", function () {
  const e = waitForAnyMovetofirstUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMovetofirst(k, ANY), function () {
    verifyMovetofirstUpdated(k);
  });
});

bthread("Movetofirst delete verification", function () {
  const e = waitForAnyMovetofirstDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMovetofirst(k, ANY), function () {
    verifyMovetofirstDoesNotExist(k);
  });
});

bthread("Node create verification", function () {
  const e = waitForAnyNodeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNode(k, ANY), function () {
    verifyNodeExists(k);
  });
});

bthread("Node update verification", function () {
  const e = waitForAnyNodeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNode(k, ANY), function () {
    verifyNodeUpdated(k);
  });
});

bthread("Node delete verification", function () {
  const e = waitForAnyNodeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNode(k, ANY), function () {
    verifyNodeDoesNotExist(k);
  });
});

bthread("Notgranted create verification", function () {
  const e = waitForAnyNotgrantedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotgranted(k, ANY), function () {
    verifyNotgrantedExists(k);
  });
});

bthread("Notgranted update verification", function () {
  const e = waitForAnyNotgrantedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotgranted(k, ANY), function () {
    verifyNotgrantedUpdated(k);
  });
});

bthread("Notgranted delete verification", function () {
  const e = waitForAnyNotgrantedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotgranted(k, ANY), function () {
    verifyNotgrantedDoesNotExist(k);
  });
});

bthread("Offlinesession create verification", function () {
  const e = waitForAnyOfflinesessionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOfflinesession(k, ANY), function () {
    verifyOfflinesessionExists(k);
  });
});

bthread("Offlinesession update verification", function () {
  const e = waitForAnyOfflinesessionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOfflinesession(k, ANY), function () {
    verifyOfflinesessionUpdated(k);
  });
});

bthread("Offlinesession delete verification", function () {
  const e = waitForAnyOfflinesessionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOfflinesession(k, ANY), function () {
    verifyOfflinesessionDoesNotExist(k);
  });
});

bthread("Offlinesessioncount create verification", function () {
  const e = waitForAnyOfflinesessioncountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOfflinesessioncount(k, ANY), function () {
    verifyOfflinesessioncountExists(k);
  });
});

bthread("Offlinesessioncount update verification", function () {
  const e = waitForAnyOfflinesessioncountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOfflinesessioncount(k, ANY), function () {
    verifyOfflinesessioncountUpdated(k);
  });
});

bthread("Offlinesessioncount delete verification", function () {
  const e = waitForAnyOfflinesessioncountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOfflinesessioncount(k, ANY), function () {
    verifyOfflinesessioncountDoesNotExist(k);
  });
});

bthread("Optionalclientscope create verification", function () {
  const e = waitForAnyOptionalclientscopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOptionalclientscope(k, ANY), function () {
    verifyOptionalclientscopeExists(k);
  });
});

bthread("Optionalclientscope update verification", function () {
  const e = waitForAnyOptionalclientscopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOptionalclientscope(k, ANY), function () {
    verifyOptionalclientscopeUpdated(k);
  });
});

bthread("Optionalclientscope delete verification", function () {
  const e = waitForAnyOptionalclientscopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOptionalclientscope(k, ANY), function () {
    verifyOptionalclientscopeDoesNotExist(k);
  });
});

bthread("Partialexport create verification", function () {
  const e = waitForAnyPartialexportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePartialexport(k, ANY), function () {
    verifyPartialexportExists(k);
  });
});

bthread("Partialexport update verification", function () {
  const e = waitForAnyPartialexportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePartialexport(k, ANY), function () {
    verifyPartialexportUpdated(k);
  });
});

bthread("Partialexport delete verification", function () {
  const e = waitForAnyPartialexportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPartialexport(k, ANY), function () {
    verifyPartialexportDoesNotExist(k);
  });
});

bthread("Partialimport create verification", function () {
  const e = waitForAnyPartialimportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePartialimport(k, ANY), function () {
    verifyPartialimportExists(k);
  });
});

bthread("Partialimport update verification", function () {
  const e = waitForAnyPartialimportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePartialimport(k, ANY), function () {
    verifyPartialimportUpdated(k);
  });
});

bthread("Partialimport delete verification", function () {
  const e = waitForAnyPartialimportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPartialimport(k, ANY), function () {
    verifyPartialimportDoesNotExist(k);
  });
});

bthread("Perclientconfigdescription create verification", function () {
  const e = waitForAnyPerclientconfigdescriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePerclientconfigdescription(k, ANY), function () {
    verifyPerclientconfigdescriptionExists(k);
  });
});

bthread("Perclientconfigdescription update verification", function () {
  const e = waitForAnyPerclientconfigdescriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePerclientconfigdescription(k, ANY), function () {
    verifyPerclientconfigdescriptionUpdated(k);
  });
});

bthread("Perclientconfigdescription delete verification", function () {
  const e = waitForAnyPerclientconfigdescriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPerclientconfigdescription(k, ANY), function () {
    verifyPerclientconfigdescriptionDoesNotExist(k);
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

bthread("Policy create verification", function () {
  const e = waitForAnyPolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePolicy(k, ANY), function () {
    verifyPolicyExists(k);
  });
});

bthread("Policy update verification", function () {
  const e = waitForAnyPolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePolicy(k, ANY), function () {
    verifyPolicyUpdated(k);
  });
});

bthread("Policy delete verification", function () {
  const e = waitForAnyPolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPolicy(k, ANY), function () {
    verifyPolicyDoesNotExist(k);
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

bthread("Protocol create verification", function () {
  const e = waitForAnyProtocolAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProtocol(k, ANY), function () {
    verifyProtocolExists(k);
  });
});

bthread("Protocol update verification", function () {
  const e = waitForAnyProtocolUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProtocol(k, ANY), function () {
    verifyProtocolUpdated(k);
  });
});

bthread("Protocol delete verification", function () {
  const e = waitForAnyProtocolDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProtocol(k, ANY), function () {
    verifyProtocolDoesNotExist(k);
  });
});

bthread("Protocolmapper create verification", function () {
  const e = waitForAnyProtocolmapperAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProtocolmapper(k, ANY), function () {
    verifyProtocolmapperExists(k);
  });
});

bthread("Protocolmapper update verification", function () {
  const e = waitForAnyProtocolmapperUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProtocolmapper(k, ANY), function () {
    verifyProtocolmapperUpdated(k);
  });
});

bthread("Protocolmapper delete verification", function () {
  const e = waitForAnyProtocolmapperDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProtocolmapper(k, ANY), function () {
    verifyProtocolmapperDoesNotExist(k);
  });
});

bthread("Provider create verification", function () {
  const e = waitForAnyProviderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvider(k, ANY), function () {
    verifyProviderExists(k);
  });
});

bthread("Provider update verification", function () {
  const e = waitForAnyProviderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProvider(k, ANY), function () {
    verifyProviderUpdated(k);
  });
});

bthread("Provider delete verification", function () {
  const e = waitForAnyProviderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProvider(k, ANY), function () {
    verifyProviderDoesNotExist(k);
  });
});

bthread("Pushrevocation create verification", function () {
  const e = waitForAnyPushrevocationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushrevocation(k, ANY), function () {
    verifyPushrevocationExists(k);
  });
});

bthread("Pushrevocation update verification", function () {
  const e = waitForAnyPushrevocationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushrevocation(k, ANY), function () {
    verifyPushrevocationUpdated(k);
  });
});

bthread("Pushrevocation delete verification", function () {
  const e = waitForAnyPushrevocationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPushrevocation(k, ANY), function () {
    verifyPushrevocationDoesNotExist(k);
  });
});

bthread("Raisepriority create verification", function () {
  const e = waitForAnyRaisepriorityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRaisepriority(k, ANY), function () {
    verifyRaisepriorityExists(k);
  });
});

bthread("Raisepriority update verification", function () {
  const e = waitForAnyRaisepriorityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRaisepriority(k, ANY), function () {
    verifyRaisepriorityUpdated(k);
  });
});

bthread("Raisepriority delete verification", function () {
  const e = waitForAnyRaisepriorityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRaisepriority(k, ANY), function () {
    verifyRaisepriorityDoesNotExist(k);
  });
});

bthread("Realm create verification", function () {
  const e = waitForAnyRealmAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRealm(k, ANY), function () {
    verifyRealmExists(k);
  });
});

bthread("Realm update verification", function () {
  const e = waitForAnyRealmUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRealm(k, ANY), function () {
    verifyRealmUpdated(k);
  });
});

bthread("Realm delete verification", function () {
  const e = waitForAnyRealmDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRealm(k, ANY), function () {
    verifyRealmDoesNotExist(k);
  });
});

bthread("Registerrequiredaction create verification", function () {
  const e = waitForAnyRegisterrequiredactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegisterrequiredaction(k, ANY), function () {
    verifyRegisterrequiredactionExists(k);
  });
});

bthread("Registerrequiredaction update verification", function () {
  const e = waitForAnyRegisterrequiredactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegisterrequiredaction(k, ANY), function () {
    verifyRegisterrequiredactionUpdated(k);
  });
});

bthread("Registerrequiredaction delete verification", function () {
  const e = waitForAnyRegisterrequiredactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRegisterrequiredaction(k, ANY), function () {
    verifyRegisterrequiredactionDoesNotExist(k);
  });
});

bthread("Registrationaccesstoken create verification", function () {
  const e = waitForAnyRegistrationaccesstokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegistrationaccesstoken(k, ANY), function () {
    verifyRegistrationaccesstokenExists(k);
  });
});

bthread("Registrationaccesstoken update verification", function () {
  const e = waitForAnyRegistrationaccesstokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegistrationaccesstoken(k, ANY), function () {
    verifyRegistrationaccesstokenUpdated(k);
  });
});

bthread("Registrationaccesstoken delete verification", function () {
  const e = waitForAnyRegistrationaccesstokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRegistrationaccesstoken(k, ANY), function () {
    verifyRegistrationaccesstokenDoesNotExist(k);
  });
});

bthread("Requiredaction create verification", function () {
  const e = waitForAnyRequiredactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredaction(k, ANY), function () {
    verifyRequiredactionExists(k);
  });
});

bthread("Requiredaction update verification", function () {
  const e = waitForAnyRequiredactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredaction(k, ANY), function () {
    verifyRequiredactionUpdated(k);
  });
});

bthread("Requiredaction delete verification", function () {
  const e = waitForAnyRequiredactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequiredaction(k, ANY), function () {
    verifyRequiredactionDoesNotExist(k);
  });
});

bthread("Resetpassword create verification", function () {
  const e = waitForAnyResetpasswordAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResetpassword(k, ANY), function () {
    verifyResetpasswordExists(k);
  });
});

bthread("Resetpassword update verification", function () {
  const e = waitForAnyResetpasswordUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResetpassword(k, ANY), function () {
    verifyResetpasswordUpdated(k);
  });
});

bthread("Resetpassword delete verification", function () {
  const e = waitForAnyResetpasswordDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddResetpassword(k, ANY), function () {
    verifyResetpasswordDoesNotExist(k);
  });
});

bthread("Resetpasswordemail create verification", function () {
  const e = waitForAnyResetpasswordemailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResetpasswordemail(k, ANY), function () {
    verifyResetpasswordemailExists(k);
  });
});

bthread("Resetpasswordemail update verification", function () {
  const e = waitForAnyResetpasswordemailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResetpasswordemail(k, ANY), function () {
    verifyResetpasswordemailUpdated(k);
  });
});

bthread("Resetpasswordemail delete verification", function () {
  const e = waitForAnyResetpasswordemailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddResetpasswordemail(k, ANY), function () {
    verifyResetpasswordemailDoesNotExist(k);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRole(k, ANY), function () {
    verifyRoleExists(k);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRole(k, ANY), function () {
    verifyRoleUpdated(k);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRole(k, ANY), function () {
    verifyRoleDoesNotExist(k);
  });
});

bthread("Rolemapping create verification", function () {
  const e = waitForAnyRolemappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRolemapping(k, ANY), function () {
    verifyRolemappingExists(k);
  });
});

bthread("Rolemapping update verification", function () {
  const e = waitForAnyRolemappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRolemapping(k, ANY), function () {
    verifyRolemappingUpdated(k);
  });
});

bthread("Rolemapping delete verification", function () {
  const e = waitForAnyRolemappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRolemapping(k, ANY), function () {
    verifyRolemappingDoesNotExist(k);
  });
});

bthread("Rolesbyid create verification", function () {
  const e = waitForAnyRolesbyidAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRolesbyid(k, ANY), function () {
    verifyRolesbyidExists(k);
  });
});

bthread("Rolesbyid update verification", function () {
  const e = waitForAnyRolesbyidUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRolesbyid(k, ANY), function () {
    verifyRolesbyidUpdated(k);
  });
});

bthread("Rolesbyid delete verification", function () {
  const e = waitForAnyRolesbyidDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRolesbyid(k, ANY), function () {
    verifyRolesbyidDoesNotExist(k);
  });
});

bthread("Rotated create verification", function () {
  const e = waitForAnyRotatedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRotated(k, ANY), function () {
    verifyRotatedExists(k);
  });
});

bthread("Rotated update verification", function () {
  const e = waitForAnyRotatedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRotated(k, ANY), function () {
    verifyRotatedUpdated(k);
  });
});

bthread("Rotated delete verification", function () {
  const e = waitForAnyRotatedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRotated(k, ANY), function () {
    verifyRotatedDoesNotExist(k);
  });
});

bthread("Scopemapping create verification", function () {
  const e = waitForAnyScopemappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScopemapping(k, ANY), function () {
    verifyScopemappingExists(k);
  });
});

bthread("Scopemapping update verification", function () {
  const e = waitForAnyScopemappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScopemapping(k, ANY), function () {
    verifyScopemappingUpdated(k);
  });
});

bthread("Scopemapping delete verification", function () {
  const e = waitForAnyScopemappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScopemapping(k, ANY), function () {
    verifyScopemappingDoesNotExist(k);
  });
});

bthread("Sendverifyemail create verification", function () {
  const e = waitForAnySendverifyemailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSendverifyemail(k, ANY), function () {
    verifySendverifyemailExists(k);
  });
});

bthread("Sendverifyemail update verification", function () {
  const e = waitForAnySendverifyemailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSendverifyemail(k, ANY), function () {
    verifySendverifyemailUpdated(k);
  });
});

bthread("Sendverifyemail delete verification", function () {
  const e = waitForAnySendverifyemailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSendverifyemail(k, ANY), function () {
    verifySendverifyemailDoesNotExist(k);
  });
});

bthread("Serviceaccountuser create verification", function () {
  const e = waitForAnyServiceaccountuserAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServiceaccountuser(k, ANY), function () {
    verifyServiceaccountuserExists(k);
  });
});

bthread("Serviceaccountuser update verification", function () {
  const e = waitForAnyServiceaccountuserUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServiceaccountuser(k, ANY), function () {
    verifyServiceaccountuserUpdated(k);
  });
});

bthread("Serviceaccountuser delete verification", function () {
  const e = waitForAnyServiceaccountuserDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddServiceaccountuser(k, ANY), function () {
    verifyServiceaccountuserDoesNotExist(k);
  });
});

bthread("Session create verification", function () {
  const e = waitForAnySessionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSession(k, ANY), function () {
    verifySessionExists(k);
  });
});

bthread("Session update verification", function () {
  const e = waitForAnySessionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSession(k, ANY), function () {
    verifySessionUpdated(k);
  });
});

bthread("Session delete verification", function () {
  const e = waitForAnySessionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSession(k, ANY), function () {
    verifySessionDoesNotExist(k);
  });
});

bthread("Sessioncount create verification", function () {
  const e = waitForAnySessioncountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSessioncount(k, ANY), function () {
    verifySessioncountExists(k);
  });
});

bthread("Sessioncount update verification", function () {
  const e = waitForAnySessioncountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSessioncount(k, ANY), function () {
    verifySessioncountUpdated(k);
  });
});

bthread("Sessioncount delete verification", function () {
  const e = waitForAnySessioncountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSessioncount(k, ANY), function () {
    verifySessioncountDoesNotExist(k);
  });
});

bthread("Subcomponenttype create verification", function () {
  const e = waitForAnySubcomponenttypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubcomponenttype(k, ANY), function () {
    verifySubcomponenttypeExists(k);
  });
});

bthread("Subcomponenttype update verification", function () {
  const e = waitForAnySubcomponenttypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubcomponenttype(k, ANY), function () {
    verifySubcomponenttypeUpdated(k);
  });
});

bthread("Subcomponenttype delete verification", function () {
  const e = waitForAnySubcomponenttypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubcomponenttype(k, ANY), function () {
    verifySubcomponenttypeDoesNotExist(k);
  });
});

bthread("Testnodesavailable create verification", function () {
  const e = waitForAnyTestnodesavailableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestnodesavailable(k, ANY), function () {
    verifyTestnodesavailableExists(k);
  });
});

bthread("Testnodesavailable update verification", function () {
  const e = waitForAnyTestnodesavailableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestnodesavailable(k, ANY), function () {
    verifyTestnodesavailableUpdated(k);
  });
});

bthread("Testnodesavailable delete verification", function () {
  const e = waitForAnyTestnodesavailableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTestnodesavailable(k, ANY), function () {
    verifyTestnodesavailableDoesNotExist(k);
  });
});

bthread("Testsmtpconnection create verification", function () {
  const e = waitForAnyTestsmtpconnectionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestsmtpconnection(k, ANY), function () {
    verifyTestsmtpconnectionExists(k);
  });
});

bthread("Testsmtpconnection update verification", function () {
  const e = waitForAnyTestsmtpconnectionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestsmtpconnection(k, ANY), function () {
    verifyTestsmtpconnectionUpdated(k);
  });
});

bthread("Testsmtpconnection delete verification", function () {
  const e = waitForAnyTestsmtpconnectionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTestsmtpconnection(k, ANY), function () {
    verifyTestsmtpconnectionDoesNotExist(k);
  });
});

bthread("Unregisteredrequiredaction create verification", function () {
  const e = waitForAnyUnregisteredrequiredactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnregisteredrequiredaction(k, ANY), function () {
    verifyUnregisteredrequiredactionExists(k);
  });
});

bthread("Unregisteredrequiredaction update verification", function () {
  const e = waitForAnyUnregisteredrequiredactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnregisteredrequiredaction(k, ANY), function () {
    verifyUnregisteredrequiredactionUpdated(k);
  });
});

bthread("Unregisteredrequiredaction delete verification", function () {
  const e = waitForAnyUnregisteredrequiredactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUnregisteredrequiredaction(k, ANY), function () {
    verifyUnregisteredrequiredactionDoesNotExist(k);
  });
});

bthread("Upload create verification", function () {
  const e = waitForAnyUploadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpload(k, ANY), function () {
    verifyUploadExists(k);
  });
});

bthread("Upload update verification", function () {
  const e = waitForAnyUploadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpload(k, ANY), function () {
    verifyUploadUpdated(k);
  });
});

bthread("Upload delete verification", function () {
  const e = waitForAnyUploadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUpload(k, ANY), function () {
    verifyUploadDoesNotExist(k);
  });
});

bthread("Uploadcertificate create verification", function () {
  const e = waitForAnyUploadcertificateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUploadcertificate(k, ANY), function () {
    verifyUploadcertificateExists(k);
  });
});

bthread("Uploadcertificate update verification", function () {
  const e = waitForAnyUploadcertificateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUploadcertificate(k, ANY), function () {
    verifyUploadcertificateUpdated(k);
  });
});

bthread("Uploadcertificate delete verification", function () {
  const e = waitForAnyUploadcertificateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUploadcertificate(k, ANY), function () {
    verifyUploadcertificateDoesNotExist(k);
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

bthread("Userlabel create verification", function () {
  const e = waitForAnyUserlabelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserlabel(k, ANY), function () {
    verifyUserlabelExists(k);
  });
});

bthread("Userlabel update verification", function () {
  const e = waitForAnyUserlabelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserlabel(k, ANY), function () {
    verifyUserlabelUpdated(k);
  });
});

bthread("Userlabel delete verification", function () {
  const e = waitForAnyUserlabelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserlabel(k, ANY), function () {
    verifyUserlabelDoesNotExist(k);
  });
});

bthread("Usersession create verification", function () {
  const e = waitForAnyUsersessionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsersession(k, ANY), function () {
    verifyUsersessionExists(k);
  });
});

bthread("Usersession update verification", function () {
  const e = waitForAnyUsersessionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsersession(k, ANY), function () {
    verifyUsersessionUpdated(k);
  });
});

bthread("Usersession delete verification", function () {
  const e = waitForAnyUsersessionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsersession(k, ANY), function () {
    verifyUsersessionDoesNotExist(k);
  });
});

bthread("Usersmanagementpermission create verification", function () {
  const e = waitForAnyUsersmanagementpermissionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsersmanagementpermission(k, ANY), function () {
    verifyUsersmanagementpermissionExists(k);
  });
});

bthread("Usersmanagementpermission update verification", function () {
  const e = waitForAnyUsersmanagementpermissionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsersmanagementpermission(k, ANY), function () {
    verifyUsersmanagementpermissionUpdated(k);
  });
});

bthread("Usersmanagementpermission delete verification", function () {
  const e = waitForAnyUsersmanagementpermissionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsersmanagementpermission(k, ANY), function () {
    verifyUsersmanagementpermissionDoesNotExist(k);
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
