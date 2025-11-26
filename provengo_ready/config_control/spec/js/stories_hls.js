// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:App:read_only
bthread("crud:App:read_only", function () {
  let appId = 200;
  // Read-only check for App
  verifyAppExists(appId);
});

// Story: crud:Env:read_only
bthread("crud:Env:read_only", function () {
  let envId = 210;
  // Read-only check for Env
  verifyEnvExists(envId);
});

// Story: crud:Config:read_only
bthread("crud:Config:read_only", function () {
  let configId = 220;
  // Read-only check for Config
  verifyConfigExists(configId);
});

// Story: crud:Release:read_only
bthread("crud:Release:read_only", function () {
  let releaseId = 230;
  // Read-only check for Release
  verifyReleaseExists(releaseId);
});

// Story: crud:Policy:read_only
bthread("crud:Policy:read_only", function () {
  let policyId = 240;
  // Read-only check for Policy
  verifyPolicyExists(policyId);
});
