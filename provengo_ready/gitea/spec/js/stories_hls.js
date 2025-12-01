// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Repository:nondet:1:1
bthread("crud:Repository:nondet:1:1", function () {
  let org = 200;
  let owner = "owner_200";
  let repo = "repo_200";
  let username = "username_200";
  adminCreateRepo(org, owner, repo, username);
  // waitForRepositoryAdded(org, owner, repo, username);
  tryToAddExistingRepository(org, owner, repo, username);
  verifyRepositoryExists(org, owner, repo, username);
  repoEdit(org, owner, repo, username);
  adminDeleteUnadoptedRepository(org, owner, repo, username);
  tryToDeleteANonExistingRepository(org, owner, repo, username);
  verifyRepositoryDoesNotExist(org, owner, repo, username);
});

// Story: crud:Repository:nondet:1:2
bthread("crud:Repository:nondet:1:2", function () {
  let org = 201;
  let owner = "owner_201";
  let repo = "repo_201";
  let username = "username_201";
  adminCreateRepo(org, owner, repo, username);
  // waitForRepositoryAdded(org, owner, repo, username);
  tryToAddExistingRepository(org, owner, repo, username);
  repoEdit(org, owner, repo, username);
  verifyRepositoryExists(org, owner, repo, username);
  adminDeleteUnadoptedRepository(org, owner, repo, username);
  tryToDeleteANonExistingRepository(org, owner, repo, username);
  verifyRepositoryDoesNotExist(org, owner, repo, username);
});

// Story: crud:Repository:nondet:negative:dup-add
bthread("crud:Repository:nondet:negative:dup-add", function () {
  let org = 206;
  let owner = "owner_206";
  let repo = "repo_206";
  let username = "username_206";
  adminCreateRepo(org, owner, repo, username);
  // waitForRepositoryAdded(org, owner, repo, username);
  verifyRepositoryExists(org, owner, repo, username);
  tryToAddExistingRepository(org, owner, repo, username);
  verifyRepositoryExists(org, owner, repo, username);
});

// Story: crud:RepositorySearch:read_only
bthread("crud:RepositorySearch:read_only", function () {
  let archived = "archived_220";
  let exclusive = "exclusive_220";
  let includeDesc = "includeDesc_220";
  let is_private = "is_private_220";
  let limit = "limit_220";
  let mode = "mode_220";
  let order = "order_220";
  let page = "page_220";
  let priority_owner_id = 220;
  let private = "private_220";
  let q = "q_220";
  let sort = "sort_220";
  let starredBy = "starredBy_220";
  let template = "template_220";
  let topic = "topic_220";
  let uid = 220;
  verifyRepositorySearchExists(archived, exclusive, includeDesc, is_private, limit, mode, order, page, priority_owner_id, private, q, sort, starredBy, team_id, template, topic, uid);
});

// Story: crud:RepositoryFile:nondet:1:1
bthread("crud:RepositoryFile:nondet:1:1", function () {
  let filepath = "filepath_230";
  let owner = 230;
  let ref = "ref_230";
  let repo = "repo_230";
  repoCreateFile(filepath, owner, ref, repo);
  // waitForRepositoryFileAdded(filepath, owner, ref, repo);
  tryToAddExistingRepositoryFile(filepath, owner, ref, repo);
  verifyRepositoryFileExists(filepath, owner, ref, repo);
  repoUpdateFile(filepath, owner, ref, repo);
  repoDeleteFile(filepath, owner, ref, repo);
  tryToDeleteANonExistingRepositoryFile(filepath, owner, ref, repo);
  verifyRepositoryFileDoesNotExist(filepath, owner, ref, repo);
});

// Story: crud:RepositoryFile:nondet:1:2
bthread("crud:RepositoryFile:nondet:1:2", function () {
  let filepath = "filepath_231";
  let owner = 231;
  let ref = "ref_231";
  let repo = "repo_231";
  repoCreateFile(filepath, owner, ref, repo);
  // waitForRepositoryFileAdded(filepath, owner, ref, repo);
  tryToAddExistingRepositoryFile(filepath, owner, ref, repo);
  repoUpdateFile(filepath, owner, ref, repo);
  verifyRepositoryFileExists(filepath, owner, ref, repo);
  repoDeleteFile(filepath, owner, ref, repo);
  tryToDeleteANonExistingRepositoryFile(filepath, owner, ref, repo);
  verifyRepositoryFileDoesNotExist(filepath, owner, ref, repo);
});

// Story: crud:RepositoryFile:nondet:negative:dup-add
bthread("crud:RepositoryFile:nondet:negative:dup-add", function () {
  let filepath = "filepath_236";
  let owner = 236;
  let ref = "ref_236";
  let repo = "repo_236";
  repoCreateFile(filepath, owner, ref, repo);
  // waitForRepositoryFileAdded(filepath, owner, ref, repo);
  verifyRepositoryFileExists(filepath, owner, ref, repo);
  tryToAddExistingRepositoryFile(filepath, owner, ref, repo);
  verifyRepositoryFileExists(filepath, owner, ref, repo);
});

// Story: crud:RepositoryBranch:nondet:1:1
bthread("crud:RepositoryBranch:nondet:1:1", function () {
  let branch = "branch_240";
  let owner = 240;
  let repo = "repo_240";
  repoCreateBranch(branch, owner, repo);
  // waitForRepositoryBranchAdded(branch, owner, repo);
  tryToAddExistingRepositoryBranch(branch, owner, repo);
  verifyRepositoryBranchExists(branch, owner, repo);
  repoUpdateBranch(branch, owner, repo);
  repoDeleteBranch(branch, owner, repo);
  tryToDeleteANonExistingRepositoryBranch(branch, owner, repo);
  verifyRepositoryBranchDoesNotExist(branch, owner, repo);
});

// Story: crud:RepositoryBranch:nondet:1:2
bthread("crud:RepositoryBranch:nondet:1:2", function () {
  let branch = "branch_241";
  let owner = 241;
  let repo = "repo_241";
  repoCreateBranch(branch, owner, repo);
  // waitForRepositoryBranchAdded(branch, owner, repo);
  tryToAddExistingRepositoryBranch(branch, owner, repo);
  repoUpdateBranch(branch, owner, repo);
  verifyRepositoryBranchExists(branch, owner, repo);
  repoDeleteBranch(branch, owner, repo);
  tryToDeleteANonExistingRepositoryBranch(branch, owner, repo);
  verifyRepositoryBranchDoesNotExist(branch, owner, repo);
});

// Story: crud:RepositoryBranch:nondet:negative:dup-add
bthread("crud:RepositoryBranch:nondet:negative:dup-add", function () {
  let branch = "branch_246";
  let owner = 246;
  let repo = "repo_246";
  repoCreateBranch(branch, owner, repo);
  // waitForRepositoryBranchAdded(branch, owner, repo);
  verifyRepositoryBranchExists(branch, owner, repo);
  tryToAddExistingRepositoryBranch(branch, owner, repo);
  verifyRepositoryBranchExists(branch, owner, repo);
});

// Story: crud:RepositoryCollaborator:nondet:1:1
bthread("crud:RepositoryCollaborator:nondet:1:1", function () {
  let collaborator = "collaborator_250";
  let owner = 250;
  let repo = "repo_250";
  repoAddCollaborator(collaborator, owner, repo);
  // waitForRepositoryCollaboratorAdded(collaborator, owner, repo);
  tryToAddExistingRepositoryCollaborator(collaborator, owner, repo);
  verifyRepositoryCollaboratorExists(collaborator, owner, repo);
  repoDeleteCollaborator(collaborator, owner, repo);
  tryToDeleteANonExistingRepositoryCollaborator(collaborator, owner, repo);
  verifyRepositoryCollaboratorDoesNotExist(collaborator, owner, repo);
});

