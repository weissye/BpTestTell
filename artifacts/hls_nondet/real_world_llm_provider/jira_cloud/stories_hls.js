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

// ===== NONDET VARIANTS =====

bthread("1 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAvailable(a.id);
  block(matchAddAvailable(a.id, ANY), function () {});
  addAvailable(b.id);
});

bthread("Availablefield nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addComponent(a.id);
  block(matchAddComponent(a.id, ANY), function () {});
  addComponent(b.id);
});

bthread("Computation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConfig(a.id);
  block(matchAddConfig(a.id, ANY), function () {});
  addConfig(b.id);
});

bthread("Configuration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCopy(a.id);
  block(matchAddCopy(a.id, ANY), function () {});
  addCopy(b.id);
});

bthread("Create nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEvent(a.id);
  block(matchAddEvent(a.id, ANY), function () {});
  addEvent(b.id);
});

bthread("Expand nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExport(a.id);
  block(matchAddExport(a.id, ANY), function () {});
  addExport(b.id);
});

bthread("Expression nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGroup(a.id);
  block(matchAddGroup(a.id, ANY), function () {});
  addGroup(b.id);
});

bthread("Groupuserpicker nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInstance(a.id);
  block(matchAddInstance(a.id, ANY), function () {});
  addInstance(b.id);
});

bthread("Issue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'K' + ids[0] };
  const b = { id: 'K' + ids[1] };
  addKey(a.id);
  block(matchAddKey(a.id, ANY), function () {});
  addKey(b.id);
});

bthread("Label nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMember(a.id);
  block(matchAddMember(a.id, ANY), function () {});
  addMember(b.id);
});

bthread("Mergeto nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNotification(a.id);
  block(matchAddNotification(a.id, ANY), function () {});
  addNotification(b.id);
});

bthread("Notificationscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPermission(a.id);
  block(matchAddPermission(a.id, ANY), function () {});
  addPermission(b.id);
});

bthread("Permissionscheme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'Q' + ids[0] };
  const b = { id: 'Q' + ids[1] };
  addQueue(a.id);
  block(matchAddQueue(a.id, ANY), function () {});
  addQueue(b.id);
});

bthread("Raw nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRecord(a.id);
  block(matchAddRecord(a.id, ANY), function () {});
  addRecord(b.id);
});

bthread("Redact nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRole(a.id);
  block(matchAddRole(a.id, ANY), function () {});
  addRole(b.id);
});

bthread("Roledetail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUser(a.id);
  block(matchAddUser(a.id, ANY), function () {});
  addUser(b.id);
});

bthread("Validation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const k = canonKey(_pk(e, "id"));
  block(matchDelete1(k, ANY), function () {
    verify1Exists(k);
  });
});

bthread("1 update verification", function () {
  const e = waitForAny1Updated();
  const k = canonKey(_pk(e, "id"));
  block(matchDelete1(k, ANY), function () {
    verify1Updated(k);
  });
});

bthread("1 delete verification", function () {
  const e = waitForAny1Deleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAdd1(k, ANY), function () {
    verify1DoesNotExist(k);
  });
});

bthread("3 create verification", function () {
  const e = waitForAny3Added();
  const k = canonKey(_pk(e, "id"));
  block(matchDelete3(k, ANY), function () {
    verify3Exists(k);
  });
});

bthread("3 update verification", function () {
  const e = waitForAny3Updated();
  const k = canonKey(_pk(e, "id"));
  block(matchDelete3(k, ANY), function () {
    verify3Updated(k);
  });
});

bthread("3 delete verification", function () {
  const e = waitForAny3Deleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAdd3(k, ANY), function () {
    verify3DoesNotExist(k);
  });
});

bthread("Accessible create verification", function () {
  const e = waitForAnyAccessibleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccessible(k, ANY), function () {
    verifyAccessibleExists(k);
  });
});

bthread("Accessible update verification", function () {
  const e = waitForAnyAccessibleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccessible(k, ANY), function () {
    verifyAccessibleUpdated(k);
  });
});

bthread("Accessible delete verification", function () {
  const e = waitForAnyAccessibleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccessible(k, ANY), function () {
    verifyAccessibleDoesNotExist(k);
  });
});

bthread("Actor create verification", function () {
  const e = waitForAnyActorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActor(k, ANY), function () {
    verifyActorExists(k);
  });
});

bthread("Actor update verification", function () {
  const e = waitForAnyActorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActor(k, ANY), function () {
    verifyActorUpdated(k);
  });
});

bthread("Actor delete verification", function () {
  const e = waitForAnyActorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddActor(k, ANY), function () {
    verifyActorDoesNotExist(k);
  });
});

bthread("Addon create verification", function () {
  const e = waitForAnyAddonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddon(k, ANY), function () {
    verifyAddonExists(k);
  });
});

bthread("Addon update verification", function () {
  const e = waitForAnyAddonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddon(k, ANY), function () {
    verifyAddonUpdated(k);
  });
});

bthread("Addon delete verification", function () {
  const e = waitForAnyAddonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddon(k, ANY), function () {
    verifyAddonDoesNotExist(k);
  });
});

bthread("Addtodefault create verification", function () {
  const e = waitForAnyAddtodefaultAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddtodefault(k, ANY), function () {
    verifyAddtodefaultExists(k);
  });
});

bthread("Addtodefault update verification", function () {
  const e = waitForAnyAddtodefaultUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAddtodefault(k, ANY), function () {
    verifyAddtodefaultUpdated(k);
  });
});

bthread("Addtodefault delete verification", function () {
  const e = waitForAnyAddtodefaultDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAddtodefault(k, ANY), function () {
    verifyAddtodefaultDoesNotExist(k);
  });
});

bthread("Advancedsetting create verification", function () {
  const e = waitForAnyAdvancedsettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdvancedsetting(k, ANY), function () {
    verifyAdvancedsettingExists(k);
  });
});

bthread("Advancedsetting update verification", function () {
  const e = waitForAnyAdvancedsettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdvancedsetting(k, ANY), function () {
    verifyAdvancedsettingUpdated(k);
  });
});

bthread("Advancedsetting delete verification", function () {
  const e = waitForAnyAdvancedsettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAdvancedsetting(k, ANY), function () {
    verifyAdvancedsettingDoesNotExist(k);
  });
});

bthread("Alternative create verification", function () {
  const e = waitForAnyAlternativeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlternative(k, ANY), function () {
    verifyAlternativeExists(k);
  });
});

bthread("Alternative update verification", function () {
  const e = waitForAnyAlternativeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlternative(k, ANY), function () {
    verifyAlternativeUpdated(k);
  });
});

bthread("Alternative delete verification", function () {
  const e = waitForAnyAlternativeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAlternative(k, ANY), function () {
    verifyAlternativeDoesNotExist(k);
  });
});

bthread("Analyse create verification", function () {
  const e = waitForAnyAnalyseAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnalyse(k, ANY), function () {
    verifyAnalyseExists(k);
  });
});

bthread("Analyse update verification", function () {
  const e = waitForAnyAnalyseUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnalyse(k, ANY), function () {
    verifyAnalyseUpdated(k);
  });
});

bthread("Analyse delete verification", function () {
  const e = waitForAnyAnalyseDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAnalyse(k, ANY), function () {
    verifyAnalyseDoesNotExist(k);
  });
});

bthread("Announcementbanner create verification", function () {
  const e = waitForAnyAnnouncementbannerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnnouncementbanner(k, ANY), function () {
    verifyAnnouncementbannerExists(k);
  });
});

bthread("Announcementbanner update verification", function () {
  const e = waitForAnyAnnouncementbannerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnnouncementbanner(k, ANY), function () {
    verifyAnnouncementbannerUpdated(k);
  });
});

bthread("Announcementbanner delete verification", function () {
  const e = waitForAnyAnnouncementbannerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAnnouncementbanner(k, ANY), function () {
    verifyAnnouncementbannerDoesNotExist(k);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApi(k, ANY), function () {
    verifyApiExists(k);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApi(k, ANY), function () {
    verifyApiUpdated(k);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApi(k, ANY), function () {
    verifyApiDoesNotExist(k);
  });
});

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApp(k, ANY), function () {
    verifyAppExists(k);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApp(k, ANY), function () {
    verifyAppUpdated(k);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApp(k, ANY), function () {
    verifyAppDoesNotExist(k);
  });
});

bthread("Applicationproperty create verification", function () {
  const e = waitForAnyApplicationpropertyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplicationproperty(k, ANY), function () {
    verifyApplicationpropertyExists(k);
  });
});

bthread("Applicationproperty update verification", function () {
  const e = waitForAnyApplicationpropertyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplicationproperty(k, ANY), function () {
    verifyApplicationpropertyUpdated(k);
  });
});

bthread("Applicationproperty delete verification", function () {
  const e = waitForAnyApplicationpropertyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApplicationproperty(k, ANY), function () {
    verifyApplicationpropertyDoesNotExist(k);
  });
});

bthread("Applicationrole create verification", function () {
  const e = waitForAnyApplicationroleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplicationrole(k, ANY), function () {
    verifyApplicationroleExists(k);
  });
});

bthread("Applicationrole update verification", function () {
  const e = waitForAnyApplicationroleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplicationrole(k, ANY), function () {
    verifyApplicationroleUpdated(k);
  });
});

bthread("Applicationrole delete verification", function () {
  const e = waitForAnyApplicationroleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApplicationrole(k, ANY), function () {
    verifyApplicationroleDoesNotExist(k);
  });
});

bthread("Approximatecount create verification", function () {
  const e = waitForAnyApproximatecountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApproximatecount(k, ANY), function () {
    verifyApproximatecountExists(k);
  });
});

bthread("Approximatecount update verification", function () {
  const e = waitForAnyApproximatecountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApproximatecount(k, ANY), function () {
    verifyApproximatecountUpdated(k);
  });
});

bthread("Approximatecount delete verification", function () {
  const e = waitForAnyApproximatecountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApproximatecount(k, ANY), function () {
    verifyApproximatecountDoesNotExist(k);
  });
});

bthread("Approximatelicensecount create verification", function () {
  const e = waitForAnyApproximatelicensecountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApproximatelicensecount(k, ANY), function () {
    verifyApproximatelicensecountExists(k);
  });
});

bthread("Approximatelicensecount update verification", function () {
  const e = waitForAnyApproximatelicensecountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApproximatelicensecount(k, ANY), function () {
    verifyApproximatelicensecountUpdated(k);
  });
});

bthread("Approximatelicensecount delete verification", function () {
  const e = waitForAnyApproximatelicensecountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApproximatelicensecount(k, ANY), function () {
    verifyApproximatelicensecountDoesNotExist(k);
  });
});

bthread("Archive create verification", function () {
  const e = waitForAnyArchiveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArchive(k, ANY), function () {
    verifyArchiveExists(k);
  });
});

bthread("Archive update verification", function () {
  const e = waitForAnyArchiveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArchive(k, ANY), function () {
    verifyArchiveUpdated(k);
  });
});

bthread("Archive delete verification", function () {
  const e = waitForAnyArchiveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddArchive(k, ANY), function () {
    verifyArchiveDoesNotExist(k);
  });
});

bthread("Assignable create verification", function () {
  const e = waitForAnyAssignableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignable(k, ANY), function () {
    verifyAssignableExists(k);
  });
});

bthread("Assignable update verification", function () {
  const e = waitForAnyAssignableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignable(k, ANY), function () {
    verifyAssignableUpdated(k);
  });
});

bthread("Assignable delete verification", function () {
  const e = waitForAnyAssignableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssignable(k, ANY), function () {
    verifyAssignableDoesNotExist(k);
  });
});

bthread("Assignee create verification", function () {
  const e = waitForAnyAssigneeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignee(k, ANY), function () {
    verifyAssigneeExists(k);
  });
});

bthread("Assignee update verification", function () {
  const e = waitForAnyAssigneeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignee(k, ANY), function () {
    verifyAssigneeUpdated(k);
  });
});

bthread("Assignee delete verification", function () {
  const e = waitForAnyAssigneeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssignee(k, ANY), function () {
    verifyAssigneeDoesNotExist(k);
  });
});

bthread("Association create verification", function () {
  const e = waitForAnyAssociationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssociation(k, ANY), function () {
    verifyAssociationExists(k);
  });
});

bthread("Association update verification", function () {
  const e = waitForAnyAssociationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssociation(k, ANY), function () {
    verifyAssociationUpdated(k);
  });
});

