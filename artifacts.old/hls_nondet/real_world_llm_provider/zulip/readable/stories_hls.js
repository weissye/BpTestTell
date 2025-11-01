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


bthread("AllpublicchannelsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAllpublicchannels(x.id);
  const e_add = waitForAllpublicchannelsAdded(id);
  block(matchDeleteAllpublicchannels(id), function () {
    verifyAllpublicchannelsExists(id);
  });
  updateAllpublicchannels(x.id);
  updateAllpublicchannels(x.id);
  const e_upd = waitForAllpublicchannelsUpdated(id);
  block(matchDeleteAllpublicchannels(id), function () {
    verifyAllpublicchannelsUpdated(id);
  });
  deleteAllpublicchannels(x.id);
  const e_del = waitForAllpublicchannelsDeleted(id);
  block(matchAddAllpublicchannels(id), function () {
    verifyAllpublicchannelsDoesNotExist(id);
  });
});

bthread("AnchorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAnchor(x.id);
  const e_add = waitForAnchorAdded(id);
  block(matchDeleteAnchor(id), function () {
    verifyAnchorExists(id);
  });
  updateAnchor(x.id);
  updateAnchor(x.id);
  const e_upd = waitForAnchorUpdated(id);
  block(matchDeleteAnchor(id), function () {
    verifyAnchorUpdated(id);
  });
  deleteAnchor(x.id);
  const e_del = waitForAnchorDeleted(id);
  block(matchAddAnchor(id), function () {
    verifyAnchorDoesNotExist(id);
  });
});

bthread("ApikeyresponseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApikeyresponse(x.id);
  const e_add = waitForApikeyresponseAdded(id);
  block(matchDeleteApikeyresponse(id), function () {
    verifyApikeyresponseExists(id);
  });
  updateApikeyresponse(x.id);
  updateApikeyresponse(x.id);
  const e_upd = waitForApikeyresponseUpdated(id);
  block(matchDeleteApikeyresponse(id), function () {
    verifyApikeyresponseUpdated(id);
  });
  deleteApikeyresponse(x.id);
  const e_del = waitForApikeyresponseDeleted(id);
  block(matchAddApikeyresponse(id), function () {
    verifyApikeyresponseDoesNotExist(id);
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

bthread("BadeventqueueiderrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBadeventqueueiderror(x.id);
  const e_add = waitForBadeventqueueiderrorAdded(id);
  block(matchDeleteBadeventqueueiderror(id), function () {
    verifyBadeventqueueiderrorExists(id);
  });
  updateBadeventqueueiderror(x.id);
  updateBadeventqueueiderror(x.id);
  const e_upd = waitForBadeventqueueiderrorUpdated(id);
  block(matchDeleteBadeventqueueiderror(id), function () {
    verifyBadeventqueueiderrorUpdated(id);
  });
  deleteBadeventqueueiderror(x.id);
  const e_del = waitForBadeventqueueiderrorDeleted(id);
  block(matchAddBadeventqueueiderror(id), function () {
    verifyBadeventqueueiderrorDoesNotExist(id);
  });
});

bthread("BasicbotLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBasicbot(x.id);
  const e_add = waitForBasicbotAdded(id);
  block(matchDeleteBasicbot(id), function () {
    verifyBasicbotExists(id);
  });
  updateBasicbot(x.id);
  updateBasicbot(x.id);
  const e_upd = waitForBasicbotUpdated(id);
  block(matchDeleteBasicbot(id), function () {
    verifyBasicbotUpdated(id);
  });
  deleteBasicbot(x.id);
  const e_del = waitForBasicbotDeleted(id);
  block(matchAddBasicbot(id), function () {
    verifyBasicbotDoesNotExist(id);
  });
});

bthread("BasicbotbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBasicbotbase(x.id);
  const e_add = waitForBasicbotbaseAdded(id);
  block(matchDeleteBasicbotbase(id), function () {
    verifyBasicbotbaseExists(id);
  });
  updateBasicbotbase(x.id);
  updateBasicbotbase(x.id);
  const e_upd = waitForBasicbotbaseUpdated(id);
  block(matchDeleteBasicbotbase(id), function () {
    verifyBasicbotbaseUpdated(id);
  });
  deleteBasicbotbase(x.id);
  const e_del = waitForBasicbotbaseDeleted(id);
  block(matchAddBasicbotbase(id), function () {
    verifyBasicbotbaseDoesNotExist(id);
  });
});

bthread("BasicchannelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBasicchannel(x.id);
  const e_add = waitForBasicchannelAdded(id);
  block(matchDeleteBasicchannel(id), function () {
    verifyBasicchannelExists(id);
  });
  updateBasicchannel(x.id);
  updateBasicchannel(x.id);
  const e_upd = waitForBasicchannelUpdated(id);
  block(matchDeleteBasicchannel(id), function () {
    verifyBasicchannelUpdated(id);
  });
  deleteBasicchannel(x.id);
  const e_del = waitForBasicchannelDeleted(id);
  block(matchAddBasicchannel(id), function () {
    verifyBasicchannelDoesNotExist(id);
  });
});

bthread("BasicchannelbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBasicchannelbase(x.id);
  const e_add = waitForBasicchannelbaseAdded(id);
  block(matchDeleteBasicchannelbase(id), function () {
    verifyBasicchannelbaseExists(id);
  });
  updateBasicchannelbase(x.id);
  updateBasicchannelbase(x.id);
  const e_upd = waitForBasicchannelbaseUpdated(id);
  block(matchDeleteBasicchannelbase(id), function () {
    verifyBasicchannelbaseUpdated(id);
  });
  deleteBasicchannelbase(x.id);
  const e_del = waitForBasicchannelbaseDeleted(id);
  block(matchAddBasicchannelbase(id), function () {
    verifyBasicchannelbaseDoesNotExist(id);
  });
});

bthread("BotLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBot(x.id);
  const e_add = waitForBotAdded(id);
  block(matchDeleteBot(id), function () {
    verifyBotExists(id);
  });
  updateBot(x.id);
  updateBot(x.id);
  const e_upd = waitForBotUpdated(id);
  block(matchDeleteBot(id), function () {
    verifyBotUpdated(id);
  });
  deleteBot(x.id);
  const e_del = waitForBotDeleted(id);
  block(matchAddBot(id), function () {
    verifyBotDoesNotExist(id);
  });
});

bthread("BotconfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBotconfiguration(x.id);
  const e_add = waitForBotconfigurationAdded(id);
  block(matchDeleteBotconfiguration(id), function () {
    verifyBotconfigurationExists(id);
  });
  updateBotconfiguration(x.id);
  updateBotconfiguration(x.id);
  const e_upd = waitForBotconfigurationUpdated(id);
  block(matchDeleteBotconfiguration(id), function () {
    verifyBotconfigurationUpdated(id);
  });
  deleteBotconfiguration(x.id);
  const e_del = waitForBotconfigurationDeleted(id);
  block(matchAddBotconfiguration(id), function () {
    verifyBotconfigurationDoesNotExist(id);
  });
});

bthread("CanadministerchannelgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCanadministerchannelgroup(x.id);
  const e_add = waitForCanadministerchannelgroupAdded(id);
  block(matchDeleteCanadministerchannelgroup(id), function () {
    verifyCanadministerchannelgroupExists(id);
  });
  updateCanadministerchannelgroup(x.id);
  updateCanadministerchannelgroup(x.id);
  const e_upd = waitForCanadministerchannelgroupUpdated(id);
  block(matchDeleteCanadministerchannelgroup(id), function () {
    verifyCanadministerchannelgroupUpdated(id);
  });
  deleteCanadministerchannelgroup(x.id);
  const e_del = waitForCanadministerchannelgroupDeleted(id);
  block(matchAddCanadministerchannelgroup(id), function () {
    verifyCanadministerchannelgroupDoesNotExist(id);
  });
});

bthread("CandeleteanymessagegroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCandeleteanymessagegroup(x.id);
  const e_add = waitForCandeleteanymessagegroupAdded(id);
  block(matchDeleteCandeleteanymessagegroup(id), function () {
    verifyCandeleteanymessagegroupExists(id);
  });
  updateCandeleteanymessagegroup(x.id);
  updateCandeleteanymessagegroup(x.id);
  const e_upd = waitForCandeleteanymessagegroupUpdated(id);
  block(matchDeleteCandeleteanymessagegroup(id), function () {
    verifyCandeleteanymessagegroupUpdated(id);
  });
  deleteCandeleteanymessagegroup(x.id);
  const e_del = waitForCandeleteanymessagegroupDeleted(id);
  block(matchAddCandeleteanymessagegroup(id), function () {
    verifyCandeleteanymessagegroupDoesNotExist(id);
  });
});

bthread("CandeleteownmessagegroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCandeleteownmessagegroup(x.id);
  const e_add = waitForCandeleteownmessagegroupAdded(id);
  block(matchDeleteCandeleteownmessagegroup(id), function () {
    verifyCandeleteownmessagegroupExists(id);
  });
  updateCandeleteownmessagegroup(x.id);
  updateCandeleteownmessagegroup(x.id);
  const e_upd = waitForCandeleteownmessagegroupUpdated(id);
  block(matchDeleteCandeleteownmessagegroup(id), function () {
    verifyCandeleteownmessagegroupUpdated(id);
  });
  deleteCandeleteownmessagegroup(x.id);
  const e_del = waitForCandeleteownmessagegroupDeleted(id);
  block(matchAddCandeleteownmessagegroup(id), function () {
    verifyCandeleteownmessagegroupDoesNotExist(id);
  });
});

bthread("CanmovemessagesoutofchannelgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCanmovemessagesoutofchannelgroup(x.id);
  const e_add = waitForCanmovemessagesoutofchannelgroupAdded(id);
  block(matchDeleteCanmovemessagesoutofchannelgroup(id), function () {
    verifyCanmovemessagesoutofchannelgroupExists(id);
  });
  updateCanmovemessagesoutofchannelgroup(x.id);
  updateCanmovemessagesoutofchannelgroup(x.id);
  const e_upd = waitForCanmovemessagesoutofchannelgroupUpdated(id);
  block(matchDeleteCanmovemessagesoutofchannelgroup(id), function () {
    verifyCanmovemessagesoutofchannelgroupUpdated(id);
  });
  deleteCanmovemessagesoutofchannelgroup(x.id);
  const e_del = waitForCanmovemessagesoutofchannelgroupDeleted(id);
  block(matchAddCanmovemessagesoutofchannelgroup(id), function () {
    verifyCanmovemessagesoutofchannelgroupDoesNotExist(id);
  });
});

bthread("CanmovemessageswithinchannelgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCanmovemessageswithinchannelgroup(x.id);
  const e_add = waitForCanmovemessageswithinchannelgroupAdded(id);
  block(matchDeleteCanmovemessageswithinchannelgroup(id), function () {
    verifyCanmovemessageswithinchannelgroupExists(id);
  });
  updateCanmovemessageswithinchannelgroup(x.id);
  updateCanmovemessageswithinchannelgroup(x.id);
  const e_upd = waitForCanmovemessageswithinchannelgroupUpdated(id);
  block(matchDeleteCanmovemessageswithinchannelgroup(id), function () {
    verifyCanmovemessageswithinchannelgroupUpdated(id);
  });
  deleteCanmovemessageswithinchannelgroup(x.id);
  const e_del = waitForCanmovemessageswithinchannelgroupDeleted(id);
  block(matchAddCanmovemessageswithinchannelgroup(id), function () {
    verifyCanmovemessageswithinchannelgroupDoesNotExist(id);
  });
});

bthread("CanremovesubscribersgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCanremovesubscribersgroup(x.id);
  const e_add = waitForCanremovesubscribersgroupAdded(id);
  block(matchDeleteCanremovesubscribersgroup(id), function () {
    verifyCanremovesubscribersgroupExists(id);
  });
  updateCanremovesubscribersgroup(x.id);
  updateCanremovesubscribersgroup(x.id);
  const e_upd = waitForCanremovesubscribersgroupUpdated(id);
  block(matchDeleteCanremovesubscribersgroup(id), function () {
    verifyCanremovesubscribersgroupUpdated(id);
  });
  deleteCanremovesubscribersgroup(x.id);
  const e_del = waitForCanremovesubscribersgroupDeleted(id);
  block(matchAddCanremovesubscribersgroup(id), function () {
    verifyCanremovesubscribersgroupDoesNotExist(id);
  });
});

bthread("CanresolvetopicsgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCanresolvetopicsgroup(x.id);
  const e_add = waitForCanresolvetopicsgroupAdded(id);
  block(matchDeleteCanresolvetopicsgroup(id), function () {
    verifyCanresolvetopicsgroupExists(id);
  });
  updateCanresolvetopicsgroup(x.id);
  updateCanresolvetopicsgroup(x.id);
  const e_upd = waitForCanresolvetopicsgroupUpdated(id);
  block(matchDeleteCanresolvetopicsgroup(id), function () {
    verifyCanresolvetopicsgroupUpdated(id);
  });
  deleteCanresolvetopicsgroup(x.id);
  const e_del = waitForCanresolvetopicsgroupDeleted(id);
  block(matchAddCanresolvetopicsgroup(id), function () {
    verifyCanresolvetopicsgroupDoesNotExist(id);
  });
});

bthread("CansendmessagegroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCansendmessagegroup(x.id);
  const e_add = waitForCansendmessagegroupAdded(id);
  block(matchDeleteCansendmessagegroup(id), function () {
    verifyCansendmessagegroupExists(id);
  });
  updateCansendmessagegroup(x.id);
  updateCansendmessagegroup(x.id);
  const e_upd = waitForCansendmessagegroupUpdated(id);
  block(matchDeleteCansendmessagegroup(id), function () {
    verifyCansendmessagegroupUpdated(id);
  });
  deleteCansendmessagegroup(x.id);
  const e_del = waitForCansendmessagegroupDeleted(id);
  block(matchAddCansendmessagegroup(id), function () {
    verifyCansendmessagegroupDoesNotExist(id);
  });
});

bthread("CansubscribegroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCansubscribegroup(x.id);
  const e_add = waitForCansubscribegroupAdded(id);
  block(matchDeleteCansubscribegroup(id), function () {
    verifyCansubscribegroupExists(id);
  });
  updateCansubscribegroup(x.id);
  updateCansubscribegroup(x.id);
  const e_upd = waitForCansubscribegroupUpdated(id);
  block(matchDeleteCansubscribegroup(id), function () {
    verifyCansubscribegroupUpdated(id);
  });
  deleteCansubscribegroup(x.id);
  const e_del = waitForCansubscribegroupDeleted(id);
  block(matchAddCansubscribegroup(id), function () {
    verifyCansubscribegroupDoesNotExist(id);
  });
});

bthread("ChannelcanaddsubscribersgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChannelcanaddsubscribersgroup(x.id);
  const e_add = waitForChannelcanaddsubscribersgroupAdded(id);
  block(matchDeleteChannelcanaddsubscribersgroup(id), function () {
    verifyChannelcanaddsubscribersgroupExists(id);
  });
  updateChannelcanaddsubscribersgroup(x.id);
  updateChannelcanaddsubscribersgroup(x.id);
  const e_upd = waitForChannelcanaddsubscribersgroupUpdated(id);
  block(matchDeleteChannelcanaddsubscribersgroup(id), function () {
    verifyChannelcanaddsubscribersgroupUpdated(id);
  });
  deleteChannelcanaddsubscribersgroup(x.id);
  const e_del = waitForChannelcanaddsubscribersgroupDeleted(id);
  block(matchAddChannelcanaddsubscribersgroup(id), function () {
    verifyChannelcanaddsubscribersgroupDoesNotExist(id);
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

bthread("CodederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodederror(x.id);
  const e_add = waitForCodederrorAdded(id);
  block(matchDeleteCodederror(id), function () {
    verifyCodederrorExists(id);
  });
  updateCodederror(x.id);
  updateCodederror(x.id);
  const e_upd = waitForCodederrorUpdated(id);
  block(matchDeleteCodederror(id), function () {
    verifyCodederrorUpdated(id);
  });
  deleteCodederror(x.id);
  const e_del = waitForCodederrorDeleted(id);
  block(matchAddCodederror(id), function () {
    verifyCodederrorDoesNotExist(id);
  });
});

bthread("CodederrorbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodederrorbase(x.id);
  const e_add = waitForCodederrorbaseAdded(id);
  block(matchDeleteCodederrorbase(id), function () {
    verifyCodederrorbaseExists(id);
  });
  updateCodederrorbase(x.id);
  updateCodederrorbase(x.id);
  const e_upd = waitForCodederrorbaseUpdated(id);
  block(matchDeleteCodederrorbase(id), function () {
    verifyCodederrorbaseUpdated(id);
  });
  deleteCodederrorbase(x.id);
  const e_del = waitForCodederrorbaseDeleted(id);
  block(matchAddCodederrorbase(id), function () {
    verifyCodederrorbaseDoesNotExist(id);
  });
});

bthread("CustomprofilefieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomprofilefield(x.id);
  const e_add = waitForCustomprofilefieldAdded(id);
  block(matchDeleteCustomprofilefield(id), function () {
    verifyCustomprofilefieldExists(id);
  });
  updateCustomprofilefield(x.id);
  updateCustomprofilefield(x.id);
  const e_upd = waitForCustomprofilefieldUpdated(id);
  block(matchDeleteCustomprofilefield(id), function () {
    verifyCustomprofilefieldUpdated(id);
  });
  deleteCustomprofilefield(x.id);
  const e_del = waitForCustomprofilefieldDeleted(id);
  block(matchAddCustomprofilefield(id), function () {
    verifyCustomprofilefieldDoesNotExist(id);
  });
});

bthread("DefaultchannelgroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultchannelgroup(x.id);
  const e_add = waitForDefaultchannelgroupAdded(id);
  block(matchDeleteDefaultchannelgroup(id), function () {
    verifyDefaultchannelgroupExists(id);
  });
  updateDefaultchannelgroup(x.id);
  updateDefaultchannelgroup(x.id);
  const e_upd = waitForDefaultchannelgroupUpdated(id);
  block(matchDeleteDefaultchannelgroup(id), function () {
    verifyDefaultchannelgroupUpdated(id);
  });
  deleteDefaultchannelgroup(x.id);
  const e_del = waitForDefaultchannelgroupDeleted(id);
  block(matchAddDefaultchannelgroup(id), function () {
    verifyDefaultchannelgroupDoesNotExist(id);
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

bthread("EmailaddressvisibilityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmailaddressvisibility(x.id);
  const e_add = waitForEmailaddressvisibilityAdded(id);
  block(matchDeleteEmailaddressvisibility(id), function () {
    verifyEmailaddressvisibilityExists(id);
  });
  updateEmailaddressvisibility(x.id);
  updateEmailaddressvisibility(x.id);
  const e_upd = waitForEmailaddressvisibilityUpdated(id);
  block(matchDeleteEmailaddressvisibility(id), function () {
    verifyEmailaddressvisibilityUpdated(id);
  });
  deleteEmailaddressvisibility(x.id);
  const e_del = waitForEmailaddressvisibilityDeleted(id);
  block(matchAddEmailaddressvisibility(id), function () {
    verifyEmailaddressvisibilityDoesNotExist(id);
  });
});

bthread("EmojibaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmojibase(x.id);
  const e_add = waitForEmojibaseAdded(id);
  block(matchDeleteEmojibase(id), function () {
    verifyEmojibaseExists(id);
  });
  updateEmojibase(x.id);
  updateEmojibase(x.id);
  const e_upd = waitForEmojibaseUpdated(id);
  block(matchDeleteEmojibase(id), function () {
    verifyEmojibaseUpdated(id);
  });
  deleteEmojibase(x.id);
  const e_del = waitForEmojibaseDeleted(id);
  block(matchAddEmojibase(id), function () {
    verifyEmojibaseDoesNotExist(id);
  });
});

bthread("EmojicodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmojicode(x.id);
  const e_add = waitForEmojicodeAdded(id);
  block(matchDeleteEmojicode(id), function () {
    verifyEmojicodeExists(id);
  });
  updateEmojicode(x.id);
  updateEmojicode(x.id);
  const e_upd = waitForEmojicodeUpdated(id);
  block(matchDeleteEmojicode(id), function () {
    verifyEmojicodeUpdated(id);
  });
  deleteEmojicode(x.id);
  const e_del = waitForEmojicodeDeleted(id);
  block(matchAddEmojicode(id), function () {
    verifyEmojicodeDoesNotExist(id);
  });
});

bthread("EmojireactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmojireaction(x.id);
  const e_add = waitForEmojireactionAdded(id);
  block(matchDeleteEmojireaction(id), function () {
    verifyEmojireactionExists(id);
  });
  updateEmojireaction(x.id);
  updateEmojireaction(x.id);
  const e_upd = waitForEmojireactionUpdated(id);
  block(matchDeleteEmojireaction(id), function () {
    verifyEmojireactionUpdated(id);
  });
  deleteEmojireaction(x.id);
  const e_del = waitForEmojireactionDeleted(id);
  block(matchAddEmojireaction(id), function () {
    verifyEmojireactionDoesNotExist(id);
  });
});

bthread("EmojireactioneventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmojireactionevent(x.id);
  const e_add = waitForEmojireactioneventAdded(id);
  block(matchDeleteEmojireactionevent(id), function () {
    verifyEmojireactioneventExists(id);
  });
  updateEmojireactionevent(x.id);
  updateEmojireactionevent(x.id);
  const e_upd = waitForEmojireactioneventUpdated(id);
  block(matchDeleteEmojireactionevent(id), function () {
    verifyEmojireactioneventUpdated(id);
  });
  deleteEmojireactionevent(x.id);
  const e_del = waitForEmojireactioneventDeleted(id);
  block(matchAddEmojireactionevent(id), function () {
    verifyEmojireactioneventDoesNotExist(id);
  });
});

bthread("EventidschemaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEventidschema(x.id);
  const e_add = waitForEventidschemaAdded(id);
  block(matchDeleteEventidschema(id), function () {
    verifyEventidschemaExists(id);
  });
  updateEventidschema(x.id);
  updateEventidschema(x.id);
  const e_upd = waitForEventidschemaUpdated(id);
  block(matchDeleteEventidschema(id), function () {
    verifyEventidschemaUpdated(id);
  });
  deleteEventidschema(x.id);
  const e_del = waitForEventidschemaDeleted(id);
  block(matchAddEventidschema(id), function () {
    verifyEventidschemaDoesNotExist(id);
  });
});

