// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:App:read_only
bthread("crud:App:read_only", function () {

  verifyAppExists();
});

// Story: crud:Env:read_only
bthread("crud:Env:read_only", function () {

  verifyEnvExists();
});

// Story: crud:Config:read_only
bthread("crud:Config:read_only", function () {

  verifyConfigExists();
});

// Story: crud:Release:read_only
bthread("crud:Release:read_only", function () {

  verifyReleaseExists();
});

// Story: crud:Policy:read_only
bthread("crud:Policy:read_only", function () {

  verifyPolicyExists();
});
