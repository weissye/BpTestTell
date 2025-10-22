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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
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
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
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
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
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
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
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
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
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
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
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
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
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
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
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
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
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
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
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
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
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
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
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
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
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
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
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
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
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
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
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
  const a = { id: 'Z' + ids[0] };
  const b = { id: 'Z' + ids[1] };
  addZulipoutgoingwebhook(a.id);
  block(matchAddZulipoutgoingwebhook(a.id, ANY), function () {});
  addZulipoutgoingwebhook(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Alertword create verification", function () {
  const e = waitForAnyAlertwordAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlertword(k, ANY), function () {
    verifyAlertwordExists(k);
  });
});

bthread("Alertword update verification", function () {
  const e = waitForAnyAlertwordUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlertword(k, ANY), function () {
    verifyAlertwordUpdated(k);
  });
});

bthread("Alertword delete verification", function () {
  const e = waitForAnyAlertwordDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAlertword(k, ANY), function () {
    verifyAlertwordDoesNotExist(k);
  });
});

bthread("Androidgcmregid create verification", function () {
  const e = waitForAnyAndroidgcmregidAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAndroidgcmregid(k, ANY), function () {
    verifyAndroidgcmregidExists(k);
  });
});

bthread("Androidgcmregid update verification", function () {
  const e = waitForAnyAndroidgcmregidUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAndroidgcmregid(k, ANY), function () {
    verifyAndroidgcmregidUpdated(k);
  });
});

bthread("Androidgcmregid delete verification", function () {
  const e = waitForAnyAndroidgcmregidDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAndroidgcmregid(k, ANY), function () {
    verifyAndroidgcmregidDoesNotExist(k);
  });
});

bthread("Apnsdevicetoken create verification", function () {
  const e = waitForAnyApnsdevicetokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApnsdevicetoken(k, ANY), function () {
    verifyApnsdevicetokenExists(k);
  });
});

bthread("Apnsdevicetoken update verification", function () {
  const e = waitForAnyApnsdevicetokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApnsdevicetoken(k, ANY), function () {
    verifyApnsdevicetokenUpdated(k);
  });
});

bthread("Apnsdevicetoken delete verification", function () {
  const e = waitForAnyApnsdevicetokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApnsdevicetoken(k, ANY), function () {
    verifyApnsdevicetokenDoesNotExist(k);
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

bthread("Bigbluebutton create verification", function () {
  const e = waitForAnyBigbluebuttonAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBigbluebutton(k, ANY), function () {
    verifyBigbluebuttonExists(k);
  });
});

bthread("Bigbluebutton update verification", function () {
  const e = waitForAnyBigbluebuttonUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBigbluebutton(k, ANY), function () {
    verifyBigbluebuttonUpdated(k);
  });
});

bthread("Bigbluebutton delete verification", function () {
  const e = waitForAnyBigbluebuttonDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBigbluebutton(k, ANY), function () {
    verifyBigbluebuttonDoesNotExist(k);
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

bthread("Channel create verification", function () {
  const e = waitForAnyChannelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChannel(k, ANY), function () {
    verifyChannelExists(k);
  });
});

bthread("Channel update verification", function () {
  const e = waitForAnyChannelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChannel(k, ANY), function () {
    verifyChannelUpdated(k);
  });
});

bthread("Channel delete verification", function () {
  const e = waitForAnyChannelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChannel(k, ANY), function () {
    verifyChannelDoesNotExist(k);
  });
});

bthread("Channelfolder create verification", function () {
  const e = waitForAnyChannelfolderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChannelfolder(k, ANY), function () {
    verifyChannelfolderExists(k);
  });
});

bthread("Channelfolder update verification", function () {
  const e = waitForAnyChannelfolderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChannelfolder(k, ANY), function () {
    verifyChannelfolderUpdated(k);
  });
});

bthread("Channelfolder delete verification", function () {
  const e = waitForAnyChannelfolderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChannelfolder(k, ANY), function () {
    verifyChannelfolderDoesNotExist(k);
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

bthread("Deactivate create verification", function () {
  const e = waitForAnyDeactivateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeactivate(k, ANY), function () {
    verifyDeactivateExists(k);
  });
});

bthread("Deactivate update verification", function () {
  const e = waitForAnyDeactivateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeactivate(k, ANY), function () {
    verifyDeactivateUpdated(k);
  });
});

bthread("Deactivate delete verification", function () {
  const e = waitForAnyDeactivateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeactivate(k, ANY), function () {
    verifyDeactivateDoesNotExist(k);
  });
});

bthread("Defaultstream create verification", function () {
  const e = waitForAnyDefaultstreamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultstream(k, ANY), function () {
    verifyDefaultstreamExists(k);
  });
});

bthread("Defaultstream update verification", function () {
  const e = waitForAnyDefaultstreamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultstream(k, ANY), function () {
    verifyDefaultstreamUpdated(k);
  });
});

bthread("Defaultstream delete verification", function () {
  const e = waitForAnyDefaultstreamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultstream(k, ANY), function () {
    verifyDefaultstreamDoesNotExist(k);
  });
});

bthread("Deletetopic create verification", function () {
  const e = waitForAnyDeletetopicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeletetopic(k, ANY), function () {
    verifyDeletetopicExists(k);
  });
});

