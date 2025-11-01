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


bthread("ActionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActions(x.id);
  const e_add = waitForActionsAdded(id);
  block(matchDeleteActions(id), function () {
    verifyActionsExists(id);
  });
  updateActions(x.id);
  updateActions(x.id);
  const e_upd = waitForActionsUpdated(id);
  block(matchDeleteActions(id), function () {
    verifyActionsUpdated(id);
  });
  deleteActions(x.id);
  const e_del = waitForActionsDeleted(id);
  block(matchAddActions(id), function () {
    verifyActionsDoesNotExist(id);
  });
});

bthread("ActionscommentsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActionscomments(x.id);
  const e_add = waitForActionscommentsAdded(id);
  block(matchDeleteActionscomments(id), function () {
    verifyActionscommentsExists(id);
  });
  updateActionscomments(x.id);
  updateActionscomments(x.id);
  const e_upd = waitForActionscommentsUpdated(id);
  block(matchDeleteActionscomments(id), function () {
    verifyActionscommentsUpdated(id);
  });
  deleteActionscomments(x.id);
  const e_del = waitForActionscommentsDeleted(id);
  block(matchAddActionscomments(id), function () {
    verifyActionscommentsDoesNotExist(id);
  });
});

bthread("ActionstextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActionstext(x.id);
  const e_add = waitForActionstextAdded(id);
  block(matchDeleteActionstext(id), function () {
    verifyActionstextExists(id);
  });
  updateActionstext(x.id);
  updateActionstext(x.id);
  const e_upd = waitForActionstextUpdated(id);
  block(matchDeleteActionstext(id), function () {
    verifyActionstextUpdated(id);
  });
  deleteActionstext(x.id);
  const e_del = waitForActionstextDeleted(id);
  block(matchAddActionstext(id), function () {
    verifyActionstextDoesNotExist(id);
  });
});

bthread("BoardsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoards(x.id);
  const e_add = waitForBoardsAdded(id);
  block(matchDeleteBoards(id), function () {
    verifyBoardsExists(id);
  });
  updateBoards(x.id);
  updateBoards(x.id);
  const e_upd = waitForBoardsUpdated(id);
  block(matchDeleteBoards(id), function () {
    verifyBoardsUpdated(id);
  });
  deleteBoards(x.id);
  const e_del = waitForBoardsDeleted(id);
  block(matchAddBoards(id), function () {
    verifyBoardsDoesNotExist(id);
  });
});

bthread("BoardschecklistsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardschecklists(x.id);
  const e_add = waitForBoardschecklistsAdded(id);
  block(matchDeleteBoardschecklists(id), function () {
    verifyBoardschecklistsExists(id);
  });
  updateBoardschecklists(x.id);
  updateBoardschecklists(x.id);
  const e_upd = waitForBoardschecklistsUpdated(id);
  block(matchDeleteBoardschecklists(id), function () {
    verifyBoardschecklistsUpdated(id);
  });
  deleteBoardschecklists(x.id);
  const e_del = waitForBoardschecklistsDeleted(id);
  block(matchAddBoardschecklists(id), function () {
    verifyBoardschecklistsDoesNotExist(id);
  });
});

bthread("BoardsclosedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsclosed(x.id);
  const e_add = waitForBoardsclosedAdded(id);
  block(matchDeleteBoardsclosed(id), function () {
    verifyBoardsclosedExists(id);
  });
  updateBoardsclosed(x.id);
  updateBoardsclosed(x.id);
  const e_upd = waitForBoardsclosedUpdated(id);
  block(matchDeleteBoardsclosed(id), function () {
    verifyBoardsclosedUpdated(id);
  });
  deleteBoardsclosed(x.id);
  const e_del = waitForBoardsclosedDeleted(id);
  block(matchAddBoardsclosed(id), function () {
    verifyBoardsclosedDoesNotExist(id);
  });
});

bthread("BoardsdescLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsdesc(x.id);
  const e_add = waitForBoardsdescAdded(id);
  block(matchDeleteBoardsdesc(id), function () {
    verifyBoardsdescExists(id);
  });
  updateBoardsdesc(x.id);
  updateBoardsdesc(x.id);
  const e_upd = waitForBoardsdescUpdated(id);
  block(matchDeleteBoardsdesc(id), function () {
    verifyBoardsdescUpdated(id);
  });
  deleteBoardsdesc(x.id);
  const e_del = waitForBoardsdescDeleted(id);
  block(matchAddBoardsdesc(id), function () {
    verifyBoardsdescDoesNotExist(id);
  });
});

bthread("BoardsidorganizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsidorganization(x.id);
  const e_add = waitForBoardsidorganizationAdded(id);
  block(matchDeleteBoardsidorganization(id), function () {
    verifyBoardsidorganizationExists(id);
  });
  updateBoardsidorganization(x.id);
  updateBoardsidorganization(x.id);
  const e_upd = waitForBoardsidorganizationUpdated(id);
  block(matchDeleteBoardsidorganization(id), function () {
    verifyBoardsidorganizationUpdated(id);
  });
  deleteBoardsidorganization(x.id);
  const e_del = waitForBoardsidorganizationDeleted(id);
  block(matchAddBoardsidorganization(id), function () {
    verifyBoardsidorganizationDoesNotExist(id);
  });
});

bthread("BoardslabelsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardslabels(x.id);
  const e_add = waitForBoardslabelsAdded(id);
  block(matchDeleteBoardslabels(id), function () {
    verifyBoardslabelsExists(id);
  });
  updateBoardslabels(x.id);
  updateBoardslabels(x.id);
  const e_upd = waitForBoardslabelsUpdated(id);
  block(matchDeleteBoardslabels(id), function () {
    verifyBoardslabelsUpdated(id);
  });
  deleteBoardslabels(x.id);
  const e_del = waitForBoardslabelsDeleted(id);
  block(matchAddBoardslabels(id), function () {
    verifyBoardslabelsDoesNotExist(id);
  });
});

bthread("BoardslistsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardslists(x.id);
  const e_add = waitForBoardslistsAdded(id);
  block(matchDeleteBoardslists(id), function () {
    verifyBoardslistsExists(id);
  });
  updateBoardslists(x.id);
  updateBoardslists(x.id);
  const e_upd = waitForBoardslistsUpdated(id);
  block(matchDeleteBoardslists(id), function () {
    verifyBoardslistsUpdated(id);
  });
  deleteBoardslists(x.id);
  const e_del = waitForBoardslistsDeleted(id);
  block(matchAddBoardslists(id), function () {
    verifyBoardslistsDoesNotExist(id);
  });
});

bthread("BoardsmembersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsmembers(x.id);
  const e_add = waitForBoardsmembersAdded(id);
  block(matchDeleteBoardsmembers(id), function () {
    verifyBoardsmembersExists(id);
  });
  updateBoardsmembers(x.id);
  updateBoardsmembers(x.id);
  const e_upd = waitForBoardsmembersUpdated(id);
  block(matchDeleteBoardsmembers(id), function () {
    verifyBoardsmembersUpdated(id);
  });
  deleteBoardsmembers(x.id);
  const e_del = waitForBoardsmembersDeleted(id);
  block(matchAddBoardsmembers(id), function () {
    verifyBoardsmembersDoesNotExist(id);
  });
});

bthread("BoardsmembershipsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsmemberships(x.id);
  const e_add = waitForBoardsmembershipsAdded(id);
  block(matchDeleteBoardsmemberships(id), function () {
    verifyBoardsmembershipsExists(id);
  });
  updateBoardsmemberships(x.id);
  updateBoardsmemberships(x.id);
  const e_upd = waitForBoardsmembershipsUpdated(id);
  block(matchDeleteBoardsmemberships(id), function () {
    verifyBoardsmembershipsUpdated(id);
  });
  deleteBoardsmemberships(x.id);
  const e_del = waitForBoardsmembershipsDeleted(id);
  block(matchAddBoardsmemberships(id), function () {
    verifyBoardsmembershipsDoesNotExist(id);
  });
});

bthread("BoardsnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardsname(x.id);
  const e_add = waitForBoardsnameAdded(id);
  block(matchDeleteBoardsname(id), function () {
    verifyBoardsnameExists(id);
  });
  updateBoardsname(x.id);
  updateBoardsname(x.id);
  const e_upd = waitForBoardsnameUpdated(id);
  block(matchDeleteBoardsname(id), function () {
    verifyBoardsnameUpdated(id);
  });
  deleteBoardsname(x.id);
  const e_del = waitForBoardsnameDeleted(id);
  block(matchAddBoardsname(id), function () {
    verifyBoardsnameDoesNotExist(id);
  });
});

bthread("BoardspowerupsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardspowerups(x.id);
  const e_add = waitForBoardspowerupsAdded(id);
  block(matchDeleteBoardspowerups(id), function () {
    verifyBoardspowerupsExists(id);
  });
  updateBoardspowerups(x.id);
  updateBoardspowerups(x.id);
  const e_upd = waitForBoardspowerupsUpdated(id);
  block(matchDeleteBoardspowerups(id), function () {
    verifyBoardspowerupsUpdated(id);
  });
  deleteBoardspowerups(x.id);
  const e_del = waitForBoardspowerupsDeleted(id);
  block(matchAddBoardspowerups(id), function () {
    verifyBoardspowerupsDoesNotExist(id);
  });
});

bthread("BoardssubscribedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBoardssubscribed(x.id);
  const e_add = waitForBoardssubscribedAdded(id);
  block(matchDeleteBoardssubscribed(id), function () {
    verifyBoardssubscribedExists(id);
  });
  updateBoardssubscribed(x.id);
  updateBoardssubscribed(x.id);
  const e_upd = waitForBoardssubscribedUpdated(id);
  block(matchDeleteBoardssubscribed(id), function () {
    verifyBoardssubscribedUpdated(id);
  });
  deleteBoardssubscribed(x.id);
  const e_del = waitForBoardssubscribedDeleted(id);
  block(matchAddBoardssubscribed(id), function () {
    verifyBoardssubscribedDoesNotExist(id);
  });
});

bthread("CardsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCards(x.id);
  const e_add = waitForCardsAdded(id);
  block(matchDeleteCards(id), function () {
    verifyCardsExists(id);
  });
  updateCards(x.id);
  updateCards(x.id);
  const e_upd = waitForCardsUpdated(id);
  block(matchDeleteCards(id), function () {
    verifyCardsUpdated(id);
  });
  deleteCards(x.id);
  const e_del = waitForCardsDeleted(id);
  block(matchAddCards(id), function () {
    verifyCardsDoesNotExist(id);
  });
});

bthread("CardsactionscommentsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsactionscomments(x.id);
  const e_add = waitForCardsactionscommentsAdded(id);
  block(matchDeleteCardsactionscomments(id), function () {
    verifyCardsactionscommentsExists(id);
  });
  updateCardsactionscomments(x.id);
  updateCardsactionscomments(x.id);
  const e_upd = waitForCardsactionscommentsUpdated(id);
  block(matchDeleteCardsactionscomments(id), function () {
    verifyCardsactionscommentsUpdated(id);
  });
  deleteCardsactionscomments(x.id);
  const e_del = waitForCardsactionscommentsDeleted(id);
  block(matchAddCardsactionscomments(id), function () {
    verifyCardsactionscommentsDoesNotExist(id);
  });
});

bthread("CardsattachmentsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsattachments(x.id);
  const e_add = waitForCardsattachmentsAdded(id);
  block(matchDeleteCardsattachments(id), function () {
    verifyCardsattachmentsExists(id);
  });
  updateCardsattachments(x.id);
  updateCardsattachments(x.id);
  const e_upd = waitForCardsattachmentsUpdated(id);
  block(matchDeleteCardsattachments(id), function () {
    verifyCardsattachmentsUpdated(id);
  });
  deleteCardsattachments(x.id);
  const e_del = waitForCardsattachmentsDeleted(id);
  block(matchAddCardsattachments(id), function () {
    verifyCardsattachmentsDoesNotExist(id);
  });
});

bthread("CardschecklistcheckitemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardschecklistcheckitem(x.id);
  const e_add = waitForCardschecklistcheckitemAdded(id);
  block(matchDeleteCardschecklistcheckitem(id), function () {
    verifyCardschecklistcheckitemExists(id);
  });
  updateCardschecklistcheckitem(x.id);
  updateCardschecklistcheckitem(x.id);
  const e_upd = waitForCardschecklistcheckitemUpdated(id);
  block(matchDeleteCardschecklistcheckitem(id), function () {
    verifyCardschecklistcheckitemUpdated(id);
  });
  deleteCardschecklistcheckitem(x.id);
  const e_del = waitForCardschecklistcheckitemDeleted(id);
  block(matchAddCardschecklistcheckitem(id), function () {
    verifyCardschecklistcheckitemDoesNotExist(id);
  });
});

bthread("CardschecklistcheckitemnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardschecklistcheckitemname(x.id);
  const e_add = waitForCardschecklistcheckitemnameAdded(id);
  block(matchDeleteCardschecklistcheckitemname(id), function () {
    verifyCardschecklistcheckitemnameExists(id);
  });
  updateCardschecklistcheckitemname(x.id);
  updateCardschecklistcheckitemname(x.id);
  const e_upd = waitForCardschecklistcheckitemnameUpdated(id);
  block(matchDeleteCardschecklistcheckitemname(id), function () {
    verifyCardschecklistcheckitemnameUpdated(id);
  });
  deleteCardschecklistcheckitemname(x.id);
  const e_del = waitForCardschecklistcheckitemnameDeleted(id);
  block(matchAddCardschecklistcheckitemname(id), function () {
    verifyCardschecklistcheckitemnameDoesNotExist(id);
  });
});

bthread("CardschecklistcheckitemposLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardschecklistcheckitempos(x.id);
  const e_add = waitForCardschecklistcheckitemposAdded(id);
  block(matchDeleteCardschecklistcheckitempos(id), function () {
    verifyCardschecklistcheckitemposExists(id);
  });
  updateCardschecklistcheckitempos(x.id);
  updateCardschecklistcheckitempos(x.id);
  const e_upd = waitForCardschecklistcheckitemposUpdated(id);
  block(matchDeleteCardschecklistcheckitempos(id), function () {
    verifyCardschecklistcheckitemposUpdated(id);
  });
  deleteCardschecklistcheckitempos(x.id);
  const e_del = waitForCardschecklistcheckitemposDeleted(id);
  block(matchAddCardschecklistcheckitempos(id), function () {
    verifyCardschecklistcheckitemposDoesNotExist(id);
  });
});

bthread("CardschecklistcheckitemstateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardschecklistcheckitemstate(x.id);
  const e_add = waitForCardschecklistcheckitemstateAdded(id);
  block(matchDeleteCardschecklistcheckitemstate(id), function () {
    verifyCardschecklistcheckitemstateExists(id);
  });
  updateCardschecklistcheckitemstate(x.id);
  updateCardschecklistcheckitemstate(x.id);
  const e_upd = waitForCardschecklistcheckitemstateUpdated(id);
  block(matchDeleteCardschecklistcheckitemstate(id), function () {
    verifyCardschecklistcheckitemstateUpdated(id);
  });
  deleteCardschecklistcheckitemstate(x.id);
  const e_del = waitForCardschecklistcheckitemstateDeleted(id);
  block(matchAddCardschecklistcheckitemstate(id), function () {
    verifyCardschecklistcheckitemstateDoesNotExist(id);
  });
});

bthread("CardschecklistidchecklistcurrentcheckitemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardschecklistidchecklistcurrentcheckitem(x.id);
  const e_add = waitForCardschecklistidchecklistcurrentcheckitemAdded(id);
  block(matchDeleteCardschecklistidchecklistcurrentcheckitem(id), function () {
    verifyCardschecklistidchecklistcurrentcheckitemExists(id);
  });
  updateCardschecklistidchecklistcurrentcheckitem(x.id);
  updateCardschecklistidchecklistcurrentcheckitem(x.id);
  const e_upd = waitForCardschecklistidchecklistcurrentcheckitemUpdated(id);
  block(matchDeleteCardschecklistidchecklistcurrentcheckitem(id), function () {
    verifyCardschecklistidchecklistcurrentcheckitemUpdated(id);
  });
  deleteCardschecklistidchecklistcurrentcheckitem(x.id);
  const e_del = waitForCardschecklistidchecklistcurrentcheckitemDeleted(id);
  block(matchAddCardschecklistidchecklistcurrentcheckitem(id), function () {
    verifyCardschecklistidchecklistcurrentcheckitemDoesNotExist(id);
  });
});

bthread("CardschecklistsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardschecklists(x.id);
  const e_add = waitForCardschecklistsAdded(id);
  block(matchDeleteCardschecklists(id), function () {
    verifyCardschecklistsExists(id);
  });
  updateCardschecklists(x.id);
  updateCardschecklists(x.id);
  const e_upd = waitForCardschecklistsUpdated(id);
  block(matchDeleteCardschecklists(id), function () {
    verifyCardschecklistsUpdated(id);
  });
  deleteCardschecklists(x.id);
  const e_del = waitForCardschecklistsDeleted(id);
  block(matchAddCardschecklists(id), function () {
    verifyCardschecklistsDoesNotExist(id);
  });
});

bthread("CardsclosedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsclosed(x.id);
  const e_add = waitForCardsclosedAdded(id);
  block(matchDeleteCardsclosed(id), function () {
    verifyCardsclosedExists(id);
  });
  updateCardsclosed(x.id);
  updateCardsclosed(x.id);
  const e_upd = waitForCardsclosedUpdated(id);
  block(matchDeleteCardsclosed(id), function () {
    verifyCardsclosedUpdated(id);
  });
  deleteCardsclosed(x.id);
  const e_del = waitForCardsclosedDeleted(id);
  block(matchAddCardsclosed(id), function () {
    verifyCardsclosedDoesNotExist(id);
  });
});

bthread("CardsdescLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsdesc(x.id);
  const e_add = waitForCardsdescAdded(id);
  block(matchDeleteCardsdesc(id), function () {
    verifyCardsdescExists(id);
  });
  updateCardsdesc(x.id);
  updateCardsdesc(x.id);
  const e_upd = waitForCardsdescUpdated(id);
  block(matchDeleteCardsdesc(id), function () {
    verifyCardsdescUpdated(id);
  });
  deleteCardsdesc(x.id);
  const e_del = waitForCardsdescDeleted(id);
  block(matchAddCardsdesc(id), function () {
    verifyCardsdescDoesNotExist(id);
  });
});

bthread("CardsdueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsdue(x.id);
  const e_add = waitForCardsdueAdded(id);
  block(matchDeleteCardsdue(id), function () {
    verifyCardsdueExists(id);
  });
  updateCardsdue(x.id);
  updateCardsdue(x.id);
  const e_upd = waitForCardsdueUpdated(id);
  block(matchDeleteCardsdue(id), function () {
    verifyCardsdueUpdated(id);
  });
  deleteCardsdue(x.id);
  const e_del = waitForCardsdueDeleted(id);
  block(matchAddCardsdue(id), function () {
    verifyCardsdueDoesNotExist(id);
  });
});

bthread("CardsidattachmentcoverLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsidattachmentcover(x.id);
  const e_add = waitForCardsidattachmentcoverAdded(id);
  block(matchDeleteCardsidattachmentcover(id), function () {
    verifyCardsidattachmentcoverExists(id);
  });
  updateCardsidattachmentcover(x.id);
  updateCardsidattachmentcover(x.id);
  const e_upd = waitForCardsidattachmentcoverUpdated(id);
  block(matchDeleteCardsidattachmentcover(id), function () {
    verifyCardsidattachmentcoverUpdated(id);
  });
  deleteCardsidattachmentcover(x.id);
  const e_del = waitForCardsidattachmentcoverDeleted(id);
  block(matchAddCardsidattachmentcover(id), function () {
    verifyCardsidattachmentcoverDoesNotExist(id);
  });
});

bthread("CardsidboardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsidboard(x.id);
  const e_add = waitForCardsidboardAdded(id);
  block(matchDeleteCardsidboard(id), function () {
    verifyCardsidboardExists(id);
  });
  updateCardsidboard(x.id);
  updateCardsidboard(x.id);
  const e_upd = waitForCardsidboardUpdated(id);
  block(matchDeleteCardsidboard(id), function () {
    verifyCardsidboardUpdated(id);
  });
  deleteCardsidboard(x.id);
  const e_del = waitForCardsidboardDeleted(id);
  block(matchAddCardsidboard(id), function () {
    verifyCardsidboardDoesNotExist(id);
  });
});

bthread("CardsidlabelsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsidlabels(x.id);
  const e_add = waitForCardsidlabelsAdded(id);
  block(matchDeleteCardsidlabels(id), function () {
    verifyCardsidlabelsExists(id);
  });
  updateCardsidlabels(x.id);
  updateCardsidlabels(x.id);
  const e_upd = waitForCardsidlabelsUpdated(id);
  block(matchDeleteCardsidlabels(id), function () {
    verifyCardsidlabelsUpdated(id);
  });
  deleteCardsidlabels(x.id);
  const e_del = waitForCardsidlabelsDeleted(id);
  block(matchAddCardsidlabels(id), function () {
    verifyCardsidlabelsDoesNotExist(id);
  });
});

bthread("CardsidlistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsidlist(x.id);
  const e_add = waitForCardsidlistAdded(id);
  block(matchDeleteCardsidlist(id), function () {
    verifyCardsidlistExists(id);
  });
  updateCardsidlist(x.id);
  updateCardsidlist(x.id);
  const e_upd = waitForCardsidlistUpdated(id);
  block(matchDeleteCardsidlist(id), function () {
    verifyCardsidlistUpdated(id);
  });
  deleteCardsidlist(x.id);
  const e_del = waitForCardsidlistDeleted(id);
  block(matchAddCardsidlist(id), function () {
    verifyCardsidlistDoesNotExist(id);
  });
});

bthread("CardsidmembersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsidmembers(x.id);
  const e_add = waitForCardsidmembersAdded(id);
  block(matchDeleteCardsidmembers(id), function () {
    verifyCardsidmembersExists(id);
  });
  updateCardsidmembers(x.id);
  updateCardsidmembers(x.id);
  const e_upd = waitForCardsidmembersUpdated(id);
  block(matchDeleteCardsidmembers(id), function () {
    verifyCardsidmembersUpdated(id);
  });
  deleteCardsidmembers(x.id);
  const e_del = waitForCardsidmembersDeleted(id);
  block(matchAddCardsidmembers(id), function () {
    verifyCardsidmembersDoesNotExist(id);
  });
});

bthread("CardslabelsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardslabels(x.id);
  const e_add = waitForCardslabelsAdded(id);
  block(matchDeleteCardslabels(id), function () {
    verifyCardslabelsExists(id);
  });
  updateCardslabels(x.id);
  updateCardslabels(x.id);
  const e_upd = waitForCardslabelsUpdated(id);
  block(matchDeleteCardslabels(id), function () {
    verifyCardslabelsUpdated(id);
  });
  deleteCardslabels(x.id);
  const e_del = waitForCardslabelsDeleted(id);
  block(matchAddCardslabels(id), function () {
    verifyCardslabelsDoesNotExist(id);
  });
});

bthread("CardsmembersvotedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsmembersvoted(x.id);
  const e_add = waitForCardsmembersvotedAdded(id);
  block(matchDeleteCardsmembersvoted(id), function () {
    verifyCardsmembersvotedExists(id);
  });
  updateCardsmembersvoted(x.id);
  updateCardsmembersvoted(x.id);
  const e_upd = waitForCardsmembersvotedUpdated(id);
  block(matchDeleteCardsmembersvoted(id), function () {
    verifyCardsmembersvotedUpdated(id);
  });
  deleteCardsmembersvoted(x.id);
  const e_del = waitForCardsmembersvotedDeleted(id);
  block(matchAddCardsmembersvoted(id), function () {
    verifyCardsmembersvotedDoesNotExist(id);
  });
});

bthread("CardsnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsname(x.id);
  const e_add = waitForCardsnameAdded(id);
  block(matchDeleteCardsname(id), function () {
    verifyCardsnameExists(id);
  });
  updateCardsname(x.id);
  updateCardsname(x.id);
  const e_upd = waitForCardsnameUpdated(id);
  block(matchDeleteCardsname(id), function () {
    verifyCardsnameUpdated(id);
  });
  deleteCardsname(x.id);
  const e_del = waitForCardsnameDeleted(id);
  block(matchAddCardsname(id), function () {
    verifyCardsnameDoesNotExist(id);
  });
});

bthread("CardsposLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardspos(x.id);
  const e_add = waitForCardsposAdded(id);
  block(matchDeleteCardspos(id), function () {
    verifyCardsposExists(id);
  });
  updateCardspos(x.id);
  updateCardspos(x.id);
  const e_upd = waitForCardsposUpdated(id);
  block(matchDeleteCardspos(id), function () {
    verifyCardsposUpdated(id);
  });
  deleteCardspos(x.id);
  const e_del = waitForCardsposDeleted(id);
  block(matchAddCardspos(id), function () {
    verifyCardsposDoesNotExist(id);
  });
});

bthread("CardsstickersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardsstickers(x.id);
  const e_add = waitForCardsstickersAdded(id);
  block(matchDeleteCardsstickers(id), function () {
    verifyCardsstickersExists(id);
  });
  updateCardsstickers(x.id);
  updateCardsstickers(x.id);
  const e_upd = waitForCardsstickersUpdated(id);
  block(matchDeleteCardsstickers(id), function () {
    verifyCardsstickersUpdated(id);
  });
  deleteCardsstickers(x.id);
  const e_del = waitForCardsstickersDeleted(id);
  block(matchAddCardsstickers(id), function () {
    verifyCardsstickersDoesNotExist(id);
  });
});

bthread("CardssubscribedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCardssubscribed(x.id);
  const e_add = waitForCardssubscribedAdded(id);
  block(matchDeleteCardssubscribed(id), function () {
    verifyCardssubscribedExists(id);
  });
  updateCardssubscribed(x.id);
  updateCardssubscribed(x.id);
  const e_upd = waitForCardssubscribedUpdated(id);
  block(matchDeleteCardssubscribed(id), function () {
    verifyCardssubscribedUpdated(id);
  });
  deleteCardssubscribed(x.id);
  const e_del = waitForCardssubscribedDeleted(id);
  block(matchAddCardssubscribed(id), function () {
    verifyCardssubscribedDoesNotExist(id);
  });
});

bthread("ChecklistsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecklists(x.id);
  const e_add = waitForChecklistsAdded(id);
  block(matchDeleteChecklists(id), function () {
    verifyChecklistsExists(id);
  });
  updateChecklists(x.id);
  updateChecklists(x.id);
  const e_upd = waitForChecklistsUpdated(id);
  block(matchDeleteChecklists(id), function () {
    verifyChecklistsUpdated(id);
  });
  deleteChecklists(x.id);
  const e_del = waitForChecklistsDeleted(id);
  block(matchAddChecklists(id), function () {
    verifyChecklistsDoesNotExist(id);
  });
});

bthread("ChecklistscheckitemsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecklistscheckitems(x.id);
  const e_add = waitForChecklistscheckitemsAdded(id);
  block(matchDeleteChecklistscheckitems(id), function () {
    verifyChecklistscheckitemsExists(id);
  });
  updateChecklistscheckitems(x.id);
  updateChecklistscheckitems(x.id);
  const e_upd = waitForChecklistscheckitemsUpdated(id);
  block(matchDeleteChecklistscheckitems(id), function () {
    verifyChecklistscheckitemsUpdated(id);
  });
  deleteChecklistscheckitems(x.id);
  const e_del = waitForChecklistscheckitemsDeleted(id);
  block(matchAddChecklistscheckitems(id), function () {
    verifyChecklistscheckitemsDoesNotExist(id);
  });
});

bthread("ChecklistsidcardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecklistsidcard(x.id);
  const e_add = waitForChecklistsidcardAdded(id);
  block(matchDeleteChecklistsidcard(id), function () {
    verifyChecklistsidcardExists(id);
  });
  updateChecklistsidcard(x.id);
  updateChecklistsidcard(x.id);
  const e_upd = waitForChecklistsidcardUpdated(id);
  block(matchDeleteChecklistsidcard(id), function () {
    verifyChecklistsidcardUpdated(id);
  });
  deleteChecklistsidcard(x.id);
  const e_del = waitForChecklistsidcardDeleted(id);
  block(matchAddChecklistsidcard(id), function () {
    verifyChecklistsidcardDoesNotExist(id);
  });
});

bthread("ChecklistsnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecklistsname(x.id);
  const e_add = waitForChecklistsnameAdded(id);
  block(matchDeleteChecklistsname(id), function () {
    verifyChecklistsnameExists(id);
  });
  updateChecklistsname(x.id);
  updateChecklistsname(x.id);
  const e_upd = waitForChecklistsnameUpdated(id);
  block(matchDeleteChecklistsname(id), function () {
    verifyChecklistsnameUpdated(id);
  });
  deleteChecklistsname(x.id);
  const e_del = waitForChecklistsnameDeleted(id);
  block(matchAddChecklistsname(id), function () {
    verifyChecklistsnameDoesNotExist(id);
  });
});

