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

function updateRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Update repo " + repo + " of " + owner;
  var body = {
    "name": name,
  };
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

// ---- Entity: organization repository ----

function createOrgRepo(org, name) {
  var url = "/orgs/" + org + "/repos";
  var description = "Create repo " + name + " in org " + org;
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
  var description = "List repositories in org " + org;
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

// ---- Entity: repository ruleset ----

function createRepoRuleset(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets";
  var description = "Create ruleset " + name + " in repo " + repo + " of " + owner;
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

function deleteRepoRuleset(owner, repo, ruleset_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Delete ruleset " + ruleset_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepoRuleset(owner, repo, ruleset_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Update ruleset " + ruleset_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepoRuleset(owner, repo, ruleset_id) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets/" + ruleset_id;
  var description = "Get ruleset " + ruleset_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listRepoRulesets(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/rulesets";
  var description = "List rulesets in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRuleset(owner, repo, name, ruleset_id) {
  return createRepoRuleset(owner, repo, name);
}

function verifyRulesetExists(owner, repo, name, ruleset_id) {
  return getRepoRuleset(owner, repo, ruleset_id);
}

function verifyRulesetDoesNotExist(owner, repo, name, ruleset_id) {
  return getRepoRuleset(owner, repo, ruleset_id);
}

function tryToDeleteANonExistingRuleset(owner, repo, name, ruleset_id) {
  return deleteRepoRuleset(owner, repo, ruleset_id);
}

// ---- Entity: organization repository ruleset ----

function createOrgRuleset(org, name) {
  var url = "/orgs/" + org + "/rulesets";
  var description = "Create ruleset " + name + " in org " + org;
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

function deleteOrgRuleset(org, ruleset_id) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Delete ruleset " + ruleset_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgRuleset(org, ruleset_id) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Update ruleset " + ruleset_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgRuleset(org, ruleset_id) {
  var url = "/orgs/" + org + "/rulesets/" + ruleset_id;
  var description = "Get ruleset " + ruleset_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listOrgRulesets(org) {
  var url = "/orgs/" + org + "/rulesets";
  var description = "List rulesets in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgRuleset(org, name, ruleset_id) {
  return createOrgRuleset(org, name);
}

function verifyOrgRulesetExists(org, name, ruleset_id) {
  return getOrgRuleset(org, ruleset_id);
}

function verifyOrgRulesetDoesNotExist(org, name, ruleset_id) {
  return getOrgRuleset(org, ruleset_id);
}

function tryToDeleteANonExistingOrgRuleset(org, name, ruleset_id) {
  return deleteOrgRuleset(org, ruleset_id);
}

// ---- Entity: branch ----

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

function listBranches(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "List branches in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function renameBranch(owner, repo, branch, new_name) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/rename";
  var description = "Rename branch " + branch + " in repo " + repo + " of " + owner + " to " + new_name;
  var body = {
    "new_name": new_name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBranchExists(owner, repo, branch, new_name) {
  return getBranch(owner, repo, branch);
}

function verifyBranchDoesNotExist(owner, repo, branch, new_name) {
  return getBranch(owner, repo, branch);
}

// ---- Entity: branch protection ----

function getBranchProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Get branch protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBranchProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Update branch protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBranchProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection";
  var description = "Delete branch protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBranchProtectionExists(owner, repo, branch) {
  return getBranchProtection(owner, repo, branch);
}

function verifyBranchProtectionDoesNotExist(owner, repo, branch) {
  return getBranchProtection(owner, repo, branch);
}

function tryToDeleteANonExistingBranchProtection(owner, repo, branch) {
  return deleteBranchProtection(owner, repo, branch);
}

// ---- Entity: admin branch protection ----

function getAdminBranchProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Get admin branch protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setAdminBranchProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Set admin branch protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAdminBranchProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/enforce_admins";
  var description = "Delete admin branch protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBranchProtectionAdmin(owner, repo, branch) {
  return setAdminBranchProtection(owner, repo, branch);
}

function verifyBranchProtectionAdminExists(owner, repo, branch) {
  return getAdminBranchProtection(owner, repo, branch);
}

function verifyBranchProtectionAdminDoesNotExist(owner, repo, branch) {
  return getAdminBranchProtection(owner, repo, branch);
}

function tryToDeleteANonExistingBranchProtectionAdmin(owner, repo, branch) {
  return deleteAdminBranchProtection(owner, repo, branch);
}

// ---- Entity: pull request review protection ----

function getPullRequestReviewProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Get pull request review protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePullRequestReviewProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Update pull request review protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePullRequestReviewProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_pull_request_reviews";
  var description = "Delete pull request review protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPullRequestReviewProtectionExists(owner, repo, branch) {
  return getPullRequestReviewProtection(owner, repo, branch);
}

function verifyPullRequestReviewProtectionDoesNotExist(owner, repo, branch) {
  return getPullRequestReviewProtection(owner, repo, branch);
}

function tryToDeleteANonExistingPullRequestReviewProtection(owner, repo, branch) {
  return deletePullRequestReviewProtection(owner, repo, branch);
}

// ---- Entity: commit signature protection ----

function getCommitSignatureProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Get commit signature protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createCommitSignatureProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Create commit signature protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCommitSignatureProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_signatures";
  var description = "Delete commit signature protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCommitSignatureProtection(owner, repo, branch) {
  return createCommitSignatureProtection(owner, repo, branch);
}

function verifyCommitSignatureProtectionExists(owner, repo, branch) {
  return getCommitSignatureProtection(owner, repo, branch);
}

function verifyCommitSignatureProtectionDoesNotExist(owner, repo, branch) {
  return getCommitSignatureProtection(owner, repo, branch);
}

function tryToDeleteANonExistingCommitSignatureProtection(owner, repo, branch) {
  return deleteCommitSignatureProtection(owner, repo, branch);
}

// ---- Entity: status check protection ----

function getStatusCheckProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Get status check protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateStatusCheckProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Update status check protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeStatusCheckProtection(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks";
  var description = "Remove status check protection for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyStatusCheckProtectionExists(owner, repo, branch) {
  return getStatusCheckProtection(owner, repo, branch);
}

function verifyStatusCheckProtectionDoesNotExist(owner, repo, branch) {
  return getStatusCheckProtection(owner, repo, branch);
}

function tryToDeleteANonExistingStatusCheckProtection(owner, repo, branch) {
  return removeStatusCheckProtection(owner, repo, branch);
}

// ---- Entity: status check contexts ----

function getAllStatusCheckContexts(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Get all status check contexts for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addStatusCheckContexts(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Add status check contexts for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setStatusCheckContexts(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Set status check contexts for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeStatusCheckContexts(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/required_status_checks/contexts";
  var description = "Remove status check contexts for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingStatusCheckContexts(owner, repo, branch) {
  return addStatusCheckContexts(owner, repo, branch);
}

function verifyStatusCheckContextsExists(owner, repo, branch) {
  return getAllStatusCheckContexts(owner, repo, branch);
}

function verifyStatusCheckContextsDoesNotExist(owner, repo, branch) {
  return getAllStatusCheckContexts(owner, repo, branch);
}

function tryToDeleteANonExistingStatusCheckContexts(owner, repo, branch) {
  return removeStatusCheckContexts(owner, repo, branch);
}

// ---- Entity: access restrictions ----

function getAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Get access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions";
  var description = "Delete access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAccessRestrictionsExists(owner, repo, branch) {
  return getAccessRestrictions(owner, repo, branch);
}

function verifyAccessRestrictionsDoesNotExist(owner, repo, branch) {
  return getAccessRestrictions(owner, repo, branch);
}

function tryToDeleteANonExistingAccessRestrictions(owner, repo, branch) {
  return deleteAccessRestrictions(owner, repo, branch);
}

// ---- Entity: app access restrictions ----

function getAppsWithAccessToProtectedBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Get apps with access to protected branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addAppAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Add app access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setAppAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Set app access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAppAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/apps";
  var description = "Remove app access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAppAccessRestrictions(owner, repo, branch) {
  return addAppAccessRestrictions(owner, repo, branch);
}

function verifyAppAccessRestrictionsExists(owner, repo, branch) {
  return getAppsWithAccessToProtectedBranch(owner, repo, branch);
}

function verifyAppAccessRestrictionsDoesNotExist(owner, repo, branch) {
  return getAppsWithAccessToProtectedBranch(owner, repo, branch);
}

function tryToDeleteANonExistingAppAccessRestrictions(owner, repo, branch) {
  return removeAppAccessRestrictions(owner, repo, branch);
}

// ---- Entity: team access restrictions ----

function getTeamsWithAccessToProtectedBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Get teams with access to protected branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addTeamAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Add team access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setTeamAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Set team access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeTeamAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/teams";
  var description = "Remove team access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamAccessRestrictions(owner, repo, branch) {
  return addTeamAccessRestrictions(owner, repo, branch);
}

function verifyTeamAccessRestrictionsExists(owner, repo, branch) {
  return getTeamsWithAccessToProtectedBranch(owner, repo, branch);
}

function verifyTeamAccessRestrictionsDoesNotExist(owner, repo, branch) {
  return getTeamsWithAccessToProtectedBranch(owner, repo, branch);
}

function tryToDeleteANonExistingTeamAccessRestrictions(owner, repo, branch) {
  return removeTeamAccessRestrictions(owner, repo, branch);
}

// ---- Entity: user access restrictions ----

function getUsersWithAccessToProtectedBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Get users with access to protected branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addUserAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Add user access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setUserAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Set user access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeUserAccessRestrictions(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch + "/protection/restrictions/users";
  var description = "Remove user access restrictions for branch " + branch + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserAccessRestrictions(owner, repo, branch) {
  return addUserAccessRestrictions(owner, repo, branch);
}

function verifyUserAccessRestrictionsExists(owner, repo, branch) {
  return getUsersWithAccessToProtectedBranch(owner, repo, branch);
}

function verifyUserAccessRestrictionsDoesNotExist(owner, repo, branch) {
  return getUsersWithAccessToProtectedBranch(owner, repo, branch);
}

function tryToDeleteANonExistingUserAccessRestrictions(owner, repo, branch) {
  return removeUserAccessRestrictions(owner, repo, branch);
}

// ---- Entity: commit comment ----

function getCommitComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Get commit comment " + comment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCommitComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Update commit comment " + comment_id + " in repo " + repo + " of " + owner;
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

function deleteCommitComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id;
  var description = "Delete commit comment " + comment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCommitCommentExists(owner, repo, comment_id) {
  return getCommitComment(owner, repo, comment_id);
}

function verifyCommitCommentDoesNotExist(owner, repo, comment_id) {
  return getCommitComment(owner, repo, comment_id);
}

function tryToDeleteANonExistingCommitComment(owner, repo, comment_id) {
  return deleteCommitComment(owner, repo, comment_id);
}

// ---- Entity: commit comment for commit ----

function listCommitCommentsForCommit(owner, repo, commit_sha) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + commit_sha + "/comments";
  var description = "List commit comments for commit " + commit_sha + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createCommitComment(owner, repo, commit_sha) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + commit_sha + "/comments";
  var description = "Create commit comment for commit " + commit_sha + " in repo " + repo + " of " + owner;
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

function tryToAddExistingCommitCommentForCommit(owner, repo, commit_sha) {
  return createCommitComment(owner, repo, commit_sha);
}

// ---- Entity: commit status ----

function createCommitStatus(owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Create commit status for SHA " + sha + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCommitStatus(owner, repo, sha) {
  return createCommitStatus(owner, repo, sha);
}

// ---- Entity: deploy key ----

function createDeployKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Create deploy key in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDeployKey(owner, repo, key_id) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Delete deploy key " + key_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDeployKey(owner, repo, key_id) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + key_id;
  var description = "Get deploy key " + key_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDeployKey(owner, repo, key_id) {
  return createDeployKey(owner, repo);
}

function verifyDeployKeyExists(owner, repo, key_id) {
  return getDeployKey(owner, repo, key_id);
}

function verifyDeployKeyDoesNotExist(owner, repo, key_id) {
  return getDeployKey(owner, repo, key_id);
}

function tryToDeleteANonExistingDeployKey(owner, repo, key_id) {
  return deleteDeployKey(owner, repo, key_id);
}

// ---- Entity: repository collaborator ----

function addCollaborator(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Add collaborator " + username + " to repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeCollaborator(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Remove collaborator " + username + " from repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function checkCollaborator(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username;
  var description = "Check collaborator " + username + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCollaborator(owner, repo, username) {
  return addCollaborator(owner, repo, username);
}

function verifyCollaboratorExists(owner, repo, username) {
  return checkCollaborator(owner, repo, username);
}

function verifyCollaboratorDoesNotExist(owner, repo, username) {
  return checkCollaborator(owner, repo, username);
}

function tryToDeleteANonExistingCollaborator(owner, repo, username) {
  return removeCollaborator(owner, repo, username);
}

// ---- Entity: repository collaborator permission ----

function getCollaboratorPermissionLevel(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + username + "/permission";
  var description = "Get collaborator permission for " + username + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCollaboratorPermissionExists(owner, repo, username) {
  return getCollaboratorPermissionLevel(owner, repo, username);
}

function verifyCollaboratorPermissionDoesNotExist(owner, repo, username) {
  return getCollaboratorPermissionLevel(owner, repo, username);
}

// ---- Entity: deployment ----

function createDeployment(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments";
  var description = "Create deployment in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDeployment(owner, repo, deployment_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Delete deployment " + deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDeployment(owner, repo, deployment_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id;
  var description = "Get deployment " + deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listDeployments(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/deployments";
  var description = "List deployments in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDeployment(owner, repo, deployment_id) {
  return createDeployment(owner, repo);
}

function verifyDeploymentExists(owner, repo, deployment_id) {
  return getDeployment(owner, repo, deployment_id);
}

function verifyDeploymentDoesNotExist(owner, repo, deployment_id) {
  return getDeployment(owner, repo, deployment_id);
}

function tryToDeleteANonExistingDeployment(owner, repo, deployment_id) {
  return deleteDeployment(owner, repo, deployment_id);
}

// ---- Entity: deployment status ----

function createDeploymentStatus(owner, repo, deployment_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses";
  var description = "Create deployment status for deployment " + deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDeploymentStatus(owner, repo, deployment_id, status_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses/" + status_id;
  var description = "Get deployment status " + status_id + " for deployment " + deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listDeploymentStatuses(owner, repo, deployment_id) {
  var url = "/repos/" + owner + "/" + repo + "/deployments/" + deployment_id + "/statuses";
  var description = "List deployment statuses for deployment " + deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDeploymentStatus(owner, repo, deployment_id, status_id) {
  return createDeploymentStatus(owner, repo, deployment_id);
}

function verifyDeploymentStatusExists(owner, repo, deployment_id, status_id) {
  return getDeploymentStatus(owner, repo, deployment_id, status_id);
}

function verifyDeploymentStatusDoesNotExist(owner, repo, deployment_id, status_id) {
  return getDeploymentStatus(owner, repo, deployment_id, status_id);
}

// ---- Entity: environment ----

function getEnvironment(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Get environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateEnvironment(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Create or update environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteEnvironment(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name;
  var description = "Delete environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listEnvironments(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/environments";
  var description = "List environments in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnvironment(owner, repo, environment_name) {
  return createOrUpdateEnvironment(owner, repo, environment_name);
}

function verifyEnvironmentExists(owner, repo, environment_name) {
  return getEnvironment(owner, repo, environment_name);
}

function verifyEnvironmentDoesNotExist(owner, repo, environment_name) {
  return getEnvironment(owner, repo, environment_name);
}

function tryToDeleteANonExistingEnvironment(owner, repo, environment_name) {
  return deleteEnvironment(owner, repo, environment_name);
}

// ---- Entity: deployment branch policy ----

function createDeploymentBranchPolicy(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies";
  var description = "Create deployment branch policy in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Update deployment branch policy " + branch_policy_id + " in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Delete deployment branch policy " + branch_policy_id + " in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies/" + branch_policy_id;
  var description = "Get deployment branch policy " + branch_policy_id + " in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listDeploymentBranchPolicies(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment-branch-policies";
  var description = "List deployment branch policies in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id) {
  return createDeploymentBranchPolicy(owner, repo, environment_name);
}

function verifyDeploymentBranchPolicyExists(owner, repo, environment_name, branch_policy_id) {
  return getDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id);
}

function verifyDeploymentBranchPolicyDoesNotExist(owner, repo, environment_name, branch_policy_id) {
  return getDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id);
}

function tryToDeleteANonExistingDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id) {
  return deleteDeploymentBranchPolicy(owner, repo, environment_name, branch_policy_id);
}

// ---- Entity: deployment protection rule ----

function createDeploymentProtectionRule(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules";
  var description = "Create deployment protection rule in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function disableDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Disable deployment protection rule " + protection_rule_id + " in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules/" + protection_rule_id;
  var description = "Get deployment protection rule " + protection_rule_id + " in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAllDeploymentProtectionRules(owner, repo, environment_name) {
  var url = "/repos/" + owner + "/" + repo + "/environments/" + environment_name + "/deployment_protection_rules";
  var description = "Get all deployment protection rules in environment " + environment_name + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id) {
  return createDeploymentProtectionRule(owner, repo, environment_name);
}

function verifyDeploymentProtectionRuleExists(owner, repo, environment_name, protection_rule_id) {
  return getDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id);
}

function verifyDeploymentProtectionRuleDoesNotExist(owner, repo, environment_name, protection_rule_id) {
  return getDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id);
}

function tryToDeleteANonExistingDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id) {
  return disableDeploymentProtectionRule(owner, repo, environment_name, protection_rule_id);
}

// ---- Entity: fork ----

function createFork(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Create fork of repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listForks(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "List forks of repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFork(owner, repo) {
  return createFork(owner, repo);
}

// ---- Entity: repository webhook ----

function createWebhook(org) {
  var url = "/orgs/" + org + "/hooks";
  var description = "Create webhook in organization " + org;
  var body = {
    "name": name,
    "config": config,
    "events": events,
    "active": active,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Update webhook " + hook_id + " in organization " + org;
  var body = {
    "config": config,
    "events": events,
    "active": active,
    "name": name,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Delete webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id;
  var description = "Get webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(org, hook_id) {
  return createWebhook(org);
}

function verifyWebhookExists(org, hook_id) {
  return getWebhook(org, hook_id);
}

function verifyWebhookDoesNotExist(org, hook_id) {
  return getWebhook(org, hook_id);
}

function tryToDeleteANonExistingWebhook(org, hook_id) {
  return deleteWebhook(org, hook_id);
}

// ---- Entity: webhook configuration ----

function getWebhookConfig(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/config";
  var description = "Get webhook configuration for webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhookConfig(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/config";
  var description = "Update webhook configuration for webhook " + hook_id + " in organization " + org;
  var body = {
    "url": url,
    "content_type": content_type,
    "secret": secret,
    "insecure_ssl": insecure_ssl,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWebhookConfigExists(org, hook_id) {
  return getWebhookConfig(org, hook_id);
}

function verifyWebhookConfigDoesNotExist(org, hook_id) {
  return getWebhookConfig(org, hook_id);
}

// ---- Entity: webhook delivery ----

function getWebhookDelivery(org, hook_id, delivery_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/deliveries/" + delivery_id;
  var description = "Get webhook delivery " + delivery_id + " for webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listWebhookDeliveries(owner, repo, hook_id) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/deliveries";
  var description = "List webhook deliveries for webhook " + hook_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function redeliverWebhookDelivery(org, hook_id, delivery_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/deliveries/" + delivery_id + "/attempts";
  var description = "Redeliver webhook delivery " + delivery_id + " for webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWebhookDeliveryExists(org, hook_id, delivery_id, owner, repo) {
  return getWebhookDelivery(org, hook_id, delivery_id);
}

function verifyWebhookDeliveryDoesNotExist(org, hook_id, delivery_id, owner, repo) {
  return getWebhookDelivery(org, hook_id, delivery_id);
}

// ---- Entity: webhook ping ----

function pingWebhook(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/pings";
  var description = "Ping webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhookPing(org, hook_id) {
  return pingWebhook(org, hook_id);
}

// ---- Entity: webhook test ----

function testPushWebhook(owner, repo, hook_id) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + hook_id + "/tests";
  var description = "Test push webhook " + hook_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhookTest(owner, repo, hook_id) {
  return testPushWebhook(owner, repo, hook_id);
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

function deleteRelease(owner, repo, release_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Delete release " + release_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRelease(owner, repo, release_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Update release " + release_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRelease(owner, repo, release_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id;
  var description = "Get release " + release_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listReleases(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "List releases in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRelease(owner, repo, release_id) {
  return createRelease(owner, repo);
}

function verifyReleaseExists(owner, repo, release_id) {
  return getRelease(owner, repo, release_id);
}

function verifyReleaseDoesNotExist(owner, repo, release_id) {
  return getRelease(owner, repo, release_id);
}

function tryToDeleteANonExistingRelease(owner, repo, release_id) {
  return deleteRelease(owner, repo, release_id);
}

// ---- Entity: release asset ----

function uploadReleaseAsset(owner, repo, release_id, name) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/assets";
  var description = "Upload release asset to release " + release_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteReleaseAsset(owner, repo, asset_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Delete release asset " + asset_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateReleaseAsset(owner, repo, asset_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Update release asset " + asset_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getReleaseAsset(owner, repo, asset_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/assets/" + asset_id;
  var description = "Get release asset " + asset_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listReleaseAssets(owner, repo, release_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/assets";
  var description = "List release assets for release " + release_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingReleaseAsset(owner, repo, release_id, name, asset_id) {
  return uploadReleaseAsset(owner, repo, release_id, name);
}

function verifyReleaseAssetExists(owner, repo, release_id, name, asset_id) {
  return getReleaseAsset(owner, repo, asset_id);
}

function verifyReleaseAssetDoesNotExist(owner, repo, release_id, name, asset_id) {
  return getReleaseAsset(owner, repo, asset_id);
}

function tryToDeleteANonExistingReleaseAsset(owner, repo, release_id, name, asset_id) {
  return deleteReleaseAsset(owner, repo, asset_id);
}

// ---- Entity: file content ----

function createOrUpdateFileContents(owner, repo, path) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Create or update file at " + path + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFile(owner, repo, path) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Delete file at " + path + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContent(owner, repo, path) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + path;
  var description = "Get content at " + path + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFileContent(owner, repo, path) {
  return createOrUpdateFileContents(owner, repo, path);
}

function verifyFileContentExists(owner, repo, path) {
  return getContent(owner, repo, path);
}

function verifyFileContentDoesNotExist(owner, repo, path) {
  return getContent(owner, repo, path);
}

function tryToDeleteANonExistingFileContent(owner, repo, path) {
  return deleteFile(owner, repo, path);
}

// ---- Entity: attestation ----

function createAttestation(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/attestations";
  var description = "Create attestation in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listAttestations(org, subject_digest) {
  var url = "/orgs/" + org + "/attestations/" + subject_digest;
  var description = "List attestations for subject digest " + subject_digest + " in " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAttestationsBySubjectDigest(org, subject_digest) {
  var url = "/orgs/" + org + "/attestations/digest/" + subject_digest;
  var description = "Delete attestations by subject digest " + subject_digest + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAttestation(owner, repo, org, subject_digest) {
  return createAttestation(owner, repo);
}

// ---- Entity: autolink reference ----

function createAutolink(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks";
  var description = "Create autolink in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAutolink(owner, repo, autolink_id) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Delete autolink " + autolink_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAutolink(owner, repo, autolink_id) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks/" + autolink_id;
  var description = "Get autolink " + autolink_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listAutolinks(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/autolinks";
  var description = "List autolinks in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAutolink(owner, repo, autolink_id) {
  return createAutolink(owner, repo);
}

function verifyAutolinkExists(owner, repo, autolink_id) {
  return getAutolink(owner, repo, autolink_id);
}

function verifyAutolinkDoesNotExist(owner, repo, autolink_id) {
  return getAutolink(owner, repo, autolink_id);
}

function tryToDeleteANonExistingAutolink(owner, repo, autolink_id) {
  return deleteAutolink(owner, repo, autolink_id);
}

// ---- Entity: repository invitation ----

function updateInvitation(owner, repo, invitation_id) {
  var url = "/repos/" + owner + "/" + repo + "/invitations/" + invitation_id;
  var description = "Update invitation " + invitation_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelInvitation(org, invitation_id) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id;
  var description = "Cancel invitation " + invitation_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listInvitations(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/invitations";
  var description = "List invitations in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createInvitation(org) {
  var url = "/orgs/" + org + "/invitations";
  var description = "Create invitation in organization " + org;
  var body = {
    "invitee_id": invitee_id,
    "email": email,
    "role": role,
    "team_ids": team_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingInvitation(owner, repo, invitation_id, org) {
  return createInvitation(org);
}

function tryToDeleteANonExistingInvitation(owner, repo, invitation_id, org) {
  return cancelInvitation(org, invitation_id);
}

// ---- Entity: user repository invitation ----

function acceptInvitationForAuthenticatedUser(invitation_id) {
  var url = "/user/repository_invitations/" + invitation_id;
  var description = "Accept invitation " + invitation_id + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function declineInvitationForAuthenticatedUser(invitation_id) {
  var url = "/user/repository_invitations/" + invitation_id;
  var description = "Decline invitation " + invitation_id + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listInvitationsForAuthenticatedUser() {
  var url = "/user/repository_invitations";
  var description = "List invitations for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: GitHub Pages site ----

function createPagesSite(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Create GitHub Pages site in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePagesSite(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Update GitHub Pages site in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePagesSite(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Delete GitHub Pages site in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPagesSite(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages";
  var description = "Get GitHub Pages site in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPagesSite(owner, repo) {
  return createPagesSite(owner, repo);
}

function verifyPagesSiteExists(owner, repo) {
  return getPagesSite(owner, repo);
}

function verifyPagesSiteDoesNotExist(owner, repo) {
  return getPagesSite(owner, repo);
}

function tryToDeleteANonExistingPagesSite(owner, repo) {
  return deletePagesSite(owner, repo);
}

// ---- Entity: GitHub Pages build ----

function listPagesBuilds(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds";
  var description = "List GitHub Pages builds in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function requestPagesBuild(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds";
  var description = "Request GitHub Pages build in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPagesBuild(owner, repo, build_id) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds/" + build_id;
  var description = "Get GitHub Pages build " + build_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLatestPagesBuild(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/builds/latest";
  var description = "Get latest GitHub Pages build in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPagesBuild(owner, repo, build_id) {
  return requestPagesBuild(owner, repo);
}

function verifyPagesBuildExists(owner, repo, build_id) {
  return getPagesBuild(owner, repo, build_id);
}

function verifyPagesBuildDoesNotExist(owner, repo, build_id) {
  return getPagesBuild(owner, repo, build_id);
}

// ---- Entity: GitHub Pages deployment ----

function createPagesDeployment(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments";
  var description = "Create GitHub Pages deployment in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPagesDeployment(owner, repo, pages_deployment_id) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments/" + pages_deployment_id;
  var description = "Get GitHub Pages deployment " + pages_deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelPagesDeployment(owner, repo, pages_deployment_id) {
  var url = "/repos/" + owner + "/" + repo + "/pages/deployments/" + pages_deployment_id + "/cancel";
  var description = "Cancel GitHub Pages deployment " + pages_deployment_id + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPagesDeployment(owner, repo, pages_deployment_id) {
  return createPagesDeployment(owner, repo);
}

function verifyPagesDeploymentExists(owner, repo, pages_deployment_id) {
  return getPagesDeployment(owner, repo, pages_deployment_id);
}

function verifyPagesDeploymentDoesNotExist(owner, repo, pages_deployment_id) {
  return getPagesDeployment(owner, repo, pages_deployment_id);
}

// ---- Entity: hosted runner ----

function createHostedRunner(org, name, image, size, runner_group_id, maximum_runners, enable_static_ip) {
  var url = "/orgs/" + org + "/actions/hosted-runners";
  var description = "Create hosted runner " + name + " in org " + org;
  var body = {
    "name": name,
    "image": image,
    "size": size,
    "runner_group_id": runner_group_id,
    "maximum_runners": maximum_runners,
    "enable_static_ip": enable_static_ip,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getHostedRunner(org, hosted_runner_id) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Get hosted runner " + hosted_runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateHostedRunner(org, hosted_runner_id, name, runner_group_id, maximum_runners, enable_static_ip) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Update hosted runner " + hosted_runner_id + " in org " + org;
  var body = {
    "name": name,
    "runner_group_id": runner_group_id,
    "maximum_runners": maximum_runners,
    "enable_static_ip": enable_static_ip,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteHostedRunner(org, hosted_runner_id) {
  var url = "/orgs/" + org + "/actions/hosted-runners/" + hosted_runner_id;
  var description = "Delete hosted runner " + hosted_runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingHostedRunner(org, name, image, size, runner_group_id, maximum_runners, enable_static_ip, hosted_runner_id) {
  return createHostedRunner(org, name, image, size, runner_group_id, maximum_runners, enable_static_ip);
}

function verifyHostedRunnerExists(org, name, image, size, runner_group_id, maximum_runners, enable_static_ip, hosted_runner_id) {
  return getHostedRunner(org, hosted_runner_id);
}

function verifyHostedRunnerDoesNotExist(org, name, image, size, runner_group_id, maximum_runners, enable_static_ip, hosted_runner_id) {
  return getHostedRunner(org, hosted_runner_id);
}

function tryToDeleteANonExistingHostedRunner(org, name, image, size, runner_group_id, maximum_runners, enable_static_ip, hosted_runner_id) {
  return deleteHostedRunner(org, hosted_runner_id);
}

// ---- Entity: runner group ----

function createRunnerGroup(org, name, visibility, selected_repository_ids, runners, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id) {
  var url = "/orgs/" + org + "/actions/runner-groups";
  var description = "Create runner group " + name + " in org " + org;
  var body = {
    "name": name,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
    "runners": runners,
    "allows_public_repositories": allows_public_repositories,
    "restricted_to_workflows": restricted_to_workflows,
    "selected_workflows": selected_workflows,
    "network_configuration_id": network_configuration_id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRunnerGroup(org, runner_group_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Get runner group " + runner_group_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRunnerGroup(org, runner_group_id, name, visibility, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Update runner group " + runner_group_id + " in org " + org;
  var body = {
    "name": name,
    "visibility": visibility,
    "allows_public_repositories": allows_public_repositories,
    "restricted_to_workflows": restricted_to_workflows,
    "selected_workflows": selected_workflows,
    "network_configuration_id": network_configuration_id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRunnerGroup(org, runner_group_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id;
  var description = "Delete runner group " + runner_group_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRunnerGroup(org, name, visibility, selected_repository_ids, runners, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id, runner_group_id) {
  return createRunnerGroup(org, name, visibility, selected_repository_ids, runners, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id);
}

function verifyRunnerGroupExists(org, name, visibility, selected_repository_ids, runners, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id, runner_group_id) {
  return getRunnerGroup(org, runner_group_id);
}

function verifyRunnerGroupDoesNotExist(org, name, visibility, selected_repository_ids, runners, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id, runner_group_id) {
  return getRunnerGroup(org, runner_group_id);
}

function tryToDeleteANonExistingRunnerGroup(org, name, visibility, selected_repository_ids, runners, allows_public_repositories, restricted_to_workflows, selected_workflows, network_configuration_id, runner_group_id) {
  return deleteRunnerGroup(org, runner_group_id);
}

// ---- Entity: runner group repository access ----

function addRepoAccessToRunnerGroup(org, runner_group_id, repository_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories/" + repository_id;
  var description = "Add repository " + repository_id + " access to runner group " + runner_group_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeRepoAccessFromRunnerGroup(org, runner_group_id, repository_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories/" + repository_id;
  var description = "Remove repository " + repository_id + " access from runner group " + runner_group_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRunnerGroupRepositoryAccess(org, runner_group_id, repository_id) {
  return addRepoAccessToRunnerGroup(org, runner_group_id, repository_id);
}

function tryToDeleteANonExistingRunnerGroupRepositoryAccess(org, runner_group_id, repository_id) {
  return removeRepoAccessFromRunnerGroup(org, runner_group_id, repository_id);
}

// ---- Entity: runner group repository access list ----

function setRepoAccessToRunnerGroup(org, runner_group_id, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/repositories";
  var description = "Set repository access for runner group " + runner_group_id + " in org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: runner group runner ----

function addRunnerToRunnerGroup(org, runner_group_id, runner_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners/" + runner_id;
  var description = "Add runner " + runner_id + " to runner group " + runner_group_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeRunnerFromRunnerGroup(org, runner_group_id, runner_id) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners/" + runner_id;
  var description = "Remove runner " + runner_id + " from runner group " + runner_group_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRunnerGroupRunner(org, runner_group_id, runner_id) {
  return addRunnerToRunnerGroup(org, runner_group_id, runner_id);
}

function tryToDeleteANonExistingRunnerGroupRunner(org, runner_group_id, runner_id) {
  return removeRunnerFromRunnerGroup(org, runner_group_id, runner_id);
}

// ---- Entity: runner group runners ----

function setRunnersInRunnerGroup(org, runner_group_id, runners) {
  var url = "/orgs/" + org + "/actions/runner-groups/" + runner_group_id + "/runners";
  var description = "Set runners in runner group " + runner_group_id + " in org " + org;
  var body = {
    "runners": runners,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: self-hosted runner ----

function getSelfHostedRunner(org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Get self-hosted runner " + runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSelfHostedRunner(org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id;
  var description = "Delete self-hosted runner " + runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySelfHostedRunnerExists(org, runner_id) {
  return getSelfHostedRunner(org, runner_id);
}

function verifySelfHostedRunnerDoesNotExist(org, runner_id) {
  return getSelfHostedRunner(org, runner_id);
}

function tryToDeleteANonExistingSelfHostedRunner(org, runner_id) {
  return deleteSelfHostedRunner(org, runner_id);
}

// ---- Entity: self-hosted runner label ----

function removeCustomLabelFromSelfHostedRunner(org, runner_id, name) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels/" + name;
  var description = "Remove custom label " + name + " from self-hosted runner " + runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingSelfHostedRunnerLabel(org, runner_id, name) {
  return removeCustomLabelFromSelfHostedRunner(org, runner_id, name);
}

// ---- Entity: self-hosted runner labels ----

function addCustomLabelsToSelfHostedRunner(org, runner_id, labels) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Add custom labels to self-hosted runner " + runner_id + " in org " + org;
  var body = {
    "labels": labels,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listLabelsForSelfHostedRunner(org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "List labels for self-hosted runner " + runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setCustomLabelsForSelfHostedRunner(org, runner_id, labels) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Set custom labels for self-hosted runner " + runner_id + " in org " + org;
  var body = {
    "labels": labels,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAllCustomLabelsFromSelfHostedRunner(org, runner_id) {
  var url = "/orgs/" + org + "/actions/runners/" + runner_id + "/labels";
  var description = "Remove all custom labels from self-hosted runner " + runner_id + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSelfHostedRunnerLabels(org, runner_id, labels) {
  return addCustomLabelsToSelfHostedRunner(org, runner_id, labels);
}

function verifySelfHostedRunnerLabelsExists(org, runner_id, labels) {
  return listLabelsForSelfHostedRunner(org, runner_id);
}

function verifySelfHostedRunnerLabelsDoesNotExist(org, runner_id, labels) {
  return listLabelsForSelfHostedRunner(org, runner_id);
}

function tryToDeleteANonExistingSelfHostedRunnerLabels(org, runner_id, labels) {
  return removeAllCustomLabelsFromSelfHostedRunner(org, runner_id);
}

// ---- Entity: self-hosted runner ----

function listSelfHostedRunners(org, name, per-page, page) {
  var url = "/orgs/" + org + "/actions/runners";
  var description = "List self-hosted runners in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySelfHostedRunnerListExists(org, name, per-page, page) {
  return listSelfHostedRunners(org, name, per-page, page);
}

function verifySelfHostedRunnerListDoesNotExist(org, name, per-page, page) {
  return listSelfHostedRunners(org, name, per-page, page);
}

// ---- Entity: self-hosted runner registration token ----

function createRegistrationToken(org) {
  var url = "/orgs/" + org + "/actions/runners/registration-token";
  var description = "Create registration token for org " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSelfHostedRunnerRegistrationToken(org) {
  return createRegistrationToken(org);
}

// ---- Entity: self-hosted runner remove token ----

function createRemoveToken(org) {
  var url = "/orgs/" + org + "/actions/runners/remove-token";
  var description = "Create remove token for org " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSelfHostedRunnerRemoveToken(org) {
  return createRemoveToken(org);
}

// ---- Entity: self-hosted runner ----

function getSelfHostedRunnerForRepo(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Get self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSelfHostedRunnerFromRepo(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id;
  var description = "Delete self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySelfHostedRunnerRepoExists(owner, repo, runner_id) {
  return getSelfHostedRunnerForRepo(owner, repo, runner_id);
}

function verifySelfHostedRunnerRepoDoesNotExist(owner, repo, runner_id) {
  return getSelfHostedRunnerForRepo(owner, repo, runner_id);
}

function tryToDeleteANonExistingSelfHostedRunnerRepo(owner, repo, runner_id) {
  return deleteSelfHostedRunnerFromRepo(owner, repo, runner_id);
}

// ---- Entity: self-hosted runner labels ----

function addCustomLabelsToSelfHostedRunnerForRepo(owner, repo, runner_id, labels) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Add custom labels to self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = {
    "labels": labels,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listLabelsForSelfHostedRunnerForRepo(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "List labels for self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setCustomLabelsForSelfHostedRunnerForRepo(owner, repo, runner_id, labels) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Set custom labels for self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = {
    "labels": labels,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAllCustomLabelsFromSelfHostedRunnerForRepo(owner, repo, runner_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels";
  var description = "Remove all custom labels from self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSelfHostedRunnerLabelsRepo(owner, repo, runner_id, labels) {
  return addCustomLabelsToSelfHostedRunnerForRepo(owner, repo, runner_id, labels);
}

function verifySelfHostedRunnerLabelsRepoExists(owner, repo, runner_id, labels) {
  return listLabelsForSelfHostedRunnerForRepo(owner, repo, runner_id);
}

function verifySelfHostedRunnerLabelsRepoDoesNotExist(owner, repo, runner_id, labels) {
  return listLabelsForSelfHostedRunnerForRepo(owner, repo, runner_id);
}

function tryToDeleteANonExistingSelfHostedRunnerLabelsRepo(owner, repo, runner_id, labels) {
  return removeAllCustomLabelsFromSelfHostedRunnerForRepo(owner, repo, runner_id);
}

// ---- Entity: self-hosted runner label ----

function removeCustomLabelFromSelfHostedRunnerForRepo(owner, repo, runner_id, name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/" + runner_id + "/labels/" + name;
  var description = "Remove custom label " + name + " from self-hosted runner " + runner_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingSelfHostedRunnerLabelRepo(owner, repo, runner_id, name) {
  return removeCustomLabelFromSelfHostedRunnerForRepo(owner, repo, runner_id, name);
}

// ---- Entity: self-hosted runner ----

function listSelfHostedRunnersForRepo(owner, repo, name, per-page, page) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners";
  var description = "List self-hosted runners in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySelfHostedRunnerListRepoExists(owner, repo, name, per-page, page) {
  return listSelfHostedRunnersForRepo(owner, repo, name, per-page, page);
}

function verifySelfHostedRunnerListRepoDoesNotExist(owner, repo, name, per-page, page) {
  return listSelfHostedRunnersForRepo(owner, repo, name, per-page, page);
}

// ---- Entity: self-hosted runner registration token ----

function createRegistrationTokenForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/registration-token";
  var description = "Create registration token for repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSelfHostedRunnerRegistrationTokenRepo(owner, repo) {
  return createRegistrationTokenForRepo(owner, repo);
}

// ---- Entity: self-hosted runner remove token ----

function createRemoveTokenForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/remove-token";
  var description = "Create remove token for repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSelfHostedRunnerRemoveTokenRepo(owner, repo) {
  return createRemoveTokenForRepo(owner, repo);
}

// ---- Entity: organization secret ----

function getOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Get organization secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateOrgSecret(org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Create or update organization secret " + secret_name + " in org " + org;
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name;
  var description = "Delete organization secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSecret(org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids) {
  return createOrUpdateOrgSecret(org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids);
}

function verifySecretExists(org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids) {
  return getOrgSecret(org, secret_name);
}

function verifySecretDoesNotExist(org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids) {
  return getOrgSecret(org, secret_name);
}

function tryToDeleteANonExistingSecret(org, secret_name, encrypted_value, key_id, visibility, selected_repository_ids) {
  return deleteOrgSecret(org, secret_name);
}

// ---- Entity: organization secret selected repositories ----

function addSelectedRepoToOrgSecret(org, secret_name, repository_id) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to organization secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSelectedRepoFromOrgSecret(org, secret_name, repository_id) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from organization secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSecretSelectedRepos(org, secret_name, repository_id) {
  return addSelectedRepoToOrgSecret(org, secret_name, repository_id);
}

function tryToDeleteANonExistingSecretSelectedRepos(org, secret_name, repository_id) {
  return removeSelectedRepoFromOrgSecret(org, secret_name, repository_id);
}

// ---- Entity: organization secret selected repositories list ----

function setSelectedReposForOrgSecret(org, secret_name, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name + "/repositories";
  var description = "Set selected repositories for organization secret " + secret_name + " in org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSelectedReposForOrgSecret(org, secret_name, page, per-page) {
  var url = "/orgs/" + org + "/actions/secrets/" + secret_name + "/repositories";
  var description = "List selected repositories for organization secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySecretSelectedReposListExists(org, secret_name, selected_repository_ids, page, per-page) {
  return listSelectedReposForOrgSecret(org, secret_name, page, per-page);
}

function verifySecretSelectedReposListDoesNotExist(org, secret_name, selected_repository_ids, page, per-page) {
  return listSelectedReposForOrgSecret(org, secret_name, page, per-page);
}

// ---- Entity: organization variable ----

function getOrgVariable(org, name) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Get organization variable " + name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrgVariable(org, name, value, visibility, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables";
  var description = "Create organization variable " + name + " in org " + org;
  var body = {
    "name": name,
    "value": value,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgVariable(org, name, value, visibility, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Update organization variable " + name + " in org " + org;
  var body = {
    "name": name,
    "value": value,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgVariable(org, name) {
  var url = "/orgs/" + org + "/actions/variables/" + name;
  var description = "Delete organization variable " + name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVariable(org, name, value, visibility, selected_repository_ids) {
  return createOrgVariable(org, name, value, visibility, selected_repository_ids);
}

function verifyVariableExists(org, name, value, visibility, selected_repository_ids) {
  return getOrgVariable(org, name);
}

function verifyVariableDoesNotExist(org, name, value, visibility, selected_repository_ids) {
  return getOrgVariable(org, name);
}

function tryToDeleteANonExistingVariable(org, name, value, visibility, selected_repository_ids) {
  return deleteOrgVariable(org, name);
}

// ---- Entity: organization variable selected repositories ----

function addSelectedRepoToOrgVariable(org, name, repository_id) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to organization variable " + name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSelectedRepoFromOrgVariable(org, name, repository_id) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from organization variable " + name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVariableSelectedRepos(org, name, repository_id) {
  return addSelectedRepoToOrgVariable(org, name, repository_id);
}

function tryToDeleteANonExistingVariableSelectedRepos(org, name, repository_id) {
  return removeSelectedRepoFromOrgVariable(org, name, repository_id);
}

// ---- Entity: organization variable selected repositories list ----

function setSelectedReposForOrgVariable(org, name, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories";
  var description = "Set selected repositories for organization variable " + name + " in org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSelectedReposForOrgVariable(org, name, page, per-page) {
  var url = "/orgs/" + org + "/actions/variables/" + name + "/repositories";
  var description = "List selected repositories for organization variable " + name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyVariableSelectedReposListExists(org, name, selected_repository_ids, page, per-page) {
  return listSelectedReposForOrgVariable(org, name, page, per-page);
}

function verifyVariableSelectedReposListDoesNotExist(org, name, selected_repository_ids, page, per-page) {
  return listSelectedReposForOrgVariable(org, name, page, per-page);
}

// ---- Entity: repository variable ----

function getRepoVariable(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Get repository variable " + name + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createRepoVariable(owner, repo, name, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables";
  var description = "Create repository variable " + name + " in repo " + owner + "/" + repo;
  var body = {
    "name": name,
    "value": value,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepoVariable(owner, repo, name, value) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Update repository variable " + name + " in repo " + owner + "/" + repo;
  var body = {
    "name": name,
    "value": value,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoVariable(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + name;
  var description = "Delete repository variable " + name + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingVariableRepo(owner, repo, name, value) {
  return createRepoVariable(owner, repo, name, value);
}

function verifyVariableRepoExists(owner, repo, name, value) {
  return getRepoVariable(owner, repo, name);
}

function verifyVariableRepoDoesNotExist(owner, repo, name, value) {
  return getRepoVariable(owner, repo, name);
}

function tryToDeleteANonExistingVariableRepo(owner, repo, name, value) {
  return deleteRepoVariable(owner, repo, name);
}

// ---- Entity: repository secret ----

function getRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Get repository secret " + secret_name + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateRepoSecret(owner, repo, secret_name, encrypted_value, key_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Create or update repository secret " + secret_name + " in repo " + owner + "/" + repo;
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secret_name;
  var description = "Delete repository secret " + secret_name + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSecretRepo(owner, repo, secret_name, encrypted_value, key_id) {
  return createOrUpdateRepoSecret(owner, repo, secret_name, encrypted_value, key_id);
}

function verifySecretRepoExists(owner, repo, secret_name, encrypted_value, key_id) {
  return getRepoSecret(owner, repo, secret_name);
}

function verifySecretRepoDoesNotExist(owner, repo, secret_name, encrypted_value, key_id) {
  return getRepoSecret(owner, repo, secret_name);
}

function tryToDeleteANonExistingSecretRepo(owner, repo, secret_name, encrypted_value, key_id) {
  return deleteRepoSecret(owner, repo, secret_name);
}

// ---- Entity: workflow ----

function getWorkflow(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id;
  var description = "Get workflow " + workflow_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function enableWorkflow(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id + "/enable";
  var description = "Enable workflow " + workflow_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function disableWorkflow(owner, repo, workflow_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id + "/disable";
  var description = "Disable workflow " + workflow_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createWorkflowDispatch(owner, repo, workflow_id, ref, inputs) {
  var url = "/repos/" + owner + "/" + repo + "/actions/workflows/" + workflow_id + "/dispatches";
  var description = "Create workflow dispatch for workflow " + workflow_id + " in repo " + owner + "/" + repo;
  var body = {
    "ref": ref,
    "inputs": inputs,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowExists(owner, repo, workflow_id, ref, inputs) {
  return getWorkflow(owner, repo, workflow_id);
}

function verifyWorkflowDoesNotExist(owner, repo, workflow_id, ref, inputs) {
  return getWorkflow(owner, repo, workflow_id);
}

// ---- Entity: workflow run ----

function getWorkflowRun(owner, repo, run_id, exclude_pull_requests) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Get workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id;
  var description = "Delete workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function approveWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approve";
  var description = "Approve workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/cancel";
  var description = "Cancel workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function forceCancelWorkflowRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/force-cancel";
  var description = "Force cancel workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function rerunWorkflow(owner, repo, run_id, enable_debug_logging) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/rerun";
  var description = "Re-run workflow " + run_id + " in repo " + owner + "/" + repo;
  var body = {
    "enable_debug_logging": enable_debug_logging,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function rerunWorkflowFailedJobs(owner, repo, run_id, enable_debug_logging) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/rerun-failed-jobs";
  var description = "Re-run failed jobs for workflow " + run_id + " in repo " + owner + "/" + repo;
  var body = {
    "enable_debug_logging": enable_debug_logging,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunExists(owner, repo, run_id, exclude_pull_requests, enable_debug_logging) {
  return getWorkflowRun(owner, repo, run_id, exclude_pull_requests);
}

function verifyWorkflowRunDoesNotExist(owner, repo, run_id, exclude_pull_requests, enable_debug_logging) {
  return getWorkflowRun(owner, repo, run_id, exclude_pull_requests);
}

function tryToDeleteANonExistingWorkflowRun(owner, repo, run_id, exclude_pull_requests, enable_debug_logging) {
  return deleteWorkflowRun(owner, repo, run_id);
}

// ---- Entity: workflow run attempt ----

function getWorkflowRunAttempt(owner, repo, run_id, attempt_number, exclude_pull_requests) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number;
  var description = "Get workflow run attempt " + attempt_number + " for run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunAttemptExists(owner, repo, run_id, attempt_number, exclude_pull_requests) {
  return getWorkflowRunAttempt(owner, repo, run_id, attempt_number, exclude_pull_requests);
}

function verifyWorkflowRunAttemptDoesNotExist(owner, repo, run_id, attempt_number, exclude_pull_requests) {
  return getWorkflowRunAttempt(owner, repo, run_id, attempt_number, exclude_pull_requests);
}

// ---- Entity: workflow run attempt jobs ----

function listJobsForWorkflowRunAttempt(owner, repo, run_id, attempt_number, per-page, page) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/jobs";
  var description = "List jobs for workflow run attempt " + attempt_number + " for run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunAttemptJobsExists(owner, repo, run_id, attempt_number, per-page, page) {
  return listJobsForWorkflowRunAttempt(owner, repo, run_id, attempt_number, per-page, page);
}

function verifyWorkflowRunAttemptJobsDoesNotExist(owner, repo, run_id, attempt_number, per-page, page) {
  return listJobsForWorkflowRunAttempt(owner, repo, run_id, attempt_number, per-page, page);
}

// ---- Entity: workflow run attempt logs ----

function downloadWorkflowRunAttemptLogs(owner, repo, run_id, attempt_number) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/attempts/" + attempt_number + "/logs";
  var description = "Download logs for workflow run attempt " + attempt_number + " for run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunAttemptLogsExists(owner, repo, run_id, attempt_number) {
  return downloadWorkflowRunAttemptLogs(owner, repo, run_id, attempt_number);
}

function verifyWorkflowRunAttemptLogsDoesNotExist(owner, repo, run_id, attempt_number) {
  return downloadWorkflowRunAttemptLogs(owner, repo, run_id, attempt_number);
}

// ---- Entity: workflow run jobs ----

function listJobsForWorkflowRun(owner, repo, run_id, filter, per-page, page) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/jobs";
  var description = "List jobs for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunJobsExists(owner, repo, run_id, filter, per-page, page) {
  return listJobsForWorkflowRun(owner, repo, run_id, filter, per-page, page);
}

function verifyWorkflowRunJobsDoesNotExist(owner, repo, run_id, filter, per-page, page) {
  return listJobsForWorkflowRun(owner, repo, run_id, filter, per-page, page);
}

// ---- Entity: workflow run logs ----

function downloadWorkflowRunLogs(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Download logs for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWorkflowRunLogs(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/logs";
  var description = "Delete logs for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunLogsExists(owner, repo, run_id) {
  return downloadWorkflowRunLogs(owner, repo, run_id);
}

function verifyWorkflowRunLogsDoesNotExist(owner, repo, run_id) {
  return downloadWorkflowRunLogs(owner, repo, run_id);
}

function tryToDeleteANonExistingWorkflowRunLogs(owner, repo, run_id) {
  return deleteWorkflowRunLogs(owner, repo, run_id);
}

// ---- Entity: workflow run artifacts ----

function listWorkflowRunArtifacts(owner, repo, run_id, per-page, page, artifact-name) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/artifacts";
  var description = "List artifacts for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunArtifactsExists(owner, repo, run_id, per-page, page, artifact-name) {
  return listWorkflowRunArtifacts(owner, repo, run_id, per-page, page, artifact-name);
}

function verifyWorkflowRunArtifactsDoesNotExist(owner, repo, run_id, per-page, page, artifact-name) {
  return listWorkflowRunArtifacts(owner, repo, run_id, per-page, page, artifact-name);
}

// ---- Entity: workflow run approvals ----

function getReviewsForRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/approvals";
  var description = "Get review history for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunApprovalsExists(owner, repo, run_id) {
  return getReviewsForRun(owner, repo, run_id);
}

function verifyWorkflowRunApprovalsDoesNotExist(owner, repo, run_id) {
  return getReviewsForRun(owner, repo, run_id);
}

// ---- Entity: workflow run pending deployments ----

function getPendingDeploymentsForRun(owner, repo, run_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Get pending deployments for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function reviewPendingDeploymentsForRun(owner, repo, run_id, environment_ids, state, comment) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runs/" + run_id + "/pending_deployments";
  var description = "Review pending deployments for workflow run " + run_id + " in repo " + owner + "/" + repo;
  var body = {
    "environment_ids": environment_ids,
    "state": state,
    "comment": comment,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWorkflowRunPendingDeploymentsExists(owner, repo, run_id, environment_ids, state, comment) {
  return getPendingDeploymentsForRun(owner, repo, run_id);
}

function verifyWorkflowRunPendingDeploymentsDoesNotExist(owner, repo, run_id, environment_ids, state, comment) {
  return getPendingDeploymentsForRun(owner, repo, run_id);
}

// ---- Entity: job ----

function getJob(owner, repo, job_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id;
  var description = "Get job " + job_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function rerunJob(owner, repo, job_id, enable_debug_logging) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id + "/rerun";
  var description = "Re-run job " + job_id + " in repo " + owner + "/" + repo;
  var body = {
    "enable_debug_logging": enable_debug_logging,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyJobExists(owner, repo, job_id, enable_debug_logging) {
  return getJob(owner, repo, job_id);
}

function verifyJobDoesNotExist(owner, repo, job_id, enable_debug_logging) {
  return getJob(owner, repo, job_id);
}

// ---- Entity: job logs ----

function downloadJobLogs(owner, repo, job_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/jobs/" + job_id + "/logs";
  var description = "Download logs for job " + job_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyJobLogsExists(owner, repo, job_id) {
  return downloadJobLogs(owner, repo, job_id);
}

function verifyJobLogsDoesNotExist(owner, repo, job_id) {
  return downloadJobLogs(owner, repo, job_id);
}

// ---- Entity: artifact ----

function getArtifact(owner, repo, artifact_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Get artifact " + artifact_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteArtifact(owner, repo, artifact_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id;
  var description = "Delete artifact " + artifact_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyArtifactExists(owner, repo, artifact_id) {
  return getArtifact(owner, repo, artifact_id);
}

function verifyArtifactDoesNotExist(owner, repo, artifact_id) {
  return getArtifact(owner, repo, artifact_id);
}

function tryToDeleteANonExistingArtifact(owner, repo, artifact_id) {
  return deleteArtifact(owner, repo, artifact_id);
}

// ---- Entity: artifact download ----

function downloadArtifact(owner, repo, artifact_id, archive_format) {
  var url = "/repos/" + owner + "/" + repo + "/actions/artifacts/" + artifact_id + "/" + archive_format;
  var description = "Download artifact " + artifact_id + " with format " + archive_format + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyArtifactDownloadExists(owner, repo, artifact_id, archive_format) {
  return downloadArtifact(owner, repo, artifact_id, archive_format);
}

function verifyArtifactDownloadDoesNotExist(owner, repo, artifact_id, archive_format) {
  return downloadArtifact(owner, repo, artifact_id, archive_format);
}

// ---- Entity: cache ----

function deleteCacheById(owner, repo, cache_id) {
  var url = "/repos/" + owner + "/" + repo + "/actions/caches/" + cache_id;
  var description = "Delete cache " + cache_id + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingCache(owner, repo, cache_id) {
  return deleteCacheById(owner, repo, cache_id);
}

// ---- Entity: cache by key ----

function deleteCacheByKey(owner, repo, actions_cache_key, actions_cache_git_ref_full) {
  var url = "/repos/" + owner + "/" + repo + "/actions/caches";
  var description = "Delete cache by key " + actions_cache_key + " in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingCacheByKey(owner, repo, actions_cache_key, actions_cache_git_ref_full) {
  return deleteCacheByKey(owner, repo, actions_cache_key, actions_cache_git_ref_full);
}

// ---- Entity: cache list ----

function listCaches(owner, repo, per-page, page, actions_cache_git_ref_full, actions_cache_key, actions_cache_list_sort, direction) {
  var url = "/repos/" + owner + "/" + repo + "/actions/caches";
  var description = "List caches in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCacheListExists(owner, repo, per-page, page, actions_cache_git_ref_full, actions_cache_key, actions_cache_list_sort, direction) {
  return listCaches(owner, repo, per-page, page, actions_cache_git_ref_full, actions_cache_key, actions_cache_list_sort, direction);
}

function verifyCacheListDoesNotExist(owner, repo, per-page, page, actions_cache_git_ref_full, actions_cache_key, actions_cache_list_sort, direction) {
  return listCaches(owner, repo, per-page, page, actions_cache_git_ref_full, actions_cache_key, actions_cache_list_sort, direction);
}

// ---- Entity: cache usage ----

function getCacheUsage(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/cache/usage";
  var description = "Get cache usage in repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCacheUsageExists(owner, repo) {
  return getCacheUsage(owner, repo);
}

function verifyCacheUsageDoesNotExist(owner, repo) {
  return getCacheUsage(owner, repo);
}

// ---- Entity: cache usage org ----

function getCacheUsageForOrg(org) {
  var url = "/orgs/" + org + "/actions/cache/usage";
  var description = "Get cache usage for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCacheUsageOrgExists(org) {
  return getCacheUsageForOrg(org);
}

function verifyCacheUsageOrgDoesNotExist(org) {
  return getCacheUsageForOrg(org);
}

// ---- Entity: cache usage by repository org ----

function getCacheUsageByRepoForOrg(org, per-page, page) {
  var url = "/orgs/" + org + "/actions/cache/usage-by-repository";
  var description = "List repositories with cache usage for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCacheUsageByRepoOrgExists(org, per-page, page) {
  return getCacheUsageByRepoForOrg(org, per-page, page);
}

function verifyCacheUsageByRepoOrgDoesNotExist(org, per-page, page) {
  return getCacheUsageByRepoForOrg(org, per-page, page);
}

// ---- Entity: organization permission ----

function getOrgPermissions(org) {
  var url = "/orgs/" + org + "/actions/permissions";
  var description = "Get GitHub Actions permissions for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setOrgPermissions(org, enabled_repositories, allowed_actions, sha_pinning_required) {
  var url = "/orgs/" + org + "/actions/permissions";
  var description = "Set GitHub Actions permissions for org " + org;
  var body = {
    "enabled_repositories": enabled_repositories,
    "allowed_actions": allowed_actions,
    "sha_pinning_required": sha_pinning_required,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPermissionOrgExists(org, enabled_repositories, allowed_actions, sha_pinning_required) {
  return getOrgPermissions(org);
}

function verifyPermissionOrgDoesNotExist(org, enabled_repositories, allowed_actions, sha_pinning_required) {
  return getOrgPermissions(org);
}

// ---- Entity: repository permission ----

function getRepoPermissions(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions";
  var description = "Get GitHub Actions permissions for repo " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setRepoPermissions(owner, repo, enabled, allowed_actions, sha_pinning_required) {
  var url = "/repos/" + owner + "/" + repo + "/actions/permissions";
  var description = "Set GitHub Actions permissions for repo " + owner + "/" + repo;
  var body = {
    "enabled": enabled,
    "allowed_actions": allowed_actions,
    "sha_pinning_required": sha_pinning_required,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPermissionRepoExists(owner, repo, enabled, allowed_actions, sha_pinning_required) {
  return getRepoPermissions(owner, repo);
}

function verifyPermissionRepoDoesNotExist(owner, repo, enabled, allowed_actions, sha_pinning_required) {
  return getRepoPermissions(owner, repo);
}

// ---- Entity: organization selected repository permission ----

function listSelectedRepositoriesEnabledForOrg(org, per-page, page) {
  var url = "/orgs/" + org + "/actions/permissions/repositories";
  var description = "List selected repositories enabled for GitHub Actions in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setSelectedRepositoriesEnabledForOrg(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/repositories";
  var description = "Set selected repositories enabled for GitHub Actions in org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPermissionSelectedRepositoriesExists(org, per-page, page, selected_repository_ids) {
  return listSelectedRepositoriesEnabledForOrg(org, per-page, page);
}

function verifyPermissionSelectedRepositoriesDoesNotExist(org, per-page, page, selected_repository_ids) {
  return listSelectedRepositoriesEnabledForOrg(org, per-page, page);
}

// ---- Entity: organization selected repository permission ----

function enableSelectedRepositoryForOrg(org, repository_id) {
  var url = "/orgs/" + org + "/actions/permissions/repositories/" + repository_id;
  var description = "Enable selected repository " + repository_id + " for GitHub Actions in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function disableSelectedRepositoryForOrg(org, repository_id) {
  var url = "/orgs/" + org + "/actions/permissions/repositories/" + repository_id;
  var description = "Disable selected repository " + repository_id + " for GitHub Actions in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPermissionSelectedRepository(org, repository_id) {
  return enableSelectedRepositoryForOrg(org, repository_id);
}

function tryToDeleteANonExistingPermissionSelectedRepository(org, repository_id) {
  return disableSelectedRepositoryForOrg(org, repository_id);
}

// ---- Entity: organization self-hosted runners permission ----

function getSelfHostedRunnersPermissionsForOrg(org) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners";
  var description = "Get self-hosted runners permissions for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setSelfHostedRunnersPermissionsForOrg(org, enabled_repositories) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners";
  var description = "Set self-hosted runners permissions for org " + org;
  var body = {
    "enabled_repositories": enabled_repositories,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPermissionSelfHostedRunnersExists(org, enabled_repositories) {
  return getSelfHostedRunnersPermissionsForOrg(org);
}

function verifyPermissionSelfHostedRunnersDoesNotExist(org, enabled_repositories) {
  return getSelfHostedRunnersPermissionsForOrg(org);
}

// ---- Entity: organization self-hosted runners repositories ----

function listSelectedRepositoriesSelfHostedRunnersForOrg(org, per-page, page) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories";
  var description = "List repositories allowed to use self-hosted runners in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setSelectedRepositoriesSelfHostedRunnersForOrg(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories";
  var description = "Set repositories allowed to use self-hosted runners in org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPermissionSelfHostedRunnersRepositoriesExists(org, per-page, page, selected_repository_ids) {
  return listSelectedRepositoriesSelfHostedRunnersForOrg(org, per-page, page);
}

function verifyPermissionSelfHostedRunnersRepositoriesDoesNotExist(org, per-page, page, selected_repository_ids) {
  return listSelectedRepositoriesSelfHostedRunnersForOrg(org, per-page, page);
}

// ---- Entity: organization self-hosted runners repository ----

function enableSelectedRepositorySelfHostedRunnersForOrg(org, repository_id) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories/" + repository_id;
  var description = "Add repository " + repository_id + " to allowed self-hosted runners in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function disableSelectedRepositorySelfHostedRunnersForOrg(org, repository_id) {
  var url = "/orgs/" + org + "/actions/permissions/self-hosted-runners/repositories/" + repository_id;
  var description = "Remove repository " + repository_id + " from allowed self-hosted runners in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPermissionSelfHostedRunnersRepository(org, repository_id) {
  return enableSelectedRepositorySelfHostedRunnersForOrg(org, repository_id);
}

function tryToDeleteANonExistingPermissionSelfHostedRunnersRepository(org, repository_id) {
  return disableSelectedRepositorySelfHostedRunnersForOrg(org, repository_id);
}

// ---- Entity: organization ----

function getOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Get organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Update organization " + org;
  var body = {
    "billing_email": billing_email,
    "company": company,
    "email": email,
    "twitter_username": twitter_username,
    "location": location,
    "name": name,
    "description": description,
    "has_organization_projects": has_organization_projects,
    "has_repository_projects": has_repository_projects,
    "default_repository_permission": default_repository_permission,
    "members_can_create_repositories": members_can_create_repositories,
    "members_can_create_internal_repositories": members_can_create_internal_repositories,
    "members_can_create_private_repositories": members_can_create_private_repositories,
    "members_can_create_public_repositories": members_can_create_public_repositories,
    "members_allowed_repository_creation_type": members_allowed_repository_creation_type,
    "members_can_create_pages": members_can_create_pages,
    "members_can_create_public_pages": members_can_create_public_pages,
    "members_can_create_private_pages": members_can_create_private_pages,
    "members_can_fork_private_repositories": members_can_fork_private_repositories,
    "web_commit_signoff_required": web_commit_signoff_required,
    "blog": blog,
    "advanced_security_enabled_for_new_repositories": advanced_security_enabled_for_new_repositories,
    "dependabot_alerts_enabled_for_new_repositories": dependabot_alerts_enabled_for_new_repositories,
    "dependabot_security_updates_enabled_for_new_repositories": dependabot_security_updates_enabled_for_new_repositories,
    "dependency_graph_enabled_for_new_repositories": dependency_graph_enabled_for_new_repositories,
    "secret_scanning_enabled_for_new_repositories": secret_scanning_enabled_for_new_repositories,
    "secret_scanning_push_protection_enabled_for_new_repositories": secret_scanning_push_protection_enabled_for_new_repositories,
    "secret_scanning_push_protection_custom_link_enabled": secret_scanning_push_protection_custom_link_enabled,
    "secret_scanning_push_protection_custom_link": secret_scanning_push_protection_custom_link,
    "deploy_keys_enabled_for_repositories": deploy_keys_enabled_for_repositories,
  };
  return svc.request({
    method: "PATCH",
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

function verifyOrganizationExists(org) {
  return getOrganization(org);
}

function verifyOrganizationDoesNotExist(org) {
  return getOrganization(org);
}

function tryToDeleteANonExistingOrganization(org) {
  return deleteOrganization(org);
}

// ---- Entity: artifact storage record ----

function createArtifactStorageRecord(org, name) {
  var url = "/orgs/" + org + "/artifacts/metadata/storage-record";
  var description = "Create artifact storage record " + name + " in " + org;
  var body = {
    "name": name,
    "digest": digest,
    "artifact_url": artifact_url,
    "path": path,
    "registry_url": registry_url,
    "repository": repository,
    "status": status,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingArtifactStorageRecord(org, name) {
  return createArtifactStorageRecord(org, name);
}

// ---- Entity: artifact storage records ----

function listArtifactStorageRecords(org, subject_digest) {
  var url = "/orgs/" + org + "/artifacts/" + subject_digest + "/metadata/storage-records";
  var description = "List artifact storage records for subject digest " + subject_digest + " in " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyArtifactStorageRecordsExists(org, subject_digest) {
  return listArtifactStorageRecords(org, subject_digest);
}

function verifyArtifactStorageRecordsDoesNotExist(org, subject_digest) {
  return listArtifactStorageRecords(org, subject_digest);
}

// ---- Entity: attestation ----

function deleteAttestationById(org, attestation_id) {
  var url = "/orgs/" + org + "/attestations/" + attestation_id;
  var description = "Delete attestation " + attestation_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingAttestationById(org, attestation_id) {
  return deleteAttestationById(org, attestation_id);
}

// ---- Entity: attestations bulk ----

function listAttestationsBulk(org) {
  var url = "/orgs/" + org + "/attestations/bulk-list";
  var description = "List attestations by bulk subject digests in " + org;
  var body = {
    "subject_digests": subject_digests,
    "predicate_type": predicate_type,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAttestationsBulk(org) {
  var url = "/orgs/" + org + "/attestations/delete-request";
  var description = "Delete attestations in bulk in " + org;
  var body = {
    "subject_digests": subject_digests,
    "attestation_ids": attestation_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: blocked user ----

function checkBlockedUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if user " + username + " is blocked by organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function blockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block user " + username + " from organization " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unblockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock user " + username + " from organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBlockedUser(org, username) {
  return blockUser(org, username);
}

function verifyBlockedUserExists(org, username) {
  return checkBlockedUser(org, username);
}

function verifyBlockedUserDoesNotExist(org, username) {
  return checkBlockedUser(org, username);
}

function tryToDeleteANonExistingBlockedUser(org, username) {
  return unblockUser(org, username);
}

// ---- Entity: invitation teams ----

function listInvitationTeams(org, invitation_id) {
  var url = "/orgs/" + org + "/invitations/" + invitation_id + "/teams";
  var description = "List teams for invitation " + invitation_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyInvitationTeamsExists(org, invitation_id) {
  return listInvitationTeams(org, invitation_id);
}

function verifyInvitationTeamsDoesNotExist(org, invitation_id) {
  return listInvitationTeams(org, invitation_id);
}

// ---- Entity: issue type ----

function createIssueType(org) {
  var url = "/orgs/" + org + "/issue-types";
  var description = "Create issue type in organization " + org;
  var body = {
    "name": name,
    "description": description,
    "is_enabled": is_enabled,
    "color": color,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueType(org, issue_type_id) {
  var url = "/orgs/" + org + "/issue-types/" + issue_type_id;
  var description = "Update issue type " + issue_type_id + " in organization " + org;
  var body = {
    "name": name,
    "description": description,
    "is_enabled": is_enabled,
    "color": color,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssueType(org, issue_type_id) {
  var url = "/orgs/" + org + "/issue-types/" + issue_type_id;
  var description = "Delete issue type " + issue_type_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueType(org, issue_type_id) {
  return createIssueType(org);
}

function tryToDeleteANonExistingIssueType(org, issue_type_id) {
  return deleteIssueType(org, issue_type_id);
}

// ---- Entity: member ----

function checkMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check membership for user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeMember(org, username) {
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

function verifyMemberExists(org, username) {
  return checkMembershipForUser(org, username);
}

function verifyMemberDoesNotExist(org, username) {
  return checkMembershipForUser(org, username);
}

function tryToDeleteANonExistingMember(org, username) {
  return removeMember(org, username);
}

// ---- Entity: membership ----

function getMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/memberships/" + username;
  var description = "Get membership for user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/memberships/" + username;
  var description = "Set membership for user " + username + " in organization " + org;
  var body = {
    "role": role,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/memberships/" + username;
  var description = "Remove membership for user " + username + " from organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMembership(org, username) {
  return setMembershipForUser(org, username);
}

function verifyMembershipExists(org, username) {
  return getMembershipForUser(org, username);
}

function verifyMembershipDoesNotExist(org, username) {
  return getMembershipForUser(org, username);
}

function tryToDeleteANonExistingMembership(org, username) {
  return removeMembershipForUser(org, username);
}

// ---- Entity: organization role ----

function getOrganizationRole(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id;
  var description = "Get organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationRoleExists(org, role_id) {
  return getOrganizationRole(org, role_id);
}

function verifyOrganizationRoleDoesNotExist(org, role_id) {
  return getOrganizationRole(org, role_id);
}

// ---- Entity: organization role team ----

function assignTeamToOrganizationRole(org, team_slug, role_id) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug + "/" + role_id;
  var description = "Assign team " + team_slug + " to organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeTeamFromOrganizationRole(org, team_slug, role_id) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug + "/" + role_id;
  var description = "Remove team " + team_slug + " from organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganizationRoleTeam(org, team_slug, role_id) {
  return assignTeamToOrganizationRole(org, team_slug, role_id);
}

function tryToDeleteANonExistingOrganizationRoleTeam(org, team_slug, role_id) {
  return removeTeamFromOrganizationRole(org, team_slug, role_id);
}

// ---- Entity: organization role team ----

function removeAllOrganizationRolesForTeam(org, team_slug) {
  var url = "/orgs/" + org + "/organization-roles/teams/" + team_slug;
  var description = "Remove all organization roles for team " + team_slug + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrganizationRoleTeamAll(org, team_slug) {
  return removeAllOrganizationRolesForTeam(org, team_slug);
}

// ---- Entity: organization role user ----

function assignUserToOrganizationRole(org, username, role_id) {
  var url = "/orgs/" + org + "/organization-roles/users/" + username + "/" + role_id;
  var description = "Assign user " + username + " to organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeUserFromOrganizationRole(org, username, role_id) {
  var url = "/orgs/" + org + "/organization-roles/users/" + username + "/" + role_id;
  var description = "Remove user " + username + " from organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganizationRoleUser(org, username, role_id) {
  return assignUserToOrganizationRole(org, username, role_id);
}

function tryToDeleteANonExistingOrganizationRoleUser(org, username, role_id) {
  return removeUserFromOrganizationRole(org, username, role_id);
}

// ---- Entity: organization role user ----

function removeAllOrganizationRolesForUser(org, username) {
  var url = "/orgs/" + org + "/organization-roles/users/" + username;
  var description = "Remove all organization roles for user " + username + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrganizationRoleUserAll(org, username) {
  return removeAllOrganizationRolesForUser(org, username);
}

// ---- Entity: organization role teams ----

function listOrganizationRoleTeams(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/teams";
  var description = "List teams assigned to organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationRoleTeamsListExists(org, role_id) {
  return listOrganizationRoleTeams(org, role_id);
}

function verifyOrganizationRoleTeamsListDoesNotExist(org, role_id) {
  return listOrganizationRoleTeams(org, role_id);
}

// ---- Entity: organization role users ----

function listOrganizationRoleUsers(org, role_id) {
  var url = "/orgs/" + org + "/organization-roles/" + role_id + "/users";
  var description = "List users assigned to organization role " + role_id + " in " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationRoleUsersListExists(org, role_id) {
  return listOrganizationRoleUsers(org, role_id);
}

function verifyOrganizationRoleUsersListDoesNotExist(org, role_id) {
  return listOrganizationRoleUsers(org, role_id);
}

// ---- Entity: outside collaborator ----

function convertMemberToOutsideCollaborator(org, username) {
  var url = "/orgs/" + org + "/outside_collaborators/" + username;
  var description = "Convert member " + username + " to outside collaborator in " + org;
  var body = {
    "async": async,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeOutsideCollaborator(org, username) {
  var url = "/orgs/" + org + "/outside_collaborators/" + username;
  var description = "Remove outside collaborator " + username + " from " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOutsideCollaborator(org, username) {
  return convertMemberToOutsideCollaborator(org, username);
}

function tryToDeleteANonExistingOutsideCollaborator(org, username) {
  return removeOutsideCollaborator(org, username);
}

// ---- Entity: webhook deliveries ----

function listWebhookDeliveries(org, hook_id) {
  var url = "/orgs/" + org + "/hooks/" + hook_id + "/deliveries";
  var description = "List webhook deliveries for webhook " + hook_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWebhookDeliveriesExists(org, hook_id) {
  return listWebhookDeliveries(org, hook_id);
}

function verifyWebhookDeliveriesDoesNotExist(org, hook_id) {
  return listWebhookDeliveries(org, hook_id);
}

// ---- Entity: custom property ----

function getCustomProperty(org, custom_property_name) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Get custom property " + custom_property_name + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateCustomProperty(org, custom_property_name) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Create or update custom property " + custom_property_name + " in organization " + org;
  var body = {
    "value_type": value_type,
    "required": required,
    "default_value": default_value,
    "description": description,
    "allowed_values": allowed_values,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomProperty(org, custom_property_name) {
  var url = "/orgs/" + org + "/properties/schema/" + custom_property_name;
  var description = "Delete custom property " + custom_property_name + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomProperty(org, custom_property_name) {
  return createOrUpdateCustomProperty(org, custom_property_name);
}

function verifyCustomPropertyExists(org, custom_property_name) {
  return getCustomProperty(org, custom_property_name);
}

function verifyCustomPropertyDoesNotExist(org, custom_property_name) {
  return getCustomProperty(org, custom_property_name);
}

function tryToDeleteANonExistingCustomProperty(org, custom_property_name) {
  return deleteCustomProperty(org, custom_property_name);
}

// ---- Entity: custom property schema ----

function listCustomProperties(org) {
  var url = "/orgs/" + org + "/properties/schema";
  var description = "List custom properties in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateCustomProperties(org) {
  var url = "/orgs/" + org + "/properties/schema";
  var description = "Create or update custom properties in organization " + org;
  var body = {
    "properties": properties,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCustomPropertySchemaExists(org) {
  return listCustomProperties(org);
}

function verifyCustomPropertySchemaDoesNotExist(org) {
  return listCustomProperties(org);
}

// ---- Entity: custom property value ----

function listCustomPropertyValues(org) {
  var url = "/orgs/" + org + "/properties/values";
  var description = "List custom property values for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateCustomPropertyValues(org) {
  var url = "/orgs/" + org + "/properties/values";
  var description = "Create or update custom property values for organization " + org;
  var body = {
    "repository_names": repository_names,
    "properties": properties,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCustomPropertyValueExists(org) {
  return listCustomPropertyValues(org);
}

function verifyCustomPropertyValueDoesNotExist(org) {
  return listCustomPropertyValues(org);
}

// ---- Entity: public member ----

function checkPublicMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check public membership for user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setPublicMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Set public membership for user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removePublicMembershipForUser(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Remove public membership for user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPublicMember(org, username) {
  return setPublicMembershipForUser(org, username);
}

function verifyPublicMemberExists(org, username) {
  return checkPublicMembershipForUser(org, username);
}

function verifyPublicMemberDoesNotExist(org, username) {
  return checkPublicMembershipForUser(org, username);
}

function tryToDeleteANonExistingPublicMember(org, username) {
  return removePublicMembershipForUser(org, username);
}

// ---- Entity: security manager team ----

function addSecurityManagerTeam(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers/teams/" + team_slug;
  var description = "Add security manager team " + team_slug + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSecurityManagerTeam(org, team_slug) {
  var url = "/orgs/" + org + "/security-managers/teams/" + team_slug;
  var description = "Remove security manager team " + team_slug + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSecurityManagerTeam(org, team_slug) {
  return addSecurityManagerTeam(org, team_slug);
}

function tryToDeleteANonExistingSecurityManagerTeam(org, team_slug) {
  return removeSecurityManagerTeam(org, team_slug);
}

// ---- Entity: immutable releases setting ----

function getImmutableReleasesSettings(org) {
  var url = "/orgs/" + org + "/settings/immutable-releases";
  var description = "Get immutable releases settings for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setImmutableReleasesSettings(org) {
  var url = "/orgs/" + org + "/settings/immutable-releases";
  var description = "Set immutable releases settings for organization " + org;
  var body = {
    "enforced_repositories": enforced_repositories,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyImmutableReleaseSettingExists(org) {
  return getImmutableReleasesSettings(org);
}

function verifyImmutableReleaseSettingDoesNotExist(org) {
  return getImmutableReleasesSettings(org);
}

// ---- Entity: immutable releases repository ----

function enableSelectedRepositoryImmutableReleases(org, repository_id) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories/" + repository_id;
  var description = "Enable immutable releases for repository " + repository_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function disableSelectedRepositoryImmutableReleases(org, repository_id) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories/" + repository_id;
  var description = "Disable immutable releases for repository " + repository_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingImmutableReleaseRepository(org, repository_id) {
  return enableSelectedRepositoryImmutableReleases(org, repository_id);
}

function tryToDeleteANonExistingImmutableReleaseRepository(org, repository_id) {
  return disableSelectedRepositoryImmutableReleases(org, repository_id);
}

// ---- Entity: immutable releases repositories ----

function listImmutableReleasesSettingsRepositories(org) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories";
  var description = "List selected repositories for immutable releases enforcement in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setImmutableReleasesSettingsRepositories(org) {
  var url = "/orgs/" + org + "/settings/immutable-releases/repositories";
  var description = "Set selected repositories for immutable releases enforcement in organization " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyImmutableReleaseRepositoriesExists(org) {
  return listImmutableReleasesSettingsRepositories(org);
}

function verifyImmutableReleaseRepositoriesDoesNotExist(org) {
  return listImmutableReleasesSettingsRepositories(org);
}

// ---- Entity: personal access token request ----

function reviewPatGrantRequest(org, pat_request_id) {
  var url = "/orgs/" + org + "/personal-access-token-requests/" + pat_request_id;
  var description = "Review personal access token request " + pat_request_id + " in organization " + org;
  var body = {
    "action": action,
    "reason": reason,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: personal access token requests ----

function listPatGrantRequests(org) {
  var url = "/orgs/" + org + "/personal-access-token-requests";
  var description = "List personal access token requests in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function reviewPatGrantRequestsInBulk(org) {
  var url = "/orgs/" + org + "/personal-access-token-requests";
  var description = "Review personal access token requests in bulk in organization " + org;
  var body = {
    "pat_request_ids": pat_request_ids,
    "action": action,
    "reason": reason,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: personal access token request repositories ----

function listPatGrantRequestRepositories(org, pat_request_id) {
  var url = "/orgs/" + org + "/personal-access-token-requests/" + pat_request_id + "/repositories";
  var description = "List repositories requested by personal access token request " + pat_request_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: personal access token ----

function listPatGrants(org) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "List personal access tokens in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePatAccesses(org) {
  var url = "/orgs/" + org + "/personal-access-tokens";
  var description = "Update personal access token accesses in organization " + org;
  var body = {
    "action": action,
    "pat_ids": pat_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePatAccess(org, pat_id) {
  var url = "/orgs/" + org + "/personal-access-tokens/" + pat_id;
  var description = "Update personal access token " + pat_id + " access in organization " + org;
  var body = {
    "action": action,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: personal access token repositories ----

function listPatGrantRepositories(org, pat_id) {
  var url = "/orgs/" + org + "/personal-access-tokens/" + pat_id + "/repositories";
  var description = "List repositories for personal access token " + pat_id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: codespace ----

function getCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name;
  var description = "Get codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name;
  var description = "Update codespace " + codespace_name;
  var body = {
    "machine": machine,
    "display_name": display_name,
    "recent_folders": recent_folders,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name;
  var description = "Delete codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function startCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name + "/start";
  var description = "Start codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function stopCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name + "/stop";
  var description = "Stop codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function exportCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name + "/exports";
  var description = "Export codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCodespaceExportDetails(codespace_name, export_id) {
  var url = "/user/codespaces/" + codespace_name + "/exports/" + export_id;
  var description = "Get export " + export_id + " details for codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listCodespaceMachines(codespace_name) {
  var url = "/user/codespaces/" + codespace_name + "/machines";
  var description = "List machines for codespace " + codespace_name;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function publishCodespace(codespace_name) {
  var url = "/user/codespaces/" + codespace_name + "/publish";
  var description = "Publish codespace " + codespace_name;
  var body = {
    "name": name,
    "private": private,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodespaceExists(codespace_name, export_id) {
  return getCodespace(codespace_name);
}

function verifyCodespaceDoesNotExist(codespace_name, export_id) {
  return getCodespace(codespace_name);
}

function tryToDeleteANonExistingCodespace(codespace_name, export_id) {
  return deleteCodespace(codespace_name);
}

// ---- Entity: codespace in organization ----

function listCodespacesForUserInOrg(org, username) {
  var url = "/orgs/" + org + "/members/" + username + "/codespaces";
  var description = "List codespaces for user " + username + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCodespaceInOrg(org, username, codespace_name) {
  var url = "/orgs/" + org + "/members/" + username + "/codespaces/" + codespace_name;
  var description = "Delete codespace " + codespace_name + " for user " + username + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function stopCodespaceInOrg(org, username, codespace_name) {
  var url = "/orgs/" + org + "/members/" + username + "/codespaces/" + codespace_name + "/stop";
  var description = "Stop codespace " + codespace_name + " for user " + username + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingCodespaceInOrg(org, username, codespace_name) {
  return deleteCodespaceInOrg(org, username, codespace_name);
}

// ---- Entity: codespace in repository ----

function listCodespacesInRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces";
  var description = "List codespaces in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createCodespaceInRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces";
  var description = "Create codespace in repo " + repo + " of " + owner;
  var body = {
    "ref": ref,
    "location": location,
    "geo": geo,
    "client_ip": client_ip,
    "machine": machine,
    "devcontainer_path": devcontainer_path,
    "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out,
    "working_directory": working_directory,
    "idle_timeout_minutes": idle_timeout_minutes,
    "display_name": display_name,
    "retention_period_minutes": retention_period_minutes,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: codespace in pull request ----

function createCodespaceFromPullRequest(owner, repo, pull_number) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/codespaces";
  var description = "Create codespace from pull request " + pull_number + " in repo " + repo + " of " + owner;
  var body = {
    "location": location,
    "geo": geo,
    "client_ip": client_ip,
    "machine": machine,
    "devcontainer_path": devcontainer_path,
    "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out,
    "working_directory": working_directory,
    "idle_timeout_minutes": idle_timeout_minutes,
    "display_name": display_name,
    "retention_period_minutes": retention_period_minutes,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: codespaces access ----

function updateCodespacesAccess(org) {
  var url = "/orgs/" + org + "/codespaces/access";
  var description = "Manage access control for codespaces in org " + org;
  var body = {
    "visibility": visibility,
    "selected_usernames": selected_usernames,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addUsersToCodespacesAccess(org) {
  var url = "/orgs/" + org + "/codespaces/access/selected_users";
  var description = "Add users to codespaces access in org " + org;
  var body = {
    "selected_usernames": selected_usernames,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeUsersFromCodespacesAccess(org) {
  var url = "/orgs/" + org + "/codespaces/access/selected_users";
  var description = "Remove users from codespaces access in org " + org;
  var body = {
    "selected_usernames": selected_usernames,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization codespace secret ----

function listOrgSecrets(org) {
  var url = "/orgs/" + org + "/codespaces/secrets";
  var description = "List secrets for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgPublicKey(org) {
  var url = "/orgs/" + org + "/codespaces/secrets/public-key";
  var description = "Get public key for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name;
  var description = "Get secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name;
  var description = "Create or update secret " + secret_name + " for org " + org;
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name;
  var description = "Delete secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSelectedReposForOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name + "/repositories";
  var description = "List selected repositories for secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setSelectedReposForOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name + "/repositories";
  var description = "Set selected repositories for secret " + secret_name + " in org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addSelectedRepoToOrgSecret(org, secret_name, repository_id) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSelectedRepoFromOrgSecret(org, secret_name, repository_id) {
  var url = "/orgs/" + org + "/codespaces/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from secret " + secret_name + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodespaceSecretOrgExists(org, secret_name, repository_id) {
  return getOrgSecret(org, secret_name);
}

function verifyCodespaceSecretOrgDoesNotExist(org, secret_name, repository_id) {
  return getOrgSecret(org, secret_name);
}

function tryToDeleteANonExistingCodespaceSecretOrg(org, secret_name, repository_id) {
  return deleteOrgSecret(org, secret_name);
}

// ---- Entity: repository codespace secret ----

function listRepoSecrets(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets";
  var description = "List secrets for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepoPublicKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/public-key";
  var description = "Get public key for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/" + secret_name;
  var description = "Get secret " + secret_name + " for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/" + secret_name;
  var description = "Create or update secret " + secret_name + " for repo " + repo + " of " + owner;
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/codespaces/secrets/" + secret_name;
  var description = "Delete secret " + secret_name + " for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodespaceSecretRepoExists(owner, repo, secret_name) {
  return getRepoSecret(owner, repo, secret_name);
}

function verifyCodespaceSecretRepoDoesNotExist(owner, repo, secret_name) {
  return getRepoSecret(owner, repo, secret_name);
}

function tryToDeleteANonExistingCodespaceSecretRepo(owner, repo, secret_name) {
  return deleteRepoSecret(owner, repo, secret_name);
}

// ---- Entity: user codespace secret ----

function listUserSecrets() {
  var url = "/user/codespaces/secrets";
  var description = "List secrets for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUserPublicKey() {
  var url = "/user/codespaces/secrets/public-key";
  var description = "Get public key for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUserSecret(secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Get secret " + secret_name + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateUserSecret(secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Create or update secret " + secret_name + " for authenticated user";
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserSecret(secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name;
  var description = "Delete secret " + secret_name + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSelectedReposForUserSecret(secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories";
  var description = "List selected repositories for secret " + secret_name + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setSelectedReposForUserSecret(secret_name) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories";
  var description = "Set selected repositories for secret " + secret_name + " for authenticated user";
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addSelectedRepoToUserSecret(secret_name, repository_id) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to secret " + secret_name + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSelectedRepoFromUserSecret(secret_name, repository_id) {
  var url = "/user/codespaces/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from secret " + secret_name + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodespaceSecretUserExists(secret_name, repository_id) {
  return getUserSecret(secret_name);
}

function verifyCodespaceSecretUserDoesNotExist(secret_name, repository_id) {
  return getUserSecret(secret_name);
}

function tryToDeleteANonExistingCodespaceSecretUser(secret_name, repository_id) {
  return deleteUserSecret(secret_name);
}

// ---- Entity: codespace for authenticated user ----

function listCodespacesForAuthenticatedUser() {
  var url = "/user/codespaces";
  var description = "List codespaces for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createCodespaceForAuthenticatedUser() {
  var url = "/user/codespaces";
  var description = "Create codespace for authenticated user";
  var body = {
    "repository_id": repository_id,
    "ref": ref,
    "location": location,
    "geo": geo,
    "client_ip": client_ip,
    "machine": machine,
    "devcontainer_path": devcontainer_path,
    "multi_repo_permissions_opt_out": multi_repo_permissions_opt_out,
    "working_directory": working_directory,
    "idle_timeout_minutes": idle_timeout_minutes,
    "display_name": display_name,
    "retention_period_minutes": retention_period_minutes,
    "pull_request": pull_request,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user ----

function getUser(username) {
  var url = "/users/" + username;
  var description = "Get user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserExists(username) {
  return getUser(username);
}

function verifyUserDoesNotExist(username) {
  return getUser(username);
}

// ---- Entity: authenticated user ----

function getAuthenticatedUser() {
  var url = "/user";
  var description = "Get the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAuthenticatedUser() {
  var url = "/user";
  var description = "Update the authenticated user";
  var body = {
    "name": name,
    "email": email,
    "blog": blog,
    "twitter_username": twitter_username,
    "company": company,
    "location": location,
    "hireable": hireable,
    "bio": bio,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAuthenticatedUserExists() {
  return getAuthenticatedUser();
}

function verifyAuthenticatedUserDoesNotExist() {
  return getAuthenticatedUser();
}

// ---- Entity: user block ----

function checkBlockedUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Check if user " + username + " is blocked by the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function blockUser(username) {
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

function unblockUser(username) {
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

function tryToAddExistingUserBlock(username) {
  return blockUser(username);
}

function verifyUserBlockExists(username) {
  return checkBlockedUser(username);
}

function verifyUserBlockDoesNotExist(username) {
  return checkBlockedUser(username);
}

function tryToDeleteANonExistingUserBlock(username) {
  return unblockUser(username);
}

// ---- Entity: user email ----

function listEmails() {
  var url = "/user/emails";
  var description = "List email addresses for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addEmails() {
  var url = "/user/emails";
  var description = "Add email addresses for the authenticated user";
  var body = {
    "emails": emails,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteEmails() {
  var url = "/user/emails";
  var description = "Delete email addresses for the authenticated user";
  var body = {
    "emails": emails,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserEmail() {
  return addEmails();
}

function tryToDeleteANonExistingUserEmail() {
  return deleteEmails();
}

// ---- Entity: user email visibility ----

function setPrimaryEmailVisibility() {
  var url = "/user/email/visibility";
  var description = "Set primary email visibility for the authenticated user";
  var body = {
    "visibility": visibility,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user follower ----

function listFollowersForUser(username) {
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

function listFollowersForAuthenticatedUser() {
  var url = "/user/followers";
  var description = "List followers of the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user following ----

function listFollowingForUser(username) {
  var url = "/users/" + username + "/following";
  var description = "List the people user " + username + " follows";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listFollowingForAuthenticatedUser() {
  var url = "/user/following";
  var description = "List the people the authenticated user follows";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function checkFollowingForUser(username, target_user) {
  var url = "/users/" + username + "/following/" + target_user;
  var description = "Check if user " + username + " follows " + target_user;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function followUser(username) {
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

function unfollowUser(username) {
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

function tryToAddExistingUserFollowing(username, target_user) {
  return followUser(username);
}

function tryToDeleteANonExistingUserFollowing(username, target_user) {
  return unfollowUser(username);
}

// ---- Entity: user GPG key ----

function listGpgKeysForAuthenticatedUser() {
  var url = "/user/gpg_keys";
  var description = "List GPG keys for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createGpgKeyForAuthenticatedUser() {
  var url = "/user/gpg_keys";
  var description = "Create a GPG key for the authenticated user";
  var body = {
    "name": name,
    "armored_public_key": armored_public_key,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getGpgKeyForAuthenticatedUser(gpg_key_id) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Get GPG key " + gpg_key_id + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteGpgKeyForAuthenticatedUser(gpg_key_id) {
  var url = "/user/gpg_keys/" + gpg_key_id;
  var description = "Delete GPG key " + gpg_key_id + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listGpgKeysForUser(username) {
  var url = "/users/" + username + "/gpg_keys";
  var description = "List GPG keys for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user public SSH key ----

function listPublicSshKeysForAuthenticatedUser() {
  var url = "/user/keys";
  var description = "List public SSH keys for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createPublicSshKeyForAuthenticatedUser() {
  var url = "/user/keys";
  var description = "Create a public SSH key for the authenticated user";
  var body = {
    "title": title,
    "key": key,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPublicSshKeyForAuthenticatedUser(key_id) {
  var url = "/user/keys/" + key_id;
  var description = "Get public SSH key " + key_id + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePublicSshKeyForAuthenticatedUser(key_id) {
  var url = "/user/keys/" + key_id;
  var description = "Delete public SSH key " + key_id + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listPublicKeysForUser(username) {
  var url = "/users/" + username + "/keys";
  var description = "List public keys for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user public email ----

function listPublicEmailsForAuthenticatedUser() {
  var url = "/user/public_emails";
  var description = "List public email addresses for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user social account ----

function listSocialAccountsForAuthenticatedUser() {
  var url = "/user/social_accounts";
  var description = "List social accounts for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addSocialAccountForAuthenticatedUser() {
  var url = "/user/social_accounts";
  var description = "Add social accounts for the authenticated user";
  var body = {
    "account_urls": account_urls,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSocialAccountForAuthenticatedUser() {
  var url = "/user/social_accounts";
  var description = "Delete social accounts for the authenticated user";
  var body = {
    "account_urls": account_urls,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSocialAccountsForUser(username) {
  var url = "/users/" + username + "/social_accounts";
  var description = "List social accounts for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user SSH signing key ----

function listSshSigningKeysForAuthenticatedUser() {
  var url = "/user/ssh_signing_keys";
  var description = "List SSH signing keys for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createSshSigningKeyForAuthenticatedUser() {
  var url = "/user/ssh_signing_keys";
  var description = "Create a SSH signing key for the authenticated user";
  var body = {
    "title": title,
    "key": key,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSshSigningKeyForAuthenticatedUser(ssh_signing_key_id) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Get SSH signing key " + ssh_signing_key_id + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteSshSigningKeyForAuthenticatedUser(ssh_signing_key_id) {
  var url = "/user/ssh_signing_keys/" + ssh_signing_key_id;
  var description = "Delete SSH signing key " + ssh_signing_key_id + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSshSigningKeysForUser(username) {
  var url = "/users/" + username + "/ssh_signing_keys";
  var description = "List SSH signing keys for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: user attestation ----

function listAttestations(username, subject_digest) {
  var url = "/users/" + username + "/attestations/" + subject_digest;
  var description = "List attestations for user " + username + " and subject digest " + subject_digest;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listAttestationsBulk(username) {
  var url = "/users/" + username + "/attestations/bulk-list";
  var description = "List attestations in bulk for user " + username;
  var body = {
    "subject_digests": subject_digests,
    "predicate_type": predicate_type,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAttestationsBulk(username) {
  var url = "/users/" + username + "/attestations/delete-request";
  var description = "Delete attestations in bulk for user " + username;
  var body = {
    "subject_digests": subject_digests,
    "attestation_ids": attestation_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAttestationsBySubjectDigest(username, subject_digest) {
  var url = "/users/" + username + "/attestations/digest/" + subject_digest;
  var description = "Delete attestations by subject digest " + subject_digest + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAttestationsById(username, attestation_id) {
  var url = "/users/" + username + "/attestations/" + attestation_id;
  var description = "Delete attestation " + attestation_id + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: app ----

function getAuthenticatedApp() {
  var url = "/app";
  var description = "Get the authenticated app";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAppExists() {
  return getAuthenticatedApp();
}

function verifyAppDoesNotExist() {
  return getAuthenticatedApp();
}

// ---- Entity: app manifest conversion ----

function createAppFromManifest(code) {
  var url = "/app-manifests/" + code + "/conversions";
  var description = "Create a GitHub App from manifest " + code;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAppManifestConversion(code) {
  return createAppFromManifest(code);
}

// ---- Entity: app webhook config ----

function getWebhookConfigForApp() {
  var url = "/app/hook/config";
  var description = "Get a webhook configuration for an app";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhookConfigForApp() {
  var url = "/app/hook/config";
  var description = "Update a webhook configuration for an app";
  var body = {
    "url": url,
    "content_type": content_type,
    "secret": secret,
    "insecure_ssl": insecure_ssl,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAppWebhookConfigExists() {
  return getWebhookConfigForApp();
}

function verifyAppWebhookConfigDoesNotExist() {
  return getWebhookConfigForApp();
}

// ---- Entity: app webhook delivery ----

function getWebhookDelivery(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id;
  var description = "Get a delivery for an app webhook " + delivery_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function redeliverWebhookDelivery(delivery_id) {
  var url = "/app/hook/deliveries/" + delivery_id + "/attempts";
  var description = "Redeliver a delivery for an app webhook " + delivery_id;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAppWebhookDelivery(delivery_id) {
  return redeliverWebhookDelivery(delivery_id);
}

function verifyAppWebhookDeliveryExists(delivery_id) {
  return getWebhookDelivery(delivery_id);
}

function verifyAppWebhookDeliveryDoesNotExist(delivery_id) {
  return getWebhookDelivery(delivery_id);
}

// ---- Entity: app webhook deliveries ----

function listWebhookDeliveries() {
  var url = "/app/hook/deliveries";
  var description = "List deliveries for an app webhook";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAppWebhookDeliveriesExists() {
  return listWebhookDeliveries();
}

function verifyAppWebhookDeliveriesDoesNotExist() {
  return listWebhookDeliveries();
}

// ---- Entity: installation request ----

function listInstallationRequestsForAuthenticatedApp() {
  var url = "/app/installation-requests";
  var description = "List installation requests for the authenticated app";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyInstallationRequestExists() {
  return listInstallationRequestsForAuthenticatedApp();
}

function verifyInstallationRequestDoesNotExist() {
  return listInstallationRequestsForAuthenticatedApp();
}

// ---- Entity: installation ----

function getInstallation(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Get an installation for the authenticated app " + installation_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteInstallation(installation_id) {
  var url = "/app/installations/" + installation_id;
  var description = "Delete an installation for the authenticated app " + installation_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createInstallationAccessToken(installation_id) {
  var url = "/app/installations/" + installation_id + "/access_tokens";
  var description = "Create an installation access token for installation " + installation_id;
  var body = {
    "repositories": repositories,
    "repository_ids": repository_ids,
    "permissions": permissions,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function suspendInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Suspend an app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unsuspendInstallation(installation_id) {
  var url = "/app/installations/" + installation_id + "/suspended";
  var description = "Unsuspend an app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingInstallation(installation_id) {
  return createInstallationAccessToken(installation_id);
}

function verifyInstallationExists(installation_id) {
  return getInstallation(installation_id);
}

function verifyInstallationDoesNotExist(installation_id) {
  return getInstallation(installation_id);
}

function tryToDeleteANonExistingInstallation(installation_id) {
  return deleteInstallation(installation_id);
}

// ---- Entity: app authorization ----

function deleteAuthorization(client_id) {
  var url = "/applications/" + client_id + "/grant";
  var description = "Delete an app authorization " + client_id;
  var body = {
    "access_token": access_token,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingAppAuthorization(client_id) {
  return deleteAuthorization(client_id);
}

// ---- Entity: app token ----

function checkToken(client_id) {
  var url = "/applications/" + client_id + "/token";
  var description = "Check a token for client " + client_id;
  var body = {
    "access_token": access_token,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetToken(client_id) {
  var url = "/applications/" + client_id + "/token";
  var description = "Reset a token for client " + client_id;
  var body = {
    "access_token": access_token,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteToken(client_id) {
  var url = "/applications/" + client_id + "/token";
  var description = "Delete an app token for client " + client_id;
  var body = {
    "access_token": access_token,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAppToken(client_id) {
  return checkToken(client_id);
}

function tryToDeleteANonExistingAppToken(client_id) {
  return deleteToken(client_id);
}

// ---- Entity: scoped app token ----

function createScopedAccessToken(client_id) {
  var url = "/applications/" + client_id + "/token/scoped";
  var description = "Create a scoped access token for client " + client_id;
  var body = {
    "access_token": access_token,
    "target": target,
    "target_id": target_id,
    "repositories": repositories,
    "repository_ids": repository_ids,
    "permissions": permissions,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingScopedAppToken(client_id) {
  return createScopedAccessToken(client_id);
}

// ---- Entity: app ----

function getAppBySlug(app_slug) {
  var url = "/apps/" + app_slug;
  var description = "Get an app " + app_slug;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAppSlugExists(app_slug) {
  return getAppBySlug(app_slug);
}

function verifyAppSlugDoesNotExist(app_slug) {
  return getAppBySlug(app_slug);
}

// ---- Entity: installation repository ----

function addRepoToInstallationForAuthenticatedUser(installation_id, repository_id) {
  var url = "/user/installations/" + installation_id + "/repositories/" + repository_id;
  var description = "Add a repository " + repository_id + " to an app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeRepoFromInstallationForAuthenticatedUser(installation_id, repository_id) {
  var url = "/user/installations/" + installation_id + "/repositories/" + repository_id;
  var description = "Remove a repository " + repository_id + " from an app installation " + installation_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingInstallationRepo(installation_id, repository_id) {
  return addRepoToInstallationForAuthenticatedUser(installation_id, repository_id);
}

function tryToDeleteANonExistingInstallationRepo(installation_id, repository_id) {
  return removeRepoFromInstallationForAuthenticatedUser(installation_id, repository_id);
}

// ---- Entity: organization installation ----

function getOrgInstallation(org) {
  var url = "/orgs/" + org + "/installation";
  var description = "Get an organization installation for the authenticated app " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgInstallationExists(org) {
  return getOrgInstallation(org);
}

function verifyOrgInstallationDoesNotExist(org) {
  return getOrgInstallation(org);
}

// ---- Entity: repository installation ----

function getRepoInstallation(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/installation";
  var description = "Get a repository installation for the authenticated app " + owner + " " + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepoInstallationExists(owner, repo) {
  return getRepoInstallation(owner, repo);
}

function verifyRepoInstallationDoesNotExist(owner, repo) {
  return getRepoInstallation(owner, repo);
}

// ---- Entity: user installation ----

function getUserInstallation(username) {
  var url = "/users/" + username + "/installation";
  var description = "Get a user installation for the authenticated app " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserInstallationExists(username) {
  return getUserInstallation(username);
}

function verifyUserInstallationDoesNotExist(username) {
  return getUserInstallation(username);
}

// ---- Entity: issue ----

function createIssue(owner, repo, title, body, assignee, milestone, labels, assignees, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create issue " + title;
  var body = {
    "title": title,
    "body": body,
    "assignee": assignee,
    "milestone": milestone,
    "labels": labels,
    "assignees": assignees,
    "type": type,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssue(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number;
  var description = "Get issue " + issue_number + " of " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssue(owner, repo, issue_number, title, body, assignee, state, state_reason, milestone, labels, assignees, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number;
  var description = "Update issue " + issue_number + " of " + owner + "/" + repo;
  var body = {
    "title": title,
    "body": body,
    "assignee": assignee,
    "state": state,
    "state_reason": state_reason,
    "milestone": milestone,
    "labels": labels,
    "assignees": assignees,
    "type": type,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssue(owner, repo, title, body, assignee, milestone, labels, assignees, type, issue_number, state, state_reason) {
  return createIssue(owner, repo, title, body, assignee, milestone, labels, assignees, type);
}

function verifyIssueExists(owner, repo, title, body, assignee, milestone, labels, assignees, type, issue_number, state, state_reason) {
  return getIssue(owner, repo, issue_number);
}

function verifyIssueDoesNotExist(owner, repo, title, body, assignee, milestone, labels, assignees, type, issue_number, state, state_reason) {
  return getIssue(owner, repo, issue_number);
}

// ---- Entity: issue comment ----

function createIssueComment(owner, repo, issue_number, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/comments";
  var description = "Create comment on issue " + issue_number;
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

function getIssueComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Get comment " + comment_id + " on " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssueComment(owner, repo, comment_id, body) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Update comment " + comment_id + " on " + owner + "/" + repo;
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

function deleteIssueComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id;
  var description = "Delete comment " + comment_id + " on " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueComment(owner, repo, issue_number, body, comment_id) {
  return createIssueComment(owner, repo, issue_number, body);
}

function verifyIssueCommentExists(owner, repo, issue_number, body, comment_id) {
  return getIssueComment(owner, repo, comment_id);
}

function verifyIssueCommentDoesNotExist(owner, repo, issue_number, body, comment_id) {
  return getIssueComment(owner, repo, comment_id);
}

function tryToDeleteANonExistingIssueComment(owner, repo, issue_number, body, comment_id) {
  return deleteIssueComment(owner, repo, comment_id);
}

// ---- Entity: assignee ----

function checkUserCanBeAssigned(owner, repo, assignee) {
  var url = "/repos/" + owner + "/" + repo + "/assignees/" + assignee;
  var description = "Check if user " + assignee + " can be assigned in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAssigneeExists(owner, repo, assignee) {
  return checkUserCanBeAssigned(owner, repo, assignee);
}

function verifyAssigneeDoesNotExist(owner, repo, assignee) {
  return checkUserCanBeAssigned(owner, repo, assignee);
}

// ---- Entity: issue assignee ----

function addAssigneesToIssue(owner, repo, issue_number, assignees) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees";
  var description = "Add assignees to issue " + issue_number;
  var body = {
    "assignees": assignees,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAssigneesFromIssue(owner, repo, issue_number, assignees) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees";
  var description = "Remove assignees from issue " + issue_number;
  var body = {
    "assignees": assignees,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueAssignee(owner, repo, issue_number, assignees) {
  return addAssigneesToIssue(owner, repo, issue_number, assignees);
}

function tryToDeleteANonExistingIssueAssignee(owner, repo, issue_number, assignees) {
  return removeAssigneesFromIssue(owner, repo, issue_number, assignees);
}

// ---- Entity: issue assignee check ----

function checkUserCanBeAssignedToIssue(owner, repo, issue_number, assignee) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/assignees/" + assignee;
  var description = "Check if user " + assignee + " can be assigned to issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueAssigneeCheckExists(owner, repo, issue_number, assignee) {
  return checkUserCanBeAssignedToIssue(owner, repo, issue_number, assignee);
}

function verifyIssueAssigneeCheckDoesNotExist(owner, repo, issue_number, assignee) {
  return checkUserCanBeAssignedToIssue(owner, repo, issue_number, assignee);
}

// ---- Entity: issue label ----

function addLabelsToIssue(owner, repo, issue_number, labels) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Add labels to issue " + issue_number;
  var body = {
    "labels": labels,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setLabelsForIssue(owner, repo, issue_number, labels) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Set labels for issue " + issue_number;
  var body = {
    "labels": labels,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeAllLabelsFromIssue(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels";
  var description = "Remove all labels from issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeLabelFromIssue(owner, repo, issue_number, name) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/labels/" + name;
  var description = "Remove label " + name + " from issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueLabel(owner, repo, issue_number, labels, name) {
  return addLabelsToIssue(owner, repo, issue_number, labels);
}

function tryToDeleteANonExistingIssueLabel(owner, repo, issue_number, labels, name) {
  return removeAllLabelsFromIssue(owner, repo, issue_number);
}

// ---- Entity: label ----

function createLabel(owner, repo, name, color, description) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Create label " + name;
  var body = {
    "name": name,
    "color": color,
    "description": description,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLabel(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Get label " + name + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateLabel(owner, repo, name, new_name, color, description) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Update label " + name + " in " + owner + "/" + repo;
  var body = {
    "new_name": new_name,
    "color": color,
    "description": description,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteLabel(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + name;
  var description = "Delete label " + name + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLabel(owner, repo, name, color, description, new_name) {
  return createLabel(owner, repo, name, color, description);
}

function verifyLabelExists(owner, repo, name, color, description, new_name) {
  return getLabel(owner, repo, name);
}

function verifyLabelDoesNotExist(owner, repo, name, color, description, new_name) {
  return getLabel(owner, repo, name);
}

function tryToDeleteANonExistingLabel(owner, repo, name, color, description, new_name) {
  return deleteLabel(owner, repo, name);
}

// ---- Entity: milestone ----

function createMilestone(owner, repo, title, state, description, due_on) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create milestone " + title;
  var body = {
    "title": title,
    "state": state,
    "description": description,
    "due_on": due_on,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getMilestone(owner, repo, milestone_number) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Get milestone " + milestone_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateMilestone(owner, repo, milestone_number, title, state, description, due_on) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Update milestone " + milestone_number + " in " + owner + "/" + repo;
  var body = {
    "title": title,
    "state": state,
    "description": description,
    "due_on": due_on,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteMilestone(owner, repo, milestone_number) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + milestone_number;
  var description = "Delete milestone " + milestone_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMilestone(owner, repo, title, state, description, due_on, milestone_number) {
  return createMilestone(owner, repo, title, state, description, due_on);
}

function verifyMilestoneExists(owner, repo, title, state, description, due_on, milestone_number) {
  return getMilestone(owner, repo, milestone_number);
}

function verifyMilestoneDoesNotExist(owner, repo, title, state, description, due_on, milestone_number) {
  return getMilestone(owner, repo, milestone_number);
}

function tryToDeleteANonExistingMilestone(owner, repo, title, state, description, due_on, milestone_number) {
  return deleteMilestone(owner, repo, milestone_number);
}

// ---- Entity: issue dependency blocked by ----

function addBlockedByDependency(owner, repo, issue_number, issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "Add blocked-by dependency to issue " + issue_number;
  var body = {
    "issue_id": issue_id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listBlockedByDependencies(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by";
  var description = "List blocked-by dependencies for issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeBlockedByDependency(owner, repo, issue_number, issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocked_by/" + issue_id;
  var description = "Remove blocked-by dependency " + issue_id + " from issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssueDependencyBlockedBy(owner, repo, issue_number, issue_id) {
  return addBlockedByDependency(owner, repo, issue_number, issue_id);
}

function verifyIssueDependencyBlockedByExists(owner, repo, issue_number, issue_id) {
  return listBlockedByDependencies(owner, repo, issue_number);
}

function verifyIssueDependencyBlockedByDoesNotExist(owner, repo, issue_number, issue_id) {
  return listBlockedByDependencies(owner, repo, issue_number);
}

function tryToDeleteANonExistingIssueDependencyBlockedBy(owner, repo, issue_number, issue_id) {
  return removeBlockedByDependency(owner, repo, issue_number, issue_id);
}

// ---- Entity: issue dependency blocking ----

function listBlockingDependencies(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/dependencies/blocking";
  var description = "List blocking dependencies for issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueDependencyBlockingExists(owner, repo, issue_number) {
  return listBlockingDependencies(owner, repo, issue_number);
}

function verifyIssueDependencyBlockingDoesNotExist(owner, repo, issue_number) {
  return listBlockingDependencies(owner, repo, issue_number);
}

// ---- Entity: sub-issue ----

function addSubIssue(owner, repo, issue_number, sub_issue_id, replace_parent) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues";
  var description = "Add sub-issue to issue " + issue_number;
  var body = {
    "sub_issue_id": sub_issue_id,
    "replace_parent": replace_parent,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listSubIssues(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues";
  var description = "List sub-issues for issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSubIssue(owner, repo, issue_number, sub_issue_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issue";
  var description = "Remove sub-issue from issue " + issue_number;
  var body = {
    "sub_issue_id": sub_issue_id,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function reprioritizeSubIssue(owner, repo, issue_number, sub_issue_id, after_id, before_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/sub_issues/priority";
  var description = "Reprioritize sub-issue for issue " + issue_number;
  var body = {
    "sub_issue_id": sub_issue_id,
    "after_id": after_id,
    "before_id": before_id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSubIssue(owner, repo, issue_number, sub_issue_id, replace_parent, after_id, before_id) {
  return addSubIssue(owner, repo, issue_number, sub_issue_id, replace_parent);
}

function verifySubIssueExists(owner, repo, issue_number, sub_issue_id, replace_parent, after_id, before_id) {
  return listSubIssues(owner, repo, issue_number);
}

function verifySubIssueDoesNotExist(owner, repo, issue_number, sub_issue_id, replace_parent, after_id, before_id) {
  return listSubIssues(owner, repo, issue_number);
}

function tryToDeleteANonExistingSubIssue(owner, repo, issue_number, sub_issue_id, replace_parent, after_id, before_id) {
  return removeSubIssue(owner, repo, issue_number, sub_issue_id);
}

// ---- Entity: issue lock ----

function lockIssue(owner, repo, issue_number, lock_reason) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/lock";
  var description = "Lock issue " + issue_number;
  var body = {
    "lock_reason": lock_reason,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unlockIssue(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/lock";
  var description = "Unlock issue " + issue_number;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingIssueLock(owner, repo, issue_number, lock_reason) {
  return unlockIssue(owner, repo, issue_number);
}

// ---- Entity: team ----

function createTeam(org, name) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create team " + name + " in " + org;
  var body = {
    "name": name,
    "description": description,
    "maintainers": maintainers,
    "repo_names": repo_names,
    "privacy": privacy,
    "notification_setting": notification_setting,
    "permission": permission,
    "parent_team_id": parent_team_id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTeam(org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug;
  var description = "Delete team " + team_slug + " in " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTeam(org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug;
  var description = "Update team " + team_slug + " in " + org;
  var body = {
    "name": name,
    "description": description,
    "privacy": privacy,
    "notification_setting": notification_setting,
    "permission": permission,
    "parent_team_id": parent_team_id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTeam(org, team_slug) {
  var url = "/orgs/" + org + "/teams/" + team_slug;
  var description = "Get team " + team_slug + " in " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeam(org, name, team_slug) {
  return createTeam(org, name);
}

function verifyTeamExists(org, name, team_slug) {
  return getTeam(org, team_slug);
}

function verifyTeamDoesNotExist(org, name, team_slug) {
  return getTeam(org, team_slug);
}

function tryToDeleteANonExistingTeam(org, name, team_slug) {
  return deleteTeam(org, team_slug);
}

// ---- Entity: team discussion ----

function createDiscussion(org, team_slug, title, body, private) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions";
  var description = "Create discussion " + title + " in team " + team_slug + " of " + org;
  var body = {
    "title": title,
    "body": body,
    "private": private,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDiscussion(org, team_slug, discussion_number) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Delete discussion " + discussion_number + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDiscussion(org, team_slug, discussion_number, title, body) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Update discussion " + discussion_number + " in team " + team_slug + " of " + org;
  var body = {
    "title": title,
    "body": body,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDiscussion(org, team_slug, discussion_number) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number;
  var description = "Get discussion " + discussion_number + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamDiscussion(org, team_slug, title, body, private, discussion_number) {
  return createDiscussion(org, team_slug, title, body, private);
}

function verifyTeamDiscussionExists(org, team_slug, title, body, private, discussion_number) {
  return getDiscussion(org, team_slug, discussion_number);
}

function verifyTeamDiscussionDoesNotExist(org, team_slug, title, body, private, discussion_number) {
  return getDiscussion(org, team_slug, discussion_number);
}

function tryToDeleteANonExistingTeamDiscussion(org, team_slug, title, body, private, discussion_number) {
  return deleteDiscussion(org, team_slug, discussion_number);
}

// ---- Entity: team discussion comment ----

function createDiscussionComment(org, team_slug, discussion_number, body) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments";
  var description = "Create comment in discussion " + discussion_number + " in team " + team_slug + " of " + org;
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

function deleteDiscussionComment(org, team_slug, discussion_number, comment_number) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Delete comment " + comment_number + " in discussion " + discussion_number + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDiscussionComment(org, team_slug, discussion_number, comment_number, body) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Update comment " + comment_number + " in discussion " + discussion_number + " in team " + team_slug + " of " + org;
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

function getDiscussionComment(org, team_slug, discussion_number, comment_number) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number;
  var description = "Get comment " + comment_number + " in discussion " + discussion_number + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamDiscussionComment(org, team_slug, discussion_number, body, comment_number) {
  return createDiscussionComment(org, team_slug, discussion_number, body);
}

function verifyTeamDiscussionCommentExists(org, team_slug, discussion_number, body, comment_number) {
  return getDiscussionComment(org, team_slug, discussion_number, comment_number);
}

function verifyTeamDiscussionCommentDoesNotExist(org, team_slug, discussion_number, body, comment_number) {
  return getDiscussionComment(org, team_slug, discussion_number, comment_number);
}

function tryToDeleteANonExistingTeamDiscussionComment(org, team_slug, discussion_number, body, comment_number) {
  return deleteDiscussionComment(org, team_slug, discussion_number, comment_number);
}

// ---- Entity: team membership ----

function addOrUpdateMembership(org, team_slug, username, role) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Add or update membership for user " + username + " in team " + team_slug + " of " + org;
  var body = {
    "role": role,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeMembership(org, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Remove membership for user " + username + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getMembership(org, team_slug, username) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/memberships/" + username;
  var description = "Get membership for user " + username + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamMembership(org, team_slug, username, role) {
  return addOrUpdateMembership(org, team_slug, username, role);
}

function verifyTeamMembershipExists(org, team_slug, username, role) {
  return getMembership(org, team_slug, username);
}

function verifyTeamMembershipDoesNotExist(org, team_slug, username, role) {
  return getMembership(org, team_slug, username);
}

function tryToDeleteANonExistingTeamMembership(org, team_slug, username, role) {
  return removeMembership(org, team_slug, username);
}

// ---- Entity: team project ----

function addOrUpdateProjectPermissions(org, team_slug, project_id, permission) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/projects/" + project_id;
  var description = "Add or update project permissions for project " + project_id + " in team " + team_slug + " of " + org;
  var body = {
    "permission": permission,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeProject(org, team_slug, project_id) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/projects/" + project_id;
  var description = "Remove project " + project_id + " from team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function checkProjectPermissions(org, team_slug, project_id) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/projects/" + project_id;
  var description = "Check project permissions for project " + project_id + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamProject(org, team_slug, project_id, permission) {
  return addOrUpdateProjectPermissions(org, team_slug, project_id, permission);
}

function verifyTeamProjectExists(org, team_slug, project_id, permission) {
  return checkProjectPermissions(org, team_slug, project_id);
}

function verifyTeamProjectDoesNotExist(org, team_slug, project_id, permission) {
  return checkProjectPermissions(org, team_slug, project_id);
}

function tryToDeleteANonExistingTeamProject(org, team_slug, project_id, permission) {
  return removeProject(org, team_slug, project_id);
}

// ---- Entity: team repository ----

function addOrUpdateRepoPermissions(org, team_slug, owner, repo, permission) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Add or update repository permissions for repo " + repo + " owned by " + owner + " in team " + team_slug + " of " + org;
  var body = {
    "permission": permission,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeRepo(org, team_slug, owner, repo) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Remove repository " + repo + " owned by " + owner + " from team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function checkRepoPermissions(org, team_slug, owner, repo) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/repos/" + owner + "/" + repo;
  var description = "Check repository permissions for repo " + repo + " owned by " + owner + " in team " + team_slug + " of " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTeamRepository(org, team_slug, owner, repo, permission) {
  return addOrUpdateRepoPermissions(org, team_slug, owner, repo, permission);
}

function verifyTeamRepositoryExists(org, team_slug, owner, repo, permission) {
  return checkRepoPermissions(org, team_slug, owner, repo);
}

function verifyTeamRepositoryDoesNotExist(org, team_slug, owner, repo, permission) {
  return checkRepoPermissions(org, team_slug, owner, repo);
}

function tryToDeleteANonExistingTeamRepository(org, team_slug, owner, repo, permission) {
  return removeRepo(org, team_slug, owner, repo);
}

// ---- Entity: notification ----

function listNotifications(all, participating, since, before, page, per_page) {
  var url = "/notifications";
  var description = "List notifications for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markNotificationsAsRead() {
  var url = "/notifications";
  var description = "Mark notifications as read";
  var body = {
    "last_read_at": last_read_at,
    "read": read,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNotificationExists(all, participating, since, before, page, per_page) {
  return listNotifications(all, participating, since, before, page, per_page);
}

function verifyNotificationDoesNotExist(all, participating, since, before, page, per_page) {
  return listNotifications(all, participating, since, before, page, per_page);
}

// ---- Entity: notification thread ----

function getThread(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Get a thread " + thread_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markThreadAsRead(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Mark thread " + thread_id + " as read";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markThreadAsDone(thread_id) {
  var url = "/notifications/threads/" + thread_id;
  var description = "Mark thread " + thread_id + " as done";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNotificationThreadExists(thread_id) {
  return getThread(thread_id);
}

function verifyNotificationThreadDoesNotExist(thread_id) {
  return getThread(thread_id);
}

function tryToDeleteANonExistingNotificationThread(thread_id) {
  return markThreadAsDone(thread_id);
}

// ---- Entity: thread subscription ----

function getThreadSubscription(thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Get a thread subscription for the authenticated user for thread " + thread_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setThreadSubscription(thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Set a thread subscription for thread " + thread_id;
  var body = {
    "ignored": ignored,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteThreadSubscription(thread_id) {
  var url = "/notifications/threads/" + thread_id + "/subscription";
  var description = "Delete a thread subscription for thread " + thread_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingThreadSubscription(thread_id) {
  return setThreadSubscription(thread_id);
}

function verifyThreadSubscriptionExists(thread_id) {
  return getThreadSubscription(thread_id);
}

function verifyThreadSubscriptionDoesNotExist(thread_id) {
  return getThreadSubscription(thread_id);
}

function tryToDeleteANonExistingThreadSubscription(thread_id) {
  return deleteThreadSubscription(thread_id);
}

// ---- Entity: repository notification ----

function listRepoNotifications(owner, repo, all, participating, since, before, per_page, page) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "List repository notifications for the authenticated user for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function markRepoNotificationsAsRead(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark repository notifications as read for repo " + repo + " of " + owner;
  var body = {
    "last_read_at": last_read_at,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepoNotificationExists(owner, repo, all, participating, since, before, per_page, page) {
  return listRepoNotifications(owner, repo, all, participating, since, before, per_page, page);
}

function verifyRepoNotificationDoesNotExist(owner, repo, all, participating, since, before, per_page, page) {
  return listRepoNotifications(owner, repo, all, participating, since, before, per_page, page);
}

// ---- Entity: repository subscription ----

function getRepoSubscription(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Get a repository subscription for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setRepoSubscription(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Set a repository subscription for repo " + repo + " of " + owner;
  var body = {
    "subscribed": subscribed,
    "ignored": ignored,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoSubscription(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Delete a repository subscription for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepoSubscription(owner, repo) {
  return setRepoSubscription(owner, repo);
}

function verifyRepoSubscriptionExists(owner, repo) {
  return getRepoSubscription(owner, repo);
}

function verifyRepoSubscriptionDoesNotExist(owner, repo) {
  return getRepoSubscription(owner, repo);
}

function tryToDeleteANonExistingRepoSubscription(owner, repo) {
  return deleteRepoSubscription(owner, repo);
}

// ---- Entity: star ----

function checkRepoIsStarred(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Check if repo " + repo + " of " + owner + " is starred by the authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function starRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star repo " + repo + " of " + owner + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function unstarRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar repo " + repo + " of " + owner + " for the authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingStar(owner, repo) {
  return starRepo(owner, repo);
}

function verifyStarExists(owner, repo) {
  return checkRepoIsStarred(owner, repo);
}

function verifyStarDoesNotExist(owner, repo) {
  return checkRepoIsStarred(owner, repo);
}

function tryToDeleteANonExistingStar(owner, repo) {
  return unstarRepo(owner, repo);
}

// ---- Entity: organization package ----

function getOrgPackage(org, package_type, package_name) {
  var url = "/orgs/" + org + "/packages/" + package_type + "/" + package_name;
  var description = "Get package " + package_name + " of type " + package_type + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgPackage(org, package_type, package_name) {
  var url = "/orgs/" + org + "/packages/" + package_type + "/" + package_name;
  var description = "Delete package " + package_name + " of type " + package_type + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgPackageExists(org, package_type, package_name) {
  return getOrgPackage(org, package_type, package_name);
}

function verifyOrgPackageDoesNotExist(org, package_type, package_name) {
  return getOrgPackage(org, package_type, package_name);
}

function tryToDeleteANonExistingOrgPackage(org, package_type, package_name) {
  return deleteOrgPackage(org, package_type, package_name);
}

// ---- Entity: organization package restore ----

function restoreOrgPackage(org, package_type, package_name, token) {
  var url = "/orgs/" + org + "/packages/" + package_type + "/" + package_name + "/restore";
  var description = "Restore package " + package_name + " of type " + package_type + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgPackageRestore(org, package_type, package_name, token) {
  return restoreOrgPackage(org, package_type, package_name, token);
}

// ---- Entity: organization package version ----

function getOrgPackageVersion(org, package_type, package_name, package_version_id) {
  var url = "/orgs/" + org + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Get package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgPackageVersion(org, package_type, package_name, package_version_id) {
  var url = "/orgs/" + org + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Delete package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgPackageVersionExists(org, package_type, package_name, package_version_id) {
  return getOrgPackageVersion(org, package_type, package_name, package_version_id);
}

function verifyOrgPackageVersionDoesNotExist(org, package_type, package_name, package_version_id) {
  return getOrgPackageVersion(org, package_type, package_name, package_version_id);
}

function tryToDeleteANonExistingOrgPackageVersion(org, package_type, package_name, package_version_id) {
  return deleteOrgPackageVersion(org, package_type, package_name, package_version_id);
}

// ---- Entity: organization package version restore ----

function restoreOrgPackageVersion(org, package_type, package_name, package_version_id) {
  var url = "/orgs/" + org + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Restore package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgPackageVersionRestore(org, package_type, package_name, package_version_id) {
  return restoreOrgPackageVersion(org, package_type, package_name, package_version_id);
}

// ---- Entity: user package ----

function getUserPackage(username, package_type, package_name) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Get package " + package_name + " of type " + package_type + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserPackage(username, package_type, package_name) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name;
  var description = "Delete package " + package_name + " of type " + package_type + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserPackageExists(username, package_type, package_name) {
  return getUserPackage(username, package_type, package_name);
}

function verifyUserPackageDoesNotExist(username, package_type, package_name) {
  return getUserPackage(username, package_type, package_name);
}

function tryToDeleteANonExistingUserPackage(username, package_type, package_name) {
  return deleteUserPackage(username, package_type, package_name);
}

// ---- Entity: user package restore ----

function restoreUserPackage(username, package_type, package_name, token) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/restore";
  var description = "Restore package " + package_name + " of type " + package_type + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserPackageRestore(username, package_type, package_name, token) {
  return restoreUserPackage(username, package_type, package_name, token);
}

// ---- Entity: user package version ----

function getUserPackageVersion(username, package_type, package_name, package_version_id) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Get package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserPackageVersion(username, package_type, package_name, package_version_id) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Delete package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserPackageVersionExists(username, package_type, package_name, package_version_id) {
  return getUserPackageVersion(username, package_type, package_name, package_version_id);
}

function verifyUserPackageVersionDoesNotExist(username, package_type, package_name, package_version_id) {
  return getUserPackageVersion(username, package_type, package_name, package_version_id);
}

function tryToDeleteANonExistingUserPackageVersion(username, package_type, package_name, package_version_id) {
  return deleteUserPackageVersion(username, package_type, package_name, package_version_id);
}

// ---- Entity: user package version restore ----

function restoreUserPackageVersion(username, package_type, package_name, package_version_id) {
  var url = "/users/" + username + "/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Restore package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserPackageVersionRestore(username, package_type, package_name, package_version_id) {
  return restoreUserPackageVersion(username, package_type, package_name, package_version_id);
}

// ---- Entity: authenticated user package ----

function getUserSelfPackage(package_type, package_name) {
  var url = "/user/packages/" + package_type + "/" + package_name;
  var description = "Get package " + package_name + " of type " + package_type + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserSelfPackage(package_type, package_name) {
  var url = "/user/packages/" + package_type + "/" + package_name;
  var description = "Delete package " + package_name + " of type " + package_type + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserPackageSelfExists(package_type, package_name) {
  return getUserSelfPackage(package_type, package_name);
}

function verifyUserPackageSelfDoesNotExist(package_type, package_name) {
  return getUserSelfPackage(package_type, package_name);
}

function tryToDeleteANonExistingUserPackageSelf(package_type, package_name) {
  return deleteUserSelfPackage(package_type, package_name);
}

// ---- Entity: authenticated user package restore ----

function restoreUserSelfPackage(package_type, package_name, token) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/restore";
  var description = "Restore package " + package_name + " of type " + package_type + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserPackageSelfRestore(package_type, package_name, token) {
  return restoreUserSelfPackage(package_type, package_name, token);
}

// ---- Entity: authenticated user package version ----

function getUserSelfPackageVersion(package_type, package_name, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Get package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserSelfPackageVersion(package_type, package_name, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id;
  var description = "Delete package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserPackageVersionSelfExists(package_type, package_name, package_version_id) {
  return getUserSelfPackageVersion(package_type, package_name, package_version_id);
}

function verifyUserPackageVersionSelfDoesNotExist(package_type, package_name, package_version_id) {
  return getUserSelfPackageVersion(package_type, package_name, package_version_id);
}

function tryToDeleteANonExistingUserPackageVersionSelf(package_type, package_name, package_version_id) {
  return deleteUserSelfPackageVersion(package_type, package_name, package_version_id);
}

// ---- Entity: authenticated user package version restore ----

function restoreUserSelfPackageVersion(package_type, package_name, package_version_id) {
  var url = "/user/packages/" + package_type + "/" + package_name + "/versions/" + package_version_id + "/restore";
  var description = "Restore package version " + package_version_id + " of package " + package_name + " of type " + package_type + " for authenticated user";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserPackageVersionSelfRestore(package_type, package_name, package_version_id) {
  return restoreUserSelfPackageVersion(package_type, package_name, package_version_id);
}

// ---- Entity: code scanning alert ----

function getAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number;
  var description = "Get code scanning alert " + alert_number + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number;
  var description = "Update code scanning alert " + alert_number + " in " + repo + " of " + owner;
  var body = {
    "state": state,
    "dismissed_reason": dismissed_reason,
    "dismissed_comment": dismissed_comment,
    "create_request": create_request,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningAlertExists(owner, repo, alert_number) {
  return getAlert(owner, repo, alert_number);
}

function verifyCodeScanningAlertDoesNotExist(owner, repo, alert_number) {
  return getAlert(owner, repo, alert_number);
}

// ---- Entity: code scanning alert autofix ----

function getAutofix(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Get autofix status for alert " + alert_number + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createAutofix(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix";
  var description = "Create autofix for alert " + alert_number + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCodeScanningAlertAutofix(owner, repo, alert_number) {
  return createAutofix(owner, repo, alert_number);
}

function verifyCodeScanningAlertAutofixExists(owner, repo, alert_number) {
  return getAutofix(owner, repo, alert_number);
}

function verifyCodeScanningAlertAutofixDoesNotExist(owner, repo, alert_number) {
  return getAutofix(owner, repo, alert_number);
}

// ---- Entity: code scanning alert autofix commit ----

function commitAutofix(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/autofix/commits";
  var description = "Commit autofix for alert " + alert_number + " in " + repo + " of " + owner;
  var body = {
    "commits": commits,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCodeScanningAlertAutofixCommit(owner, repo, alert_number) {
  return commitAutofix(owner, repo, alert_number);
}

// ---- Entity: code scanning alert instance ----

function listAlertInstances(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts/" + alert_number + "/instances";
  var description = "List instances of alert " + alert_number + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningAlertInstanceExists(owner, repo, alert_number) {
  return listAlertInstances(owner, repo, alert_number);
}

function verifyCodeScanningAlertInstanceDoesNotExist(owner, repo, alert_number) {
  return listAlertInstances(owner, repo, alert_number);
}

// ---- Entity: code scanning analysis ----

function getAnalysis(owner, repo, analysis_id) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Get code scanning analysis " + analysis_id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAnalysis(owner, repo, analysis_id) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses/" + analysis_id;
  var description = "Delete code scanning analysis " + analysis_id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningAnalysisExists(owner, repo, analysis_id) {
  return getAnalysis(owner, repo, analysis_id);
}

function verifyCodeScanningAnalysisDoesNotExist(owner, repo, analysis_id) {
  return getAnalysis(owner, repo, analysis_id);
}

function tryToDeleteANonExistingCodeScanningAnalysis(owner, repo, analysis_id) {
  return deleteAnalysis(owner, repo, analysis_id);
}

// ---- Entity: code scanning analysis list ----

function listRecentAnalyses(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/analyses";
  var description = "List code scanning analyses in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningAnalysisListExists(owner, repo) {
  return listRecentAnalyses(owner, repo);
}

function verifyCodeScanningAnalysisListDoesNotExist(owner, repo) {
  return listRecentAnalyses(owner, repo);
}

// ---- Entity: CodeQL database ----

function getCodeqlDatabase(owner, repo, language) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Get CodeQL database for language " + language + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCodeqlDatabase(owner, repo, language) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases/" + language;
  var description = "Delete CodeQL database for language " + language + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeQLDatabaseExists(owner, repo, language) {
  return getCodeqlDatabase(owner, repo, language);
}

function verifyCodeQLDatabaseDoesNotExist(owner, repo, language) {
  return getCodeqlDatabase(owner, repo, language);
}

function tryToDeleteANonExistingCodeQLDatabase(owner, repo, language) {
  return deleteCodeqlDatabase(owner, repo, language);
}

// ---- Entity: CodeQL database list ----

function listCodeqlDatabases(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/databases";
  var description = "List CodeQL databases in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeQLDatabaseListExists(owner, repo) {
  return listCodeqlDatabases(owner, repo);
}

function verifyCodeQLDatabaseListDoesNotExist(owner, repo) {
  return listCodeqlDatabases(owner, repo);
}

// ---- Entity: CodeQL variant analysis ----

function createVariantAnalysis(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses";
  var description = "Create CodeQL variant analysis in " + repo + " of " + owner;
  var body = {
    "language": language,
    "query_pack": query_pack,
    "repositories": repositories,
    "repository_lists": repository_lists,
    "repository_owners": repository_owners,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getVariantAnalysis(owner, repo, codeql_variant_analysis_id) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id;
  var description = "Get CodeQL variant analysis " + codeql_variant_analysis_id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCodeQLVariantAnalysis(owner, repo, codeql_variant_analysis_id) {
  return createVariantAnalysis(owner, repo);
}

function verifyCodeQLVariantAnalysisExists(owner, repo, codeql_variant_analysis_id) {
  return getVariantAnalysis(owner, repo, codeql_variant_analysis_id);
}

function verifyCodeQLVariantAnalysisDoesNotExist(owner, repo, codeql_variant_analysis_id) {
  return getVariantAnalysis(owner, repo, codeql_variant_analysis_id);
}

// ---- Entity: CodeQL variant analysis repository task ----

function getVariantAnalysisRepoTask(owner, repo, codeql_variant_analysis_id, repo_owner, repo_name) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/codeql/variant-analyses/" + codeql_variant_analysis_id + "/repos/" + repo_owner + "/" + repo_name;
  var description = "Get variant analysis " + codeql_variant_analysis_id + " repo task for " + repo_owner + "/" + repo_name + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeQLVariantAnalysisRepoTaskExists(owner, repo, codeql_variant_analysis_id, repo_owner, repo_name) {
  return getVariantAnalysisRepoTask(owner, repo, codeql_variant_analysis_id, repo_owner, repo_name);
}

function verifyCodeQLVariantAnalysisRepoTaskDoesNotExist(owner, repo, codeql_variant_analysis_id, repo_owner, repo_name) {
  return getVariantAnalysisRepoTask(owner, repo, codeql_variant_analysis_id, repo_owner, repo_name);
}

// ---- Entity: code scanning default setup ----

function getDefaultSetup(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/default-setup";
  var description = "Get code scanning default setup in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDefaultSetup(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/default-setup";
  var description = "Update code scanning default setup in " + repo + " of " + owner;
  var body = {
    "default_setup_update": default_setup_update,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningDefaultSetupExists(owner, repo) {
  return getDefaultSetup(owner, repo);
}

function verifyCodeScanningDefaultSetupDoesNotExist(owner, repo) {
  return getDefaultSetup(owner, repo);
}

// ---- Entity: SARIF upload ----

function uploadSarif(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs";
  var description = "Upload SARIF data to " + repo + " of " + owner;
  var body = {
    "commit_sha": commit_sha,
    "ref": ref,
    "sarif": sarif,
    "checkout_uri": checkout_uri,
    "started_at": started_at,
    "tool_name": tool_name,
    "validate": validate,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSarif(owner, repo, sarif_id) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/sarifs/" + sarif_id;
  var description = "Get SARIF upload " + sarif_id + " in " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSarifUpload(owner, repo, sarif_id) {
  return uploadSarif(owner, repo);
}

function verifySarifUploadExists(owner, repo, sarif_id) {
  return getSarif(owner, repo, sarif_id);
}

function verifySarifUploadDoesNotExist(owner, repo, sarif_id) {
  return getSarif(owner, repo, sarif_id);
}

// ---- Entity: code scanning alert list for organization ----

function listAlertsForOrg(org) {
  var url = "/orgs/" + org + "/code-scanning/alerts";
  var description = "List code scanning alerts for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningAlertListOrgExists(org) {
  return listAlertsForOrg(org);
}

function verifyCodeScanningAlertListOrgDoesNotExist(org) {
  return listAlertsForOrg(org);
}

// ---- Entity: code scanning alert list for repository ----

function listAlertsForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-scanning/alerts";
  var description = "List code scanning alerts for repository " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeScanningAlertListRepoExists(owner, repo) {
  return listAlertsForRepo(owner, repo);
}

function verifyCodeScanningAlertListRepoDoesNotExist(owner, repo) {
  return listAlertsForRepo(owner, repo);
}

// ---- Entity: team discussion comment reaction ----

function listReactionsForTeamDiscussionComment(org, team_slug, discussion_number, comment_number) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "List reactions for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_slug + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForTeamDiscussionComment(org, team_slug, discussion_number, comment_number, content) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "Create reaction " + content + " for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_slug + " in org " + org;
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

function tryToAddExistingTeamDiscussionCommentReaction(org, team_slug, discussion_number, comment_number, content) {
  return createReactionForTeamDiscussionComment(org, team_slug, discussion_number, comment_number, content);
}

function verifyTeamDiscussionCommentReactionExists(org, team_slug, discussion_number, comment_number, content) {
  return listReactionsForTeamDiscussionComment(org, team_slug, discussion_number, comment_number);
}

function verifyTeamDiscussionCommentReactionDoesNotExist(org, team_slug, discussion_number, comment_number, content) {
  return listReactionsForTeamDiscussionComment(org, team_slug, discussion_number, comment_number);
}

// ---- Entity: team discussion comment reaction instance ----

function deleteTeamDiscussionCommentReaction(org, team_slug, discussion_number, comment_number, reaction_id) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_slug + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingTeamDiscussionCommentReactionInstance(org, team_slug, discussion_number, comment_number, reaction_id) {
  return deleteTeamDiscussionCommentReaction(org, team_slug, discussion_number, comment_number, reaction_id);
}

// ---- Entity: team discussion reaction ----

function listReactionsForTeamDiscussion(org, team_slug, discussion_number) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/reactions";
  var description = "List reactions for team discussion " + discussion_number + " of team " + team_slug + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForTeamDiscussion(org, team_slug, discussion_number, content) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/reactions";
  var description = "Create reaction " + content + " for team discussion " + discussion_number + " of team " + team_slug + " in org " + org;
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

function tryToAddExistingTeamDiscussionReaction(org, team_slug, discussion_number, content) {
  return createReactionForTeamDiscussion(org, team_slug, discussion_number, content);
}

function verifyTeamDiscussionReactionExists(org, team_slug, discussion_number, content) {
  return listReactionsForTeamDiscussion(org, team_slug, discussion_number);
}

function verifyTeamDiscussionReactionDoesNotExist(org, team_slug, discussion_number, content) {
  return listReactionsForTeamDiscussion(org, team_slug, discussion_number);
}

// ---- Entity: team discussion reaction instance ----

function deleteTeamDiscussionReaction(org, team_slug, discussion_number, reaction_id) {
  var url = "/orgs/" + org + "/teams/" + team_slug + "/discussions/" + discussion_number + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for team discussion " + discussion_number + " of team " + team_slug + " in org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingTeamDiscussionReactionInstance(org, team_slug, discussion_number, reaction_id) {
  return deleteTeamDiscussionReaction(org, team_slug, discussion_number, reaction_id);
}

// ---- Entity: commit comment reaction ----

function listReactionsForCommitComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "List reactions for commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForCommitComment(owner, repo, comment_id, content) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions";
  var description = "Create reaction " + content + " for commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
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

function tryToAddExistingCommitCommentReaction(owner, repo, comment_id, content) {
  return createReactionForCommitComment(owner, repo, comment_id, content);
}

function verifyCommitCommentReactionExists(owner, repo, comment_id, content) {
  return listReactionsForCommitComment(owner, repo, comment_id);
}

function verifyCommitCommentReactionDoesNotExist(owner, repo, comment_id, content) {
  return listReactionsForCommitComment(owner, repo, comment_id);
}

// ---- Entity: commit comment reaction instance ----

function deleteCommitCommentReaction(owner, repo, comment_id, reaction_id) {
  var url = "/repos/" + owner + "/" + repo + "/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for commit comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingCommitCommentReactionInstance(owner, repo, comment_id, reaction_id) {
  return deleteCommitCommentReaction(owner, repo, comment_id, reaction_id);
}

// ---- Entity: issue comment reaction ----

function listReactionsForIssueComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "List reactions for issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForIssueComment(owner, repo, comment_id, content) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions";
  var description = "Create reaction " + content + " for issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
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

function tryToAddExistingIssueCommentReaction(owner, repo, comment_id, content) {
  return createReactionForIssueComment(owner, repo, comment_id, content);
}

function verifyIssueCommentReactionExists(owner, repo, comment_id, content) {
  return listReactionsForIssueComment(owner, repo, comment_id);
}

function verifyIssueCommentReactionDoesNotExist(owner, repo, comment_id, content) {
  return listReactionsForIssueComment(owner, repo, comment_id);
}

// ---- Entity: issue comment reaction instance ----

function deleteIssueCommentReaction(owner, repo, comment_id, reaction_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for issue comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingIssueCommentReactionInstance(owner, repo, comment_id, reaction_id) {
  return deleteIssueCommentReaction(owner, repo, comment_id, reaction_id);
}

// ---- Entity: issue reaction ----

function listReactionsForIssue(owner, repo, issue_number) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "List reactions for issue " + issue_number + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForIssue(owner, repo, issue_number, content) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions";
  var description = "Create reaction " + content + " for issue " + issue_number + " in repo " + repo + " owned by " + owner;
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

function tryToAddExistingIssueReaction(owner, repo, issue_number, content) {
  return createReactionForIssue(owner, repo, issue_number, content);
}

function verifyIssueReactionExists(owner, repo, issue_number, content) {
  return listReactionsForIssue(owner, repo, issue_number);
}

function verifyIssueReactionDoesNotExist(owner, repo, issue_number, content) {
  return listReactionsForIssue(owner, repo, issue_number);
}

// ---- Entity: issue reaction instance ----

function deleteIssueReaction(owner, repo, issue_number, reaction_id) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + issue_number + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for issue " + issue_number + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingIssueReactionInstance(owner, repo, issue_number, reaction_id) {
  return deleteIssueReaction(owner, repo, issue_number, reaction_id);
}

// ---- Entity: pull request review comment reaction ----

function listReactionsForPullRequestReviewComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "List reactions for pull request review comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForPullRequestReviewComment(owner, repo, comment_id, content) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions";
  var description = "Create reaction " + content + " for pull request review comment " + comment_id + " in repo " + repo + " owned by " + owner;
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

function tryToAddExistingPullRequestReviewCommentReaction(owner, repo, comment_id, content) {
  return createReactionForPullRequestReviewComment(owner, repo, comment_id, content);
}

function verifyPullRequestReviewCommentReactionExists(owner, repo, comment_id, content) {
  return listReactionsForPullRequestReviewComment(owner, repo, comment_id);
}

function verifyPullRequestReviewCommentReactionDoesNotExist(owner, repo, comment_id, content) {
  return listReactionsForPullRequestReviewComment(owner, repo, comment_id);
}

// ---- Entity: pull request review comment reaction instance ----

function deletePullRequestReviewCommentReaction(owner, repo, comment_id, reaction_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for pull request review comment " + comment_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingPullRequestReviewCommentReactionInstance(owner, repo, comment_id, reaction_id) {
  return deletePullRequestReviewCommentReaction(owner, repo, comment_id, reaction_id);
}

// ---- Entity: release reaction ----

function listReactionsForRelease(owner, repo, release_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "List reactions for release " + release_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForRelease(owner, repo, release_id, content) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions";
  var description = "Create reaction " + content + " for release " + release_id + " in repo " + repo + " owned by " + owner;
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

function tryToAddExistingReleaseReaction(owner, repo, release_id, content) {
  return createReactionForRelease(owner, repo, release_id, content);
}

function verifyReleaseReactionExists(owner, repo, release_id, content) {
  return listReactionsForRelease(owner, repo, release_id);
}

function verifyReleaseReactionDoesNotExist(owner, repo, release_id, content) {
  return listReactionsForRelease(owner, repo, release_id);
}

// ---- Entity: release reaction instance ----

function deleteReleaseReaction(owner, repo, release_id, reaction_id) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + release_id + "/reactions/" + reaction_id;
  var description = "Delete reaction " + reaction_id + " for release " + release_id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingReleaseReactionInstance(owner, repo, release_id, reaction_id) {
  return deleteReleaseReaction(owner, repo, release_id, reaction_id);
}

// ---- Entity: team discussion comment reaction (legacy) ----

function listReactionsForTeamDiscussionCommentLegacy(team_id, discussion_number, comment_number) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "List reactions for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_id + " (Legacy)";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForTeamDiscussionCommentLegacy(team_id, discussion_number, comment_number, content) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/comments/" + comment_number + "/reactions";
  var description = "Create reaction " + content + " for team discussion comment " + comment_number + " in discussion " + discussion_number + " of team " + team_id + " (Legacy)";
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

function tryToAddExistingTeamDiscussionCommentReactionLegacy(team_id, discussion_number, comment_number, content) {
  return createReactionForTeamDiscussionCommentLegacy(team_id, discussion_number, comment_number, content);
}

function verifyTeamDiscussionCommentReactionLegacyExists(team_id, discussion_number, comment_number, content) {
  return listReactionsForTeamDiscussionCommentLegacy(team_id, discussion_number, comment_number);
}

function verifyTeamDiscussionCommentReactionLegacyDoesNotExist(team_id, discussion_number, comment_number, content) {
  return listReactionsForTeamDiscussionCommentLegacy(team_id, discussion_number, comment_number);
}

// ---- Entity: team discussion reaction (legacy) ----

function listReactionsForTeamDiscussionLegacy(team_id, discussion_number) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "List reactions for team discussion " + discussion_number + " of team " + team_id + " (Legacy)";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createReactionForTeamDiscussionLegacy(team_id, discussion_number, content) {
  var url = "/teams/" + team_id + "/discussions/" + discussion_number + "/reactions";
  var description = "Create reaction " + content + " for team discussion " + discussion_number + " of team " + team_id + " (Legacy)";
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

function tryToAddExistingTeamDiscussionReactionLegacy(team_id, discussion_number, content) {
  return createReactionForTeamDiscussionLegacy(team_id, discussion_number, content);
}

function verifyTeamDiscussionReactionLegacyExists(team_id, discussion_number, content) {
  return listReactionsForTeamDiscussionLegacy(team_id, discussion_number);
}

function verifyTeamDiscussionReactionLegacyDoesNotExist(team_id, discussion_number, content) {
  return listReactionsForTeamDiscussionLegacy(team_id, discussion_number);
}

// ---- Entity: pull request ----

function createPullRequest(title, head, base, body, maintainer_can_modify, draft, issue, head_repo) {
  var url = "/repos/{owner}/{repo}/pulls";
  var description = "Create pull request " + title;
  var body = {
    "title": title,
    "head": head,
    "base": base,
    "body": body,
    "maintainer_can_modify": maintainer_can_modify,
    "draft": draft,
    "issue": issue,
    "head_repo": head_repo,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPullRequest(owner, repo, pull_number) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number;
  var description = "Get pull request " + pull_number + " of " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePullRequest(owner, repo, pull_number, title, body, state, base, maintainer_can_modify) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number;
  var description = "Update pull request " + pull_number + " of " + owner + "/" + repo;
  var body = {
    "title": title,
    "body": body,
    "state": state,
    "base": base,
    "maintainer_can_modify": maintainer_can_modify,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPullRequest(title, head, base, body, maintainer_can_modify, draft, issue, head_repo, owner, repo, pull_number, state) {
  return createPullRequest(title, head, base, body, maintainer_can_modify, draft, issue, head_repo);
}

function verifyPullRequestExists(title, head, base, body, maintainer_can_modify, draft, issue, head_repo, owner, repo, pull_number, state) {
  return getPullRequest(owner, repo, pull_number);
}

function verifyPullRequestDoesNotExist(title, head, base, body, maintainer_can_modify, draft, issue, head_repo, owner, repo, pull_number, state) {
  return getPullRequest(owner, repo, pull_number);
}

// ---- Entity: pull request comment ----

function getReviewComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Get review comment " + comment_id + " of " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateReviewComment(owner, repo, comment_id, body) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Update review comment " + comment_id + " of " + owner + "/" + repo;
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

function deleteReviewComment(owner, repo, comment_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/comments/" + comment_id;
  var description = "Delete review comment " + comment_id + " of " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPullRequestCommentExists(owner, repo, comment_id, body) {
  return getReviewComment(owner, repo, comment_id);
}

function verifyPullRequestCommentDoesNotExist(owner, repo, comment_id, body) {
  return getReviewComment(owner, repo, comment_id);
}

function tryToDeleteANonExistingPullRequestComment(owner, repo, comment_id, body) {
  return deleteReviewComment(owner, repo, comment_id);
}

// ---- Entity: pull request review ----

function getReview(owner, repo, pull_number, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Get review " + review_id + " of pull request " + pull_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateReview(owner, repo, pull_number, review_id, body) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Update review " + review_id + " of pull request " + pull_number + " in " + owner + "/" + repo;
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

function deletePendingReview(owner, repo, pull_number, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id;
  var description = "Delete pending review " + review_id + " of pull request " + pull_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function dismissReview(owner, repo, pull_number, review_id, message, event) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id + "/dismissals";
  var description = "Dismiss review " + review_id + " of pull request " + pull_number + " in " + owner + "/" + repo;
  var body = {
    "message": message,
    "event": event,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function submitReview(owner, repo, pull_number, review_id, body, event) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id + "/events";
  var description = "Submit review " + review_id + " of pull request " + pull_number + " in " + owner + "/" + repo;
  var body = {
    "body": body,
    "event": event,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPullRequestReviewExists(owner, repo, pull_number, review_id, body, message, event) {
  return getReview(owner, repo, pull_number, review_id);
}

function verifyPullRequestReviewDoesNotExist(owner, repo, pull_number, review_id, body, message, event) {
  return getReview(owner, repo, pull_number, review_id);
}

function tryToDeleteANonExistingPullRequestReview(owner, repo, pull_number, review_id, body, message, event) {
  return deletePendingReview(owner, repo, pull_number, review_id);
}

// ---- Entity: pull request review comment ----

function listCommentsForReview(owner, repo, pull_number, review_id) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/reviews/" + review_id + "/comments";
  var description = "List comments for review " + review_id + " of pull request " + pull_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: pull request reviewers ----

function listRequestedReviewers(owner, repo, pull_number) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Get all requested reviewers for pull request " + pull_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function requestReviewers(owner, repo, pull_number, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Request reviewers for pull request " + pull_number + " in " + owner + "/" + repo;
  var body = {
    "reviewers": reviewers,
    "team_reviewers": team_reviewers,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeRequestedReviewers(owner, repo, pull_number, reviewers, team_reviewers) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/requested_reviewers";
  var description = "Remove requested reviewers from pull request " + pull_number + " in " + owner + "/" + repo;
  var body = {
    "reviewers": reviewers,
    "team_reviewers": team_reviewers,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPullRequestReviewers(owner, repo, pull_number, reviewers, team_reviewers) {
  return requestReviewers(owner, repo, pull_number, reviewers, team_reviewers);
}

function verifyPullRequestReviewersExists(owner, repo, pull_number, reviewers, team_reviewers) {
  return listRequestedReviewers(owner, repo, pull_number);
}

function verifyPullRequestReviewersDoesNotExist(owner, repo, pull_number, reviewers, team_reviewers) {
  return listRequestedReviewers(owner, repo, pull_number);
}

function tryToDeleteANonExistingPullRequestReviewers(owner, repo, pull_number, reviewers, team_reviewers) {
  return removeRequestedReviewers(owner, repo, pull_number, reviewers, team_reviewers);
}

// ---- Entity: pull request review comment reply ----

function createReplyForReviewComment(owner, repo, pull_number, comment_id, body) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + pull_number + "/comments/" + comment_id + "/replies";
  var description = "Create reply for review comment " + comment_id + " on pull request " + pull_number + " in " + owner + "/" + repo;
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

function tryToAddExistingPullRequestReviewCommentReply(owner, repo, pull_number, comment_id, body) {
  return createReplyForReviewComment(owner, repo, pull_number, comment_id, body);
}

// ---- Entity: organization migration ----

function startOrgMigration(org, repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude) {
  var url = "/orgs/" + org + "/migrations";
  var description = "Start an organization migration for " + org;
  var body = {
    "repositories": repositories,
    "lock_repositories": lock_repositories,
    "exclude_metadata": exclude_metadata,
    "exclude_git_data": exclude_git_data,
    "exclude_attachments": exclude_attachments,
    "exclude_releases": exclude_releases,
    "exclude_owner_projects": exclude_owner_projects,
    "org_metadata_only": org_metadata_only,
    "exclude": exclude,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgMigrationStatus(org, migration_id, exclude) {
  var url = "/orgs/" + org + "/migrations/" + migration_id;
  var description = "Get status of migration " + migration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgMigrationArchive(org, migration_id) {
  var url = "/orgs/" + org + "/migrations/" + migration_id + "/archive";
  var description = "Delete migration archive " + migration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgMigration(org, repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return startOrgMigration(org, repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude);
}

function verifyOrgMigrationExists(org, repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return getOrgMigrationStatus(org, migration_id, exclude);
}

function verifyOrgMigrationDoesNotExist(org, repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return getOrgMigrationStatus(org, migration_id, exclude);
}

function tryToDeleteANonExistingOrgMigration(org, repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return deleteOrgMigrationArchive(org, migration_id);
}

// ---- Entity: organization migration archive ----

function downloadOrgMigrationArchive(org, migration_id) {
  var url = "/orgs/" + org + "/migrations/" + migration_id + "/archive";
  var description = "Download migration archive " + migration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgMigrationArchive(org, migration_id) {
  var url = "/orgs/" + org + "/migrations/" + migration_id + "/archive";
  var description = "Delete migration archive " + migration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgMigrationArchiveExists(org, migration_id) {
  return downloadOrgMigrationArchive(org, migration_id);
}

function verifyOrgMigrationArchiveDoesNotExist(org, migration_id) {
  return downloadOrgMigrationArchive(org, migration_id);
}

function tryToDeleteANonExistingOrgMigrationArchive(org, migration_id) {
  return deleteOrgMigrationArchive(org, migration_id);
}

// ---- Entity: organization migration repository lock ----

function unlockOrgMigrationRepo(org, migration_id, repo_name) {
  var url = "/orgs/" + org + "/migrations/" + migration_id + "/repos/" + repo_name + "/lock";
  var description = "Unlock repository " + repo_name + " in migration " + migration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrgMigrationRepoLock(org, migration_id, repo_name) {
  return unlockOrgMigrationRepo(org, migration_id, repo_name);
}

// ---- Entity: organization migration repositories ----

function listOrgMigrationRepos(org, migration_id) {
  var url = "/orgs/" + org + "/migrations/" + migration_id + "/repositories";
  var description = "List repositories in migration " + migration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgMigrationRepositoriesExists(org, migration_id) {
  return listOrgMigrationRepos(org, migration_id);
}

function verifyOrgMigrationRepositoriesDoesNotExist(org, migration_id) {
  return listOrgMigrationRepos(org, migration_id);
}

// ---- Entity: user migration ----

function startUserMigration(repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude) {
  var url = "/user/migrations";
  var description = "Start a user migration";
  var body = {
    "repositories": repositories,
    "lock_repositories": lock_repositories,
    "exclude_metadata": exclude_metadata,
    "exclude_git_data": exclude_git_data,
    "exclude_attachments": exclude_attachments,
    "exclude_releases": exclude_releases,
    "exclude_owner_projects": exclude_owner_projects,
    "org_metadata_only": org_metadata_only,
    "exclude": exclude,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUserMigrationStatus(migration_id, exclude) {
  var url = "/user/migrations/" + migration_id;
  var description = "Get status of user migration " + migration_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserMigrationArchive(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Delete user migration archive " + migration_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserMigration(repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return startUserMigration(repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude);
}

function verifyUserMigrationExists(repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return getUserMigrationStatus(migration_id, exclude);
}

function verifyUserMigrationDoesNotExist(repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return getUserMigrationStatus(migration_id, exclude);
}

function tryToDeleteANonExistingUserMigration(repositories, lock_repositories, exclude_metadata, exclude_git_data, exclude_attachments, exclude_releases, exclude_owner_projects, org_metadata_only, exclude, migration_id) {
  return deleteUserMigrationArchive(migration_id);
}

// ---- Entity: user migration archive ----

function downloadUserMigrationArchive(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Download user migration archive " + migration_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserMigrationArchive(migration_id) {
  var url = "/user/migrations/" + migration_id + "/archive";
  var description = "Delete user migration archive " + migration_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserMigrationArchiveExists(migration_id) {
  return downloadUserMigrationArchive(migration_id);
}

function verifyUserMigrationArchiveDoesNotExist(migration_id) {
  return downloadUserMigrationArchive(migration_id);
}

function tryToDeleteANonExistingUserMigrationArchive(migration_id) {
  return deleteUserMigrationArchive(migration_id);
}

// ---- Entity: user migration repository lock ----

function unlockUserMigrationRepo(migration_id, repo_name) {
  var url = "/user/migrations/" + migration_id + "/repos/" + repo_name + "/lock";
  var description = "Unlock repository " + repo_name + " in user migration " + migration_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingUserMigrationRepoLock(migration_id, repo_name) {
  return unlockUserMigrationRepo(migration_id, repo_name);
}

// ---- Entity: user migration repositories ----

function listUserMigrationRepos(migration_id) {
  var url = "/user/migrations/" + migration_id + "/repositories";
  var description = "List repositories in user migration " + migration_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserMigrationRepositoriesExists(migration_id) {
  return listUserMigrationRepos(migration_id);
}

function verifyUserMigrationRepositoriesDoesNotExist(migration_id) {
  return listUserMigrationRepos(migration_id);
}

// ---- Entity: import ----

function startImport(owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Start import for repo " + repo + " owned by " + owner;
  var body = {
    "vcs_url": vcs_url,
    "vcs": vcs,
    "vcs_username": vcs_username,
    "vcs_password": vcs_password,
    "tfvc_project": tfvc_project,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getImportStatus(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Get import status for repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateImport(owner, repo, vcs_username, vcs_password, vcs, tfvc_project) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Update import for repo " + repo + " owned by " + owner;
  var body = {
    "vcs_username": vcs_username,
    "vcs_password": vcs_password,
    "vcs": vcs,
    "tfvc_project": tfvc_project,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelImport(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import";
  var description = "Cancel import for repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingImport(owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project) {
  return startImport(owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project);
}

function verifyImportExists(owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project) {
  return getImportStatus(owner, repo);
}

function verifyImportDoesNotExist(owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project) {
  return getImportStatus(owner, repo);
}

function tryToDeleteANonExistingImport(owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project) {
  return cancelImport(owner, repo);
}

// ---- Entity: import commit author ----

function mapCommitAuthor(owner, repo, author_id, email, name) {
  var url = "/repos/" + owner + "/" + repo + "/import/authors/" + author_id;
  var description = "Map commit author " + author_id + " for repo " + repo + " owned by " + owner;
  var body = {
    "email": email,
    "name": name,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: import commit authors ----

function getCommitAuthors(owner, repo, since_user) {
  var url = "/repos/" + owner + "/" + repo + "/import/authors";
  var description = "Get commit authors for repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyImportAuthorsExists(owner, repo, since_user) {
  return getCommitAuthors(owner, repo, since_user);
}

function verifyImportAuthorsDoesNotExist(owner, repo, since_user) {
  return getCommitAuthors(owner, repo, since_user);
}

// ---- Entity: import large files ----

function getLargeFiles(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/import/large_files";
  var description = "Get large files for repo " + repo + " owned by " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyImportLargeFilesExists(owner, repo) {
  return getLargeFiles(owner, repo);
}

function verifyImportLargeFilesDoesNotExist(owner, repo) {
  return getLargeFiles(owner, repo);
}

// ---- Entity: import Git LFS preference ----

function setLfsPreference(owner, repo, use_lfs) {
  var url = "/repos/" + owner + "/" + repo + "/import/lfs";
  var description = "Update Git LFS preference for repo " + repo + " owned by " + owner;
  var body = {
    "use_lfs": use_lfs,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: enterprise code security configuration ----

function createEnterpriseConfiguration(enterprise, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations";
  var description = "Create code security configuration " + name + " for enterprise " + enterprise;
  var body = {
    "name": name,
    "description": description,
    "advanced_security": advanced_security,
    "code_security": code_security,
    "dependency_graph": dependency_graph,
    "dependency_graph_autosubmit_action": dependency_graph_autosubmit_action,
    "dependency_graph_autosubmit_action_options": dependency_graph_autosubmit_action_options,
    "dependabot_alerts": dependabot_alerts,
    "dependabot_security_updates": dependabot_security_updates,
    "code_scanning_options": code_scanning_options,
    "code_scanning_default_setup": code_scanning_default_setup,
    "code_scanning_default_setup_options": code_scanning_default_setup_options,
    "code_scanning_delegated_alert_dismissal": code_scanning_delegated_alert_dismissal,
    "secret_protection": secret_protection,
    "secret_scanning": secret_scanning,
    "secret_scanning_push_protection": secret_scanning_push_protection,
    "secret_scanning_validity_checks": secret_scanning_validity_checks,
    "secret_scanning_non_provider_patterns": secret_scanning_non_provider_patterns,
    "secret_scanning_generic_secrets": secret_scanning_generic_secrets,
    "secret_scanning_delegated_alert_dismissal": secret_scanning_delegated_alert_dismissal,
    "private_vulnerability_reporting": private_vulnerability_reporting,
    "enforcement": enforcement,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getEnterpriseConfiguration(enterprise, configuration_id) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Get code security configuration " + configuration_id + " for enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateEnterpriseConfiguration(enterprise, configuration_id, name) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Update code security configuration " + configuration_id + " for enterprise " + enterprise;
  var body = {
    "name": name,
    "description": description,
    "advanced_security": advanced_security,
    "code_security": code_security,
    "dependency_graph": dependency_graph,
    "dependency_graph_autosubmit_action": dependency_graph_autosubmit_action,
    "dependency_graph_autosubmit_action_options": dependency_graph_autosubmit_action_options,
    "dependabot_alerts": dependabot_alerts,
    "dependabot_security_updates": dependabot_security_updates,
    "code_scanning_default_setup": code_scanning_default_setup,
    "code_scanning_default_setup_options": code_scanning_default_setup_options,
    "code_scanning_delegated_alert_dismissal": code_scanning_delegated_alert_dismissal,
    "secret_protection": secret_protection,
    "secret_scanning": secret_scanning,
    "secret_scanning_push_protection": secret_scanning_push_protection,
    "secret_scanning_validity_checks": secret_scanning_validity_checks,
    "secret_scanning_non_provider_patterns": secret_scanning_non_provider_patterns,
    "secret_scanning_generic_secrets": secret_scanning_generic_secrets,
    "secret_scanning_delegated_alert_dismissal": secret_scanning_delegated_alert_dismissal,
    "private_vulnerability_reporting": private_vulnerability_reporting,
    "enforcement": enforcement,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteEnterpriseConfiguration(enterprise, configuration_id) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id;
  var description = "Delete code security configuration " + configuration_id + " for enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnterpriseCodeSecurityConfiguration(enterprise, name, configuration_id) {
  return createEnterpriseConfiguration(enterprise, name);
}

function verifyEnterpriseCodeSecurityConfigurationExists(enterprise, name, configuration_id) {
  return getEnterpriseConfiguration(enterprise, configuration_id);
}

function verifyEnterpriseCodeSecurityConfigurationDoesNotExist(enterprise, name, configuration_id) {
  return getEnterpriseConfiguration(enterprise, configuration_id);
}

function tryToDeleteANonExistingEnterpriseCodeSecurityConfiguration(enterprise, name, configuration_id) {
  return deleteEnterpriseConfiguration(enterprise, configuration_id);
}

// ---- Entity: enterprise code security configuration attachment ----

function attachEnterpriseConfiguration(enterprise, configuration_id, scope) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/attach";
  var description = "Attach enterprise configuration " + configuration_id + " for enterprise " + enterprise + " to repositories";
  var body = {
    "scope": scope,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnterpriseCodeSecurityConfigurationAttachment(enterprise, configuration_id, scope) {
  return attachEnterpriseConfiguration(enterprise, configuration_id, scope);
}

// ---- Entity: enterprise code security configuration default ----

function setEnterpriseConfigurationAsDefault(enterprise, configuration_id, default_for_new_repos) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/defaults";
  var description = "Set code security configuration " + configuration_id + " as default for enterprise " + enterprise;
  var body = {
    "default_for_new_repos": default_for_new_repos,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: enterprise code security configuration repositories ----

function getRepositoriesForEnterpriseConfiguration(enterprise, configuration_id) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Get repositories for enterprise code security configuration " + configuration_id + " of enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyEnterpriseCodeSecurityConfigurationRepositoriesExists(enterprise, configuration_id) {
  return getRepositoriesForEnterpriseConfiguration(enterprise, configuration_id);
}

function verifyEnterpriseCodeSecurityConfigurationRepositoriesDoesNotExist(enterprise, configuration_id) {
  return getRepositoriesForEnterpriseConfiguration(enterprise, configuration_id);
}

// ---- Entity: organization code security configuration ----

function createOrgConfiguration(org, name) {
  var url = "/orgs/" + org + "/code-security/configurations";
  var description = "Create code security configuration " + name + " for organization " + org;
  var body = {
    "name": name,
    "description": description,
    "advanced_security": advanced_security,
    "code_security": code_security,
    "dependency_graph": dependency_graph,
    "dependency_graph_autosubmit_action": dependency_graph_autosubmit_action,
    "dependency_graph_autosubmit_action_options": dependency_graph_autosubmit_action_options,
    "dependabot_alerts": dependabot_alerts,
    "dependabot_security_updates": dependabot_security_updates,
    "code_scanning_options": code_scanning_options,
    "code_scanning_default_setup": code_scanning_default_setup,
    "code_scanning_default_setup_options": code_scanning_default_setup_options,
    "code_scanning_delegated_alert_dismissal": code_scanning_delegated_alert_dismissal,
    "secret_protection": secret_protection,
    "secret_scanning": secret_scanning,
    "secret_scanning_push_protection": secret_scanning_push_protection,
    "secret_scanning_delegated_bypass": secret_scanning_delegated_bypass,
    "secret_scanning_delegated_bypass_options": secret_scanning_delegated_bypass_options,
    "secret_scanning_validity_checks": secret_scanning_validity_checks,
    "secret_scanning_non_provider_patterns": secret_scanning_non_provider_patterns,
    "secret_scanning_generic_secrets": secret_scanning_generic_secrets,
    "secret_scanning_delegated_alert_dismissal": secret_scanning_delegated_alert_dismissal,
    "private_vulnerability_reporting": private_vulnerability_reporting,
    "enforcement": enforcement,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgConfiguration(org, configuration_id) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Get code security configuration " + configuration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgConfiguration(org, configuration_id, name) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Update code security configuration " + configuration_id + " for organization " + org;
  var body = {
    "name": name,
    "description": description,
    "advanced_security": advanced_security,
    "code_security": code_security,
    "dependency_graph": dependency_graph,
    "dependency_graph_autosubmit_action": dependency_graph_autosubmit_action,
    "dependency_graph_autosubmit_action_options": dependency_graph_autosubmit_action_options,
    "dependabot_alerts": dependabot_alerts,
    "dependabot_security_updates": dependabot_security_updates,
    "code_scanning_default_setup": code_scanning_default_setup,
    "code_scanning_default_setup_options": code_scanning_default_setup_options,
    "code_scanning_delegated_alert_dismissal": code_scanning_delegated_alert_dismissal,
    "secret_protection": secret_protection,
    "secret_scanning": secret_scanning,
    "secret_scanning_push_protection": secret_scanning_push_protection,
    "secret_scanning_delegated_bypass": secret_scanning_delegated_bypass,
    "secret_scanning_delegated_bypass_options": secret_scanning_delegated_bypass_options,
    "secret_scanning_validity_checks": secret_scanning_validity_checks,
    "secret_scanning_non_provider_patterns": secret_scanning_non_provider_patterns,
    "secret_scanning_generic_secrets": secret_scanning_generic_secrets,
    "secret_scanning_delegated_alert_dismissal": secret_scanning_delegated_alert_dismissal,
    "private_vulnerability_reporting": private_vulnerability_reporting,
    "enforcement": enforcement,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgConfiguration(org, configuration_id) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id;
  var description = "Delete code security configuration " + configuration_id + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgCodeSecurityConfiguration(org, name, configuration_id) {
  return createOrgConfiguration(org, name);
}

function verifyOrgCodeSecurityConfigurationExists(org, name, configuration_id) {
  return getOrgConfiguration(org, configuration_id);
}

function verifyOrgCodeSecurityConfigurationDoesNotExist(org, name, configuration_id) {
  return getOrgConfiguration(org, configuration_id);
}

function tryToDeleteANonExistingOrgCodeSecurityConfiguration(org, name, configuration_id) {
  return deleteOrgConfiguration(org, configuration_id);
}

// ---- Entity: organization code security configuration attachment ----

function attachOrgConfiguration(org, configuration_id, scope, selected_repository_ids) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/attach";
  var description = "Attach configuration " + configuration_id + " for organization " + org + " to repositories";
  var body = {
    "scope": scope,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrgCodeSecurityConfigurationAttachment(org, configuration_id, scope, selected_repository_ids) {
  return attachOrgConfiguration(org, configuration_id, scope, selected_repository_ids);
}

// ---- Entity: organization code security configuration default ----

function setOrgConfigurationAsDefault(org, configuration_id, default_for_new_repos) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/defaults";
  var description = "Set code security configuration " + configuration_id + " as default for organization " + org;
  var body = {
    "default_for_new_repos": default_for_new_repos,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: organization code security configuration repositories ----

function getRepositoriesForOrgConfiguration(org, configuration_id) {
  var url = "/orgs/" + org + "/code-security/configurations/" + configuration_id + "/repositories";
  var description = "Get repositories for code security configuration " + configuration_id + " of organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgCodeSecurityConfigurationRepositoriesExists(org, configuration_id) {
  return getRepositoriesForOrgConfiguration(org, configuration_id);
}

function verifyOrgCodeSecurityConfigurationRepositoriesDoesNotExist(org, configuration_id) {
  return getRepositoriesForOrgConfiguration(org, configuration_id);
}

// ---- Entity: organization code security configuration detach ----

function detachOrgConfiguration(org, selected_repository_ids) {
  var url = "/orgs/" + org + "/code-security/configurations/detach";
  var description = "Detach configurations from repositories in organization " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingOrgCodeSecurityConfigurationDetach(org, selected_repository_ids) {
  return detachOrgConfiguration(org, selected_repository_ids);
}

// ---- Entity: enterprise code security configuration defaults ----

function getEnterpriseDefaultConfigurations(enterprise) {
  var url = "/enterprises/" + enterprise + "/code-security/configurations/defaults";
  var description = "Get default code security configurations for enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyEnterpriseCodeSecurityConfigurationDefaultsExists(enterprise) {
  return getEnterpriseDefaultConfigurations(enterprise);
}

function verifyEnterpriseCodeSecurityConfigurationDefaultsDoesNotExist(enterprise) {
  return getEnterpriseDefaultConfigurations(enterprise);
}

// ---- Entity: organization code security configuration defaults ----

function getOrgDefaultConfigurations(org) {
  var url = "/orgs/" + org + "/code-security/configurations/defaults";
  var description = "Get default code security configurations for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgCodeSecurityConfigurationDefaultsExists(org) {
  return getOrgDefaultConfigurations(org);
}

function verifyOrgCodeSecurityConfigurationDefaultsDoesNotExist(org) {
  return getOrgDefaultConfigurations(org);
}

// ---- Entity: repository code security configuration ----

function getConfigurationForRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/code-security-configuration";
  var description = "Get code security configuration for repository " + repo + " of owner " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepositoryCodeSecurityConfigurationExists(owner, repo) {
  return getConfigurationForRepository(owner, repo);
}

function verifyRepositoryCodeSecurityConfigurationDoesNotExist(owner, repo) {
  return getConfigurationForRepository(owner, repo);
}

// ---- Entity: dependabot alert enterprise ----

function listDependabotAlertsForEnterprise(enterprise) {
  var url = "/enterprises/" + enterprise + "/dependabot/alerts";
  var description = "List Dependabot alerts for enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotAlertEnterpriseExists(enterprise) {
  return listDependabotAlertsForEnterprise(enterprise);
}

function verifyDependabotAlertEnterpriseDoesNotExist(enterprise) {
  return listDependabotAlertsForEnterprise(enterprise);
}

// ---- Entity: dependabot alert organization ----

function listDependabotAlertsForOrg(org) {
  var url = "/orgs/" + org + "/dependabot/alerts";
  var description = "List Dependabot alerts for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotAlertOrganizationExists(org) {
  return listDependabotAlertsForOrg(org);
}

function verifyDependabotAlertOrganizationDoesNotExist(org) {
  return listDependabotAlertsForOrg(org);
}

// ---- Entity: dependabot alert repository ----

function getDependabotAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts/" + alert_number;
  var description = "Get Dependabot alert " + alert_number + " for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDependabotAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts/" + alert_number;
  var description = "Update Dependabot alert " + alert_number + " for repo " + repo + " of " + owner;
  var body = {
    "state": state,
    "dismissed_reason": dismissed_reason,
    "dismissed_comment": dismissed_comment,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listDependabotAlertsForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/alerts";
  var description = "List Dependabot alerts for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotAlertRepositoryExists(owner, repo, alert_number) {
  return getDependabotAlert(owner, repo, alert_number);
}

function verifyDependabotAlertRepositoryDoesNotExist(owner, repo, alert_number) {
  return getDependabotAlert(owner, repo, alert_number);
}

// ---- Entity: dependabot repository access ----

function listRepositoryAccessForOrg(org) {
  var url = "/organizations/" + org + "/dependabot/repository-access";
  var description = "List repositories Dependabot can access in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepositoryAccessForOrg(org) {
  var url = "/organizations/" + org + "/dependabot/repository-access";
  var description = "Update Dependabot repository access for organization " + org;
  var body = {
    "repository_ids_to_add": repository_ids_to_add,
    "repository_ids_to_remove": repository_ids_to_remove,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotRepositoryAccessExists(org) {
  return listRepositoryAccessForOrg(org);
}

function verifyDependabotRepositoryAccessDoesNotExist(org) {
  return listRepositoryAccessForOrg(org);
}

// ---- Entity: dependabot repository access default level ----

function setRepositoryAccessDefaultLevel(org) {
  var url = "/organizations/" + org + "/dependabot/repository-access/default-level";
  var description = "Set default repository access level for Dependabot in organization " + org;
  var body = {
    "default_level": default_level,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: dependabot organization secret ----

function getOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Get organization secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Create or update organization secret " + secret_name + " for org " + org;
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name;
  var description = "Delete organization secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDependabotOrgSecret(org, secret_name) {
  return createOrUpdateOrgSecret(org, secret_name);
}

function verifyDependabotOrgSecretExists(org, secret_name) {
  return getOrgSecret(org, secret_name);
}

function verifyDependabotOrgSecretDoesNotExist(org, secret_name) {
  return getOrgSecret(org, secret_name);
}

function tryToDeleteANonExistingDependabotOrgSecret(org, secret_name) {
  return deleteOrgSecret(org, secret_name);
}

// ---- Entity: dependabot organization secret selected repository ----

function addSelectedRepoToOrgSecret(org, secret_name, repository_id) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Add selected repository " + repository_id + " to organization secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeSelectedRepoFromOrgSecret(org, secret_name, repository_id) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories/" + repository_id;
  var description = "Remove selected repository " + repository_id + " from organization secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDependabotOrgSecretSelectedRepository(org, secret_name, repository_id) {
  return addSelectedRepoToOrgSecret(org, secret_name, repository_id);
}

function tryToDeleteANonExistingDependabotOrgSecretSelectedRepository(org, secret_name, repository_id) {
  return removeSelectedRepoFromOrgSecret(org, secret_name, repository_id);
}

// ---- Entity: dependabot organization secret selected repositories ----

function listSelectedReposForOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories";
  var description = "List selected repositories for organization secret " + secret_name + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setSelectedReposForOrgSecret(org, secret_name) {
  var url = "/orgs/" + org + "/dependabot/secrets/" + secret_name + "/repositories";
  var description = "Set selected repositories for organization secret " + secret_name + " for org " + org;
  var body = {
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotOrgSecretSelectedRepositoriesExists(org, secret_name) {
  return listSelectedReposForOrgSecret(org, secret_name);
}

function verifyDependabotOrgSecretSelectedRepositoriesDoesNotExist(org, secret_name) {
  return listSelectedReposForOrgSecret(org, secret_name);
}

// ---- Entity: dependabot organization secrets ----

function listOrgSecrets(org) {
  var url = "/orgs/" + org + "/dependabot/secrets";
  var description = "List organization secrets for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotOrgSecretsExists(org) {
  return listOrgSecrets(org);
}

function verifyDependabotOrgSecretsDoesNotExist(org) {
  return listOrgSecrets(org);
}

// ---- Entity: dependabot organization public key ----

function getOrgPublicKey(org) {
  var url = "/orgs/" + org + "/dependabot/secrets/public-key";
  var description = "Get organization public key for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotOrgPublicKeyExists(org) {
  return getOrgPublicKey(org);
}

function verifyDependabotOrgPublicKeyDoesNotExist(org) {
  return getOrgPublicKey(org);
}

// ---- Entity: dependabot repository secret ----

function getRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Get repository secret " + secret_name + " for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrUpdateRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Create or update repository secret " + secret_name + " for repo " + repo + " of " + owner;
  var body = {
    "encrypted_value": encrypted_value,
    "key_id": key_id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepoSecret(owner, repo, secret_name) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/" + secret_name;
  var description = "Delete repository secret " + secret_name + " for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDependabotRepoSecret(owner, repo, secret_name) {
  return createOrUpdateRepoSecret(owner, repo, secret_name);
}

function verifyDependabotRepoSecretExists(owner, repo, secret_name) {
  return getRepoSecret(owner, repo, secret_name);
}

function verifyDependabotRepoSecretDoesNotExist(owner, repo, secret_name) {
  return getRepoSecret(owner, repo, secret_name);
}

function tryToDeleteANonExistingDependabotRepoSecret(owner, repo, secret_name) {
  return deleteRepoSecret(owner, repo, secret_name);
}

// ---- Entity: dependabot repository secrets ----

function listRepoSecrets(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets";
  var description = "List repository secrets for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotRepoSecretsExists(owner, repo) {
  return listRepoSecrets(owner, repo);
}

function verifyDependabotRepoSecretsDoesNotExist(owner, repo) {
  return listRepoSecrets(owner, repo);
}

// ---- Entity: dependabot repository public key ----

function getRepoPublicKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/dependabot/secrets/public-key";
  var description = "Get repository public key for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependabotRepoPublicKeyExists(owner, repo) {
  return getRepoPublicKey(owner, repo);
}

function verifyDependabotRepoPublicKeyDoesNotExist(owner, repo) {
  return getRepoPublicKey(owner, repo);
}

// ---- Entity: project ----

function getProject(project_id) {
  var url = "/projects/" + project_id;
  var description = "Get project " + project_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProject(project_id, name, body, state, organization_permission, private) {
  var url = "/projects/" + project_id;
  var description = "Update project " + project_id + " with name " + name;
  var body = {
    "name": name,
    "body": body,
    "state": state,
    "organization_permission": organization_permission,
    "private": private,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProject(project_id) {
  var url = "/projects/" + project_id;
  var description = "Delete project " + project_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyProjectExists(project_id, name, body, state, organization_permission, private) {
  return getProject(project_id);
}

function verifyProjectDoesNotExist(project_id, name, body, state, organization_permission, private) {
  return getProject(project_id);
}

function tryToDeleteANonExistingProject(project_id, name, body, state, organization_permission, private) {
  return deleteProject(project_id);
}

// ---- Entity: project field ----

function getOrgProjectField(org, project_number, field_id) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/fields/" + field_id;
  var description = "Get project field " + field_id + " of project " + project_number + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyProjectFieldExists(org, project_number, field_id) {
  return getOrgProjectField(org, project_number, field_id);
}

function verifyProjectFieldDoesNotExist(org, project_number, field_id) {
  return getOrgProjectField(org, project_number, field_id);
}

// ---- Entity: project item ----

function addOrgProjectItem(org, project_number) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/items";
  var description = "Add item {type} with id {id} to project " + project_number + " of organization " + org;
  var body = {
    "type": type,
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgProjectItem(org, project_number, item_id) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Get item " + item_id + " of project " + project_number + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgProjectItem(org, project_number, item_id) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Update item " + item_id + " of project " + project_number + " for organization " + org;
  var body = {
    "fields": fields,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgProjectItem(org, project_number, item_id) {
  var url = "/orgs/" + org + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Delete item " + item_id + " of project " + project_number + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProjectItem(org, project_number, item_id) {
  return addOrgProjectItem(org, project_number);
}

function verifyProjectItemExists(org, project_number, item_id) {
  return getOrgProjectItem(org, project_number, item_id);
}

function verifyProjectItemDoesNotExist(org, project_number, item_id) {
  return getOrgProjectItem(org, project_number, item_id);
}

function tryToDeleteANonExistingProjectItem(org, project_number, item_id) {
  return deleteOrgProjectItem(org, project_number, item_id);
}

// ---- Entity: project ----

function getUserProject(username, project_number) {
  var url = "/users/" + username + "/projectsV2/" + project_number;
  var description = "Get project " + project_number + " of user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createUserProject(name) {
  var url = "/user/projects";
  var description = "Create user project " + name;
  var body = {
    "name": name,
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserProject(username, project_number, name) {
  return createUserProject(name);
}

function verifyUserProjectExists(username, project_number, name) {
  return getUserProject(username, project_number);
}

function verifyUserProjectDoesNotExist(username, project_number, name) {
  return getUserProject(username, project_number);
}

// ---- Entity: project field ----

function getUserProjectField(username, project_number, field_id) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/fields/" + field_id;
  var description = "Get project field " + field_id + " of project " + project_number + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserProjectFieldExists(username, project_number, field_id) {
  return getUserProjectField(username, project_number, field_id);
}

function verifyUserProjectFieldDoesNotExist(username, project_number, field_id) {
  return getUserProjectField(username, project_number, field_id);
}

// ---- Entity: project item ----

function addUserProjectItem(username, project_number) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items";
  var description = "Add item {type} with id {id} to project " + project_number + " of user " + username;
  var body = {
    "type": type,
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUserProjectItem(username, project_number, item_id) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Get item " + item_id + " of project " + project_number + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUserProjectItem(username, project_number, item_id) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Update item " + item_id + " of project " + project_number + " for user " + username;
  var body = {
    "fields": fields,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUserProjectItem(username, project_number, item_id) {
  var url = "/users/" + username + "/projectsV2/" + project_number + "/items/" + item_id;
  var description = "Delete item " + item_id + " of project " + project_number + " for user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUserProjectItem(username, project_number, item_id) {
  return addUserProjectItem(username, project_number);
}

function verifyUserProjectItemExists(username, project_number, item_id) {
  return getUserProjectItem(username, project_number, item_id);
}

function verifyUserProjectItemDoesNotExist(username, project_number, item_id) {
  return getUserProjectItem(username, project_number, item_id);
}

function tryToDeleteANonExistingUserProjectItem(username, project_number, item_id) {
  return deleteUserProjectItem(username, project_number, item_id);
}

// ---- Entity: blob ----

function createBlob(owner, repo, content, encoding) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs";
  var description = "Create blob with content " + content;
  var body = {
    "content": content,
    "encoding": encoding,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBlob(owner, repo, file_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + file_sha;
  var description = "Get blob " + file_sha;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBlob(owner, repo, content, encoding, file_sha) {
  return createBlob(owner, repo, content, encoding);
}

function verifyBlobExists(owner, repo, content, encoding, file_sha) {
  return getBlob(owner, repo, file_sha);
}

function verifyBlobDoesNotExist(owner, repo, content, encoding, file_sha) {
  return getBlob(owner, repo, file_sha);
}

// ---- Entity: commit ----

function createCommit(owner, repo, message, tree, parents, author, committer, signature) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits";
  var description = "Create commit with message " + message;
  var body = {
    "message": message,
    "tree": tree,
    "parents": parents,
    "author": author,
    "committer": committer,
    "signature": signature,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCommit(owner, repo, commit_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + commit_sha;
  var description = "Get commit " + commit_sha;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCommit(owner, repo, message, tree, parents, author, committer, signature, commit_sha) {
  return createCommit(owner, repo, message, tree, parents, author, committer, signature);
}

function verifyCommitExists(owner, repo, message, tree, parents, author, committer, signature, commit_sha) {
  return getCommit(owner, repo, commit_sha);
}

function verifyCommitDoesNotExist(owner, repo, message, tree, parents, author, committer, signature, commit_sha) {
  return getCommit(owner, repo, commit_sha);
}

// ---- Entity: reference ----

function createRef(owner, repo, ref, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs";
  var description = "Create reference " + ref;
  var body = {
    "ref": ref,
    "sha": sha,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRef(owner, repo, ref) {
  var url = "/repos/" + owner + "/" + repo + "/git/ref/" + ref;
  var description = "Get reference " + ref;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRef(owner, repo, ref, sha, force) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Update reference " + ref;
  var body = {
    "sha": sha,
    "force": force,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRef(owner, repo, ref) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Delete reference " + ref;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingReference(owner, repo, ref, sha, force) {
  return createRef(owner, repo, ref, sha);
}

function verifyReferenceExists(owner, repo, ref, sha, force) {
  return getRef(owner, repo, ref);
}

function verifyReferenceDoesNotExist(owner, repo, ref, sha, force) {
  return getRef(owner, repo, ref);
}

function tryToDeleteANonExistingReference(owner, repo, ref, sha, force) {
  return deleteRef(owner, repo, ref);
}

// ---- Entity: tag ----

function createTag(owner, repo, tag, message, object, type, tagger) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags";
  var description = "Create tag " + tag;
  var body = {
    "tag": tag,
    "message": message,
    "object": object,
    "type": type,
    "tagger": tagger,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTag(owner, repo, tag_sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + tag_sha;
  var description = "Get tag " + tag_sha;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTag(owner, repo, tag, message, object, type, tagger, tag_sha) {
  return createTag(owner, repo, tag, message, object, type, tagger);
}

function verifyTagExists(owner, repo, tag, message, object, type, tagger, tag_sha) {
  return getTag(owner, repo, tag_sha);
}

function verifyTagDoesNotExist(owner, repo, tag, message, object, type, tagger, tag_sha) {
  return getTag(owner, repo, tag_sha);
}

// ---- Entity: tree ----

function createTree(owner, repo, tree, base_tree) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees";
  var description = "Create tree with base " + base_tree;
  var body = {
    "tree": tree,
    "base_tree": base_tree,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTree(owner, repo, tree_sha, recursive) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + tree_sha;
  var description = "Get tree " + tree_sha;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTree(owner, repo, tree, base_tree, tree_sha, recursive) {
  return createTree(owner, repo, tree, base_tree);
}

function verifyTreeExists(owner, repo, tree, base_tree, tree_sha, recursive) {
  return getTree(owner, repo, tree_sha, recursive);
}

function verifyTreeDoesNotExist(owner, repo, tree, base_tree, tree_sha, recursive) {
  return getTree(owner, repo, tree_sha, recursive);
}

// ---- Entity: gist ----

function createGist(description) {
  var url = "/gists";
  var description = "Create a gist " + description;
  var body = {
    "description": description,
    "files": files,
    "public": public,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteGist(gist_id) {
  var url = "/gists/" + gist_id;
  var description = "Delete gist " + gist_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateGist(gist_id, description) {
  var url = "/gists/" + gist_id;
  var description = "Update gist " + gist_id + " with description " + description;
  var body = {
    "description": description,
    "files": files,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getGist(gist_id) {
  var url = "/gists/" + gist_id;
  var description = "Get gist " + gist_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGist(description, gist_id) {
  return createGist(description);
}

function verifyGistExists(description, gist_id) {
  return getGist(gist_id);
}

function verifyGistDoesNotExist(description, gist_id) {
  return getGist(gist_id);
}

function tryToDeleteANonExistingGist(description, gist_id) {
  return deleteGist(gist_id);
}

// ---- Entity: gist comment ----

function createGistComment(gist_id, body) {
  var url = "/gists/" + gist_id + "/comments";
  var description = "Create a comment on gist " + gist_id + " with body " + body;
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

function deleteGistComment(gist_id, comment_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Delete comment " + comment_id + " on gist " + gist_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateGistComment(gist_id, comment_id, body) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Update comment " + comment_id + " on gist " + gist_id + " with body " + body;
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

function getGistComment(gist_id, comment_id) {
  var url = "/gists/" + gist_id + "/comments/" + comment_id;
  var description = "Get comment " + comment_id + " on gist " + gist_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGistComment(gist_id, body, comment_id) {
  return createGistComment(gist_id, body);
}

function verifyGistCommentExists(gist_id, body, comment_id) {
  return getGistComment(gist_id, comment_id);
}

function verifyGistCommentDoesNotExist(gist_id, body, comment_id) {
  return getGistComment(gist_id, comment_id);
}

function tryToDeleteANonExistingGistComment(gist_id, body, comment_id) {
  return deleteGistComment(gist_id, comment_id);
}

// ---- Entity: organization project ----

function createOrgProject(org, name) {
  var url = "/orgs/" + org + "/projects";
  var description = "Create organization project " + name;
  var body = {
    "name": name,
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listOrgProjects(org) {
  var url = "/orgs/" + org + "/projects";
  var description = "List projects for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganizationProject(org, name) {
  return createOrgProject(org, name);
}

function verifyOrganizationProjectExists(org, name) {
  return listOrgProjects(org);
}

function verifyOrganizationProjectDoesNotExist(org, name) {
  return listOrgProjects(org);
}

// ---- Entity: project column ----

function getProjectColumn(column_id) {
  var url = "/projects/columns/" + column_id;
  var description = "Get project column " + column_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProjectColumn(column_id, name) {
  var url = "/projects/columns/" + column_id;
  var description = "Update project column " + column_id + " with name " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProjectColumn(column_id) {
  var url = "/projects/columns/" + column_id;
  var description = "Delete project column " + column_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function moveProjectColumn(column_id, position) {
  var url = "/projects/columns/" + column_id + "/moves";
  var description = "Move project column " + column_id + " to position " + position;
  var body = {
    "position": position,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyProjectColumnExists(column_id, name, position) {
  return getProjectColumn(column_id);
}

function verifyProjectColumnDoesNotExist(column_id, name, position) {
  return getProjectColumn(column_id);
}

function tryToDeleteANonExistingProjectColumn(column_id, name, position) {
  return deleteProjectColumn(column_id);
}

// ---- Entity: project collaborator ----

function addProjectCollaborator(project_id, username, permission) {
  var url = "/projects/" + project_id + "/collaborators/" + username;
  var description = "Add collaborator " + username + " to project " + project_id + " with permission " + permission;
  var body = {
    "permission": permission,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeProjectCollaborator(project_id, username) {
  var url = "/projects/" + project_id + "/collaborators/" + username;
  var description = "Remove collaborator " + username + " from project " + project_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getProjectCollaboratorPermission(project_id, username) {
  var url = "/projects/" + project_id + "/collaborators/" + username + "/permission";
  var description = "Get permission for collaborator " + username + " on project " + project_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProjectCollaborator(project_id, username, permission) {
  return addProjectCollaborator(project_id, username, permission);
}

function tryToDeleteANonExistingProjectCollaborator(project_id, username, permission) {
  return removeProjectCollaborator(project_id, username);
}

// ---- Entity: project column collection ----

function listProjectColumns(project_id) {
  var url = "/projects/" + project_id + "/columns";
  var description = "List columns for project " + project_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createProjectColumn(project_id, name) {
  var url = "/projects/" + project_id + "/columns";
  var description = "Create project column " + name + " in project " + project_id;
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

function tryToAddExistingProjectColumnCollection(project_id, name) {
  return createProjectColumn(project_id, name);
}

function verifyProjectColumnCollectionExists(project_id, name) {
  return listProjectColumns(project_id);
}

function verifyProjectColumnCollectionDoesNotExist(project_id, name) {
  return listProjectColumns(project_id);
}

// ---- Entity: repository project ----

function createRepoProject(owner, repo, name) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "Create repository project " + name + " in " + owner + "/" + repo;
  var body = {
    "name": name,
    "body": body,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listRepoProjects(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/projects";
  var description = "List projects for repository " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepositoryProject(owner, repo, name) {
  return createRepoProject(owner, repo, name);
}

function verifyRepositoryProjectExists(owner, repo, name) {
  return listRepoProjects(owner, repo);
}

function verifyRepositoryProjectDoesNotExist(owner, repo, name) {
  return listRepoProjects(owner, repo);
}

// ---- Entity: user projects ----

function listUserProjects(username) {
  var url = "/users/" + username + "/projects";
  var description = "List projects for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserProjectsExists(username) {
  return listUserProjects(username);
}

function verifyUserProjectsDoesNotExist(username) {
  return listUserProjects(username);
}

// ---- Entity: check run ----

function createCheckRun(owner, repo, name, head_sha) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs";
  var description = "Create check run " + name + " on repo " + repo + " of " + owner;
  var body = {
    "name": name,
    "head_sha": head_sha,
    "details_url": details_url,
    "external_id": external_id,
    "status": status,
    "started_at": started_at,
    "conclusion": conclusion,
    "completed_at": completed_at,
    "output": output,
    "actions": actions,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCheckRun(owner, repo, check_run_id) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id;
  var description = "Get check run " + check_run_id + " on repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCheckRun(owner, repo, check_run_id, name) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id;
  var description = "Update check run " + check_run_id + " on repo " + repo + " of " + owner;
  var body = {
    "name": name,
    "details_url": details_url,
    "external_id": external_id,
    "started_at": started_at,
    "status": status,
    "conclusion": conclusion,
    "completed_at": completed_at,
    "output": output,
    "actions": actions,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCheckRun(owner, repo, name, head_sha, check_run_id) {
  return createCheckRun(owner, repo, name, head_sha);
}

function verifyCheckRunExists(owner, repo, name, head_sha, check_run_id) {
  return getCheckRun(owner, repo, check_run_id);
}

function verifyCheckRunDoesNotExist(owner, repo, name, head_sha, check_run_id) {
  return getCheckRun(owner, repo, check_run_id);
}

// ---- Entity: check run annotation ----

function listCheckRunAnnotations(owner, repo, check_run_id) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id + "/annotations";
  var description = "List annotations for check run " + check_run_id + " on repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCheckRunAnnotationExists(owner, repo, check_run_id) {
  return listCheckRunAnnotations(owner, repo, check_run_id);
}

function verifyCheckRunAnnotationDoesNotExist(owner, repo, check_run_id) {
  return listCheckRunAnnotations(owner, repo, check_run_id);
}

// ---- Entity: check run rerequest ----

function rerequestCheckRun(owner, repo, check_run_id) {
  var url = "/repos/" + owner + "/" + repo + "/check-runs/" + check_run_id + "/rerequest";
  var description = "Rerequest check run " + check_run_id + " on repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCheckRunRerequest(owner, repo, check_run_id) {
  return rerequestCheckRun(owner, repo, check_run_id);
}

// ---- Entity: check suite ----

function createCheckSuite(owner, repo, head_sha) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites";
  var description = "Create check suite on repo " + repo + " of " + owner;
  var body = {
    "head_sha": head_sha,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCheckSuite(owner, repo, check_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites/" + check_suite_id;
  var description = "Get check suite " + check_suite_id + " on repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCheckSuitePreferences(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites/preferences";
  var description = "Update check suite preferences on repo " + repo + " of " + owner;
  var body = {
    "auto_trigger_checks": auto_trigger_checks,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCheckSuite(owner, repo, head_sha, check_suite_id) {
  return createCheckSuite(owner, repo, head_sha);
}

function verifyCheckSuiteExists(owner, repo, head_sha, check_suite_id) {
  return getCheckSuite(owner, repo, check_suite_id);
}

function verifyCheckSuiteDoesNotExist(owner, repo, head_sha, check_suite_id) {
  return getCheckSuite(owner, repo, check_suite_id);
}

// ---- Entity: check suite check runs ----

function listCheckRunsForSuite(owner, repo, check_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites/" + check_suite_id + "/check-runs";
  var description = "List check runs for check suite " + check_suite_id + " on repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCheckSuiteCheckRunsExists(owner, repo, check_suite_id) {
  return listCheckRunsForSuite(owner, repo, check_suite_id);
}

function verifyCheckSuiteCheckRunsDoesNotExist(owner, repo, check_suite_id) {
  return listCheckRunsForSuite(owner, repo, check_suite_id);
}

// ---- Entity: check suite rerequest ----

function rerequestCheckSuite(owner, repo, check_suite_id) {
  var url = "/repos/" + owner + "/" + repo + "/check-suites/" + check_suite_id + "/rerequest";
  var description = "Rerequest check suite " + check_suite_id + " on repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCheckSuiteRerequest(owner, repo, check_suite_id) {
  return rerequestCheckSuite(owner, repo, check_suite_id);
}

// ---- Entity: organization billing ----

function getOrgBillingUsage(org, year, month, day, hour) {
  var url = "/organizations/" + org + "/settings/billing/usage";
  var description = "Get billing usage report for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBillingExists(org, year, month, day, hour) {
  return getOrgBillingUsage(org, year, month, day, hour);
}

function verifyOrganizationBillingDoesNotExist(org, year, month, day, hour) {
  return getOrgBillingUsage(org, year, month, day, hour);
}

// ---- Entity: organization billing premium request usage ----

function getOrgBillingPremiumRequestUsage(org, year, month, day, user, model, product) {
  var url = "/organizations/" + org + "/settings/billing/premium_request/usage";
  var description = "Get billing premium request usage report for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBillingPremiumRequestUsageExists(org, year, month, day, user, model, product) {
  return getOrgBillingPremiumRequestUsage(org, year, month, day, user, model, product);
}

function verifyOrganizationBillingPremiumRequestUsageDoesNotExist(org, year, month, day, user, model, product) {
  return getOrgBillingPremiumRequestUsage(org, year, month, day, user, model, product);
}

// ---- Entity: organization billing actions ----

function getOrgBillingActions(org) {
  var url = "/orgs/" + org + "/settings/billing/actions";
  var description = "Get GitHub Actions billing for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBillingActionsExists(org) {
  return getOrgBillingActions(org);
}

function verifyOrganizationBillingActionsDoesNotExist(org) {
  return getOrgBillingActions(org);
}

// ---- Entity: organization billing packages ----

function getOrgBillingPackages(org) {
  var url = "/orgs/" + org + "/settings/billing/packages";
  var description = "Get GitHub Packages billing for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBillingPackagesExists(org) {
  return getOrgBillingPackages(org);
}

function verifyOrganizationBillingPackagesDoesNotExist(org) {
  return getOrgBillingPackages(org);
}

// ---- Entity: organization billing shared storage ----

function getOrgBillingSharedStorage(org) {
  var url = "/orgs/" + org + "/settings/billing/shared-storage";
  var description = "Get shared storage billing for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrganizationBillingSharedStorageExists(org) {
  return getOrgBillingSharedStorage(org);
}

function verifyOrganizationBillingSharedStorageDoesNotExist(org) {
  return getOrgBillingSharedStorage(org);
}

// ---- Entity: user billing actions ----

function getUserBillingActions(username) {
  var url = "/users/" + username + "/settings/billing/actions";
  var description = "Get GitHub Actions billing for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserBillingActionsExists(username) {
  return getUserBillingActions(username);
}

function verifyUserBillingActionsDoesNotExist(username) {
  return getUserBillingActions(username);
}

// ---- Entity: user billing packages ----

function getUserBillingPackages(username) {
  var url = "/users/" + username + "/settings/billing/packages";
  var description = "Get GitHub Packages billing for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserBillingPackagesExists(username) {
  return getUserBillingPackages(username);
}

function verifyUserBillingPackagesDoesNotExist(username) {
  return getUserBillingPackages(username);
}

// ---- Entity: user billing premium request usage ----

function getUserBillingPremiumRequestUsage(username, year, month, day, model, product) {
  var url = "/users/" + username + "/settings/billing/premium_request/usage";
  var description = "Get billing premium request usage report for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserBillingPremiumRequestUsageExists(username, year, month, day, model, product) {
  return getUserBillingPremiumRequestUsage(username, year, month, day, model, product);
}

function verifyUserBillingPremiumRequestUsageDoesNotExist(username, year, month, day, model, product) {
  return getUserBillingPremiumRequestUsage(username, year, month, day, model, product);
}

// ---- Entity: user billing shared storage ----

function getUserBillingSharedStorage(username) {
  var url = "/users/" + username + "/settings/billing/shared-storage";
  var description = "Get shared storage billing for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserBillingSharedStorageExists(username) {
  return getUserBillingSharedStorage(username);
}

function verifyUserBillingSharedStorageDoesNotExist(username) {
  return getUserBillingSharedStorage(username);
}

// ---- Entity: user billing usage ----

function getUserBillingUsage(username, year, month, day, hour) {
  var url = "/users/" + username + "/settings/billing/usage";
  var description = "Get billing usage report for user " + username;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserBillingUsageExists(username, year, month, day, hour) {
  return getUserBillingUsage(username, year, month, day, hour);
}

function verifyUserBillingUsageDoesNotExist(username, year, month, day, hour) {
  return getUserBillingUsage(username, year, month, day, hour);
}

// ---- Entity: security advisory ----

function getGlobalAdvisory(ghsa_id) {
  var url = "/advisories/" + ghsa_id;
  var description = "Get global security advisory " + ghsa_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listGlobalAdvisories() {
  var url = "/advisories";
  var description = "List global security advisories";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySecurityAdvisoryExists(ghsa_id) {
  return getGlobalAdvisory(ghsa_id);
}

function verifySecurityAdvisoryDoesNotExist(ghsa_id) {
  return getGlobalAdvisory(ghsa_id);
}

// ---- Entity: organization security advisory ----

function listOrgRepositoryAdvisories(org) {
  var url = "/orgs/" + org + "/security-advisories";
  var description = "List repository security advisories for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: repository security advisory ----

function listRepositoryAdvisories(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories";
  var description = "List repository security advisories for " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createRepositoryAdvisory(owner, repo, summary) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories";
  var description = "Create repository security advisory in " + owner + "/" + repo + " with summary " + summary;
  var body = {
    "summary": summary,
    "description": description,
    "severity": severity,
    "cve_id": cve_id,
    "vulnerabilities": vulnerabilities,
    "cwe_ids": cwe_ids,
    "credits": credits,
    "cvss_vector_string": cvss_vector_string,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepositoryAdvisory(owner, repo, ghsa_id) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id;
  var description = "Get repository security advisory " + ghsa_id + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepositoryAdvisory(owner, repo, ghsa_id) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id;
  var description = "Update repository security advisory " + ghsa_id + " in " + owner + "/" + repo;
  var body = {
    "severity": severity,
    "state": state,
    "credits": credits,
    "vulnerable_versions": vulnerable_versions,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepositorySecurityAdvisory(owner, repo, summary, ghsa_id) {
  return createRepositoryAdvisory(owner, repo, summary);
}

function verifyRepositorySecurityAdvisoryExists(owner, repo, summary, ghsa_id) {
  return getRepositoryAdvisory(owner, repo, ghsa_id);
}

function verifyRepositorySecurityAdvisoryDoesNotExist(owner, repo, summary, ghsa_id) {
  return getRepositoryAdvisory(owner, repo, ghsa_id);
}

// ---- Entity: private vulnerability report ----

function createPrivateVulnerabilityReport(owner, repo, summary) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/reports";
  var description = "Privately report a security vulnerability in " + owner + "/" + repo + " with summary " + summary;
  var body = {
    "summary": summary,
    "description": description,
    "severity": severity,
    "vulnerabilities": vulnerabilities,
    "cwe_ids": cwe_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPrivateVulnerabilityReport(owner, repo, summary) {
  return createPrivateVulnerabilityReport(owner, repo, summary);
}

// ---- Entity: repository advisory CVE request ----

function createRepositoryAdvisoryCVERequest(owner, repo, ghsa_id) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id + "/cve";
  var description = "Request a CVE for repository security advisory " + ghsa_id + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepositoryAdvisoryCVERequest(owner, repo, ghsa_id) {
  return createRepositoryAdvisoryCVERequest(owner, repo, ghsa_id);
}

// ---- Entity: repository advisory fork ----

function createFork(owner, repo, ghsa_id) {
  var url = "/repos/" + owner + "/" + repo + "/security-advisories/" + ghsa_id + "/forks";
  var description = "Create a temporary private fork for repository security advisory " + ghsa_id + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepositoryAdvisoryFork(owner, repo, ghsa_id) {
  return createFork(owner, repo, ghsa_id);
}

// ---- Entity: secret scanning alert ----

function getAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number;
  var description = "Get secret scanning alert " + alert_number + " for " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number;
  var description = "Update secret scanning alert " + alert_number + " for " + owner + "/" + repo;
  var body = {
    "state": state,
    "resolution": resolution,
    "resolution_comment": resolution_comment,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySecretScanningAlertExists(owner, repo, alert_number) {
  return getAlert(owner, repo, alert_number);
}

function verifySecretScanningAlertDoesNotExist(owner, repo, alert_number) {
  return getAlert(owner, repo, alert_number);
}

// ---- Entity: secret scanning alerts ----

function listAlertsForRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts";
  var description = "List secret scanning alerts for " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySecretScanningAlertsExists(owner, repo) {
  return listAlertsForRepo(owner, repo);
}

function verifySecretScanningAlertsDoesNotExist(owner, repo) {
  return listAlertsForRepo(owner, repo);
}

// ---- Entity: enterprise secret scanning alerts ----

function listAlertsForEnterprise(enterprise) {
  var url = "/enterprises/" + enterprise + "/secret-scanning/alerts";
  var description = "List secret scanning alerts for enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyEnterpriseSecretScanningAlertsExists(enterprise) {
  return listAlertsForEnterprise(enterprise);
}

function verifyEnterpriseSecretScanningAlertsDoesNotExist(enterprise) {
  return listAlertsForEnterprise(enterprise);
}

// ---- Entity: organization secret scanning alerts ----

function listAlertsForOrg(org) {
  var url = "/orgs/" + org + "/secret-scanning/alerts";
  var description = "List secret scanning alerts for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgSecretScanningAlertsExists(org) {
  return listAlertsForOrg(org);
}

function verifyOrgSecretScanningAlertsDoesNotExist(org) {
  return listAlertsForOrg(org);
}

// ---- Entity: organization pattern configurations ----

function listOrgPatternConfigs(org) {
  var url = "/orgs/" + org + "/secret-scanning/pattern-configurations";
  var description = "List pattern configurations for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgPatternConfigs(org) {
  var url = "/orgs/" + org + "/secret-scanning/pattern-configurations";
  var description = "Update pattern configurations for organization " + org;
  var body = {
    "pattern_config_version": pattern_config_version,
    "provider_pattern_settings": provider_pattern_settings,
    "custom_pattern_settings": custom_pattern_settings,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgPatternConfigurationsExists(org) {
  return listOrgPatternConfigs(org);
}

function verifyOrgPatternConfigurationsDoesNotExist(org) {
  return listOrgPatternConfigs(org);
}

// ---- Entity: secret scanning alert locations ----

function listLocationsForAlert(owner, repo, alert_number) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/alerts/" + alert_number + "/locations";
  var description = "List locations for secret scanning alert " + alert_number + " in " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySecretScanningAlertLocationsExists(owner, repo, alert_number) {
  return listLocationsForAlert(owner, repo, alert_number);
}

function verifySecretScanningAlertLocationsDoesNotExist(owner, repo, alert_number) {
  return listLocationsForAlert(owner, repo, alert_number);
}

// ---- Entity: push protection bypass ----

function createPushProtectionBypass(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/push-protection-bypasses";
  var description = "Create push protection bypass for " + owner + "/" + repo;
  var body = {
    "reason": reason,
    "placeholder_id": placeholder_id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPushProtectionBypass(owner, repo) {
  return createPushProtectionBypass(owner, repo);
}

// ---- Entity: secret scanning scan history ----

function getScanHistory(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/secret-scanning/scan-history";
  var description = "Get secret scanning scan history for " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySecretScanningScanHistoryExists(owner, repo) {
  return getScanHistory(owner, repo);
}

function verifySecretScanningScanHistoryDoesNotExist(owner, repo) {
  return getScanHistory(owner, repo);
}

// ---- Entity: copilot billing ----

function getCopilotBilling(org) {
  var url = "/orgs/" + org + "/copilot/billing";
  var description = "Get Copilot seat information and settings for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCopilotBillingExists(org) {
  return getCopilotBilling(org);
}

function verifyCopilotBillingDoesNotExist(org) {
  return getCopilotBilling(org);
}

// ---- Entity: copilot seat assignments ----

function listCopilotSeats(org) {
  var url = "/orgs/" + org + "/copilot/billing/seats";
  var description = "List all Copilot seat assignments for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCopilotSeatsExists(org) {
  return listCopilotSeats(org);
}

function verifyCopilotSeatsDoesNotExist(org) {
  return listCopilotSeats(org);
}

// ---- Entity: copilot selected teams ----

function addCopilotSeatsForTeams(org, selected_teams) {
  var url = "/orgs/" + org + "/copilot/billing/selected_teams";
  var description = "Add teams to Copilot subscription for organization " + org;
  var body = {
    "selected_teams": selected_teams,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeCopilotSeatsForTeams(org, selected_teams) {
  var url = "/orgs/" + org + "/copilot/billing/selected_teams";
  var description = "Remove teams from Copilot subscription for organization " + org;
  var body = {
    "selected_teams": selected_teams,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCopilotSelectedTeams(org, selected_teams) {
  return addCopilotSeatsForTeams(org, selected_teams);
}

function tryToDeleteANonExistingCopilotSelectedTeams(org, selected_teams) {
  return removeCopilotSeatsForTeams(org, selected_teams);
}

// ---- Entity: copilot selected users ----

function addCopilotSeatsForUsers(org, selected_usernames) {
  var url = "/orgs/" + org + "/copilot/billing/selected_users";
  var description = "Add users to Copilot subscription for organization " + org;
  var body = {
    "selected_usernames": selected_usernames,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeCopilotSeatsForUsers(org, selected_usernames) {
  var url = "/orgs/" + org + "/copilot/billing/selected_users";
  var description = "Remove users from Copilot subscription for organization " + org;
  var body = {
    "selected_usernames": selected_usernames,
  };
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCopilotSelectedUsers(org, selected_usernames) {
  return addCopilotSeatsForUsers(org, selected_usernames);
}

function tryToDeleteANonExistingCopilotSelectedUsers(org, selected_usernames) {
  return removeCopilotSeatsForUsers(org, selected_usernames);
}

// ---- Entity: copilot metrics organization ----

function getCopilotMetricsForOrganization(org, since, until, page, per_page) {
  var url = "/orgs/" + org + "/copilot/metrics";
  var description = "Get Copilot metrics for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCopilotMetricsOrganizationExists(org, since, until, page, per_page) {
  return getCopilotMetricsForOrganization(org, since, until, page, per_page);
}

function verifyCopilotMetricsOrganizationDoesNotExist(org, since, until, page, per_page) {
  return getCopilotMetricsForOrganization(org, since, until, page, per_page);
}

// ---- Entity: copilot seat assignment user ----

function getCopilotSeatDetailsForUser(org, username) {
  var url = "/orgs/" + org + "/members/" + username + "/copilot";
  var description = "Get Copilot seat assignment details for user " + username + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCopilotSeatAssignmentUserExists(org, username) {
  return getCopilotSeatDetailsForUser(org, username);
}

function verifyCopilotSeatAssignmentUserDoesNotExist(org, username) {
  return getCopilotSeatDetailsForUser(org, username);
}

// ---- Entity: copilot metrics team ----

function getCopilotMetricsForTeam(org, team_slug, since, until, page, per_page) {
  var url = "/orgs/" + org + "/team/" + team_slug + "/copilot/metrics";
  var description = "Get Copilot metrics for team " + team_slug + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCopilotMetricsTeamExists(org, team_slug, since, until, page, per_page) {
  return getCopilotMetricsForTeam(org, team_slug, since, until, page, per_page);
}

function verifyCopilotMetricsTeamDoesNotExist(org, team_slug, since, until, page, per_page) {
  return getCopilotMetricsForTeam(org, team_slug, since, until, page, per_page);
}

// ---- Entity: code search ----

function searchCode(q) {
  var url = "/search/code";
  var description = "Search code with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeSearchExists(q) {
  return searchCode(q);
}

function verifyCodeSearchDoesNotExist(q) {
  return searchCode(q);
}

// ---- Entity: commit search ----

function searchCommits(q) {
  var url = "/search/commits";
  var description = "Search commits with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCommitSearchExists(q) {
  return searchCommits(q);
}

function verifyCommitSearchDoesNotExist(q) {
  return searchCommits(q);
}

// ---- Entity: issue search ----

function searchIssues(q) {
  var url = "/search/issues";
  var description = "Search issues and pull requests with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIssueSearchExists(q) {
  return searchIssues(q);
}

function verifyIssueSearchDoesNotExist(q) {
  return searchIssues(q);
}

// ---- Entity: label search ----

function searchLabels(repository_id, q) {
  var url = "/search/labels";
  var description = "Search labels in repository " + repository_id + " with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyLabelSearchExists(repository_id, q) {
  return searchLabels(repository_id, q);
}

function verifyLabelSearchDoesNotExist(repository_id, q) {
  return searchLabels(repository_id, q);
}

// ---- Entity: repository search ----

function searchRepositories(q) {
  var url = "/search/repositories";
  var description = "Search repositories with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepositorySearchExists(q) {
  return searchRepositories(q);
}

function verifyRepositorySearchDoesNotExist(q) {
  return searchRepositories(q);
}

// ---- Entity: topic search ----

function searchTopics(q) {
  var url = "/search/topics";
  var description = "Search topics with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTopicSearchExists(q) {
  return searchTopics(q);
}

function verifyTopicSearchDoesNotExist(q) {
  return searchTopics(q);
}

// ---- Entity: user search ----

function searchUsers(q) {
  var url = "/search/users";
  var description = "Search users with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserSearchExists(q) {
  return searchUsers(q);
}

function verifyUserSearchDoesNotExist(q) {
  return searchUsers(q);
}

// ---- Entity: assignment ----

function getAssignment(assignment_id) {
  var url = "/assignments/" + assignment_id;
  var description = "Get assignment " + assignment_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAssignmentExists(assignment_id) {
  return getAssignment(assignment_id);
}

function verifyAssignmentDoesNotExist(assignment_id) {
  return getAssignment(assignment_id);
}

// ---- Entity: accepted assignment ----

function listAcceptedAssignmentsForAssignment(assignment_id) {
  var url = "/assignments/" + assignment_id + "/accepted_assignments";
  var description = "List accepted assignments for assignment " + assignment_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAcceptedAssignmentExists(assignment_id) {
  return listAcceptedAssignmentsForAssignment(assignment_id);
}

function verifyAcceptedAssignmentDoesNotExist(assignment_id) {
  return listAcceptedAssignmentsForAssignment(assignment_id);
}

// ---- Entity: assignment grades ----

function getAssignmentGrades(assignment_id) {
  var url = "/assignments/" + assignment_id + "/grades";
  var description = "Get assignment grades for " + assignment_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAssignmentGradesExists(assignment_id) {
  return getAssignmentGrades(assignment_id);
}

function verifyAssignmentGradesDoesNotExist(assignment_id) {
  return getAssignmentGrades(assignment_id);
}

// ---- Entity: classroom ----

function getClassroom(classroom_id) {
  var url = "/classrooms/" + classroom_id;
  var description = "Get classroom " + classroom_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyClassroomExists(classroom_id) {
  return getClassroom(classroom_id);
}

function verifyClassroomDoesNotExist(classroom_id) {
  return getClassroom(classroom_id);
}

// ---- Entity: classroom list ----

function listClassrooms() {
  var url = "/classrooms";
  var description = "List classrooms";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyClassroomListExists() {
  return listClassrooms();
}

function verifyClassroomListDoesNotExist() {
  return listClassrooms();
}

// ---- Entity: classroom assignments ----

function listAssignmentsForClassroom(classroom_id) {
  var url = "/classrooms/" + classroom_id + "/assignments";
  var description = "List assignments for classroom " + classroom_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyClassroomAssignmentsExists(classroom_id) {
  return listAssignmentsForClassroom(classroom_id);
}

function verifyClassroomAssignmentsDoesNotExist(classroom_id) {
  return listAssignmentsForClassroom(classroom_id);
}

// ---- Entity: enterprise team membership ----

function addTeamMember(enterprise, enterprise-team, username) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/" + username;
  var description = "Add team member " + username + " to team " + enterprise-team + " in enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeTeamMember(enterprise, enterprise-team, username) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/" + username;
  var description = "Remove team member " + username + " from team " + enterprise-team + " in enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getTeamMembership(enterprise, enterprise-team, username) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/" + username;
  var description = "Get team membership of " + username + " in team " + enterprise-team + " of enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnterpriseTeamMembership(enterprise, enterprise-team, username) {
  return addTeamMember(enterprise, enterprise-team, username);
}

function verifyEnterpriseTeamMembershipExists(enterprise, enterprise-team, username) {
  return getTeamMembership(enterprise, enterprise-team, username);
}

function verifyEnterpriseTeamMembershipDoesNotExist(enterprise, enterprise-team, username) {
  return getTeamMembership(enterprise, enterprise-team, username);
}

function tryToDeleteANonExistingEnterpriseTeamMembership(enterprise, enterprise-team, username) {
  return removeTeamMember(enterprise, enterprise-team, username);
}

// ---- Entity: enterprise team membership bulk ----

function bulkAddTeamMembers(enterprise, enterprise-team, usernames) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/add";
  var description = "Bulk add team members to team " + enterprise-team + " in enterprise " + enterprise;
  var body = {
    "usernames": usernames,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function bulkRemoveTeamMembers(enterprise, enterprise-team, usernames) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships/remove";
  var description = "Bulk remove team members from team " + enterprise-team + " in enterprise " + enterprise;
  var body = {
    "usernames": usernames,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames) {
  return bulkAddTeamMembers(enterprise, enterprise-team, usernames);
}

function tryToDeleteANonExistingEnterpriseTeamMembershipBulk(enterprise, enterprise-team, usernames) {
  return bulkRemoveTeamMembers(enterprise, enterprise-team, usernames);
}

// ---- Entity: enterprise team membership list ----

function listTeamMembers(enterprise, enterprise-team, per-page, page) {
  var url = "/enterprises/" + enterprise + "/teams/" + enterprise-team + "/memberships";
  var description = "List members in team " + enterprise-team + " of enterprise " + enterprise;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyEnterpriseTeamMembershipListExists(enterprise, enterprise-team, per-page, page) {
  return listTeamMembers(enterprise, enterprise-team, per-page, page);
}

function verifyEnterpriseTeamMembershipListDoesNotExist(enterprise, enterprise-team, per-page, page) {
  return listTeamMembers(enterprise, enterprise-team, per-page, page);
}

// ---- Entity: license ----

function getLicense(license) {
  var url = "/licenses/" + license;
  var description = "Get license " + license;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listLicenses() {
  var url = "/licenses";
  var description = "Get all commonly used licenses";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyLicenseExists(license) {
  return getLicense(license);
}

function verifyLicenseDoesNotExist(license) {
  return getLicense(license);
}

// ---- Entity: repository license ----

function getRepoLicense(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/license";
  var description = "Get the license for repository " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepositoryLicenseExists(owner, repo) {
  return getRepoLicense(owner, repo);
}

function verifyRepositoryLicenseDoesNotExist(owner, repo) {
  return getRepoLicense(owner, repo);
}

// ---- Entity: organization interaction limit ----

function getOrgInteractionLimit(org) {
  var url = "/orgs/" + org + "/interaction-limits";
  var description = "Get interaction restrictions for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setOrgInteractionLimit(org) {
  var url = "/orgs/" + org + "/interaction-limits";
  var description = "Set interaction restrictions for organization " + org;
  var body = {
    "limit": limit,
    "expiry": expiry,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeOrgInteractionLimit(org) {
  var url = "/orgs/" + org + "/interaction-limits";
  var description = "Remove interaction restrictions for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyOrgInteractionLimitExists(org) {
  return getOrgInteractionLimit(org);
}

function verifyOrgInteractionLimitDoesNotExist(org) {
  return getOrgInteractionLimit(org);
}

function tryToDeleteANonExistingOrgInteractionLimit(org) {
  return removeOrgInteractionLimit(org);
}

// ---- Entity: repository interaction limit ----

function getRepoInteractionLimit(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/interaction-limits";
  var description = "Get interaction restrictions for repository " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setRepoInteractionLimit(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/interaction-limits";
  var description = "Set interaction restrictions for repository " + repo + " of " + owner;
  var body = {
    "limit": limit,
    "expiry": expiry,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeRepoInteractionLimit(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/interaction-limits";
  var description = "Remove interaction restrictions for repository " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRepoInteractionLimitExists(owner, repo) {
  return getRepoInteractionLimit(owner, repo);
}

function verifyRepoInteractionLimitDoesNotExist(owner, repo) {
  return getRepoInteractionLimit(owner, repo);
}

function tryToDeleteANonExistingRepoInteractionLimit(owner, repo) {
  return removeRepoInteractionLimit(owner, repo);
}

// ---- Entity: user interaction limit ----

function getUserInteractionLimit() {
  var url = "/user/interaction-limits";
  var description = "Get interaction restrictions for your public repositories";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function setUserInteractionLimit() {
  var url = "/user/interaction-limits";
  var description = "Set interaction restrictions for your public repositories";
  var body = {
    "limit": limit,
    "expiry": expiry,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function removeUserInteractionLimit() {
  var url = "/user/interaction-limits";
  var description = "Remove interaction restrictions from your public repositories";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserInteractionLimitExists() {
  return getUserInteractionLimit();
}

function verifyUserInteractionLimitDoesNotExist() {
  return getUserInteractionLimit();
}

function tryToDeleteANonExistingUserInteractionLimit() {
  return removeUserInteractionLimit();
}

// ---- Entity: private registry ----

function createOrgPrivateRegistry(org, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids) {
  var url = "/orgs/" + org + "/private-registries";
  var description = "Create private registry " + url + " for organization " + org;
  var body = {
    "registry_type": registry_type,
    "url": url,
    "username": username,
    "encrypted_value": encrypted_value,
    "key_id": key_id,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrgPrivateRegistry(org, secret_name) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Get private registry " + secret_name + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrgPrivateRegistry(org, secret_name, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Update private registry " + secret_name + " for organization " + org;
  var body = {
    "registry_type": registry_type,
    "url": url,
    "username": username,
    "encrypted_value": encrypted_value,
    "key_id": key_id,
    "visibility": visibility,
    "selected_repository_ids": selected_repository_ids,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrgPrivateRegistry(org, secret_name) {
  var url = "/orgs/" + org + "/private-registries/" + secret_name;
  var description = "Delete private registry " + secret_name + " for organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPrivateRegistry(org, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids, secret_name) {
  return createOrgPrivateRegistry(org, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids);
}

function verifyPrivateRegistryExists(org, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids, secret_name) {
  return getOrgPrivateRegistry(org, secret_name);
}

function verifyPrivateRegistryDoesNotExist(org, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids, secret_name) {
  return getOrgPrivateRegistry(org, secret_name);
}

function tryToDeleteANonExistingPrivateRegistry(org, registry_type, url, username, encrypted_value, key_id, visibility, selected_repository_ids, secret_name) {
  return deleteOrgPrivateRegistry(org, secret_name);
}

// ---- Entity: network configuration ----

function createNetworkConfiguration(org, name) {
  var url = "/orgs/" + org + "/settings/network-configurations";
  var description = "Create network configuration " + name + " for org " + org;
  var body = {
    "name": name,
    "network_settings_ids": network_settings_ids,
    "compute_service": compute_service,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getNetworkConfiguration(org, network_configuration_id) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Get network configuration " + network_configuration_id + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateNetworkConfiguration(org, network_configuration_id) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Update network configuration " + network_configuration_id + " for org " + org;
  var body = {
    "name": name,
    "network_settings_ids": network_settings_ids,
    "compute_service": compute_service,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteNetworkConfiguration(org, network_configuration_id) {
  var url = "/orgs/" + org + "/settings/network-configurations/" + network_configuration_id;
  var description = "Delete network configuration " + network_configuration_id + " from org " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingNetworkConfiguration(org, name, network_configuration_id) {
  return createNetworkConfiguration(org, name);
}

function verifyNetworkConfigurationExists(org, name, network_configuration_id) {
  return getNetworkConfiguration(org, network_configuration_id);
}

function verifyNetworkConfigurationDoesNotExist(org, name, network_configuration_id) {
  return getNetworkConfiguration(org, network_configuration_id);
}

function tryToDeleteANonExistingNetworkConfiguration(org, name, network_configuration_id) {
  return deleteNetworkConfiguration(org, network_configuration_id);
}

// ---- Entity: network settings ----

function getNetworkSettings(org, network_settings_id) {
  var url = "/orgs/" + org + "/settings/network-settings/" + network_settings_id;
  var description = "Get network settings " + network_settings_id + " for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyNetworkSettingsExists(org, network_settings_id) {
  return getNetworkSettings(org, network_settings_id);
}

function verifyNetworkSettingsDoesNotExist(org, network_settings_id) {
  return getNetworkSettings(org, network_settings_id);
}

// ---- Entity: dependency graph snapshot ----

function createDependencyGraphSnapshot(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/dependency-graph/snapshots";
  var description = "Create a snapshot of dependencies for repo " + repo + " of " + owner;
  var body = {
    "snapshot": snapshot,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDependencyGraphSnapshot(owner, repo) {
  return createDependencyGraphSnapshot(owner, repo);
}

// ---- Entity: dependency graph comparison ----

function getDependencyGraphDiffRange(owner, repo, basehead) {
  var url = "/repos/" + owner + "/" + repo + "/dependency-graph/compare/" + basehead;
  var description = "Get a diff of the dependencies between commits " + basehead + " in repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependencyGraphComparisonExists(owner, repo, basehead) {
  return getDependencyGraphDiffRange(owner, repo, basehead);
}

function verifyDependencyGraphComparisonDoesNotExist(owner, repo, basehead) {
  return getDependencyGraphDiffRange(owner, repo, basehead);
}

// ---- Entity: dependency graph sbom ----

function exportDependencyGraphSBOM(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/dependency-graph/sbom";
  var description = "Export a software bill of materials (SBOM) for repo " + repo + " of " + owner;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDependencyGraphSBOMExists(owner, repo) {
  return exportDependencyGraphSBOM(owner, repo);
}

function verifyDependencyGraphSBOMDoesNotExist(owner, repo) {
  return exportDependencyGraphSBOM(owner, repo);
}

// ---- Entity: code of conduct ----

function getCodeOfConduct(key) {
  var url = "/codes_of_conduct/" + key;
  var description = "Get code of conduct " + key;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listCodesOfConduct() {
  var url = "/codes_of_conduct";
  var description = "Get all codes of conduct";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCodeOfConductExists(key) {
  return getCodeOfConduct(key);
}

function verifyCodeOfConductDoesNotExist(key) {
  return getCodeOfConduct(key);
}
