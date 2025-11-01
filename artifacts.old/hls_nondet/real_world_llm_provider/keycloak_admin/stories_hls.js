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

// ===== NONDET VARIANTS =====

bthread("Addmodel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAddmodel(a.id);
  block(matchAddAddmodel(a.id, ANY), function () {});
  addAddmodel(b.id);
});

bthread("Adminevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAdminevent(a.id);
  block(matchAddAdminevent(a.id, ANY), function () {});
  addAdminevent(b.id);
});

bthread("Attackdetection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAttackdetection(a.id);
  block(matchAddAttackdetection(a.id, ANY), function () {});
  addAttackdetection(b.id);
});

bthread("Authentication nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthentication(a.id);
  block(matchAddAuthentication(a.id, ANY), function () {});
  addAuthentication(b.id);
});

bthread("Authenticatorprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticatorprovider(a.id);
  block(matchAddAuthenticatorprovider(a.id, ANY), function () {});
  addAuthenticatorprovider(b.id);
});

bthread("Available nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAvailable(a.id);
  block(matchAddAvailable(a.id, ANY), function () {});
  addAvailable(b.id);
});

bthread("Bruteforce nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBruteforce(a.id);
  block(matchAddBruteforce(a.id, ANY), function () {});
  addBruteforce(b.id);
});

bthread("Certificate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCertificate(a.id);
  block(matchAddCertificate(a.id, ANY), function () {});
  addCertificate(b.id);
});

bthread("Children nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChildren(a.id);
  block(matchAddChildren(a.id, ANY), function () {});
  addChildren(b.id);
});

bthread("Client nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClient(a.id);
  block(matchAddClient(a.id, ANY), function () {});
  addClient(b.id);
});

bthread("Clientauthenticatorprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientauthenticatorprovider(a.id);
  block(matchAddClientauthenticatorprovider(a.id, ANY), function () {});
  addClientauthenticatorprovider(b.id);
});

bthread("Clientdescriptionconverter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientdescriptionconverter(a.id);
  block(matchAddClientdescriptionconverter(a.id, ANY), function () {});
  addClientdescriptionconverter(b.id);
});

bthread("Clientpolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientpolicy(a.id);
  block(matchAddClientpolicy(a.id, ANY), function () {});
  addClientpolicy(b.id);
});

bthread("Clientregistrationpolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientregistrationpolicy(a.id);
  block(matchAddClientregistrationpolicy(a.id, ANY), function () {});
  addClientregistrationpolicy(b.id);
});

bthread("Clientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientscope(a.id);
  block(matchAddClientscope(a.id, ANY), function () {});
  addClientscope(b.id);
});

bthread("Clientsecret nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientsecret(a.id);
  block(matchAddClientsecret(a.id, ANY), function () {});
  addClientsecret(b.id);
});

bthread("Clientsessionstat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientsessionstat(a.id);
  block(matchAddClientsessionstat(a.id, ANY), function () {});
  addClientsessionstat(b.id);
});

bthread("Clientsinitialacces nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientsinitialacces(a.id);
  block(matchAddClientsinitialacces(a.id, ANY), function () {});
  addClientsinitialacces(b.id);
});

bthread("Clienttemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClienttemplate(a.id);
  block(matchAddClienttemplate(a.id, ANY), function () {});
  addClienttemplate(b.id);
});

bthread("Component nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addComponent(a.id);
  block(matchAddComponent(a.id, ANY), function () {});
  addComponent(b.id);
});

bthread("Composite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addComposite(a.id);
  block(matchAddComposite(a.id, ANY), function () {});
  addComposite(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConfig(a.id);
  block(matchAddConfig(a.id, ANY), function () {});
  addConfig(b.id);
});

bthread("Configdescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConfigdescription(a.id);
  block(matchAddConfigdescription(a.id, ANY), function () {});
  addConfigdescription(b.id);
});

bthread("Configureduserstoragecredentialtype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConfigureduserstoragecredentialtype(a.id);
  block(matchAddConfigureduserstoragecredentialtype(a.id, ANY), function () {});
  addConfigureduserstoragecredentialtype(b.id);
});

bthread("Consent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConsent(a.id);
  block(matchAddConsent(a.id, ANY), function () {});
  addConsent(b.id);
});

bthread("Copy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCopy(a.id);
  block(matchAddCopy(a.id, ANY), function () {});
  addCopy(b.id);
});

bthread("Count nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCount(a.id);
  block(matchAddCount(a.id, ANY), function () {});
  addCount(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredential(a.id);
  block(matchAddCredential(a.id, ANY), function () {});
  addCredential(b.id);
});

bthread("Credentialregistrator nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentialregistrator(a.id);
  block(matchAddCredentialregistrator(a.id, ANY), function () {});
  addCredentialregistrator(b.id);
});

bthread("Defaultclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDefaultclientscope(a.id);
  block(matchAddDefaultclientscope(a.id, ANY), function () {});
  addDefaultclientscope(b.id);
});

bthread("Defaultdefaultclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDefaultdefaultclientscope(a.id);
  block(matchAddDefaultdefaultclientscope(a.id, ANY), function () {});
  addDefaultdefaultclientscope(b.id);
});

bthread("Defaultgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDefaultgroup(a.id);
  block(matchAddDefaultgroup(a.id, ANY), function () {});
  addDefaultgroup(b.id);
});

bthread("Defaultoptionalclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDefaultoptionalclientscope(a.id);
  block(matchAddDefaultoptionalclientscope(a.id, ANY), function () {});
  addDefaultoptionalclientscope(b.id);
});

bthread("Disablecredentialtype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDisablecredentialtype(a.id);
  block(matchAddDisablecredentialtype(a.id, ANY), function () {});
  addDisablecredentialtype(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDownload(a.id);
  block(matchAddDownload(a.id, ANY), function () {});
  addDownload(b.id);
});

bthread("Evaluatescope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEvaluatescope(a.id);
  block(matchAddEvaluatescope(a.id, ANY), function () {});
  addEvaluatescope(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEvent(a.id);
  block(matchAddEvent(a.id, ANY), function () {});
  addEvent(b.id);
});

bthread("Executeactionsemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addExecuteactionsemail(a.id);
  block(matchAddExecuteactionsemail(a.id, ANY), function () {});
  addExecuteactionsemail(b.id);
});

bthread("Execution nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addExecution(a.id);
  block(matchAddExecution(a.id, ANY), function () {});
  addExecution(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addExport(a.id);
  block(matchAddExport(a.id, ANY), function () {});
  addExport(b.id);
});

bthread("Federatedidentity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFederatedidentity(a.id);
  block(matchAddFederatedidentity(a.id, ANY), function () {});
  addFederatedidentity(b.id);
});

bthread("Flow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFlow(a.id);
  block(matchAddFlow(a.id, ANY), function () {});
  addFlow(b.id);
});

bthread("Formactionprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFormactionprovider(a.id);
  block(matchAddFormactionprovider(a.id, ANY), function () {});
  addFormactionprovider(b.id);
});

bthread("Formprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFormprovider(a.id);
  block(matchAddFormprovider(a.id, ANY), function () {});
  addFormprovider(b.id);
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

bthread("Generateanddownload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGenerateanddownload(a.id);
  block(matchAddGenerateanddownload(a.id, ANY), function () {});
  addGenerateanddownload(b.id);
});

bthread("Generateexampleaccesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGenerateexampleaccesstoken(a.id);
  block(matchAddGenerateexampleaccesstoken(a.id, ANY), function () {});
  addGenerateexampleaccesstoken(b.id);
});

bthread("Generateexampleidtoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGenerateexampleidtoken(a.id);
  block(matchAddGenerateexampleidtoken(a.id, ANY), function () {});
  addGenerateexampleidtoken(b.id);
});

bthread("Generateexampleuserinfo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGenerateexampleuserinfo(a.id);
  block(matchAddGenerateexampleuserinfo(a.id, ANY), function () {});
  addGenerateexampleuserinfo(b.id);
});

bthread("Granted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGranted(a.id);
  block(matchAddGranted(a.id, ANY), function () {});
  addGranted(b.id);
});

bthread("Group nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGroup(a.id);
  block(matchAddGroup(a.id, ANY), function () {});
  addGroup(b.id);
});

bthread("Groupbypath nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGroupbypath(a.id);
  block(matchAddGroupbypath(a.id, ANY), function () {});
  addGroupbypath(b.id);
});

bthread("Identityprovider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIdentityprovider(a.id);
  block(matchAddIdentityprovider(a.id, ANY), function () {});
  addIdentityprovider(b.id);
});

bthread("Impersonation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addImpersonation(a.id);
  block(matchAddImpersonation(a.id, ANY), function () {});
  addImpersonation(b.id);
});

bthread("Importconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addImportconfig(a.id);
  block(matchAddImportconfig(a.id, ANY), function () {});
  addImportconfig(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInstallation(a.id);
  block(matchAddInstallation(a.id, ANY), function () {});
  addInstallation(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInstance(a.id);
  block(matchAddInstance(a.id, ANY), function () {});
  addInstance(b.id);
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

bthread("Localization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLocalization(a.id);
  block(matchAddLocalization(a.id, ANY), function () {});
  addLocalization(b.id);
});

bthread("Logout nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLogout(a.id);
  block(matchAddLogout(a.id, ANY), function () {});
  addLogout(b.id);
});

bthread("Logoutall nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLogoutall(a.id);
  block(matchAddLogoutall(a.id, ANY), function () {});
  addLogoutall(b.id);
});

bthread("Lowerpriority nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLowerpriority(a.id);
  block(matchAddLowerpriority(a.id, ANY), function () {});
  addLowerpriority(b.id);
});

bthread("Management nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addManagement(a.id);
  block(matchAddManagement(a.id, ANY), function () {});
  addManagement(b.id);
});

bthread("Mapper nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMapper(a.id);
  block(matchAddMapper(a.id, ANY), function () {});
  addMapper(b.id);
});

bthread("Mappertype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMappertype(a.id);
  block(matchAddMappertype(a.id, ANY), function () {});
  addMappertype(b.id);
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

bthread("Model nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addModel(a.id);
  block(matchAddModel(a.id, ANY), function () {});
  addModel(b.id);
});

bthread("Moveafter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMoveafter(a.id);
  block(matchAddMoveafter(a.id, ANY), function () {});
  addMoveafter(b.id);
});

bthread("Movetofirst nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMovetofirst(a.id);
  block(matchAddMovetofirst(a.id, ANY), function () {});
  addMovetofirst(b.id);
});

bthread("Node nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNode(a.id);
  block(matchAddNode(a.id, ANY), function () {});
  addNode(b.id);
});

