// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: garage
// Source: artifacts\hls_nondet\7_suts_llm_provider\garage\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Car`, function () {
  const ev = waitFor({op: 'add', entity: 'Car'});
  block({op: 'deleteCar'});
  verifyCarExists(ev.id);
});

bthread(`HLS PASSIVE: add Chain`, function () {
  const ev = waitFor({op: 'add', entity: 'Chain'});
  block({op: 'deleteChain'});
  verifyChainExists(ev.id);
});

bthread(`HLS PASSIVE: add Customer`, function () {
  const ev = waitFor({op: 'add', entity: 'Customer'});
  block({op: 'deleteCustomer'});
  verifyCustomerExists(ev.id);
});

bthread(`HLS PASSIVE: update Garage`, function () {
  const ev = waitFor({op: 'update', entity: 'Garage'});
  block({op: 'updateGarage'});
  verifyGarageExists(ev.id);
  verifyGarageUpdated(ev.id);
});