bthread("Association delete verification", function () {
  const e = waitForAnyAssociationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssociation(k, ANY), function () {
    verifyAssociationDoesNotExist(k);
  });
});

bthread("Atlassian create verification", function () {
  const e = waitForAnyAtlassianAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAtlassian(k, ANY), function () {
    verifyAtlassianExists(k);
  });
});

bthread("Atlassian update verification", function () {
  const e = waitForAnyAtlassianUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAtlassian(k, ANY), function () {
    verifyAtlassianUpdated(k);
  });
});

bthread("Atlassian delete verification", function () {
  const e = waitForAnyAtlassianDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAtlassian(k, ANY), function () {
    verifyAtlassianDoesNotExist(k);
  });
});

bthread("Atlassianconnect create verification", function () {
  const e = waitForAnyAtlassianconnectAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAtlassianconnect(k, ANY), function () {
    verifyAtlassianconnectExists(k);
  });
});

bthread("Atlassianconnect update verification", function () {
  const e = waitForAnyAtlassianconnectUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAtlassianconnect(k, ANY), function () {
    verifyAtlassianconnectUpdated(k);
  });
});

bthread("Atlassianconnect delete verification", function () {
  const e = waitForAnyAtlassianconnectDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAtlassianconnect(k, ANY), function () {
    verifyAtlassianconnectDoesNotExist(k);
  });
});

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttachment(k, ANY), function () {
    verifyAttachmentExists(k);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttachment(k, ANY), function () {
    verifyAttachmentUpdated(k);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAttachment(k, ANY), function () {
    verifyAttachmentDoesNotExist(k);
  });
});

bthread("Auditing create verification", function () {
  const e = waitForAnyAuditingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuditing(k, ANY), function () {
    verifyAuditingExists(k);
  });
});

bthread("Auditing update verification", function () {
  const e = waitForAnyAuditingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuditing(k, ANY), function () {
    verifyAuditingUpdated(k);
  });
});

bthread("Auditing delete verification", function () {
  const e = waitForAnyAuditingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuditing(k, ANY), function () {
    verifyAuditingDoesNotExist(k);
  });
});

bthread("Autocompletedata create verification", function () {
  const e = waitForAnyAutocompletedataAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutocompletedata(k, ANY), function () {
    verifyAutocompletedataExists(k);
  });
});

bthread("Autocompletedata update verification", function () {
  const e = waitForAnyAutocompletedataUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutocompletedata(k, ANY), function () {
    verifyAutocompletedataUpdated(k);
  });
});

bthread("Autocompletedata delete verification", function () {
  const e = waitForAnyAutocompletedataDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAutocompletedata(k, ANY), function () {
    verifyAutocompletedataDoesNotExist(k);
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

bthread("Availablefield create verification", function () {
  const e = waitForAnyAvailablefieldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablefield(k, ANY), function () {
    verifyAvailablefieldExists(k);
  });
});

bthread("Availablefield update verification", function () {
  const e = waitForAnyAvailablefieldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvailablefield(k, ANY), function () {
    verifyAvailablefieldUpdated(k);
  });
});

bthread("Availablefield delete verification", function () {
  const e = waitForAnyAvailablefieldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvailablefield(k, ANY), function () {
    verifyAvailablefieldDoesNotExist(k);
  });
});

bthread("Avatar create verification", function () {
  const e = waitForAnyAvatarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatar(k, ANY), function () {
    verifyAvatarExists(k);
  });
});

bthread("Avatar update verification", function () {
  const e = waitForAnyAvatarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatar(k, ANY), function () {
    verifyAvatarUpdated(k);
  });
});

bthread("Avatar delete verification", function () {
  const e = waitForAnyAvatarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvatar(k, ANY), function () {
    verifyAvatarDoesNotExist(k);
  });
});

bthread("Avatar2 create verification", function () {
  const e = waitForAnyAvatar2Added();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatar2(k, ANY), function () {
    verifyAvatar2Exists(k);
  });
});

bthread("Avatar2 update verification", function () {
  const e = waitForAnyAvatar2Updated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatar2(k, ANY), function () {
    verifyAvatar2Updated(k);
  });
});

bthread("Avatar2 delete verification", function () {
  const e = waitForAnyAvatar2Deleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvatar2(k, ANY), function () {
    verifyAvatar2DoesNotExist(k);
  });
});

bthread("Bulk create verification", function () {
  const e = waitForAnyBulkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBulk(k, ANY), function () {
    verifyBulkExists(k);
  });
});

bthread("Bulk update verification", function () {
  const e = waitForAnyBulkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBulk(k, ANY), function () {
    verifyBulkUpdated(k);
  });
});

bthread("Bulk delete verification", function () {
  const e = waitForAnyBulkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBulk(k, ANY), function () {
    verifyBulkDoesNotExist(k);
  });
});

bthread("Bulkfetch create verification", function () {
  const e = waitForAnyBulkfetchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBulkfetch(k, ANY), function () {
    verifyBulkfetchExists(k);
  });
});

bthread("Bulkfetch update verification", function () {
  const e = waitForAnyBulkfetchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBulkfetch(k, ANY), function () {
    verifyBulkfetchUpdated(k);
  });
});

bthread("Bulkfetch delete verification", function () {
  const e = waitForAnyBulkfetchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBulkfetch(k, ANY), function () {
    verifyBulkfetchDoesNotExist(k);
  });
});

bthread("Byname create verification", function () {
  const e = waitForAnyBynameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteByname(k, ANY), function () {
    verifyBynameExists(k);
  });
});

bthread("Byname update verification", function () {
  const e = waitForAnyBynameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteByname(k, ANY), function () {
    verifyBynameUpdated(k);
  });
});

bthread("Byname delete verification", function () {
  const e = waitForAnyBynameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddByname(k, ANY), function () {
    verifyBynameDoesNotExist(k);
  });
});

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCancel(k, ANY), function () {
    verifyCancelExists(k);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCancel(k, ANY), function () {
    verifyCancelUpdated(k);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCancel(k, ANY), function () {
    verifyCancelDoesNotExist(k);
  });
});

bthread("Capability create verification", function () {
  const e = waitForAnyCapabilityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCapability(k, ANY), function () {
    verifyCapabilityExists(k);
  });
});

bthread("Capability update verification", function () {
  const e = waitForAnyCapabilityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCapability(k, ANY), function () {
    verifyCapabilityUpdated(k);
  });
});

bthread("Capability delete verification", function () {
  const e = waitForAnyCapabilityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCapability(k, ANY), function () {
    verifyCapabilityDoesNotExist(k);
  });
});

bthread("Changelog create verification", function () {
  const e = waitForAnyChangelogAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChangelog(k, ANY), function () {
    verifyChangelogExists(k);
  });
});

bthread("Changelog update verification", function () {
  const e = waitForAnyChangelogUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChangelog(k, ANY), function () {
    verifyChangelogUpdated(k);
  });
});

bthread("Changelog delete verification", function () {
  const e = waitForAnyChangelogDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChangelog(k, ANY), function () {
    verifyChangelogDoesNotExist(k);
  });
});

bthread("Check create verification", function () {
  const e = waitForAnyCheckAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheck(k, ANY), function () {
    verifyCheckExists(k);
  });
});

bthread("Check update verification", function () {
  const e = waitForAnyCheckUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheck(k, ANY), function () {
    verifyCheckUpdated(k);
  });
});

bthread("Check delete verification", function () {
  const e = waitForAnyCheckDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCheck(k, ANY), function () {
    verifyCheckDoesNotExist(k);
  });
});

bthread("Classificationlevel create verification", function () {
  const e = waitForAnyClassificationlevelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClassificationlevel(k, ANY), function () {
    verifyClassificationlevelExists(k);
  });
});

bthread("Classificationlevel update verification", function () {
  const e = waitForAnyClassificationlevelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClassificationlevel(k, ANY), function () {
    verifyClassificationlevelUpdated(k);
  });
});

bthread("Classificationlevel delete verification", function () {
  const e = waitForAnyClassificationlevelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClassificationlevel(k, ANY), function () {
    verifyClassificationlevelDoesNotExist(k);
  });
});

bthread("Column create verification", function () {
  const e = waitForAnyColumnAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColumn(k, ANY), function () {
    verifyColumnExists(k);
  });
});

bthread("Column update verification", function () {
  const e = waitForAnyColumnUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColumn(k, ANY), function () {
    verifyColumnUpdated(k);
  });
});

bthread("Column delete verification", function () {
  const e = waitForAnyColumnDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddColumn(k, ANY), function () {
    verifyColumnDoesNotExist(k);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComment(k, ANY), function () {
    verifyCommentExists(k);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComment(k, ANY), function () {
    verifyCommentUpdated(k);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddComment(k, ANY), function () {
    verifyCommentDoesNotExist(k);
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

bthread("Computation create verification", function () {
  const e = waitForAnyComputationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComputation(k, ANY), function () {
    verifyComputationExists(k);
  });
});

bthread("Computation update verification", function () {
  const e = waitForAnyComputationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComputation(k, ANY), function () {
    verifyComputationUpdated(k);
  });
});

bthread("Computation delete verification", function () {
  const e = waitForAnyComputationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddComputation(k, ANY), function () {
    verifyComputationDoesNotExist(k);
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

bthread("Configuration create verification", function () {
  const e = waitForAnyConfigurationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfiguration(k, ANY), function () {
    verifyConfigurationExists(k);
  });
});

bthread("Configuration update verification", function () {
  const e = waitForAnyConfigurationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfiguration(k, ANY), function () {
    verifyConfigurationUpdated(k);
  });
});

bthread("Configuration delete verification", function () {
  const e = waitForAnyConfigurationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfiguration(k, ANY), function () {
    verifyConfigurationDoesNotExist(k);
  });
});

bthread("Content create verification", function () {
  const e = waitForAnyContentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContent(k, ANY), function () {
    verifyContentExists(k);
  });
});

bthread("Content update verification", function () {
  const e = waitForAnyContentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContent(k, ANY), function () {
    verifyContentUpdated(k);
  });
});

bthread("Content delete verification", function () {
  const e = waitForAnyContentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContent(k, ANY), function () {
    verifyContentDoesNotExist(k);
  });
});

bthread("Context create verification", function () {
  const e = waitForAnyContextAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContext(k, ANY), function () {
    verifyContextExists(k);
  });
});

bthread("Context update verification", function () {
  const e = waitForAnyContextUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContext(k, ANY), function () {
    verifyContextUpdated(k);
  });
});

bthread("Context delete verification", function () {
  const e = waitForAnyContextDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContext(k, ANY), function () {
    verifyContextDoesNotExist(k);
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

bthread("Create create verification", function () {
  const e = waitForAnyCreateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCreate(k, ANY), function () {
    verifyCreateExists(k);
  });
});

bthread("Create update verification", function () {
  const e = waitForAnyCreateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCreate(k, ANY), function () {
    verifyCreateUpdated(k);
  });
});

bthread("Create delete verification", function () {
  const e = waitForAnyCreateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCreate(k, ANY), function () {
    verifyCreateDoesNotExist(k);
  });
});

bthread("Createdraft create verification", function () {
  const e = waitForAnyCreatedraftAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCreatedraft(k, ANY), function () {
    verifyCreatedraftExists(k);
  });
});

bthread("Createdraft update verification", function () {
  const e = waitForAnyCreatedraftUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCreatedraft(k, ANY), function () {
    verifyCreatedraftUpdated(k);
  });
});

bthread("Createdraft delete verification", function () {
  const e = waitForAnyCreatedraftDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCreatedraft(k, ANY), function () {
    verifyCreatedraftDoesNotExist(k);
  });
});

bthread("Createmeta create verification", function () {
  const e = waitForAnyCreatemetaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCreatemeta(k, ANY), function () {
    verifyCreatemetaExists(k);
  });
});

bthread("Createmeta update verification", function () {
  const e = waitForAnyCreatemetaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCreatemeta(k, ANY), function () {
    verifyCreatemetaUpdated(k);
  });
});

bthread("Createmeta delete verification", function () {
  const e = waitForAnyCreatemetaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCreatemeta(k, ANY), function () {
    verifyCreatemetaDoesNotExist(k);
  });
});

bthread("Customfieldoption create verification", function () {
  const e = waitForAnyCustomfieldoptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomfieldoption(k, ANY), function () {
    verifyCustomfieldoptionExists(k);
  });
});

bthread("Customfieldoption update verification", function () {
  const e = waitForAnyCustomfieldoptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomfieldoption(k, ANY), function () {
    verifyCustomfieldoptionUpdated(k);
  });
});