bthread("Deletetopic update verification", function () {
  const e = waitForAnyDeletetopicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeletetopic(k, ANY), function () {
    verifyDeletetopicUpdated(k);
  });
});

bthread("Deletetopic delete verification", function () {
  const e = waitForAnyDeletetopicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeletetopic(k, ANY), function () {
    verifyDeletetopicDoesNotExist(k);
  });
});

bthread("Devfetchapikey create verification", function () {
  const e = waitForAnyDevfetchapikeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevfetchapikey(k, ANY), function () {
    verifyDevfetchapikeyExists(k);
  });
});

bthread("Devfetchapikey update verification", function () {
  const e = waitForAnyDevfetchapikeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevfetchapikey(k, ANY), function () {
    verifyDevfetchapikeyUpdated(k);
  });
});

bthread("Devfetchapikey delete verification", function () {
  const e = waitForAnyDevfetchapikeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevfetchapikey(k, ANY), function () {
    verifyDevfetchapikeyDoesNotExist(k);
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

bthread("E2ee create verification", function () {
  const e = waitForAnyE2eeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteE2ee(k, ANY), function () {
    verifyE2eeExists(k);
  });
});

bthread("E2ee update verification", function () {
  const e = waitForAnyE2eeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteE2ee(k, ANY), function () {
    verifyE2eeUpdated(k);
  });
});

bthread("E2ee delete verification", function () {
  const e = waitForAnyE2eeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddE2ee(k, ANY), function () {
    verifyE2eeDoesNotExist(k);
  });
});

bthread("Emailaddres create verification", function () {
  const e = waitForAnyEmailaddresAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmailaddres(k, ANY), function () {
    verifyEmailaddresExists(k);
  });
});

bthread("Emailaddres update verification", function () {
  const e = waitForAnyEmailaddresUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmailaddres(k, ANY), function () {
    verifyEmailaddresUpdated(k);
  });
});

bthread("Emailaddres delete verification", function () {
  const e = waitForAnyEmailaddresDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmailaddres(k, ANY), function () {
    verifyEmailaddresDoesNotExist(k);
  });
});

bthread("Emoji create verification", function () {
  const e = waitForAnyEmojiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmoji(k, ANY), function () {
    verifyEmojiExists(k);
  });
});

bthread("Emoji update verification", function () {
  const e = waitForAnyEmojiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmoji(k, ANY), function () {
    verifyEmojiUpdated(k);
  });
});

bthread("Emoji delete verification", function () {
  const e = waitForAnyEmojiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmoji(k, ANY), function () {
    verifyEmojiDoesNotExist(k);
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

bthread("Fetchapikey create verification", function () {
  const e = waitForAnyFetchapikeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFetchapikey(k, ANY), function () {
    verifyFetchapikeyExists(k);
  });
});

bthread("Fetchapikey update verification", function () {
  const e = waitForAnyFetchapikeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFetchapikey(k, ANY), function () {
    verifyFetchapikeyUpdated(k);
  });
});

bthread("Fetchapikey delete verification", function () {
  const e = waitForAnyFetchapikeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFetchapikey(k, ANY), function () {
    verifyFetchapikeyDoesNotExist(k);
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

bthread("Flag create verification", function () {
  const e = waitForAnyFlagAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFlag(k, ANY), function () {
    verifyFlagExists(k);
  });
});

bthread("Flag update verification", function () {
  const e = waitForAnyFlagUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFlag(k, ANY), function () {
    verifyFlagUpdated(k);
  });
});

bthread("Flag delete verification", function () {
  const e = waitForAnyFlagDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFlag(k, ANY), function () {
    verifyFlagDoesNotExist(k);
  });
});

bthread("Getstreamid create verification", function () {
  const e = waitForAnyGetstreamidAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGetstreamid(k, ANY), function () {
    verifyGetstreamidExists(k);
  });
});

bthread("Getstreamid update verification", function () {
  const e = waitForAnyGetstreamidUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGetstreamid(k, ANY), function () {
    verifyGetstreamidUpdated(k);
  });
});

bthread("Getstreamid delete verification", function () {
  const e = waitForAnyGetstreamidDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGetstreamid(k, ANY), function () {
    verifyGetstreamidDoesNotExist(k);
  });
});

bthread("History create verification", function () {
  const e = waitForAnyHistoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHistory(k, ANY), function () {
    verifyHistoryExists(k);
  });
});

bthread("History update verification", function () {
  const e = waitForAnyHistoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHistory(k, ANY), function () {
    verifyHistoryUpdated(k);
  });
});

bthread("History delete verification", function () {
  const e = waitForAnyHistoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHistory(k, ANY), function () {
    verifyHistoryDoesNotExist(k);
  });
});

bthread("Invite create verification", function () {
  const e = waitForAnyInviteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvite(k, ANY), function () {
    verifyInviteExists(k);
  });
});

bthread("Invite update verification", function () {
  const e = waitForAnyInviteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvite(k, ANY), function () {
    verifyInviteUpdated(k);
  });
});

bthread("Invite delete verification", function () {
  const e = waitForAnyInviteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInvite(k, ANY), function () {
    verifyInviteDoesNotExist(k);
  });
});

bthread("Linkifier create verification", function () {
  const e = waitForAnyLinkifierAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLinkifier(k, ANY), function () {
    verifyLinkifierExists(k);
  });
});

