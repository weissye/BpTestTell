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


bthread("20100401Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  add20100401(x.id);
  const e_add = waitFor20100401Added(id);
  block(matchDelete20100401(id), function () {
    verify20100401Exists(id);
  });
  update20100401(x.id);
  update20100401(x.id);
  const e_upd = waitFor20100401Updated(id);
  block(matchDelete20100401(id), function () {
    verify20100401Updated(id);
  });
  delete20100401(x.id);
  const e_del = waitFor20100401Deleted(id);
  block(matchAdd20100401(id), function () {
    verify20100401DoesNotExist(id);
  });
});

bthread("AccountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccount(x.id);
  const e_add = waitForAccountAdded(id);
  block(matchDeleteAccount(id), function () {
    verifyAccountExists(id);
  });
  updateAccount(x.id);
  updateAccount(x.id);
  const e_upd = waitForAccountUpdated(id);
  block(matchDeleteAccount(id), function () {
    verifyAccountUpdated(id);
  });
  deleteAccount(x.id);
  const e_del = waitForAccountDeleted(id);
  block(matchAddAccount(id), function () {
    verifyAccountDoesNotExist(id);
  });
});

bthread("AccountsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccountsjson(x.id);
  const e_add = waitForAccountsjsonAdded(id);
  block(matchDeleteAccountsjson(id), function () {
    verifyAccountsjsonExists(id);
  });
  updateAccountsjson(x.id);
  updateAccountsjson(x.id);
  const e_upd = waitForAccountsjsonUpdated(id);
  block(matchDeleteAccountsjson(id), function () {
    verifyAccountsjsonUpdated(id);
  });
  deleteAccountsjson(x.id);
  const e_del = waitForAccountsjsonDeleted(id);
  block(matchAddAccountsjson(id), function () {
    verifyAccountsjsonDoesNotExist(id);
  });
});

bthread("AddonresultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddonresult(x.id);
  const e_add = waitForAddonresultAdded(id);
  block(matchDeleteAddonresult(id), function () {
    verifyAddonresultExists(id);
  });
  updateAddonresult(x.id);
  updateAddonresult(x.id);
  const e_upd = waitForAddonresultUpdated(id);
  block(matchDeleteAddonresult(id), function () {
    verifyAddonresultUpdated(id);
  });
  deleteAddonresult(x.id);
  const e_del = waitForAddonresultDeleted(id);
  block(matchAddAddonresult(id), function () {
    verifyAddonresultDoesNotExist(id);
  });
});

bthread("AddonresultsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddonresultsjson(x.id);
  const e_add = waitForAddonresultsjsonAdded(id);
  block(matchDeleteAddonresultsjson(id), function () {
    verifyAddonresultsjsonExists(id);
  });
  updateAddonresultsjson(x.id);
  updateAddonresultsjson(x.id);
  const e_upd = waitForAddonresultsjsonUpdated(id);
  block(matchDeleteAddonresultsjson(id), function () {
    verifyAddonresultsjsonUpdated(id);
  });
  deleteAddonresultsjson(x.id);
  const e_del = waitForAddonresultsjsonDeleted(id);
  block(matchAddAddonresultsjson(id), function () {
    verifyAddonresultsjsonDoesNotExist(id);
  });
});

bthread("AddressLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddress(x.id);
  const e_add = waitForAddressAdded(id);
  block(matchDeleteAddress(id), function () {
    verifyAddressExists(id);
  });
  updateAddress(x.id);
  updateAddress(x.id);
  const e_upd = waitForAddressUpdated(id);
  block(matchDeleteAddress(id), function () {
    verifyAddressUpdated(id);
  });
  deleteAddress(x.id);
  const e_del = waitForAddressDeleted(id);
  block(matchAddAddress(id), function () {
    verifyAddressDoesNotExist(id);
  });
});

bthread("AddressesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddressesjson(x.id);
  const e_add = waitForAddressesjsonAdded(id);
  block(matchDeleteAddressesjson(id), function () {
    verifyAddressesjsonExists(id);
  });
  updateAddressesjson(x.id);
  updateAddressesjson(x.id);
  const e_upd = waitForAddressesjsonUpdated(id);
  block(matchDeleteAddressesjson(id), function () {
    verifyAddressesjsonUpdated(id);
  });
  deleteAddressesjson(x.id);
  const e_del = waitForAddressesjsonDeleted(id);
  block(matchAddAddressesjson(id), function () {
    verifyAddressesjsonDoesNotExist(id);
  });
});

bthread("AlltimejsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAlltimejson(x.id);
  const e_add = waitForAlltimejsonAdded(id);
  block(matchDeleteAlltimejson(id), function () {
    verifyAlltimejsonExists(id);
  });
  updateAlltimejson(x.id);
  updateAlltimejson(x.id);
  const e_upd = waitForAlltimejsonUpdated(id);
  block(matchDeleteAlltimejson(id), function () {
    verifyAlltimejsonUpdated(id);
  });
  deleteAlltimejson(x.id);
  const e_del = waitForAlltimejsonDeleted(id);
  block(matchAddAlltimejson(id), function () {
    verifyAlltimejsonDoesNotExist(id);
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

bthread("ApplicationsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApplicationsjson(x.id);
  const e_add = waitForApplicationsjsonAdded(id);
  block(matchDeleteApplicationsjson(id), function () {
    verifyApplicationsjsonExists(id);
  });
  updateApplicationsjson(x.id);
  updateApplicationsjson(x.id);
  const e_upd = waitForApplicationsjsonUpdated(id);
  block(matchDeleteApplicationsjson(id), function () {
    verifyApplicationsjsonUpdated(id);
  });
  deleteApplicationsjson(x.id);
  const e_del = waitForApplicationsjsonDeleted(id);
  block(matchAddApplicationsjson(id), function () {
    verifyApplicationsjsonDoesNotExist(id);
  });
});

bthread("AssignedaddonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssignedaddon(x.id);
  const e_add = waitForAssignedaddonAdded(id);
  block(matchDeleteAssignedaddon(id), function () {
    verifyAssignedaddonExists(id);
  });
  updateAssignedaddon(x.id);
  updateAssignedaddon(x.id);
  const e_upd = waitForAssignedaddonUpdated(id);
  block(matchDeleteAssignedaddon(id), function () {
    verifyAssignedaddonUpdated(id);
  });
  deleteAssignedaddon(x.id);
  const e_del = waitForAssignedaddonDeleted(id);
  block(matchAddAssignedaddon(id), function () {
    verifyAssignedaddonDoesNotExist(id);
  });
});

bthread("AssignedaddonsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssignedaddonsjson(x.id);
  const e_add = waitForAssignedaddonsjsonAdded(id);
  block(matchDeleteAssignedaddonsjson(id), function () {
    verifyAssignedaddonsjsonExists(id);
  });
  updateAssignedaddonsjson(x.id);
  updateAssignedaddonsjson(x.id);
  const e_upd = waitForAssignedaddonsjsonUpdated(id);
  block(matchDeleteAssignedaddonsjson(id), function () {
    verifyAssignedaddonsjsonUpdated(id);
  });
  deleteAssignedaddonsjson(x.id);
  const e_del = waitForAssignedaddonsjsonDeleted(id);
  block(matchAddAssignedaddonsjson(id), function () {
    verifyAssignedaddonsjsonDoesNotExist(id);
  });
});

bthread("AuthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuth(x.id);
  const e_add = waitForAuthAdded(id);
  block(matchDeleteAuth(id), function () {
    verifyAuthExists(id);
  });
  updateAuth(x.id);
  updateAuth(x.id);
  const e_upd = waitForAuthUpdated(id);
  block(matchDeleteAuth(id), function () {
    verifyAuthUpdated(id);
  });
  deleteAuth(x.id);
  const e_del = waitForAuthDeleted(id);
  block(matchAddAuth(id), function () {
    verifyAuthDoesNotExist(id);
  });
});

bthread("AuthorizedconnectappLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthorizedconnectapp(x.id);
  const e_add = waitForAuthorizedconnectappAdded(id);
  block(matchDeleteAuthorizedconnectapp(id), function () {
    verifyAuthorizedconnectappExists(id);
  });
  updateAuthorizedconnectapp(x.id);
  updateAuthorizedconnectapp(x.id);
  const e_upd = waitForAuthorizedconnectappUpdated(id);
  block(matchDeleteAuthorizedconnectapp(id), function () {
    verifyAuthorizedconnectappUpdated(id);
  });
  deleteAuthorizedconnectapp(x.id);
  const e_del = waitForAuthorizedconnectappDeleted(id);
  block(matchAddAuthorizedconnectapp(id), function () {
    verifyAuthorizedconnectappDoesNotExist(id);
  });
});

bthread("AuthorizedconnectappsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthorizedconnectappsjson(x.id);
  const e_add = waitForAuthorizedconnectappsjsonAdded(id);
  block(matchDeleteAuthorizedconnectappsjson(id), function () {
    verifyAuthorizedconnectappsjsonExists(id);
  });
  updateAuthorizedconnectappsjson(x.id);
  updateAuthorizedconnectappsjson(x.id);
  const e_upd = waitForAuthorizedconnectappsjsonUpdated(id);
  block(matchDeleteAuthorizedconnectappsjson(id), function () {
    verifyAuthorizedconnectappsjsonUpdated(id);
  });
  deleteAuthorizedconnectappsjson(x.id);
  const e_del = waitForAuthorizedconnectappsjsonDeleted(id);
  block(matchAddAuthorizedconnectappsjson(id), function () {
    verifyAuthorizedconnectappsjsonDoesNotExist(id);
  });
});

bthread("AvailablephonenumberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailablephonenumber(x.id);
  const e_add = waitForAvailablephonenumberAdded(id);
  block(matchDeleteAvailablephonenumber(id), function () {
    verifyAvailablephonenumberExists(id);
  });
  updateAvailablephonenumber(x.id);
  updateAvailablephonenumber(x.id);
  const e_upd = waitForAvailablephonenumberUpdated(id);
  block(matchDeleteAvailablephonenumber(id), function () {
    verifyAvailablephonenumberUpdated(id);
  });
  deleteAvailablephonenumber(x.id);
  const e_del = waitForAvailablephonenumberDeleted(id);
  block(matchAddAvailablephonenumber(id), function () {
    verifyAvailablephonenumberDoesNotExist(id);
  });
});

bthread("AvailablephonenumbersjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailablephonenumbersjson(x.id);
  const e_add = waitForAvailablephonenumbersjsonAdded(id);
  block(matchDeleteAvailablephonenumbersjson(id), function () {
    verifyAvailablephonenumbersjsonExists(id);
  });
  updateAvailablephonenumbersjson(x.id);
  updateAvailablephonenumbersjson(x.id);
  const e_upd = waitForAvailablephonenumbersjsonUpdated(id);
  block(matchDeleteAvailablephonenumbersjson(id), function () {
    verifyAvailablephonenumbersjsonUpdated(id);
  });
  deleteAvailablephonenumbersjson(x.id);
  const e_del = waitForAvailablephonenumbersjsonDeleted(id);
  block(matchAddAvailablephonenumbersjson(id), function () {
    verifyAvailablephonenumbersjsonDoesNotExist(id);
  });
});

bthread("BalancejsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBalancejson(x.id);
  const e_add = waitForBalancejsonAdded(id);
  block(matchDeleteBalancejson(id), function () {
    verifyBalancejsonExists(id);
  });
  updateBalancejson(x.id);
  updateBalancejson(x.id);
  const e_upd = waitForBalancejsonUpdated(id);
  block(matchDeleteBalancejson(id), function () {
    verifyBalancejsonUpdated(id);
  });
  deleteBalancejson(x.id);
  const e_del = waitForBalancejsonDeleted(id);
  block(matchAddBalancejson(id), function () {
    verifyBalancejsonDoesNotExist(id);
  });
});

bthread("CallLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCall(x.id);
  const e_add = waitForCallAdded(id);
  block(matchDeleteCall(id), function () {
    verifyCallExists(id);
  });
  updateCall(x.id);
  updateCall(x.id);
  const e_upd = waitForCallUpdated(id);
  block(matchDeleteCall(id), function () {
    verifyCallUpdated(id);
  });
  deleteCall(x.id);
  const e_del = waitForCallDeleted(id);
  block(matchAddCall(id), function () {
    verifyCallDoesNotExist(id);
  });
});

bthread("CallsidjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallsidjson(x.id);
  const e_add = waitForCallsidjsonAdded(id);
  block(matchDeleteCallsidjson(id), function () {
    verifyCallsidjsonExists(id);
  });
  updateCallsidjson(x.id);
  updateCallsidjson(x.id);
  const e_upd = waitForCallsidjsonUpdated(id);
  block(matchDeleteCallsidjson(id), function () {
    verifyCallsidjsonUpdated(id);
  });
  deleteCallsidjson(x.id);
  const e_del = waitForCallsidjsonDeleted(id);
  block(matchAddCallsidjson(id), function () {
    verifyCallsidjsonDoesNotExist(id);
  });
});

bthread("CallsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallsjson(x.id);
  const e_add = waitForCallsjsonAdded(id);
  block(matchDeleteCallsjson(id), function () {
    verifyCallsjsonExists(id);
  });
  updateCallsjson(x.id);
  updateCallsjson(x.id);
  const e_upd = waitForCallsjsonUpdated(id);
  block(matchDeleteCallsjson(id), function () {
    verifyCallsjsonUpdated(id);
  });
  deleteCallsjson(x.id);
  const e_del = waitForCallsjsonDeleted(id);
  block(matchAddCallsjson(id), function () {
    verifyCallsjsonDoesNotExist(id);
  });
});

bthread("ConferenceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConference(x.id);
  const e_add = waitForConferenceAdded(id);
  block(matchDeleteConference(id), function () {
    verifyConferenceExists(id);
  });
  updateConference(x.id);
  updateConference(x.id);
  const e_upd = waitForConferenceUpdated(id);
  block(matchDeleteConference(id), function () {
    verifyConferenceUpdated(id);
  });
  deleteConference(x.id);
  const e_del = waitForConferenceDeleted(id);
  block(matchAddConference(id), function () {
    verifyConferenceDoesNotExist(id);
  });
});

bthread("ConferencesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConferencesjson(x.id);
  const e_add = waitForConferencesjsonAdded(id);
  block(matchDeleteConferencesjson(id), function () {
    verifyConferencesjsonExists(id);
  });
  updateConferencesjson(x.id);
  updateConferencesjson(x.id);
  const e_upd = waitForConferencesjsonUpdated(id);
  block(matchDeleteConferencesjson(id), function () {
    verifyConferencesjsonUpdated(id);
  });
  deleteConferencesjson(x.id);
  const e_del = waitForConferencesjsonDeleted(id);
  block(matchAddConferencesjson(id), function () {
    verifyConferencesjsonDoesNotExist(id);
  });
});

bthread("ConnectappLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConnectapp(x.id);
  const e_add = waitForConnectappAdded(id);
  block(matchDeleteConnectapp(id), function () {
    verifyConnectappExists(id);
  });
  updateConnectapp(x.id);
  updateConnectapp(x.id);
  const e_upd = waitForConnectappUpdated(id);
  block(matchDeleteConnectapp(id), function () {
    verifyConnectappUpdated(id);
  });
  deleteConnectapp(x.id);
  const e_del = waitForConnectappDeleted(id);
  block(matchAddConnectapp(id), function () {
    verifyConnectappDoesNotExist(id);
  });
});

bthread("ConnectappsidjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConnectappsidjson(x.id);
  const e_add = waitForConnectappsidjsonAdded(id);
  block(matchDeleteConnectappsidjson(id), function () {
    verifyConnectappsidjsonExists(id);
  });
  updateConnectappsidjson(x.id);
  updateConnectappsidjson(x.id);
  const e_upd = waitForConnectappsidjsonUpdated(id);
  block(matchDeleteConnectappsidjson(id), function () {
    verifyConnectappsidjsonUpdated(id);
  });
  deleteConnectappsidjson(x.id);
  const e_del = waitForConnectappsidjsonDeleted(id);
  block(matchAddConnectappsidjson(id), function () {
    verifyConnectappsidjsonDoesNotExist(id);
  });
});

bthread("ConnectappsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConnectappsjson(x.id);
  const e_add = waitForConnectappsjsonAdded(id);
  block(matchDeleteConnectappsjson(id), function () {
    verifyConnectappsjsonExists(id);
  });
  updateConnectappsjson(x.id);
  updateConnectappsjson(x.id);
  const e_upd = waitForConnectappsjsonUpdated(id);
  block(matchDeleteConnectappsjson(id), function () {
    verifyConnectappsjsonUpdated(id);
  });
  deleteConnectappsjson(x.id);
  const e_del = waitForConnectappsjsonDeleted(id);
  block(matchAddConnectappsjson(id), function () {
    verifyConnectappsjsonDoesNotExist(id);
  });
});

