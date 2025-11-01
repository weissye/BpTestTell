// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls_nondet
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


bthread("AccessLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccess(x.id);
  const e_add = waitForAccessAdded(id);
  block(matchDeleteAccess(id), function () {
    verifyAccessExists(id);
  });
  updateAccess(x.id);
  updateAccess(x.id);
  const e_upd = waitForAccessUpdated(id);
  block(matchDeleteAccess(id), function () {
    verifyAccessUpdated(id);
  });
  deleteAccess(x.id);
  const e_del = waitForAccessDeleted(id);
  block(matchAddAccess(id), function () {
    verifyAccessDoesNotExist(id);
  });
});

bthread("AccesstokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccesstoken(x.id);
  const e_add = waitForAccesstokenAdded(id);
  block(matchDeleteAccesstoken(id), function () {
    verifyAccesstokenExists(id);
  });
  updateAccesstoken(x.id);
  updateAccesstoken(x.id);
  const e_upd = waitForAccesstokenUpdated(id);
  block(matchDeleteAccesstoken(id), function () {
    verifyAccesstokenUpdated(id);
  });
  deleteAccesstoken(x.id);
  const e_del = waitForAccesstokenDeleted(id);
  block(matchAddAccesstoken(id), function () {
    verifyAccesstokenDoesNotExist(id);
  });
});

bthread("AddressclaimsetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddressclaimset(x.id);
  const e_add = waitForAddressclaimsetAdded(id);
  block(matchDeleteAddressclaimset(id), function () {
    verifyAddressclaimsetExists(id);
  });
  updateAddressclaimset(x.id);
  updateAddressclaimset(x.id);
  const e_upd = waitForAddressclaimsetUpdated(id);
  block(matchDeleteAddressclaimset(id), function () {
    verifyAddressclaimsetUpdated(id);
  });
  deleteAddressclaimset(x.id);
  const e_del = waitForAddressclaimsetDeleted(id);
  block(matchAddAddressclaimset(id), function () {
    verifyAddressclaimsetDoesNotExist(id);
  });
});

bthread("ApplicationrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApplicationrepresentation(x.id);
  const e_add = waitForApplicationrepresentationAdded(id);
  block(matchDeleteApplicationrepresentation(id), function () {
    verifyApplicationrepresentationExists(id);
  });
  updateApplicationrepresentation(x.id);
  updateApplicationrepresentation(x.id);
  const e_upd = waitForApplicationrepresentationUpdated(id);
  block(matchDeleteApplicationrepresentation(id), function () {
    verifyApplicationrepresentationUpdated(id);
  });
  deleteApplicationrepresentation(x.id);
  const e_del = waitForApplicationrepresentationDeleted(id);
  block(matchAddApplicationrepresentation(id), function () {
    verifyApplicationrepresentationDoesNotExist(id);
  });
});

bthread("ApplicationrepresentationclaimsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApplicationrepresentationclaims(x.id);
  const e_add = waitForApplicationrepresentationclaimsAdded(id);
  block(matchDeleteApplicationrepresentationclaims(id), function () {
    verifyApplicationrepresentationclaimsExists(id);
  });
  updateApplicationrepresentationclaims(x.id);
  updateApplicationrepresentationclaims(x.id);
  const e_upd = waitForApplicationrepresentationclaimsUpdated(id);
  block(matchDeleteApplicationrepresentationclaims(id), function () {
    verifyApplicationrepresentationclaimsUpdated(id);
  });
  deleteApplicationrepresentationclaims(x.id);
  const e_del = waitForApplicationrepresentationclaimsDeleted(id);
  block(matchAddApplicationrepresentationclaims(id), function () {
    verifyApplicationrepresentationclaimsDoesNotExist(id);
  });
});

bthread("AuthenticationexecutionexportrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticationexecutionexportrepresentation(x.id);
  const e_add = waitForAuthenticationexecutionexportrepresentationAdded(id);
  block(matchDeleteAuthenticationexecutionexportrepresentation(id), function () {
    verifyAuthenticationexecutionexportrepresentationExists(id);
  });
  updateAuthenticationexecutionexportrepresentation(x.id);
  updateAuthenticationexecutionexportrepresentation(x.id);
  const e_upd = waitForAuthenticationexecutionexportrepresentationUpdated(id);
  block(matchDeleteAuthenticationexecutionexportrepresentation(id), function () {
    verifyAuthenticationexecutionexportrepresentationUpdated(id);
  });
  deleteAuthenticationexecutionexportrepresentation(x.id);
  const e_del = waitForAuthenticationexecutionexportrepresentationDeleted(id);
  block(matchAddAuthenticationexecutionexportrepresentation(id), function () {
    verifyAuthenticationexecutionexportrepresentationDoesNotExist(id);
  });
});

bthread("AuthenticationexecutioninforepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticationexecutioninforepresentation(x.id);
  const e_add = waitForAuthenticationexecutioninforepresentationAdded(id);
  block(matchDeleteAuthenticationexecutioninforepresentation(id), function () {
    verifyAuthenticationexecutioninforepresentationExists(id);
  });
  updateAuthenticationexecutioninforepresentation(x.id);
  updateAuthenticationexecutioninforepresentation(x.id);
  const e_upd = waitForAuthenticationexecutioninforepresentationUpdated(id);
  block(matchDeleteAuthenticationexecutioninforepresentation(id), function () {
    verifyAuthenticationexecutioninforepresentationUpdated(id);
  });
  deleteAuthenticationexecutioninforepresentation(x.id);
  const e_del = waitForAuthenticationexecutioninforepresentationDeleted(id);
  block(matchAddAuthenticationexecutioninforepresentation(id), function () {
    verifyAuthenticationexecutioninforepresentationDoesNotExist(id);
  });
});

bthread("AuthenticationexecutionrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticationexecutionrepresentation(x.id);
  const e_add = waitForAuthenticationexecutionrepresentationAdded(id);
  block(matchDeleteAuthenticationexecutionrepresentation(id), function () {
    verifyAuthenticationexecutionrepresentationExists(id);
  });
  updateAuthenticationexecutionrepresentation(x.id);
  updateAuthenticationexecutionrepresentation(x.id);
  const e_upd = waitForAuthenticationexecutionrepresentationUpdated(id);
  block(matchDeleteAuthenticationexecutionrepresentation(id), function () {
    verifyAuthenticationexecutionrepresentationUpdated(id);
  });
  deleteAuthenticationexecutionrepresentation(x.id);
  const e_del = waitForAuthenticationexecutionrepresentationDeleted(id);
  block(matchAddAuthenticationexecutionrepresentation(id), function () {
    verifyAuthenticationexecutionrepresentationDoesNotExist(id);
  });
});

bthread("AuthenticationflowrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticationflowrepresentation(x.id);
  const e_add = waitForAuthenticationflowrepresentationAdded(id);
  block(matchDeleteAuthenticationflowrepresentation(id), function () {
    verifyAuthenticationflowrepresentationExists(id);
  });
  updateAuthenticationflowrepresentation(x.id);
  updateAuthenticationflowrepresentation(x.id);
  const e_upd = waitForAuthenticationflowrepresentationUpdated(id);
  block(matchDeleteAuthenticationflowrepresentation(id), function () {
    verifyAuthenticationflowrepresentationUpdated(id);
  });
  deleteAuthenticationflowrepresentation(x.id);
  const e_del = waitForAuthenticationflowrepresentationDeleted(id);
  block(matchAddAuthenticationflowrepresentation(id), function () {
    verifyAuthenticationflowrepresentationDoesNotExist(id);
  });
});

bthread("AuthenticatorconfiginforepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticatorconfiginforepresentation(x.id);
  const e_add = waitForAuthenticatorconfiginforepresentationAdded(id);
  block(matchDeleteAuthenticatorconfiginforepresentation(id), function () {
    verifyAuthenticatorconfiginforepresentationExists(id);
  });
  updateAuthenticatorconfiginforepresentation(x.id);
  updateAuthenticatorconfiginforepresentation(x.id);
  const e_upd = waitForAuthenticatorconfiginforepresentationUpdated(id);
  block(matchDeleteAuthenticatorconfiginforepresentation(id), function () {
    verifyAuthenticatorconfiginforepresentationUpdated(id);
  });
  deleteAuthenticatorconfiginforepresentation(x.id);
  const e_del = waitForAuthenticatorconfiginforepresentationDeleted(id);
  block(matchAddAuthenticatorconfiginforepresentation(id), function () {
    verifyAuthenticatorconfiginforepresentationDoesNotExist(id);
  });
});

bthread("AuthenticatorconfigrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthenticatorconfigrepresentation(x.id);
  const e_add = waitForAuthenticatorconfigrepresentationAdded(id);
  block(matchDeleteAuthenticatorconfigrepresentation(id), function () {
    verifyAuthenticatorconfigrepresentationExists(id);
  });
  updateAuthenticatorconfigrepresentation(x.id);
  updateAuthenticatorconfigrepresentation(x.id);
  const e_upd = waitForAuthenticatorconfigrepresentationUpdated(id);
  block(matchDeleteAuthenticatorconfigrepresentation(id), function () {
    verifyAuthenticatorconfigrepresentationUpdated(id);
  });
  deleteAuthenticatorconfigrepresentation(x.id);
  const e_del = waitForAuthenticatorconfigrepresentationDeleted(id);
  block(matchAddAuthenticatorconfigrepresentation(id), function () {
    verifyAuthenticatorconfigrepresentationDoesNotExist(id);
  });
});

bthread("AuthorizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthorization(x.id);
  const e_add = waitForAuthorizationAdded(id);
  block(matchDeleteAuthorization(id), function () {
    verifyAuthorizationExists(id);
  });
  updateAuthorization(x.id);
  updateAuthorization(x.id);
  const e_upd = waitForAuthorizationUpdated(id);
  block(matchDeleteAuthorization(id), function () {
    verifyAuthorizationUpdated(id);
  });
  deleteAuthorization(x.id);
  const e_del = waitForAuthorizationDeleted(id);
  block(matchAddAuthorization(id), function () {
    verifyAuthorizationDoesNotExist(id);
  });
});

bthread("CertconfLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCertconf(x.id);
  const e_add = waitForCertconfAdded(id);
  block(matchDeleteCertconf(id), function () {
    verifyCertconfExists(id);
  });
  updateCertconf(x.id);
  updateCertconf(x.id);
  const e_upd = waitForCertconfUpdated(id);
  block(matchDeleteCertconf(id), function () {
    verifyCertconfUpdated(id);
  });
  deleteCertconf(x.id);
  const e_del = waitForCertconfDeleted(id);
  block(matchAddCertconf(id), function () {
    verifyCertconfDoesNotExist(id);
  });
});

bthread("CertificaterepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCertificaterepresentation(x.id);
  const e_add = waitForCertificaterepresentationAdded(id);
  block(matchDeleteCertificaterepresentation(id), function () {
    verifyCertificaterepresentationExists(id);
  });
  updateCertificaterepresentation(x.id);
  updateCertificaterepresentation(x.id);
  const e_upd = waitForCertificaterepresentationUpdated(id);
  block(matchDeleteCertificaterepresentation(id), function () {
    verifyCertificaterepresentationUpdated(id);
  });
  deleteCertificaterepresentation(x.id);
  const e_del = waitForCertificaterepresentationDeleted(id);
  block(matchAddCertificaterepresentation(id), function () {
    verifyCertificaterepresentationDoesNotExist(id);
  });
});

bthread("ClaimrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClaimrepresentation(x.id);
  const e_add = waitForClaimrepresentationAdded(id);
  block(matchDeleteClaimrepresentation(id), function () {
    verifyClaimrepresentationExists(id);
  });
  updateClaimrepresentation(x.id);
  updateClaimrepresentation(x.id);
  const e_upd = waitForClaimrepresentationUpdated(id);
  block(matchDeleteClaimrepresentation(id), function () {
    verifyClaimrepresentationUpdated(id);
  });
  deleteClaimrepresentation(x.id);
  const e_del = waitForClaimrepresentationDeleted(id);
  block(matchAddClaimrepresentation(id), function () {
    verifyClaimrepresentationDoesNotExist(id);
  });
});

bthread("ClientinitialaccesscreatepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientinitialaccesscreatepresentation(x.id);
  const e_add = waitForClientinitialaccesscreatepresentationAdded(id);
  block(matchDeleteClientinitialaccesscreatepresentation(id), function () {
    verifyClientinitialaccesscreatepresentationExists(id);
  });
  updateClientinitialaccesscreatepresentation(x.id);
  updateClientinitialaccesscreatepresentation(x.id);
  const e_upd = waitForClientinitialaccesscreatepresentationUpdated(id);
  block(matchDeleteClientinitialaccesscreatepresentation(id), function () {
    verifyClientinitialaccesscreatepresentationUpdated(id);
  });
  deleteClientinitialaccesscreatepresentation(x.id);
  const e_del = waitForClientinitialaccesscreatepresentationDeleted(id);
  block(matchAddClientinitialaccesscreatepresentation(id), function () {
    verifyClientinitialaccesscreatepresentationDoesNotExist(id);
  });
});

bthread("ClientinitialaccesspresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientinitialaccesspresentation(x.id);
  const e_add = waitForClientinitialaccesspresentationAdded(id);
  block(matchDeleteClientinitialaccesspresentation(id), function () {
    verifyClientinitialaccesspresentationExists(id);
  });
  updateClientinitialaccesspresentation(x.id);
  updateClientinitialaccesspresentation(x.id);
  const e_upd = waitForClientinitialaccesspresentationUpdated(id);
  block(matchDeleteClientinitialaccesspresentation(id), function () {
    verifyClientinitialaccesspresentationUpdated(id);
  });
  deleteClientinitialaccesspresentation(x.id);
  const e_del = waitForClientinitialaccesspresentationDeleted(id);
  block(matchAddClientinitialaccesspresentation(id), function () {
    verifyClientinitialaccesspresentationDoesNotExist(id);
  });
});

bthread("ClientmappingsrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientmappingsrepresentation(x.id);
  const e_add = waitForClientmappingsrepresentationAdded(id);
  block(matchDeleteClientmappingsrepresentation(id), function () {
    verifyClientmappingsrepresentationExists(id);
  });
  updateClientmappingsrepresentation(x.id);
  updateClientmappingsrepresentation(x.id);
  const e_upd = waitForClientmappingsrepresentationUpdated(id);
  block(matchDeleteClientmappingsrepresentation(id), function () {
    verifyClientmappingsrepresentationUpdated(id);
  });
  deleteClientmappingsrepresentation(x.id);
  const e_del = waitForClientmappingsrepresentationDeleted(id);
  block(matchAddClientmappingsrepresentation(id), function () {
    verifyClientmappingsrepresentationDoesNotExist(id);
  });
});

bthread("ClientpoliciesrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientpoliciesrepresentation(x.id);
  const e_add = waitForClientpoliciesrepresentationAdded(id);
  block(matchDeleteClientpoliciesrepresentation(id), function () {
    verifyClientpoliciesrepresentationExists(id);
  });
  updateClientpoliciesrepresentation(x.id);
  updateClientpoliciesrepresentation(x.id);
  const e_upd = waitForClientpoliciesrepresentationUpdated(id);
  block(matchDeleteClientpoliciesrepresentation(id), function () {
    verifyClientpoliciesrepresentationUpdated(id);
  });
  deleteClientpoliciesrepresentation(x.id);
  const e_del = waitForClientpoliciesrepresentationDeleted(id);
  block(matchAddClientpoliciesrepresentation(id), function () {
    verifyClientpoliciesrepresentationDoesNotExist(id);
  });
});

bthread("ClientpolicyconditionrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientpolicyconditionrepresentation(x.id);
  const e_add = waitForClientpolicyconditionrepresentationAdded(id);
  block(matchDeleteClientpolicyconditionrepresentation(id), function () {
    verifyClientpolicyconditionrepresentationExists(id);
  });
  updateClientpolicyconditionrepresentation(x.id);
  updateClientpolicyconditionrepresentation(x.id);
  const e_upd = waitForClientpolicyconditionrepresentationUpdated(id);
  block(matchDeleteClientpolicyconditionrepresentation(id), function () {
    verifyClientpolicyconditionrepresentationUpdated(id);
  });
  deleteClientpolicyconditionrepresentation(x.id);
  const e_del = waitForClientpolicyconditionrepresentationDeleted(id);
  block(matchAddClientpolicyconditionrepresentation(id), function () {
    verifyClientpolicyconditionrepresentationDoesNotExist(id);
  });
});

bthread("ClientpolicyexecutorrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientpolicyexecutorrepresentation(x.id);
  const e_add = waitForClientpolicyexecutorrepresentationAdded(id);
  block(matchDeleteClientpolicyexecutorrepresentation(id), function () {
    verifyClientpolicyexecutorrepresentationExists(id);
  });
  updateClientpolicyexecutorrepresentation(x.id);
  updateClientpolicyexecutorrepresentation(x.id);
  const e_upd = waitForClientpolicyexecutorrepresentationUpdated(id);
  block(matchDeleteClientpolicyexecutorrepresentation(id), function () {
    verifyClientpolicyexecutorrepresentationUpdated(id);
  });
  deleteClientpolicyexecutorrepresentation(x.id);
  const e_del = waitForClientpolicyexecutorrepresentationDeleted(id);
  block(matchAddClientpolicyexecutorrepresentation(id), function () {
    verifyClientpolicyexecutorrepresentationDoesNotExist(id);
  });
});

bthread("ClientpolicyrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientpolicyrepresentation(x.id);
  const e_add = waitForClientpolicyrepresentationAdded(id);
  block(matchDeleteClientpolicyrepresentation(id), function () {
    verifyClientpolicyrepresentationExists(id);
  });
  updateClientpolicyrepresentation(x.id);
  updateClientpolicyrepresentation(x.id);
  const e_upd = waitForClientpolicyrepresentationUpdated(id);
  block(matchDeleteClientpolicyrepresentation(id), function () {
    verifyClientpolicyrepresentationUpdated(id);
  });
  deleteClientpolicyrepresentation(x.id);
  const e_del = waitForClientpolicyrepresentationDeleted(id);
  block(matchAddClientpolicyrepresentation(id), function () {
    verifyClientpolicyrepresentationDoesNotExist(id);
  });
});

bthread("ClientprofilerepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientprofilerepresentation(x.id);
  const e_add = waitForClientprofilerepresentationAdded(id);
  block(matchDeleteClientprofilerepresentation(id), function () {
    verifyClientprofilerepresentationExists(id);
  });
  updateClientprofilerepresentation(x.id);
  updateClientprofilerepresentation(x.id);
  const e_upd = waitForClientprofilerepresentationUpdated(id);
  block(matchDeleteClientprofilerepresentation(id), function () {
    verifyClientprofilerepresentationUpdated(id);
  });
  deleteClientprofilerepresentation(x.id);
  const e_del = waitForClientprofilerepresentationDeleted(id);
  block(matchAddClientprofilerepresentation(id), function () {
    verifyClientprofilerepresentationDoesNotExist(id);
  });
});

