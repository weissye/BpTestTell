// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: meilisearch
// Source: artifacts\hls_nondet\real_world_llm_provider\meilisearch\hls_nondet_gold.json


bthread(`HLS PASSIVE: delete All`, function () {
  const ev = waitFor({op: 'delete', entity: 'All'});
  block({op: 'addAll'});
  verifyAllNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Batch`, function () {
  const ev = waitFor({op: 'delete', entity: 'Batch'});
  block({op: 'addBatch'});
  verifyBatchNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete One`, function () {
  const ev = waitFor({op: 'delete', entity: 'One'});
  block({op: 'addOne'});
  verifyOneNotExists(ev.id);
});

