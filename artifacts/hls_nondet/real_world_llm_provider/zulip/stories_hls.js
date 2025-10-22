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


bthread("AlertwordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAlertword(x.id);
  const e_add = waitForAlertwordAdded(id);
  block(matchDeleteAlertword(id), function () {
    verifyAlertwordExists(id);
  });
  updateAlertword(x.id);
  updateAlertword(x.id);
  const e_upd = waitForAlertwordUpdated(id);
  block(matchDeleteAlertword(id), function () {
    verifyAlertwordUpdated(id);
  });
  deleteAlertword(x.id);
  const e_del = waitForAlertwordDeleted(id);
  block(matchAddAlertword(id), function () {
    verifyAlertwordDoesNotExist(id);
  });
});

bthread("AndroidgcmregidLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAndroidgcmregid(x.id);
  const e_add = waitForAndroidgcmregidAdded(id);
  block(matchDeleteAndroidgcmregid(id), function () {
    verifyAndroidgcmregidExists(id);
  });
  updateAndroidgcmregid(x.id);
  updateAndroidgcmregid(x.id);
  const e_upd = waitForAndroidgcmregidUpdated(id);
  block(matchDeleteAndroidgcmregid(id), function () {
    verifyAndroidgcmregidUpdated(id);
  });
  deleteAndroidgcmregid(x.id);
  const e_del = waitForAndroidgcmregidDeleted(id);
  block(matchAddAndroidgcmregid(id), function () {
    verifyAndroidgcmregidDoesNotExist(id);
  });
});

bthread("ApnsdevicetokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApnsdevicetoken(x.id);
  const e_add = waitForApnsdevicetokenAdded(id);
  block(matchDeleteApnsdevicetoken(id), function () {
    verifyApnsdevicetokenExists(id);
  });
  updateApnsdevicetoken(x.id);
  updateApnsdevicetoken(x.id);
  const e_upd = waitForApnsdevicetokenUpdated(id);
  block(matchDeleteApnsdevicetoken(id), function () {
    verifyApnsdevicetokenUpdated(id);
  });
  deleteApnsdevicetoken(x.id);
  const e_del = waitForApnsdevicetokenDeleted(id);
  block(matchAddApnsdevicetoken(id), function () {
    verifyApnsdevicetokenDoesNotExist(id);
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

bthread("BigbluebuttonLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBigbluebutton(x.id);
  const e_add = waitForBigbluebuttonAdded(id);
  block(matchDeleteBigbluebutton(id), function () {
    verifyBigbluebuttonExists(id);
  });
  updateBigbluebutton(x.id);
  updateBigbluebutton(x.id);
  const e_upd = waitForBigbluebuttonUpdated(id);
  block(matchDeleteBigbluebutton(id), function () {
    verifyBigbluebuttonUpdated(id);
  });
  deleteBigbluebutton(x.id);
  const e_del = waitForBigbluebuttonDeleted(id);
  block(matchAddBigbluebutton(id), function () {
    verifyBigbluebuttonDoesNotExist(id);
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

bthread("ChannelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChannel(x.id);
  const e_add = waitForChannelAdded(id);
  block(matchDeleteChannel(id), function () {
    verifyChannelExists(id);
  });
  updateChannel(x.id);
  updateChannel(x.id);
  const e_upd = waitForChannelUpdated(id);
  block(matchDeleteChannel(id), function () {
    verifyChannelUpdated(id);
  });
  deleteChannel(x.id);
  const e_del = waitForChannelDeleted(id);
  block(matchAddChannel(id), function () {
    verifyChannelDoesNotExist(id);
  });
});

bthread("ChannelfolderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChannelfolder(x.id);
  const e_add = waitForChannelfolderAdded(id);
  block(matchDeleteChannelfolder(id), function () {
    verifyChannelfolderExists(id);
  });
  updateChannelfolder(x.id);
  updateChannelfolder(x.id);
  const e_upd = waitForChannelfolderUpdated(id);
  block(matchDeleteChannelfolder(id), function () {
    verifyChannelfolderUpdated(id);
  });
  deleteChannelfolder(x.id);
  const e_del = waitForChannelfolderDeleted(id);
  block(matchAddChannelfolder(id), function () {
    verifyChannelfolderDoesNotExist(id);
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

bthread("DeactivateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeactivate(x.id);
  const e_add = waitForDeactivateAdded(id);
  block(matchDeleteDeactivate(id), function () {
    verifyDeactivateExists(id);
  });
  updateDeactivate(x.id);
  updateDeactivate(x.id);
  const e_upd = waitForDeactivateUpdated(id);
  block(matchDeleteDeactivate(id), function () {
    verifyDeactivateUpdated(id);
  });
  deleteDeactivate(x.id);
  const e_del = waitForDeactivateDeleted(id);
  block(matchAddDeactivate(id), function () {
    verifyDeactivateDoesNotExist(id);
  });
});

bthread("DefaultstreamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultstream(x.id);
  const e_add = waitForDefaultstreamAdded(id);
  block(matchDeleteDefaultstream(id), function () {
    verifyDefaultstreamExists(id);
  });
  updateDefaultstream(x.id);
  updateDefaultstream(x.id);
  const e_upd = waitForDefaultstreamUpdated(id);
  block(matchDeleteDefaultstream(id), function () {
    verifyDefaultstreamUpdated(id);
  });
  deleteDefaultstream(x.id);
  const e_del = waitForDefaultstreamDeleted(id);
  block(matchAddDefaultstream(id), function () {
    verifyDefaultstreamDoesNotExist(id);
  });
});

bthread("DeletetopicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeletetopic(x.id);
  const e_add = waitForDeletetopicAdded(id);
  block(matchDeleteDeletetopic(id), function () {
    verifyDeletetopicExists(id);
  });
  updateDeletetopic(x.id);
  updateDeletetopic(x.id);
  const e_upd = waitForDeletetopicUpdated(id);
  block(matchDeleteDeletetopic(id), function () {
    verifyDeletetopicUpdated(id);
  });
  deleteDeletetopic(x.id);
  const e_del = waitForDeletetopicDeleted(id);
  block(matchAddDeletetopic(id), function () {
    verifyDeletetopicDoesNotExist(id);
  });
});

bthread("DevfetchapikeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevfetchapikey(x.id);
  const e_add = waitForDevfetchapikeyAdded(id);
  block(matchDeleteDevfetchapikey(id), function () {
    verifyDevfetchapikeyExists(id);
  });
  updateDevfetchapikey(x.id);
  updateDevfetchapikey(x.id);
  const e_upd = waitForDevfetchapikeyUpdated(id);
  block(matchDeleteDevfetchapikey(id), function () {
    verifyDevfetchapikeyUpdated(id);
  });
  deleteDevfetchapikey(x.id);
  const e_del = waitForDevfetchapikeyDeleted(id);
  block(matchAddDevfetchapikey(id), function () {
    verifyDevfetchapikeyDoesNotExist(id);
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

bthread("E2eeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addE2ee(x.id);
  const e_add = waitForE2eeAdded(id);
  block(matchDeleteE2ee(id), function () {
    verifyE2eeExists(id);
  });
  updateE2ee(x.id);
  updateE2ee(x.id);
  const e_upd = waitForE2eeUpdated(id);
  block(matchDeleteE2ee(id), function () {
    verifyE2eeUpdated(id);
  });
  deleteE2ee(x.id);
  const e_del = waitForE2eeDeleted(id);
  block(matchAddE2ee(id), function () {
    verifyE2eeDoesNotExist(id);
  });
});

bthread("EmailaddresLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmailaddres(x.id);
  const e_add = waitForEmailaddresAdded(id);
  block(matchDeleteEmailaddres(id), function () {
    verifyEmailaddresExists(id);
  });
  updateEmailaddres(x.id);
  updateEmailaddres(x.id);
  const e_upd = waitForEmailaddresUpdated(id);
  block(matchDeleteEmailaddres(id), function () {
    verifyEmailaddresUpdated(id);
  });
  deleteEmailaddres(x.id);
  const e_del = waitForEmailaddresDeleted(id);
  block(matchAddEmailaddres(id), function () {
    verifyEmailaddresDoesNotExist(id);
  });
});

bthread("EmojiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmoji(x.id);
  const e_add = waitForEmojiAdded(id);
  block(matchDeleteEmoji(id), function () {
    verifyEmojiExists(id);
  });
  updateEmoji(x.id);
  updateEmoji(x.id);
  const e_upd = waitForEmojiUpdated(id);
  block(matchDeleteEmoji(id), function () {
    verifyEmojiUpdated(id);
  });
  deleteEmoji(x.id);
  const e_del = waitForEmojiDeleted(id);
  block(matchAddEmoji(id), function () {
    verifyEmojiDoesNotExist(id);
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

bthread("FetchapikeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFetchapikey(x.id);
  const e_add = waitForFetchapikeyAdded(id);
  block(matchDeleteFetchapikey(id), function () {
    verifyFetchapikeyExists(id);
  });
  updateFetchapikey(x.id);
  updateFetchapikey(x.id);
  const e_upd = waitForFetchapikeyUpdated(id);
  block(matchDeleteFetchapikey(id), function () {
    verifyFetchapikeyUpdated(id);
  });
  deleteFetchapikey(x.id);
  const e_del = waitForFetchapikeyDeleted(id);
  block(matchAddFetchapikey(id), function () {
    verifyFetchapikeyDoesNotExist(id);
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

bthread("FlagLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFlag(x.id);
  const e_add = waitForFlagAdded(id);
  block(matchDeleteFlag(id), function () {
    verifyFlagExists(id);
  });
  updateFlag(x.id);
  updateFlag(x.id);
  const e_upd = waitForFlagUpdated(id);
  block(matchDeleteFlag(id), function () {
    verifyFlagUpdated(id);
  });
  deleteFlag(x.id);
  const e_del = waitForFlagDeleted(id);
  block(matchAddFlag(id), function () {
    verifyFlagDoesNotExist(id);
  });
});

bthread("GetstreamidLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGetstreamid(x.id);
  const e_add = waitForGetstreamidAdded(id);
  block(matchDeleteGetstreamid(id), function () {
    verifyGetstreamidExists(id);
  });
  updateGetstreamid(x.id);
  updateGetstreamid(x.id);
  const e_upd = waitForGetstreamidUpdated(id);
  block(matchDeleteGetstreamid(id), function () {
    verifyGetstreamidUpdated(id);
  });
  deleteGetstreamid(x.id);
  const e_del = waitForGetstreamidDeleted(id);
  block(matchAddGetstreamid(id), function () {
    verifyGetstreamidDoesNotExist(id);
  });
});

bthread("HistoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHistory(x.id);
  const e_add = waitForHistoryAdded(id);
  block(matchDeleteHistory(id), function () {
    verifyHistoryExists(id);
  });
  updateHistory(x.id);
  updateHistory(x.id);
  const e_upd = waitForHistoryUpdated(id);
  block(matchDeleteHistory(id), function () {
    verifyHistoryUpdated(id);
  });
  deleteHistory(x.id);
  const e_del = waitForHistoryDeleted(id);
  block(matchAddHistory(id), function () {
    verifyHistoryDoesNotExist(id);
  });
});

bthread("InviteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvite(x.id);
  const e_add = waitForInviteAdded(id);
  block(matchDeleteInvite(id), function () {
    verifyInviteExists(id);
  });
  updateInvite(x.id);
  updateInvite(x.id);
  const e_upd = waitForInviteUpdated(id);
  block(matchDeleteInvite(id), function () {
    verifyInviteUpdated(id);
  });
  deleteInvite(x.id);
  const e_del = waitForInviteDeleted(id);
  block(matchAddInvite(id), function () {
    verifyInviteDoesNotExist(id);
  });
});

bthread("LinkifierLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLinkifier(x.id);
  const e_add = waitForLinkifierAdded(id);
  block(matchDeleteLinkifier(id), function () {
    verifyLinkifierExists(id);
  });
  updateLinkifier(x.id);
  updateLinkifier(x.id);
  const e_upd = waitForLinkifierUpdated(id);
  block(matchDeleteLinkifier(id), function () {
    verifyLinkifierUpdated(id);
  });
  deleteLinkifier(x.id);
  const e_del = waitForLinkifierDeleted(id);
  block(matchAddLinkifier(id), function () {
    verifyLinkifierDoesNotExist(id);
  });
});

bthread("MarkallasreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarkallasread(x.id);
  const e_add = waitForMarkallasreadAdded(id);
  block(matchDeleteMarkallasread(id), function () {
    verifyMarkallasreadExists(id);
  });
  updateMarkallasread(x.id);
  updateMarkallasread(x.id);
  const e_upd = waitForMarkallasreadUpdated(id);
  block(matchDeleteMarkallasread(id), function () {
    verifyMarkallasreadUpdated(id);
  });
  deleteMarkallasread(x.id);
  const e_del = waitForMarkallasreadDeleted(id);
  block(matchAddMarkallasread(id), function () {
    verifyMarkallasreadDoesNotExist(id);
  });
});

bthread("MarkstreamasreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarkstreamasread(x.id);
  const e_add = waitForMarkstreamasreadAdded(id);
  block(matchDeleteMarkstreamasread(id), function () {
    verifyMarkstreamasreadExists(id);
  });
  updateMarkstreamasread(x.id);
  updateMarkstreamasread(x.id);
  const e_upd = waitForMarkstreamasreadUpdated(id);
  block(matchDeleteMarkstreamasread(id), function () {
    verifyMarkstreamasreadUpdated(id);
  });
  deleteMarkstreamasread(x.id);
  const e_del = waitForMarkstreamasreadDeleted(id);
  block(matchAddMarkstreamasread(id), function () {
    verifyMarkstreamasreadDoesNotExist(id);
  });
});

bthread("MarktopicasreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarktopicasread(x.id);
  const e_add = waitForMarktopicasreadAdded(id);
  block(matchDeleteMarktopicasread(id), function () {
    verifyMarktopicasreadExists(id);
  });
  updateMarktopicasread(x.id);
  updateMarktopicasread(x.id);
  const e_upd = waitForMarktopicasreadUpdated(id);
  block(matchDeleteMarktopicasread(id), function () {
    verifyMarktopicasreadUpdated(id);
  });
  deleteMarktopicasread(x.id);
  const e_del = waitForMarktopicasreadDeleted(id);
  block(matchAddMarktopicasread(id), function () {
    verifyMarktopicasreadDoesNotExist(id);
  });
});

bthread("MatchesnarrowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMatchesnarrow(x.id);
  const e_add = waitForMatchesnarrowAdded(id);
  block(matchDeleteMatchesnarrow(id), function () {
    verifyMatchesnarrowExists(id);
  });
  updateMatchesnarrow(x.id);
  updateMatchesnarrow(x.id);
  const e_upd = waitForMatchesnarrowUpdated(id);
  block(matchDeleteMatchesnarrow(id), function () {
    verifyMatchesnarrowUpdated(id);
  });
  deleteMatchesnarrow(x.id);
  const e_del = waitForMatchesnarrowDeleted(id);
  block(matchAddMatchesnarrow(id), function () {
    verifyMatchesnarrowDoesNotExist(id);
  });
});

bthread("MeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMe(x.id);
  const e_add = waitForMeAdded(id);
  block(matchDeleteMe(id), function () {
    verifyMeExists(id);
  });
  updateMe(x.id);
  updateMe(x.id);
  const e_upd = waitForMeUpdated(id);
  block(matchDeleteMe(id), function () {
    verifyMeUpdated(id);
  });
  deleteMe(x.id);
  const e_del = waitForMeDeleted(id);
  block(matchAddMe(id), function () {
    verifyMeDoesNotExist(id);
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

bthread("MobilepushLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMobilepush(x.id);
  const e_add = waitForMobilepushAdded(id);
  block(matchDeleteMobilepush(id), function () {
    verifyMobilepushExists(id);
  });
  updateMobilepush(x.id);
  updateMobilepush(x.id);
  const e_upd = waitForMobilepushUpdated(id);
  block(matchDeleteMobilepush(id), function () {
    verifyMobilepushUpdated(id);
  });
  deleteMobilepush(x.id);
  const e_del = waitForMobilepushDeleted(id);
  block(matchAddMobilepush(id), function () {
    verifyMobilepushDoesNotExist(id);
  });
});

bthread("MultiuseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMultiuse(x.id);
  const e_add = waitForMultiuseAdded(id);
  block(matchDeleteMultiuse(id), function () {
    verifyMultiuseExists(id);
  });
  updateMultiuse(x.id);
  updateMultiuse(x.id);
  const e_upd = waitForMultiuseUpdated(id);
  block(matchDeleteMultiuse(id), function () {
    verifyMultiuseUpdated(id);
  });
  deleteMultiuse(x.id);
  const e_del = waitForMultiuseDeleted(id);
  block(matchAddMultiuse(id), function () {
    verifyMultiuseDoesNotExist(id);
  });
});

bthread("MutedtopicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMutedtopic(x.id);
  const e_add = waitForMutedtopicAdded(id);
  block(matchDeleteMutedtopic(id), function () {
    verifyMutedtopicExists(id);
  });
  updateMutedtopic(x.id);
  updateMutedtopic(x.id);
  const e_upd = waitForMutedtopicUpdated(id);
  block(matchDeleteMutedtopic(id), function () {
    verifyMutedtopicUpdated(id);
  });
  deleteMutedtopic(x.id);
  const e_del = waitForMutedtopicDeleted(id);
  block(matchAddMutedtopic(id), function () {
    verifyMutedtopicDoesNotExist(id);
  });
});

bthread("MuteduserLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMuteduser(x.id);
  const e_add = waitForMuteduserAdded(id);
  block(matchDeleteMuteduser(id), function () {
    verifyMuteduserExists(id);
  });
  updateMuteduser(x.id);
  updateMuteduser(x.id);
  const e_upd = waitForMuteduserUpdated(id);
  block(matchDeleteMuteduser(id), function () {
    verifyMuteduserUpdated(id);
  });
  deleteMuteduser(x.id);
  const e_del = waitForMuteduserDeleted(id);
  block(matchAddMuteduser(id), function () {
    verifyMuteduserDoesNotExist(id);
  });
});

bthread("NarrowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNarrow(x.id);
  const e_add = waitForNarrowAdded(id);
  block(matchDeleteNarrow(id), function () {
    verifyNarrowExists(id);
  });
  updateNarrow(x.id);
  updateNarrow(x.id);
  const e_upd = waitForNarrowUpdated(id);
  block(matchDeleteNarrow(id), function () {
    verifyNarrowUpdated(id);
  });
  deleteNarrow(x.id);
  const e_del = waitForNarrowDeleted(id);
  block(matchAddNarrow(id), function () {
    verifyNarrowDoesNotExist(id);
  });
});

bthread("NavigationviewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNavigationview(x.id);
  const e_add = waitForNavigationviewAdded(id);
  block(matchDeleteNavigationview(id), function () {
    verifyNavigationviewExists(id);
  });
  updateNavigationview(x.id);
  updateNavigationview(x.id);
  const e_upd = waitForNavigationviewUpdated(id);
  block(matchDeleteNavigationview(id), function () {
    verifyNavigationviewUpdated(id);
  });
  deleteNavigationview(x.id);
  const e_del = waitForNavigationviewDeleted(id);
  block(matchAddNavigationview(id), function () {
    verifyNavigationviewDoesNotExist(id);
  });
});