bthread("Customfieldoption delete verification", function () {
  const e = waitForAnyCustomfieldoptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomfieldoption(k, ANY), function () {
    verifyCustomfieldoptionDoesNotExist(k);
  });
});

bthread("Dashboard create verification", function () {
  const e = waitForAnyDashboardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDashboard(k, ANY), function () {
    verifyDashboardExists(k);
  });
});

bthread("Dashboard update verification", function () {
  const e = waitForAnyDashboardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDashboard(k, ANY), function () {
    verifyDashboardUpdated(k);
  });
});

bthread("Dashboard delete verification", function () {
  const e = waitForAnyDashboardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDashboard(k, ANY), function () {
    verifyDashboardDoesNotExist(k);
  });
});

bthread("Datapolicy create verification", function () {
  const e = waitForAnyDatapolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatapolicy(k, ANY), function () {
    verifyDatapolicyExists(k);
  });
});

bthread("Datapolicy update verification", function () {
  const e = waitForAnyDatapolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatapolicy(k, ANY), function () {
    verifyDatapolicyUpdated(k);
  });
});

bthread("Datapolicy delete verification", function () {
  const e = waitForAnyDatapolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDatapolicy(k, ANY), function () {
    verifyDatapolicyDoesNotExist(k);
  });
});

bthread("Default create verification", function () {
  const e = waitForAnyDefaultAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefault(k, ANY), function () {
    verifyDefaultExists(k);
  });
});

bthread("Default update verification", function () {
  const e = waitForAnyDefaultUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefault(k, ANY), function () {
    verifyDefaultUpdated(k);
  });
});

bthread("Default delete verification", function () {
  const e = waitForAnyDefaultDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefault(k, ANY), function () {
    verifyDefaultDoesNotExist(k);
  });
});

bthread("Defaulteditor create verification", function () {
  const e = waitForAnyDefaulteditorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaulteditor(k, ANY), function () {
    verifyDefaulteditorExists(k);
  });
});

bthread("Defaulteditor update verification", function () {
  const e = waitForAnyDefaulteditorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaulteditor(k, ANY), function () {
    verifyDefaulteditorUpdated(k);
  });
});

bthread("Defaulteditor delete verification", function () {
  const e = waitForAnyDefaulteditorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaulteditor(k, ANY), function () {
    verifyDefaulteditorDoesNotExist(k);
  });
});

bthread("Defaultsharescope create verification", function () {
  const e = waitForAnyDefaultsharescopeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultsharescope(k, ANY), function () {
    verifyDefaultsharescopeExists(k);
  });
});

bthread("Defaultsharescope update verification", function () {
  const e = waitForAnyDefaultsharescopeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultsharescope(k, ANY), function () {
    verifyDefaultsharescopeUpdated(k);
  });
});

bthread("Defaultsharescope delete verification", function () {
  const e = waitForAnyDefaultsharescopeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultsharescope(k, ANY), function () {
    verifyDefaultsharescopeDoesNotExist(k);
  });
});

bthread("Defaultvalue create verification", function () {
  const e = waitForAnyDefaultvalueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultvalue(k, ANY), function () {
    verifyDefaultvalueExists(k);
  });
});

bthread("Defaultvalue update verification", function () {
  const e = waitForAnyDefaultvalueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultvalue(k, ANY), function () {
    verifyDefaultvalueUpdated(k);
  });
});

bthread("Defaultvalue delete verification", function () {
  const e = waitForAnyDefaultvalueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultvalue(k, ANY), function () {
    verifyDefaultvalueDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDelete(k, ANY), function () {
    verifyDeleteDoesNotExist(k);
  });
});

bthread("Deleted create verification", function () {
  const e = waitForAnyDeletedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeleted(k, ANY), function () {
    verifyDeletedExists(k);
  });
});

bthread("Deleted update verification", function () {
  const e = waitForAnyDeletedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeleted(k, ANY), function () {
    verifyDeletedUpdated(k);
  });
});

bthread("Deleted delete verification", function () {
  const e = waitForAnyDeletedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeleted(k, ANY), function () {
    verifyDeletedDoesNotExist(k);
  });
});

bthread("Draft create verification", function () {
  const e = waitForAnyDraftAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDraft(k, ANY), function () {
    verifyDraftExists(k);
  });
});

bthread("Draft update verification", function () {
  const e = waitForAnyDraftUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDraft(k, ANY), function () {
    verifyDraftUpdated(k);
  });
});

bthread("Draft delete verification", function () {
  const e = waitForAnyDraftDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDraft(k, ANY), function () {
    verifyDraftDoesNotExist(k);
  });
});

bthread("Duplicate create verification", function () {
  const e = waitForAnyDuplicateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDuplicate(k, ANY), function () {
    verifyDuplicateExists(k);
  });
});

bthread("Duplicate update verification", function () {
  const e = waitForAnyDuplicateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDuplicate(k, ANY), function () {
    verifyDuplicateUpdated(k);
  });
});

bthread("Duplicate delete verification", function () {
  const e = waitForAnyDuplicateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDuplicate(k, ANY), function () {
    verifyDuplicateDoesNotExist(k);
  });
});

bthread("Dynamic create verification", function () {
  const e = waitForAnyDynamicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDynamic(k, ANY), function () {
    verifyDynamicExists(k);
  });
});

bthread("Dynamic update verification", function () {
  const e = waitForAnyDynamicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDynamic(k, ANY), function () {
    verifyDynamicUpdated(k);
  });
});

bthread("Dynamic delete verification", function () {
  const e = waitForAnyDynamicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDynamic(k, ANY), function () {
    verifyDynamicDoesNotExist(k);
  });
});

bthread("Edit create verification", function () {
  const e = waitForAnyEditAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEdit(k, ANY), function () {
    verifyEditExists(k);
  });
});

bthread("Edit update verification", function () {
  const e = waitForAnyEditUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEdit(k, ANY), function () {
    verifyEditUpdated(k);
  });
});

bthread("Edit delete verification", function () {
  const e = waitForAnyEditDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEdit(k, ANY), function () {
    verifyEditDoesNotExist(k);
  });
});

bthread("Editmeta create verification", function () {
  const e = waitForAnyEditmetaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEditmeta(k, ANY), function () {
    verifyEditmetaExists(k);
  });
});

bthread("Editmeta update verification", function () {
  const e = waitForAnyEditmetaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEditmeta(k, ANY), function () {
    verifyEditmetaUpdated(k);
  });
});

bthread("Editmeta delete verification", function () {
  const e = waitForAnyEditmetaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEditmeta(k, ANY), function () {
    verifyEditmetaDoesNotExist(k);
  });
});

bthread("Edittemplate create verification", function () {
  const e = waitForAnyEdittemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEdittemplate(k, ANY), function () {
    verifyEdittemplateExists(k);
  });
});

bthread("Edittemplate update verification", function () {
  const e = waitForAnyEdittemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEdittemplate(k, ANY), function () {
    verifyEdittemplateUpdated(k);
  });
});

bthread("Edittemplate delete verification", function () {
  const e = waitForAnyEdittemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEdittemplate(k, ANY), function () {
    verifyEdittemplateDoesNotExist(k);
  });
});

bthread("Email create verification", function () {
  const e = waitForAnyEmailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmail(k, ANY), function () {
    verifyEmailExists(k);
  });
});

bthread("Email update verification", function () {
  const e = waitForAnyEmailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmail(k, ANY), function () {
    verifyEmailUpdated(k);
  });
});

bthread("Email delete verification", function () {
  const e = waitForAnyEmailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmail(k, ANY), function () {
    verifyEmailDoesNotExist(k);
  });
});

bthread("Eval create verification", function () {
  const e = waitForAnyEvalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEval(k, ANY), function () {
    verifyEvalExists(k);
  });
});

bthread("Eval update verification", function () {
  const e = waitForAnyEvalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEval(k, ANY), function () {
    verifyEvalUpdated(k);
  });
});

bthread("Eval delete verification", function () {
  const e = waitForAnyEvalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEval(k, ANY), function () {
    verifyEvalDoesNotExist(k);
  });
});

bthread("Evaluate create verification", function () {
  const e = waitForAnyEvaluateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEvaluate(k, ANY), function () {
    verifyEvaluateExists(k);
  });
});

bthread("Evaluate update verification", function () {
  const e = waitForAnyEvaluateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEvaluate(k, ANY), function () {
    verifyEvaluateUpdated(k);
  });
});

bthread("Evaluate delete verification", function () {
  const e = waitForAnyEvaluateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEvaluate(k, ANY), function () {
    verifyEvaluateDoesNotExist(k);
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

bthread("Expand create verification", function () {
  const e = waitForAnyExpandAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExpand(k, ANY), function () {
    verifyExpandExists(k);
  });
});

bthread("Expand update verification", function () {
  const e = waitForAnyExpandUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExpand(k, ANY), function () {
    verifyExpandUpdated(k);
  });
});

bthread("Expand delete verification", function () {
  const e = waitForAnyExpandDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExpand(k, ANY), function () {
    verifyExpandDoesNotExist(k);
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

bthread("Expression create verification", function () {
  const e = waitForAnyExpressionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExpression(k, ANY), function () {
    verifyExpressionExists(k);
  });
});

bthread("Expression update verification", function () {
  const e = waitForAnyExpressionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExpression(k, ANY), function () {
    verifyExpressionUpdated(k);
  });
});

bthread("Expression delete verification", function () {
  const e = waitForAnyExpressionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExpression(k, ANY), function () {
    verifyExpressionDoesNotExist(k);
  });
});

bthread("Failed create verification", function () {
  const e = waitForAnyFailedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFailed(k, ANY), function () {
    verifyFailedExists(k);
  });
});

bthread("Failed update verification", function () {
  const e = waitForAnyFailedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFailed(k, ANY), function () {
    verifyFailedUpdated(k);
  });
});

bthread("Failed delete verification", function () {
  const e = waitForAnyFailedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFailed(k, ANY), function () {
    verifyFailedDoesNotExist(k);
  });
});

bthread("Favourite create verification", function () {
  const e = waitForAnyFavouriteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFavourite(k, ANY), function () {
    verifyFavouriteExists(k);
  });
});

bthread("Favourite update verification", function () {
  const e = waitForAnyFavouriteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFavourite(k, ANY), function () {
    verifyFavouriteUpdated(k);
  });
});

bthread("Favourite delete verification", function () {
  const e = waitForAnyFavouriteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFavourite(k, ANY), function () {
    verifyFavouriteDoesNotExist(k);
  });
});

bthread("Feature create verification", function () {
  const e = waitForAnyFeatureAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFeature(k, ANY), function () {
    verifyFeatureExists(k);
  });
});

bthread("Feature update verification", function () {
  const e = waitForAnyFeatureUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFeature(k, ANY), function () {
    verifyFeatureUpdated(k);
  });
});

bthread("Feature delete verification", function () {
  const e = waitForAnyFeatureDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFeature(k, ANY), function () {
    verifyFeatureDoesNotExist(k);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteField(k, ANY), function () {
    verifyFieldExists(k);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteField(k, ANY), function () {
    verifyFieldUpdated(k);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddField(k, ANY), function () {
    verifyFieldDoesNotExist(k);
  });
});

bthread("Fieldconfiguration create verification", function () {
  const e = waitForAnyFieldconfigurationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFieldconfiguration(k, ANY), function () {
    verifyFieldconfigurationExists(k);
  });
});

bthread("Fieldconfiguration update verification", function () {
  const e = waitForAnyFieldconfigurationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFieldconfiguration(k, ANY), function () {
    verifyFieldconfigurationUpdated(k);
  });
});

bthread("Fieldconfiguration delete verification", function () {
  const e = waitForAnyFieldconfigurationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFieldconfiguration(k, ANY), function () {
    verifyFieldconfigurationDoesNotExist(k);
  });
});

bthread("Fieldconfigurationscheme create verification", function () {
  const e = waitForAnyFieldconfigurationschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFieldconfigurationscheme(k, ANY), function () {
    verifyFieldconfigurationschemeExists(k);
  });
});

bthread("Fieldconfigurationscheme update verification", function () {
  const e = waitForAnyFieldconfigurationschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFieldconfigurationscheme(k, ANY), function () {
    verifyFieldconfigurationschemeUpdated(k);
  });
});