bthread("CountrycodejsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCountrycodejson(x.id);
  const e_add = waitForCountrycodejsonAdded(id);
  block(matchDeleteCountrycodejson(id), function () {
    verifyCountrycodejsonExists(id);
  });
  updateCountrycodejson(x.id);
  updateCountrycodejson(x.id);
  const e_upd = waitForCountrycodejsonUpdated(id);
  block(matchDeleteCountrycodejson(id), function () {
    verifyCountrycodejsonUpdated(id);
  });
  deleteCountrycodejson(x.id);
  const e_del = waitForCountrycodejsonDeleted(id);
  block(matchAddCountrycodejson(id), function () {
    verifyCountrycodejsonDoesNotExist(id);
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

bthread("CredentiallistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentiallist(x.id);
  const e_add = waitForCredentiallistAdded(id);
  block(matchDeleteCredentiallist(id), function () {
    verifyCredentiallistExists(id);
  });
  updateCredentiallist(x.id);
  updateCredentiallist(x.id);
  const e_upd = waitForCredentiallistUpdated(id);
  block(matchDeleteCredentiallist(id), function () {
    verifyCredentiallistUpdated(id);
  });
  deleteCredentiallist(x.id);
  const e_del = waitForCredentiallistDeleted(id);
  block(matchAddCredentiallist(id), function () {
    verifyCredentiallistDoesNotExist(id);
  });
});

bthread("CredentiallistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentiallistmapping(x.id);
  const e_add = waitForCredentiallistmappingAdded(id);
  block(matchDeleteCredentiallistmapping(id), function () {
    verifyCredentiallistmappingExists(id);
  });
  updateCredentiallistmapping(x.id);
  updateCredentiallistmapping(x.id);
  const e_upd = waitForCredentiallistmappingUpdated(id);
  block(matchDeleteCredentiallistmapping(id), function () {
    verifyCredentiallistmappingUpdated(id);
  });
  deleteCredentiallistmapping(x.id);
  const e_del = waitForCredentiallistmappingDeleted(id);
  block(matchAddCredentiallistmapping(id), function () {
    verifyCredentiallistmappingDoesNotExist(id);
  });
});

bthread("CredentiallistmappingsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentiallistmappingsjson(x.id);
  const e_add = waitForCredentiallistmappingsjsonAdded(id);
  block(matchDeleteCredentiallistmappingsjson(id), function () {
    verifyCredentiallistmappingsjsonExists(id);
  });
  updateCredentiallistmappingsjson(x.id);
  updateCredentiallistmappingsjson(x.id);
  const e_upd = waitForCredentiallistmappingsjsonUpdated(id);
  block(matchDeleteCredentiallistmappingsjson(id), function () {
    verifyCredentiallistmappingsjsonUpdated(id);
  });
  deleteCredentiallistmappingsjson(x.id);
  const e_del = waitForCredentiallistmappingsjsonDeleted(id);
  block(matchAddCredentiallistmappingsjson(id), function () {
    verifyCredentiallistmappingsjsonDoesNotExist(id);
  });
});

bthread("CredentiallistsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentiallistsjson(x.id);
  const e_add = waitForCredentiallistsjsonAdded(id);
  block(matchDeleteCredentiallistsjson(id), function () {
    verifyCredentiallistsjsonExists(id);
  });
  updateCredentiallistsjson(x.id);
  updateCredentiallistsjson(x.id);
  const e_upd = waitForCredentiallistsjsonUpdated(id);
  block(matchDeleteCredentiallistsjson(id), function () {
    verifyCredentiallistsjsonUpdated(id);
  });
  deleteCredentiallistsjson(x.id);
  const e_del = waitForCredentiallistsjsonDeleted(id);
  block(matchAddCredentiallistsjson(id), function () {
    verifyCredentiallistsjsonDoesNotExist(id);
  });
});

bthread("CredentialsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentialsjson(x.id);
  const e_add = waitForCredentialsjsonAdded(id);
  block(matchDeleteCredentialsjson(id), function () {
    verifyCredentialsjsonExists(id);
  });
  updateCredentialsjson(x.id);
  updateCredentialsjson(x.id);
  const e_upd = waitForCredentialsjsonUpdated(id);
  block(matchDeleteCredentialsjson(id), function () {
    verifyCredentialsjsonUpdated(id);
  });
  deleteCredentialsjson(x.id);
  const e_del = waitForCredentialsjsonDeleted(id);
  block(matchAddCredentialsjson(id), function () {
    verifyCredentialsjsonDoesNotExist(id);
  });
});

bthread("DailyjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDailyjson(x.id);
  const e_add = waitForDailyjsonAdded(id);
  block(matchDeleteDailyjson(id), function () {
    verifyDailyjsonExists(id);
  });
  updateDailyjson(x.id);
  updateDailyjson(x.id);
  const e_upd = waitForDailyjsonUpdated(id);
  block(matchDeleteDailyjson(id), function () {
    verifyDailyjsonUpdated(id);
  });
  deleteDailyjson(x.id);
  const e_del = waitForDailyjsonDeleted(id);
  block(matchAddDailyjson(id), function () {
    verifyDailyjsonDoesNotExist(id);
  });
});

bthread("DatajsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDatajson(x.id);
  const e_add = waitForDatajsonAdded(id);
  block(matchDeleteDatajson(id), function () {
    verifyDatajsonExists(id);
  });
  updateDatajson(x.id);
  updateDatajson(x.id);
  const e_upd = waitForDatajsonUpdated(id);
  block(matchDeleteDatajson(id), function () {
    verifyDatajsonUpdated(id);
  });
  deleteDatajson(x.id);
  const e_del = waitForDatajsonDeleted(id);
  block(matchAddDatajson(id), function () {
    verifyDatajsonDoesNotExist(id);
  });
});

bthread("DependentphonenumbersjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDependentphonenumbersjson(x.id);
  const e_add = waitForDependentphonenumbersjsonAdded(id);
  block(matchDeleteDependentphonenumbersjson(id), function () {
    verifyDependentphonenumbersjsonExists(id);
  });
  updateDependentphonenumbersjson(x.id);
  updateDependentphonenumbersjson(x.id);
  const e_upd = waitForDependentphonenumbersjsonUpdated(id);
  block(matchDeleteDependentphonenumbersjson(id), function () {
    verifyDependentphonenumbersjsonUpdated(id);
  });
  deleteDependentphonenumbersjson(x.id);
  const e_del = waitForDependentphonenumbersjsonDeleted(id);
  block(matchAddDependentphonenumbersjson(id), function () {
    verifyDependentphonenumbersjsonDoesNotExist(id);
  });
});

bthread("DomainLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDomain(x.id);
  const e_add = waitForDomainAdded(id);
  block(matchDeleteDomain(id), function () {
    verifyDomainExists(id);
  });
  updateDomain(x.id);
  updateDomain(x.id);
  const e_upd = waitForDomainUpdated(id);
  block(matchDeleteDomain(id), function () {
    verifyDomainUpdated(id);
  });
  deleteDomain(x.id);
  const e_del = waitForDomainDeleted(id);
  block(matchAddDomain(id), function () {
    verifyDomainDoesNotExist(id);
  });
});

bthread("DomainsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDomainsjson(x.id);
  const e_add = waitForDomainsjsonAdded(id);
  block(matchDeleteDomainsjson(id), function () {
    verifyDomainsjsonExists(id);
  });
  updateDomainsjson(x.id);
  updateDomainsjson(x.id);
  const e_upd = waitForDomainsjsonUpdated(id);
  block(matchDeleteDomainsjson(id), function () {
    verifyDomainsjsonUpdated(id);
  });
  deleteDomainsjson(x.id);
  const e_del = waitForDomainsjsonDeleted(id);
  block(matchAddDomainsjson(id), function () {
    verifyDomainsjsonDoesNotExist(id);
  });
});

bthread("EventsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEventsjson(x.id);
  const e_add = waitForEventsjsonAdded(id);
  block(matchDeleteEventsjson(id), function () {
    verifyEventsjsonExists(id);
  });
  updateEventsjson(x.id);
  updateEventsjson(x.id);
  const e_upd = waitForEventsjsonUpdated(id);
  block(matchDeleteEventsjson(id), function () {
    verifyEventsjsonUpdated(id);
  });
  deleteEventsjson(x.id);
  const e_del = waitForEventsjsonDeleted(id);
  block(matchAddEventsjson(id), function () {
    verifyEventsjsonDoesNotExist(id);
  });
});

bthread("ExtensionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExtension(x.id);
  const e_add = waitForExtensionAdded(id);
  block(matchDeleteExtension(id), function () {
    verifyExtensionExists(id);
  });
  updateExtension(x.id);
  updateExtension(x.id);
  const e_upd = waitForExtensionUpdated(id);
  block(matchDeleteExtension(id), function () {
    verifyExtensionUpdated(id);
  });
  deleteExtension(x.id);
  const e_del = waitForExtensionDeleted(id);
  block(matchAddExtension(id), function () {
    verifyExtensionDoesNotExist(id);
  });
});

bthread("ExtensionsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExtensionsjson(x.id);
  const e_add = waitForExtensionsjsonAdded(id);
  block(matchDeleteExtensionsjson(id), function () {
    verifyExtensionsjsonExists(id);
  });
  updateExtensionsjson(x.id);
  updateExtensionsjson(x.id);
  const e_upd = waitForExtensionsjsonUpdated(id);
  block(matchDeleteExtensionsjson(id), function () {
    verifyExtensionsjsonUpdated(id);
  });
  deleteExtensionsjson(x.id);
  const e_del = waitForExtensionsjsonDeleted(id);
  block(matchAddExtensionsjson(id), function () {
    verifyExtensionsjsonDoesNotExist(id);
  });
});

bthread("FeedbackjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFeedbackjson(x.id);
  const e_add = waitForFeedbackjsonAdded(id);
  block(matchDeleteFeedbackjson(id), function () {
    verifyFeedbackjsonExists(id);
  });
  updateFeedbackjson(x.id);
  updateFeedbackjson(x.id);
  const e_upd = waitForFeedbackjsonUpdated(id);
  block(matchDeleteFeedbackjson(id), function () {
    verifyFeedbackjsonUpdated(id);
  });
  deleteFeedbackjson(x.id);
  const e_del = waitForFeedbackjsonDeleted(id);
  block(matchAddFeedbackjson(id), function () {
    verifyFeedbackjsonDoesNotExist(id);
  });
});

bthread("IncomingphonenumberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumber(x.id);
  const e_add = waitForIncomingphonenumberAdded(id);
  block(matchDeleteIncomingphonenumber(id), function () {
    verifyIncomingphonenumberExists(id);
  });
  updateIncomingphonenumber(x.id);
  updateIncomingphonenumber(x.id);
  const e_upd = waitForIncomingphonenumberUpdated(id);
  block(matchDeleteIncomingphonenumber(id), function () {
    verifyIncomingphonenumberUpdated(id);
  });
  deleteIncomingphonenumber(x.id);
  const e_del = waitForIncomingphonenumberDeleted(id);
  block(matchAddIncomingphonenumber(id), function () {
    verifyIncomingphonenumberDoesNotExist(id);
  });
});

bthread("IncomingphonenumbersjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncomingphonenumbersjson(x.id);
  const e_add = waitForIncomingphonenumbersjsonAdded(id);
  block(matchDeleteIncomingphonenumbersjson(id), function () {
    verifyIncomingphonenumbersjsonExists(id);
  });
  updateIncomingphonenumbersjson(x.id);
  updateIncomingphonenumbersjson(x.id);
  const e_upd = waitForIncomingphonenumbersjsonUpdated(id);
  block(matchDeleteIncomingphonenumbersjson(id), function () {
    verifyIncomingphonenumbersjsonUpdated(id);
  });
  deleteIncomingphonenumbersjson(x.id);
  const e_del = waitForIncomingphonenumbersjsonDeleted(id);
  block(matchAddIncomingphonenumbersjson(id), function () {
    verifyIncomingphonenumbersjsonDoesNotExist(id);
  });
});

bthread("IpaccesscontrollistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaccesscontrollist(x.id);
  const e_add = waitForIpaccesscontrollistAdded(id);
  block(matchDeleteIpaccesscontrollist(id), function () {
    verifyIpaccesscontrollistExists(id);
  });
  updateIpaccesscontrollist(x.id);
  updateIpaccesscontrollist(x.id);
  const e_upd = waitForIpaccesscontrollistUpdated(id);
  block(matchDeleteIpaccesscontrollist(id), function () {
    verifyIpaccesscontrollistUpdated(id);
  });
  deleteIpaccesscontrollist(x.id);
  const e_del = waitForIpaccesscontrollistDeleted(id);
  block(matchAddIpaccesscontrollist(id), function () {
    verifyIpaccesscontrollistDoesNotExist(id);
  });
});

bthread("IpaccesscontrollistmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaccesscontrollistmapping(x.id);
  const e_add = waitForIpaccesscontrollistmappingAdded(id);
  block(matchDeleteIpaccesscontrollistmapping(id), function () {
    verifyIpaccesscontrollistmappingExists(id);
  });
  updateIpaccesscontrollistmapping(x.id);
  updateIpaccesscontrollistmapping(x.id);
  const e_upd = waitForIpaccesscontrollistmappingUpdated(id);
  block(matchDeleteIpaccesscontrollistmapping(id), function () {
    verifyIpaccesscontrollistmappingUpdated(id);
  });
  deleteIpaccesscontrollistmapping(x.id);
  const e_del = waitForIpaccesscontrollistmappingDeleted(id);
  block(matchAddIpaccesscontrollistmapping(id), function () {
    verifyIpaccesscontrollistmappingDoesNotExist(id);
  });
});

bthread("IpaccesscontrollistmappingsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaccesscontrollistmappingsjson(x.id);
  const e_add = waitForIpaccesscontrollistmappingsjsonAdded(id);
  block(matchDeleteIpaccesscontrollistmappingsjson(id), function () {
    verifyIpaccesscontrollistmappingsjsonExists(id);
  });
  updateIpaccesscontrollistmappingsjson(x.id);
  updateIpaccesscontrollistmappingsjson(x.id);
  const e_upd = waitForIpaccesscontrollistmappingsjsonUpdated(id);
  block(matchDeleteIpaccesscontrollistmappingsjson(id), function () {
    verifyIpaccesscontrollistmappingsjsonUpdated(id);
  });
  deleteIpaccesscontrollistmappingsjson(x.id);
  const e_del = waitForIpaccesscontrollistmappingsjsonDeleted(id);
  block(matchAddIpaccesscontrollistmappingsjson(id), function () {
    verifyIpaccesscontrollistmappingsjsonDoesNotExist(id);
  });
});

bthread("IpaccesscontrollistsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaccesscontrollistsjson(x.id);
  const e_add = waitForIpaccesscontrollistsjsonAdded(id);
  block(matchDeleteIpaccesscontrollistsjson(id), function () {
    verifyIpaccesscontrollistsjsonExists(id);
  });
  updateIpaccesscontrollistsjson(x.id);
  updateIpaccesscontrollistsjson(x.id);
  const e_upd = waitForIpaccesscontrollistsjsonUpdated(id);
  block(matchDeleteIpaccesscontrollistsjson(id), function () {
    verifyIpaccesscontrollistsjsonUpdated(id);
  });
  deleteIpaccesscontrollistsjson(x.id);
  const e_del = waitForIpaccesscontrollistsjsonDeleted(id);
  block(matchAddIpaccesscontrollistsjson(id), function () {
    verifyIpaccesscontrollistsjsonDoesNotExist(id);
  });
});

bthread("IpaddressLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaddress(x.id);
  const e_add = waitForIpaddressAdded(id);
  block(matchDeleteIpaddress(id), function () {
    verifyIpaddressExists(id);
  });
  updateIpaddress(x.id);
  updateIpaddress(x.id);
  const e_upd = waitForIpaddressUpdated(id);
  block(matchDeleteIpaddress(id), function () {
    verifyIpaddressUpdated(id);
  });
  deleteIpaddress(x.id);
  const e_del = waitForIpaddressDeleted(id);
  block(matchAddIpaddress(id), function () {
    verifyIpaddressDoesNotExist(id);
  });
});

bthread("IpaddressesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIpaddressesjson(x.id);
  const e_add = waitForIpaddressesjsonAdded(id);
  block(matchDeleteIpaddressesjson(id), function () {
    verifyIpaddressesjsonExists(id);
  });
  updateIpaddressesjson(x.id);
  updateIpaddressesjson(x.id);
  const e_upd = waitForIpaddressesjsonUpdated(id);
  block(matchDeleteIpaddressesjson(id), function () {
    verifyIpaddressesjsonUpdated(id);
  });
  deleteIpaddressesjson(x.id);
  const e_del = waitForIpaddressesjsonDeleted(id);
  block(matchAddIpaddressesjson(id), function () {
    verifyIpaddressesjsonDoesNotExist(id);
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

bthread("KeysjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addKeysjson(x.id);
  const e_add = waitForKeysjsonAdded(id);
  block(matchDeleteKeysjson(id), function () {
    verifyKeysjsonExists(id);
  });
  updateKeysjson(x.id);
  updateKeysjson(x.id);
  const e_upd = waitForKeysjsonUpdated(id);
  block(matchDeleteKeysjson(id), function () {
    verifyKeysjsonUpdated(id);
  });
  deleteKeysjson(x.id);
  const e_del = waitForKeysjsonDeleted(id);
  block(matchAddKeysjson(id), function () {
    verifyKeysjsonDoesNotExist(id);
  });
});

bthread("LastmonthjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLastmonthjson(x.id);
  const e_add = waitForLastmonthjsonAdded(id);
  block(matchDeleteLastmonthjson(id), function () {
    verifyLastmonthjsonExists(id);
  });
  updateLastmonthjson(x.id);
  updateLastmonthjson(x.id);
  const e_upd = waitForLastmonthjsonUpdated(id);
  block(matchDeleteLastmonthjson(id), function () {
    verifyLastmonthjsonUpdated(id);
  });
  deleteLastmonthjson(x.id);
  const e_del = waitForLastmonthjsonDeleted(id);
  block(matchAddLastmonthjson(id), function () {
    verifyLastmonthjsonDoesNotExist(id);
  });
});

bthread("LocaljsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLocaljson(x.id);
  const e_add = waitForLocaljsonAdded(id);
  block(matchDeleteLocaljson(id), function () {
    verifyLocaljsonExists(id);
  });
  updateLocaljson(x.id);
  updateLocaljson(x.id);
  const e_upd = waitForLocaljsonUpdated(id);
  block(matchDeleteLocaljson(id), function () {
    verifyLocaljsonUpdated(id);
  });
  deleteLocaljson(x.id);
  const e_del = waitForLocaljsonDeleted(id);
  block(matchAddLocaljson(id), function () {
    verifyLocaljsonDoesNotExist(id);
  });
});