bthread("ClientprofilesrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientprofilesrepresentation(x.id);
  const e_add = waitForClientprofilesrepresentationAdded(id);
  block(matchDeleteClientprofilesrepresentation(id), function () {
    verifyClientprofilesrepresentationExists(id);
  });
  updateClientprofilesrepresentation(x.id);
  updateClientprofilesrepresentation(x.id);
  const e_upd = waitForClientprofilesrepresentationUpdated(id);
  block(matchDeleteClientprofilesrepresentation(id), function () {
    verifyClientprofilesrepresentationUpdated(id);
  });
  deleteClientprofilesrepresentation(x.id);
  const e_del = waitForClientprofilesrepresentationDeleted(id);
  block(matchAddClientprofilesrepresentation(id), function () {
    verifyClientprofilesrepresentationDoesNotExist(id);
  });
});

bthread("ClientrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientrepresentation(x.id);
  const e_add = waitForClientrepresentationAdded(id);
  block(matchDeleteClientrepresentation(id), function () {
    verifyClientrepresentationExists(id);
  });
  updateClientrepresentation(x.id);
  updateClientrepresentation(x.id);
  const e_upd = waitForClientrepresentationUpdated(id);
  block(matchDeleteClientrepresentation(id), function () {
    verifyClientrepresentationUpdated(id);
  });
  deleteClientrepresentation(x.id);
  const e_del = waitForClientrepresentationDeleted(id);
  block(matchAddClientrepresentation(id), function () {
    verifyClientrepresentationDoesNotExist(id);
  });
});

bthread("ClientscoperepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClientscoperepresentation(x.id);
  const e_add = waitForClientscoperepresentationAdded(id);
  block(matchDeleteClientscoperepresentation(id), function () {
    verifyClientscoperepresentationExists(id);
  });
  updateClientscoperepresentation(x.id);
  updateClientscoperepresentation(x.id);
  const e_upd = waitForClientscoperepresentationUpdated(id);
  block(matchDeleteClientscoperepresentation(id), function () {
    verifyClientscoperepresentationUpdated(id);
  });
  deleteClientscoperepresentation(x.id);
  const e_del = waitForClientscoperepresentationDeleted(id);
  block(matchAddClientscoperepresentation(id), function () {
    verifyClientscoperepresentationDoesNotExist(id);
  });
});

bthread("ClienttemplaterepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClienttemplaterepresentation(x.id);
  const e_add = waitForClienttemplaterepresentationAdded(id);
  block(matchDeleteClienttemplaterepresentation(id), function () {
    verifyClienttemplaterepresentationExists(id);
  });
  updateClienttemplaterepresentation(x.id);
  updateClienttemplaterepresentation(x.id);
  const e_upd = waitForClienttemplaterepresentationUpdated(id);
  block(matchDeleteClienttemplaterepresentation(id), function () {
    verifyClienttemplaterepresentationUpdated(id);
  });
  deleteClienttemplaterepresentation(x.id);
  const e_del = waitForClienttemplaterepresentationDeleted(id);
  block(matchAddClienttemplaterepresentation(id), function () {
    verifyClienttemplaterepresentationDoesNotExist(id);
  });
});

bthread("ComponentexportrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComponentexportrepresentation(x.id);
  const e_add = waitForComponentexportrepresentationAdded(id);
  block(matchDeleteComponentexportrepresentation(id), function () {
    verifyComponentexportrepresentationExists(id);
  });
  updateComponentexportrepresentation(x.id);
  updateComponentexportrepresentation(x.id);
  const e_upd = waitForComponentexportrepresentationUpdated(id);
  block(matchDeleteComponentexportrepresentation(id), function () {
    verifyComponentexportrepresentationUpdated(id);
  });
  deleteComponentexportrepresentation(x.id);
  const e_del = waitForComponentexportrepresentationDeleted(id);
  block(matchAddComponentexportrepresentation(id), function () {
    verifyComponentexportrepresentationDoesNotExist(id);
  });
});

bthread("ComponentrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComponentrepresentation(x.id);
  const e_add = waitForComponentrepresentationAdded(id);
  block(matchDeleteComponentrepresentation(id), function () {
    verifyComponentrepresentationExists(id);
  });
  updateComponentrepresentation(x.id);
  updateComponentrepresentation(x.id);
  const e_upd = waitForComponentrepresentationUpdated(id);
  block(matchDeleteComponentrepresentation(id), function () {
    verifyComponentrepresentationUpdated(id);
  });
  deleteComponentrepresentation(x.id);
  const e_del = waitForComponentrepresentationDeleted(id);
  block(matchAddComponentrepresentation(id), function () {
    verifyComponentrepresentationDoesNotExist(id);
  });
});

bthread("CompositesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComposites(x.id);
  const e_add = waitForCompositesAdded(id);
  block(matchDeleteComposites(id), function () {
    verifyCompositesExists(id);
  });
  updateComposites(x.id);
  updateComposites(x.id);
  const e_upd = waitForCompositesUpdated(id);
  block(matchDeleteComposites(id), function () {
    verifyCompositesUpdated(id);
  });
  deleteComposites(x.id);
  const e_del = waitForCompositesDeleted(id);
  block(matchAddComposites(id), function () {
    verifyCompositesDoesNotExist(id);
  });
});

bthread("ConfigpropertyrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfigpropertyrepresentation(x.id);
  const e_add = waitForConfigpropertyrepresentationAdded(id);
  block(matchDeleteConfigpropertyrepresentation(id), function () {
    verifyConfigpropertyrepresentationExists(id);
  });
  updateConfigpropertyrepresentation(x.id);
  updateConfigpropertyrepresentation(x.id);
  const e_upd = waitForConfigpropertyrepresentationUpdated(id);
  block(matchDeleteConfigpropertyrepresentation(id), function () {
    verifyConfigpropertyrepresentationUpdated(id);
  });
  deleteConfigpropertyrepresentation(x.id);
  const e_del = waitForConfigpropertyrepresentationDeleted(id);
  block(matchAddConfigpropertyrepresentation(id), function () {
    verifyConfigpropertyrepresentationDoesNotExist(id);
  });
});

bthread("CredentialrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredentialrepresentation(x.id);
  const e_add = waitForCredentialrepresentationAdded(id);
  block(matchDeleteCredentialrepresentation(id), function () {
    verifyCredentialrepresentationExists(id);
  });
  updateCredentialrepresentation(x.id);
  updateCredentialrepresentation(x.id);
  const e_upd = waitForCredentialrepresentationUpdated(id);
  block(matchDeleteCredentialrepresentation(id), function () {
    verifyCredentialrepresentationUpdated(id);
  });
  deleteCredentialrepresentation(x.id);
  const e_del = waitForCredentialrepresentationDeleted(id);
  block(matchAddCredentialrepresentation(id), function () {
    verifyCredentialrepresentationDoesNotExist(id);
  });
});

bthread("DecisionstrategyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDecisionstrategy(x.id);
  const e_add = waitForDecisionstrategyAdded(id);
  block(matchDeleteDecisionstrategy(id), function () {
    verifyDecisionstrategyExists(id);
  });
  updateDecisionstrategy(x.id);
  updateDecisionstrategy(x.id);
  const e_upd = waitForDecisionstrategyUpdated(id);
  block(matchDeleteDecisionstrategy(id), function () {
    verifyDecisionstrategyUpdated(id);
  });
  deleteDecisionstrategy(x.id);
  const e_del = waitForDecisionstrategyDeleted(id);
  block(matchAddDecisionstrategy(id), function () {
    verifyDecisionstrategyDoesNotExist(id);
  });
});

bthread("EnforcementmodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnforcementmode(x.id);
  const e_add = waitForEnforcementmodeAdded(id);
  block(matchDeleteEnforcementmode(id), function () {
    verifyEnforcementmodeExists(id);
  });
  updateEnforcementmode(x.id);
  updateEnforcementmode(x.id);
  const e_upd = waitForEnforcementmodeUpdated(id);
  block(matchDeleteEnforcementmode(id), function () {
    verifyEnforcementmodeUpdated(id);
  });
  deleteEnforcementmode(x.id);
  const e_del = waitForEnforcementmodeDeleted(id);
  block(matchAddEnforcementmode(id), function () {
    verifyEnforcementmodeDoesNotExist(id);
  });
});

bthread("FederatedidentityrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFederatedidentityrepresentation(x.id);
  const e_add = waitForFederatedidentityrepresentationAdded(id);
  block(matchDeleteFederatedidentityrepresentation(id), function () {
    verifyFederatedidentityrepresentationExists(id);
  });
  updateFederatedidentityrepresentation(x.id);
  updateFederatedidentityrepresentation(x.id);
  const e_upd = waitForFederatedidentityrepresentationUpdated(id);
  block(matchDeleteFederatedidentityrepresentation(id), function () {
    verifyFederatedidentityrepresentationUpdated(id);
  });
  deleteFederatedidentityrepresentation(x.id);
  const e_del = waitForFederatedidentityrepresentationDeleted(id);
  block(matchAddFederatedidentityrepresentation(id), function () {
    verifyFederatedidentityrepresentationDoesNotExist(id);
  });
});

bthread("GlobalrequestresultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGlobalrequestresult(x.id);
  const e_add = waitForGlobalrequestresultAdded(id);
  block(matchDeleteGlobalrequestresult(id), function () {
    verifyGlobalrequestresultExists(id);
  });
  updateGlobalrequestresult(x.id);
  updateGlobalrequestresult(x.id);
  const e_upd = waitForGlobalrequestresultUpdated(id);
  block(matchDeleteGlobalrequestresult(id), function () {
    verifyGlobalrequestresultUpdated(id);
  });
  deleteGlobalrequestresult(x.id);
  const e_del = waitForGlobalrequestresultDeleted(id);
  block(matchAddGlobalrequestresult(id), function () {
    verifyGlobalrequestresultDoesNotExist(id);
  });
});

bthread("GrouprepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGrouprepresentation(x.id);
  const e_add = waitForGrouprepresentationAdded(id);
  block(matchDeleteGrouprepresentation(id), function () {
    verifyGrouprepresentationExists(id);
  });
  updateGrouprepresentation(x.id);
  updateGrouprepresentation(x.id);
  const e_upd = waitForGrouprepresentationUpdated(id);
  block(matchDeleteGrouprepresentation(id), function () {
    verifyGrouprepresentationUpdated(id);
  });
  deleteGrouprepresentation(x.id);
  const e_del = waitForGrouprepresentationDeleted(id);
  block(matchAddGrouprepresentation(id), function () {
    verifyGrouprepresentationDoesNotExist(id);
  });
});

bthread("IdentityprovidermapperrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdentityprovidermapperrepresentation(x.id);
  const e_add = waitForIdentityprovidermapperrepresentationAdded(id);
  block(matchDeleteIdentityprovidermapperrepresentation(id), function () {
    verifyIdentityprovidermapperrepresentationExists(id);
  });
  updateIdentityprovidermapperrepresentation(x.id);
  updateIdentityprovidermapperrepresentation(x.id);
  const e_upd = waitForIdentityprovidermapperrepresentationUpdated(id);
  block(matchDeleteIdentityprovidermapperrepresentation(id), function () {
    verifyIdentityprovidermapperrepresentationUpdated(id);
  });
  deleteIdentityprovidermapperrepresentation(x.id);
  const e_del = waitForIdentityprovidermapperrepresentationDeleted(id);
  block(matchAddIdentityprovidermapperrepresentation(id), function () {
    verifyIdentityprovidermapperrepresentationDoesNotExist(id);
  });
});

bthread("IdentityprovidermappertyperepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdentityprovidermappertyperepresentation(x.id);
  const e_add = waitForIdentityprovidermappertyperepresentationAdded(id);
  block(matchDeleteIdentityprovidermappertyperepresentation(id), function () {
    verifyIdentityprovidermappertyperepresentationExists(id);
  });
  updateIdentityprovidermappertyperepresentation(x.id);
  updateIdentityprovidermappertyperepresentation(x.id);
  const e_upd = waitForIdentityprovidermappertyperepresentationUpdated(id);
  block(matchDeleteIdentityprovidermappertyperepresentation(id), function () {
    verifyIdentityprovidermappertyperepresentationUpdated(id);
  });
  deleteIdentityprovidermappertyperepresentation(x.id);
  const e_del = waitForIdentityprovidermappertyperepresentationDeleted(id);
  block(matchAddIdentityprovidermappertyperepresentation(id), function () {
    verifyIdentityprovidermappertyperepresentationDoesNotExist(id);
  });
});

bthread("IdentityproviderrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdentityproviderrepresentation(x.id);
  const e_add = waitForIdentityproviderrepresentationAdded(id);
  block(matchDeleteIdentityproviderrepresentation(id), function () {
    verifyIdentityproviderrepresentationExists(id);
  });
  updateIdentityproviderrepresentation(x.id);
  updateIdentityproviderrepresentation(x.id);
  const e_upd = waitForIdentityproviderrepresentationUpdated(id);
  block(matchDeleteIdentityproviderrepresentation(id), function () {
    verifyIdentityproviderrepresentationUpdated(id);
  });
  deleteIdentityproviderrepresentation(x.id);
  const e_del = waitForIdentityproviderrepresentationDeleted(id);
  block(matchAddIdentityproviderrepresentation(id), function () {
    verifyIdentityproviderrepresentationDoesNotExist(id);
  });
});

bthread("IdtokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdtoken(x.id);
  const e_add = waitForIdtokenAdded(id);
  block(matchDeleteIdtoken(id), function () {
    verifyIdtokenExists(id);
  });
  updateIdtoken(x.id);
  updateIdtoken(x.id);
  const e_upd = waitForIdtokenUpdated(id);
  block(matchDeleteIdtoken(id), function () {
    verifyIdtokenUpdated(id);
  });
  deleteIdtoken(x.id);
  const e_del = waitForIdtokenDeleted(id);
  block(matchAddIdtoken(id), function () {
    verifyIdtokenDoesNotExist(id);
  });
});

bthread("InstallationadapterconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInstallationadapterconfig(x.id);
  const e_add = waitForInstallationadapterconfigAdded(id);
  block(matchDeleteInstallationadapterconfig(id), function () {
    verifyInstallationadapterconfigExists(id);
  });
  updateInstallationadapterconfig(x.id);
  updateInstallationadapterconfig(x.id);
  const e_upd = waitForInstallationadapterconfigUpdated(id);
  block(matchDeleteInstallationadapterconfig(id), function () {
    verifyInstallationadapterconfigUpdated(id);
  });
  deleteInstallationadapterconfig(x.id);
  const e_del = waitForInstallationadapterconfigDeleted(id);
  block(matchAddInstallationadapterconfig(id), function () {
    verifyInstallationadapterconfigDoesNotExist(id);
  });
});

bthread("KeymetadatarepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addKeymetadatarepresentation(x.id);
  const e_add = waitForKeymetadatarepresentationAdded(id);
  block(matchDeleteKeymetadatarepresentation(id), function () {
    verifyKeymetadatarepresentationExists(id);
  });
  updateKeymetadatarepresentation(x.id);
  updateKeymetadatarepresentation(x.id);
  const e_upd = waitForKeymetadatarepresentationUpdated(id);
  block(matchDeleteKeymetadatarepresentation(id), function () {
    verifyKeymetadatarepresentationUpdated(id);
  });
  deleteKeymetadatarepresentation(x.id);
  const e_del = waitForKeymetadatarepresentationDeleted(id);
  block(matchAddKeymetadatarepresentation(id), function () {
    verifyKeymetadatarepresentationDoesNotExist(id);
  });
});

bthread("KeysmetadatarepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addKeysmetadatarepresentation(x.id);
  const e_add = waitForKeysmetadatarepresentationAdded(id);
  block(matchDeleteKeysmetadatarepresentation(id), function () {
    verifyKeysmetadatarepresentationExists(id);
  });
  updateKeysmetadatarepresentation(x.id);
  updateKeysmetadatarepresentation(x.id);
  const e_upd = waitForKeysmetadatarepresentationUpdated(id);
  block(matchDeleteKeysmetadatarepresentation(id), function () {
    verifyKeysmetadatarepresentationUpdated(id);
  });
  deleteKeysmetadatarepresentation(x.id);
  const e_del = waitForKeysmetadatarepresentationDeleted(id);
  block(matchAddKeysmetadatarepresentation(id), function () {
    verifyKeysmetadatarepresentationDoesNotExist(id);
  });
});

bthread("KeystoreconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addKeystoreconfig(x.id);
  const e_add = waitForKeystoreconfigAdded(id);
  block(matchDeleteKeystoreconfig(id), function () {
    verifyKeystoreconfigExists(id);
  });
  updateKeystoreconfig(x.id);
  updateKeystoreconfig(x.id);
  const e_upd = waitForKeystoreconfigUpdated(id);
  block(matchDeleteKeystoreconfig(id), function () {
    verifyKeystoreconfigUpdated(id);
  });
  deleteKeystoreconfig(x.id);
  const e_del = waitForKeystoreconfigDeleted(id);
  block(matchAddKeystoreconfig(id), function () {
    verifyKeystoreconfigDoesNotExist(id);
  });
});

bthread("KeyuseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addKeyuse(x.id);
  const e_add = waitForKeyuseAdded(id);
  block(matchDeleteKeyuse(id), function () {
    verifyKeyuseExists(id);
  });
  updateKeyuse(x.id);
  updateKeyuse(x.id);
  const e_upd = waitForKeyuseUpdated(id);
  block(matchDeleteKeyuse(id), function () {
    verifyKeyuseUpdated(id);
  });
  deleteKeyuse(x.id);
  const e_del = waitForKeyuseDeleted(id);
  block(matchAddKeyuse(id), function () {
    verifyKeyuseDoesNotExist(id);
  });
});

bthread("LogicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLogic(x.id);
  const e_add = waitForLogicAdded(id);
  block(matchDeleteLogic(id), function () {
    verifyLogicExists(id);
  });
  updateLogic(x.id);
  updateLogic(x.id);
  const e_upd = waitForLogicUpdated(id);
  block(matchDeleteLogic(id), function () {
    verifyLogicUpdated(id);
  });
  deleteLogic(x.id);
  const e_del = waitForLogicDeleted(id);
  block(matchAddLogic(id), function () {
    verifyLogicDoesNotExist(id);
  });
});

bthread("ManagementpermissionreferenceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addManagementpermissionreference(x.id);
  const e_add = waitForManagementpermissionreferenceAdded(id);
  block(matchDeleteManagementpermissionreference(id), function () {
    verifyManagementpermissionreferenceExists(id);
  });
  updateManagementpermissionreference(x.id);
  updateManagementpermissionreference(x.id);
  const e_upd = waitForManagementpermissionreferenceUpdated(id);
  block(matchDeleteManagementpermissionreference(id), function () {
    verifyManagementpermissionreferenceUpdated(id);
  });
  deleteManagementpermissionreference(x.id);
  const e_del = waitForManagementpermissionreferenceDeleted(id);
  block(matchAddManagementpermissionreference(id), function () {
    verifyManagementpermissionreferenceDoesNotExist(id);
  });
});

