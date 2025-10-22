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


bthread("ActionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAction(x.id);
  const e_add = waitForActionAdded(id);
  block(matchDeleteAction(id), function () {
    verifyActionExists(id);
  });
  updateAction(x.id);
  updateAction(x.id);
  const e_upd = waitForActionUpdated(id);
  block(matchDeleteAction(id), function () {
    verifyActionUpdated(id);
  });
  deleteAction(x.id);
  const e_del = waitForActionDeleted(id);
  block(matchAddAction(id), function () {
    verifyActionDoesNotExist(id);
  });
});

bthread("ActiveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActive(x.id);
  const e_add = waitForActiveAdded(id);
  block(matchDeleteActive(id), function () {
    verifyActiveExists(id);
  });
  updateActive(x.id);
  updateActive(x.id);
  const e_upd = waitForActiveUpdated(id);
  block(matchDeleteActive(id), function () {
    verifyActiveUpdated(id);
  });
  deleteActive(x.id);
  const e_del = waitForActiveDeleted(id);
  block(matchAddActive(id), function () {
    verifyActiveDoesNotExist(id);
  });
});

bthread("AllLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAll(x.id);
  const e_add = waitForAllAdded(id);
  block(matchDeleteAll(id), function () {
    verifyAllExists(id);
  });
  updateAll(x.id);
  updateAll(x.id);
  const e_upd = waitForAllUpdated(id);
  block(matchDeleteAll(id), function () {
    verifyAllUpdated(id);
  });
  deleteAll(x.id);
  const e_del = waitForAllDeleted(id);
  block(matchAddAll(id), function () {
    verifyAllDoesNotExist(id);
  });
});

bthread("ArchiveallcardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addArchiveallcard(x.id);
  const e_add = waitForArchiveallcardAdded(id);
  block(matchDeleteArchiveallcard(id), function () {
    verifyArchiveallcardExists(id);
  });
  updateArchiveallcard(x.id);
  updateArchiveallcard(x.id);
  const e_upd = waitForArchiveallcardUpdated(id);
  block(matchDeleteArchiveallcard(id), function () {
    verifyArchiveallcardUpdated(id);
  });
  deleteArchiveallcard(x.id);
  const e_del = waitForArchiveallcardDeleted(id);
  block(matchAddArchiveallcard(id), function () {
    verifyArchiveallcardDoesNotExist(id);
  });
});

bthread("AssociateddomainLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssociateddomain(x.id);
  const e_add = waitForAssociateddomainAdded(id);
  block(matchDeleteAssociateddomain(id), function () {
    verifyAssociateddomainExists(id);
  });
  updateAssociateddomain(x.id);
  updateAssociateddomain(x.id);
  const e_upd = waitForAssociateddomainUpdated(id);
  block(matchDeleteAssociateddomain(id), function () {
    verifyAssociateddomainUpdated(id);
  });
  deleteAssociateddomain(x.id);
  const e_del = waitForAssociateddomainDeleted(id);
  block(matchAddAssociateddomain(id), function () {
    verifyAssociateddomainDoesNotExist(id);
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

bthread("AvatarsourceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvatarsource(x.id);
  const e_add = waitForAvatarsourceAdded(id);
  block(matchDeleteAvatarsource(id), function () {
    verifyAvatarsourceExists(id);
  });
  updateAvatarsource(x.id);
  updateAvatarsource(x.id);
  const e_upd = waitForAvatarsourceUpdated(id);
  block(matchDeleteAvatarsource(id), function () {
    verifyAvatarsourceUpdated(id);
  });
  deleteAvatarsource(x.id);
  const e_del = waitForAvatarsourceDeleted(id);
  block(matchAddAvatarsource(id), function () {
    verifyAvatarsourceDoesNotExist(id);
  });
});

bthread("BackgroundLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBackground(x.id);
  const e_add = waitForBackgroundAdded(id);
  block(matchDeleteBackground(id), function () {
    verifyBackgroundExists(id);
  });
  updateBackground(x.id);
  updateBackground(x.id);
  const e_upd = waitForBackgroundUpdated(id);
  block(matchDeleteBackground(id), function () {
    verifyBackgroundUpdated(id);
  });
  deleteBackground(x.id);
  const e_del = waitForBackgroundDeleted(id);
  block(matchAddBackground(id), function () {
    verifyBackgroundDoesNotExist(id);
  });
});

bthread("BatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBatch(x.id);
  const e_add = waitForBatchAdded(id);
  block(matchDeleteBatch(id), function () {
    verifyBatchExists(id);
  });
  updateBatch(x.id);
  updateBatch(x.id);
  const e_upd = waitForBatchUpdated(id);
  block(matchDeleteBatch(id), function () {
    verifyBatchUpdated(id);
  });
  deleteBatch(x.id);
  const e_del = waitForBatchDeleted(id);
  block(matchAddBatch(id), function () {
    verifyBatchDoesNotExist(id);
  });
});

bthread("BioLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBio(x.id);
  const e_add = waitForBioAdded(id);
  block(matchDeleteBio(id), function () {
    verifyBioExists(id);
  });
  updateBio(x.id);
  updateBio(x.id);
  const e_upd = waitForBioUpdated(id);
  block(matchDeleteBio(id), function () {
    verifyBioUpdated(id);
  });
  deleteBio(x.id);
  const e_del = waitForBioDeleted(id);
  block(matchAddBio(id), function () {
    verifyBioDoesNotExist(id);
  });
});

bthread("BlueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBlue(x.id);
  const e_add = waitForBlueAdded(id);
  block(matchDeleteBlue(id), function () {
    verifyBlueExists(id);
  });
  updateBlue(x.id);
  updateBlue(x.id);
  const e_upd = waitForBlueUpdated(id);
  block(matchDeleteBlue(id), function () {
    verifyBlueUpdated(id);
  });
  deleteBlue(x.id);
  const e_del = waitForBlueDeleted(id);
  block(matchAddBlue(id), function () {
    verifyBlueDoesNotExist(id);
  });
});

bthread("BoardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoard(x.id);
  const e_add = waitForBoardAdded(id);
  block(matchDeleteBoard(id), function () {
    verifyBoardExists(id);
  });
  updateBoard(x.id);
  updateBoard(x.id);
  const e_upd = waitForBoardUpdated(id);
  block(matchDeleteBoard(id), function () {
    verifyBoardUpdated(id);
  });
  deleteBoard(x.id);
  const e_del = waitForBoardDeleted(id);
  block(matchAddBoard(id), function () {
    verifyBoardDoesNotExist(id);
  });
});

bthread("BoardbackgroundLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardbackground(x.id);
  const e_add = waitForBoardbackgroundAdded(id);
  block(matchDeleteBoardbackground(id), function () {
    verifyBoardbackgroundExists(id);
  });
  updateBoardbackground(x.id);
  updateBoardbackground(x.id);
  const e_upd = waitForBoardbackgroundUpdated(id);
  block(matchDeleteBoardbackground(id), function () {
    verifyBoardbackgroundUpdated(id);
  });
  deleteBoardbackground(x.id);
  const e_del = waitForBoardbackgroundDeleted(id);
  block(matchAddBoardbackground(id), function () {
    verifyBoardbackgroundDoesNotExist(id);
  });
});

bthread("BoardsinvitedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsinvited(x.id);
  const e_add = waitForBoardsinvitedAdded(id);
  block(matchDeleteBoardsinvited(id), function () {
    verifyBoardsinvitedExists(id);
  });
  updateBoardsinvited(x.id);
  updateBoardsinvited(x.id);
  const e_upd = waitForBoardsinvitedUpdated(id);
  block(matchDeleteBoardsinvited(id), function () {
    verifyBoardsinvitedUpdated(id);
  });
  deleteBoardsinvited(x.id);
  const e_del = waitForBoardsinvitedDeleted(id);
  block(matchAddBoardsinvited(id), function () {
    verifyBoardsinvitedDoesNotExist(id);
  });
});

bthread("BoardstarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardstar(x.id);
  const e_add = waitForBoardstarAdded(id);
  block(matchDeleteBoardstar(id), function () {
    verifyBoardstarExists(id);
  });
  updateBoardstar(x.id);
  updateBoardstar(x.id);
  const e_upd = waitForBoardstarUpdated(id);
  block(matchDeleteBoardstar(id), function () {
    verifyBoardstarUpdated(id);
  });
  deleteBoardstar(x.id);
  const e_del = waitForBoardstarDeleted(id);
  block(matchAddBoardstar(id), function () {
    verifyBoardstarDoesNotExist(id);
  });
});

bthread("BoardvisibilityrestrictLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardvisibilityrestrict(x.id);
  const e_add = waitForBoardvisibilityrestrictAdded(id);
  block(matchDeleteBoardvisibilityrestrict(id), function () {
    verifyBoardvisibilityrestrictExists(id);
  });
  updateBoardvisibilityrestrict(x.id);
  updateBoardvisibilityrestrict(x.id);
  const e_upd = waitForBoardvisibilityrestrictUpdated(id);
  block(matchDeleteBoardvisibilityrestrict(id), function () {
    verifyBoardvisibilityrestrictUpdated(id);
  });
  deleteBoardvisibilityrestrict(x.id);
  const e_del = waitForBoardvisibilityrestrictDeleted(id);
  block(matchAddBoardvisibilityrestrict(id), function () {
    verifyBoardvisibilityrestrictDoesNotExist(id);
  });
});

bthread("CalendarfeedenabledLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCalendarfeedenabled(x.id);
  const e_add = waitForCalendarfeedenabledAdded(id);
  block(matchDeleteCalendarfeedenabled(id), function () {
    verifyCalendarfeedenabledExists(id);
  });
  updateCalendarfeedenabled(x.id);
  updateCalendarfeedenabled(x.id);
  const e_upd = waitForCalendarfeedenabledUpdated(id);
  block(matchDeleteCalendarfeedenabled(id), function () {
    verifyCalendarfeedenabledUpdated(id);
  });
  deleteCalendarfeedenabled(x.id);
  const e_del = waitForCalendarfeedenabledDeleted(id);
  block(matchAddCalendarfeedenabled(id), function () {
    verifyCalendarfeedenabledDoesNotExist(id);
  });
});

bthread("CalendarkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCalendarkey(x.id);
  const e_add = waitForCalendarkeyAdded(id);
  block(matchDeleteCalendarkey(id), function () {
    verifyCalendarkeyExists(id);
  });
  updateCalendarkey(x.id);
  updateCalendarkey(x.id);
  const e_upd = waitForCalendarkeyUpdated(id);
  block(matchDeleteCalendarkey(id), function () {
    verifyCalendarkeyUpdated(id);
  });
  deleteCalendarkey(x.id);
  const e_del = waitForCalendarkeyDeleted(id);
  block(matchAddCalendarkey(id), function () {
    verifyCalendarkeyDoesNotExist(id);
  });
});

bthread("CallbackurlLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCallbackurl(x.id);
  const e_add = waitForCallbackurlAdded(id);
  block(matchDeleteCallbackurl(id), function () {
    verifyCallbackurlExists(id);
  });
  updateCallbackurl(x.id);
  updateCallbackurl(x.id);
  const e_upd = waitForCallbackurlUpdated(id);
  block(matchDeleteCallbackurl(id), function () {
    verifyCallbackurlUpdated(id);
  });
  deleteCallbackurl(x.id);
  const e_del = waitForCallbackurlDeleted(id);
  block(matchAddCallbackurl(id), function () {
    verifyCallbackurlDoesNotExist(id);
  });
});

bthread("CardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCard(x.id);
  const e_add = waitForCardAdded(id);
  block(matchDeleteCard(id), function () {
    verifyCardExists(id);
  });
  updateCard(x.id);
  updateCard(x.id);
  const e_upd = waitForCardUpdated(id);
  block(matchDeleteCard(id), function () {
    verifyCardUpdated(id);
  });
  deleteCard(x.id);
  const e_del = waitForCardDeleted(id);
  block(matchAddCard(id), function () {
    verifyCardDoesNotExist(id);
  });
});

bthread("CardagingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardaging(x.id);
  const e_add = waitForCardagingAdded(id);
  block(matchDeleteCardaging(id), function () {
    verifyCardagingExists(id);
  });
  updateCardaging(x.id);
  updateCardaging(x.id);
  const e_upd = waitForCardagingUpdated(id);
  block(matchDeleteCardaging(id), function () {
    verifyCardagingUpdated(id);
  });
  deleteCardaging(x.id);
  const e_del = waitForCardagingDeleted(id);
  block(matchAddCardaging(id), function () {
    verifyCardagingDoesNotExist(id);
  });
});

bthread("CardcoverLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardcover(x.id);
  const e_add = waitForCardcoverAdded(id);
  block(matchDeleteCardcover(id), function () {
    verifyCardcoverExists(id);
  });
  updateCardcover(x.id);
  updateCardcover(x.id);
  const e_upd = waitForCardcoverUpdated(id);
  block(matchDeleteCardcover(id), function () {
    verifyCardcoverUpdated(id);
  });
  deleteCardcover(x.id);
  const e_del = waitForCardcoverDeleted(id);
  block(matchAddCardcover(id), function () {
    verifyCardcoverDoesNotExist(id);
  });
});

bthread("CheckitemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCheckitem(x.id);
  const e_add = waitForCheckitemAdded(id);
  block(matchDeleteCheckitem(id), function () {
    verifyCheckitemExists(id);
  });
  updateCheckitem(x.id);
  updateCheckitem(x.id);
  const e_upd = waitForCheckitemUpdated(id);
  block(matchDeleteCheckitem(id), function () {
    verifyCheckitemUpdated(id);
  });
  deleteCheckitem(x.id);
  const e_del = waitForCheckitemDeleted(id);
  block(matchAddCheckitem(id), function () {
    verifyCheckitemDoesNotExist(id);
  });
});

bthread("CheckitemstateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCheckitemstate(x.id);
  const e_add = waitForCheckitemstateAdded(id);
  block(matchDeleteCheckitemstate(id), function () {
    verifyCheckitemstateExists(id);
  });
  updateCheckitemstate(x.id);
  updateCheckitemstate(x.id);
  const e_upd = waitForCheckitemstateUpdated(id);
  block(matchDeleteCheckitemstate(id), function () {
    verifyCheckitemstateUpdated(id);
  });
  deleteCheckitemstate(x.id);
  const e_del = waitForCheckitemstateDeleted(id);
  block(matchAddCheckitemstate(id), function () {
    verifyCheckitemstateDoesNotExist(id);
  });
});

bthread("ChecklistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecklist(x.id);
  const e_add = waitForChecklistAdded(id);
  block(matchDeleteChecklist(id), function () {
    verifyChecklistExists(id);
  });
  updateChecklist(x.id);
  updateChecklist(x.id);
  const e_upd = waitForChecklistUpdated(id);
  block(matchDeleteChecklist(id), function () {
    verifyChecklistUpdated(id);
  });
  deleteChecklist(x.id);
  const e_del = waitForChecklistDeleted(id);
  block(matchAddChecklist(id), function () {
    verifyChecklistDoesNotExist(id);
  });
});

bthread("ClosedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClosed(x.id);
  const e_add = waitForClosedAdded(id);
  block(matchDeleteClosed(id), function () {
    verifyClosedExists(id);
  });
  updateClosed(x.id);
  updateClosed(x.id);
  const e_upd = waitForClosedUpdated(id);
  block(matchDeleteClosed(id), function () {
    verifyClosedUpdated(id);
  });
  deleteClosed(x.id);
  const e_del = waitForClosedDeleted(id);
  block(matchAddClosed(id), function () {
    verifyClosedDoesNotExist(id);
  });
});

bthread("ColorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addColor(x.id);
  const e_add = waitForColorAdded(id);
  block(matchDeleteColor(id), function () {
    verifyColorExists(id);
  });
  updateColor(x.id);
  updateColor(x.id);
  const e_upd = waitForColorUpdated(id);
  block(matchDeleteColor(id), function () {
    verifyColorUpdated(id);
  });
  deleteColor(x.id);
  const e_del = waitForColorDeleted(id);
  block(matchAddColor(id), function () {
    verifyColorDoesNotExist(id);
  });
});

bthread("ColorblindLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addColorblind(x.id);
  const e_add = waitForColorblindAdded(id);
  block(matchDeleteColorblind(id), function () {
    verifyColorblindExists(id);
  });
  updateColorblind(x.id);
  updateColorblind(x.id);
  const e_upd = waitForColorblindUpdated(id);
  block(matchDeleteColorblind(id), function () {
    verifyColorblindUpdated(id);
  });
  deleteColorblind(x.id);
  const e_del = waitForColorblindDeleted(id);
  block(matchAddColorblind(id), function () {
    verifyColorblindDoesNotExist(id);
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

bthread("ConverttocardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConverttocard(x.id);
  const e_add = waitForConverttocardAdded(id);
  block(matchDeleteConverttocard(id), function () {
    verifyConverttocardExists(id);
  });
  updateConverttocard(x.id);
  updateConverttocard(x.id);
  const e_upd = waitForConverttocardUpdated(id);
  block(matchDeleteConverttocard(id), function () {
    verifyConverttocardUpdated(id);
  });
  deleteConverttocard(x.id);
  const e_del = waitForConverttocardDeleted(id);
  block(matchAddConverttocard(id), function () {
    verifyConverttocardDoesNotExist(id);
  });
});

bthread("CustomboardbackgroundLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomboardbackground(x.id);
  const e_add = waitForCustomboardbackgroundAdded(id);
  block(matchDeleteCustomboardbackground(id), function () {
    verifyCustomboardbackgroundExists(id);
  });
  updateCustomboardbackground(x.id);
  updateCustomboardbackground(x.id);
  const e_upd = waitForCustomboardbackgroundUpdated(id);
  block(matchDeleteCustomboardbackground(id), function () {
    verifyCustomboardbackgroundUpdated(id);
  });
  deleteCustomboardbackground(x.id);
  const e_del = waitForCustomboardbackgroundDeleted(id);
  block(matchAddCustomboardbackground(id), function () {
    verifyCustomboardbackgroundDoesNotExist(id);
  });
});

bthread("CustomemojiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomemoji(x.id);
  const e_add = waitForCustomemojiAdded(id);
  block(matchDeleteCustomemoji(id), function () {
    verifyCustomemojiExists(id);
  });
  updateCustomemoji(x.id);
  updateCustomemoji(x.id);
  const e_upd = waitForCustomemojiUpdated(id);
  block(matchDeleteCustomemoji(id), function () {
    verifyCustomemojiUpdated(id);
  });
  deleteCustomemoji(x.id);
  const e_del = waitForCustomemojiDeleted(id);
  block(matchAddCustomemoji(id), function () {
    verifyCustomemojiDoesNotExist(id);
  });
});

bthread("CustomstickerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomsticker(x.id);
  const e_add = waitForCustomstickerAdded(id);
  block(matchDeleteCustomsticker(id), function () {
    verifyCustomstickerExists(id);
  });
  updateCustomsticker(x.id);
  updateCustomsticker(x.id);
  const e_upd = waitForCustomstickerUpdated(id);
  block(matchDeleteCustomsticker(id), function () {
    verifyCustomstickerUpdated(id);
  });
  deleteCustomsticker(x.id);
  const e_del = waitForCustomstickerDeleted(id);
  block(matchAddCustomsticker(id), function () {
    verifyCustomstickerDoesNotExist(id);
  });
});

bthread("DeactivatedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeactivated(x.id);
  const e_add = waitForDeactivatedAdded(id);
  block(matchDeleteDeactivated(id), function () {
    verifyDeactivatedExists(id);
  });
  updateDeactivated(x.id);
  updateDeactivated(x.id);
  const e_upd = waitForDeactivatedUpdated(id);
  block(matchDeleteDeactivated(id), function () {
    verifyDeactivatedUpdated(id);
  });
  deleteDeactivated(x.id);
  const e_del = waitForDeactivatedDeleted(id);
  block(matchAddDeactivated(id), function () {
    verifyDeactivatedDoesNotExist(id);
  });
});

bthread("DeltaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDelta(x.id);
  const e_add = waitForDeltaAdded(id);
  block(matchDeleteDelta(id), function () {
    verifyDeltaExists(id);
  });
  updateDelta(x.id);
  updateDelta(x.id);
  const e_upd = waitForDeltaUpdated(id);
  block(matchDeleteDelta(id), function () {
    verifyDeltaUpdated(id);
  });
  deleteDelta(x.id);
  const e_del = waitForDeltaDeleted(id);
  block(matchAddDelta(id), function () {
    verifyDeltaDoesNotExist(id);
  });
});

bthread("DescLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDesc(x.id);
  const e_add = waitForDescAdded(id);
  block(matchDeleteDesc(id), function () {
    verifyDescExists(id);
  });
  updateDesc(x.id);
  updateDesc(x.id);
  const e_upd = waitForDescUpdated(id);
  block(matchDeleteDesc(id), function () {
    verifyDescUpdated(id);
  });
  deleteDesc(x.id);
  const e_del = waitForDescDeleted(id);
  block(matchAddDesc(id), function () {
    verifyDescDoesNotExist(id);
  });
});

bthread("DescriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDescription(x.id);
  const e_add = waitForDescriptionAdded(id);
  block(matchDeleteDescription(id), function () {
    verifyDescriptionExists(id);
  });
  updateDescription(x.id);
  updateDescription(x.id);
  const e_upd = waitForDescriptionUpdated(id);
  block(matchDeleteDescription(id), function () {
    verifyDescriptionUpdated(id);
  });
  deleteDescription(x.id);
  const e_del = waitForDescriptionDeleted(id);
  block(matchAddDescription(id), function () {
    verifyDescriptionDoesNotExist(id);
  });
});

