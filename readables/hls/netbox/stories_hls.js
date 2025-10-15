// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: netbox
// Source: artifacts\hls_nondet\real_world_llm_provider\netbox\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Gold`, function () {
  const ev = waitFor({op: 'add', entity: 'Gold'});
  block({op: 'deleteGold'});
  verifyGoldExists(ev.id);
});

bthread(`HLS PASSIVE: delete Silver`, function () {
  const ev = waitFor({op: 'delete', entity: 'Silver'});
  block({op: 'addSilver'});
  verifySilverNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Silver`, function () {
  const ev = waitFor({op: 'update', entity: 'Silver'});
  block({op: 'updateSilver'});
  verifySilverExists(ev.id);
  verifySilverUpdated(ev.id);
});