bthread("ChecklistsposLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecklistspos(x.id);
  const e_add = waitForChecklistsposAdded(id);
  block(matchDeleteChecklistspos(id), function () {
    verifyChecklistsposExists(id);
  });
  updateChecklistspos(x.id);
  updateChecklistspos(x.id);
  const e_upd = waitForChecklistsposUpdated(id);
  block(matchDeleteChecklistspos(id), function () {
    verifyChecklistsposUpdated(id);
  });
  deleteChecklistspos(x.id);
  const e_del = waitForChecklistsposDeleted(id);
  block(matchAddChecklistspos(id), function () {
    verifyChecklistsposDoesNotExist(id);
  });
});

bthread("LabelnamesblueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelnamesblue(x.id);
  const e_add = waitForLabelnamesblueAdded(id);
  block(matchDeleteLabelnamesblue(id), function () {
    verifyLabelnamesblueExists(id);
  });
  updateLabelnamesblue(x.id);
  updateLabelnamesblue(x.id);
  const e_upd = waitForLabelnamesblueUpdated(id);
  block(matchDeleteLabelnamesblue(id), function () {
    verifyLabelnamesblueUpdated(id);
  });
  deleteLabelnamesblue(x.id);
  const e_del = waitForLabelnamesblueDeleted(id);
  block(matchAddLabelnamesblue(id), function () {
    verifyLabelnamesblueDoesNotExist(id);
  });
});

bthread("LabelnamesgreenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelnamesgreen(x.id);
  const e_add = waitForLabelnamesgreenAdded(id);
  block(matchDeleteLabelnamesgreen(id), function () {
    verifyLabelnamesgreenExists(id);
  });
  updateLabelnamesgreen(x.id);
  updateLabelnamesgreen(x.id);
  const e_upd = waitForLabelnamesgreenUpdated(id);
  block(matchDeleteLabelnamesgreen(id), function () {
    verifyLabelnamesgreenUpdated(id);
  });
  deleteLabelnamesgreen(x.id);
  const e_del = waitForLabelnamesgreenDeleted(id);
  block(matchAddLabelnamesgreen(id), function () {
    verifyLabelnamesgreenDoesNotExist(id);
  });
});

bthread("LabelnamesorangeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelnamesorange(x.id);
  const e_add = waitForLabelnamesorangeAdded(id);
  block(matchDeleteLabelnamesorange(id), function () {
    verifyLabelnamesorangeExists(id);
  });
  updateLabelnamesorange(x.id);
  updateLabelnamesorange(x.id);
  const e_upd = waitForLabelnamesorangeUpdated(id);
  block(matchDeleteLabelnamesorange(id), function () {
    verifyLabelnamesorangeUpdated(id);
  });
  deleteLabelnamesorange(x.id);
  const e_del = waitForLabelnamesorangeDeleted(id);
  block(matchAddLabelnamesorange(id), function () {
    verifyLabelnamesorangeDoesNotExist(id);
  });
});

bthread("LabelnamespurpleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelnamespurple(x.id);
  const e_add = waitForLabelnamespurpleAdded(id);
  block(matchDeleteLabelnamespurple(id), function () {
    verifyLabelnamespurpleExists(id);
  });
  updateLabelnamespurple(x.id);
  updateLabelnamespurple(x.id);
  const e_upd = waitForLabelnamespurpleUpdated(id);
  block(matchDeleteLabelnamespurple(id), function () {
    verifyLabelnamespurpleUpdated(id);
  });
  deleteLabelnamespurple(x.id);
  const e_del = waitForLabelnamespurpleDeleted(id);
  block(matchAddLabelnamespurple(id), function () {
    verifyLabelnamespurpleDoesNotExist(id);
  });
});

bthread("LabelnamesredLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelnamesred(x.id);
  const e_add = waitForLabelnamesredAdded(id);
  block(matchDeleteLabelnamesred(id), function () {
    verifyLabelnamesredExists(id);
  });
  updateLabelnamesred(x.id);
  updateLabelnamesred(x.id);
  const e_upd = waitForLabelnamesredUpdated(id);
  block(matchDeleteLabelnamesred(id), function () {
    verifyLabelnamesredUpdated(id);
  });
  deleteLabelnamesred(x.id);
  const e_del = waitForLabelnamesredDeleted(id);
  block(matchAddLabelnamesred(id), function () {
    verifyLabelnamesredDoesNotExist(id);
  });
});

bthread("LabelnamesyellowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelnamesyellow(x.id);
  const e_add = waitForLabelnamesyellowAdded(id);
  block(matchDeleteLabelnamesyellow(id), function () {
    verifyLabelnamesyellowExists(id);
  });
  updateLabelnamesyellow(x.id);
  updateLabelnamesyellow(x.id);
  const e_upd = waitForLabelnamesyellowUpdated(id);
  block(matchDeleteLabelnamesyellow(id), function () {
    verifyLabelnamesyellowUpdated(id);
  });
  deleteLabelnamesyellow(x.id);
  const e_del = waitForLabelnamesyellowDeleted(id);
  block(matchAddLabelnamesyellow(id), function () {
    verifyLabelnamesyellowDoesNotExist(id);
  });
});

bthread("LabelsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabels(x.id);
  const e_add = waitForLabelsAdded(id);
  block(matchDeleteLabels(id), function () {
    verifyLabelsExists(id);
  });
  updateLabels(x.id);
  updateLabels(x.id);
  const e_upd = waitForLabelsUpdated(id);
  block(matchDeleteLabels(id), function () {
    verifyLabelsUpdated(id);
  });
  deleteLabels(x.id);
  const e_del = waitForLabelsDeleted(id);
  block(matchAddLabels(id), function () {
    verifyLabelsDoesNotExist(id);
  });
});

bthread("LabelscolorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelscolor(x.id);
  const e_add = waitForLabelscolorAdded(id);
  block(matchDeleteLabelscolor(id), function () {
    verifyLabelscolorExists(id);
  });
  updateLabelscolor(x.id);
  updateLabelscolor(x.id);
  const e_upd = waitForLabelscolorUpdated(id);
  block(matchDeleteLabelscolor(id), function () {
    verifyLabelscolorUpdated(id);
  });
  deleteLabelscolor(x.id);
  const e_del = waitForLabelscolorDeleted(id);
  block(matchAddLabelscolor(id), function () {
    verifyLabelscolorDoesNotExist(id);
  });
});

bthread("LabelsnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabelsname(x.id);
  const e_add = waitForLabelsnameAdded(id);
  block(matchDeleteLabelsname(id), function () {
    verifyLabelsnameExists(id);
  });
  updateLabelsname(x.id);
  updateLabelsname(x.id);
  const e_upd = waitForLabelsnameUpdated(id);
  block(matchDeleteLabelsname(id), function () {
    verifyLabelsnameUpdated(id);
  });
  deleteLabelsname(x.id);
  const e_del = waitForLabelsnameDeleted(id);
  block(matchAddLabelsname(id), function () {
    verifyLabelsnameDoesNotExist(id);
  });
});

bthread("ListsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLists(x.id);
  const e_add = waitForListsAdded(id);
  block(matchDeleteLists(id), function () {
    verifyListsExists(id);
  });
  updateLists(x.id);
  updateLists(x.id);
  const e_upd = waitForListsUpdated(id);
  block(matchDeleteLists(id), function () {
    verifyListsUpdated(id);
  });
  deleteLists(x.id);
  const e_del = waitForListsDeleted(id);
  block(matchAddLists(id), function () {
    verifyListsDoesNotExist(id);
  });
});

bthread("ListscardsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListscards(x.id);
  const e_add = waitForListscardsAdded(id);
  block(matchDeleteListscards(id), function () {
    verifyListscardsExists(id);
  });
  updateListscards(x.id);
  updateListscards(x.id);
  const e_upd = waitForListscardsUpdated(id);
  block(matchDeleteListscards(id), function () {
    verifyListscardsUpdated(id);
  });
  deleteListscards(x.id);
  const e_del = waitForListscardsDeleted(id);
  block(matchAddListscards(id), function () {
    verifyListscardsDoesNotExist(id);
  });
});

bthread("ListsclosedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListsclosed(x.id);
  const e_add = waitForListsclosedAdded(id);
  block(matchDeleteListsclosed(id), function () {
    verifyListsclosedExists(id);
  });
  updateListsclosed(x.id);
  updateListsclosed(x.id);
  const e_upd = waitForListsclosedUpdated(id);
  block(matchDeleteListsclosed(id), function () {
    verifyListsclosedUpdated(id);
  });
  deleteListsclosed(x.id);
  const e_del = waitForListsclosedDeleted(id);
  block(matchAddListsclosed(id), function () {
    verifyListsclosedDoesNotExist(id);
  });
});

bthread("ListsidboardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListsidboard(x.id);
  const e_add = waitForListsidboardAdded(id);
  block(matchDeleteListsidboard(id), function () {
    verifyListsidboardExists(id);
  });
  updateListsidboard(x.id);
  updateListsidboard(x.id);
  const e_upd = waitForListsidboardUpdated(id);
  block(matchDeleteListsidboard(id), function () {
    verifyListsidboardUpdated(id);
  });
  deleteListsidboard(x.id);
  const e_del = waitForListsidboardDeleted(id);
  block(matchAddListsidboard(id), function () {
    verifyListsidboardDoesNotExist(id);
  });
});

bthread("ListsmoveallcardsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListsmoveallcards(x.id);
  const e_add = waitForListsmoveallcardsAdded(id);
  block(matchDeleteListsmoveallcards(id), function () {
    verifyListsmoveallcardsExists(id);
  });
  updateListsmoveallcards(x.id);
  updateListsmoveallcards(x.id);
  const e_upd = waitForListsmoveallcardsUpdated(id);
  block(matchDeleteListsmoveallcards(id), function () {
    verifyListsmoveallcardsUpdated(id);
  });
  deleteListsmoveallcards(x.id);
  const e_del = waitForListsmoveallcardsDeleted(id);
  block(matchAddListsmoveallcards(id), function () {
    verifyListsmoveallcardsDoesNotExist(id);
  });
});

bthread("ListsnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListsname(x.id);
  const e_add = waitForListsnameAdded(id);
  block(matchDeleteListsname(id), function () {
    verifyListsnameExists(id);
  });
  updateListsname(x.id);
  updateListsname(x.id);
  const e_upd = waitForListsnameUpdated(id);
  block(matchDeleteListsname(id), function () {
    verifyListsnameUpdated(id);
  });
  deleteListsname(x.id);
  const e_del = waitForListsnameDeleted(id);
  block(matchAddListsname(id), function () {
    verifyListsnameDoesNotExist(id);
  });
});

bthread("ListsposLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListspos(x.id);
  const e_add = waitForListsposAdded(id);
  block(matchDeleteListspos(id), function () {
    verifyListsposExists(id);
  });
  updateListspos(x.id);
  updateListspos(x.id);
  const e_upd = waitForListsposUpdated(id);
  block(matchDeleteListspos(id), function () {
    verifyListsposUpdated(id);
  });
  deleteListspos(x.id);
  const e_del = waitForListsposDeleted(id);
  block(matchAddListspos(id), function () {
    verifyListsposDoesNotExist(id);
  });
});

bthread("ListssubscribedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addListssubscribed(x.id);
  const e_add = waitForListssubscribedAdded(id);
  block(matchDeleteListssubscribed(id), function () {
    verifyListssubscribedExists(id);
  });
  updateListssubscribed(x.id);
  updateListssubscribed(x.id);
  const e_upd = waitForListssubscribedUpdated(id);
  block(matchDeleteListssubscribed(id), function () {
    verifyListssubscribedUpdated(id);
  });
  deleteListssubscribed(x.id);
  const e_del = waitForListssubscribedDeleted(id);
  block(matchAddListssubscribed(id), function () {
    verifyListssubscribedDoesNotExist(id);
  });
});

bthread("MembersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembers(x.id);
  const e_add = waitForMembersAdded(id);
  block(matchDeleteMembers(id), function () {
    verifyMembersExists(id);
  });
  updateMembers(x.id);
  updateMembers(x.id);
  const e_upd = waitForMembersUpdated(id);
  block(matchDeleteMembers(id), function () {
    verifyMembersUpdated(id);
  });
  deleteMembers(x.id);
  const e_del = waitForMembersDeleted(id);
  block(matchAddMembers(id), function () {
    verifyMembersDoesNotExist(id);
  });
});

bthread("MembersavatarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersavatar(x.id);
  const e_add = waitForMembersavatarAdded(id);
  block(matchDeleteMembersavatar(id), function () {
    verifyMembersavatarExists(id);
  });
  updateMembersavatar(x.id);
  updateMembersavatar(x.id);
  const e_upd = waitForMembersavatarUpdated(id);
  block(matchDeleteMembersavatar(id), function () {
    verifyMembersavatarUpdated(id);
  });
  deleteMembersavatar(x.id);
  const e_del = waitForMembersavatarDeleted(id);
  block(matchAddMembersavatar(id), function () {
    verifyMembersavatarDoesNotExist(id);
  });
});

bthread("MembersavatarsourceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersavatarsource(x.id);
  const e_add = waitForMembersavatarsourceAdded(id);
  block(matchDeleteMembersavatarsource(id), function () {
    verifyMembersavatarsourceExists(id);
  });
  updateMembersavatarsource(x.id);
  updateMembersavatarsource(x.id);
  const e_upd = waitForMembersavatarsourceUpdated(id);
  block(matchDeleteMembersavatarsource(id), function () {
    verifyMembersavatarsourceUpdated(id);
  });
  deleteMembersavatarsource(x.id);
  const e_del = waitForMembersavatarsourceDeleted(id);
  block(matchAddMembersavatarsource(id), function () {
    verifyMembersavatarsourceDoesNotExist(id);
  });
});

bthread("MembersbioLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersbio(x.id);
  const e_add = waitForMembersbioAdded(id);
  block(matchDeleteMembersbio(id), function () {
    verifyMembersbioExists(id);
  });
  updateMembersbio(x.id);
  updateMembersbio(x.id);
  const e_upd = waitForMembersbioUpdated(id);
  block(matchDeleteMembersbio(id), function () {
    verifyMembersbioUpdated(id);
  });
  deleteMembersbio(x.id);
  const e_del = waitForMembersbioDeleted(id);
  block(matchAddMembersbio(id), function () {
    verifyMembersbioDoesNotExist(id);
  });
});

bthread("MembersboardbackgroundsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersboardbackgrounds(x.id);
  const e_add = waitForMembersboardbackgroundsAdded(id);
  block(matchDeleteMembersboardbackgrounds(id), function () {
    verifyMembersboardbackgroundsExists(id);
  });
  updateMembersboardbackgrounds(x.id);
  updateMembersboardbackgrounds(x.id);
  const e_upd = waitForMembersboardbackgroundsUpdated(id);
  block(matchDeleteMembersboardbackgrounds(id), function () {
    verifyMembersboardbackgroundsUpdated(id);
  });
  deleteMembersboardbackgrounds(x.id);
  const e_del = waitForMembersboardbackgroundsDeleted(id);
  block(matchAddMembersboardbackgrounds(id), function () {
    verifyMembersboardbackgroundsDoesNotExist(id);
  });
});

bthread("MembersboardstarsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersboardstars(x.id);
  const e_add = waitForMembersboardstarsAdded(id);
  block(matchDeleteMembersboardstars(id), function () {
    verifyMembersboardstarsExists(id);
  });
  updateMembersboardstars(x.id);
  updateMembersboardstars(x.id);
  const e_upd = waitForMembersboardstarsUpdated(id);
  block(matchDeleteMembersboardstars(id), function () {
    verifyMembersboardstarsUpdated(id);
  });
  deleteMembersboardstars(x.id);
  const e_del = waitForMembersboardstarsDeleted(id);
  block(matchAddMembersboardstars(id), function () {
    verifyMembersboardstarsDoesNotExist(id);
  });
});

bthread("MembersboardstarsidboardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersboardstarsidboard(x.id);
  const e_add = waitForMembersboardstarsidboardAdded(id);
  block(matchDeleteMembersboardstarsidboard(id), function () {
    verifyMembersboardstarsidboardExists(id);
  });
  updateMembersboardstarsidboard(x.id);
  updateMembersboardstarsidboard(x.id);
  const e_upd = waitForMembersboardstarsidboardUpdated(id);
  block(matchDeleteMembersboardstarsidboard(id), function () {
    verifyMembersboardstarsidboardUpdated(id);
  });
  deleteMembersboardstarsidboard(x.id);
  const e_del = waitForMembersboardstarsidboardDeleted(id);
  block(matchAddMembersboardstarsidboard(id), function () {
    verifyMembersboardstarsidboardDoesNotExist(id);
  });
});

bthread("MembersboardstarsposLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersboardstarspos(x.id);
  const e_add = waitForMembersboardstarsposAdded(id);
  block(matchDeleteMembersboardstarspos(id), function () {
    verifyMembersboardstarsposExists(id);
  });
  updateMembersboardstarspos(x.id);
  updateMembersboardstarspos(x.id);
  const e_upd = waitForMembersboardstarsposUpdated(id);
  block(matchDeleteMembersboardstarspos(id), function () {
    verifyMembersboardstarsposUpdated(id);
  });
  deleteMembersboardstarspos(x.id);
  const e_del = waitForMembersboardstarsposDeleted(id);
  block(matchAddMembersboardstarspos(id), function () {
    verifyMembersboardstarsposDoesNotExist(id);
  });
});

bthread("MemberscustomboardbackgroundsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberscustomboardbackgrounds(x.id);
  const e_add = waitForMemberscustomboardbackgroundsAdded(id);
  block(matchDeleteMemberscustomboardbackgrounds(id), function () {
    verifyMemberscustomboardbackgroundsExists(id);
  });
  updateMemberscustomboardbackgrounds(x.id);
  updateMemberscustomboardbackgrounds(x.id);
  const e_upd = waitForMemberscustomboardbackgroundsUpdated(id);
  block(matchDeleteMemberscustomboardbackgrounds(id), function () {
    verifyMemberscustomboardbackgroundsUpdated(id);
  });
  deleteMemberscustomboardbackgrounds(x.id);
  const e_del = waitForMemberscustomboardbackgroundsDeleted(id);
  block(matchAddMemberscustomboardbackgrounds(id), function () {
    verifyMemberscustomboardbackgroundsDoesNotExist(id);
  });
});

bthread("MemberscustomemojiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberscustomemoji(x.id);
  const e_add = waitForMemberscustomemojiAdded(id);
  block(matchDeleteMemberscustomemoji(id), function () {
    verifyMemberscustomemojiExists(id);
  });
  updateMemberscustomemoji(x.id);
  updateMemberscustomemoji(x.id);
  const e_upd = waitForMemberscustomemojiUpdated(id);
  block(matchDeleteMemberscustomemoji(id), function () {
    verifyMemberscustomemojiUpdated(id);
  });
  deleteMemberscustomemoji(x.id);
  const e_del = waitForMemberscustomemojiDeleted(id);
  block(matchAddMemberscustomemoji(id), function () {
    verifyMemberscustomemojiDoesNotExist(id);
  });
});

bthread("MemberscustomstickersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberscustomstickers(x.id);
  const e_add = waitForMemberscustomstickersAdded(id);
  block(matchDeleteMemberscustomstickers(id), function () {
    verifyMemberscustomstickersExists(id);
  });
  updateMemberscustomstickers(x.id);
  updateMemberscustomstickers(x.id);
  const e_upd = waitForMemberscustomstickersUpdated(id);
  block(matchDeleteMemberscustomstickers(id), function () {
    verifyMemberscustomstickersUpdated(id);
  });
  deleteMemberscustomstickers(x.id);
  const e_del = waitForMemberscustomstickersDeleted(id);
  block(matchAddMemberscustomstickers(id), function () {
    verifyMemberscustomstickersDoesNotExist(id);
  });
});

bthread("MembersfullnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersfullname(x.id);
  const e_add = waitForMembersfullnameAdded(id);
  block(matchDeleteMembersfullname(id), function () {
    verifyMembersfullnameExists(id);
  });
  updateMembersfullname(x.id);
  updateMembersfullname(x.id);
  const e_upd = waitForMembersfullnameUpdated(id);
  block(matchDeleteMembersfullname(id), function () {
    verifyMembersfullnameUpdated(id);
  });
  deleteMembersfullname(x.id);
  const e_del = waitForMembersfullnameDeleted(id);
  block(matchAddMembersfullname(id), function () {
    verifyMembersfullnameDoesNotExist(id);
  });
});

bthread("MembersinitialsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersinitials(x.id);
  const e_add = waitForMembersinitialsAdded(id);
  block(matchDeleteMembersinitials(id), function () {
    verifyMembersinitialsExists(id);
  });
  updateMembersinitials(x.id);
  updateMembersinitials(x.id);
  const e_upd = waitForMembersinitialsUpdated(id);
  block(matchDeleteMembersinitials(id), function () {
    verifyMembersinitialsUpdated(id);
  });
  deleteMembersinitials(x.id);
  const e_del = waitForMembersinitialsDeleted(id);
  block(matchAddMembersinitials(id), function () {
    verifyMembersinitialsDoesNotExist(id);
  });
});

bthread("MembersonetimemessagesdismissedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersonetimemessagesdismissed(x.id);
  const e_add = waitForMembersonetimemessagesdismissedAdded(id);
  block(matchDeleteMembersonetimemessagesdismissed(id), function () {
    verifyMembersonetimemessagesdismissedExists(id);
  });
  updateMembersonetimemessagesdismissed(x.id);
  updateMembersonetimemessagesdismissed(x.id);
  const e_upd = waitForMembersonetimemessagesdismissedUpdated(id);
  block(matchDeleteMembersonetimemessagesdismissed(id), function () {
    verifyMembersonetimemessagesdismissedUpdated(id);
  });
  deleteMembersonetimemessagesdismissed(x.id);
  const e_del = waitForMembersonetimemessagesdismissedDeleted(id);
  block(matchAddMembersonetimemessagesdismissed(id), function () {
    verifyMembersonetimemessagesdismissedDoesNotExist(id);
  });
});

bthread("MemberssavedsearchesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberssavedsearches(x.id);
  const e_add = waitForMemberssavedsearchesAdded(id);
  block(matchDeleteMemberssavedsearches(id), function () {
    verifyMemberssavedsearchesExists(id);
  });
  updateMemberssavedsearches(x.id);
  updateMemberssavedsearches(x.id);
  const e_upd = waitForMemberssavedsearchesUpdated(id);
  block(matchDeleteMemberssavedsearches(id), function () {
    verifyMemberssavedsearchesUpdated(id);
  });
  deleteMemberssavedsearches(x.id);
  const e_del = waitForMemberssavedsearchesDeleted(id);
  block(matchAddMemberssavedsearches(id), function () {
    verifyMemberssavedsearchesDoesNotExist(id);
  });
});

bthread("MemberssavedsearchesnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberssavedsearchesname(x.id);
  const e_add = waitForMemberssavedsearchesnameAdded(id);
  block(matchDeleteMemberssavedsearchesname(id), function () {
    verifyMemberssavedsearchesnameExists(id);
  });
  updateMemberssavedsearchesname(x.id);
  updateMemberssavedsearchesname(x.id);
  const e_upd = waitForMemberssavedsearchesnameUpdated(id);
  block(matchDeleteMemberssavedsearchesname(id), function () {
    verifyMemberssavedsearchesnameUpdated(id);
  });
  deleteMemberssavedsearchesname(x.id);
  const e_del = waitForMemberssavedsearchesnameDeleted(id);
  block(matchAddMemberssavedsearchesname(id), function () {
    verifyMemberssavedsearchesnameDoesNotExist(id);
  });
});

bthread("MemberssavedsearchesposLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberssavedsearchespos(x.id);
  const e_add = waitForMemberssavedsearchesposAdded(id);
  block(matchDeleteMemberssavedsearchespos(id), function () {
    verifyMemberssavedsearchesposExists(id);
  });
  updateMemberssavedsearchespos(x.id);
  updateMemberssavedsearchespos(x.id);
  const e_upd = waitForMemberssavedsearchesposUpdated(id);
  block(matchDeleteMemberssavedsearchespos(id), function () {
    verifyMemberssavedsearchesposUpdated(id);
  });
  deleteMemberssavedsearchespos(x.id);
  const e_del = waitForMemberssavedsearchesposDeleted(id);
  block(matchAddMemberssavedsearchespos(id), function () {
    verifyMemberssavedsearchesposDoesNotExist(id);
  });
});

bthread("MemberssavedsearchesqueryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMemberssavedsearchesquery(x.id);
  const e_add = waitForMemberssavedsearchesqueryAdded(id);
  block(matchDeleteMemberssavedsearchesquery(id), function () {
    verifyMemberssavedsearchesqueryExists(id);
  });
  updateMemberssavedsearchesquery(x.id);
  updateMemberssavedsearchesquery(x.id);
  const e_upd = waitForMemberssavedsearchesqueryUpdated(id);
  block(matchDeleteMemberssavedsearchesquery(id), function () {
    verifyMemberssavedsearchesqueryUpdated(id);
  });
  deleteMemberssavedsearchesquery(x.id);
  const e_del = waitForMemberssavedsearchesqueryDeleted(id);
  block(matchAddMemberssavedsearchesquery(id), function () {
    verifyMemberssavedsearchesqueryDoesNotExist(id);
  });
});

bthread("MembersusernameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembersusername(x.id);
  const e_add = waitForMembersusernameAdded(id);
  block(matchDeleteMembersusername(id), function () {
    verifyMembersusernameExists(id);
  });
  updateMembersusername(x.id);
  updateMembersusername(x.id);
  const e_upd = waitForMembersusernameUpdated(id);
  block(matchDeleteMembersusername(id), function () {
    verifyMembersusernameUpdated(id);
  });
  deleteMembersusername(x.id);
  const e_del = waitForMembersusernameDeleted(id);
  block(matchAddMembersusername(id), function () {
    verifyMembersusernameDoesNotExist(id);
  });
});

bthread("MyprefsemailpositionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsemailposition(x.id);
  const e_add = waitForMyprefsemailpositionAdded(id);
  block(matchDeleteMyprefsemailposition(id), function () {
    verifyMyprefsemailpositionExists(id);
  });
  updateMyprefsemailposition(x.id);
  updateMyprefsemailposition(x.id);
  const e_upd = waitForMyprefsemailpositionUpdated(id);
  block(matchDeleteMyprefsemailposition(id), function () {
    verifyMyprefsemailpositionUpdated(id);
  });
  deleteMyprefsemailposition(x.id);
  const e_del = waitForMyprefsemailpositionDeleted(id);
  block(matchAddMyprefsemailposition(id), function () {
    verifyMyprefsemailpositionDoesNotExist(id);
  });
});

bthread("MyprefsidemaillistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsidemaillist(x.id);
  const e_add = waitForMyprefsidemaillistAdded(id);
  block(matchDeleteMyprefsidemaillist(id), function () {
    verifyMyprefsidemaillistExists(id);
  });
  updateMyprefsidemaillist(x.id);
  updateMyprefsidemaillist(x.id);
  const e_upd = waitForMyprefsidemaillistUpdated(id);
  block(matchDeleteMyprefsidemaillist(id), function () {
    verifyMyprefsidemaillistUpdated(id);
  });
  deleteMyprefsidemaillist(x.id);
  const e_del = waitForMyprefsidemaillistDeleted(id);
  block(matchAddMyprefsidemaillist(id), function () {
    verifyMyprefsidemaillistDoesNotExist(id);
  });
});

bthread("MyprefsshowlistguideLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsshowlistguide(x.id);
  const e_add = waitForMyprefsshowlistguideAdded(id);
  block(matchDeleteMyprefsshowlistguide(id), function () {
    verifyMyprefsshowlistguideExists(id);
  });
  updateMyprefsshowlistguide(x.id);
  updateMyprefsshowlistguide(x.id);
  const e_upd = waitForMyprefsshowlistguideUpdated(id);
  block(matchDeleteMyprefsshowlistguide(id), function () {
    verifyMyprefsshowlistguideUpdated(id);
  });
  deleteMyprefsshowlistguide(x.id);
  const e_del = waitForMyprefsshowlistguideDeleted(id);
  block(matchAddMyprefsshowlistguide(id), function () {
    verifyMyprefsshowlistguideDoesNotExist(id);
  });
});

bthread("MyprefsshowsidebarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsshowsidebar(x.id);
  const e_add = waitForMyprefsshowsidebarAdded(id);
  block(matchDeleteMyprefsshowsidebar(id), function () {
    verifyMyprefsshowsidebarExists(id);
  });
  updateMyprefsshowsidebar(x.id);
  updateMyprefsshowsidebar(x.id);
  const e_upd = waitForMyprefsshowsidebarUpdated(id);
  block(matchDeleteMyprefsshowsidebar(id), function () {
    verifyMyprefsshowsidebarUpdated(id);
  });
  deleteMyprefsshowsidebar(x.id);
  const e_del = waitForMyprefsshowsidebarDeleted(id);
  block(matchAddMyprefsshowsidebar(id), function () {
    verifyMyprefsshowsidebarDoesNotExist(id);
  });
});

bthread("MyprefsshowsidebaractivityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsshowsidebaractivity(x.id);
  const e_add = waitForMyprefsshowsidebaractivityAdded(id);
  block(matchDeleteMyprefsshowsidebaractivity(id), function () {
    verifyMyprefsshowsidebaractivityExists(id);
  });
  updateMyprefsshowsidebaractivity(x.id);
  updateMyprefsshowsidebaractivity(x.id);
  const e_upd = waitForMyprefsshowsidebaractivityUpdated(id);
  block(matchDeleteMyprefsshowsidebaractivity(id), function () {
    verifyMyprefsshowsidebaractivityUpdated(id);
  });
  deleteMyprefsshowsidebaractivity(x.id);
  const e_del = waitForMyprefsshowsidebaractivityDeleted(id);
  block(matchAddMyprefsshowsidebaractivity(id), function () {
    verifyMyprefsshowsidebaractivityDoesNotExist(id);
  });
});

bthread("MyprefsshowsidebarboardactionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsshowsidebarboardactions(x.id);
  const e_add = waitForMyprefsshowsidebarboardactionsAdded(id);
  block(matchDeleteMyprefsshowsidebarboardactions(id), function () {
    verifyMyprefsshowsidebarboardactionsExists(id);
  });
  updateMyprefsshowsidebarboardactions(x.id);
  updateMyprefsshowsidebarboardactions(x.id);
  const e_upd = waitForMyprefsshowsidebarboardactionsUpdated(id);
  block(matchDeleteMyprefsshowsidebarboardactions(id), function () {
    verifyMyprefsshowsidebarboardactionsUpdated(id);
  });
  deleteMyprefsshowsidebarboardactions(x.id);
  const e_del = waitForMyprefsshowsidebarboardactionsDeleted(id);
  block(matchAddMyprefsshowsidebarboardactions(id), function () {
    verifyMyprefsshowsidebarboardactionsDoesNotExist(id);
  });
});

bthread("MyprefsshowsidebarmembersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMyprefsshowsidebarmembers(x.id);
  const e_add = waitForMyprefsshowsidebarmembersAdded(id);
  block(matchDeleteMyprefsshowsidebarmembers(id), function () {
    verifyMyprefsshowsidebarmembersExists(id);
  });
  updateMyprefsshowsidebarmembers(x.id);
  updateMyprefsshowsidebarmembers(x.id);
  const e_upd = waitForMyprefsshowsidebarmembersUpdated(id);
  block(matchDeleteMyprefsshowsidebarmembers(id), function () {
    verifyMyprefsshowsidebarmembersUpdated(id);
  });
  deleteMyprefsshowsidebarmembers(x.id);
  const e_del = waitForMyprefsshowsidebarmembersDeleted(id);
  block(matchAddMyprefsshowsidebarmembers(id), function () {
    verifyMyprefsshowsidebarmembersDoesNotExist(id);
  });
});

bthread("NotificationsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotifications(x.id);
  const e_add = waitForNotificationsAdded(id);
  block(matchDeleteNotifications(id), function () {
    verifyNotificationsExists(id);
  });
  updateNotifications(x.id);
  updateNotifications(x.id);
  const e_upd = waitForNotificationsUpdated(id);
  block(matchDeleteNotifications(id), function () {
    verifyNotificationsUpdated(id);
  });
  deleteNotifications(x.id);
  const e_del = waitForNotificationsDeleted(id);
  block(matchAddNotifications(id), function () {
    verifyNotificationsDoesNotExist(id);
  });
});

bthread("NotificationsunreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotificationsunread(x.id);
  const e_add = waitForNotificationsunreadAdded(id);
  block(matchDeleteNotificationsunread(id), function () {
    verifyNotificationsunreadExists(id);
  });
  updateNotificationsunread(x.id);
  updateNotificationsunread(x.id);
  const e_upd = waitForNotificationsunreadUpdated(id);
  block(matchDeleteNotificationsunread(id), function () {
    verifyNotificationsunreadUpdated(id);
  });
  deleteNotificationsunread(x.id);
  const e_del = waitForNotificationsunreadDeleted(id);
  block(matchAddNotificationsunread(id), function () {
    verifyNotificationsunreadDoesNotExist(id);
  });
});

bthread("OrganizationsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizations(x.id);
  const e_add = waitForOrganizationsAdded(id);
  block(matchDeleteOrganizations(id), function () {
    verifyOrganizationsExists(id);
  });
  updateOrganizations(x.id);
  updateOrganizations(x.id);
  const e_upd = waitForOrganizationsUpdated(id);
  block(matchDeleteOrganizations(id), function () {
    verifyOrganizationsUpdated(id);
  });
  deleteOrganizations(x.id);
  const e_del = waitForOrganizationsDeleted(id);
  block(matchAddOrganizations(id), function () {
    verifyOrganizationsDoesNotExist(id);
  });
});

bthread("OrganizationsdescLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsdesc(x.id);
  const e_add = waitForOrganizationsdescAdded(id);
  block(matchDeleteOrganizationsdesc(id), function () {
    verifyOrganizationsdescExists(id);
  });
  updateOrganizationsdesc(x.id);
  updateOrganizationsdesc(x.id);
  const e_upd = waitForOrganizationsdescUpdated(id);
  block(matchDeleteOrganizationsdesc(id), function () {
    verifyOrganizationsdescUpdated(id);
  });
  deleteOrganizationsdesc(x.id);
  const e_del = waitForOrganizationsdescDeleted(id);
  block(matchAddOrganizationsdesc(id), function () {
    verifyOrganizationsdescDoesNotExist(id);
  });
});

bthread("OrganizationsdisplaynameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsdisplayname(x.id);
  const e_add = waitForOrganizationsdisplaynameAdded(id);
  block(matchDeleteOrganizationsdisplayname(id), function () {
    verifyOrganizationsdisplaynameExists(id);
  });
  updateOrganizationsdisplayname(x.id);
  updateOrganizationsdisplayname(x.id);
  const e_upd = waitForOrganizationsdisplaynameUpdated(id);
  block(matchDeleteOrganizationsdisplayname(id), function () {
    verifyOrganizationsdisplaynameUpdated(id);
  });
  deleteOrganizationsdisplayname(x.id);
  const e_del = waitForOrganizationsdisplaynameDeleted(id);
  block(matchAddOrganizationsdisplayname(id), function () {
    verifyOrganizationsdisplaynameDoesNotExist(id);
  });
});

bthread("OrganizationslogoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationslogo(x.id);
  const e_add = waitForOrganizationslogoAdded(id);
  block(matchDeleteOrganizationslogo(id), function () {
    verifyOrganizationslogoExists(id);
  });
  updateOrganizationslogo(x.id);
  updateOrganizationslogo(x.id);
  const e_upd = waitForOrganizationslogoUpdated(id);
  block(matchDeleteOrganizationslogo(id), function () {
    verifyOrganizationslogoUpdated(id);
  });
  deleteOrganizationslogo(x.id);
  const e_del = waitForOrganizationslogoDeleted(id);
  block(matchAddOrganizationslogo(id), function () {
    verifyOrganizationslogoDoesNotExist(id);
  });
});

bthread("OrganizationsmembersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsmembers(x.id);
  const e_add = waitForOrganizationsmembersAdded(id);
  block(matchDeleteOrganizationsmembers(id), function () {
    verifyOrganizationsmembersExists(id);
  });
  updateOrganizationsmembers(x.id);
  updateOrganizationsmembers(x.id);
  const e_upd = waitForOrganizationsmembersUpdated(id);
  block(matchDeleteOrganizationsmembers(id), function () {
    verifyOrganizationsmembersUpdated(id);
  });
  deleteOrganizationsmembers(x.id);
  const e_del = waitForOrganizationsmembersDeleted(id);
  block(matchAddOrganizationsmembers(id), function () {
    verifyOrganizationsmembersDoesNotExist(id);
  });
});

bthread("OrganizationsmembersdeactivatedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsmembersdeactivated(x.id);
  const e_add = waitForOrganizationsmembersdeactivatedAdded(id);
  block(matchDeleteOrganizationsmembersdeactivated(id), function () {
    verifyOrganizationsmembersdeactivatedExists(id);
  });
  updateOrganizationsmembersdeactivated(x.id);
  updateOrganizationsmembersdeactivated(x.id);
  const e_upd = waitForOrganizationsmembersdeactivatedUpdated(id);
  block(matchDeleteOrganizationsmembersdeactivated(id), function () {
    verifyOrganizationsmembersdeactivatedUpdated(id);
  });
  deleteOrganizationsmembersdeactivated(x.id);
  const e_del = waitForOrganizationsmembersdeactivatedDeleted(id);
  block(matchAddOrganizationsmembersdeactivated(id), function () {
    verifyOrganizationsmembersdeactivatedDoesNotExist(id);
  });
});

bthread("OrganizationsmembershipsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsmemberships(x.id);
  const e_add = waitForOrganizationsmembershipsAdded(id);
  block(matchDeleteOrganizationsmemberships(id), function () {
    verifyOrganizationsmembershipsExists(id);
  });
  updateOrganizationsmemberships(x.id);
  updateOrganizationsmemberships(x.id);
  const e_upd = waitForOrganizationsmembershipsUpdated(id);
  block(matchDeleteOrganizationsmemberships(id), function () {
    verifyOrganizationsmembershipsUpdated(id);
  });
  deleteOrganizationsmemberships(x.id);
  const e_del = waitForOrganizationsmembershipsDeleted(id);
  block(matchAddOrganizationsmemberships(id), function () {
    verifyOrganizationsmembershipsDoesNotExist(id);
  });
});

bthread("OrganizationsnameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsname(x.id);
  const e_add = waitForOrganizationsnameAdded(id);
  block(matchDeleteOrganizationsname(id), function () {
    verifyOrganizationsnameExists(id);
  });
  updateOrganizationsname(x.id);
  updateOrganizationsname(x.id);
  const e_upd = waitForOrganizationsnameUpdated(id);
  block(matchDeleteOrganizationsname(id), function () {
    verifyOrganizationsnameUpdated(id);
  });
  deleteOrganizationsname(x.id);
  const e_del = waitForOrganizationsnameDeleted(id);
  block(matchAddOrganizationsname(id), function () {
    verifyOrganizationsnameDoesNotExist(id);
  });
});

bthread("OrganizationswebsiteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationswebsite(x.id);
  const e_add = waitForOrganizationswebsiteAdded(id);
  block(matchDeleteOrganizationswebsite(id), function () {
    verifyOrganizationswebsiteExists(id);
  });
  updateOrganizationswebsite(x.id);
  updateOrganizationswebsite(x.id);
  const e_upd = waitForOrganizationswebsiteUpdated(id);
  block(matchDeleteOrganizationswebsite(id), function () {
    verifyOrganizationswebsiteUpdated(id);
  });
  deleteOrganizationswebsite(x.id);
  const e_del = waitForOrganizationswebsiteDeleted(id);
  block(matchAddOrganizationswebsite(id), function () {
    verifyOrganizationswebsiteDoesNotExist(id);
  });
});

bthread("PrefsassociateddomainLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsassociateddomain(x.id);
  const e_add = waitForPrefsassociateddomainAdded(id);
  block(matchDeletePrefsassociateddomain(id), function () {
    verifyPrefsassociateddomainExists(id);
  });
  updatePrefsassociateddomain(x.id);
  updatePrefsassociateddomain(x.id);
  const e_upd = waitForPrefsassociateddomainUpdated(id);
  block(matchDeletePrefsassociateddomain(id), function () {
    verifyPrefsassociateddomainUpdated(id);
  });
  deletePrefsassociateddomain(x.id);
  const e_del = waitForPrefsassociateddomainDeleted(id);
  block(matchAddPrefsassociateddomain(id), function () {
    verifyPrefsassociateddomainDoesNotExist(id);
  });
});

bthread("PrefsbackgroundLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsbackground(x.id);
  const e_add = waitForPrefsbackgroundAdded(id);
  block(matchDeletePrefsbackground(id), function () {
    verifyPrefsbackgroundExists(id);
  });
  updatePrefsbackground(x.id);
  updatePrefsbackground(x.id);
  const e_upd = waitForPrefsbackgroundUpdated(id);
  block(matchDeletePrefsbackground(id), function () {
    verifyPrefsbackgroundUpdated(id);
  });
  deletePrefsbackground(x.id);
  const e_del = waitForPrefsbackgroundDeleted(id);
  block(matchAddPrefsbackground(id), function () {
    verifyPrefsbackgroundDoesNotExist(id);
  });
});

bthread("PrefsboardvisibilityrestrictLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsboardvisibilityrestrict(x.id);
  const e_add = waitForPrefsboardvisibilityrestrictAdded(id);
  block(matchDeletePrefsboardvisibilityrestrict(id), function () {
    verifyPrefsboardvisibilityrestrictExists(id);
  });
  updatePrefsboardvisibilityrestrict(x.id);
  updatePrefsboardvisibilityrestrict(x.id);
  const e_upd = waitForPrefsboardvisibilityrestrictUpdated(id);
  block(matchDeletePrefsboardvisibilityrestrict(id), function () {
    verifyPrefsboardvisibilityrestrictUpdated(id);
  });
  deletePrefsboardvisibilityrestrict(x.id);
  const e_del = waitForPrefsboardvisibilityrestrictDeleted(id);
  block(matchAddPrefsboardvisibilityrestrict(id), function () {
    verifyPrefsboardvisibilityrestrictDoesNotExist(id);
  });
});

bthread("PrefscalendarfeedenabledLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefscalendarfeedenabled(x.id);
  const e_add = waitForPrefscalendarfeedenabledAdded(id);
  block(matchDeletePrefscalendarfeedenabled(id), function () {
    verifyPrefscalendarfeedenabledExists(id);
  });
  updatePrefscalendarfeedenabled(x.id);
  updatePrefscalendarfeedenabled(x.id);
  const e_upd = waitForPrefscalendarfeedenabledUpdated(id);
  block(matchDeletePrefscalendarfeedenabled(id), function () {
    verifyPrefscalendarfeedenabledUpdated(id);
  });
  deletePrefscalendarfeedenabled(x.id);
  const e_del = waitForPrefscalendarfeedenabledDeleted(id);
  block(matchAddPrefscalendarfeedenabled(id), function () {
    verifyPrefscalendarfeedenabledDoesNotExist(id);
  });
});

bthread("PrefscardagingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefscardaging(x.id);
  const e_add = waitForPrefscardagingAdded(id);
  block(matchDeletePrefscardaging(id), function () {
    verifyPrefscardagingExists(id);
  });
  updatePrefscardaging(x.id);
  updatePrefscardaging(x.id);
  const e_upd = waitForPrefscardagingUpdated(id);
  block(matchDeletePrefscardaging(id), function () {
    verifyPrefscardagingUpdated(id);
  });
  deletePrefscardaging(x.id);
  const e_del = waitForPrefscardagingDeleted(id);
  block(matchAddPrefscardaging(id), function () {
    verifyPrefscardagingDoesNotExist(id);
  });
});

bthread("PrefscardcoversLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefscardcovers(x.id);
  const e_add = waitForPrefscardcoversAdded(id);
  block(matchDeletePrefscardcovers(id), function () {
    verifyPrefscardcoversExists(id);
  });
  updatePrefscardcovers(x.id);
  updatePrefscardcovers(x.id);
  const e_upd = waitForPrefscardcoversUpdated(id);
  block(matchDeletePrefscardcovers(id), function () {
    verifyPrefscardcoversUpdated(id);
  });
  deletePrefscardcovers(x.id);
  const e_del = waitForPrefscardcoversDeleted(id);
  block(matchAddPrefscardcovers(id), function () {
    verifyPrefscardcoversDoesNotExist(id);
  });
});

bthread("PrefscolorblindLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefscolorblind(x.id);
  const e_add = waitForPrefscolorblindAdded(id);
  block(matchDeletePrefscolorblind(id), function () {
    verifyPrefscolorblindExists(id);
  });
  updatePrefscolorblind(x.id);
  updatePrefscolorblind(x.id);
  const e_upd = waitForPrefscolorblindUpdated(id);
  block(matchDeletePrefscolorblind(id), function () {
    verifyPrefscolorblindUpdated(id);
  });
  deletePrefscolorblind(x.id);
  const e_del = waitForPrefscolorblindDeleted(id);
  block(matchAddPrefscolorblind(id), function () {
    verifyPrefscolorblindDoesNotExist(id);
  });
});

bthread("PrefscommentsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefscomments(x.id);
  const e_add = waitForPrefscommentsAdded(id);
  block(matchDeletePrefscomments(id), function () {
    verifyPrefscommentsExists(id);
  });
  updatePrefscomments(x.id);
  updatePrefscomments(x.id);
  const e_upd = waitForPrefscommentsUpdated(id);
  block(matchDeletePrefscomments(id), function () {
    verifyPrefscommentsUpdated(id);
  });
  deletePrefscomments(x.id);
  const e_del = waitForPrefscommentsDeleted(id);
  block(matchAddPrefscomments(id), function () {
    verifyPrefscommentsDoesNotExist(id);
  });
});

bthread("PrefsexternalmembersdisabledLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsexternalmembersdisabled(x.id);
  const e_add = waitForPrefsexternalmembersdisabledAdded(id);
  block(matchDeletePrefsexternalmembersdisabled(id), function () {
    verifyPrefsexternalmembersdisabledExists(id);
  });
  updatePrefsexternalmembersdisabled(x.id);
  updatePrefsexternalmembersdisabled(x.id);
  const e_upd = waitForPrefsexternalmembersdisabledUpdated(id);
  block(matchDeletePrefsexternalmembersdisabled(id), function () {
    verifyPrefsexternalmembersdisabledUpdated(id);
  });
  deletePrefsexternalmembersdisabled(x.id);
  const e_del = waitForPrefsexternalmembersdisabledDeleted(id);
  block(matchAddPrefsexternalmembersdisabled(id), function () {
    verifyPrefsexternalmembersdisabledDoesNotExist(id);
  });
});

bthread("PrefsgoogleappsversionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsgoogleappsversion(x.id);
  const e_add = waitForPrefsgoogleappsversionAdded(id);
  block(matchDeletePrefsgoogleappsversion(id), function () {
    verifyPrefsgoogleappsversionExists(id);
  });
  updatePrefsgoogleappsversion(x.id);
  updatePrefsgoogleappsversion(x.id);
  const e_upd = waitForPrefsgoogleappsversionUpdated(id);
  block(matchDeletePrefsgoogleappsversion(id), function () {
    verifyPrefsgoogleappsversionUpdated(id);
  });
  deletePrefsgoogleappsversion(x.id);
  const e_del = waitForPrefsgoogleappsversionDeleted(id);
  block(matchAddPrefsgoogleappsversion(id), function () {
    verifyPrefsgoogleappsversionDoesNotExist(id);
  });
});

bthread("PrefsinvitationsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsinvitations(x.id);
  const e_add = waitForPrefsinvitationsAdded(id);
  block(matchDeletePrefsinvitations(id), function () {
    verifyPrefsinvitationsExists(id);
  });
  updatePrefsinvitations(x.id);
  updatePrefsinvitations(x.id);
  const e_upd = waitForPrefsinvitationsUpdated(id);
  block(matchDeletePrefsinvitations(id), function () {
    verifyPrefsinvitationsUpdated(id);
  });
  deletePrefsinvitations(x.id);
  const e_del = waitForPrefsinvitationsDeleted(id);
  block(matchAddPrefsinvitations(id), function () {
    verifyPrefsinvitationsDoesNotExist(id);
  });
});

bthread("PrefslocaleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefslocale(x.id);
  const e_add = waitForPrefslocaleAdded(id);
  block(matchDeletePrefslocale(id), function () {
    verifyPrefslocaleExists(id);
  });
  updatePrefslocale(x.id);
  updatePrefslocale(x.id);
  const e_upd = waitForPrefslocaleUpdated(id);
  block(matchDeletePrefslocale(id), function () {
    verifyPrefslocaleUpdated(id);
  });
  deletePrefslocale(x.id);
  const e_del = waitForPrefslocaleDeleted(id);
  block(matchAddPrefslocale(id), function () {
    verifyPrefslocaleDoesNotExist(id);
  });
});

bthread("PrefsminutesbetweensummariesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsminutesbetweensummaries(x.id);
  const e_add = waitForPrefsminutesbetweensummariesAdded(id);
  block(matchDeletePrefsminutesbetweensummaries(id), function () {
    verifyPrefsminutesbetweensummariesExists(id);
  });
  updatePrefsminutesbetweensummaries(x.id);
  updatePrefsminutesbetweensummaries(x.id);
  const e_upd = waitForPrefsminutesbetweensummariesUpdated(id);
  block(matchDeletePrefsminutesbetweensummaries(id), function () {
    verifyPrefsminutesbetweensummariesUpdated(id);
  });
  deletePrefsminutesbetweensummaries(x.id);
  const e_del = waitForPrefsminutesbetweensummariesDeleted(id);
  block(matchAddPrefsminutesbetweensummaries(id), function () {
    verifyPrefsminutesbetweensummariesDoesNotExist(id);
  });
});

bthread("PrefsorginviterestrictLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsorginviterestrict(x.id);
  const e_add = waitForPrefsorginviterestrictAdded(id);
  block(matchDeletePrefsorginviterestrict(id), function () {
    verifyPrefsorginviterestrictExists(id);
  });
  updatePrefsorginviterestrict(x.id);
  updatePrefsorginviterestrict(x.id);
  const e_upd = waitForPrefsorginviterestrictUpdated(id);
  block(matchDeletePrefsorginviterestrict(id), function () {
    verifyPrefsorginviterestrictUpdated(id);
  });
  deletePrefsorginviterestrict(x.id);
  const e_del = waitForPrefsorginviterestrictDeleted(id);
  block(matchAddPrefsorginviterestrict(id), function () {
    verifyPrefsorginviterestrictDoesNotExist(id);
  });
});

bthread("PrefspermissionlevelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefspermissionlevel(x.id);
  const e_add = waitForPrefspermissionlevelAdded(id);
  block(matchDeletePrefspermissionlevel(id), function () {
    verifyPrefspermissionlevelExists(id);
  });
  updatePrefspermissionlevel(x.id);
  updatePrefspermissionlevel(x.id);
  const e_upd = waitForPrefspermissionlevelUpdated(id);
  block(matchDeletePrefspermissionlevel(id), function () {
    verifyPrefspermissionlevelUpdated(id);
  });
  deletePrefspermissionlevel(x.id);
  const e_del = waitForPrefspermissionlevelDeleted(id);
  block(matchAddPrefspermissionlevel(id), function () {
    verifyPrefspermissionlevelDoesNotExist(id);
  });
});

bthread("PrefsselfjoinLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsselfjoin(x.id);
  const e_add = waitForPrefsselfjoinAdded(id);
  block(matchDeletePrefsselfjoin(id), function () {
    verifyPrefsselfjoinExists(id);
  });
  updatePrefsselfjoin(x.id);
  updatePrefsselfjoin(x.id);
  const e_upd = waitForPrefsselfjoinUpdated(id);
  block(matchDeletePrefsselfjoin(id), function () {
    verifyPrefsselfjoinUpdated(id);
  });
  deletePrefsselfjoin(x.id);
  const e_del = waitForPrefsselfjoinDeleted(id);
  block(matchAddPrefsselfjoin(id), function () {
    verifyPrefsselfjoinDoesNotExist(id);
  });
});

bthread("PrefsvotingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrefsvoting(x.id);
  const e_add = waitForPrefsvotingAdded(id);
  block(matchDeletePrefsvoting(id), function () {
    verifyPrefsvotingExists(id);
  });
  updatePrefsvoting(x.id);
  updatePrefsvoting(x.id);
  const e_upd = waitForPrefsvotingUpdated(id);
  block(matchDeletePrefsvoting(id), function () {
    verifyPrefsvotingUpdated(id);
  });
  deletePrefsvoting(x.id);
  const e_del = waitForPrefsvotingDeleted(id);
  block(matchAddPrefsvoting(id), function () {
    verifyPrefsvotingDoesNotExist(id);
  });
});

bthread("SessionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSessions(x.id);
  const e_add = waitForSessionsAdded(id);
  block(matchDeleteSessions(id), function () {
    verifySessionsExists(id);
  });
  updateSessions(x.id);
  updateSessions(x.id);
  const e_upd = waitForSessionsUpdated(id);
  block(matchDeleteSessions(id), function () {
    verifySessionsUpdated(id);
  });
  deleteSessions(x.id);
  const e_del = waitForSessionsDeleted(id);
  block(matchAddSessions(id), function () {
    verifySessionsDoesNotExist(id);
  });
});

bthread("SessionsstatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSessionsstatus(x.id);
  const e_add = waitForSessionsstatusAdded(id);
  block(matchDeleteSessionsstatus(id), function () {
    verifySessionsstatusExists(id);
  });
  updateSessionsstatus(x.id);
  updateSessionsstatus(x.id);
  const e_upd = waitForSessionsstatusUpdated(id);
  block(matchDeleteSessionsstatus(id), function () {
    verifySessionsstatusUpdated(id);
  });
  deleteSessionsstatus(x.id);
  const e_del = waitForSessionsstatusDeleted(id);
  block(matchAddSessionsstatus(id), function () {
    verifySessionsstatusDoesNotExist(id);
  });
});

bthread("TokenswebhooksLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTokenswebhooks(x.id);
  const e_add = waitForTokenswebhooksAdded(id);
  block(matchDeleteTokenswebhooks(id), function () {
    verifyTokenswebhooksExists(id);
  });
  updateTokenswebhooks(x.id);
  updateTokenswebhooks(x.id);
  const e_upd = waitForTokenswebhooksUpdated(id);
  block(matchDeleteTokenswebhooks(id), function () {
    verifyTokenswebhooksUpdated(id);
  });
  deleteTokenswebhooks(x.id);
  const e_del = waitForTokenswebhooksDeleted(id);
  block(matchAddTokenswebhooks(id), function () {
    verifyTokenswebhooksDoesNotExist(id);
  });
});

bthread("WebhooksLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhooks(x.id);
  const e_add = waitForWebhooksAdded(id);
  block(matchDeleteWebhooks(id), function () {
    verifyWebhooksExists(id);
  });
  updateWebhooks(x.id);
  updateWebhooks(x.id);
  const e_upd = waitForWebhooksUpdated(id);
  block(matchDeleteWebhooks(id), function () {
    verifyWebhooksUpdated(id);
  });
  deleteWebhooks(x.id);
  const e_del = waitForWebhooksDeleted(id);
  block(matchAddWebhooks(id), function () {
    verifyWebhooksDoesNotExist(id);
  });
});

bthread("WebhooksactiveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhooksactive(x.id);
  const e_add = waitForWebhooksactiveAdded(id);
  block(matchDeleteWebhooksactive(id), function () {
    verifyWebhooksactiveExists(id);
  });
  updateWebhooksactive(x.id);
  updateWebhooksactive(x.id);
  const e_upd = waitForWebhooksactiveUpdated(id);
  block(matchDeleteWebhooksactive(id), function () {
    verifyWebhooksactiveUpdated(id);
  });
  deleteWebhooksactive(x.id);
  const e_del = waitForWebhooksactiveDeleted(id);
  block(matchAddWebhooksactive(id), function () {
    verifyWebhooksactiveDoesNotExist(id);
  });
});

bthread("WebhookscallbackurlLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhookscallbackurl(x.id);
  const e_add = waitForWebhookscallbackurlAdded(id);
  block(matchDeleteWebhookscallbackurl(id), function () {
    verifyWebhookscallbackurlExists(id);
  });
  updateWebhookscallbackurl(x.id);
  updateWebhookscallbackurl(x.id);
  const e_upd = waitForWebhookscallbackurlUpdated(id);
  block(matchDeleteWebhookscallbackurl(id), function () {
    verifyWebhookscallbackurlUpdated(id);
  });
  deleteWebhookscallbackurl(x.id);
  const e_del = waitForWebhookscallbackurlDeleted(id);
  block(matchAddWebhookscallbackurl(id), function () {
    verifyWebhookscallbackurlDoesNotExist(id);
  });
});

bthread("WebhooksdescriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhooksdescription(x.id);
  const e_add = waitForWebhooksdescriptionAdded(id);
  block(matchDeleteWebhooksdescription(id), function () {
    verifyWebhooksdescriptionExists(id);
  });
  updateWebhooksdescription(x.id);
  updateWebhooksdescription(x.id);
  const e_upd = waitForWebhooksdescriptionUpdated(id);
  block(matchDeleteWebhooksdescription(id), function () {
    verifyWebhooksdescriptionUpdated(id);
  });
  deleteWebhooksdescription(x.id);
  const e_del = waitForWebhooksdescriptionDeleted(id);
  block(matchAddWebhooksdescription(id), function () {
    verifyWebhooksdescriptionDoesNotExist(id);
  });
});