bthread("MappingsrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMappingsrepresentation(x.id);
  const e_add = waitForMappingsrepresentationAdded(id);
  block(matchDeleteMappingsrepresentation(id), function () {
    verifyMappingsrepresentationExists(id);
  });
  updateMappingsrepresentation(x.id);
  updateMappingsrepresentation(x.id);
  const e_upd = waitForMappingsrepresentationUpdated(id);
  block(matchDeleteMappingsrepresentation(id), function () {
    verifyMappingsrepresentationUpdated(id);
  });
  deleteMappingsrepresentation(x.id);
  const e_del = waitForMappingsrepresentationDeleted(id);
  block(matchAddMappingsrepresentation(id), function () {
    verifyMappingsrepresentationDoesNotExist(id);
  });
});

bthread("MethodconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMethodconfig(x.id);
  const e_add = waitForMethodconfigAdded(id);
  block(matchDeleteMethodconfig(id), function () {
    verifyMethodconfigExists(id);
  });
  updateMethodconfig(x.id);
  updateMethodconfig(x.id);
  const e_upd = waitForMethodconfigUpdated(id);
  block(matchDeleteMethodconfig(id), function () {
    verifyMethodconfigUpdated(id);
  });
  deleteMethodconfig(x.id);
  const e_del = waitForMethodconfigDeleted(id);
  block(matchAddMethodconfig(id), function () {
    verifyMethodconfigDoesNotExist(id);
  });
});

bthread("OauthclientrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOauthclientrepresentation(x.id);
  const e_add = waitForOauthclientrepresentationAdded(id);
  block(matchDeleteOauthclientrepresentation(id), function () {
    verifyOauthclientrepresentationExists(id);
  });
  updateOauthclientrepresentation(x.id);
  updateOauthclientrepresentation(x.id);
  const e_upd = waitForOauthclientrepresentationUpdated(id);
  block(matchDeleteOauthclientrepresentation(id), function () {
    verifyOauthclientrepresentationUpdated(id);
  });
  deleteOauthclientrepresentation(x.id);
  const e_del = waitForOauthclientrepresentationDeleted(id);
  block(matchAddOauthclientrepresentation(id), function () {
    verifyOauthclientrepresentationDoesNotExist(id);
  });
});

bthread("PathcacheconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPathcacheconfig(x.id);
  const e_add = waitForPathcacheconfigAdded(id);
  block(matchDeletePathcacheconfig(id), function () {
    verifyPathcacheconfigExists(id);
  });
  updatePathcacheconfig(x.id);
  updatePathcacheconfig(x.id);
  const e_upd = waitForPathcacheconfigUpdated(id);
  block(matchDeletePathcacheconfig(id), function () {
    verifyPathcacheconfigUpdated(id);
  });
  deletePathcacheconfig(x.id);
  const e_del = waitForPathcacheconfigDeleted(id);
  block(matchAddPathcacheconfig(id), function () {
    verifyPathcacheconfigDoesNotExist(id);
  });
});

bthread("PathconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPathconfig(x.id);
  const e_add = waitForPathconfigAdded(id);
  block(matchDeletePathconfig(id), function () {
    verifyPathconfigExists(id);
  });
  updatePathconfig(x.id);
  updatePathconfig(x.id);
  const e_upd = waitForPathconfigUpdated(id);
  block(matchDeletePathconfig(id), function () {
    verifyPathconfigUpdated(id);
  });
  deletePathconfig(x.id);
  const e_del = waitForPathconfigDeleted(id);
  block(matchAddPathconfig(id), function () {
    verifyPathconfigDoesNotExist(id);
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

bthread("PolicyenforcementmodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPolicyenforcementmode(x.id);
  const e_add = waitForPolicyenforcementmodeAdded(id);
  block(matchDeletePolicyenforcementmode(id), function () {
    verifyPolicyenforcementmodeExists(id);
  });
  updatePolicyenforcementmode(x.id);
  updatePolicyenforcementmode(x.id);
  const e_upd = waitForPolicyenforcementmodeUpdated(id);
  block(matchDeletePolicyenforcementmode(id), function () {
    verifyPolicyenforcementmodeUpdated(id);
  });
  deletePolicyenforcementmode(x.id);
  const e_del = waitForPolicyenforcementmodeDeleted(id);
  block(matchAddPolicyenforcementmode(id), function () {
    verifyPolicyenforcementmodeDoesNotExist(id);
  });
});

bthread("PolicyenforcerconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPolicyenforcerconfig(x.id);
  const e_add = waitForPolicyenforcerconfigAdded(id);
  block(matchDeletePolicyenforcerconfig(id), function () {
    verifyPolicyenforcerconfigExists(id);
  });
  updatePolicyenforcerconfig(x.id);
  updatePolicyenforcerconfig(x.id);
  const e_upd = waitForPolicyenforcerconfigUpdated(id);
  block(matchDeletePolicyenforcerconfig(id), function () {
    verifyPolicyenforcerconfigUpdated(id);
  });
  deletePolicyenforcerconfig(x.id);
  const e_del = waitForPolicyenforcerconfigDeleted(id);
  block(matchAddPolicyenforcerconfig(id), function () {
    verifyPolicyenforcerconfigDoesNotExist(id);
  });
});

bthread("PolicyrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPolicyrepresentation(x.id);
  const e_add = waitForPolicyrepresentationAdded(id);
  block(matchDeletePolicyrepresentation(id), function () {
    verifyPolicyrepresentationExists(id);
  });
  updatePolicyrepresentation(x.id);
  updatePolicyrepresentation(x.id);
  const e_upd = waitForPolicyrepresentationUpdated(id);
  block(matchDeletePolicyrepresentation(id), function () {
    verifyPolicyrepresentationUpdated(id);
  });
  deletePolicyrepresentation(x.id);
  const e_del = waitForPolicyrepresentationDeleted(id);
  block(matchAddPolicyrepresentation(id), function () {
    verifyPolicyrepresentationDoesNotExist(id);
  });
});

bthread("ProtocolmapperrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProtocolmapperrepresentation(x.id);
  const e_add = waitForProtocolmapperrepresentationAdded(id);
  block(matchDeleteProtocolmapperrepresentation(id), function () {
    verifyProtocolmapperrepresentationExists(id);
  });
  updateProtocolmapperrepresentation(x.id);
  updateProtocolmapperrepresentation(x.id);
  const e_upd = waitForProtocolmapperrepresentationUpdated(id);
  block(matchDeleteProtocolmapperrepresentation(id), function () {
    verifyProtocolmapperrepresentationUpdated(id);
  });
  deleteProtocolmapperrepresentation(x.id);
  const e_del = waitForProtocolmapperrepresentationDeleted(id);
  block(matchAddProtocolmapperrepresentation(id), function () {
    verifyProtocolmapperrepresentationDoesNotExist(id);
  });
});

bthread("PublishedrealmrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublishedrealmrepresentation(x.id);
  const e_add = waitForPublishedrealmrepresentationAdded(id);
  block(matchDeletePublishedrealmrepresentation(id), function () {
    verifyPublishedrealmrepresentationExists(id);
  });
  updatePublishedrealmrepresentation(x.id);
  updatePublishedrealmrepresentation(x.id);
  const e_upd = waitForPublishedrealmrepresentationUpdated(id);
  block(matchDeletePublishedrealmrepresentation(id), function () {
    verifyPublishedrealmrepresentationUpdated(id);
  });
  deletePublishedrealmrepresentation(x.id);
  const e_del = waitForPublishedrealmrepresentationDeleted(id);
  block(matchAddPublishedrealmrepresentation(id), function () {
    verifyPublishedrealmrepresentationDoesNotExist(id);
  });
});

bthread("RealmeventsconfigrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmeventsconfigrepresentation(x.id);
  const e_add = waitForRealmeventsconfigrepresentationAdded(id);
  block(matchDeleteRealmeventsconfigrepresentation(id), function () {
    verifyRealmeventsconfigrepresentationExists(id);
  });
  updateRealmeventsconfigrepresentation(x.id);
  updateRealmeventsconfigrepresentation(x.id);
  const e_upd = waitForRealmeventsconfigrepresentationUpdated(id);
  block(matchDeleteRealmeventsconfigrepresentation(id), function () {
    verifyRealmeventsconfigrepresentationUpdated(id);
  });
  deleteRealmeventsconfigrepresentation(x.id);
  const e_del = waitForRealmeventsconfigrepresentationDeleted(id);
  block(matchAddRealmeventsconfigrepresentation(id), function () {
    verifyRealmeventsconfigrepresentationDoesNotExist(id);
  });
});

bthread("RealmrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmrepresentation(x.id);
  const e_add = waitForRealmrepresentationAdded(id);
  block(matchDeleteRealmrepresentation(id), function () {
    verifyRealmrepresentationExists(id);
  });
  updateRealmrepresentation(x.id);
  updateRealmrepresentation(x.id);
  const e_upd = waitForRealmrepresentationUpdated(id);
  block(matchDeleteRealmrepresentation(id), function () {
    verifyRealmrepresentationUpdated(id);
  });
  deleteRealmrepresentation(x.id);
  const e_del = waitForRealmrepresentationDeleted(id);
  block(matchAddRealmrepresentation(id), function () {
    verifyRealmrepresentationDoesNotExist(id);
  });
});

bthread("RequiredactionproviderrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequiredactionproviderrepresentation(x.id);
  const e_add = waitForRequiredactionproviderrepresentationAdded(id);
  block(matchDeleteRequiredactionproviderrepresentation(id), function () {
    verifyRequiredactionproviderrepresentationExists(id);
  });
  updateRequiredactionproviderrepresentation(x.id);
  updateRequiredactionproviderrepresentation(x.id);
  const e_upd = waitForRequiredactionproviderrepresentationUpdated(id);
  block(matchDeleteRequiredactionproviderrepresentation(id), function () {
    verifyRequiredactionproviderrepresentationUpdated(id);
  });
  deleteRequiredactionproviderrepresentation(x.id);
  const e_del = waitForRequiredactionproviderrepresentationDeleted(id);
  block(matchAddRequiredactionproviderrepresentation(id), function () {
    verifyRequiredactionproviderrepresentationDoesNotExist(id);
  });
});

bthread("ResourceownerrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResourceownerrepresentation(x.id);
  const e_add = waitForResourceownerrepresentationAdded(id);
  block(matchDeleteResourceownerrepresentation(id), function () {
    verifyResourceownerrepresentationExists(id);
  });
  updateResourceownerrepresentation(x.id);
  updateResourceownerrepresentation(x.id);
  const e_upd = waitForResourceownerrepresentationUpdated(id);
  block(matchDeleteResourceownerrepresentation(id), function () {
    verifyResourceownerrepresentationUpdated(id);
  });
  deleteResourceownerrepresentation(x.id);
  const e_del = waitForResourceownerrepresentationDeleted(id);
  block(matchAddResourceownerrepresentation(id), function () {
    verifyResourceownerrepresentationDoesNotExist(id);
  });
});

bthread("ResourcerepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResourcerepresentation(x.id);
  const e_add = waitForResourcerepresentationAdded(id);
  block(matchDeleteResourcerepresentation(id), function () {
    verifyResourcerepresentationExists(id);
  });
  updateResourcerepresentation(x.id);
  updateResourcerepresentation(x.id);
  const e_upd = waitForResourcerepresentationUpdated(id);
  block(matchDeleteResourcerepresentation(id), function () {
    verifyResourcerepresentationUpdated(id);
  });
  deleteResourcerepresentation(x.id);
  const e_del = waitForResourcerepresentationDeleted(id);
  block(matchAddResourcerepresentation(id), function () {
    verifyResourcerepresentationDoesNotExist(id);
  });
});

bthread("ResourcerepresentationownerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResourcerepresentationowner(x.id);
  const e_add = waitForResourcerepresentationownerAdded(id);
  block(matchDeleteResourcerepresentationowner(id), function () {
    verifyResourcerepresentationownerExists(id);
  });
  updateResourcerepresentationowner(x.id);
  updateResourcerepresentationowner(x.id);
  const e_upd = waitForResourcerepresentationownerUpdated(id);
  block(matchDeleteResourcerepresentationowner(id), function () {
    verifyResourcerepresentationownerUpdated(id);
  });
  deleteResourcerepresentationowner(x.id);
  const e_del = waitForResourcerepresentationownerDeleted(id);
  block(matchAddResourcerepresentationowner(id), function () {
    verifyResourcerepresentationownerDoesNotExist(id);
  });
});

bthread("ResourceserverrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResourceserverrepresentation(x.id);
  const e_add = waitForResourceserverrepresentationAdded(id);
  block(matchDeleteResourceserverrepresentation(id), function () {
    verifyResourceserverrepresentationExists(id);
  });
  updateResourceserverrepresentation(x.id);
  updateResourceserverrepresentation(x.id);
  const e_upd = waitForResourceserverrepresentationUpdated(id);
  block(matchDeleteResourceserverrepresentation(id), function () {
    verifyResourceserverrepresentationUpdated(id);
  });
  deleteResourceserverrepresentation(x.id);
  const e_del = waitForResourceserverrepresentationDeleted(id);
  block(matchAddResourceserverrepresentation(id), function () {
    verifyResourceserverrepresentationDoesNotExist(id);
  });
});

bthread("RolerepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRolerepresentation(x.id);
  const e_add = waitForRolerepresentationAdded(id);
  block(matchDeleteRolerepresentation(id), function () {
    verifyRolerepresentationExists(id);
  });
  updateRolerepresentation(x.id);
  updateRolerepresentation(x.id);
  const e_upd = waitForRolerepresentationUpdated(id);
  block(matchDeleteRolerepresentation(id), function () {
    verifyRolerepresentationUpdated(id);
  });
  deleteRolerepresentation(x.id);
  const e_del = waitForRolerepresentationDeleted(id);
  block(matchAddRolerepresentation(id), function () {
    verifyRolerepresentationDoesNotExist(id);
  });
});

bthread("RolesrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRolesrepresentation(x.id);
  const e_add = waitForRolesrepresentationAdded(id);
  block(matchDeleteRolesrepresentation(id), function () {
    verifyRolesrepresentationExists(id);
  });
  updateRolesrepresentation(x.id);
  updateRolesrepresentation(x.id);
  const e_upd = waitForRolesrepresentationUpdated(id);
  block(matchDeleteRolesrepresentation(id), function () {
    verifyRolesrepresentationUpdated(id);
  });
  deleteRolesrepresentation(x.id);
  const e_del = waitForRolesrepresentationDeleted(id);
  block(matchAddRolesrepresentation(id), function () {
    verifyRolesrepresentationDoesNotExist(id);
  });
});

bthread("ScopeenforcementmodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScopeenforcementmode(x.id);
  const e_add = waitForScopeenforcementmodeAdded(id);
  block(matchDeleteScopeenforcementmode(id), function () {
    verifyScopeenforcementmodeExists(id);
  });
  updateScopeenforcementmode(x.id);
  updateScopeenforcementmode(x.id);
  const e_upd = waitForScopeenforcementmodeUpdated(id);
  block(matchDeleteScopeenforcementmode(id), function () {
    verifyScopeenforcementmodeUpdated(id);
  });
  deleteScopeenforcementmode(x.id);
  const e_del = waitForScopeenforcementmodeDeleted(id);
  block(matchAddScopeenforcementmode(id), function () {
    verifyScopeenforcementmodeDoesNotExist(id);
  });
});

bthread("ScopemappingrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScopemappingrepresentation(x.id);
  const e_add = waitForScopemappingrepresentationAdded(id);
  block(matchDeleteScopemappingrepresentation(id), function () {
    verifyScopemappingrepresentationExists(id);
  });
  updateScopemappingrepresentation(x.id);
  updateScopemappingrepresentation(x.id);
  const e_upd = waitForScopemappingrepresentationUpdated(id);
  block(matchDeleteScopemappingrepresentation(id), function () {
    verifyScopemappingrepresentationUpdated(id);
  });
  deleteScopemappingrepresentation(x.id);
  const e_del = waitForScopemappingrepresentationDeleted(id);
  block(matchAddScopemappingrepresentation(id), function () {
    verifyScopemappingrepresentationDoesNotExist(id);
  });
});

bthread("ScoperepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScoperepresentation(x.id);
  const e_add = waitForScoperepresentationAdded(id);
  block(matchDeleteScoperepresentation(id), function () {
    verifyScoperepresentationExists(id);
  });
  updateScoperepresentation(x.id);
  updateScoperepresentation(x.id);
  const e_upd = waitForScoperepresentationUpdated(id);
  block(matchDeleteScoperepresentation(id), function () {
    verifyScoperepresentationUpdated(id);
  });
  deleteScoperepresentation(x.id);
  const e_del = waitForScoperepresentationDeleted(id);
  block(matchAddScoperepresentation(id), function () {
    verifyScoperepresentationDoesNotExist(id);
  });
});

bthread("SociallinkrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSociallinkrepresentation(x.id);
  const e_add = waitForSociallinkrepresentationAdded(id);
  block(matchDeleteSociallinkrepresentation(id), function () {
    verifySociallinkrepresentationExists(id);
  });
  updateSociallinkrepresentation(x.id);
  updateSociallinkrepresentation(x.id);
  const e_upd = waitForSociallinkrepresentationUpdated(id);
  block(matchDeleteSociallinkrepresentation(id), function () {
    verifySociallinkrepresentationUpdated(id);
  });
  deleteSociallinkrepresentation(x.id);
  const e_del = waitForSociallinkrepresentationDeleted(id);
  block(matchAddSociallinkrepresentation(id), function () {
    verifySociallinkrepresentationDoesNotExist(id);
  });
});

bthread("UserconsentrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserconsentrepresentation(x.id);
  const e_add = waitForUserconsentrepresentationAdded(id);
  block(matchDeleteUserconsentrepresentation(id), function () {
    verifyUserconsentrepresentationExists(id);
  });
  updateUserconsentrepresentation(x.id);
  updateUserconsentrepresentation(x.id);
  const e_upd = waitForUserconsentrepresentationUpdated(id);
  block(matchDeleteUserconsentrepresentation(id), function () {
    verifyUserconsentrepresentationUpdated(id);
  });
  deleteUserconsentrepresentation(x.id);
  const e_del = waitForUserconsentrepresentationDeleted(id);
  block(matchAddUserconsentrepresentation(id), function () {
    verifyUserconsentrepresentationDoesNotExist(id);
  });
});