bthread("EventtypesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEventtypes(x.id);
  const e_add = waitForEventtypesAdded(id);
  block(matchDeleteEventtypes(id), function () {
    verifyEventtypesExists(id);
  });
  updateEventtypes(x.id);
  updateEventtypes(x.id);
  const e_upd = waitForEventtypesUpdated(id);
  block(matchDeleteEventtypes(id), function () {
    verifyEventtypesUpdated(id);
  });
  deleteEventtypes(x.id);
  const e_del = waitForEventtypesDeleted(id);
  block(matchAddEventtypes(id), function () {
    verifyEventtypesDoesNotExist(id);
  });
});

bthread("EventtypeschemaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEventtypeschema(x.id);
  const e_add = waitForEventtypeschemaAdded(id);
  block(matchDeleteEventtypeschema(id), function () {
    verifyEventtypeschemaExists(id);
  });
  updateEventtypeschema(x.id);
  updateEventtypeschema(x.id);
  const e_upd = waitForEventtypeschemaUpdated(id);
  block(matchDeleteEventtypeschema(id), function () {
    verifyEventtypeschemaUpdated(id);
  });
  deleteEventtypeschema(x.id);
  const e_del = waitForEventtypeschemaDeleted(id);
  block(matchAddEventtypeschema(id), function () {
    verifyEventtypeschemaDoesNotExist(id);
  });
});

bthread("FailedtoconnectbouncererrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFailedtoconnectbouncererror(x.id);
  const e_add = waitForFailedtoconnectbouncererrorAdded(id);
  block(matchDeleteFailedtoconnectbouncererror(id), function () {
    verifyFailedtoconnectbouncererrorExists(id);
  });
  updateFailedtoconnectbouncererror(x.id);
  updateFailedtoconnectbouncererror(x.id);
  const e_upd = waitForFailedtoconnectbouncererrorUpdated(id);
  block(matchDeleteFailedtoconnectbouncererror(id), function () {
    verifyFailedtoconnectbouncererrorUpdated(id);
  });
  deleteFailedtoconnectbouncererror(x.id);
  const e_del = waitForFailedtoconnectbouncererrorDeleted(id);
  block(matchAddFailedtoconnectbouncererror(id), function () {
    verifyFailedtoconnectbouncererrorDoesNotExist(id);
  });
});

bthread("FolderidLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFolderid(x.id);
  const e_add = waitForFolderidAdded(id);
  block(matchDeleteFolderid(id), function () {
    verifyFolderidExists(id);
  });
  updateFolderid(x.id);
  updateFolderid(x.id);
  const e_upd = waitForFolderidUpdated(id);
  block(matchDeleteFolderid(id), function () {
    verifyFolderidUpdated(id);
  });
  deleteFolderid(x.id);
  const e_del = waitForFolderidDeleted(id);
  block(matchAddFolderid(id), function () {
    verifyFolderidDoesNotExist(id);
  });
});

bthread("GrouppermissionsettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGrouppermissionsetting(x.id);
  const e_add = waitForGrouppermissionsettingAdded(id);
  block(matchDeleteGrouppermissionsetting(id), function () {
    verifyGrouppermissionsettingExists(id);
  });
  updateGrouppermissionsetting(x.id);
  updateGrouppermissionsetting(x.id);
  const e_upd = waitForGrouppermissionsettingUpdated(id);
  block(matchDeleteGrouppermissionsetting(id), function () {
    verifyGrouppermissionsettingUpdated(id);
  });
  deleteGrouppermissionsetting(x.id);
  const e_del = waitForGrouppermissionsettingDeleted(id);
  block(matchAddGrouppermissionsetting(id), function () {
    verifyGrouppermissionsettingDoesNotExist(id);
  });
});

bthread("GroupsettingvalueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGroupsettingvalue(x.id);
  const e_add = waitForGroupsettingvalueAdded(id);
  block(matchDeleteGroupsettingvalue(id), function () {
    verifyGroupsettingvalueExists(id);
  });
  updateGroupsettingvalue(x.id);
  updateGroupsettingvalue(x.id);
  const e_upd = waitForGroupsettingvalueUpdated(id);
  block(matchDeleteGroupsettingvalue(id), function () {
    verifyGroupsettingvalueUpdated(id);
  });
  deleteGroupsettingvalue(x.id);
  const e_del = waitForGroupsettingvalueDeleted(id);
  block(matchAddGroupsettingvalue(id), function () {
    verifyGroupsettingvalueDoesNotExist(id);
  });
});

bthread("GroupsettingvalueupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGroupsettingvalueupdate(x.id);
  const e_add = waitForGroupsettingvalueupdateAdded(id);
  block(matchDeleteGroupsettingvalueupdate(id), function () {
    verifyGroupsettingvalueupdateExists(id);
  });
  updateGroupsettingvalueupdate(x.id);
  updateGroupsettingvalueupdate(x.id);
  const e_upd = waitForGroupsettingvalueupdateUpdated(id);
  block(matchDeleteGroupsettingvalueupdate(id), function () {
    verifyGroupsettingvalueupdateUpdated(id);
  });
  deleteGroupsettingvalueupdate(x.id);
  const e_del = waitForGroupsettingvalueupdateDeleted(id);
  block(matchAddGroupsettingvalueupdate(id), function () {
    verifyGroupsettingvalueupdateDoesNotExist(id);
  });
});

bthread("HistorypublictosubscribersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHistorypublictosubscribers(x.id);
  const e_add = waitForHistorypublictosubscribersAdded(id);
  block(matchDeleteHistorypublictosubscribers(id), function () {
    verifyHistorypublictosubscribersExists(id);
  });
  updateHistorypublictosubscribers(x.id);
  updateHistorypublictosubscribers(x.id);
  const e_upd = waitForHistorypublictosubscribersUpdated(id);
  block(matchDeleteHistorypublictosubscribers(id), function () {
    verifyHistorypublictosubscribersUpdated(id);
  });
  deleteHistorypublictosubscribers(x.id);
  const e_del = waitForHistorypublictosubscribersDeleted(id);
  block(matchAddHistorypublictosubscribers(id), function () {
    verifyHistorypublictosubscribersDoesNotExist(id);
  });
});

bthread("IgnoredparametersbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIgnoredparametersbase(x.id);
  const e_add = waitForIgnoredparametersbaseAdded(id);
  block(matchDeleteIgnoredparametersbase(id), function () {
    verifyIgnoredparametersbaseExists(id);
  });
  updateIgnoredparametersbase(x.id);
  updateIgnoredparametersbase(x.id);
  const e_upd = waitForIgnoredparametersbaseUpdated(id);
  block(matchDeleteIgnoredparametersbase(id), function () {
    verifyIgnoredparametersbaseUpdated(id);
  });
  deleteIgnoredparametersbase(x.id);
  const e_del = waitForIgnoredparametersbaseDeleted(id);
  block(matchAddIgnoredparametersbase(id), function () {
    verifyIgnoredparametersbaseDoesNotExist(id);
  });
});

bthread("IgnoredparameterssuccessLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIgnoredparameterssuccess(x.id);
  const e_add = waitForIgnoredparameterssuccessAdded(id);
  block(matchDeleteIgnoredparameterssuccess(id), function () {
    verifyIgnoredparameterssuccessExists(id);
  });
  updateIgnoredparameterssuccess(x.id);
  updateIgnoredparameterssuccess(x.id);
  const e_upd = waitForIgnoredparameterssuccessUpdated(id);
  block(matchDeleteIgnoredparameterssuccess(id), function () {
    verifyIgnoredparameterssuccessUpdated(id);
  });
  deleteIgnoredparameterssuccess(x.id);
  const e_del = waitForIgnoredparameterssuccessDeleted(id);
  block(matchAddIgnoredparameterssuccess(id), function () {
    verifyIgnoredparameterssuccessDoesNotExist(id);
  });
});

bthread("IgnoredparametersunsupportedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIgnoredparametersunsupported(x.id);
  const e_add = waitForIgnoredparametersunsupportedAdded(id);
  block(matchDeleteIgnoredparametersunsupported(id), function () {
    verifyIgnoredparametersunsupportedExists(id);
  });
  updateIgnoredparametersunsupported(x.id);
  updateIgnoredparametersunsupported(x.id);
  const e_upd = waitForIgnoredparametersunsupportedUpdated(id);
  block(matchDeleteIgnoredparametersunsupported(id), function () {
    verifyIgnoredparametersunsupportedUpdated(id);
  });
  deleteIgnoredparametersunsupported(x.id);
  const e_del = waitForIgnoredparametersunsupportedDeleted(id);
  block(matchAddIgnoredparametersunsupported(id), function () {
    verifyIgnoredparametersunsupportedDoesNotExist(id);
  });
});

bthread("IncompatibleparameterserrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIncompatibleparameterserror(x.id);
  const e_add = waitForIncompatibleparameterserrorAdded(id);
  block(matchDeleteIncompatibleparameterserror(id), function () {
    verifyIncompatibleparameterserrorExists(id);
  });
  updateIncompatibleparameterserror(x.id);
  updateIncompatibleparameterserror(x.id);
  const e_upd = waitForIncompatibleparameterserrorUpdated(id);
  block(matchDeleteIncompatibleparameterserror(id), function () {
    verifyIncompatibleparameterserrorUpdated(id);
  });
  deleteIncompatibleparameterserror(x.id);
  const e_del = waitForIncompatibleparameterserrorDeleted(id);
  block(matchAddIncompatibleparameterserror(id), function () {
    verifyIncompatibleparameterserrorDoesNotExist(id);
  });
});

bthread("InternalbouncerservererrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInternalbouncerservererror(x.id);
  const e_add = waitForInternalbouncerservererrorAdded(id);
  block(matchDeleteInternalbouncerservererror(id), function () {
    verifyInternalbouncerservererrorExists(id);
  });
  updateInternalbouncerservererror(x.id);
  updateInternalbouncerservererror(x.id);
  const e_upd = waitForInternalbouncerservererrorUpdated(id);
  block(matchDeleteInternalbouncerservererror(id), function () {
    verifyInternalbouncerservererrorUpdated(id);
  });
  deleteInternalbouncerservererror(x.id);
  const e_del = waitForInternalbouncerservererrorDeleted(id);
  block(matchAddInternalbouncerservererror(id), function () {
    verifyInternalbouncerservererrorDoesNotExist(id);
  });
});

bthread("InvalidapikeyerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvalidapikeyerror(x.id);
  const e_add = waitForInvalidapikeyerrorAdded(id);
  block(matchDeleteInvalidapikeyerror(id), function () {
    verifyInvalidapikeyerrorExists(id);
  });
  updateInvalidapikeyerror(x.id);
  updateInvalidapikeyerror(x.id);
  const e_upd = waitForInvalidapikeyerrorUpdated(id);
  block(matchDeleteInvalidapikeyerror(id), function () {
    verifyInvalidapikeyerrorUpdated(id);
  });
  deleteInvalidapikeyerror(x.id);
  const e_del = waitForInvalidapikeyerrorDeleted(id);
  block(matchAddInvalidapikeyerror(id), function () {
    verifyInvalidapikeyerrorDoesNotExist(id);
  });
});

bthread("InvalidchannelerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvalidchannelerror(x.id);
  const e_add = waitForInvalidchannelerrorAdded(id);
  block(matchDeleteInvalidchannelerror(id), function () {
    verifyInvalidchannelerrorExists(id);
  });
  updateInvalidchannelerror(x.id);
  updateInvalidchannelerror(x.id);
  const e_upd = waitForInvalidchannelerrorUpdated(id);
  block(matchDeleteInvalidchannelerror(id), function () {
    verifyInvalidchannelerrorUpdated(id);
  });
  deleteInvalidchannelerror(x.id);
  const e_del = waitForInvalidchannelerrorDeleted(id);
  block(matchAddInvalidchannelerror(id), function () {
    verifyInvalidchannelerrorDoesNotExist(id);
  });
});

bthread("InvalidmessageerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvalidmessageerror(x.id);
  const e_add = waitForInvalidmessageerrorAdded(id);
  block(matchDeleteInvalidmessageerror(id), function () {
    verifyInvalidmessageerrorExists(id);
  });
  updateInvalidmessageerror(x.id);
  updateInvalidmessageerror(x.id);
  const e_upd = waitForInvalidmessageerrorUpdated(id);
  block(matchDeleteInvalidmessageerror(id), function () {
    verifyInvalidmessageerrorUpdated(id);
  });
  deleteInvalidmessageerror(x.id);
  const e_del = waitForInvalidmessageerrorDeleted(id);
  block(matchAddInvalidmessageerror(id), function () {
    verifyInvalidmessageerrorDoesNotExist(id);
  });
});

bthread("InvalidpushdevicetokenerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvalidpushdevicetokenerror(x.id);
  const e_add = waitForInvalidpushdevicetokenerrorAdded(id);
  block(matchDeleteInvalidpushdevicetokenerror(id), function () {
    verifyInvalidpushdevicetokenerrorExists(id);
  });
  updateInvalidpushdevicetokenerror(x.id);
  updateInvalidpushdevicetokenerror(x.id);
  const e_upd = waitForInvalidpushdevicetokenerrorUpdated(id);
  block(matchDeleteInvalidpushdevicetokenerror(id), function () {
    verifyInvalidpushdevicetokenerrorUpdated(id);
  });
  deleteInvalidpushdevicetokenerror(x.id);
  const e_del = waitForInvalidpushdevicetokenerrorDeleted(id);
  block(matchAddInvalidpushdevicetokenerror(id), function () {
    verifyInvalidpushdevicetokenerrorDoesNotExist(id);
  });
});

bthread("InvalidremotepushdevicetokenerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvalidremotepushdevicetokenerror(x.id);
  const e_add = waitForInvalidremotepushdevicetokenerrorAdded(id);
  block(matchDeleteInvalidremotepushdevicetokenerror(id), function () {
    verifyInvalidremotepushdevicetokenerrorExists(id);
  });
  updateInvalidremotepushdevicetokenerror(x.id);
  updateInvalidremotepushdevicetokenerror(x.id);
  const e_upd = waitForInvalidremotepushdevicetokenerrorUpdated(id);
  block(matchDeleteInvalidremotepushdevicetokenerror(id), function () {
    verifyInvalidremotepushdevicetokenerrorUpdated(id);
  });
  deleteInvalidremotepushdevicetokenerror(x.id);
  const e_del = waitForInvalidremotepushdevicetokenerrorDeleted(id);
  block(matchAddInvalidremotepushdevicetokenerror(id), function () {
    verifyInvalidremotepushdevicetokenerrorDoesNotExist(id);
  });
});

bthread("InvitationfailederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvitationfailederror(x.id);
  const e_add = waitForInvitationfailederrorAdded(id);
  block(matchDeleteInvitationfailederror(id), function () {
    verifyInvitationfailederrorExists(id);
  });
  updateInvitationfailederror(x.id);
  updateInvitationfailederror(x.id);
  const e_upd = waitForInvitationfailederrorUpdated(id);
  block(matchDeleteInvitationfailederror(id), function () {
    verifyInvitationfailederrorUpdated(id);
  });
  deleteInvitationfailederror(x.id);
  const e_del = waitForInvitationfailederrorDeleted(id);
  block(matchAddInvitationfailederror(id), function () {
    verifyInvitationfailederrorDoesNotExist(id);
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

bthread("InviteexpirationparameterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInviteexpirationparameter(x.id);
  const e_add = waitForInviteexpirationparameterAdded(id);
  block(matchDeleteInviteexpirationparameter(id), function () {
    verifyInviteexpirationparameterExists(id);
  });
  updateInviteexpirationparameter(x.id);
  updateInviteexpirationparameter(x.id);
  const e_upd = waitForInviteexpirationparameterUpdated(id);
  block(matchDeleteInviteexpirationparameter(id), function () {
    verifyInviteexpirationparameterUpdated(id);
  });
  deleteInviteexpirationparameter(x.id);
  const e_del = waitForInviteexpirationparameterDeleted(id);
  block(matchAddInviteexpirationparameter(id), function () {
    verifyInviteexpirationparameterDoesNotExist(id);
  });
});

bthread("InviteroleparameterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInviteroleparameter(x.id);
  const e_add = waitForInviteroleparameterAdded(id);
  block(matchDeleteInviteroleparameter(id), function () {
    verifyInviteroleparameterExists(id);
  });
  updateInviteroleparameter(x.id);
  updateInviteroleparameter(x.id);
  const e_upd = waitForInviteroleparameterUpdated(id);
  block(matchDeleteInviteroleparameter(id), function () {
    verifyInviteroleparameterUpdated(id);
  });
  deleteInviteroleparameter(x.id);
  const e_del = waitForInviteroleparameterDeleted(id);
  block(matchAddInviteroleparameter(id), function () {
    verifyInviteroleparameterDoesNotExist(id);
  });
});

bthread("JsonresponsebaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJsonresponsebase(x.id);
  const e_add = waitForJsonresponsebaseAdded(id);
  block(matchDeleteJsonresponsebase(id), function () {
    verifyJsonresponsebaseExists(id);
  });
  updateJsonresponsebase(x.id);
  updateJsonresponsebase(x.id);
  const e_upd = waitForJsonresponsebaseUpdated(id);
  block(matchDeleteJsonresponsebase(id), function () {
    verifyJsonresponsebaseUpdated(id);
  });
  deleteJsonresponsebase(x.id);
  const e_del = waitForJsonresponsebaseDeleted(id);
  block(matchAddJsonresponsebase(id), function () {
    verifyJsonresponsebaseDoesNotExist(id);
  });
});

bthread("JsonsuccessLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJsonsuccess(x.id);
  const e_add = waitForJsonsuccessAdded(id);
  block(matchDeleteJsonsuccess(id), function () {
    verifyJsonsuccessExists(id);
  });
  updateJsonsuccess(x.id);
  updateJsonsuccess(x.id);
  const e_upd = waitForJsonsuccessUpdated(id);
  block(matchDeleteJsonsuccess(id), function () {
    verifyJsonsuccessUpdated(id);
  });
  deleteJsonsuccess(x.id);
  const e_del = waitForJsonsuccessDeleted(id);
  block(matchAddJsonsuccess(id), function () {
    verifyJsonsuccessDoesNotExist(id);
  });
});

bthread("JsonsuccessbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJsonsuccessbase(x.id);
  const e_add = waitForJsonsuccessbaseAdded(id);
  block(matchDeleteJsonsuccessbase(id), function () {
    verifyJsonsuccessbaseExists(id);
  });
  updateJsonsuccessbase(x.id);
  updateJsonsuccessbase(x.id);
  const e_upd = waitForJsonsuccessbaseUpdated(id);
  block(matchDeleteJsonsuccessbase(id), function () {
    verifyJsonsuccessbaseUpdated(id);
  });
  deleteJsonsuccessbase(x.id);
  const e_del = waitForJsonsuccessbaseDeleted(id);
  block(matchAddJsonsuccessbase(id), function () {
    verifyJsonsuccessbaseDoesNotExist(id);
  });
});

bthread("LegacypresenceformatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLegacypresenceformat(x.id);
  const e_add = waitForLegacypresenceformatAdded(id);
  block(matchDeleteLegacypresenceformat(id), function () {
    verifyLegacypresenceformatExists(id);
  });
  updateLegacypresenceformat(x.id);
  updateLegacypresenceformat(x.id);
  const e_upd = waitForLegacypresenceformatUpdated(id);
  block(matchDeleteLegacypresenceformat(id), function () {
    verifyLegacypresenceformatUpdated(id);
  });
  deleteLegacypresenceformat(x.id);
  const e_del = waitForLegacypresenceformatDeleted(id);
  block(matchAddLegacypresenceformat(id), function () {
    verifyLegacypresenceformatDoesNotExist(id);
  });
});

bthread("LinkifierpatternLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLinkifierpattern(x.id);
  const e_add = waitForLinkifierpatternAdded(id);
  block(matchDeleteLinkifierpattern(id), function () {
    verifyLinkifierpatternExists(id);
  });
  updateLinkifierpattern(x.id);
  updateLinkifierpattern(x.id);
  const e_upd = waitForLinkifierpatternUpdated(id);
  block(matchDeleteLinkifierpattern(id), function () {
    verifyLinkifierpatternUpdated(id);
  });
  deleteLinkifierpattern(x.id);
  const e_del = waitForLinkifierpatternDeleted(id);
  block(matchAddLinkifierpattern(id), function () {
    verifyLinkifierpatternDoesNotExist(id);
  });
});

bthread("LinkifierurltemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLinkifierurltemplate(x.id);
  const e_add = waitForLinkifierurltemplateAdded(id);
  block(matchDeleteLinkifierurltemplate(id), function () {
    verifyLinkifierurltemplateExists(id);
  });
  updateLinkifierurltemplate(x.id);
  updateLinkifierurltemplate(x.id);
  const e_upd = waitForLinkifierurltemplateUpdated(id);
  block(matchDeleteLinkifierurltemplate(id), function () {
    verifyLinkifierurltemplateUpdated(id);
  });
  deleteLinkifierurltemplate(x.id);
  const e_del = waitForLinkifierurltemplateDeleted(id);
  block(matchAddLinkifierurltemplate(id), function () {
    verifyLinkifierurltemplateDoesNotExist(id);
  });
});

bthread("MessageretentiondaysLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessageretentiondays(x.id);
  const e_add = waitForMessageretentiondaysAdded(id);
  block(matchDeleteMessageretentiondays(id), function () {
    verifyMessageretentiondaysExists(id);
  });
  updateMessageretentiondays(x.id);
  updateMessageretentiondays(x.id);
  const e_upd = waitForMessageretentiondaysUpdated(id);
  block(matchDeleteMessageretentiondays(id), function () {
    verifyMessageretentiondaysUpdated(id);
  });
  deleteMessageretentiondays(x.id);
  const e_del = waitForMessageretentiondaysDeleted(id);
  block(matchAddMessageretentiondays(id), function () {
    verifyMessageretentiondaysDoesNotExist(id);
  });
});

bthread("MessagesbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessagesbase(x.id);
  const e_add = waitForMessagesbaseAdded(id);
  block(matchDeleteMessagesbase(id), function () {
    verifyMessagesbaseExists(id);
  });
  updateMessagesbase(x.id);
  updateMessagesbase(x.id);
  const e_upd = waitForMessagesbaseUpdated(id);
  block(matchDeleteMessagesbase(id), function () {
    verifyMessagesbaseUpdated(id);
  });
  deleteMessagesbase(x.id);
  const e_del = waitForMessagesbaseDeleted(id);
  block(matchAddMessagesbase(id), function () {
    verifyMessagesbaseDoesNotExist(id);
  });
});

