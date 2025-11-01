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

// ===== NONDET VARIANTS =====

bthread("20100401 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  add20100401(x.id);
  for (var i=0; i<steps; i++) {
    update20100401(x.id);
  }
  if (pick([true,false])) { delete20100401(x.id); }
  verify20100401Exists(x.id);
  verify20100401Updated(x.id);
});

bthread("20100401 nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  add20100401(a.id);
  block(matchAdd20100401(a.id, ANY), function () {});
  add20100401(b.id);
});

bthread("Account nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccount(a.id);
  block(matchAddAccount(a.id, ANY), function () {});
  addAccount(b.id);
});

bthread("Accountsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAccountsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateAccountsjson(x.id);
  }
  if (pick([true,false])) { deleteAccountsjson(x.id); }
  verifyAccountsjsonExists(x.id);
  verifyAccountsjsonUpdated(x.id);
});

bthread("Accountsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccountsjson(a.id);
  block(matchAddAccountsjson(a.id, ANY), function () {});
  addAccountsjson(b.id);
});

bthread("Addonresult nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAddonresult(x.id);
  for (var i=0; i<steps; i++) {
    updateAddonresult(x.id);
  }
  if (pick([true,false])) { deleteAddonresult(x.id); }
  verifyAddonresultExists(x.id);
  verifyAddonresultUpdated(x.id);
});

bthread("Addonresult nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAddonresult(a.id);
  block(matchAddAddonresult(a.id, ANY), function () {});
  addAddonresult(b.id);
});

bthread("Addonresultsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAddonresultsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateAddonresultsjson(x.id);
  }
  if (pick([true,false])) { deleteAddonresultsjson(x.id); }
  verifyAddonresultsjsonExists(x.id);
  verifyAddonresultsjsonUpdated(x.id);
});

bthread("Addonresultsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAddonresultsjson(a.id);
  block(matchAddAddonresultsjson(a.id, ANY), function () {});
  addAddonresultsjson(b.id);
});

bthread("Address nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAddress(x.id);
  for (var i=0; i<steps; i++) {
    updateAddress(x.id);
  }
  if (pick([true,false])) { deleteAddress(x.id); }
  verifyAddressExists(x.id);
  verifyAddressUpdated(x.id);
});

bthread("Address nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAddress(a.id);
  block(matchAddAddress(a.id, ANY), function () {});
  addAddress(b.id);
});

bthread("Addressesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAddressesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateAddressesjson(x.id);
  }
  if (pick([true,false])) { deleteAddressesjson(x.id); }
  verifyAddressesjsonExists(x.id);
  verifyAddressesjsonUpdated(x.id);
});

bthread("Addressesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAddressesjson(a.id);
  block(matchAddAddressesjson(a.id, ANY), function () {});
  addAddressesjson(b.id);
});

bthread("Alltimejson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAlltimejson(x.id);
  for (var i=0; i<steps; i++) {
    updateAlltimejson(x.id);
  }
  if (pick([true,false])) { deleteAlltimejson(x.id); }
  verifyAlltimejsonExists(x.id);
  verifyAlltimejsonUpdated(x.id);
});

bthread("Alltimejson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAlltimejson(a.id);
  block(matchAddAlltimejson(a.id, ANY), function () {});
  addAlltimejson(b.id);
});

bthread("Application nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApplication(a.id);
  block(matchAddApplication(a.id, ANY), function () {});
  addApplication(b.id);
});

bthread("Applicationsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApplicationsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateApplicationsjson(x.id);
  }
  if (pick([true,false])) { deleteApplicationsjson(x.id); }
  verifyApplicationsjsonExists(x.id);
  verifyApplicationsjsonUpdated(x.id);
});

bthread("Applicationsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApplicationsjson(a.id);
  block(matchAddApplicationsjson(a.id, ANY), function () {});
  addApplicationsjson(b.id);
});

bthread("Assignedaddon nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAssignedaddon(x.id);
  for (var i=0; i<steps; i++) {
    updateAssignedaddon(x.id);
  }
  if (pick([true,false])) { deleteAssignedaddon(x.id); }
  verifyAssignedaddonExists(x.id);
  verifyAssignedaddonUpdated(x.id);
});

bthread("Assignedaddon nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAssignedaddon(a.id);
  block(matchAddAssignedaddon(a.id, ANY), function () {});
  addAssignedaddon(b.id);
});

bthread("Assignedaddonsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAssignedaddonsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateAssignedaddonsjson(x.id);
  }
  if (pick([true,false])) { deleteAssignedaddonsjson(x.id); }
  verifyAssignedaddonsjsonExists(x.id);
  verifyAssignedaddonsjsonUpdated(x.id);
});

bthread("Assignedaddonsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAssignedaddonsjson(a.id);
  block(matchAddAssignedaddonsjson(a.id, ANY), function () {});
  addAssignedaddonsjson(b.id);
});

bthread("Auth nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAuth(x.id);
  for (var i=0; i<steps; i++) {
    updateAuth(x.id);
  }
  if (pick([true,false])) { deleteAuth(x.id); }
  verifyAuthExists(x.id);
  verifyAuthUpdated(x.id);
});

bthread("Auth nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuth(a.id);
  block(matchAddAuth(a.id, ANY), function () {});
  addAuth(b.id);
});

bthread("Authorizedconnectapp nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAuthorizedconnectapp(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthorizedconnectapp(x.id);
  }
  if (pick([true,false])) { deleteAuthorizedconnectapp(x.id); }
  verifyAuthorizedconnectappExists(x.id);
  verifyAuthorizedconnectappUpdated(x.id);
});

bthread("Authorizedconnectapp nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthorizedconnectapp(a.id);
  block(matchAddAuthorizedconnectapp(a.id, ANY), function () {});
  addAuthorizedconnectapp(b.id);
});

bthread("Authorizedconnectappsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAuthorizedconnectappsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthorizedconnectappsjson(x.id);
  }
  if (pick([true,false])) { deleteAuthorizedconnectappsjson(x.id); }
  verifyAuthorizedconnectappsjsonExists(x.id);
  verifyAuthorizedconnectappsjsonUpdated(x.id);
});

bthread("Authorizedconnectappsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthorizedconnectappsjson(a.id);
  block(matchAddAuthorizedconnectappsjson(a.id, ANY), function () {});
  addAuthorizedconnectappsjson(b.id);
});

bthread("Availablephonenumber nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAvailablephonenumber(x.id);
  for (var i=0; i<steps; i++) {
    updateAvailablephonenumber(x.id);
  }
  if (pick([true,false])) { deleteAvailablephonenumber(x.id); }
  verifyAvailablephonenumberExists(x.id);
  verifyAvailablephonenumberUpdated(x.id);
});

bthread("Availablephonenumber nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAvailablephonenumber(a.id);
  block(matchAddAvailablephonenumber(a.id, ANY), function () {});
  addAvailablephonenumber(b.id);
});

bthread("Availablephonenumbersjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAvailablephonenumbersjson(x.id);
  for (var i=0; i<steps; i++) {
    updateAvailablephonenumbersjson(x.id);
  }
  if (pick([true,false])) { deleteAvailablephonenumbersjson(x.id); }
  verifyAvailablephonenumbersjsonExists(x.id);
  verifyAvailablephonenumbersjsonUpdated(x.id);
});

bthread("Availablephonenumbersjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAvailablephonenumbersjson(a.id);
  block(matchAddAvailablephonenumbersjson(a.id, ANY), function () {});
  addAvailablephonenumbersjson(b.id);
});

bthread("Balancejson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBalancejson(x.id);
  for (var i=0; i<steps; i++) {
    updateBalancejson(x.id);
  }
  if (pick([true,false])) { deleteBalancejson(x.id); }
  verifyBalancejsonExists(x.id);
  verifyBalancejsonUpdated(x.id);
});

bthread("Balancejson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBalancejson(a.id);
  block(matchAddBalancejson(a.id, ANY), function () {});
  addBalancejson(b.id);
});

bthread("Call nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCall(x.id);
  for (var i=0; i<steps; i++) {
    updateCall(x.id);
  }
  if (pick([true,false])) { deleteCall(x.id); }
  verifyCallExists(x.id);
  verifyCallUpdated(x.id);
});

bthread("Call nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCall(a.id);
  block(matchAddCall(a.id, ANY), function () {});
  addCall(b.id);
});

bthread("Callsidjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCallsidjson(x.id);
  for (var i=0; i<steps; i++) {
    updateCallsidjson(x.id);
  }
  if (pick([true,false])) { deleteCallsidjson(x.id); }
  verifyCallsidjsonExists(x.id);
  verifyCallsidjsonUpdated(x.id);
});

bthread("Callsidjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallsidjson(a.id);
  block(matchAddCallsidjson(a.id, ANY), function () {});
  addCallsidjson(b.id);
});

bthread("Callsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCallsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateCallsjson(x.id);
  }
  if (pick([true,false])) { deleteCallsjson(x.id); }
  verifyCallsjsonExists(x.id);
  verifyCallsjsonUpdated(x.id);
});

bthread("Callsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCallsjson(a.id);
  block(matchAddCallsjson(a.id, ANY), function () {});
  addCallsjson(b.id);
});

bthread("Conference nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConference(x.id);
  for (var i=0; i<steps; i++) {
    updateConference(x.id);
  }
  if (pick([true,false])) { deleteConference(x.id); }
  verifyConferenceExists(x.id);
  verifyConferenceUpdated(x.id);
});

bthread("Conference nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConference(a.id);
  block(matchAddConference(a.id, ANY), function () {});
  addConference(b.id);
});

bthread("Conferencesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConferencesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateConferencesjson(x.id);
  }
  if (pick([true,false])) { deleteConferencesjson(x.id); }
  verifyConferencesjsonExists(x.id);
  verifyConferencesjsonUpdated(x.id);
});

bthread("Conferencesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConferencesjson(a.id);
  block(matchAddConferencesjson(a.id, ANY), function () {});
  addConferencesjson(b.id);
});

bthread("Connectapp nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConnectapp(x.id);
  for (var i=0; i<steps; i++) {
    updateConnectapp(x.id);
  }
  if (pick([true,false])) { deleteConnectapp(x.id); }
  verifyConnectappExists(x.id);
  verifyConnectappUpdated(x.id);
});

bthread("Connectapp nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConnectapp(a.id);
  block(matchAddConnectapp(a.id, ANY), function () {});
  addConnectapp(b.id);
});

bthread("Connectappsidjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConnectappsidjson(x.id);
  for (var i=0; i<steps; i++) {
    updateConnectappsidjson(x.id);
  }
  if (pick([true,false])) { deleteConnectappsidjson(x.id); }
  verifyConnectappsidjsonExists(x.id);
  verifyConnectappsidjsonUpdated(x.id);
});

bthread("Connectappsidjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConnectappsidjson(a.id);
  block(matchAddConnectappsidjson(a.id, ANY), function () {});
  addConnectappsidjson(b.id);
});

bthread("Connectappsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConnectappsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateConnectappsjson(x.id);
  }
  if (pick([true,false])) { deleteConnectappsjson(x.id); }
  verifyConnectappsjsonExists(x.id);
  verifyConnectappsjsonUpdated(x.id);
});

bthread("Connectappsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConnectappsjson(a.id);
  block(matchAddConnectappsjson(a.id, ANY), function () {});
  addConnectappsjson(b.id);
});

bthread("Countrycodejson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCountrycodejson(x.id);
  for (var i=0; i<steps; i++) {
    updateCountrycodejson(x.id);
  }
  if (pick([true,false])) { deleteCountrycodejson(x.id); }
  verifyCountrycodejsonExists(x.id);
  verifyCountrycodejsonUpdated(x.id);
});

bthread("Countrycodejson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCountrycodejson(a.id);
  block(matchAddCountrycodejson(a.id, ANY), function () {});
  addCountrycodejson(b.id);
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

bthread("Credentiallist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCredentiallist(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentiallist(x.id);
  }
  if (pick([true,false])) { deleteCredentiallist(x.id); }
  verifyCredentiallistExists(x.id);
  verifyCredentiallistUpdated(x.id);
});

bthread("Credentiallist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentiallist(a.id);
  block(matchAddCredentiallist(a.id, ANY), function () {});
  addCredentiallist(b.id);
});

bthread("Credentiallistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCredentiallistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentiallistmapping(x.id);
  }
  if (pick([true,false])) { deleteCredentiallistmapping(x.id); }
  verifyCredentiallistmappingExists(x.id);
  verifyCredentiallistmappingUpdated(x.id);
});

bthread("Credentiallistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentiallistmapping(a.id);
  block(matchAddCredentiallistmapping(a.id, ANY), function () {});
  addCredentiallistmapping(b.id);
});

bthread("Credentiallistmappingsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCredentiallistmappingsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentiallistmappingsjson(x.id);
  }
  if (pick([true,false])) { deleteCredentiallistmappingsjson(x.id); }
  verifyCredentiallistmappingsjsonExists(x.id);
  verifyCredentiallistmappingsjsonUpdated(x.id);
});

bthread("Credentiallistmappingsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentiallistmappingsjson(a.id);
  block(matchAddCredentiallistmappingsjson(a.id, ANY), function () {});
  addCredentiallistmappingsjson(b.id);
});

bthread("Credentiallistsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCredentiallistsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentiallistsjson(x.id);
  }
  if (pick([true,false])) { deleteCredentiallistsjson(x.id); }
  verifyCredentiallistsjsonExists(x.id);
  verifyCredentiallistsjsonUpdated(x.id);
});

bthread("Credentiallistsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentiallistsjson(a.id);
  block(matchAddCredentiallistsjson(a.id, ANY), function () {});
  addCredentiallistsjson(b.id);
});

bthread("Credentialsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCredentialsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentialsjson(x.id);
  }
  if (pick([true,false])) { deleteCredentialsjson(x.id); }
  verifyCredentialsjsonExists(x.id);
  verifyCredentialsjsonUpdated(x.id);
});

bthread("Credentialsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentialsjson(a.id);
  block(matchAddCredentialsjson(a.id, ANY), function () {});
  addCredentialsjson(b.id);
});

bthread("Dailyjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDailyjson(x.id);
  for (var i=0; i<steps; i++) {
    updateDailyjson(x.id);
  }
  if (pick([true,false])) { deleteDailyjson(x.id); }
  verifyDailyjsonExists(x.id);
  verifyDailyjsonUpdated(x.id);
});