bthread("Linkifier update verification", function () {
  const e = waitForAnyLinkifierUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLinkifier(k, ANY), function () {
    verifyLinkifierUpdated(k);
  });
});

bthread("Linkifier delete verification", function () {
  const e = waitForAnyLinkifierDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLinkifier(k, ANY), function () {
    verifyLinkifierDoesNotExist(k);
  });
});

bthread("Markallasread create verification", function () {
  const e = waitForAnyMarkallasreadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkallasread(k, ANY), function () {
    verifyMarkallasreadExists(k);
  });
});

bthread("Markallasread update verification", function () {
  const e = waitForAnyMarkallasreadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkallasread(k, ANY), function () {
    verifyMarkallasreadUpdated(k);
  });
});

bthread("Markallasread delete verification", function () {
  const e = waitForAnyMarkallasreadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarkallasread(k, ANY), function () {
    verifyMarkallasreadDoesNotExist(k);
  });
});

bthread("Markstreamasread create verification", function () {
  const e = waitForAnyMarkstreamasreadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkstreamasread(k, ANY), function () {
    verifyMarkstreamasreadExists(k);
  });
});

bthread("Markstreamasread update verification", function () {
  const e = waitForAnyMarkstreamasreadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkstreamasread(k, ANY), function () {
    verifyMarkstreamasreadUpdated(k);
  });
});

bthread("Markstreamasread delete verification", function () {
  const e = waitForAnyMarkstreamasreadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarkstreamasread(k, ANY), function () {
    verifyMarkstreamasreadDoesNotExist(k);
  });
});

bthread("Marktopicasread create verification", function () {
  const e = waitForAnyMarktopicasreadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarktopicasread(k, ANY), function () {
    verifyMarktopicasreadExists(k);
  });
});

bthread("Marktopicasread update verification", function () {
  const e = waitForAnyMarktopicasreadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarktopicasread(k, ANY), function () {
    verifyMarktopicasreadUpdated(k);
  });
});

bthread("Marktopicasread delete verification", function () {
  const e = waitForAnyMarktopicasreadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarktopicasread(k, ANY), function () {
    verifyMarktopicasreadDoesNotExist(k);
  });
});

bthread("Matchesnarrow create verification", function () {
  const e = waitForAnyMatchesnarrowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMatchesnarrow(k, ANY), function () {
    verifyMatchesnarrowExists(k);
  });
});

bthread("Matchesnarrow update verification", function () {
  const e = waitForAnyMatchesnarrowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMatchesnarrow(k, ANY), function () {
    verifyMatchesnarrowUpdated(k);
  });
});

bthread("Matchesnarrow delete verification", function () {
  const e = waitForAnyMatchesnarrowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMatchesnarrow(k, ANY), function () {
    verifyMatchesnarrowDoesNotExist(k);
  });
});

bthread("Me create verification", function () {
  const e = waitForAnyMeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMe(k, ANY), function () {
    verifyMeExists(k);
  });
});

bthread("Me update verification", function () {
  const e = waitForAnyMeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMe(k, ANY), function () {
    verifyMeUpdated(k);
  });
});

bthread("Me delete verification", function () {
  const e = waitForAnyMeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMe(k, ANY), function () {
    verifyMeDoesNotExist(k);
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

bthread("Mobilepush create verification", function () {
  const e = waitForAnyMobilepushAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMobilepush(k, ANY), function () {
    verifyMobilepushExists(k);
  });
});

bthread("Mobilepush update verification", function () {
  const e = waitForAnyMobilepushUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMobilepush(k, ANY), function () {
    verifyMobilepushUpdated(k);
  });
});

bthread("Mobilepush delete verification", function () {
  const e = waitForAnyMobilepushDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMobilepush(k, ANY), function () {
    verifyMobilepushDoesNotExist(k);
  });
});

bthread("Multiuse create verification", function () {
  const e = waitForAnyMultiuseAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMultiuse(k, ANY), function () {
    verifyMultiuseExists(k);
  });
});

bthread("Multiuse update verification", function () {
  const e = waitForAnyMultiuseUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMultiuse(k, ANY), function () {
    verifyMultiuseUpdated(k);
  });
});

bthread("Multiuse delete verification", function () {
  const e = waitForAnyMultiuseDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMultiuse(k, ANY), function () {
    verifyMultiuseDoesNotExist(k);
  });
});

bthread("Mutedtopic create verification", function () {
  const e = waitForAnyMutedtopicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMutedtopic(k, ANY), function () {
    verifyMutedtopicExists(k);
  });
});

bthread("Mutedtopic update verification", function () {
  const e = waitForAnyMutedtopicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMutedtopic(k, ANY), function () {
    verifyMutedtopicUpdated(k);
  });
});

bthread("Mutedtopic delete verification", function () {
  const e = waitForAnyMutedtopicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMutedtopic(k, ANY), function () {
    verifyMutedtopicDoesNotExist(k);
  });
});

bthread("Muteduser create verification", function () {
  const e = waitForAnyMuteduserAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMuteduser(k, ANY), function () {
    verifyMuteduserExists(k);
  });
});

bthread("Muteduser update verification", function () {
  const e = waitForAnyMuteduserUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMuteduser(k, ANY), function () {
    verifyMuteduserUpdated(k);
  });
});