bthread("PlaygroundLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPlayground(x.id);
  const e_add = waitForPlaygroundAdded(id);
  block(matchDeletePlayground(id), function () {
    verifyPlaygroundExists(id);
  });
  updatePlayground(x.id);
  updatePlayground(x.id);
  const e_upd = waitForPlaygroundUpdated(id);
  block(matchDeletePlayground(id), function () {
    verifyPlaygroundUpdated(id);
  });
  deletePlayground(x.id);
  const e_del = waitForPlaygroundDeleted(id);
  block(matchAddPlayground(id), function () {
    verifyPlaygroundDoesNotExist(id);
  });
});

bthread("PresenceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPresence(x.id);
  const e_add = waitForPresenceAdded(id);
  block(matchDeletePresence(id), function () {
    verifyPresenceExists(id);
  });
  updatePresence(x.id);
  updatePresence(x.id);
  const e_upd = waitForPresenceUpdated(id);
  block(matchDeletePresence(id), function () {
    verifyPresenceUpdated(id);
  });
  deletePresence(x.id);
  const e_del = waitForPresenceDeleted(id);
  block(matchAddPresence(id), function () {
    verifyPresenceDoesNotExist(id);
  });
});

bthread("ProfilefieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProfilefield(x.id);
  const e_add = waitForProfilefieldAdded(id);
  block(matchDeleteProfilefield(id), function () {
    verifyProfilefieldExists(id);
  });
  updateProfilefield(x.id);
  updateProfilefield(x.id);
  const e_upd = waitForProfilefieldUpdated(id);
  block(matchDeleteProfilefield(id), function () {
    verifyProfilefieldUpdated(id);
  });
  deleteProfilefield(x.id);
  const e_del = waitForProfilefieldDeleted(id);
  block(matchAddProfilefield(id), function () {
    verifyProfilefieldDoesNotExist(id);
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

bthread("PushLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPush(x.id);
  const e_add = waitForPushAdded(id);
  block(matchDeletePush(id), function () {
    verifyPushExists(id);
  });
  updatePush(x.id);
  updatePush(x.id);
  const e_upd = waitForPushUpdated(id);
  block(matchDeletePush(id), function () {
    verifyPushUpdated(id);
  });
  deletePush(x.id);
  const e_del = waitForPushDeleted(id);
  block(matchAddPush(id), function () {
    verifyPushDoesNotExist(id);
  });
});

bthread("ReactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReaction(x.id);
  const e_add = waitForReactionAdded(id);
  block(matchDeleteReaction(id), function () {
    verifyReactionExists(id);
  });
  updateReaction(x.id);
  updateReaction(x.id);
  const e_upd = waitForReactionUpdated(id);
  block(matchDeleteReaction(id), function () {
    verifyReactionUpdated(id);
  });
  deleteReaction(x.id);
  const e_del = waitForReactionDeleted(id);
  block(matchAddReaction(id), function () {
    verifyReactionDoesNotExist(id);
  });
});

bthread("ReactivateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReactivate(x.id);
  const e_add = waitForReactivateAdded(id);
  block(matchDeleteReactivate(id), function () {
    verifyReactivateExists(id);
  });
  updateReactivate(x.id);
  updateReactivate(x.id);
  const e_upd = waitForReactivateUpdated(id);
  block(matchDeleteReactivate(id), function () {
    verifyReactivateUpdated(id);
  });
  deleteReactivate(x.id);
  const e_del = waitForReactivateDeleted(id);
  block(matchAddReactivate(id), function () {
    verifyReactivateDoesNotExist(id);
  });
});

bthread("ReadreceiptLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReadreceipt(x.id);
  const e_add = waitForReadreceiptAdded(id);
  block(matchDeleteReadreceipt(id), function () {
    verifyReadreceiptExists(id);
  });
  updateReadreceipt(x.id);
  updateReadreceipt(x.id);
  const e_upd = waitForReadreceiptUpdated(id);
  block(matchDeleteReadreceipt(id), function () {
    verifyReadreceiptUpdated(id);
  });
  deleteReadreceipt(x.id);
  const e_del = waitForReadreceiptDeleted(id);
  block(matchAddReadreceipt(id), function () {
    verifyReadreceiptDoesNotExist(id);
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

bthread("RealtimeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealtime(x.id);
  const e_add = waitForRealtimeAdded(id);
  block(matchDeleteRealtime(id), function () {
    verifyRealtimeExists(id);
  });
  updateRealtime(x.id);
  updateRealtime(x.id);
  const e_upd = waitForRealtimeUpdated(id);
  block(matchDeleteRealtime(id), function () {
    verifyRealtimeUpdated(id);
  });
  deleteRealtime(x.id);
  const e_del = waitForRealtimeDeleted(id);
  block(matchAddRealtime(id), function () {
    verifyRealtimeDoesNotExist(id);
  });
});

bthread("RegisterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRegister(x.id);
  const e_add = waitForRegisterAdded(id);
  block(matchDeleteRegister(id), function () {
    verifyRegisterExists(id);
  });
  updateRegister(x.id);
  updateRegister(x.id);
  const e_upd = waitForRegisterUpdated(id);
  block(matchDeleteRegister(id), function () {
    verifyRegisterUpdated(id);
  });
  deleteRegister(x.id);
  const e_del = waitForRegisterDeleted(id);
  block(matchAddRegister(id), function () {
    verifyRegisterDoesNotExist(id);
  });
});

bthread("ReminderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReminder(x.id);
  const e_add = waitForReminderAdded(id);
  block(matchDeleteReminder(id), function () {
    verifyReminderExists(id);
  });
  updateReminder(x.id);
  updateReminder(x.id);
  const e_upd = waitForReminderUpdated(id);
  block(matchDeleteReminder(id), function () {
    verifyReminderUpdated(id);
  });
  deleteReminder(x.id);
  const e_del = waitForReminderDeleted(id);
  block(matchAddReminder(id), function () {
    verifyReminderDoesNotExist(id);
  });
});

