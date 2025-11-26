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

// Story: crud:Ruleset:nondet:1:1
bthread("crud:Ruleset:nondet:1:1", function () {
  let owner = "owner_220";
  let repo = "repo_220";
  let name = "name_220";
  let ruleset_id = 220;
  createRepoRuleset("owner_220", "repo_220", "name_220", 220);
  tryToAddExistingRuleset("owner_220", "repo_220", "name_220", 220);
  verifyRulesetExists("owner_220", "repo_220", "name_220", 220);
  updateRepoRuleset("owner_220", "repo_220", "name_220", 220);
  deleteRepoRuleset("owner_220", "repo_220", "name_220", 220);
  tryToDeleteANonExistingRuleset("owner_220", "repo_220", "name_220", 220);
  verifyRulesetDoesNotExist("owner_220", "repo_220", "name_220", 220);
});

// Story: crud:Ruleset:nondet:1:2
bthread("crud:Ruleset:nondet:1:2", function () {
  let owner = "owner_221";
  let repo = "repo_221";
  let name = "name_221";
  let ruleset_id = 221;
  createRepoRuleset("owner_221", "repo_221", "name_221", 221);
  tryToAddExistingRuleset("owner_221", "repo_221", "name_221", 221);
  updateRepoRuleset("owner_221", "repo_221", "name_221", 221);
  verifyRulesetExists("owner_221", "repo_221", "name_221", 221);
  deleteRepoRuleset("owner_221", "repo_221", "name_221", 221);
  tryToDeleteANonExistingRuleset("owner_221", "repo_221", "name_221", 221);
  verifyRulesetDoesNotExist("owner_221", "repo_221", "name_221", 221);
});

// Story: crud:Ruleset:nondet:negative:dup-add
bthread("crud:Ruleset:nondet:negative:dup-add", function () {
  let owner = "owner_226";
  let repo = "repo_226";
  let name = "name_226";
  let ruleset_id = 226;
  createRepoRuleset("owner_226", "repo_226", "name_226", 226);
  verifyRulesetExists("owner_226", "repo_226", "name_226", 226);
  tryToAddExistingRuleset("owner_226", "repo_226", "name_226", 226);
  verifyRulesetExists("owner_226", "repo_226", "name_226", 226);
});

// Story: crud:Ruleset:nondet:existing:update
bthread("crud:Ruleset:nondet:existing:update", function () {
  let ev = waitForAnyRulesetAdded();
  let args = Object.values(ev);
  block(matchDeletedRuleset.apply(null, args), function () {
    verifyRulesetExists.apply(null, args);
    updateRepoRuleset.apply(null, args);
    verifyRulesetExists.apply(null, args);
  });
});