bthread("Notgranted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNotgranted(a.id);
  block(matchAddNotgranted(a.id, ANY), function () {});
  addNotgranted(b.id);
});

bthread("Offlinesession nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOfflinesession(a.id);
  block(matchAddOfflinesession(a.id, ANY), function () {});
  addOfflinesession(b.id);
});

bthread("Offlinesessioncount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOfflinesessioncount(a.id);
  block(matchAddOfflinesessioncount(a.id, ANY), function () {});
  addOfflinesessioncount(b.id);
});

bthread("Optionalclientscope nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOptionalclientscope(a.id);
  block(matchAddOptionalclientscope(a.id, ANY), function () {});
  addOptionalclientscope(b.id);
});

bthread("Partialexport nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPartialexport(a.id);
  block(matchAddPartialexport(a.id, ANY), function () {});
  addPartialexport(b.id);
});

bthread("Partialimport nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPartialimport(a.id);
  block(matchAddPartialimport(a.id, ANY), function () {});
  addPartialimport(b.id);
});

bthread("Perclientconfigdescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPerclientconfigdescription(a.id);
  block(matchAddPerclientconfigdescription(a.id, ANY), function () {});
  addPerclientconfigdescription(b.id);
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

bthread("Policy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPolicy(a.id);
  block(matchAddPolicy(a.id, ANY), function () {});
  addPolicy(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProfile(a.id);
  block(matchAddProfile(a.id, ANY), function () {});
  addProfile(b.id);
});

bthread("Protocol nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProtocol(a.id);
  block(matchAddProtocol(a.id, ANY), function () {});
  addProtocol(b.id);
});

bthread("Protocolmapper nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProtocolmapper(a.id);
  block(matchAddProtocolmapper(a.id, ANY), function () {});
  addProtocolmapper(b.id);
});

bthread("Provider nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProvider(a.id);
  block(matchAddProvider(a.id, ANY), function () {});
  addProvider(b.id);
});

bthread("Pushrevocation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPushrevocation(a.id);
  block(matchAddPushrevocation(a.id, ANY), function () {});
  addPushrevocation(b.id);
});

bthread("Raisepriority nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRaisepriority(a.id);
  block(matchAddRaisepriority(a.id, ANY), function () {});
  addRaisepriority(b.id);
});

bthread("Realm nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealm(a.id);
  block(matchAddRealm(a.id, ANY), function () {});
  addRealm(b.id);
});

bthread("Registerrequiredaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRegisterrequiredaction(a.id);
  block(matchAddRegisterrequiredaction(a.id, ANY), function () {});
  addRegisterrequiredaction(b.id);
});

bthread("Registrationaccesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRegistrationaccesstoken(a.id);
  block(matchAddRegistrationaccesstoken(a.id, ANY), function () {});
  addRegistrationaccesstoken(b.id);
});

bthread("Requiredaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRequiredaction(a.id);
  block(matchAddRequiredaction(a.id, ANY), function () {});
  addRequiredaction(b.id);
});

bthread("Resetpassword nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResetpassword(a.id);
  block(matchAddResetpassword(a.id, ANY), function () {});
  addResetpassword(b.id);
});

bthread("Resetpasswordemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResetpasswordemail(a.id);
  block(matchAddResetpasswordemail(a.id, ANY), function () {});
  addResetpasswordemail(b.id);
});

bthread("Role nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRole(a.id);
  block(matchAddRole(a.id, ANY), function () {});
  addRole(b.id);
});

bthread("Rolemapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRolemapping(a.id);
  block(matchAddRolemapping(a.id, ANY), function () {});
  addRolemapping(b.id);
});

bthread("Rolesbyid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRolesbyid(a.id);
  block(matchAddRolesbyid(a.id, ANY), function () {});
  addRolesbyid(b.id);
});

bthread("Rotated nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRotated(a.id);
  block(matchAddRotated(a.id, ANY), function () {});
  addRotated(b.id);
});

bthread("Scopemapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScopemapping(a.id);
  block(matchAddScopemapping(a.id, ANY), function () {});
  addScopemapping(b.id);
});

bthread("Sendverifyemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSendverifyemail(a.id);
  block(matchAddSendverifyemail(a.id, ANY), function () {});
  addSendverifyemail(b.id);
});

bthread("Serviceaccountuser nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addServiceaccountuser(a.id);
  block(matchAddServiceaccountuser(a.id, ANY), function () {});
  addServiceaccountuser(b.id);
});

bthread("Session nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSession(a.id);
  block(matchAddSession(a.id, ANY), function () {});
  addSession(b.id);
});

bthread("Sessioncount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSessioncount(a.id);
  block(matchAddSessioncount(a.id, ANY), function () {});
  addSessioncount(b.id);
});

bthread("Subcomponenttype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSubcomponenttype(a.id);
  block(matchAddSubcomponenttype(a.id, ANY), function () {});
  addSubcomponenttype(b.id);
});

bthread("Testnodesavailable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTestnodesavailable(a.id);
  block(matchAddTestnodesavailable(a.id, ANY), function () {});
  addTestnodesavailable(b.id);
});

bthread("Testsmtpconnection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTestsmtpconnection(a.id);
  block(matchAddTestsmtpconnection(a.id, ANY), function () {});
  addTestsmtpconnection(b.id);
});

bthread("Unregisteredrequiredaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUnregisteredrequiredaction(a.id);
  block(matchAddUnregisteredrequiredaction(a.id, ANY), function () {});
  addUnregisteredrequiredaction(b.id);
});

bthread("Upload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUpload(a.id);
  block(matchAddUpload(a.id, ANY), function () {});
  addUpload(b.id);
});

bthread("Uploadcertificate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUploadcertificate(a.id);
  block(matchAddUploadcertificate(a.id, ANY), function () {});
  addUploadcertificate(b.id);
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

bthread("Userlabel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserlabel(a.id);
  block(matchAddUserlabel(a.id, ANY), function () {});
  addUserlabel(b.id);
});

bthread("Usersession nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsersession(a.id);
  block(matchAddUsersession(a.id, ANY), function () {});
  addUsersession(b.id);
});

bthread("Usersmanagementpermission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsersmanagementpermission(a.id);
  block(matchAddUsersmanagementpermission(a.id, ANY), function () {});
  addUsersmanagementpermission(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Addmodel create verification", function () {
  const e = waitForAnyAddmodelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddmodel(k), function () {
    verifyAddmodelExists(k);
  });
});

bthread("Addmodel update verification", function () {
  const e = waitForAnyAddmodelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddmodel(k), function () {
    verifyAddmodelUpdated(k);
  });
});

bthread("Addmodel delete verification", function () {
  const e = waitForAnyAddmodelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddmodel(k), function () {
    verifyAddmodelDoesNotExist(k);
  });
});

bthread("Adminevent create verification", function () {
  const e = waitForAnyAdmineventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdminevent(k), function () {
    verifyAdmineventExists(k);
  });
});

bthread("Adminevent update verification", function () {
  const e = waitForAnyAdmineventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdminevent(k), function () {
    verifyAdmineventUpdated(k);
  });
});

bthread("Adminevent delete verification", function () {
  const e = waitForAnyAdmineventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAdminevent(k), function () {
    verifyAdmineventDoesNotExist(k);
  });
});

bthread("Attackdetection create verification", function () {
  const e = waitForAnyAttackdetectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttackdetection(k), function () {
    verifyAttackdetectionExists(k);
  });
});

bthread("Attackdetection update verification", function () {
  const e = waitForAnyAttackdetectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttackdetection(k), function () {
    verifyAttackdetectionUpdated(k);
  });
});

bthread("Attackdetection delete verification", function () {
  const e = waitForAnyAttackdetectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAttackdetection(k), function () {
    verifyAttackdetectionDoesNotExist(k);
  });
});

bthread("Authentication create verification", function () {
  const e = waitForAnyAuthenticationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthentication(k), function () {
    verifyAuthenticationExists(k);
  });
});

bthread("Authentication update verification", function () {
  const e = waitForAnyAuthenticationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthentication(k), function () {
    verifyAuthenticationUpdated(k);
  });
});

bthread("Authentication delete verification", function () {
  const e = waitForAnyAuthenticationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthentication(k), function () {
    verifyAuthenticationDoesNotExist(k);
  });
});

bthread("Authenticatorprovider create verification", function () {
  const e = waitForAnyAuthenticatorproviderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticatorprovider(k), function () {
    verifyAuthenticatorproviderExists(k);
  });
});

bthread("Authenticatorprovider update verification", function () {
  const e = waitForAnyAuthenticatorproviderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticatorprovider(k), function () {
    verifyAuthenticatorproviderUpdated(k);
  });
});

bthread("Authenticatorprovider delete verification", function () {
  const e = waitForAnyAuthenticatorproviderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticatorprovider(k), function () {
    verifyAuthenticatorproviderDoesNotExist(k);
  });
});

bthread("Available create verification", function () {
  const e = waitForAnyAvailableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailable(k), function () {
    verifyAvailableExists(k);
  });
});

bthread("Available update verification", function () {
  const e = waitForAnyAvailableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailable(k), function () {
    verifyAvailableUpdated(k);
  });
});

bthread("Available delete verification", function () {
  const e = waitForAnyAvailableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvailable(k), function () {
    verifyAvailableDoesNotExist(k);
  });
});

bthread("Bruteforce create verification", function () {
  const e = waitForAnyBruteforceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBruteforce(k), function () {
    verifyBruteforceExists(k);
  });
});

bthread("Bruteforce update verification", function () {
  const e = waitForAnyBruteforceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBruteforce(k), function () {
    verifyBruteforceUpdated(k);
  });
});

bthread("Bruteforce delete verification", function () {
  const e = waitForAnyBruteforceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBruteforce(k), function () {
    verifyBruteforceDoesNotExist(k);
  });
});

bthread("Certificate create verification", function () {
  const e = waitForAnyCertificateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCertificate(k), function () {
    verifyCertificateExists(k);
  });
});

bthread("Certificate update verification", function () {
  const e = waitForAnyCertificateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCertificate(k), function () {
    verifyCertificateUpdated(k);
  });
});

bthread("Certificate delete verification", function () {
  const e = waitForAnyCertificateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCertificate(k), function () {
    verifyCertificateDoesNotExist(k);
  });
});

bthread("Children create verification", function () {
  const e = waitForAnyChildrenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChildren(k), function () {
    verifyChildrenExists(k);
  });
});

bthread("Children update verification", function () {
  const e = waitForAnyChildrenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChildren(k), function () {
    verifyChildrenUpdated(k);
  });
});

bthread("Children delete verification", function () {
  const e = waitForAnyChildrenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChildren(k), function () {
    verifyChildrenDoesNotExist(k);
  });
});