bthread("RemoteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemote(x.id);
  const e_add = waitForRemoteAdded(id);
  block(matchDeleteRemote(id), function () {
    verifyRemoteExists(id);
  });
  updateRemote(x.id);
  updateRemote(x.id);
  const e_upd = waitForRemoteUpdated(id);
  block(matchDeleteRemote(id), function () {
    verifyRemoteUpdated(id);
  });
  deleteRemote(x.id);
  const e_del = waitForRemoteDeleted(id);
  block(matchAddRemote(id), function () {
    verifyRemoteDoesNotExist(id);
  });
});

bthread("RenderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRender(x.id);
  const e_add = waitForRenderAdded(id);
  block(matchDeleteRender(id), function () {
    verifyRenderExists(id);
  });
  updateRender(x.id);
  updateRender(x.id);
  const e_upd = waitForRenderUpdated(id);
  block(matchDeleteRender(id), function () {
    verifyRenderUpdated(id);
  });
  deleteRender(x.id);
  const e_del = waitForRenderDeleted(id);
  block(matchAddRender(id), function () {
    verifyRenderDoesNotExist(id);
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

bthread("ResendLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResend(x.id);
  const e_add = waitForResendAdded(id);
  block(matchDeleteResend(id), function () {
    verifyResendExists(id);
  });
  updateResend(x.id);
  updateResend(x.id);
  const e_upd = waitForResendUpdated(id);
  block(matchDeleteResend(id), function () {
    verifyResendUpdated(id);
  });
  deleteResend(x.id);
  const e_del = waitForResendDeleted(id);
  block(matchAddResend(id), function () {
    verifyResendDoesNotExist(id);
  });
});

bthread("ResterrorhandlingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addResterrorhandling(x.id);
  const e_add = waitForResterrorhandlingAdded(id);
  block(matchDeleteResterrorhandling(id), function () {
    verifyResterrorhandlingExists(id);
  });
  updateResterrorhandling(x.id);
  updateResterrorhandling(x.id);
  const e_upd = waitForResterrorhandlingUpdated(id);
  block(matchDeleteResterrorhandling(id), function () {
    verifyResterrorhandlingUpdated(id);
  });
  deleteResterrorhandling(x.id);
  const e_del = waitForResterrorhandlingDeleted(id);
  block(matchAddResterrorhandling(id), function () {
    verifyResterrorhandlingDoesNotExist(id);
  });
});

bthread("SavedsnippetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSavedsnippet(x.id);
  const e_add = waitForSavedsnippetAdded(id);
  block(matchDeleteSavedsnippet(id), function () {
    verifySavedsnippetExists(id);
  });
  updateSavedsnippet(x.id);
  updateSavedsnippet(x.id);
  const e_upd = waitForSavedsnippetUpdated(id);
  block(matchDeleteSavedsnippet(id), function () {
    verifySavedsnippetUpdated(id);
  });
  deleteSavedsnippet(x.id);
  const e_del = waitForSavedsnippetDeleted(id);
  block(matchAddSavedsnippet(id), function () {
    verifySavedsnippetDoesNotExist(id);
  });
});

bthread("ScheduledmessageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScheduledmessage(x.id);
  const e_add = waitForScheduledmessageAdded(id);
  block(matchDeleteScheduledmessage(id), function () {
    verifyScheduledmessageExists(id);
  });
  updateScheduledmessage(x.id);
  updateScheduledmessage(x.id);
  const e_upd = waitForScheduledmessageUpdated(id);
  block(matchDeleteScheduledmessage(id), function () {
    verifyScheduledmessageUpdated(id);
  });
  deleteScheduledmessage(x.id);
  const e_del = waitForScheduledmessageDeleted(id);
  block(matchAddScheduledmessage(id), function () {
    verifyScheduledmessageDoesNotExist(id);
  });
});

bthread("ServersettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addServersetting(x.id);
  const e_add = waitForServersettingAdded(id);
  block(matchDeleteServersetting(id), function () {
    verifyServersettingExists(id);
  });
  updateServersetting(x.id);
  updateServersetting(x.id);
  const e_upd = waitForServersettingUpdated(id);
  block(matchDeleteServersetting(id), function () {
    verifyServersettingUpdated(id);
  });
  deleteServersetting(x.id);
  const e_del = waitForServersettingDeleted(id);
  block(matchAddServersetting(id), function () {
    verifyServersettingDoesNotExist(id);
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

bthread("SubgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubgroup(x.id);
  const e_add = waitForSubgroupAdded(id);
  block(matchDeleteSubgroup(id), function () {
    verifySubgroupExists(id);
  });
  updateSubgroup(x.id);
  updateSubgroup(x.id);
  const e_upd = waitForSubgroupUpdated(id);
  block(matchDeleteSubgroup(id), function () {
    verifySubgroupUpdated(id);
  });
  deleteSubgroup(x.id);
  const e_del = waitForSubgroupDeleted(id);
  block(matchAddSubgroup(id), function () {
    verifySubgroupDoesNotExist(id);
  });
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubscription(x.id);
  const e_add = waitForSubscriptionAdded(id);
  block(matchDeleteSubscription(id), function () {
    verifySubscriptionExists(id);
  });
  updateSubscription(x.id);
  updateSubscription(x.id);
  const e_upd = waitForSubscriptionUpdated(id);
  block(matchDeleteSubscription(id), function () {
    verifySubscriptionUpdated(id);
  });
  deleteSubscription(x.id);
  const e_del = waitForSubscriptionDeleted(id);
  block(matchAddSubscription(id), function () {
    verifySubscriptionDoesNotExist(id);
  });
});

bthread("TestnotificationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTestnotification(x.id);
  const e_add = waitForTestnotificationAdded(id);
  block(matchDeleteTestnotification(id), function () {
    verifyTestnotificationExists(id);
  });
  updateTestnotification(x.id);
  updateTestnotification(x.id);
  const e_upd = waitForTestnotificationUpdated(id);
  block(matchDeleteTestnotification(id), function () {
    verifyTestnotificationUpdated(id);
  });
  deleteTestnotification(x.id);
  const e_del = waitForTestnotificationDeleted(id);
  block(matchAddTestnotification(id), function () {
    verifyTestnotificationDoesNotExist(id);
  });
});

bthread("TestwelcomebotcustommessageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTestwelcomebotcustommessage(x.id);
  const e_add = waitForTestwelcomebotcustommessageAdded(id);
  block(matchDeleteTestwelcomebotcustommessage(id), function () {
    verifyTestwelcomebotcustommessageExists(id);
  });
  updateTestwelcomebotcustommessage(x.id);
  updateTestwelcomebotcustommessage(x.id);
  const e_upd = waitForTestwelcomebotcustommessageUpdated(id);
  block(matchDeleteTestwelcomebotcustommessage(id), function () {
    verifyTestwelcomebotcustommessageUpdated(id);
  });
  deleteTestwelcomebotcustommessage(x.id);
  const e_del = waitForTestwelcomebotcustommessageDeleted(id);
  block(matchAddTestwelcomebotcustommessage(id), function () {
    verifyTestwelcomebotcustommessageDoesNotExist(id);
  });
});

bthread("TopicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTopic(x.id);
  const e_add = waitForTopicAdded(id);
  block(matchDeleteTopic(id), function () {
    verifyTopicExists(id);
  });
  updateTopic(x.id);
  updateTopic(x.id);
  const e_upd = waitForTopicUpdated(id);
  block(matchDeleteTopic(id), function () {
    verifyTopicUpdated(id);
  });
  deleteTopic(x.id);
  const e_del = waitForTopicDeleted(id);
  block(matchAddTopic(id), function () {
    verifyTopicDoesNotExist(id);
  });
});

bthread("TypingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTyping(x.id);
  const e_add = waitForTypingAdded(id);
  block(matchDeleteTyping(id), function () {
    verifyTypingExists(id);
  });
  updateTyping(x.id);
  updateTyping(x.id);
  const e_upd = waitForTypingUpdated(id);
  block(matchDeleteTyping(id), function () {
    verifyTypingUpdated(id);
  });
  deleteTyping(x.id);
  const e_del = waitForTypingDeleted(id);
  block(matchAddTyping(id), function () {
    verifyTypingDoesNotExist(id);
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

bthread("UsergroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsergroup(x.id);
  const e_add = waitForUsergroupAdded(id);
  block(matchDeleteUsergroup(id), function () {
    verifyUsergroupExists(id);
  });
  updateUsergroup(x.id);
  updateUsergroup(x.id);
  const e_upd = waitForUsergroupUpdated(id);
  block(matchDeleteUsergroup(id), function () {
    verifyUsergroupUpdated(id);
  });
  deleteUsergroup(x.id);
  const e_del = waitForUsergroupDeleted(id);
  block(matchAddUsergroup(id), function () {
    verifyUsergroupDoesNotExist(id);
  });
});

bthread("UsersettingsdefaultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsersettingsdefault(x.id);
  const e_add = waitForUsersettingsdefaultAdded(id);
  block(matchDeleteUsersettingsdefault(id), function () {
    verifyUsersettingsdefaultExists(id);
  });
  updateUsersettingsdefault(x.id);
  updateUsersettingsdefault(x.id);
  const e_upd = waitForUsersettingsdefaultUpdated(id);
  block(matchDeleteUsersettingsdefault(id), function () {
    verifyUsersettingsdefaultUpdated(id);
  });
  deleteUsersettingsdefault(x.id);
  const e_del = waitForUsersettingsdefaultDeleted(id);
  block(matchAddUsersettingsdefault(id), function () {
    verifyUsersettingsdefaultDoesNotExist(id);
  });
});

bthread("UsertopicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsertopic(x.id);
  const e_add = waitForUsertopicAdded(id);
  block(matchDeleteUsertopic(id), function () {
    verifyUsertopicExists(id);
  });
  updateUsertopic(x.id);
  updateUsertopic(x.id);
  const e_upd = waitForUsertopicUpdated(id);
  block(matchDeleteUsertopic(id), function () {
    verifyUsertopicUpdated(id);
  });
  deleteUsertopic(x.id);
  const e_del = waitForUsertopicDeleted(id);
  block(matchAddUsertopic(id), function () {
    verifyUsertopicDoesNotExist(id);
  });
});

bthread("UseruploadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserupload(x.id);
  const e_add = waitForUseruploadAdded(id);
  block(matchDeleteUserupload(id), function () {
    verifyUseruploadExists(id);
  });
  updateUserupload(x.id);
  updateUserupload(x.id);
  const e_upd = waitForUseruploadUpdated(id);
  block(matchDeleteUserupload(id), function () {
    verifyUseruploadUpdated(id);
  });
  deleteUserupload(x.id);
  const e_del = waitForUseruploadDeleted(id);
  block(matchAddUserupload(id), function () {
    verifyUseruploadDoesNotExist(id);
  });
});

bthread("ZulipoutgoingwebhookLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addZulipoutgoingwebhook(x.id);
  const e_add = waitForZulipoutgoingwebhookAdded(id);
  block(matchDeleteZulipoutgoingwebhook(id), function () {
    verifyZulipoutgoingwebhookExists(id);
  });
  updateZulipoutgoingwebhook(x.id);
  updateZulipoutgoingwebhook(x.id);
  const e_upd = waitForZulipoutgoingwebhookUpdated(id);
  block(matchDeleteZulipoutgoingwebhook(id), function () {
    verifyZulipoutgoingwebhookUpdated(id);
  });
  deleteZulipoutgoingwebhook(x.id);
  const e_del = waitForZulipoutgoingwebhookDeleted(id);
  block(matchAddZulipoutgoingwebhook(id), function () {
    verifyZulipoutgoingwebhookDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Alertword nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAlertword(x.id);
  for (var i=0; i<steps; i++) {
    updateAlertword(x.id);
  }
  if (pick([true,false])) { deleteAlertword(x.id); }
  verifyAlertwordExists(x.id);
  verifyAlertwordUpdated(x.id);
});

bthread("Alertword nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAlertword(a.id);
  block(matchAddAlertword(a.id, ANY), function () {});
  addAlertword(b.id);
});

bthread("Androidgcmregid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAndroidgcmregid(x.id);
  for (var i=0; i<steps; i++) {
    updateAndroidgcmregid(x.id);
  }
  if (pick([true,false])) { deleteAndroidgcmregid(x.id); }
  verifyAndroidgcmregidExists(x.id);
  verifyAndroidgcmregidUpdated(x.id);
});

bthread("Androidgcmregid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAndroidgcmregid(a.id);
  block(matchAddAndroidgcmregid(a.id, ANY), function () {});
  addAndroidgcmregid(b.id);
});

bthread("Apnsdevicetoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApnsdevicetoken(x.id);
  for (var i=0; i<steps; i++) {
    updateApnsdevicetoken(x.id);
  }
  if (pick([true,false])) { deleteApnsdevicetoken(x.id); }
  verifyApnsdevicetokenExists(x.id);
  verifyApnsdevicetokenUpdated(x.id);
});

