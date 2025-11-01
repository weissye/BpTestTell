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


bthread("BookLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBook(x.id);
  const e_add = waitForBookAdded(id);
  block(matchDeleteBook(id), function () {
    verifyBookExists(id);
  });
  updateBook(x.id);
  updateBook(x.id);
  const e_upd = waitForBookUpdated(id);
  block(matchDeleteBook(id), function () {
    verifyBookUpdated(id);
  });
  deleteBook(x.id);
  const e_del = waitForBookDeleted(id);
  block(matchAddBook(id), function () {
    verifyBookDoesNotExist(id);
  });
});

bthread("BookcreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBookcreate(x.id);
  const e_add = waitForBookcreateAdded(id);
  block(matchDeleteBookcreate(id), function () {
    verifyBookcreateExists(id);
  });
  updateBookcreate(x.id);
  updateBookcreate(x.id);
  const e_upd = waitForBookcreateUpdated(id);
  block(matchDeleteBookcreate(id), function () {
    verifyBookcreateUpdated(id);
  });
  deleteBookcreate(x.id);
  const e_del = waitForBookcreateDeleted(id);
  block(matchAddBookcreate(id), function () {
    verifyBookcreateDoesNotExist(id);
  });
});

bthread("HoldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHold(x.id);
  const e_add = waitForHoldAdded(id);
  block(matchDeleteHold(id), function () {
    verifyHoldExists(id);
  });
  updateHold(x.id);
  updateHold(x.id);
  const e_upd = waitForHoldUpdated(id);
  block(matchDeleteHold(id), function () {
    verifyHoldUpdated(id);
  });
  deleteHold(x.id);
  const e_del = waitForHoldDeleted(id);
  block(matchAddHold(id), function () {
    verifyHoldDoesNotExist(id);
  });
});

bthread("HoldcreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHoldcreate(x.id);
  const e_add = waitForHoldcreateAdded(id);
  block(matchDeleteHoldcreate(id), function () {
    verifyHoldcreateExists(id);
  });
  updateHoldcreate(x.id);
  updateHoldcreate(x.id);
  const e_upd = waitForHoldcreateUpdated(id);
  block(matchDeleteHoldcreate(id), function () {
    verifyHoldcreateUpdated(id);
  });
  deleteHoldcreate(x.id);
  const e_del = waitForHoldcreateDeleted(id);
  block(matchAddHoldcreate(id), function () {
    verifyHoldcreateDoesNotExist(id);
  });
});

bthread("LoanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLoan(x.id);
  const e_add = waitForLoanAdded(id);
  block(matchDeleteLoan(id), function () {
    verifyLoanExists(id);
  });
  updateLoan(x.id);
  updateLoan(x.id);
  const e_upd = waitForLoanUpdated(id);
  block(matchDeleteLoan(id), function () {
    verifyLoanUpdated(id);
  });
  deleteLoan(x.id);
  const e_del = waitForLoanDeleted(id);
  block(matchAddLoan(id), function () {
    verifyLoanDoesNotExist(id);
  });
});

bthread("LoancreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLoancreate(x.id);
  const e_add = waitForLoancreateAdded(id);
  block(matchDeleteLoancreate(id), function () {
    verifyLoancreateExists(id);
  });
  updateLoancreate(x.id);
  updateLoancreate(x.id);
  const e_upd = waitForLoancreateUpdated(id);
  block(matchDeleteLoancreate(id), function () {
    verifyLoancreateUpdated(id);
  });
  deleteLoancreate(x.id);
  const e_del = waitForLoancreateDeleted(id);
  block(matchAddLoancreate(id), function () {
    verifyLoancreateDoesNotExist(id);
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

bthread("UsercreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsercreate(x.id);
  const e_add = waitForUsercreateAdded(id);
  block(matchDeleteUsercreate(id), function () {
    verifyUsercreateExists(id);
  });
  updateUsercreate(x.id);
  updateUsercreate(x.id);
  const e_upd = waitForUsercreateUpdated(id);
  block(matchDeleteUsercreate(id), function () {
    verifyUsercreateUpdated(id);
  });
  deleteUsercreate(x.id);
  const e_del = waitForUsercreateDeleted(id);
  block(matchAddUsercreate(id), function () {
    verifyUsercreateDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Book nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBook(x.id);
  for (var i=0; i<steps; i++) {
    updateBook(x.id);
  }
  if (pick([true,false])) { deleteBook(x.id); }
  verifyBookExists(x.id);
  verifyBookUpdated(x.id);
});

bthread("Book nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBook(a.id);
  block(matchAddBook(a.id, ANY), function () {});
  addBook(b.id);
});

bthread("Bookcreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addBookcreate(x.id);
  for (var i=0; i<steps; i++) {
    updateBookcreate(x.id);
  }
  if (pick([true,false])) { deleteBookcreate(x.id); }
  verifyBookcreateExists(x.id);
  verifyBookcreateUpdated(x.id);
});

bthread("Bookcreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBookcreate(a.id);
  block(matchAddBookcreate(a.id, ANY), function () {});
  addBookcreate(b.id);
});

bthread("Hold nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addHold(x.id);
  for (var i=0; i<steps; i++) {
    updateHold(x.id);
  }
  if (pick([true,false])) { deleteHold(x.id); }
  verifyHoldExists(x.id);
  verifyHoldUpdated(x.id);
});

bthread("Hold nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHold(a.id);
  block(matchAddHold(a.id, ANY), function () {});
  addHold(b.id);
});

bthread("Holdcreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addHoldcreate(x.id);
  for (var i=0; i<steps; i++) {
    updateHoldcreate(x.id);
  }
  if (pick([true,false])) { deleteHoldcreate(x.id); }
  verifyHoldcreateExists(x.id);
  verifyHoldcreateUpdated(x.id);
});