bthread("Client create verification", function () {
  const e = waitForAnyClientAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClient(k), function () {
    verifyClientExists(k);
  });
});

bthread("Client update verification", function () {
  const e = waitForAnyClientUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClient(k), function () {
    verifyClientUpdated(k);
  });
});

bthread("Client delete verification", function () {
  const e = waitForAnyClientDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClient(k), function () {
    verifyClientDoesNotExist(k);
  });
});

bthread("Clientauthenticatorprovider create verification", function () {
  const e = waitForAnyClientauthenticatorproviderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientauthenticatorprovider(k), function () {
    verifyClientauthenticatorproviderExists(k);
  });
});

bthread("Clientauthenticatorprovider update verification", function () {
  const e = waitForAnyClientauthenticatorproviderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientauthenticatorprovider(k), function () {
    verifyClientauthenticatorproviderUpdated(k);
  });
});

bthread("Clientauthenticatorprovider delete verification", function () {
  const e = waitForAnyClientauthenticatorproviderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientauthenticatorprovider(k), function () {
    verifyClientauthenticatorproviderDoesNotExist(k);
  });
});

bthread("Clientdescriptionconverter create verification", function () {
  const e = waitForAnyClientdescriptionconverterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientdescriptionconverter(k), function () {
    verifyClientdescriptionconverterExists(k);
  });
});

bthread("Clientdescriptionconverter update verification", function () {
  const e = waitForAnyClientdescriptionconverterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientdescriptionconverter(k), function () {
    verifyClientdescriptionconverterUpdated(k);
  });
});

bthread("Clientdescriptionconverter delete verification", function () {
  const e = waitForAnyClientdescriptionconverterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientdescriptionconverter(k), function () {
    verifyClientdescriptionconverterDoesNotExist(k);
  });
});

bthread("Clientpolicy create verification", function () {
  const e = waitForAnyClientpolicyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicy(k), function () {
    verifyClientpolicyExists(k);
  });
});

bthread("Clientpolicy update verification", function () {
  const e = waitForAnyClientpolicyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicy(k), function () {
    verifyClientpolicyUpdated(k);
  });
});

bthread("Clientpolicy delete verification", function () {
  const e = waitForAnyClientpolicyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientpolicy(k), function () {
    verifyClientpolicyDoesNotExist(k);
  });
});

bthread("Clientregistrationpolicy create verification", function () {
  const e = waitForAnyClientregistrationpolicyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientregistrationpolicy(k), function () {
    verifyClientregistrationpolicyExists(k);
  });
});

bthread("Clientregistrationpolicy update verification", function () {
  const e = waitForAnyClientregistrationpolicyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientregistrationpolicy(k), function () {
    verifyClientregistrationpolicyUpdated(k);
  });
});

bthread("Clientregistrationpolicy delete verification", function () {
  const e = waitForAnyClientregistrationpolicyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientregistrationpolicy(k), function () {
    verifyClientregistrationpolicyDoesNotExist(k);
  });
});

bthread("Clientscope create verification", function () {
  const e = waitForAnyClientscopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientscope(k), function () {
    verifyClientscopeExists(k);
  });
});

bthread("Clientscope update verification", function () {
  const e = waitForAnyClientscopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientscope(k), function () {
    verifyClientscopeUpdated(k);
  });
});

bthread("Clientscope delete verification", function () {
  const e = waitForAnyClientscopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientscope(k), function () {
    verifyClientscopeDoesNotExist(k);
  });
});

bthread("Clientsecret create verification", function () {
  const e = waitForAnyClientsecretAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientsecret(k), function () {
    verifyClientsecretExists(k);
  });
});

bthread("Clientsecret update verification", function () {
  const e = waitForAnyClientsecretUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientsecret(k), function () {
    verifyClientsecretUpdated(k);
  });
});

bthread("Clientsecret delete verification", function () {
  const e = waitForAnyClientsecretDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientsecret(k), function () {
    verifyClientsecretDoesNotExist(k);
  });
});

bthread("Clientsessionstat create verification", function () {
  const e = waitForAnyClientsessionstatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientsessionstat(k), function () {
    verifyClientsessionstatExists(k);
  });
});

bthread("Clientsessionstat update verification", function () {
  const e = waitForAnyClientsessionstatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientsessionstat(k), function () {
    verifyClientsessionstatUpdated(k);
  });
});

bthread("Clientsessionstat delete verification", function () {
  const e = waitForAnyClientsessionstatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientsessionstat(k), function () {
    verifyClientsessionstatDoesNotExist(k);
  });
});

bthread("Clientsinitialacces create verification", function () {
  const e = waitForAnyClientsinitialaccesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientsinitialacces(k), function () {
    verifyClientsinitialaccesExists(k);
  });
});

bthread("Clientsinitialacces update verification", function () {
  const e = waitForAnyClientsinitialaccesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientsinitialacces(k), function () {
    verifyClientsinitialaccesUpdated(k);
  });
});

bthread("Clientsinitialacces delete verification", function () {
  const e = waitForAnyClientsinitialaccesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientsinitialacces(k), function () {
    verifyClientsinitialaccesDoesNotExist(k);
  });
});

bthread("Clienttemplate create verification", function () {
  const e = waitForAnyClienttemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClienttemplate(k), function () {
    verifyClienttemplateExists(k);
  });
});

bthread("Clienttemplate update verification", function () {
  const e = waitForAnyClienttemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClienttemplate(k), function () {
    verifyClienttemplateUpdated(k);
  });
});

bthread("Clienttemplate delete verification", function () {
  const e = waitForAnyClienttemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClienttemplate(k), function () {
    verifyClienttemplateDoesNotExist(k);
  });
});

bthread("Component create verification", function () {
  const e = waitForAnyComponentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComponent(k), function () {
    verifyComponentExists(k);
  });
});

bthread("Component update verification", function () {
  const e = waitForAnyComponentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComponent(k), function () {
    verifyComponentUpdated(k);
  });
});

bthread("Component delete verification", function () {
  const e = waitForAnyComponentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComponent(k), function () {
    verifyComponentDoesNotExist(k);
  });
});

bthread("Composite create verification", function () {
  const e = waitForAnyCompositeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComposite(k), function () {
    verifyCompositeExists(k);
  });
});

bthread("Composite update verification", function () {
  const e = waitForAnyCompositeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComposite(k), function () {
    verifyCompositeUpdated(k);
  });
});

bthread("Composite delete verification", function () {
  const e = waitForAnyCompositeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComposite(k), function () {
    verifyCompositeDoesNotExist(k);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfig(k), function () {
    verifyConfigExists(k);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfig(k), function () {
    verifyConfigUpdated(k);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfig(k), function () {
    verifyConfigDoesNotExist(k);
  });
});

bthread("Configdescription create verification", function () {
  const e = waitForAnyConfigdescriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfigdescription(k), function () {
    verifyConfigdescriptionExists(k);
  });
});

bthread("Configdescription update verification", function () {
  const e = waitForAnyConfigdescriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfigdescription(k), function () {
    verifyConfigdescriptionUpdated(k);
  });
});

bthread("Configdescription delete verification", function () {
  const e = waitForAnyConfigdescriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfigdescription(k), function () {
    verifyConfigdescriptionDoesNotExist(k);
  });
});

bthread("Configureduserstoragecredentialtype create verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfigureduserstoragecredentialtype(k), function () {
    verifyConfigureduserstoragecredentialtypeExists(k);
  });
});

bthread("Configureduserstoragecredentialtype update verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfigureduserstoragecredentialtype(k), function () {
    verifyConfigureduserstoragecredentialtypeUpdated(k);
  });
});

bthread("Configureduserstoragecredentialtype delete verification", function () {
  const e = waitForAnyConfigureduserstoragecredentialtypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfigureduserstoragecredentialtype(k), function () {
    verifyConfigureduserstoragecredentialtypeDoesNotExist(k);
  });
});

bthread("Consent create verification", function () {
  const e = waitForAnyConsentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConsent(k), function () {
    verifyConsentExists(k);
  });
});

bthread("Consent update verification", function () {
  const e = waitForAnyConsentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConsent(k), function () {
    verifyConsentUpdated(k);
  });
});

bthread("Consent delete verification", function () {
  const e = waitForAnyConsentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConsent(k), function () {
    verifyConsentDoesNotExist(k);
  });
});

bthread("Copy create verification", function () {
  const e = waitForAnyCopyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCopy(k), function () {
    verifyCopyExists(k);
  });
});

bthread("Copy update verification", function () {
  const e = waitForAnyCopyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCopy(k), function () {
    verifyCopyUpdated(k);
  });
});

bthread("Copy delete verification", function () {
  const e = waitForAnyCopyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCopy(k), function () {
    verifyCopyDoesNotExist(k);
  });
});

bthread("Count create verification", function () {
  const e = waitForAnyCountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCount(k), function () {
    verifyCountExists(k);
  });
});

bthread("Count update verification", function () {
  const e = waitForAnyCountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCount(k), function () {
    verifyCountUpdated(k);
  });
});

bthread("Count delete verification", function () {
  const e = waitForAnyCountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCount(k), function () {
    verifyCountDoesNotExist(k);
  });
});

bthread("Credential create verification", function () {
  const e = waitForAnyCredentialAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredential(k), function () {
    verifyCredentialExists(k);
  });
});

bthread("Credential update verification", function () {
  const e = waitForAnyCredentialUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredential(k), function () {
    verifyCredentialUpdated(k);
  });
});

bthread("Credential delete verification", function () {
  const e = waitForAnyCredentialDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredential(k), function () {
    verifyCredentialDoesNotExist(k);
  });
});

bthread("Credentialregistrator create verification", function () {
  const e = waitForAnyCredentialregistratorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentialregistrator(k), function () {
    verifyCredentialregistratorExists(k);
  });
});

bthread("Credentialregistrator update verification", function () {
  const e = waitForAnyCredentialregistratorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentialregistrator(k), function () {
    verifyCredentialregistratorUpdated(k);
  });
});

bthread("Credentialregistrator delete verification", function () {
  const e = waitForAnyCredentialregistratorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentialregistrator(k), function () {
    verifyCredentialregistratorDoesNotExist(k);
  });
});

bthread("Defaultclientscope create verification", function () {
  const e = waitForAnyDefaultclientscopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultclientscope(k), function () {
    verifyDefaultclientscopeExists(k);
  });
});

bthread("Defaultclientscope update verification", function () {
  const e = waitForAnyDefaultclientscopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultclientscope(k), function () {
    verifyDefaultclientscopeUpdated(k);
  });
});

bthread("Defaultclientscope delete verification", function () {
  const e = waitForAnyDefaultclientscopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultclientscope(k), function () {
    verifyDefaultclientscopeDoesNotExist(k);
  });
});