bthread("Apnsdevicetoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApnsdevicetoken(a.id);
  block(matchAddApnsdevicetoken(a.id, ANY), function () {});
  addApnsdevicetoken(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAttachment(a.id);
  block(matchAddAttachment(a.id, ANY), function () {});
  addAttachment(b.id);
});

bthread("Bigbluebutton nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBigbluebutton(x.id);
  for (var i=0; i<steps; i++) {
    updateBigbluebutton(x.id);
  }
  if (pick([true,false])) { deleteBigbluebutton(x.id); }
  verifyBigbluebuttonExists(x.id);
  verifyBigbluebuttonUpdated(x.id);
});

bthread("Bigbluebutton nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBigbluebutton(a.id);
  block(matchAddBigbluebutton(a.id, ANY), function () {});
  addBigbluebutton(b.id);
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

bthread("Channel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addChannel(x.id);
  for (var i=0; i<steps; i++) {
    updateChannel(x.id);
  }
  if (pick([true,false])) { deleteChannel(x.id); }
  verifyChannelExists(x.id);
  verifyChannelUpdated(x.id);
});

bthread("Channel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChannel(a.id);
  block(matchAddChannel(a.id, ANY), function () {});
  addChannel(b.id);
});

bthread("Channelfolder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addChannelfolder(x.id);
  for (var i=0; i<steps; i++) {
    updateChannelfolder(x.id);
  }
  if (pick([true,false])) { deleteChannelfolder(x.id); }
  verifyChannelfolderExists(x.id);
  verifyChannelfolderUpdated(x.id);
});

bthread("Channelfolder nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChannelfolder(a.id);
  block(matchAddChannelfolder(a.id, ANY), function () {});
  addChannelfolder(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCreate(a.id);
  block(matchAddCreate(a.id, ANY), function () {});
  addCreate(b.id);
});

bthread("Deactivate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeactivate(x.id);
  for (var i=0; i<steps; i++) {
    updateDeactivate(x.id);
  }
  if (pick([true,false])) { deleteDeactivate(x.id); }
  verifyDeactivateExists(x.id);
  verifyDeactivateUpdated(x.id);
});

bthread("Deactivate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDeactivate(a.id);
  block(matchAddDeactivate(a.id, ANY), function () {});
  addDeactivate(b.id);
});

bthread("Defaultstream nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDefaultstream(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultstream(x.id);
  }
  if (pick([true,false])) { deleteDefaultstream(x.id); }
  verifyDefaultstreamExists(x.id);
  verifyDefaultstreamUpdated(x.id);
});

bthread("Defaultstream nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDefaultstream(a.id);
  block(matchAddDefaultstream(a.id, ANY), function () {});
  addDefaultstream(b.id);
});

bthread("Deletetopic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeletetopic(x.id);
  for (var i=0; i<steps; i++) {
    updateDeletetopic(x.id);
  }
  if (pick([true,false])) { deleteDeletetopic(x.id); }
  verifyDeletetopicExists(x.id);
  verifyDeletetopicUpdated(x.id);
});

bthread("Deletetopic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDeletetopic(a.id);
  block(matchAddDeletetopic(a.id, ANY), function () {});
  addDeletetopic(b.id);
});

bthread("Devfetchapikey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDevfetchapikey(x.id);
  for (var i=0; i<steps; i++) {
    updateDevfetchapikey(x.id);
  }
  if (pick([true,false])) { deleteDevfetchapikey(x.id); }
  verifyDevfetchapikeyExists(x.id);
  verifyDevfetchapikeyUpdated(x.id);
});

bthread("Devfetchapikey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDevfetchapikey(a.id);
  block(matchAddDevfetchapikey(a.id, ANY), function () {});
  addDevfetchapikey(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDraft(a.id);
  block(matchAddDraft(a.id, ANY), function () {});
  addDraft(b.id);
});

bthread("E2ee nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addE2ee(x.id);
  for (var i=0; i<steps; i++) {
    updateE2ee(x.id);
  }
  if (pick([true,false])) { deleteE2ee(x.id); }
  verifyE2eeExists(x.id);
  verifyE2eeUpdated(x.id);
});

bthread("E2ee nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addE2ee(a.id);
  block(matchAddE2ee(a.id, ANY), function () {});
  addE2ee(b.id);
});

bthread("Emailaddres nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEmailaddres(x.id);
  for (var i=0; i<steps; i++) {
    updateEmailaddres(x.id);
  }
  if (pick([true,false])) { deleteEmailaddres(x.id); }
  verifyEmailaddresExists(x.id);
  verifyEmailaddresUpdated(x.id);
});

bthread("Emailaddres nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmailaddres(a.id);
  block(matchAddEmailaddres(a.id, ANY), function () {});
  addEmailaddres(b.id);
});

bthread("Emoji nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEmoji(x.id);
  for (var i=0; i<steps; i++) {
    updateEmoji(x.id);
  }
  if (pick([true,false])) { deleteEmoji(x.id); }
  verifyEmojiExists(x.id);
  verifyEmojiUpdated(x.id);
});

bthread("Emoji nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmoji(a.id);
  block(matchAddEmoji(a.id, ANY), function () {});
  addEmoji(b.id);
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

bthread("Fetchapikey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFetchapikey(x.id);
  for (var i=0; i<steps; i++) {
    updateFetchapikey(x.id);
  }
  if (pick([true,false])) { deleteFetchapikey(x.id); }
  verifyFetchapikeyExists(x.id);
  verifyFetchapikeyUpdated(x.id);
});

bthread("Fetchapikey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFetchapikey(a.id);
  block(matchAddFetchapikey(a.id, ANY), function () {});
  addFetchapikey(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFilter(a.id);
  block(matchAddFilter(a.id, ANY), function () {});
  addFilter(b.id);
});

bthread("Flag nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFlag(x.id);
  for (var i=0; i<steps; i++) {
    updateFlag(x.id);
  }
  if (pick([true,false])) { deleteFlag(x.id); }
  verifyFlagExists(x.id);
  verifyFlagUpdated(x.id);
});

bthread("Flag nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFlag(a.id);
  block(matchAddFlag(a.id, ANY), function () {});
  addFlag(b.id);
});

bthread("Getstreamid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGetstreamid(x.id);
  for (var i=0; i<steps; i++) {
    updateGetstreamid(x.id);
  }
  if (pick([true,false])) { deleteGetstreamid(x.id); }
  verifyGetstreamidExists(x.id);
  verifyGetstreamidUpdated(x.id);
});

bthread("Getstreamid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGetstreamid(a.id);
  block(matchAddGetstreamid(a.id, ANY), function () {});
  addGetstreamid(b.id);
});

bthread("History nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHistory(x.id);
  for (var i=0; i<steps; i++) {
    updateHistory(x.id);
  }
  if (pick([true,false])) { deleteHistory(x.id); }
  verifyHistoryExists(x.id);
  verifyHistoryUpdated(x.id);
});

bthread("History nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHistory(a.id);
  block(matchAddHistory(a.id, ANY), function () {});
  addHistory(b.id);
});

bthread("Invite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInvite(x.id);
  for (var i=0; i<steps; i++) {
    updateInvite(x.id);
  }
  if (pick([true,false])) { deleteInvite(x.id); }
  verifyInviteExists(x.id);
  verifyInviteUpdated(x.id);
});

bthread("Invite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvite(a.id);
  block(matchAddInvite(a.id, ANY), function () {});
  addInvite(b.id);
});

bthread("Linkifier nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLinkifier(x.id);
  for (var i=0; i<steps; i++) {
    updateLinkifier(x.id);
  }
  if (pick([true,false])) { deleteLinkifier(x.id); }
  verifyLinkifierExists(x.id);
  verifyLinkifierUpdated(x.id);
});

bthread("Linkifier nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLinkifier(a.id);
  block(matchAddLinkifier(a.id, ANY), function () {});
  addLinkifier(b.id);
});

bthread("Markallasread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarkallasread(x.id);
  for (var i=0; i<steps; i++) {
    updateMarkallasread(x.id);
  }
  if (pick([true,false])) { deleteMarkallasread(x.id); }
  verifyMarkallasreadExists(x.id);
  verifyMarkallasreadUpdated(x.id);
});

bthread("Markallasread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMarkallasread(a.id);
  block(matchAddMarkallasread(a.id, ANY), function () {});
  addMarkallasread(b.id);
});

bthread("Markstreamasread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarkstreamasread(x.id);
  for (var i=0; i<steps; i++) {
    updateMarkstreamasread(x.id);
  }
  if (pick([true,false])) { deleteMarkstreamasread(x.id); }
  verifyMarkstreamasreadExists(x.id);
  verifyMarkstreamasreadUpdated(x.id);
});

bthread("Markstreamasread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMarkstreamasread(a.id);
  block(matchAddMarkstreamasread(a.id, ANY), function () {});
  addMarkstreamasread(b.id);
});

bthread("Marktopicasread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarktopicasread(x.id);
  for (var i=0; i<steps; i++) {
    updateMarktopicasread(x.id);
  }
  if (pick([true,false])) { deleteMarktopicasread(x.id); }
  verifyMarktopicasreadExists(x.id);
  verifyMarktopicasreadUpdated(x.id);
});

bthread("Marktopicasread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMarktopicasread(a.id);
  block(matchAddMarktopicasread(a.id, ANY), function () {});
  addMarktopicasread(b.id);
});

bthread("Matchesnarrow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMatchesnarrow(x.id);
  for (var i=0; i<steps; i++) {
    updateMatchesnarrow(x.id);
  }
  if (pick([true,false])) { deleteMatchesnarrow(x.id); }
  verifyMatchesnarrowExists(x.id);
  verifyMatchesnarrowUpdated(x.id);
});

bthread("Matchesnarrow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMatchesnarrow(a.id);
  block(matchAddMatchesnarrow(a.id, ANY), function () {});
  addMatchesnarrow(b.id);
});

bthread("Me nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMe(x.id);
  for (var i=0; i<steps; i++) {
    updateMe(x.id);
  }
  if (pick([true,false])) { deleteMe(x.id); }
  verifyMeExists(x.id);
  verifyMeUpdated(x.id);
});

bthread("Me nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMe(a.id);
  block(matchAddMe(a.id, ANY), function () {});
  addMe(b.id);
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

bthread("Mobilepush nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMobilepush(x.id);
  for (var i=0; i<steps; i++) {
    updateMobilepush(x.id);
  }
  if (pick([true,false])) { deleteMobilepush(x.id); }
  verifyMobilepushExists(x.id);
  verifyMobilepushUpdated(x.id);
});

bthread("Mobilepush nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMobilepush(a.id);
  block(matchAddMobilepush(a.id, ANY), function () {});
  addMobilepush(b.id);
});

bthread("Multiuse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMultiuse(x.id);
  for (var i=0; i<steps; i++) {
    updateMultiuse(x.id);
  }
  if (pick([true,false])) { deleteMultiuse(x.id); }
  verifyMultiuseExists(x.id);
  verifyMultiuseUpdated(x.id);
});

bthread("Multiuse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMultiuse(a.id);
  block(matchAddMultiuse(a.id, ANY), function () {});
  addMultiuse(b.id);
});

bthread("Mutedtopic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMutedtopic(x.id);
  for (var i=0; i<steps; i++) {
    updateMutedtopic(x.id);
  }
  if (pick([true,false])) { deleteMutedtopic(x.id); }
  verifyMutedtopicExists(x.id);
  verifyMutedtopicUpdated(x.id);
});

bthread("Mutedtopic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMutedtopic(a.id);
  block(matchAddMutedtopic(a.id, ANY), function () {});
  addMutedtopic(b.id);
});

bthread("Muteduser nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMuteduser(x.id);
  for (var i=0; i<steps; i++) {
    updateMuteduser(x.id);
  }
  if (pick([true,false])) { deleteMuteduser(x.id); }
  verifyMuteduserExists(x.id);
  verifyMuteduserUpdated(x.id);
});

bthread("Muteduser nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMuteduser(a.id);
  block(matchAddMuteduser(a.id, ANY), function () {});
  addMuteduser(b.id);
});

bthread("Narrow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNarrow(x.id);
  for (var i=0; i<steps; i++) {
    updateNarrow(x.id);
  }
  if (pick([true,false])) { deleteNarrow(x.id); }
  verifyNarrowExists(x.id);
  verifyNarrowUpdated(x.id);
});

bthread("Narrow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNarrow(a.id);
  block(matchAddNarrow(a.id, ANY), function () {});
  addNarrow(b.id);
});

bthread("Navigationview nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNavigationview(x.id);
  for (var i=0; i<steps; i++) {
    updateNavigationview(x.id);
  }
  if (pick([true,false])) { deleteNavigationview(x.id); }
  verifyNavigationviewExists(x.id);
  verifyNavigationviewUpdated(x.id);
});

