// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: gitea
// Source: artifacts\hls_nondet\real_world_llm_provider\gitea\hls_nondet_gold.json


bthread(`HLS PASSIVE: add CurrentUserRepo`, function () {
  const ev = waitFor({op: 'add', entity: 'CurrentUserRepo'});
  block({op: 'deleteCurrentUserRepo'});
  verifyCurrentUserRepoExists(ev.id);
});

bthread(`HLS PASSIVE: delete Package`, function () {
  const ev = waitFor({op: 'delete', entity: 'Package'});
  block({op: 'addPackage'});
  verifyPackageNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete RepoSecret`, function () {
  const ev = waitFor({op: 'delete', entity: 'RepoSecret'});
  block({op: 'addRepoSecret'});
  verifyRepoSecretNotExists(ev.id);
});

bthread(`HLS PASSIVE: update RepoSecret`, function () {
  const ev = waitFor({op: 'update', entity: 'RepoSecret'});
  block({op: 'updateRepoSecret'});
  verifyRepoSecretExists(ev.id);
  verifyRepoSecretUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete UserSecret`, function () {
  const ev = waitFor({op: 'delete', entity: 'UserSecret'});
  block({op: 'addUserSecret'});
  verifyUserSecretNotExists(ev.id);
});

bthread(`HLS PASSIVE: update UserSecret`, function () {
  const ev = waitFor({op: 'update', entity: 'UserSecret'});
  block({op: 'updateUserSecret'});
  verifyUserSecretExists(ev.id);
  verifyUserSecretUpdated(ev.id);
});

bthread(`HLS PASSIVE: update UserSettings`, function () {
  const ev = waitFor({op: 'update', entity: 'UserSettings'});
  block({op: 'updateUserSettings'});
  verifyUserSettingsExists(ev.id);
  verifyUserSettingsUpdated(ev.id);
});

