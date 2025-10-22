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


bthread("1Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  add1(x.id);
  const e_add = waitFor1Added(id);
  block(matchDelete1(id), function () {
    verify1Exists(id);
  });
  update1(x.id);
  update1(x.id);
  const e_upd = waitFor1Updated(id);
  block(matchDelete1(id), function () {
    verify1Updated(id);
  });
  delete1(x.id);
  const e_del = waitFor1Deleted(id);
  block(matchAdd1(id), function () {
    verify1DoesNotExist(id);
  });
});

bthread("3Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  add3(x.id);
  const e_add = waitFor3Added(id);
  block(matchDelete3(id), function () {
    verify3Exists(id);
  });
  update3(x.id);
  update3(x.id);
  const e_upd = waitFor3Updated(id);
  block(matchDelete3(id), function () {
    verify3Updated(id);
  });
  delete3(x.id);
  const e_del = waitFor3Deleted(id);
  block(matchAdd3(id), function () {
    verify3DoesNotExist(id);
  });
});

bthread("AccessibleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccessible(x.id);
  const e_add = waitForAccessibleAdded(id);
  block(matchDeleteAccessible(id), function () {
    verifyAccessibleExists(id);
  });
  updateAccessible(x.id);
  updateAccessible(x.id);
  const e_upd = waitForAccessibleUpdated(id);
  block(matchDeleteAccessible(id), function () {
    verifyAccessibleUpdated(id);
  });
  deleteAccessible(x.id);
  const e_del = waitForAccessibleDeleted(id);
  block(matchAddAccessible(id), function () {
    verifyAccessibleDoesNotExist(id);
  });
});

bthread("ActorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActor(x.id);
  const e_add = waitForActorAdded(id);
  block(matchDeleteActor(id), function () {
    verifyActorExists(id);
  });
  updateActor(x.id);
  updateActor(x.id);
  const e_upd = waitForActorUpdated(id);
  block(matchDeleteActor(id), function () {
    verifyActorUpdated(id);
  });
  deleteActor(x.id);
  const e_del = waitForActorDeleted(id);
  block(matchAddActor(id), function () {
    verifyActorDoesNotExist(id);
  });
});

bthread("AddonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddon(x.id);
  const e_add = waitForAddonAdded(id);
  block(matchDeleteAddon(id), function () {
    verifyAddonExists(id);
  });
  updateAddon(x.id);
  updateAddon(x.id);
  const e_upd = waitForAddonUpdated(id);
  block(matchDeleteAddon(id), function () {
    verifyAddonUpdated(id);
  });
  deleteAddon(x.id);
  const e_del = waitForAddonDeleted(id);
  block(matchAddAddon(id), function () {
    verifyAddonDoesNotExist(id);
  });
});

bthread("AddtodefaultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAddtodefault(x.id);
  const e_add = waitForAddtodefaultAdded(id);
  block(matchDeleteAddtodefault(id), function () {
    verifyAddtodefaultExists(id);
  });
  updateAddtodefault(x.id);
  updateAddtodefault(x.id);
  const e_upd = waitForAddtodefaultUpdated(id);
  block(matchDeleteAddtodefault(id), function () {
    verifyAddtodefaultUpdated(id);
  });
  deleteAddtodefault(x.id);
  const e_del = waitForAddtodefaultDeleted(id);
  block(matchAddAddtodefault(id), function () {
    verifyAddtodefaultDoesNotExist(id);
  });
});

bthread("AdvancedsettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAdvancedsetting(x.id);
  const e_add = waitForAdvancedsettingAdded(id);
  block(matchDeleteAdvancedsetting(id), function () {
    verifyAdvancedsettingExists(id);
  });
  updateAdvancedsetting(x.id);
  updateAdvancedsetting(x.id);
  const e_upd = waitForAdvancedsettingUpdated(id);
  block(matchDeleteAdvancedsetting(id), function () {
    verifyAdvancedsettingUpdated(id);
  });
  deleteAdvancedsetting(x.id);
  const e_del = waitForAdvancedsettingDeleted(id);
  block(matchAddAdvancedsetting(id), function () {
    verifyAdvancedsettingDoesNotExist(id);
  });
});

bthread("AlternativeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAlternative(x.id);
  const e_add = waitForAlternativeAdded(id);
  block(matchDeleteAlternative(id), function () {
    verifyAlternativeExists(id);
  });
  updateAlternative(x.id);
  updateAlternative(x.id);
  const e_upd = waitForAlternativeUpdated(id);
  block(matchDeleteAlternative(id), function () {
    verifyAlternativeUpdated(id);
  });
  deleteAlternative(x.id);
  const e_del = waitForAlternativeDeleted(id);
  block(matchAddAlternative(id), function () {
    verifyAlternativeDoesNotExist(id);
  });
});

bthread("AnalyseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAnalyse(x.id);
  const e_add = waitForAnalyseAdded(id);
  block(matchDeleteAnalyse(id), function () {
    verifyAnalyseExists(id);
  });
  updateAnalyse(x.id);
  updateAnalyse(x.id);
  const e_upd = waitForAnalyseUpdated(id);
  block(matchDeleteAnalyse(id), function () {
    verifyAnalyseUpdated(id);
  });
  deleteAnalyse(x.id);
  const e_del = waitForAnalyseDeleted(id);
  block(matchAddAnalyse(id), function () {
    verifyAnalyseDoesNotExist(id);
  });
});

bthread("AnnouncementbannerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAnnouncementbanner(x.id);
  const e_add = waitForAnnouncementbannerAdded(id);
  block(matchDeleteAnnouncementbanner(id), function () {
    verifyAnnouncementbannerExists(id);
  });
  updateAnnouncementbanner(x.id);
  updateAnnouncementbanner(x.id);
  const e_upd = waitForAnnouncementbannerUpdated(id);
  block(matchDeleteAnnouncementbanner(id), function () {
    verifyAnnouncementbannerUpdated(id);
  });
  deleteAnnouncementbanner(x.id);
  const e_del = waitForAnnouncementbannerDeleted(id);
  block(matchAddAnnouncementbanner(id), function () {
    verifyAnnouncementbannerDoesNotExist(id);
  });
});

bthread("ApiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApi(x.id);
  const e_add = waitForApiAdded(id);
  block(matchDeleteApi(id), function () {
    verifyApiExists(id);
  });
  updateApi(x.id);
  updateApi(x.id);
  const e_upd = waitForApiUpdated(id);
  block(matchDeleteApi(id), function () {
    verifyApiUpdated(id);
  });
  deleteApi(x.id);
  const e_del = waitForApiDeleted(id);
  block(matchAddApi(id), function () {
    verifyApiDoesNotExist(id);
  });
});

bthread("AppLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApp(x.id);
  const e_add = waitForAppAdded(id);
  block(matchDeleteApp(id), function () {
    verifyAppExists(id);
  });
  updateApp(x.id);
  updateApp(x.id);
  const e_upd = waitForAppUpdated(id);
  block(matchDeleteApp(id), function () {
    verifyAppUpdated(id);
  });
  deleteApp(x.id);
  const e_del = waitForAppDeleted(id);
  block(matchAddApp(id), function () {
    verifyAppDoesNotExist(id);
  });
});

bthread("ApplicationpropertyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApplicationproperty(x.id);
  const e_add = waitForApplicationpropertyAdded(id);
  block(matchDeleteApplicationproperty(id), function () {
    verifyApplicationpropertyExists(id);
  });
  updateApplicationproperty(x.id);
  updateApplicationproperty(x.id);
  const e_upd = waitForApplicationpropertyUpdated(id);
  block(matchDeleteApplicationproperty(id), function () {
    verifyApplicationpropertyUpdated(id);
  });
  deleteApplicationproperty(x.id);
  const e_del = waitForApplicationpropertyDeleted(id);
  block(matchAddApplicationproperty(id), function () {
    verifyApplicationpropertyDoesNotExist(id);
  });
});

bthread("ApplicationroleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApplicationrole(x.id);
  const e_add = waitForApplicationroleAdded(id);
  block(matchDeleteApplicationrole(id), function () {
    verifyApplicationroleExists(id);
  });
  updateApplicationrole(x.id);
  updateApplicationrole(x.id);
  const e_upd = waitForApplicationroleUpdated(id);
  block(matchDeleteApplicationrole(id), function () {
    verifyApplicationroleUpdated(id);
  });
  deleteApplicationrole(x.id);
  const e_del = waitForApplicationroleDeleted(id);
  block(matchAddApplicationrole(id), function () {
    verifyApplicationroleDoesNotExist(id);
  });
});

bthread("ApproximatecountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApproximatecount(x.id);
  const e_add = waitForApproximatecountAdded(id);
  block(matchDeleteApproximatecount(id), function () {
    verifyApproximatecountExists(id);
  });
  updateApproximatecount(x.id);
  updateApproximatecount(x.id);
  const e_upd = waitForApproximatecountUpdated(id);
  block(matchDeleteApproximatecount(id), function () {
    verifyApproximatecountUpdated(id);
  });
  deleteApproximatecount(x.id);
  const e_del = waitForApproximatecountDeleted(id);
  block(matchAddApproximatecount(id), function () {
    verifyApproximatecountDoesNotExist(id);
  });
});

bthread("ApproximatelicensecountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApproximatelicensecount(x.id);
  const e_add = waitForApproximatelicensecountAdded(id);
  block(matchDeleteApproximatelicensecount(id), function () {
    verifyApproximatelicensecountExists(id);
  });
  updateApproximatelicensecount(x.id);
  updateApproximatelicensecount(x.id);
  const e_upd = waitForApproximatelicensecountUpdated(id);
  block(matchDeleteApproximatelicensecount(id), function () {
    verifyApproximatelicensecountUpdated(id);
  });
  deleteApproximatelicensecount(x.id);
  const e_del = waitForApproximatelicensecountDeleted(id);
  block(matchAddApproximatelicensecount(id), function () {
    verifyApproximatelicensecountDoesNotExist(id);
  });
});

bthread("ArchiveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addArchive(x.id);
  const e_add = waitForArchiveAdded(id);
  block(matchDeleteArchive(id), function () {
    verifyArchiveExists(id);
  });
  updateArchive(x.id);
  updateArchive(x.id);
  const e_upd = waitForArchiveUpdated(id);
  block(matchDeleteArchive(id), function () {
    verifyArchiveUpdated(id);
  });
  deleteArchive(x.id);
  const e_del = waitForArchiveDeleted(id);
  block(matchAddArchive(id), function () {
    verifyArchiveDoesNotExist(id);
  });
});

bthread("AssignableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssignable(x.id);
  const e_add = waitForAssignableAdded(id);
  block(matchDeleteAssignable(id), function () {
    verifyAssignableExists(id);
  });
  updateAssignable(x.id);
  updateAssignable(x.id);
  const e_upd = waitForAssignableUpdated(id);
  block(matchDeleteAssignable(id), function () {
    verifyAssignableUpdated(id);
  });
  deleteAssignable(x.id);
  const e_del = waitForAssignableDeleted(id);
  block(matchAddAssignable(id), function () {
    verifyAssignableDoesNotExist(id);
  });
});

bthread("AssigneeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssignee(x.id);
  const e_add = waitForAssigneeAdded(id);
  block(matchDeleteAssignee(id), function () {
    verifyAssigneeExists(id);
  });
  updateAssignee(x.id);
  updateAssignee(x.id);
  const e_upd = waitForAssigneeUpdated(id);
  block(matchDeleteAssignee(id), function () {
    verifyAssigneeUpdated(id);
  });
  deleteAssignee(x.id);
  const e_del = waitForAssigneeDeleted(id);
  block(matchAddAssignee(id), function () {
    verifyAssigneeDoesNotExist(id);
  });
});

bthread("AssociationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssociation(x.id);
  const e_add = waitForAssociationAdded(id);
  block(matchDeleteAssociation(id), function () {
    verifyAssociationExists(id);
  });
  updateAssociation(x.id);
  updateAssociation(x.id);
  const e_upd = waitForAssociationUpdated(id);
  block(matchDeleteAssociation(id), function () {
    verifyAssociationUpdated(id);
  });
  deleteAssociation(x.id);
  const e_del = waitForAssociationDeleted(id);
  block(matchAddAssociation(id), function () {
    verifyAssociationDoesNotExist(id);
  });
});

bthread("AtlassianLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAtlassian(x.id);
  const e_add = waitForAtlassianAdded(id);
  block(matchDeleteAtlassian(id), function () {
    verifyAtlassianExists(id);
  });
  updateAtlassian(x.id);
  updateAtlassian(x.id);
  const e_upd = waitForAtlassianUpdated(id);
  block(matchDeleteAtlassian(id), function () {
    verifyAtlassianUpdated(id);
  });
  deleteAtlassian(x.id);
  const e_del = waitForAtlassianDeleted(id);
  block(matchAddAtlassian(id), function () {
    verifyAtlassianDoesNotExist(id);
  });
});

bthread("AtlassianconnectLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAtlassianconnect(x.id);
  const e_add = waitForAtlassianconnectAdded(id);
  block(matchDeleteAtlassianconnect(id), function () {
    verifyAtlassianconnectExists(id);
  });
  updateAtlassianconnect(x.id);
  updateAtlassianconnect(x.id);
  const e_upd = waitForAtlassianconnectUpdated(id);
  block(matchDeleteAtlassianconnect(id), function () {
    verifyAtlassianconnectUpdated(id);
  });
  deleteAtlassianconnect(x.id);
  const e_del = waitForAtlassianconnectDeleted(id);
  block(matchAddAtlassianconnect(id), function () {
    verifyAtlassianconnectDoesNotExist(id);
  });
});

bthread("AttachmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAttachment(x.id);
  const e_add = waitForAttachmentAdded(id);
  block(matchDeleteAttachment(id), function () {
    verifyAttachmentExists(id);
  });
  updateAttachment(x.id);
  updateAttachment(x.id);
  const e_upd = waitForAttachmentUpdated(id);
  block(matchDeleteAttachment(id), function () {
    verifyAttachmentUpdated(id);
  });
  deleteAttachment(x.id);
  const e_del = waitForAttachmentDeleted(id);
  block(matchAddAttachment(id), function () {
    verifyAttachmentDoesNotExist(id);
  });
});

bthread("AuditingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuditing(x.id);
  const e_add = waitForAuditingAdded(id);
  block(matchDeleteAuditing(id), function () {
    verifyAuditingExists(id);
  });
  updateAuditing(x.id);
  updateAuditing(x.id);
  const e_upd = waitForAuditingUpdated(id);
  block(matchDeleteAuditing(id), function () {
    verifyAuditingUpdated(id);
  });
  deleteAuditing(x.id);
  const e_del = waitForAuditingDeleted(id);
  block(matchAddAuditing(id), function () {
    verifyAuditingDoesNotExist(id);
  });
});

bthread("AutocompletedataLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAutocompletedata(x.id);
  const e_add = waitForAutocompletedataAdded(id);
  block(matchDeleteAutocompletedata(id), function () {
    verifyAutocompletedataExists(id);
  });
  updateAutocompletedata(x.id);
  updateAutocompletedata(x.id);
  const e_upd = waitForAutocompletedataUpdated(id);
  block(matchDeleteAutocompletedata(id), function () {
    verifyAutocompletedataUpdated(id);
  });
  deleteAutocompletedata(x.id);
  const e_del = waitForAutocompletedataDeleted(id);
  block(matchAddAutocompletedata(id), function () {
    verifyAutocompletedataDoesNotExist(id);
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

bthread("AvailablefieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvailablefield(x.id);
  const e_add = waitForAvailablefieldAdded(id);
  block(matchDeleteAvailablefield(id), function () {
    verifyAvailablefieldExists(id);
  });
  updateAvailablefield(x.id);
  updateAvailablefield(x.id);
  const e_upd = waitForAvailablefieldUpdated(id);
  block(matchDeleteAvailablefield(id), function () {
    verifyAvailablefieldUpdated(id);
  });
  deleteAvailablefield(x.id);
  const e_del = waitForAvailablefieldDeleted(id);
  block(matchAddAvailablefield(id), function () {
    verifyAvailablefieldDoesNotExist(id);
  });
});

bthread("AvatarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvatar(x.id);
  const e_add = waitForAvatarAdded(id);
  block(matchDeleteAvatar(id), function () {
    verifyAvatarExists(id);
  });
  updateAvatar(x.id);
  updateAvatar(x.id);
  const e_upd = waitForAvatarUpdated(id);
  block(matchDeleteAvatar(id), function () {
    verifyAvatarUpdated(id);
  });
  deleteAvatar(x.id);
  const e_del = waitForAvatarDeleted(id);
  block(matchAddAvatar(id), function () {
    verifyAvatarDoesNotExist(id);
  });
});

bthread("Avatar2Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvatar2(x.id);
  const e_add = waitForAvatar2Added(id);
  block(matchDeleteAvatar2(id), function () {
    verifyAvatar2Exists(id);
  });
  updateAvatar2(x.id);
  updateAvatar2(x.id);
  const e_upd = waitForAvatar2Updated(id);
  block(matchDeleteAvatar2(id), function () {
    verifyAvatar2Updated(id);
  });
  deleteAvatar2(x.id);
  const e_del = waitForAvatar2Deleted(id);
  block(matchAddAvatar2(id), function () {
    verifyAvatar2DoesNotExist(id);
  });
});

bthread("BulkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBulk(x.id);
  const e_add = waitForBulkAdded(id);
  block(matchDeleteBulk(id), function () {
    verifyBulkExists(id);
  });
  updateBulk(x.id);
  updateBulk(x.id);
  const e_upd = waitForBulkUpdated(id);
  block(matchDeleteBulk(id), function () {
    verifyBulkUpdated(id);
  });
  deleteBulk(x.id);
  const e_del = waitForBulkDeleted(id);
  block(matchAddBulk(id), function () {
    verifyBulkDoesNotExist(id);
  });
});

bthread("BulkfetchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBulkfetch(x.id);
  const e_add = waitForBulkfetchAdded(id);
  block(matchDeleteBulkfetch(id), function () {
    verifyBulkfetchExists(id);
  });
  updateBulkfetch(x.id);
  updateBulkfetch(x.id);
  const e_upd = waitForBulkfetchUpdated(id);
  block(matchDeleteBulkfetch(id), function () {
    verifyBulkfetchUpdated(id);
  });
  deleteBulkfetch(x.id);
  const e_del = waitForBulkfetchDeleted(id);
  block(matchAddBulkfetch(id), function () {
    verifyBulkfetchDoesNotExist(id);
  });
});

bthread("BynameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addByname(x.id);
  const e_add = waitForBynameAdded(id);
  block(matchDeleteByname(id), function () {
    verifyBynameExists(id);
  });
  updateByname(x.id);
  updateByname(x.id);
  const e_upd = waitForBynameUpdated(id);
  block(matchDeleteByname(id), function () {
    verifyBynameUpdated(id);
  });
  deleteByname(x.id);
  const e_del = waitForBynameDeleted(id);
  block(matchAddByname(id), function () {
    verifyBynameDoesNotExist(id);
  });
});

bthread("CancelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCancel(x.id);
  const e_add = waitForCancelAdded(id);
  block(matchDeleteCancel(id), function () {
    verifyCancelExists(id);
  });
  updateCancel(x.id);
  updateCancel(x.id);
  const e_upd = waitForCancelUpdated(id);
  block(matchDeleteCancel(id), function () {
    verifyCancelUpdated(id);
  });
  deleteCancel(x.id);
  const e_del = waitForCancelDeleted(id);
  block(matchAddCancel(id), function () {
    verifyCancelDoesNotExist(id);
  });
});

bthread("CapabilityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCapability(x.id);
  const e_add = waitForCapabilityAdded(id);
  block(matchDeleteCapability(id), function () {
    verifyCapabilityExists(id);
  });
  updateCapability(x.id);
  updateCapability(x.id);
  const e_upd = waitForCapabilityUpdated(id);
  block(matchDeleteCapability(id), function () {
    verifyCapabilityUpdated(id);
  });
  deleteCapability(x.id);
  const e_del = waitForCapabilityDeleted(id);
  block(matchAddCapability(id), function () {
    verifyCapabilityDoesNotExist(id);
  });
});

bthread("ChangelogLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChangelog(x.id);
  const e_add = waitForChangelogAdded(id);
  block(matchDeleteChangelog(id), function () {
    verifyChangelogExists(id);
  });
  updateChangelog(x.id);
  updateChangelog(x.id);
  const e_upd = waitForChangelogUpdated(id);
  block(matchDeleteChangelog(id), function () {
    verifyChangelogUpdated(id);
  });
  deleteChangelog(x.id);
  const e_del = waitForChangelogDeleted(id);
  block(matchAddChangelog(id), function () {
    verifyChangelogDoesNotExist(id);
  });
});

bthread("CheckLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCheck(x.id);
  const e_add = waitForCheckAdded(id);
  block(matchDeleteCheck(id), function () {
    verifyCheckExists(id);
  });
  updateCheck(x.id);
  updateCheck(x.id);
  const e_upd = waitForCheckUpdated(id);
  block(matchDeleteCheck(id), function () {
    verifyCheckUpdated(id);
  });
  deleteCheck(x.id);
  const e_del = waitForCheckDeleted(id);
  block(matchAddCheck(id), function () {
    verifyCheckDoesNotExist(id);
  });
});

bthread("ClassificationlevelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClassificationlevel(x.id);
  const e_add = waitForClassificationlevelAdded(id);
  block(matchDeleteClassificationlevel(id), function () {
    verifyClassificationlevelExists(id);
  });
  updateClassificationlevel(x.id);
  updateClassificationlevel(x.id);
  const e_upd = waitForClassificationlevelUpdated(id);
  block(matchDeleteClassificationlevel(id), function () {
    verifyClassificationlevelUpdated(id);
  });
  deleteClassificationlevel(x.id);
  const e_del = waitForClassificationlevelDeleted(id);
  block(matchAddClassificationlevel(id), function () {
    verifyClassificationlevelDoesNotExist(id);
  });
});

bthread("ColumnLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addColumn(x.id);
  const e_add = waitForColumnAdded(id);
  block(matchDeleteColumn(id), function () {
    verifyColumnExists(id);
  });
  updateColumn(x.id);
  updateColumn(x.id);
  const e_upd = waitForColumnUpdated(id);
  block(matchDeleteColumn(id), function () {
    verifyColumnUpdated(id);
  });
  deleteColumn(x.id);
  const e_del = waitForColumnDeleted(id);
  block(matchAddColumn(id), function () {
    verifyColumnDoesNotExist(id);
  });
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComment(x.id);
  const e_add = waitForCommentAdded(id);
  block(matchDeleteComment(id), function () {
    verifyCommentExists(id);
  });
  updateComment(x.id);
  updateComment(x.id);
  const e_upd = waitForCommentUpdated(id);
  block(matchDeleteComment(id), function () {
    verifyCommentUpdated(id);
  });
  deleteComment(x.id);
  const e_del = waitForCommentDeleted(id);
  block(matchAddComment(id), function () {
    verifyCommentDoesNotExist(id);
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

bthread("ComputationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComputation(x.id);
  const e_add = waitForComputationAdded(id);
  block(matchDeleteComputation(id), function () {
    verifyComputationExists(id);
  });
  updateComputation(x.id);
  updateComputation(x.id);
  const e_upd = waitForComputationUpdated(id);
  block(matchDeleteComputation(id), function () {
    verifyComputationUpdated(id);
  });
  deleteComputation(x.id);
  const e_del = waitForComputationDeleted(id);
  block(matchAddComputation(id), function () {
    verifyComputationDoesNotExist(id);
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

bthread("ConfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfiguration(x.id);
  const e_add = waitForConfigurationAdded(id);
  block(matchDeleteConfiguration(id), function () {
    verifyConfigurationExists(id);
  });
  updateConfiguration(x.id);
  updateConfiguration(x.id);
  const e_upd = waitForConfigurationUpdated(id);
  block(matchDeleteConfiguration(id), function () {
    verifyConfigurationUpdated(id);
  });
  deleteConfiguration(x.id);
  const e_del = waitForConfigurationDeleted(id);
  block(matchAddConfiguration(id), function () {
    verifyConfigurationDoesNotExist(id);
  });
});

bthread("ContentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContent(x.id);
  const e_add = waitForContentAdded(id);
  block(matchDeleteContent(id), function () {
    verifyContentExists(id);
  });
  updateContent(x.id);
  updateContent(x.id);
  const e_upd = waitForContentUpdated(id);
  block(matchDeleteContent(id), function () {
    verifyContentUpdated(id);
  });
  deleteContent(x.id);
  const e_del = waitForContentDeleted(id);
  block(matchAddContent(id), function () {
    verifyContentDoesNotExist(id);
  });
});

bthread("ContextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContext(x.id);
  const e_add = waitForContextAdded(id);
  block(matchDeleteContext(id), function () {
    verifyContextExists(id);
  });
  updateContext(x.id);
  updateContext(x.id);
  const e_upd = waitForContextUpdated(id);
  block(matchDeleteContext(id), function () {
    verifyContextUpdated(id);
  });
  deleteContext(x.id);
  const e_del = waitForContextDeleted(id);
  block(matchAddContext(id), function () {
    verifyContextDoesNotExist(id);
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

bthread("CreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCreate(x.id);
  const e_add = waitForCreateAdded(id);
  block(matchDeleteCreate(id), function () {
    verifyCreateExists(id);
  });
  updateCreate(x.id);
  updateCreate(x.id);
  const e_upd = waitForCreateUpdated(id);
  block(matchDeleteCreate(id), function () {
    verifyCreateUpdated(id);
  });
  deleteCreate(x.id);
  const e_del = waitForCreateDeleted(id);
  block(matchAddCreate(id), function () {
    verifyCreateDoesNotExist(id);
  });
});

bthread("CreatedraftLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCreatedraft(x.id);
  const e_add = waitForCreatedraftAdded(id);
  block(matchDeleteCreatedraft(id), function () {
    verifyCreatedraftExists(id);
  });
  updateCreatedraft(x.id);
  updateCreatedraft(x.id);
  const e_upd = waitForCreatedraftUpdated(id);
  block(matchDeleteCreatedraft(id), function () {
    verifyCreatedraftUpdated(id);
  });
  deleteCreatedraft(x.id);
  const e_del = waitForCreatedraftDeleted(id);
  block(matchAddCreatedraft(id), function () {
    verifyCreatedraftDoesNotExist(id);
  });
});

bthread("CreatemetaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCreatemeta(x.id);
  const e_add = waitForCreatemetaAdded(id);
  block(matchDeleteCreatemeta(id), function () {
    verifyCreatemetaExists(id);
  });
  updateCreatemeta(x.id);
  updateCreatemeta(x.id);
  const e_upd = waitForCreatemetaUpdated(id);
  block(matchDeleteCreatemeta(id), function () {
    verifyCreatemetaUpdated(id);
  });
  deleteCreatemeta(x.id);
  const e_del = waitForCreatemetaDeleted(id);
  block(matchAddCreatemeta(id), function () {
    verifyCreatemetaDoesNotExist(id);
  });
});

bthread("CustomfieldoptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomfieldoption(x.id);
  const e_add = waitForCustomfieldoptionAdded(id);
  block(matchDeleteCustomfieldoption(id), function () {
    verifyCustomfieldoptionExists(id);
  });
  updateCustomfieldoption(x.id);
  updateCustomfieldoption(x.id);
  const e_upd = waitForCustomfieldoptionUpdated(id);
  block(matchDeleteCustomfieldoption(id), function () {
    verifyCustomfieldoptionUpdated(id);
  });
  deleteCustomfieldoption(x.id);
  const e_del = waitForCustomfieldoptionDeleted(id);
  block(matchAddCustomfieldoption(id), function () {
    verifyCustomfieldoptionDoesNotExist(id);
  });
});

bthread("DashboardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDashboard(x.id);
  const e_add = waitForDashboardAdded(id);
  block(matchDeleteDashboard(id), function () {
    verifyDashboardExists(id);
  });
  updateDashboard(x.id);
  updateDashboard(x.id);
  const e_upd = waitForDashboardUpdated(id);
  block(matchDeleteDashboard(id), function () {
    verifyDashboardUpdated(id);
  });
  deleteDashboard(x.id);
  const e_del = waitForDashboardDeleted(id);
  block(matchAddDashboard(id), function () {
    verifyDashboardDoesNotExist(id);
  });
});

bthread("DatapolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDatapolicy(x.id);
  const e_add = waitForDatapolicyAdded(id);
  block(matchDeleteDatapolicy(id), function () {
    verifyDatapolicyExists(id);
  });
  updateDatapolicy(x.id);
  updateDatapolicy(x.id);
  const e_upd = waitForDatapolicyUpdated(id);
  block(matchDeleteDatapolicy(id), function () {
    verifyDatapolicyUpdated(id);
  });
  deleteDatapolicy(x.id);
  const e_del = waitForDatapolicyDeleted(id);
  block(matchAddDatapolicy(id), function () {
    verifyDatapolicyDoesNotExist(id);
  });
});

bthread("DefaultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefault(x.id);
  const e_add = waitForDefaultAdded(id);
  block(matchDeleteDefault(id), function () {
    verifyDefaultExists(id);
  });
  updateDefault(x.id);
  updateDefault(x.id);
  const e_upd = waitForDefaultUpdated(id);
  block(matchDeleteDefault(id), function () {
    verifyDefaultUpdated(id);
  });
  deleteDefault(x.id);
  const e_del = waitForDefaultDeleted(id);
  block(matchAddDefault(id), function () {
    verifyDefaultDoesNotExist(id);
  });
});