bthread("WebhooksidmodelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhooksidmodel(x.id);
  const e_add = waitForWebhooksidmodelAdded(id);
  block(matchDeleteWebhooksidmodel(id), function () {
    verifyWebhooksidmodelExists(id);
  });
  updateWebhooksidmodel(x.id);
  updateWebhooksidmodel(x.id);
  const e_upd = waitForWebhooksidmodelUpdated(id);
  block(matchDeleteWebhooksidmodel(id), function () {
    verifyWebhooksidmodelUpdated(id);
  });
  deleteWebhooksidmodel(x.id);
  const e_del = waitForWebhooksidmodelDeleted(id);
  block(matchAddWebhooksidmodel(id), function () {
    verifyWebhooksidmodelDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Actions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addActions(x.id);
  for (var i=0; i<steps; i++) {
    updateActions(x.id);
  }
  if (pick([true,false])) { deleteActions(x.id); }
  verifyActionsExists(x.id);
  verifyActionsUpdated(x.id);
});

bthread("Actions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addActions(a.id);
  block(matchAddActions(a.id, ANY), function () {});
  addActions(b.id);
});

bthread("Actionscomments nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addActionscomments(x.id);
  for (var i=0; i<steps; i++) {
    updateActionscomments(x.id);
  }
  if (pick([true,false])) { deleteActionscomments(x.id); }
  verifyActionscommentsExists(x.id);
  verifyActionscommentsUpdated(x.id);
});

bthread("Actionscomments nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addActionscomments(a.id);
  block(matchAddActionscomments(a.id, ANY), function () {});
  addActionscomments(b.id);
});

bthread("Actionstext nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addActionstext(x.id);
  for (var i=0; i<steps; i++) {
    updateActionstext(x.id);
  }
  if (pick([true,false])) { deleteActionstext(x.id); }
  verifyActionstextExists(x.id);
  verifyActionstextUpdated(x.id);
});

bthread("Actionstext nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addActionstext(a.id);
  block(matchAddActionstext(a.id, ANY), function () {});
  addActionstext(b.id);
});

bthread("Boards nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoards(x.id);
  for (var i=0; i<steps; i++) {
    updateBoards(x.id);
  }
  if (pick([true,false])) { deleteBoards(x.id); }
  verifyBoardsExists(x.id);
  verifyBoardsUpdated(x.id);
});

bthread("Boards nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoards(a.id);
  block(matchAddBoards(a.id, ANY), function () {});
  addBoards(b.id);
});

bthread("Boardschecklists nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardschecklists(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardschecklists(x.id);
  }
  if (pick([true,false])) { deleteBoardschecklists(x.id); }
  verifyBoardschecklistsExists(x.id);
  verifyBoardschecklistsUpdated(x.id);
});

bthread("Boardschecklists nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardschecklists(a.id);
  block(matchAddBoardschecklists(a.id, ANY), function () {});
  addBoardschecklists(b.id);
});

bthread("Boardsclosed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardsclosed(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsclosed(x.id);
  }
  if (pick([true,false])) { deleteBoardsclosed(x.id); }
  verifyBoardsclosedExists(x.id);
  verifyBoardsclosedUpdated(x.id);
});

bthread("Boardsclosed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardsclosed(a.id);
  block(matchAddBoardsclosed(a.id, ANY), function () {});
  addBoardsclosed(b.id);
});

bthread("Boardsdesc nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardsdesc(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsdesc(x.id);
  }
  if (pick([true,false])) { deleteBoardsdesc(x.id); }
  verifyBoardsdescExists(x.id);
  verifyBoardsdescUpdated(x.id);
});

bthread("Boardsdesc nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardsdesc(a.id);
  block(matchAddBoardsdesc(a.id, ANY), function () {});
  addBoardsdesc(b.id);
});

bthread("Boardsidorganization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardsidorganization(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsidorganization(x.id);
  }
  if (pick([true,false])) { deleteBoardsidorganization(x.id); }
  verifyBoardsidorganizationExists(x.id);
  verifyBoardsidorganizationUpdated(x.id);
});

bthread("Boardsidorganization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardsidorganization(a.id);
  block(matchAddBoardsidorganization(a.id, ANY), function () {});
  addBoardsidorganization(b.id);
});

bthread("Boardslabels nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardslabels(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardslabels(x.id);
  }
  if (pick([true,false])) { deleteBoardslabels(x.id); }
  verifyBoardslabelsExists(x.id);
  verifyBoardslabelsUpdated(x.id);
});

bthread("Boardslabels nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardslabels(a.id);
  block(matchAddBoardslabels(a.id, ANY), function () {});
  addBoardslabels(b.id);
});

bthread("Boardslists nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardslists(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardslists(x.id);
  }
  if (pick([true,false])) { deleteBoardslists(x.id); }
  verifyBoardslistsExists(x.id);
  verifyBoardslistsUpdated(x.id);
});

bthread("Boardslists nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardslists(a.id);
  block(matchAddBoardslists(a.id, ANY), function () {});
  addBoardslists(b.id);
});

bthread("Boardsmembers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardsmembers(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsmembers(x.id);
  }
  if (pick([true,false])) { deleteBoardsmembers(x.id); }
  verifyBoardsmembersExists(x.id);
  verifyBoardsmembersUpdated(x.id);
});

bthread("Boardsmembers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardsmembers(a.id);
  block(matchAddBoardsmembers(a.id, ANY), function () {});
  addBoardsmembers(b.id);
});

bthread("Boardsmemberships nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardsmemberships(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsmemberships(x.id);
  }
  if (pick([true,false])) { deleteBoardsmemberships(x.id); }
  verifyBoardsmembershipsExists(x.id);
  verifyBoardsmembershipsUpdated(x.id);
});

bthread("Boardsmemberships nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardsmemberships(a.id);
  block(matchAddBoardsmemberships(a.id, ANY), function () {});
  addBoardsmemberships(b.id);
});

bthread("Boardsname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardsname(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardsname(x.id);
  }
  if (pick([true,false])) { deleteBoardsname(x.id); }
  verifyBoardsnameExists(x.id);
  verifyBoardsnameUpdated(x.id);
});

bthread("Boardsname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardsname(a.id);
  block(matchAddBoardsname(a.id, ANY), function () {});
  addBoardsname(b.id);
});

bthread("Boardspowerups nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardspowerups(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardspowerups(x.id);
  }
  if (pick([true,false])) { deleteBoardspowerups(x.id); }
  verifyBoardspowerupsExists(x.id);
  verifyBoardspowerupsUpdated(x.id);
});

bthread("Boardspowerups nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardspowerups(a.id);
  block(matchAddBoardspowerups(a.id, ANY), function () {});
  addBoardspowerups(b.id);
});

bthread("Boardssubscribed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBoardssubscribed(x.id);
  for (var i=0; i<steps; i++) {
    updateBoardssubscribed(x.id);
  }
  if (pick([true,false])) { deleteBoardssubscribed(x.id); }
  verifyBoardssubscribedExists(x.id);
  verifyBoardssubscribedUpdated(x.id);
});

bthread("Boardssubscribed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBoardssubscribed(a.id);
  block(matchAddBoardssubscribed(a.id, ANY), function () {});
  addBoardssubscribed(b.id);
});

bthread("Cards nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCards(x.id);
  for (var i=0; i<steps; i++) {
    updateCards(x.id);
  }
  if (pick([true,false])) { deleteCards(x.id); }
  verifyCardsExists(x.id);
  verifyCardsUpdated(x.id);
});

bthread("Cards nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCards(a.id);
  block(matchAddCards(a.id, ANY), function () {});
  addCards(b.id);
});

bthread("Cardsactionscomments nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsactionscomments(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsactionscomments(x.id);
  }
  if (pick([true,false])) { deleteCardsactionscomments(x.id); }
  verifyCardsactionscommentsExists(x.id);
  verifyCardsactionscommentsUpdated(x.id);
});

bthread("Cardsactionscomments nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsactionscomments(a.id);
  block(matchAddCardsactionscomments(a.id, ANY), function () {});
  addCardsactionscomments(b.id);
});

bthread("Cardsattachments nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsattachments(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsattachments(x.id);
  }
  if (pick([true,false])) { deleteCardsattachments(x.id); }
  verifyCardsattachmentsExists(x.id);
  verifyCardsattachmentsUpdated(x.id);
});

bthread("Cardsattachments nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsattachments(a.id);
  block(matchAddCardsattachments(a.id, ANY), function () {});
  addCardsattachments(b.id);
});

bthread("Cardschecklistcheckitem nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardschecklistcheckitem(x.id);
  for (var i=0; i<steps; i++) {
    updateCardschecklistcheckitem(x.id);
  }
  if (pick([true,false])) { deleteCardschecklistcheckitem(x.id); }
  verifyCardschecklistcheckitemExists(x.id);
  verifyCardschecklistcheckitemUpdated(x.id);
});

bthread("Cardschecklistcheckitem nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardschecklistcheckitem(a.id);
  block(matchAddCardschecklistcheckitem(a.id, ANY), function () {});
  addCardschecklistcheckitem(b.id);
});

bthread("Cardschecklistcheckitemname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardschecklistcheckitemname(x.id);
  for (var i=0; i<steps; i++) {
    updateCardschecklistcheckitemname(x.id);
  }
  if (pick([true,false])) { deleteCardschecklistcheckitemname(x.id); }
  verifyCardschecklistcheckitemnameExists(x.id);
  verifyCardschecklistcheckitemnameUpdated(x.id);
});

bthread("Cardschecklistcheckitemname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardschecklistcheckitemname(a.id);
  block(matchAddCardschecklistcheckitemname(a.id, ANY), function () {});
  addCardschecklistcheckitemname(b.id);
});

bthread("Cardschecklistcheckitempos nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardschecklistcheckitempos(x.id);
  for (var i=0; i<steps; i++) {
    updateCardschecklistcheckitempos(x.id);
  }
  if (pick([true,false])) { deleteCardschecklistcheckitempos(x.id); }
  verifyCardschecklistcheckitemposExists(x.id);
  verifyCardschecklistcheckitemposUpdated(x.id);
});

bthread("Cardschecklistcheckitempos nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardschecklistcheckitempos(a.id);
  block(matchAddCardschecklistcheckitempos(a.id, ANY), function () {});
  addCardschecklistcheckitempos(b.id);
});

bthread("Cardschecklistcheckitemstate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardschecklistcheckitemstate(x.id);
  for (var i=0; i<steps; i++) {
    updateCardschecklistcheckitemstate(x.id);
  }
  if (pick([true,false])) { deleteCardschecklistcheckitemstate(x.id); }
  verifyCardschecklistcheckitemstateExists(x.id);
  verifyCardschecklistcheckitemstateUpdated(x.id);
});

bthread("Cardschecklistcheckitemstate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardschecklistcheckitemstate(a.id);
  block(matchAddCardschecklistcheckitemstate(a.id, ANY), function () {});
  addCardschecklistcheckitemstate(b.id);
});

bthread("Cardschecklistidchecklistcurrentcheckitem nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardschecklistidchecklistcurrentcheckitem(x.id);
  for (var i=0; i<steps; i++) {
    updateCardschecklistidchecklistcurrentcheckitem(x.id);
  }
  if (pick([true,false])) { deleteCardschecklistidchecklistcurrentcheckitem(x.id); }
  verifyCardschecklistidchecklistcurrentcheckitemExists(x.id);
  verifyCardschecklistidchecklistcurrentcheckitemUpdated(x.id);
});

bthread("Cardschecklistidchecklistcurrentcheckitem nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardschecklistidchecklistcurrentcheckitem(a.id);
  block(matchAddCardschecklistidchecklistcurrentcheckitem(a.id, ANY), function () {});
  addCardschecklistidchecklistcurrentcheckitem(b.id);
});

bthread("Cardschecklists nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardschecklists(x.id);
  for (var i=0; i<steps; i++) {
    updateCardschecklists(x.id);
  }
  if (pick([true,false])) { deleteCardschecklists(x.id); }
  verifyCardschecklistsExists(x.id);
  verifyCardschecklistsUpdated(x.id);
});

bthread("Cardschecklists nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardschecklists(a.id);
  block(matchAddCardschecklists(a.id, ANY), function () {});
  addCardschecklists(b.id);
});

bthread("Cardsclosed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsclosed(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsclosed(x.id);
  }
  if (pick([true,false])) { deleteCardsclosed(x.id); }
  verifyCardsclosedExists(x.id);
  verifyCardsclosedUpdated(x.id);
});

bthread("Cardsclosed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsclosed(a.id);
  block(matchAddCardsclosed(a.id, ANY), function () {});
  addCardsclosed(b.id);
});

bthread("Cardsdesc nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsdesc(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsdesc(x.id);
  }
  if (pick([true,false])) { deleteCardsdesc(x.id); }
  verifyCardsdescExists(x.id);
  verifyCardsdescUpdated(x.id);
});

bthread("Cardsdesc nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsdesc(a.id);
  block(matchAddCardsdesc(a.id, ANY), function () {});
  addCardsdesc(b.id);
});

bthread("Cardsdue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsdue(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsdue(x.id);
  }
  if (pick([true,false])) { deleteCardsdue(x.id); }
  verifyCardsdueExists(x.id);
  verifyCardsdueUpdated(x.id);
});

bthread("Cardsdue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsdue(a.id);
  block(matchAddCardsdue(a.id, ANY), function () {});
  addCardsdue(b.id);
});

bthread("Cardsidattachmentcover nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsidattachmentcover(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsidattachmentcover(x.id);
  }
  if (pick([true,false])) { deleteCardsidattachmentcover(x.id); }
  verifyCardsidattachmentcoverExists(x.id);
  verifyCardsidattachmentcoverUpdated(x.id);
});

bthread("Cardsidattachmentcover nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsidattachmentcover(a.id);
  block(matchAddCardsidattachmentcover(a.id, ANY), function () {});
  addCardsidattachmentcover(b.id);
});

bthread("Cardsidboard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsidboard(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsidboard(x.id);
  }
  if (pick([true,false])) { deleteCardsidboard(x.id); }
  verifyCardsidboardExists(x.id);
  verifyCardsidboardUpdated(x.id);
});

bthread("Cardsidboard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsidboard(a.id);
  block(matchAddCardsidboard(a.id, ANY), function () {});
  addCardsidboard(b.id);
});

bthread("Cardsidlabels nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsidlabels(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsidlabels(x.id);
  }
  if (pick([true,false])) { deleteCardsidlabels(x.id); }
  verifyCardsidlabelsExists(x.id);
  verifyCardsidlabelsUpdated(x.id);
});

bthread("Cardsidlabels nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsidlabels(a.id);
  block(matchAddCardsidlabels(a.id, ANY), function () {});
  addCardsidlabels(b.id);
});

bthread("Cardsidlist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsidlist(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsidlist(x.id);
  }
  if (pick([true,false])) { deleteCardsidlist(x.id); }
  verifyCardsidlistExists(x.id);
  verifyCardsidlistUpdated(x.id);
});

bthread("Cardsidlist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsidlist(a.id);
  block(matchAddCardsidlist(a.id, ANY), function () {});
  addCardsidlist(b.id);
});

bthread("Cardsidmembers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsidmembers(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsidmembers(x.id);
  }
  if (pick([true,false])) { deleteCardsidmembers(x.id); }
  verifyCardsidmembersExists(x.id);
  verifyCardsidmembersUpdated(x.id);
});

bthread("Cardsidmembers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsidmembers(a.id);
  block(matchAddCardsidmembers(a.id, ANY), function () {});
  addCardsidmembers(b.id);
});

bthread("Cardslabels nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardslabels(x.id);
  for (var i=0; i<steps; i++) {
    updateCardslabels(x.id);
  }
  if (pick([true,false])) { deleteCardslabels(x.id); }
  verifyCardslabelsExists(x.id);
  verifyCardslabelsUpdated(x.id);
});

bthread("Cardslabels nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardslabels(a.id);
  block(matchAddCardslabels(a.id, ANY), function () {});
  addCardslabels(b.id);
});

bthread("Cardsmembersvoted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsmembersvoted(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsmembersvoted(x.id);
  }
  if (pick([true,false])) { deleteCardsmembersvoted(x.id); }
  verifyCardsmembersvotedExists(x.id);
  verifyCardsmembersvotedUpdated(x.id);
});

bthread("Cardsmembersvoted nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsmembersvoted(a.id);
  block(matchAddCardsmembersvoted(a.id, ANY), function () {});
  addCardsmembersvoted(b.id);
});

bthread("Cardsname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsname(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsname(x.id);
  }
  if (pick([true,false])) { deleteCardsname(x.id); }
  verifyCardsnameExists(x.id);
  verifyCardsnameUpdated(x.id);
});

bthread("Cardsname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsname(a.id);
  block(matchAddCardsname(a.id, ANY), function () {});
  addCardsname(b.id);
});

bthread("Cardspos nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardspos(x.id);
  for (var i=0; i<steps; i++) {
    updateCardspos(x.id);
  }
  if (pick([true,false])) { deleteCardspos(x.id); }
  verifyCardsposExists(x.id);
  verifyCardsposUpdated(x.id);
});

bthread("Cardspos nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardspos(a.id);
  block(matchAddCardspos(a.id, ANY), function () {});
  addCardspos(b.id);
});

bthread("Cardsstickers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardsstickers(x.id);
  for (var i=0; i<steps; i++) {
    updateCardsstickers(x.id);
  }
  if (pick([true,false])) { deleteCardsstickers(x.id); }
  verifyCardsstickersExists(x.id);
  verifyCardsstickersUpdated(x.id);
});

bthread("Cardsstickers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardsstickers(a.id);
  block(matchAddCardsstickers(a.id, ANY), function () {});
  addCardsstickers(b.id);
});

bthread("Cardssubscribed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCardssubscribed(x.id);
  for (var i=0; i<steps; i++) {
    updateCardssubscribed(x.id);
  }
  if (pick([true,false])) { deleteCardssubscribed(x.id); }
  verifyCardssubscribedExists(x.id);
  verifyCardssubscribedUpdated(x.id);
});

bthread("Cardssubscribed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCardssubscribed(a.id);
  block(matchAddCardssubscribed(a.id, ANY), function () {});
  addCardssubscribed(b.id);
});

bthread("Checklists nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChecklists(x.id);
  for (var i=0; i<steps; i++) {
    updateChecklists(x.id);
  }
  if (pick([true,false])) { deleteChecklists(x.id); }
  verifyChecklistsExists(x.id);
  verifyChecklistsUpdated(x.id);
});

bthread("Checklists nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChecklists(a.id);
  block(matchAddChecklists(a.id, ANY), function () {});
  addChecklists(b.id);
});

bthread("Checklistscheckitems nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChecklistscheckitems(x.id);
  for (var i=0; i<steps; i++) {
    updateChecklistscheckitems(x.id);
  }
  if (pick([true,false])) { deleteChecklistscheckitems(x.id); }
  verifyChecklistscheckitemsExists(x.id);
  verifyChecklistscheckitemsUpdated(x.id);
});

bthread("Checklistscheckitems nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChecklistscheckitems(a.id);
  block(matchAddChecklistscheckitems(a.id, ANY), function () {});
  addChecklistscheckitems(b.id);
});

bthread("Checklistsidcard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChecklistsidcard(x.id);
  for (var i=0; i<steps; i++) {
    updateChecklistsidcard(x.id);
  }
  if (pick([true,false])) { deleteChecklistsidcard(x.id); }
  verifyChecklistsidcardExists(x.id);
  verifyChecklistsidcardUpdated(x.id);
});

bthread("Checklistsidcard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChecklistsidcard(a.id);
  block(matchAddChecklistsidcard(a.id, ANY), function () {});
  addChecklistsidcard(b.id);
});

bthread("Checklistsname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChecklistsname(x.id);
  for (var i=0; i<steps; i++) {
    updateChecklistsname(x.id);
  }
  if (pick([true,false])) { deleteChecklistsname(x.id); }
  verifyChecklistsnameExists(x.id);
  verifyChecklistsnameUpdated(x.id);
});

bthread("Checklistsname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChecklistsname(a.id);
  block(matchAddChecklistsname(a.id, ANY), function () {});
  addChecklistsname(b.id);
});

bthread("Checklistspos nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChecklistspos(x.id);
  for (var i=0; i<steps; i++) {
    updateChecklistspos(x.id);
  }
  if (pick([true,false])) { deleteChecklistspos(x.id); }
  verifyChecklistsposExists(x.id);
  verifyChecklistsposUpdated(x.id);
});

bthread("Checklistspos nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChecklistspos(a.id);
  block(matchAddChecklistspos(a.id, ANY), function () {});
  addChecklistspos(b.id);
});

bthread("Labelnamesblue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelnamesblue(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelnamesblue(x.id);
  }
  if (pick([true,false])) { deleteLabelnamesblue(x.id); }
  verifyLabelnamesblueExists(x.id);
  verifyLabelnamesblueUpdated(x.id);
});

bthread("Labelnamesblue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelnamesblue(a.id);
  block(matchAddLabelnamesblue(a.id, ANY), function () {});
  addLabelnamesblue(b.id);
});

bthread("Labelnamesgreen nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelnamesgreen(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelnamesgreen(x.id);
  }
  if (pick([true,false])) { deleteLabelnamesgreen(x.id); }
  verifyLabelnamesgreenExists(x.id);
  verifyLabelnamesgreenUpdated(x.id);
});

bthread("Labelnamesgreen nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelnamesgreen(a.id);
  block(matchAddLabelnamesgreen(a.id, ANY), function () {});
  addLabelnamesgreen(b.id);
});

bthread("Labelnamesorange nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelnamesorange(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelnamesorange(x.id);
  }
  if (pick([true,false])) { deleteLabelnamesorange(x.id); }
  verifyLabelnamesorangeExists(x.id);
  verifyLabelnamesorangeUpdated(x.id);
});

bthread("Labelnamesorange nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelnamesorange(a.id);
  block(matchAddLabelnamesorange(a.id, ANY), function () {});
  addLabelnamesorange(b.id);
});

bthread("Labelnamespurple nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelnamespurple(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelnamespurple(x.id);
  }
  if (pick([true,false])) { deleteLabelnamespurple(x.id); }
  verifyLabelnamespurpleExists(x.id);
  verifyLabelnamespurpleUpdated(x.id);
});

bthread("Labelnamespurple nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelnamespurple(a.id);
  block(matchAddLabelnamespurple(a.id, ANY), function () {});
  addLabelnamespurple(b.id);
});

bthread("Labelnamesred nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelnamesred(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelnamesred(x.id);
  }
  if (pick([true,false])) { deleteLabelnamesred(x.id); }
  verifyLabelnamesredExists(x.id);
  verifyLabelnamesredUpdated(x.id);
});

bthread("Labelnamesred nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelnamesred(a.id);
  block(matchAddLabelnamesred(a.id, ANY), function () {});
  addLabelnamesred(b.id);
});

bthread("Labelnamesyellow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelnamesyellow(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelnamesyellow(x.id);
  }
  if (pick([true,false])) { deleteLabelnamesyellow(x.id); }
  verifyLabelnamesyellowExists(x.id);
  verifyLabelnamesyellowUpdated(x.id);
});

bthread("Labelnamesyellow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelnamesyellow(a.id);
  block(matchAddLabelnamesyellow(a.id, ANY), function () {});
  addLabelnamesyellow(b.id);
});

bthread("Labels nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabels(x.id);
  for (var i=0; i<steps; i++) {
    updateLabels(x.id);
  }
  if (pick([true,false])) { deleteLabels(x.id); }
  verifyLabelsExists(x.id);
  verifyLabelsUpdated(x.id);
});

bthread("Labels nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabels(a.id);
  block(matchAddLabels(a.id, ANY), function () {});
  addLabels(b.id);
});

bthread("Labelscolor nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelscolor(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelscolor(x.id);
  }
  if (pick([true,false])) { deleteLabelscolor(x.id); }
  verifyLabelscolorExists(x.id);
  verifyLabelscolorUpdated(x.id);
});

bthread("Labelscolor nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelscolor(a.id);
  block(matchAddLabelscolor(a.id, ANY), function () {});
  addLabelscolor(b.id);
});

bthread("Labelsname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLabelsname(x.id);
  for (var i=0; i<steps; i++) {
    updateLabelsname(x.id);
  }
  if (pick([true,false])) { deleteLabelsname(x.id); }
  verifyLabelsnameExists(x.id);
  verifyLabelsnameUpdated(x.id);
});

bthread("Labelsname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLabelsname(a.id);
  block(matchAddLabelsname(a.id, ANY), function () {});
  addLabelsname(b.id);
});

bthread("Lists nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLists(x.id);
  for (var i=0; i<steps; i++) {
    updateLists(x.id);
  }
  if (pick([true,false])) { deleteLists(x.id); }
  verifyListsExists(x.id);
  verifyListsUpdated(x.id);
});

bthread("Lists nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLists(a.id);
  block(matchAddLists(a.id, ANY), function () {});
  addLists(b.id);
});

bthread("Listscards nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListscards(x.id);
  for (var i=0; i<steps; i++) {
    updateListscards(x.id);
  }
  if (pick([true,false])) { deleteListscards(x.id); }
  verifyListscardsExists(x.id);
  verifyListscardsUpdated(x.id);
});

bthread("Listscards nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListscards(a.id);
  block(matchAddListscards(a.id, ANY), function () {});
  addListscards(b.id);
});

bthread("Listsclosed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListsclosed(x.id);
  for (var i=0; i<steps; i++) {
    updateListsclosed(x.id);
  }
  if (pick([true,false])) { deleteListsclosed(x.id); }
  verifyListsclosedExists(x.id);
  verifyListsclosedUpdated(x.id);
});

bthread("Listsclosed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListsclosed(a.id);
  block(matchAddListsclosed(a.id, ANY), function () {});
  addListsclosed(b.id);
});

bthread("Listsidboard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListsidboard(x.id);
  for (var i=0; i<steps; i++) {
    updateListsidboard(x.id);
  }
  if (pick([true,false])) { deleteListsidboard(x.id); }
  verifyListsidboardExists(x.id);
  verifyListsidboardUpdated(x.id);
});

bthread("Listsidboard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListsidboard(a.id);
  block(matchAddListsidboard(a.id, ANY), function () {});
  addListsidboard(b.id);
});

bthread("Listsmoveallcards nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListsmoveallcards(x.id);
  for (var i=0; i<steps; i++) {
    updateListsmoveallcards(x.id);
  }
  if (pick([true,false])) { deleteListsmoveallcards(x.id); }
  verifyListsmoveallcardsExists(x.id);
  verifyListsmoveallcardsUpdated(x.id);
});

bthread("Listsmoveallcards nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListsmoveallcards(a.id);
  block(matchAddListsmoveallcards(a.id, ANY), function () {});
  addListsmoveallcards(b.id);
});

bthread("Listsname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListsname(x.id);
  for (var i=0; i<steps; i++) {
    updateListsname(x.id);
  }
  if (pick([true,false])) { deleteListsname(x.id); }
  verifyListsnameExists(x.id);
  verifyListsnameUpdated(x.id);
});

bthread("Listsname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListsname(a.id);
  block(matchAddListsname(a.id, ANY), function () {});
  addListsname(b.id);
});

bthread("Listspos nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListspos(x.id);
  for (var i=0; i<steps; i++) {
    updateListspos(x.id);
  }
  if (pick([true,false])) { deleteListspos(x.id); }
  verifyListsposExists(x.id);
  verifyListsposUpdated(x.id);
});

bthread("Listspos nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListspos(a.id);
  block(matchAddListspos(a.id, ANY), function () {});
  addListspos(b.id);
});

bthread("Listssubscribed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addListssubscribed(x.id);
  for (var i=0; i<steps; i++) {
    updateListssubscribed(x.id);
  }
  if (pick([true,false])) { deleteListssubscribed(x.id); }
  verifyListssubscribedExists(x.id);
  verifyListssubscribedUpdated(x.id);
});

bthread("Listssubscribed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addListssubscribed(a.id);
  block(matchAddListssubscribed(a.id, ANY), function () {});
  addListssubscribed(b.id);
});

bthread("Members nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembers(x.id);
  for (var i=0; i<steps; i++) {
    updateMembers(x.id);
  }
  if (pick([true,false])) { deleteMembers(x.id); }
  verifyMembersExists(x.id);
  verifyMembersUpdated(x.id);
});

bthread("Members nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembers(a.id);
  block(matchAddMembers(a.id, ANY), function () {});
  addMembers(b.id);
});

bthread("Membersavatar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersavatar(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersavatar(x.id);
  }
  if (pick([true,false])) { deleteMembersavatar(x.id); }
  verifyMembersavatarExists(x.id);
  verifyMembersavatarUpdated(x.id);
});

bthread("Membersavatar nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersavatar(a.id);
  block(matchAddMembersavatar(a.id, ANY), function () {});
  addMembersavatar(b.id);
});