bthread("Muteduser delete verification", function () {
  const e = waitForAnyMuteduserDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMuteduser(k, ANY), function () {
    verifyMuteduserDoesNotExist(k);
  });
});

bthread("Narrow create verification", function () {
  const e = waitForAnyNarrowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNarrow(k, ANY), function () {
    verifyNarrowExists(k);
  });
});

bthread("Narrow update verification", function () {
  const e = waitForAnyNarrowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNarrow(k, ANY), function () {
    verifyNarrowUpdated(k);
  });
});

bthread("Narrow delete verification", function () {
  const e = waitForAnyNarrowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNarrow(k, ANY), function () {
    verifyNarrowDoesNotExist(k);
  });
});

bthread("Navigationview create verification", function () {
  const e = waitForAnyNavigationviewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNavigationview(k, ANY), function () {
    verifyNavigationviewExists(k);
  });
});

bthread("Navigationview update verification", function () {
  const e = waitForAnyNavigationviewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNavigationview(k, ANY), function () {
    verifyNavigationviewUpdated(k);
  });
});

bthread("Navigationview delete verification", function () {
  const e = waitForAnyNavigationviewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNavigationview(k, ANY), function () {
    verifyNavigationviewDoesNotExist(k);
  });
});

bthread("Playground create verification", function () {
  const e = waitForAnyPlaygroundAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlayground(k, ANY), function () {
    verifyPlaygroundExists(k);
  });
});

bthread("Playground update verification", function () {
  const e = waitForAnyPlaygroundUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlayground(k, ANY), function () {
    verifyPlaygroundUpdated(k);
  });
});

bthread("Playground delete verification", function () {
  const e = waitForAnyPlaygroundDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPlayground(k, ANY), function () {
    verifyPlaygroundDoesNotExist(k);
  });
});

bthread("Presence create verification", function () {
  const e = waitForAnyPresenceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePresence(k, ANY), function () {
    verifyPresenceExists(k);
  });
});

bthread("Presence update verification", function () {
  const e = waitForAnyPresenceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePresence(k, ANY), function () {
    verifyPresenceUpdated(k);
  });
});

bthread("Presence delete verification", function () {
  const e = waitForAnyPresenceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPresence(k, ANY), function () {
    verifyPresenceDoesNotExist(k);
  });
});

bthread("Profilefield create verification", function () {
  const e = waitForAnyProfilefieldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProfilefield(k, ANY), function () {
    verifyProfilefieldExists(k);
  });
});

bthread("Profilefield update verification", function () {
  const e = waitForAnyProfilefieldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProfilefield(k, ANY), function () {
    verifyProfilefieldUpdated(k);
  });
});

bthread("Profilefield delete verification", function () {
  const e = waitForAnyProfilefieldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProfilefield(k, ANY), function () {
    verifyProfilefieldDoesNotExist(k);
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

bthread("Push create verification", function () {
  const e = waitForAnyPushAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePush(k, ANY), function () {
    verifyPushExists(k);
  });
});

bthread("Push update verification", function () {
  const e = waitForAnyPushUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePush(k, ANY), function () {
    verifyPushUpdated(k);
  });
});

bthread("Push delete verification", function () {
  const e = waitForAnyPushDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPush(k, ANY), function () {
    verifyPushDoesNotExist(k);
  });
});

bthread("Reaction create verification", function () {
  const e = waitForAnyReactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReaction(k, ANY), function () {
    verifyReactionExists(k);
  });
});

bthread("Reaction update verification", function () {
  const e = waitForAnyReactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReaction(k, ANY), function () {
    verifyReactionUpdated(k);
  });
});

bthread("Reaction delete verification", function () {
  const e = waitForAnyReactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReaction(k, ANY), function () {
    verifyReactionDoesNotExist(k);
  });
});

bthread("Reactivate create verification", function () {
  const e = waitForAnyReactivateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReactivate(k, ANY), function () {
    verifyReactivateExists(k);
  });
});

bthread("Reactivate update verification", function () {
  const e = waitForAnyReactivateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReactivate(k, ANY), function () {
    verifyReactivateUpdated(k);
  });
});

bthread("Reactivate delete verification", function () {
  const e = waitForAnyReactivateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReactivate(k, ANY), function () {
    verifyReactivateDoesNotExist(k);
  });
});

bthread("Readreceipt create verification", function () {
  const e = waitForAnyReadreceiptAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReadreceipt(k, ANY), function () {
    verifyReadreceiptExists(k);
  });
});

bthread("Readreceipt update verification", function () {
  const e = waitForAnyReadreceiptUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReadreceipt(k, ANY), function () {
    verifyReadreceiptUpdated(k);
  });
});

bthread("Readreceipt delete verification", function () {
  const e = waitForAnyReadreceiptDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReadreceipt(k, ANY), function () {
    verifyReadreceiptDoesNotExist(k);
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

bthread("Realtime create verification", function () {
  const e = waitForAnyRealtimeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRealtime(k, ANY), function () {
    verifyRealtimeExists(k);
  });
});

bthread("Realtime update verification", function () {
  const e = waitForAnyRealtimeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRealtime(k, ANY), function () {
    verifyRealtimeUpdated(k);
  });
});

bthread("Realtime delete verification", function () {
  const e = waitForAnyRealtimeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRealtime(k, ANY), function () {
    verifyRealtimeDoesNotExist(k);
  });
});

