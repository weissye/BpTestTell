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


bthread("AccountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccount(x.id);
  const e_add = waitForAccountAdded(id);
  block(matchDeleteAccount(id), function () {
    verifyAccountExists(id);
  });
  updateAccount(x.id);
  updateAccount(x.id);
  const e_upd = waitForAccountUpdated(id);
  block(matchDeleteAccount(id), function () {
    verifyAccountUpdated(id);
  });
  deleteAccount(x.id);
  const e_del = waitForAccountDeleted(id);
  block(matchAddAccount(id), function () {
    verifyAccountDoesNotExist(id);
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

bthread("CustomerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomer(x.id);
  const e_add = waitForCustomerAdded(id);
  block(matchDeleteCustomer(id), function () {
    verifyCustomerExists(id);
  });
  updateCustomer(x.id);
  updateCustomer(x.id);
  const e_upd = waitForCustomerUpdated(id);
  block(matchDeleteCustomer(id), function () {
    verifyCustomerUpdated(id);
  });
  deleteCustomer(x.id);
  const e_del = waitForCustomerDeleted(id);
  block(matchAddCustomer(id), function () {
    verifyCustomerDoesNotExist(id);
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

bthread("ResetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReset(x.id);
  const e_add = waitForResetAdded(id);
  block(matchDeleteReset(id), function () {
    verifyResetExists(id);
  });
  updateReset(x.id);
  updateReset(x.id);
  const e_upd = waitForResetUpdated(id);
  block(matchDeleteReset(id), function () {
    verifyResetUpdated(id);
  });
  deleteReset(x.id);
  const e_del = waitForResetDeleted(id);
  block(matchAddReset(id), function () {
    verifyResetDoesNotExist(id);
  });
});

bthread("TransactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTransaction(x.id);
  const e_add = waitForTransactionAdded(id);
  block(matchDeleteTransaction(id), function () {
    verifyTransactionExists(id);
  });
  updateTransaction(x.id);
  updateTransaction(x.id);
  const e_upd = waitForTransactionUpdated(id);
  block(matchDeleteTransaction(id), function () {
    verifyTransactionUpdated(id);
  });
  deleteTransaction(x.id);
  const e_del = waitForTransactionDeleted(id);
  block(matchAddTransaction(id), function () {
    verifyTransactionDoesNotExist(id);
  });
});

bthread("TransferLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTransfer(x.id);
  const e_add = waitForTransferAdded(id);
  block(matchDeleteTransfer(id), function () {
    verifyTransferExists(id);
  });
  updateTransfer(x.id);
  updateTransfer(x.id);
  const e_upd = waitForTransferUpdated(id);
  block(matchDeleteTransfer(id), function () {
    verifyTransferUpdated(id);
  });
  deleteTransfer(x.id);
  const e_del = waitForTransferDeleted(id);
  block(matchAddTransfer(id), function () {
    verifyTransferDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Account nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAccount(x.id);
  for (var i=0; i<steps; i++) {
    updateAccount(x.id);
  }
  if (pick([true,false])) { deleteAccount(x.id); }
  verifyAccountExists(x.id);
  verifyAccountUpdated(x.id);
});

bthread("Account nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAccount(a.id);
  block(matchAddAccount(a.id, ANY), function () {});
  addAccount(b.id);
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

bthread("Customer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCustomer(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomer(x.id);
  }
  if (pick([true,false])) { deleteCustomer(x.id); }
  verifyCustomerExists(x.id);
  verifyCustomerUpdated(x.id);
});

bthread("Customer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomer(a.id);
  block(matchAddCustomer(a.id, ANY), function () {});
  addCustomer(b.id);
});

bthread("Loan nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLoan(a.id);
  block(matchAddLoan(a.id, ANY), function () {});
  addLoan(b.id);
});

bthread("Reset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReset(x.id);
  for (var i=0; i<steps; i++) {
    updateReset(x.id);
  }
  if (pick([true,false])) { deleteReset(x.id); }
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

bthread("Reset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReset(a.id);
  block(matchAddReset(a.id, ANY), function () {});
  addReset(b.id);
});

bthread("Transaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTransaction(x.id);
  for (var i=0; i<steps; i++) {
    updateTransaction(x.id);
  }
  if (pick([true,false])) { deleteTransaction(x.id); }
  verifyTransactionExists(x.id);
  verifyTransactionUpdated(x.id);
});

bthread("Transaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTransaction(a.id);
  block(matchAddTransaction(a.id, ANY), function () {});
  addTransaction(b.id);
});

bthread("Transfer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTransfer(x.id);
  for (var i=0; i<steps; i++) {
    updateTransfer(x.id);
  }
  if (pick([true,false])) { deleteTransfer(x.id); }
  verifyTransferExists(x.id);
  verifyTransferUpdated(x.id);
});

bthread("Transfer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTransfer(a.id);
  block(matchAddTransfer(a.id, ANY), function () {});
  addTransfer(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccount(k, ANY), function () {
    verifyAccountExists(k);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccount(k, ANY), function () {
    verifyAccountUpdated(k);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccount(k, ANY), function () {
    verifyAccountDoesNotExist(k);
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

bthread("Customer create verification", function () {
  const e = waitForAnyCustomerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomer(k, ANY), function () {
    verifyCustomerExists(k);
  });
});

bthread("Customer update verification", function () {
  const e = waitForAnyCustomerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomer(k, ANY), function () {
    verifyCustomerUpdated(k);
  });
});

bthread("Customer delete verification", function () {
  const e = waitForAnyCustomerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomer(k, ANY), function () {
    verifyCustomerDoesNotExist(k);
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

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReset(k, ANY), function () {
    verifyResetExists(k);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReset(k, ANY), function () {
    verifyResetUpdated(k);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReset(k, ANY), function () {
    verifyResetDoesNotExist(k);
  });
});

bthread("Transaction create verification", function () {
  const e = waitForAnyTransactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransaction(k, ANY), function () {
    verifyTransactionExists(k);
  });
});

bthread("Transaction update verification", function () {
  const e = waitForAnyTransactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransaction(k, ANY), function () {
    verifyTransactionUpdated(k);
  });
});

bthread("Transaction delete verification", function () {
  const e = waitForAnyTransactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTransaction(k, ANY), function () {
    verifyTransactionDoesNotExist(k);
  });
});

bthread("Transfer create verification", function () {
  const e = waitForAnyTransferAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransfer(k, ANY), function () {
    verifyTransferExists(k);
  });
});

bthread("Transfer update verification", function () {
  const e = waitForAnyTransferUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransfer(k, ANY), function () {
    verifyTransferUpdated(k);
  });
});

bthread("Transfer delete verification", function () {
  const e = waitForAnyTransferDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTransfer(k, ANY), function () {
    verifyTransferDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Account", function () {
  const x = waitForAnyAccountAdded();
  block(matchAddAccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Card", function () {
  const x = waitForAnyCardAdded();
  block(matchAddCard(x.id, ANY), function () {});
});

bthread("Guard: Unique Customer", function () {
  const x = waitForAnyCustomerAdded();
  block(matchAddCustomer(x.id, ANY), function () {});
});

bthread("Guard: Unique Loan", function () {
  const x = waitForAnyLoanAdded();
  block(matchAddLoan(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

bthread("Guard: Unique Transaction", function () {
  const x = waitForAnyTransactionAdded();
  block(matchAddTransaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Transfer", function () {
  const x = waitForAnyTransferAdded();
  block(matchAddTransfer(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