bthread("DisplayLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisplay(x.id);
  const e_add = waitForDisplayAdded(id);
  block(matchDeleteDisplay(id), function () {
    verifyDisplayExists(id);
  });
  updateDisplay(x.id);
  updateDisplay(x.id);
  const e_upd = waitForDisplayUpdated(id);
  block(matchDeleteDisplay(id), function () {
    verifyDisplayUpdated(id);
  });
  deleteDisplay(x.id);
  const e_del = waitForDisplayDeleted(id);
  block(matchAddDisplay(id), function () {
    verifyDisplayDoesNotExist(id);
  });
});

bthread("DisplaynameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisplayname(x.id);
  const e_add = waitForDisplaynameAdded(id);
  block(matchDeleteDisplayname(id), function () {
    verifyDisplaynameExists(id);
  });
  updateDisplayname(x.id);
  updateDisplayname(x.id);
  const e_upd = waitForDisplaynameUpdated(id);
  block(matchDeleteDisplayname(id), function () {
    verifyDisplaynameUpdated(id);
  });
  deleteDisplayname(x.id);
  const e_del = waitForDisplaynameDeleted(id);
  block(matchAddDisplayname(id), function () {
    verifyDisplaynameDoesNotExist(id);
  });
});

bthread("DueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDue(x.id);
  const e_add = waitForDueAdded(id);
  block(matchDeleteDue(id), function () {
    verifyDueExists(id);
  });
  updateDue(x.id);
  updateDue(x.id);
  const e_upd = waitForDueUpdated(id);
  block(matchDeleteDue(id), function () {
    verifyDueUpdated(id);
  });
  deleteDue(x.id);
  const e_del = waitForDueDeleted(id);
  block(matchAddDue(id), function () {
    verifyDueDoesNotExist(id);
  });
});

bthread("EmailkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmailkey(x.id);
  const e_add = waitForEmailkeyAdded(id);
  block(matchDeleteEmailkey(id), function () {
    verifyEmailkeyExists(id);
  });
  updateEmailkey(x.id);
  updateEmailkey(x.id);
  const e_upd = waitForEmailkeyUpdated(id);
  block(matchDeleteEmailkey(id), function () {
    verifyEmailkeyUpdated(id);
  });
  deleteEmailkey(x.id);
  const e_del = waitForEmailkeyDeleted(id);
  block(matchAddEmailkey(id), function () {
    verifyEmailkeyDoesNotExist(id);
  });
});

bthread("EmailpositionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmailposition(x.id);
  const e_add = waitForEmailpositionAdded(id);
  block(matchDeleteEmailposition(id), function () {
    verifyEmailpositionExists(id);
  });
  updateEmailposition(x.id);
  updateEmailposition(x.id);
  const e_upd = waitForEmailpositionUpdated(id);
  block(matchDeleteEmailposition(id), function () {
    verifyEmailpositionUpdated(id);
  });
  deleteEmailposition(x.id);
  const e_del = waitForEmailpositionDeleted(id);
  block(matchAddEmailposition(id), function () {
    verifyEmailpositionDoesNotExist(id);
  });
});

bthread("EntityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEntity(x.id);
  const e_add = waitForEntityAdded(id);
  block(matchDeleteEntity(id), function () {
    verifyEntityExists(id);
  });
  updateEntity(x.id);
  updateEntity(x.id);
  const e_upd = waitForEntityUpdated(id);
  block(matchDeleteEntity(id), function () {
    verifyEntityUpdated(id);
  });
  deleteEntity(x.id);
  const e_del = waitForEntityDeleted(id);
  block(matchAddEntity(id), function () {
    verifyEntityDoesNotExist(id);
  });
});

bthread("ExternalmembersdisabledLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExternalmembersdisabled(x.id);
  const e_add = waitForExternalmembersdisabledAdded(id);
  block(matchDeleteExternalmembersdisabled(id), function () {
    verifyExternalmembersdisabledExists(id);
  });
  updateExternalmembersdisabled(x.id);
  updateExternalmembersdisabled(x.id);
  const e_upd = waitForExternalmembersdisabledUpdated(id);
  block(matchDeleteExternalmembersdisabled(id), function () {
    verifyExternalmembersdisabledUpdated(id);
  });
  deleteExternalmembersdisabled(x.id);
  const e_del = waitForExternalmembersdisabledDeleted(id);
  block(matchAddExternalmembersdisabled(id), function () {
    verifyExternalmembersdisabledDoesNotExist(id);
  });
});

bthread("FullnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFullname(x.id);
  const e_add = waitForFullnameAdded(id);
  block(matchDeleteFullname(id), function () {
    verifyFullnameExists(id);
  });
  updateFullname(x.id);
  updateFullname(x.id);
  const e_upd = waitForFullnameUpdated(id);
  block(matchDeleteFullname(id), function () {
    verifyFullnameUpdated(id);
  });
  deleteFullname(x.id);
  const e_del = waitForFullnameDeleted(id);
  block(matchAddFullname(id), function () {
    verifyFullnameDoesNotExist(id);
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

bthread("GoogleappsversionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGoogleappsversion(x.id);
  const e_add = waitForGoogleappsversionAdded(id);
  block(matchDeleteGoogleappsversion(id), function () {
    verifyGoogleappsversionExists(id);
  });
  updateGoogleappsversion(x.id);
  updateGoogleappsversion(x.id);
  const e_upd = waitForGoogleappsversionUpdated(id);
  block(matchDeleteGoogleappsversion(id), function () {
    verifyGoogleappsversionUpdated(id);
  });
  deleteGoogleappsversion(x.id);
  const e_del = waitForGoogleappsversionDeleted(id);
  block(matchAddGoogleappsversion(id), function () {
    verifyGoogleappsversionDoesNotExist(id);
  });
});

bthread("GreenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGreen(x.id);
  const e_add = waitForGreenAdded(id);
  block(matchDeleteGreen(id), function () {
    verifyGreenExists(id);
  });
  updateGreen(x.id);
  updateGreen(x.id);
  const e_upd = waitForGreenUpdated(id);
  block(matchDeleteGreen(id), function () {
    verifyGreenUpdated(id);
  });
  deleteGreen(x.id);
  const e_del = waitForGreenDeleted(id);
  block(matchAddGreen(id), function () {
    verifyGreenDoesNotExist(id);
  });
});

bthread("IdattachmentcoverLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdattachmentcover(x.id);
  const e_add = waitForIdattachmentcoverAdded(id);
  block(matchDeleteIdattachmentcover(id), function () {
    verifyIdattachmentcoverExists(id);
  });
  updateIdattachmentcover(x.id);
  updateIdattachmentcover(x.id);
  const e_upd = waitForIdattachmentcoverUpdated(id);
  block(matchDeleteIdattachmentcover(id), function () {
    verifyIdattachmentcoverUpdated(id);
  });
  deleteIdattachmentcover(x.id);
  const e_del = waitForIdattachmentcoverDeleted(id);
  block(matchAddIdattachmentcover(id), function () {
    verifyIdattachmentcoverDoesNotExist(id);
  });
});

bthread("IdboardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdboard(x.id);
  const e_add = waitForIdboardAdded(id);
  block(matchDeleteIdboard(id), function () {
    verifyIdboardExists(id);
  });
  updateIdboard(x.id);
  updateIdboard(x.id);
  const e_upd = waitForIdboardUpdated(id);
  block(matchDeleteIdboard(id), function () {
    verifyIdboardUpdated(id);
  });
  deleteIdboard(x.id);
  const e_del = waitForIdboardDeleted(id);
  block(matchAddIdboard(id), function () {
    verifyIdboardDoesNotExist(id);
  });
});

bthread("IdcardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdcard(x.id);
  const e_add = waitForIdcardAdded(id);
  block(matchDeleteIdcard(id), function () {
    verifyIdcardExists(id);
  });
  updateIdcard(x.id);
  updateIdcard(x.id);
  const e_upd = waitForIdcardUpdated(id);
  block(matchDeleteIdcard(id), function () {
    verifyIdcardUpdated(id);
  });
  deleteIdcard(x.id);
  const e_del = waitForIdcardDeleted(id);
  block(matchAddIdcard(id), function () {
    verifyIdcardDoesNotExist(id);
  });
});

bthread("IdemaillistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdemaillist(x.id);
  const e_add = waitForIdemaillistAdded(id);
  block(matchDeleteIdemaillist(id), function () {
    verifyIdemaillistExists(id);
  });
  updateIdemaillist(x.id);
  updateIdemaillist(x.id);
  const e_upd = waitForIdemaillistUpdated(id);
  block(matchDeleteIdemaillist(id), function () {
    verifyIdemaillistUpdated(id);
  });
  deleteIdemaillist(x.id);
  const e_del = waitForIdemaillistDeleted(id);
  block(matchAddIdemaillist(id), function () {
    verifyIdemaillistDoesNotExist(id);
  });
});

bthread("IdlabelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdlabel(x.id);
  const e_add = waitForIdlabelAdded(id);
  block(matchDeleteIdlabel(id), function () {
    verifyIdlabelExists(id);
  });
  updateIdlabel(x.id);
  updateIdlabel(x.id);
  const e_upd = waitForIdlabelUpdated(id);
  block(matchDeleteIdlabel(id), function () {
    verifyIdlabelUpdated(id);
  });
  deleteIdlabel(x.id);
  const e_del = waitForIdlabelDeleted(id);
  block(matchAddIdlabel(id), function () {
    verifyIdlabelDoesNotExist(id);
  });
});

bthread("IdlistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdlist(x.id);
  const e_add = waitForIdlistAdded(id);
  block(matchDeleteIdlist(id), function () {
    verifyIdlistExists(id);
  });
  updateIdlist(x.id);
  updateIdlist(x.id);
  const e_upd = waitForIdlistUpdated(id);
  block(matchDeleteIdlist(id), function () {
    verifyIdlistUpdated(id);
  });
  deleteIdlist(x.id);
  const e_del = waitForIdlistDeleted(id);
  block(matchAddIdlist(id), function () {
    verifyIdlistDoesNotExist(id);
  });
});

bthread("IdmemberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdmember(x.id);
  const e_add = waitForIdmemberAdded(id);
  block(matchDeleteIdmember(id), function () {
    verifyIdmemberExists(id);
  });
  updateIdmember(x.id);
  updateIdmember(x.id);
  const e_upd = waitForIdmemberUpdated(id);
  block(matchDeleteIdmember(id), function () {
    verifyIdmemberUpdated(id);
  });
  deleteIdmember(x.id);
  const e_del = waitForIdmemberDeleted(id);
  block(matchAddIdmember(id), function () {
    verifyIdmemberDoesNotExist(id);
  });
});

bthread("IdmodelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdmodel(x.id);
  const e_add = waitForIdmodelAdded(id);
  block(matchDeleteIdmodel(id), function () {
    verifyIdmodelExists(id);
  });
  updateIdmodel(x.id);
  updateIdmodel(x.id);
  const e_upd = waitForIdmodelUpdated(id);
  block(matchDeleteIdmodel(id), function () {
    verifyIdmodelUpdated(id);
  });
  deleteIdmodel(x.id);
  const e_del = waitForIdmodelDeleted(id);
  block(matchAddIdmodel(id), function () {
    verifyIdmodelDoesNotExist(id);
  });
});

bthread("IdorganizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIdorganization(x.id);
  const e_add = waitForIdorganizationAdded(id);
  block(matchDeleteIdorganization(id), function () {
    verifyIdorganizationExists(id);
  });
  updateIdorganization(x.id);
  updateIdorganization(x.id);
  const e_upd = waitForIdorganizationUpdated(id);
  block(matchDeleteIdorganization(id), function () {
    verifyIdorganizationUpdated(id);
  });
  deleteIdorganization(x.id);
  const e_del = waitForIdorganizationDeleted(id);
  block(matchAddIdorganization(id), function () {
    verifyIdorganizationDoesNotExist(id);
  });
});

bthread("InitialLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInitial(x.id);
  const e_add = waitForInitialAdded(id);
  block(matchDeleteInitial(id), function () {
    verifyInitialExists(id);
  });
  updateInitial(x.id);
  updateInitial(x.id);
  const e_upd = waitForInitialUpdated(id);
  block(matchDeleteInitial(id), function () {
    verifyInitialUpdated(id);
  });
  deleteInitial(x.id);
  const e_del = waitForInitialDeleted(id);
  block(matchAddInitial(id), function () {
    verifyInitialDoesNotExist(id);
  });
});

bthread("InvitationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvitation(x.id);
  const e_add = waitForInvitationAdded(id);
  block(matchDeleteInvitation(id), function () {
    verifyInvitationExists(id);
  });
  updateInvitation(x.id);
  updateInvitation(x.id);
  const e_upd = waitForInvitationUpdated(id);
  block(matchDeleteInvitation(id), function () {
    verifyInvitationUpdated(id);
  });
  deleteInvitation(x.id);
  const e_del = waitForInvitationDeleted(id);
  block(matchAddInvitation(id), function () {
    verifyInvitationDoesNotExist(id);
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

bthread("LabelnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelname(x.id);
  const e_add = waitForLabelnameAdded(id);
  block(matchDeleteLabelname(id), function () {
    verifyLabelnameExists(id);
  });
  updateLabelname(x.id);
  updateLabelname(x.id);
  const e_upd = waitForLabelnameUpdated(id);
  block(matchDeleteLabelname(id), function () {
    verifyLabelnameUpdated(id);
  });
  deleteLabelname(x.id);
  const e_del = waitForLabelnameDeleted(id);
  block(matchAddLabelname(id), function () {
    verifyLabelnameDoesNotExist(id);
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

bthread("LogoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLogo(x.id);
  const e_add = waitForLogoAdded(id);
  block(matchDeleteLogo(id), function () {
    verifyLogoExists(id);
  });
  updateLogo(x.id);
  updateLogo(x.id);
  const e_upd = waitForLogoUpdated(id);
  block(matchDeleteLogo(id), function () {
    verifyLogoUpdated(id);
  });
  deleteLogo(x.id);
  const e_del = waitForLogoDeleted(id);
  block(matchAddLogo(id), function () {
    verifyLogoDoesNotExist(id);
  });
});

bthread("MarkassociatednotificationsreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarkassociatednotificationsread(x.id);
  const e_add = waitForMarkassociatednotificationsreadAdded(id);
  block(matchDeleteMarkassociatednotificationsread(id), function () {
    verifyMarkassociatednotificationsreadExists(id);
  });
  updateMarkassociatednotificationsread(x.id);
  updateMarkassociatednotificationsread(x.id);
  const e_upd = waitForMarkassociatednotificationsreadUpdated(id);
  block(matchDeleteMarkassociatednotificationsread(id), function () {
    verifyMarkassociatednotificationsreadUpdated(id);
  });
  deleteMarkassociatednotificationsread(x.id);
  const e_del = waitForMarkassociatednotificationsreadDeleted(id);
  block(matchAddMarkassociatednotificationsread(id), function () {
    verifyMarkassociatednotificationsreadDoesNotExist(id);
  });
});

bthread("MarkasviewedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarkasviewed(x.id);
  const e_add = waitForMarkasviewedAdded(id);
  block(matchDeleteMarkasviewed(id), function () {
    verifyMarkasviewedExists(id);
  });
  updateMarkasviewed(x.id);
  updateMarkasviewed(x.id);
  const e_upd = waitForMarkasviewedUpdated(id);
  block(matchDeleteMarkasviewed(id), function () {
    verifyMarkasviewedUpdated(id);
  });
  deleteMarkasviewed(x.id);
  const e_del = waitForMarkasviewedDeleted(id);
  block(matchAddMarkasviewed(id), function () {
    verifyMarkasviewedDoesNotExist(id);
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

bthread("MembercreatorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembercreator(x.id);
  const e_add = waitForMembercreatorAdded(id);
  block(matchDeleteMembercreator(id), function () {
    verifyMembercreatorExists(id);
  });
  updateMembercreator(x.id);
  updateMembercreator(x.id);
  const e_upd = waitForMembercreatorUpdated(id);
  block(matchDeleteMembercreator(id), function () {
    verifyMembercreatorUpdated(id);
  });
  deleteMembercreator(x.id);
  const e_del = waitForMembercreatorDeleted(id);
  block(matchAddMembercreator(id), function () {
    verifyMembercreatorDoesNotExist(id);
  });
});

bthread("MembershipLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembership(x.id);
  const e_add = waitForMembershipAdded(id);
  block(matchDeleteMembership(id), function () {
    verifyMembershipExists(id);
  });
  updateMembership(x.id);
  updateMembership(x.id);
  const e_upd = waitForMembershipUpdated(id);
  block(matchDeleteMembership(id), function () {
    verifyMembershipUpdated(id);
  });
  deleteMembership(x.id);
  const e_del = waitForMembershipDeleted(id);
  block(matchAddMembership(id), function () {
    verifyMembershipDoesNotExist(id);
  });
});

bthread("MembersinvitedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersinvited(x.id);
  const e_add = waitForMembersinvitedAdded(id);
  block(matchDeleteMembersinvited(id), function () {
    verifyMembersinvitedExists(id);
  });
  updateMembersinvited(x.id);
  updateMembersinvited(x.id);
  const e_upd = waitForMembersinvitedUpdated(id);
  block(matchDeleteMembersinvited(id), function () {
    verifyMembersinvitedUpdated(id);
  });
  deleteMembersinvited(x.id);
  const e_del = waitForMembersinvitedDeleted(id);
  block(matchAddMembersinvited(id), function () {
    verifyMembersinvitedDoesNotExist(id);
  });
});

bthread("MembersvotedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersvoted(x.id);
  const e_add = waitForMembersvotedAdded(id);
  block(matchDeleteMembersvoted(id), function () {
    verifyMembersvotedExists(id);
  });
  updateMembersvoted(x.id);
  updateMembersvoted(x.id);
  const e_upd = waitForMembersvotedUpdated(id);
  block(matchDeleteMembersvoted(id), function () {
    verifyMembersvotedUpdated(id);
  });
  deleteMembersvoted(x.id);
  const e_del = waitForMembersvotedDeleted(id);
  block(matchAddMembersvoted(id), function () {
    verifyMembersvotedDoesNotExist(id);
  });
});

bthread("MinutesbetweensummaryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMinutesbetweensummary(x.id);
  const e_add = waitForMinutesbetweensummaryAdded(id);
  block(matchDeleteMinutesbetweensummary(id), function () {
    verifyMinutesbetweensummaryExists(id);
  });
  updateMinutesbetweensummary(x.id);
  updateMinutesbetweensummary(x.id);
  const e_upd = waitForMinutesbetweensummaryUpdated(id);
  block(matchDeleteMinutesbetweensummary(id), function () {
    verifyMinutesbetweensummaryUpdated(id);
  });
  deleteMinutesbetweensummary(x.id);
  const e_del = waitForMinutesbetweensummaryDeleted(id);
  block(matchAddMinutesbetweensummary(id), function () {
    verifyMinutesbetweensummaryDoesNotExist(id);
  });
});

bthread("MoveallcardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMoveallcard(x.id);
  const e_add = waitForMoveallcardAdded(id);
  block(matchDeleteMoveallcard(id), function () {
    verifyMoveallcardExists(id);
  });
  updateMoveallcard(x.id);
  updateMoveallcard(x.id);
  const e_upd = waitForMoveallcardUpdated(id);
  block(matchDeleteMoveallcard(id), function () {
    verifyMoveallcardUpdated(id);
  });
  deleteMoveallcard(x.id);
  const e_del = waitForMoveallcardDeleted(id);
  block(matchAddMoveallcard(id), function () {
    verifyMoveallcardDoesNotExist(id);
  });
});

bthread("MyprefLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMypref(x.id);
  const e_add = waitForMyprefAdded(id);
  block(matchDeleteMypref(id), function () {
    verifyMyprefExists(id);
  });
  updateMypref(x.id);
  updateMypref(x.id);
  const e_upd = waitForMyprefUpdated(id);
  block(matchDeleteMypref(id), function () {
    verifyMyprefUpdated(id);
  });
  deleteMypref(x.id);
  const e_del = waitForMyprefDeleted(id);
  block(matchAddMypref(id), function () {
    verifyMyprefDoesNotExist(id);
  });
});

bthread("NameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addName(x.id);
  const e_add = waitForNameAdded(id);
  block(matchDeleteName(id), function () {
    verifyNameExists(id);
  });
  updateName(x.id);
  updateName(x.id);
  const e_upd = waitForNameUpdated(id);
  block(matchDeleteName(id), function () {
    verifyNameUpdated(id);
  });
  deleteName(x.id);
  const e_del = waitForNameDeleted(id);
  block(matchAddName(id), function () {
    verifyNameDoesNotExist(id);
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

bthread("OnetimemessagesdismissedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOnetimemessagesdismissed(x.id);
  const e_add = waitForOnetimemessagesdismissedAdded(id);
  block(matchDeleteOnetimemessagesdismissed(id), function () {
    verifyOnetimemessagesdismissedExists(id);
  });
  updateOnetimemessagesdismissed(x.id);
  updateOnetimemessagesdismissed(x.id);
  const e_upd = waitForOnetimemessagesdismissedUpdated(id);
  block(matchDeleteOnetimemessagesdismissed(id), function () {
    verifyOnetimemessagesdismissedUpdated(id);
  });
  deleteOnetimemessagesdismissed(x.id);
  const e_del = waitForOnetimemessagesdismissedDeleted(id);
  block(matchAddOnetimemessagesdismissed(id), function () {
    verifyOnetimemessagesdismissedDoesNotExist(id);
  });
});

bthread("OrangeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrange(x.id);
  const e_add = waitForOrangeAdded(id);
  block(matchDeleteOrange(id), function () {
    verifyOrangeExists(id);
  });
  updateOrange(x.id);
  updateOrange(x.id);
  const e_upd = waitForOrangeUpdated(id);
  block(matchDeleteOrange(id), function () {
    verifyOrangeUpdated(id);
  });
  deleteOrange(x.id);
  const e_del = waitForOrangeDeleted(id);
  block(matchAddOrange(id), function () {
    verifyOrangeDoesNotExist(id);
  });
});

bthread("OrgLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrg(x.id);
  const e_add = waitForOrgAdded(id);
  block(matchDeleteOrg(id), function () {
    verifyOrgExists(id);
  });
  updateOrg(x.id);
  updateOrg(x.id);
  const e_upd = waitForOrgUpdated(id);
  block(matchDeleteOrg(id), function () {
    verifyOrgUpdated(id);
  });
  deleteOrg(x.id);
  const e_del = waitForOrgDeleted(id);
  block(matchAddOrg(id), function () {
    verifyOrgDoesNotExist(id);
  });
});