bthread("UserfederationmapperrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserfederationmapperrepresentation(x.id);
  const e_add = waitForUserfederationmapperrepresentationAdded(id);
  block(matchDeleteUserfederationmapperrepresentation(id), function () {
    verifyUserfederationmapperrepresentationExists(id);
  });
  updateUserfederationmapperrepresentation(x.id);
  updateUserfederationmapperrepresentation(x.id);
  const e_upd = waitForUserfederationmapperrepresentationUpdated(id);
  block(matchDeleteUserfederationmapperrepresentation(id), function () {
    verifyUserfederationmapperrepresentationUpdated(id);
  });
  deleteUserfederationmapperrepresentation(x.id);
  const e_del = waitForUserfederationmapperrepresentationDeleted(id);
  block(matchAddUserfederationmapperrepresentation(id), function () {
    verifyUserfederationmapperrepresentationDoesNotExist(id);
  });
});

bthread("UserfederationproviderrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserfederationproviderrepresentation(x.id);
  const e_add = waitForUserfederationproviderrepresentationAdded(id);
  block(matchDeleteUserfederationproviderrepresentation(id), function () {
    verifyUserfederationproviderrepresentationExists(id);
  });
  updateUserfederationproviderrepresentation(x.id);
  updateUserfederationproviderrepresentation(x.id);
  const e_upd = waitForUserfederationproviderrepresentationUpdated(id);
  block(matchDeleteUserfederationproviderrepresentation(id), function () {
    verifyUserfederationproviderrepresentationUpdated(id);
  });
  deleteUserfederationproviderrepresentation(x.id);
  const e_del = waitForUserfederationproviderrepresentationDeleted(id);
  block(matchAddUserfederationproviderrepresentation(id), function () {
    verifyUserfederationproviderrepresentationDoesNotExist(id);
  });
});

bthread("UserrepresentationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserrepresentation(x.id);
  const e_add = waitForUserrepresentationAdded(id);
  block(matchDeleteUserrepresentation(id), function () {
    verifyUserrepresentationExists(id);
  });
  updateUserrepresentation(x.id);
  updateUserrepresentation(x.id);
  const e_upd = waitForUserrepresentationUpdated(id);
  block(matchDeleteUserrepresentation(id), function () {
    verifyUserrepresentationUpdated(id);
  });
  deleteUserrepresentation(x.id);
  const e_del = waitForUserrepresentationDeleted(id);
  block(matchAddUserrepresentation(id), function () {
    verifyUserrepresentationDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Access nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAccess(x.id);
  for (var i=0; i<steps; i++) {
    updateAccess(x.id);
  }
  if (pick([true,false])) { deleteAccess(x.id); }
  verifyAccessExists(x.id);
  verifyAccessUpdated(x.id);
});

bthread("Access nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccess(a.id);
  block(matchAddAccess(a.id, ANY), function () {});
  addAccess(b.id);
});

bthread("Accesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccesstoken(a.id);
  block(matchAddAccesstoken(a.id, ANY), function () {});
  addAccesstoken(b.id);
});

bthread("Addressclaimset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAddressclaimset(x.id);
  for (var i=0; i<steps; i++) {
    updateAddressclaimset(x.id);
  }
  if (pick([true,false])) { deleteAddressclaimset(x.id); }
  verifyAddressclaimsetExists(x.id);
  verifyAddressclaimsetUpdated(x.id);
});

bthread("Addressclaimset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAddressclaimset(a.id);
  block(matchAddAddressclaimset(a.id, ANY), function () {});
  addAddressclaimset(b.id);
});

bthread("Applicationrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApplicationrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateApplicationrepresentation(x.id);
  }
  if (pick([true,false])) { deleteApplicationrepresentation(x.id); }
  verifyApplicationrepresentationExists(x.id);
  verifyApplicationrepresentationUpdated(x.id);
});

bthread("Applicationrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApplicationrepresentation(a.id);
  block(matchAddApplicationrepresentation(a.id, ANY), function () {});
  addApplicationrepresentation(b.id);
});

bthread("Applicationrepresentationclaims nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApplicationrepresentationclaims(x.id);
  for (var i=0; i<steps; i++) {
    updateApplicationrepresentationclaims(x.id);
  }
  if (pick([true,false])) { deleteApplicationrepresentationclaims(x.id); }
  verifyApplicationrepresentationclaimsExists(x.id);
  verifyApplicationrepresentationclaimsUpdated(x.id);
});

bthread("Applicationrepresentationclaims nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApplicationrepresentationclaims(a.id);
  block(matchAddApplicationrepresentationclaims(a.id, ANY), function () {});
  addApplicationrepresentationclaims(b.id);
});

bthread("Authenticationexecutionexportrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthenticationexecutionexportrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticationexecutionexportrepresentation(x.id);
  }
  if (pick([true,false])) { deleteAuthenticationexecutionexportrepresentation(x.id); }
  verifyAuthenticationexecutionexportrepresentationExists(x.id);
  verifyAuthenticationexecutionexportrepresentationUpdated(x.id);
});

bthread("Authenticationexecutionexportrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticationexecutionexportrepresentation(a.id);
  block(matchAddAuthenticationexecutionexportrepresentation(a.id, ANY), function () {});
  addAuthenticationexecutionexportrepresentation(b.id);
});

bthread("Authenticationexecutioninforepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthenticationexecutioninforepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticationexecutioninforepresentation(x.id);
  }
  if (pick([true,false])) { deleteAuthenticationexecutioninforepresentation(x.id); }
  verifyAuthenticationexecutioninforepresentationExists(x.id);
  verifyAuthenticationexecutioninforepresentationUpdated(x.id);
});

bthread("Authenticationexecutioninforepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticationexecutioninforepresentation(a.id);
  block(matchAddAuthenticationexecutioninforepresentation(a.id, ANY), function () {});
  addAuthenticationexecutioninforepresentation(b.id);
});

bthread("Authenticationexecutionrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthenticationexecutionrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticationexecutionrepresentation(x.id);
  }
  if (pick([true,false])) { deleteAuthenticationexecutionrepresentation(x.id); }
  verifyAuthenticationexecutionrepresentationExists(x.id);
  verifyAuthenticationexecutionrepresentationUpdated(x.id);
});

bthread("Authenticationexecutionrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticationexecutionrepresentation(a.id);
  block(matchAddAuthenticationexecutionrepresentation(a.id, ANY), function () {});
  addAuthenticationexecutionrepresentation(b.id);
});

bthread("Authenticationflowrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthenticationflowrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticationflowrepresentation(x.id);
  }
  if (pick([true,false])) { deleteAuthenticationflowrepresentation(x.id); }
  verifyAuthenticationflowrepresentationExists(x.id);
  verifyAuthenticationflowrepresentationUpdated(x.id);
});

bthread("Authenticationflowrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticationflowrepresentation(a.id);
  block(matchAddAuthenticationflowrepresentation(a.id, ANY), function () {});
  addAuthenticationflowrepresentation(b.id);
});

bthread("Authenticatorconfiginforepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthenticatorconfiginforepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticatorconfiginforepresentation(x.id);
  }
  if (pick([true,false])) { deleteAuthenticatorconfiginforepresentation(x.id); }
  verifyAuthenticatorconfiginforepresentationExists(x.id);
  verifyAuthenticatorconfiginforepresentationUpdated(x.id);
});

bthread("Authenticatorconfiginforepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticatorconfiginforepresentation(a.id);
  block(matchAddAuthenticatorconfiginforepresentation(a.id, ANY), function () {});
  addAuthenticatorconfiginforepresentation(b.id);
});

bthread("Authenticatorconfigrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthenticatorconfigrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthenticatorconfigrepresentation(x.id);
  }
  if (pick([true,false])) { deleteAuthenticatorconfigrepresentation(x.id); }
  verifyAuthenticatorconfigrepresentationExists(x.id);
  verifyAuthenticatorconfigrepresentationUpdated(x.id);
});

bthread("Authenticatorconfigrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthenticatorconfigrepresentation(a.id);
  block(matchAddAuthenticatorconfigrepresentation(a.id, ANY), function () {});
  addAuthenticatorconfigrepresentation(b.id);
});

bthread("Authorization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAuthorization(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthorization(x.id);
  }
  if (pick([true,false])) { deleteAuthorization(x.id); }
  verifyAuthorizationExists(x.id);
  verifyAuthorizationUpdated(x.id);
});

bthread("Authorization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAuthorization(a.id);
  block(matchAddAuthorization(a.id, ANY), function () {});
  addAuthorization(b.id);
});

bthread("Certconf nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCertconf(x.id);
  for (var i=0; i<steps; i++) {
    updateCertconf(x.id);
  }
  if (pick([true,false])) { deleteCertconf(x.id); }
  verifyCertconfExists(x.id);
  verifyCertconfUpdated(x.id);
});

bthread("Certconf nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCertconf(a.id);
  block(matchAddCertconf(a.id, ANY), function () {});
  addCertconf(b.id);
});

bthread("Certificaterepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCertificaterepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateCertificaterepresentation(x.id);
  }
  if (pick([true,false])) { deleteCertificaterepresentation(x.id); }
  verifyCertificaterepresentationExists(x.id);
  verifyCertificaterepresentationUpdated(x.id);
});

bthread("Certificaterepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCertificaterepresentation(a.id);
  block(matchAddCertificaterepresentation(a.id, ANY), function () {});
  addCertificaterepresentation(b.id);
});

bthread("Claimrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClaimrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClaimrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClaimrepresentation(x.id); }
  verifyClaimrepresentationExists(x.id);
  verifyClaimrepresentationUpdated(x.id);
});

bthread("Claimrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClaimrepresentation(a.id);
  block(matchAddClaimrepresentation(a.id, ANY), function () {});
  addClaimrepresentation(b.id);
});

bthread("Clientinitialaccesscreatepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientinitialaccesscreatepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientinitialaccesscreatepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientinitialaccesscreatepresentation(x.id); }
  verifyClientinitialaccesscreatepresentationExists(x.id);
  verifyClientinitialaccesscreatepresentationUpdated(x.id);
});

bthread("Clientinitialaccesscreatepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientinitialaccesscreatepresentation(a.id);
  block(matchAddClientinitialaccesscreatepresentation(a.id, ANY), function () {});
  addClientinitialaccesscreatepresentation(b.id);
});

bthread("Clientinitialaccesspresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientinitialaccesspresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientinitialaccesspresentation(x.id);
  }
  if (pick([true,false])) { deleteClientinitialaccesspresentation(x.id); }
  verifyClientinitialaccesspresentationExists(x.id);
  verifyClientinitialaccesspresentationUpdated(x.id);
});

bthread("Clientinitialaccesspresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientinitialaccesspresentation(a.id);
  block(matchAddClientinitialaccesspresentation(a.id, ANY), function () {});
  addClientinitialaccesspresentation(b.id);
});

bthread("Clientmappingsrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientmappingsrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientmappingsrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientmappingsrepresentation(x.id); }
  verifyClientmappingsrepresentationExists(x.id);
  verifyClientmappingsrepresentationUpdated(x.id);
});

bthread("Clientmappingsrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientmappingsrepresentation(a.id);
  block(matchAddClientmappingsrepresentation(a.id, ANY), function () {});
  addClientmappingsrepresentation(b.id);
});

bthread("Clientpoliciesrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientpoliciesrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientpoliciesrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientpoliciesrepresentation(x.id); }
  verifyClientpoliciesrepresentationExists(x.id);
  verifyClientpoliciesrepresentationUpdated(x.id);
});

bthread("Clientpoliciesrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientpoliciesrepresentation(a.id);
  block(matchAddClientpoliciesrepresentation(a.id, ANY), function () {});
  addClientpoliciesrepresentation(b.id);
});

bthread("Clientpolicyconditionrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientpolicyconditionrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientpolicyconditionrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientpolicyconditionrepresentation(x.id); }
  verifyClientpolicyconditionrepresentationExists(x.id);
  verifyClientpolicyconditionrepresentationUpdated(x.id);
});

bthread("Clientpolicyconditionrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientpolicyconditionrepresentation(a.id);
  block(matchAddClientpolicyconditionrepresentation(a.id, ANY), function () {});
  addClientpolicyconditionrepresentation(b.id);
});

bthread("Clientpolicyexecutorrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientpolicyexecutorrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientpolicyexecutorrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientpolicyexecutorrepresentation(x.id); }
  verifyClientpolicyexecutorrepresentationExists(x.id);
  verifyClientpolicyexecutorrepresentationUpdated(x.id);
});

bthread("Clientpolicyexecutorrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientpolicyexecutorrepresentation(a.id);
  block(matchAddClientpolicyexecutorrepresentation(a.id, ANY), function () {});
  addClientpolicyexecutorrepresentation(b.id);
});

bthread("Clientpolicyrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientpolicyrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientpolicyrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientpolicyrepresentation(x.id); }
  verifyClientpolicyrepresentationExists(x.id);
  verifyClientpolicyrepresentationUpdated(x.id);
});

bthread("Clientpolicyrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientpolicyrepresentation(a.id);
  block(matchAddClientpolicyrepresentation(a.id, ANY), function () {});
  addClientpolicyrepresentation(b.id);
});

bthread("Clientprofilerepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientprofilerepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientprofilerepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientprofilerepresentation(x.id); }
  verifyClientprofilerepresentationExists(x.id);
  verifyClientprofilerepresentationUpdated(x.id);
});

bthread("Clientprofilerepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientprofilerepresentation(a.id);
  block(matchAddClientprofilerepresentation(a.id, ANY), function () {});
  addClientprofilerepresentation(b.id);
});

bthread("Clientprofilesrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientprofilesrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientprofilesrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientprofilesrepresentation(x.id); }
  verifyClientprofilesrepresentationExists(x.id);
  verifyClientprofilesrepresentationUpdated(x.id);
});

bthread("Clientprofilesrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientprofilesrepresentation(a.id);
  block(matchAddClientprofilesrepresentation(a.id, ANY), function () {});
  addClientprofilesrepresentation(b.id);
});

bthread("Clientrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientrepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientrepresentation(x.id); }
  verifyClientrepresentationExists(x.id);
  verifyClientrepresentationUpdated(x.id);
});

bthread("Clientrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientrepresentation(a.id);
  block(matchAddClientrepresentation(a.id, ANY), function () {});
  addClientrepresentation(b.id);
});

bthread("Clientscoperepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClientscoperepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClientscoperepresentation(x.id);
  }
  if (pick([true,false])) { deleteClientscoperepresentation(x.id); }
  verifyClientscoperepresentationExists(x.id);
  verifyClientscoperepresentationUpdated(x.id);
});

bthread("Clientscoperepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClientscoperepresentation(a.id);
  block(matchAddClientscoperepresentation(a.id, ANY), function () {});
  addClientscoperepresentation(b.id);
});

bthread("Clienttemplaterepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addClienttemplaterepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateClienttemplaterepresentation(x.id);
  }
  if (pick([true,false])) { deleteClienttemplaterepresentation(x.id); }
  verifyClienttemplaterepresentationExists(x.id);
  verifyClienttemplaterepresentationUpdated(x.id);
});

bthread("Clienttemplaterepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addClienttemplaterepresentation(a.id);
  block(matchAddClienttemplaterepresentation(a.id, ANY), function () {});
  addClienttemplaterepresentation(b.id);
});

bthread("Componentexportrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addComponentexportrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateComponentexportrepresentation(x.id);
  }
  if (pick([true,false])) { deleteComponentexportrepresentation(x.id); }
  verifyComponentexportrepresentationExists(x.id);
  verifyComponentexportrepresentationUpdated(x.id);
});

bthread("Componentexportrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addComponentexportrepresentation(a.id);
  block(matchAddComponentexportrepresentation(a.id, ANY), function () {});
  addComponentexportrepresentation(b.id);
});

bthread("Componentrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addComponentrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateComponentrepresentation(x.id);
  }
  if (pick([true,false])) { deleteComponentrepresentation(x.id); }
  verifyComponentrepresentationExists(x.id);
  verifyComponentrepresentationUpdated(x.id);
});

bthread("Componentrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addComponentrepresentation(a.id);
  block(matchAddComponentrepresentation(a.id, ANY), function () {});
  addComponentrepresentation(b.id);
});

bthread("Composites nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addComposites(x.id);
  for (var i=0; i<steps; i++) {
    updateComposites(x.id);
  }
  if (pick([true,false])) { deleteComposites(x.id); }
  verifyCompositesExists(x.id);
  verifyCompositesUpdated(x.id);
});

bthread("Composites nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addComposites(a.id);
  block(matchAddComposites(a.id, ANY), function () {});
  addComposites(b.id);
});

bthread("Configpropertyrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addConfigpropertyrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateConfigpropertyrepresentation(x.id);
  }
  if (pick([true,false])) { deleteConfigpropertyrepresentation(x.id); }
  verifyConfigpropertyrepresentationExists(x.id);
  verifyConfigpropertyrepresentationUpdated(x.id);
});

bthread("Configpropertyrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addConfigpropertyrepresentation(a.id);
  block(matchAddConfigpropertyrepresentation(a.id, ANY), function () {});
  addConfigpropertyrepresentation(b.id);
});

bthread("Credentialrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCredentialrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateCredentialrepresentation(x.id);
  }
  if (pick([true,false])) { deleteCredentialrepresentation(x.id); }
  verifyCredentialrepresentationExists(x.id);
  verifyCredentialrepresentationUpdated(x.id);
});

bthread("Credentialrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCredentialrepresentation(a.id);
  block(matchAddCredentialrepresentation(a.id, ANY), function () {});
  addCredentialrepresentation(b.id);
});

bthread("Decisionstrategy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDecisionstrategy(x.id);
  for (var i=0; i<steps; i++) {
    updateDecisionstrategy(x.id);
  }
  if (pick([true,false])) { deleteDecisionstrategy(x.id); }
  verifyDecisionstrategyExists(x.id);
  verifyDecisionstrategyUpdated(x.id);
});

bthread("Decisionstrategy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDecisionstrategy(a.id);
  block(matchAddDecisionstrategy(a.id, ANY), function () {});
  addDecisionstrategy(b.id);
});

bthread("Enforcementmode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEnforcementmode(x.id);
  for (var i=0; i<steps; i++) {
    updateEnforcementmode(x.id);
  }
  if (pick([true,false])) { deleteEnforcementmode(x.id); }
  verifyEnforcementmodeExists(x.id);
  verifyEnforcementmodeUpdated(x.id);
});

bthread("Enforcementmode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEnforcementmode(a.id);
  block(matchAddEnforcementmode(a.id, ANY), function () {});
  addEnforcementmode(b.id);
});

bthread("Federatedidentityrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFederatedidentityrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateFederatedidentityrepresentation(x.id);
  }
  if (pick([true,false])) { deleteFederatedidentityrepresentation(x.id); }
  verifyFederatedidentityrepresentationExists(x.id);
  verifyFederatedidentityrepresentationUpdated(x.id);
});