bthread("Dailyjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDailyjson(a.id);
  block(matchAddDailyjson(a.id, ANY), function () {});
  addDailyjson(b.id);
});

bthread("Datajson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDatajson(x.id);
  for (var i=0; i<steps; i++) {
    updateDatajson(x.id);
  }
  if (pick([true,false])) { deleteDatajson(x.id); }
  verifyDatajsonExists(x.id);
  verifyDatajsonUpdated(x.id);
});

bthread("Datajson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDatajson(a.id);
  block(matchAddDatajson(a.id, ANY), function () {});
  addDatajson(b.id);
});

bthread("Dependentphonenumbersjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDependentphonenumbersjson(x.id);
  for (var i=0; i<steps; i++) {
    updateDependentphonenumbersjson(x.id);
  }
  if (pick([true,false])) { deleteDependentphonenumbersjson(x.id); }
  verifyDependentphonenumbersjsonExists(x.id);
  verifyDependentphonenumbersjsonUpdated(x.id);
});

bthread("Dependentphonenumbersjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDependentphonenumbersjson(a.id);
  block(matchAddDependentphonenumbersjson(a.id, ANY), function () {});
  addDependentphonenumbersjson(b.id);
});

bthread("Domain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDomain(x.id);
  for (var i=0; i<steps; i++) {
    updateDomain(x.id);
  }
  if (pick([true,false])) { deleteDomain(x.id); }
  verifyDomainExists(x.id);
  verifyDomainUpdated(x.id);
});

bthread("Domain nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDomain(a.id);
  block(matchAddDomain(a.id, ANY), function () {});
  addDomain(b.id);
});

bthread("Domainsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDomainsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateDomainsjson(x.id);
  }
  if (pick([true,false])) { deleteDomainsjson(x.id); }
  verifyDomainsjsonExists(x.id);
  verifyDomainsjsonUpdated(x.id);
});

bthread("Domainsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDomainsjson(a.id);
  block(matchAddDomainsjson(a.id, ANY), function () {});
  addDomainsjson(b.id);
});

bthread("Eventsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEventsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateEventsjson(x.id);
  }
  if (pick([true,false])) { deleteEventsjson(x.id); }
  verifyEventsjsonExists(x.id);
  verifyEventsjsonUpdated(x.id);
});

bthread("Eventsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEventsjson(a.id);
  block(matchAddEventsjson(a.id, ANY), function () {});
  addEventsjson(b.id);
});

bthread("Extension nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addExtension(x.id);
  for (var i=0; i<steps; i++) {
    updateExtension(x.id);
  }
  if (pick([true,false])) { deleteExtension(x.id); }
  verifyExtensionExists(x.id);
  verifyExtensionUpdated(x.id);
});

bthread("Extension nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addExtension(a.id);
  block(matchAddExtension(a.id, ANY), function () {});
  addExtension(b.id);
});

bthread("Extensionsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addExtensionsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateExtensionsjson(x.id);
  }
  if (pick([true,false])) { deleteExtensionsjson(x.id); }
  verifyExtensionsjsonExists(x.id);
  verifyExtensionsjsonUpdated(x.id);
});

bthread("Extensionsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addExtensionsjson(a.id);
  block(matchAddExtensionsjson(a.id, ANY), function () {});
  addExtensionsjson(b.id);
});

bthread("Feedbackjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFeedbackjson(x.id);
  for (var i=0; i<steps; i++) {
    updateFeedbackjson(x.id);
  }
  if (pick([true,false])) { deleteFeedbackjson(x.id); }
  verifyFeedbackjsonExists(x.id);
  verifyFeedbackjsonUpdated(x.id);
});

bthread("Feedbackjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFeedbackjson(a.id);
  block(matchAddFeedbackjson(a.id, ANY), function () {});
  addFeedbackjson(b.id);
});

bthread("Incomingphonenumber nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIncomingphonenumber(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumber(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumber(x.id); }
  verifyIncomingphonenumberExists(x.id);
  verifyIncomingphonenumberUpdated(x.id);
});

bthread("Incomingphonenumber nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumber(a.id);
  block(matchAddIncomingphonenumber(a.id, ANY), function () {});
  addIncomingphonenumber(b.id);
});

bthread("Incomingphonenumbersjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIncomingphonenumbersjson(x.id);
  for (var i=0; i<steps; i++) {
    updateIncomingphonenumbersjson(x.id);
  }
  if (pick([true,false])) { deleteIncomingphonenumbersjson(x.id); }
  verifyIncomingphonenumbersjsonExists(x.id);
  verifyIncomingphonenumbersjsonUpdated(x.id);
});

bthread("Incomingphonenumbersjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncomingphonenumbersjson(a.id);
  block(matchAddIncomingphonenumbersjson(a.id, ANY), function () {});
  addIncomingphonenumbersjson(b.id);
});

bthread("Ipaccesscontrollist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIpaccesscontrollist(x.id);
  for (var i=0; i<steps; i++) {
    updateIpaccesscontrollist(x.id);
  }
  if (pick([true,false])) { deleteIpaccesscontrollist(x.id); }
  verifyIpaccesscontrollistExists(x.id);
  verifyIpaccesscontrollistUpdated(x.id);
});

bthread("Ipaccesscontrollist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIpaccesscontrollist(a.id);
  block(matchAddIpaccesscontrollist(a.id, ANY), function () {});
  addIpaccesscontrollist(b.id);
});

bthread("Ipaccesscontrollistmapping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIpaccesscontrollistmapping(x.id);
  for (var i=0; i<steps; i++) {
    updateIpaccesscontrollistmapping(x.id);
  }
  if (pick([true,false])) { deleteIpaccesscontrollistmapping(x.id); }
  verifyIpaccesscontrollistmappingExists(x.id);
  verifyIpaccesscontrollistmappingUpdated(x.id);
});

bthread("Ipaccesscontrollistmapping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIpaccesscontrollistmapping(a.id);
  block(matchAddIpaccesscontrollistmapping(a.id, ANY), function () {});
  addIpaccesscontrollistmapping(b.id);
});

bthread("Ipaccesscontrollistmappingsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIpaccesscontrollistmappingsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateIpaccesscontrollistmappingsjson(x.id);
  }
  if (pick([true,false])) { deleteIpaccesscontrollistmappingsjson(x.id); }
  verifyIpaccesscontrollistmappingsjsonExists(x.id);
  verifyIpaccesscontrollistmappingsjsonUpdated(x.id);
});

bthread("Ipaccesscontrollistmappingsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIpaccesscontrollistmappingsjson(a.id);
  block(matchAddIpaccesscontrollistmappingsjson(a.id, ANY), function () {});
  addIpaccesscontrollistmappingsjson(b.id);
});

bthread("Ipaccesscontrollistsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIpaccesscontrollistsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateIpaccesscontrollistsjson(x.id);
  }
  if (pick([true,false])) { deleteIpaccesscontrollistsjson(x.id); }
  verifyIpaccesscontrollistsjsonExists(x.id);
  verifyIpaccesscontrollistsjsonUpdated(x.id);
});

bthread("Ipaccesscontrollistsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIpaccesscontrollistsjson(a.id);
  block(matchAddIpaccesscontrollistsjson(a.id, ANY), function () {});
  addIpaccesscontrollistsjson(b.id);
});

bthread("Ipaddress nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIpaddress(x.id);
  for (var i=0; i<steps; i++) {
    updateIpaddress(x.id);
  }
  if (pick([true,false])) { deleteIpaddress(x.id); }
  verifyIpaddressExists(x.id);
  verifyIpaddressUpdated(x.id);
});

bthread("Ipaddress nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIpaddress(a.id);
  block(matchAddIpaddress(a.id, ANY), function () {});
  addIpaddress(b.id);
});

bthread("Ipaddressesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIpaddressesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateIpaddressesjson(x.id);
  }
  if (pick([true,false])) { deleteIpaddressesjson(x.id); }
  verifyIpaddressesjsonExists(x.id);
  verifyIpaddressesjsonUpdated(x.id);
});

bthread("Ipaddressesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIpaddressesjson(a.id);
  block(matchAddIpaddressesjson(a.id, ANY), function () {});
  addIpaddressesjson(b.id);
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

bthread("Keysjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addKeysjson(x.id);
  for (var i=0; i<steps; i++) {
    updateKeysjson(x.id);
  }
  if (pick([true,false])) { deleteKeysjson(x.id); }
  verifyKeysjsonExists(x.id);
  verifyKeysjsonUpdated(x.id);
});

bthread("Keysjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addKeysjson(a.id);
  block(matchAddKeysjson(a.id, ANY), function () {});
  addKeysjson(b.id);
});

bthread("Lastmonthjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLastmonthjson(x.id);
  for (var i=0; i<steps; i++) {
    updateLastmonthjson(x.id);
  }
  if (pick([true,false])) { deleteLastmonthjson(x.id); }
  verifyLastmonthjsonExists(x.id);
  verifyLastmonthjsonUpdated(x.id);
});

bthread("Lastmonthjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLastmonthjson(a.id);
  block(matchAddLastmonthjson(a.id, ANY), function () {});
  addLastmonthjson(b.id);
});

bthread("Localjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLocaljson(x.id);
  for (var i=0; i<steps; i++) {
    updateLocaljson(x.id);
  }
  if (pick([true,false])) { deleteLocaljson(x.id); }
  verifyLocaljsonExists(x.id);
  verifyLocaljsonUpdated(x.id);
});

bthread("Localjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLocaljson(a.id);
  block(matchAddLocaljson(a.id, ANY), function () {});
  addLocaljson(b.id);
});

bthread("Machinetomachinejson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMachinetomachinejson(x.id);
  for (var i=0; i<steps; i++) {
    updateMachinetomachinejson(x.id);
  }
  if (pick([true,false])) { deleteMachinetomachinejson(x.id); }
  verifyMachinetomachinejsonExists(x.id);
  verifyMachinetomachinejsonUpdated(x.id);
});

bthread("Machinetomachinejson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMachinetomachinejson(a.id);
  block(matchAddMachinetomachinejson(a.id, ANY), function () {});
  addMachinetomachinejson(b.id);
});

bthread("Media nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMedia(a.id);
  block(matchAddMedia(a.id, ANY), function () {});
  addMedia(b.id);
});

bthread("Mediajson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMediajson(x.id);
  for (var i=0; i<steps; i++) {
    updateMediajson(x.id);
  }
  if (pick([true,false])) { deleteMediajson(x.id); }
  verifyMediajsonExists(x.id);
  verifyMediajsonUpdated(x.id);
});

bthread("Mediajson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMediajson(a.id);
  block(matchAddMediajson(a.id, ANY), function () {});
  addMediajson(b.id);
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

bthread("Membersjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMembersjson(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersjson(x.id);
  }
  if (pick([true,false])) { deleteMembersjson(x.id); }
  verifyMembersjsonExists(x.id);
  verifyMembersjsonUpdated(x.id);
});

bthread("Membersjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersjson(a.id);
  block(matchAddMembersjson(a.id, ANY), function () {});
  addMembersjson(b.id);
});

bthread("Message nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMessage(x.id);
  for (var i=0; i<steps; i++) {
    updateMessage(x.id);
  }
  if (pick([true,false])) { deleteMessage(x.id); }
  verifyMessageExists(x.id);
  verifyMessageUpdated(x.id);
});

bthread("Message nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessage(a.id);
  block(matchAddMessage(a.id, ANY), function () {});
  addMessage(b.id);
});

bthread("Messagesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMessagesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateMessagesjson(x.id);
  }
  if (pick([true,false])) { deleteMessagesjson(x.id); }
  verifyMessagesjsonExists(x.id);
  verifyMessagesjsonUpdated(x.id);
});

bthread("Messagesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessagesjson(a.id);
  block(matchAddMessagesjson(a.id, ANY), function () {});
  addMessagesjson(b.id);
});

bthread("Mobilejson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMobilejson(x.id);
  for (var i=0; i<steps; i++) {
    updateMobilejson(x.id);
  }
  if (pick([true,false])) { deleteMobilejson(x.id); }
  verifyMobilejsonExists(x.id);
  verifyMobilejsonUpdated(x.id);
});

bthread("Mobilejson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMobilejson(a.id);
  block(matchAddMobilejson(a.id, ANY), function () {});
  addMobilejson(b.id);
});

bthread("Monthlyjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMonthlyjson(x.id);
  for (var i=0; i<steps; i++) {
    updateMonthlyjson(x.id);
  }
  if (pick([true,false])) { deleteMonthlyjson(x.id); }
  verifyMonthlyjsonExists(x.id);
  verifyMonthlyjsonUpdated(x.id);
});

bthread("Monthlyjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMonthlyjson(a.id);
  block(matchAddMonthlyjson(a.id, ANY), function () {});
  addMonthlyjson(b.id);
});

bthread("Nationaljson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNationaljson(x.id);
  for (var i=0; i<steps; i++) {
    updateNationaljson(x.id);
  }
  if (pick([true,false])) { deleteNationaljson(x.id); }
  verifyNationaljsonExists(x.id);
  verifyNationaljsonUpdated(x.id);
});

bthread("Nationaljson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNationaljson(a.id);
  block(matchAddNationaljson(a.id, ANY), function () {});
  addNationaljson(b.id);
});

bthread("Notification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNotification(a.id);
  block(matchAddNotification(a.id, ANY), function () {});
  addNotification(b.id);
});

bthread("Notificationsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNotificationsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateNotificationsjson(x.id);
  }
  if (pick([true,false])) { deleteNotificationsjson(x.id); }
  verifyNotificationsjsonExists(x.id);
  verifyNotificationsjsonUpdated(x.id);
});

bthread("Notificationsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNotificationsjson(a.id);
  block(matchAddNotificationsjson(a.id, ANY), function () {});
  addNotificationsjson(b.id);
});

bthread("Outgoingcallerid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOutgoingcallerid(x.id);
  for (var i=0; i<steps; i++) {
    updateOutgoingcallerid(x.id);
  }
  if (pick([true,false])) { deleteOutgoingcallerid(x.id); }
  verifyOutgoingcalleridExists(x.id);
  verifyOutgoingcalleridUpdated(x.id);
});

bthread("Outgoingcallerid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOutgoingcallerid(a.id);
  block(matchAddOutgoingcallerid(a.id, ANY), function () {});
  addOutgoingcallerid(b.id);
});