bthread("DefaulteditorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaulteditor(x.id);
  const e_add = waitForDefaulteditorAdded(id);
  block(matchDeleteDefaulteditor(id), function () {
    verifyDefaulteditorExists(id);
  });
  updateDefaulteditor(x.id);
  updateDefaulteditor(x.id);
  const e_upd = waitForDefaulteditorUpdated(id);
  block(matchDeleteDefaulteditor(id), function () {
    verifyDefaulteditorUpdated(id);
  });
  deleteDefaulteditor(x.id);
  const e_del = waitForDefaulteditorDeleted(id);
  block(matchAddDefaulteditor(id), function () {
    verifyDefaulteditorDoesNotExist(id);
  });
});

bthread("DefaultsharescopeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultsharescope(x.id);
  const e_add = waitForDefaultsharescopeAdded(id);
  block(matchDeleteDefaultsharescope(id), function () {
    verifyDefaultsharescopeExists(id);
  });
  updateDefaultsharescope(x.id);
  updateDefaultsharescope(x.id);
  const e_upd = waitForDefaultsharescopeUpdated(id);
  block(matchDeleteDefaultsharescope(id), function () {
    verifyDefaultsharescopeUpdated(id);
  });
  deleteDefaultsharescope(x.id);
  const e_del = waitForDefaultsharescopeDeleted(id);
  block(matchAddDefaultsharescope(id), function () {
    verifyDefaultsharescopeDoesNotExist(id);
  });
});

bthread("DefaultvalueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultvalue(x.id);
  const e_add = waitForDefaultvalueAdded(id);
  block(matchDeleteDefaultvalue(id), function () {
    verifyDefaultvalueExists(id);
  });
  updateDefaultvalue(x.id);
  updateDefaultvalue(x.id);
  const e_upd = waitForDefaultvalueUpdated(id);
  block(matchDeleteDefaultvalue(id), function () {
    verifyDefaultvalueUpdated(id);
  });
  deleteDefaultvalue(x.id);
  const e_del = waitForDefaultvalueDeleted(id);
  block(matchAddDefaultvalue(id), function () {
    verifyDefaultvalueDoesNotExist(id);
  });
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDelete(x.id);
  const e_add = waitForDeleteAdded(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteExists(id);
  });
  updateDelete(x.id);
  updateDelete(x.id);
  const e_upd = waitForDeleteUpdated(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteUpdated(id);
  });
  deleteDelete(x.id);
  const e_del = waitForDeleteDeleted(id);
  block(matchAddDelete(id), function () {
    verifyDeleteDoesNotExist(id);
  });
});

bthread("DeletedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeleted(x.id);
  const e_add = waitForDeletedAdded(id);
  block(matchDeleteDeleted(id), function () {
    verifyDeletedExists(id);
  });
  updateDeleted(x.id);
  updateDeleted(x.id);
  const e_upd = waitForDeletedUpdated(id);
  block(matchDeleteDeleted(id), function () {
    verifyDeletedUpdated(id);
  });
  deleteDeleted(x.id);
  const e_del = waitForDeletedDeleted(id);
  block(matchAddDeleted(id), function () {
    verifyDeletedDoesNotExist(id);
  });
});

bthread("DraftLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDraft(x.id);
  const e_add = waitForDraftAdded(id);
  block(matchDeleteDraft(id), function () {
    verifyDraftExists(id);
  });
  updateDraft(x.id);
  updateDraft(x.id);
  const e_upd = waitForDraftUpdated(id);
  block(matchDeleteDraft(id), function () {
    verifyDraftUpdated(id);
  });
  deleteDraft(x.id);
  const e_del = waitForDraftDeleted(id);
  block(matchAddDraft(id), function () {
    verifyDraftDoesNotExist(id);
  });
});

bthread("DuplicateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDuplicate(x.id);
  const e_add = waitForDuplicateAdded(id);
  block(matchDeleteDuplicate(id), function () {
    verifyDuplicateExists(id);
  });
  updateDuplicate(x.id);
  updateDuplicate(x.id);
  const e_upd = waitForDuplicateUpdated(id);
  block(matchDeleteDuplicate(id), function () {
    verifyDuplicateUpdated(id);
  });
  deleteDuplicate(x.id);
  const e_del = waitForDuplicateDeleted(id);
  block(matchAddDuplicate(id), function () {
    verifyDuplicateDoesNotExist(id);
  });
});

bthread("DynamicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDynamic(x.id);
  const e_add = waitForDynamicAdded(id);
  block(matchDeleteDynamic(id), function () {
    verifyDynamicExists(id);
  });
  updateDynamic(x.id);
  updateDynamic(x.id);
  const e_upd = waitForDynamicUpdated(id);
  block(matchDeleteDynamic(id), function () {
    verifyDynamicUpdated(id);
  });
  deleteDynamic(x.id);
  const e_del = waitForDynamicDeleted(id);
  block(matchAddDynamic(id), function () {
    verifyDynamicDoesNotExist(id);
  });
});

bthread("EditLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEdit(x.id);
  const e_add = waitForEditAdded(id);
  block(matchDeleteEdit(id), function () {
    verifyEditExists(id);
  });
  updateEdit(x.id);
  updateEdit(x.id);
  const e_upd = waitForEditUpdated(id);
  block(matchDeleteEdit(id), function () {
    verifyEditUpdated(id);
  });
  deleteEdit(x.id);
  const e_del = waitForEditDeleted(id);
  block(matchAddEdit(id), function () {
    verifyEditDoesNotExist(id);
  });
});

bthread("EditmetaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEditmeta(x.id);
  const e_add = waitForEditmetaAdded(id);
  block(matchDeleteEditmeta(id), function () {
    verifyEditmetaExists(id);
  });
  updateEditmeta(x.id);
  updateEditmeta(x.id);
  const e_upd = waitForEditmetaUpdated(id);
  block(matchDeleteEditmeta(id), function () {
    verifyEditmetaUpdated(id);
  });
  deleteEditmeta(x.id);
  const e_del = waitForEditmetaDeleted(id);
  block(matchAddEditmeta(id), function () {
    verifyEditmetaDoesNotExist(id);
  });
});

bthread("EdittemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEdittemplate(x.id);
  const e_add = waitForEdittemplateAdded(id);
  block(matchDeleteEdittemplate(id), function () {
    verifyEdittemplateExists(id);
  });
  updateEdittemplate(x.id);
  updateEdittemplate(x.id);
  const e_upd = waitForEdittemplateUpdated(id);
  block(matchDeleteEdittemplate(id), function () {
    verifyEdittemplateUpdated(id);
  });
  deleteEdittemplate(x.id);
  const e_del = waitForEdittemplateDeleted(id);
  block(matchAddEdittemplate(id), function () {
    verifyEdittemplateDoesNotExist(id);
  });
});

bthread("EmailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmail(x.id);
  const e_add = waitForEmailAdded(id);
  block(matchDeleteEmail(id), function () {
    verifyEmailExists(id);
  });
  updateEmail(x.id);
  updateEmail(x.id);
  const e_upd = waitForEmailUpdated(id);
  block(matchDeleteEmail(id), function () {
    verifyEmailUpdated(id);
  });
  deleteEmail(x.id);
  const e_del = waitForEmailDeleted(id);
  block(matchAddEmail(id), function () {
    verifyEmailDoesNotExist(id);
  });
});

bthread("EvalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEval(x.id);
  const e_add = waitForEvalAdded(id);
  block(matchDeleteEval(id), function () {
    verifyEvalExists(id);
  });
  updateEval(x.id);
  updateEval(x.id);
  const e_upd = waitForEvalUpdated(id);
  block(matchDeleteEval(id), function () {
    verifyEvalUpdated(id);
  });
  deleteEval(x.id);
  const e_del = waitForEvalDeleted(id);
  block(matchAddEval(id), function () {
    verifyEvalDoesNotExist(id);
  });
});

bthread("EvaluateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEvaluate(x.id);
  const e_add = waitForEvaluateAdded(id);
  block(matchDeleteEvaluate(id), function () {
    verifyEvaluateExists(id);
  });
  updateEvaluate(x.id);
  updateEvaluate(x.id);
  const e_upd = waitForEvaluateUpdated(id);
  block(matchDeleteEvaluate(id), function () {
    verifyEvaluateUpdated(id);
  });
  deleteEvaluate(x.id);
  const e_del = waitForEvaluateDeleted(id);
  block(matchAddEvaluate(id), function () {
    verifyEvaluateDoesNotExist(id);
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

bthread("ExpandLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExpand(x.id);
  const e_add = waitForExpandAdded(id);
  block(matchDeleteExpand(id), function () {
    verifyExpandExists(id);
  });
  updateExpand(x.id);
  updateExpand(x.id);
  const e_upd = waitForExpandUpdated(id);
  block(matchDeleteExpand(id), function () {
    verifyExpandUpdated(id);
  });
  deleteExpand(x.id);
  const e_del = waitForExpandDeleted(id);
  block(matchAddExpand(id), function () {
    verifyExpandDoesNotExist(id);
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

bthread("ExpressionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExpression(x.id);
  const e_add = waitForExpressionAdded(id);
  block(matchDeleteExpression(id), function () {
    verifyExpressionExists(id);
  });
  updateExpression(x.id);
  updateExpression(x.id);
  const e_upd = waitForExpressionUpdated(id);
  block(matchDeleteExpression(id), function () {
    verifyExpressionUpdated(id);
  });
  deleteExpression(x.id);
  const e_del = waitForExpressionDeleted(id);
  block(matchAddExpression(id), function () {
    verifyExpressionDoesNotExist(id);
  });
});

bthread("FailedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFailed(x.id);
  const e_add = waitForFailedAdded(id);
  block(matchDeleteFailed(id), function () {
    verifyFailedExists(id);
  });
  updateFailed(x.id);
  updateFailed(x.id);
  const e_upd = waitForFailedUpdated(id);
  block(matchDeleteFailed(id), function () {
    verifyFailedUpdated(id);
  });
  deleteFailed(x.id);
  const e_del = waitForFailedDeleted(id);
  block(matchAddFailed(id), function () {
    verifyFailedDoesNotExist(id);
  });
});

bthread("FavouriteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFavourite(x.id);
  const e_add = waitForFavouriteAdded(id);
  block(matchDeleteFavourite(id), function () {
    verifyFavouriteExists(id);
  });
  updateFavourite(x.id);
  updateFavourite(x.id);
  const e_upd = waitForFavouriteUpdated(id);
  block(matchDeleteFavourite(id), function () {
    verifyFavouriteUpdated(id);
  });
  deleteFavourite(x.id);
  const e_del = waitForFavouriteDeleted(id);
  block(matchAddFavourite(id), function () {
    verifyFavouriteDoesNotExist(id);
  });
});

bthread("FeatureLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFeature(x.id);
  const e_add = waitForFeatureAdded(id);
  block(matchDeleteFeature(id), function () {
    verifyFeatureExists(id);
  });
  updateFeature(x.id);
  updateFeature(x.id);
  const e_upd = waitForFeatureUpdated(id);
  block(matchDeleteFeature(id), function () {
    verifyFeatureUpdated(id);
  });
  deleteFeature(x.id);
  const e_del = waitForFeatureDeleted(id);
  block(matchAddFeature(id), function () {
    verifyFeatureDoesNotExist(id);
  });
});

bthread("FieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addField(x.id);
  const e_add = waitForFieldAdded(id);
  block(matchDeleteField(id), function () {
    verifyFieldExists(id);
  });
  updateField(x.id);
  updateField(x.id);
  const e_upd = waitForFieldUpdated(id);
  block(matchDeleteField(id), function () {
    verifyFieldUpdated(id);
  });
  deleteField(x.id);
  const e_del = waitForFieldDeleted(id);
  block(matchAddField(id), function () {
    verifyFieldDoesNotExist(id);
  });
});

bthread("FieldconfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFieldconfiguration(x.id);
  const e_add = waitForFieldconfigurationAdded(id);
  block(matchDeleteFieldconfiguration(id), function () {
    verifyFieldconfigurationExists(id);
  });
  updateFieldconfiguration(x.id);
  updateFieldconfiguration(x.id);
  const e_upd = waitForFieldconfigurationUpdated(id);
  block(matchDeleteFieldconfiguration(id), function () {
    verifyFieldconfigurationUpdated(id);
  });
  deleteFieldconfiguration(x.id);
  const e_del = waitForFieldconfigurationDeleted(id);
  block(matchAddFieldconfiguration(id), function () {
    verifyFieldconfigurationDoesNotExist(id);
  });
});

bthread("FieldconfigurationschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFieldconfigurationscheme(x.id);
  const e_add = waitForFieldconfigurationschemeAdded(id);
  block(matchDeleteFieldconfigurationscheme(id), function () {
    verifyFieldconfigurationschemeExists(id);
  });
  updateFieldconfigurationscheme(x.id);
  updateFieldconfigurationscheme(x.id);
  const e_upd = waitForFieldconfigurationschemeUpdated(id);
  block(matchDeleteFieldconfigurationscheme(id), function () {
    verifyFieldconfigurationschemeUpdated(id);
  });
  deleteFieldconfigurationscheme(x.id);
  const e_del = waitForFieldconfigurationschemeDeleted(id);
  block(matchAddFieldconfigurationscheme(id), function () {
    verifyFieldconfigurationschemeDoesNotExist(id);
  });
});

bthread("FilterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFilter(x.id);
  const e_add = waitForFilterAdded(id);
  block(matchDeleteFilter(id), function () {
    verifyFilterExists(id);
  });
  updateFilter(x.id);
  updateFilter(x.id);
  const e_upd = waitForFilterUpdated(id);
  block(matchDeleteFilter(id), function () {
    verifyFilterUpdated(id);
  });
  deleteFilter(x.id);
  const e_del = waitForFilterDeleted(id);
  block(matchAddFilter(id), function () {
    verifyFilterDoesNotExist(id);
  });
});

bthread("ForgeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addForge(x.id);
  const e_add = waitForForgeAdded(id);
  block(matchDeleteForge(id), function () {
    verifyForgeExists(id);
  });
  updateForge(x.id);
  updateForge(x.id);
  const e_upd = waitForForgeUpdated(id);
  block(matchDeleteForge(id), function () {
    verifyForgeUpdated(id);
  });
  deleteForge(x.id);
  const e_del = waitForForgeDeleted(id);
  block(matchAddForge(id), function () {
    verifyForgeDoesNotExist(id);
  });
});

bthread("FunctionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFunction(x.id);
  const e_add = waitForFunctionAdded(id);
  block(matchDeleteFunction(id), function () {
    verifyFunctionExists(id);
  });
  updateFunction(x.id);
  updateFunction(x.id);
  const e_upd = waitForFunctionUpdated(id);
  block(matchDeleteFunction(id), function () {
    verifyFunctionUpdated(id);
  });
  deleteFunction(x.id);
  const e_del = waitForFunctionDeleted(id);
  block(matchAddFunction(id), function () {
    verifyFunctionDoesNotExist(id);
  });
});

bthread("GadgetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGadget(x.id);
  const e_add = waitForGadgetAdded(id);
  block(matchDeleteGadget(id), function () {
    verifyGadgetExists(id);
  });
  updateGadget(x.id);
  updateGadget(x.id);
  const e_upd = waitForGadgetUpdated(id);
  block(matchDeleteGadget(id), function () {
    verifyGadgetUpdated(id);
  });
  deleteGadget(x.id);
  const e_del = waitForGadgetDeleted(id);
  block(matchAddGadget(id), function () {
    verifyGadgetDoesNotExist(id);
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

bthread("GroupuserpickerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGroupuserpicker(x.id);
  const e_add = waitForGroupuserpickerAdded(id);
  block(matchDeleteGroupuserpicker(id), function () {
    verifyGroupuserpickerExists(id);
  });
  updateGroupuserpicker(x.id);
  updateGroupuserpicker(x.id);
  const e_upd = waitForGroupuserpickerUpdated(id);
  block(matchDeleteGroupuserpicker(id), function () {
    verifyGroupuserpickerUpdated(id);
  });
  deleteGroupuserpicker(x.id);
  const e_del = waitForGroupuserpickerDeleted(id);
  block(matchAddGroupuserpicker(id), function () {
    verifyGroupuserpickerDoesNotExist(id);
  });
});

bthread("HierarchyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHierarchy(x.id);
  const e_add = waitForHierarchyAdded(id);
  block(matchDeleteHierarchy(id), function () {
    verifyHierarchyExists(id);
  });
  updateHierarchy(x.id);
  updateHierarchy(x.id);
  const e_upd = waitForHierarchyUpdated(id);
  block(matchDeleteHierarchy(id), function () {
    verifyHierarchyUpdated(id);
  });
  deleteHierarchy(x.id);
  const e_del = waitForHierarchyDeleted(id);
  block(matchAddHierarchy(id), function () {
    verifyHierarchyDoesNotExist(id);
  });
});

bthread("HumanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHuman(x.id);
  const e_add = waitForHumanAdded(id);
  block(matchDeleteHuman(id), function () {
    verifyHumanExists(id);
  });
  updateHuman(x.id);
  updateHuman(x.id);
  const e_upd = waitForHumanUpdated(id);
  block(matchDeleteHuman(id), function () {
    verifyHumanUpdated(id);
  });
  deleteHuman(x.id);
  const e_del = waitForHumanDeleted(id);
  block(matchAddHuman(id), function () {
    verifyHumanDoesNotExist(id);
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

bthread("IssueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssue(x.id);
  const e_add = waitForIssueAdded(id);
  block(matchDeleteIssue(id), function () {
    verifyIssueExists(id);
  });
  updateIssue(x.id);
  updateIssue(x.id);
  const e_upd = waitForIssueUpdated(id);
  block(matchDeleteIssue(id), function () {
    verifyIssueUpdated(id);
  });
  deleteIssue(x.id);
  const e_del = waitForIssueDeleted(id);
  block(matchAddIssue(id), function () {
    verifyIssueDoesNotExist(id);
  });
});

bthread("IssuelinkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuelink(x.id);
  const e_add = waitForIssuelinkAdded(id);
  block(matchDeleteIssuelink(id), function () {
    verifyIssuelinkExists(id);
  });
  updateIssuelink(x.id);
  updateIssuelink(x.id);
  const e_upd = waitForIssuelinkUpdated(id);
  block(matchDeleteIssuelink(id), function () {
    verifyIssuelinkUpdated(id);
  });
  deleteIssuelink(x.id);
  const e_del = waitForIssuelinkDeleted(id);
  block(matchAddIssuelink(id), function () {
    verifyIssuelinkDoesNotExist(id);
  });
});

bthread("IssuelinktypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuelinktype(x.id);
  const e_add = waitForIssuelinktypeAdded(id);
  block(matchDeleteIssuelinktype(id), function () {
    verifyIssuelinktypeExists(id);
  });
  updateIssuelinktype(x.id);
  updateIssuelinktype(x.id);
  const e_upd = waitForIssuelinktypeUpdated(id);
  block(matchDeleteIssuelinktype(id), function () {
    verifyIssuelinktypeUpdated(id);
  });
  deleteIssuelinktype(x.id);
  const e_del = waitForIssuelinktypeDeleted(id);
  block(matchAddIssuelinktype(id), function () {
    verifyIssuelinktypeDoesNotExist(id);
  });
});

bthread("IssuesecuritylevelschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuesecuritylevelscheme(x.id);
  const e_add = waitForIssuesecuritylevelschemeAdded(id);
  block(matchDeleteIssuesecuritylevelscheme(id), function () {
    verifyIssuesecuritylevelschemeExists(id);
  });
  updateIssuesecuritylevelscheme(x.id);
  updateIssuesecuritylevelscheme(x.id);
  const e_upd = waitForIssuesecuritylevelschemeUpdated(id);
  block(matchDeleteIssuesecuritylevelscheme(id), function () {
    verifyIssuesecuritylevelschemeUpdated(id);
  });
  deleteIssuesecuritylevelscheme(x.id);
  const e_del = waitForIssuesecuritylevelschemeDeleted(id);
  block(matchAddIssuesecuritylevelscheme(id), function () {
    verifyIssuesecuritylevelschemeDoesNotExist(id);
  });
});

bthread("IssuesecurityschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuesecurityscheme(x.id);
  const e_add = waitForIssuesecurityschemeAdded(id);
  block(matchDeleteIssuesecurityscheme(id), function () {
    verifyIssuesecurityschemeExists(id);
  });
  updateIssuesecurityscheme(x.id);
  updateIssuesecurityscheme(x.id);
  const e_upd = waitForIssuesecurityschemeUpdated(id);
  block(matchDeleteIssuesecurityscheme(id), function () {
    verifyIssuesecurityschemeUpdated(id);
  });
  deleteIssuesecurityscheme(x.id);
  const e_del = waitForIssuesecurityschemeDeleted(id);
  block(matchAddIssuesecurityscheme(id), function () {
    verifyIssuesecurityschemeDoesNotExist(id);
  });
});

bthread("IssuetypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetype(x.id);
  const e_add = waitForIssuetypeAdded(id);
  block(matchDeleteIssuetype(id), function () {
    verifyIssuetypeExists(id);
  });
  updateIssuetype(x.id);
  updateIssuetype(x.id);
  const e_upd = waitForIssuetypeUpdated(id);
  block(matchDeleteIssuetype(id), function () {
    verifyIssuetypeUpdated(id);
  });
  deleteIssuetype(x.id);
  const e_del = waitForIssuetypeDeleted(id);
  block(matchAddIssuetype(id), function () {
    verifyIssuetypeDoesNotExist(id);
  });
});

bthread("IssuetypemappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetypemapping(x.id);
  const e_add = waitForIssuetypemappingAdded(id);
  block(matchDeleteIssuetypemapping(id), function () {
    verifyIssuetypemappingExists(id);
  });
  updateIssuetypemapping(x.id);
  updateIssuetypemapping(x.id);
  const e_upd = waitForIssuetypemappingUpdated(id);
  block(matchDeleteIssuetypemapping(id), function () {
    verifyIssuetypemappingUpdated(id);
  });
  deleteIssuetypemapping(x.id);
  const e_del = waitForIssuetypemappingDeleted(id);
  block(matchAddIssuetypemapping(id), function () {
    verifyIssuetypemappingDoesNotExist(id);
  });
});

bthread("IssuetypeschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetypescheme(x.id);
  const e_add = waitForIssuetypeschemeAdded(id);
  block(matchDeleteIssuetypescheme(id), function () {
    verifyIssuetypeschemeExists(id);
  });
  updateIssuetypescheme(x.id);
  updateIssuetypescheme(x.id);
  const e_upd = waitForIssuetypeschemeUpdated(id);
  block(matchDeleteIssuetypescheme(id), function () {
    verifyIssuetypeschemeUpdated(id);
  });
  deleteIssuetypescheme(x.id);
  const e_del = waitForIssuetypeschemeDeleted(id);
  block(matchAddIssuetypescheme(id), function () {
    verifyIssuetypeschemeDoesNotExist(id);
  });
});

bthread("IssuetypescreenschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetypescreenscheme(x.id);
  const e_add = waitForIssuetypescreenschemeAdded(id);
  block(matchDeleteIssuetypescreenscheme(id), function () {
    verifyIssuetypescreenschemeExists(id);
  });
  updateIssuetypescreenscheme(x.id);
  updateIssuetypescreenscheme(x.id);
  const e_upd = waitForIssuetypescreenschemeUpdated(id);
  block(matchDeleteIssuetypescreenscheme(id), function () {
    verifyIssuetypescreenschemeUpdated(id);
  });
  deleteIssuetypescreenscheme(x.id);
  const e_del = waitForIssuetypescreenschemeDeleted(id);
  block(matchAddIssuetypescreenscheme(id), function () {
    verifyIssuetypescreenschemeDoesNotExist(id);
  });
});

bthread("IssuetypeusageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetypeusage(x.id);
  const e_add = waitForIssuetypeusageAdded(id);
  block(matchDeleteIssuetypeusage(id), function () {
    verifyIssuetypeusageExists(id);
  });
  updateIssuetypeusage(x.id);
  updateIssuetypeusage(x.id);
  const e_upd = waitForIssuetypeusageUpdated(id);
  block(matchDeleteIssuetypeusage(id), function () {
    verifyIssuetypeusageUpdated(id);
  });
  deleteIssuetypeusage(x.id);
  const e_del = waitForIssuetypeusageDeleted(id);
  block(matchAddIssuetypeusage(id), function () {
    verifyIssuetypeusageDoesNotExist(id);
  });
});

bthread("ItemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addItem(x.id);
  const e_add = waitForItemAdded(id);
  block(matchDeleteItem(id), function () {
    verifyItemExists(id);
  });
  updateItem(x.id);
  updateItem(x.id);
  const e_upd = waitForItemUpdated(id);
  block(matchDeleteItem(id), function () {
    verifyItemUpdated(id);
  });
  deleteItem(x.id);
  const e_del = waitForItemDeleted(id);
  block(matchAddItem(id), function () {
    verifyItemDoesNotExist(id);
  });
});

bthread("JqlLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJql(x.id);
  const e_add = waitForJqlAdded(id);
  block(matchDeleteJql(id), function () {
    verifyJqlExists(id);
  });
  updateJql(x.id);
  updateJql(x.id);
  const e_upd = waitForJqlUpdated(id);
  block(matchDeleteJql(id), function () {
    verifyJqlUpdated(id);
  });
  deleteJql(x.id);
  const e_del = waitForJqlDeleted(id);
  block(matchAddJql(id), function () {
    verifyJqlDoesNotExist(id);
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

bthread("LabelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabel(x.id);
  const e_add = waitForLabelAdded(id);
  block(matchDeleteLabel(id), function () {
    verifyLabelExists(id);
  });
  updateLabel(x.id);
  updateLabel(x.id);
  const e_upd = waitForLabelUpdated(id);
  block(matchDeleteLabel(id), function () {
    verifyLabelUpdated(id);
  });
  deleteLabel(x.id);
  const e_del = waitForLabelDeleted(id);
  block(matchAddLabel(id), function () {
    verifyLabelDoesNotExist(id);
  });
});

bthread("LevelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLevel(x.id);
  const e_add = waitForLevelAdded(id);
  block(matchDeleteLevel(id), function () {
    verifyLevelExists(id);
  });
  updateLevel(x.id);
  updateLevel(x.id);
  const e_upd = waitForLevelUpdated(id);
  block(matchDeleteLevel(id), function () {
    verifyLevelUpdated(id);
  });
  deleteLevel(x.id);
  const e_del = waitForLevelDeleted(id);
  block(matchAddLevel(id), function () {
    verifyLevelDoesNotExist(id);
  });
});

bthread("LicenseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLicense(x.id);
  const e_add = waitForLicenseAdded(id);
  block(matchDeleteLicense(id), function () {
    verifyLicenseExists(id);
  });
  updateLicense(x.id);
  updateLicense(x.id);
  const e_upd = waitForLicenseUpdated(id);
  block(matchDeleteLicense(id), function () {
    verifyLicenseUpdated(id);
  });
  deleteLicense(x.id);
  const e_del = waitForLicenseDeleted(id);
  block(matchAddLicense(id), function () {
    verifyLicenseDoesNotExist(id);
  });
});

bthread("LimitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLimit(x.id);
  const e_add = waitForLimitAdded(id);
  block(matchDeleteLimit(id), function () {
    verifyLimitExists(id);
  });
  updateLimit(x.id);
  updateLimit(x.id);
  const e_upd = waitForLimitUpdated(id);
  block(matchDeleteLimit(id), function () {
    verifyLimitUpdated(id);
  });
  deleteLimit(x.id);
  const e_del = waitForLimitDeleted(id);
  block(matchAddLimit(id), function () {
    verifyLimitDoesNotExist(id);
  });
});

bthread("ListLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addList(x.id);
  const e_add = waitForListAdded(id);
  block(matchDeleteList(id), function () {
    verifyListExists(id);
  });
  updateList(x.id);
  updateList(x.id);
  const e_upd = waitForListUpdated(id);
  block(matchDeleteList(id), function () {
    verifyListUpdated(id);
  });
  deleteList(x.id);
  const e_del = waitForListDeleted(id);
  block(matchAddList(id), function () {
    verifyListDoesNotExist(id);
  });
});

bthread("LivetemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLivetemplate(x.id);
  const e_add = waitForLivetemplateAdded(id);
  block(matchDeleteLivetemplate(id), function () {
    verifyLivetemplateExists(id);
  });
  updateLivetemplate(x.id);
  updateLivetemplate(x.id);
  const e_upd = waitForLivetemplateUpdated(id);
  block(matchDeleteLivetemplate(id), function () {
    verifyLivetemplateUpdated(id);
  });
  deleteLivetemplate(x.id);
  const e_del = waitForLivetemplateDeleted(id);
  block(matchAddLivetemplate(id), function () {
    verifyLivetemplateDoesNotExist(id);
  });
});