bthread("Fieldconfigurationscheme delete verification", function () {
  const e = waitForAnyFieldconfigurationschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFieldconfigurationscheme(k, ANY), function () {
    verifyFieldconfigurationschemeDoesNotExist(k);
  });
});

bthread("Filter create verification", function () {
  const e = waitForAnyFilterAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFilter(k, ANY), function () {
    verifyFilterExists(k);
  });
});

bthread("Filter update verification", function () {
  const e = waitForAnyFilterUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFilter(k, ANY), function () {
    verifyFilterUpdated(k);
  });
});

bthread("Filter delete verification", function () {
  const e = waitForAnyFilterDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFilter(k, ANY), function () {
    verifyFilterDoesNotExist(k);
  });
});

bthread("Forge create verification", function () {
  const e = waitForAnyForgeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForge(k, ANY), function () {
    verifyForgeExists(k);
  });
});

bthread("Forge update verification", function () {
  const e = waitForAnyForgeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForge(k, ANY), function () {
    verifyForgeUpdated(k);
  });
});

bthread("Forge delete verification", function () {
  const e = waitForAnyForgeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddForge(k, ANY), function () {
    verifyForgeDoesNotExist(k);
  });
});

bthread("Function create verification", function () {
  const e = waitForAnyFunctionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFunction(k, ANY), function () {
    verifyFunctionExists(k);
  });
});

bthread("Function update verification", function () {
  const e = waitForAnyFunctionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFunction(k, ANY), function () {
    verifyFunctionUpdated(k);
  });
});

bthread("Function delete verification", function () {
  const e = waitForAnyFunctionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFunction(k, ANY), function () {
    verifyFunctionDoesNotExist(k);
  });
});

bthread("Gadget create verification", function () {
  const e = waitForAnyGadgetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGadget(k, ANY), function () {
    verifyGadgetExists(k);
  });
});

bthread("Gadget update verification", function () {
  const e = waitForAnyGadgetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGadget(k, ANY), function () {
    verifyGadgetUpdated(k);
  });
});

bthread("Gadget delete verification", function () {
  const e = waitForAnyGadgetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGadget(k, ANY), function () {
    verifyGadgetDoesNotExist(k);
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

bthread("Groupuserpicker create verification", function () {
  const e = waitForAnyGroupuserpickerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroupuserpicker(k, ANY), function () {
    verifyGroupuserpickerExists(k);
  });
});

bthread("Groupuserpicker update verification", function () {
  const e = waitForAnyGroupuserpickerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGroupuserpicker(k, ANY), function () {
    verifyGroupuserpickerUpdated(k);
  });
});

bthread("Groupuserpicker delete verification", function () {
  const e = waitForAnyGroupuserpickerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGroupuserpicker(k, ANY), function () {
    verifyGroupuserpickerDoesNotExist(k);
  });
});

bthread("Hierarchy create verification", function () {
  const e = waitForAnyHierarchyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHierarchy(k, ANY), function () {
    verifyHierarchyExists(k);
  });
});

bthread("Hierarchy update verification", function () {
  const e = waitForAnyHierarchyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHierarchy(k, ANY), function () {
    verifyHierarchyUpdated(k);
  });
});

bthread("Hierarchy delete verification", function () {
  const e = waitForAnyHierarchyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHierarchy(k, ANY), function () {
    verifyHierarchyDoesNotExist(k);
  });
});

bthread("Human create verification", function () {
  const e = waitForAnyHumanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHuman(k, ANY), function () {
    verifyHumanExists(k);
  });
});

bthread("Human update verification", function () {
  const e = waitForAnyHumanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHuman(k, ANY), function () {
    verifyHumanUpdated(k);
  });
});

bthread("Human delete verification", function () {
  const e = waitForAnyHumanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHuman(k, ANY), function () {
    verifyHumanDoesNotExist(k);
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

bthread("Issue create verification", function () {
  const e = waitForAnyIssueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssue(k, ANY), function () {
    verifyIssueExists(k);
  });
});

bthread("Issue update verification", function () {
  const e = waitForAnyIssueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssue(k, ANY), function () {
    verifyIssueUpdated(k);
  });
});

bthread("Issue delete verification", function () {
  const e = waitForAnyIssueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssue(k, ANY), function () {
    verifyIssueDoesNotExist(k);
  });
});

bthread("Issuelink create verification", function () {
  const e = waitForAnyIssuelinkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuelink(k, ANY), function () {
    verifyIssuelinkExists(k);
  });
});

bthread("Issuelink update verification", function () {
  const e = waitForAnyIssuelinkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuelink(k, ANY), function () {
    verifyIssuelinkUpdated(k);
  });
});

bthread("Issuelink delete verification", function () {
  const e = waitForAnyIssuelinkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuelink(k, ANY), function () {
    verifyIssuelinkDoesNotExist(k);
  });
});

bthread("Issuelinktype create verification", function () {
  const e = waitForAnyIssuelinktypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuelinktype(k, ANY), function () {
    verifyIssuelinktypeExists(k);
  });
});

bthread("Issuelinktype update verification", function () {
  const e = waitForAnyIssuelinktypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuelinktype(k, ANY), function () {
    verifyIssuelinktypeUpdated(k);
  });
});

bthread("Issuelinktype delete verification", function () {
  const e = waitForAnyIssuelinktypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuelinktype(k, ANY), function () {
    verifyIssuelinktypeDoesNotExist(k);
  });
});

bthread("Issuesecuritylevelscheme create verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuesecuritylevelscheme(k, ANY), function () {
    verifyIssuesecuritylevelschemeExists(k);
  });
});

bthread("Issuesecuritylevelscheme update verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuesecuritylevelscheme(k, ANY), function () {
    verifyIssuesecuritylevelschemeUpdated(k);
  });
});

bthread("Issuesecuritylevelscheme delete verification", function () {
  const e = waitForAnyIssuesecuritylevelschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuesecuritylevelscheme(k, ANY), function () {
    verifyIssuesecuritylevelschemeDoesNotExist(k);
  });
});

bthread("Issuesecurityscheme create verification", function () {
  const e = waitForAnyIssuesecurityschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuesecurityscheme(k, ANY), function () {
    verifyIssuesecurityschemeExists(k);
  });
});

bthread("Issuesecurityscheme update verification", function () {
  const e = waitForAnyIssuesecurityschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuesecurityscheme(k, ANY), function () {
    verifyIssuesecurityschemeUpdated(k);
  });
});

bthread("Issuesecurityscheme delete verification", function () {
  const e = waitForAnyIssuesecurityschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuesecurityscheme(k, ANY), function () {
    verifyIssuesecurityschemeDoesNotExist(k);
  });
});

bthread("Issuetype create verification", function () {
  const e = waitForAnyIssuetypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetype(k, ANY), function () {
    verifyIssuetypeExists(k);
  });
});

bthread("Issuetype update verification", function () {
  const e = waitForAnyIssuetypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetype(k, ANY), function () {
    verifyIssuetypeUpdated(k);
  });
});

bthread("Issuetype delete verification", function () {
  const e = waitForAnyIssuetypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetype(k, ANY), function () {
    verifyIssuetypeDoesNotExist(k);
  });
});

bthread("Issuetypemapping create verification", function () {
  const e = waitForAnyIssuetypemappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypemapping(k, ANY), function () {
    verifyIssuetypemappingExists(k);
  });
});

bthread("Issuetypemapping update verification", function () {
  const e = waitForAnyIssuetypemappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypemapping(k, ANY), function () {
    verifyIssuetypemappingUpdated(k);
  });
});

bthread("Issuetypemapping delete verification", function () {
  const e = waitForAnyIssuetypemappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetypemapping(k, ANY), function () {
    verifyIssuetypemappingDoesNotExist(k);
  });
});

bthread("Issuetypescheme create verification", function () {
  const e = waitForAnyIssuetypeschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypescheme(k, ANY), function () {
    verifyIssuetypeschemeExists(k);
  });
});

bthread("Issuetypescheme update verification", function () {
  const e = waitForAnyIssuetypeschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypescheme(k, ANY), function () {
    verifyIssuetypeschemeUpdated(k);
  });
});

bthread("Issuetypescheme delete verification", function () {
  const e = waitForAnyIssuetypeschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetypescheme(k, ANY), function () {
    verifyIssuetypeschemeDoesNotExist(k);
  });
});

bthread("Issuetypescreenscheme create verification", function () {
  const e = waitForAnyIssuetypescreenschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypescreenscheme(k, ANY), function () {
    verifyIssuetypescreenschemeExists(k);
  });
});

bthread("Issuetypescreenscheme update verification", function () {
  const e = waitForAnyIssuetypescreenschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypescreenscheme(k, ANY), function () {
    verifyIssuetypescreenschemeUpdated(k);
  });
});

bthread("Issuetypescreenscheme delete verification", function () {
  const e = waitForAnyIssuetypescreenschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetypescreenscheme(k, ANY), function () {
    verifyIssuetypescreenschemeDoesNotExist(k);
  });
});

bthread("Issuetypeusage create verification", function () {
  const e = waitForAnyIssuetypeusageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypeusage(k, ANY), function () {
    verifyIssuetypeusageExists(k);
  });
});

bthread("Issuetypeusage update verification", function () {
  const e = waitForAnyIssuetypeusageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetypeusage(k, ANY), function () {
    verifyIssuetypeusageUpdated(k);
  });
});

bthread("Issuetypeusage delete verification", function () {
  const e = waitForAnyIssuetypeusageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetypeusage(k, ANY), function () {
    verifyIssuetypeusageDoesNotExist(k);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteItem(k, ANY), function () {
    verifyItemExists(k);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteItem(k, ANY), function () {
    verifyItemUpdated(k);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddItem(k, ANY), function () {
    verifyItemDoesNotExist(k);
  });
});

bthread("Jql create verification", function () {
  const e = waitForAnyJqlAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJql(k, ANY), function () {
    verifyJqlExists(k);
  });
});

bthread("Jql update verification", function () {
  const e = waitForAnyJqlUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJql(k, ANY), function () {
    verifyJqlUpdated(k);
  });
});

bthread("Jql delete verification", function () {
  const e = waitForAnyJqlDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddJql(k, ANY), function () {
    verifyJqlDoesNotExist(k);
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

bthread("Label create verification", function () {
  const e = waitForAnyLabelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLabel(k, ANY), function () {
    verifyLabelExists(k);
  });
});

bthread("Label update verification", function () {
  const e = waitForAnyLabelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLabel(k, ANY), function () {
    verifyLabelUpdated(k);
  });
});

bthread("Label delete verification", function () {
  const e = waitForAnyLabelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLabel(k, ANY), function () {
    verifyLabelDoesNotExist(k);
  });
});

bthread("Level create verification", function () {
  const e = waitForAnyLevelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLevel(k, ANY), function () {
    verifyLevelExists(k);
  });
});

bthread("Level update verification", function () {
  const e = waitForAnyLevelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLevel(k, ANY), function () {
    verifyLevelUpdated(k);
  });
});

bthread("Level delete verification", function () {
  const e = waitForAnyLevelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLevel(k, ANY), function () {
    verifyLevelDoesNotExist(k);
  });
});

bthread("License create verification", function () {
  const e = waitForAnyLicenseAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLicense(k, ANY), function () {
    verifyLicenseExists(k);
  });
});

bthread("License update verification", function () {
  const e = waitForAnyLicenseUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLicense(k, ANY), function () {
    verifyLicenseUpdated(k);
  });
});

bthread("License delete verification", function () {
  const e = waitForAnyLicenseDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLicense(k, ANY), function () {
    verifyLicenseDoesNotExist(k);
  });
});

bthread("Limit create verification", function () {
  const e = waitForAnyLimitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLimit(k, ANY), function () {
    verifyLimitExists(k);
  });
});

bthread("Limit update verification", function () {
  const e = waitForAnyLimitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLimit(k, ANY), function () {
    verifyLimitUpdated(k);
  });
});

bthread("Limit delete verification", function () {
  const e = waitForAnyLimitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLimit(k, ANY), function () {
    verifyLimitDoesNotExist(k);
  });
});

bthread("List create verification", function () {
  const e = waitForAnyListAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteList(k, ANY), function () {
    verifyListExists(k);
  });
});

bthread("List update verification", function () {
  const e = waitForAnyListUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteList(k, ANY), function () {
    verifyListUpdated(k);
  });
});

bthread("List delete verification", function () {
  const e = waitForAnyListDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddList(k, ANY), function () {
    verifyListDoesNotExist(k);
  });
});