bthread("Defaultdefaultclientscope create verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultdefaultclientscope(k), function () {
    verifyDefaultdefaultclientscopeExists(k);
  });
});

bthread("Defaultdefaultclientscope update verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultdefaultclientscope(k), function () {
    verifyDefaultdefaultclientscopeUpdated(k);
  });
});

bthread("Defaultdefaultclientscope delete verification", function () {
  const e = waitForAnyDefaultdefaultclientscopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultdefaultclientscope(k), function () {
    verifyDefaultdefaultclientscopeDoesNotExist(k);
  });
});

bthread("Defaultgroup create verification", function () {
  const e = waitForAnyDefaultgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultgroup(k), function () {
    verifyDefaultgroupExists(k);
  });
});

bthread("Defaultgroup update verification", function () {
  const e = waitForAnyDefaultgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultgroup(k), function () {
    verifyDefaultgroupUpdated(k);
  });
});

bthread("Defaultgroup delete verification", function () {
  const e = waitForAnyDefaultgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultgroup(k), function () {
    verifyDefaultgroupDoesNotExist(k);
  });
});

bthread("Defaultoptionalclientscope create verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultoptionalclientscope(k), function () {
    verifyDefaultoptionalclientscopeExists(k);
  });
});

bthread("Defaultoptionalclientscope update verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultoptionalclientscope(k), function () {
    verifyDefaultoptionalclientscopeUpdated(k);
  });
});

bthread("Defaultoptionalclientscope delete verification", function () {
  const e = waitForAnyDefaultoptionalclientscopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultoptionalclientscope(k), function () {
    verifyDefaultoptionalclientscopeDoesNotExist(k);
  });
});

bthread("Disablecredentialtype create verification", function () {
  const e = waitForAnyDisablecredentialtypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisablecredentialtype(k), function () {
    verifyDisablecredentialtypeExists(k);
  });
});

bthread("Disablecredentialtype update verification", function () {
  const e = waitForAnyDisablecredentialtypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisablecredentialtype(k), function () {
    verifyDisablecredentialtypeUpdated(k);
  });
});

bthread("Disablecredentialtype delete verification", function () {
  const e = waitForAnyDisablecredentialtypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDisablecredentialtype(k), function () {
    verifyDisablecredentialtypeDoesNotExist(k);
  });
});

bthread("Download create verification", function () {
  const e = waitForAnyDownloadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDownload(k), function () {
    verifyDownloadExists(k);
  });
});

bthread("Download update verification", function () {
  const e = waitForAnyDownloadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDownload(k), function () {
    verifyDownloadUpdated(k);
  });
});

bthread("Download delete verification", function () {
  const e = waitForAnyDownloadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDownload(k), function () {
    verifyDownloadDoesNotExist(k);
  });
});

bthread("Evaluatescope create verification", function () {
  const e = waitForAnyEvaluatescopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvaluatescope(k), function () {
    verifyEvaluatescopeExists(k);
  });
});

bthread("Evaluatescope update verification", function () {
  const e = waitForAnyEvaluatescopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvaluatescope(k), function () {
    verifyEvaluatescopeUpdated(k);
  });
});

bthread("Evaluatescope delete verification", function () {
  const e = waitForAnyEvaluatescopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEvaluatescope(k), function () {
    verifyEvaluatescopeDoesNotExist(k);
  });
});

bthread("Event create verification", function () {
  const e = waitForAnyEventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvent(k), function () {
    verifyEventExists(k);
  });
});

bthread("Event update verification", function () {
  const e = waitForAnyEventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvent(k), function () {
    verifyEventUpdated(k);
  });
});

bthread("Event delete verification", function () {
  const e = waitForAnyEventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEvent(k), function () {
    verifyEventDoesNotExist(k);
  });
});

bthread("Executeactionsemail create verification", function () {
  const e = waitForAnyExecuteactionsemailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExecuteactionsemail(k), function () {
    verifyExecuteactionsemailExists(k);
  });
});

bthread("Executeactionsemail update verification", function () {
  const e = waitForAnyExecuteactionsemailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExecuteactionsemail(k), function () {
    verifyExecuteactionsemailUpdated(k);
  });
});

bthread("Executeactionsemail delete verification", function () {
  const e = waitForAnyExecuteactionsemailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExecuteactionsemail(k), function () {
    verifyExecuteactionsemailDoesNotExist(k);
  });
});

bthread("Execution create verification", function () {
  const e = waitForAnyExecutionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExecution(k), function () {
    verifyExecutionExists(k);
  });
});

bthread("Execution update verification", function () {
  const e = waitForAnyExecutionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExecution(k), function () {
    verifyExecutionUpdated(k);
  });
});

bthread("Execution delete verification", function () {
  const e = waitForAnyExecutionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExecution(k), function () {
    verifyExecutionDoesNotExist(k);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExport(k), function () {
    verifyExportExists(k);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExport(k), function () {
    verifyExportUpdated(k);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExport(k), function () {
    verifyExportDoesNotExist(k);
  });
});

bthread("Federatedidentity create verification", function () {
  const e = waitForAnyFederatedidentityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFederatedidentity(k), function () {
    verifyFederatedidentityExists(k);
  });
});

bthread("Federatedidentity update verification", function () {
  const e = waitForAnyFederatedidentityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFederatedidentity(k), function () {
    verifyFederatedidentityUpdated(k);
  });
});

bthread("Federatedidentity delete verification", function () {
  const e = waitForAnyFederatedidentityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFederatedidentity(k), function () {
    verifyFederatedidentityDoesNotExist(k);
  });
});

bthread("Flow create verification", function () {
  const e = waitForAnyFlowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlow(k), function () {
    verifyFlowExists(k);
  });
});

bthread("Flow update verification", function () {
  const e = waitForAnyFlowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlow(k), function () {
    verifyFlowUpdated(k);
  });
});

bthread("Flow delete verification", function () {
  const e = waitForAnyFlowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFlow(k), function () {
    verifyFlowDoesNotExist(k);
  });
});

bthread("Formactionprovider create verification", function () {
  const e = waitForAnyFormactionproviderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFormactionprovider(k), function () {
    verifyFormactionproviderExists(k);
  });
});

bthread("Formactionprovider update verification", function () {
  const e = waitForAnyFormactionproviderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFormactionprovider(k), function () {
    verifyFormactionproviderUpdated(k);
  });
});

bthread("Formactionprovider delete verification", function () {
  const e = waitForAnyFormactionproviderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFormactionprovider(k), function () {
    verifyFormactionproviderDoesNotExist(k);
  });
});

bthread("Formprovider create verification", function () {
  const e = waitForAnyFormproviderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFormprovider(k), function () {
    verifyFormproviderExists(k);
  });
});

bthread("Formprovider update verification", function () {
  const e = waitForAnyFormproviderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFormprovider(k), function () {
    verifyFormproviderUpdated(k);
  });
});

bthread("Formprovider delete verification", function () {
  const e = waitForAnyFormproviderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFormprovider(k), function () {
    verifyFormproviderDoesNotExist(k);
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

bthread("Generateanddownload create verification", function () {
  const e = waitForAnyGenerateanddownloadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateanddownload(k), function () {
    verifyGenerateanddownloadExists(k);
  });
});

bthread("Generateanddownload update verification", function () {
  const e = waitForAnyGenerateanddownloadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateanddownload(k), function () {
    verifyGenerateanddownloadUpdated(k);
  });
});

bthread("Generateanddownload delete verification", function () {
  const e = waitForAnyGenerateanddownloadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGenerateanddownload(k), function () {
    verifyGenerateanddownloadDoesNotExist(k);
  });
});

bthread("Generateexampleaccesstoken create verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateexampleaccesstoken(k), function () {
    verifyGenerateexampleaccesstokenExists(k);
  });
});

bthread("Generateexampleaccesstoken update verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateexampleaccesstoken(k), function () {
    verifyGenerateexampleaccesstokenUpdated(k);
  });
});

bthread("Generateexampleaccesstoken delete verification", function () {
  const e = waitForAnyGenerateexampleaccesstokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGenerateexampleaccesstoken(k), function () {
    verifyGenerateexampleaccesstokenDoesNotExist(k);
  });
});

bthread("Generateexampleidtoken create verification", function () {
  const e = waitForAnyGenerateexampleidtokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateexampleidtoken(k), function () {
    verifyGenerateexampleidtokenExists(k);
  });
});

bthread("Generateexampleidtoken update verification", function () {
  const e = waitForAnyGenerateexampleidtokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateexampleidtoken(k), function () {
    verifyGenerateexampleidtokenUpdated(k);
  });
});

bthread("Generateexampleidtoken delete verification", function () {
  const e = waitForAnyGenerateexampleidtokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGenerateexampleidtoken(k), function () {
    verifyGenerateexampleidtokenDoesNotExist(k);
  });
});

bthread("Generateexampleuserinfo create verification", function () {
  const e = waitForAnyGenerateexampleuserinfoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateexampleuserinfo(k), function () {
    verifyGenerateexampleuserinfoExists(k);
  });
});

bthread("Generateexampleuserinfo update verification", function () {
  const e = waitForAnyGenerateexampleuserinfoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerateexampleuserinfo(k), function () {
    verifyGenerateexampleuserinfoUpdated(k);
  });
});

bthread("Generateexampleuserinfo delete verification", function () {
  const e = waitForAnyGenerateexampleuserinfoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGenerateexampleuserinfo(k), function () {
    verifyGenerateexampleuserinfoDoesNotExist(k);
  });
});

bthread("Granted create verification", function () {
  const e = waitForAnyGrantedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGranted(k), function () {
    verifyGrantedExists(k);
  });
});

bthread("Granted update verification", function () {
  const e = waitForAnyGrantedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGranted(k), function () {
    verifyGrantedUpdated(k);
  });
});

bthread("Granted delete verification", function () {
  const e = waitForAnyGrantedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGranted(k), function () {
    verifyGrantedDoesNotExist(k);
  });
});

bthread("Group create verification", function () {
  const e = waitForAnyGroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroup(k), function () {
    verifyGroupExists(k);
  });
});

bthread("Group update verification", function () {
  const e = waitForAnyGroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroup(k), function () {
    verifyGroupUpdated(k);
  });
});

bthread("Group delete verification", function () {
  const e = waitForAnyGroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGroup(k), function () {
    verifyGroupDoesNotExist(k);
  });
});

bthread("Groupbypath create verification", function () {
  const e = waitForAnyGroupbypathAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupbypath(k), function () {
    verifyGroupbypathExists(k);
  });
});