bthread("LocaleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLocale(x.id);
  const e_add = waitForLocaleAdded(id);
  block(matchDeleteLocale(id), function () {
    verifyLocaleExists(id);
  });
  updateLocale(x.id);
  updateLocale(x.id);
  const e_upd = waitForLocaleUpdated(id);
  block(matchDeleteLocale(id), function () {
    verifyLocaleUpdated(id);
  });
  deleteLocale(x.id);
  const e_del = waitForLocaleDeleted(id);
  block(matchAddLocale(id), function () {
    verifyLocaleDoesNotExist(id);
  });
});

bthread("MappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMapping(x.id);
  const e_add = waitForMappingAdded(id);
  block(matchDeleteMapping(id), function () {
    verifyMappingExists(id);
  });
  updateMapping(x.id);
  updateMapping(x.id);
  const e_upd = waitForMappingUpdated(id);
  block(matchDeleteMapping(id), function () {
    verifyMappingUpdated(id);
  });
  deleteMapping(x.id);
  const e_del = waitForMappingDeleted(id);
  block(matchAddMapping(id), function () {
    verifyMappingDoesNotExist(id);
  });
});

bthread("MatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMatch(x.id);
  const e_add = waitForMatchAdded(id);
  block(matchDeleteMatch(id), function () {
    verifyMatchExists(id);
  });
  updateMatch(x.id);
  updateMatch(x.id);
  const e_upd = waitForMatchUpdated(id);
  block(matchDeleteMatch(id), function () {
    verifyMatchUpdated(id);
  });
  deleteMatch(x.id);
  const e_del = waitForMatchDeleted(id);
  block(matchAddMatch(id), function () {
    verifyMatchDoesNotExist(id);
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

bthread("MergetoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMergeto(x.id);
  const e_add = waitForMergetoAdded(id);
  block(matchDeleteMergeto(id), function () {
    verifyMergetoExists(id);
  });
  updateMergeto(x.id);
  updateMergeto(x.id);
  const e_upd = waitForMergetoUpdated(id);
  block(matchDeleteMergeto(id), function () {
    verifyMergetoUpdated(id);
  });
  deleteMergeto(x.id);
  const e_del = waitForMergetoDeleted(id);
  block(matchAddMergeto(id), function () {
    verifyMergetoDoesNotExist(id);
  });
});

bthread("MetaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMeta(x.id);
  const e_add = waitForMetaAdded(id);
  block(matchDeleteMeta(id), function () {
    verifyMetaExists(id);
  });
  updateMeta(x.id);
  updateMeta(x.id);
  const e_upd = waitForMetaUpdated(id);
  block(matchDeleteMeta(id), function () {
    verifyMetaUpdated(id);
  });
  deleteMeta(x.id);
  const e_del = waitForMetaDeleted(id);
  block(matchAddMeta(id), function () {
    verifyMetaDoesNotExist(id);
  });
});

bthread("MigrationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMigration(x.id);
  const e_add = waitForMigrationAdded(id);
  block(matchDeleteMigration(id), function () {
    verifyMigrationExists(id);
  });
  updateMigration(x.id);
  updateMigration(x.id);
  const e_upd = waitForMigrationUpdated(id);
  block(matchDeleteMigration(id), function () {
    verifyMigrationUpdated(id);
  });
  deleteMigration(x.id);
  const e_del = waitForMigrationDeleted(id);
  block(matchAddMigration(id), function () {
    verifyMigrationDoesNotExist(id);
  });
});

bthread("ModuleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModule(x.id);
  const e_add = waitForModuleAdded(id);
  block(matchDeleteModule(id), function () {
    verifyModuleExists(id);
  });
  updateModule(x.id);
  updateModule(x.id);
  const e_upd = waitForModuleUpdated(id);
  block(matchDeleteModule(id), function () {
    verifyModuleUpdated(id);
  });
  deleteModule(x.id);
  const e_del = waitForModuleDeleted(id);
  block(matchAddModule(id), function () {
    verifyModuleDoesNotExist(id);
  });
});

bthread("MoveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMove(x.id);
  const e_add = waitForMoveAdded(id);
  block(matchDeleteMove(id), function () {
    verifyMoveExists(id);
  });
  updateMove(x.id);
  updateMove(x.id);
  const e_upd = waitForMoveUpdated(id);
  block(matchDeleteMove(id), function () {
    verifyMoveUpdated(id);
  });
  deleteMove(x.id);
  const e_del = waitForMoveDeleted(id);
  block(matchAddMove(id), function () {
    verifyMoveDoesNotExist(id);
  });
});

bthread("MultiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMulti(x.id);
  const e_add = waitForMultiAdded(id);
  block(matchDeleteMulti(id), function () {
    verifyMultiExists(id);
  });
  updateMulti(x.id);
  updateMulti(x.id);
  const e_upd = waitForMultiUpdated(id);
  block(matchDeleteMulti(id), function () {
    verifyMultiUpdated(id);
  });
  deleteMulti(x.id);
  const e_del = waitForMultiDeleted(id);
  block(matchAddMulti(id), function () {
    verifyMultiDoesNotExist(id);
  });
});

bthread("MultiprojectsearchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMultiprojectsearch(x.id);
  const e_add = waitForMultiprojectsearchAdded(id);
  block(matchDeleteMultiprojectsearch(id), function () {
    verifyMultiprojectsearchExists(id);
  });
  updateMultiprojectsearch(x.id);
  updateMultiprojectsearch(x.id);
  const e_upd = waitForMultiprojectsearchUpdated(id);
  block(matchDeleteMultiprojectsearch(id), function () {
    verifyMultiprojectsearchUpdated(id);
  });
  deleteMultiprojectsearch(x.id);
  const e_del = waitForMultiprojectsearchDeleted(id);
  block(matchAddMultiprojectsearch(id), function () {
    verifyMultiprojectsearchDoesNotExist(id);
  });
});

bthread("MyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMy(x.id);
  const e_add = waitForMyAdded(id);
  block(matchDeleteMy(id), function () {
    verifyMyExists(id);
  });
  updateMy(x.id);
  updateMy(x.id);
  const e_upd = waitForMyUpdated(id);
  block(matchDeleteMy(id), function () {
    verifyMyUpdated(id);
  });
  deleteMy(x.id);
  const e_del = waitForMyDeleted(id);
  block(matchAddMy(id), function () {
    verifyMyDoesNotExist(id);
  });
});

bthread("MypermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMypermission(x.id);
  const e_add = waitForMypermissionAdded(id);
  block(matchDeleteMypermission(id), function () {
    verifyMypermissionExists(id);
  });
  updateMypermission(x.id);
  updateMypermission(x.id);
  const e_upd = waitForMypermissionUpdated(id);
  block(matchDeleteMypermission(id), function () {
    verifyMypermissionUpdated(id);
  });
  deleteMypermission(x.id);
  const e_del = waitForMypermissionDeleted(id);
  block(matchAddMypermission(id), function () {
    verifyMypermissionDoesNotExist(id);
  });
});

bthread("MypreferenceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMypreference(x.id);
  const e_add = waitForMypreferenceAdded(id);
  block(matchDeleteMypreference(id), function () {
    verifyMypreferenceExists(id);
  });
  updateMypreference(x.id);
  updateMypreference(x.id);
  const e_upd = waitForMypreferenceUpdated(id);
  block(matchDeleteMypreference(id), function () {
    verifyMypreferenceUpdated(id);
  });
  deleteMypreference(x.id);
  const e_del = waitForMypreferenceDeleted(id);
  block(matchAddMypreference(id), function () {
    verifyMypreferenceDoesNotExist(id);
  });
});

bthread("MyselfLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyself(x.id);
  const e_add = waitForMyselfAdded(id);
  block(matchDeleteMyself(id), function () {
    verifyMyselfExists(id);
  });
  updateMyself(x.id);
  updateMyself(x.id);
  const e_upd = waitForMyselfUpdated(id);
  block(matchDeleteMyself(id), function () {
    verifyMyselfUpdated(id);
  });
  deleteMyself(x.id);
  const e_del = waitForMyselfDeleted(id);
  block(matchAddMyself(id), function () {
    verifyMyselfDoesNotExist(id);
  });
});

bthread("Nav4optpropertyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNav4optproperty(x.id);
  const e_add = waitForNav4optpropertyAdded(id);
  block(matchDeleteNav4optproperty(id), function () {
    verifyNav4optpropertyExists(id);
  });
  updateNav4optproperty(x.id);
  updateNav4optproperty(x.id);
  const e_upd = waitForNav4optpropertyUpdated(id);
  block(matchDeleteNav4optproperty(id), function () {
    verifyNav4optpropertyUpdated(id);
  });
  deleteNav4optproperty(x.id);
  const e_del = waitForNav4optpropertyDeleted(id);
  block(matchAddNav4optproperty(id), function () {
    verifyNav4optpropertyDoesNotExist(id);
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

bthread("NotificationschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotificationscheme(x.id);
  const e_add = waitForNotificationschemeAdded(id);
  block(matchDeleteNotificationscheme(id), function () {
    verifyNotificationschemeExists(id);
  });
  updateNotificationscheme(x.id);
  updateNotificationscheme(x.id);
  const e_upd = waitForNotificationschemeUpdated(id);
  block(matchDeleteNotificationscheme(id), function () {
    verifyNotificationschemeUpdated(id);
  });
  deleteNotificationscheme(x.id);
  const e_del = waitForNotificationschemeDeleted(id);
  block(matchAddNotificationscheme(id), function () {
    verifyNotificationschemeDoesNotExist(id);
  });
});

bthread("NotifyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotify(x.id);
  const e_add = waitForNotifyAdded(id);
  block(matchDeleteNotify(id), function () {
    verifyNotifyExists(id);
  });
  updateNotify(x.id);
  updateNotify(x.id);
  const e_upd = waitForNotifyUpdated(id);
  block(matchDeleteNotify(id), function () {
    verifyNotifyUpdated(id);
  });
  deleteNotify(x.id);
  const e_del = waitForNotifyDeleted(id);
  block(matchAddNotify(id), function () {
    verifyNotifyDoesNotExist(id);
  });
});

bthread("OptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOption(x.id);
  const e_add = waitForOptionAdded(id);
  block(matchDeleteOption(id), function () {
    verifyOptionExists(id);
  });
  updateOption(x.id);
  updateOption(x.id);
  const e_upd = waitForOptionUpdated(id);
  block(matchDeleteOption(id), function () {
    verifyOptionUpdated(id);
  });
  deleteOption(x.id);
  const e_del = waitForOptionDeleted(id);
  block(matchAddOption(id), function () {
    verifyOptionDoesNotExist(id);
  });
});

bthread("OwnerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOwner(x.id);
  const e_add = waitForOwnerAdded(id);
  block(matchDeleteOwner(id), function () {
    verifyOwnerExists(id);
  });
  updateOwner(x.id);
  updateOwner(x.id);
  const e_upd = waitForOwnerUpdated(id);
  block(matchDeleteOwner(id), function () {
    verifyOwnerUpdated(id);
  });
  deleteOwner(x.id);
  const e_del = waitForOwnerDeleted(id);
  block(matchAddOwner(id), function () {
    verifyOwnerDoesNotExist(id);
  });
});

bthread("ParseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addParse(x.id);
  const e_add = waitForParseAdded(id);
  block(matchDeleteParse(id), function () {
    verifyParseExists(id);
  });
  updateParse(x.id);
  updateParse(x.id);
  const e_upd = waitForParseUpdated(id);
  block(matchDeleteParse(id), function () {
    verifyParseUpdated(id);
  });
  deleteParse(x.id);
  const e_del = waitForParseDeleted(id);
  block(matchAddParse(id), function () {
    verifyParseDoesNotExist(id);
  });
});

bthread("PdcleanerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPdcleaner(x.id);
  const e_add = waitForPdcleanerAdded(id);
  block(matchDeletePdcleaner(id), function () {
    verifyPdcleanerExists(id);
  });
  updatePdcleaner(x.id);
  updatePdcleaner(x.id);
  const e_upd = waitForPdcleanerUpdated(id);
  block(matchDeletePdcleaner(id), function () {
    verifyPdcleanerUpdated(id);
  });
  deletePdcleaner(x.id);
  const e_del = waitForPdcleanerDeleted(id);
  block(matchAddPdcleaner(id), function () {
    verifyPdcleanerDoesNotExist(id);
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

bthread("PermissionschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermissionscheme(x.id);
  const e_add = waitForPermissionschemeAdded(id);
  block(matchDeletePermissionscheme(id), function () {
    verifyPermissionschemeExists(id);
  });
  updatePermissionscheme(x.id);
  updatePermissionscheme(x.id);
  const e_upd = waitForPermissionschemeUpdated(id);
  block(matchDeletePermissionscheme(id), function () {
    verifyPermissionschemeUpdated(id);
  });
  deletePermissionscheme(x.id);
  const e_del = waitForPermissionschemeDeleted(id);
  block(matchAddPermissionscheme(id), function () {
    verifyPermissionschemeDoesNotExist(id);
  });
});

bthread("PickerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPicker(x.id);
  const e_add = waitForPickerAdded(id);
  block(matchDeletePicker(id), function () {
    verifyPickerExists(id);
  });
  updatePicker(x.id);
  updatePicker(x.id);
  const e_upd = waitForPickerUpdated(id);
  block(matchDeletePicker(id), function () {
    verifyPickerUpdated(id);
  });
  deletePicker(x.id);
  const e_del = waitForPickerDeleted(id);
  block(matchAddPicker(id), function () {
    verifyPickerDoesNotExist(id);
  });
});

bthread("PlanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPlan(x.id);
  const e_add = waitForPlanAdded(id);
  block(matchDeletePlan(id), function () {
    verifyPlanExists(id);
  });
  updatePlan(x.id);
  updatePlan(x.id);
  const e_upd = waitForPlanUpdated(id);
  block(matchDeletePlan(id), function () {
    verifyPlanUpdated(id);
  });
  deletePlan(x.id);
  const e_del = waitForPlanDeleted(id);
  block(matchAddPlan(id), function () {
    verifyPlanDoesNotExist(id);
  });
});

bthread("PlanonlyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPlanonly(x.id);
  const e_add = waitForPlanonlyAdded(id);
  block(matchDeletePlanonly(id), function () {
    verifyPlanonlyExists(id);
  });
  updatePlanonly(x.id);
  updatePlanonly(x.id);
  const e_upd = waitForPlanonlyUpdated(id);
  block(matchDeletePlanonly(id), function () {
    verifyPlanonlyUpdated(id);
  });
  deletePlanonly(x.id);
  const e_del = waitForPlanonlyDeleted(id);
  block(matchAddPlanonly(id), function () {
    verifyPlanonlyDoesNotExist(id);
  });
});

bthread("PreviewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPreview(x.id);
  const e_add = waitForPreviewAdded(id);
  block(matchDeletePreview(id), function () {
    verifyPreviewExists(id);
  });
  updatePreview(x.id);
  updatePreview(x.id);
  const e_upd = waitForPreviewUpdated(id);
  block(matchDeletePreview(id), function () {
    verifyPreviewUpdated(id);
  });
  deletePreview(x.id);
  const e_del = waitForPreviewDeleted(id);
  block(matchAddPreview(id), function () {
    verifyPreviewDoesNotExist(id);
  });
});

bthread("PriorityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPriority(x.id);
  const e_add = waitForPriorityAdded(id);
  block(matchDeletePriority(id), function () {
    verifyPriorityExists(id);
  });
  updatePriority(x.id);
  updatePriority(x.id);
  const e_upd = waitForPriorityUpdated(id);
  block(matchDeletePriority(id), function () {
    verifyPriorityUpdated(id);
  });
  deletePriority(x.id);
  const e_del = waitForPriorityDeleted(id);
  block(matchAddPriority(id), function () {
    verifyPriorityDoesNotExist(id);
  });
});

bthread("PriorityschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPriorityscheme(x.id);
  const e_add = waitForPriorityschemeAdded(id);
  block(matchDeletePriorityscheme(id), function () {
    verifyPriorityschemeExists(id);
  });
  updatePriorityscheme(x.id);
  updatePriorityscheme(x.id);
  const e_upd = waitForPriorityschemeUpdated(id);
  block(matchDeletePriorityscheme(id), function () {
    verifyPriorityschemeUpdated(id);
  });
  deletePriorityscheme(x.id);
  const e_del = waitForPriorityschemeDeleted(id);
  block(matchAddPriorityscheme(id), function () {
    verifyPriorityschemeDoesNotExist(id);
  });
});

bthread("ProductLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProduct(x.id);
  const e_add = waitForProductAdded(id);
  block(matchDeleteProduct(id), function () {
    verifyProductExists(id);
  });
  updateProduct(x.id);
  updateProduct(x.id);
  const e_upd = waitForProductUpdated(id);
  block(matchDeleteProduct(id), function () {
    verifyProductUpdated(id);
  });
  deleteProduct(x.id);
  const e_del = waitForProductDeleted(id);
  block(matchAddProduct(id), function () {
    verifyProductDoesNotExist(id);
  });
});

bthread("ProjectLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProject(x.id);
  const e_add = waitForProjectAdded(id);
  block(matchDeleteProject(id), function () {
    verifyProjectExists(id);
  });
  updateProject(x.id);
  updateProject(x.id);
  const e_upd = waitForProjectUpdated(id);
  block(matchDeleteProject(id), function () {
    verifyProjectUpdated(id);
  });
  deleteProject(x.id);
  const e_del = waitForProjectDeleted(id);
  block(matchAddProject(id), function () {
    verifyProjectDoesNotExist(id);
  });
});

bthread("ProjectcategoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProjectcategory(x.id);
  const e_add = waitForProjectcategoryAdded(id);
  block(matchDeleteProjectcategory(id), function () {
    verifyProjectcategoryExists(id);
  });
  updateProjectcategory(x.id);
  updateProjectcategory(x.id);
  const e_upd = waitForProjectcategoryUpdated(id);
  block(matchDeleteProjectcategory(id), function () {
    verifyProjectcategoryUpdated(id);
  });
  deleteProjectcategory(x.id);
  const e_del = waitForProjectcategoryDeleted(id);
  block(matchAddProjectcategory(id), function () {
    verifyProjectcategoryDoesNotExist(id);
  });
});

bthread("ProjectmappingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProjectmapping(x.id);
  const e_add = waitForProjectmappingAdded(id);
  block(matchDeleteProjectmapping(id), function () {
    verifyProjectmappingExists(id);
  });
  updateProjectmapping(x.id);
  updateProjectmapping(x.id);
  const e_upd = waitForProjectmappingUpdated(id);
  block(matchDeleteProjectmapping(id), function () {
    verifyProjectmappingUpdated(id);
  });
  deleteProjectmapping(x.id);
  const e_del = waitForProjectmappingDeleted(id);
  block(matchAddProjectmapping(id), function () {
    verifyProjectmappingDoesNotExist(id);
  });
});

bthread("ProjecttemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProjecttemplate(x.id);
  const e_add = waitForProjecttemplateAdded(id);
  block(matchDeleteProjecttemplate(id), function () {
    verifyProjecttemplateExists(id);
  });
  updateProjecttemplate(x.id);
  updateProjecttemplate(x.id);
  const e_upd = waitForProjecttemplateUpdated(id);
  block(matchDeleteProjecttemplate(id), function () {
    verifyProjecttemplateUpdated(id);
  });
  deleteProjecttemplate(x.id);
  const e_del = waitForProjecttemplateDeleted(id);
  block(matchAddProjecttemplate(id), function () {
    verifyProjecttemplateDoesNotExist(id);
  });
});

bthread("ProjectusageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProjectusage(x.id);
  const e_add = waitForProjectusageAdded(id);
  block(matchDeleteProjectusage(id), function () {
    verifyProjectusageExists(id);
  });
  updateProjectusage(x.id);
  updateProjectusage(x.id);
  const e_upd = waitForProjectusageUpdated(id);
  block(matchDeleteProjectusage(id), function () {
    verifyProjectusageUpdated(id);
  });
  deleteProjectusage(x.id);
  const e_del = waitForProjectusageDeleted(id);
  block(matchAddProjectusage(id), function () {
    verifyProjectusageDoesNotExist(id);
  });
});

bthread("ProjectvalidateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProjectvalidate(x.id);
  const e_add = waitForProjectvalidateAdded(id);
  block(matchDeleteProjectvalidate(id), function () {
    verifyProjectvalidateExists(id);
  });
  updateProjectvalidate(x.id);
  updateProjectvalidate(x.id);
  const e_upd = waitForProjectvalidateUpdated(id);
  block(matchDeleteProjectvalidate(id), function () {
    verifyProjectvalidateUpdated(id);
  });
  deleteProjectvalidate(x.id);
  const e_del = waitForProjectvalidateDeleted(id);
  block(matchAddProjectvalidate(id), function () {
    verifyProjectvalidateDoesNotExist(id);
  });
});

bthread("PropertyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProperty(x.id);
  const e_add = waitForPropertyAdded(id);
  block(matchDeleteProperty(id), function () {
    verifyPropertyExists(id);
  });
  updateProperty(x.id);
  updateProperty(x.id);
  const e_upd = waitForPropertyUpdated(id);
  block(matchDeleteProperty(id), function () {
    verifyPropertyUpdated(id);
  });
  deleteProperty(x.id);
  const e_del = waitForPropertyDeleted(id);
  block(matchAddProperty(id), function () {
    verifyPropertyDoesNotExist(id);
  });
});

bthread("PublishLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublish(x.id);
  const e_add = waitForPublishAdded(id);
  block(matchDeletePublish(id), function () {
    verifyPublishExists(id);
  });
  updatePublish(x.id);
  updatePublish(x.id);
  const e_upd = waitForPublishUpdated(id);
  block(matchDeletePublish(id), function () {
    verifyPublishUpdated(id);
  });
  deletePublish(x.id);
  const e_del = waitForPublishDeleted(id);
  block(matchAddPublish(id), function () {
    verifyPublishDoesNotExist(id);
  });
});

bthread("QueryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addQuery(x.id);
  const e_add = waitForQueryAdded(id);
  block(matchDeleteQuery(id), function () {
    verifyQueryExists(id);
  });
  updateQuery(x.id);
  updateQuery(x.id);
  const e_upd = waitForQueryUpdated(id);
  block(matchDeleteQuery(id), function () {
    verifyQueryUpdated(id);
  });
  deleteQuery(x.id);
  const e_del = waitForQueryDeleted(id);
  block(matchAddQuery(id), function () {
    verifyQueryDoesNotExist(id);
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

bthread("RawLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRaw(x.id);
  const e_add = waitForRawAdded(id);
  block(matchDeleteRaw(id), function () {
    verifyRawExists(id);
  });
  updateRaw(x.id);
  updateRaw(x.id);
  const e_upd = waitForRawUpdated(id);
  block(matchDeleteRaw(id), function () {
    verifyRawUpdated(id);
  });
  deleteRaw(x.id);
  const e_del = waitForRawDeleted(id);
  block(matchAddRaw(id), function () {
    verifyRawDoesNotExist(id);
  });
});

bthread("ReadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRead(x.id);
  const e_add = waitForReadAdded(id);
  block(matchDeleteRead(id), function () {
    verifyReadExists(id);
  });
  updateRead(x.id);
  updateRead(x.id);
  const e_upd = waitForReadUpdated(id);
  block(matchDeleteRead(id), function () {
    verifyReadUpdated(id);
  });
  deleteRead(x.id);
  const e_del = waitForReadDeleted(id);
  block(matchAddRead(id), function () {
    verifyReadDoesNotExist(id);
  });
});

bthread("RecentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRecent(x.id);
  const e_add = waitForRecentAdded(id);
  block(matchDeleteRecent(id), function () {
    verifyRecentExists(id);
  });
  updateRecent(x.id);
  updateRecent(x.id);
  const e_upd = waitForRecentUpdated(id);
  block(matchDeleteRecent(id), function () {
    verifyRecentUpdated(id);
  });
  deleteRecent(x.id);
  const e_del = waitForRecentDeleted(id);
  block(matchAddRecent(id), function () {
    verifyRecentDoesNotExist(id);
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

bthread("RedactLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRedact(x.id);
  const e_add = waitForRedactAdded(id);
  block(matchDeleteRedact(id), function () {
    verifyRedactExists(id);
  });
  updateRedact(x.id);
  updateRedact(x.id);
  const e_upd = waitForRedactUpdated(id);
  block(matchDeleteRedact(id), function () {
    verifyRedactUpdated(id);
  });
  deleteRedact(x.id);
  const e_del = waitForRedactDeleted(id);
  block(matchAddRedact(id), function () {
    verifyRedactDoesNotExist(id);
  });
});

bthread("RefreshLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRefresh(x.id);
  const e_add = waitForRefreshAdded(id);
  block(matchDeleteRefresh(id), function () {
    verifyRefreshExists(id);
  });
  updateRefresh(x.id);
  updateRefresh(x.id);
  const e_upd = waitForRefreshUpdated(id);
  block(matchDeleteRefresh(id), function () {
    verifyRefreshUpdated(id);
  });
  deleteRefresh(x.id);
  const e_del = waitForRefreshDeleted(id);
  block(matchAddRefresh(id), function () {
    verifyRefreshDoesNotExist(id);
  });
});

bthread("RelatedissuecountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRelatedissuecount(x.id);
  const e_add = waitForRelatedissuecountAdded(id);
  block(matchDeleteRelatedissuecount(id), function () {
    verifyRelatedissuecountExists(id);
  });
  updateRelatedissuecount(x.id);
  updateRelatedissuecount(x.id);
  const e_upd = waitForRelatedissuecountUpdated(id);
  block(matchDeleteRelatedissuecount(id), function () {
    verifyRelatedissuecountUpdated(id);
  });
  deleteRelatedissuecount(x.id);
  const e_del = waitForRelatedissuecountDeleted(id);
  block(matchAddRelatedissuecount(id), function () {
    verifyRelatedissuecountDoesNotExist(id);
  });
});

bthread("RelatedworkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRelatedwork(x.id);
  const e_add = waitForRelatedworkAdded(id);
  block(matchDeleteRelatedwork(id), function () {
    verifyRelatedworkExists(id);
  });
  updateRelatedwork(x.id);
  updateRelatedwork(x.id);
  const e_upd = waitForRelatedworkUpdated(id);
  block(matchDeleteRelatedwork(id), function () {
    verifyRelatedworkUpdated(id);
  });
  deleteRelatedwork(x.id);
  const e_del = waitForRelatedworkDeleted(id);
  block(matchAddRelatedwork(id), function () {
    verifyRelatedworkDoesNotExist(id);
  });
});

bthread("RemotelinkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemotelink(x.id);
  const e_add = waitForRemotelinkAdded(id);
  block(matchDeleteRemotelink(id), function () {
    verifyRemotelinkExists(id);
  });
  updateRemotelink(x.id);
  updateRemotelink(x.id);
  const e_upd = waitForRemotelinkUpdated(id);
  block(matchDeleteRemotelink(id), function () {
    verifyRemotelinkUpdated(id);
  });
  deleteRemotelink(x.id);
  const e_del = waitForRemotelinkDeleted(id);
  block(matchAddRemotelink(id), function () {
    verifyRemotelinkDoesNotExist(id);
  });
});

bthread("RemoveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemove(x.id);
  const e_add = waitForRemoveAdded(id);
  block(matchDeleteRemove(id), function () {
    verifyRemoveExists(id);
  });
  updateRemove(x.id);
  updateRemove(x.id);
  const e_upd = waitForRemoveUpdated(id);
  block(matchDeleteRemove(id), function () {
    verifyRemoveUpdated(id);
  });
  deleteRemove(x.id);
  const e_del = waitForRemoveDeleted(id);
  block(matchAddRemove(id), function () {
    verifyRemoveDoesNotExist(id);
  });
});

bthread("RemoveandswapLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemoveandswap(x.id);
  const e_add = waitForRemoveandswapAdded(id);
  block(matchDeleteRemoveandswap(id), function () {
    verifyRemoveandswapExists(id);
  });
  updateRemoveandswap(x.id);
  updateRemoveandswap(x.id);
  const e_upd = waitForRemoveandswapUpdated(id);
  block(matchDeleteRemoveandswap(id), function () {
    verifyRemoveandswapUpdated(id);
  });
  deleteRemoveandswap(x.id);
  const e_del = waitForRemoveandswapDeleted(id);
  block(matchAddRemoveandswap(id), function () {
    verifyRemoveandswapDoesNotExist(id);
  });
});

bthread("RemovetemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemovetemplate(x.id);
  const e_add = waitForRemovetemplateAdded(id);
  block(matchDeleteRemovetemplate(id), function () {
    verifyRemovetemplateExists(id);
  });
  updateRemovetemplate(x.id);
  updateRemovetemplate(x.id);
  const e_upd = waitForRemovetemplateUpdated(id);
  block(matchDeleteRemovetemplate(id), function () {
    verifyRemovetemplateUpdated(id);
  });
  deleteRemovetemplate(x.id);
  const e_del = waitForRemovetemplateDeleted(id);
  block(matchAddRemovetemplate(id), function () {
    verifyRemovetemplateDoesNotExist(id);
  });
});