// Story: crud:RepositoryCollaborator:nondet:1:2
bthread("crud:RepositoryCollaborator:nondet:1:2", function () {
  let collaborator = "collaborator_251";
  let owner = 251;
  let repo = "repo_251";
  repoAddCollaborator(collaborator, owner, repo);
  // waitForRepositoryCollaboratorAdded(collaborator, owner, repo);
  tryToAddExistingRepositoryCollaborator(collaborator, owner, repo);
  verifyRepositoryCollaboratorExists(collaborator, owner, repo);
  repoDeleteCollaborator(collaborator, owner, repo);
  tryToDeleteANonExistingRepositoryCollaborator(collaborator, owner, repo);
  verifyRepositoryCollaboratorDoesNotExist(collaborator, owner, repo);
});

// Story: crud:RepositoryCollaborator:nondet:negative:dup-add
bthread("crud:RepositoryCollaborator:nondet:negative:dup-add", function () {
  let collaborator = "collaborator_256";
  let owner = 256;
  let repo = "repo_256";
  repoAddCollaborator(collaborator, owner, repo);
  // waitForRepositoryCollaboratorAdded(collaborator, owner, repo);
  verifyRepositoryCollaboratorExists(collaborator, owner, repo);
  tryToAddExistingRepositoryCollaborator(collaborator, owner, repo);
  verifyRepositoryCollaboratorExists(collaborator, owner, repo);
});