bthread("MessageseventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMessagesevent(x.id);
  const e_add = waitForMessageseventAdded(id);
  block(matchDeleteMessagesevent(id), function () {
    verifyMessageseventExists(id);
  });
  updateMessagesevent(x.id);
  updateMessagesevent(x.id);
  const e_upd = waitForMessageseventUpdated(id);
  block(matchDeleteMessagesevent(id), function () {
    verifyMessageseventUpdated(id);
  });
  deleteMessagesevent(x.id);
  const e_del = waitForMessageseventDeleted(id);
  block(matchAddMessagesevent(id), function () {
    verifyMessageseventDoesNotExist(id);
  });
});

bthread("MissingargumenterrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMissingargumenterror(x.id);
  const e_add = waitForMissingargumenterrorAdded(id);
  block(matchDeleteMissingargumenterror(id), function () {
    verifyMissingargumenterrorExists(id);
  });
  updateMissingargumenterror(x.id);
  updateMissingargumenterror(x.id);
  const e_upd = waitForMissingargumenterrorUpdated(id);
  block(matchDeleteMissingargumenterror(id), function () {
    verifyMissingargumenterrorUpdated(id);
  });
  deleteMissingargumenterror(x.id);
  const e_del = waitForMissingargumenterrorDeleted(id);
  block(matchAddMissingargumenterror(id), function () {
    verifyMissingargumenterrorDoesNotExist(id);
  });
});

bthread("ModernpresenceformatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addModernpresenceformat(x.id);
  const e_add = waitForModernpresenceformatAdded(id);
  block(matchDeleteModernpresenceformat(id), function () {
    verifyModernpresenceformatExists(id);
  });
  updateModernpresenceformat(x.id);
  updateModernpresenceformat(x.id);
  const e_upd = waitForModernpresenceformatUpdated(id);
  block(matchDeleteModernpresenceformat(id), function () {
    verifyModernpresenceformatUpdated(id);
  });
  deleteModernpresenceformat(x.id);
  const e_del = waitForModernpresenceformatDeleted(id);
  block(matchAddModernpresenceformat(id), function () {
    verifyModernpresenceformatDoesNotExist(id);
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

bthread("NoactivepushdeviceerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNoactivepushdeviceerror(x.id);
  const e_add = waitForNoactivepushdeviceerrorAdded(id);
  block(matchDeleteNoactivepushdeviceerror(id), function () {
    verifyNoactivepushdeviceerrorExists(id);
  });
  updateNoactivepushdeviceerror(x.id);
  updateNoactivepushdeviceerror(x.id);
  const e_upd = waitForNoactivepushdeviceerrorUpdated(id);
  block(matchDeleteNoactivepushdeviceerror(id), function () {
    verifyNoactivepushdeviceerrorUpdated(id);
  });
  deleteNoactivepushdeviceerror(x.id);
  const e_del = waitForNoactivepushdeviceerrorDeleted(id);
  block(matchAddNoactivepushdeviceerror(id), function () {
    verifyNoactivepushdeviceerrorDoesNotExist(id);
  });
});

bthread("NonexistingchanneliderrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNonexistingchanneliderror(x.id);
  const e_add = waitForNonexistingchanneliderrorAdded(id);
  block(matchDeleteNonexistingchanneliderror(id), function () {
    verifyNonexistingchanneliderrorExists(id);
  });
  updateNonexistingchanneliderror(x.id);
  updateNonexistingchanneliderror(x.id);
  const e_upd = waitForNonexistingchanneliderrorUpdated(id);
  block(matchDeleteNonexistingchanneliderror(id), function () {
    verifyNonexistingchanneliderrorUpdated(id);
  });
  deleteNonexistingchanneliderror(x.id);
  const e_del = waitForNonexistingchanneliderrorDeleted(id);
  block(matchAddNonexistingchanneliderror(id), function () {
    verifyNonexistingchanneliderrorDoesNotExist(id);
  });
});

bthread("NonexistingchannelnameerrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNonexistingchannelnameerror(x.id);
  const e_add = waitForNonexistingchannelnameerrorAdded(id);
  block(matchDeleteNonexistingchannelnameerror(id), function () {
    verifyNonexistingchannelnameerrorExists(id);
  });
  updateNonexistingchannelnameerror(x.id);
  updateNonexistingchannelnameerror(x.id);
  const e_upd = waitForNonexistingchannelnameerrorUpdated(id);
  block(matchDeleteNonexistingchannelnameerror(id), function () {
    verifyNonexistingchannelnameerrorUpdated(id);
  });
  deleteNonexistingchannelnameerror(x.id);
  const e_del = waitForNonexistingchannelnameerrorDeleted(id);
  block(matchAddNonexistingchannelnameerror(id), function () {
    verifyNonexistingchannelnameerrorDoesNotExist(id);
  });
});

bthread("OnboardingstepLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOnboardingstep(x.id);
  const e_add = waitForOnboardingstepAdded(id);
  block(matchDeleteOnboardingstep(id), function () {
    verifyOnboardingstepExists(id);
  });
  updateOnboardingstep(x.id);
  updateOnboardingstep(x.id);
  const e_upd = waitForOnboardingstepUpdated(id);
  block(matchDeleteOnboardingstep(id), function () {
    verifyOnboardingstepUpdated(id);
  });
  deleteOnboardingstep(x.id);
  const e_del = waitForOnboardingstepDeleted(id);
  block(matchAddOnboardingstep(id), function () {
    verifyOnboardingstepDoesNotExist(id);
  });
});

bthread("OptionalcontentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOptionalcontent(x.id);
  const e_add = waitForOptionalcontentAdded(id);
  block(matchDeleteOptionalcontent(id), function () {
    verifyOptionalcontentExists(id);
  });
  updateOptionalcontent(x.id);
  updateOptionalcontent(x.id);
  const e_upd = waitForOptionalcontentUpdated(id);
  block(matchDeleteOptionalcontent(id), function () {
    verifyOptionalcontentUpdated(id);
  });
  deleteOptionalcontent(x.id);
  const e_del = waitForOptionalcontentDeleted(id);
  block(matchAddOptionalcontent(id), function () {
    verifyOptionalcontentDoesNotExist(id);
  });
});

bthread("PrincipalsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrincipals(x.id);
  const e_add = waitForPrincipalsAdded(id);
  block(matchDeletePrincipals(id), function () {
    verifyPrincipalsExists(id);
  });
  updatePrincipals(x.id);
  updatePrincipals(x.id);
  const e_upd = waitForPrincipalsUpdated(id);
  block(matchDeletePrincipals(id), function () {
    verifyPrincipalsUpdated(id);
  });
  deletePrincipals(x.id);
  const e_del = waitForPrincipalsDeleted(id);
  block(matchAddPrincipals(id), function () {
    verifyPrincipalsDoesNotExist(id);
  });
});

bthread("ProfiledataLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProfiledata(x.id);
  const e_add = waitForProfiledataAdded(id);
  block(matchDeleteProfiledata(id), function () {
    verifyProfiledataExists(id);
  });
  updateProfiledata(x.id);
  updateProfiledata(x.id);
  const e_upd = waitForProfiledataUpdated(id);
  block(matchDeleteProfiledata(id), function () {
    verifyProfiledataUpdated(id);
  });
  deleteProfiledata(x.id);
  const e_del = waitForProfiledataDeleted(id);
  block(matchAddProfiledata(id), function () {
    verifyProfiledataDoesNotExist(id);
  });
});

bthread("PushnotificationadminactionrequirederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPushnotificationadminactionrequirederror(x.id);
  const e_add = waitForPushnotificationadminactionrequirederrorAdded(id);
  block(matchDeletePushnotificationadminactionrequirederror(id), function () {
    verifyPushnotificationadminactionrequirederrorExists(id);
  });
  updatePushnotificationadminactionrequirederror(x.id);
  updatePushnotificationadminactionrequirederror(x.id);
  const e_upd = waitForPushnotificationadminactionrequirederrorUpdated(id);
  block(matchDeletePushnotificationadminactionrequirederror(id), function () {
    verifyPushnotificationadminactionrequirederrorUpdated(id);
  });
  deletePushnotificationadminactionrequirederror(x.id);
  const e_del = waitForPushnotificationadminactionrequirederrorDeleted(id);
  block(matchAddPushnotificationadminactionrequirederror(id), function () {
    verifyPushnotificationadminactionrequirederrorDoesNotExist(id);
  });
});

bthread("RatelimitederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRatelimitederror(x.id);
  const e_add = waitForRatelimitederrorAdded(id);
  block(matchDeleteRatelimitederror(id), function () {
    verifyRatelimitederrorExists(id);
  });
  updateRatelimitederror(x.id);
  updateRatelimitederror(x.id);
  const e_upd = waitForRatelimitederrorUpdated(id);
  block(matchDeleteRatelimitederror(id), function () {
    verifyRatelimitederrorUpdated(id);
  });
  deleteRatelimitederror(x.id);
  const e_del = waitForRatelimitederrorDeleted(id);
  block(matchAddRatelimitederror(id), function () {
    verifyRatelimitederrorDoesNotExist(id);
  });
});

bthread("ReactiontypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReactiontype(x.id);
  const e_add = waitForReactiontypeAdded(id);
  block(matchDeleteReactiontype(id), function () {
    verifyReactiontypeExists(id);
  });
  updateReactiontype(x.id);
  updateReactiontype(x.id);
  const e_upd = waitForReactiontypeUpdated(id);
  block(matchDeleteReactiontype(id), function () {
    verifyReactiontypeUpdated(id);
  });
  deleteReactiontype(x.id);
  const e_del = waitForReactiontypeDeleted(id);
  block(matchAddReactiontype(id), function () {
    verifyReactiontypeDoesNotExist(id);
  });
});

bthread("RealmauthenticationmethodLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmauthenticationmethod(x.id);
  const e_add = waitForRealmauthenticationmethodAdded(id);
  block(matchDeleteRealmauthenticationmethod(id), function () {
    verifyRealmauthenticationmethodExists(id);
  });
  updateRealmauthenticationmethod(x.id);
  updateRealmauthenticationmethod(x.id);
  const e_upd = waitForRealmauthenticationmethodUpdated(id);
  block(matchDeleteRealmauthenticationmethod(id), function () {
    verifyRealmauthenticationmethodUpdated(id);
  });
  deleteRealmauthenticationmethod(x.id);
  const e_del = waitForRealmauthenticationmethodDeleted(id);
  block(matchAddRealmauthenticationmethod(id), function () {
    verifyRealmauthenticationmethodDoesNotExist(id);
  });
});

bthread("RealmdeactivatederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmdeactivatederror(x.id);
  const e_add = waitForRealmdeactivatederrorAdded(id);
  block(matchDeleteRealmdeactivatederror(id), function () {
    verifyRealmdeactivatederrorExists(id);
  });
  updateRealmdeactivatederror(x.id);
  updateRealmdeactivatederror(x.id);
  const e_upd = waitForRealmdeactivatederrorUpdated(id);
  block(matchDeleteRealmdeactivatederror(id), function () {
    verifyRealmdeactivatederrorUpdated(id);
  });
  deleteRealmdeactivatederror(x.id);
  const e_del = waitForRealmdeactivatederrorDeleted(id);
  block(matchAddRealmdeactivatederror(id), function () {
    verifyRealmdeactivatederrorDoesNotExist(id);
  });
});

bthread("RealmdomainLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmdomain(x.id);
  const e_add = waitForRealmdomainAdded(id);
  block(matchDeleteRealmdomain(id), function () {
    verifyRealmdomainExists(id);
  });
  updateRealmdomain(x.id);
  updateRealmdomain(x.id);
  const e_upd = waitForRealmdomainUpdated(id);
  block(matchDeleteRealmdomain(id), function () {
    verifyRealmdomainUpdated(id);
  });
  deleteRealmdomain(x.id);
  const e_del = waitForRealmdomainDeleted(id);
  block(matchAddRealmdomain(id), function () {
    verifyRealmdomainDoesNotExist(id);
  });
});

bthread("RealmemojiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmemoji(x.id);
  const e_add = waitForRealmemojiAdded(id);
  block(matchDeleteRealmemoji(id), function () {
    verifyRealmemojiExists(id);
  });
  updateRealmemoji(x.id);
  updateRealmemoji(x.id);
  const e_upd = waitForRealmemojiUpdated(id);
  block(matchDeleteRealmemoji(id), function () {
    verifyRealmemojiUpdated(id);
  });
  deleteRealmemoji(x.id);
  const e_del = waitForRealmemojiDeleted(id);
  block(matchAddRealmemoji(id), function () {
    verifyRealmemojiDoesNotExist(id);
  });
});

bthread("RealmexportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmexport(x.id);
  const e_add = waitForRealmexportAdded(id);
  block(matchDeleteRealmexport(id), function () {
    verifyRealmexportExists(id);
  });
  updateRealmexport(x.id);
  updateRealmexport(x.id);
  const e_upd = waitForRealmexportUpdated(id);
  block(matchDeleteRealmexport(id), function () {
    verifyRealmexportUpdated(id);
  });
  deleteRealmexport(x.id);
  const e_del = waitForRealmexportDeleted(id);
  block(matchAddRealmexport(id), function () {
    verifyRealmexportDoesNotExist(id);
  });
});

bthread("RealmplaygroundLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRealmplayground(x.id);
  const e_add = waitForRealmplaygroundAdded(id);
  block(matchDeleteRealmplayground(id), function () {
    verifyRealmplaygroundExists(id);
  });
  updateRealmplayground(x.id);
  updateRealmplayground(x.id);
  const e_upd = waitForRealmplaygroundUpdated(id);
  block(matchDeleteRealmplayground(id), function () {
    verifyRealmplaygroundUpdated(id);
  });
  deleteRealmplayground(x.id);
  const e_del = waitForRealmplaygroundDeleted(id);
  block(matchAddRealmplayground(id), function () {
    verifyRealmplaygroundDoesNotExist(id);
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

bthread("RequiredcontentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequiredcontent(x.id);
  const e_add = waitForRequiredcontentAdded(id);
  block(matchDeleteRequiredcontent(id), function () {
    verifyRequiredcontentExists(id);
  });
  updateRequiredcontent(x.id);
  updateRequiredcontent(x.id);
  const e_upd = waitForRequiredcontentUpdated(id);
  block(matchDeleteRequiredcontent(id), function () {
    verifyRequiredcontentUpdated(id);
  });
  deleteRequiredcontent(x.id);
  const e_del = waitForRequiredcontentDeleted(id);
  block(matchAddRequiredcontent(id), function () {
    verifyRequiredcontentDoesNotExist(id);
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

bthread("ScheduledmessagebaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScheduledmessagebase(x.id);
  const e_add = waitForScheduledmessagebaseAdded(id);
  block(matchDeleteScheduledmessagebase(id), function () {
    verifyScheduledmessagebaseExists(id);
  });
  updateScheduledmessagebase(x.id);
  updateScheduledmessagebase(x.id);
  const e_upd = waitForScheduledmessagebaseUpdated(id);
  block(matchDeleteScheduledmessagebase(id), function () {
    verifyScheduledmessagebaseUpdated(id);
  });
  deleteScheduledmessagebase(x.id);
  const e_del = waitForScheduledmessagebaseDeleted(id);
  block(matchAddScheduledmessagebase(id), function () {
    verifyScheduledmessagebaseDoesNotExist(id);
  });
});

bthread("SendnewsubscriptionmessagesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSendnewsubscriptionmessages(x.id);
  const e_add = waitForSendnewsubscriptionmessagesAdded(id);
  block(matchDeleteSendnewsubscriptionmessages(id), function () {
    verifySendnewsubscriptionmessagesExists(id);
  });
  updateSendnewsubscriptionmessages(x.id);
  updateSendnewsubscriptionmessages(x.id);
  const e_upd = waitForSendnewsubscriptionmessagesUpdated(id);
  block(matchDeleteSendnewsubscriptionmessages(id), function () {
    verifySendnewsubscriptionmessagesUpdated(id);
  });
  deleteSendnewsubscriptionmessages(x.id);
  const e_del = waitForSendnewsubscriptionmessagesDeleted(id);
  block(matchAddSendnewsubscriptionmessages(id), function () {
    verifySendnewsubscriptionmessagesDoesNotExist(id);
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

bthread("TopicspolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTopicspolicy(x.id);
  const e_add = waitForTopicspolicyAdded(id);
  block(matchDeleteTopicspolicy(id), function () {
    verifyTopicspolicyExists(id);
  });
  updateTopicspolicy(x.id);
  updateTopicspolicy(x.id);
  const e_upd = waitForTopicspolicyUpdated(id);
  block(matchDeleteTopicspolicy(id), function () {
    verifyTopicspolicyUpdated(id);
  });
  deleteTopicspolicy(x.id);
  const e_del = waitForTopicspolicyDeleted(id);
  block(matchAddTopicspolicy(id), function () {
    verifyTopicspolicyDoesNotExist(id);
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

bthread("UserbaseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserbase(x.id);
  const e_add = waitForUserbaseAdded(id);
  block(matchDeleteUserbase(id), function () {
    verifyUserbaseExists(id);
  });
  updateUserbase(x.id);
  updateUserbase(x.id);
  const e_upd = waitForUserbaseUpdated(id);
  block(matchDeleteUserbase(id), function () {
    verifyUserbaseUpdated(id);
  });
  deleteUserbase(x.id);
  const e_del = waitForUserbaseDeleted(id);
  block(matchAddUserbase(id), function () {
    verifyUserbaseDoesNotExist(id);
  });
});

bthread("UserdeactivatederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserdeactivatederror(x.id);
  const e_add = waitForUserdeactivatederrorAdded(id);
  block(matchDeleteUserdeactivatederror(id), function () {
    verifyUserdeactivatederrorExists(id);
  });
  updateUserdeactivatederror(x.id);
  updateUserdeactivatederror(x.id);
  const e_upd = waitForUserdeactivatederrorUpdated(id);
  block(matchDeleteUserdeactivatederror(id), function () {
    verifyUserdeactivatederrorUpdated(id);
  });
  deleteUserdeactivatederror(x.id);
  const e_del = waitForUserdeactivatederrorDeleted(id);
  block(matchAddUserdeactivatederror(id), function () {
    verifyUserdeactivatederrorDoesNotExist(id);
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

bthread("UsernotauthorizederrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsernotauthorizederror(x.id);
  const e_add = waitForUsernotauthorizederrorAdded(id);
  block(matchDeleteUsernotauthorizederror(id), function () {
    verifyUsernotauthorizederrorExists(id);
  });
  updateUsernotauthorizederror(x.id);
  updateUsernotauthorizederror(x.id);
  const e_upd = waitForUsernotauthorizederrorUpdated(id);
  block(matchDeleteUsernotauthorizederror(id), function () {
    verifyUsernotauthorizederrorUpdated(id);
  });
  deleteUsernotauthorizederror(x.id);
  const e_del = waitForUsernotauthorizederrorDeleted(id);
  block(matchAddUsernotauthorizederror(id), function () {
    verifyUsernotauthorizederrorDoesNotExist(id);
  });
});

bthread("UserstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserstatus(x.id);
  const e_add = waitForUserstatusAdded(id);
  block(matchDeleteUserstatus(id), function () {
    verifyUserstatusExists(id);
  });
  updateUserstatus(x.id);
  updateUserstatus(x.id);
  const e_upd = waitForUserstatusUpdated(id);
  block(matchDeleteUserstatus(id), function () {
    verifyUserstatusUpdated(id);
  });
  deleteUserstatus(x.id);
  const e_del = waitForUserstatusDeleted(id);
  block(matchAddUserstatus(id), function () {
    verifyUserstatusDoesNotExist(id);
  });
});

bthread("WebhookconfigoptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhookconfigoption(x.id);
  const e_add = waitForWebhookconfigoptionAdded(id);
  block(matchDeleteWebhookconfigoption(id), function () {
    verifyWebhookconfigoptionExists(id);
  });
  updateWebhookconfigoption(x.id);
  updateWebhookconfigoption(x.id);
  const e_upd = waitForWebhookconfigoptionUpdated(id);
  block(matchDeleteWebhookconfigoption(id), function () {
    verifyWebhookconfigoptionUpdated(id);
  });
  deleteWebhookconfigoption(x.id);
  const e_del = waitForWebhookconfigoptionDeleted(id);
  block(matchAddWebhookconfigoption(id), function () {
    verifyWebhookconfigoptionDoesNotExist(id);
  });
});

bthread("WebhookurloptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhookurloption(x.id);
  const e_add = waitForWebhookurloptionAdded(id);
  block(matchDeleteWebhookurloption(id), function () {
    verifyWebhookurloptionExists(id);
  });
  updateWebhookurloption(x.id);
  updateWebhookurloption(x.id);
  const e_upd = waitForWebhookurloptionUpdated(id);
  block(matchDeleteWebhookurloption(id), function () {
    verifyWebhookurloptionUpdated(id);
  });
  deleteWebhookurloption(x.id);
  const e_del = waitForWebhookurloptionDeleted(id);
  block(matchAddWebhookurloption(id), function () {
    verifyWebhookurloptionDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Allpublicchannels nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAllpublicchannels(x.id);
  for (var i=0; i<steps; i++) {
    updateAllpublicchannels(x.id);
  }
  if (pick([true,false])) { deleteAllpublicchannels(x.id); }
  verifyAllpublicchannelsExists(x.id);
  verifyAllpublicchannelsUpdated(x.id);
});

bthread("Allpublicchannels nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAllpublicchannels(a.id);
  block(matchAddAllpublicchannels(a.id, ANY), function () {});
  addAllpublicchannels(b.id);
});

bthread("Anchor nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addAnchor(x.id);
  for (var i=0; i<steps; i++) {
    updateAnchor(x.id);
  }
  if (pick([true,false])) { deleteAnchor(x.id); }
  verifyAnchorExists(x.id);
  verifyAnchorUpdated(x.id);
});

bthread("Anchor nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAnchor(a.id);
  block(matchAddAnchor(a.id, ANY), function () {});
  addAnchor(b.id);
});

bthread("Apikeyresponse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addApikeyresponse(x.id);
  for (var i=0; i<steps; i++) {
    updateApikeyresponse(x.id);
  }
  if (pick([true,false])) { deleteApikeyresponse(x.id); }
  verifyApikeyresponseExists(x.id);
  verifyApikeyresponseUpdated(x.id);
});

bthread("Apikeyresponse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApikeyresponse(a.id);
  block(matchAddApikeyresponse(a.id, ANY), function () {});
  addApikeyresponse(b.id);
});

bthread("Attachment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Badeventqueueiderror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBadeventqueueiderror(x.id);
  for (var i=0; i<steps; i++) {
    updateBadeventqueueiderror(x.id);
  }
  if (pick([true,false])) { deleteBadeventqueueiderror(x.id); }
  verifyBadeventqueueiderrorExists(x.id);
  verifyBadeventqueueiderrorUpdated(x.id);
});

bthread("Badeventqueueiderror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBadeventqueueiderror(a.id);
  block(matchAddBadeventqueueiderror(a.id, ANY), function () {});
  addBadeventqueueiderror(b.id);
});

bthread("Basicbot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBasicbot(x.id);
  for (var i=0; i<steps; i++) {
    updateBasicbot(x.id);
  }
  if (pick([true,false])) { deleteBasicbot(x.id); }
  verifyBasicbotExists(x.id);
  verifyBasicbotUpdated(x.id);
});

bthread("Basicbot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBasicbot(a.id);
  block(matchAddBasicbot(a.id, ANY), function () {});
  addBasicbot(b.id);
});

bthread("Basicbotbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBasicbotbase(x.id);
  for (var i=0; i<steps; i++) {
    updateBasicbotbase(x.id);
  }
  if (pick([true,false])) { deleteBasicbotbase(x.id); }
  verifyBasicbotbaseExists(x.id);
  verifyBasicbotbaseUpdated(x.id);
});

bthread("Basicbotbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBasicbotbase(a.id);
  block(matchAddBasicbotbase(a.id, ANY), function () {});
  addBasicbotbase(b.id);
});