bthread("ReportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReport(x.id);
  const e_add = waitForReportAdded(id);
  block(matchDeleteReport(id), function () {
    verifyReportExists(id);
  });
  updateReport(x.id);
  updateReport(x.id);
  const e_upd = waitForReportUpdated(id);
  block(matchDeleteReport(id), function () {
    verifyReportUpdated(id);
  });
  deleteReport(x.id);
  const e_del = waitForReportDeleted(id);
  block(matchAddReport(id), function () {
    verifyReportDoesNotExist(id);
  });
});

bthread("ResolutionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResolution(x.id);
  const e_add = waitForResolutionAdded(id);
  block(matchDeleteResolution(id), function () {
    verifyResolutionExists(id);
  });
  updateResolution(x.id);
  updateResolution(x.id);
  const e_upd = waitForResolutionUpdated(id);
  block(matchDeleteResolution(id), function () {
    verifyResolutionUpdated(id);
  });
  deleteResolution(x.id);
  const e_del = waitForResolutionDeleted(id);
  block(matchAddResolution(id), function () {
    verifyResolutionDoesNotExist(id);
  });
});

bthread("RestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRest(x.id);
  const e_add = waitForRestAdded(id);
  block(matchDeleteRest(id), function () {
    verifyRestExists(id);
  });
  updateRest(x.id);
  updateRest(x.id);
  const e_upd = waitForRestUpdated(id);
  block(matchDeleteRest(id), function () {
    verifyRestUpdated(id);
  });
  deleteRest(x.id);
  const e_del = waitForRestDeleted(id);
  block(matchAddRest(id), function () {
    verifyRestDoesNotExist(id);
  });
});

bthread("RestoreLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRestore(x.id);
  const e_add = waitForRestoreAdded(id);
  block(matchDeleteRestore(id), function () {
    verifyRestoreExists(id);
  });
  updateRestore(x.id);
  updateRestore(x.id);
  const e_upd = waitForRestoreUpdated(id);
  block(matchDeleteRestore(id), function () {
    verifyRestoreUpdated(id);
  });
  deleteRestore(x.id);
  const e_del = waitForRestoreDeleted(id);
  block(matchAddRestore(id), function () {
    verifyRestoreDoesNotExist(id);
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

bthread("RoledetailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRoledetail(x.id);
  const e_add = waitForRoledetailAdded(id);
  block(matchDeleteRoledetail(id), function () {
    verifyRoledetailExists(id);
  });
  updateRoledetail(x.id);
  updateRoledetail(x.id);
  const e_upd = waitForRoledetailUpdated(id);
  block(matchDeleteRoledetail(id), function () {
    verifyRoledetailUpdated(id);
  });
  deleteRoledetail(x.id);
  const e_del = waitForRoledetailDeleted(id);
  block(matchAddRoledetail(id), function () {
    verifyRoledetailDoesNotExist(id);
  });
});

bthread("RuleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRule(x.id);
  const e_add = waitForRuleAdded(id);
  block(matchDeleteRule(id), function () {
    verifyRuleExists(id);
  });
  updateRule(x.id);
  updateRule(x.id);
  const e_upd = waitForRuleUpdated(id);
  block(matchDeleteRule(id), function () {
    verifyRuleUpdated(id);
  });
  deleteRule(x.id);
  const e_del = waitForRuleDeleted(id);
  block(matchAddRule(id), function () {
    verifyRuleDoesNotExist(id);
  });
});

bthread("SanitizeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSanitize(x.id);
  const e_add = waitForSanitizeAdded(id);
  block(matchDeleteSanitize(id), function () {
    verifySanitizeExists(id);
  });
  updateSanitize(x.id);
  updateSanitize(x.id);
  const e_upd = waitForSanitizeUpdated(id);
  block(matchDeleteSanitize(id), function () {
    verifySanitizeUpdated(id);
  });
  deleteSanitize(x.id);
  const e_del = waitForSanitizeDeleted(id);
  block(matchAddSanitize(id), function () {
    verifySanitizeDoesNotExist(id);
  });
});

bthread("SavetemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSavetemplate(x.id);
  const e_add = waitForSavetemplateAdded(id);
  block(matchDeleteSavetemplate(id), function () {
    verifySavetemplateExists(id);
  });
  updateSavetemplate(x.id);
  updateSavetemplate(x.id);
  const e_upd = waitForSavetemplateUpdated(id);
  block(matchDeleteSavetemplate(id), function () {
    verifySavetemplateUpdated(id);
  });
  deleteSavetemplate(x.id);
  const e_del = waitForSavetemplateDeleted(id);
  block(matchAddSavetemplate(id), function () {
    verifySavetemplateDoesNotExist(id);
  });
});

bthread("ScreenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScreen(x.id);
  const e_add = waitForScreenAdded(id);
  block(matchDeleteScreen(id), function () {
    verifyScreenExists(id);
  });
  updateScreen(x.id);
  updateScreen(x.id);
  const e_upd = waitForScreenUpdated(id);
  block(matchDeleteScreen(id), function () {
    verifyScreenUpdated(id);
  });
  deleteScreen(x.id);
  const e_del = waitForScreenDeleted(id);
  block(matchAddScreen(id), function () {
    verifyScreenDoesNotExist(id);
  });
});

bthread("ScreenschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScreenscheme(x.id);
  const e_add = waitForScreenschemeAdded(id);
  block(matchDeleteScreenscheme(id), function () {
    verifyScreenschemeExists(id);
  });
  updateScreenscheme(x.id);
  updateScreenscheme(x.id);
  const e_upd = waitForScreenschemeUpdated(id);
  block(matchDeleteScreenscheme(id), function () {
    verifyScreenschemeUpdated(id);
  });
  deleteScreenscheme(x.id);
  const e_del = waitForScreenschemeDeleted(id);
  block(matchAddScreenscheme(id), function () {
    verifyScreenschemeDoesNotExist(id);
  });
});

bthread("SearchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSearch(x.id);
  const e_add = waitForSearchAdded(id);
  block(matchDeleteSearch(id), function () {
    verifySearchExists(id);
  });
  updateSearch(x.id);
  updateSearch(x.id);
  const e_upd = waitForSearchUpdated(id);
  block(matchDeleteSearch(id), function () {
    verifySearchUpdated(id);
  });
  deleteSearch(x.id);
  const e_del = waitForSearchDeleted(id);
  block(matchAddSearch(id), function () {
    verifySearchDoesNotExist(id);
  });
});

bthread("SecuritylevelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSecuritylevel(x.id);
  const e_add = waitForSecuritylevelAdded(id);
  block(matchDeleteSecuritylevel(id), function () {
    verifySecuritylevelExists(id);
  });
  updateSecuritylevel(x.id);
  updateSecuritylevel(x.id);
  const e_upd = waitForSecuritylevelUpdated(id);
  block(matchDeleteSecuritylevel(id), function () {
    verifySecuritylevelUpdated(id);
  });
  deleteSecuritylevel(x.id);
  const e_del = waitForSecuritylevelDeleted(id);
  block(matchAddSecuritylevel(id), function () {
    verifySecuritylevelDoesNotExist(id);
  });
});

bthread("ServerinfoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addServerinfo(x.id);
  const e_add = waitForServerinfoAdded(id);
  block(matchDeleteServerinfo(id), function () {
    verifyServerinfoExists(id);
  });
  updateServerinfo(x.id);
  updateServerinfo(x.id);
  const e_upd = waitForServerinfoUpdated(id);
  block(matchDeleteServerinfo(id), function () {
    verifyServerinfoUpdated(id);
  });
  deleteServerinfo(x.id);
  const e_del = waitForServerinfoDeleted(id);
  block(matchAddServerinfo(id), function () {
    verifyServerinfoDoesNotExist(id);
  });
});

bthread("ServiceregistryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addServiceregistry(x.id);
  const e_add = waitForServiceregistryAdded(id);
  block(matchDeleteServiceregistry(id), function () {
    verifyServiceregistryExists(id);
  });
  updateServiceregistry(x.id);
  updateServiceregistry(x.id);
  const e_upd = waitForServiceregistryUpdated(id);
  block(matchDeleteServiceregistry(id), function () {
    verifyServiceregistryUpdated(id);
  });
  deleteServiceregistry(x.id);
  const e_del = waitForServiceregistryDeleted(id);
  block(matchAddServiceregistry(id), function () {
    verifyServiceregistryDoesNotExist(id);
  });
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSetting(x.id);
  const e_add = waitForSettingAdded(id);
  block(matchDeleteSetting(id), function () {
    verifySettingExists(id);
  });
  updateSetting(x.id);
  updateSetting(x.id);
  const e_upd = waitForSettingUpdated(id);
  block(matchDeleteSetting(id), function () {
    verifySettingUpdated(id);
  });
  deleteSetting(x.id);
  const e_del = waitForSettingDeleted(id);
  block(matchAddSetting(id), function () {
    verifySettingDoesNotExist(id);
  });
});

bthread("StatuLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStatu(x.id);
  const e_add = waitForStatuAdded(id);
  block(matchDeleteStatu(id), function () {
    verifyStatuExists(id);
  });
  updateStatu(x.id);
  updateStatu(x.id);
  const e_upd = waitForStatuUpdated(id);
  block(matchDeleteStatu(id), function () {
    verifyStatuUpdated(id);
  });
  deleteStatu(x.id);
  const e_del = waitForStatuDeleted(id);
  block(matchAddStatu(id), function () {
    verifyStatuDoesNotExist(id);
  });
});

bthread("StatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStatus(x.id);
  const e_add = waitForStatusAdded(id);
  block(matchDeleteStatus(id), function () {
    verifyStatusExists(id);
  });
  updateStatus(x.id);
  updateStatus(x.id);
  const e_upd = waitForStatusUpdated(id);
  block(matchDeleteStatus(id), function () {
    verifyStatusUpdated(id);
  });
  deleteStatus(x.id);
  const e_del = waitForStatusDeleted(id);
  block(matchAddStatus(id), function () {
    verifyStatusDoesNotExist(id);
  });
});

bthread("StatuscategoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStatuscategory(x.id);
  const e_add = waitForStatuscategoryAdded(id);
  block(matchDeleteStatuscategory(id), function () {
    verifyStatuscategoryExists(id);
  });
  updateStatuscategory(x.id);
  updateStatuscategory(x.id);
  const e_upd = waitForStatuscategoryUpdated(id);
  block(matchDeleteStatuscategory(id), function () {
    verifyStatuscategoryUpdated(id);
  });
  deleteStatuscategory(x.id);
  const e_del = waitForStatuscategoryDeleted(id);
  block(matchAddStatuscategory(id), function () {
    verifyStatuscategoryDoesNotExist(id);
  });
});

bthread("SuggestionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSuggestion(x.id);
  const e_add = waitForSuggestionAdded(id);
  block(matchDeleteSuggestion(id), function () {
    verifySuggestionExists(id);
  });
  updateSuggestion(x.id);
  updateSuggestion(x.id);
  const e_upd = waitForSuggestionUpdated(id);
  block(matchDeleteSuggestion(id), function () {
    verifySuggestionUpdated(id);
  });
  deleteSuggestion(x.id);
  const e_del = waitForSuggestionDeleted(id);
  block(matchAddSuggestion(id), function () {
    verifySuggestionDoesNotExist(id);
  });
});

bthread("SystemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSystem(x.id);
  const e_add = waitForSystemAdded(id);
  block(matchDeleteSystem(id), function () {
    verifySystemExists(id);
  });
  updateSystem(x.id);
  updateSystem(x.id);
  const e_upd = waitForSystemUpdated(id);
  block(matchDeleteSystem(id), function () {
    verifySystemUpdated(id);
  });
  deleteSystem(x.id);
  const e_del = waitForSystemDeleted(id);
  block(matchAddSystem(id), function () {
    verifySystemDoesNotExist(id);
  });
});

bthread("TabLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTab(x.id);
  const e_add = waitForTabAdded(id);
  block(matchDeleteTab(id), function () {
    verifyTabExists(id);
  });
  updateTab(x.id);
  updateTab(x.id);
  const e_upd = waitForTabUpdated(id);
  block(matchDeleteTab(id), function () {
    verifyTabUpdated(id);
  });
  deleteTab(x.id);
  const e_del = waitForTabDeleted(id);
  block(matchAddTab(id), function () {
    verifyTabDoesNotExist(id);
  });
});

bthread("TaskLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTask(x.id);
  const e_add = waitForTaskAdded(id);
  block(matchDeleteTask(id), function () {
    verifyTaskExists(id);
  });
  updateTask(x.id);
  updateTask(x.id);
  const e_upd = waitForTaskUpdated(id);
  block(matchDeleteTask(id), function () {
    verifyTaskUpdated(id);
  });
  deleteTask(x.id);
  const e_del = waitForTaskDeleted(id);
  block(matchAddTask(id), function () {
    verifyTaskDoesNotExist(id);
  });
});

bthread("TeamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTeam(x.id);
  const e_add = waitForTeamAdded(id);
  block(matchDeleteTeam(id), function () {
    verifyTeamExists(id);
  });
  updateTeam(x.id);
  updateTeam(x.id);
  const e_upd = waitForTeamUpdated(id);
  block(matchDeleteTeam(id), function () {
    verifyTeamUpdated(id);
  });
  deleteTeam(x.id);
  const e_del = waitForTeamDeleted(id);
  block(matchAddTeam(id), function () {
    verifyTeamDoesNotExist(id);
  });
});

bthread("ThumbnailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addThumbnail(x.id);
  const e_add = waitForThumbnailAdded(id);
  block(matchDeleteThumbnail(id), function () {
    verifyThumbnailExists(id);
  });
  updateThumbnail(x.id);
  updateThumbnail(x.id);
  const e_upd = waitForThumbnailUpdated(id);
  block(matchDeleteThumbnail(id), function () {
    verifyThumbnailUpdated(id);
  });
  deleteThumbnail(x.id);
  const e_del = waitForThumbnailDeleted(id);
  block(matchAddThumbnail(id), function () {
    verifyThumbnailDoesNotExist(id);
  });
});

bthread("TimetrackingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTimetracking(x.id);
  const e_add = waitForTimetrackingAdded(id);
  block(matchDeleteTimetracking(id), function () {
    verifyTimetrackingExists(id);
  });
  updateTimetracking(x.id);
  updateTimetracking(x.id);
  const e_upd = waitForTimetrackingUpdated(id);
  block(matchDeleteTimetracking(id), function () {
    verifyTimetrackingUpdated(id);
  });
  deleteTimetracking(x.id);
  const e_del = waitForTimetrackingDeleted(id);
  block(matchAddTimetracking(id), function () {
    verifyTimetrackingDoesNotExist(id);
  });
});

bthread("TransitionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTransition(x.id);
  const e_add = waitForTransitionAdded(id);
  block(matchDeleteTransition(id), function () {
    verifyTransitionExists(id);
  });
  updateTransition(x.id);
  updateTransition(x.id);
  const e_upd = waitForTransitionUpdated(id);
  block(matchDeleteTransition(id), function () {
    verifyTransitionUpdated(id);
  });
  deleteTransition(x.id);
  const e_del = waitForTransitionDeleted(id);
  block(matchAddTransition(id), function () {
    verifyTransitionDoesNotExist(id);
  });
});

bthread("TrashLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTrash(x.id);
  const e_add = waitForTrashAdded(id);
  block(matchDeleteTrash(id), function () {
    verifyTrashExists(id);
  });
  updateTrash(x.id);
  updateTrash(x.id);
  const e_upd = waitForTrashUpdated(id);
  block(matchDeleteTrash(id), function () {
    verifyTrashUpdated(id);
  });
  deleteTrash(x.id);
  const e_del = waitForTrashDeleted(id);
  block(matchAddTrash(id), function () {
    verifyTrashDoesNotExist(id);
  });
});

bthread("TrashedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTrashed(x.id);
  const e_add = waitForTrashedAdded(id);
  block(matchDeleteTrashed(id), function () {
    verifyTrashedExists(id);
  });
  updateTrashed(x.id);
  updateTrashed(x.id);
  const e_upd = waitForTrashedUpdated(id);
  block(matchDeleteTrashed(id), function () {
    verifyTrashedUpdated(id);
  });
  deleteTrashed(x.id);
  const e_del = waitForTrashedDeleted(id);
  block(matchAddTrashed(id), function () {
    verifyTrashedDoesNotExist(id);
  });
});

bthread("TypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addType(x.id);
  const e_add = waitForTypeAdded(id);
  block(matchDeleteType(id), function () {
    verifyTypeExists(id);
  });
  updateType(x.id);
  updateType(x.id);
  const e_upd = waitForTypeUpdated(id);
  block(matchDeleteType(id), function () {
    verifyTypeUpdated(id);
  });
  deleteType(x.id);
  const e_del = waitForTypeDeleted(id);
  block(matchAddType(id), function () {
    verifyTypeDoesNotExist(id);
  });
});

bthread("UimodificationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUimodification(x.id);
  const e_add = waitForUimodificationAdded(id);
  block(matchDeleteUimodification(id), function () {
    verifyUimodificationExists(id);
  });
  updateUimodification(x.id);
  updateUimodification(x.id);
  const e_upd = waitForUimodificationUpdated(id);
  block(matchDeleteUimodification(id), function () {
    verifyUimodificationUpdated(id);
  });
  deleteUimodification(x.id);
  const e_del = waitForUimodificationDeleted(id);
  block(matchAddUimodification(id), function () {
    verifyUimodificationDoesNotExist(id);
  });
});

bthread("UnarchiveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUnarchive(x.id);
  const e_add = waitForUnarchiveAdded(id);
  block(matchDeleteUnarchive(id), function () {
    verifyUnarchiveExists(id);
  });
  updateUnarchive(x.id);
  updateUnarchive(x.id);
  const e_upd = waitForUnarchiveUpdated(id);
  block(matchDeleteUnarchive(id), function () {
    verifyUnarchiveUpdated(id);
  });
  deleteUnarchive(x.id);
  const e_del = waitForUnarchiveDeleted(id);
  block(matchAddUnarchive(id), function () {
    verifyUnarchiveDoesNotExist(id);
  });
});

bthread("UniversalavatarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUniversalavatar(x.id);
  const e_add = waitForUniversalavatarAdded(id);
  block(matchDeleteUniversalavatar(id), function () {
    verifyUniversalavatarExists(id);
  });
  updateUniversalavatar(x.id);
  updateUniversalavatar(x.id);
  const e_upd = waitForUniversalavatarUpdated(id);
  block(matchDeleteUniversalavatar(id), function () {
    verifyUniversalavatarUpdated(id);
  });
  deleteUniversalavatar(x.id);
  const e_del = waitForUniversalavatarDeleted(id);
  block(matchAddUniversalavatar(id), function () {
    verifyUniversalavatarDoesNotExist(id);
  });
});

bthread("UnresolvedissuecountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUnresolvedissuecount(x.id);
  const e_add = waitForUnresolvedissuecountAdded(id);
  block(matchDeleteUnresolvedissuecount(id), function () {
    verifyUnresolvedissuecountExists(id);
  });
  updateUnresolvedissuecount(x.id);
  updateUnresolvedissuecount(x.id);
  const e_upd = waitForUnresolvedissuecountUpdated(id);
  block(matchDeleteUnresolvedissuecount(id), function () {
    verifyUnresolvedissuecountUpdated(id);
  });
  deleteUnresolvedissuecount(x.id);
  const e_del = waitForUnresolvedissuecountDeleted(id);
  block(matchAddUnresolvedissuecount(id), function () {
    verifyUnresolvedissuecountDoesNotExist(id);
  });
});

bthread("UnwatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUnwatch(x.id);
  const e_add = waitForUnwatchAdded(id);
  block(matchDeleteUnwatch(id), function () {
    verifyUnwatchExists(id);
  });
  updateUnwatch(x.id);
  updateUnwatch(x.id);
  const e_upd = waitForUnwatchUpdated(id);
  block(matchDeleteUnwatch(id), function () {
    verifyUnwatchUpdated(id);
  });
  deleteUnwatch(x.id);
  const e_del = waitForUnwatchDeleted(id);
  block(matchAddUnwatch(id), function () {
    verifyUnwatchDoesNotExist(id);
  });
});

bthread("UpdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUpdate(x.id);
  const e_add = waitForUpdateAdded(id);
  block(matchDeleteUpdate(id), function () {
    verifyUpdateExists(id);
  });
  updateUpdate(x.id);
  updateUpdate(x.id);
  const e_upd = waitForUpdateUpdated(id);
  block(matchDeleteUpdate(id), function () {
    verifyUpdateUpdated(id);
  });
  deleteUpdate(x.id);
  const e_del = waitForUpdateDeleted(id);
  block(matchAddUpdate(id), function () {
    verifyUpdateDoesNotExist(id);
  });
});

bthread("UpdatedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUpdated(x.id);
  const e_add = waitForUpdatedAdded(id);
  block(matchDeleteUpdated(id), function () {
    verifyUpdatedExists(id);
  });
  updateUpdated(x.id);
  updateUpdated(x.id);
  const e_upd = waitForUpdatedUpdated(id);
  block(matchDeleteUpdated(id), function () {
    verifyUpdatedUpdated(id);
  });
  deleteUpdated(x.id);
  const e_del = waitForUpdatedDeleted(id);
  block(matchAddUpdated(id), function () {
    verifyUpdatedDoesNotExist(id);
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

bthread("ValidationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addValidation(x.id);
  const e_add = waitForValidationAdded(id);
  block(matchDeleteValidation(id), function () {
    verifyValidationExists(id);
  });
  updateValidation(x.id);
  updateValidation(x.id);
  const e_upd = waitForValidationUpdated(id);
  block(matchDeleteValidation(id), function () {
    verifyValidationUpdated(id);
  });
  deleteValidation(x.id);
  const e_del = waitForValidationDeleted(id);
  block(matchAddValidation(id), function () {
    verifyValidationDoesNotExist(id);
  });
});

bthread("ValidprojectkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addValidprojectkey(x.id);
  const e_add = waitForValidprojectkeyAdded(id);
  block(matchDeleteValidprojectkey(id), function () {
    verifyValidprojectkeyExists(id);
  });
  updateValidprojectkey(x.id);
  updateValidprojectkey(x.id);
  const e_upd = waitForValidprojectkeyUpdated(id);
  block(matchDeleteValidprojectkey(id), function () {
    verifyValidprojectkeyUpdated(id);
  });
  deleteValidprojectkey(x.id);
  const e_del = waitForValidprojectkeyDeleted(id);
  block(matchAddValidprojectkey(id), function () {
    verifyValidprojectkeyDoesNotExist(id);
  });
});

bthread("ValidprojectnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addValidprojectname(x.id);
  const e_add = waitForValidprojectnameAdded(id);
  block(matchDeleteValidprojectname(id), function () {
    verifyValidprojectnameExists(id);
  });
  updateValidprojectname(x.id);
  updateValidprojectname(x.id);
  const e_upd = waitForValidprojectnameUpdated(id);
  block(matchDeleteValidprojectname(id), function () {
    verifyValidprojectnameUpdated(id);
  });
  deleteValidprojectname(x.id);
  const e_del = waitForValidprojectnameDeleted(id);
  block(matchAddValidprojectname(id), function () {
    verifyValidprojectnameDoesNotExist(id);
  });
});

bthread("ValueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addValue(x.id);
  const e_add = waitForValueAdded(id);
  block(matchDeleteValue(id), function () {
    verifyValueExists(id);
  });
  updateValue(x.id);
  updateValue(x.id);
  const e_upd = waitForValueUpdated(id);
  block(matchDeleteValue(id), function () {
    verifyValueUpdated(id);
  });
  deleteValue(x.id);
  const e_del = waitForValueDeleted(id);
  block(matchAddValue(id), function () {
    verifyValueDoesNotExist(id);
  });
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVersion(x.id);
  const e_add = waitForVersionAdded(id);
  block(matchDeleteVersion(id), function () {
    verifyVersionExists(id);
  });
  updateVersion(x.id);
  updateVersion(x.id);
  const e_upd = waitForVersionUpdated(id);
  block(matchDeleteVersion(id), function () {
    verifyVersionUpdated(id);
  });
  deleteVersion(x.id);
  const e_del = waitForVersionDeleted(id);
  block(matchAddVersion(id), function () {
    verifyVersionDoesNotExist(id);
  });
});

bthread("ViewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addView(x.id);
  const e_add = waitForViewAdded(id);
  block(matchDeleteView(id), function () {
    verifyViewExists(id);
  });
  updateView(x.id);
  updateView(x.id);
  const e_upd = waitForViewUpdated(id);
  block(matchDeleteView(id), function () {
    verifyViewUpdated(id);
  });
  deleteView(x.id);
  const e_del = waitForViewDeleted(id);
  block(matchAddView(id), function () {
    verifyViewDoesNotExist(id);
  });
});

bthread("ViewissueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addViewissue(x.id);
  const e_add = waitForViewissueAdded(id);
  block(matchDeleteViewissue(id), function () {
    verifyViewissueExists(id);
  });
  updateViewissue(x.id);
  updateViewissue(x.id);
  const e_upd = waitForViewissueUpdated(id);
  block(matchDeleteViewissue(id), function () {
    verifyViewissueUpdated(id);
  });
  deleteViewissue(x.id);
  const e_del = waitForViewissueDeleted(id);
  block(matchAddViewissue(id), function () {
    verifyViewissueDoesNotExist(id);
  });
});

bthread("VoteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVote(x.id);
  const e_add = waitForVoteAdded(id);
  block(matchDeleteVote(id), function () {
    verifyVoteExists(id);
  });
  updateVote(x.id);
  updateVote(x.id);
  const e_upd = waitForVoteUpdated(id);
  block(matchDeleteVote(id), function () {
    verifyVoteUpdated(id);
  });
  deleteVote(x.id);
  const e_del = waitForVoteDeleted(id);
  block(matchAddVote(id), function () {
    verifyVoteDoesNotExist(id);
  });
});

bthread("WatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWatch(x.id);
  const e_add = waitForWatchAdded(id);
  block(matchDeleteWatch(id), function () {
    verifyWatchExists(id);
  });
  updateWatch(x.id);
  updateWatch(x.id);
  const e_upd = waitForWatchUpdated(id);
  block(matchDeleteWatch(id), function () {
    verifyWatchUpdated(id);
  });
  deleteWatch(x.id);
  const e_del = waitForWatchDeleted(id);
  block(matchAddWatch(id), function () {
    verifyWatchDoesNotExist(id);
  });
});

bthread("WatcherLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWatcher(x.id);
  const e_add = waitForWatcherAdded(id);
  block(matchDeleteWatcher(id), function () {
    verifyWatcherExists(id);
  });
  updateWatcher(x.id);
  updateWatcher(x.id);
  const e_upd = waitForWatcherUpdated(id);
  block(matchDeleteWatcher(id), function () {
    verifyWatcherUpdated(id);
  });
  deleteWatcher(x.id);
  const e_del = waitForWatcherDeleted(id);
  block(matchAddWatcher(id), function () {
    verifyWatcherDoesNotExist(id);
  });
});

bthread("WatchingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWatching(x.id);
  const e_add = waitForWatchingAdded(id);
  block(matchDeleteWatching(id), function () {
    verifyWatchingExists(id);
  });
  updateWatching(x.id);
  updateWatching(x.id);
  const e_upd = waitForWatchingUpdated(id);
  block(matchDeleteWatching(id), function () {
    verifyWatchingUpdated(id);
  });
  deleteWatching(x.id);
  const e_del = waitForWatchingDeleted(id);
  block(matchAddWatching(id), function () {
    verifyWatchingDoesNotExist(id);
  });
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhook(x.id);
  const e_add = waitForWebhookAdded(id);
  block(matchDeleteWebhook(id), function () {
    verifyWebhookExists(id);
  });
  updateWebhook(x.id);
  updateWebhook(x.id);
  const e_upd = waitForWebhookUpdated(id);
  block(matchDeleteWebhook(id), function () {
    verifyWebhookUpdated(id);
  });
  deleteWebhook(x.id);
  const e_del = waitForWebhookDeleted(id);
  block(matchAddWebhook(id), function () {
    verifyWebhookDoesNotExist(id);
  });
});

bthread("WorkflowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWorkflow(x.id);
  const e_add = waitForWorkflowAdded(id);
  block(matchDeleteWorkflow(id), function () {
    verifyWorkflowExists(id);
  });
  updateWorkflow(x.id);
  updateWorkflow(x.id);
  const e_upd = waitForWorkflowUpdated(id);
  block(matchDeleteWorkflow(id), function () {
    verifyWorkflowUpdated(id);
  });
  deleteWorkflow(x.id);
  const e_del = waitForWorkflowDeleted(id);
  block(matchAddWorkflow(id), function () {
    verifyWorkflowDoesNotExist(id);
  });
});

bthread("WorkflowschemeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWorkflowscheme(x.id);
  const e_add = waitForWorkflowschemeAdded(id);
  block(matchDeleteWorkflowscheme(id), function () {
    verifyWorkflowschemeExists(id);
  });
  updateWorkflowscheme(x.id);
  updateWorkflowscheme(x.id);
  const e_upd = waitForWorkflowschemeUpdated(id);
  block(matchDeleteWorkflowscheme(id), function () {
    verifyWorkflowschemeUpdated(id);
  });
  deleteWorkflowscheme(x.id);
  const e_del = waitForWorkflowschemeDeleted(id);
  block(matchAddWorkflowscheme(id), function () {
    verifyWorkflowschemeDoesNotExist(id);
  });
});