bthread("Holdcreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHoldcreate(a.id);
  block(matchAddHoldcreate(a.id, ANY), function () {});
  addHoldcreate(b.id);
});

bthread("Loan nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLoan(x.id);
  for (var i=0; i<steps; i++) {
    updateLoan(x.id);
  }
  if (pick([true,false])) { deleteLoan(x.id); }
  verifyLoanExists(x.id);
  verifyLoanUpdated(x.id);
});

bthread("Loan nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLoan(a.id);
  block(matchAddLoan(a.id, ANY), function () {});
  addLoan(b.id);
});

bthread("Loancreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLoancreate(x.id);
  for (var i=0; i<steps; i++) {
    updateLoancreate(x.id);
  }
  if (pick([true,false])) { deleteLoancreate(x.id); }
  verifyLoancreateExists(x.id);
  verifyLoancreateUpdated(x.id);
});

bthread("Loancreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLoancreate(a.id);
  block(matchAddLoancreate(a.id, ANY), function () {});
  addLoancreate(b.id);
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

bthread("Usercreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUsercreate(x.id);
  for (var i=0; i<steps; i++) {
    updateUsercreate(x.id);
  }
  if (pick([true,false])) { deleteUsercreate(x.id); }
  verifyUsercreateExists(x.id);
  verifyUsercreateUpdated(x.id);
});

bthread("Usercreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsercreate(a.id);
  block(matchAddUsercreate(a.id, ANY), function () {});
  addUsercreate(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Book create verification", function () {
  const e = waitForAnyBookAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBook(k), function () {
    verifyBookExists(k);
  });
});

bthread("Book update verification", function () {
  const e = waitForAnyBookUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBook(k), function () {
    verifyBookUpdated(k);
  });
});

bthread("Book delete verification", function () {
  const e = waitForAnyBookDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBook(k), function () {
    verifyBookDoesNotExist(k);
  });
});

bthread("Bookcreate create verification", function () {
  const e = waitForAnyBookcreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBookcreate(k), function () {
    verifyBookcreateExists(k);
  });
});

bthread("Bookcreate update verification", function () {
  const e = waitForAnyBookcreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBookcreate(k), function () {
    verifyBookcreateUpdated(k);
  });
});

bthread("Bookcreate delete verification", function () {
  const e = waitForAnyBookcreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBookcreate(k), function () {
    verifyBookcreateDoesNotExist(k);
  });
});

bthread("Hold create verification", function () {
  const e = waitForAnyHoldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHold(k), function () {
    verifyHoldExists(k);
  });
});

bthread("Hold update verification", function () {
  const e = waitForAnyHoldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHold(k), function () {
    verifyHoldUpdated(k);
  });
});

bthread("Hold delete verification", function () {
  const e = waitForAnyHoldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHold(k), function () {
    verifyHoldDoesNotExist(k);
  });
});

bthread("Holdcreate create verification", function () {
  const e = waitForAnyHoldcreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHoldcreate(k), function () {
    verifyHoldcreateExists(k);
  });
});

bthread("Holdcreate update verification", function () {
  const e = waitForAnyHoldcreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHoldcreate(k), function () {
    verifyHoldcreateUpdated(k);
  });
});

bthread("Holdcreate delete verification", function () {
  const e = waitForAnyHoldcreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHoldcreate(k), function () {
    verifyHoldcreateDoesNotExist(k);
  });
});

bthread("Loan create verification", function () {
  const e = waitForAnyLoanAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLoan(k), function () {
    verifyLoanExists(k);
  });
});

bthread("Loan update verification", function () {
  const e = waitForAnyLoanUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLoan(k), function () {
    verifyLoanUpdated(k);
  });
});

bthread("Loan delete verification", function () {
  const e = waitForAnyLoanDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLoan(k), function () {
    verifyLoanDoesNotExist(k);
  });
});

bthread("Loancreate create verification", function () {
  const e = waitForAnyLoancreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLoancreate(k), function () {
    verifyLoancreateExists(k);
  });
});

bthread("Loancreate update verification", function () {
  const e = waitForAnyLoancreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLoancreate(k), function () {
    verifyLoancreateUpdated(k);
  });
});

bthread("Loancreate delete verification", function () {
  const e = waitForAnyLoancreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLoancreate(k), function () {
    verifyLoancreateDoesNotExist(k);
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

bthread("Usercreate create verification", function () {
  const e = waitForAnyUsercreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsercreate(k), function () {
    verifyUsercreateExists(k);
  });
});

bthread("Usercreate update verification", function () {
  const e = waitForAnyUsercreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsercreate(k), function () {
    verifyUsercreateUpdated(k);
  });
});

bthread("Usercreate delete verification", function () {
  const e = waitForAnyUsercreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsercreate(k), function () {
    verifyUsercreateDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Book", function () {
  const x = waitForAnyBookAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBook(k, ANY), function () {});
});

bthread("Guard: Unique Bookcreate", function () {
  const x = waitForAnyBookcreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBookcreate(k, ANY), function () {});
});

bthread("Guard: Unique Hold", function () {
  const x = waitForAnyHoldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHold(k, ANY), function () {});
});

bthread("Guard: Unique Holdcreate", function () {
  const x = waitForAnyHoldcreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHoldcreate(k, ANY), function () {});
});

bthread("Guard: Unique Loan", function () {
  const x = waitForAnyLoanAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLoan(k, ANY), function () {});
});

bthread("Guard: Unique Loancreate", function () {
  const x = waitForAnyLoancreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLoancreate(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Usercreate", function () {
  const x = waitForAnyUsercreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsercreate(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