// Story: monitor:Ruleset:add
bthread("monitor:Ruleset:add", function () {
  while (true) {
    let ev = waitForAnyRulesetAdded();
    let args = Object.values(ev);
    block(matchDeletedRuleset.apply(null, args), function () {
      verifyRulesetExists.apply(null, args);
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

// Story: crud:Branch:read_only
bthread("crud:Branch:read_only", function () {
  let owner = "owner_240";
  let repo = "repo_240";
  let branch = "branch_240";
  let new_name = "new_name_240";
  verifyBranchExists("owner_240", "repo_240", "branch_240", "new_name_240");
});

// Story: crud:BranchProtection:read_only
bthread("crud:BranchProtection:read_only", function () {
  let owner = "owner_250";
  let repo = "repo_250";
  let branch = "branch_250";
  verifyBranchProtectionExists("owner_250", "repo_250", "branch_250");
});

// Story: crud:BranchProtectionAdmin:nondet:1:1
bthread("crud:BranchProtectionAdmin:nondet:1:1", function () {
  let owner = "owner_260";
  let repo = "repo_260";
  let branch = "branch_260";
  setAdminBranchProtection("owner_260", "repo_260", "branch_260");
  tryToAddExistingBranchProtectionAdmin("owner_260", "repo_260", "branch_260");
  verifyBranchProtectionAdminExists("owner_260", "repo_260", "branch_260");
  deleteAdminBranchProtection("owner_260", "repo_260", "branch_260");
  tryToDeleteANonExistingBranchProtectionAdmin("owner_260", "repo_260", "branch_260");
  verifyBranchProtectionAdminDoesNotExist("owner_260", "repo_260", "branch_260");
});

// Story: crud:BranchProtectionAdmin:nondet:1:2
bthread("crud:BranchProtectionAdmin:nondet:1:2", function () {
  let owner = "owner_261";
  let repo = "repo_261";
  let branch = "branch_261";
  setAdminBranchProtection("owner_261", "repo_261", "branch_261");
  tryToAddExistingBranchProtectionAdmin("owner_261", "repo_261", "branch_261");
  verifyBranchProtectionAdminExists("owner_261", "repo_261", "branch_261");
  deleteAdminBranchProtection("owner_261", "repo_261", "branch_261");
  tryToDeleteANonExistingBranchProtectionAdmin("owner_261", "repo_261", "branch_261");
  verifyBranchProtectionAdminDoesNotExist("owner_261", "repo_261", "branch_261");
});

// Story: crud:BranchProtectionAdmin:nondet:negative:dup-add
bthread("crud:BranchProtectionAdmin:nondet:negative:dup-add", function () {
  let owner = "owner_266";
  let repo = "repo_266";
  let branch = "branch_266";
  setAdminBranchProtection("owner_266", "repo_266", "branch_266");
  verifyBranchProtectionAdminExists("owner_266", "repo_266", "branch_266");
  tryToAddExistingBranchProtectionAdmin("owner_266", "repo_266", "branch_266");
  verifyBranchProtectionAdminExists("owner_266", "repo_266", "branch_266");
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
  let owner = "owner_270";
  let repo = "repo_270";
  let branch = "branch_270";
  verifyPullRequestReviewProtectionExists("owner_270", "repo_270", "branch_270");
});

// Story: crud:CommitSignatureProtection:nondet:1:1
bthread("crud:CommitSignatureProtection:nondet:1:1", function () {
  let owner = "owner_280";
  let repo = "repo_280";
  let branch = "branch_280";
  createCommitSignatureProtection("owner_280", "repo_280", "branch_280");
  tryToAddExistingCommitSignatureProtection("owner_280", "repo_280", "branch_280");
  verifyCommitSignatureProtectionExists("owner_280", "repo_280", "branch_280");
  deleteCommitSignatureProtection("owner_280", "repo_280", "branch_280");
  tryToDeleteANonExistingCommitSignatureProtection("owner_280", "repo_280", "branch_280");
  verifyCommitSignatureProtectionDoesNotExist("owner_280", "repo_280", "branch_280");
});

// Story: crud:CommitSignatureProtection:nondet:1:2
bthread("crud:CommitSignatureProtection:nondet:1:2", function () {
  let owner = "owner_281";
  let repo = "repo_281";
  let branch = "branch_281";
  createCommitSignatureProtection("owner_281", "repo_281", "branch_281");
  tryToAddExistingCommitSignatureProtection("owner_281", "repo_281", "branch_281");
  verifyCommitSignatureProtectionExists("owner_281", "repo_281", "branch_281");
  deleteCommitSignatureProtection("owner_281", "repo_281", "branch_281");
  tryToDeleteANonExistingCommitSignatureProtection("owner_281", "repo_281", "branch_281");
  verifyCommitSignatureProtectionDoesNotExist("owner_281", "repo_281", "branch_281");
});

// Story: crud:CommitSignatureProtection:nondet:negative:dup-add
bthread("crud:CommitSignatureProtection:nondet:negative:dup-add", function () {
  let owner = "owner_286";
  let repo = "repo_286";
  let branch = "branch_286";
  createCommitSignatureProtection("owner_286", "repo_286", "branch_286");
  verifyCommitSignatureProtectionExists("owner_286", "repo_286", "branch_286");
  tryToAddExistingCommitSignatureProtection("owner_286", "repo_286", "branch_286");
  verifyCommitSignatureProtectionExists("owner_286", "repo_286", "branch_286");
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
  let owner = "owner_290";
  let repo = "repo_290";
  let branch = "branch_290";
  verifyStatusCheckProtectionExists("owner_290", "repo_290", "branch_290");
});

// Story: crud:StatusCheckContexts:nondet:1:1
bthread("crud:StatusCheckContexts:nondet:1:1", function () {
  let owner = "owner_300";
  let repo = "repo_300";
  let branch = "branch_300";
  addStatusCheckContexts("owner_300", "repo_300", "branch_300");
  tryToAddExistingStatusCheckContexts("owner_300", "repo_300", "branch_300");
  verifyStatusCheckContextsExists("owner_300", "repo_300", "branch_300");
  removeStatusCheckContexts("owner_300", "repo_300", "branch_300");
  tryToDeleteANonExistingStatusCheckContexts("owner_300", "repo_300", "branch_300");
  verifyStatusCheckContextsDoesNotExist("owner_300", "repo_300", "branch_300");
});

// Story: crud:StatusCheckContexts:nondet:1:2
bthread("crud:StatusCheckContexts:nondet:1:2", function () {
  let owner = "owner_301";
  let repo = "repo_301";
  let branch = "branch_301";
  addStatusCheckContexts("owner_301", "repo_301", "branch_301");
  tryToAddExistingStatusCheckContexts("owner_301", "repo_301", "branch_301");
  verifyStatusCheckContextsExists("owner_301", "repo_301", "branch_301");
  removeStatusCheckContexts("owner_301", "repo_301", "branch_301");
  tryToDeleteANonExistingStatusCheckContexts("owner_301", "repo_301", "branch_301");
  verifyStatusCheckContextsDoesNotExist("owner_301", "repo_301", "branch_301");
});

// Story: crud:StatusCheckContexts:nondet:negative:dup-add
bthread("crud:StatusCheckContexts:nondet:negative:dup-add", function () {
  let owner = "owner_306";
  let repo = "repo_306";
  let branch = "branch_306";
  addStatusCheckContexts("owner_306", "repo_306", "branch_306");
  verifyStatusCheckContextsExists("owner_306", "repo_306", "branch_306");
  tryToAddExistingStatusCheckContexts("owner_306", "repo_306", "branch_306");
  verifyStatusCheckContextsExists("owner_306", "repo_306", "branch_306");
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

// Story: crud:AccessRestrictions:read_only
bthread("crud:AccessRestrictions:read_only", function () {
  let owner = "owner_310";
  let repo = "repo_310";
  let branch = "branch_310";
  verifyAccessRestrictionsExists("owner_310", "repo_310", "branch_310");
});

// Story: crud:AppAccessRestrictions:nondet:1:1
bthread("crud:AppAccessRestrictions:nondet:1:1", function () {
  let owner = "owner_320";
  let repo = "repo_320";
  let branch = "branch_320";
  addAppAccessRestrictions("owner_320", "repo_320", "branch_320");
  tryToAddExistingAppAccessRestrictions("owner_320", "repo_320", "branch_320");
  verifyAppAccessRestrictionsExists("owner_320", "repo_320", "branch_320");
  removeAppAccessRestrictions("owner_320", "repo_320", "branch_320");
  tryToDeleteANonExistingAppAccessRestrictions("owner_320", "repo_320", "branch_320");
  verifyAppAccessRestrictionsDoesNotExist("owner_320", "repo_320", "branch_320");
});

// Story: crud:AppAccessRestrictions:nondet:1:2
bthread("crud:AppAccessRestrictions:nondet:1:2", function () {
  let owner = "owner_321";
  let repo = "repo_321";
  let branch = "branch_321";
  addAppAccessRestrictions("owner_321", "repo_321", "branch_321");
  tryToAddExistingAppAccessRestrictions("owner_321", "repo_321", "branch_321");
  verifyAppAccessRestrictionsExists("owner_321", "repo_321", "branch_321");
  removeAppAccessRestrictions("owner_321", "repo_321", "branch_321");
  tryToDeleteANonExistingAppAccessRestrictions("owner_321", "repo_321", "branch_321");
  verifyAppAccessRestrictionsDoesNotExist("owner_321", "repo_321", "branch_321");
});

// Story: crud:AppAccessRestrictions:nondet:negative:dup-add
bthread("crud:AppAccessRestrictions:nondet:negative:dup-add", function () {
  let owner = "owner_326";
  let repo = "repo_326";
  let branch = "branch_326";
  addAppAccessRestrictions("owner_326", "repo_326", "branch_326");
  verifyAppAccessRestrictionsExists("owner_326", "repo_326", "branch_326");
  tryToAddExistingAppAccessRestrictions("owner_326", "repo_326", "branch_326");
  verifyAppAccessRestrictionsExists("owner_326", "repo_326", "branch_326");
});

// Story: monitor:AppAccessRestrictions:add
bthread("monitor:AppAccessRestrictions:add", function () {
  while (true) {
    let ev = waitForAnyAppAccessRestrictionsAdded();
    let args = Object.values(ev);
    block(matchDeletedAppAccessRestrictions.apply(null, args), function () {
      verifyAppAccessRestrictionsExists.apply(null, args);
    });
  }
});

// Story: crud:TeamAccessRestrictions:nondet:1:1
bthread("crud:TeamAccessRestrictions:nondet:1:1", function () {
  let owner = "owner_330";
  let repo = "repo_330";
  let branch = "branch_330";
  addTeamAccessRestrictions("owner_330", "repo_330", "branch_330");
  tryToAddExistingTeamAccessRestrictions("owner_330", "repo_330", "branch_330");
  verifyTeamAccessRestrictionsExists("owner_330", "repo_330", "branch_330");
  removeTeamAccessRestrictions("owner_330", "repo_330", "branch_330");
  tryToDeleteANonExistingTeamAccessRestrictions("owner_330", "repo_330", "branch_330");
  verifyTeamAccessRestrictionsDoesNotExist("owner_330", "repo_330", "branch_330");
});

// Story: crud:TeamAccessRestrictions:nondet:1:2
bthread("crud:TeamAccessRestrictions:nondet:1:2", function () {
  let owner = "owner_331";
  let repo = "repo_331";
  let branch = "branch_331";
  addTeamAccessRestrictions("owner_331", "repo_331", "branch_331");
  tryToAddExistingTeamAccessRestrictions("owner_331", "repo_331", "branch_331");
  verifyTeamAccessRestrictionsExists("owner_331", "repo_331", "branch_331");
  removeTeamAccessRestrictions("owner_331", "repo_331", "branch_331");
  tryToDeleteANonExistingTeamAccessRestrictions("owner_331", "repo_331", "branch_331");
  verifyTeamAccessRestrictionsDoesNotExist("owner_331", "repo_331", "branch_331");
});

// Story: crud:TeamAccessRestrictions:nondet:negative:dup-add
bthread("crud:TeamAccessRestrictions:nondet:negative:dup-add", function () {
  let owner = "owner_336";
  let repo = "repo_336";
  let branch = "branch_336";
  addTeamAccessRestrictions("owner_336", "repo_336", "branch_336");
  verifyTeamAccessRestrictionsExists("owner_336", "repo_336", "branch_336");
  tryToAddExistingTeamAccessRestrictions("owner_336", "repo_336", "branch_336");
  verifyTeamAccessRestrictionsExists("owner_336", "repo_336", "branch_336");
});

// Story: monitor:TeamAccessRestrictions:add
bthread("monitor:TeamAccessRestrictions:add", function () {
  while (true) {
    let ev = waitForAnyTeamAccessRestrictionsAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamAccessRestrictions.apply(null, args), function () {
      verifyTeamAccessRestrictionsExists.apply(null, args);
    });
  }
});

// Story: crud:UserAccessRestrictions:nondet:1:1
bthread("crud:UserAccessRestrictions:nondet:1:1", function () {
  let owner = "owner_340";
  let repo = "repo_340";
  let branch = "branch_340";
  addUserAccessRestrictions("owner_340", "repo_340", "branch_340");
  tryToAddExistingUserAccessRestrictions("owner_340", "repo_340", "branch_340");
  verifyUserAccessRestrictionsExists("owner_340", "repo_340", "branch_340");
  removeUserAccessRestrictions("owner_340", "repo_340", "branch_340");
  tryToDeleteANonExistingUserAccessRestrictions("owner_340", "repo_340", "branch_340");
  verifyUserAccessRestrictionsDoesNotExist("owner_340", "repo_340", "branch_340");
});

// Story: crud:UserAccessRestrictions:nondet:1:2
bthread("crud:UserAccessRestrictions:nondet:1:2", function () {
  let owner = "owner_341";
  let repo = "repo_341";
  let branch = "branch_341";
  addUserAccessRestrictions("owner_341", "repo_341", "branch_341");
  tryToAddExistingUserAccessRestrictions("owner_341", "repo_341", "branch_341");
  verifyUserAccessRestrictionsExists("owner_341", "repo_341", "branch_341");
  removeUserAccessRestrictions("owner_341", "repo_341", "branch_341");
  tryToDeleteANonExistingUserAccessRestrictions("owner_341", "repo_341", "branch_341");
  verifyUserAccessRestrictionsDoesNotExist("owner_341", "repo_341", "branch_341");
});

// Story: crud:UserAccessRestrictions:nondet:negative:dup-add
bthread("crud:UserAccessRestrictions:nondet:negative:dup-add", function () {
  let owner = "owner_346";
  let repo = "repo_346";
  let branch = "branch_346";
  addUserAccessRestrictions("owner_346", "repo_346", "branch_346");
  verifyUserAccessRestrictionsExists("owner_346", "repo_346", "branch_346");
  tryToAddExistingUserAccessRestrictions("owner_346", "repo_346", "branch_346");
  verifyUserAccessRestrictionsExists("owner_346", "repo_346", "branch_346");
});

// Story: monitor:UserAccessRestrictions:add
bthread("monitor:UserAccessRestrictions:add", function () {
  while (true) {
    let ev = waitForAnyUserAccessRestrictionsAdded();
    let args = Object.values(ev);
    block(matchDeletedUserAccessRestrictions.apply(null, args), function () {
      verifyUserAccessRestrictionsExists.apply(null, args);
    });
  }
});

// Story: crud:CommitComment:read_only
bthread("crud:CommitComment:read_only", function () {
  let owner = "owner_350";
  let repo = "repo_350";
  let comment_id = 350;
  verifyCommitCommentExists("owner_350", "repo_350", 350);
});

// Story: crud:DeployKey:nondet:1:1
bthread("crud:DeployKey:nondet:1:1", function () {
  let owner = "owner_380";
  let repo = "repo_380";
  let key_id = 380;
  createDeployKey("owner_380", "repo_380", 380);
  tryToAddExistingDeployKey("owner_380", "repo_380", 380);
  verifyDeployKeyExists("owner_380", "repo_380", 380);
  deleteDeployKey("owner_380", "repo_380", 380);
  tryToDeleteANonExistingDeployKey("owner_380", "repo_380", 380);
  verifyDeployKeyDoesNotExist("owner_380", "repo_380", 380);
});

// Story: crud:DeployKey:nondet:1:2
bthread("crud:DeployKey:nondet:1:2", function () {
  let owner = "owner_381";
  let repo = "repo_381";
  let key_id = 381;
  createDeployKey("owner_381", "repo_381", 381);
  tryToAddExistingDeployKey("owner_381", "repo_381", 381);
  verifyDeployKeyExists("owner_381", "repo_381", 381);
  deleteDeployKey("owner_381", "repo_381", 381);
  tryToDeleteANonExistingDeployKey("owner_381", "repo_381", 381);
  verifyDeployKeyDoesNotExist("owner_381", "repo_381", 381);
});

// Story: crud:DeployKey:nondet:negative:dup-add
bthread("crud:DeployKey:nondet:negative:dup-add", function () {
  let owner = "owner_386";
  let repo = "repo_386";
  let key_id = 386;
  createDeployKey("owner_386", "repo_386", 386);
  verifyDeployKeyExists("owner_386", "repo_386", 386);
  tryToAddExistingDeployKey("owner_386", "repo_386", 386);
  verifyDeployKeyExists("owner_386", "repo_386", 386);
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

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let owner = "owner_390";
  let repo = "repo_390";
  let username = "username_390";
  addCollaborator("owner_390", "repo_390", "username_390");
  tryToAddExistingCollaborator("owner_390", "repo_390", "username_390");
  verifyCollaboratorExists("owner_390", "repo_390", "username_390");
  removeCollaborator("owner_390", "repo_390", "username_390");
  tryToDeleteANonExistingCollaborator("owner_390", "repo_390", "username_390");
  verifyCollaboratorDoesNotExist("owner_390", "repo_390", "username_390");
});

// Story: crud:Collaborator:nondet:1:2
bthread("crud:Collaborator:nondet:1:2", function () {
  let owner = "owner_391";
  let repo = "repo_391";
  let username = "username_391";
  addCollaborator("owner_391", "repo_391", "username_391");
  tryToAddExistingCollaborator("owner_391", "repo_391", "username_391");
  verifyCollaboratorExists("owner_391", "repo_391", "username_391");
  removeCollaborator("owner_391", "repo_391", "username_391");
  tryToDeleteANonExistingCollaborator("owner_391", "repo_391", "username_391");
  verifyCollaboratorDoesNotExist("owner_391", "repo_391", "username_391");
});

// Story: crud:Collaborator:nondet:negative:dup-add
bthread("crud:Collaborator:nondet:negative:dup-add", function () {
  let owner = "owner_396";
  let repo = "repo_396";
  let username = "username_396";
  addCollaborator("owner_396", "repo_396", "username_396");
  verifyCollaboratorExists("owner_396", "repo_396", "username_396");
  tryToAddExistingCollaborator("owner_396", "repo_396", "username_396");
  verifyCollaboratorExists("owner_396", "repo_396", "username_396");
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

// Story: crud:CollaboratorPermission:read_only
bthread("crud:CollaboratorPermission:read_only", function () {
  let owner = "owner_400";
  let repo = "repo_400";
  let username = "username_400";
  verifyCollaboratorPermissionExists("owner_400", "repo_400", "username_400");
});

// Story: crud:Deployment:nondet:1:1
bthread("crud:Deployment:nondet:1:1", function () {
  let owner = "owner_410";
  let repo = "repo_410";
  let deployment_id = 410;
  createDeployment("owner_410", "repo_410", 410);
  tryToAddExistingDeployment("owner_410", "repo_410", 410);
  verifyDeploymentExists("owner_410", "repo_410", 410);
  deleteDeployment("owner_410", "repo_410", 410);
  tryToDeleteANonExistingDeployment("owner_410", "repo_410", 410);
  verifyDeploymentDoesNotExist("owner_410", "repo_410", 410);
});

// Story: crud:Deployment:nondet:1:2
bthread("crud:Deployment:nondet:1:2", function () {
  let owner = "owner_411";
  let repo = "repo_411";
  let deployment_id = 411;
  createDeployment("owner_411", "repo_411", 411);
  tryToAddExistingDeployment("owner_411", "repo_411", 411);
  verifyDeploymentExists("owner_411", "repo_411", 411);
  deleteDeployment("owner_411", "repo_411", 411);
  tryToDeleteANonExistingDeployment("owner_411", "repo_411", 411);
  verifyDeploymentDoesNotExist("owner_411", "repo_411", 411);
});

// Story: crud:Deployment:nondet:negative:dup-add
bthread("crud:Deployment:nondet:negative:dup-add", function () {
  let owner = "owner_416";
  let repo = "repo_416";
  let deployment_id = 416;
  createDeployment("owner_416", "repo_416", 416);
  verifyDeploymentExists("owner_416", "repo_416", 416);
  tryToAddExistingDeployment("owner_416", "repo_416", 416);
  verifyDeploymentExists("owner_416", "repo_416", 416);
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
  let owner = "owner_420";
  let repo = "repo_420";
  let deployment_id = 420;
  let status_id = 420;
  verifyDeploymentStatusExists("owner_420", "repo_420", 420, 420);
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
  let hook_id = 470;
  createWebhook("org_470", 470);
  tryToAddExistingWebhook("org_470", 470);
  verifyWebhookExists("org_470", 470);
  updateWebhook("org_470", 470);
  deleteWebhook("org_470", 470);
  tryToDeleteANonExistingWebhook("org_470", 470);
  verifyWebhookDoesNotExist("org_470", 470);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let org = "org_471";
  let hook_id = 471;
  createWebhook("org_471", 471);
  tryToAddExistingWebhook("org_471", 471);
  updateWebhook("org_471", 471);
  verifyWebhookExists("org_471", 471);
  deleteWebhook("org_471", 471);
  tryToDeleteANonExistingWebhook("org_471", 471);
  verifyWebhookDoesNotExist("org_471", 471);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let org = "org_476";
  let hook_id = 476;
  createWebhook("org_476", 476);
  verifyWebhookExists("org_476", 476);
  tryToAddExistingWebhook("org_476", 476);
  verifyWebhookExists("org_476", 476);
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

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let owner = "owner_520";
  let repo = "repo_520";
  let release_id = 520;
  createRelease("owner_520", "repo_520", 520);
  tryToAddExistingRelease("owner_520", "repo_520", 520);
  verifyReleaseExists("owner_520", "repo_520", 520);
  updateRelease("owner_520", "repo_520", 520);
  deleteRelease("owner_520", "repo_520", 520);
  tryToDeleteANonExistingRelease("owner_520", "repo_520", 520);
  verifyReleaseDoesNotExist("owner_520", "repo_520", 520);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let owner = "owner_521";
  let repo = "repo_521";
  let release_id = 521;
  createRelease("owner_521", "repo_521", 521);
  tryToAddExistingRelease("owner_521", "repo_521", 521);
  updateRelease("owner_521", "repo_521", 521);
  verifyReleaseExists("owner_521", "repo_521", 521);
  deleteRelease("owner_521", "repo_521", 521);
  tryToDeleteANonExistingRelease("owner_521", "repo_521", 521);
  verifyReleaseDoesNotExist("owner_521", "repo_521", 521);
});

// Story: crud:Release:nondet:negative:dup-add
bthread("crud:Release:nondet:negative:dup-add", function () {
  let owner = "owner_526";
  let repo = "repo_526";
  let release_id = 526;
  createRelease("owner_526", "repo_526", 526);
  verifyReleaseExists("owner_526", "repo_526", 526);
  tryToAddExistingRelease("owner_526", "repo_526", 526);
  verifyReleaseExists("owner_526", "repo_526", 526);
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

// Story: crud:ReleaseAsset:nondet:1:1
bthread("crud:ReleaseAsset:nondet:1:1", function () {
  let owner = "owner_530";
  let repo = "repo_530";
  let release_id = 530;
  let name = "name_530";
  let asset_id = 530;
  uploadReleaseAsset("owner_530", "repo_530", 530, "name_530", 530);
  tryToAddExistingReleaseAsset("owner_530", "repo_530", 530, "name_530", 530);
  verifyReleaseAssetExists("owner_530", "repo_530", 530, "name_530", 530);
  updateReleaseAsset("owner_530", "repo_530", 530, "name_530", 530);
  deleteReleaseAsset("owner_530", "repo_530", 530, "name_530", 530);
  tryToDeleteANonExistingReleaseAsset("owner_530", "repo_530", 530, "name_530", 530);
  verifyReleaseAssetDoesNotExist("owner_530", "repo_530", 530, "name_530", 530);
});

// Story: crud:ReleaseAsset:nondet:1:2
bthread("crud:ReleaseAsset:nondet:1:2", function () {
  let owner = "owner_531";
  let repo = "repo_531";
  let release_id = 531;
  let name = "name_531";
  let asset_id = 531;
  uploadReleaseAsset("owner_531", "repo_531", 531, "name_531", 531);
  tryToAddExistingReleaseAsset("owner_531", "repo_531", 531, "name_531", 531);
  updateReleaseAsset("owner_531", "repo_531", 531, "name_531", 531);
  verifyReleaseAssetExists("owner_531", "repo_531", 531, "name_531", 531);
  deleteReleaseAsset("owner_531", "repo_531", 531, "name_531", 531);
  tryToDeleteANonExistingReleaseAsset("owner_531", "repo_531", 531, "name_531", 531);
  verifyReleaseAssetDoesNotExist("owner_531", "repo_531", 531, "name_531", 531);
});

// Story: crud:ReleaseAsset:nondet:negative:dup-add
bthread("crud:ReleaseAsset:nondet:negative:dup-add", function () {
  let owner = "owner_536";
  let repo = "repo_536";
  let release_id = 536;
  let name = "name_536";
  let asset_id = 536;
  uploadReleaseAsset("owner_536", "repo_536", 536, "name_536", 536);
  verifyReleaseAssetExists("owner_536", "repo_536", 536, "name_536", 536);
  tryToAddExistingReleaseAsset("owner_536", "repo_536", 536, "name_536", 536);
  verifyReleaseAssetExists("owner_536", "repo_536", 536, "name_536", 536);
});

// Story: crud:ReleaseAsset:nondet:existing:update
bthread("crud:ReleaseAsset:nondet:existing:update", function () {
  let ev = waitForAnyReleaseAssetAdded();
  let args = Object.values(ev);
  block(matchDeletedReleaseAsset.apply(null, args), function () {
    verifyReleaseAssetExists.apply(null, args);
    updateReleaseAsset.apply(null, args);
    verifyReleaseAssetExists.apply(null, args);
  });
});

// Story: monitor:ReleaseAsset:add
bthread("monitor:ReleaseAsset:add", function () {
  while (true) {
    let ev = waitForAnyReleaseAssetAdded();
    let args = Object.values(ev);
    block(matchDeletedReleaseAsset.apply(null, args), function () {
      verifyReleaseAssetExists.apply(null, args);
    });
  }
});

// Story: crud:FileContent:nondet:1:1
bthread("crud:FileContent:nondet:1:1", function () {
  let owner = "owner_540";
  let repo = "repo_540";
  let path = "path_540";
  createOrUpdateFileContents("owner_540", "repo_540", "path_540");
  tryToAddExistingFileContent("owner_540", "repo_540", "path_540");
  verifyFileContentExists("owner_540", "repo_540", "path_540");
  deleteFile("owner_540", "repo_540", "path_540");
  tryToDeleteANonExistingFileContent("owner_540", "repo_540", "path_540");
  verifyFileContentDoesNotExist("owner_540", "repo_540", "path_540");
});

// Story: crud:FileContent:nondet:1:2
bthread("crud:FileContent:nondet:1:2", function () {
  let owner = "owner_541";
  let repo = "repo_541";
  let path = "path_541";
  createOrUpdateFileContents("owner_541", "repo_541", "path_541");
  tryToAddExistingFileContent("owner_541", "repo_541", "path_541");
  verifyFileContentExists("owner_541", "repo_541", "path_541");
  deleteFile("owner_541", "repo_541", "path_541");
  tryToDeleteANonExistingFileContent("owner_541", "repo_541", "path_541");
  verifyFileContentDoesNotExist("owner_541", "repo_541", "path_541");
});

// Story: crud:FileContent:nondet:negative:dup-add
bthread("crud:FileContent:nondet:negative:dup-add", function () {
  let owner = "owner_546";
  let repo = "repo_546";
  let path = "path_546";
  createOrUpdateFileContents("owner_546", "repo_546", "path_546");
  verifyFileContentExists("owner_546", "repo_546", "path_546");
  tryToAddExistingFileContent("owner_546", "repo_546", "path_546");
  verifyFileContentExists("owner_546", "repo_546", "path_546");
});

// Story: monitor:FileContent:add
bthread("monitor:FileContent:add", function () {
  while (true) {
    let ev = waitForAnyFileContentAdded();
    let args = Object.values(ev);
    block(matchDeletedFileContent.apply(null, args), function () {
      verifyFileContentExists.apply(null, args);
    });
  }
});

// Story: crud:Autolink:nondet:1:1
bthread("crud:Autolink:nondet:1:1", function () {
  let owner = "owner_560";
  let repo = "repo_560";
  let autolink_id = 560;
  createAutolink("owner_560", "repo_560", 560);
  tryToAddExistingAutolink("owner_560", "repo_560", 560);
  verifyAutolinkExists("owner_560", "repo_560", 560);
  deleteAutolink("owner_560", "repo_560", 560);
  tryToDeleteANonExistingAutolink("owner_560", "repo_560", 560);
  verifyAutolinkDoesNotExist("owner_560", "repo_560", 560);
});

// Story: crud:Autolink:nondet:1:2
bthread("crud:Autolink:nondet:1:2", function () {
  let owner = "owner_561";
  let repo = "repo_561";
  let autolink_id = 561;
  createAutolink("owner_561", "repo_561", 561);
  tryToAddExistingAutolink("owner_561", "repo_561", 561);
  verifyAutolinkExists("owner_561", "repo_561", 561);
  deleteAutolink("owner_561", "repo_561", 561);
  tryToDeleteANonExistingAutolink("owner_561", "repo_561", 561);
  verifyAutolinkDoesNotExist("owner_561", "repo_561", 561);
});

// Story: crud:Autolink:nondet:negative:dup-add
bthread("crud:Autolink:nondet:negative:dup-add", function () {
  let owner = "owner_566";
  let repo = "repo_566";
  let autolink_id = 566;
  createAutolink("owner_566", "repo_566", 566);
  verifyAutolinkExists("owner_566", "repo_566", 566);
  tryToAddExistingAutolink("owner_566", "repo_566", 566);
  verifyAutolinkExists("owner_566", "repo_566", 566);
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

// Story: crud:Invitation:nondet:1:1
bthread("crud:Invitation:nondet:1:1", function () {
  let owner = "owner_570";
  let repo = "repo_570";
  let invitation_id = 570;
  let org = "org_570";
  createInvitation("owner_570", "repo_570", 570, "org_570");
  tryToAddExistingInvitation("owner_570", "repo_570", 570, "org_570");
  verifyInvitationExists("owner_570", "repo_570", 570, "org_570");
  updateInvitation("owner_570", "repo_570", 570, "org_570");
  cancelInvitation("owner_570", "repo_570", 570, "org_570");
  tryToDeleteANonExistingInvitation("owner_570", "repo_570", 570, "org_570");
  verifyInvitationDoesNotExist("owner_570", "repo_570", 570, "org_570");
});

// Story: crud:Invitation:nondet:1:2
bthread("crud:Invitation:nondet:1:2", function () {
  let owner = "owner_571";
  let repo = "repo_571";
  let invitation_id = 571;
  let org = "org_571";
  createInvitation("owner_571", "repo_571", 571, "org_571");
  tryToAddExistingInvitation("owner_571", "repo_571", 571, "org_571");
  updateInvitation("owner_571", "repo_571", 571, "org_571");
  verifyInvitationExists("owner_571", "repo_571", 571, "org_571");
  cancelInvitation("owner_571", "repo_571", 571, "org_571");
  tryToDeleteANonExistingInvitation("owner_571", "repo_571", 571, "org_571");
  verifyInvitationDoesNotExist("owner_571", "repo_571", 571, "org_571");
});

// Story: crud:Invitation:nondet:negative:dup-add
bthread("crud:Invitation:nondet:negative:dup-add", function () {
  let owner = "owner_576";
  let repo = "repo_576";
  let invitation_id = 576;
  let org = "org_576";
  createInvitation("owner_576", "repo_576", 576, "org_576");
  verifyInvitationExists("owner_576", "repo_576", 576, "org_576");
  tryToAddExistingInvitation("owner_576", "repo_576", 576, "org_576");
  verifyInvitationExists("owner_576", "repo_576", 576, "org_576");
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

// Story: crud:PagesSite:nondet:1:1
bthread("crud:PagesSite:nondet:1:1", function () {
  let owner = "owner_590";
  let repo = "repo_590";
  createPagesSite("owner_590", "repo_590");
  tryToAddExistingPagesSite("owner_590", "repo_590");
  verifyPagesSiteExists("owner_590", "repo_590");
  updatePagesSite("owner_590", "repo_590");
  deletePagesSite("owner_590", "repo_590");
  tryToDeleteANonExistingPagesSite("owner_590", "repo_590");
  verifyPagesSiteDoesNotExist("owner_590", "repo_590");
});

// Story: crud:PagesSite:nondet:1:2
bthread("crud:PagesSite:nondet:1:2", function () {
  let owner = "owner_591";
  let repo = "repo_591";
  createPagesSite("owner_591", "repo_591");
  tryToAddExistingPagesSite("owner_591", "repo_591");
  updatePagesSite("owner_591", "repo_591");
  verifyPagesSiteExists("owner_591", "repo_591");
  deletePagesSite("owner_591", "repo_591");
  tryToDeleteANonExistingPagesSite("owner_591", "repo_591");
  verifyPagesSiteDoesNotExist("owner_591", "repo_591");
});

// Story: crud:PagesSite:nondet:negative:dup-add
bthread("crud:PagesSite:nondet:negative:dup-add", function () {
  let owner = "owner_596";
  let repo = "repo_596";
  createPagesSite("owner_596", "repo_596");
  verifyPagesSiteExists("owner_596", "repo_596");
  tryToAddExistingPagesSite("owner_596", "repo_596");
  verifyPagesSiteExists("owner_596", "repo_596");
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
  let owner = "owner_600";
  let repo = "repo_600";
  let build_id = 600;
  verifyPagesBuildExists("owner_600", "repo_600", 600);
});

// Story: crud:PagesDeployment:read_only
bthread("crud:PagesDeployment:read_only", function () {
  let owner = "owner_610";
  let repo = "repo_610";
  let pages_deployment_id = 610;
  verifyPagesDeploymentExists("owner_610", "repo_610", 610);
});

// Story: crud:HostedRunner:nondet:1:1
bthread("crud:HostedRunner:nondet:1:1", function () {
  let org = "org_620";
  let name = "name_620";
  let image = "image_620";
  let size = "size_620";
  let runner_group_id = 620;
  let maximum_runners = "maximum_runners_620";
  let enable_static_ip = "enable_static_ip_620";
  let hosted_runner_id = 620;
  createHostedRunner("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
  tryToAddExistingHostedRunner("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
  verifyHostedRunnerExists("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
  updateHostedRunner("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
  deleteHostedRunner("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
  tryToDeleteANonExistingHostedRunner("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
  verifyHostedRunnerDoesNotExist("org_620", "name_620", "image_620", "size_620", 620, "maximum_runners_620", "enable_static_ip_620", 620);
});

// Story: crud:HostedRunner:nondet:1:2
bthread("crud:HostedRunner:nondet:1:2", function () {
  let org = "org_621";
  let name = "name_621";
  let image = "image_621";
  let size = "size_621";
  let runner_group_id = 621;
  let maximum_runners = "maximum_runners_621";
  let enable_static_ip = "enable_static_ip_621";
  let hosted_runner_id = 621;
  createHostedRunner("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
  tryToAddExistingHostedRunner("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
  updateHostedRunner("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
  verifyHostedRunnerExists("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
  deleteHostedRunner("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
  tryToDeleteANonExistingHostedRunner("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
  verifyHostedRunnerDoesNotExist("org_621", "name_621", "image_621", "size_621", 621, "maximum_runners_621", "enable_static_ip_621", 621);
});

// Story: crud:HostedRunner:nondet:negative:dup-add
bthread("crud:HostedRunner:nondet:negative:dup-add", function () {
  let org = "org_626";
  let name = "name_626";
  let image = "image_626";
  let size = "size_626";
  let runner_group_id = 626;
  let maximum_runners = "maximum_runners_626";
  let enable_static_ip = "enable_static_ip_626";
  let hosted_runner_id = 626;
  createHostedRunner("org_626", "name_626", "image_626", "size_626", 626, "maximum_runners_626", "enable_static_ip_626", 626);
  verifyHostedRunnerExists("org_626", "name_626", "image_626", "size_626", 626, "maximum_runners_626", "enable_static_ip_626", 626);
  tryToAddExistingHostedRunner("org_626", "name_626", "image_626", "size_626", 626, "maximum_runners_626", "enable_static_ip_626", 626);
  verifyHostedRunnerExists("org_626", "name_626", "image_626", "size_626", 626, "maximum_runners_626", "enable_static_ip_626", 626);
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
  let org = "org_630";
  let name = "name_630";
  let visibility = "visibility_630";
  let selected_repository_ids = 630;
  let runners = "runners_630";
  let allows_public_repositories = "allows_public_repositories_630";
  let restricted_to_workflows = "restricted_to_workflows_630";
  let selected_workflows = "selected_workflows_630";
  let network_configuration_id = 630;
  let runner_group_id = 630;
  createRunnerGroup("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
  tryToAddExistingRunnerGroup("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
  verifyRunnerGroupExists("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
  updateRunnerGroup("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
  deleteRunnerGroup("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
  tryToDeleteANonExistingRunnerGroup("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
  verifyRunnerGroupDoesNotExist("org_630", "name_630", "visibility_630", 630, "runners_630", "allows_public_repositories_630", "restricted_to_workflows_630", "selected_workflows_630", 630, 630);
});

// Story: crud:RunnerGroup:nondet:1:2
bthread("crud:RunnerGroup:nondet:1:2", function () {
  let org = "org_631";
  let name = "name_631";
  let visibility = "visibility_631";
  let selected_repository_ids = 631;
  let runners = "runners_631";
  let allows_public_repositories = "allows_public_repositories_631";
  let restricted_to_workflows = "restricted_to_workflows_631";
  let selected_workflows = "selected_workflows_631";
  let network_configuration_id = 631;
  let runner_group_id = 631;
  createRunnerGroup("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
  tryToAddExistingRunnerGroup("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
  updateRunnerGroup("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
  verifyRunnerGroupExists("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
  deleteRunnerGroup("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
  tryToDeleteANonExistingRunnerGroup("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
  verifyRunnerGroupDoesNotExist("org_631", "name_631", "visibility_631", 631, "runners_631", "allows_public_repositories_631", "restricted_to_workflows_631", "selected_workflows_631", 631, 631);
});

// Story: crud:RunnerGroup:nondet:negative:dup-add
bthread("crud:RunnerGroup:nondet:negative:dup-add", function () {
  let org = "org_636";
  let name = "name_636";
  let visibility = "visibility_636";
  let selected_repository_ids = 636;
  let runners = "runners_636";
  let allows_public_repositories = "allows_public_repositories_636";
  let restricted_to_workflows = "restricted_to_workflows_636";
  let selected_workflows = "selected_workflows_636";
  let network_configuration_id = 636;
  let runner_group_id = 636;
  createRunnerGroup("org_636", "name_636", "visibility_636", 636, "runners_636", "allows_public_repositories_636", "restricted_to_workflows_636", "selected_workflows_636", 636, 636);
  verifyRunnerGroupExists("org_636", "name_636", "visibility_636", 636, "runners_636", "allows_public_repositories_636", "restricted_to_workflows_636", "selected_workflows_636", 636, 636);
  tryToAddExistingRunnerGroup("org_636", "name_636", "visibility_636", 636, "runners_636", "allows_public_repositories_636", "restricted_to_workflows_636", "selected_workflows_636", 636, 636);
  verifyRunnerGroupExists("org_636", "name_636", "visibility_636", 636, "runners_636", "allows_public_repositories_636", "restricted_to_workflows_636", "selected_workflows_636", 636, 636);
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
  let org = "org_640";
  let runner_group_id = 640;
  let repository_id = 640;
  addRepoAccessToRunnerGroup("org_640", 640, 640);
  tryToAddExistingRunnerGroupRepositoryAccess("org_640", 640, 640);
  verifyRunnerGroupRepositoryAccessExists("org_640", 640, 640);
  removeRepoAccessFromRunnerGroup("org_640", 640, 640);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess("org_640", 640, 640);
  verifyRunnerGroupRepositoryAccessDoesNotExist("org_640", 640, 640);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:1:2
bthread("crud:RunnerGroupRepositoryAccess:nondet:1:2", function () {
  let org = "org_641";
  let runner_group_id = 641;
  let repository_id = 641;
  addRepoAccessToRunnerGroup("org_641", 641, 641);
  tryToAddExistingRunnerGroupRepositoryAccess("org_641", 641, 641);
  verifyRunnerGroupRepositoryAccessExists("org_641", 641, 641);
  removeRepoAccessFromRunnerGroup("org_641", 641, 641);
  tryToDeleteANonExistingRunnerGroupRepositoryAccess("org_641", 641, 641);
  verifyRunnerGroupRepositoryAccessDoesNotExist("org_641", 641, 641);
});

// Story: crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add
bthread("crud:RunnerGroupRepositoryAccess:nondet:negative:dup-add", function () {
  let org = "org_646";
  let runner_group_id = 646;
  let repository_id = 646;
  addRepoAccessToRunnerGroup("org_646", 646, 646);
  verifyRunnerGroupRepositoryAccessExists("org_646", 646, 646);
  tryToAddExistingRunnerGroupRepositoryAccess("org_646", 646, 646);
  verifyRunnerGroupRepositoryAccessExists("org_646", 646, 646);
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

// Story: crud:RunnerGroupRunner:nondet:1:1
bthread("crud:RunnerGroupRunner:nondet:1:1", function () {
  let org = "org_660";
  let runner_group_id = 660;
  let runner_id = 660;
  addRunnerToRunnerGroup("org_660", 660, 660);
  tryToAddExistingRunnerGroupRunner("org_660", 660, 660);
  verifyRunnerGroupRunnerExists("org_660", 660, 660);
  removeRunnerFromRunnerGroup("org_660", 660, 660);
  tryToDeleteANonExistingRunnerGroupRunner("org_660", 660, 660);
  verifyRunnerGroupRunnerDoesNotExist("org_660", 660, 660);
});

// Story: crud:RunnerGroupRunner:nondet:1:2
bthread("crud:RunnerGroupRunner:nondet:1:2", function () {
  let org = "org_661";
  let runner_group_id = 661;
  let runner_id = 661;
  addRunnerToRunnerGroup("org_661", 661, 661);
  tryToAddExistingRunnerGroupRunner("org_661", 661, 661);
  verifyRunnerGroupRunnerExists("org_661", 661, 661);
  removeRunnerFromRunnerGroup("org_661", 661, 661);
  tryToDeleteANonExistingRunnerGroupRunner("org_661", 661, 661);
  verifyRunnerGroupRunnerDoesNotExist("org_661", 661, 661);
});

// Story: crud:RunnerGroupRunner:nondet:negative:dup-add
bthread("crud:RunnerGroupRunner:nondet:negative:dup-add", function () {
  let org = "org_666";
  let runner_group_id = 666;
  let runner_id = 666;
  addRunnerToRunnerGroup("org_666", 666, 666);
  verifyRunnerGroupRunnerExists("org_666", 666, 666);
  tryToAddExistingRunnerGroupRunner("org_666", 666, 666);
  verifyRunnerGroupRunnerExists("org_666", 666, 666);
});

// Story: monitor:RunnerGroupRunner:add
bthread("monitor:RunnerGroupRunner:add", function () {
  while (true) {
    let ev = waitForAnyRunnerGroupRunnerAdded();
    let args = Object.values(ev);
    block(matchDeletedRunnerGroupRunner.apply(null, args), function () {
      verifyRunnerGroupRunnerExists.apply(null, args);
    });
  }
});

// Story: crud:SelfHostedRunner:read_only
bthread("crud:SelfHostedRunner:read_only", function () {
  let org = "org_680";
  let runner_id = 680;
  verifySelfHostedRunnerExists("org_680", 680);
});

// Story: crud:SelfHostedRunnerLabels:nondet:1:1
bthread("crud:SelfHostedRunnerLabels:nondet:1:1", function () {
  let org = "org_700";
  let runner_id = 700;
  let labels = "labels_700";
  addCustomLabelsToSelfHostedRunner("org_700", 700, "labels_700");
  tryToAddExistingSelfHostedRunnerLabels("org_700", 700, "labels_700");
  verifySelfHostedRunnerLabelsExists("org_700", 700, "labels_700");
  setCustomLabelsForSelfHostedRunner("org_700", 700, "labels_700");
  removeAllCustomLabelsFromSelfHostedRunner("org_700", 700, "labels_700");
  tryToDeleteANonExistingSelfHostedRunnerLabels("org_700", 700, "labels_700");
  verifySelfHostedRunnerLabelsDoesNotExist("org_700", 700, "labels_700");
});

// Story: crud:SelfHostedRunnerLabels:nondet:1:2
bthread("crud:SelfHostedRunnerLabels:nondet:1:2", function () {
  let org = "org_701";
  let runner_id = 701;
  let labels = "labels_701";
  addCustomLabelsToSelfHostedRunner("org_701", 701, "labels_701");
  tryToAddExistingSelfHostedRunnerLabels("org_701", 701, "labels_701");
  setCustomLabelsForSelfHostedRunner("org_701", 701, "labels_701");
  verifySelfHostedRunnerLabelsExists("org_701", 701, "labels_701");
  removeAllCustomLabelsFromSelfHostedRunner("org_701", 701, "labels_701");
  tryToDeleteANonExistingSelfHostedRunnerLabels("org_701", 701, "labels_701");
  verifySelfHostedRunnerLabelsDoesNotExist("org_701", 701, "labels_701");
});

// Story: crud:SelfHostedRunnerLabels:nondet:negative:dup-add
bthread("crud:SelfHostedRunnerLabels:nondet:negative:dup-add", function () {
  let org = "org_706";
  let runner_id = 706;
  let labels = "labels_706";
  addCustomLabelsToSelfHostedRunner("org_706", 706, "labels_706");
  verifySelfHostedRunnerLabelsExists("org_706", 706, "labels_706");
  tryToAddExistingSelfHostedRunnerLabels("org_706", 706, "labels_706");
  verifySelfHostedRunnerLabelsExists("org_706", 706, "labels_706");
});

// Story: crud:SelfHostedRunnerLabels:nondet:existing:update
bthread("crud:SelfHostedRunnerLabels:nondet:existing:update", function () {
  let ev = waitForAnySelfHostedRunnerLabelsAdded();
  let args = Object.values(ev);
  block(matchDeletedSelfHostedRunnerLabels.apply(null, args), function () {
    verifySelfHostedRunnerLabelsExists.apply(null, args);
    setCustomLabelsForSelfHostedRunner.apply(null, args);
    verifySelfHostedRunnerLabelsExists.apply(null, args);
  });
});

// Story: monitor:SelfHostedRunnerLabels:add
bthread("monitor:SelfHostedRunnerLabels:add", function () {
  while (true) {
    let ev = waitForAnySelfHostedRunnerLabelsAdded();
    let args = Object.values(ev);
    block(matchDeletedSelfHostedRunnerLabels.apply(null, args), function () {
      verifySelfHostedRunnerLabelsExists.apply(null, args);
    });
  }
});

// Story: crud:SelfHostedRunnerList:read_only
bthread("crud:SelfHostedRunnerList:read_only", function () {
  let org = "org_710";
  let name = "name_710";
  let per-page = "per-page_710";
  let page = "page_710";
  verifySelfHostedRunnerListExists("org_710", "name_710", "per-page_710", "page_710");
});

// Story: crud:SelfHostedRunnerRepo:read_only
bthread("crud:SelfHostedRunnerRepo:read_only", function () {
  let owner = "owner_740";
  let repo = "repo_740";
  let runner_id = 740;
  verifySelfHostedRunnerRepoExists("owner_740", "repo_740", 740);
});

// Story: crud:SelfHostedRunnerLabelsRepo:nondet:1:1
bthread("crud:SelfHostedRunnerLabelsRepo:nondet:1:1", function () {
  let owner = "owner_750";
  let repo = "repo_750";
  let runner_id = 750;
  let labels = "labels_750";
  addCustomLabelsToSelfHostedRunnerForRepo("owner_750", "repo_750", 750, "labels_750");
  tryToAddExistingSelfHostedRunnerLabelsRepo("owner_750", "repo_750", 750, "labels_750");
  verifySelfHostedRunnerLabelsRepoExists("owner_750", "repo_750", 750, "labels_750");
  setCustomLabelsForSelfHostedRunnerForRepo("owner_750", "repo_750", 750, "labels_750");
  removeAllCustomLabelsFromSelfHostedRunnerForRepo("owner_750", "repo_750", 750, "labels_750");
  tryToDeleteANonExistingSelfHostedRunnerLabelsRepo("owner_750", "repo_750", 750, "labels_750");
  verifySelfHostedRunnerLabelsRepoDoesNotExist("owner_750", "repo_750", 750, "labels_750");
});

// Story: crud:SelfHostedRunnerLabelsRepo:nondet:1:2
bthread("crud:SelfHostedRunnerLabelsRepo:nondet:1:2", function () {
  let owner = "owner_751";
  let repo = "repo_751";
  let runner_id = 751;
  let labels = "labels_751";
  addCustomLabelsToSelfHostedRunnerForRepo("owner_751", "repo_751", 751, "labels_751");
  tryToAddExistingSelfHostedRunnerLabelsRepo("owner_751", "repo_751", 751, "labels_751");
  setCustomLabelsForSelfHostedRunnerForRepo("owner_751", "repo_751", 751, "labels_751");
  verifySelfHostedRunnerLabelsRepoExists("owner_751", "repo_751", 751, "labels_751");
  removeAllCustomLabelsFromSelfHostedRunnerForRepo("owner_751", "repo_751", 751, "labels_751");
  tryToDeleteANonExistingSelfHostedRunnerLabelsRepo("owner_751", "repo_751", 751, "labels_751");
  verifySelfHostedRunnerLabelsRepoDoesNotExist("owner_751", "repo_751", 751, "labels_751");
});

// Story: crud:SelfHostedRunnerLabelsRepo:nondet:negative:dup-add
bthread("crud:SelfHostedRunnerLabelsRepo:nondet:negative:dup-add", function () {
  let owner = "owner_756";
  let repo = "repo_756";
  let runner_id = 756;
  let labels = "labels_756";
  addCustomLabelsToSelfHostedRunnerForRepo("owner_756", "repo_756", 756, "labels_756");
  verifySelfHostedRunnerLabelsRepoExists("owner_756", "repo_756", 756, "labels_756");
  tryToAddExistingSelfHostedRunnerLabelsRepo("owner_756", "repo_756", 756, "labels_756");
  verifySelfHostedRunnerLabelsRepoExists("owner_756", "repo_756", 756, "labels_756");
});

// Story: crud:SelfHostedRunnerLabelsRepo:nondet:existing:update
bthread("crud:SelfHostedRunnerLabelsRepo:nondet:existing:update", function () {
  let ev = waitForAnySelfHostedRunnerLabelsRepoAdded();
  let args = Object.values(ev);
  block(matchDeletedSelfHostedRunnerLabelsRepo.apply(null, args), function () {
    verifySelfHostedRunnerLabelsRepoExists.apply(null, args);
    setCustomLabelsForSelfHostedRunnerForRepo.apply(null, args);
    verifySelfHostedRunnerLabelsRepoExists.apply(null, args);
  });
});

// Story: monitor:SelfHostedRunnerLabelsRepo:add
bthread("monitor:SelfHostedRunnerLabelsRepo:add", function () {
  while (true) {
    let ev = waitForAnySelfHostedRunnerLabelsRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedSelfHostedRunnerLabelsRepo.apply(null, args), function () {
      verifySelfHostedRunnerLabelsRepoExists.apply(null, args);
    });
  }
});

// Story: crud:SelfHostedRunnerListRepo:read_only
bthread("crud:SelfHostedRunnerListRepo:read_only", function () {
  let owner = "owner_770";
  let repo = "repo_770";
  let name = "name_770";
  let per-page = "per-page_770";
  let page = "page_770";
  verifySelfHostedRunnerListRepoExists("owner_770", "repo_770", "name_770", "per-page_770", "page_770");
});

// Story: crud:Secret:nondet:1:1
bthread("crud:Secret:nondet:1:1", function () {
  let org = "org_800";
  let secret_name = "secret_name_800";
  let encrypted_value = "encrypted_value_800";
  let key_id = 800;
  let visibility = "visibility_800";
  let selected_repository_ids = 800;
  createOrUpdateOrgSecret("org_800", "secret_name_800", "encrypted_value_800", 800, "visibility_800", 800);
  tryToAddExistingSecret("org_800", "secret_name_800", "encrypted_value_800", 800, "visibility_800", 800);
  verifySecretExists("org_800", "secret_name_800", "encrypted_value_800", 800, "visibility_800", 800);
  deleteOrgSecret("org_800", "secret_name_800", "encrypted_value_800", 800, "visibility_800", 800);
  tryToDeleteANonExistingSecret("org_800", "secret_name_800", "encrypted_value_800", 800, "visibility_800", 800);
  verifySecretDoesNotExist("org_800", "secret_name_800", "encrypted_value_800", 800, "visibility_800", 800);
});

// Story: crud:Secret:nondet:1:2
bthread("crud:Secret:nondet:1:2", function () {
  let org = "org_801";
  let secret_name = "secret_name_801";
  let encrypted_value = "encrypted_value_801";
  let key_id = 801;
  let visibility = "visibility_801";
  let selected_repository_ids = 801;
  createOrUpdateOrgSecret("org_801", "secret_name_801", "encrypted_value_801", 801, "visibility_801", 801);
  tryToAddExistingSecret("org_801", "secret_name_801", "encrypted_value_801", 801, "visibility_801", 801);
  verifySecretExists("org_801", "secret_name_801", "encrypted_value_801", 801, "visibility_801", 801);
  deleteOrgSecret("org_801", "secret_name_801", "encrypted_value_801", 801, "visibility_801", 801);
  tryToDeleteANonExistingSecret("org_801", "secret_name_801", "encrypted_value_801", 801, "visibility_801", 801);
  verifySecretDoesNotExist("org_801", "secret_name_801", "encrypted_value_801", 801, "visibility_801", 801);
});

// Story: crud:Secret:nondet:negative:dup-add
bthread("crud:Secret:nondet:negative:dup-add", function () {
  let org = "org_806";
  let secret_name = "secret_name_806";
  let encrypted_value = "encrypted_value_806";
  let key_id = 806;
  let visibility = "visibility_806";
  let selected_repository_ids = 806;
  createOrUpdateOrgSecret("org_806", "secret_name_806", "encrypted_value_806", 806, "visibility_806", 806);
  verifySecretExists("org_806", "secret_name_806", "encrypted_value_806", 806, "visibility_806", 806);
  tryToAddExistingSecret("org_806", "secret_name_806", "encrypted_value_806", 806, "visibility_806", 806);
  verifySecretExists("org_806", "secret_name_806", "encrypted_value_806", 806, "visibility_806", 806);
});

// Story: monitor:Secret:add
bthread("monitor:Secret:add", function () {
  while (true) {
    let ev = waitForAnySecretAdded();
    let args = Object.values(ev);
    block(matchDeletedSecret.apply(null, args), function () {
      verifySecretExists.apply(null, args);
    });
  }
});

// Story: crud:SecretSelectedRepos:nondet:1:1
bthread("crud:SecretSelectedRepos:nondet:1:1", function () {
  let org = "org_810";
  let secret_name = "secret_name_810";
  let repository_id = 810;
  addSelectedRepoToOrgSecret("org_810", "secret_name_810", 810);
  tryToAddExistingSecretSelectedRepos("org_810", "secret_name_810", 810);
  verifySecretSelectedReposExists("org_810", "secret_name_810", 810);
  removeSelectedRepoFromOrgSecret("org_810", "secret_name_810", 810);
  tryToDeleteANonExistingSecretSelectedRepos("org_810", "secret_name_810", 810);
  verifySecretSelectedReposDoesNotExist("org_810", "secret_name_810", 810);
});

// Story: crud:SecretSelectedRepos:nondet:1:2
bthread("crud:SecretSelectedRepos:nondet:1:2", function () {
  let org = "org_811";
  let secret_name = "secret_name_811";
  let repository_id = 811;
  addSelectedRepoToOrgSecret("org_811", "secret_name_811", 811);
  tryToAddExistingSecretSelectedRepos("org_811", "secret_name_811", 811);
  verifySecretSelectedReposExists("org_811", "secret_name_811", 811);
  removeSelectedRepoFromOrgSecret("org_811", "secret_name_811", 811);
  tryToDeleteANonExistingSecretSelectedRepos("org_811", "secret_name_811", 811);
  verifySecretSelectedReposDoesNotExist("org_811", "secret_name_811", 811);
});

// Story: crud:SecretSelectedRepos:nondet:negative:dup-add
bthread("crud:SecretSelectedRepos:nondet:negative:dup-add", function () {
  let org = "org_816";
  let secret_name = "secret_name_816";
  let repository_id = 816;
  addSelectedRepoToOrgSecret("org_816", "secret_name_816", 816);
  verifySecretSelectedReposExists("org_816", "secret_name_816", 816);
  tryToAddExistingSecretSelectedRepos("org_816", "secret_name_816", 816);
  verifySecretSelectedReposExists("org_816", "secret_name_816", 816);
});

// Story: monitor:SecretSelectedRepos:add
bthread("monitor:SecretSelectedRepos:add", function () {
  while (true) {
    let ev = waitForAnySecretSelectedReposAdded();
    let args = Object.values(ev);
    block(matchDeletedSecretSelectedRepos.apply(null, args), function () {
      verifySecretSelectedReposExists.apply(null, args);
    });
  }
});

// Story: crud:SecretSelectedReposList:read_only
bthread("crud:SecretSelectedReposList:read_only", function () {
  let org = "org_820";
  let secret_name = "secret_name_820";
  let selected_repository_ids = 820;
  let page = "page_820";
  let per-page = "per-page_820";
  verifySecretSelectedReposListExists("org_820", "secret_name_820", 820, "page_820", "per-page_820");
});

// Story: crud:Variable:nondet:1:1
bthread("crud:Variable:nondet:1:1", function () {
  let org = "org_830";
  let name = "name_830";
  let value = "value_830";
  let visibility = "visibility_830";
  let selected_repository_ids = 830;
  createOrgVariable("org_830", "name_830", "value_830", "visibility_830", 830);
  tryToAddExistingVariable("org_830", "name_830", "value_830", "visibility_830", 830);
  verifyVariableExists("org_830", "name_830", "value_830", "visibility_830", 830);
  updateOrgVariable("org_830", "name_830", "value_830", "visibility_830", 830);
  deleteOrgVariable("org_830", "name_830", "value_830", "visibility_830", 830);
  tryToDeleteANonExistingVariable("org_830", "name_830", "value_830", "visibility_830", 830);
  verifyVariableDoesNotExist("org_830", "name_830", "value_830", "visibility_830", 830);
});

// Story: crud:Variable:nondet:1:2
bthread("crud:Variable:nondet:1:2", function () {
  let org = "org_831";
  let name = "name_831";
  let value = "value_831";
  let visibility = "visibility_831";
  let selected_repository_ids = 831;
  createOrgVariable("org_831", "name_831", "value_831", "visibility_831", 831);
  tryToAddExistingVariable("org_831", "name_831", "value_831", "visibility_831", 831);
  updateOrgVariable("org_831", "name_831", "value_831", "visibility_831", 831);
  verifyVariableExists("org_831", "name_831", "value_831", "visibility_831", 831);
  deleteOrgVariable("org_831", "name_831", "value_831", "visibility_831", 831);
  tryToDeleteANonExistingVariable("org_831", "name_831", "value_831", "visibility_831", 831);
  verifyVariableDoesNotExist("org_831", "name_831", "value_831", "visibility_831", 831);
});

// Story: crud:Variable:nondet:negative:dup-add
bthread("crud:Variable:nondet:negative:dup-add", function () {
  let org = "org_836";
  let name = "name_836";
  let value = "value_836";
  let visibility = "visibility_836";
  let selected_repository_ids = 836;
  createOrgVariable("org_836", "name_836", "value_836", "visibility_836", 836);
  verifyVariableExists("org_836", "name_836", "value_836", "visibility_836", 836);
  tryToAddExistingVariable("org_836", "name_836", "value_836", "visibility_836", 836);
  verifyVariableExists("org_836", "name_836", "value_836", "visibility_836", 836);
});

// Story: crud:Variable:nondet:existing:update
bthread("crud:Variable:nondet:existing:update", function () {
  let ev = waitForAnyVariableAdded();
  let args = Object.values(ev);
  block(matchDeletedVariable.apply(null, args), function () {
    verifyVariableExists.apply(null, args);
    updateOrgVariable.apply(null, args);
    verifyVariableExists.apply(null, args);
  });
});

// Story: monitor:Variable:add
bthread("monitor:Variable:add", function () {
  while (true) {
    let ev = waitForAnyVariableAdded();
    let args = Object.values(ev);
    block(matchDeletedVariable.apply(null, args), function () {
      verifyVariableExists.apply(null, args);
    });
  }
});

// Story: crud:VariableSelectedRepos:nondet:1:1
bthread("crud:VariableSelectedRepos:nondet:1:1", function () {
  let org = "org_840";
  let name = "name_840";
  let repository_id = 840;
  addSelectedRepoToOrgVariable("org_840", "name_840", 840);
  tryToAddExistingVariableSelectedRepos("org_840", "name_840", 840);
  verifyVariableSelectedReposExists("org_840", "name_840", 840);
  removeSelectedRepoFromOrgVariable("org_840", "name_840", 840);
  tryToDeleteANonExistingVariableSelectedRepos("org_840", "name_840", 840);
  verifyVariableSelectedReposDoesNotExist("org_840", "name_840", 840);
});

// Story: crud:VariableSelectedRepos:nondet:1:2
bthread("crud:VariableSelectedRepos:nondet:1:2", function () {
  let org = "org_841";
  let name = "name_841";
  let repository_id = 841;
  addSelectedRepoToOrgVariable("org_841", "name_841", 841);
  tryToAddExistingVariableSelectedRepos("org_841", "name_841", 841);
  verifyVariableSelectedReposExists("org_841", "name_841", 841);
  removeSelectedRepoFromOrgVariable("org_841", "name_841", 841);
  tryToDeleteANonExistingVariableSelectedRepos("org_841", "name_841", 841);
  verifyVariableSelectedReposDoesNotExist("org_841", "name_841", 841);
});

// Story: crud:VariableSelectedRepos:nondet:negative:dup-add
bthread("crud:VariableSelectedRepos:nondet:negative:dup-add", function () {
  let org = "org_846";
  let name = "name_846";
  let repository_id = 846;
  addSelectedRepoToOrgVariable("org_846", "name_846", 846);
  verifyVariableSelectedReposExists("org_846", "name_846", 846);
  tryToAddExistingVariableSelectedRepos("org_846", "name_846", 846);
  verifyVariableSelectedReposExists("org_846", "name_846", 846);
});

// Story: monitor:VariableSelectedRepos:add
bthread("monitor:VariableSelectedRepos:add", function () {
  while (true) {
    let ev = waitForAnyVariableSelectedReposAdded();
    let args = Object.values(ev);
    block(matchDeletedVariableSelectedRepos.apply(null, args), function () {
      verifyVariableSelectedReposExists.apply(null, args);
    });
  }
});

// Story: crud:VariableSelectedReposList:read_only
bthread("crud:VariableSelectedReposList:read_only", function () {
  let org = "org_850";
  let name = "name_850";
  let selected_repository_ids = 850;
  let page = "page_850";
  let per-page = "per-page_850";
  verifyVariableSelectedReposListExists("org_850", "name_850", 850, "page_850", "per-page_850");
});

// Story: crud:VariableRepo:nondet:1:1
bthread("crud:VariableRepo:nondet:1:1", function () {
  let owner = "owner_860";
  let repo = "repo_860";
  let name = "name_860";
  let value = "value_860";
  createRepoVariable("owner_860", "repo_860", "name_860", "value_860");
  tryToAddExistingVariableRepo("owner_860", "repo_860", "name_860", "value_860");
  verifyVariableRepoExists("owner_860", "repo_860", "name_860", "value_860");
  updateRepoVariable("owner_860", "repo_860", "name_860", "value_860");
  deleteRepoVariable("owner_860", "repo_860", "name_860", "value_860");
  tryToDeleteANonExistingVariableRepo("owner_860", "repo_860", "name_860", "value_860");
  verifyVariableRepoDoesNotExist("owner_860", "repo_860", "name_860", "value_860");
});

// Story: crud:VariableRepo:nondet:1:2
bthread("crud:VariableRepo:nondet:1:2", function () {
  let owner = "owner_861";
  let repo = "repo_861";
  let name = "name_861";
  let value = "value_861";
  createRepoVariable("owner_861", "repo_861", "name_861", "value_861");
  tryToAddExistingVariableRepo("owner_861", "repo_861", "name_861", "value_861");
  updateRepoVariable("owner_861", "repo_861", "name_861", "value_861");
  verifyVariableRepoExists("owner_861", "repo_861", "name_861", "value_861");
  deleteRepoVariable("owner_861", "repo_861", "name_861", "value_861");
  tryToDeleteANonExistingVariableRepo("owner_861", "repo_861", "name_861", "value_861");
  verifyVariableRepoDoesNotExist("owner_861", "repo_861", "name_861", "value_861");
});

// Story: crud:VariableRepo:nondet:negative:dup-add
bthread("crud:VariableRepo:nondet:negative:dup-add", function () {
  let owner = "owner_866";
  let repo = "repo_866";
  let name = "name_866";
  let value = "value_866";
  createRepoVariable("owner_866", "repo_866", "name_866", "value_866");
  verifyVariableRepoExists("owner_866", "repo_866", "name_866", "value_866");
  tryToAddExistingVariableRepo("owner_866", "repo_866", "name_866", "value_866");
  verifyVariableRepoExists("owner_866", "repo_866", "name_866", "value_866");
});

// Story: crud:VariableRepo:nondet:existing:update
bthread("crud:VariableRepo:nondet:existing:update", function () {
  let ev = waitForAnyVariableRepoAdded();
  let args = Object.values(ev);
  block(matchDeletedVariableRepo.apply(null, args), function () {
    verifyVariableRepoExists.apply(null, args);
    updateRepoVariable.apply(null, args);
    verifyVariableRepoExists.apply(null, args);
  });
});

// Story: monitor:VariableRepo:add
bthread("monitor:VariableRepo:add", function () {
  while (true) {
    let ev = waitForAnyVariableRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedVariableRepo.apply(null, args), function () {
      verifyVariableRepoExists.apply(null, args);
    });
  }
});

// Story: crud:SecretRepo:nondet:1:1
bthread("crud:SecretRepo:nondet:1:1", function () {
  let owner = "owner_870";
  let repo = "repo_870";
  let secret_name = "secret_name_870";
  let encrypted_value = "encrypted_value_870";
  let key_id = 870;
  createOrUpdateRepoSecret("owner_870", "repo_870", "secret_name_870", "encrypted_value_870", 870);
  tryToAddExistingSecretRepo("owner_870", "repo_870", "secret_name_870", "encrypted_value_870", 870);
  verifySecretRepoExists("owner_870", "repo_870", "secret_name_870", "encrypted_value_870", 870);
  deleteRepoSecret("owner_870", "repo_870", "secret_name_870", "encrypted_value_870", 870);
  tryToDeleteANonExistingSecretRepo("owner_870", "repo_870", "secret_name_870", "encrypted_value_870", 870);
  verifySecretRepoDoesNotExist("owner_870", "repo_870", "secret_name_870", "encrypted_value_870", 870);
});

// Story: crud:SecretRepo:nondet:1:2
bthread("crud:SecretRepo:nondet:1:2", function () {
  let owner = "owner_871";
  let repo = "repo_871";
  let secret_name = "secret_name_871";
  let encrypted_value = "encrypted_value_871";
  let key_id = 871;
  createOrUpdateRepoSecret("owner_871", "repo_871", "secret_name_871", "encrypted_value_871", 871);
  tryToAddExistingSecretRepo("owner_871", "repo_871", "secret_name_871", "encrypted_value_871", 871);
  verifySecretRepoExists("owner_871", "repo_871", "secret_name_871", "encrypted_value_871", 871);
  deleteRepoSecret("owner_871", "repo_871", "secret_name_871", "encrypted_value_871", 871);
  tryToDeleteANonExistingSecretRepo("owner_871", "repo_871", "secret_name_871", "encrypted_value_871", 871);
  verifySecretRepoDoesNotExist("owner_871", "repo_871", "secret_name_871", "encrypted_value_871", 871);
});

// Story: crud:SecretRepo:nondet:negative:dup-add
bthread("crud:SecretRepo:nondet:negative:dup-add", function () {
  let owner = "owner_876";
  let repo = "repo_876";
  let secret_name = "secret_name_876";
  let encrypted_value = "encrypted_value_876";
  let key_id = 876;
  createOrUpdateRepoSecret("owner_876", "repo_876", "secret_name_876", "encrypted_value_876", 876);
  verifySecretRepoExists("owner_876", "repo_876", "secret_name_876", "encrypted_value_876", 876);
  tryToAddExistingSecretRepo("owner_876", "repo_876", "secret_name_876", "encrypted_value_876", 876);
  verifySecretRepoExists("owner_876", "repo_876", "secret_name_876", "encrypted_value_876", 876);
});

// Story: monitor:SecretRepo:add
bthread("monitor:SecretRepo:add", function () {
  while (true) {
    let ev = waitForAnySecretRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedSecretRepo.apply(null, args), function () {
      verifySecretRepoExists.apply(null, args);
    });
  }
});

// Story: crud:Workflow:read_only
bthread("crud:Workflow:read_only", function () {
  let owner = "owner_880";
  let repo = "repo_880";
  let workflow_id = 880;
  let ref = "ref_880";
  let inputs = "inputs_880";
  verifyWorkflowExists("owner_880", "repo_880", 880, "ref_880", "inputs_880");
});

// Story: crud:WorkflowRun:read_only
bthread("crud:WorkflowRun:read_only", function () {
  let owner = "owner_890";
  let repo = "repo_890";
  let run_id = 890;
  let exclude_pull_requests = "exclude_pull_requests_890";
  let enable_debug_logging = "enable_debug_logging_890";
  verifyWorkflowRunExists("owner_890", "repo_890", 890, "exclude_pull_requests_890", "enable_debug_logging_890");
});

// Story: crud:WorkflowRunAttempt:read_only
bthread("crud:WorkflowRunAttempt:read_only", function () {
  let owner = "owner_900";
  let repo = "repo_900";
  let run_id = 900;
  let attempt_number = "attempt_number_900";
  let exclude_pull_requests = "exclude_pull_requests_900";
  verifyWorkflowRunAttemptExists("owner_900", "repo_900", 900, "attempt_number_900", "exclude_pull_requests_900");
});

// Story: crud:WorkflowRunAttemptJobs:read_only
bthread("crud:WorkflowRunAttemptJobs:read_only", function () {
  let owner = "owner_910";
  let repo = "repo_910";
  let run_id = 910;
  let attempt_number = "attempt_number_910";
  let per-page = "per-page_910";
  let page = "page_910";
  verifyWorkflowRunAttemptJobsExists("owner_910", "repo_910", 910, "attempt_number_910", "per-page_910", "page_910");
});

// Story: crud:WorkflowRunAttemptLogs:read_only
bthread("crud:WorkflowRunAttemptLogs:read_only", function () {
  let owner = "owner_920";
  let repo = "repo_920";
  let run_id = 920;
  let attempt_number = "attempt_number_920";
  verifyWorkflowRunAttemptLogsExists("owner_920", "repo_920", 920, "attempt_number_920");
});

// Story: crud:WorkflowRunJobs:read_only
bthread("crud:WorkflowRunJobs:read_only", function () {
  let owner = "owner_930";
  let repo = "repo_930";
  let run_id = 930;
  let filter = "filter_930";
  let per-page = "per-page_930";
  let page = "page_930";
  verifyWorkflowRunJobsExists("owner_930", "repo_930", 930, "filter_930", "per-page_930", "page_930");
});

// Story: crud:WorkflowRunLogs:read_only
bthread("crud:WorkflowRunLogs:read_only", function () {
  let owner = "owner_940";
  let repo = "repo_940";
  let run_id = 940;
  verifyWorkflowRunLogsExists("owner_940", "repo_940", 940);
});

// Story: crud:WorkflowRunArtifacts:read_only
bthread("crud:WorkflowRunArtifacts:read_only", function () {
  let owner = "owner_950";
  let repo = "repo_950";
  let run_id = 950;
  let per-page = "per-page_950";
  let page = "page_950";
  let artifact-name = "artifact-name_950";
  verifyWorkflowRunArtifactsExists("owner_950", "repo_950", 950, "per-page_950", "page_950", "artifact-name_950");
});

// Story: crud:WorkflowRunApprovals:read_only
bthread("crud:WorkflowRunApprovals:read_only", function () {
  let owner = "owner_960";
  let repo = "repo_960";
  let run_id = 960;
  verifyWorkflowRunApprovalsExists("owner_960", "repo_960", 960);
});

// Story: crud:WorkflowRunPendingDeployments:read_only
bthread("crud:WorkflowRunPendingDeployments:read_only", function () {
  let owner = "owner_970";
  let repo = "repo_970";
  let run_id = 970;
  let environment_ids = 970;
  let state = "state_970";
  let comment = "comment_970";
  verifyWorkflowRunPendingDeploymentsExists("owner_970", "repo_970", 970, 970, "state_970", "comment_970");
});

// Story: crud:Job:read_only
bthread("crud:Job:read_only", function () {
  let owner = "owner_980";
  let repo = "repo_980";
  let job_id = 980;
  let enable_debug_logging = "enable_debug_logging_980";
  verifyJobExists("owner_980", "repo_980", 980, "enable_debug_logging_980");
});

// Story: crud:JobLogs:read_only
bthread("crud:JobLogs:read_only", function () {
  let owner = "owner_990";
  let repo = "repo_990";
  let job_id = 990;
  verifyJobLogsExists("owner_990", "repo_990", 990);
});

// Story: crud:Artifact:read_only
bthread("crud:Artifact:read_only", function () {
  let owner = "owner_1000";
  let repo = "repo_1000";
  let artifact_id = 1000;
  verifyArtifactExists("owner_1000", "repo_1000", 1000);
});

// Story: crud:ArtifactDownload:read_only
bthread("crud:ArtifactDownload:read_only", function () {
  let owner = "owner_1010";
  let repo = "repo_1010";
  let artifact_id = 1010;
  let archive_format = "archive_format_1010";
  verifyArtifactDownloadExists("owner_1010", "repo_1010", 1010, "archive_format_1010");
});

// Story: crud:CacheList:read_only
bthread("crud:CacheList:read_only", function () {
  let owner = "owner_1040";
  let repo = "repo_1040";
  let per-page = "per-page_1040";
  let page = "page_1040";
  let actions_cache_git_ref_full = "actions_cache_git_ref_full_1040";
  let actions_cache_key = "actions_cache_key_1040";
  let actions_cache_list_sort = "actions_cache_list_sort_1040";
  let direction = "direction_1040";
  verifyCacheListExists("owner_1040", "repo_1040", "per-page_1040", "page_1040", "actions_cache_git_ref_full_1040", "actions_cache_key_1040", "actions_cache_list_sort_1040", "direction_1040");
});

// Story: crud:CacheUsage:read_only
bthread("crud:CacheUsage:read_only", function () {
  let owner = "owner_1050";
  let repo = "repo_1050";
  verifyCacheUsageExists("owner_1050", "repo_1050");
});

// Story: crud:CacheUsageOrg:read_only
bthread("crud:CacheUsageOrg:read_only", function () {
  let org = "org_1060";
  verifyCacheUsageOrgExists("org_1060");
});

// Story: crud:CacheUsageByRepoOrg:read_only
bthread("crud:CacheUsageByRepoOrg:read_only", function () {
  let org = "org_1070";
  let per-page = "per-page_1070";
  let page = "page_1070";
  verifyCacheUsageByRepoOrgExists("org_1070", "per-page_1070", "page_1070");
});

// Story: crud:PermissionOrg:read_only
bthread("crud:PermissionOrg:read_only", function () {
  let org = "org_1080";
  let enabled_repositories = "enabled_repositories_1080";
  let allowed_actions = "allowed_actions_1080";
  let sha_pinning_required = "sha_pinning_required_1080";
  verifyPermissionOrgExists("org_1080", "enabled_repositories_1080", "allowed_actions_1080", "sha_pinning_required_1080");
});

// Story: crud:PermissionRepo:read_only
bthread("crud:PermissionRepo:read_only", function () {
  let owner = "owner_1090";
  let repo = "repo_1090";
  let enabled = "enabled_1090";
  let allowed_actions = "allowed_actions_1090";
  let sha_pinning_required = "sha_pinning_required_1090";
  verifyPermissionRepoExists("owner_1090", "repo_1090", "enabled_1090", "allowed_actions_1090", "sha_pinning_required_1090");
});

// Story: crud:PermissionSelectedRepositories:read_only
bthread("crud:PermissionSelectedRepositories:read_only", function () {
  let org = "org_1100";
  let per-page = "per-page_1100";
  let page = "page_1100";
  let selected_repository_ids = 1100;
  verifyPermissionSelectedRepositoriesExists("org_1100", "per-page_1100", "page_1100", 1100);
});

// Story: crud:PermissionSelectedRepository:nondet:1:1
bthread("crud:PermissionSelectedRepository:nondet:1:1", function () {
  let org = "org_1110";
  let repository_id = 1110;
  enableSelectedRepositoryForOrg("org_1110", 1110);
  tryToAddExistingPermissionSelectedRepository("org_1110", 1110);
  verifyPermissionSelectedRepositoryExists("org_1110", 1110);
  disableSelectedRepositoryForOrg("org_1110", 1110);
  tryToDeleteANonExistingPermissionSelectedRepository("org_1110", 1110);
  verifyPermissionSelectedRepositoryDoesNotExist("org_1110", 1110);
});

// Story: crud:PermissionSelectedRepository:nondet:1:2
bthread("crud:PermissionSelectedRepository:nondet:1:2", function () {
  let org = "org_1111";
  let repository_id = 1111;
  enableSelectedRepositoryForOrg("org_1111", 1111);
  tryToAddExistingPermissionSelectedRepository("org_1111", 1111);
  verifyPermissionSelectedRepositoryExists("org_1111", 1111);
  disableSelectedRepositoryForOrg("org_1111", 1111);
  tryToDeleteANonExistingPermissionSelectedRepository("org_1111", 1111);
  verifyPermissionSelectedRepositoryDoesNotExist("org_1111", 1111);
});

// Story: crud:PermissionSelectedRepository:nondet:negative:dup-add
bthread("crud:PermissionSelectedRepository:nondet:negative:dup-add", function () {
  let org = "org_1116";
  let repository_id = 1116;
  enableSelectedRepositoryForOrg("org_1116", 1116);
  verifyPermissionSelectedRepositoryExists("org_1116", 1116);
  tryToAddExistingPermissionSelectedRepository("org_1116", 1116);
  verifyPermissionSelectedRepositoryExists("org_1116", 1116);
});

// Story: monitor:PermissionSelectedRepository:add
bthread("monitor:PermissionSelectedRepository:add", function () {
  while (true) {
    let ev = waitForAnyPermissionSelectedRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedPermissionSelectedRepository.apply(null, args), function () {
      verifyPermissionSelectedRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:PermissionSelfHostedRunners:read_only
bthread("crud:PermissionSelfHostedRunners:read_only", function () {
  let org = "org_1120";
  let enabled_repositories = "enabled_repositories_1120";
  verifyPermissionSelfHostedRunnersExists("org_1120", "enabled_repositories_1120");
});

// Story: crud:PermissionSelfHostedRunnersRepositories:read_only
bthread("crud:PermissionSelfHostedRunnersRepositories:read_only", function () {
  let org = "org_1130";
  let per-page = "per-page_1130";
  let page = "page_1130";
  let selected_repository_ids = 1130;
  verifyPermissionSelfHostedRunnersRepositoriesExists("org_1130", "per-page_1130", "page_1130", 1130);
});

// Story: crud:PermissionSelfHostedRunnersRepository:nondet:1:1
bthread("crud:PermissionSelfHostedRunnersRepository:nondet:1:1", function () {
  let org = "org_1140";
  let repository_id = 1140;
  enableSelectedRepositorySelfHostedRunnersForOrg("org_1140", 1140);
  tryToAddExistingPermissionSelfHostedRunnersRepository("org_1140", 1140);
  verifyPermissionSelfHostedRunnersRepositoryExists("org_1140", 1140);
  disableSelectedRepositorySelfHostedRunnersForOrg("org_1140", 1140);
  tryToDeleteANonExistingPermissionSelfHostedRunnersRepository("org_1140", 1140);
  verifyPermissionSelfHostedRunnersRepositoryDoesNotExist("org_1140", 1140);
});

// Story: crud:PermissionSelfHostedRunnersRepository:nondet:1:2
bthread("crud:PermissionSelfHostedRunnersRepository:nondet:1:2", function () {
  let org = "org_1141";
  let repository_id = 1141;
  enableSelectedRepositorySelfHostedRunnersForOrg("org_1141", 1141);
  tryToAddExistingPermissionSelfHostedRunnersRepository("org_1141", 1141);
  verifyPermissionSelfHostedRunnersRepositoryExists("org_1141", 1141);
  disableSelectedRepositorySelfHostedRunnersForOrg("org_1141", 1141);
  tryToDeleteANonExistingPermissionSelfHostedRunnersRepository("org_1141", 1141);
  verifyPermissionSelfHostedRunnersRepositoryDoesNotExist("org_1141", 1141);
});

// Story: crud:PermissionSelfHostedRunnersRepository:nondet:negative:dup-add
bthread("crud:PermissionSelfHostedRunnersRepository:nondet:negative:dup-add", function () {
  let org = "org_1146";
  let repository_id = 1146;
  enableSelectedRepositorySelfHostedRunnersForOrg("org_1146", 1146);
  verifyPermissionSelfHostedRunnersRepositoryExists("org_1146", 1146);
  tryToAddExistingPermissionSelfHostedRunnersRepository("org_1146", 1146);
  verifyPermissionSelfHostedRunnersRepositoryExists("org_1146", 1146);
});

// Story: monitor:PermissionSelfHostedRunnersRepository:add
bthread("monitor:PermissionSelfHostedRunnersRepository:add", function () {
  while (true) {
    let ev = waitForAnyPermissionSelfHostedRunnersRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedPermissionSelfHostedRunnersRepository.apply(null, args), function () {
      verifyPermissionSelfHostedRunnersRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:Organization:read_only
bthread("crud:Organization:read_only", function () {
  let org = "org_1150";
  verifyOrganizationExists("org_1150");
});

// Story: crud:ArtifactStorageRecords:read_only
bthread("crud:ArtifactStorageRecords:read_only", function () {
  let org = "org_1170";
  let subject_digest = "subject_digest_1170";
  verifyArtifactStorageRecordsExists("org_1170", "subject_digest_1170");
});

// Story: crud:BlockedUser:nondet:1:1
bthread("crud:BlockedUser:nondet:1:1", function () {
  let org = "org_1200";
  let username = "username_1200";
  blockUser("org_1200", "username_1200");
  tryToAddExistingBlockedUser("org_1200", "username_1200");
  verifyBlockedUserExists("org_1200", "username_1200");
  unblockUser("org_1200", "username_1200");
  tryToDeleteANonExistingBlockedUser("org_1200", "username_1200");
  verifyBlockedUserDoesNotExist("org_1200", "username_1200");
});

// Story: crud:BlockedUser:nondet:1:2
bthread("crud:BlockedUser:nondet:1:2", function () {
  let org = "org_1201";
  let username = "username_1201";
  blockUser("org_1201", "username_1201");
  tryToAddExistingBlockedUser("org_1201", "username_1201");
  verifyBlockedUserExists("org_1201", "username_1201");
  unblockUser("org_1201", "username_1201");
  tryToDeleteANonExistingBlockedUser("org_1201", "username_1201");
  verifyBlockedUserDoesNotExist("org_1201", "username_1201");
});

// Story: crud:BlockedUser:nondet:negative:dup-add
bthread("crud:BlockedUser:nondet:negative:dup-add", function () {
  let org = "org_1206";
  let username = "username_1206";
  blockUser("org_1206", "username_1206");
  verifyBlockedUserExists("org_1206", "username_1206");
  tryToAddExistingBlockedUser("org_1206", "username_1206");
  verifyBlockedUserExists("org_1206", "username_1206");
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
  let org = "org_1210";
  let invitation_id = 1210;
  verifyInvitationTeamsExists("org_1210", 1210);
});

// Story: crud:IssueType:nondet:1:1
bthread("crud:IssueType:nondet:1:1", function () {
  let org = "org_1220";
  let issue_type_id = 1220;
  createIssueType("org_1220", 1220);
  tryToAddExistingIssueType("org_1220", 1220);
  verifyIssueTypeExists("org_1220", 1220);
  updateIssueType("org_1220", 1220);
  deleteIssueType("org_1220", 1220);
  tryToDeleteANonExistingIssueType("org_1220", 1220);
  verifyIssueTypeDoesNotExist("org_1220", 1220);
});

// Story: crud:IssueType:nondet:1:2
bthread("crud:IssueType:nondet:1:2", function () {
  let org = "org_1221";
  let issue_type_id = 1221;
  createIssueType("org_1221", 1221);
  tryToAddExistingIssueType("org_1221", 1221);
  updateIssueType("org_1221", 1221);
  verifyIssueTypeExists("org_1221", 1221);
  deleteIssueType("org_1221", 1221);
  tryToDeleteANonExistingIssueType("org_1221", 1221);
  verifyIssueTypeDoesNotExist("org_1221", 1221);
});

// Story: crud:IssueType:nondet:negative:dup-add
bthread("crud:IssueType:nondet:negative:dup-add", function () {
  let org = "org_1226";
  let issue_type_id = 1226;
  createIssueType("org_1226", 1226);
  verifyIssueTypeExists("org_1226", 1226);
  tryToAddExistingIssueType("org_1226", 1226);
  verifyIssueTypeExists("org_1226", 1226);
});

// Story: crud:IssueType:nondet:existing:update
bthread("crud:IssueType:nondet:existing:update", function () {
  let ev = waitForAnyIssueTypeAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueType.apply(null, args), function () {
    verifyIssueTypeExists.apply(null, args);
    updateIssueType.apply(null, args);
    verifyIssueTypeExists.apply(null, args);
  });
});

// Story: monitor:IssueType:add
bthread("monitor:IssueType:add", function () {
  while (true) {
    let ev = waitForAnyIssueTypeAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueType.apply(null, args), function () {
      verifyIssueTypeExists.apply(null, args);
    });
  }
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let org = "org_1230";
  let username = "username_1230";
  verifyMemberExists("org_1230", "username_1230");
});

// Story: crud:Membership:nondet:1:1
bthread("crud:Membership:nondet:1:1", function () {
  let org = "org_1240";
  let username = "username_1240";
  setMembershipForUser("org_1240", "username_1240");
  tryToAddExistingMembership("org_1240", "username_1240");
  verifyMembershipExists("org_1240", "username_1240");
  removeMembershipForUser("org_1240", "username_1240");
  tryToDeleteANonExistingMembership("org_1240", "username_1240");
  verifyMembershipDoesNotExist("org_1240", "username_1240");
});

// Story: crud:Membership:nondet:1:2
bthread("crud:Membership:nondet:1:2", function () {
  let org = "org_1241";
  let username = "username_1241";
  setMembershipForUser("org_1241", "username_1241");
  tryToAddExistingMembership("org_1241", "username_1241");
  verifyMembershipExists("org_1241", "username_1241");
  removeMembershipForUser("org_1241", "username_1241");
  tryToDeleteANonExistingMembership("org_1241", "username_1241");
  verifyMembershipDoesNotExist("org_1241", "username_1241");
});

// Story: crud:Membership:nondet:negative:dup-add
bthread("crud:Membership:nondet:negative:dup-add", function () {
  let org = "org_1246";
  let username = "username_1246";
  setMembershipForUser("org_1246", "username_1246");
  verifyMembershipExists("org_1246", "username_1246");
  tryToAddExistingMembership("org_1246", "username_1246");
  verifyMembershipExists("org_1246", "username_1246");
});

// Story: monitor:Membership:add
bthread("monitor:Membership:add", function () {
  while (true) {
    let ev = waitForAnyMembershipAdded();
    let args = Object.values(ev);
    block(matchDeletedMembership.apply(null, args), function () {
      verifyMembershipExists.apply(null, args);
    });
  }
});

// Story: crud:OrganizationRole:read_only
bthread("crud:OrganizationRole:read_only", function () {
  let org = "org_1250";
  let role_id = 1250;
  verifyOrganizationRoleExists("org_1250", 1250);
});

// Story: crud:OrganizationRoleTeam:nondet:1:1
bthread("crud:OrganizationRoleTeam:nondet:1:1", function () {
  let org = "org_1260";
  let team_slug = "team_slug_1260";
  let role_id = 1260;
  assignTeamToOrganizationRole("org_1260", "team_slug_1260", 1260);
  tryToAddExistingOrganizationRoleTeam("org_1260", "team_slug_1260", 1260);
  verifyOrganizationRoleTeamExists("org_1260", "team_slug_1260", 1260);
  removeTeamFromOrganizationRole("org_1260", "team_slug_1260", 1260);
  tryToDeleteANonExistingOrganizationRoleTeam("org_1260", "team_slug_1260", 1260);
  verifyOrganizationRoleTeamDoesNotExist("org_1260", "team_slug_1260", 1260);
});

// Story: crud:OrganizationRoleTeam:nondet:1:2
bthread("crud:OrganizationRoleTeam:nondet:1:2", function () {
  let org = "org_1261";
  let team_slug = "team_slug_1261";
  let role_id = 1261;
  assignTeamToOrganizationRole("org_1261", "team_slug_1261", 1261);
  tryToAddExistingOrganizationRoleTeam("org_1261", "team_slug_1261", 1261);
  verifyOrganizationRoleTeamExists("org_1261", "team_slug_1261", 1261);
  removeTeamFromOrganizationRole("org_1261", "team_slug_1261", 1261);
  tryToDeleteANonExistingOrganizationRoleTeam("org_1261", "team_slug_1261", 1261);
  verifyOrganizationRoleTeamDoesNotExist("org_1261", "team_slug_1261", 1261);
});

// Story: crud:OrganizationRoleTeam:nondet:negative:dup-add
bthread("crud:OrganizationRoleTeam:nondet:negative:dup-add", function () {
  let org = "org_1266";
  let team_slug = "team_slug_1266";
  let role_id = 1266;
  assignTeamToOrganizationRole("org_1266", "team_slug_1266", 1266);
  verifyOrganizationRoleTeamExists("org_1266", "team_slug_1266", 1266);
  tryToAddExistingOrganizationRoleTeam("org_1266", "team_slug_1266", 1266);
  verifyOrganizationRoleTeamExists("org_1266", "team_slug_1266", 1266);
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
  let org = "org_1280";
  let username = "username_1280";
  let role_id = 1280;
  assignUserToOrganizationRole("org_1280", "username_1280", 1280);
  tryToAddExistingOrganizationRoleUser("org_1280", "username_1280", 1280);
  verifyOrganizationRoleUserExists("org_1280", "username_1280", 1280);
  removeUserFromOrganizationRole("org_1280", "username_1280", 1280);
  tryToDeleteANonExistingOrganizationRoleUser("org_1280", "username_1280", 1280);
  verifyOrganizationRoleUserDoesNotExist("org_1280", "username_1280", 1280);
});

// Story: crud:OrganizationRoleUser:nondet:1:2
bthread("crud:OrganizationRoleUser:nondet:1:2", function () {
  let org = "org_1281";
  let username = "username_1281";
  let role_id = 1281;
  assignUserToOrganizationRole("org_1281", "username_1281", 1281);
  tryToAddExistingOrganizationRoleUser("org_1281", "username_1281", 1281);
  verifyOrganizationRoleUserExists("org_1281", "username_1281", 1281);
  removeUserFromOrganizationRole("org_1281", "username_1281", 1281);
  tryToDeleteANonExistingOrganizationRoleUser("org_1281", "username_1281", 1281);
  verifyOrganizationRoleUserDoesNotExist("org_1281", "username_1281", 1281);
});

// Story: crud:OrganizationRoleUser:nondet:negative:dup-add
bthread("crud:OrganizationRoleUser:nondet:negative:dup-add", function () {
  let org = "org_1286";
  let username = "username_1286";
  let role_id = 1286;
  assignUserToOrganizationRole("org_1286", "username_1286", 1286);
  verifyOrganizationRoleUserExists("org_1286", "username_1286", 1286);
  tryToAddExistingOrganizationRoleUser("org_1286", "username_1286", 1286);
  verifyOrganizationRoleUserExists("org_1286", "username_1286", 1286);
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

// Story: crud:OrganizationRoleTeamsList:read_only
bthread("crud:OrganizationRoleTeamsList:read_only", function () {
  let org = "org_1300";
  let role_id = 1300;
  verifyOrganizationRoleTeamsListExists("org_1300", 1300);
});

// Story: crud:OrganizationRoleUsersList:read_only
bthread("crud:OrganizationRoleUsersList:read_only", function () {
  let org = "org_1310";
  let role_id = 1310;
  verifyOrganizationRoleUsersListExists("org_1310", 1310);
});

// Story: crud:OutsideCollaborator:nondet:1:1
bthread("crud:OutsideCollaborator:nondet:1:1", function () {
  let org = "org_1320";
  let username = "username_1320";
  convertMemberToOutsideCollaborator("org_1320", "username_1320");
  tryToAddExistingOutsideCollaborator("org_1320", "username_1320");
  verifyOutsideCollaboratorExists("org_1320", "username_1320");
  removeOutsideCollaborator("org_1320", "username_1320");
  tryToDeleteANonExistingOutsideCollaborator("org_1320", "username_1320");
  verifyOutsideCollaboratorDoesNotExist("org_1320", "username_1320");
});

// Story: crud:OutsideCollaborator:nondet:1:2
bthread("crud:OutsideCollaborator:nondet:1:2", function () {
  let org = "org_1321";
  let username = "username_1321";
  convertMemberToOutsideCollaborator("org_1321", "username_1321");
  tryToAddExistingOutsideCollaborator("org_1321", "username_1321");
  verifyOutsideCollaboratorExists("org_1321", "username_1321");
  removeOutsideCollaborator("org_1321", "username_1321");
  tryToDeleteANonExistingOutsideCollaborator("org_1321", "username_1321");
  verifyOutsideCollaboratorDoesNotExist("org_1321", "username_1321");
});

// Story: crud:OutsideCollaborator:nondet:negative:dup-add
bthread("crud:OutsideCollaborator:nondet:negative:dup-add", function () {
  let org = "org_1326";
  let username = "username_1326";
  convertMemberToOutsideCollaborator("org_1326", "username_1326");
  verifyOutsideCollaboratorExists("org_1326", "username_1326");
  tryToAddExistingOutsideCollaborator("org_1326", "username_1326");
  verifyOutsideCollaboratorExists("org_1326", "username_1326");
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

// Story: crud:WebhookDeliveries:read_only
bthread("crud:WebhookDeliveries:read_only", function () {
  let org = "org_1330";
  let hook_id = 1330;
  verifyWebhookDeliveriesExists("org_1330", 1330);
});

// Story: crud:CustomProperty:nondet:1:1
bthread("crud:CustomProperty:nondet:1:1", function () {
  let org = "org_1340";
  let custom_property_name = "custom_property_name_1340";
  createOrUpdateCustomProperty("org_1340", "custom_property_name_1340");
  tryToAddExistingCustomProperty("org_1340", "custom_property_name_1340");
  verifyCustomPropertyExists("org_1340", "custom_property_name_1340");
  deleteCustomProperty("org_1340", "custom_property_name_1340");
  tryToDeleteANonExistingCustomProperty("org_1340", "custom_property_name_1340");
  verifyCustomPropertyDoesNotExist("org_1340", "custom_property_name_1340");
});

// Story: crud:CustomProperty:nondet:1:2
bthread("crud:CustomProperty:nondet:1:2", function () {
  let org = "org_1341";
  let custom_property_name = "custom_property_name_1341";
  createOrUpdateCustomProperty("org_1341", "custom_property_name_1341");
  tryToAddExistingCustomProperty("org_1341", "custom_property_name_1341");
  verifyCustomPropertyExists("org_1341", "custom_property_name_1341");
  deleteCustomProperty("org_1341", "custom_property_name_1341");
  tryToDeleteANonExistingCustomProperty("org_1341", "custom_property_name_1341");
  verifyCustomPropertyDoesNotExist("org_1341", "custom_property_name_1341");
});

// Story: crud:CustomProperty:nondet:negative:dup-add
bthread("crud:CustomProperty:nondet:negative:dup-add", function () {
  let org = "org_1346";
  let custom_property_name = "custom_property_name_1346";
  createOrUpdateCustomProperty("org_1346", "custom_property_name_1346");
  verifyCustomPropertyExists("org_1346", "custom_property_name_1346");
  tryToAddExistingCustomProperty("org_1346", "custom_property_name_1346");
  verifyCustomPropertyExists("org_1346", "custom_property_name_1346");
});

// Story: monitor:CustomProperty:add
bthread("monitor:CustomProperty:add", function () {
  while (true) {
    let ev = waitForAnyCustomPropertyAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomProperty.apply(null, args), function () {
      verifyCustomPropertyExists.apply(null, args);
    });
  }
});

// Story: crud:CustomPropertySchema:read_only
bthread("crud:CustomPropertySchema:read_only", function () {
  let org = "org_1350";
  verifyCustomPropertySchemaExists("org_1350");
});

// Story: crud:CustomPropertyValue:read_only
bthread("crud:CustomPropertyValue:read_only", function () {
  let org = "org_1360";
  verifyCustomPropertyValueExists("org_1360");
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = "org_1370";
  let username = "username_1370";
  setPublicMembershipForUser("org_1370", "username_1370");
  tryToAddExistingPublicMember("org_1370", "username_1370");
  verifyPublicMemberExists("org_1370", "username_1370");
  removePublicMembershipForUser("org_1370", "username_1370");
  tryToDeleteANonExistingPublicMember("org_1370", "username_1370");
  verifyPublicMemberDoesNotExist("org_1370", "username_1370");
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = "org_1371";
  let username = "username_1371";
  setPublicMembershipForUser("org_1371", "username_1371");
  tryToAddExistingPublicMember("org_1371", "username_1371");
  verifyPublicMemberExists("org_1371", "username_1371");
  removePublicMembershipForUser("org_1371", "username_1371");
  tryToDeleteANonExistingPublicMember("org_1371", "username_1371");
  verifyPublicMemberDoesNotExist("org_1371", "username_1371");
});

// Story: crud:PublicMember:nondet:negative:dup-add
bthread("crud:PublicMember:nondet:negative:dup-add", function () {
  let org = "org_1376";
  let username = "username_1376";
  setPublicMembershipForUser("org_1376", "username_1376");
  verifyPublicMemberExists("org_1376", "username_1376");
  tryToAddExistingPublicMember("org_1376", "username_1376");
  verifyPublicMemberExists("org_1376", "username_1376");
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

// Story: crud:SecurityManagerTeam:nondet:1:1
bthread("crud:SecurityManagerTeam:nondet:1:1", function () {
  let org = "org_1380";
  let team_slug = "team_slug_1380";
  addSecurityManagerTeam("org_1380", "team_slug_1380");
  tryToAddExistingSecurityManagerTeam("org_1380", "team_slug_1380");
  verifySecurityManagerTeamExists("org_1380", "team_slug_1380");
  removeSecurityManagerTeam("org_1380", "team_slug_1380");
  tryToDeleteANonExistingSecurityManagerTeam("org_1380", "team_slug_1380");
  verifySecurityManagerTeamDoesNotExist("org_1380", "team_slug_1380");
});

// Story: crud:SecurityManagerTeam:nondet:1:2
bthread("crud:SecurityManagerTeam:nondet:1:2", function () {
  let org = "org_1381";
  let team_slug = "team_slug_1381";
  addSecurityManagerTeam("org_1381", "team_slug_1381");
  tryToAddExistingSecurityManagerTeam("org_1381", "team_slug_1381");
  verifySecurityManagerTeamExists("org_1381", "team_slug_1381");
  removeSecurityManagerTeam("org_1381", "team_slug_1381");
  tryToDeleteANonExistingSecurityManagerTeam("org_1381", "team_slug_1381");
  verifySecurityManagerTeamDoesNotExist("org_1381", "team_slug_1381");
});

// Story: crud:SecurityManagerTeam:nondet:negative:dup-add
bthread("crud:SecurityManagerTeam:nondet:negative:dup-add", function () {
  let org = "org_1386";
  let team_slug = "team_slug_1386";
  addSecurityManagerTeam("org_1386", "team_slug_1386");
  verifySecurityManagerTeamExists("org_1386", "team_slug_1386");
  tryToAddExistingSecurityManagerTeam("org_1386", "team_slug_1386");
  verifySecurityManagerTeamExists("org_1386", "team_slug_1386");
});

// Story: monitor:SecurityManagerTeam:add
bthread("monitor:SecurityManagerTeam:add", function () {
  while (true) {
    let ev = waitForAnySecurityManagerTeamAdded();
    let args = Object.values(ev);
    block(matchDeletedSecurityManagerTeam.apply(null, args), function () {
      verifySecurityManagerTeamExists.apply(null, args);
    });
  }
});

// Story: crud:ImmutableReleaseSetting:read_only
bthread("crud:ImmutableReleaseSetting:read_only", function () {
  let org = "org_1390";
  verifyImmutableReleaseSettingExists("org_1390");
});

// Story: crud:ImmutableReleaseRepository:nondet:1:1
bthread("crud:ImmutableReleaseRepository:nondet:1:1", function () {
  let org = "org_1400";
  let repository_id = 1400;
  enableSelectedRepositoryImmutableReleases("org_1400", 1400);
  tryToAddExistingImmutableReleaseRepository("org_1400", 1400);
  verifyImmutableReleaseRepositoryExists("org_1400", 1400);
  disableSelectedRepositoryImmutableReleases("org_1400", 1400);
  tryToDeleteANonExistingImmutableReleaseRepository("org_1400", 1400);
  verifyImmutableReleaseRepositoryDoesNotExist("org_1400", 1400);
});

// Story: crud:ImmutableReleaseRepository:nondet:1:2
bthread("crud:ImmutableReleaseRepository:nondet:1:2", function () {
  let org = "org_1401";
  let repository_id = 1401;
  enableSelectedRepositoryImmutableReleases("org_1401", 1401);
  tryToAddExistingImmutableReleaseRepository("org_1401", 1401);
  verifyImmutableReleaseRepositoryExists("org_1401", 1401);
  disableSelectedRepositoryImmutableReleases("org_1401", 1401);
  tryToDeleteANonExistingImmutableReleaseRepository("org_1401", 1401);
  verifyImmutableReleaseRepositoryDoesNotExist("org_1401", 1401);
});

// Story: crud:ImmutableReleaseRepository:nondet:negative:dup-add
bthread("crud:ImmutableReleaseRepository:nondet:negative:dup-add", function () {
  let org = "org_1406";
  let repository_id = 1406;
  enableSelectedRepositoryImmutableReleases("org_1406", 1406);
  verifyImmutableReleaseRepositoryExists("org_1406", 1406);
  tryToAddExistingImmutableReleaseRepository("org_1406", 1406);
  verifyImmutableReleaseRepositoryExists("org_1406", 1406);
});

// Story: monitor:ImmutableReleaseRepository:add
bthread("monitor:ImmutableReleaseRepository:add", function () {
  while (true) {
    let ev = waitForAnyImmutableReleaseRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedImmutableReleaseRepository.apply(null, args), function () {
      verifyImmutableReleaseRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:ImmutableReleaseRepositories:read_only
bthread("crud:ImmutableReleaseRepositories:read_only", function () {
  let org = "org_1410";
  verifyImmutableReleaseRepositoriesExists("org_1410");
});

// Story: crud:Codespace:read_only
bthread("crud:Codespace:read_only", function () {
  let codespace_name = "codespace_name_1470";
  let export_id = 1470;
  verifyCodespaceExists("codespace_name_1470", 1470);
});

// Story: crud:CodespaceSecretOrg:read_only
bthread("crud:CodespaceSecretOrg:read_only", function () {
  let org = "org_1520";
  let secret_name = "secret_name_1520";
  let repository_id = 1520;
  verifyCodespaceSecretOrgExists("org_1520", "secret_name_1520", 1520);
});

// Story: crud:CodespaceSecretRepo:read_only
bthread("crud:CodespaceSecretRepo:read_only", function () {
  let owner = "owner_1530";
  let repo = "repo_1530";
  let secret_name = "secret_name_1530";
  verifyCodespaceSecretRepoExists("owner_1530", "repo_1530", "secret_name_1530");
});

// Story: crud:CodespaceSecretUser:read_only
bthread("crud:CodespaceSecretUser:read_only", function () {
  let secret_name = "secret_name_1540";
  let repository_id = 1540;
  verifyCodespaceSecretUserExists("secret_name_1540", 1540);
});

// Story: crud:User:read_only
bthread("crud:User:read_only", function () {
  let username = "username_1560";
  verifyUserExists("username_1560");
});

// Story: crud:AuthenticatedUser:read_only
bthread("crud:AuthenticatedUser:read_only", function () {

  verifyAuthenticatedUserExists();
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = "username_1580";
  blockUser("username_1580");
  tryToAddExistingUserBlock("username_1580");
  verifyUserBlockExists("username_1580");
  unblockUser("username_1580");
  tryToDeleteANonExistingUserBlock("username_1580");
  verifyUserBlockDoesNotExist("username_1580");
});

// Story: crud:UserBlock:nondet:1:2
bthread("crud:UserBlock:nondet:1:2", function () {
  let username = "username_1581";
  blockUser("username_1581");
  tryToAddExistingUserBlock("username_1581");
  verifyUserBlockExists("username_1581");
  unblockUser("username_1581");
  tryToDeleteANonExistingUserBlock("username_1581");
  verifyUserBlockDoesNotExist("username_1581");
});

// Story: crud:UserBlock:nondet:negative:dup-add
bthread("crud:UserBlock:nondet:negative:dup-add", function () {
  let username = "username_1586";
  blockUser("username_1586");
  verifyUserBlockExists("username_1586");
  tryToAddExistingUserBlock("username_1586");
  verifyUserBlockExists("username_1586");
});

// Story: monitor:UserBlock:add
bthread("monitor:UserBlock:add", function () {
  while (true) {
    let ev = waitForAnyUserBlockAdded();
    let args = Object.values(ev);
    block(matchDeletedUserBlock.apply(null, args), function () {
      verifyUserBlockExists.apply(null, args);
    });
  }
});

// Story: crud:UserEmail:nondet:1:1
bthread("crud:UserEmail:nondet:1:1", function () {

  addEmails();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  deleteEmails();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:1:2
bthread("crud:UserEmail:nondet:1:2", function () {

  addEmails();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  deleteEmails();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:negative:dup-add
bthread("crud:UserEmail:nondet:negative:dup-add", function () {

  addEmails();
  verifyUserEmailExists();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
});

// Story: monitor:UserEmail:add
bthread("monitor:UserEmail:add", function () {
  while (true) {
    let ev = waitForAnyUserEmailAdded();
    let args = Object.values(ev);
    block(matchDeletedUserEmail.apply(null, args), function () {
      verifyUserEmailExists.apply(null, args);
    });
  }
});

// Story: crud:UserFollowing:nondet:1:1
bthread("crud:UserFollowing:nondet:1:1", function () {
  let username = "username_1620";
  let target_user = "target_user_1620";
  followUser("username_1620", "target_user_1620");
  tryToAddExistingUserFollowing("username_1620", "target_user_1620");
  verifyUserFollowingExists("username_1620", "target_user_1620");
  unfollowUser("username_1620", "target_user_1620");
  tryToDeleteANonExistingUserFollowing("username_1620", "target_user_1620");
  verifyUserFollowingDoesNotExist("username_1620", "target_user_1620");
});

// Story: crud:UserFollowing:nondet:1:2
bthread("crud:UserFollowing:nondet:1:2", function () {
  let username = "username_1621";
  let target_user = "target_user_1621";
  followUser("username_1621", "target_user_1621");
  tryToAddExistingUserFollowing("username_1621", "target_user_1621");
  verifyUserFollowingExists("username_1621", "target_user_1621");
  unfollowUser("username_1621", "target_user_1621");
  tryToDeleteANonExistingUserFollowing("username_1621", "target_user_1621");
  verifyUserFollowingDoesNotExist("username_1621", "target_user_1621");
});

// Story: crud:UserFollowing:nondet:negative:dup-add
bthread("crud:UserFollowing:nondet:negative:dup-add", function () {
  let username = "username_1626";
  let target_user = "target_user_1626";
  followUser("username_1626", "target_user_1626");
  verifyUserFollowingExists("username_1626", "target_user_1626");
  tryToAddExistingUserFollowing("username_1626", "target_user_1626");
  verifyUserFollowingExists("username_1626", "target_user_1626");
});

// Story: monitor:UserFollowing:add
bthread("monitor:UserFollowing:add", function () {
  while (true) {
    let ev = waitForAnyUserFollowingAdded();
    let args = Object.values(ev);
    block(matchDeletedUserFollowing.apply(null, args), function () {
      verifyUserFollowingExists.apply(null, args);
    });
  }
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

// Story: crud:InstallationRequest:read_only
bthread("crud:InstallationRequest:read_only", function () {

  verifyInstallationRequestExists();
});

// Story: crud:Installation:nondet:1:1
bthread("crud:Installation:nondet:1:1", function () {
  let installation_id = 1750;
  createInstallationAccessToken(1750);
  tryToAddExistingInstallation(1750);
  verifyInstallationExists(1750);
  suspendInstallation(1750);
  deleteInstallation(1750);
  tryToDeleteANonExistingInstallation(1750);
  verifyInstallationDoesNotExist(1750);
});

// Story: crud:Installation:nondet:1:2
bthread("crud:Installation:nondet:1:2", function () {
  let installation_id = 1751;
  createInstallationAccessToken(1751);
  tryToAddExistingInstallation(1751);
  suspendInstallation(1751);
  verifyInstallationExists(1751);
  deleteInstallation(1751);
  tryToDeleteANonExistingInstallation(1751);
  verifyInstallationDoesNotExist(1751);
});

// Story: crud:Installation:nondet:negative:dup-add
bthread("crud:Installation:nondet:negative:dup-add", function () {
  let installation_id = 1756;
  createInstallationAccessToken(1756);
  verifyInstallationExists(1756);
  tryToAddExistingInstallation(1756);
  verifyInstallationExists(1756);
});

// Story: crud:Installation:nondet:existing:update
bthread("crud:Installation:nondet:existing:update", function () {
  let ev = waitForAnyInstallationAdded();
  let args = Object.values(ev);
  block(matchDeletedInstallation.apply(null, args), function () {
    verifyInstallationExists.apply(null, args);
    suspendInstallation.apply(null, args);
    verifyInstallationExists.apply(null, args);
  });
});

// Story: monitor:Installation:add
bthread("monitor:Installation:add", function () {
  while (true) {
    let ev = waitForAnyInstallationAdded();
    let args = Object.values(ev);
    block(matchDeletedInstallation.apply(null, args), function () {
      verifyInstallationExists.apply(null, args);
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

// Story: crud:AppSlug:read_only
bthread("crud:AppSlug:read_only", function () {
  let app_slug = "app_slug_1790";
  verifyAppSlugExists("app_slug_1790");
});

// Story: crud:InstallationRepo:nondet:1:1
bthread("crud:InstallationRepo:nondet:1:1", function () {
  let installation_id = 1800;
  let repository_id = 1800;
  addRepoToInstallationForAuthenticatedUser(1800, 1800);
  tryToAddExistingInstallationRepo(1800, 1800);
  verifyInstallationRepoExists(1800, 1800);
  removeRepoFromInstallationForAuthenticatedUser(1800, 1800);
  tryToDeleteANonExistingInstallationRepo(1800, 1800);
  verifyInstallationRepoDoesNotExist(1800, 1800);
});

// Story: crud:InstallationRepo:nondet:1:2
bthread("crud:InstallationRepo:nondet:1:2", function () {
  let installation_id = 1801;
  let repository_id = 1801;
  addRepoToInstallationForAuthenticatedUser(1801, 1801);
  tryToAddExistingInstallationRepo(1801, 1801);
  verifyInstallationRepoExists(1801, 1801);
  removeRepoFromInstallationForAuthenticatedUser(1801, 1801);
  tryToDeleteANonExistingInstallationRepo(1801, 1801);
  verifyInstallationRepoDoesNotExist(1801, 1801);
});

// Story: crud:InstallationRepo:nondet:negative:dup-add
bthread("crud:InstallationRepo:nondet:negative:dup-add", function () {
  let installation_id = 1806;
  let repository_id = 1806;
  addRepoToInstallationForAuthenticatedUser(1806, 1806);
  verifyInstallationRepoExists(1806, 1806);
  tryToAddExistingInstallationRepo(1806, 1806);
  verifyInstallationRepoExists(1806, 1806);
});

// Story: monitor:InstallationRepo:add
bthread("monitor:InstallationRepo:add", function () {
  while (true) {
    let ev = waitForAnyInstallationRepoAdded();
    let args = Object.values(ev);
    block(matchDeletedInstallationRepo.apply(null, args), function () {
      verifyInstallationRepoExists.apply(null, args);
    });
  }
});

// Story: crud:OrgInstallation:read_only
bthread("crud:OrgInstallation:read_only", function () {
  let org = "org_1810";
  verifyOrgInstallationExists("org_1810");
});

// Story: crud:RepoInstallation:read_only
bthread("crud:RepoInstallation:read_only", function () {
  let owner = "owner_1820";
  let repo = "repo_1820";
  verifyRepoInstallationExists("owner_1820", "repo_1820");
});

// Story: crud:UserInstallation:read_only
bthread("crud:UserInstallation:read_only", function () {
  let username = "username_1830";
  verifyUserInstallationExists("username_1830");
});

// Story: crud:Issue:read_only
bthread("crud:Issue:read_only", function () {
  let owner = "owner_1840";
  let repo = "repo_1840";
  let title = "title_1840";
  let body = "body_1840";
  let assignee = "assignee_1840";
  let milestone = "milestone_1840";
  let labels = "labels_1840";
  let assignees = "assignees_1840";
  let type = "type_1840";
  let issue_number = "issue_number_1840";
  let state = "state_1840";
  let state_reason = "state_reason_1840";
  verifyIssueExists("owner_1840", "repo_1840", "title_1840", "body_1840", "assignee_1840", "milestone_1840", "labels_1840", "assignees_1840", "type_1840", "issue_number_1840", "state_1840", "state_reason_1840");
});

// Story: crud:IssueComment:nondet:1:1
bthread("crud:IssueComment:nondet:1:1", function () {
  let owner = "owner_1850";
  let repo = "repo_1850";
  let issue_number = "issue_number_1850";
  let body = "body_1850";
  let comment_id = 1850;
  createIssueComment("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
  tryToAddExistingIssueComment("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
  verifyIssueCommentExists("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
  updateIssueComment("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
  deleteIssueComment("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
  tryToDeleteANonExistingIssueComment("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
  verifyIssueCommentDoesNotExist("owner_1850", "repo_1850", "issue_number_1850", "body_1850", 1850);
});

// Story: crud:IssueComment:nondet:1:2
bthread("crud:IssueComment:nondet:1:2", function () {
  let owner = "owner_1851";
  let repo = "repo_1851";
  let issue_number = "issue_number_1851";
  let body = "body_1851";
  let comment_id = 1851;
  createIssueComment("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
  tryToAddExistingIssueComment("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
  updateIssueComment("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
  verifyIssueCommentExists("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
  deleteIssueComment("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
  tryToDeleteANonExistingIssueComment("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
  verifyIssueCommentDoesNotExist("owner_1851", "repo_1851", "issue_number_1851", "body_1851", 1851);
});

// Story: crud:IssueComment:nondet:negative:dup-add
bthread("crud:IssueComment:nondet:negative:dup-add", function () {
  let owner = "owner_1856";
  let repo = "repo_1856";
  let issue_number = "issue_number_1856";
  let body = "body_1856";
  let comment_id = 1856;
  createIssueComment("owner_1856", "repo_1856", "issue_number_1856", "body_1856", 1856);
  verifyIssueCommentExists("owner_1856", "repo_1856", "issue_number_1856", "body_1856", 1856);
  tryToAddExistingIssueComment("owner_1856", "repo_1856", "issue_number_1856", "body_1856", 1856);
  verifyIssueCommentExists("owner_1856", "repo_1856", "issue_number_1856", "body_1856", 1856);
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
  let owner = "owner_1860";
  let repo = "repo_1860";
  let assignee = "assignee_1860";
  verifyAssigneeExists("owner_1860", "repo_1860", "assignee_1860");
});

// Story: crud:IssueAssignee:nondet:1:1
bthread("crud:IssueAssignee:nondet:1:1", function () {
  let owner = "owner_1870";
  let repo = "repo_1870";
  let issue_number = "issue_number_1870";
  let assignees = "assignees_1870";
  addAssigneesToIssue("owner_1870", "repo_1870", "issue_number_1870", "assignees_1870");
  tryToAddExistingIssueAssignee("owner_1870", "repo_1870", "issue_number_1870", "assignees_1870");
  verifyIssueAssigneeExists("owner_1870", "repo_1870", "issue_number_1870", "assignees_1870");
  removeAssigneesFromIssue("owner_1870", "repo_1870", "issue_number_1870", "assignees_1870");
  tryToDeleteANonExistingIssueAssignee("owner_1870", "repo_1870", "issue_number_1870", "assignees_1870");
  verifyIssueAssigneeDoesNotExist("owner_1870", "repo_1870", "issue_number_1870", "assignees_1870");
});

// Story: crud:IssueAssignee:nondet:1:2
bthread("crud:IssueAssignee:nondet:1:2", function () {
  let owner = "owner_1871";
  let repo = "repo_1871";
  let issue_number = "issue_number_1871";
  let assignees = "assignees_1871";
  addAssigneesToIssue("owner_1871", "repo_1871", "issue_number_1871", "assignees_1871");
  tryToAddExistingIssueAssignee("owner_1871", "repo_1871", "issue_number_1871", "assignees_1871");
  verifyIssueAssigneeExists("owner_1871", "repo_1871", "issue_number_1871", "assignees_1871");
  removeAssigneesFromIssue("owner_1871", "repo_1871", "issue_number_1871", "assignees_1871");
  tryToDeleteANonExistingIssueAssignee("owner_1871", "repo_1871", "issue_number_1871", "assignees_1871");
  verifyIssueAssigneeDoesNotExist("owner_1871", "repo_1871", "issue_number_1871", "assignees_1871");
});

// Story: crud:IssueAssignee:nondet:negative:dup-add
bthread("crud:IssueAssignee:nondet:negative:dup-add", function () {
  let owner = "owner_1876";
  let repo = "repo_1876";
  let issue_number = "issue_number_1876";
  let assignees = "assignees_1876";
  addAssigneesToIssue("owner_1876", "repo_1876", "issue_number_1876", "assignees_1876");
  verifyIssueAssigneeExists("owner_1876", "repo_1876", "issue_number_1876", "assignees_1876");
  tryToAddExistingIssueAssignee("owner_1876", "repo_1876", "issue_number_1876", "assignees_1876");
  verifyIssueAssigneeExists("owner_1876", "repo_1876", "issue_number_1876", "assignees_1876");
});

// Story: monitor:IssueAssignee:add
bthread("monitor:IssueAssignee:add", function () {
  while (true) {
    let ev = waitForAnyIssueAssigneeAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueAssignee.apply(null, args), function () {
      verifyIssueAssigneeExists.apply(null, args);
    });
  }
});

// Story: crud:IssueAssigneeCheck:read_only
bthread("crud:IssueAssigneeCheck:read_only", function () {
  let owner = "owner_1880";
  let repo = "repo_1880";
  let issue_number = "issue_number_1880";
  let assignee = "assignee_1880";
  verifyIssueAssigneeCheckExists("owner_1880", "repo_1880", "issue_number_1880", "assignee_1880");
});

// Story: crud:IssueLabel:nondet:1:1
bthread("crud:IssueLabel:nondet:1:1", function () {
  let owner = "owner_1890";
  let repo = "repo_1890";
  let issue_number = "issue_number_1890";
  let labels = "labels_1890";
  let name = "name_1890";
  addLabelsToIssue("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
  tryToAddExistingIssueLabel("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
  verifyIssueLabelExists("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
  setLabelsForIssue("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
  removeAllLabelsFromIssue("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
  tryToDeleteANonExistingIssueLabel("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
  verifyIssueLabelDoesNotExist("owner_1890", "repo_1890", "issue_number_1890", "labels_1890", "name_1890");
});

// Story: crud:IssueLabel:nondet:1:2
bthread("crud:IssueLabel:nondet:1:2", function () {
  let owner = "owner_1891";
  let repo = "repo_1891";
  let issue_number = "issue_number_1891";
  let labels = "labels_1891";
  let name = "name_1891";
  addLabelsToIssue("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
  tryToAddExistingIssueLabel("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
  setLabelsForIssue("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
  verifyIssueLabelExists("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
  removeAllLabelsFromIssue("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
  tryToDeleteANonExistingIssueLabel("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
  verifyIssueLabelDoesNotExist("owner_1891", "repo_1891", "issue_number_1891", "labels_1891", "name_1891");
});

// Story: crud:IssueLabel:nondet:negative:dup-add
bthread("crud:IssueLabel:nondet:negative:dup-add", function () {
  let owner = "owner_1896";
  let repo = "repo_1896";
  let issue_number = "issue_number_1896";
  let labels = "labels_1896";
  let name = "name_1896";
  addLabelsToIssue("owner_1896", "repo_1896", "issue_number_1896", "labels_1896", "name_1896");
  verifyIssueLabelExists("owner_1896", "repo_1896", "issue_number_1896", "labels_1896", "name_1896");
  tryToAddExistingIssueLabel("owner_1896", "repo_1896", "issue_number_1896", "labels_1896", "name_1896");
  verifyIssueLabelExists("owner_1896", "repo_1896", "issue_number_1896", "labels_1896", "name_1896");
});

// Story: crud:IssueLabel:nondet:existing:update
bthread("crud:IssueLabel:nondet:existing:update", function () {
  let ev = waitForAnyIssueLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueLabel.apply(null, args), function () {
    verifyIssueLabelExists.apply(null, args);
    setLabelsForIssue.apply(null, args);
    verifyIssueLabelExists.apply(null, args);
  });
});

// Story: monitor:IssueLabel:add
bthread("monitor:IssueLabel:add", function () {
  while (true) {
    let ev = waitForAnyIssueLabelAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueLabel.apply(null, args), function () {
      verifyIssueLabelExists.apply(null, args);
    });
  }
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let owner = "owner_1900";
  let repo = "repo_1900";
  let name = "name_1900";
  let color = "color_1900";
  let description = "description_1900";
  let new_name = "new_name_1900";
  createLabel("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
  tryToAddExistingLabel("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
  verifyLabelExists("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
  updateLabel("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
  deleteLabel("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
  tryToDeleteANonExistingLabel("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
  verifyLabelDoesNotExist("owner_1900", "repo_1900", "name_1900", "color_1900", "description_1900", "new_name_1900");
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let owner = "owner_1901";
  let repo = "repo_1901";
  let name = "name_1901";
  let color = "color_1901";
  let description = "description_1901";
  let new_name = "new_name_1901";
  createLabel("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
  tryToAddExistingLabel("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
  updateLabel("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
  verifyLabelExists("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
  deleteLabel("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
  tryToDeleteANonExistingLabel("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
  verifyLabelDoesNotExist("owner_1901", "repo_1901", "name_1901", "color_1901", "description_1901", "new_name_1901");
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let owner = "owner_1906";
  let repo = "repo_1906";
  let name = "name_1906";
  let color = "color_1906";
  let description = "description_1906";
  let new_name = "new_name_1906";
  createLabel("owner_1906", "repo_1906", "name_1906", "color_1906", "description_1906", "new_name_1906");
  verifyLabelExists("owner_1906", "repo_1906", "name_1906", "color_1906", "description_1906", "new_name_1906");
  tryToAddExistingLabel("owner_1906", "repo_1906", "name_1906", "color_1906", "description_1906", "new_name_1906");
  verifyLabelExists("owner_1906", "repo_1906", "name_1906", "color_1906", "description_1906", "new_name_1906");
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
  let owner = "owner_1910";
  let repo = "repo_1910";
  let title = "title_1910";
  let state = "state_1910";
  let description = "description_1910";
  let due_on = "due_on_1910";
  let milestone_number = "milestone_number_1910";
  createMilestone("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
  tryToAddExistingMilestone("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
  verifyMilestoneExists("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
  updateMilestone("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
  deleteMilestone("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
  tryToDeleteANonExistingMilestone("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
  verifyMilestoneDoesNotExist("owner_1910", "repo_1910", "title_1910", "state_1910", "description_1910", "due_on_1910", "milestone_number_1910");
});

// Story: crud:Milestone:nondet:1:2
bthread("crud:Milestone:nondet:1:2", function () {
  let owner = "owner_1911";
  let repo = "repo_1911";
  let title = "title_1911";
  let state = "state_1911";
  let description = "description_1911";
  let due_on = "due_on_1911";
  let milestone_number = "milestone_number_1911";
  createMilestone("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
  tryToAddExistingMilestone("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
  updateMilestone("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
  verifyMilestoneExists("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
  deleteMilestone("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
  tryToDeleteANonExistingMilestone("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
  verifyMilestoneDoesNotExist("owner_1911", "repo_1911", "title_1911", "state_1911", "description_1911", "due_on_1911", "milestone_number_1911");
});

// Story: crud:Milestone:nondet:negative:dup-add
bthread("crud:Milestone:nondet:negative:dup-add", function () {
  let owner = "owner_1916";
  let repo = "repo_1916";
  let title = "title_1916";
  let state = "state_1916";
  let description = "description_1916";
  let due_on = "due_on_1916";
  let milestone_number = "milestone_number_1916";
  createMilestone("owner_1916", "repo_1916", "title_1916", "state_1916", "description_1916", "due_on_1916", "milestone_number_1916");
  verifyMilestoneExists("owner_1916", "repo_1916", "title_1916", "state_1916", "description_1916", "due_on_1916", "milestone_number_1916");
  tryToAddExistingMilestone("owner_1916", "repo_1916", "title_1916", "state_1916", "description_1916", "due_on_1916", "milestone_number_1916");
  verifyMilestoneExists("owner_1916", "repo_1916", "title_1916", "state_1916", "description_1916", "due_on_1916", "milestone_number_1916");
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

// Story: crud:IssueDependencyBlockedBy:nondet:1:1
bthread("crud:IssueDependencyBlockedBy:nondet:1:1", function () {
  let owner = "owner_1920";
  let repo = "repo_1920";
  let issue_number = "issue_number_1920";
  let issue_id = 1920;
  addBlockedByDependency("owner_1920", "repo_1920", "issue_number_1920", 1920);
  tryToAddExistingIssueDependencyBlockedBy("owner_1920", "repo_1920", "issue_number_1920", 1920);
  verifyIssueDependencyBlockedByExists("owner_1920", "repo_1920", "issue_number_1920", 1920);
  removeBlockedByDependency("owner_1920", "repo_1920", "issue_number_1920", 1920);
  tryToDeleteANonExistingIssueDependencyBlockedBy("owner_1920", "repo_1920", "issue_number_1920", 1920);
  verifyIssueDependencyBlockedByDoesNotExist("owner_1920", "repo_1920", "issue_number_1920", 1920);
});

// Story: crud:IssueDependencyBlockedBy:nondet:1:2
bthread("crud:IssueDependencyBlockedBy:nondet:1:2", function () {
  let owner = "owner_1921";
  let repo = "repo_1921";
  let issue_number = "issue_number_1921";
  let issue_id = 1921;
  addBlockedByDependency("owner_1921", "repo_1921", "issue_number_1921", 1921);
  tryToAddExistingIssueDependencyBlockedBy("owner_1921", "repo_1921", "issue_number_1921", 1921);
  verifyIssueDependencyBlockedByExists("owner_1921", "repo_1921", "issue_number_1921", 1921);
  removeBlockedByDependency("owner_1921", "repo_1921", "issue_number_1921", 1921);
  tryToDeleteANonExistingIssueDependencyBlockedBy("owner_1921", "repo_1921", "issue_number_1921", 1921);
  verifyIssueDependencyBlockedByDoesNotExist("owner_1921", "repo_1921", "issue_number_1921", 1921);
});

// Story: crud:IssueDependencyBlockedBy:nondet:negative:dup-add
bthread("crud:IssueDependencyBlockedBy:nondet:negative:dup-add", function () {
  let owner = "owner_1926";
  let repo = "repo_1926";
  let issue_number = "issue_number_1926";
  let issue_id = 1926;
  addBlockedByDependency("owner_1926", "repo_1926", "issue_number_1926", 1926);
  verifyIssueDependencyBlockedByExists("owner_1926", "repo_1926", "issue_number_1926", 1926);
  tryToAddExistingIssueDependencyBlockedBy("owner_1926", "repo_1926", "issue_number_1926", 1926);
  verifyIssueDependencyBlockedByExists("owner_1926", "repo_1926", "issue_number_1926", 1926);
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
  let owner = "owner_1930";
  let repo = "repo_1930";
  let issue_number = "issue_number_1930";
  verifyIssueDependencyBlockingExists("owner_1930", "repo_1930", "issue_number_1930");
});

// Story: crud:SubIssue:nondet:1:1
bthread("crud:SubIssue:nondet:1:1", function () {
  let owner = "owner_1940";
  let repo = "repo_1940";
  let issue_number = "issue_number_1940";
  let sub_issue_id = 1940;
  let replace_parent = "replace_parent_1940";
  let after_id = 1940;
  let before_id = 1940;
  addSubIssue("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
  tryToAddExistingSubIssue("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
  verifySubIssueExists("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
  reprioritizeSubIssue("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
  removeSubIssue("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
  tryToDeleteANonExistingSubIssue("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
  verifySubIssueDoesNotExist("owner_1940", "repo_1940", "issue_number_1940", 1940, "replace_parent_1940", 1940, 1940);
});

// Story: crud:SubIssue:nondet:1:2
bthread("crud:SubIssue:nondet:1:2", function () {
  let owner = "owner_1941";
  let repo = "repo_1941";
  let issue_number = "issue_number_1941";
  let sub_issue_id = 1941;
  let replace_parent = "replace_parent_1941";
  let after_id = 1941;
  let before_id = 1941;
  addSubIssue("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
  tryToAddExistingSubIssue("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
  reprioritizeSubIssue("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
  verifySubIssueExists("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
  removeSubIssue("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
  tryToDeleteANonExistingSubIssue("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
  verifySubIssueDoesNotExist("owner_1941", "repo_1941", "issue_number_1941", 1941, "replace_parent_1941", 1941, 1941);
});

// Story: crud:SubIssue:nondet:negative:dup-add
bthread("crud:SubIssue:nondet:negative:dup-add", function () {
  let owner = "owner_1946";
  let repo = "repo_1946";
  let issue_number = "issue_number_1946";
  let sub_issue_id = 1946;
  let replace_parent = "replace_parent_1946";
  let after_id = 1946;
  let before_id = 1946;
  addSubIssue("owner_1946", "repo_1946", "issue_number_1946", 1946, "replace_parent_1946", 1946, 1946);
  verifySubIssueExists("owner_1946", "repo_1946", "issue_number_1946", 1946, "replace_parent_1946", 1946, 1946);
  tryToAddExistingSubIssue("owner_1946", "repo_1946", "issue_number_1946", 1946, "replace_parent_1946", 1946, 1946);
  verifySubIssueExists("owner_1946", "repo_1946", "issue_number_1946", 1946, "replace_parent_1946", 1946, 1946);
});

// Story: crud:SubIssue:nondet:existing:update
bthread("crud:SubIssue:nondet:existing:update", function () {
  let ev = waitForAnySubIssueAdded();
  let args = Object.values(ev);
  block(matchDeletedSubIssue.apply(null, args), function () {
    verifySubIssueExists.apply(null, args);
    reprioritizeSubIssue.apply(null, args);
    verifySubIssueExists.apply(null, args);
  });
});

// Story: monitor:SubIssue:add
bthread("monitor:SubIssue:add", function () {
  while (true) {
    let ev = waitForAnySubIssueAdded();
    let args = Object.values(ev);
    block(matchDeletedSubIssue.apply(null, args), function () {
      verifySubIssueExists.apply(null, args);
    });
  }
});

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let org = "org_1960";
  let name = "name_1960";
  let team_slug = "team_slug_1960";
  createTeam("org_1960", "name_1960", "team_slug_1960");
  tryToAddExistingTeam("org_1960", "name_1960", "team_slug_1960");
  verifyTeamExists("org_1960", "name_1960", "team_slug_1960");
  updateTeam("org_1960", "name_1960", "team_slug_1960");
  deleteTeam("org_1960", "name_1960", "team_slug_1960");
  tryToDeleteANonExistingTeam("org_1960", "name_1960", "team_slug_1960");
  verifyTeamDoesNotExist("org_1960", "name_1960", "team_slug_1960");
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let org = "org_1961";
  let name = "name_1961";
  let team_slug = "team_slug_1961";
  createTeam("org_1961", "name_1961", "team_slug_1961");
  tryToAddExistingTeam("org_1961", "name_1961", "team_slug_1961");
  updateTeam("org_1961", "name_1961", "team_slug_1961");
  verifyTeamExists("org_1961", "name_1961", "team_slug_1961");
  deleteTeam("org_1961", "name_1961", "team_slug_1961");
  tryToDeleteANonExistingTeam("org_1961", "name_1961", "team_slug_1961");
  verifyTeamDoesNotExist("org_1961", "name_1961", "team_slug_1961");
});

// Story: crud:Team:nondet:negative:dup-add
bthread("crud:Team:nondet:negative:dup-add", function () {
  let org = "org_1966";
  let name = "name_1966";
  let team_slug = "team_slug_1966";
  createTeam("org_1966", "name_1966", "team_slug_1966");
  verifyTeamExists("org_1966", "name_1966", "team_slug_1966");
  tryToAddExistingTeam("org_1966", "name_1966", "team_slug_1966");
  verifyTeamExists("org_1966", "name_1966", "team_slug_1966");
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
  let org = "org_1970";
  let team_slug = "team_slug_1970";
  let title = "title_1970";
  let body = "body_1970";
  let private = "private_1970";
  let discussion_number = "discussion_number_1970";
  createDiscussion("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
  tryToAddExistingTeamDiscussion("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
  verifyTeamDiscussionExists("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
  updateDiscussion("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
  deleteDiscussion("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
  tryToDeleteANonExistingTeamDiscussion("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
  verifyTeamDiscussionDoesNotExist("org_1970", "team_slug_1970", "title_1970", "body_1970", "private_1970", "discussion_number_1970");
});

// Story: crud:TeamDiscussion:nondet:1:2
bthread("crud:TeamDiscussion:nondet:1:2", function () {
  let org = "org_1971";
  let team_slug = "team_slug_1971";
  let title = "title_1971";
  let body = "body_1971";
  let private = "private_1971";
  let discussion_number = "discussion_number_1971";
  createDiscussion("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
  tryToAddExistingTeamDiscussion("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
  updateDiscussion("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
  verifyTeamDiscussionExists("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
  deleteDiscussion("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
  tryToDeleteANonExistingTeamDiscussion("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
  verifyTeamDiscussionDoesNotExist("org_1971", "team_slug_1971", "title_1971", "body_1971", "private_1971", "discussion_number_1971");
});

// Story: crud:TeamDiscussion:nondet:negative:dup-add
bthread("crud:TeamDiscussion:nondet:negative:dup-add", function () {
  let org = "org_1976";
  let team_slug = "team_slug_1976";
  let title = "title_1976";
  let body = "body_1976";
  let private = "private_1976";
  let discussion_number = "discussion_number_1976";
  createDiscussion("org_1976", "team_slug_1976", "title_1976", "body_1976", "private_1976", "discussion_number_1976");
  verifyTeamDiscussionExists("org_1976", "team_slug_1976", "title_1976", "body_1976", "private_1976", "discussion_number_1976");
  tryToAddExistingTeamDiscussion("org_1976", "team_slug_1976", "title_1976", "body_1976", "private_1976", "discussion_number_1976");
  verifyTeamDiscussionExists("org_1976", "team_slug_1976", "title_1976", "body_1976", "private_1976", "discussion_number_1976");
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
  let org = "org_1980";
  let team_slug = "team_slug_1980";
  let discussion_number = "discussion_number_1980";
  let body = "body_1980";
  let comment_number = "comment_number_1980";
  createDiscussionComment("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
  tryToAddExistingTeamDiscussionComment("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
  verifyTeamDiscussionCommentExists("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
  updateDiscussionComment("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
  deleteDiscussionComment("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
  tryToDeleteANonExistingTeamDiscussionComment("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
  verifyTeamDiscussionCommentDoesNotExist("org_1980", "team_slug_1980", "discussion_number_1980", "body_1980", "comment_number_1980");
});

// Story: crud:TeamDiscussionComment:nondet:1:2
bthread("crud:TeamDiscussionComment:nondet:1:2", function () {
  let org = "org_1981";
  let team_slug = "team_slug_1981";
  let discussion_number = "discussion_number_1981";
  let body = "body_1981";
  let comment_number = "comment_number_1981";
  createDiscussionComment("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
  tryToAddExistingTeamDiscussionComment("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
  updateDiscussionComment("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
  verifyTeamDiscussionCommentExists("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
  deleteDiscussionComment("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
  tryToDeleteANonExistingTeamDiscussionComment("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
  verifyTeamDiscussionCommentDoesNotExist("org_1981", "team_slug_1981", "discussion_number_1981", "body_1981", "comment_number_1981");
});

// Story: crud:TeamDiscussionComment:nondet:negative:dup-add
bthread("crud:TeamDiscussionComment:nondet:negative:dup-add", function () {
  let org = "org_1986";
  let team_slug = "team_slug_1986";
  let discussion_number = "discussion_number_1986";
  let body = "body_1986";
  let comment_number = "comment_number_1986";
  createDiscussionComment("org_1986", "team_slug_1986", "discussion_number_1986", "body_1986", "comment_number_1986");
  verifyTeamDiscussionCommentExists("org_1986", "team_slug_1986", "discussion_number_1986", "body_1986", "comment_number_1986");
  tryToAddExistingTeamDiscussionComment("org_1986", "team_slug_1986", "discussion_number_1986", "body_1986", "comment_number_1986");
  verifyTeamDiscussionCommentExists("org_1986", "team_slug_1986", "discussion_number_1986", "body_1986", "comment_number_1986");
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
  let org = "org_1990";
  let team_slug = "team_slug_1990";
  let username = "username_1990";
  let role = "role_1990";
  addOrUpdateMembership("org_1990", "team_slug_1990", "username_1990", "role_1990");
  tryToAddExistingTeamMembership("org_1990", "team_slug_1990", "username_1990", "role_1990");
  verifyTeamMembershipExists("org_1990", "team_slug_1990", "username_1990", "role_1990");
  removeMembership("org_1990", "team_slug_1990", "username_1990", "role_1990");
  tryToDeleteANonExistingTeamMembership("org_1990", "team_slug_1990", "username_1990", "role_1990");
  verifyTeamMembershipDoesNotExist("org_1990", "team_slug_1990", "username_1990", "role_1990");
});

// Story: crud:TeamMembership:nondet:1:2
bthread("crud:TeamMembership:nondet:1:2", function () {
  let org = "org_1991";
  let team_slug = "team_slug_1991";
  let username = "username_1991";
  let role = "role_1991";
  addOrUpdateMembership("org_1991", "team_slug_1991", "username_1991", "role_1991");
  tryToAddExistingTeamMembership("org_1991", "team_slug_1991", "username_1991", "role_1991");
  verifyTeamMembershipExists("org_1991", "team_slug_1991", "username_1991", "role_1991");
  removeMembership("org_1991", "team_slug_1991", "username_1991", "role_1991");
  tryToDeleteANonExistingTeamMembership("org_1991", "team_slug_1991", "username_1991", "role_1991");
  verifyTeamMembershipDoesNotExist("org_1991", "team_slug_1991", "username_1991", "role_1991");
});

// Story: crud:TeamMembership:nondet:negative:dup-add
bthread("crud:TeamMembership:nondet:negative:dup-add", function () {
  let org = "org_1996";
  let team_slug = "team_slug_1996";
  let username = "username_1996";
  let role = "role_1996";
  addOrUpdateMembership("org_1996", "team_slug_1996", "username_1996", "role_1996");
  verifyTeamMembershipExists("org_1996", "team_slug_1996", "username_1996", "role_1996");
  tryToAddExistingTeamMembership("org_1996", "team_slug_1996", "username_1996", "role_1996");
  verifyTeamMembershipExists("org_1996", "team_slug_1996", "username_1996", "role_1996");
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
  let org = "org_2000";
  let team_slug = "team_slug_2000";
  let project_id = 2000;
  let permission = "permission_2000";
  addOrUpdateProjectPermissions("org_2000", "team_slug_2000", 2000, "permission_2000");
  tryToAddExistingTeamProject("org_2000", "team_slug_2000", 2000, "permission_2000");
  verifyTeamProjectExists("org_2000", "team_slug_2000", 2000, "permission_2000");
  removeProject("org_2000", "team_slug_2000", 2000, "permission_2000");
  tryToDeleteANonExistingTeamProject("org_2000", "team_slug_2000", 2000, "permission_2000");
  verifyTeamProjectDoesNotExist("org_2000", "team_slug_2000", 2000, "permission_2000");
});

// Story: crud:TeamProject:nondet:1:2
bthread("crud:TeamProject:nondet:1:2", function () {
  let org = "org_2001";
  let team_slug = "team_slug_2001";
  let project_id = 2001;
  let permission = "permission_2001";
  addOrUpdateProjectPermissions("org_2001", "team_slug_2001", 2001, "permission_2001");
  tryToAddExistingTeamProject("org_2001", "team_slug_2001", 2001, "permission_2001");
  verifyTeamProjectExists("org_2001", "team_slug_2001", 2001, "permission_2001");
  removeProject("org_2001", "team_slug_2001", 2001, "permission_2001");
  tryToDeleteANonExistingTeamProject("org_2001", "team_slug_2001", 2001, "permission_2001");
  verifyTeamProjectDoesNotExist("org_2001", "team_slug_2001", 2001, "permission_2001");
});

// Story: crud:TeamProject:nondet:negative:dup-add
bthread("crud:TeamProject:nondet:negative:dup-add", function () {
  let org = "org_2006";
  let team_slug = "team_slug_2006";
  let project_id = 2006;
  let permission = "permission_2006";
  addOrUpdateProjectPermissions("org_2006", "team_slug_2006", 2006, "permission_2006");
  verifyTeamProjectExists("org_2006", "team_slug_2006", 2006, "permission_2006");
  tryToAddExistingTeamProject("org_2006", "team_slug_2006", 2006, "permission_2006");
  verifyTeamProjectExists("org_2006", "team_slug_2006", 2006, "permission_2006");
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
  let org = "org_2010";
  let team_slug = "team_slug_2010";
  let owner = "owner_2010";
  let repo = "repo_2010";
  let permission = "permission_2010";
  addOrUpdateRepoPermissions("org_2010", "team_slug_2010", "owner_2010", "repo_2010", "permission_2010");
  tryToAddExistingTeamRepository("org_2010", "team_slug_2010", "owner_2010", "repo_2010", "permission_2010");
  verifyTeamRepositoryExists("org_2010", "team_slug_2010", "owner_2010", "repo_2010", "permission_2010");
  removeRepo("org_2010", "team_slug_2010", "owner_2010", "repo_2010", "permission_2010");
  tryToDeleteANonExistingTeamRepository("org_2010", "team_slug_2010", "owner_2010", "repo_2010", "permission_2010");
  verifyTeamRepositoryDoesNotExist("org_2010", "team_slug_2010", "owner_2010", "repo_2010", "permission_2010");
});

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let org = "org_2011";
  let team_slug = "team_slug_2011";
  let owner = "owner_2011";
  let repo = "repo_2011";
  let permission = "permission_2011";
  addOrUpdateRepoPermissions("org_2011", "team_slug_2011", "owner_2011", "repo_2011", "permission_2011");
  tryToAddExistingTeamRepository("org_2011", "team_slug_2011", "owner_2011", "repo_2011", "permission_2011");
  verifyTeamRepositoryExists("org_2011", "team_slug_2011", "owner_2011", "repo_2011", "permission_2011");
  removeRepo("org_2011", "team_slug_2011", "owner_2011", "repo_2011", "permission_2011");
  tryToDeleteANonExistingTeamRepository("org_2011", "team_slug_2011", "owner_2011", "repo_2011", "permission_2011");
  verifyTeamRepositoryDoesNotExist("org_2011", "team_slug_2011", "owner_2011", "repo_2011", "permission_2011");
});

// Story: crud:TeamRepository:nondet:negative:dup-add
bthread("crud:TeamRepository:nondet:negative:dup-add", function () {
  let org = "org_2016";
  let team_slug = "team_slug_2016";
  let owner = "owner_2016";
  let repo = "repo_2016";
  let permission = "permission_2016";
  addOrUpdateRepoPermissions("org_2016", "team_slug_2016", "owner_2016", "repo_2016", "permission_2016");
  verifyTeamRepositoryExists("org_2016", "team_slug_2016", "owner_2016", "repo_2016", "permission_2016");
  tryToAddExistingTeamRepository("org_2016", "team_slug_2016", "owner_2016", "repo_2016", "permission_2016");
  verifyTeamRepositoryExists("org_2016", "team_slug_2016", "owner_2016", "repo_2016", "permission_2016");
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
  let all = "all_2020";
  let participating = "participating_2020";
  let since = "since_2020";
  let before = "before_2020";
  let page = "page_2020";
  let per_page = "per_page_2020";
  verifyNotificationExists("all_2020", "participating_2020", "since_2020", "before_2020", "page_2020", "per_page_2020");
});

// Story: crud:NotificationThread:read_only
bthread("crud:NotificationThread:read_only", function () {
  let thread_id = 2030;
  verifyNotificationThreadExists(2030);
});

// Story: crud:ThreadSubscription:nondet:1:1
bthread("crud:ThreadSubscription:nondet:1:1", function () {
  let thread_id = 2040;
  setThreadSubscription(2040);
  tryToAddExistingThreadSubscription(2040);
  verifyThreadSubscriptionExists(2040);
  deleteThreadSubscription(2040);
  tryToDeleteANonExistingThreadSubscription(2040);
  verifyThreadSubscriptionDoesNotExist(2040);
});

// Story: crud:ThreadSubscription:nondet:1:2
bthread("crud:ThreadSubscription:nondet:1:2", function () {
  let thread_id = 2041;
  setThreadSubscription(2041);
  tryToAddExistingThreadSubscription(2041);
  verifyThreadSubscriptionExists(2041);
  deleteThreadSubscription(2041);
  tryToDeleteANonExistingThreadSubscription(2041);
  verifyThreadSubscriptionDoesNotExist(2041);
});

// Story: crud:ThreadSubscription:nondet:negative:dup-add
bthread("crud:ThreadSubscription:nondet:negative:dup-add", function () {
  let thread_id = 2046;
  setThreadSubscription(2046);
  verifyThreadSubscriptionExists(2046);
  tryToAddExistingThreadSubscription(2046);
  verifyThreadSubscriptionExists(2046);
});

// Story: monitor:ThreadSubscription:add
bthread("monitor:ThreadSubscription:add", function () {
  while (true) {
    let ev = waitForAnyThreadSubscriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedThreadSubscription.apply(null, args), function () {
      verifyThreadSubscriptionExists.apply(null, args);
    });
  }
});

// Story: crud:RepoNotification:read_only
bthread("crud:RepoNotification:read_only", function () {
  let owner = "owner_2050";
  let repo = "repo_2050";
  let all = "all_2050";
  let participating = "participating_2050";
  let since = "since_2050";
  let before = "before_2050";
  let per_page = "per_page_2050";
  let page = "page_2050";
  verifyRepoNotificationExists("owner_2050", "repo_2050", "all_2050", "participating_2050", "since_2050", "before_2050", "per_page_2050", "page_2050");
});

// Story: crud:RepoSubscription:nondet:1:1
bthread("crud:RepoSubscription:nondet:1:1", function () {
  let owner = "owner_2060";
  let repo = "repo_2060";
  setRepoSubscription("owner_2060", "repo_2060");
  tryToAddExistingRepoSubscription("owner_2060", "repo_2060");
  verifyRepoSubscriptionExists("owner_2060", "repo_2060");
  deleteRepoSubscription("owner_2060", "repo_2060");
  tryToDeleteANonExistingRepoSubscription("owner_2060", "repo_2060");
  verifyRepoSubscriptionDoesNotExist("owner_2060", "repo_2060");
});

// Story: crud:RepoSubscription:nondet:1:2
bthread("crud:RepoSubscription:nondet:1:2", function () {
  let owner = "owner_2061";
  let repo = "repo_2061";
  setRepoSubscription("owner_2061", "repo_2061");
  tryToAddExistingRepoSubscription("owner_2061", "repo_2061");
  verifyRepoSubscriptionExists("owner_2061", "repo_2061");
  deleteRepoSubscription("owner_2061", "repo_2061");
  tryToDeleteANonExistingRepoSubscription("owner_2061", "repo_2061");
  verifyRepoSubscriptionDoesNotExist("owner_2061", "repo_2061");
});

// Story: crud:RepoSubscription:nondet:negative:dup-add
bthread("crud:RepoSubscription:nondet:negative:dup-add", function () {
  let owner = "owner_2066";
  let repo = "repo_2066";
  setRepoSubscription("owner_2066", "repo_2066");
  verifyRepoSubscriptionExists("owner_2066", "repo_2066");
  tryToAddExistingRepoSubscription("owner_2066", "repo_2066");
  verifyRepoSubscriptionExists("owner_2066", "repo_2066");
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

// Story: crud:Star:nondet:1:1
bthread("crud:Star:nondet:1:1", function () {
  let owner = "owner_2070";
  let repo = "repo_2070";
  starRepo("owner_2070", "repo_2070");
  tryToAddExistingStar("owner_2070", "repo_2070");
  verifyStarExists("owner_2070", "repo_2070");
  unstarRepo("owner_2070", "repo_2070");
  tryToDeleteANonExistingStar("owner_2070", "repo_2070");
  verifyStarDoesNotExist("owner_2070", "repo_2070");
});

// Story: crud:Star:nondet:1:2
bthread("crud:Star:nondet:1:2", function () {
  let owner = "owner_2071";
  let repo = "repo_2071";
  starRepo("owner_2071", "repo_2071");
  tryToAddExistingStar("owner_2071", "repo_2071");
  verifyStarExists("owner_2071", "repo_2071");
  unstarRepo("owner_2071", "repo_2071");
  tryToDeleteANonExistingStar("owner_2071", "repo_2071");
  verifyStarDoesNotExist("owner_2071", "repo_2071");
});

// Story: crud:Star:nondet:negative:dup-add
bthread("crud:Star:nondet:negative:dup-add", function () {
  let owner = "owner_2076";
  let repo = "repo_2076";
  starRepo("owner_2076", "repo_2076");
  verifyStarExists("owner_2076", "repo_2076");
  tryToAddExistingStar("owner_2076", "repo_2076");
  verifyStarExists("owner_2076", "repo_2076");
});

// Story: monitor:Star:add
bthread("monitor:Star:add", function () {
  while (true) {
    let ev = waitForAnyStarAdded();
    let args = Object.values(ev);
    block(matchDeletedStar.apply(null, args), function () {
      verifyStarExists.apply(null, args);
    });
  }
});

// Story: crud:OrgPackage:read_only
bthread("crud:OrgPackage:read_only", function () {
  let org = "org_2080";
  let package_type = "package_type_2080";
  let package_name = "package_name_2080";
  verifyOrgPackageExists("org_2080", "package_type_2080", "package_name_2080");
});

// Story: crud:OrgPackageVersion:read_only
bthread("crud:OrgPackageVersion:read_only", function () {
  let org = "org_2100";
  let package_type = "package_type_2100";
  let package_name = "package_name_2100";
  let package_version_id = 2100;
  verifyOrgPackageVersionExists("org_2100", "package_type_2100", "package_name_2100", 2100);
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
  let username = "username_2140";
  let package_type = "package_type_2140";
  let package_name = "package_name_2140";
  let package_version_id = 2140;
  verifyUserPackageVersionExists("username_2140", "package_type_2140", "package_name_2140", 2140);
});

// Story: crud:UserPackageSelf:read_only
bthread("crud:UserPackageSelf:read_only", function () {
  let package_type = "package_type_2160";
  let package_name = "package_name_2160";
  verifyUserPackageSelfExists("package_type_2160", "package_name_2160");
});

// Story: crud:UserPackageVersionSelf:read_only
bthread("crud:UserPackageVersionSelf:read_only", function () {
  let package_type = "package_type_2180";
  let package_name = "package_name_2180";
  let package_version_id = 2180;
  verifyUserPackageVersionSelfExists("package_type_2180", "package_name_2180", 2180);
});

// Story: crud:CodeScanningAlert:read_only
bthread("crud:CodeScanningAlert:read_only", function () {
  let owner = "owner_2200";
  let repo = "repo_2200";
  let alert_number = "alert_number_2200";
  verifyCodeScanningAlertExists("owner_2200", "repo_2200", "alert_number_2200");
});

// Story: crud:CodeScanningAlertAutofix:read_only
bthread("crud:CodeScanningAlertAutofix:read_only", function () {
  let owner = "owner_2210";
  let repo = "repo_2210";
  let alert_number = "alert_number_2210";
  verifyCodeScanningAlertAutofixExists("owner_2210", "repo_2210", "alert_number_2210");
});

// Story: crud:CodeScanningAlertInstance:read_only
bthread("crud:CodeScanningAlertInstance:read_only", function () {
  let owner = "owner_2230";
  let repo = "repo_2230";
  let alert_number = "alert_number_2230";
  verifyCodeScanningAlertInstanceExists("owner_2230", "repo_2230", "alert_number_2230");
});

// Story: crud:CodeScanningAnalysis:read_only
bthread("crud:CodeScanningAnalysis:read_only", function () {
  let owner = "owner_2240";
  let repo = "repo_2240";
  let analysis_id = 2240;
  verifyCodeScanningAnalysisExists("owner_2240", "repo_2240", 2240);
});

// Story: crud:CodeScanningAnalysisList:read_only
bthread("crud:CodeScanningAnalysisList:read_only", function () {
  let owner = "owner_2250";
  let repo = "repo_2250";
  verifyCodeScanningAnalysisListExists("owner_2250", "repo_2250");
});

// Story: crud:CodeQLDatabase:read_only
bthread("crud:CodeQLDatabase:read_only", function () {
  let owner = "owner_2260";
  let repo = "repo_2260";
  let language = "language_2260";
  verifyCodeQLDatabaseExists("owner_2260", "repo_2260", "language_2260");
});

// Story: crud:CodeQLDatabaseList:read_only
bthread("crud:CodeQLDatabaseList:read_only", function () {
  let owner = "owner_2270";
  let repo = "repo_2270";
  verifyCodeQLDatabaseListExists("owner_2270", "repo_2270");
});

// Story: crud:CodeQLVariantAnalysis:read_only
bthread("crud:CodeQLVariantAnalysis:read_only", function () {
  let owner = "owner_2280";
  let repo = "repo_2280";
  let codeql_variant_analysis_id = 2280;
  verifyCodeQLVariantAnalysisExists("owner_2280", "repo_2280", 2280);
});

// Story: crud:CodeQLVariantAnalysisRepoTask:read_only
bthread("crud:CodeQLVariantAnalysisRepoTask:read_only", function () {
  let owner = "owner_2290";
  let repo = "repo_2290";
  let codeql_variant_analysis_id = 2290;
  let repo_owner = "repo_owner_2290";
  let repo_name = "repo_name_2290";
  verifyCodeQLVariantAnalysisRepoTaskExists("owner_2290", "repo_2290", 2290, "repo_owner_2290", "repo_name_2290");
});

// Story: crud:CodeScanningDefaultSetup:read_only
bthread("crud:CodeScanningDefaultSetup:read_only", function () {
  let owner = "owner_2300";
  let repo = "repo_2300";
  verifyCodeScanningDefaultSetupExists("owner_2300", "repo_2300");
});

// Story: crud:SarifUpload:read_only
bthread("crud:SarifUpload:read_only", function () {
  let owner = "owner_2310";
  let repo = "repo_2310";
  let sarif_id = 2310;
  verifySarifUploadExists("owner_2310", "repo_2310", 2310);
});

// Story: crud:CodeScanningAlertListOrg:read_only
bthread("crud:CodeScanningAlertListOrg:read_only", function () {
  let org = "org_2320";
  verifyCodeScanningAlertListOrgExists("org_2320");
});

// Story: crud:CodeScanningAlertListRepo:read_only
bthread("crud:CodeScanningAlertListRepo:read_only", function () {
  let owner = "owner_2330";
  let repo = "repo_2330";
  verifyCodeScanningAlertListRepoExists("owner_2330", "repo_2330");
});

// Story: crud:TeamDiscussionCommentReaction:read_only
bthread("crud:TeamDiscussionCommentReaction:read_only", function () {
  let org = "org_2340";
  let team_slug = "team_slug_2340";
  let discussion_number = "discussion_number_2340";
  let comment_number = "comment_number_2340";
  let content = "content_2340";
  verifyTeamDiscussionCommentReactionExists("org_2340", "team_slug_2340", "discussion_number_2340", "comment_number_2340", "content_2340");
});

// Story: crud:TeamDiscussionReaction:read_only
bthread("crud:TeamDiscussionReaction:read_only", function () {
  let org = "org_2360";
  let team_slug = "team_slug_2360";
  let discussion_number = "discussion_number_2360";
  let content = "content_2360";
  verifyTeamDiscussionReactionExists("org_2360", "team_slug_2360", "discussion_number_2360", "content_2360");
});

// Story: crud:CommitCommentReaction:read_only
bthread("crud:CommitCommentReaction:read_only", function () {
  let owner = "owner_2380";
  let repo = "repo_2380";
  let comment_id = 2380;
  let content = "content_2380";
  verifyCommitCommentReactionExists("owner_2380", "repo_2380", 2380, "content_2380");
});

// Story: crud:IssueCommentReaction:read_only
bthread("crud:IssueCommentReaction:read_only", function () {
  let owner = "owner_2400";
  let repo = "repo_2400";
  let comment_id = 2400;
  let content = "content_2400";
  verifyIssueCommentReactionExists("owner_2400", "repo_2400", 2400, "content_2400");
});

// Story: crud:IssueReaction:read_only
bthread("crud:IssueReaction:read_only", function () {
  let owner = "owner_2420";
  let repo = "repo_2420";
  let issue_number = "issue_number_2420";
  let content = "content_2420";
  verifyIssueReactionExists("owner_2420", "repo_2420", "issue_number_2420", "content_2420");
});

// Story: crud:PullRequestReviewCommentReaction:read_only
bthread("crud:PullRequestReviewCommentReaction:read_only", function () {
  let owner = "owner_2440";
  let repo = "repo_2440";
  let comment_id = 2440;
  let content = "content_2440";
  verifyPullRequestReviewCommentReactionExists("owner_2440", "repo_2440", 2440, "content_2440");
});

// Story: crud:ReleaseReaction:read_only
bthread("crud:ReleaseReaction:read_only", function () {
  let owner = "owner_2460";
  let repo = "repo_2460";
  let release_id = 2460;
  let content = "content_2460";
  verifyReleaseReactionExists("owner_2460", "repo_2460", 2460, "content_2460");
});

// Story: crud:TeamDiscussionCommentReactionLegacy:read_only
bthread("crud:TeamDiscussionCommentReactionLegacy:read_only", function () {
  let team_id = 2480;
  let discussion_number = "discussion_number_2480";
  let comment_number = "comment_number_2480";
  let content = "content_2480";
  verifyTeamDiscussionCommentReactionLegacyExists(2480, "discussion_number_2480", "comment_number_2480", "content_2480");
});

// Story: crud:TeamDiscussionReactionLegacy:read_only
bthread("crud:TeamDiscussionReactionLegacy:read_only", function () {
  let team_id = 2490;
  let discussion_number = "discussion_number_2490";
  let content = "content_2490";
  verifyTeamDiscussionReactionLegacyExists(2490, "discussion_number_2490", "content_2490");
});

// Story: crud:PullRequest:read_only
bthread("crud:PullRequest:read_only", function () {
  let title = "title_2500";
  let head = "head_2500";
  let base = "base_2500";
  let body = "body_2500";
  let maintainer_can_modify = "maintainer_can_modify_2500";
  let draft = "draft_2500";
  let issue = "issue_2500";
  let head_repo = "head_repo_2500";
  let owner = "owner_2500";
  let repo = "repo_2500";
  let pull_number = "pull_number_2500";
  let state = "state_2500";
  verifyPullRequestExists("title_2500", "head_2500", "base_2500", "body_2500", "maintainer_can_modify_2500", "draft_2500", "issue_2500", "head_repo_2500", "owner_2500", "repo_2500", "pull_number_2500", "state_2500");
});

// Story: crud:PullRequestComment:read_only
bthread("crud:PullRequestComment:read_only", function () {
  let owner = "owner_2510";
  let repo = "repo_2510";
  let comment_id = 2510;
  let body = "body_2510";
  verifyPullRequestCommentExists("owner_2510", "repo_2510", 2510, "body_2510");
});

// Story: crud:PullRequestReview:read_only
bthread("crud:PullRequestReview:read_only", function () {
  let owner = "owner_2520";
  let repo = "repo_2520";
  let pull_number = "pull_number_2520";
  let review_id = 2520;
  let body = "body_2520";
  let message = "message_2520";
  let event = "event_2520";
  verifyPullRequestReviewExists("owner_2520", "repo_2520", "pull_number_2520", 2520, "body_2520", "message_2520", "event_2520");
});

// Story: crud:PullRequestReviewers:nondet:1:1
bthread("crud:PullRequestReviewers:nondet:1:1", function () {
  let owner = "owner_2540";
  let repo = "repo_2540";
  let pull_number = "pull_number_2540";
  let reviewers = "reviewers_2540";
  let team_reviewers = "team_reviewers_2540";
  requestReviewers("owner_2540", "repo_2540", "pull_number_2540", "reviewers_2540", "team_reviewers_2540");
  tryToAddExistingPullRequestReviewers("owner_2540", "repo_2540", "pull_number_2540", "reviewers_2540", "team_reviewers_2540");
  verifyPullRequestReviewersExists("owner_2540", "repo_2540", "pull_number_2540", "reviewers_2540", "team_reviewers_2540");
  removeRequestedReviewers("owner_2540", "repo_2540", "pull_number_2540", "reviewers_2540", "team_reviewers_2540");
  tryToDeleteANonExistingPullRequestReviewers("owner_2540", "repo_2540", "pull_number_2540", "reviewers_2540", "team_reviewers_2540");
  verifyPullRequestReviewersDoesNotExist("owner_2540", "repo_2540", "pull_number_2540", "reviewers_2540", "team_reviewers_2540");
});

// Story: crud:PullRequestReviewers:nondet:1:2
bthread("crud:PullRequestReviewers:nondet:1:2", function () {
  let owner = "owner_2541";
  let repo = "repo_2541";
  let pull_number = "pull_number_2541";
  let reviewers = "reviewers_2541";
  let team_reviewers = "team_reviewers_2541";
  requestReviewers("owner_2541", "repo_2541", "pull_number_2541", "reviewers_2541", "team_reviewers_2541");
  tryToAddExistingPullRequestReviewers("owner_2541", "repo_2541", "pull_number_2541", "reviewers_2541", "team_reviewers_2541");
  verifyPullRequestReviewersExists("owner_2541", "repo_2541", "pull_number_2541", "reviewers_2541", "team_reviewers_2541");
  removeRequestedReviewers("owner_2541", "repo_2541", "pull_number_2541", "reviewers_2541", "team_reviewers_2541");
  tryToDeleteANonExistingPullRequestReviewers("owner_2541", "repo_2541", "pull_number_2541", "reviewers_2541", "team_reviewers_2541");
  verifyPullRequestReviewersDoesNotExist("owner_2541", "repo_2541", "pull_number_2541", "reviewers_2541", "team_reviewers_2541");
});

// Story: crud:PullRequestReviewers:nondet:negative:dup-add
bthread("crud:PullRequestReviewers:nondet:negative:dup-add", function () {
  let owner = "owner_2546";
  let repo = "repo_2546";
  let pull_number = "pull_number_2546";
  let reviewers = "reviewers_2546";
  let team_reviewers = "team_reviewers_2546";
  requestReviewers("owner_2546", "repo_2546", "pull_number_2546", "reviewers_2546", "team_reviewers_2546");
  verifyPullRequestReviewersExists("owner_2546", "repo_2546", "pull_number_2546", "reviewers_2546", "team_reviewers_2546");
  tryToAddExistingPullRequestReviewers("owner_2546", "repo_2546", "pull_number_2546", "reviewers_2546", "team_reviewers_2546");
  verifyPullRequestReviewersExists("owner_2546", "repo_2546", "pull_number_2546", "reviewers_2546", "team_reviewers_2546");
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
  let org = "org_2560";
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
  startOrgMigration("org_2560", "repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  tryToAddExistingOrgMigration("org_2560", "repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  verifyOrgMigrationExists("org_2560", "repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  deleteOrgMigrationArchive("org_2560", "repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  tryToDeleteANonExistingOrgMigration("org_2560", "repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
  verifyOrgMigrationDoesNotExist("org_2560", "repositories_2560", "lock_repositories_2560", "exclude_metadata_2560", "exclude_git_data_2560", "exclude_attachments_2560", "exclude_releases_2560", "exclude_owner_projects_2560", "org_metadata_only_2560", "exclude_2560", 2560);
});

// Story: crud:OrgMigration:nondet:1:2
bthread("crud:OrgMigration:nondet:1:2", function () {
  let org = "org_2561";
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
  startOrgMigration("org_2561", "repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  tryToAddExistingOrgMigration("org_2561", "repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  verifyOrgMigrationExists("org_2561", "repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  deleteOrgMigrationArchive("org_2561", "repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  tryToDeleteANonExistingOrgMigration("org_2561", "repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
  verifyOrgMigrationDoesNotExist("org_2561", "repositories_2561", "lock_repositories_2561", "exclude_metadata_2561", "exclude_git_data_2561", "exclude_attachments_2561", "exclude_releases_2561", "exclude_owner_projects_2561", "org_metadata_only_2561", "exclude_2561", 2561);
});

// Story: crud:OrgMigration:nondet:negative:dup-add
bthread("crud:OrgMigration:nondet:negative:dup-add", function () {
  let org = "org_2566";
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
  startOrgMigration("org_2566", "repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
  verifyOrgMigrationExists("org_2566", "repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
  tryToAddExistingOrgMigration("org_2566", "repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
  verifyOrgMigrationExists("org_2566", "repositories_2566", "lock_repositories_2566", "exclude_metadata_2566", "exclude_git_data_2566", "exclude_attachments_2566", "exclude_releases_2566", "exclude_owner_projects_2566", "org_metadata_only_2566", "exclude_2566", 2566);
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
  let org = "org_2570";
  let migration_id = 2570;
  verifyOrgMigrationArchiveExists("org_2570", 2570);
});

// Story: crud:OrgMigrationRepositories:read_only
bthread("crud:OrgMigrationRepositories:read_only", function () {
  let org = "org_2590";
  let migration_id = 2590;
  verifyOrgMigrationRepositoriesExists("org_2590", 2590);
});

// Story: crud:UserMigration:nondet:1:1
bthread("crud:UserMigration:nondet:1:1", function () {
  let repositories = "repositories_2600";
  let lock_repositories = "lock_repositories_2600";
  let exclude_metadata = "exclude_metadata_2600";
  let exclude_git_data = "exclude_git_data_2600";
  let exclude_attachments = "exclude_attachments_2600";
  let exclude_releases = "exclude_releases_2600";
  let exclude_owner_projects = "exclude_owner_projects_2600";
  let org_metadata_only = "org_metadata_only_2600";
  let exclude = "exclude_2600";
  let migration_id = 2600;
  startUserMigration("repositories_2600", "lock_repositories_2600", "exclude_metadata_2600", "exclude_git_data_2600", "exclude_attachments_2600", "exclude_releases_2600", "exclude_owner_projects_2600", "org_metadata_only_2600", "exclude_2600", 2600);
  tryToAddExistingUserMigration("repositories_2600", "lock_repositories_2600", "exclude_metadata_2600", "exclude_git_data_2600", "exclude_attachments_2600", "exclude_releases_2600", "exclude_owner_projects_2600", "org_metadata_only_2600", "exclude_2600", 2600);
  verifyUserMigrationExists("repositories_2600", "lock_repositories_2600", "exclude_metadata_2600", "exclude_git_data_2600", "exclude_attachments_2600", "exclude_releases_2600", "exclude_owner_projects_2600", "org_metadata_only_2600", "exclude_2600", 2600);
  deleteUserMigrationArchive("repositories_2600", "lock_repositories_2600", "exclude_metadata_2600", "exclude_git_data_2600", "exclude_attachments_2600", "exclude_releases_2600", "exclude_owner_projects_2600", "org_metadata_only_2600", "exclude_2600", 2600);
  tryToDeleteANonExistingUserMigration("repositories_2600", "lock_repositories_2600", "exclude_metadata_2600", "exclude_git_data_2600", "exclude_attachments_2600", "exclude_releases_2600", "exclude_owner_projects_2600", "org_metadata_only_2600", "exclude_2600", 2600);
  verifyUserMigrationDoesNotExist("repositories_2600", "lock_repositories_2600", "exclude_metadata_2600", "exclude_git_data_2600", "exclude_attachments_2600", "exclude_releases_2600", "exclude_owner_projects_2600", "org_metadata_only_2600", "exclude_2600", 2600);
});

// Story: crud:UserMigration:nondet:1:2
bthread("crud:UserMigration:nondet:1:2", function () {
  let repositories = "repositories_2601";
  let lock_repositories = "lock_repositories_2601";
  let exclude_metadata = "exclude_metadata_2601";
  let exclude_git_data = "exclude_git_data_2601";
  let exclude_attachments = "exclude_attachments_2601";
  let exclude_releases = "exclude_releases_2601";
  let exclude_owner_projects = "exclude_owner_projects_2601";
  let org_metadata_only = "org_metadata_only_2601";
  let exclude = "exclude_2601";
  let migration_id = 2601;
  startUserMigration("repositories_2601", "lock_repositories_2601", "exclude_metadata_2601", "exclude_git_data_2601", "exclude_attachments_2601", "exclude_releases_2601", "exclude_owner_projects_2601", "org_metadata_only_2601", "exclude_2601", 2601);
  tryToAddExistingUserMigration("repositories_2601", "lock_repositories_2601", "exclude_metadata_2601", "exclude_git_data_2601", "exclude_attachments_2601", "exclude_releases_2601", "exclude_owner_projects_2601", "org_metadata_only_2601", "exclude_2601", 2601);
  verifyUserMigrationExists("repositories_2601", "lock_repositories_2601", "exclude_metadata_2601", "exclude_git_data_2601", "exclude_attachments_2601", "exclude_releases_2601", "exclude_owner_projects_2601", "org_metadata_only_2601", "exclude_2601", 2601);
  deleteUserMigrationArchive("repositories_2601", "lock_repositories_2601", "exclude_metadata_2601", "exclude_git_data_2601", "exclude_attachments_2601", "exclude_releases_2601", "exclude_owner_projects_2601", "org_metadata_only_2601", "exclude_2601", 2601);
  tryToDeleteANonExistingUserMigration("repositories_2601", "lock_repositories_2601", "exclude_metadata_2601", "exclude_git_data_2601", "exclude_attachments_2601", "exclude_releases_2601", "exclude_owner_projects_2601", "org_metadata_only_2601", "exclude_2601", 2601);
  verifyUserMigrationDoesNotExist("repositories_2601", "lock_repositories_2601", "exclude_metadata_2601", "exclude_git_data_2601", "exclude_attachments_2601", "exclude_releases_2601", "exclude_owner_projects_2601", "org_metadata_only_2601", "exclude_2601", 2601);
});

// Story: crud:UserMigration:nondet:negative:dup-add
bthread("crud:UserMigration:nondet:negative:dup-add", function () {
  let repositories = "repositories_2606";
  let lock_repositories = "lock_repositories_2606";
  let exclude_metadata = "exclude_metadata_2606";
  let exclude_git_data = "exclude_git_data_2606";
  let exclude_attachments = "exclude_attachments_2606";
  let exclude_releases = "exclude_releases_2606";
  let exclude_owner_projects = "exclude_owner_projects_2606";
  let org_metadata_only = "org_metadata_only_2606";
  let exclude = "exclude_2606";
  let migration_id = 2606;
  startUserMigration("repositories_2606", "lock_repositories_2606", "exclude_metadata_2606", "exclude_git_data_2606", "exclude_attachments_2606", "exclude_releases_2606", "exclude_owner_projects_2606", "org_metadata_only_2606", "exclude_2606", 2606);
  verifyUserMigrationExists("repositories_2606", "lock_repositories_2606", "exclude_metadata_2606", "exclude_git_data_2606", "exclude_attachments_2606", "exclude_releases_2606", "exclude_owner_projects_2606", "org_metadata_only_2606", "exclude_2606", 2606);
  tryToAddExistingUserMigration("repositories_2606", "lock_repositories_2606", "exclude_metadata_2606", "exclude_git_data_2606", "exclude_attachments_2606", "exclude_releases_2606", "exclude_owner_projects_2606", "org_metadata_only_2606", "exclude_2606", 2606);
  verifyUserMigrationExists("repositories_2606", "lock_repositories_2606", "exclude_metadata_2606", "exclude_git_data_2606", "exclude_attachments_2606", "exclude_releases_2606", "exclude_owner_projects_2606", "org_metadata_only_2606", "exclude_2606", 2606);
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
  let migration_id = 2610;
  verifyUserMigrationArchiveExists(2610);
});

// Story: crud:UserMigrationRepositories:read_only
bthread("crud:UserMigrationRepositories:read_only", function () {
  let migration_id = 2630;
  verifyUserMigrationRepositoriesExists(2630);
});

// Story: crud:Import:nondet:1:1
bthread("crud:Import:nondet:1:1", function () {
  let owner = "owner_2640";
  let repo = "repo_2640";
  let vcs_url = "vcs_url_2640";
  let vcs = "vcs_2640";
  let vcs_username = "vcs_username_2640";
  let vcs_password = "vcs_password_2640";
  let tfvc_project = "tfvc_project_2640";
  startImport("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
  tryToAddExistingImport("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
  verifyImportExists("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
  updateImport("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
  cancelImport("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
  tryToDeleteANonExistingImport("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
  verifyImportDoesNotExist("owner_2640", "repo_2640", "vcs_url_2640", "vcs_2640", "vcs_username_2640", "vcs_password_2640", "tfvc_project_2640");
});

// Story: crud:Import:nondet:1:2
bthread("crud:Import:nondet:1:2", function () {
  let owner = "owner_2641";
  let repo = "repo_2641";
  let vcs_url = "vcs_url_2641";
  let vcs = "vcs_2641";
  let vcs_username = "vcs_username_2641";
  let vcs_password = "vcs_password_2641";
  let tfvc_project = "tfvc_project_2641";
  startImport("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
  tryToAddExistingImport("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
  updateImport("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
  verifyImportExists("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
  cancelImport("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
  tryToDeleteANonExistingImport("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
  verifyImportDoesNotExist("owner_2641", "repo_2641", "vcs_url_2641", "vcs_2641", "vcs_username_2641", "vcs_password_2641", "tfvc_project_2641");
});

// Story: crud:Import:nondet:negative:dup-add
bthread("crud:Import:nondet:negative:dup-add", function () {
  let owner = "owner_2646";
  let repo = "repo_2646";
  let vcs_url = "vcs_url_2646";
  let vcs = "vcs_2646";
  let vcs_username = "vcs_username_2646";
  let vcs_password = "vcs_password_2646";
  let tfvc_project = "tfvc_project_2646";
  startImport("owner_2646", "repo_2646", "vcs_url_2646", "vcs_2646", "vcs_username_2646", "vcs_password_2646", "tfvc_project_2646");
  verifyImportExists("owner_2646", "repo_2646", "vcs_url_2646", "vcs_2646", "vcs_username_2646", "vcs_password_2646", "tfvc_project_2646");
  tryToAddExistingImport("owner_2646", "repo_2646", "vcs_url_2646", "vcs_2646", "vcs_username_2646", "vcs_password_2646", "tfvc_project_2646");
  verifyImportExists("owner_2646", "repo_2646", "vcs_url_2646", "vcs_2646", "vcs_username_2646", "vcs_password_2646", "tfvc_project_2646");
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
  let owner = "owner_2660";
  let repo = "repo_2660";
  let since_user = "since_user_2660";
  verifyImportAuthorsExists("owner_2660", "repo_2660", "since_user_2660");
});

// Story: crud:ImportLargeFiles:read_only
bthread("crud:ImportLargeFiles:read_only", function () {
  let owner = "owner_2670";
  let repo = "repo_2670";
  verifyImportLargeFilesExists("owner_2670", "repo_2670");
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:1:1
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:1:1", function () {
  let enterprise = "enterprise_2690";
  let name = "name_2690";
  let configuration_id = 2690;
  createEnterpriseConfiguration("enterprise_2690", "name_2690", 2690);
  tryToAddExistingEnterpriseCodeSecurityConfiguration("enterprise_2690", "name_2690", 2690);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2690", "name_2690", 2690);
  updateEnterpriseConfiguration("enterprise_2690", "name_2690", 2690);
  deleteEnterpriseConfiguration("enterprise_2690", "name_2690", 2690);
  tryToDeleteANonExistingEnterpriseCodeSecurityConfiguration("enterprise_2690", "name_2690", 2690);
  verifyEnterpriseCodeSecurityConfigurationDoesNotExist("enterprise_2690", "name_2690", 2690);
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:1:2
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:1:2", function () {
  let enterprise = "enterprise_2691";
  let name = "name_2691";
  let configuration_id = 2691;
  createEnterpriseConfiguration("enterprise_2691", "name_2691", 2691);
  tryToAddExistingEnterpriseCodeSecurityConfiguration("enterprise_2691", "name_2691", 2691);
  updateEnterpriseConfiguration("enterprise_2691", "name_2691", 2691);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2691", "name_2691", 2691);
  deleteEnterpriseConfiguration("enterprise_2691", "name_2691", 2691);
  tryToDeleteANonExistingEnterpriseCodeSecurityConfiguration("enterprise_2691", "name_2691", 2691);
  verifyEnterpriseCodeSecurityConfigurationDoesNotExist("enterprise_2691", "name_2691", 2691);
});

// Story: crud:EnterpriseCodeSecurityConfiguration:nondet:negative:dup-add
bthread("crud:EnterpriseCodeSecurityConfiguration:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_2696";
  let name = "name_2696";
  let configuration_id = 2696;
  createEnterpriseConfiguration("enterprise_2696", "name_2696", 2696);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2696", "name_2696", 2696);
  tryToAddExistingEnterpriseCodeSecurityConfiguration("enterprise_2696", "name_2696", 2696);
  verifyEnterpriseCodeSecurityConfigurationExists("enterprise_2696", "name_2696", 2696);
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
  let enterprise = "enterprise_2720";
  let configuration_id = 2720;
  verifyEnterpriseCodeSecurityConfigurationRepositoriesExists("enterprise_2720", 2720);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:1:1
bthread("crud:OrgCodeSecurityConfiguration:nondet:1:1", function () {
  let org = "org_2730";
  let name = "name_2730";
  let configuration_id = 2730;
  createOrgConfiguration("org_2730", "name_2730", 2730);
  tryToAddExistingOrgCodeSecurityConfiguration("org_2730", "name_2730", 2730);
  verifyOrgCodeSecurityConfigurationExists("org_2730", "name_2730", 2730);
  updateOrgConfiguration("org_2730", "name_2730", 2730);
  deleteOrgConfiguration("org_2730", "name_2730", 2730);
  tryToDeleteANonExistingOrgCodeSecurityConfiguration("org_2730", "name_2730", 2730);
  verifyOrgCodeSecurityConfigurationDoesNotExist("org_2730", "name_2730", 2730);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:1:2
bthread("crud:OrgCodeSecurityConfiguration:nondet:1:2", function () {
  let org = "org_2731";
  let name = "name_2731";
  let configuration_id = 2731;
  createOrgConfiguration("org_2731", "name_2731", 2731);
  tryToAddExistingOrgCodeSecurityConfiguration("org_2731", "name_2731", 2731);
  updateOrgConfiguration("org_2731", "name_2731", 2731);
  verifyOrgCodeSecurityConfigurationExists("org_2731", "name_2731", 2731);
  deleteOrgConfiguration("org_2731", "name_2731", 2731);
  tryToDeleteANonExistingOrgCodeSecurityConfiguration("org_2731", "name_2731", 2731);
  verifyOrgCodeSecurityConfigurationDoesNotExist("org_2731", "name_2731", 2731);
});

// Story: crud:OrgCodeSecurityConfiguration:nondet:negative:dup-add
bthread("crud:OrgCodeSecurityConfiguration:nondet:negative:dup-add", function () {
  let org = "org_2736";
  let name = "name_2736";
  let configuration_id = 2736;
  createOrgConfiguration("org_2736", "name_2736", 2736);
  verifyOrgCodeSecurityConfigurationExists("org_2736", "name_2736", 2736);
  tryToAddExistingOrgCodeSecurityConfiguration("org_2736", "name_2736", 2736);
  verifyOrgCodeSecurityConfigurationExists("org_2736", "name_2736", 2736);
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
  let org = "org_2760";
  let configuration_id = 2760;
  verifyOrgCodeSecurityConfigurationRepositoriesExists("org_2760", 2760);
});

// Story: crud:EnterpriseCodeSecurityConfigurationDefaults:read_only
bthread("crud:EnterpriseCodeSecurityConfigurationDefaults:read_only", function () {
  let enterprise = "enterprise_2780";
  verifyEnterpriseCodeSecurityConfigurationDefaultsExists("enterprise_2780");
});

// Story: crud:OrgCodeSecurityConfigurationDefaults:read_only
bthread("crud:OrgCodeSecurityConfigurationDefaults:read_only", function () {
  let org = "org_2790";
  verifyOrgCodeSecurityConfigurationDefaultsExists("org_2790");
});

// Story: crud:RepositoryCodeSecurityConfiguration:read_only
bthread("crud:RepositoryCodeSecurityConfiguration:read_only", function () {
  let owner = "owner_2800";
  let repo = "repo_2800";
  verifyRepositoryCodeSecurityConfigurationExists("owner_2800", "repo_2800");
});

// Story: crud:DependabotAlertEnterprise:read_only
bthread("crud:DependabotAlertEnterprise:read_only", function () {
  let enterprise = "enterprise_2810";
  verifyDependabotAlertEnterpriseExists("enterprise_2810");
});

// Story: crud:DependabotAlertOrganization:read_only
bthread("crud:DependabotAlertOrganization:read_only", function () {
  let org = "org_2820";
  verifyDependabotAlertOrganizationExists("org_2820");
});

// Story: crud:DependabotAlertRepository:read_only
bthread("crud:DependabotAlertRepository:read_only", function () {
  let owner = "owner_2830";
  let repo = "repo_2830";
  let alert_number = "alert_number_2830";
  verifyDependabotAlertRepositoryExists("owner_2830", "repo_2830", "alert_number_2830");
});

// Story: crud:DependabotRepositoryAccess:read_only
bthread("crud:DependabotRepositoryAccess:read_only", function () {
  let org = "org_2840";
  verifyDependabotRepositoryAccessExists("org_2840");
});

// Story: crud:DependabotOrgSecret:nondet:1:1
bthread("crud:DependabotOrgSecret:nondet:1:1", function () {
  let org = "org_2860";
  let secret_name = "secret_name_2860";
  createOrUpdateOrgSecret("org_2860", "secret_name_2860");
  tryToAddExistingDependabotOrgSecret("org_2860", "secret_name_2860");
  verifyDependabotOrgSecretExists("org_2860", "secret_name_2860");
  deleteOrgSecret("org_2860", "secret_name_2860");
  tryToDeleteANonExistingDependabotOrgSecret("org_2860", "secret_name_2860");
  verifyDependabotOrgSecretDoesNotExist("org_2860", "secret_name_2860");
});

// Story: crud:DependabotOrgSecret:nondet:1:2
bthread("crud:DependabotOrgSecret:nondet:1:2", function () {
  let org = "org_2861";
  let secret_name = "secret_name_2861";
  createOrUpdateOrgSecret("org_2861", "secret_name_2861");
  tryToAddExistingDependabotOrgSecret("org_2861", "secret_name_2861");
  verifyDependabotOrgSecretExists("org_2861", "secret_name_2861");
  deleteOrgSecret("org_2861", "secret_name_2861");
  tryToDeleteANonExistingDependabotOrgSecret("org_2861", "secret_name_2861");
  verifyDependabotOrgSecretDoesNotExist("org_2861", "secret_name_2861");
});

// Story: crud:DependabotOrgSecret:nondet:negative:dup-add
bthread("crud:DependabotOrgSecret:nondet:negative:dup-add", function () {
  let org = "org_2866";
  let secret_name = "secret_name_2866";
  createOrUpdateOrgSecret("org_2866", "secret_name_2866");
  verifyDependabotOrgSecretExists("org_2866", "secret_name_2866");
  tryToAddExistingDependabotOrgSecret("org_2866", "secret_name_2866");
  verifyDependabotOrgSecretExists("org_2866", "secret_name_2866");
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
  let org = "org_2870";
  let secret_name = "secret_name_2870";
  let repository_id = 2870;
  addSelectedRepoToOrgSecret("org_2870", "secret_name_2870", 2870);
  tryToAddExistingDependabotOrgSecretSelectedRepository("org_2870", "secret_name_2870", 2870);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2870", "secret_name_2870", 2870);
  removeSelectedRepoFromOrgSecret("org_2870", "secret_name_2870", 2870);
  tryToDeleteANonExistingDependabotOrgSecretSelectedRepository("org_2870", "secret_name_2870", 2870);
  verifyDependabotOrgSecretSelectedRepositoryDoesNotExist("org_2870", "secret_name_2870", 2870);
});

// Story: crud:DependabotOrgSecretSelectedRepository:nondet:1:2
bthread("crud:DependabotOrgSecretSelectedRepository:nondet:1:2", function () {
  let org = "org_2871";
  let secret_name = "secret_name_2871";
  let repository_id = 2871;
  addSelectedRepoToOrgSecret("org_2871", "secret_name_2871", 2871);
  tryToAddExistingDependabotOrgSecretSelectedRepository("org_2871", "secret_name_2871", 2871);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2871", "secret_name_2871", 2871);
  removeSelectedRepoFromOrgSecret("org_2871", "secret_name_2871", 2871);
  tryToDeleteANonExistingDependabotOrgSecretSelectedRepository("org_2871", "secret_name_2871", 2871);
  verifyDependabotOrgSecretSelectedRepositoryDoesNotExist("org_2871", "secret_name_2871", 2871);
});

// Story: crud:DependabotOrgSecretSelectedRepository:nondet:negative:dup-add
bthread("crud:DependabotOrgSecretSelectedRepository:nondet:negative:dup-add", function () {
  let org = "org_2876";
  let secret_name = "secret_name_2876";
  let repository_id = 2876;
  addSelectedRepoToOrgSecret("org_2876", "secret_name_2876", 2876);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2876", "secret_name_2876", 2876);
  tryToAddExistingDependabotOrgSecretSelectedRepository("org_2876", "secret_name_2876", 2876);
  verifyDependabotOrgSecretSelectedRepositoryExists("org_2876", "secret_name_2876", 2876);
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
  let org = "org_2880";
  let secret_name = "secret_name_2880";
  verifyDependabotOrgSecretSelectedRepositoriesExists("org_2880", "secret_name_2880");
});

// Story: crud:DependabotOrgSecrets:read_only
bthread("crud:DependabotOrgSecrets:read_only", function () {
  let org = "org_2890";
  verifyDependabotOrgSecretsExists("org_2890");
});

// Story: crud:DependabotOrgPublicKey:read_only
bthread("crud:DependabotOrgPublicKey:read_only", function () {
  let org = "org_2900";
  verifyDependabotOrgPublicKeyExists("org_2900");
});

// Story: crud:DependabotRepoSecret:nondet:1:1
bthread("crud:DependabotRepoSecret:nondet:1:1", function () {
  let owner = "owner_2910";
  let repo = "repo_2910";
  let secret_name = "secret_name_2910";
  createOrUpdateRepoSecret("owner_2910", "repo_2910", "secret_name_2910");
  tryToAddExistingDependabotRepoSecret("owner_2910", "repo_2910", "secret_name_2910");
  verifyDependabotRepoSecretExists("owner_2910", "repo_2910", "secret_name_2910");
  deleteRepoSecret("owner_2910", "repo_2910", "secret_name_2910");
  tryToDeleteANonExistingDependabotRepoSecret("owner_2910", "repo_2910", "secret_name_2910");
  verifyDependabotRepoSecretDoesNotExist("owner_2910", "repo_2910", "secret_name_2910");
});

// Story: crud:DependabotRepoSecret:nondet:1:2
bthread("crud:DependabotRepoSecret:nondet:1:2", function () {
  let owner = "owner_2911";
  let repo = "repo_2911";
  let secret_name = "secret_name_2911";
  createOrUpdateRepoSecret("owner_2911", "repo_2911", "secret_name_2911");
  tryToAddExistingDependabotRepoSecret("owner_2911", "repo_2911", "secret_name_2911");
  verifyDependabotRepoSecretExists("owner_2911", "repo_2911", "secret_name_2911");
  deleteRepoSecret("owner_2911", "repo_2911", "secret_name_2911");
  tryToDeleteANonExistingDependabotRepoSecret("owner_2911", "repo_2911", "secret_name_2911");
  verifyDependabotRepoSecretDoesNotExist("owner_2911", "repo_2911", "secret_name_2911");
});

// Story: crud:DependabotRepoSecret:nondet:negative:dup-add
bthread("crud:DependabotRepoSecret:nondet:negative:dup-add", function () {
  let owner = "owner_2916";
  let repo = "repo_2916";
  let secret_name = "secret_name_2916";
  createOrUpdateRepoSecret("owner_2916", "repo_2916", "secret_name_2916");
  verifyDependabotRepoSecretExists("owner_2916", "repo_2916", "secret_name_2916");
  tryToAddExistingDependabotRepoSecret("owner_2916", "repo_2916", "secret_name_2916");
  verifyDependabotRepoSecretExists("owner_2916", "repo_2916", "secret_name_2916");
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
  let owner = "owner_2920";
  let repo = "repo_2920";
  verifyDependabotRepoSecretsExists("owner_2920", "repo_2920");
});

// Story: crud:DependabotRepoPublicKey:read_only
bthread("crud:DependabotRepoPublicKey:read_only", function () {
  let owner = "owner_2930";
  let repo = "repo_2930";
  verifyDependabotRepoPublicKeyExists("owner_2930", "repo_2930");
});

// Story: crud:Project:read_only
bthread("crud:Project:read_only", function () {
  let project_id = 2940;
  let name = "name_2940";
  let body = "body_2940";
  let state = "state_2940";
  let organization_permission = "organization_permission_2940";
  let private = "private_2940";
  verifyProjectExists(2940, "name_2940", "body_2940", "state_2940", "organization_permission_2940", "private_2940");
});

// Story: crud:ProjectField:read_only
bthread("crud:ProjectField:read_only", function () {
  let org = "org_2950";
  let project_number = "project_number_2950";
  let field_id = 2950;
  verifyProjectFieldExists("org_2950", "project_number_2950", 2950);
});

// Story: crud:ProjectItem:nondet:1:1
bthread("crud:ProjectItem:nondet:1:1", function () {
  let org = "org_2960";
  let project_number = "project_number_2960";
  let item_id = 2960;
  addOrgProjectItem("org_2960", "project_number_2960", 2960);
  tryToAddExistingProjectItem("org_2960", "project_number_2960", 2960);
  verifyProjectItemExists("org_2960", "project_number_2960", 2960);
  updateOrgProjectItem("org_2960", "project_number_2960", 2960);
  deleteOrgProjectItem("org_2960", "project_number_2960", 2960);
  tryToDeleteANonExistingProjectItem("org_2960", "project_number_2960", 2960);
  verifyProjectItemDoesNotExist("org_2960", "project_number_2960", 2960);
});

// Story: crud:ProjectItem:nondet:1:2
bthread("crud:ProjectItem:nondet:1:2", function () {
  let org = "org_2961";
  let project_number = "project_number_2961";
  let item_id = 2961;
  addOrgProjectItem("org_2961", "project_number_2961", 2961);
  tryToAddExistingProjectItem("org_2961", "project_number_2961", 2961);
  updateOrgProjectItem("org_2961", "project_number_2961", 2961);
  verifyProjectItemExists("org_2961", "project_number_2961", 2961);
  deleteOrgProjectItem("org_2961", "project_number_2961", 2961);
  tryToDeleteANonExistingProjectItem("org_2961", "project_number_2961", 2961);
  verifyProjectItemDoesNotExist("org_2961", "project_number_2961", 2961);
});

// Story: crud:ProjectItem:nondet:negative:dup-add
bthread("crud:ProjectItem:nondet:negative:dup-add", function () {
  let org = "org_2966";
  let project_number = "project_number_2966";
  let item_id = 2966;
  addOrgProjectItem("org_2966", "project_number_2966", 2966);
  verifyProjectItemExists("org_2966", "project_number_2966", 2966);
  tryToAddExistingProjectItem("org_2966", "project_number_2966", 2966);
  verifyProjectItemExists("org_2966", "project_number_2966", 2966);
});

// Story: crud:ProjectItem:nondet:existing:update
bthread("crud:ProjectItem:nondet:existing:update", function () {
  let ev = waitForAnyProjectItemAdded();
  let args = Object.values(ev);
  block(matchDeletedProjectItem.apply(null, args), function () {
    verifyProjectItemExists.apply(null, args);
    updateOrgProjectItem.apply(null, args);
    verifyProjectItemExists.apply(null, args);
  });
});

// Story: monitor:ProjectItem:add
bthread("monitor:ProjectItem:add", function () {
  while (true) {
    let ev = waitForAnyProjectItemAdded();
    let args = Object.values(ev);
    block(matchDeletedProjectItem.apply(null, args), function () {
      verifyProjectItemExists.apply(null, args);
    });
  }
});

// Story: crud:UserProject:read_only
bthread("crud:UserProject:read_only", function () {
  let username = "username_2970";
  let project_number = "project_number_2970";
  let name = "name_2970";
  verifyUserProjectExists("username_2970", "project_number_2970", "name_2970");
});

// Story: crud:UserProjectField:read_only
bthread("crud:UserProjectField:read_only", function () {
  let username = "username_2980";
  let project_number = "project_number_2980";
  let field_id = 2980;
  verifyUserProjectFieldExists("username_2980", "project_number_2980", 2980);
});

// Story: crud:UserProjectItem:nondet:1:1
bthread("crud:UserProjectItem:nondet:1:1", function () {
  let username = "username_2990";
  let project_number = "project_number_2990";
  let item_id = 2990;
  addUserProjectItem("username_2990", "project_number_2990", 2990);
  tryToAddExistingUserProjectItem("username_2990", "project_number_2990", 2990);
  verifyUserProjectItemExists("username_2990", "project_number_2990", 2990);
  updateUserProjectItem("username_2990", "project_number_2990", 2990);
  deleteUserProjectItem("username_2990", "project_number_2990", 2990);
  tryToDeleteANonExistingUserProjectItem("username_2990", "project_number_2990", 2990);
  verifyUserProjectItemDoesNotExist("username_2990", "project_number_2990", 2990);
});

// Story: crud:UserProjectItem:nondet:1:2
bthread("crud:UserProjectItem:nondet:1:2", function () {
  let username = "username_2991";
  let project_number = "project_number_2991";
  let item_id = 2991;
  addUserProjectItem("username_2991", "project_number_2991", 2991);
  tryToAddExistingUserProjectItem("username_2991", "project_number_2991", 2991);
  updateUserProjectItem("username_2991", "project_number_2991", 2991);
  verifyUserProjectItemExists("username_2991", "project_number_2991", 2991);
  deleteUserProjectItem("username_2991", "project_number_2991", 2991);
  tryToDeleteANonExistingUserProjectItem("username_2991", "project_number_2991", 2991);
  verifyUserProjectItemDoesNotExist("username_2991", "project_number_2991", 2991);
});

// Story: crud:UserProjectItem:nondet:negative:dup-add
bthread("crud:UserProjectItem:nondet:negative:dup-add", function () {
  let username = "username_2996";
  let project_number = "project_number_2996";
  let item_id = 2996;
  addUserProjectItem("username_2996", "project_number_2996", 2996);
  verifyUserProjectItemExists("username_2996", "project_number_2996", 2996);
  tryToAddExistingUserProjectItem("username_2996", "project_number_2996", 2996);
  verifyUserProjectItemExists("username_2996", "project_number_2996", 2996);
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
  let owner = "owner_3000";
  let repo = "repo_3000";
  let content = "content_3000";
  let encoding = "encoding_3000";
  let file_sha = "file_sha_3000";
  verifyBlobExists("owner_3000", "repo_3000", "content_3000", "encoding_3000", "file_sha_3000");
});

// Story: crud:Commit:read_only
bthread("crud:Commit:read_only", function () {
  let owner = "owner_3010";
  let repo = "repo_3010";
  let message = "message_3010";
  let tree = "tree_3010";
  let parents = "parents_3010";
  let author = "author_3010";
  let committer = "committer_3010";
  let signature = "signature_3010";
  let commit_sha = "commit_sha_3010";
  verifyCommitExists("owner_3010", "repo_3010", "message_3010", "tree_3010", "parents_3010", "author_3010", "committer_3010", "signature_3010", "commit_sha_3010");
});

// Story: crud:Reference:nondet:1:1
bthread("crud:Reference:nondet:1:1", function () {
  let owner = "owner_3020";
  let repo = "repo_3020";
  let ref = "ref_3020";
  let sha = "sha_3020";
  let force = "force_3020";
  createRef("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
  tryToAddExistingReference("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
  verifyReferenceExists("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
  updateRef("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
  deleteRef("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
  tryToDeleteANonExistingReference("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
  verifyReferenceDoesNotExist("owner_3020", "repo_3020", "ref_3020", "sha_3020", "force_3020");
});

// Story: crud:Reference:nondet:1:2
bthread("crud:Reference:nondet:1:2", function () {
  let owner = "owner_3021";
  let repo = "repo_3021";
  let ref = "ref_3021";
  let sha = "sha_3021";
  let force = "force_3021";
  createRef("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
  tryToAddExistingReference("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
  updateRef("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
  verifyReferenceExists("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
  deleteRef("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
  tryToDeleteANonExistingReference("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
  verifyReferenceDoesNotExist("owner_3021", "repo_3021", "ref_3021", "sha_3021", "force_3021");
});

// Story: crud:Reference:nondet:negative:dup-add
bthread("crud:Reference:nondet:negative:dup-add", function () {
  let owner = "owner_3026";
  let repo = "repo_3026";
  let ref = "ref_3026";
  let sha = "sha_3026";
  let force = "force_3026";
  createRef("owner_3026", "repo_3026", "ref_3026", "sha_3026", "force_3026");
  verifyReferenceExists("owner_3026", "repo_3026", "ref_3026", "sha_3026", "force_3026");
  tryToAddExistingReference("owner_3026", "repo_3026", "ref_3026", "sha_3026", "force_3026");
  verifyReferenceExists("owner_3026", "repo_3026", "ref_3026", "sha_3026", "force_3026");
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
  let owner = "owner_3030";
  let repo = "repo_3030";
  let tag = "tag_3030";
  let message = "message_3030";
  let object = "object_3030";
  let type = "type_3030";
  let tagger = "tagger_3030";
  let tag_sha = "tag_sha_3030";
  verifyTagExists("owner_3030", "repo_3030", "tag_3030", "message_3030", "object_3030", "type_3030", "tagger_3030", "tag_sha_3030");
});

// Story: crud:Tree:read_only
bthread("crud:Tree:read_only", function () {
  let owner = "owner_3040";
  let repo = "repo_3040";
  let tree = "tree_3040";
  let base_tree = "base_tree_3040";
  let tree_sha = "tree_sha_3040";
  let recursive = "recursive_3040";
  verifyTreeExists("owner_3040", "repo_3040", "tree_3040", "base_tree_3040", "tree_sha_3040", "recursive_3040");
});

// Story: crud:Gist:nondet:1:1
bthread("crud:Gist:nondet:1:1", function () {
  let description = "description_3050";
  let gist_id = 3050;
  createGist("description_3050", 3050);
  tryToAddExistingGist("description_3050", 3050);
  verifyGistExists("description_3050", 3050);
  updateGist("description_3050", 3050);
  deleteGist("description_3050", 3050);
  tryToDeleteANonExistingGist("description_3050", 3050);
  verifyGistDoesNotExist("description_3050", 3050);
});

// Story: crud:Gist:nondet:1:2
bthread("crud:Gist:nondet:1:2", function () {
  let description = "description_3051";
  let gist_id = 3051;
  createGist("description_3051", 3051);
  tryToAddExistingGist("description_3051", 3051);
  updateGist("description_3051", 3051);
  verifyGistExists("description_3051", 3051);
  deleteGist("description_3051", 3051);
  tryToDeleteANonExistingGist("description_3051", 3051);
  verifyGistDoesNotExist("description_3051", 3051);
});

// Story: crud:Gist:nondet:negative:dup-add
bthread("crud:Gist:nondet:negative:dup-add", function () {
  let description = "description_3056";
  let gist_id = 3056;
  createGist("description_3056", 3056);
  verifyGistExists("description_3056", 3056);
  tryToAddExistingGist("description_3056", 3056);
  verifyGistExists("description_3056", 3056);
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
  let gist_id = 3060;
  let body = "body_3060";
  let comment_id = 3060;
  createGistComment(3060, "body_3060", 3060);
  tryToAddExistingGistComment(3060, "body_3060", 3060);
  verifyGistCommentExists(3060, "body_3060", 3060);
  updateGistComment(3060, "body_3060", 3060);
  deleteGistComment(3060, "body_3060", 3060);
  tryToDeleteANonExistingGistComment(3060, "body_3060", 3060);
  verifyGistCommentDoesNotExist(3060, "body_3060", 3060);
});

// Story: crud:GistComment:nondet:1:2
bthread("crud:GistComment:nondet:1:2", function () {
  let gist_id = 3061;
  let body = "body_3061";
  let comment_id = 3061;
  createGistComment(3061, "body_3061", 3061);
  tryToAddExistingGistComment(3061, "body_3061", 3061);
  updateGistComment(3061, "body_3061", 3061);
  verifyGistCommentExists(3061, "body_3061", 3061);
  deleteGistComment(3061, "body_3061", 3061);
  tryToDeleteANonExistingGistComment(3061, "body_3061", 3061);
  verifyGistCommentDoesNotExist(3061, "body_3061", 3061);
});

// Story: crud:GistComment:nondet:negative:dup-add
bthread("crud:GistComment:nondet:negative:dup-add", function () {
  let gist_id = 3066;
  let body = "body_3066";
  let comment_id = 3066;
  createGistComment(3066, "body_3066", 3066);
  verifyGistCommentExists(3066, "body_3066", 3066);
  tryToAddExistingGistComment(3066, "body_3066", 3066);
  verifyGistCommentExists(3066, "body_3066", 3066);
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

// Story: crud:OrganizationProject:read_only
bthread("crud:OrganizationProject:read_only", function () {
  let org = "org_3070";
  let name = "name_3070";
  verifyOrganizationProjectExists("org_3070", "name_3070");
});

// Story: crud:ProjectColumn:read_only
bthread("crud:ProjectColumn:read_only", function () {
  let column_id = 3080;
  let name = "name_3080";
  let position = "position_3080";
  verifyProjectColumnExists(3080, "name_3080", "position_3080");
});

// Story: crud:ProjectCollaborator:nondet:1:1
bthread("crud:ProjectCollaborator:nondet:1:1", function () {
  let project_id = 3090;
  let username = "username_3090";
  let permission = "permission_3090";
  addProjectCollaborator(3090, "username_3090", "permission_3090");
  tryToAddExistingProjectCollaborator(3090, "username_3090", "permission_3090");
  verifyProjectCollaboratorExists(3090, "username_3090", "permission_3090");
  removeProjectCollaborator(3090, "username_3090", "permission_3090");
  tryToDeleteANonExistingProjectCollaborator(3090, "username_3090", "permission_3090");
  verifyProjectCollaboratorDoesNotExist(3090, "username_3090", "permission_3090");
});

// Story: crud:ProjectCollaborator:nondet:1:2
bthread("crud:ProjectCollaborator:nondet:1:2", function () {
  let project_id = 3091;
  let username = "username_3091";
  let permission = "permission_3091";
  addProjectCollaborator(3091, "username_3091", "permission_3091");
  tryToAddExistingProjectCollaborator(3091, "username_3091", "permission_3091");
  verifyProjectCollaboratorExists(3091, "username_3091", "permission_3091");
  removeProjectCollaborator(3091, "username_3091", "permission_3091");
  tryToDeleteANonExistingProjectCollaborator(3091, "username_3091", "permission_3091");
  verifyProjectCollaboratorDoesNotExist(3091, "username_3091", "permission_3091");
});

// Story: crud:ProjectCollaborator:nondet:negative:dup-add
bthread("crud:ProjectCollaborator:nondet:negative:dup-add", function () {
  let project_id = 3096;
  let username = "username_3096";
  let permission = "permission_3096";
  addProjectCollaborator(3096, "username_3096", "permission_3096");
  verifyProjectCollaboratorExists(3096, "username_3096", "permission_3096");
  tryToAddExistingProjectCollaborator(3096, "username_3096", "permission_3096");
  verifyProjectCollaboratorExists(3096, "username_3096", "permission_3096");
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

// Story: crud:ProjectColumnCollection:read_only
bthread("crud:ProjectColumnCollection:read_only", function () {
  let project_id = 3100;
  let name = "name_3100";
  verifyProjectColumnCollectionExists(3100, "name_3100");
});

// Story: crud:RepositoryProject:read_only
bthread("crud:RepositoryProject:read_only", function () {
  let owner = "owner_3110";
  let repo = "repo_3110";
  let name = "name_3110";
  verifyRepositoryProjectExists("owner_3110", "repo_3110", "name_3110");
});

// Story: crud:UserProjects:read_only
bthread("crud:UserProjects:read_only", function () {
  let username = "username_3120";
  verifyUserProjectsExists("username_3120");
});

// Story: crud:CheckRun:read_only
bthread("crud:CheckRun:read_only", function () {
  let owner = "owner_3130";
  let repo = "repo_3130";
  let name = "name_3130";
  let head_sha = "head_sha_3130";
  let check_run_id = 3130;
  verifyCheckRunExists("owner_3130", "repo_3130", "name_3130", "head_sha_3130", 3130);
});

// Story: crud:CheckRunAnnotation:read_only
bthread("crud:CheckRunAnnotation:read_only", function () {
  let owner = "owner_3140";
  let repo = "repo_3140";
  let check_run_id = 3140;
  verifyCheckRunAnnotationExists("owner_3140", "repo_3140", 3140);
});

// Story: crud:CheckSuite:read_only
bthread("crud:CheckSuite:read_only", function () {
  let owner = "owner_3160";
  let repo = "repo_3160";
  let head_sha = "head_sha_3160";
  let check_suite_id = 3160;
  verifyCheckSuiteExists("owner_3160", "repo_3160", "head_sha_3160", 3160);
});

// Story: crud:CheckSuiteCheckRuns:read_only
bthread("crud:CheckSuiteCheckRuns:read_only", function () {
  let owner = "owner_3170";
  let repo = "repo_3170";
  let check_suite_id = 3170;
  verifyCheckSuiteCheckRunsExists("owner_3170", "repo_3170", 3170);
});

// Story: crud:OrganizationBilling:read_only
bthread("crud:OrganizationBilling:read_only", function () {
  let org = "org_3190";
  let year = "year_3190";
  let month = "month_3190";
  let day = "day_3190";
  let hour = "hour_3190";
  verifyOrganizationBillingExists("org_3190", "year_3190", "month_3190", "day_3190", "hour_3190");
});

// Story: crud:OrganizationBillingPremiumRequestUsage:read_only
bthread("crud:OrganizationBillingPremiumRequestUsage:read_only", function () {
  let org = "org_3200";
  let year = "year_3200";
  let month = "month_3200";
  let day = "day_3200";
  let user = "user_3200";
  let model = "model_3200";
  let product = "product_3200";
  verifyOrganizationBillingPremiumRequestUsageExists("org_3200", "year_3200", "month_3200", "day_3200", "user_3200", "model_3200", "product_3200");
});

// Story: crud:OrganizationBillingActions:read_only
bthread("crud:OrganizationBillingActions:read_only", function () {
  let org = "org_3210";
  verifyOrganizationBillingActionsExists("org_3210");
});

// Story: crud:OrganizationBillingPackages:read_only
bthread("crud:OrganizationBillingPackages:read_only", function () {
  let org = "org_3220";
  verifyOrganizationBillingPackagesExists("org_3220");
});

// Story: crud:OrganizationBillingSharedStorage:read_only
bthread("crud:OrganizationBillingSharedStorage:read_only", function () {
  let org = "org_3230";
  verifyOrganizationBillingSharedStorageExists("org_3230");
});

// Story: crud:UserBillingActions:read_only
bthread("crud:UserBillingActions:read_only", function () {
  let username = "username_3240";
  verifyUserBillingActionsExists("username_3240");
});

// Story: crud:UserBillingPackages:read_only
bthread("crud:UserBillingPackages:read_only", function () {
  let username = "username_3250";
  verifyUserBillingPackagesExists("username_3250");
});

// Story: crud:UserBillingPremiumRequestUsage:read_only
bthread("crud:UserBillingPremiumRequestUsage:read_only", function () {
  let username = "username_3260";
  let year = "year_3260";
  let month = "month_3260";
  let day = "day_3260";
  let model = "model_3260";
  let product = "product_3260";
  verifyUserBillingPremiumRequestUsageExists("username_3260", "year_3260", "month_3260", "day_3260", "model_3260", "product_3260");
});

// Story: crud:UserBillingSharedStorage:read_only
bthread("crud:UserBillingSharedStorage:read_only", function () {
  let username = "username_3270";
  verifyUserBillingSharedStorageExists("username_3270");
});

// Story: crud:UserBillingUsage:read_only
bthread("crud:UserBillingUsage:read_only", function () {
  let username = "username_3280";
  let year = "year_3280";
  let month = "month_3280";
  let day = "day_3280";
  let hour = "hour_3280";
  verifyUserBillingUsageExists("username_3280", "year_3280", "month_3280", "day_3280", "hour_3280");
});

// Story: crud:SecurityAdvisory:read_only
bthread("crud:SecurityAdvisory:read_only", function () {
  let ghsa_id = 3290;
  verifySecurityAdvisoryExists(3290);
});

// Story: crud:RepositorySecurityAdvisory:read_only
bthread("crud:RepositorySecurityAdvisory:read_only", function () {
  let owner = "owner_3310";
  let repo = "repo_3310";
  let summary = "summary_3310";
  let ghsa_id = 3310;
  verifyRepositorySecurityAdvisoryExists("owner_3310", "repo_3310", "summary_3310", 3310);
});

// Story: crud:SecretScanningAlert:read_only
bthread("crud:SecretScanningAlert:read_only", function () {
  let owner = "owner_3350";
  let repo = "repo_3350";
  let alert_number = "alert_number_3350";
  verifySecretScanningAlertExists("owner_3350", "repo_3350", "alert_number_3350");
});

// Story: crud:SecretScanningAlerts:read_only
bthread("crud:SecretScanningAlerts:read_only", function () {
  let owner = "owner_3360";
  let repo = "repo_3360";
  verifySecretScanningAlertsExists("owner_3360", "repo_3360");
});

// Story: crud:EnterpriseSecretScanningAlerts:read_only
bthread("crud:EnterpriseSecretScanningAlerts:read_only", function () {
  let enterprise = "enterprise_3370";
  verifyEnterpriseSecretScanningAlertsExists("enterprise_3370");
});

// Story: crud:OrgSecretScanningAlerts:read_only
bthread("crud:OrgSecretScanningAlerts:read_only", function () {
  let org = "org_3380";
  verifyOrgSecretScanningAlertsExists("org_3380");
});

// Story: crud:OrgPatternConfigurations:read_only
bthread("crud:OrgPatternConfigurations:read_only", function () {
  let org = "org_3390";
  verifyOrgPatternConfigurationsExists("org_3390");
});

// Story: crud:SecretScanningAlertLocations:read_only
bthread("crud:SecretScanningAlertLocations:read_only", function () {
  let owner = "owner_3400";
  let repo = "repo_3400";
  let alert_number = "alert_number_3400";
  verifySecretScanningAlertLocationsExists("owner_3400", "repo_3400", "alert_number_3400");
});

// Story: crud:SecretScanningScanHistory:read_only
bthread("crud:SecretScanningScanHistory:read_only", function () {
  let owner = "owner_3420";
  let repo = "repo_3420";
  verifySecretScanningScanHistoryExists("owner_3420", "repo_3420");
});

// Story: crud:CopilotBilling:read_only
bthread("crud:CopilotBilling:read_only", function () {
  let org = "org_3430";
  verifyCopilotBillingExists("org_3430");
});

// Story: crud:CopilotSeats:read_only
bthread("crud:CopilotSeats:read_only", function () {
  let org = "org_3440";
  verifyCopilotSeatsExists("org_3440");
});

// Story: crud:CopilotSelectedTeams:nondet:1:1
bthread("crud:CopilotSelectedTeams:nondet:1:1", function () {
  let org = "org_3450";
  let selected_teams = "selected_teams_3450";
  addCopilotSeatsForTeams("org_3450", "selected_teams_3450");
  tryToAddExistingCopilotSelectedTeams("org_3450", "selected_teams_3450");
  verifyCopilotSelectedTeamsExists("org_3450", "selected_teams_3450");
  removeCopilotSeatsForTeams("org_3450", "selected_teams_3450");
  tryToDeleteANonExistingCopilotSelectedTeams("org_3450", "selected_teams_3450");
  verifyCopilotSelectedTeamsDoesNotExist("org_3450", "selected_teams_3450");
});

// Story: crud:CopilotSelectedTeams:nondet:1:2
bthread("crud:CopilotSelectedTeams:nondet:1:2", function () {
  let org = "org_3451";
  let selected_teams = "selected_teams_3451";
  addCopilotSeatsForTeams("org_3451", "selected_teams_3451");
  tryToAddExistingCopilotSelectedTeams("org_3451", "selected_teams_3451");
  verifyCopilotSelectedTeamsExists("org_3451", "selected_teams_3451");
  removeCopilotSeatsForTeams("org_3451", "selected_teams_3451");
  tryToDeleteANonExistingCopilotSelectedTeams("org_3451", "selected_teams_3451");
  verifyCopilotSelectedTeamsDoesNotExist("org_3451", "selected_teams_3451");
});

// Story: crud:CopilotSelectedTeams:nondet:negative:dup-add
bthread("crud:CopilotSelectedTeams:nondet:negative:dup-add", function () {
  let org = "org_3456";
  let selected_teams = "selected_teams_3456";
  addCopilotSeatsForTeams("org_3456", "selected_teams_3456");
  verifyCopilotSelectedTeamsExists("org_3456", "selected_teams_3456");
  tryToAddExistingCopilotSelectedTeams("org_3456", "selected_teams_3456");
  verifyCopilotSelectedTeamsExists("org_3456", "selected_teams_3456");
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
  let org = "org_3460";
  let selected_usernames = "selected_usernames_3460";
  addCopilotSeatsForUsers("org_3460", "selected_usernames_3460");
  tryToAddExistingCopilotSelectedUsers("org_3460", "selected_usernames_3460");
  verifyCopilotSelectedUsersExists("org_3460", "selected_usernames_3460");
  removeCopilotSeatsForUsers("org_3460", "selected_usernames_3460");
  tryToDeleteANonExistingCopilotSelectedUsers("org_3460", "selected_usernames_3460");
  verifyCopilotSelectedUsersDoesNotExist("org_3460", "selected_usernames_3460");
});

// Story: crud:CopilotSelectedUsers:nondet:1:2
bthread("crud:CopilotSelectedUsers:nondet:1:2", function () {
  let org = "org_3461";
  let selected_usernames = "selected_usernames_3461";
  addCopilotSeatsForUsers("org_3461", "selected_usernames_3461");
  tryToAddExistingCopilotSelectedUsers("org_3461", "selected_usernames_3461");
  verifyCopilotSelectedUsersExists("org_3461", "selected_usernames_3461");
  removeCopilotSeatsForUsers("org_3461", "selected_usernames_3461");
  tryToDeleteANonExistingCopilotSelectedUsers("org_3461", "selected_usernames_3461");
  verifyCopilotSelectedUsersDoesNotExist("org_3461", "selected_usernames_3461");
});

// Story: crud:CopilotSelectedUsers:nondet:negative:dup-add
bthread("crud:CopilotSelectedUsers:nondet:negative:dup-add", function () {
  let org = "org_3466";
  let selected_usernames = "selected_usernames_3466";
  addCopilotSeatsForUsers("org_3466", "selected_usernames_3466");
  verifyCopilotSelectedUsersExists("org_3466", "selected_usernames_3466");
  tryToAddExistingCopilotSelectedUsers("org_3466", "selected_usernames_3466");
  verifyCopilotSelectedUsersExists("org_3466", "selected_usernames_3466");
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
  let org = "org_3470";
  let since = "since_3470";
  let until = "until_3470";
  let page = "page_3470";
  let per_page = "per_page_3470";
  verifyCopilotMetricsOrganizationExists("org_3470", "since_3470", "until_3470", "page_3470", "per_page_3470");
});

// Story: crud:CopilotSeatAssignmentUser:read_only
bthread("crud:CopilotSeatAssignmentUser:read_only", function () {
  let org = "org_3480";
  let username = "username_3480";
  verifyCopilotSeatAssignmentUserExists("org_3480", "username_3480");
});

// Story: crud:CopilotMetricsTeam:read_only
bthread("crud:CopilotMetricsTeam:read_only", function () {
  let org = "org_3490";
  let team_slug = "team_slug_3490";
  let since = "since_3490";
  let until = "until_3490";
  let page = "page_3490";
  let per_page = "per_page_3490";
  verifyCopilotMetricsTeamExists("org_3490", "team_slug_3490", "since_3490", "until_3490", "page_3490", "per_page_3490");
});

// Story: crud:CodeSearch:read_only
bthread("crud:CodeSearch:read_only", function () {
  let q = "q_3500";
  verifyCodeSearchExists("q_3500");
});

// Story: crud:CommitSearch:read_only
bthread("crud:CommitSearch:read_only", function () {
  let q = "q_3510";
  verifyCommitSearchExists("q_3510");
});

// Story: crud:IssueSearch:read_only
bthread("crud:IssueSearch:read_only", function () {
  let q = "q_3520";
  verifyIssueSearchExists("q_3520");
});

// Story: crud:LabelSearch:read_only
bthread("crud:LabelSearch:read_only", function () {
  let repository_id = 3530;
  let q = "q_3530";
  verifyLabelSearchExists(3530, "q_3530");
});

// Story: crud:RepositorySearch:read_only
bthread("crud:RepositorySearch:read_only", function () {
  let q = "q_3540";
  verifyRepositorySearchExists("q_3540");
});

// Story: crud:TopicSearch:read_only
bthread("crud:TopicSearch:read_only", function () {
  let q = "q_3550";
  verifyTopicSearchExists("q_3550");
});

// Story: crud:UserSearch:read_only
bthread("crud:UserSearch:read_only", function () {
  let q = "q_3560";
  verifyUserSearchExists("q_3560");
});

// Story: crud:Assignment:read_only
bthread("crud:Assignment:read_only", function () {
  let assignment_id = 3570;
  verifyAssignmentExists(3570);
});

// Story: crud:AcceptedAssignment:read_only
bthread("crud:AcceptedAssignment:read_only", function () {
  let assignment_id = 3580;
  verifyAcceptedAssignmentExists(3580);
});

// Story: crud:AssignmentGrades:read_only
bthread("crud:AssignmentGrades:read_only", function () {
  let assignment_id = 3590;
  verifyAssignmentGradesExists(3590);
});

// Story: crud:Classroom:read_only
bthread("crud:Classroom:read_only", function () {
  let classroom_id = 3600;
  verifyClassroomExists(3600);
});

// Story: crud:ClassroomList:read_only
bthread("crud:ClassroomList:read_only", function () {

  verifyClassroomListExists();
});

// Story: crud:ClassroomAssignments:read_only
bthread("crud:ClassroomAssignments:read_only", function () {
  let classroom_id = 3620;
  verifyClassroomAssignmentsExists(3620);
});

// Story: crud:EnterpriseTeamMembership:nondet:1:1
bthread("crud:EnterpriseTeamMembership:nondet:1:1", function () {
  let enterprise = "enterprise_3630";
  let enterprise-team = "enterprise-team_3630";
  let username = "username_3630";
  addTeamMember("enterprise_3630", "enterprise-team_3630", "username_3630");
  tryToAddExistingEnterpriseTeamMembership("enterprise_3630", "enterprise-team_3630", "username_3630");
  verifyEnterpriseTeamMembershipExists("enterprise_3630", "enterprise-team_3630", "username_3630");
  removeTeamMember("enterprise_3630", "enterprise-team_3630", "username_3630");
  tryToDeleteANonExistingEnterpriseTeamMembership("enterprise_3630", "enterprise-team_3630", "username_3630");
  verifyEnterpriseTeamMembershipDoesNotExist("enterprise_3630", "enterprise-team_3630", "username_3630");
});

// Story: crud:EnterpriseTeamMembership:nondet:1:2
bthread("crud:EnterpriseTeamMembership:nondet:1:2", function () {
  let enterprise = "enterprise_3631";
  let enterprise-team = "enterprise-team_3631";
  let username = "username_3631";
  addTeamMember("enterprise_3631", "enterprise-team_3631", "username_3631");
  tryToAddExistingEnterpriseTeamMembership("enterprise_3631", "enterprise-team_3631", "username_3631");
  verifyEnterpriseTeamMembershipExists("enterprise_3631", "enterprise-team_3631", "username_3631");
  removeTeamMember("enterprise_3631", "enterprise-team_3631", "username_3631");
  tryToDeleteANonExistingEnterpriseTeamMembership("enterprise_3631", "enterprise-team_3631", "username_3631");
  verifyEnterpriseTeamMembershipDoesNotExist("enterprise_3631", "enterprise-team_3631", "username_3631");
});

// Story: crud:EnterpriseTeamMembership:nondet:negative:dup-add
bthread("crud:EnterpriseTeamMembership:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_3636";
  let enterprise-team = "enterprise-team_3636";
  let username = "username_3636";
  addTeamMember("enterprise_3636", "enterprise-team_3636", "username_3636");
  verifyEnterpriseTeamMembershipExists("enterprise_3636", "enterprise-team_3636", "username_3636");
  tryToAddExistingEnterpriseTeamMembership("enterprise_3636", "enterprise-team_3636", "username_3636");
  verifyEnterpriseTeamMembershipExists("enterprise_3636", "enterprise-team_3636", "username_3636");
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
  let enterprise = "enterprise_3640";
  let enterprise-team = "enterprise-team_3640";
  let usernames = "usernames_3640";
  bulkAddTeamMembers("enterprise_3640", "enterprise-team_3640", "usernames_3640");
  tryToAddExistingEnterpriseTeamMembershipBulk("enterprise_3640", "enterprise-team_3640", "usernames_3640");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3640", "enterprise-team_3640", "usernames_3640");
  bulkRemoveTeamMembers("enterprise_3640", "enterprise-team_3640", "usernames_3640");
  tryToDeleteANonExistingEnterpriseTeamMembershipBulk("enterprise_3640", "enterprise-team_3640", "usernames_3640");
  verifyEnterpriseTeamMembershipBulkDoesNotExist("enterprise_3640", "enterprise-team_3640", "usernames_3640");
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:1:2
bthread("crud:EnterpriseTeamMembershipBulk:nondet:1:2", function () {
  let enterprise = "enterprise_3641";
  let enterprise-team = "enterprise-team_3641";
  let usernames = "usernames_3641";
  bulkAddTeamMembers("enterprise_3641", "enterprise-team_3641", "usernames_3641");
  tryToAddExistingEnterpriseTeamMembershipBulk("enterprise_3641", "enterprise-team_3641", "usernames_3641");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3641", "enterprise-team_3641", "usernames_3641");
  bulkRemoveTeamMembers("enterprise_3641", "enterprise-team_3641", "usernames_3641");
  tryToDeleteANonExistingEnterpriseTeamMembershipBulk("enterprise_3641", "enterprise-team_3641", "usernames_3641");
  verifyEnterpriseTeamMembershipBulkDoesNotExist("enterprise_3641", "enterprise-team_3641", "usernames_3641");
});

// Story: crud:EnterpriseTeamMembershipBulk:nondet:negative:dup-add
bthread("crud:EnterpriseTeamMembershipBulk:nondet:negative:dup-add", function () {
  let enterprise = "enterprise_3646";
  let enterprise-team = "enterprise-team_3646";
  let usernames = "usernames_3646";
  bulkAddTeamMembers("enterprise_3646", "enterprise-team_3646", "usernames_3646");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3646", "enterprise-team_3646", "usernames_3646");
  tryToAddExistingEnterpriseTeamMembershipBulk("enterprise_3646", "enterprise-team_3646", "usernames_3646");
  verifyEnterpriseTeamMembershipBulkExists("enterprise_3646", "enterprise-team_3646", "usernames_3646");
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
  let enterprise = "enterprise_3650";
  let enterprise-team = "enterprise-team_3650";
  let per-page = "per-page_3650";
  let page = "page_3650";
  verifyEnterpriseTeamMembershipListExists("enterprise_3650", "enterprise-team_3650", "per-page_3650", "page_3650");
});

// Story: crud:License:read_only
bthread("crud:License:read_only", function () {
  let license = "license_3660";
  verifyLicenseExists("license_3660");
});

// Story: crud:RepositoryLicense:read_only
bthread("crud:RepositoryLicense:read_only", function () {
  let owner = "owner_3670";
  let repo = "repo_3670";
  verifyRepositoryLicenseExists("owner_3670", "repo_3670");
});

// Story: crud:OrgInteractionLimit:read_only
bthread("crud:OrgInteractionLimit:read_only", function () {
  let org = "org_3680";
  verifyOrgInteractionLimitExists("org_3680");
});

// Story: crud:RepoInteractionLimit:read_only
bthread("crud:RepoInteractionLimit:read_only", function () {
  let owner = "owner_3690";
  let repo = "repo_3690";
  verifyRepoInteractionLimitExists("owner_3690", "repo_3690");
});

// Story: crud:UserInteractionLimit:read_only
bthread("crud:UserInteractionLimit:read_only", function () {

  verifyUserInteractionLimitExists();
});

// Story: crud:PrivateRegistry:nondet:1:1
bthread("crud:PrivateRegistry:nondet:1:1", function () {
  let org = "org_3710";
  let registry_type = "registry_type_3710";
  let url = "url_3710";
  let username = "username_3710";
  let encrypted_value = "encrypted_value_3710";
  let key_id = 3710;
  let visibility = "visibility_3710";
  let selected_repository_ids = 3710;
  let secret_name = "secret_name_3710";
  createOrgPrivateRegistry("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
  tryToAddExistingPrivateRegistry("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
  verifyPrivateRegistryExists("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
  updateOrgPrivateRegistry("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
  deleteOrgPrivateRegistry("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
  tryToDeleteANonExistingPrivateRegistry("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
  verifyPrivateRegistryDoesNotExist("org_3710", "registry_type_3710", "url_3710", "username_3710", "encrypted_value_3710", 3710, "visibility_3710", 3710, "secret_name_3710");
});

// Story: crud:PrivateRegistry:nondet:1:2
bthread("crud:PrivateRegistry:nondet:1:2", function () {
  let org = "org_3711";
  let registry_type = "registry_type_3711";
  let url = "url_3711";
  let username = "username_3711";
  let encrypted_value = "encrypted_value_3711";
  let key_id = 3711;
  let visibility = "visibility_3711";
  let selected_repository_ids = 3711;
  let secret_name = "secret_name_3711";
  createOrgPrivateRegistry("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
  tryToAddExistingPrivateRegistry("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
  updateOrgPrivateRegistry("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
  verifyPrivateRegistryExists("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
  deleteOrgPrivateRegistry("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
  tryToDeleteANonExistingPrivateRegistry("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
  verifyPrivateRegistryDoesNotExist("org_3711", "registry_type_3711", "url_3711", "username_3711", "encrypted_value_3711", 3711, "visibility_3711", 3711, "secret_name_3711");
});

// Story: crud:PrivateRegistry:nondet:negative:dup-add
bthread("crud:PrivateRegistry:nondet:negative:dup-add", function () {
  let org = "org_3716";
  let registry_type = "registry_type_3716";
  let url = "url_3716";
  let username = "username_3716";
  let encrypted_value = "encrypted_value_3716";
  let key_id = 3716;
  let visibility = "visibility_3716";
  let selected_repository_ids = 3716;
  let secret_name = "secret_name_3716";
  createOrgPrivateRegistry("org_3716", "registry_type_3716", "url_3716", "username_3716", "encrypted_value_3716", 3716, "visibility_3716", 3716, "secret_name_3716");
  verifyPrivateRegistryExists("org_3716", "registry_type_3716", "url_3716", "username_3716", "encrypted_value_3716", 3716, "visibility_3716", 3716, "secret_name_3716");
  tryToAddExistingPrivateRegistry("org_3716", "registry_type_3716", "url_3716", "username_3716", "encrypted_value_3716", 3716, "visibility_3716", 3716, "secret_name_3716");
  verifyPrivateRegistryExists("org_3716", "registry_type_3716", "url_3716", "username_3716", "encrypted_value_3716", 3716, "visibility_3716", 3716, "secret_name_3716");
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
  let org = "org_3720";
  let name = "name_3720";
  let network_configuration_id = 3720;
  createNetworkConfiguration("org_3720", "name_3720", 3720);
  tryToAddExistingNetworkConfiguration("org_3720", "name_3720", 3720);
  verifyNetworkConfigurationExists("org_3720", "name_3720", 3720);
  updateNetworkConfiguration("org_3720", "name_3720", 3720);
  deleteNetworkConfiguration("org_3720", "name_3720", 3720);
  tryToDeleteANonExistingNetworkConfiguration("org_3720", "name_3720", 3720);
  verifyNetworkConfigurationDoesNotExist("org_3720", "name_3720", 3720);
});

// Story: crud:NetworkConfiguration:nondet:1:2
bthread("crud:NetworkConfiguration:nondet:1:2", function () {
  let org = "org_3721";
  let name = "name_3721";
  let network_configuration_id = 3721;
  createNetworkConfiguration("org_3721", "name_3721", 3721);
  tryToAddExistingNetworkConfiguration("org_3721", "name_3721", 3721);
  updateNetworkConfiguration("org_3721", "name_3721", 3721);
  verifyNetworkConfigurationExists("org_3721", "name_3721", 3721);
  deleteNetworkConfiguration("org_3721", "name_3721", 3721);
  tryToDeleteANonExistingNetworkConfiguration("org_3721", "name_3721", 3721);
  verifyNetworkConfigurationDoesNotExist("org_3721", "name_3721", 3721);
});

// Story: crud:NetworkConfiguration:nondet:negative:dup-add
bthread("crud:NetworkConfiguration:nondet:negative:dup-add", function () {
  let org = "org_3726";
  let name = "name_3726";
  let network_configuration_id = 3726;
  createNetworkConfiguration("org_3726", "name_3726", 3726);
  verifyNetworkConfigurationExists("org_3726", "name_3726", 3726);
  tryToAddExistingNetworkConfiguration("org_3726", "name_3726", 3726);
  verifyNetworkConfigurationExists("org_3726", "name_3726", 3726);
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
  let org = "org_3730";
  let network_settings_id = 3730;
  verifyNetworkSettingsExists("org_3730", 3730);
});

// Story: crud:DependencyGraphComparison:read_only
bthread("crud:DependencyGraphComparison:read_only", function () {
  let owner = "owner_3750";
  let repo = "repo_3750";
  let basehead = "basehead_3750";
  verifyDependencyGraphComparisonExists("owner_3750", "repo_3750", "basehead_3750");
});

// Story: crud:DependencyGraphSBOM:read_only
bthread("crud:DependencyGraphSBOM:read_only", function () {
  let owner = "owner_3760";
  let repo = "repo_3760";
  verifyDependencyGraphSBOMExists("owner_3760", "repo_3760");
});

// Story: crud:CodeOfConduct:read_only
bthread("crud:CodeOfConduct:read_only", function () {
  let key = "key_3770";
  verifyCodeOfConductExists("key_3770");
});