bthread("WorkflowusageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWorkflowusage(x.id);
  const e_add = waitForWorkflowusageAdded(id);
  block(matchDeleteWorkflowusage(id), function () {
    verifyWorkflowusageExists(id);
  });
  updateWorkflowusage(x.id);
  updateWorkflowusage(x.id);
  const e_upd = waitForWorkflowusageUpdated(id);
  block(matchDeleteWorkflowusage(id), function () {
    verifyWorkflowusageUpdated(id);
  });
  deleteWorkflowusage(x.id);
  const e_del = waitForWorkflowusageDeleted(id);
  block(matchAddWorkflowusage(id), function () {
    verifyWorkflowusageDoesNotExist(id);
  });
});

bthread("WorklogLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWorklog(x.id);
  const e_add = waitForWorklogAdded(id);
  block(matchDeleteWorklog(id), function () {
    verifyWorklogExists(id);
  });
  updateWorklog(x.id);
  updateWorklog(x.id);
  const e_upd = waitForWorklogUpdated(id);
  block(matchDeleteWorklog(id), function () {
    verifyWorklogUpdated(id);
  });
  deleteWorklog(x.id);
  const e_del = waitForWorklogDeleted(id);
  block(matchAddWorklog(id), function () {
    verifyWorklogDoesNotExist(id);
  });
});

// ===== PASSIVE ASSERTIONS =====

bthread("1 create verification", function () {
  const e = waitForAny1Added();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDelete1(k), function () {
    verify1Exists(k);
  });
});

bthread("1 update verification", function () {
  const e = waitForAny1Updated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDelete1(k), function () {
    verify1Updated(k);
  });
});

bthread("1 delete verification", function () {
  const e = waitForAny1Deleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAdd1(k), function () {
    verify1DoesNotExist(k);
  });
});

bthread("3 create verification", function () {
  const e = waitForAny3Added();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDelete3(k), function () {
    verify3Exists(k);
  });
});

bthread("3 update verification", function () {
  const e = waitForAny3Updated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDelete3(k), function () {
    verify3Updated(k);
  });
});

bthread("3 delete verification", function () {
  const e = waitForAny3Deleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAdd3(k), function () {
    verify3DoesNotExist(k);
  });
});

bthread("Accessible create verification", function () {
  const e = waitForAnyAccessibleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccessible(k), function () {
    verifyAccessibleExists(k);
  });
});

bthread("Accessible update verification", function () {
  const e = waitForAnyAccessibleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccessible(k), function () {
    verifyAccessibleUpdated(k);
  });
});

bthread("Accessible delete verification", function () {
  const e = waitForAnyAccessibleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccessible(k), function () {
    verifyAccessibleDoesNotExist(k);
  });
});

bthread("Actor create verification", function () {
  const e = waitForAnyActorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActor(k), function () {
    verifyActorExists(k);
  });
});

bthread("Actor update verification", function () {
  const e = waitForAnyActorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActor(k), function () {
    verifyActorUpdated(k);
  });
});

bthread("Actor delete verification", function () {
  const e = waitForAnyActorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActor(k), function () {
    verifyActorDoesNotExist(k);
  });
});

bthread("Addon create verification", function () {
  const e = waitForAnyAddonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddon(k), function () {
    verifyAddonExists(k);
  });
});

bthread("Addon update verification", function () {
  const e = waitForAnyAddonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddon(k), function () {
    verifyAddonUpdated(k);
  });
});

bthread("Addon delete verification", function () {
  const e = waitForAnyAddonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddon(k), function () {
    verifyAddonDoesNotExist(k);
  });
});

bthread("Addtodefault create verification", function () {
  const e = waitForAnyAddtodefaultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddtodefault(k), function () {
    verifyAddtodefaultExists(k);
  });
});

bthread("Addtodefault update verification", function () {
  const e = waitForAnyAddtodefaultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAddtodefault(k), function () {
    verifyAddtodefaultUpdated(k);
  });
});

bthread("Addtodefault delete verification", function () {
  const e = waitForAnyAddtodefaultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAddtodefault(k), function () {
    verifyAddtodefaultDoesNotExist(k);
  });
});

bthread("Advancedsetting create verification", function () {
  const e = waitForAnyAdvancedsettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdvancedsetting(k), function () {
    verifyAdvancedsettingExists(k);
  });
});

bthread("Advancedsetting update verification", function () {
  const e = waitForAnyAdvancedsettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdvancedsetting(k), function () {
    verifyAdvancedsettingUpdated(k);
  });
});

bthread("Advancedsetting delete verification", function () {
  const e = waitForAnyAdvancedsettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAdvancedsetting(k), function () {
    verifyAdvancedsettingDoesNotExist(k);
  });
});

bthread("Alternative create verification", function () {
  const e = waitForAnyAlternativeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlternative(k), function () {
    verifyAlternativeExists(k);
  });
});

bthread("Alternative update verification", function () {
  const e = waitForAnyAlternativeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlternative(k), function () {
    verifyAlternativeUpdated(k);
  });
});

bthread("Alternative delete verification", function () {
  const e = waitForAnyAlternativeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAlternative(k), function () {
    verifyAlternativeDoesNotExist(k);
  });
});

bthread("Analyse create verification", function () {
  const e = waitForAnyAnalyseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnalyse(k), function () {
    verifyAnalyseExists(k);
  });
});

bthread("Analyse update verification", function () {
  const e = waitForAnyAnalyseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnalyse(k), function () {
    verifyAnalyseUpdated(k);
  });
});

bthread("Analyse delete verification", function () {
  const e = waitForAnyAnalyseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAnalyse(k), function () {
    verifyAnalyseDoesNotExist(k);
  });
});

bthread("Announcementbanner create verification", function () {
  const e = waitForAnyAnnouncementbannerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnnouncementbanner(k), function () {
    verifyAnnouncementbannerExists(k);
  });
});

bthread("Announcementbanner update verification", function () {
  const e = waitForAnyAnnouncementbannerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnnouncementbanner(k), function () {
    verifyAnnouncementbannerUpdated(k);
  });
});

bthread("Announcementbanner delete verification", function () {
  const e = waitForAnyAnnouncementbannerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAnnouncementbanner(k), function () {
    verifyAnnouncementbannerDoesNotExist(k);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApi(k), function () {
    verifyApiExists(k);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApi(k), function () {
    verifyApiUpdated(k);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApi(k), function () {
    verifyApiDoesNotExist(k);
  });
});

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApp(k), function () {
    verifyAppExists(k);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApp(k), function () {
    verifyAppUpdated(k);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApp(k), function () {
    verifyAppDoesNotExist(k);
  });
});

bthread("Applicationproperty create verification", function () {
  const e = waitForAnyApplicationpropertyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationproperty(k), function () {
    verifyApplicationpropertyExists(k);
  });
});

bthread("Applicationproperty update verification", function () {
  const e = waitForAnyApplicationpropertyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationproperty(k), function () {
    verifyApplicationpropertyUpdated(k);
  });
});

bthread("Applicationproperty delete verification", function () {
  const e = waitForAnyApplicationpropertyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplicationproperty(k), function () {
    verifyApplicationpropertyDoesNotExist(k);
  });
});

bthread("Applicationrole create verification", function () {
  const e = waitForAnyApplicationroleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationrole(k), function () {
    verifyApplicationroleExists(k);
  });
});

bthread("Applicationrole update verification", function () {
  const e = waitForAnyApplicationroleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplicationrole(k), function () {
    verifyApplicationroleUpdated(k);
  });
});

bthread("Applicationrole delete verification", function () {
  const e = waitForAnyApplicationroleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplicationrole(k), function () {
    verifyApplicationroleDoesNotExist(k);
  });
});

bthread("Approximatecount create verification", function () {
  const e = waitForAnyApproximatecountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApproximatecount(k), function () {
    verifyApproximatecountExists(k);
  });
});

bthread("Approximatecount update verification", function () {
  const e = waitForAnyApproximatecountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApproximatecount(k), function () {
    verifyApproximatecountUpdated(k);
  });
});

bthread("Approximatecount delete verification", function () {
  const e = waitForAnyApproximatecountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApproximatecount(k), function () {
    verifyApproximatecountDoesNotExist(k);
  });
});

bthread("Approximatelicensecount create verification", function () {
  const e = waitForAnyApproximatelicensecountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApproximatelicensecount(k), function () {
    verifyApproximatelicensecountExists(k);
  });
});

bthread("Approximatelicensecount update verification", function () {
  const e = waitForAnyApproximatelicensecountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApproximatelicensecount(k), function () {
    verifyApproximatelicensecountUpdated(k);
  });
});

bthread("Approximatelicensecount delete verification", function () {
  const e = waitForAnyApproximatelicensecountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApproximatelicensecount(k), function () {
    verifyApproximatelicensecountDoesNotExist(k);
  });
});

bthread("Archive create verification", function () {
  const e = waitForAnyArchiveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArchive(k), function () {
    verifyArchiveExists(k);
  });
});

bthread("Archive update verification", function () {
  const e = waitForAnyArchiveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArchive(k), function () {
    verifyArchiveUpdated(k);
  });
});

bthread("Archive delete verification", function () {
  const e = waitForAnyArchiveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddArchive(k), function () {
    verifyArchiveDoesNotExist(k);
  });
});

bthread("Assignable create verification", function () {
  const e = waitForAnyAssignableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignable(k), function () {
    verifyAssignableExists(k);
  });
});

bthread("Assignable update verification", function () {
  const e = waitForAnyAssignableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignable(k), function () {
    verifyAssignableUpdated(k);
  });
});

bthread("Assignable delete verification", function () {
  const e = waitForAnyAssignableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssignable(k), function () {
    verifyAssignableDoesNotExist(k);
  });
});

bthread("Assignee create verification", function () {
  const e = waitForAnyAssigneeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignee(k), function () {
    verifyAssigneeExists(k);
  });
});

bthread("Assignee update verification", function () {
  const e = waitForAnyAssigneeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignee(k), function () {
    verifyAssigneeUpdated(k);
  });
});

bthread("Assignee delete verification", function () {
  const e = waitForAnyAssigneeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssignee(k), function () {
    verifyAssigneeDoesNotExist(k);
  });
});

bthread("Association create verification", function () {
  const e = waitForAnyAssociationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssociation(k), function () {
    verifyAssociationExists(k);
  });
});

bthread("Association update verification", function () {
  const e = waitForAnyAssociationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssociation(k), function () {
    verifyAssociationUpdated(k);
  });
});

bthread("Association delete verification", function () {
  const e = waitForAnyAssociationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssociation(k), function () {
    verifyAssociationDoesNotExist(k);
  });
});

bthread("Atlassian create verification", function () {
  const e = waitForAnyAtlassianAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAtlassian(k), function () {
    verifyAtlassianExists(k);
  });
});

bthread("Atlassian update verification", function () {
  const e = waitForAnyAtlassianUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAtlassian(k), function () {
    verifyAtlassianUpdated(k);
  });
});

bthread("Atlassian delete verification", function () {
  const e = waitForAnyAtlassianDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAtlassian(k), function () {
    verifyAtlassianDoesNotExist(k);
  });
});

bthread("Atlassianconnect create verification", function () {
  const e = waitForAnyAtlassianconnectAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAtlassianconnect(k), function () {
    verifyAtlassianconnectExists(k);
  });
});

bthread("Atlassianconnect update verification", function () {
  const e = waitForAnyAtlassianconnectUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAtlassianconnect(k), function () {
    verifyAtlassianconnectUpdated(k);
  });
});

bthread("Atlassianconnect delete verification", function () {
  const e = waitForAnyAtlassianconnectDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAtlassianconnect(k), function () {
    verifyAtlassianconnectDoesNotExist(k);
  });
});

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttachment(k), function () {
    verifyAttachmentExists(k);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttachment(k), function () {
    verifyAttachmentUpdated(k);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAttachment(k), function () {
    verifyAttachmentDoesNotExist(k);
  });
});

bthread("Auditing create verification", function () {
  const e = waitForAnyAuditingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuditing(k), function () {
    verifyAuditingExists(k);
  });
});

bthread("Auditing update verification", function () {
  const e = waitForAnyAuditingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuditing(k), function () {
    verifyAuditingUpdated(k);
  });
});

bthread("Auditing delete verification", function () {
  const e = waitForAnyAuditingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuditing(k), function () {
    verifyAuditingDoesNotExist(k);
  });
});

bthread("Autocompletedata create verification", function () {
  const e = waitForAnyAutocompletedataAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutocompletedata(k), function () {
    verifyAutocompletedataExists(k);
  });
});

bthread("Autocompletedata update verification", function () {
  const e = waitForAnyAutocompletedataUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutocompletedata(k), function () {
    verifyAutocompletedataUpdated(k);
  });
});

bthread("Autocompletedata delete verification", function () {
  const e = waitForAnyAutocompletedataDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAutocompletedata(k), function () {
    verifyAutocompletedataDoesNotExist(k);
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

bthread("Availablefield create verification", function () {
  const e = waitForAnyAvailablefieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailablefield(k), function () {
    verifyAvailablefieldExists(k);
  });
});

bthread("Availablefield update verification", function () {
  const e = waitForAnyAvailablefieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvailablefield(k), function () {
    verifyAvailablefieldUpdated(k);
  });
});

bthread("Availablefield delete verification", function () {
  const e = waitForAnyAvailablefieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvailablefield(k), function () {
    verifyAvailablefieldDoesNotExist(k);
  });
});

bthread("Avatar create verification", function () {
  const e = waitForAnyAvatarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvatar(k), function () {
    verifyAvatarExists(k);
  });
});

bthread("Avatar update verification", function () {
  const e = waitForAnyAvatarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvatar(k), function () {
    verifyAvatarUpdated(k);
  });
});

bthread("Avatar delete verification", function () {
  const e = waitForAnyAvatarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvatar(k), function () {
    verifyAvatarDoesNotExist(k);
  });
});

bthread("Avatar2 create verification", function () {
  const e = waitForAnyAvatar2Added();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvatar2(k), function () {
    verifyAvatar2Exists(k);
  });
});

bthread("Avatar2 update verification", function () {
  const e = waitForAnyAvatar2Updated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvatar2(k), function () {
    verifyAvatar2Updated(k);
  });
});

bthread("Avatar2 delete verification", function () {
  const e = waitForAnyAvatar2Deleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvatar2(k), function () {
    verifyAvatar2DoesNotExist(k);
  });
});

bthread("Bulk create verification", function () {
  const e = waitForAnyBulkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBulk(k), function () {
    verifyBulkExists(k);
  });
});

bthread("Bulk update verification", function () {
  const e = waitForAnyBulkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBulk(k), function () {
    verifyBulkUpdated(k);
  });
});

bthread("Bulk delete verification", function () {
  const e = waitForAnyBulkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBulk(k), function () {
    verifyBulkDoesNotExist(k);
  });
});

bthread("Bulkfetch create verification", function () {
  const e = waitForAnyBulkfetchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBulkfetch(k), function () {
    verifyBulkfetchExists(k);
  });
});

bthread("Bulkfetch update verification", function () {
  const e = waitForAnyBulkfetchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBulkfetch(k), function () {
    verifyBulkfetchUpdated(k);
  });
});

bthread("Bulkfetch delete verification", function () {
  const e = waitForAnyBulkfetchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBulkfetch(k), function () {
    verifyBulkfetchDoesNotExist(k);
  });
});

bthread("Byname create verification", function () {
  const e = waitForAnyBynameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteByname(k), function () {
    verifyBynameExists(k);
  });
});

bthread("Byname update verification", function () {
  const e = waitForAnyBynameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteByname(k), function () {
    verifyBynameUpdated(k);
  });
});

bthread("Byname delete verification", function () {
  const e = waitForAnyBynameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddByname(k), function () {
    verifyBynameDoesNotExist(k);
  });
});

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCancel(k), function () {
    verifyCancelExists(k);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCancel(k), function () {
    verifyCancelUpdated(k);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCancel(k), function () {
    verifyCancelDoesNotExist(k);
  });
});

bthread("Capability create verification", function () {
  const e = waitForAnyCapabilityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCapability(k), function () {
    verifyCapabilityExists(k);
  });
});

bthread("Capability update verification", function () {
  const e = waitForAnyCapabilityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCapability(k), function () {
    verifyCapabilityUpdated(k);
  });
});

bthread("Capability delete verification", function () {
  const e = waitForAnyCapabilityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCapability(k), function () {
    verifyCapabilityDoesNotExist(k);
  });
});

bthread("Changelog create verification", function () {
  const e = waitForAnyChangelogAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChangelog(k), function () {
    verifyChangelogExists(k);
  });
});

bthread("Changelog update verification", function () {
  const e = waitForAnyChangelogUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChangelog(k), function () {
    verifyChangelogUpdated(k);
  });
});

bthread("Changelog delete verification", function () {
  const e = waitForAnyChangelogDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChangelog(k), function () {
    verifyChangelogDoesNotExist(k);
  });
});

bthread("Check create verification", function () {
  const e = waitForAnyCheckAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCheck(k), function () {
    verifyCheckExists(k);
  });
});

bthread("Check update verification", function () {
  const e = waitForAnyCheckUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCheck(k), function () {
    verifyCheckUpdated(k);
  });
});

bthread("Check delete verification", function () {
  const e = waitForAnyCheckDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCheck(k), function () {
    verifyCheckDoesNotExist(k);
  });
});

bthread("Classificationlevel create verification", function () {
  const e = waitForAnyClassificationlevelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClassificationlevel(k), function () {
    verifyClassificationlevelExists(k);
  });
});

bthread("Classificationlevel update verification", function () {
  const e = waitForAnyClassificationlevelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClassificationlevel(k), function () {
    verifyClassificationlevelUpdated(k);
  });
});

bthread("Classificationlevel delete verification", function () {
  const e = waitForAnyClassificationlevelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClassificationlevel(k), function () {
    verifyClassificationlevelDoesNotExist(k);
  });
});

bthread("Column create verification", function () {
  const e = waitForAnyColumnAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteColumn(k), function () {
    verifyColumnExists(k);
  });
});

bthread("Column update verification", function () {
  const e = waitForAnyColumnUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteColumn(k), function () {
    verifyColumnUpdated(k);
  });
});

bthread("Column delete verification", function () {
  const e = waitForAnyColumnDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddColumn(k), function () {
    verifyColumnDoesNotExist(k);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComment(k), function () {
    verifyCommentExists(k);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComment(k), function () {
    verifyCommentUpdated(k);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComment(k), function () {
    verifyCommentDoesNotExist(k);
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

bthread("Computation create verification", function () {
  const e = waitForAnyComputationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComputation(k), function () {
    verifyComputationExists(k);
  });
});

bthread("Computation update verification", function () {
  const e = waitForAnyComputationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComputation(k), function () {
    verifyComputationUpdated(k);
  });
});

bthread("Computation delete verification", function () {
  const e = waitForAnyComputationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComputation(k), function () {
    verifyComputationDoesNotExist(k);
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

bthread("Configuration create verification", function () {
  const e = waitForAnyConfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfiguration(k), function () {
    verifyConfigurationExists(k);
  });
});

bthread("Configuration update verification", function () {
  const e = waitForAnyConfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfiguration(k), function () {
    verifyConfigurationUpdated(k);
  });
});

bthread("Configuration delete verification", function () {
  const e = waitForAnyConfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfiguration(k), function () {
    verifyConfigurationDoesNotExist(k);
  });
});

bthread("Content create verification", function () {
  const e = waitForAnyContentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContent(k), function () {
    verifyContentExists(k);
  });
});

bthread("Content update verification", function () {
  const e = waitForAnyContentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContent(k), function () {
    verifyContentUpdated(k);
  });
});

bthread("Content delete verification", function () {
  const e = waitForAnyContentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddContent(k), function () {
    verifyContentDoesNotExist(k);
  });
});

bthread("Context create verification", function () {
  const e = waitForAnyContextAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContext(k), function () {
    verifyContextExists(k);
  });
});

bthread("Context update verification", function () {
  const e = waitForAnyContextUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContext(k), function () {
    verifyContextUpdated(k);
  });
});

bthread("Context delete verification", function () {
  const e = waitForAnyContextDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddContext(k), function () {
    verifyContextDoesNotExist(k);
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

bthread("Create create verification", function () {
  const e = waitForAnyCreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCreate(k), function () {
    verifyCreateExists(k);
  });
});

bthread("Create update verification", function () {
  const e = waitForAnyCreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCreate(k), function () {
    verifyCreateUpdated(k);
  });
});

bthread("Create delete verification", function () {
  const e = waitForAnyCreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCreate(k), function () {
    verifyCreateDoesNotExist(k);
  });
});

bthread("Createdraft create verification", function () {
  const e = waitForAnyCreatedraftAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCreatedraft(k), function () {
    verifyCreatedraftExists(k);
  });
});

bthread("Createdraft update verification", function () {
  const e = waitForAnyCreatedraftUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCreatedraft(k), function () {
    verifyCreatedraftUpdated(k);
  });
});

bthread("Createdraft delete verification", function () {
  const e = waitForAnyCreatedraftDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCreatedraft(k), function () {
    verifyCreatedraftDoesNotExist(k);
  });
});

bthread("Createmeta create verification", function () {
  const e = waitForAnyCreatemetaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCreatemeta(k), function () {
    verifyCreatemetaExists(k);
  });
});

bthread("Createmeta update verification", function () {
  const e = waitForAnyCreatemetaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCreatemeta(k), function () {
    verifyCreatemetaUpdated(k);
  });
});

bthread("Createmeta delete verification", function () {
  const e = waitForAnyCreatemetaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCreatemeta(k), function () {
    verifyCreatemetaDoesNotExist(k);
  });
});

bthread("Customfieldoption create verification", function () {
  const e = waitForAnyCustomfieldoptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomfieldoption(k), function () {
    verifyCustomfieldoptionExists(k);
  });
});

bthread("Customfieldoption update verification", function () {
  const e = waitForAnyCustomfieldoptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomfieldoption(k), function () {
    verifyCustomfieldoptionUpdated(k);
  });
});

bthread("Customfieldoption delete verification", function () {
  const e = waitForAnyCustomfieldoptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomfieldoption(k), function () {
    verifyCustomfieldoptionDoesNotExist(k);
  });
});

bthread("Dashboard create verification", function () {
  const e = waitForAnyDashboardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDashboard(k), function () {
    verifyDashboardExists(k);
  });
});

bthread("Dashboard update verification", function () {
  const e = waitForAnyDashboardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDashboard(k), function () {
    verifyDashboardUpdated(k);
  });
});

bthread("Dashboard delete verification", function () {
  const e = waitForAnyDashboardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDashboard(k), function () {
    verifyDashboardDoesNotExist(k);
  });
});

bthread("Datapolicy create verification", function () {
  const e = waitForAnyDatapolicyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDatapolicy(k), function () {
    verifyDatapolicyExists(k);
  });
});

bthread("Datapolicy update verification", function () {
  const e = waitForAnyDatapolicyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDatapolicy(k), function () {
    verifyDatapolicyUpdated(k);
  });
});

bthread("Datapolicy delete verification", function () {
  const e = waitForAnyDatapolicyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDatapolicy(k), function () {
    verifyDatapolicyDoesNotExist(k);
  });
});

bthread("Default create verification", function () {
  const e = waitForAnyDefaultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefault(k), function () {
    verifyDefaultExists(k);
  });
});

bthread("Default update verification", function () {
  const e = waitForAnyDefaultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefault(k), function () {
    verifyDefaultUpdated(k);
  });
});

bthread("Default delete verification", function () {
  const e = waitForAnyDefaultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefault(k), function () {
    verifyDefaultDoesNotExist(k);
  });
});

bthread("Defaulteditor create verification", function () {
  const e = waitForAnyDefaulteditorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaulteditor(k), function () {
    verifyDefaulteditorExists(k);
  });
});

bthread("Defaulteditor update verification", function () {
  const e = waitForAnyDefaulteditorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaulteditor(k), function () {
    verifyDefaulteditorUpdated(k);
  });
});

bthread("Defaulteditor delete verification", function () {
  const e = waitForAnyDefaulteditorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaulteditor(k), function () {
    verifyDefaulteditorDoesNotExist(k);
  });
});

bthread("Defaultsharescope create verification", function () {
  const e = waitForAnyDefaultsharescopeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultsharescope(k), function () {
    verifyDefaultsharescopeExists(k);
  });
});

bthread("Defaultsharescope update verification", function () {
  const e = waitForAnyDefaultsharescopeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultsharescope(k), function () {
    verifyDefaultsharescopeUpdated(k);
  });
});

bthread("Defaultsharescope delete verification", function () {
  const e = waitForAnyDefaultsharescopeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultsharescope(k), function () {
    verifyDefaultsharescopeDoesNotExist(k);
  });
});

bthread("Defaultvalue create verification", function () {
  const e = waitForAnyDefaultvalueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultvalue(k), function () {
    verifyDefaultvalueExists(k);
  });
});

bthread("Defaultvalue update verification", function () {
  const e = waitForAnyDefaultvalueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultvalue(k), function () {
    verifyDefaultvalueUpdated(k);
  });
});

bthread("Defaultvalue delete verification", function () {
  const e = waitForAnyDefaultvalueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultvalue(k), function () {
    verifyDefaultvalueDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelete(k), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelete(k), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDelete(k), function () {
    verifyDeleteDoesNotExist(k);
  });
});

bthread("Deleted create verification", function () {
  const e = waitForAnyDeletedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeleted(k), function () {
    verifyDeletedExists(k);
  });
});

bthread("Deleted update verification", function () {
  const e = waitForAnyDeletedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeleted(k), function () {
    verifyDeletedUpdated(k);
  });
});

bthread("Deleted delete verification", function () {
  const e = waitForAnyDeletedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeleted(k), function () {
    verifyDeletedDoesNotExist(k);
  });
});

bthread("Draft create verification", function () {
  const e = waitForAnyDraftAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDraft(k), function () {
    verifyDraftExists(k);
  });
});

bthread("Draft update verification", function () {
  const e = waitForAnyDraftUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDraft(k), function () {
    verifyDraftUpdated(k);
  });
});

bthread("Draft delete verification", function () {
  const e = waitForAnyDraftDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDraft(k), function () {
    verifyDraftDoesNotExist(k);
  });
});

bthread("Duplicate create verification", function () {
  const e = waitForAnyDuplicateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDuplicate(k), function () {
    verifyDuplicateExists(k);
  });
});

bthread("Duplicate update verification", function () {
  const e = waitForAnyDuplicateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDuplicate(k), function () {
    verifyDuplicateUpdated(k);
  });
});

bthread("Duplicate delete verification", function () {
  const e = waitForAnyDuplicateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDuplicate(k), function () {
    verifyDuplicateDoesNotExist(k);
  });
});

bthread("Dynamic create verification", function () {
  const e = waitForAnyDynamicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDynamic(k), function () {
    verifyDynamicExists(k);
  });
});

bthread("Dynamic update verification", function () {
  const e = waitForAnyDynamicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDynamic(k), function () {
    verifyDynamicUpdated(k);
  });
});

bthread("Dynamic delete verification", function () {
  const e = waitForAnyDynamicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDynamic(k), function () {
    verifyDynamicDoesNotExist(k);
  });
});

bthread("Edit create verification", function () {
  const e = waitForAnyEditAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEdit(k), function () {
    verifyEditExists(k);
  });
});

bthread("Edit update verification", function () {
  const e = waitForAnyEditUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEdit(k), function () {
    verifyEditUpdated(k);
  });
});

bthread("Edit delete verification", function () {
  const e = waitForAnyEditDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEdit(k), function () {
    verifyEditDoesNotExist(k);
  });
});

bthread("Editmeta create verification", function () {
  const e = waitForAnyEditmetaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEditmeta(k), function () {
    verifyEditmetaExists(k);
  });
});

bthread("Editmeta update verification", function () {
  const e = waitForAnyEditmetaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEditmeta(k), function () {
    verifyEditmetaUpdated(k);
  });
});

bthread("Editmeta delete verification", function () {
  const e = waitForAnyEditmetaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEditmeta(k), function () {
    verifyEditmetaDoesNotExist(k);
  });
});

bthread("Edittemplate create verification", function () {
  const e = waitForAnyEdittemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEdittemplate(k), function () {
    verifyEdittemplateExists(k);
  });
});

bthread("Edittemplate update verification", function () {
  const e = waitForAnyEdittemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEdittemplate(k), function () {
    verifyEdittemplateUpdated(k);
  });
});

bthread("Edittemplate delete verification", function () {
  const e = waitForAnyEdittemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEdittemplate(k), function () {
    verifyEdittemplateDoesNotExist(k);
  });
});

bthread("Email create verification", function () {
  const e = waitForAnyEmailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmail(k), function () {
    verifyEmailExists(k);
  });
});

bthread("Email update verification", function () {
  const e = waitForAnyEmailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmail(k), function () {
    verifyEmailUpdated(k);
  });
});

bthread("Email delete verification", function () {
  const e = waitForAnyEmailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmail(k), function () {
    verifyEmailDoesNotExist(k);
  });
});