bthread("Groupbypath update verification", function () {
  const e = waitForAnyGroupbypathUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupbypath(k), function () {
    verifyGroupbypathUpdated(k);
  });
});

bthread("Groupbypath delete verification", function () {
  const e = waitForAnyGroupbypathDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGroupbypath(k), function () {
    verifyGroupbypathDoesNotExist(k);
  });
});

bthread("Identityprovider create verification", function () {
  const e = waitForAnyIdentityproviderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityprovider(k), function () {
    verifyIdentityproviderExists(k);
  });
});

bthread("Identityprovider update verification", function () {
  const e = waitForAnyIdentityproviderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityprovider(k), function () {
    verifyIdentityproviderUpdated(k);
  });
});

bthread("Identityprovider delete verification", function () {
  const e = waitForAnyIdentityproviderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIdentityprovider(k), function () {
    verifyIdentityproviderDoesNotExist(k);
  });
});

bthread("Impersonation create verification", function () {
  const e = waitForAnyImpersonationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImpersonation(k), function () {
    verifyImpersonationExists(k);
  });
});

bthread("Impersonation update verification", function () {
  const e = waitForAnyImpersonationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImpersonation(k), function () {
    verifyImpersonationUpdated(k);
  });
});

bthread("Impersonation delete verification", function () {
  const e = waitForAnyImpersonationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddImpersonation(k), function () {
    verifyImpersonationDoesNotExist(k);
  });
});

bthread("Importconfig create verification", function () {
  const e = waitForAnyImportconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImportconfig(k), function () {
    verifyImportconfigExists(k);
  });
});

bthread("Importconfig update verification", function () {
  const e = waitForAnyImportconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImportconfig(k), function () {
    verifyImportconfigUpdated(k);
  });
});

bthread("Importconfig delete verification", function () {
  const e = waitForAnyImportconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddImportconfig(k), function () {
    verifyImportconfigDoesNotExist(k);
  });
});

bthread("Installation create verification", function () {
  const e = waitForAnyInstallationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallation(k), function () {
    verifyInstallationExists(k);
  });
});

bthread("Installation update verification", function () {
  const e = waitForAnyInstallationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallation(k), function () {
    verifyInstallationUpdated(k);
  });
});

bthread("Installation delete verification", function () {
  const e = waitForAnyInstallationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInstallation(k), function () {
    verifyInstallationDoesNotExist(k);
  });
});

bthread("Instance create verification", function () {
  const e = waitForAnyInstanceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstance(k), function () {
    verifyInstanceExists(k);
  });
});

bthread("Instance update verification", function () {
  const e = waitForAnyInstanceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstance(k), function () {
    verifyInstanceUpdated(k);
  });
});

bthread("Instance delete verification", function () {
  const e = waitForAnyInstanceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInstance(k), function () {
    verifyInstanceDoesNotExist(k);
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

bthread("Localization create verification", function () {
  const e = waitForAnyLocalizationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocalization(k), function () {
    verifyLocalizationExists(k);
  });
});

bthread("Localization update verification", function () {
  const e = waitForAnyLocalizationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocalization(k), function () {
    verifyLocalizationUpdated(k);
  });
});

bthread("Localization delete verification", function () {
  const e = waitForAnyLocalizationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLocalization(k), function () {
    verifyLocalizationDoesNotExist(k);
  });
});

bthread("Logout create verification", function () {
  const e = waitForAnyLogoutAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogout(k), function () {
    verifyLogoutExists(k);
  });
});

bthread("Logout update verification", function () {
  const e = waitForAnyLogoutUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogout(k), function () {
    verifyLogoutUpdated(k);
  });
});

bthread("Logout delete verification", function () {
  const e = waitForAnyLogoutDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLogout(k), function () {
    verifyLogoutDoesNotExist(k);
  });
});

bthread("Logoutall create verification", function () {
  const e = waitForAnyLogoutallAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogoutall(k), function () {
    verifyLogoutallExists(k);
  });
});

bthread("Logoutall update verification", function () {
  const e = waitForAnyLogoutallUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogoutall(k), function () {
    verifyLogoutallUpdated(k);
  });
});

bthread("Logoutall delete verification", function () {
  const e = waitForAnyLogoutallDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLogoutall(k), function () {
    verifyLogoutallDoesNotExist(k);
  });
});

bthread("Lowerpriority create verification", function () {
  const e = waitForAnyLowerpriorityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLowerpriority(k), function () {
    verifyLowerpriorityExists(k);
  });
});

bthread("Lowerpriority update verification", function () {
  const e = waitForAnyLowerpriorityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLowerpriority(k), function () {
    verifyLowerpriorityUpdated(k);
  });
});

bthread("Lowerpriority delete verification", function () {
  const e = waitForAnyLowerpriorityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLowerpriority(k), function () {
    verifyLowerpriorityDoesNotExist(k);
  });
});

bthread("Management create verification", function () {
  const e = waitForAnyManagementAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteManagement(k), function () {
    verifyManagementExists(k);
  });
});

bthread("Management update verification", function () {
  const e = waitForAnyManagementUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteManagement(k), function () {
    verifyManagementUpdated(k);
  });
});

bthread("Management delete verification", function () {
  const e = waitForAnyManagementDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddManagement(k), function () {
    verifyManagementDoesNotExist(k);
  });
});

bthread("Mapper create verification", function () {
  const e = waitForAnyMapperAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMapper(k), function () {
    verifyMapperExists(k);
  });
});

bthread("Mapper update verification", function () {
  const e = waitForAnyMapperUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMapper(k), function () {
    verifyMapperUpdated(k);
  });
});

bthread("Mapper delete verification", function () {
  const e = waitForAnyMapperDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMapper(k), function () {
    verifyMapperDoesNotExist(k);
  });
});

bthread("Mappertype create verification", function () {
  const e = waitForAnyMappertypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMappertype(k), function () {
    verifyMappertypeExists(k);
  });
});

bthread("Mappertype update verification", function () {
  const e = waitForAnyMappertypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMappertype(k), function () {
    verifyMappertypeUpdated(k);
  });
});

bthread("Mappertype delete verification", function () {
  const e = waitForAnyMappertypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMappertype(k), function () {
    verifyMappertypeDoesNotExist(k);
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

bthread("Model create verification", function () {
  const e = waitForAnyModelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteModel(k), function () {
    verifyModelExists(k);
  });
});

bthread("Model update verification", function () {
  const e = waitForAnyModelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteModel(k), function () {
    verifyModelUpdated(k);
  });
});

bthread("Model delete verification", function () {
  const e = waitForAnyModelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddModel(k), function () {
    verifyModelDoesNotExist(k);
  });
});

bthread("Moveafter create verification", function () {
  const e = waitForAnyMoveafterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMoveafter(k), function () {
    verifyMoveafterExists(k);
  });
});

bthread("Moveafter update verification", function () {
  const e = waitForAnyMoveafterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMoveafter(k), function () {
    verifyMoveafterUpdated(k);
  });
});

bthread("Moveafter delete verification", function () {
  const e = waitForAnyMoveafterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMoveafter(k), function () {
    verifyMoveafterDoesNotExist(k);
  });
});

bthread("Movetofirst create verification", function () {
  const e = waitForAnyMovetofirstAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMovetofirst(k), function () {
    verifyMovetofirstExists(k);
  });
});

bthread("Movetofirst update verification", function () {
  const e = waitForAnyMovetofirstUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMovetofirst(k), function () {
    verifyMovetofirstUpdated(k);
  });
});

bthread("Movetofirst delete verification", function () {
  const e = waitForAnyMovetofirstDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMovetofirst(k), function () {
    verifyMovetofirstDoesNotExist(k);
  });
});

bthread("Node create verification", function () {
  const e = waitForAnyNodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNode(k), function () {
    verifyNodeExists(k);
  });
});

bthread("Node update verification", function () {
  const e = waitForAnyNodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNode(k), function () {
    verifyNodeUpdated(k);
  });
});

bthread("Node delete verification", function () {
  const e = waitForAnyNodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNode(k), function () {
    verifyNodeDoesNotExist(k);
  });
});

bthread("Notgranted create verification", function () {
  const e = waitForAnyNotgrantedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotgranted(k), function () {
    verifyNotgrantedExists(k);
  });
});

bthread("Notgranted update verification", function () {
  const e = waitForAnyNotgrantedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotgranted(k), function () {
    verifyNotgrantedUpdated(k);
  });
});

bthread("Notgranted delete verification", function () {
  const e = waitForAnyNotgrantedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotgranted(k), function () {
    verifyNotgrantedDoesNotExist(k);
  });
});

bthread("Offlinesession create verification", function () {
  const e = waitForAnyOfflinesessionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOfflinesession(k), function () {
    verifyOfflinesessionExists(k);
  });
});

bthread("Offlinesession update verification", function () {
  const e = waitForAnyOfflinesessionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOfflinesession(k), function () {
    verifyOfflinesessionUpdated(k);
  });
});

bthread("Offlinesession delete verification", function () {
  const e = waitForAnyOfflinesessionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOfflinesession(k), function () {
    verifyOfflinesessionDoesNotExist(k);
  });
});

bthread("Offlinesessioncount create verification", function () {
  const e = waitForAnyOfflinesessioncountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOfflinesessioncount(k), function () {
    verifyOfflinesessioncountExists(k);
  });
});

bthread("Offlinesessioncount update verification", function () {
  const e = waitForAnyOfflinesessioncountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOfflinesessioncount(k), function () {
    verifyOfflinesessioncountUpdated(k);
  });
});

bthread("Offlinesessioncount delete verification", function () {
  const e = waitForAnyOfflinesessioncountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOfflinesessioncount(k), function () {
    verifyOfflinesessioncountDoesNotExist(k);
  });
});

bthread("Optionalclientscope create verification", function () {
  const e = waitForAnyOptionalclientscopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOptionalclientscope(k), function () {
    verifyOptionalclientscopeExists(k);
  });
});

bthread("Optionalclientscope update verification", function () {
  const e = waitForAnyOptionalclientscopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOptionalclientscope(k), function () {
    verifyOptionalclientscopeUpdated(k);
  });
});

bthread("Optionalclientscope delete verification", function () {
  const e = waitForAnyOptionalclientscopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOptionalclientscope(k), function () {
    verifyOptionalclientscopeDoesNotExist(k);
  });
});

bthread("Partialexport create verification", function () {
  const e = waitForAnyPartialexportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePartialexport(k), function () {
    verifyPartialexportExists(k);
  });
});

bthread("Partialexport update verification", function () {
  const e = waitForAnyPartialexportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePartialexport(k), function () {
    verifyPartialexportUpdated(k);
  });
});