bthread("Navigationview nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNavigationview(a.id);
  block(matchAddNavigationview(a.id, ANY), function () {});
  addNavigationview(b.id);
});

bthread("Playground nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPlayground(x.id);
  for (var i=0; i<steps; i++) {
    updatePlayground(x.id);
  }
  if (pick([true,false])) { deletePlayground(x.id); }
  verifyPlaygroundExists(x.id);
  verifyPlaygroundUpdated(x.id);
});

bthread("Playground nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPlayground(a.id);
  block(matchAddPlayground(a.id, ANY), function () {});
  addPlayground(b.id);
});

bthread("Presence nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPresence(x.id);
  for (var i=0; i<steps; i++) {
    updatePresence(x.id);
  }
  if (pick([true,false])) { deletePresence(x.id); }
  verifyPresenceExists(x.id);
  verifyPresenceUpdated(x.id);
});

bthread("Presence nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPresence(a.id);
  block(matchAddPresence(a.id, ANY), function () {});
  addPresence(b.id);
});

bthread("Profilefield nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addProfilefield(x.id);
  for (var i=0; i<steps; i++) {
    updateProfilefield(x.id);
  }
  if (pick([true,false])) { deleteProfilefield(x.id); }
  verifyProfilefieldExists(x.id);
  verifyProfilefieldUpdated(x.id);
});

bthread("Profilefield nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProfilefield(a.id);
  block(matchAddProfilefield(a.id, ANY), function () {});
  addProfilefield(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProperty(a.id);
  block(matchAddProperty(a.id, ANY), function () {});
  addProperty(b.id);
});

bthread("Push nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPush(x.id);
  for (var i=0; i<steps; i++) {
    updatePush(x.id);
  }
  if (pick([true,false])) { deletePush(x.id); }
  verifyPushExists(x.id);
  verifyPushUpdated(x.id);
});

bthread("Push nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPush(a.id);
  block(matchAddPush(a.id, ANY), function () {});
  addPush(b.id);
});

bthread("Reaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReaction(x.id);
  for (var i=0; i<steps; i++) {
    updateReaction(x.id);
  }
  if (pick([true,false])) { deleteReaction(x.id); }
  verifyReactionExists(x.id);
  verifyReactionUpdated(x.id);
});

bthread("Reaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReaction(a.id);
  block(matchAddReaction(a.id, ANY), function () {});
  addReaction(b.id);
});

bthread("Reactivate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReactivate(x.id);
  for (var i=0; i<steps; i++) {
    updateReactivate(x.id);
  }
  if (pick([true,false])) { deleteReactivate(x.id); }
  verifyReactivateExists(x.id);
  verifyReactivateUpdated(x.id);
});

bthread("Reactivate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReactivate(a.id);
  block(matchAddReactivate(a.id, ANY), function () {});
  addReactivate(b.id);
});

bthread("Readreceipt nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReadreceipt(x.id);
  for (var i=0; i<steps; i++) {
    updateReadreceipt(x.id);
  }
  if (pick([true,false])) { deleteReadreceipt(x.id); }
  verifyReadreceiptExists(x.id);
  verifyReadreceiptUpdated(x.id);
});

bthread("Readreceipt nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReadreceipt(a.id);
  block(matchAddReadreceipt(a.id, ANY), function () {});
  addReadreceipt(b.id);
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

bthread("Realtime nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRealtime(x.id);
  for (var i=0; i<steps; i++) {
    updateRealtime(x.id);
  }
  if (pick([true,false])) { deleteRealtime(x.id); }
  verifyRealtimeExists(x.id);
  verifyRealtimeUpdated(x.id);
});

bthread("Realtime nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealtime(a.id);
  block(matchAddRealtime(a.id, ANY), function () {});
  addRealtime(b.id);
});

bthread("Register nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRegister(x.id);
  for (var i=0; i<steps; i++) {
    updateRegister(x.id);
  }
  if (pick([true,false])) { deleteRegister(x.id); }
  verifyRegisterExists(x.id);
  verifyRegisterUpdated(x.id);
});

bthread("Register nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRegister(a.id);
  block(matchAddRegister(a.id, ANY), function () {});
  addRegister(b.id);
});

bthread("Reminder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReminder(x.id);
  for (var i=0; i<steps; i++) {
    updateReminder(x.id);
  }
  if (pick([true,false])) { deleteReminder(x.id); }
  verifyReminderExists(x.id);
  verifyReminderUpdated(x.id);
});

bthread("Reminder nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReminder(a.id);
  block(matchAddReminder(a.id, ANY), function () {});
  addReminder(b.id);
});

bthread("Remote nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRemote(x.id);
  for (var i=0; i<steps; i++) {
    updateRemote(x.id);
  }
  if (pick([true,false])) { deleteRemote(x.id); }
  verifyRemoteExists(x.id);
  verifyRemoteUpdated(x.id);
});

bthread("Remote nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRemote(a.id);
  block(matchAddRemote(a.id, ANY), function () {});
  addRemote(b.id);
});

bthread("Render nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRender(x.id);
  for (var i=0; i<steps; i++) {
    updateRender(x.id);
  }
  if (pick([true,false])) { deleteRender(x.id); }
  verifyRenderExists(x.id);
  verifyRenderUpdated(x.id);
});

bthread("Render nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRender(a.id);
  block(matchAddRender(a.id, ANY), function () {});
  addRender(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReport(a.id);
  block(matchAddReport(a.id, ANY), function () {});
  addReport(b.id);
});

bthread("Resend nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addResend(x.id);
  for (var i=0; i<steps; i++) {
    updateResend(x.id);
  }
  if (pick([true,false])) { deleteResend(x.id); }
  verifyResendExists(x.id);
  verifyResendUpdated(x.id);
});

bthread("Resend nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResend(a.id);
  block(matchAddResend(a.id, ANY), function () {});
  addResend(b.id);
});

bthread("Resterrorhandling nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addResterrorhandling(x.id);
  for (var i=0; i<steps; i++) {
    updateResterrorhandling(x.id);
  }
  if (pick([true,false])) { deleteResterrorhandling(x.id); }
  verifyResterrorhandlingExists(x.id);
  verifyResterrorhandlingUpdated(x.id);
});

bthread("Resterrorhandling nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addResterrorhandling(a.id);
  block(matchAddResterrorhandling(a.id, ANY), function () {});
  addResterrorhandling(b.id);
});

bthread("Savedsnippet nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSavedsnippet(x.id);
  for (var i=0; i<steps; i++) {
    updateSavedsnippet(x.id);
  }
  if (pick([true,false])) { deleteSavedsnippet(x.id); }
  verifySavedsnippetExists(x.id);
  verifySavedsnippetUpdated(x.id);
});

bthread("Savedsnippet nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSavedsnippet(a.id);
  block(matchAddSavedsnippet(a.id, ANY), function () {});
  addSavedsnippet(b.id);
});

bthread("Scheduledmessage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addScheduledmessage(x.id);
  for (var i=0; i<steps; i++) {
    updateScheduledmessage(x.id);
  }
  if (pick([true,false])) { deleteScheduledmessage(x.id); }
  verifyScheduledmessageExists(x.id);
  verifyScheduledmessageUpdated(x.id);
});

bthread("Scheduledmessage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScheduledmessage(a.id);
  block(matchAddScheduledmessage(a.id, ANY), function () {});
  addScheduledmessage(b.id);
});

bthread("Serversetting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addServersetting(x.id);
  for (var i=0; i<steps; i++) {
    updateServersetting(x.id);
  }
  if (pick([true,false])) { deleteServersetting(x.id); }
  verifyServersettingExists(x.id);
  verifyServersettingUpdated(x.id);
});

bthread("Serversetting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addServersetting(a.id);
  block(matchAddServersetting(a.id, ANY), function () {});
  addServersetting(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStatu(a.id);
  block(matchAddStatu(a.id, ANY), function () {});
  addStatu(b.id);
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

bthread("Subgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateSubgroup(x.id);
  }
  if (pick([true,false])) { deleteSubgroup(x.id); }
  verifySubgroupExists(x.id);
  verifySubgroupUpdated(x.id);
});

bthread("Subgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSubgroup(a.id);
  block(matchAddSubgroup(a.id, ANY), function () {});
  addSubgroup(b.id);
});

bthread("Subscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubscription(x.id);
  for (var i=0; i<steps; i++) {
    updateSubscription(x.id);
  }
  if (pick([true,false])) { deleteSubscription(x.id); }
  verifySubscriptionExists(x.id);
  verifySubscriptionUpdated(x.id);
});

bthread("Subscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSubscription(a.id);
  block(matchAddSubscription(a.id, ANY), function () {});
  addSubscription(b.id);
});

bthread("Testnotification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTestnotification(x.id);
  for (var i=0; i<steps; i++) {
    updateTestnotification(x.id);
  }
  if (pick([true,false])) { deleteTestnotification(x.id); }
  verifyTestnotificationExists(x.id);
  verifyTestnotificationUpdated(x.id);
});

bthread("Testnotification nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTestnotification(a.id);
  block(matchAddTestnotification(a.id, ANY), function () {});
  addTestnotification(b.id);
});

bthread("Testwelcomebotcustommessage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTestwelcomebotcustommessage(x.id);
  for (var i=0; i<steps; i++) {
    updateTestwelcomebotcustommessage(x.id);
  }
  if (pick([true,false])) { deleteTestwelcomebotcustommessage(x.id); }
  verifyTestwelcomebotcustommessageExists(x.id);
  verifyTestwelcomebotcustommessageUpdated(x.id);
});

bthread("Testwelcomebotcustommessage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTestwelcomebotcustommessage(a.id);
  block(matchAddTestwelcomebotcustommessage(a.id, ANY), function () {});
  addTestwelcomebotcustommessage(b.id);
});

bthread("Topic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTopic(x.id);
  for (var i=0; i<steps; i++) {
    updateTopic(x.id);
  }
  if (pick([true,false])) { deleteTopic(x.id); }
  verifyTopicExists(x.id);
  verifyTopicUpdated(x.id);
});

bthread("Topic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTopic(a.id);
  block(matchAddTopic(a.id, ANY), function () {});
  addTopic(b.id);
});

bthread("Typing nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTyping(x.id);
  for (var i=0; i<steps; i++) {
    updateTyping(x.id);
  }
  if (pick([true,false])) { deleteTyping(x.id); }
  verifyTypingExists(x.id);
  verifyTypingUpdated(x.id);
});

bthread("Typing nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTyping(a.id);
  block(matchAddTyping(a.id, ANY), function () {});
  addTyping(b.id);
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

bthread("Usergroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUsergroup(x.id);
  for (var i=0; i<steps; i++) {
    updateUsergroup(x.id);
  }
  if (pick([true,false])) { deleteUsergroup(x.id); }
  verifyUsergroupExists(x.id);
  verifyUsergroupUpdated(x.id);
});

bthread("Usergroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsergroup(a.id);
  block(matchAddUsergroup(a.id, ANY), function () {});
  addUsergroup(b.id);
});

bthread("Usersettingsdefault nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUsersettingsdefault(x.id);
  for (var i=0; i<steps; i++) {
    updateUsersettingsdefault(x.id);
  }
  if (pick([true,false])) { deleteUsersettingsdefault(x.id); }
  verifyUsersettingsdefaultExists(x.id);
  verifyUsersettingsdefaultUpdated(x.id);
});

bthread("Usersettingsdefault nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsersettingsdefault(a.id);
  block(matchAddUsersettingsdefault(a.id, ANY), function () {});
  addUsersettingsdefault(b.id);
});

bthread("Usertopic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUsertopic(x.id);
  for (var i=0; i<steps; i++) {
    updateUsertopic(x.id);
  }
  if (pick([true,false])) { deleteUsertopic(x.id); }
  verifyUsertopicExists(x.id);
  verifyUsertopicUpdated(x.id);
});

bthread("Usertopic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsertopic(a.id);
  block(matchAddUsertopic(a.id, ANY), function () {});
  addUsertopic(b.id);
});

bthread("Userupload nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUserupload(x.id);
  for (var i=0; i<steps; i++) {
    updateUserupload(x.id);
  }
  if (pick([true,false])) { deleteUserupload(x.id); }
  verifyUseruploadExists(x.id);
  verifyUseruploadUpdated(x.id);
});

bthread("Userupload nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserupload(a.id);
  block(matchAddUserupload(a.id, ANY), function () {});
  addUserupload(b.id);
});

