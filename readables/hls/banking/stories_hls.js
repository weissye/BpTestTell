// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: banking
// Source: artifacts\hls_nondet\7_suts_llm_provider\banking\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Account`, function () {
  const ev = waitFor({op: 'add', entity: 'Account'});
  block({op: 'deleteAccount'});
  verifyAccountExists(ev.id);
});

bthread(`HLS PASSIVE: add Card`, function () {
  const ev = waitFor({op: 'add', entity: 'Card'});
  block({op: 'deleteCard'});
  verifyCardExists(ev.id);
});

bthread(`HLS PASSIVE: add Customer`, function () {
  const ev = waitFor({op: 'add', entity: 'Customer'});
  block({op: 'deleteCustomer'});
  verifyCustomerExists(ev.id);
});

bthread(`HLS PASSIVE: add Transfer`, function () {
  const ev = waitFor({op: 'add', entity: 'Transfer'});
  block({op: 'deleteTransfer'});
  verifyTransferExists(ev.id);
});