bthread("Livetemplate create verification", function () {
  const e = waitForAnyLivetemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLivetemplate(k, ANY), function () {
    verifyLivetemplateExists(k);
  });
});

bthread("Livetemplate update verification", function () {
  const e = waitForAnyLivetemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLivetemplate(k, ANY), function () {
    verifyLivetemplateUpdated(k);
  });
});

bthread("Livetemplate delete verification", function () {
  const e = waitForAnyLivetemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLivetemplate(k, ANY), function () {
    verifyLivetemplateDoesNotExist(k);
  });
});

bthread("Locale create verification", function () {
  const e = waitForAnyLocaleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocale(k, ANY), function () {
    verifyLocaleExists(k);
  });
});

bthread("Locale update verification", function () {
  const e = waitForAnyLocaleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocale(k, ANY), function () {
    verifyLocaleUpdated(k);
  });
});

bthread("Locale delete verification", function () {
  const e = waitForAnyLocaleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLocale(k, ANY), function () {
    verifyLocaleDoesNotExist(k);
  });
});

bthread("Mapping create verification", function () {
  const e = waitForAnyMappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMapping(k, ANY), function () {
    verifyMappingExists(k);
  });
});

bthread("Mapping update verification", function () {
  const e = waitForAnyMappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMapping(k, ANY), function () {
    verifyMappingUpdated(k);
  });
});

bthread("Mapping delete verification", function () {
  const e = waitForAnyMappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMapping(k, ANY), function () {
    verifyMappingDoesNotExist(k);
  });
});

bthread("Match create verification", function () {
  const e = waitForAnyMatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMatch(k, ANY), function () {
    verifyMatchExists(k);
  });
});

bthread("Match update verification", function () {
  const e = waitForAnyMatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMatch(k, ANY), function () {
    verifyMatchUpdated(k);
  });
});

bthread("Match delete verification", function () {
  const e = waitForAnyMatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMatch(k, ANY), function () {
    verifyMatchDoesNotExist(k);
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

bthread("Mergeto create verification", function () {
  const e = waitForAnyMergetoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMergeto(k, ANY), function () {
    verifyMergetoExists(k);
  });
});

bthread("Mergeto update verification", function () {
  const e = waitForAnyMergetoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMergeto(k, ANY), function () {
    verifyMergetoUpdated(k);
  });
});

bthread("Mergeto delete verification", function () {
  const e = waitForAnyMergetoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMergeto(k, ANY), function () {
    verifyMergetoDoesNotExist(k);
  });
});

bthread("Meta create verification", function () {
  const e = waitForAnyMetaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMeta(k, ANY), function () {
    verifyMetaExists(k);
  });
});

bthread("Meta update verification", function () {
  const e = waitForAnyMetaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMeta(k, ANY), function () {
    verifyMetaUpdated(k);
  });
});

bthread("Meta delete verification", function () {
  const e = waitForAnyMetaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMeta(k, ANY), function () {
    verifyMetaDoesNotExist(k);
  });
});

bthread("Migration create verification", function () {
  const e = waitForAnyMigrationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMigration(k, ANY), function () {
    verifyMigrationExists(k);
  });
});

bthread("Migration update verification", function () {
  const e = waitForAnyMigrationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMigration(k, ANY), function () {
    verifyMigrationUpdated(k);
  });
});

bthread("Migration delete verification", function () {
  const e = waitForAnyMigrationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMigration(k, ANY), function () {
    verifyMigrationDoesNotExist(k);
  });
});

bthread("Module create verification", function () {
  const e = waitForAnyModuleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModule(k, ANY), function () {
    verifyModuleExists(k);
  });
});

bthread("Module update verification", function () {
  const e = waitForAnyModuleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteModule(k, ANY), function () {
    verifyModuleUpdated(k);
  });
});

bthread("Module delete verification", function () {
  const e = waitForAnyModuleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddModule(k, ANY), function () {
    verifyModuleDoesNotExist(k);
  });
});

bthread("Move create verification", function () {
  const e = waitForAnyMoveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMove(k, ANY), function () {
    verifyMoveExists(k);
  });
});

bthread("Move update verification", function () {
  const e = waitForAnyMoveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMove(k, ANY), function () {
    verifyMoveUpdated(k);
  });
});

bthread("Move delete verification", function () {
  const e = waitForAnyMoveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMove(k, ANY), function () {
    verifyMoveDoesNotExist(k);
  });
});

bthread("Multi create verification", function () {
  const e = waitForAnyMultiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMulti(k, ANY), function () {
    verifyMultiExists(k);
  });
});

bthread("Multi update verification", function () {
  const e = waitForAnyMultiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMulti(k, ANY), function () {
    verifyMultiUpdated(k);
  });
});

bthread("Multi delete verification", function () {
  const e = waitForAnyMultiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMulti(k, ANY), function () {
    verifyMultiDoesNotExist(k);
  });
});

bthread("Multiprojectsearch create verification", function () {
  const e = waitForAnyMultiprojectsearchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMultiprojectsearch(k, ANY), function () {
    verifyMultiprojectsearchExists(k);
  });
});

bthread("Multiprojectsearch update verification", function () {
  const e = waitForAnyMultiprojectsearchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMultiprojectsearch(k, ANY), function () {
    verifyMultiprojectsearchUpdated(k);
  });
});

bthread("Multiprojectsearch delete verification", function () {
  const e = waitForAnyMultiprojectsearchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMultiprojectsearch(k, ANY), function () {
    verifyMultiprojectsearchDoesNotExist(k);
  });
});

bthread("My create verification", function () {
  const e = waitForAnyMyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMy(k, ANY), function () {
    verifyMyExists(k);
  });
});

bthread("My update verification", function () {
  const e = waitForAnyMyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMy(k, ANY), function () {
    verifyMyUpdated(k);
  });
});

bthread("My delete verification", function () {
  const e = waitForAnyMyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMy(k, ANY), function () {
    verifyMyDoesNotExist(k);
  });
});

bthread("Mypermission create verification", function () {
  const e = waitForAnyMypermissionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMypermission(k, ANY), function () {
    verifyMypermissionExists(k);
  });
});

bthread("Mypermission update verification", function () {
  const e = waitForAnyMypermissionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMypermission(k, ANY), function () {
    verifyMypermissionUpdated(k);
  });
});

bthread("Mypermission delete verification", function () {
  const e = waitForAnyMypermissionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMypermission(k, ANY), function () {
    verifyMypermissionDoesNotExist(k);
  });
});

bthread("Mypreference create verification", function () {
  const e = waitForAnyMypreferenceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMypreference(k, ANY), function () {
    verifyMypreferenceExists(k);
  });
});

bthread("Mypreference update verification", function () {
  const e = waitForAnyMypreferenceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMypreference(k, ANY), function () {
    verifyMypreferenceUpdated(k);
  });
});

bthread("Mypreference delete verification", function () {
  const e = waitForAnyMypreferenceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMypreference(k, ANY), function () {
    verifyMypreferenceDoesNotExist(k);
  });
});

bthread("Myself create verification", function () {
  const e = waitForAnyMyselfAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMyself(k, ANY), function () {
    verifyMyselfExists(k);
  });
});

bthread("Myself update verification", function () {
  const e = waitForAnyMyselfUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMyself(k, ANY), function () {
    verifyMyselfUpdated(k);
  });
});

bthread("Myself delete verification", function () {
  const e = waitForAnyMyselfDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMyself(k, ANY), function () {
    verifyMyselfDoesNotExist(k);
  });
});

bthread("Nav4optproperty create verification", function () {
  const e = waitForAnyNav4optpropertyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNav4optproperty(k, ANY), function () {
    verifyNav4optpropertyExists(k);
  });
});

bthread("Nav4optproperty update verification", function () {
  const e = waitForAnyNav4optpropertyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNav4optproperty(k, ANY), function () {
    verifyNav4optpropertyUpdated(k);
  });
});

bthread("Nav4optproperty delete verification", function () {
  const e = waitForAnyNav4optpropertyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNav4optproperty(k, ANY), function () {
    verifyNav4optpropertyDoesNotExist(k);
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

bthread("Notificationscheme create verification", function () {
  const e = waitForAnyNotificationschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotificationscheme(k, ANY), function () {
    verifyNotificationschemeExists(k);
  });
});

bthread("Notificationscheme update verification", function () {
  const e = waitForAnyNotificationschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotificationscheme(k, ANY), function () {
    verifyNotificationschemeUpdated(k);
  });
});

bthread("Notificationscheme delete verification", function () {
  const e = waitForAnyNotificationschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotificationscheme(k, ANY), function () {
    verifyNotificationschemeDoesNotExist(k);
  });
});

bthread("Notify create verification", function () {
  const e = waitForAnyNotifyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotify(k, ANY), function () {
    verifyNotifyExists(k);
  });
});

bthread("Notify update verification", function () {
  const e = waitForAnyNotifyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotify(k, ANY), function () {
    verifyNotifyUpdated(k);
  });
});

bthread("Notify delete verification", function () {
  const e = waitForAnyNotifyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotify(k, ANY), function () {
    verifyNotifyDoesNotExist(k);
  });
});

bthread("Option create verification", function () {
  const e = waitForAnyOptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOption(k, ANY), function () {
    verifyOptionExists(k);
  });
});

bthread("Option update verification", function () {
  const e = waitForAnyOptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOption(k, ANY), function () {
    verifyOptionUpdated(k);
  });
});

bthread("Option delete verification", function () {
  const e = waitForAnyOptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOption(k, ANY), function () {
    verifyOptionDoesNotExist(k);
  });
});

bthread("Owner create verification", function () {
  const e = waitForAnyOwnerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOwner(k, ANY), function () {
    verifyOwnerExists(k);
  });
});

bthread("Owner update verification", function () {
  const e = waitForAnyOwnerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOwner(k, ANY), function () {
    verifyOwnerUpdated(k);
  });
});

bthread("Owner delete verification", function () {
  const e = waitForAnyOwnerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOwner(k, ANY), function () {
    verifyOwnerDoesNotExist(k);
  });
});

bthread("Parse create verification", function () {
  const e = waitForAnyParseAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParse(k, ANY), function () {
    verifyParseExists(k);
  });
});

bthread("Parse update verification", function () {
  const e = waitForAnyParseUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParse(k, ANY), function () {
    verifyParseUpdated(k);
  });
});

bthread("Parse delete verification", function () {
  const e = waitForAnyParseDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddParse(k, ANY), function () {
    verifyParseDoesNotExist(k);
  });
});

bthread("Pdcleaner create verification", function () {
  const e = waitForAnyPdcleanerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePdcleaner(k, ANY), function () {
    verifyPdcleanerExists(k);
  });
});

bthread("Pdcleaner update verification", function () {
  const e = waitForAnyPdcleanerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePdcleaner(k, ANY), function () {
    verifyPdcleanerUpdated(k);
  });
});

bthread("Pdcleaner delete verification", function () {
  const e = waitForAnyPdcleanerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPdcleaner(k, ANY), function () {
    verifyPdcleanerDoesNotExist(k);
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

bthread("Permissionscheme create verification", function () {
  const e = waitForAnyPermissionschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermissionscheme(k, ANY), function () {
    verifyPermissionschemeExists(k);
  });
});

bthread("Permissionscheme update verification", function () {
  const e = waitForAnyPermissionschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermissionscheme(k, ANY), function () {
    verifyPermissionschemeUpdated(k);
  });
});

bthread("Permissionscheme delete verification", function () {
  const e = waitForAnyPermissionschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPermissionscheme(k, ANY), function () {
    verifyPermissionschemeDoesNotExist(k);
  });
});

bthread("Picker create verification", function () {
  const e = waitForAnyPickerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePicker(k, ANY), function () {
    verifyPickerExists(k);
  });
});

bthread("Picker update verification", function () {
  const e = waitForAnyPickerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePicker(k, ANY), function () {
    verifyPickerUpdated(k);
  });
});

bthread("Picker delete verification", function () {
  const e = waitForAnyPickerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPicker(k, ANY), function () {
    verifyPickerDoesNotExist(k);
  });
});

bthread("Plan create verification", function () {
  const e = waitForAnyPlanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlan(k, ANY), function () {
    verifyPlanExists(k);
  });
});

bthread("Plan update verification", function () {
  const e = waitForAnyPlanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlan(k, ANY), function () {
    verifyPlanUpdated(k);
  });
});

