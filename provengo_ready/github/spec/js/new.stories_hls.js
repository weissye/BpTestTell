// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:users:read_only
bthread("crud:users:read_only", function () {
  let username = "username_200";
  // Read-only check for users
  verifyusersExists(username);
});

// Story: crud:webhooks:read_only
bthread("crud:webhooks:read_only", function () {

  // Read-only check for webhooks
  verifywebhooksExists(id);
});

// Story: crud:apps:read_only
bthread("crud:apps:read_only", function () {
  let code = "code_220";
  // Read-only check for apps
  verifyappsExists(code);
});

// Story: crud:enterprise-teams:nondet:1:1
bthread("crud:enterprise-teams:nondet:1:1", function () {
  let enterprise = "enterprise_230";
  addEnterpriseTeam("enterprise_230");
  tryToAddExistingenterprise-teams("enterprise_230");
  verifyenterprise-teamsExists(enterprise);
  updateEnterpriseTeam(enterprise, "enterprise_230");
  deleteEnterpriseTeam(enterprise);
  tryToDeleteANonExistingenterprise-teams(enterprise);
  verifyenterprise-teamsDoesNotExist(enterprise);
});

// Story: crud:enterprise-teams:nondet:1:2
bthread("crud:enterprise-teams:nondet:1:2", function () {
  let enterprise = "enterprise_231";
  addEnterpriseTeam("enterprise_231");
  tryToAddExistingenterprise-teams("enterprise_231");
  updateEnterpriseTeam(enterprise, "enterprise_231");
  verifyenterprise-teamsExists(enterprise);
  deleteEnterpriseTeam(enterprise);
  tryToDeleteANonExistingenterprise-teams(enterprise);
  verifyenterprise-teamsDoesNotExist(enterprise);
});

// Story: crud:enterprise-teams:nondet:negative:dup-add
bthread("crud:enterprise-teams:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_236";
  addEnterpriseTeam("enterprise_236");
  verifyenterprise-teamsExists(enterprise);
  tryToAddExistingenterprise-teams("enterprise_236");
  verifyenterprise-teamsExists(enterprise);
});

// Story: crud:enterprise-teams:nondet:existing:update
bthread("crud:enterprise-teams:nondet:existing:update", function () {
  let ev = waitForAnyenterprise-teamsAdded();
  let args = Object.values(ev);
  block(matchDeletedenterprise-teams.apply(null, args), function () {
    // verifyenterprise-teamsExists.apply(null, args);
    // updateEnterpriseTeam.apply(null, args);
  });
});

// Story: monitor:enterprise-teams:add
bthread("monitor:enterprise-teams:add", function () {
  while (true) {
    let ev = waitForAnyenterprise-teamsAdded();
    let args = Object.values(ev);
    block(matchDeletedenterprise-teams.apply(null, args), function () {
      // verifyenterprise-teamsExists.apply(null, args);
    });
  }
});

// Story: crud:enterprise-team-memberships:read_only
bthread("crud:enterprise-team-memberships:read_only", function () {
  let enterprise = "enterprise_240";
  let enterprise-team = "enterprise-team_240";
  let username = "username_240";
  // Read-only check for enterprise-team-memberships
  verifyenterprise-team-membershipsExists(enterprise);
});

// Story: crud:activity:read_only
bthread("crud:activity:read_only", function () {

  // Read-only check for activity
  verifyactivityExists(id);
});