bthread("Partialexport delete verification", function () {
  const e = waitForAnyPartialexportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPartialexport(k), function () {
    verifyPartialexportDoesNotExist(k);
  });
});

bthread("Partialimport create verification", function () {
  const e = waitForAnyPartialimportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePartialimport(k), function () {
    verifyPartialimportExists(k);
  });
});

bthread("Partialimport update verification", function () {
  const e = waitForAnyPartialimportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePartialimport(k), function () {
    verifyPartialimportUpdated(k);
  });
});

bthread("Partialimport delete verification", function () {
  const e = waitForAnyPartialimportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPartialimport(k), function () {
    verifyPartialimportDoesNotExist(k);
  });
});

bthread("Perclientconfigdescription create verification", function () {
  const e = waitForAnyPerclientconfigdescriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePerclientconfigdescription(k), function () {
    verifyPerclientconfigdescriptionExists(k);
  });
});

bthread("Perclientconfigdescription update verification", function () {
  const e = waitForAnyPerclientconfigdescriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePerclientconfigdescription(k), function () {
    verifyPerclientconfigdescriptionUpdated(k);
  });
});

bthread("Perclientconfigdescription delete verification", function () {
  const e = waitForAnyPerclientconfigdescriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPerclientconfigdescription(k), function () {
    verifyPerclientconfigdescriptionDoesNotExist(k);
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

bthread("Policy create verification", function () {
  const e = waitForAnyPolicyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicy(k), function () {
    verifyPolicyExists(k);
  });
});

bthread("Policy update verification", function () {
  const e = waitForAnyPolicyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicy(k), function () {
    verifyPolicyUpdated(k);
  });
});

bthread("Policy delete verification", function () {
  const e = waitForAnyPolicyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPolicy(k), function () {
    verifyPolicyDoesNotExist(k);
  });
});

bthread("Profile create verification", function () {
  const e = waitForAnyProfileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfile(k), function () {
    verifyProfileExists(k);
  });
});

bthread("Profile update verification", function () {
  const e = waitForAnyProfileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfile(k), function () {
    verifyProfileUpdated(k);
  });
});

bthread("Profile delete verification", function () {
  const e = waitForAnyProfileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProfile(k), function () {
    verifyProfileDoesNotExist(k);
  });
});

bthread("Protocol create verification", function () {
  const e = waitForAnyProtocolAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtocol(k), function () {
    verifyProtocolExists(k);
  });
});

bthread("Protocol update verification", function () {
  const e = waitForAnyProtocolUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtocol(k), function () {
    verifyProtocolUpdated(k);
  });
});

bthread("Protocol delete verification", function () {
  const e = waitForAnyProtocolDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProtocol(k), function () {
    verifyProtocolDoesNotExist(k);
  });
});

bthread("Protocolmapper create verification", function () {
  const e = waitForAnyProtocolmapperAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtocolmapper(k), function () {
    verifyProtocolmapperExists(k);
  });
});

bthread("Protocolmapper update verification", function () {
  const e = waitForAnyProtocolmapperUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtocolmapper(k), function () {
    verifyProtocolmapperUpdated(k);
  });
});

bthread("Protocolmapper delete verification", function () {
  const e = waitForAnyProtocolmapperDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProtocolmapper(k), function () {
    verifyProtocolmapperDoesNotExist(k);
  });
});

bthread("Provider create verification", function () {
  const e = waitForAnyProviderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProvider(k), function () {
    verifyProviderExists(k);
  });
});

bthread("Provider update verification", function () {
  const e = waitForAnyProviderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProvider(k), function () {
    verifyProviderUpdated(k);
  });
});

bthread("Provider delete verification", function () {
  const e = waitForAnyProviderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProvider(k), function () {
    verifyProviderDoesNotExist(k);
  });
});

bthread("Pushrevocation create verification", function () {
  const e = waitForAnyPushrevocationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushrevocation(k), function () {
    verifyPushrevocationExists(k);
  });
});

bthread("Pushrevocation update verification", function () {
  const e = waitForAnyPushrevocationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushrevocation(k), function () {
    verifyPushrevocationUpdated(k);
  });
});

bthread("Pushrevocation delete verification", function () {
  const e = waitForAnyPushrevocationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPushrevocation(k), function () {
    verifyPushrevocationDoesNotExist(k);
  });
});

bthread("Raisepriority create verification", function () {
  const e = waitForAnyRaisepriorityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRaisepriority(k), function () {
    verifyRaisepriorityExists(k);
  });
});

bthread("Raisepriority update verification", function () {
  const e = waitForAnyRaisepriorityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRaisepriority(k), function () {
    verifyRaisepriorityUpdated(k);
  });
});

bthread("Raisepriority delete verification", function () {
  const e = waitForAnyRaisepriorityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRaisepriority(k), function () {
    verifyRaisepriorityDoesNotExist(k);
  });
});

bthread("Realm create verification", function () {
  const e = waitForAnyRealmAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealm(k), function () {
    verifyRealmExists(k);
  });
});

bthread("Realm update verification", function () {
  const e = waitForAnyRealmUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealm(k), function () {
    verifyRealmUpdated(k);
  });
});

bthread("Realm delete verification", function () {
  const e = waitForAnyRealmDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealm(k), function () {
    verifyRealmDoesNotExist(k);
  });
});

bthread("Registerrequiredaction create verification", function () {
  const e = waitForAnyRegisterrequiredactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegisterrequiredaction(k), function () {
    verifyRegisterrequiredactionExists(k);
  });
});

bthread("Registerrequiredaction update verification", function () {
  const e = waitForAnyRegisterrequiredactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegisterrequiredaction(k), function () {
    verifyRegisterrequiredactionUpdated(k);
  });
});

bthread("Registerrequiredaction delete verification", function () {
  const e = waitForAnyRegisterrequiredactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRegisterrequiredaction(k), function () {
    verifyRegisterrequiredactionDoesNotExist(k);
  });
});

bthread("Registrationaccesstoken create verification", function () {
  const e = waitForAnyRegistrationaccesstokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegistrationaccesstoken(k), function () {
    verifyRegistrationaccesstokenExists(k);
  });
});

bthread("Registrationaccesstoken update verification", function () {
  const e = waitForAnyRegistrationaccesstokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegistrationaccesstoken(k), function () {
    verifyRegistrationaccesstokenUpdated(k);
  });
});

bthread("Registrationaccesstoken delete verification", function () {
  const e = waitForAnyRegistrationaccesstokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRegistrationaccesstoken(k), function () {
    verifyRegistrationaccesstokenDoesNotExist(k);
  });
});

bthread("Requiredaction create verification", function () {
  const e = waitForAnyRequiredactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredaction(k), function () {
    verifyRequiredactionExists(k);
  });
});

bthread("Requiredaction update verification", function () {
  const e = waitForAnyRequiredactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredaction(k), function () {
    verifyRequiredactionUpdated(k);
  });
});

bthread("Requiredaction delete verification", function () {
  const e = waitForAnyRequiredactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequiredaction(k), function () {
    verifyRequiredactionDoesNotExist(k);
  });
});

bthread("Resetpassword create verification", function () {
  const e = waitForAnyResetpasswordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResetpassword(k), function () {
    verifyResetpasswordExists(k);
  });
});

bthread("Resetpassword update verification", function () {
  const e = waitForAnyResetpasswordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResetpassword(k), function () {
    verifyResetpasswordUpdated(k);
  });
});

bthread("Resetpassword delete verification", function () {
  const e = waitForAnyResetpasswordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResetpassword(k), function () {
    verifyResetpasswordDoesNotExist(k);
  });
});

bthread("Resetpasswordemail create verification", function () {
  const e = waitForAnyResetpasswordemailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResetpasswordemail(k), function () {
    verifyResetpasswordemailExists(k);
  });
});

bthread("Resetpasswordemail update verification", function () {
  const e = waitForAnyResetpasswordemailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResetpasswordemail(k), function () {
    verifyResetpasswordemailUpdated(k);
  });
});

bthread("Resetpasswordemail delete verification", function () {
  const e = waitForAnyResetpasswordemailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResetpasswordemail(k), function () {
    verifyResetpasswordemailDoesNotExist(k);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRole(k), function () {
    verifyRoleExists(k);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRole(k), function () {
    verifyRoleUpdated(k);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRole(k), function () {
    verifyRoleDoesNotExist(k);
  });
});

bthread("Rolemapping create verification", function () {
  const e = waitForAnyRolemappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolemapping(k), function () {
    verifyRolemappingExists(k);
  });
});

bthread("Rolemapping update verification", function () {
  const e = waitForAnyRolemappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolemapping(k), function () {
    verifyRolemappingUpdated(k);
  });
});

bthread("Rolemapping delete verification", function () {
  const e = waitForAnyRolemappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRolemapping(k), function () {
    verifyRolemappingDoesNotExist(k);
  });
});

bthread("Rolesbyid create verification", function () {
  const e = waitForAnyRolesbyidAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolesbyid(k), function () {
    verifyRolesbyidExists(k);
  });
});

bthread("Rolesbyid update verification", function () {
  const e = waitForAnyRolesbyidUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolesbyid(k), function () {
    verifyRolesbyidUpdated(k);
  });
});

bthread("Rolesbyid delete verification", function () {
  const e = waitForAnyRolesbyidDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRolesbyid(k), function () {
    verifyRolesbyidDoesNotExist(k);
  });
});

bthread("Rotated create verification", function () {
  const e = waitForAnyRotatedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRotated(k), function () {
    verifyRotatedExists(k);
  });
});

bthread("Rotated update verification", function () {
  const e = waitForAnyRotatedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRotated(k), function () {
    verifyRotatedUpdated(k);
  });
});

bthread("Rotated delete verification", function () {
  const e = waitForAnyRotatedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRotated(k), function () {
    verifyRotatedDoesNotExist(k);
  });
});

bthread("Scopemapping create verification", function () {
  const e = waitForAnyScopemappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScopemapping(k), function () {
    verifyScopemappingExists(k);
  });
});

bthread("Scopemapping update verification", function () {
  const e = waitForAnyScopemappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScopemapping(k), function () {
    verifyScopemappingUpdated(k);
  });
});

bthread("Scopemapping delete verification", function () {
  const e = waitForAnyScopemappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScopemapping(k), function () {
    verifyScopemappingDoesNotExist(k);
  });
});

bthread("Sendverifyemail create verification", function () {
  const e = waitForAnySendverifyemailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSendverifyemail(k), function () {
    verifySendverifyemailExists(k);
  });
});

bthread("Sendverifyemail update verification", function () {
  const e = waitForAnySendverifyemailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSendverifyemail(k), function () {
    verifySendverifyemailUpdated(k);
  });
});