bthread("Membersavatarsource nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersavatarsource(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersavatarsource(x.id);
  }
  if (pick([true,false])) { deleteMembersavatarsource(x.id); }
  verifyMembersavatarsourceExists(x.id);
  verifyMembersavatarsourceUpdated(x.id);
});

bthread("Membersavatarsource nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersavatarsource(a.id);
  block(matchAddMembersavatarsource(a.id, ANY), function () {});
  addMembersavatarsource(b.id);
});

bthread("Membersbio nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersbio(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersbio(x.id);
  }
  if (pick([true,false])) { deleteMembersbio(x.id); }
  verifyMembersbioExists(x.id);
  verifyMembersbioUpdated(x.id);
});

bthread("Membersbio nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersbio(a.id);
  block(matchAddMembersbio(a.id, ANY), function () {});
  addMembersbio(b.id);
});

bthread("Membersboardbackgrounds nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersboardbackgrounds(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersboardbackgrounds(x.id);
  }
  if (pick([true,false])) { deleteMembersboardbackgrounds(x.id); }
  verifyMembersboardbackgroundsExists(x.id);
  verifyMembersboardbackgroundsUpdated(x.id);
});

bthread("Membersboardbackgrounds nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersboardbackgrounds(a.id);
  block(matchAddMembersboardbackgrounds(a.id, ANY), function () {});
  addMembersboardbackgrounds(b.id);
});

bthread("Membersboardstars nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersboardstars(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersboardstars(x.id);
  }
  if (pick([true,false])) { deleteMembersboardstars(x.id); }
  verifyMembersboardstarsExists(x.id);
  verifyMembersboardstarsUpdated(x.id);
});

bthread("Membersboardstars nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersboardstars(a.id);
  block(matchAddMembersboardstars(a.id, ANY), function () {});
  addMembersboardstars(b.id);
});

bthread("Membersboardstarsidboard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersboardstarsidboard(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersboardstarsidboard(x.id);
  }
  if (pick([true,false])) { deleteMembersboardstarsidboard(x.id); }
  verifyMembersboardstarsidboardExists(x.id);
  verifyMembersboardstarsidboardUpdated(x.id);
});

bthread("Membersboardstarsidboard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersboardstarsidboard(a.id);
  block(matchAddMembersboardstarsidboard(a.id, ANY), function () {});
  addMembersboardstarsidboard(b.id);
});

bthread("Membersboardstarspos nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersboardstarspos(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersboardstarspos(x.id);
  }
  if (pick([true,false])) { deleteMembersboardstarspos(x.id); }
  verifyMembersboardstarsposExists(x.id);
  verifyMembersboardstarsposUpdated(x.id);
});

bthread("Membersboardstarspos nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersboardstarspos(a.id);
  block(matchAddMembersboardstarspos(a.id, ANY), function () {});
  addMembersboardstarspos(b.id);
});

bthread("Memberscustomboardbackgrounds nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberscustomboardbackgrounds(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberscustomboardbackgrounds(x.id);
  }
  if (pick([true,false])) { deleteMemberscustomboardbackgrounds(x.id); }
  verifyMemberscustomboardbackgroundsExists(x.id);
  verifyMemberscustomboardbackgroundsUpdated(x.id);
});

bthread("Memberscustomboardbackgrounds nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberscustomboardbackgrounds(a.id);
  block(matchAddMemberscustomboardbackgrounds(a.id, ANY), function () {});
  addMemberscustomboardbackgrounds(b.id);
});

bthread("Memberscustomemoji nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberscustomemoji(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberscustomemoji(x.id);
  }
  if (pick([true,false])) { deleteMemberscustomemoji(x.id); }
  verifyMemberscustomemojiExists(x.id);
  verifyMemberscustomemojiUpdated(x.id);
});

bthread("Memberscustomemoji nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberscustomemoji(a.id);
  block(matchAddMemberscustomemoji(a.id, ANY), function () {});
  addMemberscustomemoji(b.id);
});

bthread("Memberscustomstickers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberscustomstickers(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberscustomstickers(x.id);
  }
  if (pick([true,false])) { deleteMemberscustomstickers(x.id); }
  verifyMemberscustomstickersExists(x.id);
  verifyMemberscustomstickersUpdated(x.id);
});

bthread("Memberscustomstickers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberscustomstickers(a.id);
  block(matchAddMemberscustomstickers(a.id, ANY), function () {});
  addMemberscustomstickers(b.id);
});

bthread("Membersfullname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersfullname(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersfullname(x.id);
  }
  if (pick([true,false])) { deleteMembersfullname(x.id); }
  verifyMembersfullnameExists(x.id);
  verifyMembersfullnameUpdated(x.id);
});

bthread("Membersfullname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersfullname(a.id);
  block(matchAddMembersfullname(a.id, ANY), function () {});
  addMembersfullname(b.id);
});

bthread("Membersinitials nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersinitials(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersinitials(x.id);
  }
  if (pick([true,false])) { deleteMembersinitials(x.id); }
  verifyMembersinitialsExists(x.id);
  verifyMembersinitialsUpdated(x.id);
});

bthread("Membersinitials nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersinitials(a.id);
  block(matchAddMembersinitials(a.id, ANY), function () {});
  addMembersinitials(b.id);
});

bthread("Membersonetimemessagesdismissed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersonetimemessagesdismissed(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersonetimemessagesdismissed(x.id);
  }
  if (pick([true,false])) { deleteMembersonetimemessagesdismissed(x.id); }
  verifyMembersonetimemessagesdismissedExists(x.id);
  verifyMembersonetimemessagesdismissedUpdated(x.id);
});

bthread("Membersonetimemessagesdismissed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersonetimemessagesdismissed(a.id);
  block(matchAddMembersonetimemessagesdismissed(a.id, ANY), function () {});
  addMembersonetimemessagesdismissed(b.id);
});

bthread("Memberssavedsearches nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberssavedsearches(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberssavedsearches(x.id);
  }
  if (pick([true,false])) { deleteMemberssavedsearches(x.id); }
  verifyMemberssavedsearchesExists(x.id);
  verifyMemberssavedsearchesUpdated(x.id);
});

bthread("Memberssavedsearches nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberssavedsearches(a.id);
  block(matchAddMemberssavedsearches(a.id, ANY), function () {});
  addMemberssavedsearches(b.id);
});

bthread("Memberssavedsearchesname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberssavedsearchesname(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberssavedsearchesname(x.id);
  }
  if (pick([true,false])) { deleteMemberssavedsearchesname(x.id); }
  verifyMemberssavedsearchesnameExists(x.id);
  verifyMemberssavedsearchesnameUpdated(x.id);
});

bthread("Memberssavedsearchesname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberssavedsearchesname(a.id);
  block(matchAddMemberssavedsearchesname(a.id, ANY), function () {});
  addMemberssavedsearchesname(b.id);
});

bthread("Memberssavedsearchespos nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberssavedsearchespos(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberssavedsearchespos(x.id);
  }
  if (pick([true,false])) { deleteMemberssavedsearchespos(x.id); }
  verifyMemberssavedsearchesposExists(x.id);
  verifyMemberssavedsearchesposUpdated(x.id);
});

bthread("Memberssavedsearchespos nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberssavedsearchespos(a.id);
  block(matchAddMemberssavedsearchespos(a.id, ANY), function () {});
  addMemberssavedsearchespos(b.id);
});

bthread("Memberssavedsearchesquery nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMemberssavedsearchesquery(x.id);
  for (var i=0; i<steps; i++) {
    updateMemberssavedsearchesquery(x.id);
  }
  if (pick([true,false])) { deleteMemberssavedsearchesquery(x.id); }
  verifyMemberssavedsearchesqueryExists(x.id);
  verifyMemberssavedsearchesqueryUpdated(x.id);
});

bthread("Memberssavedsearchesquery nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMemberssavedsearchesquery(a.id);
  block(matchAddMemberssavedsearchesquery(a.id, ANY), function () {});
  addMemberssavedsearchesquery(b.id);
});

bthread("Membersusername nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMembersusername(x.id);
  for (var i=0; i<steps; i++) {
    updateMembersusername(x.id);
  }
  if (pick([true,false])) { deleteMembersusername(x.id); }
  verifyMembersusernameExists(x.id);
  verifyMembersusernameUpdated(x.id);
});

bthread("Membersusername nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMembersusername(a.id);
  block(matchAddMembersusername(a.id, ANY), function () {});
  addMembersusername(b.id);
});

bthread("Myprefsemailposition nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsemailposition(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsemailposition(x.id);
  }
  if (pick([true,false])) { deleteMyprefsemailposition(x.id); }
  verifyMyprefsemailpositionExists(x.id);
  verifyMyprefsemailpositionUpdated(x.id);
});

bthread("Myprefsemailposition nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsemailposition(a.id);
  block(matchAddMyprefsemailposition(a.id, ANY), function () {});
  addMyprefsemailposition(b.id);
});

bthread("Myprefsidemaillist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsidemaillist(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsidemaillist(x.id);
  }
  if (pick([true,false])) { deleteMyprefsidemaillist(x.id); }
  verifyMyprefsidemaillistExists(x.id);
  verifyMyprefsidemaillistUpdated(x.id);
});

bthread("Myprefsidemaillist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsidemaillist(a.id);
  block(matchAddMyprefsidemaillist(a.id, ANY), function () {});
  addMyprefsidemaillist(b.id);
});

bthread("Myprefsshowlistguide nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsshowlistguide(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsshowlistguide(x.id);
  }
  if (pick([true,false])) { deleteMyprefsshowlistguide(x.id); }
  verifyMyprefsshowlistguideExists(x.id);
  verifyMyprefsshowlistguideUpdated(x.id);
});

bthread("Myprefsshowlistguide nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsshowlistguide(a.id);
  block(matchAddMyprefsshowlistguide(a.id, ANY), function () {});
  addMyprefsshowlistguide(b.id);
});

bthread("Myprefsshowsidebar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsshowsidebar(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsshowsidebar(x.id);
  }
  if (pick([true,false])) { deleteMyprefsshowsidebar(x.id); }
  verifyMyprefsshowsidebarExists(x.id);
  verifyMyprefsshowsidebarUpdated(x.id);
});

bthread("Myprefsshowsidebar nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsshowsidebar(a.id);
  block(matchAddMyprefsshowsidebar(a.id, ANY), function () {});
  addMyprefsshowsidebar(b.id);
});

bthread("Myprefsshowsidebaractivity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsshowsidebaractivity(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsshowsidebaractivity(x.id);
  }
  if (pick([true,false])) { deleteMyprefsshowsidebaractivity(x.id); }
  verifyMyprefsshowsidebaractivityExists(x.id);
  verifyMyprefsshowsidebaractivityUpdated(x.id);
});

bthread("Myprefsshowsidebaractivity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsshowsidebaractivity(a.id);
  block(matchAddMyprefsshowsidebaractivity(a.id, ANY), function () {});
  addMyprefsshowsidebaractivity(b.id);
});

bthread("Myprefsshowsidebarboardactions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsshowsidebarboardactions(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsshowsidebarboardactions(x.id);
  }
  if (pick([true,false])) { deleteMyprefsshowsidebarboardactions(x.id); }
  verifyMyprefsshowsidebarboardactionsExists(x.id);
  verifyMyprefsshowsidebarboardactionsUpdated(x.id);
});

bthread("Myprefsshowsidebarboardactions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsshowsidebarboardactions(a.id);
  block(matchAddMyprefsshowsidebarboardactions(a.id, ANY), function () {});
  addMyprefsshowsidebarboardactions(b.id);
});

bthread("Myprefsshowsidebarmembers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMyprefsshowsidebarmembers(x.id);
  for (var i=0; i<steps; i++) {
    updateMyprefsshowsidebarmembers(x.id);
  }
  if (pick([true,false])) { deleteMyprefsshowsidebarmembers(x.id); }
  verifyMyprefsshowsidebarmembersExists(x.id);
  verifyMyprefsshowsidebarmembersUpdated(x.id);
});

bthread("Myprefsshowsidebarmembers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMyprefsshowsidebarmembers(a.id);
  block(matchAddMyprefsshowsidebarmembers(a.id, ANY), function () {});
  addMyprefsshowsidebarmembers(b.id);
});

bthread("Notifications nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNotifications(x.id);
  for (var i=0; i<steps; i++) {
    updateNotifications(x.id);
  }
  if (pick([true,false])) { deleteNotifications(x.id); }
  verifyNotificationsExists(x.id);
  verifyNotificationsUpdated(x.id);
});

bthread("Notifications nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNotifications(a.id);
  block(matchAddNotifications(a.id, ANY), function () {});
  addNotifications(b.id);
});

bthread("Notificationsunread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNotificationsunread(x.id);
  for (var i=0; i<steps; i++) {
    updateNotificationsunread(x.id);
  }
  if (pick([true,false])) { deleteNotificationsunread(x.id); }
  verifyNotificationsunreadExists(x.id);
  verifyNotificationsunreadUpdated(x.id);
});

bthread("Notificationsunread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNotificationsunread(a.id);
  block(matchAddNotificationsunread(a.id, ANY), function () {});
  addNotificationsunread(b.id);
});

bthread("Organizations nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizations(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizations(x.id);
  }
  if (pick([true,false])) { deleteOrganizations(x.id); }
  verifyOrganizationsExists(x.id);
  verifyOrganizationsUpdated(x.id);
});

bthread("Organizations nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizations(a.id);
  block(matchAddOrganizations(a.id, ANY), function () {});
  addOrganizations(b.id);
});

bthread("Organizationsdesc nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationsdesc(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsdesc(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsdesc(x.id); }
  verifyOrganizationsdescExists(x.id);
  verifyOrganizationsdescUpdated(x.id);
});

bthread("Organizationsdesc nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationsdesc(a.id);
  block(matchAddOrganizationsdesc(a.id, ANY), function () {});
  addOrganizationsdesc(b.id);
});

bthread("Organizationsdisplayname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationsdisplayname(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsdisplayname(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsdisplayname(x.id); }
  verifyOrganizationsdisplaynameExists(x.id);
  verifyOrganizationsdisplaynameUpdated(x.id);
});

bthread("Organizationsdisplayname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationsdisplayname(a.id);
  block(matchAddOrganizationsdisplayname(a.id, ANY), function () {});
  addOrganizationsdisplayname(b.id);
});

bthread("Organizationslogo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationslogo(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationslogo(x.id);
  }
  if (pick([true,false])) { deleteOrganizationslogo(x.id); }
  verifyOrganizationslogoExists(x.id);
  verifyOrganizationslogoUpdated(x.id);
});

bthread("Organizationslogo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationslogo(a.id);
  block(matchAddOrganizationslogo(a.id, ANY), function () {});
  addOrganizationslogo(b.id);
});

bthread("Organizationsmembers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationsmembers(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsmembers(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsmembers(x.id); }
  verifyOrganizationsmembersExists(x.id);
  verifyOrganizationsmembersUpdated(x.id);
});

bthread("Organizationsmembers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationsmembers(a.id);
  block(matchAddOrganizationsmembers(a.id, ANY), function () {});
  addOrganizationsmembers(b.id);
});

bthread("Organizationsmembersdeactivated nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationsmembersdeactivated(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsmembersdeactivated(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsmembersdeactivated(x.id); }
  verifyOrganizationsmembersdeactivatedExists(x.id);
  verifyOrganizationsmembersdeactivatedUpdated(x.id);
});

bthread("Organizationsmembersdeactivated nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationsmembersdeactivated(a.id);
  block(matchAddOrganizationsmembersdeactivated(a.id, ANY), function () {});
  addOrganizationsmembersdeactivated(b.id);
});

bthread("Organizationsmemberships nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationsmemberships(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsmemberships(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsmemberships(x.id); }
  verifyOrganizationsmembershipsExists(x.id);
  verifyOrganizationsmembershipsUpdated(x.id);
});

bthread("Organizationsmemberships nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationsmemberships(a.id);
  block(matchAddOrganizationsmemberships(a.id, ANY), function () {});
  addOrganizationsmemberships(b.id);
});

bthread("Organizationsname nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationsname(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsname(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsname(x.id); }
  verifyOrganizationsnameExists(x.id);
  verifyOrganizationsnameUpdated(x.id);
});

bthread("Organizationsname nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationsname(a.id);
  block(matchAddOrganizationsname(a.id, ANY), function () {});
  addOrganizationsname(b.id);
});

bthread("Organizationswebsite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrganizationswebsite(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationswebsite(x.id);
  }
  if (pick([true,false])) { deleteOrganizationswebsite(x.id); }
  verifyOrganizationswebsiteExists(x.id);
  verifyOrganizationswebsiteUpdated(x.id);
});

bthread("Organizationswebsite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrganizationswebsite(a.id);
  block(matchAddOrganizationswebsite(a.id, ANY), function () {});
  addOrganizationswebsite(b.id);
});

bthread("Prefsassociateddomain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsassociateddomain(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsassociateddomain(x.id);
  }
  if (pick([true,false])) { deletePrefsassociateddomain(x.id); }
  verifyPrefsassociateddomainExists(x.id);
  verifyPrefsassociateddomainUpdated(x.id);
});

bthread("Prefsassociateddomain nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsassociateddomain(a.id);
  block(matchAddPrefsassociateddomain(a.id, ANY), function () {});
  addPrefsassociateddomain(b.id);
});

bthread("Prefsbackground nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsbackground(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsbackground(x.id);
  }
  if (pick([true,false])) { deletePrefsbackground(x.id); }
  verifyPrefsbackgroundExists(x.id);
  verifyPrefsbackgroundUpdated(x.id);
});

bthread("Prefsbackground nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsbackground(a.id);
  block(matchAddPrefsbackground(a.id, ANY), function () {});
  addPrefsbackground(b.id);
});

bthread("Prefsboardvisibilityrestrict nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsboardvisibilityrestrict(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsboardvisibilityrestrict(x.id);
  }
  if (pick([true,false])) { deletePrefsboardvisibilityrestrict(x.id); }
  verifyPrefsboardvisibilityrestrictExists(x.id);
  verifyPrefsboardvisibilityrestrictUpdated(x.id);
});

bthread("Prefsboardvisibilityrestrict nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsboardvisibilityrestrict(a.id);
  block(matchAddPrefsboardvisibilityrestrict(a.id, ANY), function () {});
  addPrefsboardvisibilityrestrict(b.id);
});

bthread("Prefscalendarfeedenabled nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefscalendarfeedenabled(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefscalendarfeedenabled(x.id);
  }
  if (pick([true,false])) { deletePrefscalendarfeedenabled(x.id); }
  verifyPrefscalendarfeedenabledExists(x.id);
  verifyPrefscalendarfeedenabledUpdated(x.id);
});

bthread("Prefscalendarfeedenabled nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefscalendarfeedenabled(a.id);
  block(matchAddPrefscalendarfeedenabled(a.id, ANY), function () {});
  addPrefscalendarfeedenabled(b.id);
});

bthread("Prefscardaging nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefscardaging(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefscardaging(x.id);
  }
  if (pick([true,false])) { deletePrefscardaging(x.id); }
  verifyPrefscardagingExists(x.id);
  verifyPrefscardagingUpdated(x.id);
});

bthread("Prefscardaging nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefscardaging(a.id);
  block(matchAddPrefscardaging(a.id, ANY), function () {});
  addPrefscardaging(b.id);
});

bthread("Prefscardcovers nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefscardcovers(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefscardcovers(x.id);
  }
  if (pick([true,false])) { deletePrefscardcovers(x.id); }
  verifyPrefscardcoversExists(x.id);
  verifyPrefscardcoversUpdated(x.id);
});

bthread("Prefscardcovers nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefscardcovers(a.id);
  block(matchAddPrefscardcovers(a.id, ANY), function () {});
  addPrefscardcovers(b.id);
});

bthread("Prefscolorblind nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefscolorblind(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefscolorblind(x.id);
  }
  if (pick([true,false])) { deletePrefscolorblind(x.id); }
  verifyPrefscolorblindExists(x.id);
  verifyPrefscolorblindUpdated(x.id);
});

bthread("Prefscolorblind nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefscolorblind(a.id);
  block(matchAddPrefscolorblind(a.id, ANY), function () {});
  addPrefscolorblind(b.id);
});

bthread("Prefscomments nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefscomments(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefscomments(x.id);
  }
  if (pick([true,false])) { deletePrefscomments(x.id); }
  verifyPrefscommentsExists(x.id);
  verifyPrefscommentsUpdated(x.id);
});

bthread("Prefscomments nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefscomments(a.id);
  block(matchAddPrefscomments(a.id, ANY), function () {});
  addPrefscomments(b.id);
});

bthread("Prefsexternalmembersdisabled nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsexternalmembersdisabled(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsexternalmembersdisabled(x.id);
  }
  if (pick([true,false])) { deletePrefsexternalmembersdisabled(x.id); }
  verifyPrefsexternalmembersdisabledExists(x.id);
  verifyPrefsexternalmembersdisabledUpdated(x.id);
});

bthread("Prefsexternalmembersdisabled nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsexternalmembersdisabled(a.id);
  block(matchAddPrefsexternalmembersdisabled(a.id, ANY), function () {});
  addPrefsexternalmembersdisabled(b.id);
});

bthread("Prefsgoogleappsversion nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsgoogleappsversion(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsgoogleappsversion(x.id);
  }
  if (pick([true,false])) { deletePrefsgoogleappsversion(x.id); }
  verifyPrefsgoogleappsversionExists(x.id);
  verifyPrefsgoogleappsversionUpdated(x.id);
});

bthread("Prefsgoogleappsversion nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsgoogleappsversion(a.id);
  block(matchAddPrefsgoogleappsversion(a.id, ANY), function () {});
  addPrefsgoogleappsversion(b.id);
});

bthread("Prefsinvitations nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsinvitations(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsinvitations(x.id);
  }
  if (pick([true,false])) { deletePrefsinvitations(x.id); }
  verifyPrefsinvitationsExists(x.id);
  verifyPrefsinvitationsUpdated(x.id);
});

bthread("Prefsinvitations nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsinvitations(a.id);
  block(matchAddPrefsinvitations(a.id, ANY), function () {});
  addPrefsinvitations(b.id);
});

bthread("Prefslocale nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefslocale(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefslocale(x.id);
  }
  if (pick([true,false])) { deletePrefslocale(x.id); }
  verifyPrefslocaleExists(x.id);
  verifyPrefslocaleUpdated(x.id);
});

bthread("Prefslocale nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefslocale(a.id);
  block(matchAddPrefslocale(a.id, ANY), function () {});
  addPrefslocale(b.id);
});

bthread("Prefsminutesbetweensummaries nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsminutesbetweensummaries(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsminutesbetweensummaries(x.id);
  }
  if (pick([true,false])) { deletePrefsminutesbetweensummaries(x.id); }
  verifyPrefsminutesbetweensummariesExists(x.id);
  verifyPrefsminutesbetweensummariesUpdated(x.id);
});

bthread("Prefsminutesbetweensummaries nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsminutesbetweensummaries(a.id);
  block(matchAddPrefsminutesbetweensummaries(a.id, ANY), function () {});
  addPrefsminutesbetweensummaries(b.id);
});

bthread("Prefsorginviterestrict nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsorginviterestrict(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsorginviterestrict(x.id);
  }
  if (pick([true,false])) { deletePrefsorginviterestrict(x.id); }
  verifyPrefsorginviterestrictExists(x.id);
  verifyPrefsorginviterestrictUpdated(x.id);
});

bthread("Prefsorginviterestrict nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsorginviterestrict(a.id);
  block(matchAddPrefsorginviterestrict(a.id, ANY), function () {});
  addPrefsorginviterestrict(b.id);
});

bthread("Prefspermissionlevel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefspermissionlevel(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefspermissionlevel(x.id);
  }
  if (pick([true,false])) { deletePrefspermissionlevel(x.id); }
  verifyPrefspermissionlevelExists(x.id);
  verifyPrefspermissionlevelUpdated(x.id);
});

bthread("Prefspermissionlevel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefspermissionlevel(a.id);
  block(matchAddPrefspermissionlevel(a.id, ANY), function () {});
  addPrefspermissionlevel(b.id);
});

bthread("Prefsselfjoin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsselfjoin(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsselfjoin(x.id);
  }
  if (pick([true,false])) { deletePrefsselfjoin(x.id); }
  verifyPrefsselfjoinExists(x.id);
  verifyPrefsselfjoinUpdated(x.id);
});

bthread("Prefsselfjoin nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsselfjoin(a.id);
  block(matchAddPrefsselfjoin(a.id, ANY), function () {});
  addPrefsselfjoin(b.id);
});

bthread("Prefsvoting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPrefsvoting(x.id);
  for (var i=0; i<steps; i++) {
    updatePrefsvoting(x.id);
  }
  if (pick([true,false])) { deletePrefsvoting(x.id); }
  verifyPrefsvotingExists(x.id);
  verifyPrefsvotingUpdated(x.id);
});

bthread("Prefsvoting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPrefsvoting(a.id);
  block(matchAddPrefsvoting(a.id, ANY), function () {});
  addPrefsvoting(b.id);
});

bthread("Sessions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSessions(x.id);
  for (var i=0; i<steps; i++) {
    updateSessions(x.id);
  }
  if (pick([true,false])) { deleteSessions(x.id); }
  verifySessionsExists(x.id);
  verifySessionsUpdated(x.id);
});

bthread("Sessions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSessions(a.id);
  block(matchAddSessions(a.id, ANY), function () {});
  addSessions(b.id);
});

bthread("Sessionsstatus nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSessionsstatus(x.id);
  for (var i=0; i<steps; i++) {
    updateSessionsstatus(x.id);
  }
  if (pick([true,false])) { deleteSessionsstatus(x.id); }
  verifySessionsstatusExists(x.id);
  verifySessionsstatusUpdated(x.id);
});

bthread("Sessionsstatus nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSessionsstatus(a.id);
  block(matchAddSessionsstatus(a.id, ANY), function () {});
  addSessionsstatus(b.id);
});

bthread("Tokenswebhooks nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTokenswebhooks(x.id);
  for (var i=0; i<steps; i++) {
    updateTokenswebhooks(x.id);
  }
  if (pick([true,false])) { deleteTokenswebhooks(x.id); }
  verifyTokenswebhooksExists(x.id);
  verifyTokenswebhooksUpdated(x.id);
});

bthread("Tokenswebhooks nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTokenswebhooks(a.id);
  block(matchAddTokenswebhooks(a.id, ANY), function () {});
  addTokenswebhooks(b.id);
});

bthread("Webhooks nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhooks(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhooks(x.id);
  }
  if (pick([true,false])) { deleteWebhooks(x.id); }
  verifyWebhooksExists(x.id);
  verifyWebhooksUpdated(x.id);
});

bthread("Webhooks nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhooks(a.id);
  block(matchAddWebhooks(a.id, ANY), function () {});
  addWebhooks(b.id);
});

bthread("Webhooksactive nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhooksactive(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhooksactive(x.id);
  }
  if (pick([true,false])) { deleteWebhooksactive(x.id); }
  verifyWebhooksactiveExists(x.id);
  verifyWebhooksactiveUpdated(x.id);
});

bthread("Webhooksactive nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhooksactive(a.id);
  block(matchAddWebhooksactive(a.id, ANY), function () {});
  addWebhooksactive(b.id);
});

bthread("Webhookscallbackurl nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhookscallbackurl(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhookscallbackurl(x.id);
  }
  if (pick([true,false])) { deleteWebhookscallbackurl(x.id); }
  verifyWebhookscallbackurlExists(x.id);
  verifyWebhookscallbackurlUpdated(x.id);
});

bthread("Webhookscallbackurl nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhookscallbackurl(a.id);
  block(matchAddWebhookscallbackurl(a.id, ANY), function () {});
  addWebhookscallbackurl(b.id);
});

bthread("Webhooksdescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhooksdescription(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhooksdescription(x.id);
  }
  if (pick([true,false])) { deleteWebhooksdescription(x.id); }
  verifyWebhooksdescriptionExists(x.id);
  verifyWebhooksdescriptionUpdated(x.id);
});

bthread("Webhooksdescription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhooksdescription(a.id);
  block(matchAddWebhooksdescription(a.id, ANY), function () {});
  addWebhooksdescription(b.id);
});

bthread("Webhooksidmodel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhooksidmodel(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhooksidmodel(x.id);
  }
  if (pick([true,false])) { deleteWebhooksidmodel(x.id); }
  verifyWebhooksidmodelExists(x.id);
  verifyWebhooksidmodelUpdated(x.id);
});

bthread("Webhooksidmodel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhooksidmodel(a.id);
  block(matchAddWebhooksidmodel(a.id, ANY), function () {});
  addWebhooksidmodel(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Actions create verification", function () {
  const e = waitForAnyActionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActions(k), function () {
    verifyActionsExists(k);
  });
});

bthread("Actions update verification", function () {
  const e = waitForAnyActionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActions(k), function () {
    verifyActionsUpdated(k);
  });
});