bthread("Register create verification", function () {
  const e = waitForAnyRegisterAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegister(k, ANY), function () {
    verifyRegisterExists(k);
  });
});

bthread("Register update verification", function () {
  const e = waitForAnyRegisterUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegister(k, ANY), function () {
    verifyRegisterUpdated(k);
  });
});

bthread("Register delete verification", function () {
  const e = waitForAnyRegisterDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRegister(k, ANY), function () {
    verifyRegisterDoesNotExist(k);
  });
});

bthread("Reminder create verification", function () {
  const e = waitForAnyReminderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReminder(k, ANY), function () {
    verifyReminderExists(k);
  });
});

bthread("Reminder update verification", function () {
  const e = waitForAnyReminderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReminder(k, ANY), function () {
    verifyReminderUpdated(k);
  });
});

bthread("Reminder delete verification", function () {
  const e = waitForAnyReminderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReminder(k, ANY), function () {
    verifyReminderDoesNotExist(k);
  });
});

bthread("Remote create verification", function () {
  const e = waitForAnyRemoteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemote(k, ANY), function () {
    verifyRemoteExists(k);
  });
});

bthread("Remote update verification", function () {
  const e = waitForAnyRemoteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemote(k, ANY), function () {
    verifyRemoteUpdated(k);
  });
});

bthread("Remote delete verification", function () {
  const e = waitForAnyRemoteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemote(k, ANY), function () {
    verifyRemoteDoesNotExist(k);
  });
});

bthread("Render create verification", function () {
  const e = waitForAnyRenderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRender(k, ANY), function () {
    verifyRenderExists(k);
  });
});

bthread("Render update verification", function () {
  const e = waitForAnyRenderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRender(k, ANY), function () {
    verifyRenderUpdated(k);
  });
});

bthread("Render delete verification", function () {
  const e = waitForAnyRenderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRender(k, ANY), function () {
    verifyRenderDoesNotExist(k);
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

bthread("Resend create verification", function () {
  const e = waitForAnyResendAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResend(k, ANY), function () {
    verifyResendExists(k);
  });
});

bthread("Resend update verification", function () {
  const e = waitForAnyResendUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResend(k, ANY), function () {
    verifyResendUpdated(k);
  });
});

bthread("Resend delete verification", function () {
  const e = waitForAnyResendDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddResend(k, ANY), function () {
    verifyResendDoesNotExist(k);
  });
});

bthread("Resterrorhandling create verification", function () {
  const e = waitForAnyResterrorhandlingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResterrorhandling(k, ANY), function () {
    verifyResterrorhandlingExists(k);
  });
});

bthread("Resterrorhandling update verification", function () {
  const e = waitForAnyResterrorhandlingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteResterrorhandling(k, ANY), function () {
    verifyResterrorhandlingUpdated(k);
  });
});

bthread("Resterrorhandling delete verification", function () {
  const e = waitForAnyResterrorhandlingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddResterrorhandling(k, ANY), function () {
    verifyResterrorhandlingDoesNotExist(k);
  });
});

bthread("Savedsnippet create verification", function () {
  const e = waitForAnySavedsnippetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavedsnippet(k, ANY), function () {
    verifySavedsnippetExists(k);
  });
});

bthread("Savedsnippet update verification", function () {
  const e = waitForAnySavedsnippetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavedsnippet(k, ANY), function () {
    verifySavedsnippetUpdated(k);
  });
});

bthread("Savedsnippet delete verification", function () {
  const e = waitForAnySavedsnippetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSavedsnippet(k, ANY), function () {
    verifySavedsnippetDoesNotExist(k);
  });
});

bthread("Scheduledmessage create verification", function () {
  const e = waitForAnyScheduledmessageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScheduledmessage(k, ANY), function () {
    verifyScheduledmessageExists(k);
  });
});

bthread("Scheduledmessage update verification", function () {
  const e = waitForAnyScheduledmessageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScheduledmessage(k, ANY), function () {
    verifyScheduledmessageUpdated(k);
  });
});

bthread("Scheduledmessage delete verification", function () {
  const e = waitForAnyScheduledmessageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScheduledmessage(k, ANY), function () {
    verifyScheduledmessageDoesNotExist(k);
  });
});

bthread("Serversetting create verification", function () {
  const e = waitForAnyServersettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServersetting(k, ANY), function () {
    verifyServersettingExists(k);
  });
});

bthread("Serversetting update verification", function () {
  const e = waitForAnyServersettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServersetting(k, ANY), function () {
    verifyServersettingUpdated(k);
  });
});

