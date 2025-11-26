//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: repository ----

function createRepo(name) {
  var url = "/user/repos";
  var description = "Create repo " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Delete repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Edit repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Get repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepository(name, owner, repo) {
  return createRepo(name);
}

function verifyRepositoryExists(name, owner, repo) {
  return getRepo(owner, repo);
}

function verifyRepositoryDoesNotExist(name, owner, repo) {
  return getRepo(owner, repo);
}

function tryToDeleteANonExistingRepository(name, owner, repo) {
  return deleteRepo(owner, repo);
}

// ---- Entity: repository secret ----

function updateRepoSecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Create or Update secret " + secretname + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoSecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepositorySecret(owner, repo, secretname) {
  return updateRepoSecret(owner, repo, secretname);
}

function tryToDeleteANonExistingRepositorySecret(owner, repo, secretname) {
  return deleteRepoSecret(owner, repo, secretname);
}

// ---- Entity: repository variable ----

function createRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Create repo variable " + variablename + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Delete repo variable " + variablename + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Update repo variable " + variablename + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Get repo variable " + variablename + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepositoryVariable(owner, repo, variablename) {
  return createRepoVariable(owner, repo, variablename);
}

function verifyRepositoryVariableExists(owner, repo, variablename) {
  return getRepoVariable(owner, repo, variablename);
}

function verifyRepositoryVariableDoesNotExist(owner, repo, variablename) {
  return getRepoVariable(owner, repo, variablename);
}

function tryToDeleteANonExistingRepositoryVariable(owner, repo, variablename) {
  return deleteRepoVariable(owner, repo, variablename);
}

// ---- Entity: branch protection ----