bthread("Basicchannel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBasicchannel(x.id);
  for (var i=0; i<steps; i++) {
    updateBasicchannel(x.id);
  }
  if (pick([true,false])) { deleteBasicchannel(x.id); }
  verifyBasicchannelExists(x.id);
  verifyBasicchannelUpdated(x.id);
});

bthread("Basicchannel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBasicchannel(a.id);
  block(matchAddBasicchannel(a.id, ANY), function () {});
  addBasicchannel(b.id);
});

bthread("Basicchannelbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBasicchannelbase(x.id);
  for (var i=0; i<steps; i++) {
    updateBasicchannelbase(x.id);
  }
  if (pick([true,false])) { deleteBasicchannelbase(x.id); }
  verifyBasicchannelbaseExists(x.id);
  verifyBasicchannelbaseUpdated(x.id);
});

bthread("Basicchannelbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBasicchannelbase(a.id);
  block(matchAddBasicchannelbase(a.id, ANY), function () {});
  addBasicchannelbase(b.id);
});

bthread("Bot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBot(x.id);
  for (var i=0; i<steps; i++) {
    updateBot(x.id);
  }
  if (pick([true,false])) { deleteBot(x.id); }
  verifyBotExists(x.id);
  verifyBotUpdated(x.id);
});

bthread("Bot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBot(a.id);
  block(matchAddBot(a.id, ANY), function () {});
  addBot(b.id);
});

bthread("Botconfiguration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBotconfiguration(x.id);
  for (var i=0; i<steps; i++) {
    updateBotconfiguration(x.id);
  }
  if (pick([true,false])) { deleteBotconfiguration(x.id); }
  verifyBotconfigurationExists(x.id);
  verifyBotconfigurationUpdated(x.id);
});

bthread("Botconfiguration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBotconfiguration(a.id);
  block(matchAddBotconfiguration(a.id, ANY), function () {});
  addBotconfiguration(b.id);
});

bthread("Canadministerchannelgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCanadministerchannelgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCanadministerchannelgroup(x.id);
  }
  if (pick([true,false])) { deleteCanadministerchannelgroup(x.id); }
  verifyCanadministerchannelgroupExists(x.id);
  verifyCanadministerchannelgroupUpdated(x.id);
});

bthread("Canadministerchannelgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCanadministerchannelgroup(a.id);
  block(matchAddCanadministerchannelgroup(a.id, ANY), function () {});
  addCanadministerchannelgroup(b.id);
});

bthread("Candeleteanymessagegroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCandeleteanymessagegroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCandeleteanymessagegroup(x.id);
  }
  if (pick([true,false])) { deleteCandeleteanymessagegroup(x.id); }
  verifyCandeleteanymessagegroupExists(x.id);
  verifyCandeleteanymessagegroupUpdated(x.id);
});

bthread("Candeleteanymessagegroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCandeleteanymessagegroup(a.id);
  block(matchAddCandeleteanymessagegroup(a.id, ANY), function () {});
  addCandeleteanymessagegroup(b.id);
});

bthread("Candeleteownmessagegroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCandeleteownmessagegroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCandeleteownmessagegroup(x.id);
  }
  if (pick([true,false])) { deleteCandeleteownmessagegroup(x.id); }
  verifyCandeleteownmessagegroupExists(x.id);
  verifyCandeleteownmessagegroupUpdated(x.id);
});

bthread("Candeleteownmessagegroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCandeleteownmessagegroup(a.id);
  block(matchAddCandeleteownmessagegroup(a.id, ANY), function () {});
  addCandeleteownmessagegroup(b.id);
});

bthread("Canmovemessagesoutofchannelgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCanmovemessagesoutofchannelgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCanmovemessagesoutofchannelgroup(x.id);
  }
  if (pick([true,false])) { deleteCanmovemessagesoutofchannelgroup(x.id); }
  verifyCanmovemessagesoutofchannelgroupExists(x.id);
  verifyCanmovemessagesoutofchannelgroupUpdated(x.id);
});

bthread("Canmovemessagesoutofchannelgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCanmovemessagesoutofchannelgroup(a.id);
  block(matchAddCanmovemessagesoutofchannelgroup(a.id, ANY), function () {});
  addCanmovemessagesoutofchannelgroup(b.id);
});

bthread("Canmovemessageswithinchannelgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCanmovemessageswithinchannelgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCanmovemessageswithinchannelgroup(x.id);
  }
  if (pick([true,false])) { deleteCanmovemessageswithinchannelgroup(x.id); }
  verifyCanmovemessageswithinchannelgroupExists(x.id);
  verifyCanmovemessageswithinchannelgroupUpdated(x.id);
});

bthread("Canmovemessageswithinchannelgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCanmovemessageswithinchannelgroup(a.id);
  block(matchAddCanmovemessageswithinchannelgroup(a.id, ANY), function () {});
  addCanmovemessageswithinchannelgroup(b.id);
});

bthread("Canremovesubscribersgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCanremovesubscribersgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCanremovesubscribersgroup(x.id);
  }
  if (pick([true,false])) { deleteCanremovesubscribersgroup(x.id); }
  verifyCanremovesubscribersgroupExists(x.id);
  verifyCanremovesubscribersgroupUpdated(x.id);
});

bthread("Canremovesubscribersgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCanremovesubscribersgroup(a.id);
  block(matchAddCanremovesubscribersgroup(a.id, ANY), function () {});
  addCanremovesubscribersgroup(b.id);
});

bthread("Canresolvetopicsgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCanresolvetopicsgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCanresolvetopicsgroup(x.id);
  }
  if (pick([true,false])) { deleteCanresolvetopicsgroup(x.id); }
  verifyCanresolvetopicsgroupExists(x.id);
  verifyCanresolvetopicsgroupUpdated(x.id);
});

bthread("Canresolvetopicsgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCanresolvetopicsgroup(a.id);
  block(matchAddCanresolvetopicsgroup(a.id, ANY), function () {});
  addCanresolvetopicsgroup(b.id);
});

bthread("Cansendmessagegroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCansendmessagegroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCansendmessagegroup(x.id);
  }
  if (pick([true,false])) { deleteCansendmessagegroup(x.id); }
  verifyCansendmessagegroupExists(x.id);
  verifyCansendmessagegroupUpdated(x.id);
});

bthread("Cansendmessagegroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCansendmessagegroup(a.id);
  block(matchAddCansendmessagegroup(a.id, ANY), function () {});
  addCansendmessagegroup(b.id);
});

bthread("Cansubscribegroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCansubscribegroup(x.id);
  for (var i=0; i<steps; i++) {
    updateCansubscribegroup(x.id);
  }
  if (pick([true,false])) { deleteCansubscribegroup(x.id); }
  verifyCansubscribegroupExists(x.id);
  verifyCansubscribegroupUpdated(x.id);
});

bthread("Cansubscribegroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCansubscribegroup(a.id);
  block(matchAddCansubscribegroup(a.id, ANY), function () {});
  addCansubscribegroup(b.id);
});

bthread("Channelcanaddsubscribersgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChannelcanaddsubscribersgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateChannelcanaddsubscribersgroup(x.id);
  }
  if (pick([true,false])) { deleteChannelcanaddsubscribersgroup(x.id); }
  verifyChannelcanaddsubscribersgroupExists(x.id);
  verifyChannelcanaddsubscribersgroupUpdated(x.id);
});

bthread("Channelcanaddsubscribersgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChannelcanaddsubscribersgroup(a.id);
  block(matchAddChannelcanaddsubscribersgroup(a.id, ANY), function () {});
  addChannelcanaddsubscribersgroup(b.id);
});

bthread("Channelfolder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Codederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCodederror(x.id);
  for (var i=0; i<steps; i++) {
    updateCodederror(x.id);
  }
  if (pick([true,false])) { deleteCodederror(x.id); }
  verifyCodederrorExists(x.id);
  verifyCodederrorUpdated(x.id);
});

bthread("Codederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCodederror(a.id);
  block(matchAddCodederror(a.id, ANY), function () {});
  addCodederror(b.id);
});

bthread("Codederrorbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCodederrorbase(x.id);
  for (var i=0; i<steps; i++) {
    updateCodederrorbase(x.id);
  }
  if (pick([true,false])) { deleteCodederrorbase(x.id); }
  verifyCodederrorbaseExists(x.id);
  verifyCodederrorbaseUpdated(x.id);
});

bthread("Codederrorbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCodederrorbase(a.id);
  block(matchAddCodederrorbase(a.id, ANY), function () {});
  addCodederrorbase(b.id);
});

bthread("Customprofilefield nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCustomprofilefield(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomprofilefield(x.id);
  }
  if (pick([true,false])) { deleteCustomprofilefield(x.id); }
  verifyCustomprofilefieldExists(x.id);
  verifyCustomprofilefieldUpdated(x.id);
});

bthread("Customprofilefield nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCustomprofilefield(a.id);
  block(matchAddCustomprofilefield(a.id, ANY), function () {});
  addCustomprofilefield(b.id);
});

bthread("Defaultchannelgroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDefaultchannelgroup(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultchannelgroup(x.id);
  }
  if (pick([true,false])) { deleteDefaultchannelgroup(x.id); }
  verifyDefaultchannelgroupExists(x.id);
  verifyDefaultchannelgroupUpdated(x.id);
});

bthread("Defaultchannelgroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDefaultchannelgroup(a.id);
  block(matchAddDefaultchannelgroup(a.id, ANY), function () {});
  addDefaultchannelgroup(b.id);
});

bthread("Draft nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Emailaddressvisibility nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEmailaddressvisibility(x.id);
  for (var i=0; i<steps; i++) {
    updateEmailaddressvisibility(x.id);
  }
  if (pick([true,false])) { deleteEmailaddressvisibility(x.id); }
  verifyEmailaddressvisibilityExists(x.id);
  verifyEmailaddressvisibilityUpdated(x.id);
});

bthread("Emailaddressvisibility nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmailaddressvisibility(a.id);
  block(matchAddEmailaddressvisibility(a.id, ANY), function () {});
  addEmailaddressvisibility(b.id);
});

bthread("Emojibase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEmojibase(x.id);
  for (var i=0; i<steps; i++) {
    updateEmojibase(x.id);
  }
  if (pick([true,false])) { deleteEmojibase(x.id); }
  verifyEmojibaseExists(x.id);
  verifyEmojibaseUpdated(x.id);
});

bthread("Emojibase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmojibase(a.id);
  block(matchAddEmojibase(a.id, ANY), function () {});
  addEmojibase(b.id);
});

bthread("Emojicode nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEmojicode(x.id);
  for (var i=0; i<steps; i++) {
    updateEmojicode(x.id);
  }
  if (pick([true,false])) { deleteEmojicode(x.id); }
  verifyEmojicodeExists(x.id);
  verifyEmojicodeUpdated(x.id);
});

bthread("Emojicode nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmojicode(a.id);
  block(matchAddEmojicode(a.id, ANY), function () {});
  addEmojicode(b.id);
});

bthread("Emojireaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEmojireaction(x.id);
  for (var i=0; i<steps; i++) {
    updateEmojireaction(x.id);
  }
  if (pick([true,false])) { deleteEmojireaction(x.id); }
  verifyEmojireactionExists(x.id);
  verifyEmojireactionUpdated(x.id);
});

bthread("Emojireaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmojireaction(a.id);
  block(matchAddEmojireaction(a.id, ANY), function () {});
  addEmojireaction(b.id);
});

bthread("Emojireactionevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEmojireactionevent(x.id);
  for (var i=0; i<steps; i++) {
    updateEmojireactionevent(x.id);
  }
  if (pick([true,false])) { deleteEmojireactionevent(x.id); }
  verifyEmojireactioneventExists(x.id);
  verifyEmojireactioneventUpdated(x.id);
});

bthread("Emojireactionevent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmojireactionevent(a.id);
  block(matchAddEmojireactionevent(a.id, ANY), function () {});
  addEmojireactionevent(b.id);
});

bthread("Eventidschema nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEventidschema(x.id);
  for (var i=0; i<steps; i++) {
    updateEventidschema(x.id);
  }
  if (pick([true,false])) { deleteEventidschema(x.id); }
  verifyEventidschemaExists(x.id);
  verifyEventidschemaUpdated(x.id);
});

bthread("Eventidschema nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEventidschema(a.id);
  block(matchAddEventidschema(a.id, ANY), function () {});
  addEventidschema(b.id);
});

bthread("Eventtypes nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEventtypes(x.id);
  for (var i=0; i<steps; i++) {
    updateEventtypes(x.id);
  }
  if (pick([true,false])) { deleteEventtypes(x.id); }
  verifyEventtypesExists(x.id);
  verifyEventtypesUpdated(x.id);
});

bthread("Eventtypes nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEventtypes(a.id);
  block(matchAddEventtypes(a.id, ANY), function () {});
  addEventtypes(b.id);
});

bthread("Eventtypeschema nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addEventtypeschema(x.id);
  for (var i=0; i<steps; i++) {
    updateEventtypeschema(x.id);
  }
  if (pick([true,false])) { deleteEventtypeschema(x.id); }
  verifyEventtypeschemaExists(x.id);
  verifyEventtypeschemaUpdated(x.id);
});

bthread("Eventtypeschema nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEventtypeschema(a.id);
  block(matchAddEventtypeschema(a.id, ANY), function () {});
  addEventtypeschema(b.id);
});

bthread("Failedtoconnectbouncererror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFailedtoconnectbouncererror(x.id);
  for (var i=0; i<steps; i++) {
    updateFailedtoconnectbouncererror(x.id);
  }
  if (pick([true,false])) { deleteFailedtoconnectbouncererror(x.id); }
  verifyFailedtoconnectbouncererrorExists(x.id);
  verifyFailedtoconnectbouncererrorUpdated(x.id);
});

bthread("Failedtoconnectbouncererror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFailedtoconnectbouncererror(a.id);
  block(matchAddFailedtoconnectbouncererror(a.id, ANY), function () {});
  addFailedtoconnectbouncererror(b.id);
});

bthread("Folderid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFolderid(x.id);
  for (var i=0; i<steps; i++) {
    updateFolderid(x.id);
  }
  if (pick([true,false])) { deleteFolderid(x.id); }
  verifyFolderidExists(x.id);
  verifyFolderidUpdated(x.id);
});

bthread("Folderid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFolderid(a.id);
  block(matchAddFolderid(a.id, ANY), function () {});
  addFolderid(b.id);
});

bthread("Grouppermissionsetting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGrouppermissionsetting(x.id);
  for (var i=0; i<steps; i++) {
    updateGrouppermissionsetting(x.id);
  }
  if (pick([true,false])) { deleteGrouppermissionsetting(x.id); }
  verifyGrouppermissionsettingExists(x.id);
  verifyGrouppermissionsettingUpdated(x.id);
});

bthread("Grouppermissionsetting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGrouppermissionsetting(a.id);
  block(matchAddGrouppermissionsetting(a.id, ANY), function () {});
  addGrouppermissionsetting(b.id);
});

bthread("Groupsettingvalue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGroupsettingvalue(x.id);
  for (var i=0; i<steps; i++) {
    updateGroupsettingvalue(x.id);
  }
  if (pick([true,false])) { deleteGroupsettingvalue(x.id); }
  verifyGroupsettingvalueExists(x.id);
  verifyGroupsettingvalueUpdated(x.id);
});

bthread("Groupsettingvalue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGroupsettingvalue(a.id);
  block(matchAddGroupsettingvalue(a.id, ANY), function () {});
  addGroupsettingvalue(b.id);
});

bthread("Groupsettingvalueupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGroupsettingvalueupdate(x.id);
  for (var i=0; i<steps; i++) {
    updateGroupsettingvalueupdate(x.id);
  }
  if (pick([true,false])) { deleteGroupsettingvalueupdate(x.id); }
  verifyGroupsettingvalueupdateExists(x.id);
  verifyGroupsettingvalueupdateUpdated(x.id);
});

bthread("Groupsettingvalueupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGroupsettingvalueupdate(a.id);
  block(matchAddGroupsettingvalueupdate(a.id, ANY), function () {});
  addGroupsettingvalueupdate(b.id);
});

bthread("Historypublictosubscribers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addHistorypublictosubscribers(x.id);
  for (var i=0; i<steps; i++) {
    updateHistorypublictosubscribers(x.id);
  }
  if (pick([true,false])) { deleteHistorypublictosubscribers(x.id); }
  verifyHistorypublictosubscribersExists(x.id);
  verifyHistorypublictosubscribersUpdated(x.id);
});

bthread("Historypublictosubscribers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHistorypublictosubscribers(a.id);
  block(matchAddHistorypublictosubscribers(a.id, ANY), function () {});
  addHistorypublictosubscribers(b.id);
});

bthread("Ignoredparametersbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIgnoredparametersbase(x.id);
  for (var i=0; i<steps; i++) {
    updateIgnoredparametersbase(x.id);
  }
  if (pick([true,false])) { deleteIgnoredparametersbase(x.id); }
  verifyIgnoredparametersbaseExists(x.id);
  verifyIgnoredparametersbaseUpdated(x.id);
});

bthread("Ignoredparametersbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIgnoredparametersbase(a.id);
  block(matchAddIgnoredparametersbase(a.id, ANY), function () {});
  addIgnoredparametersbase(b.id);
});

bthread("Ignoredparameterssuccess nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIgnoredparameterssuccess(x.id);
  for (var i=0; i<steps; i++) {
    updateIgnoredparameterssuccess(x.id);
  }
  if (pick([true,false])) { deleteIgnoredparameterssuccess(x.id); }
  verifyIgnoredparameterssuccessExists(x.id);
  verifyIgnoredparameterssuccessUpdated(x.id);
});

bthread("Ignoredparameterssuccess nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIgnoredparameterssuccess(a.id);
  block(matchAddIgnoredparameterssuccess(a.id, ANY), function () {});
  addIgnoredparameterssuccess(b.id);
});

bthread("Ignoredparametersunsupported nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIgnoredparametersunsupported(x.id);
  for (var i=0; i<steps; i++) {
    updateIgnoredparametersunsupported(x.id);
  }
  if (pick([true,false])) { deleteIgnoredparametersunsupported(x.id); }
  verifyIgnoredparametersunsupportedExists(x.id);
  verifyIgnoredparametersunsupportedUpdated(x.id);
});

bthread("Ignoredparametersunsupported nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIgnoredparametersunsupported(a.id);
  block(matchAddIgnoredparametersunsupported(a.id, ANY), function () {});
  addIgnoredparametersunsupported(b.id);
});

bthread("Incompatibleparameterserror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIncompatibleparameterserror(x.id);
  for (var i=0; i<steps; i++) {
    updateIncompatibleparameterserror(x.id);
  }
  if (pick([true,false])) { deleteIncompatibleparameterserror(x.id); }
  verifyIncompatibleparameterserrorExists(x.id);
  verifyIncompatibleparameterserrorUpdated(x.id);
});

bthread("Incompatibleparameterserror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIncompatibleparameterserror(a.id);
  block(matchAddIncompatibleparameterserror(a.id, ANY), function () {});
  addIncompatibleparameterserror(b.id);
});

bthread("Internalbouncerservererror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInternalbouncerservererror(x.id);
  for (var i=0; i<steps; i++) {
    updateInternalbouncerservererror(x.id);
  }
  if (pick([true,false])) { deleteInternalbouncerservererror(x.id); }
  verifyInternalbouncerservererrorExists(x.id);
  verifyInternalbouncerservererrorUpdated(x.id);
});

bthread("Internalbouncerservererror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInternalbouncerservererror(a.id);
  block(matchAddInternalbouncerservererror(a.id, ANY), function () {});
  addInternalbouncerservererror(b.id);
});

bthread("Invalidapikeyerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInvalidapikeyerror(x.id);
  for (var i=0; i<steps; i++) {
    updateInvalidapikeyerror(x.id);
  }
  if (pick([true,false])) { deleteInvalidapikeyerror(x.id); }
  verifyInvalidapikeyerrorExists(x.id);
  verifyInvalidapikeyerrorUpdated(x.id);
});

bthread("Invalidapikeyerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvalidapikeyerror(a.id);
  block(matchAddInvalidapikeyerror(a.id, ANY), function () {});
  addInvalidapikeyerror(b.id);
});

bthread("Invalidchannelerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInvalidchannelerror(x.id);
  for (var i=0; i<steps; i++) {
    updateInvalidchannelerror(x.id);
  }
  if (pick([true,false])) { deleteInvalidchannelerror(x.id); }
  verifyInvalidchannelerrorExists(x.id);
  verifyInvalidchannelerrorUpdated(x.id);
});

bthread("Invalidchannelerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvalidchannelerror(a.id);
  block(matchAddInvalidchannelerror(a.id, ANY), function () {});
  addInvalidchannelerror(b.id);
});