bthread("MachinetomachinejsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMachinetomachinejson(x.id);
  const e_add = waitForMachinetomachinejsonAdded(id);
  block(matchDeleteMachinetomachinejson(id), function () {
    verifyMachinetomachinejsonExists(id);
  });
  updateMachinetomachinejson(x.id);
  updateMachinetomachinejson(x.id);
  const e_upd = waitForMachinetomachinejsonUpdated(id);
  block(matchDeleteMachinetomachinejson(id), function () {
    verifyMachinetomachinejsonUpdated(id);
  });
  deleteMachinetomachinejson(x.id);
  const e_del = waitForMachinetomachinejsonDeleted(id);
  block(matchAddMachinetomachinejson(id), function () {
    verifyMachinetomachinejsonDoesNotExist(id);
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

bthread("MediajsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMediajson(x.id);
  const e_add = waitForMediajsonAdded(id);
  block(matchDeleteMediajson(id), function () {
    verifyMediajsonExists(id);
  });
  updateMediajson(x.id);
  updateMediajson(x.id);
  const e_upd = waitForMediajsonUpdated(id);
  block(matchDeleteMediajson(id), function () {
    verifyMediajsonUpdated(id);
  });
  deleteMediajson(x.id);
  const e_del = waitForMediajsonDeleted(id);
  block(matchAddMediajson(id), function () {
    verifyMediajsonDoesNotExist(id);
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

bthread("MembersjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersjson(x.id);
  const e_add = waitForMembersjsonAdded(id);
  block(matchDeleteMembersjson(id), function () {
    verifyMembersjsonExists(id);
  });
  updateMembersjson(x.id);
  updateMembersjson(x.id);
  const e_upd = waitForMembersjsonUpdated(id);
  block(matchDeleteMembersjson(id), function () {
    verifyMembersjsonUpdated(id);
  });
  deleteMembersjson(x.id);
  const e_del = waitForMembersjsonDeleted(id);
  block(matchAddMembersjson(id), function () {
    verifyMembersjsonDoesNotExist(id);
  });
});

bthread("MessageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessage(x.id);
  const e_add = waitForMessageAdded(id);
  block(matchDeleteMessage(id), function () {
    verifyMessageExists(id);
  });
  updateMessage(x.id);
  updateMessage(x.id);
  const e_upd = waitForMessageUpdated(id);
  block(matchDeleteMessage(id), function () {
    verifyMessageUpdated(id);
  });
  deleteMessage(x.id);
  const e_del = waitForMessageDeleted(id);
  block(matchAddMessage(id), function () {
    verifyMessageDoesNotExist(id);
  });
});

bthread("MessagesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessagesjson(x.id);
  const e_add = waitForMessagesjsonAdded(id);
  block(matchDeleteMessagesjson(id), function () {
    verifyMessagesjsonExists(id);
  });
  updateMessagesjson(x.id);
  updateMessagesjson(x.id);
  const e_upd = waitForMessagesjsonUpdated(id);
  block(matchDeleteMessagesjson(id), function () {
    verifyMessagesjsonUpdated(id);
  });
  deleteMessagesjson(x.id);
  const e_del = waitForMessagesjsonDeleted(id);
  block(matchAddMessagesjson(id), function () {
    verifyMessagesjsonDoesNotExist(id);
  });
});

bthread("MobilejsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMobilejson(x.id);
  const e_add = waitForMobilejsonAdded(id);
  block(matchDeleteMobilejson(id), function () {
    verifyMobilejsonExists(id);
  });
  updateMobilejson(x.id);
  updateMobilejson(x.id);
  const e_upd = waitForMobilejsonUpdated(id);
  block(matchDeleteMobilejson(id), function () {
    verifyMobilejsonUpdated(id);
  });
  deleteMobilejson(x.id);
  const e_del = waitForMobilejsonDeleted(id);
  block(matchAddMobilejson(id), function () {
    verifyMobilejsonDoesNotExist(id);
  });
});

bthread("MonthlyjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMonthlyjson(x.id);
  const e_add = waitForMonthlyjsonAdded(id);
  block(matchDeleteMonthlyjson(id), function () {
    verifyMonthlyjsonExists(id);
  });
  updateMonthlyjson(x.id);
  updateMonthlyjson(x.id);
  const e_upd = waitForMonthlyjsonUpdated(id);
  block(matchDeleteMonthlyjson(id), function () {
    verifyMonthlyjsonUpdated(id);
  });
  deleteMonthlyjson(x.id);
  const e_del = waitForMonthlyjsonDeleted(id);
  block(matchAddMonthlyjson(id), function () {
    verifyMonthlyjsonDoesNotExist(id);
  });
});

bthread("NationaljsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNationaljson(x.id);
  const e_add = waitForNationaljsonAdded(id);
  block(matchDeleteNationaljson(id), function () {
    verifyNationaljsonExists(id);
  });
  updateNationaljson(x.id);
  updateNationaljson(x.id);
  const e_upd = waitForNationaljsonUpdated(id);
  block(matchDeleteNationaljson(id), function () {
    verifyNationaljsonUpdated(id);
  });
  deleteNationaljson(x.id);
  const e_del = waitForNationaljsonDeleted(id);
  block(matchAddNationaljson(id), function () {
    verifyNationaljsonDoesNotExist(id);
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

bthread("NotificationsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotificationsjson(x.id);
  const e_add = waitForNotificationsjsonAdded(id);
  block(matchDeleteNotificationsjson(id), function () {
    verifyNotificationsjsonExists(id);
  });
  updateNotificationsjson(x.id);
  updateNotificationsjson(x.id);
  const e_upd = waitForNotificationsjsonUpdated(id);
  block(matchDeleteNotificationsjson(id), function () {
    verifyNotificationsjsonUpdated(id);
  });
  deleteNotificationsjson(x.id);
  const e_del = waitForNotificationsjsonDeleted(id);
  block(matchAddNotificationsjson(id), function () {
    verifyNotificationsjsonDoesNotExist(id);
  });
});

bthread("OutgoingcalleridLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOutgoingcallerid(x.id);
  const e_add = waitForOutgoingcalleridAdded(id);
  block(matchDeleteOutgoingcallerid(id), function () {
    verifyOutgoingcalleridExists(id);
  });
  updateOutgoingcallerid(x.id);
  updateOutgoingcallerid(x.id);
  const e_upd = waitForOutgoingcalleridUpdated(id);
  block(matchDeleteOutgoingcallerid(id), function () {
    verifyOutgoingcalleridUpdated(id);
  });
  deleteOutgoingcallerid(x.id);
  const e_del = waitForOutgoingcalleridDeleted(id);
  block(matchAddOutgoingcallerid(id), function () {
    verifyOutgoingcalleridDoesNotExist(id);
  });
});

bthread("OutgoingcalleridsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOutgoingcalleridsjson(x.id);
  const e_add = waitForOutgoingcalleridsjsonAdded(id);
  block(matchDeleteOutgoingcalleridsjson(id), function () {
    verifyOutgoingcalleridsjsonExists(id);
  });
  updateOutgoingcalleridsjson(x.id);
  updateOutgoingcalleridsjson(x.id);
  const e_upd = waitForOutgoingcalleridsjsonUpdated(id);
  block(matchDeleteOutgoingcalleridsjson(id), function () {
    verifyOutgoingcalleridsjsonUpdated(id);
  });
  deleteOutgoingcalleridsjson(x.id);
  const e_del = waitForOutgoingcalleridsjsonDeleted(id);
  block(matchAddOutgoingcalleridsjson(id), function () {
    verifyOutgoingcalleridsjsonDoesNotExist(id);
  });
});

bthread("ParticipantLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addParticipant(x.id);
  const e_add = waitForParticipantAdded(id);
  block(matchDeleteParticipant(id), function () {
    verifyParticipantExists(id);
  });
  updateParticipant(x.id);
  updateParticipant(x.id);
  const e_upd = waitForParticipantUpdated(id);
  block(matchDeleteParticipant(id), function () {
    verifyParticipantUpdated(id);
  });
  deleteParticipant(x.id);
  const e_del = waitForParticipantDeleted(id);
  block(matchAddParticipant(id), function () {
    verifyParticipantDoesNotExist(id);
  });
});

bthread("ParticipantsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addParticipantsjson(x.id);
  const e_add = waitForParticipantsjsonAdded(id);
  block(matchDeleteParticipantsjson(id), function () {
    verifyParticipantsjsonExists(id);
  });
  updateParticipantsjson(x.id);
  updateParticipantsjson(x.id);
  const e_upd = waitForParticipantsjsonUpdated(id);
  block(matchDeleteParticipantsjson(id), function () {
    verifyParticipantsjsonUpdated(id);
  });
  deleteParticipantsjson(x.id);
  const e_del = waitForParticipantsjsonDeleted(id);
  block(matchAddParticipantsjson(id), function () {
    verifyParticipantsjsonDoesNotExist(id);
  });
});

bthread("PayloadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPayload(x.id);
  const e_add = waitForPayloadAdded(id);
  block(matchDeletePayload(id), function () {
    verifyPayloadExists(id);
  });
  updatePayload(x.id);
  updatePayload(x.id);
  const e_upd = waitForPayloadUpdated(id);
  block(matchDeletePayload(id), function () {
    verifyPayloadUpdated(id);
  });
  deletePayload(x.id);
  const e_del = waitForPayloadDeleted(id);
  block(matchAddPayload(id), function () {
    verifyPayloadDoesNotExist(id);
  });
});

bthread("PayloadsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPayloadsjson(x.id);
  const e_add = waitForPayloadsjsonAdded(id);
  block(matchDeletePayloadsjson(id), function () {
    verifyPayloadsjsonExists(id);
  });
  updatePayloadsjson(x.id);
  updatePayloadsjson(x.id);
  const e_upd = waitForPayloadsjsonUpdated(id);
  block(matchDeletePayloadsjson(id), function () {
    verifyPayloadsjsonUpdated(id);
  });
  deletePayloadsjson(x.id);
  const e_del = waitForPayloadsjsonDeleted(id);
  block(matchAddPayloadsjson(id), function () {
    verifyPayloadsjsonDoesNotExist(id);
  });
});

bthread("PaymentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPayment(x.id);
  const e_add = waitForPaymentAdded(id);
  block(matchDeletePayment(id), function () {
    verifyPaymentExists(id);
  });
  updatePayment(x.id);
  updatePayment(x.id);
  const e_upd = waitForPaymentUpdated(id);
  block(matchDeletePayment(id), function () {
    verifyPaymentUpdated(id);
  });
  deletePayment(x.id);
  const e_del = waitForPaymentDeleted(id);
  block(matchAddPayment(id), function () {
    verifyPaymentDoesNotExist(id);
  });
});

bthread("PaymentsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPaymentsjson(x.id);
  const e_add = waitForPaymentsjsonAdded(id);
  block(matchDeletePaymentsjson(id), function () {
    verifyPaymentsjsonExists(id);
  });
  updatePaymentsjson(x.id);
  updatePaymentsjson(x.id);
  const e_upd = waitForPaymentsjsonUpdated(id);
  block(matchDeletePaymentsjson(id), function () {
    verifyPaymentsjsonUpdated(id);
  });
  deletePaymentsjson(x.id);
  const e_del = waitForPaymentsjsonDeleted(id);
  block(matchAddPaymentsjson(id), function () {
    verifyPaymentsjsonDoesNotExist(id);
  });
});

bthread("QueueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addQueue(x.id);
  const e_add = waitForQueueAdded(id);
  block(matchDeleteQueue(id), function () {
    verifyQueueExists(id);
  });
  updateQueue(x.id);
  updateQueue(x.id);
  const e_upd = waitForQueueUpdated(id);
  block(matchDeleteQueue(id), function () {
    verifyQueueUpdated(id);
  });
  deleteQueue(x.id);
  const e_del = waitForQueueDeleted(id);
  block(matchAddQueue(id), function () {
    verifyQueueDoesNotExist(id);
  });
});

bthread("QueuesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addQueuesjson(x.id);
  const e_add = waitForQueuesjsonAdded(id);
  block(matchDeleteQueuesjson(id), function () {
    verifyQueuesjsonExists(id);
  });
  updateQueuesjson(x.id);
  updateQueuesjson(x.id);
  const e_upd = waitForQueuesjsonUpdated(id);
  block(matchDeleteQueuesjson(id), function () {
    verifyQueuesjsonUpdated(id);
  });
  deleteQueuesjson(x.id);
  const e_del = waitForQueuesjsonDeleted(id);
  block(matchAddQueuesjson(id), function () {
    verifyQueuesjsonDoesNotExist(id);
  });
});

bthread("RecordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecord(x.id);
  const e_add = waitForRecordAdded(id);
  block(matchDeleteRecord(id), function () {
    verifyRecordExists(id);
  });
  updateRecord(x.id);
  updateRecord(x.id);
  const e_upd = waitForRecordUpdated(id);
  block(matchDeleteRecord(id), function () {
    verifyRecordUpdated(id);
  });
  deleteRecord(x.id);
  const e_del = waitForRecordDeleted(id);
  block(matchAddRecord(id), function () {
    verifyRecordDoesNotExist(id);
  });
});

bthread("RecordingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecording(x.id);
  const e_add = waitForRecordingAdded(id);
  block(matchDeleteRecording(id), function () {
    verifyRecordingExists(id);
  });
  updateRecording(x.id);
  updateRecording(x.id);
  const e_upd = waitForRecordingUpdated(id);
  block(matchDeleteRecording(id), function () {
    verifyRecordingUpdated(id);
  });
  deleteRecording(x.id);
  const e_del = waitForRecordingDeleted(id);
  block(matchAddRecording(id), function () {
    verifyRecordingDoesNotExist(id);
  });
});

bthread("RecordingsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecordingsjson(x.id);
  const e_add = waitForRecordingsjsonAdded(id);
  block(matchDeleteRecordingsjson(id), function () {
    verifyRecordingsjsonExists(id);
  });
  updateRecordingsjson(x.id);
  updateRecordingsjson(x.id);
  const e_upd = waitForRecordingsjsonUpdated(id);
  block(matchDeleteRecordingsjson(id), function () {
    verifyRecordingsjsonUpdated(id);
  });
  deleteRecordingsjson(x.id);
  const e_del = waitForRecordingsjsonDeleted(id);
  block(matchAddRecordingsjson(id), function () {
    verifyRecordingsjsonDoesNotExist(id);
  });
});

bthread("RecordsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecordsjson(x.id);
  const e_add = waitForRecordsjsonAdded(id);
  block(matchDeleteRecordsjson(id), function () {
    verifyRecordsjsonExists(id);
  });
  updateRecordsjson(x.id);
  updateRecordsjson(x.id);
  const e_upd = waitForRecordsjsonUpdated(id);
  block(matchDeleteRecordsjson(id), function () {
    verifyRecordsjsonUpdated(id);
  });
  deleteRecordsjson(x.id);
  const e_del = waitForRecordsjsonDeleted(id);
  block(matchAddRecordsjson(id), function () {
    verifyRecordsjsonDoesNotExist(id);
  });
});

bthread("RegistrationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRegistration(x.id);
  const e_add = waitForRegistrationAdded(id);
  block(matchDeleteRegistration(id), function () {
    verifyRegistrationExists(id);
  });
  updateRegistration(x.id);
  updateRegistration(x.id);
  const e_upd = waitForRegistrationUpdated(id);
  block(matchDeleteRegistration(id), function () {
    verifyRegistrationUpdated(id);
  });
  deleteRegistration(x.id);
  const e_del = waitForRegistrationDeleted(id);
  block(matchAddRegistration(id), function () {
    verifyRegistrationDoesNotExist(id);
  });
});

bthread("SharedcostjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSharedcostjson(x.id);
  const e_add = waitForSharedcostjsonAdded(id);
  block(matchDeleteSharedcostjson(id), function () {
    verifySharedcostjsonExists(id);
  });
  updateSharedcostjson(x.id);
  updateSharedcostjson(x.id);
  const e_upd = waitForSharedcostjsonUpdated(id);
  block(matchDeleteSharedcostjson(id), function () {
    verifySharedcostjsonUpdated(id);
  });
  deleteSharedcostjson(x.id);
  const e_del = waitForSharedcostjsonDeleted(id);
  block(matchAddSharedcostjson(id), function () {
    verifySharedcostjsonDoesNotExist(id);
  });
});