bthread("OrganizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganization(x.id);
  const e_add = waitForOrganizationAdded(id);
  block(matchDeleteOrganization(id), function () {
    verifyOrganizationExists(id);
  });
  updateOrganization(x.id);
  updateOrganization(x.id);
  const e_upd = waitForOrganizationUpdated(id);
  block(matchDeleteOrganization(id), function () {
    verifyOrganizationUpdated(id);
  });
  deleteOrganization(x.id);
  const e_del = waitForOrganizationDeleted(id);
  block(matchAddOrganization(id), function () {
    verifyOrganizationDoesNotExist(id);
  });
});

bthread("OrganizationsinvitedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsinvited(x.id);
  const e_add = waitForOrganizationsinvitedAdded(id);
  block(matchDeleteOrganizationsinvited(id), function () {
    verifyOrganizationsinvitedExists(id);
  });
  updateOrganizationsinvited(x.id);
  updateOrganizationsinvited(x.id);
  const e_upd = waitForOrganizationsinvitedUpdated(id);
  block(matchDeleteOrganizationsinvited(id), function () {
    verifyOrganizationsinvitedUpdated(id);
  });
  deleteOrganizationsinvited(x.id);
  const e_del = waitForOrganizationsinvitedDeleted(id);
  block(matchAddOrganizationsinvited(id), function () {
    verifyOrganizationsinvitedDoesNotExist(id);
  });
});

bthread("OrginviterestrictLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrginviterestrict(x.id);
  const e_add = waitForOrginviterestrictAdded(id);
  block(matchDeleteOrginviterestrict(id), function () {
    verifyOrginviterestrictExists(id);
  });
  updateOrginviterestrict(x.id);
  updateOrginviterestrict(x.id);
  const e_upd = waitForOrginviterestrictUpdated(id);
  block(matchDeleteOrginviterestrict(id), function () {
    verifyOrginviterestrictUpdated(id);
  });
  deleteOrginviterestrict(x.id);
  const e_del = waitForOrginviterestrictDeleted(id);
  block(matchAddOrginviterestrict(id), function () {
    verifyOrginviterestrictDoesNotExist(id);
  });
});

bthread("PermissionlevelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermissionlevel(x.id);
  const e_add = waitForPermissionlevelAdded(id);
  block(matchDeletePermissionlevel(id), function () {
    verifyPermissionlevelExists(id);
  });
  updatePermissionlevel(x.id);
  updatePermissionlevel(x.id);
  const e_upd = waitForPermissionlevelUpdated(id);
  block(matchDeletePermissionlevel(id), function () {
    verifyPermissionlevelUpdated(id);
  });
  deletePermissionlevel(x.id);
  const e_del = waitForPermissionlevelDeleted(id);
  block(matchAddPermissionlevel(id), function () {
    verifyPermissionlevelDoesNotExist(id);
  });
});

bthread("PoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPo(x.id);
  const e_add = waitForPoAdded(id);
  block(matchDeletePo(id), function () {
    verifyPoExists(id);
  });
  updatePo(x.id);
  updatePo(x.id);
  const e_upd = waitForPoUpdated(id);
  block(matchDeletePo(id), function () {
    verifyPoUpdated(id);
  });
  deletePo(x.id);
  const e_del = waitForPoDeleted(id);
  block(matchAddPo(id), function () {
    verifyPoDoesNotExist(id);
  });
});

bthread("PowerupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPowerup(x.id);
  const e_add = waitForPowerupAdded(id);
  block(matchDeletePowerup(id), function () {
    verifyPowerupExists(id);
  });
  updatePowerup(x.id);
  updatePowerup(x.id);
  const e_upd = waitForPowerupUpdated(id);
  block(matchDeletePowerup(id), function () {
    verifyPowerupUpdated(id);
  });
  deletePowerup(x.id);
  const e_del = waitForPowerupDeleted(id);
  block(matchAddPowerup(id), function () {
    verifyPowerupDoesNotExist(id);
  });
});

bthread("PrefLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPref(x.id);
  const e_add = waitForPrefAdded(id);
  block(matchDeletePref(id), function () {
    verifyPrefExists(id);
  });
  updatePref(x.id);
  updatePref(x.id);
  const e_upd = waitForPrefUpdated(id);
  block(matchDeletePref(id), function () {
    verifyPrefUpdated(id);
  });
  deletePref(x.id);
  const e_del = waitForPrefDeleted(id);
  block(matchAddPref(id), function () {
    verifyPrefDoesNotExist(id);
  });
});

bthread("PrivateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrivate(x.id);
  const e_add = waitForPrivateAdded(id);
  block(matchDeletePrivate(id), function () {
    verifyPrivateExists(id);
  });
  updatePrivate(x.id);
  updatePrivate(x.id);
  const e_upd = waitForPrivateUpdated(id);
  block(matchDeletePrivate(id), function () {
    verifyPrivateUpdated(id);
  });
  deletePrivate(x.id);
  const e_del = waitForPrivateDeleted(id);
  block(matchAddPrivate(id), function () {
    verifyPrivateDoesNotExist(id);
  });
});

bthread("PublicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublic(x.id);
  const e_add = waitForPublicAdded(id);
  block(matchDeletePublic(id), function () {
    verifyPublicExists(id);
  });
  updatePublic(x.id);
  updatePublic(x.id);
  const e_upd = waitForPublicUpdated(id);
  block(matchDeletePublic(id), function () {
    verifyPublicUpdated(id);
  });
  deletePublic(x.id);
  const e_del = waitForPublicDeleted(id);
  block(matchAddPublic(id), function () {
    verifyPublicDoesNotExist(id);
  });
});

bthread("PurpleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPurple(x.id);
  const e_add = waitForPurpleAdded(id);
  block(matchDeletePurple(id), function () {
    verifyPurpleExists(id);
  });
  updatePurple(x.id);
  updatePurple(x.id);
  const e_upd = waitForPurpleUpdated(id);
  block(matchDeletePurple(id), function () {
    verifyPurpleUpdated(id);
  });
  deletePurple(x.id);
  const e_del = waitForPurpleDeleted(id);
  block(matchAddPurple(id), function () {
    verifyPurpleDoesNotExist(id);
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

bthread("RedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRed(x.id);
  const e_add = waitForRedAdded(id);
  block(matchDeleteRed(id), function () {
    verifyRedExists(id);
  });
  updateRed(x.id);
  updateRed(x.id);
  const e_upd = waitForRedUpdated(id);
  block(matchDeleteRed(id), function () {
    verifyRedUpdated(id);
  });
  deleteRed(x.id);
  const e_del = waitForRedDeleted(id);
  block(matchAddRed(id), function () {
    verifyRedDoesNotExist(id);
  });
});

bthread("SavedsearcheLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSavedsearche(x.id);
  const e_add = waitForSavedsearcheAdded(id);
  block(matchDeleteSavedsearche(id), function () {
    verifySavedsearcheExists(id);
  });
  updateSavedsearche(x.id);
  updateSavedsearche(x.id);
  const e_upd = waitForSavedsearcheUpdated(id);
  block(matchDeleteSavedsearche(id), function () {
    verifySavedsearcheUpdated(id);
  });
  deleteSavedsearche(x.id);
  const e_del = waitForSavedsearcheDeleted(id);
  block(matchAddSavedsearche(id), function () {
    verifySavedsearcheDoesNotExist(id);
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

bthread("SelfjoinLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSelfjoin(x.id);
  const e_add = waitForSelfjoinAdded(id);
  block(matchDeleteSelfjoin(id), function () {
    verifySelfjoinExists(id);
  });
  updateSelfjoin(x.id);
  updateSelfjoin(x.id);
  const e_upd = waitForSelfjoinUpdated(id);
  block(matchDeleteSelfjoin(id), function () {
    verifySelfjoinUpdated(id);
  });
  deleteSelfjoin(x.id);
  const e_del = waitForSelfjoinDeleted(id);
  block(matchAddSelfjoin(id), function () {
    verifySelfjoinDoesNotExist(id);
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

bthread("ShowlistguideLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShowlistguide(x.id);
  const e_add = waitForShowlistguideAdded(id);
  block(matchDeleteShowlistguide(id), function () {
    verifyShowlistguideExists(id);
  });
  updateShowlistguide(x.id);
  updateShowlistguide(x.id);
  const e_upd = waitForShowlistguideUpdated(id);
  block(matchDeleteShowlistguide(id), function () {
    verifyShowlistguideUpdated(id);
  });
  deleteShowlistguide(x.id);
  const e_del = waitForShowlistguideDeleted(id);
  block(matchAddShowlistguide(id), function () {
    verifyShowlistguideDoesNotExist(id);
  });
});

bthread("ShowsidebarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShowsidebar(x.id);
  const e_add = waitForShowsidebarAdded(id);
  block(matchDeleteShowsidebar(id), function () {
    verifyShowsidebarExists(id);
  });
  updateShowsidebar(x.id);
  updateShowsidebar(x.id);
  const e_upd = waitForShowsidebarUpdated(id);
  block(matchDeleteShowsidebar(id), function () {
    verifyShowsidebarUpdated(id);
  });
  deleteShowsidebar(x.id);
  const e_del = waitForShowsidebarDeleted(id);
  block(matchAddShowsidebar(id), function () {
    verifyShowsidebarDoesNotExist(id);
  });
});

bthread("ShowsidebaractivityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShowsidebaractivity(x.id);
  const e_add = waitForShowsidebaractivityAdded(id);
  block(matchDeleteShowsidebaractivity(id), function () {
    verifyShowsidebaractivityExists(id);
  });
  updateShowsidebaractivity(x.id);
  updateShowsidebaractivity(x.id);
  const e_upd = waitForShowsidebaractivityUpdated(id);
  block(matchDeleteShowsidebaractivity(id), function () {
    verifyShowsidebaractivityUpdated(id);
  });
  deleteShowsidebaractivity(x.id);
  const e_del = waitForShowsidebaractivityDeleted(id);
  block(matchAddShowsidebaractivity(id), function () {
    verifyShowsidebaractivityDoesNotExist(id);
  });
});

bthread("ShowsidebarboardactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShowsidebarboardaction(x.id);
  const e_add = waitForShowsidebarboardactionAdded(id);
  block(matchDeleteShowsidebarboardaction(id), function () {
    verifyShowsidebarboardactionExists(id);
  });
  updateShowsidebarboardaction(x.id);
  updateShowsidebarboardaction(x.id);
  const e_upd = waitForShowsidebarboardactionUpdated(id);
  block(matchDeleteShowsidebarboardaction(id), function () {
    verifyShowsidebarboardactionUpdated(id);
  });
  deleteShowsidebarboardaction(x.id);
  const e_del = waitForShowsidebarboardactionDeleted(id);
  block(matchAddShowsidebarboardaction(id), function () {
    verifyShowsidebarboardactionDoesNotExist(id);
  });
});

bthread("ShowsidebarmemberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addShowsidebarmember(x.id);
  const e_add = waitForShowsidebarmemberAdded(id);
  block(matchDeleteShowsidebarmember(id), function () {
    verifyShowsidebarmemberExists(id);
  });
  updateShowsidebarmember(x.id);
  updateShowsidebarmember(x.id);
  const e_upd = waitForShowsidebarmemberUpdated(id);
  block(matchDeleteShowsidebarmember(id), function () {
    verifyShowsidebarmemberUpdated(id);
  });
  deleteShowsidebarmember(x.id);
  const e_del = waitForShowsidebarmemberDeleted(id);
  block(matchAddShowsidebarmember(id), function () {
    verifyShowsidebarmemberDoesNotExist(id);
  });
});

bthread("SocketLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSocket(x.id);
  const e_add = waitForSocketAdded(id);
  block(matchDeleteSocket(id), function () {
    verifySocketExists(id);
  });
  updateSocket(x.id);
  updateSocket(x.id);
  const e_upd = waitForSocketUpdated(id);
  block(matchDeleteSocket(id), function () {
    verifySocketUpdated(id);
  });
  deleteSocket(x.id);
  const e_del = waitForSocketDeleted(id);
  block(matchAddSocket(id), function () {
    verifySocketDoesNotExist(id);
  });
});

bthread("StateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addState(x.id);
  const e_add = waitForStateAdded(id);
  block(matchDeleteState(id), function () {
    verifyStateExists(id);
  });
  updateState(x.id);
  updateState(x.id);
  const e_upd = waitForStateUpdated(id);
  block(matchDeleteState(id), function () {
    verifyStateUpdated(id);
  });
  deleteState(x.id);
  const e_del = waitForStateDeleted(id);
  block(matchAddState(id), function () {
    verifyStateDoesNotExist(id);
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

bthread("StickerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSticker(x.id);
  const e_add = waitForStickerAdded(id);
  block(matchDeleteSticker(id), function () {
    verifyStickerExists(id);
  });
  updateSticker(x.id);
  updateSticker(x.id);
  const e_upd = waitForStickerUpdated(id);
  block(matchDeleteSticker(id), function () {
    verifyStickerUpdated(id);
  });
  deleteSticker(x.id);
  const e_del = waitForStickerDeleted(id);
  block(matchAddSticker(id), function () {
    verifyStickerDoesNotExist(id);
  });
});

bthread("SubscribedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubscribed(x.id);
  const e_add = waitForSubscribedAdded(id);
  block(matchDeleteSubscribed(id), function () {
    verifySubscribedExists(id);
  });
  updateSubscribed(x.id);
  updateSubscribed(x.id);
  const e_upd = waitForSubscribedUpdated(id);
  block(matchDeleteSubscribed(id), function () {
    verifySubscribedUpdated(id);
  });
  deleteSubscribed(x.id);
  const e_del = waitForSubscribedDeleted(id);
  block(matchAddSubscribed(id), function () {
    verifySubscribedDoesNotExist(id);
  });
});

bthread("TextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addText(x.id);
  const e_add = waitForTextAdded(id);
  block(matchDeleteText(id), function () {
    verifyTextExists(id);
  });
  updateText(x.id);
  updateText(x.id);
  const e_upd = waitForTextUpdated(id);
  block(matchDeleteText(id), function () {
    verifyTextUpdated(id);
  });
  deleteText(x.id);
  const e_del = waitForTextDeleted(id);
  block(matchAddText(id), function () {
    verifyTextDoesNotExist(id);
  });
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addToken(x.id);
  const e_add = waitForTokenAdded(id);
  block(matchDeleteToken(id), function () {
    verifyTokenExists(id);
  });
  updateToken(x.id);
  updateToken(x.id);
  const e_upd = waitForTokenUpdated(id);
  block(matchDeleteToken(id), function () {
    verifyTokenUpdated(id);
  });
  deleteToken(x.id);
  const e_del = waitForTokenDeleted(id);
  block(matchAddToken(id), function () {
    verifyTokenDoesNotExist(id);
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

bthread("UnreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUnread(x.id);
  const e_add = waitForUnreadAdded(id);
  block(matchDeleteUnread(id), function () {
    verifyUnreadExists(id);
  });
  updateUnread(x.id);
  updateUnread(x.id);
  const e_upd = waitForUnreadUpdated(id);
  block(matchDeleteUnread(id), function () {
    verifyUnreadUpdated(id);
  });
  deleteUnread(x.id);
  const e_del = waitForUnreadDeleted(id);
  block(matchAddUnread(id), function () {
    verifyUnreadDoesNotExist(id);
  });
});

bthread("UsernameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsername(x.id);
  const e_add = waitForUsernameAdded(id);
  block(matchDeleteUsername(id), function () {
    verifyUsernameExists(id);
  });
  updateUsername(x.id);
  updateUsername(x.id);
  const e_upd = waitForUsernameUpdated(id);
  block(matchDeleteUsername(id), function () {
    verifyUsernameUpdated(id);
  });
  deleteUsername(x.id);
  const e_del = waitForUsernameDeleted(id);
  block(matchAddUsername(id), function () {
    verifyUsernameDoesNotExist(id);
  });
});

bthread("VotingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVoting(x.id);
  const e_add = waitForVotingAdded(id);
  block(matchDeleteVoting(id), function () {
    verifyVotingExists(id);
  });
  updateVoting(x.id);
  updateVoting(x.id);
  const e_upd = waitForVotingUpdated(id);
  block(matchDeleteVoting(id), function () {
    verifyVotingUpdated(id);
  });
  deleteVoting(x.id);
  const e_del = waitForVotingDeleted(id);
  block(matchAddVoting(id), function () {
    verifyVotingDoesNotExist(id);
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

bthread("WebsiteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebsite(x.id);
  const e_add = waitForWebsiteAdded(id);
  block(matchDeleteWebsite(id), function () {
    verifyWebsiteExists(id);
  });
  updateWebsite(x.id);
  updateWebsite(x.id);
  const e_upd = waitForWebsiteUpdated(id);
  block(matchDeleteWebsite(id), function () {
    verifyWebsiteUpdated(id);
  });
  deleteWebsite(x.id);
  const e_del = waitForWebsiteDeleted(id);
  block(matchAddWebsite(id), function () {
    verifyWebsiteDoesNotExist(id);
  });
});

bthread("YellowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addYellow(x.id);
  const e_add = waitForYellowAdded(id);
  block(matchDeleteYellow(id), function () {
    verifyYellowExists(id);
  });
  updateYellow(x.id);
  updateYellow(x.id);
  const e_upd = waitForYellowUpdated(id);
  block(matchDeleteYellow(id), function () {
    verifyYellowUpdated(id);
  });
  deleteYellow(x.id);
  const e_del = waitForYellowDeleted(id);
  block(matchAddYellow(id), function () {
    verifyYellowDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Action nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAction(x.id);
  for (var i=0; i<steps; i++) {
    updateAction(x.id);
  }
  if (pick([true,false])) { deleteAction(x.id); }
  verifyActionExists(x.id);
  verifyActionUpdated(x.id);
});

bthread("Action nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAction(a.id);
  block(matchAddAction(a.id, ANY), function () {});
  addAction(b.id);
});

bthread("Active nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addActive(x.id);
  for (var i=0; i<steps; i++) {
    updateActive(x.id);
  }
  if (pick([true,false])) { deleteActive(x.id); }
  verifyActiveExists(x.id);
  verifyActiveUpdated(x.id);
});

bthread("Active nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addActive(a.id);
  block(matchAddActive(a.id, ANY), function () {});
  addActive(b.id);
});

bthread("All nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAll(x.id);
  for (var i=0; i<steps; i++) {
    updateAll(x.id);
  }
  if (pick([true,false])) { deleteAll(x.id); }
  verifyAllExists(x.id);
  verifyAllUpdated(x.id);
});

bthread("All nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAll(a.id);
  block(matchAddAll(a.id, ANY), function () {});
  addAll(b.id);
});

bthread("Archiveallcard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addArchiveallcard(x.id);
  for (var i=0; i<steps; i++) {
    updateArchiveallcard(x.id);
  }
  if (pick([true,false])) { deleteArchiveallcard(x.id); }
  verifyArchiveallcardExists(x.id);
  verifyArchiveallcardUpdated(x.id);
});

bthread("Archiveallcard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addArchiveallcard(a.id);
  block(matchAddArchiveallcard(a.id, ANY), function () {});
  addArchiveallcard(b.id);
});

bthread("Associateddomain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAssociateddomain(x.id);
  for (var i=0; i<steps; i++) {
    updateAssociateddomain(x.id);
  }
  if (pick([true,false])) { deleteAssociateddomain(x.id); }
  verifyAssociateddomainExists(x.id);
  verifyAssociateddomainUpdated(x.id);
});

bthread("Associateddomain nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAssociateddomain(a.id);
  block(matchAddAssociateddomain(a.id, ANY), function () {});
  addAssociateddomain(b.id);
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

bthread("Avatarsource nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAvatarsource(x.id);
  for (var i=0; i<steps; i++) {
    updateAvatarsource(x.id);
  }
  if (pick([true,false])) { deleteAvatarsource(x.id); }
  verifyAvatarsourceExists(x.id);
  verifyAvatarsourceUpdated(x.id);
});

bthread("Avatarsource nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAvatarsource(a.id);
  block(matchAddAvatarsource(a.id, ANY), function () {});
  addAvatarsource(b.id);
});

bthread("Background nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBackground(x.id);
  for (var i=0; i<steps; i++) {
    updateBackground(x.id);
  }
  if (pick([true,false])) { deleteBackground(x.id); }
  verifyBackgroundExists(x.id);
  verifyBackgroundUpdated(x.id);
});

bthread("Background nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBackground(a.id);
  block(matchAddBackground(a.id, ANY), function () {});
  addBackground(b.id);
});

bthread("Batch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBatch(x.id);
  for (var i=0; i<steps; i++) {
    updateBatch(x.id);
  }
  if (pick([true,false])) { deleteBatch(x.id); }
  verifyBatchExists(x.id);
  verifyBatchUpdated(x.id);
});

bthread("Batch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBatch(a.id);
  block(matchAddBatch(a.id, ANY), function () {});
  addBatch(b.id);
});

bthread("Bio nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBio(x.id);
  for (var i=0; i<steps; i++) {
    updateBio(x.id);
  }
  if (pick([true,false])) { deleteBio(x.id); }
  verifyBioExists(x.id);
  verifyBioUpdated(x.id);
});