bthread("Serversetting delete verification", function () {
  const e = waitForAnyServersettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddServersetting(k, ANY), function () {
    verifyServersettingDoesNotExist(k);
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

bthread("Subgroup create verification", function () {
  const e = waitForAnySubgroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubgroup(k, ANY), function () {
    verifySubgroupExists(k);
  });
});

bthread("Subgroup update verification", function () {
  const e = waitForAnySubgroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubgroup(k, ANY), function () {
    verifySubgroupUpdated(k);
  });
});

bthread("Subgroup delete verification", function () {
  const e = waitForAnySubgroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubgroup(k, ANY), function () {
    verifySubgroupDoesNotExist(k);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscription(k, ANY), function () {
    verifySubscriptionExists(k);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscription(k, ANY), function () {
    verifySubscriptionUpdated(k);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubscription(k, ANY), function () {
    verifySubscriptionDoesNotExist(k);
  });
});

bthread("Testnotification create verification", function () {
  const e = waitForAnyTestnotificationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestnotification(k, ANY), function () {
    verifyTestnotificationExists(k);
  });
});

bthread("Testnotification update verification", function () {
  const e = waitForAnyTestnotificationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestnotification(k, ANY), function () {
    verifyTestnotificationUpdated(k);
  });
});

bthread("Testnotification delete verification", function () {
  const e = waitForAnyTestnotificationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTestnotification(k, ANY), function () {
    verifyTestnotificationDoesNotExist(k);
  });
});

bthread("Testwelcomebotcustommessage create verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestwelcomebotcustommessage(k, ANY), function () {
    verifyTestwelcomebotcustommessageExists(k);
  });
});

bthread("Testwelcomebotcustommessage update verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTestwelcomebotcustommessage(k, ANY), function () {
    verifyTestwelcomebotcustommessageUpdated(k);
  });
});

bthread("Testwelcomebotcustommessage delete verification", function () {
  const e = waitForAnyTestwelcomebotcustommessageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTestwelcomebotcustommessage(k, ANY), function () {
    verifyTestwelcomebotcustommessageDoesNotExist(k);
  });
});

bthread("Topic create verification", function () {
  const e = waitForAnyTopicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTopic(k, ANY), function () {
    verifyTopicExists(k);
  });
});

bthread("Topic update verification", function () {
  const e = waitForAnyTopicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTopic(k, ANY), function () {
    verifyTopicUpdated(k);
  });
});

bthread("Topic delete verification", function () {
  const e = waitForAnyTopicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTopic(k, ANY), function () {
    verifyTopicDoesNotExist(k);
  });
});

bthread("Typing create verification", function () {
  const e = waitForAnyTypingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTyping(k, ANY), function () {
    verifyTypingExists(k);
  });
});

bthread("Typing update verification", function () {
  const e = waitForAnyTypingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTyping(k, ANY), function () {
    verifyTypingUpdated(k);
  });
});

bthread("Typing delete verification", function () {
  const e = waitForAnyTypingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTyping(k, ANY), function () {
    verifyTypingDoesNotExist(k);
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

bthread("Usergroup create verification", function () {
  const e = waitForAnyUsergroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsergroup(k, ANY), function () {
    verifyUsergroupExists(k);
  });
});

bthread("Usergroup update verification", function () {
  const e = waitForAnyUsergroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsergroup(k, ANY), function () {
    verifyUsergroupUpdated(k);
  });
});

bthread("Usergroup delete verification", function () {
  const e = waitForAnyUsergroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsergroup(k, ANY), function () {
    verifyUsergroupDoesNotExist(k);
  });
});

bthread("Usersettingsdefault create verification", function () {
  const e = waitForAnyUsersettingsdefaultAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsersettingsdefault(k, ANY), function () {
    verifyUsersettingsdefaultExists(k);
  });
});

bthread("Usersettingsdefault update verification", function () {
  const e = waitForAnyUsersettingsdefaultUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsersettingsdefault(k, ANY), function () {
    verifyUsersettingsdefaultUpdated(k);
  });
});

bthread("Usersettingsdefault delete verification", function () {
  const e = waitForAnyUsersettingsdefaultDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsersettingsdefault(k, ANY), function () {
    verifyUsersettingsdefaultDoesNotExist(k);
  });
});

bthread("Usertopic create verification", function () {
  const e = waitForAnyUsertopicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsertopic(k, ANY), function () {
    verifyUsertopicExists(k);
  });
});

bthread("Usertopic update verification", function () {
  const e = waitForAnyUsertopicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsertopic(k, ANY), function () {
    verifyUsertopicUpdated(k);
  });
});

bthread("Usertopic delete verification", function () {
  const e = waitForAnyUsertopicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsertopic(k, ANY), function () {
    verifyUsertopicDoesNotExist(k);
  });
});

bthread("Userupload create verification", function () {
  const e = waitForAnyUseruploadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserupload(k, ANY), function () {
    verifyUseruploadExists(k);
  });
});

bthread("Userupload update verification", function () {
  const e = waitForAnyUseruploadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserupload(k, ANY), function () {
    verifyUseruploadUpdated(k);
  });
});

bthread("Userupload delete verification", function () {
  const e = waitForAnyUseruploadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserupload(k, ANY), function () {
    verifyUseruploadDoesNotExist(k);
  });
});

bthread("Zulipoutgoingwebhook create verification", function () {
  const e = waitForAnyZulipoutgoingwebhookAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteZulipoutgoingwebhook(k, ANY), function () {
    verifyZulipoutgoingwebhookExists(k);
  });
});

bthread("Zulipoutgoingwebhook update verification", function () {
  const e = waitForAnyZulipoutgoingwebhookUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteZulipoutgoingwebhook(k, ANY), function () {
    verifyZulipoutgoingwebhookUpdated(k);
  });
});

