// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: config_control
// Source: artifacts\hls_nondet\7_suts_llm_provider\config_control\hls_nondet_gold.json


bthread(`HLS PASSIVE: add App`, function () {
  const ev = waitFor({op: 'add', entity: 'App'});
  block({op: 'deleteApp'});
  verifyAppExists(ev.id);
});

bthread(`HLS PASSIVE: add Config`, function () {
  const ev = waitFor({op: 'add', entity: 'Config'});
  block({op: 'deleteConfig'});
  verifyConfigExists(ev.id);
});

bthread(`HLS PASSIVE: add Env`, function () {
  const ev = waitFor({op: 'add', entity: 'Env'});
  block({op: 'deleteEnv'});
  verifyEnvExists(ev.id);
});

bthread(`HLS PASSIVE: add Policy`, function () {
  const ev = waitFor({op: 'add', entity: 'Policy'});
  block({op: 'deletePolicy'});
  verifyPolicyExists(ev.id);
});

bthread(`HLS PASSIVE: add Release`, function () {
  const ev = waitFor({op: 'add', entity: 'Release'});
  block({op: 'deleteRelease'});
  verifyReleaseExists(ev.id);
});