bthread("Plan delete verification", function () {
  const e = waitForAnyPlanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPlan(k, ANY), function () {
    verifyPlanDoesNotExist(k);
  });
});

bthread("Planonly create verification", function () {
  const e = waitForAnyPlanonlyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlanonly(k, ANY), function () {
    verifyPlanonlyExists(k);
  });
});

bthread("Planonly update verification", function () {
  const e = waitForAnyPlanonlyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlanonly(k, ANY), function () {
    verifyPlanonlyUpdated(k);
  });
});

bthread("Planonly delete verification", function () {
  const e = waitForAnyPlanonlyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPlanonly(k, ANY), function () {
    verifyPlanonlyDoesNotExist(k);
  });
});

bthread("Preview create verification", function () {
  const e = waitForAnyPreviewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePreview(k, ANY), function () {
    verifyPreviewExists(k);
  });
});

bthread("Preview update verification", function () {
  const e = waitForAnyPreviewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePreview(k, ANY), function () {
    verifyPreviewUpdated(k);
  });
});

bthread("Preview delete verification", function () {
  const e = waitForAnyPreviewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPreview(k, ANY), function () {
    verifyPreviewDoesNotExist(k);
  });
});

bthread("Priority create verification", function () {
  const e = waitForAnyPriorityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePriority(k, ANY), function () {
    verifyPriorityExists(k);
  });
});

bthread("Priority update verification", function () {
  const e = waitForAnyPriorityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePriority(k, ANY), function () {
    verifyPriorityUpdated(k);
  });
});

bthread("Priority delete verification", function () {
  const e = waitForAnyPriorityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPriority(k, ANY), function () {
    verifyPriorityDoesNotExist(k);
  });
});

bthread("Priorityscheme create verification", function () {
  const e = waitForAnyPriorityschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePriorityscheme(k, ANY), function () {
    verifyPriorityschemeExists(k);
  });
});

bthread("Priorityscheme update verification", function () {
  const e = waitForAnyPriorityschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePriorityscheme(k, ANY), function () {
    verifyPriorityschemeUpdated(k);
  });
});

bthread("Priorityscheme delete verification", function () {
  const e = waitForAnyPriorityschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPriorityscheme(k, ANY), function () {
    verifyPriorityschemeDoesNotExist(k);
  });
});

bthread("Product create verification", function () {
  const e = waitForAnyProductAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProduct(k, ANY), function () {
    verifyProductExists(k);
  });
});

bthread("Product update verification", function () {
  const e = waitForAnyProductUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProduct(k, ANY), function () {
    verifyProductUpdated(k);
  });
});

bthread("Product delete verification", function () {
  const e = waitForAnyProductDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProduct(k, ANY), function () {
    verifyProductDoesNotExist(k);
  });
});

bthread("Project create verification", function () {
  const e = waitForAnyProjectAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProject(k, ANY), function () {
    verifyProjectExists(k);
  });
});

bthread("Project update verification", function () {
  const e = waitForAnyProjectUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProject(k, ANY), function () {
    verifyProjectUpdated(k);
  });
});

bthread("Project delete verification", function () {
  const e = waitForAnyProjectDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProject(k, ANY), function () {
    verifyProjectDoesNotExist(k);
  });
});

bthread("Projectcategory create verification", function () {
  const e = waitForAnyProjectcategoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectcategory(k, ANY), function () {
    verifyProjectcategoryExists(k);
  });
});

bthread("Projectcategory update verification", function () {
  const e = waitForAnyProjectcategoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectcategory(k, ANY), function () {
    verifyProjectcategoryUpdated(k);
  });
});

bthread("Projectcategory delete verification", function () {
  const e = waitForAnyProjectcategoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProjectcategory(k, ANY), function () {
    verifyProjectcategoryDoesNotExist(k);
  });
});

bthread("Projectmapping create verification", function () {
  const e = waitForAnyProjectmappingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectmapping(k, ANY), function () {
    verifyProjectmappingExists(k);
  });
});

bthread("Projectmapping update verification", function () {
  const e = waitForAnyProjectmappingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectmapping(k, ANY), function () {
    verifyProjectmappingUpdated(k);
  });
});

bthread("Projectmapping delete verification", function () {
  const e = waitForAnyProjectmappingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProjectmapping(k, ANY), function () {
    verifyProjectmappingDoesNotExist(k);
  });
});

bthread("Projecttemplate create verification", function () {
  const e = waitForAnyProjecttemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjecttemplate(k, ANY), function () {
    verifyProjecttemplateExists(k);
  });
});

bthread("Projecttemplate update verification", function () {
  const e = waitForAnyProjecttemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjecttemplate(k, ANY), function () {
    verifyProjecttemplateUpdated(k);
  });
});

bthread("Projecttemplate delete verification", function () {
  const e = waitForAnyProjecttemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProjecttemplate(k, ANY), function () {
    verifyProjecttemplateDoesNotExist(k);
  });
});

bthread("Projectusage create verification", function () {
  const e = waitForAnyProjectusageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectusage(k, ANY), function () {
    verifyProjectusageExists(k);
  });
});

bthread("Projectusage update verification", function () {
  const e = waitForAnyProjectusageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectusage(k, ANY), function () {
    verifyProjectusageUpdated(k);
  });
});

bthread("Projectusage delete verification", function () {
  const e = waitForAnyProjectusageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProjectusage(k, ANY), function () {
    verifyProjectusageDoesNotExist(k);
  });
});

bthread("Projectvalidate create verification", function () {
  const e = waitForAnyProjectvalidateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectvalidate(k, ANY), function () {
    verifyProjectvalidateExists(k);
  });
});

bthread("Projectvalidate update verification", function () {
  const e = waitForAnyProjectvalidateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectvalidate(k, ANY), function () {
    verifyProjectvalidateUpdated(k);
  });
});

bthread("Projectvalidate delete verification", function () {
  const e = waitForAnyProjectvalidateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProjectvalidate(k, ANY), function () {
    verifyProjectvalidateDoesNotExist(k);
  });
});

bthread("Property create verification", function () {
  const e = waitForAnyPropertyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProperty(k, ANY), function () {
    verifyPropertyExists(k);
  });
});

bthread("Property update verification", function () {
  const e = waitForAnyPropertyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProperty(k, ANY), function () {
    verifyPropertyUpdated(k);
  });
});

bthread("Property delete verification", function () {
  const e = waitForAnyPropertyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProperty(k, ANY), function () {
    verifyPropertyDoesNotExist(k);
  });
});

bthread("Publish create verification", function () {
  const e = waitForAnyPublishAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublish(k, ANY), function () {
    verifyPublishExists(k);
  });
});

bthread("Publish update verification", function () {
  const e = waitForAnyPublishUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublish(k, ANY), function () {
    verifyPublishUpdated(k);
  });
});

bthread("Publish delete verification", function () {
  const e = waitForAnyPublishDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublish(k, ANY), function () {
    verifyPublishDoesNotExist(k);
  });
});

bthread("Query create verification", function () {
  const e = waitForAnyQueryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteQuery(k, ANY), function () {
    verifyQueryExists(k);
  });
});

bthread("Query update verification", function () {
  const e = waitForAnyQueryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteQuery(k, ANY), function () {
    verifyQueryUpdated(k);
  });
});

bthread("Query delete verification", function () {
  const e = waitForAnyQueryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddQuery(k, ANY), function () {
    verifyQueryDoesNotExist(k);
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

bthread("Raw create verification", function () {
  const e = waitForAnyRawAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRaw(k, ANY), function () {
    verifyRawExists(k);
  });
});

bthread("Raw update verification", function () {
  const e = waitForAnyRawUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRaw(k, ANY), function () {
    verifyRawUpdated(k);
  });
});

bthread("Raw delete verification", function () {
  const e = waitForAnyRawDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRaw(k, ANY), function () {
    verifyRawDoesNotExist(k);
  });
});

bthread("Read create verification", function () {
  const e = waitForAnyReadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRead(k, ANY), function () {
    verifyReadExists(k);
  });
});

bthread("Read update verification", function () {
  const e = waitForAnyReadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRead(k, ANY), function () {
    verifyReadUpdated(k);
  });
});

bthread("Read delete verification", function () {
  const e = waitForAnyReadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRead(k, ANY), function () {
    verifyReadDoesNotExist(k);
  });
});

bthread("Recent create verification", function () {
  const e = waitForAnyRecentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecent(k, ANY), function () {
    verifyRecentExists(k);
  });
});

bthread("Recent update verification", function () {
  const e = waitForAnyRecentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRecent(k, ANY), function () {
    verifyRecentUpdated(k);
  });
});

bthread("Recent delete verification", function () {
  const e = waitForAnyRecentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRecent(k, ANY), function () {
    verifyRecentDoesNotExist(k);
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

bthread("Redact create verification", function () {
  const e = waitForAnyRedactAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRedact(k, ANY), function () {
    verifyRedactExists(k);
  });
});

bthread("Redact update verification", function () {
  const e = waitForAnyRedactUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRedact(k, ANY), function () {
    verifyRedactUpdated(k);
  });
});

bthread("Redact delete verification", function () {
  const e = waitForAnyRedactDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRedact(k, ANY), function () {
    verifyRedactDoesNotExist(k);
  });
});

bthread("Refresh create verification", function () {
  const e = waitForAnyRefreshAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRefresh(k, ANY), function () {
    verifyRefreshExists(k);
  });
});

bthread("Refresh update verification", function () {
  const e = waitForAnyRefreshUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRefresh(k, ANY), function () {
    verifyRefreshUpdated(k);
  });
});

bthread("Refresh delete verification", function () {
  const e = waitForAnyRefreshDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRefresh(k, ANY), function () {
    verifyRefreshDoesNotExist(k);
  });
});

bthread("Relatedissuecount create verification", function () {
  const e = waitForAnyRelatedissuecountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRelatedissuecount(k, ANY), function () {
    verifyRelatedissuecountExists(k);
  });
});

bthread("Relatedissuecount update verification", function () {
  const e = waitForAnyRelatedissuecountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRelatedissuecount(k, ANY), function () {
    verifyRelatedissuecountUpdated(k);
  });
});

bthread("Relatedissuecount delete verification", function () {
  const e = waitForAnyRelatedissuecountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRelatedissuecount(k, ANY), function () {
    verifyRelatedissuecountDoesNotExist(k);
  });
});

bthread("Relatedwork create verification", function () {
  const e = waitForAnyRelatedworkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRelatedwork(k, ANY), function () {
    verifyRelatedworkExists(k);
  });
});

bthread("Relatedwork update verification", function () {
  const e = waitForAnyRelatedworkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRelatedwork(k, ANY), function () {
    verifyRelatedworkUpdated(k);
  });
});

bthread("Relatedwork delete verification", function () {
  const e = waitForAnyRelatedworkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRelatedwork(k, ANY), function () {
    verifyRelatedworkDoesNotExist(k);
  });
});

bthread("Remotelink create verification", function () {
  const e = waitForAnyRemotelinkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemotelink(k, ANY), function () {
    verifyRemotelinkExists(k);
  });
});

bthread("Remotelink update verification", function () {
  const e = waitForAnyRemotelinkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemotelink(k, ANY), function () {
    verifyRemotelinkUpdated(k);
  });
});

bthread("Remotelink delete verification", function () {
  const e = waitForAnyRemotelinkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemotelink(k, ANY), function () {
    verifyRemotelinkDoesNotExist(k);
  });
});

bthread("Remove create verification", function () {
  const e = waitForAnyRemoveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemove(k, ANY), function () {
    verifyRemoveExists(k);
  });
});

bthread("Remove update verification", function () {
  const e = waitForAnyRemoveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemove(k, ANY), function () {
    verifyRemoveUpdated(k);
  });
});

bthread("Remove delete verification", function () {
  const e = waitForAnyRemoveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemove(k, ANY), function () {
    verifyRemoveDoesNotExist(k);
  });
});

bthread("Removeandswap create verification", function () {
  const e = waitForAnyRemoveandswapAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemoveandswap(k, ANY), function () {
    verifyRemoveandswapExists(k);
  });
});

bthread("Removeandswap update verification", function () {
  const e = waitForAnyRemoveandswapUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemoveandswap(k, ANY), function () {
    verifyRemoveandswapUpdated(k);
  });
});

bthread("Removeandswap delete verification", function () {
  const e = waitForAnyRemoveandswapDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemoveandswap(k, ANY), function () {
    verifyRemoveandswapDoesNotExist(k);
  });
});