bthread("Invalidmessageerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInvalidmessageerror(x.id);
  for (var i=0; i<steps; i++) {
    updateInvalidmessageerror(x.id);
  }
  if (pick([true,false])) { deleteInvalidmessageerror(x.id); }
  verifyInvalidmessageerrorExists(x.id);
  verifyInvalidmessageerrorUpdated(x.id);
});

bthread("Invalidmessageerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvalidmessageerror(a.id);
  block(matchAddInvalidmessageerror(a.id, ANY), function () {});
  addInvalidmessageerror(b.id);
});

bthread("Invalidpushdevicetokenerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInvalidpushdevicetokenerror(x.id);
  for (var i=0; i<steps; i++) {
    updateInvalidpushdevicetokenerror(x.id);
  }
  if (pick([true,false])) { deleteInvalidpushdevicetokenerror(x.id); }
  verifyInvalidpushdevicetokenerrorExists(x.id);
  verifyInvalidpushdevicetokenerrorUpdated(x.id);
});

bthread("Invalidpushdevicetokenerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvalidpushdevicetokenerror(a.id);
  block(matchAddInvalidpushdevicetokenerror(a.id, ANY), function () {});
  addInvalidpushdevicetokenerror(b.id);
});

bthread("Invalidremotepushdevicetokenerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInvalidremotepushdevicetokenerror(x.id);
  for (var i=0; i<steps; i++) {
    updateInvalidremotepushdevicetokenerror(x.id);
  }
  if (pick([true,false])) { deleteInvalidremotepushdevicetokenerror(x.id); }
  verifyInvalidremotepushdevicetokenerrorExists(x.id);
  verifyInvalidremotepushdevicetokenerrorUpdated(x.id);
});

bthread("Invalidremotepushdevicetokenerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvalidremotepushdevicetokenerror(a.id);
  block(matchAddInvalidremotepushdevicetokenerror(a.id, ANY), function () {});
  addInvalidremotepushdevicetokenerror(b.id);
});

bthread("Invitationfailederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInvitationfailederror(x.id);
  for (var i=0; i<steps; i++) {
    updateInvitationfailederror(x.id);
  }
  if (pick([true,false])) { deleteInvitationfailederror(x.id); }
  verifyInvitationfailederrorExists(x.id);
  verifyInvitationfailederrorUpdated(x.id);
});

bthread("Invitationfailederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInvitationfailederror(a.id);
  block(matchAddInvitationfailederror(a.id, ANY), function () {});
  addInvitationfailederror(b.id);
});

bthread("Invite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Inviteexpirationparameter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInviteexpirationparameter(x.id);
  for (var i=0; i<steps; i++) {
    updateInviteexpirationparameter(x.id);
  }
  if (pick([true,false])) { deleteInviteexpirationparameter(x.id); }
  verifyInviteexpirationparameterExists(x.id);
  verifyInviteexpirationparameterUpdated(x.id);
});

bthread("Inviteexpirationparameter nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInviteexpirationparameter(a.id);
  block(matchAddInviteexpirationparameter(a.id, ANY), function () {});
  addInviteexpirationparameter(b.id);
});

bthread("Inviteroleparameter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addInviteroleparameter(x.id);
  for (var i=0; i<steps; i++) {
    updateInviteroleparameter(x.id);
  }
  if (pick([true,false])) { deleteInviteroleparameter(x.id); }
  verifyInviteroleparameterExists(x.id);
  verifyInviteroleparameterUpdated(x.id);
});

bthread("Inviteroleparameter nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInviteroleparameter(a.id);
  block(matchAddInviteroleparameter(a.id, ANY), function () {});
  addInviteroleparameter(b.id);
});

bthread("Jsonresponsebase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addJsonresponsebase(x.id);
  for (var i=0; i<steps; i++) {
    updateJsonresponsebase(x.id);
  }
  if (pick([true,false])) { deleteJsonresponsebase(x.id); }
  verifyJsonresponsebaseExists(x.id);
  verifyJsonresponsebaseUpdated(x.id);
});

bthread("Jsonresponsebase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addJsonresponsebase(a.id);
  block(matchAddJsonresponsebase(a.id, ANY), function () {});
  addJsonresponsebase(b.id);
});

bthread("Jsonsuccess nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addJsonsuccess(x.id);
  for (var i=0; i<steps; i++) {
    updateJsonsuccess(x.id);
  }
  if (pick([true,false])) { deleteJsonsuccess(x.id); }
  verifyJsonsuccessExists(x.id);
  verifyJsonsuccessUpdated(x.id);
});

bthread("Jsonsuccess nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addJsonsuccess(a.id);
  block(matchAddJsonsuccess(a.id, ANY), function () {});
  addJsonsuccess(b.id);
});

bthread("Jsonsuccessbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addJsonsuccessbase(x.id);
  for (var i=0; i<steps; i++) {
    updateJsonsuccessbase(x.id);
  }
  if (pick([true,false])) { deleteJsonsuccessbase(x.id); }
  verifyJsonsuccessbaseExists(x.id);
  verifyJsonsuccessbaseUpdated(x.id);
});

bthread("Jsonsuccessbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addJsonsuccessbase(a.id);
  block(matchAddJsonsuccessbase(a.id, ANY), function () {});
  addJsonsuccessbase(b.id);
});

bthread("Legacypresenceformat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLegacypresenceformat(x.id);
  for (var i=0; i<steps; i++) {
    updateLegacypresenceformat(x.id);
  }
  if (pick([true,false])) { deleteLegacypresenceformat(x.id); }
  verifyLegacypresenceformatExists(x.id);
  verifyLegacypresenceformatUpdated(x.id);
});

bthread("Legacypresenceformat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLegacypresenceformat(a.id);
  block(matchAddLegacypresenceformat(a.id, ANY), function () {});
  addLegacypresenceformat(b.id);
});

bthread("Linkifierpattern nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLinkifierpattern(x.id);
  for (var i=0; i<steps; i++) {
    updateLinkifierpattern(x.id);
  }
  if (pick([true,false])) { deleteLinkifierpattern(x.id); }
  verifyLinkifierpatternExists(x.id);
  verifyLinkifierpatternUpdated(x.id);
});

bthread("Linkifierpattern nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLinkifierpattern(a.id);
  block(matchAddLinkifierpattern(a.id, ANY), function () {});
  addLinkifierpattern(b.id);
});

bthread("Linkifierurltemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLinkifierurltemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateLinkifierurltemplate(x.id);
  }
  if (pick([true,false])) { deleteLinkifierurltemplate(x.id); }
  verifyLinkifierurltemplateExists(x.id);
  verifyLinkifierurltemplateUpdated(x.id);
});

bthread("Linkifierurltemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLinkifierurltemplate(a.id);
  block(matchAddLinkifierurltemplate(a.id, ANY), function () {});
  addLinkifierurltemplate(b.id);
});

bthread("Messageretentiondays nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessageretentiondays(x.id);
  for (var i=0; i<steps; i++) {
    updateMessageretentiondays(x.id);
  }
  if (pick([true,false])) { deleteMessageretentiondays(x.id); }
  verifyMessageretentiondaysExists(x.id);
  verifyMessageretentiondaysUpdated(x.id);
});

bthread("Messageretentiondays nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessageretentiondays(a.id);
  block(matchAddMessageretentiondays(a.id, ANY), function () {});
  addMessageretentiondays(b.id);
});

bthread("Messagesbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessagesbase(x.id);
  for (var i=0; i<steps; i++) {
    updateMessagesbase(x.id);
  }
  if (pick([true,false])) { deleteMessagesbase(x.id); }
  verifyMessagesbaseExists(x.id);
  verifyMessagesbaseUpdated(x.id);
});

bthread("Messagesbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessagesbase(a.id);
  block(matchAddMessagesbase(a.id, ANY), function () {});
  addMessagesbase(b.id);
});

bthread("Messagesevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMessagesevent(x.id);
  for (var i=0; i<steps; i++) {
    updateMessagesevent(x.id);
  }
  if (pick([true,false])) { deleteMessagesevent(x.id); }
  verifyMessageseventExists(x.id);
  verifyMessageseventUpdated(x.id);
});

bthread("Messagesevent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMessagesevent(a.id);
  block(matchAddMessagesevent(a.id, ANY), function () {});
  addMessagesevent(b.id);
});

bthread("Missingargumenterror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMissingargumenterror(x.id);
  for (var i=0; i<steps; i++) {
    updateMissingargumenterror(x.id);
  }
  if (pick([true,false])) { deleteMissingargumenterror(x.id); }
  verifyMissingargumenterrorExists(x.id);
  verifyMissingargumenterrorUpdated(x.id);
});

bthread("Missingargumenterror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMissingargumenterror(a.id);
  block(matchAddMissingargumenterror(a.id, ANY), function () {});
  addMissingargumenterror(b.id);
});

bthread("Modernpresenceformat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addModernpresenceformat(x.id);
  for (var i=0; i<steps; i++) {
    updateModernpresenceformat(x.id);
  }
  if (pick([true,false])) { deleteModernpresenceformat(x.id); }
  verifyModernpresenceformatExists(x.id);
  verifyModernpresenceformatUpdated(x.id);
});

bthread("Modernpresenceformat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addModernpresenceformat(a.id);
  block(matchAddModernpresenceformat(a.id, ANY), function () {});
  addModernpresenceformat(b.id);
});

bthread("Narrow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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

bthread("Noactivepushdeviceerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNoactivepushdeviceerror(x.id);
  for (var i=0; i<steps; i++) {
    updateNoactivepushdeviceerror(x.id);
  }
  if (pick([true,false])) { deleteNoactivepushdeviceerror(x.id); }
  verifyNoactivepushdeviceerrorExists(x.id);
  verifyNoactivepushdeviceerrorUpdated(x.id);
});

bthread("Noactivepushdeviceerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNoactivepushdeviceerror(a.id);
  block(matchAddNoactivepushdeviceerror(a.id, ANY), function () {});
  addNoactivepushdeviceerror(b.id);
});

bthread("Nonexistingchanneliderror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNonexistingchanneliderror(x.id);
  for (var i=0; i<steps; i++) {
    updateNonexistingchanneliderror(x.id);
  }
  if (pick([true,false])) { deleteNonexistingchanneliderror(x.id); }
  verifyNonexistingchanneliderrorExists(x.id);
  verifyNonexistingchanneliderrorUpdated(x.id);
});

bthread("Nonexistingchanneliderror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNonexistingchanneliderror(a.id);
  block(matchAddNonexistingchanneliderror(a.id, ANY), function () {});
  addNonexistingchanneliderror(b.id);
});

bthread("Nonexistingchannelnameerror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNonexistingchannelnameerror(x.id);
  for (var i=0; i<steps; i++) {
    updateNonexistingchannelnameerror(x.id);
  }
  if (pick([true,false])) { deleteNonexistingchannelnameerror(x.id); }
  verifyNonexistingchannelnameerrorExists(x.id);
  verifyNonexistingchannelnameerrorUpdated(x.id);
});

bthread("Nonexistingchannelnameerror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNonexistingchannelnameerror(a.id);
  block(matchAddNonexistingchannelnameerror(a.id, ANY), function () {});
  addNonexistingchannelnameerror(b.id);
});

bthread("Onboardingstep nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOnboardingstep(x.id);
  for (var i=0; i<steps; i++) {
    updateOnboardingstep(x.id);
  }
  if (pick([true,false])) { deleteOnboardingstep(x.id); }
  verifyOnboardingstepExists(x.id);
  verifyOnboardingstepUpdated(x.id);
});

bthread("Onboardingstep nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOnboardingstep(a.id);
  block(matchAddOnboardingstep(a.id, ANY), function () {});
  addOnboardingstep(b.id);
});

bthread("Optionalcontent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOptionalcontent(x.id);
  for (var i=0; i<steps; i++) {
    updateOptionalcontent(x.id);
  }
  if (pick([true,false])) { deleteOptionalcontent(x.id); }
  verifyOptionalcontentExists(x.id);
  verifyOptionalcontentUpdated(x.id);
});

bthread("Optionalcontent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOptionalcontent(a.id);
  block(matchAddOptionalcontent(a.id, ANY), function () {});
  addOptionalcontent(b.id);
});

bthread("Principals nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrincipals(x.id);
  for (var i=0; i<steps; i++) {
    updatePrincipals(x.id);
  }
  if (pick([true,false])) { deletePrincipals(x.id); }
  verifyPrincipalsExists(x.id);
  verifyPrincipalsUpdated(x.id);
});

bthread("Principals nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrincipals(a.id);
  block(matchAddPrincipals(a.id, ANY), function () {});
  addPrincipals(b.id);
});

bthread("Profiledata nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addProfiledata(x.id);
  for (var i=0; i<steps; i++) {
    updateProfiledata(x.id);
  }
  if (pick([true,false])) { deleteProfiledata(x.id); }
  verifyProfiledataExists(x.id);
  verifyProfiledataUpdated(x.id);
});

bthread("Profiledata nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addProfiledata(a.id);
  block(matchAddProfiledata(a.id, ANY), function () {});
  addProfiledata(b.id);
});

bthread("Pushnotificationadminactionrequirederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPushnotificationadminactionrequirederror(x.id);
  for (var i=0; i<steps; i++) {
    updatePushnotificationadminactionrequirederror(x.id);
  }
  if (pick([true,false])) { deletePushnotificationadminactionrequirederror(x.id); }
  verifyPushnotificationadminactionrequirederrorExists(x.id);
  verifyPushnotificationadminactionrequirederrorUpdated(x.id);
});

bthread("Pushnotificationadminactionrequirederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPushnotificationadminactionrequirederror(a.id);
  block(matchAddPushnotificationadminactionrequirederror(a.id, ANY), function () {});
  addPushnotificationadminactionrequirederror(b.id);
});

bthread("Ratelimitederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRatelimitederror(x.id);
  for (var i=0; i<steps; i++) {
    updateRatelimitederror(x.id);
  }
  if (pick([true,false])) { deleteRatelimitederror(x.id); }
  verifyRatelimitederrorExists(x.id);
  verifyRatelimitederrorUpdated(x.id);
});

bthread("Ratelimitederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRatelimitederror(a.id);
  block(matchAddRatelimitederror(a.id, ANY), function () {});
  addRatelimitederror(b.id);
});

bthread("Reactiontype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addReactiontype(x.id);
  for (var i=0; i<steps; i++) {
    updateReactiontype(x.id);
  }
  if (pick([true,false])) { deleteReactiontype(x.id); }
  verifyReactiontypeExists(x.id);
  verifyReactiontypeUpdated(x.id);
});

bthread("Reactiontype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReactiontype(a.id);
  block(matchAddReactiontype(a.id, ANY), function () {});
  addReactiontype(b.id);
});

bthread("Realmauthenticationmethod nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmauthenticationmethod(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmauthenticationmethod(x.id);
  }
  if (pick([true,false])) { deleteRealmauthenticationmethod(x.id); }
  verifyRealmauthenticationmethodExists(x.id);
  verifyRealmauthenticationmethodUpdated(x.id);
});

bthread("Realmauthenticationmethod nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmauthenticationmethod(a.id);
  block(matchAddRealmauthenticationmethod(a.id, ANY), function () {});
  addRealmauthenticationmethod(b.id);
});

bthread("Realmdeactivatederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmdeactivatederror(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmdeactivatederror(x.id);
  }
  if (pick([true,false])) { deleteRealmdeactivatederror(x.id); }
  verifyRealmdeactivatederrorExists(x.id);
  verifyRealmdeactivatederrorUpdated(x.id);
});

bthread("Realmdeactivatederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmdeactivatederror(a.id);
  block(matchAddRealmdeactivatederror(a.id, ANY), function () {});
  addRealmdeactivatederror(b.id);
});

bthread("Realmdomain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmdomain(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmdomain(x.id);
  }
  if (pick([true,false])) { deleteRealmdomain(x.id); }
  verifyRealmdomainExists(x.id);
  verifyRealmdomainUpdated(x.id);
});

bthread("Realmdomain nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmdomain(a.id);
  block(matchAddRealmdomain(a.id, ANY), function () {});
  addRealmdomain(b.id);
});

bthread("Realmemoji nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmemoji(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmemoji(x.id);
  }
  if (pick([true,false])) { deleteRealmemoji(x.id); }
  verifyRealmemojiExists(x.id);
  verifyRealmemojiUpdated(x.id);
});

bthread("Realmemoji nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmemoji(a.id);
  block(matchAddRealmemoji(a.id, ANY), function () {});
  addRealmemoji(b.id);
});

bthread("Realmexport nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmexport(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmexport(x.id);
  }
  if (pick([true,false])) { deleteRealmexport(x.id); }
  verifyRealmexportExists(x.id);
  verifyRealmexportUpdated(x.id);
});

bthread("Realmexport nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmexport(a.id);
  block(matchAddRealmexport(a.id, ANY), function () {});
  addRealmexport(b.id);
});

bthread("Realmplayground nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRealmplayground(x.id);
  for (var i=0; i<steps; i++) {
    updateRealmplayground(x.id);
  }
  if (pick([true,false])) { deleteRealmplayground(x.id); }
  verifyRealmplaygroundExists(x.id);
  verifyRealmplaygroundUpdated(x.id);
});

bthread("Realmplayground nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRealmplayground(a.id);
  block(matchAddRealmplayground(a.id, ANY), function () {});
  addRealmplayground(b.id);
});

bthread("Reminder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Requiredcontent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRequiredcontent(x.id);
  for (var i=0; i<steps; i++) {
    updateRequiredcontent(x.id);
  }
  if (pick([true,false])) { deleteRequiredcontent(x.id); }
  verifyRequiredcontentExists(x.id);
  verifyRequiredcontentUpdated(x.id);
});

bthread("Requiredcontent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRequiredcontent(a.id);
  block(matchAddRequiredcontent(a.id, ANY), function () {});
  addRequiredcontent(b.id);
});

bthread("Savedsnippet nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const steps = pick([0,1,2,3]);
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

bthread("Scheduledmessagebase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addScheduledmessagebase(x.id);
  for (var i=0; i<steps; i++) {
    updateScheduledmessagebase(x.id);
  }
  if (pick([true,false])) { deleteScheduledmessagebase(x.id); }
  verifyScheduledmessagebaseExists(x.id);
  verifyScheduledmessagebaseUpdated(x.id);
});

bthread("Scheduledmessagebase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScheduledmessagebase(a.id);
  block(matchAddScheduledmessagebase(a.id, ANY), function () {});
  addScheduledmessagebase(b.id);
});

bthread("Sendnewsubscriptionmessages nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSendnewsubscriptionmessages(x.id);
  for (var i=0; i<steps; i++) {
    updateSendnewsubscriptionmessages(x.id);
  }
  if (pick([true,false])) { deleteSendnewsubscriptionmessages(x.id); }
  verifySendnewsubscriptionmessagesExists(x.id);
  verifySendnewsubscriptionmessagesUpdated(x.id);
});

bthread("Sendnewsubscriptionmessages nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSendnewsubscriptionmessages(a.id);
  block(matchAddSendnewsubscriptionmessages(a.id, ANY), function () {});
  addSendnewsubscriptionmessages(b.id);
});

bthread("Subscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Topicspolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTopicspolicy(x.id);
  for (var i=0; i<steps; i++) {
    updateTopicspolicy(x.id);
  }
  if (pick([true,false])) { deleteTopicspolicy(x.id); }
  verifyTopicspolicyExists(x.id);
  verifyTopicspolicyUpdated(x.id);
});

bthread("Topicspolicy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTopicspolicy(a.id);
  block(matchAddTopicspolicy(a.id, ANY), function () {});
  addTopicspolicy(b.id);
});

bthread("User nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Userbase nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserbase(x.id);
  for (var i=0; i<steps; i++) {
    updateUserbase(x.id);
  }
  if (pick([true,false])) { deleteUserbase(x.id); }
  verifyUserbaseExists(x.id);
  verifyUserbaseUpdated(x.id);
});

bthread("Userbase nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserbase(a.id);
  block(matchAddUserbase(a.id, ANY), function () {});
  addUserbase(b.id);
});

bthread("Userdeactivatederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserdeactivatederror(x.id);
  for (var i=0; i<steps; i++) {
    updateUserdeactivatederror(x.id);
  }
  if (pick([true,false])) { deleteUserdeactivatederror(x.id); }
  verifyUserdeactivatederrorExists(x.id);
  verifyUserdeactivatederrorUpdated(x.id);
});

bthread("Userdeactivatederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserdeactivatederror(a.id);
  block(matchAddUserdeactivatederror(a.id, ANY), function () {});
  addUserdeactivatederror(b.id);
});

bthread("Usergroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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

bthread("Usernotauthorizederror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUsernotauthorizederror(x.id);
  for (var i=0; i<steps; i++) {
    updateUsernotauthorizederror(x.id);
  }
  if (pick([true,false])) { deleteUsernotauthorizederror(x.id); }
  verifyUsernotauthorizederrorExists(x.id);
  verifyUsernotauthorizederrorUpdated(x.id);
});

bthread("Usernotauthorizederror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsernotauthorizederror(a.id);
  block(matchAddUsernotauthorizederror(a.id, ANY), function () {});
  addUsernotauthorizederror(b.id);
});

bthread("Userstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUserstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateUserstatus(x.id);
  }
  if (pick([true,false])) { deleteUserstatus(x.id); }
  verifyUserstatusExists(x.id);
  verifyUserstatusUpdated(x.id);
});

bthread("Userstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserstatus(a.id);
  block(matchAddUserstatus(a.id, ANY), function () {});
  addUserstatus(b.id);
});

bthread("Webhookconfigoption nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhookconfigoption(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhookconfigoption(x.id);
  }
  if (pick([true,false])) { deleteWebhookconfigoption(x.id); }
  verifyWebhookconfigoptionExists(x.id);
  verifyWebhookconfigoptionUpdated(x.id);
});

bthread("Webhookconfigoption nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhookconfigoption(a.id);
  block(matchAddWebhookconfigoption(a.id, ANY), function () {});
  addWebhookconfigoption(b.id);
});

bthread("Webhookurloption nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhookurloption(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhookurloption(x.id);
  }
  if (pick([true,false])) { deleteWebhookurloption(x.id); }
  verifyWebhookurloptionExists(x.id);
  verifyWebhookurloptionUpdated(x.id);
});

bthread("Webhookurloption nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhookurloption(a.id);
  block(matchAddWebhookurloption(a.id, ANY), function () {});
  addWebhookurloption(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Allpublicchannels create verification", function () {
  const e = waitForAnyAllpublicchannelsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAllpublicchannels(k), function () {
    verifyAllpublicchannelsExists(k);
  });
});