bthread("Bio nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBio(a.id);
  block(matchAddBio(a.id, ANY), function () {});
  addBio(b.id);
});

bthread("Blue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBlue(x.id);
  for (var i=0; i<steps; i++) {
    updateBlue(x.id);
  }
  if (pick([true,false])) { deleteBlue(x.id); }
  verifyBlueExists(x.id);
  verifyBlueUpdated(x.id);
});

bthread("Blue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBlue(a.id);
  block(matchAddBlue(a.id, ANY), function () {});
  addBlue(b.id);
});

bthread("Board nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBoard(x.id);
  for (var i=0; i<steps; i++) {
    updateBoard(x.id);
  }
  if (pick([true,false])) { deleteBoard(x.id); }
  verifyBoardExists(x.id);
  verifyBoardUpdated(x.id);
});

bthread("Board nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBoard(a.id);
  block(matchAddBoard(a.id, ANY), function () {});
  addBoard(b.id);
});

bthread("Boardbackground nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBoardbackground(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardbackground(x.id);
  }
  if (pick([true,false])) { deleteBoardbackground(x.id); }
  verifyBoardbackgroundExists(x.id);
  verifyBoardbackgroundUpdated(x.id);
});

bthread("Boardbackground nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBoardbackground(a.id);
  block(matchAddBoardbackground(a.id, ANY), function () {});
  addBoardbackground(b.id);
});

bthread("Boardsinvited nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBoardsinvited(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsinvited(x.id);
  }
  if (pick([true,false])) { deleteBoardsinvited(x.id); }
  verifyBoardsinvitedExists(x.id);
  verifyBoardsinvitedUpdated(x.id);
});

bthread("Boardsinvited nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBoardsinvited(a.id);
  block(matchAddBoardsinvited(a.id, ANY), function () {});
  addBoardsinvited(b.id);
});

bthread("Boardstar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBoardstar(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardstar(x.id);
  }
  if (pick([true,false])) { deleteBoardstar(x.id); }
  verifyBoardstarExists(x.id);
  verifyBoardstarUpdated(x.id);
});

bthread("Boardstar nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBoardstar(a.id);
  block(matchAddBoardstar(a.id, ANY), function () {});
  addBoardstar(b.id);
});

bthread("Boardvisibilityrestrict nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBoardvisibilityrestrict(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardvisibilityrestrict(x.id);
  }
  if (pick([true,false])) { deleteBoardvisibilityrestrict(x.id); }
  verifyBoardvisibilityrestrictExists(x.id);
  verifyBoardvisibilityrestrictUpdated(x.id);
});

bthread("Boardvisibilityrestrict nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBoardvisibilityrestrict(a.id);
  block(matchAddBoardvisibilityrestrict(a.id, ANY), function () {});
  addBoardvisibilityrestrict(b.id);
});

bthread("Calendarfeedenabled nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCalendarfeedenabled(x.id);
  for (var i=0; i<steps; i++) {
    updateCalendarfeedenabled(x.id);
  }
  if (pick([true,false])) { deleteCalendarfeedenabled(x.id); }
  verifyCalendarfeedenabledExists(x.id);
  verifyCalendarfeedenabledUpdated(x.id);
});

bthread("Calendarfeedenabled nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCalendarfeedenabled(a.id);
  block(matchAddCalendarfeedenabled(a.id, ANY), function () {});
  addCalendarfeedenabled(b.id);
});

bthread("Calendarkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCalendarkey(x.id);
  for (var i=0; i<steps; i++) {
    updateCalendarkey(x.id);
  }
  if (pick([true,false])) { deleteCalendarkey(x.id); }
  verifyCalendarkeyExists(x.id);
  verifyCalendarkeyUpdated(x.id);
});

bthread("Calendarkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCalendarkey(a.id);
  block(matchAddCalendarkey(a.id, ANY), function () {});
  addCalendarkey(b.id);
});

bthread("Callbackurl nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCallbackurl(x.id);
  for (var i=0; i<steps; i++) {
    updateCallbackurl(x.id);
  }
  if (pick([true,false])) { deleteCallbackurl(x.id); }
  verifyCallbackurlExists(x.id);
  verifyCallbackurlUpdated(x.id);
});

bthread("Callbackurl nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCallbackurl(a.id);
  block(matchAddCallbackurl(a.id, ANY), function () {});
  addCallbackurl(b.id);
});

bthread("Card nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCard(x.id);
  for (var i=0; i<steps; i++) {
    updateCard(x.id);
  }
  if (pick([true,false])) { deleteCard(x.id); }
  verifyCardExists(x.id);
  verifyCardUpdated(x.id);
});

bthread("Card nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCard(a.id);
  block(matchAddCard(a.id, ANY), function () {});
  addCard(b.id);
});

bthread("Cardaging nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCardaging(x.id);
  for (var i=0; i<steps; i++) {
    updateCardaging(x.id);
  }
  if (pick([true,false])) { deleteCardaging(x.id); }
  verifyCardagingExists(x.id);
  verifyCardagingUpdated(x.id);
});

bthread("Cardaging nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCardaging(a.id);
  block(matchAddCardaging(a.id, ANY), function () {});
  addCardaging(b.id);
});

bthread("Cardcover nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCardcover(x.id);
  for (var i=0; i<steps; i++) {
    updateCardcover(x.id);
  }
  if (pick([true,false])) { deleteCardcover(x.id); }
  verifyCardcoverExists(x.id);
  verifyCardcoverUpdated(x.id);
});

bthread("Cardcover nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCardcover(a.id);
  block(matchAddCardcover(a.id, ANY), function () {});
  addCardcover(b.id);
});

bthread("Checkitem nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCheckitem(x.id);
  for (var i=0; i<steps; i++) {
    updateCheckitem(x.id);
  }
  if (pick([true,false])) { deleteCheckitem(x.id); }
  verifyCheckitemExists(x.id);
  verifyCheckitemUpdated(x.id);
});

bthread("Checkitem nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCheckitem(a.id);
  block(matchAddCheckitem(a.id, ANY), function () {});
  addCheckitem(b.id);
});

bthread("Checkitemstate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCheckitemstate(x.id);
  for (var i=0; i<steps; i++) {
    updateCheckitemstate(x.id);
  }
  if (pick([true,false])) { deleteCheckitemstate(x.id); }
  verifyCheckitemstateExists(x.id);
  verifyCheckitemstateUpdated(x.id);
});

bthread("Checkitemstate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCheckitemstate(a.id);
  block(matchAddCheckitemstate(a.id, ANY), function () {});
  addCheckitemstate(b.id);
});

bthread("Checklist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addChecklist(x.id);
  for (var i=0; i<steps; i++) {
    updateChecklist(x.id);
  }
  if (pick([true,false])) { deleteChecklist(x.id); }
  verifyChecklistExists(x.id);
  verifyChecklistUpdated(x.id);
});

bthread("Checklist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addChecklist(a.id);
  block(matchAddChecklist(a.id, ANY), function () {});
  addChecklist(b.id);
});

bthread("Closed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addClosed(x.id);
  for (var i=0; i<steps; i++) {
    updateClosed(x.id);
  }
  if (pick([true,false])) { deleteClosed(x.id); }
  verifyClosedExists(x.id);
  verifyClosedUpdated(x.id);
});

bthread("Closed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClosed(a.id);
  block(matchAddClosed(a.id, ANY), function () {});
  addClosed(b.id);
});

bthread("Color nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addColor(x.id);
  for (var i=0; i<steps; i++) {
    updateColor(x.id);
  }
  if (pick([true,false])) { deleteColor(x.id); }
  verifyColorExists(x.id);
  verifyColorUpdated(x.id);
});

bthread("Color nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addColor(a.id);
  block(matchAddColor(a.id, ANY), function () {});
  addColor(b.id);
});

bthread("Colorblind nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addColorblind(x.id);
  for (var i=0; i<steps; i++) {
    updateColorblind(x.id);
  }
  if (pick([true,false])) { deleteColorblind(x.id); }
  verifyColorblindExists(x.id);
  verifyColorblindUpdated(x.id);
});

bthread("Colorblind nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addColorblind(a.id);
  block(matchAddColorblind(a.id, ANY), function () {});
  addColorblind(b.id);
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

bthread("Converttocard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConverttocard(x.id);
  for (var i=0; i<steps; i++) {
    updateConverttocard(x.id);
  }
  if (pick([true,false])) { deleteConverttocard(x.id); }
  verifyConverttocardExists(x.id);
  verifyConverttocardUpdated(x.id);
});

bthread("Converttocard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConverttocard(a.id);
  block(matchAddConverttocard(a.id, ANY), function () {});
  addConverttocard(b.id);
});

bthread("Customboardbackground nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCustomboardbackground(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomboardbackground(x.id);
  }
  if (pick([true,false])) { deleteCustomboardbackground(x.id); }
  verifyCustomboardbackgroundExists(x.id);
  verifyCustomboardbackgroundUpdated(x.id);
});

bthread("Customboardbackground nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomboardbackground(a.id);
  block(matchAddCustomboardbackground(a.id, ANY), function () {});
  addCustomboardbackground(b.id);
});

bthread("Customemoji nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCustomemoji(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomemoji(x.id);
  }
  if (pick([true,false])) { deleteCustomemoji(x.id); }
  verifyCustomemojiExists(x.id);
  verifyCustomemojiUpdated(x.id);
});

bthread("Customemoji nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomemoji(a.id);
  block(matchAddCustomemoji(a.id, ANY), function () {});
  addCustomemoji(b.id);
});

bthread("Customsticker nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCustomsticker(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomsticker(x.id);
  }
  if (pick([true,false])) { deleteCustomsticker(x.id); }
  verifyCustomstickerExists(x.id);
  verifyCustomstickerUpdated(x.id);
});

bthread("Customsticker nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomsticker(a.id);
  block(matchAddCustomsticker(a.id, ANY), function () {});
  addCustomsticker(b.id);
});

bthread("Deactivated nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeactivated(x.id);
  for (var i=0; i<steps; i++) {
    updateDeactivated(x.id);
  }
  if (pick([true,false])) { deleteDeactivated(x.id); }
  verifyDeactivatedExists(x.id);
  verifyDeactivatedUpdated(x.id);
});

bthread("Deactivated nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeactivated(a.id);
  block(matchAddDeactivated(a.id, ANY), function () {});
  addDeactivated(b.id);
});

bthread("Delta nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDelta(x.id);
  for (var i=0; i<steps; i++) {
    updateDelta(x.id);
  }
  if (pick([true,false])) { deleteDelta(x.id); }
  verifyDeltaExists(x.id);
  verifyDeltaUpdated(x.id);
});

bthread("Delta nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDelta(a.id);
  block(matchAddDelta(a.id, ANY), function () {});
  addDelta(b.id);
});

bthread("Desc nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDesc(x.id);
  for (var i=0; i<steps; i++) {
    updateDesc(x.id);
  }
  if (pick([true,false])) { deleteDesc(x.id); }
  verifyDescExists(x.id);
  verifyDescUpdated(x.id);
});

bthread("Desc nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDesc(a.id);
  block(matchAddDesc(a.id, ANY), function () {});
  addDesc(b.id);
});

bthread("Description nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDescription(x.id);
  for (var i=0; i<steps; i++) {
    updateDescription(x.id);
  }
  if (pick([true,false])) { deleteDescription(x.id); }
  verifyDescriptionExists(x.id);
  verifyDescriptionUpdated(x.id);
});

bthread("Description nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDescription(a.id);
  block(matchAddDescription(a.id, ANY), function () {});
  addDescription(b.id);
});

bthread("Display nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDisplay(x.id);
  for (var i=0; i<steps; i++) {
    updateDisplay(x.id);
  }
  if (pick([true,false])) { deleteDisplay(x.id); }
  verifyDisplayExists(x.id);
  verifyDisplayUpdated(x.id);
});

bthread("Display nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDisplay(a.id);
  block(matchAddDisplay(a.id, ANY), function () {});
  addDisplay(b.id);
});

bthread("Displayname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDisplayname(x.id);
  for (var i=0; i<steps; i++) {
    updateDisplayname(x.id);
  }
  if (pick([true,false])) { deleteDisplayname(x.id); }
  verifyDisplaynameExists(x.id);
  verifyDisplaynameUpdated(x.id);
});

bthread("Displayname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDisplayname(a.id);
  block(matchAddDisplayname(a.id, ANY), function () {});
  addDisplayname(b.id);
});

bthread("Due nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDue(x.id);
  for (var i=0; i<steps; i++) {
    updateDue(x.id);
  }
  if (pick([true,false])) { deleteDue(x.id); }
  verifyDueExists(x.id);
  verifyDueUpdated(x.id);
});

bthread("Due nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDue(a.id);
  block(matchAddDue(a.id, ANY), function () {});
  addDue(b.id);
});

bthread("Emailkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEmailkey(x.id);
  for (var i=0; i<steps; i++) {
    updateEmailkey(x.id);
  }
  if (pick([true,false])) { deleteEmailkey(x.id); }
  verifyEmailkeyExists(x.id);
  verifyEmailkeyUpdated(x.id);
});

bthread("Emailkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEmailkey(a.id);
  block(matchAddEmailkey(a.id, ANY), function () {});
  addEmailkey(b.id);
});

bthread("Emailposition nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEmailposition(x.id);
  for (var i=0; i<steps; i++) {
    updateEmailposition(x.id);
  }
  if (pick([true,false])) { deleteEmailposition(x.id); }
  verifyEmailpositionExists(x.id);
  verifyEmailpositionUpdated(x.id);
});

bthread("Emailposition nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEmailposition(a.id);
  block(matchAddEmailposition(a.id, ANY), function () {});
  addEmailposition(b.id);
});

bthread("Entity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEntity(x.id);
  for (var i=0; i<steps; i++) {
    updateEntity(x.id);
  }
  if (pick([true,false])) { deleteEntity(x.id); }
  verifyEntityExists(x.id);
  verifyEntityUpdated(x.id);
});

bthread("Entity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEntity(a.id);
  block(matchAddEntity(a.id, ANY), function () {});
  addEntity(b.id);
});

bthread("Externalmembersdisabled nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addExternalmembersdisabled(x.id);
  for (var i=0; i<steps; i++) {
    updateExternalmembersdisabled(x.id);
  }
  if (pick([true,false])) { deleteExternalmembersdisabled(x.id); }
  verifyExternalmembersdisabledExists(x.id);
  verifyExternalmembersdisabledUpdated(x.id);
});

bthread("Externalmembersdisabled nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExternalmembersdisabled(a.id);
  block(matchAddExternalmembersdisabled(a.id, ANY), function () {});
  addExternalmembersdisabled(b.id);
});

bthread("Fullname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFullname(x.id);
  for (var i=0; i<steps; i++) {
    updateFullname(x.id);
  }
  if (pick([true,false])) { deleteFullname(x.id); }
  verifyFullnameExists(x.id);
  verifyFullnameUpdated(x.id);
});

bthread("Fullname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFullname(a.id);
  block(matchAddFullname(a.id, ANY), function () {});
  addFullname(b.id);
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
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerate(a.id);
  block(matchAddGenerate(a.id, ANY), function () {});
  addGenerate(b.id);
});

bthread("Googleappsversion nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGoogleappsversion(x.id);
  for (var i=0; i<steps; i++) {
    updateGoogleappsversion(x.id);
  }
  if (pick([true,false])) { deleteGoogleappsversion(x.id); }
  verifyGoogleappsversionExists(x.id);
  verifyGoogleappsversionUpdated(x.id);
});

bthread("Googleappsversion nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGoogleappsversion(a.id);
  block(matchAddGoogleappsversion(a.id, ANY), function () {});
  addGoogleappsversion(b.id);
});

bthread("Green nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGreen(x.id);
  for (var i=0; i<steps; i++) {
    updateGreen(x.id);
  }
  if (pick([true,false])) { deleteGreen(x.id); }
  verifyGreenExists(x.id);
  verifyGreenUpdated(x.id);
});

bthread("Green nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGreen(a.id);
  block(matchAddGreen(a.id, ANY), function () {});
  addGreen(b.id);
});

bthread("Idattachmentcover nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdattachmentcover(x.id);
  for (var i=0; i<steps; i++) {
    updateIdattachmentcover(x.id);
  }
  if (pick([true,false])) { deleteIdattachmentcover(x.id); }
  verifyIdattachmentcoverExists(x.id);
  verifyIdattachmentcoverUpdated(x.id);
});

bthread("Idattachmentcover nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdattachmentcover(a.id);
  block(matchAddIdattachmentcover(a.id, ANY), function () {});
  addIdattachmentcover(b.id);
});

bthread("Idboard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdboard(x.id);
  for (var i=0; i<steps; i++) {
    updateIdboard(x.id);
  }
  if (pick([true,false])) { deleteIdboard(x.id); }
  verifyIdboardExists(x.id);
  verifyIdboardUpdated(x.id);
});

bthread("Idboard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdboard(a.id);
  block(matchAddIdboard(a.id, ANY), function () {});
  addIdboard(b.id);
});

bthread("Idcard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdcard(x.id);
  for (var i=0; i<steps; i++) {
    updateIdcard(x.id);
  }
  if (pick([true,false])) { deleteIdcard(x.id); }
  verifyIdcardExists(x.id);
  verifyIdcardUpdated(x.id);
});

bthread("Idcard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdcard(a.id);
  block(matchAddIdcard(a.id, ANY), function () {});
  addIdcard(b.id);
});

bthread("Idemaillist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdemaillist(x.id);
  for (var i=0; i<steps; i++) {
    updateIdemaillist(x.id);
  }
  if (pick([true,false])) { deleteIdemaillist(x.id); }
  verifyIdemaillistExists(x.id);
  verifyIdemaillistUpdated(x.id);
});

bthread("Idemaillist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdemaillist(a.id);
  block(matchAddIdemaillist(a.id, ANY), function () {});
  addIdemaillist(b.id);
});

bthread("Idlabel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdlabel(x.id);
  for (var i=0; i<steps; i++) {
    updateIdlabel(x.id);
  }
  if (pick([true,false])) { deleteIdlabel(x.id); }
  verifyIdlabelExists(x.id);
  verifyIdlabelUpdated(x.id);
});

bthread("Idlabel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdlabel(a.id);
  block(matchAddIdlabel(a.id, ANY), function () {});
  addIdlabel(b.id);
});

bthread("Idlist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdlist(x.id);
  for (var i=0; i<steps; i++) {
    updateIdlist(x.id);
  }
  if (pick([true,false])) { deleteIdlist(x.id); }
  verifyIdlistExists(x.id);
  verifyIdlistUpdated(x.id);
});

bthread("Idlist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdlist(a.id);
  block(matchAddIdlist(a.id, ANY), function () {});
  addIdlist(b.id);
});

bthread("Idmember nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdmember(x.id);
  for (var i=0; i<steps; i++) {
    updateIdmember(x.id);
  }
  if (pick([true,false])) { deleteIdmember(x.id); }
  verifyIdmemberExists(x.id);
  verifyIdmemberUpdated(x.id);
});

bthread("Idmember nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdmember(a.id);
  block(matchAddIdmember(a.id, ANY), function () {});
  addIdmember(b.id);
});

bthread("Idmodel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdmodel(x.id);
  for (var i=0; i<steps; i++) {
    updateIdmodel(x.id);
  }
  if (pick([true,false])) { deleteIdmodel(x.id); }
  verifyIdmodelExists(x.id);
  verifyIdmodelUpdated(x.id);
});

bthread("Idmodel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdmodel(a.id);
  block(matchAddIdmodel(a.id, ANY), function () {});
  addIdmodel(b.id);
});

bthread("Idorganization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIdorganization(x.id);
  for (var i=0; i<steps; i++) {
    updateIdorganization(x.id);
  }
  if (pick([true,false])) { deleteIdorganization(x.id); }
  verifyIdorganizationExists(x.id);
  verifyIdorganizationUpdated(x.id);
});

bthread("Idorganization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIdorganization(a.id);
  block(matchAddIdorganization(a.id, ANY), function () {});
  addIdorganization(b.id);
});

bthread("Initial nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInitial(x.id);
  for (var i=0; i<steps; i++) {
    updateInitial(x.id);
  }
  if (pick([true,false])) { deleteInitial(x.id); }
  verifyInitialExists(x.id);
  verifyInitialUpdated(x.id);
});

bthread("Initial nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInitial(a.id);
  block(matchAddInitial(a.id, ANY), function () {});
  addInitial(b.id);
});

bthread("Invitation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInvitation(x.id);
  for (var i=0; i<steps; i++) {
    updateInvitation(x.id);
  }
  if (pick([true,false])) { deleteInvitation(x.id); }
  verifyInvitationExists(x.id);
  verifyInvitationUpdated(x.id);
});

bthread("Invitation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInvitation(a.id);
  block(matchAddInvitation(a.id, ANY), function () {});
  addInvitation(b.id);
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

bthread("Labelname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLabelname(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelname(x.id);
  }
  if (pick([true,false])) { deleteLabelname(x.id); }
  verifyLabelnameExists(x.id);
  verifyLabelnameUpdated(x.id);
});

bthread("Labelname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLabelname(a.id);
  block(matchAddLabelname(a.id, ANY), function () {});
  addLabelname(b.id);
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

bthread("Logo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLogo(x.id);
  for (var i=0; i<steps; i++) {
    updateLogo(x.id);
  }
  if (pick([true,false])) { deleteLogo(x.id); }
  verifyLogoExists(x.id);
  verifyLogoUpdated(x.id);
});

bthread("Logo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLogo(a.id);
  block(matchAddLogo(a.id, ANY), function () {});
  addLogo(b.id);
});