bthread("Actions delete verification", function () {
  const e = waitForAnyActionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActions(k), function () {
    verifyActionsDoesNotExist(k);
  });
});

bthread("Actionscomments create verification", function () {
  const e = waitForAnyActionscommentsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActionscomments(k), function () {
    verifyActionscommentsExists(k);
  });
});

bthread("Actionscomments update verification", function () {
  const e = waitForAnyActionscommentsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActionscomments(k), function () {
    verifyActionscommentsUpdated(k);
  });
});

bthread("Actionscomments delete verification", function () {
  const e = waitForAnyActionscommentsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActionscomments(k), function () {
    verifyActionscommentsDoesNotExist(k);
  });
});

bthread("Actionstext create verification", function () {
  const e = waitForAnyActionstextAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActionstext(k), function () {
    verifyActionstextExists(k);
  });
});

bthread("Actionstext update verification", function () {
  const e = waitForAnyActionstextUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActionstext(k), function () {
    verifyActionstextUpdated(k);
  });
});

bthread("Actionstext delete verification", function () {
  const e = waitForAnyActionstextDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActionstext(k), function () {
    verifyActionstextDoesNotExist(k);
  });
});

bthread("Boards create verification", function () {
  const e = waitForAnyBoardsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoards(k), function () {
    verifyBoardsExists(k);
  });
});

bthread("Boards update verification", function () {
  const e = waitForAnyBoardsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoards(k), function () {
    verifyBoardsUpdated(k);
  });
});

bthread("Boards delete verification", function () {
  const e = waitForAnyBoardsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoards(k), function () {
    verifyBoardsDoesNotExist(k);
  });
});

bthread("Boardschecklists create verification", function () {
  const e = waitForAnyBoardschecklistsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardschecklists(k), function () {
    verifyBoardschecklistsExists(k);
  });
});

bthread("Boardschecklists update verification", function () {
  const e = waitForAnyBoardschecklistsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardschecklists(k), function () {
    verifyBoardschecklistsUpdated(k);
  });
});

bthread("Boardschecklists delete verification", function () {
  const e = waitForAnyBoardschecklistsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardschecklists(k), function () {
    verifyBoardschecklistsDoesNotExist(k);
  });
});

bthread("Boardsclosed create verification", function () {
  const e = waitForAnyBoardsclosedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsclosed(k), function () {
    verifyBoardsclosedExists(k);
  });
});

bthread("Boardsclosed update verification", function () {
  const e = waitForAnyBoardsclosedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsclosed(k), function () {
    verifyBoardsclosedUpdated(k);
  });
});

bthread("Boardsclosed delete verification", function () {
  const e = waitForAnyBoardsclosedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardsclosed(k), function () {
    verifyBoardsclosedDoesNotExist(k);
  });
});

bthread("Boardsdesc create verification", function () {
  const e = waitForAnyBoardsdescAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsdesc(k), function () {
    verifyBoardsdescExists(k);
  });
});

bthread("Boardsdesc update verification", function () {
  const e = waitForAnyBoardsdescUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsdesc(k), function () {
    verifyBoardsdescUpdated(k);
  });
});

bthread("Boardsdesc delete verification", function () {
  const e = waitForAnyBoardsdescDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardsdesc(k), function () {
    verifyBoardsdescDoesNotExist(k);
  });
});

bthread("Boardsidorganization create verification", function () {
  const e = waitForAnyBoardsidorganizationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsidorganization(k), function () {
    verifyBoardsidorganizationExists(k);
  });
});

bthread("Boardsidorganization update verification", function () {
  const e = waitForAnyBoardsidorganizationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsidorganization(k), function () {
    verifyBoardsidorganizationUpdated(k);
  });
});

bthread("Boardsidorganization delete verification", function () {
  const e = waitForAnyBoardsidorganizationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardsidorganization(k), function () {
    verifyBoardsidorganizationDoesNotExist(k);
  });
});

bthread("Boardslabels create verification", function () {
  const e = waitForAnyBoardslabelsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardslabels(k), function () {
    verifyBoardslabelsExists(k);
  });
});

bthread("Boardslabels update verification", function () {
  const e = waitForAnyBoardslabelsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardslabels(k), function () {
    verifyBoardslabelsUpdated(k);
  });
});

bthread("Boardslabels delete verification", function () {
  const e = waitForAnyBoardslabelsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardslabels(k), function () {
    verifyBoardslabelsDoesNotExist(k);
  });
});

bthread("Boardslists create verification", function () {
  const e = waitForAnyBoardslistsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardslists(k), function () {
    verifyBoardslistsExists(k);
  });
});

bthread("Boardslists update verification", function () {
  const e = waitForAnyBoardslistsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardslists(k), function () {
    verifyBoardslistsUpdated(k);
  });
});

bthread("Boardslists delete verification", function () {
  const e = waitForAnyBoardslistsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardslists(k), function () {
    verifyBoardslistsDoesNotExist(k);
  });
});

bthread("Boardsmembers create verification", function () {
  const e = waitForAnyBoardsmembersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsmembers(k), function () {
    verifyBoardsmembersExists(k);
  });
});

bthread("Boardsmembers update verification", function () {
  const e = waitForAnyBoardsmembersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsmembers(k), function () {
    verifyBoardsmembersUpdated(k);
  });
});

bthread("Boardsmembers delete verification", function () {
  const e = waitForAnyBoardsmembersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardsmembers(k), function () {
    verifyBoardsmembersDoesNotExist(k);
  });
});

bthread("Boardsmemberships create verification", function () {
  const e = waitForAnyBoardsmembershipsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsmemberships(k), function () {
    verifyBoardsmembershipsExists(k);
  });
});

bthread("Boardsmemberships update verification", function () {
  const e = waitForAnyBoardsmembershipsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsmemberships(k), function () {
    verifyBoardsmembershipsUpdated(k);
  });
});

bthread("Boardsmemberships delete verification", function () {
  const e = waitForAnyBoardsmembershipsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardsmemberships(k), function () {
    verifyBoardsmembershipsDoesNotExist(k);
  });
});

bthread("Boardsname create verification", function () {
  const e = waitForAnyBoardsnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsname(k), function () {
    verifyBoardsnameExists(k);
  });
});

bthread("Boardsname update verification", function () {
  const e = waitForAnyBoardsnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardsname(k), function () {
    verifyBoardsnameUpdated(k);
  });
});

bthread("Boardsname delete verification", function () {
  const e = waitForAnyBoardsnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardsname(k), function () {
    verifyBoardsnameDoesNotExist(k);
  });
});

bthread("Boardspowerups create verification", function () {
  const e = waitForAnyBoardspowerupsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardspowerups(k), function () {
    verifyBoardspowerupsExists(k);
  });
});

bthread("Boardspowerups update verification", function () {
  const e = waitForAnyBoardspowerupsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardspowerups(k), function () {
    verifyBoardspowerupsUpdated(k);
  });
});

bthread("Boardspowerups delete verification", function () {
  const e = waitForAnyBoardspowerupsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardspowerups(k), function () {
    verifyBoardspowerupsDoesNotExist(k);
  });
});

bthread("Boardssubscribed create verification", function () {
  const e = waitForAnyBoardssubscribedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardssubscribed(k), function () {
    verifyBoardssubscribedExists(k);
  });
});

bthread("Boardssubscribed update verification", function () {
  const e = waitForAnyBoardssubscribedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBoardssubscribed(k), function () {
    verifyBoardssubscribedUpdated(k);
  });
});

bthread("Boardssubscribed delete verification", function () {
  const e = waitForAnyBoardssubscribedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBoardssubscribed(k), function () {
    verifyBoardssubscribedDoesNotExist(k);
  });
});

bthread("Cards create verification", function () {
  const e = waitForAnyCardsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCards(k), function () {
    verifyCardsExists(k);
  });
});

bthread("Cards update verification", function () {
  const e = waitForAnyCardsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCards(k), function () {
    verifyCardsUpdated(k);
  });
});

bthread("Cards delete verification", function () {
  const e = waitForAnyCardsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCards(k), function () {
    verifyCardsDoesNotExist(k);
  });
});

bthread("Cardsactionscomments create verification", function () {
  const e = waitForAnyCardsactionscommentsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsactionscomments(k), function () {
    verifyCardsactionscommentsExists(k);
  });
});

bthread("Cardsactionscomments update verification", function () {
  const e = waitForAnyCardsactionscommentsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsactionscomments(k), function () {
    verifyCardsactionscommentsUpdated(k);
  });
});

bthread("Cardsactionscomments delete verification", function () {
  const e = waitForAnyCardsactionscommentsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsactionscomments(k), function () {
    verifyCardsactionscommentsDoesNotExist(k);
  });
});

bthread("Cardsattachments create verification", function () {
  const e = waitForAnyCardsattachmentsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsattachments(k), function () {
    verifyCardsattachmentsExists(k);
  });
});

bthread("Cardsattachments update verification", function () {
  const e = waitForAnyCardsattachmentsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsattachments(k), function () {
    verifyCardsattachmentsUpdated(k);
  });
});

bthread("Cardsattachments delete verification", function () {
  const e = waitForAnyCardsattachmentsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsattachments(k), function () {
    verifyCardsattachmentsDoesNotExist(k);
  });
});

bthread("Cardschecklistcheckitem create verification", function () {
  const e = waitForAnyCardschecklistcheckitemAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitem(k), function () {
    verifyCardschecklistcheckitemExists(k);
  });
});

bthread("Cardschecklistcheckitem update verification", function () {
  const e = waitForAnyCardschecklistcheckitemUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitem(k), function () {
    verifyCardschecklistcheckitemUpdated(k);
  });
});

bthread("Cardschecklistcheckitem delete verification", function () {
  const e = waitForAnyCardschecklistcheckitemDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardschecklistcheckitem(k), function () {
    verifyCardschecklistcheckitemDoesNotExist(k);
  });
});

bthread("Cardschecklistcheckitemname create verification", function () {
  const e = waitForAnyCardschecklistcheckitemnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitemname(k), function () {
    verifyCardschecklistcheckitemnameExists(k);
  });
});

bthread("Cardschecklistcheckitemname update verification", function () {
  const e = waitForAnyCardschecklistcheckitemnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitemname(k), function () {
    verifyCardschecklistcheckitemnameUpdated(k);
  });
});

bthread("Cardschecklistcheckitemname delete verification", function () {
  const e = waitForAnyCardschecklistcheckitemnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardschecklistcheckitemname(k), function () {
    verifyCardschecklistcheckitemnameDoesNotExist(k);
  });
});

bthread("Cardschecklistcheckitempos create verification", function () {
  const e = waitForAnyCardschecklistcheckitemposAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitempos(k), function () {
    verifyCardschecklistcheckitemposExists(k);
  });
});

bthread("Cardschecklistcheckitempos update verification", function () {
  const e = waitForAnyCardschecklistcheckitemposUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitempos(k), function () {
    verifyCardschecklistcheckitemposUpdated(k);
  });
});

bthread("Cardschecklistcheckitempos delete verification", function () {
  const e = waitForAnyCardschecklistcheckitemposDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardschecklistcheckitempos(k), function () {
    verifyCardschecklistcheckitemposDoesNotExist(k);
  });
});

bthread("Cardschecklistcheckitemstate create verification", function () {
  const e = waitForAnyCardschecklistcheckitemstateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitemstate(k), function () {
    verifyCardschecklistcheckitemstateExists(k);
  });
});

bthread("Cardschecklistcheckitemstate update verification", function () {
  const e = waitForAnyCardschecklistcheckitemstateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistcheckitemstate(k), function () {
    verifyCardschecklistcheckitemstateUpdated(k);
  });
});

bthread("Cardschecklistcheckitemstate delete verification", function () {
  const e = waitForAnyCardschecklistcheckitemstateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardschecklistcheckitemstate(k), function () {
    verifyCardschecklistcheckitemstateDoesNotExist(k);
  });
});

bthread("Cardschecklistidchecklistcurrentcheckitem create verification", function () {
  const e = waitForAnyCardschecklistidchecklistcurrentcheckitemAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistidchecklistcurrentcheckitem(k), function () {
    verifyCardschecklistidchecklistcurrentcheckitemExists(k);
  });
});

bthread("Cardschecklistidchecklistcurrentcheckitem update verification", function () {
  const e = waitForAnyCardschecklistidchecklistcurrentcheckitemUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklistidchecklistcurrentcheckitem(k), function () {
    verifyCardschecklistidchecklistcurrentcheckitemUpdated(k);
  });
});

bthread("Cardschecklistidchecklistcurrentcheckitem delete verification", function () {
  const e = waitForAnyCardschecklistidchecklistcurrentcheckitemDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardschecklistidchecklistcurrentcheckitem(k), function () {
    verifyCardschecklistidchecklistcurrentcheckitemDoesNotExist(k);
  });
});

bthread("Cardschecklists create verification", function () {
  const e = waitForAnyCardschecklistsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklists(k), function () {
    verifyCardschecklistsExists(k);
  });
});

bthread("Cardschecklists update verification", function () {
  const e = waitForAnyCardschecklistsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardschecklists(k), function () {
    verifyCardschecklistsUpdated(k);
  });
});

bthread("Cardschecklists delete verification", function () {
  const e = waitForAnyCardschecklistsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardschecklists(k), function () {
    verifyCardschecklistsDoesNotExist(k);
  });
});

bthread("Cardsclosed create verification", function () {
  const e = waitForAnyCardsclosedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsclosed(k), function () {
    verifyCardsclosedExists(k);
  });
});

bthread("Cardsclosed update verification", function () {
  const e = waitForAnyCardsclosedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsclosed(k), function () {
    verifyCardsclosedUpdated(k);
  });
});

bthread("Cardsclosed delete verification", function () {
  const e = waitForAnyCardsclosedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsclosed(k), function () {
    verifyCardsclosedDoesNotExist(k);
  });
});

bthread("Cardsdesc create verification", function () {
  const e = waitForAnyCardsdescAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsdesc(k), function () {
    verifyCardsdescExists(k);
  });
});

bthread("Cardsdesc update verification", function () {
  const e = waitForAnyCardsdescUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsdesc(k), function () {
    verifyCardsdescUpdated(k);
  });
});

bthread("Cardsdesc delete verification", function () {
  const e = waitForAnyCardsdescDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsdesc(k), function () {
    verifyCardsdescDoesNotExist(k);
  });
});

bthread("Cardsdue create verification", function () {
  const e = waitForAnyCardsdueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsdue(k), function () {
    verifyCardsdueExists(k);
  });
});

bthread("Cardsdue update verification", function () {
  const e = waitForAnyCardsdueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsdue(k), function () {
    verifyCardsdueUpdated(k);
  });
});

bthread("Cardsdue delete verification", function () {
  const e = waitForAnyCardsdueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsdue(k), function () {
    verifyCardsdueDoesNotExist(k);
  });
});

bthread("Cardsidattachmentcover create verification", function () {
  const e = waitForAnyCardsidattachmentcoverAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidattachmentcover(k), function () {
    verifyCardsidattachmentcoverExists(k);
  });
});

bthread("Cardsidattachmentcover update verification", function () {
  const e = waitForAnyCardsidattachmentcoverUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidattachmentcover(k), function () {
    verifyCardsidattachmentcoverUpdated(k);
  });
});

bthread("Cardsidattachmentcover delete verification", function () {
  const e = waitForAnyCardsidattachmentcoverDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsidattachmentcover(k), function () {
    verifyCardsidattachmentcoverDoesNotExist(k);
  });
});

bthread("Cardsidboard create verification", function () {
  const e = waitForAnyCardsidboardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidboard(k), function () {
    verifyCardsidboardExists(k);
  });
});

bthread("Cardsidboard update verification", function () {
  const e = waitForAnyCardsidboardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidboard(k), function () {
    verifyCardsidboardUpdated(k);
  });
});

bthread("Cardsidboard delete verification", function () {
  const e = waitForAnyCardsidboardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsidboard(k), function () {
    verifyCardsidboardDoesNotExist(k);
  });
});

bthread("Cardsidlabels create verification", function () {
  const e = waitForAnyCardsidlabelsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidlabels(k), function () {
    verifyCardsidlabelsExists(k);
  });
});

bthread("Cardsidlabels update verification", function () {
  const e = waitForAnyCardsidlabelsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidlabels(k), function () {
    verifyCardsidlabelsUpdated(k);
  });
});

bthread("Cardsidlabels delete verification", function () {
  const e = waitForAnyCardsidlabelsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsidlabels(k), function () {
    verifyCardsidlabelsDoesNotExist(k);
  });
});

bthread("Cardsidlist create verification", function () {
  const e = waitForAnyCardsidlistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidlist(k), function () {
    verifyCardsidlistExists(k);
  });
});

bthread("Cardsidlist update verification", function () {
  const e = waitForAnyCardsidlistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidlist(k), function () {
    verifyCardsidlistUpdated(k);
  });
});

bthread("Cardsidlist delete verification", function () {
  const e = waitForAnyCardsidlistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsidlist(k), function () {
    verifyCardsidlistDoesNotExist(k);
  });
});

bthread("Cardsidmembers create verification", function () {
  const e = waitForAnyCardsidmembersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidmembers(k), function () {
    verifyCardsidmembersExists(k);
  });
});

bthread("Cardsidmembers update verification", function () {
  const e = waitForAnyCardsidmembersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsidmembers(k), function () {
    verifyCardsidmembersUpdated(k);
  });
});

bthread("Cardsidmembers delete verification", function () {
  const e = waitForAnyCardsidmembersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsidmembers(k), function () {
    verifyCardsidmembersDoesNotExist(k);
  });
});

bthread("Cardslabels create verification", function () {
  const e = waitForAnyCardslabelsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardslabels(k), function () {
    verifyCardslabelsExists(k);
  });
});

bthread("Cardslabels update verification", function () {
  const e = waitForAnyCardslabelsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardslabels(k), function () {
    verifyCardslabelsUpdated(k);
  });
});

bthread("Cardslabels delete verification", function () {
  const e = waitForAnyCardslabelsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardslabels(k), function () {
    verifyCardslabelsDoesNotExist(k);
  });
});

bthread("Cardsmembersvoted create verification", function () {
  const e = waitForAnyCardsmembersvotedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsmembersvoted(k), function () {
    verifyCardsmembersvotedExists(k);
  });
});

bthread("Cardsmembersvoted update verification", function () {
  const e = waitForAnyCardsmembersvotedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsmembersvoted(k), function () {
    verifyCardsmembersvotedUpdated(k);
  });
});

bthread("Cardsmembersvoted delete verification", function () {
  const e = waitForAnyCardsmembersvotedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsmembersvoted(k), function () {
    verifyCardsmembersvotedDoesNotExist(k);
  });
});

bthread("Cardsname create verification", function () {
  const e = waitForAnyCardsnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsname(k), function () {
    verifyCardsnameExists(k);
  });
});

bthread("Cardsname update verification", function () {
  const e = waitForAnyCardsnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsname(k), function () {
    verifyCardsnameUpdated(k);
  });
});

bthread("Cardsname delete verification", function () {
  const e = waitForAnyCardsnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsname(k), function () {
    verifyCardsnameDoesNotExist(k);
  });
});

bthread("Cardspos create verification", function () {
  const e = waitForAnyCardsposAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardspos(k), function () {
    verifyCardsposExists(k);
  });
});

bthread("Cardspos update verification", function () {
  const e = waitForAnyCardsposUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardspos(k), function () {
    verifyCardsposUpdated(k);
  });
});

bthread("Cardspos delete verification", function () {
  const e = waitForAnyCardsposDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardspos(k), function () {
    verifyCardsposDoesNotExist(k);
  });
});

bthread("Cardsstickers create verification", function () {
  const e = waitForAnyCardsstickersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsstickers(k), function () {
    verifyCardsstickersExists(k);
  });
});

bthread("Cardsstickers update verification", function () {
  const e = waitForAnyCardsstickersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardsstickers(k), function () {
    verifyCardsstickersUpdated(k);
  });
});

bthread("Cardsstickers delete verification", function () {
  const e = waitForAnyCardsstickersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardsstickers(k), function () {
    verifyCardsstickersDoesNotExist(k);
  });
});

bthread("Cardssubscribed create verification", function () {
  const e = waitForAnyCardssubscribedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardssubscribed(k), function () {
    verifyCardssubscribedExists(k);
  });
});

bthread("Cardssubscribed update verification", function () {
  const e = waitForAnyCardssubscribedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCardssubscribed(k), function () {
    verifyCardssubscribedUpdated(k);
  });
});

bthread("Cardssubscribed delete verification", function () {
  const e = waitForAnyCardssubscribedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCardssubscribed(k), function () {
    verifyCardssubscribedDoesNotExist(k);
  });
});

bthread("Checklists create verification", function () {
  const e = waitForAnyChecklistsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklists(k), function () {
    verifyChecklistsExists(k);
  });
});

bthread("Checklists update verification", function () {
  const e = waitForAnyChecklistsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklists(k), function () {
    verifyChecklistsUpdated(k);
  });
});

bthread("Checklists delete verification", function () {
  const e = waitForAnyChecklistsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChecklists(k), function () {
    verifyChecklistsDoesNotExist(k);
  });
});

bthread("Checklistscheckitems create verification", function () {
  const e = waitForAnyChecklistscheckitemsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistscheckitems(k), function () {
    verifyChecklistscheckitemsExists(k);
  });
});

bthread("Checklistscheckitems update verification", function () {
  const e = waitForAnyChecklistscheckitemsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistscheckitems(k), function () {
    verifyChecklistscheckitemsUpdated(k);
  });
});

bthread("Checklistscheckitems delete verification", function () {
  const e = waitForAnyChecklistscheckitemsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChecklistscheckitems(k), function () {
    verifyChecklistscheckitemsDoesNotExist(k);
  });
});

bthread("Checklistsidcard create verification", function () {
  const e = waitForAnyChecklistsidcardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistsidcard(k), function () {
    verifyChecklistsidcardExists(k);
  });
});

bthread("Checklistsidcard update verification", function () {
  const e = waitForAnyChecklistsidcardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistsidcard(k), function () {
    verifyChecklistsidcardUpdated(k);
  });
});

bthread("Checklistsidcard delete verification", function () {
  const e = waitForAnyChecklistsidcardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChecklistsidcard(k), function () {
    verifyChecklistsidcardDoesNotExist(k);
  });
});

bthread("Checklistsname create verification", function () {
  const e = waitForAnyChecklistsnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistsname(k), function () {
    verifyChecklistsnameExists(k);
  });
});

bthread("Checklistsname update verification", function () {
  const e = waitForAnyChecklistsnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistsname(k), function () {
    verifyChecklistsnameUpdated(k);
  });
});

bthread("Checklistsname delete verification", function () {
  const e = waitForAnyChecklistsnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChecklistsname(k), function () {
    verifyChecklistsnameDoesNotExist(k);
  });
});

bthread("Checklistspos create verification", function () {
  const e = waitForAnyChecklistsposAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistspos(k), function () {
    verifyChecklistsposExists(k);
  });
});

bthread("Checklistspos update verification", function () {
  const e = waitForAnyChecklistsposUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecklistspos(k), function () {
    verifyChecklistsposUpdated(k);
  });
});

bthread("Checklistspos delete verification", function () {
  const e = waitForAnyChecklistsposDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChecklistspos(k), function () {
    verifyChecklistsposDoesNotExist(k);
  });
});

bthread("Labelnamesblue create verification", function () {
  const e = waitForAnyLabelnamesblueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesblue(k), function () {
    verifyLabelnamesblueExists(k);
  });
});

bthread("Labelnamesblue update verification", function () {
  const e = waitForAnyLabelnamesblueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesblue(k), function () {
    verifyLabelnamesblueUpdated(k);
  });
});

bthread("Labelnamesblue delete verification", function () {
  const e = waitForAnyLabelnamesblueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelnamesblue(k), function () {
    verifyLabelnamesblueDoesNotExist(k);
  });
});

bthread("Labelnamesgreen create verification", function () {
  const e = waitForAnyLabelnamesgreenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesgreen(k), function () {
    verifyLabelnamesgreenExists(k);
  });
});

bthread("Labelnamesgreen update verification", function () {
  const e = waitForAnyLabelnamesgreenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesgreen(k), function () {
    verifyLabelnamesgreenUpdated(k);
  });
});

bthread("Labelnamesgreen delete verification", function () {
  const e = waitForAnyLabelnamesgreenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelnamesgreen(k), function () {
    verifyLabelnamesgreenDoesNotExist(k);
  });
});

bthread("Labelnamesorange create verification", function () {
  const e = waitForAnyLabelnamesorangeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesorange(k), function () {
    verifyLabelnamesorangeExists(k);
  });
});

bthread("Labelnamesorange update verification", function () {
  const e = waitForAnyLabelnamesorangeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesorange(k), function () {
    verifyLabelnamesorangeUpdated(k);
  });
});

bthread("Labelnamesorange delete verification", function () {
  const e = waitForAnyLabelnamesorangeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelnamesorange(k), function () {
    verifyLabelnamesorangeDoesNotExist(k);
  });
});

bthread("Labelnamespurple create verification", function () {
  const e = waitForAnyLabelnamespurpleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamespurple(k), function () {
    verifyLabelnamespurpleExists(k);
  });
});

bthread("Labelnamespurple update verification", function () {
  const e = waitForAnyLabelnamespurpleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamespurple(k), function () {
    verifyLabelnamespurpleUpdated(k);
  });
});

bthread("Labelnamespurple delete verification", function () {
  const e = waitForAnyLabelnamespurpleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelnamespurple(k), function () {
    verifyLabelnamespurpleDoesNotExist(k);
  });
});

bthread("Labelnamesred create verification", function () {
  const e = waitForAnyLabelnamesredAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesred(k), function () {
    verifyLabelnamesredExists(k);
  });
});

bthread("Labelnamesred update verification", function () {
  const e = waitForAnyLabelnamesredUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesred(k), function () {
    verifyLabelnamesredUpdated(k);
  });
});

bthread("Labelnamesred delete verification", function () {
  const e = waitForAnyLabelnamesredDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelnamesred(k), function () {
    verifyLabelnamesredDoesNotExist(k);
  });
});

bthread("Labelnamesyellow create verification", function () {
  const e = waitForAnyLabelnamesyellowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesyellow(k), function () {
    verifyLabelnamesyellowExists(k);
  });
});

bthread("Labelnamesyellow update verification", function () {
  const e = waitForAnyLabelnamesyellowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelnamesyellow(k), function () {
    verifyLabelnamesyellowUpdated(k);
  });
});

bthread("Labelnamesyellow delete verification", function () {
  const e = waitForAnyLabelnamesyellowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelnamesyellow(k), function () {
    verifyLabelnamesyellowDoesNotExist(k);
  });
});

bthread("Labels create verification", function () {
  const e = waitForAnyLabelsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabels(k), function () {
    verifyLabelsExists(k);
  });
});

bthread("Labels update verification", function () {
  const e = waitForAnyLabelsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabels(k), function () {
    verifyLabelsUpdated(k);
  });
});

bthread("Labels delete verification", function () {
  const e = waitForAnyLabelsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabels(k), function () {
    verifyLabelsDoesNotExist(k);
  });
});

bthread("Labelscolor create verification", function () {
  const e = waitForAnyLabelscolorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelscolor(k), function () {
    verifyLabelscolorExists(k);
  });
});

bthread("Labelscolor update verification", function () {
  const e = waitForAnyLabelscolorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelscolor(k), function () {
    verifyLabelscolorUpdated(k);
  });
});

bthread("Labelscolor delete verification", function () {
  const e = waitForAnyLabelscolorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelscolor(k), function () {
    verifyLabelscolorDoesNotExist(k);
  });
});

bthread("Labelsname create verification", function () {
  const e = waitForAnyLabelsnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelsname(k), function () {
    verifyLabelsnameExists(k);
  });
});

bthread("Labelsname update verification", function () {
  const e = waitForAnyLabelsnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabelsname(k), function () {
    verifyLabelsnameUpdated(k);
  });
});

bthread("Labelsname delete verification", function () {
  const e = waitForAnyLabelsnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabelsname(k), function () {
    verifyLabelsnameDoesNotExist(k);
  });
});

bthread("Lists create verification", function () {
  const e = waitForAnyListsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLists(k), function () {
    verifyListsExists(k);
  });
});

bthread("Lists update verification", function () {
  const e = waitForAnyListsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLists(k), function () {
    verifyListsUpdated(k);
  });
});

bthread("Lists delete verification", function () {
  const e = waitForAnyListsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLists(k), function () {
    verifyListsDoesNotExist(k);
  });
});

bthread("Listscards create verification", function () {
  const e = waitForAnyListscardsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListscards(k), function () {
    verifyListscardsExists(k);
  });
});

bthread("Listscards update verification", function () {
  const e = waitForAnyListscardsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListscards(k), function () {
    verifyListscardsUpdated(k);
  });
});

bthread("Listscards delete verification", function () {
  const e = waitForAnyListscardsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListscards(k), function () {
    verifyListscardsDoesNotExist(k);
  });
});