bthread("Allpublicchannels update verification", function () {
  const e = waitForAnyAllpublicchannelsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAllpublicchannels(k), function () {
    verifyAllpublicchannelsUpdated(k);
  });
});

bthread("Allpublicchannels delete verification", function () {
  const e = waitForAnyAllpublicchannelsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAllpublicchannels(k), function () {
    verifyAllpublicchannelsDoesNotExist(k);
  });
});

bthread("Anchor create verification", function () {
  const e = waitForAnyAnchorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnchor(k), function () {
    verifyAnchorExists(k);
  });
});

bthread("Anchor update verification", function () {
  const e = waitForAnyAnchorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnchor(k), function () {
    verifyAnchorUpdated(k);
  });
});

bthread("Anchor delete verification", function () {
  const e = waitForAnyAnchorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAnchor(k), function () {
    verifyAnchorDoesNotExist(k);
  });
});

bthread("Apikeyresponse create verification", function () {
  const e = waitForAnyApikeyresponseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApikeyresponse(k), function () {
    verifyApikeyresponseExists(k);
  });
});

bthread("Apikeyresponse update verification", function () {
  const e = waitForAnyApikeyresponseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApikeyresponse(k), function () {
    verifyApikeyresponseUpdated(k);
  });
});

bthread("Apikeyresponse delete verification", function () {
  const e = waitForAnyApikeyresponseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApikeyresponse(k), function () {
    verifyApikeyresponseDoesNotExist(k);
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

bthread("Badeventqueueiderror create verification", function () {
  const e = waitForAnyBadeventqueueiderrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBadeventqueueiderror(k), function () {
    verifyBadeventqueueiderrorExists(k);
  });
});

bthread("Badeventqueueiderror update verification", function () {
  const e = waitForAnyBadeventqueueiderrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBadeventqueueiderror(k), function () {
    verifyBadeventqueueiderrorUpdated(k);
  });
});

bthread("Badeventqueueiderror delete verification", function () {
  const e = waitForAnyBadeventqueueiderrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBadeventqueueiderror(k), function () {
    verifyBadeventqueueiderrorDoesNotExist(k);
  });
});

bthread("Basicbot create verification", function () {
  const e = waitForAnyBasicbotAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicbot(k), function () {
    verifyBasicbotExists(k);
  });
});

bthread("Basicbot update verification", function () {
  const e = waitForAnyBasicbotUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicbot(k), function () {
    verifyBasicbotUpdated(k);
  });
});

bthread("Basicbot delete verification", function () {
  const e = waitForAnyBasicbotDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBasicbot(k), function () {
    verifyBasicbotDoesNotExist(k);
  });
});

bthread("Basicbotbase create verification", function () {
  const e = waitForAnyBasicbotbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicbotbase(k), function () {
    verifyBasicbotbaseExists(k);
  });
});

bthread("Basicbotbase update verification", function () {
  const e = waitForAnyBasicbotbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicbotbase(k), function () {
    verifyBasicbotbaseUpdated(k);
  });
});

bthread("Basicbotbase delete verification", function () {
  const e = waitForAnyBasicbotbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBasicbotbase(k), function () {
    verifyBasicbotbaseDoesNotExist(k);
  });
});

bthread("Basicchannel create verification", function () {
  const e = waitForAnyBasicchannelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicchannel(k), function () {
    verifyBasicchannelExists(k);
  });
});

bthread("Basicchannel update verification", function () {
  const e = waitForAnyBasicchannelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicchannel(k), function () {
    verifyBasicchannelUpdated(k);
  });
});

bthread("Basicchannel delete verification", function () {
  const e = waitForAnyBasicchannelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBasicchannel(k), function () {
    verifyBasicchannelDoesNotExist(k);
  });
});

bthread("Basicchannelbase create verification", function () {
  const e = waitForAnyBasicchannelbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicchannelbase(k), function () {
    verifyBasicchannelbaseExists(k);
  });
});

bthread("Basicchannelbase update verification", function () {
  const e = waitForAnyBasicchannelbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBasicchannelbase(k), function () {
    verifyBasicchannelbaseUpdated(k);
  });
});

bthread("Basicchannelbase delete verification", function () {
  const e = waitForAnyBasicchannelbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBasicchannelbase(k), function () {
    verifyBasicchannelbaseDoesNotExist(k);
  });
});

bthread("Bot create verification", function () {
  const e = waitForAnyBotAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBot(k), function () {
    verifyBotExists(k);
  });
});

bthread("Bot update verification", function () {
  const e = waitForAnyBotUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBot(k), function () {
    verifyBotUpdated(k);
  });
});

bthread("Bot delete verification", function () {
  const e = waitForAnyBotDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBot(k), function () {
    verifyBotDoesNotExist(k);
  });
});

bthread("Botconfiguration create verification", function () {
  const e = waitForAnyBotconfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBotconfiguration(k), function () {
    verifyBotconfigurationExists(k);
  });
});

bthread("Botconfiguration update verification", function () {
  const e = waitForAnyBotconfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBotconfiguration(k), function () {
    verifyBotconfigurationUpdated(k);
  });
});

bthread("Botconfiguration delete verification", function () {
  const e = waitForAnyBotconfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBotconfiguration(k), function () {
    verifyBotconfigurationDoesNotExist(k);
  });
});

bthread("Canadministerchannelgroup create verification", function () {
  const e = waitForAnyCanadministerchannelgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanadministerchannelgroup(k), function () {
    verifyCanadministerchannelgroupExists(k);
  });
});

bthread("Canadministerchannelgroup update verification", function () {
  const e = waitForAnyCanadministerchannelgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanadministerchannelgroup(k), function () {
    verifyCanadministerchannelgroupUpdated(k);
  });
});

bthread("Canadministerchannelgroup delete verification", function () {
  const e = waitForAnyCanadministerchannelgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCanadministerchannelgroup(k), function () {
    verifyCanadministerchannelgroupDoesNotExist(k);
  });
});

bthread("Candeleteanymessagegroup create verification", function () {
  const e = waitForAnyCandeleteanymessagegroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCandeleteanymessagegroup(k), function () {
    verifyCandeleteanymessagegroupExists(k);
  });
});

bthread("Candeleteanymessagegroup update verification", function () {
  const e = waitForAnyCandeleteanymessagegroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCandeleteanymessagegroup(k), function () {
    verifyCandeleteanymessagegroupUpdated(k);
  });
});

bthread("Candeleteanymessagegroup delete verification", function () {
  const e = waitForAnyCandeleteanymessagegroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCandeleteanymessagegroup(k), function () {
    verifyCandeleteanymessagegroupDoesNotExist(k);
  });
});

bthread("Candeleteownmessagegroup create verification", function () {
  const e = waitForAnyCandeleteownmessagegroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCandeleteownmessagegroup(k), function () {
    verifyCandeleteownmessagegroupExists(k);
  });
});

bthread("Candeleteownmessagegroup update verification", function () {
  const e = waitForAnyCandeleteownmessagegroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCandeleteownmessagegroup(k), function () {
    verifyCandeleteownmessagegroupUpdated(k);
  });
});

bthread("Candeleteownmessagegroup delete verification", function () {
  const e = waitForAnyCandeleteownmessagegroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCandeleteownmessagegroup(k), function () {
    verifyCandeleteownmessagegroupDoesNotExist(k);
  });
});

bthread("Canmovemessagesoutofchannelgroup create verification", function () {
  const e = waitForAnyCanmovemessagesoutofchannelgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanmovemessagesoutofchannelgroup(k), function () {
    verifyCanmovemessagesoutofchannelgroupExists(k);
  });
});

bthread("Canmovemessagesoutofchannelgroup update verification", function () {
  const e = waitForAnyCanmovemessagesoutofchannelgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanmovemessagesoutofchannelgroup(k), function () {
    verifyCanmovemessagesoutofchannelgroupUpdated(k);
  });
});

bthread("Canmovemessagesoutofchannelgroup delete verification", function () {
  const e = waitForAnyCanmovemessagesoutofchannelgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCanmovemessagesoutofchannelgroup(k), function () {
    verifyCanmovemessagesoutofchannelgroupDoesNotExist(k);
  });
});

bthread("Canmovemessageswithinchannelgroup create verification", function () {
  const e = waitForAnyCanmovemessageswithinchannelgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanmovemessageswithinchannelgroup(k), function () {
    verifyCanmovemessageswithinchannelgroupExists(k);
  });
});

bthread("Canmovemessageswithinchannelgroup update verification", function () {
  const e = waitForAnyCanmovemessageswithinchannelgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanmovemessageswithinchannelgroup(k), function () {
    verifyCanmovemessageswithinchannelgroupUpdated(k);
  });
});

bthread("Canmovemessageswithinchannelgroup delete verification", function () {
  const e = waitForAnyCanmovemessageswithinchannelgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCanmovemessageswithinchannelgroup(k), function () {
    verifyCanmovemessageswithinchannelgroupDoesNotExist(k);
  });
});

bthread("Canremovesubscribersgroup create verification", function () {
  const e = waitForAnyCanremovesubscribersgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanremovesubscribersgroup(k), function () {
    verifyCanremovesubscribersgroupExists(k);
  });
});

bthread("Canremovesubscribersgroup update verification", function () {
  const e = waitForAnyCanremovesubscribersgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanremovesubscribersgroup(k), function () {
    verifyCanremovesubscribersgroupUpdated(k);
  });
});

bthread("Canremovesubscribersgroup delete verification", function () {
  const e = waitForAnyCanremovesubscribersgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCanremovesubscribersgroup(k), function () {
    verifyCanremovesubscribersgroupDoesNotExist(k);
  });
});

bthread("Canresolvetopicsgroup create verification", function () {
  const e = waitForAnyCanresolvetopicsgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanresolvetopicsgroup(k), function () {
    verifyCanresolvetopicsgroupExists(k);
  });
});

bthread("Canresolvetopicsgroup update verification", function () {
  const e = waitForAnyCanresolvetopicsgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCanresolvetopicsgroup(k), function () {
    verifyCanresolvetopicsgroupUpdated(k);
  });
});

bthread("Canresolvetopicsgroup delete verification", function () {
  const e = waitForAnyCanresolvetopicsgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCanresolvetopicsgroup(k), function () {
    verifyCanresolvetopicsgroupDoesNotExist(k);
  });
});

bthread("Cansendmessagegroup create verification", function () {
  const e = waitForAnyCansendmessagegroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCansendmessagegroup(k), function () {
    verifyCansendmessagegroupExists(k);
  });
});

bthread("Cansendmessagegroup update verification", function () {
  const e = waitForAnyCansendmessagegroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCansendmessagegroup(k), function () {
    verifyCansendmessagegroupUpdated(k);
  });
});

bthread("Cansendmessagegroup delete verification", function () {
  const e = waitForAnyCansendmessagegroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCansendmessagegroup(k), function () {
    verifyCansendmessagegroupDoesNotExist(k);
  });
});

bthread("Cansubscribegroup create verification", function () {
  const e = waitForAnyCansubscribegroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCansubscribegroup(k), function () {
    verifyCansubscribegroupExists(k);
  });
});

bthread("Cansubscribegroup update verification", function () {
  const e = waitForAnyCansubscribegroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCansubscribegroup(k), function () {
    verifyCansubscribegroupUpdated(k);
  });
});

bthread("Cansubscribegroup delete verification", function () {
  const e = waitForAnyCansubscribegroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCansubscribegroup(k), function () {
    verifyCansubscribegroupDoesNotExist(k);
  });
});

bthread("Channelcanaddsubscribersgroup create verification", function () {
  const e = waitForAnyChannelcanaddsubscribersgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChannelcanaddsubscribersgroup(k), function () {
    verifyChannelcanaddsubscribersgroupExists(k);
  });
});

bthread("Channelcanaddsubscribersgroup update verification", function () {
  const e = waitForAnyChannelcanaddsubscribersgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChannelcanaddsubscribersgroup(k), function () {
    verifyChannelcanaddsubscribersgroupUpdated(k);
  });
});

bthread("Channelcanaddsubscribersgroup delete verification", function () {
  const e = waitForAnyChannelcanaddsubscribersgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChannelcanaddsubscribersgroup(k), function () {
    verifyChannelcanaddsubscribersgroupDoesNotExist(k);
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

bthread("Codederror create verification", function () {
  const e = waitForAnyCodederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodederror(k), function () {
    verifyCodederrorExists(k);
  });
});

bthread("Codederror update verification", function () {
  const e = waitForAnyCodederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodederror(k), function () {
    verifyCodederrorUpdated(k);
  });
});

bthread("Codederror delete verification", function () {
  const e = waitForAnyCodederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodederror(k), function () {
    verifyCodederrorDoesNotExist(k);
  });
});

bthread("Codederrorbase create verification", function () {
  const e = waitForAnyCodederrorbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodederrorbase(k), function () {
    verifyCodederrorbaseExists(k);
  });
});

bthread("Codederrorbase update verification", function () {
  const e = waitForAnyCodederrorbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodederrorbase(k), function () {
    verifyCodederrorbaseUpdated(k);
  });
});

bthread("Codederrorbase delete verification", function () {
  const e = waitForAnyCodederrorbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodederrorbase(k), function () {
    verifyCodederrorbaseDoesNotExist(k);
  });
});

bthread("Customprofilefield create verification", function () {
  const e = waitForAnyCustomprofilefieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomprofilefield(k), function () {
    verifyCustomprofilefieldExists(k);
  });
});

bthread("Customprofilefield update verification", function () {
  const e = waitForAnyCustomprofilefieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomprofilefield(k), function () {
    verifyCustomprofilefieldUpdated(k);
  });
});

bthread("Customprofilefield delete verification", function () {
  const e = waitForAnyCustomprofilefieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomprofilefield(k), function () {
    verifyCustomprofilefieldDoesNotExist(k);
  });
});

bthread("Defaultchannelgroup create verification", function () {
  const e = waitForAnyDefaultchannelgroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultchannelgroup(k), function () {
    verifyDefaultchannelgroupExists(k);
  });
});

bthread("Defaultchannelgroup update verification", function () {
  const e = waitForAnyDefaultchannelgroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultchannelgroup(k), function () {
    verifyDefaultchannelgroupUpdated(k);
  });
});

bthread("Defaultchannelgroup delete verification", function () {
  const e = waitForAnyDefaultchannelgroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultchannelgroup(k), function () {
    verifyDefaultchannelgroupDoesNotExist(k);
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

bthread("Emailaddressvisibility create verification", function () {
  const e = waitForAnyEmailaddressvisibilityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmailaddressvisibility(k), function () {
    verifyEmailaddressvisibilityExists(k);
  });
});

bthread("Emailaddressvisibility update verification", function () {
  const e = waitForAnyEmailaddressvisibilityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmailaddressvisibility(k), function () {
    verifyEmailaddressvisibilityUpdated(k);
  });
});

bthread("Emailaddressvisibility delete verification", function () {
  const e = waitForAnyEmailaddressvisibilityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmailaddressvisibility(k), function () {
    verifyEmailaddressvisibilityDoesNotExist(k);
  });
});

bthread("Emojibase create verification", function () {
  const e = waitForAnyEmojibaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojibase(k), function () {
    verifyEmojibaseExists(k);
  });
});

bthread("Emojibase update verification", function () {
  const e = waitForAnyEmojibaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojibase(k), function () {
    verifyEmojibaseUpdated(k);
  });
});

bthread("Emojibase delete verification", function () {
  const e = waitForAnyEmojibaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmojibase(k), function () {
    verifyEmojibaseDoesNotExist(k);
  });
});

bthread("Emojicode create verification", function () {
  const e = waitForAnyEmojicodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojicode(k), function () {
    verifyEmojicodeExists(k);
  });
});

bthread("Emojicode update verification", function () {
  const e = waitForAnyEmojicodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojicode(k), function () {
    verifyEmojicodeUpdated(k);
  });
});

bthread("Emojicode delete verification", function () {
  const e = waitForAnyEmojicodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmojicode(k), function () {
    verifyEmojicodeDoesNotExist(k);
  });
});

bthread("Emojireaction create verification", function () {
  const e = waitForAnyEmojireactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojireaction(k), function () {
    verifyEmojireactionExists(k);
  });
});

bthread("Emojireaction update verification", function () {
  const e = waitForAnyEmojireactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojireaction(k), function () {
    verifyEmojireactionUpdated(k);
  });
});

bthread("Emojireaction delete verification", function () {
  const e = waitForAnyEmojireactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmojireaction(k), function () {
    verifyEmojireactionDoesNotExist(k);
  });
});

bthread("Emojireactionevent create verification", function () {
  const e = waitForAnyEmojireactioneventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojireactionevent(k), function () {
    verifyEmojireactioneventExists(k);
  });
});

bthread("Emojireactionevent update verification", function () {
  const e = waitForAnyEmojireactioneventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmojireactionevent(k), function () {
    verifyEmojireactioneventUpdated(k);
  });
});

bthread("Emojireactionevent delete verification", function () {
  const e = waitForAnyEmojireactioneventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmojireactionevent(k), function () {
    verifyEmojireactioneventDoesNotExist(k);
  });
});

bthread("Eventidschema create verification", function () {
  const e = waitForAnyEventidschemaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventidschema(k), function () {
    verifyEventidschemaExists(k);
  });
});

bthread("Eventidschema update verification", function () {
  const e = waitForAnyEventidschemaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventidschema(k), function () {
    verifyEventidschemaUpdated(k);
  });
});

bthread("Eventidschema delete verification", function () {
  const e = waitForAnyEventidschemaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEventidschema(k), function () {
    verifyEventidschemaDoesNotExist(k);
  });
});

bthread("Eventtypes create verification", function () {
  const e = waitForAnyEventtypesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventtypes(k), function () {
    verifyEventtypesExists(k);
  });
});

bthread("Eventtypes update verification", function () {
  const e = waitForAnyEventtypesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventtypes(k), function () {
    verifyEventtypesUpdated(k);
  });
});

bthread("Eventtypes delete verification", function () {
  const e = waitForAnyEventtypesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEventtypes(k), function () {
    verifyEventtypesDoesNotExist(k);
  });
});

bthread("Eventtypeschema create verification", function () {
  const e = waitForAnyEventtypeschemaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventtypeschema(k), function () {
    verifyEventtypeschemaExists(k);
  });
});

bthread("Eventtypeschema update verification", function () {
  const e = waitForAnyEventtypeschemaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEventtypeschema(k), function () {
    verifyEventtypeschemaUpdated(k);
  });
});

bthread("Eventtypeschema delete verification", function () {
  const e = waitForAnyEventtypeschemaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEventtypeschema(k), function () {
    verifyEventtypeschemaDoesNotExist(k);
  });
});

bthread("Failedtoconnectbouncererror create verification", function () {
  const e = waitForAnyFailedtoconnectbouncererrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFailedtoconnectbouncererror(k), function () {
    verifyFailedtoconnectbouncererrorExists(k);
  });
});

bthread("Failedtoconnectbouncererror update verification", function () {
  const e = waitForAnyFailedtoconnectbouncererrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFailedtoconnectbouncererror(k), function () {
    verifyFailedtoconnectbouncererrorUpdated(k);
  });
});

bthread("Failedtoconnectbouncererror delete verification", function () {
  const e = waitForAnyFailedtoconnectbouncererrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFailedtoconnectbouncererror(k), function () {
    verifyFailedtoconnectbouncererrorDoesNotExist(k);
  });
});

bthread("Folderid create verification", function () {
  const e = waitForAnyFolderidAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFolderid(k), function () {
    verifyFolderidExists(k);
  });
});

bthread("Folderid update verification", function () {
  const e = waitForAnyFolderidUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFolderid(k), function () {
    verifyFolderidUpdated(k);
  });
});

bthread("Folderid delete verification", function () {
  const e = waitForAnyFolderidDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFolderid(k), function () {
    verifyFolderidDoesNotExist(k);
  });
});

bthread("Grouppermissionsetting create verification", function () {
  const e = waitForAnyGrouppermissionsettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrouppermissionsetting(k), function () {
    verifyGrouppermissionsettingExists(k);
  });
});

bthread("Grouppermissionsetting update verification", function () {
  const e = waitForAnyGrouppermissionsettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrouppermissionsetting(k), function () {
    verifyGrouppermissionsettingUpdated(k);
  });
});

bthread("Grouppermissionsetting delete verification", function () {
  const e = waitForAnyGrouppermissionsettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGrouppermissionsetting(k), function () {
    verifyGrouppermissionsettingDoesNotExist(k);
  });
});

bthread("Groupsettingvalue create verification", function () {
  const e = waitForAnyGroupsettingvalueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupsettingvalue(k), function () {
    verifyGroupsettingvalueExists(k);
  });
});

bthread("Groupsettingvalue update verification", function () {
  const e = waitForAnyGroupsettingvalueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupsettingvalue(k), function () {
    verifyGroupsettingvalueUpdated(k);
  });
});

bthread("Groupsettingvalue delete verification", function () {
  const e = waitForAnyGroupsettingvalueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGroupsettingvalue(k), function () {
    verifyGroupsettingvalueDoesNotExist(k);
  });
});

bthread("Groupsettingvalueupdate create verification", function () {
  const e = waitForAnyGroupsettingvalueupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupsettingvalueupdate(k), function () {
    verifyGroupsettingvalueupdateExists(k);
  });
});

bthread("Groupsettingvalueupdate update verification", function () {
  const e = waitForAnyGroupsettingvalueupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGroupsettingvalueupdate(k), function () {
    verifyGroupsettingvalueupdateUpdated(k);
  });
});

bthread("Groupsettingvalueupdate delete verification", function () {
  const e = waitForAnyGroupsettingvalueupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGroupsettingvalueupdate(k), function () {
    verifyGroupsettingvalueupdateDoesNotExist(k);
  });
});

bthread("Historypublictosubscribers create verification", function () {
  const e = waitForAnyHistorypublictosubscribersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHistorypublictosubscribers(k), function () {
    verifyHistorypublictosubscribersExists(k);
  });
});

bthread("Historypublictosubscribers update verification", function () {
  const e = waitForAnyHistorypublictosubscribersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHistorypublictosubscribers(k), function () {
    verifyHistorypublictosubscribersUpdated(k);
  });
});

bthread("Historypublictosubscribers delete verification", function () {
  const e = waitForAnyHistorypublictosubscribersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHistorypublictosubscribers(k), function () {
    verifyHistorypublictosubscribersDoesNotExist(k);
  });
});