bthread("Markassociatednotificationsread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarkassociatednotificationsread(x.id);
  for (var i=0; i<steps; i++) {
    updateMarkassociatednotificationsread(x.id);
  }
  if (pick([true,false])) { deleteMarkassociatednotificationsread(x.id); }
  verifyMarkassociatednotificationsreadExists(x.id);
  verifyMarkassociatednotificationsreadUpdated(x.id);
});

bthread("Markassociatednotificationsread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMarkassociatednotificationsread(a.id);
  block(matchAddMarkassociatednotificationsread(a.id, ANY), function () {});
  addMarkassociatednotificationsread(b.id);
});

bthread("Markasviewed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarkasviewed(x.id);
  for (var i=0; i<steps; i++) {
    updateMarkasviewed(x.id);
  }
  if (pick([true,false])) { deleteMarkasviewed(x.id); }
  verifyMarkasviewedExists(x.id);
  verifyMarkasviewedUpdated(x.id);
});

bthread("Markasviewed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMarkasviewed(a.id);
  block(matchAddMarkasviewed(a.id, ANY), function () {});
  addMarkasviewed(b.id);
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

bthread("Membercreator nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMembercreator(x.id);
  for (var i=0; i<steps; i++) {
    updateMembercreator(x.id);
  }
  if (pick([true,false])) { deleteMembercreator(x.id); }
  verifyMembercreatorExists(x.id);
  verifyMembercreatorUpdated(x.id);
});

bthread("Membercreator nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMembercreator(a.id);
  block(matchAddMembercreator(a.id, ANY), function () {});
  addMembercreator(b.id);
});

bthread("Membership nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMembership(x.id);
  for (var i=0; i<steps; i++) {
    updateMembership(x.id);
  }
  if (pick([true,false])) { deleteMembership(x.id); }
  verifyMembershipExists(x.id);
  verifyMembershipUpdated(x.id);
});

bthread("Membership nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMembership(a.id);
  block(matchAddMembership(a.id, ANY), function () {});
  addMembership(b.id);
});

bthread("Membersinvited nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMembersinvited(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersinvited(x.id);
  }
  if (pick([true,false])) { deleteMembersinvited(x.id); }
  verifyMembersinvitedExists(x.id);
  verifyMembersinvitedUpdated(x.id);
});

bthread("Membersinvited nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMembersinvited(a.id);
  block(matchAddMembersinvited(a.id, ANY), function () {});
  addMembersinvited(b.id);
});

bthread("Membersvoted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMembersvoted(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersvoted(x.id);
  }
  if (pick([true,false])) { deleteMembersvoted(x.id); }
  verifyMembersvotedExists(x.id);
  verifyMembersvotedUpdated(x.id);
});

bthread("Membersvoted nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMembersvoted(a.id);
  block(matchAddMembersvoted(a.id, ANY), function () {});
  addMembersvoted(b.id);
});

bthread("Minutesbetweensummary nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMinutesbetweensummary(x.id);
  for (var i=0; i<steps; i++) {
    updateMinutesbetweensummary(x.id);
  }
  if (pick([true,false])) { deleteMinutesbetweensummary(x.id); }
  verifyMinutesbetweensummaryExists(x.id);
  verifyMinutesbetweensummaryUpdated(x.id);
});

bthread("Minutesbetweensummary nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMinutesbetweensummary(a.id);
  block(matchAddMinutesbetweensummary(a.id, ANY), function () {});
  addMinutesbetweensummary(b.id);
});

bthread("Moveallcard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMoveallcard(x.id);
  for (var i=0; i<steps; i++) {
    updateMoveallcard(x.id);
  }
  if (pick([true,false])) { deleteMoveallcard(x.id); }
  verifyMoveallcardExists(x.id);
  verifyMoveallcardUpdated(x.id);
});

bthread("Moveallcard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMoveallcard(a.id);
  block(matchAddMoveallcard(a.id, ANY), function () {});
  addMoveallcard(b.id);
});

bthread("Mypref nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMypref(x.id);
  for (var i=0; i<steps; i++) {
    updateMypref(x.id);
  }
  if (pick([true,false])) { deleteMypref(x.id); }
  verifyMyprefExists(x.id);
  verifyMyprefUpdated(x.id);
});

bthread("Mypref nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMypref(a.id);
  block(matchAddMypref(a.id, ANY), function () {});
  addMypref(b.id);
});

bthread("Name nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addName(x.id);
  for (var i=0; i<steps; i++) {
    updateName(x.id);
  }
  if (pick([true,false])) { deleteName(x.id); }
  verifyNameExists(x.id);
  verifyNameUpdated(x.id);
});

bthread("Name nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addName(a.id);
  block(matchAddName(a.id, ANY), function () {});
  addName(b.id);
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

bthread("Onetimemessagesdismissed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOnetimemessagesdismissed(x.id);
  for (var i=0; i<steps; i++) {
    updateOnetimemessagesdismissed(x.id);
  }
  if (pick([true,false])) { deleteOnetimemessagesdismissed(x.id); }
  verifyOnetimemessagesdismissedExists(x.id);
  verifyOnetimemessagesdismissedUpdated(x.id);
});

bthread("Onetimemessagesdismissed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOnetimemessagesdismissed(a.id);
  block(matchAddOnetimemessagesdismissed(a.id, ANY), function () {});
  addOnetimemessagesdismissed(b.id);
});

bthread("Orange nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrange(x.id);
  for (var i=0; i<steps; i++) {
    updateOrange(x.id);
  }
  if (pick([true,false])) { deleteOrange(x.id); }
  verifyOrangeExists(x.id);
  verifyOrangeUpdated(x.id);
});

bthread("Orange nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrange(a.id);
  block(matchAddOrange(a.id, ANY), function () {});
  addOrange(b.id);
});

bthread("Org nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrg(x.id);
  for (var i=0; i<steps; i++) {
    updateOrg(x.id);
  }
  if (pick([true,false])) { deleteOrg(x.id); }
  verifyOrgExists(x.id);
  verifyOrgUpdated(x.id);
});

bthread("Org nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrg(a.id);
  block(matchAddOrg(a.id, ANY), function () {});
  addOrg(b.id);
});

bthread("Organization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrganization(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganization(x.id);
  }
  if (pick([true,false])) { deleteOrganization(x.id); }
  verifyOrganizationExists(x.id);
  verifyOrganizationUpdated(x.id);
});

bthread("Organization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrganization(a.id);
  block(matchAddOrganization(a.id, ANY), function () {});
  addOrganization(b.id);
});

bthread("Organizationsinvited nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrganizationsinvited(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsinvited(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsinvited(x.id); }
  verifyOrganizationsinvitedExists(x.id);
  verifyOrganizationsinvitedUpdated(x.id);
});

bthread("Organizationsinvited nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrganizationsinvited(a.id);
  block(matchAddOrganizationsinvited(a.id, ANY), function () {});
  addOrganizationsinvited(b.id);
});

bthread("Orginviterestrict nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrginviterestrict(x.id);
  for (var i=0; i<steps; i++) {
    updateOrginviterestrict(x.id);
  }
  if (pick([true,false])) { deleteOrginviterestrict(x.id); }
  verifyOrginviterestrictExists(x.id);
  verifyOrginviterestrictUpdated(x.id);
});

bthread("Orginviterestrict nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrginviterestrict(a.id);
  block(matchAddOrginviterestrict(a.id, ANY), function () {});
  addOrginviterestrict(b.id);
});

bthread("Permissionlevel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPermissionlevel(x.id);
  for (var i=0; i<steps; i++) {
    updatePermissionlevel(x.id);
  }
  if (pick([true,false])) { deletePermissionlevel(x.id); }
  verifyPermissionlevelExists(x.id);
  verifyPermissionlevelUpdated(x.id);
});

bthread("Permissionlevel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPermissionlevel(a.id);
  block(matchAddPermissionlevel(a.id, ANY), function () {});
  addPermissionlevel(b.id);
});

bthread("Po nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPo(x.id);
  for (var i=0; i<steps; i++) {
    updatePo(x.id);
  }
  if (pick([true,false])) { deletePo(x.id); }
  verifyPoExists(x.id);
  verifyPoUpdated(x.id);
});

bthread("Po nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPo(a.id);
  block(matchAddPo(a.id, ANY), function () {});
  addPo(b.id);
});

bthread("Powerup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPowerup(x.id);
  for (var i=0; i<steps; i++) {
    updatePowerup(x.id);
  }
  if (pick([true,false])) { deletePowerup(x.id); }
  verifyPowerupExists(x.id);
  verifyPowerupUpdated(x.id);
});

bthread("Powerup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPowerup(a.id);
  block(matchAddPowerup(a.id, ANY), function () {});
  addPowerup(b.id);
});

bthread("Pref nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPref(x.id);
  for (var i=0; i<steps; i++) {
    updatePref(x.id);
  }
  if (pick([true,false])) { deletePref(x.id); }
  verifyPrefExists(x.id);
  verifyPrefUpdated(x.id);
});

bthread("Pref nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPref(a.id);
  block(matchAddPref(a.id, ANY), function () {});
  addPref(b.id);
});

bthread("Private nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPrivate(x.id);
  for (var i=0; i<steps; i++) {
    updatePrivate(x.id);
  }
  if (pick([true,false])) { deletePrivate(x.id); }
  verifyPrivateExists(x.id);
  verifyPrivateUpdated(x.id);
});

bthread("Private nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPrivate(a.id);
  block(matchAddPrivate(a.id, ANY), function () {});
  addPrivate(b.id);
});

bthread("Public nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPublic(x.id);
  for (var i=0; i<steps; i++) {
    updatePublic(x.id);
  }
  if (pick([true,false])) { deletePublic(x.id); }
  verifyPublicExists(x.id);
  verifyPublicUpdated(x.id);
});

bthread("Public nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPublic(a.id);
  block(matchAddPublic(a.id, ANY), function () {});
  addPublic(b.id);
});

bthread("Purple nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPurple(x.id);
  for (var i=0; i<steps; i++) {
    updatePurple(x.id);
  }
  if (pick([true,false])) { deletePurple(x.id); }
  verifyPurpleExists(x.id);
  verifyPurpleUpdated(x.id);
});

bthread("Purple nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPurple(a.id);
  block(matchAddPurple(a.id, ANY), function () {});
  addPurple(b.id);
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

bthread("Red nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRed(x.id);
  for (var i=0; i<steps; i++) {
    updateRed(x.id);
  }
  if (pick([true,false])) { deleteRed(x.id); }
  verifyRedExists(x.id);
  verifyRedUpdated(x.id);
});

bthread("Red nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRed(a.id);
  block(matchAddRed(a.id, ANY), function () {});
  addRed(b.id);
});

bthread("Savedsearche nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSavedsearche(x.id);
  for (var i=0; i<steps; i++) {
    updateSavedsearche(x.id);
  }
  if (pick([true,false])) { deleteSavedsearche(x.id); }
  verifySavedsearcheExists(x.id);
  verifySavedsearcheUpdated(x.id);
});

bthread("Savedsearche nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSavedsearche(a.id);
  block(matchAddSavedsearche(a.id, ANY), function () {});
  addSavedsearche(b.id);
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

bthread("Selfjoin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSelfjoin(x.id);
  for (var i=0; i<steps; i++) {
    updateSelfjoin(x.id);
  }
  if (pick([true,false])) { deleteSelfjoin(x.id); }
  verifySelfjoinExists(x.id);
  verifySelfjoinUpdated(x.id);
});

bthread("Selfjoin nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSelfjoin(a.id);
  block(matchAddSelfjoin(a.id, ANY), function () {});
  addSelfjoin(b.id);
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSession(a.id);
  block(matchAddSession(a.id, ANY), function () {});
  addSession(b.id);
});

bthread("Showlistguide nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShowlistguide(x.id);
  for (var i=0; i<steps; i++) {
    updateShowlistguide(x.id);
  }
  if (pick([true,false])) { deleteShowlistguide(x.id); }
  verifyShowlistguideExists(x.id);
  verifyShowlistguideUpdated(x.id);
});

bthread("Showlistguide nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addShowlistguide(a.id);
  block(matchAddShowlistguide(a.id, ANY), function () {});
  addShowlistguide(b.id);
});

bthread("Showsidebar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShowsidebar(x.id);
  for (var i=0; i<steps; i++) {
    updateShowsidebar(x.id);
  }
  if (pick([true,false])) { deleteShowsidebar(x.id); }
  verifyShowsidebarExists(x.id);
  verifyShowsidebarUpdated(x.id);
});

bthread("Showsidebar nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addShowsidebar(a.id);
  block(matchAddShowsidebar(a.id, ANY), function () {});
  addShowsidebar(b.id);
});

bthread("Showsidebaractivity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShowsidebaractivity(x.id);
  for (var i=0; i<steps; i++) {
    updateShowsidebaractivity(x.id);
  }
  if (pick([true,false])) { deleteShowsidebaractivity(x.id); }
  verifyShowsidebaractivityExists(x.id);
  verifyShowsidebaractivityUpdated(x.id);
});

bthread("Showsidebaractivity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addShowsidebaractivity(a.id);
  block(matchAddShowsidebaractivity(a.id, ANY), function () {});
  addShowsidebaractivity(b.id);
});

bthread("Showsidebarboardaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShowsidebarboardaction(x.id);
  for (var i=0; i<steps; i++) {
    updateShowsidebarboardaction(x.id);
  }
  if (pick([true,false])) { deleteShowsidebarboardaction(x.id); }
  verifyShowsidebarboardactionExists(x.id);
  verifyShowsidebarboardactionUpdated(x.id);
});

bthread("Showsidebarboardaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addShowsidebarboardaction(a.id);
  block(matchAddShowsidebarboardaction(a.id, ANY), function () {});
  addShowsidebarboardaction(b.id);
});

bthread("Showsidebarmember nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addShowsidebarmember(x.id);
  for (var i=0; i<steps; i++) {
    updateShowsidebarmember(x.id);
  }
  if (pick([true,false])) { deleteShowsidebarmember(x.id); }
  verifyShowsidebarmemberExists(x.id);
  verifyShowsidebarmemberUpdated(x.id);
});

bthread("Showsidebarmember nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addShowsidebarmember(a.id);
  block(matchAddShowsidebarmember(a.id, ANY), function () {});
  addShowsidebarmember(b.id);
});

bthread("Socket nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSocket(x.id);
  for (var i=0; i<steps; i++) {
    updateSocket(x.id);
  }
  if (pick([true,false])) { deleteSocket(x.id); }
  verifySocketExists(x.id);
  verifySocketUpdated(x.id);
});

bthread("Socket nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSocket(a.id);
  block(matchAddSocket(a.id, ANY), function () {});
  addSocket(b.id);
});

bthread("State nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addState(x.id);
  for (var i=0; i<steps; i++) {
    updateState(x.id);
  }
  if (pick([true,false])) { deleteState(x.id); }
  verifyStateExists(x.id);
  verifyStateUpdated(x.id);
});

bthread("State nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addState(a.id);
  block(matchAddState(a.id, ANY), function () {});
  addState(b.id);
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

bthread("Sticker nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSticker(x.id);
  for (var i=0; i<steps; i++) {
    updateSticker(x.id);
  }
  if (pick([true,false])) { deleteSticker(x.id); }
  verifyStickerExists(x.id);
  verifyStickerUpdated(x.id);
});

bthread("Sticker nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSticker(a.id);
  block(matchAddSticker(a.id, ANY), function () {});
  addSticker(b.id);
});

bthread("Subscribed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubscribed(x.id);
  for (var i=0; i<steps; i++) {
    updateSubscribed(x.id);
  }
  if (pick([true,false])) { deleteSubscribed(x.id); }
  verifySubscribedExists(x.id);
  verifySubscribedUpdated(x.id);
});

bthread("Subscribed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSubscribed(a.id);
  block(matchAddSubscribed(a.id, ANY), function () {});
  addSubscribed(b.id);
});

bthread("Text nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addText(x.id);
  for (var i=0; i<steps; i++) {
    updateText(x.id);
  }
  if (pick([true,false])) { deleteText(x.id); }
  verifyTextExists(x.id);
  verifyTextUpdated(x.id);
});

bthread("Text nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addText(a.id);
  block(matchAddText(a.id, ANY), function () {});
  addText(b.id);
});

bthread("Token nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addToken(x.id);
  for (var i=0; i<steps; i++) {
    updateToken(x.id);
  }
  if (pick([true,false])) { deleteToken(x.id); }
  verifyTokenExists(x.id);
  verifyTokenUpdated(x.id);
});

bthread("Token nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addToken(a.id);
  block(matchAddToken(a.id, ANY), function () {});
  addToken(b.id);
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

bthread("Unread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUnread(x.id);
  for (var i=0; i<steps; i++) {
    updateUnread(x.id);
  }
  if (pick([true,false])) { deleteUnread(x.id); }
  verifyUnreadExists(x.id);
  verifyUnreadUpdated(x.id);
});

bthread("Unread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUnread(a.id);
  block(matchAddUnread(a.id, ANY), function () {});
  addUnread(b.id);
});

bthread("Username nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUsername(x.id);
  for (var i=0; i<steps; i++) {
    updateUsername(x.id);
  }
  if (pick([true,false])) { deleteUsername(x.id); }
  verifyUsernameExists(x.id);
  verifyUsernameUpdated(x.id);
});

bthread("Username nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUsername(a.id);
  block(matchAddUsername(a.id, ANY), function () {});
  addUsername(b.id);
});

bthread("Voting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVoting(x.id);
  for (var i=0; i<steps; i++) {
    updateVoting(x.id);
  }
  if (pick([true,false])) { deleteVoting(x.id); }
  verifyVotingExists(x.id);
  verifyVotingUpdated(x.id);
});

bthread("Voting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVoting(a.id);
  block(matchAddVoting(a.id, ANY), function () {});
  addVoting(b.id);
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

bthread("Website nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addWebsite(x.id);
  for (var i=0; i<steps; i++) {
    updateWebsite(x.id);
  }
  if (pick([true,false])) { deleteWebsite(x.id); }
  verifyWebsiteExists(x.id);
  verifyWebsiteUpdated(x.id);
});

bthread("Website nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWebsite(a.id);
  block(matchAddWebsite(a.id, ANY), function () {});
  addWebsite(b.id);
});

bthread("Yellow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addYellow(x.id);
  for (var i=0; i<steps; i++) {
    updateYellow(x.id);
  }
  if (pick([true,false])) { deleteYellow(x.id); }
  verifyYellowExists(x.id);
  verifyYellowUpdated(x.id);
});

bthread("Yellow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'Y' + ids[0] };
  const b = { id: 'Y' + ids[1] };
  addYellow(a.id);
  block(matchAddYellow(a.id, ANY), function () {});
  addYellow(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Action create verification", function () {
  const e = waitForAnyActionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAction(k, ANY), function () {
    verifyActionExists(k);
  });
});

bthread("Action update verification", function () {
  const e = waitForAnyActionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAction(k, ANY), function () {
    verifyActionUpdated(k);
  });
});

bthread("Action delete verification", function () {
  const e = waitForAnyActionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAction(k, ANY), function () {
    verifyActionDoesNotExist(k);
  });
});

bthread("Active create verification", function () {
  const e = waitForAnyActiveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActive(k, ANY), function () {
    verifyActiveExists(k);
  });
});

bthread("Active update verification", function () {
  const e = waitForAnyActiveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActive(k, ANY), function () {
    verifyActiveUpdated(k);
  });
});

bthread("Active delete verification", function () {
  const e = waitForAnyActiveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddActive(k, ANY), function () {
    verifyActiveDoesNotExist(k);
  });
});

bthread("All create verification", function () {
  const e = waitForAnyAllAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAll(k, ANY), function () {
    verifyAllExists(k);
  });
});

bthread("All update verification", function () {
  const e = waitForAnyAllUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAll(k, ANY), function () {
    verifyAllUpdated(k);
  });
});

bthread("All delete verification", function () {
  const e = waitForAnyAllDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAll(k, ANY), function () {
    verifyAllDoesNotExist(k);
  });
});

bthread("Archiveallcard create verification", function () {
  const e = waitForAnyArchiveallcardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArchiveallcard(k, ANY), function () {
    verifyArchiveallcardExists(k);
  });
});

bthread("Archiveallcard update verification", function () {
  const e = waitForAnyArchiveallcardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArchiveallcard(k, ANY), function () {
    verifyArchiveallcardUpdated(k);
  });
});

bthread("Archiveallcard delete verification", function () {
  const e = waitForAnyArchiveallcardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddArchiveallcard(k, ANY), function () {
    verifyArchiveallcardDoesNotExist(k);
  });
});

bthread("Associateddomain create verification", function () {
  const e = waitForAnyAssociateddomainAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssociateddomain(k, ANY), function () {
    verifyAssociateddomainExists(k);
  });
});

bthread("Associateddomain update verification", function () {
  const e = waitForAnyAssociateddomainUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssociateddomain(k, ANY), function () {
    verifyAssociateddomainUpdated(k);
  });
});

bthread("Associateddomain delete verification", function () {
  const e = waitForAnyAssociateddomainDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssociateddomain(k, ANY), function () {
    verifyAssociateddomainDoesNotExist(k);
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

bthread("Avatarsource create verification", function () {
  const e = waitForAnyAvatarsourceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatarsource(k, ANY), function () {
    verifyAvatarsourceExists(k);
  });
});

bthread("Avatarsource update verification", function () {
  const e = waitForAnyAvatarsourceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatarsource(k, ANY), function () {
    verifyAvatarsourceUpdated(k);
  });
});

bthread("Avatarsource delete verification", function () {
  const e = waitForAnyAvatarsourceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvatarsource(k, ANY), function () {
    verifyAvatarsourceDoesNotExist(k);
  });
});

bthread("Background create verification", function () {
  const e = waitForAnyBackgroundAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackground(k, ANY), function () {
    verifyBackgroundExists(k);
  });
});