bthread("Listsclosed create verification", function () {
  const e = waitForAnyListsclosedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsclosed(k), function () {
    verifyListsclosedExists(k);
  });
});

bthread("Listsclosed update verification", function () {
  const e = waitForAnyListsclosedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsclosed(k), function () {
    verifyListsclosedUpdated(k);
  });
});

bthread("Listsclosed delete verification", function () {
  const e = waitForAnyListsclosedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListsclosed(k), function () {
    verifyListsclosedDoesNotExist(k);
  });
});

bthread("Listsidboard create verification", function () {
  const e = waitForAnyListsidboardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsidboard(k), function () {
    verifyListsidboardExists(k);
  });
});

bthread("Listsidboard update verification", function () {
  const e = waitForAnyListsidboardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsidboard(k), function () {
    verifyListsidboardUpdated(k);
  });
});

bthread("Listsidboard delete verification", function () {
  const e = waitForAnyListsidboardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListsidboard(k), function () {
    verifyListsidboardDoesNotExist(k);
  });
});

bthread("Listsmoveallcards create verification", function () {
  const e = waitForAnyListsmoveallcardsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsmoveallcards(k), function () {
    verifyListsmoveallcardsExists(k);
  });
});

bthread("Listsmoveallcards update verification", function () {
  const e = waitForAnyListsmoveallcardsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsmoveallcards(k), function () {
    verifyListsmoveallcardsUpdated(k);
  });
});

bthread("Listsmoveallcards delete verification", function () {
  const e = waitForAnyListsmoveallcardsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListsmoveallcards(k), function () {
    verifyListsmoveallcardsDoesNotExist(k);
  });
});

bthread("Listsname create verification", function () {
  const e = waitForAnyListsnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsname(k), function () {
    verifyListsnameExists(k);
  });
});

bthread("Listsname update verification", function () {
  const e = waitForAnyListsnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListsname(k), function () {
    verifyListsnameUpdated(k);
  });
});

bthread("Listsname delete verification", function () {
  const e = waitForAnyListsnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListsname(k), function () {
    verifyListsnameDoesNotExist(k);
  });
});

bthread("Listspos create verification", function () {
  const e = waitForAnyListsposAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListspos(k), function () {
    verifyListsposExists(k);
  });
});

bthread("Listspos update verification", function () {
  const e = waitForAnyListsposUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListspos(k), function () {
    verifyListsposUpdated(k);
  });
});

bthread("Listspos delete verification", function () {
  const e = waitForAnyListsposDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListspos(k), function () {
    verifyListsposDoesNotExist(k);
  });
});

bthread("Listssubscribed create verification", function () {
  const e = waitForAnyListssubscribedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListssubscribed(k), function () {
    verifyListssubscribedExists(k);
  });
});

bthread("Listssubscribed update verification", function () {
  const e = waitForAnyListssubscribedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteListssubscribed(k), function () {
    verifyListssubscribedUpdated(k);
  });
});

bthread("Listssubscribed delete verification", function () {
  const e = waitForAnyListssubscribedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddListssubscribed(k), function () {
    verifyListssubscribedDoesNotExist(k);
  });
});

bthread("Members create verification", function () {
  const e = waitForAnyMembersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembers(k), function () {
    verifyMembersExists(k);
  });
});

bthread("Members update verification", function () {
  const e = waitForAnyMembersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembers(k), function () {
    verifyMembersUpdated(k);
  });
});

bthread("Members delete verification", function () {
  const e = waitForAnyMembersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembers(k), function () {
    verifyMembersDoesNotExist(k);
  });
});

bthread("Membersavatar create verification", function () {
  const e = waitForAnyMembersavatarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersavatar(k), function () {
    verifyMembersavatarExists(k);
  });
});

bthread("Membersavatar update verification", function () {
  const e = waitForAnyMembersavatarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersavatar(k), function () {
    verifyMembersavatarUpdated(k);
  });
});

bthread("Membersavatar delete verification", function () {
  const e = waitForAnyMembersavatarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersavatar(k), function () {
    verifyMembersavatarDoesNotExist(k);
  });
});

bthread("Membersavatarsource create verification", function () {
  const e = waitForAnyMembersavatarsourceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersavatarsource(k), function () {
    verifyMembersavatarsourceExists(k);
  });
});

bthread("Membersavatarsource update verification", function () {
  const e = waitForAnyMembersavatarsourceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersavatarsource(k), function () {
    verifyMembersavatarsourceUpdated(k);
  });
});

bthread("Membersavatarsource delete verification", function () {
  const e = waitForAnyMembersavatarsourceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersavatarsource(k), function () {
    verifyMembersavatarsourceDoesNotExist(k);
  });
});

bthread("Membersbio create verification", function () {
  const e = waitForAnyMembersbioAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersbio(k), function () {
    verifyMembersbioExists(k);
  });
});

bthread("Membersbio update verification", function () {
  const e = waitForAnyMembersbioUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersbio(k), function () {
    verifyMembersbioUpdated(k);
  });
});

bthread("Membersbio delete verification", function () {
  const e = waitForAnyMembersbioDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersbio(k), function () {
    verifyMembersbioDoesNotExist(k);
  });
});

bthread("Membersboardbackgrounds create verification", function () {
  const e = waitForAnyMembersboardbackgroundsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardbackgrounds(k), function () {
    verifyMembersboardbackgroundsExists(k);
  });
});

bthread("Membersboardbackgrounds update verification", function () {
  const e = waitForAnyMembersboardbackgroundsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardbackgrounds(k), function () {
    verifyMembersboardbackgroundsUpdated(k);
  });
});

bthread("Membersboardbackgrounds delete verification", function () {
  const e = waitForAnyMembersboardbackgroundsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersboardbackgrounds(k), function () {
    verifyMembersboardbackgroundsDoesNotExist(k);
  });
});

bthread("Membersboardstars create verification", function () {
  const e = waitForAnyMembersboardstarsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardstars(k), function () {
    verifyMembersboardstarsExists(k);
  });
});

bthread("Membersboardstars update verification", function () {
  const e = waitForAnyMembersboardstarsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardstars(k), function () {
    verifyMembersboardstarsUpdated(k);
  });
});

bthread("Membersboardstars delete verification", function () {
  const e = waitForAnyMembersboardstarsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersboardstars(k), function () {
    verifyMembersboardstarsDoesNotExist(k);
  });
});

bthread("Membersboardstarsidboard create verification", function () {
  const e = waitForAnyMembersboardstarsidboardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardstarsidboard(k), function () {
    verifyMembersboardstarsidboardExists(k);
  });
});

bthread("Membersboardstarsidboard update verification", function () {
  const e = waitForAnyMembersboardstarsidboardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardstarsidboard(k), function () {
    verifyMembersboardstarsidboardUpdated(k);
  });
});

bthread("Membersboardstarsidboard delete verification", function () {
  const e = waitForAnyMembersboardstarsidboardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersboardstarsidboard(k), function () {
    verifyMembersboardstarsidboardDoesNotExist(k);
  });
});

bthread("Membersboardstarspos create verification", function () {
  const e = waitForAnyMembersboardstarsposAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardstarspos(k), function () {
    verifyMembersboardstarsposExists(k);
  });
});

bthread("Membersboardstarspos update verification", function () {
  const e = waitForAnyMembersboardstarsposUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersboardstarspos(k), function () {
    verifyMembersboardstarsposUpdated(k);
  });
});

bthread("Membersboardstarspos delete verification", function () {
  const e = waitForAnyMembersboardstarsposDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersboardstarspos(k), function () {
    verifyMembersboardstarsposDoesNotExist(k);
  });
});

bthread("Memberscustomboardbackgrounds create verification", function () {
  const e = waitForAnyMemberscustomboardbackgroundsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberscustomboardbackgrounds(k), function () {
    verifyMemberscustomboardbackgroundsExists(k);
  });
});

bthread("Memberscustomboardbackgrounds update verification", function () {
  const e = waitForAnyMemberscustomboardbackgroundsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberscustomboardbackgrounds(k), function () {
    verifyMemberscustomboardbackgroundsUpdated(k);
  });
});

bthread("Memberscustomboardbackgrounds delete verification", function () {
  const e = waitForAnyMemberscustomboardbackgroundsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberscustomboardbackgrounds(k), function () {
    verifyMemberscustomboardbackgroundsDoesNotExist(k);
  });
});

bthread("Memberscustomemoji create verification", function () {
  const e = waitForAnyMemberscustomemojiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberscustomemoji(k), function () {
    verifyMemberscustomemojiExists(k);
  });
});

bthread("Memberscustomemoji update verification", function () {
  const e = waitForAnyMemberscustomemojiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberscustomemoji(k), function () {
    verifyMemberscustomemojiUpdated(k);
  });
});

bthread("Memberscustomemoji delete verification", function () {
  const e = waitForAnyMemberscustomemojiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberscustomemoji(k), function () {
    verifyMemberscustomemojiDoesNotExist(k);
  });
});

bthread("Memberscustomstickers create verification", function () {
  const e = waitForAnyMemberscustomstickersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberscustomstickers(k), function () {
    verifyMemberscustomstickersExists(k);
  });
});

bthread("Memberscustomstickers update verification", function () {
  const e = waitForAnyMemberscustomstickersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberscustomstickers(k), function () {
    verifyMemberscustomstickersUpdated(k);
  });
});

bthread("Memberscustomstickers delete verification", function () {
  const e = waitForAnyMemberscustomstickersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberscustomstickers(k), function () {
    verifyMemberscustomstickersDoesNotExist(k);
  });
});

bthread("Membersfullname create verification", function () {
  const e = waitForAnyMembersfullnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersfullname(k), function () {
    verifyMembersfullnameExists(k);
  });
});

bthread("Membersfullname update verification", function () {
  const e = waitForAnyMembersfullnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersfullname(k), function () {
    verifyMembersfullnameUpdated(k);
  });
});

bthread("Membersfullname delete verification", function () {
  const e = waitForAnyMembersfullnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersfullname(k), function () {
    verifyMembersfullnameDoesNotExist(k);
  });
});

bthread("Membersinitials create verification", function () {
  const e = waitForAnyMembersinitialsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersinitials(k), function () {
    verifyMembersinitialsExists(k);
  });
});

bthread("Membersinitials update verification", function () {
  const e = waitForAnyMembersinitialsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersinitials(k), function () {
    verifyMembersinitialsUpdated(k);
  });
});

bthread("Membersinitials delete verification", function () {
  const e = waitForAnyMembersinitialsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersinitials(k), function () {
    verifyMembersinitialsDoesNotExist(k);
  });
});

bthread("Membersonetimemessagesdismissed create verification", function () {
  const e = waitForAnyMembersonetimemessagesdismissedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersonetimemessagesdismissed(k), function () {
    verifyMembersonetimemessagesdismissedExists(k);
  });
});

bthread("Membersonetimemessagesdismissed update verification", function () {
  const e = waitForAnyMembersonetimemessagesdismissedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersonetimemessagesdismissed(k), function () {
    verifyMembersonetimemessagesdismissedUpdated(k);
  });
});

bthread("Membersonetimemessagesdismissed delete verification", function () {
  const e = waitForAnyMembersonetimemessagesdismissedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersonetimemessagesdismissed(k), function () {
    verifyMembersonetimemessagesdismissedDoesNotExist(k);
  });
});

bthread("Memberssavedsearches create verification", function () {
  const e = waitForAnyMemberssavedsearchesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearches(k), function () {
    verifyMemberssavedsearchesExists(k);
  });
});

bthread("Memberssavedsearches update verification", function () {
  const e = waitForAnyMemberssavedsearchesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearches(k), function () {
    verifyMemberssavedsearchesUpdated(k);
  });
});

bthread("Memberssavedsearches delete verification", function () {
  const e = waitForAnyMemberssavedsearchesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberssavedsearches(k), function () {
    verifyMemberssavedsearchesDoesNotExist(k);
  });
});

bthread("Memberssavedsearchesname create verification", function () {
  const e = waitForAnyMemberssavedsearchesnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearchesname(k), function () {
    verifyMemberssavedsearchesnameExists(k);
  });
});

bthread("Memberssavedsearchesname update verification", function () {
  const e = waitForAnyMemberssavedsearchesnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearchesname(k), function () {
    verifyMemberssavedsearchesnameUpdated(k);
  });
});

bthread("Memberssavedsearchesname delete verification", function () {
  const e = waitForAnyMemberssavedsearchesnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberssavedsearchesname(k), function () {
    verifyMemberssavedsearchesnameDoesNotExist(k);
  });
});

bthread("Memberssavedsearchespos create verification", function () {
  const e = waitForAnyMemberssavedsearchesposAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearchespos(k), function () {
    verifyMemberssavedsearchesposExists(k);
  });
});

bthread("Memberssavedsearchespos update verification", function () {
  const e = waitForAnyMemberssavedsearchesposUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearchespos(k), function () {
    verifyMemberssavedsearchesposUpdated(k);
  });
});

bthread("Memberssavedsearchespos delete verification", function () {
  const e = waitForAnyMemberssavedsearchesposDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberssavedsearchespos(k), function () {
    verifyMemberssavedsearchesposDoesNotExist(k);
  });
});

bthread("Memberssavedsearchesquery create verification", function () {
  const e = waitForAnyMemberssavedsearchesqueryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearchesquery(k), function () {
    verifyMemberssavedsearchesqueryExists(k);
  });
});

bthread("Memberssavedsearchesquery update verification", function () {
  const e = waitForAnyMemberssavedsearchesqueryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMemberssavedsearchesquery(k), function () {
    verifyMemberssavedsearchesqueryUpdated(k);
  });
});

bthread("Memberssavedsearchesquery delete verification", function () {
  const e = waitForAnyMemberssavedsearchesqueryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMemberssavedsearchesquery(k), function () {
    verifyMemberssavedsearchesqueryDoesNotExist(k);
  });
});

bthread("Membersusername create verification", function () {
  const e = waitForAnyMembersusernameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersusername(k), function () {
    verifyMembersusernameExists(k);
  });
});

bthread("Membersusername update verification", function () {
  const e = waitForAnyMembersusernameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembersusername(k), function () {
    verifyMembersusernameUpdated(k);
  });
});

bthread("Membersusername delete verification", function () {
  const e = waitForAnyMembersusernameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembersusername(k), function () {
    verifyMembersusernameDoesNotExist(k);
  });
});

bthread("Myprefsemailposition create verification", function () {
  const e = waitForAnyMyprefsemailpositionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsemailposition(k), function () {
    verifyMyprefsemailpositionExists(k);
  });
});

bthread("Myprefsemailposition update verification", function () {
  const e = waitForAnyMyprefsemailpositionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsemailposition(k), function () {
    verifyMyprefsemailpositionUpdated(k);
  });
});

bthread("Myprefsemailposition delete verification", function () {
  const e = waitForAnyMyprefsemailpositionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsemailposition(k), function () {
    verifyMyprefsemailpositionDoesNotExist(k);
  });
});

bthread("Myprefsidemaillist create verification", function () {
  const e = waitForAnyMyprefsidemaillistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsidemaillist(k), function () {
    verifyMyprefsidemaillistExists(k);
  });
});

bthread("Myprefsidemaillist update verification", function () {
  const e = waitForAnyMyprefsidemaillistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsidemaillist(k), function () {
    verifyMyprefsidemaillistUpdated(k);
  });
});

bthread("Myprefsidemaillist delete verification", function () {
  const e = waitForAnyMyprefsidemaillistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsidemaillist(k), function () {
    verifyMyprefsidemaillistDoesNotExist(k);
  });
});

bthread("Myprefsshowlistguide create verification", function () {
  const e = waitForAnyMyprefsshowlistguideAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowlistguide(k), function () {
    verifyMyprefsshowlistguideExists(k);
  });
});

bthread("Myprefsshowlistguide update verification", function () {
  const e = waitForAnyMyprefsshowlistguideUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowlistguide(k), function () {
    verifyMyprefsshowlistguideUpdated(k);
  });
});

bthread("Myprefsshowlistguide delete verification", function () {
  const e = waitForAnyMyprefsshowlistguideDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsshowlistguide(k), function () {
    verifyMyprefsshowlistguideDoesNotExist(k);
  });
});

bthread("Myprefsshowsidebar create verification", function () {
  const e = waitForAnyMyprefsshowsidebarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebar(k), function () {
    verifyMyprefsshowsidebarExists(k);
  });
});

bthread("Myprefsshowsidebar update verification", function () {
  const e = waitForAnyMyprefsshowsidebarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebar(k), function () {
    verifyMyprefsshowsidebarUpdated(k);
  });
});

bthread("Myprefsshowsidebar delete verification", function () {
  const e = waitForAnyMyprefsshowsidebarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsshowsidebar(k), function () {
    verifyMyprefsshowsidebarDoesNotExist(k);
  });
});

bthread("Myprefsshowsidebaractivity create verification", function () {
  const e = waitForAnyMyprefsshowsidebaractivityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebaractivity(k), function () {
    verifyMyprefsshowsidebaractivityExists(k);
  });
});

bthread("Myprefsshowsidebaractivity update verification", function () {
  const e = waitForAnyMyprefsshowsidebaractivityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebaractivity(k), function () {
    verifyMyprefsshowsidebaractivityUpdated(k);
  });
});

bthread("Myprefsshowsidebaractivity delete verification", function () {
  const e = waitForAnyMyprefsshowsidebaractivityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsshowsidebaractivity(k), function () {
    verifyMyprefsshowsidebaractivityDoesNotExist(k);
  });
});

bthread("Myprefsshowsidebarboardactions create verification", function () {
  const e = waitForAnyMyprefsshowsidebarboardactionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebarboardactions(k), function () {
    verifyMyprefsshowsidebarboardactionsExists(k);
  });
});

bthread("Myprefsshowsidebarboardactions update verification", function () {
  const e = waitForAnyMyprefsshowsidebarboardactionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebarboardactions(k), function () {
    verifyMyprefsshowsidebarboardactionsUpdated(k);
  });
});

bthread("Myprefsshowsidebarboardactions delete verification", function () {
  const e = waitForAnyMyprefsshowsidebarboardactionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsshowsidebarboardactions(k), function () {
    verifyMyprefsshowsidebarboardactionsDoesNotExist(k);
  });
});

bthread("Myprefsshowsidebarmembers create verification", function () {
  const e = waitForAnyMyprefsshowsidebarmembersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebarmembers(k), function () {
    verifyMyprefsshowsidebarmembersExists(k);
  });
});

bthread("Myprefsshowsidebarmembers update verification", function () {
  const e = waitForAnyMyprefsshowsidebarmembersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMyprefsshowsidebarmembers(k), function () {
    verifyMyprefsshowsidebarmembersUpdated(k);
  });
});

bthread("Myprefsshowsidebarmembers delete verification", function () {
  const e = waitForAnyMyprefsshowsidebarmembersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMyprefsshowsidebarmembers(k), function () {
    verifyMyprefsshowsidebarmembersDoesNotExist(k);
  });
});

bthread("Notifications create verification", function () {
  const e = waitForAnyNotificationsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotifications(k), function () {
    verifyNotificationsExists(k);
  });
});

bthread("Notifications update verification", function () {
  const e = waitForAnyNotificationsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotifications(k), function () {
    verifyNotificationsUpdated(k);
  });
});

bthread("Notifications delete verification", function () {
  const e = waitForAnyNotificationsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotifications(k), function () {
    verifyNotificationsDoesNotExist(k);
  });
});

bthread("Notificationsunread create verification", function () {
  const e = waitForAnyNotificationsunreadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotificationsunread(k), function () {
    verifyNotificationsunreadExists(k);
  });
});

bthread("Notificationsunread update verification", function () {
  const e = waitForAnyNotificationsunreadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotificationsunread(k), function () {
    verifyNotificationsunreadUpdated(k);
  });
});

bthread("Notificationsunread delete verification", function () {
  const e = waitForAnyNotificationsunreadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotificationsunread(k), function () {
    verifyNotificationsunreadDoesNotExist(k);
  });
});

bthread("Organizations create verification", function () {
  const e = waitForAnyOrganizationsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizations(k), function () {
    verifyOrganizationsExists(k);
  });
});

bthread("Organizations update verification", function () {
  const e = waitForAnyOrganizationsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizations(k), function () {
    verifyOrganizationsUpdated(k);
  });
});

bthread("Organizations delete verification", function () {
  const e = waitForAnyOrganizationsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizations(k), function () {
    verifyOrganizationsDoesNotExist(k);
  });
});

bthread("Organizationsdesc create verification", function () {
  const e = waitForAnyOrganizationsdescAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsdesc(k), function () {
    verifyOrganizationsdescExists(k);
  });
});

bthread("Organizationsdesc update verification", function () {
  const e = waitForAnyOrganizationsdescUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsdesc(k), function () {
    verifyOrganizationsdescUpdated(k);
  });
});

bthread("Organizationsdesc delete verification", function () {
  const e = waitForAnyOrganizationsdescDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsdesc(k), function () {
    verifyOrganizationsdescDoesNotExist(k);
  });
});

bthread("Organizationsdisplayname create verification", function () {
  const e = waitForAnyOrganizationsdisplaynameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsdisplayname(k), function () {
    verifyOrganizationsdisplaynameExists(k);
  });
});

bthread("Organizationsdisplayname update verification", function () {
  const e = waitForAnyOrganizationsdisplaynameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsdisplayname(k), function () {
    verifyOrganizationsdisplaynameUpdated(k);
  });
});

bthread("Organizationsdisplayname delete verification", function () {
  const e = waitForAnyOrganizationsdisplaynameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsdisplayname(k), function () {
    verifyOrganizationsdisplaynameDoesNotExist(k);
  });
});

bthread("Organizationslogo create verification", function () {
  const e = waitForAnyOrganizationslogoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationslogo(k), function () {
    verifyOrganizationslogoExists(k);
  });
});

bthread("Organizationslogo update verification", function () {
  const e = waitForAnyOrganizationslogoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationslogo(k), function () {
    verifyOrganizationslogoUpdated(k);
  });
});

bthread("Organizationslogo delete verification", function () {
  const e = waitForAnyOrganizationslogoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationslogo(k), function () {
    verifyOrganizationslogoDoesNotExist(k);
  });
});

bthread("Organizationsmembers create verification", function () {
  const e = waitForAnyOrganizationsmembersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsmembers(k), function () {
    verifyOrganizationsmembersExists(k);
  });
});

bthread("Organizationsmembers update verification", function () {
  const e = waitForAnyOrganizationsmembersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsmembers(k), function () {
    verifyOrganizationsmembersUpdated(k);
  });
});

bthread("Organizationsmembers delete verification", function () {
  const e = waitForAnyOrganizationsmembersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsmembers(k), function () {
    verifyOrganizationsmembersDoesNotExist(k);
  });
});

bthread("Organizationsmembersdeactivated create verification", function () {
  const e = waitForAnyOrganizationsmembersdeactivatedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsmembersdeactivated(k), function () {
    verifyOrganizationsmembersdeactivatedExists(k);
  });
});

bthread("Organizationsmembersdeactivated update verification", function () {
  const e = waitForAnyOrganizationsmembersdeactivatedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsmembersdeactivated(k), function () {
    verifyOrganizationsmembersdeactivatedUpdated(k);
  });
});

bthread("Organizationsmembersdeactivated delete verification", function () {
  const e = waitForAnyOrganizationsmembersdeactivatedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsmembersdeactivated(k), function () {
    verifyOrganizationsmembersdeactivatedDoesNotExist(k);
  });
});

bthread("Organizationsmemberships create verification", function () {
  const e = waitForAnyOrganizationsmembershipsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsmemberships(k), function () {
    verifyOrganizationsmembershipsExists(k);
  });
});

bthread("Organizationsmemberships update verification", function () {
  const e = waitForAnyOrganizationsmembershipsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsmemberships(k), function () {
    verifyOrganizationsmembershipsUpdated(k);
  });
});

bthread("Organizationsmemberships delete verification", function () {
  const e = waitForAnyOrganizationsmembershipsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsmemberships(k), function () {
    verifyOrganizationsmembershipsDoesNotExist(k);
  });
});

bthread("Organizationsname create verification", function () {
  const e = waitForAnyOrganizationsnameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsname(k), function () {
    verifyOrganizationsnameExists(k);
  });
});

bthread("Organizationsname update verification", function () {
  const e = waitForAnyOrganizationsnameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsname(k), function () {
    verifyOrganizationsnameUpdated(k);
  });
});

bthread("Organizationsname delete verification", function () {
  const e = waitForAnyOrganizationsnameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsname(k), function () {
    verifyOrganizationsnameDoesNotExist(k);
  });
});

bthread("Organizationswebsite create verification", function () {
  const e = waitForAnyOrganizationswebsiteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationswebsite(k), function () {
    verifyOrganizationswebsiteExists(k);
  });
});

bthread("Organizationswebsite update verification", function () {
  const e = waitForAnyOrganizationswebsiteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationswebsite(k), function () {
    verifyOrganizationswebsiteUpdated(k);
  });
});

bthread("Organizationswebsite delete verification", function () {
  const e = waitForAnyOrganizationswebsiteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationswebsite(k), function () {
    verifyOrganizationswebsiteDoesNotExist(k);
  });
});

bthread("Prefsassociateddomain create verification", function () {
  const e = waitForAnyPrefsassociateddomainAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsassociateddomain(k), function () {
    verifyPrefsassociateddomainExists(k);
  });
});

bthread("Prefsassociateddomain update verification", function () {
  const e = waitForAnyPrefsassociateddomainUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsassociateddomain(k), function () {
    verifyPrefsassociateddomainUpdated(k);
  });
});

bthread("Prefsassociateddomain delete verification", function () {
  const e = waitForAnyPrefsassociateddomainDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsassociateddomain(k), function () {
    verifyPrefsassociateddomainDoesNotExist(k);
  });
});

bthread("Prefsbackground create verification", function () {
  const e = waitForAnyPrefsbackgroundAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsbackground(k), function () {
    verifyPrefsbackgroundExists(k);
  });
});

bthread("Prefsbackground update verification", function () {
  const e = waitForAnyPrefsbackgroundUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsbackground(k), function () {
    verifyPrefsbackgroundUpdated(k);
  });
});

bthread("Prefsbackground delete verification", function () {
  const e = waitForAnyPrefsbackgroundDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsbackground(k), function () {
    verifyPrefsbackgroundDoesNotExist(k);
  });
});

bthread("Prefsboardvisibilityrestrict create verification", function () {
  const e = waitForAnyPrefsboardvisibilityrestrictAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsboardvisibilityrestrict(k), function () {
    verifyPrefsboardvisibilityrestrictExists(k);
  });
});

bthread("Prefsboardvisibilityrestrict update verification", function () {
  const e = waitForAnyPrefsboardvisibilityrestrictUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsboardvisibilityrestrict(k), function () {
    verifyPrefsboardvisibilityrestrictUpdated(k);
  });
});

bthread("Prefsboardvisibilityrestrict delete verification", function () {
  const e = waitForAnyPrefsboardvisibilityrestrictDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsboardvisibilityrestrict(k), function () {
    verifyPrefsboardvisibilityrestrictDoesNotExist(k);
  });
});

bthread("Prefscalendarfeedenabled create verification", function () {
  const e = waitForAnyPrefscalendarfeedenabledAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscalendarfeedenabled(k), function () {
    verifyPrefscalendarfeedenabledExists(k);
  });
});

bthread("Prefscalendarfeedenabled update verification", function () {
  const e = waitForAnyPrefscalendarfeedenabledUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscalendarfeedenabled(k), function () {
    verifyPrefscalendarfeedenabledUpdated(k);
  });
});

bthread("Prefscalendarfeedenabled delete verification", function () {
  const e = waitForAnyPrefscalendarfeedenabledDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefscalendarfeedenabled(k), function () {
    verifyPrefscalendarfeedenabledDoesNotExist(k);
  });
});

bthread("Prefscardaging create verification", function () {
  const e = waitForAnyPrefscardagingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscardaging(k), function () {
    verifyPrefscardagingExists(k);
  });
});

bthread("Prefscardaging update verification", function () {
  const e = waitForAnyPrefscardagingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscardaging(k), function () {
    verifyPrefscardagingUpdated(k);
  });
});

bthread("Prefscardaging delete verification", function () {
  const e = waitForAnyPrefscardagingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefscardaging(k), function () {
    verifyPrefscardagingDoesNotExist(k);
  });
});

bthread("Prefscardcovers create verification", function () {
  const e = waitForAnyPrefscardcoversAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscardcovers(k), function () {
    verifyPrefscardcoversExists(k);
  });
});

bthread("Prefscardcovers update verification", function () {
  const e = waitForAnyPrefscardcoversUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscardcovers(k), function () {
    verifyPrefscardcoversUpdated(k);
  });
});

bthread("Prefscardcovers delete verification", function () {
  const e = waitForAnyPrefscardcoversDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefscardcovers(k), function () {
    verifyPrefscardcoversDoesNotExist(k);
  });
});

bthread("Prefscolorblind create verification", function () {
  const e = waitForAnyPrefscolorblindAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscolorblind(k), function () {
    verifyPrefscolorblindExists(k);
  });
});