bthread("Outgoingcalleridsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOutgoingcalleridsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateOutgoingcalleridsjson(x.id);
  }
  if (pick([true,false])) { deleteOutgoingcalleridsjson(x.id); }
  verifyOutgoingcalleridsjsonExists(x.id);
  verifyOutgoingcalleridsjsonUpdated(x.id);
});

bthread("Outgoingcalleridsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOutgoingcalleridsjson(a.id);
  block(matchAddOutgoingcalleridsjson(a.id, ANY), function () {});
  addOutgoingcalleridsjson(b.id);
});

bthread("Participant nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addParticipant(x.id);
  for (var i=0; i<steps; i++) {
    updateParticipant(x.id);
  }
  if (pick([true,false])) { deleteParticipant(x.id); }
  verifyParticipantExists(x.id);
  verifyParticipantUpdated(x.id);
});

bthread("Participant nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addParticipant(a.id);
  block(matchAddParticipant(a.id, ANY), function () {});
  addParticipant(b.id);
});

bthread("Participantsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addParticipantsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateParticipantsjson(x.id);
  }
  if (pick([true,false])) { deleteParticipantsjson(x.id); }
  verifyParticipantsjsonExists(x.id);
  verifyParticipantsjsonUpdated(x.id);
});

bthread("Participantsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addParticipantsjson(a.id);
  block(matchAddParticipantsjson(a.id, ANY), function () {});
  addParticipantsjson(b.id);
});

bthread("Payload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPayload(x.id);
  for (var i=0; i<steps; i++) {
    updatePayload(x.id);
  }
  if (pick([true,false])) { deletePayload(x.id); }
  verifyPayloadExists(x.id);
  verifyPayloadUpdated(x.id);
});

bthread("Payload nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPayload(a.id);
  block(matchAddPayload(a.id, ANY), function () {});
  addPayload(b.id);
});

bthread("Payloadsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPayloadsjson(x.id);
  for (var i=0; i<steps; i++) {
    updatePayloadsjson(x.id);
  }
  if (pick([true,false])) { deletePayloadsjson(x.id); }
  verifyPayloadsjsonExists(x.id);
  verifyPayloadsjsonUpdated(x.id);
});

bthread("Payloadsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPayloadsjson(a.id);
  block(matchAddPayloadsjson(a.id, ANY), function () {});
  addPayloadsjson(b.id);
});

bthread("Payment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPayment(x.id);
  for (var i=0; i<steps; i++) {
    updatePayment(x.id);
  }
  if (pick([true,false])) { deletePayment(x.id); }
  verifyPaymentExists(x.id);
  verifyPaymentUpdated(x.id);
});

bthread("Payment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPayment(a.id);
  block(matchAddPayment(a.id, ANY), function () {});
  addPayment(b.id);
});

bthread("Paymentsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPaymentsjson(x.id);
  for (var i=0; i<steps; i++) {
    updatePaymentsjson(x.id);
  }
  if (pick([true,false])) { deletePaymentsjson(x.id); }
  verifyPaymentsjsonExists(x.id);
  verifyPaymentsjsonUpdated(x.id);
});

bthread("Paymentsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPaymentsjson(a.id);
  block(matchAddPaymentsjson(a.id, ANY), function () {});
  addPaymentsjson(b.id);
});

bthread("Queue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addQueue(a.id);
  block(matchAddQueue(a.id, ANY), function () {});
  addQueue(b.id);
});

bthread("Queuesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addQueuesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateQueuesjson(x.id);
  }
  if (pick([true,false])) { deleteQueuesjson(x.id); }
  verifyQueuesjsonExists(x.id);
  verifyQueuesjsonUpdated(x.id);
});

bthread("Queuesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addQueuesjson(a.id);
  block(matchAddQueuesjson(a.id, ANY), function () {});
  addQueuesjson(b.id);
});

bthread("Record nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecord(a.id);
  block(matchAddRecord(a.id, ANY), function () {});
  addRecord(b.id);
});

bthread("Recording nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRecording(x.id);
  for (var i=0; i<steps; i++) {
    updateRecording(x.id);
  }
  if (pick([true,false])) { deleteRecording(x.id); }
  verifyRecordingExists(x.id);
  verifyRecordingUpdated(x.id);
});

bthread("Recording nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecording(a.id);
  block(matchAddRecording(a.id, ANY), function () {});
  addRecording(b.id);
});

bthread("Recordingsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRecordingsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateRecordingsjson(x.id);
  }
  if (pick([true,false])) { deleteRecordingsjson(x.id); }
  verifyRecordingsjsonExists(x.id);
  verifyRecordingsjsonUpdated(x.id);
});

bthread("Recordingsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecordingsjson(a.id);
  block(matchAddRecordingsjson(a.id, ANY), function () {});
  addRecordingsjson(b.id);
});

bthread("Recordsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRecordsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateRecordsjson(x.id);
  }
  if (pick([true,false])) { deleteRecordsjson(x.id); }
  verifyRecordsjsonExists(x.id);
  verifyRecordsjsonUpdated(x.id);
});

bthread("Recordsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRecordsjson(a.id);
  block(matchAddRecordsjson(a.id, ANY), function () {});
  addRecordsjson(b.id);
});

bthread("Registration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRegistration(x.id);
  for (var i=0; i<steps; i++) {
    updateRegistration(x.id);
  }
  if (pick([true,false])) { deleteRegistration(x.id); }
  verifyRegistrationExists(x.id);
  verifyRegistrationUpdated(x.id);
});

bthread("Registration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRegistration(a.id);
  block(matchAddRegistration(a.id, ANY), function () {});
  addRegistration(b.id);
});

bthread("Sharedcostjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSharedcostjson(x.id);
  for (var i=0; i<steps; i++) {
    updateSharedcostjson(x.id);
  }
  if (pick([true,false])) { deleteSharedcostjson(x.id); }
  verifySharedcostjsonExists(x.id);
  verifySharedcostjsonUpdated(x.id);
});

bthread("Sharedcostjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSharedcostjson(a.id);
  block(matchAddSharedcostjson(a.id, ANY), function () {});
  addSharedcostjson(b.id);
});

bthread("Shortcode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShortcode(x.id);
  for (var i=0; i<steps; i++) {
    updateShortcode(x.id);
  }
  if (pick([true,false])) { deleteShortcode(x.id); }
  verifyShortcodeExists(x.id);
  verifyShortcodeUpdated(x.id);
});

bthread("Shortcode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addShortcode(a.id);
  block(matchAddShortcode(a.id, ANY), function () {});
  addShortcode(b.id);
});

bthread("Shortcodesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShortcodesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateShortcodesjson(x.id);
  }
  if (pick([true,false])) { deleteShortcodesjson(x.id); }
  verifyShortcodesjsonExists(x.id);
  verifyShortcodesjsonUpdated(x.id);
});

bthread("Shortcodesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addShortcodesjson(a.id);
  block(matchAddShortcodesjson(a.id, ANY), function () {});
  addShortcodesjson(b.id);
});

bthread("Sidjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSidjson(x.id);
  for (var i=0; i<steps; i++) {
    updateSidjson(x.id);
  }
  if (pick([true,false])) { deleteSidjson(x.id); }
  verifySidjsonExists(x.id);
  verifySidjsonUpdated(x.id);
});

bthread("Sidjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSidjson(a.id);
  block(matchAddSidjson(a.id, ANY), function () {});
  addSidjson(b.id);
});

bthread("Signingkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSigningkey(x.id);
  for (var i=0; i<steps; i++) {
    updateSigningkey(x.id);
  }
  if (pick([true,false])) { deleteSigningkey(x.id); }
  verifySigningkeyExists(x.id);
  verifySigningkeyUpdated(x.id);
});

bthread("Signingkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSigningkey(a.id);
  block(matchAddSigningkey(a.id, ANY), function () {});
  addSigningkey(b.id);
});

bthread("Signingkeysjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSigningkeysjson(x.id);
  for (var i=0; i<steps; i++) {
    updateSigningkeysjson(x.id);
  }
  if (pick([true,false])) { deleteSigningkeysjson(x.id); }
  verifySigningkeysjsonExists(x.id);
  verifySigningkeysjsonUpdated(x.id);
});

bthread("Signingkeysjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSigningkeysjson(a.id);
  block(matchAddSigningkeysjson(a.id, ANY), function () {});
  addSigningkeysjson(b.id);
});

bthread("Sip nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSip(x.id);
  for (var i=0; i<steps; i++) {
    updateSip(x.id);
  }
  if (pick([true,false])) { deleteSip(x.id); }
  verifySipExists(x.id);
  verifySipUpdated(x.id);
});

bthread("Sip nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSip(a.id);
  block(matchAddSip(a.id, ANY), function () {});
  addSip(b.id);
});

bthread("Siprec nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSiprec(x.id);
  for (var i=0; i<steps; i++) {
    updateSiprec(x.id);
  }
  if (pick([true,false])) { deleteSiprec(x.id); }
  verifySiprecExists(x.id);
  verifySiprecUpdated(x.id);
});

bthread("Siprec nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSiprec(a.id);
  block(matchAddSiprec(a.id, ANY), function () {});
  addSiprec(b.id);
});

bthread("Siprecjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSiprecjson(x.id);
  for (var i=0; i<steps; i++) {
    updateSiprecjson(x.id);
  }
  if (pick([true,false])) { deleteSiprecjson(x.id); }
  verifySiprecjsonExists(x.id);
  verifySiprecjsonUpdated(x.id);
});

bthread("Siprecjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSiprecjson(a.id);
  block(matchAddSiprecjson(a.id, ANY), function () {});
  addSiprecjson(b.id);
});

bthread("Sm nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSm(x.id);
  for (var i=0; i<steps; i++) {
    updateSm(x.id);
  }
  if (pick([true,false])) { deleteSm(x.id); }
  verifySmExists(x.id);
  verifySmUpdated(x.id);
});

bthread("Sm nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSm(a.id);
  block(matchAddSm(a.id, ANY), function () {});
  addSm(b.id);
});

bthread("Stream nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStream(x.id);
  for (var i=0; i<steps; i++) {
    updateStream(x.id);
  }
  if (pick([true,false])) { deleteStream(x.id); }
  verifyStreamExists(x.id);
  verifyStreamUpdated(x.id);
});

bthread("Stream nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStream(a.id);
  block(matchAddStream(a.id, ANY), function () {});
  addStream(b.id);
});

bthread("Streamsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStreamsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateStreamsjson(x.id);
  }
  if (pick([true,false])) { deleteStreamsjson(x.id); }
  verifyStreamsjsonExists(x.id);
  verifyStreamsjsonUpdated(x.id);
});

bthread("Streamsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStreamsjson(a.id);
  block(matchAddStreamsjson(a.id, ANY), function () {});
  addStreamsjson(b.id);
});

bthread("Thismonthjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addThismonthjson(x.id);
  for (var i=0; i<steps; i++) {
    updateThismonthjson(x.id);
  }
  if (pick([true,false])) { deleteThismonthjson(x.id); }
  verifyThismonthjsonExists(x.id);
  verifyThismonthjsonUpdated(x.id);
});

bthread("Thismonthjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addThismonthjson(a.id);
  block(matchAddThismonthjson(a.id, ANY), function () {});
  addThismonthjson(b.id);
});

bthread("Todayjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTodayjson(x.id);
  for (var i=0; i<steps; i++) {
    updateTodayjson(x.id);
  }
  if (pick([true,false])) { deleteTodayjson(x.id); }
  verifyTodayjsonExists(x.id);
  verifyTodayjsonUpdated(x.id);
});

bthread("Todayjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTodayjson(a.id);
  block(matchAddTodayjson(a.id, ANY), function () {});
  addTodayjson(b.id);
});

bthread("Tokensjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTokensjson(x.id);
  for (var i=0; i<steps; i++) {
    updateTokensjson(x.id);
  }
  if (pick([true,false])) { deleteTokensjson(x.id); }
  verifyTokensjsonExists(x.id);
  verifyTokensjsonUpdated(x.id);
});

bthread("Tokensjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTokensjson(a.id);
  block(matchAddTokensjson(a.id, ANY), function () {});
  addTokensjson(b.id);
});

bthread("Tollfreejson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTollfreejson(x.id);
  for (var i=0; i<steps; i++) {
    updateTollfreejson(x.id);
  }
  if (pick([true,false])) { deleteTollfreejson(x.id); }
  verifyTollfreejsonExists(x.id);
  verifyTollfreejsonUpdated(x.id);
});

bthread("Tollfreejson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTollfreejson(a.id);
  block(matchAddTollfreejson(a.id, ANY), function () {});
  addTollfreejson(b.id);
});

bthread("Transcription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTranscription(x.id);
  for (var i=0; i<steps; i++) {
    updateTranscription(x.id);
  }
  if (pick([true,false])) { deleteTranscription(x.id); }
  verifyTranscriptionExists(x.id);
  verifyTranscriptionUpdated(x.id);
});

bthread("Transcription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTranscription(a.id);
  block(matchAddTranscription(a.id, ANY), function () {});
  addTranscription(b.id);
});

bthread("Transcriptionsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTranscriptionsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateTranscriptionsjson(x.id);
  }
  if (pick([true,false])) { deleteTranscriptionsjson(x.id); }
  verifyTranscriptionsjsonExists(x.id);
  verifyTranscriptionsjsonUpdated(x.id);
});

bthread("Transcriptionsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTranscriptionsjson(a.id);
  block(matchAddTranscriptionsjson(a.id, ANY), function () {});
  addTranscriptionsjson(b.id);
});

bthread("Trigger nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTrigger(x.id);
  for (var i=0; i<steps; i++) {
    updateTrigger(x.id);
  }
  if (pick([true,false])) { deleteTrigger(x.id); }
  verifyTriggerExists(x.id);
  verifyTriggerUpdated(x.id);
});

bthread("Trigger nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTrigger(a.id);
  block(matchAddTrigger(a.id, ANY), function () {});
  addTrigger(b.id);
});

bthread("Triggersjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTriggersjson(x.id);
  for (var i=0; i<steps; i++) {
    updateTriggersjson(x.id);
  }
  if (pick([true,false])) { deleteTriggersjson(x.id); }
  verifyTriggersjsonExists(x.id);
  verifyTriggersjsonUpdated(x.id);
});

bthread("Triggersjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTriggersjson(a.id);
  block(matchAddTriggersjson(a.id, ANY), function () {});
  addTriggersjson(b.id);
});