bthread("Sendverifyemail delete verification", function () {
  const e = waitForAnySendverifyemailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSendverifyemail(k), function () {
    verifySendverifyemailDoesNotExist(k);
  });
});

bthread("Serviceaccountuser create verification", function () {
  const e = waitForAnyServiceaccountuserAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServiceaccountuser(k), function () {
    verifyServiceaccountuserExists(k);
  });
});

bthread("Serviceaccountuser update verification", function () {
  const e = waitForAnyServiceaccountuserUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServiceaccountuser(k), function () {
    verifyServiceaccountuserUpdated(k);
  });
});

bthread("Serviceaccountuser delete verification", function () {
  const e = waitForAnyServiceaccountuserDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddServiceaccountuser(k), function () {
    verifyServiceaccountuserDoesNotExist(k);
  });
});

bthread("Session create verification", function () {
  const e = waitForAnySessionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSession(k), function () {
    verifySessionExists(k);
  });
});

bthread("Session update verification", function () {
  const e = waitForAnySessionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSession(k), function () {
    verifySessionUpdated(k);
  });
});

bthread("Session delete verification", function () {
  const e = waitForAnySessionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSession(k), function () {
    verifySessionDoesNotExist(k);
  });
});

bthread("Sessioncount create verification", function () {
  const e = waitForAnySessioncountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSessioncount(k), function () {
    verifySessioncountExists(k);
  });
});

bthread("Sessioncount update verification", function () {
  const e = waitForAnySessioncountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSessioncount(k), function () {
    verifySessioncountUpdated(k);
  });
});

bthread("Sessioncount delete verification", function () {
  const e = waitForAnySessioncountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSessioncount(k), function () {
    verifySessioncountDoesNotExist(k);
  });
});

bthread("Subcomponenttype create verification", function () {
  const e = waitForAnySubcomponenttypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubcomponenttype(k), function () {
    verifySubcomponenttypeExists(k);
  });
});

bthread("Subcomponenttype update verification", function () {
  const e = waitForAnySubcomponenttypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubcomponenttype(k), function () {
    verifySubcomponenttypeUpdated(k);
  });
});

bthread("Subcomponenttype delete verification", function () {
  const e = waitForAnySubcomponenttypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubcomponenttype(k), function () {
    verifySubcomponenttypeDoesNotExist(k);
  });
});

bthread("Testnodesavailable create verification", function () {
  const e = waitForAnyTestnodesavailableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestnodesavailable(k), function () {
    verifyTestnodesavailableExists(k);
  });
});

bthread("Testnodesavailable update verification", function () {
  const e = waitForAnyTestnodesavailableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestnodesavailable(k), function () {
    verifyTestnodesavailableUpdated(k);
  });
});

bthread("Testnodesavailable delete verification", function () {
  const e = waitForAnyTestnodesavailableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTestnodesavailable(k), function () {
    verifyTestnodesavailableDoesNotExist(k);
  });
});

bthread("Testsmtpconnection create verification", function () {
  const e = waitForAnyTestsmtpconnectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestsmtpconnection(k), function () {
    verifyTestsmtpconnectionExists(k);
  });
});

bthread("Testsmtpconnection update verification", function () {
  const e = waitForAnyTestsmtpconnectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestsmtpconnection(k), function () {
    verifyTestsmtpconnectionUpdated(k);
  });
});

bthread("Testsmtpconnection delete verification", function () {
  const e = waitForAnyTestsmtpconnectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTestsmtpconnection(k), function () {
    verifyTestsmtpconnectionDoesNotExist(k);
  });
});

bthread("Unregisteredrequiredaction create verification", function () {
  const e = waitForAnyUnregisteredrequiredactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnregisteredrequiredaction(k), function () {
    verifyUnregisteredrequiredactionExists(k);
  });
});

bthread("Unregisteredrequiredaction update verification", function () {
  const e = waitForAnyUnregisteredrequiredactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnregisteredrequiredaction(k), function () {
    verifyUnregisteredrequiredactionUpdated(k);
  });
});

bthread("Unregisteredrequiredaction delete verification", function () {
  const e = waitForAnyUnregisteredrequiredactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUnregisteredrequiredaction(k), function () {
    verifyUnregisteredrequiredactionDoesNotExist(k);
  });
});

bthread("Upload create verification", function () {
  const e = waitForAnyUploadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpload(k), function () {
    verifyUploadExists(k);
  });
});

bthread("Upload update verification", function () {
  const e = waitForAnyUploadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpload(k), function () {
    verifyUploadUpdated(k);
  });
});

bthread("Upload delete verification", function () {
  const e = waitForAnyUploadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUpload(k), function () {
    verifyUploadDoesNotExist(k);
  });
});

bthread("Uploadcertificate create verification", function () {
  const e = waitForAnyUploadcertificateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUploadcertificate(k), function () {
    verifyUploadcertificateExists(k);
  });
});

bthread("Uploadcertificate update verification", function () {
  const e = waitForAnyUploadcertificateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUploadcertificate(k), function () {
    verifyUploadcertificateUpdated(k);
  });
});

bthread("Uploadcertificate delete verification", function () {
  const e = waitForAnyUploadcertificateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUploadcertificate(k), function () {
    verifyUploadcertificateDoesNotExist(k);
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

bthread("Userlabel create verification", function () {
  const e = waitForAnyUserlabelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserlabel(k), function () {
    verifyUserlabelExists(k);
  });
});

bthread("Userlabel update verification", function () {
  const e = waitForAnyUserlabelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserlabel(k), function () {
    verifyUserlabelUpdated(k);
  });
});

bthread("Userlabel delete verification", function () {
  const e = waitForAnyUserlabelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserlabel(k), function () {
    verifyUserlabelDoesNotExist(k);
  });
});

bthread("Usersession create verification", function () {
  const e = waitForAnyUsersessionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsersession(k), function () {
    verifyUsersessionExists(k);
  });
});

bthread("Usersession update verification", function () {
  const e = waitForAnyUsersessionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsersession(k), function () {
    verifyUsersessionUpdated(k);
  });
});

bthread("Usersession delete verification", function () {
  const e = waitForAnyUsersessionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsersession(k), function () {
    verifyUsersessionDoesNotExist(k);
  });
});

bthread("Usersmanagementpermission create verification", function () {
  const e = waitForAnyUsersmanagementpermissionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsersmanagementpermission(k), function () {
    verifyUsersmanagementpermissionExists(k);
  });
});

bthread("Usersmanagementpermission update verification", function () {
  const e = waitForAnyUsersmanagementpermissionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsersmanagementpermission(k), function () {
    verifyUsersmanagementpermissionUpdated(k);
  });
});

bthread("Usersmanagementpermission delete verification", function () {
  const e = waitForAnyUsersmanagementpermissionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsersmanagementpermission(k), function () {
    verifyUsersmanagementpermissionDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Addmodel", function () {
  const x = waitForAnyAddmodelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddmodel(k, ANY), function () {});
});

bthread("Guard: Unique Adminevent", function () {
  const x = waitForAnyAdmineventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAdminevent(k, ANY), function () {});
});

bthread("Guard: Unique Attackdetection", function () {
  const x = waitForAnyAttackdetectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttackdetection(k, ANY), function () {});
});

bthread("Guard: Unique Authentication", function () {
  const x = waitForAnyAuthenticationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthentication(k, ANY), function () {});
});

bthread("Guard: Unique Authenticatorprovider", function () {
  const x = waitForAnyAuthenticatorproviderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticatorprovider(k, ANY), function () {});
});

bthread("Guard: Unique Available", function () {
  const x = waitForAnyAvailableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvailable(k, ANY), function () {});
});

bthread("Guard: Unique Bruteforce", function () {
  const x = waitForAnyBruteforceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBruteforce(k, ANY), function () {});
});

bthread("Guard: Unique Certificate", function () {
  const x = waitForAnyCertificateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCertificate(k, ANY), function () {});
});

bthread("Guard: Unique Children", function () {
  const x = waitForAnyChildrenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChildren(k, ANY), function () {});
});

bthread("Guard: Unique Client", function () {
  const x = waitForAnyClientAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClient(k, ANY), function () {});
});

bthread("Guard: Unique Clientauthenticatorprovider", function () {
  const x = waitForAnyClientauthenticatorproviderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientauthenticatorprovider(k, ANY), function () {});
});

bthread("Guard: Unique Clientdescriptionconverter", function () {
  const x = waitForAnyClientdescriptionconverterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientdescriptionconverter(k, ANY), function () {});
});

bthread("Guard: Unique Clientpolicy", function () {
  const x = waitForAnyClientpolicyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientpolicy(k, ANY), function () {});
});

bthread("Guard: Unique Clientregistrationpolicy", function () {
  const x = waitForAnyClientregistrationpolicyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientregistrationpolicy(k, ANY), function () {});
});

bthread("Guard: Unique Clientscope", function () {
  const x = waitForAnyClientscopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientscope(k, ANY), function () {});
});

bthread("Guard: Unique Clientsecret", function () {
  const x = waitForAnyClientsecretAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientsecret(k, ANY), function () {});
});

bthread("Guard: Unique Clientsessionstat", function () {
  const x = waitForAnyClientsessionstatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientsessionstat(k, ANY), function () {});
});

bthread("Guard: Unique Clientsinitialacces", function () {
  const x = waitForAnyClientsinitialaccesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientsinitialacces(k, ANY), function () {});
});

bthread("Guard: Unique Clienttemplate", function () {
  const x = waitForAnyClienttemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClienttemplate(k, ANY), function () {});
});

bthread("Guard: Unique Component", function () {
  const x = waitForAnyComponentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComponent(k, ANY), function () {});
});

bthread("Guard: Unique Composite", function () {
  const x = waitForAnyCompositeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComposite(k, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfig(k, ANY), function () {});
});

bthread("Guard: Unique Configdescription", function () {
  const x = waitForAnyConfigdescriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfigdescription(k, ANY), function () {});
});

bthread("Guard: Unique Configureduserstoragecredentialtype", function () {
  const x = waitForAnyConfigureduserstoragecredentialtypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfigureduserstoragecredentialtype(k, ANY), function () {});
});

bthread("Guard: Unique Consent", function () {
  const x = waitForAnyConsentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConsent(k, ANY), function () {});
});

bthread("Guard: Unique Copy", function () {
  const x = waitForAnyCopyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCopy(k, ANY), function () {});
});

bthread("Guard: Unique Count", function () {
  const x = waitForAnyCountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCount(k, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredential(k, ANY), function () {});
});

bthread("Guard: Unique Credentialregistrator", function () {
  const x = waitForAnyCredentialregistratorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentialregistrator(k, ANY), function () {});
});