bthread("Zulipoutgoingwebhook nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addZulipoutgoingwebhook(x.id);
  for (var i=0; i<steps; i++) {
    updateZulipoutgoingwebhook(x.id);
  }
  if (pick([true,false])) { deleteZulipoutgoingwebhook(x.id); }
  verifyZulipoutgoingwebhookExists(x.id);
  verifyZulipoutgoingwebhookUpdated(x.id);
});

bthread("Zulipoutgoingwebhook nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addZulipoutgoingwebhook(a.id);
  block(matchAddZulipoutgoingwebhook(a.id, ANY), function () {});
  addZulipoutgoingwebhook(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Alertword create verification", function () {
  const e = waitForAnyAlertwordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlertword(k), function () {
    verifyAlertwordExists(k);
  });
});

bthread("Alertword update verification", function () {
  const e = waitForAnyAlertwordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlertword(k), function () {
    verifyAlertwordUpdated(k);
  });
});

bthread("Alertword delete verification", function () {
  const e = waitForAnyAlertwordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAlertword(k), function () {
    verifyAlertwordDoesNotExist(k);
  });
});

bthread("Androidgcmregid create verification", function () {
  const e = waitForAnyAndroidgcmregidAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAndroidgcmregid(k), function () {
    verifyAndroidgcmregidExists(k);
  });
});

bthread("Androidgcmregid update verification", function () {
  const e = waitForAnyAndroidgcmregidUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAndroidgcmregid(k), function () {
    verifyAndroidgcmregidUpdated(k);
  });
});

bthread("Androidgcmregid delete verification", function () {
  const e = waitForAnyAndroidgcmregidDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAndroidgcmregid(k), function () {
    verifyAndroidgcmregidDoesNotExist(k);
  });
});

bthread("Apnsdevicetoken create verification", function () {
  const e = waitForAnyApnsdevicetokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApnsdevicetoken(k), function () {
    verifyApnsdevicetokenExists(k);
  });
});

bthread("Apnsdevicetoken update verification", function () {
  const e = waitForAnyApnsdevicetokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApnsdevicetoken(k), function () {
    verifyApnsdevicetokenUpdated(k);
  });
});

bthread("Apnsdevicetoken delete verification", function () {
  const e = waitForAnyApnsdevicetokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApnsdevicetoken(k), function () {
    verifyApnsdevicetokenDoesNotExist(k);
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

bthread("Bigbluebutton create verification", function () {
  const e = waitForAnyBigbluebuttonAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBigbluebutton(k), function () {
    verifyBigbluebuttonExists(k);
  });
});

bthread("Bigbluebutton update verification", function () {
  const e = waitForAnyBigbluebuttonUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBigbluebutton(k), function () {
    verifyBigbluebuttonUpdated(k);
  });
});

bthread("Bigbluebutton delete verification", function () {
  const e = waitForAnyBigbluebuttonDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBigbluebutton(k), function () {
    verifyBigbluebuttonDoesNotExist(k);
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

bthread("Channel create verification", function () {
  const e = waitForAnyChannelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChannel(k), function () {
    verifyChannelExists(k);
  });
});

bthread("Channel update verification", function () {
  const e = waitForAnyChannelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChannel(k), function () {
    verifyChannelUpdated(k);
  });
});

bthread("Channel delete verification", function () {
  const e = waitForAnyChannelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChannel(k), function () {
    verifyChannelDoesNotExist(k);
  });
});

bthread("Channelfolder create verification", function () {
  const e = waitForAnyChannelfolderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChannelfolder(k), function () {
    verifyChannelfolderExists(k);
  });
});

bthread("Channelfolder update verification", function () {
  const e = waitForAnyChannelfolderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChannelfolder(k), function () {
    verifyChannelfolderUpdated(k);
  });
});

bthread("Channelfolder delete verification", function () {
  const e = waitForAnyChannelfolderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChannelfolder(k), function () {
    verifyChannelfolderDoesNotExist(k);
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

bthread("Deactivate create verification", function () {
  const e = waitForAnyDeactivateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeactivate(k), function () {
    verifyDeactivateExists(k);
  });
});

bthread("Deactivate update verification", function () {
  const e = waitForAnyDeactivateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeactivate(k), function () {
    verifyDeactivateUpdated(k);
  });
});

bthread("Deactivate delete verification", function () {
  const e = waitForAnyDeactivateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeactivate(k), function () {
    verifyDeactivateDoesNotExist(k);
  });
});

bthread("Defaultstream create verification", function () {
  const e = waitForAnyDefaultstreamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultstream(k), function () {
    verifyDefaultstreamExists(k);
  });
});

bthread("Defaultstream update verification", function () {
  const e = waitForAnyDefaultstreamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultstream(k), function () {
    verifyDefaultstreamUpdated(k);
  });
});

bthread("Defaultstream delete verification", function () {
  const e = waitForAnyDefaultstreamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultstream(k), function () {
    verifyDefaultstreamDoesNotExist(k);
  });
});

bthread("Deletetopic create verification", function () {
  const e = waitForAnyDeletetopicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeletetopic(k), function () {
    verifyDeletetopicExists(k);
  });
});

bthread("Deletetopic update verification", function () {
  const e = waitForAnyDeletetopicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeletetopic(k), function () {
    verifyDeletetopicUpdated(k);
  });
});

bthread("Deletetopic delete verification", function () {
  const e = waitForAnyDeletetopicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeletetopic(k), function () {
    verifyDeletetopicDoesNotExist(k);
  });
});

bthread("Devfetchapikey create verification", function () {
  const e = waitForAnyDevfetchapikeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDevfetchapikey(k), function () {
    verifyDevfetchapikeyExists(k);
  });
});

bthread("Devfetchapikey update verification", function () {
  const e = waitForAnyDevfetchapikeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDevfetchapikey(k), function () {
    verifyDevfetchapikeyUpdated(k);
  });
});

bthread("Devfetchapikey delete verification", function () {
  const e = waitForAnyDevfetchapikeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDevfetchapikey(k), function () {
    verifyDevfetchapikeyDoesNotExist(k);
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

bthread("E2ee create verification", function () {
  const e = waitForAnyE2eeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteE2ee(k), function () {
    verifyE2eeExists(k);
  });
});

bthread("E2ee update verification", function () {
  const e = waitForAnyE2eeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteE2ee(k), function () {
    verifyE2eeUpdated(k);
  });
});

bthread("E2ee delete verification", function () {
  const e = waitForAnyE2eeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddE2ee(k), function () {
    verifyE2eeDoesNotExist(k);
  });
});

bthread("Emailaddres create verification", function () {
  const e = waitForAnyEmailaddresAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmailaddres(k), function () {
    verifyEmailaddresExists(k);
  });
});

bthread("Emailaddres update verification", function () {
  const e = waitForAnyEmailaddresUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmailaddres(k), function () {
    verifyEmailaddresUpdated(k);
  });
});

bthread("Emailaddres delete verification", function () {
  const e = waitForAnyEmailaddresDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmailaddres(k), function () {
    verifyEmailaddresDoesNotExist(k);
  });
});

bthread("Emoji create verification", function () {
  const e = waitForAnyEmojiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmoji(k), function () {
    verifyEmojiExists(k);
  });
});

bthread("Emoji update verification", function () {
  const e = waitForAnyEmojiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmoji(k), function () {
    verifyEmojiUpdated(k);
  });
});

bthread("Emoji delete verification", function () {
  const e = waitForAnyEmojiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmoji(k), function () {
    verifyEmojiDoesNotExist(k);
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

bthread("Fetchapikey create verification", function () {
  const e = waitForAnyFetchapikeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFetchapikey(k), function () {
    verifyFetchapikeyExists(k);
  });
});

bthread("Fetchapikey update verification", function () {
  const e = waitForAnyFetchapikeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFetchapikey(k), function () {
    verifyFetchapikeyUpdated(k);
  });
});

bthread("Fetchapikey delete verification", function () {
  const e = waitForAnyFetchapikeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFetchapikey(k), function () {
    verifyFetchapikeyDoesNotExist(k);
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

bthread("Flag create verification", function () {
  const e = waitForAnyFlagAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlag(k), function () {
    verifyFlagExists(k);
  });
});

bthread("Flag update verification", function () {
  const e = waitForAnyFlagUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlag(k), function () {
    verifyFlagUpdated(k);
  });
});

bthread("Flag delete verification", function () {
  const e = waitForAnyFlagDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFlag(k), function () {
    verifyFlagDoesNotExist(k);
  });
});

bthread("Getstreamid create verification", function () {
  const e = waitForAnyGetstreamidAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGetstreamid(k), function () {
    verifyGetstreamidExists(k);
  });
});

bthread("Getstreamid update verification", function () {
  const e = waitForAnyGetstreamidUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGetstreamid(k), function () {
    verifyGetstreamidUpdated(k);
  });
});

bthread("Getstreamid delete verification", function () {
  const e = waitForAnyGetstreamidDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGetstreamid(k), function () {
    verifyGetstreamidDoesNotExist(k);
  });
});

bthread("History create verification", function () {
  const e = waitForAnyHistoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHistory(k), function () {
    verifyHistoryExists(k);
  });
});

bthread("History update verification", function () {
  const e = waitForAnyHistoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHistory(k), function () {
    verifyHistoryUpdated(k);
  });
});

bthread("History delete verification", function () {
  const e = waitForAnyHistoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHistory(k), function () {
    verifyHistoryDoesNotExist(k);
  });
});

bthread("Invite create verification", function () {
  const e = waitForAnyInviteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvite(k), function () {
    verifyInviteExists(k);
  });
});

bthread("Invite update verification", function () {
  const e = waitForAnyInviteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvite(k), function () {
    verifyInviteUpdated(k);
  });
});

bthread("Invite delete verification", function () {
  const e = waitForAnyInviteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvite(k), function () {
    verifyInviteDoesNotExist(k);
  });
});

bthread("Linkifier create verification", function () {
  const e = waitForAnyLinkifierAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLinkifier(k), function () {
    verifyLinkifierExists(k);
  });
});

bthread("Linkifier update verification", function () {
  const e = waitForAnyLinkifierUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLinkifier(k), function () {
    verifyLinkifierUpdated(k);
  });
});

bthread("Linkifier delete verification", function () {
  const e = waitForAnyLinkifierDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLinkifier(k), function () {
    verifyLinkifierDoesNotExist(k);
  });
});

bthread("Markallasread create verification", function () {
  const e = waitForAnyMarkallasreadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkallasread(k), function () {
    verifyMarkallasreadExists(k);
  });
});

bthread("Markallasread update verification", function () {
  const e = waitForAnyMarkallasreadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkallasread(k), function () {
    verifyMarkallasreadUpdated(k);
  });
});

bthread("Markallasread delete verification", function () {
  const e = waitForAnyMarkallasreadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarkallasread(k), function () {
    verifyMarkallasreadDoesNotExist(k);
  });
});

bthread("Markstreamasread create verification", function () {
  const e = waitForAnyMarkstreamasreadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkstreamasread(k), function () {
    verifyMarkstreamasreadExists(k);
  });
});

bthread("Markstreamasread update verification", function () {
  const e = waitForAnyMarkstreamasreadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkstreamasread(k), function () {
    verifyMarkstreamasreadUpdated(k);
  });
});

bthread("Markstreamasread delete verification", function () {
  const e = waitForAnyMarkstreamasreadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarkstreamasread(k), function () {
    verifyMarkstreamasreadDoesNotExist(k);
  });
});

bthread("Marktopicasread create verification", function () {
  const e = waitForAnyMarktopicasreadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarktopicasread(k), function () {
    verifyMarktopicasreadExists(k);
  });
});

bthread("Marktopicasread update verification", function () {
  const e = waitForAnyMarktopicasreadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarktopicasread(k), function () {
    verifyMarktopicasreadUpdated(k);
  });
});

bthread("Marktopicasread delete verification", function () {
  const e = waitForAnyMarktopicasreadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarktopicasread(k), function () {
    verifyMarktopicasreadDoesNotExist(k);
  });
});

bthread("Matchesnarrow create verification", function () {
  const e = waitForAnyMatchesnarrowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatchesnarrow(k), function () {
    verifyMatchesnarrowExists(k);
  });
});

bthread("Matchesnarrow update verification", function () {
  const e = waitForAnyMatchesnarrowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatchesnarrow(k), function () {
    verifyMatchesnarrowUpdated(k);
  });
});

bthread("Matchesnarrow delete verification", function () {
  const e = waitForAnyMatchesnarrowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMatchesnarrow(k), function () {
    verifyMatchesnarrowDoesNotExist(k);
  });
});

bthread("Me create verification", function () {
  const e = waitForAnyMeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMe(k), function () {
    verifyMeExists(k);
  });
});

bthread("Me update verification", function () {
  const e = waitForAnyMeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMe(k), function () {
    verifyMeUpdated(k);
  });
});