bthread("Eval create verification", function () {
  const e = waitForAnyEvalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEval(k), function () {
    verifyEvalExists(k);
  });
});

bthread("Eval update verification", function () {
  const e = waitForAnyEvalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEval(k), function () {
    verifyEvalUpdated(k);
  });
});

bthread("Eval delete verification", function () {
  const e = waitForAnyEvalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEval(k), function () {
    verifyEvalDoesNotExist(k);
  });
});

bthread("Evaluate create verification", function () {
  const e = waitForAnyEvaluateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvaluate(k), function () {
    verifyEvaluateExists(k);
  });
});

bthread("Evaluate update verification", function () {
  const e = waitForAnyEvaluateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvaluate(k), function () {
    verifyEvaluateUpdated(k);
  });
});

bthread("Evaluate delete verification", function () {
  const e = waitForAnyEvaluateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEvaluate(k), function () {
    verifyEvaluateDoesNotExist(k);
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

bthread("Expand create verification", function () {
  const e = waitForAnyExpandAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExpand(k), function () {
    verifyExpandExists(k);
  });
});

bthread("Expand update verification", function () {
  const e = waitForAnyExpandUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExpand(k), function () {
    verifyExpandUpdated(k);
  });
});

bthread("Expand delete verification", function () {
  const e = waitForAnyExpandDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExpand(k), function () {
    verifyExpandDoesNotExist(k);
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

bthread("Expression create verification", function () {
  const e = waitForAnyExpressionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExpression(k), function () {
    verifyExpressionExists(k);
  });
});

bthread("Expression update verification", function () {
  const e = waitForAnyExpressionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExpression(k), function () {
    verifyExpressionUpdated(k);
  });
});

bthread("Expression delete verification", function () {
  const e = waitForAnyExpressionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExpression(k), function () {
    verifyExpressionDoesNotExist(k);
  });
});

bthread("Failed create verification", function () {
  const e = waitForAnyFailedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFailed(k), function () {
    verifyFailedExists(k);
  });
});

bthread("Failed update verification", function () {
  const e = waitForAnyFailedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFailed(k), function () {
    verifyFailedUpdated(k);
  });
});

bthread("Failed delete verification", function () {
  const e = waitForAnyFailedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFailed(k), function () {
    verifyFailedDoesNotExist(k);
  });
});

bthread("Favourite create verification", function () {
  const e = waitForAnyFavouriteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFavourite(k), function () {
    verifyFavouriteExists(k);
  });
});

bthread("Favourite update verification", function () {
  const e = waitForAnyFavouriteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFavourite(k), function () {
    verifyFavouriteUpdated(k);
  });
});

bthread("Favourite delete verification", function () {
  const e = waitForAnyFavouriteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFavourite(k), function () {
    verifyFavouriteDoesNotExist(k);
  });
});

bthread("Feature create verification", function () {
  const e = waitForAnyFeatureAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFeature(k), function () {
    verifyFeatureExists(k);
  });
});

bthread("Feature update verification", function () {
  const e = waitForAnyFeatureUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFeature(k), function () {
    verifyFeatureUpdated(k);
  });
});

bthread("Feature delete verification", function () {
  const e = waitForAnyFeatureDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFeature(k), function () {
    verifyFeatureDoesNotExist(k);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteField(k), function () {
    verifyFieldExists(k);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteField(k), function () {
    verifyFieldUpdated(k);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddField(k), function () {
    verifyFieldDoesNotExist(k);
  });
});

bthread("Fieldconfiguration create verification", function () {
  const e = waitForAnyFieldconfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFieldconfiguration(k), function () {
    verifyFieldconfigurationExists(k);
  });
});

bthread("Fieldconfiguration update verification", function () {
  const e = waitForAnyFieldconfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFieldconfiguration(k), function () {
    verifyFieldconfigurationUpdated(k);
  });
});

bthread("Fieldconfiguration delete verification", function () {
  const e = waitForAnyFieldconfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFieldconfiguration(k), function () {
    verifyFieldconfigurationDoesNotExist(k);
  });
});

bthread("Fieldconfigurationscheme create verification", function () {
  const e = waitForAnyFieldconfigurationschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFieldconfigurationscheme(k), function () {
    verifyFieldconfigurationschemeExists(k);
  });
});

bthread("Fieldconfigurationscheme update verification", function () {
  const e = waitForAnyFieldconfigurationschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFieldconfigurationscheme(k), function () {
    verifyFieldconfigurationschemeUpdated(k);
  });
});

bthread("Fieldconfigurationscheme delete verification", function () {
  const e = waitForAnyFieldconfigurationschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFieldconfigurationscheme(k), function () {
    verifyFieldconfigurationschemeDoesNotExist(k);
  });
});

bthread("Filter create verification", function () {
  const e = waitForAnyFilterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilter(k), function () {
    verifyFilterExists(k);
  });
});

bthread("Filter update verification", function () {
  const e = waitForAnyFilterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilter(k), function () {
    verifyFilterUpdated(k);
  });
});

bthread("Filter delete verification", function () {
  const e = waitForAnyFilterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFilter(k), function () {
    verifyFilterDoesNotExist(k);
  });
});

bthread("Forge create verification", function () {
  const e = waitForAnyForgeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForge(k), function () {
    verifyForgeExists(k);
  });
});

bthread("Forge update verification", function () {
  const e = waitForAnyForgeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForge(k), function () {
    verifyForgeUpdated(k);
  });
});

bthread("Forge delete verification", function () {
  const e = waitForAnyForgeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddForge(k), function () {
    verifyForgeDoesNotExist(k);
  });
});

bthread("Function create verification", function () {
  const e = waitForAnyFunctionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFunction(k), function () {
    verifyFunctionExists(k);
  });
});

bthread("Function update verification", function () {
  const e = waitForAnyFunctionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFunction(k), function () {
    verifyFunctionUpdated(k);
  });
});

bthread("Function delete verification", function () {
  const e = waitForAnyFunctionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFunction(k), function () {
    verifyFunctionDoesNotExist(k);
  });
});

bthread("Gadget create verification", function () {
  const e = waitForAnyGadgetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGadget(k), function () {
    verifyGadgetExists(k);
  });
});

bthread("Gadget update verification", function () {
  const e = waitForAnyGadgetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGadget(k), function () {
    verifyGadgetUpdated(k);
  });
});

bthread("Gadget delete verification", function () {
  const e = waitForAnyGadgetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGadget(k), function () {
    verifyGadgetDoesNotExist(k);
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

bthread("Groupuserpicker create verification", function () {
  const e = waitForAnyGroupuserpickerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupuserpicker(k), function () {
    verifyGroupuserpickerExists(k);
  });
});

bthread("Groupuserpicker update verification", function () {
  const e = waitForAnyGroupuserpickerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupuserpicker(k), function () {
    verifyGroupuserpickerUpdated(k);
  });
});

bthread("Groupuserpicker delete verification", function () {
  const e = waitForAnyGroupuserpickerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGroupuserpicker(k), function () {
    verifyGroupuserpickerDoesNotExist(k);
  });
});

bthread("Hierarchy create verification", function () {
  const e = waitForAnyHierarchyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHierarchy(k), function () {
    verifyHierarchyExists(k);
  });
});

bthread("Hierarchy update verification", function () {
  const e = waitForAnyHierarchyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHierarchy(k), function () {
    verifyHierarchyUpdated(k);
  });
});

bthread("Hierarchy delete verification", function () {
  const e = waitForAnyHierarchyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHierarchy(k), function () {
    verifyHierarchyDoesNotExist(k);
  });
});

bthread("Human create verification", function () {
  const e = waitForAnyHumanAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHuman(k), function () {
    verifyHumanExists(k);
  });
});

bthread("Human update verification", function () {
  const e = waitForAnyHumanUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHuman(k), function () {
    verifyHumanUpdated(k);
  });
});

bthread("Human delete verification", function () {
  const e = waitForAnyHumanDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHuman(k), function () {
    verifyHumanDoesNotExist(k);
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

bthread("Issue create verification", function () {
  const e = waitForAnyIssueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssue(k), function () {
    verifyIssueExists(k);
  });
});

bthread("Issue update verification", function () {
  const e = waitForAnyIssueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssue(k), function () {
    verifyIssueUpdated(k);
  });
});

bthread("Issue delete verification", function () {
  const e = waitForAnyIssueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssue(k), function () {
    verifyIssueDoesNotExist(k);
  });
});

bthread("Issuelink create verification", function () {
  const e = waitForAnyIssuelinkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuelink(k), function () {
    verifyIssuelinkExists(k);
  });
});

bthread("Issuelink update verification", function () {
  const e = waitForAnyIssuelinkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuelink(k), function () {
    verifyIssuelinkUpdated(k);
  });
});

bthread("Issuelink delete verification", function () {
  const e = waitForAnyIssuelinkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuelink(k), function () {
    verifyIssuelinkDoesNotExist(k);
  });
});

bthread("Issuelinktype create verification", function () {
  const e = waitForAnyIssuelinktypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuelinktype(k), function () {
    verifyIssuelinktypeExists(k);
  });
});

bthread("Issuelinktype update verification", function () {
  const e = waitForAnyIssuelinktypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuelinktype(k), function () {
    verifyIssuelinktypeUpdated(k);
  });
});

bthread("Issuelinktype delete verification", function () {
  const e = waitForAnyIssuelinktypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuelinktype(k), function () {
    verifyIssuelinktypeDoesNotExist(k);
  });
});

bthread("Issuesecuritylevelscheme create verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuesecuritylevelscheme(k), function () {
    verifyIssuesecuritylevelschemeExists(k);
  });
});

bthread("Issuesecuritylevelscheme update verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuesecuritylevelscheme(k), function () {
    verifyIssuesecuritylevelschemeUpdated(k);
  });
});

bthread("Issuesecuritylevelscheme delete verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuesecuritylevelscheme(k), function () {
    verifyIssuesecuritylevelschemeDoesNotExist(k);
  });
});

bthread("Issuesecurityscheme create verification", function () {
  const e = waitForAnyIssuesecurityschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuesecurityscheme(k), function () {
    verifyIssuesecurityschemeExists(k);
  });
});

bthread("Issuesecurityscheme update verification", function () {
  const e = waitForAnyIssuesecurityschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuesecurityscheme(k), function () {
    verifyIssuesecurityschemeUpdated(k);
  });
});

bthread("Issuesecurityscheme delete verification", function () {
  const e = waitForAnyIssuesecurityschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuesecurityscheme(k), function () {
    verifyIssuesecurityschemeDoesNotExist(k);
  });
});

bthread("Issuetype create verification", function () {
  const e = waitForAnyIssuetypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetype(k), function () {
    verifyIssuetypeExists(k);
  });
});

bthread("Issuetype update verification", function () {
  const e = waitForAnyIssuetypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetype(k), function () {
    verifyIssuetypeUpdated(k);
  });
});

bthread("Issuetype delete verification", function () {
  const e = waitForAnyIssuetypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetype(k), function () {
    verifyIssuetypeDoesNotExist(k);
  });
});

bthread("Issuetypemapping create verification", function () {
  const e = waitForAnyIssuetypemappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypemapping(k), function () {
    verifyIssuetypemappingExists(k);
  });
});

bthread("Issuetypemapping update verification", function () {
  const e = waitForAnyIssuetypemappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypemapping(k), function () {
    verifyIssuetypemappingUpdated(k);
  });
});

bthread("Issuetypemapping delete verification", function () {
  const e = waitForAnyIssuetypemappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetypemapping(k), function () {
    verifyIssuetypemappingDoesNotExist(k);
  });
});

bthread("Issuetypescheme create verification", function () {
  const e = waitForAnyIssuetypeschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypescheme(k), function () {
    verifyIssuetypeschemeExists(k);
  });
});

bthread("Issuetypescheme update verification", function () {
  const e = waitForAnyIssuetypeschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypescheme(k), function () {
    verifyIssuetypeschemeUpdated(k);
  });
});

bthread("Issuetypescheme delete verification", function () {
  const e = waitForAnyIssuetypeschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetypescheme(k), function () {
    verifyIssuetypeschemeDoesNotExist(k);
  });
});

bthread("Issuetypescreenscheme create verification", function () {
  const e = waitForAnyIssuetypescreenschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypescreenscheme(k), function () {
    verifyIssuetypescreenschemeExists(k);
  });
});

bthread("Issuetypescreenscheme update verification", function () {
  const e = waitForAnyIssuetypescreenschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypescreenscheme(k), function () {
    verifyIssuetypescreenschemeUpdated(k);
  });
});

bthread("Issuetypescreenscheme delete verification", function () {
  const e = waitForAnyIssuetypescreenschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetypescreenscheme(k), function () {
    verifyIssuetypescreenschemeDoesNotExist(k);
  });
});

bthread("Issuetypeusage create verification", function () {
  const e = waitForAnyIssuetypeusageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypeusage(k), function () {
    verifyIssuetypeusageExists(k);
  });
});

bthread("Issuetypeusage update verification", function () {
  const e = waitForAnyIssuetypeusageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetypeusage(k), function () {
    verifyIssuetypeusageUpdated(k);
  });
});

bthread("Issuetypeusage delete verification", function () {
  const e = waitForAnyIssuetypeusageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetypeusage(k), function () {
    verifyIssuetypeusageDoesNotExist(k);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItem(k), function () {
    verifyItemExists(k);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItem(k), function () {
    verifyItemUpdated(k);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddItem(k), function () {
    verifyItemDoesNotExist(k);
  });
});

bthread("Jql create verification", function () {
  const e = waitForAnyJqlAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJql(k), function () {
    verifyJqlExists(k);
  });
});

bthread("Jql update verification", function () {
  const e = waitForAnyJqlUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJql(k), function () {
    verifyJqlUpdated(k);
  });
});

bthread("Jql delete verification", function () {
  const e = waitForAnyJqlDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddJql(k), function () {
    verifyJqlDoesNotExist(k);
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

bthread("Label create verification", function () {
  const e = waitForAnyLabelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabel(k), function () {
    verifyLabelExists(k);
  });
});

bthread("Label update verification", function () {
  const e = waitForAnyLabelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabel(k), function () {
    verifyLabelUpdated(k);
  });
});

bthread("Label delete verification", function () {
  const e = waitForAnyLabelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabel(k), function () {
    verifyLabelDoesNotExist(k);
  });
});

bthread("Level create verification", function () {
  const e = waitForAnyLevelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLevel(k), function () {
    verifyLevelExists(k);
  });
});

bthread("Level update verification", function () {
  const e = waitForAnyLevelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLevel(k), function () {
    verifyLevelUpdated(k);
  });
});

bthread("Level delete verification", function () {
  const e = waitForAnyLevelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLevel(k), function () {
    verifyLevelDoesNotExist(k);
  });
});

bthread("License create verification", function () {
  const e = waitForAnyLicenseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLicense(k), function () {
    verifyLicenseExists(k);
  });
});

bthread("License update verification", function () {
  const e = waitForAnyLicenseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLicense(k), function () {
    verifyLicenseUpdated(k);
  });
});

bthread("License delete verification", function () {
  const e = waitForAnyLicenseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLicense(k), function () {
    verifyLicenseDoesNotExist(k);
  });
});

bthread("Limit create verification", function () {
  const e = waitForAnyLimitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLimit(k), function () {
    verifyLimitExists(k);
  });
});

bthread("Limit update verification", function () {
  const e = waitForAnyLimitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLimit(k), function () {
    verifyLimitUpdated(k);
  });
});

bthread("Limit delete verification", function () {
  const e = waitForAnyLimitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLimit(k), function () {
    verifyLimitDoesNotExist(k);
  });
});

bthread("List create verification", function () {
  const e = waitForAnyListAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteList(k), function () {
    verifyListExists(k);
  });
});

bthread("List update verification", function () {
  const e = waitForAnyListUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteList(k), function () {
    verifyListUpdated(k);
  });
});

bthread("List delete verification", function () {
  const e = waitForAnyListDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddList(k), function () {
    verifyListDoesNotExist(k);
  });
});

bthread("Livetemplate create verification", function () {
  const e = waitForAnyLivetemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLivetemplate(k), function () {
    verifyLivetemplateExists(k);
  });
});

bthread("Livetemplate update verification", function () {
  const e = waitForAnyLivetemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLivetemplate(k), function () {
    verifyLivetemplateUpdated(k);
  });
});

bthread("Livetemplate delete verification", function () {
  const e = waitForAnyLivetemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLivetemplate(k), function () {
    verifyLivetemplateDoesNotExist(k);
  });
});

bthread("Locale create verification", function () {
  const e = waitForAnyLocaleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocale(k), function () {
    verifyLocaleExists(k);
  });
});

bthread("Locale update verification", function () {
  const e = waitForAnyLocaleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocale(k), function () {
    verifyLocaleUpdated(k);
  });
});

bthread("Locale delete verification", function () {
  const e = waitForAnyLocaleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLocale(k), function () {
    verifyLocaleDoesNotExist(k);
  });
});

bthread("Mapping create verification", function () {
  const e = waitForAnyMappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMapping(k), function () {
    verifyMappingExists(k);
  });
});

bthread("Mapping update verification", function () {
  const e = waitForAnyMappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMapping(k), function () {
    verifyMappingUpdated(k);
  });
});

bthread("Mapping delete verification", function () {
  const e = waitForAnyMappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMapping(k), function () {
    verifyMappingDoesNotExist(k);
  });
});

bthread("Match create verification", function () {
  const e = waitForAnyMatchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatch(k), function () {
    verifyMatchExists(k);
  });
});

bthread("Match update verification", function () {
  const e = waitForAnyMatchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatch(k), function () {
    verifyMatchUpdated(k);
  });
});

bthread("Match delete verification", function () {
  const e = waitForAnyMatchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMatch(k), function () {
    verifyMatchDoesNotExist(k);
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

bthread("Mergeto create verification", function () {
  const e = waitForAnyMergetoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMergeto(k), function () {
    verifyMergetoExists(k);
  });
});

bthread("Mergeto update verification", function () {
  const e = waitForAnyMergetoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMergeto(k), function () {
    verifyMergetoUpdated(k);
  });
});

bthread("Mergeto delete verification", function () {
  const e = waitForAnyMergetoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMergeto(k), function () {
    verifyMergetoDoesNotExist(k);
  });
});

bthread("Meta create verification", function () {
  const e = waitForAnyMetaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMeta(k), function () {
    verifyMetaExists(k);
  });
});

bthread("Meta update verification", function () {
  const e = waitForAnyMetaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMeta(k), function () {
    verifyMetaUpdated(k);
  });
});

bthread("Meta delete verification", function () {
  const e = waitForAnyMetaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMeta(k), function () {
    verifyMetaDoesNotExist(k);
  });
});

bthread("Migration create verification", function () {
  const e = waitForAnyMigrationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMigration(k), function () {
    verifyMigrationExists(k);
  });
});

bthread("Migration update verification", function () {
  const e = waitForAnyMigrationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMigration(k), function () {
    verifyMigrationUpdated(k);
  });
});

bthread("Migration delete verification", function () {
  const e = waitForAnyMigrationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMigration(k), function () {
    verifyMigrationDoesNotExist(k);
  });
});

bthread("Module create verification", function () {
  const e = waitForAnyModuleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteModule(k), function () {
    verifyModuleExists(k);
  });
});

bthread("Module update verification", function () {
  const e = waitForAnyModuleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteModule(k), function () {
    verifyModuleUpdated(k);
  });
});

bthread("Module delete verification", function () {
  const e = waitForAnyModuleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddModule(k), function () {
    verifyModuleDoesNotExist(k);
  });
});

bthread("Move create verification", function () {
  const e = waitForAnyMoveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMove(k), function () {
    verifyMoveExists(k);
  });
});

bthread("Move update verification", function () {
  const e = waitForAnyMoveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMove(k), function () {
    verifyMoveUpdated(k);
  });
});

bthread("Move delete verification", function () {
  const e = waitForAnyMoveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMove(k), function () {
    verifyMoveDoesNotExist(k);
  });
});

bthread("Multi create verification", function () {
  const e = waitForAnyMultiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMulti(k), function () {
    verifyMultiExists(k);
  });
});

bthread("Multi update verification", function () {
  const e = waitForAnyMultiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMulti(k), function () {
    verifyMultiUpdated(k);
  });
});

bthread("Multi delete verification", function () {
  const e = waitForAnyMultiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMulti(k), function () {
    verifyMultiDoesNotExist(k);
  });
});

bthread("Multiprojectsearch create verification", function () {
  const e = waitForAnyMultiprojectsearchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMultiprojectsearch(k), function () {
    verifyMultiprojectsearchExists(k);
  });
});

bthread("Multiprojectsearch update verification", function () {
  const e = waitForAnyMultiprojectsearchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMultiprojectsearch(k), function () {
    verifyMultiprojectsearchUpdated(k);
  });
});

bthread("Multiprojectsearch delete verification", function () {
  const e = waitForAnyMultiprojectsearchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMultiprojectsearch(k), function () {
    verifyMultiprojectsearchDoesNotExist(k);
  });
});

bthread("My create verification", function () {
  const e = waitForAnyMyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMy(k), function () {
    verifyMyExists(k);
  });
});

bthread("My update verification", function () {
  const e = waitForAnyMyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMy(k), function () {
    verifyMyUpdated(k);
  });
});

bthread("My delete verification", function () {
  const e = waitForAnyMyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMy(k), function () {
    verifyMyDoesNotExist(k);
  });
});

bthread("Mypermission create verification", function () {
  const e = waitForAnyMypermissionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMypermission(k), function () {
    verifyMypermissionExists(k);
  });
});

bthread("Mypermission update verification", function () {
  const e = waitForAnyMypermissionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMypermission(k), function () {
    verifyMypermissionUpdated(k);
  });
});

bthread("Mypermission delete verification", function () {
  const e = waitForAnyMypermissionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMypermission(k), function () {
    verifyMypermissionDoesNotExist(k);
  });
});

bthread("Mypreference create verification", function () {
  const e = waitForAnyMypreferenceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMypreference(k), function () {
    verifyMypreferenceExists(k);
  });
});

bthread("Mypreference update verification", function () {
  const e = waitForAnyMypreferenceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMypreference(k), function () {
    verifyMypreferenceUpdated(k);
  });
});

bthread("Mypreference delete verification", function () {
  const e = waitForAnyMypreferenceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMypreference(k), function () {
    verifyMypreferenceDoesNotExist(k);
  });
});

bthread("Myself create verification", function () {
  const e = waitForAnyMyselfAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyself(k), function () {
    verifyMyselfExists(k);
  });
});

bthread("Myself update verification", function () {
  const e = waitForAnyMyselfUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyself(k), function () {
    verifyMyselfUpdated(k);
  });
});

bthread("Myself delete verification", function () {
  const e = waitForAnyMyselfDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyself(k), function () {
    verifyMyselfDoesNotExist(k);
  });
});

bthread("Nav4optproperty create verification", function () {
  const e = waitForAnyNav4optpropertyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNav4optproperty(k), function () {
    verifyNav4optpropertyExists(k);
  });
});

bthread("Nav4optproperty update verification", function () {
  const e = waitForAnyNav4optpropertyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNav4optproperty(k), function () {
    verifyNav4optpropertyUpdated(k);
  });
});

bthread("Nav4optproperty delete verification", function () {
  const e = waitForAnyNav4optpropertyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNav4optproperty(k), function () {
    verifyNav4optpropertyDoesNotExist(k);
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

bthread("Notificationscheme create verification", function () {
  const e = waitForAnyNotificationschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotificationscheme(k), function () {
    verifyNotificationschemeExists(k);
  });
});

bthread("Notificationscheme update verification", function () {
  const e = waitForAnyNotificationschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotificationscheme(k), function () {
    verifyNotificationschemeUpdated(k);
  });
});

bthread("Notificationscheme delete verification", function () {
  const e = waitForAnyNotificationschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotificationscheme(k), function () {
    verifyNotificationschemeDoesNotExist(k);
  });
});

bthread("Notify create verification", function () {
  const e = waitForAnyNotifyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotify(k), function () {
    verifyNotifyExists(k);
  });
});

bthread("Notify update verification", function () {
  const e = waitForAnyNotifyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotify(k), function () {
    verifyNotifyUpdated(k);
  });
});

bthread("Notify delete verification", function () {
  const e = waitForAnyNotifyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotify(k), function () {
    verifyNotifyDoesNotExist(k);
  });
});

bthread("Option create verification", function () {
  const e = waitForAnyOptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOption(k), function () {
    verifyOptionExists(k);
  });
});

bthread("Option update verification", function () {
  const e = waitForAnyOptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOption(k), function () {
    verifyOptionUpdated(k);
  });
});

bthread("Option delete verification", function () {
  const e = waitForAnyOptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOption(k), function () {
    verifyOptionDoesNotExist(k);
  });
});

bthread("Owner create verification", function () {
  const e = waitForAnyOwnerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOwner(k), function () {
    verifyOwnerExists(k);
  });
});

bthread("Owner update verification", function () {
  const e = waitForAnyOwnerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOwner(k), function () {
    verifyOwnerUpdated(k);
  });
});

bthread("Owner delete verification", function () {
  const e = waitForAnyOwnerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOwner(k), function () {
    verifyOwnerDoesNotExist(k);
  });
});

bthread("Parse create verification", function () {
  const e = waitForAnyParseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParse(k), function () {
    verifyParseExists(k);
  });
});

bthread("Parse update verification", function () {
  const e = waitForAnyParseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParse(k), function () {
    verifyParseUpdated(k);
  });
});

bthread("Parse delete verification", function () {
  const e = waitForAnyParseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddParse(k), function () {
    verifyParseDoesNotExist(k);
  });
});

bthread("Pdcleaner create verification", function () {
  const e = waitForAnyPdcleanerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePdcleaner(k), function () {
    verifyPdcleanerExists(k);
  });
});

bthread("Pdcleaner update verification", function () {
  const e = waitForAnyPdcleanerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePdcleaner(k), function () {
    verifyPdcleanerUpdated(k);
  });
});

bthread("Pdcleaner delete verification", function () {
  const e = waitForAnyPdcleanerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPdcleaner(k), function () {
    verifyPdcleanerDoesNotExist(k);
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

bthread("Permissionscheme create verification", function () {
  const e = waitForAnyPermissionschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermissionscheme(k), function () {
    verifyPermissionschemeExists(k);
  });
});

bthread("Permissionscheme update verification", function () {
  const e = waitForAnyPermissionschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermissionscheme(k), function () {
    verifyPermissionschemeUpdated(k);
  });
});

bthread("Permissionscheme delete verification", function () {
  const e = waitForAnyPermissionschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPermissionscheme(k), function () {
    verifyPermissionschemeDoesNotExist(k);
  });
});

bthread("Picker create verification", function () {
  const e = waitForAnyPickerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePicker(k), function () {
    verifyPickerExists(k);
  });
});

bthread("Picker update verification", function () {
  const e = waitForAnyPickerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePicker(k), function () {
    verifyPickerUpdated(k);
  });
});

bthread("Picker delete verification", function () {
  const e = waitForAnyPickerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPicker(k), function () {
    verifyPickerDoesNotExist(k);
  });
});

bthread("Plan create verification", function () {
  const e = waitForAnyPlanAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlan(k), function () {
    verifyPlanExists(k);
  });
});

bthread("Plan update verification", function () {
  const e = waitForAnyPlanUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlan(k), function () {
    verifyPlanUpdated(k);
  });
});

bthread("Plan delete verification", function () {
  const e = waitForAnyPlanDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPlan(k), function () {
    verifyPlanDoesNotExist(k);
  });
});

bthread("Planonly create verification", function () {
  const e = waitForAnyPlanonlyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlanonly(k), function () {
    verifyPlanonlyExists(k);
  });
});

bthread("Planonly update verification", function () {
  const e = waitForAnyPlanonlyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlanonly(k), function () {
    verifyPlanonlyUpdated(k);
  });
});

bthread("Planonly delete verification", function () {
  const e = waitForAnyPlanonlyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPlanonly(k), function () {
    verifyPlanonlyDoesNotExist(k);
  });
});

bthread("Preview create verification", function () {
  const e = waitForAnyPreviewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePreview(k), function () {
    verifyPreviewExists(k);
  });
});

bthread("Preview update verification", function () {
  const e = waitForAnyPreviewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePreview(k), function () {
    verifyPreviewUpdated(k);
  });
});

bthread("Preview delete verification", function () {
  const e = waitForAnyPreviewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPreview(k), function () {
    verifyPreviewDoesNotExist(k);
  });
});

bthread("Priority create verification", function () {
  const e = waitForAnyPriorityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePriority(k), function () {
    verifyPriorityExists(k);
  });
});

bthread("Priority update verification", function () {
  const e = waitForAnyPriorityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePriority(k), function () {
    verifyPriorityUpdated(k);
  });
});

bthread("Priority delete verification", function () {
  const e = waitForAnyPriorityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPriority(k), function () {
    verifyPriorityDoesNotExist(k);
  });
});

bthread("Priorityscheme create verification", function () {
  const e = waitForAnyPriorityschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePriorityscheme(k), function () {
    verifyPriorityschemeExists(k);
  });
});