bthread("Removetemplate create verification", function () {
  const e = waitForAnyRemovetemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemovetemplate(k, ANY), function () {
    verifyRemovetemplateExists(k);
  });
});

bthread("Removetemplate update verification", function () {
  const e = waitForAnyRemovetemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemovetemplate(k, ANY), function () {
    verifyRemovetemplateUpdated(k);
  });
});

bthread("Removetemplate delete verification", function () {
  const e = waitForAnyRemovetemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemovetemplate(k, ANY), function () {
    verifyRemovetemplateDoesNotExist(k);
  });
});

bthread("Report create verification", function () {
  const e = waitForAnyReportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReport(k, ANY), function () {
    verifyReportExists(k);
  });
});

bthread("Report update verification", function () {
  const e = waitForAnyReportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReport(k, ANY), function () {
    verifyReportUpdated(k);
  });
});

bthread("Report delete verification", function () {
  const e = waitForAnyReportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReport(k, ANY), function () {
    verifyReportDoesNotExist(k);
  });
});

bthread("Resolution create verification", function () {
  const e = waitForAnyResolutionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResolution(k, ANY), function () {
    verifyResolutionExists(k);
  });
});

bthread("Resolution update verification", function () {
  const e = waitForAnyResolutionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResolution(k, ANY), function () {
    verifyResolutionUpdated(k);
  });
});

bthread("Resolution delete verification", function () {
  const e = waitForAnyResolutionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddResolution(k, ANY), function () {
    verifyResolutionDoesNotExist(k);
  });
});

bthread("Rest create verification", function () {
  const e = waitForAnyRestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRest(k, ANY), function () {
    verifyRestExists(k);
  });
});

bthread("Rest update verification", function () {
  const e = waitForAnyRestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRest(k, ANY), function () {
    verifyRestUpdated(k);
  });
});

bthread("Rest delete verification", function () {
  const e = waitForAnyRestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRest(k, ANY), function () {
    verifyRestDoesNotExist(k);
  });
});

bthread("Restore create verification", function () {
  const e = waitForAnyRestoreAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRestore(k, ANY), function () {
    verifyRestoreExists(k);
  });
});

bthread("Restore update verification", function () {
  const e = waitForAnyRestoreUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRestore(k, ANY), function () {
    verifyRestoreUpdated(k);
  });
});

bthread("Restore delete verification", function () {
  const e = waitForAnyRestoreDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRestore(k, ANY), function () {
    verifyRestoreDoesNotExist(k);
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

bthread("Roledetail create verification", function () {
  const e = waitForAnyRoledetailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRoledetail(k, ANY), function () {
    verifyRoledetailExists(k);
  });
});

bthread("Roledetail update verification", function () {
  const e = waitForAnyRoledetailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRoledetail(k, ANY), function () {
    verifyRoledetailUpdated(k);
  });
});

bthread("Roledetail delete verification", function () {
  const e = waitForAnyRoledetailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRoledetail(k, ANY), function () {
    verifyRoledetailDoesNotExist(k);
  });
});

bthread("Rule create verification", function () {
  const e = waitForAnyRuleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRule(k, ANY), function () {
    verifyRuleExists(k);
  });
});

bthread("Rule update verification", function () {
  const e = waitForAnyRuleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRule(k, ANY), function () {
    verifyRuleUpdated(k);
  });
});

bthread("Rule delete verification", function () {
  const e = waitForAnyRuleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRule(k, ANY), function () {
    verifyRuleDoesNotExist(k);
  });
});

bthread("Sanitize create verification", function () {
  const e = waitForAnySanitizeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSanitize(k, ANY), function () {
    verifySanitizeExists(k);
  });
});

bthread("Sanitize update verification", function () {
  const e = waitForAnySanitizeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSanitize(k, ANY), function () {
    verifySanitizeUpdated(k);
  });
});

bthread("Sanitize delete verification", function () {
  const e = waitForAnySanitizeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSanitize(k, ANY), function () {
    verifySanitizeDoesNotExist(k);
  });
});

bthread("Savetemplate create verification", function () {
  const e = waitForAnySavetemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavetemplate(k, ANY), function () {
    verifySavetemplateExists(k);
  });
});

bthread("Savetemplate update verification", function () {
  const e = waitForAnySavetemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavetemplate(k, ANY), function () {
    verifySavetemplateUpdated(k);
  });
});

bthread("Savetemplate delete verification", function () {
  const e = waitForAnySavetemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSavetemplate(k, ANY), function () {
    verifySavetemplateDoesNotExist(k);
  });
});

bthread("Screen create verification", function () {
  const e = waitForAnyScreenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScreen(k, ANY), function () {
    verifyScreenExists(k);
  });
});

bthread("Screen update verification", function () {
  const e = waitForAnyScreenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScreen(k, ANY), function () {
    verifyScreenUpdated(k);
  });
});

bthread("Screen delete verification", function () {
  const e = waitForAnyScreenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScreen(k, ANY), function () {
    verifyScreenDoesNotExist(k);
  });
});

bthread("Screenscheme create verification", function () {
  const e = waitForAnyScreenschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScreenscheme(k, ANY), function () {
    verifyScreenschemeExists(k);
  });
});

bthread("Screenscheme update verification", function () {
  const e = waitForAnyScreenschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScreenscheme(k, ANY), function () {
    verifyScreenschemeUpdated(k);
  });
});

bthread("Screenscheme delete verification", function () {
  const e = waitForAnyScreenschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScreenscheme(k, ANY), function () {
    verifyScreenschemeDoesNotExist(k);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearch(k, ANY), function () {
    verifySearchExists(k);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearch(k, ANY), function () {
    verifySearchUpdated(k);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSearch(k, ANY), function () {
    verifySearchDoesNotExist(k);
  });
});

bthread("Securitylevel create verification", function () {
  const e = waitForAnySecuritylevelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecuritylevel(k, ANY), function () {
    verifySecuritylevelExists(k);
  });
});

bthread("Securitylevel update verification", function () {
  const e = waitForAnySecuritylevelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecuritylevel(k, ANY), function () {
    verifySecuritylevelUpdated(k);
  });
});

bthread("Securitylevel delete verification", function () {
  const e = waitForAnySecuritylevelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSecuritylevel(k, ANY), function () {
    verifySecuritylevelDoesNotExist(k);
  });
});

bthread("Serverinfo create verification", function () {
  const e = waitForAnyServerinfoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServerinfo(k, ANY), function () {
    verifyServerinfoExists(k);
  });
});

bthread("Serverinfo update verification", function () {
  const e = waitForAnyServerinfoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServerinfo(k, ANY), function () {
    verifyServerinfoUpdated(k);
  });
});

bthread("Serverinfo delete verification", function () {
  const e = waitForAnyServerinfoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddServerinfo(k, ANY), function () {
    verifyServerinfoDoesNotExist(k);
  });
});

bthread("Serviceregistry create verification", function () {
  const e = waitForAnyServiceregistryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServiceregistry(k, ANY), function () {
    verifyServiceregistryExists(k);
  });
});

bthread("Serviceregistry update verification", function () {
  const e = waitForAnyServiceregistryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServiceregistry(k, ANY), function () {
    verifyServiceregistryUpdated(k);
  });
});

bthread("Serviceregistry delete verification", function () {
  const e = waitForAnyServiceregistryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddServiceregistry(k, ANY), function () {
    verifyServiceregistryDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSetting(k, ANY), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatu(k, ANY), function () {
    verifyStatuExists(k);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatu(k, ANY), function () {
    verifyStatuUpdated(k);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStatu(k, ANY), function () {
    verifyStatuDoesNotExist(k);
  });
});

bthread("Status create verification", function () {
  const e = waitForAnyStatusAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatus(k, ANY), function () {
    verifyStatusExists(k);
  });
});

bthread("Status update verification", function () {
  const e = waitForAnyStatusUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatus(k, ANY), function () {
    verifyStatusUpdated(k);
  });
});

bthread("Status delete verification", function () {
  const e = waitForAnyStatusDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStatus(k, ANY), function () {
    verifyStatusDoesNotExist(k);
  });
});

bthread("Statuscategory create verification", function () {
  const e = waitForAnyStatuscategoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatuscategory(k, ANY), function () {
    verifyStatuscategoryExists(k);
  });
});

bthread("Statuscategory update verification", function () {
  const e = waitForAnyStatuscategoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatuscategory(k, ANY), function () {
    verifyStatuscategoryUpdated(k);
  });
});

bthread("Statuscategory delete verification", function () {
  const e = waitForAnyStatuscategoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStatuscategory(k, ANY), function () {
    verifyStatuscategoryDoesNotExist(k);
  });
});

bthread("Suggestion create verification", function () {
  const e = waitForAnySuggestionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSuggestion(k, ANY), function () {
    verifySuggestionExists(k);
  });
});

bthread("Suggestion update verification", function () {
  const e = waitForAnySuggestionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSuggestion(k, ANY), function () {
    verifySuggestionUpdated(k);
  });
});

bthread("Suggestion delete verification", function () {
  const e = waitForAnySuggestionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSuggestion(k, ANY), function () {
    verifySuggestionDoesNotExist(k);
  });
});

bthread("System create verification", function () {
  const e = waitForAnySystemAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSystem(k, ANY), function () {
    verifySystemExists(k);
  });
});

bthread("System update verification", function () {
  const e = waitForAnySystemUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSystem(k, ANY), function () {
    verifySystemUpdated(k);
  });
});

bthread("System delete verification", function () {
  const e = waitForAnySystemDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSystem(k, ANY), function () {
    verifySystemDoesNotExist(k);
  });
});

bthread("Tab create verification", function () {
  const e = waitForAnyTabAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTab(k, ANY), function () {
    verifyTabExists(k);
  });
});

bthread("Tab update verification", function () {
  const e = waitForAnyTabUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTab(k, ANY), function () {
    verifyTabUpdated(k);
  });
});

bthread("Tab delete verification", function () {
  const e = waitForAnyTabDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTab(k, ANY), function () {
    verifyTabDoesNotExist(k);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTask(k, ANY), function () {
    verifyTaskExists(k);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTask(k, ANY), function () {
    verifyTaskUpdated(k);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTask(k, ANY), function () {
    verifyTaskDoesNotExist(k);
  });
});

bthread("Team create verification", function () {
  const e = waitForAnyTeamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTeam(k, ANY), function () {
    verifyTeamExists(k);
  });
});

bthread("Team update verification", function () {
  const e = waitForAnyTeamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTeam(k, ANY), function () {
    verifyTeamUpdated(k);
  });
});

bthread("Team delete verification", function () {
  const e = waitForAnyTeamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTeam(k, ANY), function () {
    verifyTeamDoesNotExist(k);
  });
});

bthread("Thumbnail create verification", function () {
  const e = waitForAnyThumbnailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteThumbnail(k, ANY), function () {
    verifyThumbnailExists(k);
  });
});

bthread("Thumbnail update verification", function () {
  const e = waitForAnyThumbnailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteThumbnail(k, ANY), function () {
    verifyThumbnailUpdated(k);
  });
});

bthread("Thumbnail delete verification", function () {
  const e = waitForAnyThumbnailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddThumbnail(k, ANY), function () {
    verifyThumbnailDoesNotExist(k);
  });
});

bthread("Timetracking create verification", function () {
  const e = waitForAnyTimetrackingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTimetracking(k, ANY), function () {
    verifyTimetrackingExists(k);
  });
});

bthread("Timetracking update verification", function () {
  const e = waitForAnyTimetrackingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTimetracking(k, ANY), function () {
    verifyTimetrackingUpdated(k);
  });
});

bthread("Timetracking delete verification", function () {
  const e = waitForAnyTimetrackingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTimetracking(k, ANY), function () {
    verifyTimetrackingDoesNotExist(k);
  });
});

bthread("Transition create verification", function () {
  const e = waitForAnyTransitionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransition(k, ANY), function () {
    verifyTransitionExists(k);
  });
});

bthread("Transition update verification", function () {
  const e = waitForAnyTransitionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransition(k, ANY), function () {
    verifyTransitionUpdated(k);
  });
});

bthread("Transition delete verification", function () {
  const e = waitForAnyTransitionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTransition(k, ANY), function () {
    verifyTransitionDoesNotExist(k);
  });
});

bthread("Trash create verification", function () {
  const e = waitForAnyTrashAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrash(k, ANY), function () {
    verifyTrashExists(k);
  });
});

