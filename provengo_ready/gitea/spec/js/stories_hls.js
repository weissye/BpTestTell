// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
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
  waitForRepositoryAdded(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
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
  waitForRepositorySecretAdded(owner, repo, secretname);
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
  waitForRepositoryVariableAdded(owner, repo, variablename);
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
  let name = "name_230";
  let owner = 230;
  let repo = "repo_230";
  createBranchProtection(name, owner, repo);
  waitForBranchProtectionAdded(name, owner, repo);
  tryToAddExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
  editBranchProtection(name, owner, repo);
  deleteBranchProtection(name, owner, repo);
  tryToDeleteANonExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionDoesNotExist(name, owner, repo);
});

// Story: crud:BranchProtection:nondet:1:2
bthread("crud:BranchProtection:nondet:1:2", function () {
  let name = "name_231";
  let owner = 231;
  let repo = "repo_231";
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
  let name = "name_236";
  let owner = 236;
  let repo = "repo_236";
  createBranchProtection(name, owner, repo);
  // waitForBranchProtectionAdded(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
  tryToAddExistingBranchProtection(name, owner, repo);
  verifyBranchProtectionExists(name, owner, repo);
});

// Story: crud:Branch:nondet:1:1
bthread("crud:Branch:nondet:1:1", function () {
  let branch = "branch_240";
  let owner = 240;
  let repo = "repo_240";
  createBranch(branch, owner, repo);
  waitForBranchAdded(branch, owner, repo);
  tryToAddExistingBranch(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
  updateBranch(branch, owner, repo);
  deleteBranch(branch, owner, repo);
  tryToDeleteANonExistingBranch(branch, owner, repo);
  verifyBranchDoesNotExist(branch, owner, repo);
});

// Story: crud:Branch:nondet:1:2
bthread("crud:Branch:nondet:1:2", function () {
  let branch = "branch_241";
  let owner = 241;
  let repo = "repo_241";
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
  let branch = "branch_246";
  let owner = 246;
  let repo = "repo_246";
  createBranch(branch, owner, repo);
  // waitForBranchAdded(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
  tryToAddExistingBranch(branch, owner, repo);
  verifyBranchExists(branch, owner, repo);
});

// Story: crud:Collaborator:nondet:1:1
bthread("crud:Collaborator:nondet:1:1", function () {
  let collaborator = "collaborator_250";
  let owner = 250;
  let repo = "repo_250";
  addCollaborator(collaborator, owner, repo);
  waitForCollaboratorAdded(collaborator, owner, repo);
  tryToAddExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
  deleteCollaborator(collaborator, owner, repo);
  tryToDeleteANonExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorDoesNotExist(collaborator, owner, repo);
});

// Story: crud:Collaborator:nondet:1:2
bthread("crud:Collaborator:nondet:1:2", function () {
  let collaborator = "collaborator_251";
  let owner = 251;
  let repo = "repo_251";
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
  let collaborator = "collaborator_256";
  let owner = 256;
  let repo = "repo_256";
  addCollaborator(collaborator, owner, repo);
  // waitForCollaboratorAdded(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
  tryToAddExistingCollaborator(collaborator, owner, repo);
  verifyCollaboratorExists(collaborator, owner, repo);
});

// Story: crud:RepositoryCollaboratorPermission:read_only
bthread("crud:RepositoryCollaboratorPermission:read_only", function () {
  let collaborator = "collaborator_270";
  let owner = 270;
  let repo = "repo_270";
  verifyRepositoryCollaboratorPermissionExists(collaborator, owner, repo);
});

// Story: crud:Commit:read_only
bthread("crud:Commit:read_only", function () {
  let files = "files_280";
  let owner = 280;
  let ref = "ref_280";
  let repo = "repo_280";
  let sha = "sha_280";
  let stat = "stat_280";
  let verification = "verification_280";
  verifyCommitExists(files, owner, ref, repo, sha, stat, verification);
});

// Story: crud:CommitComparison:read_only
bthread("crud:CommitComparison:read_only", function () {
  let basehead = "basehead_290";
  let owner = 290;
  let repo = "repo_290";
  verifyCommitComparisonExists(basehead, owner, repo);
});

// Story: crud:RepositoryFile:nondet:1:1
bthread("crud:RepositoryFile:nondet:1:1", function () {
  let filepath = "filepath_310";
  let owner = 310;
  let repo = "repo_310";
  createFile(filepath, owner, repo);
  waitForRepositoryFileAdded(filepath, owner, repo);
  tryToAddExistingRepositoryFile(filepath, owner, repo);
  verifyRepositoryFileExists(filepath, owner, repo);
  updateFile(filepath, owner, repo);
  deleteFile(filepath, owner, repo);
  tryToDeleteANonExistingRepositoryFile(filepath, owner, repo);
  verifyRepositoryFileDoesNotExist(filepath, owner, repo);
});

// Story: crud:RepositoryFile:nondet:1:2
bthread("crud:RepositoryFile:nondet:1:2", function () {
  let filepath = "filepath_311";
  let owner = 311;
  let repo = "repo_311";
  createFile(filepath, owner, repo);
  // waitForRepositoryFileAdded(filepath, owner, repo);
  tryToAddExistingRepositoryFile(filepath, owner, repo);
  updateFile(filepath, owner, repo);
  verifyRepositoryFileExists(filepath, owner, repo);
  deleteFile(filepath, owner, repo);
  tryToDeleteANonExistingRepositoryFile(filepath, owner, repo);
  verifyRepositoryFileDoesNotExist(filepath, owner, repo);
});

// Story: crud:RepositoryFile:nondet:negative:dup-add
bthread("crud:RepositoryFile:nondet:negative:dup-add", function () {
  let filepath = "filepath_316";
  let owner = 316;
  let repo = "repo_316";
  createFile(filepath, owner, repo);
  // waitForRepositoryFileAdded(filepath, owner, repo);
  verifyRepositoryFileExists(filepath, owner, repo);
  tryToAddExistingRepositoryFile(filepath, owner, repo);
  verifyRepositoryFileExists(filepath, owner, repo);
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

// Story: crud:Ref:read_only
bthread("crud:Ref:read_only", function () {
  let owner = 380;
  let repo = "repo_380";
  verifyRefExists(owner, repo);
});

// Story: crud:SingleRef:read_only
bthread("crud:SingleRef:read_only", function () {
  let owner = 390;
  let ref = "ref_390";
  let repo = "repo_390";
  verifySingleRefExists(owner, ref, repo);
});

// Story: crud:Tag:nondet:1:1
bthread("crud:Tag:nondet:1:1", function () {
  let owner = 400;
  let repo = "repo_400";
  let sha = "sha_400";
  let tag = "tag_400";
  createTag(owner, repo, sha, tag);
  waitForTagAdded(owner, repo, sha, tag);
  tryToAddExistingTag(owner, repo, sha, tag);
  verifyTagExists(owner, repo, sha, tag);
  deleteTag(owner, repo, sha, tag);
  tryToDeleteANonExistingTag(owner, repo, sha, tag);
  verifyTagDoesNotExist(owner, repo, sha, tag);
});

// Story: crud:Tag:nondet:1:2
bthread("crud:Tag:nondet:1:2", function () {
  let owner = 401;
  let repo = "repo_401";
  let sha = "sha_401";
  let tag = "tag_401";
  createTag(owner, repo, sha, tag);
  // waitForTagAdded(owner, repo, sha, tag);
  tryToAddExistingTag(owner, repo, sha, tag);
  verifyTagExists(owner, repo, sha, tag);
  deleteTag(owner, repo, sha, tag);
  tryToDeleteANonExistingTag(owner, repo, sha, tag);
  verifyTagDoesNotExist(owner, repo, sha, tag);
});

// Story: crud:Tag:nondet:negative:dup-add
bthread("crud:Tag:nondet:negative:dup-add", function () {
  let owner = 406;
  let repo = "repo_406";
  let sha = "sha_406";
  let tag = "tag_406";
  createTag(owner, repo, sha, tag);
  // waitForTagAdded(owner, repo, sha, tag);
  verifyTagExists(owner, repo, sha, tag);
  tryToAddExistingTag(owner, repo, sha, tag);
  verifyTagExists(owner, repo, sha, tag);
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
  waitForHookAdded(id, limit, org, owner, page, repo, type);
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
  let id = 440;
  let owner = 440;
  let repo = "repo_440";
  repoCreateKey(id, owner, repo);
  waitForKeyAdded(id, owner, repo);
  tryToAddExistingKey(id, owner, repo);
  verifyKeyExists(id, owner, repo);
  repoDeleteKey(id, owner, repo);
  tryToDeleteANonExistingKey(id, owner, repo);
  verifyKeyDoesNotExist(id, owner, repo);
});

// Story: crud:Key:nondet:1:2
bthread("crud:Key:nondet:1:2", function () {
  let id = 441;
  let owner = 441;
  let repo = "repo_441";
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
  let id = 446;
  let owner = 446;
  let repo = "repo_446";
  repoCreateKey(id, owner, repo);
  // waitForKeyAdded(id, owner, repo);
  verifyKeyExists(id, owner, repo);
  tryToAddExistingKey(id, owner, repo);
  verifyKeyExists(id, owner, repo);
});

// Story: crud:PullRequest:read_only
bthread("crud:PullRequest:read_only", function () {
  let base = "base_450";
  let binary = "binary_450";
  let diffType = "diffType_450";
  let files = "files_450";
  let head = "head_450";
  let index = "index_450";
  let labels = "labels_450";
  let limit = "limit_450";
  let milestone = "milestone_450";
  let owner = 450;
  let page = "page_450";
  let poster = "poster_450";
  let repo = "repo_450";
  let skip-to = "skip-to_450";
  let sort = "sort_450";
  let state = "state_450";
  let verification = "verification_450";
  let whitespace = "whitespace_450";
  verifyPullRequestExists(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, verification, whitespace);
});

// Story: crud:PullRequestReviewRequest:nondet:1:1
bthread("crud:PullRequestReviewRequest:nondet:1:1", function () {
  let index = "index_460";
  let owner = 460;
  let repo = "repo_460";
  createPullReviewRequests(index, owner, repo);
  waitForPullRequestReviewRequestAdded(index, owner, repo);
  tryToAddExistingPullRequestReviewRequest(index, owner, repo);
  verifyPullRequestReviewRequestExists(index, owner, repo);
  deletePullReviewRequests(index, owner, repo);
  tryToDeleteANonExistingPullRequestReviewRequest(index, owner, repo);
  verifyPullRequestReviewRequestDoesNotExist(index, owner, repo);
});

// Story: crud:PullRequestReviewRequest:nondet:1:2
bthread("crud:PullRequestReviewRequest:nondet:1:2", function () {
  let index = "index_461";
  let owner = 461;
  let repo = "repo_461";
  createPullReviewRequests(index, owner, repo);
  // waitForPullRequestReviewRequestAdded(index, owner, repo);
  tryToAddExistingPullRequestReviewRequest(index, owner, repo);
  verifyPullRequestReviewRequestExists(index, owner, repo);
  deletePullReviewRequests(index, owner, repo);
  tryToDeleteANonExistingPullRequestReviewRequest(index, owner, repo);
  verifyPullRequestReviewRequestDoesNotExist(index, owner, repo);
});

// Story: crud:PullRequestReviewRequest:nondet:negative:dup-add
bthread("crud:PullRequestReviewRequest:nondet:negative:dup-add", function () {
  let index = "index_466";
  let owner = 466;
  let repo = "repo_466";
  createPullReviewRequests(index, owner, repo);
  // waitForPullRequestReviewRequestAdded(index, owner, repo);
  verifyPullRequestReviewRequestExists(index, owner, repo);
  tryToAddExistingPullRequestReviewRequest(index, owner, repo);
  verifyPullRequestReviewRequestExists(index, owner, repo);
});

// Story: crud:PullRequestReview:nondet:1:1
bthread("crud:PullRequestReview:nondet:1:1", function () {
  let id = 470;
  let index = "index_470";
  let limit = "limit_470";
  let owner = 470;
  let page = "page_470";
  let repo = "repo_470";
  createPullReview(id, index, limit, owner, page, repo);
  waitForPullRequestReviewAdded(id, index, limit, owner, page, repo);
  tryToAddExistingPullRequestReview(id, index, limit, owner, page, repo);
  verifyPullRequestReviewExists(id, index, limit, owner, page, repo);
  deletePullReview(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingPullRequestReview(id, index, limit, owner, page, repo);
  verifyPullRequestReviewDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:PullRequestReview:nondet:1:2
bthread("crud:PullRequestReview:nondet:1:2", function () {
  let id = 471;
  let index = "index_471";
  let limit = "limit_471";
  let owner = 471;
  let page = "page_471";
  let repo = "repo_471";
  createPullReview(id, index, limit, owner, page, repo);
  // waitForPullRequestReviewAdded(id, index, limit, owner, page, repo);
  tryToAddExistingPullRequestReview(id, index, limit, owner, page, repo);
  verifyPullRequestReviewExists(id, index, limit, owner, page, repo);
  deletePullReview(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingPullRequestReview(id, index, limit, owner, page, repo);
  verifyPullRequestReviewDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:PullRequestReview:nondet:negative:dup-add
bthread("crud:PullRequestReview:nondet:negative:dup-add", function () {
  let id = 476;
  let index = "index_476";
  let limit = "limit_476";
  let owner = 476;
  let page = "page_476";
  let repo = "repo_476";
  createPullReview(id, index, limit, owner, page, repo);
  // waitForPullRequestReviewAdded(id, index, limit, owner, page, repo);
  verifyPullRequestReviewExists(id, index, limit, owner, page, repo);
  tryToAddExistingPullRequestReview(id, index, limit, owner, page, repo);
  verifyPullRequestReviewExists(id, index, limit, owner, page, repo);
});

// Story: crud:PushMirror:nondet:1:1
bthread("crud:PushMirror:nondet:1:1", function () {
  let name = "name_500";
  let owner = 500;
  let repo = "repo_500";
  repoAddPushMirror(name, owner, repo);
  waitForPushMirrorAdded(name, owner, repo);
  tryToAddExistingPushMirror(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
  repoDeletePushMirror(name, owner, repo);
  tryToDeleteANonExistingPushMirror(name, owner, repo);
  verifyPushMirrorDoesNotExist(name, owner, repo);
});

// Story: crud:PushMirror:nondet:1:2
bthread("crud:PushMirror:nondet:1:2", function () {
  let name = "name_501";
  let owner = 501;
  let repo = "repo_501";
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
  let name = "name_506";
  let owner = 506;
  let repo = "repo_506";
  repoAddPushMirror(name, owner, repo);
  // waitForPushMirrorAdded(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
  tryToAddExistingPushMirror(name, owner, repo);
  verifyPushMirrorExists(name, owner, repo);
});

// Story: crud:Release:nondet:1:1
bthread("crud:Release:nondet:1:1", function () {
  let id = 510;
  let owner = 510;
  let repo = "repo_510";
  let tag = "tag_510";
  repoCreateRelease(id, owner, repo, tag);
  waitForReleaseAdded(id, owner, repo, tag);
  tryToAddExistingRelease(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
  repoEditRelease(id, owner, repo, tag);
  repoDeleteRelease(id, owner, repo, tag);
  tryToDeleteANonExistingRelease(id, owner, repo, tag);
  verifyReleaseDoesNotExist(id, owner, repo, tag);
});

// Story: crud:Release:nondet:1:2
bthread("crud:Release:nondet:1:2", function () {
  let id = 511;
  let owner = 511;
  let repo = "repo_511";
  let tag = "tag_511";
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
  let id = 516;
  let owner = 516;
  let repo = "repo_516";
  let tag = "tag_516";
  repoCreateRelease(id, owner, repo, tag);
  // waitForReleaseAdded(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
  tryToAddExistingRelease(id, owner, repo, tag);
  verifyReleaseExists(id, owner, repo, tag);
});

// Story: crud:ReleaseAttachment:nondet:1:1
bthread("crud:ReleaseAttachment:nondet:1:1", function () {
  let attachment_id = 520;
  let id = 520;
  let name = "name_520";
  let owner = 520;
  let repo = "repo_520";
  repoCreateReleaseAttachment(attachment_id, id, name, owner, repo);
  waitForReleaseAttachmentAdded(attachment_id, id, name, owner, repo);
  tryToAddExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentExists(attachment_id, id, name, owner, repo);
  editReleaseAttachment(attachment_id, id, name, owner, repo);
  deleteReleaseAttachment(attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingReleaseAttachment(attachment_id, id, name, owner, repo);
  verifyReleaseAttachmentDoesNotExist(attachment_id, id, name, owner, repo);
});

// Story: crud:ReleaseAttachment:nondet:1:2
bthread("crud:ReleaseAttachment:nondet:1:2", function () {
  let attachment_id = 521;
  let id = 521;
  let name = "name_521";
  let owner = 521;
  let repo = "repo_521";
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
  let attachment_id = 526;
  let id = 526;
  let name = "name_526";
  let owner = 526;
  let repo = "repo_526";
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
  let owner = 560;
  let repo = "repo_560";
  verifyStargazerExists(owner, repo);
});

// Story: crud:CommitStatus:read_only
bthread("crud:CommitStatus:read_only", function () {
  let owner = 570;
  let repo = "repo_570";
  let sha = "sha_570";
  verifyCommitStatusExists(owner, repo, sha);
});

// Story: crud:Subscriber:read_only
bthread("crud:Subscriber:read_only", function () {
  let owner = 580;
  let repo = "repo_580";
  verifySubscriberExists(owner, repo);
});

// Story: crud:Subscription:nondet:1:1
bthread("crud:Subscription:nondet:1:1", function () {
  let owner = "owner_590";
  let repo = "repo_590";
  let username = 590;
  watchRepo(owner, repo, username);
  waitForSubscriptionAdded(owner, repo, username);
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
  waitForTagProtectionAdded(id, owner, repo);
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

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let id = 610;
  let name = "name_610";
  let org = "org_610";
  let owner = "owner_610";
  let repo = "repo_610";
  let team = "team_610";
  orgCreateTeam(id, name, org, owner, repo, team);
  waitForTeamAdded(id, name, org, owner, repo, team);
  tryToAddExistingTeam(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
  orgEditTeam(id, name, org, owner, repo, team);
  orgDeleteTeam(id, name, org, owner, repo, team);
  tryToDeleteANonExistingTeam(id, name, org, owner, repo, team);
  verifyTeamDoesNotExist(id, name, org, owner, repo, team);
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let id = 611;
  let name = "name_611";
  let org = "org_611";
  let owner = "owner_611";
  let repo = "repo_611";
  let team = "team_611";
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
  let id = 616;
  let name = "name_616";
  let org = "org_616";
  let owner = "owner_616";
  let repo = "repo_616";
  let team = "team_616";
  orgCreateTeam(id, name, org, owner, repo, team);
  // waitForTeamAdded(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
  tryToAddExistingTeam(id, name, org, owner, repo, team);
  verifyTeamExists(id, name, org, owner, repo, team);
});

// Story: crud:Teams:read_only
bthread("crud:Teams:read_only", function () {
  let owner = 620;
  let repo = "repo_620";
  verifyTeamsExists(owner, repo);
});

// Story: crud:TrackedTime:read_only
bthread("crud:TrackedTime:read_only", function () {
  let owner = 630;
  let repo = "repo_630";
  verifyTrackedTimeExists(owner, repo);
});

// Story: crud:UserTrackedTime:read_only
bthread("crud:UserTrackedTime:read_only", function () {
  let owner = 640;
  let repo = "repo_640";
  let user = "user_640";
  verifyUserTrackedTimeExists(owner, repo, user);
});

// Story: crud:Topic:nondet:1:1
bthread("crud:Topic:nondet:1:1", function () {
  let limit = "limit_650";
  let owner = 650;
  let page = "page_650";
  let q = "q_650";
  let repo = "repo_650";
  let topic = "topic_650";
  addTopic(limit, owner, page, q, repo, topic);
  waitForTopicAdded(limit, owner, page, q, repo, topic);
  tryToAddExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
  deleteTopic(limit, owner, page, q, repo, topic);
  tryToDeleteANonExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicDoesNotExist(limit, owner, page, q, repo, topic);
});

// Story: crud:Topic:nondet:1:2
bthread("crud:Topic:nondet:1:2", function () {
  let limit = "limit_651";
  let owner = 651;
  let page = "page_651";
  let q = "q_651";
  let repo = "repo_651";
  let topic = "topic_651";
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
  let limit = "limit_656";
  let owner = 656;
  let page = "page_656";
  let q = "q_656";
  let repo = "repo_656";
  let topic = "topic_656";
  addTopic(limit, owner, page, q, repo, topic);
  // waitForTopicAdded(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
  tryToAddExistingTopic(limit, owner, page, q, repo, topic);
  verifyTopicExists(limit, owner, page, q, repo, topic);
});

// Story: crud:Topics:read_only
bthread("crud:Topics:read_only", function () {
  let owner = 660;
  let repo = "repo_660";
  verifyTopicsExists(owner, repo);
});

// Story: crud:WikiPage:nondet:1:1
bthread("crud:WikiPage:nondet:1:1", function () {
  let owner = 680;
  let pageName = "pageName_680";
  let repo = "repo_680";
  repoCreateWikiPage(owner, pageName, repo);
  waitForWikiPageAdded(owner, pageName, repo);
  tryToAddExistingWikiPage(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
  repoEditWikiPage(owner, pageName, repo);
  repoDeleteWikiPage(owner, pageName, repo);
  tryToDeleteANonExistingWikiPage(owner, pageName, repo);
  verifyWikiPageDoesNotExist(owner, pageName, repo);
});

// Story: crud:WikiPage:nondet:1:2
bthread("crud:WikiPage:nondet:1:2", function () {
  let owner = 681;
  let pageName = "pageName_681";
  let repo = "repo_681";
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
  let owner = 686;
  let pageName = "pageName_686";
  let repo = "repo_686";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForWikiPageAdded(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
  tryToAddExistingWikiPage(owner, pageName, repo);
  verifyWikiPageExists(owner, pageName, repo);
});

// Story: crud:WikiPages:read_only
bthread("crud:WikiPages:read_only", function () {
  let limit = "limit_690";
  let owner = 690;
  let page = "page_690";
  let repo = "repo_690";
  verifyWikiPagesExists(limit, owner, page, repo);
});

// Story: crud:WikiPageRevisions:read_only
bthread("crud:WikiPageRevisions:read_only", function () {
  let owner = 700;
  let page = "page_700";
  let pageName = "pageName_700";
  let repo = "repo_700";
  verifyWikiPageRevisionsExists(owner, page, pageName, repo);
});

// Story: crud:UserSecret:nondet:1:1
bthread("crud:UserSecret:nondet:1:1", function () {
  let secretname = 710;
  updateUserSecret(secretname);
  waitForUserSecretAdded(secretname);
  tryToAddExistingUserSecret(secretname);
  verifyUserSecretExists(secretname);
  updateUserSecret(secretname);
  deleteUserSecret(secretname);
  tryToDeleteANonExistingUserSecret(secretname);
  verifyUserSecretDoesNotExist(secretname);
});

// Story: crud:UserSecret:nondet:1:2
bthread("crud:UserSecret:nondet:1:2", function () {
  let secretname = 711;
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
  let secretname = 716;
  updateUserSecret(secretname);
  // waitForUserSecretAdded(secretname);
  verifyUserSecretExists(secretname);
  tryToAddExistingUserSecret(secretname);
  verifyUserSecretExists(secretname);
});

// Story: crud:UserVariable:nondet:1:1
bthread("crud:UserVariable:nondet:1:1", function () {
  let variablename = 720;
  createUserVariable(variablename);
  waitForUserVariableAdded(variablename);
  tryToAddExistingUserVariable(variablename);
  verifyUserVariableExists(variablename);
  updateUserVariable(variablename);
  deleteUserVariable(variablename);
  tryToDeleteANonExistingUserVariable(variablename);
  verifyUserVariableDoesNotExist(variablename);
});

// Story: crud:UserVariable:nondet:1:2
bthread("crud:UserVariable:nondet:1:2", function () {
  let variablename = 721;
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
  let variablename = 726;
  createUserVariable(variablename);
  // waitForUserVariableAdded(variablename);
  verifyUserVariableExists(variablename);
  tryToAddExistingUserVariable(variablename);
  verifyUserVariableExists(variablename);
});

// Story: crud:OAuth2Application:nondet:1:1
bthread("crud:OAuth2Application:nondet:1:1", function () {
  let id = 730;
  userCreateOAuth2Application(id);
  waitForOAuth2ApplicationAdded(id);
  tryToAddExistingOAuth2Application(id);
  verifyOAuth2ApplicationExists(id);
  userUpdateOAuth2Application(id);
  userDeleteOAuth2Application(id);
  tryToDeleteANonExistingOAuth2Application(id);
  verifyOAuth2ApplicationDoesNotExist(id);
});

// Story: crud:OAuth2Application:nondet:1:2
bthread("crud:OAuth2Application:nondet:1:2", function () {
  let id = 731;
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
  let id = 736;
  userCreateOAuth2Application(id);
  // waitForOAuth2ApplicationAdded(id);
  verifyOAuth2ApplicationExists(id);
  tryToAddExistingOAuth2Application(id);
  verifyOAuth2ApplicationExists(id);
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = 750;
  userBlockUser(username);
  waitForUserBlockAdded(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
  userUnblockUser(username);
  tryToDeleteANonExistingUserBlock(username);
  verifyUserBlockDoesNotExist(username);
});

// Story: crud:UserBlock:nondet:1:2
bthread("crud:UserBlock:nondet:1:2", function () {
  let username = 751;
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
  let username = 756;
  userBlockUser(username);
  // waitForUserBlockAdded(username);
  verifyUserBlockExists(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
});

// Story: crud:Email:nondet:1:1
bthread("crud:Email:nondet:1:1", function () {
  let limit = "limit_760";
  let page = "page_760";
  let q = "q_760";
  userAddEmail(limit, page, q);
  waitForEmailAdded(limit, page, q);
  tryToAddExistingEmail(limit, page, q);
  verifyEmailExists(limit, page, q);
  userDeleteEmail(limit, page, q);
  tryToDeleteANonExistingEmail(limit, page, q);
  verifyEmailDoesNotExist(limit, page, q);
});

// Story: crud:Email:nondet:1:2
bthread("crud:Email:nondet:1:2", function () {
  let limit = "limit_761";
  let page = "page_761";
  let q = "q_761";
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
  let limit = "limit_766";
  let page = "page_766";
  let q = "q_766";
  userAddEmail(limit, page, q);
  // waitForEmailAdded(limit, page, q);
  verifyEmailExists(limit, page, q);
  tryToAddExistingEmail(limit, page, q);
  verifyEmailExists(limit, page, q);
});

// Story: crud:Follower:read_only
bthread("crud:Follower:read_only", function () {
  let limit = "limit_770";
  let page = "page_770";
  verifyFollowerExists(limit, page);
});

// Story: crud:Following:read_only
bthread("crud:Following:read_only", function () {
  let limit = "limit_780";
  let page = "page_780";
  verifyFollowingExists(limit, page);
});

// Story: crud:UserFollow:nondet:1:1
bthread("crud:UserFollow:nondet:1:1", function () {
  let username = 790;
  userCurrentPutFollow(username);
  waitForUserFollowAdded(username);
  tryToAddExistingUserFollow(username);
  verifyUserFollowExists(username);
  userCurrentDeleteFollow(username);
  tryToDeleteANonExistingUserFollow(username);
  verifyUserFollowDoesNotExist(username);
});

// Story: crud:UserFollow:nondet:1:2
bthread("crud:UserFollow:nondet:1:2", function () {
  let username = 791;
  userCurrentPutFollow(username);
  // waitForUserFollowAdded(username);
  tryToAddExistingUserFollow(username);
  verifyUserFollowExists(username);
  userCurrentDeleteFollow(username);
  tryToDeleteANonExistingUserFollow(username);
  verifyUserFollowDoesNotExist(username);
});

// Story: crud:UserFollow:nondet:negative:dup-add
bthread("crud:UserFollow:nondet:negative:dup-add", function () {
  let username = 796;
  userCurrentPutFollow(username);
  // waitForUserFollowAdded(username);
  verifyUserFollowExists(username);
  tryToAddExistingUserFollow(username);
  verifyUserFollowExists(username);
});

// Story: crud:GPGKey:nondet:1:1
bthread("crud:GPGKey:nondet:1:1", function () {
  let id = 800;
  let limit = "limit_800";
  let page = "page_800";
  userCurrentPostGPGKey(id, limit, page);
  waitForGPGKeyAdded(id, limit, page);
  tryToAddExistingGPGKey(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
  userCurrentDeleteGPGKey(id, limit, page);
  tryToDeleteANonExistingGPGKey(id, limit, page);
  verifyGPGKeyDoesNotExist(id, limit, page);
});

// Story: crud:GPGKey:nondet:1:2
bthread("crud:GPGKey:nondet:1:2", function () {
  let id = 801;
  let limit = "limit_801";
  let page = "page_801";
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
  let id = 806;
  let limit = "limit_806";
  let page = "page_806";
  userCurrentPostGPGKey(id, limit, page);
  // waitForGPGKeyAdded(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
  tryToAddExistingGPGKey(id, limit, page);
  verifyGPGKeyExists(id, limit, page);
});

// Story: crud:PublicKey:nondet:1:1
bthread("crud:PublicKey:nondet:1:1", function () {
  let fingerprint = "fingerprint_810";
  let id = 810;
  let key = "key_810";
  let title = "title_810";
  createPublicKey(fingerprint, id, key, title);
  waitForPublicKeyAdded(fingerprint, id, key, title);
  tryToAddExistingPublicKey(fingerprint, id, key, title);
  verifyPublicKeyExists(fingerprint, id, key, title);
  deletePublicKey(fingerprint, id, key, title);
  tryToDeleteANonExistingPublicKey(fingerprint, id, key, title);
  verifyPublicKeyDoesNotExist(fingerprint, id, key, title);
});

// Story: crud:PublicKey:nondet:1:2
bthread("crud:PublicKey:nondet:1:2", function () {
  let fingerprint = "fingerprint_811";
  let id = 811;
  let key = "key_811";
  let title = "title_811";
  createPublicKey(fingerprint, id, key, title);
  // waitForPublicKeyAdded(fingerprint, id, key, title);
  tryToAddExistingPublicKey(fingerprint, id, key, title);
  verifyPublicKeyExists(fingerprint, id, key, title);
  deletePublicKey(fingerprint, id, key, title);
  tryToDeleteANonExistingPublicKey(fingerprint, id, key, title);
  verifyPublicKeyDoesNotExist(fingerprint, id, key, title);
});

// Story: crud:PublicKey:nondet:negative:dup-add
bthread("crud:PublicKey:nondet:negative:dup-add", function () {
  let fingerprint = "fingerprint_816";
  let id = 816;
  let key = "key_816";
  let title = "title_816";
  createPublicKey(fingerprint, id, key, title);
  // waitForPublicKeyAdded(fingerprint, id, key, title);
  verifyPublicKeyExists(fingerprint, id, key, title);
  tryToAddExistingPublicKey(fingerprint, id, key, title);
  verifyPublicKeyExists(fingerprint, id, key, title);
});

// Story: crud:UserSettings:read_only
bthread("crud:UserSettings:read_only", function () {

  verifyUserSettingsExists();
});

// Story: crud:Star:nondet:1:1
bthread("crud:Star:nondet:1:1", function () {
  let owner = 830;
  let repo = "repo_830";
  starRepo(owner, repo);
  waitForStarAdded(owner, repo);
  tryToAddExistingStar(owner, repo);
  verifyStarExists(owner, repo);
  unstarRepo(owner, repo);
  tryToDeleteANonExistingStar(owner, repo);
  verifyStarDoesNotExist(owner, repo);
});

// Story: crud:Star:nondet:1:2
bthread("crud:Star:nondet:1:2", function () {
  let owner = 831;
  let repo = "repo_831";
  starRepo(owner, repo);
  // waitForStarAdded(owner, repo);
  tryToAddExistingStar(owner, repo);
  verifyStarExists(owner, repo);
  unstarRepo(owner, repo);
  tryToDeleteANonExistingStar(owner, repo);
  verifyStarDoesNotExist(owner, repo);
});

// Story: crud:Star:nondet:negative:dup-add
bthread("crud:Star:nondet:negative:dup-add", function () {
  let owner = 836;
  let repo = "repo_836";
  starRepo(owner, repo);
  // waitForStarAdded(owner, repo);
  verifyStarExists(owner, repo);
  tryToAddExistingStar(owner, repo);
  verifyStarExists(owner, repo);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let limit = "limit_840";
  let login_name = "login_name_840";
  let page = "page_840";
  let purge = "purge_840";
  let source_id = 840;
  let username = 840;
  adminCreateUser(limit, login_name, page, purge, source_id, username);
  waitForUserAdded(limit, login_name, page, purge, source_id, username);
  tryToAddExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
  adminEditUser(limit, login_name, page, purge, source_id, username);
  adminDeleteUser(limit, login_name, page, purge, source_id, username);
  tryToDeleteANonExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserDoesNotExist(limit, login_name, page, purge, source_id, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let limit = "limit_841";
  let login_name = "login_name_841";
  let page = "page_841";
  let purge = "purge_841";
  let source_id = 841;
  let username = 841;
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
  let limit = "limit_846";
  let login_name = "login_name_846";
  let page = "page_846";
  let purge = "purge_846";
  let source_id = 846;
  let username = 846;
  adminCreateUser(limit, login_name, page, purge, source_id, username);
  // waitForUserAdded(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
  tryToAddExistingUser(limit, login_name, page, purge, source_id, username);
  verifyUserExists(limit, login_name, page, purge, source_id, username);
});

// Story: crud:UserSearch:read_only
bthread("crud:UserSearch:read_only", function () {
  let limit = "limit_850";
  let page = "page_850";
  let q = "q_850";
  let uid = 850;
  verifyUserSearchExists(limit, page, q, uid);
});

// Story: crud:UserActivityFeed:read_only
bthread("crud:UserActivityFeed:read_only", function () {
  let date = "date_860";
  let limit = "limit_860";
  let only-performed-by = "only-performed-by_860";
  let page = "page_860";
  let username = 860;
  verifyUserActivityFeedExists(date, limit, only-performed-by, page, username);
});

// Story: crud:UserFollowers:read_only
bthread("crud:UserFollowers:read_only", function () {
  let limit = "limit_870";
  let page = "page_870";
  let username = 870;
  verifyUserFollowersExists(limit, page, username);
});

// Story: crud:UserFollowing:read_only
bthread("crud:UserFollowing:read_only", function () {
  let limit = "limit_880";
  let page = "page_880";
  let username = 880;
  verifyUserFollowingExists(limit, page, username);
});

// Story: crud:UserFollowingCheck:read_only
bthread("crud:UserFollowingCheck:read_only", function () {
  let target = "target_890";
  let username = 890;
  verifyUserFollowingCheckExists(target, username);
});

// Story: crud:UserGPGKey:read_only
bthread("crud:UserGPGKey:read_only", function () {
  let limit = "limit_900";
  let page = "page_900";
  let username = 900;
  verifyUserGPGKeyExists(limit, page, username);
});

// Story: crud:UserHeatmap:read_only
bthread("crud:UserHeatmap:read_only", function () {
  let username = 910;
  verifyUserHeatmapExists(username);
});

// Story: crud:UserPublicKey:nondet:1:1
bthread("crud:UserPublicKey:nondet:1:1", function () {
  let fingerprint = "fingerprint_920";
  let id = 920;
  let limit = "limit_920";
  let page = "page_920";
  let username = 920;
  adminCreatePublicKey(fingerprint, id, limit, page, username);
  waitForUserPublicKeyAdded(fingerprint, id, limit, page, username);
  tryToAddExistingUserPublicKey(fingerprint, id, limit, page, username);
  verifyUserPublicKeyExists(fingerprint, id, limit, page, username);
  adminDeleteUserPublicKey(fingerprint, id, limit, page, username);
  tryToDeleteANonExistingUserPublicKey(fingerprint, id, limit, page, username);
  verifyUserPublicKeyDoesNotExist(fingerprint, id, limit, page, username);
});

// Story: crud:UserPublicKey:nondet:1:2
bthread("crud:UserPublicKey:nondet:1:2", function () {
  let fingerprint = "fingerprint_921";
  let id = 921;
  let limit = "limit_921";
  let page = "page_921";
  let username = 921;
  adminCreatePublicKey(fingerprint, id, limit, page, username);
  // waitForUserPublicKeyAdded(fingerprint, id, limit, page, username);
  tryToAddExistingUserPublicKey(fingerprint, id, limit, page, username);
  verifyUserPublicKeyExists(fingerprint, id, limit, page, username);
  adminDeleteUserPublicKey(fingerprint, id, limit, page, username);
  tryToDeleteANonExistingUserPublicKey(fingerprint, id, limit, page, username);
  verifyUserPublicKeyDoesNotExist(fingerprint, id, limit, page, username);
});

// Story: crud:UserPublicKey:nondet:negative:dup-add
bthread("crud:UserPublicKey:nondet:negative:dup-add", function () {
  let fingerprint = "fingerprint_926";
  let id = 926;
  let limit = "limit_926";
  let page = "page_926";
  let username = 926;
  adminCreatePublicKey(fingerprint, id, limit, page, username);
  // waitForUserPublicKeyAdded(fingerprint, id, limit, page, username);
  verifyUserPublicKeyExists(fingerprint, id, limit, page, username);
  tryToAddExistingUserPublicKey(fingerprint, id, limit, page, username);
  verifyUserPublicKeyExists(fingerprint, id, limit, page, username);
});

// Story: crud:UserRepo:read_only
bthread("crud:UserRepo:read_only", function () {
  let limit = "limit_930";
  let page = "page_930";
  let username = 930;
  verifyUserRepoExists(limit, page, username);
});

// Story: crud:AccessToken:nondet:1:1
bthread("crud:AccessToken:nondet:1:1", function () {
  let token = "token_940";
  let username = 940;
  createAccessToken(token, username);
  waitForAccessTokenAdded(token, username);
  tryToAddExistingAccessToken(token, username);
  verifyAccessTokenExists(token, username);
  deleteAccessToken(token, username);
  tryToDeleteANonExistingAccessToken(token, username);
  verifyAccessTokenDoesNotExist(token, username);
});

// Story: crud:AccessToken:nondet:1:2
bthread("crud:AccessToken:nondet:1:2", function () {
  let token = "token_941";
  let username = 941;
  createAccessToken(token, username);
  // waitForAccessTokenAdded(token, username);
  tryToAddExistingAccessToken(token, username);
  verifyAccessTokenExists(token, username);
  deleteAccessToken(token, username);
  tryToDeleteANonExistingAccessToken(token, username);
  verifyAccessTokenDoesNotExist(token, username);
});

// Story: crud:AccessToken:nondet:negative:dup-add
bthread("crud:AccessToken:nondet:negative:dup-add", function () {
  let token = "token_946";
  let username = 946;
  createAccessToken(token, username);
  // waitForAccessTokenAdded(token, username);
  verifyAccessTokenExists(token, username);
  tryToAddExistingAccessToken(token, username);
  verifyAccessTokenExists(token, username);
});

// Story: crud:StarredRepository:read_only
bthread("crud:StarredRepository:read_only", function () {
  let username = 950;
  verifyStarredRepositoryExists(username);
});

// Story: crud:Issue:nondet:1:1
bthread("crud:Issue:nondet:1:1", function () {
  let index = "index_960";
  let owner = 960;
  let repo = "repo_960";
  createIssue(index, owner, repo);
  waitForIssueAdded(index, owner, repo);
  tryToAddExistingIssue(index, owner, repo);
  verifyIssueExists(index, owner, repo);
  editIssue(index, owner, repo);
  deleteIssue(index, owner, repo);
  tryToDeleteANonExistingIssue(index, owner, repo);
  verifyIssueDoesNotExist(index, owner, repo);
});

// Story: crud:Issue:nondet:1:2
bthread("crud:Issue:nondet:1:2", function () {
  let index = "index_961";
  let owner = 961;
  let repo = "repo_961";
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
  let index = "index_966";
  let owner = 966;
  let repo = "repo_966";
  createIssue(index, owner, repo);
  // waitForIssueAdded(index, owner, repo);
  verifyIssueExists(index, owner, repo);
  tryToAddExistingIssue(index, owner, repo);
  verifyIssueExists(index, owner, repo);
});

// Story: crud:IssueComment:nondet:1:1
bthread("crud:IssueComment:nondet:1:1", function () {
  let before = "before_970";
  let body = "body_970";
  let id = 970;
  let index = "index_970";
  let owner = 970;
  let repo = "repo_970";
  let since = "since_970";
  createIssueComment(before, body, id, index, owner, repo, since);
  waitForIssueCommentAdded(before, body, id, index, owner, repo, since);
  tryToAddExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
  editIssueComment(before, body, id, index, owner, repo, since);
  deleteIssueComment(before, body, id, index, owner, repo, since);
  tryToDeleteANonExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentDoesNotExist(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueComment:nondet:1:2
bthread("crud:IssueComment:nondet:1:2", function () {
  let before = "before_971";
  let body = "body_971";
  let id = 971;
  let index = "index_971";
  let owner = 971;
  let repo = "repo_971";
  let since = "since_971";
  createIssueComment(before, body, id, index, owner, repo, since);
  // waitForIssueCommentAdded(before, body, id, index, owner, repo, since);
  tryToAddExistingIssueComment(before, body, id, index, owner, repo, since);
  editIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
  deleteIssueComment(before, body, id, index, owner, repo, since);
  tryToDeleteANonExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentDoesNotExist(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueComment:nondet:negative:dup-add
bthread("crud:IssueComment:nondet:negative:dup-add", function () {
  let before = "before_976";
  let body = "body_976";
  let id = 976;
  let index = "index_976";
  let owner = 976;
  let repo = "repo_976";
  let since = "since_976";
  createIssueComment(before, body, id, index, owner, repo, since);
  // waitForIssueCommentAdded(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
  tryToAddExistingIssueComment(before, body, id, index, owner, repo, since);
  verifyIssueCommentExists(before, body, id, index, owner, repo, since);
});

// Story: crud:IssueCommentAttachment:nondet:1:1
bthread("crud:IssueCommentAttachment:nondet:1:1", function () {
  let attachment_id = 980;
  let id = 980;
  let name = "name_980";
  let owner = 980;
  let repo = "repo_980";
  createIssueCommentAttachment(attachment_id, id, name, owner, repo);
  waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo);
  tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
  editIssueCommentAttachment(attachment_id, id, name, owner, repo);
  deleteIssueCommentAttachment(attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentDoesNotExist(attachment_id, id, name, owner, repo);
});

// Story: crud:IssueCommentAttachment:nondet:1:2
bthread("crud:IssueCommentAttachment:nondet:1:2", function () {
  let attachment_id = 981;
  let id = 981;
  let name = "name_981";
  let owner = 981;
  let repo = "repo_981";
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
  let attachment_id = 986;
  let id = 986;
  let name = "name_986";
  let owner = 986;
  let repo = "repo_986";
  createIssueCommentAttachment(attachment_id, id, name, owner, repo);
  // waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
  tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:1
bthread("crud:IssueCommentReaction:nondet:1:1", function () {
  let id = 990;
  let owner = 990;
  let repo = "repo_990";
  addIssueCommentReaction(id, owner, repo);
  waitForIssueCommentReactionAdded(id, owner, repo);
  tryToAddExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
  deleteIssueCommentReaction(id, owner, repo);
  tryToDeleteANonExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionDoesNotExist(id, owner, repo);
});

// Story: crud:IssueCommentReaction:nondet:1:2
bthread("crud:IssueCommentReaction:nondet:1:2", function () {
  let id = 991;
  let owner = 991;
  let repo = "repo_991";
  addIssueCommentReaction(id, owner, repo);
  // waitForIssueCommentReactionAdded(id, owner, repo);
  tryToAddExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
  deleteIssueCommentReaction(id, owner, repo);
  tryToDeleteANonExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionDoesNotExist(id, owner, repo);
});

// Story: crud:IssueCommentReaction:nondet:negative:dup-add
bthread("crud:IssueCommentReaction:nondet:negative:dup-add", function () {
  let id = 996;
  let owner = 996;
  let repo = "repo_996";
  addIssueCommentReaction(id, owner, repo);
  // waitForIssueCommentReactionAdded(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
  tryToAddExistingIssueCommentReaction(id, owner, repo);
  verifyIssueCommentReactionExists(id, owner, repo);
});

// Story: crud:IssueAttachment:nondet:1:1
bthread("crud:IssueAttachment:nondet:1:1", function () {
  let attachment_id = 1000;
  let index = "index_1000";
  let name = "name_1000";
  let owner = 1000;
  let repo = "repo_1000";
  createIssueAttachment(attachment_id, index, name, owner, repo);
  waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo);
  tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
  editIssueAttachment(attachment_id, index, name, owner, repo);
  deleteIssueAttachment(attachment_id, index, name, owner, repo);
  tryToDeleteANonExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentDoesNotExist(attachment_id, index, name, owner, repo);
});

// Story: crud:IssueAttachment:nondet:1:2
bthread("crud:IssueAttachment:nondet:1:2", function () {
  let attachment_id = 1001;
  let index = "index_1001";
  let name = "name_1001";
  let owner = 1001;
  let repo = "repo_1001";
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
  let attachment_id = 1006;
  let index = "index_1006";
  let name = "name_1006";
  let owner = 1006;
  let repo = "repo_1006";
  createIssueAttachment(attachment_id, index, name, owner, repo);
  // waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
  tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
});

// Story: crud:IssueBlock:nondet:1:1
bthread("crud:IssueBlock:nondet:1:1", function () {
  let id = 1010;
  let index = "index_1010";
  let limit = "limit_1010";
  let owner = 1010;
  let page = "page_1010";
  let repo = "repo_1010";
  createIssueBlock(id, index, limit, owner, page, repo);
  waitForIssueBlockAdded(id, index, limit, owner, page, repo);
  tryToAddExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
  removeIssueBlock(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:IssueBlock:nondet:1:2
bthread("crud:IssueBlock:nondet:1:2", function () {
  let id = 1011;
  let index = "index_1011";
  let limit = "limit_1011";
  let owner = 1011;
  let page = "page_1011";
  let repo = "repo_1011";
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
  let id = 1016;
  let index = "index_1016";
  let limit = "limit_1016";
  let owner = 1016;
  let page = "page_1016";
  let repo = "repo_1016";
  createIssueBlock(id, index, limit, owner, page, repo);
  // waitForIssueBlockAdded(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
  tryToAddExistingIssueBlock(id, index, limit, owner, page, repo);
  verifyIssueBlockExists(id, index, limit, owner, page, repo);
});

// Story: crud:IssueDependency:nondet:1:1
bthread("crud:IssueDependency:nondet:1:1", function () {
  let id = 1040;
  let index = "index_1040";
  let limit = "limit_1040";
  let owner = 1040;
  let page = "page_1040";
  let repo = "repo_1040";
  createIssueDependency(id, index, limit, owner, page, repo);
  waitForIssueDependencyAdded(id, index, limit, owner, page, repo);
  tryToAddExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
  removeIssueDependency(id, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyDoesNotExist(id, index, limit, owner, page, repo);
});

// Story: crud:IssueDependency:nondet:1:2
bthread("crud:IssueDependency:nondet:1:2", function () {
  let id = 1041;
  let index = "index_1041";
  let limit = "limit_1041";
  let owner = 1041;
  let page = "page_1041";
  let repo = "repo_1041";
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
  let id = 1046;
  let index = "index_1046";
  let limit = "limit_1046";
  let owner = 1046;
  let page = "page_1046";
  let repo = "repo_1046";
  createIssueDependency(id, index, limit, owner, page, repo);
  // waitForIssueDependencyAdded(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
  tryToAddExistingIssueDependency(id, index, limit, owner, page, repo);
  verifyIssueDependencyExists(id, index, limit, owner, page, repo);
});

// Story: crud:IssueLabel:nondet:1:1
bthread("crud:IssueLabel:nondet:1:1", function () {
  let index = "index_1050";
  let labels = "labels_1050";
  let owner = 1050;
  let repo = "repo_1050";
  addIssueLabel(index, labels, owner, repo);
  waitForIssueLabelAdded(index, labels, owner, repo);
  tryToAddExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
  replaceIssueLabels(index, labels, owner, repo);
  clearIssueLabels(index, labels, owner, repo);
  tryToDeleteANonExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelDoesNotExist(index, labels, owner, repo);
});

// Story: crud:IssueLabel:nondet:1:2
bthread("crud:IssueLabel:nondet:1:2", function () {
  let index = "index_1051";
  let labels = "labels_1051";
  let owner = 1051;
  let repo = "repo_1051";
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
  let index = "index_1056";
  let labels = "labels_1056";
  let owner = 1056;
  let repo = "repo_1056";
  addIssueLabel(index, labels, owner, repo);
  // waitForIssueLabelAdded(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
  tryToAddExistingIssueLabel(index, labels, owner, repo);
  verifyIssueLabelExists(index, labels, owner, repo);
});

// Story: crud:IssuePin:nondet:1:1
bthread("crud:IssuePin:nondet:1:1", function () {
  let index = "index_1070";
  let owner = 1070;
  let repo = "repo_1070";
  pinIssue(index, owner, repo);
  waitForIssuePinAdded(index, owner, repo);
  tryToAddExistingIssuePin(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
  unpinIssue(index, owner, repo);
  tryToDeleteANonExistingIssuePin(index, owner, repo);
  verifyIssuePinDoesNotExist(index, owner, repo);
});

// Story: crud:IssuePin:nondet:1:2
bthread("crud:IssuePin:nondet:1:2", function () {
  let index = "index_1071";
  let owner = 1071;
  let repo = "repo_1071";
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
  let index = "index_1076";
  let owner = 1076;
  let repo = "repo_1076";
  pinIssue(index, owner, repo);
  // waitForIssuePinAdded(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
  tryToAddExistingIssuePin(index, owner, repo);
  verifyIssuePinExists(index, owner, repo);
});

// Story: crud:IssueReaction:nondet:1:1
bthread("crud:IssueReaction:nondet:1:1", function () {
  let content = "content_1090";
  let index = "index_1090";
  let limit = "limit_1090";
  let owner = 1090;
  let page = "page_1090";
  let repo = "repo_1090";
  addIssueReaction(content, index, limit, owner, page, repo);
  waitForIssueReactionAdded(content, index, limit, owner, page, repo);
  tryToAddExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
  removeIssueReaction(content, index, limit, owner, page, repo);
  tryToDeleteANonExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionDoesNotExist(content, index, limit, owner, page, repo);
});

// Story: crud:IssueReaction:nondet:1:2
bthread("crud:IssueReaction:nondet:1:2", function () {
  let content = "content_1091";
  let index = "index_1091";
  let limit = "limit_1091";
  let owner = 1091;
  let page = "page_1091";
  let repo = "repo_1091";
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
  let content = "content_1096";
  let index = "index_1096";
  let limit = "limit_1096";
  let owner = 1096;
  let page = "page_1096";
  let repo = "repo_1096";
  addIssueReaction(content, index, limit, owner, page, repo);
  // waitForIssueReactionAdded(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
  tryToAddExistingIssueReaction(content, index, limit, owner, page, repo);
  verifyIssueReactionExists(content, index, limit, owner, page, repo);
});

// Story: crud:IssueStopwatch:nondet:1:1
bthread("crud:IssueStopwatch:nondet:1:1", function () {
  let index = "index_1100";
  let owner = 1100;
  let repo = "repo_1100";
  startIssueStopwatch(index, owner, repo);
  waitForIssueStopwatchAdded(index, owner, repo);
  tryToAddExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
  stopIssueStopwatch(index, owner, repo);
  deleteIssueStopwatch(index, owner, repo);
  tryToDeleteANonExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchDoesNotExist(index, owner, repo);
});

// Story: crud:IssueStopwatch:nondet:1:2
bthread("crud:IssueStopwatch:nondet:1:2", function () {
  let index = "index_1101";
  let owner = 1101;
  let repo = "repo_1101";
  startIssueStopwatch(index, owner, repo);
  // waitForIssueStopwatchAdded(index, owner, repo);
  tryToAddExistingIssueStopwatch(index, owner, repo);
  stopIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
  deleteIssueStopwatch(index, owner, repo);
  tryToDeleteANonExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchDoesNotExist(index, owner, repo);
});

// Story: crud:IssueStopwatch:nondet:negative:dup-add
bthread("crud:IssueStopwatch:nondet:negative:dup-add", function () {
  let index = "index_1106";
  let owner = 1106;
  let repo = "repo_1106";
  startIssueStopwatch(index, owner, repo);
  // waitForIssueStopwatchAdded(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
  tryToAddExistingIssueStopwatch(index, owner, repo);
  verifyIssueStopwatchExists(index, owner, repo);
});

// Story: crud:IssueSubscription:nondet:1:1
bthread("crud:IssueSubscription:nondet:1:1", function () {
  let index = "index_1110";
  let owner = 1110;
  let repo = "repo_1110";
  let user = "user_1110";
  addIssueSubscription(index, owner, repo, user);
  waitForIssueSubscriptionAdded(index, owner, repo, user);
  tryToAddExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
  deleteIssueSubscription(index, owner, repo, user);
  tryToDeleteANonExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionDoesNotExist(index, owner, repo, user);
});

// Story: crud:IssueSubscription:nondet:1:2
bthread("crud:IssueSubscription:nondet:1:2", function () {
  let index = "index_1111";
  let owner = 1111;
  let repo = "repo_1111";
  let user = "user_1111";
  addIssueSubscription(index, owner, repo, user);
  // waitForIssueSubscriptionAdded(index, owner, repo, user);
  tryToAddExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
  deleteIssueSubscription(index, owner, repo, user);
  tryToDeleteANonExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionDoesNotExist(index, owner, repo, user);
});

// Story: crud:IssueSubscription:nondet:negative:dup-add
bthread("crud:IssueSubscription:nondet:negative:dup-add", function () {
  let index = "index_1116";
  let owner = 1116;
  let repo = "repo_1116";
  let user = "user_1116";
  addIssueSubscription(index, owner, repo, user);
  // waitForIssueSubscriptionAdded(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
  tryToAddExistingIssueSubscription(index, owner, repo, user);
  verifyIssueSubscriptionExists(index, owner, repo, user);
});

// Story: crud:IssueTimeline:read_only
bthread("crud:IssueTimeline:read_only", function () {
  let index = "index_1120";
  let owner = 1120;
  let repo = "repo_1120";
  verifyIssueTimelineExists(index, owner, repo);
});

// Story: crud:IssueTrackedTime:nondet:1:1
bthread("crud:IssueTrackedTime:nondet:1:1", function () {
  let id = 1130;
  let index = "index_1130";
  let owner = 1130;
  let repo = "repo_1130";
  addIssueTrackedTime(id, index, owner, repo);
  waitForIssueTrackedTimeAdded(id, index, owner, repo);
  tryToAddExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
  deleteIssueTrackedTime(id, index, owner, repo);
  tryToDeleteANonExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeDoesNotExist(id, index, owner, repo);
});

// Story: crud:IssueTrackedTime:nondet:1:2
bthread("crud:IssueTrackedTime:nondet:1:2", function () {
  let id = 1131;
  let index = "index_1131";
  let owner = 1131;
  let repo = "repo_1131";
  addIssueTrackedTime(id, index, owner, repo);
  // waitForIssueTrackedTimeAdded(id, index, owner, repo);
  tryToAddExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
  deleteIssueTrackedTime(id, index, owner, repo);
  tryToDeleteANonExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeDoesNotExist(id, index, owner, repo);
});

// Story: crud:IssueTrackedTime:nondet:negative:dup-add
bthread("crud:IssueTrackedTime:nondet:negative:dup-add", function () {
  let id = 1136;
  let index = "index_1136";
  let owner = 1136;
  let repo = "repo_1136";
  addIssueTrackedTime(id, index, owner, repo);
  // waitForIssueTrackedTimeAdded(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
  tryToAddExistingIssueTrackedTime(id, index, owner, repo);
  verifyIssueTrackedTimeExists(id, index, owner, repo);
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let id = 1140;
  let org = 1140;
  let owner = "owner_1140";
  let repo = "repo_1140";
  createLabel(id, org, owner, repo);
  waitForLabelAdded(id, org, owner, repo);
  tryToAddExistingLabel(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
  editLabel(id, org, owner, repo);
  deleteLabel(id, org, owner, repo);
  tryToDeleteANonExistingLabel(id, org, owner, repo);
  verifyLabelDoesNotExist(id, org, owner, repo);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let id = 1141;
  let org = 1141;
  let owner = "owner_1141";
  let repo = "repo_1141";
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
  let id = 1146;
  let org = 1146;
  let owner = "owner_1146";
  let repo = "repo_1146";
  createLabel(id, org, owner, repo);
  // waitForLabelAdded(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
  tryToAddExistingLabel(id, org, owner, repo);
  verifyLabelExists(id, org, owner, repo);
});

// Story: crud:Milestone:nondet:1:1
bthread("crud:Milestone:nondet:1:1", function () {
  let id = 1150;
  let owner = 1150;
  let repo = "repo_1150";
  issueCreateMilestone(id, owner, repo);
  waitForMilestoneAdded(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  issueEditMilestone(id, owner, repo);
  issueDeleteMilestone(id, owner, repo);
  tryToDeleteANonExistingMilestone(id, owner, repo);
  verifyMilestoneDoesNotExist(id, owner, repo);
});

// Story: crud:Milestone:nondet:1:2
bthread("crud:Milestone:nondet:1:2", function () {
  let id = 1151;
  let owner = 1151;
  let repo = "repo_1151";
  issueCreateMilestone(id, owner, repo);
  // waitForMilestoneAdded(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  issueEditMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  issueDeleteMilestone(id, owner, repo);
  tryToDeleteANonExistingMilestone(id, owner, repo);
  verifyMilestoneDoesNotExist(id, owner, repo);
});

// Story: crud:Milestone:nondet:negative:dup-add
bthread("crud:Milestone:nondet:negative:dup-add", function () {
  let id = 1156;
  let owner = 1156;
  let repo = "repo_1156";
  issueCreateMilestone(id, owner, repo);
  // waitForMilestoneAdded(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let limit = "limit_1160";
  let org = "org_1160";
  let page = "page_1160";
  let username = 1160;
  adminCreateOrg(limit, org, page, username);
  waitForOrganizationAdded(limit, org, page, username);
  tryToAddExistingOrganization(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
  editOrganization(limit, org, page, username);
  deleteOrganization(limit, org, page, username);
  tryToDeleteANonExistingOrganization(limit, org, page, username);
  verifyOrganizationDoesNotExist(limit, org, page, username);
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let limit = "limit_1161";
  let org = "org_1161";
  let page = "page_1161";
  let username = 1161;
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
  let limit = "limit_1166";
  let org = "org_1166";
  let page = "page_1166";
  let username = 1166;
  adminCreateOrg(limit, org, page, username);
  // waitForOrganizationAdded(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
  tryToAddExistingOrganization(limit, org, page, username);
  verifyOrganizationExists(limit, org, page, username);
});

// Story: crud:OrgSecret:nondet:1:1
bthread("crud:OrgSecret:nondet:1:1", function () {
  let org = 1180;
  let secretname = "secretname_1180";
  updateOrgSecret(org, secretname);
  waitForOrgSecretAdded(org, secretname);
  tryToAddExistingOrgSecret(org, secretname);
  verifyOrgSecretExists(org, secretname);
  deleteOrgSecret(org, secretname);
  tryToDeleteANonExistingOrgSecret(org, secretname);
  verifyOrgSecretDoesNotExist(org, secretname);
});

// Story: crud:OrgSecret:nondet:1:2
bthread("crud:OrgSecret:nondet:1:2", function () {
  let org = 1181;
  let secretname = "secretname_1181";
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
  let org = 1186;
  let secretname = "secretname_1186";
  updateOrgSecret(org, secretname);
  // waitForOrgSecretAdded(org, secretname);
  verifyOrgSecretExists(org, secretname);
  tryToAddExistingOrgSecret(org, secretname);
  verifyOrgSecretExists(org, secretname);
});

// Story: crud:OrgVariable:nondet:1:1
bthread("crud:OrgVariable:nondet:1:1", function () {
  let org = 1190;
  let variablename = "variablename_1190";
  createOrgVariable(org, variablename);
  waitForOrgVariableAdded(org, variablename);
  tryToAddExistingOrgVariable(org, variablename);
  verifyOrgVariableExists(org, variablename);
  updateOrgVariable(org, variablename);
  deleteOrgVariable(org, variablename);
  tryToDeleteANonExistingOrgVariable(org, variablename);
  verifyOrgVariableDoesNotExist(org, variablename);
});

// Story: crud:OrgVariable:nondet:1:2
bthread("crud:OrgVariable:nondet:1:2", function () {
  let org = 1191;
  let variablename = "variablename_1191";
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
  let org = 1196;
  let variablename = "variablename_1196";
  createOrgVariable(org, variablename);
  // waitForOrgVariableAdded(org, variablename);
  verifyOrgVariableExists(org, variablename);
  tryToAddExistingOrgVariable(org, variablename);
  verifyOrgVariableExists(org, variablename);
});

// Story: crud:Block:nondet:1:1
bthread("crud:Block:nondet:1:1", function () {
  let note = "note_1210";
  let org = 1210;
  let username = "username_1210";
  blockUser(note, org, username);
  waitForBlockAdded(note, org, username);
  tryToAddExistingBlock(note, org, username);
  verifyBlockExists(note, org, username);
  unblockUser(note, org, username);
  tryToDeleteANonExistingBlock(note, org, username);
  verifyBlockDoesNotExist(note, org, username);
});

// Story: crud:Block:nondet:1:2
bthread("crud:Block:nondet:1:2", function () {
  let note = "note_1211";
  let org = 1211;
  let username = "username_1211";
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
  let note = "note_1216";
  let org = 1216;
  let username = "username_1216";
  blockUser(note, org, username);
  // waitForBlockAdded(note, org, username);
  verifyBlockExists(note, org, username);
  tryToAddExistingBlock(note, org, username);
  verifyBlockExists(note, org, username);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let org = 1220;
  let username = "username_1220";
  verifyMemberExists(org, username);
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = 1230;
  let username = "username_1230";
  publicizeMember(org, username);
  waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  concealMember(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = 1231;
  let username = "username_1231";
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
  let org = 1236;
  let username = "username_1236";
  publicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  verifyPublicMemberExists(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
});

// Story: crud:TeamMember:nondet:1:1
bthread("crud:TeamMember:nondet:1:1", function () {
  let id = 1240;
  let username = "username_1240";
  orgAddTeamMember(id, username);
  waitForTeamMemberAdded(id, username);
  tryToAddExistingTeamMember(id, username);
  verifyTeamMemberExists(id, username);
  orgRemoveTeamMember(id, username);
  tryToDeleteANonExistingTeamMember(id, username);
  verifyTeamMemberDoesNotExist(id, username);
});

// Story: crud:TeamMember:nondet:1:2
bthread("crud:TeamMember:nondet:1:2", function () {
  let id = 1241;
  let username = "username_1241";
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
  let id = 1246;
  let username = "username_1246";
  orgAddTeamMember(id, username);
  // waitForTeamMemberAdded(id, username);
  verifyTeamMemberExists(id, username);
  tryToAddExistingTeamMember(id, username);
  verifyTeamMemberExists(id, username);
});

// Story: crud:TeamRepository:nondet:1:1
bthread("crud:TeamRepository:nondet:1:1", function () {
  let id = 1250;
  let org = "org_1250";
  let repo = "repo_1250";
  orgAddTeamRepository(id, org, repo);
  waitForTeamRepositoryAdded(id, org, repo);
  tryToAddExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
  orgRemoveTeamRepository(id, org, repo);
  tryToDeleteANonExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryDoesNotExist(id, org, repo);
});

// Story: crud:TeamRepository:nondet:1:2
bthread("crud:TeamRepository:nondet:1:2", function () {
  let id = 1251;
  let org = "org_1251";
  let repo = "repo_1251";
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
  let id = 1256;
  let org = "org_1256";
  let repo = "repo_1256";
  orgAddTeamRepository(id, org, repo);
  // waitForTeamRepositoryAdded(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
  tryToAddExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
});

// Story: crud:CronTask:read_only
bthread("crud:CronTask:read_only", function () {
  let limit = "limit_1260";
  let page = "page_1260";
  let task = 1260;
  verifyCronTaskExists(limit, page, task);
});

// Story: crud:RunnerRegistrationToken:read_only
bthread("crud:RunnerRegistrationToken:read_only", function () {

  verifyRunnerRegistrationTokenExists();
});

// Story: crud:UnadoptedRepository:nondet:1:1
bthread("crud:UnadoptedRepository:nondet:1:1", function () {
  let limit = "limit_1280";
  let owner = 1280;
  let page = "page_1280";
  let pattern = "pattern_1280";
  let repo = "repo_1280";
  adoptUnadoptedRepository(limit, owner, page, pattern, repo);
  waitForUnadoptedRepositoryAdded(limit, owner, page, pattern, repo);
  tryToAddExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
  deleteUnadoptedRepository(limit, owner, page, pattern, repo);
  tryToDeleteANonExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryDoesNotExist(limit, owner, page, pattern, repo);
});

// Story: crud:UnadoptedRepository:nondet:1:2
bthread("crud:UnadoptedRepository:nondet:1:2", function () {
  let limit = "limit_1281";
  let owner = 1281;
  let page = "page_1281";
  let pattern = "pattern_1281";
  let repo = "repo_1281";
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
  let limit = "limit_1286";
  let owner = 1286;
  let page = "page_1286";
  let pattern = "pattern_1286";
  let repo = "repo_1286";
  adoptUnadoptedRepository(limit, owner, page, pattern, repo);
  // waitForUnadoptedRepositoryAdded(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
  tryToAddExistingUnadoptedRepository(limit, owner, page, pattern, repo);
  verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo);
});

// Story: crud:UserBadge:nondet:1:1
bthread("crud:UserBadge:nondet:1:1", function () {
  let username = 1290;
  adminAddUserBadges(username);
  waitForUserBadgeAdded(username);
  tryToAddExistingUserBadge(username);
  verifyUserBadgeExists(username);
  adminDeleteUserBadges(username);
  tryToDeleteANonExistingUserBadge(username);
  verifyUserBadgeDoesNotExist(username);
});

// Story: crud:UserBadge:nondet:1:2
bthread("crud:UserBadge:nondet:1:2", function () {
  let username = 1291;
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
  let username = 1296;
  adminAddUserBadges(username);
  // waitForUserBadgeAdded(username);
  verifyUserBadgeExists(username);
  tryToAddExistingUserBadge(username);
  verifyUserBadgeExists(username);
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let id = 1310;
  let to-status = "to-status_1310";
  verifyNotificationExists(id, to-status);
});

// Story: crud:NotificationList:read_only
bthread("crud:NotificationList:read_only", function () {
  let all = "all_1320";
  let before = "before_1320";
  let last_read_at = "last_read_at_1320";
  let limit = "limit_1320";
  let page = "page_1320";
  let since = "since_1320";
  let status-types = "status-types_1320";
  let subject-type = "subject-type_1320";
  let to-status = "to-status_1320";
  verifyNotificationListExists(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status);
});

// Story: crud:NotificationNew:read_only
bthread("crud:NotificationNew:read_only", function () {

  verifyNotificationNewExists();
});

// Story: crud:RepoNotificationList:read_only
bthread("crud:RepoNotificationList:read_only", function () {
  let all = "all_1340";
  let before = "before_1340";
  let last_read_at = "last_read_at_1340";
  let limit = "limit_1340";
  let owner = 1340;
  let page = "page_1340";
  let repo = "repo_1340";
  let since = "since_1340";
  let status-types = "status-types_1340";
  let subject-type = "subject-type_1340";
  let to-status = "to-status_1340";
  verifyRepoNotificationListExists(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status);
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let name = "name_1350";
  let owner = 1350;
  let type = "type_1350";
  let version = "version_1350";
  verifyPackageExists(name, owner, type, version);
});

// Story: crud:PackageList:read_only
bthread("crud:PackageList:read_only", function () {
  let limit = "limit_1360";
  let owner = 1360;
  let page = "page_1360";
  let q = "q_1360";
  let type = "type_1360";
  verifyPackageListExists(limit, owner, page, q, type);
});

// Story: crud:PackageFileList:read_only
bthread("crud:PackageFileList:read_only", function () {
  let name = "name_1370";
  let owner = 1370;
  let type = "type_1370";
  let version = "version_1370";
  verifyPackageFileListExists(name, owner, type, version);
});

// Story: crud:Person:read_only
bthread("crud:Person:read_only", function () {
  let user-id;
  verifyPersonExists(user-id);
});