bthread("Federatedidentityrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFederatedidentityrepresentation(a.id);
  block(matchAddFederatedidentityrepresentation(a.id, ANY), function () {});
  addFederatedidentityrepresentation(b.id);
});

bthread("Globalrequestresult nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGlobalrequestresult(x.id);
  for (var i=0; i<steps; i++) {
    updateGlobalrequestresult(x.id);
  }
  if (pick([true,false])) { deleteGlobalrequestresult(x.id); }
  verifyGlobalrequestresultExists(x.id);
  verifyGlobalrequestresultUpdated(x.id);
});

bthread("Globalrequestresult nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGlobalrequestresult(a.id);
  block(matchAddGlobalrequestresult(a.id, ANY), function () {});
  addGlobalrequestresult(b.id);
});

bthread("Grouprepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGrouprepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateGrouprepresentation(x.id);
  }
  if (pick([true,false])) { deleteGrouprepresentation(x.id); }
  verifyGrouprepresentationExists(x.id);
  verifyGrouprepresentationUpdated(x.id);
});

bthread("Grouprepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGrouprepresentation(a.id);
  block(matchAddGrouprepresentation(a.id, ANY), function () {});
  addGrouprepresentation(b.id);
});

bthread("Identityprovidermapperrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIdentityprovidermapperrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateIdentityprovidermapperrepresentation(x.id);
  }
  if (pick([true,false])) { deleteIdentityprovidermapperrepresentation(x.id); }
  verifyIdentityprovidermapperrepresentationExists(x.id);
  verifyIdentityprovidermapperrepresentationUpdated(x.id);
});

bthread("Identityprovidermapperrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIdentityprovidermapperrepresentation(a.id);
  block(matchAddIdentityprovidermapperrepresentation(a.id, ANY), function () {});
  addIdentityprovidermapperrepresentation(b.id);
});

bthread("Identityprovidermappertyperepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIdentityprovidermappertyperepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateIdentityprovidermappertyperepresentation(x.id);
  }
  if (pick([true,false])) { deleteIdentityprovidermappertyperepresentation(x.id); }
  verifyIdentityprovidermappertyperepresentationExists(x.id);
  verifyIdentityprovidermappertyperepresentationUpdated(x.id);
});

bthread("Identityprovidermappertyperepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIdentityprovidermappertyperepresentation(a.id);
  block(matchAddIdentityprovidermappertyperepresentation(a.id, ANY), function () {});
  addIdentityprovidermappertyperepresentation(b.id);
});

bthread("Identityproviderrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIdentityproviderrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateIdentityproviderrepresentation(x.id);
  }
  if (pick([true,false])) { deleteIdentityproviderrepresentation(x.id); }
  verifyIdentityproviderrepresentationExists(x.id);
  verifyIdentityproviderrepresentationUpdated(x.id);
});

bthread("Identityproviderrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIdentityproviderrepresentation(a.id);
  block(matchAddIdentityproviderrepresentation(a.id, ANY), function () {});
  addIdentityproviderrepresentation(b.id);
});

bthread("Idtoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIdtoken(x.id);
  for (var i=0; i<steps; i++) {
    updateIdtoken(x.id);
  }
  if (pick([true,false])) { deleteIdtoken(x.id); }
  verifyIdtokenExists(x.id);
  verifyIdtokenUpdated(x.id);
});

bthread("Idtoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIdtoken(a.id);
  block(matchAddIdtoken(a.id, ANY), function () {});
  addIdtoken(b.id);
});

bthread("Installationadapterconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInstallationadapterconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateInstallationadapterconfig(x.id);
  }
  if (pick([true,false])) { deleteInstallationadapterconfig(x.id); }
  verifyInstallationadapterconfigExists(x.id);
  verifyInstallationadapterconfigUpdated(x.id);
});

bthread("Installationadapterconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInstallationadapterconfig(a.id);
  block(matchAddInstallationadapterconfig(a.id, ANY), function () {});
  addInstallationadapterconfig(b.id);
});

bthread("Keymetadatarepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addKeymetadatarepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateKeymetadatarepresentation(x.id);
  }
  if (pick([true,false])) { deleteKeymetadatarepresentation(x.id); }
  verifyKeymetadatarepresentationExists(x.id);
  verifyKeymetadatarepresentationUpdated(x.id);
});

bthread("Keymetadatarepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addKeymetadatarepresentation(a.id);
  block(matchAddKeymetadatarepresentation(a.id, ANY), function () {});
  addKeymetadatarepresentation(b.id);
});

bthread("Keysmetadatarepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addKeysmetadatarepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateKeysmetadatarepresentation(x.id);
  }
  if (pick([true,false])) { deleteKeysmetadatarepresentation(x.id); }
  verifyKeysmetadatarepresentationExists(x.id);
  verifyKeysmetadatarepresentationUpdated(x.id);
});

bthread("Keysmetadatarepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addKeysmetadatarepresentation(a.id);
  block(matchAddKeysmetadatarepresentation(a.id, ANY), function () {});
  addKeysmetadatarepresentation(b.id);
});

bthread("Keystoreconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addKeystoreconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateKeystoreconfig(x.id);
  }
  if (pick([true,false])) { deleteKeystoreconfig(x.id); }
  verifyKeystoreconfigExists(x.id);
  verifyKeystoreconfigUpdated(x.id);
});

bthread("Keystoreconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addKeystoreconfig(a.id);
  block(matchAddKeystoreconfig(a.id, ANY), function () {});
  addKeystoreconfig(b.id);
});

bthread("Keyuse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addKeyuse(x.id);
  for (var i=0; i<steps; i++) {
    updateKeyuse(x.id);
  }
  if (pick([true,false])) { deleteKeyuse(x.id); }
  verifyKeyuseExists(x.id);
  verifyKeyuseUpdated(x.id);
});

bthread("Keyuse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addKeyuse(a.id);
  block(matchAddKeyuse(a.id, ANY), function () {});
  addKeyuse(b.id);
});

bthread("Logic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLogic(x.id);
  for (var i=0; i<steps; i++) {
    updateLogic(x.id);
  }
  if (pick([true,false])) { deleteLogic(x.id); }
  verifyLogicExists(x.id);
  verifyLogicUpdated(x.id);
});

bthread("Logic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLogic(a.id);
  block(matchAddLogic(a.id, ANY), function () {});
  addLogic(b.id);
});

bthread("Managementpermissionreference nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addManagementpermissionreference(x.id);
  for (var i=0; i<steps; i++) {
    updateManagementpermissionreference(x.id);
  }
  if (pick([true,false])) { deleteManagementpermissionreference(x.id); }
  verifyManagementpermissionreferenceExists(x.id);
  verifyManagementpermissionreferenceUpdated(x.id);
});

bthread("Managementpermissionreference nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addManagementpermissionreference(a.id);
  block(matchAddManagementpermissionreference(a.id, ANY), function () {});
  addManagementpermissionreference(b.id);
});

bthread("Mappingsrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMappingsrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateMappingsrepresentation(x.id);
  }
  if (pick([true,false])) { deleteMappingsrepresentation(x.id); }
  verifyMappingsrepresentationExists(x.id);
  verifyMappingsrepresentationUpdated(x.id);
});

bthread("Mappingsrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMappingsrepresentation(a.id);
  block(matchAddMappingsrepresentation(a.id, ANY), function () {});
  addMappingsrepresentation(b.id);
});

bthread("Methodconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMethodconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateMethodconfig(x.id);
  }
  if (pick([true,false])) { deleteMethodconfig(x.id); }
  verifyMethodconfigExists(x.id);
  verifyMethodconfigUpdated(x.id);
});

bthread("Methodconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMethodconfig(a.id);
  block(matchAddMethodconfig(a.id, ANY), function () {});
  addMethodconfig(b.id);
});

bthread("Oauthclientrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOauthclientrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateOauthclientrepresentation(x.id);
  }
  if (pick([true,false])) { deleteOauthclientrepresentation(x.id); }
  verifyOauthclientrepresentationExists(x.id);
  verifyOauthclientrepresentationUpdated(x.id);
});

bthread("Oauthclientrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOauthclientrepresentation(a.id);
  block(matchAddOauthclientrepresentation(a.id, ANY), function () {});
  addOauthclientrepresentation(b.id);
});

bthread("Pathcacheconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPathcacheconfig(x.id);
  for (var i=0; i<steps; i++) {
    updatePathcacheconfig(x.id);
  }
  if (pick([true,false])) { deletePathcacheconfig(x.id); }
  verifyPathcacheconfigExists(x.id);
  verifyPathcacheconfigUpdated(x.id);
});

bthread("Pathcacheconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPathcacheconfig(a.id);
  block(matchAddPathcacheconfig(a.id, ANY), function () {});
  addPathcacheconfig(b.id);
});

bthread("Pathconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPathconfig(x.id);
  for (var i=0; i<steps; i++) {
    updatePathconfig(x.id);
  }
  if (pick([true,false])) { deletePathconfig(x.id); }
  verifyPathconfigExists(x.id);
  verifyPathconfigUpdated(x.id);
});

bthread("Pathconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPathconfig(a.id);
  block(matchAddPathconfig(a.id, ANY), function () {});
  addPathconfig(b.id);
});

bthread("Permission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPermission(a.id);
  block(matchAddPermission(a.id, ANY), function () {});
  addPermission(b.id);
});

bthread("Policyenforcementmode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPolicyenforcementmode(x.id);
  for (var i=0; i<steps; i++) {
    updatePolicyenforcementmode(x.id);
  }
  if (pick([true,false])) { deletePolicyenforcementmode(x.id); }
  verifyPolicyenforcementmodeExists(x.id);
  verifyPolicyenforcementmodeUpdated(x.id);
});

bthread("Policyenforcementmode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPolicyenforcementmode(a.id);
  block(matchAddPolicyenforcementmode(a.id, ANY), function () {});
  addPolicyenforcementmode(b.id);
});

bthread("Policyenforcerconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPolicyenforcerconfig(x.id);
  for (var i=0; i<steps; i++) {
    updatePolicyenforcerconfig(x.id);
  }
  if (pick([true,false])) { deletePolicyenforcerconfig(x.id); }
  verifyPolicyenforcerconfigExists(x.id);
  verifyPolicyenforcerconfigUpdated(x.id);
});

bthread("Policyenforcerconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPolicyenforcerconfig(a.id);
  block(matchAddPolicyenforcerconfig(a.id, ANY), function () {});
  addPolicyenforcerconfig(b.id);
});

bthread("Policyrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPolicyrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updatePolicyrepresentation(x.id);
  }
  if (pick([true,false])) { deletePolicyrepresentation(x.id); }
  verifyPolicyrepresentationExists(x.id);
  verifyPolicyrepresentationUpdated(x.id);
});

bthread("Policyrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPolicyrepresentation(a.id);
  block(matchAddPolicyrepresentation(a.id, ANY), function () {});
  addPolicyrepresentation(b.id);
});

bthread("Protocolmapperrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addProtocolmapperrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateProtocolmapperrepresentation(x.id);
  }
  if (pick([true,false])) { deleteProtocolmapperrepresentation(x.id); }
  verifyProtocolmapperrepresentationExists(x.id);
  verifyProtocolmapperrepresentationUpdated(x.id);
});

bthread("Protocolmapperrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProtocolmapperrepresentation(a.id);
  block(matchAddProtocolmapperrepresentation(a.id, ANY), function () {});
  addProtocolmapperrepresentation(b.id);
});

bthread("Publishedrealmrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPublishedrealmrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updatePublishedrealmrepresentation(x.id);
  }
  if (pick([true,false])) { deletePublishedrealmrepresentation(x.id); }
  verifyPublishedrealmrepresentationExists(x.id);
  verifyPublishedrealmrepresentationUpdated(x.id);
});

bthread("Publishedrealmrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPublishedrealmrepresentation(a.id);
  block(matchAddPublishedrealmrepresentation(a.id, ANY), function () {});
  addPublishedrealmrepresentation(b.id);
});

bthread("Realmeventsconfigrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmeventsconfigrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmeventsconfigrepresentation(x.id);
  }
  if (pick([true,false])) { deleteRealmeventsconfigrepresentation(x.id); }
  verifyRealmeventsconfigrepresentationExists(x.id);
  verifyRealmeventsconfigrepresentationUpdated(x.id);
});

bthread("Realmeventsconfigrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmeventsconfigrepresentation(a.id);
  block(matchAddRealmeventsconfigrepresentation(a.id, ANY), function () {});
  addRealmeventsconfigrepresentation(b.id);
});

bthread("Realmrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmrepresentation(x.id);
  }
  if (pick([true,false])) { deleteRealmrepresentation(x.id); }
  verifyRealmrepresentationExists(x.id);
  verifyRealmrepresentationUpdated(x.id);
});

bthread("Realmrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmrepresentation(a.id);
  block(matchAddRealmrepresentation(a.id, ANY), function () {});
  addRealmrepresentation(b.id);
});

bthread("Requiredactionproviderrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRequiredactionproviderrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateRequiredactionproviderrepresentation(x.id);
  }
  if (pick([true,false])) { deleteRequiredactionproviderrepresentation(x.id); }
  verifyRequiredactionproviderrepresentationExists(x.id);
  verifyRequiredactionproviderrepresentationUpdated(x.id);
});

bthread("Requiredactionproviderrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRequiredactionproviderrepresentation(a.id);
  block(matchAddRequiredactionproviderrepresentation(a.id, ANY), function () {});
  addRequiredactionproviderrepresentation(b.id);
});

bthread("Resourceownerrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addResourceownerrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateResourceownerrepresentation(x.id);
  }
  if (pick([true,false])) { deleteResourceownerrepresentation(x.id); }
  verifyResourceownerrepresentationExists(x.id);
  verifyResourceownerrepresentationUpdated(x.id);
});

bthread("Resourceownerrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResourceownerrepresentation(a.id);
  block(matchAddResourceownerrepresentation(a.id, ANY), function () {});
  addResourceownerrepresentation(b.id);
});

bthread("Resourcerepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addResourcerepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateResourcerepresentation(x.id);
  }
  if (pick([true,false])) { deleteResourcerepresentation(x.id); }
  verifyResourcerepresentationExists(x.id);
  verifyResourcerepresentationUpdated(x.id);
});

bthread("Resourcerepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResourcerepresentation(a.id);
  block(matchAddResourcerepresentation(a.id, ANY), function () {});
  addResourcerepresentation(b.id);
});

bthread("Resourcerepresentationowner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addResourcerepresentationowner(x.id);
  for (var i=0; i<steps; i++) {
    updateResourcerepresentationowner(x.id);
  }
  if (pick([true,false])) { deleteResourcerepresentationowner(x.id); }
  verifyResourcerepresentationownerExists(x.id);
  verifyResourcerepresentationownerUpdated(x.id);
});

bthread("Resourcerepresentationowner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResourcerepresentationowner(a.id);
  block(matchAddResourcerepresentationowner(a.id, ANY), function () {});
  addResourcerepresentationowner(b.id);
});

bthread("Resourceserverrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addResourceserverrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateResourceserverrepresentation(x.id);
  }
  if (pick([true,false])) { deleteResourceserverrepresentation(x.id); }
  verifyResourceserverrepresentationExists(x.id);
  verifyResourceserverrepresentationUpdated(x.id);
});

bthread("Resourceserverrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResourceserverrepresentation(a.id);
  block(matchAddResourceserverrepresentation(a.id, ANY), function () {});
  addResourceserverrepresentation(b.id);
});

bthread("Rolerepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRolerepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateRolerepresentation(x.id);
  }
  if (pick([true,false])) { deleteRolerepresentation(x.id); }
  verifyRolerepresentationExists(x.id);
  verifyRolerepresentationUpdated(x.id);
});

bthread("Rolerepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRolerepresentation(a.id);
  block(matchAddRolerepresentation(a.id, ANY), function () {});
  addRolerepresentation(b.id);
});

bthread("Rolesrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRolesrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateRolesrepresentation(x.id);
  }
  if (pick([true,false])) { deleteRolesrepresentation(x.id); }
  verifyRolesrepresentationExists(x.id);
  verifyRolesrepresentationUpdated(x.id);
});

bthread("Rolesrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRolesrepresentation(a.id);
  block(matchAddRolesrepresentation(a.id, ANY), function () {});
  addRolesrepresentation(b.id);
});

bthread("Scopeenforcementmode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addScopeenforcementmode(x.id);
  for (var i=0; i<steps; i++) {
    updateScopeenforcementmode(x.id);
  }
  if (pick([true,false])) { deleteScopeenforcementmode(x.id); }
  verifyScopeenforcementmodeExists(x.id);
  verifyScopeenforcementmodeUpdated(x.id);
});

bthread("Scopeenforcementmode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScopeenforcementmode(a.id);
  block(matchAddScopeenforcementmode(a.id, ANY), function () {});
  addScopeenforcementmode(b.id);
});

bthread("Scopemappingrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addScopemappingrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateScopemappingrepresentation(x.id);
  }
  if (pick([true,false])) { deleteScopemappingrepresentation(x.id); }
  verifyScopemappingrepresentationExists(x.id);
  verifyScopemappingrepresentationUpdated(x.id);
});

bthread("Scopemappingrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScopemappingrepresentation(a.id);
  block(matchAddScopemappingrepresentation(a.id, ANY), function () {});
  addScopemappingrepresentation(b.id);
});

bthread("Scoperepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addScoperepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateScoperepresentation(x.id);
  }
  if (pick([true,false])) { deleteScoperepresentation(x.id); }
  verifyScoperepresentationExists(x.id);
  verifyScoperepresentationUpdated(x.id);
});

bthread("Scoperepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScoperepresentation(a.id);
  block(matchAddScoperepresentation(a.id, ANY), function () {});
  addScoperepresentation(b.id);
});

bthread("Sociallinkrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSociallinkrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateSociallinkrepresentation(x.id);
  }
  if (pick([true,false])) { deleteSociallinkrepresentation(x.id); }
  verifySociallinkrepresentationExists(x.id);
  verifySociallinkrepresentationUpdated(x.id);
});

bthread("Sociallinkrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSociallinkrepresentation(a.id);
  block(matchAddSociallinkrepresentation(a.id, ANY), function () {});
  addSociallinkrepresentation(b.id);
});

bthread("Userconsentrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserconsentrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateUserconsentrepresentation(x.id);
  }
  if (pick([true,false])) { deleteUserconsentrepresentation(x.id); }
  verifyUserconsentrepresentationExists(x.id);
  verifyUserconsentrepresentationUpdated(x.id);
});

bthread("Userconsentrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserconsentrepresentation(a.id);
  block(matchAddUserconsentrepresentation(a.id, ANY), function () {});
  addUserconsentrepresentation(b.id);
});

bthread("Userfederationmapperrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserfederationmapperrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateUserfederationmapperrepresentation(x.id);
  }
  if (pick([true,false])) { deleteUserfederationmapperrepresentation(x.id); }
  verifyUserfederationmapperrepresentationExists(x.id);
  verifyUserfederationmapperrepresentationUpdated(x.id);
});