bthread("Usage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsage(a.id);
  block(matchAddUsage(a.id, ANY), function () {});
  addUsage(b.id);
});

bthread("Userdefinedmessagesjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUserdefinedmessagesjson(x.id);
  for (var i=0; i<steps; i++) {
    updateUserdefinedmessagesjson(x.id);
  }
  if (pick([true,false])) { deleteUserdefinedmessagesjson(x.id); }
  verifyUserdefinedmessagesjsonExists(x.id);
  verifyUserdefinedmessagesjsonUpdated(x.id);
});

bthread("Userdefinedmessagesjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserdefinedmessagesjson(a.id);
  block(matchAddUserdefinedmessagesjson(a.id, ANY), function () {});
  addUserdefinedmessagesjson(b.id);
});

bthread("Userdefinedmessagesubscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUserdefinedmessagesubscription(x.id);
  for (var i=0; i<steps; i++) {
    updateUserdefinedmessagesubscription(x.id);
  }
  if (pick([true,false])) { deleteUserdefinedmessagesubscription(x.id); }
  verifyUserdefinedmessagesubscriptionExists(x.id);
  verifyUserdefinedmessagesubscriptionUpdated(x.id);
});

bthread("Userdefinedmessagesubscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserdefinedmessagesubscription(a.id);
  block(matchAddUserdefinedmessagesubscription(a.id, ANY), function () {});
  addUserdefinedmessagesubscription(b.id);
});

bthread("Userdefinedmessagesubscriptionsjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUserdefinedmessagesubscriptionsjson(x.id);
  for (var i=0; i<steps; i++) {
    updateUserdefinedmessagesubscriptionsjson(x.id);
  }
  if (pick([true,false])) { deleteUserdefinedmessagesubscriptionsjson(x.id); }
  verifyUserdefinedmessagesubscriptionsjsonExists(x.id);
  verifyUserdefinedmessagesubscriptionsjsonUpdated(x.id);
});

bthread("Userdefinedmessagesubscriptionsjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserdefinedmessagesubscriptionsjson(a.id);
  block(matchAddUserdefinedmessagesubscriptionsjson(a.id, ANY), function () {});
  addUserdefinedmessagesubscriptionsjson(b.id);
});

bthread("Voipjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVoipjson(x.id);
  for (var i=0; i<steps; i++) {
    updateVoipjson(x.id);
  }
  if (pick([true,false])) { deleteVoipjson(x.id); }
  verifyVoipjsonExists(x.id);
  verifyVoipjsonUpdated(x.id);
});

bthread("Voipjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addVoipjson(a.id);
  block(matchAddVoipjson(a.id, ANY), function () {});
  addVoipjson(b.id);
});

bthread("Yearlyjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addYearlyjson(x.id);
  for (var i=0; i<steps; i++) {
    updateYearlyjson(x.id);
  }
  if (pick([true,false])) { deleteYearlyjson(x.id); }
  verifyYearlyjsonExists(x.id);
  verifyYearlyjsonUpdated(x.id);
});

bthread("Yearlyjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addYearlyjson(a.id);
  block(matchAddYearlyjson(a.id, ANY), function () {});
  addYearlyjson(b.id);
});

bthread("Yesterdayjson nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addYesterdayjson(x.id);
  for (var i=0; i<steps; i++) {
    updateYesterdayjson(x.id);
  }
  if (pick([true,false])) { deleteYesterdayjson(x.id); }
  verifyYesterdayjsonExists(x.id);
  verifyYesterdayjsonUpdated(x.id);
});

bthread("Yesterdayjson nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addYesterdayjson(a.id);
  block(matchAddYesterdayjson(a.id, ANY), function () {});
  addYesterdayjson(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("20100401 create verification", function () {
  const e = waitForAny20100401Added();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDelete20100401(k), function () {
    verify20100401Exists(k);
  });
});

bthread("20100401 update verification", function () {
  const e = waitForAny20100401Updated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDelete20100401(k), function () {
    verify20100401Updated(k);
  });
});

bthread("20100401 delete verification", function () {
  const e = waitForAny20100401Deleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAdd20100401(k), function () {
    verify20100401DoesNotExist(k);
  });
});

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccount(k), function () {
    verifyAccountExists(k);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccount(k), function () {
    verifyAccountUpdated(k);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccount(k), function () {
    verifyAccountDoesNotExist(k);
  });
});

bthread("Accountsjson create verification", function () {
  const e = waitForAnyAccountsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccountsjson(k), function () {
    verifyAccountsjsonExists(k);
  });
});

bthread("Accountsjson update verification", function () {
  const e = waitForAnyAccountsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccountsjson(k), function () {
    verifyAccountsjsonUpdated(k);
  });
});

bthread("Accountsjson delete verification", function () {
  const e = waitForAnyAccountsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccountsjson(k), function () {
    verifyAccountsjsonDoesNotExist(k);
  });
});

bthread("Addonresult create verification", function () {
  const e = waitForAnyAddonresultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddonresult(k), function () {
    verifyAddonresultExists(k);
  });
});

bthread("Addonresult update verification", function () {
  const e = waitForAnyAddonresultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddonresult(k), function () {
    verifyAddonresultUpdated(k);
  });
});

bthread("Addonresult delete verification", function () {
  const e = waitForAnyAddonresultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddonresult(k), function () {
    verifyAddonresultDoesNotExist(k);
  });
});

bthread("Addonresultsjson create verification", function () {
  const e = waitForAnyAddonresultsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddonresultsjson(k), function () {
    verifyAddonresultsjsonExists(k);
  });
});

bthread("Addonresultsjson update verification", function () {
  const e = waitForAnyAddonresultsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddonresultsjson(k), function () {
    verifyAddonresultsjsonUpdated(k);
  });
});

bthread("Addonresultsjson delete verification", function () {
  const e = waitForAnyAddonresultsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddonresultsjson(k), function () {
    verifyAddonresultsjsonDoesNotExist(k);
  });
});

bthread("Address create verification", function () {
  const e = waitForAnyAddressAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddress(k), function () {
    verifyAddressExists(k);
  });
});

bthread("Address update verification", function () {
  const e = waitForAnyAddressUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddress(k), function () {
    verifyAddressUpdated(k);
  });
});

bthread("Address delete verification", function () {
  const e = waitForAnyAddressDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddress(k), function () {
    verifyAddressDoesNotExist(k);
  });
});

bthread("Addressesjson create verification", function () {
  const e = waitForAnyAddressesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddressesjson(k), function () {
    verifyAddressesjsonExists(k);
  });
});

bthread("Addressesjson update verification", function () {
  const e = waitForAnyAddressesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddressesjson(k), function () {
    verifyAddressesjsonUpdated(k);
  });
});

bthread("Addressesjson delete verification", function () {
  const e = waitForAnyAddressesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddressesjson(k), function () {
    verifyAddressesjsonDoesNotExist(k);
  });
});

bthread("Alltimejson create verification", function () {
  const e = waitForAnyAlltimejsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlltimejson(k), function () {
    verifyAlltimejsonExists(k);
  });
});

bthread("Alltimejson update verification", function () {
  const e = waitForAnyAlltimejsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlltimejson(k), function () {
    verifyAlltimejsonUpdated(k);
  });
});

bthread("Alltimejson delete verification", function () {
  const e = waitForAnyAlltimejsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAlltimejson(k), function () {
    verifyAlltimejsonDoesNotExist(k);
  });
});

bthread("Application create verification", function () {
  const e = waitForAnyApplicationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplication(k), function () {
    verifyApplicationExists(k);
  });
});

bthread("Application update verification", function () {
  const e = waitForAnyApplicationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplication(k), function () {
    verifyApplicationUpdated(k);
  });
});

bthread("Application delete verification", function () {
  const e = waitForAnyApplicationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplication(k), function () {
    verifyApplicationDoesNotExist(k);
  });
});

bthread("Applicationsjson create verification", function () {
  const e = waitForAnyApplicationsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationsjson(k), function () {
    verifyApplicationsjsonExists(k);
  });
});

bthread("Applicationsjson update verification", function () {
  const e = waitForAnyApplicationsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationsjson(k), function () {
    verifyApplicationsjsonUpdated(k);
  });
});

bthread("Applicationsjson delete verification", function () {
  const e = waitForAnyApplicationsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplicationsjson(k), function () {
    verifyApplicationsjsonDoesNotExist(k);
  });
});

bthread("Assignedaddon create verification", function () {
  const e = waitForAnyAssignedaddonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignedaddon(k), function () {
    verifyAssignedaddonExists(k);
  });
});

bthread("Assignedaddon update verification", function () {
  const e = waitForAnyAssignedaddonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignedaddon(k), function () {
    verifyAssignedaddonUpdated(k);
  });
});

bthread("Assignedaddon delete verification", function () {
  const e = waitForAnyAssignedaddonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssignedaddon(k), function () {
    verifyAssignedaddonDoesNotExist(k);
  });
});

bthread("Assignedaddonsjson create verification", function () {
  const e = waitForAnyAssignedaddonsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignedaddonsjson(k), function () {
    verifyAssignedaddonsjsonExists(k);
  });
});

bthread("Assignedaddonsjson update verification", function () {
  const e = waitForAnyAssignedaddonsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignedaddonsjson(k), function () {
    verifyAssignedaddonsjsonUpdated(k);
  });
});

bthread("Assignedaddonsjson delete verification", function () {
  const e = waitForAnyAssignedaddonsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssignedaddonsjson(k), function () {
    verifyAssignedaddonsjsonDoesNotExist(k);
  });
});

bthread("Auth create verification", function () {
  const e = waitForAnyAuthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuth(k), function () {
    verifyAuthExists(k);
  });
});

bthread("Auth update verification", function () {
  const e = waitForAnyAuthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuth(k), function () {
    verifyAuthUpdated(k);
  });
});

bthread("Auth delete verification", function () {
  const e = waitForAnyAuthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuth(k), function () {
    verifyAuthDoesNotExist(k);
  });
});

bthread("Authorizedconnectapp create verification", function () {
  const e = waitForAnyAuthorizedconnectappAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorizedconnectapp(k), function () {
    verifyAuthorizedconnectappExists(k);
  });
});

bthread("Authorizedconnectapp update verification", function () {
  const e = waitForAnyAuthorizedconnectappUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorizedconnectapp(k), function () {
    verifyAuthorizedconnectappUpdated(k);
  });
});

bthread("Authorizedconnectapp delete verification", function () {
  const e = waitForAnyAuthorizedconnectappDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthorizedconnectapp(k), function () {
    verifyAuthorizedconnectappDoesNotExist(k);
  });
});

bthread("Authorizedconnectappsjson create verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorizedconnectappsjson(k), function () {
    verifyAuthorizedconnectappsjsonExists(k);
  });
});

bthread("Authorizedconnectappsjson update verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorizedconnectappsjson(k), function () {
    verifyAuthorizedconnectappsjsonUpdated(k);
  });
});

bthread("Authorizedconnectappsjson delete verification", function () {
  const e = waitForAnyAuthorizedconnectappsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthorizedconnectappsjson(k), function () {
    verifyAuthorizedconnectappsjsonDoesNotExist(k);
  });
});

bthread("Availablephonenumber create verification", function () {
  const e = waitForAnyAvailablephonenumberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailablephonenumber(k), function () {
    verifyAvailablephonenumberExists(k);
  });
});

bthread("Availablephonenumber update verification", function () {
  const e = waitForAnyAvailablephonenumberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailablephonenumber(k), function () {
    verifyAvailablephonenumberUpdated(k);
  });
});

bthread("Availablephonenumber delete verification", function () {
  const e = waitForAnyAvailablephonenumberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvailablephonenumber(k), function () {
    verifyAvailablephonenumberDoesNotExist(k);
  });
});

bthread("Availablephonenumbersjson create verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailablephonenumbersjson(k), function () {
    verifyAvailablephonenumbersjsonExists(k);
  });
});

bthread("Availablephonenumbersjson update verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailablephonenumbersjson(k), function () {
    verifyAvailablephonenumbersjsonUpdated(k);
  });
});

bthread("Availablephonenumbersjson delete verification", function () {
  const e = waitForAnyAvailablephonenumbersjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvailablephonenumbersjson(k), function () {
    verifyAvailablephonenumbersjsonDoesNotExist(k);
  });
});

bthread("Balancejson create verification", function () {
  const e = waitForAnyBalancejsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBalancejson(k), function () {
    verifyBalancejsonExists(k);
  });
});

bthread("Balancejson update verification", function () {
  const e = waitForAnyBalancejsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBalancejson(k), function () {
    verifyBalancejsonUpdated(k);
  });
});

bthread("Balancejson delete verification", function () {
  const e = waitForAnyBalancejsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBalancejson(k), function () {
    verifyBalancejsonDoesNotExist(k);
  });
});

bthread("Call create verification", function () {
  const e = waitForAnyCallAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCall(k), function () {
    verifyCallExists(k);
  });
});

bthread("Call update verification", function () {
  const e = waitForAnyCallUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCall(k), function () {
    verifyCallUpdated(k);
  });
});

bthread("Call delete verification", function () {
  const e = waitForAnyCallDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCall(k), function () {
    verifyCallDoesNotExist(k);
  });
});

bthread("Callsidjson create verification", function () {
  const e = waitForAnyCallsidjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallsidjson(k), function () {
    verifyCallsidjsonExists(k);
  });
});

bthread("Callsidjson update verification", function () {
  const e = waitForAnyCallsidjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallsidjson(k), function () {
    verifyCallsidjsonUpdated(k);
  });
});

bthread("Callsidjson delete verification", function () {
  const e = waitForAnyCallsidjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallsidjson(k), function () {
    verifyCallsidjsonDoesNotExist(k);
  });
});

bthread("Callsjson create verification", function () {
  const e = waitForAnyCallsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallsjson(k), function () {
    verifyCallsjsonExists(k);
  });
});

bthread("Callsjson update verification", function () {
  const e = waitForAnyCallsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCallsjson(k), function () {
    verifyCallsjsonUpdated(k);
  });
});

bthread("Callsjson delete verification", function () {
  const e = waitForAnyCallsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCallsjson(k), function () {
    verifyCallsjsonDoesNotExist(k);
  });
});

bthread("Conference create verification", function () {
  const e = waitForAnyConferenceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConference(k), function () {
    verifyConferenceExists(k);
  });
});