bthread("Background update verification", function () {
  const e = waitForAnyBackgroundUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBackground(k, ANY), function () {
    verifyBackgroundUpdated(k);
  });
});

bthread("Background delete verification", function () {
  const e = waitForAnyBackgroundDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBackground(k, ANY), function () {
    verifyBackgroundDoesNotExist(k);
  });
});

bthread("Batch create verification", function () {
  const e = waitForAnyBatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBatch(k, ANY), function () {
    verifyBatchExists(k);
  });
});

bthread("Batch update verification", function () {
  const e = waitForAnyBatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBatch(k, ANY), function () {
    verifyBatchUpdated(k);
  });
});

bthread("Batch delete verification", function () {
  const e = waitForAnyBatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBatch(k, ANY), function () {
    verifyBatchDoesNotExist(k);
  });
});

bthread("Bio create verification", function () {
  const e = waitForAnyBioAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBio(k, ANY), function () {
    verifyBioExists(k);
  });
});

bthread("Bio update verification", function () {
  const e = waitForAnyBioUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBio(k, ANY), function () {
    verifyBioUpdated(k);
  });
});

bthread("Bio delete verification", function () {
  const e = waitForAnyBioDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBio(k, ANY), function () {
    verifyBioDoesNotExist(k);
  });
});

bthread("Blue create verification", function () {
  const e = waitForAnyBlueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlue(k, ANY), function () {
    verifyBlueExists(k);
  });
});

bthread("Blue update verification", function () {
  const e = waitForAnyBlueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlue(k, ANY), function () {
    verifyBlueUpdated(k);
  });
});

bthread("Blue delete verification", function () {
  const e = waitForAnyBlueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBlue(k, ANY), function () {
    verifyBlueDoesNotExist(k);
  });
});

bthread("Board create verification", function () {
  const e = waitForAnyBoardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoard(k, ANY), function () {
    verifyBoardExists(k);
  });
});

bthread("Board update verification", function () {
  const e = waitForAnyBoardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoard(k, ANY), function () {
    verifyBoardUpdated(k);
  });
});

bthread("Board delete verification", function () {
  const e = waitForAnyBoardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBoard(k, ANY), function () {
    verifyBoardDoesNotExist(k);
  });
});

bthread("Boardbackground create verification", function () {
  const e = waitForAnyBoardbackgroundAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardbackground(k, ANY), function () {
    verifyBoardbackgroundExists(k);
  });
});

bthread("Boardbackground update verification", function () {
  const e = waitForAnyBoardbackgroundUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardbackground(k, ANY), function () {
    verifyBoardbackgroundUpdated(k);
  });
});

bthread("Boardbackground delete verification", function () {
  const e = waitForAnyBoardbackgroundDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBoardbackground(k, ANY), function () {
    verifyBoardbackgroundDoesNotExist(k);
  });
});

bthread("Boardsinvited create verification", function () {
  const e = waitForAnyBoardsinvitedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardsinvited(k, ANY), function () {
    verifyBoardsinvitedExists(k);
  });
});

bthread("Boardsinvited update verification", function () {
  const e = waitForAnyBoardsinvitedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardsinvited(k, ANY), function () {
    verifyBoardsinvitedUpdated(k);
  });
});

bthread("Boardsinvited delete verification", function () {
  const e = waitForAnyBoardsinvitedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBoardsinvited(k, ANY), function () {
    verifyBoardsinvitedDoesNotExist(k);
  });
});

bthread("Boardstar create verification", function () {
  const e = waitForAnyBoardstarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardstar(k, ANY), function () {
    verifyBoardstarExists(k);
  });
});

bthread("Boardstar update verification", function () {
  const e = waitForAnyBoardstarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardstar(k, ANY), function () {
    verifyBoardstarUpdated(k);
  });
});

bthread("Boardstar delete verification", function () {
  const e = waitForAnyBoardstarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBoardstar(k, ANY), function () {
    verifyBoardstarDoesNotExist(k);
  });
});

bthread("Boardvisibilityrestrict create verification", function () {
  const e = waitForAnyBoardvisibilityrestrictAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardvisibilityrestrict(k, ANY), function () {
    verifyBoardvisibilityrestrictExists(k);
  });
});

bthread("Boardvisibilityrestrict update verification", function () {
  const e = waitForAnyBoardvisibilityrestrictUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBoardvisibilityrestrict(k, ANY), function () {
    verifyBoardvisibilityrestrictUpdated(k);
  });
});

bthread("Boardvisibilityrestrict delete verification", function () {
  const e = waitForAnyBoardvisibilityrestrictDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBoardvisibilityrestrict(k, ANY), function () {
    verifyBoardvisibilityrestrictDoesNotExist(k);
  });
});

bthread("Calendarfeedenabled create verification", function () {
  const e = waitForAnyCalendarfeedenabledAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCalendarfeedenabled(k, ANY), function () {
    verifyCalendarfeedenabledExists(k);
  });
});

bthread("Calendarfeedenabled update verification", function () {
  const e = waitForAnyCalendarfeedenabledUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCalendarfeedenabled(k, ANY), function () {
    verifyCalendarfeedenabledUpdated(k);
  });
});

bthread("Calendarfeedenabled delete verification", function () {
  const e = waitForAnyCalendarfeedenabledDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCalendarfeedenabled(k, ANY), function () {
    verifyCalendarfeedenabledDoesNotExist(k);
  });
});

bthread("Calendarkey create verification", function () {
  const e = waitForAnyCalendarkeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCalendarkey(k, ANY), function () {
    verifyCalendarkeyExists(k);
  });
});

bthread("Calendarkey update verification", function () {
  const e = waitForAnyCalendarkeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCalendarkey(k, ANY), function () {
    verifyCalendarkeyUpdated(k);
  });
});

bthread("Calendarkey delete verification", function () {
  const e = waitForAnyCalendarkeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCalendarkey(k, ANY), function () {
    verifyCalendarkeyDoesNotExist(k);
  });
});

bthread("Callbackurl create verification", function () {
  const e = waitForAnyCallbackurlAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCallbackurl(k, ANY), function () {
    verifyCallbackurlExists(k);
  });
});

bthread("Callbackurl update verification", function () {
  const e = waitForAnyCallbackurlUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCallbackurl(k, ANY), function () {
    verifyCallbackurlUpdated(k);
  });
});

bthread("Callbackurl delete verification", function () {
  const e = waitForAnyCallbackurlDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCallbackurl(k, ANY), function () {
    verifyCallbackurlDoesNotExist(k);
  });
});

bthread("Card create verification", function () {
  const e = waitForAnyCardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCard(k, ANY), function () {
    verifyCardExists(k);
  });
});

bthread("Card update verification", function () {
  const e = waitForAnyCardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCard(k, ANY), function () {
    verifyCardUpdated(k);
  });
});

bthread("Card delete verification", function () {
  const e = waitForAnyCardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCard(k, ANY), function () {
    verifyCardDoesNotExist(k);
  });
});

bthread("Cardaging create verification", function () {
  const e = waitForAnyCardagingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCardaging(k, ANY), function () {
    verifyCardagingExists(k);
  });
});

bthread("Cardaging update verification", function () {
  const e = waitForAnyCardagingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCardaging(k, ANY), function () {
    verifyCardagingUpdated(k);
  });
});

bthread("Cardaging delete verification", function () {
  const e = waitForAnyCardagingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCardaging(k, ANY), function () {
    verifyCardagingDoesNotExist(k);
  });
});

bthread("Cardcover create verification", function () {
  const e = waitForAnyCardcoverAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCardcover(k, ANY), function () {
    verifyCardcoverExists(k);
  });
});

bthread("Cardcover update verification", function () {
  const e = waitForAnyCardcoverUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCardcover(k, ANY), function () {
    verifyCardcoverUpdated(k);
  });
});

bthread("Cardcover delete verification", function () {
  const e = waitForAnyCardcoverDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCardcover(k, ANY), function () {
    verifyCardcoverDoesNotExist(k);
  });
});

bthread("Checkitem create verification", function () {
  const e = waitForAnyCheckitemAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheckitem(k, ANY), function () {
    verifyCheckitemExists(k);
  });
});

bthread("Checkitem update verification", function () {
  const e = waitForAnyCheckitemUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheckitem(k, ANY), function () {
    verifyCheckitemUpdated(k);
  });
});

bthread("Checkitem delete verification", function () {
  const e = waitForAnyCheckitemDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCheckitem(k, ANY), function () {
    verifyCheckitemDoesNotExist(k);
  });
});

bthread("Checkitemstate create verification", function () {
  const e = waitForAnyCheckitemstateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheckitemstate(k, ANY), function () {
    verifyCheckitemstateExists(k);
  });
});

bthread("Checkitemstate update verification", function () {
  const e = waitForAnyCheckitemstateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheckitemstate(k, ANY), function () {
    verifyCheckitemstateUpdated(k);
  });
});

bthread("Checkitemstate delete verification", function () {
  const e = waitForAnyCheckitemstateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCheckitemstate(k, ANY), function () {
    verifyCheckitemstateDoesNotExist(k);
  });
});

bthread("Checklist create verification", function () {
  const e = waitForAnyChecklistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChecklist(k, ANY), function () {
    verifyChecklistExists(k);
  });
});

bthread("Checklist update verification", function () {
  const e = waitForAnyChecklistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChecklist(k, ANY), function () {
    verifyChecklistUpdated(k);
  });
});

bthread("Checklist delete verification", function () {
  const e = waitForAnyChecklistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChecklist(k, ANY), function () {
    verifyChecklistDoesNotExist(k);
  });
});

bthread("Closed create verification", function () {
  const e = waitForAnyClosedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClosed(k, ANY), function () {
    verifyClosedExists(k);
  });
});

bthread("Closed update verification", function () {
  const e = waitForAnyClosedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClosed(k, ANY), function () {
    verifyClosedUpdated(k);
  });
});

bthread("Closed delete verification", function () {
  const e = waitForAnyClosedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClosed(k, ANY), function () {
    verifyClosedDoesNotExist(k);
  });
});

bthread("Color create verification", function () {
  const e = waitForAnyColorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColor(k, ANY), function () {
    verifyColorExists(k);
  });
});

bthread("Color update verification", function () {
  const e = waitForAnyColorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColor(k, ANY), function () {
    verifyColorUpdated(k);
  });
});

bthread("Color delete verification", function () {
  const e = waitForAnyColorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddColor(k, ANY), function () {
    verifyColorDoesNotExist(k);
  });
});

bthread("Colorblind create verification", function () {
  const e = waitForAnyColorblindAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColorblind(k, ANY), function () {
    verifyColorblindExists(k);
  });
});

bthread("Colorblind update verification", function () {
  const e = waitForAnyColorblindUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColorblind(k, ANY), function () {
    verifyColorblindUpdated(k);
  });
});

bthread("Colorblind delete verification", function () {
  const e = waitForAnyColorblindDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddColorblind(k, ANY), function () {
    verifyColorblindDoesNotExist(k);
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

bthread("Converttocard create verification", function () {
  const e = waitForAnyConverttocardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConverttocard(k, ANY), function () {
    verifyConverttocardExists(k);
  });
});

bthread("Converttocard update verification", function () {
  const e = waitForAnyConverttocardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConverttocard(k, ANY), function () {
    verifyConverttocardUpdated(k);
  });
});

bthread("Converttocard delete verification", function () {
  const e = waitForAnyConverttocardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConverttocard(k, ANY), function () {
    verifyConverttocardDoesNotExist(k);
  });
});

bthread("Customboardbackground create verification", function () {
  const e = waitForAnyCustomboardbackgroundAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomboardbackground(k, ANY), function () {
    verifyCustomboardbackgroundExists(k);
  });
});

bthread("Customboardbackground update verification", function () {
  const e = waitForAnyCustomboardbackgroundUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomboardbackground(k, ANY), function () {
    verifyCustomboardbackgroundUpdated(k);
  });
});

bthread("Customboardbackground delete verification", function () {
  const e = waitForAnyCustomboardbackgroundDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomboardbackground(k, ANY), function () {
    verifyCustomboardbackgroundDoesNotExist(k);
  });
});

bthread("Customemoji create verification", function () {
  const e = waitForAnyCustomemojiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomemoji(k, ANY), function () {
    verifyCustomemojiExists(k);
  });
});

bthread("Customemoji update verification", function () {
  const e = waitForAnyCustomemojiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomemoji(k, ANY), function () {
    verifyCustomemojiUpdated(k);
  });
});

bthread("Customemoji delete verification", function () {
  const e = waitForAnyCustomemojiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomemoji(k, ANY), function () {
    verifyCustomemojiDoesNotExist(k);
  });
});

bthread("Customsticker create verification", function () {
  const e = waitForAnyCustomstickerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomsticker(k, ANY), function () {
    verifyCustomstickerExists(k);
  });
});

bthread("Customsticker update verification", function () {
  const e = waitForAnyCustomstickerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomsticker(k, ANY), function () {
    verifyCustomstickerUpdated(k);
  });
});

bthread("Customsticker delete verification", function () {
  const e = waitForAnyCustomstickerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomsticker(k, ANY), function () {
    verifyCustomstickerDoesNotExist(k);
  });
});

bthread("Deactivated create verification", function () {
  const e = waitForAnyDeactivatedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeactivated(k, ANY), function () {
    verifyDeactivatedExists(k);
  });
});

bthread("Deactivated update verification", function () {
  const e = waitForAnyDeactivatedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeactivated(k, ANY), function () {
    verifyDeactivatedUpdated(k);
  });
});

bthread("Deactivated delete verification", function () {
  const e = waitForAnyDeactivatedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeactivated(k, ANY), function () {
    verifyDeactivatedDoesNotExist(k);
  });
});

bthread("Delta create verification", function () {
  const e = waitForAnyDeltaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelta(k, ANY), function () {
    verifyDeltaExists(k);
  });
});

bthread("Delta update verification", function () {
  const e = waitForAnyDeltaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelta(k, ANY), function () {
    verifyDeltaUpdated(k);
  });
});

bthread("Delta delete verification", function () {
  const e = waitForAnyDeltaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDelta(k, ANY), function () {
    verifyDeltaDoesNotExist(k);
  });
});

bthread("Desc create verification", function () {
  const e = waitForAnyDescAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDesc(k, ANY), function () {
    verifyDescExists(k);
  });
});

bthread("Desc update verification", function () {
  const e = waitForAnyDescUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDesc(k, ANY), function () {
    verifyDescUpdated(k);
  });
});

bthread("Desc delete verification", function () {
  const e = waitForAnyDescDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDesc(k, ANY), function () {
    verifyDescDoesNotExist(k);
  });
});

bthread("Description create verification", function () {
  const e = waitForAnyDescriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDescription(k, ANY), function () {
    verifyDescriptionExists(k);
  });
});

bthread("Description update verification", function () {
  const e = waitForAnyDescriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDescription(k, ANY), function () {
    verifyDescriptionUpdated(k);
  });
});

bthread("Description delete verification", function () {
  const e = waitForAnyDescriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDescription(k, ANY), function () {
    verifyDescriptionDoesNotExist(k);
  });
});

bthread("Display create verification", function () {
  const e = waitForAnyDisplayAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisplay(k, ANY), function () {
    verifyDisplayExists(k);
  });
});

bthread("Display update verification", function () {
  const e = waitForAnyDisplayUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisplay(k, ANY), function () {
    verifyDisplayUpdated(k);
  });
});

bthread("Display delete verification", function () {
  const e = waitForAnyDisplayDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDisplay(k, ANY), function () {
    verifyDisplayDoesNotExist(k);
  });
});

bthread("Displayname create verification", function () {
  const e = waitForAnyDisplaynameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisplayname(k, ANY), function () {
    verifyDisplaynameExists(k);
  });
});

bthread("Displayname update verification", function () {
  const e = waitForAnyDisplaynameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisplayname(k, ANY), function () {
    verifyDisplaynameUpdated(k);
  });
});

bthread("Displayname delete verification", function () {
  const e = waitForAnyDisplaynameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDisplayname(k, ANY), function () {
    verifyDisplaynameDoesNotExist(k);
  });
});

bthread("Due create verification", function () {
  const e = waitForAnyDueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDue(k, ANY), function () {
    verifyDueExists(k);
  });
});

bthread("Due update verification", function () {
  const e = waitForAnyDueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDue(k, ANY), function () {
    verifyDueUpdated(k);
  });
});

bthread("Due delete verification", function () {
  const e = waitForAnyDueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDue(k, ANY), function () {
    verifyDueDoesNotExist(k);
  });
});

bthread("Emailkey create verification", function () {
  const e = waitForAnyEmailkeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmailkey(k, ANY), function () {
    verifyEmailkeyExists(k);
  });
});

bthread("Emailkey update verification", function () {
  const e = waitForAnyEmailkeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmailkey(k, ANY), function () {
    verifyEmailkeyUpdated(k);
  });
});

bthread("Emailkey delete verification", function () {
  const e = waitForAnyEmailkeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmailkey(k, ANY), function () {
    verifyEmailkeyDoesNotExist(k);
  });
});

bthread("Emailposition create verification", function () {
  const e = waitForAnyEmailpositionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmailposition(k, ANY), function () {
    verifyEmailpositionExists(k);
  });
});

bthread("Emailposition update verification", function () {
  const e = waitForAnyEmailpositionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmailposition(k, ANY), function () {
    verifyEmailpositionUpdated(k);
  });
});

bthread("Emailposition delete verification", function () {
  const e = waitForAnyEmailpositionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmailposition(k, ANY), function () {
    verifyEmailpositionDoesNotExist(k);
  });
});

bthread("Entity create verification", function () {
  const e = waitForAnyEntityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEntity(k, ANY), function () {
    verifyEntityExists(k);
  });
});

bthread("Entity update verification", function () {
  const e = waitForAnyEntityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEntity(k, ANY), function () {
    verifyEntityUpdated(k);
  });
});

bthread("Entity delete verification", function () {
  const e = waitForAnyEntityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEntity(k, ANY), function () {
    verifyEntityDoesNotExist(k);
  });
});

bthread("Externalmembersdisabled create verification", function () {
  const e = waitForAnyExternalmembersdisabledAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExternalmembersdisabled(k, ANY), function () {
    verifyExternalmembersdisabledExists(k);
  });
});

bthread("Externalmembersdisabled update verification", function () {
  const e = waitForAnyExternalmembersdisabledUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExternalmembersdisabled(k, ANY), function () {
    verifyExternalmembersdisabledUpdated(k);
  });
});

bthread("Externalmembersdisabled delete verification", function () {
  const e = waitForAnyExternalmembersdisabledDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExternalmembersdisabled(k, ANY), function () {
    verifyExternalmembersdisabledDoesNotExist(k);
  });
});

bthread("Fullname create verification", function () {
  const e = waitForAnyFullnameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFullname(k, ANY), function () {
    verifyFullnameExists(k);
  });
});

bthread("Fullname update verification", function () {
  const e = waitForAnyFullnameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFullname(k, ANY), function () {
    verifyFullnameUpdated(k);
  });
});

bthread("Fullname delete verification", function () {
  const e = waitForAnyFullnameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFullname(k, ANY), function () {
    verifyFullnameDoesNotExist(k);
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

bthread("Googleappsversion create verification", function () {
  const e = waitForAnyGoogleappsversionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGoogleappsversion(k, ANY), function () {
    verifyGoogleappsversionExists(k);
  });
});

bthread("Googleappsversion update verification", function () {
  const e = waitForAnyGoogleappsversionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGoogleappsversion(k, ANY), function () {
    verifyGoogleappsversionUpdated(k);
  });
});

bthread("Googleappsversion delete verification", function () {
  const e = waitForAnyGoogleappsversionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGoogleappsversion(k, ANY), function () {
    verifyGoogleappsversionDoesNotExist(k);
  });
});

bthread("Green create verification", function () {
  const e = waitForAnyGreenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGreen(k, ANY), function () {
    verifyGreenExists(k);
  });
});

bthread("Green update verification", function () {
  const e = waitForAnyGreenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGreen(k, ANY), function () {
    verifyGreenUpdated(k);
  });
});

bthread("Green delete verification", function () {
  const e = waitForAnyGreenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGreen(k, ANY), function () {
    verifyGreenDoesNotExist(k);
  });
});

bthread("Idattachmentcover create verification", function () {
  const e = waitForAnyIdattachmentcoverAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdattachmentcover(k, ANY), function () {
    verifyIdattachmentcoverExists(k);
  });
});

bthread("Idattachmentcover update verification", function () {
  const e = waitForAnyIdattachmentcoverUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdattachmentcover(k, ANY), function () {
    verifyIdattachmentcoverUpdated(k);
  });
});

bthread("Idattachmentcover delete verification", function () {
  const e = waitForAnyIdattachmentcoverDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdattachmentcover(k, ANY), function () {
    verifyIdattachmentcoverDoesNotExist(k);
  });
});

bthread("Idboard create verification", function () {
  const e = waitForAnyIdboardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdboard(k, ANY), function () {
    verifyIdboardExists(k);
  });
});

bthread("Idboard update verification", function () {
  const e = waitForAnyIdboardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdboard(k, ANY), function () {
    verifyIdboardUpdated(k);
  });
});

bthread("Idboard delete verification", function () {
  const e = waitForAnyIdboardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdboard(k, ANY), function () {
    verifyIdboardDoesNotExist(k);
  });
});

bthread("Idcard create verification", function () {
  const e = waitForAnyIdcardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdcard(k, ANY), function () {
    verifyIdcardExists(k);
  });
});

bthread("Idcard update verification", function () {
  const e = waitForAnyIdcardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdcard(k, ANY), function () {
    verifyIdcardUpdated(k);
  });
});

bthread("Idcard delete verification", function () {
  const e = waitForAnyIdcardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdcard(k, ANY), function () {
    verifyIdcardDoesNotExist(k);
  });
});