bthread("Ignoredparametersbase create verification", function () {
  const e = waitForAnyIgnoredparametersbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIgnoredparametersbase(k), function () {
    verifyIgnoredparametersbaseExists(k);
  });
});

bthread("Ignoredparametersbase update verification", function () {
  const e = waitForAnyIgnoredparametersbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIgnoredparametersbase(k), function () {
    verifyIgnoredparametersbaseUpdated(k);
  });
});

bthread("Ignoredparametersbase delete verification", function () {
  const e = waitForAnyIgnoredparametersbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIgnoredparametersbase(k), function () {
    verifyIgnoredparametersbaseDoesNotExist(k);
  });
});

bthread("Ignoredparameterssuccess create verification", function () {
  const e = waitForAnyIgnoredparameterssuccessAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIgnoredparameterssuccess(k), function () {
    verifyIgnoredparameterssuccessExists(k);
  });
});

bthread("Ignoredparameterssuccess update verification", function () {
  const e = waitForAnyIgnoredparameterssuccessUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIgnoredparameterssuccess(k), function () {
    verifyIgnoredparameterssuccessUpdated(k);
  });
});

bthread("Ignoredparameterssuccess delete verification", function () {
  const e = waitForAnyIgnoredparameterssuccessDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIgnoredparameterssuccess(k), function () {
    verifyIgnoredparameterssuccessDoesNotExist(k);
  });
});

bthread("Ignoredparametersunsupported create verification", function () {
  const e = waitForAnyIgnoredparametersunsupportedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIgnoredparametersunsupported(k), function () {
    verifyIgnoredparametersunsupportedExists(k);
  });
});

bthread("Ignoredparametersunsupported update verification", function () {
  const e = waitForAnyIgnoredparametersunsupportedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIgnoredparametersunsupported(k), function () {
    verifyIgnoredparametersunsupportedUpdated(k);
  });
});

bthread("Ignoredparametersunsupported delete verification", function () {
  const e = waitForAnyIgnoredparametersunsupportedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIgnoredparametersunsupported(k), function () {
    verifyIgnoredparametersunsupportedDoesNotExist(k);
  });
});

bthread("Incompatibleparameterserror create verification", function () {
  const e = waitForAnyIncompatibleparameterserrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncompatibleparameterserror(k), function () {
    verifyIncompatibleparameterserrorExists(k);
  });
});

bthread("Incompatibleparameterserror update verification", function () {
  const e = waitForAnyIncompatibleparameterserrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIncompatibleparameterserror(k), function () {
    verifyIncompatibleparameterserrorUpdated(k);
  });
});

bthread("Incompatibleparameterserror delete verification", function () {
  const e = waitForAnyIncompatibleparameterserrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIncompatibleparameterserror(k), function () {
    verifyIncompatibleparameterserrorDoesNotExist(k);
  });
});

bthread("Internalbouncerservererror create verification", function () {
  const e = waitForAnyInternalbouncerservererrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInternalbouncerservererror(k), function () {
    verifyInternalbouncerservererrorExists(k);
  });
});

bthread("Internalbouncerservererror update verification", function () {
  const e = waitForAnyInternalbouncerservererrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInternalbouncerservererror(k), function () {
    verifyInternalbouncerservererrorUpdated(k);
  });
});

bthread("Internalbouncerservererror delete verification", function () {
  const e = waitForAnyInternalbouncerservererrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInternalbouncerservererror(k), function () {
    verifyInternalbouncerservererrorDoesNotExist(k);
  });
});

bthread("Invalidapikeyerror create verification", function () {
  const e = waitForAnyInvalidapikeyerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidapikeyerror(k), function () {
    verifyInvalidapikeyerrorExists(k);
  });
});

bthread("Invalidapikeyerror update verification", function () {
  const e = waitForAnyInvalidapikeyerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidapikeyerror(k), function () {
    verifyInvalidapikeyerrorUpdated(k);
  });
});

bthread("Invalidapikeyerror delete verification", function () {
  const e = waitForAnyInvalidapikeyerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvalidapikeyerror(k), function () {
    verifyInvalidapikeyerrorDoesNotExist(k);
  });
});

bthread("Invalidchannelerror create verification", function () {
  const e = waitForAnyInvalidchannelerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidchannelerror(k), function () {
    verifyInvalidchannelerrorExists(k);
  });
});

bthread("Invalidchannelerror update verification", function () {
  const e = waitForAnyInvalidchannelerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidchannelerror(k), function () {
    verifyInvalidchannelerrorUpdated(k);
  });
});

bthread("Invalidchannelerror delete verification", function () {
  const e = waitForAnyInvalidchannelerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvalidchannelerror(k), function () {
    verifyInvalidchannelerrorDoesNotExist(k);
  });
});

bthread("Invalidmessageerror create verification", function () {
  const e = waitForAnyInvalidmessageerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidmessageerror(k), function () {
    verifyInvalidmessageerrorExists(k);
  });
});

bthread("Invalidmessageerror update verification", function () {
  const e = waitForAnyInvalidmessageerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidmessageerror(k), function () {
    verifyInvalidmessageerrorUpdated(k);
  });
});

bthread("Invalidmessageerror delete verification", function () {
  const e = waitForAnyInvalidmessageerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvalidmessageerror(k), function () {
    verifyInvalidmessageerrorDoesNotExist(k);
  });
});

bthread("Invalidpushdevicetokenerror create verification", function () {
  const e = waitForAnyInvalidpushdevicetokenerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidpushdevicetokenerror(k), function () {
    verifyInvalidpushdevicetokenerrorExists(k);
  });
});

bthread("Invalidpushdevicetokenerror update verification", function () {
  const e = waitForAnyInvalidpushdevicetokenerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidpushdevicetokenerror(k), function () {
    verifyInvalidpushdevicetokenerrorUpdated(k);
  });
});

bthread("Invalidpushdevicetokenerror delete verification", function () {
  const e = waitForAnyInvalidpushdevicetokenerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvalidpushdevicetokenerror(k), function () {
    verifyInvalidpushdevicetokenerrorDoesNotExist(k);
  });
});

bthread("Invalidremotepushdevicetokenerror create verification", function () {
  const e = waitForAnyInvalidremotepushdevicetokenerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidremotepushdevicetokenerror(k), function () {
    verifyInvalidremotepushdevicetokenerrorExists(k);
  });
});

bthread("Invalidremotepushdevicetokenerror update verification", function () {
  const e = waitForAnyInvalidremotepushdevicetokenerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvalidremotepushdevicetokenerror(k), function () {
    verifyInvalidremotepushdevicetokenerrorUpdated(k);
  });
});

bthread("Invalidremotepushdevicetokenerror delete verification", function () {
  const e = waitForAnyInvalidremotepushdevicetokenerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvalidremotepushdevicetokenerror(k), function () {
    verifyInvalidremotepushdevicetokenerrorDoesNotExist(k);
  });
});

bthread("Invitationfailederror create verification", function () {
  const e = waitForAnyInvitationfailederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvitationfailederror(k), function () {
    verifyInvitationfailederrorExists(k);
  });
});

bthread("Invitationfailederror update verification", function () {
  const e = waitForAnyInvitationfailederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvitationfailederror(k), function () {
    verifyInvitationfailederrorUpdated(k);
  });
});

bthread("Invitationfailederror delete verification", function () {
  const e = waitForAnyInvitationfailederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvitationfailederror(k), function () {
    verifyInvitationfailederrorDoesNotExist(k);
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

bthread("Inviteexpirationparameter create verification", function () {
  const e = waitForAnyInviteexpirationparameterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInviteexpirationparameter(k), function () {
    verifyInviteexpirationparameterExists(k);
  });
});

bthread("Inviteexpirationparameter update verification", function () {
  const e = waitForAnyInviteexpirationparameterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInviteexpirationparameter(k), function () {
    verifyInviteexpirationparameterUpdated(k);
  });
});

bthread("Inviteexpirationparameter delete verification", function () {
  const e = waitForAnyInviteexpirationparameterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInviteexpirationparameter(k), function () {
    verifyInviteexpirationparameterDoesNotExist(k);
  });
});

bthread("Inviteroleparameter create verification", function () {
  const e = waitForAnyInviteroleparameterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInviteroleparameter(k), function () {
    verifyInviteroleparameterExists(k);
  });
});

bthread("Inviteroleparameter update verification", function () {
  const e = waitForAnyInviteroleparameterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInviteroleparameter(k), function () {
    verifyInviteroleparameterUpdated(k);
  });
});

bthread("Inviteroleparameter delete verification", function () {
  const e = waitForAnyInviteroleparameterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInviteroleparameter(k), function () {
    verifyInviteroleparameterDoesNotExist(k);
  });
});

bthread("Jsonresponsebase create verification", function () {
  const e = waitForAnyJsonresponsebaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJsonresponsebase(k), function () {
    verifyJsonresponsebaseExists(k);
  });
});

bthread("Jsonresponsebase update verification", function () {
  const e = waitForAnyJsonresponsebaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJsonresponsebase(k), function () {
    verifyJsonresponsebaseUpdated(k);
  });
});

bthread("Jsonresponsebase delete verification", function () {
  const e = waitForAnyJsonresponsebaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddJsonresponsebase(k), function () {
    verifyJsonresponsebaseDoesNotExist(k);
  });
});

bthread("Jsonsuccess create verification", function () {
  const e = waitForAnyJsonsuccessAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJsonsuccess(k), function () {
    verifyJsonsuccessExists(k);
  });
});

bthread("Jsonsuccess update verification", function () {
  const e = waitForAnyJsonsuccessUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJsonsuccess(k), function () {
    verifyJsonsuccessUpdated(k);
  });
});

bthread("Jsonsuccess delete verification", function () {
  const e = waitForAnyJsonsuccessDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddJsonsuccess(k), function () {
    verifyJsonsuccessDoesNotExist(k);
  });
});

bthread("Jsonsuccessbase create verification", function () {
  const e = waitForAnyJsonsuccessbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJsonsuccessbase(k), function () {
    verifyJsonsuccessbaseExists(k);
  });
});

bthread("Jsonsuccessbase update verification", function () {
  const e = waitForAnyJsonsuccessbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJsonsuccessbase(k), function () {
    verifyJsonsuccessbaseUpdated(k);
  });
});

bthread("Jsonsuccessbase delete verification", function () {
  const e = waitForAnyJsonsuccessbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddJsonsuccessbase(k), function () {
    verifyJsonsuccessbaseDoesNotExist(k);
  });
});

bthread("Legacypresenceformat create verification", function () {
  const e = waitForAnyLegacypresenceformatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLegacypresenceformat(k), function () {
    verifyLegacypresenceformatExists(k);
  });
});

bthread("Legacypresenceformat update verification", function () {
  const e = waitForAnyLegacypresenceformatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLegacypresenceformat(k), function () {
    verifyLegacypresenceformatUpdated(k);
  });
});

bthread("Legacypresenceformat delete verification", function () {
  const e = waitForAnyLegacypresenceformatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLegacypresenceformat(k), function () {
    verifyLegacypresenceformatDoesNotExist(k);
  });
});

bthread("Linkifierpattern create verification", function () {
  const e = waitForAnyLinkifierpatternAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLinkifierpattern(k), function () {
    verifyLinkifierpatternExists(k);
  });
});

bthread("Linkifierpattern update verification", function () {
  const e = waitForAnyLinkifierpatternUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLinkifierpattern(k), function () {
    verifyLinkifierpatternUpdated(k);
  });
});

bthread("Linkifierpattern delete verification", function () {
  const e = waitForAnyLinkifierpatternDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLinkifierpattern(k), function () {
    verifyLinkifierpatternDoesNotExist(k);
  });
});

bthread("Linkifierurltemplate create verification", function () {
  const e = waitForAnyLinkifierurltemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLinkifierurltemplate(k), function () {
    verifyLinkifierurltemplateExists(k);
  });
});

bthread("Linkifierurltemplate update verification", function () {
  const e = waitForAnyLinkifierurltemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLinkifierurltemplate(k), function () {
    verifyLinkifierurltemplateUpdated(k);
  });
});

bthread("Linkifierurltemplate delete verification", function () {
  const e = waitForAnyLinkifierurltemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLinkifierurltemplate(k), function () {
    verifyLinkifierurltemplateDoesNotExist(k);
  });
});

bthread("Messageretentiondays create verification", function () {
  const e = waitForAnyMessageretentiondaysAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageretentiondays(k), function () {
    verifyMessageretentiondaysExists(k);
  });
});

bthread("Messageretentiondays update verification", function () {
  const e = waitForAnyMessageretentiondaysUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessageretentiondays(k), function () {
    verifyMessageretentiondaysUpdated(k);
  });
});

bthread("Messageretentiondays delete verification", function () {
  const e = waitForAnyMessageretentiondaysDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessageretentiondays(k), function () {
    verifyMessageretentiondaysDoesNotExist(k);
  });
});

bthread("Messagesbase create verification", function () {
  const e = waitForAnyMessagesbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagesbase(k), function () {
    verifyMessagesbaseExists(k);
  });
});

bthread("Messagesbase update verification", function () {
  const e = waitForAnyMessagesbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagesbase(k), function () {
    verifyMessagesbaseUpdated(k);
  });
});

bthread("Messagesbase delete verification", function () {
  const e = waitForAnyMessagesbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessagesbase(k), function () {
    verifyMessagesbaseDoesNotExist(k);
  });
});

bthread("Messagesevent create verification", function () {
  const e = waitForAnyMessageseventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagesevent(k), function () {
    verifyMessageseventExists(k);
  });
});

bthread("Messagesevent update verification", function () {
  const e = waitForAnyMessageseventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMessagesevent(k), function () {
    verifyMessageseventUpdated(k);
  });
});

bthread("Messagesevent delete verification", function () {
  const e = waitForAnyMessageseventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMessagesevent(k), function () {
    verifyMessageseventDoesNotExist(k);
  });
});

bthread("Missingargumenterror create verification", function () {
  const e = waitForAnyMissingargumenterrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMissingargumenterror(k), function () {
    verifyMissingargumenterrorExists(k);
  });
});

bthread("Missingargumenterror update verification", function () {
  const e = waitForAnyMissingargumenterrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMissingargumenterror(k), function () {
    verifyMissingargumenterrorUpdated(k);
  });
});

bthread("Missingargumenterror delete verification", function () {
  const e = waitForAnyMissingargumenterrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMissingargumenterror(k), function () {
    verifyMissingargumenterrorDoesNotExist(k);
  });
});

bthread("Modernpresenceformat create verification", function () {
  const e = waitForAnyModernpresenceformatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteModernpresenceformat(k), function () {
    verifyModernpresenceformatExists(k);
  });
});

bthread("Modernpresenceformat update verification", function () {
  const e = waitForAnyModernpresenceformatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteModernpresenceformat(k), function () {
    verifyModernpresenceformatUpdated(k);
  });
});

bthread("Modernpresenceformat delete verification", function () {
  const e = waitForAnyModernpresenceformatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddModernpresenceformat(k), function () {
    verifyModernpresenceformatDoesNotExist(k);
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

bthread("Noactivepushdeviceerror create verification", function () {
  const e = waitForAnyNoactivepushdeviceerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNoactivepushdeviceerror(k), function () {
    verifyNoactivepushdeviceerrorExists(k);
  });
});

bthread("Noactivepushdeviceerror update verification", function () {
  const e = waitForAnyNoactivepushdeviceerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNoactivepushdeviceerror(k), function () {
    verifyNoactivepushdeviceerrorUpdated(k);
  });
});

bthread("Noactivepushdeviceerror delete verification", function () {
  const e = waitForAnyNoactivepushdeviceerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNoactivepushdeviceerror(k), function () {
    verifyNoactivepushdeviceerrorDoesNotExist(k);
  });
});

bthread("Nonexistingchanneliderror create verification", function () {
  const e = waitForAnyNonexistingchanneliderrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNonexistingchanneliderror(k), function () {
    verifyNonexistingchanneliderrorExists(k);
  });
});

bthread("Nonexistingchanneliderror update verification", function () {
  const e = waitForAnyNonexistingchanneliderrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNonexistingchanneliderror(k), function () {
    verifyNonexistingchanneliderrorUpdated(k);
  });
});

bthread("Nonexistingchanneliderror delete verification", function () {
  const e = waitForAnyNonexistingchanneliderrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNonexistingchanneliderror(k), function () {
    verifyNonexistingchanneliderrorDoesNotExist(k);
  });
});

bthread("Nonexistingchannelnameerror create verification", function () {
  const e = waitForAnyNonexistingchannelnameerrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNonexistingchannelnameerror(k), function () {
    verifyNonexistingchannelnameerrorExists(k);
  });
});

bthread("Nonexistingchannelnameerror update verification", function () {
  const e = waitForAnyNonexistingchannelnameerrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNonexistingchannelnameerror(k), function () {
    verifyNonexistingchannelnameerrorUpdated(k);
  });
});

bthread("Nonexistingchannelnameerror delete verification", function () {
  const e = waitForAnyNonexistingchannelnameerrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNonexistingchannelnameerror(k), function () {
    verifyNonexistingchannelnameerrorDoesNotExist(k);
  });
});

bthread("Onboardingstep create verification", function () {
  const e = waitForAnyOnboardingstepAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOnboardingstep(k), function () {
    verifyOnboardingstepExists(k);
  });
});

bthread("Onboardingstep update verification", function () {
  const e = waitForAnyOnboardingstepUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOnboardingstep(k), function () {
    verifyOnboardingstepUpdated(k);
  });
});

bthread("Onboardingstep delete verification", function () {
  const e = waitForAnyOnboardingstepDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOnboardingstep(k), function () {
    verifyOnboardingstepDoesNotExist(k);
  });
});

bthread("Optionalcontent create verification", function () {
  const e = waitForAnyOptionalcontentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOptionalcontent(k), function () {
    verifyOptionalcontentExists(k);
  });
});

bthread("Optionalcontent update verification", function () {
  const e = waitForAnyOptionalcontentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOptionalcontent(k), function () {
    verifyOptionalcontentUpdated(k);
  });
});

bthread("Optionalcontent delete verification", function () {
  const e = waitForAnyOptionalcontentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOptionalcontent(k), function () {
    verifyOptionalcontentDoesNotExist(k);
  });
});

bthread("Principals create verification", function () {
  const e = waitForAnyPrincipalsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrincipals(k), function () {
    verifyPrincipalsExists(k);
  });
});

bthread("Principals update verification", function () {
  const e = waitForAnyPrincipalsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrincipals(k), function () {
    verifyPrincipalsUpdated(k);
  });
});

bthread("Principals delete verification", function () {
  const e = waitForAnyPrincipalsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrincipals(k), function () {
    verifyPrincipalsDoesNotExist(k);
  });
});

bthread("Profiledata create verification", function () {
  const e = waitForAnyProfiledataAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfiledata(k), function () {
    verifyProfiledataExists(k);
  });
});

bthread("Profiledata update verification", function () {
  const e = waitForAnyProfiledataUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfiledata(k), function () {
    verifyProfiledataUpdated(k);
  });
});

bthread("Profiledata delete verification", function () {
  const e = waitForAnyProfiledataDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProfiledata(k), function () {
    verifyProfiledataDoesNotExist(k);
  });
});

bthread("Pushnotificationadminactionrequirederror create verification", function () {
  const e = waitForAnyPushnotificationadminactionrequirederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushnotificationadminactionrequirederror(k), function () {
    verifyPushnotificationadminactionrequirederrorExists(k);
  });
});

bthread("Pushnotificationadminactionrequirederror update verification", function () {
  const e = waitForAnyPushnotificationadminactionrequirederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushnotificationadminactionrequirederror(k), function () {
    verifyPushnotificationadminactionrequirederrorUpdated(k);
  });
});

bthread("Pushnotificationadminactionrequirederror delete verification", function () {
  const e = waitForAnyPushnotificationadminactionrequirederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPushnotificationadminactionrequirederror(k), function () {
    verifyPushnotificationadminactionrequirederrorDoesNotExist(k);
  });
});

bthread("Ratelimitederror create verification", function () {
  const e = waitForAnyRatelimitederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRatelimitederror(k), function () {
    verifyRatelimitederrorExists(k);
  });
});

bthread("Ratelimitederror update verification", function () {
  const e = waitForAnyRatelimitederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRatelimitederror(k), function () {
    verifyRatelimitederrorUpdated(k);
  });
});

bthread("Ratelimitederror delete verification", function () {
  const e = waitForAnyRatelimitederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRatelimitederror(k), function () {
    verifyRatelimitederrorDoesNotExist(k);
  });
});

bthread("Reactiontype create verification", function () {
  const e = waitForAnyReactiontypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReactiontype(k), function () {
    verifyReactiontypeExists(k);
  });
});

bthread("Reactiontype update verification", function () {
  const e = waitForAnyReactiontypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReactiontype(k), function () {
    verifyReactiontypeUpdated(k);
  });
});

bthread("Reactiontype delete verification", function () {
  const e = waitForAnyReactiontypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReactiontype(k), function () {
    verifyReactiontypeDoesNotExist(k);
  });
});

bthread("Realmauthenticationmethod create verification", function () {
  const e = waitForAnyRealmauthenticationmethodAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmauthenticationmethod(k), function () {
    verifyRealmauthenticationmethodExists(k);
  });
});

bthread("Realmauthenticationmethod update verification", function () {
  const e = waitForAnyRealmauthenticationmethodUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmauthenticationmethod(k), function () {
    verifyRealmauthenticationmethodUpdated(k);
  });
});

bthread("Realmauthenticationmethod delete verification", function () {
  const e = waitForAnyRealmauthenticationmethodDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmauthenticationmethod(k), function () {
    verifyRealmauthenticationmethodDoesNotExist(k);
  });
});

bthread("Realmdeactivatederror create verification", function () {
  const e = waitForAnyRealmdeactivatederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmdeactivatederror(k), function () {
    verifyRealmdeactivatederrorExists(k);
  });
});

bthread("Realmdeactivatederror update verification", function () {
  const e = waitForAnyRealmdeactivatederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmdeactivatederror(k), function () {
    verifyRealmdeactivatederrorUpdated(k);
  });
});

bthread("Realmdeactivatederror delete verification", function () {
  const e = waitForAnyRealmdeactivatederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmdeactivatederror(k), function () {
    verifyRealmdeactivatederrorDoesNotExist(k);
  });
});

bthread("Realmdomain create verification", function () {
  const e = waitForAnyRealmdomainAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmdomain(k), function () {
    verifyRealmdomainExists(k);
  });
});