bthread("ShortcodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShortcode(x.id);
  const e_add = waitForShortcodeAdded(id);
  block(matchDeleteShortcode(id), function () {
    verifyShortcodeExists(id);
  });
  updateShortcode(x.id);
  updateShortcode(x.id);
  const e_upd = waitForShortcodeUpdated(id);
  block(matchDeleteShortcode(id), function () {
    verifyShortcodeUpdated(id);
  });
  deleteShortcode(x.id);
  const e_del = waitForShortcodeDeleted(id);
  block(matchAddShortcode(id), function () {
    verifyShortcodeDoesNotExist(id);
  });
});

bthread("ShortcodesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShortcodesjson(x.id);
  const e_add = waitForShortcodesjsonAdded(id);
  block(matchDeleteShortcodesjson(id), function () {
    verifyShortcodesjsonExists(id);
  });
  updateShortcodesjson(x.id);
  updateShortcodesjson(x.id);
  const e_upd = waitForShortcodesjsonUpdated(id);
  block(matchDeleteShortcodesjson(id), function () {
    verifyShortcodesjsonUpdated(id);
  });
  deleteShortcodesjson(x.id);
  const e_del = waitForShortcodesjsonDeleted(id);
  block(matchAddShortcodesjson(id), function () {
    verifyShortcodesjsonDoesNotExist(id);
  });
});

bthread("SidjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSidjson(x.id);
  const e_add = waitForSidjsonAdded(id);
  block(matchDeleteSidjson(id), function () {
    verifySidjsonExists(id);
  });
  updateSidjson(x.id);
  updateSidjson(x.id);
  const e_upd = waitForSidjsonUpdated(id);
  block(matchDeleteSidjson(id), function () {
    verifySidjsonUpdated(id);
  });
  deleteSidjson(x.id);
  const e_del = waitForSidjsonDeleted(id);
  block(matchAddSidjson(id), function () {
    verifySidjsonDoesNotExist(id);
  });
});

bthread("SigningkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSigningkey(x.id);
  const e_add = waitForSigningkeyAdded(id);
  block(matchDeleteSigningkey(id), function () {
    verifySigningkeyExists(id);
  });
  updateSigningkey(x.id);
  updateSigningkey(x.id);
  const e_upd = waitForSigningkeyUpdated(id);
  block(matchDeleteSigningkey(id), function () {
    verifySigningkeyUpdated(id);
  });
  deleteSigningkey(x.id);
  const e_del = waitForSigningkeyDeleted(id);
  block(matchAddSigningkey(id), function () {
    verifySigningkeyDoesNotExist(id);
  });
});

bthread("SigningkeysjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSigningkeysjson(x.id);
  const e_add = waitForSigningkeysjsonAdded(id);
  block(matchDeleteSigningkeysjson(id), function () {
    verifySigningkeysjsonExists(id);
  });
  updateSigningkeysjson(x.id);
  updateSigningkeysjson(x.id);
  const e_upd = waitForSigningkeysjsonUpdated(id);
  block(matchDeleteSigningkeysjson(id), function () {
    verifySigningkeysjsonUpdated(id);
  });
  deleteSigningkeysjson(x.id);
  const e_del = waitForSigningkeysjsonDeleted(id);
  block(matchAddSigningkeysjson(id), function () {
    verifySigningkeysjsonDoesNotExist(id);
  });
});

bthread("SipLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSip(x.id);
  const e_add = waitForSipAdded(id);
  block(matchDeleteSip(id), function () {
    verifySipExists(id);
  });
  updateSip(x.id);
  updateSip(x.id);
  const e_upd = waitForSipUpdated(id);
  block(matchDeleteSip(id), function () {
    verifySipUpdated(id);
  });
  deleteSip(x.id);
  const e_del = waitForSipDeleted(id);
  block(matchAddSip(id), function () {
    verifySipDoesNotExist(id);
  });
});

bthread("SiprecLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSiprec(x.id);
  const e_add = waitForSiprecAdded(id);
  block(matchDeleteSiprec(id), function () {
    verifySiprecExists(id);
  });
  updateSiprec(x.id);
  updateSiprec(x.id);
  const e_upd = waitForSiprecUpdated(id);
  block(matchDeleteSiprec(id), function () {
    verifySiprecUpdated(id);
  });
  deleteSiprec(x.id);
  const e_del = waitForSiprecDeleted(id);
  block(matchAddSiprec(id), function () {
    verifySiprecDoesNotExist(id);
  });
});

bthread("SiprecjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSiprecjson(x.id);
  const e_add = waitForSiprecjsonAdded(id);
  block(matchDeleteSiprecjson(id), function () {
    verifySiprecjsonExists(id);
  });
  updateSiprecjson(x.id);
  updateSiprecjson(x.id);
  const e_upd = waitForSiprecjsonUpdated(id);
  block(matchDeleteSiprecjson(id), function () {
    verifySiprecjsonUpdated(id);
  });
  deleteSiprecjson(x.id);
  const e_del = waitForSiprecjsonDeleted(id);
  block(matchAddSiprecjson(id), function () {
    verifySiprecjsonDoesNotExist(id);
  });
});

bthread("SmLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSm(x.id);
  const e_add = waitForSmAdded(id);
  block(matchDeleteSm(id), function () {
    verifySmExists(id);
  });
  updateSm(x.id);
  updateSm(x.id);
  const e_upd = waitForSmUpdated(id);
  block(matchDeleteSm(id), function () {
    verifySmUpdated(id);
  });
  deleteSm(x.id);
  const e_del = waitForSmDeleted(id);
  block(matchAddSm(id), function () {
    verifySmDoesNotExist(id);
  });
});

bthread("StreamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStream(x.id);
  const e_add = waitForStreamAdded(id);
  block(matchDeleteStream(id), function () {
    verifyStreamExists(id);
  });
  updateStream(x.id);
  updateStream(x.id);
  const e_upd = waitForStreamUpdated(id);
  block(matchDeleteStream(id), function () {
    verifyStreamUpdated(id);
  });
  deleteStream(x.id);
  const e_del = waitForStreamDeleted(id);
  block(matchAddStream(id), function () {
    verifyStreamDoesNotExist(id);
  });
});

bthread("StreamsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStreamsjson(x.id);
  const e_add = waitForStreamsjsonAdded(id);
  block(matchDeleteStreamsjson(id), function () {
    verifyStreamsjsonExists(id);
  });
  updateStreamsjson(x.id);
  updateStreamsjson(x.id);
  const e_upd = waitForStreamsjsonUpdated(id);
  block(matchDeleteStreamsjson(id), function () {
    verifyStreamsjsonUpdated(id);
  });
  deleteStreamsjson(x.id);
  const e_del = waitForStreamsjsonDeleted(id);
  block(matchAddStreamsjson(id), function () {
    verifyStreamsjsonDoesNotExist(id);
  });
});

bthread("ThismonthjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addThismonthjson(x.id);
  const e_add = waitForThismonthjsonAdded(id);
  block(matchDeleteThismonthjson(id), function () {
    verifyThismonthjsonExists(id);
  });
  updateThismonthjson(x.id);
  updateThismonthjson(x.id);
  const e_upd = waitForThismonthjsonUpdated(id);
  block(matchDeleteThismonthjson(id), function () {
    verifyThismonthjsonUpdated(id);
  });
  deleteThismonthjson(x.id);
  const e_del = waitForThismonthjsonDeleted(id);
  block(matchAddThismonthjson(id), function () {
    verifyThismonthjsonDoesNotExist(id);
  });
});

bthread("TodayjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTodayjson(x.id);
  const e_add = waitForTodayjsonAdded(id);
  block(matchDeleteTodayjson(id), function () {
    verifyTodayjsonExists(id);
  });
  updateTodayjson(x.id);
  updateTodayjson(x.id);
  const e_upd = waitForTodayjsonUpdated(id);
  block(matchDeleteTodayjson(id), function () {
    verifyTodayjsonUpdated(id);
  });
  deleteTodayjson(x.id);
  const e_del = waitForTodayjsonDeleted(id);
  block(matchAddTodayjson(id), function () {
    verifyTodayjsonDoesNotExist(id);
  });
});

bthread("TokensjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTokensjson(x.id);
  const e_add = waitForTokensjsonAdded(id);
  block(matchDeleteTokensjson(id), function () {
    verifyTokensjsonExists(id);
  });
  updateTokensjson(x.id);
  updateTokensjson(x.id);
  const e_upd = waitForTokensjsonUpdated(id);
  block(matchDeleteTokensjson(id), function () {
    verifyTokensjsonUpdated(id);
  });
  deleteTokensjson(x.id);
  const e_del = waitForTokensjsonDeleted(id);
  block(matchAddTokensjson(id), function () {
    verifyTokensjsonDoesNotExist(id);
  });
});

bthread("TollfreejsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTollfreejson(x.id);
  const e_add = waitForTollfreejsonAdded(id);
  block(matchDeleteTollfreejson(id), function () {
    verifyTollfreejsonExists(id);
  });
  updateTollfreejson(x.id);
  updateTollfreejson(x.id);
  const e_upd = waitForTollfreejsonUpdated(id);
  block(matchDeleteTollfreejson(id), function () {
    verifyTollfreejsonUpdated(id);
  });
  deleteTollfreejson(x.id);
  const e_del = waitForTollfreejsonDeleted(id);
  block(matchAddTollfreejson(id), function () {
    verifyTollfreejsonDoesNotExist(id);
  });
});

bthread("TranscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTranscription(x.id);
  const e_add = waitForTranscriptionAdded(id);
  block(matchDeleteTranscription(id), function () {
    verifyTranscriptionExists(id);
  });
  updateTranscription(x.id);
  updateTranscription(x.id);
  const e_upd = waitForTranscriptionUpdated(id);
  block(matchDeleteTranscription(id), function () {
    verifyTranscriptionUpdated(id);
  });
  deleteTranscription(x.id);
  const e_del = waitForTranscriptionDeleted(id);
  block(matchAddTranscription(id), function () {
    verifyTranscriptionDoesNotExist(id);
  });
});

bthread("TranscriptionsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTranscriptionsjson(x.id);
  const e_add = waitForTranscriptionsjsonAdded(id);
  block(matchDeleteTranscriptionsjson(id), function () {
    verifyTranscriptionsjsonExists(id);
  });
  updateTranscriptionsjson(x.id);
  updateTranscriptionsjson(x.id);
  const e_upd = waitForTranscriptionsjsonUpdated(id);
  block(matchDeleteTranscriptionsjson(id), function () {
    verifyTranscriptionsjsonUpdated(id);
  });
  deleteTranscriptionsjson(x.id);
  const e_del = waitForTranscriptionsjsonDeleted(id);
  block(matchAddTranscriptionsjson(id), function () {
    verifyTranscriptionsjsonDoesNotExist(id);
  });
});

bthread("TriggerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTrigger(x.id);
  const e_add = waitForTriggerAdded(id);
  block(matchDeleteTrigger(id), function () {
    verifyTriggerExists(id);
  });
  updateTrigger(x.id);
  updateTrigger(x.id);
  const e_upd = waitForTriggerUpdated(id);
  block(matchDeleteTrigger(id), function () {
    verifyTriggerUpdated(id);
  });
  deleteTrigger(x.id);
  const e_del = waitForTriggerDeleted(id);
  block(matchAddTrigger(id), function () {
    verifyTriggerDoesNotExist(id);
  });
});

bthread("TriggersjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTriggersjson(x.id);
  const e_add = waitForTriggersjsonAdded(id);
  block(matchDeleteTriggersjson(id), function () {
    verifyTriggersjsonExists(id);
  });
  updateTriggersjson(x.id);
  updateTriggersjson(x.id);
  const e_upd = waitForTriggersjsonUpdated(id);
  block(matchDeleteTriggersjson(id), function () {
    verifyTriggersjsonUpdated(id);
  });
  deleteTriggersjson(x.id);
  const e_del = waitForTriggersjsonDeleted(id);
  block(matchAddTriggersjson(id), function () {
    verifyTriggersjsonDoesNotExist(id);
  });
});

bthread("UsageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsage(x.id);
  const e_add = waitForUsageAdded(id);
  block(matchDeleteUsage(id), function () {
    verifyUsageExists(id);
  });
  updateUsage(x.id);
  updateUsage(x.id);
  const e_upd = waitForUsageUpdated(id);
  block(matchDeleteUsage(id), function () {
    verifyUsageUpdated(id);
  });
  deleteUsage(x.id);
  const e_del = waitForUsageDeleted(id);
  block(matchAddUsage(id), function () {
    verifyUsageDoesNotExist(id);
  });
});

bthread("UserdefinedmessagesjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserdefinedmessagesjson(x.id);
  const e_add = waitForUserdefinedmessagesjsonAdded(id);
  block(matchDeleteUserdefinedmessagesjson(id), function () {
    verifyUserdefinedmessagesjsonExists(id);
  });
  updateUserdefinedmessagesjson(x.id);
  updateUserdefinedmessagesjson(x.id);
  const e_upd = waitForUserdefinedmessagesjsonUpdated(id);
  block(matchDeleteUserdefinedmessagesjson(id), function () {
    verifyUserdefinedmessagesjsonUpdated(id);
  });
  deleteUserdefinedmessagesjson(x.id);
  const e_del = waitForUserdefinedmessagesjsonDeleted(id);
  block(matchAddUserdefinedmessagesjson(id), function () {
    verifyUserdefinedmessagesjsonDoesNotExist(id);
  });
});

bthread("UserdefinedmessagesubscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserdefinedmessagesubscription(x.id);
  const e_add = waitForUserdefinedmessagesubscriptionAdded(id);
  block(matchDeleteUserdefinedmessagesubscription(id), function () {
    verifyUserdefinedmessagesubscriptionExists(id);
  });
  updateUserdefinedmessagesubscription(x.id);
  updateUserdefinedmessagesubscription(x.id);
  const e_upd = waitForUserdefinedmessagesubscriptionUpdated(id);
  block(matchDeleteUserdefinedmessagesubscription(id), function () {
    verifyUserdefinedmessagesubscriptionUpdated(id);
  });
  deleteUserdefinedmessagesubscription(x.id);
  const e_del = waitForUserdefinedmessagesubscriptionDeleted(id);
  block(matchAddUserdefinedmessagesubscription(id), function () {
    verifyUserdefinedmessagesubscriptionDoesNotExist(id);
  });
});

bthread("UserdefinedmessagesubscriptionsjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserdefinedmessagesubscriptionsjson(x.id);
  const e_add = waitForUserdefinedmessagesubscriptionsjsonAdded(id);
  block(matchDeleteUserdefinedmessagesubscriptionsjson(id), function () {
    verifyUserdefinedmessagesubscriptionsjsonExists(id);
  });
  updateUserdefinedmessagesubscriptionsjson(x.id);
  updateUserdefinedmessagesubscriptionsjson(x.id);
  const e_upd = waitForUserdefinedmessagesubscriptionsjsonUpdated(id);
  block(matchDeleteUserdefinedmessagesubscriptionsjson(id), function () {
    verifyUserdefinedmessagesubscriptionsjsonUpdated(id);
  });
  deleteUserdefinedmessagesubscriptionsjson(x.id);
  const e_del = waitForUserdefinedmessagesubscriptionsjsonDeleted(id);
  block(matchAddUserdefinedmessagesubscriptionsjson(id), function () {
    verifyUserdefinedmessagesubscriptionsjsonDoesNotExist(id);
  });
});

bthread("VoipjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVoipjson(x.id);
  const e_add = waitForVoipjsonAdded(id);
  block(matchDeleteVoipjson(id), function () {
    verifyVoipjsonExists(id);
  });
  updateVoipjson(x.id);
  updateVoipjson(x.id);
  const e_upd = waitForVoipjsonUpdated(id);
  block(matchDeleteVoipjson(id), function () {
    verifyVoipjsonUpdated(id);
  });
  deleteVoipjson(x.id);
  const e_del = waitForVoipjsonDeleted(id);
  block(matchAddVoipjson(id), function () {
    verifyVoipjsonDoesNotExist(id);
  });
});

bthread("YearlyjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addYearlyjson(x.id);
  const e_add = waitForYearlyjsonAdded(id);
  block(matchDeleteYearlyjson(id), function () {
    verifyYearlyjsonExists(id);
  });
  updateYearlyjson(x.id);
  updateYearlyjson(x.id);
  const e_upd = waitForYearlyjsonUpdated(id);
  block(matchDeleteYearlyjson(id), function () {
    verifyYearlyjsonUpdated(id);
  });
  deleteYearlyjson(x.id);
  const e_del = waitForYearlyjsonDeleted(id);
  block(matchAddYearlyjson(id), function () {
    verifyYearlyjsonDoesNotExist(id);
  });
});

bthread("YesterdayjsonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addYesterdayjson(x.id);
  const e_add = waitForYesterdayjsonAdded(id);
  block(matchDeleteYesterdayjson(id), function () {
    verifyYesterdayjsonExists(id);
  });
  updateYesterdayjson(x.id);
  updateYesterdayjson(x.id);
  const e_upd = waitForYesterdayjsonUpdated(id);
  block(matchDeleteYesterdayjson(id), function () {
    verifyYesterdayjsonUpdated(id);
  });
  deleteYesterdayjson(x.id);
  const e_del = waitForYesterdayjsonDeleted(id);
  block(matchAddYesterdayjson(id), function () {
    verifyYesterdayjsonDoesNotExist(id);
  });
});