bthread("Conference update verification", function () {
  const e = waitForAnyConferenceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConference(k), function () {
    verifyConferenceUpdated(k);
  });
});

bthread("Conference delete verification", function () {
  const e = waitForAnyConferenceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConference(k), function () {
    verifyConferenceDoesNotExist(k);
  });
});

bthread("Conferencesjson create verification", function () {
  const e = waitForAnyConferencesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferencesjson(k), function () {
    verifyConferencesjsonExists(k);
  });
});

bthread("Conferencesjson update verification", function () {
  const e = waitForAnyConferencesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConferencesjson(k), function () {
    verifyConferencesjsonUpdated(k);
  });
});

bthread("Conferencesjson delete verification", function () {
  const e = waitForAnyConferencesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConferencesjson(k), function () {
    verifyConferencesjsonDoesNotExist(k);
  });
});

bthread("Connectapp create verification", function () {
  const e = waitForAnyConnectappAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectapp(k), function () {
    verifyConnectappExists(k);
  });
});

bthread("Connectapp update verification", function () {
  const e = waitForAnyConnectappUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectapp(k), function () {
    verifyConnectappUpdated(k);
  });
});

bthread("Connectapp delete verification", function () {
  const e = waitForAnyConnectappDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConnectapp(k), function () {
    verifyConnectappDoesNotExist(k);
  });
});

bthread("Connectappsidjson create verification", function () {
  const e = waitForAnyConnectappsidjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectappsidjson(k), function () {
    verifyConnectappsidjsonExists(k);
  });
});

bthread("Connectappsidjson update verification", function () {
  const e = waitForAnyConnectappsidjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectappsidjson(k), function () {
    verifyConnectappsidjsonUpdated(k);
  });
});

bthread("Connectappsidjson delete verification", function () {
  const e = waitForAnyConnectappsidjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConnectappsidjson(k), function () {
    verifyConnectappsidjsonDoesNotExist(k);
  });
});

bthread("Connectappsjson create verification", function () {
  const e = waitForAnyConnectappsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectappsjson(k), function () {
    verifyConnectappsjsonExists(k);
  });
});

bthread("Connectappsjson update verification", function () {
  const e = waitForAnyConnectappsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConnectappsjson(k), function () {
    verifyConnectappsjsonUpdated(k);
  });
});

bthread("Connectappsjson delete verification", function () {
  const e = waitForAnyConnectappsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConnectappsjson(k), function () {
    verifyConnectappsjsonDoesNotExist(k);
  });
});

bthread("Countrycodejson create verification", function () {
  const e = waitForAnyCountrycodejsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCountrycodejson(k), function () {
    verifyCountrycodejsonExists(k);
  });
});

bthread("Countrycodejson update verification", function () {
  const e = waitForAnyCountrycodejsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCountrycodejson(k), function () {
    verifyCountrycodejsonUpdated(k);
  });
});

bthread("Countrycodejson delete verification", function () {
  const e = waitForAnyCountrycodejsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCountrycodejson(k), function () {
    verifyCountrycodejsonDoesNotExist(k);
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

bthread("Credentiallist create verification", function () {
  const e = waitForAnyCredentiallistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallist(k), function () {
    verifyCredentiallistExists(k);
  });
});

bthread("Credentiallist update verification", function () {
  const e = waitForAnyCredentiallistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallist(k), function () {
    verifyCredentiallistUpdated(k);
  });
});

bthread("Credentiallist delete verification", function () {
  const e = waitForAnyCredentiallistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentiallist(k), function () {
    verifyCredentiallistDoesNotExist(k);
  });
});

bthread("Credentiallistmapping create verification", function () {
  const e = waitForAnyCredentiallistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallistmapping(k), function () {
    verifyCredentiallistmappingExists(k);
  });
});

bthread("Credentiallistmapping update verification", function () {
  const e = waitForAnyCredentiallistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallistmapping(k), function () {
    verifyCredentiallistmappingUpdated(k);
  });
});

bthread("Credentiallistmapping delete verification", function () {
  const e = waitForAnyCredentiallistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentiallistmapping(k), function () {
    verifyCredentiallistmappingDoesNotExist(k);
  });
});

bthread("Credentiallistmappingsjson create verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallistmappingsjson(k), function () {
    verifyCredentiallistmappingsjsonExists(k);
  });
});

bthread("Credentiallistmappingsjson update verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallistmappingsjson(k), function () {
    verifyCredentiallistmappingsjsonUpdated(k);
  });
});

bthread("Credentiallistmappingsjson delete verification", function () {
  const e = waitForAnyCredentiallistmappingsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentiallistmappingsjson(k), function () {
    verifyCredentiallistmappingsjsonDoesNotExist(k);
  });
});

bthread("Credentiallistsjson create verification", function () {
  const e = waitForAnyCredentiallistsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallistsjson(k), function () {
    verifyCredentiallistsjsonExists(k);
  });
});

bthread("Credentiallistsjson update verification", function () {
  const e = waitForAnyCredentiallistsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentiallistsjson(k), function () {
    verifyCredentiallistsjsonUpdated(k);
  });
});

bthread("Credentiallistsjson delete verification", function () {
  const e = waitForAnyCredentiallistsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentiallistsjson(k), function () {
    verifyCredentiallistsjsonDoesNotExist(k);
  });
});

bthread("Credentialsjson create verification", function () {
  const e = waitForAnyCredentialsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentialsjson(k), function () {
    verifyCredentialsjsonExists(k);
  });
});

bthread("Credentialsjson update verification", function () {
  const e = waitForAnyCredentialsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentialsjson(k), function () {
    verifyCredentialsjsonUpdated(k);
  });
});

bthread("Credentialsjson delete verification", function () {
  const e = waitForAnyCredentialsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentialsjson(k), function () {
    verifyCredentialsjsonDoesNotExist(k);
  });
});

bthread("Dailyjson create verification", function () {
  const e = waitForAnyDailyjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDailyjson(k), function () {
    verifyDailyjsonExists(k);
  });
});

bthread("Dailyjson update verification", function () {
  const e = waitForAnyDailyjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDailyjson(k), function () {
    verifyDailyjsonUpdated(k);
  });
});

bthread("Dailyjson delete verification", function () {
  const e = waitForAnyDailyjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDailyjson(k), function () {
    verifyDailyjsonDoesNotExist(k);
  });
});

bthread("Datajson create verification", function () {
  const e = waitForAnyDatajsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDatajson(k), function () {
    verifyDatajsonExists(k);
  });
});

bthread("Datajson update verification", function () {
  const e = waitForAnyDatajsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDatajson(k), function () {
    verifyDatajsonUpdated(k);
  });
});

bthread("Datajson delete verification", function () {
  const e = waitForAnyDatajsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDatajson(k), function () {
    verifyDatajsonDoesNotExist(k);
  });
});

bthread("Dependentphonenumbersjson create verification", function () {
  const e = waitForAnyDependentphonenumbersjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependentphonenumbersjson(k), function () {
    verifyDependentphonenumbersjsonExists(k);
  });
});

bthread("Dependentphonenumbersjson update verification", function () {
  const e = waitForAnyDependentphonenumbersjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependentphonenumbersjson(k), function () {
    verifyDependentphonenumbersjsonUpdated(k);
  });
});

bthread("Dependentphonenumbersjson delete verification", function () {
  const e = waitForAnyDependentphonenumbersjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDependentphonenumbersjson(k), function () {
    verifyDependentphonenumbersjsonDoesNotExist(k);
  });
});

bthread("Domain create verification", function () {
  const e = waitForAnyDomainAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDomain(k), function () {
    verifyDomainExists(k);
  });
});

bthread("Domain update verification", function () {
  const e = waitForAnyDomainUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDomain(k), function () {
    verifyDomainUpdated(k);
  });
});

bthread("Domain delete verification", function () {
  const e = waitForAnyDomainDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDomain(k), function () {
    verifyDomainDoesNotExist(k);
  });
});

bthread("Domainsjson create verification", function () {
  const e = waitForAnyDomainsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDomainsjson(k), function () {
    verifyDomainsjsonExists(k);
  });
});

bthread("Domainsjson update verification", function () {
  const e = waitForAnyDomainsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDomainsjson(k), function () {
    verifyDomainsjsonUpdated(k);
  });
});

bthread("Domainsjson delete verification", function () {
  const e = waitForAnyDomainsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDomainsjson(k), function () {
    verifyDomainsjsonDoesNotExist(k);
  });
});

bthread("Eventsjson create verification", function () {
  const e = waitForAnyEventsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventsjson(k), function () {
    verifyEventsjsonExists(k);
  });
});

bthread("Eventsjson update verification", function () {
  const e = waitForAnyEventsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventsjson(k), function () {
    verifyEventsjsonUpdated(k);
  });
});

bthread("Eventsjson delete verification", function () {
  const e = waitForAnyEventsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEventsjson(k), function () {
    verifyEventsjsonDoesNotExist(k);
  });
});

bthread("Extension create verification", function () {
  const e = waitForAnyExtensionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtension(k), function () {
    verifyExtensionExists(k);
  });
});

bthread("Extension update verification", function () {
  const e = waitForAnyExtensionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtension(k), function () {
    verifyExtensionUpdated(k);
  });
});

bthread("Extension delete verification", function () {
  const e = waitForAnyExtensionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExtension(k), function () {
    verifyExtensionDoesNotExist(k);
  });
});

bthread("Extensionsjson create verification", function () {
  const e = waitForAnyExtensionsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtensionsjson(k), function () {
    verifyExtensionsjsonExists(k);
  });
});

bthread("Extensionsjson update verification", function () {
  const e = waitForAnyExtensionsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtensionsjson(k), function () {
    verifyExtensionsjsonUpdated(k);
  });
});

bthread("Extensionsjson delete verification", function () {
  const e = waitForAnyExtensionsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExtensionsjson(k), function () {
    verifyExtensionsjsonDoesNotExist(k);
  });
});

bthread("Feedbackjson create verification", function () {
  const e = waitForAnyFeedbackjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFeedbackjson(k), function () {
    verifyFeedbackjsonExists(k);
  });
});

bthread("Feedbackjson update verification", function () {
  const e = waitForAnyFeedbackjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFeedbackjson(k), function () {
    verifyFeedbackjsonUpdated(k);
  });
});

bthread("Feedbackjson delete verification", function () {
  const e = waitForAnyFeedbackjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFeedbackjson(k), function () {
    verifyFeedbackjsonDoesNotExist(k);
  });
});

bthread("Incomingphonenumber create verification", function () {
  const e = waitForAnyIncomingphonenumberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumber(k), function () {
    verifyIncomingphonenumberExists(k);
  });
});

bthread("Incomingphonenumber update verification", function () {
  const e = waitForAnyIncomingphonenumberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumber(k), function () {
    verifyIncomingphonenumberUpdated(k);
  });
});

bthread("Incomingphonenumber delete verification", function () {
  const e = waitForAnyIncomingphonenumberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumber(k), function () {
    verifyIncomingphonenumberDoesNotExist(k);
  });
});

bthread("Incomingphonenumbersjson create verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbersjson(k), function () {
    verifyIncomingphonenumbersjsonExists(k);
  });
});

bthread("Incomingphonenumbersjson update verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncomingphonenumbersjson(k), function () {
    verifyIncomingphonenumbersjsonUpdated(k);
  });
});

bthread("Incomingphonenumbersjson delete verification", function () {
  const e = waitForAnyIncomingphonenumbersjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncomingphonenumbersjson(k), function () {
    verifyIncomingphonenumbersjsonDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollist create verification", function () {
  const e = waitForAnyIpaccesscontrollistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollist(k), function () {
    verifyIpaccesscontrollistExists(k);
  });
});

bthread("Ipaccesscontrollist update verification", function () {
  const e = waitForAnyIpaccesscontrollistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollist(k), function () {
    verifyIpaccesscontrollistUpdated(k);
  });
});

bthread("Ipaccesscontrollist delete verification", function () {
  const e = waitForAnyIpaccesscontrollistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIpaccesscontrollist(k), function () {
    verifyIpaccesscontrollistDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollistmapping create verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollistmapping(k), function () {
    verifyIpaccesscontrollistmappingExists(k);
  });
});

bthread("Ipaccesscontrollistmapping update verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollistmapping(k), function () {
    verifyIpaccesscontrollistmappingUpdated(k);
  });
});

bthread("Ipaccesscontrollistmapping delete verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIpaccesscontrollistmapping(k), function () {
    verifyIpaccesscontrollistmappingDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollistmappingsjson create verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollistmappingsjson(k), function () {
    verifyIpaccesscontrollistmappingsjsonExists(k);
  });
});

bthread("Ipaccesscontrollistmappingsjson update verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollistmappingsjson(k), function () {
    verifyIpaccesscontrollistmappingsjsonUpdated(k);
  });
});

bthread("Ipaccesscontrollistmappingsjson delete verification", function () {
  const e = waitForAnyIpaccesscontrollistmappingsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIpaccesscontrollistmappingsjson(k), function () {
    verifyIpaccesscontrollistmappingsjsonDoesNotExist(k);
  });
});

bthread("Ipaccesscontrollistsjson create verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollistsjson(k), function () {
    verifyIpaccesscontrollistsjsonExists(k);
  });
});

bthread("Ipaccesscontrollistsjson update verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaccesscontrollistsjson(k), function () {
    verifyIpaccesscontrollistsjsonUpdated(k);
  });
});

bthread("Ipaccesscontrollistsjson delete verification", function () {
  const e = waitForAnyIpaccesscontrollistsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIpaccesscontrollistsjson(k), function () {
    verifyIpaccesscontrollistsjsonDoesNotExist(k);
  });
});

bthread("Ipaddress create verification", function () {
  const e = waitForAnyIpaddressAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaddress(k), function () {
    verifyIpaddressExists(k);
  });
});

bthread("Ipaddress update verification", function () {
  const e = waitForAnyIpaddressUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaddress(k), function () {
    verifyIpaddressUpdated(k);
  });
});

bthread("Ipaddress delete verification", function () {
  const e = waitForAnyIpaddressDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIpaddress(k), function () {
    verifyIpaddressDoesNotExist(k);
  });
});

bthread("Ipaddressesjson create verification", function () {
  const e = waitForAnyIpaddressesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaddressesjson(k), function () {
    verifyIpaddressesjsonExists(k);
  });
});