// Story: crud:RepositoryKey:nondet:1:1
bthread("crud:RepositoryKey:nondet:1:1", function () {
  let id = 260;
  let owner = 260;
  let repo = "repo_260";
  repoCreateKey(id, owner, repo);
  // waitForRepositoryKeyAdded(id, owner, repo);
  tryToAddExistingRepositoryKey(id, owner, repo);
  verifyRepositoryKeyExists(id, owner, repo);
  repoDeleteKey(id, owner, repo);
  tryToDeleteANonExistingRepositoryKey(id, owner, repo);
  verifyRepositoryKeyDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryKey:nondet:1:2
bthread("crud:RepositoryKey:nondet:1:2", function () {
  let id = 261;
  let owner = 261;
  let repo = "repo_261";
  repoCreateKey(id, owner, repo);
  // waitForRepositoryKeyAdded(id, owner, repo);
  tryToAddExistingRepositoryKey(id, owner, repo);
  verifyRepositoryKeyExists(id, owner, repo);
  repoDeleteKey(id, owner, repo);
  tryToDeleteANonExistingRepositoryKey(id, owner, repo);
  verifyRepositoryKeyDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryKey:nondet:negative:dup-add
bthread("crud:RepositoryKey:nondet:negative:dup-add", function () {
  let id = 266;
  let owner = 266;
  let repo = "repo_266";
  repoCreateKey(id, owner, repo);
  // waitForRepositoryKeyAdded(id, owner, repo);
  verifyRepositoryKeyExists(id, owner, repo);
  tryToAddExistingRepositoryKey(id, owner, repo);
  verifyRepositoryKeyExists(id, owner, repo);
});

// Story: crud:RepositoryPullRequest:nondet:1:1
bthread("crud:RepositoryPullRequest:nondet:1:1", function () {
  let index = "index_270";
  let owner = 270;
  let repo = "repo_270";
  repoCreatePullRequest(index, owner, repo);
  // waitForRepositoryPullRequestAdded(index, owner, repo);
  tryToAddExistingRepositoryPullRequest(index, owner, repo);
  verifyRepositoryPullRequestExists(index, owner, repo);
  repoEditPullRequest(index, owner, repo);
  repoCancelScheduledAutoMerge(index, owner, repo);
  tryToDeleteANonExistingRepositoryPullRequest(index, owner, repo);
  verifyRepositoryPullRequestDoesNotExist(index, owner, repo);
});

// Story: crud:RepositoryPullRequest:nondet:1:2
bthread("crud:RepositoryPullRequest:nondet:1:2", function () {
  let index = "index_271";
  let owner = 271;
  let repo = "repo_271";
  repoCreatePullRequest(index, owner, repo);
  // waitForRepositoryPullRequestAdded(index, owner, repo);
  tryToAddExistingRepositoryPullRequest(index, owner, repo);
  repoEditPullRequest(index, owner, repo);
  verifyRepositoryPullRequestExists(index, owner, repo);
  repoCancelScheduledAutoMerge(index, owner, repo);
  tryToDeleteANonExistingRepositoryPullRequest(index, owner, repo);
  verifyRepositoryPullRequestDoesNotExist(index, owner, repo);
});

// Story: crud:RepositoryPullRequest:nondet:negative:dup-add
bthread("crud:RepositoryPullRequest:nondet:negative:dup-add", function () {
  let index = "index_276";
  let owner = 276;
  let repo = "repo_276";
  repoCreatePullRequest(index, owner, repo);
  // waitForRepositoryPullRequestAdded(index, owner, repo);
  verifyRepositoryPullRequestExists(index, owner, repo);
  tryToAddExistingRepositoryPullRequest(index, owner, repo);
  verifyRepositoryPullRequestExists(index, owner, repo);
});

// Story: crud:RepositoryPullRequestReview:nondet:1:1
bthread("crud:RepositoryPullRequestReview:nondet:1:1", function () {
  let id = 280;
  let index = "index_280";
  let owner = 280;
  let repo = "repo_280";
  repoCreatePullReview(id, index, owner, repo);
  // waitForRepositoryPullRequestReviewAdded(id, index, owner, repo);
  tryToAddExistingRepositoryPullRequestReview(id, index, owner, repo);
  verifyRepositoryPullRequestReviewExists(id, index, owner, repo);
  repoDeletePullReview(id, index, owner, repo);
  tryToDeleteANonExistingRepositoryPullRequestReview(id, index, owner, repo);
  verifyRepositoryPullRequestReviewDoesNotExist(id, index, owner, repo);
});

// Story: crud:RepositoryPullRequestReview:nondet:1:2
bthread("crud:RepositoryPullRequestReview:nondet:1:2", function () {
  let id = 281;
  let index = "index_281";
  let owner = 281;
  let repo = "repo_281";
  repoCreatePullReview(id, index, owner, repo);
  // waitForRepositoryPullRequestReviewAdded(id, index, owner, repo);
  tryToAddExistingRepositoryPullRequestReview(id, index, owner, repo);
  verifyRepositoryPullRequestReviewExists(id, index, owner, repo);
  repoDeletePullReview(id, index, owner, repo);
  tryToDeleteANonExistingRepositoryPullRequestReview(id, index, owner, repo);
  verifyRepositoryPullRequestReviewDoesNotExist(id, index, owner, repo);
});

// Story: crud:RepositoryPullRequestReview:nondet:negative:dup-add
bthread("crud:RepositoryPullRequestReview:nondet:negative:dup-add", function () {
  let id = 286;
  let index = "index_286";
  let owner = 286;
  let repo = "repo_286";
  repoCreatePullReview(id, index, owner, repo);
  // waitForRepositoryPullRequestReviewAdded(id, index, owner, repo);
  verifyRepositoryPullRequestReviewExists(id, index, owner, repo);
  tryToAddExistingRepositoryPullRequestReview(id, index, owner, repo);
  verifyRepositoryPullRequestReviewExists(id, index, owner, repo);
});

// Story: crud:RepositoryWikiPage:nondet:1:1
bthread("crud:RepositoryWikiPage:nondet:1:1", function () {
  let owner = 300;
  let pageName = "pageName_300";
  let repo = "repo_300";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForRepositoryWikiPageAdded(owner, pageName, repo);
  tryToAddExistingRepositoryWikiPage(owner, pageName, repo);
  verifyRepositoryWikiPageExists(owner, pageName, repo);
  repoEditWikiPage(owner, pageName, repo);
  repoDeleteWikiPage(owner, pageName, repo);
  tryToDeleteANonExistingRepositoryWikiPage(owner, pageName, repo);
  verifyRepositoryWikiPageDoesNotExist(owner, pageName, repo);
});

// Story: crud:RepositoryWikiPage:nondet:1:2
bthread("crud:RepositoryWikiPage:nondet:1:2", function () {
  let owner = 301;
  let pageName = "pageName_301";
  let repo = "repo_301";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForRepositoryWikiPageAdded(owner, pageName, repo);
  tryToAddExistingRepositoryWikiPage(owner, pageName, repo);
  repoEditWikiPage(owner, pageName, repo);
  verifyRepositoryWikiPageExists(owner, pageName, repo);
  repoDeleteWikiPage(owner, pageName, repo);
  tryToDeleteANonExistingRepositoryWikiPage(owner, pageName, repo);
  verifyRepositoryWikiPageDoesNotExist(owner, pageName, repo);
});

// Story: crud:RepositoryWikiPage:nondet:negative:dup-add
bthread("crud:RepositoryWikiPage:nondet:negative:dup-add", function () {
  let owner = 306;
  let pageName = "pageName_306";
  let repo = "repo_306";
  repoCreateWikiPage(owner, pageName, repo);
  // waitForRepositoryWikiPageAdded(owner, pageName, repo);
  verifyRepositoryWikiPageExists(owner, pageName, repo);
  tryToAddExistingRepositoryWikiPage(owner, pageName, repo);
  verifyRepositoryWikiPageExists(owner, pageName, repo);
});

// Story: crud:RepositoryRelease:nondet:1:1
bthread("crud:RepositoryRelease:nondet:1:1", function () {
  let id = 310;
  let owner = 310;
  let repo = "repo_310";
  repoCreateRelease(id, owner, repo);
  // waitForRepositoryReleaseAdded(id, owner, repo);
  tryToAddExistingRepositoryRelease(id, owner, repo);
  verifyRepositoryReleaseExists(id, owner, repo);
  repoEditRelease(id, owner, repo);
  repoDeleteRelease(id, owner, repo);
  tryToDeleteANonExistingRepositoryRelease(id, owner, repo);
  verifyRepositoryReleaseDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryRelease:nondet:1:2
bthread("crud:RepositoryRelease:nondet:1:2", function () {
  let id = 311;
  let owner = 311;
  let repo = "repo_311";
  repoCreateRelease(id, owner, repo);
  // waitForRepositoryReleaseAdded(id, owner, repo);
  tryToAddExistingRepositoryRelease(id, owner, repo);
  repoEditRelease(id, owner, repo);
  verifyRepositoryReleaseExists(id, owner, repo);
  repoDeleteRelease(id, owner, repo);
  tryToDeleteANonExistingRepositoryRelease(id, owner, repo);
  verifyRepositoryReleaseDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryRelease:nondet:negative:dup-add
bthread("crud:RepositoryRelease:nondet:negative:dup-add", function () {
  let id = 316;
  let owner = 316;
  let repo = "repo_316";
  repoCreateRelease(id, owner, repo);
  // waitForRepositoryReleaseAdded(id, owner, repo);
  verifyRepositoryReleaseExists(id, owner, repo);
  tryToAddExistingRepositoryRelease(id, owner, repo);
  verifyRepositoryReleaseExists(id, owner, repo);
});

// Story: crud:RepositoryReleaseAttachment:nondet:1:1
bthread("crud:RepositoryReleaseAttachment:nondet:1:1", function () {
  let attachment = "attachment_320";
  let attachment_id = 320;
  let id = 320;
  let name = "name_320";
  let owner = 320;
  let repo = "repo_320";
  repoCreateReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  // waitForRepositoryReleaseAttachmentAdded(attachment, attachment_id, id, name, owner, repo);
  tryToAddExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  verifyRepositoryReleaseAttachmentExists(attachment, attachment_id, id, name, owner, repo);
  repoEditReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  repoDeleteReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  verifyRepositoryReleaseAttachmentDoesNotExist(attachment, attachment_id, id, name, owner, repo);
});

// Story: crud:RepositoryReleaseAttachment:nondet:1:2
bthread("crud:RepositoryReleaseAttachment:nondet:1:2", function () {
  let attachment = "attachment_321";
  let attachment_id = 321;
  let id = 321;
  let name = "name_321";
  let owner = 321;
  let repo = "repo_321";
  repoCreateReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  // waitForRepositoryReleaseAttachmentAdded(attachment, attachment_id, id, name, owner, repo);
  tryToAddExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  repoEditReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  verifyRepositoryReleaseAttachmentExists(attachment, attachment_id, id, name, owner, repo);
  repoDeleteReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  tryToDeleteANonExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  verifyRepositoryReleaseAttachmentDoesNotExist(attachment, attachment_id, id, name, owner, repo);
});

// Story: crud:RepositoryReleaseAttachment:nondet:negative:dup-add
bthread("crud:RepositoryReleaseAttachment:nondet:negative:dup-add", function () {
  let attachment = "attachment_326";
  let attachment_id = 326;
  let id = 326;
  let name = "name_326";
  let owner = 326;
  let repo = "repo_326";
  repoCreateReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  // waitForRepositoryReleaseAttachmentAdded(attachment, attachment_id, id, name, owner, repo);
  verifyRepositoryReleaseAttachmentExists(attachment, attachment_id, id, name, owner, repo);
  tryToAddExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo);
  verifyRepositoryReleaseAttachmentExists(attachment, attachment_id, id, name, owner, repo);
});

// Story: crud:RepositoryHook:nondet:1:1
bthread("crud:RepositoryHook:nondet:1:1", function () {
  let id = 330;
  let owner = 330;
  let repo = "repo_330";
  repoCreateHook(id, owner, repo);
  // waitForRepositoryHookAdded(id, owner, repo);
  tryToAddExistingRepositoryHook(id, owner, repo);
  verifyRepositoryHookExists(id, owner, repo);
  repoEditHook(id, owner, repo);
  repoDeleteHook(id, owner, repo);
  tryToDeleteANonExistingRepositoryHook(id, owner, repo);
  verifyRepositoryHookDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryHook:nondet:1:2
bthread("crud:RepositoryHook:nondet:1:2", function () {
  let id = 331;
  let owner = 331;
  let repo = "repo_331";
  repoCreateHook(id, owner, repo);
  // waitForRepositoryHookAdded(id, owner, repo);
  tryToAddExistingRepositoryHook(id, owner, repo);
  repoEditHook(id, owner, repo);
  verifyRepositoryHookExists(id, owner, repo);
  repoDeleteHook(id, owner, repo);
  tryToDeleteANonExistingRepositoryHook(id, owner, repo);
  verifyRepositoryHookDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryHook:nondet:negative:dup-add
bthread("crud:RepositoryHook:nondet:negative:dup-add", function () {
  let id = 336;
  let owner = 336;
  let repo = "repo_336";
  repoCreateHook(id, owner, repo);
  // waitForRepositoryHookAdded(id, owner, repo);
  verifyRepositoryHookExists(id, owner, repo);
  tryToAddExistingRepositoryHook(id, owner, repo);
  verifyRepositoryHookExists(id, owner, repo);
});

// Story: crud:RepositoryGitHook:read_only
bthread("crud:RepositoryGitHook:read_only", function () {
  let id = 340;
  let owner = 340;
  let repo = "repo_340";
  verifyRepositoryGitHookExists(id, owner, repo);
});

// Story: crud:RepositoryBranchProtection:nondet:1:1
bthread("crud:RepositoryBranchProtection:nondet:1:1", function () {
  let name = "name_350";
  let owner = 350;
  let repo = "repo_350";
  repoCreateBranchProtection(name, owner, repo);
  // waitForRepositoryBranchProtectionAdded(name, owner, repo);
  tryToAddExistingRepositoryBranchProtection(name, owner, repo);
  verifyRepositoryBranchProtectionExists(name, owner, repo);
  repoEditBranchProtection(name, owner, repo);
  repoDeleteBranchProtection(name, owner, repo);
  tryToDeleteANonExistingRepositoryBranchProtection(name, owner, repo);
  verifyRepositoryBranchProtectionDoesNotExist(name, owner, repo);
});

// Story: crud:RepositoryBranchProtection:nondet:1:2
bthread("crud:RepositoryBranchProtection:nondet:1:2", function () {
  let name = "name_351";
  let owner = 351;
  let repo = "repo_351";
  repoCreateBranchProtection(name, owner, repo);
  // waitForRepositoryBranchProtectionAdded(name, owner, repo);
  tryToAddExistingRepositoryBranchProtection(name, owner, repo);
  repoEditBranchProtection(name, owner, repo);
  verifyRepositoryBranchProtectionExists(name, owner, repo);
  repoDeleteBranchProtection(name, owner, repo);
  tryToDeleteANonExistingRepositoryBranchProtection(name, owner, repo);
  verifyRepositoryBranchProtectionDoesNotExist(name, owner, repo);
});

// Story: crud:RepositoryBranchProtection:nondet:negative:dup-add
bthread("crud:RepositoryBranchProtection:nondet:negative:dup-add", function () {
  let name = "name_356";
  let owner = 356;
  let repo = "repo_356";
  repoCreateBranchProtection(name, owner, repo);
  // waitForRepositoryBranchProtectionAdded(name, owner, repo);
  verifyRepositoryBranchProtectionExists(name, owner, repo);
  tryToAddExistingRepositoryBranchProtection(name, owner, repo);
  verifyRepositoryBranchProtectionExists(name, owner, repo);
});

// Story: crud:RepositoryTagProtection:nondet:1:1
bthread("crud:RepositoryTagProtection:nondet:1:1", function () {
  let id = 360;
  let owner = 360;
  let repo = "repo_360";
  repoCreateTagProtection(id, owner, repo);
  // waitForRepositoryTagProtectionAdded(id, owner, repo);
  tryToAddExistingRepositoryTagProtection(id, owner, repo);
  verifyRepositoryTagProtectionExists(id, owner, repo);
  repoEditTagProtection(id, owner, repo);
  repoDeleteTagProtection(id, owner, repo);
  tryToDeleteANonExistingRepositoryTagProtection(id, owner, repo);
  verifyRepositoryTagProtectionDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryTagProtection:nondet:1:2
bthread("crud:RepositoryTagProtection:nondet:1:2", function () {
  let id = 361;
  let owner = 361;
  let repo = "repo_361";
  repoCreateTagProtection(id, owner, repo);
  // waitForRepositoryTagProtectionAdded(id, owner, repo);
  tryToAddExistingRepositoryTagProtection(id, owner, repo);
  repoEditTagProtection(id, owner, repo);
  verifyRepositoryTagProtectionExists(id, owner, repo);
  repoDeleteTagProtection(id, owner, repo);
  tryToDeleteANonExistingRepositoryTagProtection(id, owner, repo);
  verifyRepositoryTagProtectionDoesNotExist(id, owner, repo);
});

// Story: crud:RepositoryTagProtection:nondet:negative:dup-add
bthread("crud:RepositoryTagProtection:nondet:negative:dup-add", function () {
  let id = 366;
  let owner = 366;
  let repo = "repo_366";
  repoCreateTagProtection(id, owner, repo);
  // waitForRepositoryTagProtectionAdded(id, owner, repo);
  verifyRepositoryTagProtectionExists(id, owner, repo);
  tryToAddExistingRepositoryTagProtection(id, owner, repo);
  verifyRepositoryTagProtectionExists(id, owner, repo);
});

// Story: crud:RepositoryTag:nondet:1:1
bthread("crud:RepositoryTag:nondet:1:1", function () {
  let owner = 370;
  let repo = "repo_370";
  let tag = "tag_370";
  repoCreateTag(owner, repo, tag);
  // waitForRepositoryTagAdded(owner, repo, tag);
  tryToAddExistingRepositoryTag(owner, repo, tag);
  verifyRepositoryTagExists(owner, repo, tag);
  repoDeleteTag(owner, repo, tag);
  tryToDeleteANonExistingRepositoryTag(owner, repo, tag);
  verifyRepositoryTagDoesNotExist(owner, repo, tag);
});

// Story: crud:RepositoryTag:nondet:1:2
bthread("crud:RepositoryTag:nondet:1:2", function () {
  let owner = 371;
  let repo = "repo_371";
  let tag = "tag_371";
  repoCreateTag(owner, repo, tag);
  // waitForRepositoryTagAdded(owner, repo, tag);
  tryToAddExistingRepositoryTag(owner, repo, tag);
  verifyRepositoryTagExists(owner, repo, tag);
  repoDeleteTag(owner, repo, tag);
  tryToDeleteANonExistingRepositoryTag(owner, repo, tag);
  verifyRepositoryTagDoesNotExist(owner, repo, tag);
});

// Story: crud:RepositoryTag:nondet:negative:dup-add
bthread("crud:RepositoryTag:nondet:negative:dup-add", function () {
  let owner = 376;
  let repo = "repo_376";
  let tag = "tag_376";
  repoCreateTag(owner, repo, tag);
  // waitForRepositoryTagAdded(owner, repo, tag);
  verifyRepositoryTagExists(owner, repo, tag);
  tryToAddExistingRepositoryTag(owner, repo, tag);
  verifyRepositoryTagExists(owner, repo, tag);
});

// Story: crud:RepositoryPushMirror:nondet:1:1
bthread("crud:RepositoryPushMirror:nondet:1:1", function () {
  let name = "name_380";
  let owner = 380;
  let repo = "repo_380";
  repoAddPushMirror(name, owner, repo);
  // waitForRepositoryPushMirrorAdded(name, owner, repo);
  tryToAddExistingRepositoryPushMirror(name, owner, repo);
  verifyRepositoryPushMirrorExists(name, owner, repo);
  repoDeletePushMirror(name, owner, repo);
  tryToDeleteANonExistingRepositoryPushMirror(name, owner, repo);
  verifyRepositoryPushMirrorDoesNotExist(name, owner, repo);
});

// Story: crud:RepositoryPushMirror:nondet:1:2
bthread("crud:RepositoryPushMirror:nondet:1:2", function () {
  let name = "name_381";
  let owner = 381;
  let repo = "repo_381";
  repoAddPushMirror(name, owner, repo);
  // waitForRepositoryPushMirrorAdded(name, owner, repo);
  tryToAddExistingRepositoryPushMirror(name, owner, repo);
  verifyRepositoryPushMirrorExists(name, owner, repo);
  repoDeletePushMirror(name, owner, repo);
  tryToDeleteANonExistingRepositoryPushMirror(name, owner, repo);
  verifyRepositoryPushMirrorDoesNotExist(name, owner, repo);
});

// Story: crud:RepositoryPushMirror:nondet:negative:dup-add
bthread("crud:RepositoryPushMirror:nondet:negative:dup-add", function () {
  let name = "name_386";
  let owner = 386;
  let repo = "repo_386";
  repoAddPushMirror(name, owner, repo);
  // waitForRepositoryPushMirrorAdded(name, owner, repo);
  verifyRepositoryPushMirrorExists(name, owner, repo);
  tryToAddExistingRepositoryPushMirror(name, owner, repo);
  verifyRepositoryPushMirrorExists(name, owner, repo);
});

// Story: crud:RepositoryVariable:nondet:1:1
bthread("crud:RepositoryVariable:nondet:1:1", function () {
  let owner = 390;
  let repo = "repo_390";
  let variablename = "variablename_390";
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
  let owner = 391;
  let repo = "repo_391";
  let variablename = "variablename_391";
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
  let owner = 396;
  let repo = "repo_396";
  let variablename = "variablename_396";
  createRepoVariable(owner, repo, variablename);
  // waitForRepositoryVariableAdded(owner, repo, variablename);
  verifyRepositoryVariableExists(owner, repo, variablename);
  tryToAddExistingRepositoryVariable(owner, repo, variablename);
  verifyRepositoryVariableExists(owner, repo, variablename);
});

// Story: crud:RepositorySecret:nondet:1:1
bthread("crud:RepositorySecret:nondet:1:1", function () {
  let owner = 400;
  let repo = "repo_400";
  let secretname = "secretname_400";
  updateRepoSecret(owner, repo, secretname);
  // waitForRepositorySecretAdded(owner, repo, secretname);
  tryToAddExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
  deleteRepoSecret(owner, repo, secretname);
  tryToDeleteANonExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretDoesNotExist(owner, repo, secretname);
});

// Story: crud:RepositorySecret:nondet:1:2
bthread("crud:RepositorySecret:nondet:1:2", function () {
  let owner = 401;
  let repo = "repo_401";
  let secretname = "secretname_401";
  updateRepoSecret(owner, repo, secretname);
  // waitForRepositorySecretAdded(owner, repo, secretname);
  tryToAddExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
  deleteRepoSecret(owner, repo, secretname);
  tryToDeleteANonExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretDoesNotExist(owner, repo, secretname);
});

// Story: crud:RepositorySecret:nondet:negative:dup-add
bthread("crud:RepositorySecret:nondet:negative:dup-add", function () {
  let owner = 406;
  let repo = "repo_406";
  let secretname = "secretname_406";
  updateRepoSecret(owner, repo, secretname);
  // waitForRepositorySecretAdded(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
  tryToAddExistingRepositorySecret(owner, repo, secretname);
  verifyRepositorySecretExists(owner, repo, secretname);
});

// Story: crud:UserSecret:nondet:1:1
bthread("crud:UserSecret:nondet:1:1", function () {
  let secretname = 410;
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
  let secretname = 411;
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
  let secretname = 416;
  updateUserSecret(secretname);
  // waitForUserSecretAdded(secretname);
  verifyUserSecretExists(secretname);
  tryToAddExistingUserSecret(secretname);
  verifyUserSecretExists(secretname);
});

// Story: crud:UserVariable:nondet:1:1
bthread("crud:UserVariable:nondet:1:1", function () {
  let variablename = 420;
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
  let variablename = 421;
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
  let variablename = 426;
  createUserVariable(variablename);
  // waitForUserVariableAdded(variablename);
  verifyUserVariableExists(variablename);
  tryToAddExistingUserVariable(variablename);
  verifyUserVariableExists(variablename);
});

// Story: crud:OAuth2Application:nondet:1:1
bthread("crud:OAuth2Application:nondet:1:1", function () {
  let id = 430;
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
  let id = 431;
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
  let id = 436;
  userCreateOAuth2Application(id);
  // waitForOAuth2ApplicationAdded(id);
  verifyOAuth2ApplicationExists(id);
  tryToAddExistingOAuth2Application(id);
  verifyOAuth2ApplicationExists(id);
});

// Story: crud:UserBlock:nondet:1:1
bthread("crud:UserBlock:nondet:1:1", function () {
  let username = 450;
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
  let username = 451;
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
  let username = 456;
  userBlockUser(username);
  // waitForUserBlockAdded(username);
  verifyUserBlockExists(username);
  tryToAddExistingUserBlock(username);
  verifyUserBlockExists(username);
});

// Story: crud:UserEmail:nondet:1:1
bthread("crud:UserEmail:nondet:1:1", function () {

  userAddEmail();
  // waitForUserEmailAdded();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  userDeleteEmail();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:1:2
bthread("crud:UserEmail:nondet:1:2", function () {

  userAddEmail();
  // waitForUserEmailAdded();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
  userDeleteEmail();
  tryToDeleteANonExistingUserEmail();
  verifyUserEmailDoesNotExist();
});

// Story: crud:UserEmail:nondet:negative:dup-add
bthread("crud:UserEmail:nondet:negative:dup-add", function () {

  userAddEmail();
  // waitForUserEmailAdded();
  verifyUserEmailExists();
  tryToAddExistingUserEmail();
  verifyUserEmailExists();
});

// Story: crud:UserFollower:read_only
bthread("crud:UserFollower:read_only", function () {
  let username = 470;
  verifyUserFollowerExists(username);
});

// Story: crud:UserFollowing:nondet:1:1
bthread("crud:UserFollowing:nondet:1:1", function () {
  let username = 480;
  userCurrentPutFollow(username);
  // waitForUserFollowingAdded(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
  userCurrentDeleteFollow(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:nondet:1:2
bthread("crud:UserFollowing:nondet:1:2", function () {
  let username = 481;
  userCurrentPutFollow(username);
  // waitForUserFollowingAdded(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
  userCurrentDeleteFollow(username);
  tryToDeleteANonExistingUserFollowing(username);
  verifyUserFollowingDoesNotExist(username);
});

// Story: crud:UserFollowing:nondet:negative:dup-add
bthread("crud:UserFollowing:nondet:negative:dup-add", function () {
  let username = 486;
  userCurrentPutFollow(username);
  // waitForUserFollowingAdded(username);
  verifyUserFollowingExists(username);
  tryToAddExistingUserFollowing(username);
  verifyUserFollowingExists(username);
});

// Story: crud:UserGPGKey:nondet:1:1
bthread("crud:UserGPGKey:nondet:1:1", function () {
  let id = 490;
  userCurrentPostGPGKey(id);
  // waitForUserGPGKeyAdded(id);
  tryToAddExistingUserGPGKey(id);
  verifyUserGPGKeyExists(id);
  userCurrentDeleteGPGKey(id);
  tryToDeleteANonExistingUserGPGKey(id);
  verifyUserGPGKeyDoesNotExist(id);
});

// Story: crud:UserGPGKey:nondet:1:2
bthread("crud:UserGPGKey:nondet:1:2", function () {
  let id = 491;
  userCurrentPostGPGKey(id);
  // waitForUserGPGKeyAdded(id);
  tryToAddExistingUserGPGKey(id);
  verifyUserGPGKeyExists(id);
  userCurrentDeleteGPGKey(id);
  tryToDeleteANonExistingUserGPGKey(id);
  verifyUserGPGKeyDoesNotExist(id);
});

// Story: crud:UserGPGKey:nondet:negative:dup-add
bthread("crud:UserGPGKey:nondet:negative:dup-add", function () {
  let id = 496;
  userCurrentPostGPGKey(id);
  // waitForUserGPGKeyAdded(id);
  verifyUserGPGKeyExists(id);
  tryToAddExistingUserGPGKey(id);
  verifyUserGPGKeyExists(id);
});

// Story: crud:UserHook:nondet:1:1
bthread("crud:UserHook:nondet:1:1", function () {
  let id = 500;
  userCreateHook(id);
  // waitForUserHookAdded(id);
  tryToAddExistingUserHook(id);
  verifyUserHookExists(id);
  userEditHook(id);
  userDeleteHook(id);
  tryToDeleteANonExistingUserHook(id);
  verifyUserHookDoesNotExist(id);
});

// Story: crud:UserHook:nondet:1:2
bthread("crud:UserHook:nondet:1:2", function () {
  let id = 501;
  userCreateHook(id);
  // waitForUserHookAdded(id);
  tryToAddExistingUserHook(id);
  userEditHook(id);
  verifyUserHookExists(id);
  userDeleteHook(id);
  tryToDeleteANonExistingUserHook(id);
  verifyUserHookDoesNotExist(id);
});

// Story: crud:UserHook:nondet:negative:dup-add
bthread("crud:UserHook:nondet:negative:dup-add", function () {
  let id = 506;
  userCreateHook(id);
  // waitForUserHookAdded(id);
  verifyUserHookExists(id);
  tryToAddExistingUserHook(id);
  verifyUserHookExists(id);
});

// Story: crud:UserKey:nondet:1:1
bthread("crud:UserKey:nondet:1:1", function () {
  let id = 510;
  userCurrentPostKey(id);
  // waitForUserKeyAdded(id);
  tryToAddExistingUserKey(id);
  verifyUserKeyExists(id);
  userCurrentDeleteKey(id);
  tryToDeleteANonExistingUserKey(id);
  verifyUserKeyDoesNotExist(id);
});

// Story: crud:UserKey:nondet:1:2
bthread("crud:UserKey:nondet:1:2", function () {
  let id = 511;
  userCurrentPostKey(id);
  // waitForUserKeyAdded(id);
  tryToAddExistingUserKey(id);
  verifyUserKeyExists(id);
  userCurrentDeleteKey(id);
  tryToDeleteANonExistingUserKey(id);
  verifyUserKeyDoesNotExist(id);
});

// Story: crud:UserKey:nondet:negative:dup-add
bthread("crud:UserKey:nondet:negative:dup-add", function () {
  let id = 516;
  userCurrentPostKey(id);
  // waitForUserKeyAdded(id);
  verifyUserKeyExists(id);
  tryToAddExistingUserKey(id);
  verifyUserKeyExists(id);
});

// Story: crud:UserToken:nondet:1:1
bthread("crud:UserToken:nondet:1:1", function () {
  let token = "token_520";
  let username = 520;
  userCreateToken(token, username);
  // waitForUserTokenAdded(token, username);
  tryToAddExistingUserToken(token, username);
  verifyUserTokenExists(token, username);
  userDeleteAccessToken(token, username);
  tryToDeleteANonExistingUserToken(token, username);
  verifyUserTokenDoesNotExist(token, username);
});

// Story: crud:UserToken:nondet:1:2
bthread("crud:UserToken:nondet:1:2", function () {
  let token = "token_521";
  let username = 521;
  userCreateToken(token, username);
  // waitForUserTokenAdded(token, username);
  tryToAddExistingUserToken(token, username);
  verifyUserTokenExists(token, username);
  userDeleteAccessToken(token, username);
  tryToDeleteANonExistingUserToken(token, username);
  verifyUserTokenDoesNotExist(token, username);
});

// Story: crud:UserToken:nondet:negative:dup-add
bthread("crud:UserToken:nondet:negative:dup-add", function () {
  let token = "token_526";
  let username = 526;
  userCreateToken(token, username);
  // waitForUserTokenAdded(token, username);
  verifyUserTokenExists(token, username);
  tryToAddExistingUserToken(token, username);
  verifyUserTokenExists(token, username);
});

// Story: crud:UserSettings:read_only
bthread("crud:UserSettings:read_only", function () {

  verifyUserSettingsExists();
});

// Story: crud:UserStar:nondet:1:1
bthread("crud:UserStar:nondet:1:1", function () {
  let owner = 540;
  let repo = "repo_540";
  userCurrentPutStar(owner, repo);
  // waitForUserStarAdded(owner, repo);
  tryToAddExistingUserStar(owner, repo);
  verifyUserStarExists(owner, repo);
  userCurrentDeleteStar(owner, repo);
  tryToDeleteANonExistingUserStar(owner, repo);
  verifyUserStarDoesNotExist(owner, repo);
});

// Story: crud:UserStar:nondet:1:2
bthread("crud:UserStar:nondet:1:2", function () {
  let owner = 541;
  let repo = "repo_541";
  userCurrentPutStar(owner, repo);
  // waitForUserStarAdded(owner, repo);
  tryToAddExistingUserStar(owner, repo);
  verifyUserStarExists(owner, repo);
  userCurrentDeleteStar(owner, repo);
  tryToDeleteANonExistingUserStar(owner, repo);
  verifyUserStarDoesNotExist(owner, repo);
});

// Story: crud:UserStar:nondet:negative:dup-add
bthread("crud:UserStar:nondet:negative:dup-add", function () {
  let owner = 546;
  let repo = "repo_546";
  userCurrentPutStar(owner, repo);
  // waitForUserStarAdded(owner, repo);
  verifyUserStarExists(owner, repo);
  tryToAddExistingUserStar(owner, repo);
  verifyUserStarExists(owner, repo);
});

// Story: crud:Issue:nondet:1:1
bthread("crud:Issue:nondet:1:1", function () {
  let index = "index_550";
  let owner = 550;
  let repo = "repo_550";
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
  let index = "index_551";
  let owner = 551;
  let repo = "repo_551";
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
  let index = "index_556";
  let owner = 556;
  let repo = "repo_556";
  createIssue(index, owner, repo);
  // waitForIssueAdded(index, owner, repo);
  verifyIssueExists(index, owner, repo);
  tryToAddExistingIssue(index, owner, repo);
  verifyIssueExists(index, owner, repo);
});

// Story: crud:IssueComment:nondet:1:1
bthread("crud:IssueComment:nondet:1:1", function () {
  let id = 560;
  let index = "index_560";
  let owner = 560;
  let repo = "repo_560";
  createComment(id, index, owner, repo);
  // waitForIssueCommentAdded(id, index, owner, repo);
  tryToAddExistingIssueComment(id, index, owner, repo);
  verifyIssueCommentExists(id, index, owner, repo);
  editComment(id, index, owner, repo);
  deleteComment(id, index, owner, repo);
  tryToDeleteANonExistingIssueComment(id, index, owner, repo);
  verifyIssueCommentDoesNotExist(id, index, owner, repo);
});

// Story: crud:IssueComment:nondet:1:2
bthread("crud:IssueComment:nondet:1:2", function () {
  let id = 561;
  let index = "index_561";
  let owner = 561;
  let repo = "repo_561";
  createComment(id, index, owner, repo);
  // waitForIssueCommentAdded(id, index, owner, repo);
  tryToAddExistingIssueComment(id, index, owner, repo);
  editComment(id, index, owner, repo);
  verifyIssueCommentExists(id, index, owner, repo);
  deleteComment(id, index, owner, repo);
  tryToDeleteANonExistingIssueComment(id, index, owner, repo);
  verifyIssueCommentDoesNotExist(id, index, owner, repo);
});

// Story: crud:IssueComment:nondet:negative:dup-add
bthread("crud:IssueComment:nondet:negative:dup-add", function () {
  let id = 566;
  let index = "index_566";
  let owner = 566;
  let repo = "repo_566";
  createComment(id, index, owner, repo);
  // waitForIssueCommentAdded(id, index, owner, repo);
  verifyIssueCommentExists(id, index, owner, repo);
  tryToAddExistingIssueComment(id, index, owner, repo);
  verifyIssueCommentExists(id, index, owner, repo);
});

// Story: crud:IssueCommentAttachment:nondet:1:1
bthread("crud:IssueCommentAttachment:nondet:1:1", function () {
  let attachment_id = 570;
  let id = 570;
  let name = "name_570";
  let owner = 570;
  let repo = "repo_570";
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
  let attachment_id = 571;
  let id = 571;
  let name = "name_571";
  let owner = 571;
  let repo = "repo_571";
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
  let attachment_id = 576;
  let id = 576;
  let name = "name_576";
  let owner = 576;
  let repo = "repo_576";
  createIssueCommentAttachment(attachment_id, id, name, owner, repo);
  // waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
  tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo);
  verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo);
});

// Story: crud:IssueAttachment:nondet:1:1
bthread("crud:IssueAttachment:nondet:1:1", function () {
  let attachment_id = 580;
  let index = "index_580";
  let name = "name_580";
  let owner = 580;
  let repo = "repo_580";
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
  let attachment_id = 581;
  let index = "index_581";
  let name = "name_581";
  let owner = 581;
  let repo = "repo_581";
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
  let attachment_id = 586;
  let index = "index_586";
  let name = "name_586";
  let owner = 586;
  let repo = "repo_586";
  createIssueAttachment(attachment_id, index, name, owner, repo);
  // waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
  tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo);
  verifyIssueAttachmentExists(attachment_id, index, name, owner, repo);
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let id = 590;
  let org = 590;
  createLabel(id, org);
  // waitForLabelAdded(id, org);
  tryToAddExistingLabel(id, org);
  verifyLabelExists(id, org);
  editLabel(id, org);
  deleteLabel(id, org);
  tryToDeleteANonExistingLabel(id, org);
  verifyLabelDoesNotExist(id, org);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let id = 591;
  let org = 591;
  createLabel(id, org);
  // waitForLabelAdded(id, org);
  tryToAddExistingLabel(id, org);
  editLabel(id, org);
  verifyLabelExists(id, org);
  deleteLabel(id, org);
  tryToDeleteANonExistingLabel(id, org);
  verifyLabelDoesNotExist(id, org);
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let id = 596;
  let org = 596;
  createLabel(id, org);
  // waitForLabelAdded(id, org);
  verifyLabelExists(id, org);
  tryToAddExistingLabel(id, org);
  verifyLabelExists(id, org);
});

// Story: crud:Milestone:nondet:1:1
bthread("crud:Milestone:nondet:1:1", function () {
  let id = 600;
  let owner = 600;
  let repo = "repo_600";
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
  let id = 601;
  let owner = 601;
  let repo = "repo_601";
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
  let id = 606;
  let owner = 606;
  let repo = "repo_606";
  createMilestone(id, owner, repo);
  // waitForMilestoneAdded(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
  tryToAddExistingMilestone(id, owner, repo);
  verifyMilestoneExists(id, owner, repo);
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let org = "org_610";
  let username = 610;
  adminCreateOrg(org, username);
  // waitForOrganizationAdded(org, username);
  tryToAddExistingOrganization(org, username);
  verifyOrganizationExists(org, username);
  editOrganization(org, username);
  deleteOrganization(org, username);
  tryToDeleteANonExistingOrganization(org, username);
  verifyOrganizationDoesNotExist(org, username);
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let org = "org_611";
  let username = 611;
  adminCreateOrg(org, username);
  // waitForOrganizationAdded(org, username);
  tryToAddExistingOrganization(org, username);
  editOrganization(org, username);
  verifyOrganizationExists(org, username);
  deleteOrganization(org, username);
  tryToDeleteANonExistingOrganization(org, username);
  verifyOrganizationDoesNotExist(org, username);
});

// Story: crud:Organization:nondet:negative:dup-add
bthread("crud:Organization:nondet:negative:dup-add", function () {
  let org = "org_616";
  let username = 616;
  adminCreateOrg(org, username);
  // waitForOrganizationAdded(org, username);
  verifyOrganizationExists(org, username);
  tryToAddExistingOrganization(org, username);
  verifyOrganizationExists(org, username);
});

// Story: crud:Team:nondet:1:1
bthread("crud:Team:nondet:1:1", function () {
  let id = 620;
  let org = 620;
  createTeam(id, org);
  // waitForTeamAdded(id, org);
  tryToAddExistingTeam(id, org);
  verifyTeamExists(id, org);
  editTeam(id, org);
  deleteTeam(id, org);
  tryToDeleteANonExistingTeam(id, org);
  verifyTeamDoesNotExist(id, org);
});

// Story: crud:Team:nondet:1:2
bthread("crud:Team:nondet:1:2", function () {
  let id = 621;
  let org = 621;
  createTeam(id, org);
  // waitForTeamAdded(id, org);
  tryToAddExistingTeam(id, org);
  editTeam(id, org);
  verifyTeamExists(id, org);
  deleteTeam(id, org);
  tryToDeleteANonExistingTeam(id, org);
  verifyTeamDoesNotExist(id, org);
});

// Story: crud:Team:nondet:negative:dup-add
bthread("crud:Team:nondet:negative:dup-add", function () {
  let id = 626;
  let org = 626;
  createTeam(id, org);
  // waitForTeamAdded(id, org);
  verifyTeamExists(id, org);
  tryToAddExistingTeam(id, org);
  verifyTeamExists(id, org);
});

// Story: crud:Hook:nondet:1:1
bthread("crud:Hook:nondet:1:1", function () {
  let id = 630;
  adminCreateHook(id);
  // waitForHookAdded(id);
  tryToAddExistingHook(id);
  verifyHookExists(id);
  adminEditHook(id);
  adminDeleteHook(id);
  tryToDeleteANonExistingHook(id);
  verifyHookDoesNotExist(id);
});

// Story: crud:Hook:nondet:1:2
bthread("crud:Hook:nondet:1:2", function () {
  let id = 631;
  adminCreateHook(id);
  // waitForHookAdded(id);
  tryToAddExistingHook(id);
  adminEditHook(id);
  verifyHookExists(id);
  adminDeleteHook(id);
  tryToDeleteANonExistingHook(id);
  verifyHookDoesNotExist(id);
});

// Story: crud:Hook:nondet:negative:dup-add
bthread("crud:Hook:nondet:negative:dup-add", function () {
  let id = 636;
  adminCreateHook(id);
  // waitForHookAdded(id);
  verifyHookExists(id);
  tryToAddExistingHook(id);
  verifyHookExists(id);
});

// Story: crud:Secret:nondet:1:1
bthread("crud:Secret:nondet:1:1", function () {
  let org = 640;
  let secretname = "secretname_640";
  updateOrgSecret(org, secretname);
  // waitForSecretAdded(org, secretname);
  tryToAddExistingSecret(org, secretname);
  verifySecretExists(org, secretname);
  deleteOrgSecret(org, secretname);
  tryToDeleteANonExistingSecret(org, secretname);
  verifySecretDoesNotExist(org, secretname);
});

// Story: crud:Secret:nondet:1:2
bthread("crud:Secret:nondet:1:2", function () {
  let org = 641;
  let secretname = "secretname_641";
  updateOrgSecret(org, secretname);
  // waitForSecretAdded(org, secretname);
  tryToAddExistingSecret(org, secretname);
  verifySecretExists(org, secretname);
  deleteOrgSecret(org, secretname);
  tryToDeleteANonExistingSecret(org, secretname);
  verifySecretDoesNotExist(org, secretname);
});

// Story: crud:Secret:nondet:negative:dup-add
bthread("crud:Secret:nondet:negative:dup-add", function () {
  let org = 646;
  let secretname = "secretname_646";
  updateOrgSecret(org, secretname);
  // waitForSecretAdded(org, secretname);
  verifySecretExists(org, secretname);
  tryToAddExistingSecret(org, secretname);
  verifySecretExists(org, secretname);
});

// Story: crud:Variable:nondet:1:1
bthread("crud:Variable:nondet:1:1", function () {
  let org = 650;
  let variablename = "variablename_650";
  createOrgVariable(org, variablename);
  // waitForVariableAdded(org, variablename);
  tryToAddExistingVariable(org, variablename);
  verifyVariableExists(org, variablename);
  updateOrgVariable(org, variablename);
  deleteOrgVariable(org, variablename);
  tryToDeleteANonExistingVariable(org, variablename);
  verifyVariableDoesNotExist(org, variablename);
});

// Story: crud:Variable:nondet:1:2
bthread("crud:Variable:nondet:1:2", function () {
  let org = 651;
  let variablename = "variablename_651";
  createOrgVariable(org, variablename);
  // waitForVariableAdded(org, variablename);
  tryToAddExistingVariable(org, variablename);
  updateOrgVariable(org, variablename);
  verifyVariableExists(org, variablename);
  deleteOrgVariable(org, variablename);
  tryToDeleteANonExistingVariable(org, variablename);
  verifyVariableDoesNotExist(org, variablename);
});

// Story: crud:Variable:nondet:negative:dup-add
bthread("crud:Variable:nondet:negative:dup-add", function () {
  let org = 656;
  let variablename = "variablename_656";
  createOrgVariable(org, variablename);
  // waitForVariableAdded(org, variablename);
  verifyVariableExists(org, variablename);
  tryToAddExistingVariable(org, variablename);
  verifyVariableExists(org, variablename);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let org = 660;
  let username = "username_660";
  verifyMemberExists(org, username);
});

// Story: crud:PublicMember:nondet:1:1
bthread("crud:PublicMember:nondet:1:1", function () {
  let org = 670;
  let username = "username_670";
  orgPublicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  orgConcealMember(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:1:2
bthread("crud:PublicMember:nondet:1:2", function () {
  let org = 671;
  let username = "username_671";
  orgPublicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
  orgConcealMember(org, username);
  tryToDeleteANonExistingPublicMember(org, username);
  verifyPublicMemberDoesNotExist(org, username);
});

// Story: crud:PublicMember:nondet:negative:dup-add
bthread("crud:PublicMember:nondet:negative:dup-add", function () {
  let org = 676;
  let username = "username_676";
  orgPublicizeMember(org, username);
  // waitForPublicMemberAdded(org, username);
  verifyPublicMemberExists(org, username);
  tryToAddExistingPublicMember(org, username);
  verifyPublicMemberExists(org, username);
});

// Story: crud:Block:nondet:1:1
bthread("crud:Block:nondet:1:1", function () {
  let org = 680;
  let username = "username_680";
  organizationBlockUser(org, username);
  // waitForBlockAdded(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
  organizationUnblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:nondet:1:2
bthread("crud:Block:nondet:1:2", function () {
  let org = 681;
  let username = "username_681";
  organizationBlockUser(org, username);
  // waitForBlockAdded(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
  organizationUnblockUser(org, username);
  tryToDeleteANonExistingBlock(org, username);
  verifyBlockDoesNotExist(org, username);
});

// Story: crud:Block:nondet:negative:dup-add
bthread("crud:Block:nondet:negative:dup-add", function () {
  let org = 686;
  let username = "username_686";
  organizationBlockUser(org, username);
  // waitForBlockAdded(org, username);
  verifyBlockExists(org, username);
  tryToAddExistingBlock(org, username);
  verifyBlockExists(org, username);
});

// Story: crud:TeamMember:nondet:1:1
bthread("crud:TeamMember:nondet:1:1", function () {
  let id = 690;
  let username = "username_690";
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
  let id = 691;
  let username = "username_691";
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
  let id = 696;
  let username = "username_696";
  orgAddTeamMember(id, username);
  // waitForTeamMemberAdded(id, username);
  verifyTeamMemberExists(id, username);
  tryToAddExistingTeamMember(id, username);
  verifyTeamMemberExists(id, username);
});

// Story: crud:TeamRepository:nondet:1:1
bthread("crud:TeamRepository:nondet:1:1", function () {
  let id = 700;
  let org = "org_700";
  let repo = "repo_700";
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
  let id = 701;
  let org = "org_701";
  let repo = "repo_701";
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
  let id = 706;
  let org = "org_706";
  let repo = "repo_706";
  orgAddTeamRepository(id, org, repo);
  // waitForTeamRepositoryAdded(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
  tryToAddExistingTeamRepository(id, org, repo);
  verifyTeamRepositoryExists(id, org, repo);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let username = 710;
  adminCreateUser(username);
  // waitForUserAdded(username);
  tryToAddExistingUser(username);
  verifyUserExists(username);
  adminEditUser(username);
  adminDeleteUser(username);
  tryToDeleteANonExistingUser(username);
  verifyUserDoesNotExist(username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let username = 711;
  adminCreateUser(username);
  // waitForUserAdded(username);
  tryToAddExistingUser(username);
  adminEditUser(username);
  verifyUserExists(username);
  adminDeleteUser(username);
  tryToDeleteANonExistingUser(username);
  verifyUserDoesNotExist(username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let username = 716;
  adminCreateUser(username);
  // waitForUserAdded(username);
  verifyUserExists(username);
  tryToAddExistingUser(username);
  verifyUserExists(username);
});

// Story: crud:UserBadge:nondet:1:1
bthread("crud:UserBadge:nondet:1:1", function () {
  let username = 720;
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
  let username = 721;
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
  let username = 726;
  adminAddUserBadges(username);
  // waitForUserBadgeAdded(username);
  verifyUserBadgeExists(username);
  tryToAddExistingUserBadge(username);
  verifyUserBadgeExists(username);
});

// Story: crud:UserPublicKey:nondet:1:1
bthread("crud:UserPublicKey:nondet:1:1", function () {
  let id = 730;
  let username = 730;
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
  let id = 731;
  let username = 731;
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
  let id = 736;
  let username = 736;
  adminCreatePublicKey(id, username);
  // waitForUserPublicKeyAdded(id, username);
  verifyUserPublicKeyExists(id, username);
  tryToAddExistingUserPublicKey(id, username);
  verifyUserPublicKeyExists(id, username);
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let id = 750;
  let to-status = "to-status_750";
  verifyNotificationExists(id, to-status);
});

// Story: crud:NotificationList:read_only
bthread("crud:NotificationList:read_only", function () {
  let all = "all_760";
  let before = "before_760";
  let last_read_at = "last_read_at_760";
  let limit = "limit_760";
  let page = "page_760";
  let since = "since_760";
  let status-types = "status-types_760";
  let subject-type = "subject-type_760";
  let to-status = "to-status_760";
  verifyNotificationListExists(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status);
});

// Story: crud:NotificationNew:read_only
bthread("crud:NotificationNew:read_only", function () {

  verifyNotificationNewExists();
});

// Story: crud:RepoNotificationList:read_only
bthread("crud:RepoNotificationList:read_only", function () {
  let all = "all_780";
  let before = "before_780";
  let last_read_at = "last_read_at_780";
  let limit = "limit_780";
  let owner = 780;
  let page = "page_780";
  let repo = "repo_780";
  let since = "since_780";
  let status-types = "status-types_780";
  let subject-type = "subject-type_780";
  let to-status = "to-status_780";
  verifyRepoNotificationListExists(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status);
});

// Story: crud:APISettings:read_only
bthread("crud:APISettings:read_only", function () {

  verifyAPISettingsExists();
});

// Story: crud:AttachmentSettings:read_only
bthread("crud:AttachmentSettings:read_only", function () {

  verifyAttachmentSettingsExists();
});

// Story: crud:RepositorySettings:read_only
bthread("crud:RepositorySettings:read_only", function () {

  verifyRepositorySettingsExists();
});

// Story: crud:UISettings:read_only
bthread("crud:UISettings:read_only", function () {

  verifyUISettingsExists();
});

// Story: crud:Package:read_only
bthread("crud:Package:read_only", function () {
  let name = "name_830";
  let owner = 830;
  let type = "type_830";
  let version = "version_830";
  verifyPackageExists(name, owner, type, version);
});

// Story: crud:PackageList:read_only
bthread("crud:PackageList:read_only", function () {
  let limit = "limit_840";
  let owner = 840;
  let page = "page_840";
  let q = "q_840";
  let type = "type_840";
  verifyPackageListExists(limit, owner, page, q, type);
});

// Story: crud:PackageFiles:read_only
bthread("crud:PackageFiles:read_only", function () {
  let name = "name_850";
  let owner = 850;
  let type = "type_850";
  let version = "version_850";
  verifyPackageFilesExists(name, owner, type, version);
});

// Story: crud:Person:read_only
bthread("crud:Person:read_only", function () {

  verifyPersonExists(user-id);
});
