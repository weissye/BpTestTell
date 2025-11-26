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
  editRepo("name_200", "owner_200", "repo_200");
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
  editRepo("name_201", "owner_201", "repo_201");
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
    editRepo.apply(null, args);
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

// Story: crud:RepositorySecret:nondet:1:1
bthread("crud:RepositorySecret:nondet:1:1", function () {
  let owner = "owner_210";
  let repo = "repo_210";
  let secretname = "secretname_210";
  updateRepoSecret("owner_210", "repo_210", "secretname_210");
  tryToAddExistingRepositorySecret("owner_210", "repo_210", "secretname_210");
  verifyRepositorySecretExists("owner_210", "repo_210", "secretname_210");
  deleteRepoSecret("owner_210", "repo_210", "secretname_210");
  tryToDeleteANonExistingRepositorySecret("owner_210", "repo_210", "secretname_210");
  verifyRepositorySecretDoesNotExist("owner_210", "repo_210", "secretname_210");
});

// Story: crud:RepositorySecret:nondet:1:2
bthread("crud:RepositorySecret:nondet:1:2", function () {
  let owner = "owner_211";
  let repo = "repo_211";
  let secretname = "secretname_211";
  updateRepoSecret("owner_211", "repo_211", "secretname_211");
  tryToAddExistingRepositorySecret("owner_211", "repo_211", "secretname_211");
  verifyRepositorySecretExists("owner_211", "repo_211", "secretname_211");
  deleteRepoSecret("owner_211", "repo_211", "secretname_211");
  tryToDeleteANonExistingRepositorySecret("owner_211", "repo_211", "secretname_211");
  verifyRepositorySecretDoesNotExist("owner_211", "repo_211", "secretname_211");
});

// Story: crud:RepositorySecret:nondet:negative:dup-add
bthread("crud:RepositorySecret:nondet:negative:dup-add", function () {
  let owner = "owner_216";
  let repo = "repo_216";
  let secretname = "secretname_216";
  updateRepoSecret("owner_216", "repo_216", "secretname_216");
  verifyRepositorySecretExists("owner_216", "repo_216", "secretname_216");
  tryToAddExistingRepositorySecret("owner_216", "repo_216", "secretname_216");
  verifyRepositorySecretExists("owner_216", "repo_216", "secretname_216");
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
  let owner = "owner_220";
  let repo = "repo_220";
  let variablename = "variablename_220";
  createRepoVariable("owner_220", "repo_220", "variablename_220");
  tryToAddExistingRepositoryVariable("owner_220", "repo_220", "variablename_220");
  verifyRepositoryVariableExists("owner_220", "repo_220", "variablename_220");
  updateRepoVariable("owner_220", "repo_220", "variablename_220");
  deleteRepoVariable("owner_220", "repo_220", "variablename_220");
  tryToDeleteANonExistingRepositoryVariable("owner_220", "repo_220", "variablename_220");
  verifyRepositoryVariableDoesNotExist("owner_220", "repo_220", "variablename_220");
});

// Story: crud:RepositoryVariable:nondet:1:2
bthread("crud:RepositoryVariable:nondet:1:2", function () {
  let owner = "owner_221";
  let repo = "repo_221";
  let variablename = "variablename_221";
  createRepoVariable("owner_221", "repo_221", "variablename_221");
  tryToAddExistingRepositoryVariable("owner_221", "repo_221", "variablename_221");
  updateRepoVariable("owner_221", "repo_221", "variablename_221");
  verifyRepositoryVariableExists("owner_221", "repo_221", "variablename_221");
  deleteRepoVariable("owner_221", "repo_221", "variablename_221");
  tryToDeleteANonExistingRepositoryVariable("owner_221", "repo_221", "variablename_221");
  verifyRepositoryVariableDoesNotExist("owner_221", "repo_221", "variablename_221");
});

// Story: crud:RepositoryVariable:nondet:negative:dup-add
bthread("crud:RepositoryVariable:nondet:negative:dup-add", function () {
  let owner = "owner_226";
  let repo = "repo_226";
  let variablename = "variablename_226";
  createRepoVariable("owner_226", "repo_226", "variablename_226");
  verifyRepositoryVariableExists("owner_226", "repo_226", "variablename_226");
  tryToAddExistingRepositoryVariable("owner_226", "repo_226", "variablename_226");
  verifyRepositoryVariableExists("owner_226", "repo_226", "variablename_226");
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

// Story: crud:BranchProtection:nondet:1:1
bthread("crud:BranchProtection:nondet:1:1", function () {
  let owner = "owner_230";
  let repo = "repo_230";
  let name = "name_230";
  createBranchProtection("owner_230", "repo_230", "name_230");
  tryToAddExistingBranchProtection("owner_230", "repo_230", "name_230");
  verifyBranchProtectionExists("owner_230", "repo_230", "name_230");
  editBranchProtection("owner_230", "repo_230", "name_230");
  deleteBranchProtection("owner_230", "repo_230", "name_230");
  tryToDeleteANonExistingBranchProtection("owner_230", "repo_230", "name_230");
  verifyBranchProtectionDoesNotExist("owner_230", "repo_230", "name_230");
});

// Story: crud:BranchProtection:nondet:1:2
bthread("crud:BranchProtection:nondet:1:2", function () {
  let owner = "owner_231";
  let repo = "repo_231";
  let name = "name_231";
  createBranchProtection("owner_231", "repo_231", "name_231");
  tryToAddExistingBranchProtection("owner_231", "repo_231", "name_231");
  editBranchProtection("owner_231", "repo_231", "name_231");
  verifyBranchProtectionExists("owner_231", "repo_231", "name_231");
  deleteBranchProtection("owner_231", "repo_231", "name_231");
  tryToDeleteANonExistingBranchProtection("owner_231", "repo_231", "name_231");
  verifyBranchProtectionDoesNotExist("owner_231", "repo_231", "name_231");
});

// Story: crud:BranchProtection:nondet:negative:dup-add
bthread("crud:BranchProtection:nondet:negative:dup-add", function () {
  let owner = "owner_236";
  let repo = "repo_236";
  let name = "name_236";
  createBranchProtection("owner_236", "repo_236", "name_236");
  verifyBranchProtectionExists("owner_236", "repo_236", "name_236");
  tryToAddExistingBranchProtection("owner_236", "repo_236", "name_236");
  verifyBranchProtectionExists("owner_236", "repo_236", "name_236");
});

// Story: crud:BranchProtection:nondet:existing:update
bthread("crud:BranchProtection:nondet:existing:update", function () {
  let ev = waitForAnyBranchProtectionAdded();
  let args = Object.values(ev);
  block(matchDeletedBranchProtection.apply(null, args), function () {
    verifyBranchProtectionExists.apply(null, args);
    editBranchProtection.apply(null, args);
    verifyBranchProtectionExists.apply(null, args);
  });
});

// Story: monitor:BranchProtection:add
bthread("monitor:BranchProtection:add", function () {
  while (true) {
    let ev = waitForAnyBranchProtectionAdded();
    let args = Object.values(ev);
    block(matchDeletedBranchProtection.apply(null, args), function () {
      verifyBranchProtectionExists.apply(null, args);
    });
  }
});

// Story: crud:Branch:nondet:1:1
bthread("crud:Branch:nondet:1:1", function () {
  let owner = "owner_240";
  let repo = "repo_240";
  let branch = "branch_240";
  createBranch("owner_240", "repo_240", "branch_240");
  tryToAddExistingBranch("owner_240", "repo_240", "branch_240");
  verifyBranchExists("owner_240", "repo_240", "branch_240");
  updateBranch("owner_240", "repo_240", "branch_240");
  deleteBranch("owner_240", "repo_240", "branch_240");
  tryToDeleteANonExistingBranch("owner_240", "repo_240", "branch_240");
  verifyBranchDoesNotExist("owner_240", "repo_240", "branch_240");
});

// Story: crud:Branch:nondet:1:2
bthread("crud:Branch:nondet:1:2", function () {
  let owner = "owner_241";
  let repo = "repo_241";
  let branch = "branch_241";
  createBranch("owner_241", "repo_241", "branch_241");
  tryToAddExistingBranch("owner_241", "repo_241", "branch_241");
  updateBranch("owner_241", "repo_241", "branch_241");
  verifyBranchExists("owner_241", "repo_241", "branch_241");
  deleteBranch("owner_241", "repo_241", "branch_241");
  tryToDeleteANonExistingBranch("owner_241", "repo_241", "branch_241");
  verifyBranchDoesNotExist("owner_241", "repo_241", "branch_241");
});

// Story: crud:Branch:nondet:negative:dup-add
bthread("crud:Branch:nondet:negative:dup-add", function () {
  let owner = "owner_246";
  let repo = "repo_246";
  let branch = "branch_246";
  createBranch("owner_246", "repo_246", "branch_246");
  verifyBranchExists("owner_246", "repo_246", "branch_246");
  tryToAddExistingBranch("owner_246", "repo_246", "branch_246");
  verifyBranchExists("owner_246", "repo_246", "branch_246");
});

// Story: crud:Branch:nondet:existing:update
bthread("crud:Branch:nondet:existing:update", function () {
  let ev = waitForAnyBranchAdded();
  let args = Object.values(ev);
  block(matchDeletedBranch.apply(null, args), function () {
    verifyBranchExists.apply(null, args);
    updateBranch.apply(null, args);
    verifyBranchExists.apply(null, args);
  });
});

// Story: monitor:Branch:add
bthread("monitor:Branch:add", function () {
  while (true) {
    let ev = waitForAnyBranchAdded();
    let args = Object.values(ev);
    block(matchDeletedBranch.apply(null, args), function () {
      verifyBranchExists.apply(null, args);
    });
  }
});

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let owner = "owner_250";
  let repo = "repo_250";
  let collaborator = "collaborator_250";
  addCollaborator("owner_250", "repo_250", "collaborator_250");
  tryToAddExistingCollaborator("owner_250", "repo_250", "collaborator_250");
  verifyCollaboratorExists("owner_250", "repo_250", "collaborator_250");
  deleteCollaborator("owner_250", "repo_250", "collaborator_250");
  tryToDeleteANonExistingCollaborator("owner_250", "repo_250", "collaborator_250");
  verifyCollaboratorDoesNotExist("owner_250", "repo_250", "collaborator_250");
});

// Story: crud:Collaborator:nondet:1:2
bthread("crud:Collaborator:nondet:1:2", function () {
  let owner = "owner_251";
  let repo = "repo_251";
  let collaborator = "collaborator_251";
  addCollaborator("owner_251", "repo_251", "collaborator_251");
  tryToAddExistingCollaborator("owner_251", "repo_251", "collaborator_251");
  verifyCollaboratorExists("owner_251", "repo_251", "collaborator_251");
  deleteCollaborator("owner_251", "repo_251", "collaborator_251");
  tryToDeleteANonExistingCollaborator("owner_251", "repo_251", "collaborator_251");
  verifyCollaboratorDoesNotExist("owner_251", "repo_251", "collaborator_251");
});