function createBranchProtection(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Create branch protection {name} in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBranchProtection(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Delete branch protection " + name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editBranchProtection(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Edit branch protection " + name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBranchProtection(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Get branch protection " + name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBranchProtection(owner, repo, name) {
  return createBranchProtection(owner, repo);
}

function verifyBranchProtectionExists(owner, repo, name) {
  return getBranchProtection(owner, repo, name);
}

function verifyBranchProtectionDoesNotExist(owner, repo, name) {
  return getBranchProtection(owner, repo, name);
}

function tryToDeleteANonExistingBranchProtection(owner, repo, name) {
  return deleteBranchProtection(owner, repo, name);
}

// ---- Entity: branch ----

function createBranch(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Create branch in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Delete branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Update branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Get branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBranch(owner, repo, branch) {
  return createBranch(owner, repo);
}

function verifyBranchExists(owner, repo, branch) {
  return getBranch(owner, repo, branch);
}

function verifyBranchDoesNotExist(owner, repo, branch) {
  return getBranch(owner, repo, branch);
}

function tryToDeleteANonExistingBranch(owner, repo, branch) {
  return deleteBranch(owner, repo, branch);
}

// ---- Entity: collaborator ----

function addCollaborator(owner, repo, collaborator) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Add or Update collaborator " + collaborator + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCollaborator(owner, repo, collaborator) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Delete collaborator " + collaborator + " from repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function checkCollaborator(owner, repo, collaborator) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Check collaborator " + collaborator + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCollaborator(owner, repo, collaborator) {
  return addCollaborator(owner, repo, collaborator);
}

function verifyCollaboratorExists(owner, repo, collaborator) {
  return checkCollaborator(owner, repo, collaborator);
}

function verifyCollaboratorDoesNotExist(owner, repo, collaborator) {
  return checkCollaborator(owner, repo, collaborator);
}

function tryToDeleteANonExistingCollaborator(owner, repo, collaborator) {
  return deleteCollaborator(owner, repo, collaborator);
}

// ---- Entity: hook ----

function createHook() {
  var url = "/admin/hooks";
  var description = "Create a hook";
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Delete a hook " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Update a hook " + id;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Get a hook " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listHooks() {
  var url = "/admin/hooks";
  var description = "List system's webhooks";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingHook(id) {
  return createHook();
}

function verifyHookExists(id) {
  return getHook(id);
}

function verifyHookDoesNotExist(id) {
  return getHook(id);
}

function tryToDeleteANonExistingHook(id) {
  return deleteHook(id);
}

// ---- Entity: git hook ----

function deleteGitHook(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Delete git hook " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editGitHook(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Edit git hook " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getGitHook(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Get git hook " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyGitHookExists(owner, repo, id) {
  return getGitHook(owner, repo, id);
}

function verifyGitHookDoesNotExist(owner, repo, id) {
  return getGitHook(owner, repo, id);
}

function tryToDeleteANonExistingGitHook(owner, repo, id) {
  return deleteGitHook(owner, repo, id);
}

// ---- Entity: key ----

function createKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Add key to repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteKey(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Delete key " + id + " from repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getKey(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Get key " + id + " from repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingKey(owner, repo, id) {
  return createKey(owner, repo);
}

function verifyKeyExists(owner, repo, id) {
  return getKey(owner, repo, id);
}

function verifyKeyDoesNotExist(owner, repo, id) {
  return getKey(owner, repo, id);
}

function tryToDeleteANonExistingKey(owner, repo, id) {
  return deleteKey(owner, repo, id);
}

// ---- Entity: pull request ----

function createPullRequest(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Create pull request in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelScheduledAutoMerge(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Cancel scheduled auto merge for pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editPullRequest(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index;
  var description = "Update pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPullRequest(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index;
  var description = "Get pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function mergePullRequest(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Merge pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePullRequest(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update";
  var description = "Merge PR's baseBranch into headBranch for pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPullRequest(owner, repo, index) {
  return createPullRequest(owner, repo);
}

function verifyPullRequestExists(owner, repo, index) {
  return getPullRequest(owner, repo, index);
}

function verifyPullRequestDoesNotExist(owner, repo, index) {
  return getPullRequest(owner, repo, index);
}

function tryToDeleteANonExistingPullRequest(owner, repo, index) {
  return cancelScheduledAutoMerge(owner, repo, index);
}

// ---- Entity: pull request review ----

function createPullReview(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Create review for pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePullReview(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Delete review " + id + " from pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPullReview(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Get review " + id + " from pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitPullReview(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Submit review " + id + " for pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPullRequestReview(owner, repo, index, id) {
  return createPullReview(owner, repo, index);
}

function verifyPullRequestReviewExists(owner, repo, index, id) {
  return getPullReview(owner, repo, index, id);
}

function verifyPullRequestReviewDoesNotExist(owner, repo, index, id) {
  return getPullReview(owner, repo, index, id);
}

function tryToDeleteANonExistingPullRequestReview(owner, repo, index, id) {
  return deletePullReview(owner, repo, index, id);
}

// ---- Entity: pull request review dismissal ----

function dismissPullReview(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals";
  var description = "Dismiss review " + id + " for pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unDismissPullReview(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals";
  var description = "Cancel dismiss review " + id + " for pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: pull request review comment ----

function getPullReviewComments(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/comments";
  var description = "Get comments for review " + id + " of pull request " + index + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPullRequestReviewCommentExists(owner, repo, index, id) {
  return getPullReviewComments(owner, repo, index, id);
}

function verifyPullRequestReviewCommentDoesNotExist(owner, repo, index, id) {
  return getPullReviewComments(owner, repo, index, id);
}

// ---- Entity: release ----

function createRelease(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Create release in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRelease(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Delete release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editRelease(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Edit release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRelease(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Get release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRelease(owner, repo, id) {
  return createRelease(owner, repo);
}

function verifyReleaseExists(owner, repo, id) {
  return getRelease(owner, repo, id);
}

function verifyReleaseDoesNotExist(owner, repo, id) {
  return getRelease(owner, repo, id);
}

function tryToDeleteANonExistingRelease(owner, repo, id) {
  return deleteRelease(owner, repo, id);
}

// ---- Entity: release attachment ----

function createReleaseAttachment(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Create release attachment for release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteReleaseAttachment(owner, repo, id, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Delete release attachment " + attachment_id + " for release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editReleaseAttachment(owner, repo, id, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Edit release attachment " + attachment_id + " for release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getReleaseAttachment(owner, repo, id, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Get release attachment " + attachment_id + " for release " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingReleaseAttachment(owner, repo, id, attachment_id) {
  return createReleaseAttachment(owner, repo, id);
}

function verifyReleaseAttachmentExists(owner, repo, id, attachment_id) {
  return getReleaseAttachment(owner, repo, id, attachment_id);
}

function verifyReleaseAttachmentDoesNotExist(owner, repo, id, attachment_id) {
  return getReleaseAttachment(owner, repo, id, attachment_id);
}

function tryToDeleteANonExistingReleaseAttachment(owner, repo, id, attachment_id) {
  return deleteReleaseAttachment(owner, repo, id, attachment_id);
}

// ---- Entity: tag protection ----

function createTagProtection(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Create tag protection in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTagProtection(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Delete tag protection " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editTagProtection(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Edit tag protection " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTagProtection(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Get tag protection " + id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTagProtection(owner, repo, id) {
  return createTagProtection(owner, repo);
}

function verifyTagProtectionExists(owner, repo, id) {
  return getTagProtection(owner, repo, id);
}

function verifyTagProtectionDoesNotExist(owner, repo, id) {
  return getTagProtection(owner, repo, id);
}

function tryToDeleteANonExistingTagProtection(owner, repo, id) {
  return deleteTagProtection(owner, repo, id);
}

// ---- Entity: tag ----

function createTag(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Create tag in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Delete tag " + tag + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Get tag " + tag + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTag(owner, repo, tag) {
  return createTag(owner, repo);
}

function verifyTagExists(owner, repo, tag) {
  return getTag(owner, repo, tag);
}

function verifyTagDoesNotExist(owner, repo, tag) {
  return getTag(owner, repo, tag);
}

function tryToDeleteANonExistingTag(owner, repo, tag) {
  return deleteTag(owner, repo, tag);
}

// ---- Entity: wiki page ----

function createWikiPage(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Create wiki page {pageName} in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWikiPage(owner, repo, pageName) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Delete wiki page " + pageName + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editWikiPage(owner, repo, pageName) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Edit wiki page " + pageName + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWikiPage(owner, repo, pageName) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Get wiki page " + pageName + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWikiPage(owner, repo, pageName) {
  return createWikiPage(owner, repo);
}

function verifyWikiPageExists(owner, repo, pageName) {
  return getWikiPage(owner, repo, pageName);
}

function verifyWikiPageDoesNotExist(owner, repo, pageName) {
  return getWikiPage(owner, repo, pageName);
}

function tryToDeleteANonExistingWikiPage(owner, repo, pageName) {
  return deleteWikiPage(owner, repo, pageName);
}

// ---- Entity: file ----

function createFile(owner, repo, filepath) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Create file " + filepath + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFile(owner, repo, filepath) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Delete file " + filepath + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFile(owner, repo, filepath) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Update file " + filepath + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFile(owner, repo, filepath) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Get file " + filepath + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFile(owner, repo, filepath) {
  return createFile(owner, repo, filepath);
}

function verifyFileExists(owner, repo, filepath) {
  return getFile(owner, repo, filepath);
}

function verifyFileDoesNotExist(owner, repo, filepath) {
  return getFile(owner, repo, filepath);
}

function tryToDeleteANonExistingFile(owner, repo, filepath) {
  return deleteFile(owner, repo, filepath);
}

// ---- Entity: push mirror ----

function addPushMirror(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Add push mirror in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePushMirror(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Delete push mirror " + name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPushMirrorByRemoteName(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Get push mirror " + name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPushMirror(owner, repo, name) {
  return addPushMirror(owner, repo);
}

function verifyPushMirrorExists(owner, repo, name) {
  return getPushMirrorByRemoteName(owner, repo, name);
}

function verifyPushMirrorDoesNotExist(owner, repo, name) {
  return getPushMirrorByRemoteName(owner, repo, name);
}

function tryToDeleteANonExistingPushMirror(owner, repo, name) {
  return deletePushMirror(owner, repo, name);
}

// ---- Entity: topic ----

function addTopic(owner, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Add topic " + topic + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTopic(owner, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Delete topic " + topic + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTopics(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "Replace list of topics in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listTopics(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "List topics in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTopic(owner, repo, topic) {
  return addTopic(owner, repo, topic);
}

function verifyTopicExists(owner, repo, topic) {
  return listTopics(owner, repo);
}

function verifyTopicDoesNotExist(owner, repo, topic) {
  return listTopics(owner, repo);
}

function tryToDeleteANonExistingTopic(owner, repo, topic) {
  return deleteTopic(owner, repo, topic);
}

// ---- Entity: team ----

function addTeam(owner, repo, team) {
  var url = "/repos/" + owner + "/" + repo + "/teams/" + team;
  var description = "Add team " + team + " to repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTeam(owner, repo, team) {
  var url = "/repos/" + owner + "/" + repo + "/teams/" + team;
  var description = "Delete team " + team + " from repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function checkTeam(owner, repo, team) {
  var url = "/repos/" + owner + "/" + repo + "/teams/" + team;
  var description = "Check team " + team + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeam(owner, repo, team) {
  return addTeam(owner, repo, team);
}

function verifyTeamExists(owner, repo, team) {
  return checkTeam(owner, repo, team);
}

function verifyTeamDoesNotExist(owner, repo, team) {
  return checkTeam(owner, repo, team);
}

function tryToDeleteANonExistingTeam(owner, repo, team) {
  return deleteTeam(owner, repo, team);
}

// ---- Entity: user secret ----

function updateUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update secret " + secretname;
  var body = {
    "secretname": secretname,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserSecret(secretname) {
  return updateUserSecret(secretname);
}

function tryToDeleteANonExistingUserSecret(secretname) {
  return deleteUserSecret(secretname);
}

// ---- Entity: user variable ----

function createUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Create variable " + variablename;
  var body = {
    "variablename": variablename,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Delete variable " + variablename;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Update variable " + variablename;
  var body = {
    "variablename": variablename,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Get variable " + variablename;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserVariable(variablename) {
  return createUserVariable(variablename);
}

function verifyUserVariableExists(variablename) {
  return getUserVariable(variablename);
}

function verifyUserVariableDoesNotExist(variablename) {
  return getUserVariable(variablename);
}

function tryToDeleteANonExistingUserVariable(variablename) {
  return deleteUserVariable(variablename);
}

// ---- Entity: OAuth2 application ----

function userCreateOAuth2Application() {
  var url = "/user/applications/oauth2";
  var description = "Create OAuth2 application";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userDeleteOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Delete OAuth2 application " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userUpdateOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Update OAuth2 application " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userGetOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Get OAuth2 application " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOAuth2Application(id) {
  return userCreateOAuth2Application();
}

function verifyOAuth2ApplicationExists(id) {
  return userGetOAuth2Application(id);
}

function verifyOAuth2ApplicationDoesNotExist(id) {
  return userGetOAuth2Application(id);
}

function tryToDeleteANonExistingOAuth2Application(id) {
  return userDeleteOAuth2Application(id);
}

// ---- Entity: user avatar ----

function userUpdateAvatar() {
  var url = "/user/avatar";
  var description = "Update avatar";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userDeleteAvatar() {
  var url = "/user/avatar";
  var description = "Delete avatar";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingUserAvatar() {
  return userDeleteAvatar();
}

// ---- Entity: user block ----

function userBlockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Block user " + username;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userUnblockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Unblock user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCheckUserBlock(username) {
  var url = "/user/blocks/" + username;
  var description = "Check block status of user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserBlock(username) {
  return userBlockUser(username);
}

function verifyUserBlockExists(username) {
  return userCheckUserBlock(username);
}

function verifyUserBlockDoesNotExist(username) {
  return userCheckUserBlock(username);
}

function tryToDeleteANonExistingUserBlock(username) {
  return userUnblockUser(username);
}

// ---- Entity: user email ----

function userAddEmail() {
  var url = "/user/emails";
  var description = "Add email addresses";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userDeleteEmail() {
  var url = "/user/emails";
  var description = "Delete email addresses";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userListEmails() {
  var url = "/user/emails";
  var description = "List email addresses";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserEmail() {
  return userAddEmail();
}

function verifyUserEmailExists() {
  return userListEmails();
}

function verifyUserEmailDoesNotExist() {
  return userListEmails();
}

function tryToDeleteANonExistingUserEmail() {
  return userDeleteEmail();
}

// ---- Entity: user block list ----

function userListBlocks() {
  var url = "/user/blocks";
  var description = "List blocked users";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserBlockListExists() {
  return userListBlocks();
}

function verifyUserBlockListDoesNotExist() {
  return userListBlocks();
}

// ---- Entity: user follower ----

function userListFollowers(username) {
  var url = "/users/" + username + "/followers";
  var description = "List followers of user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserFollowerExists(username) {
  return userListFollowers(username);
}

function verifyUserFollowerDoesNotExist(username) {
  return userListFollowers(username);
}

// ---- Entity: user following ----

function userListFollowing(username) {
  var url = "/users/" + username + "/following";
  var description = "List users followed by " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserFollowingExists(username) {
  return userListFollowing(username);
}

function verifyUserFollowingDoesNotExist(username) {
  return userListFollowing(username);
}

// ---- Entity: user following relation ----

function userCheckFollowing(username, target) {
  var url = "/users/" + username + "/following/" + target;
  var description = "Check if " + username + " is following " + target;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserFollowingRelationExists(username, target) {
  return userCheckFollowing(username, target);
}

function verifyUserFollowingRelationDoesNotExist(username, target) {
  return userCheckFollowing(username, target);
}

// ---- Entity: user follow ----

function userCurrentPutFollow(username) {
  var url = "/user/following/" + username;
  var description = "Follow user " + username;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentDeleteFollow(username) {
  var url = "/user/following/" + username;
  var description = "Unfollow user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentCheckFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Check if following user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserFollow(username) {
  return userCurrentPutFollow(username);
}

function verifyUserFollowExists(username) {
  return userCurrentCheckFollowing(username);
}

function verifyUserFollowDoesNotExist(username) {
  return userCurrentCheckFollowing(username);
}

function tryToDeleteANonExistingUserFollow(username) {
  return userCurrentDeleteFollow(username);
}

// ---- Entity: user GPG key ----

function userCurrentPostGPGKey() {
  var url = "/user/gpg_keys";
  var description = "Create GPG key";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentDeleteGPGKey(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Delete GPG key " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentGetGPGKey(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Get GPG key " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserGPGKey(id) {
  return userCurrentPostGPGKey();
}

function verifyUserGPGKeyExists(id) {
  return userCurrentGetGPGKey(id);
}

function verifyUserGPGKeyDoesNotExist(id) {
  return userCurrentGetGPGKey(id);
}

function tryToDeleteANonExistingUserGPGKey(id) {
  return userCurrentDeleteGPGKey(id);
}

// ---- Entity: user GPG key list ----

function userCurrentListGPGKeys() {
  var url = "/user/gpg_keys";
  var description = "List GPG keys";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserGPGKeyListExists() {
  return userCurrentListGPGKeys();
}

function verifyUserGPGKeyListDoesNotExist() {
  return userCurrentListGPGKeys();
}

// ---- Entity: user hook ----

function userCreateHook() {
  var url = "/user/hooks";
  var description = "Create hook";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userDeleteHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Delete hook " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userEditHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Update hook " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userGetHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Get hook " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserHook(id) {
  return userCreateHook();
}

function verifyUserHookExists(id) {
  return userGetHook(id);
}

function verifyUserHookDoesNotExist(id) {
  return userGetHook(id);
}

function tryToDeleteANonExistingUserHook(id) {
  return userDeleteHook(id);
}

// ---- Entity: user public key ----

function userCurrentPostKey() {
  var url = "/user/keys";
  var description = "Create public key";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentDeleteKey(id) {
  var url = "/user/keys/" + id;
  var description = "Delete public key " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentGetKey(id) {
  var url = "/user/keys/" + id;
  var description = "Get public key " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserKey(id) {
  return userCurrentPostKey();
}

function verifyUserKeyExists(id) {
  return userCurrentGetKey(id);
}

function verifyUserKeyDoesNotExist(id) {
  return userCurrentGetKey(id);
}

function tryToDeleteANonExistingUserKey(id) {
  return userCurrentDeleteKey(id);
}

// ---- Entity: user public key list ----

function userCurrentListKeys() {
  var url = "/user/keys";
  var description = "List public keys";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserKeyListExists() {
  return userCurrentListKeys();
}

function verifyUserKeyListDoesNotExist() {
  return userCurrentListKeys();
}

// ---- Entity: user repository ----

function userCurrentListRepos() {
  var url = "/user/repos";
  var description = "List user repositories";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserRepoExists() {
  return userCurrentListRepos();
}

function verifyUserRepoDoesNotExist() {
  return userCurrentListRepos();
}

// ---- Entity: user settings ----

function getUserSettings() {
  var url = "/user/settings";
  var description = "Get user settings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUserSettings() {
  var url = "/user/settings";
  var description = "Update user settings";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserSettingsExists() {
  return getUserSettings();
}

function verifyUserSettingsDoesNotExist() {
  return getUserSettings();
}

// ---- Entity: user starred repository ----

function userCurrentPutStar(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentDeleteStar(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userCurrentCheckStarring(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Check starring repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserStar(owner, repo) {
  return userCurrentPutStar(owner, repo);
}

function verifyUserStarExists(owner, repo) {
  return userCurrentCheckStarring(owner, repo);
}

function verifyUserStarDoesNotExist(owner, repo) {
  return userCurrentCheckStarring(owner, repo);
}

function tryToDeleteANonExistingUserStar(owner, repo) {
  return userCurrentDeleteStar(owner, repo);
}

// ---- Entity: user stopwatch ----

function userGetStopWatches() {
  var url = "/user/stopwatches";
  var description = "List stopwatches";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserStopwatchExists() {
  return userGetStopWatches();
}

function verifyUserStopwatchDoesNotExist() {
  return userGetStopWatches();
}

// ---- Entity: user subscription ----

function userCurrentListSubscriptions() {
  var url = "/user/subscriptions";
  var description = "List user subscriptions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserSubscriptionExists() {
  return userCurrentListSubscriptions();
}

function verifyUserSubscriptionDoesNotExist() {
  return userCurrentListSubscriptions();
}

// ---- Entity: user team ----

function userListTeams() {
  var url = "/user/teams";
  var description = "List user teams";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserTeamExists() {
  return userListTeams();
}

function verifyUserTeamDoesNotExist() {
  return userListTeams();
}

// ---- Entity: user tracked time ----

function userCurrentTrackedTimes() {
  var url = "/user/times";
  var description = "List tracked times";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserTrackedTimeExists() {
  return userCurrentTrackedTimes();
}

function verifyUserTrackedTimeDoesNotExist() {
  return userCurrentTrackedTimes();
}

// ---- Entity: user access token ----

function userCreateToken(username) {
  var url = "/users/" + username + "/tokens";
  var description = "Create access token for user " + username;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userDeleteAccessToken(username, token) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Delete access token " + token + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function userGetTokens(username) {
  var url = "/users/" + username + "/tokens";
  var description = "List access tokens for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserToken(username, token) {
  return userCreateToken(username);
}

function verifyUserTokenExists(username, token) {
  return userGetTokens(username);
}

function verifyUserTokenDoesNotExist(username, token) {
  return userGetTokens(username);
}

function tryToDeleteANonExistingUserToken(username, token) {
  return userDeleteAccessToken(username, token);
}

// ---- Entity: issue ----

function issueCreateIssue(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create issue in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDelete(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Delete issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueEditIssue(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Edit issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetIssue(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Get issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssue(owner, repo, index) {
  return issueCreateIssue(owner, repo);
}

function verifyIssueExists(owner, repo, index) {
  return issueGetIssue(owner, repo, index);
}

function verifyIssueDoesNotExist(owner, repo, index) {
  return issueGetIssue(owner, repo, index);
}

function tryToDeleteANonExistingIssue(owner, repo, index) {
  return issueDelete(owner, repo, index);
}

// ---- Entity: issue comment ----

function issueCreateComment(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Add comment to issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteComment(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Delete comment " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueEditComment(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Edit comment " + id + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetComment(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Get comment " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueComment(owner, repo, index, id) {
  return issueCreateComment(owner, repo, index);
}

function verifyIssueCommentExists(owner, repo, index, id) {
  return issueGetComment(owner, repo, id);
}

function verifyIssueCommentDoesNotExist(owner, repo, index, id) {
  return issueGetComment(owner, repo, id);
}

function tryToDeleteANonExistingIssueComment(owner, repo, index, id) {
  return issueDeleteComment(owner, repo, id);
}

// ---- Entity: issue comment attachment ----

function issueCreateIssueCommentAttachment(owner, repo, id, name) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Create attachment for comment " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Delete attachment " + attachment_id + " of comment " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueEditIssueCommentAttachment(owner, repo, id, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Edit attachment " + attachment_id + " of comment " + id + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetIssueCommentAttachment(owner, repo, id, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Get attachment " + attachment_id + " of comment " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueCommentAttachment(owner, repo, id, name, attachment_id) {
  return issueCreateIssueCommentAttachment(owner, repo, id, name);
}

function verifyIssueCommentAttachmentExists(owner, repo, id, name, attachment_id) {
  return issueGetIssueCommentAttachment(owner, repo, id, attachment_id);
}

function verifyIssueCommentAttachmentDoesNotExist(owner, repo, id, name, attachment_id) {
  return issueGetIssueCommentAttachment(owner, repo, id, attachment_id);
}

function tryToDeleteANonExistingIssueCommentAttachment(owner, repo, id, name, attachment_id) {
  return issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id);
}

// ---- Entity: issue comment reaction ----

function issuePostCommentReaction(owner, repo, id, content) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Add reaction to comment " + id + " in " + repo + " of " + owner;
  var body = {
    "content": content,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteCommentReaction(owner, repo, id, content) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Remove reaction from comment " + id + " in " + repo + " of " + owner;
  var body = {
    "content": content,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetCommentReactions(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Get reactions of comment " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueCommentReaction(owner, repo, id, content) {
  return issuePostCommentReaction(owner, repo, id, content);
}

function verifyIssueCommentReactionExists(owner, repo, id, content) {
  return issueGetCommentReactions(owner, repo, id);
}

function verifyIssueCommentReactionDoesNotExist(owner, repo, id, content) {
  return issueGetCommentReactions(owner, repo, id);
}

function tryToDeleteANonExistingIssueCommentReaction(owner, repo, id, content) {
  return issueDeleteCommentReaction(owner, repo, id, content);
}

// ---- Entity: issue attachment ----

function issueCreateIssueAttachment(owner, repo, index, name) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Create attachment for issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteIssueAttachment(owner, repo, index, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Delete attachment " + attachment_id + " of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueEditIssueAttachment(owner, repo, index, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Edit attachment " + attachment_id + " of issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetIssueAttachment(owner, repo, index, attachment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Get attachment " + attachment_id + " of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueAttachment(owner, repo, index, name, attachment_id) {
  return issueCreateIssueAttachment(owner, repo, index, name);
}

function verifyIssueAttachmentExists(owner, repo, index, name, attachment_id) {
  return issueGetIssueAttachment(owner, repo, index, attachment_id);
}

function verifyIssueAttachmentDoesNotExist(owner, repo, index, name, attachment_id) {
  return issueGetIssueAttachment(owner, repo, index, attachment_id);
}

function tryToDeleteANonExistingIssueAttachment(owner, repo, index, name, attachment_id) {
  return issueDeleteIssueAttachment(owner, repo, index, attachment_id);
}

// ---- Entity: issue reaction ----

function issuePostIssueReaction(owner, repo, index, content) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Add reaction to issue " + index + " in " + repo + " of " + owner;
  var body = {
    "content": content,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteIssueReaction(owner, repo, index, content) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Remove reaction from issue " + index + " in " + repo + " of " + owner;
  var body = {
    "content": content,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetIssueReactions(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Get reactions of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueReaction(owner, repo, index, content) {
  return issuePostIssueReaction(owner, repo, index, content);
}

function verifyIssueReactionExists(owner, repo, index, content) {
  return issueGetIssueReactions(owner, repo, index);
}

function verifyIssueReactionDoesNotExist(owner, repo, index, content) {
  return issueGetIssueReactions(owner, repo, index);
}

function tryToDeleteANonExistingIssueReaction(owner, repo, index, content) {
  return issueDeleteIssueReaction(owner, repo, index, content);
}

// ---- Entity: issue label ----

function issueAddLabel(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Add label to issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueRemoveLabel(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels/" + id;
  var description = "Remove label " + id + " from issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueReplaceLabels(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Replace labels of issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetLabels(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Get labels of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueClearLabels(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Remove all labels from issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueLabel(owner, repo, index, body, id) {
  return issueAddLabel(owner, repo, index, body);
}

function verifyIssueLabelExists(owner, repo, index, body, id) {
  return issueGetLabels(owner, repo, index);
}

function verifyIssueLabelDoesNotExist(owner, repo, index, body, id) {
  return issueGetLabels(owner, repo, index);
}

function tryToDeleteANonExistingIssueLabel(owner, repo, index, body, id) {
  return issueRemoveLabel(owner, repo, index, id);
}

// ---- Entity: label ----

function issueCreateLabel(owner, repo, body) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Create label in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteLabel(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Delete label " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueEditLabel(owner, repo, id, body) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Update label " + id + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetLabel(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Get label " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueListLabels(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "List labels in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLabel(owner, repo, body, id) {
  return issueCreateLabel(owner, repo, body);
}

function verifyLabelExists(owner, repo, body, id) {
  return issueGetLabel(owner, repo, id);
}

function verifyLabelDoesNotExist(owner, repo, body, id) {
  return issueGetLabel(owner, repo, id);
}

function tryToDeleteANonExistingLabel(owner, repo, body, id) {
  return issueDeleteLabel(owner, repo, id);
}

// ---- Entity: milestone ----

function issueCreateMilestone(owner, repo, body) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create milestone in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteMilestone(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Delete milestone " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueEditMilestone(owner, repo, id, body) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Update milestone " + id + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetMilestone(owner, repo, id) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Get milestone " + id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueGetMilestonesList(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "List milestones in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMilestone(owner, repo, body, id) {
  return issueCreateMilestone(owner, repo, body);
}

function verifyMilestoneExists(owner, repo, body, id) {
  return issueGetMilestone(owner, repo, id);
}

function verifyMilestoneDoesNotExist(owner, repo, body, id) {
  return issueGetMilestone(owner, repo, id);
}

function tryToDeleteANonExistingMilestone(owner, repo, body, id) {
  return issueDeleteMilestone(owner, repo, id);
}

// ---- Entity: issue dependency ----

function issueCreateIssueDependencies(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Add dependency to issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueRemoveIssueDependencies(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Remove dependency from issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueListIssueDependencies(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "List dependencies of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueDependency(owner, repo, index, body) {
  return issueCreateIssueDependencies(owner, repo, index, body);
}

function verifyIssueDependencyExists(owner, repo, index, body) {
  return issueListIssueDependencies(owner, repo, index);
}

function verifyIssueDependencyDoesNotExist(owner, repo, index, body) {
  return issueListIssueDependencies(owner, repo, index);
}

function tryToDeleteANonExistingIssueDependency(owner, repo, index, body) {
  return issueRemoveIssueDependencies(owner, repo, index, body);
}

// ---- Entity: issue blocking ----

function issueCreateIssueBlocking(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Block issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueRemoveIssueBlocking(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Unblock issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueListBlocks(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "List issues blocked by issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueBlocking(owner, repo, index, body) {
  return issueCreateIssueBlocking(owner, repo, index, body);
}

function verifyIssueBlockingExists(owner, repo, index, body) {
  return issueListBlocks(owner, repo, index);
}

function verifyIssueBlockingDoesNotExist(owner, repo, index, body) {
  return issueListBlocks(owner, repo, index);
}

function tryToDeleteANonExistingIssueBlocking(owner, repo, index, body) {
  return issueRemoveIssueBlocking(owner, repo, index, body);
}

// ---- Entity: issue subscription ----

function issueAddSubscription(owner, repo, index, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Subscribe user " + user + " to issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteSubscription(owner, repo, index, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Unsubscribe user " + user + " from issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueSubscriptions(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions";
  var description = "Get subscribers of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueCheckSubscription(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/check";
  var description = "Check subscription for issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueSubscription(owner, repo, index, user) {
  return issueAddSubscription(owner, repo, index, user);
}

function verifyIssueSubscriptionExists(owner, repo, index, user) {
  return issueSubscriptions(owner, repo, index);
}

function verifyIssueSubscriptionDoesNotExist(owner, repo, index, user) {
  return issueSubscriptions(owner, repo, index);
}

function tryToDeleteANonExistingIssueSubscription(owner, repo, index, user) {
  return issueDeleteSubscription(owner, repo, index, user);
}

// ---- Entity: issue tracked time ----

function issueAddTime(owner, repo, index, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Add tracked time to issue " + index + " in " + repo + " of " + owner;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueDeleteTime(owner, repo, index, id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var description = "Delete tracked time " + id + " from issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueResetTime(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Reset tracked time of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function issueTrackedTimes(owner, repo, index) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "List tracked times of issue " + index + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueTrackedTime(owner, repo, index, body, id) {
  return issueAddTime(owner, repo, index, body);
}

function verifyIssueTrackedTimeExists(owner, repo, index, body, id) {
  return issueTrackedTimes(owner, repo, index);
}

function verifyIssueTrackedTimeDoesNotExist(owner, repo, index, body, id) {
  return issueTrackedTimes(owner, repo, index);
}

function tryToDeleteANonExistingIssueTrackedTime(owner, repo, index, body, id) {
  return issueDeleteTime(owner, repo, index, id);
}

// ---- Entity: organization ----

function createOrganization(org) {
  var url = "/orgs";
  var description = "Create organization " + org;
  var body = {
    "organization": org,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Delete organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Edit organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listOrganizations() {
  var url = "/admin/orgs";
  var description = "List all organizations";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganization(org) {
  return createOrganization(org);
}

function verifyOrganizationExists(org) {
  return listOrganizations();
}

function verifyOrganizationDoesNotExist(org) {
  return listOrganizations();
}

function tryToDeleteANonExistingOrganization(org) {
  return deleteOrganization(org);
}

// ---- Entity: organization repository ----

function createOrgRepo(org, name) {
  var url = "/orgs/" + org + "/repos";
  var description = "Create repository " + name + " in organization " + org;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listOrgRepos(org) {
  var url = "/orgs/" + org + "/repos";
  var description = "List repositories in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgRepository(org, name) {
  return createOrgRepo(org, name);
}

function verifyOrgRepositoryExists(org, name) {
  return listOrgRepos(org);
}

function verifyOrgRepositoryDoesNotExist(org, name) {
  return listOrgRepos(org);
}

// ---- Entity: organization action secret ----

function updateOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Create or update secret " + secretname + " in organization " + org;
  var body = {
    "secretname": secretname,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgActionSecret(org, secretname) {
  return updateOrgSecret(org, secretname);
}

function tryToDeleteANonExistingOrgActionSecret(org, secretname) {
  return deleteOrgSecret(org, secretname);
}

// ---- Entity: organization action variable ----

function createOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Create variable " + variablename + " in organization " + org;
  var body = {
    "variablename": variablename,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Delete variable " + variablename + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Update variable " + variablename + " in organization " + org;
  var body = {
    "variablename": variablename,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Get variable " + variablename + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgActionVariable(org, variablename) {
  return createOrgVariable(org, variablename);
}

function verifyOrgActionVariableExists(org, variablename) {
  return getOrgVariable(org, variablename);
}

function verifyOrgActionVariableDoesNotExist(org, variablename) {
  return getOrgVariable(org, variablename);
}

function tryToDeleteANonExistingOrgActionVariable(org, variablename) {
  return deleteOrgVariable(org, variablename);
}

// ---- Entity: organization avatar ----

function orgUpdateAvatar(org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Update avatar for organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgDeleteAvatar(org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Delete avatar for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrgAvatar(org) {
  return orgDeleteAvatar(org);
}

// ---- Entity: organization block ----

function organizationBlockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function organizationUnblockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function organizationCheckUserBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if user " + username + " is blocked in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgBlock(org, username) {
  return organizationBlockUser(org, username);
}

function verifyOrgBlockExists(org, username) {
  return organizationCheckUserBlock(org, username);
}

function verifyOrgBlockDoesNotExist(org, username) {
  return organizationCheckUserBlock(org, username);
}

function tryToDeleteANonExistingOrgBlock(org, username) {
  return organizationUnblockUser(org, username);
}

// ---- Entity: organization hook ----

function orgCreateHook(org) {
  var url = "/orgs/" + org + "/hooks";
  var description = "Create hook in organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgDeleteHook(org, id) {
  var url = "/orgs/" + org + "/hooks/" + id;
  var description = "Delete hook " + id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgEditHook(org, id) {
  var url = "/orgs/" + org + "/hooks/" + id;
  var description = "Update hook " + id + " in organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgGetHook(org, id) {
  var url = "/orgs/" + org + "/hooks/" + id;
  var description = "Get hook " + id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgHook(org, id) {
  return orgCreateHook(org);
}

function verifyOrgHookExists(org, id) {
  return orgGetHook(org, id);
}

function verifyOrgHookDoesNotExist(org, id) {
  return orgGetHook(org, id);
}

function tryToDeleteANonExistingOrgHook(org, id) {
  return orgDeleteHook(org, id);
}

// ---- Entity: organization label ----

function orgCreateLabel(org) {
  var url = "/orgs/" + org + "/labels";
  var description = "Create label in organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgDeleteLabel(org, id) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Delete label " + id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgEditLabel(org, id) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Update label " + id + " in organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgGetLabel(org, id) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Get label " + id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgLabel(org, id) {
  return orgCreateLabel(org);
}

function verifyOrgLabelExists(org, id) {
  return orgGetLabel(org, id);
}

function verifyOrgLabelDoesNotExist(org, id) {
  return orgGetLabel(org, id);
}

function tryToDeleteANonExistingOrgLabel(org, id) {
  return orgDeleteLabel(org, id);
}

// ---- Entity: organization member ----

function orgDeleteMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Remove member " + username + " from organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgIsMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check if user " + username + " is member of organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgMemberExists(org, username) {
  return orgIsMember(org, username);
}

function verifyOrgMemberDoesNotExist(org, username) {
  return orgIsMember(org, username);
}

function tryToDeleteANonExistingOrgMember(org, username) {
  return orgDeleteMember(org, username);
}

// ---- Entity: organization public member ----

function orgPublicizeMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Publicize membership of user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgConcealMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Conceal membership of user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgIsPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check if user " + username + " is public member of organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgPublicMember(org, username) {
  return orgPublicizeMember(org, username);
}

function verifyOrgPublicMemberExists(org, username) {
  return orgIsPublicMember(org, username);
}

function verifyOrgPublicMemberDoesNotExist(org, username) {
  return orgIsPublicMember(org, username);
}

function tryToDeleteANonExistingOrgPublicMember(org, username) {
  return orgConcealMember(org, username);
}

// ---- Entity: organization team ----

function orgCreateTeam(org) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create team in organization " + org;
  var body = {
    "body": org,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgDeleteTeam(id) {
  var url = "/teams/" + id;
  var description = "Delete team " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgEditTeam(id) {
  var url = "/teams/" + id;
  var description = "Edit team " + id;
  var body = {
    "body": id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgGetTeam(id) {
  var url = "/teams/" + id;
  var description = "Get team " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgTeam(org, id) {
  return orgCreateTeam(org);
}

function verifyOrgTeamExists(org, id) {
  return orgGetTeam(id);
}

function verifyOrgTeamDoesNotExist(org, id) {
  return orgGetTeam(id);
}

function tryToDeleteANonExistingOrgTeam(org, id) {
  return orgDeleteTeam(id);
}

// ---- Entity: team member ----

function orgAddTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Add member " + username + " to team " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgRemoveTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Remove member " + username + " from team " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgListTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Get member " + username + " of team " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamMember(id, username) {
  return orgAddTeamMember(id, username);
}

function verifyTeamMemberExists(id, username) {
  return orgListTeamMember(id, username);
}

function verifyTeamMemberDoesNotExist(id, username) {
  return orgListTeamMember(id, username);
}

function tryToDeleteANonExistingTeamMember(id, username) {
  return orgRemoveTeamMember(id, username);
}

// ---- Entity: team repository ----

function orgAddTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Add repository " + repo + " from organization " + org + " to team " + id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgRemoveTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Remove repository " + repo + " from organization " + org + " from team " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function orgListTeamRepo(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Get repository " + repo + " from organization " + org + " in team " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamRepository(id, org, repo) {
  return orgAddTeamRepository(id, org, repo);
}

function verifyTeamRepositoryExists(id, org, repo) {
  return orgListTeamRepo(id, org, repo);
}

function verifyTeamRepositoryDoesNotExist(id, org, repo) {
  return orgListTeamRepo(id, org, repo);
}

function tryToDeleteANonExistingTeamRepository(id, org, repo) {
  return orgRemoveTeamRepository(id, org, repo);
}

// ---- Entity: cron task ----

function listCronTasks() {
  var url = "/admin/cron";
  var description = "List cron tasks";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function runCronTask(task) {
  var url = "/admin/cron/" + task;
  var description = "Run cron task " + task;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCronTask(task) {
  return runCronTask(task);
}

function verifyCronTaskExists(task) {
  return listCronTasks();
}

function verifyCronTaskDoesNotExist(task) {
  return listCronTasks();
}

// ---- Entity: email ----

function listEmails() {
  var url = "/admin/emails";
  var description = "List all emails";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchEmails(q) {
  var url = "/admin/emails/search";
  var description = "Search all emails";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyEmailExists(q) {
  return listEmails();
}

function verifyEmailDoesNotExist(q) {
  return listEmails();
}

// ---- Entity: runner registration token ----

function getRunnerRegistrationToken() {
  var url = "/admin/runners/registration-token";
  var description = "Get an global actions runner registration token";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRunnerRegistrationTokenExists() {
  return getRunnerRegistrationToken();
}

function verifyRunnerRegistrationTokenDoesNotExist() {
  return getRunnerRegistrationToken();
}

// ---- Entity: unadopted repository ----

function listUnadoptedRepositories() {
  var url = "/admin/unadopted";
  var description = "List unadopted repositories";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function adoptUnadoptedRepository(owner, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Adopt unadopted files as a repository " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUnadoptedRepository(owner, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Delete unadopted files " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUnadoptedRepository(owner, repo) {
  return adoptUnadoptedRepository(owner, repo);
}

function verifyUnadoptedRepositoryExists(owner, repo) {
  return listUnadoptedRepositories();
}

function verifyUnadoptedRepositoryDoesNotExist(owner, repo) {
  return listUnadoptedRepositories();
}

function tryToDeleteANonExistingUnadoptedRepository(owner, repo) {
  return deleteUnadoptedRepository(owner, repo);
}

// ---- Entity: user ----

function searchUsers(source_id, login_name, page, limit) {
  var url = "/admin/users";
  var description = "Search users according filter conditions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createUser() {
  var url = "/admin/users";
  var description = "Create a user";
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUser(username, purge) {
  var url = "/admin/users/" + username;
  var description = "Delete a user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function editUser(username) {
  var url = "/admin/users/" + username;
  var description = "Edit an existing user " + username;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(source_id, login_name, page, limit, username, purge) {
  return createUser();
}

function verifyUserExists(source_id, login_name, page, limit, username, purge) {
  return searchUsers(source_id, login_name, page, limit);
}

function verifyUserDoesNotExist(source_id, login_name, page, limit, username, purge) {
  return searchUsers(source_id, login_name, page, limit);
}

function tryToDeleteANonExistingUser(source_id, login_name, page, limit, username, purge) {
  return deleteUser(username, purge);
}

// ---- Entity: user badge ----

function listUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "List a user's badges " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addUserBadge(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Add a badge to a user " + username;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserBadge(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Remove a badge from a user " + username;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserBadge(username) {
  return addUserBadge(username);
}

function verifyUserBadgeExists(username) {
  return listUserBadges(username);
}

function verifyUserBadgeDoesNotExist(username) {
  return listUserBadges(username);
}

function tryToDeleteANonExistingUserBadge(username) {
  return deleteUserBadge(username);
}

// ---- Entity: user public key ----

function addUserPublicKey(username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Add a public key on behalf of a user " + username;
  var body = {
    "key": key,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserPublicKey(username, id) {
  var url = "/admin/users/" + username + "/keys/" + id;
  var description = "Delete a user's public key " + username + " key " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserPublicKey(username, id) {
  return addUserPublicKey(username);
}

function tryToDeleteANonExistingUserPublicKey(username, id) {
  return deleteUserPublicKey(username, id);
}

// ---- Entity: user organization ----

function createOrgForUser(username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Create an organization for user " + username;
  var body = {
    "organization": organization,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserOrganization(username) {
  return createOrgForUser(username);
}

// ---- Entity: user rename ----

function renameUser(username) {
  var url = "/admin/users/" + username + "/rename";
  var description = "Rename a user " + username;
  var body = {
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserRename(username) {
  return renameUser(username);
}

// ---- Entity: user repository ----

function createRepoForUser(username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Create a repository on behalf of a user " + username;
  var body = {
    "repository": repository,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserRepository(username) {
  return createRepoForUser(username);
}

// ---- Entity: notification ----

function listNotifications(all, status-types, subject-type, since, before, page, limit) {
  var url = "/notifications";
  var description = "List users's notification threads";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markNotifications(last_read_at, all, status-types, to-status) {
  var url = "/notifications";
  var description = "Mark notification threads as read, pinned or unread";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNotificationExists(all, status-types, subject-type, since, before, page, limit, last_read_at, to-status) {
  return listNotifications(all, status-types, subject-type, since, before, page, limit);
}

function verifyNotificationDoesNotExist(all, status-types, subject-type, since, before, page, limit, last_read_at, to-status) {
  return listNotifications(all, status-types, subject-type, since, before, page, limit);
}

// ---- Entity: notification new ----

function checkUnreadNotifications() {
  var url = "/notifications/new";
  var description = "Check if unread notifications exist";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNotificationNewExists() {
  return checkUnreadNotifications();
}

function verifyNotificationNewDoesNotExist() {
  return checkUnreadNotifications();
}

// ---- Entity: notification thread ----

function getNotificationThread(id) {
  var url = "/notifications/threads/" + id;
  var description = "Get notification thread by ID";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markNotificationThread(id, to-status) {
  var url = "/notifications/threads/" + id;
  var description = "Mark notification thread as read by ID";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNotificationThreadExists(id, to-status) {
  return getNotificationThread(id);
}

function verifyNotificationThreadDoesNotExist(id, to-status) {
  return getNotificationThread(id);
}

// ---- Entity: repository notification ----

function listRepoNotifications(owner, repo, all, status-types, subject-type, since, before, page, limit) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "List users's notification threads on a specific repo";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markRepoNotifications(owner, repo, all, status-types, to-status, last_read_at) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark notification threads as read, pinned or unread on a specific repo";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepoNotificationExists(owner, repo, all, status-types, subject-type, since, before, page, limit, to-status, last_read_at) {
  return listRepoNotifications(owner, repo, all, status-types, subject-type, since, before, page, limit);
}

function verifyRepoNotificationDoesNotExist(owner, repo, all, status-types, subject-type, since, before, page, limit, to-status, last_read_at) {
  return listRepoNotifications(owner, repo, all, status-types, subject-type, since, before, page, limit);
}

// ---- Entity: API settings ----

function getGeneralAPISettings() {
  var url = "/settings/api";
  var description = "Get instance's global settings for api";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingsAPIExists() {
  return getGeneralAPISettings();
}

function verifySettingsAPIDoesNotExist() {
  return getGeneralAPISettings();
}

// ---- Entity: Attachment settings ----

function getGeneralAttachmentSettings() {
  var url = "/settings/attachment";
  var description = "Get instance's global settings for Attachment";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingsAttachmentExists() {
  return getGeneralAttachmentSettings();
}

function verifySettingsAttachmentDoesNotExist() {
  return getGeneralAttachmentSettings();
}

// ---- Entity: Repository settings ----

function getGeneralRepositorySettings() {
  var url = "/settings/repository";
  var description = "Get instance's global settings for repositories";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingsRepositoryExists() {
  return getGeneralRepositorySettings();
}

function verifySettingsRepositoryDoesNotExist() {
  return getGeneralRepositorySettings();
}

// ---- Entity: UI settings ----

function getGeneralUISettings() {
  var url = "/settings/ui";
  var description = "Get instance's global settings for ui";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingsUIExists() {
  return getGeneralUISettings();
}

function verifySettingsUIDoesNotExist() {
  return getGeneralUISettings();
}

// ---- Entity: package ----

function getPackage(owner, type, name, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Get package " + name + " version " + version + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePackage(owner, type, name, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Delete package " + name + " version " + version + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPackageExists(owner, type, name, version) {
  return getPackage(owner, type, name, version);
}

function verifyPackageDoesNotExist(owner, type, name, version) {
  return getPackage(owner, type, name, version);
}

function tryToDeleteANonExistingPackage(owner, type, name, version) {
  return deletePackage(owner, type, name, version);
}

// ---- Entity: package collection ----

function listPackages(owner) {
  var url = "/packages/" + owner;
  var description = "List packages of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPackageCollectionExists(owner) {
  return listPackages(owner);
}

function verifyPackageCollectionDoesNotExist(owner) {
  return listPackages(owner);
}

// ---- Entity: package files ----

function listPackageFiles(owner, type, name, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files";
  var description = "List files of package " + name + " version " + version + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPackageFilesExists(owner, type, name, version) {
  return listPackageFiles(owner, type, name, version);
}

function verifyPackageFilesDoesNotExist(owner, type, name, version) {
  return listPackageFiles(owner, type, name, version);
}

// ---- Entity: person ----

function getPerson(user-id) {
  var url = "/activitypub/user-id/" + user-id;
  var description = "Returns the Person actor for user " + user-id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function sendToInbox(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var description = "Send to inbox of user " + user-id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPerson(user-id) {
  return sendToInbox(user-id);
}

function verifyPersonExists(user-id) {
  return getPerson(user-id);
}

function verifyPersonDoesNotExist(user-id) {
  return getPerson(user-id);
}