bthread("Userfederationmapperrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserfederationmapperrepresentation(a.id);
  block(matchAddUserfederationmapperrepresentation(a.id, ANY), function () {});
  addUserfederationmapperrepresentation(b.id);
});

bthread("Userfederationproviderrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserfederationproviderrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateUserfederationproviderrepresentation(x.id);
  }
  if (pick([true,false])) { deleteUserfederationproviderrepresentation(x.id); }
  verifyUserfederationproviderrepresentationExists(x.id);
  verifyUserfederationproviderrepresentationUpdated(x.id);
});

bthread("Userfederationproviderrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserfederationproviderrepresentation(a.id);
  block(matchAddUserfederationproviderrepresentation(a.id, ANY), function () {});
  addUserfederationproviderrepresentation(b.id);
});

bthread("Userrepresentation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserrepresentation(x.id);
  for (var i=0; i<steps; i++) {
    updateUserrepresentation(x.id);
  }
  if (pick([true,false])) { deleteUserrepresentation(x.id); }
  verifyUserrepresentationExists(x.id);
  verifyUserrepresentationUpdated(x.id);
});

bthread("Userrepresentation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserrepresentation(a.id);
  block(matchAddUserrepresentation(a.id, ANY), function () {});
  addUserrepresentation(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Access create verification", function () {
  const e = waitForAnyAccessAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccess(k), function () {
    verifyAccessExists(k);
  });
});

bthread("Access update verification", function () {
  const e = waitForAnyAccessUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccess(k), function () {
    verifyAccessUpdated(k);
  });
});

bthread("Access delete verification", function () {
  const e = waitForAnyAccessDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccess(k), function () {
    verifyAccessDoesNotExist(k);
  });
});

bthread("Accesstoken create verification", function () {
  const e = waitForAnyAccesstokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccesstoken(k), function () {
    verifyAccesstokenExists(k);
  });
});

bthread("Accesstoken update verification", function () {
  const e = waitForAnyAccesstokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccesstoken(k), function () {
    verifyAccesstokenUpdated(k);
  });
});

bthread("Accesstoken delete verification", function () {
  const e = waitForAnyAccesstokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccesstoken(k), function () {
    verifyAccesstokenDoesNotExist(k);
  });
});

bthread("Addressclaimset create verification", function () {
  const e = waitForAnyAddressclaimsetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddressclaimset(k), function () {
    verifyAddressclaimsetExists(k);
  });
});

bthread("Addressclaimset update verification", function () {
  const e = waitForAnyAddressclaimsetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddressclaimset(k), function () {
    verifyAddressclaimsetUpdated(k);
  });
});

bthread("Addressclaimset delete verification", function () {
  const e = waitForAnyAddressclaimsetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddressclaimset(k), function () {
    verifyAddressclaimsetDoesNotExist(k);
  });
});

bthread("Applicationrepresentation create verification", function () {
  const e = waitForAnyApplicationrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationrepresentation(k), function () {
    verifyApplicationrepresentationExists(k);
  });
});

bthread("Applicationrepresentation update verification", function () {
  const e = waitForAnyApplicationrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationrepresentation(k), function () {
    verifyApplicationrepresentationUpdated(k);
  });
});

bthread("Applicationrepresentation delete verification", function () {
  const e = waitForAnyApplicationrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplicationrepresentation(k), function () {
    verifyApplicationrepresentationDoesNotExist(k);
  });
});

bthread("Applicationrepresentationclaims create verification", function () {
  const e = waitForAnyApplicationrepresentationclaimsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationrepresentationclaims(k), function () {
    verifyApplicationrepresentationclaimsExists(k);
  });
});

bthread("Applicationrepresentationclaims update verification", function () {
  const e = waitForAnyApplicationrepresentationclaimsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationrepresentationclaims(k), function () {
    verifyApplicationrepresentationclaimsUpdated(k);
  });
});

bthread("Applicationrepresentationclaims delete verification", function () {
  const e = waitForAnyApplicationrepresentationclaimsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplicationrepresentationclaims(k), function () {
    verifyApplicationrepresentationclaimsDoesNotExist(k);
  });
});

bthread("Authenticationexecutionexportrepresentation create verification", function () {
  const e = waitForAnyAuthenticationexecutionexportrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationexecutionexportrepresentation(k), function () {
    verifyAuthenticationexecutionexportrepresentationExists(k);
  });
});

bthread("Authenticationexecutionexportrepresentation update verification", function () {
  const e = waitForAnyAuthenticationexecutionexportrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationexecutionexportrepresentation(k), function () {
    verifyAuthenticationexecutionexportrepresentationUpdated(k);
  });
});

bthread("Authenticationexecutionexportrepresentation delete verification", function () {
  const e = waitForAnyAuthenticationexecutionexportrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticationexecutionexportrepresentation(k), function () {
    verifyAuthenticationexecutionexportrepresentationDoesNotExist(k);
  });
});

bthread("Authenticationexecutioninforepresentation create verification", function () {
  const e = waitForAnyAuthenticationexecutioninforepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationexecutioninforepresentation(k), function () {
    verifyAuthenticationexecutioninforepresentationExists(k);
  });
});

bthread("Authenticationexecutioninforepresentation update verification", function () {
  const e = waitForAnyAuthenticationexecutioninforepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationexecutioninforepresentation(k), function () {
    verifyAuthenticationexecutioninforepresentationUpdated(k);
  });
});

bthread("Authenticationexecutioninforepresentation delete verification", function () {
  const e = waitForAnyAuthenticationexecutioninforepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticationexecutioninforepresentation(k), function () {
    verifyAuthenticationexecutioninforepresentationDoesNotExist(k);
  });
});

bthread("Authenticationexecutionrepresentation create verification", function () {
  const e = waitForAnyAuthenticationexecutionrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationexecutionrepresentation(k), function () {
    verifyAuthenticationexecutionrepresentationExists(k);
  });
});

bthread("Authenticationexecutionrepresentation update verification", function () {
  const e = waitForAnyAuthenticationexecutionrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationexecutionrepresentation(k), function () {
    verifyAuthenticationexecutionrepresentationUpdated(k);
  });
});

bthread("Authenticationexecutionrepresentation delete verification", function () {
  const e = waitForAnyAuthenticationexecutionrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticationexecutionrepresentation(k), function () {
    verifyAuthenticationexecutionrepresentationDoesNotExist(k);
  });
});

bthread("Authenticationflowrepresentation create verification", function () {
  const e = waitForAnyAuthenticationflowrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationflowrepresentation(k), function () {
    verifyAuthenticationflowrepresentationExists(k);
  });
});

bthread("Authenticationflowrepresentation update verification", function () {
  const e = waitForAnyAuthenticationflowrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticationflowrepresentation(k), function () {
    verifyAuthenticationflowrepresentationUpdated(k);
  });
});

bthread("Authenticationflowrepresentation delete verification", function () {
  const e = waitForAnyAuthenticationflowrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticationflowrepresentation(k), function () {
    verifyAuthenticationflowrepresentationDoesNotExist(k);
  });
});

bthread("Authenticatorconfiginforepresentation create verification", function () {
  const e = waitForAnyAuthenticatorconfiginforepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticatorconfiginforepresentation(k), function () {
    verifyAuthenticatorconfiginforepresentationExists(k);
  });
});

bthread("Authenticatorconfiginforepresentation update verification", function () {
  const e = waitForAnyAuthenticatorconfiginforepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticatorconfiginforepresentation(k), function () {
    verifyAuthenticatorconfiginforepresentationUpdated(k);
  });
});

bthread("Authenticatorconfiginforepresentation delete verification", function () {
  const e = waitForAnyAuthenticatorconfiginforepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticatorconfiginforepresentation(k), function () {
    verifyAuthenticatorconfiginforepresentationDoesNotExist(k);
  });
});

bthread("Authenticatorconfigrepresentation create verification", function () {
  const e = waitForAnyAuthenticatorconfigrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticatorconfigrepresentation(k), function () {
    verifyAuthenticatorconfigrepresentationExists(k);
  });
});

bthread("Authenticatorconfigrepresentation update verification", function () {
  const e = waitForAnyAuthenticatorconfigrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthenticatorconfigrepresentation(k), function () {
    verifyAuthenticatorconfigrepresentationUpdated(k);
  });
});

bthread("Authenticatorconfigrepresentation delete verification", function () {
  const e = waitForAnyAuthenticatorconfigrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthenticatorconfigrepresentation(k), function () {
    verifyAuthenticatorconfigrepresentationDoesNotExist(k);
  });
});

bthread("Authorization create verification", function () {
  const e = waitForAnyAuthorizationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorization(k), function () {
    verifyAuthorizationExists(k);
  });
});

bthread("Authorization update verification", function () {
  const e = waitForAnyAuthorizationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthorization(k), function () {
    verifyAuthorizationUpdated(k);
  });
});

bthread("Authorization delete verification", function () {
  const e = waitForAnyAuthorizationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthorization(k), function () {
    verifyAuthorizationDoesNotExist(k);
  });
});

bthread("Certconf create verification", function () {
  const e = waitForAnyCertconfAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCertconf(k), function () {
    verifyCertconfExists(k);
  });
});

bthread("Certconf update verification", function () {
  const e = waitForAnyCertconfUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCertconf(k), function () {
    verifyCertconfUpdated(k);
  });
});

bthread("Certconf delete verification", function () {
  const e = waitForAnyCertconfDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCertconf(k), function () {
    verifyCertconfDoesNotExist(k);
  });
});

bthread("Certificaterepresentation create verification", function () {
  const e = waitForAnyCertificaterepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCertificaterepresentation(k), function () {
    verifyCertificaterepresentationExists(k);
  });
});

bthread("Certificaterepresentation update verification", function () {
  const e = waitForAnyCertificaterepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCertificaterepresentation(k), function () {
    verifyCertificaterepresentationUpdated(k);
  });
});

bthread("Certificaterepresentation delete verification", function () {
  const e = waitForAnyCertificaterepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCertificaterepresentation(k), function () {
    verifyCertificaterepresentationDoesNotExist(k);
  });
});

bthread("Claimrepresentation create verification", function () {
  const e = waitForAnyClaimrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClaimrepresentation(k), function () {
    verifyClaimrepresentationExists(k);
  });
});

bthread("Claimrepresentation update verification", function () {
  const e = waitForAnyClaimrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClaimrepresentation(k), function () {
    verifyClaimrepresentationUpdated(k);
  });
});

bthread("Claimrepresentation delete verification", function () {
  const e = waitForAnyClaimrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClaimrepresentation(k), function () {
    verifyClaimrepresentationDoesNotExist(k);
  });
});

bthread("Clientinitialaccesscreatepresentation create verification", function () {
  const e = waitForAnyClientinitialaccesscreatepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientinitialaccesscreatepresentation(k), function () {
    verifyClientinitialaccesscreatepresentationExists(k);
  });
});

bthread("Clientinitialaccesscreatepresentation update verification", function () {
  const e = waitForAnyClientinitialaccesscreatepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientinitialaccesscreatepresentation(k), function () {
    verifyClientinitialaccesscreatepresentationUpdated(k);
  });
});

bthread("Clientinitialaccesscreatepresentation delete verification", function () {
  const e = waitForAnyClientinitialaccesscreatepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientinitialaccesscreatepresentation(k), function () {
    verifyClientinitialaccesscreatepresentationDoesNotExist(k);
  });
});

bthread("Clientinitialaccesspresentation create verification", function () {
  const e = waitForAnyClientinitialaccesspresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientinitialaccesspresentation(k), function () {
    verifyClientinitialaccesspresentationExists(k);
  });
});

bthread("Clientinitialaccesspresentation update verification", function () {
  const e = waitForAnyClientinitialaccesspresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientinitialaccesspresentation(k), function () {
    verifyClientinitialaccesspresentationUpdated(k);
  });
});

bthread("Clientinitialaccesspresentation delete verification", function () {
  const e = waitForAnyClientinitialaccesspresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientinitialaccesspresentation(k), function () {
    verifyClientinitialaccesspresentationDoesNotExist(k);
  });
});

bthread("Clientmappingsrepresentation create verification", function () {
  const e = waitForAnyClientmappingsrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientmappingsrepresentation(k), function () {
    verifyClientmappingsrepresentationExists(k);
  });
});

bthread("Clientmappingsrepresentation update verification", function () {
  const e = waitForAnyClientmappingsrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientmappingsrepresentation(k), function () {
    verifyClientmappingsrepresentationUpdated(k);
  });
});

bthread("Clientmappingsrepresentation delete verification", function () {
  const e = waitForAnyClientmappingsrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientmappingsrepresentation(k), function () {
    verifyClientmappingsrepresentationDoesNotExist(k);
  });
});

bthread("Clientpoliciesrepresentation create verification", function () {
  const e = waitForAnyClientpoliciesrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpoliciesrepresentation(k), function () {
    verifyClientpoliciesrepresentationExists(k);
  });
});

bthread("Clientpoliciesrepresentation update verification", function () {
  const e = waitForAnyClientpoliciesrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpoliciesrepresentation(k), function () {
    verifyClientpoliciesrepresentationUpdated(k);
  });
});

bthread("Clientpoliciesrepresentation delete verification", function () {
  const e = waitForAnyClientpoliciesrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientpoliciesrepresentation(k), function () {
    verifyClientpoliciesrepresentationDoesNotExist(k);
  });
});

bthread("Clientpolicyconditionrepresentation create verification", function () {
  const e = waitForAnyClientpolicyconditionrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicyconditionrepresentation(k), function () {
    verifyClientpolicyconditionrepresentationExists(k);
  });
});

bthread("Clientpolicyconditionrepresentation update verification", function () {
  const e = waitForAnyClientpolicyconditionrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicyconditionrepresentation(k), function () {
    verifyClientpolicyconditionrepresentationUpdated(k);
  });
});

bthread("Clientpolicyconditionrepresentation delete verification", function () {
  const e = waitForAnyClientpolicyconditionrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientpolicyconditionrepresentation(k), function () {
    verifyClientpolicyconditionrepresentationDoesNotExist(k);
  });
});

bthread("Clientpolicyexecutorrepresentation create verification", function () {
  const e = waitForAnyClientpolicyexecutorrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicyexecutorrepresentation(k), function () {
    verifyClientpolicyexecutorrepresentationExists(k);
  });
});

bthread("Clientpolicyexecutorrepresentation update verification", function () {
  const e = waitForAnyClientpolicyexecutorrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicyexecutorrepresentation(k), function () {
    verifyClientpolicyexecutorrepresentationUpdated(k);
  });
});

bthread("Clientpolicyexecutorrepresentation delete verification", function () {
  const e = waitForAnyClientpolicyexecutorrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientpolicyexecutorrepresentation(k), function () {
    verifyClientpolicyexecutorrepresentationDoesNotExist(k);
  });
});

bthread("Clientpolicyrepresentation create verification", function () {
  const e = waitForAnyClientpolicyrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicyrepresentation(k), function () {
    verifyClientpolicyrepresentationExists(k);
  });
});

bthread("Clientpolicyrepresentation update verification", function () {
  const e = waitForAnyClientpolicyrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientpolicyrepresentation(k), function () {
    verifyClientpolicyrepresentationUpdated(k);
  });
});

bthread("Clientpolicyrepresentation delete verification", function () {
  const e = waitForAnyClientpolicyrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientpolicyrepresentation(k), function () {
    verifyClientpolicyrepresentationDoesNotExist(k);
  });
});

bthread("Clientprofilerepresentation create verification", function () {
  const e = waitForAnyClientprofilerepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientprofilerepresentation(k), function () {
    verifyClientprofilerepresentationExists(k);
  });
});

bthread("Clientprofilerepresentation update verification", function () {
  const e = waitForAnyClientprofilerepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientprofilerepresentation(k), function () {
    verifyClientprofilerepresentationUpdated(k);
  });
});

bthread("Clientprofilerepresentation delete verification", function () {
  const e = waitForAnyClientprofilerepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientprofilerepresentation(k), function () {
    verifyClientprofilerepresentationDoesNotExist(k);
  });
});

bthread("Clientprofilesrepresentation create verification", function () {
  const e = waitForAnyClientprofilesrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientprofilesrepresentation(k), function () {
    verifyClientprofilesrepresentationExists(k);
  });
});

bthread("Clientprofilesrepresentation update verification", function () {
  const e = waitForAnyClientprofilesrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientprofilesrepresentation(k), function () {
    verifyClientprofilesrepresentationUpdated(k);
  });
});

bthread("Clientprofilesrepresentation delete verification", function () {
  const e = waitForAnyClientprofilesrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientprofilesrepresentation(k), function () {
    verifyClientprofilesrepresentationDoesNotExist(k);
  });
});

bthread("Clientrepresentation create verification", function () {
  const e = waitForAnyClientrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientrepresentation(k), function () {
    verifyClientrepresentationExists(k);
  });
});

bthread("Clientrepresentation update verification", function () {
  const e = waitForAnyClientrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientrepresentation(k), function () {
    verifyClientrepresentationUpdated(k);
  });
});

bthread("Clientrepresentation delete verification", function () {
  const e = waitForAnyClientrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientrepresentation(k), function () {
    verifyClientrepresentationDoesNotExist(k);
  });
});

bthread("Clientscoperepresentation create verification", function () {
  const e = waitForAnyClientscoperepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientscoperepresentation(k), function () {
    verifyClientscoperepresentationExists(k);
  });
});

bthread("Clientscoperepresentation update verification", function () {
  const e = waitForAnyClientscoperepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClientscoperepresentation(k), function () {
    verifyClientscoperepresentationUpdated(k);
  });
});

bthread("Clientscoperepresentation delete verification", function () {
  const e = waitForAnyClientscoperepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClientscoperepresentation(k), function () {
    verifyClientscoperepresentationDoesNotExist(k);
  });
});

bthread("Clienttemplaterepresentation create verification", function () {
  const e = waitForAnyClienttemplaterepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClienttemplaterepresentation(k), function () {
    verifyClienttemplaterepresentationExists(k);
  });
});

bthread("Clienttemplaterepresentation update verification", function () {
  const e = waitForAnyClienttemplaterepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClienttemplaterepresentation(k), function () {
    verifyClienttemplaterepresentationUpdated(k);
  });
});

bthread("Clienttemplaterepresentation delete verification", function () {
  const e = waitForAnyClienttemplaterepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClienttemplaterepresentation(k), function () {
    verifyClienttemplaterepresentationDoesNotExist(k);
  });
});

bthread("Componentexportrepresentation create verification", function () {
  const e = waitForAnyComponentexportrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComponentexportrepresentation(k), function () {
    verifyComponentexportrepresentationExists(k);
  });
});