bthread("Priorityscheme update verification", function () {
  const e = waitForAnyPriorityschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePriorityscheme(k), function () {
    verifyPriorityschemeUpdated(k);
  });
});

bthread("Priorityscheme delete verification", function () {
  const e = waitForAnyPriorityschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPriorityscheme(k), function () {
    verifyPriorityschemeDoesNotExist(k);
  });
});

bthread("Product create verification", function () {
  const e = waitForAnyProductAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProduct(k), function () {
    verifyProductExists(k);
  });
});

bthread("Product update verification", function () {
  const e = waitForAnyProductUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProduct(k), function () {
    verifyProductUpdated(k);
  });
});

bthread("Product delete verification", function () {
  const e = waitForAnyProductDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProduct(k), function () {
    verifyProductDoesNotExist(k);
  });
});

bthread("Project create verification", function () {
  const e = waitForAnyProjectAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProject(k), function () {
    verifyProjectExists(k);
  });
});

bthread("Project update verification", function () {
  const e = waitForAnyProjectUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProject(k), function () {
    verifyProjectUpdated(k);
  });
});

bthread("Project delete verification", function () {
  const e = waitForAnyProjectDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProject(k), function () {
    verifyProjectDoesNotExist(k);
  });
});

bthread("Projectcategory create verification", function () {
  const e = waitForAnyProjectcategoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectcategory(k), function () {
    verifyProjectcategoryExists(k);
  });
});

bthread("Projectcategory update verification", function () {
  const e = waitForAnyProjectcategoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectcategory(k), function () {
    verifyProjectcategoryUpdated(k);
  });
});

bthread("Projectcategory delete verification", function () {
  const e = waitForAnyProjectcategoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProjectcategory(k), function () {
    verifyProjectcategoryDoesNotExist(k);
  });
});

bthread("Projectmapping create verification", function () {
  const e = waitForAnyProjectmappingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectmapping(k), function () {
    verifyProjectmappingExists(k);
  });
});

bthread("Projectmapping update verification", function () {
  const e = waitForAnyProjectmappingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectmapping(k), function () {
    verifyProjectmappingUpdated(k);
  });
});

bthread("Projectmapping delete verification", function () {
  const e = waitForAnyProjectmappingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProjectmapping(k), function () {
    verifyProjectmappingDoesNotExist(k);
  });
});

bthread("Projecttemplate create verification", function () {
  const e = waitForAnyProjecttemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjecttemplate(k), function () {
    verifyProjecttemplateExists(k);
  });
});

bthread("Projecttemplate update verification", function () {
  const e = waitForAnyProjecttemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjecttemplate(k), function () {
    verifyProjecttemplateUpdated(k);
  });
});

bthread("Projecttemplate delete verification", function () {
  const e = waitForAnyProjecttemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProjecttemplate(k), function () {
    verifyProjecttemplateDoesNotExist(k);
  });
});

bthread("Projectusage create verification", function () {
  const e = waitForAnyProjectusageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectusage(k), function () {
    verifyProjectusageExists(k);
  });
});

bthread("Projectusage update verification", function () {
  const e = waitForAnyProjectusageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectusage(k), function () {
    verifyProjectusageUpdated(k);
  });
});

bthread("Projectusage delete verification", function () {
  const e = waitForAnyProjectusageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProjectusage(k), function () {
    verifyProjectusageDoesNotExist(k);
  });
});

bthread("Projectvalidate create verification", function () {
  const e = waitForAnyProjectvalidateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectvalidate(k), function () {
    verifyProjectvalidateExists(k);
  });
});

bthread("Projectvalidate update verification", function () {
  const e = waitForAnyProjectvalidateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectvalidate(k), function () {
    verifyProjectvalidateUpdated(k);
  });
});

bthread("Projectvalidate delete verification", function () {
  const e = waitForAnyProjectvalidateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProjectvalidate(k), function () {
    verifyProjectvalidateDoesNotExist(k);
  });
});

bthread("Property create verification", function () {
  const e = waitForAnyPropertyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProperty(k), function () {
    verifyPropertyExists(k);
  });
});

bthread("Property update verification", function () {
  const e = waitForAnyPropertyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProperty(k), function () {
    verifyPropertyUpdated(k);
  });
});

bthread("Property delete verification", function () {
  const e = waitForAnyPropertyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProperty(k), function () {
    verifyPropertyDoesNotExist(k);
  });
});

bthread("Publish create verification", function () {
  const e = waitForAnyPublishAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublish(k), function () {
    verifyPublishExists(k);
  });
});

bthread("Publish update verification", function () {
  const e = waitForAnyPublishUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublish(k), function () {
    verifyPublishUpdated(k);
  });
});

bthread("Publish delete verification", function () {
  const e = waitForAnyPublishDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublish(k), function () {
    verifyPublishDoesNotExist(k);
  });
});

bthread("Query create verification", function () {
  const e = waitForAnyQueryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQuery(k), function () {
    verifyQueryExists(k);
  });
});

bthread("Query update verification", function () {
  const e = waitForAnyQueryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQuery(k), function () {
    verifyQueryUpdated(k);
  });
});

bthread("Query delete verification", function () {
  const e = waitForAnyQueryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddQuery(k), function () {
    verifyQueryDoesNotExist(k);
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

bthread("Raw create verification", function () {
  const e = waitForAnyRawAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRaw(k), function () {
    verifyRawExists(k);
  });
});

bthread("Raw update verification", function () {
  const e = waitForAnyRawUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRaw(k), function () {
    verifyRawUpdated(k);
  });
});

bthread("Raw delete verification", function () {
  const e = waitForAnyRawDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRaw(k), function () {
    verifyRawDoesNotExist(k);
  });
});

bthread("Read create verification", function () {
  const e = waitForAnyReadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRead(k), function () {
    verifyReadExists(k);
  });
});

bthread("Read update verification", function () {
  const e = waitForAnyReadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRead(k), function () {
    verifyReadUpdated(k);
  });
});

bthread("Read delete verification", function () {
  const e = waitForAnyReadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRead(k), function () {
    verifyReadDoesNotExist(k);
  });
});

bthread("Recent create verification", function () {
  const e = waitForAnyRecentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecent(k), function () {
    verifyRecentExists(k);
  });
});

bthread("Recent update verification", function () {
  const e = waitForAnyRecentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRecent(k), function () {
    verifyRecentUpdated(k);
  });
});

bthread("Recent delete verification", function () {
  const e = waitForAnyRecentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRecent(k), function () {
    verifyRecentDoesNotExist(k);
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

bthread("Redact create verification", function () {
  const e = waitForAnyRedactAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRedact(k), function () {
    verifyRedactExists(k);
  });
});

bthread("Redact update verification", function () {
  const e = waitForAnyRedactUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRedact(k), function () {
    verifyRedactUpdated(k);
  });
});

bthread("Redact delete verification", function () {
  const e = waitForAnyRedactDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRedact(k), function () {
    verifyRedactDoesNotExist(k);
  });
});

bthread("Refresh create verification", function () {
  const e = waitForAnyRefreshAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRefresh(k), function () {
    verifyRefreshExists(k);
  });
});

bthread("Refresh update verification", function () {
  const e = waitForAnyRefreshUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRefresh(k), function () {
    verifyRefreshUpdated(k);
  });
});

bthread("Refresh delete verification", function () {
  const e = waitForAnyRefreshDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRefresh(k), function () {
    verifyRefreshDoesNotExist(k);
  });
});

bthread("Relatedissuecount create verification", function () {
  const e = waitForAnyRelatedissuecountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelatedissuecount(k), function () {
    verifyRelatedissuecountExists(k);
  });
});

bthread("Relatedissuecount update verification", function () {
  const e = waitForAnyRelatedissuecountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelatedissuecount(k), function () {
    verifyRelatedissuecountUpdated(k);
  });
});

bthread("Relatedissuecount delete verification", function () {
  const e = waitForAnyRelatedissuecountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRelatedissuecount(k), function () {
    verifyRelatedissuecountDoesNotExist(k);
  });
});

bthread("Relatedwork create verification", function () {
  const e = waitForAnyRelatedworkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelatedwork(k), function () {
    verifyRelatedworkExists(k);
  });
});

bthread("Relatedwork update verification", function () {
  const e = waitForAnyRelatedworkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelatedwork(k), function () {
    verifyRelatedworkUpdated(k);
  });
});

bthread("Relatedwork delete verification", function () {
  const e = waitForAnyRelatedworkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRelatedwork(k), function () {
    verifyRelatedworkDoesNotExist(k);
  });
});

bthread("Remotelink create verification", function () {
  const e = waitForAnyRemotelinkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemotelink(k), function () {
    verifyRemotelinkExists(k);
  });
});

bthread("Remotelink update verification", function () {
  const e = waitForAnyRemotelinkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemotelink(k), function () {
    verifyRemotelinkUpdated(k);
  });
});

bthread("Remotelink delete verification", function () {
  const e = waitForAnyRemotelinkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemotelink(k), function () {
    verifyRemotelinkDoesNotExist(k);
  });
});

bthread("Remove create verification", function () {
  const e = waitForAnyRemoveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemove(k), function () {
    verifyRemoveExists(k);
  });
});

bthread("Remove update verification", function () {
  const e = waitForAnyRemoveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemove(k), function () {
    verifyRemoveUpdated(k);
  });
});

bthread("Remove delete verification", function () {
  const e = waitForAnyRemoveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemove(k), function () {
    verifyRemoveDoesNotExist(k);
  });
});

bthread("Removeandswap create verification", function () {
  const e = waitForAnyRemoveandswapAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemoveandswap(k), function () {
    verifyRemoveandswapExists(k);
  });
});

bthread("Removeandswap update verification", function () {
  const e = waitForAnyRemoveandswapUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemoveandswap(k), function () {
    verifyRemoveandswapUpdated(k);
  });
});

bthread("Removeandswap delete verification", function () {
  const e = waitForAnyRemoveandswapDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemoveandswap(k), function () {
    verifyRemoveandswapDoesNotExist(k);
  });
});

bthread("Removetemplate create verification", function () {
  const e = waitForAnyRemovetemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemovetemplate(k), function () {
    verifyRemovetemplateExists(k);
  });
});

bthread("Removetemplate update verification", function () {
  const e = waitForAnyRemovetemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemovetemplate(k), function () {
    verifyRemovetemplateUpdated(k);
  });
});

bthread("Removetemplate delete verification", function () {
  const e = waitForAnyRemovetemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemovetemplate(k), function () {
    verifyRemovetemplateDoesNotExist(k);
  });
});

bthread("Report create verification", function () {
  const e = waitForAnyReportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReport(k), function () {
    verifyReportExists(k);
  });
});

bthread("Report update verification", function () {
  const e = waitForAnyReportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReport(k), function () {
    verifyReportUpdated(k);
  });
});

bthread("Report delete verification", function () {
  const e = waitForAnyReportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReport(k), function () {
    verifyReportDoesNotExist(k);
  });
});

bthread("Resolution create verification", function () {
  const e = waitForAnyResolutionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResolution(k), function () {
    verifyResolutionExists(k);
  });
});

bthread("Resolution update verification", function () {
  const e = waitForAnyResolutionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResolution(k), function () {
    verifyResolutionUpdated(k);
  });
});

bthread("Resolution delete verification", function () {
  const e = waitForAnyResolutionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResolution(k), function () {
    verifyResolutionDoesNotExist(k);
  });
});

bthread("Rest create verification", function () {
  const e = waitForAnyRestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRest(k), function () {
    verifyRestExists(k);
  });
});

bthread("Rest update verification", function () {
  const e = waitForAnyRestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRest(k), function () {
    verifyRestUpdated(k);
  });
});

bthread("Rest delete verification", function () {
  const e = waitForAnyRestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRest(k), function () {
    verifyRestDoesNotExist(k);
  });
});

bthread("Restore create verification", function () {
  const e = waitForAnyRestoreAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRestore(k), function () {
    verifyRestoreExists(k);
  });
});

bthread("Restore update verification", function () {
  const e = waitForAnyRestoreUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRestore(k), function () {
    verifyRestoreUpdated(k);
  });
});

bthread("Restore delete verification", function () {
  const e = waitForAnyRestoreDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRestore(k), function () {
    verifyRestoreDoesNotExist(k);
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

bthread("Roledetail create verification", function () {
  const e = waitForAnyRoledetailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoledetail(k), function () {
    verifyRoledetailExists(k);
  });
});

bthread("Roledetail update verification", function () {
  const e = waitForAnyRoledetailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoledetail(k), function () {
    verifyRoledetailUpdated(k);
  });
});

bthread("Roledetail delete verification", function () {
  const e = waitForAnyRoledetailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRoledetail(k), function () {
    verifyRoledetailDoesNotExist(k);
  });
});

bthread("Rule create verification", function () {
  const e = waitForAnyRuleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRule(k), function () {
    verifyRuleExists(k);
  });
});

bthread("Rule update verification", function () {
  const e = waitForAnyRuleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRule(k), function () {
    verifyRuleUpdated(k);
  });
});

bthread("Rule delete verification", function () {
  const e = waitForAnyRuleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRule(k), function () {
    verifyRuleDoesNotExist(k);
  });
});

bthread("Sanitize create verification", function () {
  const e = waitForAnySanitizeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSanitize(k), function () {
    verifySanitizeExists(k);
  });
});

bthread("Sanitize update verification", function () {
  const e = waitForAnySanitizeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSanitize(k), function () {
    verifySanitizeUpdated(k);
  });
});

bthread("Sanitize delete verification", function () {
  const e = waitForAnySanitizeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSanitize(k), function () {
    verifySanitizeDoesNotExist(k);
  });
});

bthread("Savetemplate create verification", function () {
  const e = waitForAnySavetemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSavetemplate(k), function () {
    verifySavetemplateExists(k);
  });
});

bthread("Savetemplate update verification", function () {
  const e = waitForAnySavetemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSavetemplate(k), function () {
    verifySavetemplateUpdated(k);
  });
});

bthread("Savetemplate delete verification", function () {
  const e = waitForAnySavetemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSavetemplate(k), function () {
    verifySavetemplateDoesNotExist(k);
  });
});

bthread("Screen create verification", function () {
  const e = waitForAnyScreenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScreen(k), function () {
    verifyScreenExists(k);
  });
});

bthread("Screen update verification", function () {
  const e = waitForAnyScreenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScreen(k), function () {
    verifyScreenUpdated(k);
  });
});

bthread("Screen delete verification", function () {
  const e = waitForAnyScreenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScreen(k), function () {
    verifyScreenDoesNotExist(k);
  });
});

bthread("Screenscheme create verification", function () {
  const e = waitForAnyScreenschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScreenscheme(k), function () {
    verifyScreenschemeExists(k);
  });
});

bthread("Screenscheme update verification", function () {
  const e = waitForAnyScreenschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScreenscheme(k), function () {
    verifyScreenschemeUpdated(k);
  });
});

bthread("Screenscheme delete verification", function () {
  const e = waitForAnyScreenschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScreenscheme(k), function () {
    verifyScreenschemeDoesNotExist(k);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearch(k), function () {
    verifySearchExists(k);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearch(k), function () {
    verifySearchUpdated(k);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSearch(k), function () {
    verifySearchDoesNotExist(k);
  });
});

bthread("Securitylevel create verification", function () {
  const e = waitForAnySecuritylevelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecuritylevel(k), function () {
    verifySecuritylevelExists(k);
  });
});

bthread("Securitylevel update verification", function () {
  const e = waitForAnySecuritylevelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecuritylevel(k), function () {
    verifySecuritylevelUpdated(k);
  });
});

bthread("Securitylevel delete verification", function () {
  const e = waitForAnySecuritylevelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSecuritylevel(k), function () {
    verifySecuritylevelDoesNotExist(k);
  });
});

bthread("Serverinfo create verification", function () {
  const e = waitForAnyServerinfoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServerinfo(k), function () {
    verifyServerinfoExists(k);
  });
});

bthread("Serverinfo update verification", function () {
  const e = waitForAnyServerinfoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServerinfo(k), function () {
    verifyServerinfoUpdated(k);
  });
});

bthread("Serverinfo delete verification", function () {
  const e = waitForAnyServerinfoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddServerinfo(k), function () {
    verifyServerinfoDoesNotExist(k);
  });
});

bthread("Serviceregistry create verification", function () {
  const e = waitForAnyServiceregistryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServiceregistry(k), function () {
    verifyServiceregistryExists(k);
  });
});

bthread("Serviceregistry update verification", function () {
  const e = waitForAnyServiceregistryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServiceregistry(k), function () {
    verifyServiceregistryUpdated(k);
  });
});

bthread("Serviceregistry delete verification", function () {
  const e = waitForAnyServiceregistryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddServiceregistry(k), function () {
    verifyServiceregistryDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSetting(k), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSetting(k), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSetting(k), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatu(k), function () {
    verifyStatuExists(k);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatu(k), function () {
    verifyStatuUpdated(k);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStatu(k), function () {
    verifyStatuDoesNotExist(k);
  });
});

bthread("Status create verification", function () {
  const e = waitForAnyStatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatus(k), function () {
    verifyStatusExists(k);
  });
});

bthread("Status update verification", function () {
  const e = waitForAnyStatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatus(k), function () {
    verifyStatusUpdated(k);
  });
});

bthread("Status delete verification", function () {
  const e = waitForAnyStatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStatus(k), function () {
    verifyStatusDoesNotExist(k);
  });
});

bthread("Statuscategory create verification", function () {
  const e = waitForAnyStatuscategoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatuscategory(k), function () {
    verifyStatuscategoryExists(k);
  });
});

bthread("Statuscategory update verification", function () {
  const e = waitForAnyStatuscategoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatuscategory(k), function () {
    verifyStatuscategoryUpdated(k);
  });
});

bthread("Statuscategory delete verification", function () {
  const e = waitForAnyStatuscategoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStatuscategory(k), function () {
    verifyStatuscategoryDoesNotExist(k);
  });
});

bthread("Suggestion create verification", function () {
  const e = waitForAnySuggestionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSuggestion(k), function () {
    verifySuggestionExists(k);
  });
});

bthread("Suggestion update verification", function () {
  const e = waitForAnySuggestionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSuggestion(k), function () {
    verifySuggestionUpdated(k);
  });
});

bthread("Suggestion delete verification", function () {
  const e = waitForAnySuggestionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSuggestion(k), function () {
    verifySuggestionDoesNotExist(k);
  });
});

bthread("System create verification", function () {
  const e = waitForAnySystemAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSystem(k), function () {
    verifySystemExists(k);
  });
});

bthread("System update verification", function () {
  const e = waitForAnySystemUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSystem(k), function () {
    verifySystemUpdated(k);
  });
});

bthread("System delete verification", function () {
  const e = waitForAnySystemDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSystem(k), function () {
    verifySystemDoesNotExist(k);
  });
});

bthread("Tab create verification", function () {
  const e = waitForAnyTabAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTab(k), function () {
    verifyTabExists(k);
  });
});

bthread("Tab update verification", function () {
  const e = waitForAnyTabUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTab(k), function () {
    verifyTabUpdated(k);
  });
});

bthread("Tab delete verification", function () {
  const e = waitForAnyTabDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTab(k), function () {
    verifyTabDoesNotExist(k);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTask(k), function () {
    verifyTaskExists(k);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTask(k), function () {
    verifyTaskUpdated(k);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTask(k), function () {
    verifyTaskDoesNotExist(k);
  });
});

bthread("Team create verification", function () {
  const e = waitForAnyTeamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTeam(k), function () {
    verifyTeamExists(k);
  });
});

bthread("Team update verification", function () {
  const e = waitForAnyTeamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTeam(k), function () {
    verifyTeamUpdated(k);
  });
});

bthread("Team delete verification", function () {
  const e = waitForAnyTeamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTeam(k), function () {
    verifyTeamDoesNotExist(k);
  });
});

bthread("Thumbnail create verification", function () {
  const e = waitForAnyThumbnailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteThumbnail(k), function () {
    verifyThumbnailExists(k);
  });
});

bthread("Thumbnail update verification", function () {
  const e = waitForAnyThumbnailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteThumbnail(k), function () {
    verifyThumbnailUpdated(k);
  });
});

bthread("Thumbnail delete verification", function () {
  const e = waitForAnyThumbnailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddThumbnail(k), function () {
    verifyThumbnailDoesNotExist(k);
  });
});

bthread("Timetracking create verification", function () {
  const e = waitForAnyTimetrackingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimetracking(k), function () {
    verifyTimetrackingExists(k);
  });
});

bthread("Timetracking update verification", function () {
  const e = waitForAnyTimetrackingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimetracking(k), function () {
    verifyTimetrackingUpdated(k);
  });
});

bthread("Timetracking delete verification", function () {
  const e = waitForAnyTimetrackingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTimetracking(k), function () {
    verifyTimetrackingDoesNotExist(k);
  });
});

bthread("Transition create verification", function () {
  const e = waitForAnyTransitionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTransition(k), function () {
    verifyTransitionExists(k);
  });
});

bthread("Transition update verification", function () {
  const e = waitForAnyTransitionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTransition(k), function () {
    verifyTransitionUpdated(k);
  });
});

bthread("Transition delete verification", function () {
  const e = waitForAnyTransitionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTransition(k), function () {
    verifyTransitionDoesNotExist(k);
  });
});

bthread("Trash create verification", function () {
  const e = waitForAnyTrashAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrash(k), function () {
    verifyTrashExists(k);
  });
});

bthread("Trash update verification", function () {
  const e = waitForAnyTrashUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrash(k), function () {
    verifyTrashUpdated(k);
  });
});

bthread("Trash delete verification", function () {
  const e = waitForAnyTrashDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTrash(k), function () {
    verifyTrashDoesNotExist(k);
  });
});

bthread("Trashed create verification", function () {
  const e = waitForAnyTrashedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrashed(k), function () {
    verifyTrashedExists(k);
  });
});

bthread("Trashed update verification", function () {
  const e = waitForAnyTrashedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrashed(k), function () {
    verifyTrashedUpdated(k);
  });
});

bthread("Trashed delete verification", function () {
  const e = waitForAnyTrashedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTrashed(k), function () {
    verifyTrashedDoesNotExist(k);
  });
});

bthread("Type create verification", function () {
  const e = waitForAnyTypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteType(k), function () {
    verifyTypeExists(k);
  });
});

bthread("Type update verification", function () {
  const e = waitForAnyTypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteType(k), function () {
    verifyTypeUpdated(k);
  });
});

bthread("Type delete verification", function () {
  const e = waitForAnyTypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddType(k), function () {
    verifyTypeDoesNotExist(k);
  });
});

bthread("Uimodification create verification", function () {
  const e = waitForAnyUimodificationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUimodification(k), function () {
    verifyUimodificationExists(k);
  });
});

bthread("Uimodification update verification", function () {
  const e = waitForAnyUimodificationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUimodification(k), function () {
    verifyUimodificationUpdated(k);
  });
});

bthread("Uimodification delete verification", function () {
  const e = waitForAnyUimodificationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUimodification(k), function () {
    verifyUimodificationDoesNotExist(k);
  });
});

bthread("Unarchive create verification", function () {
  const e = waitForAnyUnarchiveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnarchive(k), function () {
    verifyUnarchiveExists(k);
  });
});

bthread("Unarchive update verification", function () {
  const e = waitForAnyUnarchiveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnarchive(k), function () {
    verifyUnarchiveUpdated(k);
  });
});

bthread("Unarchive delete verification", function () {
  const e = waitForAnyUnarchiveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUnarchive(k), function () {
    verifyUnarchiveDoesNotExist(k);
  });
});

bthread("Universalavatar create verification", function () {
  const e = waitForAnyUniversalavatarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUniversalavatar(k), function () {
    verifyUniversalavatarExists(k);
  });
});

bthread("Universalavatar update verification", function () {
  const e = waitForAnyUniversalavatarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUniversalavatar(k), function () {
    verifyUniversalavatarUpdated(k);
  });
});

bthread("Universalavatar delete verification", function () {
  const e = waitForAnyUniversalavatarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUniversalavatar(k), function () {
    verifyUniversalavatarDoesNotExist(k);
  });
});

bthread("Unresolvedissuecount create verification", function () {
  const e = waitForAnyUnresolvedissuecountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnresolvedissuecount(k), function () {
    verifyUnresolvedissuecountExists(k);
  });
});

bthread("Unresolvedissuecount update verification", function () {
  const e = waitForAnyUnresolvedissuecountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnresolvedissuecount(k), function () {
    verifyUnresolvedissuecountUpdated(k);
  });
});

bthread("Unresolvedissuecount delete verification", function () {
  const e = waitForAnyUnresolvedissuecountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUnresolvedissuecount(k), function () {
    verifyUnresolvedissuecountDoesNotExist(k);
  });
});

bthread("Unwatch create verification", function () {
  const e = waitForAnyUnwatchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnwatch(k), function () {
    verifyUnwatchExists(k);
  });
});

bthread("Unwatch update verification", function () {
  const e = waitForAnyUnwatchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnwatch(k), function () {
    verifyUnwatchUpdated(k);
  });
});

bthread("Unwatch delete verification", function () {
  const e = waitForAnyUnwatchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUnwatch(k), function () {
    verifyUnwatchDoesNotExist(k);
  });
});

bthread("Update create verification", function () {
  const e = waitForAnyUpdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdate(k), function () {
    verifyUpdateExists(k);
  });
});

bthread("Update update verification", function () {
  const e = waitForAnyUpdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdate(k), function () {
    verifyUpdateUpdated(k);
  });
});

bthread("Update delete verification", function () {
  const e = waitForAnyUpdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUpdate(k), function () {
    verifyUpdateDoesNotExist(k);
  });
});

bthread("Updated create verification", function () {
  const e = waitForAnyUpdatedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdated(k), function () {
    verifyUpdatedExists(k);
  });
});

bthread("Updated update verification", function () {
  const e = waitForAnyUpdatedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdated(k), function () {
    verifyUpdatedUpdated(k);
  });
});

bthread("Updated delete verification", function () {
  const e = waitForAnyUpdatedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUpdated(k), function () {
    verifyUpdatedDoesNotExist(k);
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

bthread("Validation create verification", function () {
  const e = waitForAnyValidationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidation(k), function () {
    verifyValidationExists(k);
  });
});

bthread("Validation update verification", function () {
  const e = waitForAnyValidationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidation(k), function () {
    verifyValidationUpdated(k);
  });
});

bthread("Validation delete verification", function () {
  const e = waitForAnyValidationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddValidation(k), function () {
    verifyValidationDoesNotExist(k);
  });
});

bthread("Validprojectkey create verification", function () {
  const e = waitForAnyValidprojectkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidprojectkey(k), function () {
    verifyValidprojectkeyExists(k);
  });
});

bthread("Validprojectkey update verification", function () {
  const e = waitForAnyValidprojectkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidprojectkey(k), function () {
    verifyValidprojectkeyUpdated(k);
  });
});

bthread("Validprojectkey delete verification", function () {
  const e = waitForAnyValidprojectkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddValidprojectkey(k), function () {
    verifyValidprojectkeyDoesNotExist(k);
  });
});

bthread("Validprojectname create verification", function () {
  const e = waitForAnyValidprojectnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidprojectname(k), function () {
    verifyValidprojectnameExists(k);
  });
});

bthread("Validprojectname update verification", function () {
  const e = waitForAnyValidprojectnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidprojectname(k), function () {
    verifyValidprojectnameUpdated(k);
  });
});

bthread("Validprojectname delete verification", function () {
  const e = waitForAnyValidprojectnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddValidprojectname(k), function () {
    verifyValidprojectnameDoesNotExist(k);
  });
});

bthread("Value create verification", function () {
  const e = waitForAnyValueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValue(k), function () {
    verifyValueExists(k);
  });
});

bthread("Value update verification", function () {
  const e = waitForAnyValueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValue(k), function () {
    verifyValueUpdated(k);
  });
});

bthread("Value delete verification", function () {
  const e = waitForAnyValueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddValue(k), function () {
    verifyValueDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersion(k), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersion(k), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVersion(k), function () {
    verifyVersionDoesNotExist(k);
  });
});

bthread("View create verification", function () {
  const e = waitForAnyViewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteView(k), function () {
    verifyViewExists(k);
  });
});

bthread("View update verification", function () {
  const e = waitForAnyViewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteView(k), function () {
    verifyViewUpdated(k);
  });
});

bthread("View delete verification", function () {
  const e = waitForAnyViewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddView(k), function () {
    verifyViewDoesNotExist(k);
  });
});

bthread("Viewissue create verification", function () {
  const e = waitForAnyViewissueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteViewissue(k), function () {
    verifyViewissueExists(k);
  });
});

bthread("Viewissue update verification", function () {
  const e = waitForAnyViewissueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteViewissue(k), function () {
    verifyViewissueUpdated(k);
  });
});

bthread("Viewissue delete verification", function () {
  const e = waitForAnyViewissueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddViewissue(k), function () {
    verifyViewissueDoesNotExist(k);
  });
});

bthread("Vote create verification", function () {
  const e = waitForAnyVoteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVote(k), function () {
    verifyVoteExists(k);
  });
});

bthread("Vote update verification", function () {
  const e = waitForAnyVoteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVote(k), function () {
    verifyVoteUpdated(k);
  });
});

