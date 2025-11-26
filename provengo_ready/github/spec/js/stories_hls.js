// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Repository:nondet:1:1
bthread("crud:Repository:nondet:1:1", function () {
  let name = "name_200";
  let owner = "owner_200";
  let repo = "repo_200";
  createRepo("name_200", "owner_200", "repo_200");
  tryToAddExistingRepository("name_200", "owner_200", "repo_200");
  verifyRepositoryExists("name_200", "owner_200", "repo_200");
  updateRepo("name_200", "owner_200", "repo_200");
  deleteRepo("name_200", "owner_200", "repo_200");
  tryToDeleteANonExistingRepository("name_200", "owner_200", "repo_200");
  verifyRepositoryDoesNotExist("name_200", "owner_200", "repo_200");
});

// Story: crud:Repository:nondet:1:2
bthread("crud:Repository:nondet:1:2", function () {
  let name = "name_201";
  let owner = "owner_201";
  let repo = "repo_201";
  createRepo("name_201", "owner_201", "repo_201");
  tryToAddExistingRepository("name_201", "owner_201", "repo_201");
  updateRepo("name_201", "owner_201", "repo_201");
  verifyRepositoryExists("name_201", "owner_201", "repo_201");
  deleteRepo("name_201", "owner_201", "repo_201");
  tryToDeleteANonExistingRepository("name_201", "owner_201", "repo_201");
  verifyRepositoryDoesNotExist("name_201", "owner_201", "repo_201");
});

// Story: crud:Repository:nondet:negative:dup-add
bthread("crud:Repository:nondet:negative:dup-add", function () {
  let name = "name_206";
  let owner = "owner_206";
  let repo = "repo_206";
  createRepo("name_206", "owner_206", "repo_206");
  verifyRepositoryExists("name_206", "owner_206", "repo_206");
  tryToAddExistingRepository("name_206", "owner_206", "repo_206");
  verifyRepositoryExists("name_206", "owner_206", "repo_206");
});

// Story: crud:Repository:nondet:existing:update
bthread("crud:Repository:nondet:existing:update", function () {
  let ev = waitForAnyRepositoryAdded();
  let args = Object.values(ev);
  block(matchDeletedRepository.apply(null, args), function () {
    verifyRepositoryExists.apply(null, args);
    updateRepo.apply(null, args);
    verifyRepositoryExists.apply(null, args);
  });
});

// Story: monitor:Repository:add
bthread("monitor:Repository:add", function () {
  while (true) {
    let ev = waitForAnyRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedRepository.apply(null, args), function () {
      verifyRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:RepositoryRuleset:nondet:1:1
bthread("crud:RepositoryRuleset:nondet:1:1", function () {
  let owner = "owner_220";
  let repo = "repo_220";
  let name = "name_220";
  let ruleset_id = 220;
  createRepoRuleset("owner_220", "repo_220", "name_220", 220);
  tryToAddExistingRepositoryRuleset("owner_220", "repo_220", "name_220", 220);
  verifyRepositoryRulesetExists("owner_220", "repo_220", "name_220", 220);
  updateRepoRuleset("owner_220", "repo_220", "name_220", 220);
  deleteRepoRuleset("owner_220", "repo_220", "name_220", 220);
  tryToDeleteANonExistingRepositoryRuleset("owner_220", "repo_220", "name_220", 220);
  verifyRepositoryRulesetDoesNotExist("owner_220", "repo_220", "name_220", 220);
});

// Story: crud:RepositoryRuleset:nondet:1:2
bthread("crud:RepositoryRuleset:nondet:1:2", function () {
  let owner = "owner_221";
  let repo = "repo_221";
  let name = "name_221";
  let ruleset_id = 221;
  createRepoRuleset("owner_221", "repo_221", "name_221", 221);
  tryToAddExistingRepositoryRuleset("owner_221", "repo_221", "name_221", 221);
  updateRepoRuleset("owner_221", "repo_221", "name_221", 221);
  verifyRepositoryRulesetExists("owner_221", "repo_221", "name_221", 221);
  deleteRepoRuleset("owner_221", "repo_221", "name_221", 221);
  tryToDeleteANonExistingRepositoryRuleset("owner_221", "repo_221", "name_221", 221);
  verifyRepositoryRulesetDoesNotExist("owner_221", "repo_221", "name_221", 221);
});

// Story: crud:RepositoryRuleset:nondet:negative:dup-add
bthread("crud:RepositoryRuleset:nondet:negative:dup-add", function () {
  let owner = "owner_226";
  let repo = "repo_226";
  let name = "name_226";
  let ruleset_id = 226;
  createRepoRuleset("owner_226", "repo_226", "name_226", 226);
  verifyRepositoryRulesetExists("owner_226", "repo_226", "name_226", 226);
  tryToAddExistingRepositoryRuleset("owner_226", "repo_226", "name_226", 226);
  verifyRepositoryRulesetExists("owner_226", "repo_226", "name_226", 226);
});

// Story: crud:RepositoryRuleset:nondet:existing:update
bthread("crud:RepositoryRuleset:nondet:existing:update", function () {
  let ev = waitForAnyRepositoryRulesetAdded();
  let args = Object.values(ev);
  block(matchDeletedRepositoryRuleset.apply(null, args), function () {
    verifyRepositoryRulesetExists.apply(null, args);
    updateRepoRuleset.apply(null, args);
    verifyRepositoryRulesetExists.apply(null, args);
  });
});

// Story: monitor:RepositoryRuleset:add
bthread("monitor:RepositoryRuleset:add", function () {
  while (true) {
    let ev = waitForAnyRepositoryRulesetAdded();
    let args = Object.values(ev);
    block(matchDeletedRepositoryRuleset.apply(null, args), function () {
      verifyRepositoryRulesetExists.apply(null, args);
    });
  }
});

// Story: crud:OrgRuleset:nondet:1:1
bthread("crud:OrgRuleset:nondet:1:1", function () {
  let org = "org_230";
  let name = "name_230";
  let ruleset_id = 230;
  createOrgRuleset("org_230", "name_230", 230);
  tryToAddExistingOrgRuleset("org_230", "name_230", 230);
  verifyOrgRulesetExists("org_230", "name_230", 230);
  updateOrgRuleset("org_230", "name_230", 230);
  deleteOrgRuleset("org_230", "name_230", 230);
  tryToDeleteANonExistingOrgRuleset("org_230", "name_230", 230);
  verifyOrgRulesetDoesNotExist("org_230", "name_230", 230);
});

// Story: crud:OrgRuleset:nondet:1:2
bthread("crud:OrgRuleset:nondet:1:2", function () {
  let org = "org_231";
  let name = "name_231";
  let ruleset_id = 231;
  createOrgRuleset("org_231", "name_231", 231);
  tryToAddExistingOrgRuleset("org_231", "name_231", 231);
  updateOrgRuleset("org_231", "name_231", 231);
  verifyOrgRulesetExists("org_231", "name_231", 231);
  deleteOrgRuleset("org_231", "name_231", 231);
  tryToDeleteANonExistingOrgRuleset("org_231", "name_231", 231);
  verifyOrgRulesetDoesNotExist("org_231", "name_231", 231);
});

// Story: crud:OrgRuleset:nondet:negative:dup-add
bthread("crud:OrgRuleset:nondet:negative:dup-add", function () {
  let org = "org_236";
  let name = "name_236";
  let ruleset_id = 236;
  createOrgRuleset("org_236", "name_236", 236);
  verifyOrgRulesetExists("org_236", "name_236", 236);
  tryToAddExistingOrgRuleset("org_236", "name_236", 236);
  verifyOrgRulesetExists("org_236", "name_236", 236);
});

// Story: crud:OrgRuleset:nondet:existing:update
bthread("crud:OrgRuleset:nondet:existing:update", function () {
  let ev = waitForAnyOrgRulesetAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgRuleset.apply(null, args), function () {
    verifyOrgRulesetExists.apply(null, args);
    updateOrgRuleset.apply(null, args);
    verifyOrgRulesetExists.apply(null, args);
  });
});

// Story: monitor:OrgRuleset:add
bthread("monitor:OrgRuleset:add", function () {
  while (true) {
    let ev = waitForAnyOrgRulesetAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgRuleset.apply(null, args), function () {
      verifyOrgRulesetExists.apply(null, args);
    });
  }
});

// Story: crud:BranchProtection:read_only
bthread("crud:BranchProtection:read_only", function () {
  let owner = "owner_240";
  let repo = "repo_240";
  let branch = "branch_240";
  verifyBranchProtectionExists("owner_240", "repo_240", "branch_240");
});

// Story: crud:BranchProtectionAdmin:nondet:1:1
bthread("crud:BranchProtectionAdmin:nondet:1:1", function () {
  let owner = "owner_250";
  let repo = "repo_250";
  let branch = "branch_250";
  setAdminBranchProtection("owner_250", "repo_250", "branch_250");
  tryToAddExistingBranchProtectionAdmin("owner_250", "repo_250", "branch_250");
  verifyBranchProtectionAdminExists("owner_250", "repo_250", "branch_250");
  deleteAdminBranchProtection("owner_250", "repo_250", "branch_250");
  tryToDeleteANonExistingBranchProtectionAdmin("owner_250", "repo_250", "branch_250");
  verifyBranchProtectionAdminDoesNotExist("owner_250", "repo_250", "branch_250");
});

// Story: crud:BranchProtectionAdmin:nondet:1:2
bthread("crud:BranchProtectionAdmin:nondet:1:2", function () {
  let owner = "owner_251";
  let repo = "repo_251";
  let branch = "branch_251";
  setAdminBranchProtection("owner_251", "repo_251", "branch_251");
  tryToAddExistingBranchProtectionAdmin("owner_251", "repo_251", "branch_251");
  verifyBranchProtectionAdminExists("owner_251", "repo_251", "branch_251");
  deleteAdminBranchProtection("owner_251", "repo_251", "branch_251");
  tryToDeleteANonExistingBranchProtectionAdmin("owner_251", "repo_251", "branch_251");
  verifyBranchProtectionAdminDoesNotExist("owner_251", "repo_251", "branch_251");
});

// Story: crud:BranchProtectionAdmin:nondet:negative:dup-add
bthread("crud:BranchProtectionAdmin:nondet:negative:dup-add", function () {
  let owner = "owner_256";
  let repo = "repo_256";
  let branch = "branch_256";
  setAdminBranchProtection("owner_256", "repo_256", "branch_256");
  verifyBranchProtectionAdminExists("owner_256", "repo_256", "branch_256");
  tryToAddExistingBranchProtectionAdmin("owner_256", "repo_256", "branch_256");
  verifyBranchProtectionAdminExists("owner_256", "repo_256", "branch_256");
});

// Story: monitor:BranchProtectionAdmin:add
bthread("monitor:BranchProtectionAdmin:add", function () {
  while (true) {
    let ev = waitForAnyBranchProtectionAdminAdded();
    let args = Object.values(ev);
    block(matchDeletedBranchProtectionAdmin.apply(null, args), function () {
      verifyBranchProtectionAdminExists.apply(null, args);
    });
  }
});

// Story: crud:PullRequestReviewProtection:read_only
bthread("crud:PullRequestReviewProtection:read_only", function () {
  let owner = "owner_260";
  let repo = "repo_260";
  let branch = "branch_260";
  verifyPullRequestReviewProtectionExists("owner_260", "repo_260", "branch_260");
});

// Story: crud:CommitSignatureProtection:nondet:1:1
bthread("crud:CommitSignatureProtection:nondet:1:1", function () {
  let owner = "owner_270";
  let repo = "repo_270";
  let branch = "branch_270";
  createCommitSignatureProtection("owner_270", "repo_270", "branch_270");
  tryToAddExistingCommitSignatureProtection("owner_270", "repo_270", "branch_270");
  verifyCommitSignatureProtectionExists("owner_270", "repo_270", "branch_270");
  deleteCommitSignatureProtection("owner_270", "repo_270", "branch_270");
  tryToDeleteANonExistingCommitSignatureProtection("owner_270", "repo_270", "branch_270");
  verifyCommitSignatureProtectionDoesNotExist("owner_270", "repo_270", "branch_270");
});

// Story: crud:CommitSignatureProtection:nondet:1:2
bthread("crud:CommitSignatureProtection:nondet:1:2", function () {
  let owner = "owner_271";
  let repo = "repo_271";
  let branch = "branch_271";
  createCommitSignatureProtection("owner_271", "repo_271", "branch_271");
  tryToAddExistingCommitSignatureProtection("owner_271", "repo_271", "branch_271");
  verifyCommitSignatureProtectionExists("owner_271", "repo_271", "branch_271");
  deleteCommitSignatureProtection("owner_271", "repo_271", "branch_271");
  tryToDeleteANonExistingCommitSignatureProtection("owner_271", "repo_271", "branch_271");
  verifyCommitSignatureProtectionDoesNotExist("owner_271", "repo_271", "branch_271");
});

// Story: crud:CommitSignatureProtection:nondet:negative:dup-add
bthread("crud:CommitSignatureProtection:nondet:negative:dup-add", function () {
  let owner = "owner_276";
  let repo = "repo_276";
  let branch = "branch_276";
  createCommitSignatureProtection("owner_276", "repo_276", "branch_276");
  verifyCommitSignatureProtectionExists("owner_276", "repo_276", "branch_276");
  tryToAddExistingCommitSignatureProtection("owner_276", "repo_276", "branch_276");
  verifyCommitSignatureProtectionExists("owner_276", "repo_276", "branch_276");
});

// Story: monitor:CommitSignatureProtection:add
bthread("monitor:CommitSignatureProtection:add", function () {
  while (true) {
    let ev = waitForAnyCommitSignatureProtectionAdded();
    let args = Object.values(ev);
    block(matchDeletedCommitSignatureProtection.apply(null, args), function () {
      verifyCommitSignatureProtectionExists.apply(null, args);
    });
  }
});

// Story: crud:StatusCheckProtection:read_only
bthread("crud:StatusCheckProtection:read_only", function () {
  let owner = "owner_280";
  let repo = "repo_280";
  let branch = "branch_280";
  verifyStatusCheckProtectionExists("owner_280", "repo_280", "branch_280");
});

// Story: crud:StatusCheckContexts:nondet:1:1
bthread("crud:StatusCheckContexts:nondet:1:1", function () {
  let owner = "owner_290";
  let repo = "repo_290";
  let branch = "branch_290";
  addStatusCheckContexts("owner_290", "repo_290", "branch_290");
  tryToAddExistingStatusCheckContexts("owner_290", "repo_290", "branch_290");
  verifyStatusCheckContextsExists("owner_290", "repo_290", "branch_290");
  setStatusCheckContexts("owner_290", "repo_290", "branch_290");
  removeStatusCheckContexts("owner_290", "repo_290", "branch_290");
  tryToDeleteANonExistingStatusCheckContexts("owner_290", "repo_290", "branch_290");
  verifyStatusCheckContextsDoesNotExist("owner_290", "repo_290", "branch_290");
});

// Story: crud:StatusCheckContexts:nondet:1:2
bthread("crud:StatusCheckContexts:nondet:1:2", function () {
  let owner = "owner_291";
  let repo = "repo_291";
  let branch = "branch_291";
  addStatusCheckContexts("owner_291", "repo_291", "branch_291");
  tryToAddExistingStatusCheckContexts("owner_291", "repo_291", "branch_291");
  setStatusCheckContexts("owner_291", "repo_291", "branch_291");
  verifyStatusCheckContextsExists("owner_291", "repo_291", "branch_291");
  removeStatusCheckContexts("owner_291", "repo_291", "branch_291");
  tryToDeleteANonExistingStatusCheckContexts("owner_291", "repo_291", "branch_291");
  verifyStatusCheckContextsDoesNotExist("owner_291", "repo_291", "branch_291");
});

// Story: crud:StatusCheckContexts:nondet:negative:dup-add
bthread("crud:StatusCheckContexts:nondet:negative:dup-add", function () {
  let owner = "owner_296";
  let repo = "repo_296";
  let branch = "branch_296";
  addStatusCheckContexts("owner_296", "repo_296", "branch_296");
  verifyStatusCheckContextsExists("owner_296", "repo_296", "branch_296");
  tryToAddExistingStatusCheckContexts("owner_296", "repo_296", "branch_296");
  verifyStatusCheckContextsExists("owner_296", "repo_296", "branch_296");
});

// Story: crud:StatusCheckContexts:nondet:existing:update
bthread("crud:StatusCheckContexts:nondet:existing:update", function () {
  let ev = waitForAnyStatusCheckContextsAdded();
  let args = Object.values(ev);
  block(matchDeletedStatusCheckContexts.apply(null, args), function () {
    verifyStatusCheckContextsExists.apply(null, args);
    setStatusCheckContexts.apply(null, args);
    verifyStatusCheckContextsExists.apply(null, args);
  });
});

// Story: monitor:StatusCheckContexts:add
bthread("monitor:StatusCheckContexts:add", function () {
  while (true) {
    let ev = waitForAnyStatusCheckContextsAdded();
    let args = Object.values(ev);
    block(matchDeletedStatusCheckContexts.apply(null, args), function () {
      verifyStatusCheckContextsExists.apply(null, args);
    });
  }
});

// Story: crud:BranchProtectionRestrictions:read_only
bthread("crud:BranchProtectionRestrictions:read_only", function () {
  let owner = "owner_300";
  let repo = "repo_300";
  let branch = "branch_300";
  verifyBranchProtectionRestrictionsExists("owner_300", "repo_300", "branch_300");
});

// Story: crud:BranchProtectionRestrictionsApps:nondet:1:1
bthread("crud:BranchProtectionRestrictionsApps:nondet:1:1", function () {
  let owner = "owner_310";
  let repo = "repo_310";
  let branch = "branch_310";
  addAppAccessRestrictions("owner_310", "repo_310", "branch_310");
  tryToAddExistingBranchProtectionRestrictionsApps("owner_310", "repo_310", "branch_310");
  verifyBranchProtectionRestrictionsAppsExists("owner_310", "repo_310", "branch_310");
  setAppAccessRestrictions("owner_310", "repo_310", "branch_310");
  removeAppAccessRestrictions("owner_310", "repo_310", "branch_310");
  tryToDeleteANonExistingBranchProtectionRestrictionsApps("owner_310", "repo_310", "branch_310");
  verifyBranchProtectionRestrictionsAppsDoesNotExist("owner_310", "repo_310", "branch_310");
});

// Story: crud:BranchProtectionRestrictionsApps:nondet:1:2
bthread("crud:BranchProtectionRestrictionsApps:nondet:1:2", function () {
  let owner = "owner_311";
  let repo = "repo_311";
  let branch = "branch_311";
  addAppAccessRestrictions("owner_311", "repo_311", "branch_311");
  tryToAddExistingBranchProtectionRestrictionsApps("owner_311", "repo_311", "branch_311");
  setAppAccessRestrictions("owner_311", "repo_311", "branch_311");
  verifyBranchProtectionRestrictionsAppsExists("owner_311", "repo_311", "branch_311");
  removeAppAccessRestrictions("owner_311", "repo_311", "branch_311");
  tryToDeleteANonExistingBranchProtectionRestrictionsApps("owner_311", "repo_311", "branch_311");
  verifyBranchProtectionRestrictionsAppsDoesNotExist("owner_311", "repo_311", "branch_311");
});

// Story: crud:BranchProtectionRestrictionsApps:nondet:negative:dup-add
bthread("crud:BranchProtectionRestrictionsApps:nondet:negative:dup-add", function () {
  let owner = "owner_316";
  let repo = "repo_316";
  let branch = "branch_316";
  addAppAccessRestrictions("owner_316", "repo_316", "branch_316");
  verifyBranchProtectionRestrictionsAppsExists("owner_316", "repo_316", "branch_316");
  tryToAddExistingBranchProtectionRestrictionsApps("owner_316", "repo_316", "branch_316");
  verifyBranchProtectionRestrictionsAppsExists("owner_316", "repo_316", "branch_316");
});

// Story: crud:BranchProtectionRestrictionsApps:nondet:existing:update
bthread("crud:BranchProtectionRestrictionsApps:nondet:existing:update", function () {
  let ev = waitForAnyBranchProtectionRestrictionsAppsAdded();
  let args = Object.values(ev);
  block(matchDeletedBranchProtectionRestrictionsApps.apply(null, args), function () {
    verifyBranchProtectionRestrictionsAppsExists.apply(null, args);
    setAppAccessRestrictions.apply(null, args);
    verifyBranchProtectionRestrictionsAppsExists.apply(null, args);
  });
});

// Story: monitor:BranchProtectionRestrictionsApps:add
bthread("monitor:BranchProtectionRestrictionsApps:add", function () {
  while (true) {
    let ev = waitForAnyBranchProtectionRestrictionsAppsAdded();
    let args = Object.values(ev);
    block(matchDeletedBranchProtectionRestrictionsApps.apply(null, args), function () {
      verifyBranchProtectionRestrictionsAppsExists.apply(null, args);
    });
  }
});

// Story: crud:BranchProtectionRestrictionsTeams:nondet:1:1
bthread("crud:BranchProtectionRestrictionsTeams:nondet:1:1", function () {
  let owner = "owner_320";
  let repo = "repo_320";
  let branch = "branch_320";
  addTeamAccessRestrictions("owner_320", "repo_320", "branch_320");
  tryToAddExistingBranchProtectionRestrictionsTeams("owner_320", "repo_320", "branch_320");
  verifyBranchProtectionRestrictionsTeamsExists("owner_320", "repo_320", "branch_320");
  setTeamAccessRestrictions("owner_320", "repo_320", "branch_320");
  removeTeamAccessRestrictions("owner_320", "repo_320", "branch_320");
  tryToDeleteANonExistingBranchProtectionRestrictionsTeams("owner_320", "repo_320", "branch_320");
  verifyBranchProtectionRestrictionsTeamsDoesNotExist("owner_320", "repo_320", "branch_320");
});

// Story: crud:BranchProtectionRestrictionsTeams:nondet:1:2
bthread("crud:BranchProtectionRestrictionsTeams:nondet:1:2", function () {
  let owner = "owner_321";
  let repo = "repo_321";
  let branch = "branch_321";
  addTeamAccessRestrictions("owner_321", "repo_321", "branch_321");
  tryToAddExistingBranchProtectionRestrictionsTeams("owner_321", "repo_321", "branch_321");
  setTeamAccessRestrictions("owner_321", "repo_321", "branch_321");
  verifyBranchProtectionRestrictionsTeamsExists("owner_321", "repo_321", "branch_321");
  removeTeamAccessRestrictions("owner_321", "repo_321", "branch_321");
  tryToDeleteANonExistingBranchProtectionRestrictionsTeams("owner_321", "repo_321", "branch_321");
  verifyBranchProtectionRestrictionsTeamsDoesNotExist("owner_321", "repo_321", "branch_321");
});

// Story: crud:BranchProtectionRestrictionsTeams:nondet:negative:dup-add
bthread("crud:BranchProtectionRestrictionsTeams:nondet:negative:dup-add", function () {
  let owner = "owner_326";
  let repo = "repo_326";
  let branch = "branch_326";
  addTeamAccessRestrictions("owner_326", "repo_326", "branch_326");
  verifyBranchProtectionRestrictionsTeamsExists("owner_326", "repo_326", "branch_326");
  tryToAddExistingBranchProtectionRestrictionsTeams("owner_326", "repo_326", "branch_326");
  verifyBranchProtectionRestrictionsTeamsExists("owner_326", "repo_326", "branch_326");
});

// Story: crud:BranchProtectionRestrictionsTeams:nondet:existing:update
bthread("crud:BranchProtectionRestrictionsTeams:nondet:existing:update", function () {
  let ev = waitForAnyBranchProtectionRestrictionsTeamsAdded();
  let args = Object.values(ev);
  block(matchDeletedBranchProtectionRestrictionsTeams.apply(null, args), function () {
    verifyBranchProtectionRestrictionsTeamsExists.apply(null, args);
    setTeamAccessRestrictions.apply(null, args);
    verifyBranchProtectionRestrictionsTeamsExists.apply(null, args);
  });
});

// Story: monitor:BranchProtectionRestrictionsTeams:add
bthread("monitor:BranchProtectionRestrictionsTeams:add", function () {
  while (true) {
    let ev = waitForAnyBranchProtectionRestrictionsTeamsAdded();
    let args = Object.values(ev);
    block(matchDeletedBranchProtectionRestrictionsTeams.apply(null, args), function () {
      verifyBranchProtectionRestrictionsTeamsExists.apply(null, args);
    });
  }
});

// Story: crud:BranchProtectionRestrictionsUsers:nondet:1:1
bthread("crud:BranchProtectionRestrictionsUsers:nondet:1:1", function () {
  let owner = "owner_330";
  let repo = "repo_330";
  let branch = "branch_330";
  addUserAccessRestrictions("owner_330", "repo_330", "branch_330");
  tryToAddExistingBranchProtectionRestrictionsUsers("owner_330", "repo_330", "branch_330");
  verifyBranchProtectionRestrictionsUsersExists("owner_330", "repo_330", "branch_330");
  setUserAccessRestrictions("owner_330", "repo_330", "branch_330");
  removeUserAccessRestrictions("owner_330", "repo_330", "branch_330");
  tryToDeleteANonExistingBranchProtectionRestrictionsUsers("owner_330", "repo_330", "branch_330");
  verifyBranchProtectionRestrictionsUsersDoesNotExist("owner_330", "repo_330", "branch_330");
});

// Story: crud:BranchProtectionRestrictionsUsers:nondet:1:2
bthread("crud:BranchProtectionRestrictionsUsers:nondet:1:2", function () {
  let owner = "owner_331";
  let repo = "repo_331";
  let branch = "branch_331";
  addUserAccessRestrictions("owner_331", "repo_331", "branch_331");
  tryToAddExistingBranchProtectionRestrictionsUsers("owner_331", "repo_331", "branch_331");
  setUserAccessRestrictions("owner_331", "repo_331", "branch_331");
  verifyBranchProtectionRestrictionsUsersExists("owner_331", "repo_331", "branch_331");
  removeUserAccessRestrictions("owner_331", "repo_331", "branch_331");
  tryToDeleteANonExistingBranchProtectionRestrictionsUsers("owner_331", "repo_331", "branch_331");
  verifyBranchProtectionRestrictionsUsersDoesNotExist("owner_331", "repo_331", "branch_331");
});

// Story: crud:BranchProtectionRestrictionsUsers:nondet:negative:dup-add
bthread("crud:BranchProtectionRestrictionsUsers:nondet:negative:dup-add", function () {
  let owner = "owner_336";
  let repo = "repo_336";
  let branch = "branch_336";
  addUserAccessRestrictions("owner_336", "repo_336", "branch_336");
  verifyBranchProtectionRestrictionsUsersExists("owner_336", "repo_336", "branch_336");
  tryToAddExistingBranchProtectionRestrictionsUsers("owner_336", "repo_336", "branch_336");
  verifyBranchProtectionRestrictionsUsersExists("owner_336", "repo_336", "branch_336");
});

// Story: crud:BranchProtectionRestrictionsUsers:nondet:existing:update
bthread("crud:BranchProtectionRestrictionsUsers:nondet:existing:update", function () {
  let ev = waitForAnyBranchProtectionRestrictionsUsersAdded();
  let args = Object.values(ev);
  block(matchDeletedBranchProtectionRestrictionsUsers.apply(null, args), function () {
    verifyBranchProtectionRestrictionsUsersExists.apply(null, args);
    setUserAccessRestrictions.apply(null, args);
    verifyBranchProtectionRestrictionsUsersExists.apply(null, args);
  });
});

// Story: monitor:BranchProtectionRestrictionsUsers:add
bthread("monitor:BranchProtectionRestrictionsUsers:add", function () {
  while (true) {
    let ev = waitForAnyBranchProtectionRestrictionsUsersAdded();
    let args = Object.values(ev);
    block(matchDeletedBranchProtectionRestrictionsUsers.apply(null, args), function () {
      verifyBranchProtectionRestrictionsUsersExists.apply(null, args);
    });
  }
});

// Story: crud:Branch:read_only
bthread("crud:Branch:read_only", function () {
  let owner = "owner_340";
  let repo = "repo_340";
  let branch = "branch_340";
  let new_name = "new_name_340";
  verifyBranchExists("owner_340", "repo_340", "branch_340", "new_name_340");
});

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let owner = "owner_350";
  let repo = "repo_350";
  let username = "username_350";
  addCollaborator("owner_350", "repo_350", "username_350");
  tryToAddExistingCollaborator("owner_350", "repo_350", "username_350");
  verifyCollaboratorExists("owner_350", "repo_350", "username_350");
  removeCollaborator("owner_350", "repo_350", "username_350");
  tryToDeleteANonExistingCollaborator("owner_350", "repo_350", "username_350");
  verifyCollaboratorDoesNotExist("owner_350", "repo_350", "username_350");
});

// Story: crud:Collaborator:nondet:1:2
bthread("crud:Collaborator:nondet:1:2", function () {
  let owner = "owner_351";
  let repo = "repo_351";
  let username = "username_351";
  addCollaborator("owner_351", "repo_351", "username_351");
  tryToAddExistingCollaborator("owner_351", "repo_351", "username_351");
  verifyCollaboratorExists("owner_351", "repo_351", "username_351");
  removeCollaborator("owner_351", "repo_351", "username_351");
  tryToDeleteANonExistingCollaborator("owner_351", "repo_351", "username_351");
  verifyCollaboratorDoesNotExist("owner_351", "repo_351", "username_351");
});

// Story: crud:Collaborator:nondet:negative:dup-add
bthread("crud:Collaborator:nondet:negative:dup-add", function () {
  let owner = "owner_356";
  let repo = "repo_356";
  let username = "username_356";
  addCollaborator("owner_356", "repo_356", "username_356");
  verifyCollaboratorExists("owner_356", "repo_356", "username_356");
  tryToAddExistingCollaborator("owner_356", "repo_356", "username_356");
  verifyCollaboratorExists("owner_356", "repo_356", "username_356");
});

// Story: monitor:Collaborator:add
bthread("monitor:Collaborator:add", function () {
  while (true) {
    let ev = waitForAnyCollaboratorAdded();
    let args = Object.values(ev);
    block(matchDeletedCollaborator.apply(null, args), function () {
      verifyCollaboratorExists.apply(null, args);
    });
  }
});

// Story: crud:CommitComment:read_only
bthread("crud:CommitComment:read_only", function () {
  let owner = "owner_360";
  let repo = "repo_360";
  let comment_id = 360;
  verifyCommitCommentExists("owner_360", "repo_360", 360);
});

// Story: crud:Deployment:nondet:1:1
bthread("crud:Deployment:nondet:1:1", function () {
  let owner = "owner_370";
  let repo = "repo_370";
  let deployment_id = 370;
  createDeployment("owner_370", "repo_370", 370);
  tryToAddExistingDeployment("owner_370", "repo_370", 370);
  verifyDeploymentExists("owner_370", "repo_370", 370);
  deleteDeployment("owner_370", "repo_370", 370);
  tryToDeleteANonExistingDeployment("owner_370", "repo_370", 370);
  verifyDeploymentDoesNotExist("owner_370", "repo_370", 370);
});

// Story: crud:Deployment:nondet:1:2
bthread("crud:Deployment:nondet:1:2", function () {
  let owner = "owner_371";
  let repo = "repo_371";
  let deployment_id = 371;
  createDeployment("owner_371", "repo_371", 371);
  tryToAddExistingDeployment("owner_371", "repo_371", 371);
  verifyDeploymentExists("owner_371", "repo_371", 371);
  deleteDeployment("owner_371", "repo_371", 371);
  tryToDeleteANonExistingDeployment("owner_371", "repo_371", 371);
  verifyDeploymentDoesNotExist("owner_371", "repo_371", 371);
});

// Story: crud:Deployment:nondet:negative:dup-add
bthread("crud:Deployment:nondet:negative:dup-add", function () {
  let owner = "owner_376";
  let repo = "repo_376";
  let deployment_id = 376;
  createDeployment("owner_376", "repo_376", 376);
  verifyDeploymentExists("owner_376", "repo_376", 376);
  tryToAddExistingDeployment("owner_376", "repo_376", 376);
  verifyDeploymentExists("owner_376", "repo_376", 376);
});

// Story: monitor:Deployment:add
bthread("monitor:Deployment:add", function () {
  while (true) {
    let ev = waitForAnyDeploymentAdded();
    let args = Object.values(ev);
    block(matchDeletedDeployment.apply(null, args), function () {
      verifyDeploymentExists.apply(null, args);
    });
  }
});

// Story: crud:DeploymentStatus:read_only
bthread("crud:DeploymentStatus:read_only", function () {
  let owner = "owner_380";
  let repo = "repo_380";
  let deployment_id = 380;
  let status_id = 380;
  verifyDeploymentStatusExists("owner_380", "repo_380", 380, 380);
});

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let owner = "owner_390";
  let repo = "repo_390";
  let release_id = 390;
  createRelease("owner_390", "repo_390", 390);
  tryToAddExistingRelease("owner_390", "repo_390", 390);
  verifyReleaseExists("owner_390", "repo_390", 390);
  updateRelease("owner_390", "repo_390", 390);
  deleteRelease("owner_390", "repo_390", 390);
  tryToDeleteANonExistingRelease("owner_390", "repo_390", 390);
  verifyReleaseDoesNotExist("owner_390", "repo_390", 390);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let owner = "owner_391";
  let repo = "repo_391";
  let release_id = 391;
  createRelease("owner_391", "repo_391", 391);
  tryToAddExistingRelease("owner_391", "repo_391", 391);
  updateRelease("owner_391", "repo_391", 391);
  verifyReleaseExists("owner_391", "repo_391", 391);
  deleteRelease("owner_391", "repo_391", 391);
  tryToDeleteANonExistingRelease("owner_391", "repo_391", 391);
  verifyReleaseDoesNotExist("owner_391", "repo_391", 391);
});

// Story: crud:Release:nondet:negative:dup-add
bthread("crud:Release:nondet:negative:dup-add", function () {
  let owner = "owner_396";
  let repo = "repo_396";
  let release_id = 396;
  createRelease("owner_396", "repo_396", 396);
  verifyReleaseExists("owner_396", "repo_396", 396);
  tryToAddExistingRelease("owner_396", "repo_396", 396);
  verifyReleaseExists("owner_396", "repo_396", 396);
});

// Story: crud:Release:nondet:existing:update
bthread("crud:Release:nondet:existing:update", function () {
  let ev = waitForAnyReleaseAdded();
  let args = Object.values(ev);
  block(matchDeletedRelease.apply(null, args), function () {
    verifyReleaseExists.apply(null, args);
    updateRelease.apply(null, args);
    verifyReleaseExists.apply(null, args);
  });
});

// Story: monitor:Release:add
bthread("monitor:Release:add", function () {
  while (true) {
    let ev = waitForAnyReleaseAdded();
    let args = Object.values(ev);
    block(matchDeletedRelease.apply(null, args), function () {
      verifyReleaseExists.apply(null, args);
    });
  }
});

// Story: crud:ReleaseAsset:read_only
bthread("crud:ReleaseAsset:read_only", function () {
  let owner = "owner_400";
  let repo = "repo_400";
  let asset_id = 400;
  verifyReleaseAssetExists("owner_400", "repo_400", 400);
});

// Story: crud:Autolink:nondet:1:1
bthread("crud:Autolink:nondet:1:1", function () {
  let owner = "owner_410";
  let repo = "repo_410";
  let autolink_id = 410;
  createAutolink("owner_410", "repo_410", 410);
  tryToAddExistingAutolink("owner_410", "repo_410", 410);
  verifyAutolinkExists("owner_410", "repo_410", 410);
  deleteAutolink("owner_410", "repo_410", 410);
  tryToDeleteANonExistingAutolink("owner_410", "repo_410", 410);
  verifyAutolinkDoesNotExist("owner_410", "repo_410", 410);
});

// Story: crud:Autolink:nondet:1:2
bthread("crud:Autolink:nondet:1:2", function () {
  let owner = "owner_411";
  let repo = "repo_411";
  let autolink_id = 411;
  createAutolink("owner_411", "repo_411", 411);
  tryToAddExistingAutolink("owner_411", "repo_411", 411);
  verifyAutolinkExists("owner_411", "repo_411", 411);
  deleteAutolink("owner_411", "repo_411", 411);
  tryToDeleteANonExistingAutolink("owner_411", "repo_411", 411);
  verifyAutolinkDoesNotExist("owner_411", "repo_411", 411);
});

// Story: crud:Autolink:nondet:negative:dup-add
bthread("crud:Autolink:nondet:negative:dup-add", function () {
  let owner = "owner_416";
  let repo = "repo_416";
  let autolink_id = 416;
  createAutolink("owner_416", "repo_416", 416);
  verifyAutolinkExists("owner_416", "repo_416", 416);
  tryToAddExistingAutolink("owner_416", "repo_416", 416);
  verifyAutolinkExists("owner_416", "repo_416", 416);
});

// Story: monitor:Autolink:add
bthread("monitor:Autolink:add", function () {
  while (true) {
    let ev = waitForAnyAutolinkAdded();
    let args = Object.values(ev);
    block(matchDeletedAutolink.apply(null, args), function () {
      verifyAutolinkExists.apply(null, args);
    });
  }
});

// Story: crud:DeployKey:nondet:1:1
bthread("crud:DeployKey:nondet:1:1", function () {
  let owner = "owner_420";
  let repo = "repo_420";
  let key_id = 420;
  createDeployKey("owner_420", "repo_420", 420);
  tryToAddExistingDeployKey("owner_420", "repo_420", 420);
  verifyDeployKeyExists("owner_420", "repo_420", 420);
  deleteDeployKey("owner_420", "repo_420", 420);
  tryToDeleteANonExistingDeployKey("owner_420", "repo_420", 420);
  verifyDeployKeyDoesNotExist("owner_420", "repo_420", 420);
});

// Story: crud:DeployKey:nondet:1:2
bthread("crud:DeployKey:nondet:1:2", function () {
  let owner = "owner_421";
  let repo = "repo_421";
  let key_id = 421;
  createDeployKey("owner_421", "repo_421", 421);
  tryToAddExistingDeployKey("owner_421", "repo_421", 421);
  verifyDeployKeyExists("owner_421", "repo_421", 421);
  deleteDeployKey("owner_421", "repo_421", 421);
  tryToDeleteANonExistingDeployKey("owner_421", "repo_421", 421);
  verifyDeployKeyDoesNotExist("owner_421", "repo_421", 421);
});

// Story: crud:DeployKey:nondet:negative:dup-add
bthread("crud:DeployKey:nondet:negative:dup-add", function () {
  let owner = "owner_426";
  let repo = "repo_426";
  let key_id = 426;
  createDeployKey("owner_426", "repo_426", 426);
  verifyDeployKeyExists("owner_426", "repo_426", 426);
  tryToAddExistingDeployKey("owner_426", "repo_426", 426);
  verifyDeployKeyExists("owner_426", "repo_426", 426);
});

// Story: monitor:DeployKey:add
bthread("monitor:DeployKey:add", function () {
  while (true) {
    let ev = waitForAnyDeployKeyAdded();
    let args = Object.values(ev);
    block(matchDeletedDeployKey.apply(null, args), function () {
      verifyDeployKeyExists.apply(null, args);
    });
  }
});