bthread("Idemaillist create verification", function () {
  const e = waitForAnyIdemaillistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdemaillist(k, ANY), function () {
    verifyIdemaillistExists(k);
  });
});

bthread("Idemaillist update verification", function () {
  const e = waitForAnyIdemaillistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdemaillist(k, ANY), function () {
    verifyIdemaillistUpdated(k);
  });
});

bthread("Idemaillist delete verification", function () {
  const e = waitForAnyIdemaillistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdemaillist(k, ANY), function () {
    verifyIdemaillistDoesNotExist(k);
  });
});

bthread("Idlabel create verification", function () {
  const e = waitForAnyIdlabelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdlabel(k, ANY), function () {
    verifyIdlabelExists(k);
  });
});

bthread("Idlabel update verification", function () {
  const e = waitForAnyIdlabelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdlabel(k, ANY), function () {
    verifyIdlabelUpdated(k);
  });
});

bthread("Idlabel delete verification", function () {
  const e = waitForAnyIdlabelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdlabel(k, ANY), function () {
    verifyIdlabelDoesNotExist(k);
  });
});

bthread("Idlist create verification", function () {
  const e = waitForAnyIdlistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdlist(k, ANY), function () {
    verifyIdlistExists(k);
  });
});

bthread("Idlist update verification", function () {
  const e = waitForAnyIdlistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdlist(k, ANY), function () {
    verifyIdlistUpdated(k);
  });
});

bthread("Idlist delete verification", function () {
  const e = waitForAnyIdlistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdlist(k, ANY), function () {
    verifyIdlistDoesNotExist(k);
  });
});

bthread("Idmember create verification", function () {
  const e = waitForAnyIdmemberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdmember(k, ANY), function () {
    verifyIdmemberExists(k);
  });
});

bthread("Idmember update verification", function () {
  const e = waitForAnyIdmemberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdmember(k, ANY), function () {
    verifyIdmemberUpdated(k);
  });
});

bthread("Idmember delete verification", function () {
  const e = waitForAnyIdmemberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdmember(k, ANY), function () {
    verifyIdmemberDoesNotExist(k);
  });
});

bthread("Idmodel create verification", function () {
  const e = waitForAnyIdmodelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdmodel(k, ANY), function () {
    verifyIdmodelExists(k);
  });
});

bthread("Idmodel update verification", function () {
  const e = waitForAnyIdmodelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdmodel(k, ANY), function () {
    verifyIdmodelUpdated(k);
  });
});

bthread("Idmodel delete verification", function () {
  const e = waitForAnyIdmodelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdmodel(k, ANY), function () {
    verifyIdmodelDoesNotExist(k);
  });
});

bthread("Idorganization create verification", function () {
  const e = waitForAnyIdorganizationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdorganization(k, ANY), function () {
    verifyIdorganizationExists(k);
  });
});

bthread("Idorganization update verification", function () {
  const e = waitForAnyIdorganizationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIdorganization(k, ANY), function () {
    verifyIdorganizationUpdated(k);
  });
});

bthread("Idorganization delete verification", function () {
  const e = waitForAnyIdorganizationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIdorganization(k, ANY), function () {
    verifyIdorganizationDoesNotExist(k);
  });
});

bthread("Initial create verification", function () {
  const e = waitForAnyInitialAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInitial(k, ANY), function () {
    verifyInitialExists(k);
  });
});

bthread("Initial update verification", function () {
  const e = waitForAnyInitialUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInitial(k, ANY), function () {
    verifyInitialUpdated(k);
  });
});

bthread("Initial delete verification", function () {
  const e = waitForAnyInitialDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInitial(k, ANY), function () {
    verifyInitialDoesNotExist(k);
  });
});

bthread("Invitation create verification", function () {
  const e = waitForAnyInvitationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvitation(k, ANY), function () {
    verifyInvitationExists(k);
  });
});

bthread("Invitation update verification", function () {
  const e = waitForAnyInvitationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvitation(k, ANY), function () {
    verifyInvitationUpdated(k);
  });
});

bthread("Invitation delete verification", function () {
  const e = waitForAnyInvitationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInvitation(k, ANY), function () {
    verifyInvitationDoesNotExist(k);
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

bthread("Labelname create verification", function () {
  const e = waitForAnyLabelnameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLabelname(k, ANY), function () {
    verifyLabelnameExists(k);
  });
});

bthread("Labelname update verification", function () {
  const e = waitForAnyLabelnameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLabelname(k, ANY), function () {
    verifyLabelnameUpdated(k);
  });
});

bthread("Labelname delete verification", function () {
  const e = waitForAnyLabelnameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLabelname(k, ANY), function () {
    verifyLabelnameDoesNotExist(k);
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

bthread("Logo create verification", function () {
  const e = waitForAnyLogoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogo(k, ANY), function () {
    verifyLogoExists(k);
  });
});

bthread("Logo update verification", function () {
  const e = waitForAnyLogoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogo(k, ANY), function () {
    verifyLogoUpdated(k);
  });
});

bthread("Logo delete verification", function () {
  const e = waitForAnyLogoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLogo(k, ANY), function () {
    verifyLogoDoesNotExist(k);
  });
});

bthread("Markassociatednotificationsread create verification", function () {
  const e = waitForAnyMarkassociatednotificationsreadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkassociatednotificationsread(k, ANY), function () {
    verifyMarkassociatednotificationsreadExists(k);
  });
});

bthread("Markassociatednotificationsread update verification", function () {
  const e = waitForAnyMarkassociatednotificationsreadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkassociatednotificationsread(k, ANY), function () {
    verifyMarkassociatednotificationsreadUpdated(k);
  });
});

bthread("Markassociatednotificationsread delete verification", function () {
  const e = waitForAnyMarkassociatednotificationsreadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarkassociatednotificationsread(k, ANY), function () {
    verifyMarkassociatednotificationsreadDoesNotExist(k);
  });
});

bthread("Markasviewed create verification", function () {
  const e = waitForAnyMarkasviewedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkasviewed(k, ANY), function () {
    verifyMarkasviewedExists(k);
  });
});

bthread("Markasviewed update verification", function () {
  const e = waitForAnyMarkasviewedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkasviewed(k, ANY), function () {
    verifyMarkasviewedUpdated(k);
  });
});

bthread("Markasviewed delete verification", function () {
  const e = waitForAnyMarkasviewedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarkasviewed(k, ANY), function () {
    verifyMarkasviewedDoesNotExist(k);
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

bthread("Membercreator create verification", function () {
  const e = waitForAnyMembercreatorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembercreator(k, ANY), function () {
    verifyMembercreatorExists(k);
  });
});

bthread("Membercreator update verification", function () {
  const e = waitForAnyMembercreatorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembercreator(k, ANY), function () {
    verifyMembercreatorUpdated(k);
  });
});

bthread("Membercreator delete verification", function () {
  const e = waitForAnyMembercreatorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMembercreator(k, ANY), function () {
    verifyMembercreatorDoesNotExist(k);
  });
});

bthread("Membership create verification", function () {
  const e = waitForAnyMembershipAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembership(k, ANY), function () {
    verifyMembershipExists(k);
  });
});

bthread("Membership update verification", function () {
  const e = waitForAnyMembershipUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembership(k, ANY), function () {
    verifyMembershipUpdated(k);
  });
});

bthread("Membership delete verification", function () {
  const e = waitForAnyMembershipDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMembership(k, ANY), function () {
    verifyMembershipDoesNotExist(k);
  });
});

bthread("Membersinvited create verification", function () {
  const e = waitForAnyMembersinvitedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembersinvited(k, ANY), function () {
    verifyMembersinvitedExists(k);
  });
});

bthread("Membersinvited update verification", function () {
  const e = waitForAnyMembersinvitedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembersinvited(k, ANY), function () {
    verifyMembersinvitedUpdated(k);
  });
});

bthread("Membersinvited delete verification", function () {
  const e = waitForAnyMembersinvitedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMembersinvited(k, ANY), function () {
    verifyMembersinvitedDoesNotExist(k);
  });
});

bthread("Membersvoted create verification", function () {
  const e = waitForAnyMembersvotedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembersvoted(k, ANY), function () {
    verifyMembersvotedExists(k);
  });
});

bthread("Membersvoted update verification", function () {
  const e = waitForAnyMembersvotedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembersvoted(k, ANY), function () {
    verifyMembersvotedUpdated(k);
  });
});

bthread("Membersvoted delete verification", function () {
  const e = waitForAnyMembersvotedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMembersvoted(k, ANY), function () {
    verifyMembersvotedDoesNotExist(k);
  });
});

bthread("Minutesbetweensummary create verification", function () {
  const e = waitForAnyMinutesbetweensummaryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMinutesbetweensummary(k, ANY), function () {
    verifyMinutesbetweensummaryExists(k);
  });
});

bthread("Minutesbetweensummary update verification", function () {
  const e = waitForAnyMinutesbetweensummaryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMinutesbetweensummary(k, ANY), function () {
    verifyMinutesbetweensummaryUpdated(k);
  });
});

bthread("Minutesbetweensummary delete verification", function () {
  const e = waitForAnyMinutesbetweensummaryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMinutesbetweensummary(k, ANY), function () {
    verifyMinutesbetweensummaryDoesNotExist(k);
  });
});

bthread("Moveallcard create verification", function () {
  const e = waitForAnyMoveallcardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMoveallcard(k, ANY), function () {
    verifyMoveallcardExists(k);
  });
});

bthread("Moveallcard update verification", function () {
  const e = waitForAnyMoveallcardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMoveallcard(k, ANY), function () {
    verifyMoveallcardUpdated(k);
  });
});

bthread("Moveallcard delete verification", function () {
  const e = waitForAnyMoveallcardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMoveallcard(k, ANY), function () {
    verifyMoveallcardDoesNotExist(k);
  });
});

bthread("Mypref create verification", function () {
  const e = waitForAnyMyprefAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMypref(k, ANY), function () {
    verifyMyprefExists(k);
  });
});

bthread("Mypref update verification", function () {
  const e = waitForAnyMyprefUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMypref(k, ANY), function () {
    verifyMyprefUpdated(k);
  });
});

bthread("Mypref delete verification", function () {
  const e = waitForAnyMyprefDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMypref(k, ANY), function () {
    verifyMyprefDoesNotExist(k);
  });
});

bthread("Name create verification", function () {
  const e = waitForAnyNameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteName(k, ANY), function () {
    verifyNameExists(k);
  });
});

bthread("Name update verification", function () {
  const e = waitForAnyNameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteName(k, ANY), function () {
    verifyNameUpdated(k);
  });
});

bthread("Name delete verification", function () {
  const e = waitForAnyNameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddName(k, ANY), function () {
    verifyNameDoesNotExist(k);
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

bthread("Onetimemessagesdismissed create verification", function () {
  const e = waitForAnyOnetimemessagesdismissedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOnetimemessagesdismissed(k, ANY), function () {
    verifyOnetimemessagesdismissedExists(k);
  });
});

bthread("Onetimemessagesdismissed update verification", function () {
  const e = waitForAnyOnetimemessagesdismissedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOnetimemessagesdismissed(k, ANY), function () {
    verifyOnetimemessagesdismissedUpdated(k);
  });
});

bthread("Onetimemessagesdismissed delete verification", function () {
  const e = waitForAnyOnetimemessagesdismissedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOnetimemessagesdismissed(k, ANY), function () {
    verifyOnetimemessagesdismissedDoesNotExist(k);
  });
});

bthread("Orange create verification", function () {
  const e = waitForAnyOrangeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrange(k, ANY), function () {
    verifyOrangeExists(k);
  });
});

bthread("Orange update verification", function () {
  const e = waitForAnyOrangeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrange(k, ANY), function () {
    verifyOrangeUpdated(k);
  });
});

bthread("Orange delete verification", function () {
  const e = waitForAnyOrangeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrange(k, ANY), function () {
    verifyOrangeDoesNotExist(k);
  });
});

bthread("Org create verification", function () {
  const e = waitForAnyOrgAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrg(k, ANY), function () {
    verifyOrgExists(k);
  });
});

bthread("Org update verification", function () {
  const e = waitForAnyOrgUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrg(k, ANY), function () {
    verifyOrgUpdated(k);
  });
});

bthread("Org delete verification", function () {
  const e = waitForAnyOrgDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrg(k, ANY), function () {
    verifyOrgDoesNotExist(k);
  });
});

bthread("Organization create verification", function () {
  const e = waitForAnyOrganizationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganization(k, ANY), function () {
    verifyOrganizationExists(k);
  });
});

bthread("Organization update verification", function () {
  const e = waitForAnyOrganizationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganization(k, ANY), function () {
    verifyOrganizationUpdated(k);
  });
});

bthread("Organization delete verification", function () {
  const e = waitForAnyOrganizationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrganization(k, ANY), function () {
    verifyOrganizationDoesNotExist(k);
  });
});

bthread("Organizationsinvited create verification", function () {
  const e = waitForAnyOrganizationsinvitedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationsinvited(k, ANY), function () {
    verifyOrganizationsinvitedExists(k);
  });
});

bthread("Organizationsinvited update verification", function () {
  const e = waitForAnyOrganizationsinvitedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationsinvited(k, ANY), function () {
    verifyOrganizationsinvitedUpdated(k);
  });
});

bthread("Organizationsinvited delete verification", function () {
  const e = waitForAnyOrganizationsinvitedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrganizationsinvited(k, ANY), function () {
    verifyOrganizationsinvitedDoesNotExist(k);
  });
});

bthread("Orginviterestrict create verification", function () {
  const e = waitForAnyOrginviterestrictAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrginviterestrict(k, ANY), function () {
    verifyOrginviterestrictExists(k);
  });
});

bthread("Orginviterestrict update verification", function () {
  const e = waitForAnyOrginviterestrictUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrginviterestrict(k, ANY), function () {
    verifyOrginviterestrictUpdated(k);
  });
});

bthread("Orginviterestrict delete verification", function () {
  const e = waitForAnyOrginviterestrictDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrginviterestrict(k, ANY), function () {
    verifyOrginviterestrictDoesNotExist(k);
  });
});

bthread("Permissionlevel create verification", function () {
  const e = waitForAnyPermissionlevelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermissionlevel(k, ANY), function () {
    verifyPermissionlevelExists(k);
  });
});

bthread("Permissionlevel update verification", function () {
  const e = waitForAnyPermissionlevelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermissionlevel(k, ANY), function () {
    verifyPermissionlevelUpdated(k);
  });
});

bthread("Permissionlevel delete verification", function () {
  const e = waitForAnyPermissionlevelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPermissionlevel(k, ANY), function () {
    verifyPermissionlevelDoesNotExist(k);
  });
});

bthread("Po create verification", function () {
  const e = waitForAnyPoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePo(k, ANY), function () {
    verifyPoExists(k);
  });
});

bthread("Po update verification", function () {
  const e = waitForAnyPoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePo(k, ANY), function () {
    verifyPoUpdated(k);
  });
});

bthread("Po delete verification", function () {
  const e = waitForAnyPoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPo(k, ANY), function () {
    verifyPoDoesNotExist(k);
  });
});

bthread("Powerup create verification", function () {
  const e = waitForAnyPowerupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerup(k, ANY), function () {
    verifyPowerupExists(k);
  });
});

bthread("Powerup update verification", function () {
  const e = waitForAnyPowerupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePowerup(k, ANY), function () {
    verifyPowerupUpdated(k);
  });
});

bthread("Powerup delete verification", function () {
  const e = waitForAnyPowerupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPowerup(k, ANY), function () {
    verifyPowerupDoesNotExist(k);
  });
});

bthread("Pref create verification", function () {
  const e = waitForAnyPrefAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePref(k, ANY), function () {
    verifyPrefExists(k);
  });
});

bthread("Pref update verification", function () {
  const e = waitForAnyPrefUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePref(k, ANY), function () {
    verifyPrefUpdated(k);
  });
});

bthread("Pref delete verification", function () {
  const e = waitForAnyPrefDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPref(k, ANY), function () {
    verifyPrefDoesNotExist(k);
  });
});

bthread("Private create verification", function () {
  const e = waitForAnyPrivateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrivate(k, ANY), function () {
    verifyPrivateExists(k);
  });
});

bthread("Private update verification", function () {
  const e = waitForAnyPrivateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrivate(k, ANY), function () {
    verifyPrivateUpdated(k);
  });
});

bthread("Private delete verification", function () {
  const e = waitForAnyPrivateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPrivate(k, ANY), function () {
    verifyPrivateDoesNotExist(k);
  });
});

bthread("Public create verification", function () {
  const e = waitForAnyPublicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublic(k, ANY), function () {
    verifyPublicExists(k);
  });
});

bthread("Public update verification", function () {
  const e = waitForAnyPublicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublic(k, ANY), function () {
    verifyPublicUpdated(k);
  });
});

bthread("Public delete verification", function () {
  const e = waitForAnyPublicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublic(k, ANY), function () {
    verifyPublicDoesNotExist(k);
  });
});

bthread("Purple create verification", function () {
  const e = waitForAnyPurpleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePurple(k, ANY), function () {
    verifyPurpleExists(k);
  });
});

bthread("Purple update verification", function () {
  const e = waitForAnyPurpleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePurple(k, ANY), function () {
    verifyPurpleUpdated(k);
  });
});

bthread("Purple delete verification", function () {
  const e = waitForAnyPurpleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPurple(k, ANY), function () {
    verifyPurpleDoesNotExist(k);
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

bthread("Red create verification", function () {
  const e = waitForAnyRedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRed(k, ANY), function () {
    verifyRedExists(k);
  });
});

bthread("Red update verification", function () {
  const e = waitForAnyRedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRed(k, ANY), function () {
    verifyRedUpdated(k);
  });
});

bthread("Red delete verification", function () {
  const e = waitForAnyRedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRed(k, ANY), function () {
    verifyRedDoesNotExist(k);
  });
});

bthread("Savedsearche create verification", function () {
  const e = waitForAnySavedsearcheAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavedsearche(k, ANY), function () {
    verifySavedsearcheExists(k);
  });
});

bthread("Savedsearche update verification", function () {
  const e = waitForAnySavedsearcheUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSavedsearche(k, ANY), function () {
    verifySavedsearcheUpdated(k);
  });
});

bthread("Savedsearche delete verification", function () {
  const e = waitForAnySavedsearcheDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSavedsearche(k, ANY), function () {
    verifySavedsearcheDoesNotExist(k);
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

bthread("Selfjoin create verification", function () {
  const e = waitForAnySelfjoinAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelfjoin(k, ANY), function () {
    verifySelfjoinExists(k);
  });
});

bthread("Selfjoin update verification", function () {
  const e = waitForAnySelfjoinUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelfjoin(k, ANY), function () {
    verifySelfjoinUpdated(k);
  });
});

bthread("Selfjoin delete verification", function () {
  const e = waitForAnySelfjoinDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSelfjoin(k, ANY), function () {
    verifySelfjoinDoesNotExist(k);
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

bthread("Showlistguide create verification", function () {
  const e = waitForAnyShowlistguideAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowlistguide(k, ANY), function () {
    verifyShowlistguideExists(k);
  });
});

bthread("Showlistguide update verification", function () {
  const e = waitForAnyShowlistguideUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowlistguide(k, ANY), function () {
    verifyShowlistguideUpdated(k);
  });
});

bthread("Showlistguide delete verification", function () {
  const e = waitForAnyShowlistguideDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShowlistguide(k, ANY), function () {
    verifyShowlistguideDoesNotExist(k);
  });
});

bthread("Showsidebar create verification", function () {
  const e = waitForAnyShowsidebarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebar(k, ANY), function () {
    verifyShowsidebarExists(k);
  });
});

bthread("Showsidebar update verification", function () {
  const e = waitForAnyShowsidebarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebar(k, ANY), function () {
    verifyShowsidebarUpdated(k);
  });
});

bthread("Showsidebar delete verification", function () {
  const e = waitForAnyShowsidebarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShowsidebar(k, ANY), function () {
    verifyShowsidebarDoesNotExist(k);
  });
});

bthread("Showsidebaractivity create verification", function () {
  const e = waitForAnyShowsidebaractivityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebaractivity(k, ANY), function () {
    verifyShowsidebaractivityExists(k);
  });
});

bthread("Showsidebaractivity update verification", function () {
  const e = waitForAnyShowsidebaractivityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebaractivity(k, ANY), function () {
    verifyShowsidebaractivityUpdated(k);
  });
});

bthread("Showsidebaractivity delete verification", function () {
  const e = waitForAnyShowsidebaractivityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShowsidebaractivity(k, ANY), function () {
    verifyShowsidebaractivityDoesNotExist(k);
  });
});

bthread("Showsidebarboardaction create verification", function () {
  const e = waitForAnyShowsidebarboardactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebarboardaction(k, ANY), function () {
    verifyShowsidebarboardactionExists(k);
  });
});

bthread("Showsidebarboardaction update verification", function () {
  const e = waitForAnyShowsidebarboardactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebarboardaction(k, ANY), function () {
    verifyShowsidebarboardactionUpdated(k);
  });
});

bthread("Showsidebarboardaction delete verification", function () {
  const e = waitForAnyShowsidebarboardactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShowsidebarboardaction(k, ANY), function () {
    verifyShowsidebarboardactionDoesNotExist(k);
  });
});

bthread("Showsidebarmember create verification", function () {
  const e = waitForAnyShowsidebarmemberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebarmember(k, ANY), function () {
    verifyShowsidebarmemberExists(k);
  });
});

bthread("Showsidebarmember update verification", function () {
  const e = waitForAnyShowsidebarmemberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteShowsidebarmember(k, ANY), function () {
    verifyShowsidebarmemberUpdated(k);
  });
});