bthread("Realmdomain update verification", function () {
  const e = waitForAnyRealmdomainUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmdomain(k), function () {
    verifyRealmdomainUpdated(k);
  });
});

bthread("Realmdomain delete verification", function () {
  const e = waitForAnyRealmdomainDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmdomain(k), function () {
    verifyRealmdomainDoesNotExist(k);
  });
});

bthread("Realmemoji create verification", function () {
  const e = waitForAnyRealmemojiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmemoji(k), function () {
    verifyRealmemojiExists(k);
  });
});

bthread("Realmemoji update verification", function () {
  const e = waitForAnyRealmemojiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmemoji(k), function () {
    verifyRealmemojiUpdated(k);
  });
});

bthread("Realmemoji delete verification", function () {
  const e = waitForAnyRealmemojiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmemoji(k), function () {
    verifyRealmemojiDoesNotExist(k);
  });
});

bthread("Realmexport create verification", function () {
  const e = waitForAnyRealmexportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmexport(k), function () {
    verifyRealmexportExists(k);
  });
});

bthread("Realmexport update verification", function () {
  const e = waitForAnyRealmexportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmexport(k), function () {
    verifyRealmexportUpdated(k);
  });
});

bthread("Realmexport delete verification", function () {
  const e = waitForAnyRealmexportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmexport(k), function () {
    verifyRealmexportDoesNotExist(k);
  });
});

bthread("Realmplayground create verification", function () {
  const e = waitForAnyRealmplaygroundAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmplayground(k), function () {
    verifyRealmplaygroundExists(k);
  });
});

bthread("Realmplayground update verification", function () {
  const e = waitForAnyRealmplaygroundUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRealmplayground(k), function () {
    verifyRealmplaygroundUpdated(k);
  });
});

bthread("Realmplayground delete verification", function () {
  const e = waitForAnyRealmplaygroundDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRealmplayground(k), function () {
    verifyRealmplaygroundDoesNotExist(k);
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

bthread("Requiredcontent create verification", function () {
  const e = waitForAnyRequiredcontentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredcontent(k), function () {
    verifyRequiredcontentExists(k);
  });
});

bthread("Requiredcontent update verification", function () {
  const e = waitForAnyRequiredcontentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredcontent(k), function () {
    verifyRequiredcontentUpdated(k);
  });
});

bthread("Requiredcontent delete verification", function () {
  const e = waitForAnyRequiredcontentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequiredcontent(k), function () {
    verifyRequiredcontentDoesNotExist(k);
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

bthread("Scheduledmessagebase create verification", function () {
  const e = waitForAnyScheduledmessagebaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScheduledmessagebase(k), function () {
    verifyScheduledmessagebaseExists(k);
  });
});

bthread("Scheduledmessagebase update verification", function () {
  const e = waitForAnyScheduledmessagebaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScheduledmessagebase(k), function () {
    verifyScheduledmessagebaseUpdated(k);
  });
});

bthread("Scheduledmessagebase delete verification", function () {
  const e = waitForAnyScheduledmessagebaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScheduledmessagebase(k), function () {
    verifyScheduledmessagebaseDoesNotExist(k);
  });
});

bthread("Sendnewsubscriptionmessages create verification", function () {
  const e = waitForAnySendnewsubscriptionmessagesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSendnewsubscriptionmessages(k), function () {
    verifySendnewsubscriptionmessagesExists(k);
  });
});

bthread("Sendnewsubscriptionmessages update verification", function () {
  const e = waitForAnySendnewsubscriptionmessagesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSendnewsubscriptionmessages(k), function () {
    verifySendnewsubscriptionmessagesUpdated(k);
  });
});

bthread("Sendnewsubscriptionmessages delete verification", function () {
  const e = waitForAnySendnewsubscriptionmessagesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSendnewsubscriptionmessages(k), function () {
    verifySendnewsubscriptionmessagesDoesNotExist(k);
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

bthread("Topicspolicy create verification", function () {
  const e = waitForAnyTopicspolicyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTopicspolicy(k), function () {
    verifyTopicspolicyExists(k);
  });
});

bthread("Topicspolicy update verification", function () {
  const e = waitForAnyTopicspolicyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTopicspolicy(k), function () {
    verifyTopicspolicyUpdated(k);
  });
});

bthread("Topicspolicy delete verification", function () {
  const e = waitForAnyTopicspolicyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTopicspolicy(k), function () {
    verifyTopicspolicyDoesNotExist(k);
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

bthread("Userbase create verification", function () {
  const e = waitForAnyUserbaseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserbase(k), function () {
    verifyUserbaseExists(k);
  });
});

bthread("Userbase update verification", function () {
  const e = waitForAnyUserbaseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserbase(k), function () {
    verifyUserbaseUpdated(k);
  });
});

bthread("Userbase delete verification", function () {
  const e = waitForAnyUserbaseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserbase(k), function () {
    verifyUserbaseDoesNotExist(k);
  });
});

bthread("Userdeactivatederror create verification", function () {
  const e = waitForAnyUserdeactivatederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdeactivatederror(k), function () {
    verifyUserdeactivatederrorExists(k);
  });
});

bthread("Userdeactivatederror update verification", function () {
  const e = waitForAnyUserdeactivatederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserdeactivatederror(k), function () {
    verifyUserdeactivatederrorUpdated(k);
  });
});

bthread("Userdeactivatederror delete verification", function () {
  const e = waitForAnyUserdeactivatederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserdeactivatederror(k), function () {
    verifyUserdeactivatederrorDoesNotExist(k);
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

bthread("Usernotauthorizederror create verification", function () {
  const e = waitForAnyUsernotauthorizederrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsernotauthorizederror(k), function () {
    verifyUsernotauthorizederrorExists(k);
  });
});

bthread("Usernotauthorizederror update verification", function () {
  const e = waitForAnyUsernotauthorizederrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsernotauthorizederror(k), function () {
    verifyUsernotauthorizederrorUpdated(k);
  });
});

bthread("Usernotauthorizederror delete verification", function () {
  const e = waitForAnyUsernotauthorizederrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsernotauthorizederror(k), function () {
    verifyUsernotauthorizederrorDoesNotExist(k);
  });
});

bthread("Userstatus create verification", function () {
  const e = waitForAnyUserstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserstatus(k), function () {
    verifyUserstatusExists(k);
  });
});

bthread("Userstatus update verification", function () {
  const e = waitForAnyUserstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserstatus(k), function () {
    verifyUserstatusUpdated(k);
  });
});

bthread("Userstatus delete verification", function () {
  const e = waitForAnyUserstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserstatus(k), function () {
    verifyUserstatusDoesNotExist(k);
  });
});

bthread("Webhookconfigoption create verification", function () {
  const e = waitForAnyWebhookconfigoptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhookconfigoption(k), function () {
    verifyWebhookconfigoptionExists(k);
  });
});

bthread("Webhookconfigoption update verification", function () {
  const e = waitForAnyWebhookconfigoptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhookconfigoption(k), function () {
    verifyWebhookconfigoptionUpdated(k);
  });
});

bthread("Webhookconfigoption delete verification", function () {
  const e = waitForAnyWebhookconfigoptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhookconfigoption(k), function () {
    verifyWebhookconfigoptionDoesNotExist(k);
  });
});

bthread("Webhookurloption create verification", function () {
  const e = waitForAnyWebhookurloptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhookurloption(k), function () {
    verifyWebhookurloptionExists(k);
  });
});

bthread("Webhookurloption update verification", function () {
  const e = waitForAnyWebhookurloptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhookurloption(k), function () {
    verifyWebhookurloptionUpdated(k);
  });
});

bthread("Webhookurloption delete verification", function () {
  const e = waitForAnyWebhookurloptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhookurloption(k), function () {
    verifyWebhookurloptionDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Allpublicchannels", function () {
  const x = waitForAnyAllpublicchannelsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAllpublicchannels(k, ANY), function () {});
});

bthread("Guard: Unique Anchor", function () {
  const x = waitForAnyAnchorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAnchor(k, ANY), function () {});
});

bthread("Guard: Unique Apikeyresponse", function () {
  const x = waitForAnyApikeyresponseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApikeyresponse(k, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttachment(k, ANY), function () {});
});

bthread("Guard: Unique Badeventqueueiderror", function () {
  const x = waitForAnyBadeventqueueiderrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBadeventqueueiderror(k, ANY), function () {});
});

bthread("Guard: Unique Basicbot", function () {
  const x = waitForAnyBasicbotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBasicbot(k, ANY), function () {});
});

bthread("Guard: Unique Basicbotbase", function () {
  const x = waitForAnyBasicbotbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBasicbotbase(k, ANY), function () {});
});

bthread("Guard: Unique Basicchannel", function () {
  const x = waitForAnyBasicchannelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBasicchannel(k, ANY), function () {});
});

bthread("Guard: Unique Basicchannelbase", function () {
  const x = waitForAnyBasicchannelbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBasicchannelbase(k, ANY), function () {});
});

bthread("Guard: Unique Bot", function () {
  const x = waitForAnyBotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBot(k, ANY), function () {});
});

bthread("Guard: Unique Botconfiguration", function () {
  const x = waitForAnyBotconfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBotconfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Canadministerchannelgroup", function () {
  const x = waitForAnyCanadministerchannelgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCanadministerchannelgroup(k, ANY), function () {});
});

bthread("Guard: Unique Candeleteanymessagegroup", function () {
  const x = waitForAnyCandeleteanymessagegroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCandeleteanymessagegroup(k, ANY), function () {});
});

bthread("Guard: Unique Candeleteownmessagegroup", function () {
  const x = waitForAnyCandeleteownmessagegroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCandeleteownmessagegroup(k, ANY), function () {});
});

bthread("Guard: Unique Canmovemessagesoutofchannelgroup", function () {
  const x = waitForAnyCanmovemessagesoutofchannelgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCanmovemessagesoutofchannelgroup(k, ANY), function () {});
});

bthread("Guard: Unique Canmovemessageswithinchannelgroup", function () {
  const x = waitForAnyCanmovemessageswithinchannelgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCanmovemessageswithinchannelgroup(k, ANY), function () {});
});

bthread("Guard: Unique Canremovesubscribersgroup", function () {
  const x = waitForAnyCanremovesubscribersgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCanremovesubscribersgroup(k, ANY), function () {});
});

bthread("Guard: Unique Canresolvetopicsgroup", function () {
  const x = waitForAnyCanresolvetopicsgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCanresolvetopicsgroup(k, ANY), function () {});
});

bthread("Guard: Unique Cansendmessagegroup", function () {
  const x = waitForAnyCansendmessagegroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCansendmessagegroup(k, ANY), function () {});
});

bthread("Guard: Unique Cansubscribegroup", function () {
  const x = waitForAnyCansubscribegroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCansubscribegroup(k, ANY), function () {});
});

bthread("Guard: Unique Channelcanaddsubscribersgroup", function () {
  const x = waitForAnyChannelcanaddsubscribersgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChannelcanaddsubscribersgroup(k, ANY), function () {});
});

bthread("Guard: Unique Channelfolder", function () {
  const x = waitForAnyChannelfolderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChannelfolder(k, ANY), function () {});
});

bthread("Guard: Unique Codederror", function () {
  const x = waitForAnyCodederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodederror(k, ANY), function () {});
});

bthread("Guard: Unique Codederrorbase", function () {
  const x = waitForAnyCodederrorbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodederrorbase(k, ANY), function () {});
});

bthread("Guard: Unique Customprofilefield", function () {
  const x = waitForAnyCustomprofilefieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomprofilefield(k, ANY), function () {});
});

bthread("Guard: Unique Defaultchannelgroup", function () {
  const x = waitForAnyDefaultchannelgroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultchannelgroup(k, ANY), function () {});
});

bthread("Guard: Unique Draft", function () {
  const x = waitForAnyDraftAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDraft(k, ANY), function () {});
});

bthread("Guard: Unique Emailaddressvisibility", function () {
  const x = waitForAnyEmailaddressvisibilityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmailaddressvisibility(k, ANY), function () {});
});

bthread("Guard: Unique Emojibase", function () {
  const x = waitForAnyEmojibaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmojibase(k, ANY), function () {});
});

bthread("Guard: Unique Emojicode", function () {
  const x = waitForAnyEmojicodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmojicode(k, ANY), function () {});
});

bthread("Guard: Unique Emojireaction", function () {
  const x = waitForAnyEmojireactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmojireaction(k, ANY), function () {});
});

bthread("Guard: Unique Emojireactionevent", function () {
  const x = waitForAnyEmojireactioneventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmojireactionevent(k, ANY), function () {});
});

bthread("Guard: Unique Eventidschema", function () {
  const x = waitForAnyEventidschemaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEventidschema(k, ANY), function () {});
});

bthread("Guard: Unique Eventtypes", function () {
  const x = waitForAnyEventtypesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEventtypes(k, ANY), function () {});
});

bthread("Guard: Unique Eventtypeschema", function () {
  const x = waitForAnyEventtypeschemaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEventtypeschema(k, ANY), function () {});
});

bthread("Guard: Unique Failedtoconnectbouncererror", function () {
  const x = waitForAnyFailedtoconnectbouncererrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFailedtoconnectbouncererror(k, ANY), function () {});
});

bthread("Guard: Unique Folderid", function () {
  const x = waitForAnyFolderidAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFolderid(k, ANY), function () {});
});

bthread("Guard: Unique Grouppermissionsetting", function () {
  const x = waitForAnyGrouppermissionsettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGrouppermissionsetting(k, ANY), function () {});
});

bthread("Guard: Unique Groupsettingvalue", function () {
  const x = waitForAnyGroupsettingvalueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGroupsettingvalue(k, ANY), function () {});
});

bthread("Guard: Unique Groupsettingvalueupdate", function () {
  const x = waitForAnyGroupsettingvalueupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGroupsettingvalueupdate(k, ANY), function () {});
});

bthread("Guard: Unique Historypublictosubscribers", function () {
  const x = waitForAnyHistorypublictosubscribersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHistorypublictosubscribers(k, ANY), function () {});
});

bthread("Guard: Unique Ignoredparametersbase", function () {
  const x = waitForAnyIgnoredparametersbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIgnoredparametersbase(k, ANY), function () {});
});

bthread("Guard: Unique Ignoredparameterssuccess", function () {
  const x = waitForAnyIgnoredparameterssuccessAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIgnoredparameterssuccess(k, ANY), function () {});
});

bthread("Guard: Unique Ignoredparametersunsupported", function () {
  const x = waitForAnyIgnoredparametersunsupportedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIgnoredparametersunsupported(k, ANY), function () {});
});

bthread("Guard: Unique Incompatibleparameterserror", function () {
  const x = waitForAnyIncompatibleparameterserrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIncompatibleparameterserror(k, ANY), function () {});
});

bthread("Guard: Unique Internalbouncerservererror", function () {
  const x = waitForAnyInternalbouncerservererrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInternalbouncerservererror(k, ANY), function () {});
});

bthread("Guard: Unique Invalidapikeyerror", function () {
  const x = waitForAnyInvalidapikeyerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvalidapikeyerror(k, ANY), function () {});
});

bthread("Guard: Unique Invalidchannelerror", function () {
  const x = waitForAnyInvalidchannelerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvalidchannelerror(k, ANY), function () {});
});

bthread("Guard: Unique Invalidmessageerror", function () {
  const x = waitForAnyInvalidmessageerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvalidmessageerror(k, ANY), function () {});
});

bthread("Guard: Unique Invalidpushdevicetokenerror", function () {
  const x = waitForAnyInvalidpushdevicetokenerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvalidpushdevicetokenerror(k, ANY), function () {});
});

bthread("Guard: Unique Invalidremotepushdevicetokenerror", function () {
  const x = waitForAnyInvalidremotepushdevicetokenerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvalidremotepushdevicetokenerror(k, ANY), function () {});
});

bthread("Guard: Unique Invitationfailederror", function () {
  const x = waitForAnyInvitationfailederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvitationfailederror(k, ANY), function () {});
});

bthread("Guard: Unique Invite", function () {
  const x = waitForAnyInviteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvite(k, ANY), function () {});
});

bthread("Guard: Unique Inviteexpirationparameter", function () {
  const x = waitForAnyInviteexpirationparameterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInviteexpirationparameter(k, ANY), function () {});
});

bthread("Guard: Unique Inviteroleparameter", function () {
  const x = waitForAnyInviteroleparameterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInviteroleparameter(k, ANY), function () {});
});

bthread("Guard: Unique Jsonresponsebase", function () {
  const x = waitForAnyJsonresponsebaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddJsonresponsebase(k, ANY), function () {});
});

bthread("Guard: Unique Jsonsuccess", function () {
  const x = waitForAnyJsonsuccessAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddJsonsuccess(k, ANY), function () {});
});

bthread("Guard: Unique Jsonsuccessbase", function () {
  const x = waitForAnyJsonsuccessbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddJsonsuccessbase(k, ANY), function () {});
});

bthread("Guard: Unique Legacypresenceformat", function () {
  const x = waitForAnyLegacypresenceformatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLegacypresenceformat(k, ANY), function () {});
});

bthread("Guard: Unique Linkifierpattern", function () {
  const x = waitForAnyLinkifierpatternAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLinkifierpattern(k, ANY), function () {});
});

bthread("Guard: Unique Linkifierurltemplate", function () {
  const x = waitForAnyLinkifierurltemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLinkifierurltemplate(k, ANY), function () {});
});

bthread("Guard: Unique Messageretentiondays", function () {
  const x = waitForAnyMessageretentiondaysAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessageretentiondays(k, ANY), function () {});
});

bthread("Guard: Unique Messagesbase", function () {
  const x = waitForAnyMessagesbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessagesbase(k, ANY), function () {});
});

bthread("Guard: Unique Messagesevent", function () {
  const x = waitForAnyMessageseventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMessagesevent(k, ANY), function () {});
});

bthread("Guard: Unique Missingargumenterror", function () {
  const x = waitForAnyMissingargumenterrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMissingargumenterror(k, ANY), function () {});
});

bthread("Guard: Unique Modernpresenceformat", function () {
  const x = waitForAnyModernpresenceformatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddModernpresenceformat(k, ANY), function () {});
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

bthread("Guard: Unique Noactivepushdeviceerror", function () {
  const x = waitForAnyNoactivepushdeviceerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNoactivepushdeviceerror(k, ANY), function () {});
});

bthread("Guard: Unique Nonexistingchanneliderror", function () {
  const x = waitForAnyNonexistingchanneliderrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNonexistingchanneliderror(k, ANY), function () {});
});

bthread("Guard: Unique Nonexistingchannelnameerror", function () {
  const x = waitForAnyNonexistingchannelnameerrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNonexistingchannelnameerror(k, ANY), function () {});
});

bthread("Guard: Unique Onboardingstep", function () {
  const x = waitForAnyOnboardingstepAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOnboardingstep(k, ANY), function () {});
});

bthread("Guard: Unique Optionalcontent", function () {
  const x = waitForAnyOptionalcontentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOptionalcontent(k, ANY), function () {});
});

bthread("Guard: Unique Principals", function () {
  const x = waitForAnyPrincipalsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrincipals(k, ANY), function () {});
});

bthread("Guard: Unique Profiledata", function () {
  const x = waitForAnyProfiledataAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProfiledata(k, ANY), function () {});
});

bthread("Guard: Unique Pushnotificationadminactionrequirederror", function () {
  const x = waitForAnyPushnotificationadminactionrequirederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPushnotificationadminactionrequirederror(k, ANY), function () {});
});

bthread("Guard: Unique Ratelimitederror", function () {
  const x = waitForAnyRatelimitederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRatelimitederror(k, ANY), function () {});
});

bthread("Guard: Unique Reactiontype", function () {
  const x = waitForAnyReactiontypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReactiontype(k, ANY), function () {});
});

bthread("Guard: Unique Realmauthenticationmethod", function () {
  const x = waitForAnyRealmauthenticationmethodAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmauthenticationmethod(k, ANY), function () {});
});

bthread("Guard: Unique Realmdeactivatederror", function () {
  const x = waitForAnyRealmdeactivatederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmdeactivatederror(k, ANY), function () {});
});

bthread("Guard: Unique Realmdomain", function () {
  const x = waitForAnyRealmdomainAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmdomain(k, ANY), function () {});
});

bthread("Guard: Unique Realmemoji", function () {
  const x = waitForAnyRealmemojiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmemoji(k, ANY), function () {});
});

bthread("Guard: Unique Realmexport", function () {
  const x = waitForAnyRealmexportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmexport(k, ANY), function () {});
});

bthread("Guard: Unique Realmplayground", function () {
  const x = waitForAnyRealmplaygroundAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRealmplayground(k, ANY), function () {});
});

bthread("Guard: Unique Reminder", function () {
  const x = waitForAnyReminderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReminder(k, ANY), function () {});
});

bthread("Guard: Unique Requiredcontent", function () {
  const x = waitForAnyRequiredcontentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequiredcontent(k, ANY), function () {});
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

bthread("Guard: Unique Scheduledmessagebase", function () {
  const x = waitForAnyScheduledmessagebaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScheduledmessagebase(k, ANY), function () {});
});

bthread("Guard: Unique Sendnewsubscriptionmessages", function () {
  const x = waitForAnySendnewsubscriptionmessagesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSendnewsubscriptionmessages(k, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubscription(k, ANY), function () {});
});

bthread("Guard: Unique Topicspolicy", function () {
  const x = waitForAnyTopicspolicyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTopicspolicy(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Userbase", function () {
  const x = waitForAnyUserbaseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserbase(k, ANY), function () {});
});

bthread("Guard: Unique Userdeactivatederror", function () {
  const x = waitForAnyUserdeactivatederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserdeactivatederror(k, ANY), function () {});
});

bthread("Guard: Unique Usergroup", function () {
  const x = waitForAnyUsergroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsergroup(k, ANY), function () {});
});

bthread("Guard: Unique Usernotauthorizederror", function () {
  const x = waitForAnyUsernotauthorizederrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsernotauthorizederror(k, ANY), function () {});
});

bthread("Guard: Unique Userstatus", function () {
  const x = waitForAnyUserstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserstatus(k, ANY), function () {});
});

bthread("Guard: Unique Webhookconfigoption", function () {
  const x = waitForAnyWebhookconfigoptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhookconfigoption(k, ANY), function () {});
});

bthread("Guard: Unique Webhookurloption", function () {
  const x = waitForAnyWebhookurloptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhookurloption(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