// ===== PASSIVE ASSERTIONS =====

bthread("20100401 create verification", function () {
  const e = waitForAny20100401Added();
  const k = canonKey(_pk(e, "id"));
  block(matchDelete20100401(k, ANY), function () {
    verify20100401Exists(k);
  });
});

bthread("20100401 update verification", function () {
  const e = waitForAny20100401Updated();
  const k = canonKey(_pk(e, "id"));
  block(matchDelete20100401(k, ANY), function () {
    verify20100401Updated(k);
  });
});

bthread("20100401 delete verification", function () {
  const e = waitForAny20100401Deleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAdd20100401(k, ANY), function () {
    verify20100401DoesNotExist(k);
  });
});

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccount(k, ANY), function () {
    verifyAccountExists(k);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccount(k, ANY), function () {
    verifyAccountUpdated(k);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccount(k, ANY), function () {
    verifyAccountDoesNotExist(k);
  });
});

bthread("Accountsjson create verification", function () {
  const e = waitForAnyAccountsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccountsjson(k, ANY), function () {
    verifyAccountsjsonExists(k);
  });
});

bthread("Accountsjson update verification", function () {
  const e = waitForAnyAccountsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccountsjson(k, ANY), function () {
    verifyAccountsjsonUpdated(k);
  });
});

bthread("Accountsjson delete verification", function () {
  const e = waitForAnyAccountsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccountsjson(k, ANY), function () {
    verifyAccountsjsonDoesNotExist(k);
  });
});

bthread("Addonresult create verification", function () {
  const e = waitForAnyAddonresultAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddonresult(k, ANY), function () {
    verifyAddonresultExists(k);
  });
});

bthread("Addonresult update verification", function () {
  const e = waitForAnyAddonresultUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddonresult(k, ANY), function () {
    verifyAddonresultUpdated(k);
  });
});

bthread("Addonresult delete verification", function () {
  const e = waitForAnyAddonresultDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddonresult(k, ANY), function () {
    verifyAddonresultDoesNotExist(k);
  });
});

bthread("Addonresultsjson create verification", function () {
  const e = waitForAnyAddonresultsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddonresultsjson(k, ANY), function () {
    verifyAddonresultsjsonExists(k);
  });
});

bthread("Addonresultsjson update verification", function () {
  const e = waitForAnyAddonresultsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddonresultsjson(k, ANY), function () {
    verifyAddonresultsjsonUpdated(k);
  });
});

bthread("Addonresultsjson delete verification", function () {
  const e = waitForAnyAddonresultsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddonresultsjson(k, ANY), function () {
    verifyAddonresultsjsonDoesNotExist(k);
  });
});

bthread("Address create verification", function () {
  const e = waitForAnyAddressAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddress(k, ANY), function () {
    verifyAddressExists(k);
  });
});

bthread("Address update verification", function () {
  const e = waitForAnyAddressUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddress(k, ANY), function () {
    verifyAddressUpdated(k);
  });
});

bthread("Address delete verification", function () {
  const e = waitForAnyAddressDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddress(k, ANY), function () {
    verifyAddressDoesNotExist(k);
  });
});

bthread("Addressesjson create verification", function () {
  const e = waitForAnyAddressesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddressesjson(k, ANY), function () {
    verifyAddressesjsonExists(k);
  });
});

bthread("Addressesjson update verification", function () {
  const e = waitForAnyAddressesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddressesjson(k, ANY), function () {
    verifyAddressesjsonUpdated(k);
  });
});

bthread("Addressesjson delete verification", function () {
  const e = waitForAnyAddressesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddressesjson(k, ANY), function () {
    verifyAddressesjsonDoesNotExist(k);
  });
});

bthread("Alltimejson create verification", function () {
  const e = waitForAnyAlltimejsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlltimejson(k, ANY), function () {
    verifyAlltimejsonExists(k);
  });
});

bthread("Alltimejson update verification", function () {
  const e = waitForAnyAlltimejsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlltimejson(k, ANY), function () {
    verifyAlltimejsonUpdated(k);
  });
});

bthread("Alltimejson delete verification", function () {
  const e = waitForAnyAlltimejsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAlltimejson(k, ANY), function () {
    verifyAlltimejsonDoesNotExist(k);
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

bthread("Applicationsjson create verification", function () {
  const e = waitForAnyApplicationsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplicationsjson(k, ANY), function () {
    verifyApplicationsjsonExists(k);
  });
});

bthread("Applicationsjson update verification", function () {
  const e = waitForAnyApplicationsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplicationsjson(k, ANY), function () {
    verifyApplicationsjsonUpdated(k);
  });
});

bthread("Applicationsjson delete verification", function () {
  const e = waitForAnyApplicationsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApplicationsjson(k, ANY), function () {
    verifyApplicationsjsonDoesNotExist(k);
  });
});

bthread("Assignedaddon create verification", function () {
  const e = waitForAnyAssignedaddonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignedaddon(k, ANY), function () {
    verifyAssignedaddonExists(k);
  });
});

bthread("Assignedaddon update verification", function () {
  const e = waitForAnyAssignedaddonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignedaddon(k, ANY), function () {
    verifyAssignedaddonUpdated(k);
  });
});

bthread("Assignedaddon delete verification", function () {
  const e = waitForAnyAssignedaddonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssignedaddon(k, ANY), function () {
    verifyAssignedaddonDoesNotExist(k);
  });
});

bthread("Assignedaddonsjson create verification", function () {
  const e = waitForAnyAssignedaddonsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignedaddonsjson(k, ANY), function () {
    verifyAssignedaddonsjsonExists(k);
  });
});

bthread("Assignedaddonsjson update verification", function () {
  const e = waitForAnyAssignedaddonsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignedaddonsjson(k, ANY), function () {
    verifyAssignedaddonsjsonUpdated(k);
  });
});

bthread("Assignedaddonsjson delete verification", function () {
  const e = waitForAnyAssignedaddonsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssignedaddonsjson(k, ANY), function () {
    verifyAssignedaddonsjsonDoesNotExist(k);
  });
});

bthread("Auth create verification", function () {
  const e = waitForAnyAuthAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuth(k, ANY), function () {
    verifyAuthExists(k);
  });
});

bthread("Auth update verification", function () {
  const e = waitForAnyAuthUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuth(k, ANY), function () {
    verifyAuthUpdated(k);
  });
});

bthread("Auth delete verification", function () {
  const e = waitForAnyAuthDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuth(k, ANY), function () {
    verifyAuthDoesNotExist(k);
  });
});

bthread("Authorizedconnectapp create verification", function () {
  const e = waitForAnyAuthorizedconnectappAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthorizedconnectapp(k, ANY), function () {
    verifyAuthorizedconnectappExists(k);
  });
});

bthread("Authorizedconnectapp update verification", function () {
  const e = waitForAnyAuthorizedconnectappUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthorizedconnectapp(k, ANY), function () {
    verifyAuthorizedconnectappUpdated(k);
  });
});

bthread("Authorizedconnectapp delete verification", function () {
  const e = waitForAnyAuthorizedconnectappDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuthorizedconnectapp(k, ANY), function () {
    verifyAuthorizedconnectappDoesNotExist(k);
  });
});

bthread("Authorizedconnectappsjson create verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthorizedconnectappsjson(k, ANY), function () {
    verifyAuthorizedconnectappsjsonExists(k);
  });
});

bthread("Authorizedconnectappsjson update verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthorizedconnectappsjson(k, ANY), function () {
    verifyAuthorizedconnectappsjsonUpdated(k);
  });
});

bthread("Authorizedconnectappsjson delete verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuthorizedconnectappsjson(k, ANY), function () {
    verifyAuthorizedconnectappsjsonDoesNotExist(k);
  });
});

bthread("Availablephonenumber create verification", function () {
  const e = waitForAnyAvailablephonenumberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablephonenumber(k, ANY), function () {
    verifyAvailablephonenumberExists(k);
  });
});

bthread("Availablephonenumber update verification", function () {
  const e = waitForAnyAvailablephonenumberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablephonenumber(k, ANY), function () {
    verifyAvailablephonenumberUpdated(k);
  });
});

bthread("Availablephonenumber delete verification", function () {
  const e = waitForAnyAvailablephonenumberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailablephonenumber(k, ANY), function () {
    verifyAvailablephonenumberDoesNotExist(k);
  });
});

bthread("Availablephonenumbersjson create verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablephonenumbersjson(k, ANY), function () {
    verifyAvailablephonenumbersjsonExists(k);
  });
});

bthread("Availablephonenumbersjson update verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablephonenumbersjson(k, ANY), function () {
    verifyAvailablephonenumbersjsonUpdated(k);
  });
});

bthread("Availablephonenumbersjson delete verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailablephonenumbersjson(k, ANY), function () {
    verifyAvailablephonenumbersjsonDoesNotExist(k);
  });
});

bthread("Balancejson create verification", function () {
  const e = waitForAnyBalancejsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBalancejson(k, ANY), function () {
    verifyBalancejsonExists(k);
  });
});

bthread("Balancejson update verification", function () {
  const e = waitForAnyBalancejsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBalancejson(k, ANY), function () {
    verifyBalancejsonUpdated(k);
  });
});

bthread("Balancejson delete verification", function () {
  const e = waitForAnyBalancejsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBalancejson(k, ANY), function () {
    verifyBalancejsonDoesNotExist(k);
  });
});

bthread("Call create verification", function () {
  const e = waitForAnyCallAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCall(k, ANY), function () {
    verifyCallExists(k);
  });
});

bthread("Call update verification", function () {
  const e = waitForAnyCallUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCall(k, ANY), function () {
    verifyCallUpdated(k);
  });
});

bthread("Call delete verification", function () {
  const e = waitForAnyCallDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCall(k, ANY), function () {
    verifyCallDoesNotExist(k);
  });
});

bthread("Callsidjson create verification", function () {
  const e = waitForAnyCallsidjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCallsidjson(k, ANY), function () {
    verifyCallsidjsonExists(k);
  });
});

bthread("Callsidjson update verification", function () {
  const e = waitForAnyCallsidjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCallsidjson(k, ANY), function () {
    verifyCallsidjsonUpdated(k);
  });
});

bthread("Callsidjson delete verification", function () {
  const e = waitForAnyCallsidjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCallsidjson(k, ANY), function () {
    verifyCallsidjsonDoesNotExist(k);
  });
});

bthread("Callsjson create verification", function () {
  const e = waitForAnyCallsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCallsjson(k, ANY), function () {
    verifyCallsjsonExists(k);
  });
});

bthread("Callsjson update verification", function () {
  const e = waitForAnyCallsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCallsjson(k, ANY), function () {
    verifyCallsjsonUpdated(k);
  });
});

bthread("Callsjson delete verification", function () {
  const e = waitForAnyCallsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCallsjson(k, ANY), function () {
    verifyCallsjsonDoesNotExist(k);
  });
});

bthread("Conference create verification", function () {
  const e = waitForAnyConferenceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConference(k, ANY), function () {
    verifyConferenceExists(k);
  });
});

bthread("Conference update verification", function () {
  const e = waitForAnyConferenceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConference(k, ANY), function () {
    verifyConferenceUpdated(k);
  });
});

bthread("Conference delete verification", function () {
  const e = waitForAnyConferenceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConference(k, ANY), function () {
    verifyConferenceDoesNotExist(k);
  });
});

bthread("Conferencesjson create verification", function () {
  const e = waitForAnyConferencesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConferencesjson(k, ANY), function () {
    verifyConferencesjsonExists(k);
  });
});

bthread("Conferencesjson update verification", function () {
  const e = waitForAnyConferencesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConferencesjson(k, ANY), function () {
    verifyConferencesjsonUpdated(k);
  });
});

bthread("Conferencesjson delete verification", function () {
  const e = waitForAnyConferencesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConferencesjson(k, ANY), function () {
    verifyConferencesjsonDoesNotExist(k);
  });
});

bthread("Connectapp create verification", function () {
  const e = waitForAnyConnectappAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnectapp(k, ANY), function () {
    verifyConnectappExists(k);
  });
});

bthread("Connectapp update verification", function () {
  const e = waitForAnyConnectappUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnectapp(k, ANY), function () {
    verifyConnectappUpdated(k);
  });
});

bthread("Connectapp delete verification", function () {
  const e = waitForAnyConnectappDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConnectapp(k, ANY), function () {
    verifyConnectappDoesNotExist(k);
  });
});

bthread("Connectappsidjson create verification", function () {
  const e = waitForAnyConnectappsidjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnectappsidjson(k, ANY), function () {
    verifyConnectappsidjsonExists(k);
  });
});

bthread("Connectappsidjson update verification", function () {
  const e = waitForAnyConnectappsidjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnectappsidjson(k, ANY), function () {
    verifyConnectappsidjsonUpdated(k);
  });
});

bthread("Connectappsidjson delete verification", function () {
  const e = waitForAnyConnectappsidjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConnectappsidjson(k, ANY), function () {
    verifyConnectappsidjsonDoesNotExist(k);
  });
});

bthread("Connectappsjson create verification", function () {
  const e = waitForAnyConnectappsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnectappsjson(k, ANY), function () {
    verifyConnectappsjsonExists(k);
  });
});

bthread("Connectappsjson update verification", function () {
  const e = waitForAnyConnectappsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConnectappsjson(k, ANY), function () {
    verifyConnectappsjsonUpdated(k);
  });
});

bthread("Connectappsjson delete verification", function () {
  const e = waitForAnyConnectappsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConnectappsjson(k, ANY), function () {
    verifyConnectappsjsonDoesNotExist(k);
  });
});

bthread("Countrycodejson create verification", function () {
  const e = waitForAnyCountrycodejsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCountrycodejson(k, ANY), function () {
    verifyCountrycodejsonExists(k);
  });
});

bthread("Countrycodejson update verification", function () {
  const e = waitForAnyCountrycodejsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCountrycodejson(k, ANY), function () {
    verifyCountrycodejsonUpdated(k);
  });
});

bthread("Countrycodejson delete verification", function () {
  const e = waitForAnyCountrycodejsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCountrycodejson(k, ANY), function () {
    verifyCountrycodejsonDoesNotExist(k);
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

bthread("Credentiallist create verification", function () {
  const e = waitForAnyCredentiallistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallist(k, ANY), function () {
    verifyCredentiallistExists(k);
  });
});

bthread("Credentiallist update verification", function () {
  const e = waitForAnyCredentiallistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallist(k, ANY), function () {
    verifyCredentiallistUpdated(k);
  });
});

bthread("Credentiallist delete verification", function () {
  const e = waitForAnyCredentiallistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredentiallist(k, ANY), function () {
    verifyCredentiallistDoesNotExist(k);
  });
});

bthread("Credentiallistmapping create verification", function () {
  const e = waitForAnyCredentiallistmappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallistmapping(k, ANY), function () {
    verifyCredentiallistmappingExists(k);
  });
});

bthread("Credentiallistmapping update verification", function () {
  const e = waitForAnyCredentiallistmappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallistmapping(k, ANY), function () {
    verifyCredentiallistmappingUpdated(k);
  });
});

bthread("Credentiallistmapping delete verification", function () {
  const e = waitForAnyCredentiallistmappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredentiallistmapping(k, ANY), function () {
    verifyCredentiallistmappingDoesNotExist(k);
  });
});

bthread("Credentiallistmappingsjson create verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallistmappingsjson(k, ANY), function () {
    verifyCredentiallistmappingsjsonExists(k);
  });
});

bthread("Credentiallistmappingsjson update verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallistmappingsjson(k, ANY), function () {
    verifyCredentiallistmappingsjsonUpdated(k);
  });
});

bthread("Credentiallistmappingsjson delete verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredentiallistmappingsjson(k, ANY), function () {
    verifyCredentiallistmappingsjsonDoesNotExist(k);
  });
});

bthread("Credentiallistsjson create verification", function () {
  const e = waitForAnyCredentiallistsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallistsjson(k, ANY), function () {
    verifyCredentiallistsjsonExists(k);
  });
});

bthread("Credentiallistsjson update verification", function () {
  const e = waitForAnyCredentiallistsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentiallistsjson(k, ANY), function () {
    verifyCredentiallistsjsonUpdated(k);
  });
});

bthread("Credentiallistsjson delete verification", function () {
  const e = waitForAnyCredentiallistsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredentiallistsjson(k, ANY), function () {
    verifyCredentiallistsjsonDoesNotExist(k);
  });
});

bthread("Credentialsjson create verification", function () {
  const e = waitForAnyCredentialsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentialsjson(k, ANY), function () {
    verifyCredentialsjsonExists(k);
  });
});

bthread("Credentialsjson update verification", function () {
  const e = waitForAnyCredentialsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredentialsjson(k, ANY), function () {
    verifyCredentialsjsonUpdated(k);
  });
});

bthread("Credentialsjson delete verification", function () {
  const e = waitForAnyCredentialsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredentialsjson(k, ANY), function () {
    verifyCredentialsjsonDoesNotExist(k);
  });
});

