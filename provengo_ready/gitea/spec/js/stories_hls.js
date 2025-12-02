// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Repository:nondet:1:1
bthread("crud:Repository:nondet:1:1", function () {
  let filepath = "filepath_200";
  let id = 200;
  let name = "name_200";
  let org = "org_200";
  let owner = "owner_200";
  let ref = "ref_200";
  let repo = "repo_200";
  let template_owner = "template_owner_200";
  let template_repo = "template_repo_200";
  let username = "username_200";
  adminCreateRepo(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  // waitForRepositoryAdded(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  tryToAddExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  verifyRepositoryExists(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  editRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  deleteRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  tryToDeleteANonExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  verifyRepositoryDoesNotExist(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
});

// Story: crud:Repository:nondet:1:2
bthread("crud:Repository:nondet:1:2", function () {
  let filepath = "filepath_201";
  let id = 201;
  let name = "name_201";
  let org = "org_201";
  let owner = "owner_201";
  let ref = "ref_201";
  let repo = "repo_201";
  let template_owner = "template_owner_201";
  let template_repo = "template_repo_201";
  let username = "username_201";
  adminCreateRepo(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  // waitForRepositoryAdded(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  tryToAddExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  editRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  verifyRepositoryExists(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  deleteRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  tryToDeleteANonExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  verifyRepositoryDoesNotExist(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
});

// Story: crud:Repository:nondet:negative:dup-add
bthread("crud:Repository:nondet:negative:dup-add", function () {
  let filepath = "filepath_206";
  let id = 206;
  let name = "name_206";
  let org = "org_206";
  let owner = "owner_206";
  let ref = "ref_206";
  let repo = "repo_206";
  let template_owner = "template_owner_206";
  let template_repo = "template_repo_206";
  let username = "username_206";
  adminCreateRepo(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  // waitForRepositoryAdded(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  verifyRepositoryExists(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  tryToAddExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
  verifyRepositoryExists(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
});

// Story: crud:RepositorySecret:nondet:1:1
bthread("crud:RepositorySecret:nondet:1:1", function () {
  let owner = 210;
  let repo = "repo_210";
  let secretname = "secretname_210";
  createOrUpdateRepoSecret(owner, repo, secretname);
  // waitForRepositorySecretAdded(owner, repo, secretname);
  tryToAddExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
  deleteRepoSecret(owner, repo, secretname);
  tryToDeleteANonExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretDoesNotExist(owner, repo, secretname);
});

// Story: crud:RepositorySecret:nondet:1:2
bthread("crud:RepositorySecret:nondet:1:2", function () {
  let owner = 211;
  let repo = "repo_211";
  let secretname = "secretname_211";
  createOrUpdateRepoSecret(owner, repo, secretname);
  // waitForRepositorySecretAdded(owner, repo, secretname);
  tryToAddExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
  deleteRepoSecret(owner, repo, secretname);
  tryToDeleteANonExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretDoesNotExist(owner, repo, secretname);
});

// Story: crud:RepositorySecret:nondet:negative:dup-add
bthread("crud:RepositorySecret:nondet:negative:dup-add", function () {
  let owner = 216;
  let repo = "repo_216";
  let secretname = "secretname_216";
  createOrUpdateRepoSecret(owner, repo, secretname);
  // waitForRepositorySecretAdded(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
  tryToAddExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
});

// Story: crud:RepositoryVariable:nondet:1:1
bthread("crud:RepositoryVariable:nondet:1:1", function () {
  let owner = 220;
  let repo = "repo_220";
  let variablename = "variablename_220";
  createRepoVariable(owner, repo, variablename);
  // waitForRepositoryVariableAdded(owner, repo, variablename);
  tryToAddExistingRepositoryVariable(owner, repo, variablename);
  verifyRepositoryVariableExists(owner, repo, variablename);
  updateRepoVariable(owner, repo, variablename);
  deleteRepoVariable(owner, repo, variablename);
  tryToDeleteANonExistingRepositoryVariable(owner, repo, variablename);
  verifyRepositoryVariableDoesNotExist(owner, repo, variablename);
});

// Story: crud:RepositoryVariable:nondet:1:2
bthread("crud:RepositoryVariable:nondet:1:2", function () {
  let owner = 221;
  let repo = "repo_221";
  let variablename = "variablename_221";
  createRepoVariable(owner, repo, variablename);
  // waitForRepositoryVariableAdded(owner, repo, variablename);
  tryToAddExistingRepositoryVariable(owner, repo, variablename);
  updateRepoVariable(owner, repo, variablename);
  verifyRepositoryVariableExists(owner, repo, variablename);
  deleteRepoVariable(owner, repo, variablename);
  tryToDeleteANonExistingRepositoryVariable(owner, repo, variablename);
  verifyRepositoryVariableDoesNotExist(owner, repo, variablename);
});

// Story: crud:RepositoryVariable:nondet:negative:dup-add
bthread("crud:RepositoryVariable:nondet:negative:dup-add", function () {
  let owner = 226;
  let repo = "repo_226";
  let variablename = "variablename_226";
  createRepoVariable(owner, repo, variablename);
  // waitForRepositoryVariableAdded(owner, repo, variablename);
  verifyRepositoryVariableExists(owner, repo, variablename);
  tryToAddExistingRepositoryVariable(owner, repo, variablename);
  verifyRepositoryVariableExists(owner, repo, variablename);
});

// Story: crud:BranchProtection:nondet:1:1
bthread("crud:BranchProtection:nondet:1:1", function () {
  let name = "name_240";
  let owner = 240;
  let repo = "repo_240";
  createBranchProtection(name, owner, repo);
  // waitForBranchProtectionAdded(name, owner, repo);
  tryToAddExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
  editBranchProtection(name, owner, repo);
  deleteBranchProtection(name, owner, repo);
  tryToDeleteANonExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionDoesNotExist(name, owner, repo);
});

// Story: crud:BranchProtection:nondet:1:2
bthread("crud:BranchProtection:nondet:1:2", function () {
  let name = "name_241";
  let owner = 241;
  let repo = "repo_241";
  createBranchProtection(name, owner, repo);
  // waitForBranchProtectionAdded(name, owner, repo);
  tryToAddExistingBranchProtection(name, owner, repo);
  editBranchProtection(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
  deleteBranchProtection(name, owner, repo);
  tryToDeleteANonExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionDoesNotExist(name, owner, repo);
});

// Story: crud:BranchProtection:nondet:negative:dup-add
bthread("crud:BranchProtection:nondet:negative:dup-add", function () {
  let name = "name_246";
  let owner = 246;
  let repo = "repo_246";
  createBranchProtection(name, owner, repo);
  // waitForBranchProtectionAdded(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
  tryToAddExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
});

// Story: crud:Branch:nondet:1:1
bthread("crud:Branch:nondet:1:1", function () {
  let branch = "branch_250";
  let owner = 250;
  let repo = "repo_250";
  createBranch(branch, owner, repo);
  // waitForBranchAdded(branch, owner, repo);
  tryToAddExistingBranch(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
  updateBranch(branch, owner, repo);
  deleteBranch(branch, owner, repo);
  tryToDeleteANonExistingBranch(branch, owner, repo);
  verifyBranchDoesNotExist(branch, owner, repo);
});

// Story: crud:Branch:nondet:1:2
bthread("crud:Branch:nondet:1:2", function () {
  let branch = "branch_251";
  let owner = 251;
  let repo = "repo_251";
  createBranch(branch, owner, repo);
  // waitForBranchAdded(branch, owner, repo);
  tryToAddExistingBranch(branch, owner, repo);
  updateBranch(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
  deleteBranch(branch, owner, repo);
  tryToDeleteANonExistingBranch(branch, owner, repo);
  verifyBranchDoesNotExist(branch, owner, repo);
});

// Story: crud:Branch:nondet:negative:dup-add
bthread("crud:Branch:nondet:negative:dup-add", function () {
  let branch = "branch_256";
  let owner = 256;
  let repo = "repo_256";
  createBranch(branch, owner, repo);
  // waitForBranchAdded(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
  tryToAddExistingBranch(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
});

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let collaborator = "collaborator_260";
  let owner = 260;
  let repo = "repo_260";
  addCollaborator(collaborator, owner, repo);
  // waitForCollaboratorAdded(collaborator, owner, repo);
  tryToAddExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
  deleteCollaborator(collaborator, owner, repo);
  tryToDeleteANonExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorDoesNotExist(collaborator, owner, repo);
});

// Story: crud:Collaborator:nondet:1:2
bthread("crud:Collaborator:nondet:1:2", function () {
  let collaborator = "collaborator_261";
  let owner = 261;
  let repo = "repo_261";
  addCollaborator(collaborator, owner, repo);
  // waitForCollaboratorAdded(collaborator, owner, repo);
  tryToAddExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
  deleteCollaborator(collaborator, owner, repo);
  tryToDeleteANonExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorDoesNotExist(collaborator, owner, repo);
});

// Story: crud:Collaborator:nondet:negative:dup-add
bthread("crud:Collaborator:nondet:negative:dup-add", function () {
  let collaborator = "collaborator_266";
  let owner = 266;
  let repo = "repo_266";
  addCollaborator(collaborator, owner, repo);
  // waitForCollaboratorAdded(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
  tryToAddExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
});

// Story: crud:RepositoryCollaboratorPermission:read_only
bthread("crud:RepositoryCollaboratorPermission:read_only", function () {
  let collaborator = "collaborator_280";
  let owner = 280;
  let repo = "repo_280";
  verifyRepositoryCollaboratorPermissionExists(collaborator, owner, repo);
});

// Story: crud:Commit:read_only
bthread("crud:Commit:read_only", function () {
  let basehead = "basehead_290";
  let files = "files_290";
  let owner = 290;
  let ref = "ref_290";
  let repo = "repo_290";
  let sha = "sha_290";
  let stat = "stat_290";
  let verification = "verification_290";
  verifyCommitExists(basehead, files, owner, ref, repo, sha, stat, verification);
});

// Story: crud:CommitComparison:read_only
bthread("crud:CommitComparison:read_only", function () {
  let basehead = "basehead_300";
  let owner = 300;
  let repo = "repo_300";
  verifyCommitComparisonExists(basehead, owner, repo);
});

// Story: crud:RepositoryContent:read_only
bthread("crud:RepositoryContent:read_only", function () {
  let filepath = "filepath_310";
  let owner = 310;
  let repo = "repo_310";
  verifyRepositoryContentExists(filepath, owner, repo);
});

// Story: crud:EditorConfig:read_only
bthread("crud:EditorConfig:read_only", function () {
  let filepath = "filepath_330";
  let owner = 330;
  let repo = "repo_330";
  verifyEditorConfigExists(filepath, owner, repo);
});

// Story: crud:Fork:read_only
bthread("crud:Fork:read_only", function () {
  let limit = "limit_340";
  let owner = 340;
  let page = "page_340";
  let repo = "repo_340";
  verifyForkExists(limit, owner, page, repo);
});

// Story: crud:Blob:read_only
bthread("crud:Blob:read_only", function () {
  let owner = 350;
  let repo = "repo_350";
  let sha = "sha_350";
  verifyBlobExists(owner, repo, sha);
});

// Story: crud:CommitDiffOrPatch:read_only
bthread("crud:CommitDiffOrPatch:read_only", function () {
  let diffType = "diffType_360";
  let owner = 360;
  let repo = "repo_360";
  let sha = "sha_360";
  verifyCommitDiffOrPatchExists(diffType, owner, repo, sha);
});

// Story: crud:Note:read_only
bthread("crud:Note:read_only", function () {
  let files = "files_370";
  let owner = 370;
  let repo = "repo_370";
  let sha = "sha_370";
  let verification = "verification_370";
  verifyNoteExists(files, owner, repo, sha, verification);
});

// Story: crud:GitRef:read_only
bthread("crud:GitRef:read_only", function () {
  let owner = 380;
  let repo = "repo_380";
  verifyGitRefExists(owner, repo);
});

// Story: crud:GitRefDetail:read_only
bthread("crud:GitRefDetail:read_only", function () {
  let owner = 390;
  let ref = "ref_390";
  let repo = "repo_390";
  verifyGitRefDetailExists(owner, ref, repo);
});

// Story: crud:AnnotatedTag:read_only
bthread("crud:AnnotatedTag:read_only", function () {
  let owner = 400;
  let repo = "repo_400";
  let sha = "sha_400";
  verifyAnnotatedTagExists(owner, repo, sha);
});

// Story: crud:Tree:read_only
bthread("crud:Tree:read_only", function () {
  let owner = 410;
  let page = "page_410";
  let per_page = "per_page_410";
  let recursive = "recursive_410";
  let repo = "repo_410";
  let sha = "sha_410";
  verifyTreeExists(owner, page, per_page, recursive, repo, sha);
});

// Story: crud:Hook:nondet:1:1
bthread("crud:Hook:nondet:1:1", function () {
  let id = 420;
  let limit = "limit_420";
  let org = "org_420";
  let owner = "owner_420";
  let page = "page_420";
  let repo = "repo_420";
  let type = "type_420";
  createHook(id, limit, org, owner, page, repo, type);
  // waitForHookAdded(id, limit, org, owner, page, repo, type);
  tryToAddExistingHook(id, limit, org, owner, page, repo, type);
  verifyHookExists(id, limit, org, owner, page, repo, type);
  updateHook(id, limit, org, owner, page, repo, type);
  deleteHook(id, limit, org, owner, page, repo, type);
  tryToDeleteANonExistingHook(id, limit, org, owner, page, repo, type);
  verifyHookDoesNotExist(id, limit, org, owner, page, repo, type);
});

// Story: crud:Hook:nondet:1:2
bthread("crud:Hook:nondet:1:2", function () {
  let id = 421;
  let limit = "limit_421";
  let org = "org_421";
  let owner = "owner_421";
  let page = "page_421";
  let repo = "repo_421";
  let type = "type_421";
  createHook(id, limit, org, owner, page, repo, type);
  // waitForHookAdded(id, limit, org, owner, page, repo, type);
  tryToAddExistingHook(id, limit, org, owner, page, repo, type);
  updateHook(id, limit, org, owner, page, repo, type);
  verifyHookExists(id, limit, org, owner, page, repo, type);
  deleteHook(id, limit, org, owner, page, repo, type);
  tryToDeleteANonExistingHook(id, limit, org, owner, page, repo, type);
  verifyHookDoesNotExist(id, limit, org, owner, page, repo, type);
});

// Story: crud:Hook:nondet:negative:dup-add
bthread("crud:Hook:nondet:negative:dup-add", function () {
  let id = 426;
  let limit = "limit_426";
  let org = "org_426";
  let owner = "owner_426";
  let page = "page_426";
  let repo = "repo_426";
  let type = "type_426";
  createHook(id, limit, org, owner, page, repo, type);
  // waitForHookAdded(id, limit, org, owner, page, repo, type);
  verifyHookExists(id, limit, org, owner, page, repo, type);
  tryToAddExistingHook(id, limit, org, owner, page, repo, type);
  verifyHookExists(id, limit, org, owner, page, repo, type);
});

// Story: crud:GitHook:read_only
bthread("crud:GitHook:read_only", function () {
  let id = 430;
  let owner = 430;
  let repo = "repo_430";
  verifyGitHookExists(id, owner, repo);
});

// Story: crud:Key:nondet:1:1
bthread("crud:Key:nondet:1:1", function () {
  let id = 450;
  let owner = 450;
  let repo = "repo_450";
  repoCreateKey(id, owner, repo);
  // waitForKeyAdded(id, owner, repo);
  tryToAddExistingKey(id, owner, repo);
  verifyKeyExists(id, owner, repo);
  repoDeleteKey(id, owner, repo);
  tryToDeleteANonExistingKey(id, owner, repo);
  verifyKeyDoesNotExist(id, owner, repo);
});

// Story: crud:Key:nondet:1:2
bthread("crud:Key:nondet:1:2", function () {
  let id = 451;
  let owner = 451;
  let repo = "repo_451";
  repoCreateKey(id, owner, repo);
  // waitForKeyAdded(id, owner, repo);
  tryToAddExistingKey(id, owner, repo);
  verifyKeyExists(id, owner, repo);
  repoDeleteKey(id, owner, repo);
  tryToDeleteANonExistingKey(id, owner, repo);
  verifyKeyDoesNotExist(id, owner, repo);
});

// Story: crud:Key:nondet:negative:dup-add
bthread("crud:Key:nondet:negative:dup-add", function () {
  let id = 456;
  let owner = 456;
  let repo = "repo_456";
  repoCreateKey(id, owner, repo);
  // waitForKeyAdded(id, owner, repo);
  verifyKeyExists(id, owner, repo);
  tryToAddExistingKey(id, owner, repo);
  verifyKeyExists(id, owner, repo);
});

// Story: crud:PullRequest:read_only
bthread("crud:PullRequest:read_only", function () {
  let base = "base_460";
  let binary = "binary_460";
  let diffType = "diffType_460";
  let files = "files_460";
  let head = "head_460";
  let index = "index_460";
  let labels = "labels_460";
  let limit = "limit_460";
  let milestone = "milestone_460";
  let owner = 460;
  let page = "page_460";
  let poster = "poster_460";
  let repo = "repo_460";
  let skip-to = "skip-to_460";
  let sort = "sort_460";
  let state = "state_460";
  let style = "style_460";
  let verification = "verification_460";
  let whitespace = "whitespace_460";
  verifyPullRequestExists(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace);
});

// Story: crud:PullReviewRequest:nondet:1:1
bthread("crud:PullReviewRequest:nondet:1:1", function () {
  let index = "index_470";
  let owner = 470;
  let repo = "repo_470";
  createPullReviewRequests(index, owner, repo);
  // waitForPullReviewRequestAdded(index, owner, repo);
  tryToAddExistingPullReviewRequest(index, owner, repo);
  verifyPullReviewRequestExists(index, owner, repo);
  deletePullReviewRequests(index, owner, repo);
  tryToDeleteANonExistingPullReviewRequest(index, owner, repo);
  verifyPullReviewRequestDoesNotExist(index, owner, repo);
});

// Story: crud:PullReviewRequest:nondet:1:2
bthread("crud:PullReviewRequest:nondet:1:2", function () {
  let index = "index_471";
  let owner = 471;
  let repo = "repo_471";
  createPullReviewRequests(index, owner, repo);
  // waitForPullReviewRequestAdded(index, owner, repo);
  tryToAddExistingPullReviewRequest(index, owner, repo);
  verifyPullReviewRequestExists(index, owner, repo);
  deletePullReviewRequests(index, owner, repo);
  tryToDeleteANonExistingPullReviewRequest(index, owner, repo);
  verifyPullReviewRequestDoesNotExist(index, owner, repo);
});

// Story: crud:PullReviewRequest:nondet:negative:dup-add
bthread("crud:PullReviewRequest:nondet:negative:dup-add", function () {
  let index = "index_476";
  let owner = 476;
  let repo = "repo_476";
  createPullReviewRequests(index, owner, repo);
  // waitForPullReviewRequestAdded(index, owner, repo);
  verifyPullReviewRequestExists(index, owner, repo);
  tryToAddExistingPullReviewRequest(index, owner, repo);
  verifyPullReviewRequestExists(index, owner, repo);
});

// Story: crud:PullReview:nondet:1:1
bthread("crud:PullReview:nondet:1:1", function () {
  let id = 480;
  let index = "index_480";
  let limit = "limit_480";
  let owner = 480;
  let page = "page_480";
  let repo = "repo_480";
  createPullReview(id, index, limit, owner, page, repo);
  // waitForPullReviewAdded(id, index, limit, owner, page, repo);
  tryToAddExistingPullReview(id, index, limit, owner, page, repo);
  verifyPullReviewExists(id, index, limit, owner, page, repo);
  deletePullReview(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingPullReview(id, index, limit, owner, page, repo);
  verifyPullReviewDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:PullReview:nondet:1:2
bthread("crud:PullReview:nondet:1:2", function () {
  let id = 481;
  let index = "index_481";
  let limit = "limit_481";
  let owner = 481;
  let page = "page_481";
  let repo = "repo_481";
  createPullReview(id, index, limit, owner, page, repo);
  // waitForPullReviewAdded(id, index, limit, owner, page, repo);
  tryToAddExistingPullReview(id, index, limit, owner, page, repo);
  verifyPullReviewExists(id, index, limit, owner, page, repo);
  deletePullReview(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingPullReview(id, index, limit, owner, page, repo);
  verifyPullReviewDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:PullReview:nondet:negative:dup-add
bthread("crud:PullReview:nondet:negative:dup-add", function () {
  let id = 486;
  let index = "index_486";
  let limit = "limit_486";
  let owner = 486;
  let page = "page_486";
  let repo = "repo_486";
  createPullReview(id, index, limit, owner, page, repo);
  // waitForPullReviewAdded(id, index, limit, owner, page, repo);
  verifyPullReviewExists(id, index, limit, owner, page, repo);
  tryToAddExistingPullReview(id, index, limit, owner, page, repo);
  verifyPullReviewExists(id, index, limit, owner, page, repo);
});

// Story: crud:PushMirror:nondet:1:1
bthread("crud:PushMirror:nondet:1:1", function () {
  let name = "name_510";
  let owner = 510;
  let repo = "repo_510";
  repoAddPushMirror(name, owner, repo);
  // waitForPushMirrorAdded(name, owner, repo);
  tryToAddExistingPushMirror(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
  repoDeletePushMirror(name, owner, repo);
  tryToDeleteANonExistingPushMirror(name, owner, repo);
  verifyPushMirrorDoesNotExist(name, owner, repo);
});

// Story: crud:PushMirror:nondet:1:2
bthread("crud:PushMirror:nondet:1:2", function () {
  let name = "name_511";
  let owner = 511;
  let repo = "repo_511";
  repoAddPushMirror(name, owner, repo);
  // waitForPushMirrorAdded(name, owner, repo);
  tryToAddExistingPushMirror(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
  repoDeletePushMirror(name, owner, repo);
  tryToDeleteANonExistingPushMirror(name, owner, repo);
  verifyPushMirrorDoesNotExist(name, owner, repo);
});

// Story: crud:PushMirror:nondet:negative:dup-add
bthread("crud:PushMirror:nondet:negative:dup-add", function () {
  let name = "name_516";
  let owner = 516;
  let repo = "repo_516";
  repoAddPushMirror(name, owner, repo);
  // waitForPushMirrorAdded(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
  tryToAddExistingPushMirror(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
});

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let id = 520;
  let owner = 520;
  let repo = "repo_520";
  let tag = "tag_520";
  repoCreateRelease(id, owner, repo, tag);
  // waitForReleaseAdded(id, owner, repo, tag);
  tryToAddExistingRelease(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
  repoEditRelease(id, owner, repo, tag);
  repoDeleteRelease(id, owner, repo, tag);
  tryToDeleteANonExistingRelease(id, owner, repo, tag);
  verifyReleaseDoesNotExist(id, owner, repo, tag);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let id = 521;
  let owner = 521;
  let repo = "repo_521";
  let tag = "tag_521";
  repoCreateRelease(id, owner, repo, tag);
  // waitForReleaseAdded(id, owner, repo, tag);
  tryToAddExistingRelease(id, owner, repo, tag);
  repoEditRelease(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
  repoDeleteRelease(id, owner, repo, tag);
  tryToDeleteANonExistingRelease(id, owner, repo, tag);
  verifyReleaseDoesNotExist(id, owner, repo, tag);
});

// Story: crud:Release:nondet:negative:dup-add
bthread("crud:Release:nondet:negative:dup-add", function () {
  let id = 526;
  let owner = 526;
  let repo = "repo_526";
  let tag = "tag_526";
  repoCreateRelease(id, owner, repo, tag);
  // waitForReleaseAdded(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
  tryToAddExistingRelease(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
});

// Story: crud:ReleaseAttachment:nondet:1:1
bthread("crud:ReleaseAttachment:nondet:1:1", function () {
  let attachment_id = 530;
  let id = 530;
  let name = "name_530";
  let owner = 530;
  let repo = "repo_530";
  repoCreateReleaseAttachment(attachment_id, id, name, owner, repo);
  // waitForReleaseAttachmentAdded(attachment_id, id, name, owner, repo);
  tryToAddExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentExists(attachment_id, id, name, owner, repo);
  editReleaseAttachment(attachment_id, id, name, owner, repo);
  deleteReleaseAttachment(attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentDoesNotExist(attachment_id, id, name, owner, repo);
});

// Story: crud:ReleaseAttachment:nondet:1:2
bthread("crud:ReleaseAttachment:nondet:1:2", function () {
  let attachment_id = 531;
  let id = 531;
  let name = "name_531";
  let owner = 531;
  let repo = "repo_531";
  repoCreateReleaseAttachment(attachment_id, id, name, owner, repo);
  // waitForReleaseAttachmentAdded(attachment_id, id, name, owner, repo);
  tryToAddExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  editReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentExists(attachment_id, id, name, owner, repo);
  deleteReleaseAttachment(attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentDoesNotExist(attachment_id, id, name, owner, repo);
});

// Story: crud:ReleaseAttachment:nondet:negative:dup-add
bthread("crud:ReleaseAttachment:nondet:negative:dup-add", function () {
  let attachment_id = 536;
  let id = 536;
  let name = "name_536";
  let owner = 536;
  let repo = "repo_536";
  repoCreateReleaseAttachment(attachment_id, id, name, owner, repo);
  // waitForReleaseAttachmentAdded(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentExists(attachment_id, id, name, owner, repo);
  tryToAddExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentExists(attachment_id, id, name, owner, repo);
});

// Story: crud:Reviewer:read_only
bthread("crud:Reviewer:read_only", function () {
  let owner = 540;
  let repo = "repo_540";
  verifyReviewerExists(owner, repo);
});

// Story: crud:SigningKey:read_only
bthread("crud:SigningKey:read_only", function () {
  let owner = 550;
  let repo = "repo_550";
  verifySigningKeyExists(owner, repo);
});

// Story: crud:Stargazer:read_only
bthread("crud:Stargazer:read_only", function () {
  let limit = "limit_560";
  let owner = 560;
  let page = "page_560";
  let repo = "repo_560";
  verifyStargazerExists(limit, owner, page, repo);
});

// Story: crud:CommitStatus:read_only
bthread("crud:CommitStatus:read_only", function () {
  let limit = "limit_570";
  let owner = 570;
  let page = "page_570";
  let repo = "repo_570";
  let sha = "sha_570";
  let sort = "sort_570";
  let state = "state_570";
  verifyCommitStatusExists(limit, owner, page, repo, sha, sort, state);
});

// Story: crud:Subscriber:read_only
bthread("crud:Subscriber:read_only", function () {
  let limit = "limit_580";
  let owner = 580;
  let page = "page_580";
  let repo = "repo_580";
  verifySubscriberExists(limit, owner, page, repo);
});

// Story: crud:Subscription:nondet:1:1
bthread("crud:Subscription:nondet:1:1", function () {
  let owner = "owner_590";
  let repo = "repo_590";
  let username = 590;
  watchRepo(owner, repo, username);
  // waitForSubscriptionAdded(owner, repo, username);
  tryToAddExistingSubscription(owner, repo, username);
  verifySubscriptionExists(owner, repo, username);
  unwatchRepo(owner, repo, username);
  tryToDeleteANonExistingSubscription(owner, repo, username);
  verifySubscriptionDoesNotExist(owner, repo, username);
});

// Story: crud:Subscription:nondet:1:2
bthread("crud:Subscription:nondet:1:2", function () {
  let owner = "owner_591";
  let repo = "repo_591";
  let username = 591;
  watchRepo(owner, repo, username);
  // waitForSubscriptionAdded(owner, repo, username);
  tryToAddExistingSubscription(owner, repo, username);
  verifySubscriptionExists(owner, repo, username);
  unwatchRepo(owner, repo, username);
  tryToDeleteANonExistingSubscription(owner, repo, username);
  verifySubscriptionDoesNotExist(owner, repo, username);
});

// Story: crud:Subscription:nondet:negative:dup-add
bthread("crud:Subscription:nondet:negative:dup-add", function () {
  let owner = "owner_596";
  let repo = "repo_596";
  let username = 596;
  watchRepo(owner, repo, username);
  // waitForSubscriptionAdded(owner, repo, username);
  verifySubscriptionExists(owner, repo, username);
  tryToAddExistingSubscription(owner, repo, username);
  verifySubscriptionExists(owner, repo, username);
});

// Story: crud:TagProtection:nondet:1:1
bthread("crud:TagProtection:nondet:1:1", function () {
  let id = 600;
  let owner = 600;
  let repo = "repo_600";
  createTagProtection(id, owner, repo);
  // waitForTagProtectionAdded(id, owner, repo);
  tryToAddExistingTagProtection(id, owner, repo);
  verifyTagProtectionExists(id, owner, repo);
  editTagProtection(id, owner, repo);
  deleteTagProtection(id, owner, repo);
  tryToDeleteANonExistingTagProtection(id, owner, repo);
  verifyTagProtectionDoesNotExist(id, owner, repo);
});

// Story: crud:TagProtection:nondet:1:2
bthread("crud:TagProtection:nondet:1:2", function () {
  let id = 601;
  let owner = 601;
  let repo = "repo_601";
  createTagProtection(id, owner, repo);
  // waitForTagProtectionAdded(id, owner, repo);
  tryToAddExistingTagProtection(id, owner, repo);
  editTagProtection(id, owner, repo);
  verifyTagProtectionExists(id, owner, repo);
  deleteTagProtection(id, owner, repo);
  tryToDeleteANonExistingTagProtection(id, owner, repo);
  verifyTagProtectionDoesNotExist(id, owner, repo);
});

// Story: crud:TagProtection:nondet:negative:dup-add
bthread("crud:TagProtection:nondet:negative:dup-add", function () {
  let id = 606;
  let owner = 606;
  let repo = "repo_606";
  createTagProtection(id, owner, repo);
  // waitForTagProtectionAdded(id, owner, repo);
  verifyTagProtectionExists(id, owner, repo);
  tryToAddExistingTagProtection(id, owner, repo);
  verifyTagProtectionExists(id, owner, repo);
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let limit = "limit_610";
  let owner = 610;
  let page = "page_610";
  let repo = "repo_610";
  let tag = "tag_610";
  createTag(limit, owner, page, repo, tag);
  // waitForTagAdded(limit, owner, page, repo, tag);
  tryToAddExistingTag(limit, owner, page, repo, tag);
  verifyTagExists(limit, owner, page, repo, tag);
  deleteTag(limit, owner, page, repo, tag);
  tryToDeleteANonExistingTag(limit, owner, page, repo, tag);
  verifyTagDoesNotExist(limit, owner, page, repo, tag);
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let limit = "limit_611";
  let owner = 611;
  let page = "page_611";
  let repo = "repo_611";
  let tag = "tag_611";
  createTag(limit, owner, page, repo, tag);
  // waitForTagAdded(limit, owner, page, repo, tag);
  tryToAddExistingTag(limit, owner, page, repo, tag);
  verifyTagExists(limit, owner, page, repo, tag);
  deleteTag(limit, owner, page, repo, tag);
  tryToDeleteANonExistingTag(limit, owner, page, repo, tag);
  verifyTagDoesNotExist(limit, owner, page, repo, tag);
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let limit = "limit_616";
  let owner = 616;
  let page = "page_616";
  let repo = "repo_616";
  let tag = "tag_616";
  createTag(limit, owner, page, repo, tag);
  // waitForTagAdded(limit, owner, page, repo, tag);
  verifyTagExists(limit, owner, page, repo, tag);
  tryToAddExistingTag(limit, owner, page, repo, tag);
  verifyTagExists(limit, owner, page, repo, tag);
});

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let id = 620;
  let name = "name_620";
  let org = "org_620";
  let owner = "owner_620";
  let repo = "repo_620";
  let team = "team_620";
  orgCreateTeam(id, name, org, owner, repo, team);
  // waitForTeamAdded(id, name, org, owner, repo, team);
  tryToAddExistingTeam(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
  orgEditTeam(id, name, org, owner, repo, team);
  orgDeleteTeam(id, name, org, owner, repo, team);
  tryToDeleteANonExistingTeam(id, name, org, owner, repo, team);
  verifyTeamDoesNotExist(id, name, org, owner, repo, team);
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let id = 621;
  let name = "name_621";
  let org = "org_621";
  let owner = "owner_621";
  let repo = "repo_621";
  let team = "team_621";
  orgCreateTeam(id, name, org, owner, repo, team);
  // waitForTeamAdded(id, name, org, owner, repo, team);
  tryToAddExistingTeam(id, name, org, owner, repo, team);
  orgEditTeam(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
  orgDeleteTeam(id, name, org, owner, repo, team);
  tryToDeleteANonExistingTeam(id, name, org, owner, repo, team);
  verifyTeamDoesNotExist(id, name, org, owner, repo, team);
});

// Story: crud:Team:nondet:negative:dup-add
bthread("crud:Team:nondet:negative:dup-add", function () {
  let id = 626;
  let name = "name_626";
  let org = "org_626";
  let owner = "owner_626";
  let repo = "repo_626";
  let team = "team_626";
  orgCreateTeam(id, name, org, owner, repo, team);
  // waitForTeamAdded(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
  tryToAddExistingTeam(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
});

// Story: crud:Teams:read_only
bthread("crud:Teams:read_only", function () {
  let owner = 630;
  let repo = "repo_630";
  verifyTeamsExists(owner, repo);
});

// Story: crud:TrackedTime:read_only
bthread("crud:TrackedTime:read_only", function () {
  let owner = 640;
  let repo = "repo_640";
  let user = "user_640";
  verifyTrackedTimeExists(owner, repo, user);
});

// Story: crud:UserTrackedTime:read_only
bthread("crud:UserTrackedTime:read_only", function () {
  let owner = 650;
  let repo = "repo_650";
  let user = "user_650";
  verifyUserTrackedTimeExists(owner, repo, user);
});

// Story: crud:Topic:nondet:1:1
bthread("crud:Topic:nondet:1:1", function () {
  let limit = "limit_660";
  let owner = 660;
  let page = "page_660";
  let q = "q_660";
  let repo = "repo_660";
  let topic = "topic_660";
  addTopic(limit, owner, page, q, repo, topic);
  // waitForTopicAdded(limit, owner, page, q, repo, topic);
  tryToAddExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
  deleteTopic(limit, owner, page, q, repo, topic);
  tryToDeleteANonExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicDoesNotExist(limit, owner, page, q, repo, topic);
});

// Story: crud:Topic:nondet:1:2
bthread("crud:Topic:nondet:1:2", function () {
  let limit = "limit_661";
  let owner = 661;
  let page = "page_661";
  let q = "q_661";
  let repo = "repo_661";
  let topic = "topic_661";
  addTopic(limit, owner, page, q, repo, topic);
  // waitForTopicAdded(limit, owner, page, q, repo, topic);
  tryToAddExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
  deleteTopic(limit, owner, page, q, repo, topic);
  tryToDeleteANonExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicDoesNotExist(limit, owner, page, q, repo, topic);
});

// Story: crud:Topic:nondet:negative:dup-add
bthread("crud:Topic:nondet:negative:dup-add", function () {
  let limit = "limit_666";
  let owner = 666;
  let page = "page_666";
  let q = "q_666";
  let repo = "repo_666";
  let topic = "topic_666";
  addTopic(limit, owner, page, q, repo, topic);
  // waitForTopicAdded(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
  tryToAddExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
});

// Story: crud:Topics:read_only
bthread("crud:Topics:read_only", function () {
  let owner = 670;
  let repo = "repo_670";
  verifyTopicsExists(owner, repo);
});

// Story: crud:WikiPage:nondet:1:1
bthread("crud:WikiPage:nondet:1:1", function () {
  let owner = 690;
  let pageName = "pageName_690";
  let repo = "repo_690";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForWikiPageAdded(owner, pageName, repo);
  tryToAddExistingWikiPage(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
  repoEditWikiPage(owner, pageName, repo);
  repoDeleteWikiPage(owner, pageName, repo);
  tryToDeleteANonExistingWikiPage(owner, pageName, repo);
  verifyWikiPageDoesNotExist(owner, pageName, repo);
});

// Story: crud:WikiPage:nondet:1:2
bthread("crud:WikiPage:nondet:1:2", function () {
  let owner = 691;
  let pageName = "pageName_691";
  let repo = "repo_691";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForWikiPageAdded(owner, pageName, repo);
  tryToAddExistingWikiPage(owner, pageName, repo);
  repoEditWikiPage(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
  repoDeleteWikiPage(owner, pageName, repo);
  tryToDeleteANonExistingWikiPage(owner, pageName, repo);
  verifyWikiPageDoesNotExist(owner, pageName, repo);
});

// Story: crud:WikiPage:nondet:negative:dup-add
bthread("crud:WikiPage:nondet:negative:dup-add", function () {
  let owner = 696;
  let pageName = "pageName_696";
  let repo = "repo_696";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForWikiPageAdded(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
  tryToAddExistingWikiPage(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
});

// Story: crud:WikiPages:read_only
bthread("crud:WikiPages:read_only", function () {
  let limit = "limit_700";
  let owner = 700;
  let page = "page_700";
  let repo = "repo_700";
  verifyWikiPagesExists(limit, owner, page, repo);
});

// Story: crud:WikiPageRevisions:read_only
bthread("crud:WikiPageRevisions:read_only", function () {
  let owner = 710;
  let page = "page_710";
  let pageName = "pageName_710";
  let repo = "repo_710";
  verifyWikiPageRevisionsExists(owner, page, pageName, repo);
});

// Story: crud:UserSecret:nondet:1:1
bthread("crud:UserSecret:nondet:1:1", function () {
  let secretname = 720;
  updateUserSecret(secretname);
  // waitForUserSecretAdded(secretname);
  tryToAddExistingUserSecret(secretname);
  verifyUserSecretExists(secretname);
  updateUserSecret(secretname);
  deleteUserSecret(secretname);
  tryToDeleteANonExistingUserSecret(secretname);
  verifyUserSecretDoesNotExist(secretname);
});

// Story: crud:UserSecret:nondet:1:2
bthread("crud:UserSecret:nondet:1:2", function () {
  let secretname = 721;
  updateUserSecret(secretname);
  // waitForUserSecretAdded(secretname);
  tryToAddExistingUserSecret(secretname);
  updateUserSecret(secretname);
  verifyUserSecretExists(secretname);
  deleteUserSecret(secretname);
  tryToDeleteANonExistingUserSecret(secretname);
  verifyUserSecretDoesNotExist(secretname);
});

// Story: crud:UserSecret:nondet:negative:dup-add
bthread("crud:UserSecret:nondet:negative:dup-add", function () {
  let secretname = 726;
  updateUserSecret(secretname);
  // waitForUserSecretAdded(secretname);
  verifyUserSecretExists(secretname);
  tryToAddExistingUserSecret(secretname);
  verifyUserSecretExists(secretname);
});

// Story: crud:UserVariable:nondet:1:1
bthread("crud:UserVariable:nondet:1:1", function () {
  let variablename = 730;
  createUserVariable(variablename);
  // waitForUserVariableAdded(variablename);
  tryToAddExistingUserVariable(variablename);
  verifyUserVariableExists(variablename);
  updateUserVariable(variablename);
  deleteUserVariable(variablename);
  tryToDeleteANonExistingUserVariable(variablename);
  verifyUserVariableDoesNotExist(variablename);
});

// Story: crud:UserVariable:nondet:1:2
bthread("crud:UserVariable:nondet:1:2", function () {
  let variablename = 731;
  createUserVariable(variablename);
  // waitForUserVariableAdded(variablename);
  tryToAddExistingUserVariable(variablename);
  updateUserVariable(variablename);
  verifyUserVariableExists(variablename);
  deleteUserVariable(variablename);
  tryToDeleteANonExistingUserVariable(variablename);
  verifyUserVariableDoesNotExist(variablename);
});

// Story: crud:UserVariable:nondet:negative:dup-add
bthread("crud:UserVariable:nondet:negative:dup-add", function () {
  let variablename = 736;
  createUserVariable(variablename);
  // waitForUserVariableAdded(variablename);
  verifyUserVariableExists(variablename);
  tryToAddExistingUserVariable(variablename);
  verifyUserVariableExists(variablename);
});

// Story: crud:OAuth2Application:nondet:1:1
bthread("crud:OAuth2Application:nondet:1:1", function () {
  let id = 740;
  userCreateOAuth2Application(id);
  // waitForOAuth2ApplicationAdded(id);
  tryToAddExistingOAuth2Application(id);
  verifyOAuth2ApplicationExists(id);
  userUpdateOAuth2Application(id);
  userDeleteOAuth2Application(id);
  tryToDeleteANonExistingOAuth2Application(id);
  verifyOAuth2ApplicationDoesNotExist(id);
});

// Story: crud:OAuth2Application:nondet:1:2
bthread("crud:OAuth2Application:nondet:1:2", function () {
  let id = 741;
  userCreateOAuth2Application(id);
  // waitForOAuth2ApplicationAdded(id);
  tryToAddExistingOAuth2Application(id);
  userUpdateOAuth2Application(id);
  verifyOAuth2ApplicationExists(id);
  userDeleteOAuth2Application(id);
  tryToDeleteANonExistingOAuth2Application(id);
  verifyOAuth2ApplicationDoesNotExist(id);
});

// Story: crud:OAuth2Application:nondet:negative:dup-add
bthread("crud:OAuth2Application:nondet:negative:dup-add", function () {
  let id = 746;
  userCreateOAuth2Application(id);
  // waitForOAuth2ApplicationAdded(id);
  verifyOAuth2ApplicationExists(id);
  tryToAddExistingOAuth2Application(id);
  verifyOAuth2ApplicationExists(id);
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = 760;
  userBlockUser(username);
  // waitForUserBlockAdded(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
  userUnblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:nondet:1:2
bthread("crud:UserBlock:nondet:1:2", function () {
  let username = 761;
  userBlockUser(username);
  // waitForUserBlockAdded(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
  userUnblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:nondet:negative:dup-add
bthread("crud:UserBlock:nondet:negative:dup-add", function () {
  let username = 766;
  userBlockUser(username);
  // waitForUserBlockAdded(username);
  verifyUserBlockExists(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
});

// Story: crud:Email:nondet:1:1
bthread("crud:Email:nondet:1:1", function () {
  let limit = "limit_770";
  let page = "page_770";
  let q = "q_770";
  userAddEmail(limit, page, q);
  // waitForEmailAdded(limit, page, q);
  tryToAddExistingEmail(limit, page, q);
  verifyEmailExists(limit, page, q);
  userDeleteEmail(limit, page, q);
  tryToDeleteANonExistingEmail(limit, page, q);
  verifyEmailDoesNotExist(limit, page, q);
});

// Story: crud:Email:nondet:1:2
bthread("crud:Email:nondet:1:2", function () {
  let limit = "limit_771";
  let page = "page_771";
  let q = "q_771";
  userAddEmail(limit, page, q);
  // waitForEmailAdded(limit, page, q);
  tryToAddExistingEmail(limit, page, q);
  verifyEmailExists(limit, page, q);
  userDeleteEmail(limit, page, q);
  tryToDeleteANonExistingEmail(limit, page, q);
  verifyEmailDoesNotExist(limit, page, q);
});

// Story: crud:Email:nondet:negative:dup-add
bthread("crud:Email:nondet:negative:dup-add", function () {
  let limit = "limit_776";
  let page = "page_776";
  let q = "q_776";
  userAddEmail(limit, page, q);
  // waitForEmailAdded(limit, page, q);
  verifyEmailExists(limit, page, q);
  tryToAddExistingEmail(limit, page, q);
  verifyEmailExists(limit, page, q);
});

// Story: crud:Follower:read_only
bthread("crud:Follower:read_only", function () {
  let limit = "limit_780";
  let page = "page_780";
  verifyFollowerExists(limit, page);
});

// Story: crud:Following:read_only
bthread("crud:Following:read_only", function () {
  let limit = "limit_790";
  let page = "page_790";
  verifyFollowingExists(limit, page);
});

// Story: crud:FollowingUser:nondet:1:1
bthread("crud:FollowingUser:nondet:1:1", function () {
  let username = 800;
  userCurrentPutFollow(username);
  // waitForFollowingUserAdded(username);
  tryToAddExistingFollowingUser(username);
  verifyFollowingUserExists(username);
  userCurrentDeleteFollow(username);
  tryToDeleteANonExistingFollowingUser(username);
  verifyFollowingUserDoesNotExist(username);
});

// Story: crud:FollowingUser:nondet:1:2
bthread("crud:FollowingUser:nondet:1:2", function () {
  let username = 801;
  userCurrentPutFollow(username);
  // waitForFollowingUserAdded(username);
  tryToAddExistingFollowingUser(username);
  verifyFollowingUserExists(username);
  userCurrentDeleteFollow(username);
  tryToDeleteANonExistingFollowingUser(username);
  verifyFollowingUserDoesNotExist(username);
});

// Story: crud:FollowingUser:nondet:negative:dup-add
bthread("crud:FollowingUser:nondet:negative:dup-add", function () {
  let username = 806;
  userCurrentPutFollow(username);
  // waitForFollowingUserAdded(username);
  verifyFollowingUserExists(username);
  tryToAddExistingFollowingUser(username);
  verifyFollowingUserExists(username);
});

// Story: crud:GPGKey:nondet:1:1
bthread("crud:GPGKey:nondet:1:1", function () {
  let id = 810;
  let limit = "limit_810";
  let page = "page_810";
  userCurrentPostGPGKey(id, limit, page);
  // waitForGPGKeyAdded(id, limit, page);
  tryToAddExistingGPGKey(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
  userCurrentDeleteGPGKey(id, limit, page);
  tryToDeleteANonExistingGPGKey(id, limit, page);
  verifyGPGKeyDoesNotExist(id, limit, page);
});

// Story: crud:GPGKey:nondet:1:2
bthread("crud:GPGKey:nondet:1:2", function () {
  let id = 811;
  let limit = "limit_811";
  let page = "page_811";
  userCurrentPostGPGKey(id, limit, page);
  // waitForGPGKeyAdded(id, limit, page);
  tryToAddExistingGPGKey(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
  userCurrentDeleteGPGKey(id, limit, page);
  tryToDeleteANonExistingGPGKey(id, limit, page);
  verifyGPGKeyDoesNotExist(id, limit, page);
});

// Story: crud:GPGKey:nondet:negative:dup-add
bthread("crud:GPGKey:nondet:negative:dup-add", function () {
  let id = 816;
  let limit = "limit_816";
  let page = "page_816";
  userCurrentPostGPGKey(id, limit, page);
  // waitForGPGKeyAdded(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
  tryToAddExistingGPGKey(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
});

// Story: crud:PublicKey:nondet:1:1
bthread("crud:PublicKey:nondet:1:1", function () {
  let fingerprint = "fingerprint_820";
  let id = 820;
  createPublicKey(fingerprint, id);
  // waitForPublicKeyAdded(fingerprint, id);
  tryToAddExistingPublicKey(fingerprint, id);
  verifyPublicKeyExists(fingerprint, id);
  deletePublicKey(fingerprint, id);
  tryToDeleteANonExistingPublicKey(fingerprint, id);
  verifyPublicKeyDoesNotExist(fingerprint, id);
});

// Story: crud:PublicKey:nondet:1:2
bthread("crud:PublicKey:nondet:1:2", function () {
  let fingerprint = "fingerprint_821";
  let id = 821;
  createPublicKey(fingerprint, id);
  // waitForPublicKeyAdded(fingerprint, id);
  tryToAddExistingPublicKey(fingerprint, id);
  verifyPublicKeyExists(fingerprint, id);
  deletePublicKey(fingerprint, id);
  tryToDeleteANonExistingPublicKey(fingerprint, id);
  verifyPublicKeyDoesNotExist(fingerprint, id);
});

// Story: crud:PublicKey:nondet:negative:dup-add
bthread("crud:PublicKey:nondet:negative:dup-add", function () {
  let fingerprint = "fingerprint_826";
  let id = 826;
  createPublicKey(fingerprint, id);
  // waitForPublicKeyAdded(fingerprint, id);
  verifyPublicKeyExists(fingerprint, id);
  tryToAddExistingPublicKey(fingerprint, id);
  verifyPublicKeyExists(fingerprint, id);
});

// Story: crud:UserSettings:read_only
bthread("crud:UserSettings:read_only", function () {

  verifyUserSettingsExists();
});

// Story: crud:StarredRepo:nondet:1:1
bthread("crud:StarredRepo:nondet:1:1", function () {
  let owner = 840;
  let repo = "repo_840";
  starRepo(owner, repo);
  // waitForStarredRepoAdded(owner, repo);
  tryToAddExistingStarredRepo(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepo(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Story: crud:StarredRepo:nondet:1:2
bthread("crud:StarredRepo:nondet:1:2", function () {
  let owner = 841;
  let repo = "repo_841";
  starRepo(owner, repo);
  // waitForStarredRepoAdded(owner, repo);
  tryToAddExistingStarredRepo(owner, repo);
  verifyStarredRepoExists(owner, repo);
  unstarRepo(owner, repo);
  tryToDeleteANonExistingStarredRepo(owner, repo);
  verifyStarredRepoDoesNotExist(owner, repo);
});

// Story: crud:StarredRepo:nondet:negative:dup-add
bthread("crud:StarredRepo:nondet:negative:dup-add", function () {
  let owner = 846;
  let repo = "repo_846";
  starRepo(owner, repo);
  // waitForStarredRepoAdded(owner, repo);
  verifyStarredRepoExists(owner, repo);
  tryToAddExistingStarredRepo(owner, repo);
  verifyStarredRepoExists(owner, repo);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let limit = "limit_850";
  let login_name = "login_name_850";
  let page = "page_850";
  let purge = "purge_850";
  let source_id = 850;
  let username = 850;
  adminCreateUser(limit, login_name, page, purge, source_id, username);
  // waitForUserAdded(limit, login_name, page, purge, source_id, username);
  tryToAddExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
  adminEditUser(limit, login_name, page, purge, source_id, username);
  adminDeleteUser(limit, login_name, page, purge, source_id, username);
  tryToDeleteANonExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserDoesNotExist(limit, login_name, page, purge, source_id, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let limit = "limit_851";
  let login_name = "login_name_851";
  let page = "page_851";
  let purge = "purge_851";
  let source_id = 851;
  let username = 851;
  adminCreateUser(limit, login_name, page, purge, source_id, username);
  // waitForUserAdded(limit, login_name, page, purge, source_id, username);
  tryToAddExistingUser(limit, login_name, page, purge, source_id, username);
  adminEditUser(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
  adminDeleteUser(limit, login_name, page, purge, source_id, username);
  tryToDeleteANonExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserDoesNotExist(limit, login_name, page, purge, source_id, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let limit = "limit_856";
  let login_name = "login_name_856";
  let page = "page_856";
  let purge = "purge_856";
  let source_id = 856;
  let username = 856;
  adminCreateUser(limit, login_name, page, purge, source_id, username);
  // waitForUserAdded(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
  tryToAddExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
});

// Story: crud:UserFollowers:read_only
bthread("crud:UserFollowers:read_only", function () {
  let limit = "limit_860";
  let page = "page_860";
  let username = 860;
  verifyUserFollowersExists(limit, page, username);
});

// Story: crud:UserFollowing:read_only
bthread("crud:UserFollowing:read_only", function () {
  let limit = "limit_870";
  let page = "page_870";
  let username = 870;
  verifyUserFollowingExists(limit, page, username);
});

// Story: crud:UserFollowingCheck:read_only
bthread("crud:UserFollowingCheck:read_only", function () {
  let target = "target_880";
  let username = 880;
  verifyUserFollowingCheckExists(target, username);
});

// Story: crud:UserGPGKeys:read_only
bthread("crud:UserGPGKeys:read_only", function () {
  let limit = "limit_890";
  let page = "page_890";
  let username = 890;
  verifyUserGPGKeysExists(limit, page, username);
});

// Story: crud:UserHeatmap:read_only
bthread("crud:UserHeatmap:read_only", function () {
  let username = 900;
  verifyUserHeatmapExists(username);
});

// Story: crud:UserKeys:read_only
bthread("crud:UserKeys:read_only", function () {
  let fingerprint = "fingerprint_910";
  let limit = "limit_910";
  let page = "page_910";
  let username = 910;
  verifyUserKeysExists(fingerprint, limit, page, username);
});

// Story: crud:UserRepos:read_only
bthread("crud:UserRepos:read_only", function () {
  let limit = "limit_920";
  let page = "page_920";
  let username = 920;
  verifyUserReposExists(limit, page, username);
});

// Story: crud:UserActivitiesFeeds:read_only
bthread("crud:UserActivitiesFeeds:read_only", function () {
  let date = "date_930";
  let limit = "limit_930";
  let only-performed-by = "only-performed-by_930";
  let page = "page_930";
  let username = 930;
  verifyUserActivitiesFeedsExists(date, limit, only-performed-by, page, username);
});

// Story: crud:UserSearch:read_only
bthread("crud:UserSearch:read_only", function () {
  let limit = "limit_940";
  let page = "page_940";
  let q = "q_940";
  let uid = 940;
  verifyUserSearchExists(limit, page, q, uid);
});

// Story: crud:AccessToken:nondet:1:1
bthread("crud:AccessToken:nondet:1:1", function () {
  let token = "token_950";
  let username = 950;
  userCreateToken(token, username);
  // waitForAccessTokenAdded(token, username);
  tryToAddExistingAccessToken(token, username);
  verifyAccessTokenExists(token, username);
  userDeleteAccessToken(token, username);
  tryToDeleteANonExistingAccessToken(token, username);
  verifyAccessTokenDoesNotExist(token, username);
});

// Story: crud:AccessToken:nondet:1:2
bthread("crud:AccessToken:nondet:1:2", function () {
  let token = "token_951";
  let username = 951;
  userCreateToken(token, username);
  // waitForAccessTokenAdded(token, username);
  tryToAddExistingAccessToken(token, username);
  verifyAccessTokenExists(token, username);
  userDeleteAccessToken(token, username);
  tryToDeleteANonExistingAccessToken(token, username);
  verifyAccessTokenDoesNotExist(token, username);
});

// Story: crud:AccessToken:nondet:negative:dup-add
bthread("crud:AccessToken:nondet:negative:dup-add", function () {
  let token = "token_956";
  let username = 956;
  userCreateToken(token, username);
  // waitForAccessTokenAdded(token, username);
  verifyAccessTokenExists(token, username);
  tryToAddExistingAccessToken(token, username);
  verifyAccessTokenExists(token, username);
});

// Story: crud:StarredRepository:read_only
bthread("crud:StarredRepository:read_only", function () {
  let username = 960;
  verifyStarredRepositoryExists(username);
});

// Story: crud:Issue:nondet:1:1
bthread("crud:Issue:nondet:1:1", function () {
  let index = "index_970";
  let owner = 970;
  let repo = "repo_970";
  createIssue(index, owner, repo);
  // waitForIssueAdded(index, owner, repo);
  tryToAddExistingIssue(index, owner, repo);
  verifyIssueExists(index, owner, repo);
  editIssue(index, owner, repo);
  deleteIssue(index, owner, repo);
  tryToDeleteANonExistingIssue(index, owner, repo);
  verifyIssueDoesNotExist(index, owner, repo);
});

// Story: crud:Issue:nondet:1:2
bthread("crud:Issue:nondet:1:2", function () {
  let index = "index_971";
  let owner = 971;
  let repo = "repo_971";
  createIssue(index, owner, repo);
  // waitForIssueAdded(index, owner, repo);
  tryToAddExistingIssue(index, owner, repo);
  editIssue(index, owner, repo);
  verifyIssueExists(index, owner, repo);
  deleteIssue(index, owner, repo);
  tryToDeleteANonExistingIssue(index, owner, repo);
  verifyIssueDoesNotExist(index, owner, repo);
});

// Story: crud:Issue:nondet:negative:dup-add
bthread("crud:Issue:nondet:negative:dup-add", function () {
  let index = "index_976";
  let owner = 976;
  let repo = "repo_976";
  createIssue(index, owner, repo);
  // waitForIssueAdded(index, owner, repo);
  verifyIssueExists(index, owner, repo);
  tryToAddExistingIssue(index, owner, repo);
  verifyIssueExists(index, owner, repo);
});

// Story: crud:IssueComment:nondet:1:1
bthread("crud:IssueComment:nondet:1:1", function () {
  let before = "before_980";
  let body = "body_980";
  let id = 980;
  let index = "index_980";
  let owner = 980;
  let repo = "repo_980";
  let since = "since_980";
  createIssueComment(before, body, id, index, owner, repo, since);
  // waitForIssueCommentAdded(before, body, id, index, owner, repo, since);
  tryToAddExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
  editComment(before, body, id, index, owner, repo, since);
  deleteComment(before, body, id, index, owner, repo, since);
  tryToDeleteANonExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentDoesNotExist(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueComment:nondet:1:2
bthread("crud:IssueComment:nondet:1:2", function () {
  let before = "before_981";
  let body = "body_981";
  let id = 981;
  let index = "index_981";
  let owner = 981;
  let repo = "repo_981";
  let since = "since_981";
  createIssueComment(before, body, id, index, owner, repo, since);
  // waitForIssueCommentAdded(before, body, id, index, owner, repo, since);
  tryToAddExistingIssueComment(before, body, id, index, owner, repo, since);
  editComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
  deleteComment(before, body, id, index, owner, repo, since);
  tryToDeleteANonExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentDoesNotExist(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueComment:nondet:negative:dup-add
bthread("crud:IssueComment:nondet:negative:dup-add", function () {
  let before = "before_986";
  let body = "body_986";
  let id = 986;
  let index = "index_986";
  let owner = 986;
  let repo = "repo_986";
  let since = "since_986";
  createIssueComment(before, body, id, index, owner, repo, since);
  // waitForIssueCommentAdded(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
  tryToAddExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueCommentAttachment:nondet:1:1
bthread("crud:IssueCommentAttachment:nondet:1:1", function () {
  let attachment_id = 990;
  let id = 990;
  let name = "name_990";
  let owner = 990;
  let repo = "repo_990";
  createIssueCommentAttachment(attachment_id, id, name, owner, repo);
  // waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo);
  tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
  editIssueCommentAttachment(attachment_id, id, name, owner, repo);
  deleteIssueCommentAttachment(attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentDoesNotExist(attachment_id, id, name, owner, repo);
});

// Story: crud:IssueCommentAttachment:nondet:1:2
bthread("crud:IssueCommentAttachment:nondet:1:2", function () {
  let attachment_id = 991;
  let id = 991;
  let name = "name_991";
  let owner = 991;
  let repo = "repo_991";
  createIssueCommentAttachment(attachment_id, id, name, owner, repo);
  // waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo);
  tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  editIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
  deleteIssueCommentAttachment(attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentDoesNotExist(attachment_id, id, name, owner, repo);
});

// Story: crud:IssueCommentAttachment:nondet:negative:dup-add
bthread("crud:IssueCommentAttachment:nondet:negative:dup-add", function () {
  let attachment_id = 996;
  let id = 996;
  let name = "name_996";
  let owner = 996;
  let repo = "repo_996";
  createIssueCommentAttachment(attachment_id, id, name, owner, repo);
  // waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
  tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:1
bthread("crud:IssueCommentReaction:nondet:1:1", function () {
  let id = 1000;
  let owner = 1000;
  let repo = "repo_1000";
  postCommentReaction(id, owner, repo);
  // waitForIssueCommentReactionAdded(id, owner, repo);
  tryToAddExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
  deleteCommentReaction(id, owner, repo);
  tryToDeleteANonExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionDoesNotExist(id, owner, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:2
bthread("crud:IssueCommentReaction:nondet:1:2", function () {
  let id = 1001;
  let owner = 1001;
  let repo = "repo_1001";
  postCommentReaction(id, owner, repo);
  // waitForIssueCommentReactionAdded(id, owner, repo);
  tryToAddExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
  deleteCommentReaction(id, owner, repo);
  tryToDeleteANonExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionDoesNotExist(id, owner, repo);
});

// Story: crud:IssueCommentReaction:nondet:negative:dup-add
bthread("crud:IssueCommentReaction:nondet:negative:dup-add", function () {
  let id = 1006;
  let owner = 1006;
  let repo = "repo_1006";
  postCommentReaction(id, owner, repo);
  // waitForIssueCommentReactionAdded(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
  tryToAddExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
});

// Story: crud:IssueAttachment:nondet:1:1
bthread("crud:IssueAttachment:nondet:1:1", function () {
  let attachment_id = 1010;
  let index = "index_1010";
  let name = "name_1010";
  let owner = 1010;
  let repo = "repo_1010";
  createIssueAttachment(attachment_id, index, name, owner, repo);
  // waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo);
  tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
  editIssueAttachment(attachment_id, index, name, owner, repo);
  deleteIssueAttachment(attachment_id, index, name, owner, repo);
  tryToDeleteANonExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentDoesNotExist(attachment_id, index, name, owner, repo);
});

// Story: crud:IssueAttachment:nondet:1:2
bthread("crud:IssueAttachment:nondet:1:2", function () {
  let attachment_id = 1011;
  let index = "index_1011";
  let name = "name_1011";
  let owner = 1011;
  let repo = "repo_1011";
  createIssueAttachment(attachment_id, index, name, owner, repo);
  // waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo);
  tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo);
  editIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
  deleteIssueAttachment(attachment_id, index, name, owner, repo);
  tryToDeleteANonExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentDoesNotExist(attachment_id, index, name, owner, repo);
});

// Story: crud:IssueAttachment:nondet:negative:dup-add
bthread("crud:IssueAttachment:nondet:negative:dup-add", function () {
  let attachment_id = 1016;
  let index = "index_1016";
  let name = "name_1016";
  let owner = 1016;
  let repo = "repo_1016";
  createIssueAttachment(attachment_id, index, name, owner, repo);
  // waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
  tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
});

// Story: crud:IssueBlock:nondet:1:1
bthread("crud:IssueBlock:nondet:1:1", function () {
  let id = 1020;
  let index = "index_1020";
  let limit = "limit_1020";
  let owner = 1020;
  let page = "page_1020";
  let repo = "repo_1020";
  createIssueBlock(id, index, limit, owner, page, repo);
  // waitForIssueBlockAdded(id, index, limit, owner, page, repo);
  tryToAddExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
  removeIssueBlock(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:IssueBlock:nondet:1:2
bthread("crud:IssueBlock:nondet:1:2", function () {
  let id = 1021;
  let index = "index_1021";
  let limit = "limit_1021";
  let owner = 1021;
  let page = "page_1021";
  let repo = "repo_1021";
  createIssueBlock(id, index, limit, owner, page, repo);
  // waitForIssueBlockAdded(id, index, limit, owner, page, repo);
  tryToAddExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
  removeIssueBlock(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:IssueBlock:nondet:negative:dup-add
bthread("crud:IssueBlock:nondet:negative:dup-add", function () {
  let id = 1026;
  let index = "index_1026";
  let limit = "limit_1026";
  let owner = 1026;
  let page = "page_1026";
  let repo = "repo_1026";
  createIssueBlock(id, index, limit, owner, page, repo);
  // waitForIssueBlockAdded(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
  tryToAddExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
});

// Story: crud:IssueDependency:nondet:1:1
bthread("crud:IssueDependency:nondet:1:1", function () {
  let id = 1050;
  let index = "index_1050";
  let limit = "limit_1050";
  let owner = 1050;
  let page = "page_1050";
  let repo = "repo_1050";
  createIssueDependency(id, index, limit, owner, page, repo);
  // waitForIssueDependencyAdded(id, index, limit, owner, page, repo);
  tryToAddExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
  removeIssueDependency(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:IssueDependency:nondet:1:2
bthread("crud:IssueDependency:nondet:1:2", function () {
  let id = 1051;
  let index = "index_1051";
  let limit = "limit_1051";
  let owner = 1051;
  let page = "page_1051";
  let repo = "repo_1051";
  createIssueDependency(id, index, limit, owner, page, repo);
  // waitForIssueDependencyAdded(id, index, limit, owner, page, repo);
  tryToAddExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
  removeIssueDependency(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:IssueDependency:nondet:negative:dup-add
bthread("crud:IssueDependency:nondet:negative:dup-add", function () {
  let id = 1056;
  let index = "index_1056";
  let limit = "limit_1056";
  let owner = 1056;
  let page = "page_1056";
  let repo = "repo_1056";
  createIssueDependency(id, index, limit, owner, page, repo);
  // waitForIssueDependencyAdded(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
  tryToAddExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
});

// Story: crud:IssueLabel:nondet:1:1
bthread("crud:IssueLabel:nondet:1:1", function () {
  let index = "index_1060";
  let labels = "labels_1060";
  let owner = 1060;
  let repo = "repo_1060";
  addIssueLabel(index, labels, owner, repo);
  // waitForIssueLabelAdded(index, labels, owner, repo);
  tryToAddExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
  replaceIssueLabels(index, labels, owner, repo);
  clearIssueLabels(index, labels, owner, repo);
  tryToDeleteANonExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelDoesNotExist(index, labels, owner, repo);
});

// Story: crud:IssueLabel:nondet:1:2
bthread("crud:IssueLabel:nondet:1:2", function () {
  let index = "index_1061";
  let labels = "labels_1061";
  let owner = 1061;
  let repo = "repo_1061";
  addIssueLabel(index, labels, owner, repo);
  // waitForIssueLabelAdded(index, labels, owner, repo);
  tryToAddExistingIssueLabel(index, labels, owner, repo);
  replaceIssueLabels(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
  clearIssueLabels(index, labels, owner, repo);
  tryToDeleteANonExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelDoesNotExist(index, labels, owner, repo);
});

// Story: crud:IssueLabel:nondet:negative:dup-add
bthread("crud:IssueLabel:nondet:negative:dup-add", function () {
  let index = "index_1066";
  let labels = "labels_1066";
  let owner = 1066;
  let repo = "repo_1066";
  addIssueLabel(index, labels, owner, repo);
  // waitForIssueLabelAdded(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
  tryToAddExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
});

// Story: crud:IssuePin:nondet:1:1
bthread("crud:IssuePin:nondet:1:1", function () {
  let index = "index_1080";
  let owner = 1080;
  let repo = "repo_1080";
  pinIssue(index, owner, repo);
  // waitForIssuePinAdded(index, owner, repo);
  tryToAddExistingIssuePin(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
  unpinIssue(index, owner, repo);
  tryToDeleteANonExistingIssuePin(index, owner, repo);
  verifyIssuePinDoesNotExist(index, owner, repo);
});

// Story: crud:IssuePin:nondet:1:2
bthread("crud:IssuePin:nondet:1:2", function () {
  let index = "index_1081";
  let owner = 1081;
  let repo = "repo_1081";
  pinIssue(index, owner, repo);
  // waitForIssuePinAdded(index, owner, repo);
  tryToAddExistingIssuePin(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
  unpinIssue(index, owner, repo);
  tryToDeleteANonExistingIssuePin(index, owner, repo);
  verifyIssuePinDoesNotExist(index, owner, repo);
});

// Story: crud:IssuePin:nondet:negative:dup-add
bthread("crud:IssuePin:nondet:negative:dup-add", function () {
  let index = "index_1086";
  let owner = 1086;
  let repo = "repo_1086";
  pinIssue(index, owner, repo);
  // waitForIssuePinAdded(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
  tryToAddExistingIssuePin(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
});

// Story: crud:IssueReaction:nondet:1:1
bthread("crud:IssueReaction:nondet:1:1", function () {
  let content = "content_1100";
  let index = "index_1100";
  let limit = "limit_1100";
  let owner = 1100;
  let page = "page_1100";
  let repo = "repo_1100";
  addIssueReaction(content, index, limit, owner, page, repo);
  // waitForIssueReactionAdded(content, index, limit, owner, page, repo);
  tryToAddExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
  removeIssueReaction(content, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionDoesNotExist(content, index, limit, owner, page, repo);
});

// Story: crud:IssueReaction:nondet:1:2
bthread("crud:IssueReaction:nondet:1:2", function () {
  let content = "content_1101";
  let index = "index_1101";
  let limit = "limit_1101";
  let owner = 1101;
  let page = "page_1101";
  let repo = "repo_1101";
  addIssueReaction(content, index, limit, owner, page, repo);
  // waitForIssueReactionAdded(content, index, limit, owner, page, repo);
  tryToAddExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
  removeIssueReaction(content, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionDoesNotExist(content, index, limit, owner, page, repo);
});

// Story: crud:IssueReaction:nondet:negative:dup-add
bthread("crud:IssueReaction:nondet:negative:dup-add", function () {
  let content = "content_1106";
  let index = "index_1106";
  let limit = "limit_1106";
  let owner = 1106;
  let page = "page_1106";
  let repo = "repo_1106";
  addIssueReaction(content, index, limit, owner, page, repo);
  // waitForIssueReactionAdded(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
  tryToAddExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
});

// Story: crud:IssueStopwatch:nondet:1:1
bthread("crud:IssueStopwatch:nondet:1:1", function () {
  let index = "index_1110";
  let owner = 1110;
  let repo = "repo_1110";
  issueStartStopWatch(index, owner, repo);
  // waitForIssueStopwatchAdded(index, owner, repo);
  tryToAddExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
  issueStopStopWatch(index, owner, repo);
  issueDeleteStopWatch(index, owner, repo);
  tryToDeleteANonExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchDoesNotExist(index, owner, repo);
});

// Story: crud:IssueStopwatch:nondet:1:2
bthread("crud:IssueStopwatch:nondet:1:2", function () {
  let index = "index_1111";
  let owner = 1111;
  let repo = "repo_1111";
  issueStartStopWatch(index, owner, repo);
  // waitForIssueStopwatchAdded(index, owner, repo);
  tryToAddExistingIssueStopwatch(index, owner, repo);
  issueStopStopWatch(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
  issueDeleteStopWatch(index, owner, repo);
  tryToDeleteANonExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchDoesNotExist(index, owner, repo);
});

// Story: crud:IssueStopwatch:nondet:negative:dup-add
bthread("crud:IssueStopwatch:nondet:negative:dup-add", function () {
  let index = "index_1116";
  let owner = 1116;
  let repo = "repo_1116";
  issueStartStopWatch(index, owner, repo);
  // waitForIssueStopwatchAdded(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
  tryToAddExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
});

// Story: crud:IssueSubscription:nondet:1:1
bthread("crud:IssueSubscription:nondet:1:1", function () {
  let index = "index_1120";
  let owner = 1120;
  let repo = "repo_1120";
  let user = "user_1120";
  issueAddSubscription(index, owner, repo, user);
  // waitForIssueSubscriptionAdded(index, owner, repo, user);
  tryToAddExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
  issueDeleteSubscription(index, owner, repo, user);
  tryToDeleteANonExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionDoesNotExist(index, owner, repo, user);
});

// Story: crud:IssueSubscription:nondet:1:2
bthread("crud:IssueSubscription:nondet:1:2", function () {
  let index = "index_1121";
  let owner = 1121;
  let repo = "repo_1121";
  let user = "user_1121";
  issueAddSubscription(index, owner, repo, user);
  // waitForIssueSubscriptionAdded(index, owner, repo, user);
  tryToAddExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
  issueDeleteSubscription(index, owner, repo, user);
  tryToDeleteANonExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionDoesNotExist(index, owner, repo, user);
});

// Story: crud:IssueSubscription:nondet:negative:dup-add
bthread("crud:IssueSubscription:nondet:negative:dup-add", function () {
  let index = "index_1126";
  let owner = 1126;
  let repo = "repo_1126";
  let user = "user_1126";
  issueAddSubscription(index, owner, repo, user);
  // waitForIssueSubscriptionAdded(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
  tryToAddExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
});

// Story: crud:IssueTimeline:read_only
bthread("crud:IssueTimeline:read_only", function () {
  let index = "index_1130";
  let owner = 1130;
  let repo = "repo_1130";
  verifyIssueTimelineExists(index, owner, repo);
});

// Story: crud:IssueTrackedTime:nondet:1:1
bthread("crud:IssueTrackedTime:nondet:1:1", function () {
  let id = 1140;
  let index = "index_1140";
  let owner = 1140;
  let repo = "repo_1140";
  issueAddTime(id, index, owner, repo);
  // waitForIssueTrackedTimeAdded(id, index, owner, repo);
  tryToAddExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
  issueResetTime(id, index, owner, repo);
  tryToDeleteANonExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeDoesNotExist(id, index, owner, repo);
});

// Story: crud:IssueTrackedTime:nondet:1:2
bthread("crud:IssueTrackedTime:nondet:1:2", function () {
  let id = 1141;
  let index = "index_1141";
  let owner = 1141;
  let repo = "repo_1141";
  issueAddTime(id, index, owner, repo);
  // waitForIssueTrackedTimeAdded(id, index, owner, repo);
  tryToAddExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
  issueResetTime(id, index, owner, repo);
  tryToDeleteANonExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeDoesNotExist(id, index, owner, repo);
});

// Story: crud:IssueTrackedTime:nondet:negative:dup-add
bthread("crud:IssueTrackedTime:nondet:negative:dup-add", function () {
  let id = 1146;
  let index = "index_1146";
  let owner = 1146;
  let repo = "repo_1146";
  issueAddTime(id, index, owner, repo);
  // waitForIssueTrackedTimeAdded(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
  tryToAddExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let id = 1160;
  let org = 1160;
  let owner = "owner_1160";
  let repo = "repo_1160";
  createLabel(id, org, owner, repo);
  // waitForLabelAdded(id, org, owner, repo);
  tryToAddExistingLabel(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
  editLabel(id, org, owner, repo);
  deleteLabel(id, org, owner, repo);
  tryToDeleteANonExistingLabel(id, org, owner, repo);
  verifyLabelDoesNotExist(id, org, owner, repo);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let id = 1161;
  let org = 1161;
  let owner = "owner_1161";
  let repo = "repo_1161";
  createLabel(id, org, owner, repo);
  // waitForLabelAdded(id, org, owner, repo);
  tryToAddExistingLabel(id, org, owner, repo);
  editLabel(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
  deleteLabel(id, org, owner, repo);
  tryToDeleteANonExistingLabel(id, org, owner, repo);
  verifyLabelDoesNotExist(id, org, owner, repo);
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let id = 1166;
  let org = 1166;
  let owner = "owner_1166";
  let repo = "repo_1166";
  createLabel(id, org, owner, repo);
  // waitForLabelAdded(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
  tryToAddExistingLabel(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
});

// Story: crud:Milestone:nondet:1:1
bthread("crud:Milestone:nondet:1:1", function () {
  let id = 1170;
  let owner = 1170;
  let repo = "repo_1170";
  createMilestone(id, owner, repo);
  // waitForMilestoneAdded(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  editMilestone(id, owner, repo);
  deleteMilestone(id, owner, repo);
  tryToDeleteANonExistingMilestone(id, owner, repo);
  verifyMilestoneDoesNotExist(id, owner, repo);
});

// Story: crud:Milestone:nondet:1:2
bthread("crud:Milestone:nondet:1:2", function () {
  let id = 1171;
  let owner = 1171;
  let repo = "repo_1171";
  createMilestone(id, owner, repo);
  // waitForMilestoneAdded(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  editMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  deleteMilestone(id, owner, repo);
  tryToDeleteANonExistingMilestone(id, owner, repo);
  verifyMilestoneDoesNotExist(id, owner, repo);
});

// Story: crud:Milestone:nondet:negative:dup-add
bthread("crud:Milestone:nondet:negative:dup-add", function () {
  let id = 1176;
  let owner = 1176;
  let repo = "repo_1176";
  createMilestone(id, owner, repo);
  // waitForMilestoneAdded(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let limit = "limit_1180";
  let org = "org_1180";
  let page = "page_1180";
  let username = 1180;
  adminCreateOrg(limit, org, page, username);
  // waitForOrganizationAdded(limit, org, page, username);
  tryToAddExistingOrganization(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
  editOrganization(limit, org, page, username);
  deleteOrganization(limit, org, page, username);
  tryToDeleteANonExistingOrganization(limit, org, page, username);
  verifyOrganizationDoesNotExist(limit, org, page, username);
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let limit = "limit_1181";
  let org = "org_1181";
  let page = "page_1181";
  let username = 1181;
  adminCreateOrg(limit, org, page, username);
  // waitForOrganizationAdded(limit, org, page, username);
  tryToAddExistingOrganization(limit, org, page, username);
  editOrganization(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
  deleteOrganization(limit, org, page, username);
  tryToDeleteANonExistingOrganization(limit, org, page, username);
  verifyOrganizationDoesNotExist(limit, org, page, username);
});

// Story: crud:Organization:nondet:negative:dup-add
bthread("crud:Organization:nondet:negative:dup-add", function () {
  let limit = "limit_1186";
  let org = "org_1186";
  let page = "page_1186";
  let username = 1186;
  adminCreateOrg(limit, org, page, username);
  // waitForOrganizationAdded(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
  tryToAddExistingOrganization(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
});

// Story: crud:OrgSecret:nondet:1:1
bthread("crud:OrgSecret:nondet:1:1", function () {
  let org = 1190;
  let secretname = "secretname_1190";
  updateOrgSecret(org, secretname);
  // waitForOrgSecretAdded(org, secretname);
  tryToAddExistingOrgSecret(org, secretname);
  verifyOrgSecretExists(org, secretname);
  deleteOrgSecret(org, secretname);
  tryToDeleteANonExistingOrgSecret(org, secretname);
  verifyOrgSecretDoesNotExist(org, secretname);
});

// Story: crud:OrgSecret:nondet:1:2
bthread("crud:OrgSecret:nondet:1:2", function () {
  let org = 1191;
  let secretname = "secretname_1191";
  updateOrgSecret(org, secretname);
  // waitForOrgSecretAdded(org, secretname);
  tryToAddExistingOrgSecret(org, secretname);
  verifyOrgSecretExists(org, secretname);
  deleteOrgSecret(org, secretname);
  tryToDeleteANonExistingOrgSecret(org, secretname);
  verifyOrgSecretDoesNotExist(org, secretname);
});

// Story: crud:OrgSecret:nondet:negative:dup-add
bthread("crud:OrgSecret:nondet:negative:dup-add", function () {
  let org = 1196;
  let secretname = "secretname_1196";
  updateOrgSecret(org, secretname);
  // waitForOrgSecretAdded(org, secretname);
  verifyOrgSecretExists(org, secretname);
  tryToAddExistingOrgSecret(org, secretname);
  verifyOrgSecretExists(org, secretname);
});

// Story: crud:OrgVariable:nondet:1:1
bthread("crud:OrgVariable:nondet:1:1", function () {
  let org = 1200;
  let variablename = "variablename_1200";
  createOrgVariable(org, variablename);
  // waitForOrgVariableAdded(org, variablename);
  tryToAddExistingOrgVariable(org, variablename);
  verifyOrgVariableExists(org, variablename);
  updateOrgVariable(org, variablename);
  deleteOrgVariable(org, variablename);
  tryToDeleteANonExistingOrgVariable(org, variablename);
  verifyOrgVariableDoesNotExist(org, variablename);
});

// Story: crud:OrgVariable:nondet:1:2
bthread("crud:OrgVariable:nondet:1:2", function () {
  let org = 1201;
  let variablename = "variablename_1201";
  createOrgVariable(org, variablename);
  // waitForOrgVariableAdded(org, variablename);
  tryToAddExistingOrgVariable(org, variablename);
  updateOrgVariable(org, variablename);
  verifyOrgVariableExists(org, variablename);
  deleteOrgVariable(org, variablename);
  tryToDeleteANonExistingOrgVariable(org, variablename);
  verifyOrgVariableDoesNotExist(org, variablename);
});

// Story: crud:OrgVariable:nondet:negative:dup-add
bthread("crud:OrgVariable:nondet:negative:dup-add", function () {
  let org = 1206;
  let variablename = "variablename_1206";
  createOrgVariable(org, variablename);
  // waitForOrgVariableAdded(org, variablename);
  verifyOrgVariableExists(org, variablename);
  tryToAddExistingOrgVariable(org, variablename);
  verifyOrgVariableExists(org, variablename);
});

// Story: crud:Block:nondet:1:1
bthread("crud:Block:nondet:1:1", function () {
  let note = "note_1220";
  let org = 1220;
  let username = "username_1220";
  blockUser(note, org, username);
  // waitForBlockAdded(note, org, username);
  tryToAddExistingBlock(note, org, username);
  verifyBlockExists(note, org, username);
  unblockUser(note, org, username);
  tryToDeleteANonExistingBlock(note, org, username);
  verifyBlockDoesNotExist(note, org, username);
});

// Story: crud:Block:nondet:1:2
bthread("crud:Block:nondet:1:2", function () {
  let note = "note_1221";
  let org = 1221;
  let username = "username_1221";
  blockUser(note, org, username);
  // waitForBlockAdded(note, org, username);
  tryToAddExistingBlock(note, org, username);
  verifyBlockExists(note, org, username);
  unblockUser(note, org, username);
  tryToDeleteANonExistingBlock(note, org, username);
  verifyBlockDoesNotExist(note, org, username);
});

// Story: crud:Block:nondet:negative:dup-add
bthread("crud:Block:nondet:negative:dup-add", function () {
  let note = "note_1226";
  let org = 1226;
  let username = "username_1226";
  blockUser(note, org, username);
  // waitForBlockAdded(note, org, username);
  verifyBlockExists(note, org, username);
  tryToAddExistingBlock(note, org, username);
  verifyBlockExists(note, org, username);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let org = 1230;
  let username = "username_1230";
  verifyMemberExists(org, username);
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = 1240;
  let username = "username_1240";
  publicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  concealMember(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = 1241;
  let username = "username_1241";
  publicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  concealMember(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:negative:dup-add
bthread("crud:PublicMember:nondet:negative:dup-add", function () {
  let org = 1246;
  let username = "username_1246";
  publicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  verifyPublicMemberExists(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
});

// Story: crud:TeamMember:nondet:1:1
bthread("crud:TeamMember:nondet:1:1", function () {
  let id = 1250;
  let username = "username_1250";
  orgAddTeamMember(id, username);
  // waitForTeamMemberAdded(id, username);
  tryToAddExistingTeamMember(id, username);
  verifyTeamMemberExists(id, username);
  orgRemoveTeamMember(id, username);
  tryToDeleteANonExistingTeamMember(id, username);
  verifyTeamMemberDoesNotExist(id, username);
});

// Story: crud:TeamMember:nondet:1:2
bthread("crud:TeamMember:nondet:1:2", function () {
  let id = 1251;
  let username = "username_1251";
  orgAddTeamMember(id, username);
  // waitForTeamMemberAdded(id, username);
  tryToAddExistingTeamMember(id, username);
  verifyTeamMemberExists(id, username);
  orgRemoveTeamMember(id, username);
  tryToDeleteANonExistingTeamMember(id, username);
  verifyTeamMemberDoesNotExist(id, username);
});

// Story: crud:TeamMember:nondet:negative:dup-add
bthread("crud:TeamMember:nondet:negative:dup-add", function () {
  let id = 1256;
  let username = "username_1256";
  orgAddTeamMember(id, username);
  // waitForTeamMemberAdded(id, username);
  verifyTeamMemberExists(id, username);
  tryToAddExistingTeamMember(id, username);
  verifyTeamMemberExists(id, username);
});

// Story: crud:TeamRepository:nondet:1:1
bthread("crud:TeamRepository:nondet:1:1", function () {
  let id = 1260;
  let org = "org_1260";
  let repo = "repo_1260";
  orgAddTeamRepository(id, org, repo);
  // waitForTeamRepositoryAdded(id, org, repo);
  tryToAddExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
  orgRemoveTeamRepository(id, org, repo);
  tryToDeleteANonExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryDoesNotExist(id, org, repo);
});

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let id = 1261;
  let org = "org_1261";
  let repo = "repo_1261";
  orgAddTeamRepository(id, org, repo);
  // waitForTeamRepositoryAdded(id, org, repo);
  tryToAddExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
  orgRemoveTeamRepository(id, org, repo);
  tryToDeleteANonExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryDoesNotExist(id, org, repo);
});

// Story: crud:TeamRepository:nondet:negative:dup-add
bthread("crud:TeamRepository:nondet:negative:dup-add", function () {
  let id = 1266;
  let org = "org_1266";
  let repo = "repo_1266";
  orgAddTeamRepository(id, org, repo);
  // waitForTeamRepositoryAdded(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
  tryToAddExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
});

// Story: crud:CronTask:read_only
bthread("crud:CronTask:read_only", function () {
  let limit = "limit_1270";
  let page = "page_1270";
  let task = 1270;
  verifyCronTaskExists(limit, page, task);
});

// Story: crud:RunnerRegistrationToken:read_only
bthread("crud:RunnerRegistrationToken:read_only", function () {

  verifyRunnerRegistrationTokenExists();
});

// Story: crud:UnadoptedRepository:nondet:1:1
bthread("crud:UnadoptedRepository:nondet:1:1", function () {
  let limit = "limit_1290";
  let owner = 1290;
  let page = "page_1290";
  let pattern = "pattern_1290";
  let repo = "repo_1290";
  adoptUnadoptedRepository(limit, owner, page, pattern, repo);
  // waitForUnadoptedRepositoryAdded(limit, owner, page, pattern, repo);
  tryToAddExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
  deleteUnadoptedRepository(limit, owner, page, pattern, repo);
  tryToDeleteANonExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryDoesNotExist(limit, owner, page, pattern, repo);
});

// Story: crud:UnadoptedRepository:nondet:1:2
bthread("crud:UnadoptedRepository:nondet:1:2", function () {
  let limit = "limit_1291";
  let owner = 1291;
  let page = "page_1291";
  let pattern = "pattern_1291";
  let repo = "repo_1291";
  adoptUnadoptedRepository(limit, owner, page, pattern, repo);
  // waitForUnadoptedRepositoryAdded(limit, owner, page, pattern, repo);
  tryToAddExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
  deleteUnadoptedRepository(limit, owner, page, pattern, repo);
  tryToDeleteANonExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryDoesNotExist(limit, owner, page, pattern, repo);
});

// Story: crud:UnadoptedRepository:nondet:negative:dup-add
bthread("crud:UnadoptedRepository:nondet:negative:dup-add", function () {
  let limit = "limit_1296";
  let owner = 1296;
  let page = "page_1296";
  let pattern = "pattern_1296";
  let repo = "repo_1296";
  adoptUnadoptedRepository(limit, owner, page, pattern, repo);
  // waitForUnadoptedRepositoryAdded(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
  tryToAddExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
});

// Story: crud:UserBadge:nondet:1:1
bthread("crud:UserBadge:nondet:1:1", function () {
  let username = 1300;
  adminAddUserBadges(username);
  // waitForUserBadgeAdded(username);
  tryToAddExistingUserBadge(username);
  verifyUserBadgeExists(username);
  adminDeleteUserBadges(username);
  tryToDeleteANonExistingUserBadge(username);
  verifyUserBadgeDoesNotExist(username);
});

// Story: crud:UserBadge:nondet:1:2
bthread("crud:UserBadge:nondet:1:2", function () {
  let username = 1301;
  adminAddUserBadges(username);
  // waitForUserBadgeAdded(username);
  tryToAddExistingUserBadge(username);
  verifyUserBadgeExists(username);
  adminDeleteUserBadges(username);
  tryToDeleteANonExistingUserBadge(username);
  verifyUserBadgeDoesNotExist(username);
});

// Story: crud:UserBadge:nondet:negative:dup-add
bthread("crud:UserBadge:nondet:negative:dup-add", function () {
  let username = 1306;
  adminAddUserBadges(username);
  // waitForUserBadgeAdded(username);
  verifyUserBadgeExists(username);
  tryToAddExistingUserBadge(username);
  verifyUserBadgeExists(username);
});

// Story: crud:UserPublicKey:nondet:1:1
bthread("crud:UserPublicKey:nondet:1:1", function () {
  let id = 1310;
  let username = 1310;
  adminCreatePublicKey(id, username);
  // waitForUserPublicKeyAdded(id, username);
  tryToAddExistingUserPublicKey(id, username);
  verifyUserPublicKeyExists(id, username);
  adminDeleteUserPublicKey(id, username);
  tryToDeleteANonExistingUserPublicKey(id, username);
  verifyUserPublicKeyDoesNotExist(id, username);
});

// Story: crud:UserPublicKey:nondet:1:2
bthread("crud:UserPublicKey:nondet:1:2", function () {
  let id = 1311;
  let username = 1311;
  adminCreatePublicKey(id, username);
  // waitForUserPublicKeyAdded(id, username);
  tryToAddExistingUserPublicKey(id, username);
  verifyUserPublicKeyExists(id, username);
  adminDeleteUserPublicKey(id, username);
  tryToDeleteANonExistingUserPublicKey(id, username);
  verifyUserPublicKeyDoesNotExist(id, username);
});

// Story: crud:UserPublicKey:nondet:negative:dup-add
bthread("crud:UserPublicKey:nondet:negative:dup-add", function () {
  let id = 1316;
  let username = 1316;
  adminCreatePublicKey(id, username);
  // waitForUserPublicKeyAdded(id, username);
  verifyUserPublicKeyExists(id, username);
  tryToAddExistingUserPublicKey(id, username);
  verifyUserPublicKeyExists(id, username);
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let id = 1330;
  let to-status = "to-status_1330";
  verifyNotificationExists(id, to-status);
});

// Story: crud:NotificationList:read_only
bthread("crud:NotificationList:read_only", function () {
  let all = "all_1340";
  let before = "before_1340";
  let last_read_at = "last_read_at_1340";
  let limit = "limit_1340";
  let page = "page_1340";
  let since = "since_1340";
  let status-types = "status-types_1340";
  let subject-type = "subject-type_1340";
  let to-status = "to-status_1340";
  verifyNotificationListExists(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status);
});

// Story: crud:NotificationNew:read_only
bthread("crud:NotificationNew:read_only", function () {

  verifyNotificationNewExists();
});

// Story: crud:RepoNotificationList:read_only
bthread("crud:RepoNotificationList:read_only", function () {
  let all = "all_1360";
  let before = "before_1360";
  let last_read_at = "last_read_at_1360";
  let limit = "limit_1360";
  let owner = 1360;
  let page = "page_1360";
  let repo = "repo_1360";
  let since = "since_1360";
  let status-types = "status-types_1360";
  let subject-type = "subject-type_1360";
  let to-status = "to-status_1360";
  verifyRepoNotificationListExists(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status);
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let name = "name_1370";
  let owner = 1370;
  let type = "type_1370";
  let version = "version_1370";
  verifyPackageExists(name, owner, type, version);
});

// Story: crud:PackageList:read_only
bthread("crud:PackageList:read_only", function () {
  let limit = "limit_1380";
  let owner = 1380;
  let page = "page_1380";
  let q = "q_1380";
  let type = "type_1380";
  verifyPackageListExists(limit, owner, page, q, type);
});

// Story: crud:PackageFileList:read_only
bthread("crud:PackageFileList:read_only", function () {
  let name = "name_1390";
  let owner = 1390;
  let type = "type_1390";
  let version = "version_1390";
  verifyPackageFileListExists(name, owner, type, version);
});

// Story: crud:Person:read_only
bthread("crud:Person:read_only", function () {

  verifyPersonExists(user-id);
});