bthread("Ipaddressesjson update verification", function () {
  const e = waitForAnyIpaddressesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIpaddressesjson(k), function () {
    verifyIpaddressesjsonUpdated(k);
  });
});

bthread("Ipaddressesjson delete verification", function () {
  const e = waitForAnyIpaddressesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIpaddressesjson(k), function () {
    verifyIpaddressesjsonDoesNotExist(k);
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

bthread("Keysjson create verification", function () {
  const e = waitForAnyKeysjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeysjson(k), function () {
    verifyKeysjsonExists(k);
  });
});

bthread("Keysjson update verification", function () {
  const e = waitForAnyKeysjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeysjson(k), function () {
    verifyKeysjsonUpdated(k);
  });
});

bthread("Keysjson delete verification", function () {
  const e = waitForAnyKeysjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddKeysjson(k), function () {
    verifyKeysjsonDoesNotExist(k);
  });
});

bthread("Lastmonthjson create verification", function () {
  const e = waitForAnyLastmonthjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLastmonthjson(k), function () {
    verifyLastmonthjsonExists(k);
  });
});

bthread("Lastmonthjson update verification", function () {
  const e = waitForAnyLastmonthjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLastmonthjson(k), function () {
    verifyLastmonthjsonUpdated(k);
  });
});

bthread("Lastmonthjson delete verification", function () {
  const e = waitForAnyLastmonthjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLastmonthjson(k), function () {
    verifyLastmonthjsonDoesNotExist(k);
  });
});

bthread("Localjson create verification", function () {
  const e = waitForAnyLocaljsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocaljson(k), function () {
    verifyLocaljsonExists(k);
  });
});

bthread("Localjson update verification", function () {
  const e = waitForAnyLocaljsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocaljson(k), function () {
    verifyLocaljsonUpdated(k);
  });
});

bthread("Localjson delete verification", function () {
  const e = waitForAnyLocaljsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLocaljson(k), function () {
    verifyLocaljsonDoesNotExist(k);
  });
});

bthread("Machinetomachinejson create verification", function () {
  const e = waitForAnyMachinetomachinejsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachinetomachinejson(k), function () {
    verifyMachinetomachinejsonExists(k);
  });
});

bthread("Machinetomachinejson update verification", function () {
  const e = waitForAnyMachinetomachinejsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachinetomachinejson(k), function () {
    verifyMachinetomachinejsonUpdated(k);
  });
});

bthread("Machinetomachinejson delete verification", function () {
  const e = waitForAnyMachinetomachinejsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMachinetomachinejson(k), function () {
    verifyMachinetomachinejsonDoesNotExist(k);
  });
});

bthread("Media create verification", function () {
  const e = waitForAnyMediaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMedia(k), function () {
    verifyMediaExists(k);
  });
});

bthread("Media update verification", function () {
  const e = waitForAnyMediaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMedia(k), function () {
    verifyMediaUpdated(k);
  });
});

bthread("Media delete verification", function () {
  const e = waitForAnyMediaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMedia(k), function () {
    verifyMediaDoesNotExist(k);
  });
});

bthread("Mediajson create verification", function () {
  const e = waitForAnyMediajsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMediajson(k), function () {
    verifyMediajsonExists(k);
  });
});

bthread("Mediajson update verification", function () {
  const e = waitForAnyMediajsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMediajson(k), function () {
    verifyMediajsonUpdated(k);
  });
});

bthread("Mediajson delete verification", function () {
  const e = waitForAnyMediajsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMediajson(k), function () {
    verifyMediajsonDoesNotExist(k);
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

bthread("Membersjson create verification", function () {
  const e = waitForAnyMembersjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersjson(k), function () {
    verifyMembersjsonExists(k);
  });
});

bthread("Membersjson update verification", function () {
  const e = waitForAnyMembersjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersjson(k), function () {
    verifyMembersjsonUpdated(k);
  });
});

bthread("Membersjson delete verification", function () {
  const e = waitForAnyMembersjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersjson(k), function () {
    verifyMembersjsonDoesNotExist(k);
  });
});

bthread("Message create verification", function () {
  const e = waitForAnyMessageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessage(k), function () {
    verifyMessageExists(k);
  });
});

bthread("Message update verification", function () {
  const e = waitForAnyMessageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessage(k), function () {
    verifyMessageUpdated(k);
  });
});

bthread("Message delete verification", function () {
  const e = waitForAnyMessageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessage(k), function () {
    verifyMessageDoesNotExist(k);
  });
});

bthread("Messagesjson create verification", function () {
  const e = waitForAnyMessagesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagesjson(k), function () {
    verifyMessagesjsonExists(k);
  });
});

bthread("Messagesjson update verification", function () {
  const e = waitForAnyMessagesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagesjson(k), function () {
    verifyMessagesjsonUpdated(k);
  });
});

bthread("Messagesjson delete verification", function () {
  const e = waitForAnyMessagesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessagesjson(k), function () {
    verifyMessagesjsonDoesNotExist(k);
  });
});

bthread("Mobilejson create verification", function () {
  const e = waitForAnyMobilejsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMobilejson(k), function () {
    verifyMobilejsonExists(k);
  });
});

bthread("Mobilejson update verification", function () {
  const e = waitForAnyMobilejsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMobilejson(k), function () {
    verifyMobilejsonUpdated(k);
  });
});

bthread("Mobilejson delete verification", function () {
  const e = waitForAnyMobilejsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMobilejson(k), function () {
    verifyMobilejsonDoesNotExist(k);
  });
});

bthread("Monthlyjson create verification", function () {
  const e = waitForAnyMonthlyjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMonthlyjson(k), function () {
    verifyMonthlyjsonExists(k);
  });
});

bthread("Monthlyjson update verification", function () {
  const e = waitForAnyMonthlyjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMonthlyjson(k), function () {
    verifyMonthlyjsonUpdated(k);
  });
});

bthread("Monthlyjson delete verification", function () {
  const e = waitForAnyMonthlyjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMonthlyjson(k), function () {
    verifyMonthlyjsonDoesNotExist(k);
  });
});

bthread("Nationaljson create verification", function () {
  const e = waitForAnyNationaljsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNationaljson(k), function () {
    verifyNationaljsonExists(k);
  });
});

bthread("Nationaljson update verification", function () {
  const e = waitForAnyNationaljsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNationaljson(k), function () {
    verifyNationaljsonUpdated(k);
  });
});

bthread("Nationaljson delete verification", function () {
  const e = waitForAnyNationaljsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNationaljson(k), function () {
    verifyNationaljsonDoesNotExist(k);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotification(k), function () {
    verifyNotificationExists(k);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotification(k), function () {
    verifyNotificationUpdated(k);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotification(k), function () {
    verifyNotificationDoesNotExist(k);
  });
});

bthread("Notificationsjson create verification", function () {
  const e = waitForAnyNotificationsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotificationsjson(k), function () {
    verifyNotificationsjsonExists(k);
  });
});

bthread("Notificationsjson update verification", function () {
  const e = waitForAnyNotificationsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotificationsjson(k), function () {
    verifyNotificationsjsonUpdated(k);
  });
});

bthread("Notificationsjson delete verification", function () {
  const e = waitForAnyNotificationsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotificationsjson(k), function () {
    verifyNotificationsjsonDoesNotExist(k);
  });
});

bthread("Outgoingcallerid create verification", function () {
  const e = waitForAnyOutgoingcalleridAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOutgoingcallerid(k), function () {
    verifyOutgoingcalleridExists(k);
  });
});

bthread("Outgoingcallerid update verification", function () {
  const e = waitForAnyOutgoingcalleridUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOutgoingcallerid(k), function () {
    verifyOutgoingcalleridUpdated(k);
  });
});

bthread("Outgoingcallerid delete verification", function () {
  const e = waitForAnyOutgoingcalleridDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOutgoingcallerid(k), function () {
    verifyOutgoingcalleridDoesNotExist(k);
  });
});

bthread("Outgoingcalleridsjson create verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOutgoingcalleridsjson(k), function () {
    verifyOutgoingcalleridsjsonExists(k);
  });
});

bthread("Outgoingcalleridsjson update verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOutgoingcalleridsjson(k), function () {
    verifyOutgoingcalleridsjsonUpdated(k);
  });
});

bthread("Outgoingcalleridsjson delete verification", function () {
  const e = waitForAnyOutgoingcalleridsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOutgoingcalleridsjson(k), function () {
    verifyOutgoingcalleridsjsonDoesNotExist(k);
  });
});

bthread("Participant create verification", function () {
  const e = waitForAnyParticipantAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipant(k), function () {
    verifyParticipantExists(k);
  });
});

bthread("Participant update verification", function () {
  const e = waitForAnyParticipantUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipant(k), function () {
    verifyParticipantUpdated(k);
  });
});

bthread("Participant delete verification", function () {
  const e = waitForAnyParticipantDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddParticipant(k), function () {
    verifyParticipantDoesNotExist(k);
  });
});

bthread("Participantsjson create verification", function () {
  const e = waitForAnyParticipantsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipantsjson(k), function () {
    verifyParticipantsjsonExists(k);
  });
});

bthread("Participantsjson update verification", function () {
  const e = waitForAnyParticipantsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipantsjson(k), function () {
    verifyParticipantsjsonUpdated(k);
  });
});

bthread("Participantsjson delete verification", function () {
  const e = waitForAnyParticipantsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddParticipantsjson(k), function () {
    verifyParticipantsjsonDoesNotExist(k);
  });
});

bthread("Payload create verification", function () {
  const e = waitForAnyPayloadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePayload(k), function () {
    verifyPayloadExists(k);
  });
});

bthread("Payload update verification", function () {
  const e = waitForAnyPayloadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePayload(k), function () {
    verifyPayloadUpdated(k);
  });
});

bthread("Payload delete verification", function () {
  const e = waitForAnyPayloadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPayload(k), function () {
    verifyPayloadDoesNotExist(k);
  });
});

bthread("Payloadsjson create verification", function () {
  const e = waitForAnyPayloadsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePayloadsjson(k), function () {
    verifyPayloadsjsonExists(k);
  });
});

bthread("Payloadsjson update verification", function () {
  const e = waitForAnyPayloadsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePayloadsjson(k), function () {
    verifyPayloadsjsonUpdated(k);
  });
});

bthread("Payloadsjson delete verification", function () {
  const e = waitForAnyPayloadsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPayloadsjson(k), function () {
    verifyPayloadsjsonDoesNotExist(k);
  });
});

bthread("Payment create verification", function () {
  const e = waitForAnyPaymentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePayment(k), function () {
    verifyPaymentExists(k);
  });
});

bthread("Payment update verification", function () {
  const e = waitForAnyPaymentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePayment(k), function () {
    verifyPaymentUpdated(k);
  });
});

bthread("Payment delete verification", function () {
  const e = waitForAnyPaymentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPayment(k), function () {
    verifyPaymentDoesNotExist(k);
  });
});

bthread("Paymentsjson create verification", function () {
  const e = waitForAnyPaymentsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsjson(k), function () {
    verifyPaymentsjsonExists(k);
  });
});

bthread("Paymentsjson update verification", function () {
  const e = waitForAnyPaymentsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePaymentsjson(k), function () {
    verifyPaymentsjsonUpdated(k);
  });
});

bthread("Paymentsjson delete verification", function () {
  const e = waitForAnyPaymentsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPaymentsjson(k), function () {
    verifyPaymentsjsonDoesNotExist(k);
  });
});

bthread("Queue create verification", function () {
  const e = waitForAnyQueueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQueue(k), function () {
    verifyQueueExists(k);
  });
});

bthread("Queue update verification", function () {
  const e = waitForAnyQueueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQueue(k), function () {
    verifyQueueUpdated(k);
  });
});

bthread("Queue delete verification", function () {
  const e = waitForAnyQueueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddQueue(k), function () {
    verifyQueueDoesNotExist(k);
  });
});

bthread("Queuesjson create verification", function () {
  const e = waitForAnyQueuesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQueuesjson(k), function () {
    verifyQueuesjsonExists(k);
  });
});

bthread("Queuesjson update verification", function () {
  const e = waitForAnyQueuesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQueuesjson(k), function () {
    verifyQueuesjsonUpdated(k);
  });
});

bthread("Queuesjson delete verification", function () {
  const e = waitForAnyQueuesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddQueuesjson(k), function () {
    verifyQueuesjsonDoesNotExist(k);
  });
});

bthread("Record create verification", function () {
  const e = waitForAnyRecordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecord(k), function () {
    verifyRecordExists(k);
  });
});

bthread("Record update verification", function () {
  const e = waitForAnyRecordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecord(k), function () {
    verifyRecordUpdated(k);
  });
});

bthread("Record delete verification", function () {
  const e = waitForAnyRecordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecord(k), function () {
    verifyRecordDoesNotExist(k);
  });
});

bthread("Recording create verification", function () {
  const e = waitForAnyRecordingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecording(k), function () {
    verifyRecordingExists(k);
  });
});

bthread("Recording update verification", function () {
  const e = waitForAnyRecordingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecording(k), function () {
    verifyRecordingUpdated(k);
  });
});

bthread("Recording delete verification", function () {
  const e = waitForAnyRecordingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecording(k), function () {
    verifyRecordingDoesNotExist(k);
  });
});

bthread("Recordingsjson create verification", function () {
  const e = waitForAnyRecordingsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingsjson(k), function () {
    verifyRecordingsjsonExists(k);
  });
});

bthread("Recordingsjson update verification", function () {
  const e = waitForAnyRecordingsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordingsjson(k), function () {
    verifyRecordingsjsonUpdated(k);
  });
});

bthread("Recordingsjson delete verification", function () {
  const e = waitForAnyRecordingsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecordingsjson(k), function () {
    verifyRecordingsjsonDoesNotExist(k);
  });
});

bthread("Recordsjson create verification", function () {
  const e = waitForAnyRecordsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordsjson(k), function () {
    verifyRecordsjsonExists(k);
  });
});

bthread("Recordsjson update verification", function () {
  const e = waitForAnyRecordsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecordsjson(k), function () {
    verifyRecordsjsonUpdated(k);
  });
});

bthread("Recordsjson delete verification", function () {
  const e = waitForAnyRecordsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecordsjson(k), function () {
    verifyRecordsjsonDoesNotExist(k);
  });
});

bthread("Registration create verification", function () {
  const e = waitForAnyRegistrationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegistration(k), function () {
    verifyRegistrationExists(k);
  });
});