bthread("Componentexportrepresentation update verification", function () {
  const e = waitForAnyComponentexportrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComponentexportrepresentation(k), function () {
    verifyComponentexportrepresentationUpdated(k);
  });
});

bthread("Componentexportrepresentation delete verification", function () {
  const e = waitForAnyComponentexportrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComponentexportrepresentation(k), function () {
    verifyComponentexportrepresentationDoesNotExist(k);
  });
});

bthread("Componentrepresentation create verification", function () {
  const e = waitForAnyComponentrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComponentrepresentation(k), function () {
    verifyComponentrepresentationExists(k);
  });
});

bthread("Componentrepresentation update verification", function () {
  const e = waitForAnyComponentrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComponentrepresentation(k), function () {
    verifyComponentrepresentationUpdated(k);
  });
});

bthread("Componentrepresentation delete verification", function () {
  const e = waitForAnyComponentrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComponentrepresentation(k), function () {
    verifyComponentrepresentationDoesNotExist(k);
  });
});

bthread("Composites create verification", function () {
  const e = waitForAnyCompositesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComposites(k), function () {
    verifyCompositesExists(k);
  });
});

bthread("Composites update verification", function () {
  const e = waitForAnyCompositesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComposites(k), function () {
    verifyCompositesUpdated(k);
  });
});

bthread("Composites delete verification", function () {
  const e = waitForAnyCompositesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComposites(k), function () {
    verifyCompositesDoesNotExist(k);
  });
});

bthread("Configpropertyrepresentation create verification", function () {
  const e = waitForAnyConfigpropertyrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfigpropertyrepresentation(k), function () {
    verifyConfigpropertyrepresentationExists(k);
  });
});

bthread("Configpropertyrepresentation update verification", function () {
  const e = waitForAnyConfigpropertyrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfigpropertyrepresentation(k), function () {
    verifyConfigpropertyrepresentationUpdated(k);
  });
});

bthread("Configpropertyrepresentation delete verification", function () {
  const e = waitForAnyConfigpropertyrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfigpropertyrepresentation(k), function () {
    verifyConfigpropertyrepresentationDoesNotExist(k);
  });
});

bthread("Credentialrepresentation create verification", function () {
  const e = waitForAnyCredentialrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentialrepresentation(k), function () {
    verifyCredentialrepresentationExists(k);
  });
});

bthread("Credentialrepresentation update verification", function () {
  const e = waitForAnyCredentialrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredentialrepresentation(k), function () {
    verifyCredentialrepresentationUpdated(k);
  });
});

bthread("Credentialrepresentation delete verification", function () {
  const e = waitForAnyCredentialrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredentialrepresentation(k), function () {
    verifyCredentialrepresentationDoesNotExist(k);
  });
});

bthread("Decisionstrategy create verification", function () {
  const e = waitForAnyDecisionstrategyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDecisionstrategy(k), function () {
    verifyDecisionstrategyExists(k);
  });
});

bthread("Decisionstrategy update verification", function () {
  const e = waitForAnyDecisionstrategyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDecisionstrategy(k), function () {
    verifyDecisionstrategyUpdated(k);
  });
});

bthread("Decisionstrategy delete verification", function () {
  const e = waitForAnyDecisionstrategyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDecisionstrategy(k), function () {
    verifyDecisionstrategyDoesNotExist(k);
  });
});

bthread("Enforcementmode create verification", function () {
  const e = waitForAnyEnforcementmodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnforcementmode(k), function () {
    verifyEnforcementmodeExists(k);
  });
});

bthread("Enforcementmode update verification", function () {
  const e = waitForAnyEnforcementmodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnforcementmode(k), function () {
    verifyEnforcementmodeUpdated(k);
  });
});

bthread("Enforcementmode delete verification", function () {
  const e = waitForAnyEnforcementmodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEnforcementmode(k), function () {
    verifyEnforcementmodeDoesNotExist(k);
  });
});

bthread("Federatedidentityrepresentation create verification", function () {
  const e = waitForAnyFederatedidentityrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFederatedidentityrepresentation(k), function () {
    verifyFederatedidentityrepresentationExists(k);
  });
});

bthread("Federatedidentityrepresentation update verification", function () {
  const e = waitForAnyFederatedidentityrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFederatedidentityrepresentation(k), function () {
    verifyFederatedidentityrepresentationUpdated(k);
  });
});

bthread("Federatedidentityrepresentation delete verification", function () {
  const e = waitForAnyFederatedidentityrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFederatedidentityrepresentation(k), function () {
    verifyFederatedidentityrepresentationDoesNotExist(k);
  });
});

bthread("Globalrequestresult create verification", function () {
  const e = waitForAnyGlobalrequestresultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGlobalrequestresult(k), function () {
    verifyGlobalrequestresultExists(k);
  });
});

bthread("Globalrequestresult update verification", function () {
  const e = waitForAnyGlobalrequestresultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGlobalrequestresult(k), function () {
    verifyGlobalrequestresultUpdated(k);
  });
});

bthread("Globalrequestresult delete verification", function () {
  const e = waitForAnyGlobalrequestresultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGlobalrequestresult(k), function () {
    verifyGlobalrequestresultDoesNotExist(k);
  });
});

bthread("Grouprepresentation create verification", function () {
  const e = waitForAnyGrouprepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrouprepresentation(k), function () {
    verifyGrouprepresentationExists(k);
  });
});

bthread("Grouprepresentation update verification", function () {
  const e = waitForAnyGrouprepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrouprepresentation(k), function () {
    verifyGrouprepresentationUpdated(k);
  });
});

bthread("Grouprepresentation delete verification", function () {
  const e = waitForAnyGrouprepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGrouprepresentation(k), function () {
    verifyGrouprepresentationDoesNotExist(k);
  });
});

bthread("Identityprovidermapperrepresentation create verification", function () {
  const e = waitForAnyIdentityprovidermapperrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityprovidermapperrepresentation(k), function () {
    verifyIdentityprovidermapperrepresentationExists(k);
  });
});

bthread("Identityprovidermapperrepresentation update verification", function () {
  const e = waitForAnyIdentityprovidermapperrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityprovidermapperrepresentation(k), function () {
    verifyIdentityprovidermapperrepresentationUpdated(k);
  });
});

bthread("Identityprovidermapperrepresentation delete verification", function () {
  const e = waitForAnyIdentityprovidermapperrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIdentityprovidermapperrepresentation(k), function () {
    verifyIdentityprovidermapperrepresentationDoesNotExist(k);
  });
});

bthread("Identityprovidermappertyperepresentation create verification", function () {
  const e = waitForAnyIdentityprovidermappertyperepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityprovidermappertyperepresentation(k), function () {
    verifyIdentityprovidermappertyperepresentationExists(k);
  });
});

bthread("Identityprovidermappertyperepresentation update verification", function () {
  const e = waitForAnyIdentityprovidermappertyperepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityprovidermappertyperepresentation(k), function () {
    verifyIdentityprovidermappertyperepresentationUpdated(k);
  });
});

bthread("Identityprovidermappertyperepresentation delete verification", function () {
  const e = waitForAnyIdentityprovidermappertyperepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIdentityprovidermappertyperepresentation(k), function () {
    verifyIdentityprovidermappertyperepresentationDoesNotExist(k);
  });
});

bthread("Identityproviderrepresentation create verification", function () {
  const e = waitForAnyIdentityproviderrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityproviderrepresentation(k), function () {
    verifyIdentityproviderrepresentationExists(k);
  });
});

bthread("Identityproviderrepresentation update verification", function () {
  const e = waitForAnyIdentityproviderrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdentityproviderrepresentation(k), function () {
    verifyIdentityproviderrepresentationUpdated(k);
  });
});

bthread("Identityproviderrepresentation delete verification", function () {
  const e = waitForAnyIdentityproviderrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIdentityproviderrepresentation(k), function () {
    verifyIdentityproviderrepresentationDoesNotExist(k);
  });
});

bthread("Idtoken create verification", function () {
  const e = waitForAnyIdtokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdtoken(k), function () {
    verifyIdtokenExists(k);
  });
});

bthread("Idtoken update verification", function () {
  const e = waitForAnyIdtokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIdtoken(k), function () {
    verifyIdtokenUpdated(k);
  });
});

bthread("Idtoken delete verification", function () {
  const e = waitForAnyIdtokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIdtoken(k), function () {
    verifyIdtokenDoesNotExist(k);
  });
});

bthread("Installationadapterconfig create verification", function () {
  const e = waitForAnyInstallationadapterconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallationadapterconfig(k), function () {
    verifyInstallationadapterconfigExists(k);
  });
});

bthread("Installationadapterconfig update verification", function () {
  const e = waitForAnyInstallationadapterconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallationadapterconfig(k), function () {
    verifyInstallationadapterconfigUpdated(k);
  });
});

bthread("Installationadapterconfig delete verification", function () {
  const e = waitForAnyInstallationadapterconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInstallationadapterconfig(k), function () {
    verifyInstallationadapterconfigDoesNotExist(k);
  });
});

bthread("Keymetadatarepresentation create verification", function () {
  const e = waitForAnyKeymetadatarepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeymetadatarepresentation(k), function () {
    verifyKeymetadatarepresentationExists(k);
  });
});

bthread("Keymetadatarepresentation update verification", function () {
  const e = waitForAnyKeymetadatarepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeymetadatarepresentation(k), function () {
    verifyKeymetadatarepresentationUpdated(k);
  });
});

bthread("Keymetadatarepresentation delete verification", function () {
  const e = waitForAnyKeymetadatarepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddKeymetadatarepresentation(k), function () {
    verifyKeymetadatarepresentationDoesNotExist(k);
  });
});

bthread("Keysmetadatarepresentation create verification", function () {
  const e = waitForAnyKeysmetadatarepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeysmetadatarepresentation(k), function () {
    verifyKeysmetadatarepresentationExists(k);
  });
});

bthread("Keysmetadatarepresentation update verification", function () {
  const e = waitForAnyKeysmetadatarepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeysmetadatarepresentation(k), function () {
    verifyKeysmetadatarepresentationUpdated(k);
  });
});

bthread("Keysmetadatarepresentation delete verification", function () {
  const e = waitForAnyKeysmetadatarepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddKeysmetadatarepresentation(k), function () {
    verifyKeysmetadatarepresentationDoesNotExist(k);
  });
});

bthread("Keystoreconfig create verification", function () {
  const e = waitForAnyKeystoreconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeystoreconfig(k), function () {
    verifyKeystoreconfigExists(k);
  });
});

bthread("Keystoreconfig update verification", function () {
  const e = waitForAnyKeystoreconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeystoreconfig(k), function () {
    verifyKeystoreconfigUpdated(k);
  });
});

bthread("Keystoreconfig delete verification", function () {
  const e = waitForAnyKeystoreconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddKeystoreconfig(k), function () {
    verifyKeystoreconfigDoesNotExist(k);
  });
});

bthread("Keyuse create verification", function () {
  const e = waitForAnyKeyuseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeyuse(k), function () {
    verifyKeyuseExists(k);
  });
});

bthread("Keyuse update verification", function () {
  const e = waitForAnyKeyuseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKeyuse(k), function () {
    verifyKeyuseUpdated(k);
  });
});

bthread("Keyuse delete verification", function () {
  const e = waitForAnyKeyuseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddKeyuse(k), function () {
    verifyKeyuseDoesNotExist(k);
  });
});

bthread("Logic create verification", function () {
  const e = waitForAnyLogicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogic(k), function () {
    verifyLogicExists(k);
  });
});

bthread("Logic update verification", function () {
  const e = waitForAnyLogicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogic(k), function () {
    verifyLogicUpdated(k);
  });
});

bthread("Logic delete verification", function () {
  const e = waitForAnyLogicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLogic(k), function () {
    verifyLogicDoesNotExist(k);
  });
});

bthread("Managementpermissionreference create verification", function () {
  const e = waitForAnyManagementpermissionreferenceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteManagementpermissionreference(k), function () {
    verifyManagementpermissionreferenceExists(k);
  });
});

bthread("Managementpermissionreference update verification", function () {
  const e = waitForAnyManagementpermissionreferenceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteManagementpermissionreference(k), function () {
    verifyManagementpermissionreferenceUpdated(k);
  });
});

bthread("Managementpermissionreference delete verification", function () {
  const e = waitForAnyManagementpermissionreferenceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddManagementpermissionreference(k), function () {
    verifyManagementpermissionreferenceDoesNotExist(k);
  });
});

bthread("Mappingsrepresentation create verification", function () {
  const e = waitForAnyMappingsrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMappingsrepresentation(k), function () {
    verifyMappingsrepresentationExists(k);
  });
});

bthread("Mappingsrepresentation update verification", function () {
  const e = waitForAnyMappingsrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMappingsrepresentation(k), function () {
    verifyMappingsrepresentationUpdated(k);
  });
});

bthread("Mappingsrepresentation delete verification", function () {
  const e = waitForAnyMappingsrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMappingsrepresentation(k), function () {
    verifyMappingsrepresentationDoesNotExist(k);
  });
});

bthread("Methodconfig create verification", function () {
  const e = waitForAnyMethodconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMethodconfig(k), function () {
    verifyMethodconfigExists(k);
  });
});

bthread("Methodconfig update verification", function () {
  const e = waitForAnyMethodconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMethodconfig(k), function () {
    verifyMethodconfigUpdated(k);
  });
});

bthread("Methodconfig delete verification", function () {
  const e = waitForAnyMethodconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMethodconfig(k), function () {
    verifyMethodconfigDoesNotExist(k);
  });
});

bthread("Oauthclientrepresentation create verification", function () {
  const e = waitForAnyOauthclientrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOauthclientrepresentation(k), function () {
    verifyOauthclientrepresentationExists(k);
  });
});

bthread("Oauthclientrepresentation update verification", function () {
  const e = waitForAnyOauthclientrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOauthclientrepresentation(k), function () {
    verifyOauthclientrepresentationUpdated(k);
  });
});

bthread("Oauthclientrepresentation delete verification", function () {
  const e = waitForAnyOauthclientrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOauthclientrepresentation(k), function () {
    verifyOauthclientrepresentationDoesNotExist(k);
  });
});

bthread("Pathcacheconfig create verification", function () {
  const e = waitForAnyPathcacheconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePathcacheconfig(k), function () {
    verifyPathcacheconfigExists(k);
  });
});

bthread("Pathcacheconfig update verification", function () {
  const e = waitForAnyPathcacheconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePathcacheconfig(k), function () {
    verifyPathcacheconfigUpdated(k);
  });
});

bthread("Pathcacheconfig delete verification", function () {
  const e = waitForAnyPathcacheconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPathcacheconfig(k), function () {
    verifyPathcacheconfigDoesNotExist(k);
  });
});

bthread("Pathconfig create verification", function () {
  const e = waitForAnyPathconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePathconfig(k), function () {
    verifyPathconfigExists(k);
  });
});

bthread("Pathconfig update verification", function () {
  const e = waitForAnyPathconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePathconfig(k), function () {
    verifyPathconfigUpdated(k);
  });
});

bthread("Pathconfig delete verification", function () {
  const e = waitForAnyPathconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPathconfig(k), function () {
    verifyPathconfigDoesNotExist(k);
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

bthread("Policyenforcementmode create verification", function () {
  const e = waitForAnyPolicyenforcementmodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicyenforcementmode(k), function () {
    verifyPolicyenforcementmodeExists(k);
  });
});

bthread("Policyenforcementmode update verification", function () {
  const e = waitForAnyPolicyenforcementmodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicyenforcementmode(k), function () {
    verifyPolicyenforcementmodeUpdated(k);
  });
});

bthread("Policyenforcementmode delete verification", function () {
  const e = waitForAnyPolicyenforcementmodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPolicyenforcementmode(k), function () {
    verifyPolicyenforcementmodeDoesNotExist(k);
  });
});

bthread("Policyenforcerconfig create verification", function () {
  const e = waitForAnyPolicyenforcerconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicyenforcerconfig(k), function () {
    verifyPolicyenforcerconfigExists(k);
  });
});

bthread("Policyenforcerconfig update verification", function () {
  const e = waitForAnyPolicyenforcerconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicyenforcerconfig(k), function () {
    verifyPolicyenforcerconfigUpdated(k);
  });
});

bthread("Policyenforcerconfig delete verification", function () {
  const e = waitForAnyPolicyenforcerconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPolicyenforcerconfig(k), function () {
    verifyPolicyenforcerconfigDoesNotExist(k);
  });
});

bthread("Policyrepresentation create verification", function () {
  const e = waitForAnyPolicyrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicyrepresentation(k), function () {
    verifyPolicyrepresentationExists(k);
  });
});

bthread("Policyrepresentation update verification", function () {
  const e = waitForAnyPolicyrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePolicyrepresentation(k), function () {
    verifyPolicyrepresentationUpdated(k);
  });
});

bthread("Policyrepresentation delete verification", function () {
  const e = waitForAnyPolicyrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPolicyrepresentation(k), function () {
    verifyPolicyrepresentationDoesNotExist(k);
  });
});

bthread("Protocolmapperrepresentation create verification", function () {
  const e = waitForAnyProtocolmapperrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtocolmapperrepresentation(k), function () {
    verifyProtocolmapperrepresentationExists(k);
  });
});

bthread("Protocolmapperrepresentation update verification", function () {
  const e = waitForAnyProtocolmapperrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtocolmapperrepresentation(k), function () {
    verifyProtocolmapperrepresentationUpdated(k);
  });
});

bthread("Protocolmapperrepresentation delete verification", function () {
  const e = waitForAnyProtocolmapperrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProtocolmapperrepresentation(k), function () {
    verifyProtocolmapperrepresentationDoesNotExist(k);
  });
});

bthread("Publishedrealmrepresentation create verification", function () {
  const e = waitForAnyPublishedrealmrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublishedrealmrepresentation(k), function () {
    verifyPublishedrealmrepresentationExists(k);
  });
});

bthread("Publishedrealmrepresentation update verification", function () {
  const e = waitForAnyPublishedrealmrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublishedrealmrepresentation(k), function () {
    verifyPublishedrealmrepresentationUpdated(k);
  });
});

bthread("Publishedrealmrepresentation delete verification", function () {
  const e = waitForAnyPublishedrealmrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublishedrealmrepresentation(k), function () {
    verifyPublishedrealmrepresentationDoesNotExist(k);
  });
});

bthread("Realmeventsconfigrepresentation create verification", function () {
  const e = waitForAnyRealmeventsconfigrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmeventsconfigrepresentation(k), function () {
    verifyRealmeventsconfigrepresentationExists(k);
  });
});

bthread("Realmeventsconfigrepresentation update verification", function () {
  const e = waitForAnyRealmeventsconfigrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmeventsconfigrepresentation(k), function () {
    verifyRealmeventsconfigrepresentationUpdated(k);
  });
});