bthread("Showsidebarmember delete verification", function () {
  const e = waitForAnyShowsidebarmemberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddShowsidebarmember(k, ANY), function () {
    verifyShowsidebarmemberDoesNotExist(k);
  });
});

bthread("Socket create verification", function () {
  const e = waitForAnySocketAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSocket(k, ANY), function () {
    verifySocketExists(k);
  });
});

bthread("Socket update verification", function () {
  const e = waitForAnySocketUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSocket(k, ANY), function () {
    verifySocketUpdated(k);
  });
});

bthread("Socket delete verification", function () {
  const e = waitForAnySocketDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSocket(k, ANY), function () {
    verifySocketDoesNotExist(k);
  });
});

bthread("State create verification", function () {
  const e = waitForAnyStateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteState(k, ANY), function () {
    verifyStateExists(k);
  });
});

bthread("State update verification", function () {
  const e = waitForAnyStateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteState(k, ANY), function () {
    verifyStateUpdated(k);
  });
});

bthread("State delete verification", function () {
  const e = waitForAnyStateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddState(k, ANY), function () {
    verifyStateDoesNotExist(k);
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

bthread("Sticker create verification", function () {
  const e = waitForAnyStickerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSticker(k, ANY), function () {
    verifyStickerExists(k);
  });
});

bthread("Sticker update verification", function () {
  const e = waitForAnyStickerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSticker(k, ANY), function () {
    verifyStickerUpdated(k);
  });
});

bthread("Sticker delete verification", function () {
  const e = waitForAnyStickerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSticker(k, ANY), function () {
    verifyStickerDoesNotExist(k);
  });
});

bthread("Subscribed create verification", function () {
  const e = waitForAnySubscribedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscribed(k, ANY), function () {
    verifySubscribedExists(k);
  });
});

bthread("Subscribed update verification", function () {
  const e = waitForAnySubscribedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscribed(k, ANY), function () {
    verifySubscribedUpdated(k);
  });
});

bthread("Subscribed delete verification", function () {
  const e = waitForAnySubscribedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubscribed(k, ANY), function () {
    verifySubscribedDoesNotExist(k);
  });
});

bthread("Text create verification", function () {
  const e = waitForAnyTextAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteText(k, ANY), function () {
    verifyTextExists(k);
  });
});

bthread("Text update verification", function () {
  const e = waitForAnyTextUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteText(k, ANY), function () {
    verifyTextUpdated(k);
  });
});

bthread("Text delete verification", function () {
  const e = waitForAnyTextDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddText(k, ANY), function () {
    verifyTextDoesNotExist(k);
  });
});

bthread("Token create verification", function () {
  const e = waitForAnyTokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteToken(k, ANY), function () {
    verifyTokenExists(k);
  });
});

bthread("Token update verification", function () {
  const e = waitForAnyTokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteToken(k, ANY), function () {
    verifyTokenUpdated(k);
  });
});

bthread("Token delete verification", function () {
  const e = waitForAnyTokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddToken(k, ANY), function () {
    verifyTokenDoesNotExist(k);
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

bthread("Unread create verification", function () {
  const e = waitForAnyUnreadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnread(k, ANY), function () {
    verifyUnreadExists(k);
  });
});

bthread("Unread update verification", function () {
  const e = waitForAnyUnreadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnread(k, ANY), function () {
    verifyUnreadUpdated(k);
  });
});

bthread("Unread delete verification", function () {
  const e = waitForAnyUnreadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUnread(k, ANY), function () {
    verifyUnreadDoesNotExist(k);
  });
});

bthread("Username create verification", function () {
  const e = waitForAnyUsernameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsername(k, ANY), function () {
    verifyUsernameExists(k);
  });
});

bthread("Username update verification", function () {
  const e = waitForAnyUsernameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsername(k, ANY), function () {
    verifyUsernameUpdated(k);
  });
});

bthread("Username delete verification", function () {
  const e = waitForAnyUsernameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsername(k, ANY), function () {
    verifyUsernameDoesNotExist(k);
  });
});

bthread("Voting create verification", function () {
  const e = waitForAnyVotingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVoting(k, ANY), function () {
    verifyVotingExists(k);
  });
});

bthread("Voting update verification", function () {
  const e = waitForAnyVotingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVoting(k, ANY), function () {
    verifyVotingUpdated(k);
  });
});

bthread("Voting delete verification", function () {
  const e = waitForAnyVotingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVoting(k, ANY), function () {
    verifyVotingDoesNotExist(k);
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

bthread("Website create verification", function () {
  const e = waitForAnyWebsiteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebsite(k, ANY), function () {
    verifyWebsiteExists(k);
  });
});

bthread("Website update verification", function () {
  const e = waitForAnyWebsiteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebsite(k, ANY), function () {
    verifyWebsiteUpdated(k);
  });
});

bthread("Website delete verification", function () {
  const e = waitForAnyWebsiteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWebsite(k, ANY), function () {
    verifyWebsiteDoesNotExist(k);
  });
});

bthread("Yellow create verification", function () {
  const e = waitForAnyYellowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteYellow(k, ANY), function () {
    verifyYellowExists(k);
  });
});

bthread("Yellow update verification", function () {
  const e = waitForAnyYellowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteYellow(k, ANY), function () {
    verifyYellowUpdated(k);
  });
});

bthread("Yellow delete verification", function () {
  const e = waitForAnyYellowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddYellow(k, ANY), function () {
    verifyYellowDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Action", function () {
  const x = waitForAnyActionAdded();
  block(matchAddAction(x.id, ANY), function () {});
});

bthread("Guard: Unique Active", function () {
  const x = waitForAnyActiveAdded();
  block(matchAddActive(x.id, ANY), function () {});
});

bthread("Guard: Unique All", function () {
  const x = waitForAnyAllAdded();
  block(matchAddAll(x.id, ANY), function () {});
});

bthread("Guard: Unique Archiveallcard", function () {
  const x = waitForAnyArchiveallcardAdded();
  block(matchAddArchiveallcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Associateddomain", function () {
  const x = waitForAnyAssociateddomainAdded();
  block(matchAddAssociateddomain(x.id, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  block(matchAddAttachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatar", function () {
  const x = waitForAnyAvatarAdded();
  block(matchAddAvatar(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatarsource", function () {
  const x = waitForAnyAvatarsourceAdded();
  block(matchAddAvatarsource(x.id, ANY), function () {});
});

bthread("Guard: Unique Background", function () {
  const x = waitForAnyBackgroundAdded();
  block(matchAddBackground(x.id, ANY), function () {});
});

bthread("Guard: Unique Batch", function () {
  const x = waitForAnyBatchAdded();
  block(matchAddBatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Bio", function () {
  const x = waitForAnyBioAdded();
  block(matchAddBio(x.id, ANY), function () {});
});

bthread("Guard: Unique Blue", function () {
  const x = waitForAnyBlueAdded();
  block(matchAddBlue(x.id, ANY), function () {});
});

bthread("Guard: Unique Board", function () {
  const x = waitForAnyBoardAdded();
  block(matchAddBoard(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardbackground", function () {
  const x = waitForAnyBoardbackgroundAdded();
  block(matchAddBoardbackground(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardsinvited", function () {
  const x = waitForAnyBoardsinvitedAdded();
  block(matchAddBoardsinvited(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardstar", function () {
  const x = waitForAnyBoardstarAdded();
  block(matchAddBoardstar(x.id, ANY), function () {});
});

bthread("Guard: Unique Boardvisibilityrestrict", function () {
  const x = waitForAnyBoardvisibilityrestrictAdded();
  block(matchAddBoardvisibilityrestrict(x.id, ANY), function () {});
});

bthread("Guard: Unique Calendarfeedenabled", function () {
  const x = waitForAnyCalendarfeedenabledAdded();
  block(matchAddCalendarfeedenabled(x.id, ANY), function () {});
});

bthread("Guard: Unique Calendarkey", function () {
  const x = waitForAnyCalendarkeyAdded();
  block(matchAddCalendarkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Callbackurl", function () {
  const x = waitForAnyCallbackurlAdded();
  block(matchAddCallbackurl(x.id, ANY), function () {});
});

bthread("Guard: Unique Card", function () {
  const x = waitForAnyCardAdded();
  block(matchAddCard(x.id, ANY), function () {});
});

bthread("Guard: Unique Cardaging", function () {
  const x = waitForAnyCardagingAdded();
  block(matchAddCardaging(x.id, ANY), function () {});
});

bthread("Guard: Unique Cardcover", function () {
  const x = waitForAnyCardcoverAdded();
  block(matchAddCardcover(x.id, ANY), function () {});
});

bthread("Guard: Unique Checkitem", function () {
  const x = waitForAnyCheckitemAdded();
  block(matchAddCheckitem(x.id, ANY), function () {});
});

bthread("Guard: Unique Checkitemstate", function () {
  const x = waitForAnyCheckitemstateAdded();
  block(matchAddCheckitemstate(x.id, ANY), function () {});
});

bthread("Guard: Unique Checklist", function () {
  const x = waitForAnyChecklistAdded();
  block(matchAddChecklist(x.id, ANY), function () {});
});

bthread("Guard: Unique Closed", function () {
  const x = waitForAnyClosedAdded();
  block(matchAddClosed(x.id, ANY), function () {});
});

bthread("Guard: Unique Color", function () {
  const x = waitForAnyColorAdded();
  block(matchAddColor(x.id, ANY), function () {});
});

bthread("Guard: Unique Colorblind", function () {
  const x = waitForAnyColorblindAdded();
  block(matchAddColorblind(x.id, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  block(matchAddComment(x.id, ANY), function () {});
});

bthread("Guard: Unique Converttocard", function () {
  const x = waitForAnyConverttocardAdded();
  block(matchAddConverttocard(x.id, ANY), function () {});
});

bthread("Guard: Unique Customboardbackground", function () {
  const x = waitForAnyCustomboardbackgroundAdded();
  block(matchAddCustomboardbackground(x.id, ANY), function () {});
});

bthread("Guard: Unique Customemoji", function () {
  const x = waitForAnyCustomemojiAdded();
  block(matchAddCustomemoji(x.id, ANY), function () {});
});

bthread("Guard: Unique Customsticker", function () {
  const x = waitForAnyCustomstickerAdded();
  block(matchAddCustomsticker(x.id, ANY), function () {});
});

bthread("Guard: Unique Deactivated", function () {
  const x = waitForAnyDeactivatedAdded();
  block(matchAddDeactivated(x.id, ANY), function () {});
});

bthread("Guard: Unique Delta", function () {
  const x = waitForAnyDeltaAdded();
  block(matchAddDelta(x.id, ANY), function () {});
});

bthread("Guard: Unique Desc", function () {
  const x = waitForAnyDescAdded();
  block(matchAddDesc(x.id, ANY), function () {});
});

bthread("Guard: Unique Description", function () {
  const x = waitForAnyDescriptionAdded();
  block(matchAddDescription(x.id, ANY), function () {});
});

bthread("Guard: Unique Display", function () {
  const x = waitForAnyDisplayAdded();
  block(matchAddDisplay(x.id, ANY), function () {});
});

bthread("Guard: Unique Displayname", function () {
  const x = waitForAnyDisplaynameAdded();
  block(matchAddDisplayname(x.id, ANY), function () {});
});

bthread("Guard: Unique Due", function () {
  const x = waitForAnyDueAdded();
  block(matchAddDue(x.id, ANY), function () {});
});

bthread("Guard: Unique Emailkey", function () {
  const x = waitForAnyEmailkeyAdded();
  block(matchAddEmailkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Emailposition", function () {
  const x = waitForAnyEmailpositionAdded();
  block(matchAddEmailposition(x.id, ANY), function () {});
});

bthread("Guard: Unique Entity", function () {
  const x = waitForAnyEntityAdded();
  block(matchAddEntity(x.id, ANY), function () {});
});

bthread("Guard: Unique Externalmembersdisabled", function () {
  const x = waitForAnyExternalmembersdisabledAdded();
  block(matchAddExternalmembersdisabled(x.id, ANY), function () {});
});

bthread("Guard: Unique Fullname", function () {
  const x = waitForAnyFullnameAdded();
  block(matchAddFullname(x.id, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  block(matchAddGenerate(x.id, ANY), function () {});
});

bthread("Guard: Unique Googleappsversion", function () {
  const x = waitForAnyGoogleappsversionAdded();
  block(matchAddGoogleappsversion(x.id, ANY), function () {});
});

bthread("Guard: Unique Green", function () {
  const x = waitForAnyGreenAdded();
  block(matchAddGreen(x.id, ANY), function () {});
});

bthread("Guard: Unique Idattachmentcover", function () {
  const x = waitForAnyIdattachmentcoverAdded();
  block(matchAddIdattachmentcover(x.id, ANY), function () {});
});

bthread("Guard: Unique Idboard", function () {
  const x = waitForAnyIdboardAdded();
  block(matchAddIdboard(x.id, ANY), function () {});
});

bthread("Guard: Unique Idcard", function () {
  const x = waitForAnyIdcardAdded();
  block(matchAddIdcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Idemaillist", function () {
  const x = waitForAnyIdemaillistAdded();
  block(matchAddIdemaillist(x.id, ANY), function () {});
});

bthread("Guard: Unique Idlabel", function () {
  const x = waitForAnyIdlabelAdded();
  block(matchAddIdlabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Idlist", function () {
  const x = waitForAnyIdlistAdded();
  block(matchAddIdlist(x.id, ANY), function () {});
});

bthread("Guard: Unique Idmember", function () {
  const x = waitForAnyIdmemberAdded();
  block(matchAddIdmember(x.id, ANY), function () {});
});

bthread("Guard: Unique Idmodel", function () {
  const x = waitForAnyIdmodelAdded();
  block(matchAddIdmodel(x.id, ANY), function () {});
});

bthread("Guard: Unique Idorganization", function () {
  const x = waitForAnyIdorganizationAdded();
  block(matchAddIdorganization(x.id, ANY), function () {});
});

bthread("Guard: Unique Initial", function () {
  const x = waitForAnyInitialAdded();
  block(matchAddInitial(x.id, ANY), function () {});
});

bthread("Guard: Unique Invitation", function () {
  const x = waitForAnyInvitationAdded();
  block(matchAddInvitation(x.id, ANY), function () {});
});

bthread("Guard: Unique Label", function () {
  const x = waitForAnyLabelAdded();
  block(matchAddLabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Labelname", function () {
  const x = waitForAnyLabelnameAdded();
  block(matchAddLabelname(x.id, ANY), function () {});
});

bthread("Guard: Unique List", function () {
  const x = waitForAnyListAdded();
  block(matchAddList(x.id, ANY), function () {});
});

bthread("Guard: Unique Locale", function () {
  const x = waitForAnyLocaleAdded();
  block(matchAddLocale(x.id, ANY), function () {});
});

bthread("Guard: Unique Logo", function () {
  const x = waitForAnyLogoAdded();
  block(matchAddLogo(x.id, ANY), function () {});
});

bthread("Guard: Unique Markassociatednotificationsread", function () {
  const x = waitForAnyMarkassociatednotificationsreadAdded();
  block(matchAddMarkassociatednotificationsread(x.id, ANY), function () {});
});

bthread("Guard: Unique Markasviewed", function () {
  const x = waitForAnyMarkasviewedAdded();
  block(matchAddMarkasviewed(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Membercreator", function () {
  const x = waitForAnyMembercreatorAdded();
  block(matchAddMembercreator(x.id, ANY), function () {});
});

bthread("Guard: Unique Membership", function () {
  const x = waitForAnyMembershipAdded();
  block(matchAddMembership(x.id, ANY), function () {});
});

bthread("Guard: Unique Membersinvited", function () {
  const x = waitForAnyMembersinvitedAdded();
  block(matchAddMembersinvited(x.id, ANY), function () {});
});

bthread("Guard: Unique Membersvoted", function () {
  const x = waitForAnyMembersvotedAdded();
  block(matchAddMembersvoted(x.id, ANY), function () {});
});

bthread("Guard: Unique Minutesbetweensummary", function () {
  const x = waitForAnyMinutesbetweensummaryAdded();
  block(matchAddMinutesbetweensummary(x.id, ANY), function () {});
});

bthread("Guard: Unique Moveallcard", function () {
  const x = waitForAnyMoveallcardAdded();
  block(matchAddMoveallcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Mypref", function () {
  const x = waitForAnyMyprefAdded();
  block(matchAddMypref(x.id, ANY), function () {});
});

bthread("Guard: Unique Name", function () {
  const x = waitForAnyNameAdded();
  block(matchAddName(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Onetimemessagesdismissed", function () {
  const x = waitForAnyOnetimemessagesdismissedAdded();
  block(matchAddOnetimemessagesdismissed(x.id, ANY), function () {});
});

bthread("Guard: Unique Orange", function () {
  const x = waitForAnyOrangeAdded();
  block(matchAddOrange(x.id, ANY), function () {});
});

bthread("Guard: Unique Org", function () {
  const x = waitForAnyOrgAdded();
  block(matchAddOrg(x.id, ANY), function () {});
});

bthread("Guard: Unique Organization", function () {
  const x = waitForAnyOrganizationAdded();
  block(matchAddOrganization(x.id, ANY), function () {});
});

bthread("Guard: Unique Organizationsinvited", function () {
  const x = waitForAnyOrganizationsinvitedAdded();
  block(matchAddOrganizationsinvited(x.id, ANY), function () {});
});

bthread("Guard: Unique Orginviterestrict", function () {
  const x = waitForAnyOrginviterestrictAdded();
  block(matchAddOrginviterestrict(x.id, ANY), function () {});
});

bthread("Guard: Unique Permissionlevel", function () {
  const x = waitForAnyPermissionlevelAdded();
  block(matchAddPermissionlevel(x.id, ANY), function () {});
});

bthread("Guard: Unique Po", function () {
  const x = waitForAnyPoAdded();
  block(matchAddPo(x.id, ANY), function () {});
});

bthread("Guard: Unique Powerup", function () {
  const x = waitForAnyPowerupAdded();
  block(matchAddPowerup(x.id, ANY), function () {});
});

bthread("Guard: Unique Pref", function () {
  const x = waitForAnyPrefAdded();
  block(matchAddPref(x.id, ANY), function () {});
});

bthread("Guard: Unique Private", function () {
  const x = waitForAnyPrivateAdded();
  block(matchAddPrivate(x.id, ANY), function () {});
});

bthread("Guard: Unique Public", function () {
  const x = waitForAnyPublicAdded();
  block(matchAddPublic(x.id, ANY), function () {});
});

bthread("Guard: Unique Purple", function () {
  const x = waitForAnyPurpleAdded();
  block(matchAddPurple(x.id, ANY), function () {});
});

bthread("Guard: Unique Query", function () {
  const x = waitForAnyQueryAdded();
  block(matchAddQuery(x.id, ANY), function () {});
});

bthread("Guard: Unique Read", function () {
  const x = waitForAnyReadAdded();
  block(matchAddRead(x.id, ANY), function () {});
});

bthread("Guard: Unique Red", function () {
  const x = waitForAnyRedAdded();
  block(matchAddRed(x.id, ANY), function () {});
});

bthread("Guard: Unique Savedsearche", function () {
  const x = waitForAnySavedsearcheAdded();
  block(matchAddSavedsearche(x.id, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  block(matchAddSearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Selfjoin", function () {
  const x = waitForAnySelfjoinAdded();
  block(matchAddSelfjoin(x.id, ANY), function () {});
});

bthread("Guard: Unique Session", function () {
  const x = waitForAnySessionAdded();
  block(matchAddSession(x.id, ANY), function () {});
});

bthread("Guard: Unique Showlistguide", function () {
  const x = waitForAnyShowlistguideAdded();
  block(matchAddShowlistguide(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebar", function () {
  const x = waitForAnyShowsidebarAdded();
  block(matchAddShowsidebar(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebaractivity", function () {
  const x = waitForAnyShowsidebaractivityAdded();
  block(matchAddShowsidebaractivity(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebarboardaction", function () {
  const x = waitForAnyShowsidebarboardactionAdded();
  block(matchAddShowsidebarboardaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Showsidebarmember", function () {
  const x = waitForAnyShowsidebarmemberAdded();
  block(matchAddShowsidebarmember(x.id, ANY), function () {});
});

bthread("Guard: Unique Socket", function () {
  const x = waitForAnySocketAdded();
  block(matchAddSocket(x.id, ANY), function () {});
});

bthread("Guard: Unique State", function () {
  const x = waitForAnyStateAdded();
  block(matchAddState(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Sticker", function () {
  const x = waitForAnyStickerAdded();
  block(matchAddSticker(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscribed", function () {
  const x = waitForAnySubscribedAdded();
  block(matchAddSubscribed(x.id, ANY), function () {});
});

bthread("Guard: Unique Text", function () {
  const x = waitForAnyTextAdded();
  block(matchAddText(x.id, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  block(matchAddToken(x.id, ANY), function () {});
});

bthread("Guard: Unique Type", function () {
  const x = waitForAnyTypeAdded();
  block(matchAddType(x.id, ANY), function () {});
});

bthread("Guard: Unique Unread", function () {
  const x = waitForAnyUnreadAdded();
  block(matchAddUnread(x.id, ANY), function () {});
});

bthread("Guard: Unique Username", function () {
  const x = waitForAnyUsernameAdded();
  block(matchAddUsername(x.id, ANY), function () {});
});

bthread("Guard: Unique Voting", function () {
  const x = waitForAnyVotingAdded();
  block(matchAddVoting(x.id, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  block(matchAddWebhook(x.id, ANY), function () {});
});

bthread("Guard: Unique Website", function () {
  const x = waitForAnyWebsiteAdded();
  block(matchAddWebsite(x.id, ANY), function () {});
});

bthread("Guard: Unique Yellow", function () {
  const x = waitForAnyYellowAdded();
  block(matchAddYellow(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