bthread("Trash update verification", function () {
  const e = waitForAnyTrashUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrash(k, ANY), function () {
    verifyTrashUpdated(k);
  });
});

bthread("Trash delete verification", function () {
  const e = waitForAnyTrashDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTrash(k, ANY), function () {
    verifyTrashDoesNotExist(k);
  });
});

bthread("Trashed create verification", function () {
  const e = waitForAnyTrashedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrashed(k, ANY), function () {
    verifyTrashedExists(k);
  });
});

bthread("Trashed update verification", function () {
  const e = waitForAnyTrashedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrashed(k, ANY), function () {
    verifyTrashedUpdated(k);
  });
});

bthread("Trashed delete verification", function () {
  const e = waitForAnyTrashedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTrashed(k, ANY), function () {
    verifyTrashedDoesNotExist(k);
  });
});

bthread("Type create verification", function () {
  const e = waitForAnyTypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteType(k, ANY), function () {
    verifyTypeExists(k);
  });
});

bthread("Type update verification", function () {
  const e = waitForAnyTypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteType(k, ANY), function () {
    verifyTypeUpdated(k);
  });
});

bthread("Type delete verification", function () {
  const e = waitForAnyTypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddType(k, ANY), function () {
    verifyTypeDoesNotExist(k);
  });
});

bthread("Uimodification create verification", function () {
  const e = waitForAnyUimodificationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUimodification(k, ANY), function () {
    verifyUimodificationExists(k);
  });
});

bthread("Uimodification update verification", function () {
  const e = waitForAnyUimodificationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUimodification(k, ANY), function () {
    verifyUimodificationUpdated(k);
  });
});

bthread("Uimodification delete verification", function () {
  const e = waitForAnyUimodificationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUimodification(k, ANY), function () {
    verifyUimodificationDoesNotExist(k);
  });
});

bthread("Unarchive create verification", function () {
  const e = waitForAnyUnarchiveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnarchive(k, ANY), function () {
    verifyUnarchiveExists(k);
  });
});

bthread("Unarchive update verification", function () {
  const e = waitForAnyUnarchiveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnarchive(k, ANY), function () {
    verifyUnarchiveUpdated(k);
  });
});

bthread("Unarchive delete verification", function () {
  const e = waitForAnyUnarchiveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUnarchive(k, ANY), function () {
    verifyUnarchiveDoesNotExist(k);
  });
});

bthread("Universalavatar create verification", function () {
  const e = waitForAnyUniversalavatarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUniversalavatar(k, ANY), function () {
    verifyUniversalavatarExists(k);
  });
});

bthread("Universalavatar update verification", function () {
  const e = waitForAnyUniversalavatarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUniversalavatar(k, ANY), function () {
    verifyUniversalavatarUpdated(k);
  });
});

bthread("Universalavatar delete verification", function () {
  const e = waitForAnyUniversalavatarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUniversalavatar(k, ANY), function () {
    verifyUniversalavatarDoesNotExist(k);
  });
});

bthread("Unresolvedissuecount create verification", function () {
  const e = waitForAnyUnresolvedissuecountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnresolvedissuecount(k, ANY), function () {
    verifyUnresolvedissuecountExists(k);
  });
});

bthread("Unresolvedissuecount update verification", function () {
  const e = waitForAnyUnresolvedissuecountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnresolvedissuecount(k, ANY), function () {
    verifyUnresolvedissuecountUpdated(k);
  });
});

bthread("Unresolvedissuecount delete verification", function () {
  const e = waitForAnyUnresolvedissuecountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUnresolvedissuecount(k, ANY), function () {
    verifyUnresolvedissuecountDoesNotExist(k);
  });
});

bthread("Unwatch create verification", function () {
  const e = waitForAnyUnwatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnwatch(k, ANY), function () {
    verifyUnwatchExists(k);
  });
});

bthread("Unwatch update verification", function () {
  const e = waitForAnyUnwatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnwatch(k, ANY), function () {
    verifyUnwatchUpdated(k);
  });
});

bthread("Unwatch delete verification", function () {
  const e = waitForAnyUnwatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUnwatch(k, ANY), function () {
    verifyUnwatchDoesNotExist(k);
  });
});

bthread("Update create verification", function () {
  const e = waitForAnyUpdateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdate(k, ANY), function () {
    verifyUpdateExists(k);
  });
});

bthread("Update update verification", function () {
  const e = waitForAnyUpdateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdate(k, ANY), function () {
    verifyUpdateUpdated(k);
  });
});

bthread("Update delete verification", function () {
  const e = waitForAnyUpdateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUpdate(k, ANY), function () {
    verifyUpdateDoesNotExist(k);
  });
});

bthread("Updated create verification", function () {
  const e = waitForAnyUpdatedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdated(k, ANY), function () {
    verifyUpdatedExists(k);
  });
});

bthread("Updated update verification", function () {
  const e = waitForAnyUpdatedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdated(k, ANY), function () {
    verifyUpdatedUpdated(k);
  });
});

bthread("Updated delete verification", function () {
  const e = waitForAnyUpdatedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUpdated(k, ANY), function () {
    verifyUpdatedDoesNotExist(k);
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

bthread("Validation create verification", function () {
  const e = waitForAnyValidationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidation(k, ANY), function () {
    verifyValidationExists(k);
  });
});

bthread("Validation update verification", function () {
  const e = waitForAnyValidationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidation(k, ANY), function () {
    verifyValidationUpdated(k);
  });
});

bthread("Validation delete verification", function () {
  const e = waitForAnyValidationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddValidation(k, ANY), function () {
    verifyValidationDoesNotExist(k);
  });
});

bthread("Validprojectkey create verification", function () {
  const e = waitForAnyValidprojectkeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidprojectkey(k, ANY), function () {
    verifyValidprojectkeyExists(k);
  });
});

bthread("Validprojectkey update verification", function () {
  const e = waitForAnyValidprojectkeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidprojectkey(k, ANY), function () {
    verifyValidprojectkeyUpdated(k);
  });
});

bthread("Validprojectkey delete verification", function () {
  const e = waitForAnyValidprojectkeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddValidprojectkey(k, ANY), function () {
    verifyValidprojectkeyDoesNotExist(k);
  });
});

bthread("Validprojectname create verification", function () {
  const e = waitForAnyValidprojectnameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidprojectname(k, ANY), function () {
    verifyValidprojectnameExists(k);
  });
});

bthread("Validprojectname update verification", function () {
  const e = waitForAnyValidprojectnameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidprojectname(k, ANY), function () {
    verifyValidprojectnameUpdated(k);
  });
});

bthread("Validprojectname delete verification", function () {
  const e = waitForAnyValidprojectnameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddValidprojectname(k, ANY), function () {
    verifyValidprojectnameDoesNotExist(k);
  });
});

bthread("Value create verification", function () {
  const e = waitForAnyValueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValue(k, ANY), function () {
    verifyValueExists(k);
  });
});

bthread("Value update verification", function () {
  const e = waitForAnyValueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValue(k, ANY), function () {
    verifyValueUpdated(k);
  });
});

bthread("Value delete verification", function () {
  const e = waitForAnyValueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddValue(k, ANY), function () {
    verifyValueDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVersion(k, ANY), function () {
    verifyVersionDoesNotExist(k);
  });
});

bthread("View create verification", function () {
  const e = waitForAnyViewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteView(k, ANY), function () {
    verifyViewExists(k);
  });
});

bthread("View update verification", function () {
  const e = waitForAnyViewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteView(k, ANY), function () {
    verifyViewUpdated(k);
  });
});

bthread("View delete verification", function () {
  const e = waitForAnyViewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddView(k, ANY), function () {
    verifyViewDoesNotExist(k);
  });
});

bthread("Viewissue create verification", function () {
  const e = waitForAnyViewissueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteViewissue(k, ANY), function () {
    verifyViewissueExists(k);
  });
});

bthread("Viewissue update verification", function () {
  const e = waitForAnyViewissueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteViewissue(k, ANY), function () {
    verifyViewissueUpdated(k);
  });
});

bthread("Viewissue delete verification", function () {
  const e = waitForAnyViewissueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddViewissue(k, ANY), function () {
    verifyViewissueDoesNotExist(k);
  });
});

bthread("Vote create verification", function () {
  const e = waitForAnyVoteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVote(k, ANY), function () {
    verifyVoteExists(k);
  });
});

bthread("Vote update verification", function () {
  const e = waitForAnyVoteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVote(k, ANY), function () {
    verifyVoteUpdated(k);
  });
});

bthread("Vote delete verification", function () {
  const e = waitForAnyVoteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVote(k, ANY), function () {
    verifyVoteDoesNotExist(k);
  });
});

bthread("Watch create verification", function () {
  const e = waitForAnyWatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWatch(k, ANY), function () {
    verifyWatchExists(k);
  });
});

bthread("Watch update verification", function () {
  const e = waitForAnyWatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWatch(k, ANY), function () {
    verifyWatchUpdated(k);
  });
});

bthread("Watch delete verification", function () {
  const e = waitForAnyWatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWatch(k, ANY), function () {
    verifyWatchDoesNotExist(k);
  });
});

bthread("Watcher create verification", function () {
  const e = waitForAnyWatcherAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWatcher(k, ANY), function () {
    verifyWatcherExists(k);
  });
});

bthread("Watcher update verification", function () {
  const e = waitForAnyWatcherUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWatcher(k, ANY), function () {
    verifyWatcherUpdated(k);
  });
});

bthread("Watcher delete verification", function () {
  const e = waitForAnyWatcherDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWatcher(k, ANY), function () {
    verifyWatcherDoesNotExist(k);
  });
});

bthread("Watching create verification", function () {
  const e = waitForAnyWatchingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWatching(k, ANY), function () {
    verifyWatchingExists(k);
  });
});

bthread("Watching update verification", function () {
  const e = waitForAnyWatchingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWatching(k, ANY), function () {
    verifyWatchingUpdated(k);
  });
});

bthread("Watching delete verification", function () {
  const e = waitForAnyWatchingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWatching(k, ANY), function () {
    verifyWatchingDoesNotExist(k);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebhook(k, ANY), function () {
    verifyWebhookExists(k);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebhook(k, ANY), function () {
    verifyWebhookUpdated(k);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWebhook(k, ANY), function () {
    verifyWebhookDoesNotExist(k);
  });
});

bthread("Workflow create verification", function () {
  const e = waitForAnyWorkflowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflow(k, ANY), function () {
    verifyWorkflowExists(k);
  });
});

bthread("Workflow update verification", function () {
  const e = waitForAnyWorkflowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflow(k, ANY), function () {
    verifyWorkflowUpdated(k);
  });
});

bthread("Workflow delete verification", function () {
  const e = waitForAnyWorkflowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWorkflow(k, ANY), function () {
    verifyWorkflowDoesNotExist(k);
  });
});

bthread("Workflowscheme create verification", function () {
  const e = waitForAnyWorkflowschemeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflowscheme(k, ANY), function () {
    verifyWorkflowschemeExists(k);
  });
});

bthread("Workflowscheme update verification", function () {
  const e = waitForAnyWorkflowschemeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflowscheme(k, ANY), function () {
    verifyWorkflowschemeUpdated(k);
  });
});

bthread("Workflowscheme delete verification", function () {
  const e = waitForAnyWorkflowschemeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWorkflowscheme(k, ANY), function () {
    verifyWorkflowschemeDoesNotExist(k);
  });
});

bthread("Workflowusage create verification", function () {
  const e = waitForAnyWorkflowusageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflowusage(k, ANY), function () {
    verifyWorkflowusageExists(k);
  });
});

bthread("Workflowusage update verification", function () {
  const e = waitForAnyWorkflowusageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflowusage(k, ANY), function () {
    verifyWorkflowusageUpdated(k);
  });
});

bthread("Workflowusage delete verification", function () {
  const e = waitForAnyWorkflowusageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWorkflowusage(k, ANY), function () {
    verifyWorkflowusageDoesNotExist(k);
  });
});

bthread("Worklog create verification", function () {
  const e = waitForAnyWorklogAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorklog(k, ANY), function () {
    verifyWorklogExists(k);
  });
});

bthread("Worklog update verification", function () {
  const e = waitForAnyWorklogUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorklog(k, ANY), function () {
    verifyWorklogUpdated(k);
  });
});

bthread("Worklog delete verification", function () {
  const e = waitForAnyWorklogDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWorklog(k, ANY), function () {
    verifyWorklogDoesNotExist(k);
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