bthread("Me delete verification", function () {
  const e = waitForAnyMeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMe(k), function () {
    verifyMeDoesNotExist(k);
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

bthread("Mobilepush create verification", function () {
  const e = waitForAnyMobilepushAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMobilepush(k), function () {
    verifyMobilepushExists(k);
  });
});

bthread("Mobilepush update verification", function () {
  const e = waitForAnyMobilepushUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMobilepush(k), function () {
    verifyMobilepushUpdated(k);
  });
});

bthread("Mobilepush delete verification", function () {
  const e = waitForAnyMobilepushDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMobilepush(k), function () {
    verifyMobilepushDoesNotExist(k);
  });
});

bthread("Multiuse create verification", function () {
  const e = waitForAnyMultiuseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMultiuse(k), function () {
    verifyMultiuseExists(k);
  });
});

bthread("Multiuse update verification", function () {
  const e = waitForAnyMultiuseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMultiuse(k), function () {
    verifyMultiuseUpdated(k);
  });
});

bthread("Multiuse delete verification", function () {
  const e = waitForAnyMultiuseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMultiuse(k), function () {
    verifyMultiuseDoesNotExist(k);
  });
});

bthread("Mutedtopic create verification", function () {
  const e = waitForAnyMutedtopicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMutedtopic(k), function () {
    verifyMutedtopicExists(k);
  });
});

bthread("Mutedtopic update verification", function () {
  const e = waitForAnyMutedtopicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMutedtopic(k), function () {
    verifyMutedtopicUpdated(k);
  });
});

bthread("Mutedtopic delete verification", function () {
  const e = waitForAnyMutedtopicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMutedtopic(k), function () {
    verifyMutedtopicDoesNotExist(k);
  });
});

bthread("Muteduser create verification", function () {
  const e = waitForAnyMuteduserAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMuteduser(k), function () {
    verifyMuteduserExists(k);
  });
});

bthread("Muteduser update verification", function () {
  const e = waitForAnyMuteduserUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMuteduser(k), function () {
    verifyMuteduserUpdated(k);
  });
});

bthread("Muteduser delete verification", function () {
  const e = waitForAnyMuteduserDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMuteduser(k), function () {
    verifyMuteduserDoesNotExist(k);
  });
});

bthread("Narrow create verification", function () {
  const e = waitForAnyNarrowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNarrow(k), function () {
    verifyNarrowExists(k);
  });
});

bthread("Narrow update verification", function () {
  const e = waitForAnyNarrowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNarrow(k), function () {
    verifyNarrowUpdated(k);
  });
});

bthread("Narrow delete verification", function () {
  const e = waitForAnyNarrowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNarrow(k), function () {
    verifyNarrowDoesNotExist(k);
  });
});

bthread("Navigationview create verification", function () {
  const e = waitForAnyNavigationviewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNavigationview(k), function () {
    verifyNavigationviewExists(k);
  });
});

bthread("Navigationview update verification", function () {
  const e = waitForAnyNavigationviewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNavigationview(k), function () {
    verifyNavigationviewUpdated(k);
  });
});

bthread("Navigationview delete verification", function () {
  const e = waitForAnyNavigationviewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNavigationview(k), function () {
    verifyNavigationviewDoesNotExist(k);
  });
});

bthread("Playground create verification", function () {
  const e = waitForAnyPlaygroundAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlayground(k), function () {
    verifyPlaygroundExists(k);
  });
});

bthread("Playground update verification", function () {
  const e = waitForAnyPlaygroundUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlayground(k), function () {
    verifyPlaygroundUpdated(k);
  });
});

bthread("Playground delete verification", function () {
  const e = waitForAnyPlaygroundDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPlayground(k), function () {
    verifyPlaygroundDoesNotExist(k);
  });
});

bthread("Presence create verification", function () {
  const e = waitForAnyPresenceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePresence(k), function () {
    verifyPresenceExists(k);
  });
});

bthread("Presence update verification", function () {
  const e = waitForAnyPresenceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePresence(k), function () {
    verifyPresenceUpdated(k);
  });
});

bthread("Presence delete verification", function () {
  const e = waitForAnyPresenceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPresence(k), function () {
    verifyPresenceDoesNotExist(k);
  });
});

bthread("Profilefield create verification", function () {
  const e = waitForAnyProfilefieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfilefield(k), function () {
    verifyProfilefieldExists(k);
  });
});

bthread("Profilefield update verification", function () {
  const e = waitForAnyProfilefieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfilefield(k), function () {
    verifyProfilefieldUpdated(k);
  });
});

bthread("Profilefield delete verification", function () {
  const e = waitForAnyProfilefieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProfilefield(k), function () {
    verifyProfilefieldDoesNotExist(k);
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

bthread("Push create verification", function () {
  const e = waitForAnyPushAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePush(k), function () {
    verifyPushExists(k);
  });
});

bthread("Push update verification", function () {
  const e = waitForAnyPushUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePush(k), function () {
    verifyPushUpdated(k);
  });
});

bthread("Push delete verification", function () {
  const e = waitForAnyPushDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPush(k), function () {
    verifyPushDoesNotExist(k);
  });
});

bthread("Reaction create verification", function () {
  const e = waitForAnyReactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReaction(k), function () {
    verifyReactionExists(k);
  });
});

bthread("Reaction update verification", function () {
  const e = waitForAnyReactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReaction(k), function () {
    verifyReactionUpdated(k);
  });
});

bthread("Reaction delete verification", function () {
  const e = waitForAnyReactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReaction(k), function () {
    verifyReactionDoesNotExist(k);
  });
});

bthread("Reactivate create verification", function () {
  const e = waitForAnyReactivateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReactivate(k), function () {
    verifyReactivateExists(k);
  });
});

bthread("Reactivate update verification", function () {
  const e = waitForAnyReactivateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReactivate(k), function () {
    verifyReactivateUpdated(k);
  });
});

bthread("Reactivate delete verification", function () {
  const e = waitForAnyReactivateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReactivate(k), function () {
    verifyReactivateDoesNotExist(k);
  });
});

bthread("Readreceipt create verification", function () {
  const e = waitForAnyReadreceiptAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReadreceipt(k), function () {
    verifyReadreceiptExists(k);
  });
});

bthread("Readreceipt update verification", function () {
  const e = waitForAnyReadreceiptUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReadreceipt(k), function () {
    verifyReadreceiptUpdated(k);
  });
});

bthread("Readreceipt delete verification", function () {
  const e = waitForAnyReadreceiptDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReadreceipt(k), function () {
    verifyReadreceiptDoesNotExist(k);
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

bthread("Realtime create verification", function () {
  const e = waitForAnyRealtimeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtime(k), function () {
    verifyRealtimeExists(k);
  });
});

bthread("Realtime update verification", function () {
  const e = waitForAnyRealtimeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealtime(k), function () {
    verifyRealtimeUpdated(k);
  });
});

bthread("Realtime delete verification", function () {
  const e = waitForAnyRealtimeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealtime(k), function () {
    verifyRealtimeDoesNotExist(k);
  });
});

bthread("Register create verification", function () {
  const e = waitForAnyRegisterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegister(k), function () {
    verifyRegisterExists(k);
  });
});

bthread("Register update verification", function () {
  const e = waitForAnyRegisterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegister(k), function () {
    verifyRegisterUpdated(k);
  });
});

bthread("Register delete verification", function () {
  const e = waitForAnyRegisterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRegister(k), function () {
    verifyRegisterDoesNotExist(k);
  });
});

bthread("Reminder create verification", function () {
  const e = waitForAnyReminderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReminder(k), function () {
    verifyReminderExists(k);
  });
});

bthread("Reminder update verification", function () {
  const e = waitForAnyReminderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReminder(k), function () {
    verifyReminderUpdated(k);
  });
});

bthread("Reminder delete verification", function () {
  const e = waitForAnyReminderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReminder(k), function () {
    verifyReminderDoesNotExist(k);
  });
});

bthread("Remote create verification", function () {
  const e = waitForAnyRemoteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemote(k), function () {
    verifyRemoteExists(k);
  });
});

bthread("Remote update verification", function () {
  const e = waitForAnyRemoteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemote(k), function () {
    verifyRemoteUpdated(k);
  });
});

bthread("Remote delete verification", function () {
  const e = waitForAnyRemoteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemote(k), function () {
    verifyRemoteDoesNotExist(k);
  });
});

bthread("Render create verification", function () {
  const e = waitForAnyRenderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRender(k), function () {
    verifyRenderExists(k);
  });
});

bthread("Render update verification", function () {
  const e = waitForAnyRenderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRender(k), function () {
    verifyRenderUpdated(k);
  });
});

bthread("Render delete verification", function () {
  const e = waitForAnyRenderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRender(k), function () {
    verifyRenderDoesNotExist(k);
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

bthread("Resend create verification", function () {
  const e = waitForAnyResendAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResend(k), function () {
    verifyResendExists(k);
  });
});

bthread("Resend update verification", function () {
  const e = waitForAnyResendUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResend(k), function () {
    verifyResendUpdated(k);
  });
});

bthread("Resend delete verification", function () {
  const e = waitForAnyResendDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResend(k), function () {
    verifyResendDoesNotExist(k);
  });
});

bthread("Resterrorhandling create verification", function () {
  const e = waitForAnyResterrorhandlingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResterrorhandling(k), function () {
    verifyResterrorhandlingExists(k);
  });
});

bthread("Resterrorhandling update verification", function () {
  const e = waitForAnyResterrorhandlingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteResterrorhandling(k), function () {
    verifyResterrorhandlingUpdated(k);
  });
});

bthread("Resterrorhandling delete verification", function () {
  const e = waitForAnyResterrorhandlingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddResterrorhandling(k), function () {
    verifyResterrorhandlingDoesNotExist(k);
  });
});

bthread("Savedsnippet create verification", function () {
  const e = waitForAnySavedsnippetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSavedsnippet(k), function () {
    verifySavedsnippetExists(k);
  });
});

bthread("Savedsnippet update verification", function () {
  const e = waitForAnySavedsnippetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSavedsnippet(k), function () {
    verifySavedsnippetUpdated(k);
  });
});

bthread("Savedsnippet delete verification", function () {
  const e = waitForAnySavedsnippetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSavedsnippet(k), function () {
    verifySavedsnippetDoesNotExist(k);
  });
});

bthread("Scheduledmessage create verification", function () {
  const e = waitForAnyScheduledmessageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScheduledmessage(k), function () {
    verifyScheduledmessageExists(k);
  });
});

bthread("Scheduledmessage update verification", function () {
  const e = waitForAnyScheduledmessageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScheduledmessage(k), function () {
    verifyScheduledmessageUpdated(k);
  });
});

bthread("Scheduledmessage delete verification", function () {
  const e = waitForAnyScheduledmessageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScheduledmessage(k), function () {
    verifyScheduledmessageDoesNotExist(k);
  });
});

bthread("Serversetting create verification", function () {
  const e = waitForAnyServersettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServersetting(k), function () {
    verifyServersettingExists(k);
  });
});

bthread("Serversetting update verification", function () {
  const e = waitForAnyServersettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServersetting(k), function () {
    verifyServersettingUpdated(k);
  });
});

bthread("Serversetting delete verification", function () {
  const e = waitForAnyServersettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddServersetting(k), function () {
    verifyServersettingDoesNotExist(k);
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

bthread("Subgroup create verification", function () {
  const e = waitForAnySubgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubgroup(k), function () {
    verifySubgroupExists(k);
  });
});

bthread("Subgroup update verification", function () {
  const e = waitForAnySubgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubgroup(k), function () {
    verifySubgroupUpdated(k);
  });
});

bthread("Subgroup delete verification", function () {
  const e = waitForAnySubgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubgroup(k), function () {
    verifySubgroupDoesNotExist(k);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubscription(k), function () {
    verifySubscriptionExists(k);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubscription(k), function () {
    verifySubscriptionUpdated(k);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubscription(k), function () {
    verifySubscriptionDoesNotExist(k);
  });
});

bthread("Testnotification create verification", function () {
  const e = waitForAnyTestnotificationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestnotification(k), function () {
    verifyTestnotificationExists(k);
  });
});

bthread("Testnotification update verification", function () {
  const e = waitForAnyTestnotificationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestnotification(k), function () {
    verifyTestnotificationUpdated(k);
  });
});

bthread("Testnotification delete verification", function () {
  const e = waitForAnyTestnotificationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTestnotification(k), function () {
    verifyTestnotificationDoesNotExist(k);
  });
});

bthread("Testwelcomebotcustommessage create verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestwelcomebotcustommessage(k), function () {
    verifyTestwelcomebotcustommessageExists(k);
  });
});

bthread("Testwelcomebotcustommessage update verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTestwelcomebotcustommessage(k), function () {
    verifyTestwelcomebotcustommessageUpdated(k);
  });
});

