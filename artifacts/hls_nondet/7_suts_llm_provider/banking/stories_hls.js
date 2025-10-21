// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AccountLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccount(x.id);
  updateAccount(x.id);
  updateAccount(x.id);
  verifyAccountExists(x.id);
  verifyAccountUpdated(x.id);
  deleteAccount(x.id);
});

bthread("CardLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCard(x.id);
  updateCard(x.id);
  updateCard(x.id);
  verifyCardExists(x.id);
  verifyCardUpdated(x.id);
  deleteCard(x.id);
});

bthread("CustomerLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomer(x.id);
  updateCustomer(x.id);
  updateCustomer(x.id);
  verifyCustomerExists(x.id);
  verifyCustomerUpdated(x.id);
  deleteCustomer(x.id);
});

bthread("LoanLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLoan(x.id);
  updateLoan(x.id);
  updateLoan(x.id);
  verifyLoanExists(x.id);
  verifyLoanUpdated(x.id);
  deleteLoan(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
  deleteReset(x.id);
});

bthread("TransactionLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTransaction(x.id);
  updateTransaction(x.id);
  updateTransaction(x.id);
  verifyTransactionExists(x.id);
  verifyTransactionUpdated(x.id);
  deleteTransaction(x.id);
});

bthread("TransferLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTransfer(x.id);
  updateTransfer(x.id);
  updateTransfer(x.id);
  verifyTransferExists(x.id);
  verifyTransferUpdated(x.id);
  deleteTransfer(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Account nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Account_id_N"}]);
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
  const x = pick([{id: "Card_id_N"}]);
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
  const x = pick([{id: "Customer_id_N"}]);
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
  const x = pick([{id: "Loan_id_N"}]);
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
  const x = pick([{id: "Reset_id_N"}]);
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
  const x = pick([{id: "Transaction_id_N"}]);
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
  const x = pick([{id: "Transfer_id_N"}]);
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
  block(matchDeleteAccount(e.id, ANY), function () {
    verifyAccountExists(e.id);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  block(matchDeleteAccount(e.id, ANY), function () {
    verifyAccountUpdated(e.id);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  block(matchAddAccount(e.id, ANY), function () {
    verifyAccountDoesNotExist(e.id);
  });
});

bthread("Card create verification", function () {
  const e = waitForAnyCardAdded();
  block(matchDeleteCard(e.id, ANY), function () {
    verifyCardExists(e.id);
  });
});

bthread("Card update verification", function () {
  const e = waitForAnyCardUpdated();
  block(matchDeleteCard(e.id, ANY), function () {
    verifyCardUpdated(e.id);
  });
});

bthread("Card delete verification", function () {
  const e = waitForAnyCardDeleted();
  block(matchAddCard(e.id, ANY), function () {
    verifyCardDoesNotExist(e.id);
  });
});

bthread("Customer create verification", function () {
  const e = waitForAnyCustomerAdded();
  block(matchDeleteCustomer(e.id, ANY), function () {
    verifyCustomerExists(e.id);
  });
});

bthread("Customer update verification", function () {
  const e = waitForAnyCustomerUpdated();
  block(matchDeleteCustomer(e.id, ANY), function () {
    verifyCustomerUpdated(e.id);
  });
});

bthread("Customer delete verification", function () {
  const e = waitForAnyCustomerDeleted();
  block(matchAddCustomer(e.id, ANY), function () {
    verifyCustomerDoesNotExist(e.id);
  });
});

bthread("Loan create verification", function () {
  const e = waitForAnyLoanAdded();
  block(matchDeleteLoan(e.id, ANY), function () {
    verifyLoanExists(e.id);
  });
});

bthread("Loan update verification", function () {
  const e = waitForAnyLoanUpdated();
  block(matchDeleteLoan(e.id, ANY), function () {
    verifyLoanUpdated(e.id);
  });
});

bthread("Loan delete verification", function () {
  const e = waitForAnyLoanDeleted();
  block(matchAddLoan(e.id, ANY), function () {
    verifyLoanDoesNotExist(e.id);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetExists(e.id);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetUpdated(e.id);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  block(matchAddReset(e.id, ANY), function () {
    verifyResetDoesNotExist(e.id);
  });
});

bthread("Transaction create verification", function () {
  const e = waitForAnyTransactionAdded();
  block(matchDeleteTransaction(e.id, ANY), function () {
    verifyTransactionExists(e.id);
  });
});

bthread("Transaction update verification", function () {
  const e = waitForAnyTransactionUpdated();
  block(matchDeleteTransaction(e.id, ANY), function () {
    verifyTransactionUpdated(e.id);
  });
});

bthread("Transaction delete verification", function () {
  const e = waitForAnyTransactionDeleted();
  block(matchAddTransaction(e.id, ANY), function () {
    verifyTransactionDoesNotExist(e.id);
  });
});

bthread("Transfer create verification", function () {
  const e = waitForAnyTransferAdded();
  block(matchDeleteTransfer(e.id, ANY), function () {
    verifyTransferExists(e.id);
  });
});

bthread("Transfer update verification", function () {
  const e = waitForAnyTransferUpdated();
  block(matchDeleteTransfer(e.id, ANY), function () {
    verifyTransferUpdated(e.id);
  });
});

bthread("Transfer delete verification", function () {
  const e = waitForAnyTransferDeleted();
  block(matchAddTransfer(e.id, ANY), function () {
    verifyTransferDoesNotExist(e.id);
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