bthread("Guard: Unique Defaultclientscope", function () {
  const x = waitForAnyDefaultclientscopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultclientscope(k, ANY), function () {});
});

bthread("Guard: Unique Defaultdefaultclientscope", function () {
  const x = waitForAnyDefaultdefaultclientscopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultdefaultclientscope(k, ANY), function () {});
});

bthread("Guard: Unique Defaultgroup", function () {
  const x = waitForAnyDefaultgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultgroup(k, ANY), function () {});
});

bthread("Guard: Unique Defaultoptionalclientscope", function () {
  const x = waitForAnyDefaultoptionalclientscopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultoptionalclientscope(k, ANY), function () {});
});

bthread("Guard: Unique Disablecredentialtype", function () {
  const x = waitForAnyDisablecredentialtypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDisablecredentialtype(k, ANY), function () {});
});

bthread("Guard: Unique Download", function () {
  const x = waitForAnyDownloadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDownload(k, ANY), function () {});
});

bthread("Guard: Unique Evaluatescope", function () {
  const x = waitForAnyEvaluatescopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEvaluatescope(k, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEvent(k, ANY), function () {});
});

bthread("Guard: Unique Executeactionsemail", function () {
  const x = waitForAnyExecuteactionsemailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExecuteactionsemail(k, ANY), function () {});
});

bthread("Guard: Unique Execution", function () {
  const x = waitForAnyExecutionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExecution(k, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExport(k, ANY), function () {});
});

bthread("Guard: Unique Federatedidentity", function () {
  const x = waitForAnyFederatedidentityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFederatedidentity(k, ANY), function () {});
});

bthread("Guard: Unique Flow", function () {
  const x = waitForAnyFlowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFlow(k, ANY), function () {});
});

bthread("Guard: Unique Formactionprovider", function () {
  const x = waitForAnyFormactionproviderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFormactionprovider(k, ANY), function () {});
});

bthread("Guard: Unique Formprovider", function () {
  const x = waitForAnyFormproviderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFormprovider(k, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerate(k, ANY), function () {});
});

bthread("Guard: Unique Generateanddownload", function () {
  const x = waitForAnyGenerateanddownloadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerateanddownload(k, ANY), function () {});
});

bthread("Guard: Unique Generateexampleaccesstoken", function () {
  const x = waitForAnyGenerateexampleaccesstokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerateexampleaccesstoken(k, ANY), function () {});
});

bthread("Guard: Unique Generateexampleidtoken", function () {
  const x = waitForAnyGenerateexampleidtokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerateexampleidtoken(k, ANY), function () {});
});

bthread("Guard: Unique Generateexampleuserinfo", function () {
  const x = waitForAnyGenerateexampleuserinfoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerateexampleuserinfo(k, ANY), function () {});
});

bthread("Guard: Unique Granted", function () {
  const x = waitForAnyGrantedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGranted(k, ANY), function () {});
});

bthread("Guard: Unique Group", function () {
  const x = waitForAnyGroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGroup(k, ANY), function () {});
});

bthread("Guard: Unique Groupbypath", function () {
  const x = waitForAnyGroupbypathAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGroupbypath(k, ANY), function () {});
});

bthread("Guard: Unique Identityprovider", function () {
  const x = waitForAnyIdentityproviderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIdentityprovider(k, ANY), function () {});
});

bthread("Guard: Unique Impersonation", function () {
  const x = waitForAnyImpersonationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddImpersonation(k, ANY), function () {});
});

bthread("Guard: Unique Importconfig", function () {
  const x = waitForAnyImportconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddImportconfig(k, ANY), function () {});
});

bthread("Guard: Unique Installation", function () {
  const x = waitForAnyInstallationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstallation(k, ANY), function () {});
});

bthread("Guard: Unique Instance", function () {
  const x = waitForAnyInstanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstance(k, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKey(k, ANY), function () {});
});

bthread("Guard: Unique Localization", function () {
  const x = waitForAnyLocalizationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLocalization(k, ANY), function () {});
});

bthread("Guard: Unique Logout", function () {
  const x = waitForAnyLogoutAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLogout(k, ANY), function () {});
});

bthread("Guard: Unique Logoutall", function () {
  const x = waitForAnyLogoutallAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLogoutall(k, ANY), function () {});
});

bthread("Guard: Unique Lowerpriority", function () {
  const x = waitForAnyLowerpriorityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLowerpriority(k, ANY), function () {});
});

bthread("Guard: Unique Management", function () {
  const x = waitForAnyManagementAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddManagement(k, ANY), function () {});
});

bthread("Guard: Unique Mapper", function () {
  const x = waitForAnyMapperAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMapper(k, ANY), function () {});
});

bthread("Guard: Unique Mappertype", function () {
  const x = waitForAnyMappertypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMappertype(k, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMember(k, ANY), function () {});
});

bthread("Guard: Unique Model", function () {
  const x = waitForAnyModelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddModel(k, ANY), function () {});
});

bthread("Guard: Unique Moveafter", function () {
  const x = waitForAnyMoveafterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMoveafter(k, ANY), function () {});
});

bthread("Guard: Unique Movetofirst", function () {
  const x = waitForAnyMovetofirstAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMovetofirst(k, ANY), function () {});
});

bthread("Guard: Unique Node", function () {
  const x = waitForAnyNodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNode(k, ANY), function () {});
});

bthread("Guard: Unique Notgranted", function () {
  const x = waitForAnyNotgrantedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotgranted(k, ANY), function () {});
});

bthread("Guard: Unique Offlinesession", function () {
  const x = waitForAnyOfflinesessionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOfflinesession(k, ANY), function () {});
});

bthread("Guard: Unique Offlinesessioncount", function () {
  const x = waitForAnyOfflinesessioncountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOfflinesessioncount(k, ANY), function () {});
});

bthread("Guard: Unique Optionalclientscope", function () {
  const x = waitForAnyOptionalclientscopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOptionalclientscope(k, ANY), function () {});
});

bthread("Guard: Unique Partialexport", function () {
  const x = waitForAnyPartialexportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPartialexport(k, ANY), function () {});
});

bthread("Guard: Unique Partialimport", function () {
  const x = waitForAnyPartialimportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPartialimport(k, ANY), function () {});
});

bthread("Guard: Unique Perclientconfigdescription", function () {
  const x = waitForAnyPerclientconfigdescriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPerclientconfigdescription(k, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermission(k, ANY), function () {});
});

bthread("Guard: Unique Policy", function () {
  const x = waitForAnyPolicyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPolicy(k, ANY), function () {});
});

bthread("Guard: Unique Profile", function () {
  const x = waitForAnyProfileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProfile(k, ANY), function () {});
});

bthread("Guard: Unique Protocol", function () {
  const x = waitForAnyProtocolAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProtocol(k, ANY), function () {});
});

bthread("Guard: Unique Protocolmapper", function () {
  const x = waitForAnyProtocolmapperAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProtocolmapper(k, ANY), function () {});
});

bthread("Guard: Unique Provider", function () {
  const x = waitForAnyProviderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProvider(k, ANY), function () {});
});

bthread("Guard: Unique Pushrevocation", function () {
  const x = waitForAnyPushrevocationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPushrevocation(k, ANY), function () {});
});

bthread("Guard: Unique Raisepriority", function () {
  const x = waitForAnyRaisepriorityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRaisepriority(k, ANY), function () {});
});

bthread("Guard: Unique Realm", function () {
  const x = waitForAnyRealmAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealm(k, ANY), function () {});
});

bthread("Guard: Unique Registerrequiredaction", function () {
  const x = waitForAnyRegisterrequiredactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRegisterrequiredaction(k, ANY), function () {});
});

bthread("Guard: Unique Registrationaccesstoken", function () {
  const x = waitForAnyRegistrationaccesstokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRegistrationaccesstoken(k, ANY), function () {});
});

bthread("Guard: Unique Requiredaction", function () {
  const x = waitForAnyRequiredactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequiredaction(k, ANY), function () {});
});

bthread("Guard: Unique Resetpassword", function () {
  const x = waitForAnyResetpasswordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResetpassword(k, ANY), function () {});
});

bthread("Guard: Unique Resetpasswordemail", function () {
  const x = waitForAnyResetpasswordemailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResetpasswordemail(k, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRole(k, ANY), function () {});
});

bthread("Guard: Unique Rolemapping", function () {
  const x = waitForAnyRolemappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRolemapping(k, ANY), function () {});
});

bthread("Guard: Unique Rolesbyid", function () {
  const x = waitForAnyRolesbyidAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRolesbyid(k, ANY), function () {});
});

bthread("Guard: Unique Rotated", function () {
  const x = waitForAnyRotatedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRotated(k, ANY), function () {});
});

bthread("Guard: Unique Scopemapping", function () {
  const x = waitForAnyScopemappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScopemapping(k, ANY), function () {});
});

bthread("Guard: Unique Sendverifyemail", function () {
  const x = waitForAnySendverifyemailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSendverifyemail(k, ANY), function () {});
});

bthread("Guard: Unique Serviceaccountuser", function () {
  const x = waitForAnyServiceaccountuserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddServiceaccountuser(k, ANY), function () {});
});

bthread("Guard: Unique Session", function () {
  const x = waitForAnySessionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSession(k, ANY), function () {});
});

bthread("Guard: Unique Sessioncount", function () {
  const x = waitForAnySessioncountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSessioncount(k, ANY), function () {});
});

bthread("Guard: Unique Subcomponenttype", function () {
  const x = waitForAnySubcomponenttypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubcomponenttype(k, ANY), function () {});
});

bthread("Guard: Unique Testnodesavailable", function () {
  const x = waitForAnyTestnodesavailableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTestnodesavailable(k, ANY), function () {});
});

bthread("Guard: Unique Testsmtpconnection", function () {
  const x = waitForAnyTestsmtpconnectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTestsmtpconnection(k, ANY), function () {});
});

bthread("Guard: Unique Unregisteredrequiredaction", function () {
  const x = waitForAnyUnregisteredrequiredactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUnregisteredrequiredaction(k, ANY), function () {});
});

bthread("Guard: Unique Upload", function () {
  const x = waitForAnyUploadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUpload(k, ANY), function () {});
});

bthread("Guard: Unique Uploadcertificate", function () {
  const x = waitForAnyUploadcertificateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUploadcertificate(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Userlabel", function () {
  const x = waitForAnyUserlabelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserlabel(k, ANY), function () {});
});

bthread("Guard: Unique Usersession", function () {
  const x = waitForAnyUsersessionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsersession(k, ANY), function () {});
});

bthread("Guard: Unique Usersmanagementpermission", function () {
  const x = waitForAnyUsersmanagementpermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsersmanagementpermission(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