bthread("Vote delete verification", function () {
  const e = waitForAnyVoteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVote(k), function () {
    verifyVoteDoesNotExist(k);
  });
});

bthread("Watch create verification", function () {
  const e = waitForAnyWatchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWatch(k), function () {
    verifyWatchExists(k);
  });
});

bthread("Watch update verification", function () {
  const e = waitForAnyWatchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWatch(k), function () {
    verifyWatchUpdated(k);
  });
});

bthread("Watch delete verification", function () {
  const e = waitForAnyWatchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWatch(k), function () {
    verifyWatchDoesNotExist(k);
  });
});

bthread("Watcher create verification", function () {
  const e = waitForAnyWatcherAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWatcher(k), function () {
    verifyWatcherExists(k);
  });
});

bthread("Watcher update verification", function () {
  const e = waitForAnyWatcherUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWatcher(k), function () {
    verifyWatcherUpdated(k);
  });
});

bthread("Watcher delete verification", function () {
  const e = waitForAnyWatcherDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWatcher(k), function () {
    verifyWatcherDoesNotExist(k);
  });
});

bthread("Watching create verification", function () {
  const e = waitForAnyWatchingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWatching(k), function () {
    verifyWatchingExists(k);
  });
});

bthread("Watching update verification", function () {
  const e = waitForAnyWatchingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWatching(k), function () {
    verifyWatchingUpdated(k);
  });
});

bthread("Watching delete verification", function () {
  const e = waitForAnyWatchingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWatching(k), function () {
    verifyWatchingDoesNotExist(k);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhook(k), function () {
    verifyWebhookExists(k);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhook(k), function () {
    verifyWebhookUpdated(k);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhook(k), function () {
    verifyWebhookDoesNotExist(k);
  });
});

bthread("Workflow create verification", function () {
  const e = waitForAnyWorkflowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflow(k), function () {
    verifyWorkflowExists(k);
  });
});

bthread("Workflow update verification", function () {
  const e = waitForAnyWorkflowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflow(k), function () {
    verifyWorkflowUpdated(k);
  });
});

bthread("Workflow delete verification", function () {
  const e = waitForAnyWorkflowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWorkflow(k), function () {
    verifyWorkflowDoesNotExist(k);
  });
});

bthread("Workflowscheme create verification", function () {
  const e = waitForAnyWorkflowschemeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflowscheme(k), function () {
    verifyWorkflowschemeExists(k);
  });
});

bthread("Workflowscheme update verification", function () {
  const e = waitForAnyWorkflowschemeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflowscheme(k), function () {
    verifyWorkflowschemeUpdated(k);
  });
});

bthread("Workflowscheme delete verification", function () {
  const e = waitForAnyWorkflowschemeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWorkflowscheme(k), function () {
    verifyWorkflowschemeDoesNotExist(k);
  });
});

bthread("Workflowusage create verification", function () {
  const e = waitForAnyWorkflowusageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflowusage(k), function () {
    verifyWorkflowusageExists(k);
  });
});

bthread("Workflowusage update verification", function () {
  const e = waitForAnyWorkflowusageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflowusage(k), function () {
    verifyWorkflowusageUpdated(k);
  });
});

bthread("Workflowusage delete verification", function () {
  const e = waitForAnyWorkflowusageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWorkflowusage(k), function () {
    verifyWorkflowusageDoesNotExist(k);
  });
});

bthread("Worklog create verification", function () {
  const e = waitForAnyWorklogAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorklog(k), function () {
    verifyWorklogExists(k);
  });
});

bthread("Worklog update verification", function () {
  const e = waitForAnyWorklogUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorklog(k), function () {
    verifyWorklogUpdated(k);
  });
});

bthread("Worklog delete verification", function () {
  const e = waitForAnyWorklogDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWorklog(k), function () {
    verifyWorklogDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique 1", function () {
  const x = waitForAny1Added();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAdd1(k, ANY), function () {});
});

bthread("Guard: Unique 3", function () {
  const x = waitForAny3Added();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAdd3(k, ANY), function () {});
});

bthread("Guard: Unique Accessible", function () {
  const x = waitForAnyAccessibleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccessible(k, ANY), function () {});
});

bthread("Guard: Unique Actor", function () {
  const x = waitForAnyActorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActor(k, ANY), function () {});
});

bthread("Guard: Unique Addon", function () {
  const x = waitForAnyAddonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddon(k, ANY), function () {});
});

bthread("Guard: Unique Addtodefault", function () {
  const x = waitForAnyAddtodefaultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAddtodefault(k, ANY), function () {});
});

bthread("Guard: Unique Advancedsetting", function () {
  const x = waitForAnyAdvancedsettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAdvancedsetting(k, ANY), function () {});
});

bthread("Guard: Unique Alternative", function () {
  const x = waitForAnyAlternativeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAlternative(k, ANY), function () {});
});

bthread("Guard: Unique Analyse", function () {
  const x = waitForAnyAnalyseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAnalyse(k, ANY), function () {});
});

bthread("Guard: Unique Announcementbanner", function () {
  const x = waitForAnyAnnouncementbannerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAnnouncementbanner(k, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApi(k, ANY), function () {});
});

bthread("Guard: Unique App", function () {
  const x = waitForAnyAppAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApp(k, ANY), function () {});
});

bthread("Guard: Unique Applicationproperty", function () {
  const x = waitForAnyApplicationpropertyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplicationproperty(k, ANY), function () {});
});

bthread("Guard: Unique Applicationrole", function () {
  const x = waitForAnyApplicationroleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplicationrole(k, ANY), function () {});
});

bthread("Guard: Unique Approximatecount", function () {
  const x = waitForAnyApproximatecountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApproximatecount(k, ANY), function () {});
});

bthread("Guard: Unique Approximatelicensecount", function () {
  const x = waitForAnyApproximatelicensecountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApproximatelicensecount(k, ANY), function () {});
});

bthread("Guard: Unique Archive", function () {
  const x = waitForAnyArchiveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddArchive(k, ANY), function () {});
});

bthread("Guard: Unique Assignable", function () {
  const x = waitForAnyAssignableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssignable(k, ANY), function () {});
});

bthread("Guard: Unique Assignee", function () {
  const x = waitForAnyAssigneeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssignee(k, ANY), function () {});
});

bthread("Guard: Unique Association", function () {
  const x = waitForAnyAssociationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssociation(k, ANY), function () {});
});

bthread("Guard: Unique Atlassian", function () {
  const x = waitForAnyAtlassianAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAtlassian(k, ANY), function () {});
});

bthread("Guard: Unique Atlassianconnect", function () {
  const x = waitForAnyAtlassianconnectAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAtlassianconnect(k, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttachment(k, ANY), function () {});
});

bthread("Guard: Unique Auditing", function () {
  const x = waitForAnyAuditingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuditing(k, ANY), function () {});
});

bthread("Guard: Unique Autocompletedata", function () {
  const x = waitForAnyAutocompletedataAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAutocompletedata(k, ANY), function () {});
});

bthread("Guard: Unique Available", function () {
  const x = waitForAnyAvailableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvailable(k, ANY), function () {});
});

bthread("Guard: Unique Availablefield", function () {
  const x = waitForAnyAvailablefieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvailablefield(k, ANY), function () {});
});

bthread("Guard: Unique Avatar", function () {
  const x = waitForAnyAvatarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvatar(k, ANY), function () {});
});

bthread("Guard: Unique Avatar2", function () {
  const x = waitForAnyAvatar2Added();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvatar2(k, ANY), function () {});
});

bthread("Guard: Unique Bulk", function () {
  const x = waitForAnyBulkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBulk(k, ANY), function () {});
});

bthread("Guard: Unique Bulkfetch", function () {
  const x = waitForAnyBulkfetchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBulkfetch(k, ANY), function () {});
});

bthread("Guard: Unique Byname", function () {
  const x = waitForAnyBynameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddByname(k, ANY), function () {});
});

bthread("Guard: Unique Cancel", function () {
  const x = waitForAnyCancelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCancel(k, ANY), function () {});
});

bthread("Guard: Unique Capability", function () {
  const x = waitForAnyCapabilityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCapability(k, ANY), function () {});
});

bthread("Guard: Unique Changelog", function () {
  const x = waitForAnyChangelogAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChangelog(k, ANY), function () {});
});

bthread("Guard: Unique Check", function () {
  const x = waitForAnyCheckAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCheck(k, ANY), function () {});
});

bthread("Guard: Unique Classificationlevel", function () {
  const x = waitForAnyClassificationlevelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClassificationlevel(k, ANY), function () {});
});

bthread("Guard: Unique Column", function () {
  const x = waitForAnyColumnAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddColumn(k, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComment(k, ANY), function () {});
});

bthread("Guard: Unique Component", function () {
  const x = waitForAnyComponentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComponent(k, ANY), function () {});
});

bthread("Guard: Unique Computation", function () {
  const x = waitForAnyComputationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComputation(k, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfig(k, ANY), function () {});
});

bthread("Guard: Unique Configuration", function () {
  const x = waitForAnyConfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Content", function () {
  const x = waitForAnyContentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddContent(k, ANY), function () {});
});

bthread("Guard: Unique Context", function () {
  const x = waitForAnyContextAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddContext(k, ANY), function () {});
});

bthread("Guard: Unique Copy", function () {
  const x = waitForAnyCopyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCopy(k, ANY), function () {});
});

bthread("Guard: Unique Create", function () {
  const x = waitForAnyCreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCreate(k, ANY), function () {});
});

bthread("Guard: Unique Createdraft", function () {
  const x = waitForAnyCreatedraftAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCreatedraft(k, ANY), function () {});
});

bthread("Guard: Unique Createmeta", function () {
  const x = waitForAnyCreatemetaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCreatemeta(k, ANY), function () {});
});

bthread("Guard: Unique Customfieldoption", function () {
  const x = waitForAnyCustomfieldoptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomfieldoption(k, ANY), function () {});
});

bthread("Guard: Unique Dashboard", function () {
  const x = waitForAnyDashboardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDashboard(k, ANY), function () {});
});

bthread("Guard: Unique Datapolicy", function () {
  const x = waitForAnyDatapolicyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDatapolicy(k, ANY), function () {});
});

bthread("Guard: Unique Default", function () {
  const x = waitForAnyDefaultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefault(k, ANY), function () {});
});

bthread("Guard: Unique Defaulteditor", function () {
  const x = waitForAnyDefaulteditorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaulteditor(k, ANY), function () {});
});

bthread("Guard: Unique Defaultsharescope", function () {
  const x = waitForAnyDefaultsharescopeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultsharescope(k, ANY), function () {});
});

bthread("Guard: Unique Defaultvalue", function () {
  const x = waitForAnyDefaultvalueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultvalue(k, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDelete(k, ANY), function () {});
});

bthread("Guard: Unique Deleted", function () {
  const x = waitForAnyDeletedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeleted(k, ANY), function () {});
});

bthread("Guard: Unique Draft", function () {
  const x = waitForAnyDraftAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDraft(k, ANY), function () {});
});

bthread("Guard: Unique Duplicate", function () {
  const x = waitForAnyDuplicateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDuplicate(k, ANY), function () {});
});

bthread("Guard: Unique Dynamic", function () {
  const x = waitForAnyDynamicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDynamic(k, ANY), function () {});
});

bthread("Guard: Unique Edit", function () {
  const x = waitForAnyEditAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEdit(k, ANY), function () {});
});

bthread("Guard: Unique Editmeta", function () {
  const x = waitForAnyEditmetaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEditmeta(k, ANY), function () {});
});

bthread("Guard: Unique Edittemplate", function () {
  const x = waitForAnyEdittemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEdittemplate(k, ANY), function () {});
});

bthread("Guard: Unique Email", function () {
  const x = waitForAnyEmailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmail(k, ANY), function () {});
});

bthread("Guard: Unique Eval", function () {
  const x = waitForAnyEvalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEval(k, ANY), function () {});
});

bthread("Guard: Unique Evaluate", function () {
  const x = waitForAnyEvaluateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEvaluate(k, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEvent(k, ANY), function () {});
});

bthread("Guard: Unique Expand", function () {
  const x = waitForAnyExpandAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExpand(k, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExport(k, ANY), function () {});
});

bthread("Guard: Unique Expression", function () {
  const x = waitForAnyExpressionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExpression(k, ANY), function () {});
});

bthread("Guard: Unique Failed", function () {
  const x = waitForAnyFailedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFailed(k, ANY), function () {});
});

bthread("Guard: Unique Favourite", function () {
  const x = waitForAnyFavouriteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFavourite(k, ANY), function () {});
});

bthread("Guard: Unique Feature", function () {
  const x = waitForAnyFeatureAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFeature(k, ANY), function () {});
});

bthread("Guard: Unique Field", function () {
  const x = waitForAnyFieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddField(k, ANY), function () {});
});

bthread("Guard: Unique Fieldconfiguration", function () {
  const x = waitForAnyFieldconfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFieldconfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Fieldconfigurationscheme", function () {
  const x = waitForAnyFieldconfigurationschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFieldconfigurationscheme(k, ANY), function () {});
});

bthread("Guard: Unique Filter", function () {
  const x = waitForAnyFilterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFilter(k, ANY), function () {});
});

bthread("Guard: Unique Forge", function () {
  const x = waitForAnyForgeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddForge(k, ANY), function () {});
});

bthread("Guard: Unique Function", function () {
  const x = waitForAnyFunctionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFunction(k, ANY), function () {});
});

bthread("Guard: Unique Gadget", function () {
  const x = waitForAnyGadgetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGadget(k, ANY), function () {});
});

bthread("Guard: Unique Group", function () {
  const x = waitForAnyGroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGroup(k, ANY), function () {});
});

bthread("Guard: Unique Groupuserpicker", function () {
  const x = waitForAnyGroupuserpickerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGroupuserpicker(k, ANY), function () {});
});

bthread("Guard: Unique Hierarchy", function () {
  const x = waitForAnyHierarchyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHierarchy(k, ANY), function () {});
});

bthread("Guard: Unique Human", function () {
  const x = waitForAnyHumanAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHuman(k, ANY), function () {});
});

bthread("Guard: Unique Instance", function () {
  const x = waitForAnyInstanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstance(k, ANY), function () {});
});

bthread("Guard: Unique Issue", function () {
  const x = waitForAnyIssueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssue(k, ANY), function () {});
});

bthread("Guard: Unique Issuelink", function () {
  const x = waitForAnyIssuelinkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuelink(k, ANY), function () {});
});

bthread("Guard: Unique Issuelinktype", function () {
  const x = waitForAnyIssuelinktypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuelinktype(k, ANY), function () {});
});

bthread("Guard: Unique Issuesecuritylevelscheme", function () {
  const x = waitForAnyIssuesecuritylevelschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuesecuritylevelscheme(k, ANY), function () {});
});

bthread("Guard: Unique Issuesecurityscheme", function () {
  const x = waitForAnyIssuesecurityschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuesecurityscheme(k, ANY), function () {});
});

bthread("Guard: Unique Issuetype", function () {
  const x = waitForAnyIssuetypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetype(k, ANY), function () {});
});

bthread("Guard: Unique Issuetypemapping", function () {
  const x = waitForAnyIssuetypemappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetypemapping(k, ANY), function () {});
});

bthread("Guard: Unique Issuetypescheme", function () {
  const x = waitForAnyIssuetypeschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetypescheme(k, ANY), function () {});
});

bthread("Guard: Unique Issuetypescreenscheme", function () {
  const x = waitForAnyIssuetypescreenschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetypescreenscheme(k, ANY), function () {});
});

bthread("Guard: Unique Issuetypeusage", function () {
  const x = waitForAnyIssuetypeusageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetypeusage(k, ANY), function () {});
});

bthread("Guard: Unique Item", function () {
  const x = waitForAnyItemAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddItem(k, ANY), function () {});
});

bthread("Guard: Unique Jql", function () {
  const x = waitForAnyJqlAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddJql(k, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKey(k, ANY), function () {});
});

bthread("Guard: Unique Label", function () {
  const x = waitForAnyLabelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabel(k, ANY), function () {});
});

bthread("Guard: Unique Level", function () {
  const x = waitForAnyLevelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLevel(k, ANY), function () {});
});

bthread("Guard: Unique License", function () {
  const x = waitForAnyLicenseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLicense(k, ANY), function () {});
});

bthread("Guard: Unique Limit", function () {
  const x = waitForAnyLimitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLimit(k, ANY), function () {});
});

bthread("Guard: Unique List", function () {
  const x = waitForAnyListAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddList(k, ANY), function () {});
});

bthread("Guard: Unique Livetemplate", function () {
  const x = waitForAnyLivetemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLivetemplate(k, ANY), function () {});
});

bthread("Guard: Unique Locale", function () {
  const x = waitForAnyLocaleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLocale(k, ANY), function () {});
});

bthread("Guard: Unique Mapping", function () {
  const x = waitForAnyMappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMapping(k, ANY), function () {});
});

bthread("Guard: Unique Match", function () {
  const x = waitForAnyMatchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMatch(k, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMember(k, ANY), function () {});
});

bthread("Guard: Unique Mergeto", function () {
  const x = waitForAnyMergetoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMergeto(k, ANY), function () {});
});

bthread("Guard: Unique Meta", function () {
  const x = waitForAnyMetaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMeta(k, ANY), function () {});
});

bthread("Guard: Unique Migration", function () {
  const x = waitForAnyMigrationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMigration(k, ANY), function () {});
});

bthread("Guard: Unique Module", function () {
  const x = waitForAnyModuleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddModule(k, ANY), function () {});
});

bthread("Guard: Unique Move", function () {
  const x = waitForAnyMoveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMove(k, ANY), function () {});
});

bthread("Guard: Unique Multi", function () {
  const x = waitForAnyMultiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMulti(k, ANY), function () {});
});

bthread("Guard: Unique Multiprojectsearch", function () {
  const x = waitForAnyMultiprojectsearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMultiprojectsearch(k, ANY), function () {});
});

bthread("Guard: Unique My", function () {
  const x = waitForAnyMyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMy(k, ANY), function () {});
});

bthread("Guard: Unique Mypermission", function () {
  const x = waitForAnyMypermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMypermission(k, ANY), function () {});
});

bthread("Guard: Unique Mypreference", function () {
  const x = waitForAnyMypreferenceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMypreference(k, ANY), function () {});
});

bthread("Guard: Unique Myself", function () {
  const x = waitForAnyMyselfAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyself(k, ANY), function () {});
});

bthread("Guard: Unique Nav4optproperty", function () {
  const x = waitForAnyNav4optpropertyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNav4optproperty(k, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotification(k, ANY), function () {});
});

bthread("Guard: Unique Notificationscheme", function () {
  const x = waitForAnyNotificationschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotificationscheme(k, ANY), function () {});
});

bthread("Guard: Unique Notify", function () {
  const x = waitForAnyNotifyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotify(k, ANY), function () {});
});

bthread("Guard: Unique Option", function () {
  const x = waitForAnyOptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOption(k, ANY), function () {});
});

bthread("Guard: Unique Owner", function () {
  const x = waitForAnyOwnerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOwner(k, ANY), function () {});
});

bthread("Guard: Unique Parse", function () {
  const x = waitForAnyParseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddParse(k, ANY), function () {});
});

bthread("Guard: Unique Pdcleaner", function () {
  const x = waitForAnyPdcleanerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPdcleaner(k, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermission(k, ANY), function () {});
});

bthread("Guard: Unique Permissionscheme", function () {
  const x = waitForAnyPermissionschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermissionscheme(k, ANY), function () {});
});

bthread("Guard: Unique Picker", function () {
  const x = waitForAnyPickerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPicker(k, ANY), function () {});
});

bthread("Guard: Unique Plan", function () {
  const x = waitForAnyPlanAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPlan(k, ANY), function () {});
});

bthread("Guard: Unique Planonly", function () {
  const x = waitForAnyPlanonlyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPlanonly(k, ANY), function () {});
});

bthread("Guard: Unique Preview", function () {
  const x = waitForAnyPreviewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPreview(k, ANY), function () {});
});

bthread("Guard: Unique Priority", function () {
  const x = waitForAnyPriorityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPriority(k, ANY), function () {});
});

bthread("Guard: Unique Priorityscheme", function () {
  const x = waitForAnyPriorityschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPriorityscheme(k, ANY), function () {});
});

bthread("Guard: Unique Product", function () {
  const x = waitForAnyProductAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProduct(k, ANY), function () {});
});

bthread("Guard: Unique Project", function () {
  const x = waitForAnyProjectAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProject(k, ANY), function () {});
});

bthread("Guard: Unique Projectcategory", function () {
  const x = waitForAnyProjectcategoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProjectcategory(k, ANY), function () {});
});

bthread("Guard: Unique Projectmapping", function () {
  const x = waitForAnyProjectmappingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProjectmapping(k, ANY), function () {});
});

bthread("Guard: Unique Projecttemplate", function () {
  const x = waitForAnyProjecttemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProjecttemplate(k, ANY), function () {});
});

bthread("Guard: Unique Projectusage", function () {
  const x = waitForAnyProjectusageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProjectusage(k, ANY), function () {});
});

bthread("Guard: Unique Projectvalidate", function () {
  const x = waitForAnyProjectvalidateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProjectvalidate(k, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProperty(k, ANY), function () {});
});

bthread("Guard: Unique Publish", function () {
  const x = waitForAnyPublishAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublish(k, ANY), function () {});
});

bthread("Guard: Unique Query", function () {
  const x = waitForAnyQueryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddQuery(k, ANY), function () {});
});

bthread("Guard: Unique Queue", function () {
  const x = waitForAnyQueueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddQueue(k, ANY), function () {});
});

bthread("Guard: Unique Raw", function () {
  const x = waitForAnyRawAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRaw(k, ANY), function () {});
});

bthread("Guard: Unique Read", function () {
  const x = waitForAnyReadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRead(k, ANY), function () {});
});

bthread("Guard: Unique Recent", function () {
  const x = waitForAnyRecentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecent(k, ANY), function () {});
});

bthread("Guard: Unique Record", function () {
  const x = waitForAnyRecordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRecord(k, ANY), function () {});
});

bthread("Guard: Unique Redact", function () {
  const x = waitForAnyRedactAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRedact(k, ANY), function () {});
});

bthread("Guard: Unique Refresh", function () {
  const x = waitForAnyRefreshAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRefresh(k, ANY), function () {});
});

bthread("Guard: Unique Relatedissuecount", function () {
  const x = waitForAnyRelatedissuecountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRelatedissuecount(k, ANY), function () {});
});

bthread("Guard: Unique Relatedwork", function () {
  const x = waitForAnyRelatedworkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRelatedwork(k, ANY), function () {});
});

bthread("Guard: Unique Remotelink", function () {
  const x = waitForAnyRemotelinkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemotelink(k, ANY), function () {});
});

bthread("Guard: Unique Remove", function () {
  const x = waitForAnyRemoveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemove(k, ANY), function () {});
});

bthread("Guard: Unique Removeandswap", function () {
  const x = waitForAnyRemoveandswapAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemoveandswap(k, ANY), function () {});
});

bthread("Guard: Unique Removetemplate", function () {
  const x = waitForAnyRemovetemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemovetemplate(k, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReport(k, ANY), function () {});
});

bthread("Guard: Unique Resolution", function () {
  const x = waitForAnyResolutionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResolution(k, ANY), function () {});
});

bthread("Guard: Unique Rest", function () {
  const x = waitForAnyRestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRest(k, ANY), function () {});
});

bthread("Guard: Unique Restore", function () {
  const x = waitForAnyRestoreAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRestore(k, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRole(k, ANY), function () {});
});

bthread("Guard: Unique Roledetail", function () {
  const x = waitForAnyRoledetailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRoledetail(k, ANY), function () {});
});

bthread("Guard: Unique Rule", function () {
  const x = waitForAnyRuleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRule(k, ANY), function () {});
});

bthread("Guard: Unique Sanitize", function () {
  const x = waitForAnySanitizeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSanitize(k, ANY), function () {});
});

bthread("Guard: Unique Savetemplate", function () {
  const x = waitForAnySavetemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSavetemplate(k, ANY), function () {});
});

bthread("Guard: Unique Screen", function () {
  const x = waitForAnyScreenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScreen(k, ANY), function () {});
});

bthread("Guard: Unique Screenscheme", function () {
  const x = waitForAnyScreenschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScreenscheme(k, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearch(k, ANY), function () {});
});

bthread("Guard: Unique Securitylevel", function () {
  const x = waitForAnySecuritylevelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSecuritylevel(k, ANY), function () {});
});

bthread("Guard: Unique Serverinfo", function () {
  const x = waitForAnyServerinfoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddServerinfo(k, ANY), function () {});
});

bthread("Guard: Unique Serviceregistry", function () {
  const x = waitForAnyServiceregistryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddServiceregistry(k, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSetting(k, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStatu(k, ANY), function () {});
});

bthread("Guard: Unique Status", function () {
  const x = waitForAnyStatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStatus(k, ANY), function () {});
});

bthread("Guard: Unique Statuscategory", function () {
  const x = waitForAnyStatuscategoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStatuscategory(k, ANY), function () {});
});

bthread("Guard: Unique Suggestion", function () {
  const x = waitForAnySuggestionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSuggestion(k, ANY), function () {});
});

bthread("Guard: Unique System", function () {
  const x = waitForAnySystemAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSystem(k, ANY), function () {});
});

bthread("Guard: Unique Tab", function () {
  const x = waitForAnyTabAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTab(k, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTask(k, ANY), function () {});
});

bthread("Guard: Unique Team", function () {
  const x = waitForAnyTeamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTeam(k, ANY), function () {});
});

bthread("Guard: Unique Thumbnail", function () {
  const x = waitForAnyThumbnailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddThumbnail(k, ANY), function () {});
});

bthread("Guard: Unique Timetracking", function () {
  const x = waitForAnyTimetrackingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTimetracking(k, ANY), function () {});
});

bthread("Guard: Unique Transition", function () {
  const x = waitForAnyTransitionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTransition(k, ANY), function () {});
});

bthread("Guard: Unique Trash", function () {
  const x = waitForAnyTrashAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTrash(k, ANY), function () {});
});

bthread("Guard: Unique Trashed", function () {
  const x = waitForAnyTrashedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTrashed(k, ANY), function () {});
});

bthread("Guard: Unique Type", function () {
  const x = waitForAnyTypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddType(k, ANY), function () {});
});

bthread("Guard: Unique Uimodification", function () {
  const x = waitForAnyUimodificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUimodification(k, ANY), function () {});
});

bthread("Guard: Unique Unarchive", function () {
  const x = waitForAnyUnarchiveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUnarchive(k, ANY), function () {});
});

bthread("Guard: Unique Universalavatar", function () {
  const x = waitForAnyUniversalavatarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUniversalavatar(k, ANY), function () {});
});

bthread("Guard: Unique Unresolvedissuecount", function () {
  const x = waitForAnyUnresolvedissuecountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUnresolvedissuecount(k, ANY), function () {});
});

bthread("Guard: Unique Unwatch", function () {
  const x = waitForAnyUnwatchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUnwatch(k, ANY), function () {});
});

bthread("Guard: Unique Update", function () {
  const x = waitForAnyUpdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUpdate(k, ANY), function () {});
});

bthread("Guard: Unique Updated", function () {
  const x = waitForAnyUpdatedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUpdated(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Validation", function () {
  const x = waitForAnyValidationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddValidation(k, ANY), function () {});
});

bthread("Guard: Unique Validprojectkey", function () {
  const x = waitForAnyValidprojectkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddValidprojectkey(k, ANY), function () {});
});

bthread("Guard: Unique Validprojectname", function () {
  const x = waitForAnyValidprojectnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddValidprojectname(k, ANY), function () {});
});

bthread("Guard: Unique Value", function () {
  const x = waitForAnyValueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddValue(k, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVersion(k, ANY), function () {});
});

bthread("Guard: Unique View", function () {
  const x = waitForAnyViewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddView(k, ANY), function () {});
});

bthread("Guard: Unique Viewissue", function () {
  const x = waitForAnyViewissueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddViewissue(k, ANY), function () {});
});

bthread("Guard: Unique Vote", function () {
  const x = waitForAnyVoteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVote(k, ANY), function () {});
});

bthread("Guard: Unique Watch", function () {
  const x = waitForAnyWatchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWatch(k, ANY), function () {});
});

bthread("Guard: Unique Watcher", function () {
  const x = waitForAnyWatcherAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWatcher(k, ANY), function () {});
});

bthread("Guard: Unique Watching", function () {
  const x = waitForAnyWatchingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWatching(k, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhook(k, ANY), function () {});
});

bthread("Guard: Unique Workflow", function () {
  const x = waitForAnyWorkflowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWorkflow(k, ANY), function () {});
});

bthread("Guard: Unique Workflowscheme", function () {
  const x = waitForAnyWorkflowschemeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWorkflowscheme(k, ANY), function () {});
});

bthread("Guard: Unique Workflowusage", function () {
  const x = waitForAnyWorkflowusageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWorkflowusage(k, ANY), function () {});
});

bthread("Guard: Unique Worklog", function () {
  const x = waitForAnyWorklogAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWorklog(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