bthread("Registration update verification", function () {
  const e = waitForAnyRegistrationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegistration(k), function () {
    verifyRegistrationUpdated(k);
  });
});

bthread("Registration delete verification", function () {
  const e = waitForAnyRegistrationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRegistration(k), function () {
    verifyRegistrationDoesNotExist(k);
  });
});

bthread("Sharedcostjson create verification", function () {
  const e = waitForAnySharedcostjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSharedcostjson(k), function () {
    verifySharedcostjsonExists(k);
  });
});

bthread("Sharedcostjson update verification", function () {
  const e = waitForAnySharedcostjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSharedcostjson(k), function () {
    verifySharedcostjsonUpdated(k);
  });
});

bthread("Sharedcostjson delete verification", function () {
  const e = waitForAnySharedcostjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSharedcostjson(k), function () {
    verifySharedcostjsonDoesNotExist(k);
  });
});

bthread("Shortcode create verification", function () {
  const e = waitForAnyShortcodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteShortcode(k), function () {
    verifyShortcodeExists(k);
  });
});

bthread("Shortcode update verification", function () {
  const e = waitForAnyShortcodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteShortcode(k), function () {
    verifyShortcodeUpdated(k);
  });
});

bthread("Shortcode delete verification", function () {
  const e = waitForAnyShortcodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddShortcode(k), function () {
    verifyShortcodeDoesNotExist(k);
  });
});

bthread("Shortcodesjson create verification", function () {
  const e = waitForAnyShortcodesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteShortcodesjson(k), function () {
    verifyShortcodesjsonExists(k);
  });
});

bthread("Shortcodesjson update verification", function () {
  const e = waitForAnyShortcodesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteShortcodesjson(k), function () {
    verifyShortcodesjsonUpdated(k);
  });
});

bthread("Shortcodesjson delete verification", function () {
  const e = waitForAnyShortcodesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddShortcodesjson(k), function () {
    verifyShortcodesjsonDoesNotExist(k);
  });
});

bthread("Sidjson create verification", function () {
  const e = waitForAnySidjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSidjson(k), function () {
    verifySidjsonExists(k);
  });
});

bthread("Sidjson update verification", function () {
  const e = waitForAnySidjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSidjson(k), function () {
    verifySidjsonUpdated(k);
  });
});

bthread("Sidjson delete verification", function () {
  const e = waitForAnySidjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSidjson(k), function () {
    verifySidjsonDoesNotExist(k);
  });
});

bthread("Signingkey create verification", function () {
  const e = waitForAnySigningkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSigningkey(k), function () {
    verifySigningkeyExists(k);
  });
});

bthread("Signingkey update verification", function () {
  const e = waitForAnySigningkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSigningkey(k), function () {
    verifySigningkeyUpdated(k);
  });
});

bthread("Signingkey delete verification", function () {
  const e = waitForAnySigningkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSigningkey(k), function () {
    verifySigningkeyDoesNotExist(k);
  });
});

bthread("Signingkeysjson create verification", function () {
  const e = waitForAnySigningkeysjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSigningkeysjson(k), function () {
    verifySigningkeysjsonExists(k);
  });
});

bthread("Signingkeysjson update verification", function () {
  const e = waitForAnySigningkeysjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSigningkeysjson(k), function () {
    verifySigningkeysjsonUpdated(k);
  });
});

bthread("Signingkeysjson delete verification", function () {
  const e = waitForAnySigningkeysjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSigningkeysjson(k), function () {
    verifySigningkeysjsonDoesNotExist(k);
  });
});

bthread("Sip create verification", function () {
  const e = waitForAnySipAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSip(k), function () {
    verifySipExists(k);
  });
});

bthread("Sip update verification", function () {
  const e = waitForAnySipUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSip(k), function () {
    verifySipUpdated(k);
  });
});

bthread("Sip delete verification", function () {
  const e = waitForAnySipDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSip(k), function () {
    verifySipDoesNotExist(k);
  });
});

bthread("Siprec create verification", function () {
  const e = waitForAnySiprecAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprec(k), function () {
    verifySiprecExists(k);
  });
});

bthread("Siprec update verification", function () {
  const e = waitForAnySiprecUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprec(k), function () {
    verifySiprecUpdated(k);
  });
});

bthread("Siprec delete verification", function () {
  const e = waitForAnySiprecDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSiprec(k), function () {
    verifySiprecDoesNotExist(k);
  });
});

bthread("Siprecjson create verification", function () {
  const e = waitForAnySiprecjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecjson(k), function () {
    verifySiprecjsonExists(k);
  });
});

bthread("Siprecjson update verification", function () {
  const e = waitForAnySiprecjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSiprecjson(k), function () {
    verifySiprecjsonUpdated(k);
  });
});

bthread("Siprecjson delete verification", function () {
  const e = waitForAnySiprecjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSiprecjson(k), function () {
    verifySiprecjsonDoesNotExist(k);
  });
});

bthread("Sm create verification", function () {
  const e = waitForAnySmAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSm(k), function () {
    verifySmExists(k);
  });
});

bthread("Sm update verification", function () {
  const e = waitForAnySmUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSm(k), function () {
    verifySmUpdated(k);
  });
});

bthread("Sm delete verification", function () {
  const e = waitForAnySmDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSm(k), function () {
    verifySmDoesNotExist(k);
  });
});

bthread("Stream create verification", function () {
  const e = waitForAnyStreamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStream(k), function () {
    verifyStreamExists(k);
  });
});

bthread("Stream update verification", function () {
  const e = waitForAnyStreamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStream(k), function () {
    verifyStreamUpdated(k);
  });
});

bthread("Stream delete verification", function () {
  const e = waitForAnyStreamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStream(k), function () {
    verifyStreamDoesNotExist(k);
  });
});

bthread("Streamsjson create verification", function () {
  const e = waitForAnyStreamsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamsjson(k), function () {
    verifyStreamsjsonExists(k);
  });
});

bthread("Streamsjson update verification", function () {
  const e = waitForAnyStreamsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStreamsjson(k), function () {
    verifyStreamsjsonUpdated(k);
  });
});

bthread("Streamsjson delete verification", function () {
  const e = waitForAnyStreamsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStreamsjson(k), function () {
    verifyStreamsjsonDoesNotExist(k);
  });
});

bthread("Thismonthjson create verification", function () {
  const e = waitForAnyThismonthjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteThismonthjson(k), function () {
    verifyThismonthjsonExists(k);
  });
});

bthread("Thismonthjson update verification", function () {
  const e = waitForAnyThismonthjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteThismonthjson(k), function () {
    verifyThismonthjsonUpdated(k);
  });
});

bthread("Thismonthjson delete verification", function () {
  const e = waitForAnyThismonthjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddThismonthjson(k), function () {
    verifyThismonthjsonDoesNotExist(k);
  });
});

bthread("Todayjson create verification", function () {
  const e = waitForAnyTodayjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTodayjson(k), function () {
    verifyTodayjsonExists(k);
  });
});

bthread("Todayjson update verification", function () {
  const e = waitForAnyTodayjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTodayjson(k), function () {
    verifyTodayjsonUpdated(k);
  });
});

bthread("Todayjson delete verification", function () {
  const e = waitForAnyTodayjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTodayjson(k), function () {
    verifyTodayjsonDoesNotExist(k);
  });
});

bthread("Tokensjson create verification", function () {
  const e = waitForAnyTokensjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTokensjson(k), function () {
    verifyTokensjsonExists(k);
  });
});

bthread("Tokensjson update verification", function () {
  const e = waitForAnyTokensjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTokensjson(k), function () {
    verifyTokensjsonUpdated(k);
  });
});

bthread("Tokensjson delete verification", function () {
  const e = waitForAnyTokensjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTokensjson(k), function () {
    verifyTokensjsonDoesNotExist(k);
  });
});

bthread("Tollfreejson create verification", function () {
  const e = waitForAnyTollfreejsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTollfreejson(k), function () {
    verifyTollfreejsonExists(k);
  });
});

bthread("Tollfreejson update verification", function () {
  const e = waitForAnyTollfreejsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTollfreejson(k), function () {
    verifyTollfreejsonUpdated(k);
  });
});

bthread("Tollfreejson delete verification", function () {
  const e = waitForAnyTollfreejsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTollfreejson(k), function () {
    verifyTollfreejsonDoesNotExist(k);
  });
});

bthread("Transcription create verification", function () {
  const e = waitForAnyTranscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTranscription(k), function () {
    verifyTranscriptionExists(k);
  });
});

bthread("Transcription update verification", function () {
  const e = waitForAnyTranscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTranscription(k), function () {
    verifyTranscriptionUpdated(k);
  });
});

bthread("Transcription delete verification", function () {
  const e = waitForAnyTranscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTranscription(k), function () {
    verifyTranscriptionDoesNotExist(k);
  });
});

bthread("Transcriptionsjson create verification", function () {
  const e = waitForAnyTranscriptionsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTranscriptionsjson(k), function () {
    verifyTranscriptionsjsonExists(k);
  });
});

bthread("Transcriptionsjson update verification", function () {
  const e = waitForAnyTranscriptionsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTranscriptionsjson(k), function () {
    verifyTranscriptionsjsonUpdated(k);
  });
});

bthread("Transcriptionsjson delete verification", function () {
  const e = waitForAnyTranscriptionsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTranscriptionsjson(k), function () {
    verifyTranscriptionsjsonDoesNotExist(k);
  });
});

bthread("Trigger create verification", function () {
  const e = waitForAnyTriggerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrigger(k), function () {
    verifyTriggerExists(k);
  });
});

bthread("Trigger update verification", function () {
  const e = waitForAnyTriggerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrigger(k), function () {
    verifyTriggerUpdated(k);
  });
});

bthread("Trigger delete verification", function () {
  const e = waitForAnyTriggerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTrigger(k), function () {
    verifyTriggerDoesNotExist(k);
  });
});

bthread("Triggersjson create verification", function () {
  const e = waitForAnyTriggersjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTriggersjson(k), function () {
    verifyTriggersjsonExists(k);
  });
});

bthread("Triggersjson update verification", function () {
  const e = waitForAnyTriggersjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTriggersjson(k), function () {
    verifyTriggersjsonUpdated(k);
  });
});

bthread("Triggersjson delete verification", function () {
  const e = waitForAnyTriggersjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTriggersjson(k), function () {
    verifyTriggersjsonDoesNotExist(k);
  });
});

bthread("Usage create verification", function () {
  const e = waitForAnyUsageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsage(k), function () {
    verifyUsageExists(k);
  });
});

bthread("Usage update verification", function () {
  const e = waitForAnyUsageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsage(k), function () {
    verifyUsageUpdated(k);
  });
});

bthread("Usage delete verification", function () {
  const e = waitForAnyUsageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsage(k), function () {
    verifyUsageDoesNotExist(k);
  });
});

bthread("Userdefinedmessagesjson create verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdefinedmessagesjson(k), function () {
    verifyUserdefinedmessagesjsonExists(k);
  });
});

bthread("Userdefinedmessagesjson update verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdefinedmessagesjson(k), function () {
    verifyUserdefinedmessagesjsonUpdated(k);
  });
});

bthread("Userdefinedmessagesjson delete verification", function () {
  const e = waitForAnyUserdefinedmessagesjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserdefinedmessagesjson(k), function () {
    verifyUserdefinedmessagesjsonDoesNotExist(k);
  });
});

bthread("Userdefinedmessagesubscription create verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdefinedmessagesubscription(k), function () {
    verifyUserdefinedmessagesubscriptionExists(k);
  });
});

bthread("Userdefinedmessagesubscription update verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdefinedmessagesubscription(k), function () {
    verifyUserdefinedmessagesubscriptionUpdated(k);
  });
});

bthread("Userdefinedmessagesubscription delete verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserdefinedmessagesubscription(k), function () {
    verifyUserdefinedmessagesubscriptionDoesNotExist(k);
  });
});

bthread("Userdefinedmessagesubscriptionsjson create verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdefinedmessagesubscriptionsjson(k), function () {
    verifyUserdefinedmessagesubscriptionsjsonExists(k);
  });
});

bthread("Userdefinedmessagesubscriptionsjson update verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdefinedmessagesubscriptionsjson(k), function () {
    verifyUserdefinedmessagesubscriptionsjsonUpdated(k);
  });
});

bthread("Userdefinedmessagesubscriptionsjson delete verification", function () {
  const e = waitForAnyUserdefinedmessagesubscriptionsjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserdefinedmessagesubscriptionsjson(k), function () {
    verifyUserdefinedmessagesubscriptionsjsonDoesNotExist(k);
  });
});

bthread("Voipjson create verification", function () {
  const e = waitForAnyVoipjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVoipjson(k), function () {
    verifyVoipjsonExists(k);
  });
});

bthread("Voipjson update verification", function () {
  const e = waitForAnyVoipjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVoipjson(k), function () {
    verifyVoipjsonUpdated(k);
  });
});

bthread("Voipjson delete verification", function () {
  const e = waitForAnyVoipjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVoipjson(k), function () {
    verifyVoipjsonDoesNotExist(k);
  });
});

bthread("Yearlyjson create verification", function () {
  const e = waitForAnyYearlyjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteYearlyjson(k), function () {
    verifyYearlyjsonExists(k);
  });
});

bthread("Yearlyjson update verification", function () {
  const e = waitForAnyYearlyjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteYearlyjson(k), function () {
    verifyYearlyjsonUpdated(k);
  });
});

bthread("Yearlyjson delete verification", function () {
  const e = waitForAnyYearlyjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddYearlyjson(k), function () {
    verifyYearlyjsonDoesNotExist(k);
  });
});

bthread("Yesterdayjson create verification", function () {
  const e = waitForAnyYesterdayjsonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteYesterdayjson(k), function () {
    verifyYesterdayjsonExists(k);
  });
});

bthread("Yesterdayjson update verification", function () {
  const e = waitForAnyYesterdayjsonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteYesterdayjson(k), function () {
    verifyYesterdayjsonUpdated(k);
  });
});

bthread("Yesterdayjson delete verification", function () {
  const e = waitForAnyYesterdayjsonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddYesterdayjson(k), function () {
    verifyYesterdayjsonDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique 20100401", function () {
  const x = waitForAny20100401Added();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAdd20100401(k, ANY), function () {});
});