bthread("Dailyjson create verification", function () {
  const e = waitForAnyDailyjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDailyjson(k, ANY), function () {
    verifyDailyjsonExists(k);
  });
});

bthread("Dailyjson update verification", function () {
  const e = waitForAnyDailyjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDailyjson(k, ANY), function () {
    verifyDailyjsonUpdated(k);
  });
});

bthread("Dailyjson delete verification", function () {
  const e = waitForAnyDailyjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDailyjson(k, ANY), function () {
    verifyDailyjsonDoesNotExist(k);
  });
});

bthread("Datajson create verification", function () {
  const e = waitForAnyDatajsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatajson(k, ANY), function () {
    verifyDatajsonExists(k);
  });
});

bthread("Datajson update verification", function () {
  const e = waitForAnyDatajsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatajson(k, ANY), function () {
    verifyDatajsonUpdated(k);
  });
});

bthread("Datajson delete verification", function () {
  const e = waitForAnyDatajsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDatajson(k, ANY), function () {
    verifyDatajsonDoesNotExist(k);
  });
});

bthread("Dependentphonenumbersjson create verification", function () {
  const e = waitForAnyDependentphonenumbersjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependentphonenumbersjson(k, ANY), function () {
    verifyDependentphonenumbersjsonExists(k);
  });
});

bthread("Dependentphonenumbersjson update verification", function () {
  const e = waitForAnyDependentphonenumbersjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependentphonenumbersjson(k, ANY), function () {
    verifyDependentphonenumbersjsonUpdated(k);
  });
});

bthread("Dependentphonenumbersjson delete verification", function () {
  const e = waitForAnyDependentphonenumbersjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDependentphonenumbersjson(k, ANY), function () {
    verifyDependentphonenumbersjsonDoesNotExist(k);
  });
});

bthread("Domain create verification", function () {
  const e = waitForAnyDomainAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDomain(k, ANY), function () {
    verifyDomainExists(k);
  });
});

bthread("Domain update verification", function () {
  const e = waitForAnyDomainUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDomain(k, ANY), function () {
    verifyDomainUpdated(k);
  });
});

bthread("Domain delete verification", function () {
  const e = waitForAnyDomainDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDomain(k, ANY), function () {
    verifyDomainDoesNotExist(k);
  });
});

bthread("Domainsjson create verification", function () {
  const e = waitForAnyDomainsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDomainsjson(k, ANY), function () {
    verifyDomainsjsonExists(k);
  });
});

bthread("Domainsjson update verification", function () {
  const e = waitForAnyDomainsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDomainsjson(k, ANY), function () {
    verifyDomainsjsonUpdated(k);
  });
});

bthread("Domainsjson delete verification", function () {
  const e = waitForAnyDomainsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDomainsjson(k, ANY), function () {
    verifyDomainsjsonDoesNotExist(k);
  });
});

bthread("Eventsjson create verification", function () {
  const e = waitForAnyEventsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEventsjson(k, ANY), function () {
    verifyEventsjsonExists(k);
  });
});

bthread("Eventsjson update verification", function () {
  const e = waitForAnyEventsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEventsjson(k, ANY), function () {
    verifyEventsjsonUpdated(k);
  });
});

bthread("Eventsjson delete verification", function () {
  const e = waitForAnyEventsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEventsjson(k, ANY), function () {
    verifyEventsjsonDoesNotExist(k);
  });
});

bthread("Extension create verification", function () {
  const e = waitForAnyExtensionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtension(k, ANY), function () {
    verifyExtensionExists(k);
  });
});

bthread("Extension update verification", function () {
  const e = waitForAnyExtensionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtension(k, ANY), function () {
    verifyExtensionUpdated(k);
  });
});

bthread("Extension delete verification", function () {
  const e = waitForAnyExtensionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExtension(k, ANY), function () {
    verifyExtensionDoesNotExist(k);
  });
});

bthread("Extensionsjson create verification", function () {
  const e = waitForAnyExtensionsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtensionsjson(k, ANY), function () {
    verifyExtensionsjsonExists(k);
  });
});

bthread("Extensionsjson update verification", function () {
  const e = waitForAnyExtensionsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtensionsjson(k, ANY), function () {
    verifyExtensionsjsonUpdated(k);
  });
});

bthread("Extensionsjson delete verification", function () {
  const e = waitForAnyExtensionsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExtensionsjson(k, ANY), function () {
    verifyExtensionsjsonDoesNotExist(k);
  });
});

bthread("Feedbackjson create verification", function () {
  const e = waitForAnyFeedbackjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFeedbackjson(k, ANY), function () {
    verifyFeedbackjsonExists(k);
  });
});

bthread("Feedbackjson update verification", function () {
  const e = waitForAnyFeedbackjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFeedbackjson(k, ANY), function () {
    verifyFeedbackjsonUpdated(k);
  });
});

bthread("Feedbackjson delete verification", function () {
  const e = waitForAnyFeedbackjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFeedbackjson(k, ANY), function () {
    verifyFeedbackjsonDoesNotExist(k);
  });
});

bthread("Incomingphonenumber create verification", function () {
  const e = waitForAnyIncomingphonenumberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIncomingphonenumber(k, ANY), function () {
    verifyIncomingphonenumberExists(k);
  });
});

bthread("Incomingphonenumber update verification", function () {
  const e = waitForAnyIncomingphonenumberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIncomingphonenumber(k, ANY), function () {
    verifyIncomingphonenumberUpdated(k);
  });
});

bthread("Incomingphonenumber delete verification", function () {
  const e = waitForAnyIncomingphonenumberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIncomingphonenumber(k, ANY), function () {
    verifyIncomingphonenumberDoesNotExist(k);
  });
});

bthread("Incomingphonenumbersjson create verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIncomingphonenumbersjson(k, ANY), function () {
    verifyIncomingphonenumbersjsonExists(k);
  });
});

bthread("Incomingphonenumbersjson update verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIncomingphonenumbersjson(k, ANY), function () {
    verifyIncomingphonenumbersjsonUpdated(k);
  });
});

bthread("Incomingphonenumbersjson delete verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIncomingphonenumbersjson(k, ANY), function () {
    verifyIncomingphonenumbersjsonDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollist create verification", function () {
  const e = waitForAnyIpaccesscontrollistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollist(k, ANY), function () {
    verifyIpaccesscontrollistExists(k);
  });
});

bthread("Ipaccesscontrollist update verification", function () {
  const e = waitForAnyIpaccesscontrollistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollist(k, ANY), function () {
    verifyIpaccesscontrollistUpdated(k);
  });
});

bthread("Ipaccesscontrollist delete verification", function () {
  const e = waitForAnyIpaccesscontrollistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaccesscontrollist(k, ANY), function () {
    verifyIpaccesscontrollistDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollistmapping create verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollistmapping(k, ANY), function () {
    verifyIpaccesscontrollistmappingExists(k);
  });
});

bthread("Ipaccesscontrollistmapping update verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollistmapping(k, ANY), function () {
    verifyIpaccesscontrollistmappingUpdated(k);
  });
});

bthread("Ipaccesscontrollistmapping delete verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaccesscontrollistmapping(k, ANY), function () {
    verifyIpaccesscontrollistmappingDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollistmappingsjson create verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollistmappingsjson(k, ANY), function () {
    verifyIpaccesscontrollistmappingsjsonExists(k);
  });
});

bthread("Ipaccesscontrollistmappingsjson update verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollistmappingsjson(k, ANY), function () {
    verifyIpaccesscontrollistmappingsjsonUpdated(k);
  });
});

bthread("Ipaccesscontrollistmappingsjson delete verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaccesscontrollistmappingsjson(k, ANY), function () {
    verifyIpaccesscontrollistmappingsjsonDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollistsjson create verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollistsjson(k, ANY), function () {
    verifyIpaccesscontrollistsjsonExists(k);
  });
});

bthread("Ipaccesscontrollistsjson update verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaccesscontrollistsjson(k, ANY), function () {
    verifyIpaccesscontrollistsjsonUpdated(k);
  });
});

bthread("Ipaccesscontrollistsjson delete verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaccesscontrollistsjson(k, ANY), function () {
    verifyIpaccesscontrollistsjsonDoesNotExist(k);
  });
});

bthread("Ipaddress create verification", function () {
  const e = waitForAnyIpaddressAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaddress(k, ANY), function () {
    verifyIpaddressExists(k);
  });
});

bthread("Ipaddress update verification", function () {
  const e = waitForAnyIpaddressUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaddress(k, ANY), function () {
    verifyIpaddressUpdated(k);
  });
});

bthread("Ipaddress delete verification", function () {
  const e = waitForAnyIpaddressDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaddress(k, ANY), function () {
    verifyIpaddressDoesNotExist(k);
  });
});

bthread("Ipaddressesjson create verification", function () {
  const e = waitForAnyIpaddressesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaddressesjson(k, ANY), function () {
    verifyIpaddressesjsonExists(k);
  });
});

bthread("Ipaddressesjson update verification", function () {
  const e = waitForAnyIpaddressesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIpaddressesjson(k, ANY), function () {
    verifyIpaddressesjsonUpdated(k);
  });
});

bthread("Ipaddressesjson delete verification", function () {
  const e = waitForAnyIpaddressesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIpaddressesjson(k, ANY), function () {
    verifyIpaddressesjsonDoesNotExist(k);
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

bthread("Keysjson create verification", function () {
  const e = waitForAnyKeysjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteKeysjson(k, ANY), function () {
    verifyKeysjsonExists(k);
  });
});

bthread("Keysjson update verification", function () {
  const e = waitForAnyKeysjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteKeysjson(k, ANY), function () {
    verifyKeysjsonUpdated(k);
  });
});

bthread("Keysjson delete verification", function () {
  const e = waitForAnyKeysjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddKeysjson(k, ANY), function () {
    verifyKeysjsonDoesNotExist(k);
  });
});

bthread("Lastmonthjson create verification", function () {
  const e = waitForAnyLastmonthjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLastmonthjson(k, ANY), function () {
    verifyLastmonthjsonExists(k);
  });
});

bthread("Lastmonthjson update verification", function () {
  const e = waitForAnyLastmonthjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLastmonthjson(k, ANY), function () {
    verifyLastmonthjsonUpdated(k);
  });
});

bthread("Lastmonthjson delete verification", function () {
  const e = waitForAnyLastmonthjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLastmonthjson(k, ANY), function () {
    verifyLastmonthjsonDoesNotExist(k);
  });
});

bthread("Localjson create verification", function () {
  const e = waitForAnyLocaljsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocaljson(k, ANY), function () {
    verifyLocaljsonExists(k);
  });
});

bthread("Localjson update verification", function () {
  const e = waitForAnyLocaljsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocaljson(k, ANY), function () {
    verifyLocaljsonUpdated(k);
  });
});

bthread("Localjson delete verification", function () {
  const e = waitForAnyLocaljsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLocaljson(k, ANY), function () {
    verifyLocaljsonDoesNotExist(k);
  });
});

bthread("Machinetomachinejson create verification", function () {
  const e = waitForAnyMachinetomachinejsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachinetomachinejson(k, ANY), function () {
    verifyMachinetomachinejsonExists(k);
  });
});

bthread("Machinetomachinejson update verification", function () {
  const e = waitForAnyMachinetomachinejsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachinetomachinejson(k, ANY), function () {
    verifyMachinetomachinejsonUpdated(k);
  });
});

bthread("Machinetomachinejson delete verification", function () {
  const e = waitForAnyMachinetomachinejsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMachinetomachinejson(k, ANY), function () {
    verifyMachinetomachinejsonDoesNotExist(k);
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

bthread("Mediajson create verification", function () {
  const e = waitForAnyMediajsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMediajson(k, ANY), function () {
    verifyMediajsonExists(k);
  });
});

bthread("Mediajson update verification", function () {
  const e = waitForAnyMediajsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMediajson(k, ANY), function () {
    verifyMediajsonUpdated(k);
  });
});

bthread("Mediajson delete verification", function () {
  const e = waitForAnyMediajsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMediajson(k, ANY), function () {
    verifyMediajsonDoesNotExist(k);
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

bthread("Membersjson create verification", function () {
  const e = waitForAnyMembersjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembersjson(k, ANY), function () {
    verifyMembersjsonExists(k);
  });
});

bthread("Membersjson update verification", function () {
  const e = waitForAnyMembersjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembersjson(k, ANY), function () {
    verifyMembersjsonUpdated(k);
  });
});

bthread("Membersjson delete verification", function () {
  const e = waitForAnyMembersjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMembersjson(k, ANY), function () {
    verifyMembersjsonDoesNotExist(k);
  });
});

bthread("Message create verification", function () {
  const e = waitForAnyMessageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMessage(k, ANY), function () {
    verifyMessageExists(k);
  });
});

bthread("Message update verification", function () {
  const e = waitForAnyMessageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMessage(k, ANY), function () {
    verifyMessageUpdated(k);
  });
});

bthread("Message delete verification", function () {
  const e = waitForAnyMessageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMessage(k, ANY), function () {
    verifyMessageDoesNotExist(k);
  });
});

bthread("Messagesjson create verification", function () {
  const e = waitForAnyMessagesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMessagesjson(k, ANY), function () {
    verifyMessagesjsonExists(k);
  });
});

bthread("Messagesjson update verification", function () {
  const e = waitForAnyMessagesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMessagesjson(k, ANY), function () {
    verifyMessagesjsonUpdated(k);
  });
});

bthread("Messagesjson delete verification", function () {
  const e = waitForAnyMessagesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMessagesjson(k, ANY), function () {
    verifyMessagesjsonDoesNotExist(k);
  });
});

bthread("Mobilejson create verification", function () {
  const e = waitForAnyMobilejsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMobilejson(k, ANY), function () {
    verifyMobilejsonExists(k);
  });
});

bthread("Mobilejson update verification", function () {
  const e = waitForAnyMobilejsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMobilejson(k, ANY), function () {
    verifyMobilejsonUpdated(k);
  });
});

bthread("Mobilejson delete verification", function () {
  const e = waitForAnyMobilejsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMobilejson(k, ANY), function () {
    verifyMobilejsonDoesNotExist(k);
  });
});

bthread("Monthlyjson create verification", function () {
  const e = waitForAnyMonthlyjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMonthlyjson(k, ANY), function () {
    verifyMonthlyjsonExists(k);
  });
});

bthread("Monthlyjson update verification", function () {
  const e = waitForAnyMonthlyjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMonthlyjson(k, ANY), function () {
    verifyMonthlyjsonUpdated(k);
  });
});

bthread("Monthlyjson delete verification", function () {
  const e = waitForAnyMonthlyjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMonthlyjson(k, ANY), function () {
    verifyMonthlyjsonDoesNotExist(k);
  });
});

bthread("Nationaljson create verification", function () {
  const e = waitForAnyNationaljsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNationaljson(k, ANY), function () {
    verifyNationaljsonExists(k);
  });
});

bthread("Nationaljson update verification", function () {
  const e = waitForAnyNationaljsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNationaljson(k, ANY), function () {
    verifyNationaljsonUpdated(k);
  });
});

bthread("Nationaljson delete verification", function () {
  const e = waitForAnyNationaljsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNationaljson(k, ANY), function () {
    verifyNationaljsonDoesNotExist(k);
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

bthread("Notificationsjson create verification", function () {
  const e = waitForAnyNotificationsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotificationsjson(k, ANY), function () {
    verifyNotificationsjsonExists(k);
  });
});

bthread("Notificationsjson update verification", function () {
  const e = waitForAnyNotificationsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotificationsjson(k, ANY), function () {
    verifyNotificationsjsonUpdated(k);
  });
});

bthread("Notificationsjson delete verification", function () {
  const e = waitForAnyNotificationsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotificationsjson(k, ANY), function () {
    verifyNotificationsjsonDoesNotExist(k);
  });
});

bthread("Outgoingcallerid create verification", function () {
  const e = waitForAnyOutgoingcalleridAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOutgoingcallerid(k, ANY), function () {
    verifyOutgoingcalleridExists(k);
  });
});

bthread("Outgoingcallerid update verification", function () {
  const e = waitForAnyOutgoingcalleridUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOutgoingcallerid(k, ANY), function () {
    verifyOutgoingcalleridUpdated(k);
  });
});

bthread("Outgoingcallerid delete verification", function () {
  const e = waitForAnyOutgoingcalleridDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOutgoingcallerid(k, ANY), function () {
    verifyOutgoingcalleridDoesNotExist(k);
  });
});

bthread("Outgoingcalleridsjson create verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOutgoingcalleridsjson(k, ANY), function () {
    verifyOutgoingcalleridsjsonExists(k);
  });
});

bthread("Outgoingcalleridsjson update verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOutgoingcalleridsjson(k, ANY), function () {
    verifyOutgoingcalleridsjsonUpdated(k);
  });
});

bthread("Outgoingcalleridsjson delete verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOutgoingcalleridsjson(k, ANY), function () {
    verifyOutgoingcalleridsjsonDoesNotExist(k);
  });
});

bthread("Participant create verification", function () {
  const e = waitForAnyParticipantAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParticipant(k, ANY), function () {
    verifyParticipantExists(k);
  });
});

bthread("Participant update verification", function () {
  const e = waitForAnyParticipantUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParticipant(k, ANY), function () {
    verifyParticipantUpdated(k);
  });
});

