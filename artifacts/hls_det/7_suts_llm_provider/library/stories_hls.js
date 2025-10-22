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

// ===== PASSIVE ASSERTIONS =====

bthread("Book create verification", function () {
  const e = waitForAnyBookAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBook(k, ANY), function () {
    verifyBookExists(k);
  });
});

bthread("Book update verification", function () {
  const e = waitForAnyBookUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBook(k, ANY), function () {
    verifyBookUpdated(k);
  });
});

bthread("Book delete verification", function () {
  const e = waitForAnyBookDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBook(k, ANY), function () {
    verifyBookDoesNotExist(k);
  });
});

bthread("Hold create verification", function () {
  const e = waitForAnyHoldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHold(k, ANY), function () {
    verifyHoldExists(k);
  });
});

bthread("Hold update verification", function () {
  const e = waitForAnyHoldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHold(k, ANY), function () {
    verifyHoldUpdated(k);
  });
});

bthread("Hold delete verification", function () {
  const e = waitForAnyHoldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHold(k, ANY), function () {
    verifyHoldDoesNotExist(k);
  });
});

bthread("Loan create verification", function () {
  const e = waitForAnyLoanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLoan(k, ANY), function () {
    verifyLoanExists(k);
  });
});

bthread("Loan update verification", function () {
  const e = waitForAnyLoanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLoan(k, ANY), function () {
    verifyLoanUpdated(k);
  });
});

bthread("Loan delete verification", function () {
  const e = waitForAnyLoanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLoan(k, ANY), function () {
    verifyLoanDoesNotExist(k);
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

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Book", function () {
  const x = waitForAnyBookAdded();
  block(matchAddBook(x.id, ANY), function () {});
});

bthread("Guard: Unique Hold", function () {
  const x = waitForAnyHoldAdded();
  block(matchAddHold(x.id, ANY), function () {});
});

bthread("Guard: Unique Loan", function () {
  const x = waitForAnyLoanAdded();
  block(matchAddLoan(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