// Story: crud:Collaborator:nondet:negative:dup-add
bthread("crud:Collaborator:nondet:negative:dup-add", function () {
  let owner = "owner_256";
  let repo = "repo_256";
  let collaborator = "collaborator_256";
  addCollaborator("owner_256", "repo_256", "collaborator_256");
  verifyCollaboratorExists("owner_256", "repo_256", "collaborator_256");
  tryToAddExistingCollaborator("owner_256", "repo_256", "collaborator_256");
  verifyCollaboratorExists("owner_256", "repo_256", "collaborator_256");
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

// Story: crud:Hook:nondet:1:1
bthread("crud:Hook:nondet:1:1", function () {
  let id = 260;
  createHook(260);
  tryToAddExistingHook(260);
  verifyHookExists(260);
  updateHook(260);
  deleteHook(260);
  tryToDeleteANonExistingHook(260);
  verifyHookDoesNotExist(260);
});

// Story: crud:Hook:nondet:1:2
bthread("crud:Hook:nondet:1:2", function () {
  let id = 261;
  createHook(261);
  tryToAddExistingHook(261);
  updateHook(261);
  verifyHookExists(261);
  deleteHook(261);
  tryToDeleteANonExistingHook(261);
  verifyHookDoesNotExist(261);
});

// Story: crud:Hook:nondet:negative:dup-add
bthread("crud:Hook:nondet:negative:dup-add", function () {
  let id = 266;
  createHook(266);
  verifyHookExists(266);
  tryToAddExistingHook(266);
  verifyHookExists(266);
});

// Story: crud:Hook:nondet:existing:update
bthread("crud:Hook:nondet:existing:update", function () {
  let ev = waitForAnyHookAdded();
  let args = Object.values(ev);
  block(matchDeletedHook.apply(null, args), function () {
    verifyHookExists.apply(null, args);
    updateHook.apply(null, args);
    verifyHookExists.apply(null, args);
  });
});

// Story: monitor:Hook:add
bthread("monitor:Hook:add", function () {
  while (true) {
    let ev = waitForAnyHookAdded();
    let args = Object.values(ev);
    block(matchDeletedHook.apply(null, args), function () {
      verifyHookExists.apply(null, args);
    });
  }
});

// Story: crud:GitHook:read_only
bthread("crud:GitHook:read_only", function () {
  let owner = "owner_270";
  let repo = "repo_270";
  let id = 270;
  verifyGitHookExists("owner_270", "repo_270", 270);
});

// Story: crud:Key:nondet:1:1
bthread("crud:Key:nondet:1:1", function () {
  let owner = "owner_280";
  let repo = "repo_280";
  let id = 280;
  createKey("owner_280", "repo_280", 280);
  tryToAddExistingKey("owner_280", "repo_280", 280);
  verifyKeyExists("owner_280", "repo_280", 280);
  deleteKey("owner_280", "repo_280", 280);
  tryToDeleteANonExistingKey("owner_280", "repo_280", 280);
  verifyKeyDoesNotExist("owner_280", "repo_280", 280);
});

// Story: crud:Key:nondet:1:2
bthread("crud:Key:nondet:1:2", function () {
  let owner = "owner_281";
  let repo = "repo_281";
  let id = 281;
  createKey("owner_281", "repo_281", 281);
  tryToAddExistingKey("owner_281", "repo_281", 281);
  verifyKeyExists("owner_281", "repo_281", 281);
  deleteKey("owner_281", "repo_281", 281);
  tryToDeleteANonExistingKey("owner_281", "repo_281", 281);
  verifyKeyDoesNotExist("owner_281", "repo_281", 281);
});

// Story: crud:Key:nondet:negative:dup-add
bthread("crud:Key:nondet:negative:dup-add", function () {
  let owner = "owner_286";
  let repo = "repo_286";
  let id = 286;
  createKey("owner_286", "repo_286", 286);
  verifyKeyExists("owner_286", "repo_286", 286);
  tryToAddExistingKey("owner_286", "repo_286", 286);
  verifyKeyExists("owner_286", "repo_286", 286);
});

// Story: monitor:Key:add
bthread("monitor:Key:add", function () {
  while (true) {
    let ev = waitForAnyKeyAdded();
    let args = Object.values(ev);
    block(matchDeletedKey.apply(null, args), function () {
      verifyKeyExists.apply(null, args);
    });
  }
});

// Story: crud:PullRequest:nondet:1:1
bthread("crud:PullRequest:nondet:1:1", function () {
  let owner = "owner_290";
  let repo = "repo_290";
  let index = "index_290";
  createPullRequest("owner_290", "repo_290", "index_290");
  tryToAddExistingPullRequest("owner_290", "repo_290", "index_290");
  verifyPullRequestExists("owner_290", "repo_290", "index_290");
  editPullRequest("owner_290", "repo_290", "index_290");
  cancelScheduledAutoMerge("owner_290", "repo_290", "index_290");
  tryToDeleteANonExistingPullRequest("owner_290", "repo_290", "index_290");
  verifyPullRequestDoesNotExist("owner_290", "repo_290", "index_290");
});

// Story: crud:PullRequest:nondet:1:2
bthread("crud:PullRequest:nondet:1:2", function () {
  let owner = "owner_291";
  let repo = "repo_291";
  let index = "index_291";
  createPullRequest("owner_291", "repo_291", "index_291");
  tryToAddExistingPullRequest("owner_291", "repo_291", "index_291");
  editPullRequest("owner_291", "repo_291", "index_291");
  verifyPullRequestExists("owner_291", "repo_291", "index_291");
  cancelScheduledAutoMerge("owner_291", "repo_291", "index_291");
  tryToDeleteANonExistingPullRequest("owner_291", "repo_291", "index_291");
  verifyPullRequestDoesNotExist("owner_291", "repo_291", "index_291");
});

// Story: crud:PullRequest:nondet:negative:dup-add
bthread("crud:PullRequest:nondet:negative:dup-add", function () {
  let owner = "owner_296";
  let repo = "repo_296";
  let index = "index_296";
  createPullRequest("owner_296", "repo_296", "index_296");
  verifyPullRequestExists("owner_296", "repo_296", "index_296");
  tryToAddExistingPullRequest("owner_296", "repo_296", "index_296");
  verifyPullRequestExists("owner_296", "repo_296", "index_296");
});

// Story: crud:PullRequest:nondet:existing:update
bthread("crud:PullRequest:nondet:existing:update", function () {
  let ev = waitForAnyPullRequestAdded();
  let args = Object.values(ev);
  block(matchDeletedPullRequest.apply(null, args), function () {
    verifyPullRequestExists.apply(null, args);
    editPullRequest.apply(null, args);
    verifyPullRequestExists.apply(null, args);
  });
});

// Story: monitor:PullRequest:add
bthread("monitor:PullRequest:add", function () {
  while (true) {
    let ev = waitForAnyPullRequestAdded();
    let args = Object.values(ev);
    block(matchDeletedPullRequest.apply(null, args), function () {
      verifyPullRequestExists.apply(null, args);
    });
  }
});

// Story: crud:PullRequestReview:nondet:1:1
bthread("crud:PullRequestReview:nondet:1:1", function () {
  let owner = "owner_300";
  let repo = "repo_300";
  let index = "index_300";
  let id = 300;
  createPullReview("owner_300", "repo_300", "index_300", 300);
  tryToAddExistingPullRequestReview("owner_300", "repo_300", "index_300", 300);
  verifyPullRequestReviewExists("owner_300", "repo_300", "index_300", 300);
  deletePullReview("owner_300", "repo_300", "index_300", 300);
  tryToDeleteANonExistingPullRequestReview("owner_300", "repo_300", "index_300", 300);
  verifyPullRequestReviewDoesNotExist("owner_300", "repo_300", "index_300", 300);
});

// Story: crud:PullRequestReview:nondet:1:2
bthread("crud:PullRequestReview:nondet:1:2", function () {
  let owner = "owner_301";
  let repo = "repo_301";
  let index = "index_301";
  let id = 301;
  createPullReview("owner_301", "repo_301", "index_301", 301);
  tryToAddExistingPullRequestReview("owner_301", "repo_301", "index_301", 301);
  verifyPullRequestReviewExists("owner_301", "repo_301", "index_301", 301);
  deletePullReview("owner_301", "repo_301", "index_301", 301);
  tryToDeleteANonExistingPullRequestReview("owner_301", "repo_301", "index_301", 301);
  verifyPullRequestReviewDoesNotExist("owner_301", "repo_301", "index_301", 301);
});

// Story: crud:PullRequestReview:nondet:negative:dup-add
bthread("crud:PullRequestReview:nondet:negative:dup-add", function () {
  let owner = "owner_306";
  let repo = "repo_306";
  let index = "index_306";
  let id = 306;
  createPullReview("owner_306", "repo_306", "index_306", 306);
  verifyPullRequestReviewExists("owner_306", "repo_306", "index_306", 306);
  tryToAddExistingPullRequestReview("owner_306", "repo_306", "index_306", 306);
  verifyPullRequestReviewExists("owner_306", "repo_306", "index_306", 306);
});

// Story: monitor:PullRequestReview:add
bthread("monitor:PullRequestReview:add", function () {
  while (true) {
    let ev = waitForAnyPullRequestReviewAdded();
    let args = Object.values(ev);
    block(matchDeletedPullRequestReview.apply(null, args), function () {
      verifyPullRequestReviewExists.apply(null, args);
    });
  }
});

// Story: crud:PullRequestReviewComment:read_only
bthread("crud:PullRequestReviewComment:read_only", function () {
  let owner = "owner_320";
  let repo = "repo_320";
  let index = "index_320";
  let id = 320;
  verifyPullRequestReviewCommentExists("owner_320", "repo_320", "index_320", 320);
});

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let owner = "owner_330";
  let repo = "repo_330";
  let id = 330;
  createRelease("owner_330", "repo_330", 330);
  tryToAddExistingRelease("owner_330", "repo_330", 330);
  verifyReleaseExists("owner_330", "repo_330", 330);
  editRelease("owner_330", "repo_330", 330);
  deleteRelease("owner_330", "repo_330", 330);
  tryToDeleteANonExistingRelease("owner_330", "repo_330", 330);
  verifyReleaseDoesNotExist("owner_330", "repo_330", 330);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let owner = "owner_331";
  let repo = "repo_331";
  let id = 331;
  createRelease("owner_331", "repo_331", 331);
  tryToAddExistingRelease("owner_331", "repo_331", 331);
  editRelease("owner_331", "repo_331", 331);
  verifyReleaseExists("owner_331", "repo_331", 331);
  deleteRelease("owner_331", "repo_331", 331);
  tryToDeleteANonExistingRelease("owner_331", "repo_331", 331);
  verifyReleaseDoesNotExist("owner_331", "repo_331", 331);
});

// Story: crud:Release:nondet:negative:dup-add
bthread("crud:Release:nondet:negative:dup-add", function () {
  let owner = "owner_336";
  let repo = "repo_336";
  let id = 336;
  createRelease("owner_336", "repo_336", 336);
  verifyReleaseExists("owner_336", "repo_336", 336);
  tryToAddExistingRelease("owner_336", "repo_336", 336);
  verifyReleaseExists("owner_336", "repo_336", 336);
});