bthread("Participant delete verification", function () {
  const e = waitForAnyParticipantDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddParticipant(k, ANY), function () {
    verifyParticipantDoesNotExist(k);
  });
});

bthread("Participantsjson create verification", function () {
  const e = waitForAnyParticipantsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParticipantsjson(k, ANY), function () {
    verifyParticipantsjsonExists(k);
  });
});

bthread("Participantsjson update verification", function () {
  const e = waitForAnyParticipantsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParticipantsjson(k, ANY), function () {
    verifyParticipantsjsonUpdated(k);
  });
});

bthread("Participantsjson delete verification", function () {
  const e = waitForAnyParticipantsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddParticipantsjson(k, ANY), function () {
    verifyParticipantsjsonDoesNotExist(k);
  });
});

bthread("Payload create verification", function () {
  const e = waitForAnyPayloadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePayload(k, ANY), function () {
    verifyPayloadExists(k);
  });
});

bthread("Payload update verification", function () {
  const e = waitForAnyPayloadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePayload(k, ANY), function () {
    verifyPayloadUpdated(k);
  });
});

bthread("Payload delete verification", function () {
  const e = waitForAnyPayloadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPayload(k, ANY), function () {
    verifyPayloadDoesNotExist(k);
  });
});

bthread("Payloadsjson create verification", function () {
  const e = waitForAnyPayloadsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePayloadsjson(k, ANY), function () {
    verifyPayloadsjsonExists(k);
  });
});

bthread("Payloadsjson update verification", function () {
  const e = waitForAnyPayloadsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePayloadsjson(k, ANY), function () {
    verifyPayloadsjsonUpdated(k);
  });
});

bthread("Payloadsjson delete verification", function () {
  const e = waitForAnyPayloadsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPayloadsjson(k, ANY), function () {
    verifyPayloadsjsonDoesNotExist(k);
  });
});

bthread("Payment create verification", function () {
  const e = waitForAnyPaymentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePayment(k, ANY), function () {
    verifyPaymentExists(k);
  });
});

bthread("Payment update verification", function () {
  const e = waitForAnyPaymentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePayment(k, ANY), function () {
    verifyPaymentUpdated(k);
  });
});

bthread("Payment delete verification", function () {
  const e = waitForAnyPaymentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPayment(k, ANY), function () {
    verifyPaymentDoesNotExist(k);
  });
});

bthread("Paymentsjson create verification", function () {
  const e = waitForAnyPaymentsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePaymentsjson(k, ANY), function () {
    verifyPaymentsjsonExists(k);
  });
});

bthread("Paymentsjson update verification", function () {
  const e = waitForAnyPaymentsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePaymentsjson(k, ANY), function () {
    verifyPaymentsjsonUpdated(k);
  });
});

bthread("Paymentsjson delete verification", function () {
  const e = waitForAnyPaymentsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPaymentsjson(k, ANY), function () {
    verifyPaymentsjsonDoesNotExist(k);
  });
});

bthread("Queue create verification", function () {
  const e = waitForAnyQueueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteQueue(k, ANY), function () {
    verifyQueueExists(k);
  });
});

bthread("Queue update verification", function () {
  const e = waitForAnyQueueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteQueue(k, ANY), function () {
    verifyQueueUpdated(k);
  });
});

bthread("Queue delete verification", function () {
  const e = waitForAnyQueueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddQueue(k, ANY), function () {
    verifyQueueDoesNotExist(k);
  });
});

bthread("Queuesjson create verification", function () {
  const e = waitForAnyQueuesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteQueuesjson(k, ANY), function () {
    verifyQueuesjsonExists(k);
  });
});

bthread("Queuesjson update verification", function () {
  const e = waitForAnyQueuesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteQueuesjson(k, ANY), function () {
    verifyQueuesjsonUpdated(k);
  });
});

bthread("Queuesjson delete verification", function () {
  const e = waitForAnyQueuesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddQueuesjson(k, ANY), function () {
    verifyQueuesjsonDoesNotExist(k);
  });
});

bthread("Record create verification", function () {
  const e = waitForAnyRecordAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecord(k, ANY), function () {
    verifyRecordExists(k);
  });
});

bthread("Record update verification", function () {
  const e = waitForAnyRecordUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecord(k, ANY), function () {
    verifyRecordUpdated(k);
  });
});

bthread("Record delete verification", function () {
  const e = waitForAnyRecordDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRecord(k, ANY), function () {
    verifyRecordDoesNotExist(k);
  });
});

bthread("Recording create verification", function () {
  const e = waitForAnyRecordingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecording(k, ANY), function () {
    verifyRecordingExists(k);
  });
});

bthread("Recording update verification", function () {
  const e = waitForAnyRecordingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecording(k, ANY), function () {
    verifyRecordingUpdated(k);
  });
});

bthread("Recording delete verification", function () {
  const e = waitForAnyRecordingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRecording(k, ANY), function () {
    verifyRecordingDoesNotExist(k);
  });
});

bthread("Recordingsjson create verification", function () {
  const e = waitForAnyRecordingsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecordingsjson(k, ANY), function () {
    verifyRecordingsjsonExists(k);
  });
});

bthread("Recordingsjson update verification", function () {
  const e = waitForAnyRecordingsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecordingsjson(k, ANY), function () {
    verifyRecordingsjsonUpdated(k);
  });
});

bthread("Recordingsjson delete verification", function () {
  const e = waitForAnyRecordingsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRecordingsjson(k, ANY), function () {
    verifyRecordingsjsonDoesNotExist(k);
  });
});

bthread("Recordsjson create verification", function () {
  const e = waitForAnyRecordsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecordsjson(k, ANY), function () {
    verifyRecordsjsonExists(k);
  });
});

bthread("Recordsjson update verification", function () {
  const e = waitForAnyRecordsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecordsjson(k, ANY), function () {
    verifyRecordsjsonUpdated(k);
  });
});

bthread("Recordsjson delete verification", function () {
  const e = waitForAnyRecordsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRecordsjson(k, ANY), function () {
    verifyRecordsjsonDoesNotExist(k);
  });
});

bthread("Registration create verification", function () {
  const e = waitForAnyRegistrationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegistration(k, ANY), function () {
    verifyRegistrationExists(k);
  });
});

bthread("Registration update verification", function () {
  const e = waitForAnyRegistrationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegistration(k, ANY), function () {
    verifyRegistrationUpdated(k);
  });
});

bthread("Registration delete verification", function () {
  const e = waitForAnyRegistrationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRegistration(k, ANY), function () {
    verifyRegistrationDoesNotExist(k);
  });
});

bthread("Sharedcostjson create verification", function () {
  const e = waitForAnySharedcostjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSharedcostjson(k, ANY), function () {
    verifySharedcostjsonExists(k);
  });
});

bthread("Sharedcostjson update verification", function () {
  const e = waitForAnySharedcostjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSharedcostjson(k, ANY), function () {
    verifySharedcostjsonUpdated(k);
  });
});

bthread("Sharedcostjson delete verification", function () {
  const e = waitForAnySharedcostjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSharedcostjson(k, ANY), function () {
    verifySharedcostjsonDoesNotExist(k);
  });
});

bthread("Shortcode create verification", function () {
  const e = waitForAnyShortcodeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShortcode(k, ANY), function () {
    verifyShortcodeExists(k);
  });
});

bthread("Shortcode update verification", function () {
  const e = waitForAnyShortcodeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShortcode(k, ANY), function () {
    verifyShortcodeUpdated(k);
  });
});

bthread("Shortcode delete verification", function () {
  const e = waitForAnyShortcodeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShortcode(k, ANY), function () {
    verifyShortcodeDoesNotExist(k);
  });
});

bthread("Shortcodesjson create verification", function () {
  const e = waitForAnyShortcodesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShortcodesjson(k, ANY), function () {
    verifyShortcodesjsonExists(k);
  });
});

bthread("Shortcodesjson update verification", function () {
  const e = waitForAnyShortcodesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShortcodesjson(k, ANY), function () {
    verifyShortcodesjsonUpdated(k);
  });
});

bthread("Shortcodesjson delete verification", function () {
  const e = waitForAnyShortcodesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShortcodesjson(k, ANY), function () {
    verifyShortcodesjsonDoesNotExist(k);
  });
});

bthread("Sidjson create verification", function () {
  const e = waitForAnySidjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSidjson(k, ANY), function () {
    verifySidjsonExists(k);
  });
});

bthread("Sidjson update verification", function () {
  const e = waitForAnySidjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSidjson(k, ANY), function () {
    verifySidjsonUpdated(k);
  });
});

bthread("Sidjson delete verification", function () {
  const e = waitForAnySidjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSidjson(k, ANY), function () {
    verifySidjsonDoesNotExist(k);
  });
});

bthread("Signingkey create verification", function () {
  const e = waitForAnySigningkeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSigningkey(k, ANY), function () {
    verifySigningkeyExists(k);
  });
});

bthread("Signingkey update verification", function () {
  const e = waitForAnySigningkeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSigningkey(k, ANY), function () {
    verifySigningkeyUpdated(k);
  });
});

bthread("Signingkey delete verification", function () {
  const e = waitForAnySigningkeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSigningkey(k, ANY), function () {
    verifySigningkeyDoesNotExist(k);
  });
});

bthread("Signingkeysjson create verification", function () {
  const e = waitForAnySigningkeysjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSigningkeysjson(k, ANY), function () {
    verifySigningkeysjsonExists(k);
  });
});

bthread("Signingkeysjson update verification", function () {
  const e = waitForAnySigningkeysjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSigningkeysjson(k, ANY), function () {
    verifySigningkeysjsonUpdated(k);
  });
});

bthread("Signingkeysjson delete verification", function () {
  const e = waitForAnySigningkeysjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSigningkeysjson(k, ANY), function () {
    verifySigningkeysjsonDoesNotExist(k);
  });
});

bthread("Sip create verification", function () {
  const e = waitForAnySipAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSip(k, ANY), function () {
    verifySipExists(k);
  });
});

bthread("Sip update verification", function () {
  const e = waitForAnySipUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSip(k, ANY), function () {
    verifySipUpdated(k);
  });
});

bthread("Sip delete verification", function () {
  const e = waitForAnySipDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSip(k, ANY), function () {
    verifySipDoesNotExist(k);
  });
});

bthread("Siprec create verification", function () {
  const e = waitForAnySiprecAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSiprec(k, ANY), function () {
    verifySiprecExists(k);
  });
});

bthread("Siprec update verification", function () {
  const e = waitForAnySiprecUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSiprec(k, ANY), function () {
    verifySiprecUpdated(k);
  });
});

bthread("Siprec delete verification", function () {
  const e = waitForAnySiprecDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSiprec(k, ANY), function () {
    verifySiprecDoesNotExist(k);
  });
});

bthread("Siprecjson create verification", function () {
  const e = waitForAnySiprecjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSiprecjson(k, ANY), function () {
    verifySiprecjsonExists(k);
  });
});

bthread("Siprecjson update verification", function () {
  const e = waitForAnySiprecjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSiprecjson(k, ANY), function () {
    verifySiprecjsonUpdated(k);
  });
});

bthread("Siprecjson delete verification", function () {
  const e = waitForAnySiprecjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSiprecjson(k, ANY), function () {
    verifySiprecjsonDoesNotExist(k);
  });
});

bthread("Sm create verification", function () {
  const e = waitForAnySmAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSm(k, ANY), function () {
    verifySmExists(k);
  });
});

bthread("Sm update verification", function () {
  const e = waitForAnySmUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSm(k, ANY), function () {
    verifySmUpdated(k);
  });
});

bthread("Sm delete verification", function () {
  const e = waitForAnySmDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSm(k, ANY), function () {
    verifySmDoesNotExist(k);
  });
});

bthread("Stream create verification", function () {
  const e = waitForAnyStreamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStream(k, ANY), function () {
    verifyStreamExists(k);
  });
});

bthread("Stream update verification", function () {
  const e = waitForAnyStreamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStream(k, ANY), function () {
    verifyStreamUpdated(k);
  });
});

bthread("Stream delete verification", function () {
  const e = waitForAnyStreamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStream(k, ANY), function () {
    verifyStreamDoesNotExist(k);
  });
});

bthread("Streamsjson create verification", function () {
  const e = waitForAnyStreamsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStreamsjson(k, ANY), function () {
    verifyStreamsjsonExists(k);
  });
});

bthread("Streamsjson update verification", function () {
  const e = waitForAnyStreamsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStreamsjson(k, ANY), function () {
    verifyStreamsjsonUpdated(k);
  });
});

bthread("Streamsjson delete verification", function () {
  const e = waitForAnyStreamsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStreamsjson(k, ANY), function () {
    verifyStreamsjsonDoesNotExist(k);
  });
});

bthread("Thismonthjson create verification", function () {
  const e = waitForAnyThismonthjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteThismonthjson(k, ANY), function () {
    verifyThismonthjsonExists(k);
  });
});

bthread("Thismonthjson update verification", function () {
  const e = waitForAnyThismonthjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteThismonthjson(k, ANY), function () {
    verifyThismonthjsonUpdated(k);
  });
});

bthread("Thismonthjson delete verification", function () {
  const e = waitForAnyThismonthjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddThismonthjson(k, ANY), function () {
    verifyThismonthjsonDoesNotExist(k);
  });
});

bthread("Todayjson create verification", function () {
  const e = waitForAnyTodayjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTodayjson(k, ANY), function () {
    verifyTodayjsonExists(k);
  });
});

bthread("Todayjson update verification", function () {
  const e = waitForAnyTodayjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTodayjson(k, ANY), function () {
    verifyTodayjsonUpdated(k);
  });
});

bthread("Todayjson delete verification", function () {
  const e = waitForAnyTodayjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTodayjson(k, ANY), function () {
    verifyTodayjsonDoesNotExist(k);
  });
});

bthread("Tokensjson create verification", function () {
  const e = waitForAnyTokensjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTokensjson(k, ANY), function () {
    verifyTokensjsonExists(k);
  });
});

bthread("Tokensjson update verification", function () {
  const e = waitForAnyTokensjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTokensjson(k, ANY), function () {
    verifyTokensjsonUpdated(k);
  });
});

bthread("Tokensjson delete verification", function () {
  const e = waitForAnyTokensjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTokensjson(k, ANY), function () {
    verifyTokensjsonDoesNotExist(k);
  });
});

bthread("Tollfreejson create verification", function () {
  const e = waitForAnyTollfreejsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTollfreejson(k, ANY), function () {
    verifyTollfreejsonExists(k);
  });
});

bthread("Tollfreejson update verification", function () {
  const e = waitForAnyTollfreejsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTollfreejson(k, ANY), function () {
    verifyTollfreejsonUpdated(k);
  });
});

bthread("Tollfreejson delete verification", function () {
  const e = waitForAnyTollfreejsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTollfreejson(k, ANY), function () {
    verifyTollfreejsonDoesNotExist(k);
  });
});

bthread("Transcription create verification", function () {
  const e = waitForAnyTranscriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTranscription(k, ANY), function () {
    verifyTranscriptionExists(k);
  });
});

bthread("Transcription update verification", function () {
  const e = waitForAnyTranscriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTranscription(k, ANY), function () {
    verifyTranscriptionUpdated(k);
  });
});

bthread("Transcription delete verification", function () {
  const e = waitForAnyTranscriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTranscription(k, ANY), function () {
    verifyTranscriptionDoesNotExist(k);
  });
});

bthread("Transcriptionsjson create verification", function () {
  const e = waitForAnyTranscriptionsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTranscriptionsjson(k, ANY), function () {
    verifyTranscriptionsjsonExists(k);
  });
});

bthread("Transcriptionsjson update verification", function () {
  const e = waitForAnyTranscriptionsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTranscriptionsjson(k, ANY), function () {
    verifyTranscriptionsjsonUpdated(k);
  });
});

bthread("Transcriptionsjson delete verification", function () {
  const e = waitForAnyTranscriptionsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTranscriptionsjson(k, ANY), function () {
    verifyTranscriptionsjsonDoesNotExist(k);
  });
});

bthread("Trigger create verification", function () {
  const e = waitForAnyTriggerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrigger(k, ANY), function () {
    verifyTriggerExists(k);
  });
});

bthread("Trigger update verification", function () {
  const e = waitForAnyTriggerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrigger(k, ANY), function () {
    verifyTriggerUpdated(k);
  });
});

bthread("Trigger delete verification", function () {
  const e = waitForAnyTriggerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTrigger(k, ANY), function () {
    verifyTriggerDoesNotExist(k);
  });
});

bthread("Triggersjson create verification", function () {
  const e = waitForAnyTriggersjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTriggersjson(k, ANY), function () {
    verifyTriggersjsonExists(k);
  });
});

bthread("Triggersjson update verification", function () {
  const e = waitForAnyTriggersjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTriggersjson(k, ANY), function () {
    verifyTriggersjsonUpdated(k);
  });
});

bthread("Triggersjson delete verification", function () {
  const e = waitForAnyTriggersjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTriggersjson(k, ANY), function () {
    verifyTriggersjsonDoesNotExist(k);
  });
});

bthread("Usage create verification", function () {
  const e = waitForAnyUsageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsage(k, ANY), function () {
    verifyUsageExists(k);
  });
});

bthread("Usage update verification", function () {
  const e = waitForAnyUsageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsage(k, ANY), function () {
    verifyUsageUpdated(k);
  });
});