// Story: crud:Environment:nondet:1:1
bthread("crud:Environment:nondet:1:1", function () {
  let owner = "owner_430";
  let repo = "repo_430";
  let environment_name = "environment_name_430";
  createOrUpdateEnvironment("owner_430", "repo_430", "environment_name_430");
  tryToAddExistingEnvironment("owner_430", "repo_430", "environment_name_430");
  verifyEnvironmentExists("owner_430", "repo_430", "environment_name_430");
  deleteEnvironment("owner_430", "repo_430", "environment_name_430");
  tryToDeleteANonExistingEnvironment("owner_430", "repo_430", "environment_name_430");
  verifyEnvironmentDoesNotExist("owner_430", "repo_430", "environment_name_430");
});

// Story: crud:Environment:nondet:1:2
bthread("crud:Environment:nondet:1:2", function () {
  let owner = "owner_431";
  let repo = "repo_431";
  let environment_name = "environment_name_431";
  createOrUpdateEnvironment("owner_431", "repo_431", "environment_name_431");
  tryToAddExistingEnvironment("owner_431", "repo_431", "environment_name_431");
  verifyEnvironmentExists("owner_431", "repo_431", "environment_name_431");
  deleteEnvironment("owner_431", "repo_431", "environment_name_431");
  tryToDeleteANonExistingEnvironment("owner_431", "repo_431", "environment_name_431");
  verifyEnvironmentDoesNotExist("owner_431", "repo_431", "environment_name_431");
});

// Story: crud:Environment:nondet:negative:dup-add
bthread("crud:Environment:nondet:negative:dup-add", function () {
  let owner = "owner_436";
  let repo = "repo_436";
  let environment_name = "environment_name_436";
  createOrUpdateEnvironment("owner_436", "repo_436", "environment_name_436");
  verifyEnvironmentExists("owner_436", "repo_436", "environment_name_436");
  tryToAddExistingEnvironment("owner_436", "repo_436", "environment_name_436");
  verifyEnvironmentExists("owner_436", "repo_436", "environment_name_436");
});

// Story: monitor:Environment:add
bthread("monitor:Environment:add", function () {
  while (true) {
    let ev = waitForAnyEnvironmentAdded();
    let args = Object.values(ev);
    block(matchDeletedEnvironment.apply(null, args), function () {
      verifyEnvironmentExists.apply(null, args);
    });
  }
});

// Story: crud:DeploymentBranchPolicy:nondet:1:1
bthread("crud:DeploymentBranchPolicy:nondet:1:1", function () {
  let owner = "owner_440";
  let repo = "repo_440";
  let environment_name = "environment_name_440";
  let branch_policy_id = 440;
  createDeploymentBranchPolicy("owner_440", "repo_440", "environment_name_440", 440);
  tryToAddExistingDeploymentBranchPolicy("owner_440", "repo_440", "environment_name_440", 440);
  verifyDeploymentBranchPolicyExists("owner_440", "repo_440", "environment_name_440", 440);
  updateDeploymentBranchPolicy("owner_440", "repo_440", "environment_name_440", 440);
  deleteDeploymentBranchPolicy("owner_440", "repo_440", "environment_name_440", 440);
  tryToDeleteANonExistingDeploymentBranchPolicy("owner_440", "repo_440", "environment_name_440", 440);
  verifyDeploymentBranchPolicyDoesNotExist("owner_440", "repo_440", "environment_name_440", 440);
});

// Story: crud:DeploymentBranchPolicy:nondet:1:2
bthread("crud:DeploymentBranchPolicy:nondet:1:2", function () {
  let owner = "owner_441";
  let repo = "repo_441";
  let environment_name = "environment_name_441";
  let branch_policy_id = 441;
  createDeploymentBranchPolicy("owner_441", "repo_441", "environment_name_441", 441);
  tryToAddExistingDeploymentBranchPolicy("owner_441", "repo_441", "environment_name_441", 441);
  updateDeploymentBranchPolicy("owner_441", "repo_441", "environment_name_441", 441);
  verifyDeploymentBranchPolicyExists("owner_441", "repo_441", "environment_name_441", 441);
  deleteDeploymentBranchPolicy("owner_441", "repo_441", "environment_name_441", 441);
  tryToDeleteANonExistingDeploymentBranchPolicy("owner_441", "repo_441", "environment_name_441", 441);
  verifyDeploymentBranchPolicyDoesNotExist("owner_441", "repo_441", "environment_name_441", 441);
});

// Story: crud:DeploymentBranchPolicy:nondet:negative:dup-add
bthread("crud:DeploymentBranchPolicy:nondet:negative:dup-add", function () {
  let owner = "owner_446";
  let repo = "repo_446";
  let environment_name = "environment_name_446";
  let branch_policy_id = 446;
  createDeploymentBranchPolicy("owner_446", "repo_446", "environment_name_446", 446);
  verifyDeploymentBranchPolicyExists("owner_446", "repo_446", "environment_name_446", 446);
  tryToAddExistingDeploymentBranchPolicy("owner_446", "repo_446", "environment_name_446", 446);
  verifyDeploymentBranchPolicyExists("owner_446", "repo_446", "environment_name_446", 446);
});

// Story: crud:DeploymentBranchPolicy:nondet:existing:update
bthread("crud:DeploymentBranchPolicy:nondet:existing:update", function () {
  let ev = waitForAnyDeploymentBranchPolicyAdded();
  let args = Object.values(ev);
  block(matchDeletedDeploymentBranchPolicy.apply(null, args), function () {
    verifyDeploymentBranchPolicyExists.apply(null, args);
    updateDeploymentBranchPolicy.apply(null, args);
    verifyDeploymentBranchPolicyExists.apply(null, args);
  });
});

// Story: monitor:DeploymentBranchPolicy:add
bthread("monitor:DeploymentBranchPolicy:add", function () {
  while (true) {
    let ev = waitForAnyDeploymentBranchPolicyAdded();
    let args = Object.values(ev);
    block(matchDeletedDeploymentBranchPolicy.apply(null, args), function () {
      verifyDeploymentBranchPolicyExists.apply(null, args);
    });
  }
});

// Story: crud:DeploymentProtectionRule:nondet:1:1
bthread("crud:DeploymentProtectionRule:nondet:1:1", function () {
  let owner = "owner_450";
  let repo = "repo_450";
  let environment_name = "environment_name_450";
  let protection_rule_id = 450;
  createDeploymentProtectionRule("owner_450", "repo_450", "environment_name_450", 450);
  tryToAddExistingDeploymentProtectionRule("owner_450", "repo_450", "environment_name_450", 450);
  verifyDeploymentProtectionRuleExists("owner_450", "repo_450", "environment_name_450", 450);
  disableDeploymentProtectionRule("owner_450", "repo_450", "environment_name_450", 450);
  tryToDeleteANonExistingDeploymentProtectionRule("owner_450", "repo_450", "environment_name_450", 450);
  verifyDeploymentProtectionRuleDoesNotExist("owner_450", "repo_450", "environment_name_450", 450);
});

// Story: crud:DeploymentProtectionRule:nondet:1:2
bthread("crud:DeploymentProtectionRule:nondet:1:2", function () {
  let owner = "owner_451";
  let repo = "repo_451";
  let environment_name = "environment_name_451";
  let protection_rule_id = 451;
  createDeploymentProtectionRule("owner_451", "repo_451", "environment_name_451", 451);
  tryToAddExistingDeploymentProtectionRule("owner_451", "repo_451", "environment_name_451", 451);
  verifyDeploymentProtectionRuleExists("owner_451", "repo_451", "environment_name_451", 451);
  disableDeploymentProtectionRule("owner_451", "repo_451", "environment_name_451", 451);
  tryToDeleteANonExistingDeploymentProtectionRule("owner_451", "repo_451", "environment_name_451", 451);
  verifyDeploymentProtectionRuleDoesNotExist("owner_451", "repo_451", "environment_name_451", 451);
});

// Story: crud:DeploymentProtectionRule:nondet:negative:dup-add
bthread("crud:DeploymentProtectionRule:nondet:negative:dup-add", function () {
  let owner = "owner_456";
  let repo = "repo_456";
  let environment_name = "environment_name_456";
  let protection_rule_id = 456;
  createDeploymentProtectionRule("owner_456", "repo_456", "environment_name_456", 456);
  verifyDeploymentProtectionRuleExists("owner_456", "repo_456", "environment_name_456", 456);
  tryToAddExistingDeploymentProtectionRule("owner_456", "repo_456", "environment_name_456", 456);
  verifyDeploymentProtectionRuleExists("owner_456", "repo_456", "environment_name_456", 456);
});

// Story: monitor:DeploymentProtectionRule:add
bthread("monitor:DeploymentProtectionRule:add", function () {
  while (true) {
    let ev = waitForAnyDeploymentProtectionRuleAdded();
    let args = Object.values(ev);
    block(matchDeletedDeploymentProtectionRule.apply(null, args), function () {
      verifyDeploymentProtectionRuleExists.apply(null, args);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let org = "org_470";
  let owner = "owner_470";
  let repo = "repo_470";
  let hook_id = 470;
  createWebhook("org_470", "owner_470", "repo_470", 470);
  tryToAddExistingWebhook("org_470", "owner_470", "repo_470", 470);
  verifyWebhookExists("org_470", "owner_470", "repo_470", 470);
  updateWebhook("org_470", "owner_470", "repo_470", 470);
  deleteWebhook("org_470", "owner_470", "repo_470", 470);
  tryToDeleteANonExistingWebhook("org_470", "owner_470", "repo_470", 470);
  verifyWebhookDoesNotExist("org_470", "owner_470", "repo_470", 470);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let org = "org_471";
  let owner = "owner_471";
  let repo = "repo_471";
  let hook_id = 471;
  createWebhook("org_471", "owner_471", "repo_471", 471);
  tryToAddExistingWebhook("org_471", "owner_471", "repo_471", 471);
  updateWebhook("org_471", "owner_471", "repo_471", 471);
  verifyWebhookExists("org_471", "owner_471", "repo_471", 471);
  deleteWebhook("org_471", "owner_471", "repo_471", 471);
  tryToDeleteANonExistingWebhook("org_471", "owner_471", "repo_471", 471);
  verifyWebhookDoesNotExist("org_471", "owner_471", "repo_471", 471);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let org = "org_476";
  let owner = "owner_476";
  let repo = "repo_476";
  let hook_id = 476;
  createWebhook("org_476", "owner_476", "repo_476", 476);
  verifyWebhookExists("org_476", "owner_476", "repo_476", 476);
  tryToAddExistingWebhook("org_476", "owner_476", "repo_476", 476);
  verifyWebhookExists("org_476", "owner_476", "repo_476", 476);
});

// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    verifyWebhookExists.apply(null, args);
    updateWebhook.apply(null, args);
    verifyWebhookExists.apply(null, args);
  });
});

// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhook.apply(null, args), function () {
      verifyWebhookExists.apply(null, args);
    });
  }
});

// Story: crud:WebhookConfig:read_only
bthread("crud:WebhookConfig:read_only", function () {
  let org = "org_480";
  let hook_id = 480;
  verifyWebhookConfigExists("org_480", 480);
});

// Story: crud:WebhookDelivery:read_only
bthread("crud:WebhookDelivery:read_only", function () {
  let org = "org_490";
  let hook_id = 490;
  let delivery_id = 490;
  let owner = "owner_490";
  let repo = "repo_490";
  verifyWebhookDeliveryExists("org_490", 490, 490, "owner_490", "repo_490");
});

// Story: crud:FileContent:read_only
bthread("crud:FileContent:read_only", function () {
  let owner = "owner_510";
  let repo = "repo_510";
  let path = "path_510";
  verifyFileContentExists("owner_510", "repo_510", "path_510");
});

// Story: crud:Invitation:nondet:1:1
bthread("crud:Invitation:nondet:1:1", function () {
  let owner = "owner_520";
  let repo = "repo_520";
  let invitation_id = 520;
  let org = "org_520";
  createInvitation("owner_520", "repo_520", 520, "org_520");
  tryToAddExistingInvitation("owner_520", "repo_520", 520, "org_520");
  verifyInvitationExists("owner_520", "repo_520", 520, "org_520");
  updateInvitation("owner_520", "repo_520", 520, "org_520");
  cancelInvitation("owner_520", "repo_520", 520, "org_520");
  tryToDeleteANonExistingInvitation("owner_520", "repo_520", 520, "org_520");
  verifyInvitationDoesNotExist("owner_520", "repo_520", 520, "org_520");
});

// Story: crud:Invitation:nondet:1:2
bthread("crud:Invitation:nondet:1:2", function () {
  let owner = "owner_521";
  let repo = "repo_521";
  let invitation_id = 521;
  let org = "org_521";
  createInvitation("owner_521", "repo_521", 521, "org_521");
  tryToAddExistingInvitation("owner_521", "repo_521", 521, "org_521");
  updateInvitation("owner_521", "repo_521", 521, "org_521");
  verifyInvitationExists("owner_521", "repo_521", 521, "org_521");
  cancelInvitation("owner_521", "repo_521", 521, "org_521");
  tryToDeleteANonExistingInvitation("owner_521", "repo_521", 521, "org_521");
  verifyInvitationDoesNotExist("owner_521", "repo_521", 521, "org_521");
});

// Story: crud:Invitation:nondet:negative:dup-add
bthread("crud:Invitation:nondet:negative:dup-add", function () {
  let owner = "owner_526";
  let repo = "repo_526";
  let invitation_id = 526;
  let org = "org_526";
  createInvitation("owner_526", "repo_526", 526, "org_526");
  verifyInvitationExists("owner_526", "repo_526", 526, "org_526");
  tryToAddExistingInvitation("owner_526", "repo_526", 526, "org_526");
  verifyInvitationExists("owner_526", "repo_526", 526, "org_526");
});

// Story: crud:Invitation:nondet:existing:update
bthread("crud:Invitation:nondet:existing:update", function () {
  let ev = waitForAnyInvitationAdded();
  let args = Object.values(ev);
  block(matchDeletedInvitation.apply(null, args), function () {
    verifyInvitationExists.apply(null, args);
    updateInvitation.apply(null, args);
    verifyInvitationExists.apply(null, args);
  });
});

// Story: monitor:Invitation:add
bthread("monitor:Invitation:add", function () {
  while (true) {
    let ev = waitForAnyInvitationAdded();
    let args = Object.values(ev);
    block(matchDeletedInvitation.apply(null, args), function () {
      verifyInvitationExists.apply(null, args);
    });
  }
});

// Story: crud:Attestation:read_only
bthread("crud:Attestation:read_only", function () {
  let owner = "owner_530";
  let repo = "repo_530";
  let org = "org_530";
  let subject_digest = "subject_digest_530";
  let username = "username_530";
  let attestation_id = 530;
  verifyAttestationExists("owner_530", "repo_530", "org_530", "subject_digest_530", "username_530", 530);
});

// Story: crud:AttestationList:read_only
bthread("crud:AttestationList:read_only", function () {
  let owner = "owner_540";
  let repo = "repo_540";
  let subject_digest = "subject_digest_540";
  verifyAttestationListExists("owner_540", "repo_540", "subject_digest_540");
});

// Story: crud:PagesSite:nondet:1:1
bthread("crud:PagesSite:nondet:1:1", function () {
  let owner = "owner_550";
  let repo = "repo_550";
  createPagesSite("owner_550", "repo_550");
  tryToAddExistingPagesSite("owner_550", "repo_550");
  verifyPagesSiteExists("owner_550", "repo_550");
  updatePagesSite("owner_550", "repo_550");
  deletePagesSite("owner_550", "repo_550");
  tryToDeleteANonExistingPagesSite("owner_550", "repo_550");
  verifyPagesSiteDoesNotExist("owner_550", "repo_550");
});

// Story: crud:PagesSite:nondet:1:2
bthread("crud:PagesSite:nondet:1:2", function () {
  let owner = "owner_551";
  let repo = "repo_551";
  createPagesSite("owner_551", "repo_551");
  tryToAddExistingPagesSite("owner_551", "repo_551");
  updatePagesSite("owner_551", "repo_551");
  verifyPagesSiteExists("owner_551", "repo_551");
  deletePagesSite("owner_551", "repo_551");
  tryToDeleteANonExistingPagesSite("owner_551", "repo_551");
  verifyPagesSiteDoesNotExist("owner_551", "repo_551");
});

// Story: crud:PagesSite:nondet:negative:dup-add
bthread("crud:PagesSite:nondet:negative:dup-add", function () {
  let owner = "owner_556";
  let repo = "repo_556";
  createPagesSite("owner_556", "repo_556");
  verifyPagesSiteExists("owner_556", "repo_556");
  tryToAddExistingPagesSite("owner_556", "repo_556");
  verifyPagesSiteExists("owner_556", "repo_556");
});

// Story: crud:PagesSite:nondet:existing:update
bthread("crud:PagesSite:nondet:existing:update", function () {
  let ev = waitForAnyPagesSiteAdded();
  let args = Object.values(ev);
  block(matchDeletedPagesSite.apply(null, args), function () {
    verifyPagesSiteExists.apply(null, args);
    updatePagesSite.apply(null, args);
    verifyPagesSiteExists.apply(null, args);
  });
});

// Story: monitor:PagesSite:add
bthread("monitor:PagesSite:add", function () {
  while (true) {
    let ev = waitForAnyPagesSiteAdded();
    let args = Object.values(ev);
    block(matchDeletedPagesSite.apply(null, args), function () {
      verifyPagesSiteExists.apply(null, args);
    });
  }
});

// Story: crud:PagesBuild:read_only
bthread("crud:PagesBuild:read_only", function () {
  let owner = "owner_560";
  let repo = "repo_560";
  let build_id = 560;
  verifyPagesBuildExists("owner_560", "repo_560", 560);
});

// Story: crud:PagesDeployment:read_only
bthread("crud:PagesDeployment:read_only", function () {
  let owner = "owner_570";
  let repo = "repo_570";
  let pages_deployment_id = 570;
  verifyPagesDeploymentExists("owner_570", "repo_570", 570);
});