bthread("Zulipoutgoingwebhook delete verification", function () {
  const e = waitForAnyZulipoutgoingwebhookDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddZulipoutgoingwebhook(k, ANY), function () {
    verifyZulipoutgoingwebhookDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Alertword", function () {
  const x = waitForAnyAlertwordAdded();
  block(matchAddAlertword(x.id, ANY), function () {});
});

bthread("Guard: Unique Androidgcmregid", function () {
  const x = waitForAnyAndroidgcmregidAdded();
  block(matchAddAndroidgcmregid(x.id, ANY), function () {});
});

bthread("Guard: Unique Apnsdevicetoken", function () {
  const x = waitForAnyApnsdevicetokenAdded();
  block(matchAddApnsdevicetoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  block(matchAddAttachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Bigbluebutton", function () {
  const x = waitForAnyBigbluebuttonAdded();
  block(matchAddBigbluebutton(x.id, ANY), function () {});
});

bthread("Guard: Unique Call", function () {
  const x = waitForAnyCallAdded();
  block(matchAddCall(x.id, ANY), function () {});
});

bthread("Guard: Unique Channel", function () {
  const x = waitForAnyChannelAdded();
  block(matchAddChannel(x.id, ANY), function () {});
});

bthread("Guard: Unique Channelfolder", function () {
  const x = waitForAnyChannelfolderAdded();
  block(matchAddChannelfolder(x.id, ANY), function () {});
});

bthread("Guard: Unique Consent", function () {
  const x = waitForAnyConsentAdded();
  block(matchAddConsent(x.id, ANY), function () {});
});

bthread("Guard: Unique Create", function () {
  const x = waitForAnyCreateAdded();
  block(matchAddCreate(x.id, ANY), function () {});
});

bthread("Guard: Unique Deactivate", function () {
  const x = waitForAnyDeactivateAdded();
  block(matchAddDeactivate(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultstream", function () {
  const x = waitForAnyDefaultstreamAdded();
  block(matchAddDefaultstream(x.id, ANY), function () {});
});

bthread("Guard: Unique Deletetopic", function () {
  const x = waitForAnyDeletetopicAdded();
  block(matchAddDeletetopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Devfetchapikey", function () {
  const x = waitForAnyDevfetchapikeyAdded();
  block(matchAddDevfetchapikey(x.id, ANY), function () {});
});

bthread("Guard: Unique Draft", function () {
  const x = waitForAnyDraftAdded();
  block(matchAddDraft(x.id, ANY), function () {});
});

bthread("Guard: Unique E2ee", function () {
  const x = waitForAnyE2eeAdded();
  block(matchAddE2ee(x.id, ANY), function () {});
});

bthread("Guard: Unique Emailaddres", function () {
  const x = waitForAnyEmailaddresAdded();
  block(matchAddEmailaddres(x.id, ANY), function () {});
});

bthread("Guard: Unique Emoji", function () {
  const x = waitForAnyEmojiAdded();
  block(matchAddEmoji(x.id, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  block(matchAddEvent(x.id, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  block(matchAddExport(x.id, ANY), function () {});
});

bthread("Guard: Unique Fetchapikey", function () {
  const x = waitForAnyFetchapikeyAdded();
  block(matchAddFetchapikey(x.id, ANY), function () {});
});

bthread("Guard: Unique Filter", function () {
  const x = waitForAnyFilterAdded();
  block(matchAddFilter(x.id, ANY), function () {});
});

bthread("Guard: Unique Flag", function () {
  const x = waitForAnyFlagAdded();
  block(matchAddFlag(x.id, ANY), function () {});
});

bthread("Guard: Unique Getstreamid", function () {
  const x = waitForAnyGetstreamidAdded();
  block(matchAddGetstreamid(x.id, ANY), function () {});
});

bthread("Guard: Unique History", function () {
  const x = waitForAnyHistoryAdded();
  block(matchAddHistory(x.id, ANY), function () {});
});

bthread("Guard: Unique Invite", function () {
  const x = waitForAnyInviteAdded();
  block(matchAddInvite(x.id, ANY), function () {});
});

bthread("Guard: Unique Linkifier", function () {
  const x = waitForAnyLinkifierAdded();
  block(matchAddLinkifier(x.id, ANY), function () {});
});

bthread("Guard: Unique Markallasread", function () {
  const x = waitForAnyMarkallasreadAdded();
  block(matchAddMarkallasread(x.id, ANY), function () {});
});

bthread("Guard: Unique Markstreamasread", function () {
  const x = waitForAnyMarkstreamasreadAdded();
  block(matchAddMarkstreamasread(x.id, ANY), function () {});
});

bthread("Guard: Unique Marktopicasread", function () {
  const x = waitForAnyMarktopicasreadAdded();
  block(matchAddMarktopicasread(x.id, ANY), function () {});
});

bthread("Guard: Unique Matchesnarrow", function () {
  const x = waitForAnyMatchesnarrowAdded();
  block(matchAddMatchesnarrow(x.id, ANY), function () {});
});

bthread("Guard: Unique Me", function () {
  const x = waitForAnyMeAdded();
  block(matchAddMe(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Message", function () {
  const x = waitForAnyMessageAdded();
  block(matchAddMessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Mobilepush", function () {
  const x = waitForAnyMobilepushAdded();
  block(matchAddMobilepush(x.id, ANY), function () {});
});

bthread("Guard: Unique Multiuse", function () {
  const x = waitForAnyMultiuseAdded();
  block(matchAddMultiuse(x.id, ANY), function () {});
});

bthread("Guard: Unique Mutedtopic", function () {
  const x = waitForAnyMutedtopicAdded();
  block(matchAddMutedtopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Muteduser", function () {
  const x = waitForAnyMuteduserAdded();
  block(matchAddMuteduser(x.id, ANY), function () {});
});

bthread("Guard: Unique Narrow", function () {
  const x = waitForAnyNarrowAdded();
  block(matchAddNarrow(x.id, ANY), function () {});
});

bthread("Guard: Unique Navigationview", function () {
  const x = waitForAnyNavigationviewAdded();
  block(matchAddNavigationview(x.id, ANY), function () {});
});

bthread("Guard: Unique Playground", function () {
  const x = waitForAnyPlaygroundAdded();
  block(matchAddPlayground(x.id, ANY), function () {});
});

bthread("Guard: Unique Presence", function () {
  const x = waitForAnyPresenceAdded();
  block(matchAddPresence(x.id, ANY), function () {});
});

bthread("Guard: Unique Profilefield", function () {
  const x = waitForAnyProfilefieldAdded();
  block(matchAddProfilefield(x.id, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  block(matchAddProperty(x.id, ANY), function () {});
});

bthread("Guard: Unique Push", function () {
  const x = waitForAnyPushAdded();
  block(matchAddPush(x.id, ANY), function () {});
});

bthread("Guard: Unique Reaction", function () {
  const x = waitForAnyReactionAdded();
  block(matchAddReaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Reactivate", function () {
  const x = waitForAnyReactivateAdded();
  block(matchAddReactivate(x.id, ANY), function () {});
});

bthread("Guard: Unique Readreceipt", function () {
  const x = waitForAnyReadreceiptAdded();
  block(matchAddReadreceipt(x.id, ANY), function () {});
});

bthread("Guard: Unique Realm", function () {
  const x = waitForAnyRealmAdded();
  block(matchAddRealm(x.id, ANY), function () {});
});

bthread("Guard: Unique Realtime", function () {
  const x = waitForAnyRealtimeAdded();
  block(matchAddRealtime(x.id, ANY), function () {});
});

bthread("Guard: Unique Register", function () {
  const x = waitForAnyRegisterAdded();
  block(matchAddRegister(x.id, ANY), function () {});
});

bthread("Guard: Unique Reminder", function () {
  const x = waitForAnyReminderAdded();
  block(matchAddReminder(x.id, ANY), function () {});
});

bthread("Guard: Unique Remote", function () {
  const x = waitForAnyRemoteAdded();
  block(matchAddRemote(x.id, ANY), function () {});
});

bthread("Guard: Unique Render", function () {
  const x = waitForAnyRenderAdded();
  block(matchAddRender(x.id, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  block(matchAddReport(x.id, ANY), function () {});
});

bthread("Guard: Unique Resend", function () {
  const x = waitForAnyResendAdded();
  block(matchAddResend(x.id, ANY), function () {});
});

bthread("Guard: Unique Resterrorhandling", function () {
  const x = waitForAnyResterrorhandlingAdded();
  block(matchAddResterrorhandling(x.id, ANY), function () {});
});

bthread("Guard: Unique Savedsnippet", function () {
  const x = waitForAnySavedsnippetAdded();
  block(matchAddSavedsnippet(x.id, ANY), function () {});
});

bthread("Guard: Unique Scheduledmessage", function () {
  const x = waitForAnyScheduledmessageAdded();
  block(matchAddScheduledmessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Serversetting", function () {
  const x = waitForAnyServersettingAdded();
  block(matchAddServersetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Stream", function () {
  const x = waitForAnyStreamAdded();
  block(matchAddStream(x.id, ANY), function () {});
});

bthread("Guard: Unique Subgroup", function () {
  const x = waitForAnySubgroupAdded();
  block(matchAddSubgroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  block(matchAddSubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Testnotification", function () {
  const x = waitForAnyTestnotificationAdded();
  block(matchAddTestnotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Testwelcomebotcustommessage", function () {
  const x = waitForAnyTestwelcomebotcustommessageAdded();
  block(matchAddTestwelcomebotcustommessage(x.id, ANY), function () {});
});

bthread("Guard: Unique Topic", function () {
  const x = waitForAnyTopicAdded();
  block(matchAddTopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Typing", function () {
  const x = waitForAnyTypingAdded();
  block(matchAddTyping(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Usergroup", function () {
  const x = waitForAnyUsergroupAdded();
  block(matchAddUsergroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Usersettingsdefault", function () {
  const x = waitForAnyUsersettingsdefaultAdded();
  block(matchAddUsersettingsdefault(x.id, ANY), function () {});
});

bthread("Guard: Unique Usertopic", function () {
  const x = waitForAnyUsertopicAdded();
  block(matchAddUsertopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Userupload", function () {
  const x = waitForAnyUseruploadAdded();
  block(matchAddUserupload(x.id, ANY), function () {});
});

bthread("Guard: Unique Zulipoutgoingwebhook", function () {
  const x = waitForAnyZulipoutgoingwebhookAdded();
  block(matchAddZulipoutgoingwebhook(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