bthread("Testwelcomebotcustommessage delete verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTestwelcomebotcustommessage(k), function () {
    verifyTestwelcomebotcustommessageDoesNotExist(k);
  });
});

bthread("Topic create verification", function () {
  const e = waitForAnyTopicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTopic(k), function () {
    verifyTopicExists(k);
  });
});

bthread("Topic update verification", function () {
  const e = waitForAnyTopicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTopic(k), function () {
    verifyTopicUpdated(k);
  });
});

bthread("Topic delete verification", function () {
  const e = waitForAnyTopicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTopic(k), function () {
    verifyTopicDoesNotExist(k);
  });
});

bthread("Typing create verification", function () {
  const e = waitForAnyTypingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTyping(k), function () {
    verifyTypingExists(k);
  });
});

bthread("Typing update verification", function () {
  const e = waitForAnyTypingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTyping(k), function () {
    verifyTypingUpdated(k);
  });
});

bthread("Typing delete verification", function () {
  const e = waitForAnyTypingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTyping(k), function () {
    verifyTypingDoesNotExist(k);
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

bthread("Usergroup create verification", function () {
  const e = waitForAnyUsergroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsergroup(k), function () {
    verifyUsergroupExists(k);
  });
});

bthread("Usergroup update verification", function () {
  const e = waitForAnyUsergroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsergroup(k), function () {
    verifyUsergroupUpdated(k);
  });
});

bthread("Usergroup delete verification", function () {
  const e = waitForAnyUsergroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsergroup(k), function () {
    verifyUsergroupDoesNotExist(k);
  });
});

bthread("Usersettingsdefault create verification", function () {
  const e = waitForAnyUsersettingsdefaultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsersettingsdefault(k), function () {
    verifyUsersettingsdefaultExists(k);
  });
});

bthread("Usersettingsdefault update verification", function () {
  const e = waitForAnyUsersettingsdefaultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsersettingsdefault(k), function () {
    verifyUsersettingsdefaultUpdated(k);
  });
});

bthread("Usersettingsdefault delete verification", function () {
  const e = waitForAnyUsersettingsdefaultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsersettingsdefault(k), function () {
    verifyUsersettingsdefaultDoesNotExist(k);
  });
});

bthread("Usertopic create verification", function () {
  const e = waitForAnyUsertopicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsertopic(k), function () {
    verifyUsertopicExists(k);
  });
});

bthread("Usertopic update verification", function () {
  const e = waitForAnyUsertopicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsertopic(k), function () {
    verifyUsertopicUpdated(k);
  });
});

bthread("Usertopic delete verification", function () {
  const e = waitForAnyUsertopicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsertopic(k), function () {
    verifyUsertopicDoesNotExist(k);
  });
});

bthread("Userupload create verification", function () {
  const e = waitForAnyUseruploadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserupload(k), function () {
    verifyUseruploadExists(k);
  });
});

bthread("Userupload update verification", function () {
  const e = waitForAnyUseruploadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserupload(k), function () {
    verifyUseruploadUpdated(k);
  });
});

bthread("Userupload delete verification", function () {
  const e = waitForAnyUseruploadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserupload(k), function () {
    verifyUseruploadDoesNotExist(k);
  });
});

bthread("Zulipoutgoingwebhook create verification", function () {
  const e = waitForAnyZulipoutgoingwebhookAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteZulipoutgoingwebhook(k), function () {
    verifyZulipoutgoingwebhookExists(k);
  });
});

bthread("Zulipoutgoingwebhook update verification", function () {
  const e = waitForAnyZulipoutgoingwebhookUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteZulipoutgoingwebhook(k), function () {
    verifyZulipoutgoingwebhookUpdated(k);
  });
});

bthread("Zulipoutgoingwebhook delete verification", function () {
  const e = waitForAnyZulipoutgoingwebhookDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddZulipoutgoingwebhook(k), function () {
    verifyZulipoutgoingwebhookDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Alertword", function () {
  const x = waitForAnyAlertwordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAlertword(k, ANY), function () {});
});

bthread("Guard: Unique Androidgcmregid", function () {
  const x = waitForAnyAndroidgcmregidAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAndroidgcmregid(k, ANY), function () {});
});

bthread("Guard: Unique Apnsdevicetoken", function () {
  const x = waitForAnyApnsdevicetokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApnsdevicetoken(k, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttachment(k, ANY), function () {});
});

bthread("Guard: Unique Bigbluebutton", function () {
  const x = waitForAnyBigbluebuttonAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBigbluebutton(k, ANY), function () {});
});

bthread("Guard: Unique Call", function () {
  const x = waitForAnyCallAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCall(k, ANY), function () {});
});

bthread("Guard: Unique Channel", function () {
  const x = waitForAnyChannelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChannel(k, ANY), function () {});
});

bthread("Guard: Unique Channelfolder", function () {
  const x = waitForAnyChannelfolderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChannelfolder(k, ANY), function () {});
});

bthread("Guard: Unique Consent", function () {
  const x = waitForAnyConsentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConsent(k, ANY), function () {});
});

bthread("Guard: Unique Create", function () {
  const x = waitForAnyCreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCreate(k, ANY), function () {});
});

bthread("Guard: Unique Deactivate", function () {
  const x = waitForAnyDeactivateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeactivate(k, ANY), function () {});
});

bthread("Guard: Unique Defaultstream", function () {
  const x = waitForAnyDefaultstreamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultstream(k, ANY), function () {});
});

bthread("Guard: Unique Deletetopic", function () {
  const x = waitForAnyDeletetopicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeletetopic(k, ANY), function () {});
});

bthread("Guard: Unique Devfetchapikey", function () {
  const x = waitForAnyDevfetchapikeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDevfetchapikey(k, ANY), function () {});
});

bthread("Guard: Unique Draft", function () {
  const x = waitForAnyDraftAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDraft(k, ANY), function () {});
});

bthread("Guard: Unique E2ee", function () {
  const x = waitForAnyE2eeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddE2ee(k, ANY), function () {});
});

bthread("Guard: Unique Emailaddres", function () {
  const x = waitForAnyEmailaddresAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmailaddres(k, ANY), function () {});
});

bthread("Guard: Unique Emoji", function () {
  const x = waitForAnyEmojiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmoji(k, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEvent(k, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExport(k, ANY), function () {});
});

bthread("Guard: Unique Fetchapikey", function () {
  const x = waitForAnyFetchapikeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFetchapikey(k, ANY), function () {});
});

bthread("Guard: Unique Filter", function () {
  const x = waitForAnyFilterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFilter(k, ANY), function () {});
});

bthread("Guard: Unique Flag", function () {
  const x = waitForAnyFlagAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFlag(k, ANY), function () {});
});

bthread("Guard: Unique Getstreamid", function () {
  const x = waitForAnyGetstreamidAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGetstreamid(k, ANY), function () {});
});

bthread("Guard: Unique History", function () {
  const x = waitForAnyHistoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHistory(k, ANY), function () {});
});

bthread("Guard: Unique Invite", function () {
  const x = waitForAnyInviteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvite(k, ANY), function () {});
});

bthread("Guard: Unique Linkifier", function () {
  const x = waitForAnyLinkifierAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLinkifier(k, ANY), function () {});
});

bthread("Guard: Unique Markallasread", function () {
  const x = waitForAnyMarkallasreadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarkallasread(k, ANY), function () {});
});

bthread("Guard: Unique Markstreamasread", function () {
  const x = waitForAnyMarkstreamasreadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarkstreamasread(k, ANY), function () {});
});

bthread("Guard: Unique Marktopicasread", function () {
  const x = waitForAnyMarktopicasreadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarktopicasread(k, ANY), function () {});
});

bthread("Guard: Unique Matchesnarrow", function () {
  const x = waitForAnyMatchesnarrowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMatchesnarrow(k, ANY), function () {});
});

bthread("Guard: Unique Me", function () {
  const x = waitForAnyMeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMe(k, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMember(k, ANY), function () {});
});

bthread("Guard: Unique Message", function () {
  const x = waitForAnyMessageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessage(k, ANY), function () {});
});

bthread("Guard: Unique Mobilepush", function () {
  const x = waitForAnyMobilepushAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMobilepush(k, ANY), function () {});
});

bthread("Guard: Unique Multiuse", function () {
  const x = waitForAnyMultiuseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMultiuse(k, ANY), function () {});
});

bthread("Guard: Unique Mutedtopic", function () {
  const x = waitForAnyMutedtopicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMutedtopic(k, ANY), function () {});
});

bthread("Guard: Unique Muteduser", function () {
  const x = waitForAnyMuteduserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMuteduser(k, ANY), function () {});
});

bthread("Guard: Unique Narrow", function () {
  const x = waitForAnyNarrowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNarrow(k, ANY), function () {});
});

bthread("Guard: Unique Navigationview", function () {
  const x = waitForAnyNavigationviewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNavigationview(k, ANY), function () {});
});

bthread("Guard: Unique Playground", function () {
  const x = waitForAnyPlaygroundAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPlayground(k, ANY), function () {});
});

bthread("Guard: Unique Presence", function () {
  const x = waitForAnyPresenceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPresence(k, ANY), function () {});
});

bthread("Guard: Unique Profilefield", function () {
  const x = waitForAnyProfilefieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProfilefield(k, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProperty(k, ANY), function () {});
});

bthread("Guard: Unique Push", function () {
  const x = waitForAnyPushAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPush(k, ANY), function () {});
});

bthread("Guard: Unique Reaction", function () {
  const x = waitForAnyReactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReaction(k, ANY), function () {});
});

bthread("Guard: Unique Reactivate", function () {
  const x = waitForAnyReactivateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReactivate(k, ANY), function () {});
});

bthread("Guard: Unique Readreceipt", function () {
  const x = waitForAnyReadreceiptAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReadreceipt(k, ANY), function () {});
});

bthread("Guard: Unique Realm", function () {
  const x = waitForAnyRealmAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealm(k, ANY), function () {});
});

bthread("Guard: Unique Realtime", function () {
  const x = waitForAnyRealtimeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealtime(k, ANY), function () {});
});

bthread("Guard: Unique Register", function () {
  const x = waitForAnyRegisterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRegister(k, ANY), function () {});
});

bthread("Guard: Unique Reminder", function () {
  const x = waitForAnyReminderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReminder(k, ANY), function () {});
});

bthread("Guard: Unique Remote", function () {
  const x = waitForAnyRemoteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemote(k, ANY), function () {});
});

bthread("Guard: Unique Render", function () {
  const x = waitForAnyRenderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRender(k, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReport(k, ANY), function () {});
});

bthread("Guard: Unique Resend", function () {
  const x = waitForAnyResendAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResend(k, ANY), function () {});
});

bthread("Guard: Unique Resterrorhandling", function () {
  const x = waitForAnyResterrorhandlingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddResterrorhandling(k, ANY), function () {});
});

bthread("Guard: Unique Savedsnippet", function () {
  const x = waitForAnySavedsnippetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSavedsnippet(k, ANY), function () {});
});

bthread("Guard: Unique Scheduledmessage", function () {
  const x = waitForAnyScheduledmessageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScheduledmessage(k, ANY), function () {});
});

bthread("Guard: Unique Serversetting", function () {
  const x = waitForAnyServersettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddServersetting(k, ANY), function () {});
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

bthread("Guard: Unique Stream", function () {
  const x = waitForAnyStreamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStream(k, ANY), function () {});
});

bthread("Guard: Unique Subgroup", function () {
  const x = waitForAnySubgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubgroup(k, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubscription(k, ANY), function () {});
});

bthread("Guard: Unique Testnotification", function () {
  const x = waitForAnyTestnotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTestnotification(k, ANY), function () {});
});

bthread("Guard: Unique Testwelcomebotcustommessage", function () {
  const x = waitForAnyTestwelcomebotcustommessageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTestwelcomebotcustommessage(k, ANY), function () {});
});

bthread("Guard: Unique Topic", function () {
  const x = waitForAnyTopicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTopic(k, ANY), function () {});
});

bthread("Guard: Unique Typing", function () {
  const x = waitForAnyTypingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTyping(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Usergroup", function () {
  const x = waitForAnyUsergroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsergroup(k, ANY), function () {});
});

bthread("Guard: Unique Usersettingsdefault", function () {
  const x = waitForAnyUsersettingsdefaultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsersettingsdefault(k, ANY), function () {});
});

bthread("Guard: Unique Usertopic", function () {
  const x = waitForAnyUsertopicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsertopic(k, ANY), function () {});
});

bthread("Guard: Unique Userupload", function () {
  const x = waitForAnyUseruploadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserupload(k, ANY), function () {});
});

bthread("Guard: Unique Zulipoutgoingwebhook", function () {
  const x = waitForAnyZulipoutgoingwebhookAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddZulipoutgoingwebhook(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