// Story: crud:HostedRunner:nondet:1:1
bthread("crud:HostedRunner:nondet:1:1", function () {
  let org = "org_580";
  let name = "name_580";
  let image = "image_580";
  let size = "size_580";
  let runner_group_id = 580;
  let maximum_runners = "maximum_runners_580";
  let enable_static_ip = "enable_static_ip_580";
  let hosted_runner_id = 580;
  createHostedRunner("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
  tryToAddExistingHostedRunner("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
  verifyHostedRunnerExists("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
  updateHostedRunner("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
  deleteHostedRunner("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
  tryToDeleteANonExistingHostedRunner("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
  verifyHostedRunnerDoesNotExist("org_580", "name_580", "image_580", "size_580", 580, "maximum_runners_580", "enable_static_ip_580", 580);
});

// Story: crud:HostedRunner:nondet:1:2
bthread("crud:HostedRunner:nondet:1:2", function () {
  let org = "org_581";
  let name = "name_581";
  let image = "image_581";
  let size = "size_581";
  let runner_group_id = 581;
  let maximum_runners = "maximum_runners_581";
  let enable_static_ip = "enable_static_ip_581";
  let hosted_runner_id = 581;
  createHostedRunner("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
  tryToAddExistingHostedRunner("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
  updateHostedRunner("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
  verifyHostedRunnerExists("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
  deleteHostedRunner("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
  tryToDeleteANonExistingHostedRunner("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
  verifyHostedRunnerDoesNotExist("org_581", "name_581", "image_581", "size_581", 581, "maximum_runners_581", "enable_static_ip_581", 581);
});

// Story: crud:HostedRunner:nondet:negative:dup-add
bthread("crud:HostedRunner:nondet:negative:dup-add", function () {
  let org = "org_586";
  let name = "name_586";
  let image = "image_586";
  let size = "size_586";
  let runner_group_id = 586;
  let maximum_runners = "maximum_runners_586";
  let enable_static_ip = "enable_static_ip_586";
  let hosted_runner_id = 586;
  createHostedRunner("org_586", "name_586", "image_586", "size_586", 586, "maximum_runners_586", "enable_static_ip_586", 586);
  verifyHostedRunnerExists("org_586", "name_586", "image_586", "size_586", 586, "maximum_runners_586", "enable_static_ip_586", 586);
  tryToAddExistingHostedRunner("org_586", "name_586", "image_586", "size_586", 586, "maximum_runners_586", "enable_static_ip_586", 586);
  verifyHostedRunnerExists("org_586", "name_586", "image_586", "size_586", 586, "maximum_runners_586", "enable_static_ip_586", 586);
});

// Story: crud:HostedRunner:nondet:existing:update
bthread("crud:HostedRunner:nondet:existing:update", function () {
  let ev = waitForAnyHostedRunnerAdded();
  let args = Object.values(ev);
  block(matchDeletedHostedRunner.apply(null, args), function () {
    verifyHostedRunnerExists.apply(null, args);
    updateHostedRunner.apply(null, args);
    verifyHostedRunnerExists.apply(null, args);
  });
});

// Story: monitor:HostedRunner:add
bthread("monitor:HostedRunner:add", function () {
  while (true) {
    let ev = waitForAnyHostedRunnerAdded();
    let args = Object.values(ev);
    block(matchDeletedHostedRunner.apply(null, args), function () {
      verifyHostedRunnerExists.apply(null, args);
    });
  }
});

// Story: crud:RunnerGroup:nondet:1:1
bthread("crud:RunnerGroup:nondet:1:1", function () {
  let org = "org_590";
  let name = "name_590";
  let visibility = "visibility_590";
  let selected_repository_ids = 590;
  let runners = "runners_590";
  let allows_public_repositories = "allows_public_repositories_590";
  let restricted_to_workflows = "restricted_to_workflows_590";
  let selected_workflows = "selected_workflows_590";
  let network_configuration_id = 590;
  let runner_group_id = 590;
  createRunnerGroup("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
  tryToAddExistingRunnerGroup("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
  verifyRunnerGroupExists("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
  updateRunnerGroup("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
  deleteRunnerGroup("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
  tryToDeleteANonExistingRunnerGroup("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
  verifyRunnerGroupDoesNotExist("org_590", "name_590", "visibility_590", 590, "runners_590", "allows_public_repositories_590", "restricted_to_workflows_590", "selected_workflows_590", 590, 590);
});

// Story: crud:RunnerGroup:nondet:1:2
bthread("crud:RunnerGroup:nondet:1:2", function () {
  let org = "org_591";
  let name = "name_591";
  let visibility = "visibility_591";
  let selected_repository_ids = 591;
  let runners = "runners_591";
  let allows_public_repositories = "allows_public_repositories_591";
  let restricted_to_workflows = "restricted_to_workflows_591";
  let selected_workflows = "selected_workflows_591";
  let network_configuration_id = 591;
  let runner_group_id = 591;
  createRunnerGroup("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
  tryToAddExistingRunnerGroup("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
  updateRunnerGroup("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
  verifyRunnerGroupExists("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
  deleteRunnerGroup("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
  tryToDeleteANonExistingRunnerGroup("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
  verifyRunnerGroupDoesNotExist("org_591", "name_591", "visibility_591", 591, "runners_591", "allows_public_repositories_591", "restricted_to_workflows_591", "selected_workflows_591", 591, 591);
});

// Story: crud:RunnerGroup:nondet:negative:dup-add
bthread("crud:RunnerGroup:nondet:negative:dup-add", function () {
  let org = "org_596";
  let name = "name_596";
  let visibility = "visibility_596";
  let selected_repository_ids = 596;
  let runners = "runners_596";
  let allows_public_repositories = "allows_public_repositories_596";
  let restricted_to_workflows = "restricted_to_workflows_596";
  let selected_workflows = "selected_workflows_596";
  let network_configuration_id = 596;
  let runner_group_id = 596;
  createRunnerGroup("org_596", "name_596", "visibility_596", 596, "runners_596", "allows_public_repositories_596", "restricted_to_workflows_596", "selected_workflows_596", 596, 596);
  verifyRunnerGroupExists("org_596", "name_596", "visibility_596", 596, "runners_596", "allows_public_repositories_596", "restricted_to_workflows_596", "selected_workflows_596", 596, 596);
  tryToAddExistingRunnerGroup("org_596", "name_596", "visibility_596", 596, "runners_596", "allows_public_repositories_596", "restricted_to_workflows_596", "selected_workflows_596", 596, 596);
  verifyRunnerGroupExists("org_596", "name_596", "visibility_596", 596, "runners_596", "allows_public_repositories_596", "restricted_to_workflows_596", "selected_workflows_596", 596, 596);
});

// Story: crud:RunnerGroup:nondet:existing:update
bthread("crud:RunnerGroup:nondet:existing:update", function () {
  let ev = waitForAnyRunnerGroupAdded();
  let args = Object.values(ev);
  block(matchDeletedRunnerGroup.apply(null, args), function () {
    verifyRunnerGroupExists.apply(null, args);
    updateRunnerGroup.apply(null, args);
    verifyRunnerGroupExists.apply(null, args);
  });
});

// Story: monitor:RunnerGroup:add
bthread("monitor:RunnerGroup:add", function () {
  while (true) {
    let ev = waitForAnyRunnerGroupAdded();
    let args = Object.values(ev);
    block(matchDeletedRunnerGroup.apply(null, args), function () {
      verifyRunnerGroupExists.apply(null, args);
    });
  }
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:1
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:1", function () {
  let org = "org_600";
  let runner_group_id = 600;
  let repository_id = 600;
  addRepoAccessToRunnerGroup("org_600", 600, 600);
  tryToAddExistingRunnerGroupRepositoryAccess("org_600", 600, 600);
  verifyRunnerGroupRepositoryAccessExists("org_600", 600, 600);
  removeRepoAccessFromRunnerGroup("org_600", 600, 600);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess("org_600", 600, 600);
  verifyRunnerGroupRepositoryAccessDoesNotExist("org_600", 600, 600);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:2
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:2", function () {
  let org = "org_601";
  let runner_group_id = 601;
  let repository_id = 601;
  addRepoAccessToRunnerGroup("org_601", 601, 601);
  tryToAddExistingRunnerGroupRepositoryAccess("org_601", 601, 601);
  verifyRunnerGroupRepositoryAccessExists("org_601", 601, 601);
  removeRepoAccessFromRunnerGroup("org_601", 601, 601);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess("org_601", 601, 601);
  verifyRunnerGroupRepositoryAccessDoesNotExist("org_601", 601, 601);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add
bthread("crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add", function () {
  let org = "org_606";
  let runner_group_id = 606;
  let repository_id = 606;
  addRepoAccessToRunnerGroup("org_606", 606, 606);
  verifyRunnerGroupRepositoryAccessExists("org_606", 606, 606);
  tryToAddExistingRunnerGroupRepositoryAccess("org_606", 606, 606);
  verifyRunnerGroupRepositoryAccessExists("org_606", 606, 606);
});

// Story: monitor:RunnerGroupRepositoryAccess:add
bthread("monitor:RunnerGroupRepositoryAccess:add", function () {
  while (true) {
    let ev = waitForAnyRunnerGroupRepositoryAccessAdded();
    let args = Object.values(ev);
    block(matchDeletedRunnerGroupRepositoryAccess.apply(null, args), function () {
      verifyRunnerGroupRepositoryAccessExists.apply(null, args);
    });
  }
});

// Story: crud:RunnerGroupRunners:nondet:1:1
bthread("crud:RunnerGroupRunners:nondet:1:1", function () {
  let org = "org_620";
  let runner_group_id = 620;
  let runner_id = 620;
  addRunnerToRunnerGroup("org_620", 620, 620);
  tryToAddExistingRunnerGroupRunners("org_620", 620, 620);
  verifyRunnerGroupRunnersExists("org_620", 620, 620);
  removeRunnerFromRunnerGroup("org_620", 620, 620);
  tryToDeleteANonExistingRunnerGroupRunners("org_620", 620, 620);
  verifyRunnerGroupRunnersDoesNotExist("org_620", 620, 620);
});

// Story: crud:RunnerGroupRunners:nondet:1:2
bthread("crud:RunnerGroupRunners:nondet:1:2", function () {
  let org = "org_621";
  let runner_group_id = 621;
  let runner_id = 621;
  addRunnerToRunnerGroup("org_621", 621, 621);
  tryToAddExistingRunnerGroupRunners("org_621", 621, 621);
  verifyRunnerGroupRunnersExists("org_621", 621, 621);
  removeRunnerFromRunnerGroup("org_621", 621, 621);
  tryToDeleteANonExistingRunnerGroupRunners("org_621", 621, 621);
  verifyRunnerGroupRunnersDoesNotExist("org_621", 621, 621);
});

// Story: crud:RunnerGroupRunners:nondet:negative:dup-add
bthread("crud:RunnerGroupRunners:nondet:negative:dup-add", function () {
  let org = "org_626";
  let runner_group_id = 626;
  let runner_id = 626;
  addRunnerToRunnerGroup("org_626", 626, 626);
  verifyRunnerGroupRunnersExists("org_626", 626, 626);
  tryToAddExistingRunnerGroupRunners("org_626", 626, 626);
  verifyRunnerGroupRunnersExists("org_626", 626, 626);
});

// Story: monitor:RunnerGroupRunners:add
bthread("monitor:RunnerGroupRunners:add", function () {
  while (true) {
    let ev = waitForAnyRunnerGroupRunnersAdded();
    let args = Object.values(ev);
    block(matchDeletedRunnerGroupRunners.apply(null, args), function () {
      verifyRunnerGroupRunnersExists.apply(null, args);
    });
  }
});

// Story: crud:SelfHostedRunner:read_only
bthread("crud:SelfHostedRunner:read_only", function () {
  let org = "org_640";
  let runner_id = 640;
  verifySelfHostedRunnerExists("org_640", 640);
});

// Story: crud:SelfHostedRunnerLabel:nondet:1:1
bthread("crud:SelfHostedRunnerLabel:nondet:1:1", function () {
  let org = "org_650";
  let runner_id = 650;
  let labels = "labels_650";
  let name = "name_650";
  addCustomLabelsToSelfHostedRunner("org_650", 650, "labels_650", "name_650");
  tryToAddExistingSelfHostedRunnerLabel("org_650", 650, "labels_650", "name_650");
  verifySelfHostedRunnerLabelExists("org_650", 650, "labels_650", "name_650");
  removeCustomLabelFromSelfHostedRunner("org_650", 650, "labels_650", "name_650");
  tryToDeleteANonExistingSelfHostedRunnerLabel("org_650", 650, "labels_650", "name_650");
  verifySelfHostedRunnerLabelDoesNotExist("org_650", 650, "labels_650", "name_650");
});

// Story: crud:SelfHostedRunnerLabel:nondet:1:2
bthread("crud:SelfHostedRunnerLabel:nondet:1:2", function () {
  let org = "org_651";
  let runner_id = 651;
  let labels = "labels_651";
  let name = "name_651";
  addCustomLabelsToSelfHostedRunner("org_651", 651, "labels_651", "name_651");
  tryToAddExistingSelfHostedRunnerLabel("org_651", 651, "labels_651", "name_651");
  verifySelfHostedRunnerLabelExists("org_651", 651, "labels_651", "name_651");
  removeCustomLabelFromSelfHostedRunner("org_651", 651, "labels_651", "name_651");
  tryToDeleteANonExistingSelfHostedRunnerLabel("org_651", 651, "labels_651", "name_651");
  verifySelfHostedRunnerLabelDoesNotExist("org_651", 651, "labels_651", "name_651");
});

// Story: crud:SelfHostedRunnerLabel:nondet:negative:dup-add
bthread("crud:SelfHostedRunnerLabel:nondet:negative:dup-add", function () {
  let org = "org_656";
  let runner_id = 656;
  let labels = "labels_656";
  let name = "name_656";
  addCustomLabelsToSelfHostedRunner("org_656", 656, "labels_656", "name_656");
  verifySelfHostedRunnerLabelExists("org_656", 656, "labels_656", "name_656");
  tryToAddExistingSelfHostedRunnerLabel("org_656", 656, "labels_656", "name_656");
  verifySelfHostedRunnerLabelExists("org_656", 656, "labels_656", "name_656");
});

// Story: monitor:SelfHostedRunnerLabel:add
bthread("monitor:SelfHostedRunnerLabel:add", function () {
  while (true) {
    let ev = waitForAnySelfHostedRunnerLabelAdded();
    let args = Object.values(ev);
    block(matchDeletedSelfHostedRunnerLabel.apply(null, args), function () {
      verifySelfHostedRunnerLabelExists.apply(null, args);
    });
  }
});

// Story: crud:OrgSecret:nondet:1:1
bthread("crud:OrgSecret:nondet:1:1", function () {
  let org = "org_690";
  let secret_name = "secret_name_690";
  let encrypted_value = "encrypted_value_690";
  let key_id = 690;
  let visibility = "visibility_690";
  let selected_repository_ids = 690;
  createOrUpdateOrgSecret("org_690", "secret_name_690", "encrypted_value_690", 690, "visibility_690", 690);
  tryToAddExistingOrgSecret("org_690", "secret_name_690", "encrypted_value_690", 690, "visibility_690", 690);
  verifyOrgSecretExists("org_690", "secret_name_690", "encrypted_value_690", 690, "visibility_690", 690);
  deleteOrgSecret("org_690", "secret_name_690", "encrypted_value_690", 690, "visibility_690", 690);
  tryToDeleteANonExistingOrgSecret("org_690", "secret_name_690", "encrypted_value_690", 690, "visibility_690", 690);
  verifyOrgSecretDoesNotExist("org_690", "secret_name_690", "encrypted_value_690", 690, "visibility_690", 690);
});

// Story: crud:OrgSecret:nondet:1:2
bthread("crud:OrgSecret:nondet:1:2", function () {
  let org = "org_691";
  let secret_name = "secret_name_691";
  let encrypted_value = "encrypted_value_691";
  let key_id = 691;
  let visibility = "visibility_691";
  let selected_repository_ids = 691;
  createOrUpdateOrgSecret("org_691", "secret_name_691", "encrypted_value_691", 691, "visibility_691", 691);
  tryToAddExistingOrgSecret("org_691", "secret_name_691", "encrypted_value_691", 691, "visibility_691", 691);
  verifyOrgSecretExists("org_691", "secret_name_691", "encrypted_value_691", 691, "visibility_691", 691);
  deleteOrgSecret("org_691", "secret_name_691", "encrypted_value_691", 691, "visibility_691", 691);
  tryToDeleteANonExistingOrgSecret("org_691", "secret_name_691", "encrypted_value_691", 691, "visibility_691", 691);
  verifyOrgSecretDoesNotExist("org_691", "secret_name_691", "encrypted_value_691", 691, "visibility_691", 691);
});

// Story: crud:OrgSecret:nondet:negative:dup-add
bthread("crud:OrgSecret:nondet:negative:dup-add", function () {
  let org = "org_696";
  let secret_name = "secret_name_696";
  let encrypted_value = "encrypted_value_696";
  let key_id = 696;
  let visibility = "visibility_696";
  let selected_repository_ids = 696;
  createOrUpdateOrgSecret("org_696", "secret_name_696", "encrypted_value_696", 696, "visibility_696", 696);
  verifyOrgSecretExists("org_696", "secret_name_696", "encrypted_value_696", 696, "visibility_696", 696);
  tryToAddExistingOrgSecret("org_696", "secret_name_696", "encrypted_value_696", 696, "visibility_696", 696);
  verifyOrgSecretExists("org_696", "secret_name_696", "encrypted_value_696", 696, "visibility_696", 696);
});

// Story: monitor:OrgSecret:add
bthread("monitor:OrgSecret:add", function () {
  while (true) {
    let ev = waitForAnyOrgSecretAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgSecret.apply(null, args), function () {
      verifyOrgSecretExists.apply(null, args);
    });
  }
});

// Story: crud:OrgSecretSelectedRepos:nondet:1:1
bthread("crud:OrgSecretSelectedRepos:nondet:1:1", function () {
  let org = "org_700";
  let secret_name = "secret_name_700";
  let repository_id = 700;
  addSelectedRepoToOrgSecret("org_700", "secret_name_700", 700);
  tryToAddExistingOrgSecretSelectedRepos("org_700", "secret_name_700", 700);
  verifyOrgSecretSelectedReposExists("org_700", "secret_name_700", 700);
  removeSelectedRepoFromOrgSecret("org_700", "secret_name_700", 700);
  tryToDeleteANonExistingOrgSecretSelectedRepos("org_700", "secret_name_700", 700);
  verifyOrgSecretSelectedReposDoesNotExist("org_700", "secret_name_700", 700);
});

// Story: crud:OrgSecretSelectedRepos:nondet:1:2
bthread("crud:OrgSecretSelectedRepos:nondet:1:2", function () {
  let org = "org_701";
  let secret_name = "secret_name_701";
  let repository_id = 701;
  addSelectedRepoToOrgSecret("org_701", "secret_name_701", 701);
  tryToAddExistingOrgSecretSelectedRepos("org_701", "secret_name_701", 701);
  verifyOrgSecretSelectedReposExists("org_701", "secret_name_701", 701);
  removeSelectedRepoFromOrgSecret("org_701", "secret_name_701", 701);
  tryToDeleteANonExistingOrgSecretSelectedRepos("org_701", "secret_name_701", 701);
  verifyOrgSecretSelectedReposDoesNotExist("org_701", "secret_name_701", 701);
});

// Story: crud:OrgSecretSelectedRepos:nondet:negative:dup-add
bthread("crud:OrgSecretSelectedRepos:nondet:negative:dup-add", function () {
  let org = "org_706";
  let secret_name = "secret_name_706";
  let repository_id = 706;
  addSelectedRepoToOrgSecret("org_706", "secret_name_706", 706);
  verifyOrgSecretSelectedReposExists("org_706", "secret_name_706", 706);
  tryToAddExistingOrgSecretSelectedRepos("org_706", "secret_name_706", 706);
  verifyOrgSecretSelectedReposExists("org_706", "secret_name_706", 706);
});

// Story: monitor:OrgSecretSelectedRepos:add
bthread("monitor:OrgSecretSelectedRepos:add", function () {
  while (true) {
    let ev = waitForAnyOrgSecretSelectedReposAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgSecretSelectedRepos.apply(null, args), function () {
      verifyOrgSecretSelectedReposExists.apply(null, args);
    });
  }
});

// Story: crud:OrgVariable:nondet:1:1
bthread("crud:OrgVariable:nondet:1:1", function () {
  let org = "org_720";
  let name = "name_720";
  let value = "value_720";
  let visibility = "visibility_720";
  let selected_repository_ids = 720;
  createOrgVariable("org_720", "name_720", "value_720", "visibility_720", 720);
  tryToAddExistingOrgVariable("org_720", "name_720", "value_720", "visibility_720", 720);
  verifyOrgVariableExists("org_720", "name_720", "value_720", "visibility_720", 720);
  updateOrgVariable("org_720", "name_720", "value_720", "visibility_720", 720);
  deleteOrgVariable("org_720", "name_720", "value_720", "visibility_720", 720);
  tryToDeleteANonExistingOrgVariable("org_720", "name_720", "value_720", "visibility_720", 720);
  verifyOrgVariableDoesNotExist("org_720", "name_720", "value_720", "visibility_720", 720);
});

// Story: crud:OrgVariable:nondet:1:2
bthread("crud:OrgVariable:nondet:1:2", function () {
  let org = "org_721";
  let name = "name_721";
  let value = "value_721";
  let visibility = "visibility_721";
  let selected_repository_ids = 721;
  createOrgVariable("org_721", "name_721", "value_721", "visibility_721", 721);
  tryToAddExistingOrgVariable("org_721", "name_721", "value_721", "visibility_721", 721);
  updateOrgVariable("org_721", "name_721", "value_721", "visibility_721", 721);
  verifyOrgVariableExists("org_721", "name_721", "value_721", "visibility_721", 721);
  deleteOrgVariable("org_721", "name_721", "value_721", "visibility_721", 721);
  tryToDeleteANonExistingOrgVariable("org_721", "name_721", "value_721", "visibility_721", 721);
  verifyOrgVariableDoesNotExist("org_721", "name_721", "value_721", "visibility_721", 721);
});

// Story: crud:OrgVariable:nondet:negative:dup-add
bthread("crud:OrgVariable:nondet:negative:dup-add", function () {
  let org = "org_726";
  let name = "name_726";
  let value = "value_726";
  let visibility = "visibility_726";
  let selected_repository_ids = 726;
  createOrgVariable("org_726", "name_726", "value_726", "visibility_726", 726);
  verifyOrgVariableExists("org_726", "name_726", "value_726", "visibility_726", 726);
  tryToAddExistingOrgVariable("org_726", "name_726", "value_726", "visibility_726", 726);
  verifyOrgVariableExists("org_726", "name_726", "value_726", "visibility_726", 726);
});

// Story: crud:OrgVariable:nondet:existing:update
bthread("crud:OrgVariable:nondet:existing:update", function () {
  let ev = waitForAnyOrgVariableAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgVariable.apply(null, args), function () {
    verifyOrgVariableExists.apply(null, args);
    updateOrgVariable.apply(null, args);
    verifyOrgVariableExists.apply(null, args);
  });
});

// Story: monitor:OrgVariable:add
bthread("monitor:OrgVariable:add", function () {
  while (true) {
    let ev = waitForAnyOrgVariableAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgVariable.apply(null, args), function () {
      verifyOrgVariableExists.apply(null, args);
    });
  }
});

// Story: crud:OrgVariableSelectedRepos:nondet:1:1
bthread("crud:OrgVariableSelectedRepos:nondet:1:1", function () {
  let org = "org_730";
  let name = "name_730";
  let repository_id = 730;
  addSelectedRepoToOrgVariable("org_730", "name_730", 730);
  tryToAddExistingOrgVariableSelectedRepos("org_730", "name_730", 730);
  verifyOrgVariableSelectedReposExists("org_730", "name_730", 730);
  removeSelectedRepoFromOrgVariable("org_730", "name_730", 730);
  tryToDeleteANonExistingOrgVariableSelectedRepos("org_730", "name_730", 730);
  verifyOrgVariableSelectedReposDoesNotExist("org_730", "name_730", 730);
});

// Story: crud:OrgVariableSelectedRepos:nondet:1:2
bthread("crud:OrgVariableSelectedRepos:nondet:1:2", function () {
  let org = "org_731";
  let name = "name_731";
  let repository_id = 731;
  addSelectedRepoToOrgVariable("org_731", "name_731", 731);
  tryToAddExistingOrgVariableSelectedRepos("org_731", "name_731", 731);
  verifyOrgVariableSelectedReposExists("org_731", "name_731", 731);
  removeSelectedRepoFromOrgVariable("org_731", "name_731", 731);
  tryToDeleteANonExistingOrgVariableSelectedRepos("org_731", "name_731", 731);
  verifyOrgVariableSelectedReposDoesNotExist("org_731", "name_731", 731);
});

// Story: crud:OrgVariableSelectedRepos:nondet:negative:dup-add
bthread("crud:OrgVariableSelectedRepos:nondet:negative:dup-add", function () {
  let org = "org_736";
  let name = "name_736";
  let repository_id = 736;
  addSelectedRepoToOrgVariable("org_736", "name_736", 736);
  verifyOrgVariableSelectedReposExists("org_736", "name_736", 736);
  tryToAddExistingOrgVariableSelectedRepos("org_736", "name_736", 736);
  verifyOrgVariableSelectedReposExists("org_736", "name_736", 736);
});

// Story: monitor:OrgVariableSelectedRepos:add
bthread("monitor:OrgVariableSelectedRepos:add", function () {
  while (true) {
    let ev = waitForAnyOrgVariableSelectedReposAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgVariableSelectedRepos.apply(null, args), function () {
      verifyOrgVariableSelectedReposExists.apply(null, args);
    });
  }
});

// Story: crud:SelfHostedRunnerPermission:read_only
bthread("crud:SelfHostedRunnerPermission:read_only", function () {
  let org = "org_750";
  let enabled_repositories = "enabled_repositories_750";
  verifySelfHostedRunnerPermissionExists("org_750", "enabled_repositories_750");
});

// Story: crud:SelfHostedRunnerPermissionSelectedRepos:nondet:1:1
bthread("crud:SelfHostedRunnerPermissionSelectedRepos:nondet:1:1", function () {
  let org = "org_760";
  let repository_id = 760;
  enableSelectedRepositorySelfHostedRunners("org_760", 760);
  tryToAddExistingSelfHostedRunnerPermissionSelectedRepos("org_760", 760);
  verifySelfHostedRunnerPermissionSelectedReposExists("org_760", 760);
  disableSelectedRepositorySelfHostedRunners("org_760", 760);
  tryToDeleteANonExistingSelfHostedRunnerPermissionSelectedRepos("org_760", 760);
  verifySelfHostedRunnerPermissionSelectedReposDoesNotExist("org_760", 760);
});

// Story: crud:SelfHostedRunnerPermissionSelectedRepos:nondet:1:2
bthread("crud:SelfHostedRunnerPermissionSelectedRepos:nondet:1:2", function () {
  let org = "org_761";
  let repository_id = 761;
  enableSelectedRepositorySelfHostedRunners("org_761", 761);
  tryToAddExistingSelfHostedRunnerPermissionSelectedRepos("org_761", 761);
  verifySelfHostedRunnerPermissionSelectedReposExists("org_761", 761);
  disableSelectedRepositorySelfHostedRunners("org_761", 761);
  tryToDeleteANonExistingSelfHostedRunnerPermissionSelectedRepos("org_761", 761);
  verifySelfHostedRunnerPermissionSelectedReposDoesNotExist("org_761", 761);
});

// Story: crud:SelfHostedRunnerPermissionSelectedRepos:nondet:negative:dup-add
bthread("crud:SelfHostedRunnerPermissionSelectedRepos:nondet:negative:dup-add", function () {
  let org = "org_766";
  let repository_id = 766;
  enableSelectedRepositorySelfHostedRunners("org_766", 766);
  verifySelfHostedRunnerPermissionSelectedReposExists("org_766", 766);
  tryToAddExistingSelfHostedRunnerPermissionSelectedRepos("org_766", 766);
  verifySelfHostedRunnerPermissionSelectedReposExists("org_766", 766);
});

// Story: monitor:SelfHostedRunnerPermissionSelectedRepos:add
bthread("monitor:SelfHostedRunnerPermissionSelectedRepos:add", function () {
  while (true) {
    let ev = waitForAnySelfHostedRunnerPermissionSelectedReposAdded();
    let args = Object.values(ev);
    block(matchDeletedSelfHostedRunnerPermissionSelectedRepos.apply(null, args), function () {
      verifySelfHostedRunnerPermissionSelectedReposExists.apply(null, args);
    });
  }
});

// Story: crud:SelectedRepositoryPermission:nondet:1:1
bthread("crud:SelectedRepositoryPermission:nondet:1:1", function () {
  let org = "org_780";
  let repository_id = 780;
  enableSelectedRepository("org_780", 780);
  tryToAddExistingSelectedRepositoryPermission("org_780", 780);
  verifySelectedRepositoryPermissionExists("org_780", 780);
  disableSelectedRepository("org_780", 780);
  tryToDeleteANonExistingSelectedRepositoryPermission("org_780", 780);
  verifySelectedRepositoryPermissionDoesNotExist("org_780", 780);
});

// Story: crud:SelectedRepositoryPermission:nondet:1:2
bthread("crud:SelectedRepositoryPermission:nondet:1:2", function () {
  let org = "org_781";
  let repository_id = 781;
  enableSelectedRepository("org_781", 781);
  tryToAddExistingSelectedRepositoryPermission("org_781", 781);
  verifySelectedRepositoryPermissionExists("org_781", 781);
  disableSelectedRepository("org_781", 781);
  tryToDeleteANonExistingSelectedRepositoryPermission("org_781", 781);
  verifySelectedRepositoryPermissionDoesNotExist("org_781", 781);
});

// Story: crud:SelectedRepositoryPermission:nondet:negative:dup-add
bthread("crud:SelectedRepositoryPermission:nondet:negative:dup-add", function () {
  let org = "org_786";
  let repository_id = 786;
  enableSelectedRepository("org_786", 786);
  verifySelectedRepositoryPermissionExists("org_786", 786);
  tryToAddExistingSelectedRepositoryPermission("org_786", 786);
  verifySelectedRepositoryPermissionExists("org_786", 786);
});

// Story: monitor:SelectedRepositoryPermission:add
bthread("monitor:SelectedRepositoryPermission:add", function () {
  while (true) {
    let ev = waitForAnySelectedRepositoryPermissionAdded();
    let args = Object.values(ev);
    block(matchDeletedSelectedRepositoryPermission.apply(null, args), function () {
      verifySelectedRepositoryPermissionExists.apply(null, args);
    });
  }
});

// Story: crud:Permission:read_only
bthread("crud:Permission:read_only", function () {
  let org = "org_800";
  let enabled_repositories = "enabled_repositories_800";
  let allowed_actions = "allowed_actions_800";
  let sha_pinning_required = "sha_pinning_required_800";
  verifyPermissionExists("org_800", "enabled_repositories_800", "allowed_actions_800", "sha_pinning_required_800");
});

// Story: crud:PermissionArtifactAndLogRetention:read_only
bthread("crud:PermissionArtifactAndLogRetention:read_only", function () {
  let org = "org_810";
  let days = "days_810";
  verifyPermissionArtifactAndLogRetentionExists("org_810", "days_810");
});

// Story: crud:PermissionForkPRContributorApproval:read_only
bthread("crud:PermissionForkPRContributorApproval:read_only", function () {
  let org = "org_820";
  let approval_policy = "approval_policy_820";
  verifyPermissionForkPRContributorApprovalExists("org_820", "approval_policy_820");
});

// Story: crud:PermissionForkPRWorkflowsPrivateRepos:read_only
bthread("crud:PermissionForkPRWorkflowsPrivateRepos:read_only", function () {
  let org = "org_830";
  verifyPermissionForkPRWorkflowsPrivateReposExists("org_830");
});

// Story: crud:PermissionSelectedActions:read_only
bthread("crud:PermissionSelectedActions:read_only", function () {
  let org = "org_840";
  verifyPermissionSelectedActionsExists("org_840");
});

// Story: crud:PermissionWorkflow:read_only
bthread("crud:PermissionWorkflow:read_only", function () {
  let org = "org_850";
  verifyPermissionWorkflowExists("org_850");
});

// Story: crud:Artifact:read_only
bthread("crud:Artifact:read_only", function () {
  let owner = "owner_860";
  let repo = "repo_860";
  let artifact_id = 860;
  verifyArtifactExists("owner_860", "repo_860", 860);
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
  let owner = "owner_880";
  let repo = "repo_880";
  let job_id = 880;
  let enable_debug_logging = "enable_debug_logging_880";
  verifyJobExists("owner_880", "repo_880", 880, "enable_debug_logging_880");
});

// Story: crud:Workflow:read_only
bthread("crud:Workflow:read_only", function () {
  let owner = "owner_890";
  let repo = "repo_890";
  let workflow_id = 890;
  let ref = "ref_890";
  let inputs = "inputs_890";
  verifyWorkflowExists("owner_890", "repo_890", 890, "ref_890", "inputs_890");
});

// Story: crud:WorkflowRun:read_only
bthread("crud:WorkflowRun:read_only", function () {
  let owner = "owner_900";
  let repo = "repo_900";
  let run_id = 900;
  let enable_debug_logging = "enable_debug_logging_900";
  verifyWorkflowRunExists("owner_900", "repo_900", 900, "enable_debug_logging_900");
});

// Story: crud:WorkflowRunAttempt:read_only
bthread("crud:WorkflowRunAttempt:read_only", function () {
  let owner = "owner_910";
  let repo = "repo_910";
  let run_id = 910;
  let attempt_number = "attempt_number_910";
  verifyWorkflowRunAttemptExists("owner_910", "repo_910", 910, "attempt_number_910");
});

// Story: crud:WorkflowRunAttemptLogs:read_only
bthread("crud:WorkflowRunAttemptLogs:read_only", function () {
  let owner = "owner_930";
  let repo = "repo_930";
  let run_id = 930;
  let attempt_number = "attempt_number_930";
  verifyWorkflowRunAttemptLogsExists("owner_930", "repo_930", 930, "attempt_number_930");
});

// Story: crud:WorkflowRunLogs:read_only
bthread("crud:WorkflowRunLogs:read_only", function () {
  let owner = "owner_940";
  let repo = "repo_940";
  let run_id = 940;
  verifyWorkflowRunLogsExists("owner_940", "repo_940", 940);
});

// Story: crud:WorkflowRunApproval:read_only
bthread("crud:WorkflowRunApproval:read_only", function () {
  let owner = "owner_960";
  let repo = "repo_960";
  let run_id = 960;
  verifyWorkflowRunApprovalExists("owner_960", "repo_960", 960);
});

// Story: crud:WorkflowRunPendingDeployment:read_only
bthread("crud:WorkflowRunPendingDeployment:read_only", function () {
  let owner = "owner_970";
  let repo = "repo_970";
  let run_id = 970;
  let environment_ids = 970;
  let state = "state_970";
  let comment = "comment_970";
  verifyWorkflowRunPendingDeploymentExists("owner_970", "repo_970", 970, 970, "state_970", "comment_970");
});

// Story: crud:RepositorySecret:nondet:1:1
bthread("crud:RepositorySecret:nondet:1:1", function () {
  let owner = "owner_980";
  let repo = "repo_980";
  let secret_name = "secret_name_980";
  let encrypted_value = "encrypted_value_980";
  let key_id = 980;
  createOrUpdateRepoSecret("owner_980", "repo_980", "secret_name_980", "encrypted_value_980", 980);
  tryToAddExistingRepositorySecret("owner_980", "repo_980", "secret_name_980", "encrypted_value_980", 980);
  verifyRepositorySecretExists("owner_980", "repo_980", "secret_name_980", "encrypted_value_980", 980);
  deleteRepoSecret("owner_980", "repo_980", "secret_name_980", "encrypted_value_980", 980);
  tryToDeleteANonExistingRepositorySecret("owner_980", "repo_980", "secret_name_980", "encrypted_value_980", 980);
  verifyRepositorySecretDoesNotExist("owner_980", "repo_980", "secret_name_980", "encrypted_value_980", 980);
});

// Story: crud:RepositorySecret:nondet:1:2
bthread("crud:RepositorySecret:nondet:1:2", function () {
  let owner = "owner_981";
  let repo = "repo_981";
  let secret_name = "secret_name_981";
  let encrypted_value = "encrypted_value_981";
  let key_id = 981;
  createOrUpdateRepoSecret("owner_981", "repo_981", "secret_name_981", "encrypted_value_981", 981);
  tryToAddExistingRepositorySecret("owner_981", "repo_981", "secret_name_981", "encrypted_value_981", 981);
  verifyRepositorySecretExists("owner_981", "repo_981", "secret_name_981", "encrypted_value_981", 981);
  deleteRepoSecret("owner_981", "repo_981", "secret_name_981", "encrypted_value_981", 981);
  tryToDeleteANonExistingRepositorySecret("owner_981", "repo_981", "secret_name_981", "encrypted_value_981", 981);
  verifyRepositorySecretDoesNotExist("owner_981", "repo_981", "secret_name_981", "encrypted_value_981", 981);
});

// Story: crud:RepositorySecret:nondet:negative:dup-add
bthread("crud:RepositorySecret:nondet:negative:dup-add", function () {
  let owner = "owner_986";
  let repo = "repo_986";
  let secret_name = "secret_name_986";
  let encrypted_value = "encrypted_value_986";
  let key_id = 986;
  createOrUpdateRepoSecret("owner_986", "repo_986", "secret_name_986", "encrypted_value_986", 986);
  verifyRepositorySecretExists("owner_986", "repo_986", "secret_name_986", "encrypted_value_986", 986);
  tryToAddExistingRepositorySecret("owner_986", "repo_986", "secret_name_986", "encrypted_value_986", 986);
  verifyRepositorySecretExists("owner_986", "repo_986", "secret_name_986", "encrypted_value_986", 986);
});

// Story: monitor:RepositorySecret:add
bthread("monitor:RepositorySecret:add", function () {
  while (true) {
    let ev = waitForAnyRepositorySecretAdded();
    let args = Object.values(ev);
    block(matchDeletedRepositorySecret.apply(null, args), function () {
      verifyRepositorySecretExists.apply(null, args);
    });
  }
});

// Story: crud:RepositoryVariable:nondet:1:1
bthread("crud:RepositoryVariable:nondet:1:1", function () {
  let owner = "owner_990";
  let repo = "repo_990";
  let name = "name_990";
  let value = "value_990";
  createRepoVariable("owner_990", "repo_990", "name_990", "value_990");
  tryToAddExistingRepositoryVariable("owner_990", "repo_990", "name_990", "value_990");
  verifyRepositoryVariableExists("owner_990", "repo_990", "name_990", "value_990");
  updateRepoVariable("owner_990", "repo_990", "name_990", "value_990");
  deleteRepoVariable("owner_990", "repo_990", "name_990", "value_990");
  tryToDeleteANonExistingRepositoryVariable("owner_990", "repo_990", "name_990", "value_990");
  verifyRepositoryVariableDoesNotExist("owner_990", "repo_990", "name_990", "value_990");
});

// Story: crud:RepositoryVariable:nondet:1:2
bthread("crud:RepositoryVariable:nondet:1:2", function () {
  let owner = "owner_991";
  let repo = "repo_991";
  let name = "name_991";
  let value = "value_991";
  createRepoVariable("owner_991", "repo_991", "name_991", "value_991");
  tryToAddExistingRepositoryVariable("owner_991", "repo_991", "name_991", "value_991");
  updateRepoVariable("owner_991", "repo_991", "name_991", "value_991");
  verifyRepositoryVariableExists("owner_991", "repo_991", "name_991", "value_991");
  deleteRepoVariable("owner_991", "repo_991", "name_991", "value_991");
  tryToDeleteANonExistingRepositoryVariable("owner_991", "repo_991", "name_991", "value_991");
  verifyRepositoryVariableDoesNotExist("owner_991", "repo_991", "name_991", "value_991");
});

// Story: crud:RepositoryVariable:nondet:negative:dup-add
bthread("crud:RepositoryVariable:nondet:negative:dup-add", function () {
  let owner = "owner_996";
  let repo = "repo_996";
  let name = "name_996";
  let value = "value_996";
  createRepoVariable("owner_996", "repo_996", "name_996", "value_996");
  verifyRepositoryVariableExists("owner_996", "repo_996", "name_996", "value_996");
  tryToAddExistingRepositoryVariable("owner_996", "repo_996", "name_996", "value_996");
  verifyRepositoryVariableExists("owner_996", "repo_996", "name_996", "value_996");
});

// Story: crud:RepositoryVariable:nondet:existing:update
bthread("crud:RepositoryVariable:nondet:existing:update", function () {
  let ev = waitForAnyRepositoryVariableAdded();
  let args = Object.values(ev);
  block(matchDeletedRepositoryVariable.apply(null, args), function () {
    verifyRepositoryVariableExists.apply(null, args);
    updateRepoVariable.apply(null, args);
    verifyRepositoryVariableExists.apply(null, args);
  });
});

// Story: monitor:RepositoryVariable:add
bthread("monitor:RepositoryVariable:add", function () {
  while (true) {
    let ev = waitForAnyRepositoryVariableAdded();
    let args = Object.values(ev);
    block(matchDeletedRepositoryVariable.apply(null, args), function () {
      verifyRepositoryVariableExists.apply(null, args);
    });
  }
});

// Story: crud:RepositoryVariableSelectedRepos:nondet:1:1
bthread("crud:RepositoryVariableSelectedRepos:nondet:1:1", function () {
  let owner = "owner_1000";
  let repo = "repo_1000";
  let name = "name_1000";
  let repository_id = 1000;
  addSelectedRepoToRepoVariable("owner_1000", "repo_1000", "name_1000", 1000);
  tryToAddExistingRepositoryVariableSelectedRepos("owner_1000", "repo_1000", "name_1000", 1000);
  verifyRepositoryVariableSelectedReposExists("owner_1000", "repo_1000", "name_1000", 1000);
  removeSelectedRepoFromRepoVariable("owner_1000", "repo_1000", "name_1000", 1000);
  tryToDeleteANonExistingRepositoryVariableSelectedRepos("owner_1000", "repo_1000", "name_1000", 1000);
  verifyRepositoryVariableSelectedReposDoesNotExist("owner_1000", "repo_1000", "name_1000", 1000);
});

// Story: crud:RepositoryVariableSelectedRepos:nondet:1:2
bthread("crud:RepositoryVariableSelectedRepos:nondet:1:2", function () {
  let owner = "owner_1001";
  let repo = "repo_1001";
  let name = "name_1001";
  let repository_id = 1001;
  addSelectedRepoToRepoVariable("owner_1001", "repo_1001", "name_1001", 1001);
  tryToAddExistingRepositoryVariableSelectedRepos("owner_1001", "repo_1001", "name_1001", 1001);
  verifyRepositoryVariableSelectedReposExists("owner_1001", "repo_1001", "name_1001", 1001);
  removeSelectedRepoFromRepoVariable("owner_1001", "repo_1001", "name_1001", 1001);
  tryToDeleteANonExistingRepositoryVariableSelectedRepos("owner_1001", "repo_1001", "name_1001", 1001);
  verifyRepositoryVariableSelectedReposDoesNotExist("owner_1001", "repo_1001", "name_1001", 1001);
});

// Story: crud:RepositoryVariableSelectedRepos:nondet:negative:dup-add
bthread("crud:RepositoryVariableSelectedRepos:nondet:negative:dup-add", function () {
  let owner = "owner_1006";
  let repo = "repo_1006";
  let name = "name_1006";
  let repository_id = 1006;
  addSelectedRepoToRepoVariable("owner_1006", "repo_1006", "name_1006", 1006);
  verifyRepositoryVariableSelectedReposExists("owner_1006", "repo_1006", "name_1006", 1006);
  tryToAddExistingRepositoryVariableSelectedRepos("owner_1006", "repo_1006", "name_1006", 1006);
  verifyRepositoryVariableSelectedReposExists("owner_1006", "repo_1006", "name_1006", 1006);
});

// Story: monitor:RepositoryVariableSelectedRepos:add
bthread("monitor:RepositoryVariableSelectedRepos:add", function () {
  while (true) {
    let ev = waitForAnyRepositoryVariableSelectedReposAdded();
    let args = Object.values(ev);
    block(matchDeletedRepositoryVariableSelectedRepos.apply(null, args), function () {
      verifyRepositoryVariableSelectedReposExists.apply(null, args);
    });
  }
});

// Story: crud:EnvironmentSecret:nondet:1:1
bthread("crud:EnvironmentSecret:nondet:1:1", function () {
  let owner = "owner_1020";
  let repo = "repo_1020";
  let environment_name = "environment_name_1020";
  let secret_name = "secret_name_1020";
  let encrypted_value = "encrypted_value_1020";
  let key_id = 1020;
  createOrUpdateEnvironmentSecret("owner_1020", "repo_1020", "environment_name_1020", "secret_name_1020", "encrypted_value_1020", 1020);
  tryToAddExistingEnvironmentSecret("owner_1020", "repo_1020", "environment_name_1020", "secret_name_1020", "encrypted_value_1020", 1020);
  verifyEnvironmentSecretExists("owner_1020", "repo_1020", "environment_name_1020", "secret_name_1020", "encrypted_value_1020", 1020);
  deleteEnvironmentSecret("owner_1020", "repo_1020", "environment_name_1020", "secret_name_1020", "encrypted_value_1020", 1020);
  tryToDeleteANonExistingEnvironmentSecret("owner_1020", "repo_1020", "environment_name_1020", "secret_name_1020", "encrypted_value_1020", 1020);
  verifyEnvironmentSecretDoesNotExist("owner_1020", "repo_1020", "environment_name_1020", "secret_name_1020", "encrypted_value_1020", 1020);
});

// Story: crud:EnvironmentSecret:nondet:1:2
bthread("crud:EnvironmentSecret:nondet:1:2", function () {
  let owner = "owner_1021";
  let repo = "repo_1021";
  let environment_name = "environment_name_1021";
  let secret_name = "secret_name_1021";
  let encrypted_value = "encrypted_value_1021";
  let key_id = 1021;
  createOrUpdateEnvironmentSecret("owner_1021", "repo_1021", "environment_name_1021", "secret_name_1021", "encrypted_value_1021", 1021);
  tryToAddExistingEnvironmentSecret("owner_1021", "repo_1021", "environment_name_1021", "secret_name_1021", "encrypted_value_1021", 1021);
  verifyEnvironmentSecretExists("owner_1021", "repo_1021", "environment_name_1021", "secret_name_1021", "encrypted_value_1021", 1021);
  deleteEnvironmentSecret("owner_1021", "repo_1021", "environment_name_1021", "secret_name_1021", "encrypted_value_1021", 1021);
  tryToDeleteANonExistingEnvironmentSecret("owner_1021", "repo_1021", "environment_name_1021", "secret_name_1021", "encrypted_value_1021", 1021);
  verifyEnvironmentSecretDoesNotExist("owner_1021", "repo_1021", "environment_name_1021", "secret_name_1021", "encrypted_value_1021", 1021);
});

// Story: crud:EnvironmentSecret:nondet:negative:dup-add
bthread("crud:EnvironmentSecret:nondet:negative:dup-add", function () {
  let owner = "owner_1026";
  let repo = "repo_1026";
  let environment_name = "environment_name_1026";
  let secret_name = "secret_name_1026";
  let encrypted_value = "encrypted_value_1026";
  let key_id = 1026;
  createOrUpdateEnvironmentSecret("owner_1026", "repo_1026", "environment_name_1026", "secret_name_1026", "encrypted_value_1026", 1026);
  verifyEnvironmentSecretExists("owner_1026", "repo_1026", "environment_name_1026", "secret_name_1026", "encrypted_value_1026", 1026);
  tryToAddExistingEnvironmentSecret("owner_1026", "repo_1026", "environment_name_1026", "secret_name_1026", "encrypted_value_1026", 1026);
  verifyEnvironmentSecretExists("owner_1026", "repo_1026", "environment_name_1026", "secret_name_1026", "encrypted_value_1026", 1026);
});

// Story: monitor:EnvironmentSecret:add
bthread("monitor:EnvironmentSecret:add", function () {
  while (true) {
    let ev = waitForAnyEnvironmentSecretAdded();
    let args = Object.values(ev);
    block(matchDeletedEnvironmentSecret.apply(null, args), function () {
      verifyEnvironmentSecretExists.apply(null, args);
    });
  }
});

// Story: crud:EnvironmentVariable:nondet:1:1
bthread("crud:EnvironmentVariable:nondet:1:1", function () {
  let owner = "owner_1030";
  let repo = "repo_1030";
  let environment_name = "environment_name_1030";
  let name = "name_1030";
  let value = "value_1030";
  createEnvironmentVariable("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
  tryToAddExistingEnvironmentVariable("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
  verifyEnvironmentVariableExists("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
  updateEnvironmentVariable("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
  deleteEnvironmentVariable("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
  tryToDeleteANonExistingEnvironmentVariable("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
  verifyEnvironmentVariableDoesNotExist("owner_1030", "repo_1030", "environment_name_1030", "name_1030", "value_1030");
});

// Story: crud:EnvironmentVariable:nondet:1:2
bthread("crud:EnvironmentVariable:nondet:1:2", function () {
  let owner = "owner_1031";
  let repo = "repo_1031";
  let environment_name = "environment_name_1031";
  let name = "name_1031";
  let value = "value_1031";
  createEnvironmentVariable("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
  tryToAddExistingEnvironmentVariable("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
  updateEnvironmentVariable("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
  verifyEnvironmentVariableExists("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
  deleteEnvironmentVariable("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
  tryToDeleteANonExistingEnvironmentVariable("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
  verifyEnvironmentVariableDoesNotExist("owner_1031", "repo_1031", "environment_name_1031", "name_1031", "value_1031");
});

// Story: crud:EnvironmentVariable:nondet:negative:dup-add
bthread("crud:EnvironmentVariable:nondet:negative:dup-add", function () {
  let owner = "owner_1036";
  let repo = "repo_1036";
  let environment_name = "environment_name_1036";
  let name = "name_1036";
  let value = "value_1036";
  createEnvironmentVariable("owner_1036", "repo_1036", "environment_name_1036", "name_1036", "value_1036");
  verifyEnvironmentVariableExists("owner_1036", "repo_1036", "environment_name_1036", "name_1036", "value_1036");
  tryToAddExistingEnvironmentVariable("owner_1036", "repo_1036", "environment_name_1036", "name_1036", "value_1036");
  verifyEnvironmentVariableExists("owner_1036", "repo_1036", "environment_name_1036", "name_1036", "value_1036");
});

// Story: crud:EnvironmentVariable:nondet:existing:update
bthread("crud:EnvironmentVariable:nondet:existing:update", function () {
  let ev = waitForAnyEnvironmentVariableAdded();
  let args = Object.values(ev);
  block(matchDeletedEnvironmentVariable.apply(null, args), function () {
    verifyEnvironmentVariableExists.apply(null, args);
    updateEnvironmentVariable.apply(null, args);
    verifyEnvironmentVariableExists.apply(null, args);
  });
});

// Story: monitor:EnvironmentVariable:add
bthread("monitor:EnvironmentVariable:add", function () {
  while (true) {
    let ev = waitForAnyEnvironmentVariableAdded();
    let args = Object.values(ev);
    block(matchDeletedEnvironmentVariable.apply(null, args), function () {
      verifyEnvironmentVariableExists.apply(null, args);
    });
  }
});

// Story: crud:Organization:read_only
bthread("crud:Organization:read_only", function () {
  let org = "org_1040";
  verifyOrganizationExists("org_1040");
});

// Story: crud:ArtifactStorageRecords:read_only
bthread("crud:ArtifactStorageRecords:read_only", function () {
  let org = "org_1060";
  let subject_digest = "subject_digest_1060";
  verifyArtifactStorageRecordsExists("org_1060", "subject_digest_1060");
});

// Story: crud:BlockedUser:nondet:1:1
bthread("crud:BlockedUser:nondet:1:1", function () {
  let org = "org_1090";
  let username = "username_1090";
  blockUser("org_1090", "username_1090");
  tryToAddExistingBlockedUser("org_1090", "username_1090");
  verifyBlockedUserExists("org_1090", "username_1090");
  unblockUser("org_1090", "username_1090");
  tryToDeleteANonExistingBlockedUser("org_1090", "username_1090");
  verifyBlockedUserDoesNotExist("org_1090", "username_1090");
});

// Story: crud:BlockedUser:nondet:1:2
bthread("crud:BlockedUser:nondet:1:2", function () {
  let org = "org_1091";
  let username = "username_1091";
  blockUser("org_1091", "username_1091");
  tryToAddExistingBlockedUser("org_1091", "username_1091");
  verifyBlockedUserExists("org_1091", "username_1091");
  unblockUser("org_1091", "username_1091");
  tryToDeleteANonExistingBlockedUser("org_1091", "username_1091");
  verifyBlockedUserDoesNotExist("org_1091", "username_1091");
});

// Story: crud:BlockedUser:nondet:negative:dup-add
bthread("crud:BlockedUser:nondet:negative:dup-add", function () {
  let org = "org_1096";
  let username = "username_1096";
  blockUser("org_1096", "username_1096");
  verifyBlockedUserExists("org_1096", "username_1096");
  tryToAddExistingBlockedUser("org_1096", "username_1096");
  verifyBlockedUserExists("org_1096", "username_1096");
});

// Story: monitor:BlockedUser:add
bthread("monitor:BlockedUser:add", function () {
  while (true) {
    let ev = waitForAnyBlockedUserAdded();
    let args = Object.values(ev);
    block(matchDeletedBlockedUser.apply(null, args), function () {
      verifyBlockedUserExists.apply(null, args);
    });
  }
});

// Story: crud:InvitationTeams:read_only
bthread("crud:InvitationTeams:read_only", function () {
  let org = "org_1100";
  let invitation_id = 1100;
  verifyInvitationTeamsExists("org_1100", 1100);
});

// Story: crud:MemberByUsername:read_only
bthread("crud:MemberByUsername:read_only", function () {
  let org = "org_1140";
  let username = "username_1140";
  verifyMemberByUsernameExists("org_1140", "username_1140");
});

// Story: crud:Membership:read_only
bthread("crud:Membership:read_only", function () {
  let org = "org_1150";
  let username = "username_1150";
  verifyMembershipExists("org_1150", "username_1150");
});

// Story: crud:OrganizationRole:read_only
bthread("crud:OrganizationRole:read_only", function () {
  let org = "org_1160";
  let role_id = 1160;
  verifyOrganizationRoleExists("org_1160", 1160);
});

// Story: crud:OrganizationRoleTeam:nondet:1:1
bthread("crud:OrganizationRoleTeam:nondet:1:1", function () {
  let org = "org_1190";
  let team_slug = "team_slug_1190";
  let role_id = 1190;
  assignTeamToOrganizationRole("org_1190", "team_slug_1190", 1190);
  tryToAddExistingOrganizationRoleTeam("org_1190", "team_slug_1190", 1190);
  verifyOrganizationRoleTeamExists("org_1190", "team_slug_1190", 1190);
  removeOrganizationRoleFromTeam("org_1190", "team_slug_1190", 1190);
  tryToDeleteANonExistingOrganizationRoleTeam("org_1190", "team_slug_1190", 1190);
  verifyOrganizationRoleTeamDoesNotExist("org_1190", "team_slug_1190", 1190);
});

// Story: crud:OrganizationRoleTeam:nondet:1:2
bthread("crud:OrganizationRoleTeam:nondet:1:2", function () {
  let org = "org_1191";
  let team_slug = "team_slug_1191";
  let role_id = 1191;
  assignTeamToOrganizationRole("org_1191", "team_slug_1191", 1191);
  tryToAddExistingOrganizationRoleTeam("org_1191", "team_slug_1191", 1191);
  verifyOrganizationRoleTeamExists("org_1191", "team_slug_1191", 1191);
  removeOrganizationRoleFromTeam("org_1191", "team_slug_1191", 1191);
  tryToDeleteANonExistingOrganizationRoleTeam("org_1191", "team_slug_1191", 1191);
  verifyOrganizationRoleTeamDoesNotExist("org_1191", "team_slug_1191", 1191);
});

// Story: crud:OrganizationRoleTeam:nondet:negative:dup-add
bthread("crud:OrganizationRoleTeam:nondet:negative:dup-add", function () {
  let org = "org_1196";
  let team_slug = "team_slug_1196";
  let role_id = 1196;
  assignTeamToOrganizationRole("org_1196", "team_slug_1196", 1196);
  verifyOrganizationRoleTeamExists("org_1196", "team_slug_1196", 1196);
  tryToAddExistingOrganizationRoleTeam("org_1196", "team_slug_1196", 1196);
  verifyOrganizationRoleTeamExists("org_1196", "team_slug_1196", 1196);
});

// Story: monitor:OrganizationRoleTeam:add
bthread("monitor:OrganizationRoleTeam:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationRoleTeamAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganizationRoleTeam.apply(null, args), function () {
      verifyOrganizationRoleTeamExists.apply(null, args);
    });
  }
});

// Story: crud:OrganizationRoleUser:nondet:1:1
bthread("crud:OrganizationRoleUser:nondet:1:1", function () {
  let org = "org_1210";
  let username = "username_1210";
  let role_id = 1210;
  assignUserToOrganizationRole("org_1210", "username_1210", 1210);
  tryToAddExistingOrganizationRoleUser("org_1210", "username_1210", 1210);
  verifyOrganizationRoleUserExists("org_1210", "username_1210", 1210);
  removeOrganizationRoleFromUser("org_1210", "username_1210", 1210);
  tryToDeleteANonExistingOrganizationRoleUser("org_1210", "username_1210", 1210);
  verifyOrganizationRoleUserDoesNotExist("org_1210", "username_1210", 1210);
});

// Story: crud:OrganizationRoleUser:nondet:1:2
bthread("crud:OrganizationRoleUser:nondet:1:2", function () {
  let org = "org_1211";
  let username = "username_1211";
  let role_id = 1211;
  assignUserToOrganizationRole("org_1211", "username_1211", 1211);
  tryToAddExistingOrganizationRoleUser("org_1211", "username_1211", 1211);
  verifyOrganizationRoleUserExists("org_1211", "username_1211", 1211);
  removeOrganizationRoleFromUser("org_1211", "username_1211", 1211);
  tryToDeleteANonExistingOrganizationRoleUser("org_1211", "username_1211", 1211);
  verifyOrganizationRoleUserDoesNotExist("org_1211", "username_1211", 1211);
});

// Story: crud:OrganizationRoleUser:nondet:negative:dup-add
bthread("crud:OrganizationRoleUser:nondet:negative:dup-add", function () {
  let org = "org_1216";
  let username = "username_1216";
  let role_id = 1216;
  assignUserToOrganizationRole("org_1216", "username_1216", 1216);
  verifyOrganizationRoleUserExists("org_1216", "username_1216", 1216);
  tryToAddExistingOrganizationRoleUser("org_1216", "username_1216", 1216);
  verifyOrganizationRoleUserExists("org_1216", "username_1216", 1216);
});

// Story: monitor:OrganizationRoleUser:add
bthread("monitor:OrganizationRoleUser:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationRoleUserAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganizationRoleUser.apply(null, args), function () {
      verifyOrganizationRoleUserExists.apply(null, args);
    });
  }
});

// Story: crud:OutsideCollaborator:nondet:1:1
bthread("crud:OutsideCollaborator:nondet:1:1", function () {
  let org = "org_1230";
  let username = "username_1230";
  convertMemberToOutsideCollaborator("org_1230", "username_1230");
  tryToAddExistingOutsideCollaborator("org_1230", "username_1230");
  verifyOutsideCollaboratorExists("org_1230", "username_1230");
  removeOutsideCollaborator("org_1230", "username_1230");
  tryToDeleteANonExistingOutsideCollaborator("org_1230", "username_1230");
  verifyOutsideCollaboratorDoesNotExist("org_1230", "username_1230");
});

// Story: crud:OutsideCollaborator:nondet:1:2
bthread("crud:OutsideCollaborator:nondet:1:2", function () {
  let org = "org_1231";
  let username = "username_1231";
  convertMemberToOutsideCollaborator("org_1231", "username_1231");
  tryToAddExistingOutsideCollaborator("org_1231", "username_1231");
  verifyOutsideCollaboratorExists("org_1231", "username_1231");
  removeOutsideCollaborator("org_1231", "username_1231");
  tryToDeleteANonExistingOutsideCollaborator("org_1231", "username_1231");
  verifyOutsideCollaboratorDoesNotExist("org_1231", "username_1231");
});

// Story: crud:OutsideCollaborator:nondet:negative:dup-add
bthread("crud:OutsideCollaborator:nondet:negative:dup-add", function () {
  let org = "org_1236";
  let username = "username_1236";
  convertMemberToOutsideCollaborator("org_1236", "username_1236");
  verifyOutsideCollaboratorExists("org_1236", "username_1236");
  tryToAddExistingOutsideCollaborator("org_1236", "username_1236");
  verifyOutsideCollaboratorExists("org_1236", "username_1236");
});

// Story: monitor:OutsideCollaborator:add
bthread("monitor:OutsideCollaborator:add", function () {
  while (true) {
    let ev = waitForAnyOutsideCollaboratorAdded();
    let args = Object.values(ev);
    block(matchDeletedOutsideCollaborator.apply(null, args), function () {
      verifyOutsideCollaboratorExists.apply(null, args);
    });
  }
});

// Story: crud:WebhookById:read_only
bthread("crud:WebhookById:read_only", function () {
  let org = "org_1240";
  let hook_id = 1240;
  verifyWebhookByIdExists("org_1240", 1240);
});

// Story: crud:CustomPropertyByName:read_only
bthread("crud:CustomPropertyByName:read_only", function () {
  let org = "org_1340";
  let custom_property_name = "custom_property_name_1340";
  verifyCustomPropertyByNameExists("org_1340", "custom_property_name_1340");
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = "org_1360";
  let username = "username_1360";
  setPublicMembershipForUser("org_1360", "username_1360");
  tryToAddExistingPublicMember("org_1360", "username_1360");
  verifyPublicMemberExists("org_1360", "username_1360");
  removePublicMembershipForUser("org_1360", "username_1360");
  tryToDeleteANonExistingPublicMember("org_1360", "username_1360");
  verifyPublicMemberDoesNotExist("org_1360", "username_1360");
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = "org_1361";
  let username = "username_1361";
  setPublicMembershipForUser("org_1361", "username_1361");
  tryToAddExistingPublicMember("org_1361", "username_1361");
  verifyPublicMemberExists("org_1361", "username_1361");
  removePublicMembershipForUser("org_1361", "username_1361");
  tryToDeleteANonExistingPublicMember("org_1361", "username_1361");
  verifyPublicMemberDoesNotExist("org_1361", "username_1361");
});

// Story: crud:PublicMember:nondet:negative:dup-add
bthread("crud:PublicMember:nondet:negative:dup-add", function () {
  let org = "org_1366";
  let username = "username_1366";
  setPublicMembershipForUser("org_1366", "username_1366");
  verifyPublicMemberExists("org_1366", "username_1366");
  tryToAddExistingPublicMember("org_1366", "username_1366");
  verifyPublicMemberExists("org_1366", "username_1366");
});

// Story: monitor:PublicMember:add
bthread("monitor:PublicMember:add", function () {
  while (true) {
    let ev = waitForAnyPublicMemberAdded();
    let args = Object.values(ev);
    block(matchDeletedPublicMember.apply(null, args), function () {
      verifyPublicMemberExists.apply(null, args);
    });
  }
});

// Story: crud:Codespace:nondet:1:1
bthread("crud:Codespace:nondet:1:1", function () {
  let repository_id = 1370;
  let ref = "ref_1370";
  let location = "location_1370";
  let geo = "geo_1370";
  let client_ip = "client_ip_1370";
  let machine = "machine_1370";
  let devcontainer_path = "devcontainer_path_1370";
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_1370";
  let working_directory = "working_directory_1370";
  let idle_timeout_minutes = 1370;
  let display_name = "display_name_1370";
  let retention_period_minutes = "retention_period_minutes_1370";
  let codespace_name = "codespace_name_1370";
  createCodespaceForUser(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
  tryToAddExistingCodespace(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
  verifyCodespaceExists(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
  updateCodespaceForUser(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
  deleteCodespaceForUser(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
  tryToDeleteANonExistingCodespace(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
  verifyCodespaceDoesNotExist(1370, "ref_1370", "location_1370", "geo_1370", "client_ip_1370", "machine_1370", "devcontainer_path_1370", "multi_repo_permissions_opt_out_1370", "working_directory_1370", 1370, "display_name_1370", "retention_period_minutes_1370", "codespace_name_1370");
});

// Story: crud:Codespace:nondet:1:2
bthread("crud:Codespace:nondet:1:2", function () {
  let repository_id = 1371;
  let ref = "ref_1371";
  let location = "location_1371";
  let geo = "geo_1371";
  let client_ip = "client_ip_1371";
  let machine = "machine_1371";
  let devcontainer_path = "devcontainer_path_1371";
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_1371";
  let working_directory = "working_directory_1371";
  let idle_timeout_minutes = 1371;
  let display_name = "display_name_1371";
  let retention_period_minutes = "retention_period_minutes_1371";
  let codespace_name = "codespace_name_1371";
  createCodespaceForUser(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
  tryToAddExistingCodespace(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
  updateCodespaceForUser(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
  verifyCodespaceExists(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
  deleteCodespaceForUser(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
  tryToDeleteANonExistingCodespace(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
  verifyCodespaceDoesNotExist(1371, "ref_1371", "location_1371", "geo_1371", "client_ip_1371", "machine_1371", "devcontainer_path_1371", "multi_repo_permissions_opt_out_1371", "working_directory_1371", 1371, "display_name_1371", "retention_period_minutes_1371", "codespace_name_1371");
});

// Story: crud:Codespace:nondet:negative:dup-add
bthread("crud:Codespace:nondet:negative:dup-add", function () {
  let repository_id = 1376;
  let ref = "ref_1376";
  let location = "location_1376";
  let geo = "geo_1376";
  let client_ip = "client_ip_1376";
  let machine = "machine_1376";
  let devcontainer_path = "devcontainer_path_1376";
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_1376";
  let working_directory = "working_directory_1376";
  let idle_timeout_minutes = 1376;
  let display_name = "display_name_1376";
  let retention_period_minutes = "retention_period_minutes_1376";
  let codespace_name = "codespace_name_1376";
  createCodespaceForUser(1376, "ref_1376", "location_1376", "geo_1376", "client_ip_1376", "machine_1376", "devcontainer_path_1376", "multi_repo_permissions_opt_out_1376", "working_directory_1376", 1376, "display_name_1376", "retention_period_minutes_1376", "codespace_name_1376");
  verifyCodespaceExists(1376, "ref_1376", "location_1376", "geo_1376", "client_ip_1376", "machine_1376", "devcontainer_path_1376", "multi_repo_permissions_opt_out_1376", "working_directory_1376", 1376, "display_name_1376", "retention_period_minutes_1376", "codespace_name_1376");
  tryToAddExistingCodespace(1376, "ref_1376", "location_1376", "geo_1376", "client_ip_1376", "machine_1376", "devcontainer_path_1376", "multi_repo_permissions_opt_out_1376", "working_directory_1376", 1376, "display_name_1376", "retention_period_minutes_1376", "codespace_name_1376");
  verifyCodespaceExists(1376, "ref_1376", "location_1376", "geo_1376", "client_ip_1376", "machine_1376", "devcontainer_path_1376", "multi_repo_permissions_opt_out_1376", "working_directory_1376", 1376, "display_name_1376", "retention_period_minutes_1376", "codespace_name_1376");
});

// Story: crud:Codespace:nondet:existing:update
bthread("crud:Codespace:nondet:existing:update", function () {
  let ev = waitForAnyCodespaceAdded();
  let args = Object.values(ev);
  block(matchDeletedCodespace.apply(null, args), function () {
    verifyCodespaceExists.apply(null, args);
    updateCodespaceForUser.apply(null, args);
    verifyCodespaceExists.apply(null, args);
  });
});

// Story: monitor:Codespace:add
bthread("monitor:Codespace:add", function () {
  while (true) {
    let ev = waitForAnyCodespaceAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespace.apply(null, args), function () {
      verifyCodespaceExists.apply(null, args);
    });
  }
});

// Story: crud:CodespaceInRepo:read_only
bthread("crud:CodespaceInRepo:read_only", function () {
  let owner = "owner_1380";
  let repo = "repo_1380";
  let ref = "ref_1380";
  let location = "location_1380";
  let geo = "geo_1380";
  let client_ip = "client_ip_1380";
  let machine = "machine_1380";
  let devcontainer_path = "devcontainer_path_1380";
  let multi_repo_permissions_opt_out = "multi_repo_permissions_opt_out_1380";
  let working_directory = "working_directory_1380";
  let idle_timeout_minutes = 1380;
  let display_name = "display_name_1380";
  let retention_period_minutes = "retention_period_minutes_1380";
  verifyCodespaceInRepoExists("owner_1380", "repo_1380", "ref_1380", "location_1380", "geo_1380", "client_ip_1380", "machine_1380", "devcontainer_path_1380", "multi_repo_permissions_opt_out_1380", "working_directory_1380", 1380, "display_name_1380", "retention_period_minutes_1380");
});

// Story: crud:CodespacesAccessUsers:nondet:1:1
bthread("crud:CodespacesAccessUsers:nondet:1:1", function () {
  let org = "org_1420";
  let selected_usernames = "selected_usernames_1420";
  addUsersToCodespacesAccessForOrg("org_1420", "selected_usernames_1420");
  tryToAddExistingCodespacesAccessUsers("org_1420", "selected_usernames_1420");
  verifyCodespacesAccessUsersExists("org_1420", "selected_usernames_1420");
  removeUsersFromCodespacesAccessForOrg("org_1420", "selected_usernames_1420");
  tryToDeleteANonExistingCodespacesAccessUsers("org_1420", "selected_usernames_1420");
  verifyCodespacesAccessUsersDoesNotExist("org_1420", "selected_usernames_1420");
});

// Story: crud:CodespacesAccessUsers:nondet:1:2
bthread("crud:CodespacesAccessUsers:nondet:1:2", function () {
  let org = "org_1421";
  let selected_usernames = "selected_usernames_1421";
  addUsersToCodespacesAccessForOrg("org_1421", "selected_usernames_1421");
  tryToAddExistingCodespacesAccessUsers("org_1421", "selected_usernames_1421");
  verifyCodespacesAccessUsersExists("org_1421", "selected_usernames_1421");
  removeUsersFromCodespacesAccessForOrg("org_1421", "selected_usernames_1421");
  tryToDeleteANonExistingCodespacesAccessUsers("org_1421", "selected_usernames_1421");
  verifyCodespacesAccessUsersDoesNotExist("org_1421", "selected_usernames_1421");
});

// Story: crud:CodespacesAccessUsers:nondet:negative:dup-add
bthread("crud:CodespacesAccessUsers:nondet:negative:dup-add", function () {
  let org = "org_1426";
  let selected_usernames = "selected_usernames_1426";
  addUsersToCodespacesAccessForOrg("org_1426", "selected_usernames_1426");
  verifyCodespacesAccessUsersExists("org_1426", "selected_usernames_1426");
  tryToAddExistingCodespacesAccessUsers("org_1426", "selected_usernames_1426");
  verifyCodespacesAccessUsersExists("org_1426", "selected_usernames_1426");
});

// Story: monitor:CodespacesAccessUsers:add
bthread("monitor:CodespacesAccessUsers:add", function () {
  while (true) {
    let ev = waitForAnyCodespacesAccessUsersAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespacesAccessUsers.apply(null, args), function () {
      verifyCodespacesAccessUsersExists.apply(null, args);
    });
  }
});

// Story: crud:CodespaceSecretOrg:nondet:1:1
bthread("crud:CodespaceSecretOrg:nondet:1:1", function () {
  let org = "org_1430";
  let secret_name = "secret_name_1430";
  let encrypted_value = "encrypted_value_1430";
  let key_id = 1430;
  let visibility = "visibility_1430";
  let selected_repository_ids = 1430;
  createOrUpdateOrgSecret("org_1430", "secret_name_1430", "encrypted_value_1430", 1430, "visibility_1430", 1430);
  tryToAddExistingCodespaceSecretOrg("org_1430", "secret_name_1430", "encrypted_value_1430", 1430, "visibility_1430", 1430);
  verifyCodespaceSecretOrgExists("org_1430", "secret_name_1430", "encrypted_value_1430", 1430, "visibility_1430", 1430);
  deleteOrgSecret("org_1430", "secret_name_1430", "encrypted_value_1430", 1430, "visibility_1430", 1430);
  tryToDeleteANonExistingCodespaceSecretOrg("org_1430", "secret_name_1430", "encrypted_value_1430", 1430, "visibility_1430", 1430);
  verifyCodespaceSecretOrgDoesNotExist("org_1430", "secret_name_1430", "encrypted_value_1430", 1430, "visibility_1430", 1430);
});

// Story: crud:CodespaceSecretOrg:nondet:1:2
bthread("crud:CodespaceSecretOrg:nondet:1:2", function () {
  let org = "org_1431";
  let secret_name = "secret_name_1431";
  let encrypted_value = "encrypted_value_1431";
  let key_id = 1431;
  let visibility = "visibility_1431";
  let selected_repository_ids = 1431;
  createOrUpdateOrgSecret("org_1431", "secret_name_1431", "encrypted_value_1431", 1431, "visibility_1431", 1431);
  tryToAddExistingCodespaceSecretOrg("org_1431", "secret_name_1431", "encrypted_value_1431", 1431, "visibility_1431", 1431);
  verifyCodespaceSecretOrgExists("org_1431", "secret_name_1431", "encrypted_value_1431", 1431, "visibility_1431", 1431);
  deleteOrgSecret("org_1431", "secret_name_1431", "encrypted_value_1431", 1431, "visibility_1431", 1431);
  tryToDeleteANonExistingCodespaceSecretOrg("org_1431", "secret_name_1431", "encrypted_value_1431", 1431, "visibility_1431", 1431);
  verifyCodespaceSecretOrgDoesNotExist("org_1431", "secret_name_1431", "encrypted_value_1431", 1431, "visibility_1431", 1431);
});

// Story: crud:CodespaceSecretOrg:nondet:negative:dup-add
bthread("crud:CodespaceSecretOrg:nondet:negative:dup-add", function () {
  let org = "org_1436";
  let secret_name = "secret_name_1436";
  let encrypted_value = "encrypted_value_1436";
  let key_id = 1436;
  let visibility = "visibility_1436";
  let selected_repository_ids = 1436;
  createOrUpdateOrgSecret("org_1436", "secret_name_1436", "encrypted_value_1436", 1436, "visibility_1436", 1436);
  verifyCodespaceSecretOrgExists("org_1436", "secret_name_1436", "encrypted_value_1436", 1436, "visibility_1436", 1436);
  tryToAddExistingCodespaceSecretOrg("org_1436", "secret_name_1436", "encrypted_value_1436", 1436, "visibility_1436", 1436);
  verifyCodespaceSecretOrgExists("org_1436", "secret_name_1436", "encrypted_value_1436", 1436, "visibility_1436", 1436);
});

// Story: monitor:CodespaceSecretOrg:add
bthread("monitor:CodespaceSecretOrg:add", function () {
  while (true) {
    let ev = waitForAnyCodespaceSecretOrgAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespaceSecretOrg.apply(null, args), function () {
      verifyCodespaceSecretOrgExists.apply(null, args);
    });
  }
});

// Story: crud:CodespaceSecretOrgSelectedRepos:read_only
bthread("crud:CodespaceSecretOrgSelectedRepos:read_only", function () {
  let org = "org_1440";
  let secret_name = "secret_name_1440";
  let selected_repository_ids = 1440;
  verifyCodespaceSecretOrgSelectedReposExists("org_1440", "secret_name_1440", 1440);
});

// Story: crud:CodespaceSecretOrgSelectedRepo:nondet:1:1
bthread("crud:CodespaceSecretOrgSelectedRepo:nondet:1:1", function () {
  let org = "org_1450";
  let secret_name = "secret_name_1450";
  let repository_id = 1450;
  addSelectedRepoToOrgSecret("org_1450", "secret_name_1450", 1450);
  tryToAddExistingCodespaceSecretOrgSelectedRepo("org_1450", "secret_name_1450", 1450);
  verifyCodespaceSecretOrgSelectedRepoExists("org_1450", "secret_name_1450", 1450);
  removeSelectedRepoFromOrgSecret("org_1450", "secret_name_1450", 1450);
  tryToDeleteANonExistingCodespaceSecretOrgSelectedRepo("org_1450", "secret_name_1450", 1450);
  verifyCodespaceSecretOrgSelectedRepoDoesNotExist("org_1450", "secret_name_1450", 1450);
});

// Story: crud:CodespaceSecretOrgSelectedRepo:nondet:1:2
bthread("crud:CodespaceSecretOrgSelectedRepo:nondet:1:2", function () {
  let org = "org_1451";
  let secret_name = "secret_name_1451";
  let repository_id = 1451;
  addSelectedRepoToOrgSecret("org_1451", "secret_name_1451", 1451);
  tryToAddExistingCodespaceSecretOrgSelectedRepo("org_1451", "secret_name_1451", 1451);
  verifyCodespaceSecretOrgSelectedRepoExists("org_1451", "secret_name_1451", 1451);
  removeSelectedRepoFromOrgSecret("org_1451", "secret_name_1451", 1451);
  tryToDeleteANonExistingCodespaceSecretOrgSelectedRepo("org_1451", "secret_name_1451", 1451);
  verifyCodespaceSecretOrgSelectedRepoDoesNotExist("org_1451", "secret_name_1451", 1451);
});

// Story: crud:CodespaceSecretOrgSelectedRepo:nondet:negative:dup-add
bthread("crud:CodespaceSecretOrgSelectedRepo:nondet:negative:dup-add", function () {
  let org = "org_1456";
  let secret_name = "secret_name_1456";
  let repository_id = 1456;
  addSelectedRepoToOrgSecret("org_1456", "secret_name_1456", 1456);
  verifyCodespaceSecretOrgSelectedRepoExists("org_1456", "secret_name_1456", 1456);
  tryToAddExistingCodespaceSecretOrgSelectedRepo("org_1456", "secret_name_1456", 1456);
  verifyCodespaceSecretOrgSelectedRepoExists("org_1456", "secret_name_1456", 1456);
});

// Story: monitor:CodespaceSecretOrgSelectedRepo:add
bthread("monitor:CodespaceSecretOrgSelectedRepo:add", function () {
  while (true) {
    let ev = waitForAnyCodespaceSecretOrgSelectedRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespaceSecretOrgSelectedRepo.apply(null, args), function () {
      verifyCodespaceSecretOrgSelectedRepoExists.apply(null, args);
    });
  }
});

// Story: crud:CodespaceSecretRepo:nondet:1:1
bthread("crud:CodespaceSecretRepo:nondet:1:1", function () {
  let owner = "owner_1460";
  let repo = "repo_1460";
  let secret_name = "secret_name_1460";
  let encrypted_value = "encrypted_value_1460";
  let key_id = 1460;
  createOrUpdateRepoSecret("owner_1460", "repo_1460", "secret_name_1460", "encrypted_value_1460", 1460);
  tryToAddExistingCodespaceSecretRepo("owner_1460", "repo_1460", "secret_name_1460", "encrypted_value_1460", 1460);
  verifyCodespaceSecretRepoExists("owner_1460", "repo_1460", "secret_name_1460", "encrypted_value_1460", 1460);
  deleteRepoSecret("owner_1460", "repo_1460", "secret_name_1460", "encrypted_value_1460", 1460);
  tryToDeleteANonExistingCodespaceSecretRepo("owner_1460", "repo_1460", "secret_name_1460", "encrypted_value_1460", 1460);
  verifyCodespaceSecretRepoDoesNotExist("owner_1460", "repo_1460", "secret_name_1460", "encrypted_value_1460", 1460);
});

// Story: crud:CodespaceSecretRepo:nondet:1:2
bthread("crud:CodespaceSecretRepo:nondet:1:2", function () {
  let owner = "owner_1461";
  let repo = "repo_1461";
  let secret_name = "secret_name_1461";
  let encrypted_value = "encrypted_value_1461";
  let key_id = 1461;
  createOrUpdateRepoSecret("owner_1461", "repo_1461", "secret_name_1461", "encrypted_value_1461", 1461);
  tryToAddExistingCodespaceSecretRepo("owner_1461", "repo_1461", "secret_name_1461", "encrypted_value_1461", 1461);
  verifyCodespaceSecretRepoExists("owner_1461", "repo_1461", "secret_name_1461", "encrypted_value_1461", 1461);
  deleteRepoSecret("owner_1461", "repo_1461", "secret_name_1461", "encrypted_value_1461", 1461);
  tryToDeleteANonExistingCodespaceSecretRepo("owner_1461", "repo_1461", "secret_name_1461", "encrypted_value_1461", 1461);
  verifyCodespaceSecretRepoDoesNotExist("owner_1461", "repo_1461", "secret_name_1461", "encrypted_value_1461", 1461);
});

// Story: crud:CodespaceSecretRepo:nondet:negative:dup-add
bthread("crud:CodespaceSecretRepo:nondet:negative:dup-add", function () {
  let owner = "owner_1466";
  let repo = "repo_1466";
  let secret_name = "secret_name_1466";
  let encrypted_value = "encrypted_value_1466";
  let key_id = 1466;
  createOrUpdateRepoSecret("owner_1466", "repo_1466", "secret_name_1466", "encrypted_value_1466", 1466);
  verifyCodespaceSecretRepoExists("owner_1466", "repo_1466", "secret_name_1466", "encrypted_value_1466", 1466);
  tryToAddExistingCodespaceSecretRepo("owner_1466", "repo_1466", "secret_name_1466", "encrypted_value_1466", 1466);
  verifyCodespaceSecretRepoExists("owner_1466", "repo_1466", "secret_name_1466", "encrypted_value_1466", 1466);
});

// Story: monitor:CodespaceSecretRepo:add
bthread("monitor:CodespaceSecretRepo:add", function () {
  while (true) {
    let ev = waitForAnyCodespaceSecretRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespaceSecretRepo.apply(null, args), function () {
      verifyCodespaceSecretRepoExists.apply(null, args);
    });
  }
});

// Story: crud:CodespaceSecretUser:nondet:1:1
bthread("crud:CodespaceSecretUser:nondet:1:1", function () {
  let secret_name = "secret_name_1470";
  let encrypted_value = "encrypted_value_1470";
  let key_id = 1470;
  let selected_repository_ids = 1470;
  createOrUpdateUserSecret("secret_name_1470", "encrypted_value_1470", 1470, 1470);
  tryToAddExistingCodespaceSecretUser("secret_name_1470", "encrypted_value_1470", 1470, 1470);
  verifyCodespaceSecretUserExists("secret_name_1470", "encrypted_value_1470", 1470, 1470);
  deleteUserSecret("secret_name_1470", "encrypted_value_1470", 1470, 1470);
  tryToDeleteANonExistingCodespaceSecretUser("secret_name_1470", "encrypted_value_1470", 1470, 1470);
  verifyCodespaceSecretUserDoesNotExist("secret_name_1470", "encrypted_value_1470", 1470, 1470);
});

// Story: crud:CodespaceSecretUser:nondet:1:2
bthread("crud:CodespaceSecretUser:nondet:1:2", function () {
  let secret_name = "secret_name_1471";
  let encrypted_value = "encrypted_value_1471";
  let key_id = 1471;
  let selected_repository_ids = 1471;
  createOrUpdateUserSecret("secret_name_1471", "encrypted_value_1471", 1471, 1471);
  tryToAddExistingCodespaceSecretUser("secret_name_1471", "encrypted_value_1471", 1471, 1471);
  verifyCodespaceSecretUserExists("secret_name_1471", "encrypted_value_1471", 1471, 1471);
  deleteUserSecret("secret_name_1471", "encrypted_value_1471", 1471, 1471);
  tryToDeleteANonExistingCodespaceSecretUser("secret_name_1471", "encrypted_value_1471", 1471, 1471);
  verifyCodespaceSecretUserDoesNotExist("secret_name_1471", "encrypted_value_1471", 1471, 1471);
});

// Story: crud:CodespaceSecretUser:nondet:negative:dup-add
bthread("crud:CodespaceSecretUser:nondet:negative:dup-add", function () {
  let secret_name = "secret_name_1476";
  let encrypted_value = "encrypted_value_1476";
  let key_id = 1476;
  let selected_repository_ids = 1476;
  createOrUpdateUserSecret("secret_name_1476", "encrypted_value_1476", 1476, 1476);
  verifyCodespaceSecretUserExists("secret_name_1476", "encrypted_value_1476", 1476, 1476);
  tryToAddExistingCodespaceSecretUser("secret_name_1476", "encrypted_value_1476", 1476, 1476);
  verifyCodespaceSecretUserExists("secret_name_1476", "encrypted_value_1476", 1476, 1476);
});

// Story: monitor:CodespaceSecretUser:add
bthread("monitor:CodespaceSecretUser:add", function () {
  while (true) {
    let ev = waitForAnyCodespaceSecretUserAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespaceSecretUser.apply(null, args), function () {
      verifyCodespaceSecretUserExists.apply(null, args);
    });
  }
});

// Story: crud:CodespaceSecretUserSelectedRepos:read_only
bthread("crud:CodespaceSecretUserSelectedRepos:read_only", function () {
  let secret_name = "secret_name_1480";
  let selected_repository_ids = 1480;
  verifyCodespaceSecretUserSelectedReposExists("secret_name_1480", 1480);
});

// Story: crud:CodespaceSecretUserSelectedRepo:nondet:1:1
bthread("crud:CodespaceSecretUserSelectedRepo:nondet:1:1", function () {
  let secret_name = "secret_name_1490";
  let repository_id = 1490;
  addSelectedRepoToUserSecret("secret_name_1490", 1490);
  tryToAddExistingCodespaceSecretUserSelectedRepo("secret_name_1490", 1490);
  verifyCodespaceSecretUserSelectedRepoExists("secret_name_1490", 1490);
  removeSelectedRepoFromUserSecret("secret_name_1490", 1490);
  tryToDeleteANonExistingCodespaceSecretUserSelectedRepo("secret_name_1490", 1490);
  verifyCodespaceSecretUserSelectedRepoDoesNotExist("secret_name_1490", 1490);
});

// Story: crud:CodespaceSecretUserSelectedRepo:nondet:1:2
bthread("crud:CodespaceSecretUserSelectedRepo:nondet:1:2", function () {
  let secret_name = "secret_name_1491";
  let repository_id = 1491;
  addSelectedRepoToUserSecret("secret_name_1491", 1491);
  tryToAddExistingCodespaceSecretUserSelectedRepo("secret_name_1491", 1491);
  verifyCodespaceSecretUserSelectedRepoExists("secret_name_1491", 1491);
  removeSelectedRepoFromUserSecret("secret_name_1491", 1491);
  tryToDeleteANonExistingCodespaceSecretUserSelectedRepo("secret_name_1491", 1491);
  verifyCodespaceSecretUserSelectedRepoDoesNotExist("secret_name_1491", 1491);
});

// Story: crud:CodespaceSecretUserSelectedRepo:nondet:negative:dup-add
bthread("crud:CodespaceSecretUserSelectedRepo:nondet:negative:dup-add", function () {
  let secret_name = "secret_name_1496";
  let repository_id = 1496;
  addSelectedRepoToUserSecret("secret_name_1496", 1496);
  verifyCodespaceSecretUserSelectedRepoExists("secret_name_1496", 1496);
  tryToAddExistingCodespaceSecretUserSelectedRepo("secret_name_1496", 1496);
  verifyCodespaceSecretUserSelectedRepoExists("secret_name_1496", 1496);
});

// Story: monitor:CodespaceSecretUserSelectedRepo:add
bthread("monitor:CodespaceSecretUserSelectedRepo:add", function () {
  while (true) {
    let ev = waitForAnyCodespaceSecretUserSelectedRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedCodespaceSecretUserSelectedRepo.apply(null, args), function () {
      verifyCodespaceSecretUserSelectedRepoExists.apply(null, args);
    });
  }
});

// Story: crud:User:read_only
bthread("crud:User:read_only", function () {
  let username = "username_1500";
  verifyUserExists("username_1500");
});

// Story: crud:AuthenticatedUser:read_only
bthread("crud:AuthenticatedUser:read_only", function () {

  verifyAuthenticatedUserExists();
});

// Story: crud:Block:nondet:1:1
bthread("crud:Block:nondet:1:1", function () {
  let username = "username_1520";
  blockUser("username_1520");
  tryToAddExistingBlock("username_1520");
  verifyBlockExists("username_1520");
  unblockUser("username_1520");
  tryToDeleteANonExistingBlock("username_1520");
  verifyBlockDoesNotExist("username_1520");
});

// Story: crud:Block:nondet:1:2
bthread("crud:Block:nondet:1:2", function () {
  let username = "username_1521";
  blockUser("username_1521");
  tryToAddExistingBlock("username_1521");
  verifyBlockExists("username_1521");
  unblockUser("username_1521");
  tryToDeleteANonExistingBlock("username_1521");
  verifyBlockDoesNotExist("username_1521");
});

// Story: crud:Block:nondet:negative:dup-add
bthread("crud:Block:nondet:negative:dup-add", function () {
  let username = "username_1526";
  blockUser("username_1526");
  verifyBlockExists("username_1526");
  tryToAddExistingBlock("username_1526");
  verifyBlockExists("username_1526");
});

// Story: monitor:Block:add
bthread("monitor:Block:add", function () {
  while (true) {
    let ev = waitForAnyBlockAdded();
    let args = Object.values(ev);
    block(matchDeletedBlock.apply(null, args), function () {
      verifyBlockExists.apply(null, args);
    });
  }
});

// Story: crud:Email:nondet:1:1
bthread("crud:Email:nondet:1:1", function () {

  addEmail();
  tryToAddExistingEmail();
  verifyEmailExists();
  deleteEmail();
  tryToDeleteANonExistingEmail();
  verifyEmailDoesNotExist();
});

// Story: crud:Email:nondet:1:2
bthread("crud:Email:nondet:1:2", function () {

  addEmail();
  tryToAddExistingEmail();
  verifyEmailExists();
  deleteEmail();
  tryToDeleteANonExistingEmail();
  verifyEmailDoesNotExist();
});

// Story: crud:Email:nondet:negative:dup-add
bthread("crud:Email:nondet:negative:dup-add", function () {

  addEmail();
  verifyEmailExists();
  tryToAddExistingEmail();
  verifyEmailExists();
});

// Story: monitor:Email:add
bthread("monitor:Email:add", function () {
  while (true) {
    let ev = waitForAnyEmailAdded();
    let args = Object.values(ev);
    block(matchDeletedEmail.apply(null, args), function () {
      verifyEmailExists.apply(null, args);
    });
  }
});

// Story: crud:GpgKey:read_only
bthread("crud:GpgKey:read_only", function () {
  let gpg_key_id = 1570;
  verifyGpgKeyExists(1570);
});

// Story: crud:PublicSshKey:read_only
bthread("crud:PublicSshKey:read_only", function () {
  let key_id = 1580;
  verifyPublicSshKeyExists(1580);
});

// Story: crud:SocialAccount:nondet:1:1
bthread("crud:SocialAccount:nondet:1:1", function () {

  addSocialAccountForAuthenticatedUser();
  tryToAddExistingSocialAccount();
  verifySocialAccountExists();
  deleteSocialAccountForAuthenticatedUser();
  tryToDeleteANonExistingSocialAccount();
  verifySocialAccountDoesNotExist();
});

// Story: crud:SocialAccount:nondet:1:2
bthread("crud:SocialAccount:nondet:1:2", function () {

  addSocialAccountForAuthenticatedUser();
  tryToAddExistingSocialAccount();
  verifySocialAccountExists();
  deleteSocialAccountForAuthenticatedUser();
  tryToDeleteANonExistingSocialAccount();
  verifySocialAccountDoesNotExist();
});

// Story: crud:SocialAccount:nondet:negative:dup-add
bthread("crud:SocialAccount:nondet:negative:dup-add", function () {

  addSocialAccountForAuthenticatedUser();
  verifySocialAccountExists();
  tryToAddExistingSocialAccount();
  verifySocialAccountExists();
});

// Story: monitor:SocialAccount:add
bthread("monitor:SocialAccount:add", function () {
  while (true) {
    let ev = waitForAnySocialAccountAdded();
    let args = Object.values(ev);
    block(matchDeletedSocialAccount.apply(null, args), function () {
      verifySocialAccountExists.apply(null, args);
    });
  }
});

// Story: crud:SshSigningKey:read_only
bthread("crud:SshSigningKey:read_only", function () {
  let ssh_signing_key_id = 1610;
  verifySshSigningKeyExists(1610);
});

// Story: crud:UserById:read_only
bthread("crud:UserById:read_only", function () {
  let account_id = 1620;
  verifyUserByIdExists(1620);
});

// Story: crud:UserHovercard:read_only
bthread("crud:UserHovercard:read_only", function () {
  let username = "username_1680";
  verifyUserHovercardExists("username_1680");
});

// Story: crud:App:read_only
bthread("crud:App:read_only", function () {

  verifyAppExists();
});

// Story: crud:AppWebhookConfig:read_only
bthread("crud:AppWebhookConfig:read_only", function () {

  verifyAppWebhookConfigExists();
});

// Story: crud:AppWebhookDelivery:read_only
bthread("crud:AppWebhookDelivery:read_only", function () {
  let delivery_id = 1720;
  verifyAppWebhookDeliveryExists(1720);
});

// Story: crud:AppWebhookDeliveries:read_only
bthread("crud:AppWebhookDeliveries:read_only", function () {

  verifyAppWebhookDeliveriesExists();
});

// Story: crud:AppInstallationRequest:read_only
bthread("crud:AppInstallationRequest:read_only", function () {

  verifyAppInstallationRequestExists();
});

// Story: crud:AppInstallation:nondet:1:1
bthread("crud:AppInstallation:nondet:1:1", function () {
  let installation_id = 1750;
  createInstallationAccessToken(1750);
  tryToAddExistingAppInstallation(1750);
  verifyAppInstallationExists(1750);
  suspendInstallation(1750);
  deleteInstallation(1750);
  tryToDeleteANonExistingAppInstallation(1750);
  verifyAppInstallationDoesNotExist(1750);
});

// Story: crud:AppInstallation:nondet:1:2
bthread("crud:AppInstallation:nondet:1:2", function () {
  let installation_id = 1751;
  createInstallationAccessToken(1751);
  tryToAddExistingAppInstallation(1751);
  suspendInstallation(1751);
  verifyAppInstallationExists(1751);
  deleteInstallation(1751);
  tryToDeleteANonExistingAppInstallation(1751);
  verifyAppInstallationDoesNotExist(1751);
});

// Story: crud:AppInstallation:nondet:negative:dup-add
bthread("crud:AppInstallation:nondet:negative:dup-add", function () {
  let installation_id = 1756;
  createInstallationAccessToken(1756);
  verifyAppInstallationExists(1756);
  tryToAddExistingAppInstallation(1756);
  verifyAppInstallationExists(1756);
});

// Story: crud:AppInstallation:nondet:existing:update
bthread("crud:AppInstallation:nondet:existing:update", function () {
  let ev = waitForAnyAppInstallationAdded();
  let args = Object.values(ev);
  block(matchDeletedAppInstallation.apply(null, args), function () {
    verifyAppInstallationExists.apply(null, args);
    suspendInstallation.apply(null, args);
    verifyAppInstallationExists.apply(null, args);
  });
});

// Story: monitor:AppInstallation:add
bthread("monitor:AppInstallation:add", function () {
  while (true) {
    let ev = waitForAnyAppInstallationAdded();
    let args = Object.values(ev);
    block(matchDeletedAppInstallation.apply(null, args), function () {
      verifyAppInstallationExists.apply(null, args);
    });
  }
});

// Story: crud:AppToken:nondet:1:1
bthread("crud:AppToken:nondet:1:1", function () {
  let client_id = 1770;
  checkToken(1770);
  tryToAddExistingAppToken(1770);
  verifyAppTokenExists(1770);
  resetToken(1770);
  deleteToken(1770);
  tryToDeleteANonExistingAppToken(1770);
  verifyAppTokenDoesNotExist(1770);
});

// Story: crud:AppToken:nondet:1:2
bthread("crud:AppToken:nondet:1:2", function () {
  let client_id = 1771;
  checkToken(1771);
  tryToAddExistingAppToken(1771);
  resetToken(1771);
  verifyAppTokenExists(1771);
  deleteToken(1771);
  tryToDeleteANonExistingAppToken(1771);
  verifyAppTokenDoesNotExist(1771);
});

// Story: crud:AppToken:nondet:negative:dup-add
bthread("crud:AppToken:nondet:negative:dup-add", function () {
  let client_id = 1776;
  checkToken(1776);
  verifyAppTokenExists(1776);
  tryToAddExistingAppToken(1776);
  verifyAppTokenExists(1776);
});

// Story: crud:AppToken:nondet:existing:update
bthread("crud:AppToken:nondet:existing:update", function () {
  let ev = waitForAnyAppTokenAdded();
  let args = Object.values(ev);
  block(matchDeletedAppToken.apply(null, args), function () {
    verifyAppTokenExists.apply(null, args);
    resetToken.apply(null, args);
    verifyAppTokenExists.apply(null, args);
  });
});

// Story: monitor:AppToken:add
bthread("monitor:AppToken:add", function () {
  while (true) {
    let ev = waitForAnyAppTokenAdded();
    let args = Object.values(ev);
    block(matchDeletedAppToken.apply(null, args), function () {
      verifyAppTokenExists.apply(null, args);
    });
  }
});

// Story: crud:AppBySlug:read_only
bthread("crud:AppBySlug:read_only", function () {
  let app_slug = "app_slug_1780";
  verifyAppBySlugExists("app_slug_1780");
});

// Story: crud:InstallationRepository:nondet:1:1
bthread("crud:InstallationRepository:nondet:1:1", function () {
  let installation_id = 1790;
  let repository_id = 1790;
  addRepoToInstallationForAuthenticatedUser(1790, 1790);
  tryToAddExistingInstallationRepository(1790, 1790);
  verifyInstallationRepositoryExists(1790, 1790);
  removeRepoFromInstallationForAuthenticatedUser(1790, 1790);
  tryToDeleteANonExistingInstallationRepository(1790, 1790);
  verifyInstallationRepositoryDoesNotExist(1790, 1790);
});

// Story: crud:InstallationRepository:nondet:1:2
bthread("crud:InstallationRepository:nondet:1:2", function () {
  let installation_id = 1791;
  let repository_id = 1791;
  addRepoToInstallationForAuthenticatedUser(1791, 1791);
  tryToAddExistingInstallationRepository(1791, 1791);
  verifyInstallationRepositoryExists(1791, 1791);
  removeRepoFromInstallationForAuthenticatedUser(1791, 1791);
  tryToDeleteANonExistingInstallationRepository(1791, 1791);
  verifyInstallationRepositoryDoesNotExist(1791, 1791);
});

// Story: crud:InstallationRepository:nondet:negative:dup-add
bthread("crud:InstallationRepository:nondet:negative:dup-add", function () {
  let installation_id = 1796;
  let repository_id = 1796;
  addRepoToInstallationForAuthenticatedUser(1796, 1796);
  verifyInstallationRepositoryExists(1796, 1796);
  tryToAddExistingInstallationRepository(1796, 1796);
  verifyInstallationRepositoryExists(1796, 1796);
});

// Story: monitor:InstallationRepository:add
bthread("monitor:InstallationRepository:add", function () {
  while (true) {
    let ev = waitForAnyInstallationRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedInstallationRepository.apply(null, args), function () {
      verifyInstallationRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:OrgInstallation:read_only
bthread("crud:OrgInstallation:read_only", function () {
  let org = "org_1800";
  verifyOrgInstallationExists("org_1800");
});

// Story: crud:RepoInstallation:read_only
bthread("crud:RepoInstallation:read_only", function () {
  let owner = "owner_1810";
  let repo = "repo_1810";
  verifyRepoInstallationExists("owner_1810", "repo_1810");
});

// Story: crud:UserInstallation:read_only
bthread("crud:UserInstallation:read_only", function () {
  let username = "username_1820";
  verifyUserInstallationExists("username_1820");
});

// Story: crud:Issue:read_only
bthread("crud:Issue:read_only", function () {
  let owner = "owner_1830";
  let repo = "repo_1830";
  let title = "title_1830";
  let body = "body_1830";
  let assignee = "assignee_1830";
  let milestone = "milestone_1830";
  let labels = "labels_1830";
  let assignees = "assignees_1830";
  let type = "type_1830";
  let issue_number = "issue_number_1830";
  let state = "state_1830";
  let state_reason = "state_reason_1830";
  verifyIssueExists("owner_1830", "repo_1830", "title_1830", "body_1830", "assignee_1830", "milestone_1830", "labels_1830", "assignees_1830", "type_1830", "issue_number_1830", "state_1830", "state_reason_1830");
});

// Story: crud:IssueComment:nondet:1:1
bthread("crud:IssueComment:nondet:1:1", function () {
  let owner = "owner_1840";
  let repo = "repo_1840";
  let issue_number = "issue_number_1840";
  let body = "body_1840";
  let comment_id = 1840;
  createIssueComment("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
  tryToAddExistingIssueComment("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
  verifyIssueCommentExists("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
  updateIssueComment("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
  deleteIssueComment("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
  tryToDeleteANonExistingIssueComment("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
  verifyIssueCommentDoesNotExist("owner_1840", "repo_1840", "issue_number_1840", "body_1840", 1840);
});

// Story: crud:IssueComment:nondet:1:2
bthread("crud:IssueComment:nondet:1:2", function () {
  let owner = "owner_1841";
  let repo = "repo_1841";
  let issue_number = "issue_number_1841";
  let body = "body_1841";
  let comment_id = 1841;
  createIssueComment("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
  tryToAddExistingIssueComment("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
  updateIssueComment("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
  verifyIssueCommentExists("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
  deleteIssueComment("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
  tryToDeleteANonExistingIssueComment("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
  verifyIssueCommentDoesNotExist("owner_1841", "repo_1841", "issue_number_1841", "body_1841", 1841);
});

// Story: crud:IssueComment:nondet:negative:dup-add
bthread("crud:IssueComment:nondet:negative:dup-add", function () {
  let owner = "owner_1846";
  let repo = "repo_1846";
  let issue_number = "issue_number_1846";
  let body = "body_1846";
  let comment_id = 1846;
  createIssueComment("owner_1846", "repo_1846", "issue_number_1846", "body_1846", 1846);
  verifyIssueCommentExists("owner_1846", "repo_1846", "issue_number_1846", "body_1846", 1846);
  tryToAddExistingIssueComment("owner_1846", "repo_1846", "issue_number_1846", "body_1846", 1846);
  verifyIssueCommentExists("owner_1846", "repo_1846", "issue_number_1846", "body_1846", 1846);
});

// Story: crud:IssueComment:nondet:existing:update
bthread("crud:IssueComment:nondet:existing:update", function () {
  let ev = waitForAnyIssueCommentAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueComment.apply(null, args), function () {
    verifyIssueCommentExists.apply(null, args);
    updateIssueComment.apply(null, args);
    verifyIssueCommentExists.apply(null, args);
  });
});

// Story: monitor:IssueComment:add
bthread("monitor:IssueComment:add", function () {
  while (true) {
    let ev = waitForAnyIssueCommentAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueComment.apply(null, args), function () {
      verifyIssueCommentExists.apply(null, args);
    });
  }
});

// Story: crud:Assignee:read_only
bthread("crud:Assignee:read_only", function () {
  let owner = "owner_1850";
  let repo = "repo_1850";
  let assignee = "assignee_1850";
  verifyAssigneeExists("owner_1850", "repo_1850", "assignee_1850");
});

// Story: crud:IssueAssignees:nondet:1:1
bthread("crud:IssueAssignees:nondet:1:1", function () {
  let owner = "owner_1860";
  let repo = "repo_1860";
  let issue_number = "issue_number_1860";
  let assignees = "assignees_1860";
  addAssigneesToIssue("owner_1860", "repo_1860", "issue_number_1860", "assignees_1860");
  tryToAddExistingIssueAssignees("owner_1860", "repo_1860", "issue_number_1860", "assignees_1860");
  verifyIssueAssigneesExists("owner_1860", "repo_1860", "issue_number_1860", "assignees_1860");
  removeAssigneesFromIssue("owner_1860", "repo_1860", "issue_number_1860", "assignees_1860");
  tryToDeleteANonExistingIssueAssignees("owner_1860", "repo_1860", "issue_number_1860", "assignees_1860");
  verifyIssueAssigneesDoesNotExist("owner_1860", "repo_1860", "issue_number_1860", "assignees_1860");
});

// Story: crud:IssueAssignees:nondet:1:2
bthread("crud:IssueAssignees:nondet:1:2", function () {
  let owner = "owner_1861";
  let repo = "repo_1861";
  let issue_number = "issue_number_1861";
  let assignees = "assignees_1861";
  addAssigneesToIssue("owner_1861", "repo_1861", "issue_number_1861", "assignees_1861");
  tryToAddExistingIssueAssignees("owner_1861", "repo_1861", "issue_number_1861", "assignees_1861");
  verifyIssueAssigneesExists("owner_1861", "repo_1861", "issue_number_1861", "assignees_1861");
  removeAssigneesFromIssue("owner_1861", "repo_1861", "issue_number_1861", "assignees_1861");
  tryToDeleteANonExistingIssueAssignees("owner_1861", "repo_1861", "issue_number_1861", "assignees_1861");
  verifyIssueAssigneesDoesNotExist("owner_1861", "repo_1861", "issue_number_1861", "assignees_1861");
});

// Story: crud:IssueAssignees:nondet:negative:dup-add
bthread("crud:IssueAssignees:nondet:negative:dup-add", function () {
  let owner = "owner_1866";
  let repo = "repo_1866";
  let issue_number = "issue_number_1866";
  let assignees = "assignees_1866";
  addAssigneesToIssue("owner_1866", "repo_1866", "issue_number_1866", "assignees_1866");
  verifyIssueAssigneesExists("owner_1866", "repo_1866", "issue_number_1866", "assignees_1866");
  tryToAddExistingIssueAssignees("owner_1866", "repo_1866", "issue_number_1866", "assignees_1866");
  verifyIssueAssigneesExists("owner_1866", "repo_1866", "issue_number_1866", "assignees_1866");
});

// Story: monitor:IssueAssignees:add
bthread("monitor:IssueAssignees:add", function () {
  while (true) {
    let ev = waitForAnyIssueAssigneesAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueAssignees.apply(null, args), function () {
      verifyIssueAssigneesExists.apply(null, args);
    });
  }
});

// Story: crud:IssueAssignee:read_only
bthread("crud:IssueAssignee:read_only", function () {
  let owner = "owner_1870";
  let repo = "repo_1870";
  let issue_number = "issue_number_1870";
  let assignee = "assignee_1870";
  verifyIssueAssigneeExists("owner_1870", "repo_1870", "issue_number_1870", "assignee_1870");
});

// Story: crud:IssueLabels:nondet:1:1
bthread("crud:IssueLabels:nondet:1:1", function () {
  let owner = "owner_1890";
  let repo = "repo_1890";
  let issue_number = "issue_number_1890";
  let labels = "labels_1890";
  addLabelsToIssue("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
  tryToAddExistingIssueLabels("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
  verifyIssueLabelsExists("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
  setLabelsForIssue("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
  removeAllLabelsFromIssue("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
  tryToDeleteANonExistingIssueLabels("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
  verifyIssueLabelsDoesNotExist("owner_1890", "repo_1890", "issue_number_1890", "labels_1890");
});

// Story: crud:IssueLabels:nondet:1:2
bthread("crud:IssueLabels:nondet:1:2", function () {
  let owner = "owner_1891";
  let repo = "repo_1891";
  let issue_number = "issue_number_1891";
  let labels = "labels_1891";
  addLabelsToIssue("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
  tryToAddExistingIssueLabels("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
  setLabelsForIssue("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
  verifyIssueLabelsExists("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
  removeAllLabelsFromIssue("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
  tryToDeleteANonExistingIssueLabels("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
  verifyIssueLabelsDoesNotExist("owner_1891", "repo_1891", "issue_number_1891", "labels_1891");
});

// Story: crud:IssueLabels:nondet:negative:dup-add
bthread("crud:IssueLabels:nondet:negative:dup-add", function () {
  let owner = "owner_1896";
  let repo = "repo_1896";
  let issue_number = "issue_number_1896";
  let labels = "labels_1896";
  addLabelsToIssue("owner_1896", "repo_1896", "issue_number_1896", "labels_1896");
  verifyIssueLabelsExists("owner_1896", "repo_1896", "issue_number_1896", "labels_1896");
  tryToAddExistingIssueLabels("owner_1896", "repo_1896", "issue_number_1896", "labels_1896");
  verifyIssueLabelsExists("owner_1896", "repo_1896", "issue_number_1896", "labels_1896");
});

// Story: crud:IssueLabels:nondet:existing:update
bthread("crud:IssueLabels:nondet:existing:update", function () {
  let ev = waitForAnyIssueLabelsAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueLabels.apply(null, args), function () {
    verifyIssueLabelsExists.apply(null, args);
    setLabelsForIssue.apply(null, args);
    verifyIssueLabelsExists.apply(null, args);
  });
});

// Story: monitor:IssueLabels:add
bthread("monitor:IssueLabels:add", function () {
  while (true) {
    let ev = waitForAnyIssueLabelsAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueLabels.apply(null, args), function () {
      verifyIssueLabelsExists.apply(null, args);
    });
  }
});

// Story: crud:IssueDependencyBlockedBy:nondet:1:1
bthread("crud:IssueDependencyBlockedBy:nondet:1:1", function () {
  let owner = "owner_1910";
  let repo = "repo_1910";
  let issue_number = "issue_number_1910";
  let issue_id = 1910;
  addBlockedByDependency("owner_1910", "repo_1910", "issue_number_1910", 1910);
  tryToAddExistingIssueDependencyBlockedBy("owner_1910", "repo_1910", "issue_number_1910", 1910);
  verifyIssueDependencyBlockedByExists("owner_1910", "repo_1910", "issue_number_1910", 1910);
  removeBlockedByDependency("owner_1910", "repo_1910", "issue_number_1910", 1910);
  tryToDeleteANonExistingIssueDependencyBlockedBy("owner_1910", "repo_1910", "issue_number_1910", 1910);
  verifyIssueDependencyBlockedByDoesNotExist("owner_1910", "repo_1910", "issue_number_1910", 1910);
});

// Story: crud:IssueDependencyBlockedBy:nondet:1:2
bthread("crud:IssueDependencyBlockedBy:nondet:1:2", function () {
  let owner = "owner_1911";
  let repo = "repo_1911";
  let issue_number = "issue_number_1911";
  let issue_id = 1911;
  addBlockedByDependency("owner_1911", "repo_1911", "issue_number_1911", 1911);
  tryToAddExistingIssueDependencyBlockedBy("owner_1911", "repo_1911", "issue_number_1911", 1911);
  verifyIssueDependencyBlockedByExists("owner_1911", "repo_1911", "issue_number_1911", 1911);
  removeBlockedByDependency("owner_1911", "repo_1911", "issue_number_1911", 1911);
  tryToDeleteANonExistingIssueDependencyBlockedBy("owner_1911", "repo_1911", "issue_number_1911", 1911);
  verifyIssueDependencyBlockedByDoesNotExist("owner_1911", "repo_1911", "issue_number_1911", 1911);
});

// Story: crud:IssueDependencyBlockedBy:nondet:negative:dup-add
bthread("crud:IssueDependencyBlockedBy:nondet:negative:dup-add", function () {
  let owner = "owner_1916";
  let repo = "repo_1916";
  let issue_number = "issue_number_1916";
  let issue_id = 1916;
  addBlockedByDependency("owner_1916", "repo_1916", "issue_number_1916", 1916);
  verifyIssueDependencyBlockedByExists("owner_1916", "repo_1916", "issue_number_1916", 1916);
  tryToAddExistingIssueDependencyBlockedBy("owner_1916", "repo_1916", "issue_number_1916", 1916);
  verifyIssueDependencyBlockedByExists("owner_1916", "repo_1916", "issue_number_1916", 1916);
});

// Story: monitor:IssueDependencyBlockedBy:add
bthread("monitor:IssueDependencyBlockedBy:add", function () {
  while (true) {
    let ev = waitForAnyIssueDependencyBlockedByAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueDependencyBlockedBy.apply(null, args), function () {
      verifyIssueDependencyBlockedByExists.apply(null, args);
    });
  }
});

// Story: crud:IssueDependencyBlocking:read_only
bthread("crud:IssueDependencyBlocking:read_only", function () {
  let owner = "owner_1920";
  let repo = "repo_1920";
  let issue_number = "issue_number_1920";
  verifyIssueDependencyBlockingExists("owner_1920", "repo_1920", "issue_number_1920");
});

// Story: crud:IssueSubIssues:read_only
bthread("crud:IssueSubIssues:read_only", function () {
  let owner = "owner_1940";
  let repo = "repo_1940";
  let issue_number = "issue_number_1940";
  let sub_issue_id = 1940;
  let replace_parent = "replace_parent_1940";
  verifyIssueSubIssuesExists("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940");
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let owner = "owner_1960";
  let repo = "repo_1960";
  let name = "name_1960";
  let color = "color_1960";
  let description = "description_1960";
  let new_name = "new_name_1960";
  createLabel("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
  tryToAddExistingLabel("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
  verifyLabelExists("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
  updateLabel("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
  deleteLabel("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
  tryToDeleteANonExistingLabel("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
  verifyLabelDoesNotExist("owner_1960", "repo_1960", "name_1960", "color_1960", "description_1960", "new_name_1960");
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let owner = "owner_1961";
  let repo = "repo_1961";
  let name = "name_1961";
  let color = "color_1961";
  let description = "description_1961";
  let new_name = "new_name_1961";
  createLabel("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
  tryToAddExistingLabel("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
  updateLabel("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
  verifyLabelExists("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
  deleteLabel("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
  tryToDeleteANonExistingLabel("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
  verifyLabelDoesNotExist("owner_1961", "repo_1961", "name_1961", "color_1961", "description_1961", "new_name_1961");
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let owner = "owner_1966";
  let repo = "repo_1966";
  let name = "name_1966";
  let color = "color_1966";
  let description = "description_1966";
  let new_name = "new_name_1966";
  createLabel("owner_1966", "repo_1966", "name_1966", "color_1966", "description_1966", "new_name_1966");
  verifyLabelExists("owner_1966", "repo_1966", "name_1966", "color_1966", "description_1966", "new_name_1966");
  tryToAddExistingLabel("owner_1966", "repo_1966", "name_1966", "color_1966", "description_1966", "new_name_1966");
  verifyLabelExists("owner_1966", "repo_1966", "name_1966", "color_1966", "description_1966", "new_name_1966");
});

// Story: crud:Label:nondet:existing:update
bthread("crud:Label:nondet:existing:update", function () {
  let ev = waitForAnyLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedLabel.apply(null, args), function () {
    verifyLabelExists.apply(null, args);
    updateLabel.apply(null, args);
    verifyLabelExists.apply(null, args);
  });
});

// Story: monitor:Label:add
bthread("monitor:Label:add", function () {
  while (true) {
    let ev = waitForAnyLabelAdded();
    let args = Object.values(ev);
    block(matchDeletedLabel.apply(null, args), function () {
      verifyLabelExists.apply(null, args);
    });
  }
});

// Story: crud:Milestone:nondet:1:1
bthread("crud:Milestone:nondet:1:1", function () {
  let owner = "owner_1970";
  let repo = "repo_1970";
  let title = "title_1970";
  let state = "state_1970";
  let description = "description_1970";
  let due_on = "due_on_1970";
  let milestone_number = "milestone_number_1970";
  createMilestone("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
  tryToAddExistingMilestone("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
  verifyMilestoneExists("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
  updateMilestone("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
  deleteMilestone("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
  tryToDeleteANonExistingMilestone("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
  verifyMilestoneDoesNotExist("owner_1970", "repo_1970", "title_1970", "state_1970", "description_1970", "due_on_1970", "milestone_number_1970");
});

// Story: crud:Milestone:nondet:1:2
bthread("crud:Milestone:nondet:1:2", function () {
  let owner = "owner_1971";
  let repo = "repo_1971";
  let title = "title_1971";
  let state = "state_1971";
  let description = "description_1971";
  let due_on = "due_on_1971";
  let milestone_number = "milestone_number_1971";
  createMilestone("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
  tryToAddExistingMilestone("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
  updateMilestone("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
  verifyMilestoneExists("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
  deleteMilestone("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
  tryToDeleteANonExistingMilestone("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
  verifyMilestoneDoesNotExist("owner_1971", "repo_1971", "title_1971", "state_1971", "description_1971", "due_on_1971", "milestone_number_1971");
});

// Story: crud:Milestone:nondet:negative:dup-add
bthread("crud:Milestone:nondet:negative:dup-add", function () {
  let owner = "owner_1976";
  let repo = "repo_1976";
  let title = "title_1976";
  let state = "state_1976";
  let description = "description_1976";
  let due_on = "due_on_1976";
  let milestone_number = "milestone_number_1976";
  createMilestone("owner_1976", "repo_1976", "title_1976", "state_1976", "description_1976", "due_on_1976", "milestone_number_1976");
  verifyMilestoneExists("owner_1976", "repo_1976", "title_1976", "state_1976", "description_1976", "due_on_1976", "milestone_number_1976");
  tryToAddExistingMilestone("owner_1976", "repo_1976", "title_1976", "state_1976", "description_1976", "due_on_1976", "milestone_number_1976");
  verifyMilestoneExists("owner_1976", "repo_1976", "title_1976", "state_1976", "description_1976", "due_on_1976", "milestone_number_1976");
});

// Story: crud:Milestone:nondet:existing:update
bthread("crud:Milestone:nondet:existing:update", function () {
  let ev = waitForAnyMilestoneAdded();
  let args = Object.values(ev);
  block(matchDeletedMilestone.apply(null, args), function () {
    verifyMilestoneExists.apply(null, args);
    updateMilestone.apply(null, args);
    verifyMilestoneExists.apply(null, args);
  });
});

// Story: monitor:Milestone:add
bthread("monitor:Milestone:add", function () {
  while (true) {
    let ev = waitForAnyMilestoneAdded();
    let args = Object.values(ev);
    block(matchDeletedMilestone.apply(null, args), function () {
      verifyMilestoneExists.apply(null, args);
    });
  }
});

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let org = "org_1980";
  let name = "name_1980";
  let team_slug = "team_slug_1980";
  createTeam("org_1980", "name_1980", "team_slug_1980");
  tryToAddExistingTeam("org_1980", "name_1980", "team_slug_1980");
  verifyTeamExists("org_1980", "name_1980", "team_slug_1980");
  updateTeam("org_1980", "name_1980", "team_slug_1980");
  deleteTeam("org_1980", "name_1980", "team_slug_1980");
  tryToDeleteANonExistingTeam("org_1980", "name_1980", "team_slug_1980");
  verifyTeamDoesNotExist("org_1980", "name_1980", "team_slug_1980");
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let org = "org_1981";
  let name = "name_1981";
  let team_slug = "team_slug_1981";
  createTeam("org_1981", "name_1981", "team_slug_1981");
  tryToAddExistingTeam("org_1981", "name_1981", "team_slug_1981");
  updateTeam("org_1981", "name_1981", "team_slug_1981");
  verifyTeamExists("org_1981", "name_1981", "team_slug_1981");
  deleteTeam("org_1981", "name_1981", "team_slug_1981");
  tryToDeleteANonExistingTeam("org_1981", "name_1981", "team_slug_1981");
  verifyTeamDoesNotExist("org_1981", "name_1981", "team_slug_1981");
});

// Story: crud:Team:nondet:negative:dup-add
bthread("crud:Team:nondet:negative:dup-add", function () {
  let org = "org_1986";
  let name = "name_1986";
  let team_slug = "team_slug_1986";
  createTeam("org_1986", "name_1986", "team_slug_1986");
  verifyTeamExists("org_1986", "name_1986", "team_slug_1986");
  tryToAddExistingTeam("org_1986", "name_1986", "team_slug_1986");
  verifyTeamExists("org_1986", "name_1986", "team_slug_1986");
});

// Story: crud:Team:nondet:existing:update
bthread("crud:Team:nondet:existing:update", function () {
  let ev = waitForAnyTeamAdded();
  let args = Object.values(ev);
  block(matchDeletedTeam.apply(null, args), function () {
    verifyTeamExists.apply(null, args);
    updateTeam.apply(null, args);
    verifyTeamExists.apply(null, args);
  });
});

// Story: monitor:Team:add
bthread("monitor:Team:add", function () {
  while (true) {
    let ev = waitForAnyTeamAdded();
    let args = Object.values(ev);
    block(matchDeletedTeam.apply(null, args), function () {
      verifyTeamExists.apply(null, args);
    });
  }
});

// Story: crud:TeamDiscussion:nondet:1:1
bthread("crud:TeamDiscussion:nondet:1:1", function () {
  let org = "org_1990";
  let team_slug = "team_slug_1990";
  let title = "title_1990";
  let discussion_number = "discussion_number_1990";
  createDiscussion("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
  tryToAddExistingTeamDiscussion("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
  verifyTeamDiscussionExists("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
  updateDiscussion("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
  deleteDiscussion("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
  tryToDeleteANonExistingTeamDiscussion("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
  verifyTeamDiscussionDoesNotExist("org_1990", "team_slug_1990", "title_1990", "discussion_number_1990");
});

// Story: crud:TeamDiscussion:nondet:1:2
bthread("crud:TeamDiscussion:nondet:1:2", function () {
  let org = "org_1991";
  let team_slug = "team_slug_1991";
  let title = "title_1991";
  let discussion_number = "discussion_number_1991";
  createDiscussion("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
  tryToAddExistingTeamDiscussion("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
  updateDiscussion("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
  verifyTeamDiscussionExists("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
  deleteDiscussion("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
  tryToDeleteANonExistingTeamDiscussion("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
  verifyTeamDiscussionDoesNotExist("org_1991", "team_slug_1991", "title_1991", "discussion_number_1991");
});

// Story: crud:TeamDiscussion:nondet:negative:dup-add
bthread("crud:TeamDiscussion:nondet:negative:dup-add", function () {
  let org = "org_1996";
  let team_slug = "team_slug_1996";
  let title = "title_1996";
  let discussion_number = "discussion_number_1996";
  createDiscussion("org_1996", "team_slug_1996", "title_1996", "discussion_number_1996");
  verifyTeamDiscussionExists("org_1996", "team_slug_1996", "title_1996", "discussion_number_1996");
  tryToAddExistingTeamDiscussion("org_1996", "team_slug_1996", "title_1996", "discussion_number_1996");
  verifyTeamDiscussionExists("org_1996", "team_slug_1996", "title_1996", "discussion_number_1996");
});

// Story: crud:TeamDiscussion:nondet:existing:update
bthread("crud:TeamDiscussion:nondet:existing:update", function () {
  let ev = waitForAnyTeamDiscussionAdded();
  let args = Object.values(ev);
  block(matchDeletedTeamDiscussion.apply(null, args), function () {
    verifyTeamDiscussionExists.apply(null, args);
    updateDiscussion.apply(null, args);
    verifyTeamDiscussionExists.apply(null, args);
  });
});

// Story: monitor:TeamDiscussion:add
bthread("monitor:TeamDiscussion:add", function () {
  while (true) {
    let ev = waitForAnyTeamDiscussionAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamDiscussion.apply(null, args), function () {
      verifyTeamDiscussionExists.apply(null, args);
    });
  }
});

// Story: crud:TeamDiscussionComment:nondet:1:1
bthread("crud:TeamDiscussionComment:nondet:1:1", function () {
  let org = "org_2000";
  let team_slug = "team_slug_2000";
  let discussion_number = "discussion_number_2000";
  let body = "body_2000";
  let comment_number = "comment_number_2000";
  createDiscussionComment("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
  tryToAddExistingTeamDiscussionComment("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
  verifyTeamDiscussionCommentExists("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
  updateDiscussionComment("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
  deleteDiscussionComment("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
  tryToDeleteANonExistingTeamDiscussionComment("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
  verifyTeamDiscussionCommentDoesNotExist("org_2000", "team_slug_2000", "discussion_number_2000", "body_2000", "comment_number_2000");
});

// Story: crud:TeamDiscussionComment:nondet:1:2
bthread("crud:TeamDiscussionComment:nondet:1:2", function () {
  let org = "org_2001";
  let team_slug = "team_slug_2001";
  let discussion_number = "discussion_number_2001";
  let body = "body_2001";
  let comment_number = "comment_number_2001";
  createDiscussionComment("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
  tryToAddExistingTeamDiscussionComment("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
  updateDiscussionComment("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
  verifyTeamDiscussionCommentExists("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
  deleteDiscussionComment("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
  tryToDeleteANonExistingTeamDiscussionComment("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
  verifyTeamDiscussionCommentDoesNotExist("org_2001", "team_slug_2001", "discussion_number_2001", "body_2001", "comment_number_2001");
});

// Story: crud:TeamDiscussionComment:nondet:negative:dup-add
bthread("crud:TeamDiscussionComment:nondet:negative:dup-add", function () {
  let org = "org_2006";
  let team_slug = "team_slug_2006";
  let discussion_number = "discussion_number_2006";
  let body = "body_2006";
  let comment_number = "comment_number_2006";
  createDiscussionComment("org_2006", "team_slug_2006", "discussion_number_2006", "body_2006", "comment_number_2006");
  verifyTeamDiscussionCommentExists("org_2006", "team_slug_2006", "discussion_number_2006", "body_2006", "comment_number_2006");
  tryToAddExistingTeamDiscussionComment("org_2006", "team_slug_2006", "discussion_number_2006", "body_2006", "comment_number_2006");
  verifyTeamDiscussionCommentExists("org_2006", "team_slug_2006", "discussion_number_2006", "body_2006", "comment_number_2006");
});

// Story: crud:TeamDiscussionComment:nondet:existing:update
bthread("crud:TeamDiscussionComment:nondet:existing:update", function () {
  let ev = waitForAnyTeamDiscussionCommentAdded();
  let args = Object.values(ev);
  block(matchDeletedTeamDiscussionComment.apply(null, args), function () {
    verifyTeamDiscussionCommentExists.apply(null, args);
    updateDiscussionComment.apply(null, args);
    verifyTeamDiscussionCommentExists.apply(null, args);
  });
});

// Story: monitor:TeamDiscussionComment:add
bthread("monitor:TeamDiscussionComment:add", function () {
  while (true) {
    let ev = waitForAnyTeamDiscussionCommentAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamDiscussionComment.apply(null, args), function () {
      verifyTeamDiscussionCommentExists.apply(null, args);
    });
  }
});

// Story: crud:TeamMembership:nondet:1:1
bthread("crud:TeamMembership:nondet:1:1", function () {
  let org = "org_2010";
  let team_slug = "team_slug_2010";
  let username = "username_2010";
  let role = "role_2010";
  addOrUpdateMembership("org_2010", "team_slug_2010", "username_2010", "role_2010");
  tryToAddExistingTeamMembership("org_2010", "team_slug_2010", "username_2010", "role_2010");
  verifyTeamMembershipExists("org_2010", "team_slug_2010", "username_2010", "role_2010");
  removeMembership("org_2010", "team_slug_2010", "username_2010", "role_2010");
  tryToDeleteANonExistingTeamMembership("org_2010", "team_slug_2010", "username_2010", "role_2010");
  verifyTeamMembershipDoesNotExist("org_2010", "team_slug_2010", "username_2010", "role_2010");
});

// Story: crud:TeamMembership:nondet:1:2
bthread("crud:TeamMembership:nondet:1:2", function () {
  let org = "org_2011";
  let team_slug = "team_slug_2011";
  let username = "username_2011";
  let role = "role_2011";
  addOrUpdateMembership("org_2011", "team_slug_2011", "username_2011", "role_2011");
  tryToAddExistingTeamMembership("org_2011", "team_slug_2011", "username_2011", "role_2011");
  verifyTeamMembershipExists("org_2011", "team_slug_2011", "username_2011", "role_2011");
  removeMembership("org_2011", "team_slug_2011", "username_2011", "role_2011");
  tryToDeleteANonExistingTeamMembership("org_2011", "team_slug_2011", "username_2011", "role_2011");
  verifyTeamMembershipDoesNotExist("org_2011", "team_slug_2011", "username_2011", "role_2011");
});

// Story: crud:TeamMembership:nondet:negative:dup-add
bthread("crud:TeamMembership:nondet:negative:dup-add", function () {
  let org = "org_2016";
  let team_slug = "team_slug_2016";
  let username = "username_2016";
  let role = "role_2016";
  addOrUpdateMembership("org_2016", "team_slug_2016", "username_2016", "role_2016");
  verifyTeamMembershipExists("org_2016", "team_slug_2016", "username_2016", "role_2016");
  tryToAddExistingTeamMembership("org_2016", "team_slug_2016", "username_2016", "role_2016");
  verifyTeamMembershipExists("org_2016", "team_slug_2016", "username_2016", "role_2016");
});

// Story: monitor:TeamMembership:add
bthread("monitor:TeamMembership:add", function () {
  while (true) {
    let ev = waitForAnyTeamMembershipAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamMembership.apply(null, args), function () {
      verifyTeamMembershipExists.apply(null, args);
    });
  }
});

// Story: crud:TeamProject:nondet:1:1
bthread("crud:TeamProject:nondet:1:1", function () {
  let org = "org_2020";
  let team_slug = "team_slug_2020";
  let project_id = 2020;
  let permission = "permission_2020";
  addOrUpdateProjectPermissions("org_2020", "team_slug_2020", 2020, "permission_2020");
  tryToAddExistingTeamProject("org_2020", "team_slug_2020", 2020, "permission_2020");
  verifyTeamProjectExists("org_2020", "team_slug_2020", 2020, "permission_2020");
  removeProject("org_2020", "team_slug_2020", 2020, "permission_2020");
  tryToDeleteANonExistingTeamProject("org_2020", "team_slug_2020", 2020, "permission_2020");
  verifyTeamProjectDoesNotExist("org_2020", "team_slug_2020", 2020, "permission_2020");
});

// Story: crud:TeamProject:nondet:1:2
bthread("crud:TeamProject:nondet:1:2", function () {
  let org = "org_2021";
  let team_slug = "team_slug_2021";
  let project_id = 2021;
  let permission = "permission_2021";
  addOrUpdateProjectPermissions("org_2021", "team_slug_2021", 2021, "permission_2021");
  tryToAddExistingTeamProject("org_2021", "team_slug_2021", 2021, "permission_2021");
  verifyTeamProjectExists("org_2021", "team_slug_2021", 2021, "permission_2021");
  removeProject("org_2021", "team_slug_2021", 2021, "permission_2021");
  tryToDeleteANonExistingTeamProject("org_2021", "team_slug_2021", 2021, "permission_2021");
  verifyTeamProjectDoesNotExist("org_2021", "team_slug_2021", 2021, "permission_2021");
});

// Story: crud:TeamProject:nondet:negative:dup-add
bthread("crud:TeamProject:nondet:negative:dup-add", function () {
  let org = "org_2026";
  let team_slug = "team_slug_2026";
  let project_id = 2026;
  let permission = "permission_2026";
  addOrUpdateProjectPermissions("org_2026", "team_slug_2026", 2026, "permission_2026");
  verifyTeamProjectExists("org_2026", "team_slug_2026", 2026, "permission_2026");
  tryToAddExistingTeamProject("org_2026", "team_slug_2026", 2026, "permission_2026");
  verifyTeamProjectExists("org_2026", "team_slug_2026", 2026, "permission_2026");
});

// Story: monitor:TeamProject:add
bthread("monitor:TeamProject:add", function () {
  while (true) {
    let ev = waitForAnyTeamProjectAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamProject.apply(null, args), function () {
      verifyTeamProjectExists.apply(null, args);
    });
  }
});

// Story: crud:TeamRepository:nondet:1:1
bthread("crud:TeamRepository:nondet:1:1", function () {
  let org = "org_2030";
  let team_slug = "team_slug_2030";
  let owner = "owner_2030";
  let repo = "repo_2030";
  let permission = "permission_2030";
  addOrUpdateRepoPermissions("org_2030", "team_slug_2030", "owner_2030", "repo_2030", "permission_2030");
  tryToAddExistingTeamRepository("org_2030", "team_slug_2030", "owner_2030", "repo_2030", "permission_2030");
  verifyTeamRepositoryExists("org_2030", "team_slug_2030", "owner_2030", "repo_2030", "permission_2030");
  removeRepo("org_2030", "team_slug_2030", "owner_2030", "repo_2030", "permission_2030");
  tryToDeleteANonExistingTeamRepository("org_2030", "team_slug_2030", "owner_2030", "repo_2030", "permission_2030");
  verifyTeamRepositoryDoesNotExist("org_2030", "team_slug_2030", "owner_2030", "repo_2030", "permission_2030");
});

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let org = "org_2031";
  let team_slug = "team_slug_2031";
  let owner = "owner_2031";
  let repo = "repo_2031";
  let permission = "permission_2031";
  addOrUpdateRepoPermissions("org_2031", "team_slug_2031", "owner_2031", "repo_2031", "permission_2031");
  tryToAddExistingTeamRepository("org_2031", "team_slug_2031", "owner_2031", "repo_2031", "permission_2031");
  verifyTeamRepositoryExists("org_2031", "team_slug_2031", "owner_2031", "repo_2031", "permission_2031");
  removeRepo("org_2031", "team_slug_2031", "owner_2031", "repo_2031", "permission_2031");
  tryToDeleteANonExistingTeamRepository("org_2031", "team_slug_2031", "owner_2031", "repo_2031", "permission_2031");
  verifyTeamRepositoryDoesNotExist("org_2031", "team_slug_2031", "owner_2031", "repo_2031", "permission_2031");
});

// Story: crud:TeamRepository:nondet:negative:dup-add
bthread("crud:TeamRepository:nondet:negative:dup-add", function () {
  let org = "org_2036";
  let team_slug = "team_slug_2036";
  let owner = "owner_2036";
  let repo = "repo_2036";
  let permission = "permission_2036";
  addOrUpdateRepoPermissions("org_2036", "team_slug_2036", "owner_2036", "repo_2036", "permission_2036");
  verifyTeamRepositoryExists("org_2036", "team_slug_2036", "owner_2036", "repo_2036", "permission_2036");
  tryToAddExistingTeamRepository("org_2036", "team_slug_2036", "owner_2036", "repo_2036", "permission_2036");
  verifyTeamRepositoryExists("org_2036", "team_slug_2036", "owner_2036", "repo_2036", "permission_2036");
});

// Story: monitor:TeamRepository:add
bthread("monitor:TeamRepository:add", function () {
  while (true) {
    let ev = waitForAnyTeamRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamRepository.apply(null, args), function () {
      verifyTeamRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let all = "all_2040";
  let participating = "participating_2040";
  let since = "since_2040";
  let before = "before_2040";
  let page = "page_2040";
  let per_page = "per_page_2040";
  verifyNotificationExists("all_2040", "participating_2040", "since_2040", "before_2040", "page_2040", "per_page_2040");
});

// Story: crud:NotificationThread:read_only
bthread("crud:NotificationThread:read_only", function () {
  let thread_id = 2050;
  verifyNotificationThreadExists(2050);
});

// Story: crud:NotificationThreadSubscription:nondet:1:1
bthread("crud:NotificationThreadSubscription:nondet:1:1", function () {
  let thread_id = 2060;
  setThreadSubscription(2060);
  tryToAddExistingNotificationThreadSubscription(2060);
  verifyNotificationThreadSubscriptionExists(2060);
  deleteThreadSubscription(2060);
  tryToDeleteANonExistingNotificationThreadSubscription(2060);
  verifyNotificationThreadSubscriptionDoesNotExist(2060);
});

// Story: crud:NotificationThreadSubscription:nondet:1:2
bthread("crud:NotificationThreadSubscription:nondet:1:2", function () {
  let thread_id = 2061;
  setThreadSubscription(2061);
  tryToAddExistingNotificationThreadSubscription(2061);
  verifyNotificationThreadSubscriptionExists(2061);
  deleteThreadSubscription(2061);
  tryToDeleteANonExistingNotificationThreadSubscription(2061);
  verifyNotificationThreadSubscriptionDoesNotExist(2061);
});

// Story: crud:NotificationThreadSubscription:nondet:negative:dup-add
bthread("crud:NotificationThreadSubscription:nondet:negative:dup-add", function () {
  let thread_id = 2066;
  setThreadSubscription(2066);
  verifyNotificationThreadSubscriptionExists(2066);
  tryToAddExistingNotificationThreadSubscription(2066);
  verifyNotificationThreadSubscriptionExists(2066);
});

// Story: monitor:NotificationThreadSubscription:add
bthread("monitor:NotificationThreadSubscription:add", function () {
  while (true) {
    let ev = waitForAnyNotificationThreadSubscriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedNotificationThreadSubscription.apply(null, args), function () {
      verifyNotificationThreadSubscriptionExists.apply(null, args);
    });
  }
});

// Story: crud:RepoNotification:read_only
bthread("crud:RepoNotification:read_only", function () {
  let owner = "owner_2070";
  let repo = "repo_2070";
  let all = "all_2070";
  let participating = "participating_2070";
  let since = "since_2070";
  let before = "before_2070";
  let per_page = "per_page_2070";
  let page = "page_2070";
  verifyRepoNotificationExists("owner_2070", "repo_2070", "all_2070", "participating_2070", "since_2070", "before_2070", "per_page_2070", "page_2070");
});

// Story: crud:RepoSubscription:nondet:1:1
bthread("crud:RepoSubscription:nondet:1:1", function () {
  let owner = "owner_2080";
  let repo = "repo_2080";
  setRepoSubscription("owner_2080", "repo_2080");
  tryToAddExistingRepoSubscription("owner_2080", "repo_2080");
  verifyRepoSubscriptionExists("owner_2080", "repo_2080");
  deleteRepoSubscription("owner_2080", "repo_2080");
  tryToDeleteANonExistingRepoSubscription("owner_2080", "repo_2080");
  verifyRepoSubscriptionDoesNotExist("owner_2080", "repo_2080");
});

// Story: crud:RepoSubscription:nondet:1:2
bthread("crud:RepoSubscription:nondet:1:2", function () {
  let owner = "owner_2081";
  let repo = "repo_2081";
  setRepoSubscription("owner_2081", "repo_2081");
  tryToAddExistingRepoSubscription("owner_2081", "repo_2081");
  verifyRepoSubscriptionExists("owner_2081", "repo_2081");
  deleteRepoSubscription("owner_2081", "repo_2081");
  tryToDeleteANonExistingRepoSubscription("owner_2081", "repo_2081");
  verifyRepoSubscriptionDoesNotExist("owner_2081", "repo_2081");
});

// Story: crud:RepoSubscription:nondet:negative:dup-add
bthread("crud:RepoSubscription:nondet:negative:dup-add", function () {
  let owner = "owner_2086";
  let repo = "repo_2086";
  setRepoSubscription("owner_2086", "repo_2086");
  verifyRepoSubscriptionExists("owner_2086", "repo_2086");
  tryToAddExistingRepoSubscription("owner_2086", "repo_2086");
  verifyRepoSubscriptionExists("owner_2086", "repo_2086");
});

// Story: monitor:RepoSubscription:add
bthread("monitor:RepoSubscription:add", function () {
  while (true) {
    let ev = waitForAnyRepoSubscriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedRepoSubscription.apply(null, args), function () {
      verifyRepoSubscriptionExists.apply(null, args);
    });
  }
});

// Story: crud:RepoStar:nondet:1:1
bthread("crud:RepoStar:nondet:1:1", function () {
  let owner = "owner_2090";
  let repo = "repo_2090";
  starRepoForAuthenticatedUser("owner_2090", "repo_2090");
  tryToAddExistingRepoStar("owner_2090", "repo_2090");
  verifyRepoStarExists("owner_2090", "repo_2090");
  unstarRepoForAuthenticatedUser("owner_2090", "repo_2090");
  tryToDeleteANonExistingRepoStar("owner_2090", "repo_2090");
  verifyRepoStarDoesNotExist("owner_2090", "repo_2090");
});

// Story: crud:RepoStar:nondet:1:2
bthread("crud:RepoStar:nondet:1:2", function () {
  let owner = "owner_2091";
  let repo = "repo_2091";
  starRepoForAuthenticatedUser("owner_2091", "repo_2091");
  tryToAddExistingRepoStar("owner_2091", "repo_2091");
  verifyRepoStarExists("owner_2091", "repo_2091");
  unstarRepoForAuthenticatedUser("owner_2091", "repo_2091");
  tryToDeleteANonExistingRepoStar("owner_2091", "repo_2091");
  verifyRepoStarDoesNotExist("owner_2091", "repo_2091");
});

// Story: crud:RepoStar:nondet:negative:dup-add
bthread("crud:RepoStar:nondet:negative:dup-add", function () {
  let owner = "owner_2096";
  let repo = "repo_2096";
  starRepoForAuthenticatedUser("owner_2096", "repo_2096");
  verifyRepoStarExists("owner_2096", "repo_2096");
  tryToAddExistingRepoStar("owner_2096", "repo_2096");
  verifyRepoStarExists("owner_2096", "repo_2096");
});

// Story: monitor:RepoStar:add
bthread("monitor:RepoStar:add", function () {
  while (true) {
    let ev = waitForAnyRepoStarAdded();
    let args = Object.values(ev);
    block(matchDeletedRepoStar.apply(null, args), function () {
      verifyRepoStarExists.apply(null, args);
    });
  }
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let org = "org_2100";
  let package_type = "package_type_2100";
  let package_name = "package_name_2100";
  verifyPackageExists("org_2100", "package_type_2100", "package_name_2100");
});

// Story: crud:PackageVersion:read_only
bthread("crud:PackageVersion:read_only", function () {
  let org = "org_2110";
  let package_type = "package_type_2110";
  let package_name = "package_name_2110";
  let package_version_id = 2110;
  verifyPackageVersionExists("org_2110", "package_type_2110", "package_name_2110", 2110);
});

// Story: crud:UserPackage:read_only
bthread("crud:UserPackage:read_only", function () {
  let username = "username_2120";
  let package_type = "package_type_2120";
  let package_name = "package_name_2120";
  verifyUserPackageExists("username_2120", "package_type_2120", "package_name_2120");
});

// Story: crud:UserPackageVersion:read_only
bthread("crud:UserPackageVersion:read_only", function () {
  let username = "username_2130";
  let package_type = "package_type_2130";
  let package_name = "package_name_2130";
  let package_version_id = 2130;
  verifyUserPackageVersionExists("username_2130", "package_type_2130", "package_name_2130", 2130);
});

// Story: crud:UserPackageAuthenticated:read_only
bthread("crud:UserPackageAuthenticated:read_only", function () {
  let package_type = "package_type_2140";
  let package_name = "package_name_2140";
  verifyUserPackageAuthenticatedExists("package_type_2140", "package_name_2140");
});

// Story: crud:UserPackageVersionAuthenticated:read_only
bthread("crud:UserPackageVersionAuthenticated:read_only", function () {
  let package_type = "package_type_2150";
  let package_name = "package_name_2150";
  let package_version_id = 2150;
  verifyUserPackageVersionAuthenticatedExists("package_type_2150", "package_name_2150", 2150);
});

// Story: crud:CodeScanningAlert:read_only
bthread("crud:CodeScanningAlert:read_only", function () {
  let owner = "owner_2160";
  let repo = "repo_2160";
  let alert_number = "alert_number_2160";
  verifyCodeScanningAlertExists("owner_2160", "repo_2160", "alert_number_2160");
});

// Story: crud:CodeScanningAlertAutofix:read_only
bthread("crud:CodeScanningAlertAutofix:read_only", function () {
  let owner = "owner_2170";
  let repo = "repo_2170";
  let alert_number = "alert_number_2170";
  verifyCodeScanningAlertAutofixExists("owner_2170", "repo_2170", "alert_number_2170");
});

// Story: crud:CodeScanningAlertInstance:read_only
bthread("crud:CodeScanningAlertInstance:read_only", function () {
  let owner = "owner_2190";
  let repo = "repo_2190";
  let alert_number = "alert_number_2190";
  verifyCodeScanningAlertInstanceExists("owner_2190", "repo_2190", "alert_number_2190");
});

// Story: crud:CodeScanningAlertListOrg:read_only
bthread("crud:CodeScanningAlertListOrg:read_only", function () {
  let org = "org_2200";
  verifyCodeScanningAlertListOrgExists("org_2200");
});

// Story: crud:CodeScanningAlertListRepo:read_only
bthread("crud:CodeScanningAlertListRepo:read_only", function () {
  let owner = "owner_2210";
  let repo = "repo_2210";
  verifyCodeScanningAlertListRepoExists("owner_2210", "repo_2210");
});

// Story: crud:CodeScanningAnalysis:read_only
bthread("crud:CodeScanningAnalysis:read_only", function () {
  let owner = "owner_2220";
  let repo = "repo_2220";
  let analysis_id = 2220;
  verifyCodeScanningAnalysisExists("owner_2220", "repo_2220", 2220);
});

// Story: crud:CodeScanningAnalysisList:read_only
bthread("crud:CodeScanningAnalysisList:read_only", function () {
  let owner = "owner_2230";
  let repo = "repo_2230";
  verifyCodeScanningAnalysisListExists("owner_2230", "repo_2230");
});

// Story: crud:CodeQLDatabase:read_only
bthread("crud:CodeQLDatabase:read_only", function () {
  let owner = "owner_2240";
  let repo = "repo_2240";
  let language = "language_2240";
  verifyCodeQLDatabaseExists("owner_2240", "repo_2240", "language_2240");
});

// Story: crud:CodeQLDatabaseList:read_only
bthread("crud:CodeQLDatabaseList:read_only", function () {
  let owner = "owner_2250";
  let repo = "repo_2250";
  verifyCodeQLDatabaseListExists("owner_2250", "repo_2250");
});

// Story: crud:CodeQLVariantAnalysis:read_only
bthread("crud:CodeQLVariantAnalysis:read_only", function () {
  let owner = "owner_2260";
  let repo = "repo_2260";
  let codeql_variant_analysis_id = 2260;
  verifyCodeQLVariantAnalysisExists("owner_2260", "repo_2260", 2260);
});

// Story: crud:CodeQLVariantAnalysisRepoTask:read_only
bthread("crud:CodeQLVariantAnalysisRepoTask:read_only", function () {
  let owner = "owner_2280";
  let repo = "repo_2280";
  let codeql_variant_analysis_id = 2280;
  let repo_owner = "repo_owner_2280";
  let repo_name = "repo_name_2280";
  verifyCodeQLVariantAnalysisRepoTaskExists("owner_2280", "repo_2280", 2280, "repo_owner_2280", "repo_name_2280");
});

// Story: crud:CodeScanningDefaultSetup:read_only
bthread("crud:CodeScanningDefaultSetup:read_only", function () {
  let owner = "owner_2290";
  let repo = "repo_2290";
  verifyCodeScanningDefaultSetupExists("owner_2290", "repo_2290");
});

// Story: crud:SarifUpload:read_only
bthread("crud:SarifUpload:read_only", function () {
  let owner = "owner_2300";
  let repo = "repo_2300";
  let sarif_id = 2300;
  verifySarifUploadExists("owner_2300", "repo_2300", 2300);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:1:1
bthread("crud:TeamDiscussionCommentReaction:nondet:1:1", function () {
  let org = "org_2320";
  let team_slug = "team_slug_2320";
  let discussion_number = "discussion_number_2320";
  let comment_number = "comment_number_2320";
  let content = "content_2320";
  let reaction_id = 2320;
  createTeamDiscussionCommentReaction("org_2320", "team_slug_2320", "discussion_number_2320", "comment_number_2320", "content_2320", 2320);
  tryToAddExistingTeamDiscussionCommentReaction("org_2320", "team_slug_2320", "discussion_number_2320", "comment_number_2320", "content_2320", 2320);
  verifyTeamDiscussionCommentReactionExists("org_2320", "team_slug_2320", "discussion_number_2320", "comment_number_2320", "content_2320", 2320);
  deleteTeamDiscussionCommentReaction("org_2320", "team_slug_2320", "discussion_number_2320", "comment_number_2320", "content_2320", 2320);
  tryToDeleteANonExistingTeamDiscussionCommentReaction("org_2320", "team_slug_2320", "discussion_number_2320", "comment_number_2320", "content_2320", 2320);
  verifyTeamDiscussionCommentReactionDoesNotExist("org_2320", "team_slug_2320", "discussion_number_2320", "comment_number_2320", "content_2320", 2320);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:1:2
bthread("crud:TeamDiscussionCommentReaction:nondet:1:2", function () {
  let org = "org_2321";
  let team_slug = "team_slug_2321";
  let discussion_number = "discussion_number_2321";
  let comment_number = "comment_number_2321";
  let content = "content_2321";
  let reaction_id = 2321;
  createTeamDiscussionCommentReaction("org_2321", "team_slug_2321", "discussion_number_2321", "comment_number_2321", "content_2321", 2321);
  tryToAddExistingTeamDiscussionCommentReaction("org_2321", "team_slug_2321", "discussion_number_2321", "comment_number_2321", "content_2321", 2321);
  verifyTeamDiscussionCommentReactionExists("org_2321", "team_slug_2321", "discussion_number_2321", "comment_number_2321", "content_2321", 2321);
  deleteTeamDiscussionCommentReaction("org_2321", "team_slug_2321", "discussion_number_2321", "comment_number_2321", "content_2321", 2321);
  tryToDeleteANonExistingTeamDiscussionCommentReaction("org_2321", "team_slug_2321", "discussion_number_2321", "comment_number_2321", "content_2321", 2321);
  verifyTeamDiscussionCommentReactionDoesNotExist("org_2321", "team_slug_2321", "discussion_number_2321", "comment_number_2321", "content_2321", 2321);
});

// Story: crud:TeamDiscussionCommentReaction:nondet:negative:dup-add
bthread("crud:TeamDiscussionCommentReaction:nondet:negative:dup-add", function () {
  let org = "org_2326";
  let team_slug = "team_slug_2326";
  let discussion_number = "discussion_number_2326";
  let comment_number = "comment_number_2326";
  let content = "content_2326";
  let reaction_id = 2326;
  createTeamDiscussionCommentReaction("org_2326", "team_slug_2326", "discussion_number_2326", "comment_number_2326", "content_2326", 2326);
  verifyTeamDiscussionCommentReactionExists("org_2326", "team_slug_2326", "discussion_number_2326", "comment_number_2326", "content_2326", 2326);
  tryToAddExistingTeamDiscussionCommentReaction("org_2326", "team_slug_2326", "discussion_number_2326", "comment_number_2326", "content_2326", 2326);
  verifyTeamDiscussionCommentReactionExists("org_2326", "team_slug_2326", "discussion_number_2326", "comment_number_2326", "content_2326", 2326);
});

// Story: monitor:TeamDiscussionCommentReaction:add
bthread("monitor:TeamDiscussionCommentReaction:add", function () {
  while (true) {
    let ev = waitForAnyTeamDiscussionCommentReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamDiscussionCommentReaction.apply(null, args), function () {
      verifyTeamDiscussionCommentReactionExists.apply(null, args);
    });
  }
});

// Story: crud:TeamDiscussionReaction:nondet:1:1
bthread("crud:TeamDiscussionReaction:nondet:1:1", function () {
  let org = "org_2330";
  let team_slug = "team_slug_2330";
  let discussion_number = "discussion_number_2330";
  let content = "content_2330";
  let reaction_id = 2330;
  createTeamDiscussionReaction("org_2330", "team_slug_2330", "discussion_number_2330", "content_2330", 2330);
  tryToAddExistingTeamDiscussionReaction("org_2330", "team_slug_2330", "discussion_number_2330", "content_2330", 2330);
  verifyTeamDiscussionReactionExists("org_2330", "team_slug_2330", "discussion_number_2330", "content_2330", 2330);
  deleteTeamDiscussionReaction("org_2330", "team_slug_2330", "discussion_number_2330", "content_2330", 2330);
  tryToDeleteANonExistingTeamDiscussionReaction("org_2330", "team_slug_2330", "discussion_number_2330", "content_2330", 2330);
  verifyTeamDiscussionReactionDoesNotExist("org_2330", "team_slug_2330", "discussion_number_2330", "content_2330", 2330);
});

// Story: crud:TeamDiscussionReaction:nondet:1:2
bthread("crud:TeamDiscussionReaction:nondet:1:2", function () {
  let org = "org_2331";
  let team_slug = "team_slug_2331";
  let discussion_number = "discussion_number_2331";
  let content = "content_2331";
  let reaction_id = 2331;
  createTeamDiscussionReaction("org_2331", "team_slug_2331", "discussion_number_2331", "content_2331", 2331);
  tryToAddExistingTeamDiscussionReaction("org_2331", "team_slug_2331", "discussion_number_2331", "content_2331", 2331);
  verifyTeamDiscussionReactionExists("org_2331", "team_slug_2331", "discussion_number_2331", "content_2331", 2331);
  deleteTeamDiscussionReaction("org_2331", "team_slug_2331", "discussion_number_2331", "content_2331", 2331);
  tryToDeleteANonExistingTeamDiscussionReaction("org_2331", "team_slug_2331", "discussion_number_2331", "content_2331", 2331);
  verifyTeamDiscussionReactionDoesNotExist("org_2331", "team_slug_2331", "discussion_number_2331", "content_2331", 2331);
});

// Story: crud:TeamDiscussionReaction:nondet:negative:dup-add
bthread("crud:TeamDiscussionReaction:nondet:negative:dup-add", function () {
  let org = "org_2336";
  let team_slug = "team_slug_2336";
  let discussion_number = "discussion_number_2336";
  let content = "content_2336";
  let reaction_id = 2336;
  createTeamDiscussionReaction("org_2336", "team_slug_2336", "discussion_number_2336", "content_2336", 2336);
  verifyTeamDiscussionReactionExists("org_2336", "team_slug_2336", "discussion_number_2336", "content_2336", 2336);
  tryToAddExistingTeamDiscussionReaction("org_2336", "team_slug_2336", "discussion_number_2336", "content_2336", 2336);
  verifyTeamDiscussionReactionExists("org_2336", "team_slug_2336", "discussion_number_2336", "content_2336", 2336);
});

// Story: monitor:TeamDiscussionReaction:add
bthread("monitor:TeamDiscussionReaction:add", function () {
  while (true) {
    let ev = waitForAnyTeamDiscussionReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamDiscussionReaction.apply(null, args), function () {
      verifyTeamDiscussionReactionExists.apply(null, args);
    });
  }
});

// Story: crud:CommitCommentReaction:nondet:1:1
bthread("crud:CommitCommentReaction:nondet:1:1", function () {
  let owner = "owner_2340";
  let repo = "repo_2340";
  let comment_id = 2340;
  let content = "content_2340";
  let reaction_id = 2340;
  createCommitCommentReaction("owner_2340", "repo_2340", 2340, "content_2340", 2340);
  tryToAddExistingCommitCommentReaction("owner_2340", "repo_2340", 2340, "content_2340", 2340);
  verifyCommitCommentReactionExists("owner_2340", "repo_2340", 2340, "content_2340", 2340);
  deleteCommitCommentReaction("owner_2340", "repo_2340", 2340, "content_2340", 2340);
  tryToDeleteANonExistingCommitCommentReaction("owner_2340", "repo_2340", 2340, "content_2340", 2340);
  verifyCommitCommentReactionDoesNotExist("owner_2340", "repo_2340", 2340, "content_2340", 2340);
});

// Story: crud:CommitCommentReaction:nondet:1:2
bthread("crud:CommitCommentReaction:nondet:1:2", function () {
  let owner = "owner_2341";
  let repo = "repo_2341";
  let comment_id = 2341;
  let content = "content_2341";
  let reaction_id = 2341;
  createCommitCommentReaction("owner_2341", "repo_2341", 2341, "content_2341", 2341);
  tryToAddExistingCommitCommentReaction("owner_2341", "repo_2341", 2341, "content_2341", 2341);
  verifyCommitCommentReactionExists("owner_2341", "repo_2341", 2341, "content_2341", 2341);
  deleteCommitCommentReaction("owner_2341", "repo_2341", 2341, "content_2341", 2341);
  tryToDeleteANonExistingCommitCommentReaction("owner_2341", "repo_2341", 2341, "content_2341", 2341);
  verifyCommitCommentReactionDoesNotExist("owner_2341", "repo_2341", 2341, "content_2341", 2341);
});

// Story: crud:CommitCommentReaction:nondet:negative:dup-add
bthread("crud:CommitCommentReaction:nondet:negative:dup-add", function () {
  let owner = "owner_2346";
  let repo = "repo_2346";
  let comment_id = 2346;
  let content = "content_2346";
  let reaction_id = 2346;
  createCommitCommentReaction("owner_2346", "repo_2346", 2346, "content_2346", 2346);
  verifyCommitCommentReactionExists("owner_2346", "repo_2346", 2346, "content_2346", 2346);
  tryToAddExistingCommitCommentReaction("owner_2346", "repo_2346", 2346, "content_2346", 2346);
  verifyCommitCommentReactionExists("owner_2346", "repo_2346", 2346, "content_2346", 2346);
});

// Story: monitor:CommitCommentReaction:add
bthread("monitor:CommitCommentReaction:add", function () {
  while (true) {
    let ev = waitForAnyCommitCommentReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedCommitCommentReaction.apply(null, args), function () {
      verifyCommitCommentReactionExists.apply(null, args);
    });
  }
});

// Story: crud:IssueCommentReaction:nondet:1:1
bthread("crud:IssueCommentReaction:nondet:1:1", function () {
  let owner = "owner_2350";
  let repo = "repo_2350";
  let comment_id = 2350;
  let content = "content_2350";
  let reaction_id = 2350;
  createIssueCommentReaction("owner_2350", "repo_2350", 2350, "content_2350", 2350);
  tryToAddExistingIssueCommentReaction("owner_2350", "repo_2350", 2350, "content_2350", 2350);
  verifyIssueCommentReactionExists("owner_2350", "repo_2350", 2350, "content_2350", 2350);
  deleteIssueCommentReaction("owner_2350", "repo_2350", 2350, "content_2350", 2350);
  tryToDeleteANonExistingIssueCommentReaction("owner_2350", "repo_2350", 2350, "content_2350", 2350);
  verifyIssueCommentReactionDoesNotExist("owner_2350", "repo_2350", 2350, "content_2350", 2350);
});

// Story: crud:IssueCommentReaction:nondet:1:2
bthread("crud:IssueCommentReaction:nondet:1:2", function () {
  let owner = "owner_2351";
  let repo = "repo_2351";
  let comment_id = 2351;
  let content = "content_2351";
  let reaction_id = 2351;
  createIssueCommentReaction("owner_2351", "repo_2351", 2351, "content_2351", 2351);
  tryToAddExistingIssueCommentReaction("owner_2351", "repo_2351", 2351, "content_2351", 2351);
  verifyIssueCommentReactionExists("owner_2351", "repo_2351", 2351, "content_2351", 2351);
  deleteIssueCommentReaction("owner_2351", "repo_2351", 2351, "content_2351", 2351);
  tryToDeleteANonExistingIssueCommentReaction("owner_2351", "repo_2351", 2351, "content_2351", 2351);
  verifyIssueCommentReactionDoesNotExist("owner_2351", "repo_2351", 2351, "content_2351", 2351);
});

// Story: crud:IssueCommentReaction:nondet:negative:dup-add
bthread("crud:IssueCommentReaction:nondet:negative:dup-add", function () {
  let owner = "owner_2356";
  let repo = "repo_2356";
  let comment_id = 2356;
  let content = "content_2356";
  let reaction_id = 2356;
  createIssueCommentReaction("owner_2356", "repo_2356", 2356, "content_2356", 2356);
  verifyIssueCommentReactionExists("owner_2356", "repo_2356", 2356, "content_2356", 2356);
  tryToAddExistingIssueCommentReaction("owner_2356", "repo_2356", 2356, "content_2356", 2356);
  verifyIssueCommentReactionExists("owner_2356", "repo_2356", 2356, "content_2356", 2356);
});

// Story: monitor:IssueCommentReaction:add
bthread("monitor:IssueCommentReaction:add", function () {
  while (true) {
    let ev = waitForAnyIssueCommentReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueCommentReaction.apply(null, args), function () {
      verifyIssueCommentReactionExists.apply(null, args);
    });
  }
});

// Story: crud:IssueReaction:nondet:1:1
bthread("crud:IssueReaction:nondet:1:1", function () {
  let owner = "owner_2360";
  let repo = "repo_2360";
  let issue_number = "issue_number_2360";
  let content = "content_2360";
  let reaction_id = 2360;
  createIssueReaction("owner_2360", "repo_2360", "issue_number_2360", "content_2360", 2360);
  tryToAddExistingIssueReaction("owner_2360", "repo_2360", "issue_number_2360", "content_2360", 2360);
  verifyIssueReactionExists("owner_2360", "repo_2360", "issue_number_2360", "content_2360", 2360);
  deleteIssueReaction("owner_2360", "repo_2360", "issue_number_2360", "content_2360", 2360);
  tryToDeleteANonExistingIssueReaction("owner_2360", "repo_2360", "issue_number_2360", "content_2360", 2360);
  verifyIssueReactionDoesNotExist("owner_2360", "repo_2360", "issue_number_2360", "content_2360", 2360);
});

// Story: crud:IssueReaction:nondet:1:2
bthread("crud:IssueReaction:nondet:1:2", function () {
  let owner = "owner_2361";
  let repo = "repo_2361";
  let issue_number = "issue_number_2361";
  let content = "content_2361";
  let reaction_id = 2361;
  createIssueReaction("owner_2361", "repo_2361", "issue_number_2361", "content_2361", 2361);
  tryToAddExistingIssueReaction("owner_2361", "repo_2361", "issue_number_2361", "content_2361", 2361);
  verifyIssueReactionExists("owner_2361", "repo_2361", "issue_number_2361", "content_2361", 2361);
  deleteIssueReaction("owner_2361", "repo_2361", "issue_number_2361", "content_2361", 2361);
  tryToDeleteANonExistingIssueReaction("owner_2361", "repo_2361", "issue_number_2361", "content_2361", 2361);
  verifyIssueReactionDoesNotExist("owner_2361", "repo_2361", "issue_number_2361", "content_2361", 2361);
});

// Story: crud:IssueReaction:nondet:negative:dup-add
bthread("crud:IssueReaction:nondet:negative:dup-add", function () {
  let owner = "owner_2366";
  let repo = "repo_2366";
  let issue_number = "issue_number_2366";
  let content = "content_2366";
  let reaction_id = 2366;
  createIssueReaction("owner_2366", "repo_2366", "issue_number_2366", "content_2366", 2366);
  verifyIssueReactionExists("owner_2366", "repo_2366", "issue_number_2366", "content_2366", 2366);
  tryToAddExistingIssueReaction("owner_2366", "repo_2366", "issue_number_2366", "content_2366", 2366);
  verifyIssueReactionExists("owner_2366", "repo_2366", "issue_number_2366", "content_2366", 2366);
});

// Story: monitor:IssueReaction:add
bthread("monitor:IssueReaction:add", function () {
  while (true) {
    let ev = waitForAnyIssueReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueReaction.apply(null, args), function () {
      verifyIssueReactionExists.apply(null, args);
    });
  }
});

// Story: crud:PullRequestReviewCommentReaction:nondet:1:1
bthread("crud:PullRequestReviewCommentReaction:nondet:1:1", function () {
  let owner = "owner_2370";
  let repo = "repo_2370";
  let comment_id = 2370;
  let content = "content_2370";
  let reaction_id = 2370;
  createPullRequestReviewCommentReaction("owner_2370", "repo_2370", 2370, "content_2370", 2370);
  tryToAddExistingPullRequestReviewCommentReaction("owner_2370", "repo_2370", 2370, "content_2370", 2370);
  verifyPullRequestReviewCommentReactionExists("owner_2370", "repo_2370", 2370, "content_2370", 2370);
  deletePullRequestReviewCommentReaction("owner_2370", "repo_2370", 2370, "content_2370", 2370);
  tryToDeleteANonExistingPullRequestReviewCommentReaction("owner_2370", "repo_2370", 2370, "content_2370", 2370);
  verifyPullRequestReviewCommentReactionDoesNotExist("owner_2370", "repo_2370", 2370, "content_2370", 2370);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:1:2
bthread("crud:PullRequestReviewCommentReaction:nondet:1:2", function () {
  let owner = "owner_2371";
  let repo = "repo_2371";
  let comment_id = 2371;
  let content = "content_2371";
  let reaction_id = 2371;
  createPullRequestReviewCommentReaction("owner_2371", "repo_2371", 2371, "content_2371", 2371);
  tryToAddExistingPullRequestReviewCommentReaction("owner_2371", "repo_2371", 2371, "content_2371", 2371);
  verifyPullRequestReviewCommentReactionExists("owner_2371", "repo_2371", 2371, "content_2371", 2371);
  deletePullRequestReviewCommentReaction("owner_2371", "repo_2371", 2371, "content_2371", 2371);
  tryToDeleteANonExistingPullRequestReviewCommentReaction("owner_2371", "repo_2371", 2371, "content_2371", 2371);
  verifyPullRequestReviewCommentReactionDoesNotExist("owner_2371", "repo_2371", 2371, "content_2371", 2371);
});

// Story: crud:PullRequestReviewCommentReaction:nondet:negative:dup-add
bthread("crud:PullRequestReviewCommentReaction:nondet:negative:dup-add", function () {
  let owner = "owner_2376";
  let repo = "repo_2376";
  let comment_id = 2376;
  let content = "content_2376";
  let reaction_id = 2376;
  createPullRequestReviewCommentReaction("owner_2376", "repo_2376", 2376, "content_2376", 2376);
  verifyPullRequestReviewCommentReactionExists("owner_2376", "repo_2376", 2376, "content_2376", 2376);
  tryToAddExistingPullRequestReviewCommentReaction("owner_2376", "repo_2376", 2376, "content_2376", 2376);
  verifyPullRequestReviewCommentReactionExists("owner_2376", "repo_2376", 2376, "content_2376", 2376);
});

// Story: monitor:PullRequestReviewCommentReaction:add
bthread("monitor:PullRequestReviewCommentReaction:add", function () {
  while (true) {
    let ev = waitForAnyPullRequestReviewCommentReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedPullRequestReviewCommentReaction.apply(null, args), function () {
      verifyPullRequestReviewCommentReactionExists.apply(null, args);
    });
  }
});

// Story: crud:ReleaseReaction:nondet:1:1
bthread("crud:ReleaseReaction:nondet:1:1", function () {
  let owner = "owner_2380";
  let repo = "repo_2380";
  let release_id = 2380;
  let content = "content_2380";
  let reaction_id = 2380;
  createReleaseReaction("owner_2380", "repo_2380", 2380, "content_2380", 2380);
  tryToAddExistingReleaseReaction("owner_2380", "repo_2380", 2380, "content_2380", 2380);
  verifyReleaseReactionExists("owner_2380", "repo_2380", 2380, "content_2380", 2380);
  deleteReleaseReaction("owner_2380", "repo_2380", 2380, "content_2380", 2380);
  tryToDeleteANonExistingReleaseReaction("owner_2380", "repo_2380", 2380, "content_2380", 2380);
  verifyReleaseReactionDoesNotExist("owner_2380", "repo_2380", 2380, "content_2380", 2380);
});

// Story: crud:ReleaseReaction:nondet:1:2
bthread("crud:ReleaseReaction:nondet:1:2", function () {
  let owner = "owner_2381";
  let repo = "repo_2381";
  let release_id = 2381;
  let content = "content_2381";
  let reaction_id = 2381;
  createReleaseReaction("owner_2381", "repo_2381", 2381, "content_2381", 2381);
  tryToAddExistingReleaseReaction("owner_2381", "repo_2381", 2381, "content_2381", 2381);
  verifyReleaseReactionExists("owner_2381", "repo_2381", 2381, "content_2381", 2381);
  deleteReleaseReaction("owner_2381", "repo_2381", 2381, "content_2381", 2381);
  tryToDeleteANonExistingReleaseReaction("owner_2381", "repo_2381", 2381, "content_2381", 2381);
  verifyReleaseReactionDoesNotExist("owner_2381", "repo_2381", 2381, "content_2381", 2381);
});

// Story: crud:ReleaseReaction:nondet:negative:dup-add
bthread("crud:ReleaseReaction:nondet:negative:dup-add", function () {
  let owner = "owner_2386";
  let repo = "repo_2386";
  let release_id = 2386;
  let content = "content_2386";
  let reaction_id = 2386;
  createReleaseReaction("owner_2386", "repo_2386", 2386, "content_2386", 2386);
  verifyReleaseReactionExists("owner_2386", "repo_2386", 2386, "content_2386", 2386);
  tryToAddExistingReleaseReaction("owner_2386", "repo_2386", 2386, "content_2386", 2386);
  verifyReleaseReactionExists("owner_2386", "repo_2386", 2386, "content_2386", 2386);
});

// Story: monitor:ReleaseReaction:add
bthread("monitor:ReleaseReaction:add", function () {
  while (true) {
    let ev = waitForAnyReleaseReactionAdded();
    let args = Object.values(ev);
    block(matchDeletedReleaseReaction.apply(null, args), function () {
      verifyReleaseReactionExists.apply(null, args);
    });
  }
});

// Story: crud:TeamDiscussionCommentReactionLegacy:read_only
bthread("crud:TeamDiscussionCommentReactionLegacy:read_only", function () {
  let team_id = 2390;
  let discussion_number = "discussion_number_2390";
  let comment_number = "comment_number_2390";
  let content = "content_2390";
  verifyTeamDiscussionCommentReactionLegacyExists(2390, "discussion_number_2390", "comment_number_2390", "content_2390");
});

// Story: crud:TeamDiscussionReactionLegacy:read_only
bthread("crud:TeamDiscussionReactionLegacy:read_only", function () {
  let team_id = 2400;
  let discussion_number = "discussion_number_2400";
  let content = "content_2400";
  verifyTeamDiscussionReactionLegacyExists(2400, "discussion_number_2400", "content_2400");
});

// Story: crud:PullRequest:read_only
bthread("crud:PullRequest:read_only", function () {
  let title = "title_2410";
  let head = "head_2410";
  let base = "base_2410";
  let owner = "owner_2410";
  let repo = "repo_2410";
  let pull_number = "pull_number_2410";
  verifyPullRequestExists("title_2410", "head_2410", "base_2410", "owner_2410", "repo_2410", "pull_number_2410");
});

// Story: crud:PullRequestComment:read_only
bthread("crud:PullRequestComment:read_only", function () {
  let owner = "owner_2420";
  let repo = "repo_2420";
  let comment_id = 2420;
  verifyPullRequestCommentExists("owner_2420", "repo_2420", 2420);
});

// Story: crud:PullRequestReview:read_only
bthread("crud:PullRequestReview:read_only", function () {
  let owner = "owner_2430";
  let repo = "repo_2430";
  let pull_number = "pull_number_2430";
  let review_id = 2430;
  verifyPullRequestReviewExists("owner_2430", "repo_2430", "pull_number_2430", 2430);
});

// Story: crud:PullRequestReviewers:nondet:1:1
bthread("crud:PullRequestReviewers:nondet:1:1", function () {
  let owner = "owner_2450";
  let repo = "repo_2450";
  let pull_number = "pull_number_2450";
  requestReviewers("owner_2450", "repo_2450", "pull_number_2450");
  tryToAddExistingPullRequestReviewers("owner_2450", "repo_2450", "pull_number_2450");
  verifyPullRequestReviewersExists("owner_2450", "repo_2450", "pull_number_2450");
  removeRequestedReviewers("owner_2450", "repo_2450", "pull_number_2450");
  tryToDeleteANonExistingPullRequestReviewers("owner_2450", "repo_2450", "pull_number_2450");
  verifyPullRequestReviewersDoesNotExist("owner_2450", "repo_2450", "pull_number_2450");
});

// Story: crud:PullRequestReviewers:nondet:1:2
bthread("crud:PullRequestReviewers:nondet:1:2", function () {
  let owner = "owner_2451";
  let repo = "repo_2451";
  let pull_number = "pull_number_2451";
  requestReviewers("owner_2451", "repo_2451", "pull_number_2451");
  tryToAddExistingPullRequestReviewers("owner_2451", "repo_2451", "pull_number_2451");
  verifyPullRequestReviewersExists("owner_2451", "repo_2451", "pull_number_2451");
  removeRequestedReviewers("owner_2451", "repo_2451", "pull_number_2451");
  tryToDeleteANonExistingPullRequestReviewers("owner_2451", "repo_2451", "pull_number_2451");
  verifyPullRequestReviewersDoesNotExist("owner_2451", "repo_2451", "pull_number_2451");
});

// Story: crud:PullRequestReviewers:nondet:negative:dup-add
bthread("crud:PullRequestReviewers:nondet:negative:dup-add", function () {
  let owner = "owner_2456";
  let repo = "repo_2456";
  let pull_number = "pull_number_2456";
  requestReviewers("owner_2456", "repo_2456", "pull_number_2456");
  verifyPullRequestReviewersExists("owner_2456", "repo_2456", "pull_number_2456");
  tryToAddExistingPullRequestReviewers("owner_2456", "repo_2456", "pull_number_2456");
  verifyPullRequestReviewersExists("owner_2456", "repo_2456", "pull_number_2456");
});

// Story: monitor:PullRequestReviewers:add
bthread("monitor:PullRequestReviewers:add", function () {
  while (true) {
    let ev = waitForAnyPullRequestReviewersAdded();
    let args = Object.values(ev);
    block(matchDeletedPullRequestReviewers.apply(null, args), function () {
      verifyPullRequestReviewersExists.apply(null, args);
    });
  }
});

// Story: crud:OrgMigration:nondet:1:1
bthread("crud:OrgMigration:nondet:1:1", function () {
  let org = "org_2470";
  let repositories = "repositories_2470";
  let lock_repositories = "lock_repositories_2470";
  let exclude_metadata = "exclude_metadata_2470";
  let exclude_git_data = "exclude_git_data_2470";
  let exclude_attachments = "exclude_attachments_2470";
  let exclude_releases = "exclude_releases_2470";
  let exclude_owner_projects = "exclude_owner_projects_2470";
  let org_metadata_only = "org_metadata_only_2470";
  let exclude = "exclude_2470";
  let migration_id = 2470;
  startOrgMigration("org_2470", "repositories_2470", "lock_repositories_2470", "exclude_metadata_2470", "exclude_git_data_2470", "exclude_attachments_2470", "exclude_releases_2470", "exclude_owner_projects_2470", "org_metadata_only_2470", "exclude_2470", 2470);
  tryToAddExistingOrgMigration("org_2470", "repositories_2470", "lock_repositories_2470", "exclude_metadata_2470", "exclude_git_data_2470", "exclude_attachments_2470", "exclude_releases_2470", "exclude_owner_projects_2470", "org_metadata_only_2470", "exclude_2470", 2470);
  verifyOrgMigrationExists("org_2470", "repositories_2470", "lock_repositories_2470", "exclude_metadata_2470", "exclude_git_data_2470", "exclude_attachments_2470", "exclude_releases_2470", "exclude_owner_projects_2470", "org_metadata_only_2470", "exclude_2470", 2470);
  deleteOrgMigrationArchive("org_2470", "repositories_2470", "lock_repositories_2470", "exclude_metadata_2470", "exclude_git_data_2470", "exclude_attachments_2470", "exclude_releases_2470", "exclude_owner_projects_2470", "org_metadata_only_2470", "exclude_2470", 2470);
  tryToDeleteANonExistingOrgMigration("org_2470", "repositories_2470", "lock_repositories_2470", "exclude_metadata_2470", "exclude_git_data_2470", "exclude_attachments_2470", "exclude_releases_2470", "exclude_owner_projects_2470", "org_metadata_only_2470", "exclude_2470", 2470);
  verifyOrgMigrationDoesNotExist("org_2470", "repositories_2470", "lock_repositories_2470", "exclude_metadata_2470", "exclude_git_data_2470", "exclude_attachments_2470", "exclude_releases_2470", "exclude_owner_projects_2470", "org_metadata_only_2470", "exclude_2470", 2470);
});

// Story: crud:OrgMigration:nondet:1:2
bthread("crud:OrgMigration:nondet:1:2", function () {
  let org = "org_2471";
  let repositories = "repositories_2471";
  let lock_repositories = "lock_repositories_2471";
  let exclude_metadata = "exclude_metadata_2471";
  let exclude_git_data = "exclude_git_data_2471";
  let exclude_attachments = "exclude_attachments_2471";
  let exclude_releases = "exclude_releases_2471";
  let exclude_owner_projects = "exclude_owner_projects_2471";
  let org_metadata_only = "org_metadata_only_2471";
  let exclude = "exclude_2471";
  let migration_id = 2471;
  startOrgMigration("org_2471", "repositories_2471", "lock_repositories_2471", "exclude_metadata_2471", "exclude_git_data_2471", "exclude_attachments_2471", "exclude_releases_2471", "exclude_owner_projects_2471", "org_metadata_only_2471", "exclude_2471", 2471);
  tryToAddExistingOrgMigration("org_2471", "repositories_2471", "lock_repositories_2471", "exclude_metadata_2471", "exclude_git_data_2471", "exclude_attachments_2471", "exclude_releases_2471", "exclude_owner_projects_2471", "org_metadata_only_2471", "exclude_2471", 2471);
  verifyOrgMigrationExists("org_2471", "repositories_2471", "lock_repositories_2471", "exclude_metadata_2471", "exclude_git_data_2471", "exclude_attachments_2471", "exclude_releases_2471", "exclude_owner_projects_2471", "org_metadata_only_2471", "exclude_2471", 2471);
  deleteOrgMigrationArchive("org_2471", "repositories_2471", "lock_repositories_2471", "exclude_metadata_2471", "exclude_git_data_2471", "exclude_attachments_2471", "exclude_releases_2471", "exclude_owner_projects_2471", "org_metadata_only_2471", "exclude_2471", 2471);
  tryToDeleteANonExistingOrgMigration("org_2471", "repositories_2471", "lock_repositories_2471", "exclude_metadata_2471", "exclude_git_data_2471", "exclude_attachments_2471", "exclude_releases_2471", "exclude_owner_projects_2471", "org_metadata_only_2471", "exclude_2471", 2471);
  verifyOrgMigrationDoesNotExist("org_2471", "repositories_2471", "lock_repositories_2471", "exclude_metadata_2471", "exclude_git_data_2471", "exclude_attachments_2471", "exclude_releases_2471", "exclude_owner_projects_2471", "org_metadata_only_2471", "exclude_2471", 2471);
});

// Story: crud:OrgMigration:nondet:negative:dup-add
bthread("crud:OrgMigration:nondet:negative:dup-add", function () {
  let org = "org_2476";
  let repositories = "repositories_2476";
  let lock_repositories = "lock_repositories_2476";
  let exclude_metadata = "exclude_metadata_2476";
  let exclude_git_data = "exclude_git_data_2476";
  let exclude_attachments = "exclude_attachments_2476";
  let exclude_releases = "exclude_releases_2476";
  let exclude_owner_projects = "exclude_owner_projects_2476";
  let org_metadata_only = "org_metadata_only_2476";
  let exclude = "exclude_2476";
  let migration_id = 2476;
  startOrgMigration("org_2476", "repositories_2476", "lock_repositories_2476", "exclude_metadata_2476", "exclude_git_data_2476", "exclude_attachments_2476", "exclude_releases_2476", "exclude_owner_projects_2476", "org_metadata_only_2476", "exclude_2476", 2476);
  verifyOrgMigrationExists("org_2476", "repositories_2476", "lock_repositories_2476", "exclude_metadata_2476", "exclude_git_data_2476", "exclude_attachments_2476", "exclude_releases_2476", "exclude_owner_projects_2476", "org_metadata_only_2476", "exclude_2476", 2476);
  tryToAddExistingOrgMigration("org_2476", "repositories_2476", "lock_repositories_2476", "exclude_metadata_2476", "exclude_git_data_2476", "exclude_attachments_2476", "exclude_releases_2476", "exclude_owner_projects_2476", "org_metadata_only_2476", "exclude_2476", 2476);
  verifyOrgMigrationExists("org_2476", "repositories_2476", "lock_repositories_2476", "exclude_metadata_2476", "exclude_git_data_2476", "exclude_attachments_2476", "exclude_releases_2476", "exclude_owner_projects_2476", "org_metadata_only_2476", "exclude_2476", 2476);
});

// Story: monitor:OrgMigration:add
bthread("monitor:OrgMigration:add", function () {
  while (true) {
    let ev = waitForAnyOrgMigrationAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgMigration.apply(null, args), function () {
      verifyOrgMigrationExists.apply(null, args);
    });
  }
});

// Story: crud:OrgMigrationArchive:read_only
bthread("crud:OrgMigrationArchive:read_only", function () {
  let org = "org_2480";
  let migration_id = 2480;
  verifyOrgMigrationArchiveExists("org_2480", 2480);
});

// Story: crud:OrgMigrationRepositories:read_only
bthread("crud:OrgMigrationRepositories:read_only", function () {
  let org = "org_2500";
  let migration_id = 2500;
  let per-page = "per-page_2500";
  let page = "page_2500";
  verifyOrgMigrationRepositoriesExists("org_2500", 2500, "per-page_2500", "page_2500");
});

// Story: crud:Import:nondet:1:1
bthread("crud:Import:nondet:1:1", function () {
  let owner = "owner_2510";
  let repo = "repo_2510";
  let vcs_url = "vcs_url_2510";
  let vcs = "vcs_2510";
  let vcs_username = "vcs_username_2510";
  let vcs_password = "vcs_password_2510";
  let tfvc_project = "tfvc_project_2510";
  startImport("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
  tryToAddExistingImport("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
  verifyImportExists("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
  updateImport("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
  cancelImport("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
  tryToDeleteANonExistingImport("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
  verifyImportDoesNotExist("owner_2510", "repo_2510", "vcs_url_2510", "vcs_2510", "vcs_username_2510", "vcs_password_2510", "tfvc_project_2510");
});

// Story: crud:Import:nondet:1:2
bthread("crud:Import:nondet:1:2", function () {
  let owner = "owner_2511";
  let repo = "repo_2511";
  let vcs_url = "vcs_url_2511";
  let vcs = "vcs_2511";
  let vcs_username = "vcs_username_2511";
  let vcs_password = "vcs_password_2511";
  let tfvc_project = "tfvc_project_2511";
  startImport("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
  tryToAddExistingImport("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
  updateImport("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
  verifyImportExists("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
  cancelImport("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
  tryToDeleteANonExistingImport("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
  verifyImportDoesNotExist("owner_2511", "repo_2511", "vcs_url_2511", "vcs_2511", "vcs_username_2511", "vcs_password_2511", "tfvc_project_2511");
});

// Story: crud:Import:nondet:negative:dup-add
bthread("crud:Import:nondet:negative:dup-add", function () {
  let owner = "owner_2516";
  let repo = "repo_2516";
  let vcs_url = "vcs_url_2516";
  let vcs = "vcs_2516";
  let vcs_username = "vcs_username_2516";
  let vcs_password = "vcs_password_2516";
  let tfvc_project = "tfvc_project_2516";
  startImport("owner_2516", "repo_2516", "vcs_url_2516", "vcs_2516", "vcs_username_2516", "vcs_password_2516", "tfvc_project_2516");
  verifyImportExists("owner_2516", "repo_2516", "vcs_url_2516", "vcs_2516", "vcs_username_2516", "vcs_password_2516", "tfvc_project_2516");
  tryToAddExistingImport("owner_2516", "repo_2516", "vcs_url_2516", "vcs_2516", "vcs_username_2516", "vcs_password_2516", "tfvc_project_2516");
  verifyImportExists("owner_2516", "repo_2516", "vcs_url_2516", "vcs_2516", "vcs_username_2516", "vcs_password_2516", "tfvc_project_2516");
});

// Story: crud:Import:nondet:existing:update
bthread("crud:Import:nondet:existing:update", function () {
  let ev = waitForAnyImportAdded();
  let args = Object.values(ev);
  block(matchDeletedImport.apply(null, args), function () {
    verifyImportExists.apply(null, args);
    updateImport.apply(null, args);
    verifyImportExists.apply(null, args);
  });
});

// Story: monitor:Import:add
bthread("monitor:Import:add", function () {
  while (true) {
    let ev = waitForAnyImportAdded();
    let args = Object.values(ev);
    block(matchDeletedImport.apply(null, args), function () {
      verifyImportExists.apply(null, args);
    });
  }
});

// Story: crud:ImportAuthors:read_only
bthread("crud:ImportAuthors:read_only", function () {
  let owner = "owner_2530";
  let repo = "repo_2530";
  let since-user = "since-user_2530";
  verifyImportAuthorsExists("owner_2530", "repo_2530", "since-user_2530");
});

// Story: crud:ImportLargeFiles:read_only
bthread("crud:ImportLargeFiles:read_only", function () {
  let owner = "owner_2540";
  let repo = "repo_2540";
  verifyImportLargeFilesExists("owner_2540", "repo_2540");
});

// Story: crud:UserMigration:nondet:1:1
bthread("crud:UserMigration:nondet:1:1", function () {
  let repositories = "repositories_2560";
  let lock_repositories = "lock_repositories_2560";
  let exclude_metadata = "exclude_metadata_2560";
  let exclude_git_data = "exclude_git_data_2560";
  let exclude_attachments = "exclude_attachments_2560";
  let exclude_releases = "exclude_releases_2560";
  let exclude_owner_projects = "exclude_owner_projects_2560";
  let org_metadata_only = "org_metadata_only_2560";
  let exclude = "exclude_2560";
  let migration_id = 2560;
  startUserMigration("repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  tryToAddExistingUserMigration("repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  verifyUserMigrationExists("repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  deleteUserMigrationArchive("repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  tryToDeleteANonExistingUserMigration("repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  verifyUserMigrationDoesNotExist("repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
});

// Story: crud:UserMigration:nondet:1:2
bthread("crud:UserMigration:nondet:1:2", function () {
  let repositories = "repositories_2561";
  let lock_repositories = "lock_repositories_2561";
  let exclude_metadata = "exclude_metadata_2561";
  let exclude_git_data = "exclude_git_data_2561";
  let exclude_attachments = "exclude_attachments_2561";
  let exclude_releases = "exclude_releases_2561";
  let exclude_owner_projects = "exclude_owner_projects_2561";
  let org_metadata_only = "org_metadata_only_2561";
  let exclude = "exclude_2561";
  let migration_id = 2561;
  startUserMigration("repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  tryToAddExistingUserMigration("repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  verifyUserMigrationExists("repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  deleteUserMigrationArchive("repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  tryToDeleteANonExistingUserMigration("repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  verifyUserMigrationDoesNotExist("repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
});

// Story: crud:UserMigration:nondet:negative:dup-add
bthread("crud:UserMigration:nondet:negative:dup-add", function () {
  let repositories = "repositories_2566";
  let lock_repositories = "lock_repositories_2566";
  let exclude_metadata = "exclude_metadata_2566";
  let exclude_git_data = "exclude_git_data_2566";
  let exclude_attachments = "exclude_attachments_2566";
  let exclude_releases = "exclude_releases_2566";
  let exclude_owner_projects = "exclude_owner_projects_2566";
  let org_metadata_only = "org_metadata_only_2566";
  let exclude = "exclude_2566";
  let migration_id = 2566;
  startUserMigration("repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
  verifyUserMigrationExists("repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
  tryToAddExistingUserMigration("repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
  verifyUserMigrationExists("repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
});

// Story: monitor:UserMigration:add
bthread("monitor:UserMigration:add", function () {
  while (true) {
    let ev = waitForAnyUserMigrationAdded();
    let args = Object.values(ev);
    block(matchDeletedUserMigration.apply(null, args), function () {
      verifyUserMigrationExists.apply(null, args);
    });
  }
});

// Story: crud:UserMigrationArchive:read_only
bthread("crud:UserMigrationArchive:read_only", function () {
  let migration_id = 2570;
  verifyUserMigrationArchiveExists(2570);
});

// Story: crud:UserMigrationRepositories:read_only
bthread("crud:UserMigrationRepositories:read_only", function () {
  let migration_id = 2590;
  let per-page = "per-page_2590";
  let page = "page_2590";
  verifyUserMigrationRepositoriesExists(2590, "per-page_2590", "page_2590");
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:1:1
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:1:1", function () {
  let enterprise = "enterprise_2600";
  let name = "name_2600";
  let configuration_id = 2600;
  createEnterpriseConfiguration("enterprise_2600", "name_2600", 2600);
  tryToAddExistingEnterpriseCodeSecurityConfiguration("enterprise_2600", "name_2600", 2600);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2600", "name_2600", 2600);
  updateEnterpriseConfiguration("enterprise_2600", "name_2600", 2600);
  deleteEnterpriseConfiguration("enterprise_2600", "name_2600", 2600);
  tryToDeleteANonExistingEnterpriseCodeSecurityConfiguration("enterprise_2600", "name_2600", 2600);
  verifyEnterpriseCodeSecurityConfigurationDoesNotExist("enterprise_2600", "name_2600", 2600);
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:1:2
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:1:2", function () {
  let enterprise = "enterprise_2601";
  let name = "name_2601";
  let configuration_id = 2601;
  createEnterpriseConfiguration("enterprise_2601", "name_2601", 2601);
  tryToAddExistingEnterpriseCodeSecurityConfiguration("enterprise_2601", "name_2601", 2601);
  updateEnterpriseConfiguration("enterprise_2601", "name_2601", 2601);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2601", "name_2601", 2601);
  deleteEnterpriseConfiguration("enterprise_2601", "name_2601", 2601);
  tryToDeleteANonExistingEnterpriseCodeSecurityConfiguration("enterprise_2601", "name_2601", 2601);
  verifyEnterpriseCodeSecurityConfigurationDoesNotExist("enterprise_2601", "name_2601", 2601);
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:negative:dup-add
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_2606";
  let name = "name_2606";
  let configuration_id = 2606;
  createEnterpriseConfiguration("enterprise_2606", "name_2606", 2606);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2606", "name_2606", 2606);
  tryToAddExistingEnterpriseCodeSecurityConfiguration("enterprise_2606", "name_2606", 2606);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2606", "name_2606", 2606);
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:existing:update
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:existing:update", function () {
  let ev = waitForAnyEnterpriseCodeSecurityConfigurationAdded();
  let args = Object.values(ev);
  block(matchDeletedEnterpriseCodeSecurityConfiguration.apply(null, args), function () {
    verifyEnterpriseCodeSecurityConfigurationExists.apply(null, args);
    updateEnterpriseConfiguration.apply(null, args);
    verifyEnterpriseCodeSecurityConfigurationExists.apply(null, args);
  });
});

// Story: monitor:EnterpriseCodeSecurityConfiguration:add
bthread("monitor:EnterpriseCodeSecurityConfiguration:add", function () {
  while (true) {
    let ev = waitForAnyEnterpriseCodeSecurityConfigurationAdded();
    let args = Object.values(ev);
    block(matchDeletedEnterpriseCodeSecurityConfiguration.apply(null, args), function () {
      verifyEnterpriseCodeSecurityConfigurationExists.apply(null, args);
    });
  }
});

// Story: crud:EnterpriseCodeSecurityConfigurationRepositories:read_only
bthread("crud:EnterpriseCodeSecurityConfigurationRepositories:read_only", function () {
  let enterprise = "enterprise_2630";
  let configuration_id = 2630;
  verifyEnterpriseCodeSecurityConfigurationRepositoriesExists("enterprise_2630", 2630);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:1:1
bthread("crud:OrgCodeSecurityConfiguration:nondet:1:1", function () {
  let org = "org_2640";
  let name = "name_2640";
  let configuration_id = 2640;
  createOrgConfiguration("org_2640", "name_2640", 2640);
  tryToAddExistingOrgCodeSecurityConfiguration("org_2640", "name_2640", 2640);
  verifyOrgCodeSecurityConfigurationExists("org_2640", "name_2640", 2640);
  updateOrgConfiguration("org_2640", "name_2640", 2640);
  deleteOrgConfiguration("org_2640", "name_2640", 2640);
  tryToDeleteANonExistingOrgCodeSecurityConfiguration("org_2640", "name_2640", 2640);
  verifyOrgCodeSecurityConfigurationDoesNotExist("org_2640", "name_2640", 2640);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:1:2
bthread("crud:OrgCodeSecurityConfiguration:nondet:1:2", function () {
  let org = "org_2641";
  let name = "name_2641";
  let configuration_id = 2641;
  createOrgConfiguration("org_2641", "name_2641", 2641);
  tryToAddExistingOrgCodeSecurityConfiguration("org_2641", "name_2641", 2641);
  updateOrgConfiguration("org_2641", "name_2641", 2641);
  verifyOrgCodeSecurityConfigurationExists("org_2641", "name_2641", 2641);
  deleteOrgConfiguration("org_2641", "name_2641", 2641);
  tryToDeleteANonExistingOrgCodeSecurityConfiguration("org_2641", "name_2641", 2641);
  verifyOrgCodeSecurityConfigurationDoesNotExist("org_2641", "name_2641", 2641);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:negative:dup-add
bthread("crud:OrgCodeSecurityConfiguration:nondet:negative:dup-add", function () {
  let org = "org_2646";
  let name = "name_2646";
  let configuration_id = 2646;
  createOrgConfiguration("org_2646", "name_2646", 2646);
  verifyOrgCodeSecurityConfigurationExists("org_2646", "name_2646", 2646);
  tryToAddExistingOrgCodeSecurityConfiguration("org_2646", "name_2646", 2646);
  verifyOrgCodeSecurityConfigurationExists("org_2646", "name_2646", 2646);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:existing:update
bthread("crud:OrgCodeSecurityConfiguration:nondet:existing:update", function () {
  let ev = waitForAnyOrgCodeSecurityConfigurationAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgCodeSecurityConfiguration.apply(null, args), function () {
    verifyOrgCodeSecurityConfigurationExists.apply(null, args);
    updateOrgConfiguration.apply(null, args);
    verifyOrgCodeSecurityConfigurationExists.apply(null, args);
  });
});

// Story: monitor:OrgCodeSecurityConfiguration:add
bthread("monitor:OrgCodeSecurityConfiguration:add", function () {
  while (true) {
    let ev = waitForAnyOrgCodeSecurityConfigurationAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgCodeSecurityConfiguration.apply(null, args), function () {
      verifyOrgCodeSecurityConfigurationExists.apply(null, args);
    });
  }
});

// Story: crud:OrgCodeSecurityConfigurationRepositories:read_only
bthread("crud:OrgCodeSecurityConfigurationRepositories:read_only", function () {
  let org = "org_2670";
  let configuration_id = 2670;
  verifyOrgCodeSecurityConfigurationRepositoriesExists("org_2670", 2670);
});

// Story: crud:RepositoryCodeSecurityConfiguration:read_only
bthread("crud:RepositoryCodeSecurityConfiguration:read_only", function () {
  let owner = "owner_2690";
  let repo = "repo_2690";
  verifyRepositoryCodeSecurityConfigurationExists("owner_2690", "repo_2690");
});

// Story: crud:DependabotAlertEnterprise:read_only
bthread("crud:DependabotAlertEnterprise:read_only", function () {
  let enterprise = "enterprise_2700";
  verifyDependabotAlertEnterpriseExists("enterprise_2700");
});

// Story: crud:DependabotAlertOrganization:read_only
bthread("crud:DependabotAlertOrganization:read_only", function () {
  let org = "org_2710";
  verifyDependabotAlertOrganizationExists("org_2710");
});

// Story: crud:DependabotAlertRepository:read_only
bthread("crud:DependabotAlertRepository:read_only", function () {
  let owner = "owner_2720";
  let repo = "repo_2720";
  let alert_number = "alert_number_2720";
  verifyDependabotAlertRepositoryExists("owner_2720", "repo_2720", "alert_number_2720");
});

// Story: crud:DependabotRepositoryAccess:read_only
bthread("crud:DependabotRepositoryAccess:read_only", function () {
  let org = "org_2730";
  verifyDependabotRepositoryAccessExists("org_2730");
});

// Story: crud:DependabotOrgSecret:nondet:1:1
bthread("crud:DependabotOrgSecret:nondet:1:1", function () {
  let org = "org_2750";
  let secret_name = "secret_name_2750";
  createOrUpdateOrgSecret("org_2750", "secret_name_2750");
  tryToAddExistingDependabotOrgSecret("org_2750", "secret_name_2750");
  verifyDependabotOrgSecretExists("org_2750", "secret_name_2750");
  deleteOrgSecret("org_2750", "secret_name_2750");
  tryToDeleteANonExistingDependabotOrgSecret("org_2750", "secret_name_2750");
  verifyDependabotOrgSecretDoesNotExist("org_2750", "secret_name_2750");
});

// Story: crud:DependabotOrgSecret:nondet:1:2
bthread("crud:DependabotOrgSecret:nondet:1:2", function () {
  let org = "org_2751";
  let secret_name = "secret_name_2751";
  createOrUpdateOrgSecret("org_2751", "secret_name_2751");
  tryToAddExistingDependabotOrgSecret("org_2751", "secret_name_2751");
  verifyDependabotOrgSecretExists("org_2751", "secret_name_2751");
  deleteOrgSecret("org_2751", "secret_name_2751");
  tryToDeleteANonExistingDependabotOrgSecret("org_2751", "secret_name_2751");
  verifyDependabotOrgSecretDoesNotExist("org_2751", "secret_name_2751");
});

// Story: crud:DependabotOrgSecret:nondet:negative:dup-add
bthread("crud:DependabotOrgSecret:nondet:negative:dup-add", function () {
  let org = "org_2756";
  let secret_name = "secret_name_2756";
  createOrUpdateOrgSecret("org_2756", "secret_name_2756");
  verifyDependabotOrgSecretExists("org_2756", "secret_name_2756");
  tryToAddExistingDependabotOrgSecret("org_2756", "secret_name_2756");
  verifyDependabotOrgSecretExists("org_2756", "secret_name_2756");
});

// Story: monitor:DependabotOrgSecret:add
bthread("monitor:DependabotOrgSecret:add", function () {
  while (true) {
    let ev = waitForAnyDependabotOrgSecretAdded();
    let args = Object.values(ev);
    block(matchDeletedDependabotOrgSecret.apply(null, args), function () {
      verifyDependabotOrgSecretExists.apply(null, args);
    });
  }
});

// Story: crud:DependabotOrgSecretSelectedRepository:nondet:1:1
bthread("crud:DependabotOrgSecretSelectedRepository:nondet:1:1", function () {
  let org = "org_2760";
  let secret_name = "secret_name_2760";
  let repository_id = 2760;
  addSelectedRepoToOrgSecret("org_2760", "secret_name_2760", 2760);
  tryToAddExistingDependabotOrgSecretSelectedRepository("org_2760", "secret_name_2760", 2760);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2760", "secret_name_2760", 2760);
  removeSelectedRepoFromOrgSecret("org_2760", "secret_name_2760", 2760);
  tryToDeleteANonExistingDependabotOrgSecretSelectedRepository("org_2760", "secret_name_2760", 2760);
  verifyDependabotOrgSecretSelectedRepositoryDoesNotExist("org_2760", "secret_name_2760", 2760);
});

// Story: crud:DependabotOrgSecretSelectedRepository:nondet:1:2
bthread("crud:DependabotOrgSecretSelectedRepository:nondet:1:2", function () {
  let org = "org_2761";
  let secret_name = "secret_name_2761";
  let repository_id = 2761;
  addSelectedRepoToOrgSecret("org_2761", "secret_name_2761", 2761);
  tryToAddExistingDependabotOrgSecretSelectedRepository("org_2761", "secret_name_2761", 2761);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2761", "secret_name_2761", 2761);
  removeSelectedRepoFromOrgSecret("org_2761", "secret_name_2761", 2761);
  tryToDeleteANonExistingDependabotOrgSecretSelectedRepository("org_2761", "secret_name_2761", 2761);
  verifyDependabotOrgSecretSelectedRepositoryDoesNotExist("org_2761", "secret_name_2761", 2761);
});

// Story: crud:DependabotOrgSecretSelectedRepository:nondet:negative:dup-add
bthread("crud:DependabotOrgSecretSelectedRepository:nondet:negative:dup-add", function () {
  let org = "org_2766";
  let secret_name = "secret_name_2766";
  let repository_id = 2766;
  addSelectedRepoToOrgSecret("org_2766", "secret_name_2766", 2766);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2766", "secret_name_2766", 2766);
  tryToAddExistingDependabotOrgSecretSelectedRepository("org_2766", "secret_name_2766", 2766);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2766", "secret_name_2766", 2766);
});

// Story: monitor:DependabotOrgSecretSelectedRepository:add
bthread("monitor:DependabotOrgSecretSelectedRepository:add", function () {
  while (true) {
    let ev = waitForAnyDependabotOrgSecretSelectedRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedDependabotOrgSecretSelectedRepository.apply(null, args), function () {
      verifyDependabotOrgSecretSelectedRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:DependabotOrgSecretSelectedRepositories:read_only
bthread("crud:DependabotOrgSecretSelectedRepositories:read_only", function () {
  let org = "org_2770";
  let secret_name = "secret_name_2770";
  verifyDependabotOrgSecretSelectedRepositoriesExists("org_2770", "secret_name_2770");
});

// Story: crud:DependabotOrgSecrets:read_only
bthread("crud:DependabotOrgSecrets:read_only", function () {
  let org = "org_2780";
  verifyDependabotOrgSecretsExists("org_2780");
});

// Story: crud:DependabotOrgPublicKey:read_only
bthread("crud:DependabotOrgPublicKey:read_only", function () {
  let org = "org_2790";
  verifyDependabotOrgPublicKeyExists("org_2790");
});

// Story: crud:DependabotRepoSecret:nondet:1:1
bthread("crud:DependabotRepoSecret:nondet:1:1", function () {
  let owner = "owner_2800";
  let repo = "repo_2800";
  let secret_name = "secret_name_2800";
  createOrUpdateRepoSecret("owner_2800", "repo_2800", "secret_name_2800");
  tryToAddExistingDependabotRepoSecret("owner_2800", "repo_2800", "secret_name_2800");
  verifyDependabotRepoSecretExists("owner_2800", "repo_2800", "secret_name_2800");
  deleteRepoSecret("owner_2800", "repo_2800", "secret_name_2800");
  tryToDeleteANonExistingDependabotRepoSecret("owner_2800", "repo_2800", "secret_name_2800");
  verifyDependabotRepoSecretDoesNotExist("owner_2800", "repo_2800", "secret_name_2800");
});

// Story: crud:DependabotRepoSecret:nondet:1:2
bthread("crud:DependabotRepoSecret:nondet:1:2", function () {
  let owner = "owner_2801";
  let repo = "repo_2801";
  let secret_name = "secret_name_2801";
  createOrUpdateRepoSecret("owner_2801", "repo_2801", "secret_name_2801");
  tryToAddExistingDependabotRepoSecret("owner_2801", "repo_2801", "secret_name_2801");
  verifyDependabotRepoSecretExists("owner_2801", "repo_2801", "secret_name_2801");
  deleteRepoSecret("owner_2801", "repo_2801", "secret_name_2801");
  tryToDeleteANonExistingDependabotRepoSecret("owner_2801", "repo_2801", "secret_name_2801");
  verifyDependabotRepoSecretDoesNotExist("owner_2801", "repo_2801", "secret_name_2801");
});

// Story: crud:DependabotRepoSecret:nondet:negative:dup-add
bthread("crud:DependabotRepoSecret:nondet:negative:dup-add", function () {
  let owner = "owner_2806";
  let repo = "repo_2806";
  let secret_name = "secret_name_2806";
  createOrUpdateRepoSecret("owner_2806", "repo_2806", "secret_name_2806");
  verifyDependabotRepoSecretExists("owner_2806", "repo_2806", "secret_name_2806");
  tryToAddExistingDependabotRepoSecret("owner_2806", "repo_2806", "secret_name_2806");
  verifyDependabotRepoSecretExists("owner_2806", "repo_2806", "secret_name_2806");
});

// Story: monitor:DependabotRepoSecret:add
bthread("monitor:DependabotRepoSecret:add", function () {
  while (true) {
    let ev = waitForAnyDependabotRepoSecretAdded();
    let args = Object.values(ev);
    block(matchDeletedDependabotRepoSecret.apply(null, args), function () {
      verifyDependabotRepoSecretExists.apply(null, args);
    });
  }
});

// Story: crud:DependabotRepoSecrets:read_only
bthread("crud:DependabotRepoSecrets:read_only", function () {
  let owner = "owner_2810";
  let repo = "repo_2810";
  verifyDependabotRepoSecretsExists("owner_2810", "repo_2810");
});

// Story: crud:DependabotRepoPublicKey:read_only
bthread("crud:DependabotRepoPublicKey:read_only", function () {
  let owner = "owner_2820";
  let repo = "repo_2820";
  verifyDependabotRepoPublicKeyExists("owner_2820", "repo_2820");
});

// Story: crud:OrganizationProject:read_only
bthread("crud:OrganizationProject:read_only", function () {
  let org = "org_2830";
  let name = "name_2830";
  verifyOrganizationProjectExists("org_2830", "name_2830");
});

// Story: crud:UserProject:read_only
bthread("crud:UserProject:read_only", function () {
  let username = "username_2840";
  let project_number = "project_number_2840";
  let name = "name_2840";
  verifyUserProjectExists("username_2840", "project_number_2840", "name_2840");
});

// Story: crud:OrganizationProjectField:read_only
bthread("crud:OrganizationProjectField:read_only", function () {
  let org = "org_2850";
  let project_number = "project_number_2850";
  let field_id = 2850;
  verifyOrganizationProjectFieldExists("org_2850", "project_number_2850", 2850);
});

// Story: crud:UserProjectField:read_only
bthread("crud:UserProjectField:read_only", function () {
  let username = "username_2860";
  let project_number = "project_number_2860";
  let field_id = 2860;
  verifyUserProjectFieldExists("username_2860", "project_number_2860", 2860);
});

// Story: crud:OrganizationProjectItem:nondet:1:1
bthread("crud:OrganizationProjectItem:nondet:1:1", function () {
  let org = "org_2870";
  let project_number = "project_number_2870";
  let type = "type_2870";
  let id = 2870;
  let item_id = 2870;
  addOrgProjectItem("org_2870", "project_number_2870", "type_2870", 2870, 2870);
  tryToAddExistingOrganizationProjectItem("org_2870", "project_number_2870", "type_2870", 2870, 2870);
  verifyOrganizationProjectItemExists("org_2870", "project_number_2870", "type_2870", 2870, 2870);
  updateOrgProjectItem("org_2870", "project_number_2870", "type_2870", 2870, 2870);
  deleteOrgProjectItem("org_2870", "project_number_2870", "type_2870", 2870, 2870);
  tryToDeleteANonExistingOrganizationProjectItem("org_2870", "project_number_2870", "type_2870", 2870, 2870);
  verifyOrganizationProjectItemDoesNotExist("org_2870", "project_number_2870", "type_2870", 2870, 2870);
});

// Story: crud:OrganizationProjectItem:nondet:1:2
bthread("crud:OrganizationProjectItem:nondet:1:2", function () {
  let org = "org_2871";
  let project_number = "project_number_2871";
  let type = "type_2871";
  let id = 2871;
  let item_id = 2871;
  addOrgProjectItem("org_2871", "project_number_2871", "type_2871", 2871, 2871);
  tryToAddExistingOrganizationProjectItem("org_2871", "project_number_2871", "type_2871", 2871, 2871);
  updateOrgProjectItem("org_2871", "project_number_2871", "type_2871", 2871, 2871);
  verifyOrganizationProjectItemExists("org_2871", "project_number_2871", "type_2871", 2871, 2871);
  deleteOrgProjectItem("org_2871", "project_number_2871", "type_2871", 2871, 2871);
  tryToDeleteANonExistingOrganizationProjectItem("org_2871", "project_number_2871", "type_2871", 2871, 2871);
  verifyOrganizationProjectItemDoesNotExist("org_2871", "project_number_2871", "type_2871", 2871, 2871);
});

// Story: crud:OrganizationProjectItem:nondet:negative:dup-add
bthread("crud:OrganizationProjectItem:nondet:negative:dup-add", function () {
  let org = "org_2876";
  let project_number = "project_number_2876";
  let type = "type_2876";
  let id = 2876;
  let item_id = 2876;
  addOrgProjectItem("org_2876", "project_number_2876", "type_2876", 2876, 2876);
  verifyOrganizationProjectItemExists("org_2876", "project_number_2876", "type_2876", 2876, 2876);
  tryToAddExistingOrganizationProjectItem("org_2876", "project_number_2876", "type_2876", 2876, 2876);
  verifyOrganizationProjectItemExists("org_2876", "project_number_2876", "type_2876", 2876, 2876);
});

// Story: crud:OrganizationProjectItem:nondet:existing:update
bthread("crud:OrganizationProjectItem:nondet:existing:update", function () {
  let ev = waitForAnyOrganizationProjectItemAdded();
  let args = Object.values(ev);
  block(matchDeletedOrganizationProjectItem.apply(null, args), function () {
    verifyOrganizationProjectItemExists.apply(null, args);
    updateOrgProjectItem.apply(null, args);
    verifyOrganizationProjectItemExists.apply(null, args);
  });
});

// Story: monitor:OrganizationProjectItem:add
bthread("monitor:OrganizationProjectItem:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationProjectItemAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganizationProjectItem.apply(null, args), function () {
      verifyOrganizationProjectItemExists.apply(null, args);
    });
  }
});

// Story: crud:UserProjectItem:nondet:1:1
bthread("crud:UserProjectItem:nondet:1:1", function () {
  let username = "username_2880";
  let project_number = "project_number_2880";
  let type = "type_2880";
  let id = 2880;
  let item_id = 2880;
  addUserProjectItem("username_2880", "project_number_2880", "type_2880", 2880, 2880);
  tryToAddExistingUserProjectItem("username_2880", "project_number_2880", "type_2880", 2880, 2880);
  verifyUserProjectItemExists("username_2880", "project_number_2880", "type_2880", 2880, 2880);
  updateUserProjectItem("username_2880", "project_number_2880", "type_2880", 2880, 2880);
  deleteUserProjectItem("username_2880", "project_number_2880", "type_2880", 2880, 2880);
  tryToDeleteANonExistingUserProjectItem("username_2880", "project_number_2880", "type_2880", 2880, 2880);
  verifyUserProjectItemDoesNotExist("username_2880", "project_number_2880", "type_2880", 2880, 2880);
});

// Story: crud:UserProjectItem:nondet:1:2
bthread("crud:UserProjectItem:nondet:1:2", function () {
  let username = "username_2881";
  let project_number = "project_number_2881";
  let type = "type_2881";
  let id = 2881;
  let item_id = 2881;
  addUserProjectItem("username_2881", "project_number_2881", "type_2881", 2881, 2881);
  tryToAddExistingUserProjectItem("username_2881", "project_number_2881", "type_2881", 2881, 2881);
  updateUserProjectItem("username_2881", "project_number_2881", "type_2881", 2881, 2881);
  verifyUserProjectItemExists("username_2881", "project_number_2881", "type_2881", 2881, 2881);
  deleteUserProjectItem("username_2881", "project_number_2881", "type_2881", 2881, 2881);
  tryToDeleteANonExistingUserProjectItem("username_2881", "project_number_2881", "type_2881", 2881, 2881);
  verifyUserProjectItemDoesNotExist("username_2881", "project_number_2881", "type_2881", 2881, 2881);
});

// Story: crud:UserProjectItem:nondet:negative:dup-add
bthread("crud:UserProjectItem:nondet:negative:dup-add", function () {
  let username = "username_2886";
  let project_number = "project_number_2886";
  let type = "type_2886";
  let id = 2886;
  let item_id = 2886;
  addUserProjectItem("username_2886", "project_number_2886", "type_2886", 2886, 2886);
  verifyUserProjectItemExists("username_2886", "project_number_2886", "type_2886", 2886, 2886);
  tryToAddExistingUserProjectItem("username_2886", "project_number_2886", "type_2886", 2886, 2886);
  verifyUserProjectItemExists("username_2886", "project_number_2886", "type_2886", 2886, 2886);
});

// Story: crud:UserProjectItem:nondet:existing:update
bthread("crud:UserProjectItem:nondet:existing:update", function () {
  let ev = waitForAnyUserProjectItemAdded();
  let args = Object.values(ev);
  block(matchDeletedUserProjectItem.apply(null, args), function () {
    verifyUserProjectItemExists.apply(null, args);
    updateUserProjectItem.apply(null, args);
    verifyUserProjectItemExists.apply(null, args);
  });
});

// Story: monitor:UserProjectItem:add
bthread("monitor:UserProjectItem:add", function () {
  while (true) {
    let ev = waitForAnyUserProjectItemAdded();
    let args = Object.values(ev);
    block(matchDeletedUserProjectItem.apply(null, args), function () {
      verifyUserProjectItemExists.apply(null, args);
    });
  }
});

// Story: crud:Blob:read_only
bthread("crud:Blob:read_only", function () {
  let owner = "owner_2890";
  let repo = "repo_2890";
  let content = "content_2890";
  let encoding = "encoding_2890";
  let file_sha = "file_sha_2890";
  verifyBlobExists("owner_2890", "repo_2890", "content_2890", "encoding_2890", "file_sha_2890");
});

// Story: crud:Commit:read_only
bthread("crud:Commit:read_only", function () {
  let owner = "owner_2900";
  let repo = "repo_2900";
  let message = "message_2900";
  let tree = "tree_2900";
  let parents = "parents_2900";
  let author = "author_2900";
  let committer = "committer_2900";
  let signature = "signature_2900";
  let commit_sha = "commit_sha_2900";
  verifyCommitExists("owner_2900", "repo_2900", "message_2900", "tree_2900", "parents_2900", "author_2900", "committer_2900", "signature_2900", "commit_sha_2900");
});

// Story: crud:Reference:nondet:1:1
bthread("crud:Reference:nondet:1:1", function () {
  let owner = "owner_2910";
  let repo = "repo_2910";
  let ref = "ref_2910";
  let sha = "sha_2910";
  let force = "force_2910";
  createRef("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
  tryToAddExistingReference("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
  verifyReferenceExists("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
  updateRef("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
  deleteRef("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
  tryToDeleteANonExistingReference("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
  verifyReferenceDoesNotExist("owner_2910", "repo_2910", "ref_2910", "sha_2910", "force_2910");
});

// Story: crud:Reference:nondet:1:2
bthread("crud:Reference:nondet:1:2", function () {
  let owner = "owner_2911";
  let repo = "repo_2911";
  let ref = "ref_2911";
  let sha = "sha_2911";
  let force = "force_2911";
  createRef("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
  tryToAddExistingReference("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
  updateRef("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
  verifyReferenceExists("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
  deleteRef("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
  tryToDeleteANonExistingReference("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
  verifyReferenceDoesNotExist("owner_2911", "repo_2911", "ref_2911", "sha_2911", "force_2911");
});

// Story: crud:Reference:nondet:negative:dup-add
bthread("crud:Reference:nondet:negative:dup-add", function () {
  let owner = "owner_2916";
  let repo = "repo_2916";
  let ref = "ref_2916";
  let sha = "sha_2916";
  let force = "force_2916";
  createRef("owner_2916", "repo_2916", "ref_2916", "sha_2916", "force_2916");
  verifyReferenceExists("owner_2916", "repo_2916", "ref_2916", "sha_2916", "force_2916");
  tryToAddExistingReference("owner_2916", "repo_2916", "ref_2916", "sha_2916", "force_2916");
  verifyReferenceExists("owner_2916", "repo_2916", "ref_2916", "sha_2916", "force_2916");
});

// Story: crud:Reference:nondet:existing:update
bthread("crud:Reference:nondet:existing:update", function () {
  let ev = waitForAnyReferenceAdded();
  let args = Object.values(ev);
  block(matchDeletedReference.apply(null, args), function () {
    verifyReferenceExists.apply(null, args);
    updateRef.apply(null, args);
    verifyReferenceExists.apply(null, args);
  });
});

// Story: monitor:Reference:add
bthread("monitor:Reference:add", function () {
  while (true) {
    let ev = waitForAnyReferenceAdded();
    let args = Object.values(ev);
    block(matchDeletedReference.apply(null, args), function () {
      verifyReferenceExists.apply(null, args);
    });
  }
});

// Story: crud:Tag:read_only
bthread("crud:Tag:read_only", function () {
  let owner = "owner_2920";
  let repo = "repo_2920";
  let tag = "tag_2920";
  let message = "message_2920";
  let object = "object_2920";
  let type = "type_2920";
  let tagger = "tagger_2920";
  let tag_sha = "tag_sha_2920";
  verifyTagExists("owner_2920", "repo_2920", "tag_2920", "message_2920", "object_2920", "type_2920", "tagger_2920", "tag_sha_2920");
});

// Story: crud:Tree:read_only
bthread("crud:Tree:read_only", function () {
  let owner = "owner_2930";
  let repo = "repo_2930";
  let tree = "tree_2930";
  let base_tree = "base_tree_2930";
  let tree_sha = "tree_sha_2930";
  let recursive = "recursive_2930";
  verifyTreeExists("owner_2930", "repo_2930", "tree_2930", "base_tree_2930", "tree_sha_2930", "recursive_2930");
});

// Story: crud:Gist:nondet:1:1
bthread("crud:Gist:nondet:1:1", function () {
  let description = "description_2940";
  let gist_id = 2940;
  createGist("description_2940", 2940);
  tryToAddExistingGist("description_2940", 2940);
  verifyGistExists("description_2940", 2940);
  updateGist("description_2940", 2940);
  deleteGist("description_2940", 2940);
  tryToDeleteANonExistingGist("description_2940", 2940);
  verifyGistDoesNotExist("description_2940", 2940);
});

// Story: crud:Gist:nondet:1:2
bthread("crud:Gist:nondet:1:2", function () {
  let description = "description_2941";
  let gist_id = 2941;
  createGist("description_2941", 2941);
  tryToAddExistingGist("description_2941", 2941);
  updateGist("description_2941", 2941);
  verifyGistExists("description_2941", 2941);
  deleteGist("description_2941", 2941);
  tryToDeleteANonExistingGist("description_2941", 2941);
  verifyGistDoesNotExist("description_2941", 2941);
});

// Story: crud:Gist:nondet:negative:dup-add
bthread("crud:Gist:nondet:negative:dup-add", function () {
  let description = "description_2946";
  let gist_id = 2946;
  createGist("description_2946", 2946);
  verifyGistExists("description_2946", 2946);
  tryToAddExistingGist("description_2946", 2946);
  verifyGistExists("description_2946", 2946);
});

// Story: crud:Gist:nondet:existing:update
bthread("crud:Gist:nondet:existing:update", function () {
  let ev = waitForAnyGistAdded();
  let args = Object.values(ev);
  block(matchDeletedGist.apply(null, args), function () {
    verifyGistExists.apply(null, args);
    updateGist.apply(null, args);
    verifyGistExists.apply(null, args);
  });
});

// Story: monitor:Gist:add
bthread("monitor:Gist:add", function () {
  while (true) {
    let ev = waitForAnyGistAdded();
    let args = Object.values(ev);
    block(matchDeletedGist.apply(null, args), function () {
      verifyGistExists.apply(null, args);
    });
  }
});

// Story: crud:GistComment:nondet:1:1
bthread("crud:GistComment:nondet:1:1", function () {
  let gist_id = 2950;
  let body = "body_2950";
  let comment_id = 2950;
  createGistComment(2950, "body_2950", 2950);
  tryToAddExistingGistComment(2950, "body_2950", 2950);
  verifyGistCommentExists(2950, "body_2950", 2950);
  updateGistComment(2950, "body_2950", 2950);
  deleteGistComment(2950, "body_2950", 2950);
  tryToDeleteANonExistingGistComment(2950, "body_2950", 2950);
  verifyGistCommentDoesNotExist(2950, "body_2950", 2950);
});

// Story: crud:GistComment:nondet:1:2
bthread("crud:GistComment:nondet:1:2", function () {
  let gist_id = 2951;
  let body = "body_2951";
  let comment_id = 2951;
  createGistComment(2951, "body_2951", 2951);
  tryToAddExistingGistComment(2951, "body_2951", 2951);
  updateGistComment(2951, "body_2951", 2951);
  verifyGistCommentExists(2951, "body_2951", 2951);
  deleteGistComment(2951, "body_2951", 2951);
  tryToDeleteANonExistingGistComment(2951, "body_2951", 2951);
  verifyGistCommentDoesNotExist(2951, "body_2951", 2951);
});

// Story: crud:GistComment:nondet:negative:dup-add
bthread("crud:GistComment:nondet:negative:dup-add", function () {
  let gist_id = 2956;
  let body = "body_2956";
  let comment_id = 2956;
  createGistComment(2956, "body_2956", 2956);
  verifyGistCommentExists(2956, "body_2956", 2956);
  tryToAddExistingGistComment(2956, "body_2956", 2956);
  verifyGistCommentExists(2956, "body_2956", 2956);
});

// Story: crud:GistComment:nondet:existing:update
bthread("crud:GistComment:nondet:existing:update", function () {
  let ev = waitForAnyGistCommentAdded();
  let args = Object.values(ev);
  block(matchDeletedGistComment.apply(null, args), function () {
    verifyGistCommentExists.apply(null, args);
    updateGistComment.apply(null, args);
    verifyGistCommentExists.apply(null, args);
  });
});

// Story: monitor:GistComment:add
bthread("monitor:GistComment:add", function () {
  while (true) {
    let ev = waitForAnyGistCommentAdded();
    let args = Object.values(ev);
    block(matchDeletedGistComment.apply(null, args), function () {
      verifyGistCommentExists.apply(null, args);
    });
  }
});

// Story: crud:ProjectColumn:read_only
bthread("crud:ProjectColumn:read_only", function () {
  let column_id = 2960;
  let name = "name_2960";
  let position = "position_2960";
  verifyProjectColumnExists(2960, "name_2960", "position_2960");
});

// Story: crud:Project:read_only
bthread("crud:Project:read_only", function () {
  let project_id = 2970;
  let name = "name_2970";
  verifyProjectExists(2970, "name_2970");
});

// Story: crud:ProjectCollaborator:nondet:1:1
bthread("crud:ProjectCollaborator:nondet:1:1", function () {
  let project_id = 2980;
  let username = "username_2980";
  let permission = "permission_2980";
  addCollaborator(2980, "username_2980", "permission_2980");
  tryToAddExistingProjectCollaborator(2980, "username_2980", "permission_2980");
  verifyProjectCollaboratorExists(2980, "username_2980", "permission_2980");
  removeCollaborator(2980, "username_2980", "permission_2980");
  tryToDeleteANonExistingProjectCollaborator(2980, "username_2980", "permission_2980");
  verifyProjectCollaboratorDoesNotExist(2980, "username_2980", "permission_2980");
});

// Story: crud:ProjectCollaborator:nondet:1:2
bthread("crud:ProjectCollaborator:nondet:1:2", function () {
  let project_id = 2981;
  let username = "username_2981";
  let permission = "permission_2981";
  addCollaborator(2981, "username_2981", "permission_2981");
  tryToAddExistingProjectCollaborator(2981, "username_2981", "permission_2981");
  verifyProjectCollaboratorExists(2981, "username_2981", "permission_2981");
  removeCollaborator(2981, "username_2981", "permission_2981");
  tryToDeleteANonExistingProjectCollaborator(2981, "username_2981", "permission_2981");
  verifyProjectCollaboratorDoesNotExist(2981, "username_2981", "permission_2981");
});

// Story: crud:ProjectCollaborator:nondet:negative:dup-add
bthread("crud:ProjectCollaborator:nondet:negative:dup-add", function () {
  let project_id = 2986;
  let username = "username_2986";
  let permission = "permission_2986";
  addCollaborator(2986, "username_2986", "permission_2986");
  verifyProjectCollaboratorExists(2986, "username_2986", "permission_2986");
  tryToAddExistingProjectCollaborator(2986, "username_2986", "permission_2986");
  verifyProjectCollaboratorExists(2986, "username_2986", "permission_2986");
});

// Story: monitor:ProjectCollaborator:add
bthread("monitor:ProjectCollaborator:add", function () {
  while (true) {
    let ev = waitForAnyProjectCollaboratorAdded();
    let args = Object.values(ev);
    block(matchDeletedProjectCollaborator.apply(null, args), function () {
      verifyProjectCollaboratorExists.apply(null, args);
    });
  }
});

// Story: crud:ProjectCollaboratorsList:read_only
bthread("crud:ProjectCollaboratorsList:read_only", function () {
  let project_id = 2990;
  verifyProjectCollaboratorsListExists(2990);
});

// Story: crud:ProjectColumnList:read_only
bthread("crud:ProjectColumnList:read_only", function () {
  let project_id = 3000;
  let name = "name_3000";
  verifyProjectColumnListExists(3000, "name_3000");
});

// Story: crud:RepositoryProject:read_only
bthread("crud:RepositoryProject:read_only", function () {
  let owner = "owner_3010";
  let repo = "repo_3010";
  let name = "name_3010";
  verifyRepositoryProjectExists("owner_3010", "repo_3010", "name_3010");
});

// Story: crud:UserProjectsList:read_only
bthread("crud:UserProjectsList:read_only", function () {
  let username = "username_3020";
  verifyUserProjectsListExists("username_3020");
});

// Story: crud:CheckRun:read_only
bthread("crud:CheckRun:read_only", function () {
  let owner = "owner_3030";
  let repo = "repo_3030";
  let name = "name_3030";
  let head_sha = "head_sha_3030";
  let check_run_id = 3030;
  verifyCheckRunExists("owner_3030", "repo_3030", "name_3030", "head_sha_3030", 3030);
});

// Story: crud:CheckSuite:read_only
bthread("crud:CheckSuite:read_only", function () {
  let owner = "owner_3040";
  let repo = "repo_3040";
  let head_sha = "head_sha_3040";
  let check_suite_id = 3040;
  verifyCheckSuiteExists("owner_3040", "repo_3040", "head_sha_3040", 3040);
});

// Story: crud:OrganizationBilling:read_only
bthread("crud:OrganizationBilling:read_only", function () {
  let org = "org_3050";
  let year = "year_3050";
  let month = "month_3050";
  let day = "day_3050";
  let hour = "hour_3050";
  verifyOrganizationBillingExists("org_3050", "year_3050", "month_3050", "day_3050", "hour_3050");
});

// Story: crud:OrganizationBillingPremiumRequestUsage:read_only
bthread("crud:OrganizationBillingPremiumRequestUsage:read_only", function () {
  let org = "org_3060";
  let year = "year_3060";
  let month = "month_3060";
  let day = "day_3060";
  let user = "user_3060";
  let model = "model_3060";
  let product = "product_3060";
  verifyOrganizationBillingPremiumRequestUsageExists("org_3060", "year_3060", "month_3060", "day_3060", "user_3060", "model_3060", "product_3060");
});

// Story: crud:OrganizationBillingActions:read_only
bthread("crud:OrganizationBillingActions:read_only", function () {
  let org = "org_3070";
  verifyOrganizationBillingActionsExists("org_3070");
});

// Story: crud:OrganizationBillingPackages:read_only
bthread("crud:OrganizationBillingPackages:read_only", function () {
  let org = "org_3080";
  verifyOrganizationBillingPackagesExists("org_3080");
});

// Story: crud:OrganizationBillingSharedStorage:read_only
bthread("crud:OrganizationBillingSharedStorage:read_only", function () {
  let org = "org_3090";
  verifyOrganizationBillingSharedStorageExists("org_3090");
});

// Story: crud:UserBillingActions:read_only
bthread("crud:UserBillingActions:read_only", function () {
  let username = "username_3100";
  verifyUserBillingActionsExists("username_3100");
});

// Story: crud:UserBillingPackages:read_only
bthread("crud:UserBillingPackages:read_only", function () {
  let username = "username_3110";
  verifyUserBillingPackagesExists("username_3110");
});

// Story: crud:UserBillingPremiumRequestUsage:read_only
bthread("crud:UserBillingPremiumRequestUsage:read_only", function () {
  let username = "username_3120";
  let year = "year_3120";
  let month = "month_3120";
  let day = "day_3120";
  let model = "model_3120";
  let product = "product_3120";
  verifyUserBillingPremiumRequestUsageExists("username_3120", "year_3120", "month_3120", "day_3120", "model_3120", "product_3120");
});

// Story: crud:UserBillingSharedStorage:read_only
bthread("crud:UserBillingSharedStorage:read_only", function () {
  let username = "username_3130";
  verifyUserBillingSharedStorageExists("username_3130");
});

// Story: crud:UserBillingUsage:read_only
bthread("crud:UserBillingUsage:read_only", function () {
  let username = "username_3140";
  let year = "year_3140";
  let month = "month_3140";
  let day = "day_3140";
  let hour = "hour_3140";
  verifyUserBillingUsageExists("username_3140", "year_3140", "month_3140", "day_3140", "hour_3140");
});

// Story: crud:GlobalSecurityAdvisory:read_only
bthread("crud:GlobalSecurityAdvisory:read_only", function () {
  let ghsa_id = 3150;
  verifyGlobalSecurityAdvisoryExists(3150);
});

// Story: crud:RepositorySecurityAdvisory:read_only
bthread("crud:RepositorySecurityAdvisory:read_only", function () {
  let owner = "owner_3170";
  let repo = "repo_3170";
  let ghsa_id = 3170;
  verifyRepositorySecurityAdvisoryExists("owner_3170", "repo_3170", 3170);
});

// Story: crud:SecretScanningAlert:read_only
bthread("crud:SecretScanningAlert:read_only", function () {
  let owner = "owner_3210";
  let repo = "repo_3210";
  let alert_number = "alert_number_3210";
  verifySecretScanningAlertExists("owner_3210", "repo_3210", "alert_number_3210");
});

// Story: crud:SecretScanningScanHistory:read_only
bthread("crud:SecretScanningScanHistory:read_only", function () {
  let owner = "owner_3270";
  let repo = "repo_3270";
  verifySecretScanningScanHistoryExists("owner_3270", "repo_3270");
});

// Story: crud:CopilotBilling:read_only
bthread("crud:CopilotBilling:read_only", function () {
  let org = "org_3290";
  verifyCopilotBillingExists("org_3290");
});

// Story: crud:CopilotSeats:read_only
bthread("crud:CopilotSeats:read_only", function () {
  let org = "org_3300";
  verifyCopilotSeatsExists("org_3300");
});

// Story: crud:CopilotSelectedTeams:nondet:1:1
bthread("crud:CopilotSelectedTeams:nondet:1:1", function () {
  let org = "org_3310";
  let selected_teams = "selected_teams_3310";
  addCopilotSeatsForTeams("org_3310", "selected_teams_3310");
  tryToAddExistingCopilotSelectedTeams("org_3310", "selected_teams_3310");
  verifyCopilotSelectedTeamsExists("org_3310", "selected_teams_3310");
  removeCopilotSeatsForTeams("org_3310", "selected_teams_3310");
  tryToDeleteANonExistingCopilotSelectedTeams("org_3310", "selected_teams_3310");
  verifyCopilotSelectedTeamsDoesNotExist("org_3310", "selected_teams_3310");
});

// Story: crud:CopilotSelectedTeams:nondet:1:2
bthread("crud:CopilotSelectedTeams:nondet:1:2", function () {
  let org = "org_3311";
  let selected_teams = "selected_teams_3311";
  addCopilotSeatsForTeams("org_3311", "selected_teams_3311");
  tryToAddExistingCopilotSelectedTeams("org_3311", "selected_teams_3311");
  verifyCopilotSelectedTeamsExists("org_3311", "selected_teams_3311");
  removeCopilotSeatsForTeams("org_3311", "selected_teams_3311");
  tryToDeleteANonExistingCopilotSelectedTeams("org_3311", "selected_teams_3311");
  verifyCopilotSelectedTeamsDoesNotExist("org_3311", "selected_teams_3311");
});

// Story: crud:CopilotSelectedTeams:nondet:negative:dup-add
bthread("crud:CopilotSelectedTeams:nondet:negative:dup-add", function () {
  let org = "org_3316";
  let selected_teams = "selected_teams_3316";
  addCopilotSeatsForTeams("org_3316", "selected_teams_3316");
  verifyCopilotSelectedTeamsExists("org_3316", "selected_teams_3316");
  tryToAddExistingCopilotSelectedTeams("org_3316", "selected_teams_3316");
  verifyCopilotSelectedTeamsExists("org_3316", "selected_teams_3316");
});

// Story: monitor:CopilotSelectedTeams:add
bthread("monitor:CopilotSelectedTeams:add", function () {
  while (true) {
    let ev = waitForAnyCopilotSelectedTeamsAdded();
    let args = Object.values(ev);
    block(matchDeletedCopilotSelectedTeams.apply(null, args), function () {
      verifyCopilotSelectedTeamsExists.apply(null, args);
    });
  }
});

// Story: crud:CopilotSelectedUsers:nondet:1:1
bthread("crud:CopilotSelectedUsers:nondet:1:1", function () {
  let org = "org_3320";
  let selected_usernames = "selected_usernames_3320";
  addCopilotSeatsForUsers("org_3320", "selected_usernames_3320");
  tryToAddExistingCopilotSelectedUsers("org_3320", "selected_usernames_3320");
  verifyCopilotSelectedUsersExists("org_3320", "selected_usernames_3320");
  removeCopilotSeatsForUsers("org_3320", "selected_usernames_3320");
  tryToDeleteANonExistingCopilotSelectedUsers("org_3320", "selected_usernames_3320");
  verifyCopilotSelectedUsersDoesNotExist("org_3320", "selected_usernames_3320");
});

// Story: crud:CopilotSelectedUsers:nondet:1:2
bthread("crud:CopilotSelectedUsers:nondet:1:2", function () {
  let org = "org_3321";
  let selected_usernames = "selected_usernames_3321";
  addCopilotSeatsForUsers("org_3321", "selected_usernames_3321");
  tryToAddExistingCopilotSelectedUsers("org_3321", "selected_usernames_3321");
  verifyCopilotSelectedUsersExists("org_3321", "selected_usernames_3321");
  removeCopilotSeatsForUsers("org_3321", "selected_usernames_3321");
  tryToDeleteANonExistingCopilotSelectedUsers("org_3321", "selected_usernames_3321");
  verifyCopilotSelectedUsersDoesNotExist("org_3321", "selected_usernames_3321");
});

// Story: crud:CopilotSelectedUsers:nondet:negative:dup-add
bthread("crud:CopilotSelectedUsers:nondet:negative:dup-add", function () {
  let org = "org_3326";
  let selected_usernames = "selected_usernames_3326";
  addCopilotSeatsForUsers("org_3326", "selected_usernames_3326");
  verifyCopilotSelectedUsersExists("org_3326", "selected_usernames_3326");
  tryToAddExistingCopilotSelectedUsers("org_3326", "selected_usernames_3326");
  verifyCopilotSelectedUsersExists("org_3326", "selected_usernames_3326");
});

// Story: monitor:CopilotSelectedUsers:add
bthread("monitor:CopilotSelectedUsers:add", function () {
  while (true) {
    let ev = waitForAnyCopilotSelectedUsersAdded();
    let args = Object.values(ev);
    block(matchDeletedCopilotSelectedUsers.apply(null, args), function () {
      verifyCopilotSelectedUsersExists.apply(null, args);
    });
  }
});

// Story: crud:CopilotMetricsOrganization:read_only
bthread("crud:CopilotMetricsOrganization:read_only", function () {
  let org = "org_3330";
  let since = "since_3330";
  let until = "until_3330";
  let page = "page_3330";
  let per_page = "per_page_3330";
  verifyCopilotMetricsOrganizationExists("org_3330", "since_3330", "until_3330", "page_3330", "per_page_3330");
});

// Story: crud:CopilotSeatAssignmentUser:read_only
bthread("crud:CopilotSeatAssignmentUser:read_only", function () {
  let org = "org_3340";
  let username = "username_3340";
  verifyCopilotSeatAssignmentUserExists("org_3340", "username_3340");
});

// Story: crud:CopilotMetricsTeam:read_only
bthread("crud:CopilotMetricsTeam:read_only", function () {
  let org = "org_3350";
  let team_slug = "team_slug_3350";
  let since = "since_3350";
  let until = "until_3350";
  let page = "page_3350";
  let per_page = "per_page_3350";
  verifyCopilotMetricsTeamExists("org_3350", "team_slug_3350", "since_3350", "until_3350", "page_3350", "per_page_3350");
});

// Story: crud:CodeSearch:read_only
bthread("crud:CodeSearch:read_only", function () {
  let q = "q_3360";
  let sort = "sort_3360";
  let order = "order_3360";
  let per-page = "per-page_3360";
  let page = "page_3360";
  verifyCodeSearchExists("q_3360", "sort_3360", "order_3360", "per-page_3360", "page_3360");
});

// Story: crud:CommitSearch:read_only
bthread("crud:CommitSearch:read_only", function () {
  let q = "q_3370";
  let sort = "sort_3370";
  let order = "order_3370";
  let per-page = "per-page_3370";
  let page = "page_3370";
  verifyCommitSearchExists("q_3370", "sort_3370", "order_3370", "per-page_3370", "page_3370");
});

// Story: crud:IssueSearch:read_only
bthread("crud:IssueSearch:read_only", function () {
  let q = "q_3380";
  let sort = "sort_3380";
  let order = "order_3380";
  let per-page = "per-page_3380";
  let page = "page_3380";
  verifyIssueSearchExists("q_3380", "sort_3380", "order_3380", "per-page_3380", "page_3380");
});

// Story: crud:LabelSearch:read_only
bthread("crud:LabelSearch:read_only", function () {
  let repository_id = 3390;
  let q = "q_3390";
  let sort = "sort_3390";
  let order = "order_3390";
  let per-page = "per-page_3390";
  let page = "page_3390";
  verifyLabelSearchExists(3390, "q_3390", "sort_3390", "order_3390", "per-page_3390", "page_3390");
});

// Story: crud:RepositorySearch:read_only
bthread("crud:RepositorySearch:read_only", function () {
  let q = "q_3400";
  let sort = "sort_3400";
  let order = "order_3400";
  let per-page = "per-page_3400";
  let page = "page_3400";
  verifyRepositorySearchExists("q_3400", "sort_3400", "order_3400", "per-page_3400", "page_3400");
});

// Story: crud:TopicSearch:read_only
bthread("crud:TopicSearch:read_only", function () {
  let q = "q_3410";
  let per-page = "per-page_3410";
  let page = "page_3410";
  verifyTopicSearchExists("q_3410", "per-page_3410", "page_3410");
});

// Story: crud:UserSearch:read_only
bthread("crud:UserSearch:read_only", function () {
  let q = "q_3420";
  let sort = "sort_3420";
  let order = "order_3420";
  let per-page = "per-page_3420";
  let page = "page_3420";
  verifyUserSearchExists("q_3420", "sort_3420", "order_3420", "per-page_3420", "page_3420");
});

// Story: crud:Assignment:read_only
bthread("crud:Assignment:read_only", function () {
  let assignment_id = 3430;
  verifyAssignmentExists(3430);
});

// Story: crud:AcceptedAssignment:read_only
bthread("crud:AcceptedAssignment:read_only", function () {
  let assignment_id = 3440;
  verifyAcceptedAssignmentExists(3440);
});

// Story: crud:AssignmentGrades:read_only
bthread("crud:AssignmentGrades:read_only", function () {
  let assignment_id = 3450;
  verifyAssignmentGradesExists(3450);
});

// Story: crud:Classroom:read_only
bthread("crud:Classroom:read_only", function () {
  let classroom_id = 3460;
  verifyClassroomExists(3460);
});

// Story: crud:EnterpriseTeamMembership:nondet:1:1
bthread("crud:EnterpriseTeamMembership:nondet:1:1", function () {
  let enterprise = "enterprise_3480";
  let enterprise-team = "enterprise-team_3480";
  let username = "username_3480";
  addTeamMember("enterprise_3480", "enterprise-team_3480", "username_3480");
  tryToAddExistingEnterpriseTeamMembership("enterprise_3480", "enterprise-team_3480", "username_3480");
  verifyEnterpriseTeamMembershipExists("enterprise_3480", "enterprise-team_3480", "username_3480");
  removeTeamMember("enterprise_3480", "enterprise-team_3480", "username_3480");
  tryToDeleteANonExistingEnterpriseTeamMembership("enterprise_3480", "enterprise-team_3480", "username_3480");
  verifyEnterpriseTeamMembershipDoesNotExist("enterprise_3480", "enterprise-team_3480", "username_3480");
});

// Story: crud:EnterpriseTeamMembership:nondet:1:2
bthread("crud:EnterpriseTeamMembership:nondet:1:2", function () {
  let enterprise = "enterprise_3481";
  let enterprise-team = "enterprise-team_3481";
  let username = "username_3481";
  addTeamMember("enterprise_3481", "enterprise-team_3481", "username_3481");
  tryToAddExistingEnterpriseTeamMembership("enterprise_3481", "enterprise-team_3481", "username_3481");
  verifyEnterpriseTeamMembershipExists("enterprise_3481", "enterprise-team_3481", "username_3481");
  removeTeamMember("enterprise_3481", "enterprise-team_3481", "username_3481");
  tryToDeleteANonExistingEnterpriseTeamMembership("enterprise_3481", "enterprise-team_3481", "username_3481");
  verifyEnterpriseTeamMembershipDoesNotExist("enterprise_3481", "enterprise-team_3481", "username_3481");
});

// Story: crud:EnterpriseTeamMembership:nondet:negative:dup-add
bthread("crud:EnterpriseTeamMembership:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_3486";
  let enterprise-team = "enterprise-team_3486";
  let username = "username_3486";
  addTeamMember("enterprise_3486", "enterprise-team_3486", "username_3486");
  verifyEnterpriseTeamMembershipExists("enterprise_3486", "enterprise-team_3486", "username_3486");
  tryToAddExistingEnterpriseTeamMembership("enterprise_3486", "enterprise-team_3486", "username_3486");
  verifyEnterpriseTeamMembershipExists("enterprise_3486", "enterprise-team_3486", "username_3486");
});

// Story: monitor:EnterpriseTeamMembership:add
bthread("monitor:EnterpriseTeamMembership:add", function () {
  while (true) {
    let ev = waitForAnyEnterpriseTeamMembershipAdded();
    let args = Object.values(ev);
    block(matchDeletedEnterpriseTeamMembership.apply(null, args), function () {
      verifyEnterpriseTeamMembershipExists.apply(null, args);
    });
  }
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:1:1
bthread("crud:EnterpriseTeamMembershipBulk:nondet:1:1", function () {
  let enterprise = "enterprise_3490";
  let enterprise-team = "enterprise-team_3490";
  let usernames = "usernames_3490";
  bulkAddTeamMembers("enterprise_3490", "enterprise-team_3490", "usernames_3490");
  tryToAddExistingEnterpriseTeamMembershipBulk("enterprise_3490", "enterprise-team_3490", "usernames_3490");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3490", "enterprise-team_3490", "usernames_3490");
  bulkRemoveTeamMembers("enterprise_3490", "enterprise-team_3490", "usernames_3490");
  tryToDeleteANonExistingEnterpriseTeamMembershipBulk("enterprise_3490", "enterprise-team_3490", "usernames_3490");
  verifyEnterpriseTeamMembershipBulkDoesNotExist("enterprise_3490", "enterprise-team_3490", "usernames_3490");
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:1:2
bthread("crud:EnterpriseTeamMembershipBulk:nondet:1:2", function () {
  let enterprise = "enterprise_3491";
  let enterprise-team = "enterprise-team_3491";
  let usernames = "usernames_3491";
  bulkAddTeamMembers("enterprise_3491", "enterprise-team_3491", "usernames_3491");
  tryToAddExistingEnterpriseTeamMembershipBulk("enterprise_3491", "enterprise-team_3491", "usernames_3491");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3491", "enterprise-team_3491", "usernames_3491");
  bulkRemoveTeamMembers("enterprise_3491", "enterprise-team_3491", "usernames_3491");
  tryToDeleteANonExistingEnterpriseTeamMembershipBulk("enterprise_3491", "enterprise-team_3491", "usernames_3491");
  verifyEnterpriseTeamMembershipBulkDoesNotExist("enterprise_3491", "enterprise-team_3491", "usernames_3491");
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:negative:dup-add
bthread("crud:EnterpriseTeamMembershipBulk:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_3496";
  let enterprise-team = "enterprise-team_3496";
  let usernames = "usernames_3496";
  bulkAddTeamMembers("enterprise_3496", "enterprise-team_3496", "usernames_3496");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3496", "enterprise-team_3496", "usernames_3496");
  tryToAddExistingEnterpriseTeamMembershipBulk("enterprise_3496", "enterprise-team_3496", "usernames_3496");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3496", "enterprise-team_3496", "usernames_3496");
});

// Story: monitor:EnterpriseTeamMembershipBulk:add
bthread("monitor:EnterpriseTeamMembershipBulk:add", function () {
  while (true) {
    let ev = waitForAnyEnterpriseTeamMembershipBulkAdded();
    let args = Object.values(ev);
    block(matchDeletedEnterpriseTeamMembershipBulk.apply(null, args), function () {
      verifyEnterpriseTeamMembershipBulkExists.apply(null, args);
    });
  }
});

// Story: crud:EnterpriseTeamMembershipList:read_only
bthread("crud:EnterpriseTeamMembershipList:read_only", function () {
  let enterprise = "enterprise_3500";
  let enterprise-team = "enterprise-team_3500";
  verifyEnterpriseTeamMembershipListExists("enterprise_3500", "enterprise-team_3500");
});

// Story: crud:License:read_only
bthread("crud:License:read_only", function () {
  let license = "license_3510";
  verifyLicenseExists("license_3510");
});

// Story: crud:Licenses:read_only
bthread("crud:Licenses:read_only", function () {
  let featured = "featured_3520";
  let per-page = "per-page_3520";
  let page = "page_3520";
  verifyLicensesExists("featured_3520", "per-page_3520", "page_3520");
});

// Story: crud:RepositoryLicense:read_only
bthread("crud:RepositoryLicense:read_only", function () {
  let owner = "owner_3530";
  let repo = "repo_3530";
  let git-ref = "git-ref_3530";
  verifyRepositoryLicenseExists("owner_3530", "repo_3530", "git-ref_3530");
});

// Story: crud:OrgInteractionLimit:read_only
bthread("crud:OrgInteractionLimit:read_only", function () {
  let org = "org_3540";
  verifyOrgInteractionLimitExists("org_3540");
});

// Story: crud:RepoInteractionLimit:read_only
bthread("crud:RepoInteractionLimit:read_only", function () {
  let owner = "owner_3550";
  let repo = "repo_3550";
  verifyRepoInteractionLimitExists("owner_3550", "repo_3550");
});

// Story: crud:UserInteractionLimit:read_only
bthread("crud:UserInteractionLimit:read_only", function () {

  verifyUserInteractionLimitExists();
});

// Story: crud:PrivateRegistry:nondet:1:1
bthread("crud:PrivateRegistry:nondet:1:1", function () {
  let org = "org_3570";
  let url = "url_3570";
  let registry_type = "registry_type_3570";
  let encrypted_value = "encrypted_value_3570";
  let key_id = 3570;
  let visibility = "visibility_3570";
  let username = "username_3570";
  let selected_repository_ids = 3570;
  let secret_name = "secret_name_3570";
  createOrgPrivateRegistry("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
  tryToAddExistingPrivateRegistry("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
  verifyPrivateRegistryExists("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
  updateOrgPrivateRegistry("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
  deleteOrgPrivateRegistry("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
  tryToDeleteANonExistingPrivateRegistry("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
  verifyPrivateRegistryDoesNotExist("org_3570", "url_3570", "registry_type_3570", "encrypted_value_3570", 3570, "visibility_3570", "username_3570", 3570, "secret_name_3570");
});

// Story: crud:PrivateRegistry:nondet:1:2
bthread("crud:PrivateRegistry:nondet:1:2", function () {
  let org = "org_3571";
  let url = "url_3571";
  let registry_type = "registry_type_3571";
  let encrypted_value = "encrypted_value_3571";
  let key_id = 3571;
  let visibility = "visibility_3571";
  let username = "username_3571";
  let selected_repository_ids = 3571;
  let secret_name = "secret_name_3571";
  createOrgPrivateRegistry("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
  tryToAddExistingPrivateRegistry("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
  updateOrgPrivateRegistry("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
  verifyPrivateRegistryExists("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
  deleteOrgPrivateRegistry("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
  tryToDeleteANonExistingPrivateRegistry("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
  verifyPrivateRegistryDoesNotExist("org_3571", "url_3571", "registry_type_3571", "encrypted_value_3571", 3571, "visibility_3571", "username_3571", 3571, "secret_name_3571");
});

// Story: crud:PrivateRegistry:nondet:negative:dup-add
bthread("crud:PrivateRegistry:nondet:negative:dup-add", function () {
  let org = "org_3576";
  let url = "url_3576";
  let registry_type = "registry_type_3576";
  let encrypted_value = "encrypted_value_3576";
  let key_id = 3576;
  let visibility = "visibility_3576";
  let username = "username_3576";
  let selected_repository_ids = 3576;
  let secret_name = "secret_name_3576";
  createOrgPrivateRegistry("org_3576", "url_3576", "registry_type_3576", "encrypted_value_3576", 3576, "visibility_3576", "username_3576", 3576, "secret_name_3576");
  verifyPrivateRegistryExists("org_3576", "url_3576", "registry_type_3576", "encrypted_value_3576", 3576, "visibility_3576", "username_3576", 3576, "secret_name_3576");
  tryToAddExistingPrivateRegistry("org_3576", "url_3576", "registry_type_3576", "encrypted_value_3576", 3576, "visibility_3576", "username_3576", 3576, "secret_name_3576");
  verifyPrivateRegistryExists("org_3576", "url_3576", "registry_type_3576", "encrypted_value_3576", 3576, "visibility_3576", "username_3576", 3576, "secret_name_3576");
});

// Story: crud:PrivateRegistry:nondet:existing:update
bthread("crud:PrivateRegistry:nondet:existing:update", function () {
  let ev = waitForAnyPrivateRegistryAdded();
  let args = Object.values(ev);
  block(matchDeletedPrivateRegistry.apply(null, args), function () {
    verifyPrivateRegistryExists.apply(null, args);
    updateOrgPrivateRegistry.apply(null, args);
    verifyPrivateRegistryExists.apply(null, args);
  });
});

// Story: monitor:PrivateRegistry:add
bthread("monitor:PrivateRegistry:add", function () {
  while (true) {
    let ev = waitForAnyPrivateRegistryAdded();
    let args = Object.values(ev);
    block(matchDeletedPrivateRegistry.apply(null, args), function () {
      verifyPrivateRegistryExists.apply(null, args);
    });
  }
});

// Story: crud:NetworkConfiguration:nondet:1:1
bthread("crud:NetworkConfiguration:nondet:1:1", function () {
  let org = "org_3580";
  let name = "name_3580";
  let network_configuration_id = 3580;
  createNetworkConfiguration("org_3580", "name_3580", 3580);
  tryToAddExistingNetworkConfiguration("org_3580", "name_3580", 3580);
  verifyNetworkConfigurationExists("org_3580", "name_3580", 3580);
  updateNetworkConfiguration("org_3580", "name_3580", 3580);
  deleteNetworkConfiguration("org_3580", "name_3580", 3580);
  tryToDeleteANonExistingNetworkConfiguration("org_3580", "name_3580", 3580);
  verifyNetworkConfigurationDoesNotExist("org_3580", "name_3580", 3580);
});

// Story: crud:NetworkConfiguration:nondet:1:2
bthread("crud:NetworkConfiguration:nondet:1:2", function () {
  let org = "org_3581";
  let name = "name_3581";
  let network_configuration_id = 3581;
  createNetworkConfiguration("org_3581", "name_3581", 3581);
  tryToAddExistingNetworkConfiguration("org_3581", "name_3581", 3581);
  updateNetworkConfiguration("org_3581", "name_3581", 3581);
  verifyNetworkConfigurationExists("org_3581", "name_3581", 3581);
  deleteNetworkConfiguration("org_3581", "name_3581", 3581);
  tryToDeleteANonExistingNetworkConfiguration("org_3581", "name_3581", 3581);
  verifyNetworkConfigurationDoesNotExist("org_3581", "name_3581", 3581);
});

// Story: crud:NetworkConfiguration:nondet:negative:dup-add
bthread("crud:NetworkConfiguration:nondet:negative:dup-add", function () {
  let org = "org_3586";
  let name = "name_3586";
  let network_configuration_id = 3586;
  createNetworkConfiguration("org_3586", "name_3586", 3586);
  verifyNetworkConfigurationExists("org_3586", "name_3586", 3586);
  tryToAddExistingNetworkConfiguration("org_3586", "name_3586", 3586);
  verifyNetworkConfigurationExists("org_3586", "name_3586", 3586);
});

// Story: crud:NetworkConfiguration:nondet:existing:update
bthread("crud:NetworkConfiguration:nondet:existing:update", function () {
  let ev = waitForAnyNetworkConfigurationAdded();
  let args = Object.values(ev);
  block(matchDeletedNetworkConfiguration.apply(null, args), function () {
    verifyNetworkConfigurationExists.apply(null, args);
    updateNetworkConfiguration.apply(null, args);
    verifyNetworkConfigurationExists.apply(null, args);
  });
});

// Story: monitor:NetworkConfiguration:add
bthread("monitor:NetworkConfiguration:add", function () {
  while (true) {
    let ev = waitForAnyNetworkConfigurationAdded();
    let args = Object.values(ev);
    block(matchDeletedNetworkConfiguration.apply(null, args), function () {
      verifyNetworkConfigurationExists.apply(null, args);
    });
  }
});

// Story: crud:NetworkSettings:read_only
bthread("crud:NetworkSettings:read_only", function () {
  let org = "org_3590";
  let network_settings_id = 3590;
  verifyNetworkSettingsExists("org_3590", 3590);
});

// Story: crud:DependencyGraphDiff:read_only
bthread("crud:DependencyGraphDiff:read_only", function () {
  let owner = "owner_3610";
  let repo = "repo_3610";
  let basehead = "basehead_3610";
  verifyDependencyGraphDiffExists("owner_3610", "repo_3610", "basehead_3610");
});

// Story: crud:DependencyGraphSBOM:read_only
bthread("crud:DependencyGraphSBOM:read_only", function () {
  let owner = "owner_3620";
  let repo = "repo_3620";
  verifyDependencyGraphSBOMExists("owner_3620", "repo_3620");
});

// Story: crud:CodeOfConduct:read_only
bthread("crud:CodeOfConduct:read_only", function () {
  let key = "key_3630";
  verifyCodeOfConductExists("key_3630");
});
