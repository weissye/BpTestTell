// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: twilio
// Source: artifacts\hls_nondet\real_world_llm_provider\twilio\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Gold`, function () {
  const ev = waitFor({op: 'add', entity: 'Gold'});
  block({op: 'deleteGold'});
  verifyGoldExists(ev.id);
});

bthread(`HLS PASSIVE: delete Gold`, function () {
  const ev = waitFor({op: 'delete', entity: 'Gold'});
  block({op: 'addGold'});
  verifyGoldNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Gold`, function () {
  const ev = waitFor({op: 'update', entity: 'Gold'});
  block({op: 'updateGold'});
  verifyGoldExists(ev.id);
  verifyGoldUpdated(ev.id);
});