bthread("Prefscolorblind update verification", function () {
  const e = waitForAnyPrefscolorblindUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscolorblind(k), function () {
    verifyPrefscolorblindUpdated(k);
  });
});

bthread("Prefscolorblind delete verification", function () {
  const e = waitForAnyPrefscolorblindDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefscolorblind(k), function () {
    verifyPrefscolorblindDoesNotExist(k);
  });
});

bthread("Prefscomments create verification", function () {
  const e = waitForAnyPrefscommentsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscomments(k), function () {
    verifyPrefscommentsExists(k);
  });
});

bthread("Prefscomments update verification", function () {
  const e = waitForAnyPrefscommentsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefscomments(k), function () {
    verifyPrefscommentsUpdated(k);
  });
});

bthread("Prefscomments delete verification", function () {
  const e = waitForAnyPrefscommentsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefscomments(k), function () {
    verifyPrefscommentsDoesNotExist(k);
  });
});

bthread("Prefsexternalmembersdisabled create verification", function () {
  const e = waitForAnyPrefsexternalmembersdisabledAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsexternalmembersdisabled(k), function () {
    verifyPrefsexternalmembersdisabledExists(k);
  });
});

bthread("Prefsexternalmembersdisabled update verification", function () {
  const e = waitForAnyPrefsexternalmembersdisabledUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsexternalmembersdisabled(k), function () {
    verifyPrefsexternalmembersdisabledUpdated(k);
  });
});

bthread("Prefsexternalmembersdisabled delete verification", function () {
  const e = waitForAnyPrefsexternalmembersdisabledDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsexternalmembersdisabled(k), function () {
    verifyPrefsexternalmembersdisabledDoesNotExist(k);
  });
});

bthread("Prefsgoogleappsversion create verification", function () {
  const e = waitForAnyPrefsgoogleappsversionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsgoogleappsversion(k), function () {
    verifyPrefsgoogleappsversionExists(k);
  });
});

bthread("Prefsgoogleappsversion update verification", function () {
  const e = waitForAnyPrefsgoogleappsversionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsgoogleappsversion(k), function () {
    verifyPrefsgoogleappsversionUpdated(k);
  });
});

bthread("Prefsgoogleappsversion delete verification", function () {
  const e = waitForAnyPrefsgoogleappsversionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsgoogleappsversion(k), function () {
    verifyPrefsgoogleappsversionDoesNotExist(k);
  });
});

bthread("Prefsinvitations create verification", function () {
  const e = waitForAnyPrefsinvitationsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsinvitations(k), function () {
    verifyPrefsinvitationsExists(k);
  });
});

bthread("Prefsinvitations update verification", function () {
  const e = waitForAnyPrefsinvitationsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsinvitations(k), function () {
    verifyPrefsinvitationsUpdated(k);
  });
});

bthread("Prefsinvitations delete verification", function () {
  const e = waitForAnyPrefsinvitationsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsinvitations(k), function () {
    verifyPrefsinvitationsDoesNotExist(k);
  });
});

bthread("Prefslocale create verification", function () {
  const e = waitForAnyPrefslocaleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefslocale(k), function () {
    verifyPrefslocaleExists(k);
  });
});

bthread("Prefslocale update verification", function () {
  const e = waitForAnyPrefslocaleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefslocale(k), function () {
    verifyPrefslocaleUpdated(k);
  });
});

bthread("Prefslocale delete verification", function () {
  const e = waitForAnyPrefslocaleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefslocale(k), function () {
    verifyPrefslocaleDoesNotExist(k);
  });
});

bthread("Prefsminutesbetweensummaries create verification", function () {
  const e = waitForAnyPrefsminutesbetweensummariesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsminutesbetweensummaries(k), function () {
    verifyPrefsminutesbetweensummariesExists(k);
  });
});

bthread("Prefsminutesbetweensummaries update verification", function () {
  const e = waitForAnyPrefsminutesbetweensummariesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsminutesbetweensummaries(k), function () {
    verifyPrefsminutesbetweensummariesUpdated(k);
  });
});

bthread("Prefsminutesbetweensummaries delete verification", function () {
  const e = waitForAnyPrefsminutesbetweensummariesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsminutesbetweensummaries(k), function () {
    verifyPrefsminutesbetweensummariesDoesNotExist(k);
  });
});

bthread("Prefsorginviterestrict create verification", function () {
  const e = waitForAnyPrefsorginviterestrictAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsorginviterestrict(k), function () {
    verifyPrefsorginviterestrictExists(k);
  });
});

bthread("Prefsorginviterestrict update verification", function () {
  const e = waitForAnyPrefsorginviterestrictUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsorginviterestrict(k), function () {
    verifyPrefsorginviterestrictUpdated(k);
  });
});

bthread("Prefsorginviterestrict delete verification", function () {
  const e = waitForAnyPrefsorginviterestrictDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsorginviterestrict(k), function () {
    verifyPrefsorginviterestrictDoesNotExist(k);
  });
});

bthread("Prefspermissionlevel create verification", function () {
  const e = waitForAnyPrefspermissionlevelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefspermissionlevel(k), function () {
    verifyPrefspermissionlevelExists(k);
  });
});

bthread("Prefspermissionlevel update verification", function () {
  const e = waitForAnyPrefspermissionlevelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefspermissionlevel(k), function () {
    verifyPrefspermissionlevelUpdated(k);
  });
});

bthread("Prefspermissionlevel delete verification", function () {
  const e = waitForAnyPrefspermissionlevelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefspermissionlevel(k), function () {
    verifyPrefspermissionlevelDoesNotExist(k);
  });
});

bthread("Prefsselfjoin create verification", function () {
  const e = waitForAnyPrefsselfjoinAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsselfjoin(k), function () {
    verifyPrefsselfjoinExists(k);
  });
});

bthread("Prefsselfjoin update verification", function () {
  const e = waitForAnyPrefsselfjoinUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsselfjoin(k), function () {
    verifyPrefsselfjoinUpdated(k);
  });
});

bthread("Prefsselfjoin delete verification", function () {
  const e = waitForAnyPrefsselfjoinDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsselfjoin(k), function () {
    verifyPrefsselfjoinDoesNotExist(k);
  });
});

bthread("Prefsvoting create verification", function () {
  const e = waitForAnyPrefsvotingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsvoting(k), function () {
    verifyPrefsvotingExists(k);
  });
});

bthread("Prefsvoting update verification", function () {
  const e = waitForAnyPrefsvotingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrefsvoting(k), function () {
    verifyPrefsvotingUpdated(k);
  });
});

bthread("Prefsvoting delete verification", function () {
  const e = waitForAnyPrefsvotingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrefsvoting(k), function () {
    verifyPrefsvotingDoesNotExist(k);
  });
});

bthread("Sessions create verification", function () {
  const e = waitForAnySessionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSessions(k), function () {
    verifySessionsExists(k);
  });
});

bthread("Sessions update verification", function () {
  const e = waitForAnySessionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSessions(k), function () {
    verifySessionsUpdated(k);
  });
});

bthread("Sessions delete verification", function () {
  const e = waitForAnySessionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSessions(k), function () {
    verifySessionsDoesNotExist(k);
  });
});

bthread("Sessionsstatus create verification", function () {
  const e = waitForAnySessionsstatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSessionsstatus(k), function () {
    verifySessionsstatusExists(k);
  });
});

bthread("Sessionsstatus update verification", function () {
  const e = waitForAnySessionsstatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSessionsstatus(k), function () {
    verifySessionsstatusUpdated(k);
  });
});

bthread("Sessionsstatus delete verification", function () {
  const e = waitForAnySessionsstatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSessionsstatus(k), function () {
    verifySessionsstatusDoesNotExist(k);
  });
});

bthread("Tokenswebhooks create verification", function () {
  const e = waitForAnyTokenswebhooksAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTokenswebhooks(k), function () {
    verifyTokenswebhooksExists(k);
  });
});

bthread("Tokenswebhooks update verification", function () {
  const e = waitForAnyTokenswebhooksUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTokenswebhooks(k), function () {
    verifyTokenswebhooksUpdated(k);
  });
});

bthread("Tokenswebhooks delete verification", function () {
  const e = waitForAnyTokenswebhooksDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTokenswebhooks(k), function () {
    verifyTokenswebhooksDoesNotExist(k);
  });
});

bthread("Webhooks create verification", function () {
  const e = waitForAnyWebhooksAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooks(k), function () {
    verifyWebhooksExists(k);
  });
});

bthread("Webhooks update verification", function () {
  const e = waitForAnyWebhooksUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooks(k), function () {
    verifyWebhooksUpdated(k);
  });
});

bthread("Webhooks delete verification", function () {
  const e = waitForAnyWebhooksDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhooks(k), function () {
    verifyWebhooksDoesNotExist(k);
  });
});

bthread("Webhooksactive create verification", function () {
  const e = waitForAnyWebhooksactiveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooksactive(k), function () {
    verifyWebhooksactiveExists(k);
  });
});

bthread("Webhooksactive update verification", function () {
  const e = waitForAnyWebhooksactiveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooksactive(k), function () {
    verifyWebhooksactiveUpdated(k);
  });
});

bthread("Webhooksactive delete verification", function () {
  const e = waitForAnyWebhooksactiveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhooksactive(k), function () {
    verifyWebhooksactiveDoesNotExist(k);
  });
});

bthread("Webhookscallbackurl create verification", function () {
  const e = waitForAnyWebhookscallbackurlAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhookscallbackurl(k), function () {
    verifyWebhookscallbackurlExists(k);
  });
});

bthread("Webhookscallbackurl update verification", function () {
  const e = waitForAnyWebhookscallbackurlUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhookscallbackurl(k), function () {
    verifyWebhookscallbackurlUpdated(k);
  });
});

bthread("Webhookscallbackurl delete verification", function () {
  const e = waitForAnyWebhookscallbackurlDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhookscallbackurl(k), function () {
    verifyWebhookscallbackurlDoesNotExist(k);
  });
});

bthread("Webhooksdescription create verification", function () {
  const e = waitForAnyWebhooksdescriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooksdescription(k), function () {
    verifyWebhooksdescriptionExists(k);
  });
});

bthread("Webhooksdescription update verification", function () {
  const e = waitForAnyWebhooksdescriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooksdescription(k), function () {
    verifyWebhooksdescriptionUpdated(k);
  });
});

bthread("Webhooksdescription delete verification", function () {
  const e = waitForAnyWebhooksdescriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhooksdescription(k), function () {
    verifyWebhooksdescriptionDoesNotExist(k);
  });
});

bthread("Webhooksidmodel create verification", function () {
  const e = waitForAnyWebhooksidmodelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooksidmodel(k), function () {
    verifyWebhooksidmodelExists(k);
  });
});

bthread("Webhooksidmodel update verification", function () {
  const e = waitForAnyWebhooksidmodelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooksidmodel(k), function () {
    verifyWebhooksidmodelUpdated(k);
  });
});

bthread("Webhooksidmodel delete verification", function () {
  const e = waitForAnyWebhooksidmodelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhooksidmodel(k), function () {
    verifyWebhooksidmodelDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Actions", function () {
  const x = waitForAnyActionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActions(k, ANY), function () {});
});

bthread("Guard: Unique Actionscomments", function () {
  const x = waitForAnyActionscommentsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActionscomments(k, ANY), function () {});
});

bthread("Guard: Unique Actionstext", function () {
  const x = waitForAnyActionstextAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActionstext(k, ANY), function () {});
});

bthread("Guard: Unique Boards", function () {
  const x = waitForAnyBoardsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoards(k, ANY), function () {});
});

bthread("Guard: Unique Boardschecklists", function () {
  const x = waitForAnyBoardschecklistsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardschecklists(k, ANY), function () {});
});

bthread("Guard: Unique Boardsclosed", function () {
  const x = waitForAnyBoardsclosedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardsclosed(k, ANY), function () {});
});

bthread("Guard: Unique Boardsdesc", function () {
  const x = waitForAnyBoardsdescAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardsdesc(k, ANY), function () {});
});

bthread("Guard: Unique Boardsidorganization", function () {
  const x = waitForAnyBoardsidorganizationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardsidorganization(k, ANY), function () {});
});

bthread("Guard: Unique Boardslabels", function () {
  const x = waitForAnyBoardslabelsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardslabels(k, ANY), function () {});
});

bthread("Guard: Unique Boardslists", function () {
  const x = waitForAnyBoardslistsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardslists(k, ANY), function () {});
});

bthread("Guard: Unique Boardsmembers", function () {
  const x = waitForAnyBoardsmembersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardsmembers(k, ANY), function () {});
});

bthread("Guard: Unique Boardsmemberships", function () {
  const x = waitForAnyBoardsmembershipsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardsmemberships(k, ANY), function () {});
});

bthread("Guard: Unique Boardsname", function () {
  const x = waitForAnyBoardsnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardsname(k, ANY), function () {});
});

bthread("Guard: Unique Boardspowerups", function () {
  const x = waitForAnyBoardspowerupsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardspowerups(k, ANY), function () {});
});

bthread("Guard: Unique Boardssubscribed", function () {
  const x = waitForAnyBoardssubscribedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBoardssubscribed(k, ANY), function () {});
});

bthread("Guard: Unique Cards", function () {
  const x = waitForAnyCardsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCards(k, ANY), function () {});
});

bthread("Guard: Unique Cardsactionscomments", function () {
  const x = waitForAnyCardsactionscommentsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsactionscomments(k, ANY), function () {});
});

bthread("Guard: Unique Cardsattachments", function () {
  const x = waitForAnyCardsattachmentsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsattachments(k, ANY), function () {});
});

bthread("Guard: Unique Cardschecklistcheckitem", function () {
  const x = waitForAnyCardschecklistcheckitemAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardschecklistcheckitem(k, ANY), function () {});
});

bthread("Guard: Unique Cardschecklistcheckitemname", function () {
  const x = waitForAnyCardschecklistcheckitemnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardschecklistcheckitemname(k, ANY), function () {});
});

bthread("Guard: Unique Cardschecklistcheckitempos", function () {
  const x = waitForAnyCardschecklistcheckitemposAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardschecklistcheckitempos(k, ANY), function () {});
});

bthread("Guard: Unique Cardschecklistcheckitemstate", function () {
  const x = waitForAnyCardschecklistcheckitemstateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardschecklistcheckitemstate(k, ANY), function () {});
});

bthread("Guard: Unique Cardschecklistidchecklistcurrentcheckitem", function () {
  const x = waitForAnyCardschecklistidchecklistcurrentcheckitemAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardschecklistidchecklistcurrentcheckitem(k, ANY), function () {});
});

bthread("Guard: Unique Cardschecklists", function () {
  const x = waitForAnyCardschecklistsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardschecklists(k, ANY), function () {});
});

bthread("Guard: Unique Cardsclosed", function () {
  const x = waitForAnyCardsclosedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsclosed(k, ANY), function () {});
});

bthread("Guard: Unique Cardsdesc", function () {
  const x = waitForAnyCardsdescAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsdesc(k, ANY), function () {});
});

bthread("Guard: Unique Cardsdue", function () {
  const x = waitForAnyCardsdueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsdue(k, ANY), function () {});
});

bthread("Guard: Unique Cardsidattachmentcover", function () {
  const x = waitForAnyCardsidattachmentcoverAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsidattachmentcover(k, ANY), function () {});
});

bthread("Guard: Unique Cardsidboard", function () {
  const x = waitForAnyCardsidboardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsidboard(k, ANY), function () {});
});

bthread("Guard: Unique Cardsidlabels", function () {
  const x = waitForAnyCardsidlabelsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsidlabels(k, ANY), function () {});
});

bthread("Guard: Unique Cardsidlist", function () {
  const x = waitForAnyCardsidlistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsidlist(k, ANY), function () {});
});

bthread("Guard: Unique Cardsidmembers", function () {
  const x = waitForAnyCardsidmembersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsidmembers(k, ANY), function () {});
});

bthread("Guard: Unique Cardslabels", function () {
  const x = waitForAnyCardslabelsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardslabels(k, ANY), function () {});
});

bthread("Guard: Unique Cardsmembersvoted", function () {
  const x = waitForAnyCardsmembersvotedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsmembersvoted(k, ANY), function () {});
});

bthread("Guard: Unique Cardsname", function () {
  const x = waitForAnyCardsnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsname(k, ANY), function () {});
});

bthread("Guard: Unique Cardspos", function () {
  const x = waitForAnyCardsposAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardspos(k, ANY), function () {});
});

bthread("Guard: Unique Cardsstickers", function () {
  const x = waitForAnyCardsstickersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardsstickers(k, ANY), function () {});
});

bthread("Guard: Unique Cardssubscribed", function () {
  const x = waitForAnyCardssubscribedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCardssubscribed(k, ANY), function () {});
});

bthread("Guard: Unique Checklists", function () {
  const x = waitForAnyChecklistsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChecklists(k, ANY), function () {});
});

bthread("Guard: Unique Checklistscheckitems", function () {
  const x = waitForAnyChecklistscheckitemsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChecklistscheckitems(k, ANY), function () {});
});

bthread("Guard: Unique Checklistsidcard", function () {
  const x = waitForAnyChecklistsidcardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChecklistsidcard(k, ANY), function () {});
});

bthread("Guard: Unique Checklistsname", function () {
  const x = waitForAnyChecklistsnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChecklistsname(k, ANY), function () {});
});

bthread("Guard: Unique Checklistspos", function () {
  const x = waitForAnyChecklistsposAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChecklistspos(k, ANY), function () {});
});

bthread("Guard: Unique Labelnamesblue", function () {
  const x = waitForAnyLabelnamesblueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelnamesblue(k, ANY), function () {});
});

bthread("Guard: Unique Labelnamesgreen", function () {
  const x = waitForAnyLabelnamesgreenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelnamesgreen(k, ANY), function () {});
});

bthread("Guard: Unique Labelnamesorange", function () {
  const x = waitForAnyLabelnamesorangeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelnamesorange(k, ANY), function () {});
});

bthread("Guard: Unique Labelnamespurple", function () {
  const x = waitForAnyLabelnamespurpleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelnamespurple(k, ANY), function () {});
});

bthread("Guard: Unique Labelnamesred", function () {
  const x = waitForAnyLabelnamesredAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelnamesred(k, ANY), function () {});
});

bthread("Guard: Unique Labelnamesyellow", function () {
  const x = waitForAnyLabelnamesyellowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelnamesyellow(k, ANY), function () {});
});

bthread("Guard: Unique Labels", function () {
  const x = waitForAnyLabelsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabels(k, ANY), function () {});
});

bthread("Guard: Unique Labelscolor", function () {
  const x = waitForAnyLabelscolorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelscolor(k, ANY), function () {});
});

bthread("Guard: Unique Labelsname", function () {
  const x = waitForAnyLabelsnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabelsname(k, ANY), function () {});
});

bthread("Guard: Unique Lists", function () {
  const x = waitForAnyListsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLists(k, ANY), function () {});
});

bthread("Guard: Unique Listscards", function () {
  const x = waitForAnyListscardsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListscards(k, ANY), function () {});
});

bthread("Guard: Unique Listsclosed", function () {
  const x = waitForAnyListsclosedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListsclosed(k, ANY), function () {});
});

bthread("Guard: Unique Listsidboard", function () {
  const x = waitForAnyListsidboardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListsidboard(k, ANY), function () {});
});

bthread("Guard: Unique Listsmoveallcards", function () {
  const x = waitForAnyListsmoveallcardsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListsmoveallcards(k, ANY), function () {});
});

bthread("Guard: Unique Listsname", function () {
  const x = waitForAnyListsnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListsname(k, ANY), function () {});
});

bthread("Guard: Unique Listspos", function () {
  const x = waitForAnyListsposAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListspos(k, ANY), function () {});
});

bthread("Guard: Unique Listssubscribed", function () {
  const x = waitForAnyListssubscribedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddListssubscribed(k, ANY), function () {});
});

bthread("Guard: Unique Members", function () {
  const x = waitForAnyMembersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembers(k, ANY), function () {});
});

bthread("Guard: Unique Membersavatar", function () {
  const x = waitForAnyMembersavatarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersavatar(k, ANY), function () {});
});

bthread("Guard: Unique Membersavatarsource", function () {
  const x = waitForAnyMembersavatarsourceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersavatarsource(k, ANY), function () {});
});

bthread("Guard: Unique Membersbio", function () {
  const x = waitForAnyMembersbioAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersbio(k, ANY), function () {});
});

bthread("Guard: Unique Membersboardbackgrounds", function () {
  const x = waitForAnyMembersboardbackgroundsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersboardbackgrounds(k, ANY), function () {});
});

bthread("Guard: Unique Membersboardstars", function () {
  const x = waitForAnyMembersboardstarsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersboardstars(k, ANY), function () {});
});

bthread("Guard: Unique Membersboardstarsidboard", function () {
  const x = waitForAnyMembersboardstarsidboardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersboardstarsidboard(k, ANY), function () {});
});

bthread("Guard: Unique Membersboardstarspos", function () {
  const x = waitForAnyMembersboardstarsposAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersboardstarspos(k, ANY), function () {});
});

bthread("Guard: Unique Memberscustomboardbackgrounds", function () {
  const x = waitForAnyMemberscustomboardbackgroundsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberscustomboardbackgrounds(k, ANY), function () {});
});

bthread("Guard: Unique Memberscustomemoji", function () {
  const x = waitForAnyMemberscustomemojiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberscustomemoji(k, ANY), function () {});
});

bthread("Guard: Unique Memberscustomstickers", function () {
  const x = waitForAnyMemberscustomstickersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberscustomstickers(k, ANY), function () {});
});

bthread("Guard: Unique Membersfullname", function () {
  const x = waitForAnyMembersfullnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersfullname(k, ANY), function () {});
});

bthread("Guard: Unique Membersinitials", function () {
  const x = waitForAnyMembersinitialsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersinitials(k, ANY), function () {});
});

bthread("Guard: Unique Membersonetimemessagesdismissed", function () {
  const x = waitForAnyMembersonetimemessagesdismissedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersonetimemessagesdismissed(k, ANY), function () {});
});

bthread("Guard: Unique Memberssavedsearches", function () {
  const x = waitForAnyMemberssavedsearchesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberssavedsearches(k, ANY), function () {});
});

bthread("Guard: Unique Memberssavedsearchesname", function () {
  const x = waitForAnyMemberssavedsearchesnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberssavedsearchesname(k, ANY), function () {});
});

bthread("Guard: Unique Memberssavedsearchespos", function () {
  const x = waitForAnyMemberssavedsearchesposAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberssavedsearchespos(k, ANY), function () {});
});

bthread("Guard: Unique Memberssavedsearchesquery", function () {
  const x = waitForAnyMemberssavedsearchesqueryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMemberssavedsearchesquery(k, ANY), function () {});
});

bthread("Guard: Unique Membersusername", function () {
  const x = waitForAnyMembersusernameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembersusername(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsemailposition", function () {
  const x = waitForAnyMyprefsemailpositionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsemailposition(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsidemaillist", function () {
  const x = waitForAnyMyprefsidemaillistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsidemaillist(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsshowlistguide", function () {
  const x = waitForAnyMyprefsshowlistguideAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsshowlistguide(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsshowsidebar", function () {
  const x = waitForAnyMyprefsshowsidebarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsshowsidebar(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsshowsidebaractivity", function () {
  const x = waitForAnyMyprefsshowsidebaractivityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsshowsidebaractivity(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsshowsidebarboardactions", function () {
  const x = waitForAnyMyprefsshowsidebarboardactionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsshowsidebarboardactions(k, ANY), function () {});
});

bthread("Guard: Unique Myprefsshowsidebarmembers", function () {
  const x = waitForAnyMyprefsshowsidebarmembersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMyprefsshowsidebarmembers(k, ANY), function () {});
});

bthread("Guard: Unique Notifications", function () {
  const x = waitForAnyNotificationsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotifications(k, ANY), function () {});
});

bthread("Guard: Unique Notificationsunread", function () {
  const x = waitForAnyNotificationsunreadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotificationsunread(k, ANY), function () {});
});

bthread("Guard: Unique Organizations", function () {
  const x = waitForAnyOrganizationsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizations(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsdesc", function () {
  const x = waitForAnyOrganizationsdescAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsdesc(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsdisplayname", function () {
  const x = waitForAnyOrganizationsdisplaynameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsdisplayname(k, ANY), function () {});
});

bthread("Guard: Unique Organizationslogo", function () {
  const x = waitForAnyOrganizationslogoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationslogo(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsmembers", function () {
  const x = waitForAnyOrganizationsmembersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsmembers(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsmembersdeactivated", function () {
  const x = waitForAnyOrganizationsmembersdeactivatedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsmembersdeactivated(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsmemberships", function () {
  const x = waitForAnyOrganizationsmembershipsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsmemberships(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsname", function () {
  const x = waitForAnyOrganizationsnameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsname(k, ANY), function () {});
});

bthread("Guard: Unique Organizationswebsite", function () {
  const x = waitForAnyOrganizationswebsiteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationswebsite(k, ANY), function () {});
});

bthread("Guard: Unique Prefsassociateddomain", function () {
  const x = waitForAnyPrefsassociateddomainAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsassociateddomain(k, ANY), function () {});
});

bthread("Guard: Unique Prefsbackground", function () {
  const x = waitForAnyPrefsbackgroundAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsbackground(k, ANY), function () {});
});

bthread("Guard: Unique Prefsboardvisibilityrestrict", function () {
  const x = waitForAnyPrefsboardvisibilityrestrictAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsboardvisibilityrestrict(k, ANY), function () {});
});

bthread("Guard: Unique Prefscalendarfeedenabled", function () {
  const x = waitForAnyPrefscalendarfeedenabledAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefscalendarfeedenabled(k, ANY), function () {});
});

bthread("Guard: Unique Prefscardaging", function () {
  const x = waitForAnyPrefscardagingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefscardaging(k, ANY), function () {});
});

bthread("Guard: Unique Prefscardcovers", function () {
  const x = waitForAnyPrefscardcoversAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefscardcovers(k, ANY), function () {});
});

bthread("Guard: Unique Prefscolorblind", function () {
  const x = waitForAnyPrefscolorblindAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefscolorblind(k, ANY), function () {});
});

bthread("Guard: Unique Prefscomments", function () {
  const x = waitForAnyPrefscommentsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefscomments(k, ANY), function () {});
});

bthread("Guard: Unique Prefsexternalmembersdisabled", function () {
  const x = waitForAnyPrefsexternalmembersdisabledAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsexternalmembersdisabled(k, ANY), function () {});
});

bthread("Guard: Unique Prefsgoogleappsversion", function () {
  const x = waitForAnyPrefsgoogleappsversionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsgoogleappsversion(k, ANY), function () {});
});

bthread("Guard: Unique Prefsinvitations", function () {
  const x = waitForAnyPrefsinvitationsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsinvitations(k, ANY), function () {});
});

bthread("Guard: Unique Prefslocale", function () {
  const x = waitForAnyPrefslocaleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefslocale(k, ANY), function () {});
});

bthread("Guard: Unique Prefsminutesbetweensummaries", function () {
  const x = waitForAnyPrefsminutesbetweensummariesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsminutesbetweensummaries(k, ANY), function () {});
});

bthread("Guard: Unique Prefsorginviterestrict", function () {
  const x = waitForAnyPrefsorginviterestrictAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsorginviterestrict(k, ANY), function () {});
});

bthread("Guard: Unique Prefspermissionlevel", function () {
  const x = waitForAnyPrefspermissionlevelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefspermissionlevel(k, ANY), function () {});
});

bthread("Guard: Unique Prefsselfjoin", function () {
  const x = waitForAnyPrefsselfjoinAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsselfjoin(k, ANY), function () {});
});

bthread("Guard: Unique Prefsvoting", function () {
  const x = waitForAnyPrefsvotingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrefsvoting(k, ANY), function () {});
});

bthread("Guard: Unique Sessions", function () {
  const x = waitForAnySessionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSessions(k, ANY), function () {});
});

bthread("Guard: Unique Sessionsstatus", function () {
  const x = waitForAnySessionsstatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSessionsstatus(k, ANY), function () {});
});

bthread("Guard: Unique Tokenswebhooks", function () {
  const x = waitForAnyTokenswebhooksAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTokenswebhooks(k, ANY), function () {});
});

bthread("Guard: Unique Webhooks", function () {
  const x = waitForAnyWebhooksAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhooks(k, ANY), function () {});
});

bthread("Guard: Unique Webhooksactive", function () {
  const x = waitForAnyWebhooksactiveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhooksactive(k, ANY), function () {});
});

bthread("Guard: Unique Webhookscallbackurl", function () {
  const x = waitForAnyWebhookscallbackurlAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhookscallbackurl(k, ANY), function () {});
});

bthread("Guard: Unique Webhooksdescription", function () {
  const x = waitForAnyWebhooksdescriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhooksdescription(k, ANY), function () {});
});

bthread("Guard: Unique Webhooksidmodel", function () {
  const x = waitForAnyWebhooksidmodelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhooksidmodel(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
