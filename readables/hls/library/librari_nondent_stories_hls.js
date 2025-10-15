// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: library
// Source: artifacts\hls_nondet\7_suts_llm_provider\library\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Book`, function () {
  const ev = waitFor({op: 'add', entity: 'Book'});
  block({op: 'deleteBook'});
  verifyBookExists(ev.id);
});

bthread(`HLS PASSIVE: delete Book`, function () {
  const ev = waitFor({op: 'delete', entity: 'Book'});
  block({op: 'addBook'});
  verifyBookNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Hold`, function () {
  const ev = waitFor({op: 'add', entity: 'Hold'});
  block({op: 'deleteHold'});
  verifyHoldExists(ev.id);
});

bthread(`HLS PASSIVE: delete Hold`, function () {
  const ev = waitFor({op: 'delete', entity: 'Hold'});
  block({op: 'addHold'});
  verifyHoldNotExists(ev.id);
});

bthread(`HLS PASSIVE: add Loan`, function () {
  const ev = waitFor({op: 'add', entity: 'Loan'});
  block({op: 'deleteLoan'});
  verifyLoanExists(ev.id);
});

bthread(`HLS PASSIVE: delete Loan`, function () {
  const ev = waitFor({op: 'delete', entity: 'Loan'});
  block({op: 'addLoan'});
  verifyLoanNotExists(ev.id);
});

bthread(`HLS PASSIVE: add User`, function () {
  const ev = waitFor({op: 'add', entity: 'User'});
  block({op: 'deleteUser'});
  verifyUserExists(ev.id);
});

bthread(`HLS PASSIVE: delete User`, function () {
  const ev = waitFor({op: 'delete', entity: 'User'});
  block({op: 'addUser'});
  verifyUserNotExists(ev.id);
});