bthread("Usage delete verification", function () {
  const e = waitForAnyUsageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsage(k, ANY), function () {
    verifyUsageDoesNotExist(k);
  });
});

bthread("Userdefinedmessagesjson create verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserdefinedmessagesjson(k, ANY), function () {
    verifyUserdefinedmessagesjsonExists(k);
  });
});

bthread("Userdefinedmessagesjson update verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserdefinedmessagesjson(k, ANY), function () {
    verifyUserdefinedmessagesjsonUpdated(k);
  });
});

bthread("Userdefinedmessagesjson delete verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserdefinedmessagesjson(k, ANY), function () {
    verifyUserdefinedmessagesjsonDoesNotExist(k);
  });
});

bthread("Userdefinedmessagesubscription create verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserdefinedmessagesubscription(k, ANY), function () {
    verifyUserdefinedmessagesubscriptionExists(k);
  });
});

bthread("Userdefinedmessagesubscription update verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserdefinedmessagesubscription(k, ANY), function () {
    verifyUserdefinedmessagesubscriptionUpdated(k);
  });
});

bthread("Userdefinedmessagesubscription delete verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserdefinedmessagesubscription(k, ANY), function () {
    verifyUserdefinedmessagesubscriptionDoesNotExist(k);
  });
});

bthread("Userdefinedmessagesubscriptionsjson create verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserdefinedmessagesubscriptionsjson(k, ANY), function () {
    verifyUserdefinedmessagesubscriptionsjsonExists(k);
  });
});

bthread("Userdefinedmessagesubscriptionsjson update verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserdefinedmessagesubscriptionsjson(k, ANY), function () {
    verifyUserdefinedmessagesubscriptionsjsonUpdated(k);
  });
});

bthread("Userdefinedmessagesubscriptionsjson delete verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserdefinedmessagesubscriptionsjson(k, ANY), function () {
    verifyUserdefinedmessagesubscriptionsjsonDoesNotExist(k);
  });
});

bthread("Voipjson create verification", function () {
  const e = waitForAnyVoipjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVoipjson(k, ANY), function () {
    verifyVoipjsonExists(k);
  });
});

bthread("Voipjson update verification", function () {
  const e = waitForAnyVoipjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVoipjson(k, ANY), function () {
    verifyVoipjsonUpdated(k);
  });
});

bthread("Voipjson delete verification", function () {
  const e = waitForAnyVoipjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVoipjson(k, ANY), function () {
    verifyVoipjsonDoesNotExist(k);
  });
});

bthread("Yearlyjson create verification", function () {
  const e = waitForAnyYearlyjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteYearlyjson(k, ANY), function () {
    verifyYearlyjsonExists(k);
  });
});

bthread("Yearlyjson update verification", function () {
  const e = waitForAnyYearlyjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteYearlyjson(k, ANY), function () {
    verifyYearlyjsonUpdated(k);
  });
});

bthread("Yearlyjson delete verification", function () {
  const e = waitForAnyYearlyjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddYearlyjson(k, ANY), function () {
    verifyYearlyjsonDoesNotExist(k);
  });
});

bthread("Yesterdayjson create verification", function () {
  const e = waitForAnyYesterdayjsonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteYesterdayjson(k, ANY), function () {
    verifyYesterdayjsonExists(k);
  });
});

bthread("Yesterdayjson update verification", function () {
  const e = waitForAnyYesterdayjsonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteYesterdayjson(k, ANY), function () {
    verifyYesterdayjsonUpdated(k);
  });
});

bthread("Yesterdayjson delete verification", function () {
  const e = waitForAnyYesterdayjsonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddYesterdayjson(k, ANY), function () {
    verifyYesterdayjsonDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique 20100401", function () {
  const x = waitForAny20100401Added();
  block(matchAdd20100401(x.id, ANY), function () {});
});

bthread("Guard: Unique Account", function () {
  const x = waitForAnyAccountAdded();
  block(matchAddAccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Accountsjson", function () {
  const x = waitForAnyAccountsjsonAdded();
  block(matchAddAccountsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Addonresult", function () {
  const x = waitForAnyAddonresultAdded();
  block(matchAddAddonresult(x.id, ANY), function () {});
});

bthread("Guard: Unique Addonresultsjson", function () {
  const x = waitForAnyAddonresultsjsonAdded();
  block(matchAddAddonresultsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Address", function () {
  const x = waitForAnyAddressAdded();
  block(matchAddAddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Addressesjson", function () {
  const x = waitForAnyAddressesjsonAdded();
  block(matchAddAddressesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Alltimejson", function () {
  const x = waitForAnyAlltimejsonAdded();
  block(matchAddAlltimejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  block(matchAddApplication(x.id, ANY), function () {});
});

bthread("Guard: Unique Applicationsjson", function () {
  const x = waitForAnyApplicationsjsonAdded();
  block(matchAddApplicationsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignedaddon", function () {
  const x = waitForAnyAssignedaddonAdded();
  block(matchAddAssignedaddon(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignedaddonsjson", function () {
  const x = waitForAnyAssignedaddonsjsonAdded();
  block(matchAddAssignedaddonsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Auth", function () {
  const x = waitForAnyAuthAdded();
  block(matchAddAuth(x.id, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectapp", function () {
  const x = waitForAnyAuthorizedconnectappAdded();
  block(matchAddAuthorizedconnectapp(x.id, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectappsjson", function () {
  const x = waitForAnyAuthorizedconnectappsjsonAdded();
  block(matchAddAuthorizedconnectappsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablephonenumber", function () {
  const x = waitForAnyAvailablephonenumberAdded();
  block(matchAddAvailablephonenumber(x.id, ANY), function () {});
});

bthread("Guard: Unique Availablephonenumbersjson", function () {
  const x = waitForAnyAvailablephonenumbersjsonAdded();
  block(matchAddAvailablephonenumbersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Balancejson", function () {
  const x = waitForAnyBalancejsonAdded();
  block(matchAddBalancejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Call", function () {
  const x = waitForAnyCallAdded();
  block(matchAddCall(x.id, ANY), function () {});
});

bthread("Guard: Unique Callsidjson", function () {
  const x = waitForAnyCallsidjsonAdded();
  block(matchAddCallsidjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Callsjson", function () {
  const x = waitForAnyCallsjsonAdded();
  block(matchAddCallsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Conference", function () {
  const x = waitForAnyConferenceAdded();
  block(matchAddConference(x.id, ANY), function () {});
});

bthread("Guard: Unique Conferencesjson", function () {
  const x = waitForAnyConferencesjsonAdded();
  block(matchAddConferencesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Connectapp", function () {
  const x = waitForAnyConnectappAdded();
  block(matchAddConnectapp(x.id, ANY), function () {});
});

bthread("Guard: Unique Connectappsidjson", function () {
  const x = waitForAnyConnectappsidjsonAdded();
  block(matchAddConnectappsidjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Connectappsjson", function () {
  const x = waitForAnyConnectappsjsonAdded();
  block(matchAddConnectappsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Countrycodejson", function () {
  const x = waitForAnyCountrycodejsonAdded();
  block(matchAddCountrycodejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  block(matchAddCredential(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallist", function () {
  const x = waitForAnyCredentiallistAdded();
  block(matchAddCredentiallist(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallistmapping", function () {
  const x = waitForAnyCredentiallistmappingAdded();
  block(matchAddCredentiallistmapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallistmappingsjson", function () {
  const x = waitForAnyCredentiallistmappingsjsonAdded();
  block(matchAddCredentiallistmappingsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentiallistsjson", function () {
  const x = waitForAnyCredentiallistsjsonAdded();
  block(matchAddCredentiallistsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Credentialsjson", function () {
  const x = waitForAnyCredentialsjsonAdded();
  block(matchAddCredentialsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Dailyjson", function () {
  const x = waitForAnyDailyjsonAdded();
  block(matchAddDailyjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Datajson", function () {
  const x = waitForAnyDatajsonAdded();
  block(matchAddDatajson(x.id, ANY), function () {});
});

bthread("Guard: Unique Dependentphonenumbersjson", function () {
  const x = waitForAnyDependentphonenumbersjsonAdded();
  block(matchAddDependentphonenumbersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Domain", function () {
  const x = waitForAnyDomainAdded();
  block(matchAddDomain(x.id, ANY), function () {});
});

bthread("Guard: Unique Domainsjson", function () {
  const x = waitForAnyDomainsjsonAdded();
  block(matchAddDomainsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Eventsjson", function () {
  const x = waitForAnyEventsjsonAdded();
  block(matchAddEventsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Extension", function () {
  const x = waitForAnyExtensionAdded();
  block(matchAddExtension(x.id, ANY), function () {});
});

bthread("Guard: Unique Extensionsjson", function () {
  const x = waitForAnyExtensionsjsonAdded();
  block(matchAddExtensionsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Feedbackjson", function () {
  const x = waitForAnyFeedbackjsonAdded();
  block(matchAddFeedbackjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumber", function () {
  const x = waitForAnyIncomingphonenumberAdded();
  block(matchAddIncomingphonenumber(x.id, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbersjson", function () {
  const x = waitForAnyIncomingphonenumbersjsonAdded();
  block(matchAddIncomingphonenumbersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollist", function () {
  const x = waitForAnyIpaccesscontrollistAdded();
  block(matchAddIpaccesscontrollist(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistmapping", function () {
  const x = waitForAnyIpaccesscontrollistmappingAdded();
  block(matchAddIpaccesscontrollistmapping(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistmappingsjson", function () {
  const x = waitForAnyIpaccesscontrollistmappingsjsonAdded();
  block(matchAddIpaccesscontrollistmappingsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistsjson", function () {
  const x = waitForAnyIpaccesscontrollistsjsonAdded();
  block(matchAddIpaccesscontrollistsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaddress", function () {
  const x = waitForAnyIpaddressAdded();
  block(matchAddIpaddress(x.id, ANY), function () {});
});

bthread("Guard: Unique Ipaddressesjson", function () {
  const x = waitForAnyIpaddressesjsonAdded();
  block(matchAddIpaddressesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  block(matchAddKey(x.id, ANY), function () {});
});

bthread("Guard: Unique Keysjson", function () {
  const x = waitForAnyKeysjsonAdded();
  block(matchAddKeysjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Lastmonthjson", function () {
  const x = waitForAnyLastmonthjsonAdded();
  block(matchAddLastmonthjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Localjson", function () {
  const x = waitForAnyLocaljsonAdded();
  block(matchAddLocaljson(x.id, ANY), function () {});
});

bthread("Guard: Unique Machinetomachinejson", function () {
  const x = waitForAnyMachinetomachinejsonAdded();
  block(matchAddMachinetomachinejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Media", function () {
  const x = waitForAnyMediaAdded();
  block(matchAddMedia(x.id, ANY), function () {});
});

bthread("Guard: Unique Mediajson", function () {
  const x = waitForAnyMediajsonAdded();
  block(matchAddMediajson(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Membersjson", function () {
  const x = waitForAnyMembersjsonAdded();
  block(matchAddMembersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Message", function () {
  const x = waitForAnyMessageAdded();
  block(matchAddMessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Messagesjson", function () {
  const x = waitForAnyMessagesjsonAdded();
  block(matchAddMessagesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Mobilejson", function () {
  const x = waitForAnyMobilejsonAdded();
  block(matchAddMobilejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Monthlyjson", function () {
  const x = waitForAnyMonthlyjsonAdded();
  block(matchAddMonthlyjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Nationaljson", function () {
  const x = waitForAnyNationaljsonAdded();
  block(matchAddNationaljson(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Notificationsjson", function () {
  const x = waitForAnyNotificationsjsonAdded();
  block(matchAddNotificationsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Outgoingcallerid", function () {
  const x = waitForAnyOutgoingcalleridAdded();
  block(matchAddOutgoingcallerid(x.id, ANY), function () {});
});

bthread("Guard: Unique Outgoingcalleridsjson", function () {
  const x = waitForAnyOutgoingcalleridsjsonAdded();
  block(matchAddOutgoingcalleridsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Participant", function () {
  const x = waitForAnyParticipantAdded();
  block(matchAddParticipant(x.id, ANY), function () {});
});

bthread("Guard: Unique Participantsjson", function () {
  const x = waitForAnyParticipantsjsonAdded();
  block(matchAddParticipantsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Payload", function () {
  const x = waitForAnyPayloadAdded();
  block(matchAddPayload(x.id, ANY), function () {});
});

bthread("Guard: Unique Payloadsjson", function () {
  const x = waitForAnyPayloadsjsonAdded();
  block(matchAddPayloadsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Payment", function () {
  const x = waitForAnyPaymentAdded();
  block(matchAddPayment(x.id, ANY), function () {});
});

bthread("Guard: Unique Paymentsjson", function () {
  const x = waitForAnyPaymentsjsonAdded();
  block(matchAddPaymentsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Queue", function () {
  const x = waitForAnyQueueAdded();
  block(matchAddQueue(x.id, ANY), function () {});
});

bthread("Guard: Unique Queuesjson", function () {
  const x = waitForAnyQueuesjsonAdded();
  block(matchAddQueuesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Record", function () {
  const x = waitForAnyRecordAdded();
  block(matchAddRecord(x.id, ANY), function () {});
});

bthread("Guard: Unique Recording", function () {
  const x = waitForAnyRecordingAdded();
  block(matchAddRecording(x.id, ANY), function () {});
});

bthread("Guard: Unique Recordingsjson", function () {
  const x = waitForAnyRecordingsjsonAdded();
  block(matchAddRecordingsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Recordsjson", function () {
  const x = waitForAnyRecordsjsonAdded();
  block(matchAddRecordsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Registration", function () {
  const x = waitForAnyRegistrationAdded();
  block(matchAddRegistration(x.id, ANY), function () {});
});

bthread("Guard: Unique Sharedcostjson", function () {
  const x = waitForAnySharedcostjsonAdded();
  block(matchAddSharedcostjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Shortcode", function () {
  const x = waitForAnyShortcodeAdded();
  block(matchAddShortcode(x.id, ANY), function () {});
});

bthread("Guard: Unique Shortcodesjson", function () {
  const x = waitForAnyShortcodesjsonAdded();
  block(matchAddShortcodesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Sidjson", function () {
  const x = waitForAnySidjsonAdded();
  block(matchAddSidjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Signingkey", function () {
  const x = waitForAnySigningkeyAdded();
  block(matchAddSigningkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Signingkeysjson", function () {
  const x = waitForAnySigningkeysjsonAdded();
  block(matchAddSigningkeysjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Sip", function () {
  const x = waitForAnySipAdded();
  block(matchAddSip(x.id, ANY), function () {});
});

bthread("Guard: Unique Siprec", function () {
  const x = waitForAnySiprecAdded();
  block(matchAddSiprec(x.id, ANY), function () {});
});

bthread("Guard: Unique Siprecjson", function () {
  const x = waitForAnySiprecjsonAdded();
  block(matchAddSiprecjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Sm", function () {
  const x = waitForAnySmAdded();
  block(matchAddSm(x.id, ANY), function () {});
});

bthread("Guard: Unique Stream", function () {
  const x = waitForAnyStreamAdded();
  block(matchAddStream(x.id, ANY), function () {});
});

bthread("Guard: Unique Streamsjson", function () {
  const x = waitForAnyStreamsjsonAdded();
  block(matchAddStreamsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Thismonthjson", function () {
  const x = waitForAnyThismonthjsonAdded();
  block(matchAddThismonthjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Todayjson", function () {
  const x = waitForAnyTodayjsonAdded();
  block(matchAddTodayjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Tokensjson", function () {
  const x = waitForAnyTokensjsonAdded();
  block(matchAddTokensjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Tollfreejson", function () {
  const x = waitForAnyTollfreejsonAdded();
  block(matchAddTollfreejson(x.id, ANY), function () {});
});

bthread("Guard: Unique Transcription", function () {
  const x = waitForAnyTranscriptionAdded();
  block(matchAddTranscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Transcriptionsjson", function () {
  const x = waitForAnyTranscriptionsjsonAdded();
  block(matchAddTranscriptionsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Trigger", function () {
  const x = waitForAnyTriggerAdded();
  block(matchAddTrigger(x.id, ANY), function () {});
});

bthread("Guard: Unique Triggersjson", function () {
  const x = waitForAnyTriggersjsonAdded();
  block(matchAddTriggersjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Usage", function () {
  const x = waitForAnyUsageAdded();
  block(matchAddUsage(x.id, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesjson", function () {
  const x = waitForAnyUserdefinedmessagesjsonAdded();
  block(matchAddUserdefinedmessagesjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesubscription", function () {
  const x = waitForAnyUserdefinedmessagesubscriptionAdded();
  block(matchAddUserdefinedmessagesubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesubscriptionsjson", function () {
  const x = waitForAnyUserdefinedmessagesubscriptionsjsonAdded();
  block(matchAddUserdefinedmessagesubscriptionsjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Voipjson", function () {
  const x = waitForAnyVoipjsonAdded();
  block(matchAddVoipjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Yearlyjson", function () {
  const x = waitForAnyYearlyjsonAdded();
  block(matchAddYearlyjson(x.id, ANY), function () {});
});

bthread("Guard: Unique Yesterdayjson", function () {
  const x = waitForAnyYesterdayjsonAdded();
  block(matchAddYesterdayjson(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