bthread("Realmeventsconfigrepresentation delete verification", function () {
  const e = waitForAnyRealmeventsconfigrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmeventsconfigrepresentation(k), function () {
    verifyRealmeventsconfigrepresentationDoesNotExist(k);
  });
});

bthread("Realmrepresentation create verification", function () {
  const e = waitForAnyRealmrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmrepresentation(k), function () {
    verifyRealmrepresentationExists(k);
  });
});

bthread("Realmrepresentation update verification", function () {
  const e = waitForAnyRealmrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmrepresentation(k), function () {
    verifyRealmrepresentationUpdated(k);
  });
});

bthread("Realmrepresentation delete verification", function () {
  const e = waitForAnyRealmrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmrepresentation(k), function () {
    verifyRealmrepresentationDoesNotExist(k);
  });
});

bthread("Requiredactionproviderrepresentation create verification", function () {
  const e = waitForAnyRequiredactionproviderrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredactionproviderrepresentation(k), function () {
    verifyRequiredactionproviderrepresentationExists(k);
  });
});

bthread("Requiredactionproviderrepresentation update verification", function () {
  const e = waitForAnyRequiredactionproviderrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredactionproviderrepresentation(k), function () {
    verifyRequiredactionproviderrepresentationUpdated(k);
  });
});

bthread("Requiredactionproviderrepresentation delete verification", function () {
  const e = waitForAnyRequiredactionproviderrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequiredactionproviderrepresentation(k), function () {
    verifyRequiredactionproviderrepresentationDoesNotExist(k);
  });
});

bthread("Resourceownerrepresentation create verification", function () {
  const e = waitForAnyResourceownerrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourceownerrepresentation(k), function () {
    verifyResourceownerrepresentationExists(k);
  });
});

bthread("Resourceownerrepresentation update verification", function () {
  const e = waitForAnyResourceownerrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourceownerrepresentation(k), function () {
    verifyResourceownerrepresentationUpdated(k);
  });
});

bthread("Resourceownerrepresentation delete verification", function () {
  const e = waitForAnyResourceownerrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResourceownerrepresentation(k), function () {
    verifyResourceownerrepresentationDoesNotExist(k);
  });
});

bthread("Resourcerepresentation create verification", function () {
  const e = waitForAnyResourcerepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourcerepresentation(k), function () {
    verifyResourcerepresentationExists(k);
  });
});

bthread("Resourcerepresentation update verification", function () {
  const e = waitForAnyResourcerepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourcerepresentation(k), function () {
    verifyResourcerepresentationUpdated(k);
  });
});

bthread("Resourcerepresentation delete verification", function () {
  const e = waitForAnyResourcerepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResourcerepresentation(k), function () {
    verifyResourcerepresentationDoesNotExist(k);
  });
});

bthread("Resourcerepresentationowner create verification", function () {
  const e = waitForAnyResourcerepresentationownerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourcerepresentationowner(k), function () {
    verifyResourcerepresentationownerExists(k);
  });
});

bthread("Resourcerepresentationowner update verification", function () {
  const e = waitForAnyResourcerepresentationownerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourcerepresentationowner(k), function () {
    verifyResourcerepresentationownerUpdated(k);
  });
});

bthread("Resourcerepresentationowner delete verification", function () {
  const e = waitForAnyResourcerepresentationownerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResourcerepresentationowner(k), function () {
    verifyResourcerepresentationownerDoesNotExist(k);
  });
});

bthread("Resourceserverrepresentation create verification", function () {
  const e = waitForAnyResourceserverrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourceserverrepresentation(k), function () {
    verifyResourceserverrepresentationExists(k);
  });
});

bthread("Resourceserverrepresentation update verification", function () {
  const e = waitForAnyResourceserverrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResourceserverrepresentation(k), function () {
    verifyResourceserverrepresentationUpdated(k);
  });
});

bthread("Resourceserverrepresentation delete verification", function () {
  const e = waitForAnyResourceserverrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResourceserverrepresentation(k), function () {
    verifyResourceserverrepresentationDoesNotExist(k);
  });
});

bthread("Rolerepresentation create verification", function () {
  const e = waitForAnyRolerepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolerepresentation(k), function () {
    verifyRolerepresentationExists(k);
  });
});

bthread("Rolerepresentation update verification", function () {
  const e = waitForAnyRolerepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolerepresentation(k), function () {
    verifyRolerepresentationUpdated(k);
  });
});

bthread("Rolerepresentation delete verification", function () {
  const e = waitForAnyRolerepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRolerepresentation(k), function () {
    verifyRolerepresentationDoesNotExist(k);
  });
});

bthread("Rolesrepresentation create verification", function () {
  const e = waitForAnyRolesrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolesrepresentation(k), function () {
    verifyRolesrepresentationExists(k);
  });
});

bthread("Rolesrepresentation update verification", function () {
  const e = waitForAnyRolesrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRolesrepresentation(k), function () {
    verifyRolesrepresentationUpdated(k);
  });
});

bthread("Rolesrepresentation delete verification", function () {
  const e = waitForAnyRolesrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRolesrepresentation(k), function () {
    verifyRolesrepresentationDoesNotExist(k);
  });
});

bthread("Scopeenforcementmode create verification", function () {
  const e = waitForAnyScopeenforcementmodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScopeenforcementmode(k), function () {
    verifyScopeenforcementmodeExists(k);
  });
});

bthread("Scopeenforcementmode update verification", function () {
  const e = waitForAnyScopeenforcementmodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScopeenforcementmode(k), function () {
    verifyScopeenforcementmodeUpdated(k);
  });
});

bthread("Scopeenforcementmode delete verification", function () {
  const e = waitForAnyScopeenforcementmodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScopeenforcementmode(k), function () {
    verifyScopeenforcementmodeDoesNotExist(k);
  });
});

bthread("Scopemappingrepresentation create verification", function () {
  const e = waitForAnyScopemappingrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScopemappingrepresentation(k), function () {
    verifyScopemappingrepresentationExists(k);
  });
});

bthread("Scopemappingrepresentation update verification", function () {
  const e = waitForAnyScopemappingrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScopemappingrepresentation(k), function () {
    verifyScopemappingrepresentationUpdated(k);
  });
});

bthread("Scopemappingrepresentation delete verification", function () {
  const e = waitForAnyScopemappingrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScopemappingrepresentation(k), function () {
    verifyScopemappingrepresentationDoesNotExist(k);
  });
});

bthread("Scoperepresentation create verification", function () {
  const e = waitForAnyScoperepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScoperepresentation(k), function () {
    verifyScoperepresentationExists(k);
  });
});

bthread("Scoperepresentation update verification", function () {
  const e = waitForAnyScoperepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScoperepresentation(k), function () {
    verifyScoperepresentationUpdated(k);
  });
});

bthread("Scoperepresentation delete verification", function () {
  const e = waitForAnyScoperepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScoperepresentation(k), function () {
    verifyScoperepresentationDoesNotExist(k);
  });
});

bthread("Sociallinkrepresentation create verification", function () {
  const e = waitForAnySociallinkrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSociallinkrepresentation(k), function () {
    verifySociallinkrepresentationExists(k);
  });
});

bthread("Sociallinkrepresentation update verification", function () {
  const e = waitForAnySociallinkrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSociallinkrepresentation(k), function () {
    verifySociallinkrepresentationUpdated(k);
  });
});

bthread("Sociallinkrepresentation delete verification", function () {
  const e = waitForAnySociallinkrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSociallinkrepresentation(k), function () {
    verifySociallinkrepresentationDoesNotExist(k);
  });
});

bthread("Userconsentrepresentation create verification", function () {
  const e = waitForAnyUserconsentrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserconsentrepresentation(k), function () {
    verifyUserconsentrepresentationExists(k);
  });
});

bthread("Userconsentrepresentation update verification", function () {
  const e = waitForAnyUserconsentrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserconsentrepresentation(k), function () {
    verifyUserconsentrepresentationUpdated(k);
  });
});

bthread("Userconsentrepresentation delete verification", function () {
  const e = waitForAnyUserconsentrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserconsentrepresentation(k), function () {
    verifyUserconsentrepresentationDoesNotExist(k);
  });
});

bthread("Userfederationmapperrepresentation create verification", function () {
  const e = waitForAnyUserfederationmapperrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserfederationmapperrepresentation(k), function () {
    verifyUserfederationmapperrepresentationExists(k);
  });
});

bthread("Userfederationmapperrepresentation update verification", function () {
  const e = waitForAnyUserfederationmapperrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserfederationmapperrepresentation(k), function () {
    verifyUserfederationmapperrepresentationUpdated(k);
  });
});

bthread("Userfederationmapperrepresentation delete verification", function () {
  const e = waitForAnyUserfederationmapperrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserfederationmapperrepresentation(k), function () {
    verifyUserfederationmapperrepresentationDoesNotExist(k);
  });
});

bthread("Userfederationproviderrepresentation create verification", function () {
  const e = waitForAnyUserfederationproviderrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserfederationproviderrepresentation(k), function () {
    verifyUserfederationproviderrepresentationExists(k);
  });
});

bthread("Userfederationproviderrepresentation update verification", function () {
  const e = waitForAnyUserfederationproviderrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserfederationproviderrepresentation(k), function () {
    verifyUserfederationproviderrepresentationUpdated(k);
  });
});

bthread("Userfederationproviderrepresentation delete verification", function () {
  const e = waitForAnyUserfederationproviderrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserfederationproviderrepresentation(k), function () {
    verifyUserfederationproviderrepresentationDoesNotExist(k);
  });
});

bthread("Userrepresentation create verification", function () {
  const e = waitForAnyUserrepresentationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserrepresentation(k), function () {
    verifyUserrepresentationExists(k);
  });
});

bthread("Userrepresentation update verification", function () {
  const e = waitForAnyUserrepresentationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserrepresentation(k), function () {
    verifyUserrepresentationUpdated(k);
  });
});

bthread("Userrepresentation delete verification", function () {
  const e = waitForAnyUserrepresentationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserrepresentation(k), function () {
    verifyUserrepresentationDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Access", function () {
  const x = waitForAnyAccessAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccess(k, ANY), function () {});
});

bthread("Guard: Unique Accesstoken", function () {
  const x = waitForAnyAccesstokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccesstoken(k, ANY), function () {});
});

bthread("Guard: Unique Addressclaimset", function () {
  const x = waitForAnyAddressclaimsetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddressclaimset(k, ANY), function () {});
});

bthread("Guard: Unique Applicationrepresentation", function () {
  const x = waitForAnyApplicationrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplicationrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Applicationrepresentationclaims", function () {
  const x = waitForAnyApplicationrepresentationclaimsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplicationrepresentationclaims(k, ANY), function () {});
});

bthread("Guard: Unique Authenticationexecutionexportrepresentation", function () {
  const x = waitForAnyAuthenticationexecutionexportrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticationexecutionexportrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Authenticationexecutioninforepresentation", function () {
  const x = waitForAnyAuthenticationexecutioninforepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticationexecutioninforepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Authenticationexecutionrepresentation", function () {
  const x = waitForAnyAuthenticationexecutionrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticationexecutionrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Authenticationflowrepresentation", function () {
  const x = waitForAnyAuthenticationflowrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticationflowrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Authenticatorconfiginforepresentation", function () {
  const x = waitForAnyAuthenticatorconfiginforepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticatorconfiginforepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Authenticatorconfigrepresentation", function () {
  const x = waitForAnyAuthenticatorconfigrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthenticatorconfigrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Authorization", function () {
  const x = waitForAnyAuthorizationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthorization(k, ANY), function () {});
});

bthread("Guard: Unique Certconf", function () {
  const x = waitForAnyCertconfAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCertconf(k, ANY), function () {});
});

bthread("Guard: Unique Certificaterepresentation", function () {
  const x = waitForAnyCertificaterepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCertificaterepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Claimrepresentation", function () {
  const x = waitForAnyClaimrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClaimrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientinitialaccesscreatepresentation", function () {
  const x = waitForAnyClientinitialaccesscreatepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientinitialaccesscreatepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientinitialaccesspresentation", function () {
  const x = waitForAnyClientinitialaccesspresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientinitialaccesspresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientmappingsrepresentation", function () {
  const x = waitForAnyClientmappingsrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientmappingsrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientpoliciesrepresentation", function () {
  const x = waitForAnyClientpoliciesrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientpoliciesrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientpolicyconditionrepresentation", function () {
  const x = waitForAnyClientpolicyconditionrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientpolicyconditionrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientpolicyexecutorrepresentation", function () {
  const x = waitForAnyClientpolicyexecutorrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientpolicyexecutorrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientpolicyrepresentation", function () {
  const x = waitForAnyClientpolicyrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientpolicyrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientprofilerepresentation", function () {
  const x = waitForAnyClientprofilerepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientprofilerepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientprofilesrepresentation", function () {
  const x = waitForAnyClientprofilesrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientprofilesrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientrepresentation", function () {
  const x = waitForAnyClientrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clientscoperepresentation", function () {
  const x = waitForAnyClientscoperepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClientscoperepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Clienttemplaterepresentation", function () {
  const x = waitForAnyClienttemplaterepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClienttemplaterepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Componentexportrepresentation", function () {
  const x = waitForAnyComponentexportrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComponentexportrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Componentrepresentation", function () {
  const x = waitForAnyComponentrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComponentrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Composites", function () {
  const x = waitForAnyCompositesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComposites(k, ANY), function () {});
});

bthread("Guard: Unique Configpropertyrepresentation", function () {
  const x = waitForAnyConfigpropertyrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfigpropertyrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Credentialrepresentation", function () {
  const x = waitForAnyCredentialrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredentialrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Decisionstrategy", function () {
  const x = waitForAnyDecisionstrategyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDecisionstrategy(k, ANY), function () {});
});

bthread("Guard: Unique Enforcementmode", function () {
  const x = waitForAnyEnforcementmodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEnforcementmode(k, ANY), function () {});
});

bthread("Guard: Unique Federatedidentityrepresentation", function () {
  const x = waitForAnyFederatedidentityrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFederatedidentityrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Globalrequestresult", function () {
  const x = waitForAnyGlobalrequestresultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGlobalrequestresult(k, ANY), function () {});
});

bthread("Guard: Unique Grouprepresentation", function () {
  const x = waitForAnyGrouprepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGrouprepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Identityprovidermapperrepresentation", function () {
  const x = waitForAnyIdentityprovidermapperrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIdentityprovidermapperrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Identityprovidermappertyperepresentation", function () {
  const x = waitForAnyIdentityprovidermappertyperepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIdentityprovidermappertyperepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Identityproviderrepresentation", function () {
  const x = waitForAnyIdentityproviderrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIdentityproviderrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Idtoken", function () {
  const x = waitForAnyIdtokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIdtoken(k, ANY), function () {});
});

bthread("Guard: Unique Installationadapterconfig", function () {
  const x = waitForAnyInstallationadapterconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstallationadapterconfig(k, ANY), function () {});
});

bthread("Guard: Unique Keymetadatarepresentation", function () {
  const x = waitForAnyKeymetadatarepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKeymetadatarepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Keysmetadatarepresentation", function () {
  const x = waitForAnyKeysmetadatarepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKeysmetadatarepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Keystoreconfig", function () {
  const x = waitForAnyKeystoreconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKeystoreconfig(k, ANY), function () {});
});

bthread("Guard: Unique Keyuse", function () {
  const x = waitForAnyKeyuseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKeyuse(k, ANY), function () {});
});

bthread("Guard: Unique Logic", function () {
  const x = waitForAnyLogicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLogic(k, ANY), function () {});
});

bthread("Guard: Unique Managementpermissionreference", function () {
  const x = waitForAnyManagementpermissionreferenceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddManagementpermissionreference(k, ANY), function () {});
});

bthread("Guard: Unique Mappingsrepresentation", function () {
  const x = waitForAnyMappingsrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMappingsrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Methodconfig", function () {
  const x = waitForAnyMethodconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMethodconfig(k, ANY), function () {});
});

bthread("Guard: Unique Oauthclientrepresentation", function () {
  const x = waitForAnyOauthclientrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOauthclientrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Pathcacheconfig", function () {
  const x = waitForAnyPathcacheconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPathcacheconfig(k, ANY), function () {});
});

bthread("Guard: Unique Pathconfig", function () {
  const x = waitForAnyPathconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPathconfig(k, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermission(k, ANY), function () {});
});

bthread("Guard: Unique Policyenforcementmode", function () {
  const x = waitForAnyPolicyenforcementmodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPolicyenforcementmode(k, ANY), function () {});
});

bthread("Guard: Unique Policyenforcerconfig", function () {
  const x = waitForAnyPolicyenforcerconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPolicyenforcerconfig(k, ANY), function () {});
});

bthread("Guard: Unique Policyrepresentation", function () {
  const x = waitForAnyPolicyrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPolicyrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Protocolmapperrepresentation", function () {
  const x = waitForAnyProtocolmapperrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProtocolmapperrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Publishedrealmrepresentation", function () {
  const x = waitForAnyPublishedrealmrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublishedrealmrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Realmeventsconfigrepresentation", function () {
  const x = waitForAnyRealmeventsconfigrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmeventsconfigrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Realmrepresentation", function () {
  const x = waitForAnyRealmrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Requiredactionproviderrepresentation", function () {
  const x = waitForAnyRequiredactionproviderrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequiredactionproviderrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Resourceownerrepresentation", function () {
  const x = waitForAnyResourceownerrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResourceownerrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Resourcerepresentation", function () {
  const x = waitForAnyResourcerepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResourcerepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Resourcerepresentationowner", function () {
  const x = waitForAnyResourcerepresentationownerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResourcerepresentationowner(k, ANY), function () {});
});

bthread("Guard: Unique Resourceserverrepresentation", function () {
  const x = waitForAnyResourceserverrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResourceserverrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Rolerepresentation", function () {
  const x = waitForAnyRolerepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRolerepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Rolesrepresentation", function () {
  const x = waitForAnyRolesrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRolesrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Scopeenforcementmode", function () {
  const x = waitForAnyScopeenforcementmodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScopeenforcementmode(k, ANY), function () {});
});

bthread("Guard: Unique Scopemappingrepresentation", function () {
  const x = waitForAnyScopemappingrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScopemappingrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Scoperepresentation", function () {
  const x = waitForAnyScoperepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScoperepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Sociallinkrepresentation", function () {
  const x = waitForAnySociallinkrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSociallinkrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Userconsentrepresentation", function () {
  const x = waitForAnyUserconsentrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserconsentrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Userfederationmapperrepresentation", function () {
  const x = waitForAnyUserfederationmapperrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserfederationmapperrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Userfederationproviderrepresentation", function () {
  const x = waitForAnyUserfederationproviderrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserfederationproviderrepresentation(k, ANY), function () {});
});

bthread("Guard: Unique Userrepresentation", function () {
  const x = waitForAnyUserrepresentationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserrepresentation(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