// Story: crud:Release:nondet:existing:update
bthread("crud:Release:nondet:existing:update", function () {
  let ev = waitForAnyReleaseAdded();
  let args = Object.values(ev);
  block(matchDeletedRelease.apply(null, args), function () {
    verifyReleaseExists.apply(null, args);
    editRelease.apply(null, args);
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

// Story: crud:ReleaseAttachment:nondet:1:1
bthread("crud:ReleaseAttachment:nondet:1:1", function () {
  let owner = "owner_340";
  let repo = "repo_340";
  let id = 340;
  let attachment_id = 340;
  createReleaseAttachment("owner_340", "repo_340", 340, 340);
  tryToAddExistingReleaseAttachment("owner_340", "repo_340", 340, 340);
  verifyReleaseAttachmentExists("owner_340", "repo_340", 340, 340);
  editReleaseAttachment("owner_340", "repo_340", 340, 340);
  deleteReleaseAttachment("owner_340", "repo_340", 340, 340);
  tryToDeleteANonExistingReleaseAttachment("owner_340", "repo_340", 340, 340);
  verifyReleaseAttachmentDoesNotExist("owner_340", "repo_340", 340, 340);
});

// Story: crud:ReleaseAttachment:nondet:1:2
bthread("crud:ReleaseAttachment:nondet:1:2", function () {
  let owner = "owner_341";
  let repo = "repo_341";
  let id = 341;
  let attachment_id = 341;
  createReleaseAttachment("owner_341", "repo_341", 341, 341);
  tryToAddExistingReleaseAttachment("owner_341", "repo_341", 341, 341);
  editReleaseAttachment("owner_341", "repo_341", 341, 341);
  verifyReleaseAttachmentExists("owner_341", "repo_341", 341, 341);
  deleteReleaseAttachment("owner_341", "repo_341", 341, 341);
  tryToDeleteANonExistingReleaseAttachment("owner_341", "repo_341", 341, 341);
  verifyReleaseAttachmentDoesNotExist("owner_341", "repo_341", 341, 341);
});

// Story: crud:ReleaseAttachment:nondet:negative:dup-add
bthread("crud:ReleaseAttachment:nondet:negative:dup-add", function () {
  let owner = "owner_346";
  let repo = "repo_346";
  let id = 346;
  let attachment_id = 346;
  createReleaseAttachment("owner_346", "repo_346", 346, 346);
  verifyReleaseAttachmentExists("owner_346", "repo_346", 346, 346);
  tryToAddExistingReleaseAttachment("owner_346", "repo_346", 346, 346);
  verifyReleaseAttachmentExists("owner_346", "repo_346", 346, 346);
});

// Story: crud:ReleaseAttachment:nondet:existing:update
bthread("crud:ReleaseAttachment:nondet:existing:update", function () {
  let ev = waitForAnyReleaseAttachmentAdded();
  let args = Object.values(ev);
  block(matchDeletedReleaseAttachment.apply(null, args), function () {
    verifyReleaseAttachmentExists.apply(null, args);
    editReleaseAttachment.apply(null, args);
    verifyReleaseAttachmentExists.apply(null, args);
  });
});

// Story: monitor:ReleaseAttachment:add
bthread("monitor:ReleaseAttachment:add", function () {
  while (true) {
    let ev = waitForAnyReleaseAttachmentAdded();
    let args = Object.values(ev);
    block(matchDeletedReleaseAttachment.apply(null, args), function () {
      verifyReleaseAttachmentExists.apply(null, args);
    });
  }
});

// Story: crud:TagProtection:nondet:1:1
bthread("crud:TagProtection:nondet:1:1", function () {
  let owner = "owner_350";
  let repo = "repo_350";
  let id = 350;
  createTagProtection("owner_350", "repo_350", 350);
  tryToAddExistingTagProtection("owner_350", "repo_350", 350);
  verifyTagProtectionExists("owner_350", "repo_350", 350);
  editTagProtection("owner_350", "repo_350", 350);
  deleteTagProtection("owner_350", "repo_350", 350);
  tryToDeleteANonExistingTagProtection("owner_350", "repo_350", 350);
  verifyTagProtectionDoesNotExist("owner_350", "repo_350", 350);
});

// Story: crud:TagProtection:nondet:1:2
bthread("crud:TagProtection:nondet:1:2", function () {
  let owner = "owner_351";
  let repo = "repo_351";
  let id = 351;
  createTagProtection("owner_351", "repo_351", 351);
  tryToAddExistingTagProtection("owner_351", "repo_351", 351);
  editTagProtection("owner_351", "repo_351", 351);
  verifyTagProtectionExists("owner_351", "repo_351", 351);
  deleteTagProtection("owner_351", "repo_351", 351);
  tryToDeleteANonExistingTagProtection("owner_351", "repo_351", 351);
  verifyTagProtectionDoesNotExist("owner_351", "repo_351", 351);
});

// Story: crud:TagProtection:nondet:negative:dup-add
bthread("crud:TagProtection:nondet:negative:dup-add", function () {
  let owner = "owner_356";
  let repo = "repo_356";
  let id = 356;
  createTagProtection("owner_356", "repo_356", 356);
  verifyTagProtectionExists("owner_356", "repo_356", 356);
  tryToAddExistingTagProtection("owner_356", "repo_356", 356);
  verifyTagProtectionExists("owner_356", "repo_356", 356);
});

// Story: crud:TagProtection:nondet:existing:update
bthread("crud:TagProtection:nondet:existing:update", function () {
  let ev = waitForAnyTagProtectionAdded();
  let args = Object.values(ev);
  block(matchDeletedTagProtection.apply(null, args), function () {
    verifyTagProtectionExists.apply(null, args);
    editTagProtection.apply(null, args);
    verifyTagProtectionExists.apply(null, args);
  });
});

// Story: monitor:TagProtection:add
bthread("monitor:TagProtection:add", function () {
  while (true) {
    let ev = waitForAnyTagProtectionAdded();
    let args = Object.values(ev);
    block(matchDeletedTagProtection.apply(null, args), function () {
      verifyTagProtectionExists.apply(null, args);
    });
  }
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let owner = "owner_360";
  let repo = "repo_360";
  let tag = "tag_360";
  createTag("owner_360", "repo_360", "tag_360");
  tryToAddExistingTag("owner_360", "repo_360", "tag_360");
  verifyTagExists("owner_360", "repo_360", "tag_360");
  deleteTag("owner_360", "repo_360", "tag_360");
  tryToDeleteANonExistingTag("owner_360", "repo_360", "tag_360");
  verifyTagDoesNotExist("owner_360", "repo_360", "tag_360");
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let owner = "owner_361";
  let repo = "repo_361";
  let tag = "tag_361";
  createTag("owner_361", "repo_361", "tag_361");
  tryToAddExistingTag("owner_361", "repo_361", "tag_361");
  verifyTagExists("owner_361", "repo_361", "tag_361");
  deleteTag("owner_361", "repo_361", "tag_361");
  tryToDeleteANonExistingTag("owner_361", "repo_361", "tag_361");
  verifyTagDoesNotExist("owner_361", "repo_361", "tag_361");
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let owner = "owner_366";
  let repo = "repo_366";
  let tag = "tag_366";
  createTag("owner_366", "repo_366", "tag_366");
  verifyTagExists("owner_366", "repo_366", "tag_366");
  tryToAddExistingTag("owner_366", "repo_366", "tag_366");
  verifyTagExists("owner_366", "repo_366", "tag_366");
});

// Story: monitor:Tag:add
bthread("monitor:Tag:add", function () {
  while (true) {
    let ev = waitForAnyTagAdded();
    let args = Object.values(ev);
    block(matchDeletedTag.apply(null, args), function () {
      verifyTagExists.apply(null, args);
    });
  }
});

// Story: crud:WikiPage:nondet:1:1
bthread("crud:WikiPage:nondet:1:1", function () {
  let owner = "owner_370";
  let repo = "repo_370";
  let pageName = "pageName_370";
  createWikiPage("owner_370", "repo_370", "pageName_370");
  tryToAddExistingWikiPage("owner_370", "repo_370", "pageName_370");
  verifyWikiPageExists("owner_370", "repo_370", "pageName_370");
  editWikiPage("owner_370", "repo_370", "pageName_370");
  deleteWikiPage("owner_370", "repo_370", "pageName_370");
  tryToDeleteANonExistingWikiPage("owner_370", "repo_370", "pageName_370");
  verifyWikiPageDoesNotExist("owner_370", "repo_370", "pageName_370");
});

// Story: crud:WikiPage:nondet:1:2
bthread("crud:WikiPage:nondet:1:2", function () {
  let owner = "owner_371";
  let repo = "repo_371";
  let pageName = "pageName_371";
  createWikiPage("owner_371", "repo_371", "pageName_371");
  tryToAddExistingWikiPage("owner_371", "repo_371", "pageName_371");
  editWikiPage("owner_371", "repo_371", "pageName_371");
  verifyWikiPageExists("owner_371", "repo_371", "pageName_371");
  deleteWikiPage("owner_371", "repo_371", "pageName_371");
  tryToDeleteANonExistingWikiPage("owner_371", "repo_371", "pageName_371");
  verifyWikiPageDoesNotExist("owner_371", "repo_371", "pageName_371");
});

// Story: crud:WikiPage:nondet:negative:dup-add
bthread("crud:WikiPage:nondet:negative:dup-add", function () {
  let owner = "owner_376";
  let repo = "repo_376";
  let pageName = "pageName_376";
  createWikiPage("owner_376", "repo_376", "pageName_376");
  verifyWikiPageExists("owner_376", "repo_376", "pageName_376");
  tryToAddExistingWikiPage("owner_376", "repo_376", "pageName_376");
  verifyWikiPageExists("owner_376", "repo_376", "pageName_376");
});

// Story: crud:WikiPage:nondet:existing:update
bthread("crud:WikiPage:nondet:existing:update", function () {
  let ev = waitForAnyWikiPageAdded();
  let args = Object.values(ev);
  block(matchDeletedWikiPage.apply(null, args), function () {
    verifyWikiPageExists.apply(null, args);
    editWikiPage.apply(null, args);
    verifyWikiPageExists.apply(null, args);
  });
});

// Story: monitor:WikiPage:add
bthread("monitor:WikiPage:add", function () {
  while (true) {
    let ev = waitForAnyWikiPageAdded();
    let args = Object.values(ev);
    block(matchDeletedWikiPage.apply(null, args), function () {
      verifyWikiPageExists.apply(null, args);
    });
  }
});

// Story: crud:File:nondet:1:1
bthread("crud:File:nondet:1:1", function () {
  let owner = "owner_380";
  let repo = "repo_380";
  let filepath = "filepath_380";
  createFile("owner_380", "repo_380", "filepath_380");
  tryToAddExistingFile("owner_380", "repo_380", "filepath_380");
  verifyFileExists("owner_380", "repo_380", "filepath_380");
  updateFile("owner_380", "repo_380", "filepath_380");
  deleteFile("owner_380", "repo_380", "filepath_380");
  tryToDeleteANonExistingFile("owner_380", "repo_380", "filepath_380");
  verifyFileDoesNotExist("owner_380", "repo_380", "filepath_380");
});

// Story: crud:File:nondet:1:2
bthread("crud:File:nondet:1:2", function () {
  let owner = "owner_381";
  let repo = "repo_381";
  let filepath = "filepath_381";
  createFile("owner_381", "repo_381", "filepath_381");
  tryToAddExistingFile("owner_381", "repo_381", "filepath_381");
  updateFile("owner_381", "repo_381", "filepath_381");
  verifyFileExists("owner_381", "repo_381", "filepath_381");
  deleteFile("owner_381", "repo_381", "filepath_381");
  tryToDeleteANonExistingFile("owner_381", "repo_381", "filepath_381");
  verifyFileDoesNotExist("owner_381", "repo_381", "filepath_381");
});

// Story: crud:File:nondet:negative:dup-add
bthread("crud:File:nondet:negative:dup-add", function () {
  let owner = "owner_386";
  let repo = "repo_386";
  let filepath = "filepath_386";
  createFile("owner_386", "repo_386", "filepath_386");
  verifyFileExists("owner_386", "repo_386", "filepath_386");
  tryToAddExistingFile("owner_386", "repo_386", "filepath_386");
  verifyFileExists("owner_386", "repo_386", "filepath_386");
});

// Story: crud:File:nondet:existing:update
bthread("crud:File:nondet:existing:update", function () {
  let ev = waitForAnyFileAdded();
  let args = Object.values(ev);
  block(matchDeletedFile.apply(null, args), function () {
    verifyFileExists.apply(null, args);
    updateFile.apply(null, args);
    verifyFileExists.apply(null, args);
  });
});

// Story: monitor:File:add
bthread("monitor:File:add", function () {
  while (true) {
    let ev = waitForAnyFileAdded();
    let args = Object.values(ev);
    block(matchDeletedFile.apply(null, args), function () {
      verifyFileExists.apply(null, args);
    });
  }
});

// Story: crud:PushMirror:nondet:1:1
bthread("crud:PushMirror:nondet:1:1", function () {
  let owner = "owner_390";
  let repo = "repo_390";
  let name = "name_390";
  addPushMirror("owner_390", "repo_390", "name_390");
  tryToAddExistingPushMirror("owner_390", "repo_390", "name_390");
  verifyPushMirrorExists("owner_390", "repo_390", "name_390");
  deletePushMirror("owner_390", "repo_390", "name_390");
  tryToDeleteANonExistingPushMirror("owner_390", "repo_390", "name_390");
  verifyPushMirrorDoesNotExist("owner_390", "repo_390", "name_390");
});

// Story: crud:PushMirror:nondet:1:2
bthread("crud:PushMirror:nondet:1:2", function () {
  let owner = "owner_391";
  let repo = "repo_391";
  let name = "name_391";
  addPushMirror("owner_391", "repo_391", "name_391");
  tryToAddExistingPushMirror("owner_391", "repo_391", "name_391");
  verifyPushMirrorExists("owner_391", "repo_391", "name_391");
  deletePushMirror("owner_391", "repo_391", "name_391");
  tryToDeleteANonExistingPushMirror("owner_391", "repo_391", "name_391");
  verifyPushMirrorDoesNotExist("owner_391", "repo_391", "name_391");
});

// Story: crud:PushMirror:nondet:negative:dup-add
bthread("crud:PushMirror:nondet:negative:dup-add", function () {
  let owner = "owner_396";
  let repo = "repo_396";
  let name = "name_396";
  addPushMirror("owner_396", "repo_396", "name_396");
  verifyPushMirrorExists("owner_396", "repo_396", "name_396");
  tryToAddExistingPushMirror("owner_396", "repo_396", "name_396");
  verifyPushMirrorExists("owner_396", "repo_396", "name_396");
});

// Story: monitor:PushMirror:add
bthread("monitor:PushMirror:add", function () {
  while (true) {
    let ev = waitForAnyPushMirrorAdded();
    let args = Object.values(ev);
    block(matchDeletedPushMirror.apply(null, args), function () {
      verifyPushMirrorExists.apply(null, args);
    });
  }
});

// Story: crud:Topic:nondet:1:1
bthread("crud:Topic:nondet:1:1", function () {
  let owner = "owner_400";
  let repo = "repo_400";
  let topic = "topic_400";
  addTopic("owner_400", "repo_400", "topic_400");
  tryToAddExistingTopic("owner_400", "repo_400", "topic_400");
  verifyTopicExists("owner_400", "repo_400", "topic_400");
  updateTopics("owner_400", "repo_400", "topic_400");
  deleteTopic("owner_400", "repo_400", "topic_400");
  tryToDeleteANonExistingTopic("owner_400", "repo_400", "topic_400");
  verifyTopicDoesNotExist("owner_400", "repo_400", "topic_400");
});

// Story: crud:Topic:nondet:1:2
bthread("crud:Topic:nondet:1:2", function () {
  let owner = "owner_401";
  let repo = "repo_401";
  let topic = "topic_401";
  addTopic("owner_401", "repo_401", "topic_401");
  tryToAddExistingTopic("owner_401", "repo_401", "topic_401");
  updateTopics("owner_401", "repo_401", "topic_401");
  verifyTopicExists("owner_401", "repo_401", "topic_401");
  deleteTopic("owner_401", "repo_401", "topic_401");
  tryToDeleteANonExistingTopic("owner_401", "repo_401", "topic_401");
  verifyTopicDoesNotExist("owner_401", "repo_401", "topic_401");
});

// Story: crud:Topic:nondet:negative:dup-add
bthread("crud:Topic:nondet:negative:dup-add", function () {
  let owner = "owner_406";
  let repo = "repo_406";
  let topic = "topic_406";
  addTopic("owner_406", "repo_406", "topic_406");
  verifyTopicExists("owner_406", "repo_406", "topic_406");
  tryToAddExistingTopic("owner_406", "repo_406", "topic_406");
  verifyTopicExists("owner_406", "repo_406", "topic_406");
});

// Story: crud:Topic:nondet:existing:update
bthread("crud:Topic:nondet:existing:update", function () {
  let ev = waitForAnyTopicAdded();
  let args = Object.values(ev);
  block(matchDeletedTopic.apply(null, args), function () {
    verifyTopicExists.apply(null, args);
    updateTopics.apply(null, args);
    verifyTopicExists.apply(null, args);
  });
});

// Story: monitor:Topic:add
bthread("monitor:Topic:add", function () {
  while (true) {
    let ev = waitForAnyTopicAdded();
    let args = Object.values(ev);
    block(matchDeletedTopic.apply(null, args), function () {
      verifyTopicExists.apply(null, args);
    });
  }
});

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let owner = "owner_410";
  let repo = "repo_410";
  let team = "team_410";
  addTeam("owner_410", "repo_410", "team_410");
  tryToAddExistingTeam("owner_410", "repo_410", "team_410");
  verifyTeamExists("owner_410", "repo_410", "team_410");
  deleteTeam("owner_410", "repo_410", "team_410");
  tryToDeleteANonExistingTeam("owner_410", "repo_410", "team_410");
  verifyTeamDoesNotExist("owner_410", "repo_410", "team_410");
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let owner = "owner_411";
  let repo = "repo_411";
  let team = "team_411";
  addTeam("owner_411", "repo_411", "team_411");
  tryToAddExistingTeam("owner_411", "repo_411", "team_411");
  verifyTeamExists("owner_411", "repo_411", "team_411");
  deleteTeam("owner_411", "repo_411", "team_411");
  tryToDeleteANonExistingTeam("owner_411", "repo_411", "team_411");
  verifyTeamDoesNotExist("owner_411", "repo_411", "team_411");
});

// Story: crud:Team:nondet:negative:dup-add
bthread("crud:Team:nondet:negative:dup-add", function () {
  let owner = "owner_416";
  let repo = "repo_416";
  let team = "team_416";
  addTeam("owner_416", "repo_416", "team_416");
  verifyTeamExists("owner_416", "repo_416", "team_416");
  tryToAddExistingTeam("owner_416", "repo_416", "team_416");
  verifyTeamExists("owner_416", "repo_416", "team_416");
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

// Story: crud:UserSecret:nondet:1:1
bthread("crud:UserSecret:nondet:1:1", function () {
  let secretname = "secretname_420";
  updateUserSecret("secretname_420");
  tryToAddExistingUserSecret("secretname_420");
  verifyUserSecretExists("secretname_420");
  deleteUserSecret("secretname_420");
  tryToDeleteANonExistingUserSecret("secretname_420");
  verifyUserSecretDoesNotExist("secretname_420");
});

// Story: crud:UserSecret:nondet:1:2
bthread("crud:UserSecret:nondet:1:2", function () {
  let secretname = "secretname_421";
  updateUserSecret("secretname_421");
  tryToAddExistingUserSecret("secretname_421");
  verifyUserSecretExists("secretname_421");
  deleteUserSecret("secretname_421");
  tryToDeleteANonExistingUserSecret("secretname_421");
  verifyUserSecretDoesNotExist("secretname_421");
});

// Story: crud:UserSecret:nondet:negative:dup-add
bthread("crud:UserSecret:nondet:negative:dup-add", function () {
  let secretname = "secretname_426";
  updateUserSecret("secretname_426");
  verifyUserSecretExists("secretname_426");
  tryToAddExistingUserSecret("secretname_426");
  verifyUserSecretExists("secretname_426");
});

// Story: monitor:UserSecret:add
bthread("monitor:UserSecret:add", function () {
  while (true) {
    let ev = waitForAnyUserSecretAdded();
    let args = Object.values(ev);
    block(matchDeletedUserSecret.apply(null, args), function () {
      verifyUserSecretExists.apply(null, args);
    });
  }
});

// Story: crud:UserVariable:nondet:1:1
bthread("crud:UserVariable:nondet:1:1", function () {
  let variablename = "variablename_430";
  createUserVariable("variablename_430");
  tryToAddExistingUserVariable("variablename_430");
  verifyUserVariableExists("variablename_430");
  updateUserVariable("variablename_430");
  deleteUserVariable("variablename_430");
  tryToDeleteANonExistingUserVariable("variablename_430");
  verifyUserVariableDoesNotExist("variablename_430");
});

// Story: crud:UserVariable:nondet:1:2
bthread("crud:UserVariable:nondet:1:2", function () {
  let variablename = "variablename_431";
  createUserVariable("variablename_431");
  tryToAddExistingUserVariable("variablename_431");
  updateUserVariable("variablename_431");
  verifyUserVariableExists("variablename_431");
  deleteUserVariable("variablename_431");
  tryToDeleteANonExistingUserVariable("variablename_431");
  verifyUserVariableDoesNotExist("variablename_431");
});

// Story: crud:UserVariable:nondet:negative:dup-add
bthread("crud:UserVariable:nondet:negative:dup-add", function () {
  let variablename = "variablename_436";
  createUserVariable("variablename_436");
  verifyUserVariableExists("variablename_436");
  tryToAddExistingUserVariable("variablename_436");
  verifyUserVariableExists("variablename_436");
});

// Story: crud:UserVariable:nondet:existing:update
bthread("crud:UserVariable:nondet:existing:update", function () {
  let ev = waitForAnyUserVariableAdded();
  let args = Object.values(ev);
  block(matchDeletedUserVariable.apply(null, args), function () {
    verifyUserVariableExists.apply(null, args);
    updateUserVariable.apply(null, args);
    verifyUserVariableExists.apply(null, args);
  });
});

// Story: monitor:UserVariable:add
bthread("monitor:UserVariable:add", function () {
  while (true) {
    let ev = waitForAnyUserVariableAdded();
    let args = Object.values(ev);
    block(matchDeletedUserVariable.apply(null, args), function () {
      verifyUserVariableExists.apply(null, args);
    });
  }
});

// Story: crud:OAuth2Application:nondet:1:1
bthread("crud:OAuth2Application:nondet:1:1", function () {
  let id = 440;
  userCreateOAuth2Application(440);
  tryToAddExistingOAuth2Application(440);
  verifyOAuth2ApplicationExists(440);
  userUpdateOAuth2Application(440);
  userDeleteOAuth2Application(440);
  tryToDeleteANonExistingOAuth2Application(440);
  verifyOAuth2ApplicationDoesNotExist(440);
});

// Story: crud:OAuth2Application:nondet:1:2
bthread("crud:OAuth2Application:nondet:1:2", function () {
  let id = 441;
  userCreateOAuth2Application(441);
  tryToAddExistingOAuth2Application(441);
  userUpdateOAuth2Application(441);
  verifyOAuth2ApplicationExists(441);
  userDeleteOAuth2Application(441);
  tryToDeleteANonExistingOAuth2Application(441);
  verifyOAuth2ApplicationDoesNotExist(441);
});

// Story: crud:OAuth2Application:nondet:negative:dup-add
bthread("crud:OAuth2Application:nondet:negative:dup-add", function () {
  let id = 446;
  userCreateOAuth2Application(446);
  verifyOAuth2ApplicationExists(446);
  tryToAddExistingOAuth2Application(446);
  verifyOAuth2ApplicationExists(446);
});

// Story: crud:OAuth2Application:nondet:existing:update
bthread("crud:OAuth2Application:nondet:existing:update", function () {
  let ev = waitForAnyOAuth2ApplicationAdded();
  let args = Object.values(ev);
  block(matchDeletedOAuth2Application.apply(null, args), function () {
    verifyOAuth2ApplicationExists.apply(null, args);
    userUpdateOAuth2Application.apply(null, args);
    verifyOAuth2ApplicationExists.apply(null, args);
  });
});

// Story: monitor:OAuth2Application:add
bthread("monitor:OAuth2Application:add", function () {
  while (true) {
    let ev = waitForAnyOAuth2ApplicationAdded();
    let args = Object.values(ev);
    block(matchDeletedOAuth2Application.apply(null, args), function () {
      verifyOAuth2ApplicationExists.apply(null, args);
    });
  }
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = "username_460";
  userBlockUser("username_460");
  tryToAddExistingUserBlock("username_460");
  verifyUserBlockExists("username_460");
  userUnblockUser("username_460");
  tryToDeleteANonExistingUserBlock("username_460");
  verifyUserBlockDoesNotExist("username_460");
});

// Story: crud:UserBlock:nondet:1:2
bthread("crud:UserBlock:nondet:1:2", function () {
  let username = "username_461";
  userBlockUser("username_461");
  tryToAddExistingUserBlock("username_461");
  verifyUserBlockExists("username_461");
  userUnblockUser("username_461");
  tryToDeleteANonExistingUserBlock("username_461");
  verifyUserBlockDoesNotExist("username_461");
});

// Story: crud:UserBlock:nondet:negative:dup-add
bthread("crud:UserBlock:nondet:negative:dup-add", function () {
  let username = "username_466";
  userBlockUser("username_466");
  verifyUserBlockExists("username_466");
  tryToAddExistingUserBlock("username_466");
  verifyUserBlockExists("username_466");
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

  userAddEmail();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  userDeleteEmail();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:1:2
bthread("crud:UserEmail:nondet:1:2", function () {

  userAddEmail();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  userDeleteEmail();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:negative:dup-add
bthread("crud:UserEmail:nondet:negative:dup-add", function () {

  userAddEmail();
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

// Story: crud:UserBlockList:read_only
bthread("crud:UserBlockList:read_only", function () {

  verifyUserBlockListExists();
});

// Story: crud:UserFollower:read_only
bthread("crud:UserFollower:read_only", function () {
  let username = "username_490";
  verifyUserFollowerExists("username_490");
});

// Story: crud:UserFollowing:read_only
bthread("crud:UserFollowing:read_only", function () {
  let username = "username_500";
  verifyUserFollowingExists("username_500");
});

// Story: crud:UserFollowingRelation:read_only
bthread("crud:UserFollowingRelation:read_only", function () {
  let username = "username_510";
  let target = "target_510";
  verifyUserFollowingRelationExists("username_510", "target_510");
});

// Story: crud:UserFollow:nondet:1:1
bthread("crud:UserFollow:nondet:1:1", function () {
  let username = "username_520";
  userCurrentPutFollow("username_520");
  tryToAddExistingUserFollow("username_520");
  verifyUserFollowExists("username_520");
  userCurrentDeleteFollow("username_520");
  tryToDeleteANonExistingUserFollow("username_520");
  verifyUserFollowDoesNotExist("username_520");
});

// Story: crud:UserFollow:nondet:1:2
bthread("crud:UserFollow:nondet:1:2", function () {
  let username = "username_521";
  userCurrentPutFollow("username_521");
  tryToAddExistingUserFollow("username_521");
  verifyUserFollowExists("username_521");
  userCurrentDeleteFollow("username_521");
  tryToDeleteANonExistingUserFollow("username_521");
  verifyUserFollowDoesNotExist("username_521");
});

// Story: crud:UserFollow:nondet:negative:dup-add
bthread("crud:UserFollow:nondet:negative:dup-add", function () {
  let username = "username_526";
  userCurrentPutFollow("username_526");
  verifyUserFollowExists("username_526");
  tryToAddExistingUserFollow("username_526");
  verifyUserFollowExists("username_526");
});

// Story: monitor:UserFollow:add
bthread("monitor:UserFollow:add", function () {
  while (true) {
    let ev = waitForAnyUserFollowAdded();
    let args = Object.values(ev);
    block(matchDeletedUserFollow.apply(null, args), function () {
      verifyUserFollowExists.apply(null, args);
    });
  }
});

// Story: crud:UserGPGKey:nondet:1:1
bthread("crud:UserGPGKey:nondet:1:1", function () {
  let id = 530;
  userCurrentPostGPGKey(530);
  tryToAddExistingUserGPGKey(530);
  verifyUserGPGKeyExists(530);
  userCurrentDeleteGPGKey(530);
  tryToDeleteANonExistingUserGPGKey(530);
  verifyUserGPGKeyDoesNotExist(530);
});

// Story: crud:UserGPGKey:nondet:1:2
bthread("crud:UserGPGKey:nondet:1:2", function () {
  let id = 531;
  userCurrentPostGPGKey(531);
  tryToAddExistingUserGPGKey(531);
  verifyUserGPGKeyExists(531);
  userCurrentDeleteGPGKey(531);
  tryToDeleteANonExistingUserGPGKey(531);
  verifyUserGPGKeyDoesNotExist(531);
});

// Story: crud:UserGPGKey:nondet:negative:dup-add
bthread("crud:UserGPGKey:nondet:negative:dup-add", function () {
  let id = 536;
  userCurrentPostGPGKey(536);
  verifyUserGPGKeyExists(536);
  tryToAddExistingUserGPGKey(536);
  verifyUserGPGKeyExists(536);
});

// Story: monitor:UserGPGKey:add
bthread("monitor:UserGPGKey:add", function () {
  while (true) {
    let ev = waitForAnyUserGPGKeyAdded();
    let args = Object.values(ev);
    block(matchDeletedUserGPGKey.apply(null, args), function () {
      verifyUserGPGKeyExists.apply(null, args);
    });
  }
});

// Story: crud:UserGPGKeyList:read_only
bthread("crud:UserGPGKeyList:read_only", function () {

  verifyUserGPGKeyListExists();
});

// Story: crud:UserHook:nondet:1:1
bthread("crud:UserHook:nondet:1:1", function () {
  let id = 550;
  userCreateHook(550);
  tryToAddExistingUserHook(550);
  verifyUserHookExists(550);
  userEditHook(550);
  userDeleteHook(550);
  tryToDeleteANonExistingUserHook(550);
  verifyUserHookDoesNotExist(550);
});

// Story: crud:UserHook:nondet:1:2
bthread("crud:UserHook:nondet:1:2", function () {
  let id = 551;
  userCreateHook(551);
  tryToAddExistingUserHook(551);
  userEditHook(551);
  verifyUserHookExists(551);
  userDeleteHook(551);
  tryToDeleteANonExistingUserHook(551);
  verifyUserHookDoesNotExist(551);
});

// Story: crud:UserHook:nondet:negative:dup-add
bthread("crud:UserHook:nondet:negative:dup-add", function () {
  let id = 556;
  userCreateHook(556);
  verifyUserHookExists(556);
  tryToAddExistingUserHook(556);
  verifyUserHookExists(556);
});

// Story: crud:UserHook:nondet:existing:update
bthread("crud:UserHook:nondet:existing:update", function () {
  let ev = waitForAnyUserHookAdded();
  let args = Object.values(ev);
  block(matchDeletedUserHook.apply(null, args), function () {
    verifyUserHookExists.apply(null, args);
    userEditHook.apply(null, args);
    verifyUserHookExists.apply(null, args);
  });
});

// Story: monitor:UserHook:add
bthread("monitor:UserHook:add", function () {
  while (true) {
    let ev = waitForAnyUserHookAdded();
    let args = Object.values(ev);
    block(matchDeletedUserHook.apply(null, args), function () {
      verifyUserHookExists.apply(null, args);
    });
  }
});

// Story: crud:UserKey:nondet:1:1
bthread("crud:UserKey:nondet:1:1", function () {
  let id = 560;
  userCurrentPostKey(560);
  tryToAddExistingUserKey(560);
  verifyUserKeyExists(560);
  userCurrentDeleteKey(560);
  tryToDeleteANonExistingUserKey(560);
  verifyUserKeyDoesNotExist(560);
});

// Story: crud:UserKey:nondet:1:2
bthread("crud:UserKey:nondet:1:2", function () {
  let id = 561;
  userCurrentPostKey(561);
  tryToAddExistingUserKey(561);
  verifyUserKeyExists(561);
  userCurrentDeleteKey(561);
  tryToDeleteANonExistingUserKey(561);
  verifyUserKeyDoesNotExist(561);
});

// Story: crud:UserKey:nondet:negative:dup-add
bthread("crud:UserKey:nondet:negative:dup-add", function () {
  let id = 566;
  userCurrentPostKey(566);
  verifyUserKeyExists(566);
  tryToAddExistingUserKey(566);
  verifyUserKeyExists(566);
});

// Story: monitor:UserKey:add
bthread("monitor:UserKey:add", function () {
  while (true) {
    let ev = waitForAnyUserKeyAdded();
    let args = Object.values(ev);
    block(matchDeletedUserKey.apply(null, args), function () {
      verifyUserKeyExists.apply(null, args);
    });
  }
});

// Story: crud:UserKeyList:read_only
bthread("crud:UserKeyList:read_only", function () {

  verifyUserKeyListExists();
});

// Story: crud:UserRepo:read_only
bthread("crud:UserRepo:read_only", function () {

  verifyUserRepoExists();
});

// Story: crud:UserSettings:read_only
bthread("crud:UserSettings:read_only", function () {

  verifyUserSettingsExists();
});

// Story: crud:UserStar:nondet:1:1
bthread("crud:UserStar:nondet:1:1", function () {
  let owner = "owner_600";
  let repo = "repo_600";
  userCurrentPutStar("owner_600", "repo_600");
  tryToAddExistingUserStar("owner_600", "repo_600");
  verifyUserStarExists("owner_600", "repo_600");
  userCurrentDeleteStar("owner_600", "repo_600");
  tryToDeleteANonExistingUserStar("owner_600", "repo_600");
  verifyUserStarDoesNotExist("owner_600", "repo_600");
});

// Story: crud:UserStar:nondet:1:2
bthread("crud:UserStar:nondet:1:2", function () {
  let owner = "owner_601";
  let repo = "repo_601";
  userCurrentPutStar("owner_601", "repo_601");
  tryToAddExistingUserStar("owner_601", "repo_601");
  verifyUserStarExists("owner_601", "repo_601");
  userCurrentDeleteStar("owner_601", "repo_601");
  tryToDeleteANonExistingUserStar("owner_601", "repo_601");
  verifyUserStarDoesNotExist("owner_601", "repo_601");
});

// Story: crud:UserStar:nondet:negative:dup-add
bthread("crud:UserStar:nondet:negative:dup-add", function () {
  let owner = "owner_606";
  let repo = "repo_606";
  userCurrentPutStar("owner_606", "repo_606");
  verifyUserStarExists("owner_606", "repo_606");
  tryToAddExistingUserStar("owner_606", "repo_606");
  verifyUserStarExists("owner_606", "repo_606");
});

// Story: monitor:UserStar:add
bthread("monitor:UserStar:add", function () {
  while (true) {
    let ev = waitForAnyUserStarAdded();
    let args = Object.values(ev);
    block(matchDeletedUserStar.apply(null, args), function () {
      verifyUserStarExists.apply(null, args);
    });
  }
});

// Story: crud:UserStopwatch:read_only
bthread("crud:UserStopwatch:read_only", function () {

  verifyUserStopwatchExists();
});

// Story: crud:UserSubscription:read_only
bthread("crud:UserSubscription:read_only", function () {

  verifyUserSubscriptionExists();
});

// Story: crud:UserTeam:read_only
bthread("crud:UserTeam:read_only", function () {

  verifyUserTeamExists();
});

// Story: crud:UserTrackedTime:read_only
bthread("crud:UserTrackedTime:read_only", function () {

  verifyUserTrackedTimeExists();
});

// Story: crud:UserToken:nondet:1:1
bthread("crud:UserToken:nondet:1:1", function () {
  let username = "username_650";
  let token = "token_650";
  userCreateToken("username_650", "token_650");
  tryToAddExistingUserToken("username_650", "token_650");
  verifyUserTokenExists("username_650", "token_650");
  userDeleteAccessToken("username_650", "token_650");
  tryToDeleteANonExistingUserToken("username_650", "token_650");
  verifyUserTokenDoesNotExist("username_650", "token_650");
});

// Story: crud:UserToken:nondet:1:2
bthread("crud:UserToken:nondet:1:2", function () {
  let username = "username_651";
  let token = "token_651";
  userCreateToken("username_651", "token_651");
  tryToAddExistingUserToken("username_651", "token_651");
  verifyUserTokenExists("username_651", "token_651");
  userDeleteAccessToken("username_651", "token_651");
  tryToDeleteANonExistingUserToken("username_651", "token_651");
  verifyUserTokenDoesNotExist("username_651", "token_651");
});

// Story: crud:UserToken:nondet:negative:dup-add
bthread("crud:UserToken:nondet:negative:dup-add", function () {
  let username = "username_656";
  let token = "token_656";
  userCreateToken("username_656", "token_656");
  verifyUserTokenExists("username_656", "token_656");
  tryToAddExistingUserToken("username_656", "token_656");
  verifyUserTokenExists("username_656", "token_656");
});

// Story: monitor:UserToken:add
bthread("monitor:UserToken:add", function () {
  while (true) {
    let ev = waitForAnyUserTokenAdded();
    let args = Object.values(ev);
    block(matchDeletedUserToken.apply(null, args), function () {
      verifyUserTokenExists.apply(null, args);
    });
  }
});

// Story: crud:Issue:nondet:1:1
bthread("crud:Issue:nondet:1:1", function () {
  let owner = "owner_660";
  let repo = "repo_660";
  let index = "index_660";
  issueCreateIssue("owner_660", "repo_660", "index_660");
  tryToAddExistingIssue("owner_660", "repo_660", "index_660");
  verifyIssueExists("owner_660", "repo_660", "index_660");
  issueEditIssue("owner_660", "repo_660", "index_660");
  issueDelete("owner_660", "repo_660", "index_660");
  tryToDeleteANonExistingIssue("owner_660", "repo_660", "index_660");
  verifyIssueDoesNotExist("owner_660", "repo_660", "index_660");
});

// Story: crud:Issue:nondet:1:2
bthread("crud:Issue:nondet:1:2", function () {
  let owner = "owner_661";
  let repo = "repo_661";
  let index = "index_661";
  issueCreateIssue("owner_661", "repo_661", "index_661");
  tryToAddExistingIssue("owner_661", "repo_661", "index_661");
  issueEditIssue("owner_661", "repo_661", "index_661");
  verifyIssueExists("owner_661", "repo_661", "index_661");
  issueDelete("owner_661", "repo_661", "index_661");
  tryToDeleteANonExistingIssue("owner_661", "repo_661", "index_661");
  verifyIssueDoesNotExist("owner_661", "repo_661", "index_661");
});

// Story: crud:Issue:nondet:negative:dup-add
bthread("crud:Issue:nondet:negative:dup-add", function () {
  let owner = "owner_666";
  let repo = "repo_666";
  let index = "index_666";
  issueCreateIssue("owner_666", "repo_666", "index_666");
  verifyIssueExists("owner_666", "repo_666", "index_666");
  tryToAddExistingIssue("owner_666", "repo_666", "index_666");
  verifyIssueExists("owner_666", "repo_666", "index_666");
});

// Story: crud:Issue:nondet:existing:update
bthread("crud:Issue:nondet:existing:update", function () {
  let ev = waitForAnyIssueAdded();
  let args = Object.values(ev);
  block(matchDeletedIssue.apply(null, args), function () {
    verifyIssueExists.apply(null, args);
    issueEditIssue.apply(null, args);
    verifyIssueExists.apply(null, args);
  });
});

// Story: monitor:Issue:add
bthread("monitor:Issue:add", function () {
  while (true) {
    let ev = waitForAnyIssueAdded();
    let args = Object.values(ev);
    block(matchDeletedIssue.apply(null, args), function () {
      verifyIssueExists.apply(null, args);
    });
  }
});

// Story: crud:IssueComment:nondet:1:1
bthread("crud:IssueComment:nondet:1:1", function () {
  let owner = "owner_670";
  let repo = "repo_670";
  let index = "index_670";
  let id = 670;
  issueCreateComment("owner_670", "repo_670", "index_670", 670);
  tryToAddExistingIssueComment("owner_670", "repo_670", "index_670", 670);
  verifyIssueCommentExists("owner_670", "repo_670", "index_670", 670);
  issueEditComment("owner_670", "repo_670", "index_670", 670);
  issueDeleteComment("owner_670", "repo_670", "index_670", 670);
  tryToDeleteANonExistingIssueComment("owner_670", "repo_670", "index_670", 670);
  verifyIssueCommentDoesNotExist("owner_670", "repo_670", "index_670", 670);
});

// Story: crud:IssueComment:nondet:1:2
bthread("crud:IssueComment:nondet:1:2", function () {
  let owner = "owner_671";
  let repo = "repo_671";
  let index = "index_671";
  let id = 671;
  issueCreateComment("owner_671", "repo_671", "index_671", 671);
  tryToAddExistingIssueComment("owner_671", "repo_671", "index_671", 671);
  issueEditComment("owner_671", "repo_671", "index_671", 671);
  verifyIssueCommentExists("owner_671", "repo_671", "index_671", 671);
  issueDeleteComment("owner_671", "repo_671", "index_671", 671);
  tryToDeleteANonExistingIssueComment("owner_671", "repo_671", "index_671", 671);
  verifyIssueCommentDoesNotExist("owner_671", "repo_671", "index_671", 671);
});

// Story: crud:IssueComment:nondet:negative:dup-add
bthread("crud:IssueComment:nondet:negative:dup-add", function () {
  let owner = "owner_676";
  let repo = "repo_676";
  let index = "index_676";
  let id = 676;
  issueCreateComment("owner_676", "repo_676", "index_676", 676);
  verifyIssueCommentExists("owner_676", "repo_676", "index_676", 676);
  tryToAddExistingIssueComment("owner_676", "repo_676", "index_676", 676);
  verifyIssueCommentExists("owner_676", "repo_676", "index_676", 676);
});

// Story: crud:IssueComment:nondet:existing:update
bthread("crud:IssueComment:nondet:existing:update", function () {
  let ev = waitForAnyIssueCommentAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueComment.apply(null, args), function () {
    verifyIssueCommentExists.apply(null, args);
    issueEditComment.apply(null, args);
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

// Story: crud:IssueCommentAttachment:nondet:1:1
bthread("crud:IssueCommentAttachment:nondet:1:1", function () {
  let owner = "owner_680";
  let repo = "repo_680";
  let id = 680;
  let name = "name_680";
  let attachment_id = 680;
  issueCreateIssueCommentAttachment("owner_680", "repo_680", 680, "name_680", 680);
  tryToAddExistingIssueCommentAttachment("owner_680", "repo_680", 680, "name_680", 680);
  verifyIssueCommentAttachmentExists("owner_680", "repo_680", 680, "name_680", 680);
  issueEditIssueCommentAttachment("owner_680", "repo_680", 680, "name_680", 680);
  issueDeleteIssueCommentAttachment("owner_680", "repo_680", 680, "name_680", 680);
  tryToDeleteANonExistingIssueCommentAttachment("owner_680", "repo_680", 680, "name_680", 680);
  verifyIssueCommentAttachmentDoesNotExist("owner_680", "repo_680", 680, "name_680", 680);
});

// Story: crud:IssueCommentAttachment:nondet:1:2
bthread("crud:IssueCommentAttachment:nondet:1:2", function () {
  let owner = "owner_681";
  let repo = "repo_681";
  let id = 681;
  let name = "name_681";
  let attachment_id = 681;
  issueCreateIssueCommentAttachment("owner_681", "repo_681", 681, "name_681", 681);
  tryToAddExistingIssueCommentAttachment("owner_681", "repo_681", 681, "name_681", 681);
  issueEditIssueCommentAttachment("owner_681", "repo_681", 681, "name_681", 681);
  verifyIssueCommentAttachmentExists("owner_681", "repo_681", 681, "name_681", 681);
  issueDeleteIssueCommentAttachment("owner_681", "repo_681", 681, "name_681", 681);
  tryToDeleteANonExistingIssueCommentAttachment("owner_681", "repo_681", 681, "name_681", 681);
  verifyIssueCommentAttachmentDoesNotExist("owner_681", "repo_681", 681, "name_681", 681);
});

// Story: crud:IssueCommentAttachment:nondet:negative:dup-add
bthread("crud:IssueCommentAttachment:nondet:negative:dup-add", function () {
  let owner = "owner_686";
  let repo = "repo_686";
  let id = 686;
  let name = "name_686";
  let attachment_id = 686;
  issueCreateIssueCommentAttachment("owner_686", "repo_686", 686, "name_686", 686);
  verifyIssueCommentAttachmentExists("owner_686", "repo_686", 686, "name_686", 686);
  tryToAddExistingIssueCommentAttachment("owner_686", "repo_686", 686, "name_686", 686);
  verifyIssueCommentAttachmentExists("owner_686", "repo_686", 686, "name_686", 686);
});

// Story: crud:IssueCommentAttachment:nondet:existing:update
bthread("crud:IssueCommentAttachment:nondet:existing:update", function () {
  let ev = waitForAnyIssueCommentAttachmentAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueCommentAttachment.apply(null, args), function () {
    verifyIssueCommentAttachmentExists.apply(null, args);
    issueEditIssueCommentAttachment.apply(null, args);
    verifyIssueCommentAttachmentExists.apply(null, args);
  });
});

// Story: monitor:IssueCommentAttachment:add
bthread("monitor:IssueCommentAttachment:add", function () {
  while (true) {
    let ev = waitForAnyIssueCommentAttachmentAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueCommentAttachment.apply(null, args), function () {
      verifyIssueCommentAttachmentExists.apply(null, args);
    });
  }
});

// Story: crud:IssueCommentReaction:nondet:1:1
bthread("crud:IssueCommentReaction:nondet:1:1", function () {
  let owner = "owner_690";
  let repo = "repo_690";
  let id = 690;
  let content = "content_690";
  issuePostCommentReaction("owner_690", "repo_690", 690, "content_690");
  tryToAddExistingIssueCommentReaction("owner_690", "repo_690", 690, "content_690");
  verifyIssueCommentReactionExists("owner_690", "repo_690", 690, "content_690");
  issueDeleteCommentReaction("owner_690", "repo_690", 690, "content_690");
  tryToDeleteANonExistingIssueCommentReaction("owner_690", "repo_690", 690, "content_690");
  verifyIssueCommentReactionDoesNotExist("owner_690", "repo_690", 690, "content_690");
});

// Story: crud:IssueCommentReaction:nondet:1:2
bthread("crud:IssueCommentReaction:nondet:1:2", function () {
  let owner = "owner_691";
  let repo = "repo_691";
  let id = 691;
  let content = "content_691";
  issuePostCommentReaction("owner_691", "repo_691", 691, "content_691");
  tryToAddExistingIssueCommentReaction("owner_691", "repo_691", 691, "content_691");
  verifyIssueCommentReactionExists("owner_691", "repo_691", 691, "content_691");
  issueDeleteCommentReaction("owner_691", "repo_691", 691, "content_691");
  tryToDeleteANonExistingIssueCommentReaction("owner_691", "repo_691", 691, "content_691");
  verifyIssueCommentReactionDoesNotExist("owner_691", "repo_691", 691, "content_691");
});

// Story: crud:IssueCommentReaction:nondet:negative:dup-add
bthread("crud:IssueCommentReaction:nondet:negative:dup-add", function () {
  let owner = "owner_696";
  let repo = "repo_696";
  let id = 696;
  let content = "content_696";
  issuePostCommentReaction("owner_696", "repo_696", 696, "content_696");
  verifyIssueCommentReactionExists("owner_696", "repo_696", 696, "content_696");
  tryToAddExistingIssueCommentReaction("owner_696", "repo_696", 696, "content_696");
  verifyIssueCommentReactionExists("owner_696", "repo_696", 696, "content_696");
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

// Story: crud:IssueAttachment:nondet:1:1
bthread("crud:IssueAttachment:nondet:1:1", function () {
  let owner = "owner_700";
  let repo = "repo_700";
  let index = "index_700";
  let name = "name_700";
  let attachment_id = 700;
  issueCreateIssueAttachment("owner_700", "repo_700", "index_700", "name_700", 700);
  tryToAddExistingIssueAttachment("owner_700", "repo_700", "index_700", "name_700", 700);
  verifyIssueAttachmentExists("owner_700", "repo_700", "index_700", "name_700", 700);
  issueEditIssueAttachment("owner_700", "repo_700", "index_700", "name_700", 700);
  issueDeleteIssueAttachment("owner_700", "repo_700", "index_700", "name_700", 700);
  tryToDeleteANonExistingIssueAttachment("owner_700", "repo_700", "index_700", "name_700", 700);
  verifyIssueAttachmentDoesNotExist("owner_700", "repo_700", "index_700", "name_700", 700);
});

// Story: crud:IssueAttachment:nondet:1:2
bthread("crud:IssueAttachment:nondet:1:2", function () {
  let owner = "owner_701";
  let repo = "repo_701";
  let index = "index_701";
  let name = "name_701";
  let attachment_id = 701;
  issueCreateIssueAttachment("owner_701", "repo_701", "index_701", "name_701", 701);
  tryToAddExistingIssueAttachment("owner_701", "repo_701", "index_701", "name_701", 701);
  issueEditIssueAttachment("owner_701", "repo_701", "index_701", "name_701", 701);
  verifyIssueAttachmentExists("owner_701", "repo_701", "index_701", "name_701", 701);
  issueDeleteIssueAttachment("owner_701", "repo_701", "index_701", "name_701", 701);
  tryToDeleteANonExistingIssueAttachment("owner_701", "repo_701", "index_701", "name_701", 701);
  verifyIssueAttachmentDoesNotExist("owner_701", "repo_701", "index_701", "name_701", 701);
});

// Story: crud:IssueAttachment:nondet:negative:dup-add
bthread("crud:IssueAttachment:nondet:negative:dup-add", function () {
  let owner = "owner_706";
  let repo = "repo_706";
  let index = "index_706";
  let name = "name_706";
  let attachment_id = 706;
  issueCreateIssueAttachment("owner_706", "repo_706", "index_706", "name_706", 706);
  verifyIssueAttachmentExists("owner_706", "repo_706", "index_706", "name_706", 706);
  tryToAddExistingIssueAttachment("owner_706", "repo_706", "index_706", "name_706", 706);
  verifyIssueAttachmentExists("owner_706", "repo_706", "index_706", "name_706", 706);
});

// Story: crud:IssueAttachment:nondet:existing:update
bthread("crud:IssueAttachment:nondet:existing:update", function () {
  let ev = waitForAnyIssueAttachmentAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueAttachment.apply(null, args), function () {
    verifyIssueAttachmentExists.apply(null, args);
    issueEditIssueAttachment.apply(null, args);
    verifyIssueAttachmentExists.apply(null, args);
  });
});

// Story: monitor:IssueAttachment:add
bthread("monitor:IssueAttachment:add", function () {
  while (true) {
    let ev = waitForAnyIssueAttachmentAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueAttachment.apply(null, args), function () {
      verifyIssueAttachmentExists.apply(null, args);
    });
  }
});

// Story: crud:IssueReaction:nondet:1:1
bthread("crud:IssueReaction:nondet:1:1", function () {
  let owner = "owner_710";
  let repo = "repo_710";
  let index = "index_710";
  let content = "content_710";
  issuePostIssueReaction("owner_710", "repo_710", "index_710", "content_710");
  tryToAddExistingIssueReaction("owner_710", "repo_710", "index_710", "content_710");
  verifyIssueReactionExists("owner_710", "repo_710", "index_710", "content_710");
  issueDeleteIssueReaction("owner_710", "repo_710", "index_710", "content_710");
  tryToDeleteANonExistingIssueReaction("owner_710", "repo_710", "index_710", "content_710");
  verifyIssueReactionDoesNotExist("owner_710", "repo_710", "index_710", "content_710");
});

// Story: crud:IssueReaction:nondet:1:2
bthread("crud:IssueReaction:nondet:1:2", function () {
  let owner = "owner_711";
  let repo = "repo_711";
  let index = "index_711";
  let content = "content_711";
  issuePostIssueReaction("owner_711", "repo_711", "index_711", "content_711");
  tryToAddExistingIssueReaction("owner_711", "repo_711", "index_711", "content_711");
  verifyIssueReactionExists("owner_711", "repo_711", "index_711", "content_711");
  issueDeleteIssueReaction("owner_711", "repo_711", "index_711", "content_711");
  tryToDeleteANonExistingIssueReaction("owner_711", "repo_711", "index_711", "content_711");
  verifyIssueReactionDoesNotExist("owner_711", "repo_711", "index_711", "content_711");
});

// Story: crud:IssueReaction:nondet:negative:dup-add
bthread("crud:IssueReaction:nondet:negative:dup-add", function () {
  let owner = "owner_716";
  let repo = "repo_716";
  let index = "index_716";
  let content = "content_716";
  issuePostIssueReaction("owner_716", "repo_716", "index_716", "content_716");
  verifyIssueReactionExists("owner_716", "repo_716", "index_716", "content_716");
  tryToAddExistingIssueReaction("owner_716", "repo_716", "index_716", "content_716");
  verifyIssueReactionExists("owner_716", "repo_716", "index_716", "content_716");
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

// Story: crud:IssueLabel:nondet:1:1
bthread("crud:IssueLabel:nondet:1:1", function () {
  let owner = "owner_720";
  let repo = "repo_720";
  let index = "index_720";
  let body = "body_720";
  let id = 720;
  issueAddLabel("owner_720", "repo_720", "index_720", "body_720", 720);
  tryToAddExistingIssueLabel("owner_720", "repo_720", "index_720", "body_720", 720);
  verifyIssueLabelExists("owner_720", "repo_720", "index_720", "body_720", 720);
  issueReplaceLabels("owner_720", "repo_720", "index_720", "body_720", 720);
  issueRemoveLabel("owner_720", "repo_720", "index_720", "body_720", 720);
  tryToDeleteANonExistingIssueLabel("owner_720", "repo_720", "index_720", "body_720", 720);
  verifyIssueLabelDoesNotExist("owner_720", "repo_720", "index_720", "body_720", 720);
});

// Story: crud:IssueLabel:nondet:1:2
bthread("crud:IssueLabel:nondet:1:2", function () {
  let owner = "owner_721";
  let repo = "repo_721";
  let index = "index_721";
  let body = "body_721";
  let id = 721;
  issueAddLabel("owner_721", "repo_721", "index_721", "body_721", 721);
  tryToAddExistingIssueLabel("owner_721", "repo_721", "index_721", "body_721", 721);
  issueReplaceLabels("owner_721", "repo_721", "index_721", "body_721", 721);
  verifyIssueLabelExists("owner_721", "repo_721", "index_721", "body_721", 721);
  issueRemoveLabel("owner_721", "repo_721", "index_721", "body_721", 721);
  tryToDeleteANonExistingIssueLabel("owner_721", "repo_721", "index_721", "body_721", 721);
  verifyIssueLabelDoesNotExist("owner_721", "repo_721", "index_721", "body_721", 721);
});

// Story: crud:IssueLabel:nondet:negative:dup-add
bthread("crud:IssueLabel:nondet:negative:dup-add", function () {
  let owner = "owner_726";
  let repo = "repo_726";
  let index = "index_726";
  let body = "body_726";
  let id = 726;
  issueAddLabel("owner_726", "repo_726", "index_726", "body_726", 726);
  verifyIssueLabelExists("owner_726", "repo_726", "index_726", "body_726", 726);
  tryToAddExistingIssueLabel("owner_726", "repo_726", "index_726", "body_726", 726);
  verifyIssueLabelExists("owner_726", "repo_726", "index_726", "body_726", 726);
});

// Story: crud:IssueLabel:nondet:existing:update
bthread("crud:IssueLabel:nondet:existing:update", function () {
  let ev = waitForAnyIssueLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedIssueLabel.apply(null, args), function () {
    verifyIssueLabelExists.apply(null, args);
    issueReplaceLabels.apply(null, args);
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
  let owner = "owner_730";
  let repo = "repo_730";
  let body = "body_730";
  let id = 730;
  issueCreateLabel("owner_730", "repo_730", "body_730", 730);
  tryToAddExistingLabel("owner_730", "repo_730", "body_730", 730);
  verifyLabelExists("owner_730", "repo_730", "body_730", 730);
  issueEditLabel("owner_730", "repo_730", "body_730", 730);
  issueDeleteLabel("owner_730", "repo_730", "body_730", 730);
  tryToDeleteANonExistingLabel("owner_730", "repo_730", "body_730", 730);
  verifyLabelDoesNotExist("owner_730", "repo_730", "body_730", 730);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let owner = "owner_731";
  let repo = "repo_731";
  let body = "body_731";
  let id = 731;
  issueCreateLabel("owner_731", "repo_731", "body_731", 731);
  tryToAddExistingLabel("owner_731", "repo_731", "body_731", 731);
  issueEditLabel("owner_731", "repo_731", "body_731", 731);
  verifyLabelExists("owner_731", "repo_731", "body_731", 731);
  issueDeleteLabel("owner_731", "repo_731", "body_731", 731);
  tryToDeleteANonExistingLabel("owner_731", "repo_731", "body_731", 731);
  verifyLabelDoesNotExist("owner_731", "repo_731", "body_731", 731);
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let owner = "owner_736";
  let repo = "repo_736";
  let body = "body_736";
  let id = 736;
  issueCreateLabel("owner_736", "repo_736", "body_736", 736);
  verifyLabelExists("owner_736", "repo_736", "body_736", 736);
  tryToAddExistingLabel("owner_736", "repo_736", "body_736", 736);
  verifyLabelExists("owner_736", "repo_736", "body_736", 736);
});

// Story: crud:Label:nondet:existing:update
bthread("crud:Label:nondet:existing:update", function () {
  let ev = waitForAnyLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedLabel.apply(null, args), function () {
    verifyLabelExists.apply(null, args);
    issueEditLabel.apply(null, args);
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
  let owner = "owner_740";
  let repo = "repo_740";
  let body = "body_740";
  let id = 740;
  issueCreateMilestone("owner_740", "repo_740", "body_740", 740);
  tryToAddExistingMilestone("owner_740", "repo_740", "body_740", 740);
  verifyMilestoneExists("owner_740", "repo_740", "body_740", 740);
  issueEditMilestone("owner_740", "repo_740", "body_740", 740);
  issueDeleteMilestone("owner_740", "repo_740", "body_740", 740);
  tryToDeleteANonExistingMilestone("owner_740", "repo_740", "body_740", 740);
  verifyMilestoneDoesNotExist("owner_740", "repo_740", "body_740", 740);
});

// Story: crud:Milestone:nondet:1:2
bthread("crud:Milestone:nondet:1:2", function () {
  let owner = "owner_741";
  let repo = "repo_741";
  let body = "body_741";
  let id = 741;
  issueCreateMilestone("owner_741", "repo_741", "body_741", 741);
  tryToAddExistingMilestone("owner_741", "repo_741", "body_741", 741);
  issueEditMilestone("owner_741", "repo_741", "body_741", 741);
  verifyMilestoneExists("owner_741", "repo_741", "body_741", 741);
  issueDeleteMilestone("owner_741", "repo_741", "body_741", 741);
  tryToDeleteANonExistingMilestone("owner_741", "repo_741", "body_741", 741);
  verifyMilestoneDoesNotExist("owner_741", "repo_741", "body_741", 741);
});

// Story: crud:Milestone:nondet:negative:dup-add
bthread("crud:Milestone:nondet:negative:dup-add", function () {
  let owner = "owner_746";
  let repo = "repo_746";
  let body = "body_746";
  let id = 746;
  issueCreateMilestone("owner_746", "repo_746", "body_746", 746);
  verifyMilestoneExists("owner_746", "repo_746", "body_746", 746);
  tryToAddExistingMilestone("owner_746", "repo_746", "body_746", 746);
  verifyMilestoneExists("owner_746", "repo_746", "body_746", 746);
});

// Story: crud:Milestone:nondet:existing:update
bthread("crud:Milestone:nondet:existing:update", function () {
  let ev = waitForAnyMilestoneAdded();
  let args = Object.values(ev);
  block(matchDeletedMilestone.apply(null, args), function () {
    verifyMilestoneExists.apply(null, args);
    issueEditMilestone.apply(null, args);
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

// Story: crud:IssueDependency:nondet:1:1
bthread("crud:IssueDependency:nondet:1:1", function () {
  let owner = "owner_750";
  let repo = "repo_750";
  let index = "index_750";
  let body = "body_750";
  issueCreateIssueDependencies("owner_750", "repo_750", "index_750", "body_750");
  tryToAddExistingIssueDependency("owner_750", "repo_750", "index_750", "body_750");
  verifyIssueDependencyExists("owner_750", "repo_750", "index_750", "body_750");
  issueRemoveIssueDependencies("owner_750", "repo_750", "index_750", "body_750");
  tryToDeleteANonExistingIssueDependency("owner_750", "repo_750", "index_750", "body_750");
  verifyIssueDependencyDoesNotExist("owner_750", "repo_750", "index_750", "body_750");
});

// Story: crud:IssueDependency:nondet:1:2
bthread("crud:IssueDependency:nondet:1:2", function () {
  let owner = "owner_751";
  let repo = "repo_751";
  let index = "index_751";
  let body = "body_751";
  issueCreateIssueDependencies("owner_751", "repo_751", "index_751", "body_751");
  tryToAddExistingIssueDependency("owner_751", "repo_751", "index_751", "body_751");
  verifyIssueDependencyExists("owner_751", "repo_751", "index_751", "body_751");
  issueRemoveIssueDependencies("owner_751", "repo_751", "index_751", "body_751");
  tryToDeleteANonExistingIssueDependency("owner_751", "repo_751", "index_751", "body_751");
  verifyIssueDependencyDoesNotExist("owner_751", "repo_751", "index_751", "body_751");
});

// Story: crud:IssueDependency:nondet:negative:dup-add
bthread("crud:IssueDependency:nondet:negative:dup-add", function () {
  let owner = "owner_756";
  let repo = "repo_756";
  let index = "index_756";
  let body = "body_756";
  issueCreateIssueDependencies("owner_756", "repo_756", "index_756", "body_756");
  verifyIssueDependencyExists("owner_756", "repo_756", "index_756", "body_756");
  tryToAddExistingIssueDependency("owner_756", "repo_756", "index_756", "body_756");
  verifyIssueDependencyExists("owner_756", "repo_756", "index_756", "body_756");
});

// Story: monitor:IssueDependency:add
bthread("monitor:IssueDependency:add", function () {
  while (true) {
    let ev = waitForAnyIssueDependencyAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueDependency.apply(null, args), function () {
      verifyIssueDependencyExists.apply(null, args);
    });
  }
});

// Story: crud:IssueBlocking:nondet:1:1
bthread("crud:IssueBlocking:nondet:1:1", function () {
  let owner = "owner_760";
  let repo = "repo_760";
  let index = "index_760";
  let body = "body_760";
  issueCreateIssueBlocking("owner_760", "repo_760", "index_760", "body_760");
  tryToAddExistingIssueBlocking("owner_760", "repo_760", "index_760", "body_760");
  verifyIssueBlockingExists("owner_760", "repo_760", "index_760", "body_760");
  issueRemoveIssueBlocking("owner_760", "repo_760", "index_760", "body_760");
  tryToDeleteANonExistingIssueBlocking("owner_760", "repo_760", "index_760", "body_760");
  verifyIssueBlockingDoesNotExist("owner_760", "repo_760", "index_760", "body_760");
});

// Story: crud:IssueBlocking:nondet:1:2
bthread("crud:IssueBlocking:nondet:1:2", function () {
  let owner = "owner_761";
  let repo = "repo_761";
  let index = "index_761";
  let body = "body_761";
  issueCreateIssueBlocking("owner_761", "repo_761", "index_761", "body_761");
  tryToAddExistingIssueBlocking("owner_761", "repo_761", "index_761", "body_761");
  verifyIssueBlockingExists("owner_761", "repo_761", "index_761", "body_761");
  issueRemoveIssueBlocking("owner_761", "repo_761", "index_761", "body_761");
  tryToDeleteANonExistingIssueBlocking("owner_761", "repo_761", "index_761", "body_761");
  verifyIssueBlockingDoesNotExist("owner_761", "repo_761", "index_761", "body_761");
});

// Story: crud:IssueBlocking:nondet:negative:dup-add
bthread("crud:IssueBlocking:nondet:negative:dup-add", function () {
  let owner = "owner_766";
  let repo = "repo_766";
  let index = "index_766";
  let body = "body_766";
  issueCreateIssueBlocking("owner_766", "repo_766", "index_766", "body_766");
  verifyIssueBlockingExists("owner_766", "repo_766", "index_766", "body_766");
  tryToAddExistingIssueBlocking("owner_766", "repo_766", "index_766", "body_766");
  verifyIssueBlockingExists("owner_766", "repo_766", "index_766", "body_766");
});

// Story: monitor:IssueBlocking:add
bthread("monitor:IssueBlocking:add", function () {
  while (true) {
    let ev = waitForAnyIssueBlockingAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueBlocking.apply(null, args), function () {
      verifyIssueBlockingExists.apply(null, args);
    });
  }
});

// Story: crud:IssueSubscription:nondet:1:1
bthread("crud:IssueSubscription:nondet:1:1", function () {
  let owner = "owner_770";
  let repo = "repo_770";
  let index = "index_770";
  let user = "user_770";
  issueAddSubscription("owner_770", "repo_770", "index_770", "user_770");
  tryToAddExistingIssueSubscription("owner_770", "repo_770", "index_770", "user_770");
  verifyIssueSubscriptionExists("owner_770", "repo_770", "index_770", "user_770");
  issueDeleteSubscription("owner_770", "repo_770", "index_770", "user_770");
  tryToDeleteANonExistingIssueSubscription("owner_770", "repo_770", "index_770", "user_770");
  verifyIssueSubscriptionDoesNotExist("owner_770", "repo_770", "index_770", "user_770");
});

// Story: crud:IssueSubscription:nondet:1:2
bthread("crud:IssueSubscription:nondet:1:2", function () {
  let owner = "owner_771";
  let repo = "repo_771";
  let index = "index_771";
  let user = "user_771";
  issueAddSubscription("owner_771", "repo_771", "index_771", "user_771");
  tryToAddExistingIssueSubscription("owner_771", "repo_771", "index_771", "user_771");
  verifyIssueSubscriptionExists("owner_771", "repo_771", "index_771", "user_771");
  issueDeleteSubscription("owner_771", "repo_771", "index_771", "user_771");
  tryToDeleteANonExistingIssueSubscription("owner_771", "repo_771", "index_771", "user_771");
  verifyIssueSubscriptionDoesNotExist("owner_771", "repo_771", "index_771", "user_771");
});

// Story: crud:IssueSubscription:nondet:negative:dup-add
bthread("crud:IssueSubscription:nondet:negative:dup-add", function () {
  let owner = "owner_776";
  let repo = "repo_776";
  let index = "index_776";
  let user = "user_776";
  issueAddSubscription("owner_776", "repo_776", "index_776", "user_776");
  verifyIssueSubscriptionExists("owner_776", "repo_776", "index_776", "user_776");
  tryToAddExistingIssueSubscription("owner_776", "repo_776", "index_776", "user_776");
  verifyIssueSubscriptionExists("owner_776", "repo_776", "index_776", "user_776");
});

// Story: monitor:IssueSubscription:add
bthread("monitor:IssueSubscription:add", function () {
  while (true) {
    let ev = waitForAnyIssueSubscriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueSubscription.apply(null, args), function () {
      verifyIssueSubscriptionExists.apply(null, args);
    });
  }
});

// Story: crud:IssueTrackedTime:nondet:1:1
bthread("crud:IssueTrackedTime:nondet:1:1", function () {
  let owner = "owner_780";
  let repo = "repo_780";
  let index = "index_780";
  let body = "body_780";
  let id = 780;
  issueAddTime("owner_780", "repo_780", "index_780", "body_780", 780);
  tryToAddExistingIssueTrackedTime("owner_780", "repo_780", "index_780", "body_780", 780);
  verifyIssueTrackedTimeExists("owner_780", "repo_780", "index_780", "body_780", 780);
  issueDeleteTime("owner_780", "repo_780", "index_780", "body_780", 780);
  tryToDeleteANonExistingIssueTrackedTime("owner_780", "repo_780", "index_780", "body_780", 780);
  verifyIssueTrackedTimeDoesNotExist("owner_780", "repo_780", "index_780", "body_780", 780);
});

// Story: crud:IssueTrackedTime:nondet:1:2
bthread("crud:IssueTrackedTime:nondet:1:2", function () {
  let owner = "owner_781";
  let repo = "repo_781";
  let index = "index_781";
  let body = "body_781";
  let id = 781;
  issueAddTime("owner_781", "repo_781", "index_781", "body_781", 781);
  tryToAddExistingIssueTrackedTime("owner_781", "repo_781", "index_781", "body_781", 781);
  verifyIssueTrackedTimeExists("owner_781", "repo_781", "index_781", "body_781", 781);
  issueDeleteTime("owner_781", "repo_781", "index_781", "body_781", 781);
  tryToDeleteANonExistingIssueTrackedTime("owner_781", "repo_781", "index_781", "body_781", 781);
  verifyIssueTrackedTimeDoesNotExist("owner_781", "repo_781", "index_781", "body_781", 781);
});

// Story: crud:IssueTrackedTime:nondet:negative:dup-add
bthread("crud:IssueTrackedTime:nondet:negative:dup-add", function () {
  let owner = "owner_786";
  let repo = "repo_786";
  let index = "index_786";
  let body = "body_786";
  let id = 786;
  issueAddTime("owner_786", "repo_786", "index_786", "body_786", 786);
  verifyIssueTrackedTimeExists("owner_786", "repo_786", "index_786", "body_786", 786);
  tryToAddExistingIssueTrackedTime("owner_786", "repo_786", "index_786", "body_786", 786);
  verifyIssueTrackedTimeExists("owner_786", "repo_786", "index_786", "body_786", 786);
});

// Story: monitor:IssueTrackedTime:add
bthread("monitor:IssueTrackedTime:add", function () {
  while (true) {
    let ev = waitForAnyIssueTrackedTimeAdded();
    let args = Object.values(ev);
    block(matchDeletedIssueTrackedTime.apply(null, args), function () {
      verifyIssueTrackedTimeExists.apply(null, args);
    });
  }
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let org = "org_790";
  createOrganization("org_790");
  tryToAddExistingOrganization("org_790");
  verifyOrganizationExists("org_790");
  editOrganization("org_790");
  deleteOrganization("org_790");
  tryToDeleteANonExistingOrganization("org_790");
  verifyOrganizationDoesNotExist("org_790");
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let org = "org_791";
  createOrganization("org_791");
  tryToAddExistingOrganization("org_791");
  editOrganization("org_791");
  verifyOrganizationExists("org_791");
  deleteOrganization("org_791");
  tryToDeleteANonExistingOrganization("org_791");
  verifyOrganizationDoesNotExist("org_791");
});

// Story: crud:Organization:nondet:negative:dup-add
bthread("crud:Organization:nondet:negative:dup-add", function () {
  let org = "org_796";
  createOrganization("org_796");
  verifyOrganizationExists("org_796");
  tryToAddExistingOrganization("org_796");
  verifyOrganizationExists("org_796");
});

// Story: crud:Organization:nondet:existing:update
bthread("crud:Organization:nondet:existing:update", function () {
  let ev = waitForAnyOrganizationAdded();
  let args = Object.values(ev);
  block(matchDeletedOrganization.apply(null, args), function () {
    verifyOrganizationExists.apply(null, args);
    editOrganization.apply(null, args);
    verifyOrganizationExists.apply(null, args);
  });
});

// Story: monitor:Organization:add
bthread("monitor:Organization:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganization.apply(null, args), function () {
      verifyOrganizationExists.apply(null, args);
    });
  }
});

// Story: crud:OrgRepository:read_only
bthread("crud:OrgRepository:read_only", function () {
  let org = "org_800";
  let name = "name_800";
  verifyOrgRepositoryExists("org_800", "name_800");
});

// Story: crud:OrgActionSecret:nondet:1:1
bthread("crud:OrgActionSecret:nondet:1:1", function () {
  let org = "org_810";
  let secretname = "secretname_810";
  updateOrgSecret("org_810", "secretname_810");
  tryToAddExistingOrgActionSecret("org_810", "secretname_810");
  verifyOrgActionSecretExists("org_810", "secretname_810");
  deleteOrgSecret("org_810", "secretname_810");
  tryToDeleteANonExistingOrgActionSecret("org_810", "secretname_810");
  verifyOrgActionSecretDoesNotExist("org_810", "secretname_810");
});

// Story: crud:OrgActionSecret:nondet:1:2
bthread("crud:OrgActionSecret:nondet:1:2", function () {
  let org = "org_811";
  let secretname = "secretname_811";
  updateOrgSecret("org_811", "secretname_811");
  tryToAddExistingOrgActionSecret("org_811", "secretname_811");
  verifyOrgActionSecretExists("org_811", "secretname_811");
  deleteOrgSecret("org_811", "secretname_811");
  tryToDeleteANonExistingOrgActionSecret("org_811", "secretname_811");
  verifyOrgActionSecretDoesNotExist("org_811", "secretname_811");
});

// Story: crud:OrgActionSecret:nondet:negative:dup-add
bthread("crud:OrgActionSecret:nondet:negative:dup-add", function () {
  let org = "org_816";
  let secretname = "secretname_816";
  updateOrgSecret("org_816", "secretname_816");
  verifyOrgActionSecretExists("org_816", "secretname_816");
  tryToAddExistingOrgActionSecret("org_816", "secretname_816");
  verifyOrgActionSecretExists("org_816", "secretname_816");
});

// Story: monitor:OrgActionSecret:add
bthread("monitor:OrgActionSecret:add", function () {
  while (true) {
    let ev = waitForAnyOrgActionSecretAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgActionSecret.apply(null, args), function () {
      verifyOrgActionSecretExists.apply(null, args);
    });
  }
});

// Story: crud:OrgActionVariable:nondet:1:1
bthread("crud:OrgActionVariable:nondet:1:1", function () {
  let org = "org_820";
  let variablename = "variablename_820";
  createOrgVariable("org_820", "variablename_820");
  tryToAddExistingOrgActionVariable("org_820", "variablename_820");
  verifyOrgActionVariableExists("org_820", "variablename_820");
  updateOrgVariable("org_820", "variablename_820");
  deleteOrgVariable("org_820", "variablename_820");
  tryToDeleteANonExistingOrgActionVariable("org_820", "variablename_820");
  verifyOrgActionVariableDoesNotExist("org_820", "variablename_820");
});

// Story: crud:OrgActionVariable:nondet:1:2
bthread("crud:OrgActionVariable:nondet:1:2", function () {
  let org = "org_821";
  let variablename = "variablename_821";
  createOrgVariable("org_821", "variablename_821");
  tryToAddExistingOrgActionVariable("org_821", "variablename_821");
  updateOrgVariable("org_821", "variablename_821");
  verifyOrgActionVariableExists("org_821", "variablename_821");
  deleteOrgVariable("org_821", "variablename_821");
  tryToDeleteANonExistingOrgActionVariable("org_821", "variablename_821");
  verifyOrgActionVariableDoesNotExist("org_821", "variablename_821");
});

// Story: crud:OrgActionVariable:nondet:negative:dup-add
bthread("crud:OrgActionVariable:nondet:negative:dup-add", function () {
  let org = "org_826";
  let variablename = "variablename_826";
  createOrgVariable("org_826", "variablename_826");
  verifyOrgActionVariableExists("org_826", "variablename_826");
  tryToAddExistingOrgActionVariable("org_826", "variablename_826");
  verifyOrgActionVariableExists("org_826", "variablename_826");
});

// Story: crud:OrgActionVariable:nondet:existing:update
bthread("crud:OrgActionVariable:nondet:existing:update", function () {
  let ev = waitForAnyOrgActionVariableAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgActionVariable.apply(null, args), function () {
    verifyOrgActionVariableExists.apply(null, args);
    updateOrgVariable.apply(null, args);
    verifyOrgActionVariableExists.apply(null, args);
  });
});

// Story: monitor:OrgActionVariable:add
bthread("monitor:OrgActionVariable:add", function () {
  while (true) {
    let ev = waitForAnyOrgActionVariableAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgActionVariable.apply(null, args), function () {
      verifyOrgActionVariableExists.apply(null, args);
    });
  }
});

// Story: crud:OrgBlock:nondet:1:1
bthread("crud:OrgBlock:nondet:1:1", function () {
  let org = "org_840";
  let username = "username_840";
  organizationBlockUser("org_840", "username_840");
  tryToAddExistingOrgBlock("org_840", "username_840");
  verifyOrgBlockExists("org_840", "username_840");
  organizationUnblockUser("org_840", "username_840");
  tryToDeleteANonExistingOrgBlock("org_840", "username_840");
  verifyOrgBlockDoesNotExist("org_840", "username_840");
});

// Story: crud:OrgBlock:nondet:1:2
bthread("crud:OrgBlock:nondet:1:2", function () {
  let org = "org_841";
  let username = "username_841";
  organizationBlockUser("org_841", "username_841");
  tryToAddExistingOrgBlock("org_841", "username_841");
  verifyOrgBlockExists("org_841", "username_841");
  organizationUnblockUser("org_841", "username_841");
  tryToDeleteANonExistingOrgBlock("org_841", "username_841");
  verifyOrgBlockDoesNotExist("org_841", "username_841");
});

// Story: crud:OrgBlock:nondet:negative:dup-add
bthread("crud:OrgBlock:nondet:negative:dup-add", function () {
  let org = "org_846";
  let username = "username_846";
  organizationBlockUser("org_846", "username_846");
  verifyOrgBlockExists("org_846", "username_846");
  tryToAddExistingOrgBlock("org_846", "username_846");
  verifyOrgBlockExists("org_846", "username_846");
});

// Story: monitor:OrgBlock:add
bthread("monitor:OrgBlock:add", function () {
  while (true) {
    let ev = waitForAnyOrgBlockAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgBlock.apply(null, args), function () {
      verifyOrgBlockExists.apply(null, args);
    });
  }
});

// Story: crud:OrgHook:nondet:1:1
bthread("crud:OrgHook:nondet:1:1", function () {
  let org = "org_850";
  let id = 850;
  orgCreateHook("org_850", 850);
  tryToAddExistingOrgHook("org_850", 850);
  verifyOrgHookExists("org_850", 850);
  orgEditHook("org_850", 850);
  orgDeleteHook("org_850", 850);
  tryToDeleteANonExistingOrgHook("org_850", 850);
  verifyOrgHookDoesNotExist("org_850", 850);
});

// Story: crud:OrgHook:nondet:1:2
bthread("crud:OrgHook:nondet:1:2", function () {
  let org = "org_851";
  let id = 851;
  orgCreateHook("org_851", 851);
  tryToAddExistingOrgHook("org_851", 851);
  orgEditHook("org_851", 851);
  verifyOrgHookExists("org_851", 851);
  orgDeleteHook("org_851", 851);
  tryToDeleteANonExistingOrgHook("org_851", 851);
  verifyOrgHookDoesNotExist("org_851", 851);
});

// Story: crud:OrgHook:nondet:negative:dup-add
bthread("crud:OrgHook:nondet:negative:dup-add", function () {
  let org = "org_856";
  let id = 856;
  orgCreateHook("org_856", 856);
  verifyOrgHookExists("org_856", 856);
  tryToAddExistingOrgHook("org_856", 856);
  verifyOrgHookExists("org_856", 856);
});

// Story: crud:OrgHook:nondet:existing:update
bthread("crud:OrgHook:nondet:existing:update", function () {
  let ev = waitForAnyOrgHookAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgHook.apply(null, args), function () {
    verifyOrgHookExists.apply(null, args);
    orgEditHook.apply(null, args);
    verifyOrgHookExists.apply(null, args);
  });
});

// Story: monitor:OrgHook:add
bthread("monitor:OrgHook:add", function () {
  while (true) {
    let ev = waitForAnyOrgHookAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgHook.apply(null, args), function () {
      verifyOrgHookExists.apply(null, args);
    });
  }
});

// Story: crud:OrgLabel:nondet:1:1
bthread("crud:OrgLabel:nondet:1:1", function () {
  let org = "org_860";
  let id = 860;
  orgCreateLabel("org_860", 860);
  tryToAddExistingOrgLabel("org_860", 860);
  verifyOrgLabelExists("org_860", 860);
  orgEditLabel("org_860", 860);
  orgDeleteLabel("org_860", 860);
  tryToDeleteANonExistingOrgLabel("org_860", 860);
  verifyOrgLabelDoesNotExist("org_860", 860);
});

// Story: crud:OrgLabel:nondet:1:2
bthread("crud:OrgLabel:nondet:1:2", function () {
  let org = "org_861";
  let id = 861;
  orgCreateLabel("org_861", 861);
  tryToAddExistingOrgLabel("org_861", 861);
  orgEditLabel("org_861", 861);
  verifyOrgLabelExists("org_861", 861);
  orgDeleteLabel("org_861", 861);
  tryToDeleteANonExistingOrgLabel("org_861", 861);
  verifyOrgLabelDoesNotExist("org_861", 861);
});

// Story: crud:OrgLabel:nondet:negative:dup-add
bthread("crud:OrgLabel:nondet:negative:dup-add", function () {
  let org = "org_866";
  let id = 866;
  orgCreateLabel("org_866", 866);
  verifyOrgLabelExists("org_866", 866);
  tryToAddExistingOrgLabel("org_866", 866);
  verifyOrgLabelExists("org_866", 866);
});

// Story: crud:OrgLabel:nondet:existing:update
bthread("crud:OrgLabel:nondet:existing:update", function () {
  let ev = waitForAnyOrgLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgLabel.apply(null, args), function () {
    verifyOrgLabelExists.apply(null, args);
    orgEditLabel.apply(null, args);
    verifyOrgLabelExists.apply(null, args);
  });
});

// Story: monitor:OrgLabel:add
bthread("monitor:OrgLabel:add", function () {
  while (true) {
    let ev = waitForAnyOrgLabelAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgLabel.apply(null, args), function () {
      verifyOrgLabelExists.apply(null, args);
    });
  }
});

// Story: crud:OrgMember:read_only
bthread("crud:OrgMember:read_only", function () {
  let org = "org_870";
  let username = "username_870";
  verifyOrgMemberExists("org_870", "username_870");
});

// Story: crud:OrgPublicMember:nondet:1:1
bthread("crud:OrgPublicMember:nondet:1:1", function () {
  let org = "org_880";
  let username = "username_880";
  orgPublicizeMember("org_880", "username_880");
  tryToAddExistingOrgPublicMember("org_880", "username_880");
  verifyOrgPublicMemberExists("org_880", "username_880");
  orgConcealMember("org_880", "username_880");
  tryToDeleteANonExistingOrgPublicMember("org_880", "username_880");
  verifyOrgPublicMemberDoesNotExist("org_880", "username_880");
});

// Story: crud:OrgPublicMember:nondet:1:2
bthread("crud:OrgPublicMember:nondet:1:2", function () {
  let org = "org_881";
  let username = "username_881";
  orgPublicizeMember("org_881", "username_881");
  tryToAddExistingOrgPublicMember("org_881", "username_881");
  verifyOrgPublicMemberExists("org_881", "username_881");
  orgConcealMember("org_881", "username_881");
  tryToDeleteANonExistingOrgPublicMember("org_881", "username_881");
  verifyOrgPublicMemberDoesNotExist("org_881", "username_881");
});

// Story: crud:OrgPublicMember:nondet:negative:dup-add
bthread("crud:OrgPublicMember:nondet:negative:dup-add", function () {
  let org = "org_886";
  let username = "username_886";
  orgPublicizeMember("org_886", "username_886");
  verifyOrgPublicMemberExists("org_886", "username_886");
  tryToAddExistingOrgPublicMember("org_886", "username_886");
  verifyOrgPublicMemberExists("org_886", "username_886");
});

// Story: monitor:OrgPublicMember:add
bthread("monitor:OrgPublicMember:add", function () {
  while (true) {
    let ev = waitForAnyOrgPublicMemberAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgPublicMember.apply(null, args), function () {
      verifyOrgPublicMemberExists.apply(null, args);
    });
  }
});

// Story: crud:OrgTeam:nondet:1:1
bthread("crud:OrgTeam:nondet:1:1", function () {
  let org = "org_890";
  let id = 890;
  orgCreateTeam("org_890", 890);
  tryToAddExistingOrgTeam("org_890", 890);
  verifyOrgTeamExists("org_890", 890);
  orgEditTeam("org_890", 890);
  orgDeleteTeam("org_890", 890);
  tryToDeleteANonExistingOrgTeam("org_890", 890);
  verifyOrgTeamDoesNotExist("org_890", 890);
});

// Story: crud:OrgTeam:nondet:1:2
bthread("crud:OrgTeam:nondet:1:2", function () {
  let org = "org_891";
  let id = 891;
  orgCreateTeam("org_891", 891);
  tryToAddExistingOrgTeam("org_891", 891);
  orgEditTeam("org_891", 891);
  verifyOrgTeamExists("org_891", 891);
  orgDeleteTeam("org_891", 891);
  tryToDeleteANonExistingOrgTeam("org_891", 891);
  verifyOrgTeamDoesNotExist("org_891", 891);
});

// Story: crud:OrgTeam:nondet:negative:dup-add
bthread("crud:OrgTeam:nondet:negative:dup-add", function () {
  let org = "org_896";
  let id = 896;
  orgCreateTeam("org_896", 896);
  verifyOrgTeamExists("org_896", 896);
  tryToAddExistingOrgTeam("org_896", 896);
  verifyOrgTeamExists("org_896", 896);
});

// Story: crud:OrgTeam:nondet:existing:update
bthread("crud:OrgTeam:nondet:existing:update", function () {
  let ev = waitForAnyOrgTeamAdded();
  let args = Object.values(ev);
  block(matchDeletedOrgTeam.apply(null, args), function () {
    verifyOrgTeamExists.apply(null, args);
    orgEditTeam.apply(null, args);
    verifyOrgTeamExists.apply(null, args);
  });
});

// Story: monitor:OrgTeam:add
bthread("monitor:OrgTeam:add", function () {
  while (true) {
    let ev = waitForAnyOrgTeamAdded();
    let args = Object.values(ev);
    block(matchDeletedOrgTeam.apply(null, args), function () {
      verifyOrgTeamExists.apply(null, args);
    });
  }
});

// Story: crud:TeamMember:nondet:1:1
bthread("crud:TeamMember:nondet:1:1", function () {
  let id = 900;
  let username = "username_900";
  orgAddTeamMember(900, "username_900");
  tryToAddExistingTeamMember(900, "username_900");
  verifyTeamMemberExists(900, "username_900");
  orgRemoveTeamMember(900, "username_900");
  tryToDeleteANonExistingTeamMember(900, "username_900");
  verifyTeamMemberDoesNotExist(900, "username_900");
});

// Story: crud:TeamMember:nondet:1:2
bthread("crud:TeamMember:nondet:1:2", function () {
  let id = 901;
  let username = "username_901";
  orgAddTeamMember(901, "username_901");
  tryToAddExistingTeamMember(901, "username_901");
  verifyTeamMemberExists(901, "username_901");
  orgRemoveTeamMember(901, "username_901");
  tryToDeleteANonExistingTeamMember(901, "username_901");
  verifyTeamMemberDoesNotExist(901, "username_901");
});

// Story: crud:TeamMember:nondet:negative:dup-add
bthread("crud:TeamMember:nondet:negative:dup-add", function () {
  let id = 906;
  let username = "username_906";
  orgAddTeamMember(906, "username_906");
  verifyTeamMemberExists(906, "username_906");
  tryToAddExistingTeamMember(906, "username_906");
  verifyTeamMemberExists(906, "username_906");
});

// Story: monitor:TeamMember:add
bthread("monitor:TeamMember:add", function () {
  while (true) {
    let ev = waitForAnyTeamMemberAdded();
    let args = Object.values(ev);
    block(matchDeletedTeamMember.apply(null, args), function () {
      verifyTeamMemberExists.apply(null, args);
    });
  }
});

// Story: crud:TeamRepository:nondet:1:1
bthread("crud:TeamRepository:nondet:1:1", function () {
  let id = 910;
  let org = "org_910";
  let repo = "repo_910";
  orgAddTeamRepository(910, "org_910", "repo_910");
  tryToAddExistingTeamRepository(910, "org_910", "repo_910");
  verifyTeamRepositoryExists(910, "org_910", "repo_910");
  orgRemoveTeamRepository(910, "org_910", "repo_910");
  tryToDeleteANonExistingTeamRepository(910, "org_910", "repo_910");
  verifyTeamRepositoryDoesNotExist(910, "org_910", "repo_910");
});

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let id = 911;
  let org = "org_911";
  let repo = "repo_911";
  orgAddTeamRepository(911, "org_911", "repo_911");
  tryToAddExistingTeamRepository(911, "org_911", "repo_911");
  verifyTeamRepositoryExists(911, "org_911", "repo_911");
  orgRemoveTeamRepository(911, "org_911", "repo_911");
  tryToDeleteANonExistingTeamRepository(911, "org_911", "repo_911");
  verifyTeamRepositoryDoesNotExist(911, "org_911", "repo_911");
});

// Story: crud:TeamRepository:nondet:negative:dup-add
bthread("crud:TeamRepository:nondet:negative:dup-add", function () {
  let id = 916;
  let org = "org_916";
  let repo = "repo_916";
  orgAddTeamRepository(916, "org_916", "repo_916");
  verifyTeamRepositoryExists(916, "org_916", "repo_916");
  tryToAddExistingTeamRepository(916, "org_916", "repo_916");
  verifyTeamRepositoryExists(916, "org_916", "repo_916");
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

// Story: crud:CronTask:read_only
bthread("crud:CronTask:read_only", function () {
  let task = "task_920";
  verifyCronTaskExists("task_920");
});

// Story: crud:Email:read_only
bthread("crud:Email:read_only", function () {
  let q = "q_930";
  verifyEmailExists("q_930");
});

// Story: crud:RunnerRegistrationToken:read_only
bthread("crud:RunnerRegistrationToken:read_only", function () {

  verifyRunnerRegistrationTokenExists();
});

// Story: crud:UnadoptedRepository:nondet:1:1
bthread("crud:UnadoptedRepository:nondet:1:1", function () {
  let owner = "owner_950";
  let repo = "repo_950";
  adoptUnadoptedRepository("owner_950", "repo_950");
  tryToAddExistingUnadoptedRepository("owner_950", "repo_950");
  verifyUnadoptedRepositoryExists("owner_950", "repo_950");
  deleteUnadoptedRepository("owner_950", "repo_950");
  tryToDeleteANonExistingUnadoptedRepository("owner_950", "repo_950");
  verifyUnadoptedRepositoryDoesNotExist("owner_950", "repo_950");
});

// Story: crud:UnadoptedRepository:nondet:1:2
bthread("crud:UnadoptedRepository:nondet:1:2", function () {
  let owner = "owner_951";
  let repo = "repo_951";
  adoptUnadoptedRepository("owner_951", "repo_951");
  tryToAddExistingUnadoptedRepository("owner_951", "repo_951");
  verifyUnadoptedRepositoryExists("owner_951", "repo_951");
  deleteUnadoptedRepository("owner_951", "repo_951");
  tryToDeleteANonExistingUnadoptedRepository("owner_951", "repo_951");
  verifyUnadoptedRepositoryDoesNotExist("owner_951", "repo_951");
});

// Story: crud:UnadoptedRepository:nondet:negative:dup-add
bthread("crud:UnadoptedRepository:nondet:negative:dup-add", function () {
  let owner = "owner_956";
  let repo = "repo_956";
  adoptUnadoptedRepository("owner_956", "repo_956");
  verifyUnadoptedRepositoryExists("owner_956", "repo_956");
  tryToAddExistingUnadoptedRepository("owner_956", "repo_956");
  verifyUnadoptedRepositoryExists("owner_956", "repo_956");
});

// Story: monitor:UnadoptedRepository:add
bthread("monitor:UnadoptedRepository:add", function () {
  while (true) {
    let ev = waitForAnyUnadoptedRepositoryAdded();
    let args = Object.values(ev);
    block(matchDeletedUnadoptedRepository.apply(null, args), function () {
      verifyUnadoptedRepositoryExists.apply(null, args);
    });
  }
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let source_id = 960;
  let login_name = "login_name_960";
  let page = "page_960";
  let limit = "limit_960";
  let username = "username_960";
  let purge = "purge_960";
  createUser(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
  tryToAddExistingUser(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
  verifyUserExists(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
  editUser(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
  deleteUser(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
  tryToDeleteANonExistingUser(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
  verifyUserDoesNotExist(960, "login_name_960", "page_960", "limit_960", "username_960", "purge_960");
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let source_id = 961;
  let login_name = "login_name_961";
  let page = "page_961";
  let limit = "limit_961";
  let username = "username_961";
  let purge = "purge_961";
  createUser(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
  tryToAddExistingUser(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
  editUser(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
  verifyUserExists(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
  deleteUser(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
  tryToDeleteANonExistingUser(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
  verifyUserDoesNotExist(961, "login_name_961", "page_961", "limit_961", "username_961", "purge_961");
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let source_id = 966;
  let login_name = "login_name_966";
  let page = "page_966";
  let limit = "limit_966";
  let username = "username_966";
  let purge = "purge_966";
  createUser(966, "login_name_966", "page_966", "limit_966", "username_966", "purge_966");
  verifyUserExists(966, "login_name_966", "page_966", "limit_966", "username_966", "purge_966");
  tryToAddExistingUser(966, "login_name_966", "page_966", "limit_966", "username_966", "purge_966");
  verifyUserExists(966, "login_name_966", "page_966", "limit_966", "username_966", "purge_966");
});

// Story: crud:User:nondet:existing:update
bthread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    verifyUserExists.apply(null, args);
    editUser.apply(null, args);
    verifyUserExists.apply(null, args);
  });
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:UserBadge:nondet:1:1
bthread("crud:UserBadge:nondet:1:1", function () {
  let username = "username_970";
  addUserBadge("username_970");
  tryToAddExistingUserBadge("username_970");
  verifyUserBadgeExists("username_970");
  deleteUserBadge("username_970");
  tryToDeleteANonExistingUserBadge("username_970");
  verifyUserBadgeDoesNotExist("username_970");
});

// Story: crud:UserBadge:nondet:1:2
bthread("crud:UserBadge:nondet:1:2", function () {
  let username = "username_971";
  addUserBadge("username_971");
  tryToAddExistingUserBadge("username_971");
  verifyUserBadgeExists("username_971");
  deleteUserBadge("username_971");
  tryToDeleteANonExistingUserBadge("username_971");
  verifyUserBadgeDoesNotExist("username_971");
});

// Story: crud:UserBadge:nondet:negative:dup-add
bthread("crud:UserBadge:nondet:negative:dup-add", function () {
  let username = "username_976";
  addUserBadge("username_976");
  verifyUserBadgeExists("username_976");
  tryToAddExistingUserBadge("username_976");
  verifyUserBadgeExists("username_976");
});

// Story: monitor:UserBadge:add
bthread("monitor:UserBadge:add", function () {
  while (true) {
    let ev = waitForAnyUserBadgeAdded();
    let args = Object.values(ev);
    block(matchDeletedUserBadge.apply(null, args), function () {
      verifyUserBadgeExists.apply(null, args);
    });
  }
});

// Story: crud:UserPublicKey:nondet:1:1
bthread("crud:UserPublicKey:nondet:1:1", function () {
  let username = "username_980";
  let id = 980;
  addUserPublicKey("username_980", 980);
  tryToAddExistingUserPublicKey("username_980", 980);
  verifyUserPublicKeyExists("username_980", 980);
  deleteUserPublicKey("username_980", 980);
  tryToDeleteANonExistingUserPublicKey("username_980", 980);
  verifyUserPublicKeyDoesNotExist("username_980", 980);
});

// Story: crud:UserPublicKey:nondet:1:2
bthread("crud:UserPublicKey:nondet:1:2", function () {
  let username = "username_981";
  let id = 981;
  addUserPublicKey("username_981", 981);
  tryToAddExistingUserPublicKey("username_981", 981);
  verifyUserPublicKeyExists("username_981", 981);
  deleteUserPublicKey("username_981", 981);
  tryToDeleteANonExistingUserPublicKey("username_981", 981);
  verifyUserPublicKeyDoesNotExist("username_981", 981);
});

// Story: crud:UserPublicKey:nondet:negative:dup-add
bthread("crud:UserPublicKey:nondet:negative:dup-add", function () {
  let username = "username_986";
  let id = 986;
  addUserPublicKey("username_986", 986);
  verifyUserPublicKeyExists("username_986", 986);
  tryToAddExistingUserPublicKey("username_986", 986);
  verifyUserPublicKeyExists("username_986", 986);
});

// Story: monitor:UserPublicKey:add
bthread("monitor:UserPublicKey:add", function () {
  while (true) {
    let ev = waitForAnyUserPublicKeyAdded();
    let args = Object.values(ev);
    block(matchDeletedUserPublicKey.apply(null, args), function () {
      verifyUserPublicKeyExists.apply(null, args);
    });
  }
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let all = "all_1020";
  let status-types = "status-types_1020";
  let subject-type = "subject-type_1020";
  let since = "since_1020";
  let before = "before_1020";
  let page = "page_1020";
  let limit = "limit_1020";
  let last_read_at = "last_read_at_1020";
  let to-status = "to-status_1020";
  verifyNotificationExists("all_1020", "status-types_1020", "subject-type_1020", "since_1020", "before_1020", "page_1020", "limit_1020", "last_read_at_1020", "to-status_1020");
});

// Story: crud:NotificationNew:read_only
bthread("crud:NotificationNew:read_only", function () {

  verifyNotificationNewExists();
});

// Story: crud:NotificationThread:read_only
bthread("crud:NotificationThread:read_only", function () {
  let id = 1040;
  let to-status = "to-status_1040";
  verifyNotificationThreadExists(1040, "to-status_1040");
});

// Story: crud:RepoNotification:read_only
bthread("crud:RepoNotification:read_only", function () {
  let owner = "owner_1050";
  let repo = "repo_1050";
  let all = "all_1050";
  let status-types = "status-types_1050";
  let subject-type = "subject-type_1050";
  let since = "since_1050";
  let before = "before_1050";
  let page = "page_1050";
  let limit = "limit_1050";
  let to-status = "to-status_1050";
  let last_read_at = "last_read_at_1050";
  verifyRepoNotificationExists("owner_1050", "repo_1050", "all_1050", "status-types_1050", "subject-type_1050", "since_1050", "before_1050", "page_1050", "limit_1050", "to-status_1050", "last_read_at_1050");
});

// Story: crud:SettingsAPI:read_only
bthread("crud:SettingsAPI:read_only", function () {

  verifySettingsAPIExists();
});

// Story: crud:SettingsAttachment:read_only
bthread("crud:SettingsAttachment:read_only", function () {

  verifySettingsAttachmentExists();
});

// Story: crud:SettingsRepository:read_only
bthread("crud:SettingsRepository:read_only", function () {

  verifySettingsRepositoryExists();
});

// Story: crud:SettingsUI:read_only
bthread("crud:SettingsUI:read_only", function () {

  verifySettingsUIExists();
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let owner = "owner_1100";
  let type = "type_1100";
  let name = "name_1100";
  let version = "version_1100";
  verifyPackageExists("owner_1100", "type_1100", "name_1100", "version_1100");
});

// Story: crud:PackageCollection:read_only
bthread("crud:PackageCollection:read_only", function () {
  let owner = "owner_1110";
  verifyPackageCollectionExists("owner_1110");
});

// Story: crud:PackageFiles:read_only
bthread("crud:PackageFiles:read_only", function () {
  let owner = "owner_1120";
  let type = "type_1120";
  let name = "name_1120";
  let version = "version_1120";
  verifyPackageFilesExists("owner_1120", "type_1120", "name_1120", "version_1120");
});

// Story: crud:Person:read_only
bthread("crud:Person:read_only", function () {
  let user-id = "user-id_1130";
  verifyPersonExists("user-id_1130");
});