bthread("Guard: Unique Account", function () {
  const x = waitForAnyAccountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccount(k, ANY), function () {});
});

bthread("Guard: Unique Accountsjson", function () {
  const x = waitForAnyAccountsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccountsjson(k, ANY), function () {});
});

bthread("Guard: Unique Addonresult", function () {
  const x = waitForAnyAddonresultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddonresult(k, ANY), function () {});
});

bthread("Guard: Unique Addonresultsjson", function () {
  const x = waitForAnyAddonresultsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddonresultsjson(k, ANY), function () {});
});

bthread("Guard: Unique Address", function () {
  const x = waitForAnyAddressAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddress(k, ANY), function () {});
});

bthread("Guard: Unique Addressesjson", function () {
  const x = waitForAnyAddressesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddressesjson(k, ANY), function () {});
});

bthread("Guard: Unique Alltimejson", function () {
  const x = waitForAnyAlltimejsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAlltimejson(k, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplication(k, ANY), function () {});
});

bthread("Guard: Unique Applicationsjson", function () {
  const x = waitForAnyApplicationsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplicationsjson(k, ANY), function () {});
});

bthread("Guard: Unique Assignedaddon", function () {
  const x = waitForAnyAssignedaddonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssignedaddon(k, ANY), function () {});
});

bthread("Guard: Unique Assignedaddonsjson", function () {
  const x = waitForAnyAssignedaddonsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssignedaddonsjson(k, ANY), function () {});
});

bthread("Guard: Unique Auth", function () {
  const x = waitForAnyAuthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuth(k, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectapp", function () {
  const x = waitForAnyAuthorizedconnectappAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthorizedconnectapp(k, ANY), function () {});
});

bthread("Guard: Unique Authorizedconnectappsjson", function () {
  const x = waitForAnyAuthorizedconnectappsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthorizedconnectappsjson(k, ANY), function () {});
});

bthread("Guard: Unique Availablephonenumber", function () {
  const x = waitForAnyAvailablephonenumberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvailablephonenumber(k, ANY), function () {});
});

bthread("Guard: Unique Availablephonenumbersjson", function () {
  const x = waitForAnyAvailablephonenumbersjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvailablephonenumbersjson(k, ANY), function () {});
});

bthread("Guard: Unique Balancejson", function () {
  const x = waitForAnyBalancejsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBalancejson(k, ANY), function () {});
});

bthread("Guard: Unique Call", function () {
  const x = waitForAnyCallAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCall(k, ANY), function () {});
});

bthread("Guard: Unique Callsidjson", function () {
  const x = waitForAnyCallsidjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallsidjson(k, ANY), function () {});
});

bthread("Guard: Unique Callsjson", function () {
  const x = waitForAnyCallsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCallsjson(k, ANY), function () {});
});

bthread("Guard: Unique Conference", function () {
  const x = waitForAnyConferenceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConference(k, ANY), function () {});
});

bthread("Guard: Unique Conferencesjson", function () {
  const x = waitForAnyConferencesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConferencesjson(k, ANY), function () {});
});

bthread("Guard: Unique Connectapp", function () {
  const x = waitForAnyConnectappAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConnectapp(k, ANY), function () {});
});

bthread("Guard: Unique Connectappsidjson", function () {
  const x = waitForAnyConnectappsidjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConnectappsidjson(k, ANY), function () {});
});

bthread("Guard: Unique Connectappsjson", function () {
  const x = waitForAnyConnectappsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConnectappsjson(k, ANY), function () {});
});

bthread("Guard: Unique Countrycodejson", function () {
  const x = waitForAnyCountrycodejsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCountrycodejson(k, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredential(k, ANY), function () {});
});

bthread("Guard: Unique Credentiallist", function () {
  const x = waitForAnyCredentiallistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentiallist(k, ANY), function () {});
});

bthread("Guard: Unique Credentiallistmapping", function () {
  const x = waitForAnyCredentiallistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentiallistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Credentiallistmappingsjson", function () {
  const x = waitForAnyCredentiallistmappingsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentiallistmappingsjson(k, ANY), function () {});
});

bthread("Guard: Unique Credentiallistsjson", function () {
  const x = waitForAnyCredentiallistsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentiallistsjson(k, ANY), function () {});
});

bthread("Guard: Unique Credentialsjson", function () {
  const x = waitForAnyCredentialsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentialsjson(k, ANY), function () {});
});

bthread("Guard: Unique Dailyjson", function () {
  const x = waitForAnyDailyjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDailyjson(k, ANY), function () {});
});

bthread("Guard: Unique Datajson", function () {
  const x = waitForAnyDatajsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDatajson(k, ANY), function () {});
});

bthread("Guard: Unique Dependentphonenumbersjson", function () {
  const x = waitForAnyDependentphonenumbersjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependentphonenumbersjson(k, ANY), function () {});
});

bthread("Guard: Unique Domain", function () {
  const x = waitForAnyDomainAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDomain(k, ANY), function () {});
});

bthread("Guard: Unique Domainsjson", function () {
  const x = waitForAnyDomainsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDomainsjson(k, ANY), function () {});
});

bthread("Guard: Unique Eventsjson", function () {
  const x = waitForAnyEventsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEventsjson(k, ANY), function () {});
});

bthread("Guard: Unique Extension", function () {
  const x = waitForAnyExtensionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExtension(k, ANY), function () {});
});

bthread("Guard: Unique Extensionsjson", function () {
  const x = waitForAnyExtensionsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExtensionsjson(k, ANY), function () {});
});

bthread("Guard: Unique Feedbackjson", function () {
  const x = waitForAnyFeedbackjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFeedbackjson(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumber", function () {
  const x = waitForAnyIncomingphonenumberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumber(k, ANY), function () {});
});

bthread("Guard: Unique Incomingphonenumbersjson", function () {
  const x = waitForAnyIncomingphonenumbersjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncomingphonenumbersjson(k, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollist", function () {
  const x = waitForAnyIpaccesscontrollistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIpaccesscontrollist(k, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistmapping", function () {
  const x = waitForAnyIpaccesscontrollistmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIpaccesscontrollistmapping(k, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistmappingsjson", function () {
  const x = waitForAnyIpaccesscontrollistmappingsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIpaccesscontrollistmappingsjson(k, ANY), function () {});
});

bthread("Guard: Unique Ipaccesscontrollistsjson", function () {
  const x = waitForAnyIpaccesscontrollistsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIpaccesscontrollistsjson(k, ANY), function () {});
});

bthread("Guard: Unique Ipaddress", function () {
  const x = waitForAnyIpaddressAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIpaddress(k, ANY), function () {});
});

bthread("Guard: Unique Ipaddressesjson", function () {
  const x = waitForAnyIpaddressesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIpaddressesjson(k, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKey(k, ANY), function () {});
});

bthread("Guard: Unique Keysjson", function () {
  const x = waitForAnyKeysjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKeysjson(k, ANY), function () {});
});

bthread("Guard: Unique Lastmonthjson", function () {
  const x = waitForAnyLastmonthjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLastmonthjson(k, ANY), function () {});
});

bthread("Guard: Unique Localjson", function () {
  const x = waitForAnyLocaljsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLocaljson(k, ANY), function () {});
});

bthread("Guard: Unique Machinetomachinejson", function () {
  const x = waitForAnyMachinetomachinejsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMachinetomachinejson(k, ANY), function () {});
});

bthread("Guard: Unique Media", function () {
  const x = waitForAnyMediaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMedia(k, ANY), function () {});
});

bthread("Guard: Unique Mediajson", function () {
  const x = waitForAnyMediajsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMediajson(k, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMember(k, ANY), function () {});
});

bthread("Guard: Unique Membersjson", function () {
  const x = waitForAnyMembersjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersjson(k, ANY), function () {});
});

bthread("Guard: Unique Message", function () {
  const x = waitForAnyMessageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessage(k, ANY), function () {});
});

bthread("Guard: Unique Messagesjson", function () {
  const x = waitForAnyMessagesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessagesjson(k, ANY), function () {});
});

bthread("Guard: Unique Mobilejson", function () {
  const x = waitForAnyMobilejsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMobilejson(k, ANY), function () {});
});

bthread("Guard: Unique Monthlyjson", function () {
  const x = waitForAnyMonthlyjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMonthlyjson(k, ANY), function () {});
});

bthread("Guard: Unique Nationaljson", function () {
  const x = waitForAnyNationaljsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNationaljson(k, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotification(k, ANY), function () {});
});

bthread("Guard: Unique Notificationsjson", function () {
  const x = waitForAnyNotificationsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotificationsjson(k, ANY), function () {});
});

bthread("Guard: Unique Outgoingcallerid", function () {
  const x = waitForAnyOutgoingcalleridAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOutgoingcallerid(k, ANY), function () {});
});

bthread("Guard: Unique Outgoingcalleridsjson", function () {
  const x = waitForAnyOutgoingcalleridsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOutgoingcalleridsjson(k, ANY), function () {});
});

bthread("Guard: Unique Participant", function () {
  const x = waitForAnyParticipantAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddParticipant(k, ANY), function () {});
});

bthread("Guard: Unique Participantsjson", function () {
  const x = waitForAnyParticipantsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddParticipantsjson(k, ANY), function () {});
});

bthread("Guard: Unique Payload", function () {
  const x = waitForAnyPayloadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPayload(k, ANY), function () {});
});

bthread("Guard: Unique Payloadsjson", function () {
  const x = waitForAnyPayloadsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPayloadsjson(k, ANY), function () {});
});

bthread("Guard: Unique Payment", function () {
  const x = waitForAnyPaymentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPayment(k, ANY), function () {});
});

bthread("Guard: Unique Paymentsjson", function () {
  const x = waitForAnyPaymentsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPaymentsjson(k, ANY), function () {});
});

bthread("Guard: Unique Queue", function () {
  const x = waitForAnyQueueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddQueue(k, ANY), function () {});
});

bthread("Guard: Unique Queuesjson", function () {
  const x = waitForAnyQueuesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddQueuesjson(k, ANY), function () {});
});

bthread("Guard: Unique Record", function () {
  const x = waitForAnyRecordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecord(k, ANY), function () {});
});

bthread("Guard: Unique Recording", function () {
  const x = waitForAnyRecordingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecording(k, ANY), function () {});
});

bthread("Guard: Unique Recordingsjson", function () {
  const x = waitForAnyRecordingsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecordingsjson(k, ANY), function () {});
});

bthread("Guard: Unique Recordsjson", function () {
  const x = waitForAnyRecordsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecordsjson(k, ANY), function () {});
});

bthread("Guard: Unique Registration", function () {
  const x = waitForAnyRegistrationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRegistration(k, ANY), function () {});
});

bthread("Guard: Unique Sharedcostjson", function () {
  const x = waitForAnySharedcostjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSharedcostjson(k, ANY), function () {});
});

bthread("Guard: Unique Shortcode", function () {
  const x = waitForAnyShortcodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddShortcode(k, ANY), function () {});
});

bthread("Guard: Unique Shortcodesjson", function () {
  const x = waitForAnyShortcodesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddShortcodesjson(k, ANY), function () {});
});

bthread("Guard: Unique Sidjson", function () {
  const x = waitForAnySidjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSidjson(k, ANY), function () {});
});

bthread("Guard: Unique Signingkey", function () {
  const x = waitForAnySigningkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSigningkey(k, ANY), function () {});
});

bthread("Guard: Unique Signingkeysjson", function () {
  const x = waitForAnySigningkeysjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSigningkeysjson(k, ANY), function () {});
});

bthread("Guard: Unique Sip", function () {
  const x = waitForAnySipAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSip(k, ANY), function () {});
});

bthread("Guard: Unique Siprec", function () {
  const x = waitForAnySiprecAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSiprec(k, ANY), function () {});
});

bthread("Guard: Unique Siprecjson", function () {
  const x = waitForAnySiprecjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSiprecjson(k, ANY), function () {});
});

bthread("Guard: Unique Sm", function () {
  const x = waitForAnySmAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSm(k, ANY), function () {});
});

bthread("Guard: Unique Stream", function () {
  const x = waitForAnyStreamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStream(k, ANY), function () {});
});

bthread("Guard: Unique Streamsjson", function () {
  const x = waitForAnyStreamsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStreamsjson(k, ANY), function () {});
});

bthread("Guard: Unique Thismonthjson", function () {
  const x = waitForAnyThismonthjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddThismonthjson(k, ANY), function () {});
});

bthread("Guard: Unique Todayjson", function () {
  const x = waitForAnyTodayjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTodayjson(k, ANY), function () {});
});

bthread("Guard: Unique Tokensjson", function () {
  const x = waitForAnyTokensjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTokensjson(k, ANY), function () {});
});

bthread("Guard: Unique Tollfreejson", function () {
  const x = waitForAnyTollfreejsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTollfreejson(k, ANY), function () {});
});

bthread("Guard: Unique Transcription", function () {
  const x = waitForAnyTranscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTranscription(k, ANY), function () {});
});

bthread("Guard: Unique Transcriptionsjson", function () {
  const x = waitForAnyTranscriptionsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTranscriptionsjson(k, ANY), function () {});
});

bthread("Guard: Unique Trigger", function () {
  const x = waitForAnyTriggerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTrigger(k, ANY), function () {});
});

bthread("Guard: Unique Triggersjson", function () {
  const x = waitForAnyTriggersjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTriggersjson(k, ANY), function () {});
});

bthread("Guard: Unique Usage", function () {
  const x = waitForAnyUsageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsage(k, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesjson", function () {
  const x = waitForAnyUserdefinedmessagesjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserdefinedmessagesjson(k, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesubscription", function () {
  const x = waitForAnyUserdefinedmessagesubscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserdefinedmessagesubscription(k, ANY), function () {});
});

bthread("Guard: Unique Userdefinedmessagesubscriptionsjson", function () {
  const x = waitForAnyUserdefinedmessagesubscriptionsjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserdefinedmessagesubscriptionsjson(k, ANY), function () {});
});

bthread("Guard: Unique Voipjson", function () {
  const x = waitForAnyVoipjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVoipjson(k, ANY), function () {});
});

bthread("Guard: Unique Yearlyjson", function () {
  const x = waitForAnyYearlyjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddYearlyjson(k, ANY), function () {});
});

bthread("Guard: Unique Yesterdayjson", function () {
  const x = waitForAnyYesterdayjsonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddYesterdayjson(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
